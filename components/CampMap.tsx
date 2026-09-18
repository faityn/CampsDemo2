"use client";

import { useState } from "react";

type MapLayer = "map" | "satellite" | "terrain";

type CampMapProps = {
  name: string;
  mapUrl: string;
  mapCenter: string;
};

const mapLayers: { id: MapLayer; label: string }[] = [
  { id: "map", label: "Map" },
  { id: "satellite", label: "Satellite" },
  { id: "terrain", label: "Terrain" },
];

export default function CampMap({ name, mapUrl, mapCenter }: CampMapProps) {
  const [mapLayer, setMapLayer] = useState<MapLayer>("map");
  const activeMapUrl =
    mapLayer === "map"
      ? mapUrl
      : `https://www.google.com/maps?q=${mapCenter}&z=11&output=embed&t=${
          mapLayer === "satellite" ? "k" : "p"
        }`;

  return (
    <div className="relative min-h-[360px] overflow-hidden border border-[#211b16]/15 bg-[#e8e3d8] md:min-h-[460px]">
      <iframe
        title={`How to get there: ${name}`}
        src={activeMapUrl}
        loading="lazy"
        className="absolute inset-0 h-full w-full border-0"
      />
      <div className="absolute right-2 top-2 flex gap-1 bg-[#f2eee5] p-1 shadow-lg">
        {mapLayers.map((layer) => (
          <button
            key={layer.id}
            type="button"
            onClick={() => setMapLayer(layer.id)}
            className={`px-3 py-2 text-[9px] uppercase tracking-[.14em] transition-colors ${
              mapLayer === layer.id
                ? "bg-[#211b16] text-[#f2eee5]"
                : "text-[#211b16]/50 hover:text-[#211b16]"
            }`}
          >
            {layer.label}
          </button>
        ))}
      </div>
    </div>
  );
}
