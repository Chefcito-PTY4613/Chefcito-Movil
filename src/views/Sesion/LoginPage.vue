<template>
  <ion-page>
    <!-- <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title class="ion-text-center">Chefcito</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content :fullscreen="true">
      <ion-avatar>
        <img src="https://ionicframework.com/docs/img/demos/avatar.svg">
      </ion-avatar>
      <form @submit.prevent="onSubmit" id="login">
        <ion-item>
          <ion-label position="floating"></ion-label>
          <v-field name="email" v-slot="{ field }">
            <ion-input v-model="email" label="Email" labelPlacement="floating" placeholder="Escribe tu Email" type="text"
              id="email" v-bind="field" required>
            </ion-input>
          </v-field>
        </ion-item>
        <v-error-message name="password" class="error" />
        <ion-item>
          <ion-label position="floating"></ion-label>
          <v-field name="password" v-slot="{ field }">
            <ion-input v-model="password" label="Contraseña" labelPlacement="floating" placeholder="Escribe tu Contraseña"
              type="password" id="password" required>
            </ion-input>
          </v-field>
        </ion-item>
        <v-error-message />
        <ion-text class="ion-text-end color" router-link="/recuperar">
          <h6>¿Olvidaste Tu Constraseña?</h6>
        </ion-text>
        <ion-button type="submit" expand="block" value="Enviar">
          Iniciar Sesion
        </ion-button>
      </form>
      <ion-text class="ion-text-center">
        <h6>¿No Tienes cuenta?</h6>
      </ion-text>
      <ion-text class="ion-text-center color" router-link="/signup">
        <h6>Crear Cuenta</h6>
      </ion-text>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonInput,
  loadingController,
  IonAvatar,
  IonText,

} from '@ionic/vue';
import { defineComponent } from 'vue';
import { ref } from 'vue';
import { personCircleOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import * as V from "vee-validate/dist/vee-validate";
export default defineComponent({
  name: "LoginPage",
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonItem,
    IonInput,
    IonAvatar,
    IonText,
    VField: V.Field,
    VForm: V.Form,
    VErrorMesasage: V.ErrorMessage
  },
  methods: {
  },
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const url = 'https://chefcito-back-production.up.railway.app/login';
    const onSubmit = async (data: any) => {
      try {
        const loading = await loadingController.create({
          message: 'Cargando',
          duration: 1500,
        });
        loading.present();
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mail: email.value,
            password: password.value
          }),
        });
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        const data = await response.json();
        console.log(data);

        if (email.value && password.value) {
          const fullUsername = email.value;
          const clearUsername = fullUsername.indexOf('@');
          const username = clearUsername !== -1 ? fullUsername.slice(0, clearUsername) : fullUsername;
          router.push({ name: 'MenuHome', params: { username: username } });
          email.value = '';
          password.value = '';
        } else {
          alert('Datos Incorrectos');
        }
        loading.present();
      } catch (error) {
        console.error('Error al hacer la solicitud:', error);
        alert('Error al hacer la solicitud');
      }
    };
    return {
      personCircleOutline,
      onSubmit,
      email,
      password,
      router,
    };
  },
});
</script>
<style scoped>
.color {
  color: rgb(77, 48, 27);
}

ion-avatar {
  margin: 0 auto !important;
  text-align: center !important;
  display: flex !important;
  justify-content: center !important;
}

.error {
  color: red;
  font-size: smaller;
  font-style: italic;
  font-weight: 500;
  margin-top: 4px;
}
</style>



