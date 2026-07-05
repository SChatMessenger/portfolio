import { useState } from 'react'
import { profile, type GalleryItem } from '../data/profile'
import { PageHeader } from '../components/PageHeader'
import { useInView } from '../hooks/useInView'

function GalleryTile({ index, item }: { index: number; item: GalleryItem }) {
  const { ref, inView } = useInView<HTMLElement>()
  const [broken, setBroken] = useState(false)

  return (
    <figure
      ref={ref}
      className={`gallery-tile reveal ${inView ? 'in-view' : ''}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {!broken ? (
        <img src={item.src} alt={item.caption} loading="lazy" onError={() => setBroken(true)} />
      ) : (
        <div className="gallery-placeholder" aria-hidden="true" />
      )}
      <figcaption>{item.caption}</figcaption>
    </figure>
  )
}

export function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Field & Lab Life"
        lead="Fieldwork, conferences, and moments from the research group — drop images into public/gallery to replace the placeholders below."
      />
      <section className="section">
        <div className="gallery-grid">
          {profile.gallery.map((item, i) => (
            <GalleryTile key={item.src} index={i} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}
