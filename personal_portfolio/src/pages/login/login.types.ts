import { ControllerRenderProps } from 'react-hook-form';

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface Answers {
  login: string;
  password: string;
}

export interface ControllerRender<T extends keyof Answers> {
  field: ControllerRenderProps<Answers, T>
}
