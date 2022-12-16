import Vue from "vue";
import Router from "vue-router";
import Filter from "./components/Filter.vue";
import Rooms from "./components/Rooms.vue";
import Room from "./components/Room.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "filter",
            component: Filter,
            props: true
        }, {
            // path: "/rooms?category=:category&checkInDate=:checkInDate&checkOutDate=:checkOutDate&placeCount=:placeCount",

            path: "/rooms?checkInDate=:checkInDate&checkOutDate=:checkOutDate&placeCount=:placeCount",
            name: "rooms",
            component: Rooms,
            props: true
        }, {
            path: "/room/:id",
            name: "room",
            component: Room,
            props: true
        }
    ]
});