import React, { useEffect, useState } from "react";

function Toaster({ message, type = "info" }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isVisible]);

  return isVisible ? (
    <div
      className={`flex items-center justify-between w-52 max-w-52 gap-x-2 relative p-2 mt-2 rounded  ${type}`}
    >
      <p className="truncate">{message}</p>
      <button
        className="text-gray-500 bg-gray-200 rounded-full px-[5px] text-sm cursor-pointer"
        onClick={() => setIsVisible(false)}
      >
        x
      </button>
    </div>
  ) : null;
}

export default Toaster;
