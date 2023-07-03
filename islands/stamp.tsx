import { useState, useEffect } from "preact/hooks";

// Import the conversion rules from JSON
import conversionRules from "../data/stamp.json" assert { type: "json" };

export default function Stamp() {
  const [stampCount, setStampCount] = useState(0);

  // Count the number of stamps
  useEffect(() => {
    const stampData = conversionRules["stamp-id"];
    const stampIds = Object.values(stampData);
    const count = stampIds.filter((stampId) => {
      const cookieData = document.cookie;
      return cookieData.match(stampId);
    }).length;

    setStampCount(count);
  }, []);

  // Render the stamps
  const stamps = [];
  for (let i = 0; i < stampCount; i++) {
    stamps.push(
      <div class="relative m-3 border-1 border-gray-200 p-4">
        <div class="w-40 h-40 border-4 border-red-500 rounded-full bg-white flex items-center justify-center">
          <div class="text-red-600 text-5xl text-red-500 font-bold">👍</div>
        </div>
      </div>);
  }

  return (
    <>
      <div class="space-y-2 py-14 font-semibold mb-8 text-center md:py-24 bg-red-500 space-y-3">
        <h1 class="text-white text-5xl md:text-7xl">Stamp rally</h1>
        <h1 class="text-white text-lg font-bold md:text-xl">スタンプラリーでポイントを貯めよう！</h1>
        <h1 class="text-red-500 text-lg font-bold md:text-xl bg-white inline-block p-2">{stampCount}ポイント</h1>
      </div>
      <div class="flex m-3">
        {stamps}
      </div>
    </>
  )
}
