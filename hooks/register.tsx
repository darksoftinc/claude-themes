import type { EngineInterface, Register, ThemeBackdropGlass } from 'claude-code'

import { makeColors } from './make-colors.js'

// Bu dosya my-themes klasöründeki temalardan üretildi; her tema kendi klasöründe de duruyor.
type Theme = {
  id: string
  label: string
  blurb: string
  alt: string
  glass: ThemeBackdropGlass
  def: Parameters<typeof makeColors>[0]
  scene: string
}

const THEMES: Theme[] = [
  {
    id: 'kapadokya',
    label: 'Kapadokya',
    blurb: 'Gün doğumunda balonlar ve peribacaları',
    alt: 'Gün doğumunda peribacalarının üzerinde yükselen sıcak hava balonları',
    glass: { blur: 3, opacity: 0.55 },
    def: {
      label: 'Kapadokya',
      roles: { accent: '#2c6e9b', danger: '#b3262e', success: '#3d7a3a', warning: '#b7701a', pro: '#7d4a9e' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#efe3d5',
            'surface-1': '#f5ece2',
            'surface-2': '#fbf6f0',
            'text-primary': '#24170f',
            'text-secondary': '#4a3628',
            'text-muted': '#665142',
          },
        },
      },
      dark: {
        roles: { accent: '#f0a15a' },
        gray: {
          anchors: {
            'surface-0': '#17121c',
            'surface-1': '#1e1825',
            'surface-2': '#251e2e',
            'surface-3': '#2b2336',
            'text-primary': '#f8efe7',
            'text-secondary': '#dacbc0',
            'text-muted': '#b5a59a',
          },
        },
      },
    },
    scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#9fb6d8"/><stop offset="0.45" stop-color="#e9c3c0"/><stop offset="0.75" stop-color="#f7d6a8"/><stop offset="1" stop-color="#f3c48e"/>
  </linearGradient>
  <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fff3d6"/><stop offset="0.35" stop-color="#ffd98f" stop-opacity="0.9"/><stop offset="1" stop-color="#ffb46b" stop-opacity="0"/></radialGradient>
  <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffcf6b" stop-opacity="0.9"/><stop offset="1" stop-color="#ff8a3d" stop-opacity="0"/></radialGradient>
  <g id="balloon">
    <path d="M0 -120 C-62 -120 -78 -60 -60 -20 C-46 10 -18 30 -12 46 L12 46 C18 30 46 10 60 -20 C78 -60 62 -120 0 -120 Z" fill="var(--a, #d9483b)" stroke="#5a2a1e" stroke-width="2"/>
    <path d="M0 -120 C-30 -120 -36 -60 -28 -20 C-22 10 -10 30 -6 46 L6 46 C10 30 22 10 28 -20 C36 -60 30 -120 0 -120 Z" fill="var(--b, #f2c14e)" stroke="#5a2a1e" stroke-width="1.5"/>
    <path d="M0 -120 C-8 -120 -10 -60 -6 -20 L-2 46 L2 46 L6 -20 C10 -60 8 -120 0 -120 Z" fill="var(--a, #d9483b)"/>
    <path d="M-66 -40 Q0 -24 66 -40" fill="none" stroke="#5a2a1e" stroke-width="1.5"/>
    <path d="M-12 46 L-10 62 M12 46 L10 62" stroke="#5a2a1e" stroke-width="1.5"/>
    <circle class="burn" cx="0" cy="50" r="22" fill="url(#glow)"/>
    <rect x="-12" y="62" width="24" height="18" rx="3" fill="#8a5a34" stroke="#4a2e1a" stroke-width="1.5"/>
  </g>
  <g id="chimney">
    <path d="M-38 0 C-30 -60 -18 -130 -10 -170 L10 -170 C18 -130 30 -60 38 0 Z" fill="#e6c8a2" stroke="#9c7650" stroke-width="2"/>
    <path d="M-28 -170 Q0 -196 28 -170 Q0 -160 -28 -170 Z" fill="#8a6545" stroke="#5e4029" stroke-width="2"/>
    <rect class="win" x="-6" y="-110" width="10" height="14" rx="5" fill="#5e4029"/><rect class="win" x="-14" y="-60" width="9" height="12" rx="4.5" fill="#5e4029"/>
  </g>
</defs>
<style>
  .rise { animation: rise 60s linear infinite; }
  .r2 { animation-duration: 75s; animation-delay: -30s; } .r3 { animation-duration: 90s; animation-delay: -55s; } .r4 { animation-duration: 68s; animation-delay: -12s; }
  .r5 { animation-duration: 82s; animation-delay: -44s; } .r6 { animation-duration: 95s; animation-delay: -70s; }
  @keyframes rise { from { transform: translateY(560px); } to { transform: translateY(-900px); } }
  .bob { animation: bob 7s ease-in-out infinite alternate; }
  @keyframes bob { from { transform: translateX(-18px); } to { transform: translateX(22px); } }
  .burn { opacity: 0; animation: burn 6s ease-in-out infinite; }
  @keyframes burn { 0%, 70%, 100% { opacity: 0; } 78%, 86% { opacity: 1; } }
  .sun { animation: sunrise 40s ease-out infinite alternate; }
  @keyframes sunrise { from { transform: translateY(40px); } to { transform: translateY(-30px); } }
  .night, .stars { opacity: 0; }
  .star { animation: tw 4s ease-in-out infinite alternate; } .star:nth-child(2n) { animation-delay: -2s; }
  @keyframes tw { from { opacity: 0.3; } to { opacity: 1; } }
  @media (prefers-color-scheme: dark) {
    .night { opacity: 0.7; } .stars { opacity: 1; } .sun { opacity: 0.15; }
    .burn { animation-duration: 3.5s; } .win { fill: #ffc76b; }
  }
  @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
</style>
<rect width="1600" height="1000" fill="url(#sky)"/>
<circle class="sun" cx="1150" cy="720" r="240" fill="url(#sun)"/>
<rect class="night" width="1600" height="1000" fill="#1a1230"/>
<g class="stars" fill="#fff1d6">
  <circle class="star" cx="140" cy="90" r="2"/><circle class="star" cx="420" cy="160" r="1.6"/><circle class="star" cx="760" cy="70" r="2"/>
  <circle class="star" cx="980" cy="200" r="1.5"/><circle class="star" cx="1260" cy="110" r="2.2"/><circle class="star" cx="1500" cy="220" r="1.6"/>
</g>
<path d="M-20 760 Q200 690 420 730 Q640 660 860 720 Q1100 650 1340 710 Q1480 680 1620 700 L1620 1020 L-20 1020 Z" fill="#d8b48c" opacity="0.7"/>
<g class="rise"><g class="bob"><use href="#balloon" x="260" y="520" style="--a:#d9483b;--b:#f2c14e"/></g></g>
<g class="rise r2"><g class="bob" style="animation-delay:-3s"><use href="#balloon" x="1380" y="460" transform="scale(0.8)" style="--a:#2f7fb8;--b:#f4ede1"/></g></g>
<g class="rise r3"><g class="bob" style="animation-delay:-5s"><use href="#balloon" x="900" y="700" transform="scale(0.55)" style="--a:#3d8a5a;--b:#f2c14e"/></g></g>
<g class="rise r4"><g class="bob" style="animation-delay:-1s"><use href="#balloon" x="1650" y="1100" transform="scale(0.45)" style="--a:#8a4fb0;--b:#f7a3b5"/></g></g>
<g class="rise r5"><g class="bob" style="animation-delay:-4s"><use href="#balloon" x="140" y="1300" transform="scale(0.4)" style="--a:#f08a3c;--b:#ffffff"/></g></g>
<g class="rise r6"><g class="bob" style="animation-delay:-2s"><use href="#balloon" x="1880" y="900" transform="scale(0.6)" style="--a:#d9483b;--b:#2f7fb8"/></g></g>
<path d="M-20 860 Q260 810 520 850 Q800 800 1080 846 Q1340 806 1620 840 L1620 1020 L-20 1020 Z" fill="#c99a6e"/>
<use href="#chimney" x="90" y="900"/><use href="#chimney" x="170" y="920" transform="scale(1)"/><use href="#chimney" x="1460" y="905"/><use href="#chimney" x="1540" y="930"/>
<use href="#chimney" x="380" y="940"/><use href="#chimney" x="1240" y="945"/>
<path d="M-20 930 Q300 900 640 925 Q980 900 1300 922 Q1460 912 1620 920 L1620 1020 L-20 1020 Z" fill="#b5835a"/>
</svg>`,
  },
  {
    id: 'neon-gece',
    label: 'Neon Gece',
    blurb: 'Retro neon gün batımı ve ızgara (koyu)',
    alt: 'Çizgili neon gün batımı, mor dağlar ve ufka doğru kayan ışıklı ızgara',
    glass: { blur: 3, tint: '#120a1f', opacity: 0.55 },
    def: {
      label: 'Neon Gece',
      only: 'dark',
      roles: { accent: '#2fe0ff', danger: '#ff5a5a', success: '#4dffa0', warning: '#ffd34d', pro: '#ff4fd8' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#120a1f',
            'surface-1': '#180e29',
            'surface-2': '#1e1232',
            'surface-3': '#24173b',
            'text-primary': '#faf2ff',
            'text-secondary': '#dacbea',
            'text-muted': '#b2a1c7',
          },
        },
      },
    },
    scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0b0418"/><stop offset="0.45" stop-color="#2a0b45"/><stop offset="0.62" stop-color="#6b1468"/><stop offset="0.66" stop-color="#0d0520"/>
  </linearGradient>
  <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe45c"/><stop offset="0.55" stop-color="#ff7a59"/><stop offset="1" stop-color="#ff2f9a"/></linearGradient>
  <mask id="cuts">
    <rect x="500" y="200" width="600" height="500" fill="#fff"/>
    <g fill="#000"><rect x="500" y="470" width="600" height="6"/><rect x="500" y="500" width="600" height="9"/><rect x="500" y="532" width="600" height="12"/><rect x="500" y="566" width="600" height="15"/><rect x="500" y="602" width="600" height="18"/><rect x="500" y="640" width="600" height="22"/></g>
  </mask>
  <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a0630"/><stop offset="1" stop-color="#05010c"/></linearGradient>
  <pattern id="hlines" width="1600" height="60" patternUnits="userSpaceOnUse"><rect width="1600" height="3" fill="#ff3fbf"/></pattern>
  <linearGradient id="hfade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000"/><stop offset="0.25" stop-color="#fff" stop-opacity="0.4"/><stop offset="1" stop-color="#fff"/></linearGradient>
  <mask id="floormask"><rect y="660" width="1600" height="340" fill="url(#hfade)"/></mask>
  <filter id="neon" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<style>
  .grid { animation: grid 2.2s linear infinite; }
  @keyframes grid { from { transform: translateY(0); } to { transform: translateY(60px); } }
  .sun { animation: sun 8s ease-in-out infinite alternate; }
  @keyframes sun { from { opacity: 0.88; } to { opacity: 1; } }
  .star { animation: tw 3s ease-in-out infinite alternate; } .star:nth-child(2n) { animation-delay: -1.4s; } .star:nth-child(3n) { animation-delay: -2.2s; }
  @keyframes tw { from { opacity: 0.25; } to { opacity: 1; } }
  .ridge { animation: glow 6s ease-in-out infinite alternate; }
  @keyframes glow { from { stroke-opacity: 0.6; } to { stroke-opacity: 1; } }
  @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
</style>
<rect width="1600" height="1000" fill="url(#sky)"/>
<g fill="#ffffff">
  <circle class="star" cx="120" cy="80" r="1.6"/><circle class="star" cx="300" cy="200" r="1.2"/><circle class="star" cx="460" cy="60" r="1.8"/><circle class="star" cx="1180" cy="90" r="1.5"/>
  <circle class="star" cx="1340" cy="220" r="1.2"/><circle class="star" cx="1500" cy="70" r="1.7"/><circle class="star" cx="820" cy="40" r="1.1"/><circle class="star" cx="1020" cy="180" r="1"/>
  <circle class="star" cx="220" cy="330" r="1"/><circle class="star" cx="1420" cy="350" r="1.1"/>
</g>
<g class="sun" mask="url(#cuts)"><circle cx="800" cy="460" r="230" fill="url(#sun)"/></g>
<circle cx="800" cy="460" r="300" fill="#ff4fb4" opacity="0.08"/>
<path d="M-20 662 L120 560 L230 610 L360 500 L470 590 L560 540 L640 662 Z M960 662 L1060 530 L1160 600 L1270 480 L1390 580 L1480 520 L1620 662 Z" fill="#14062a"/>
<path class="ridge" d="M-20 662 L120 560 L230 610 L360 500 L470 590 L560 540 L640 662 M960 662 L1060 530 L1160 600 L1270 480 L1390 580 L1480 520 L1620 662" fill="none" stroke="#2fe0ff" stroke-width="2.5" filter="url(#neon)"/>
<rect y="660" width="1600" height="340" fill="url(#floor)"/>
<g mask="url(#floormask)" filter="url(#neon)">
  <g class="grid"><rect y="600" width="1600" height="460" fill="url(#hlines)"/></g>
  <g stroke="#ff3fbf" stroke-width="2.5">
    <line x1="800" y1="662" x2="800" y2="1000"/><line x1="760" y1="662" x2="560" y2="1000"/><line x1="840" y1="662" x2="1040" y2="1000"/>
    <line x1="720" y1="662" x2="320" y2="1000"/><line x1="880" y1="662" x2="1280" y2="1000"/><line x1="680" y1="662" x2="80" y2="1000"/>
    <line x1="920" y1="662" x2="1520" y2="1000"/><line x1="640" y1="662" x2="-160" y2="1000"/><line x1="960" y1="662" x2="1760" y2="1000"/>
    <line x1="600" y1="662" x2="-400" y2="1000"/><line x1="1000" y1="662" x2="2000" y2="1000"/>
  </g>
</g>
<rect y="658" width="1600" height="4" fill="#ff7ad9" filter="url(#neon)"/>
</svg>`,
  },
  {
    id: 'aurora',
    label: 'Aurora',
    blurb: 'Kuzey ışıkları (koyu)',
    alt: 'Gece gökyüzünde yavaşça dalgalanan kuzey ışıkları',
    glass: { blur: 22, tint: '#0b1020', opacity: 0.62 },
    def: {
      label: 'Aurora',
      only: 'dark',
      roles: { accent: '#4fd1a5', danger: '#f0717a', success: '#7bd88f', warning: '#f2c66d', pro: '#b18cf2' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#0b1020',
            'surface-1': '#111830',
            'surface-2': '#161f3a',
            'surface-3': '#1b2443',
            'text-primary': '#e8ecf8',
            'text-secondary': '#bfc7de',
            'text-muted': '#9aa4c2',
          },
        },
      },
    },
    scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#070b18"/>
    <stop offset="0.6" stop-color="#0b1020"/>
    <stop offset="1" stop-color="#0d1326"/>
  </linearGradient>
  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4fd1a5" stop-opacity="0"/>
    <stop offset="0.45" stop-color="#4fd1a5" stop-opacity="0.55"/>
    <stop offset="1" stop-color="#4fd1a5" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8b6cf0" stop-opacity="0"/>
    <stop offset="0.5" stop-color="#8b6cf0" stop-opacity="0.45"/>
    <stop offset="1" stop-color="#8b6cf0" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3fb6d9" stop-opacity="0"/>
    <stop offset="0.5" stop-color="#3fb6d9" stop-opacity="0.4"/>
    <stop offset="1" stop-color="#3fb6d9" stop-opacity="0"/>
  </linearGradient>
  <filter id="blur" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="28"/></filter>
