<template>
  <h3 class="text-3xl mb-6 text-center font-bold leading-6 text-blue-600">Ai CRM</h3>
  <div class="w-1/3 p-6 rounded-2xl bg-white shadow-md">
    <span class="block text-2xl mb-4 text-center font-medium leading-6 text-gray-900">
      Регистрация
    </span>
    <form @submit.prevent="submitForm">
      <div class="flex justify-between mb-4">
        <div>
          <label class="block text-sm text-gray-500" for="firstName">Имя</label>
          <input
            class="w-full p-2.5 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
            v-model="firstName"
            type="text"
            placeholder="Иван"
            id="firstName"
          />
          <span>{{ errors.firstName }}</span>
        </div>
        <div>
          <label class="block text-sm text-gray-500" for="lastName">Фамилия</label>
          <input
            class="w-full p-2.5 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
            v-model="lastName"
            type="text"
            placeholder="Иванов"
            id="lastName"
          />
          <span>{{ errors.lastName }}</span>
        </div>
      </div>
      <div class="mb-4">
        <label class="block text-sm text-gray-500" for="email">E-mail</label>
        <input
          class="w-full p-2.5 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
          v-model="email"
          type="email"
          placeholder="mail@mail.ru"
          id="email"
        />
        <span>{{ errors.email }}</span>
      </div>
      <div class="flex justify-between mb-4">
        <div>
          <label class="block text-sm text-gray-500" for="password">Пароль</label>
          <input
            class="w-full p-2.5 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
            v-model="password"
            type="password"
            placeholder="********"
            id="password"
          />
          <span>{{ errors.password }}</span>
        </div>
        <div>
          <label class="block text-sm text-gray-500" for="passwordConfirm">
            Подтвердите пароль
          </label>
          <input
            class="w-full p-2.5 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
            v-model="passwordConfirm"
            type="password"
            placeholder="********"
            id="passwordConfirm"
          />
          <span>{{ errors.passwordConfirm }}</span>
        </div>
      </div>
      <div class="mb-4">страница логина</div>
      <button
        class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="submit"
      >
        Отправить
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useField, useForm } from 'vee-validate';
import { useToast } from 'vue-toastification';
import { useSignUpValidator } from '@/helpers/validators';

const router = useRouter();
const toast = useToast();
const signUpSchema = useSignUpValidator();
const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: signUpSchema,
});

const { value: firstName } = useField('firstName');
const { value: lastName } = useField('lastName');
const { value: email } = useField('email');
const { value: password } = useField('password');
const { value: passwordConfirm } = useField('passwordConfirm');

const submitForm = handleSubmit((values) => {
  console.log('values: ', values);
  resetForm();
});
</script>
