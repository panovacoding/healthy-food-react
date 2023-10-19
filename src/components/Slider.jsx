import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

export default function Slider({ children }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    // Object with parameters
    const params = {
      slidesPerView: 1
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container init="false" ref={swiperRef}>
      {children}
    </swiper-container>
  );
}
