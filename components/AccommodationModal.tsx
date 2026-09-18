"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type AccommodationImage = {
  src: string;
  label: string;
};

type AccommodationModalProps = {
  name: string;
  images: AccommodationImage[];
};

export default function AccommodationModal({
  name,
  images,
}: AccommodationModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative block min-h-[360px] w-full overflow-hidden bg-[#26382f] p-6 text-left text-white md:min-h-[440px] md:p-8"
        aria-label={`View ${name} accommodations`}
      >
        <motion.img
          src={images[0].src}
          alt={`${name} accommodation`}
          className="absolute inset-0 h-full w-full object-cover opacity-75"
          initial={{ scale: 1.08 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17120f]/90 via-[#17120f]/15 to-[#17120f]/20" />
        <div className="relative flex h-full min-h-[308px] flex-col justify-between md:min-h-[376px]">
          <div className="flex justify-end">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-xl font-light transition-transform duration-500 group-hover:rotate-45">
              +
            </span>
          </div>
          <div>
            <div className="mt-6 flex items-center justify-between border-t border-white/25 pt-4 text-[9px] uppercase tracking-[.24em] text-white/70">
              <span>Exterior · Interior</span>
              <span>View rooms ↗</span>
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#17120f]/90 p-4 backdrop-blur-md md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${name} accommodations gallery`}
              className="relative w-full max-w-6xl overflow-hidden bg-[#211b16] text-white shadow-2xl"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5 md:p-7">
                <div>
                  <p className="text-[9px] uppercase tracking-[.35em] text-[#d9bd82]">
                    {name}
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[.2em] text-white/55">
                    Exterior · Interior
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-xl font-light transition-colors hover:bg-white hover:text-[#211b16]"
                  aria-label="Close accommodations gallery"
                >
                  ×
                </button>
              </div>

              <Swiper
                modules={[Keyboard, Navigation, Pagination]}
                keyboard={{ enabled: true }}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                className="accommodation-swiper h-[72vh] min-h-[480px]"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={image.src}>
                    <div className="relative h-full w-full">
                      <img
                        src={image.src}
                        alt={`${name} ${image.label.toLowerCase()} ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#17120f]/75 via-transparent to-[#17120f]/20" />
                      <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
                        <p className="text-[10px] uppercase tracking-[.35em] text-[#d9bd82]">
                          {image.label}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-[.2em] text-white/60">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(images.length).padStart(2, "0")}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
