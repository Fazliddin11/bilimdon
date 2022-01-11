<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="menu">
          <div class="logo">
            <img src="../assets/logo.png">
          </div>
          <div class="check--v--sigin">
            <div class="check--input--btn">
              <div class="check--input">
                <img src="../assets/search.png" alt="">
                <input type="number" placeholder="ID bo'yicha qidirish" v-model="math__id" :class="{'active' : validation}">
              </div>
              <div class="check--btn">
                <button @click="search">
                  QIDIRISH
                </button>
              </div>
            </div>
            <div class="Sigin--btn">
              <button @click="sigin" :class="{'title' : outSite}">
                KIRISH
              </button>
              <button class="out--site" :class="{'active' : outSite}">
                CHIQISH
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <router-view/>
<!--    <main-n/>-->
    <footer class="footer">
      <div class="location--number">
        <div class="container">
          <div class="location">
            <img src="../assets/location.png" alt="">
            <div class="text">Tashkent, Uzbekiston</div>
          </div>
          <div class="number">
            <img src="../assets/num.png" alt="">
            <div class="text">
              +998 93 503 25 72
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="SigIn" :class="{'active' : isActive}">
      <div class="sigin--container">
        <div class="top--text">
          Kirish / Ro’yxatdan o’tish
        </div>
        <input
            type="number"
            placeholder="Raqamingizni kiriting"
            class="first--input"
            v-model="name"
            :disabled="isActive === true"
        >
        <input
            type="number"
            placeholder="Parolni kiriting"
            v-model="password"
            class="password"
            :class="{'active' : number}"
        >
        <button
            @click="login"
            :class="{'active' : log__btn}"
        >KIRISH
        </button>
        <button
            @click="check"
            class="check--btn"
            :class="{'check--btn--vt' : log__btn}"
        >TASDIQLASH
        </button>
      </div>
    </div>
    <div class="SigIn" :class="{'active' : isActive}">
      <div class="sigin--container">
        <div class="top--text">
          Kirish / Ro’yxatdan o’tish
        </div>
        <input
            type="number"
            placeholder="Raqamingizni kiriting"
            class="first--input"
            v-model="name"
        >
        <input
            type="number"
            placeholder="Parolni kiriting"
            v-model="password"
            class="password"
            :class="{'active' : number}"
        >
        <button
            @click="login"
            :class="{'active' : log__btn}"
        >KIRISH
        </button>
        <button
            @click="check"
            class="check--btn"
            :class="{'check--btn--vt' : log__btn}"
        >TASDIQLASH
        </button>
      </div>
    </div>
    <div class="back" :class="{'active' : isActive}"></div>
  </div>
