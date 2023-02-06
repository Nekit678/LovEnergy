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