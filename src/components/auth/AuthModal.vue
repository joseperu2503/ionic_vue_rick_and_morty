<template>
  <ion-header>
    <ion-toolbar class="safe-area-top">
      <div class="w-[57px]"></div>
      <ion-segment :value="form" @ion-change="toggleForm">
        <ion-segment-button value="login">
          <ion-label>Login</ion-label>
        </ion-segment-button>
        <ion-segment-button value="register">
          <ion-label>Register</ion-label>
        </ion-segment-button>
      </ion-segment>
      <ion-buttons slot="end">
        <ion-button @click="closeAuthModal" color="light">Close</ion-button>
      </ion-buttons>
      <ion-progress-bar type="indeterminate" v-if="loading"></ion-progress-bar>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding" v-if="form == 'login'">
    <div class="flex flex-col justify-between h-full">
      <div class="flex justify-center mt-10 mb-6">
        <img src="@/assets/logo.png" class="w-48">
      </div>
      <form class="flex flex-col gap-6">
        <div>
          <ion-input label-placement="floating" label="Email" name="email" type="email" v-model="loginForm.email"
            class="pr-[55px]" fill="outline" mode="md" :class="{ 'ion-invalid ion-touched': !!loginErrors.email?.[0] }"
            :error-text="loginErrors.email?.[0]">

          </ion-input>
        </div>
        <div class="relative">
          <ion-input label-placement="floating" label="Password" name="password"
            :type="showPassword ? 'text' : 'password'" v-model="loginForm.password" fill="outline" mode="md"
            class="password" :class="{ 'ion-invalid ion-touched': !!loginErrors.password?.[0] }"
            :error-text="loginErrors.password?.[0]">

          </ion-input>
          <ion-button slot="end" fill="clear" class="absolute top-0 right-0 mt-3.5" size="small"
            @click="showPassword = !showPassword">
            <ion-icon slot="icon-only" :icon="eyeOutline" color="light" v-if="showPassword"></ion-icon>
            <ion-icon slot="icon-only" :icon="eyeOffOutline" color="light" v-if="!showPassword"></ion-icon>
          </ion-button>
        </div>
      </form>
      <ion-button expand="block" class="my-10 submit" @click="login" :disabled="loading">Login</ion-button>
    </div>
  </ion-content>
  <ion-content class="ion-padding" v-if="form == 'register'">
    <div class="flex flex-col justify-between h-full">
      <div>
      </div>
      <form class="flex flex-col gap-6">
        <div>
          <ion-input label-placement="floating" label="Name" name="name" v-model="registerForm.name" class="pr-[55px]"
            fill="outline" mode="md" :class="{ 'ion-invalid ion-touched': !!registerErrors.name?.[0] }"
            :error-text="registerErrors.name?.[0]">

          </ion-input>
        </div>
        <div>
          <ion-input label-placement="floating" label="Email" name="email" type="email" v-model="registerForm.email"
            class="pr-[55px]" fill="outline" mode="md" :class="{ 'ion-invalid ion-touched': !!registerErrors.email?.[0] }"
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
            mode="md" class="password" :class="{ 'ion-invalid ion-touched': !!registerErrors.password_confirmation?.[0] }"
            :error-text="registerErrors.password_confirmation?.[0]">

          </ion-input>
          <ion-button slot="end" fill="clear" class="absolute top-0 right-0 mt-3.5" size="small"
            @click="showPassword = !showPassword">
            <ion-icon slot="icon-only" :icon="eyeOutline" color="light" v-if="showPassword"></ion-icon>
            <ion-icon slot="icon-only" :icon="eyeOffOutline" color="light" v-if="!showPassword"></ion-icon>
          </ion-button>
        </div>
      </form>
      <ion-button expand="block" class="my-10 submit" @click="register" :disabled="loading">Login</ion-button>
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
  IonProgressBar
} from '@ionic/vue';
import { useAuthModal } from '@/composables/useAuthModal'
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

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

</script>
<style scoped>
ion-segment {
  --background: #4cb5c3;
}

ion-button.submit {
  --background: #4cb5c3;
  --background-activated: #02afc5;

}

ion-input.password {
  --padding-end: 50px;
}

ion-input {
  --border-color: white;
  --border-width: 0.5px;
  --padding-start: 8px;
  --highlight-color-focused: #F0F2EB;
  --highlight-color-invalid: #fc7777;
}
</style>
