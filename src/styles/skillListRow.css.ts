import { style } from '@vanilla-extract/css'

const BODY_FONT = "'Noto Sans JP', sans-serif"

const C = {
  bgSurface: '#0e1b2d',
  bgRaised:  '#132133',
  borderDim: '#192c44',
  borderMed: '#22405e',
  textPri:   '#dde8f7',
  iceBlue:   '#4899c8',
  goldBrt:   '#e8a93e',
}

export const row = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '8px 14px 8px 16px',
  borderBottom: `1px solid ${C.borderDim}`,
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'background-color 0.15s',
  ':hover': {
    backgroundColor: C.bgSurface,
  },
})

export const rowSelected = style({
  backgroundColor: C.bgRaised,
  boxShadow: `inset 3px 0 0 ${C.iceBlue}`,
})

export const heroSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: '158px',
  minWidth: '158px',
  flexShrink: 0,
})

export const heroIconBox = style({
  width: '38px',
  height: '38px',
  borderRadius: '5px',
  overflow: 'hidden',
  flexShrink: 0,
  backgroundColor: '#08111e',
  border: `1px solid ${C.borderDim}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const heroIconImg = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
})

export const heroIconPlaceholder = style({
  fontSize: '1rem',
  color: C.borderMed,
})

export const heroInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  minWidth: 0,
  flex: 1,
})

export const heroNameText = style({
  fontSize: '0.8rem',
  fontFamily: BODY_FONT,
  color: C.textPri,
  fontWeight: '600',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const heroBadges = style({
  display: 'flex',
  gap: '3px',
  flexWrap: 'wrap',
  alignItems: 'center',
})

export const skillSection = style({
  flex: '1',
  paddingLeft: '12px',
  marginLeft: '6px',
  borderLeft: `1px solid ${C.borderDim}`,
  minWidth: 0,
})

export const skillDesc = style({
  fontSize: '0.8rem',
  fontFamily: BODY_FONT,
  color: C.textPri,
  lineHeight: '1.55',
  margin: 0,
})

export const skillDescNumber = style({
  color: C.goldBrt,
  fontWeight: '700',
})
