import { z, ZodSchema } from 'zod';

import { passwordRegex } from '../../../../regexps';

export const userSchema: ZodSchema = z.object({
  user_name: z
    .string()
    .min(2, 'Zbyt krótkie imię')
    .max(128, 'Zbyt długie imię'),
  user_surname: z
    .string()
    .min(2, 'Zbyt krótkie nazwisko')
    .max(128, 'Zbyt długie nazwisko'),
  user_email: z
    .string()
    .email('Nieprawidłowy adres email')
    .trim(),
  user_password: z
    .string()
    .regex(passwordRegex, 'Hasło musi mieć min. 8 znaków, w tym wielką i małą literę, cyfrę i znak specjalny'),
  user_password_repeat: z
    .string()
})
.refine((data) => data.user_password === data.user_password_repeat, {
  message: 'Hasła nie są takie same',
  path: ['user_password_repeat'],
});
