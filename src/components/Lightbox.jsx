import React, { useEffect } from 'react';

const Lightbox = ({ images = [], startIndex = 0, onClose }) => {
  const [index, setIndex] = React.useState(startIndex);

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose && onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [index]);

  if (!images || images.length === 0) return null;

  const next = () => setIndex(i => (i + 1) % images.length);
  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
  const cur = images[index];

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: cur.caption || '', text: cur.caption || '', url: cur.src });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(cur.src);
        alert('Image URL copied to clipboard');
      } else {
        alert('Share not supported in this browser');
      }
    } catch (e) {
      // ignore share errors
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative max-w-5xl w-full mx-auto bg-transparent rounded-md overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            className="hidden md:flex items-center justify-center px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-l-md"
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="flex-1 text-center">
            <img src={cur.src} alt={cur.alt || cur.caption || 'image'} className="max-h-[70vh] w-auto mx-auto rounded" />
            {cur.caption && <div className="mt-3 text-white text-sm">{cur.caption}</div>}

            <div className="mt-4 flex items-center justify-center gap-3">
              <a href={cur.src} download className="px-3 py-1 bg-white text-gray-900 rounded shadow-sm">Download</a>
              <button onClick={handleShare} className="px-3 py-1 bg-blue-600 text-white rounded shadow-sm">Share</button>
            </div>
          </div>

          <button
            onClick={next}
            className="hidden md:flex items-center justify-center px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-r-md"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
