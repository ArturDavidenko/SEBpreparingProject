export interface Profile {
    id: string,
    firstName: string,
    lastName: string,
    role: string,
    phoneNumber: string,
    orders: string[],
    image: string | null,
    imageId: string | null
}