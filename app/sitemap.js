import { articles, topics } from '../lib/content';
export default function sitemap(){
  const base='https://retina.blog';
  return [
    {url:base,changeFrequency:'daily',priority:1},
    {url:`${base}/about`,changeFrequency:'monthly',priority:.5},
    {url:`${base}/editorial-standards`,changeFrequency:'monthly',priority:.6},
    ...topics.map(t=>({url:`${base}/topic/${t.slug}`,changeFrequency:'weekly',priority:.8})),
    ...articles.map(a=>({url:`${base}/article/${a.slug}`,changeFrequency:'monthly',priority:.9}))
  ];
}