</template>
<script>
import axios from 'axios'
import Cookies from "js-cookie";
export default {
  data(){
    return{
      isActive:false,
      name:'',
      password:'',
      number:false,
      log__btn:false,
      outSite:false,
      math__id:'',
      validation: false,
      isdisabled: true
    }
  },
  components:{
  },
  methods:{
    sigin(){
      this.isActive = !this.isActive
    },
    login(){
      axios
        .get(`http://localhost:8080/api/auth/${this.name}`)
        .then(response => {
          if (response.status === 200){
            this.number = !this.number
            this.log__btn = !this.log__btn
          }
        })
    },
    check(){
      axios
        .get(`http://localhost:8080/api/check/${this.name}&${this.password}`)
        .then(response => {
          if (response.status === 200){
            this.isActive = !this.isActive
            this.outSite = !this.outSite
            this.name = ''
            this.password = ''
            Cookies.set('token', response.data.accessToken)
          }
        })
    },
    search(){
      axios
        .get(`http://localhost:8080/api/v1/task/pdf/${this.math__id}/check`, {
          data: {
            firstName: 'Fred'
          },
          responseType: 'arraybuffer'
        })
        .then(response => {
          let blob = new Blob([response.data], { type: 'application/pdf' }),
              url = window.URL.createObjectURL(blob)

          window.open(url)
          if (response.status === 200){
            this.math__id = ''
          }else {
            if (response.status !== 200){
              this.math__id = ''
              this.validation = !this.validation
            }
          }
        })

    }
  }
}
</script>
<style scoped lang="scss">
  .header{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    .container{
      max-width: 1400px;
      margin: auto;
      background: var(--blue);
      box-shadow: 0px 4px 16px #534BAE;
      border-radius: 0px 0px 16px 16px;
      .menu{
        display: flex;
        justify-content: space-between;
        padding: 12px;
        .logo{
          margin-left: 12px;
        }
        .check--v--sigin{
          display: flex;
          align-items: center;
        }
        .check--input--btn{
          margin-right: 72px;
          height: 48px;
          width: 320px;
          border: 1px solid white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          .check--input{
            display: flex;
            align-items: center;
            img{
              width: 15px;
              margin-left: 12px;
              margin-right: 15px;
              filter: invert(100%);
            }
            input{
              color: white;
              &.active{
                input::placeholder{
                  color: #D8000C;
                }
              }
            }
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            input[type=number] {
              -moz-appearance: textfield;
            }
            input::placeholder{
              color: white;
            }
          }
          .check--btn{
            button{
              background-color: white;
              height: 48px;
              width: 142px;
              border-radius: 0px 8px 8px 0px;
              font-size: 24px;
              line-height: 28px;
              color: var(--blue);
              font-family: robota-m;
            }
          }
        }
        .Sigin--btn{
          button{
            width: 200px;
            height: 48px;
            background: #FFFFFF;
            border-radius: 8px;
            font-size: 24px;
            line-height: 28px;
            text-transform: capitalize;
            color: var(--blue);
            &.title {
              display: none;
            }
          }
          .out--site{
            display: none;
            &.active{
              display: block;
            }
          }
        }
      }
    }
  }

  .footer{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    .location--number{
      background: var(--blue);
      border-radius: 16px 16px 0px 0px;
      .container{
        max-width: 1160px;
        margin: auto;
        padding: 18px 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .number,
        .location{
          display: flex;
          align-items: center;
          img{
            width: 36px;
            filter: invert(100%);
          }
          .text{
            font-size: 24px;
            line-height: 28px;
            text-transform: capitalize;
            color: #FFFFFF;
            margin-left: 6px;
          }
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
  .SigIn{
    position: absolute;
    top: -10000px;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: -1;
    transition: all ease .3s;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type=number] {
      -moz-appearance: textfield;
    }
    .sigin--container{
      display: flex;
      flex-direction: column;
      background: var(--blue);
      padding: 24px;
      border-radius: 16px;
      .top--text{
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;
        color: #FFFFFF;
      }
      input{
        width: 200px;
        height: 48px;
        border: 2px solid #fff;
        border-radius: 16px;
        padding-left: 22px;
        margin: auto;
        margin-bottom: 8px;
        &::placeholder{
          font-size: 18px;
          line-height: 21px;
          color: #000051;
        }
        &.first--input{
          margin-top: 14px;
        }
        &.password{
          display: none;
        }
        &.active{
          display: block;
        }
      }
      button{
        width: 200px;
        height: 48px;
        border: 2px solid #fff;
        border-radius: 16px;
        color: white;
        margin: auto;
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;
        margin-bottom: 8px;
        &.check--btn{
          display: none;
        }
        &.check--btn--vt{
          display: block;
        }
        &.active{
          display: none;
        }
      }
    }
    &.active{
      top: 0;
      transition: all ease .3s;
      z-index: 2;
    }
  }
  .back{
    background: rgba(0, 0, 81, 0.5);
    opacity: 0;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    transition: all ease .5s;
    z-index: -1;
    &.active{
      opacity: 1;
      z-index: 0;
      transition: all ease .5s;
    }
  }
  button{
    cursor: pointer;
  }
</style>