</defs>
<style>
  .band { transform-box: fill-box; transform-origin: center; mix-blend-mode: screen; }
  .b1 { animation: drift1 26s ease-in-out infinite alternate, glow 9s ease-in-out infinite alternate; }
  .b2 { animation: drift2 34s ease-in-out infinite alternate, glow 13s ease-in-out infinite alternate-reverse; }
  .b3 { animation: drift3 30s ease-in-out infinite alternate, glow 11s ease-in-out infinite alternate; }
  @keyframes drift1 { from { transform: translateX(-80px) skewX(-6deg) scaleY(1); } to { transform: translateX(90px) skewX(5deg) scaleY(1.15); } }
  @keyframes drift2 { from { transform: translateX(70px) skewX(4deg) scaleY(1.1); } to { transform: translateX(-100px) skewX(-5deg) scaleY(0.9); } }
  @keyframes drift3 { from { transform: translateX(-40px) scaleY(0.95); } to { transform: translateX(60px) scaleY(1.2); } }
  @keyframes glow { from { opacity: 0.55; } to { opacity: 1; } }
  .star { fill: #e8ecf8; animation: twinkle 5s ease-in-out infinite alternate; }
  .s2 { animation-delay: -1.7s; } .s3 { animation-delay: -3.1s; } .s4 { animation-delay: -4.2s; }
  @keyframes twinkle { from { opacity: 0.25; } to { opacity: 0.9; } }
  @media (orientation: portrait) { .aurora { transform: translateY(-60px) scale(1.25); transform-origin: 50% 0; } }
  @media (prefers-reduced-motion: reduce) { .b1, .b2, .b3, .star { animation: none; } }
</style>
<rect width="1600" height="1000" fill="url(#sky)"/>
<g>
  <circle class="star" cx="120" cy="80" r="1.4"/><circle class="star s2" cx="310" cy="190" r="1.1"/>
  <circle class="star s3" cx="520" cy="60" r="1.3"/><circle class="star s4" cx="760" cy="140" r="1"/>
  <circle class="star" cx="980" cy="50" r="1.5"/><circle class="star s2" cx="1180" cy="170" r="1.1"/>
  <circle class="star s3" cx="1390" cy="90" r="1.3"/><circle class="star s4" cx="1530" cy="230" r="1"/>
  <circle class="star s2" cx="60" cy="300" r="1"/><circle class="star" cx="1480" cy="360" r="1.2"/>
  <circle class="star s3" cx="230" cy="420" r="0.9"/><circle class="star s4" cx="1300" cy="300" r="0.9"/>
  <circle class="star" cx="660" cy="250" r="0.8"/><circle class="star s2" cx="880" cy="330" r="0.9"/>
</g>
<g class="aurora" filter="url(#blur)">
  <path class="band b1" fill="url(#g1)" d="M-100 120 C 200 40, 450 260, 800 150 S 1350 60, 1700 200 L 1700 470 C 1350 330, 1100 480, 800 400 S 250 320, -100 430 Z"/>
  <path class="band b2" fill="url(#g2)" d="M-100 60 C 300 180, 600 0, 950 110 S 1450 230, 1700 90 L 1700 330 C 1400 420, 1100 250, 850 330 S 200 420, -100 300 Z"/>
  <path class="band b3" fill="url(#g3)" d="M200 200 C 500 120, 700 320, 1000 220 S 1400 160, 1600 260 L 1600 420 C 1350 380, 1150 470, 950 420 S 450 380, 200 440 Z"/>
</g>
</svg>`,
  },
  {
    id: 'nakkashane',
    label: 'Nakkaşhane',
    blurb: 'Osmanlı minyatürü, atlılar ve tezhipli çerçeve',
    alt: 'Minyatür üslubunda İstanbul: kubbeli camiler ve minareler, surlar, otağlar ve denizde kadırgalar',
    glass: { blur: 2, opacity: 0.5 },
    def: {
      label: 'Nakkaşhane',
      contrast: 'more',
      roles: { accent: '#1f4e8c', danger: '#b0302a', success: '#3f7a3a', warning: '#a8740f', pro: '#7a3b6e' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#eadfc6',
            'surface-1': '#f1e8d4',
            'surface-2': '#f7f0e1',
            'text-primary': '#170e06',
            'text-secondary': '#36261a',
            'text-muted': '#55402c',
          },
        },
      },
      dark: {
        roles: { accent: '#d9a944' },
        gray: {
          anchors: {
            'surface-0': '#10162a',
            'surface-1': '#161d35',
            'surface-2': '#1c2440',
            'surface-3': '#212a48',
            'text-primary': '#fff6e2',
            'text-secondary': '#e6d8bb',
            'text-muted': '#c2b394',
          },
        },
      },
    },
    scene: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
<defs>
  <g id="rider">
    <g fill="currentColor" stroke="#3b2a1a" stroke-width="1.4">
      <rect class="leg la" x="22" y="-42" width="7" height="42"/><rect class="leg lb" x="33" y="-42" width="7" height="42"/>
      <rect class="leg lb" x="-34" y="-42" width="7" height="42"/><rect class="leg la" x="-23" y="-42" width="7" height="42"/>
      <path d="M-44 -58 Q-68 -40 -58 -12" fill="none" stroke="#3b2a1a" stroke-width="7" stroke-linecap="round"/>
      <ellipse cx="0" cy="-52" rx="46" ry="19"/>
      <path d="M28 -64 L50 -104 L64 -98 L46 -50 Z"/>
      <path d="M50 -104 L80 -88 L76 -79 L56 -90 Z"/>
      <path d="M52 -104 l2 -10 l5 9 Z"/>
    </g>
    <path d="M30 -66 L50 -104" stroke="#3b2a1a" stroke-width="5"/>
    <rect x="-22" y="-74" width="40" height="26" fill="#c4352c" stroke="#d4a84a" stroke-width="3"/>
    <path d="M-12 -70 L12 -70 L8 -112 L-10 -112 Z" fill="var(--k, #2a5d3a)" stroke="#3b2a1a" stroke-width="1.4"/>
    <path d="M0 -70 L6 -44" stroke="#3b2a1a" stroke-width="5" stroke-linecap="round"/>
    <circle cx="-1" cy="-121" r="8.5" fill="#e9c7a0" stroke="#3b2a1a" stroke-width="1.2"/>
    <ellipse cx="-1" cy="-133" rx="12" ry="9" fill="#f7f2e6" stroke="#3b2a1a" stroke-width="1.2"/>
    <circle cx="-1" cy="-141" r="3" fill="#c4352c"/>
    <line x1="10" y1="-100" x2="34" y2="-176" stroke="#3b2a1a" stroke-width="2.5"/>
    <path class="flag" d="M34 -176 l30 8 l-26 8 Z" fill="var(--p, #c4352c)" stroke="#3b2a1a" stroke-width="1"/>
    <path d="M6 -104 L22 -96" stroke="var(--k, #2a5d3a)" stroke-width="6" stroke-linecap="round"/>
  </g>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e2bd62"/><stop offset="1" stop-color="#f0d89a"/>
  </linearGradient>
  <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2f5f9e"/><stop offset="1" stop-color="#1d3f72"/>
  </linearGradient>
  <pattern id="waves" width="40" height="22" patternUnits="userSpaceOnUse">
    <path d="M0 16 Q10 4 20 16 T40 16" fill="none" stroke="#dbe6f3" stroke-width="2" stroke-opacity="0.7"/>
  </pattern>
  <pattern id="flowers" width="70" height="60" patternUnits="userSpaceOnUse">
    <g stroke="#3b2a1a" stroke-width="0.8">
      <circle cx="12" cy="14" r="4" fill="#c4352c"/><circle cx="12" cy="14" r="1.4" fill="#f2d16b"/>
      <circle cx="47" cy="38" r="3.5" fill="#f4efe2"/><circle cx="47" cy="38" r="1.2" fill="#c4352c"/>
    </g>
    <path d="M12 18 v8 M47 41.5 v7" stroke="#2f5a2a" stroke-width="1.2"/>
  </pattern>
  <pattern id="merlon" width="24" height="14" patternUnits="userSpaceOnUse">
    <rect x="2" y="0" width="13" height="14" fill="#c9a77a" stroke="#3b2a1a" stroke-width="1.2"/>
  </pattern>
  <pattern id="stripes" width="16" height="10" patternUnits="userSpaceOnUse">
    <rect width="8" height="10" fill="#c4352c"/><rect x="8" width="8" height="10" fill="#f4efe2"/>
  </pattern>
  <g id="cypress"><path d="M0 0 C-14 40 -16 90 -10 130 L10 130 C16 90 14 40 0 0 Z" fill="#2e5a3a" stroke="#3b2a1a" stroke-width="1.5"/><rect x="-3" y="130" width="6" height="12" fill="#6b4a2a"/></g>
  <g id="minaret">
    <rect x="-7" y="0" width="14" height="230" fill="#f3ead8" stroke="#3b2a1a" stroke-width="1.5"/>
    <rect x="-11" y="60" width="22" height="7" fill="#e6d7b8" stroke="#3b2a1a" stroke-width="1.2"/>
    <rect x="-11" y="110" width="22" height="7" fill="#e6d7b8" stroke="#3b2a1a" stroke-width="1.2"/>
    <polygon points="-8,0 8,0 0,-46" fill="#7f95ad" stroke="#3b2a1a" stroke-width="1.5"/>
    <line x1="0" y1="-46" x2="0" y2="-58" stroke="#b8902e" stroke-width="2"/>
  </g>
  <g id="house"><rect x="0" y="12" width="38" height="30" fill="#f1e4c8" stroke="#3b2a1a" stroke-width="1.2"/><polygon points="-4,14 19,-4 42,14" fill="#b5432f" stroke="#3b2a1a" stroke-width="1.2"/><rect class="win" x="8" y="22" width="7" height="10" fill="#4a3826"/><rect class="win" x="23" y="22" width="7" height="10" fill="#4a3826"/></g>
  <g id="bird"><path d="M-12 0 Q-6 -7 0 0 Q6 -7 12 0" fill="none" stroke="#3b2a1a" stroke-width="2"/></g>
  <g id="galley">
    <path d="M-110 0 L110 0 Q100 26 70 30 L-80 30 Q-105 22 -110 0 Z" fill="#7a3b2a" stroke="#3b2a1a" stroke-width="1.6"/>
    <path d="M-80 30 l-12 14 M-55 30 l-12 14 M-30 30 l-12 14 M-5 30 l-12 14 M20 30 l-12 14 M45 30 l-12 14" stroke="#3b2a1a" stroke-width="1.5"/>
    <line x1="0" y1="0" x2="0" y2="-110" stroke="#3b2a1a" stroke-width="3"/>
    <path d="M-60 -95 Q0 -60 50 -10 L-60 -10 Z" fill="#f4efe2" stroke="#3b2a1a" stroke-width="1.5"/>
    <path class="flag" d="M0 -110 l34 7 l-34 7 Z" fill="#c4352c" stroke="#3b2a1a" stroke-width="1"/>
    <rect x="80" y="-14" width="26" height="14" fill="#b8902e" stroke="#3b2a1a" stroke-width="1.2"/>
  </g>
  <g id="tent">
    <path d="M-70 80 L-70 30 Q0 -40 70 30 L70 80 Z" fill="url(#stripes)" stroke="#3b2a1a" stroke-width="1.8"/>
    <path d="M-70 30 Q0 50 70 30" fill="none" stroke="#3b2a1a" stroke-width="1.5"/>
    <path d="M-14 80 L0 44 L14 80 Z" fill="#3b2a1a"/>
    <line x1="0" y1="-12" x2="0" y2="-60" stroke="#3b2a1a" stroke-width="2.5"/>
    <path class="flag" d="M0 -60 q20 4 40 0 q-6 8 0 16 q-20 4 -40 0 Z" fill="#2a5d3a" stroke="#3b2a1a" stroke-width="1"/>
  </g>
</defs>
<style>
  .sun-rays { transform-box: fill-box; transform-origin: center; animation: spin 90s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .cloud { animation: drift 70s ease-in-out infinite alternate; }
  .cloud.c2 { animation-duration: 95s; animation-direction: alternate-reverse; }
  @keyframes drift { from { transform: translateX(-60px); } to { transform: translateX(80px); } }
  .flag { transform-box: fill-box; transform-origin: left center; animation: wave 2.6s ease-in-out infinite alternate; }
  @keyframes wave { from { transform: skewY(-6deg) scaleX(0.92); } to { transform: skewY(5deg) scaleX(1.04); } }
  .flock { animation: fly 48s linear infinite; }
  @keyframes fly { from { transform: translate(-200px, 40px); } to { transform: translate(1800px, -20px); } }
  .flock use { animation: flap 0.9s ease-in-out infinite alternate; transform-box: fill-box; transform-origin: center; }
  @keyframes flap { to { transform: scaleY(0.4); } }
  .boat1 { animation: bob 5s ease-in-out infinite alternate; }
  .boat2 { animation: bob 6.5s ease-in-out infinite alternate-reverse; }
  @keyframes bob { from { transform: translateY(0) rotate(-1deg); } to { transform: translateY(6px) rotate(1deg); } }
  .waves { animation: slide 12s linear infinite; }
  @keyframes slide { to { transform: translateX(40px); } }
  .night, .stars, .moon { opacity: 0; }
  .star { animation: twinkle 4s ease-in-out infinite alternate; }
  .star:nth-child(2n) { animation-delay: -1.5s; } .star:nth-child(3n) { animation-delay: -2.8s; }
  @keyframes twinkle { from { opacity: 0.3; } to { opacity: 1; } }
  @media (prefers-color-scheme: dark) {
    .night { opacity: 0.62; }
    .stars, .moon { opacity: 1; }
    .sun { opacity: 0; }
    .win { fill: #f2c25a; }
  }
  .procession { animation: march 70s linear -38s infinite; }
  @keyframes march { from { transform: translateX(-900px); } to { transform: translateX(1700px); } }
  .rider { animation: trot 0.7s ease-in-out infinite alternate; }
  @keyframes trot { to { transform: translateY(-3px); } }
  .leg { transform-box: fill-box; transform-origin: top center; }
  .la { animation: stride 0.7s ease-in-out infinite alternate; }
  .lb { animation: stride 0.7s ease-in-out infinite alternate-reverse; }
  @keyframes stride { from { transform: rotate(-14deg); } to { transform: rotate(14deg); } }
  @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
</style>

<rect width="1600" height="1000" fill="url(#sky)"/>

<g class="sun" transform="translate(190 140)">
  <g class="sun-rays" stroke="#b8902e" stroke-width="3">
    <line x1="0" y1="-78" x2="0" y2="-58"/><line x1="0" y1="58" x2="0" y2="78"/><line x1="-78" y1="0" x2="-58" y2="0"/><line x1="58" y1="0" x2="78" y2="0"/>
    <line x1="-55" y1="-55" x2="-41" y2="-41"/><line x1="41" y1="41" x2="55" y2="55"/><line x1="-55" y1="55" x2="-41" y2="41"/><line x1="41" y1="-41" x2="55" y2="-55"/>
  </g>
  <circle r="48" fill="#f6d36a" stroke="#3b2a1a" stroke-width="2"/>
  <circle r="36" fill="none" stroke="#b8902e" stroke-width="1.5" stroke-dasharray="4 5"/>
</g>

<g fill="#f7f0e1" stroke="#3b2a1a" stroke-width="1.5">
  <path class="cloud" d="M560 120 q20 -26 50 -10 q22 -30 56 -4 q34 -6 32 22 q24 10 4 26 q-30 14 -60 2 q-26 18 -56 2 q-36 6 -40 -18 q-10 -16 14 -20 Z"/>
  <path class="cloud c2" d="M1220 90 q24 -28 56 -8 q26 -26 58 2 q30 0 26 24 q18 14 -6 24 q-32 10 -58 -2 q-30 16 -58 0 q-30 2 -30 -20 q-4 -16 12 -20 Z"/>
</g>

<g class="night"><rect width="1600" height="1000" fill="#0d1838"/></g>
<g class="stars" fill="#f6dc8c">
  <circle class="star" cx="300" cy="70" r="2.2"/><circle class="star" cx="480" cy="190" r="1.8"/><circle class="star" cx="700" cy="60" r="2"/>
  <circle class="star" cx="880" cy="160" r="1.6"/><circle class="star" cx="1040" cy="80" r="2.3"/><circle class="star" cx="1400" cy="200" r="1.8"/>
  <circle class="star" cx="1520" cy="70" r="2"/><circle class="star" cx="140" cy="250" r="1.6"/><circle class="star" cx="620" cy="260" r="1.4"/>
</g>
<g class="moon" transform="translate(1300 120)">
  <path d="M0 -46 A46 46 0 1 0 0 46 A36 36 0 1 1 0 -46 Z" fill="#f6dc8c" stroke="#b8902e" stroke-width="1.5"/>
  <polygon points="22,-6 26,4 37,4 28,11 31,22 22,15 13,22 16,11 7,4 18,4" fill="#f6dc8c"/>
</g>

<g class="flock"><use href="#bird" x="0" y="200"/><use href="#bird" x="34" y="186"/><use href="#bird" x="60" y="212"/><use href="#bird" x="92" y="196"/></g>

<g stroke="#3b2a1a" stroke-width="1.6">
  <path d="M-20 400 Q120 250 300 330 Q460 230 640 320 Q820 240 1000 310 Q1180 230 1360 300 Q1500 250 1620 320 L1620 520 L-20 520 Z" fill="#d9a3a0"/>
  <path d="M-20 440 Q160 340 360 400 Q560 330 760 390 Q980 320 1200 380 Q1420 330 1620 390 L1620 520 L-20 520 Z" fill="#b9b0d4"/>
</g>

<use href="#cypress" x="90" y="300"/><use href="#cypress" x="1530" y="290"/><use href="#cypress" x="700" y="310"/>

<g transform="translate(0 0)">
  <use href="#minaret" x="340" y="240"/><use href="#minaret" x="500" y="240"/>
  <rect x="352" y="360" width="140" height="110" fill="#f3ead8" stroke="#3b2a1a" stroke-width="1.5"/>
  <rect x="372" y="330" width="100" height="30" fill="#efe3c9" stroke="#3b2a1a" stroke-width="1.5"/>
  <path d="M372 330 A50 48 0 0 1 472 330 Z" fill="#7f95ad" stroke="#3b2a1a" stroke-width="1.5"/>
  <line x1="422" y1="282" x2="422" y2="262" stroke="#b8902e" stroke-width="2.5"/>
  <path d="M378 470 v-40 a14 14 0 0 1 28 0 v40 M438 470 v-40 a14 14 0 0 1 28 0 v40" fill="#4a3826" stroke="#3b2a1a" stroke-width="1.2"/>
</g>

<g>
  <use href="#minaret" x="880" y="210"/><use href="#minaret" x="1260" y="210"/>
  <use href="#minaret" x="925" y="250"/><use href="#minaret" x="1215" y="250"/>
  <rect x="940" y="370" width="260" height="100" fill="#f3ead8" stroke="#3b2a1a" stroke-width="1.6"/>
  <path d="M945 370 A52 44 0 0 1 1049 370 Z M1091 370 A52 44 0 0 1 1195 370 Z" fill="#8ea2b8" stroke="#3b2a1a" stroke-width="1.5"/>
  <rect x="990" y="320" width="160" height="50" fill="#efe3c9" stroke="#3b2a1a" stroke-width="1.6"/>
  <g fill="#4a3826"><rect class="win" x="1005" y="334" width="10" height="22" rx="5"/><rect class="win" x="1035" y="334" width="10" height="22" rx="5"/><rect class="win" x="1065" y="334" width="10" height="22" rx="5"/><rect class="win" x="1095" y="334" width="10" height="22" rx="5"/><rect class="win" x="1125" y="334" width="10" height="22" rx="5"/></g>
  <path d="M990 320 A80 78 0 0 1 1150 320 Z" fill="#7f95ad" stroke="#3b2a1a" stroke-width="1.8"/>
  <path d="M1004 300 Q1070 270 1136 300" fill="none" stroke="#5f7590" stroke-width="1.2"/>
  <line x1="1070" y1="242" x2="1070" y2="214" stroke="#b8902e" stroke-width="3"/>
  <path d="M1070 200 a9 9 0 1 0 0 16 a7 7 0 1 1 0 -16 Z" fill="#b8902e"/>
  <path d="M960 470 v-50 a18 18 0 0 1 36 0 v50 M1052 470 v-60 a18 18 0 0 1 36 0 v60 M1144 470 v-50 a18 18 0 0 1 36 0 v50" fill="#4a3826" stroke="#3b2a1a" stroke-width="1.2"/>
</g>

<use href="#house" x="580" y="420"/><use href="#house" x="630" y="408"/><use href="#house" x="760" y="418"/><use href="#house" x="810" y="430"/>
<use href="#house" x="1300" y="420"/><use href="#house" x="1360" y="410"/><use href="#house" x="1440" y="424"/><use href="#house" x="200" y="424"/><use href="#house" x="250" y="414"/>

<rect x="-20" y="456" width="1640" height="14" fill="url(#merlon)"/>
<rect x="-20" y="470" width="1640" height="40" fill="#c9a77a" stroke="#3b2a1a" stroke-width="1.6"/>
<g fill="#c9a77a" stroke="#3b2a1a" stroke-width="1.6">
  <rect x="140" y="440" width="44" height="70"/><rect x="760" y="440" width="44" height="70"/><rect x="1440" y="440" width="44" height="70"/>
</g>

<path d="M-20 510 L1620 510 L1620 780 L-20 780 Z" fill="#8fb36f" stroke="#3b2a1a" stroke-width="1.6"/>
<rect x="-20" y="512" width="1640" height="266" fill="url(#flowers)"/>
<use href="#tent" x="210" y="610"/><use href="#tent" x="390" y="640"/><use href="#tent" x="1380" y="620"/>
<use href="#cypress" x="560" y="560"/><use href="#cypress" x="1220" y="570"/><use href="#cypress" x="40" y="600"/><use href="#cypress" x="1560" y="590"/>

<g class="procession">
  <g class="rider"><use href="#rider" x="0" y="762" style="color:#f4efe2;--k:#2a5d3a;--p:#c4352c"/></g>
  <g class="rider" style="animation-delay:-0.3s"><use href="#rider" x="-170" y="758" style="color:#8a5a34;--k:#c4352c;--p:#2a5d3a"/></g>
  <g class="rider" style="animation-delay:-0.5s"><use href="#rider" x="-340" y="764" style="color:#3b2a1a;--k:#1f4e8c;--p:#d4a84a"/></g>
  <g class="rider" style="animation-delay:-0.15s"><use href="#rider" x="-510" y="760" style="color:#b9a07a;--k:#7a3b6e;--p:#c4352c"/></g>
  <g class="rider" style="animation-delay:-0.4s"><use href="#rider" x="-680" y="762" style="color:#f4efe2;--k:#a8740f;--p:#1f4e8c"/></g>
</g>

<path d="M-20 780 Q200 764 400 780 T800 780 T1200 780 T1620 780 L1620 1020 L-20 1020 Z" fill="url(#sea)" stroke="#3b2a1a" stroke-width="1.6"/>
<g class="waves"><rect x="-60" y="800" width="1720" height="220" fill="url(#waves)"/></g>
<g class="boat1"><use href="#galley" x="330" y="850"/></g>
<g class="boat2"><use href="#galley" x="1260" y="880"/></g>
</svg>

<defs>
  <g id="corner">
    <path d="M0 0 H150 Q112 40 96 96 Q40 112 0 150 Z" fill="#d4a84a" stroke="#3b2a1a" stroke-width="1.5"/>
    <path d="M0 0 H112 Q84 30 72 72 Q30 84 0 112 Z" fill="#1d3a6e" stroke="#d4a84a" stroke-width="2"/>
    <path d="M44 44 m-26 0 a26 26 0 1 0 52 0 a26 26 0 1 0 -52 0" fill="#8a2a22" stroke="#d4a84a" stroke-width="2.5"/>
    <path d="M44 26 Q54 44 44 62 Q34 44 44 26 Z M26 44 Q44 54 62 44 Q44 34 26 44 Z" fill="#d4a84a"/>
    <circle cx="44" cy="44" r="4" fill="#f7f2e6"/>
    <path d="M88 16 q10 8 0 18 q-10 -10 0 -18 Z M16 88 q8 10 18 0 q-10 -10 -18 0 Z" fill="#d4a84a"/>
    <path d="M118 8 q-8 14 -24 18 M8 118 q14 -8 18 -24" fill="none" stroke="#f7f2e6" stroke-width="1.5"/>
  </g>
  <g id="medallion">
    <path d="M-90 0 Q-60 0 -40 34 Q0 70 40 34 Q60 0 90 0 Z" fill="#d4a84a" stroke="#3b2a1a" stroke-width="1.5"/>
    <path d="M-62 0 Q-44 0 -30 22 Q0 48 30 22 Q44 0 62 0 Z" fill="#1d3a6e" stroke="#d4a84a" stroke-width="2"/>
    <path d="M0 6 Q14 18 0 34 Q-14 18 0 6 Z" fill="#8a2a22" stroke="#d4a84a" stroke-width="1.5"/>
  </g>
</defs>
<g fill="none">
  <rect width="100%" height="100%" stroke="#3b2a1a" stroke-width="88"/>
  <rect width="100%" height="100%" stroke="#d4a84a" stroke-width="84"/>
  <rect width="100%" height="100%" stroke="#8a2a22" stroke-width="76"/>
  <rect width="100%" height="100%" stroke="#d4a84a" stroke-width="36"/>
  <rect width="100%" height="100%" stroke="#1d3a6e" stroke-width="30"/>
  <rect class="beads" x="27" y="27" width="100%" height="100%" style="width:calc(100% - 54px);height:calc(100% - 54px)" stroke="#e7c770" stroke-width="3.5" stroke-dasharray="0.1 13" stroke-linecap="round"/>
</g>
<svg overflow="visible"><use href="#corner"/></svg>
<svg x="100%" overflow="visible"><use href="#corner" transform="scale(-1 1)"/></svg>
<svg y="100%" overflow="visible"><use href="#corner" transform="scale(1 -1)"/></svg>
<svg x="100%" y="100%" overflow="visible"><use href="#corner" transform="scale(-1 -1)"/></svg>
<svg x="50%" overflow="visible"><use href="#medallion"/></svg>
<svg x="50%" y="100%" overflow="visible"><use href="#medallion" transform="scale(1 -1)"/></svg>
</svg>`,
  },
  {
    id: 'lale-bahcesi',
    label: 'Lale Bahçesi',
    blurb: 'İznik çinisi ve laleler',
    alt: 'İznik çinisi duvar önünde rüzgârda sallanan laleler',
    glass: { blur: 3, opacity: 0.6 },
    def: {
      label: 'Lale Bahçesi',
      roles: { accent: '#1f4fa3', danger: '#c0392b', success: '#2f8a5a', warning: '#b7791f', pro: '#6a4c9c' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#e8eff4',
            'surface-1': '#f0f5f8',
            'surface-2': '#f8fbfc',
            'text-primary': '#0d2131',
            'text-secondary': '#2a4354',
            'text-muted': '#465e6f',
          },
        },
      },
      dark: {
        roles: { accent: '#3cc1c1' },
        gray: {
          anchors: {
            'surface-0': '#0c1626',
            'surface-1': '#111d31',
            'surface-2': '#16243c',
            'surface-3': '#1b2a45',
            'text-primary': '#eef5fa',
            'text-secondary': '#c6d5e2',
            'text-muted': '#a2b5c6',
          },
        },
      },
    },
    scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs>
  <g id="petal"><path d="M0 -12 C14 -30 14 -52 0 -64 C-14 -52 -14 -30 0 -12 Z" fill="#1f4fa3" stroke="#14336b" stroke-width="1.2"/><path d="M0 -22 C6 -32 6 -44 0 -52 C-6 -44 -6 -32 0 -22 Z" fill="#2bb3b1"/></g>
  <g id="tulipsm"><path d="M0 0 C-10 -6 -12 -22 -6 -32 L-2 -24 L0 -36 L2 -24 L6 -32 C12 -22 10 -6 0 0 Z" fill="#c8372d" stroke="#7a1f1a" stroke-width="1"/><path d="M0 0 V14" stroke="#2f7d4a" stroke-width="2.5"/></g>
  <pattern id="tile" width="200" height="200" patternUnits="userSpaceOnUse">
    <rect width="200" height="200" fill="#f7f9fb"/>
    <g transform="translate(100 100)">
      <use href="#petal"/><use href="#petal" transform="rotate(45)"/><use href="#petal" transform="rotate(90)"/><use href="#petal" transform="rotate(135)"/>
      <use href="#petal" transform="rotate(180)"/><use href="#petal" transform="rotate(225)"/><use href="#petal" transform="rotate(270)"/><use href="#petal" transform="rotate(315)"/>
      <circle r="16" fill="#c8372d" stroke="#7a1f1a" stroke-width="1.5"/><circle r="7" fill="#f7f9fb"/>
    </g>
    <g fill="#2bb3b1" stroke="#1f4fa3" stroke-width="3">
      <circle cx="0" cy="0" r="30"/><circle cx="200" cy="0" r="30"/><circle cx="0" cy="200" r="30"/><circle cx="200" cy="200" r="30"/>
    </g>
    <g fill="#c8372d"><circle cx="0" cy="0" r="10"/><circle cx="200" cy="0" r="10"/><circle cx="0" cy="200" r="10"/><circle cx="200" cy="200" r="10"/></g>
    <use href="#tulipsm" x="100" y="196" transform="rotate(180 100 180)"/><use href="#tulipsm" x="100" y="20"/>
    <use href="#tulipsm" x="20" y="100" transform="rotate(-90 20 100)"/><use href="#tulipsm" x="180" y="100" transform="rotate(90 180 100)"/>
    <path d="M30 60 Q60 40 70 10 M170 140 Q140 160 130 190 M140 30 Q160 60 190 70 M60 170 Q40 140 10 130" fill="none" stroke="#2f7d4a" stroke-width="2"/>
    <rect width="200" height="200" fill="none" stroke="#14336b" stroke-width="2" stroke-opacity="0.35"/>
  </pattern>
  <g id="tulip">
    <path d="M0 0 C-6 -60 4 -120 0 -180" fill="none" stroke="#2f7d4a" stroke-width="6"/>
    <path d="M0 -40 C-40 -60 -60 -110 -50 -140 C-30 -110 -10 -80 0 -60 Z" fill="#3c8a52" stroke="#1f5a33" stroke-width="1.5"/>
    <path d="M2 -70 C40 -90 52 -130 40 -160 C26 -130 12 -104 2 -90 Z" fill="#3c8a52" stroke="#1f5a33" stroke-width="1.5"/>
    <path d="M0 -176 C-26 -186 -30 -230 -18 -262 L-8 -232 L0 -272 L8 -232 L18 -262 C30 -230 26 -186 0 -176 Z" fill="var(--c, #c8372d)" stroke="#5e1712" stroke-width="2"/>
    <path d="M0 -182 C-8 -200 -8 -226 0 -248 C8 -226 8 -200 0 -182 Z" fill="#ffffff" fill-opacity="0.25"/>
  </g>
  <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7f9fb" stop-opacity="0"/><stop offset="1" stop-color="#f7f9fb" stop-opacity="0.85"/></linearGradient>
