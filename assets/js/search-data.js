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
        },{id: "news-shortkit-ml-submitted-to-ieee-access",
          title: 'ShortKit-ML submitted to IEEE Access',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/personal_website/news/announcement_3/";
            },},{id: "news-attended-ai-as-a-catalyst-at-mit-227-people-161-institutions-22-countries-three-workshops-the-conversations-from-this-convening-compounded",
          title: 'Attended AI as a Catalyst at MIT — 227 people, 161 institutions, 22+...',
          description: "",
          section: "News",},{id: "news-launching-this-site-as-the-home-for-my-research-builds-and-writing",
          title: 'Launching this site as the home for my research, builds, and writing.',
          description: "",
          section: "News",},{id: "projects-astra",
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
