import React, { useId, useState } from "react";
import Toaster from "../components/Toaster";

function useToast(position) {
  const [toastComponent, setToastComponent] = useState([<></>]);
  const toastId = useId();

  function toast(message, { type }) {
    setToastComponent((prev) => [
      ...prev,
      <Toaster
        key={toastId + Math.random().toString()}
        message={message}
        type={type}
      />,
    ]);
  }

  return {
    toast,
    ToastComponent: (
      <div className={`absolute p-2 ${position}`}>{toastComponent}</div>
    ),
  };
}

export default useToast;
