import z from "zod";

export interface EditPostInput {
    idToEdit: string,
    content: string,
    token: string
}

export type EditPostOutput = undefined

export const EditPostSchema = z.object({
    idToEdit: z.string(),
    content: z.string().min(1),
    token: z.string().min(1)
}).transform((data) => data as EditPostInput)