# myRail — Product Requirements Document

> **Tagline:** myRail — *Your Journey. Live.*  
> **Version:** Final v1.0 | **Status:** Pre-development | **Document Type:** Product + Engineering Blueprint

---

## Table of Contents
1. [Introduction](#1-introduction)
2. [Product Vision](#2-product-vision)
3. [Product Identity](#3-product-identity)
4. [Problem Statement](#4-problem-statement)
5. [Product Goals](#5-product-goals)
6. [Non-Goals](#6-non-goals)
7. [Product Principles](#7-product-principles)
8. [Target Users](#8-target-users)
9. [User Experience Principles](#9-user-experience-principles)
10. [Product Roadmap](#10-product-roadmap)
11. [Information Architecture](#11-information-architecture)
12. [Navigation Structure](#12-navigation-structure)
13. [Screen Inventory](#13-screen-inventory)
14. [Core User Flows](#14-core-user-flows)
15. [UX Design System](#15-ux-design-system)
16. [Component Library](#16-component-library)
17. [Component Design Rules](#17-component-design-rules)
18. [Technical Architecture Overview](#18-technical-architecture-overview)
19. [Technology Stack](#19-technology-stack)
20. [Storage Architecture](#20-storage-architecture)
21. [Application Architecture](#21-application-architecture)
22. [State Architecture](#22-state-architecture)
23. [API Architecture](#23-api-architecture)
24. [API Contracts](#24-api-contracts)
25. [Engineering Principles](#25-engineering-principles)
26. [Git Strategy](#26-git-strategy)
27. [Git Commit Convention](#27-git-commit-convention)
28. [Git Milestones](#28-git-milestones)
29. [Success Metrics](#29-success-metrics)
30. [Portfolio Value](#30-portfolio-value)
31. [Final Product Statement](#31-final-product-statement)

---

## 1. Introduction

### 1.1 Product Overview
**myRail** is a personal railway journey companion designed to transform railway information into a simple, beautiful, and meaningful travel experience.

Existing railway applications primarily focus on providing raw information:
* Train number
* Running status
* Station timings
* Delays

However, travellers do not think in terms of railway data. They think:
* *Where am I right now?*
* *How much of my journey is completed?*
* *Am I running late?*
* *What station comes next?*
* *What should I expect?*

**myRail focuses on the traveller's journey rather than railway data.**

> **Core Idea:** myRail helps users understand, experience, and remember their journeys.

---

## 2. Product Vision

### Vision Statement
*myRail transforms railway travel information into a personal, live, and memorable journey experience.*

The long-term vision is to become a personal travel layer for railway journeys. Not just *"Track my train"*, but *"Understand my journey."*

---

## 3. Product Identity

### Brand Positioning
myRail should feel:
* **Personal**
* **Calm**
* **Reliable**
* **Premium**
* **Intelligent**

The user should feel: *"This app knows my journey,"* not *"This app shows railway information."*

---

## 4. Problem Statement

Railway travellers currently face multiple problems:

1. **Information Fragmentation:** Users need multiple sources for ticket details, train status, station information, and delay updates.
2. **Information Overload:** Existing apps often display too much data, too many options, and too little context.
3. **Lack of Personalization:** Most apps treat every user as a generic railway search query, ignoring their personal journey, travel history, and preferences.
4. **No Journey Memory:** After a journey ends, it disappears. There is no meaningful record of where the user travelled, how the journey progressed, or what happened along the way.

---

## 5. Product Goals

### Primary Goals
1. **Make journey awareness effortless:** Users should quickly understand current location, delay status, next station, and arrival expectations.
2. **Create a personal railway companion:** The app should remember current journeys, previous journeys, and ticket details.
3. **Build a portfolio-quality engineering project:** Demonstrate strong React fundamentals, modern frontend architecture, real-world product thinking, and production-quality practices.

---

## 6. Non-Goals

To maintain scope discipline, **myRail will NOT initially attempt to build:**
* Complete railway booking platform
* Payment processing system
* Social travel network
* Real-time railway operations management system
* Replacement for official railway infrastructure[cite: 1]

---

## 7. Product Principles

### 7.1 Journey First
Every feature must answer: *"How does this improve the user's journey experience?"*[cite: 1] Features should not exist just because raw data is available[cite: 1].

### 7.2 Personal Over Generic
The app should prioritize **"My journey"** over **"All railway information."**[cite: 1]

### 7.3 Calm Information
Reduce cognitive load through clean information hierarchy[cite: 1]:
1. What is happening now?[cite: 1]
2. What happens next?[cite: 1]
3. Is any action required?[cite: 1]
4. Additional details[cite: 1]

### 7.4 Three-Tap Rule
Important actions should require minimal interaction[cite: 1]. Important information should be accessible within **three taps** (e.g., View active journey, Upload ticket, Check next station, Review journey details)[cite: 1].

### 7.5 Premium Utility
Combine the raw utility of railway applications with the simplicity and delightful interactions of modern consumer applications[cite: 1].

---

## 8. Target Users

* **Primary User:** A railway passenger who wants a simple, clear way to understand their active journey (needs train tracking, delay info, station progress, quick ticket access)[cite: 1].
* **Secondary User:** Frequent travellers who want journey history, travel records, and personal travel insights[cite: 1].

---

## 9. User Experience Principles

### Information Hierarchy
Every screen should answer[cite: 1]:
* **Where am I?** (Current journey status)[cite: 1]
* **What happens next?** (Next station / upcoming event)[cite: 1]
* **What changed?** (Delay / status update information)[cite: 1]

### Motion Philosophy
Animations must communicate meaning and intent[cite: 1].
* **Allowed:** Progress indicators, loading states, view transitions, state updates[cite: 1].
* **Avoid:** Decorative animations without function or purpose[cite: 1].

---

## 10. Product Roadmap
Phase 1: Live Journey Experience ──► Phase 2: Ticket Intelligence ──► Phase 3: Smart Import
│                                                                                      │
Phase 6: Mobile Application   ◄── Phase 5: Journey Playback   ◄── Phase 4: Offline Engine

### Phase 1 — Live Journey Experience[cite: 1]
* **Goal:** Build the foundation[cite: 1]. Answer *"Where is my train and what is happening?"*[cite: 1]
* **Features:**[cite: 1]
  * **Active Journey Dashboard:** Train name/number, route, status, delays, next station, estimated arrival, journey completion %[cite: 1].
  * **Journey Timeline:** Origin, completed stations, current station, upcoming stations, destination[cite: 1].
  * **Live Status:** Running status, delay updates, last updated timestamp (e.g., *"Updated 2 minutes ago"*)[cite: 1].
  * **Map View:** Route, station markers, current train position (intelligently interpolated between stations)[cite: 1].

### Phase 2 — Ticket Intelligence[cite: 1]
* **Goal:** Upload ticket documents to automatically extract data and build a journey[cite: 1].
* **Inputs:** PDF tickets, ticket images (OCR)[cite: 1].
* **User Flow:** Upload $\rightarrow$ Local storage $\rightarrow$ Document analysis $\rightarrow$ Information extraction $\rightarrow$ Journey creation[cite: 1].
* **Fields:** Train number/name, boarding & destination stations, date, coach, seat, passenger details[cite: 1].
* **Privacy:** Process and store documents locally wherever possible[cite: 1].

### Phase 3 — Smart Import[cite: 1]
* **Goal:** Automated ticket discovery[cite: 1].
* **Integrations:** Gmail ticket discovery, IRCTC email import[cite: 1].
* **Requirements:** Explicit user permission, secure OAuth authentication, transparent privacy controls[cite: 1].

### Phase 4 — Offline Journey Engine[cite: 1]
* **Goal:** Uninterrupted offline access[cite: 1].
* **Tech:** IndexedDB / Dexie.js[cite: 1].
* **Features:** Store active journeys and tickets locally, review history offline, background sync when online[cite: 1].

### Phase 5 — Journey Playback[cite: 1]
* **Goal:** Transform past journeys into interactive travel memories[cite: 1].
* **Features:** Animated route replay (start to finish), trip statistics (distance, duration, delay analysis)[cite: 1].

### Phase 6 — Mobile Application[cite: 1]
* **Strategy:** PWA first, followed by a Capacitor wrapper to maintain a single React codebase[cite: 1].

---

## 11. Information Architecture
```
myRail
├── Home
│   └── Active Journey Overview
├── Journey
│   ├── Journey Review
│   ├── Journey Edit
│   ├── Timeline
│   ├── Map
│   └── Details
├── Tickets
│   ├── Upload Ticket
│   ├── Processing
│   └── Saved Tickets
├── History
│   ├── Previous Journeys
│   └── Journey Playback
└── Settings
├── Preferences
├── Storage
└── Privacy
```

---

## 12. Navigation Structure

Primary interaction is managed via standard bottom navigation bar[cite: 1]:

* 🏠 **Home:** Immediate operational awareness (current status within seconds)[cite: 1].
* 🚆 **Journey:** Complete journey view (status, timeline, map, details)[cite: 1].
* 📜 **History:** Archive of past trips and journey playback[cite: 1].
* ⚙️ **Settings:** Preferences, storage controls, privacy management[cite: 1].

---

## 13. Screen Inventory

| Screen | Purpose | Key Components / Content |
| :--- | :--- | :--- |
| **Screen 1: Home Dashboard**[cite: 1] | Entry point for immediate status[cite: 1] | Active Journey Card, Completion Progress %, Quick Actions[cite: 1] |
| **Screen 2: Journey Review**[cite: 1] | Detailed journey view[cite: 1] | Journey Header, Interactive Timeline, Map View, Status Summary[cite: 1] |
| **Screen 3: Journey Edit**[cite: 1] | Modify extracted ticket details[cite: 1] | Inline editable fields (Train, Route, Date, Coach, Seat) with validation[cite: 1] |
| **Screen 4: Ticket Upload**[cite: 1] | Import tickets into the app[cite: 1] | Modal/popup supporting PDF and image uploads with state indicators[cite: 1] |
| **Screen 5: Ticket Processing**[cite: 1] | Visual feedback during extraction[cite: 1] | Step-by-step progress list + signature Infinity Rail loading animation[cite: 1] |
| **Screen 6: History**[cite: 1] | Revisit completed trips[cite: 1] | Historical journey cards with summary metrics[cite: 1] |
| **Screen 7: Journey Playback**[cite: 1] | Memory & statistics replay[cite: 1] | Animated route replay, stats (delay, duration, stops), personal notes[cite: 1] |

---

## 14. Core User Flows

### Flow 1: First-Time User Setup
Open App ──► No Journey Found ──► Empty State ──► Upload Ticket ──► Analyze Document ──► Journey Created ──► Dashboard

[cite: 1]

### Flow 2: Live Journey Monitoring
Open App ──► Home Dashboard ──► View Live Status ──► Expand Journey Review ──► Inspect Timeline & Map

[cite: 1]

### Flow 3: Ticket Import & Extraction
Upload PDF / Image ──► Local Storage ──► PDF.js / Tesseract OCR ──► Extract Data ──► Review & Confirm ──► Journey Saved

cite: 1]

### Flow 4: Journey Correction
Journey Review ──► Edit Mode ──► Update Fields ──► Validation Check ──► Save Changes[cite: 1]

### Flow 5: Journey Archival
Journey Completed ──► Auto-moved to History ──► Available for Playback & Statistics Review[cite: 1]

---

## 15. UX Design System

* **Visual Style:** Calm, modern, reliable, and premium[cite: 1].
* **Terminology:** Use human-first language over raw railway codes[cite: 1]:
  * ❌ *ETA deviation* $\rightarrow$ ✅ *Arriving 18 minutes late*[cite: 1]
  * ❌ *Train ID: 12345, Stn: CNB* $\rightarrow$ ✅ *Kanpur Central*[cite: 1]
* **Motion Design:** Purposeful animations representing train movement, timeline progress, and background analysis[cite: 1].

---

## 16. Component Library

### 16.1 Layout Components
* `AppShell`: Main application container (nav, header, layout)[cite: 1].
* `Header`: Top bar with title, status, and quick actions[cite: 1].
* `BottomNavigation`: Bottom tab navigation bar[cite: 1].
* `PageContainer`: Structural container managing padding and responsive widths[cite: 1].
* `Modal`: Dialog wrapper for uploads, forms, and alerts[cite: 1].

### 16.2 Journey Components
* `JourneyCard`: Summary card showing active train details and route status[cite: 1].
* `TrainStatusCard`: Detailed live running card (delays, last station, timestamp)[cite: 1].
* `JourneyTimeline`: Vertical/horizontal timeline of stations[cite: 1].
* `StationNode`: Individual station node component with states (`completed`, `current`, `upcoming`)[cite: 1].
* `ProgressRail`: Visual bar tracking route completion percentage[cite: 1].
* `DelayBadge`: Visual status tag (e.g., `On Time`, `18 min Late`)[cite: 1].

### 16.3 Map Components
* `JourneyMap`: MapLibre container rendering the active route[cite: 1].
* `RouteLine`: Path polyline linking origin to destination[cite: 1].
* `TrainMarker`: Custom animated train icon marker positioned via interpolation[cite: 1].

### 16.4 Ticket Components
* `TicketUploader`: Dropzone container supporting drag-and-drop file inputs[cite: 1].
* `TicketPreview`: Preview container for uploaded PDFs or images[cite: 1].
* `ExtractionResult`: Review form presenting extracted ticket parameters[cite: 1].

### 16.5 Feedback Components
* `LoadingRailAnimation`: Custom signature infinity-loop rail loading spinner[cite: 1].
* `EmptyState`: Placeholder UI displayed when no journeys or history exist[cite: 1].
* `ErrorState`: Error boundary display for failed requests or bad parses[cite: 1].
* `ToastNotification`: Non-intrusive alert popups (via Sonner)[cite: 1].

---

## 17. Component Design Rules

1. Single responsibility principle for every component[cite: 1].
2. Must support 4 mandatory states: **Loading** (skeleton UI), **Empty**, **Error**, and **Success**[cite: 1].
3. No unnecessary global dependencies; prefer local state where appropriate[cite: 1].

---

## 18. Technical Architecture Overview

Designed to prioritize fast initial rendering, simple maintenance, decoupled API integration, and strong React architectural practices without unnecessary overhead[cite: 1].

---

## 19. Technology Stack

| Domain | Library / Tool | Primary Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React + Vite[cite: 1] | Component structure and rapid build execution[cite: 1] |
| **Language** | JavaScript[cite: 1] | Core codebase (focusing on architecture & state before TS)[cite: 1] |
| **Styling** | Tailwind CSS[cite: 1] | Utility-first, responsive design system[cite: 1] |
| **Routing** | React Router[cite: 1] | Client-side routing and page management[cite: 1] |
| **HTTP Client** | Axios[cite: 1] | Standardized HTTP request management[cite: 1] |
| **Server State** | TanStack Query[cite: 1] | Data fetching, caching, automatic updates[cite: 1] |
| **Form Handling** | React Hook Form[cite: 1] | Form validation and ticket edit processing[cite: 1] |
| **Animations** | Motion (Framer)[cite: 1] | Declarative layout transitions and micro-interactions[cite: 1] |
| **Icons & Toasts** | Lucide Icons + Sonner[cite: 1] | Accessible icons and toast notifications[cite: 1] |
| **Maps & Analytics** | MapLibre + Recharts[cite: 1] | Route mapping and journey statistical charts[cite: 1] |
| **Document Processing**| PDF.js + Tesseract.js[cite: 1] | Client-side PDF text extraction and image OCR[cite: 1] |
| **Utilities** | date-fns + clsx[cite: 1] | Date math, formatting, and class composition[cite: 1] |

---

## 20. Storage Architecture

Phase 1: Browser Storage (LocalStorage / SessionStorage for basic state)│Phase 2: Local Ticket Storage (Persisted uploaded files & raw extractions)│Phase 4: IndexedDB + Dexie.js (Complete offline database for history & tickets)[cite: 1]

---

## 21. Application Architecture
```
src/
├── app/
│   ├── router.jsx
│   ├── providers.jsx
│   └── config.js
├── assets/
├── components/
│   ├── ui/
│   ├── journey/
│   ├── ticket/
│   ├── map/
│   └── feedback/
├── features/
│   ├── journey/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── utils/
│   ├── ticket/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   └── history/
├── hooks/
├── services/
│   ├── api/
│   ├── railway/
│   └── storage/
├── stores/
├── utils/
├── pages/
└── main.jsx
```

---

## 22. State Architecture

* **Server State (TanStack Query):** Handles external railway API responses, caching, background polling, and loading/error states[cite: 1].
* **Local UI State (`useState`, `useReducer`):** Form values, modal toggles, current tab selections[cite: 1].
* **Persistent State (Dexie.js / IndexedDB):** Saved journeys, parsed ticket records, offline history[cite: 1].
* **Rule:** Avoid unnecessary global stores (Redux/Zustand) unless data is required by multiple decoupled tree hierarchies[cite: 1].

---

## 23. API Architecture

Uses a service provider abstraction layer to insulate the client from upstream API changes[cite: 1]:
```text
              ┌──────────────────────┐
              │ Railway Service Layer│
              └──────────┬───────────┘
                         │
              ┌──────────▼───────────┐
              │  Provider Interface  │
              └──────────┬───────────┘
    ┌────────────────────┼────────────────────┐
    ▼                    ▼                    ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│ API Provider │   │ API Provider │   │ Mock Provider│
│      A       │   │      B       │   │  (Fallback)  │
└──────────────┘   └──────────────┘   └──────────────┘
```
---

## 24. API Contracts

### 24.1 Train Status API
`GET /journey/{trainNumber}/status`

```
JSON
{
  "trainNumber": "12345",
  "currentStation": "Kanpur Central",
  "nextStation": "Lucknow Junction",
  "delay": 18,
  "updatedAt": "2026-08-02T10:30:00"
}
```

### 24.2 Journey Timeline API
`GET /journey/{id}/timeline`

```
JSON
{
  "stations": [
    {
      "name": "Delhi",
      "arrival": null,
      "departure": "08:00",
      "status": "completed"
    },
    {
      "name": "Kanpur",
      "arrival": "13:00",
      "departure": "13:15",
      "status": "current"
    }
  ]
}
```

### 24.3 Ticket Analysis API
`POST /ticket/analyse`
```
JSON
{
  "train": "12345",
  "source": "Delhi",
  "destination": "Lucknow",
  "date": "2026-08-02",
  "coach": "B2",
  "seat": "45"
}
```

## 25. Engineering Principles

* **Build Before Optimizing:** Deliver working core features before performing micro-optimizations.
* **Avoid Premature Complexity:** Defer complex auth engines or heavy backend infrastructure until strictly necessary.
* **Mandatory UI States:** Every functional view must implement explicit **Loading**, **Success**, **Empty**, and **Error** states.
* **Clear Component Boundaries:** Enforce small, modular components with minimal prop-drilling.
* **Purposeful Motion:** Animations must serve a functional purpose (e.g., feedback, progress, navigation context).

---

## 26. Git Strategy

* **`main`:** Production-ready code (strictly stable releases).
* **`develop`:** Integration branch for ongoing feature testing.
* **`feature/*`:** Branch per feature (e.g., `feature/journey-dashboard`, `feature/ticket-upload`).
* **`fix/*`:** Bug fix branches (e.g., `fix/upload-error`, `fix/timeline-rendering`).

---

## 27. Git Commit Convention

**Format:** `<type>: <description>`

* `feat:` add journey dashboard view
* `fix:` resolve timeline rendering issue on mobile
* `refactor:` abstract API service layer
* `docs:` update technical architecture PRD
* `style:` refine spacing on journey cards
* `test:` add unit tests for station progress utility

---

## 28. Git Milestones

1. **Milestone 1 — Project Foundation:** Vite setup, Tailwind config, routing, folder layout, base UI components.
2. **Milestone 2 — Static Journey Experience:** Layout mockups for Dashboard, Journey Card, Timeline, and Map placeholder.
3. **Milestone 3 — Live Journey Integration:** Provider layer execution, TanStack Query hooks, real-time status feeds.
4. **Milestone 4 — Ticket Intelligence:** Document upload modal, PDF parsing, OCR integration, ticket edit flow.
5. **Milestone 5 — Offline Journey Engine:** Dexie IndexedDB integration, persistence, offline fallback views.
6. **Milestone 6 — Journey Playback:** History timeline playback engine, journey stats rendering, wrap-up optimizations.

---

## 29. Success Metrics

* **User Experience:** User can assess train status and next arrival within **3 seconds** of launching the application.
* **Product:** High parsing success rate for uploaded ticket documents ($>90\%$), minimal manual editing needed.
* **Engineering:** Clean modular architecture, clear separation of UI and business logic, zero console memory leaks.

---

## 30. Portfolio Value

The project demonstrates:
* **Product Thinking:** User-first feature scoping, clear problem articulation, and thoughtful UX design.
* **Frontend Engineering:** Production-grade React patterns, custom hooks, robust caching, and state segregation.
* **Software Discipline:** Structured Git workflows, clean documentation, and decoupled API interfaces.

---

## 31. Final Product Statement

> **myRail** is not another train tracking application.  
> It is a personal railway journey companion that helps users understand, experience, and remember their journeys.  
>  
> **The goal is not simply:** *"Track my train."*  
> **The goal is:** *"I should know my journey."*  
>  
> *myRail — Your journey. Live.*