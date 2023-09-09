<template>
  <ion-page>
      <ion-header :translucent="true">
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header>
          <ion-toolbar>
            <ion-segment value="segment">
              <ion-segment-button value="menu">
                <ion-label>Menu del Dia </ion-label>
              </ion-segment-button>
              <ion-segment-button value="entradas">
                <ion-label>Entradas</ion-label>
              </ion-segment-button>
              <ion-segment-button value="platos">
                <ion-label>Platos Principales</ion-label>
              </ion-segment-button>
            </ion-segment>
          </ion-toolbar>
        </ion-header>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Menu del dia</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-list>
              <ion-item >
                <ion-thumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-label>Item</ion-label>
              </ion-item>
              <ion-item >
                <ion-thumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-label>Item</ion-label>
              </ion-item>
              <ion-item >
                <ion-thumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-label>Item</ion-label>
              </ion-item>
              <ion-item >
                <ion-thumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-label>Item</ion-label>
              </ion-item>
              <ion-item >
                <ion-thumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-label>Item</ion-label>
              </ion-item>
              <ion-item >
                <ion-thumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-label>Item</ion-label>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>
      </ion-content>
  </ion-page>
</template>
<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonLabel, 
  IonSegment, 
  IonSegmentButton, 
  IonToolbar,
  IonCard, 
  IonCardContent, 
  IonCardHeader,
  IonThumbnail,
  IonCardTitle,
  IonItem,
  IonList

} from '@ionic/vue';
import { defineComponent} from 'vue';
export default defineComponent({
  components: {
    IonToolbar,
    IonContent, 
    IonHeader, 
    IonPage,
    IonLabel, 
    IonSegment, 
    IonSegmentButton,
    IonCard, 
    IonCardContent, 
    IonCardHeader,
    IonThumbnail,
    IonCardTitle,
    IonItem,
    IonList
  },
      setup() {

        return{};
      },
});
</script>
<style scoped>
  ion-item {
    --padding-start: 0;
  }
</style>
