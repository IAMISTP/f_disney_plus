import { useEffect } from "react";

export default function useOnclickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      console.log(event.target);
      console.log(ref);
      //포함하고 있는지 contains
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    //마우스로 클릭할때
    document.addEventListener("mousedown", listener);
    //손으로 터치할때
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
