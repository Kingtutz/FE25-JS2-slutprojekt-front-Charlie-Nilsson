export type Assignment={
    title: string,
    description:string,
    catagory: string,
    status:string,
    timestamp: string,
    member: string
    id:`${string}-${string}-${string}-${string}-${string}`
}
export type NewAssignment={
    title: string,
    description:string,
    catagory: string,
    status:string,
    timestamp: string,
    member: string
}

export type UpdateAssignmentPayload = {
    id: `${string}-${string}-${string}-${string}-${string}`,
    status?: string,
    member?: string
}