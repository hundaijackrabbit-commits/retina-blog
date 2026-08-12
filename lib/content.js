import { industryArticles } from './industryArticles';

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
    slug: 'ai-read-3d-oct',
    category: 'AI',
    tag: 'THE FRONTIER',
    title: 'Can AI Read an Entire 3D OCT Scan?',
    dek: 'The next generation of retinal AI is moving beyond single images toward whole volumetric studies.',
    read: '7 min',
    evidence: 'Emerging',
    date: 'August 11, 2026',
    featured: true,
    image: '/images/oct/oct-normal-macula-cross-section.webp',
    imageAlt: 'OCT cross-section showing normal macular anatomy with clearly defined retinal layers',
    takeaway: 'Whole-volume OCT analysis could make retinal AI more clinically useful, but external validation, device diversity and workflow integration remain decisive tests.',
    sections: [
      ['What is happening', 'Retinal AI has traditionally focused on selected images or narrow tasks. Newer systems aim to interpret complete 3D OCT studies, preserving the spatial information clinicians actually use.'],
      ['Why it matters', 'A model that can reason across an entire scan may be better positioned to detect subtle patterns, compare structures and support more complex decisions than one trained on isolated slices.'],
      ['What the evidence says', 'Early research is promising, especially around foundation models and multimodal systems. But high benchmark performance is not the same thing as proven clinical utility.'],
      ['The limitations', 'Dataset shift, scanner differences, calibration, explainability and prospective clinical testing can all change real-world performance.'],
      ['What is next', 'Watch for multicenter validation, prospective studies and evidence that these systems improve workflow or outcomes not just accuracy metrics.']
    ]
  },
  {
    slug: 'oct-explained',
    category: 'Imaging',
    tag: 'GUIDE',
    title: 'What Is OCT? A Modern Guide to Optical Coherence Tomography',
    dek: 'A clear guide to the retinal imaging technology that transformed ophthalmology.',
    read: '8 min',
    evidence: 'Established',
    date: 'August 11, 2026',
    image: '/images/oct/oct-fundus-ir-overlay.webp',
    imageAlt: 'OCT scan with infrared fundus overlay showing cross-sectional and en face views',
    takeaway: 'OCT uses reflected light to create high-resolution cross-sectional images of retinal structure, making subtle anatomical change visible and measurable.',
    sections: [
      ['The short answer', 'Optical coherence tomography is a non-invasive imaging technique that creates detailed cross-sections of the retina.'],
      ['How it works', 'OCT measures the echo time delay and intensity of reflected light to reconstruct tissue layers at microscopic scale.'],
      ['Why retina specialists use it', 'The scan can reveal structural change in conditions including AMD, diabetic macular edema and other retinal disorders.'],
      ['Where OCT is going', 'Swept-source systems, wider fields of view, automated segmentation and AI-assisted interpretation are expanding what OCT can do.']
    ]
  },
  {
    slug: 'oct-vs-octa',
    category: 'Imaging',
    tag: 'EXPLAINER',
    title: 'OCT vs. OCTA: What Is the Difference?',
    dek: 'Two related imaging technologies answer different questions about retinal structure and blood flow.',
    read: '6 min',
    evidence: 'Established',
    date: 'August 11, 2026',
    image: '/images/research/retinal-branch-occlusion-angiography.webp',
    imageAlt: 'Retinal angiography showing vascular network and blood flow patterns',
    takeaway: 'OCT primarily shows retinal structure; OCTA adds motion-based visualization of blood flow without dye injection.',
    sections: [
      ['OCT', 'Think structure: retinal layers, fluid, contour and thickness.'],
      ['OCTA', 'Think flow: vascular networks and perfusion patterns derived from repeated OCT scans.'],
      ['Why the distinction matters', 'Together they can provide complementary information, but each has artifacts, limitations and interpretation requirements.']
    ]
  },
  {
    slug: 'retina-window-health',
    category: 'Research',
    tag: 'THE RETINA AS A WINDOW',
    title: 'What Can the Retina Reveal About the Rest of the Body?',
    dek: 'Oculomics is exploring whether retinal images can reveal clues about vascular, metabolic and neurological health.',
    read: '9 min',
    evidence: 'Emerging',
    date: 'August 11, 2026',
    image: '/images/retina/right-eye-fundus.webp',
    imageAlt: 'Fundus photograph of right eye showing retinal vasculature and optic nerve',
    takeaway: 'The retina offers unusually direct access to neural and microvascular tissue, but many systemic-health applications remain investigational rather than clinically established.',
    sections: [
      ['Why the retina is unusual', 'The retina is neural tissue with visible microvasculature, making it attractive for non-invasive measurement.'],
      ['What researchers are studying', 'Researchers are investigating associations with cardiovascular, metabolic and neurological conditions.'],
      ['What it does not prove', 'A predictive association does not mean an eye scan can diagnose a systemic disease in routine care.'],
      ['What is next', 'Standardization, prospective validation, diverse datasets and clinically meaningful thresholds will determine which applications survive.']
    ]
  },
  {
    slug: 'ultra-widefield',
    category: 'Innovation',
    tag: 'INNOVATION SPOTLIGHT',
    title: 'Ultra-Widefield Imaging: Seeing More of the Retina',
    dek: 'Why a larger field of view can change documentation, detection and clinical context.',
    read: '6 min',
    evidence: 'Supported',
    date: 'August 11, 2026',
    image: '/images/oct/oct-retina-cross-section-color.webp',
    imageAlt: 'Colorized OCT scan showing detailed cross-section of retinal tissue layers',
    takeaway: 'Ultra-widefield systems can capture substantially more peripheral retina in a single image, but image quality, artifacts and interpretation still matter.',
    sections: [
      ['The idea', 'Conventional fundus imaging captures a limited retinal field. Ultra-widefield systems extend that view toward the periphery.'],
      ['Why it matters', 'Peripheral findings can be clinically relevant in several retinal diseases and may be easier to document longitudinally.'],
      ['The tradeoffs', 'Distortion, eyelash artifacts, media opacity and device-specific characteristics can affect interpretation.']
    ]
  },
  {
    slug: 'ai-diabetic-retinopathy',
    category: 'AI',
    tag: 'RESEARCH / DECODED',
    title: 'AI for Diabetic Retinopathy: What the Evidence Actually Says',
    dek: 'Strong benchmark results are only the beginning. Deployment context changes the answer.',
    read: '10 min',
    evidence: 'Supported',
    date: 'August 11, 2026',
    image: '/images/editorial/ai-research.webp',
    imageAlt: 'Research scientist working with AI technology and data visualization',
    takeaway: 'AI can perform strongly in diabetic-retinopathy detection, but prevalence, image quality, thresholds, referral pathways and external validation shape real-world usefulness.',
    sections: [
      ['The question', 'Can automated systems reliably identify diabetic retinopathy from retinal imaging?'],
      ['The evidence', 'Large bodies of research report high diagnostic performance across multiple approaches.'],
      ['The caveat', 'Performance can vary across populations, camera systems and clinical settings.'],
      ['What matters now', 'The next challenge is less can AI classify images and more where does it improve care safely and efficiently?']
    ]
  },
  {
    slug: 'future-retinal-imaging',
    category: 'Innovation',
    tag: 'OUTLOOK',
    title: 'The Future of Retinal Imaging',
    dek: 'Higher resolution, wider fields, richer modalities and more intelligent interpretation are converging.',
    read: '8 min',
    evidence: 'Emerging',
    date: 'August 11, 2026',
    image: '/images/clinical/retinal-scanner-in-clinic.webp',
    imageAlt: 'Clinical retinal imaging equipment in use during patient examination',
    takeaway: 'The next leap may come from combining better acquisition with multimodal data and decision-support systems rather than from one single imaging breakthrough.',
    sections: [
      ['More detail', 'Adaptive optics and improved OCT architectures continue to push resolution and depth.'],
      ['More context', 'Multimodal imaging combines structure, flow, autofluorescence and other signals.'],
      ['More intelligence', 'AI may help synthesize increasingly complex imaging into clinically useful patterns.']
    ]
  },
  {
    slug: 'gene-therapy-retina',
    category: 'Clinical',
    tag: 'CLINICAL FRONTIER',
    title: 'Gene Therapy and the Retina: Where the Field Stands',
    dek: 'Inherited retinal disease made the eye a proving ground for genetic medicine. The next chapter is broader and harder.',
    read: '9 min',
    evidence: 'Supported',
    date: 'August 11, 2026',
    image: '/images/research/lab-closeup.webp',
    imageAlt: 'Laboratory research closeup showing scientific equipment and techniques',
    takeaway: 'Retinal gene therapy is clinically real for specific indications, while many broader applications remain under investigation.',
    sections: [
      ['Why the eye', 'The eye is anatomically accessible, relatively compartmentalized and measurable with advanced imaging.'],
      ['What is established', 'Gene therapy has already reached clinical use for a specific inherited retinal disease.'],
      ['What remains difficult', 'Different genes, disease stages, delivery methods and long-term durability create very different challenges.']
    ]
  },
  
  // NEW ARTICLE 9: What Is Oculomics - Major SEO Evergreen
  {
    slug: 'what-is-oculomics',
    category: 'Research',
    tag: 'THE RETINA AS A WINDOW',
    title: 'What Is Oculomics? Understanding Retinal Biomarkers of Systemic Health',
    dek: 'Can retinal imaging reveal information about cardiovascular, metabolic, and neurological health? Research is exploring the possibilities and limitations.',
    read: '11 min',
    evidence: 'Emerging',
    date: 'August 11, 2026',
    image: '/images/retina/right-eye-fundus.webp',
    imageAlt: 'Detailed fundus photograph showing retinal vasculature and neural tissue',
    takeaway: 'Oculomics explores whether retinal imaging can provide biomarkers for systemic diseases. Population studies show statistical associations between retinal features and conditions like cardiovascular disease and neurodegeneration, but clinical utility for screening or diagnosis remains investigational.',
    sections: [
      ['What oculomics means', 'Oculomics refers to the study of retinal imaging biomarkers that may correlate with systemic health conditions. The retina offers direct visualization of neural tissue and microvasculature, making it theoretically attractive for detecting systemic disease patterns.'],
      ['The biological rationale', 'The retina shares embryological origins with the brain, contains directly visible microvasculature affected by systemic vascular disease, and may exhibit changes that parallel processes elsewhere in the body. This makes it a candidate window into systemic health.'],
      ['What research has shown', 'Large population studies have demonstrated associations between retinal vascular features and cardiovascular disease risk. AI models have been trained to predict conditions including diabetes, kidney disease, cardiovascular events, and correlates of neurological conditions from fundus photographs. These associations are statistically significant in research datasets.'],
      ['Association versus utility', 'Demonstrating that a retinal feature correlates with a disease is different from proving that retinal screening adds clinical value. Many oculomics associations involve conditions we already screen for directly (diabetes, hypertension). The key question is whether retinal imaging provides information beyond standard clinical assessment.'],
      ['Current evidence gaps', 'Most oculomics studies are retrospective or cross-sectional. Prospective validation showing that retinal screening improves patient outcomes is largely absent. Sensitivity and specificity for specific conditions often fall short of clinical screening requirements. Cost-effectiveness compared to established screening methods is unclear.'],
      ['Where this could matter', 'Oculomics may eventually contribute to integrated risk assessment, particularly if retinal imaging becomes routine for other reasons. The field could identify high-risk individuals for closer monitoring. But replacing established screening approaches would require substantial additional evidence.'],
      ['Appropriate perspective', 'The retina does contain information about systemic health—that much is established. Whether this information is clinically actionable, adds value over existing tools, and justifies the cost and complexity of retinal screening for systemic disease remains an open research question.']
    ]
  },
  
  // NEW ARTICLE 10: How AI Is Used in Retinal Imaging - Major SEO Evergreen
  {
    slug: 'ai-retinal-imaging-guide',
    category: 'AI',
    tag: 'ESSENTIAL GUIDE',
    title: 'How AI Is Used in Retinal Imaging: Applications, Evidence, and Limitations',
    dek: 'A comprehensive overview of artificial intelligence applications in ophthalmology, from FDA-approved screening tools to emerging research.',
    read: '14 min',
    evidence: 'Varies by application',
    date: 'August 11, 2026',
    image: '/images/editorial/ai-research.webp',
    imageAlt: 'Research visualization showing AI and data analysis in medical imaging context',
    takeaway: 'AI applications in retinal imaging range from FDA-approved diabetic retinopathy screening systems (supported evidence) to experimental disease prediction models (preliminary evidence). Real-world performance, external validation, and clinical integration remain critical challenges across most applications.',
    sections: [
      ['The scope of AI in ophthalmology', 'Artificial intelligence, particularly deep learning, has been applied to fundus photography, OCT, and OCTA for tasks including disease detection, severity grading, progression prediction, and discovering associations with systemic conditions. Some applications have reached clinical deployment; most remain investigational.'],
      ['Diabetic retinopathy screening', 'Multiple AI systems for automated DR screening have received FDA clearance, including autonomous diagnostic systems. These show high sensitivity and specificity in controlled studies. However, real-world deployment faces challenges: ungradable image rates, performance variation across populations and camera types, and workflow integration questions. Evidence level: Supported for specific approved systems.'],
      ['AMD and OCT interpretation', 'AI models have been developed for detecting and quantifying fluid on OCT, measuring geographic atrophy, classifying choroidal neovascularization, and predicting AMD progression. Research performance is strong, but prospective clinical validation is limited. Some systems are entering clinical use as decision support tools, not autonomous diagnostics. Evidence level: Supported for detection tasks, Emerging for progression prediction.'],
      ['3D volumetric OCT analysis', 'Newer approaches analyze entire OCT volumes rather than selected B-scans, potentially capturing spatial information clinicians use. This could improve diagnostic accuracy and support more complex clinical decisions. However, computational requirements are high, training data limited, and external validation across devices incomplete. Evidence level: Emerging.'],
      ['Foundation models for ophthalmology', 'Large AI models pre-trained on diverse retinal images, then fine-tuned for specific tasks, represent a recent development. These models may generalize better than task-specific networks and require less labeled data for new applications. Published benchmarks show promise, but clinical deployment and prospective validation are very early stage. Evidence level: Emerging.'],
      ['Glaucoma detection and monitoring', 'AI applied to OCT nerve fiber layer analysis, optic disc photography, and visual fields shows research promise for earlier detection and progression monitoring. Integration with existing clinical workflow and demonstrating improved patient outcomes are ongoing challenges. Evidence level: Emerging to Supported depending on specific application.'],
      ['Critical limitations across applications', 'Most AI systems face common challenges: they may not generalize well to populations, devices, or image quality conditions different from training data. Explainability remains difficult—understanding why an AI made a specific prediction is not always possible. Regulatory pathways for updating deployed models are unclear. Long-term clinical outcome studies are rare. Real-world ungradable rates often exceed research settings.'],
      ['What deployment requires', 'Moving from research benchmarks to clinical practice requires prospective validation, integration into existing workflows, clear liability frameworks, continuous performance monitoring, and evidence that AI improves care—not just matches human performance on retrospective datasets. Regulatory approval is necessary but not sufficient for clinical adoption.']
    ]
  },
  
  // NEW ARTICLE 11: Diabetic Retinopathy AI - Research/Decoded
  {
    slug: 'ai-dr-screening-evidence',
    category: 'Research',
    tag: 'RESEARCH / DECODED',
    title: 'AI for Diabetic Retinopathy Screening: Decoding the Evidence',
    dek: 'Examining what clinical trials and real-world studies actually show about automated DR screening, beyond the benchmark accuracy numbers.',
    read: '13 min',
    evidence: 'Supported',
    date: 'August 11, 2026',
    image: '/images/editorial/ai-research.webp',
    imageAlt: 'Medical research and AI technology visualization',
    takeaway: 'AI diabetic retinopathy screening systems have demonstrated high diagnostic accuracy in pivotal trials and received FDA approval. Real-world deployment reveals additional challenges including ungradable image rates, performance variation across settings, and workflow integration complexity not fully captured in controlled trials.',
    sections: [
      ['Why this matters', 'Diabetic retinopathy affects millions globally, yet screening rates remain suboptimal due to access barriers and workforce limitations. Automated AI screening promised to expand access and reduce burden on specialists. Multiple systems have now been deployed—what does the evidence actually show?'],
      ['The pivotal trials', 'FDA-approved systems like IDx-DR demonstrated sensitivity above 87% and specificity above 90% for detecting referable diabetic retinopathy in prospective trials. These studies used standardized imaging protocols, trained operators, and pre-specified analysis plans. Performance met or exceeded pre-specified endpoints, leading to regulatory clearance.'],
      ['What "referable DR" means', 'Most AI systems are trained to detect moderate-or-worse diabetic retinopathy or vision-threatening diabetic retinopathy—categories requiring specialist referral. They are not designed to grade every severity level or replace comprehensive dilated exams, but to triage who needs further evaluation.'],
      ['The ungradable image problem', 'In pivotal trials, ungradable rates were often under 10%. Real-world studies report ungradable rates of 20-30% in some settings, driven by media opacity (cataracts), poor image quality, patient positioning difficulties, or inadequate mydriasis. Ungradable cases require human review, reducing the autonomous aspect of "autonomous" AI.'],
      ['Performance across populations', 'Validation studies in diverse populations sometimes show performance variation. AI trained predominantly on one demographic or disease prevalence may not transfer perfectly to different settings. External validation across ethnicities, countries, and healthcare systems remains ongoing.'],
      ['Clinical workflow integration', 'Where does AI fit? Primary care screening? Endocrinology offices? Dedicated screening centers? Each setting has different image quality, disease prevalence, and referral pathways, affecting positive predictive value and operational feasibility. Successful deployment requires workflow redesign, not just technology installation.'],
      ['Cost-effectiveness and access', 'Does AI screening improve cost-effectiveness compared to standard care? Evidence is mixed and setting-dependent. In areas with severe specialist shortages, AI may expand access meaningfully. In well-resourced settings, the value proposition is less clear. Reducing false positives (which create unnecessary referrals) while maintaining high sensitivity is a persistent challenge.'],
      ['What remains uncertain', 'Long-term outcome studies showing AI screening improves vision outcomes are limited. Most studies measure diagnostic accuracy, not patient-centered outcomes. Optimal retesting intervals, integration with traditional screening, and liability frameworks are still evolving.']
    ]
  },
  
  // NEW ARTICLE 12: Foundation Models - Innovation/Frontier
  {
    slug: 'retinal-foundation-models',
    category: 'AI',
    tag: 'THE FRONTIER',
    title: 'Foundation Models for Retinal Imaging: Promise and Unresolved Questions',
    dek: 'Large pre-trained AI models adapted for ophthalmology could change how retinal diseases are detected and monitored—if they overcome significant validation hurdles.',
    read: '10 min',
    evidence: 'Emerging',
    date: 'August 11, 2026',
    image: '/images/oct/oct-normal-macula-cross-section.webp',
    imageAlt: 'Detailed OCT scan showing retinal layer structure',
    takeaway: 'Foundation models pre-trained on large retinal image datasets, then adapted for specific tasks, represent a paradigm shift in ophthalmic AI. Early research shows strong performance on benchmark tasks and potential for data-efficient transfer learning. Prospective clinical validation, fairness across demographics, and real-world generalization remain largely untested.',
    sections: [
      ['What foundation models are', 'In AI, a foundation model is a large neural network pre-trained on massive datasets, learning general representations that transfer to many downstream tasks. In retinal imaging, this means training on hundreds of thousands or millions of fundus photos, OCT scans, or multimodal images, then fine-tuning for specific diseases or prediction tasks.'],
      ['Why this approach differs', 'Traditional retinal AI trains task-specific models from scratch: one model for diabetic retinopathy, another for AMD, another for glaucoma. Foundation models learn generalizable retinal features once, then adapt quickly to new tasks with less labeled data. This could accelerate development of AI for rare diseases or new applications.'],
      ['Early results', 'Models like RETFound (published 2023) and others show strong performance when fine-tuned on tasks including disease detection, progression prediction, and oculomics associations. These models sometimes outperform or match task-specific models, especially when training data for the target task is limited. Results are promising but from retrospective test sets.'],
      ['The data efficiency claim', 'Foundation model advocates argue they require fewer labeled examples for new tasks (few-shot or zero-shot learning). If true, this could enable AI for diseases with limited annotated data. However, whether this generalizes across real clinical populations and imaging conditions remains uncertain.'],
      ['Generalization questions', 'Do foundation models generalize better across different OCT devices, camera types, populations, and disease severities than task-specific models? Early evidence is mixed. Benchmark improvements of 1-2% AUC may not translate to clinically meaningful differences. External validation across diverse real-world settings is limited.'],
      ['Fairness and bias', 'If foundation models are trained on non-representative datasets, they may perpetuate or amplify existing biases. Performance across race, ethnicity, age, and disease stage must be rigorously validated. Some studies show performance gaps; others do not. Transparency about training data demographics is often lacking.'],
      ['Explainability challenges', 'Foundation models are even larger and more complex than previous retinal AI systems, making interpretation harder. Attention maps and saliency methods provide some insight but are imperfect. Regulatory bodies and clinicians may require better explainability for high-stakes medical decisions.'],
      ['What would validate the promise', 'Prospective clinical trials comparing foundation-model-based systems to current standards. Evidence of improved patient outcomes, not just benchmark metrics. Demonstration of fairness across demographics. Clear value proposition: faster development for rare diseases? Better generalization? More accurate diagnosis? The answers will determine whether foundation models transform retinal care or remain a research curiosity.']
    ]
  },
  
  // NEW ARTICLE 13: Adaptive Optics - Innovation
  {
    slug: 'adaptive-optics-retinal-imaging',
    category: 'Innovation',
    tag: 'INNOVATION SPOTLIGHT',
    title: 'Adaptive Optics: Seeing Individual Cells in the Living Retina',
    dek: 'Technology borrowed from astronomy is pushing retinal imaging to cellular resolution, opening new frontiers in research and potentially clinical diagnosis.',
    read: '9 min',
    evidence: 'Emerging',
    date: 'August 11, 2026',
    image: '/images/research/research-process.webp',
    imageAlt: 'Advanced research laboratory setting with precision equipment',
    takeaway: 'Adaptive optics corrects optical aberrations in real-time, enabling visualization of individual photoreceptors, retinal ganglion cells, and microvasculature in living eyes. Currently used primarily in research, it may eventually contribute to early disease detection and precise monitoring of inherited retinal diseases and other conditions.',
    sections: [
      ['The resolution barrier', 'Standard retinal imaging is limited by optical imperfections in the eye itself—aberrations from the cornea, lens, and internal optics blur images before they reach the retina. This limits resolution to roughly 10-15 micrometers, preventing visualization of individual cells.'],
      ['How adaptive optics works', 'Adaptive optics systems measure wavefront distortions in real-time using a wavefront sensor, then correct them using a deformable mirror that adjusts its shape hundreds of times per second. This cancels out the eye\'s aberrations, achieving near-diffraction-limited resolution—enough to see individual photoreceptors and other cells.'],
      ['What becomes visible', 'With adaptive optics, researchers can image individual cone photoreceptors (spacing ~2-5 micrometers at the fovea), rod photoreceptors in the peripheral retina, retinal ganglion cells, retinal pigment epithelium cells, and capillaries at micron-level resolution. This reveals cellular structure and mosaic organization in living human eyes.'],
      ['Applications in inherited retinal disease', 'Adaptive optics imaging can detect photoreceptor loss in inherited retinal diseases earlier and more precisely than conventional imaging. This could improve patient stratification in clinical trials, enable earlier intervention, and provide more sensitive endpoints for measuring treatment response. Several clinical trials now incorporate AO imaging.'],
      ['Potential in AMD and other diseases', 'In age-related macular degeneration, adaptive optics can visualize drusen at cellular scale and detect early photoreceptor changes. In glaucoma, it may enable earlier detection of retinal ganglion cell loss. In vascular diseases, microvascular flow and capillary dropout are visible at unprecedented resolution. Clinical utility for routine diagnosis remains unproven.'],
      ['Technical and practical limitations', 'Adaptive optics systems are expensive, large, require specialized operators, and have small fields of view (typically a few degrees). Image acquisition takes longer than standard retinal imaging. Automated analysis of cellular-scale images is challenging. These factors currently limit widespread clinical deployment.'],
      ['Toward clinical translation', 'Commercial adaptive optics systems are emerging, with improved usability and reduced size. Integration with OCT (AO-OCT) and scanning laser ophthalmoscopy (AO-SLO) provides complementary information. For clinical adoption, systems must become faster, easier to operate, and demonstrate clear value in diagnosis or treatment decisions.'],
      ['The research frontier', 'Adaptive optics enables studies of cellular function (intrinsic optical signals, photoreceptor dynamics), immune cell trafficking in uveitis, and microaneurysm formation in diabetic retinopathy at cellular resolution. These research insights may eventually translate to clinical biomarkers.']
    ]
  },
  
  // NEW ARTICLE 14: AMD Biomarkers - Research/Decoded
  {
    slug: 'amd-biomarkers-imaging',
    category: 'Research',
    tag: 'RESEARCH / DECODED',
    title: 'Biomarkers in Age-Related Macular Degeneration: What Imaging Reveals',
    dek: 'Multimodal retinal imaging has identified structural features associated with AMD progression, but translating biomarkers into clinical prediction tools remains challenging.',
    read: '12 min',
    evidence: 'Supported',
    date: 'August 11, 2026',
    image: '/images/oct/oct-central-serous-chorioretinopathy.webp',
    imageAlt: 'OCT showing detailed macular pathology with structural changes',
    takeaway: 'Imaging biomarkers including drusen characteristics, reticular pseudodrusen, hyperreflective foci, and choroidal thickness have shown associations with AMD progression risk. However, predicting which individual patients will progress rapidly enough to justify earlier intervention remains imperfect.',
    sections: [
      ['Why biomarkers matter in AMD', 'Age-related macular degeneration progresses unpredictably. Some patients remain stable for years; others lose vision rapidly. Identifying high-risk individuals could enable closer monitoring, earlier treatment, and better clinical trial design. Imaging features visible on OCT, fundus autofluorescence, and OCTA offer potential prognostic information.'],
      ['Drusen characteristics', 'Larger drusen, particularly those exceeding 125 micrometers, and high drusen volume correlate with higher progression risk. Drusen with specific internal reflectivity patterns on OCT may indicate different risk levels. However, many eyes with large drusen never progress, and some eyes with small drusen do—drusen alone have limited positive predictive value.'],
      ['Reticular pseudodrusen', 'Also called subretinal drusenoid deposits, these appear as distinct lesions on multimodal imaging, located above the RPE rather than below. Their presence associates with faster progression to advanced AMD and particularly geographic atrophy. Detection sensitivity varies by imaging modality—near-infrared reflectance and OCT are most sensitive.'],
      ['Hyperreflective foci', 'These small, bright spots on OCT represent RPE disruption, migrated RPE cells, or inflammatory cells. Increasing number and volume of hyperreflective foci correlate with progression in some studies. Automated quantification is challenging, and clinical utility for individual patient predictions is not established.'],
      ['Choroidal thickness and vascularity', 'Reduced choroidal thickness and decreased choriocapillaris density on OCTA have been associated with AMD presence and progression. However, choroidal thinning also occurs with normal aging and myopia, limiting specificity. Whether choroidal measurements add predictive value beyond other biomarkers is debated.'],
      ['Geographic atrophy growth rate', 'Measuring existing GA area and growth rate helps predict future vision loss and serves as an endpoint in clinical trials. But identifying biomarkers that predict imminent GA development in intermediate AMD—before it appears—has been more elusive. Combinations of biomarkers may perform better than single features.'],
      ['From association to prediction', 'Many imaging features associate with AMD progression in population studies. Turning these into clinically useful prediction tools for individual patients requires high positive predictive value, which most single biomarkers lack. Machine learning models combining multiple features show promise but need prospective validation.'],
      ['Clinical application questions', 'Even with accurate prediction, clinical decisions depend on actionable interventions. AREDS2 supplementation reduces progression risk modestly. Anti-VEGF treatment is used after neovascularization develops. Would earlier intervention in high-risk eyes improve outcomes? This question remains largely unanswered, limiting the clinical value of prognostic biomarkers until preventive treatments improve.']
    ]
  },
  
  // NEW ARTICLE 15: Gene Therapy Updates - Clinical/Timely
  {
    slug: 'gene-therapy-trials-2026',
    category: 'Clinical',
    tag: 'CLINICAL FRONTIER',
    title: 'Retinal Gene Therapy in 2026: Progress Beyond Luxturna',
    dek: 'Multiple inherited retinal disease gene therapies have advanced through clinical trials, with new approvals anticipated and technical challenges being addressed.',
    read: '11 min',
    evidence: 'Emerging to Supported',
    date: 'August 11, 2026',
    image: '/images/research/lab-closeup.webp',
    imageAlt: 'Laboratory research setting showing advanced scientific equipment',
    takeaway: 'Since Luxturna\'s 2017 approval for RPE65-mediated inherited retinal disease, gene therapy programs for choroideremia, X-linked retinitis pigmentosa, achromatopsia, and other conditions have progressed through Phase 2 and 3 trials. Some show promising efficacy; others face durability and immune response challenges. Clinical adoption depends on long-term safety, functional improvements, and cost-effectiveness.',
    sections: [
      ['The Luxturna precedent', 'Voretigene neparvovec (Luxturna), approved in 2017 for biallelic RPE65 mutations, established proof-of-concept: retinal gene therapy could provide durable functional vision improvement in inherited retinal disease. Multi-year follow-up shows sustained benefit in many patients, though not all respond equally. This success catalyzed broader gene therapy development.'],
      ['Choroideremia programs', 'Choroideremia, an X-linked retinal degeneration caused by CHM gene mutations, has been a major gene therapy target. Phase 2 and Phase 3 trials have reported visual function stabilization or improvement in treated eyes compared to untreated fellow eyes. Regulatory submissions are anticipated or underway. Durability and optimal patient selection (disease stage) remain key questions.'],
      ['X-linked retinitis pigmentosa (RPGR)', 'RPGR mutations cause X-linked RP, a common inherited retinal dystrophy. Gene therapy trials have shown functional improvements, but also adverse events including retinal inflammation in some cases. Dose optimization and immune response management are critical. If approved, RPGR gene therapy could benefit a relatively large patient population compared to ultra-rare IRD subtypes.'],
      ['Achromatopsia', 'This cone dystrophy causes severe color blindness and reduced acuity from birth. Gene therapy trials for CNGA3 and CNGB3 mutations have shown some functional improvements, though restoring normal color vision in adult patients (after years without cone function) is challenging. Outcomes vary, and the field is learning about critical periods for intervention.'],
      ['Challenges with large genes', 'AAV vectors used in most retinal gene therapies have a packaging limit around 4.7 kilobases. Some retinal disease genes, notably ABCA4 (Stargardt disease), are too large for single AAV vectors. Dual-vector approaches, alternative vectors (lentivirus), or gene editing strategies are under investigation but add complexity.'],
      ['Immune responses and re-treatment', 'Some patients develop immune responses to AAV capsids or transgene products, potentially limiting efficacy or precluding re-treatment. Pre-existing anti-AAV antibodies (common in the population) may exclude some patients. Immune suppression strategies and novel AAV serotypes are being explored.'],
      ['Durability and the treatment window', 'Gene therapy must be delivered before photoreceptors die—but when is optimal? Too early, and risk/benefit is unclear; too late, and insufficient viable cells remain. Long-term durability (10+ years) is still unknown for most therapies. Re-treatment feasibility is uncertain. Defining treatment windows and managing patient expectations are critical.'],
      ['Cost and access', 'Luxturna\'s list price exceeded $400,000 per eye, raising access and health economics questions. Subsequent therapies face similar challenges. Value-based pricing, outcomes-based agreements, and manufacturing efficiencies may improve access. For ultra-rare diseases, gene therapy costs must be weighed against lifetime disease burden.']
    ]
  },
  
  // NEW ARTICLE 16: Multimodal Imaging Integration - Innovation
  {
    slug: 'multimodal-retinal-imaging',
    category: 'Innovation',
    tag: 'THE FRONTIER',
    title: 'Multimodal Retinal Imaging: Beyond Single-Modality Diagnosis',
    dek: 'Integrating OCT, OCTA, fundus autofluorescence, and infrared imaging into unified platforms promises richer diagnostic information but requires new interpretation frameworks.',
    read: '10 min',
    evidence: 'Emerging',
    date: 'August 11, 2026',
    image: '/images/research/lattice-degeneration-multimodal-imaging.webp',
    imageAlt: 'Multimodal retinal imaging showing multiple visualization techniques',
    takeaway: 'Modern retinal imaging platforms combine structural OCT, vascular OCTA, metabolic autofluorescence, and anatomical photography into single acquisitions. This multimodal approach captures complementary information about structure, function, and perfusion. Clinical interpretation workflows, data integration, and AI-assisted analysis are still evolving.',
    sections: [
      ['The single-modality limitation', 'Fundus photography shows anatomy but not depth. OCT reveals structure but not perfusion. OCTA visualizes vessels but not leakage. Autofluorescence indicates metabolic status but lacks structural detail. Each modality answers specific questions but misses others. Comprehensive retinal assessment traditionally required multiple separate imaging sessions.'],
      ['Multimodal platforms', 'Contemporary devices integrate OCT, OCTA, infrared reflectance, fundus autofluorescence, and color photography into single platforms with co-registered acquisition. Patients receive comprehensive imaging in one session, with all modalities spatially aligned. This reduces visit time and enables direct comparison across modalities.'],
      ['Complementary information in AMD', 'In age-related macular degeneration, structural OCT shows fluid and drusen; OCTA detects choroidal neovascularization and choriocapillaris loss; autofluorescence reveals RPE dysfunction and geographic atrophy margins; infrared imaging highlights reticular pseudodrusen. Integrating these provides more complete disease characterization than any single modality.'],
      ['Diabetic retinopathy assessment', 'Color fundus photos document hemorrhages and exudates; OCT quantifies macular edema; OCTA reveals capillary dropout and foveal avascular zone enlargement; autofluorescence can show areas of ischemia. Multimodal imaging may enable earlier ischemia detection and better treatment response monitoring than traditional methods.'],
      ['Interpretation challenges', 'Clinicians must synthesize information across multiple image types, each with its own artifacts and limitations. This is cognitively demanding and time-intensive. Standardized interpretation protocols are lacking. Which modality takes precedence when they provide discordant information? Training requirements increase.'],
      ['AI-assisted multimodal analysis', 'Machine learning models can integrate multimodal data automatically, potentially identifying patterns humans miss or synthesizing information more efficiently. Early research shows multimodal AI can outperform single-modality models. However, such systems are more complex to develop, validate, and explain.'],
      ['Data management and storage', 'Multimodal imaging generates large data volumes. Storage, retrieval, and longitudinal comparison require robust infrastructure. DICOM standards exist but implementation varies. Telemedicine and remote interpretation depend on efficient data compression and transmission without losing diagnostic information.'],
      ['Clinical value proposition', 'Does multimodal imaging improve diagnostic accuracy, change management decisions, or improve patient outcomes compared to selective single-modality imaging? Evidence is emerging but incomplete. Cost-effectiveness depends on whether comprehensive imaging adds value beyond targeted modality selection based on clinical context.']
    ]
  },
  
  // NEW ARTICLE 17: Retinal Vascular Disease - Clinical
  {
    slug: 'retinal-vascular-disease',
    category: 'Clinical',
    tag: 'CLINICAL EVIDENCE',
    title: 'Retinal Vascular Occlusions: Imaging, Treatment, and Outcomes',
    dek: 'Branch and central retinal vein occlusions cause sudden vision loss. Modern imaging and anti-VEGF therapy have transformed management, but outcomes vary.',
    read: '11 min',
    evidence: 'Supported',
    date: 'August 11, 2026',
    image: '/images/research/retinal-branch-occlusion-angiography.webp',
    imageAlt: 'Retinal angiography showing vascular pathology and occlusion patterns',
    takeaway: 'Retinal vein occlusions cause vision loss through macular edema and ischemia. Anti-VEGF injections significantly improve visual outcomes compared to observation or laser in clinical trials. OCT guides treatment decisions; OCTA provides additional ischemia assessment. Persistent edema, ischemic complications, and treatment burden remain challenges.',
    sections: [
      ['Pathophysiology and types', 'Retinal vein occlusions occur when retinal veins become blocked, typically at arteriovenous crossings (branch RVO) or at the lamina cribrosa (central RVO). Thrombosis leads to hemorrhages, edema, and potentially ischemia. Risk factors include hypertension, cardiovascular disease, and glaucoma. BRVO affects sectoral retina; CRVO affects the entire retina.'],
      ['Clinical presentation', 'Patients present with sudden, painless vision loss or visual field defects. Fundus exam shows hemorrhages, dilated tortuous veins, cotton-wool spots, and edema in the affected area. OCT confirms macular edema and quantifies severity. Visual acuity at presentation and degree of ischemia influence prognosis.'],
      ['The role of anti-VEGF therapy', 'Randomized controlled trials (CRUISE for CRVO, BRAVO for BRVO, and others) demonstrated that anti-VEGF injections significantly improve visual acuity and reduce macular edema compared to observation or laser. Ranibizumab, aflibercept, and brolucizumab are FDA-approved. Anti-VEGF became first-line therapy for macular edema from RVO.'],
      ['Treatment patterns and burden', 'Many patients require multiple injections over months to years to control edema. Treatment intervals can sometimes be extended using treat-and-extend or pro re nata protocols. Some patients respond dramatically; others have persistent edema despite frequent injections. Predictors of treatment response are imperfect.'],
      ['Corticosteroid alternatives', 'Intravitreal corticosteroid implants (dexamethasone, fluocinolone) provide longer-duration edema control but carry risks of cataract and glaucoma. They are often used in pseudophakic patients, those with incomplete anti-VEGF response, or when frequent monitoring is infeasible. Comparative effectiveness versus anti-VEGF is context-dependent.'],
      ['Ischemia and complications', 'Ischemic CRVO can develop neovascular glaucoma, a sight-threatening complication requiring prompt panretinal photocoagulation or anti-VEGF treatment. OCTA may enable earlier ischemia detection than fluorescein angiography. Wide-field imaging documents peripheral ischemia. Close monitoring is essential in ischemic cases.'],
      ['Imaging for treatment decisions', 'OCT-measured central retinal thickness guides treatment initiation and monitors response. Qualitative fluid assessment (intraretinal vs subretinal) may influence treatment choice. OCTA assesses macular perfusion and can detect areas of capillary dropout. Autofluorescence may reveal chronic RPE changes in long-standing cases.'],
      ['Long-term outcomes', 'Many patients achieve significant vision improvement, but recovery to baseline acuity is variable. Chronic edema, permanent macular damage, and persistent ischemia limit outcomes in some cases. Natural history is variable—some RVOs resolve spontaneously (more common in BRVO); others progress. Early treatment and close monitoring optimize outcomes but cannot guarantee full recovery.']
    ]
  },
  
  // NEW ARTICLE 18: Widefield Imaging - Innovation (Expanded)
  {
    slug: 'ultra-widefield-imaging-expanded',
    category: 'Innovation',
    tag: 'INNOVATION SPOTLIGHT',
    title: 'Ultra-Widefield Retinal Imaging: Clinical Applications and Limitations',
    dek: 'Imaging systems that capture 200 degrees of retina provide documentation and diagnostic information impossible with conventional photography—but artifacts and interpretation challenges persist.',
    read: '10 min',
    evidence: 'Supported',
    date: 'August 11, 2026',
    image: '/images/clinical/retinal-scanner-in-clinic.webp',
    imageAlt: 'Clinical retinal imaging equipment in active use',
    takeaway: 'Ultra-widefield imaging extends retinal visualization far into the periphery, useful for diabetic retinopathy, retinal detachment, and peripheral lesions. However, peripheral distortion, eyelash artifacts, image quality variation, and questions about clinical significance of peripheral-only findings create interpretation challenges.',
    sections: [
      ['The conventional imaging limitation', 'Standard fundus photography captures roughly 30-50 degrees of central retina (7-disk-diameter field). Peripheral retina requires indirect ophthalmoscopy or multiple montaged photos, both time-consuming and examiner-dependent. Many peripheral lesions go undocumented.'],
      ['Widefield and ultra-widefield systems', 'Widefield systems image 80-120 degrees; ultra-widefield (Optos and others) capture up to 200 degrees in a single image, encompassing far peripheral retina. This requires specialized optics and often scanning laser technology. Some systems image through undilated pupils, improving workflow and patient comfort.'],
      ['Diabetic retinopathy applications', 'Peripheral retinal lesions in diabetic retinopathy may predict disease progression and response to treatment. Ultra-widefield imaging documents peripheral hemorrhages, microaneurysms, and neovascularization not visible on standard photos. Some studies suggest widefield imaging changes DR severity classification in a subset of patients, potentially affecting management decisions.'],
      ['Retinal detachment and peripheral lesions', 'Ultra-widefield imaging is valuable for documenting retinal tears, detachments, lattice degeneration, and retinoschisis extent. In emergency settings, it enables rapid peripheral retina assessment. Longitudinal comparison helps monitor progression or post-surgical outcomes. However, imaging cannot fully replace indirect ophthalmoscopy—3D view and dynamic examination remain important.'],
      ['Image artifacts and distortion', 'Peripheral retina appears compressed and distorted on widefield images due to the spherical eye surface being projected onto a flat image. This distortion complicates lesion size and shape assessment. Eyelash artifacts, lid interference, and media opacity are more prominent peripherally. Image quality often decreases toward image edges.'],
      ['Interpretation and clinical significance', 'Not all peripheral findings are clinically significant. Determining which require treatment or close monitoring versus which can be observed is a clinical judgment challenge. Overcapturing peripheral detail could lead to overtreatment or unnecessary anxiety. Evidence for clinical significance of peripheral-only findings is still accumulating.'],
      ['Fluorescein angiography widefield', 'Widefield FA extends to peripheral vasculature and ischemia visualization, useful in uveitis, vascular occlusions, and diabetic retinopathy. However, widefield FA requires dye injection and specialized equipment. It provides functional information (leakage, perfusion) that structural widefield photos cannot.'],
      ['Cost, access, and clinical adoption', 'Widefield systems are more expensive than conventional cameras. Whether widefield imaging should be routine for all patients or reserved for specific indications is debated. Cost-effectiveness analyses are limited. In practice, many clinics use conventional imaging for most patients and widefield imaging for selected cases—diabetic retinopathy surveillance, peripheral pathology, and post-surgical monitoring.']
    ]
  },
  
  ...industryArticles
];

export const getArticle = slug => articles.find(a => a.slug === slug);
export const getTopic = slug => topics.find(t => t.slug === slug);
