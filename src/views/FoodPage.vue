<template>
  <ion-page>
      <ion-header :translucent="true">
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header>
          <ion-toolbar>
            <ion-segment value="menu" @ion-change="fetchFoodTypes" v-model="segment">
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
          <ion-card-content v-for="foodType in foodTypes" :key="foodType.id" >
            <ion-list> 
              <ion-item>
                <ion-thumbnail slot="end">
                  <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-list lines="none">
                  <ion-item>
                    <ion-label>{{ foodType.name }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>{{ foodType.sheduleStart }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-button slot="end" vertical="bottom" horizontal="end" shape="round" fill="outline">
                      <ion-icon :icon="addOutline"> </ion-icon>
                    </ion-button>
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
          <ion-card-content v-for="foodType in foodTypes" :key="foodType.id" >
            <ion-list> 
              <ion-item>
                <ion-thumbnail slot="end">
                  <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-list lines="none">
                  <ion-item>
                    <ion-label>{{ foodType.name }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>{{ foodType.sheduleStart }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-button slot="end" vertical="bottom" horizontal="end" shape="round" fill="outline">
                      <ion-icon :icon="addOutline"> </ion-icon>
                    </ion-button>
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
          <ion-card-content v-for="foodType in foodTypes" :key="foodType.id" >
            <ion-list> 
              <ion-item>
                <ion-thumbnail slot="end">
                  <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </ion-thumbnail>
                <ion-list lines="none">
                  <ion-item>
                    <ion-label>{{ foodType.name }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>{{ foodType.sheduleStart }}</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-button slot="end" vertical="bottom" horizontal="end" shape="round" fill="outline">
                      <ion-icon :icon="addOutline"> </ion-icon>
                    </ion-button>
                  </ion-item>
                </ion-list>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>
      </ion-content>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button @click="setOpen(true)">
          <ion-icon :icon="cartOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <ion-modal :is-open="isOpen">
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="setOpen(false)">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
      </ion-content>
    </ion-modal>
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
  IonList,
  IonFab,
  IonIcon,
  IonFabButton,
  IonButton,
  IonButtons, 
  IonModal,
  IonTitle

} from '@ionic/vue';
import { useRoute } from 'vue-router';
import { cartOutline,addOutline} from 'ionicons/icons';
import { defineComponent,ref } from 'vue';
// import axios from 'axios';

export interface Food {
  id:           string;
  name:         string;
  color:        string;
  sheduleStart: number;
  sheduleEnd:   number;
}

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
    IonList,
    IonFab,
    IonIcon,
    IonFabButton,
    IonButton,
    IonButtons, 
    IonModal,
    IonTitle
  },
  data() {
    return {
      foodTypes: [] as Food[], // Inicializa como un array de objetos FoodType
    };
    },
    mounted() {
      this.fetchFoodTypes();
    },
    computed: {
      sortedFoodTypes() {
        return this.foodTypes.slice().sort((a, b) => a.id.localeCompare(b.name));
      },
    },
    menuChanged(ev: CustomEvent){
      this.segment = ev.detail.value;
    },
    methods:{
      async fetchFoodTypes() {
        const url = 'https://chefcito-back-production.up.railway.app/type/food'
        try {
          // const response = await axios.get(url);
          // this.foodTypes = response.data;
          // console.log('Food',this.foodTypes)
        } catch (error) {
          console.error('Error al cargar los tipos de comida:', error);
        }
      },
    },
    setup() {
      const isOpen = ref(false);
      const setOpen = (open: boolean) => (isOpen.value = open);
      const router = useRoute()
      const segment = ref("menu")
      const platos = ({
          id: "64f8ea7e5f0db14541aa7f6e",
          name: "Desayuno",
          color: "#FAC78C",
          sheduleStart: 6,
          sheduleEnd: 13
      })
      // console.log(platos)
      const username = router.params.username;
      return{platos,segment,username,cartOutline,addOutline,setOpen,isOpen};
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
