<template>
  <div>
    <div class="cards">
      <div class="top">
        <div class="card">
          <div class="title">
            легкий
          </div>
          <v-card
              flat
              color="transparent"
          >
            <v-card-text>
              <v-slider
                  @input="first__exercise"
                  v-model="query__id"
                  :tick-labels="ticksLabels"
                  :max="2"
                  step="1"
                  ticks="always"
                  tick-size="4"
              ></v-slider>
            </v-card-text>
          </v-card>
          <div class="btns">
            <div class="button">
              <button>Скачать</button>
            </div>
            <div class="button">
              <button @click="easy">Работа онлайн</button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="title">
            средний
          </div>
          <v-card
              flat
              color="transparent"
          >
            <v-card-text>
              <v-slider
                  v-model="fruits2"
                  :tick-labels="ticksLabels"
                  :max="2"
                  step="1"
                  ticks="always"
                  tick-size="4"
              ></v-slider>
            </v-card-text>
          </v-card>
          <div class="button">
            <button @click="average">Скачать</button>
          </div>
        </div>
        <div class="card">
          <div class="title">
            сложный
          </div>
          <v-card
              flat
              color="transparent"
          >
            <v-card-text>
              <v-slider
                  v-model="fruits3"
                  :tick-labels="ticksLabels"
                  :max="2"
                  step="1"
                  ticks="always"
                  tick-size="4"
              ></v-slider>
            </v-card-text>
          </v-card>
          <div class="button">
            <button @click="difficult">Скачать</button>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="card bottom__card">
          <div class="title">
            легкий
          </div>
          <v-card
              flat
              color="transparent"
          >
            <v-card-text>
              <v-slider
                  v-model="fruits4"
                  :tick-labels="ticksLabels"
                  :max="2"
                  step="1"
                  ticks="always"
                  tick-size="4"
              ></v-slider>
            </v-card-text>
          </v-card>
          <div class="button">
            <button>Скачать</button>
          </div>
        </div>
        <div class="card bottom__card">
          <div class="title">
            средний
          </div>
          <v-card
              flat
              color="transparent"
          >
            <v-card-text>
              <v-slider
                  v-model="fruits5"
                  :tick-labels="ticksLabels"
                  :max="2"
                  step="1"
                  ticks="always"
                  tick-size="4"
              ></v-slider>
            </v-card-text>
          </v-card>
          <div class="button">
            <button @click="average">Скачать</button>
          </div>
        </div>
        <div class="card bottom__card">
          <div class="title">
            сложный
          </div>
          <v-card
              flat
              color="transparent"
          >
            <v-card-text>
              <v-slider
                  v-model="fruits6"
                  :tick-labels="ticksLabels"
                  :max="2"
                  step="1"
                  ticks="always"
                  tick-size="4"
              ></v-slider>
            </v-card-text>
          </v-card>
          <div class="button">
            <button @click="difficult">Скачать</button>
          </div>
        </div>
      </div>
    </div>
    <div class="back"></div>
  </div>
</template>
<script>
import axios from 'axios'
import VueCookies from 'js-cookie'

export default {
  data() {
    return {
      value: 0,
      fruits: '',
      fruits1: '',
      fruits2: 0,
      fruits3: 0,
      fruits4: 0,
      fruits5: 0,
      fruits6: 0,
      ticksLabels: [
        '1',
        '2',
        '3',
      ],
      query__id: '',
    }
  },
  created() {

  },
  methods: {
    first__exercise() {
      this.fruits = this.fruits1
    },
    easy() {
      this.$router.push({path: '/task-list', query: {q: this.query__id}})
      axios
          .get(`http://localhost:8080/api/v1/sub-category/${this.query__id}/task/1`)
          .then(response => {
            VueCookies.set('information', response.data)
          })
      console.log('increment', this.$store.getters('increment'))
    },
    average() {

    },
    difficult() {

    },
  }
}
</script>
<style scoped lang="scss">
.cards {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1125px;
  margin: auto;
  //margin-top: 200px;
  position: relative;
  margin-top: 85px;

  .bottom__card {
    top: 355px !important;
  }

  .top,
  .bottom {
    display: flex;
    align-items: center;
    //justify-content: space-between;
    //flex-wrap: wrap;
  }

  .card {
    background: #fff;
    width: 345px;
    height: 240px;
    position: absolute;
    top: 50px;
    border-radius: 20px;
    &:first-child {
      left: 0;
    }

    &:nth-child(2) {
      left: 0;
      right: 0;
      margin: auto;
    }

    &:nth-child(3) {
      right: 0;
    }

    .title {
      text-align: center;
      padding: 12px 0px;
      background: #0072e3;
      //opacity: 0.8;
      color: white;
      font-size: 30px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    //y a f
    .button {
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
      align-items: center;
      display: flex;
      bottom: 20px;
      background: #0072e3;
      //opacity: 0.7;
      color: white;
      width: 190px;
      margin: auto;
      transition: all ease 0.6s;
      border-radius: 8px;

      &:hover {
        opacity: 0.7;
        transition: all ease 0.6s;
      }

      button {
        background: unset;
        border: 0;
        color: white;
        font-size: 15px;
        width: 255px;
        padding: 16px 0px;
      }
    }

    &:first-child {
      //background-image: url("../assets/y.jpg");
      background-size: cover;
    }

    &:nth-child(2) {
      //background-image: url("../assets/a.jpg");
      background-size: cover;
    }

    &:nth-child(3) {
      //background-image: url("../assets/b.jpg");
      background-size: cover;
    }
  }
}

.v-slider__thumb {
  width: 25px;
  height: 25px;
}

.v-slider__tick {
  background-color: #0d2323;
}

.btns {
  .button {
    width: 135px !important;

    &:first-child {
      right: unset;
      left: 20px;
    }

    &:nth-child(2) {
      left: unset;
      right: 20px;
    }
  }
}
.theme--light.v-input{
  margin-top: 22px;
}


.pass--input {
  display: none;

  &.active {
    display: block;
  }
}
.back{
  &::before{
    content: '';
    background: black;
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>