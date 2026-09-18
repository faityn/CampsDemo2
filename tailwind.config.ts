import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { fontFamily: { sans:['var(--font-inter)','Arial','sans-serif'] }, colors:{ ink:'#172018', sand:'#E8D7B7', pine:'#16352A', mist:'#F3F0E8' } } },
  plugins: []
}
export default config
