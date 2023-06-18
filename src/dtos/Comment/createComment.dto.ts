import z from 'zod'

export interface CreateCommentInputDTO {
    content: string,
    token: string
}

export type CreateCommentOutputDTO = undefined

export const CreateCommentSchema = z.object({
    content: z.string({
        required_error: "Insira um texto",
        invalid_type_error: "O texto deve ser do tipo 'string'"
    }).min(1),
    token: z.string().min(1)
}).transform((data) => data as CreateCommentInputDTO)