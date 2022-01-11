<template>
  <div class="main">
    <div class="text--btn">
      <div class="text">Matematika / Start</div>
      <div class="btn">
        <div class="time">{{ nulW }}{{ timeWatch }}:{{ nulM }}{{ timeMinut }}:{{ nulS }}{{ timeSecund }}</div>
        <button @click="finish">Tugatish</button>
        <button @click="check">Tekshirish</button>
      </div>
    </div>
    <div class="all">
      <div class="top">
        <div class="math--id">
          № 0005214
        </div>
        <div class="circles">
          <div class="third--row--circle">
            <div class="circle free" @click="nums($event,0)">
              <div class="container">
                <div class="text bec--value" ref="first__first">{{ title.first.first }}</div>
                <div class="loader 1" :class="{'show' : isActive , 'true__result' : true__result , 'false__result' : false__result}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="practice bec--value" ref="first__second">
              {{ title.first.second }}
            </div>
            <div class="circle free" @click="nums($event,1)">
              <div class="container">
                <div class="text bec--value" ref="first__third">{{ title.first.third }}</div>
                <div class="loader 2" :class="{'show' : isActive , 'true__result' : true__result , 'false__result' : false__result}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="practice bec--value" ref="first__fourth">
              {{ title.first.fourth }}
            </div>
            <div class="circle free" @click="nums($event,2)">
              <div class="container">
                <div class="text bec--value" ref="first__fifth">{{ title.first.fifth }}</div>
                <div class="loader 3" :class="{'show' : isActive , 'true__result' : true__result , 'false__result' : false__result}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="equality--horizontal">
              <span class="first--span"></span>
            </div>
            <div class="circle">
              <div class="container">
                <div class="text bec--value" ref="first__sixth">{{ title.first.sixth }}</div>
                <div class="loader 4 solution" :class="{'show' : isActive , 'true__result' : true__result , 'false__result' : false__result}">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="fourth--row--circle">
            <div class="practice bec--value" ref="second__first">
              {{ title.second.first }}
            </div>
            <div class="practice bec--value" ref="second__second">
              {{ title.second.second }}
            </div>
            <div class="practice bec--value" ref="second__third">
              {{ title.second.third }}
            </div>
          </div>
          <div class="fifth--row--circle">
            <div class="circle free" @click="nums($event,3)">
              <div class="container">
                <div class="text bec--value" ref="third__first">{{ title.third.first }}</div>
                <div class="loader 5" :class="{'show' : isActive , 'true__result' : true__result , 'false__result' : false__result}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="practice bec--value" ref="third__second">
              {{ title.third.second }}
            </div>
            <div class="circle free" @click="nums($event,4)">
              <div class="container">
                <div class="text bec--value" ref="third__third">{{ title.third.third }}</div>
                <div class="loader 6" :class="{'show' : isActive , 'true__result' : true__result , 'false__result' : false__result}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="practice bec--value" ref="third__fourth">
              {{ title.third.fourth }}
            </div>
            <div class="circle free" @click="nums($event,5)">
              <div class="container">
                <div class="text bec--value" ref="third__fifth">{{ title.third.fifth }}</div>
                <div class="loader 7" :class="{'show' : isActive , 'true__result' : true__result , 'false__result' : false__result}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="equality--horizontal">
              <span class="first--span"></span>
            </div>
            <div class="circle">
              <div class="container">
                <div class="text bec--value" ref="third__sixth">{{ title.third.sixth }}</div>
                <div class="loader 8 solution" :class="{'show' : isActive , 'true__result' : true__result , 'false__result' : false__result}">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="sixth--row--circle">
            <div class="practice bec--value" ref="fourth__first">
              {{ title.fourth.first }}
            </div>
            <div class="practice bec--value" ref="fourth__second">
              {{ title.fourth.second }}
            </div>
            <div class="practice bec--value" ref="fourth__third">
              {{ title.fourth.third }}
            </div>
          </div>
          <div class="seventh--row--circle">
            <div class="circle free">
              <div class="container" @click="nums($event,6)">
                <div class="text bec--value" ref="fifth__first">{{ title.fifth.first }}</div>
                <div class="loader 9" :class="{'show' : isActive , 'true__result' : true__result , 'false__result' : false__result}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="practice bec--value" ref="fifth__second">
              {{ title.fifth.second }}
            </div>
            <div class="circle free" @click="nums($event,7)">
              <div class="container">
                <div class="text bec--value" ref="fifth__third">{{ title.fifth.third }}</div>
                <div class="loader 10" :class="{'show' : isActive , 'true__result' : true__result , 'false__result' : false__result}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="practice bec--value" ref="fifth__fourth">
              {{ title.fifth.fourth }}
            </div>
            <div class="circle free" @click="nums($event,8)">
              <div class="container">
                <div class="text bec--value" ref="fifth__fifth">{{ title.fifth.fifth }}</div>
                <div class="loader 11" :class="{'show' : isActive , 'true__result' : true__result , 'false__result' : false__result}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="equality--horizontal">
              <span class="first--span"></span>
            </div>
            <div class="circle">
              <div class="container">
                <div class="text bec--value" ref="fifth__sixth">{{ title.fifth.sixth }}</div>
                <div class="loader 12 solution" :class="{'show' : isActive , 'true__result' : true__result , 'false__result' : false__result}">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="second--row--circle">
            <div class="equality">
              <span class="first--span"></span>
            </div>
            <div class="equality">
              <span class="second--span"></span>
            </div>
            <div class="equality">
              <span class="third--span"></span>
            </div>
          </div>
          <div class="first--row--circle">
            <div class="circle">
              <div class="container">
                <div class="text bec--value" ref="sixth__first">{{ title.sixth.first }}</div>
                <div class="loader 13 solution" :class="{'show' : isActive , 'true__result' : true__result , 'false__result' : false__result}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="circle">
              <div class="container">
                <div class="text bec--value" ref="sixth__second">{{ title.sixth.second }}</div>
                <div class="loader 14 solution" :class="{'show' : isActive , 'true__result' : true__result , 'false__result' : false__result}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="circle">
              <div class="container">
                <div class="text bec--value" ref="sixth__third">{{ title.sixth.third }}</div>
                <div class="loader 15 solution" :class="{'show' : isActive , 'true__result' : true__result , 'false__result' : false__result}">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="numbers">
        <div class="txt">
          Belgilash uchun sonlar
        </div>
        <div class="circle--main">
          <div class="circle" v-for="i in numbers" :key="i" @click="number(i)">
            <div class="container">
              <div class="text">{{ i }}</div>
              <div class="loader" :class="{'show' : show}">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="second--row">
          <div class="table">
            <div class="users--information">
              Takrorlanishlar tarixi
            </div>
            <table width="50%" id="customers">
              <tr>
                <th>№</th>
                <th>Time / Date</th>
                <th>Score</th>
              </tr>
              <tr>
                <td>1</td>
                <td>14:30 / 30.12.2021</td>
                <td>900</td>
              </tr>
              <tr>
                <td>2</td>
                <td>14:30 / 30.12.2021</td>
                <td>800</td>
              </tr>
              <tr>
                <td>3</td>
                <td>14:30 / 30.12.2021</td>
                <td>700</td>
              </tr>
              <tr>
                <td>4</td>
                <td>14:30 / 30.12.2021</td>
                <td>600</td>
              </tr>
              <tr>
                <td>4</td>
                <td>14:30 / 30.12.2021</td>
                <td>600</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Cookie from "js-cookie";
