<template>
  <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title class="ion-text-center" >Food</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
      </ion-content>
  </ion-page>
</template>
<script lang="ts">
import {
  IonTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from '@ionic/vue';
import { defineComponent} from 'vue';
export default defineComponent({
  components: {
    IonToolbar,
    IonContent, 
    IonHeader, 
    IonPage,
    IonTitle,
  },
});
</script>
