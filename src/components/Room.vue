<template>
  <div class="container">
    <h4 class="text-center">Комната №{{ getRoom.number }}</h4>

    <div class="form-group">
      <div>
        <label>Количество мест: {{ getRoom.places }}</label>
      </div>
      <div>
        <label>Категория комнаты: {{ getRoom.category.name }} ({{ getRoom.category.name }})</label>
      </div>
      <div>
        <label>Цена комнаты (за 1 сутки): {{ getRoom.price }}</label>
      </div>
    </div>

    <br> <hr> <br>

    <div class="form-group">
      <div id="reservationSuccess" class="alert alert-success" style="display: none;">
        Резервирование комнаты прошло успешно!
      </div>

      <div id="reservationInfo" class="alert alert-info" style="display: none;">
        Что-то пошло не так...
      </div>

      <div>
        <label>Дата заселения: </label>
        <input type="text" id="checkInDate" v-model="checkInDate">
      </div>

      <div>
        <label>Дата выселения: </label>
        <input type="text" id="checkInDate" v-model="checkOutDate">
      </div>

      <div>
        <label>Ваше имя: </label>
        <input type="text" id="checkInDate" v-model="firstName">
      </div>

      <div>
        <label>Ваша фамилия: </label>
        <input type="text" id="checkInDate" v-model="lastName">
      </div>

      <div>
        <label>Адрес эл. почты: </label>
        <input type="text" id="checkInDate" v-model="email">
      </div>

      <div>
        <label>Номер телефона: </label>
        <input type="text" id="checkInDate" v-model="phone">
      </div>
    </div>

    <div class="btn-group">
      <button v-on:click="reservation(id)" class="btn btn-primary"> Забронировать </button>
    </div>

    <div id="pay" style="display: block">
      <br> <hr> <br>

      <div id="paySuccess" class="alert alert-success" style="display: none;">
        Оплата прошла успешно!
      </div>

      <div id="payInfo" class="alert alert-info" style="display: none;">
        Перевод не выполнен...
      </div>

      <p>Итого к оплате: {{ reservationRoom.price }} </p>

      <div class="form-group">
        <div>
          <label>Введите сумму платежа: </label>
          <input type="text" id="checkInDate" v-model="pay">
        </div>
      </div>

      <div class="btn-group">
        <button v-on:click="payReservation(reservationRoom.id)" class="btn btn-primary"> Оплатить </button>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../services/http-common";

export default {
  name: "getRoom",
  props: ["id", "room", "checkInDateForPost", "checkOutDateForPost"],
  data() {
    return {
      reservationRoom: {  },
      getRoom: { },
      checkInDate: this.checkInDateForPost,
      checkOutDate: this.checkOutDateForPost,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      pay: 0
    };
  },
  methods: {
    reservation(id) {
      let reservationData = {
        checkInDate: this.checkInDate,
        checkOutDate: this.checkOutDate,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone
      };

      http.post("/v1/client/reservationRoom/" + id, reservationData)
          .then(response => {
            console.log(response.data);
            this.reservationRoom = response.data;
            document.getElementById("reservationInfo").style.display = 'none';
            document.getElementById("reservationSuccess").style.display = 'block';
            document.getElementById("pay").style.display = 'block';
          })
          .catch(e => {
            console.log(e);
            document.getElementById("reservationSuccess").style.display = 'none';
            document.getElementById("pay").style.display = 'none';
            document.getElementById("reservationInfo").style.display = 'block';
          });
    },

    payReservation(id) {
      let data = this.pay

      http.post("/v1/client/room/" + id + "/pay", data)
          .then(response => {
            console.log(response.data);
            document.getElementById("payInfo").style.display = 'none';
            document.getElementById("paySuccess").style.display = 'block';
          })
          .catch(e => {
            document.getElementById("payInfo").style.display = 'block';
            document.getElementById("paySuccess").style.display = 'none';
            console.log(e);
          });
    },

    getRoomCurrent() {
      http.get("/v1/client/room/" + this.id)
          .then(response => {
            this.getRoom = response.data; // JSON are parsed automatically.
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.getRoomCurrent();
  }
};
</script>

<style>
.form-group div {
  margin: 10px;
}
</style>