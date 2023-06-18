import z from 'zod'
import { PostModel } from '../../models/Post'

export interface GetPostInputDTO {
    token: string
}

export type GetPostOutputDTO = PostModel[]

export const GetPostSchema = z.object({
    token: z.string({
        required_error: "O 'token' é obrigatorio",
        invalid_type_error: "O token deve ser do tipo string"
    }).min(1)
}).transform((data) => data as GetPostInputDTO)