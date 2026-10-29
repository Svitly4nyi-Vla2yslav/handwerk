import type { ReactNode } from 'react';
import type { MediaAsset } from '../data/mediaAssets';
import {
  MediaCaption,
  MediaFigure,
  MediaImageElement,
  MediaOverlay
} from '../styles/media.styles';

interface SectionImageProps {
  asset: MediaAsset;
  caption?: string;
  children?: ReactNode;
  loading?: 'eager' | 'lazy';
  overlay?: 'dark' | 'soft' | 'none';
  priority?: boolean;
  ratio?: string;
}

/**
 * Приймає media asset і необов’язкові caption, children та параметри завантаження/оформлення.
 * Повертає figure з async-decoding зображенням; priority підвищує fetchPriority, але не змінює loading.
 * Дочірній вміст потрапляє в overlay, підпис — у figcaption; стану й побічних ефектів немає.
 */
export function SectionImage({
  asset,
  caption,
  children,
  loading = 'lazy',
  overlay = 'soft',
  priority = false,
  ratio
}: SectionImageProps) {
  return (
    <MediaFigure
      $overlay={overlay}
      $ratio={ratio}
    >
      <MediaImageElement
        alt={asset.alt}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        loading={loading}
        src={asset.src}
      />
      {children ? <MediaOverlay>{children}</MediaOverlay> : null}
      {caption ? <MediaCaption>{caption}</MediaCaption> : null}
    </MediaFigure>
  );
}