export default {
  data() {
    return {
      one1: '',
      content: null,
      task: '',
      timeWatch: 0,
      timeMinut: 0,
      timeSecund: 0,
      nulW: 0,
      nulM: 0,
      nulS: 0,
      active: false,
      animation: false,
      count: '',
      isActive: false,
      counter: [],
      array: [],
      nine: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      values: [],
      a: [],
      TF: [],
      show: false,
      title: [],
      queryId:'',
      check__information:[],
      project__id:'',
      true__result:false,
      false__result:false,
    }
  },
  components: {},
  created() {
    console.log(Cookie.get('token'))
    this.queryId = this.$route.query.q
    if (this.queryId === '') {
      this.queryId = 1
    }
    axios
        .get(`http://localhost:8080/api/v1/task/${this.queryId}&1`, {
          headers: {
            Authorization: Cookie.get('token')
          }
        })
        .then(response => {
          this.project__id = response.data.data.id
          this.title = response.data.data
          if (response.status === 200) {
            this.values.push(
                this.title.first.first,
                this.title.first.third,
                this.title.first.fifth,
                this.title.third.first,
                this.title.third.third,
                this.title.third.fifth,
                this.title.fifth.first,
                this.title.fifth.third,
                this.title.fifth.fifth,
            )
          }
        })
    if (this.timeSecund >= 0
    ) {
      this.timeSecund++
    }

  },

  methods: {
    back() {
      this.$router.go(-1)
    },
    number(i) {
      console.log('ref',this.$refs.first__first.innerHTML)
      console.log('i',i)
      if(this.$refs.first__first.innerHTML != i
          && this.$refs.first__third.innerHTML != i
          && this.$refs.first__fifth.innerHTML != i
          && this.$refs.third__first.innerHTML != i
          && this.$refs.third__third.innerHTML != i
          && this.$refs.third__fifth.innerHTML != i
          && this.$refs.fifth__first.innerHTML != i
          && this.$refs.fifth__third.innerHTML != i
          && this.$refs.fifth__fifth.innerHTML != i){
        const isInArray = this.array.includes(i);
        // console.log(isInArray)
        if (isInArray === false) {
          let loaderAll = document.querySelectorAll('.loader')
          loaderAll.forEach(item => {
            if (item.classList.contains('active')) {
              let textValue = item.parentElement.children[0]
              textValue.innerHTML = i
            }
          })
        }
      }else {
        console.log('error')
      }
      for (let i = 0; i < 9; i++) {
        this.a.push(this.nine[i] - this.values[i])
        if (this.a[i] === i) {
          this.TF.push(i)
        }
      }

    },

    nums(e, index) {
      // let uff = e.target.innerHTML
      // console.log('eeee',e.target.parentElement.children[0].innerHTML)
      let bush = !Object.is(this.values[index], '')
      // console.log('buwhhhh', bush)
      if (!bush) {


        let loadActive = e.target.parentElement

        // console.log(loadActive.children[1])
        if (loadActive.children[0].innerHTML) {


          if (loadActive.children[1].classList.contains('active')) {
            loadActive.children[1].classList.remove('active')

          } else {

            let ff = loadActive.children[1].className
            let active = ff.split(' ')[1]
            let loadAll = document.querySelectorAll('.loader ')
            loadAll.forEach(item => {
              if (item.className.split(' ')[1] === active) {
                item.classList.add('active')
              } else {
                item.classList.remove('active')
              }
            })
          }

        } else {

          if (loadActive.classList.contains('active')) {
            loadActive.classList.remove('active')

          } else {

            let ff = loadActive.className
            let active = ff.split(' ')[1]
            let loadAll = document.querySelectorAll('.loader ')
            loadAll.forEach(item => {
              if (item.className.split(' ')[1] === active) {
                item.classList.add('active')
              } else {
                item.classList.remove('active')
              }
            })
          }

        }
      }
    },
    finish(){
      this.$router.go(-1)
    },
    check(){
      const check__information = {
          "fifth": {
            "fifth": this.$refs.fifth__fifth.innerHTML,
            "first": this.$refs.fifth__first.innerHTML,
            "fourth": this.$refs.fifth__fourth.innerHTML,
            "second": this.$refs.fifth__second.innerHTML,
            "sixth": this.$refs.fifth__sixth.innerHTML,
            "third": this.$refs.fifth__third.innerHTML
          },
            "first": {
              "fifth": this.$refs.first__first.innerHTML,
              "first": this.$refs.first__second.innerHTML,
              "fourth": this.$refs.first__third.innerHTML,
              "second": this.$refs.first__fourth.innerHTML,
              "sixth": this.$refs.first__fifth.innerHTML,
              "third": this.$refs.first__sixth.innerHTML
          },
            "fourth": {
              "first": this.$refs.fourth__first.innerHTML,
              "second": this.$refs.fourth__second.innerHTML,
              "third": this.$refs.fourth__third.innerHTML
          },
            "id": this.project__id,
            "second": {
              "first": this.$refs.second__first.innerHTML,
              "second": this.$refs.second__second.innerHTML,
              "third": this.$refs.second__third.innerHTML
          },
            "sixth": {
              "first": this.$refs.sixth__first.innerHTML,
              "second": this.$refs.sixth__second.innerHTML,
              "third": this.$refs.sixth__third.innerHTML
          },
            "third": {
              "fifth": this.$refs.third__fifth.innerHTML,
              "first": this.$refs.third__first.innerHTML,
              "fourth": this.$refs.third__fourth.innerHTML,
              "second": this.$refs.third__second.innerHTML,
              "sixth": this.$refs.third__sixth.innerHTML,
              "third": this.$refs.third__third.innerHTML
          }
        }
      axios
        .post(`http://localhost:8080/api/v1/task/${this.project__id}/check` , check__information,{
          headers: {
            Authorization: Cookie.get('token')
          }
        })
        .then(response => {
          if (response.status === 200){
            this.true__result = !this.true__result
          } else {
            this.false__result = !this.false__result
          }
        })
      // let num = document.getElementsByClassName('.bec--value')
      // console.log(num, e.target)
      //   console.log(e.target.value)
    }
  },
  watch: {
    check:{
      nums(e){
        console.log(e)
      }
    },
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount++;
          }, 1000);
        }
      },
    },
    timeSecund: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timeSecund = this.timeSecund + 1;
            if (this.timeSecund > 9) {
              this.nulS = ''
            }
            if (this.timeSecund <= 9 || this.timeSecund === 60) {
              this.nulS = 0
            }
            if (this.timeMinut > 9) {
              this.nulM = ''
            }
            if (this.timeMinut <= 9 || this.timeMinut === 60) {
              this.nulM = 0
            }
            if (this.timeWatch > 9) {
              this.nulW = ''
            }
            if (this.timeWatch <= 9 || this.timeWatch === 60) {
              this.nulW = 0
            }
          }, 1000);
          if (this.timeSecund === 60) {
            this.timeSecund = 0
            if (this.timeSecund > 9) {
              this.nulS = 0
            }
            this.timeMinut += 1
            if (this.timeMinut === 60) {
              this.timeWatch += 1
              this.timeMinut = 0
            }
          }
        }
      },
    },
  },
}
</script>
<style scoped lang="scss">
.main {
  flex-direction: column;
  display: flex;
  border: 4px solid var(--high--blue);
  max-width: 1066px;
  height: 720px;
  margin: auto;
  border-radius: 14px ;
  margin-bottom: 130px;
  .text--btn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--high--blue);
    padding: 14px 24px;
    border-radius: 8px 8px 0px 0px;
    .text{
      font-size: 24px;
      line-height: 28px;
      color: #FFFFFF;
    }
    .btn{
      display: flex;
      align-items: center;
      .time{
        width: 72px;
        height: 24px;
        background: var(--high--blue);
        border: 1px solid #FFFFFF;
        border-radius: 4px;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
      }
      button{
        &:nth-child(2){
          width: 72px;
          height: 24px;
          background: var(--high--blue);
          border: 1px solid #FFFFFF;
          border-radius: 4px;
          font-size: 12px;
          line-height: 14px;
          text-align: center;
          color: #FFFFFF;
        }
        &:nth-child(3){
          width: 72px;
          height: 24px;
          background: white;
          border-radius: 4px;
          font-size: 12px;
          line-height: 14px;
          text-align: center;
          color: var(--high--blue);
          margin-left: 16px;
        }
      }
    }
  }
}

