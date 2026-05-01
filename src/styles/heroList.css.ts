import { style } from '@vanilla-extract/css'

const UI_FONT = "'Chakra Petch', sans-serif"
const BODY_FONT = "'Noto Sans JP', sans-serif"

// color tokens
const C = {
  bgVoid:    '#06080f',
  bgBase:    '#09111f',
  bgSurface: '#0e1b2d',
  bgRaised:  '#132133',
  borderDim: '#192c44',
  borderMed: '#22405e',
  textPri:   '#dde8f7',
  textSec:   '#6e95b8',
  textMuted: '#334d66',
  iceBlue:   '#4899c8',
  iceBright: '#7ec8e3',
  gold:      '#c8832a',
  goldBrt:   '#e8a93e',
}

export const page = style({
  minHeight: '100vh',
  backgroundColor: C.bgBase,
  color: C.textPri,
  fontFamily: BODY_FONT,
  overflowX: 'hidden',
})

export const header = style({
  padding: '14px 16px 12px',
  borderBottom: `1px solid ${C.borderDim}`,
  background: `linear-gradient(180deg, ${C.bgVoid} 0%, ${C.bgBase} 100%)`,
})

export const headerTitle = style({
  fontSize: '1.15rem',
  fontWeight: '700',
  fontFamily: UI_FONT,
  color: C.iceBright,
  margin: 0,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  ':hover': {
    color: C.textPri,
  },
})

export const detailCloseBtn = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '8px 12px',
  borderBottom: `1px solid ${C.borderDim}`,
})

export const closeBtnInner = style({
  background: 'transparent',
  border: `1px solid ${C.borderDim}`,
  borderRadius: '4px',
  color: C.textMuted,
  cursor: 'pointer',
  fontSize: '0.8rem',
  fontFamily: UI_FONT,
  padding: '2px 8px',
  letterSpacing: '0.04em',
  transition: 'all 0.15s',
  ':hover': {
    borderColor: C.iceBlue,
    color: C.iceBright,
  },
})

export const contentWrapper = style({
  width: '100%',
  '@media': {
    '(min-width: 768px)': {
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      alignItems: 'start',
    }
  }
})

export const contentWrapperWithDetail = style({
  width: '100%',
  '@media': {
    '(min-width: 768px)': {
      display: 'grid',
      gridTemplateColumns: '220px 1fr 420px',
      alignItems: 'start',
    }
  }
})

export const detailPane = style({
  display: 'none',
  '@media': {
    '(min-width: 768px)': {
      display: 'block',
      borderLeft: `1px solid ${C.borderDim}`,
      minHeight: '100vh',
    }
  }
})

export const detailEmpty = style({
  padding: '40px 20px',
  textAlign: 'center',
  color: C.textMuted,
  fontSize: '0.85rem',
  fontFamily: BODY_FONT,
})

export const sidebarContainer = style({
  '@media': {
    '(min-width: 768px)': {
      position: 'sticky',
      top: 0,
      maxHeight: '100vh',
      overflowY: 'auto',
      borderRight: `1px solid ${C.borderDim}`,
    }
  }
})

export const gridArea = style({
  minWidth: 0,
})

export const filters = style({
  padding: '10px 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  borderBottom: `1px solid ${C.borderDim}`,
  backgroundColor: C.bgSurface,
  '@media': {
    '(min-width: 768px)': {
      borderBottom: 'none',
      padding: '20px 16px',
      gap: '16px',
    }
  }
})

export const filterRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  flexWrap: 'wrap',
  '@media': {
    '(min-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    }
  }
})

export const seasonRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0',
  '@media': {
    '(min-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '6px',
    }
  }
})

export const seasonScroll = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  flexWrap: 'wrap',
})

export const filterLabel = style({
  fontSize: '0.68rem',
  fontFamily: UI_FONT,
  color: C.textMuted,
  minWidth: '40px',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  '@media': {
    '(min-width: 768px)': {
      display: 'block',
      minWidth: 'auto',
      marginBottom: '4px',
    }
  }
})

export const filterBtn = style({
  padding: '3px 10px',
  fontSize: '0.75rem',
  fontFamily: UI_FONT,
  letterSpacing: '0.04em',
  border: `1px solid ${C.borderDim}`,
  borderRadius: '3px',
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
  ':disabled': {
    opacity: 0.3,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
})

export const filterBtnActive = style({
  backgroundColor: `${C.iceBlue}30`,
  borderColor: C.iceBlue,
  color: C.iceBright,
  ':hover': {
    backgroundColor: `${C.iceBlue}44`,
    borderColor: C.iceBright,
    color: C.iceBright,
  },
})

export const filterSelect = style({
  padding: '3px 8px',
  fontSize: '0.75rem',
  fontFamily: UI_FONT,
  border: `1px solid ${C.borderDim}`,
  borderRadius: '3px',
  backgroundColor: C.bgRaised,
  color: C.textSec,
  cursor: 'pointer',
  ':disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
})

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(108px, 1fr))',
  gap: '8px',
  padding: '14px 16px',
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  boxSizing: 'border-box',
  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '12px',
      padding: '20px',
      maxWidth: 'none',
      margin: '0',
    }
  }
})

export const emptyMessage = style({
  padding: '40px 16px',
  textAlign: 'center',
  color: C.textMuted,
  fontSize: '0.85rem',
  fontFamily: BODY_FONT,
})
