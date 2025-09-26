import { OneSkillObjectType, allSkills } from '@/hooks/useSkills';

export enum ProjectType {
  Personal = 'Personal',
  Freelance = 'Freelance',
  OpenSource = 'OpenSource',
}

export type ProjectDataType = {
  name: string;
  des: string;
  demo: string;
  github: string;
  image: string;
  skills: OneSkillObjectType[];
  type: ProjectType;
};

export type ProjectsObjectType = {
  [index: string]: ProjectDataType;
};
export const personalProjects: ProjectsObjectType = {
  travelnest: {
    name: 'TravelNest: Marketplace for vacation stays and experiences',
    des: 'TravelNest is an online marketplace that lets people book short-term stays, unique homes, or experiences worldwide, while allowing hosts to earn money by renting out their spaces.',
    demo: 'https://travel-nest-one.vercel.app/',
    github: 'https://github.com/atharv-asr-group/TravelNest',
    image: '/images/projects/travelnest.png',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss,
      allSkills.prisma
    ],
    type: ProjectType.Personal,
  },
  zapier: {
    name: 'Zapier: Automate Workflows',
    des: 'Zapier is a web-based service that allows users to automate workflows by connecting different apps and services. Users can create "Zaps" to trigger actions in one app based on events in another, streamlining their productivity and task management.',
    demo: 'https://github.com/atharv-asr-group/zapier-c',
    github: 'https://github.com/atharv-asr-group/zapier-c',
    image: '/images/projects/zapier.png',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss,
      allSkills.prisma
    ],
    type: ProjectType.Personal,
  },
  datavault: {
    name: 'DataVault - Protecting Your Data on the Blockchain',
    des: 'DataVault is a decentralized application (Dapp) that allows users to securely store their passwords and files on the blockchain. The application employs advanced encryption techniques to ensure the confidentiality of user data, and the encrypted information is stored on the blockchain, accessible only by the user with the private key.',
    demo: 'https://data-vault-project.vercel.app/',
    github: 'https://github.com/atharv-asr-group/auth-certficates',
    image: '/images/projects/data-vault.png',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss,
      allSkills.etherjs,
      allSkills.solidity,
      allSkills.hardhat,
    ],
    type: ProjectType.Personal,
  },

  chainintract: {
    name: 'ChainIntract: Seamlessly Interact with Blockchain Smart Contracts',
    des: 'Welcome to my portfolio! This website showcases my skills and projects as a Full Stack Blockchain Developer.',
    demo: 'https://atharv-asr-group.vercel.app/',
    github: 'https://github.com/atharv-asr-group/abhi-thory',
    image: '/images/projects/chain-intract.png',

    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss,
      allSkills.etherjs,
    ],
    type: ProjectType.Personal,
  },
  portfoilio: {
    name: "Atharv Srivastava's Portfolio",
    des: 'Welcome to my portfolio! This website showcases my skills and projects as a Full Stack and AI systems Developer.',
    demo: 'https://github.com/atharv-asr-group/',
    github: 'https://github.com/atharv-asr-group/',
    image: '/images/projects/atharvf14t.png',

    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss,
    ],
    type: ProjectType.Personal,
  },
  tubecowork: {
    name: 'TubeWork',
    des: 'TubeWork is a collaborative platform designed to streamline YouTube content creation and management. It empowers content creators, managers, and editors to work seamlessly together, simplifying video uploads, metadata editing, approval workflows, and scheduling.',
    demo: 'https://github.com/TubeCowork/tubecowork-project',
    github: 'https://github.com/TubeCowork/tubecowork-project',
    image: '/images/projects/tube-cowork.png',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss,
    ],
    type: ProjectType.Personal,
  },
};

export const opensourceProjects: ProjectsObjectType = {
  
  agentgpt: {
    name: 'AgentGPT',
    des: 'AgentGPT allows you to configure and deploy Autonomous AI agents. Name your own custom AI and have it embark on any goal imaginable. It will attempt to reach the goal by thinking of tasks to do, executing them, and learning from the results.',
    demo: 'https://github.com/atharv-asr-group/',
    github: 'https://github.com/atharv-asr-group/',
    image: '/images/projects/agentgpt.png',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss,
    ],
    type: ProjectType.OpenSource,
  },
};

export const freelanceProjects: ProjectsObjectType = {
  guerdonVictor: {
    name: 'Guerdon Victor: PvP NFT Combat Game',
    des: "It's is one of the best skill based PvP NFT Combat Game based on new reward model K2E (Kill-to-Earn) which captures the essence of classic games like Tekken and Mortal Kombat. It is built on Binance Smart Chain Network and is developed in Unreal Engine. Here you can earn rewards based on your strategy, intellectual gameplay, and proper engagement. The game has made quite a fresh entry into the NFT gaming zone. The main idea behind the game development is entertainment and involvement of the gamers. To provide the gamers with the best combat gaming experiences, there will be new features added to the game periodically. So the players can remain engaged, and the game becomes even more interesting.",
    demo: 'https://guerdon-victor-omega.vercel.app/',
    github: 'https://github.com/atharv-asr-group/guerdonVictor',
    image: '/images/projects/guerdon-victor.png',
    skills: [
      allSkills.reactjs,
      allSkills.javascript,
      allSkills.nodejs,
      allSkills.sass,
      allSkills.etherjs,
      allSkills.solidity,
      allSkills.hardhat,
    ],
    type: ProjectType.Freelance,
  },
  sharkboyfightclub: {
    name: 'SHARK BOY FIGHT CLUB',
    des: "SBFC is a collection of 8,888 exclusive Shark Boy generated Non Fungible Tokens (NFTS) - unique digital collectibles living on the Ethereum blockchain. You'll be able to purchase, trade, train and compete your Sharks here at the SBFC’s FighterVerse.",
    demo: 'https://sharkboyfightclub.com/',
    github: 'https://sharkboyfightclub.com/',
    image: '/images/projects/sharkboy.png',
    skills: [
      allSkills.reactjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.sass,
      allSkills.etherjs,
      allSkills.solidity,
      allSkills.hardhat,
    ],
    type: ProjectType.Freelance,
  },
  jetpackcat: {
    name: 'Jetpackcat: Nft based game',
    des: 'Jetpack Cat is a 3,777 NFTs collection minted on the Ethereum Blockchain. Each Jetpack Cat is equipped with a special designed Jetpack system that gives them precise control to travel to the space or until the gas tank empty.',
    demo: 'https://www.jetpackcat.io/',
    github: 'https://www.jetpackcat.io/',
    image: '/images/projects/jectpackcat.png',
    skills: [
      allSkills.reactjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.sass,
      allSkills.etherjs,
      allSkills.solidity,
      allSkills.hardhat,
    ],
    type: ProjectType.Freelance,
  },
  donpepe: {
    name: 'DonPepe: New crypto token',
    des: 'Don Pepe is a new crypto token that is based on the famous meme coin Pepe. The project aims to create the first meme coin with an AI-powered exchange system. This exchange system will make it easier and more secure for people to buy, sell, and trade cryptocurrencies. The Don Pepe token will be used to power the exchange system and will also be used to reward users for participating in the community.',
    demo: 'https://www.donpepe-ai.com/',
    github: 'https://github.com/atharv-asr-group/pepe-coin',
    image: '/images/projects/donpepe.png',
    skills: [
      allSkills.nextjs,
      allSkills.typescript,
      allSkills.nodejs,
      allSkills.tailwindcss,
      allSkills.etherjs,
      allSkills.solidity,
    ],
    type: ProjectType.Freelance,
  },
};
