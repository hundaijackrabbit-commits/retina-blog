import './globals.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { Analytics } from '@vercel/analytics/next';
export const metadata = { title: { default: 'Retina.blog — See What’s Next', template: '%s | Retina.blog' }, description: 'Evidence-first coverage of retinal science, imaging, AI and innovation.' };
export default function RootLayout({children}){return <html lang="en"><body><SiteHeader/>{children}<SiteFooter/><Analytics /></body></html>}
