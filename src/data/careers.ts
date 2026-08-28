export interface SalaryRange {
  entryLevel: string;
  seniorLevel: string;
}

export type IndustryFit = 'Perfect' | 'Good' | 'Moderate' | 'Niche';
export type MarketDemand = 'Very High' | 'High' | 'Moderate' | 'Low';
export type GlobalReach = 'Worldwide' | 'Regional' | 'Local' | 'Limited';
export type AIResilience = 'Very Strong' | 'Strong' | 'Moderate' | 'Vulnerable';

export interface Career {
  id: string;
  title: string;
  emoji: string;
  category: 'Technology' | 'Design' | 'Business' | 'Healthcare' | 'Education' | 'Sustainability' | 'Creative' | 'Sports & Wellness' | 'Infrastructure' | 'Law & Government' | 'Public Service';
  tagline: string;
  description: string;
  dayToDayActivities: string[];
  keySkills: string[];
  competitiveExams: string[];
  salaryRanges: SalaryRange;
  globalOpportunities: string;
  roadmapSteps: string[];
  industryFit: IndustryFit;
  marketDemand: MarketDemand;
  globalReach: GlobalReach;
  aiResilience: AIResilience;
}

export const CATEGORIES = [
  'All', 'Technology', 'Design', 'Business', 'Healthcare', 'Education', 'Sustainability', 'Creative', 'Sports & Wellness', 'Infrastructure', 'Law & Government', 'Public Service'
] as const;

