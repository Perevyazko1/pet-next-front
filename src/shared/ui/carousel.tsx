'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react';

interface Props {
  children?: ReactNode;
  length: number;
  className?: string;
  infinite?: boolean;
  dotsMobile?: boolean;
  autoplay?: boolean;
  variableWidthMobile?: boolean;
  lengthInfinite?: number;
  slidesToShow?: number;
  speed?: number;
  autoplaySpeed?: number;
}

export const Carousel = ({
  children,
  length,
  slidesToShow,
  dotsMobile = false,
  autoplay = false,
  infinite = false,
  variableWidthMobile = true,
  lengthInfinite = 3,
  className,
  speed,
  autoplaySpeed,
}: Props) => {
  const sliderRef = useRef<Slider | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!autoplay) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }, // Начнет работать, когда 30% слайдера окажется в зоне видимости
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      if (isVisible) {
        sliderRef.current.slickPlay();
      } else {
        sliderRef.current.slickPause();
      }
    }
  }, [isVisible]);

  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: infinite && length > lengthInfinite,
      speed: speed ?? 500,
      arrows: false,
      slidesToShow: slidesToShow ? slidesToShow : 5,
      slidesToScroll: 1,
      adaptiveHeight: false,
      autoplay: length > 3 && autoplay,
      autoplaySpeed: autoplaySpeed ?? 4000,
      draggable: length > 3,
      swipe: length > 3,
      pauseOnHover: false,

      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            variableWidth: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            variableWidth: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
            dots: true,
            swipe: length > 1,
          },
        },
      ],
    };
  }, [infinite, dotsMobile, isVisible, autoplay, variableWidthMobile]);

  return (
    <Slider ref={sliderRef} {...settings} className={className}>
      {children}
    </Slider>
  );
};
