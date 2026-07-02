"use client";

import { useState } from "react";

export default function Portrait({ size = 84 }: { size?: number }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full border border-moss/30 bg-vein/60"
      style={{ width: size, height: size }}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/portrait.jpg"
          alt="Sumesh Pradhan"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
          style={{
            filter:
              "grayscale(1) sepia(0.3) hue-rotate(45deg) saturate(1.4) contrast(1.05) brightness(0.92)",
          }}
        />
      ) : (
        <svg viewBox="0 0 84 84" className="h-full w-full opacity-70">
          <circle cx="42" cy="32" r="14" fill="none" stroke="#8fae63" strokeWidth="1" />
          <path
            d="M16 78 C16 56, 68 56, 68 78"
            fill="none"
            stroke="#8fae63"
            strokeWidth="1"
          />
        </svg>
      )}
    </div>
  );
}
