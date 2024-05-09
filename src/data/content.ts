type NavigationItems = {
  name: string;
  icon?: string;
};

type NavigationButtons = {
  title: string;
  items: NavigationItems[];
};

type Client = {
  name: string;
  logo: string;
};

type HeroImages = {
  mobile: string;
  desktop: string;
};

type MainContent = {
  heading: string;
  text: string;
  button: string;
  clients: Client[];
  heroImages: HeroImages;
};

export const navigationButtons: NavigationButtons[] = [
  {
    title: "Features",
    items: [
      { name: "Todo List", icon: "images/icon-todo.svg" },
      { name: "Calendar", icon: "images/icon-calendar.svg" },
      { name: "Reminders", icon: "images/icon-reminders.svg" },
      { name: "Planning", icon: "images/icon-planning.svg" }
    ]
  },
  {
    title: "Company",
    items: [{ name: "History" }, { name: "Our Team" }, { name: "Blog" }]
  }
];

export const mainContent: MainContent = {
  heading: "Make remote work",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis atque, corporis eius nobis recusandae voluptatum eaque? Totam tempore asperiores, quo illo quae nihil deleniti, earum rerum autem architecto fugiat?",
  button: "Learn More",
  clients: [
    {
      name: "Databiz",
      logo: "images/client-databiz.svg"
    },
    {
      name: "Audiophile",
      logo: "images/client-audiophile.svg"
    },
    {
      name: "Meet",
      logo: "images/client-meet.svg"
    },
    {
      name: "Maker",
      logo: "images/client-maker.svg"
    }
  ],
  heroImages: {
    mobile: "images/image-hero-mobile.png",
    desktop: "images/image-hero-desktop.png"
  }
};
