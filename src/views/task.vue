<template>
  <div class="main">
    <div class="all">
      <div class="top">
        <div class="circles">
          <div class="third--row--circle">
            <div class="circle" @click="nums($event,0)">
              <div class="container">
                <div class="text">{{ title.first.first }}</div>
                <div class="loader 1" :class="{'show' : isActive}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="practice">
              {{ title.first.second }}
            </div>
            <div class="circle" @click="nums($event,1)">
              <div class="container">
                <div class="text">{{ title.first.third }}</div>
                <div class="loader 2" :class="{'show' : isActive}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="practice">
              {{ title.first.fourth }}
            </div>
            <div class="circle" @click="nums($event,2)">
              <div class="container">
                <div class="text">{{ title.first.fifth }}</div>
                <div class="loader 3" :class="{'show' : isActive}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="equality--horizontal">
              <span class="first--span"></span>
            </div>
            <div class="circle">
              <div class="container">
                <div class="text">{{ title.first.sixth }}</div>
                <div class="loader 4" :class="{'show' : isActive}">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="fourth--row--circle">
            <div class="practice">
              {{ title.second.first }}
            </div>
            <div class="practice">
              {{ title.second.second }}
            </div>
            <div class="practice">
              {{ title.second.third }}
            </div>
          </div>
          <div class="fifth--row--circle">
            <div class="circle" @click="nums($event,3)">
              <div class="container">
                <div class="text">{{ title.third.first }}</div>
                <div class="loader 5" :class="{'show' : isActive}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="practice">
              {{ title.third.second }}
            </div>
            <div class="circle" @click="nums($event,4)">
              <div class="container">
                <div class="text">{{ title.third.third }}</div>
                <div class="loader 6" :class="{'show' : isActive}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="practice">
              {{ title.third.fourth }}
            </div>
            <div class="circle" @click="nums($event,5)">
              <div class="container">
                <div class="text">{{ title.third.fifth }}</div>
                <div class="loader 7" :class="{'show' : isActive}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="equality--horizontal">
              <span class="first--span"></span>
            </div>
            <div class="circle">
              <div class="container">
                <div class="text">{{ title.third.sixth }}</div>
                <div class="loader 8" :class="{'show' : isActive}">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="sixth--row--circle">
            <div class="practice">
              {{ title.fourth.first }}
            </div>
            <div class="practice">
              {{ title.fourth.second }}
            </div>
            <div class="practice">
              {{ title.fourth.third }}
            </div>
          </div>
          <div class="seventh--row--circle">
            <div class="circle">
              <div class="container" @click="nums($event,6)">
                <div class="text">{{ title.fifth.first }}</div>
                <div class="loader 9" :class="{'show' : isActive}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="practice">
              {{ title.fifth.second }}
            </div>
            <div class="circle" @click="nums($event,7)">
              <div class="container">
                <div class="text">{{ title.fifth.third }}</div>
                <div class="loader 10" :class="{'show' : isActive}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="practice">
              {{ title.fifth.fourth }}
            </div>
            <div class="circle" @click="nums($event,8)">
              <div class="container">
                <div class="text">{{ title.fifth.fifth }}</div>
                <div class="loader 11" :class="{'show' : isActive}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="equality--horizontal">
              <span class="first--span"></span>
            </div>
            <div class="circle">
              <div class="container">
                <div class="text">{{ title.fifth.sixth }}</div>
                <div class="loader 12" :class="{'show' : isActive}">
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
                <div class="text">{{ title.sixth.first }}</div>
                <div class="loader 13" :class="{'show' : isActive}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="circle">
              <div class="container">
                <div class="text">{{ title.sixth.second }}</div>
                <div class="loader 14" :class="{'show' : isActive}">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="circle">
              <div class="container">
                <div class="text">{{ title.sixth.third }}</div>
                <div class="loader 15" :class="{'show' : isActive}">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="numbers">
        <!--      @click="one__choice"-->
        <div class="circle" v-for="i in numbers" :key="i" @click="number(i)">
          <div class="container">
            <div class="text">{{ i }}</div>
            <div class="loader" :class="{'show' : show}">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="circle bottom__c">
        <div class="container">
          <div class="text">{{ nulW }}{{ timeWatch }}:{{ nulM }}{{ timeMinut }}:{{ nulS }}{{ timeSecund }}</div>
          <div class="loader" :class="{'show' : active}">
            <span></span>
          </div>
        </div>
      </div>
      <div class="buttons">
        <div class="check__btn">
          <button>Tekshirish</button>
        </div>
        <div class="back__btn">
          <button @click="back">Назад</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
