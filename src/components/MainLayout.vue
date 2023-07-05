<template>
        <div>
      <div class="w-full bg-indigo-500 h-44 flex items-center justify-center font-raleway">
        <h1 class="text-4xl font-bold text-white">Frontend Assessment</h1>
      </div>
      <div class="bg-gray-800 w-full flex items-center justify-center h-12">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a href="#"
                class="inline-flex items-center text-md font-medium text-white hover:text-indigo-500 dark:text-gray-400 dark:hover:text-white">
                <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                  </path>
                </svg>
                <router-link to="/" class="nav-link">Login </router-link>
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg aria-hidden="true" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
                <a href="#"
                  class="ml-1 text-md font-medium text-white hover:text-indigo-500 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                  <router-link to="/countries" class="nav-link">Countries</router-link></a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div>
    <router-view />
        </div>
      </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  
  @Component
  export default class MainLayout extends Vue {}
  </script>
  
  