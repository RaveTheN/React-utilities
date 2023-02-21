//Lezione 21/02

import { useRef } from "react";

export const TestRef = () => {
  const inputRef = useRef(null);

  const formRef = useRef(null);

  const handleFocusOnClick = () => {
    inputRef.current.focus();
  };

  const handleResetOnClick = () => {
    formRef.current.reset();
  };

  return (
    <div>
      <form ref={formRef}>
        <input ref={inputRef} defaultValue="" />
        <button type="button" onClick={handleFocusOnClick}>
          focus
        </button>
        <button type="button" onClick={handleResetOnClick}>
          reset
        </button>
      </form>
    </div>
  );
};
