import { z } from 'zod'

export const employeeSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.email('E-mail inválido'),
  cpf: z.string().length(11, 'CPF é obrigatório'),
  phone: z.string().min(8, 'Celular é obrigatório'),
  dateOfBith: z.string().min(1, 'Data de nascimento é obrigatória'),
  typeOfHiring: z.enum(['CLT', 'PJ'], {
    error: 'Tipo de contratação é obrigatório',
  }),
  status: z.boolean(),
})

export type Employee = z.infer<typeof employeeSchema>
