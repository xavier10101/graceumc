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
    slug: "grace-umc-updates-souperbowl-sunday-bible-study-scout-activities",
    title: "Grace UMC Updates: Souperbowl Sunday, Bible Study Schedule, and Scout Activities",
    date: "2026-02-04",
    displayDate: "2/4/26",
    excerpt: "Grace UMC shares upcoming service and study plans, a health update for a parishioner, and notice of Scout activities at the church.",
    content:
      "Grace United Methodist Church invites the congregation and friends to join in for Souperbowl Sunday, encouraging attendees to bring soups, desserts, and donations for the Greer Soup Kitchen as part of worship and service. This event highlights the church’s commitment to community support through sharing meals and caring for those in need.\n\nBible Study is scheduled for this Wednesday, February 4 (2-4-26) at 6:00 p.m. Please note that the session on February 11 will be canceled, as Pastor Angie will be out of town.\n\nHealth update: Alton recently consulted with a heart specialist and will undergo an implant designed to monitor and manage his heart condition more closely. Please keep Alton and Christine in your prayers during this time.\n\nCommunity notice: A Girl Scout troop is now meeting at Grace UMC on Wednesday evenings, and another scout group is planned to meet here on February 21, reflecting the church’s role as a community gathering space.",
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

