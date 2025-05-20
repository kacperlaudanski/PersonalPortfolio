import { ControllerRenderProps } from "react-hook-form";
import { z } from "zod";

export interface Answers {
  user_name: string;
  user_surname: string;
  user_email: string;
  user_password: string;
  user_password_repeat: string;
}

export interface ControllerRender<T extends keyof Answers> {
  field: ControllerRenderProps<Answers, T>
}

export interface Schema {
  user_name: z.ZodString;
  user_surname: z.ZodString;
  user_email: z.ZodString;
  user_password: z.ZodString;
  user_password_repeat: z.ZodString;
}
