import { notFound } from 'next/navigation';
import ArticleCard from '../../../components/ArticleCard';
import { articles, getTopic } from '../../../lib/content';

const imagingGroups = [
  {
    kicker: '02',
    label: 'CORE IMAGING TECHNOLOGIES',
    title: 'How the major modalities differ.',
    dek: 'Structure, flow, field of view and acquisition architecture each answer a different retinal question.',
    slugs: ['oct-vs-octa', 'octa-explained', 'swept-source-vs-spectral-domain-oct', 'fluorescein-angiography-vs-octa']
  },
  {
    kicker: '03',
    label: 'HOW TO READ THE IMAGE',
    title: 'The scan is not self-interpreting.',
    dek: 'Artifacts, segmentation and signal quality can change what a retinal image appears to show.',
    slugs: ['retinal-imaging-artifacts']
  },
  {
    kicker: '04',
    label: 'THE IMAGING FRONTIER',
    title: 'Seeing wider. Seeing smaller.',
    dek: 'Ultra-widefield systems expand retinal context while adaptive optics pushes toward cellular-scale measurement.',
    slugs: ['ultra-widefield-retinal-imaging', 'adaptive-optics-retinal-imaging']
  }
];

export default async function TopicPage({ params }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const items = articles.filter(a => a.category.toLowerCase() === slug);

  if (slug === 'imaging') {
    const startHere = items.find(a => a.slug === 'oct-explained');

    return (
      <main className="topic-page imaging-hub">
        <section className="topic-hero">
          <div className="eyebrow">TOPIC HUB / RETINAL IMAGING</div>
          <h1>{topic.name}</h1>
          <p>{topic.dek}</p>
          <div className="topic-statline">
            <span>{items.length} in-depth guides</span>
            <span>OCT · OCTA · Angiography · Widefield · Adaptive optics</span>
          </div>
        </section>

        {startHere && (
          <section className="topic-content hub-start">
            <div className="section-heading">
              <div>
                <div className="section-kicker"><span>01</span> START HERE</div>
                <h2>Build the mental model first.</h2>
              </div>
              <p>Start with the modality that made retinal structure measurable in cross-section.</p>
            </div>
            <ArticleCard article={startHere} large />
          </section>
        )}

        {imagingGroups.map(group => {
          const groupItems = group.slugs.map(slug => items.find(a => a.slug === slug)).filter(Boolean);
          if (!groupItems.length) return null;
          return (
            <section className="topic-content hub-group" key={group.label}>
              <div className="section-heading">
                <div>
                  <div className="section-kicker"><span>{group.kicker}</span> {group.label}</div>
                  <h2>{group.title}</h2>
                </div>
                <p>{group.dek}</p>
              </div>
              <div className={`cards-grid ${groupItems.length === 1 ? 'single-card-grid' : ''}`}>
                {groupItems.map(article => <ArticleCard key={article.slug} article={article} />)}
              </div>
            </section>
          );
        })}

        <section className="topic-content imaging-principle">
          <div className="eyebrow">RETINA.BLOG IMAGING PRINCIPLE</div>
          <h2>The image is evidence—not the whole answer.</h2>
          <p>Every modality is a measurement filtered through optics, acquisition and software. We explain what a scan can show, what it cannot show, and where artifacts or processing assumptions can change interpretation.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="topic-page">
      <section className="topic-hero">
        <div className="eyebrow">TOPIC HUB</div>
        <h1>{topic.name}</h1>
        <p>{topic.dek}</p>
      </section>
      <section className="topic-content">
        <div className="section-heading">
          <div>
            <div className="section-kicker"><span>01</span> START HERE</div>
            <h2>Understand the field.</h2>
          </div>
        </div>
        {items.length ? (
          <div className="cards-grid">{items.map(a => <ArticleCard key={a.slug} article={a} />)}</div>
        ) : (
          <div className="empty-state">
            <h3>This hub is ready for expansion.</h3>
            <p>The V1 architecture includes this topic so the launch library can grow without changing navigation or URLs.</p>
          </div>
        )}
      </section>
    </main>
  );
}
