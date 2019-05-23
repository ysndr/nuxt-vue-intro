<template>
  <!-- HTML Tags and Component Tags allowed here -->
  <section>
    
    <h1 class="header">Nuxt TypeScript Starter</h1>
    <div class="cards">
    
      <Card
        v-for="person in people"
        :key="person.id"
        :person="person"
        @hi="react"
      ></Card>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import { Person } from "~/types";
import Card from "~/components/Card.vue"

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State people!: Person

  react(person: Person) {
    alert(`Hi from ${person.gender === "Male" ? "Mr." : "Mrs."} ${person.last_name}`) 
  }
}
</script>

<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
