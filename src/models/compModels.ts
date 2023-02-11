import { AutoRequest, RegRequest } from "./models";
import type { MenuProps } from 'antd';




export interface LoginFormProps {
    formType: "auth" | "reg",
    isLoading:boolean,
    authFunction?: (formData: AutoRequest) => (any),
    regFunction?: (formData: RegRequest) => (any)
}

// // // // // // // // // // // // // // // // // // // // // // 


export interface NavBarCreateItem{
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?:Required<MenuProps>['items'][number][],
    type?: 'group',
    className?: string
}

export interface MenuItem{
    
}


// // // // // // // // // // // // // // // // // // // // // // 

export interface FriendsItemProps {
    userId: number,
    imgUrl: string,
    name: string
}

export interface ProifileFriendsProps {
    friends: FriendsItemProps[]
}

//! добавить к компоненту ProfileInfo
export interface ProfileInfoProps {
    name: string,
    lastname: string,
    status:boolean,
    textStatus: string,
    date: string,
    frCount: number,
    photoCount: number,
    followCount: number,
    city:string
}

//! добавить к компоненту
export interface PhotoLineProps {
    photoURLs: string[]
}


export interface PostProps{
    img:string,
    text:string,
    name:string,
    lastname:string,
    likes:number,
    dislikes:number,
    mark:"like" | "dislike" | "nomark"
}