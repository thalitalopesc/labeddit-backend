import z from "zod";

export interface EditCommentInput {
    idToEdit: string,
    content: string,
    token: string
}

export type EditCommentOutput = undefined

export const EditCommentSchema = z.object({
    idToEdit: z.string(),
    content: z.string().min(1),
    token: z.string().min(1)
}).transform((data) => data as EditCommentInput)