interface ProjectData {
  id: string;
  author: string;
  author_id: string;
  title: string;
  description: string;
  categories: string[];
  stars: number;
  feedbacks: number;
  impulses: number;
}

interface AppFeedbackData {
  id: string;
  author: string;
  author_id: string;
  image_url?: string;
  title: string;
  content: string;
}

interface FeedbackData {
  id: string;
  author: string;
  author_id: string;
  image_url?: string;
  content: string;
}

interface ChangelogData {
  id: string;
  author: string;
  author_id: string;
  image_url?: string;
  title: string;
  content: string;
  created_at: string;
}

type ExtendedProjectData = ProjectData & {
  comments: FeedbackData[];
  changelogs: ChangelogData[];
};

interface UserData {
  id: string;
  username: string;
  avatar_url: string | null;
}
