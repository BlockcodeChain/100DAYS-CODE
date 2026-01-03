import { createPortal } from "react-dom";

const Popup = ({ copied }) => {
  return createPortal(
    <>
      {copied && (
        <div className="popup">
          Copied to clipboard
        </div>
      )}
    </>,
    document.querySelector("#popup-content")
  );
};

export default Popup;
