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
            <ion-input v-model="user" label="Usuario" labelPlacement="floating" placeholder="Escribe tu Usuario" type="text" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating"></ion-label>
            <ion-input v-model="password" label="Contraseña" labelPlacement="floating" placeholder="Escribe tu Contraseña" type="password"   required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating"></ion-label>
            <ion-input v-model="password2" label="Confirma tu Contraseña" labelPlacement="floating"  type="password"   required></ion-input>
          </ion-item>
          <ion-button type="submit"  expand="block" >
             Crear Cuenta 
          </ion-button>
        </form>
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
        const user = ref('');
        const password = ref('');
        const password2 = ref('');
        const url = 'https://chefcito-back-production.up.railway.app/signup'
        const onSubmit = async () => {
          await fetch(url,{
            body: JSON.stringify({
                          "mail":user,
                          "password":password,
                          "password2":password2
                        })
          })
          .then(response => response.json())
          .then(data => console.log(data)).catch(error =>{console.log(error)});
          if(user.value == 'ja.sabando@duocuc.cl' && password2.value == '4523452345'){
            const loading = await loadingController.create({
            message: 'Cargando',
            duration: 1500,
          });
          loading.present();
          router.push({ name: 'Login' });
          }
          else alert('Datos Incorrectos')
        }
        return{personCircleOutline,onSubmit,user,password,password2,router};
      },
    });
  </script>
  
  