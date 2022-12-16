<template>
  <div class="container">
      <h4 class="text-center"> Результаты поиска по критериям бронирования </h4>

      <ul>
        <li v-for="(room, index) in rooms" :key="index">
          <router-link :to="{ name: 'room', params: { room: room, id: room.id, checkInDateForPost: checkInDate, checkOutDateForPost: checkOutDate } }">
            Комната №{{ room.number }} ---- Цена: {{ room.price }}
          </router-link>
        </li>
      </ul>

  </div>
</template>

<script>
import http from "../services/http-common";

export default {
  name: "rooms-list",
  // props: ["category", "checkInDate", "checkOutDate", "placeCount"],
  props: ["checkInDate", "checkOutDate", "placeCount"],
  data() {
    return {
      rooms: []
    };
  },
  methods: {
    getFilterRooms() {

      // http.get("v1/client/rooms?category=" + this.category + "&checkInDate=" + this.checkInDate + "&checkOutDate=" + this.checkOutDate + "&placeCount=" + this.placeCount)

      http.get("v1/client/rooms?checkInDate=" + this.checkInDate + "&checkOutDate=" + this.checkOutDate + "&placeCount=" + this.placeCount)
          .then(response => {
            this.rooms = response.data; // JSON are parsed automatically.
            if (response.data.length === 0) {
              this.$router.push({ name: 'filter', params: { checkInDateNull: this.checkInDate, checkOutDateNull: this.checkOutDate, checkPush: '1' } });
            } else
              console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.getFilterRooms();
  }
};
</script>

<style>

</style>