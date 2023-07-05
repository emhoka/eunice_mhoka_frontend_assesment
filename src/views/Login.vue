<template>
    <div class="flex flex-col bg-indigo-500 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 animate__animated animate__rotateInDownLeft">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6">
            <FormInput
              placeholder="Enter your username"
              v-model="username"
              type="text"
              title="Enter Your username"
              required="true"
            />
            <FormInput
              placeholder="••••••••"
              v-model="password"
              type="password"
              title="Password"
              required="true"
            />
            <div class="flex items-end">
              <div class="text-sm">
                <a class="font-medium text-indigo-500 hover:underline dark:text-blue-500" href="#">
                  Forget Password
                </a>
              </div>
            </div>
            <Button type="submit" buttonText="Login" @click="printUsernameAndPassword" />
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account?
              <a href="#" class="font-medium text-indigo-500 hover:underline dark:text-blue-500"></a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import FormInput from "@/components/FormInput.vue";
  import Button from "@/components/Button.vue";
  
  @Component({
    components: {
      FormInput,
      Button,
    },
  })
  export default class Login extends Vue {
    username: string = "";
    password: string = "";
  
    printUsernameAndPassword() {
      console.log("Username: ", this.username);
      console.log("Password: ", this.password);
    }
  }
  </script>
  