.all {
  position: relative;
  display: flex;
  margin-top: 74px;
  margin-left: 68px;
  margin-right: 68px;
}

.top {
  //display: flex;
  //justify-content: center;
  margin-right: 107px;
  .math--id{
    font-size: 24px;
    line-height: 28px;
    color: var(--high--blue);
    margin-bottom: 32px;
  }

}

.numbers {
  //flex-direction: column;
  //align-items: center;
  //margin-top: 50px;
  //flex-wrap: wrap;
  //align-items: center;
  //justify-content: center;
  .circle--main{
    display: flex;
    max-width: 440px;
    flex-wrap: wrap;
  }
  .txt{
    font-size: 24px;
    line-height: 28px;
    color: var(--high--blue);
    margin-bottom: 32px;
  }

  .circle {
    //margin: 25px 25px;
    margin-right: 24px;
    margin-bottom: 24px;
    cursor: pointer;
    //&:nth-child(2) {
    //  margin: unset;
    //}
  }

  .container {
    .loader {
      width: 64px;
      height: 64px;
      position: relative;
      border-radius: 50%;
      //background: #0d2323;
      background: linear-gradient(47.21deg, #FFFFFF 48.67%, #000051 84.81%);
      filter: drop-shadow(4px 4px 8px rgba(83, 75, 174, 0.25));
      animation: unset;
      transition: all ease .8s;

      span {
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        background: white;
        border-radius: 50%;
      }

      &::after {
        display: none;
      }

      &::before {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
}

.container {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  //-webkit-box-reflect: below 1px linear-gradient(#0001,#0004);
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    font-size: 24px;
    line-height: 28px;
    color: var(--high--blue);
    z-index: 1;
  }

  .loader {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    //background: #0d2323;
    background: linear-gradient(47.21deg, #000051 14%, #1A237E 84.81%);
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 81, 0.5));
    border: 4px;
    animation: animate 2s linear infinite;
    &.solution{
      filter: drop-shadow(0px 0px 4px rgba(0, 0, 81, 0.5));
      background: linear-gradient(47.21deg, #1A237E 14%, #FFFFFF 84.81%);
    }
  }
}

.bottom__c {
  position: fixed;
  right: 200px;
  top: 100px;

  .text {
    font-size: 35px;
  }

  .loader {
    animation: animate 60s linear infinite;

    &::after {
      //background: #e91212;
    }

    &.show {
      animation: unset;
    }
  }
}

.buttons {
  position: fixed;
  right: 200px;
  top: 350px;

  button {
    border: 0;
    background-color: #00fff9;
    width: 200px;
    padding: 20px 0px;
    font-size: 20px;
    color: #0d2323;
    font-weight: bold;
    transition: all ease .6s;

    &:hover {
      background-color: #258d8a;
      transition: all ease .6s;
    }
  }

  .back__btn {
    margin-top: 20px;
  }
}

//.container

//.container
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.container .loader::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  //background: linear-gradient(to top, transparent, rgba(0, 255, 249, 0.4));
  background-size: 100px 180px;
  background-repeat: no-repeat;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
}

.container .loader::after {
  content: '';
  top: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: #00fff9;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 10px #00fff9,
  0 0 20px #00fff9,
  0 0 30px #00fff9,
  0 0 40px #00fff9
  //0 0 50px #00fff9,
  //0 0 60px #00fff9,
  //0 0 70px #00fff9,
  //0 0 80px #00fff9,
  //0 0 90px #00fff9,
  //0 0 100px #00fff9
}

.container .loader span {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  //background: #102626;
  border-radius: 50%;
}

.third--row--circle {
  margin-top: unset !important;
}

.seventh--row--circle,
.fifth--row--circle,
.third--row--circle {
  margin-top: 40px;

  .practice {
    display: flex;
    align-items: center;
    font-size: 24px;
    line-height: 28px;
    color: var(--high--blue);
    margin: 0px 14px;
  }

  .equality--horizontal {
    //position: absolute;
    display: flex;
    align-items: center;
    margin: 0px 12px;

    span {
      &::before {
        content: '';
        height: 2px;
        width: 12px;
        display: block;
        background: #534BAE;
      }

      &::after {
        content: '';
        height: 2px;
        width: 12px;
        display: block;
        background: #534BAE;
        margin-top: 10px;
      }
    }
  }
}

.sixth--row--circle,
.fourth--row--circle {
  display: flex;
  position: relative;
  margin-top: 6px;

  .practice {
    display: flex;
    align-items: center;
    font-size: 24px;
    line-height: 28px;
    color: var(--high--blue);
    position: absolute;

    &:first-child {
      left: 26px;
    }

    &:nth-child(2) {
      left: 132px;
    }

    &:nth-child(3) {
      left: 230px;
    }
  }
}

.seventh--row--circle,
.fifth--row--circle {
  //padding-top: 20px;
}

.first--row--circle {
  padding-top: 15px;
}

.seventh--row--circle,
.fifth--row--circle,
.third--row--circle,
.first--row--circle {
  display: flex;

  .loader {
    position: relative;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    //background: #0d2323;
    animation: unset;
    transition: all ease .8s;

    &.active {
      background: var(--high--pink);
      transition: all ease .8s;
      filter: drop-shadow(0px 0px 8px rgba(82, 74, 172, 0.75));
    }

    span {
      position: absolute;
      top: 4px;
      left: 4px;
      right: 4px;
      bottom: 4px;
      background: white;
      border-radius: 50%;
    }

    &::after {
      display: none;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      //background: linear-gradient(to top, transparent, rgba(0, 255, 249, 0.4));
      background-size: 100px 180px;
      background-repeat: no-repeat;
      border-radius: 50%;
    }
  }

  .text {
    font-size: 24px;
    line-height: 28px;
    color: var(--high--blue);
  }
}

.second--row--circle {
  margin: 12px 0px;
  display: flex;

  .equality {
    span {
      position: absolute;
      display: flex;

      &.first--span {
        left: 26px;
      }

      &.second--span {
        left: 132px;
      }

      &.third--span {
        left: 238px;
      }

      &::before {
        content: '';
        height: 12px;
        width: 2px;
        display: block;
        background: #534BAE;
      }

      &::after {
        content: '';
        height: 12px;
        width: 2px;
        display: block;
        background: #534BAE;
        margin-left: 10px;
      }
    }
  }
}

.circles {
  position: relative;
}
.first--row--circle{
  .circle {
    &:nth-child(2) {
      margin: 0px 43px;
    }
  }
}
.second--row{
  .table{
    background: var(--high--blue);
    height: 280px;
    width: 416px;
    border-radius: 16px;
    margin-top: 16px;
    .users--information{
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
      color: #FFFFFF;
      text-align: center;
      padding-top: 16px;
      padding-bottom: 16px;
    }
    #customers {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 368px;
      border-radius: 8px 8px 0 0;
      margin: auto;
      box-shadow: 0px 4px 16px #534BAE;
    }

    #customers td, #customers th {
      border: 2px solid var(--high--blue);
      padding: 8px;
    }
    td{
      color: var(--high--blue);
      font-size: 12px;
      line-height: 14px;
    }
    #customers tr:nth-child(even) {
      background-color: #fff;
    }

    #customers tr {
      background-color: #fff;
    }

    #customers th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: center;
      color: var(--high--blue);
      font-size: 14px;
      line-height: 16px;
      text-transform: capitalize;
      &:first-child {
        width: 40px;
      }

      &:nth-child(2) {
        width: 330px;
      }

      &:nth-child(3) {
        width: 60px;
      }
    }
  }
}
tr{
  &:first-child{
    th{
      &:first-child{
        border-radius: 8px 0px 0px 0px ;
      }
      &:nth-child(3){
        border-radius: 0px 8px 0px 0px ;
      }
    }
  }
  &:last-child{
    td{
      &:first-child{
        border-radius: 0px 0px 0px 8px ;
      }
      &:nth-child(3){
        border-radius: 0px 0px 8px 0px ;
      }
    }
  }
  td{
    &:first-child{
      text-align: center;
    }
    &:last-child{
      text-align: center;
    }
  }
}
.circle.free{
  cursor: pointer;
}
.loader{
  &.true__result{
    background: #009624 !important;
  }
  &.false__result{
    background: #9B0000 !important;
  }
}
</style>