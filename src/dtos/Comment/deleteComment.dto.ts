import z from 'zod'

export interface DeleteCommentInputDTO {
    idToDelete: string,
    token: string
}

export type DeleteCommentOutputDTO = undefined

export const DeleteCommentSchema = z.object({
    idToDelete: z.string({
        required_error: "Insira um texto",
        invalid_type_error: "O texto deve ser do tipo 'string'"
    }).min(1),
    token: z.string().min(1)
}).transform((data) => data as DeleteCommentInputDTO)