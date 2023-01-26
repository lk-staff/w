import * as yup from 'yup';

export const useSignUpValidator = () => {
  return yup.object({
    firstName: yup.string().required('Поле имя обязательно!'),
    lastName: yup.string().required('Поле фамилия обязательно!'),
    email: yup.string().required('Поле E-mail обязательно!').email(),
    password: yup
      .string()
      .required('Поле пароль обязательно!')
      .min(8, 'Пароль должен быть больше 8 символов')
      .max(32, 'Пароль должен быть меньше 32 символов'),
    passwordConfirm: yup
      .string()
      .required('Пароли не совпадают!')
      .oneOf([yup.ref('password'), 'Пароли не совпадают!']),
  });
};

export const useSignInValidator = () => {
  return yup.object({
    email: yup.string().required('Поле E-mail обязательно!').email(),
    password: yup
      .string()
      .required('Поле пароль обязательно!')
      .min(8, 'Пароль должен быть больше 8 символов')
      .max(32, 'Пароль должен быть меньше 32 символов'),
  });
};
