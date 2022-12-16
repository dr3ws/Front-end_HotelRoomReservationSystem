<template>
  <div class="container">
    <div class="form-group">
      <div v-if="checkPushPage === '1'" id="reservationSuccess" class="alert alert-info">
        Кажется комнаты с такими парматерами уже заняты...
      </div>

<!--      <div>-->
<!--        <label>Выбор категории: </label>-->
<!--        <select id="category" v-model="category">-->
<!--          <option value="">&#45;&#45;Выбор категории&#45;&#45;</option>-->
<!--          <option v-for="(cat, index) in categories" :key="index"> {{cat.category}} </option>-->
<!--        </select>-->
<!--      </div>-->

      <div>
        <label>Дата заселения: </label>
        <input type="date" id="checkInDate" v-model="checkInDate" required>
      </div>

      <div>
        <label>Дата выселения: </label>
        <input type="date" id="checkOutDate" v-model="checkOutDate" required>
      </div>

      <div>
        <label>Кол-во мест: </label>
        <input type="number" id="checkOutDate" v-model="placeCount" required>
      </div>
    </div>

    <div class="btn-group">
<!--      <router-link :to="{ name: 'rooms', params: { category: category, checkInDate: checkInDate, checkOutDate: checkOutDate, placeCount: placeCount} }">-->
      <router-link :to="{ name: 'rooms', params: { checkInDate: checkInDate, checkOutDate: checkOutDate, placeCount: placeCount } }" class="btn btn-primary">
        Поиск
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "filter-rooms",
  props: ["checkInDateNull", "checkOutDateNull", "checkPush"],
  data() {
    return {
      checkInDate: this.checkInDateNull,
      checkOutDate: this.checkOutDateNull,
      placeCount: 0,
      checkPushPage: this.checkPush
    };
  }
};
</script>

<style>
.form-group div {
  margin: 10px;
}
</style>