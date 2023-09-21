<template>
  <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-title class="title-container" >Bienvenido, {{ fullUsername }} <img  src="https://previews.123rf.com/images/awk07/awk072009/awk07200900672/154964358-sombrero-chef-plantilla-vector-ilustraci%C3%B3n.jpg" class="icon-image" /> </ion-title> 
        </ion-toolbar>
              <!-- <ion-buttons slot="start">
                  <ion-back-button defaultHref="/" v-if="routsToShowBack"> Atras </ion-back-button>
              </ion-buttons> -->
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-card class="ion-activatable" >
          <ion-card-content>
            <ion-list class="border" lines="none">
              <ion-item>
                <ion-thumbnail slot="center" >
                  <img alt="Silhouette of mountains" src="https://seguridadeir.cl/images/codigo-qr.png?crc=3836424434" />
                </ion-thumbnail>
                <ion-list lines="none">Escanea <ion-text class="color"> Aqui</ion-text> {{ text2 }} </ion-list>
              </ion-item>
            </ion-list>
          </ion-card-content>
          <ion-ripple-effect></ion-ripple-effect>
        </ion-card>
        <ion-card class="ion-activatable" >
          <ion-card-content>
            <ion-list class="border" lines="none">
              <ion-item>
                  <ion-label>{{ menu }}</ion-label>
                  <ion-icon :icon="receiptOutline" class="icon-image" ></ion-icon>
              </ion-item>
            </ion-list>
          </ion-card-content>
          <ion-ripple-effect></ion-ripple-effect>
        </ion-card>
        <ion-card class="ion-activatable" >
            <img alt="" src="https://mimercadosaludable.com/img/leoblog/b/1/26/lg-b-banner-blog-ratatouille-villasantos.jpg" />
            <ion-ripple-effect></ion-ripple-effect>
        </ion-card>
        <ion-title class="ion-text-center color">{{ text }}</ion-title>
      </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { 
  IonContent,
  IonTitle,
  IonHeader,
  IonPage,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonIcon,
  IonText,
  IonRippleEffect
} from '@ionic/vue';
import { defineComponent} from 'vue';
import { computed } from 'vue';
import { receiptOutline} from 'ionicons/icons';
import { useRoute } from 'vue-router';
export default defineComponent({
  components: { 
    IonContent,
    IonTitle, 
    IonHeader, 
    IonPage, 
    IonToolbar,
    IonCard,
    IonCardContent,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonIcon,
    IonText,
    IonRippleEffect
  },
  setup() {
      const text2 = "El codigo qr a la entrada del restaurant"
      const text = "Espacio de Publicidad"
      const menu = "Revisa nuestro Menu"
      const route = useRoute()
      const routsToShowBack = computed(() =>{
          return route.name !== 'Home'
      })
      const fullUsername = route.params.username; 
      return{routsToShowBack,fullUsername,menu,receiptOutline,text,text2};
  },
});
</script>
<style scoped>
.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.color {
  color: rgb(77,48,27);
}
.icon-image {
  margin-left: 60px; 
  height: 52px; 
  margin-left: 10px; 
}
</style>

