interface User {
  username: string;
  email: string;
  name: string;
  profileImage: string;
}

interface SubmitFormData {
  text: string;
  mdeiaFiles: File[];
}

interface MediaFile {
  id: string;
  url: string;
}

interface Tweet {
  id: string;
  text: string;
  mediaFiles: MediaFile[];
  author: string | null;
  replies: Tweet[];
  replyTo: string | null;
  repliesCount: number;
  postedAtHuman: string;
}
