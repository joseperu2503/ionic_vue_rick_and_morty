<template>
  <ion-header>
    <ion-toolbar class="safe-area-top">
      <div class="w-[57px]"></div>
      <ion-title v-if="!user">{{ form == 'login' ? 'Login' : 'Register' }}</ion-title>
      <ion-title v-else>Profile</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="closeAuthModal" color="light">Close</ion-button>
      </ion-buttons>
      <ion-progress-bar type="indeterminate" v-if="loading"></ion-progress-bar>
    </ion-toolbar>
  </ion-header>


  <ion-content>
    <div
      class="flex flex-col justify-center h-full ion-padding bg-gradient-to-t from-black from-20% via-transparent via-60%">
      <template v-if="!user">
        <transition name="fade-form" mode="out-in">
          <div v-if="form == 'login'">
            <form class="flex flex-col gap-10" @keydown.enter="login">
              <div>
                <ion-input label-placement="floating" label="Email" name="email" type="email" v-model="loginForm.email"
                  class="pr-[55px]" fill="outline" mode="md"
                  :class="{ 'ion-invalid ion-touched': !!loginErrors.email?.[0] }" :error-text="loginErrors.email?.[0]">

                </ion-input>
              </div>
              <div class="relative">
                <ion-input label-placement="floating" label="Password" name="password"
                  :type="showPassword ? 'text' : 'password'" v-model="loginForm.password" fill="outline" mode="md"
                  class="password" :class="{ 'ion-invalid ion-touched': !!loginErrors.password?.[0] }"
                  :error-text="loginErrors.password?.[0]">

                </ion-input>
                <ion-button slot="end" fill="clear" class="absolute top-0 right-0 mt-3.5 z-10" size="small"
                  @click="showPassword = !showPassword">
                  <ion-icon slot="icon-only" :icon="eyeOutline" color="light" v-if="showPassword"></ion-icon>
                  <ion-icon slot="icon-only" :icon="eyeOffOutline" color="light" v-if="!showPassword"></ion-icon>
                </ion-button>
              </div>
            </form>
            <ion-button expand="block" class="mt-20 submit" @click="login" :disabled="loading">Login</ion-button>
            <div class="flex items-center text-sm gap-2 mt-8 justify-center">
              <span class="text-rick-white ">Don't have an account?</span>
              <button :disabled="loading" class="text-rick-green-3 font-semibold"
                @click="toggleForm">Signup
                now</button>
            </div>
          </div>
          <div v-else>
            <form class="flex flex-col gap-6" @keydown.enter="register">
              <div>
                <ion-input label-placement="floating" label="Name" name="name" v-model="registerForm.name"
                  class="pr-[55px]" fill="outline" mode="md"
                  :class="{ 'ion-invalid ion-touched': !!registerErrors.name?.[0] }"
                  :error-text="registerErrors.name?.[0]" />
              </div>
              <div>
                <ion-input label-placement="floating" label="Email" name="email" type="email" v-model="registerForm.email"
                  class="pr-[55px]" fill="outline" mode="md"
                  :class="{ 'ion-invalid ion-touched': !!registerErrors.email?.[0] }"
                  :error-text="registerErrors.email?.[0]">

                </ion-input>
              </div>
              <div class="relative">
                <ion-input label-placement="floating" label="Password" name="password"
                  :type="showPassword ? 'text' : 'password'" v-model="registerForm.password" fill="outline" mode="md"
                  class="password" :class="{ 'ion-invalid ion-touched': !!registerErrors.password?.[0] }"
                  :error-text="registerErrors.password?.[0]">

                </ion-input>
                <ion-button slot="end" fill="clear" class="absolute top-0 right-0 mt-3.5" size="small"
                  @click="showPassword = !showPassword">
                  <ion-icon slot="icon-only" :icon="eyeOutline" color="light" v-if="showPassword"></ion-icon>
                  <ion-icon slot="icon-only" :icon="eyeOffOutline" color="light" v-if="!showPassword"></ion-icon>
                </ion-button>
              </div>
              <div class="relative">
                <ion-input label-placement="floating" label="Confirm password" name="password"
                  :type="showPassword ? 'text' : 'password'" v-model="registerForm.password_confirmation" fill="outline"
                  mode="md" class="password"
                  :class="{ 'ion-invalid ion-touched': !!registerErrors.password_confirmation?.[0] }"
                  :error-text="registerErrors.password_confirmation?.[0]">

                </ion-input>
                <ion-button slot="end" fill="clear" class="absolute top-0 right-0 mt-3.5" size="small"
                  @click="showPassword = !showPassword">
                  <ion-icon slot="icon-only" :icon="eyeOutline" color="light" v-if="showPassword"></ion-icon>
                  <ion-icon slot="icon-only" :icon="eyeOffOutline" color="light" v-if="!showPassword"></ion-icon>
                </ion-button>
              </div>
            </form>
            <ion-button expand="block" class="mt-20 submit" @click="register" :disabled="loading">Sig Up</ion-button>
            <div class="flex items-center text-sm gap-2 mt-8 justify-center">
              <span class="text-rick-white ">Have an account?</span>
              <button :disabled="loading" class="text-rick-green-3 font-semibold"
                @click="toggleForm">Login here</button>
            </div>
          </div>
        </transition>
      </template>
      <template v-else>
        <div class="flex flex-col justify-between h-full">
          <div class="flex justify-center mt-10 mb-6">
            <img src="@/assets/logo.png" class="w-48">
          </div>
          <div class="flex flex-col justify-center text-center">
            <span>{{ user.name }}</span>
            <span>{{ user.email }}</span>
          </div>
          <ion-button expand="block" class="my-10 logout" @click="onLogout" :disabled="loading">Logout
            <ion-icon :icon="logOut" class="ml-2" />
          </ion-button>
        </div>
      </template>
    </div>
  </ion-content>
</template>

<script lang="ts" setup>
import {
  IonContent,
  IonHeader,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonToolbar,
  IonButtons,
  IonButton,
  IonInput,
  IonIcon,
  IonProgressBar,
  IonTitle
} from '@ionic/vue';
import { useAuthModal } from '@/composables/useAuthModal'
import { eyeOutline, eyeOffOutline, logOut } from 'ionicons/icons';
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia';
import { useLogout } from '@/composables/useLogout'
const authStore = useAuthStore()
const { user } = storeToRefs(authStore);

const {
  closeAuthModal,
  form,
  toggleForm,
  login,
  loginForm,
  loginErrors,
  register,
  registerForm,
  registerErrors,
  loading,
  showPassword
} = useAuthModal()

const { logout } = useLogout()

const onLogout = () => {
  logout()
  closeAuthModal()
}

</script>
<style scoped>
ion-button.submit {
  --background: #5CAD4A;
  --background-activated: #478439;
  --color: #F0F2EB;
  font-weight: 600;
}

ion-button.logout {
  --background: #b91c1c;
  --background-activated: #dc2626;
}

ion-input.password {
  --padding-end: 50px;
}

ion-input {
  --border-color: #F0F2EB;
  --border-width: 0.5px;
  --padding-start: 8px;
  --highlight-color-focused: #F0F2EB;
  --highlight-color-invalid: #fc7777;
  --background: #444444;
}

.fade-form-enter-active,
.fade-form-leave-active {
  transition: opacity 0.2s;
}

.fade-form-enter,
.fade-form-leave-to {
  opacity: 0;
}

ion-content {
  --background: transparent;
  background-image: url('@/assets/fondo2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
