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
    slug: "grace-umc-souperbowl-bible-study-and-community-updates",
    title: "Grace UMC Updates: Souperbowl Sunday, Bible Study Schedule, and Community Activities",
    date: "2026-02-04",
    displayDate: "2/4/26",
    excerpt: "Grace UMC invites participation in Souperbowl Sunday for Greer Soup Kitchen, notes a Bible Study schedule with a cancellation, and requests prayers for Alton and Christine, while highlighting ongoing community programs.",
    content:
      "Grace United Methodist Church invites the community to participate in Souperbowl Sunday, contributing soups and desserts along with donations to the Greer Soup Kitchen. This outreach effort highlights the church’s commitment to helping neighbors in need and sharing a warm meal with the wider community.\n\nA reminder for Wednesday Bible Study: the group meets at 6:00 PM. Please note that the session on February 11 will be canceled due to Pastor Angie being out of town.\n\nPlease keep Alton and Christine in your prayers. Alton recently consulted with a heart specialist and will undergo an implant designed to monitor and manage his condition more closely.\n\nIn addition to worship and study, the church continues to host community programs, including a Girl Scout troop that now meets on Wednesday evenings, with another troop group scheduled to meet here on February 21.",
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

