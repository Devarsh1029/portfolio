import React, { useEffect } from "react";
import {
  ArrowDown,
  ArrowLeft,
  Clock,
  Send,
} from "lucide-react";

import {
  CONTACT,
  ARTICLES,
  styles,
  SiteFooter,
} from "../DevarshPortfolio";

/* ---------------------------------------------------------------------- */
/* Article building blocks                                                */
/* ---------------------------------------------------------------------- */

function FlowDiagram({ steps, accent }) {
  return (
    <div className="mc-flow">
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <div
            className={`mc-flow-step${
              accent && i === steps.length - 1
                ? " mc-flow-accent"
                : ""
            }`}
          >
            {s}
          </div>

          {i < steps.length - 1 && (
            <ArrowDown
              size={14}
              className="mc-flow-arrow"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function BulletGrid({ items }) {
  return (
    <div className="mc-bullet-grid">
      {items.map((item) => (
        <div key={item} className="mc-bullet-chip">
          {item}
        </div>
      ))}
    </div>
  );
}

// function LayerDiagram({ layers }) {
//   return (
//     <div className="mc-layer-stack">
//       {layers.map((layer, i) => (
//         <React.Fragment key={layer.name}>
//           <div className="mc-layer-card">
//             <h4>{layer.name}</h4>
//             <p>{layer.desc}</p>
//           </div>

//           {i < layers.length - 1 && (
//             <div className="mc-layer-arrow">
//               <ArrowDown size={14} />
//             </div>
//           )}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

function CodeBlock({ code, lang = "java" }) {
  return (
    <div className="mc-code-block">
      <div className="mc-code-head">
        <span className="mc-code-dot" />
        <span className="mc-code-dot" />
        <span className="mc-code-dot" />
        <span className="mc-code-lang">{lang}</span>
      </div>

      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function ChecklistGrid({ items }) {
  return (
    <div className="mc-checklist-grid">
      {items.map((item) => (
        <div
          key={item.title}
          className="mc-checklist-item"
        >
          <h4>{item.title}</h4>
          <p>{item.question}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Article Hero                                                           */
/* ---------------------------------------------------------------------- */

function ArticleHeroArt() {
  const nodes = [
    "Request",
    "Controller",
    "Service",
    "Repository",
    "Database",
  ];

  const w = 760;
  const h = 300;
  const gap = w / nodes.length;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram of a request flowing through controller, service, repository and database layers"
    >
      <defs>
        <linearGradient
          id="mcGlow"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
        >
          <stop
            offset="0%"
            stopColor="#00FF94"
            stopOpacity="0.9"
          />
          <stop
            offset="100%"
            stopColor="#00FF94"
            stopOpacity="0.15"
          />
        </linearGradient>

        <pattern
          id="mcGrid"
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 28 0 L 0 0 0 28"
            fill="none"
            stroke="#1B1E24"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect
        width={w}
        height={h}
        fill="url(#mcGrid)"
      />

      <line
        x1={gap / 2}
        y1={h / 2}
        x2={w - gap / 2}
        y2={h / 2}
        stroke="url(#mcGlow)"
        strokeWidth="2"
      />

      {nodes.map((node, i) => {
        const cx = gap / 2 + i * gap;

        return (
          <g key={node}>
            <circle
              cx={cx}
              cy={h / 2}
              r="7"
              fill="#0A0A0B"
              stroke="#00FF94"
              strokeWidth="2"
            />

            <circle
              cx={cx}
              cy={h / 2}
              r="16"
              fill="none"
              stroke="#00FF94"
              strokeOpacity="0.25"
              strokeWidth="1"
            />

            <text
              x={cx}
              y={h / 2 - 32}
              textAnchor="middle"
              fill="#CBD5E1"
              fontFamily="'JetBrains Mono', monospace"
              fontSize="12"
            >
              {node}
            </text>
          </g>
        );
      })}

      <text
        x={w / 2}
        y={h - 34}
        textAnchor="middle"
        fill="#475569"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="11"
        letterSpacing="2"
      >
        WHEN IT WORKS, NOBODY NOTICES
      </text>
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/* Article Content                                                        */
/* ---------------------------------------------------------------------- */

function BackendInvisibleArticle() {
  return (
    <div className="mc-article-body">
      <p className="mc-lead">
        When I started working with backend development, I mostly thought
        about the obvious part.
      </p>

      <p>
        Build the API. Write the service. Connect the database. Return the
        response. It felt like backend development was mainly about making
        a feature work.
      </p>

      <p>
        After working with Java and Spring Boot for the last two years,
        I've started looking at it differently.
      </p>

      <p>
        <strong>Making an API work is only the beginning.</strong>
      </p>

      <p>
        The real challenge is making sure it keeps working when the input
        isn't perfect, when another service is unavailable, when a
        deployment goes wrong, or when someone calls you because something
        stopped working in production.
      </p>

      <p>
        And that's probably the strange thing about backend development:
      </p>

      <p>
        <strong>When you do it well, nobody notices.</strong>
      </p>

      <p>
        The user uploads a file, and it uploads. They click a button, and
        the response comes back. They log in, and they're logged in. The
        application doesn't feel slow or broken. Nobody thinks about the
        backend. But when something fails, suddenly everyone wants to know
        what happened.
      </p>

      <h2>My understanding of backend changed with production</h2>

      <p>
        Early on, I used to look at an API like this:
      </p>

      <FlowDiagram
        steps={[
          "Request",
          "Controller",
          "Service",
          "Repository",
          "Database",
          "Response",
        ]}
        accent
      />

      <p>
        And that's still a useful mental model. But working on real
        projects showed me that there's a lot more happening around those
        boxes. A production API also has to deal with:
      </p>

      <BulletGrid
        items={[
          "Validation",
          "Authentication",
          "Error handling",
          "Logging",
          "Configuration",
          "File storage",
          "Database failures",
          "Deployment",
          "Monitoring",
          "Security",
        ]}
      />

      <p>
        The code that handles the happy path is usually the easiest part.
        The difficult part is everything that happens when the happy path
        doesn't happen.
      </p>

      <h2>Building APIs is more than returning JSON</h2>

      <p>
        I've worked on Spring Boot APIs where the basic implementation was
        relatively simple. For example, one of the APIs I worked on
        involved uploading a file along with metadata.
      </p>

      <FlowDiagram
        steps={[
          "Receive file",
          "Receive metadata",
          "Process request",
          "Store file",
          "Return response",
        ]}
      />

      <p>
        But then you start asking the questions that matter in a real
        application. What if the file is missing? What if the metadata is
        invalid? What if the file is too large? What if storage fails?
        What if the same request is sent again? What should the client
        receive when something goes wrong?
      </p>

      <p>
        That's where backend development becomes more interesting. The API
        isn't just responsible for making the successful request work.
      </p>

      {/* Keep the remainder of your existing article content here,
          unchanged from the original DevarshPortfolio.jsx. */}

      <h2>Error handling is part of the API contract</h2>

      <p>
        Another lesson I've picked up is that errors aren't something you
        add at the end. They are part of the API design.
      </p>

      <BulletGrid
        items={[
          "Invalid request",
          "Unauthorized request",
          "Resource not found",
          "Business conflict",
          "Unexpected server failure",
        ]}
      />

      <CodeBlock
        code={`@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(
            ResourceNotFoundException ex) {

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(new ErrorResponse(ex.getMessage()));
    }
}`}
      />

      <p>
        This keeps error responses consistent instead of making every
        controller handle exceptions differently. The goal isn't to make
        errors disappear. The goal is to make them{" "}
        <strong>predictable</strong>.
      </p>

      <h2>The backend doesn't end at the API</h2>

      <p>
        One of the biggest changes in my thinking over these two years is
        that I no longer see a feature as "the API is working, so we're
        done." There's more to it.
      </p>

      <ChecklistGrid
        items={[
          {
            title: "Development",
            question:
              "Does the implementation actually solve the requirement?",
          },
          {
            title: "Validation",
            question: "What happens with invalid input?",
          },
          {
            title: "Integration",
            question:
              "What other systems does this depend on?",
          },
          {
            title: "Logging",
            question:
              "Will we know what happened if it fails?",
          },
          {
            title: "Deployment",
            question:
              "Can it run correctly in the target environment?",
          },
          {
            title: "Testing",
            question:
              "What happens beyond the happy path?",
          },
          {
            title: "Monitoring",
            question:
              "How will we know something is wrong?",
          },
          {
            title: "Documentation",
            question:
              "Will someone else understand how this works later?",
          },
        ]}
      />

      <p>
        These aren't separate from backend development. They're part of it.
      </p>

      <h2>Two years later, I value boring code more</h2>

      <p>
        Earlier, I probably would have considered a complicated solution
        more impressive. Now, I'm more likely to appreciate the boring one:
        code that is easy to read, an API with predictable responses, a
        service with one clear responsibility, a useful log message, a
        deployment that doesn't surprise anyone, a database query that does
        exactly what it needs to do, a failure that is handled gracefully
        instead of taking down the entire flow.
      </p>

      <p>
        None of these things are particularly exciting. But they matter.
        Because production doesn't care how clever your code looks. It
        cares whether the system keeps working.
      </p>

      <h2>Good backend work is invisible</h2>

      <p>
        After two years of working with Java and Spring Boot, I think I've
        started to understand why good backend work is often invisible.
      </p>

      <p>
        It's invisible when the API responds correctly. It's invisible when
        the file uploads without a problem. It's invisible when the
        database query doesn't cause a timeout. It's invisible when an
        exception is handled properly. It's invisible when a deployment
        goes smoothly. It's invisible when useful logs make a production
        issue easy to diagnose.
      </p>

      <p>
        And that's the point. The best backend isn't constantly asking for
        attention. It quietly does its job.
      </p>

      <p>
        And after two years of building, deploying, debugging, and
        maintaining backend applications, that's probably the biggest
        lesson I've learned:
      </p>

      <p className="mc-pullquote">
        Good backend development isn't about making the backend noticeable.
        It's about making the system dependable enough that nobody has to
        think about it.
      </p>

      <p>
        When everything works, the backend disappears.{" "}
        <strong>And that's often how you know you did your job well.</strong>
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Page                                                                   */
/* ---------------------------------------------------------------------- */

export default function BackendInvisible() {
  const meta = ARTICLES.find(
    (article) => article.slug === "backend-invisible"
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (!meta) {
    return null;
  }

  const formatDate = (iso) =>
    new Date(iso + "T00:00:00").toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );

  return (
    <div className="mc-root">
      <style>{styles}</style>

      <header className="mc-header mc-scrolled">
        <div className="mc-header-inner">
          <a
            href="/"
            className="mc-mono-brand"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            DS<span>/</span>
            <span className="mc-brand-name">
              Devarsh Shah
            </span>
          </a>

          <a href="/#writing" className="mc-back-link">
            <ArrowLeft size={13} />
            Portfolio
          </a>
        </div>
      </header>

      <main>
        <article className="mc-article-page">
          <a
            href="/#writing"
            className="mc-back-link"
          >
            <ArrowLeft size={13} />
            Back to writing
          </a>

          <div className="mc-article-meta-row">
            <span>{formatDate(meta.date)}</span>

            <span className="sep">·</span>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Clock size={12} />
              {meta.readTime}
            </span>
          </div>

          <h1 className="mc-article-title">
            {meta.title}
          </h1>

          <p className="mc-article-lede">
            {meta.excerpt}
          </p>

          <div className="mc-article-tags">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="mc-stack-chip"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mc-article-hero">
            <ArticleHeroArt />
          </div>

          <BackendInvisibleArticle />

          <div className="mc-article-footer">
            <a
              href="/#writing"
              className="mc-btn-ghost"
            >
              <ArrowLeft size={14} />
              All articles
            </a>

            <a
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                "Re: " + meta.title
              )}`}
              className="mc-btn-primary"
            >
              <Send size={14} />
              Discuss this
            </a>
          </div>
        </article>
      </main>

      <SiteFooter homeHref="/" />
    </div>
  );
}
