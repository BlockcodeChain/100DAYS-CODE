import { useState } from "react";
import { Copy } from "lucide-react";
import Popup from "./Popup";

const CopyInput = () => {
  const [inputValue, setinputValue] = useState("");
  const [copied, setCopied] = useState(false);

  const handlecopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />
      <button onClick={handlecopy}>
        <Copy />
      </button>

      <Popup copied={copied} />
    </div>
  );
};

export default CopyInput;
