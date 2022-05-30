<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3'
import Icon from '../../components/Icon'
import Pagination from '../../components/Pagination.vue'
defineProps({
  organizations: Object
})
</script>
<template>
  <div>
    <Head>
      <title>Organizations</title>
    </Head>
    <h1 class="mb-8 text-3xl font-bold">Organizations</h1>
    <div class="mb-6 flex items-center justify-end">
      <Link
        class="whitespace-nowrap rounded bg-indigo-600 px-6 py-3 text-sm font-bold leading-4 text-white hover:bg-orange-400 focus:bg-orange-400"
        href="/organizations/create"
      >
        <span>Create</span>
        <span class="hidden md:inline">&nbsp;Organization</span>
      </Link>
    </div>
    <div class="overflow-x-auto rounded-md bg-white shadow">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="text-left font-bold">
            <th class="px-6 pb-4 pt-6">Name</th>
            <th class="px-6 pb-4 pt-6">City</th>
            <th class="px-6 pb-4 pt-6" colspan="2">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="organization in organizations.data"
            :key="organization.id"
            class="focus-within:bg-gray-100 hover:bg-gray-100"
          >
            <td class="border-t">
              <Link
                class="flex items-center px-6 py-4 focus:text-indigo-500"
                :href="`/organizations/${organization.id}/edit`"
              >
                {{ organization.name }}
                <icon
                  v-if="organization.deletedAt"
                  name="trash"
                  class="ml-2 h-3 w-3 flex-shrink-0 fill-gray-400"
                />
              </Link>
            </td>
            <td class="border-t">
              <Link
                class="flex items-center px-6 py-4"
                :href="`/organizations/${organization.id}/edit`"
                tabindex="-1"
              >
                {{ organization.city }}
              </Link>
            </td>
            <td class="border-t">
              <Link
                class="flex items-center px-6 py-4"
                :href="`/organizations/${organization.id}/edit`"
                tabindex="-1"
              >
                {{ organization.phone }}
              </Link>
            </td>
            <td class="w-px border-t">
              <Link
                class="flex items-center px-4"
                :href="`/organizations/${organization.id}/edit`"
                tabindex="-1"
              >
                <icon
                  name="cheveron-right"
                  class="block h-6 w-6 fill-gray-400"
                />
              </Link>
            </td>
          </tr>
          <tr v-if="organizations.data.length === 0">
            <td class="border-t px-6 py-4" colspan="4">
              No organizations found.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <pagination class="mt-6" :links="organizations.links" />
  </div>
</template>
