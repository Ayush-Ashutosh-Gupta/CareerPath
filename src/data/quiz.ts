export interface QuizOption {
  id: string;
  label: string;
  nextQuestionId?: string | null;
  resultId?: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS_MAP: Record<string, QuizQuestion> = {
  // --- LEVEL 1: BROAD DOMAINS ---
  "start": {
    id: "start",
    text: "Where do you find your greatest flow of energy?",
    options: [
      { id: "s_build", label: "Building and engineering systems", nextQuestionId: "q2_build" },
      { id: "s_people", label: "Empowering and healing others", nextQuestionId: "q2_people" },
      { id: "s_think", label: "Analyzing complex data and logic", nextQuestionId: "q2_think" },
      { id: "s_create", label: "Expressing ideas through art and media", nextQuestionId: "q2_create" },
      { id: "s_peak", label: "Competing and performing at peak levels", nextQuestionId: "q2_peak" }
    ]
  },

  // --- PATH: BUILDING & ENGINEERING (TECH/INFRA) ---
  "q2_build": {
    id: "q2_build",
    text: "What scale of creation interests you most?",
    options: [
      { id: "b_digi", label: "Digital software and virtual intelligence", nextQuestionId: "q3_tech_soft" },
      { id: "b_phys", label: "Physical machines and infrastructure", nextQuestionId: "q3_tech_phys" }
    ]
  },
  "q3_tech_soft": {
    id: "q3_tech_soft",
    text: "Which digital challenge sounds most rewarding?",
    options: [
      { id: "ts_ai", label: "Teaching machines to think (AI)", nextQuestionId: "q4_tech_stress" },
      { id: "ts_web", label: "Building accessible web platforms", nextQuestionId: "q4_tech_structure" },
      { id: "ts_game", label: "Creating immersive virtual worlds", nextQuestionId: "q4_tech_variety" }
    ]
  },
  "q3_tech_phys": {
    id: "q3_tech_phys",
    text: "What kind of physical systems do you prefer?",
    options: [
      { id: "tp_mech", label: "Engines, robotics, and machinery", nextQuestionId: "q4_tech_stress" },
      { id: "tp_green", label: "Sustainable and renewable infrastructure", nextQuestionId: "q4_tech_impact" }
    ]
  },
  "q4_tech_stress": {
    id: "q4_tech_stress",
    text: "How do you handle critical, high-pressure technical failures?",
    options: [
      { id: "ts_thrive", label: "I thrive on the adrenaline of solving it", nextQuestionId: "q5_tech_ai_fin" },
      { id: "ts_calm", label: "I prefer preventing issues through steady work", nextQuestionId: "q5_tech_qa_stb" }
    ]
  },
  "q5_tech_ai_fin": {
    id: "q5_tech_ai_fin",
    text: "What is your primary motivator in tech?",
    options: [
      { id: "ta_money", label: "High financial reward and innovation", resultId: "ai-ml-engineer", nextQuestionId: null },
      { id: "ta_impact", label: "Solving complex global problems", resultId: "blockchain-developer", nextQuestionId: null }
    ]
  },
  "q5_tech_qa_stb": {
    id: "q5_tech_qa_stb",
    text: "Do you prefer deep focus or broad application?",
    options: [
      { id: "tq_focus", label: "Extreme attention to detail and routine", resultId: "software-tester", nextQuestionId: null },
      { id: "tq_broad", label: "Understanding how systems connect", resultId: "cloud-solutions-architect", nextQuestionId: null }
    ]
  },

  "q4_tech_structure": {
    id: "q4_tech_structure",
    text: "Do you prefer highly structured days or flexibility?",
    options: [
      { id: "tst_struct", label: "Structured and predictable coding", nextQuestionId: "q5_tech_struct_stab" },
      { id: "tst_flex", label: "Flexible, fast-paced environment", nextQuestionId: "q5_tech_soft_impact" }
    ]
  },
  "q5_tech_struct_stab": {
    id: "q5_tech_struct_stab",
    text: "How important is job stability vs excitement to you?",
    options: [
      { id: "tst_s_1", label: "Stability is everything", resultId: "software-tester", nextQuestionId: null },
      { id: "tst_s_2", label: "I want a bit of unpredictability", resultId: "blockchain-developer", nextQuestionId: null }
    ]
  },
  "q5_tech_soft_impact": {
    id: "q5_tech_soft_impact",
    text: "What matters more to you in a career?",
    options: [
      { id: "tsi_1", label: "High salary", resultId: "blockchain-developer", nextQuestionId: null },
      { id: "tsi_2", label: "Social impact", resultId: "software-tester", nextQuestionId: null }
    ]
  },

  "q4_tech_variety": {
    id: "q4_tech_variety",
    text: "Do you prefer variety or technical mastery?",
    options: [
      { id: "tv_var", label: "Constant variety and new challenges", nextQuestionId: "q5_tech_var_team" },
      { id: "tv_mast", label: "Mastering one specific complex craft", nextQuestionId: "q5_tech_var_env" }
    ]
  },
  "q5_tech_var_team": {
    id: "q5_tech_var_team",
    text: "Do you prefer working independently or as part of a team?",
    options: [
      { id: "tvt_1", label: "Mostly in a team", resultId: "game-developer-designer", nextQuestionId: null },
      { id: "tvt_2", label: "Fully independent", resultId: "ai-ml-engineer", nextQuestionId: null }
    ]
  },
  "q5_tech_var_env": {
    id: "q5_tech_var_env",
    text: "Where do you prefer to work?",
    options: [
      { id: "tve_1", label: "Office/Indoors", resultId: "ai-ml-engineer", nextQuestionId: null },
      { id: "tve_2", label: "Lab or technical facility", resultId: "cybersecurity-architect", nextQuestionId: null }
    ]
  },

  "q4_tech_impact": {
    id: "q4_tech_impact",
    text: "Is social impact more important than financial gain?",
    options: [
      { id: "ti_imp", label: "Social impact is my main goal", nextQuestionId: "q5_tech_phys_env" },
      { id: "ti_mon", label: "I want a stable, high-paying career", nextQuestionId: "q5_tech_phys_pressure" }
    ]
  },
  "q5_tech_phys_env": {
    id: "q5_tech_phys_env",
    text: "Where do you prefer to work?",
    options: [
      { id: "tpe_1", label: "Outdoors/field work", resultId: "mechanical-engineer", nextQuestionId: null },
      { id: "tpe_2", label: "Office/Indoors", resultId: "urban-planner", nextQuestionId: null }
    ]
  },
  "q5_tech_phys_pressure": {
    id: "q5_tech_phys_pressure",
    text: "How do you handle high-pressure deadlines or emergencies?",
    options: [
      { id: "tpp_1", label: "Thrive on it", resultId: "mechanical-engineer", nextQuestionId: null },
      { id: "tpp_2", label: "Prefer to avoid", resultId: "qa-engineer", nextQuestionId: null }
    ]
  },

  // --- PATH: PEOPLE (HEALTHCARE / SERVICE) ---
  "q2_people": {
    id: "q2_people",
    text: "How do you want to help people?",
    options: [
      { id: "p_heal", label: "Physical healing and medical care", nextQuestionId: "q3_people_med" },
      { id: "p_serve", label: "Community service and public justice", nextQuestionId: "q3_people_serve" }
    ]
  },
  "q3_people_med": {
    id: "q3_people_med",
    text: "What intensity of clinical work suits you?",
    options: [
      { id: "pm_high", label: "High-intensity procedures and surgery", nextQuestionId: "q4_people_stress_high" },
      { id: "pm_low", label: "Steady recovery and long-term care", nextQuestionId: "q4_people_empathy" }
    ]
  },
  "q4_people_stress_high": {
    id: "q4_people_stress_high",
    text: "How do you handle life-or-death pressure?",
    options: [
      { id: "psh_thrive", label: "I am decisive and calm in a crisis", nextQuestionId: "q5_people_med_res" },
      { id: "psh_avoid", label: "I prefer careful, non-surgical diagnosis", nextQuestionId: "q5_people_rad_values" }
    ]
  },
  "q5_people_med_res": {
    id: "q5_people_med_res",
    text: "Are you comfortable with extreme working hours?",
    options: [
      { id: "pmr_yes", label: "Yes, I am dedicated to the mission", resultId: "specialized-doctor", nextQuestionId: null },
      { id: "pmr_no", label: "I need a better work-life balance", resultId: "radiologist", nextQuestionId: null }
    ]
  },
  "q5_people_rad_values": {
    id: "q5_people_rad_values",
    text: "What matters more to you in a career?",
    options: [
      { id: "prv_1", label: "Intellectual challenge", resultId: "radiologist", nextQuestionId: null },
      { id: "prv_2", label: "Social impact", resultId: "biotech-researcher", nextQuestionId: null }
    ]
  },
  "q4_people_empathy": {
    id: "q4_people_empathy",
    text: "How do you feel about working with people all day?",
    options: [
      { id: "pe_love", label: "I love constant human interaction", nextQuestionId: "q5_people_med_support" },
      { id: "pe_limit", label: "I prefer working with data/images mostly", nextQuestionId: "q5_people_rad_values" }
    ]
  },
  "q5_people_med_support": {
    id: "q5_people_med_support",
    text: "What is your approach to patient health?",
    options: [
      { id: "pms_phys", label: "Physical movement and rehabilitation", resultId: "physiotherapist", nextQuestionId: null },
      { id: "pms_general", label: "Primary care and family medicine", resultId: "general-physician", nextQuestionId: null }
    ]
  },
  "q3_people_serve": {
    id: "q3_people_serve",
    text: "Where do you want to exert influence?",
    options: [
      { id: "ps_law", label: "Law, safety, and community order", nextQuestionId: "q4_people_confront" },
      { id: "ps_edu", label: "Education and social empowerment", nextQuestionId: "q4_people_impact_edu" }
    ]
  },
  "q4_people_confront": {
    id: "q4_people_confront",
    text: "How do you handle conflict and difficult people?",
    options: [
      { id: "pc_face", label: "I can be assertive and firm", nextQuestionId: "q5_people_law_safety" },
      { id: "pc_avoid", label: "I prefer avoiding direct confrontation", resultId: "civil-servant", nextQuestionId: null }
    ]
  },
  "q5_people_law_safety": {
    id: "q5_people_law_safety",
    text: "What environment do you prefer?",
    options: [
      { id: "pls_out", label: "Outdoors and active on the front lines", resultId: "police-officer", nextQuestionId: null },
      { id: "pls_in", label: "Professional corporate or government office", resultId: "corporate-lawyer", nextQuestionId: null }
    ]
  },
  "q4_people_impact_edu": {
    id: "q4_people_impact_edu",
    text: "What is your main goal in helping the community?",
    options: [
      { id: "pie_direct", label: "Directly assisting individuals in need", nextQuestionId: "q5_people_support_type" },
      { id: "pie_system", label: "Improving systems and administration", resultId: "civil-servant", nextQuestionId: null }
    ]
  },
  "q5_people_support_type": {
    id: "q5_people_support_type",
    text: "Which group do you want to focus on?",
    options: [
      { id: "pst_vuln", label: "Vulnerable families and individuals", resultId: "social-worker", nextQuestionId: null },
      { id: "pst_kids", label: "Students in schools and colleges", resultId: "school-college-teacher", nextQuestionId: null }
    ]
  },

  // --- PATH: THINK (ANALYZE / STRATEGY / RESEARCH) ---
  "q2_think": {
    id: "q2_think",
    text: "What kind of puzzles do you enjoy solving?",
    options: [
      { id: "t_data", label: "Data patterns and scientific truths", nextQuestionId: "q3_think_science" },
      { id: "t_biz", label: "Business strategy and high finance", nextQuestionId: "q3_think_biz" }
    ]
  },
  "q3_think_science": {
    id: "q3_think_science",
    text: "Where do you want your research applied?",
    options: [
      { id: "ts_life", label: "Biological and genetic breakthroughs", nextQuestionId: "q4_think_research" },
      { id: "ts_city", label: "Urban growth and infrastructure", nextQuestionId: "q4_think_planning" }
    ]
  },
  "q4_think_research": {
    id: "q4_think_research",
    text: "Do you prefer long-term deep research or fast results?",
    options: [
      { id: "tr_long", label: "Deep laboratory research (years)", nextQuestionId: "q5_think_res_values" },
      { id: "tr_fast", label: "Fast-paced data analysis", nextQuestionId: "q5_think_res_pressure" }
    ]
  },
  "q5_think_res_values": {
    id: "q5_think_res_values",
    text: "What matters more to you in a career?",
    options: [
      { id: "trv_1", label: "Social impact", resultId: "biotech-researcher", nextQuestionId: null },
      { id: "trv_2", label: "Intellectual challenge", resultId: "ai-ml-engineer", nextQuestionId: null }
    ]
  },
  "q5_think_res_pressure": {
    id: "q5_think_res_pressure",
    text: "How do you handle high-pressure deadlines or emergencies?",
    options: [
      { id: "trp_1", label: "Thrive on it", resultId: "data-scientist", nextQuestionId: null },
      { id: "trp_2", label: "Prefer to avoid", resultId: "qa-engineer", nextQuestionId: null }
    ]
  },
  "q4_think_planning": {
    id: "q4_think_planning",
    text: "Do you prefer structure or variety?",
    options: [
      { id: "tp_struct", label: "Highly structured policy work", nextQuestionId: "q5_think_plan_env" },
      { id: "tp_var", label: "Varied urban design projects", nextQuestionId: "q5_think_plan_team" }
    ]
  },
  "q5_think_plan_env": {
    id: "q5_think_plan_env",
    text: "Where do you prefer to work?",
    options: [
      { id: "tpe_v1", label: "Office/Indoors", resultId: "civil-servant", nextQuestionId: null },
      { id: "tpe_v2", label: "Outdoors/field work", resultId: "urban-planner", nextQuestionId: null }
    ]
  },
  "q5_think_plan_team": {
    id: "q5_think_plan_team",
    text: "Do you prefer working independently or as part of a team?",
    options: [
      { id: "tpt_1", label: "Mostly in a team", resultId: "urban-planner", nextQuestionId: null },
      { id: "tpt_2", label: "Fully independent", resultId: "architect", nextQuestionId: null }
    ]
  },
  "q3_think_biz": {
    id: "q3_think_biz",
    text: "Which environment attracts you?",
    options: [
      { id: "tb_bank", label: "The high-stakes world of finance/banking", nextQuestionId: "q4_think_stress_biz" },
      { id: "tb_cons", label: "Solving varied corporate problems", nextQuestionId: "q4_think_cons_type" }
    ]
  },
  "q4_think_stress_biz": {
    id: "q4_think_stress_biz",
    text: "How important is financial reward to you?",
    options: [
      { id: "tsb_high", label: "It is my primary motivator", nextQuestionId: "q5_think_biz_pressure" },
      { id: "tsb_sec", label: "I prefer technical challenge over just money", nextQuestionId: "q5_think_biz_team" }
    ]
  },
  "q5_think_biz_pressure": {
    id: "q5_think_biz_pressure",
    text: "How do you handle high-pressure deadlines or emergencies?",
    options: [
      { id: "tbp_1", label: "Thrive on it", resultId: "investment-banker", nextQuestionId: null },
      { id: "tbp_2", label: "Manage okay", resultId: "accountant-ca", nextQuestionId: null }
    ]
  },
  "q5_think_biz_team": {
    id: "q5_think_biz_team",
    text: "Do you prefer working independently or as part of a team?",
    options: [
      { id: "tbt_1", label: "Mostly independent", resultId: "bank-manager", nextQuestionId: null },
      { id: "tbt_2", label: "Mostly in a team", resultId: "consultant", nextQuestionId: null }
    ]
  },
  "q4_think_cons_type": {
    id: "q4_think_cons_type",
    text: "Do you prefer working on strategy or execution?",
    options: [
      { id: "tct_strat", label: "High-level strategic advice", nextQuestionId: "q5_think_cons_stab" },
      { id: "tct_exec", label: "Practical legal or financial execution", nextQuestionId: "q5_think_cons_env" }
    ]
  },
  "q5_think_cons_stab": {
    id: "q5_think_cons_stab",
    text: "How important is job stability vs excitement to you?",
    options: [
      { id: "tcs_1", label: "Slight excitement preference", resultId: "consultant", nextQuestionId: null },
      { id: "tcs_2", label: "Stability is everything", resultId: "accountant-ca", nextQuestionId: null }
    ]
  },
  "q5_think_cons_env": {
    id: "q5_think_cons_env",
    text: "Where do you prefer to work?",
    options: [
      { id: "tce_1", label: "Office/Indoors", resultId: "corporate-lawyer", nextQuestionId: null },
      { id: "tce_2", label: "Anywhere — I'm flexible", resultId: "consultant", nextQuestionId: null }
    ]
  },

  // --- PATH: CREATE (ART / MEDIA / LIFESTYLE) ---
  "q2_create": {
    id: "q2_create",
    text: "What is your preferred creative medium?",
    options: [
      { id: "c_vis", label: "Visual arts and digital design", nextQuestionId: "q3_create_visual" },
      { id: "c_perf", label: "Performance and storytelling", nextQuestionId: "q3_create_perf" },
      { id: "c_life", label: "Lifestyle and practical arts", nextQuestionId: "q3_create_practical" }
    ]
  },
  "q3_create_visual": {
    id: "q3_create_visual",
    text: "Do you prefer digital tools or traditional media?",
    options: [
      { id: "cv_digi", label: "Digital design and animation", nextQuestionId: "q4_create_ux_vs_game" },
      { id: "cv_trad", label: "Physical art, drawing, or photography", nextQuestionId: "q4_create_traditional" }
    ]
  },
  "q4_create_ux_vs_game": {
    id: "q4_create_ux_vs_game",
    text: "Do you prefer utility or entertainment?",
    options: [
      { id: "cug_util", label: "Improving user experience and flow", nextQuestionId: "q5_create_ux_team" },
      { id: "cug_fun", label: "Creating engaging visual animation", nextQuestionId: "q5_create_game_values" }
    ]
  },
  "q5_create_ux_team": {
    id: "q5_create_ux_team",
    text: "Do you prefer working independently or as part of a team?",
    options: [
      { id: "cut_1", label: "Mostly in a team", resultId: "digital-designer-uiux", nextQuestionId: null },
      { id: "cut_2", label: "Fully independent", resultId: "digital-designer-uiux", nextQuestionId: null }
    ]
  },
  "q5_create_game_values": {
    id: "q5_create_game_values",
    text: "What matters more to you in a career?",
    options: [
      { id: "cgv_1", label: "Technical precision", resultId: "animator", nextQuestionId: null },
      { id: "cgv_2", label: "Creative freedom", resultId: "animator", nextQuestionId: null }
    ]
  },
  "q4_create_traditional": {
    id: "q4_create_traditional",
    text: "What drives your artistic vision?",
    options: [
      { id: "ct_pure", label: "Pure artistic expression", nextQuestionId: "q5_create_trad_freedom" },
      { id: "ct_comm", label: "Fashion or commercial design", nextQuestionId: "q5_create_trad_comm" }
    ]
  },
  "q5_create_trad_freedom": {
    id: "q5_create_trad_freedom",
    text: "What matters more to you in a career?",
    options: [
      { id: "ctf_1", label: "Creative freedom", resultId: "artist", nextQuestionId: null },
      { id: "ctf_2", label: "Social impact", resultId: "social-worker", nextQuestionId: null }
    ]
  },
  "q5_create_trad_comm": {
    id: "q5_create_trad_comm",
    text: "Do you prefer working with textiles or visuals?",
    options: [
      { id: "ctc_fashion", label: "Working with clothing and fashion", resultId: "fashion-designer", nextQuestionId: null },
      { id: "ctc_photo", label: "Quiet studio/location photography", resultId: "photographer", nextQuestionId: null }
    ]
  },
  "q3_create_perf": {
    id: "q3_create_perf",
    text: "How do you want to express your story?",
    options: [
      { id: "cp_body", label: "Through acting and expression", nextQuestionId: "q4_create_perf_stress" },
      { id: "cp_sound", label: "Through music and sound", nextQuestionId: "q4_create_perf_env" },
      { id: "cp_digital", label: "Through content creation and streaming", nextQuestionId: "q4_create_perf_team" }
    ]
  },
  "q4_create_perf_stress": {
    id: "q4_create_perf_stress",
    text: "How do you handle public attention?",
    options: [
      { id: "cps_1", label: "Thrive on it", nextQuestionId: "q5_create_perf_body_stab" },
      { id: "cps_2", label: "Prefer behind the scenes", nextQuestionId: "q5_create_perf_body_freedom" }
    ]
  },
  "q5_create_perf_body_stab": {
    id: "q5_create_perf_body_stab",
    text: "How important is job stability to you?",
    options: [
      { id: "cpbs_1", label: "I want excitement", resultId: "actor", nextQuestionId: null },
      { id: "cpbs_2", label: "Stability preference", resultId: "school-college-teacher", nextQuestionId: null }
    ]
  },
  "q5_create_perf_body_freedom": {
    id: "q5_create_perf_body_freedom",
    text: "What matters more to you?",
    options: [
      { id: "cpbf_1", label: "Creative freedom", resultId: "film-director", nextQuestionId: null },
      { id: "cpbf_2", label: "High salary", resultId: "actor", nextQuestionId: null }
    ]
  },
  "q4_create_perf_env": {
    id: "q4_create_perf_env",
    text: "Where do you prefer to work?",
    options: [
      { id: "cpe_1", label: "Recording studio / live stage", nextQuestionId: "q5_create_perf_sound_stab" },
      { id: "cpe_2", label: "Digital production suite", nextQuestionId: "q5_create_perf_sound_values" }
    ]
  },
  "q5_create_perf_sound_stab": {
    id: "q5_create_perf_sound_stab",
    text: "Do you want to be a lead or producer?",
    options: [
      { id: "cpss_1", label: "Lead artist / Singer", resultId: "professional-singer-producer", nextQuestionId: null },
      { id: "cpss_2", label: "Music Producer", resultId: "professional-singer-producer", nextQuestionId: null }
    ]
  },
  "q5_create_perf_sound_values": {
    id: "q5_create_perf_sound_values",
    text: "What is your primary goal?",
    options: [
      { id: "cpsv_1", label: "Creative expression", resultId: "professional-singer-producer", nextQuestionId: null },
      { id: "cpsv_2", label: "Social impact", resultId: "school-college-teacher", nextQuestionId: null }
    ]
  },
  "q4_create_perf_team": {
    id: "q4_create_perf_team",
    text: "Do you prefer working alone or with a team?",
    options: [
      { id: "cpt_1", label: "Building a personal channel", nextQuestionId: "q5_create_perf_film_press" },
      { id: "cpt_2", label: "Collaborative streaming team", nextQuestionId: "q5_create_perf_film_freedom" }
    ]
  },
  "q5_create_perf_film_press": {
    id: "q5_create_perf_film_press",
    text: "What matters most to you?",
    options: [
      { id: "cpfp_1", label: "Audience growth", resultId: "youtuber-streamer", nextQuestionId: null },
      { id: "cpfp_2", label: "Quality storytelling", resultId: "writer", nextQuestionId: null }
    ]
  },
  "q5_create_perf_film_freedom": {
    id: "q5_create_perf_film_freedom",
    text: "Where do you see yourself?",
    options: [
      { id: "cpff_1", label: "Streaming / Influencing", resultId: "youtuber-streamer", nextQuestionId: null },
      { id: "cpff_2", label: "Directing", resultId: "film-director", nextQuestionId: null }
    ]
  },
  "q3_create_practical": {
    id: "q3_create_practical",
    text: "Where does your creativity find its home?",
    options: [
      { id: "cpr_kitchen", label: "In the kitchen and culinary arts", nextQuestionId: "q4_create_chef_pressure" },
      { id: "cpr_words", label: "In words and food media", nextQuestionId: "q4_create_copy_team" },
      { id: "cpr_build", label: "In buildings and spatial design", nextQuestionId: "q4_create_space" }
    ]
  },
  "q4_create_chef_pressure": {
    id: "q4_create_chef_pressure",
    text: "How do you handle high-pressure environments?",
    options: [
      { id: "ccp_1", label: "Thrive on the rush of a kitchen", nextQuestionId: "q5_create_chef_stab" },
      { id: "ccp_2", label: "Prefer a clinical, nutritional setting", nextQuestionId: "q5_create_chef_env" }
    ]
  },
  "q5_create_chef_stab": {
    id: "q5_create_chef_stab",
    text: "Excitement or stability?",
    options: [
      { id: "ccs_1", label: "Excitement", resultId: "chef", nextQuestionId: null },
      { id: "ccs_2", label: "Stability", resultId: "registered-dietician", nextQuestionId: null }
    ]
  },
  "q5_create_chef_env": {
    id: "q5_create_chef_env",
    text: "Where do you prefer to work?",
    options: [
      { id: "cce_1", label: "Hospitals / Clinics", resultId: "registered-dietician", nextQuestionId: null },
      { id: "cce_2", label: "Luxury Hotels", resultId: "chef", nextQuestionId: null }
    ]
  },
  "q4_create_copy_team": {
    id: "q4_create_copy_team",
    text: "What medium do you prefer?",
    options: [
      { id: "cct_1", label: "Personal food blogging", nextQuestionId: "q5_create_copy_values" },
      { id: "cct_2", label: "Social media for brands", nextQuestionId: "q5_create_copy_stab" }
    ]
  },
  "q5_create_copy_values": {
    id: "q5_create_copy_values",
    text: "What is your primary motivator?",
    options: [
      { id: "ccv_1", label: "Creative expression", resultId: "food-critic-blogger", nextQuestionId: null },
      { id: "ccv_2", label: "High digital reach", resultId: "social-media-manager", nextQuestionId: null }
    ]
  },
  "q5_create_copy_stab": {
    id: "q5_create_copy_stab",
    text: "Stability preference?",
    options: [
      { id: "ccs_v1", label: "Stability", resultId: "social-media-manager", nextQuestionId: null },
      { id: "ccs_v2", label: "Excitement", resultId: "food-critic-blogger", nextQuestionId: null }
    ]
  },
  "q4_create_space": {
    id: "q4_create_space",
    text: "Do you prefer creative freedom or technical precision?",
    options: [
      { id: "cs_free", label: "Architectural design", nextQuestionId: "q5_create_arch_env" },
      { id: "cs_tech", label: "Social media and branding", nextQuestionId: "q5_create_sm_team" }
    ]
  },
  "q5_create_arch_env": {
    id: "q5_create_arch_env",
    text: "Where do you prefer to work?",
    options: [
      { id: "cae_1", label: "Studio / Indoors", resultId: "architect", nextQuestionId: null },
      { id: "cae_2", label: "Field work", resultId: "urban-planner", nextQuestionId: null }
    ]
  },
  "q5_create_sm_team": {
    id: "q5_create_sm_team",
    text: "Team or independent?",
    options: [
      { id: "csm_1", label: "Mostly in a team", resultId: "social-media-manager", nextQuestionId: null },
      { id: "csm_2", label: "Independent", resultId: "food-critic-blogger", nextQuestionId: null }
    ]
  },

  // --- PATH: PEAK PERFORMANCE ---
  "q2_peak": {
    id: "q2_peak",
    text: "What kind of peak performance excites you?",
    options: [
      { id: "pk_phys", label: "Physical excellence and sports", nextQuestionId: "q4_peak_phys" },
      { id: "pk_tech", label: "Mastering complex vehicles or machines", nextQuestionId: "q4_peak_tech" }
    ]
  },
  "q4_peak_phys": {
    id: "q4_peak_phys",
    text: "How do you handle competition?",
    options: [
      { id: "php_thrive", label: "I love being in the spotlight", nextQuestionId: "q5_peak_phys_stab" },
      { id: "php_supp", label: "I prefer supporting others' performance", nextQuestionId: "q5_peak_phys_env" }
    ]
  },
  "q5_peak_phys_stab": {
    id: "q5_peak_phys_stab",
    text: "Stability or unpredictability?",
    options: [
      { id: "pps_1", label: "I want the unpredictable life of a pro", nextQuestionId: "q6_peak_phys_values" },
      { id: "pps_2", label: "Stability through coaching or therapy", nextQuestionId: "q6_peak_phys_support" }
    ]
  },
  "q6_peak_phys_values": {
    id: "q6_peak_phys_values",
    text: "What matters most?",
    options: [
      { id: "ppv_1", label: "Fame and high rewards", resultId: "athlete", nextQuestionId: null },
      { id: "ppv_2", label: "Athletic mastery", resultId: "athlete", nextQuestionId: null }
    ]
  },
  "q6_peak_phys_support": {
    id: "q6_peak_phys_support",
    text: "How do you want to support athletes?",
    options: [
      { id: "pps_v1", label: "Tactical and skill coaching", resultId: "sports-coach", nextQuestionId: null },
      { id: "pps_v2", label: "Physical rehabilitation", resultId: "physiotherapist", nextQuestionId: null }
    ]
  },
  "q5_peak_phys_env": {
    id: "q5_peak_phys_env",
    text: "Where do you prefer to work?",
    options: [
      { id: "ppe_1", label: "On the field / stadium", resultId: "athlete", nextQuestionId: null },
      { id: "ppe_2", label: "In a training facility", resultId: "sports-coach", nextQuestionId: null }
    ]
  },
  "q4_peak_tech": {
    id: "q4_peak_tech",
    text: "How do you handle high-stakes safety and precision?",
    options: [
      { id: "pht_pilot", label: "Operating in the skies", nextQuestionId: "q5_peak_tech_pressure" },
      { id: "pht_green", label: "Managing complex machine design", nextQuestionId: "q5_peak_tech_env" }
    ]
  },
  "q5_peak_tech_pressure": {
    id: "q5_peak_tech_pressure",
    text: "How do you handle emergencies?",
    options: [
      { id: "ptp_1", label: "Thrive under pressure", nextQuestionId: "q6_peak_tech_values" },
      { id: "ptp_2", label: "Prefer routine precision", resultId: "pilot", nextQuestionId: null }
    ]
  },
  "q6_peak_tech_values": {
    id: "q6_peak_tech_values",
    text: "Primary goal?",
    options: [
      { id: "ptv_1", label: "Global travel and mastery", resultId: "pilot", nextQuestionId: null },
      { id: "ptv_2", label: "National security / service", resultId: "army-officer", nextQuestionId: null }
    ]
  },
  "q5_peak_tech_env": {
    id: "q5_peak_tech_env",
    text: "Where do you prefer to work?",
    options: [
      { id: "pte_1", label: "On the field / engineering site", resultId: "mechanical-engineer", nextQuestionId: null },
      { id: "pte_2", label: "Office/Design studio", resultId: "architect", nextQuestionId: null }
    ]
  }
};

export const QUIZ_QUESTIONS = Object.values(QUIZ_QUESTIONS_MAP);
