import { useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, captionButton, ref }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-6 text-right">
        <button className=" bg-stone-700 text-stone-400 hover:text-stone-200 rounded-md px-3 py-2">
          {captionButton}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
