import { useState } from "react";
import useToast from "./hooks/useToast";

function App() {
  const [position, setPosition] = useState("tr");
  const { toast, ToastComponent } = useToast(position);

  return (
    <div className="p-5">
      {ToastComponent}
      <div className="flex items-center justify-center gap-x-2">
        <div className="space-x-2">
          <input
            type="radio"
            name="position"
            value="tr"
            id="tr"
            checked={position === "tr"}
            onClick={() => setPosition("tr")}
          />
          <label htmlFor="tr">Top right</label>
        </div>
        <div className="space-x-2">
          <input
            type="radio"
            name="position"
            value="tl"
            id="tl"
            checked={position === "tl"}
            onClick={() => setPosition("tl")}
          />
          <label htmlFor="tl">Top left</label>
        </div>
        <div className="space-x-2">
          <input
            type="radio"
            name="position"
            value="br"
            id="br"
            checked={position === "br"}
            onClick={() => setPosition("br")}
          />
          <label htmlFor="br">Bottom right</label>
        </div>
        <div className="space-x-2">
          <input
            type="radio"
            name="position"
            value="bl"
            id="bl"
            checked={position === "bl"}
            onClick={() => setPosition("bl")}
          />
          <label htmlFor="bl">Bottom left</label>
        </div>
      </div>

      <div className="w-full text-center mt-5 space-y-3">
        <div className="space-x-2">
          <button
            className="px-5 py-2 bg-blue-500 rounded hover:opacity-90"
            onClick={() => toast("Info", { type: "info" })}
          >
            Info
          </button>
          <button
            className="px-5 py-2 bg-green-500 rounded hover:opacity-90"
            onClick={() => toast("Success", { type: "success" })}
          >
            Success
          </button>
        </div>
        <div className="space-x-2">
          <button
            className="px-5 py-2 bg-red-500 rounded hover:opacity-90"
            onClick={() => toast("Error", { type: "error" })}
          >
            Error
          </button>
          <button
            className="px-5 py-2 bg-yellow-500 rounded hover:opacity-90"
            onClick={() => toast("Warning", { type: "warning" })}
          >
            Warning
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
