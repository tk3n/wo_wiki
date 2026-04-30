import { style, keyframes } from '@vanilla-extract/css'

const UI_FONT = "'Chakra Petch', sans-serif"
const BODY_FONT = "'Noto Sans JP', sans-serif"

const C = {
  bgVoid:    '#06080f',
  bgBase:    '#09111f',
  bgSurface: '#0e1b2d',
  bgRaised:  '#112030',
  bgCard:    '#0f1e30',
  borderDim: '#192c44',
  borderMed: '#22405e',
  textPri:   '#dde8f7',
  textSec:   '#6e95b8',
  textMuted: '#304d68',
  iceBlue:   '#4899c8',
  iceBright: '#7ec8e3',
  gold:      '#c8832a',
  goldBrt:   '#e8a93e',
}

const fadeSlideIn = keyframes({
  '0%':   { opacity: 0, transform: 'translateY(8px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const glowPulse = keyframes({
  '0%, 100%': { boxShadow: `0 0 6px ${C.iceBlue}40` },
  '50%':      { boxShadow: `0 0 14px ${C.iceBlue}80` },
})

export const page = style({
  minHeight: '100vh',
  backgroundColor: C.bgBase,
  color: C.textPri,
  fontFamily: BODY_FONT,
  overflowX: 'hidden',
})

export const pageHeader = style({
  padding: '12px 16px',
  borderBottom: `1px solid ${C.borderDim}`,
  background: `linear-gradient(180deg, ${C.bgVoid} 0%, ${C.bgBase} 100%)`,
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
})

export const backBtn = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  color: '#5c85a8',
  fontSize: '0.8rem',
  fontFamily: UI_FONT,
  letterSpacing: '0.04em',
  textDecoration: 'none',
  flexShrink: 0,
  ':hover': { color: C.iceBright },
})

export const pageTitle = style({
  fontSize: '1.05rem',
  fontWeight: '700',
  fontFamily: UI_FONT,
  color: C.iceBright,
  margin: 0,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  flex: 1,
})

export const filterSection = style({
  padding: '10px 16px',
  borderBottom: `1px solid ${C.borderDim}`,
  backgroundColor: C.bgSurface,
})

export const filterBar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  overflowX: 'auto',
  WebkitOverflowScrolling: 'touch',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': { display: 'none' },
  paddingBottom: '2px',
})

export const filterBtn = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3px',
  padding: '5px 8px',
  minWidth: '52px',
  border: `1px solid ${C.borderDim}`,
  borderRadius: '5px',
  backgroundColor: 'transparent',
  color: C.textSec,
  cursor: 'pointer',
  transition: 'all 0.15s',
  flexShrink: 0,
  ':hover': {
    borderColor: C.iceBlue,
    color: C.iceBright,
    backgroundColor: `${C.iceBlue}18`,
  },
})

export const filterBtnActive = style({
  backgroundColor: `${C.iceBlue}30`,
  borderColor: C.iceBlue,
  color: C.iceBright,
})

export const filterBtnIcon = style({
  width: '28px',
  height: '28px',
  borderRadius: '4px',
  objectFit: 'cover',
})

export const filterBtnLabel = style({
  fontSize: '0.55rem',
  fontFamily: UI_FONT,
  letterSpacing: '0.03em',
  maxWidth: '52px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const content = style({
  padding: '16px',
  maxWidth: '1200px',
  margin: '0 auto',
})

export const heroSection = style({
  marginBottom: '24px',
})

export const heroSectionHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '7px',
  marginBottom: '8px',
  paddingBottom: '6px',
  borderBottom: `1px solid ${C.borderDim}`,
})

export const heroSectionIcon = style({
  width: '20px',
  height: '20px',
  borderRadius: '3px',
  objectFit: 'cover',
  border: `1px solid ${C.borderDim}`,
})

export const heroSectionIconPlaceholder = style({
  width: '20px',
  height: '20px',
  borderRadius: '3px',
  backgroundColor: C.bgRaised,
  border: `1px solid ${C.borderDim}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.55rem',
  color: C.textMuted,
})

export const heroSectionName = style({
  fontSize: '0.72rem',
  fontFamily: UI_FONT,
  fontWeight: '600',
  color: C.iceBright,
  letterSpacing: '0.05em',
})

export const skillGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))',
  gap: '8px',
})

export const skillCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  padding: '8px 4px 6px',
  backgroundColor: C.bgCard,
  borderRadius: '7px',
  border: `1px solid ${C.borderDim}`,
  cursor: 'pointer',
  animation: `${fadeSlideIn} 0.3s ease both`,
  transition: 'border-color 0.15s, transform 0.15s, box-shadow 0.15s',
  ':hover': {
    borderColor: C.iceBlue,
    transform: 'translateY(-2px)',
    boxShadow: `0 4px 16px ${C.iceBlue}30`,
  },
})

export const skillCardIcon = style({
  width: '52px',
  height: '52px',
  borderRadius: '6px',
  objectFit: 'cover',
  border: `1px solid ${C.borderDim}`,
  display: 'block',
  selectors: {
    [`${skillCard}:hover &`]: {
      animation: `${glowPulse} 1.5s ease-in-out infinite`,
    },
  },
})

export const skillCardPlaceholder = style({
  width: '52px',
  height: '52px',
  borderRadius: '6px',
  backgroundColor: C.bgRaised,
  border: `1px solid ${C.borderDim}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.3rem',
  color: C.textMuted,
})

export const skillCardName = style({
  fontSize: '0.6rem',
  fontFamily: BODY_FONT,
  color: C.textSec,
  textAlign: 'center',
  lineHeight: '1.3',
  maxHeight: '2.6em',
  overflow: 'hidden',
  width: '100%',
  padding: '0 2px',
  boxSizing: 'border-box',
})

export const categoryTag = style({
  fontSize: '0.5rem',
  fontFamily: UI_FONT,
  letterSpacing: '0.04em',
  color: C.textMuted,
  backgroundColor: C.bgRaised,
  padding: '1px 4px',
  borderRadius: '2px',
  marginTop: 'auto',
})

export const tooltipStyle = style({
  position: 'fixed',
  zIndex: 1000,
  backgroundColor: C.bgRaised,
  border: `1px solid ${C.borderMed}`,
  borderRadius: '8px',
  padding: '10px 14px',
  maxWidth: '280px',
  minWidth: '200px',
  boxShadow: `0 8px 32px rgba(0,0,0,0.6), 0 0 16px ${C.iceBlue}20`,
  pointerEvents: 'none',
})

export const tooltipCategory = style({
  fontSize: '0.6rem',
  fontFamily: UI_FONT,
  color: C.textMuted,
  marginBottom: '4px',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
})

export const tooltipTitle = style({
  fontSize: '0.82rem',
  fontWeight: '700',
  fontFamily: UI_FONT,
  color: C.iceBlue,
  marginBottom: '5px',
  letterSpacing: '0.03em',
})

export const tooltipDesc = style({
  fontSize: '0.78rem',
  fontFamily: BODY_FONT,
  color: '#b0c8e0',
  lineHeight: '1.6',
})

export const tooltipDescNumber = style({
  color: C.goldBrt,
  fontWeight: '700',
  fontFamily: UI_FONT,
})
