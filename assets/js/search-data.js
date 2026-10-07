// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/personal_website/";
    },
  },{id: "nav-notes",
          title: "notes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal_website/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "papers, manuscripts in review, and works in progress.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal_website/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research, builds, and ongoing experiments at the seam of brains, cultures, and machines.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal_website/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "open-source work and the public side of what I&#39;m building.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal_website/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Experience, projects, skills, and what I&#39;m working on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal_website/cv/";
          },
        },{id: "post-spacepower-2024-notes-from-orlando",
        
          title: "Spacepower 2024 — notes from Orlando",
        
        description: "Attending Spacepower as a UF Space Initiative Innovation Challenge winner — keynotes, startups, and what I took back to the lab.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal_website/blog/2024/spacepower-notes-from-orlando/";
          
        },
      },{id: "post-shpe-national-convention-2024-notes",
        
          title: "SHPE National Convention 2024 — notes",
        
        description: "Four days, 15,000 attendees, and the workshops that stuck — Amazon career readiness, L3Harris goal-setting, Northrop Grumman LGBT leadership, John Deere automation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal_website/blog/2024/shpe-national-convention-notes/";
          
        },
      },{id: "post-innovation-summit-2024-notes",
        
          title: "Innovation Summit 2024 — notes",
        
        description: "Three speakers, one VC panel, and the connection between neuromorphic computing and the BCI thesis I&#39;ve been circling.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/personal_website/blog/2024/innovation-summit-notes/";
          
        },
      },{id: "news-attended-innovation-summit-2024-most-useful-hallway-conversation-was-with-jack-kendall-cto-rain-ai-on-neuromorphic-computing-which-maps-uncomfortably-well-onto-the-bci-work-notes",
          title: 'Attended Innovation Summit 2024 — most useful hallway conversation was with Jack Kendall...',
          description: "",
          section: "News",},{id: "news-one-of-five-winners-of-the-uf-space-initiative-2024-innovation-challenge-got-the-orange-winner-badge-at-spacepower-2024-in-orlando-the-space-force-association-called-our-team-a-dynamic-group-who-embodied-the-power-of-cross-disciplinary-collaboration-full-notes",
          title: 'One of five winners of the UF Space Initiative 2024 Innovation Challenge —...',
          description: "",
          section: "News",},{id: "news-presented-finding-lost-archaeological-sites-with-ai-object-detection-with-remote-sensing-at-the-2025-florida-undergraduate-research-conference-with-olivia-zhang-poster-pdf",
          title: 'Presented Finding Lost Archaeological Sites with AI: Object Detection with Remote Sensing at...',
          description: "",
          section: "News",},{id: "news-musculoskeletal-symposium-2025-randy-trumbower-on-acute-intermittent-hypoxia-for-spinal-cord-injury-recovery-kristen-vandenborne-on-mr-ml-replacing-muscle-biopsy-cross-pollinates-with-the-bci-direction-more-than-i-expected",
          title: 'Musculoskeletal Symposium 2025 — Randy Trumbower on Acute Intermittent Hypoxia for spinal-cord-injury recovery,...',
          description: "",
          section: "News",},{id: "news-wrapped-a-year-at-the-florida-museum-of-natural-history-as-multimodal-ai-amp-amp-cv-intern-siglip-artifact-classifier-at-87-accuracy-retrieval-40-faster-project-writeup",
          title: 'Wrapped a year at the Florida Museum of Natural History as Multimodal AI...',
          description: "",
          section: "News",},{id: "news-attended-ai-as-a-catalyst-at-mit-227-people-161-institutions-22-countries-three-workshops-the-conversations-from-this-convening-compounded",
          title: 'Attended AI as a Catalyst at MIT — 227 people, 161 institutions, 22+...',
          description: "",
          section: "News",},{id: "news-shortkit-ml-submitted-to-ieee-access",
          title: 'ShortKit-ML submitted to IEEE Access',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/personal_website/news/announcement_3/";
            },},{id: "projects-ai-enhanced-remote-sensing-llanos-de-moxos",
          title: 'AI-Enhanced Remote Sensing — Llanos de Moxos',
          description: "YOLOv8 object detection on Sentinel + Landsat imagery for pre-Columbian raised-field agriculture in Beni, Bolivia.",
          section: "Projects",handler: () => {
              window.location.href = "/personal_website/projects/10_project/";
            },},{id: "projects-pampa-la-cruz-expedition",
          title: 'Pampa La Cruz Expedition',
          description: "Four weeks excavating a Chimú child-sacrifice site at Huanchaco, Peru, under Dr. Gabriel Prieto.",
          section: "Projects",handler: () => {
              window.location.href = "/personal_website/projects/11_project/";
            },},{id: "projects-firearchy-nasa-blackstone",
          title: 'FIREARCHY (NASA × Blackstone)',
          description: "NASA × Blackstone Innovation Challenge — applying the Groff Algorithm to satellite imagery for archaeological site discovery.",
          section: "Projects",handler: () => {
              window.location.href = "/personal_website/projects/12_project/";
            },},{id: "projects-shpe-corporate-database",
          title: 'SHPE Corporate Database',
          description: "Corporate-partner database for the 2024 SHPE National Convention — distributed to 35,000+ members and attendees across 42 states.",
          section: "Projects",handler: () => {
              window.location.href = "/personal_website/projects/13_project/";
            },},{id: "projects-self-nudging-dashboard",
          title: 'Self-Nudging Dashboard',
          description: "Minimalist, offline-ready dashboard that primes you with daily prompts for better habits — HTML/CSS/JS, no backend.",
          section: "Projects",handler: () => {
              window.location.href = "/personal_website/projects/14_project/";
            },},{id: "projects-astra",
          title: 'Astra',
          description: "Autonomous AI agent on a Mixture-of-Experts architecture — runs an options-trading thesis end-to-end and doubles as a personal assistant.",
          section: "Projects",handler: () => {
              window.location.href = "/personal_website/projects/1_project/";
            },},{id: "projects-shortkit-ml",
          title: 'ShortKit-ML',
          description: "Unifying ontology for shortcut detection in machine learning. In review at IEEE Access.",
          section: "Projects",handler: () => {
              window.location.href = "/personal_website/projects/2_project/";
            },},{id: "projects-temporal-decay-graph",
          title: 'Temporal-Decay Graph',
          description: "A novel data structure for real-time BCI/EEG, combining graph topology with exponential decay and lazy pruning.",
          section: "Projects",handler: () => {
              window.location.href = "/personal_website/projects/3_project/";
            },},{id: "projects-deep-focus-trainer",
          title: 'Deep Focus Trainer',
          description: "C-based neurofeedback tool integrating Muse 2 EEG with screen activity — ring buffer, hash table, binary heap.",
          section: "Projects",handler: () => {
              window.location.href = "/personal_website/projects/4_project/";
            },},{id: "projects-eeg-coherence-analysis-pipeline",
          title: 'EEG Coherence Analysis Pipeline',
          description: "SciPy pipeline for EEG coherence on a neuromarketing dataset from PhysioNet.",
          section: "Projects",handler: () => {
              window.location.href = "/personal_website/projects/5_project/";
            },},{id: "projects-lingua-ignota",
          title: 'Lingua Ignota',
          description: "A personal cross-domain pattern language formalizing pattern recognition across faces, markets, and EEG signals as one cognitive process.",
          section: "Projects",handler: () => {
              window.location.href = "/personal_website/projects/6_project/";
            },},{id: "projects-funq",
          title: 'funQ',
          description: "Real-time nightlife discovery — recommendation platform with social-media data, sentiment, and geolocation.",
          section: "Projects",handler: () => {
              window.location.href = "/personal_website/projects/7_project/";
            },},{id: "projects-art-beyond-sight",
          title: 'Art Beyond Sight',
          description: "Hackathon prototype — accessibility app converting visual art into soundscapes for visually impaired users.",
          section: "Projects",handler: () => {
              window.location.href = "/personal_website/projects/8_project/";
            },},{id: "projects-multi-model-ai-artifact-search",
          title: 'Multi-Model AI Artifact Search',
          description: "SigLIP-based classifier for archaeological artifacts — 3,157 images, 87% accuracy, with a 3D UMAP interactive viz.",
          section: "Projects",handler: () => {
              window.location.href = "/personal_website/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%75%6C.%72%6F%6A%61%73@%75%66%6C.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/RIROJASS", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/raul-i-rojas", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/personal_website/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