</defs>
<style>
  .sway { transform-box: fill-box; transform-origin: bottom center; animation: sway 5s ease-in-out infinite alternate; }
  .d1 { animation-duration: 6.2s; animation-delay: -2s; } .d2 { animation-duration: 4.4s; animation-delay: -1s; } .d3 { animation-duration: 7s; animation-delay: -3.5s; }
  @keyframes sway { from { transform: rotate(-4deg); } to { transform: rotate(4deg); } }
  .petalf { animation: fall 22s linear infinite; }
  .p2 { animation-duration: 28s; animation-delay: -9s; } .p3 { animation-duration: 25s; animation-delay: -16s; }
  @keyframes fall { from { transform: translate(0, -120px) rotate(0deg); } to { transform: translate(-260px, 1150px) rotate(540deg); } }
  .shine { animation: shine 9s ease-in-out infinite alternate; }
  @keyframes shine { from { opacity: 0; } to { opacity: 0.18; } }
  .night { opacity: 0; }
  @media (prefers-color-scheme: dark) { .night { opacity: 0.55; } }
  @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
</style>
<rect width="1600" height="1000" fill="url(#tile)"/>
<rect class="shine" width="1600" height="1000" fill="#ffffff"/>
<rect y="640" width="1600" height="360" fill="url(#fade)"/>
<rect class="night" width="1600" height="1000" fill="#07101f"/>
<g>
  <g class="sway"><use href="#tulip" x="80" y="1010"/></g>
  <g class="sway d1"><use href="#tulip" x="170" y="1030" style="--c:#e0583c"/></g>
  <g class="sway d2"><use href="#tulip" x="250" y="1010" style="--c:#1f4fa3"/></g>
  <g class="sway d3"><use href="#tulip" x="1300" y="1020" style="--c:#e0583c"/></g>
  <g class="sway"><use href="#tulip" x="1390" y="1005"/></g>
  <g class="sway d2"><use href="#tulip" x="1480" y="1030" style="--c:#1f4fa3"/></g>
  <g class="sway d1"><use href="#tulip" x="1560" y="1010"/></g>
</g>
<g fill="#c8372d">
  <path class="petalf" d="M1200 0 c8 -10 20 -10 22 0 c-4 10 -16 12 -22 0 Z"/>
  <path class="petalf p2" d="M600 0 c8 -10 20 -10 22 0 c-4 10 -16 12 -22 0 Z" fill="#1f4fa3"/>
  <path class="petalf p3" d="M950 0 c8 -10 20 -10 22 0 c-4 10 -16 12 -22 0 Z"/>
</g>
</svg>`,
  },
  {
    id: 'derin-deniz',
    label: 'Derin Deniz',
    blurb: 'Denizanaları ve kabarcıklar (koyu)',
    alt: 'Derin okyanusta süzülen ışıltılı denizanaları ve yükselen kabarcıklar',
    glass: { blur: 3, tint: '#06141c', opacity: 0.55 },
    def: {
      label: 'Derin Deniz',
      only: 'dark',
      roles: { accent: '#3fd6c6', danger: '#ff6b7a', success: '#5ee08a', warning: '#f5c26b', pro: '#c08cff' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#06141c',
            'surface-1': '#0a1c26',
            'surface-2': '#0e2330',
            'surface-3': '#122a38',
            'text-primary': '#e8f7fa',
            'text-secondary': '#bcd8de',
            'text-muted': '#93b4bc',
          },
        },
      },
    },
    scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs>
  <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0f4a5c"/><stop offset="0.4" stop-color="#0a2a3a"/><stop offset="1" stop-color="#030b11"/>
  </linearGradient>
  <linearGradient id="ray" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9ff3ff" stop-opacity="0.22"/><stop offset="1" stop-color="#9ff3ff" stop-opacity="0"/></linearGradient>
  <radialGradient id="bell" cx="0.5" cy="0.35" r="0.6"><stop offset="0" stop-color="var(--c, #7af5ff)" stop-opacity="0.95"/><stop offset="0.6" stop-color="var(--c, #7af5ff)" stop-opacity="0.45"/><stop offset="1" stop-color="var(--c, #7af5ff)" stop-opacity="0.1"/></radialGradient>
  <radialGradient id="halo" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="var(--c, #7af5ff)" stop-opacity="0.35"/><stop offset="1" stop-color="var(--c, #7af5ff)" stop-opacity="0"/></radialGradient>
  <g id="jelly">
    <circle cx="0" cy="-10" r="110" fill="url(#halo)"/>
    <g class="pulse">
      <path d="M-60 0 C-60 -70 60 -70 60 0 Q45 10 30 2 Q15 12 0 4 Q-15 12 -30 2 Q-45 10 -60 0 Z" fill="url(#bell)" stroke="var(--c, #7af5ff)" stroke-opacity="0.8" stroke-width="1.5"/>
      <path d="M-34 -6 C-30 -40 30 -40 34 -6" fill="none" stroke="#ffffff" stroke-opacity="0.35" stroke-width="2"/>
    </g>
    <g class="tent" fill="none" stroke="var(--c, #7af5ff)" stroke-opacity="0.55" stroke-width="2" stroke-linecap="round">
      <path d="M-40 6 C-46 50 -30 90 -42 140"/><path d="M-18 8 C-24 60 -6 110 -20 170"/><path d="M0 8 C6 70 -8 120 4 190"/>
      <path d="M18 8 C26 60 8 110 22 165"/><path d="M40 6 C48 50 30 90 44 135"/>
    </g>
  </g>
  <pattern id="bubbles" width="400" height="500" patternUnits="userSpaceOnUse">
    <g fill="none" stroke="#bff6ff" stroke-opacity="0.5" stroke-width="1.5">
      <circle cx="40" cy="60" r="5"/><circle cx="52" cy="120" r="3"/><circle cx="210" cy="300" r="6"/><circle cx="220" cy="360" r="3.5"/>
      <circle cx="330" cy="160" r="4"/><circle cx="120" cy="430" r="5"/><circle cx="300" cy="460" r="3"/>
    </g>
  </pattern>
  <pattern id="snow" width="300" height="300" patternUnits="userSpaceOnUse">
    <g fill="#d6fbff" fill-opacity="0.35"><circle cx="20" cy="40" r="1.4"/><circle cx="160" cy="90" r="1"/><circle cx="250" cy="200" r="1.3"/><circle cx="90" cy="250" r="1"/><circle cx="200" cy="20" r="0.9"/></g>
  </pattern>
</defs>
<style>
  .rays { transform-origin: 50% 0; animation: rays 14s ease-in-out infinite alternate; }
  @keyframes rays { from { transform: skewX(-6deg); opacity: 0.7; } to { transform: skewX(6deg); opacity: 1; } }
  .drift { animation: drift 45s linear infinite; }
  .j2 { animation-duration: 60s; animation-delay: -20s; } .j3 { animation-duration: 52s; animation-delay: -38s; } .j4 { animation-duration: 70s; animation-delay: -10s; }
  @keyframes drift { from { transform: translateY(400px); } to { transform: translateY(-1300px); } }
  .sway { animation: sway 9s ease-in-out infinite alternate; }
  @keyframes sway { from { transform: translateX(-30px); } to { transform: translateX(30px); } }
  .pulse { transform-box: fill-box; transform-origin: center bottom; animation: pulse 2.4s ease-in-out infinite; }
  @keyframes pulse { 0%, 100% { transform: scale(1, 1); } 50% { transform: scale(0.82, 1.12); } }
  .tent { transform-box: fill-box; transform-origin: top center; animation: tent 2.4s ease-in-out infinite; }
  @keyframes tent { 0%, 100% { transform: scaleY(1) skewX(0deg); } 50% { transform: scaleY(0.88) skewX(4deg); } }
  .bub { animation: bub 18s linear infinite; }
  @keyframes bub { from { transform: translateY(0); } to { transform: translateY(-500px); } }
  .mar { animation: mar 60s linear infinite; }
  @keyframes mar { from { transform: translateY(-300px); } to { transform: translateY(0); } }
  @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
</style>
<rect width="1600" height="1000" fill="url(#sea)"/>
<g class="rays" fill="url(#ray)">
  <polygon points="300,0 380,0 520,900 300,900"/><polygon points="620,0 660,0 760,800 600,800"/><polygon points="980,0 1060,0 1200,950 980,950"/><polygon points="1300,0 1330,0 1420,700 1300,700"/>
</g>
<g class="mar"><rect y="-300" width="1600" height="1300" fill="url(#snow)"/></g>
<g class="drift"><g class="sway"><use href="#jelly" x="260" y="700" style="--c:#7af5ff"/></g></g>
<g class="drift j2"><g class="sway" style="animation-delay:-4s"><use href="#jelly" x="1340" y="800" style="--c:#d58cff" transform="scale(0.8)"/></g></g>
<g class="drift j3"><g class="sway" style="animation-delay:-2s"><use href="#jelly" x="1650" y="1200" style="--c:#ff9fd0" transform="scale(0.55)"/></g></g>
<g class="drift j4"><g class="sway" style="animation-delay:-6s"><use href="#jelly" x="600" y="1500" style="--c:#8affc1" transform="scale(0.45)"/></g></g>
<g class="bub"><rect y="0" width="1600" height="1500" fill="url(#bubbles)"/></g>
<path d="M-20 940 Q200 900 420 930 Q640 890 900 935 Q1180 895 1400 925 Q1520 910 1620 920 L1620 1020 L-20 1020 Z" fill="#02080c"/>
<g fill="none" stroke="#0e3a3a" stroke-width="8" stroke-linecap="round">
  <path class="sway" d="M120 1000 C100 940 150 900 120 840 C100 800 140 770 130 730"/><path class="sway" style="animation-delay:-3s" d="M170 1000 C190 950 150 910 175 860"/>
  <path class="sway" style="animation-delay:-5s" d="M1460 1000 C1440 940 1490 900 1460 830 C1440 790 1480 760 1470 720"/><path class="sway" d="M1510 1000 C1530 950 1490 900 1515 850"/>
</g>
</svg>`,
  },
  {
    id: 'kis-ormani',
    label: 'Kış Ormanı',
    blurb: 'Karlı çam ormanı ve kulübe',
    alt: 'Karla kaplı çam ormanı, dumanı tüten bir kulübe ve yağan kar',
    glass: { blur: 3, opacity: 0.55 },
    def: {
      label: 'Kış Ormanı',
      roles: { accent: '#2e6fa8', danger: '#b8323a', success: '#2f7d57', warning: '#a8701a', pro: '#6a4fa0' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#e6ecf2',
            'surface-1': '#eef2f6',
            'surface-2': '#f7f9fb',
            'text-primary': '#0f1d2a',
            'text-secondary': '#2f4356',
            'text-muted': '#4b5f71',
          },
        },
      },
      dark: {
        roles: { accent: '#8cc4ff' },
        gray: {
          anchors: {
            'surface-0': '#0b1220',
            'surface-1': '#101a2b',
            'surface-2': '#152036',
            'surface-3': '#1a2640',
            'text-primary': '#eef4fa',
            'text-secondary': '#c6d3e0',
            'text-muted': '#9faebe',
          },
        },
      },
    },
    scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9cc0de"/><stop offset="0.7" stop-color="#dce9f3"/><stop offset="1" stop-color="#eef4f8"/></linearGradient>
  <g id="pine">
    <path d="M0 -200 L-36 -120 L-20 -124 L-60 -50 L-36 -56 L-80 20 L80 20 L36 -56 L60 -50 L20 -124 L36 -120 Z" fill="var(--t, #2c5546)"/>
    <path d="M0 -200 L-24 -146 Q0 -138 24 -146 Z M-36 -120 L-20 -124 Q0 -112 20 -124 L36 -120 L24 -100 Q0 -92 -24 -100 Z M-60 -50 L-36 -56 Q0 -42 36 -56 L60 -50 L46 -30 Q0 -20 -46 -30 Z M-80 20 Q0 4 80 20 L70 8 Q0 -4 -70 8 Z" fill="#f6fafd"/>
    <rect x="-8" y="20" width="16" height="22" fill="#4a3324"/>
  </g>
  <pattern id="snowA" width="320" height="320" patternUnits="userSpaceOnUse">
    <g fill="#ffffff"><circle cx="30" cy="40" r="3"/><circle cx="140" cy="110" r="2.4"/><circle cx="250" cy="30" r="3.2"/><circle cx="90" cy="220" r="2.6"/><circle cx="210" cy="260" r="3"/><circle cx="300" cy="170" r="2.2"/></g>
  </pattern>
  <pattern id="snowB" width="220" height="220" patternUnits="userSpaceOnUse">
    <g fill="#ffffff" fill-opacity="0.75"><circle cx="20" cy="30" r="1.6"/><circle cx="120" cy="80" r="1.3"/><circle cx="190" cy="160" r="1.7"/><circle cx="70" cy="180" r="1.2"/><circle cx="160" cy="20" r="1.4"/></g>
  </pattern>
  <radialGradient id="lamp" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffcf6b" stop-opacity="0.8"/><stop offset="1" stop-color="#ffb04a" stop-opacity="0"/></radialGradient>
