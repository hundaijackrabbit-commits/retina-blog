import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles, getArticle } from '../../../lib/content';

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.dek,
    keywords: [a.primaryKeyword, ...(a.secondaryKeywords || [])].filter(Boolean),
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const explicitRelated = (a.relatedArticles || [])
    .map(getArticle)
    .filter(Boolean)
    .filter(x => x.slug !== a.slug);
  const fallbackRelated = articles.filter(x => x.slug !== a.slug && x.category === a.category);
  const related = [...explicitRelated, ...fallbackRelated]
    .filter((item, index, arr) => arr.findIndex(x => x.slug === item.slug) === index)
    .slice(0, 3);

  return (
    <main className="article-page">
      <div className="article-hero">
        <div className="eyebrow">{a.tag} · {a.category}</div>
        <h1>{a.title}</h1>
        <p className="dek">{a.dek}</p>
        <div className="article-meta">
          <span>By Retina.blog Editorial</span>
          <span>{a.date}</span>
          <span>{a.read}</span>
          {a.lastReviewed && <span>Evidence reviewed {a.lastReviewed}</span>}
        </div>
      </div>

      <div className="article-layout">
        <aside>
          <div className="evidence-card">
            <span>EVIDENCE STATUS</span>
            <strong>{a.evidence}</strong>
            <p>Evidence labels reflect maturity, validation and limitations—not hype.</p>
          </div>
          <div className="toc">
            <b>IN THIS STORY</b>
            {a.sections.map(([h], i) => (
              <a key={h} href={`#s${i}`}>{String(i + 1).padStart(2, '0')} {h}</a>
            ))}
            {a.references?.length > 0 && <a href="#references">{String(a.sections.length + 1).padStart(2, '0')} Sources</a>}
          </div>
        </aside>

        <article>
          <div className="takeaway">
            <span>THE TAKEAWAY</span>
            <p>{a.takeaway}</p>
          </div>

          {a.keyPoints?.length > 0 && (
            <div className="key-points">
              <span>KEY POINTS</span>
              <ul>
                {a.keyPoints.map(point => <li key={point}>{point}</li>)}
              </ul>
            </div>
          )}

          {a.sections.map(([h, p], i) => (
            <section id={`s${i}`} key={h}>
              <div className="section-index">{String(i + 1).padStart(2, '0')}</div>
              <h2>{h}</h2>
              <p>{p}</p>
            </section>
          ))}

          {a.limitations && (
            <div className="limitations-box">
              <div className="eyebrow">LIMITATIONS / SCOPE</div>
              <p>{a.limitations}</p>
            </div>
          )}

          {a.references?.length > 0 ? (
            <section id="references" className="references-section">
              <div className="section-index">{String(a.sections.length + 1).padStart(2, '0')}</div>
              <h2>Sources & original records</h2>
              <p className="references-intro">We prioritize primary records, clinical-trial registries, peer-reviewed literature and authoritative institutions. Manufacturer material is labeled when used to describe a product or company position.</p>
              <ol className="reference-list">
                {a.references.map(ref => (
                  <li key={`${ref.title}-${ref.url}`}>
                    <a href={ref.url} target="_blank" rel="noreferrer">{ref.title}</a>
                    <span>{ref.publisher}{ref.type ? ` · ${ref.type}` : ''}</span>
                  </li>
                ))}
              </ol>
            </section>
          ) : (
            <div className="research-box">
              <div className="eyebrow">RESEARCH NOTE</div>
              <h3>Evidence should be inspectable.</h3>
              <p>This article is part of the earlier V1 library. We are progressively upgrading each piece with primary literature, structured references and explicit limitations.</p>
              <Link href="/editorial-standards">Read our editorial standard →</Link>
            </div>
          )}
        </article>
      </div>

      {related.length > 0 && (
        <section className="related">
          <h2>Go deeper.</h2>
          <div className="cards-grid">
            {related.map(r => (
              <Link key={r.slug} href={`/article/${r.slug}`} className="mini-related">
                <div className="eyebrow">{r.category}</div>
                <h3>{r.title}</h3>
                <span>Read →</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
