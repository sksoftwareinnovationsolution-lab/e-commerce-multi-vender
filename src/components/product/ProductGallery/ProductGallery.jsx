import { useState, useCallback } from "react";
import "./ProductGallery.css";

const images = [
  { id: 1, alt: "Product view 1" },
  { id: 2, alt: "Product view 2" },
  { id: 3, alt: "Product view 3" },
  { id: 4, alt: "Product view 4" },
  { id: 5, alt: "Product view 5" },
];

function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  }, []);

  return (
    <div className="pgallery">
      <div className="pgallery__main">
        <button
          className="pgallery__nav pgallery__nav--prev"
          type="button"
          onClick={handlePrev}
          aria-label="Previous image"
        >
          ‹
        </button>

        <div
          className="pgallery__display"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
        >
          <div
            className={`pgallery__image-wrapper ${isZoomed ? "pgallery__image-wrapper--zoomed" : ""}`}
            style={{
              backgroundImage: `url(https://picsum.photos/seed/prod${images[activeIndex].id}/800/800)`,
              backgroundPosition: isZoomed ? `${zoomPos.x}% ${zoomPos.y}%` : "center",
            }}
          >
            <div className="pgallery__placeholder">
              <span className="pgallery__placeholder-label">Image {images[activeIndex].id}</span>
            </div>
          </div>
        </div>

        <button
          className="pgallery__nav pgallery__nav--next"
          type="button"
          onClick={handleNext}
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      <div className="pgallery__thumbs">
        {images.map((img, idx) => (
          <button
            key={img.id}
            className={`pgallery__thumb ${idx === activeIndex ? "pgallery__thumb--active" : ""}`}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`View image ${img.id}`}
          >
            <div className="pgallery__thumb-img">Img {img.id}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
