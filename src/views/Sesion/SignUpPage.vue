<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title class="ion-text-center" >Sign Up</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <form @submit.prevent="onSubmit">
          <ion-item>
            <ion-label position="floating"></ion-label>
            <ion-input v-model="email" label="Email" labelPlacement="floating" placeholder="Escribe tu email" type="email" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating"></ion-label>
            <ion-input v-model="password" label="Contraseña" labelPlacement="floating" placeholder="Escribe tu Contraseña" type="password"   required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating"></ion-label>
            <ion-input v-model="name" label="Nombre" labelPlacement="floating"  type="text"   required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating"></ion-label>
            <ion-input v-model="lastName" label="Apellido" labelPlacement="floating"  type="text"   required></ion-input>
          </ion-item>
          <ion-button type="submit"  expand="block" >
             Crear Cuenta 
          </ion-button>
        </form>
        <ion-title class="ion-text-center ">Estas listo con tu registro</ion-title>
        <ion-title class="ion-text-center color" router-link="/login"> Tienes Cuenta </ion-title>
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
      IonToolbar ,
      IonLabel,
      IonItem,
      IonInput,
      loadingController
    } from '@ionic/vue';
    import { defineComponent,ref} from 'vue';
    import { personCircleOutline } from 'ionicons/icons';
    import { useRouter } from 'vue-router';
    export default defineComponent({
      name: 'SignUpPage',
      components: { 
        IonButton, 
        IonContent, 
        IonHeader, 
        IonPage, 
        IonTitle, 
        IonToolbar ,
        IonLabel,
        IonItem,
        IonInput,
      },
      setup() {
        const router = useRouter();
        const email = ref('');
        const password = ref('');
        const name = ref('');
        const lastName = ref('');
        const url = 'https://chefcito-back-production.up.railway.app/signup';
        const onSubmit = async () => {
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
                password: password.value,
                name:name.value,
                lastName:lastName.value
              }),
            });
            if (!response.ok) {
              throw new Error('La solicitud no fue exitosa');
            }
            const data = await response.json();
            console.log(data);
            
            if (email.value  && password.value && name.value && lastName.value ) {
              router.push({ name: 'Login' });
            } else {
              alert('Datos Incorrectos');
            }
            loading.present();
          } catch (error) {
            console.error('Error al hacer la solicitud:', error);
            alert('Error al hacer la solicitud');
          }
        };
        return{personCircleOutline,onSubmit,email,password,router,name,lastName};
      },
    });
  </script>
   <style scoped>
   .color {
     color: rgb(77,48,27);
   }
   </style>
  
  