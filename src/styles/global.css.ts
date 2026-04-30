import { style } from '@vanilla-extract/css'

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  fontFamily: 'sans-serif',
  backgroundColor: '#0f172a',
  color: '#f1f5f9',
  gap: '16px',
})

export const title = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  margin: 0,
  color: '#38bdf8',
})

export const subtitle = style({
  fontSize: '1.25rem',
  margin: 0,
  color: '#94a3b8',
})
