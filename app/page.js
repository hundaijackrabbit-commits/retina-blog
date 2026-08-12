import Link from 'next/link';
import Image from 'next/image';
import ArticleCard from '../components/ArticleCard';
import EditorialImage from '../components/EditorialImage';
import { articles, topics } from '../lib/content';

export default function Home() {
  const lead = articles[0];
  const frontierArticles = articles.slice(1, 5);
  const researchArticles = articles.slice(4, 8);
  const innovationArticle = articles.find(a => a.tag === 'INNOVATION SPOTLIGHT') || articles[4];
  const industryArticles = articles.filter(a => a.category === 'Industry').slice(0, 3);
  
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">RETINAL SCIENCE · TECHNOLOGY · CARE</div>
          <h1>See What's <em>Next.</em></h1>
          <p>The technologies, research and ideas shaping the future of retinal care.</p>
          <div className="hero-actions">
            <Link className="primary" href={`/article/${lead.slug}`}>
              Explore the lead story →
            </Link>
            <Link className="secondary" href="/#latest">
              Browse latest
            </Link>
          </div>
        </div>
        <div className="hero-art">
          <EditorialImage
            src="/images/retina/healthy-fundus.webp"
            alt="Fundus photograph showing healthy retinal anatomy with optic disc and vascular network"
            width={800}
            height={800}
            priority={true}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="hero-caption">
            <span>VISUAL FIELD / 01</span>
            <b>Retina as interface</b>
          </div>
        </div>
      </section>

      {/* Lead Story */}
      <section className="lead-section">
        <div className="section-kicker"><span>01</span> LEAD STORY</div>
        <ArticleCard article={lead} large />
      </section>

      {/* The Frontier */}
      <section className="frontier">
        <div className="section-heading">
          <div>
            <div className="section-kicker"><span>02</span> THE FRONTIER</div>
            <h2>What's moving now.</h2>
          </div>
          <p>Signals worth following across AI, imaging and translational research.</p>
        </div>
        <div className="frontier-grid">
          {frontierArticles.map((a, i) => (
            <Link key={a.slug} href={`/article/${a.slug}`} className="frontier-item">
              <span>0{i + 1}</span>
              <div className="eyebrow">{a.category}</div>
              <h3>{a.title}</h3>
              <p>{a.dek}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Innovation Spotlight */}
      <section className="innovation-spotlight">
        <div className="section-heading">
          <div>
            <div className="section-kicker"><span>03</span> INNOVATION SPOTLIGHT</div>
            <h2>Engineering better vision.</h2>
          </div>
          <p>The technologies expanding what we can see and measure in the retina.</p>
        </div>
        <div className="innovation-card">
          <div className="innovation-card-visual">
            <EditorialImage
              src="/images/oct/oct-retina-cross-section-color.webp"
              alt="OCT cross-sectional image showing detailed retinal layers in color"
              width={1200}
              height={800}
              sizes="(max-width: 900px) 100vw, 60vw"
            />
          </div>
          <div className="innovation-card-copy">
            <div className="eyebrow">{innovationArticle.category}</div>
            <h3>{innovationArticle.title}</h3>
            <p>{innovationArticle.dek}</p>
            <div className="meta">{innovationArticle.read} · {innovationArticle.evidence}</div>
          </div>
        </div>
      </section>

      {/* Research / Decoded */}
      <section id="latest" className="latest">
        <div className="section-heading">
          <div>
            <div className="section-kicker"><span>04</span> RESEARCH / DECODED</div>
            <h2>Evidence, explained.</h2>
          </div>
          <p>Clear reporting built around evidence, limitations and what comes next.</p>
        </div>
        <div className="cards-grid">
          {researchArticles.map(a => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* Explore Topics */}
      <section className="topics">
        <div className="section-kicker"><span>05</span> EXPLORE</div>
        <div className="topic-grid">
          {topics.map((t, i) => (
            <Link key={t.slug} href={`/topic/${t.slug}`}>
              <span>0{i + 1}</span>
              <h3>{t.name}</h3>
              <p>{t.dek}</p>
              <b>Explore {t.name} →</b>
            </Link>
          ))}
        </div>
      </section>

      {/* Industry Watch */}
      {industryArticles.length > 0 && (
        <section className="latest industry-watch-home">
          <div className="section-heading">
            <div>
              <div className="section-kicker"><span>06</span> INDUSTRY WATCH</div>
              <h2>Where science becomes a market.</h2>
            </div>
            <p>Regulation, platforms, trials and business-model shifts that could change how retinal care is delivered.</p>
          </div>
          <div className="cards-grid">
            {industryArticles.map(a => <ArticleCard key={a.slug} article={a} />)}
          </div>
          <div className="section-action"><Link href="/topic/industry">Explore Industry →</Link></div>
        </section>
      )}

      {/* The Retina as a Window */}
      <section className="window">
        <div>
          <div className="eyebrow">EMERGING FIELD</div>
          <h2>The retina as a window.</h2>
          <p>
            What can the eye reveal about the rest of the body? Follow the evidence 
            around oculomics, retinal biomarkers and systemic health.
          </p>
          <Link className="primary light" href="/article/retina-window-health">
            Explore the evidence →
          </Link>
        </div>
        <div className="window-art">
          <div className="rings" />
          <div className="axis x" />
          <div className="axis y" />
        </div>
      </section>

      {/* The Retina Brief */}
      <section id="brief" className="brief">
        <div className="eyebrow">THE RETINA BRIEF</div>
        <h2>
          Five developments.<br />
          Five minutes. Once a week.
        </h2>
        <p>
          A concise evidence-conscious briefing on what changed in retinal science 
          and why it matters.
        </p>
        <form>
          <input 
            aria-label="Email address" 
            type="email" 
            placeholder="you@example.com" 
          />
          <button type="button">Join the Brief →</button>
        </form>
        <small>V1 demo: connect this form to your email provider before launch.</small>
      </section>
    </main>
  );
}
