"use client";

import { useEffect, useRef } from "react";

export function GradientBackground() {
  const lightRef = useRef<HTMLDivElement>(null);
  const darkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elLight = lightRef.current;
    const elDark = darkRef.current;
    const el = elLight ?? elDark;
    if (!el) return;

    let raf = 0;

    const handleScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const p = maxScroll > 0 ? window.scrollY / maxScroll : 0;

        const props: [string, string][] = [
          ["--x1", `${30 + p * 40}%`],
          ["--y1", `${20 - p * 10}%`],
          ["--x2", `${70 - p * 35}%`],
          ["--y2", `${50 + p * 20}%`],
          ["--x3", `${40 + p * 25}%`],
          ["--y3", `${75 - p * 15}%`],
          ["--x4", `${55 + p * 15}%`],
          ["--y4", `${95 - p * 10}%`],
        ];

        if (elLight)
          for (const [k, v] of props) elLight.style.setProperty(k, v);
        if (elDark) for (const [k, v] of props) elDark.style.setProperty(k, v);

        raf = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-background">
      {/* Light ambient gradient */}
      <div
        ref={lightRef}
        className="absolute inset-0 animate-gradient-drift dark:hidden"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at var(--x1, 30%) var(--y1, 20%), oklch(0.35 0.1 145 / 0.5) 0%, transparent 60%),
            radial-gradient(ellipse 55% 45% at var(--x2, 70%) var(--y2, 50%), oklch(0.3 0.08 160 / 0.4) 0%, transparent 55%),
            radial-gradient(ellipse 45% 55% at var(--x3, 40%) var(--y3, 75%), oklch(0.25 0.06 130 / 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 55% 45% at var(--x4, 55%) var(--y4, 95%), oklch(0.2 0.05 145 / 0.2) 0%, transparent 50%)
          `,
          willChange: "transform",
        }}
      />

      {/* Dark ambient gradient — birch-green tones */}
      <div
        ref={darkRef}
        className="absolute inset-0 animate-gradient-drift hidden dark:block"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at var(--x1, 30%) var(--y1, 20%), oklch(0.45 0.14 145 / 0.4) 0%, transparent 60%),
            radial-gradient(ellipse 55% 45% at var(--x2, 70%) var(--y2, 50%), oklch(0.35 0.11 160 / 0.3) 0%, transparent 55%),
            radial-gradient(ellipse 45% 55% at var(--x3, 40%) var(--y3, 75%), oklch(0.28 0.09 130 / 0.25) 0%, transparent 50%),
            radial-gradient(ellipse 55% 45% at var(--x4, 55%) var(--y4, 95%), oklch(0.22 0.07 145 / 0.2) 0%, transparent 50%)
          `,
          willChange: "transform",
        }}
      />

      {/* Tree silhouette — stroke outline, dark green, semi-transparent */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-[0.35] dark:opacity-[0.5]"
        aria-hidden="true"
        style={{ color: "oklch(0.25 0.08 145)" }}
      >
        <svg
          viewBox="0 0 800 1000"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-w-[1200px] max-h-[100vh]"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Trunk */}
          <path
            d="
              M 380 500
              C 378 540, 374 580, 368 630
              C 360 690, 350 750, 338 810
              C 326 870, 314 930, 305 980
              C 300 995, 298 998, 302 998
              C 325 996, 350 993, 378 991
              C 400 989, 420 989, 442 991
              C 468 993, 490 996, 510 998
              C 514 998, 512 995, 508 980
              C 498 930, 486 870, 474 810
              C 462 750, 454 690, 450 630
              C 447 580, 445 540, 444 500
            "
          />
          {/* Roots */}
          <path
            d="
              M 302 998 C 285 994, 265 988, 250 980 C 238 974, 230 968, 228 962
              M 510 998 C 528 994, 548 988, 562 980 C 574 974, 582 968, 584 962
              M 320 996 C 308 990, 292 982, 280 974 C 270 968, 262 960, 258 954
              M 492 996 C 504 990, 520 982, 532 974 C 542 968, 550 960, 554 954
            "
          />
          {/* Main branches left */}
          <path
            d="
              M 400 500 C 390 470, 370 445, 345 425 C 320 405, 295 392, 270 384
              C 245 376, 222 373, 200 374 C 180 375, 162 380, 146 390
              M 270 384 C 255 378, 238 375, 222 378 C 208 381, 195 388, 184 400
              M 345 425 C 330 415, 315 410, 298 410 C 282 410, 268 415, 256 424
            "
          />
          {/* Main branches right */}
          <path
            d="
              M 440 500 C 450 470, 470 445, 495 425 C 520 405, 545 392, 570 384
              C 595 376, 618 373, 640 374 C 660 375, 678 380, 694 390
              M 570 384 C 585 378, 602 375, 618 378 C 632 381, 645 388, 656 400
              M 495 425 C 510 415, 525 410, 542 410 C 558 410, 572 415, 584 424
            "
          />
          {/* Center upper branches */}
          <path
            d="
              M 410 500 C 415 470, 420 440, 424 410 C 428 380, 425 350, 415 320
              C 405 292, 388 268, 365 250 C 342 232, 315 220, 288 212
              M 415 320 C 425 300, 438 285, 455 275 C 472 265, 490 260, 510 258
              M 365 250 C 355 240, 342 233, 328 230 C 314 227, 300 228, 288 232
            "
          />
          {/* Canopy top */}
          <path
            d="
              M 288 212 C 275 205, 260 200, 244 198 C 228 196, 212 198, 198 204
              C 184 210, 172 220, 162 234 C 152 248, 146 264, 142 282
              M 510 258 C 522 252, 536 248, 550 246 C 564 244, 578 246, 592 252
              C 606 258, 618 268, 628 282 C 638 296, 644 312, 648 330
            "
          />
          {/* Weeping branches left */}
          <path
            d="
              M 134 538 C 130 550, 126 566, 124 584 C 122 602, 122 618, 124 632
              M 118 576 C 114 590, 110 608, 108 626 C 106 644, 106 660, 108 674
              M 100 510 C 96 526, 94 544, 94 562 C 94 580, 96 596, 100 610
              M 80 480 C 76 500, 74 522, 74 544 C 74 566, 76 586, 80 604
              M 60 450 C 56 474, 54 500, 54 526 C 54 552, 56 576, 60 596
            "
          />
          {/* Weeping branches right */}
          <path
            d="
              M 722 576 C 726 590, 730 608, 732 626 C 734 644, 734 660, 732 674
              M 740 510 C 744 526, 746 544, 746 562 C 746 580, 744 596, 740 610
              M 756 310 C 760 328, 762 348, 762 368 C 762 388, 760 406, 756 422
              M 776 356 C 780 376, 782 398, 782 420 C 782 442, 780 462, 776 480
            "
          />
          {/* Weeping bottom */}
          <path
            d="
              M 184 400 C 178 420, 172 442, 168 466 C 164 490, 162 514, 162 536
              M 226 398 C 220 418, 216 442, 212 468 C 208 494, 206 518, 206 540
              M 584 424 C 590 446, 594 470, 596 496 C 598 522, 598 546, 596 568
              M 614 398 C 620 418, 624 442, 628 468 C 632 494, 634 518, 634 540
            "
          />
          {/* Fine twigs */}
          <path
            d="
              M 146 390 C 142 400, 136 414, 130 430 C 124 446, 120 462, 118 478
              M 694 390 C 698 400, 704 414, 710 430 C 716 446, 720 462, 722 478
              M 210 375 C 204 392, 196 412, 190 434 C 184 456, 180 478, 178 498
              M 630 375 C 636 392, 644 412, 650 434 C 656 456, 660 478, 662 498
            "
          />
        </svg>
      </div>
    </div>
  );
}