</defs>
<style>
  .fallA { animation: fallA 14s linear infinite; }
  @keyframes fallA { from { transform: translate(0, -320px); } to { transform: translate(-60px, 0); } }
  .fallB { animation: fallB 22s linear infinite; }
  @keyframes fallB { from { transform: translate(0, -220px); } to { transform: translate(30px, 0); } }
  .smoke circle { animation: smoke 7s ease-out infinite; transform-box: fill-box; transform-origin: center; }
  .smoke circle:nth-child(2) { animation-delay: -2.3s; } .smoke circle:nth-child(3) { animation-delay: -4.6s; }
  @keyframes smoke { from { transform: translate(0, 0) scale(0.6); opacity: 0.8; } to { transform: translate(40px, -160px) scale(2.2); opacity: 0; } }
  .night, .moon, .stars, .glow { opacity: 0; }
  .star { animation: tw 4s ease-in-out infinite alternate; } .star:nth-child(2n) { animation-delay: -2s; }
  @keyframes tw { from { opacity: 0.3; } to { opacity: 1; } }
  @media (prefers-color-scheme: dark) {
    .night { opacity: 0.72; } .moon, .stars { opacity: 1; } .glow { opacity: 1; } .win { fill: #ffcf6b; }
    .fallA { opacity: 0.6; } .fallB { opacity: 0.4; }
  }
  @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
</style>
<rect width="1600" height="1000" fill="url(#sky)"/>
<path d="M-20 560 L200 330 L340 450 L520 280 L700 470 L860 360 L1040 500 L1220 300 L1400 440 L1620 340 L1620 640 L-20 640 Z" fill="#b7cce0"/>
<path d="M200 330 L240 372 L210 366 L180 390 L160 372 Z M520 280 L572 335 L530 326 L500 350 L470 320 Z M1220 300 L1270 352 L1232 344 L1200 366 L1172 350 Z" fill="#f6fafd"/>
<rect class="night" width="1600" height="1000" fill="#0a1430"/>
<g class="stars" fill="#eaf2ff">
  <circle class="star" cx="140" cy="80" r="1.8"/><circle class="star" cx="420" cy="140" r="1.4"/><circle class="star" cx="700" cy="60" r="1.9"/><circle class="star" cx="1000" cy="130" r="1.5"/>
  <circle class="star" cx="1320" cy="70" r="2"/><circle class="star" cx="1500" cy="190" r="1.4"/><circle class="star" cx="880" cy="220" r="1.2"/>
</g>
<g class="moon"><circle cx="1240" cy="150" r="60" fill="#f4f1e4"/><circle cx="1222" cy="138" r="10" fill="#e2ddc8"/><circle cx="1262" cy="170" r="7" fill="#e2ddc8"/><circle cx="1240" cy="150" r="120" fill="#f4f1e4" opacity="0.08"/></g>
<path d="M-20 700 Q300 640 640 690 Q980 630 1300 680 Q1460 660 1620 670 L1620 1020 L-20 1020 Z" fill="#eef4f9"/>
<g style="--t:#3b6658"><use href="#pine" x="480" y="660" transform="scale(1)"/><use href="#pine" x="560" y="680"/><use href="#pine" x="1060" y="670"/><use href="#pine" x="1140" y="650"/></g>
<g>
  <circle class="glow" cx="840" cy="760" r="140" fill="url(#lamp)"/>
  <rect x="770" y="720" width="150" height="90" fill="#7a4e33" stroke="#4a2e1d" stroke-width="2"/>
  <path d="M750 726 L845 650 L940 726 Z" fill="#5a3826"/><path d="M745 728 L845 646 L945 728 L935 734 L845 662 L755 734 Z" fill="#f6fafd"/>
  <rect x="880" y="660" width="20" height="40" fill="#5a3826"/><rect x="876" y="654" width="28" height="10" fill="#f6fafd"/>
  <rect class="win" x="790" y="745" width="34" height="28" fill="#2f2a2a" stroke="#4a2e1d" stroke-width="2"/><rect class="win" x="860" y="745" width="34" height="28" fill="#2f2a2a" stroke="#4a2e1d" stroke-width="2"/>
  <g class="smoke" fill="#dfe6ee"><circle cx="890" cy="640" r="12"/><circle cx="890" cy="640" r="12"/><circle cx="890" cy="640" r="12"/></g>
</g>
<use href="#pine" x="120" y="820" transform="scale(1)"/><use href="#pine" x="240" y="860"/><use href="#pine" x="1380" y="850"/><use href="#pine" x="1500" y="820"/>
<use href="#pine" x="20" y="940"/><use href="#pine" x="1580" y="950"/>
<path d="M-20 900 Q400 870 800 895 Q1200 870 1620 890 L1620 1020 L-20 1020 Z" fill="#f7fafc"/>
<g class="fallB"><rect y="-220" width="1700" height="1240" fill="url(#snowB)"/></g>
<g class="fallA"><rect y="-320" width="1700" height="1340" fill="url(#snowA)"/></g>
</svg>`,
  },
  {
    id: 'murekkep',
    label: 'Mürekkep',
    blurb: 'Mürekkep lekesi dağlar, sis ve kırmızı mühür',
    alt: 'Mürekkep lekesi tarzında sisli dağlar ve süzülen bir kuş',
    glass: { blur: 3, opacity: 0.55 },
    def: {
      label: 'Mürekkep',
      roles: { accent: '#2f4f6f', danger: '#b5302a', success: '#3f6e4a', warning: '#a26d1c', pro: '#6b4e7a' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#ebe7de',
            'surface-1': '#f2efe8',
            'surface-2': '#faf8f4',
            'text-primary': '#151310',
            'text-secondary': '#38342f',
            'text-muted': '#55504a',
          },
        },
      },
      dark: {
        roles: { accent: '#9fb8d0' },
        gray: {
          anchors: {
            'surface-0': '#121214',
            'surface-1': '#18181b',
            'surface-2': '#1e1e22',
            'surface-3': '#232328',
            'text-primary': '#f1ede5',
            'text-secondary': '#ccc7bd',
            'text-muted': '#a49f95',
          },
        },
      },
    },
    scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" style="--paper:#efebe2;--ink:#1d1c1a;--mist:#efebe2;--seal:#b5302a">
<defs>
  <linearGradient id="m1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--ink);stop-opacity:0.28"/><stop offset="0.7" style="stop-color:var(--ink);stop-opacity:0.04"/><stop offset="1" style="stop-color:var(--ink);stop-opacity:0"/></linearGradient>
  <linearGradient id="m2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--ink);stop-opacity:0.5"/><stop offset="0.6" style="stop-color:var(--ink);stop-opacity:0.1"/><stop offset="1" style="stop-color:var(--ink);stop-opacity:0"/></linearGradient>
  <linearGradient id="m3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--ink);stop-opacity:0.82"/><stop offset="0.55" style="stop-color:var(--ink);stop-opacity:0.22"/><stop offset="1" style="stop-color:var(--ink);stop-opacity:0"/></linearGradient>
  <filter id="soft" x="-10%" y="-50%" width="120%" height="200%"><feGaussianBlur stdDeviation="22"/></filter>
  <filter id="edge"><feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="4"/><feDisplacementMap in="SourceGraphic" scale="14"/></filter>
  <pattern id="grain" width="160" height="160" patternUnits="userSpaceOnUse"><g style="fill:var(--ink)" fill-opacity="0.05"><circle cx="12" cy="30" r="0.8"/><circle cx="80" cy="12" r="0.6"/><circle cx="140" cy="90" r="0.9"/><circle cx="50" cy="120" r="0.7"/><circle cx="110" cy="150" r="0.6"/></g></pattern>
</defs>
<style>
  @media (prefers-color-scheme: dark) { svg { --paper:#141416 !important; --ink:#e9e4da !important; --mist:#141416 !important; --seal:#c9483e !important; } }
  .mist { animation: mist 40s ease-in-out infinite alternate; }
  .mist.b { animation-duration: 55s; animation-direction: alternate-reverse; }
  @keyframes mist { from { transform: translateX(-120px); } to { transform: translateX(140px); } }
  .bird { animation: fly 60s linear infinite; }
  @keyframes fly { from { transform: translate(-150px, 60px); } to { transform: translate(1750px, -40px); } }
  .wing { transform-box: fill-box; transform-origin: center; animation: flap 1.6s ease-in-out infinite alternate; }
  @keyframes flap { from { transform: scaleY(1); } to { transform: scaleY(-0.6); } }
  .sun { animation: breathe 12s ease-in-out infinite alternate; }
  @keyframes breathe { from { opacity: 0.55; } to { opacity: 0.8; } }
  @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
</style>
<rect width="1600" height="1000" style="fill:var(--paper)"/>
<circle class="sun" cx="1160" cy="250" r="78" style="fill:var(--seal)" fill-opacity="0.75"/>
<g filter="url(#edge)">
  <path d="M-40 560 C120 470 220 380 330 330 C400 300 450 340 520 300 C600 250 660 200 740 240 C820 280 860 360 960 330 C1060 300 1120 220 1230 260 C1340 300 1420 380 1640 360 L1640 1000 L-40 1000 Z" fill="url(#m1)"/>
  <path d="M-40 680 C80 620 160 520 260 470 C340 430 400 470 470 440 C560 400 600 330 690 360 C770 390 800 470 880 500 C960 530 1010 470 1090 430 C1180 385 1260 420 1330 480 C1420 550 1520 560 1640 540 L1640 1000 L-40 1000 Z" fill="url(#m2)"/>
</g>
<g class="mist" filter="url(#soft)" style="fill:var(--mist)" fill-opacity="0.9"><ellipse cx="400" cy="600" rx="420" ry="40"/><ellipse cx="1200" cy="640" rx="380" ry="36"/></g>
<g filter="url(#edge)">
  <path d="M-40 820 C60 760 140 640 230 600 C300 570 340 620 390 650 C460 690 520 700 600 760 C700 830 800 860 900 880 L-40 1000 Z" fill="url(#m3)"/>
  <path d="M1640 760 C1560 720 1500 640 1420 610 C1350 585 1310 640 1250 680 C1180 725 1120 760 1040 820 C960 880 880 920 800 960 L1640 1000 Z" fill="url(#m3)"/>
</g>
<g class="mist b" filter="url(#soft)" style="fill:var(--mist)" fill-opacity="0.85"><ellipse cx="800" cy="860" rx="520" ry="46"/></g>
<g style="stroke:var(--ink)" stroke-linecap="round" fill="none" stroke-opacity="0.8">
  <path d="M180 640 q-6 -40 4 -80 M188 600 q14 -10 26 -8 M186 580 q-14 -10 -22 -4" stroke-width="3"/>
  <path d="M1420 640 q4 -50 -6 -96 M1416 590 q-16 -10 -30 -6 M1418 570 q14 -12 24 -8" stroke-width="3"/>
</g>
<g class="bird" style="stroke:var(--ink)" fill="none" stroke-width="2.6" stroke-linecap="round">
  <path class="wing" d="M200 220 q16 -14 30 0 q14 -14 30 0"/>
</g>
<rect width="1600" height="1000" fill="url(#grain)"/>
<g transform="translate(1470 860)"><rect width="46" height="58" rx="4" style="fill:var(--seal)" fill-opacity="0.85"/><path d="M12 14 h22 M23 14 v30 M12 30 h22 M14 44 h18" stroke="#f5efe4" stroke-width="3" stroke-linecap="round" fill="none"/></g>
</svg>`,
  },
  {
    id: 'mavi-kopya',
    label: 'Mavi Kopya',
    blurb: 'Teknik çizim: kendini çizen dişliler (koyu)',
    alt: 'Teknik çizim kâğıdında kendini çizen dişliler ve ölçü çizgileri',
    glass: { blur: 3, tint: '#0a1a2f', opacity: 0.55 },
    def: {
      label: 'Mavi Kopya',
      only: 'dark',
      roles: { accent: '#7cc4ff', danger: '#ff7a7a', success: '#6fe3a5', warning: '#ffd27a', pro: '#c3a3ff' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#0a1a2f',
            'surface-1': '#0e2139',
            'surface-2': '#122843',
            'surface-3': '#162f4d',
            'text-primary': '#eef5ff',
            'text-secondary': '#c4d7ee',
            'text-muted': '#9bb3d1',
          },
        },
      },
    },
    scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs>
  <radialGradient id="bg" cx="0.5" cy="0.45" r="0.8"><stop offset="0" stop-color="#14467a"/><stop offset="1" stop-color="#0a2547"/></radialGradient>
  <pattern id="fine" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0 H0 V20" fill="none" stroke="#e6f1ff" stroke-opacity="0.07" stroke-width="1"/></pattern>
  <pattern id="major" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M100 0 H0 V100" fill="none" stroke="#e6f1ff" stroke-opacity="0.16" stroke-width="1.2"/></pattern>
  <g id="gear">
    <path d="M-15.3 -141.2L-10.7 -169.7L10.7 -169.7L15.3 -141.2L39.9 -136.3L55.1 -160.8L74.8 -152.7L68.2 -124.6L89.0 -110.6L112.4 -127.5L127.5 -112.4L110.6 -89.0L124.6 -68.2L152.7 -74.8L160.8 -55.1L136.3 -39.9L141.2 -15.3L169.7 -10.7L169.7 10.7L141.2 15.3L136.3 39.9L160.8 55.1L152.7 74.8L124.6 68.2L110.6 89.0L127.5 112.4L112.4 127.5L89.0 110.6L68.2 124.6L74.8 152.7L55.1 160.8L39.9 136.3L15.3 141.2L10.7 169.7L-10.7 169.7L-15.3 141.2L-39.9 136.3L-55.1 160.8L-74.8 152.7L-68.2 124.6L-89.0 110.6L-112.4 127.5L-127.5 112.4L-110.6 89.0L-124.6 68.2L-152.7 74.8L-160.8 55.1L-136.3 39.9L-141.2 15.3L-169.7 10.7L-169.7 -10.7L-141.2 -15.3L-136.3 -39.9L-160.8 -55.1L-152.7 -74.8L-124.6 -68.2L-110.6 -89.0L-127.5 -112.4L-112.4 -127.5L-89.0 -110.6L-68.2 -124.6L-74.8 -152.7L-55.1 -160.8L-39.9 -136.3Z"/>
    <circle r="60"/><circle r="22"/>
    <circle cx="0" cy="-100" r="14"/><circle cx="87" cy="50" r="14"/><circle cx="-87" cy="50" r="14"/>
  </g>
