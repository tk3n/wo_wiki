import { style } from '@vanilla-extract/css'

export const page = style({
  minHeight: '100vh',
  backgroundColor: '#0a1120',
  color: '#f1f5f9',
  fontFamily: 'sans-serif',
  overflowX: 'hidden',
})

export const header = style({
  padding: '16px',
  borderBottom: '1px solid #1e293b',
})

export const headerTitle = style({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: '#38bdf8',
  margin: 0,
})

export const filters = style({
  padding: '12px 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  borderBottom: '1px solid #1e293b',
})

export const filterRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flexWrap: 'wrap',
})

export const seasonRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0',
})

export const seasonScroll = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  overflowX: 'auto',
  WebkitOverflowScrolling: 'touch',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
  paddingBottom: '2px',
})

export const filterLabel = style({
  fontSize: '0.75rem',
  color: '#64748b',
  minWidth: '44px',
})

export const filterBtn = style({
  padding: '4px 12px',
  fontSize: '0.8rem',
  border: '1px solid #334155',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  color: '#94a3b8',
  cursor: 'pointer',
  transition: 'all 0.15s',
  flexShrink: 0,
  ':hover': {
    borderColor: '#38bdf8',
    color: '#38bdf8',
  },
  ':disabled': {
    opacity: 0.3,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
})

export const filterBtnActive = style({
  backgroundColor: '#0ea5e9',
  borderColor: '#0ea5e9',
  color: '#fff',
  ':hover': {
    backgroundColor: '#38bdf8',
    borderColor: '#38bdf8',
    color: '#fff',
  },
})

export const filterSelect = style({
  padding: '4px 8px',
  fontSize: '0.8rem',
  border: '1px solid #334155',
  borderRadius: '4px',
  backgroundColor: '#1e293b',
  color: '#94a3b8',
  cursor: 'pointer',
  ':disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
})

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
  gap: '10px',
  padding: '16px',
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  boxSizing: 'border-box',
})

export const emptyMessage = style({
  padding: '40px 16px',
  textAlign: 'center',
  color: '#475569',
  fontSize: '0.9rem',
})
