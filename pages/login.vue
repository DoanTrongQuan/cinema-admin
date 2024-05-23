<!-- <template>

  <div class="flex mx-auto min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 max-w-md">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <UForm  :state="state" class="space-y-6" @submit="onSubmit">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <UInput v-model="state.email" size="lg" id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <UInput v-model="state.password" size="lg" id="password" name="password" type="password" autocomplete="current-password" required="" class="block  w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button  type="submit" style ="background-color: rgb(79 70 229 / var(--tw-bg-opacity))" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </UForm>


    </div>
  </div>
</template>

<script setup>

import { useLogin } from '~/composables/authentication/useLogin'

const {  onSubmit, state, schema } = useLogin();
      
definePageMeta({
  layout: false
})


</script> -->



<script setup>
import LoginForm from '~/components/auth/LoginForm.vue';

/*-For Set Blank Layout-*/
definePageMeta({
  layout: false,
});
</script>
<template>
    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-screen d-flex justify-center align-center">
                <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
                        <v-card-item class="pa-sm-8">
                            <div class="text-body-1 text-xl text-muted text-center mb-3 ">Đăng nhập</div>
                            <LoginForm />
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.authentication {
  background: radial-gradient(#d2f1df, #d3d7fa, #bad8f4) 0 0 / 400% 400%;
}
</style>