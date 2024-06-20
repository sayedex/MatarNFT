import { tokendata ,TeamData} from "../../typeing";

//test  - 0xd04D2046A3C4BE21BE1d02a8a8b98f2B1a3529d7
// main presale - > 0xfe5B29C2db9A2c99b0ec3e3D56D93298039F442a
export const Presale_contract = "0x6BD7948Bb4A77Ca6b5D598DA836C6e508a339228";
export const Site_URL = "https://presale.foxeurope.io";
export const MIN_BUY = 1;


export const supportedchain = [
  {
    id: 137,
    name: "Polygon",
  },
  {
    id: 56,
    name: "Bep20",
  
  
  },
];
//admin wallet ;
///0x2eE11aC992497BBdE1c55919fd8F0e5285eB7041

export const CHAIN_NAME: { [key: number]: string } = {
  1: "Ethereum",
  369: "PulseChain",
};

export const Presale_price: { [key: number]: number } = {
  1: 0.25,
  2: 0.3,
  3: .35,
  4: .40,
};

export const AllsocialMedia = [
  {
    name: "X.svg",
    link: "https://x.com/matar__ai",
    h: 32,
    w: 28,
  },
  
  {
    name: "Telegram.svg",
    link: "https://t.me/matar_ai",
    h: 31,
    w: 31,
  },
  {
    name: "Linkedin.svg",
    link: "",
    h: 31,
    w: 15,
  },
  {
    name: "Giithub.svg",

    link: "",
    h: 31,
    w: 31,
  },
  {
    name: "Facebook.svg",

    link: "",
    h: 31,
    w: 31,
  },
  {
    name: "Instagram.svg",

    link: "",
    h: 31,
    w: 31,
  },

];

export const SERVICE_CONTENT = [
  {
    icon: "NFT",
    title: "NFT",
    content: "Fully dedicated NFT Platform",
  },
  {
    icon: "staking",
    title: "Staking",
    content: "Fully decentralized stacking platform",
  },
  {
    icon: "Tracking",
    title: "Tracking",
    content: "Fully decentralized tracking whale wallets systems",
  },
];

export const WHITEPAPER_AUDIT = [
  {
    name: "GREEN PAPER",
    link: "/",
    icon: "Paste",
  },
  {
    name: "AUDIT",
    link: "",
    icon: "FileSecurity",
  },
];

export const Roadmap = [
  {
    name: "Q2 2024",
    data: [
      { name: "Initiate Project Idea and Form Team.", isDone: true },
      { name: "Launch Social Media Pages for the Project.", isDone: true },
      { name: "Release Visual Identity and Official Logo.", isDone: true },
      { name: "Launch Telegram Bot for Rewards Distribution.", isDone: true },
      { name: "Release the WhitePaper for the Token.", isDone: true },
      { name: "Develop the Token App for News, Tasks.", isDone: true },
      { name: "Develop a Social Media Platform Dedicated to the Token.", isDone: true },
      { name: "Launch Initial Coin Offering (ICO).", isDone: true },

    ],
  },
  {
    name: "Q3 2024",
    data: [
      { name: "Grow Community with a Focus on Marketing and Promotion.", isDone: false },
      { name: "List the Token on Centralized Exchanges (CEX).", isDone: false },
      { name: "List the Token on CoinMarketCap and CoinGecko.", isDone: false },
      { name: "Secure Partnerships to Establish a Strong Brand.", isDone: false },
      { name: "Launch the First Airdrop.", isDone: false },
      { name: "Launch the Social Media Platform.", isDone: false },
      { name: "Expand Token Projects by Launching the Task and Reward App.", isDone: false },
    ],
  },
  {
    name: "Q4 2024",
    data: [
      { name: "Host AMA Webinars on Social Media with Marketing Partners.", isDone: false },
      { name: "Achieve the Goal of Over 50,000 Token Holders.", isDone: false },
      { name: "Launch the Second Airdrop via Influencers and Celebrities.", isDone: false },
  
      { name: "Facilitate Trading by Introducing New Listings on  CEX.", isDone: false },

    ],
  },
  {
    name: "Q5 2024",
    data: [
      { name: "Host AMA Webinars on Social Media with Marketing Partners.", isDone: false },
      { name: "Achieve the Goal of Over 50,000 Token Holders.", isDone: false },
      { name: "Launch the Second Airdrop via Influencers and Celebrities.", isDone: false },
  
      { name: "Facilitate Trading by Introducing New Listings on  CEX.", isDone: false },

    ],
  },
];

export const Supply_label = [
  {
    name: "Private Sale",
    share: 1,
    color: "#00969B",
  },
  {
    name: "Presale",
    share: 5,
    color: "#C7FDFE ",
  },
  {
    name: "Exchange & Liquidity",
    share: 18,
    color: "#349FA3",
  },
  {
    name: "Ecosystem",
    share: 18,
    color: "#00B5BC ",
  },
  {
    name: "Marketing",
    share: 12,
    color: "#68EDF2 ",
  },
  {
    name: "Partneerships",
    share: 8,
    color: "#3CC3C7",
  },
  {
    name: "Secured Fund",
    share: 8,
    color: "#1C888C",
  },
  {
    name: "Team & Advisors",
    share: 10,
    color: "#47B5B9",
  },
  {
    name: "Treasure",
    share: 20,
    color: "#5CE1E6",
  },
];

