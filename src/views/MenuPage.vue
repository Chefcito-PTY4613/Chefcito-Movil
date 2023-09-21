<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" :href="'/menu/' + username + '/home'">
          <ion-icon aria-hidden="true" :icon="homeOutline" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="food" :href="'/menu/' + username + '/food'">
          <ion-icon aria-hidden="true" :icon="restaurantOutline" />
          <ion-label>Food</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" :href="'/menu/' + username + '/profile'">
          <ion-icon aria-hidden="true" :icon="personOutline" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { restaurantOutline, personOutline, homeOutline } from 'ionicons/icons';
import { defineComponent} from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  components: { 
    IonPage, 
    IonLabel,
    IonIcon,
    IonTabBar,
    IonTabButton, 
    IonTabs, 
    IonRouterOutlet 
  },
  setup() {
      const router = useRoute()
      const fullUsername = router.params.username || '';
      const clearUsername= fullUsername.indexOf('@');
      const username = clearUsername !== -1 ? fullUsername.slice(0, clearUsername) : fullUsername;
      return{username,restaurantOutline, personOutline, homeOutline};
  },
});
</script>

