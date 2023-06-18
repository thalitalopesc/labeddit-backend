import z from 'zod'
import { PostModel } from '../../models/Post'

export interface GetCommentInputDTO {
    token: string
}

export type GetCommentOutputDTO = PostModel[]

export const GetCommentSchema = z.object({
    token: z.string({
        required_error: "O 'token' é obrigatorio",
        invalid_type_error: "O token deve ser do tipo string"
    }).min(1)
}).transform((data) => data as GetCommentInputDTO)