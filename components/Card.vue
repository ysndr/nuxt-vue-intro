<template>
  <div class="card" @click.prevent="hi">
    <h2> My full name is {{fullName}}</h2>
    <b-img-lazy :src="'https://robohash.org/' + person.first_name + '_' + person.last_name" width="300" height="300" />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Emit
} from "nuxt-property-decorator"
import { Person } from "~/types";

@Component({})
export default class Card extends Vue {
  @Prop() person!: Person

  get fullName() {
    return `${this.person.first_name} ${this.person.last_name}`
  }

  @Emit()
  hi() {
    return this.person
  }

}
</script>

<style scoped>
.card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  padding: 1rem;
  margin: 0.25rem;
  border: 0.25rem solid gainsboro;
}
</style>
