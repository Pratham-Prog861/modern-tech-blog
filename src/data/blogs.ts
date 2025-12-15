export type Blog = {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  tags: string[];
  category: string;
};

export const blogs: Blog[] = [
  {
    slug: "what-is-ai",
    title: "What is Artificial Intelligence?",
    description:
      "A beginner-friendly introduction to AI and how it is used in real life.",
    date: "2025-01-01",
    category: "AI",
    tags: ["ai", "basics", "technology"],
    content: `
# What is Artificial Intelligence?

**Artificial Intelligence (AI)** refers to machines that can perform tasks that normally require human intelligence. 

AI is no longer science fiction. It is already part of our daily lives — often without us realizing it.

---

## Why AI Exists
The main goal of AI is to **automate decision-making** and **problem-solving** at scale. Humans get tired; machines do not.

> "AI is likely to be either the best or the worst thing to happen to humanity." — *Stephen Hawking*

---

## Types of AI

### 1. Narrow AI (Weak AI)
Designed to perform a **specific task** very well. It cannot do anything outside its programming.
*   **Examples:** Google Search, Face ID, Siri, Netflix Recommendations.

### 2. General AI (Strong AI)
A theoretical form of AI that can perform **any intellectual task** a human can do. We are not there yet.

### 3. Super AI
An advanced concept where AI **surpasses human intelligence** in creativity, wisdom, and problem-solving.

---

## Where AI Is Used Today
*   **Entertainment:** YouTube & Netflix algorithms.
*   **Finance:** Fraud detection systems.
*   **Healthcare:** AI diagnosing diseases from X-rays.
*   **Coding:** GitHub Copilot & ChatGPT.

---

## Key Takeaway
AI is a **tool**, not magic. Understanding its limits is as important as understanding its power.
`,
  },
  {
    slug: "tanstack-start-intro",
    title: "Getting Started with TanStack Start",
    description:
      "An introduction to TanStack Start and why it matters for modern React apps.",
    date: "2025-01-05",
    category: "Web Development",
    tags: ["react", "tanstack", "frontend", "web development"],
    content: `
# Getting Started with TanStack Start

**TanStack Start** is a modern full-stack React framework focused on **server-first rendering**. It's built by the same team behind TanStack Query and Router.

---

## Why TanStack Start?
Traditional React apps (SPAs) push too much logic to the client. TanStack Start brings logic back to the **server** where it belongs, improving performance and SEO.

---

## Core Features

### 1. Server Functions
You can write server-side code directly in your components.

\`\`\`tsx
// Server-side action
const greetUser = createServerFn('POST', async (name: string) => {
  return \`Hello, \${name}!\`;
});
\`\`\`

### 2. File-Based Routing
Just like Next.js, your file structure determines your routes.
*   \`routes/index.tsx\` -> \`/\`
*   \`routes/about.tsx\` -> \`/about\`

### 3. Type-Safe Navigation
No more broken links. TanStack Start knows all your routes.

\`\`\`tsx
<Link to="/blog/$slug" params={{ slug: 'my-post' }}>
  Read Post
</Link>
\`\`\`

---

## Key Takeaway
TanStack Start encourages **better architecture** by default, giving you the power of a full-stack framework with the developer experience of React.
`,
  },
  {
    slug: "how-react-actually-works",
    title: "How React Actually Works Behind the Scenes (Not Just JSX)",
    description:
      "Understand React internals like Virtual DOM, reconciliation, and Fiber.",
    date: "2025-01-10",
    category: "Frontend",
    tags: ["react", "frontend", "internals", "javascript"],
    content: `
# How React Actually Works Behind the Scenes

Most developers use React daily, but very few understand how it truly works internally. It's not just magic; it's **engineering**.

---

## 1. The Virtual DOM
React creates a lightweight JavaScript representation of the UI called the **Virtual DOM**.

**Why?**
Because manipulating the real DOM is slow. React updates the Virtual DOM first, which is fast.

\`\`\`javascript
// Simplified Virtual DOM Node
const vnode = {
  type: 'div',
  props: { className: 'container' },
  children: ['Hello World']
};
\`\`\`

---

## 2. Reconciliation (The Diffing Algorithm)
When state changes, React compares the **new** Virtual DOM with the **previous** one. It calculates the minimal set of changes needed.

*   If a node type changes (\`div\` -> \`span\`), React destroys the old tree and builds a new one.
*   If attributes change, it only updates those attributes.

---

## 3. The Fiber Architecture
Introduced in React 16, **Fiber** allows React to:
*   **Pause** rendering work.
*   **Prioritize** urgent updates (like user input) over background tasks.
*   **Reuse** work.

This is why React apps feel smoother even under heavy load.

---

## Key Takeaway
Understanding internals helps you write **performant** and **predictable** React code.
`,
  },
  {
    slug: "common-react-mistakes",
    title: "Common React Mistakes That Make Your App Slow",
    description:
      "Avoid common React performance pitfalls and write efficient apps.",
    date: "2025-01-12",
    category: "Frontend",
    tags: ["react", "performance", "optimization"],
    content: `
# Common React Mistakes That Kill Performance

React is fast by default — unless you misuse it. Here are the top mistakes developers make.

---

## 1. Unnecessary Re-renders
Passing new objects or inline functions as props causes child components to re-render every time.

**❌ Bad:**
\`\`\`jsx
<ChildComponent data={{ id: 1 }} onClick={() => console.log('click')} />
\`\`\`

**✅ Good:**
\`\`\`jsx
const data = useMemo(() => ({ id: 1 }), []);
const handleClick = useCallback(() => console.log('click'), []);

<ChildComponent data={data} onClick={handleClick} />
\`\`\`

---

## 2. Huge Bundle Sizes
Importing huge libraries when you only need a small function bloats your app.

**❌ Bad:**
\`\`\`javascript
import _ from 'lodash'; // Imports everything
\`\`\`

**✅ Good:**
\`\`\`javascript
import debounce from 'lodash/debounce'; // Imports only what you need
\`\`\`

---

## 3. Not Using Keys Correctly
Using \`index\` as a key in lists can lead to rendering bugs and performance hits.

**❌ Bad:**
\`\`\`jsx
{items.map((item, index) => <li key={index}>{item.name}</li>)}
\`\`\`

**✅ Good:**
\`\`\`jsx
{items.map((item) => <li key={item.id}>{item.name}</li>)}
\`\`\`

---

## Key Takeaway
**Premature optimization** is the root of all evil. Measure performance first, then optimize where it hurts.
`,
  },
  {
    slug: "react-is-easy-until-it-isnt",
    title: "React Is Easy Until It Isn’t: What Beginners Usually Miss",
    description:
      "This blog highlights hidden React concepts beginners struggle with, including state management, re-renders, and component structure.",
    date: "2025-01-15",
    category: "Frontend",
    tags: ["react", "beginners", "learning", "frontend"],
    content: `
# React Is Easy... Until It Isn't

React's learning curve is deceptive. You learn JSX and props in a day, but then you hit the wall.

---

## 1. The "Stale Closure" Trap
One of the most confusing parts of \`useEffect\` is accessing old state values inside closures.

**❌ The Bug:**
\`\`\`javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log(count); // 'count' is always 0!
  }, 1000);
  return () => clearInterval(timer);
}, []); // Empty dependency array
\`\`\`

**✅ The Fix:**
Use a functional state update or add \`count\` to dependencies.

---

## 2. State Management Chaos
"Prop drilling" is annoying, but moving everything to Redux or Context without a plan creates a maintenance nightmare.

**Tip:** Start with **local state**. Lift it up only when needed. Use **TanStack Query** for server state.

---

## 3. Component Structure
Beginners often create "God components" that do everything.

**Tip:** Break UI into small, focused components.
*   \`Button.tsx\` (UI only)
*   \`UserProfile.tsx\` (Logic + UI)
*   \`Dashboard.tsx\` (Layout)

---

## Key Takeaway
Mastering React isn't about learning more hooks; it's about understanding the **lifecycle** and **data flow**.
`,
  },
  {
    slug: "how-developers-use-ai",
    title: "How Developers Use AI to Code Faster",
    description: "Practical ways developers use AI without losing core skills.",
    date: "2025-01-18",
    category: "AI",
    tags: ["ai", "developers", "productivity"],
    content: `
# How Developers Use AI to Code Faster

AI is a productivity tool, not a replacement for thinking. Here is how senior devs use it.

---

## 1. Generating Boilerplate
Don't waste time typing out standard setup code.

**Prompt:** *"Create a TypeScript interface for a User object with id, name, email, and optional phone number."*

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
}
\`\`\`

---

## 2. Explaining Obscure Errors
Paste a weird error message into ChatGPT, and it often explains the root cause faster than a Google search.

---

## 3. Writing Regex
Nobody likes writing Regex. Let AI do it.

**Prompt:** *"Write a regex to validate a US phone number."*

\`\`\`javascript
const phoneRegex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
\`\`\`

---

## The Golden Rule
**Never commit code you don't understand.** AI makes mistakes. You are the pilot; AI is just the co-pilot.
`,
  },
  {
    slug: "ai-for-developers-guide",
    title: "AI for Developers: What to Use, What to Avoid",
    description:
      "A practical guide on how developers should use AI responsibly.",
    date: "2025-01-20",
    category: "AI",
    tags: ["ai", "coding", "best practices"],
    content: `
# The Developer's AI Toolkit

Not all AI usage is created equal. Here's how to be smart about it.

---

## What to Use
*   **GitHub Copilot:** For autocomplete and pattern matching.
*   **ChatGPT / Claude:** For architectural brainstorming and refactoring ideas.
*   **v0.dev:** For generating UI components quickly.

---

## What to Avoid
*   **Pasting Sensitive Data:** Never put API keys or company secrets into public AI models.
*   **Blindly Trusting Output:** AI hallucinates. Always verify libraries and syntax.

---

## Where Humans Win
AI is bad at:
1.  **High-level system design**
2.  **Understanding business context**
3.  **Empathy for the end-user**

That is your domain.
`,
  },
  {
    slug: "will-ai-replace-developers",
    title: "Will AI Replace Developers?",
    description:
      "An honest discussion about AI’s impact on software development.",
    date: "2025-01-22",
    category: "AI",
    tags: ["ai", "career", "developers"],
    content: `
# Will AI Take Your Job?

**Short answer:** No.
**Long answer:** It will change your job.

---

## The Shift
We are moving from **"writing code"** to **"architecting solutions."** The syntax is becoming cheap, but problem-solving is becoming more valuable.

---

## Adaptation is Key
Developers who refuse to use AI will be outpaced by those who do. It's a **productivity multiplier**.

> "AI won't replace developers. Developers using AI will replace developers who don't."

---

## The Future
Software demand is infinite. If AI makes us 50% faster, we won't fire 50% of developers; we'll build **2x more software**.
`,
  },
  {
    slug: "start-frontend-2025",
    title: "How to Start Frontend Development in 2025",
    description:
      "A practical roadmap for beginners entering frontend development.",
    date: "2025-01-25",
    category: "Frontend",
    tags: ["frontend", "roadmap", "beginners"],
    content: `
# How to Start Frontend Development in 2025

Frontend development is about building user experiences. Here is your roadmap.

---

## Step 1: Fundamentals (The Trinity)
**HTML, CSS, JavaScript.** No shortcuts.

\`\`\`html
<!-- Semantic HTML is key -->
<article>
  <h1>My Blog Post</h1>
  <p>Content goes here...</p>
</article>
\`\`\`

---

## Step 2: Pick a Framework
**React** is the industry standard.
*   Learn **Hooks** (\`useState\`, \`useEffect\`).
*   Understand **Props** and **State**.

---

## Step 3: Styling
**Tailwind CSS** is the fastest way to build UIs today.

\`\`\`html
<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
  Click Me
</button>
\`\`\`

---

## Step 4: Build Projects
Projects teach more than tutorials ever will.
1.  **Portfolio Website**
2.  **Weather App** (API fetching)
3.  **Todo List** (CRUD operations)

---

## Key Takeaway
**Consistency beats speed.** Code a little bit every day.
`,
  },
  {
    slug: "frontend-roadmap-what-to-skip",
    title: "Frontend Developer Roadmap: What to Skip",
    description:
      "Not everything is important. Focus on the core frontend skills.",
    date: "2025-01-28",
    category: "Frontend",
    tags: ["frontend", "roadmap", "learning"],
    content: `
# The 80/20 Rule for Frontend

You can't learn everything. Focus on what matters.

---

## ✅ What to Learn (High ROI)
*   **JavaScript Deep Dive:** Promises, Async/Await, Array methods (\`map\`, \`filter\`, \`reduce\`).
*   **React Patterns:** Custom hooks, Context API.
*   **TypeScript:** It's non-negotiable in 2025.
*   **API Integration:** Fetching data, handling loading/error states.

---

## ⛔ What to Skip (For Now)
*   **Complex Webpack Configs:** Use **Vite** or **Next.js**.
*   **Class Components:** Stick to **functional components**.
*   **Redux (Legacy):** Learn **Zustand** or **Context** first.
*   **jQuery:** It's history.

---

## Key Takeaway
Don't get distracted by the latest shiny tool. Master the **fundamentals**.
`,
  },
  {
    slug: "start-backend-as-frontend-dev",
    title: "How to Start Backend Development as a Frontend Developer",
    description: "A smooth transition guide for frontend developers.",
    date: "2025-02-01",
    category: "Backend",
    tags: ["backend", "nodejs", "api"],
    content: `
# Backend Development for Frontend Developers

If you know JavaScript, backend is closer than you think.

---

## 1. Start with Node.js
Same language, new mindset. You run JS on the server instead of the browser.

\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from the Backend!');
});

server.listen(3000);
\`\`\`

---

## 2. Learn HTTP Basics
*   **GET:** Retrieve data.
*   **POST:** Send data.
*   **PUT/PATCH:** Update data.
*   **DELETE:** Remove data.

---

## 3. Databases
Start with **MongoDB** (NoSQL) because it uses JSON-like documents. Later, learn **PostgreSQL** (SQL).

---

## Key Takeaway
Backend is about **data flow**, **security**, and **reliability**. It's less about pixels and more about logic.
`,
  },
  {
    slug: "backend-explained-simple",
    title: "Backend Development Explained Simply",
    description:
      "Backend concepts like APIs and databases explained without confusing terms.",
    date: "2025-02-03",
    category: "Backend",
    tags: ["backend", "api", "databases"],
    content: `
# Backend Explained Simply

Think of a restaurant.

*   **The Frontend** is the menu and the table setting (what you see).
*   **The Backend** is the kitchen (where the work happens).
*   **The API** is the waiter (taking your order to the kitchen and bringing food back).

---

## The Database (The Pantry)
This is where ingredients (data) are stored.
*   **Users**
*   **Products**
*   **Orders**

## The Server (The Chef)
The server receives instructions, processes them, and decides what to do.
*   *"Check if this user exists."*
*   *"Calculate the total price."*

## Authentication (The Bouncer)
Checks if you are allowed to enter the VIP section (Admin Dashboard).

---

## Key Takeaway
The backend ensures everything runs **smoothly** and **securely** behind the scenes.
`,
  },
  {
    slug: "frontend-to-fullstack",
    title: "From Frontend to Full-Stack",
    description:
      "How developers transition from frontend to full-stack development.",
    date: "2025-02-05",
    category: "Full Stack",
    tags: ["fullstack", "career", "development"],
    content: `
# Leveling Up to Full-Stack

Becoming full-stack isn't just about writing backend code; it's about **owning the entire stack**.

---

## 1. Understand the Data Flow
Trace a user action from start to finish:
1.  Button Click (Frontend)
2.  API Request (Network)
3.  Server Processing (Backend)
4.  Database Query (DB)
5.  Response (UI Update)

---

## 2. Deployment & DevOps
Learn how to deploy both sides.
*   **Frontend:** Vercel, Netlify.
*   **Backend:** Render, Railway, AWS.

---

## 3. Authentication
Implement a login system. It forces you to understand **sessions**, **JWTs**, and **security headers**.

---

## 4. Project Idea: E-commerce Dashboard
Build a product management dashboard. It requires **CRUD operations**, **image uploads**, and **auth** — the trifecta of full-stack skills.
`,
  },
  {
    slug: "real-projects-vs-tutorials",
    title: "What Building Real Projects Teaches You",
    description: "Why real projects matter more than tutorials.",
    date: "2025-02-08",
    category: "Career",
    tags: ["projects", "learning", "career"],
    content: `
# Why Real Projects Matter

Tutorials show the path. Projects make you walk it.

---

## 1. Real Problems
In a tutorial, everything works. In a real project, you will spend 4 hours fixing a **CORS error**. This is where real learning happens.

## 2. Architecture Decisions
*"Should I use Context or Redux?"*
*"SQL or NoSQL?"*

Tutorials tell you what to use. Real projects force you to decide **why**.

## 3. Dirty Code & Refactoring
Your first draft will be messy. Real projects teach you the value of **clean code** when you have to revisit it a month later.

---

## Key Takeaway
**Projects turn learners into engineers.** Stop watching, start building.
`,
  },
];
