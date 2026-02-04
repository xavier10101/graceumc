export type Article = {
  slug: string;
  title: string;
  date: string;
  displayDate?: string;
  excerpt: string;
  content: string;
};

export const articles: Article[] = [
    {
    slug: "grace-umc-bible-study-tonight-and-pastor-angies-birthday",
    title: "Grace UMC Bible Study Tonight at 6 PM and Pastor Angie's Birthday",
    date: "2026-02-04",
    displayDate: "2/4/26",
    excerpt: "Grace UMC invites the community to Bible study tonight at 6 PM and to celebrate Pastor Angie’s birthday.",
    content:
      "Grace United Methodist Church invites the congregation to join Bible study this evening at 6:00 PM. The gathering offers a time for study and reflection within the church community. In addition, the event is noted as a celebration of Pastor Angie’s birthday, adding a warm, communal touch to the evening.\n\nThe update comes from Grace UMC’s office staff, Leslie and Pam. For those seeking more information, details are available on the church’s Facebook page (Grace UMC Greer).",
  },
  {
    slug: "photos-with-santa-crafts-and-bingo",
    title: "Photos with Santa, Crafts, and Bingo",
    date: "2025-12-12",
    displayDate: "12/12/25",
    excerpt: "Photos with Santa, Crafts, and Bingo on December 12th, 2025. \nA geat time was had by all!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    slug: "gingerbread-house-creation-event",
    title: "Gingerbread House Creation Event",
    date: "2025-12-03",
    displayDate: "12/3/25",
    excerpt: "Kids building Gingerbread Houses - Creation Event a big success on December 3rd, 2025.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    slug: "grace-umc-holiday-market",
    title: "Grace UMC Holiday Market",
    date: "2025-11-08",
    displayDate: "11/8/25",
    excerpt: "Vendors, Door Prizes, and Festive Activities occurred at the Grace UMC Holiday Market on November 8th, 2025.",
    content:
      "Join us for the Grace UMC Holiday Market from 8am-2pm with vendors, door prizes, and festive activities for all ages.",
  },
  {
    slug: "update-from-pastor-weston-and-family-in-hungary",
    title: "Update from Pastor Weston & Family in Hungary",
    date: "2025-05-26",
    displayDate: "5/26/25",
    excerpt: "An update from the Reeves-Pendergrass Team as they serve in Hungary",
    content:
      "An update from Pastor Weston and family as the Reeves-Pendergrass Team continues their ministry in Hungary.",
  },
];

export function getAllArticles(): Article[] {
  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

