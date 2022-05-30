<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3'
import FileInput from '@/components/FileInput'
import TextInput from '@/components/TextInput'
import SelectInput from '@/components/SelectInput'
import LoadingButton from '@/components/LoadingButton'
</script>
<template>
  <div>
    <Head title="Create User" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/users"
        >Users</Link
      >
      <span class="font-medium text-indigo-400">/</span> Create
    </h1>
    <div class="max-w-3xl overflow-hidden rounded-md bg-white shadow">
      <form @submit.prevent="store">
        <div class="-mb-8 -mr-6 flex flex-wrap p-8">
          <text-input
            v-model="form.first_name"
            :error="form.errors.first_name"
            class="w-full pb-8 pr-6 lg:w-1/2"
            label="First name"
          />
          <text-input
            v-model="form.last_name"
            :error="form.errors.last_name"
            class="w-full pb-8 pr-6 lg:w-1/2"
            label="Last name"
          />
          <text-input
            v-model="form.email"
            :error="form.errors.email"
            class="w-full pb-8 pr-6 lg:w-1/2"
            label="Email"
          />
          <text-input
            v-model="form.password"
            :error="form.errors.password"
            class="w-full pb-8 pr-6 lg:w-1/2"
            type="password"
            autocomplete="new-password"
            label="Password"
          />
          <select-input
            v-model="form.owner"
            :error="form.errors.owner"
            class="w-full pb-8 pr-6 lg:w-1/2"
            label="Owner"
          >
            <option :value="true">Yes</option>
            <option :value="false">No</option>
          </select-input>
          <file-input
            v-model="form.photo"
            :error="form.errors.photo"
            class="w-full pb-8 pr-6 lg:w-1/2"
            type="file"
            accept="image/*"
            label="Photo"
          />
        </div>
        <div
          class="flex items-center justify-end border-t border-gray-100 bg-gray-50 px-8 py-4"
        >
          <loading-button
            :loading="form.processing"
            class="btn-indigo"
            type="submit"
            >Create User</loading-button
          >
        </div>
      </form>
    </div>
  </div>
</template>
