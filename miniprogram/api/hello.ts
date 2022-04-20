import { get } from "./request"

export interface HelloInterface {
    name: string
}

export const sayHello = () => {
    return get<HelloInterface>('/hello')
}