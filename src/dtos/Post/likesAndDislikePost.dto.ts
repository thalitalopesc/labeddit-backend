import z from 'zod'

export interface likeOrDislikeInputDTO {
    postId: string,
    token: string,
    like: boolean
}

export type likeOrDislikeOutputDTO = undefined

export const likeOrDislikeSchema = z.object({
    token: z.string({
        required_error: "O 'token' é obrigatorio",
        invalid_type_error: "O token deve ser do tipo string"
    }).min(1),
    postId: z.string(),
    like: z.boolean()
}).transform((data) => data as likeOrDislikeInputDTO)