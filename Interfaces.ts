interface User {
  username: string;
  email: string;
  name: string;
  profileImage: string;
  handle:string
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
  author: User | null;
  replies: Tweet[];
  replyTo: Tweet | null;
  repliesCount: number;
  postedAtHuman: string;
}
