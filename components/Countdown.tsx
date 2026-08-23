"use client";

import { useEffect, useState } from "react";

const launchDate = new Date("2026-12-11T00:00:00+05:30").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = launchDate - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (number: number) =>
    number.toString().padStart(2, "0");

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">

      {/* Days */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
        <div className="text-5xl md:text-6xl font-bold text-[#F5B800]">
          {timeLeft.days}
        </div>
        <div className="mt-2 text-white text-sm uppercase tracking-widest">
          Days
        </div>
      </div>

      {/* Hours */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
        <div className="text-5xl md:text-6xl font-bold text-[#F5B800]">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="mt-2 text-white text-sm uppercase tracking-widest">
          Hours
        </div>
      </div>

      {/* Minutes */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
        <div className="text-5xl md:text-6xl font-bold text-[#F5B800]">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="mt-2 text-white text-sm uppercase tracking-widest">
          Minutes
        </div>
      </div>

      {/* Seconds */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
        <div className="text-5xl md:text-6xl font-bold text-[#F5B800]">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="mt-2 text-white text-sm uppercase tracking-widest">
          Seconds
        </div>
      </div>

    </div>
  );
}