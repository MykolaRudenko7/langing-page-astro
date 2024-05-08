type MenuItem = {
  name: string;
  icon?: string;
};

type Menu = {
  title: string;
  items: MenuItem[];
};

export const menuItems: Menu[] = [
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
