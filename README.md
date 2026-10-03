# ByteSpace landing page

# ByteSpace

ByteSpace is a responsive landing page concept for an online learning platform. It showcases courses, learning paths, creator features, and learner testimonials, with separate sign-in and registration screens.

## Features

- Course catalog preview with category navigation
- Learning path and creator sections
- Testimonials and calls to action
- Sign-in and registration page layouts
- Responsive styling with Tailwind CSS

> **Prototype note:** The sign-in and registration forms are UI prototypes. They currently prevent form submission and are not connected to an authentication service or user database. Social sign-in buttons are also visual placeholders.

## Tech stack

- [Next.js](https://nextjs.org/) 14 with the App Router
- React 18 and TypeScript
- Tailwind CSS 3
- Lucide React icons

## Getting started

### Requirements

- Node.js (LTS recommended)
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The development server supports hot reloading as you edit files.

## Available commands

| Command         | Description                                            |
| --------------- | ------------------------------------------------------ |
| `npm run dev`   | Start the local development server                     |
| `npm run build` | Create a production build                              |
| `npm run start` | Serve the production build (run `npm run build` first) |

## Routes

| Path        | Page                                  |
| ----------- | ------------------------------------- |
| `/`         | ByteSpace landing page                |
| `/login`    | Sign-in screen prototype              |
| `/register` | Account registration screen prototype |

## Project structure

```text
app/                 App Router pages, shared layout, and global styles
  login/              Sign-in route
  register/           Registration route
components/          Landing page sections and reusable UI components
lib/data.ts           Course, category, learning path, and testimonial content
lib/cn.ts             Class name utility
public/images/        Images and SVG assets served from the site root
```

The home page is assembled from section components in `components/`. Repeated display content is defined in `lib/data.ts`. Public assets can be referenced by their root-relative path, such as `/images/course-1.png`.

## Customization

- Edit course categories, course cards, learning paths, testimonials, and footer links in `lib/data.ts`.
- Update the page sections in `components/` and the route files in `app/`.
- Change global styles and Tailwind theme settings in `app/globals.css` and `tailwind.config.ts`.
- Replace or add static images in `public/images/`.

## Production build

```bash
npm run build
npm run start
```

The start command serves the production build locally. To publish the project, deploy it to a platform that supports Next.js and configure the appropriate production build and start settings.
