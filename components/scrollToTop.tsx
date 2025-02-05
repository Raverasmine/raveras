import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowUpToLine } from "lucide-react";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      {showTopBtn && (
        <Button
          onClick={goToTop}
          size='icon'
          className='fixed bottom-4 right-4 shadow-md'
        >
          <ArrowUpToLine className='h-4 w-4' />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
