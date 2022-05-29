<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import Logo from '../components/Logo'
import FlashMessages from '../components/FlashMessages'
import Icon from '../components/Icon'
import MainMenu from '../components/MainMenu'
import AccountDropdown from '../components/AccountDropdown'

import { usePage } from '@inertiajs/inertia-vue3'

const loggedInUser = usePage().props.value.loggedInUser
</script>
<template>
  <div>
    <div id="dropdown"></div>
    <div class="md:flex md:flex-col">
      <div class="md:flex md:h-screen md:flex-col">
        <div class="md:flex md:flex-shrink-0">
          <div
            class="flex items-center justify-between bg-indigo-900 px-6 py-4 md:w-56 md:flex-shrink-0 md:justify-center"
          >
            <Link class="mt-1" href="/">
              <logo class="fill-white" width="120" height="28" />
            </Link>
            <account-dropdown class="md:hidden">
              <template #default>
                <svg
                  class="h-6 w-6 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </template>
              <template #dropdown>
                <div class="mt-2 rounded bg-indigo-800 px-8 py-4 shadow-lg">
                  <main-menu />
                </div>
              </template>
            </account-dropdown>
          </div>
          <div
            class="md:text-md flex w-full items-center justify-between border-b bg-white p-4 text-sm md:px-12 md:py-0"
          >
            <div class="mr-4 mt-1">{{ loggedInUser.account.name }}</div>
            <account-dropdown class="mt-1">
              <template #default>
                <div class="group flex cursor-pointer select-none items-center">
                  <div
                    class="mr-1 whitespace-nowrap text-gray-700 focus:text-indigo-600 group-hover:text-indigo-600"
                  >
                    <span>{{ loggedInUser.firstName }}</span>
                    <span class="hidden md:inline"
                      >&nbsp;{{ loggedInUser.lastName }}</span
                    >
                  </div>
                  <icon
                    class="h-5 w-5 fill-gray-700 focus:fill-indigo-600 group-hover:fill-indigo-600"
                    name="cheveron-down"
                  />
                </div>
              </template>
              <template #dropdown>
                <div class="mt-2 rounded bg-white py-2 text-sm shadow-xl">
                  <Link
                    class="block px-6 py-2 text-left hover:bg-indigo-500 hover:text-white"
                    :href="`/users/${loggedInUser.id}/edit`"
                    >My Profile</Link
                  >
                  <Link
                    class="block px-6 py-2 hover:bg-indigo-500 hover:text-white"
                    href="/users"
                    >Manage Users</Link
                  >
                  <Link
                    class="block w-full px-6 py-2 text-left hover:bg-indigo-500 hover:text-white"
                    href="/logout"
                    method="delete"
                    as="button"
                    >Logout</Link
                  >
                </div>
              </template>
            </account-dropdown>
          </div>
        </div>
        <div class="md:flex md:flex-grow md:overflow-hidden">
          <main-menu
            class="hidden w-56 flex-shrink-0 overflow-y-auto bg-indigo-800 p-12 md:block"
          />
          <div
            class="px-4 py-8 md:flex-1 md:overflow-y-auto md:p-12"
            scroll-region
          >
            <!-- <flash-messages /> -->
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
