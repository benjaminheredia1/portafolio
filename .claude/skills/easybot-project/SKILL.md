---
name: easybot-project
description: Use when building or modifying anything in the Easy Bot (esasybot) repo — pages, components, copy, styles — or before making any product, scope, or design decision. Covers product vision, scope limits, design tokens, typography, and UI conventions.
---

# Easy Bot — contexto del proyecto

## Qué es

Plataforma para personas **sin conocimientos técnicos** que crean agentes de IA de forma sencilla y los usan conectados a **WhatsApp o Telegram. Solo esos dos canales** — es una decisión de producto, no una limitación técnica. No agregar más integraciones.

Flujo del producto (visión completa):

1. **Elegir el agente**: **Comercial** (vende, cotiza, hace seguimiento) o **Informativo** (horarios, ubicación, preguntas frecuentes) — o escribir un **system prompt propio** en lenguaje natural.
2. **Base de conocimiento**: el usuario sube **PDFs o texto**. El agente responde solo con esa información.
3. **Conectar** a WhatsApp o Telegram y dejarlo atender.

## Estado actual (julio 2026)

Prototipo navegable, **estético y sin backend** — no hay auth, base de datos ni integraciones reales:

- **i18n (es/en)**: las páginas públicas viven en `app/[lang]/` (landing, login, register, forgot-password, privacidad, terminos). `proxy.ts` (raíz del repo) redirige rutas sin prefijo a `/es/...` y `/[lang]/dashboard` a `/dashboard`. Textos en `dictionaries/es.json` y `en.json`, cargados por `lib/dictionaries.ts` y servidos vía `LangProvider`/`useDict` (`app/components/lang-provider.tsx`) desde `app/[lang]/layout.tsx`. `app/page.tsx` es solo un `redirect('/es')` de respaldo. **No crear páginas públicas fuera de `[lang]`** — el dashboard es la excepción (sin i18n, por diseño).
- **Modo oscuro**: tokens semánticos en `app/globals.css` (`--background/--foreground/--accent/--panel` en `:root` y `.dark`, expuestos vía `@theme inline` como `bg-background`, `text-foreground`, `bg-accent`, `bg-panel`). Usar SIEMPRE estos tokens, no hexes. `ThemeToggle` (`app/components/theme-toggle.tsx`) alterna `.dark` en `<html>` y persiste en `localStorage`; el script anti-FOUC vive en `app/layout.tsx` (que lleva `suppressHydrationWarning` en `<html>` — necesario, no quitarlo).
- Login y registro simulan el envío y redirigen a `/dashboard` (registro con `?new=1` que muestra un estado de bienvenida).
- Dashboard (`app/dashboard/`): layout con sidebar (`sidebar.tsx`, cliente con `usePathname`, incluye ThemeToggle y LangSwitcher), home con KPIs + agentes + registro del día, asistente de creación en 3 pasos (`crear/`), conversaciones simuladas (`conversaciones/`), conocimiento (`conocimiento/`), ajustes (`ajustes/`), conexión de canal (`conectar/`).
- Suscripción (`app/dashboard/suscripcion/page.tsx`): planes Gratis ($0, 50 mensajes de regalo, plan inicial), Pro ($20/mes), Profesional ($100/mes, destacado) y Custom ("Hablemos"); todo simulado en cliente. La landing tiene sección `#precios` con los mismos planes.

## Sistema de diseño

| Token (clase Tailwind) | Claro     | Oscuro    | Uso                                    |
| ---------------------- | --------- | --------- | -------------------------------------- |
| `background`           | `#F2F2EE` | `#0F1010` | Fondo de páginas ("papel")             |
| `foreground`           | `#141513` | `#F2F2EE` | Texto y botones ("tinta")              |
| `accent`               | `#2733C9` | `#4F5FE8` | Único acento: hover, focus, tags       |
| `panel`                | `#141513` | `#0A0A09` | Paneles oscuros (chat, plan destacado) |

Definidos en `app/globals.css`; usar `bg-background`, `text-foreground`, `bg-accent`, `bg-panel` — nunca hexes sueltos en las páginas.

- **Tipografías** (cargadas en `app/layout.tsx` con `next/font/google`): Schibsted Grotesk (`font-sans`, display y texto) e IBM Plex Mono (`font-mono`, etiquetas uppercase con tracking, registros, timestamps). Nunca `<link>` a Google Fonts ni `style={{ fontFamily }}`.
- **Motivo de firma**: el bloque de cursor ▮ — wordmark `easybot▮`, indicador "En vivo", cursor del typewriter. Componente `CursorBlock` en `app/components/cursor-block.tsx`; animación `animate-blink` definida en `app/globals.css`.
- **Esquinas rectas** (`rounded-none`) y colores planos. Prohibido: gradientes, glassmorphism, sombras, `hover:scale`, Poppins/Inter/Open Sans — todo eso hace que el diseño "se vea generado por IA".
- Hover de botones: tinta → ultramar (cambio de color, nunca escala).
- Animaciones decorativas: `aria-hidden="true"` y `motion-reduce:animate-none` (respetar `prefers-reduced-motion`).

## Voz y copy

Español, tuteo, verbos simples, **cero jerga técnica** — la audiencia no sabe programar. La honestidad es postura de marca ("WhatsApp y Telegram. Solo eso."). Los ejemplos usan escenas reales de negocio: cotizaciones, horarios, catálogos en PDF, clientes que escriben por WhatsApp.

## Convenciones técnicas

- Next.js 16 (App Router) + React 19 + Tailwind v4 (tokens vía `@theme` en `app/globals.css`).
- `AGENTS.md` manda: leer `node_modules/next/dist/docs/` antes de escribir código Next.js.

## Errores comunes

- Añadir más canales o integraciones a la UI → el producto es WhatsApp/Telegram, solo eso.
- Reintroducir estética genérica de IA (tarjetas glass, gradientes slate/azul, cuadrículas de chips 2×2).
- Escribir copy técnico ("configura tu webhook") → traducirlo a lenguaje de negocio ("conéctalo en minutos").
