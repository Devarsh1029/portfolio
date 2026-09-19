import React, { useEffect } from "react";
import { ArrowLeft, Clock, Send } from "lucide-react";
import { CONTACT, ARTICLES, styles, SiteFooter } from "../DevarshPortfolio";

function CodeBlock({ code, lang = "text" }) {
  return (
    <div className="mc-code-block">
      <div className="mc-code-head">
        <span className="mc-code-dot" />
        <span className="mc-code-dot" />
        <span className="mc-code-dot" />
        <span className="mc-code-lang">{lang}</span>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  );
}

function ArticleHeroArt() {
  return (
    <svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg"
      role="img" aria-label="JWT and OAuth2 authentication flow">
      <defs>
        <linearGradient id="jwtGlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00FF94" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00FF94" stopOpacity="0.15" />
        </linearGradient>
        <pattern id="jwtGrid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#1B1E24" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="760" height="300" fill="url(#jwtGrid)" />
      <line x1="80" y1="150" x2="680" y2="150" stroke="url(#jwtGlow)" strokeWidth="2" />

      {[
        ["User", 80],
        ["Auth Server", 230],
        ["JWT", 380],
        ["Gateway", 530],
        ["Resource", 680],
      ].map(([label, x]) => (
        <g key={label}>
          <circle cx={x} cy="150" r="7" fill="#0A0A0B" stroke="#00FF94" strokeWidth="2" />
          <circle cx={x} cy="150" r="16" fill="none" stroke="#00FF94" strokeOpacity="0.25" strokeWidth="1" />
          <text x={x} y="118" textAnchor="middle" fill="#CBD5E1"
            fontFamily="'JetBrains Mono', monospace" fontSize="12">
            {label}
          </text>
        </g>
      ))}

      <text x="380" y="266" textAnchor="middle" fill="#475569"
        fontFamily="'JetBrains Mono', monospace" fontSize="11" letterSpacing="2">
        TRUST MUST BE VERIFIED
      </text>
    </svg>
  );
}

