/// <reference types="vite/client" />

export type Admin = {
    id: number
    name: string,
    email: string,
    contact: string,
    role: string
    status: string,
}

export type Roles = {
    id: number,
    RoleName: string,
    User: number
}