</defs>
<style>
  .draw { stroke-dasharray: 1400; stroke-dashoffset: 1400; animation: draw 16s ease-in-out infinite; }
  .draw.d2 { animation-delay: -5s; } .draw.d3 { animation-delay: -10s; }
  @keyframes draw { 0% { stroke-dashoffset: 1400; } 35%, 80% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -1400; } }
  .spin { transform-box: fill-box; transform-origin: center; animation: spin 60s linear infinite; }
  .spin.rev { animation-direction: reverse; animation-duration: 40s; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .scan { animation: scan 9s ease-in-out infinite alternate; }
  @keyframes scan { from { transform: translateX(0); } to { transform: translateX(1180px); } }
  .blink { animation: blink 1.4s steps(2) infinite; }
  @keyframes blink { 50% { opacity: 0; } }
  text { font-family: ui-monospace, Consolas, "Courier New", monospace; fill: #e6f1ff; }
  @media (prefers-reduced-motion: reduce) { * { animation: none !important; } .draw { stroke-dashoffset: 0; } }
</style>
<rect width="1600" height="1000" fill="url(#bg)"/>
<rect width="1600" height="1000" fill="url(#fine)"/>
<rect width="1600" height="1000" fill="url(#major)"/>
<rect x="40" y="40" width="1520" height="920" fill="none" stroke="#e6f1ff" stroke-opacity="0.55" stroke-width="2"/>
<rect x="52" y="52" width="1496" height="896" fill="none" stroke="#e6f1ff" stroke-opacity="0.25" stroke-width="1"/>
<g fill="none" stroke="#e6f1ff" stroke-width="1.8" stroke-opacity="0.85">
  <g transform="translate(1200 330)"><g class="spin"><use href="#gear"/></g></g>
  <g transform="translate(1418 452) scale(0.58)"><g class="spin rev"><use href="#gear"/></g></g>
  <g transform="translate(300 720) scale(0.75)"><g class="spin"><use href="#gear"/></g></g>
</g>
<g fill="none" stroke="#e6f1ff" stroke-width="1.4" stroke-opacity="0.75">
  <circle class="draw" cx="1200" cy="330" r="210" stroke-dasharray="8 6"/>
  <path class="draw d2" d="M1200 90 V570 M960 330 H1440" stroke-dasharray="24 6 4 6" stroke-opacity="0.5"/>
  <path class="draw d3" d="M120 520 H720 M120 520 v-12 M720 520 v-12 M140 520 l-10 -5 m10 5 l-10 5 M700 520 l10 -5 m-10 5 l10 5" />
  <path class="draw" d="M180 860 C300 700 420 940 560 780 S800 660 900 820"/>
  <path class="draw d2" d="M980 640 L1300 640 L1340 700 L1340 820 L980 820 Z M1020 680 h60 v100 h-60 Z M1160 700 a40 40 0 1 0 0.1 0"/>
</g>
<g font-size="15" opacity="0.85">
  <text x="390" y="508">600.00</text>
  <text x="1220" y="112">Ø 420</text>
  <text x="1432" y="322">R 210</text>
  <text x="984" y="628">DETAY A · 1:2</text>
</g>
<g transform="translate(1180 840)" fill="none" stroke="#e6f1ff" stroke-opacity="0.7" stroke-width="1.4">
  <rect width="368" height="108"/><path d="M0 36 H368 M0 72 H368 M180 36 V108"/>
</g>
<g font-size="13" opacity="0.85">
  <text x="1194" y="864">PROJE: ÇİZİM MASASI</text>
  <text x="1194" y="900">ÖLÇEK 1:5</text><text x="1374" y="900">PAFTA 01/01</text>
  <text x="1194" y="936">REV. C</text><text x="1374" y="936">ONAY<tspan class="blink"> _</tspan></text>
</g>
<g class="scan"><line x1="200" y1="60" x2="200" y2="940" stroke="#7cc4ff" stroke-opacity="0.25" stroke-width="2"/></g>
</svg>`,
  },
  {
    id: 'bauhaus',
    label: 'Bauhaus',
    blurb: 'Ana renklerde geometrik kompozisyon',
    alt: 'Ana renklerde dönen daireler, yarım daireler ve kayan bloklardan geometrik bir kompozisyon',
    glass: { blur: 3, opacity: 0.6 },
    def: {
      label: 'Bauhaus',
      roles: { accent: '#1f4fbf', danger: '#d0342c', success: '#2e7d4f', warning: '#c98a0b', pro: '#6a3fa0' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#ede7da',
            'surface-1': '#f4efe5',
            'surface-2': '#fbf8f2',
            'text-primary': '#121212',
            'text-secondary': '#363430',
            'text-muted': '#53504a',
          },
        },
      },
      dark: {
        roles: { accent: '#f2c230' },
        gray: {
          anchors: {
            'surface-0': '#141416',
            'surface-1': '#1b1b1e',
            'surface-2': '#222226',
            'surface-3': '#27272c',
            'text-primary': '#f5f1e8',
            'text-secondary': '#d1ccc2',
            'text-muted': '#a9a49a',
          },
        },
      },
    },
    scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" style="--bg:#efe8da;--k:#151515;--r:#d0342c;--b:#1f4fbf;--y:#f2c230;--c:#f8f4ec">
<style>
  @media (prefers-color-scheme: dark) { svg { --bg:#151517 !important; --k:#ece6da !important; --c:#202024 !important; } }
  .rot { transform-box: fill-box; transform-origin: center; animation: rot 48s linear infinite; }
  .rot.rev { animation-direction: reverse; animation-duration: 32s; }
  @keyframes rot { to { transform: rotate(360deg); } }
  .flip { transform-box: fill-box; transform-origin: center; animation: flip 10s ease-in-out infinite; }
  .flip.f2 { animation-delay: -2.5s; } .flip.f3 { animation-delay: -5s; } .flip.f4 { animation-delay: -7.5s; }
  @keyframes flip { 0%, 40% { transform: rotate(0deg); } 50%, 90% { transform: rotate(180deg); } 100% { transform: rotate(360deg); } }
  .slide { animation: slide 14s cubic-bezier(.7,0,.3,1) infinite alternate; }
  @keyframes slide { from { transform: translateX(0); } to { transform: translateX(260px); } }
  .rise { animation: rise 11s cubic-bezier(.7,0,.3,1) infinite alternate; }
  @keyframes rise { from { transform: translateY(0); } to { transform: translateY(-180px); } }
  .pulse { transform-box: fill-box; transform-origin: center; animation: pulse 7s ease-in-out infinite alternate; }
  @keyframes pulse { from { transform: scale(0.86); } to { transform: scale(1.04); } }
  @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
</style>
<rect width="1600" height="1000" style="fill:var(--bg)"/>
<g style="stroke:var(--k)" stroke-width="2" opacity="0.18"><path d="M0 250 H1600 M0 750 H1600 M400 0 V1000 M1200 0 V1000"/></g>
<g class="pulse"><circle cx="1220" cy="300" r="230" style="fill:var(--y)"/></g>
<g class="rot"><path d="M1220 300 m-150 0 a150 150 0 0 1 300 0 Z" style="fill:var(--r)"/></g>
<circle cx="1220" cy="300" r="40" style="fill:var(--k)"/>
<g class="slide"><rect x="120" y="120" width="320" height="120" style="fill:var(--b)"/></g>
<rect x="120" y="260" width="20" height="420" style="fill:var(--k)"/>
<g transform="translate(220 600)">
  <g class="flip"><path d="M0 0 a60 60 0 0 1 120 0 Z" style="fill:var(--r)"/></g>
  <g transform="translate(130 0)"><g class="flip f2"><path d="M0 0 a60 60 0 0 1 120 0 Z" style="fill:var(--b)"/></g></g>
  <g transform="translate(260 0)"><g class="flip f3"><path d="M0 0 a60 60 0 0 1 120 0 Z" style="fill:var(--y)"/></g></g>
  <g transform="translate(390 0)"><g class="flip f4"><path d="M0 0 a60 60 0 0 1 120 0 Z" style="fill:var(--k)"/></g></g>
</g>
<g class="rise"><rect x="1460" y="640" width="80" height="300" style="fill:var(--r)"/></g>
<g class="rot rev" style="transform-origin: 300px 860px"><path d="M300 860 L300 720 A140 140 0 0 1 440 860 Z" style="fill:var(--b)"/></g>
<polygon points="900,940 1080,640 1260,940" style="fill:var(--c);stroke:var(--k)" stroke-width="6"/>
<circle cx="1080" cy="830" r="54" style="fill:var(--r)"/>
<g style="stroke:var(--k)" stroke-width="10" stroke-linecap="square"><path d="M700 80 L960 80 M820 80 L820 200"/></g>
<g style="fill:var(--k)"><circle cx="760" cy="900" r="10"/><circle cx="800" cy="900" r="10"/><circle cx="840" cy="900" r="10"/></g>
</svg>`,
  },
  {
    id: 'yorunge',
    label: 'Yörünge',
    blurb: 'Dönen gezegenler ve yıldız alanı (koyu)',
    alt: 'İnce yörüngelerinde dönen gezegenler, parlayan bir yıldız ve yıldız alanı',
    glass: { blur: 3, tint: '#07080d', opacity: 0.55 },
    def: {
      label: 'Yörünge',
      only: 'dark',
      roles: { accent: '#8fb4ff', danger: '#ff6b6b', success: '#5fd39a', warning: '#f5b84b', pro: '#c49bff' },
      dark: {
        gray: {
          anchors: {
            'surface-0': '#07080d',
            'surface-1': '#0c0e15',
            'surface-2': '#11131c',
            'surface-3': '#151823',
            'text-primary': '#f0f2f8',
            'text-secondary': '#c7cbda',
            'text-muted': '#9ea3b6',
          },
        },
      },
    },
    scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs>
  <radialGradient id="space" cx="0.75" cy="0.45" r="0.9"><stop offset="0" stop-color="#131a2e"/><stop offset="0.5" stop-color="#090b14"/><stop offset="1" stop-color="#040509"/></radialGradient>
  <radialGradient id="star" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fff7e0"/><stop offset="0.25" stop-color="#ffd27a"/><stop offset="0.6" stop-color="#ff9a3c" stop-opacity="0.35"/><stop offset="1" stop-color="#ff9a3c" stop-opacity="0"/></radialGradient>
  <radialGradient id="pl" cx="0.35" cy="0.35" r="0.75"><stop offset="0" stop-color="#ffffff" stop-opacity="0.55"/><stop offset="1" stop-color="#000000" stop-opacity="0.55"/></radialGradient>
  <pattern id="stars1" width="260" height="260" patternUnits="userSpaceOnUse"><g fill="#dfe6ff"><circle cx="20" cy="40" r="1"/><circle cx="130" cy="20" r="0.7"/><circle cx="220" cy="110" r="1.1"/><circle cx="70" cy="180" r="0.8"/><circle cx="180" cy="230" r="0.6"/><circle cx="240" cy="200" r="0.9"/></g></pattern>
  <pattern id="stars2" width="410" height="410" patternUnits="userSpaceOnUse"><g fill="#ffffff"><circle cx="60" cy="90" r="1.5"/><circle cx="300" cy="50" r="1.3"/><circle cx="360" cy="320" r="1.6"/><circle cx="150" cy="350" r="1.2"/></g></pattern>
</defs>
<style>
  @keyframes move { to { offset-distance: 100%; } }
  .moon { animation: spin 6s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .belt { animation: belt 90s linear infinite; }
  @keyframes belt { to { stroke-dashoffset: -850; } }
  .twinkle { animation: tw 6s ease-in-out infinite alternate; }
  @keyframes tw { from { opacity: 0.45; } to { opacity: 1; } }
  .corona { transform-box: fill-box; transform-origin: center; animation: corona 8s ease-in-out infinite alternate; }
  @keyframes corona { from { transform: scale(0.94); opacity: 0.85; } to { transform: scale(1.06); opacity: 1; } }
  .comet { animation: comet 26s linear infinite; }
  @keyframes comet { 0% { transform: translate(-300px, -100px); opacity: 0; } 5% { opacity: 1; } 30% { transform: translate(900px, 380px); opacity: 0; } 100% { transform: translate(900px, 380px); opacity: 0; } }
  @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
</style>
<rect width="1600" height="1000" fill="url(#space)"/>
<rect width="1600" height="1000" fill="url(#stars1)" opacity="0.7"/>
<rect class="twinkle" width="1600" height="1000" fill="url(#stars2)"/>
<g class="comet"><path d="M0 0 L-140 -50" stroke="#cfe0ff" stroke-width="2" stroke-linecap="round" stroke-opacity="0.7"/><circle r="3" fill="#ffffff"/></g>
<g transform="translate(1180 470) rotate(-12)">
  <g fill="none" stroke="#9fb3e0" stroke-opacity="0.22" stroke-width="1.2">
    <ellipse rx="150" ry="63"/><ellipse rx="250" ry="105"/><ellipse rx="380" ry="159.6"/><ellipse rx="560" ry="235.2"/><ellipse rx="780" ry="327.6"/>
  </g>
  <ellipse class="belt" rx="465" ry="195.3" fill="none" stroke="#c9b48a" stroke-opacity="0.4" stroke-width="5" stroke-dasharray="1.5 7"/>
  <g style="offset-path:path('M 150 0 A 150 63.0 0 1 1 -150 0 A 150 63.0 0 1 1 150 0');offset-rotate:0deg;animation:move 18s linear 0s infinite"><circle r="7" fill="#b9a38a"/><circle r="7" fill="url(#pl)"/></g>
  <g style="offset-path:path('M 250 0 A 250 105.0 0 1 1 -250 0 A 250 105.0 0 1 1 250 0');offset-rotate:0deg;animation:move 34s linear -12s infinite"><circle r="13" fill="#e8c27a"/><circle r="13" fill="url(#pl)"/></g>
  <g style="offset-path:path('M 380 0 A 380 159.6 0 1 1 -380 0 A 380 159.6 0 1 1 380 0');offset-rotate:0deg;animation:move 60s linear -40s infinite"><circle r="16" fill="#4f8ad9"/><circle r="16" fill="url(#pl)"/><g class="moon"><circle cx="30" r="4" fill="#d9dde6"/></g></g>
  <g style="offset-path:path('M 560 0 A 560 235.2 0 1 1 -560 0 A 560 235.2 0 1 1 560 0');offset-rotate:0deg;animation:move 110s linear -30s infinite"><ellipse rx="56" ry="14" fill="none" stroke="#e4cf9e" stroke-opacity="0.8" stroke-width="5"/><circle r="30" fill="#d9b36e"/><circle r="30" fill="url(#pl)"/><path d="M-56 0 A56 14 0 0 0 56 0" fill="none" stroke="#e4cf9e" stroke-width="5"/></g>
  <g style="offset-path:path('M 780 0 A 780 327.6 0 1 1 -780 0 A 780 327.6 0 1 1 780 0');offset-rotate:0deg;animation:move 180s linear -100s infinite"><circle r="20" fill="#7fd0d8"/><circle r="20" fill="url(#pl)"/></g>
</g>
<g transform="translate(1180 470)">
  <circle class="corona" r="170" fill="url(#star)"/>
  <circle r="46" fill="#fff3d0"/>
</g>
</svg>`,
  },
  {
    id: 'topografya',
    label: 'Topografya',
    blurb: 'Eş yükselti eğrili harita ve rota',
    alt: 'Eş yükselti eğrili bir arazi haritası üzerinde kendini çizen bir rota',
    glass: { blur: 3, opacity: 0.58 },
    def: {
      label: 'Topografya',
      roles: { accent: '#2b5f8a', danger: '#b83a2f', success: '#3d7a45', warning: '#b07a12', pro: '#7a4f8f' },
      light: {
        gray: {
          anchors: {
            'surface-0': '#e7ebe4',
            'surface-1': '#eff2ec',
            'surface-2': '#f8f9f6',
            'text-primary': '#121915',
            'text-secondary': '#343f38',
            'text-muted': '#505b54',
          },
        },
      },
      dark: {
        roles: { accent: '#e8a25a' },
        gray: {
          anchors: {
            'surface-0': '#0e1311',
            'surface-1': '#131a17',
            'surface-2': '#18211d',
            'surface-3': '#1d2723',
            'text-primary': '#eef3ef',
            'text-secondary': '#c8d2cc',
            'text-muted': '#a0aca5',
          },
        },
      },
    },
    scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" style="--bg:#e9ede5;--line:#4f7a6a;--idx:#2f5a4b;--route:#c8552c;--pin:#c8552c;--grid:#2f5a4b">
<style>
  @media (prefers-color-scheme: dark) { svg { --bg:#0f1512 !important; --line:#5f9a83 !important; --idx:#8cc7ae !important; --route:#f0a35c !important; --pin:#f0a35c !important; --grid:#8cc7ae !important; } }
  .topo { animation: drift 80s ease-in-out infinite alternate; }
  @keyframes drift { from { transform: translate(-30px, -10px) scale(1.04); } to { transform: translate(30px, 12px) scale(1.06); } }
  .route { stroke-dasharray: 1700; stroke-dashoffset: 1700; animation: route 24s ease-in-out infinite; }
  @keyframes route { 0% { stroke-dashoffset: 1700; } 55%, 85% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -1700; } }
  .ping { transform-box: fill-box; transform-origin: center; animation: ping 2.8s ease-out infinite; }
  .ping.p2 { animation-delay: -1.4s; }
  @keyframes ping { from { transform: scale(0.4); opacity: 0.9; } to { transform: scale(2.6); opacity: 0; } }
  text { font-family: ui-monospace, Consolas, "Courier New", monospace; }
  @media (prefers-reduced-motion: reduce) { * { animation: none !important; } .route { stroke-dashoffset: 0; } }
</style>
<rect width="1600" height="1000" style="fill:var(--bg)"/>
<g style="stroke:var(--grid)" stroke-opacity="0.12" stroke-width="1"><path d="M0 200 H1600 M0 400 H1600 M0 600 H1600 M0 800 H1600 M320 0 V1000 M640 0 V1000 M960 0 V1000 M1280 0 V1000"/></g>
<g class="topo" fill="none" stroke-linejoin="round">
<path d="M1600 996L1600 980L1600 964L1600 948L1600 932L1600 916L1600 900L1600 884L1600 868L1600 852L1600 836L1600 820L1600 804L1600 788L1600 772L1600 756L1600 740L1600 724L1600 708L1600 692L1600 676L1600 660L1600 644L1600 628L1600 612L1600 596L1600 580L1600 564L1600 548L1600 532L1600 516L1600 500L1600 484L1600 468L1600 452L1600 436L1600 420L1600 404L1600 388L1600 372L1600 356L1600 340L1600 324L1600 308L1600 292L1600 276L1600 260L1600 244L1600 228L1600 212L1600 196L1600 180L1600 164L1600 148L1600 132L1600 116L1600 100L1600 84L1600 68L1596 54L1593 44L1590 28L1588 19L1585 4L1572 0L1556 0L1540 0L1524 0L1508 0L1492 0L1476 0L1460 0L1444 0L1428 0L1412 0L1396 0L1380 0L1364 0L1348 0L1332 0L1316 0L1300 0L1284 0L1268 0L1252 0L1236 0L1220 0L1204 0L1188 0L1172 0L1156 0L1140 0L1124 0L1108 0L1092 0L1076 0L1060 0L1044 0L1028 0L1012 0L996 0L980 0L964 0L948 0L932 0L916 0L900 0L884 0L868 0L852 0L836 0L820 0L804 0L788 0L772 0L756 0L740 0L724 0L708 0L692 0L676 0L660 0L644 0L628 0L612 0L596 0L580 0L564 0L548 0L532 0L516 0L500 0L484 0L468 0L452 0L436 0L420 0L404 0L388 0L372 0L356 0L340 0L324 0L308 0L292 0L276 0L260 0L244 0L228 0L212 0L196 0L180 0L164 0L148 0L132 0L116 0L100 0L84 0L68 0L52 0L36 0L20 0L4 0L0 12L0 28L0 44L0 60L0 76L0 92L0 108L0 124L0 140L0 156L0 172L0 188L0 204L0 220L0 236L0 252L0 268L0 284L0 300L0 316L0 332L0 348L0 364L0 380L0 396L0 412L0 428L0 444L0 460L0 476L0 492L0 508L0 524L0 540L0 556L0 572L0 588L0 604L0 620L0 636L0 652L0 668L0 684L0 700L0 716L0 732L0 748L0 764L0 780L0 796L0 812L0 828L0 844L0 860L0 876L0 892L0 908L0 924L0 940L0 956L0 972L0 988L4 1000L20 1000L36 1000L52 1000L68 1000L84 1000L100 1000L116 1000L132 1000L148 1000L164 1000L180 1000L196 1000L212 1000L228 1000L244 1000L260 1000L276 1000L292 1000L308 1000L324 1000L340 1000L356 1000L372 1000L388 1000L404 1000L420 1000L436 1000L452 1000L468 1000L484 1000L500 1000L516 1000L532 1000L548 1000L564 1000L580 1000L596 1000L612 1000L628 1000L644 1000L660 1000L676 1000L692 1000L708 1000L724 1000L740 1000L756 1000L772 1000L788 1000L804 1000L820 1000L836 1000L852 1000L868 1000L884 1000L900 1000L916 1000L932 1000L948 1000L964 1000L980 1000L996 1000L1012 1000L1028 1000L1044 1000L1060 1000L1076 1000L1092 1000L1108 1000L1124 1000L1140 1000L1156 1000L1172 1000L1188 1000L1204 1000L1220 1000L1236 1000L1252 1000L1268 1000L1284 1000L1300 1000L1316 1000L1332 1000L1348 1000L1364 1000L1380 1000L1396 1000L1412 1000L1428 1000L1444 1000L1460 1000L1476 1000L1492 1000L1508 1000L1524 1000L1540 1000L1556 1000L1572 1000L1588 1000L1600 996Z" style="stroke:var(--line)" stroke-width="1.1" stroke-opacity="0.5"/>
<path d="M1600 996L1600 980L1600 964L1600 948L1600 932L1600 916L1600 900L1600 884L1600 868L1600 852L1600 836L1600 820L1600 804L1600 788L1600 772L1600 756L1600 740L1600 724L1600 708L1600 692L1600 676L1600 660L1600 644L1600 628L1600 612L1600 596L1600 580L1600 564L1600 548L1600 532L1600 516L1600 500L1600 484L1600 468L1600 452L1600 436L1600 420L1600 404L1600 388L1600 372L1600 356L1600 340L1600 324L1600 308L1600 292L1600 276L1600 260L1600 244L1600 228L1600 212L1600 196L1600 180L1596 166L1591 156L1588 148L1581 132L1578 124L1572 109L1568 100L1564 88L1560 76L1556 66L1551 52L1548 43L1543 28L1540 19L1535 4L1524 0L1508 0L1492 0L1476 0L1460 0L1444 0L1428 0L1412 0L1396 0L1380 0L1364 0L1348 0L1332 0L1316 0L1300 0L1284 0L1268 0L1252 0L1236 0L1220 0L1204 0L1188 0L1172 0L1156 0L1140 0L1124 0L1108 0L1092 0L1076 0L1060 0L1044 0L1028 0L1012 0L996 0L980 0L964 0L948 0L932 0L916 0L900 0L884 0L868 0L852 0L836 0L820 0L804 0L788 0L772 0L756 0L740 0L724 0L708 0L692 0L676 0L660 0L644 0L628 0L612 0L596 0L580 0L564 0L548 0L532 0L516 0L500 0L484 0L468 0L452 0L436 0L420 0L404 0L388 0L372 0L356 0L340 0L324 0L308 0L292 0L276 0L260 0L244 0L228 0L212 0L196 0L180 0L164 0L148 0L132 0L116 0L100 0L84 0L68 0L52 0L36 0L20 0L4 0L0 12L0 28L0 44L0 60L0 76L0 92L0 108L0 124L0 140L0 156L0 172L0 188L0 204L0 220L0 236L0 252L0 268L0 284L0 300L0 316L0 332L0 348L0 364L0 380L0 396L0 412L0 428L0 444L0 460L0 476L0 492L0 508L0 524L0 540L0 556L0 572L0 588L0 604L0 620L0 636L0 652L0 668L0 684L0 700L0 716L0 732L0 748L0 764L0 780L0 796L0 812L0 828L0 844L0 860L0 876L0 892L0 908L0 924L0 940L0 956L4 967L11 980L16 988L21 996L36 1000L52 1000L68 1000L84 1000L100 1000L116 1000L132 1000L148 1000L164 1000L180 1000L196 1000L212 1000L228 1000L244 1000L260 1000L276 1000L292 1000L308 1000L324 1000L340 1000L356 1000L372 1000L388 1000L404 1000L420 1000L436 1000L452 1000L468 1000L484 1000L500 1000L516 1000L532 1000L548 1000L564 1000L580 1000L596 1000L612 1000L628 1000L644 1000L660 1000L676 1000L692 1000L708 1000L724 1000L740 1000L756 1000L772 1000L788 1000L804 1000L820 1000L836 1000L852 1000L868 1000L884 1000L900 1000L916 1000L932 1000L948 1000L964 1000L980 1000L996 1000L1012 1000L1028 1000L1044 1000L1060 1000L1076 1000L1092 1000L1108 1000L1124 1000L1140 1000L1156 1000L1172 1000L1188 1000L1204 1000L1220 1000L1236 1000L1252 1000L1268 1000L1284 1000L1300 1000L1316 1000L1332 1000L1348 1000L1364 1000L1380 1000L1396 1000L1412 1000L1428 1000L1444 1000L1460 1000L1476 1000L1492 1000L1508 1000L1524 1000L1540 1000L1556 1000L1572 1000L1588 1000L1600 996Z" style="stroke:var(--line)" stroke-width="1.1" stroke-opacity="0.5"/>
<path d="M1600 996L1600 980L1600 964L1600 948L1600 932L1600 916L1600 900L1600 884L1600 868L1600 852L1600 836L1600 820L1600 804L1600 788L1600 772L1600 756L1600 740L1600 724L1600 708L1600 692L1600 676L1600 660L1600 644L1600 628L1600 612L1600 596L1600 580L1600 564L1600 548L1600 532L1600 516L1600 500L1600 484L1600 468L1600 452L1600 436L1600 420L1600 404L1600 388L1600 372L1600 356L1600 340L1600 324L1600 308L1600 292L1600 276L1600 260L1600 244L1594 236L1588 223L1583 212L1580 204L1574 188L1570 180L1564 165L1561 156L1556 145L1551 132L1548 124L1541 108L1538 100L1532 86L1528 76L1524 68L1517 52L1513 44L1508 33L1501 20L1497 12L1492 0L1476 0L1460 0L1444 0L1428 0L1412 0L1396 0L1380 0L1364 0L1348 0L1332 0L1316 0L1300 0L1284 0L1268 0L1252 0L1236 0L1220 0L1204 0L1188 0L1172 0L1156 0L1140 0L1124 0L1108 0L1092 0L1076 0L1060 0L1044 0L1028 0L1012 0L996 0L980 0L964 0L948 0L932 0L916 0L900 0L884 0L875 4L864 12L853 20L844 26L836 31L826 36L812 42L804 44L788 45L780 43L764 36L756 31L748 23L740 15L732 4L724 0L708 0L692 0L676 0L660 0L644 0L628 0L612 0L596 0L580 0L564 0L548 0L532 0L516 0L500 0L484 0L468 0L452 0L436 0L420 0L404 0L388 0L372 0L356 0L340 0L324 0L308 0L292 0L276 0L260 0L244 0L228 0L212 0L196 0L180 0L164 0L148 0L132 0L116 0L100 0L84 0L68 0L52 0L36 0L20 0L4 0L0 12L0 28L0 44L0 60L0 76L0 92L0 108L0 124L0 140L0 156L0 172L0 188L0 204L0 220L0 236L0 252L0 268L0 284L0 300L0 316L0 332L0 348L0 364L0 380L0 396L0 412L0 428L0 444L0 460L0 476L0 492L0 508L0 524L0 540L0 556L0 572L0 588L0 604L0 620L0 636L0 652L0 668L0 684L0 700L0 716L0 732L0 748L0 764L4 775L7 788L11 804L12 812L16 828L19 844L20 852L24 868L28 884L30 892L34 908L36 916L42 932L45 940L51 956L54 964L60 977L65 988L69 996L84 1000L100 1000L116 1000L132 1000L148 1000L164 1000L180 1000L196 1000L212 1000L228 1000L244 1000L260 1000L276 1000L292 1000L308 1000L324 1000L340 1000L356 1000L372 1000L388 1000L404 1000L420 1000L436 1000L452 1000L468 1000L484 1000L500 1000L516 1000L532 1000L548 1000L564 1000L580 1000L596 1000L612 1000L628 1000L644 1000L660 1000L676 1000L692 1000L708 1000L724 1000L740 1000L756 1000L772 1000L788 1000L804 1000L820 1000L836 1000L852 1000L868 1000L884 1000L900 1000L916 1000L932 1000L948 1000L964 1000L980 1000L996 1000L1012 1000L1028 1000L1044 1000L1060 1000L1076 1000L1092 1000L1108 1000L1124 1000L1140 1000L1156 1000L1172 1000L1188 1000L1204 1000L1220 1000L1236 1000L1252 1000L1268 1000L1284 1000L1300 1000L1316 1000L1332 1000L1348 1000L1364 1000L1380 1000L1396 1000L1412 1000L1428 1000L1444 1000L1460 1000L1476 1000L1492 1000L1508 1000L1524 1000L1540 1000L1556 1000L1572 1000L1588 1000L1600 996Z" style="stroke:var(--line)" stroke-width="1.1" stroke-opacity="0.5"/>
<path d="M1600 996L1600 980L1600 964L1600 948L1600 932L1600 916L1600 900L1600 884L1600 868L1600 852L1600 836L1600 820L1600 804L1600 788L1600 772L1600 756L1600 740L1600 724L1600 708L1600 692L1600 676L1600 660L1600 644L1600 628L1600 612L1600 596L1600 580L1600 564L1600 548L1600 532L1600 516L1600 500L1600 484L1600 468L1600 452L1600 436L1600 420L1600 404L1600 388L1600 372L1600 356L1600 340L1596 328L1592 316L1588 303L1584 292L1580 279L1576 268L1572 255L1568 244L1564 232L1560 220L1556 209L1551 196L1548 188L1542 172L1539 164L1533 148L1529 140L1524 128L1519 116L1515 108L1508 92L1504 84L1500 76L1492 62L1486 52L1481 44L1476 36L1468 25L1460 15L1452 7L1444 0L1428 0L1412 0L1396 0L1380 0L1364 0L1348 0L1332 0L1316 0L1300 0L1284 0L1268 0L1252 0L1236 0L1220 0L1204 0L1188 0L1172 0L1156 0L1140 0L1124 0L1108 0L1092 0L1076 0L1060 0L1044 0L1028 0L1012 0L996 0L980 0L964 0L948 4L940 9L932 15L924 21L915 28L906 36L897 44L889 52L880 60L872 68L864 76L855 84L846 92L836 100L828 105L820 109L804 115L796 116L784 116L772 114L759 108L748 101L740 94L732 87L724 77L717 68L711 60L706 52L700 43L692 29L687 20L683 12L676 0L660 0L644 0L628 0L612 0L596 0L580 0L564 0L548 0L532 0L516 0L500 0L484 0L468 0L452 0L436 0L420 0L404 0L388 0L372 0L356 0L340 0L324 0L308 0L292 0L276 0L260 0L244 0L228 0L212 0L196 0L180 0L164 0L148 0L132 0L116 0L100 0L84 0L68 0L52 0L36 0L20 0L12 5L4 18L0 28L0 44L0 60L0 76L0 92L0 108L0 124L0 140L0 156L0 172L0 188L0 204L0 220L0 236L0 252L0 268L0 284L0 300L0 316L0 332L0 348L0 364L0 380L0 396L0 412L0 428L0 444L0 460L0 476L0 492L0 508L0 524L0 540L0 556L0 572L0 588L0 604L0 620L0 636L0 652L4 661L12 675L16 684L20 692L27 708L30 716L34 732L37 740L40 756L43 772L45 780L47 796L50 812L52 825L54 836L56 852L60 868L61 876L65 892L68 903L72 916L76 929L80 940L84 950L90 964L94 972L100 984L106 996L116 1000L132 1000L148 1000L164 1000L180 1000L196 1000L212 1000L228 1000L244 1000L260 1000L276 1000L292 1000L308 1000L324 1000L340 1000L356 1000L372 1000L388 1000L404 1000L416 996L428 989L436 985L446 980L460 974L468 972L484 968L500 968L516 971L524 974L534 980L545 988L554 996L564 1000L580 1000L596 1000L612 1000L628 1000L644 1000L660 1000L676 1000L692 1000L708 1000L724 1000L740 1000L756 1000L772 1000L788 1000L804 1000L820 1000L836 1000L852 1000L868 1000L884 1000L900 1000L916 1000L932 1000L948 1000L964 1000L980 1000L996 1000L1012 1000L1028 1000L1044 1000L1060 1000L1076 1000L1092 1000L1108 1000L1124 1000L1140 1000L1156 1000L1172 1000L1188 1000L1204 1000L1220 1000L1236 1000L1252 1000L1268 1000L1284 1000L1300 1000L1316 1000L1332 1000L1348 1000L1364 1000L1380 1000L1396 1000L1412 1000L1428 1000L1444 1000L1460 1000L1476 1000L1492 1000L1508 1000L1524 1000L1540 1000L1556 1000L1572 1000L1588 1000L1600 996Z" style="stroke:var(--idx)" stroke-width="1.8" stroke-opacity="0.75"/>
<path d="M1575 996L1581 988L1588 977L1595 964L1600 956L1600 940L1600 924L1600 908L1600 892L1600 876L1600 860L1600 844L1600 828L1600 812L1600 796L1600 780L1600 764L1596 754L1591 740L1588 731L1582 716L1579 708L1573 692L1570 684L1564 668L1561 660L1556 644L1554 636L1550 620L1548 607L1547 596L1546 580L1547 564L1548 553L1550 540L1553 524L1556 509L1558 500L1561 484L1564 471L1566 460L1568 444L1570 428L1571 412L1571 396L1571 380L1569 364L1567 348L1565 332L1564 324L1561 308L1557 292L1555 284L1551 268L1548 256L1545 244L1540 228L1537 220L1532 204L1529 196L1524 181L1520 172L1516 161L1511 148L1507 140L1500 124L1496 116L1492 108L1484 94L1478 84L1473 76L1468 68L1460 57L1452 48L1444 39L1436 31L1428 25L1420 19L1409 12L1396 6L1388 0L1372 0L1356 0L1340 0L1324 0L1308 0L1292 0L1276 0L1260 0L1244 0L1228 0L1212 0L1196 0L1180 0L1164 0L1148 0L1132 0L1116 0L1100 0L1084 0L1068 0L1052 0L1044 4L1028 8L1016 12L1004 16L996 20L980 28L972 33L964 38L956 44L946 52L937 60L929 68L921 76L913 84L906 92L899 100L892 108L884 117L876 125L868 134L860 141L852 148L840 156L828 163L820 166L804 170L788 171L772 168L760 164L748 158L740 152L732 146L724 138L716 129L708 120L700 109L694 100L689 92L683 84L676 72L669 60L664 52L660 44L652 31L645 20L640 12L635 4L620 0L604 0L588 0L572 0L556 0L540 0L524 0L508 0L492 0L476 0L460 0L444 0L428 0L412 0L396 0L380 0L364 0L348 0L332 0L316 0L300 0L284 0L268 0L252 0L236 0L220 0L204 0L188 0L172 0L156 0L140 0L124 0L108 0L92 0L76 0L60 0L50 4L43 12L36 22L28 34L22 44L18 52L12 64L7 76L0 84L0 100L0 116L0 132L0 148L0 164L0 180L0 196L0 212L0 228L0 244L0 260L0 276L0 292L0 308L0 324L0 340L0 356L0 372L0 388L0 404L0 420L0 436L0 452L0 468L0 484L0 500L0 516L0 532L0 548L0 564L0 580L5 588L12 598L20 610L27 620L32 628L37 636L44 649L49 660L52 668L58 684L60 692L64 708L68 724L69 732L71 748L73 764L75 780L76 788L78 804L80 820L82 836L84 846L86 860L90 876L92 885L96 900L100 913L104 924L108 934L114 948L118 956L124 968L131 980L137 988L142 996L156 1000L172 1000L188 1000L204 1000L220 1000L236 1000L252 1000L268 1000L284 1000L300 1000L316 1000L332 1000L348 1000L364 1000L372 993L380 987L391 980L403 972L412 966L420 960L428 955L440 948L452 941L460 937L470 932L484 927L495 924L508 922L523 924L532 927L543 932L554 940L563 948L571 956L578 964L584 972L590 980L596 988L604 1000L620 1000L636 1000L652 1000L668 1000L684 1000L700 1000L716 1000L732 1000L748 1000L764 1000L780 1000L796 1000L812 1000L828 1000L844 1000L860 1000L876 1000L892 1000L908 1000L924 1000L940 1000L956 1000L972 1000L988 1000L1004 1000L1020 1000L1036 1000L1052 1000L1068 1000L1084 1000L1100 1000L1116 1000L1132 1000L1148 1000L1164 1000L1180 1000L1196 1000L1212 1000L1228 1000L1244 1000L1260 1000L1276 1000L1292 1000L1308 1000L1324 1000L1340 1000L1356 1000L1372 1000L1388 1000L1404 1000L1420 1000L1436 1000L1452 1000L1468 1000L1484 1000L1500 1000L1516 1000L1532 1000L1548 1000L1564 1000L1575 996Z" style="stroke:var(--line)" stroke-width="1.1" stroke-opacity="0.5"/>
<path d="M1510 996L1519 988L1527 980L1535 972L1541 964L1548 954L1556 941L1560 932L1564 923L1569 908L1572 892L1573 884L1574 868L1573 852L1572 838L1571 828L1567 812L1564 799L1561 788L1556 774L1552 764L1548 754L1542 740L1539 732L1532 716L1529 708L1524 696L1519 684L1516 674L1511 660L1508 647L1506 636L1503 620L1501 604L1501 588L1502 572L1503 556L1506 540L1508 530L1511 516L1516 500L1518 492L1522 476L1525 468L1529 452L1532 438L1534 428L1537 412L1539 396L1540 381L1540 372L1541 356L1540 341L1539 332L1538 316L1536 300L1533 284L1532 276L1528 260L1524 244L1522 236L1518 220L1515 212L1510 196L1507 188L1501 172L1497 164L1492 151L1487 140L1483 132L1476 120L1469 108L1464 100L1459 92L1452 83L1444 73L1436 64L1428 56L1420 49L1412 43L1401 36L1388 29L1380 26L1364 21L1356 18L1340 15L1324 13L1308 12L1300 12L1284 11L1268 12L1253 12L1244 12L1228 13L1212 14L1196 15L1180 16L1164 17L1148 19L1133 20L1124 21L1108 23L1092 25L1076 28L1068 30L1052 34L1044 36L1028 42L1020 45L1007 52L996 58L988 64L980 69L972 76L963 84L955 92L947 100L940 108L932 118L924 127L916 137L908 147L901 156L893 164L886 172L878 180L868 188L860 194L852 199L843 204L828 210L820 212L804 215L788 215L772 212L764 210L750 204L740 198L732 192L724 186L716 178L708 170L700 160L692 150L685 140L680 132L674 124L668 114L660 101L654 92L649 84L644 76L636 63L629 52L623 44L618 36L612 28L604 18L596 9L588 0L572 0L556 0L540 0L524 0L508 0L492 0L476 0L460 0L444 0L428 0L412 0L396 0L380 0L364 0L348 0L332 0L316 0L300 0L284 0L268 0L252 0L236 0L220 0L204 0L188 0L172 0L156 0L140 0L124 0L108 0L93 4L84 11L76 19L68 27L61 36L55 44L49 52L44 60L36 76L32 84L28 94L23 108L20 116L15 132L12 145L9 156L6 172L4 182L0 196L0 212L0 228L0 244L0 260L0 276L0 292L0 308L0 324L0 340L0 356L0 372L0 388L0 404L0 420L0 436L0 452L0 468L0 484L0 500L4 510L12 524L17 532L22 540L28 549L36 560L44 572L50 580L55 588L60 596L68 610L73 620L76 628L83 644L85 652L89 668L92 681L94 692L96 708L98 724L99 740L100 754L101 764L102 780L103 796L104 812L106 828L108 839L110 852L113 868L116 878L120 892L124 905L128 916L132 925L139 940L144 948L149 956L156 967L164 977L172 985L180 992L188 1000L204 1000L220 1000L236 1000L252 1000L268 1000L284 1000L300 1000L316 1000L324 994L334 988L347 980L356 974L364 969L372 964L383 956L393 948L404 940L412 934L420 928L428 922L436 916L446 908L457 900L468 892L476 887L484 882L496 876L508 871L524 868L540 871L552 876L563 884L571 892L578 900L584 908L590 916L596 925L604 937L611 948L616 956L621 964L628 975L636 987L643 996L652 1000L668 1000L684 1000L700 1000L716 1000L732 1000L748 1000L764 1000L780 1000L796 1000L812 1000L828 1000L844 1000L860 1000L876 1000L892 1000L908 1000L924 1000L940 1000L956 1000L972 1000L988 1000L1004 1000L1020 1000L1036 1000L1052 1000L1068 1000L1084 1000L1100 1000L1116 1000L1132 1000L1148 1000L1164 1000L1180 1000L1196 1000L1212 1000L1228 1000L1244 1000L1260 1000L1276 1000L1292 1000L1308 1000L1324 1000L1340 1000L1356 1000L1372 1000L1388 1000L1404 1000L1420 1000L1436 1000L1452 1000L1468 1000L1484 1000L1500 1000L1510 996Z" style="stroke:var(--line)" stroke-width="1.1" stroke-opacity="0.5"/>
<path d="M1421 996L1433 988L1444 980L1452 975L1460 969L1468 962L1476 956L1484 948L1492 939L1500 929L1508 917L1513 908L1516 900L1521 884L1523 868L1524 858L1524 848L1523 836L1521 820L1518 804L1516 796L1511 780L1508 771L1503 756L1500 747L1495 732L1492 724L1487 708L1484 699L1480 684L1476 670L1474 660L1471 644L1469 628L1468 620L1467 604L1467 588L1468 577L1469 564L1472 548L1475 532L1477 524L1482 508L1484 500L1489 484L1492 475L1497 460L1500 449L1504 436L1508 420L1510 412L1513 396L1515 380L1516 371L1517 356L1518 340L1517 324L1516 308L1515 300L1513 284L1511 268L1508 254L1506 244L1502 228L1499 220L1494 204L1491 196L1485 180L1482 172L1476 158L1471 148L1467 140L1460 128L1452 116L1447 108L1441 100L1434 92L1427 84L1418 76L1409 68L1398 60L1388 54L1380 50L1366 44L1356 41L1340 36L1332 35L1316 32L1300 31L1284 30L1268 30L1252 31L1236 31L1220 32L1204 34L1188 35L1180 36L1164 38L1148 40L1132 43L1124 44L1108 47L1092 51L1084 53L1068 58L1060 61L1044 67L1036 71L1028 76L1015 84L1004 92L996 99L988 106L980 114L972 123L964 132L957 140L951 148L945 156L939 164L932 173L924 184L916 193L908 202L900 210L892 217L884 224L876 229L864 236L852 242L844 245L828 249L812 251L796 252L780 250L764 247L755 244L740 237L732 232L724 227L716 220L707 212L700 204L692 195L684 184L676 173L670 164L665 156L659 148L652 136L644 124L639 116L634 108L628 98L620 86L613 76L607 68L601 60L594 52L587 44L579 36L571 28L560 20L548 12L540 8L532 0L516 0L500 0L484 0L468 0L452 0L436 0L420 0L404 0L388 0L372 0L356 0L340 0L324 0L308 0L292 0L276 0L260 0L244 0L228 0L212 0L196 0L180 0L164 0L156 4L140 11L132 14L122 20L110 28L100 36L92 44L84 52L78 60L72 68L66 76L60 87L54 100L50 108L44 124L41 132L37 148L34 156L31 172L28 185L26 196L23 212L21 228L20 236L18 252L16 268L14 284L13 300L12 314L11 324L11 340L10 356L11 372L11 388L12 396L14 412L17 428L20 439L24 452L28 463L34 476L38 484L44 495L52 508L57 516L62 524L68 533L76 545L83 556L88 564L92 572L100 587L104 596L108 606L113 620L116 633L118 644L121 660L123 676L124 692L124 700L125 716L125 732L125 748L126 764L126 780L127 796L128 812L130 828L132 840L134 852L138 868L140 876L145 892L148 900L156 916L160 924L165 932L172 942L180 952L188 960L196 967L204 972L219 980L228 983L244 986L260 986L276 984L291 980L300 977L311 972L324 966L332 961L341 956L353 948L364 940L372 934L380 928L388 922L396 915L404 908L413 900L421 892L430 884L438 876L446 868L454 860L461 852L469 844L477 836L485 828L493 820L502 812L512 804L524 797L532 794L548 794L556 797L567 804L575 812L582 820L588 828L596 841L602 852L606 860L612 872L618 884L622 892L628 904L634 916L638 924L644 935L651 948L656 956L661 964L668 974L676 985L684 995L692 1000L708 1000L724 1000L740 1000L756 1000L772 1000L788 1000L804 1000L820 1000L836 1000L852 1000L868 1000L884 1000L900 1000L916 1000L932 1000L948 1000L964 1000L980 1000L996 1000L1012 1000L1028 1000L1044 1000L1060 1000L1076 1000L1092 1000L1108 1000L1124 1000L1140 1000L1156 1000L1172 1000L1188 1000L1204 1000L1220 1000L1236 1000L1252 1000L1268 1000L1284 1000L1300 1000L1316 1000L1332 1000L1348 1000L1364 1000L1380 1000L1396 1000L1412 1000L1421 996Z" style="stroke:var(--line)" stroke-width="1.1" stroke-opacity="0.5"/>
<path d="M1356 996L1366 988L1375 980L1384 972L1394 964L1403 956L1412 948L1420 940L1428 932L1436 924L1443 916L1449 908L1454 900L1460 889L1466 876L1468 868L1472 852L1473 836L1473 820L1472 804L1470 788L1468 778L1465 764L1462 748L1460 740L1456 724L1452 708L1450 700L1447 684L1444 668L1443 660L1441 644L1439 628L1439 612L1439 596L1440 580L1442 564L1444 551L1446 540L1450 524L1453 516L1458 500L1460 492L1466 476L1468 468L1474 452L1476 444L1482 428L1484 419L1488 404L1492 388L1493 380L1495 364L1497 348L1498 332L1498 316L1497 300L1495 284L1493 268L1492 260L1488 244L1484 228L1482 220L1477 204L1474 196L1468 181L1464 172L1460 164L1452 149L1447 140L1442 132L1436 124L1428 114L1420 104L1412 96L1404 89L1396 83L1386 76L1372 68L1364 65L1352 60L1340 56L1324 53L1316 51L1300 49L1284 48L1268 48L1252 48L1236 49L1220 51L1205 52L1196 53L1180 55L1164 58L1153 60L1140 63L1124 66L1116 69L1100 74L1092 76L1076 83L1068 86L1057 92L1044 100L1036 105L1028 112L1020 118L1012 126L1004 134L996 143L988 153L980 163L974 172L968 180L963 188L956 197L948 208L940 219L932 228L925 236L917 244L908 251L900 257L892 262L880 268L868 273L858 276L844 280L828 282L812 284L796 284L780 282L764 279L752 276L740 271L732 268L720 260L709 252L700 244L693 236L686 228L680 220L674 212L668 204L660 192L652 180L647 172L642 164L636 154L628 141L623 132L617 124L612 116L604 105L596 94L588 84L581 76L574 68L565 60L556 52L548 46L540 41L532 36L516 28L508 26L492 21L484 19L468 17L452 15L436 15L420 15L404 15L388 15L372 16L356 17L340 17L324 17L308 18L292 18L276 18L260 19L244 19L234 20L220 21L204 23L188 26L180 28L164 33L156 36L140 44L132 49L124 55L116 61L108 69L100 78L92 88L84 100L80 108L76 116L69 132L66 140L61 156L58 164L54 180L52 192L50 204L47 220L45 236L44 249L43 260L42 276L41 292L41 308L41 324L42 340L43 356L44 368L46 380L49 396L52 409L55 420L60 433L65 444L68 452L76 467L81 476L86 484L92 494L100 507L106 516L110 524L116 534L124 548L128 556L132 565L138 580L140 588L145 604L148 619L149 628L151 644L152 660L152 676L152 692L152 708L151 724L150 740L150 756L150 772L150 788L151 804L153 820L155 836L157 844L160 860L164 872L169 884L172 892L180 906L186 916L193 924L201 932L210 940L220 946L228 950L244 955L253 956L268 956L276 955L292 951L302 948L316 942L324 938L334 932L346 924L356 917L364 910L372 904L380 896L388 889L396 881L404 872L412 863L420 853L427 844L433 836L439 828L444 820L452 808L459 796L464 788L469 780L476 769L484 756L490 748L496 740L503 732L511 724L524 716L532 713L548 712L561 716L572 722L580 729L588 737L596 747L602 756L607 764L612 772L620 787L624 796L628 805L634 820L637 828L643 844L646 852L652 867L656 876L660 886L666 900L670 908L676 920L682 932L687 940L693 948L700 958L708 968L716 977L724 985L732 993L740 1000L756 1000L772 1000L788 1000L804 1000L820 1000L836 1000L852 1000L868 1000L884 1000L900 1000L916 1000L932 1000L948 1000L964 1000L980 1000L996 1000L1012 1000L1028 1000L1044 1000L1060 1000L1076 1000L1092 1000L1108 1000L1124 1000L1140 1000L1156 1000L1172 1000L1188 1000L1204 1000L1220 1000L1236 1000L1252 1000L1268 1000L1284 1000L1300 1000L1316 1000L1332 1000L1348 1000L1356 996Z" style="stroke:var(--idx)" stroke-width="1.8" stroke-opacity="0.75"/>
<path d="M1311 996L1319 988L1327 980L1335 972L1343 964L1351 956L1359 948L1367 940L1374 932L1381 924L1388 916L1396 906L1404 895L1411 884L1415 876L1420 865L1425 852L1428 840L1430 828L1432 812L1432 796L1432 780L1430 764L1429 748L1427 740L1425 724L1423 708L1420 692L1419 684L1417 668L1415 652L1414 636L1413 620L1413 604L1414 588L1416 572L1419 556L1420 548L1424 532L1428 517L1431 508L1436 493L1439 484L1444 471L1448 460L1452 449L1457 436L1460 426L1465 412L1468 400L1471 388L1474 372L1476 363L1478 348L1479 332L1480 316L1479 300L1478 284L1476 268L1475 260L1472 244L1468 230L1465 220L1460 205L1457 196L1452 185L1446 172L1442 164L1436 154L1428 142L1420 132L1414 124L1406 116L1398 108L1388 100L1380 95L1372 90L1361 84L1348 78L1340 76L1324 71L1308 68L1300 67L1284 66L1268 65L1252 66L1236 67L1221 68L1212 69L1196 71L1180 74L1171 76L1156 80L1140 84L1132 86L1116 92L1108 95L1097 100L1084 107L1076 111L1068 116L1057 124L1048 132L1039 140L1031 148L1024 156L1017 164L1011 172L1004 183L996 195L990 204L985 212L980 220L972 232L964 244L958 252L951 260L944 268L935 276L924 284L916 289L908 293L892 300L884 302L868 306L859 308L844 310L828 311L812 312L796 312L780 311L764 309L756 307L740 303L732 300L717 292L708 287L700 280L692 273L684 265L676 256L668 245L662 236L656 228L651 220L644 208L637 196L632 188L627 180L620 168L613 156L607 148L602 140L596 131L588 120L580 110L572 101L564 92L556 84L548 77L540 71L532 66L522 60L508 53L500 50L484 45L476 43L460 40L444 38L428 37L412 37L396 37L380 37L364 38L348 39L332 39L316 40L300 41L284 42L268 43L255 44L244 45L228 47L212 50L202 52L188 56L177 60L164 66L156 70L146 76L136 84L127 92L120 100L114 108L108 116L100 130L95 140L92 148L86 164L84 172L80 188L76 204L75 212L73 228L71 244L70 260L70 276L70 292L71 308L72 324L74 340L76 353L78 364L82 380L84 388L90 404L93 412L100 427L104 436L108 444L116 458L122 468L127 476L132 485L140 499L145 508L149 516L156 529L161 540L165 548L171 564L173 572L177 588L180 602L181 612L183 628L183 644L183 660L182 676L181 692L180 700L178 716L177 732L176 748L175 764L175 780L175 796L176 812L179 828L180 836L185 852L188 862L194 876L199 884L204 892L212 901L220 909L231 916L244 922L253 924L268 925L281 924L292 922L308 916L316 912L324 908L336 900L347 892L356 884L364 877L372 868L380 860L386 852L392 844L398 836L404 827L412 814L417 804L422 796L428 783L433 772L437 764L444 748L447 740L452 730L459 716L463 708L468 700L476 688L484 679L492 671L500 665L508 660L524 653L533 652L543 652L556 655L568 660L580 668L588 674L596 682L604 691L611 700L617 708L622 716L628 725L636 739L641 748L645 756L652 770L657 780L660 788L667 804L670 812L676 827L680 836L684 847L689 860L692 868L700 884L704 892L708 901L716 914L722 924L728 932L734 940L741 948L749 956L758 964L768 972L779 980L788 986L796 992L804 1000L820 1000L836 1000L852 1000L868 1000L884 1000L900 1000L916 1000L932 1000L948 1000L964 1000L980 1000L996 1000L1012 1000L1028 1000L1044 1000L1060 1000L1076 1000L1092 1000L1108 1000L1124 1000L1140 1000L1156 1000L1172 1000L1188 1000L1204 1000L1220 1000L1236 1000L1252 1000L1268 1000L1284 1000L1300 1000L1311 996Z" style="stroke:var(--line)" stroke-width="1.1" stroke-opacity="0.5"/>
<path d="M1272 996L1280 988L1287 980L1295 972L1302 964L1310 956L1317 948L1325 940L1332 932L1340 923L1348 913L1356 903L1364 892L1369 884L1374 876L1380 864L1386 852L1389 844L1394 828L1396 817L1398 804L1400 788L1400 772L1400 756L1399 740L1398 724L1396 708L1395 700L1394 684L1392 668L1391 652L1390 636L1390 620L1390 604L1391 588L1393 572L1395 556L1397 548L1401 532L1404 521L1408 508L1412 497L1417 484L1420 476L1426 460L1430 452L1436 436L1439 428L1444 413L1447 404L1452 388L1454 380L1457 364L1460 348L1461 340L1462 324L1463 308L1462 292L1461 276L1460 268L1457 252L1453 236L1451 228L1446 212L1443 204L1436 189L1432 180L1427 172L1420 160L1412 149L1405 140L1397 132L1389 124L1380 117L1372 111L1364 106L1352 100L1340 95L1332 92L1316 88L1300 85L1292 84L1276 83L1260 83L1244 83L1235 84L1220 86L1204 88L1188 91L1180 93L1164 97L1156 100L1140 106L1132 109L1116 116L1108 120L1100 125L1089 132L1079 140L1069 148L1061 156L1054 164L1047 172L1041 180L1035 188L1028 199L1020 212L1016 220L1011 228L1004 241L998 252L994 260L988 269L980 281L972 291L964 300L956 307L948 313L940 318L926 324L916 327L900 331L892 333L876 335L860 336L844 337L828 338L812 338L796 338L780 337L764 335L748 333L740 331L724 327L716 324L701 316L692 310L684 303L676 295L668 286L660 276L655 268L650 260L644 251L636 237L631 228L626 220L620 209L613 196L608 188L603 180L596 168L588 156L583 148L577 140L570 132L564 124L556 116L548 108L539 100L529 92L516 84L508 79L500 76L484 69L476 67L460 63L444 61L436 60L420 59L404 58L388 58L372 59L356 59L347 60L332 61L316 62L300 64L284 65L268 67L260 68L244 71L228 74L220 76L204 81L196 84L180 92L172 96L164 102L156 108L148 116L140 124L132 135L124 148L120 156L116 166L111 180L108 190L105 204L102 220L100 236L100 244L99 260L99 276L100 292L101 300L102 316L105 332L108 344L111 356L116 372L119 380L124 393L129 404L133 412L140 426L145 436L149 444L156 456L163 468L168 476L172 484L180 499L185 508L189 516L196 532L199 540L204 552L208 564L212 579L214 588L216 604L218 620L218 636L217 652L215 668L213 684L212 692L209 708L207 724L204 740L204 748L202 764L202 780L202 796L204 811L206 820L210 836L213 844L220 858L227 868L235 876L244 882L252 886L268 890L284 890L300 885L308 882L319 876L331 868L340 860L348 852L356 844L362 836L368 828L373 820L380 808L386 796L390 788L396 774L400 764L404 753L409 740L412 730L417 716L420 708L427 692L431 684L436 675L444 662L451 652L459 644L467 636L476 628L484 622L492 618L504 612L516 608L532 605L548 606L564 610L572 614L581 620L590 628L599 636L606 644L613 652L620 661L628 672L636 684L642 692L647 700L652 708L660 721L666 732L671 740L676 749L684 764L688 772L692 780L700 795L704 804L708 812L716 828L720 836L724 844L732 859L737 868L742 876L748 886L756 897L764 907L772 916L779 924L788 932L796 939L804 945L812 951L820 957L830 964L841 972L852 979L860 985L868 991L876 1000L892 1000L908 1000L924 1000L940 1000L956 1000L972 1000L988 1000L1004 1000L1020 1000L1036 1000L1052 1000L1068 1000L1084 1000L1100 1000L1116 1000L1132 1000L1148 1000L1164 1000L1180 1000L1196 1000L1212 1000L1228 1000L1244 1000L1260 1000L1272 996Z" style="stroke:var(--line)" stroke-width="1.1" stroke-opacity="0.5"/>
<path d="M1235 996L1243 988L1250 980L1258 972L1266 964L1273 956L1281 948L1288 940L1295 932L1302 924L1309 916L1316 907L1324 896L1332 885L1338 876L1343 868L1348 858L1355 844L1358 836L1363 820L1365 812L1369 796L1371 780L1372 766L1372 756L1372 740L1372 725L1372 716L1371 700L1370 684L1368 668L1367 652L1367 636L1367 620L1367 604L1368 588L1370 572L1372 559L1374 548L1378 532L1381 524L1386 508L1389 500L1395 484L1398 476L1404 463L1409 452L1412 444L1418 428L1422 420L1428 404L1430 396L1435 380L1437 372L1441 356L1443 340L1444 332L1446 316L1446 300L1445 284L1444 274L1442 260L1439 244L1436 234L1432 220L1428 210L1422 196L1418 188L1412 178L1404 166L1396 156L1389 148L1381 140L1372 133L1364 127L1356 122L1344 116L1332 111L1324 108L1308 104L1292 101L1277 100L1268 100L1252 100L1244 100L1228 102L1212 105L1196 108L1188 110L1172 115L1164 118L1149 124L1140 128L1132 132L1119 140L1108 148L1100 154L1092 161L1084 169L1076 178L1068 188L1062 196L1057 204L1052 213L1044 228L1040 236L1036 244L1029 260L1025 268L1020 280L1014 292L1010 300L1004 310L996 322L988 331L980 339L972 345L964 349L948 356L940 358L924 361L908 362L892 363L876 363L860 363L844 363L828 362L812 362L796 362L780 361L764 361L748 359L732 357L724 356L708 352L698 348L684 341L676 335L668 328L660 320L652 309L646 300L641 292L636 284L628 269L624 260L620 252L612 237L607 228L603 220L596 207L590 196L585 188L580 180L572 168L564 157L557 148L550 140L542 132L533 124L524 116L516 110L508 105L498 100L484 93L476 91L460 86L451 84L436 82L420 80L404 79L388 79L372 80L356 81L340 82L324 84L316 84L300 87L284 89L269 92L260 94L244 98L236 101L220 106L212 110L200 116L188 124L180 130L172 137L164 146L157 156L152 164L148 172L141 188L138 196L134 212L132 223L130 236L129 252L129 268L130 284L132 300L133 308L136 324L140 338L143 348L148 363L151 372L156 383L162 396L166 404L172 416L178 428L182 436L188 446L196 460L200 468L205 476L212 489L218 500L222 508L228 520L234 532L238 540L244 555L247 564L252 579L255 588L258 604L260 620L260 628L260 636L259 652L256 668L253 684L251 692L247 708L244 721L242 732L239 748L237 764L237 780L239 796L243 812L247 820L252 829L260 836L276 843L292 843L308 836L316 831L324 824L332 815L340 804L345 796L349 788L356 773L359 764L364 749L366 740L371 724L373 716L377 700L380 691L386 676L389 668L396 656L404 644L410 636L417 628L425 620L434 612L443 604L452 598L460 592L468 588L482 580L492 575L500 572L516 567L532 564L540 564L548 564L564 567L575 572L587 580L596 587L604 596L611 604L617 612L623 620L629 628L636 638L644 650L651 660L656 668L661 676L668 687L676 699L682 708L687 716L692 724L700 736L708 748L714 756L719 764L724 772L732 784L740 796L746 804L751 812L757 820L764 830L772 841L780 851L788 860L795 868L803 876L811 884L819 892L828 900L836 907L844 913L852 920L860 927L868 934L876 941L884 948L893 956L902 964L910 972L918 980L926 988L934 996L948 1000L964 1000L980 1000L996 1000L1012 1000L1028 1000L1044 1000L1060 1000L1076 1000L1092 1000L1108 1000L1124 1000L1140 1000L1156 1000L1172 1000L1188 1000L1204 1000L1220 1000L1235 996Z" style="stroke:var(--line)" stroke-width="1.1" stroke-opacity="0.5"/>
<path d="M1193 996L1203 988L1211 980L1220 972L1228 964L1236 956L1244 948L1252 940L1259 932L1266 924L1274 916L1280 908L1287 900L1293 892L1300 883L1308 871L1315 860L1319 852L1324 842L1330 828L1333 820L1338 804L1340 796L1343 780L1346 764L1347 748L1347 732L1347 716L1347 700L1346 684L1345 668L1344 652L1344 636L1344 620L1344 604L1345 588L1347 572L1348 564L1351 548L1355 532L1358 524L1363 508L1366 500L1372 486L1376 476L1380 468L1387 452L1391 444L1396 433L1402 420L1405 412L1411 396L1414 388L1419 372L1421 364L1425 348L1427 332L1428 324L1429 308L1429 292L1428 278L1427 268L1424 252L1420 237L1417 228L1412 214L1407 204L1403 196L1396 185L1388 173L1380 164L1372 156L1364 149L1356 143L1348 138L1336 132L1324 127L1315 124L1300 120L1284 118L1268 117L1252 117L1236 119L1220 121L1208 124L1196 127L1182 132L1172 136L1163 140L1148 148L1140 153L1132 158L1124 164L1115 172L1107 180L1100 188L1092 198L1084 210L1078 220L1074 228L1068 240L1063 252L1060 260L1054 276L1051 284L1046 300L1043 308L1037 324L1034 332L1028 344L1021 356L1016 364L1009 372L999 380L988 387L980 390L964 393L948 395L932 394L916 393L900 392L884 390L868 389L860 388L844 387L828 386L812 385L796 385L780 385L764 385L748 385L732 385L716 384L700 382L689 380L676 376L668 372L657 364L649 356L642 348L636 339L628 324L624 316L620 307L613 292L610 284L604 270L600 260L596 252L588 236L584 228L580 219L572 205L566 196L561 188L556 180L548 170L540 160L532 152L524 144L516 138L508 132L496 124L484 118L476 114L460 109L452 106L436 103L420 101L404 100L388 100L372 101L356 102L340 104L324 106L312 108L300 110L284 114L276 116L260 122L252 124L236 132L228 136L220 141L210 148L201 156L193 164L187 172L180 183L173 196L170 204L165 220L164 228L162 244L161 260L161 276L163 292L164 301L167 316L171 332L173 340L179 356L182 364L188 379L192 388L196 396L204 412L208 420L213 428L220 441L227 452L231 460L236 468L244 481L251 492L255 500L260 508L268 520L276 532L281 540L286 548L292 557L300 568L308 578L316 587L324 594L332 598L348 601L364 598L372 595L388 589L396 585L405 580L420 573L428 568L437 564L452 556L460 552L469 548L484 541L492 538L508 532L516 530L532 526L541 524L556 523L566 524L580 528L588 532L598 540L606 548L613 556L620 566L628 579L634 588L639 596L644 605L652 619L658 628L663 636L668 645L676 657L683 668L689 676L694 684L700 692L708 703L716 714L724 724L731 732L737 740L744 748L752 756L759 764L767 772L775 780L783 788L791 796L800 804L810 812L819 820L828 827L836 834L844 840L852 847L860 853L868 860L877 868L885 876L893 884L900 892L908 901L916 910L924 919L932 929L940 939L947 948L953 956L960 964L967 972L974 980L981 988L988 996L1004 1000L1020 1000L1036 1000L1052 1000L1068 1000L1084 1000L1100 1000L1116 1000L1132 1000L1148 1000L1164 1000L1180 1000L1193 996Z" style="stroke:var(--idx)" stroke-width="1.8" stroke-opacity="0.75"/>
<path d="M1128 996L1140 991L1148 987L1160 980L1172 972L1180 966L1188 960L1196 954L1204 947L1212 940L1220 932L1229 924L1237 916L1244 908L1252 899L1260 890L1268 880L1276 869L1282 860L1287 852L1292 844L1300 828L1304 820L1308 809L1312 796L1316 781L1318 772L1320 756L1322 740L1322 724L1322 708L1322 692L1321 676L1321 660L1320 644L1320 628L1320 612L1320 596L1321 580L1323 564L1325 556L1328 540L1332 528L1336 516L1340 506L1346 492L1349 484L1356 470L1361 460L1365 452L1372 438L1377 428L1381 420L1388 404L1391 396L1396 384L1400 372L1404 359L1407 348L1410 332L1411 316L1412 306L1412 292L1412 284L1410 268L1407 252L1404 242L1399 228L1396 220L1388 205L1383 196L1377 188L1370 180L1362 172L1353 164L1342 156L1332 150L1324 147L1308 141L1300 139L1284 136L1268 135L1252 136L1236 137L1222 140L1212 142L1196 148L1188 151L1177 156L1164 163L1156 168L1148 174L1140 181L1132 188L1124 197L1116 207L1108 219L1103 228L1098 236L1092 251L1088 260L1084 273L1081 284L1077 300L1075 308L1071 324L1068 337L1065 348L1061 364L1059 372L1053 388L1049 396L1044 404L1036 415L1028 423L1020 428L1004 435L996 436L980 437L971 436L956 434L940 430L931 428L916 424L900 420L892 419L876 415L860 412L852 411L836 410L820 408L804 408L788 408L772 408L756 410L740 411L732 412L716 414L700 417L684 419L676 421L660 423L644 422L636 419L628 412L620 398L616 388L612 375L609 364L605 348L602 340L598 324L595 316L591 300L588 292L582 276L579 268L573 252L569 244L564 233L557 220L552 212L547 204L540 194L532 183L524 174L516 166L508 159L500 153L492 147L479 140L468 135L460 132L444 127L428 124L420 123L404 122L388 122L372 123L357 124L348 125L332 128L316 132L308 134L292 139L284 142L269 148L260 153L252 157L242 164L232 172L224 180L218 188L212 197L204 212L201 220L197 236L195 244L193 260L193 276L195 292L196 301L199 316L203 332L205 340L211 356L214 364L220 378L225 388L229 396L236 410L242 420L246 428L252 437L260 450L267 460L273 468L278 476L285 484L292 493L300 502L308 510L316 517L324 524L338 532L348 536L364 540L372 540L383 540L396 538L412 534L420 532L436 526L444 523L460 517L468 514L481 508L492 503L500 500L516 493L524 489L538 484L548 480L560 476L572 472L588 469L604 471L612 476L620 487L626 500L629 508L635 524L638 532L644 546L648 556L652 566L658 580L662 588L668 600L674 612L679 620L684 629L692 642L699 652L704 660L710 668L716 676L724 685L732 695L740 703L748 711L756 719L764 726L772 733L781 740L792 748L804 756L812 761L820 766L832 772L844 779L852 783L862 788L876 796L884 801L892 807L900 813L909 820L917 828L924 836L932 845L940 856L948 867L954 876L959 884L964 892L972 904L980 916L986 924L991 932L997 940L1004 949L1012 958L1020 966L1028 974L1036 981L1047 988L1060 995L1068 1000L1084 1000L1100 1000L1116 1000L1128 996Z" style="stroke:var(--line)" stroke-width="1.1" stroke-opacity="0.5"/>
<path d="M435 492L444 489L458 484L468 480L476 476L492 468L500 464L508 459L519 452L530 444L540 436L548 428L554 420L560 412L564 403L569 388L572 372L572 364L572 348L572 340L570 324L567 308L564 296L561 284L556 270L552 260L548 250L541 236L537 228L532 220L524 208L516 198L508 190L500 182L492 175L484 170L475 164L460 157L452 154L436 149L428 147L412 145L396 145L380 145L364 147L355 148L340 151L324 156L316 158L302 164L292 169L284 173L274 180L264 188L256 196L249 204L243 212L236 226L232 236L228 252L227 260L226 276L227 292L228 302L230 316L234 332L237 340L243 356L246 364L252 378L257 388L261 396L268 407L276 420L281 428L287 436L293 444L300 452L308 461L316 468L325 476L336 484L348 490L356 494L372 498L388 499L404 499L420 496L435 492ZM1130 948L1140 945L1152 940L1164 934L1172 929L1180 924L1191 916L1201 908L1210 900L1218 892L1226 884L1234 876L1241 868L1247 860L1253 852L1260 842L1268 829L1273 820L1276 812L1283 796L1285 788L1290 772L1292 761L1294 748L1296 732L1296 716L1296 700L1296 684L1295 668L1294 652L1294 636L1293 620L1293 604L1293 588L1294 572L1297 556L1300 542L1303 532L1308 517L1311 508L1316 498L1323 484L1327 476L1332 467L1340 453L1345 444L1350 436L1356 425L1363 412L1367 404L1372 392L1377 380L1380 372L1386 356L1388 347L1391 332L1393 316L1394 300L1394 284L1392 268L1388 252L1386 244L1380 229L1376 220L1371 212L1364 202L1356 192L1348 185L1340 178L1331 172L1316 164L1308 161L1292 157L1284 156L1268 155L1252 155L1243 156L1228 159L1212 163L1204 166L1192 172L1180 179L1172 184L1164 190L1156 197L1148 205L1140 215L1132 227L1127 236L1123 244L1116 260L1113 268L1109 284L1107 292L1104 308L1101 324L1100 332L1098 348L1096 364L1095 380L1092 396L1091 404L1088 420L1084 432L1079 444L1076 452L1068 464L1060 473L1052 479L1044 484L1028 490L1012 492L996 490L980 485L972 482L959 476L948 471L940 467L925 460L916 456L906 452L892 447L884 444L868 440L853 436L844 434L828 432L812 431L796 431L780 432L764 434L752 436L740 439L725 444L716 448L708 452L696 460L687 468L681 476L676 487L672 500L671 516L672 532L675 548L677 556L682 572L685 580L692 596L696 604L700 612L708 626L715 636L720 644L726 652L733 660L740 668L748 676L757 684L766 692L777 700L788 707L796 712L804 716L820 724L828 727L843 732L852 735L868 739L876 742L892 746L900 749L916 756L924 760L932 765L941 772L949 780L956 788L964 798L972 810L978 820L983 828L988 837L996 851L1001 860L1006 868L1012 878L1020 891L1026 900L1033 908L1039 916L1047 924L1056 932L1068 940L1076 944L1086 948L1100 951L1116 951L1130 948Z" style="stroke:var(--line)" stroke-width="1.1" stroke-opacity="0.5"/>
<path d="M425 460L436 457L452 452L460 448L469 444L483 436L492 430L500 423L508 416L516 408L524 397L529 388L533 380L538 364L540 355L542 340L542 324L540 308L539 300L535 284L532 274L527 260L523 252L516 239L509 228L503 220L496 212L488 204L479 196L468 189L460 184L451 180L436 175L424 172L412 170L396 169L380 170L368 172L356 174L340 179L332 182L319 188L308 195L300 200L292 207L284 216L276 227L271 236L267 244L262 260L260 276L260 284L260 295L261 308L264 324L268 337L272 348L276 359L282 372L286 380L292 390L300 402L308 412L314 420L322 428L331 436L340 443L348 448L356 453L372 459L380 461L396 463L412 462L425 460ZM1149 892L1164 886L1172 882L1181 876L1192 868L1202 860L1210 852L1218 844L1225 836L1231 828L1236 820L1244 807L1249 796L1253 788L1258 772L1260 764L1264 748L1266 732L1267 716L1267 700L1267 684L1266 668L1264 652L1263 636L1261 620L1260 604L1260 596L1259 580L1260 564L1261 556L1264 540L1268 526L1272 516L1276 507L1284 493L1289 484L1294 476L1300 468L1308 456L1316 445L1322 436L1327 428L1333 420L1340 408L1347 396L1351 388L1356 378L1362 364L1365 356L1369 340L1372 328L1374 316L1375 300L1374 284L1372 268L1370 260L1365 244L1361 236L1356 226L1348 215L1340 206L1332 199L1324 193L1316 188L1300 181L1292 179L1276 176L1260 176L1244 177L1232 180L1220 184L1210 188L1196 196L1188 201L1180 208L1172 215L1164 225L1156 236L1151 244L1147 252L1141 268L1138 276L1134 292L1132 306L1131 316L1129 332L1129 348L1129 364L1129 380L1130 396L1130 412L1131 428L1130 444L1129 460L1126 476L1123 484L1117 500L1112 508L1106 516L1100 524L1092 532L1083 540L1071 548L1060 555L1052 559L1036 564L1028 565L1013 564L1004 562L993 556L981 548L972 540L964 533L956 526L948 519L940 512L932 505L924 499L914 492L902 484L892 478L884 474L870 468L860 465L844 460L836 459L820 456L804 456L788 457L772 459L764 461L748 467L740 471L732 476L723 484L716 492L708 507L705 516L703 532L704 548L706 564L709 572L714 588L718 596L724 607L732 620L738 628L744 636L751 644L760 652L769 660L780 668L788 673L796 677L811 684L820 687L836 691L844 693L860 695L876 696L892 696L908 696L924 696L940 697L952 700L964 705L972 710L980 718L988 728L996 740L1000 748L1004 756L1012 772L1016 780L1020 789L1027 804L1031 812L1036 822L1044 836L1049 844L1054 852L1060 860L1068 869L1076 877L1085 884L1100 892L1108 894L1124 896L1140 894L1149 892Z" style="stroke:var(--line)" stroke-width="1.1" stroke-opacity="0.5"/>
<path d="M437 420L452 414L460 410L468 404L478 396L486 388L492 380L500 368L505 356L508 346L510 332L511 316L510 300L508 292L503 276L500 267L492 252L487 244L481 236L473 228L464 220L452 212L444 208L434 204L420 200L404 198L388 199L372 202L363 204L348 210L340 214L331 220L322 228L314 236L308 245L301 260L298 268L296 284L295 300L297 316L300 328L304 340L308 351L315 364L320 372L325 380L332 389L340 397L348 404L359 412L372 419L380 421L396 425L412 425L428 423L437 420ZM1235 468L1244 464L1252 459L1263 452L1273 444L1282 436L1290 428L1298 420L1305 412L1311 404L1317 396L1324 386L1332 373L1336 364L1340 356L1346 340L1348 332L1351 316L1353 300L1352 284L1349 268L1346 260L1340 245L1334 236L1328 228L1320 220L1309 212L1300 208L1290 204L1276 201L1260 200L1244 203L1236 205L1220 212L1212 216L1204 222L1196 229L1188 238L1180 249L1174 260L1171 268L1165 284L1163 292L1161 308L1160 324L1160 340L1162 356L1164 372L1165 380L1169 396L1172 406L1177 420L1180 428L1187 444L1192 452L1199 460L1209 468L1220 471L1235 468ZM861 652L876 649L888 644L900 637L908 631L916 622L922 612L924 604L926 588L924 574L921 564L916 552L909 540L903 532L896 524L888 516L878 508L868 502L860 497L848 492L836 488L820 485L804 485L788 487L772 492L764 496L756 501L748 509L740 523L737 532L735 548L737 564L740 576L745 588L749 596L756 607L764 616L772 624L780 631L788 637L802 644L812 648L828 652L836 653L852 653L861 652ZM1162 828L1172 823L1180 818L1188 812L1196 804L1204 794L1212 781L1217 772L1220 764L1225 748L1228 732L1229 724L1230 708L1229 692L1228 681L1226 668L1223 652L1220 642L1215 628L1212 619L1204 604L1199 596L1192 588L1180 581L1164 581L1148 587L1140 591L1132 596L1120 604L1109 612L1100 620L1092 628L1085 636L1079 644L1073 652L1068 663L1063 676L1060 692L1060 700L1060 709L1061 724L1064 740L1068 755L1071 764L1076 777L1081 788L1086 796L1092 805L1100 814L1108 821L1120 828L1132 832L1148 832L1162 828Z" style="stroke:var(--idx)" stroke-width="1.8" stroke-opacity="0.75"/>
</g>
<path class="route" d="M140 900 C260 820 300 700 420 650 S640 600 700 480 S860 300 1000 330 S1180 470 1250 420 S1360 230 1460 180" fill="none" style="stroke:var(--route)" stroke-width="3" stroke-linecap="round"/>
<g style="fill:var(--pin)">
  <circle class="ping" cx="140" cy="900" r="12" fill-opacity="0.5"/><circle cx="140" cy="900" r="6"/>
  <circle class="ping p2" cx="1460" cy="180" r="12" fill-opacity="0.5"/><circle cx="1460" cy="180" r="6"/>
</g>
<g style="fill:var(--idx)" font-size="14" opacity="0.8">
  <text x="1478" y="174">2 148 m</text><text x="160" y="926">0 km</text>
  <text x="360" y="246">1 640</text><text x="1300" y="660">1 420</text>
</g>
<g transform="translate(1490 860)" style="stroke:var(--idx);fill:var(--idx)" opacity="0.75">
  <circle r="34" fill="none" stroke-width="1.5"/><path d="M0 -44 L8 0 L0 -8 L-8 0 Z" stroke="none"/><text x="-5" y="-50" font-size="14" stroke="none">K</text>
</g>
</svg>`,
  },
]

const DEFAULT_ID = 'kapadokya'
const STORE_KEY = 'theme'
const OFF = 'kapali'

// "neon", "kis", "Kış Ormanı" gibi yazımların hepsi bulunsun diye.
const fold = (text: string): string =>
  text
    .toLocaleLowerCase('tr')
    .replace(/[çğıöşüâî]/g, ch => ({ ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u', â: 'a', î: 'i' })[ch] ?? ch)
    .replace(/[^a-z0-9]+/g, '')

const find = (query: string): Theme | undefined => {
  const q = fold(query)
  if (q === '') {
    return undefined
  }

  return (
    THEMES.find(t => fold(t.id) === q || fold(t.label) === q) ??
    THEMES.find(t => fold(t.id).startsWith(q) || fold(t.label).startsWith(q))
  )
}

const apply = async ($: EngineInterface, theme: Theme): Promise<string | undefined> => {
  const { theme: colors, problems } = makeColors(theme.def)
  const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

  if (unpainted !== undefined) {
    $.ui.toast(unpainted)
  }
  const set = await $.theme.set({ colors, backdrop: { scene: theme.id, glass: theme.glass } })

  return set.isDrawn ? undefined : set.reason
}

const listing = (current: string): string =>
  THEMES.map(t => `${t.id === current ? '●' : '○'} ${t.label} (/tema ${t.id}): ${t.blurb}`).join('\n')

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'tema',
      description: 'Temayı değiştir: /tema neon, /tema kapadokya … (boş bırakırsan listeyi gösterir)',
      argumentHint: '[tema adı | kapali]',
    })
    const saved = await $.store.get(STORE_KEY)
    const chosen = typeof saved === 'string' ? saved : DEFAULT_ID

    if (chosen !== OFF) {
      const theme = THEMES.find(t => t.id === chosen) ?? THEMES.find(t => t.id === DEFAULT_ID)

      if (theme !== undefined) {
        const reason = await apply($, theme)

        if (reason !== undefined) {
          $.ui.status(reason)
        }
      }
    }

    return next(e)
  })

  on('command.run', { command: 'tema' }, async ($, e) => {
    const saved = await $.store.get(STORE_KEY)
    const current = typeof saved === 'string' ? saved : DEFAULT_ID
    const query = e.args.trim()

    if (query === '') {
      return { text: `Temalar (● açık olan):\n${listing(current)}\n\nKapatmak için: /tema kapali` }
    }
    if (['kapali', 'kapat', 'off', 'yok'].includes(fold(query))) {
      await $.store.set(STORE_KEY, OFF)
      await $.theme.clear()

      return { text: 'Tema kapatıldı; uygulamanın kendi görünümüne dönüldü.' }
    }
    const theme = find(query)

    if (theme === undefined) {
      return { text: `"${query}" adında bir tema yok. Seçenekler:\n${listing(current)}` }
    }
    await $.store.set(STORE_KEY, theme.id)
    const reason = await apply($, theme)

    return {
      text:
        reason === undefined
          ? `${theme.label} teması açıldı. Bundan sonraki sohbetler de bu temayla açılacak.`
          : `${theme.label} seçildi ama burada çizilemedi: ${reason}`,
    }
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    const theme = THEMES.find(t => t.id === e.props.scene)

    if ((e.surface !== 'desktop' && e.surface !== 'mobile') || theme === undefined) {
      return next(e)
    }
    const { Svg } = $.ui.resolve(e)

    return <Svg source={theme.scene} alt={theme.alt} isInteractive />
  })
}
