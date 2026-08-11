import Image from 'next/image';

export default function EditorialImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  sizes = "100vw",
  className = "",
  objectFit = "cover"
}) {
  return (
    <div className={`editorial-image ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        style={{ objectFit, width: '100%', height: '100%' }}
      />
    </div>
  );
}
