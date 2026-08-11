import Link from 'next/link';
import { topics } from '../lib/content';
export default function SiteHeader(){return <><header className="site-header"><Link href="/" className="brand">RETINA<span>.</span>BLOG</Link><nav>{topics.map(t=><Link key={t.slug} href={`/topic/${t.slug}`}>{t.name}</Link>)}</nav><Link className="brief-pill" href="/#brief">Retina Brief</Link></header><div className="subnav"><span>Evidence-first coverage of retinal innovation.</span><Link href="/editorial-standards">Editorial standards →</Link></div></>}
