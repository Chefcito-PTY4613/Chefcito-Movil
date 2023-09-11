<template>
  <ion-page>
      <ion-header :translucent="true">
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header>
          <ion-toolbar>
            <ion-segment value="menu" @ion-change="menuChanged($event)" v-model="segment">
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
        <ion-card v-if="segment == 'menu'">
          <ion-card-header>
            <ion-card-title>Menu del dia</ion-card-title>
          </ion-card-header>
          <ion-card-content v-for="(plato) in platos" :key="plato" >
            <ion-list> 
              <ion-item>
                <ion-thumbnail slot="end">
                  <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-list lines="none">
                  <ion-item>
                    <ion-label>{{ platos.nombre }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label class="color">{{ platos.precio  }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>{{ platos.descripcion}}</ion-label>
                  </ion-item>
                </ion-list>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>
        <ion-card v-if="segment == 'entradas'">
          <ion-card-header>
            <ion-card-title>Entradas</ion-card-title>
          </ion-card-header>
          <ion-card-content v-for="(plato) in platos" :key="plato" >
            <ion-list> 
              <ion-item >
                <ion-thumbnail slot="end">
                  <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-list lines="none">
                  <ion-item>
                    <ion-label>{{ platos.nombre }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label class="color">{{ platos.precio  }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>{{ platos.descripcion}}</ion-label>
                  </ion-item>
                </ion-list>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>
        <ion-card v-if="segment == 'platos'">
          <ion-card-header>
            <ion-card-title>Platos Principales</ion-card-title>
          </ion-card-header>
          <ion-card-content v-for="(plato) in platos" :key="plato" >
            <ion-list > 
              <ion-item >
                <ion-thumbnail slot="end">
                  <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-list lines="none">
                  <ion-item>
                    <ion-label>{{ platos.nombre }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label class="color">{{ platos.precio  }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>{{ platos.descripcion}}</ion-label>
                  </ion-item>
                </ion-list>
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
import { defineComponent,ref } from 'vue';
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
  methods:{
    menuChanged(ev: CustomEvent){
      this.segment = ev.detail.value;
    }
  },
  setup() {
    const segment = ref("menu")
    const platos = ({
      nombre: 'Lasaña Boloñesa',
      precio: '$8.000',
      descripcion: 'Clasica salsa roja de carne',
      // img:"https://ionicframework.com/docs/img/demos/thumbnail.svg",
    })
    console.log(platos)
    return{platos,segment};
  },
});
</script>
<style scoped>
  ion-item {
    --padding-start: 0;
  }
  .color {
    color: rgb(77,48,27);
  }
</style>