export const careers: Career[] = [
  {
    id: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    emoji: '🤖',
    category: 'Technology',
    tagline: 'Architecting the future of intelligent systems in India.',
    description: 'Developing algorithms that allow computers to learn and make decisions from data, powering India\'s tech revolution.',
    dayToDayActivities: ['Optimizing neural networks', 'Large-scale data processing', 'Model evaluation', 'Cloud deployment'],
    keySkills: ['Python', 'PyTorch', 'Linear Algebra', 'Algorithms'],
    competitiveExams: ['JEE Advanced', 'GATE', 'BITSAT'],
    salaryRanges: { entryLevel: '₹8L - ₹15L', seniorLevel: '₹45L - ₹1.2Cr+' },
    globalOpportunities: 'Extreme demand in US, EU, and India\'s tech hubs like Bangalore and Hyderabad.',
    roadmapSteps: [
      'Grade 9-10: Master Math; start learning Python coding.',
      'Grade 11-12: Choose PCM stream; focus on JEE/Entrance preparation.',
      'Undergrad: B.Tech in Computer Science from a Tier-1/2 college (IIT/NIT/IIIT).',
      'Specialization: Focus on Calculus, Statistics, and Data Structures.',
      'Internship: Work with Indian unicorns or MNCs.',
      'Portfolio: Build projects on GitHub using real-world datasets.',
      'Career: Join a high-growth AI startup or lead tech firm.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'Very High',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'school-college-teacher',
    title: 'School/College Teacher',
    emoji: '👨‍🏫',
    category: 'Education',
    tagline: 'Molding the minds of the next generation.',
    description: 'Specializing in subjects like Maths, Physics, Chemistry, Economics, or Business Studies for schools and colleges.',
    dayToDayActivities: ['Delivering lectures', 'Curriculum planning', 'Mentoring students'],
    keySkills: ['Subject Expertise', 'Communication', 'Patience'],
    competitiveExams: ['TET', 'CTET', 'NET'],
    salaryRanges: { entryLevel: '₹3L - ₹6L', seniorLevel: '₹12L - ₹25L' },
    globalOpportunities: 'Opportunities in international schools and global ed-tech platforms.',
    roadmapSteps: [
      'Grade 12: Score high in your subject of interest.',
      'Undergrad: Graduate in your core subject (B.Sc/B.Com/B.A).',
      'Professional: Complete B.Ed for school teaching.',
      'Entrance: Clear CTET or State TET exams.',
      'Higher Ed: Clear UGC NET for College Professorship.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'High',
    globalReach: 'Regional',
    aiResilience: 'Very Strong'
  },
  {
    id: 'general-physician',
    title: 'General Physician (MBBS)',
    emoji: '👨‍⚕️',
    category: 'Healthcare',
    tagline: 'The first line of defense in Indian healthcare.',
    description: 'Providing primary care, diagnosis, and treatment in clinics and hospitals across India.',
    dayToDayActivities: ['Patient consultation', 'Diagnostic testing', 'Preventive care'],
    keySkills: ['Clinical Diagnosis', 'Pharmacology', 'Empathy'],
    competitiveExams: ['NEET-UG', 'NEXT'],
    salaryRanges: { entryLevel: '₹7L - ₹12L', seniorLevel: '₹25L - ₹50L' },
    globalOpportunities: 'High demand in UK, Middle East, and Australia.',
    roadmapSteps: [
      'Grade 11-12: Choose PCB stream.',
      'Entrance: Clear NEET-UG with a top rank.',
      'MBBS: Complete 4.5 years of study + 1 year internship.',
      'Registration: Register with the National Medical Commission (NMC).',
      'Practice: Start in Government or Private Hospitals.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'Very High',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'specialized-doctor',
    title: 'Specialized Doctor',
    emoji: '🩺',
    category: 'Healthcare',
    tagline: 'Expertise in specialized medical domains.',
    description: 'Covers Cardiologists, Orthopedic Surgeons, Dermatologists, Pediatricians, and more.',
    dayToDayActivities: ['Specialized surgery', 'Complex diagnosis', 'In-patient management'],
    keySkills: ['Advanced Diagnosis', 'Surgery', 'Patient Care'],
    competitiveExams: ['NEET-UG', 'NEET-PG', 'NEET-SS'],
    salaryRanges: { entryLevel: '₹15L - ₹25L', seniorLevel: '₹60L - ₹2.5Cr+' },
    globalOpportunities: 'Extremely high demand globally.',
    roadmapSteps: [
      'MBBS: Complete your undergraduate medical degree.',
      'Entrance: Clear NEET-PG with a high rank.',
      'MD/MS: Complete 3 years of post-graduation.',
      'Super-specialty: Pursue DM/MCh for advanced fields.',
      'Practice: Join multi-specialty hospitals.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'Very High',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'neurosurgeon',
    title: 'Neurosurgeon',
    emoji: '🧠',
    category: 'Healthcare',
    tagline: 'Mastering the complexity of the human brain.',
    description: 'Expertise in surgical interventions for the brain and spinal cord.',
    dayToDayActivities: ['Complex brain surgery', 'Spinal reconstruction'],
    keySkills: ['Surgical Precision', 'Neuroanatomy', 'Resilience'],
    competitiveExams: ['NEET-UG', 'NEET-PG', 'NEET-SS'],
    salaryRanges: { entryLevel: '₹25L - ₹40L', seniorLevel: '₹1Cr - ₹3Cr+' },
    globalOpportunities: 'Globally recognized expertise.',
    roadmapSteps: [
      'MBBS: Complete your basic medical degree.',
      'NEET-PG: Secure a rank for Master of Surgery (MS).',
      'NEET-SS: Qualify for M.Ch in Neurosurgery.',
      'M.Ch: Complete 3 years of intensive training.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'Very High',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'radiologist',
    title: 'Radiologist',
    emoji: '🩻',
    category: 'Healthcare',
    tagline: 'The vision behind every diagnosis.',
    description: 'Using imaging technologies like MRI and CT to diagnose illnesses.',
    dayToDayActivities: ['Image interpretation', 'Interventional procedures'],
    keySkills: ['Visual Analysis', 'Diagnostic Logic', 'Reporting'],
    competitiveExams: ['NEET-UG', 'NEET-PG'],
    salaryRanges: { entryLevel: '₹15L - ₹25L', seniorLevel: '₹60L - ₹1.5Cr' },
    globalOpportunities: 'High potential for teleradiology.',
    roadmapSteps: [
      'MBBS: Complete your medical degree.',
      'NEET-PG: Clear with a high rank for MD Radiology.',
      'MD/DNB: 3 years of specialization.',
      'Practice: Work in diagnostic centers or hospitals.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'Very High',
    globalReach: 'Worldwide',
    aiResilience: 'Moderate'
  },
  {
    id: 'physiotherapist',
    title: 'Physiotherapist',
    emoji: '💪',
    category: 'Healthcare',
    tagline: 'Restoring movement and function.',
    description: 'Treating physical issues caused by injury or aging through therapy.',
    dayToDayActivities: ['Exercise programming', 'Manual therapy'],
    keySkills: ['Kinesiology', 'Empathy', 'Stamina'],
    competitiveExams: ['State CET'],
    salaryRanges: { entryLevel: '₹3L - ₹6L', seniorLevel: '₹12L - ₹25L' },
    globalOpportunities: 'High demand in sports medicine.',
    roadmapSteps: [
      'BPT: Complete 4.5 years of Bachelor of Physiotherapy.',
      'Internship: 6 months of clinical training.',
      'Registration: Register with state associations.',
      'Practice: Join hospitals or sports teams.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'registered-dietician',
    title: 'Clinical Dietician',
    emoji: '🥗',
    category: 'Healthcare',
    tagline: 'Healing through nutritional science.',
    description: 'Creating specialized nutrition plans for medical conditions.',
    dayToDayActivities: ['Nutritional assessment', 'Meal planning'],
    keySkills: ['Bio-chemistry', 'Meal Management', 'Counseling'],
    competitiveExams: ['RD Exam'],
    salaryRanges: { entryLevel: '₹3L - ₹5L', seniorLevel: '₹10L - ₹20L' },
    globalOpportunities: 'High demand in wellness industries.',
    roadmapSteps: [
      'B.Sc: Graduate in Nutrition/Dietetics.',
      'Post-Grad: Complete M.Sc in Food and Nutrition.',
      'Internship: 6 months in an IDA-recognized hospital.',
      'Certification: Clear the RD exam.'
    ],
    industryFit: 'Good',
    marketDemand: 'Moderate',
    globalReach: 'Regional',
    aiResilience: 'Strong'
  },
  {
    id: 'army-officer',
    title: 'Army Officer',
    emoji: '🎖️',
    category: 'Public Service',
    tagline: 'Serving the nation with honor and courage.',
    description: 'Leading troops in defense of national borders.',
    dayToDayActivities: ['Tactical planning', 'Troop management', 'Drills'],
    keySkills: ['Leadership', 'Strategic Thinking', 'Fitness'],
    competitiveExams: ['NDA', 'CDS'],
    salaryRanges: { entryLevel: '₹8L - ₹12L', seniorLevel: '₹25L - ₹35L' },
    globalOpportunities: 'UN Peacekeeping missions.',
    roadmapSteps: [
      'Grade 12: Clear NDA exam.',
      'Graduation: Clear CDS exam.',
      'SSB: Clear the 5-day selection interview.',
      'Academy: Train at IMA or OTA.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'fine-artist',
    title: 'Fine Artist',
    emoji: '🖼️',
    category: 'Creative',
    tagline: 'Expressing vision through physical media.',
    description: 'Creating paintings and sculptures for galleries.',
    dayToDayActivities: ['Conceptualizing art', 'Exhibiting work'],
    keySkills: ['Creativity', 'Technique', 'Curation'],
    competitiveExams: ['BFA Entrance'],
    salaryRanges: { entryLevel: '₹2L - ₹5L', seniorLevel: '₹15L - ₹50L+' },
    globalOpportunities: 'Global art galleries.',
    roadmapSteps: [
      'Grade 12: Develop a portfolio.',
      'BFA: Complete Bachelor of Fine Arts.',
      'Studio: Set up a workspace and experiment.',
      'Gallery: Start exhibiting at local fairs.'
    ],
    industryFit: 'Niche',
    marketDemand: 'Moderate',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'photographer',
    title: 'Professional Photographer',
    emoji: '📸',
    category: 'Creative',
    tagline: 'Capturing moments that tell a story.',
    description: 'Specializing in Fashion, Wedding, or Commercial photography.',
    dayToDayActivities: ['Photoshoots', 'Photo editing', 'Client management'],
    keySkills: ['Composition', 'Lighting', 'Post-processing'],
    competitiveExams: ['Self-taught / Diploma'],
    salaryRanges: { entryLevel: '₹3L - ₹6L', seniorLevel: '₹20L - ₹60L' },
    globalOpportunities: 'Global commissions and freelance.',
    roadmapSteps: [
      'Skill: Learn the basics of DSLR cameras.',
      'Assist: Work under an established photographer.',
      'Portfolio: Create a professional Instagram profile.',
      'Equipment: Invest in professional gear.'
    ],
    industryFit: 'Good',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Strong'
  },
  {
    id: 'actor',
    title: 'Professional Actor',
    emoji: '🎭',
    category: 'Creative',
    tagline: 'Bringing characters to life on screen.',
    description: 'Performing in Films, Web Series, and Theatre.',
    dayToDayActivities: ['Auditions', 'Rehearsals', 'Filming'],
    keySkills: ['Emotional Range', 'Voice Training', 'Patience'],
    competitiveExams: ['NSD/FTII Entrance'],
    salaryRanges: { entryLevel: '₹1L - ₹5L', seniorLevel: '₹50L - ₹10Cr+' },
    globalOpportunities: 'Global streaming platforms.',
    roadmapSteps: [
      'Theatre: Join a local group early.',
      'Education: Degree from NSD (Delhi) or FTII (Pune).',
      'Portfolio: Get professional headshots.',
      'Audition: Move to Mumbai/Chennai; register with casting directors.'
    ],
    industryFit: 'Moderate',
    marketDemand: 'Moderate',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'writer',
    title: 'Creative Writer',
    emoji: '✍️',
    category: 'Creative',
    tagline: 'Crafting narratives that inspire.',
    description: 'Writing Screenplays, Novels, or Creative Content.',
    dayToDayActivities: ['Drafting stories', 'Editing', 'Pitching'],
    keySkills: ['Storytelling', 'Grammar', 'Research'],
    competitiveExams: ['Self-taught'],
    salaryRanges: { entryLevel: '₹3L - ₹6L', seniorLevel: '₹15L - ₹40L' },
    globalOpportunities: 'Global publishing.',
    roadmapSteps: [
      'Read: Develop a deep reading habit.',
      'Blog: Start publishing online.',
      'Undergrad: BA in English or Journalism.',
      'Project: Finish a manuscript and pitch to publishers.'
    ],
    industryFit: 'Good',
    marketDemand: 'Moderate',
    globalReach: 'Worldwide',
    aiResilience: 'Moderate'
  },
  {
    id: 'social-media-manager',
    title: 'Social Media Manager',
    emoji: '📱',
    category: 'Business',
    tagline: 'Driving brand growth through digital communities.',
    description: 'Managing brand presence and strategy across platforms.',
    dayToDayActivities: ['Content planning', 'Analytics', 'Engagement'],
    keySkills: ['Digital Marketing', 'Copywriting', 'Analytics'],
    competitiveExams: ['Digital Marketing Certs'],
    salaryRanges: { entryLevel: '₹4L - ₹8L', seniorLevel: '₹20L - ₹45L' },
    globalOpportunities: 'High remote work potential.',
    roadmapSteps: [
      'Grade 12: Stay active and analytical on social media.',
      'Undergrad: BBA/BMS or Journalism.',
      'Internship: Work with a startup or agency.',
      'Portfolio: Manage and grow a personal or client page.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'Very High',
    globalReach: 'Worldwide',
    aiResilience: 'Strong'
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    emoji: '🌐',
    category: 'Technology',
    tagline: 'Mastering the entire web architecture.',
    description: 'Building both client and server-side logic.',
    dayToDayActivities: ['Frontend (React)', 'Backend (NodeJS)', 'Database design'],
    keySkills: ['JavaScript', 'NodeJS', 'React', 'SQL'],
    competitiveExams: ['JEE', 'BITSAT'],
    salaryRanges: { entryLevel: '₹6L - ₹12L', seniorLevel: '₹30L - ₹80L' },
    globalOpportunities: 'Extreme demand globally.',
    roadmapSteps: [
      'Grade 10-12: Master HTML, CSS, and JS.',
      'Undergrad: B.Tech in CS or BCA.',
      'Portfolio: Build 5-10 projects on GitHub.',
      'Internship: Work with a tech startup.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'Very High',
    globalReach: 'Worldwide',
    aiResilience: 'Strong'
  },
  {
    id: 'cloud-solutions-architect',
    title: 'Cloud Architect',
    emoji: '☁️',
    category: 'Technology',
    tagline: 'Designing global-scale digital infrastructure.',
    description: 'Architecting secure solutions using AWS, Azure, or GCP.',
    dayToDayActivities: ['Cloud design', 'Security architecture', 'Cost optimization'],
    keySkills: ['AWS/Azure', 'DevOps', 'Networking'],
    competitiveExams: ['Cloud Certifications'],
    salaryRanges: { entryLevel: '₹10L - ₹18L', seniorLevel: '₹40L - ₹1Cr' },
    globalOpportunities: 'High demand in tech markets.',
    roadmapSteps: [
      'Undergrad: B.Tech in CS/IT.',
      'Work: Start as a Software Engineer.',
      'Skill: Master Docker and Kubernetes.',
      'Certification: Get certified in AWS/Azure.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'Very High',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'investment-banker',
    title: 'Investment Banker',
    emoji: '📊',
    category: 'Business',
    tagline: 'Architecting high-stakes corporate finance deals.',
    description: 'Handling M&A, IPOs, and corporate restructuring.',
    dayToDayActivities: ['Financial modeling', 'Due diligence', 'Client pitches'],
    keySkills: ['Finance', 'Excel', 'Negotiation'],
    competitiveExams: ['CAT', 'CFA'],
    salaryRanges: { entryLevel: '₹15L - ₹30L', seniorLevel: '₹1Cr - ₹5Cr+' },
    globalOpportunities: 'High in global hubs.',
    roadmapSteps: [
      'Undergrad: B.Com (SRCC) or B.Tech (IIT).',
      'MBA/CFA: IIM (A/B/C) or CFA levels.',
      'Internship: Work at top banks (Goldman, JPM).',
      'Career: Join as an Analyst.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Moderate'
  },
  {
    id: 'management-consultant',
    title: 'Management Consultant',
    emoji: '💼',
    category: 'Business',
    tagline: 'Optimizing corporate performance and strategy.',
    description: 'Advising management on improving operations.',
    dayToDayActivities: ['Problem solving', 'Data synthesis', 'Presentations'],
    keySkills: ['Critical Thinking', 'Communication', 'Analysis'],
    competitiveExams: ['CAT', 'GMAT'],
    salaryRanges: { entryLevel: '₹12L - ₹25L', seniorLevel: '₹60L - ₹2Cr+' },
    globalOpportunities: 'Extremely high mobility.',
    roadmapSteps: [
      'Undergrad: Top-tier graduation (IIT/SRCC).',
      'MBA: Pursue from IIM or ISB.',
      'Recruitment: Clear interviews with MBB firms.',
      'Career: Start as an Associate.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'Very High',
    globalReach: 'Worldwide',
    aiResilience: 'Moderate'
  },
  {
    id: 'police-officer',
    title: 'Police Officer',
    emoji: '👮',
    category: 'Public Service',
    tagline: 'Enforcing law and protecting the public.',
    description: 'Maintaining order and investigating crimes.',
    dayToDayActivities: ['Patrolling', 'Investigation', 'Filing FIRs'],
    keySkills: ['Integrity', 'Physical Agility', 'Law Knowledge'],
    competitiveExams: ['UPSC (IPS)', 'State PSC'],
    salaryRanges: { entryLevel: '₹5L - ₹9L', seniorLevel: '₹18L - ₹30L' },
    globalOpportunities: 'Primarily local.',
    roadmapSteps: [
      'Graduation: Complete a degree in any stream.',
      'Entrance: Clear UPSC or State exams.',
      'Training: Complete training at NPA Hyderabad.',
      'Career: Serve as DSP or SP.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'Very High',
    globalReach: 'Local',
    aiResilience: 'Very Strong'
  },
  {
    id: 'youtuber-streamer',
    title: 'YouTuber / Streamer',
    emoji: '📽️',
    category: 'Creative',
    tagline: 'Building a digital empire through content.',
    description: 'Creating gaming or educational content for global audiences.',
    dayToDayActivities: ['Scripting', 'Editing', 'Live streaming'],
    keySkills: ['Content Strategy', 'Video Production', 'Community Building'],
    competitiveExams: ['Self-taught'],
    salaryRanges: { entryLevel: '₹1L - ₹5L', seniorLevel: '₹50L - ₹10Cr+' },
    globalOpportunities: 'Audience can be global.',
    roadmapSteps: [
      'Grade 9-12: Start creating content on a niche.',
      'Skill: Learn video editing (Premiere Pro).',
      'Consistency: Build a base audience.',
      'Growth: Collaborate and diversify into merchandise.'
    ],
    industryFit: 'Good',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Strong'
  },
  {
    id: 'game-developer-designer',
    title: 'Game Developer / Designer',
    emoji: '🎮',
    category: 'Technology',
    tagline: 'Crafting interactive virtual experiences.',
    description: 'Building video games for Mobile, PC, and Consoles.',
    dayToDayActivities: ['Gameplay coding', 'Level design', 'Playtesting'],
    keySkills: ['Unity/Unreal', 'C# / C++', 'Math'],
    competitiveExams: ['JEE', 'NID DAT'],
    salaryRanges: { entryLevel: '₹5L - ₹10L', seniorLevel: '₹25L - ₹60L' },
    globalOpportunities: 'Remote work for global studios.',
    roadmapSteps: [
      'Grade 11-12: PCM stream.',
      'Undergrad: B.Tech in CS or B.Des in Game Design.',
      'Portfolio: Publish small games on itch.io.',
      'Specialization: Master Unity or Unreal.'
    ],
    industryFit: 'Good',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Moderate'
  },
  {
    id: 'food-critic-blogger',
    title: 'Food Critic / Blogger',
    emoji: '🍲',
    category: 'Creative',
    tagline: 'Decoding the culinary landscape.',
    description: 'Reviewing restaurants and exploring cuisines.',
    dayToDayActivities: ['Food tasting', 'Photography', 'Writing reviews'],
    keySkills: ['Palate', 'Writing', 'Photography'],
    competitiveExams: ['Journalism Degree'],
    salaryRanges: { entryLevel: '₹2L - ₹5L', seniorLevel: '₹15L - ₹40L' },
    globalOpportunities: 'Global food tourism.',
    roadmapSteps: [
      'Undergrad: Degree in Journalism or Hotel Management.',
      'Blog: Start a personal food blog.',
      'Skill: Learn professional food photography.',
      'Career: Become a lead food critic.'
    ],
    industryFit: 'Niche',
    marketDemand: 'Moderate',
    globalReach: 'Regional',
    aiResilience: 'Very Strong'
  },
  {
    id: 'fashion-designer',
    title: 'Fashion Designer',
    emoji: '👗',
    category: 'Design',
    tagline: 'Defining the aesthetic of Indian and global fashion.',
    description: 'Designing clothing and accessories.',
    dayToDayActivities: ['Sketching', 'Fabric selection', 'Fashion shows'],
    keySkills: ['Creativity', 'Illustration', 'Textile Knowledge'],
    competitiveExams: ['NIFT Entrance', 'NID DAT'],
    salaryRanges: { entryLevel: '₹4L - ₹8L', seniorLevel: '₹20L - ₹1Cr+' },
    globalOpportunities: 'Global fashion capitals.',
    roadmapSteps: [
      'Entrance: Clear NIFT or NID exams.',
      'Undergrad: B.Des in Fashion Design.',
      'Internship: Work with top Indian designers.',
      'Job: Join a retail brand or launch your label.'
    ],
    industryFit: 'Good',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'animator',
    title: 'Animator',
    emoji: '🎨',
    category: 'Creative',
    tagline: 'Bringing characters and worlds to life.',
    description: 'Working on 2D/3D animation and VFX.',
    dayToDayActivities: ['Keyframing', 'Character rigging', 'VFX compositing'],
    keySkills: ['Maya / Blender', 'After Effects', 'Creativity'],
    competitiveExams: ['NID DAT'],
    salaryRanges: { entryLevel: '₹4L - ₹7L', seniorLevel: '₹15L - ₹45L' },
    globalOpportunities: 'Global VFX projects.',
    roadmapSteps: [
      'Course: Join an animation institute (MAAC).',
      'Undergrad: B.Des in Animation.',
      'Software: Master industry tools like Maya.',
      'Portfolio: Create a high-quality demo reel.'
    ],
    industryFit: 'Good',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Moderate'
  },
  {
    id: 'digital-designer-uiux',
    title: 'Digital Designer / UI-UX',
    emoji: '💻',
    category: 'Design',
    tagline: 'Designing seamless digital human experiences.',
    description: 'Creating user interfaces for apps and websites.',
    dayToDayActivities: ['User research', 'Prototyping in Figma'],
    keySkills: ['Figma', 'User Research', 'Visual Design'],
    competitiveExams: ['UCEED', 'NID DAT'],
    salaryRanges: { entryLevel: '₹7L - ₹12L', seniorLevel: '₹30L - ₹75L' },
    globalOpportunities: 'Digital product design is global.',
    roadmapSteps: [
      'Entrance: Clear UCEED/NID exams.',
      'Undergrad: B.Des in Interaction Design.',
      'Self-Learning: Master Figma and UX certs.',
      'Career: Join a tech giant as a Product Designer.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'Very High',
    globalReach: 'Worldwide',
    aiResilience: 'Strong'
  },
  {
    id: 'bank-manager',
    title: 'Bank Manager',
    emoji: '🏦',
    category: 'Business',
    tagline: 'Leading the financial operations of the community.',
    description: 'Managing retail banking and branch growth.',
    dayToDayActivities: ['Staff management', 'Credit appraisal', 'Compliance'],
    keySkills: ['Leadership', 'Finance', 'Communication'],
    competitiveExams: ['IBPS PO', 'SBI PO'],
    salaryRanges: { entryLevel: '₹6L - ₹10L', seniorLevel: '₹20L - ₹40L' },
    globalOpportunities: 'Primarily regional.',
    roadmapSteps: [
      'Undergrad: Graduation in any stream (Commerce preferred).',
      'Entrance: Prepare for IBPS or SBI PO exams.',
      'Training: Join as a Probationary Officer.',
      'Promotion: Move to Assistant Manager then Branch Manager.'
    ],
    industryFit: 'Good',
    marketDemand: 'High',
    globalReach: 'Regional',
    aiResilience: 'Moderate'
  },
  {
    id: 'accountant-ca',
    title: 'Accountant / CA',
    emoji: '📜',
    category: 'Business',
    tagline: 'The backbone of Indian business finance.',
    description: 'Chartered Accountants handle auditing and taxation.',
    dayToDayActivities: ['Auditing', 'Tax filing', 'Compliance'],
    keySkills: ['Auditing', 'Taxation', 'Analytical Thinking'],
    competitiveExams: ['CA Final (ICAI)'],
    salaryRanges: { entryLevel: '₹8L - ₹18L', seniorLevel: '₹40L - ₹1Cr+' },
    globalOpportunities: 'Demand in Dubai, Singapore, and Australia.',
    roadmapSteps: [
      'Foundation: Clear CA Foundation after Class 12.',
      'Inter: Clear CA Intermediate exams.',
      'Articleship: 3 years of mandatory practical training.',
      'Final: Clear CA Final to become a member of ICAI.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'Very High',
    globalReach: 'Worldwide',
    aiResilience: 'Strong'
  },
  {
    id: 'professional-singer-producer',
    title: 'Professional Singer / Producer',
    emoji: '🎤',
    category: 'Creative',
    tagline: 'Voicing the soul of Indian music.',
    description: 'Bollywood playback singing and music production.',
    dayToDayActivities: ['Recording sessions', 'Composition', 'Live shows'],
    keySkills: ['Vocal Mastery', 'Music Theory', 'DAW (Logic/Ableton)'],
    competitiveExams: ['Reality Shows / Music Degree'],
    salaryRanges: { entryLevel: '₹3L - ₹8L', seniorLevel: '₹50L - ₹5Cr+' },
    globalOpportunities: 'Global diaspora tours.',
    roadmapSteps: [
      'Training: Formal training in Classical/Western music.',
      'College: Join music societies.',
      'Production: Learn production software.',
      'Breakthrough: Release indie singles or audition for movies.'
    ],
    industryFit: 'Moderate',
    marketDemand: 'Moderate',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'sports-coach',
    title: 'Sports Coach',
    emoji: '🏏',
    category: 'Sports & Wellness',
    tagline: 'Developing the athletes of the future.',
    description: 'Coaching at Grassroots or National levels.',
    dayToDayActivities: ['Training planning', 'Skill drills', 'Mentoring'],
    keySkills: ['Strategic Analysis', 'Leadership', 'Fitness'],
    competitiveExams: ['Diploma (NSNIS)'],
    salaryRanges: { entryLevel: '₹3L - ₹7L', seniorLevel: '₹20L - ₹80L' },
    globalOpportunities: 'Cricket coaches have high demand.',
    roadmapSteps: [
      'Undergrad: Graduate in Physical Education (B.P.Ed).',
      'Professional: Diploma from NSNIS Patiala.',
      'Experience: Start as an Assistant Coach.',
      'Career: Become a National Team Coach.'
    ],
    industryFit: 'Moderate',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'blockchain-developer',
    title: 'Blockchain Developer',
    emoji: '⛓️',
    category: 'Technology',
    tagline: 'Building decentralized futures.',
    description: 'Creating secure, distributed ledger protocols.',
    dayToDayActivities: ['Writing smart contracts', 'Protocol optimization'],
    keySkills: ['Solidity', 'Cryptography', 'P2P Networking'],
    competitiveExams: ['Web3 Certifications'],
    salaryRanges: { entryLevel: '₹6L - ₹12L', seniorLevel: '₹30L - ₹80L' },
    globalOpportunities: 'Remote-first, global startups.',
    roadmapSteps: [
      'Undergrad: CS degree from a top Indian college.',
      'Project: Launch a smart contract on a testnet.',
      'Internship: Join a Web3 startup.',
      'Advanced: Master ZK-proofs.'
    ],
    industryFit: 'Good',
    marketDemand: 'Moderate',
    globalReach: 'Worldwide',
    aiResilience: 'Moderate'
  },
  {
    id: 'software-tester',
    title: 'Software QA Tester',
    emoji: '🐛',
    category: 'Technology',
    tagline: 'Hunting bugs for a flawless user experience.',
    description: 'Ensuring software quality through testing.',
    dayToDayActivities: ['Writing test scripts', 'Manual bug hunting'],
    keySkills: ['Selenium', 'Jira', 'Analysis'],
    competitiveExams: ['ISTQB Foundation'],
    salaryRanges: { entryLevel: '₹4L - ₹7L', seniorLevel: '₹15L - ₹35L' },
    globalOpportunities: 'Essential in every software lifecycle.',
    roadmapSteps: [
      'Undergrad: B.Tech or BCA degree.',
      'Internship: Join a QA team.',
      'Certification: Get ISTQB certified.',
      'Specialization: Master Automation tools.'
    ],
    industryFit: 'Good',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Strong'
  },
  {
    id: 'cybersecurity-architect',
    title: 'Cybersecurity Architect',
    emoji: '🔐',
    category: 'Technology',
    tagline: 'Designing unbreakable digital fortresses.',
    description: 'Architecting secure network systems.',
    dayToDayActivities: ['Vulnerability assessments', 'Zero Trust design'],
    keySkills: ['Networking', 'Cryptography', 'Cloud Security'],
    competitiveExams: ['CISSP', 'CEH'],
    salaryRanges: { entryLevel: '₹8L - ₹14L', seniorLevel: '₹35L - ₹80L' },
    globalOpportunities: 'High in Defense and Banking.',
    roadmapSteps: [
      'Undergrad: B.Tech in CS/Cybersecurity.',
      'Certification: Clear CEH certifications.',
      'Advanced: Obtain CISSP after experience.',
      'Career: Lead security design for banks.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'Very High',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'urban-planner',
    title: 'Urban Planner',
    emoji: '🏙️',
    category: 'Infrastructure',
    tagline: 'Designing the cities of tomorrow.',
    description: 'Developing plans for land and public facilities.',
    dayToDayActivities: ['Land use analysis', 'Strategic policy'],
    keySkills: ['GIS', 'Urban Design', 'Sociology'],
    competitiveExams: ['GATE Architecture'],
    salaryRanges: { entryLevel: '₹5L - ₹8L', seniorLevel: '₹18L - ₹40L' },
    globalOpportunities: 'High in rapidly developing regions.',
    roadmapSteps: [
      'Entrance: Clear B.Arch or B.Plan entrances.',
      'Undergrad: Degree in Urban Planning.',
      'Internship: Work with Municipal Corporations.',
      'Career: Join a planning firm.'
    ],
    industryFit: 'Good',
    marketDemand: 'Moderate',
    globalReach: 'Regional',
    aiResilience: 'Strong'
  },
  {
    id: 'mechanical-engineer',
    title: 'Mechanical Engineer',
    emoji: '⚙️',
    category: 'Infrastructure',
    tagline: 'Mastering the world of moving parts.',
    description: 'Designing and manufacturing machines.',
    dayToDayActivities: ['CAD design', 'Thermal analysis'],
    keySkills: ['Thermodynamics', 'SolidWorks', 'Calculus'],
    competitiveExams: ['JEE Advanced', 'GATE'],
    salaryRanges: { entryLevel: '₹5L - ₹9L', seniorLevel: '₹20L - ₹50L' },
    globalOpportunities: 'Essential for global industrial sectors.',
    roadmapSteps: [
      'Undergrad: B.Tech in Mechanical from IIT/NIT.',
      'Project: Build a working robot prototype.',
      'Internship: Work in an automotive unit.',
      'Career: Join an aerospace or heavy engineering firm.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Strong'
  },
  {
    id: 'biotech-researcher',
    title: 'Biotech Researcher',
    emoji: '🧬',
    category: 'Healthcare',
    tagline: 'Engineering the future of life.',
    description: 'Using biological systems to develop healthcare products.',
    dayToDayActivities: ['Laboratory experiments', 'Genetic sequencing'],
    keySkills: ['Genetics', 'Data Analysis', 'Laboratory Tech'],
    competitiveExams: ['NEET', 'GAT-B'],
    salaryRanges: { entryLevel: '₹4L - ₹8L', seniorLevel: '₹20L - ₹55L' },
    globalOpportunities: 'High in pharma-hubs.',
    roadmapSteps: [
      'Undergrad: B.Tech/B.Sc in Biotechnology.',
      'Post-Grad: Clear GAT-B for Masters.',
      'Career: Join a biotech firm like Serum Institute.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'civil-servant',
    title: 'Civil Servant (IAS/IPS)',
    emoji: '🏛️',
    category: 'Public Service',
    tagline: 'Architecting the nation\'s administrative soul.',
    description: 'Implementing government policies.',
    dayToDayActivities: ['Policy implementation', 'District administration'],
    keySkills: ['Leadership', 'Ethics', 'General Studies'],
    competitiveExams: ['UPSC CSE'],
    salaryRanges: { entryLevel: '₹7L - ₹10L', seniorLevel: '₹25L - ₹35L' },
    globalOpportunities: 'IFS provides global postings.',
    roadmapSteps: [
      'Graduation: Any degree.',
      'Preparation: Intense UPSC preparation.',
      'Entrance: Clear Prelims, Mains, and Interview.',
      'Career: Serve as a District Collector.'
    ],
    industryFit: 'Good',
    marketDemand: 'High',
    globalReach: 'Local',
    aiResilience: 'Very Strong'
  },
  {
    id: 'corporate-lawyer',
    title: 'Corporate Lawyer',
    emoji: '⚖️',
    category: 'Law & Government',
    tagline: 'Navigating the complex legal world of business.',
    description: 'Advising corporations on legal deal structures.',
    dayToDayActivities: ['Drafting contracts', 'Mergers & Acquisitions'],
    keySkills: ['Analytical reasoning', 'Negotiation', 'Legal Writing'],
    competitiveExams: ['CLAT', 'AILET'],
    salaryRanges: { entryLevel: '₹12L - ₹20L', seniorLevel: '₹60L - ₹2.5Cr+' },
    globalOpportunities: 'High in global financial hubs.',
    roadmapSteps: [
      'Entrance: Clear CLAT to enter top NLUs.',
      'Undergrad: 5-year LL.B. from an NLU.',
      'Internship: Work with Tier-1 law firms.',
      'Career: Join a firm as an Associate.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Strong'
  },
  {
    id: 'architect',
    title: 'Architect',
    emoji: '🏗️',
    category: 'Design',
    tagline: 'Defining the skyline of the future.',
    description: 'Planning and designing buildings.',
    dayToDayActivities: ['Blueprinting', '3D modeling'],
    keySkills: ['AutoCAD', 'Sketching', 'Visual Design'],
    competitiveExams: ['NATA', 'JEE Paper 2'],
    salaryRanges: { entryLevel: '₹4L - ₹8L', seniorLevel: '₹20L - ₹50L' },
    globalOpportunities: 'Required for infrastructure everywhere.',
    roadmapSteps: [
      'Entrance: Clear NATA entrance.',
      'Undergrad: 5-year B.Arch.',
      'License: Register with COA.',
      'Career: Start your own firm.'
    ],
    industryFit: 'Good',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Strong'
  },
  {
    id: 'chef',
    title: 'Executive Chef',
    emoji: '👨‍🍳',
    category: 'Creative',
    tagline: 'The art of culinary excellence.',
    description: 'Leading kitchen teams and creating culinary experiences.',
    dayToDayActivities: ['Menu design', 'Kitchen management'],
    keySkills: ['Palate', 'Leadership', 'Creativity'],
    competitiveExams: ['NCHMCT JEE'],
    salaryRanges: { entryLevel: '₹3L - ₹6L', seniorLevel: '₹15L - ₹40L' },
    globalOpportunities: 'High in global hotel chains.',
    roadmapSteps: [
      'Entrance: Clear NCHMCT JEE for IHMs.',
      'Undergrad: B.Sc. in Hospitality.',
      'Internship: Work in 5-star kitchens.',
      'Career: Work your way up from Commis chef.'
    ],
    industryFit: 'Good',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'pilot',
    title: 'Commercial Pilot',
    emoji: '✈️',
    category: 'Infrastructure',
    tagline: 'Mastering the skies.',
    description: 'Operating aircraft for global airlines.',
    dayToDayActivities: ['Flight planning', 'Navigation'],
    keySkills: ['Precision', 'Composure', 'Physics'],
    competitiveExams: ['CPL Ground Classes'],
    salaryRanges: { entryLevel: '₹15L - ₹25L', seniorLevel: '₹60L - ₹1.5Cr+' },
    globalOpportunities: 'Worldwide demand.',
    roadmapSteps: [
      'Medical: Clear Class II and I Medical assessments.',
      'Ground School: Clear DGCA theory exams.',
      'Flying: Complete 200 hours for CPL.',
      'Career: Join an airline as First Officer.'
    ],
    industryFit: 'Perfect',
    marketDemand: 'High',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  },
  {
    id: 'athlete',
    title: 'Professional Athlete',
    emoji: '🏅',
    category: 'Sports & Wellness',
    tagline: 'Pushing the limits of human performance.',
    description: 'Competing at professional levels in sports.',
    dayToDayActivities: ['Physical training', 'Skill practice', 'Matches'],
    keySkills: ['Stamina', 'Discipline', 'Technique'],
    competitiveExams: ['State Selections'],
    salaryRanges: { entryLevel: '₹2L - ₹10L', seniorLevel: '₹1Cr - ₹50Cr+' },
    globalOpportunities: 'High for performers in global leagues.',
    roadmapSteps: [
      'School: Join a professional academy.',
      'Grade 10-12: Compete in National championships.',
      'Selections: Secure a spot in age-group National teams.',
      'Domestic: Play in major tournaments like Ranji Trophy.'
    ],
    industryFit: 'Moderate',
    marketDemand: 'Moderate',
    globalReach: 'Worldwide',
    aiResilience: 'Very Strong'
  }
];