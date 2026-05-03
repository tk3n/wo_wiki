import { style, keyframes } from '@vanilla-extract/css'

const UI_FONT = "'Chakra Petch', sans-serif"
const BODY_FONT = "'Noto Sans JP', sans-serif"

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
  display: 'flex',
  flexDirection: 'column',
})

export const header = style({
  padding: '14px 16px 12px',
  borderBottom: `1px solid ${C.borderDim}`,
  background: `linear-gradient(180deg, ${C.bgVoid} 0%, ${C.bgBase} 100%)`,
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  flexWrap: 'wrap',
  flexShrink: 0,
})

export const nav = style({
  display: 'flex',
  gap: '12px',
})

export const navLink = style({
  fontSize: '0.8rem',
  fontFamily: UI_FONT,
  color: C.textSec,
  textDecoration: 'none',
  letterSpacing: '0.04em',
  paddingBottom: '2px',
  transition: 'color 0.15s',
  ':hover': {
    color: C.iceBright,
  },
})

export const navLinkActive = style({
  color: C.iceBright,
  borderBottom: `2px solid ${C.iceBlue}`,
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

export const betaBadge = style({
  fontSize: '0.6rem',
  fontFamily: UI_FONT,
  backgroundColor: '#7c44d422',
  border: '1px solid #7c44d4',
  color: '#b084e8',
  borderRadius: '3px',
  padding: '1px 5px',
  letterSpacing: '0.05em',
  verticalAlign: 'middle',
  marginLeft: '5px',
})

export const chatContainer = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '800px',
  width: '100%',
  margin: '0 auto',
  padding: '0 16px',
  boxSizing: 'border-box',
  minHeight: 0,
})

export const messagesArea = style({
  flex: 1,
  overflowY: 'auto',
  padding: '20px 0 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  minHeight: 0,
})

export const emptyState = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
  flex: 1,
  padding: '40px 20px',
  color: C.textMuted,
  textAlign: 'center',
})

export const emptyStateTitle = style({
  fontSize: '1rem',
  fontFamily: UI_FONT,
  color: C.textSec,
  letterSpacing: '0.05em',
  margin: 0,
})

export const exampleList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
  maxWidth: '420px',
})

export const exampleItem = style({
  backgroundColor: C.bgSurface,
  border: `1px solid ${C.borderDim}`,
  borderRadius: '8px',
  padding: '10px 14px',
  fontSize: '0.82rem',
  color: C.textSec,
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'all 0.15s',
  ':hover': {
    borderColor: C.iceBlue,
    color: C.iceBright,
    backgroundColor: `${C.iceBlue}12`,
  },
})

export const userMessage = style({
  alignSelf: 'flex-end',
  backgroundColor: `${C.iceBlue}18`,
  border: `1px solid ${C.iceBlue}55`,
  borderRadius: '12px 12px 2px 12px',
  padding: '10px 14px',
  maxWidth: '75%',
  fontSize: '0.88rem',
  color: C.textPri,
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
})

export const assistantMessage = style({
  alignSelf: 'flex-start',
  backgroundColor: C.bgSurface,
  border: `1px solid ${C.borderDim}`,
  borderRadius: '2px 12px 12px 12px',
  padding: '10px 14px',
  maxWidth: '85%',
  fontSize: '0.88rem',
  color: C.textPri,
  lineHeight: '1.7',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
})

const blink = keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0 },
})

export const streamingCursor = style({
  display: 'inline-block',
  width: '2px',
  height: '1em',
  backgroundColor: C.iceBlue,
  verticalAlign: 'text-bottom',
  marginLeft: '2px',
  animation: `${blink} 0.8s ease infinite`,
})

export const inputArea = style({
  borderTop: `1px solid ${C.borderDim}`,
  padding: '12px 0 20px',
  display: 'flex',
  gap: '8px',
  alignItems: 'flex-end',
  flexShrink: 0,
})

export const textarea = style({
  flex: 1,
  backgroundColor: C.bgRaised,
  border: `1px solid ${C.borderDim}`,
  borderRadius: '8px',
  color: C.textPri,
  fontSize: '0.88rem',
  padding: '10px 12px',
  resize: 'none',
  minHeight: '44px',
  maxHeight: '140px',
  fontFamily: BODY_FONT,
  lineHeight: '1.5',
  outline: 'none',
  transition: 'border-color 0.15s',
  ':focus': {
    borderColor: C.iceBlue,
  },
  '::placeholder': {
    color: C.textMuted,
  },
})

export const sendButton = style({
  padding: '10px 16px',
  backgroundColor: `${C.iceBlue}22`,
  border: `1px solid ${C.iceBlue}`,
  borderRadius: '8px',
  color: C.iceBright,
  fontSize: '0.8rem',
  fontFamily: UI_FONT,
  letterSpacing: '0.04em',
  cursor: 'pointer',
  transition: 'all 0.15s',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  height: '44px',
  ':hover': {
    backgroundColor: `${C.iceBlue}38`,
    borderColor: C.iceBright,
  },
  ':disabled': {
    opacity: 0.35,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
})

export const disclaimer = style({
  padding: '8px 0 4px',
  fontSize: '0.7rem',
  color: C.textMuted,
  textAlign: 'center',
  flexShrink: 0,
})
