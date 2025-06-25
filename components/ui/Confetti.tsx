"use client";

import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";

export default function ConfettiPlayer({ play }: { play: boolean }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const defaultOptions = {
    loop: play,
    autoplay: play,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={200} width={400} />;
}
