export interface UserImage {
    id: number;
    imageName: string;
}

export interface User {
    id: number;
    name: string;
    description: string;
    images: UserImage[];
}
