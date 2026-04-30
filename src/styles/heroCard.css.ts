import { style, keyframes } from '@vanilla-extract/css'

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% center' },
  '100%': { backgroundPosition: '200% center' },
})

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0',
  backgroundColor: '#131c2e',
  borderRadius: '10px',
  overflow: 'hidden',
  cursor: 'pointer',
  textDecoration: 'none',
  border: '1px solid #1e2d47',
  transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease',
  position: 'relative',
  ':hover': {
    transform: 'translateY(-3px)',
    borderColor: '#38bdf8',
    boxShadow: '0 8px 24px rgba(56, 189, 248, 0.18)',
  },
})

export const iconBox = style({
  width: '100%',
  aspectRatio: '1',
  overflow: 'hidden',
  backgroundColor: '#0c1525',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, transparent 55%, #131c2e 100%)',
    pointerEvents: 'none',
  },
})

export const placeholderIcon = style({
  fontSize: '1.8rem',
  color: '#2d3f5a',
})

export const cardBody = style({
  width: '100%',
  padding: '6px 8px 8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
})

export const heroName = style({
  fontSize: '0.8rem',
  color: '#e2eaf5',
  fontWeight: '600',
  textAlign: 'center',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const cardMeta = style({
  display: 'flex',
  gap: '4px',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

export const rarityBadge = style({
  fontSize: '0.6rem',
  padding: '1px 6px',
  borderRadius: '3px',
  fontWeight: '700',
  color: '#fff',
  letterSpacing: '0.03em',
})

export const troopBadge = style({
  fontSize: '0.6rem',
  padding: '1px 6px',
  borderRadius: '3px',
  fontWeight: '600',
  color: '#94a3b8',
  backgroundColor: '#1e2d47',
  border: '1px solid #2d3f5a',
})
