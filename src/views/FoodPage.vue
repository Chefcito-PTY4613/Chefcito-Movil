<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <ion-segment v-model="selectedFoodType" @ionChange="fetchFoodTypes">
            <ion-segment-button v-for="foodType in foodTypes" :key="foodType.id" :value="foodType.id">
              {{ foodType.name }}
            </ion-segment-button>
          </ion-segment>
        </ion-toolbar>
      </ion-header>
      <ion-card v-for="foodType in  foodTypes " :key="foodType.id">
        <ion-card-header v-if="foodType.name">
          <ion-card-title>{{ foodType.name }}</ion-card-title>
          <ion-list>
            <ion-item v-for="(item) in  foods " :key="item.id">
              <ion-button slot="end" vertical="bottom" horizontal="end" shape="round" fill="outline">
                <ion-icon :icon="addOutline"></ion-icon>
              </ion-button>
              <ion-thumbnail slot="end">
                <ion-img v-bind:src="item.img" alt="Imagen de comida"></ion-img>
              </ion-thumbnail>
              <ion-list lines="none">
                <ion-item>
                  <ion-label>{{ item.name }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>{{ item.price }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>{{ item.desc }}</ion-label>
                </ion-item>
              </ion-list>
            </ion-item>
          </ion-list>
        </ion-card-header>
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
  IonTitle,
  IonImg

} from '@ionic/vue';
import { useRoute } from 'vue-router';
import { cartOutline, addOutline } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { FoodType, Food } from '../interface/interfaces';

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
    IonTitle,
    IonImg
  },
  data() {
    return {
      foodTypes: [] as FoodType[],
      selectedFoodType: "",
      foods: [] as Food[],
    };
  },
  mounted() {
    this.fetchFoodTypes();
    this.fetchFood();
  },
  computed: {
    sortedFoodTypes() {
      return this.foodTypes.slice().sort((a, b) => a.name.localeCompare(b.name));
    },
    sortedFoods() {
      return this.foods.slice().sort((a, b) => a.name.localeCompare(b.name));
    },
  },
  methods: {
    async fetchFoodTypes() {
      const url = 'https://chefcito-back-production.up.railway.app/type/food';
      try {
        const response = await axios.get<FoodType[]>(url); // Especifica el tipo de respuesta
        this.foodTypes = response.data;
      } catch (error) {
        console.error('Error al cargar los tipos de comida:', error);
      }
    },
    async fetchFood() {
      const url = 'https://chefcito-back-production.up.railway.app/food';
      try {
        const response = await axios.get<Food[]>(url); // Especifica el tipo de respuesta
        this.foods = response.data;
      } catch (error) {
        console.error('Error al cargar los tipos de comida:', error);
      }
    },
  },
  setup() {
    const isOpen = ref(false);
    const setOpen = (open: boolean) => (isOpen.value = open);
    const router = useRoute()
    const username = router.params.username;
    return { username, cartOutline, addOutline, setOpen, isOpen };
  },
});
</script>
<style scoped>
ion-item {
  --padding-start: 0;
}

.color {
  color: rgb(77, 48, 27);
}
</style>
