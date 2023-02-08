import { AutoRequest, RegRequest } from "./models";


export interface LoginFormProps {
    formType: "auth" | "reg",
    authFunction?: (formData: AutoRequest) => (any),
    regFunction?: (formData: RegRequest) => (any)
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
    status: string,
    date: string,
    frCount: number,
    photoCount: number,
    followCount: number
}

