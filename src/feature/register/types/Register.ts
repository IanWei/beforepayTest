export interface Data {
    email: string,
    password: string,
    status: string
    bank: string,
    id: string
}

export type InputType = 'email' | 'password' | 'status' | 'bank' | 'id';
