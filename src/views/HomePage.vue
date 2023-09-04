<template>
  <ion-page>
      <ion-header>
          <!-- <ion-toolbar>
              <ion-buttons slot="start">
                  <ion-back-button defaultHref="/" v-if="routsToShowBack"> Atras </ion-back-button>
              </ion-buttons>
          </ion-toolbar> -->
      </ion-header>
      <ion-content :fullscreen="true">
          <ion-card>
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-header>
              <ion-card-title>Card Title</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
              Here's a small text description for the card content. Nothing more, nothing less.
              </ion-card-content>
          </ion-card>
          <ion-card>
              <ion-button expand="block">Reserva</ion-button>
          </ion-card>
          <ion-card>
              <img alt="" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          </ion-card>
      </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { 
  IonContent,
  IonButton,
  IonHeader,
  IonPage,
  // IonToolbar,
  // IonButtons,
  // IonBackButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/vue';
import { defineComponent} from 'vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  components: { 
    IonContent, 
    IonHeader, 
    IonPage, 
    // IonToolbar,
    // IonButtons,
    // IonBackButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonButton
  },
  setup() {
      const route = useRoute()
      const  routsToShowBack = computed(() =>{
          return route.name !== 'Home'
      })
      return{routsToShowBack};
  },
});
</script>

