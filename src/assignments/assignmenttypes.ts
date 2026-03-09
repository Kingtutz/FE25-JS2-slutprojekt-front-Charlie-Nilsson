export type Assignment = {
    title: string,
    description: string,
    catagory: string,
    status: string,
    timestamp: string,
    member: string,
    finishtime: string,
    id: `${string}-${string}-${string}-${string}-${string}`
}
export type NewAssignment = {
    title: string,
    description: string,
    catagory: string,
    status: string,
    timestamp: string,
    member: string,
    finishtime: string
}

export type UpdateAssignment = {
    id: `${string}-${string}-${string}-${string}-${string}`,
    status?: string,
    member?: string
    finishtime?: string
}