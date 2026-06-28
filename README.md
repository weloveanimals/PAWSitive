# PAWSitive 🐾

**PAWSitive** is a virtual pet simulator web application built for the FBLA Introduction to Programming event. Users adopt, name, and raise a virtual pet while managing the real financial cost of pet ownership. Every decision — feeding, playing, visiting the vet, buying accessories — affects both the pet's wellbeing and the user's budget.

---

## Features

### Pet Care System
- Adopt one of four pet types: Cat, Dog, Bunny, or Hamster
- Monitor and manage five health stats: Hunger, Happiness, Energy, Cleanliness, Health
- Six dynamic moods (Happy, Sad, Hungry, Tired, Sick, Energetic) that respond to stat levels in real time
- Pet evolves from Baby → Teen → Adult as it ages
- Earn achievement badges for milestones

### Financial Simulation
- Every care action costs money (food $5, toys $10, vet $50, cleaning $5)
- Daily passive expenses of $12 deducted each night
- Full transaction history with category tags (food, toy, vet, supplies, daily)
- Savings goal tracker with a progress bar toward $100 / $200 / $500 targets

### Career & Income System
- 10 careers across 4 progression tiers
  - Tier 1 Starter (no requirements): Student, Retail Worker
  - Tier 2 Entry Level (5 days in Tier 1): Chef, Teacher, Photographer, Designer
  - Tier 3 Professional (10 days in Tier 2): Software Engineer, Veterinarian, Entrepreneur
  - Tier 4 Elite (20 days in Tier 3): Doctor
- Salary paid automatically every 3 in-game days
- Career prerequisite system — careers unlock based on work experience
- Daily Overtime bonus available once per day per career
- Career story events and journal entries on promotion

### Sleep / Next Day
- Nightly sleep sequence: room dims, moon rises, sun rises — all within the pet's room
- Random daily events (21 possible: finding money, getting sick, going viral, etc.)
- Pet can dream — mood-based thought bubbles appear over the pet

### Mini-Games (Side Hustles)
- **Memory Match** — Match 8 emoji pairs on a 4×4 grid. Earn $20 on completion.
- **Reaction Game** — 3-round reaction test. Payout based on average speed (under 300ms = full $18).
- **Bubble Pop** — 15-second timed game. Tap rising bubbles; special bubbles worth 3× points. Earn up to $15.

### Customization & Accessories
- Item Shop with 6 accessories: Bow, Hat, Bandana, Crown, Glasses, Scarf
- Each accessory visually overlays on the correct body part (glasses at eye level, hat on head, etc.)
- AI Customizer: describe a color and the pet is tinted using CSS filters while keeping its emoji form
- AI Room Designer: describe your dream room in text

### Analytics Dashboard
- Spending breakdown pie chart by category
- Spending over time line chart
- Earnings over time line chart
- Filter by time range (24h, 7d, 30d, all time)
- Filter by expense category
- Export data as CSV
- Print a formatted summary report

### AI-Powered Features
- **Ask PAWSitive** — Interactive Q&A chat for pet care advice (powered by OpenAI)
- **AI Customizer** — Natural language pet color customization

### Journaling
- Auto-diary records every event grouped by in-game day
- Color-coded entries: dreams (purple), paydays (yellow), milestones (green), events (default)

### Account System
- Multi-user registration and login
- Pet data persists across sessions using browser localStorage
- Multiple accounts supported on one device

---

## How to Use

1. **Create an account** on the login screen, then click "Create new pet"
2. **Choose your pet type** (Cat, Dog, Bunny, Hamster)
3. **Name your pet**
4. **Pick a starting career** (Student or Retail Worker — others unlock later)
5. **Describe your dream room** for the AI Room Designer
6. **Care for your pet daily** using the action buttons in the left panel
7. **Earn money** through your career (salary every 3 days), overtime, and mini-games
8. **Upgrade your career** as you accumulate work experience
9. **Buy accessories** from the Closet and equip them on your pet
10. **Track finances** in the Analytics tab and set savings goals

---

## Project Structure

```
fbla-pawsitive/
├── app/                        # Next.js App Router pages and API routes
│   └── api/                    # Server-side API endpoints (AI features)
├── components/
│   └── pet/                    # All pet-related UI components
│       ├── games/              # Mini-game components (Memory Match, Reaction, Bubble Pop)
│       ├── onboarding/         # Multi-step setup flow components
│       └── room/               # Pet room panels, background, objects, display
├── lib/
│   ├── domain/                 # Core game logic (no UI)
│   │   ├── types.ts            # All TypeScript interfaces and types
│   │   ├── careers.ts          # Career templates, prerequisites, unlock logic
│   │   ├── petRules.ts         # Stat update formulas and mood calculations
│   │   ├── events.ts           # Random events and dream text pools
│   │   └── economy.ts          # Expense tracking, CSV export, chart data builders
│   ├── pet-store.ts            # Global Zustand state store with all game actions
│   └── account-store.ts        # Multi-user account management
└── public/                     # Static assets
```

---

## Setup and Installation

### Prerequisites
- Node.js 18 or newer
- pnpm (recommended) or npm

### Install dependencies
```bash
pnpm install
```

### Environment variables
Create a `.env.local` file in the project root:
```
OPENAI_API_KEY=your_openai_api_key_here
```
The AI features (Ask PAWSitive, AI Customizer) require this key. All other features work without it.

### Run the development server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production
```bash
pnpm build
pnpm start
```

---

## Libraries and Frameworks

| Library | Version | Purpose |
|---|---|---|
| **Next.js** | 16 | Full-stack React framework, App Router, API routes |
| **React** | 19 | UI component library |
| **TypeScript** | 5 | Strongly-typed JavaScript superset |
| **Tailwind CSS** | 4 | Utility-first CSS framework |
| **Zustand** | 5 | Lightweight global state management with persistence |
| **Recharts** | 2.15 | Chart library for the Analytics Dashboard (pie, line, bar) |
| **Radix UI** | various | Accessible headless UI primitives (dialogs, selects, tooltips, etc.) |
| **Lucide React** | 0.454 | Icon library |
| **Sonner** | 1.7 | Toast notification system |
| **date-fns** | 4.1 | Date formatting utilities |
| **Zod** | 3.25 | Schema validation |
| **OpenAI API** | — | Powers Ask PAWSitive Q&A and AI Customizer |
| **Immer** | latest | Immutable state helpers |

---

## Attribution

- Pet emojis are standard Unicode emoji rendered by the operating system
- UI component base from [shadcn/ui](https://ui.shadcn.com/) (open source, MIT license)
- Icons from [Lucide](https://lucide.dev/) (open source, ISC license)
- Charts from [Recharts](https://recharts.org/) (open source, MIT license)
- AI responses powered by [OpenAI](https://openai.com/) GPT models via their public API

---

## Scripts

```bash
pnpm dev      # Start development server with Turbopack
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```
