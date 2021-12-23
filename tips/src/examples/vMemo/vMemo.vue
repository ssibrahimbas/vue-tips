<template>
  <div class="city-container">
    <div
      v-for="city in cities"
      :key="city.id"
      class="city"
      @click="selectCity(city)"
      v-memo="[city.id === selectedCity]"
    >
    <p>ID: {{city.id}} - selected: {{city.id === selectedCity}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { CityController } from "./api/city.controller";
import ICityController, { City } from "./api/ICityController";

@Options({})
export default class VMemo extends Vue {

  $cityController!: ICityController;

  cities: City[] = [];
  selectedCity: number = 1;

  async getAllCities(): Promise<void> {
    this.cities = await this.$cityController.getAllCities();
  }

  selectCity(city: City): void {
    this.selectedCity = city.id;
  }

  async mounted(): Promise<void> {
    await this.getAllCities()
  };

  created() : void {
      this.$cityController = new CityController();
  }
}
</script>

<style>
.city-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.city {
    background-color: #f5f5f5;
    border-radius: 5px;
    margin-bottom: 1rem;
    width: 45%;
}
</style>