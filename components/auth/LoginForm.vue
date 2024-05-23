<script setup>

import { useLogin } from '~/composables/authentication/useLogin'
const {  onSubmit, state, schema } = useLogin();
const checkbox = ref(true);

</script>

<template>
    <div class = "flex flex-col py-2 px-2">
      <UForm  :state="state" class="w-full"   @submit="onSubmit">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div class="mt-2">
              <UInput v-model="state.email" size="lg" id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Quên mật khẩu?</a>
              </div>
            </div>
            <div class="mt-2">
              <UInput v-model="state.password" size="lg" id="password" name="password" type="password" autocomplete="current-password" required="" class="block  w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button  type="submit" style ="background-color: rgb(79 70 229 / var(--tw-bg-opacity))" class="flex w-full mt-5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </UForm>
        
        <div cols="12" class="pt-0">
            <div class="d-flex flex-wrap align-center ml-n2">
                <v-checkbox v-model="checkbox"  color="primary" hide-details>
                    <template v-slot:label class="text-body-1">Remeber this Device</template>
                </v-checkbox>
                <div class="ml-sm-auto">
                    <NuxtLink to="/"
                        class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">Forgot
                        Password ?</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>