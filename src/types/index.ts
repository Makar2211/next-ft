export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
