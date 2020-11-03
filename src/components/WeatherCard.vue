<template>
  <div>
    <template v-if="true">
      <v-card class="mx-auto" max-width="1500">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">
              {{weatherInfo.name}}
            </v-list-item-title>
            <v-list-item-subtitle>{{weatherInfo.dt}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          <v-row align="center">
            <v-col class="display-3 text-center" cols="6">
              {{weatherInfo.main.temp}}&deg;C
            </v-col>
            <v-col cols="6" v-if="weatherInfo.weather.length > 0">
            <!-- {{weatherInfo.weather[0].icon}} -->
              <v-img
                :src="`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`"
                alt="Sunny image"
                width="200"
              ></v-img>
            </v-col>
          </v-row>
        </v-card-text>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{weatherInfo.wind.speed}} km/h</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cloud-download</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{weatherInfo.clouds.all}}%</v-list-item-subtitle>
        </v-list-item>

        <!-- {{ticksLabels}} -->
        <v-slider
          v-model="time"
          :max="19"
          :tick-labels="ticksLabels"
          class="mx-4"
          @click="choice()"
          ticks
        ></v-slider>

        <!-- <v-list class="transparent">
          <v-list-item v-for="item in forecast" :key="item.day">
            <v-list-item-title>{{ item.day }}</v-list-item-title>

            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-subtitle class="text-right">
              {{ item.temp }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn text>
            Full Report
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </template>
    <template v-else>
      <Loading></Loading>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Loading from './Loading.vue';

@Component({
  name: 'WeatherCard',
  components: {
    Loading,
  }
})
export default class WeatherCardVue extends Vue {
  public time: any = '';
  private latitude: any = '';
  private longitude: any = '';
  private get weatherInfo(): any {
    return this.$store.state.weatherInfo;
  }
  private get historyWeather(): any {
    return this.$store.state.historyWeather;
  }
  private get ticksLabels(): any {
    return this.$store.state.ticksLabels;
  }

  private async created(): Promise<void> {
    console.log(navigator.geolocation)
    if(navigator.geolocation){
      await navigator.geolocation.getCurrentPosition( async (position) => {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
        await this.$store.dispatch('GET_WEATHER', {
          latitude: position.coords.latitude, 
          longitude: position.coords.longitude,
        });
        await this.$store.dispatch('GET_HISTORY_WEATHER', {
          latitude: position.coords.latitude, 
          longitude: position.coords.longitude,
        });
      });
    }
  };   

  private async history(): Promise<void>{
    console.log(navigator.geolocation)
    await navigator.geolocation.getCurrentPosition( async (position) => {
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
      await this.$store.dispatch('GET_WEATHER_HISTORY', {
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude,
      });
    });
  }

  private choice(): void {
    this.$store.commit('CHOISE_WEATHER', { no : this.time } )
  }

}
</script>
