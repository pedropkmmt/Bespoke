import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router'
const products = [
  { id: 2, name: 'Talently', image: './talent.png', link: 'https://e-recruite-hr-dashboard.netlify.app' },
  { id: 3, name: 'SetaSync', image: './seta.png', link: 'https://institution-dashboard.app-vut.co.za/login' },
  { id: 4, name: 'AssetVault', image: './asset.png', link: 'https://asset-manger-8q8do.ondigitalocean.app' },
  { id: 5, name: 'Grant4Me', image: './grant.png', link: 'https://grant4me.netlify.app/landing' },
  { id: 6, name: 'SiteIQ', image: './hitari.png', link: 'https://construction-risk-manager.netlify.app' },
  { id: 7, name: 'The Feed', image: '/feed.png', link: 'https://the-feed-9psvc.ondigitalocean.app' },
  { id: 8, name: 'Bid Bridge', image: './bid.png', link: 'https://thebidbridge.netlify.app/' },
  { id: 9, name: 'Impact 360', image: '' ,link: ''},
  { id: 10, name: 'ApproveIT', image: './approveit.png', link: 'https://myloans.onrender.com' },
]

export default function Demo() {
  return (
    <div className="min-h-screen bg-[#0e0d14] text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pb-16 pt-28">
        <h1 className="mb-8 text-3xl font-semibold sm:text-4xl">
          Product Demo
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link to={product.link}>
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-violet-400/50"
            >
              <div className="aspect-video w-full overflow-hidden bg-white/5">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-white/40">
                    Product image
                  </div>
                )}
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold">{product.name}</h2>
              </div>
            </article>
            </Link>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  )
}