export const Project_info = [
  {
    title: "Social Media Web3",
    content:
      "A decentralized social media platform on Web3 technology, giving users control over their data and content.",
      logo:"Socialmedia"
  },
  {
    title: "CEX (Exchange Platform)",
    content:
      "An efficient cryptocurrency trading platform with low fees, high liquidity, and advanced tools.",
      logo:"CEXV1"
  },
  {
    title: "FOXE ",
    content:
      "A secure, user-friendly digital wallet for managing and transacting various cryptocurrencies.",
      logo:"Wallet"
  },
  {
    title: "Foxe Blockchain",
    content:
      "A scalable blockchain infrastructure supporting decentralized applications and smart contracts for enhanced security and transparency.",
      logo:"Blockchain"  },
];

export const Partnerdata = [
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
];

export const TOKEN_SEND: tokendata[] = [
  // {
  //   name: "BNB",
  //   symbol: "BNB",
  //   isNative: true,
  //   contractaddress: "",
  //   decimals: 18,
  // },
  {
    name: "USDT",
    symbol: "USDT",
    isNative: false,
    contractaddress: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    decimals: 6,
  },
  //0xc2132d05d31c914a87c6611c10748aeb04b58e8f
];


export const about_data = [
  {
    title:"Growth Potential",
    dec:"Foxe shows strong potential for future expansion and profitability."
  },
  {
    title:"Reputable Ownership",
    dec:"Owned by a well-known entrepreneur with successful European ventures."
  },
  {
    title:"Market Demand",
    dec:"Increasing demand for Foxe's offerings in its industry."
  }

]

export const token_data = [
  {
    title:"Token name:",
    dec:"Foxe Europe"
  },
  {
    title:"Ticker Symbol:",
    dec:"FOXE"
  },
  {
    title:"Total Supply:",
    dec:"8.000.000.000"
  },
  {
    title:"Minimum Purchase:",
    dec:"5 USDT"
  }
,

]

export const WorkData = [
  {
    title: "Choose Your Offer",
    logo:"1.svg",
    h:48,
    w:48
 
  },
  {
    title: "Connect wallet",
    logo:"2.svg",
    h:48,
    w:48
  },
  {
    title: "Clique Buy Now ",
    logo:"3.svg",
    h:29,
    w:60
  },
  {
    title: "Claim your Tokens",
    logo:"4.svg",
    h:48,
    w:48
  },
];


export const Team_data:TeamData = {
  1: [
    {
      name: "Mr. FOUAD Omar",
      logo: "Omar.png",
      cover: "omorCover.jpg",
      bridge: "Founder, CEO",
      content: "sasas",
      network: [
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/v%C3%AD%C3%B0ir-helgi-helgason-190a25179/",
        },
        {
          name: "telegram",
          link: "https://t.me/thenotoriousmonsi",
        },
        {
          name: "twitter",
          link: "https://twitter.com/notoriousmonsi",
        },
      ],
    },
  ],
  2: [
    {
      name: "Mohammad Nour Masoud",
      logo: "Masoud.png",
      cover: "cover2.jpg",
      bridge: "Co-Founder, VP",
      content: "Description for member 2",
      network: [
   
        {
          name: "linkedin",
          link: "https://t.me/member2",
        },
    
      ],
    },
    {
      name: "Mahmoud Awad",
      logo: "MahmoudAwad.png",
      cover: "cover2.jpg",
      bridge: "Co-Founder, CTO",
      content: "Description for member 2",
      network: [
   
        {
          name: "linkedin",
          link: "https://t.me/member2",
        },
    
      ],
    },
    {
      name: "Mohammad Nour Masoud",
      logo: "Masoud.png",
      cover: "cover2.jpg",
      bridge: " Lawyer",
      content: "Description for member 2",
      network: [
   
        {
          name: "linkedin",
          link: "https://t.me/member2",
        },
    
      ],
    },
    {
      name: "Safae Cherkaoui",
      logo: "SafaeCherkaoui.png",
      cover: "cover2.jpg",
      bridge: "COO",
      content: "Description for member 2",
      network: [
   
        {
          name: "linkedin",
          link: "https://t.me/member2",
        },
    
      ],
    },
    {
      name: "Ahmad Hachicha",
      logo: "AhmadHachicha.png",
      cover: "cover2.jpg",
      bridge: "CTO",
      content: "Description for member 2",
      network: [
   
        {
          name: "linkedin",
          link: "https://t.me/member2",
        },
    
      ],
    },
  ],
  3: [
    {
      name: "Marouan Kaddour",
      logo: "MarouanKaddour.png",
      cover: "cover2.jpg",
      bridge: "CIO",
      content: "Description for member 2",
      network: [
   
        {
          name: "linkedin",
          link: "https://t.me/member2",
        },
    
      ],
    },
    {
      name: "Haroun Bouhelal",
      logo: "HarounBouhelal.png",
      cover: "cover2.jpg",
      bridge: "CSO",
      content: "Description for member 2",
      network: [
   
        {
          name: "linkedin",
          link: "https://t.me/member2",
        },
    
      ],
    },
  ],
};