import Image from 'next/image';

export default function ScientificFigure({
  src,
  alt,
  width,
  height,
  caption,
  source,
  attribution,
  license,
  licenseUrl,
  priority = false,
  sizes = "100vw"
}) {
  return (
    <figure className="scientific-figure">
      <div className="scientific-figure-image">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
      {(caption || source || attribution || license) && (
        <figcaption className="scientific-figure-caption">
          {caption && <p className="caption-text">{caption}</p>}
          {(source || attribution || license) && (
            <div className="caption-meta">
              {attribution && <span className="attribution">{attribution}</span>}
              {source && <span className="source">{source}</span>}
              {license && licenseUrl ? (
                <a href={licenseUrl} className="license" target="_blank" rel="noopener noreferrer">
                  {license}
                </a>
              ) : license && (
                <span className="license">{license}</span>
              )}
            </div>
          )}
        </figcaption>
      )}
    </figure>
  );
}
