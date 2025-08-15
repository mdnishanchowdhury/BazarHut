import { useEffect, useState } from "react";

function NotificationBar() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30);

    const updateCountdown = () => {
      const now = new Date();
      const diff = endDate - now;

      if (diff <= 0) return;

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#634C9F] w-full h-14 md:h-10 flex flex-col md:flex-row md:items-center justify-center md:justify-between px-4 md:px-96  text-white text-xs">
      {/* Left side text */}
      <span className="text-xs font-semibold font-inter text-center md:text-left mb-1 md:mb-0">
        FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
      </span>

      {/* Countdown */}
      <div className="flex flex-wrap md:flex-nowrap items-center gap-1 justify-center md:justify-end ">
        <span className="opacity-80 text-xs font-medium font-inter">Until the end of the sale:</span>
        <span className="font-bold text-[18px] font-inter">{timeLeft.days}</span>
        <span className="opacity-80 text-xs font-medium font-inter">days</span>
        <span className="font-bold text-[18px] font-inter">{timeLeft.hours}</span>
        <span className="opacity-80 text-xs font-medium font-inter">hours</span>
        <span className="font-bold text-[18px] font-inter">{timeLeft.minutes}</span>
        <span className="opacity-80 text-xs font-medium font-inter">minutes</span>
        <span className="font-bold text-[18px] font-inter">{timeLeft.seconds}</span>
        <span className="opacity-80 text-xs font-medium font-inter">sec</span>
      </div>
    </div>

  );
}

export default NotificationBar;
