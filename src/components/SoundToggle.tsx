"use client";

import { useState, useRef, useEffect } from "react";

export default function SoundToggle() {
  const [isOn, setIsOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = document.querySelector(".js-web-sound") as HTMLAudioElement;
    if (audio) {
      audioRef.current = audio;
      audio.loop = true;
    }
  }, []);

  const handleClick = () => {
    const audio = audioRef.current || (document.querySelector(".js-web-sound") as HTMLAudioElement);
    if (!audio) return;
    const next = !isOn;
    setIsOn(next);
    document.body.setAttribute("data-sound-enabled", next ? "true" : "false");
    if (next) {
      audio.muted = false;
      audio.play().catch(() => {});
    } else {
      audio.muted = true;
      audio.pause();
    }
  };

  return (
    <button
      type="button"
      className="footer_sound js-cursor-contract js-footer_sound"
      onClick={handleClick}
      aria-label={isOn ? "Sound on" : "Sound off"}
      aria-pressed={isOn}
    >
      <span className="footer_sound_label">SOUND</span>{" "}
      <span className="footer_sound_state footer_sound_state--animate" key={isOn ? "on" : "off"}>
        {isOn ? "ON" : "OFF"}
      </span>
    </button>
  );
}
