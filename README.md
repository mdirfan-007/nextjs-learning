This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





# Next.js Daily Learning Log 

This repository documents my **daily learning progress** while mastering **Next.js with TypeScript**, modern UI systems, and real-world frontend patterns.

---

## 🗓 Daily Updates

### 📅 Day 01 – Navbar Hover Issue (Aceternity UI)
**Date:** 19 Feb 2026  

#### 🔧 What I Worked On
- Integrated **Aceternity UI Navbar** in a Next.js (App Router) project
- Understood how `Menu`, `MenuItem`, and `HoveredLink` work internally
- Identified why hover effects were triggering on all menu items

#### 🧠 Problem
- `Home` and `Contact Us` were showing hover effects
- I wanted hover animation **only for dropdown items**

#### ✅ Solution
- Removed `MenuItem` from non-dropdown links
- Used plain `Next.js <Link />` for static menu items
- Kept `MenuItem` only for dropdown (`All Courses`)

#### 🛠 Concepts Learned
- Aceternity UI is **copy & customize**, not configure
- Hover behavior is controlled by **component logic**, not CSS
- Clean separation between **static links** and **interactive menus**

#### 🔑 Key Takeaway
> Use behavior-based components only where interaction is required.

---

## 📌 Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Aceternity UI
- Framer Motion

---

## 🎯 Goal
Build production-ready UIs while understanding **why things work**, not just **how**.


### 📅 Day 02 – Hero Section (Spotlight & Moving Border)
**Date:** 20 Feb 2026  

#### 🔧 What I Worked On
- Built the **Hero Section** using **Aceternity UI**
- Implemented **Spotlight animation** for visual depth
- Added **Moving Border Radius** effect for modern UI feel

#### 🧠 Problem
- Understanding how Spotlight animation works internally
- Controlling animation without breaking layout
- Combining multiple animated effects in a single section

#### ✅ Solution
- Copied the **Spotlight** component locally and customized it
- Tuned animation values for smooth performance
- Layered spotlight and moving border effects properly using z-index and positioning

#### 🛠 Concepts Learned
- Aceternity animations are controlled via **Framer Motion**
- Visual effects should be **subtle**, not distracting
- Component-level customization is better than global overrides

#### 🔑 Key Takeaway
> Good hero sections guide attention without overwhelming the user.

---

### 📅 Day 03 – Feature Courses Section (Background Gradient & Data Fetch)
**Date:** 21 Feb 2026  

#### 🔧 What I Worked On
- Built the **Feature Courses** section
- Implemented **Background Gradient** using **Aceternity UI**
- Added **Moving Border Radius** for featured cards
- Fetched course data from a **local JSON file** using TypeScript
- Animated course cards while rendering dynamic data

#### 🧠 Problem
- Structuring JSON data with proper TypeScript types
- Rendering animated UI components from dynamic data
- Keeping animations smooth while mapping over fetched data

#### ✅ Solution
- Defined strict **TypeScript interfaces** for course data
- Used `.map()` to render feature cards safely
- Combined Aceternity UI animations with data-driven rendering
- Ensured clean component separation and reusable UI logic

#### 🛠 Concepts Learned
- TypeScript improves safety when working with JSON data
- Animation + dynamic rendering requires controlled layout
- Aceternity UI components are meant to be customized locally

#### 🔑 Key Takeaway
> Well-typed data makes animated UIs easier to scale and maintain.

## 📈 Progress
- [x] Navbar & Menu customization
- [x] Hero Section
- [x] Feature Courses Section
- [ ] API Integration
