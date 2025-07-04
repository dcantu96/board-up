# Board Up

A modern, open-source Kanban board app inspired primarily by [Linear](https://linear.app/) and [Notion](https://www.notion.so/). Board Up is not just a productivity tool—it's a showcase of advanced React patterns, state management strategies, robust testing practices, and full-stack development with real-time subscriptions and a modern database stack.

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen?style=flat-square)](https://board-up.vercel.app/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

---

## Features

- **Visual Kanban Boards**: Organize your workflow into boards, lists, and cards.
- **User Authentication**: Secure login with Google (NextAuth.js).
- **Real-Time Updates**: Changes to boards and cards are reflected instantly via subscriptions.
- **Advanced State Management**: Modern approaches for predictable, scalable UI state.
- **Testing Strategies**: Comprehensive examples using unit, integration, and E2E testing.
- **Design Patterns**: Clean, reusable, and scalable code architecture throughout the stack.
- **Responsive UI**: Works great on desktop and mobile.
- **Built with Next.js & Prisma**: Fast, reliable, and easy to extend.
- **TypeScript**: Strongly typed code for better maintainability and developer experience.

---

## Quick Start

1. **Clone the repo:**

   ```bash
   git clone https://github.com/dcantu96/board-up.git
   cd board-up
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up your environment:**

   - Copy `.env.example` to `.env` and fill in required variables (see below).

4. **Start your Prisma database locally:**

   ```bash
   npx prisma dev
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## Environment Variables

Create a `.env` file at the root of your project. At minimum, you’ll need:

```env
DATABASE_URL=your_postgres_db_url
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## Database

This project uses [Prisma](https://www.prisma.io/) for database access.

- To set up your database, run:
  ```bash
  npx prisma migrate dev
  ```
- To start the Prisma database locally:
  ```bash
  npx prisma dev
  ```
- To seed demo data:
  ```bash
  npx prisma db seed
  ```

---

## Deployment

The easiest way to deploy your Next.js app is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Vercel Platform](https://vercel.com/)

---

## Inspiration

Board Up draws direct inspiration from the quality and UX of:

- [Linear](https://linear.app/)
- [Notion](https://www.notion.so/)

---

## License

MIT
