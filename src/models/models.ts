export interface ServerResponse<T> {
    data: T;
    error: Error;
}

export interface Error {
    err_messages: string[];
    error_code: number;
}

// //////////////////////////////////////////////////////////

export interface AuthMeData {
    login: string;
}

// //////////////////////////////////////////////////////////

export interface RegRequest {
    login: string,
    password: string
}

export interface RegData {

}

// //////////////////////////////////////////////////////////


export interface AutoRequest {
    login: string,
    password: string,
    remember: boolean
}

export interface AutoData {

}

// //////////////////////////////////////////////////////////

export interface getPostsRequest {
    page: number,
    profile_id: number
}

export interface PostData {
    id: number,
    img: string,
    text: string,
    name: string,
    lastname: string,
    likes: number,
    dislikes: number,
    mark: "nomark" | "liked" | "disliked"
}

export interface getPostsData{
    posts:PostData[]
    totalCount:number
}


export interface sendPostRequest{
    text:string,
    profileId:number
}
