export interface Post {
    title: string;
    type: string;
    fileLocation: string;
    date: string;
    description: string;
}

export interface PostView {
    title: string;
    content: string;
    date: string;
    description: string;
}