module.exports = {
  siteTitle: 'Shoaib | Software Developer | Portfolio',
  siteDescription:
    'Explore the captivating world of Shoaib Mohammed, a visionary Software Developer and Graduate Student, showcasing cutting-edge creations and boundless innovation.',
  siteKeywords:
    'Shoaib Mohammed, Shoaib, Mohammed, shoaibmohammed7, software developer, software engineer, Brain Tumor Study, Network Analysis, web developer, java developer, Hyderabad, Cognizant, bit, mesra',
  siteUrl: 'https://heuristicfoliomaster.gatsbyjs.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Shoaib Mohammed',
  location: 'Chicago, IL',
  email: 'shoaibmohammed7310@gmail.com',
  github: 'https://github.com/chandrikadeb7',
  twitterHandle: '@shoaib7',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/shoaibmohammed7',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shoaib-md/',
    },

    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shoaibkool/',
    },
    
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