function JwtArticle() {
  return (
    <div className="mc-article-body">
      <h2>JWT and OAuth2: Lessons from a Microservices Internship</h2>

      <p className="mc-article-subtitle">Authentication done early is authentication done right. What working with Spring Boot microservices taught me about tokens, sessions, and trust boundaries.</p>

      <p>When I first came across JWT and OAuth2, I mostly thought of them as authentication technologies.</p>

      <p>JWT was a token.</p>

      <p>OAuth2 was an authorization framework.</p>

      <p>Spring Security handled the difficult parts.</p>

      <p>At least, that's how it looked from the outside.</p>

      <p>Once I started working with Spring Boot and microservices, I realized authentication isn't simply about answering:</p>

      <blockquote>"Is this user logged in?"</blockquote>

      <p>It's about answering a much more important question:</p>

      <blockquote><strong>"Why should this service trust this request?"</strong></blockquote>

      <p>That difference changed how I think about authentication.</p>

      <p>---</p>

      <h2>Authentication isn't just a login screen</h2>

      <p>From a user's perspective, authentication looks simple.</p>

      <p>Enter username.</p>

      <p>Enter password.</p>

      <p>Click Login.</p>

      <p>You're in.</p>

      <p>But behind that screen, several things need to happen.</p>

      <CodeBlock lang="text" code={`User
 ↓
Login Request
 ↓
Authentication
 ↓
Token Issued
 ↓
Request with Token
 ↓
Token Validation
 ↓
Authorized Resource
`} />

      <p>In a traditional application, the server might maintain a session and remember that the user has already authenticated.</p>

      <p>Microservices make the problem more interesting.</p>

      <p>You might have:</p>

      <CodeBlock lang="text" code={`Frontend
   ↓
API Gateway
   ↓
Service A
   ↓
Service B
   ↓
Service C
`} />

      <p>Now the question becomes:</p>

      <p><strong>How does Service B know that the request originally came from an authenticated user?</strong></p>

      <p>And more importantly:</p>

      <p><strong>Should Service B simply trust Service A?</strong></p>

      <p>That's where understanding tokens and trust boundaries becomes important.</p>

      <p>---</p>

      <h2>JWT looked simple until I had to reason about it</h2>

      <p>A JSON Web Token can look deceptively simple.</p>

      <p>You get something like:</p>

      <CodeBlock lang="text" code={`xxxxx.yyyyy.zzzzz
`} />

      <p>Three parts:</p>

      <CodeBlock lang="text" code={`Header.Payload.Signature
`} />

      <p>The payload can contain information such as:</p>

      <CodeBlock lang="json" code={`{
  "sub": "user123",
  "role": "USER",
  "iss": "authentication-server",
  "exp": 1777392000
}
`} />

      <p>At first, it is tempting to think:</p>

      <blockquote>"The token contains the user's information, so the backend can just read it."</blockquote>

      <p>But that's not quite the right mental model.</p>

      <p>A JWT isn't trustworthy simply because it contains a claim saying:</p>

      <CodeBlock lang="text" code={`role = ADMIN
`} />

      <p>The important question is:</p>

      <p><strong>Who issued the token, and can we verify that it hasn't been modified?</strong></p>

      <p>That's where the signature matters.</p>

      <p>The token isn't trusted because it <em>looks</em> correct.</p>

      <p>It's trusted because the receiving system can verify its authenticity according to the configured signing and issuer rules.</p>

      <p>That distinction is important.</p>

      <p>---</p>

      <h2>A JWT isn't a session</h2>

      <p>One of the first conceptual differences I had to understand was the difference between a traditional server-side session and a JWT-based approach.</p>

      <p>With a session-based system, the server can maintain something like:</p>

      <CodeBlock lang="text" code={`Session ID
    ↓
Server-side session
    ↓
User information
`} />

      <p>The client essentially carries an identifier.</p>

      <p>With a JWT:</p>

      <CodeBlock lang="text" code={`Client
   ↓
JWT
   ↓
Service validates token
   ↓
Request continues
`} />

      <p>The token carries claims that can be validated by the receiving service.</p>

      <p>This can be particularly useful in distributed systems because services don't necessarily need to maintain the same centralized session state for every request.</p>

      <p>But that doesn't mean JWT automatically makes an architecture better.</p>

      <p>It simply changes where certain responsibilities live.</p>

      <p>---</p>

      <h2>OAuth2 taught me that authentication and authorization aren't the same thing</h2>

      <p>This was probably one of the most important distinctions for me.</p>

      <p>Authentication asks:</p>

      <blockquote><strong>Who are you?</strong></blockquote>

      <p>Authorization asks:</p>

      <blockquote><strong>What are you allowed to do?</strong></blockquote>

      <p>Imagine a user successfully authenticates.</p>

      <p>That doesn't automatically mean they should be able to access every endpoint.</p>

      <p>For example:</p>

      <CodeBlock lang="text" code={`Authenticated user
       ↓
Can access profile
       ↓
Can view orders
       ↓
Cannot access admin configuration
`} />

      <p>OAuth2 helped me understand this separation more clearly.</p>

      <p>Instead of thinking about authentication as simply:</p>

      <CodeBlock lang="text" code={`Login = Access to everything
`} />

      <p>you start thinking in terms of:</p>

      <CodeBlock lang="text" code={`Identity
   ↓
Token
   ↓
Scopes / Roles / Authorities
   ↓
Allowed resources
`} />

      <p>That distinction becomes increasingly important as applications grow.</p>

      <p>---</p>

      <h2>Spring Security makes the hard parts easier — but not automatic</h2>

      <p>Spring Boot and Spring Security provide a lot of infrastructure for implementing authentication and authorization.</p>

      <p>That is incredibly useful.</p>

      <p>But configuration isn't the same as understanding.</p>

      <p>You can configure security and still not fully understand what your application is trusting.</p>

      <p>For example, a resource server might validate:</p>

      <p>- token signature</p>

      <p>- issuer</p>

      <p>- expiration</p>

      <p>- claims</p>

      <p>- authorities</p>

      <p>The important part is understanding <strong>why each of those checks exists</strong>.</p>

      <p>A token that has expired shouldn't be accepted.</p>

      <p>A token issued by an unexpected authority shouldn't automatically be trusted.</p>

      <p>A valid token doesn't necessarily mean the user has permission to perform every operation.</p>

      <p>Security configuration isn't just boilerplate.</p>

      <p>It's defining the rules of trust.</p>

      <p>---</p>

      <h2>The trust boundary matters</h2>

      <p>Microservices introduced another concept that became much more interesting once I started working with them:</p>

      <p><strong>Trust boundaries.</strong></p>

      <p>Imagine:</p>

      <CodeBlock lang="text" code={`Internet
   ↓
API Gateway
   ↓
Service A
   ↓
Service B
`} />

      <p>It's easy to assume:</p>

      <blockquote>"Service A already authenticated the user, so Service B can trust it."</blockquote>

      <p>But that's an architectural decision, not a universal rule.</p>

      <p>Every service needs to understand what it is actually trusting.</p>

      <p>Is it trusting:</p>

      <CodeBlock lang="text" code={`The original user's token?
`} />

      <p>Or:</p>

      <CodeBlock lang="text" code={`The service making the request?
`} />

      <p>Or both?</p>

      <p>That distinction matters.</p>

      <p>Because once you have multiple services, authentication isn't just a frontend concern anymore.</p>

      <p>Each service becomes part of the security model.</p>

      <p>---</p>

      <h2>Tokens also have a lifetime</h2>

      <p>Another thing that becomes obvious when working with tokens is that they shouldn't live forever.</p>

      <p>A token normally has an expiration.</p>

      <p>Conceptually:</p>

      <CodeBlock lang="text" code={`Token issued
      ↓
Valid
      ↓
Valid
      ↓
Valid
      ↓
Expired
`} />

      <p>That expiration is important.</p>

      <p>If a token is compromised, a short-lived access token limits the window in which it can be used.</p>

      <p>This also introduces another concept:</p>

      <p><strong>Refresh tokens.</strong></p>

      <p>The general idea is:</p>

      <CodeBlock lang="text" code={`Access Token
Short-lived
     ↓
Expires

Refresh Token
Longer-lived
     ↓
Used to obtain another access token
`} />

      <p>This is where authentication starts becoming less about simply "getting a token" and more about managing the lifecycle of credentials.</p>

      <p>---</p>

      <h2>The client shouldn't decide what the user can do</h2>

      <p>One security lesson that stuck with me is that frontend behavior should never be the final authority for authorization.</p>

      <p>For example, hiding an Admin button in the UI doesn't make someone non-admin.</p>

      <p>And showing the button doesn't make someone authorized.</p>

      <p>The backend must enforce authorization.</p>

      <CodeBlock lang="text" code={`Frontend
   ↓
"Can I show this button?"

Backend
   ↓
"Is this request actually allowed?"
`} />

      <p>The second check is the one that matters.</p>

      <p>If an endpoint performs an administrative operation, the server needs to verify the appropriate authority regardless of what the frontend displays.</p>

      <p><strong>Never confuse UI restrictions with security controls.</strong></p>

      <p>---</p>

      <h2>Authentication should be designed early</h2>

      <p>One mistake that can become expensive later is treating authentication as something that can simply be added after the application is built.</p>

      <p>It's tempting to think:</p>

      <CodeBlock lang="text" code={`Build application
       ↓
Finish APIs
       ↓
Add security
`} />

      <p>But security affects API design.</p>

      <p>It affects:</p>

      <p>- endpoint structure</p>

      <p>- request flow</p>

      <p>- user identity</p>

      <p>- roles and authorities</p>

      <p>- service-to-service communication</p>

      <p>- error handling</p>

      <p>- token propagation</p>

      <p>- logging</p>

      <p>- deployment configuration</p>

      <p>So I've come to prefer thinking about authentication much earlier.</p>

      <p>Something more like:</p>

      <CodeBlock lang="text" code={`Requirement
   ↓
API design
   ↓
Authentication model
   ↓
Authorization rules
   ↓
Implementation
`} />

      <p>Security becomes part of the architecture rather than a final layer pasted on top.</p>

      <p>---</p>

      <h2>Debugging authentication is its own experience</h2>

      <p>Authentication bugs can be particularly frustrating.</p>

      <p>The API might return:</p>

      <CodeBlock lang="text" code={`401 Unauthorized
`} />

      <p>or:</p>

      <CodeBlock lang="text" code={`403 Forbidden
`} />

      <p>And those two responses can mean very different things.</p>

      <p>A simplified way I think about them is:</p>

      <CodeBlock lang="text" code={`401
→ "I don't accept your authentication."

403
→ "I know who you are, but you're not allowed to do this."
`} />

      <p>Then you have to start tracing the request.</p>

      <p>Did the client send the token?</p>

      <p>Was the token expired?</p>

      <p>Was the issuer correct?</p>

      <p>Was the signature valid?</p>

      <p>Were the expected claims present?</p>

      <p>Were authorities mapped correctly?</p>

      <p>Does the endpoint require a particular role or scope?</p>

      <p>Was the request even reaching the service you expected?</p>

      <p>That's when authentication stops being theoretical.</p>

      <p>You have to follow the request through the system.</p>

      <p>---</p>

      <h2>Logging security issues requires restraint</h2>

      <p>Authentication is also an area where logging can easily go wrong.</p>

      <p>When debugging, it can be tempting to log the entire Authorization header.</p>

      <p>That's a terrible trade-off.</p>

      <p>The very credential you're trying to debug could end up in your logs.</p>

      <p>Instead, logs should provide useful diagnostic context without exposing secrets.</p>

      <p>For example, knowing that a request failed token validation is useful.</p>

      <p>Printing the complete access token usually isn't.</p>

      <p>This is one of those lessons that isn't necessarily obvious when you're first learning authentication:</p>

      <p><strong>Debugging information still needs security boundaries.</strong></p>

      <p>---</p>

      <h2>Security isn't just about JWT</h2>

      <p>Working with JWT and OAuth2 also changed how I think about security generally.</p>

      <p>It's easy to focus on the technology:</p>

      <blockquote>JWT.</blockquote>

      <blockquote>OAuth2.</blockquote>

      <blockquote>Spring Security.</blockquote>

      <p>But the technology is only part of the problem.</p>

      <p>You also need to think about:</p>

      <p>- where credentials are issued</p>

      <p>- who validates them</p>

      <p>- how long they remain valid</p>

      <p>- what permissions they represent</p>

      <p>- how services communicate</p>

      <p>- what happens when credentials expire</p>

      <p>- what gets logged</p>

      <p>- what happens when a token is compromised</p>

      <p>A perfectly implemented JWT mechanism can still be part of a poorly designed security architecture.</p>

      <p>The protocol doesn't make the decisions for you.</p>

      <p><strong>You still have to design the trust model.</strong></p>

      <p>---</p>

      <h2>What I would do differently now</h2>

      <p>If I were starting another Spring Boot microservice today, I would ask the security questions much earlier.</p>

      <p>Before writing all the endpoints, I'd want to know:</p>

      <p><strong>Who authenticates the user?</strong></p>

      <p><strong>Who issues the token?</strong></p>

      <p><strong>Who validates it?</strong></p>

      <p><strong>What does the token actually prove?</strong></p>

      <p><strong>Which services need to trust it?</strong></p>

      <p><strong>Which endpoints require which authorities?</strong></p>

      <p><strong>How long should credentials live?</strong></p>

      <p><strong>What happens when they expire?</strong></p>

      <p><strong>What information is safe to put into logs?</strong></p>

      <p>Those questions don't make the application slower to build.</p>

      <p>They prevent you from building something that becomes difficult to secure later.</p>

      <p>---</p>

      <h2>What two years of Java taught me about security</h2>

      <p>I don't think I came away from working with JWT, OAuth2 and Spring Security thinking:</p>

      <blockquote>"Now I know everything about authentication."</blockquote>

      <p>Quite the opposite.</p>

      <p>I learned that authentication is deeper than configuring a security filter chain.</p>

      <p>The important part isn't memorizing annotations or configuration properties.</p>

      <p>It's understanding the flow:</p>

      <CodeBlock lang="text" code={`Who are you?
      ↓
How do you prove it?
      ↓
Who issued that proof?
      ↓
Can I verify it?
      ↓
What are you allowed to access?
      ↓
What happens when that proof expires?
`} />

      <p>Once I started thinking about security that way, JWT and OAuth2 made much more sense.</p>

      <p>---</p>

      <h2>Authentication done early is authentication done right</h2>

      <p>The biggest lesson I took away from working with Spring Boot microservices is that security shouldn't be something we remember after the API is finished.</p>

      <p>It should be part of the design from the beginning.</p>

      <p>Because in a microservice architecture, you're not just protecting endpoints.</p>

      <p>You're defining <strong>who is allowed to trust whom</strong>.</p>

      <p>JWT gives you a way to represent claims.</p>

      <p>OAuth2 gives you a framework for delegated authorization.</p>

      <p>Spring Security gives you the tools to implement many of these concepts.</p>

      <p>But the architecture still depends on the developer making the right decisions.</p>

      <p>And that's probably what changed the most for me over the last two years.</p>

      <p>I started by thinking:</p>

      <blockquote><strong>"How do I authenticate this request?"</strong></blockquote>

      <p>Now I think about something broader:</p>

      <blockquote><strong>"Why should this service trust this request, and exactly what should that trust allow it to do?"</strong></blockquote>

      <p>That's where authentication becomes more than a login mechanism.</p>

      <p><strong>It becomes part of the architecture.</strong></p>
    </div>
  );
}

