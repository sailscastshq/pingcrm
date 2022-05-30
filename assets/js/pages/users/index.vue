<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3'
import Icon from '../../components/Icon'

defineProps({
  users: Array
})
</script>
<template>
  <div>
    <Head>
      <title>Users</title>
    </Head>
    <h1 class="mb-8 text-3xl font-bold">Users</h1>

    <div class="overflow-x-auto rounded-md bg-white shadow">
      <table class="w-full whitespace-nowrap">
        <tr class="text-left font-bold">
          <th class="px-6 pb-4 pt-6">Name</th>
          <th class="px-6 pb-4 pt-6">Email</th>
          <th class="px-6 pb-4 pt-6" colspan="2">Role</th>
        </tr>
        <tr
          v-for="user in users"
          :key="user.id"
          class="focus-within:bg-gray-100 hover:bg-gray-100"
        >
          <td class="border-t">
            <Link
              class="flex items-center px-6 py-4 focus:text-indigo-500"
              :href="`/users/${user.id}/edit`"
            >
              <img
                v-if="user.photo"
                class="-my-2 mr-2 block h-5 w-5 rounded-full"
                :src="user.photo"
              />
              {{ user.firstName }} {{ user.lastName }}
              <icon
                v-if="user.deletedAt"
                name="trash"
                class="ml-2 h-3 w-3 flex-shrink-0 fill-gray-400"
              />
            </Link>
          </td>
          <td class="border-t">
            <Link
              class="flex items-center px-6 py-4"
              :href="`/users/${user.id}/edit`"
              tabindex="-1"
            >
              {{ user.email }}
            </Link>
          </td>
          <td class="border-t">
            <Link
              class="flex items-center px-6 py-4"
              :href="`/users/${user.id}/edit`"
              tabindex="-1"
            >
              {{ user.owner ? 'Owner' : 'User' }}
            </Link>
          </td>
          <td class="w-px border-t">
            <Link
              class="flex items-center px-4"
              :href="`/users/${user.id}/edit`"
              tabindex="-1"
            >
              <icon name="cheveron-right" class="block h-6 w-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-if="users.length === 0">
          <td class="border-t px-6 py-4" colspan="4">No users found.</td>
        </tr>
      </table>
    </div>
  </div>
</template>
