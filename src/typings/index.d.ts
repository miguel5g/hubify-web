interface ProjectData {
  id: string;
  author: string;
  author_id: string;
  title: string;
  description: string;
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