export default function JwtOauth2Lessons() {
  const meta = ARTICLES.find(
    (article) => article.slug === "jwt-oauth2-lessons"
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (!meta) return null;

  const formatDate = (iso) =>
    new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="mc-root">
      <style>{styles}</style>

      <header className="mc-header mc-scrolled">
        <div className="mc-header-inner">
          <a href="/" className="mc-mono-brand"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
            DS<span>/</span>
            <span className="mc-brand-name">Devarsh Shah</span>
          </a>

          <a href="/#writing" className="mc-back-link">
            <ArrowLeft size={13} /> Portfolio
          </a>
        </div>
      </header>

      <main>
        <article className="mc-article-page">
          <a href="/#writing" className="mc-back-link">
            <ArrowLeft size={13} /> Back to writing
          </a>

          <div className="mc-article-meta-row">
            <span>{formatDate(meta.date)}</span>
            <span className="sep">·</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              <Clock size={12} /> {meta.readTime}
            </span>
          </div>

          <h1 className="mc-article-title">{meta.title}</h1>
          <p className="mc-article-lede">{meta.excerpt}</p>

          <div className="mc-article-tags">
            {meta.tags.map((tag) => (
              <span key={tag} className="mc-stack-chip">{tag}</span>
            ))}
          </div>

          <div className="mc-article-hero">
            <ArticleHeroArt />
          </div>

          <JwtArticle />

          <div className="mc-article-footer">
            <a href="/#writing" className="mc-btn-ghost">
              <ArrowLeft size={14} /> All articles
            </a>

            <a
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Re: " + meta.title)}`}
              className="mc-btn-primary"
            >
              <Send size={14} /> Discuss this
            </a>
          </div>
        </article>
      </main>

      <SiteFooter homeHref="/" />
    </div>
  );
}
