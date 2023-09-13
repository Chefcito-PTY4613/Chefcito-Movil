<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title class="ion-text-center" >Chefcito</ion-title>
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
          <ion-button type="submit" expand="block" >
             Iniciar Sesion 
          </ion-button>
        </form>
        <ion-title class="ion-text-center color">{{ forgot }}</ion-title>
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
        // const forgot = "¿Olvidaste Tu Constraseña?"
        // const router = useRouter();
        // const user = ref('');
        // const password = ref('');
        // const url = 'https://chefcito-back-production.up.railway.app/login'
        // const onSubmit = async () => {
        //   await fetch(url,{
        //     body: JSON.stringify({
        //                   "mail":user,
        //                   "password":password
        //                 })
        //   })
        //   .then(response => response.json())
        //   .then(data => console.log(data)).catch(error =>{console.log(error)});
        //   if(user.value == 'ja.sabando@duocuc.cl' && password.value == '4523452345'){
        //     const loading = await loadingController.create({
        //     message: 'Cargando',
        //     duration: 1500,
        //   });
        //   loading.present();
        //   router.push({ name: 'Home' });
        //   }
        //   else alert('Datos Incorrectos')
        // }
        const forgot = "¿Olvidaste Tu Constraseña?";
        const router = useRouter();
        const user = ref('');
        const password = ref('');
        const url = 'https://chefcito-back-production.up.railway.app/login';
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
                mail: user.value,
                password: password.value,
              }),
            });
            if (!response.ok) {
              throw new Error('La solicitud no fue exitosa');
            }
            const data = await response.json();
            console.log(data);
            
            if (user.value  && password.value ) {
              router.push({ name: 'Home' });
            } else {
              alert('Datos Incorrectos');
            }
            loading.present();
          } catch (error) {
            // console.error('Error al hacer la solicitud:', error);
            alert('Error al hacer la solicitud');
          }
        };
        return {
          personCircleOutline,
          onSubmit,
          user,
          password,
          router,
          forgot,
        };
      },
    });
  </script>
  <style scoped>
  .color {
    color: rgb(77,48,27);
  }
  </style>
  


