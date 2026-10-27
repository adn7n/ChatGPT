import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Assets, AssetKey } from "../data/assets";
export function Photo({
  assets,
  name,
  alt,
  className = "",
}: {
  assets: Assets;
  name: AssetKey;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const src = assets[name];
  if (!src || failed) return null;
  const sizes: Record<string, [number, number]> = {
    "/media/originals/photo-1.png": [1098, 1014],
    "/media/originals/photo-2.png": [1148, 1006],
    "/media/originals/photo-3.png": [1158, 926],
  };
  sizes["/media/cutouts/whoop-black.png"] = [1305, 1205];
  sizes["/media/cutouts/whoop-white.png"] = [1340, 1174];
  sizes["/media/cutouts/whoop-pack.png"] = [1403, 1121];
  const size = sizes[src];
  return (
    <img
      className={className}
      src={src}
      width={size?.[0]}
      height={size?.[1]}
      alt={alt}
      loading={name === "black" ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      onLoad={() => {
        if (!size) ScrollTrigger.refresh(true);
      }}
    />
  );
}
