<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/" v-if="routsToShowBack"> Atras </ion-back-button>
                </ion-buttons>
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
    IonText,
    IonButtons,
    IonBackButton
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
export default defineComponent({
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
        IonText,
        IonButtons,
        IonBackButton
    },
    setup() {
        const route = useRoute()
        const routsToShowBack = computed(() => {
            return route.name !== 'Login'
        })
        return { routsToShowBack };
    },
});
</script>
<style scoped></style>
  
  
  