const dummyTechBlogs = [
  {
    id: "1",
    title: "Building Resilient Web Applications",
    excerpt: "Learn how to architect web applications that can scale and adapt to changing requirements.",
    category: "tech",
    date: "March 25, 2025",
    readTime: "15 min read",
    slug: "resilient-web-applications",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&w=1000&q=80",
    userName: "@inkofbakshi",
    content: `# Building Resilient Web Applications

Web applications today need to be more resilient than ever before. With increasing user expectations, variable network conditions, and evolving security threats, building applications that can withstand these challenges is crucial.

## Key Principles of Resilient Architecture

### 1. Embrace Failure

Design systems that expect and handle failures gracefully. This includes:

- Implementing circuit breakers to prevent cascading failures
- Using fallback mechanisms when services are unavailable
- Adopting retry strategies with exponential backoff

### 2. Design for Scalability

Applications should be able to handle growth without requiring complete redesigns:

- Use horizontal scaling where possible
- Implement proper caching strategies
- Consider serverless architectures for variable workloads

### 3. Prioritize Observability

You can't fix what you can't see:

- Implement comprehensive logging
- Set up monitoring and alerting
- Use distributed tracing to understand system behavior

### 4. Maintain Simplicity

Complexity is the enemy of reliability:

- Avoid premature optimization
- Prefer proven technologies over cutting-edge when stability is critical
- Document architecture decisions and system boundaries

## Implementation Strategies

### Microservices vs. Monoliths

The debate between microservices and monoliths is often oversimplified. The reality is that both approaches have their place:

- Monoliths offer simplicity and are often the right choice for smaller teams and projects
- Microservices provide isolation and independent scaling, but introduce distributed systems challenges

The key is to choose the architecture that best suits your team size, organizational structure, and business requirements.

### Progressive Enhancement

Building applications that work even when certain features aren't available:

- Core functionality should work without JavaScript
- Enhanced functionality can be added progressively
- Consider offline-first approaches with service workers

### API Design Considerations

APIs are the contract between your services and clients:

- Version your APIs to allow for evolution
- Use appropriate status codes and error messages
- Consider rate limiting to protect your services

## Conclusion

Building resilient web applications isn't just about technical choices—it's about adopting a mindset that anticipates and embraces change and failure. By designing systems with resilience in mind from the start, we create applications that can withstand the unpredictable nature of the web and provide reliable experiences to users.`,
  },
  {
    id: "2",
    title: "The Future of Frontend Development",
    excerpt: "Exploring emerging trends in frontend development and what skills will be in demand in the coming years.",
    category: "tech",
    date: "March 8, 2025",
    readTime: "10 min read",
    slug: "future-of-frontend",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnRlbmR8ZW58MHx8MHx8&w=1000&q=80",
    userName: "@inkofbakshi",
    content: `# The Future of Frontend Development

As we look toward the future of frontend development, several emerging trends are shaping how we build web experiences. From new rendering patterns to AI-assisted development, the landscape is evolving rapidly.

## Server Components and Hybrid Rendering

The line between client and server is blurring. Frameworks like Next.js, Remix, and SvelteKit are pioneering approaches that combine the best of both worlds:

- Server components that render on the server but hydrate on the client
- Streaming SSR for improved performance
- Islands architecture for selective hydration

These approaches aim to deliver the optimal balance between performance, SEO, and interactive experiences.

## AI-Assisted Development

AI is transforming how we write and maintain code:

- Code completion tools like GitHub Copilot are becoming more sophisticated
- Design-to-code tools are improving rapidly
- Testing and debugging are being enhanced by AI suggestions

The role of the frontend developer isn't being replaced but augmented. The focus shifts to higher-level architecture decisions and ensuring the AI-generated code meets quality standards.

## Web Components and Micro-Frontends

As applications grow in complexity, organization becomes key:

- Web Components provide a standardized way to create reusable UI elements
- Micro-frontends allow teams to work independently on different sections of an application
- Design systems are becoming more sophisticated and integral to development workflows

## The Return to Web Fundamentals

After years of complex build tools and frameworks, there's a movement back toward web fundamentals:

- Modern CSS has eliminated many needs for JavaScript solutions
- Browser APIs have become more powerful
- Performance is increasingly recognized as a key feature

## Required Skills for Frontend Developers

To thrive in this evolving landscape, frontend developers should focus on:

1. **Understanding the full stack** - Not just the client side
2. **Performance optimization** - Critical for user experience and business metrics
3. **Accessibility** - No longer optional, but a core requirement
4. **Design systems thinking** - Building cohesive experiences at scale
5. **Testing and quality assurance** - As systems grow more complex, testing becomes more important

## Conclusion

The future of frontend development is exciting and challenging. By embracing both new technologies and fundamental principles, developers can create experiences that are fast, accessible, and delightful for users around the world.`,
  },
  {
    id: "3",
    title: "Understanding React Server Components",
    excerpt: "A deep dive into React Server Components and how they change the way we think about building apps.",
    category: "tech",
    date: "March 1, 2025",
    readTime: "12 min read",
    slug: "react-server-components",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3R8ZW58MHx8MHx8&w=1000&q=80",
    userName: "@inkofbakshi",
    content: `# Understanding React Server Components

React Server Components represent a paradigm shift in how we build React applications. They allow components to render on the server with zero JavaScript sent to the client by default, while maintaining the component model we know and love.

## The Problem Server Components Solve

Traditional client-side React has some inherent challenges:

- Large JavaScript bundle sizes affecting performance
- Waterfall network requests delaying rendering
- Duplicated data fetching logic between server and client
- SEO challenges requiring additional server rendering

Server Components aim to address these issues by fundamentally rethinking the boundary between server and client.

## How Server Components Work

### The Mental Model

With Server Components, we can think of our React tree as having two distinct parts:

1. **Server Components** - Run only on the server, can access server resources directly
2. **Client Components** - Run on both the server (for initial render) and client (for interactivity)

The key insight is that Server Components can:
- Access databases, file systems, and other server resources directly
- Import large dependencies without affecting bundle size
- Generate HTML that's streamed to the client

### Component Types

In a framework that supports Server Components (like Next.js 13+), there are three types of components:

1. **Server Components** (default) - Cannot use hooks or browser APIs
2. **Client Components** (marked with 'use client' directive) - Can use hooks and browser APIs
3. **Shared Components** - Can be used in both contexts if they don't use server-only or client-only features

## Practical Applications

Server Components excel at:

- Data fetching - Connect directly to your database or APIs
- Access to server-only resources - File system, environment variables
- Large dependencies - Use heavy libraries without affecting client bundle
- Initial rendering - Generate HTML quickly for fast perceived performance

Client Components are still needed for:

- Interactivity - Any component using event handlers
- Browser APIs - Components that need access to cookies, localStorage, etc.
- React lifecycle hooks - useState, useEffect, etc.

## Best Practices

1. Make Server Components the default choice
2. Move to Client Components only when needed for interactivity
3. Keep Client Components as leaf nodes when possible
4. Pass data down from Server Components to Client Components

## Conclusion

React Server Components represent an exciting evolution in React's architecture. By allowing developers to more explicitly choose where code runs, they enable better performance and developer experience. While the mental model takes some adjustment, the benefits for large applications are significant.`,
  },
  {
    id: "4",
    title: "The State of AI in Web Development",
    excerpt: "How artificial intelligence is transforming the way we build and interact with web applications.",
    category: "tech",
    date: "February 18, 2025",
    readTime: "14 min read",
    slug: "ai-in-web-development",
    image: "https://images.unsplash.com/photo-1633249658235-d591f2f2acba?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "@inkofbakshi",
    content: `# The State of AI in Web Development

Artificial Intelligence is rapidly transforming web development, changing both how we build websites and what those websites can do. From AI-powered development tools to intelligent user experiences, the integration of AI into web development is accelerating.

## AI-Assisted Development

### Code Generation and Completion

Tools like GitHub Copilot, Amazon CodeWhisperer, and Tabnine are changing how developers write code:

- Autocompletion based on context and patterns
- Generation of boilerplate code
- Translation between programming languages
- Bug detection and suggested fixes

Studies suggest these tools can increase developer productivity by 30-40% once developers become proficient with them.

### Design to Code

The gap between design and implementation is narrowing:

- Tools like Builder.io and Anima can convert designs to production-ready code
- UI frameworks are incorporating AI design systems
- Design tools like Figma are integrating with AI code generation

### Testing and QA

AI is making testing more efficient:

- Automatic generation of test cases based on code changes
- Visual regression testing that understands context
- Performance optimization suggestions
- Accessibility audits and fixes

## AI-Enhanced User Experiences

### Personalization

Websites are becoming more tailored to individual users:

- Content recommendations based on user behavior
- Dynamic pricing strategies
- Personalized UI/UX adjustments
- Customized search results

### Conversational Interfaces

Chatbots and virtual assistants are evolving rapidly:

- More natural language understanding
- Better context awareness
- Integration with backend systems
- Voice interfaces becoming more common

### Content Generation

AI is helping create and optimize content:

- Automated blog post generation
- SEO optimization suggestions
- Image and video creation
- Translation and localization

## Challenges and Ethical Considerations

As AI becomes more integrated into web development, several challenges emerge:

- **Data privacy concerns** - AI systems often require significant user data
- **Accessibility** - Ensuring AI-enhanced experiences work for all users
- **Bias and fairness** - Addressing inherent biases in training data
- **Performance costs** - Managing the computational overhead of AI features
- **Developer deskilling** - Balancing automation with maintaining essential skills

## The Future Landscape

Looking ahead, we can expect:

1. More sophisticated AI-powered development environments
2. Increased focus on edge computing for AI processing
3. Better integration between AI tools and existing workflows
4. More regulatory frameworks addressing AI use in web applications

## Conclusion

AI is not replacing web developers but transforming their role. The most successful developers will be those who learn to effectively collaborate with AI tools, focusing on higher-level architecture, creativity, and human-centered design while leveraging AI for repetitive tasks and optimization.`,
  },
  {
    id: "5",
    title: "Performance Optimization Techniques",
    excerpt: "Advanced strategies for improving the speed and responsiveness of modern web applications.",
    category: "tech",
    date: "February 10, 2025",
    readTime: "16 min read",
    slug: "performance-optimization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZm9ybWFuY2V8ZW58MHx8MHx8&w=1000&q=80",
    userName: "@inkofbakshi",
    content: `# Performance Optimization Techniques for Modern Web Applications

In today's web ecosystem, performance is not just a technical concern but a business-critical feature. Studies consistently show that faster websites have higher conversion rates, lower bounce rates, and better user engagement. This article explores advanced techniques for optimizing web application performance.

## Core Web Vitals and Performance Metrics

Before optimizing, it's essential to understand what to measure:

### Key Metrics
- **Largest Contentful Paint (LCP)** - Measures loading performance (target: < 2.5s)
- **First Input Delay (FID)** - Measures interactivity (target: < 100ms)
- **Cumulative Layout Shift (CLS)** - Measures visual stability (target: < 0.1)
- **Time to Interactive (TTI)** - Measures when the page becomes fully interactive
- **Total Blocking Time (TBT)** - Measures main thread blocking time

### Measurement Tools
- Lighthouse in Chrome DevTools
- WebPageTest
- Chrome User Experience Report (CrUX)
- Performance API in the browser

## JavaScript Optimization

JavaScript is often the largest contributor to performance issues:

### Code Splitting
Break your JavaScript bundle into smaller chunks that can be loaded on demand:

\`\`\`javascript
// Using dynamic imports
const Component = React.lazy(() => import('./Component'));
\`\`\`

### Tree Shaking
Eliminate dead code through proper module imports:

\`\`\`javascript
// Import only what you need
import { Button } from 'ui-library';
// Instead of
// import UILibrary from 'ui-library';
\`\`\`

### Web Workers
Move heavy computations off the main thread:

\`\`\`javascript
// Create a worker for intensive tasks
const worker = new Worker('worker.js');
worker.postMessage({ data: complexData });
worker.onmessage = (e) => {
  const result = e.data;
  updateUI(result);
};
\`\`\`

## Rendering Optimization

### Component Optimization
- Use memoization (\`React.memo\`, \`useMemo\`, \`useCallback\`)
- Implement virtualization for long lists (react-window, react-virtualized)
- Avoid unnecessary re-renders with proper state management

### CSS Performance
- Use CSS containment to isolate parts of the page
- Reduce paint complexity and layout thrashing
- Prefer modern CSS features over JavaScript animations

## Asset Optimization

### Images
- Use modern formats (WebP, AVIF)
- Implement responsive images
- Apply proper compression
- Consider lazy loading

\`\`\`html
<img 
  src="small.jpg"
  srcset="medium.jpg 1000w, large.jpg 2000w"
  sizes="(max-width: 500px) 100vw, 50vw"
  loading="lazy"
  alt="Description"
/>
\`\`\`

### Fonts
- Use \`font-display: swap\` to prevent invisible text
- Consider variable fonts for multiple weights
- Preload critical fonts

## Network Optimization

### Caching Strategies
- Implement effective HTTP caching
- Use service workers for offline support and faster repeat visits
- Consider cache-first strategies for static assets

### Prefetching and Preloading
- Preload critical resources
- Prefetch likely next-page resources
- Use dns-prefetch for external domains

\`\`\`html
<link rel="preload" href="critical.css" as="style">
<link rel="prefetch" href="next-page.html">
<link rel="dns-prefetch" href="https://api.example.com">
\`\`\`

## Server-Side Optimizations

### Edge Computing
- Deploy static assets to CDNs
- Use edge functions for dynamic content that needs to be close to users
- Consider edge caching strategies

### API Performance
- Implement efficient data fetching patterns (GraphQL, BFF)
- Use HTTP/2 or HTTP/3 for multiplexing
- Consider server-side rendering or static generation for content-heavy pages

## Monitoring and Continuous Improvement

Performance optimization is not a one-time task but an ongoing process:

- Set up real user monitoring (RUM)
- Establish performance budgets
- Implement performance regression testing in CI/CD
- Create a performance culture within development teams

## Conclusion

Performance optimization requires a holistic approach that touches every layer of application development. By focusing on measurable metrics and implementing these advanced techniques, you can create web applications that not only meet but exceed user expectations for speed and responsiveness.`,
  },
  {
    id: "6",
    title: "Building Accessible Web Interfaces",
    excerpt: "A comprehensive guide to creating inclusive web experiences that work for everyone.",
    category: "tech",
    date: "February 1, 2025",
    readTime: "13 min read",
    slug: "accessible-interfaces",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWNjZXNzaWJpbGl0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
    userName: "@inkofbakshi",
    content: `# Building Accessible Web Interfaces

Web accessibility is the practice of ensuring websites and web applications are usable by everyone, including people with disabilities. It's not just the right thing to do—it's often a legal requirement and makes good business sense by expanding your potential audience.

## Understanding Accessibility Standards

### WCAG Guidelines

The Web Content Accessibility Guidelines (WCAG) provide a framework for accessibility with four key principles:

1. **Perceivable** - Information must be presentable in ways all users can perceive
2. **Operable** - Interface components must be operable by all users
3. **Understandable** - Information and operation must be understandable
4. **Robust** - Content must be robust enough to work with current and future technologies

Each principle has specific guidelines and success criteria at three levels: A (minimum), AA (standard), and AAA (enhanced).

## Semantic HTML: The Foundation of Accessibility

### Proper Document Structure

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Accessible Page</title>
  <meta name="description" content="Description of the page">
</head>
<body>
  <header>
    <h1>Main Heading</h1>
    <nav>
      <!-- Navigation -->
    </nav>
  </header>
  <main>
    <section>
      <h2>Section Heading</h2>
      <p>Content...</p>
    </section>
    <article>
      <!-- Article content -->
    </article>
  </main>
  <footer>
    <!-- Footer content -->
  </footer>
</body>
</html>
\`\`\`

### Using the Right Elements

- Use buttons (\`<button>\`) for interactive elements that don't navigate
- Use anchors (\`<a>\`) for navigation
- Use proper form elements with labels
- Use tables for tabular data with proper headers
- Use lists (\`<ul>\`, \`<ol>\`) for groups of related items

## Keyboard Accessibility

Many users navigate using only a keyboard, so ensure:

- All interactive elements are keyboard focusable
- Focus order is logical and follows visual order
- Focus indicators are clearly visible
- No keyboard traps exist
- Provide skip links for navigation

\`\`\`html
<!-- Skip link example -->
<a href="#main-content" class="skip-link">Skip to main content</a>
<!-- Later in the document -->
<main id="main-content">
  <!-- Main content -->
</main>
\`\`\`

## ARIA (Accessible Rich Internet Applications)

ARIA attributes enhance accessibility when HTML alone isn't sufficient:

### ARIA Principles

1. Use native HTML elements whenever possible
2. Do not change native semantics unless absolutely necessary
3. Make all interactive elements accessible via keyboard
4. Do not use role="presentation" or aria-hidden="true" on focusable elements
5. All interactive elements should have an accessible name

### Common ARIA Patterns

\`\`\`html
<!-- Tabs -->
<div role="tablist">
  <button id="tab1" role="tab" aria-selected="true" aria-controls="panel1">Tab 1</button>
  <button id="tab2" role="tab" aria-selected="false" aria-controls="panel2">Tab 2</button>
</div>
<div id="panel1" role="tabpanel" aria-labelledby="tab1">Panel 1 content...</div>
<div id="panel2" role="tabpanel" aria-labelledby="tab2" hidden>Panel 2 content...</div>

<!-- Modal dialog -->
<div role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
  <h2 id="dialog-title">Dialog Title</h2>
  <p id="dialog-desc">Dialog description...</p>
  <button>Close</button>
</div>
\`\`\`

## Visual Considerations

### Color and Contrast

- Ensure sufficient color contrast (minimum 4.5:1 for normal text)
- Don't rely solely on color to convey information
- Provide visible focus indicators

### Text and Typography

- Use relative units (em, rem) instead of fixed pixel sizes
- Ensure text can be resized up to 200% without loss of content
- Maintain proper line spacing and paragraph spacing
- Avoid justified text which can create uneven spaces

## Content Considerations

### Alternative Text for Images

\`\`\`html
<!-- Informative image -->
<img src="chart.png" alt="Q1 sales increased by 25% compared to last year">

<!-- Decorative image -->
<img src="decorative-line.png" alt="">

<!-- Complex image with extended description -->
<figure>
  <img src="complex-diagram.png" alt="Diagram of network architecture">
  <figcaption>
    Network diagram showing the relationship between servers, clients, and databases.
    <a href="extended-description.html">View detailed description</a>
  </figcaption>
</figure>
\`\`\`

### Multimedia

- Provide captions for videos
- Provide transcripts for audio content
- Ensure media controls are keyboard accessible
- Don't auto-play content, especially audio

## Testing Accessibility

### Automated Testing

Tools like:
- Axe
- Lighthouse
- WAVE
- Pa11y

Automated tests can catch up to 30% of issues, but manual testing is essential.

### Manual Testing

- Keyboard navigation testing
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Testing with magnification
- Testing with different color contrast settings

## Building Accessibility into Development Workflow

1. Include accessibility requirements in specifications
2. Train developers and designers on accessibility
3. Test early and often
4. Include people with disabilities in user testing
5. Make accessibility part of code reviews
6. Establish accessibility champions within teams

## Conclusion

Building accessible web interfaces requires awareness, knowledge, and commitment from the entire team. While it may require additional effort, especially initially, integrating accessibility into your development process leads to better experiences for all users and often results in more robust, maintainable code.`,
  },
  {
    id: "1",
    title: "The Last Echo",
    excerpt: "A sound engineer discovers a way to record echoes of past events in abandoned buildings.",
    category: "story",
    date: "March 28, 2025",
    readTime: "12 min read",
    slug: "the-last-echo",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJhbmRvbmVkJTIwYnVpbGRpbmd8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "2",
    title: "The Time Collector",
    excerpt: "She collected moments like others collected stamps, carefully preserving them for a future that would never come.",
    category: "story",
    date: "March 18, 2025",
    readTime: "9 min read",
    slug: "time-collector",
    image: "https://images.unsplash.com/photo-1439902315629-cd882022cea0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "The Silent Observatory",
    excerpt: "An abandoned observatory in the mountains holds more than telescopes and star charts.",
    category: "story",
    date: "March 10, 2025",
    readTime: "14 min read",
    slug: "silent-observatory",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVsZXNjb3BlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: "4",
    title: "The Memory Merchant",
    excerpt: "In a world where memories can be bought and sold, one dealer specializes in rare, forgotten moments.",
    category: "story",
    date: "February 25, 2025",
    readTime: "15 min read",
    slug: "memory-merchant",
    image: "https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVtb3J5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: "5",
    title: "The Last Library",
    excerpt: "When digital became the only way to read, one woman kept the last physical library alive in secret.",
    category: "story",
    date: "February 16, 2025",
    readTime: "18 min read",
    slug: "last-library",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: "6",
    title: "Train to Nowhere",
    excerpt: "A mysterious train that appears only at midnight takes passengers to destinations they never expected.",
    category: "story",
    date: "February 8, 2025",
    readTime: "11 min read",
    slug: "train-to-nowhere",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhaW58ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "1",
    title: "Whispers of Autumn",
    excerpt: "The leaves fall in patterns only the wind understands, speaking ancient languages we've forgotten to hear.",
    category: "poetry",
    date: "April 2, 2025",
    readTime: "3 min read",
    slug: "whispers-of-autumn",
    image: "https://images.unsplash.com/photo-1507371341162-763b5e419408?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0dW1uJTIwbGVhdmVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: "2",
    title: "Fragments of Light",
    excerpt: "We are but fragments of light, scattered across the universe, searching for ways to reconnect.",
    category: "poetry",
    date: "March 20, 2025",
    readTime: "4 min read",
    slug: "fragments-of-light",
    image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGlnaHQlMjByYXlzfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: "3",
    title: "Midnight Thoughts",
    excerpt: "The quiet hours after midnight when the world sleeps and thoughts speak loudest.",
    category: "poetry",
    date: "March 15, 2025",
    readTime: "2 min read",
    slug: "midnight-thoughts",
    image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcnJ5JTIwbmlnaHR8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "4",
    title: "Ocean Dreams",
    excerpt: "Waves crash against the shore of my mind, echoes of memories long forgotten.",
    category: "poetry",
    date: "February 28, 2025",
    readTime: "3 min read",
    slug: "ocean-dreams",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlYW58ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: "5",
    title: "Urban Symphony",
    excerpt: "The city's rhythm, a cacophony of lives intertwined yet separate, beats beneath the concrete sky.",
    category: "poetry",
    date: "February 20, 2025",
    readTime: "4 min read",
    slug: "urban-symphony",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: "6",
    title: "Silent Conversations",
    excerpt: "Words unspoken hang between us, heavier than any that might have been said.",
    category: "poetry",
    date: "February 12, 2025",
    readTime: "3 min read",
    slug: "silent-conversations",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2lsaG91ZXR0ZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
];

export default dummyTechBlogs;