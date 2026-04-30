import { style } from '@vanilla-extract/css'

export const page = style({
  minHeight: '100vh',
  backgroundColor: '#0f172a',
  color: '#f1f5f9',
  fontFamily: 'sans-serif',
  maxWidth: '600px',
  margin: '0 auto',
})

export const backBtn = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '8px 16px',
  color: '#64748b',
  fontSize: '0.85rem',
  textDecoration: 'none',
  ':hover': {
    color: '#38bdf8',
  },
})

export const heroHeader = style({
  padding: '0 16px 16px',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
  borderBottom: '1px solid #1e293b',
})

export const iconWrapper = style({
  width: '80px',
  height: '80px',
  flexShrink: 0,
})

export const iconImg = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '8px',
})

export const iconPlaceholder = style({
  width: '100%',
  height: '100%',
  borderRadius: '8px',
  backgroundColor: '#1e293b',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  color: '#334155',
  border: '1px solid #334155',
})

export const heroInfo = style({
  flex: 1,
  minWidth: 0,
})

export const heroName = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  margin: '0 0 4px',
  color: '#f1f5f9',
})

export const heroBadges = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
  marginBottom: '12px',
})

export const badge = style({
  padding: '2px 8px',
  fontSize: '0.7rem',
  borderRadius: '4px',
  fontWeight: 'bold',
})

export const badgeSSR = style({
  backgroundColor: '#7c3aed',
  color: '#ede9fe',
})

export const badgeSR = style({
  backgroundColor: '#0369a1',
  color: '#e0f2fe',
})

export const badgeR = style({
  backgroundColor: '#374151',
  color: '#d1d5db',
})

export const badgeTroop = style({
  backgroundColor: '#1e293b',
  color: '#94a3b8',
  border: '1px solid #334155',
})

export const toggle = style({
  display: 'flex',
  gap: '0',
  border: '1px solid #334155',
  borderRadius: '6px',
  overflow: 'hidden',
  width: 'fit-content',
})

export const toggleBtn = style({
  padding: '6px 16px',
  fontSize: '0.8rem',
  border: 'none',
  backgroundColor: 'transparent',
  color: '#64748b',
  cursor: 'pointer',
  transition: 'all 0.15s',
})

export const toggleBtnActive = style({
  backgroundColor: '#0ea5e9',
  color: '#fff',
})

export const section = style({
  padding: '16px',
  borderBottom: '1px solid #1e293b',
})

export const sectionTitle = style({
  fontSize: '0.75rem',
  fontWeight: 'bold',
  color: '#64748b',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '12px',
})

export const statsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '8px',
})

export const statBox = style({
  backgroundColor: '#1e293b',
  borderRadius: '8px',
  padding: '12px 8px',
  textAlign: 'center',
})

export const statLabel = style({
  fontSize: '0.7rem',
  color: '#64748b',
  marginBottom: '4px',
})

export const statValue = style({
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: '#f1f5f9',
})

export const skillList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
})

export const skillItem = style({
  backgroundColor: '#1e293b',
  borderRadius: '8px',
  padding: '12px',
})

export const skillName = style({
  fontSize: '0.9rem',
  fontWeight: 'bold',
  color: '#38bdf8',
  marginBottom: '4px',
})

export const skillDesc = style({
  fontSize: '0.85rem',
  color: '#94a3b8',
  lineHeight: '1.5',
})
