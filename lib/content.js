export const topics = [
  { slug: 'imaging', name: 'Imaging', dek: 'OCT, OCTA, fundus photography and the technologies changing what clinicians can see.' },
  { slug: 'ai', name: 'AI', dek: 'Artificial intelligence for retinal imaging, screening, diagnosis and decision support.' },
  { slug: 'innovation', name: 'Innovation', dek: 'Emerging devices, therapies and ideas moving retinal care forward.' },
  { slug: 'research', name: 'Research', dek: 'Important papers decoded: what changed, what the evidence says and what comes next.' },
  { slug: 'clinical', name: 'Clinical', dek: 'Evidence-conscious coverage of advances with potential clinical relevance.' },
  { slug: 'industry', name: 'Industry', dek: 'Companies, platforms, regulation and the business of retinal technology.' }
];

export const articles = [
  {
    slug: 'ai-read-3d-oct', category: 'AI', tag: 'THE FRONTIER', title: 'Can AI Read an Entire 3D OCT Scan?',
    dek: 'The next generation of retinal AI is moving beyond single images toward whole volumetric studies.',
    read: '7 min', evidence: 'Emerging', date: 'August 11, 2026', featured: true,
    takeaway: 'Whole-volume OCT analysis could make retinal AI more clinically useful, but external validation, device diversity and workflow integration remain decisive tests.',
    sections: [
      ['What’s happening', 'Retinal AI has traditionally focused on selected images or narrow tasks. Newer systems aim to interpret complete 3D OCT studies, preserving the spatial information clinicians actually use.'],
      ['Why it matters', 'A model that can reason across an entire scan may be better positioned to detect subtle patterns, compare structures and support more complex decisions than one trained on isolated slices.'],
      ['What the evidence says', 'Early research is promising, especially around foundation models and multimodal systems. But high benchmark performance is not the same thing as proven clinical utility.'],
      ['The limitations', 'Dataset shift, scanner differences, calibration, explainability and prospective clinical testing can all change real-world performance.'],
      ['What’s next', 'Watch for multicenter validation, prospective studies and evidence that these systems improve workflow or outcomes—not just accuracy metrics.']
    ]
  },
  {
    slug: 'oct-explained', category: 'Imaging', tag: 'GUIDE', title: 'What Is OCT? A Modern Guide to Optical Coherence Tomography',
    dek: 'A clear guide to the retinal imaging technology that transformed ophthalmology.', read: '8 min', evidence: 'Established', date: 'August 11, 2026',
    takeaway: 'OCT uses reflected light to create high-resolution cross-sectional images of retinal structure, making subtle anatomical change visible and measurable.',
    sections: [['The short answer','Optical coherence tomography is a non-invasive imaging technique that creates detailed cross-sections of the retina.'],['How it works','OCT measures the echo time delay and intensity of reflected light to reconstruct tissue layers at microscopic scale.'],['Why retina specialists use it','The scan can reveal structural change in conditions including AMD, diabetic macular edema and other retinal disorders.'],['Where OCT is going','Swept-source systems, wider fields of view, automated segmentation and AI-assisted interpretation are expanding what OCT can do.']]
  },
  {
    slug: 'oct-vs-octa', category: 'Imaging', tag: 'EXPLAINER', title: 'OCT vs. OCTA: What’s the Difference?',
    dek: 'Two related imaging technologies answer different questions about retinal structure and blood flow.', read: '6 min', evidence: 'Established', date: 'August 11, 2026',
    takeaway: 'OCT primarily shows retinal structure; OCTA adds motion-based visualization of blood flow without dye injection.',
    sections: [['OCT','Think structure: retinal layers, fluid, contour and thickness.'],['OCTA','Think flow: vascular networks and perfusion patterns derived from repeated OCT scans.'],['Why the distinction matters','Together they can provide complementary information, but each has artifacts, limitations and interpretation requirements.']]
  },
  {
    slug: 'retina-window-health', category: 'Research', tag: 'THE RETINA AS A WINDOW', title: 'What Can the Retina Reveal About the Rest of the Body?',
    dek: 'Oculomics is exploring whether retinal images can reveal clues about vascular, metabolic and neurological health.', read: '9 min', evidence: 'Emerging', date: 'August 11, 2026',
    takeaway: 'The retina offers unusually direct access to neural and microvascular tissue, but many systemic-health applications remain investigational rather than clinically established.',
    sections: [['Why the retina is unusual','The retina is neural tissue with visible microvasculature, making it attractive for non-invasive measurement.'],['What researchers are studying','Researchers are investigating associations with cardiovascular, metabolic and neurological conditions.'],['What it does not prove','A predictive association does not mean an eye scan can diagnose a systemic disease in routine care.'],['What’s next','Standardization, prospective validation, diverse datasets and clinically meaningful thresholds will determine which applications survive.']]
  },
  {
    slug: 'ultra-widefield', category: 'Innovation', tag: 'INNOVATION SPOTLIGHT', title: 'Ultra-Widefield Imaging: Seeing More of the Retina',
    dek: 'Why a larger field of view can change documentation, detection and clinical context.', read: '6 min', evidence: 'Supported', date: 'August 11, 2026',
    takeaway: 'Ultra-widefield systems can capture substantially more peripheral retina in a single image, but image quality, artifacts and interpretation still matter.',
    sections: [['The idea','Conventional fundus imaging captures a limited retinal field. Ultra-widefield systems extend that view toward the periphery.'],['Why it matters','Peripheral findings can be clinically relevant in several retinal diseases and may be easier to document longitudinally.'],['The tradeoffs','Distortion, eyelash artifacts, media opacity and device-specific characteristics can affect interpretation.']]
  },
  {
    slug: 'ai-diabetic-retinopathy', category: 'AI', tag: 'RESEARCH / DECODED', title: 'AI for Diabetic Retinopathy: What the Evidence Actually Says',
    dek: 'Strong benchmark results are only the beginning. Deployment context changes the answer.', read: '10 min', evidence: 'Supported', date: 'August 11, 2026',
    takeaway: 'AI can perform strongly in diabetic-retinopathy detection, but prevalence, image quality, thresholds, referral pathways and external validation shape real-world usefulness.',
    sections: [['The question','Can automated systems reliably identify diabetic retinopathy from retinal imaging?'],['The evidence','Large bodies of research report high diagnostic performance across multiple approaches.'],['The caveat','Performance can vary across populations, camera systems and clinical settings.'],['What matters now','The next challenge is less “can AI classify images?” and more “where does it improve care safely and efficiently?”']]
  },
  {
    slug: 'future-retinal-imaging', category: 'Innovation', tag: 'OUTLOOK', title: 'The Future of Retinal Imaging',
    dek: 'Higher resolution, wider fields, richer modalities and more intelligent interpretation are converging.', read: '8 min', evidence: 'Emerging', date: 'August 11, 2026',
    takeaway: 'The next leap may come from combining better acquisition with multimodal data and decision-support systems rather than from one single imaging breakthrough.',
    sections: [['More detail','Adaptive optics and improved OCT architectures continue to push resolution and depth.'],['More context','Multimodal imaging combines structure, flow, autofluorescence and other signals.'],['More intelligence','AI may help synthesize increasingly complex imaging into clinically useful patterns.']]
  },
  {
    slug: 'gene-therapy-retina', category: 'Clinical', tag: 'CLINICAL FRONTIER', title: 'Gene Therapy and the Retina: Where the Field Stands',
    dek: 'Inherited retinal disease made the eye a proving ground for genetic medicine. The next chapter is broader—and harder.', read: '9 min', evidence: 'Supported', date: 'August 11, 2026',
    takeaway: 'Retinal gene therapy is clinically real for specific indications, while many broader applications remain under investigation.',
    sections: [['Why the eye','The eye is anatomically accessible, relatively compartmentalized and measurable with advanced imaging.'],['What is established','Gene therapy has already reached clinical use for a specific inherited retinal disease.'],['What remains difficult','Different genes, disease stages, delivery methods and long-term durability create very different challenges.']]
  }
];

export const getArticle = slug => articles.find(a => a.slug === slug);
export const getTopic = slug => topics.find(t => t.slug === slug);
