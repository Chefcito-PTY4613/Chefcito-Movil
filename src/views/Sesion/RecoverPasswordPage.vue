<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title class="ion-text-center">Recover Password</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
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
    IonToolbar,
    IonLabel,
    IonItem,
    IonInput,
    IonAvatar,
    IonText
} from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "LoginPage",
    components: {
        IonButton,
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonLabel,
        IonItem,
        IonInput,
        IonAvatar,
        IonText
    },
    setup() {
    },
});
</script>
<style scoped></style>
  
  
  