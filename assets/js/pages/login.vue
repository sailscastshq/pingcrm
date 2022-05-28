<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import Logo from '../components/Logo'
import TextInput from '../components/TextInput.vue'
import LoadingButton from '../components/LoadingButton.vue'
import { useForm } from '@inertiajs/inertia-vue3'
const form = useForm({
  email: 'jacksparrow@blackpearl.com',
  password: 'parley',
  remember: false
})

function login() {
  form.post('/login')
}
</script>
<script>
export default {
  layout: null
}
</script>
<template>
  <Head>
    <title>Login</title>
  </Head>
  <div class="flex min-h-screen items-center justify-center bg-indigo-800 p-6">
    <div class="w-full max-w-md">
      <logo class="mx-auto block w-full max-w-xs fill-white" height="50" />
      <form
        class="mt-8 overflow-hidden rounded-lg bg-white shadow-xl"
        @submit.prevent="login"
      >
        <div class="px-10 py-12">
          <h1 class="text-center text-3xl font-bold">Welcome Back!</h1>
          <div class="mx-auto mt-6 w-24 border-b-2" />
          <text-input
            v-model="form.email"
            :error="form.errors.email"
            class="mt-10"
            label="Email"
            type="email"
            autofocus
            autocapitalize="off"
          />
          <text-input
            v-model="form.password"
            :error="form.errors.password"
            class="mt-6"
            label="Password"
            type="password"
          />
          <label class="mt-6 flex select-none items-center" for="remember">
            <input
              id="remember"
              v-model="form.remember"
              class="mr-1"
              type="checkbox"
            />
            <span class="text-sm">Remember Me</span>
          </label>
        </div>
        <div class="flex border-t border-gray-100 bg-gray-100 px-10 py-4">
          <loading-button
            :loading="form.processing"
            class="focus:bg-orange-400; ml-auto whitespace-nowrap rounded bg-indigo-600 px-6 py-3 text-sm font-bold leading-4 text-white hover:bg-orange-400"
            type="submit"
            >Login</loading-button
          >
        </div>
      </form>
    </div>
  </div>
</template>
