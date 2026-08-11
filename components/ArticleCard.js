import Link from 'next/link';
import EditorialImage from './EditorialImage';

export default function ArticleCard({ article, large = false }) {
  return (
    <Link href={`/article/${article.slug}`} className={`article-card ${large ? 'large' : ''}`}>
      <div className="card-visual">
        {article.image && (
          <EditorialImage
            src={article.image}
            alt={article.imageAlt || article.title}
            width={large ? 1200 : 800}
            height={large ? 800 : 600}
            sizes={large ? "(max-width: 900px) 100vw, 55vw" : "(max-width: 900px) 100vw, 45vw"}
          />
        )}
      </div>
      <div className="card-copy">
        <div className="eyebrow">{article.tag}</div>
        <h3>{article.title}</h3>
        <p>{article.dek}</p>
        <div className="meta">{article.category} · {article.read}</div>
      </div>
    </Link>
  );
}
