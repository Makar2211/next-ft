export interface Post {
  _id: string;
  title: string;
  desc: string;
  image: string;
  content: string;
  username: string;
}

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
