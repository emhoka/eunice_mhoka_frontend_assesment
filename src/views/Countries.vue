<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
            <th scope="col" class="px-6 py-3">
              Active
            </th>
            <th scope="col" class="px-6 py-3">
              Date Created
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            v-for="country in countries"
            :key="country.id"
          >
            <td class="px-6 py-4">
              {{ country.id }}
            </td>
            <td class="px-6 py-4">
              {{ country.name }}
            </td>
            <td class="px-6 py-4">
              {{ country.status }}
            </td>
            <td class="px-6 py-4">
              {{ country.active }}
            </td>
            <td class="px-6 py-4">
              {{ country.dateCreated }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts">
  import { Vue } from 'vue-property-decorator';
  import axios from 'axios';
  
  interface Country {
    id: number;
    name: string;
    status: string;
    dateCreated: string;
    active: boolean;
  }

  export default class Countries extends Vue {
    countries: Country[] = [];
  
    mounted() {
      this.fetchCountries();
    }
  
    fetchCountries() {
      axios
        .get('http://localhost:9099/locations-management/v1/countries')
        .then((response) => {
          this.countries = response.data.countryList;
        })
        .catch((error) => {
          console.error('Error fetching countries:', error);
        });
    }
  }
  </script>
  