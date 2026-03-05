# Success Factory -- AI Agent Development Guide

## Tech Stack: Next.js 16 (App Router) + TypeScript + Tailwind CSS + shadcn/ui

------------------------------------------------------------------------

## 1. Project Overview

This document provides step-by-step AI agent instructions to build the
**Success Factory** landing page frontend.

The UI includes:

-   Hero Section with gradient background
-   Image card collage
-   About Section
-   Core Solutions Grid
-   Stats Section
-   UAE Verticals Section
-   Contact Form Section
-   Footer

Design Style: - Dark navy gradient background - Glassmorphism cards -
Soft glow effects - Rounded corners (2xl) - Clean typography - Corporate
premium aesthetic

------------------------------------------------------------------------

## 2. Initial Project Setup

### 2.1 Create Project

``` bash
npx create-next-app@latest success-factory --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### 2.2 Install Required Dependencies

``` bash
npm install lucide-react clsx tailwind-merge class-variance-authority framer-motion
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input textarea badge separator
```

------------------------------------------------------------------------

## 3. Project Folder Structure

    src/
     ├── app/
     │   ├── layout.tsx
     │   ├── page.tsx
     │
     ├── components/
     │   ├── layout/
     │   │   ├── Navbar.tsx
     │   │   ├── Footer.tsx
     │   │
     │   ├── sections/
     │   │   ├── Hero.tsx
     │   │   ├── About.tsx
     │   │   ├── CoreSolutions.tsx
     │   │   ├── Stats.tsx
     │   │   ├── Verticals.tsx
     │   │   ├── Contact.tsx
     │
     ├── lib/
     │   ├── utils.ts

------------------------------------------------------------------------

## 4. Design System Configuration

### 4.1 Tailwind Config Extensions

Add to `tailwind.config.ts`:

-   Custom gradient background
-   Glass card shadow
-   Blur utilities
-   Custom color palette

Colors - Primary: #045AD8, Secondary: #84858E, Background: #090c1d, Card: #FFFFFF (2% Opacity), Title: #FFFFFF, Subtitle: #84858E, Border: #222638, Contact Form Card: #1A2232, Contact Form Input Field Border: #353D4B

Font Family - Montserrat
Font Configuration - Hero title: Semibold 48/56 (Montserrat), Subtitle: Regular 18/28, About Section Semibold 30/48 (Scrolled) - Regular 30/48 (Unscrolled), Other Sections - Title: Semibold 40/48, Subtitle: Regular 16/24, Card Title: Semibold 20/28, Subtitle: Regular 14/20

------------------------------------------------------------------------

## 5. Layout Architecture

### layout.tsx

-   Import global CSS
-   Set font (Inter or Geist)
-   Apply dark background
-   Container width: max-w-7xl mx-auto px-6

------------------------------------------------------------------------

## 6. Section Implementation Details

------------------------------------------------------------------------

## 6.1 Navbar Component

Features: - Transparent background - Sticky - Blur backdrop - Links:
About, Solutions, Markets, Platforms - Contact Button (shadcn Button)

------------------------------------------------------------------------

## 6.2 Hero Section

Components: - Badge ("Over 200+ brands trust us") - Main Heading -
Subheading paragraph - Image collage (4 floating cards)

Styling: - Radial gradient background - Framer Motion fade-in
animation - Rounded 2xl cards - Subtle hover scale effect

------------------------------------------------------------------------

## 6.3 About Section

Left: - Section title - Description paragraphs

Right: - Clean typography - Subtle fade animation

------------------------------------------------------------------------

## 6.4 Core Solutions Section

Grid Layout: - 3 columns (desktop) - 1 column (mobile)

Each Card: - shadcn Card - Icon (lucide-react) - Title - Description -
Soft glow border - Hover elevate effect

Solutions: - Venture Building - Commerce Platform - SuccessPay -
SuccessOps - SuccessShip - SuccessAI

------------------------------------------------------------------------

## 6.5 Stats Section

Large Gradient Card

Metrics: - 10x Faster onboarding - 99% Lower manual reconciliation - 0%
Revenue leakage

Centered text Glass effect background Divider lines

------------------------------------------------------------------------

## 6.6 UAE Verticals Section

Grid of 4 Cards: - Jewelry - Heritage - Artisan Markets - Tailoring

Each: - Image background - Dark overlay - Title bottom-left - Hover zoom
effect

------------------------------------------------------------------------

## 6.7 Contact Section

Two-column layout:

Left: - CTA text

Right: - shadcn Form - Input fields: - Full Name - Email - Company/Event
Name - Message - Primary Button

Form handling: - React Hook Form - Zod validation (optional)

------------------------------------------------------------------------

## 6.8 Footer

-   Logo
-   Description
-   Social icons
-   Navigation links
-   Bottom copyright

------------------------------------------------------------------------

## 7. Animation Guidelines

Use Framer Motion:

-   Fade up on scroll
-   Slight stagger animation
-   Image hover scale
-   Button micro-interactions

------------------------------------------------------------------------

## 8. Accessibility

-   Proper aria labels
-   Keyboard focus styles
-   Sufficient contrast
-   Semantic HTML structure

------------------------------------------------------------------------

## 9. Performance Optimization

-   Use Next.js Image component
-   Lazy load sections
-   Optimize images
-   Use dynamic imports if needed

------------------------------------------------------------------------

## 10. Deployment

Recommended: - Vercel - Edge optimized - Enable compression

------------------------------------------------------------------------

## 11. Optional Enhancements

-   Dark/Light toggle
-   Animated gradient background
-   CMS integration
-   Contact API route

------------------------------------------------------------------------

## 12. Final Checklist

-   Fully responsive
-   Lighthouse score above 90
-   Accessible
-   Clean reusable components
-   Proper folder structure
-   Production-ready build

------------------------------------------------------------------------

END OF AI AGENT INSTRUCTION GUIDE
