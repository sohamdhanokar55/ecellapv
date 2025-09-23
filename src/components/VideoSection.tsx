import React, { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isModalOpen]);

  // Handle keyboard events (ESC to close)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Precompute a stable, correct YouTube embed URL
  const embedUrl = useMemo(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "0",
      controls: "1",
      modestbranding: "1",
      rel: "0",
      playsinline: "1",
      enablejsapi: "1",
      origin,
    });
    return `https://www.youtube.com/embed/tR5sbKyOTfE?${params.toString()}`;
  }, []);

  // Modal component
  const Modal = () => {
    if (!isModalOpen) return null;

    return createPortal(
      <div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-[99999]"
        onClick={closeModal}
        style={{
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      >
        <div
          className="relative w-full max-w-sm"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-[#A259FF] to-[#872ff7] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg z-10"
            aria-label="Close video"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* YouTube Video Embed - FIXED WITH PROPER PARAMETERS */}
          <div className="bg-gradient-to-br from-[#A259FF]/20 to-[#872ff7]/20 rounded-2xl p-2 shadow-2xl">
            <div
              className="relative bg-black rounded-xl overflow-hidden"
              style={{ aspectRatio: "9/16" }}
            >
              <iframe
                key="pitchnova-youtube"
                src={embedUrl}
                className="w-full h-full"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="Pitchnova Video"
                style={{
                  border: "none",
                  outline: "none",
                }}
                referrerPolicy="strict-origin-when-cross-origin"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      {/* Video Section */}
      <section className="mb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            🎬 About <span className="text-[#A259FF]">Pitchnova</span>
          </h2>

          <div
            className="relative max-w-sm mx-auto group cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={openModal}
          >
            <div className="relative bg-gradient-to-br from-[#A259FF]/20 to-[#872ff7]/20 rounded-2xl p-1 shadow-2xl">
              <div
                className="relative bg-black rounded-xl overflow-hidden"
                style={{ aspectRatio: "9/16" }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A259FF]/30 to-[#872ff7]/30"></div>

                  <img
                    src="/roadmapt2.png"
                    alt="Pitchnova Video Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#A259FF] to-[#872ff7] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 mb-4">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>

                    <div className="text-center text-white px-4">
                      <h3 className="text-lg font-bold mb-1">
                        Discover Pitchnova
                      </h3>
                      <p className="text-sm opacity-80">
                        Learn about the competition
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-[#A259FF]/30 rounded-full animate-ping"></div>
                  </div>
                </div>

                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#A259FF]/40 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#872ff7]/40 rounded-full animate-bounce delay-1000"></div>
          </div>

          <p className="text-gray-300 mt-6 text-sm sm:text-base">
            Click to watch our exclusive explanation about Pitchnova
          </p>
        </div>
      </section>

      <Modal />
    </>
  );
};

export default React.memo(VideoSection);
