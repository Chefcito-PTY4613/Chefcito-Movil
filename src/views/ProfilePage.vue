<template>
    <ion-page>
        <ion-header :translucent="true">
        </ion-header>
        <ion-content :fullscreen="true">
          <ion-card>
            <ion-card-content>
              <ion-list class="border">
                <ion-item>
                  <ion-thumbnail slot="start" >
                    <ion-avatar>
                      <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </ion-avatar>
                  </ion-thumbnail>
                  <ion-list lines="none">
                    <ion-label >{{ user }}</ion-label>
                    <ion-label >{{ email }}</ion-label>
                  </ion-list>
                </ion-item>
              </ion-list>
            </ion-card-content>
          </ion-card>
          <div class="button-container">
            <ion-button>
              <ion-icon :icon="personCircleOutline"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon :icon="walletOutline"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon :icon="settingsOutline"></ion-icon>
          </ion-button>
          </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
  import {
    IonContent,
    IonHeader,
    IonPage,
    IonCardContent,
    IonCard,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonIcon,
    IonButton,
    IonAvatar
  } from '@ionic/vue';
  import { defineComponent} from 'vue';
  import { personCircleOutline,walletOutline,settingsOutline } from 'ionicons/icons';
  export default defineComponent({
    components: {
      IonContent, 
      IonHeader, 
      IonPage,
      IonCardContent,
      IonList,
      IonItem,
      IonThumbnail,
      IonCard,
      IonLabel,
      IonIcon,
      IonButton,
      IonAvatar
    },
    setup() {
        const user = "Anton Ego"
        const email = "AntonEgo@catador.com"
        return{user,email,personCircleOutline,walletOutline,settingsOutline};
      },
  });
</script>
<style scoped>
.icon-image {
  margin-left: 60px; 
  height: 52px; 
  margin-left: 10px;
}
.border{
  border-style: none !important;
}
ion-button {
  margin-bottom: 10px; 
}
.button-container {
  display: flex;
  justify-content: center;
}
</style>