// import Cookies from 'js-cookie'
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
      queryId:''
    }
  },
  components: {},
  created() {

    // console.log('id',id)
    this.queryId = this.$route.query.q
    if (this.queryId === '') {
      this.queryId = 1
    }
      axios
          .get(`http://localhost:8080/api/v1/sub-category/${this.queryId}/task/1`)
          .then(response => {
            this.title = response.data.data
            // console.log(this.title)
            if (response.status === 200) {
              // console.log(this.title)
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
              // console.log('value', this.values)
              for (let i = 0; i < 9; i++) {
                this.a.push(this.nine[i] - this.values[i])
                if (this.a[i] === i) {
                  this.TF.push(i)
                }
              }
              for (let j = 0; j < this.TF.length; j++) {
                // console.log(this.TF[j])
                this.nine.splice(this.TF[j], 1)
                // console.log(this.nine)
              }
              for (let k = 0; k < this.nine.length; k++) {
                this.numbers.splice(this.nine[k], 1)
              }
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
      // console.log(i.used)
      // if(!i.used) {

      // i.used = true;
      const isInArray = this.array.includes(i);
      // console.log(isInArray)
      if (isInArray === false) {
        let loaderAll = document.querySelectorAll('.loader')
        loaderAll.forEach(item => {
          if (item.classList.contains('active')) {
            let textValue = item.parentElement.children[0]
            // console.log(textValue.innerHTML)
            textValue.innerHTML = i
          }
        })
      }
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
      // for (let i = 0; i < 9; i++) {
      //   this.a.push(this.nine[i] - this.values[i])
      //   if (this.a[i] === i) {
      //     this.TF.push(i)
      //   }
      // }
      // for (let j = 0; j < this.TF.length; j++){
      //   console.log(this.TF[j])
      //   this.nine.splice(this.TF[j], 1)
      //   console.log(this.nine)
      // }
      // for (let k = 0; k < this.nine.length; k++){
      //   this.numbers.splice(this.nine[k], 1)
      // }
      // }
    },

    nums(e, index) {
      // let uff = e.target.innerHTML
      // console.log('e', index)
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
  },
  watch: {
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
    nums() {
      console.log('1')
      this.nums()
    },
  },
}
</script>
<style scoped lang="scss">
.main {
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #102626;
  display: flex;
}

.all {
  position: relative;
}

.top {
  display: flex;
  justify-content: center;

}

.numbers {
  display: flex;
  align-items: center;
  margin-top: 50px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .circle {
    margin: 25px 25px;

    &:nth-child(2) {
      margin: 0px 25px;
    }
  }

  .container {
    .loader {
      width: 100px;
      height: 100px;
      position: relative;
      border-radius: 50%;
      background: #0d2323;
      animation: unset;
      transition: all ease .8s;

      span {
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        background: #102626;
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
    font-size: 50px;
    z-index: 1;
    color: white;
  }

  .loader {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #0d2323;
    animation: animate 2s linear infinite;
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
  background: linear-gradient(to top, transparent, rgba(0, 255, 249, 0.4));
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
  background: #102626;
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
    font-size: 45px;
    color: white;
    margin: 0px 14px;
  }

  .equality--horizontal {
    //position: absolute;
    display: flex;
    align-items: center;
    margin: 0px 20px;

    span {
      &::before {
        content: '';
        height: 2px;
        width: 20px;
        display: block;
        background: white;
      }

      &::after {
        content: '';
        height: 2px;
        width: 20px;
        display: block;
        background: white;
        margin-top: 10px;
      }
    }
  }
}

.sixth--row--circle,
.fourth--row--circle {
  display: flex;
  position: relative;

  .practice {
    display: flex;
    align-items: center;
    font-size: 45px;
    color: white;
    //margin: 0px 14px;
    position: absolute;

    &:first-child {
      left: 38px;
    }

    &:nth-child(2) {
      left: 193px;
    }

    &:nth-child(3) {
      left: 347px;
    }
  }
}

.seventh--row--circle,
.fifth--row--circle {
  padding-top: 20px;
}

.first--row--circle {
  padding-top: 20px;
}

.seventh--row--circle,
.fifth--row--circle,
.third--row--circle,
.first--row--circle {
  display: flex;

  .loader {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #0d2323;
    animation: unset;
    transition: all ease .8s;

    &.active {
      background: #00fff9;
      transition: all ease .8s;
    }

    span {
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      background: #102626;
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
      background: linear-gradient(to top, transparent, rgba(0, 255, 249, 0.4));
      background-size: 100px 180px;
      background-repeat: no-repeat;
      border-radius: 50%;
    }
  }

  .text {
    font-size: 50px;
  }
}

.second--row--circle {
  margin: 20px 0px;
  display: flex;

  .equality {
    span {
      position: absolute;
      display: flex;

      &.first--span {
        left: 43px;
      }

      &.second--span {
        left: 198px;
      }

      &.third--span {
        left: 352px;
      }

      &::before {
        content: '';
        height: 20px;
        width: 2px;
        display: block;
        background: white;
      }

      &::after {
        content: '';
        height: 20px;
        width: 2px;
        display: block;
        background: white;
        margin-left: 10px;
      }
    }
  }
}

.circles {
  position: relative;
}

.circle {
  &:hover {
    cursor: pointer;
  }

  &:nth-child(2) {
    margin: 0px 55px;
  }
}
</style>