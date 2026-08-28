export type AnimStyle = 'fadeinup' | 'fadeinleft' | 'fadeinright' | 'zoomin';

export interface ElementAnimation {
  style: AnimStyle;
  /** Seconds. */
  duration: number;
  /** Travel distance in px for the fade-in styles. */
  distance: number;
  /** Starting scale for zoomin. */
  scale?: number;
  /** Seconds. */
  delay?: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

export interface GalleryOptions {
  loop: boolean;
  stretch: string;
  imgPosition: string;
  arrows: boolean;
  dots: boolean;
  arrowColor: string;
  arrowBgColor: string;
  dotsBgColor: string;
  dotsBgColorActive: string;
  arrowSize: number;
  dotsSize: number;
}

export interface ZeroElement {
  id: string;
  type: 'shape' | 'text' | 'image' | 'button' | 'html' | 'gallery';
  anim: ElementAnimation | null;
  atomTag: string;
  href?: string;
  target?: string;
  rel?: string;
  hasAnimateClass: boolean;
  /** Background artwork for shape elements. */
  bgImage?: string;
  atomStyle?: string;
  atomClass?: string;
  /** Inner markup for text / button / html elements. */
  html?: string;
  /** image elements */
  src?: string;
  alt?: string;
  imgClass?: string;
  /** gallery elements */
  images?: GalleryImage[];
  gallery?: GalleryOptions;
}

export interface Artboard {
  screens: string;
  height: string;
  valign: string;
  upscale: string;
  heights: Record<string, string | undefined>;
}

export interface BlockRecord {
  id: string;
  kind: 'artboard' | 'popup' | 'cookies' | 'other';
  recordType: string;
  numericId?: string;
  artboard?: Artboard;
  elements?: ZeroElement[];
}
