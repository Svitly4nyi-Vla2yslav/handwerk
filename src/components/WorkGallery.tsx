import { useEffect, useRef, useState } from 'react';
import { workGalleryItems } from '../data/mediaAssets';
import { Section } from '../styles/primitives';
import {
  GalleryCard,
  GalleryCardBody,
  GalleryContainer,
  GalleryImage,
  GalleryImageWrap,
  GalleryIntro,
  GalleryTrack
} from '../styles/media.styles';

export function WorkGallery() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [...workGalleryItems, ...workGalleryItems];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const syncLoopPosition = () => {
      const halfWidth = track.scrollWidth / 2;
      if (track.scrollLeft >= halfWidth) {
        track.scrollLeft -= halfWidth;
      }
    };

    track.addEventListener('scroll', syncLoopPosition, { passive: true });
    return () => {
      track.removeEventListener('scroll', syncLoopPosition);
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const track = trackRef.current;
    if (!track) {
      return;
    }

    const advance = () => {
      const cards = track.querySelectorAll<HTMLElement>('[data-gallery-card]');
      if (cards.length < 2) {
        return;
      }

      const step = cards[1].offsetLeft - cards[0].offsetLeft;
      const halfWidth = track.scrollWidth / 2;

      if (track.scrollLeft >= halfWidth - step * 1.25) {
        track.scrollLeft -= halfWidth;
      }

      track.scrollBy({
        left: step,
        behavior: 'smooth'
      });
    };

    const intervalId = window.setInterval(advance, 4200);
    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  function scheduleResume() {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
    }, 2200);
  }

  function pauseSlider() {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }

    setIsPaused(true);
  }

  return (
    <Section>
      <GalleryContainer>
        <GalleryIntro>
          <h2>Einblicke in unsere Arbeit</h2>
          <p>
            Keine austauschbaren Symbolbilder, sondern echte Arbeitssituationen aus Beratung,
            Demontage, neuer Technik, Wärmepumpe, Sanitär und Wartung.
          </p>
        </GalleryIntro>

        <GalleryTrack
          aria-label="Bildergalerie zu SHK-Arbeiten"
          onMouseEnter={pauseSlider}
          onMouseLeave={() => setIsPaused(false)}
          onPointerDown={pauseSlider}
          onPointerUp={scheduleResume}
          onPointerCancel={scheduleResume}
          onTouchStart={pauseSlider}
          onTouchEnd={scheduleResume}
          ref={trackRef}
          role="list"
        >
          {slides.map((item, index) => (
            <GalleryCard
              aria-hidden={index >= workGalleryItems.length}
              data-gallery-card
              key={`${item.caption}-${index}`}
              role="listitem"
            >
              <GalleryImageWrap>
                <GalleryImage
                  alt={item.alt}
                  decoding="async"
                  loading="lazy"
                  src={item.src}
                />
              </GalleryImageWrap>
              <GalleryCardBody>
                <h3>{item.caption}</h3>
                <p>{item.description}</p>
              </GalleryCardBody>
            </GalleryCard>
          ))}
        </GalleryTrack>
      </GalleryContainer>
    </Section>
  );
}
