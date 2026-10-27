import { useEffect, useState } from "react";
import { assetKeys, type Assets } from "../data/assets";
export function useAssets() {
  const [assets, setAssets] = useState<Assets>({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let alive = true;
    fetch("/media/manifest.json")
      .then((r) => {
        if (!r.ok) throw Error("manifest");
        return r.json();
      })
      .then((value) => {
        if (!alive) return;
        const safe: Assets = {};
        for (const key of assetKeys)
          if (
            typeof value[key] === "string" &&
            value[key].startsWith("/media/")
          )
            safe[key] = value[key];
        setAssets(safe);
      })
      .catch(() => {})
      .finally(() => {
        if (alive) setLoaded(true);
      });
    return () => {
      alive = false;
    };
  }, []);
  return { assets, loaded };
}
