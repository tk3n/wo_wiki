import { style, keyframes } from '@vanilla-extract/css'

const UI_FONT = "'Chakra Petch', sans-serif"
const BODY_FONT = "'Noto Sans JP', sans-serif"

const C = {
  bgBase:    '#09111f',
  bgCard:    '#0c1829',
  bgCardDark:'#08111e',
  bgRaised:  '#132133',
  borderDim: '#192c44',
  borderMed: '#22405e',
  textPri:   '#dde8f7',
  textSec:   '#6e95b8',
  iceBlue:   '#4899c8',
  iceBright: '#7ec8e3',
  gold:      '#c8832a',
  goldBrt:   '#e8a93e',
  ssrPurple: '#7c44d4',
  srBlue:    '#1a5ea8',
}

const shimmer = keyframes({
  '0%':   { backgroundPosition: '-200% center' },
  '100%': { backgroundPosition: '200% center' },
})

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0',
  backgroundColor: C.bgCard,
  borderRadius: '8px',
  overflow: 'hidden',
  cursor: 'pointer',
  textDecoration: 'none',
  border: `1px solid ${C.borderDim}`,
  transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease',
  position: 'relative',
  ':hover': {
    transform: 'translateY(-3px)',
    borderColor: C.iceBlue,
    boxShadow: `0 6px 20px rgba(72, 153, 200, 0.2)`,
  },
})

export const cardSelected = style({
  borderColor: C.iceBlue,
  boxShadow: `0 0 0 2px ${C.iceBlue}66`,
})

export const cardSSR = style({
  borderColor: `${C.ssrPurple}66`,
  ':hover': {
    borderColor: C.goldBrt,
    boxShadow: `0 6px 24px rgba(200, 131, 42, 0.25)`,
  },
})

export const iconBox = style({
  width: '100%',
  aspectRatio: '1',
  overflow: 'hidden',
  backgroundColor: C.bgCardDark,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(180deg, transparent 55%, ${C.bgCard} 100%)`,
    pointerEvents: 'none',
  },
})

export const placeholderIcon = style({
  fontSize: '1.6rem',
  color: C.borderMed,
})

export const cardBody = style({
  width: '100%',
  padding: '5px 7px 7px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
})

export const heroName = style({
  fontSize: '0.75rem',
  fontFamily: BODY_FONT,
  color: C.textPri,
  fontWeight: '500',
  textAlign: 'center',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const cardMeta = style({
  display: 'flex',
  gap: '3px',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

export const rarityBadge = style({
  fontSize: '0.66rem',
  padding: '2px 7px',
  borderRadius: '3px',
  fontWeight: '700',
  fontFamily: UI_FONT,
  letterSpacing: '0.05em',
  color: '#fff',
})

export const rarityBadgeSSR = style({
  backgroundColor: '#1e0d3a',
  color: '#c084fc',
  border: '1px solid #6d28d9',
})

export const rarityBadgeSR = style({
  backgroundColor: '#1a5ea8',
  color: '#bde0ff',
})

export const rarityBadgeR = style({
  backgroundColor: C.bgRaised,
  color: C.textSec,
  border: `1px solid ${C.borderDim}`,
})

export const seasonBadge = style({
  backgroundColor: '#2a1a05',
  color: '#f0a030',
  border: '1px solid #7c5010',
})

export const troopBadge = style({
  fontSize: '0.66rem',
  padding: '2px 7px',
  borderRadius: '3px',
  fontWeight: '600',
  fontFamily: UI_FONT,
  letterSpacing: '0.03em',
  color: C.textSec,
  backgroundColor: C.bgRaised,
  border: `1px solid ${C.borderDim}`,
})

export const troopBadgeShield = style([troopBadge, {
  backgroundColor: '#3a1515',
  color: '#e87878',
  border: '1px solid #5c2020',
}])

export const troopBadgeSpear = style([troopBadge, {
  backgroundColor: '#152a1a',
  color: '#6fbb7a',
  border: '1px solid #244030',
}])

export const troopBadgeArcher = style([troopBadge, {
  backgroundColor: '#0d2535',
  color: '#4ab8c8',
  border: '1px solid #194055',
}])
