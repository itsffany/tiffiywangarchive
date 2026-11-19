#!/usr/bin/env python3
"""Build English portfolio page images while preserving the source PDF artwork."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

import pdfplumber
from PIL import Image, ImageDraw, ImageFont, ImageStat


ROOT = Path(__file__).resolve().parents[1]
COPY_PATH = Path("/private/tmp/portfolio-copy.json")
FONT_REGULAR = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
CJK = re.compile(r"[\u3400-\u9fff]")

PROJECTS = {
    "clinical-copilot": {
        "slug": "wire-field",
        "pdf": Path("/Users/tiffanywang/Desktop/Wire_Field_AR_中文作品集_v5.pdf"),
        "ink": "#221f30",
        "muted": "#625e6d",
        "accent": "#7a55dd",
    },
    "studio-index": {
        "slug": "walter",
        "pdf": Path("/Users/tiffanywang/Desktop/Walk_with_Walter_中文产品设计作品集.pdf"),
        "ink": "#173033",
        "muted": "#597073",
        "accent": "#177681",
    },
    "atlas-operations": {
        "slug": "ar-memory-garden",
        "pdf": Path("/Users/tiffanywang/Desktop/AR_Memory_Garden_中文交互设计作品集.pdf"),
        "ink": "#20261f",
        "muted": "#636b61",
        "accent": "#79a928",
    },
    "memory-field": {
        "slug": "petjojo",
        "pdf": Path("/Users/tiffanywang/Desktop/PetJoJo_中文产品设计作品集_去除底部说明.pdf"),
        "ink": "#312b24",
        "muted": "#6c655b",
        "accent": "#b67b25",
    },
}

# Normalized placement rectangles: x, y, width, height.
ANCHORS = {
    "clinical-copilot": {
        2: [(0.07, .35, .25, .20), (.38, .35, .25, .20), (.69, .35, .25, .20), (.05, .67, .90, .20)],
        3: [(.23, .30, .70, .15), (.23, .49, .70, .15), (.23, .67, .70, .16)],
        4: [(.11, .30, .42, .38), (.62, .29, .33, .25), (.62, .61, .33, .24)],
        5: [(.05, .37, .20, .34), (.28, .37, .20, .34), (.51, .37, .20, .34), (.74, .37, .20, .34)],
        6: [(.51, .29, .43, .16), (.51, .47, .43, .16), (.51, .65, .43, .17)],
        7: [(.08, .78, .24, .14), (.39, .78, .24, .14), (.70, .78, .24, .14)],
        8: [(.08, .78, .24, .14), (.39, .78, .24, .14), (.70, .78, .24, .14)],
        9: [(.59, .30, .35, .17), (.59, .51, .35, .17), (.59, .72, .35, .17)],
        10: [(.05, .28, .90, .13), (.05, .46, .43, .35), (.53, .46, .42, .35)],
        11: [(.05, .35, .27, .24), (.36, .35, .27, .24), (.67, .35, .28, .24), (.05, .64, .43, .24)],
    },
    "studio-index": {
        2: [(.58, .31, .35, .16), (.58, .49, .35, .16), (.58, .68, .35, .18)],
        3: [(.64, .31, .31, .16), (.64, .49, .31, .16), (.64, .68, .31, .18)],
        4: [(.09, .32, .39, .22), (.56, .32, .39, .22), (.09, .60, .39, .22), (.56, .60, .39, .22)],
        5: [(.05, .30, .27, .21), (.36, .30, .27, .21), (.67, .30, .28, .21), (.05, .58, .90, .28)],
        6: [(.07, .31, .27, .54), (.39, .31, .27, .54), (.70, .31, .25, .54)],
        7: [(.64, .31, .31, .16), (.64, .49, .31, .16), (.64, .68, .31, .18)],
        8: [(.09, .32, .27, .18), (.40, .32, .27, .18), (.71, .32, .24, .18), (.09, .56, .27, .18), (.40, .56, .27, .18), (.71, .56, .24, .18)],
        9: [(.54, .34, .40, .14), (.54, .49, .40, .14), (.54, .66, .40, .22)],
        10: [(.51, .34, .43, .14), (.51, .46, .43, .14), (.51, .61, .43, .27)],
        11: [(.05, .31, .90, .12), (.05, .44, .90, .12), (.05, .57, .90, .12), (.05, .70, .90, .16)],
        12: [(.04, .38, .27, .25), (.35, .38, .27, .25), (.67, .38, .28, .25)],
    },
    "atlas-operations": {
        2: [(.52, .32, .42, .15), (.52, .51, .42, .15), (.52, .70, .42, .16)],
        3: [(.09, .33, .27, .34), (.41, .33, .27, .34), (.72, .33, .23, .34)],
        4: [(.07, .74, .25, .17), (.39, .74, .25, .17), (.70, .74, .25, .17)],
        5: [(.04, .80, .43, .13), (.53, .80, .42, .13)],
        6: [(.07, .81, .25, .12), (.38, .81, .25, .12), (.72, .81, .23, .12)],
        7: [(.04, .83, .27, .10), (.35, .83, .27, .10), (.67, .83, .28, .10)],
        8: [(.75, .33, .20, .19), (.75, .58, .20, .19), (.46, .78, .49, .14)],
        9: [(.70, .31, .25, .16), (.70, .50, .25, .16), (.70, .69, .25, .17)],
        10: [(.09, .84, .22, .09), (.36, .84, .22, .09), (.64, .84, .22, .09)],
        11: [(.07, .85, .24, .08), (.37, .85, .24, .08), (.67, .85, .24, .08)],
        12: [(.06, .32, .41, .46), (.53, .32, .41, .46)],
        13: [(.37, .31, .58, .16), (.37, .50, .58, .16), (.37, .70, .58, .17)],
    },
    "memory-field": {
        2: [(.64, .31, .30, .14), (.64, .48, .30, .14), (.64, .66, .30, .16)],
        3: [(.49, .31, .45, .14), (.49, .49, .45, .14), (.49, .67, .45, .16)],
        4: [(.04, .46, .27, .27), (.35, .46, .27, .27), (.67, .46, .28, .27)],
        5: [(.05, .31, .90, .12), (.05, .44, .90, .12), (.05, .57, .90, .12), (.05, .70, .90, .14)],
        6: [(.63, .30, .31, .15), (.63, .49, .31, .15), (.63, .67, .31, .17)],
        7: [(.60, .31, .34, .15), (.60, .49, .34, .15), (.60, .67, .34, .17)],
        8: [(.78, .31, .17, .15), (.78, .49, .17, .15), (.78, .67, .17, .18)],
        9: [(.65, .31, .30, .15), (.65, .49, .30, .15), (.65, .67, .30, .17)],
        10: [(.65, .31, .30, .15), (.65, .49, .30, .15), (.65, .67, .30, .17)],
        11: [(.65, .31, .30, .15), (.65, .49, .30, .15), (.65, .67, .30, .17)],
        12: [(.65, .31, .30, .15), (.65, .49, .30, .15), (.65, .67, .30, .17)],
        13: [(.65, .31, .30, .15), (.65, .49, .30, .15), (.65, .67, .30, .17)],
        14: [(.04, .39, .27, .22), (.35, .39, .27, .22), (.67, .39, .28, .22), (.04, .67, .90, .18)],
    },
}


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(FONT_BOLD if bold else FONT_REGULAR, max(8, int(size)))


def fill_from_region(image: Image.Image, rect: tuple[int, int, int, int]) -> tuple[int, int, int]:
    x0, y0, x1, y1 = rect
    x0, y0 = max(0, x0), max(0, y0)
    x1, y1 = min(image.width, x1), min(image.height, y1)
    crop = image.crop((x0, y0, x1, y1))
    if crop.width == 0 or crop.height == 0:
        return (248, 248, 248)
    return tuple(int(v) for v in ImageStat.Stat(crop).median[:3])


def clear_rect(image: Image.Image, draw: ImageDraw.ImageDraw, rect: tuple[int, int, int, int], pad: int = 2) -> None:
    x0, y0, x1, y1 = rect
    sample = (max(0, x0 - pad * 3), max(0, y0 - pad * 3), min(image.width, x1 + pad * 3), min(image.height, y1 + pad * 3))
    color = fill_from_region(image, sample)
    draw.rectangle((x0 - pad, y0 - pad, x1 + pad, y1 + pad), fill=color)


def wrap(draw: ImageDraw.ImageDraw, text: str, face: ImageFont.FreeTypeFont, width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        test = word if not current else f"{current} {word}"
        if draw.textlength(test, font=face) <= width or not current:
            current = test
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def fit_text(draw: ImageDraw.ImageDraw, text: str, rect: tuple[int, int, int, int], color: str, start_size: int, bold: bool = False, spacing: float = 1.32) -> int:
    x0, y0, x1, y1 = rect
    for size in range(start_size, 7, -1):
        face = font(size, bold)
        lines = wrap(draw, text, face, x1 - x0)
        line_height = int(size * spacing)
        if len(lines) * line_height <= y1 - y0:
            y = y0
            for line in lines:
                draw.text((x0, y), line, font=face, fill=color)
                y += line_height
            return y
    return y0


def remove_chinese(image: Image.Image, draw: ImageDraw.ImageDraw, page, sx: float, sy: float) -> None:
    for word in page.extract_words(use_text_flow=True):
        if not CJK.search(word["text"]):
            continue
        rect = (
            int(word["x0"] * sx),
            int(word["top"] * sy),
            int(word["x1"] * sx),
            int(word["bottom"] * sy),
        )
        clear_rect(image, draw, rect, pad=max(2, int(2 * sy)))


def draw_cover(draw: ImageDraw.ImageDraw, image: Image.Image, project_id: str, page_copy: dict, colors: dict) -> None:
    w, h = image.size
    if project_id == "clinical-copilot":
        fit_text(draw, "Electric Field of a Charged Straight Wire", (int(.05*w), int(.43*h), int(.42*w), int(.48*h)), "#ffffff", int(.022*h), True)
        fit_text(draw, "Augmented Reality Learning Experience", (int(.05*w), int(.49*h), int(.42*w), int(.54*h)), "#ffffff", int(.019*h))
        fit_text(draw, page_copy["intro"], (int(.05*w), int(.58*h), int(.42*w), int(.75*h)), "#d9d7e1", int(.018*h))
        fit_text(draw, "PREDICT -> FEEDBACK -> EXPLORE -> REFLECT", (int(.05*w), int(.86*h), int(.48*w), int(.91*h)), "#ffffff", int(.012*h), True)
    elif project_id == "studio-index":
        fit_text(draw, page_copy["intro"], (int(.05*w), int(.62*h), int(.46*w), int(.72*h)), "#ffffff", int(.027*h), False)
        fit_text(draw, "CONTENT STRATEGY / EXPERIENCE STRUCTURE / UI·UX / VIDEO", (int(.05*w), int(.91*h), int(.55*w), int(.95*h)), "#d5e1df", int(.012*h), True)
    elif project_id == "atlas-operations":
        fit_text(draw, "Plant memories into everyday space", (int(.04*w), int(.49*h), int(.37*w), int(.56*h)), colors["ink"], int(.036*h), True)
        fit_text(draw, "A virtual plant carries a personal memory into the physical world. Encounter it again in a familiar place and continue the relationship through interaction.", (int(.04*w), int(.59*h), int(.37*w), int(.73*h)), colors["muted"], int(.019*h))
        fit_text(draw, "EXPERIENCE DESIGN / INTERACTION DESIGN / 3D ASSETS", (int(.04*w), int(.91*h), int(.40*w), int(.95*h)), colors["ink"], int(.012*h), True)
    else:
        fit_text(draw, "Clearer choices.\nMore confident purchases.", (int(.04*w), int(.32*h), int(.40*w), int(.44*h)), colors["ink"], int(.047*h), True)
        fit_text(draw, page_copy["columns"][0]["body"], (int(.04*w), int(.49*h), int(.40*w), int(.62*h)), colors["muted"], int(.018*h))
        fit_text(draw, "Tiffany Wang · UI/UX Designer", (int(.04*w), int(.83*h), int(.40*w), int(.88*h)), colors["ink"], int(.015*h), True)


def render_project(project_id: str, config: dict, copy_pages: list[dict]) -> None:
    slug = config["slug"]
    source_dir = ROOT / "public/projects/pdf-portfolios" / slug
    output_dir = ROOT / "public/projects/pdf-portfolios" / f"{slug}-en"
    output_dir.mkdir(parents=True, exist_ok=True)

    with pdfplumber.open(config["pdf"]) as pdf:
        for page_number, (pdf_page, page_copy) in enumerate(zip(pdf.pages, copy_pages), start=1):
            source = source_dir / f"page-{page_number:02d}.jpg"
            output = output_dir / source.name
            image = Image.open(source).convert("RGB")
            draw = ImageDraw.Draw(image)
            sx, sy = image.width / pdf_page.width, image.height / pdf_page.height
            remove_chinese(image, draw, pdf_page, sx, sy)

            if page_number == 1:
                draw_cover(draw, image, project_id, page_copy, config)
            else:
                w, h = image.size
                # Replace the source page heading as one clean block.
                clear_rect(image, draw, (int(.035*w), int(.025*h), int(.60*w), int(.085*h)), pad=2)
                clear_rect(image, draw, (int(.035*w), int(.115*h), int(.965*w), int(.255*h)), pad=2)
                fit_text(draw, page_copy["section"].upper(), (int(.04*w), int(.035*h), int(.60*w), int(.075*h)), config["accent"], int(.017*h), True)
                fit_text(draw, page_copy["title"], (int(.04*w), int(.13*h), int(.95*w), int(.195*h)), config["ink"], int(.049*h), True, 1.08)
                if page_copy.get("intro"):
                    fit_text(draw, page_copy["intro"], (int(.04*w), int(.205*h), int(.94*w), int(.255*h)), config["muted"], int(.022*h), False, 1.24)

                anchors = ANCHORS[project_id][page_number]
                for column, anchor in zip(page_copy.get("columns", []), anchors):
                    x, y, width, height = anchor
                    rect = (int(x*w), int(y*h), int((x+width)*w), int((y+height)*h))
                    heading_end = fit_text(draw, column["title"], (rect[0], rect[1], rect[2], min(rect[3], rect[1] + int(.055*h))), config["ink"], int(.025*h), True, 1.12)
                    fit_text(draw, column["body"], (rect[0], heading_end + int(.01*h), rect[2], rect[3]), config["muted"], int(.020*h), False, 1.30)

                if page_copy.get("note"):
                    fit_text(draw, page_copy["note"], (int(.05*w), int(.88*h), int(.94*w), int(.94*h)), config["accent"], int(.014*h), True, 1.2)

            image.save(output, quality=92, optimize=True, progressive=True)
            print(output.relative_to(ROOT))


def main() -> None:
    copy = json.loads(COPY_PATH.read_text(encoding="utf-8"))
    selected = sys.argv[1:] or list(PROJECTS)
    unknown = [project_id for project_id in selected if project_id not in PROJECTS]
    if unknown:
        raise SystemExit(f"Unknown project id(s): {', '.join(unknown)}")
    for project_id in selected:
        config = PROJECTS[project_id]
        render_project(project_id, config, copy[project_id])


if __name__ == "__main__":
    main()
