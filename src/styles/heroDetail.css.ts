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
  ssrPurple: '#7c44d4',
  ssrLight:  '#a78bfa',
}

const shimmer = keyframes({
  '0%':   { backgroundPosition: '-200% center' },
  '100%': { backgroundPosition: '200% center' },
})

export const page = style({
  minHeight: '100vh',
  backgroundColor: C.bgBase,
  color: C.textPri,
  fontFamily: BODY_FONT,
  maxWidth: '600px',
  margin: '0 auto',
  '@media': {
    '(min-width: 768px)': {
      maxWidth: '900px',
    }
  }
})

export const panel = style({
  color: C.textPri,
  fontFamily: BODY_FONT,
  overflowY: 'auto',
})

export const backBtn = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '8px 16px',
  color: '#5c85a8',
  fontSize: '0.8rem',
  fontFamily: UI_FONT,
  letterSpacing: '0.04em',
  textDecoration: 'none',
  ':hover': {
    color: C.iceBright,
  },
})

export const heroHeader = style({
  padding: '8px 16px 12px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  borderBottom: `1px solid ${C.borderDim}`,
  background: `linear-gradient(180deg, ${C.bgVoid} 0%, ${C.bgBase} 100%)`,
})

export const iconWrapper = style({
  width: '44px',
  height: '44px',
  flexShrink: 0,
})

export const iconImg = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '6px',
  border: `1px solid ${C.borderMed}`,
})

export const iconPlaceholder = style({
  width: '100%',
  height: '100%',
  borderRadius: '6px',
  backgroundColor: C.bgRaised,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.3rem',
  color: C.textMuted,
  border: `1px solid ${C.borderDim}`,
})

export const heroInfo = style({
  flex: 1,
  minWidth: 0,
})

export const heroName = style({
  fontSize: '1.05rem',
  fontWeight: '600',
  fontFamily: BODY_FONT,
  margin: '0 0 4px',
  color: C.textPri,
  lineHeight: 1.2,
})

export const heroBadges = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4px',
})

export const badge = style({
  padding: '2px 7px',
  fontSize: '0.66rem',
  borderRadius: '3px',
  fontWeight: '700',
  fontFamily: UI_FONT,
  letterSpacing: '0.05em',
})

export const badgeSSR = style({
  backgroundColor: '#1e0d3a',
  color: '#c084fc',
  border: '1px solid #6d28d9',
})

export const badgeSeason = style({
  backgroundColor: '#2a1a05',
  color: '#f0a030',
  border: '1px solid #7c5010',
})

export const badgeSR = style({
  backgroundColor: '#1a5ea8',
  color: '#bde0ff',
})

export const badgeR = style({
  backgroundColor: C.bgRaised,
  color: C.textSec,
  border: `1px solid ${C.borderDim}`,
})

export const badgeTroop = style({
  backgroundColor: C.bgRaised,
  color: C.textSec,
  border: `1px solid ${C.borderDim}`,
})

export const badgeTroopShield = style([badgeTroop, {
  backgroundColor: '#3a1515',
  color: '#e87878',
  border: '1px solid #5c2020',
}])

export const badgeTroopSpear = style([badgeTroop, {
  backgroundColor: '#152a1a',
  color: '#6fbb7a',
  border: '1px solid #244030',
}])

export const badgeTroopArcher = style([badgeTroop, {
  backgroundColor: '#0d2535',
  color: '#4ab8c8',
  border: '1px solid #194055',
}])

export const toggle = style({
  display: 'flex',
  border: `1px solid ${C.borderMed}`,
  borderRadius: '4px',
  overflow: 'hidden',
  width: 'fit-content',
  flexShrink: 0,
})

export const toggleBtn = style({
  padding: '4px 10px',
  fontSize: '0.68rem',
  fontFamily: UI_FONT,
  letterSpacing: '0.05em',
  border: 'none',
  backgroundColor: 'transparent',
  color: C.textMuted,
  cursor: 'pointer',
  transition: 'all 0.15s',
})

export const toggleBtnActive = style({
  backgroundColor: `${C.iceBlue}30`,
  color: C.iceBright,
})

export const section = style({
  padding: '14px 16px',
  borderBottom: `1px solid ${C.borderDim}`,
})

export const sectionTitle = style({
  fontSize: '0.68rem',
  fontWeight: '700',
  fontFamily: UI_FONT,
  color: '#5c85a8',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  marginBottom: '10px',
})

export const statsRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const statLabel = style({
  fontSize: '0.72rem',
  fontFamily: UI_FONT,
  color: '#5c85a8',
  letterSpacing: '0.04em',
})

export const statValueText = style({
  fontSize: '0.88rem',
  fontFamily: UI_FONT,
  fontWeight: '700',
  color: C.iceBright,
  letterSpacing: '0.02em',
})

export const statSep = style({
  fontSize: '0.7rem',
  color: C.borderMed,
})

export const skillList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const skillItem = style({
  backgroundColor: C.bgCard,
  borderRadius: '6px',
  padding: '10px 12px',
  borderLeft: `2px solid ${C.borderMed}`,
})

export const skillNameRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  marginBottom: '5px',
})

export const skillIcon = style({
  width: '20px',
  height: '20px',
  borderRadius: '4px',
  objectFit: 'cover',
  flexShrink: 0,
  border: `1px solid ${C.borderDim}`,
})

export const skillName = style({
  fontSize: '0.82rem',
  fontWeight: '700',
  fontFamily: UI_FONT,
  color: C.iceBlue,
  letterSpacing: '0.03em',
})

export const skillDesc = style({
  fontSize: '0.82rem',
  fontFamily: BODY_FONT,
  color: '#b0c8e0',
  lineHeight: '1.6',
})

export const skillDescNumber = style({
  color: C.goldBrt,
  fontWeight: '700',
  fontFamily: UI_FONT,
})

export const specialSection = style({
  padding: '14px 16px',
  borderBottom: `1px solid ${C.borderDim}`,
})

export const specialSectionTitle = style({
  fontSize: '0.68rem',
  fontWeight: '700',
  fontFamily: UI_FONT,
  color: '#5c85a8',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  marginBottom: '6px',
})

export const equipmentNameMeta = style({
  fontSize: '0.68rem',
  fontFamily: UI_FONT,
  color: C.textMuted,
  letterSpacing: '0.03em',
  marginBottom: '10px',
})

export const equipmentStatsGrid = style({
  display: 'flex',
  gap: '6px',
  flexWrap: 'wrap',
  marginBottom: '10px',
})

export const equipmentStatChip = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '5px',
  backgroundColor: C.bgCard,
  borderRadius: '4px',
  padding: '4px 9px',
  border: `1px solid ${C.borderDim}`,
})

export const equipmentStatChipLabel = style({
  fontSize: '0.62rem',
  fontFamily: UI_FONT,
  color: '#5c85a8',
  letterSpacing: '0.04em',
})

export const equipmentStatChipValue = style({
  fontSize: '0.85rem',
  fontFamily: UI_FONT,
  fontWeight: '700',
  color: C.iceBright,
  letterSpacing: '0.02em',
})
