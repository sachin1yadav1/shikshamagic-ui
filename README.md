# ShikshaMagic UI (`shikshamagic-ui`)

> Production-ready, animation-rich, themeable React UI component library and design system for modern web and EdTech creator platforms. Designed for human developers and **AI agent code generation**.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6.svg)](index.d.ts)
[![AI Ready](https://img.shields.io/badge/AI-Ready-10b981.svg)](llms.txt)

---

## 🚀 Features

- **30+ Production React Components**: Comprehensive set of Atoms (Buttons, Inputs, Modals, Drawers, Skeletons) and Molecules (Cards, Tables, Dropdowns, Toast notifications).
- **GSAP & React-JSS Powered**: Fluid, 60fps micro-animations and zero-runtime CSS clashes with scoped styles.
- **AI-Native (`llms.txt` & `components.json`)**: Formatted specifically so AI code generators (Cursor, Claude, ChatGPT, GitHub Copilot, Gemini) can inspect prop types, generate accurate code, and build UIs without hallucinations.
- **Full TypeScript Support**: Complete ambient declarations (`.d.ts`) with strict prop types and autocompletion.
- **Enterprise Form Support**: Built-in integration with `react-hook-form` & `zod`.
- **Dynamic Theming**: Built-in Light/Dark mode, customizable color palettes, and responsive font/spacing scales.

---

## 📦 Installation

```bash
npm install shikshamagic-ui
# or with pnpm
pnpm add shikshamagic-ui
# or with yarn
yarn add shikshamagic-ui
```

### Icon Font & Micro-Animations
The library uses the official **[MingCute](https://www.mingcute.com)** icon library (2,800+ icons) and **[MingCute Animations](https://www.mingcute.com/animation)**. Add the official stylesheet into your `index.html`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mingcute_icon@2.9.72/font/Mingcute.min.css" />
```

Available animation classes:
- `.mgc-spin` — Smooth continuous rotation
- `.mgc-pulse` — Heartbeat scaling pulse
- `.mgc-bounce` — Subtle vertical bounce
- `.mgc-wave` — Greeting wave oscillation
- `.mgc-flip` — 3D horizontal flip
- `.mgc-hover-bounce` / `.mgc-hover-spin` — Trigger animation on hover

---

## ⚡ Quick Start

Wrap your application root with `ThemeProvider` and start using any component:

```tsx
import React from 'react';
import { ThemeProvider, Button, Input, Card } from 'shikshamagic-ui';

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: 24, maxWidth: 600, margin: '0 auto' }}>
        <Card heading="Welcome to ShikshaMagic" subheading="Creator Studio">
          <p style={{ color: '#4b5563', margin: '12px 0 18px' }}>
            Build responsive, interactive educational dashboards and storefronts.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <Button variant="primary" type="solid" onClick={() => alert('Clicked!')}>
              Explore Courses
            </Button>
            <Button variant="secondary" type="outline">
              Learn More
            </Button>
          </div>
        </Card>
      </div>
    </ThemeProvider>
  );
}
```

---

## 🤖 For AI Coding Assistants (LLM Guidelines)

If you are an AI assistant (Cursor, Copilot, ChatGPT, Claude) generating UI with `shikshamagic-ui`:
1. **Always wrap the tree with `<ThemeProvider>`**:
   ```tsx
   import { ThemeProvider } from 'shikshamagic-ui';
   ```
2. **Review `llms.txt` or `components.json`** located in the root of the package for exact component props and variant values.
3. **Core Prop Conventions**:
   - `Button`: `variant="primary" | "secondary" | "success" | "warning" | "error" | "info"`, `type="solid" | "outline" | "ghost" | "flat"`, `size="2xs" | "xs" | "sm" | "md" | "lg"`, `loading?: boolean`, `icon?: IconName`.
   - `Input`: `label?: string`, `placeholder?: string`, `type?: "text" | "search" | "number"`, `valid?: boolean`, `errorMessage?: string`, `allowClear?: boolean`.
   - `Card`: `heading?: React.ReactNode`, `subheading?: React.ReactNode`, `children: React.ReactNode`.
   - `Modal`: `open: boolean`, `onClose: () => void`, `title?: React.ReactNode`, `children: React.ReactNode`.
   - `Drawer`: `open: boolean`, `onClose: () => void`, `title?: React.ReactNode`, `children: React.ReactNode`.
   - `Table`: `columns: Array<{ key: string, title: string, dataIndex: string }>`, `dataSource: Array<Record<string, any>>`.
   - `Toast`: Trigger via `toast.success("Message")`, `toast.error("Message")`, or mount `<Toaster />`.

---

## 📚 Component Catalog

### 1. Atoms
| Component | Description | Key Props |
|-----------|-------------|-----------|
| `Alert` | Highlighted notification banners | `title`, `message`, `variant` (`success`\|`warning`\|`error`\|`info`) |
| `Avatar` | User profile avatar | `title`, `src`, `size` (`2xs`\|`xs`\|`sm`\|`md`\|`lg`) |
| `AvatarGroup` | Stacked group of avatars | `avatars`, `max` |
| `Badge` | Count indicator or status badge | `count`, `children` |
| `Button` | Standard interactive button | `variant`, `type`, `size`, `loading`, `disabled`, `icon` |
| `IconButton` | Icon-only action button | `icon`, `variant`, `size`, `onClick` |
| `Checkbox` & `CheckboxGroup` | Boolean and multi-value options | `checked`, `onChange`, `variant` |
| `Collapse` | Accordion collapsible panel | `sections: [{ id, title, children }]`, `variant` |
| `Divider` | Visual rule separator | `orientation`, `dashed` |
| `Drawer` | Animated slide-out side sheet | `open`, `onClose`, `title`, `children` |
| `Icon` | 2,800+ vector icon set | `name`, `size`, `color` |
| `Input` | Versatile single-line text input | `label`, `placeholder`, `type`, `errorMessage`, `valid` |
| `PhoneInput` | International phone input | `defaultCountryCode`, `allowSearch`, `label` |
| `Loader` | Animated loading spinner | `size`, `color` |
| `Modal` | Centered modal overlay | `open`, `onClose`, `title`, `children` |
| `Pagination` | Page navigation controls | `currentPage`, `totalPages`, `onPageChange` |
| `Popover` | Floating contextual tooltip/card | `content`, `children`, `trigger` |
| `Radio` & `RadioGroup` | Mutually exclusive options | `value`, `onChange`, `children` |
| `Rating` | Interactive star rating | `value`, `onChange`, `count`, `readOnly` |
| `Select` | Dropdown select with search & tags | `options`, `multiSelect`, `allowSearch`, `onSelect` |
| `Skeleton` | Content loading skeleton | `count`, `height`, `variant` |
| `Switch` | Toggle switch | `checked`, `onChange`, `disabled` |
| `Tab` | Tabbed navigation view | `tabs`, `activeTab`, `onChange` |
| `Tag` | Categorical badge / chip | `variant`, `children`, `onClose` |
| `Text` | Standardized typography component | `variant`, `color`, `children` |
| `TextArea` | Multi-line text field | `label`, `rows`, `placeholder`, `value`, `onChange` |
| `Tooltip` | Hover tooltip bubble | `content`, `children`, `position` |

### 2. Molecules
| Component | Description | Key Props |
|-----------|-------------|-----------|
| `Card` | Structured container for content | `heading`, `subheading`, `children`, `footer` |
| `Dropdown` | Pop-up menu triggered by click/hover | `items`, `trigger`, `children` |
| `Table` | High-density data table | `columns`, `dataSource`, `loading` |
| `toast` / `Toaster` | Global notification system | `toast.success()`, `toast.error()`, `<Toaster />` |

---

## 🎨 Theming & Customization

You can provide custom themes to `<ThemeProvider>`:

```tsx
import { ThemeProvider } from 'shikshamagic-ui';

const customTheme = {
  colors: {
    primary: '#6366f1', // Indigo
    secondary: '#ec4899', // Pink
  },
};

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

---

## 📄 License

MIT © [ShikshaMagic](https://github.com/sachin1yadav1/shikshamagic-ui)