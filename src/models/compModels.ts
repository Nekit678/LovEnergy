import { AutoRequest, RegRequest } from "./models";


export interface LoginFormProps {
    formType: "auth" | "reg",
    authFunction?:(formData:AutoRequest)=>(any),
    regFunction?:(formData:RegRequest)=>(any)
}