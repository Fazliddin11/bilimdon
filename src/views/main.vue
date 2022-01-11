<template>
  <div class="main">
    <div class="first--row">
      <div class="top-card" v-for="(lavel, index) in title" :key="index">
<!--        {{lavel}}-->
        <div class="about">
          <div class="text">
            {{ lavel.name }}
          </div>
        </div>
        <div class="workspace" >
          <div class="degree">
            <ul >
              <li @click="degree(i.id)" :class="{'active' :  math1}" v-for="(i, index) in lavel.levels" :key="index">
                <a href="#">{{ i.name }}</a>
                <button></button>
                <div class="info--btn">
                  <div class="start--btn">
                    <button @click="download">Ko’chirish</button>
    <!--                <button @click="start">Boshlash</button>-->
                  </div>
    <!--              <div class="top&#45;&#45;btn">-->
    <!--                <div class="ball">-->
    <!--                  <div class="text">Score:</div>-->
    <!--                  <span></span>-->
    <!--                  <div class="num">400</div>-->
    <!--                </div>-->
    <!--              </div>-->
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="second--row">
      <div class="table">
        <div class="users--information">
          O’yinchilar ro’yxati
        </div>
        <table width="50%" id="customers">
          <tr>
            <th>№</th>
            <th>username</th>
            <th>Score</th>
          </tr>
          <tr v-for="(user, index) in users" :key="index">
<!--            {{user}}-->
            <td>{{user.id}}</td>
            <td>{{user.username}}</td>
            <td>0</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import Cookie from 'js-cookie'
export default {
  data(){
    return{
      query__id:'',
      users:[],
      title:[]
    }
  },
  created() {
    axios
      .get(`http://localhost:8080/api/v1/user`)
      .then(response => {
        this.users = response.data.data
        console.log('res',this.users)
      })
    axios
      .get(`http://localhost:8080/api/v1/category`)
      .then(response => {
        this.title = response.data.data
        console.log(this.lavels)
      })
  },
  methods:{
    degree(id){
      this.query__id = id
      console.log(id)
    },
    start(){
      this.$router.push({path: '/new', query: {q: this.query__id}})
    },
    download(){
      axios
          .get(`http://localhost:8080/api/v1/task/pdf/1&${this.query__id}`, {
            data: {
              firstName: 'Fred'
            },
            responseType: 'arraybuffer'
          })
          .then(response => {
            let blob = new Blob([response.data], { type: 'application/pdf' }),
                url = window.URL.createObjectURL(blob)

            window.open(url)
          })
    },
  }
}
</script>
<style scoped lang="scss">
.main{
  max-width: 1400px;
  margin: auto;
  display: flex;
  margin-top: 100px;
  .first--row{
    display: flex;
    flex-wrap: wrap;
    .top-card{
      border: 4px solid var(--high--blue);
      width: 473px;
      height: 344px;
      border-radius: 8px 8px 8px 8px;
      &:nth-child(3),
      &:nth-child(5),
      &:first-child{
        margin-right: 45px;
      }
      &:nth-child(6),
      &:nth-child(5){
        margin-bottom: 100px;
      }
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:first-child{
        margin-bottom: 32px;
      }
      .about
      {
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
        .text{
          align-items: center;
          justify-content: center;
          display: flex;
          background: var(--high--blue);
          padding: 13px 0px;
        }
      }
      .workspace{
        .degree{
          display: flex;
          ul{
            li{
              list-style: none;
              display: flex;
              align-items: center;
              justify-content: right;
              margin-bottom: 40px;
              &:first-child{
                margin-top: 26px;
              }
              &:last-child{
                margin-bottom: unset;
              }
              a{
                text-decoration: none;
                text-align: right;
                margin-right: 26px;
                font-family: robota-m;
                font-size: 24px;
                line-height: 28px;
                color: var(--high--blue);
              }
              button{
                width: 5px;
                height: 5px;
                background: var(--high--blue);
                border-radius: 50%;
              }
              &.active{
                a{
                  color: var(--green);
                }
                button{
                  background: var(--green);
                }
              }
            }
          }
          .info--btn{
            //margin-top: 32px;
            margin-left: 12px;
            display: flex;
            .top--btn{
              display: flex;
              align-items: center;
              button{
                font-size: 12px;
                line-height: 14px;
                text-align: center;
                color: #FFFFFF;
                width: 72px;
                height: 24px;
                background: var(--pink);
                border-radius: 4px;
                font-family: robota-m;
                &:first-child{
                  margin-right: 16px;
                }
              }
              .ball{
                display: flex;
                align-items: center;
                font-size: 12px;
                line-height: 14px;
                color: #FFFFFF;
                background: var(--green);
                width: 100px;
                height: 24px;
                border-radius: 4px;
                margin-left: 16px;
                .text{
                  margin-left: 8px;
                }
                span{
                  &::before{
                    content: '';
                    display: block;
                    height: 16px;
                    width: 1px;
                    background: #FFFFFF;
                  }
                  margin-left: 8px;
                }
                .num{
                  margin-left: 19px;
                }
              }
            }
            .bottom--btn{
              margin-left: 88px;
              margin-top: 4px;
              button{
                width: 72px;
                height: 24px;
                border-radius: 4px;
                border: 1px solid var(--pink);
                font-size: 12px;
                line-height: 14px;
                font-family: robota-m;
                color: var(--pink);
              }
            }
            .start--btn{
              //margin-top: 18px;
              button{
                width: 72px;
                height: 24px;
                background: var(--high--blue);
                font-size: 12px;
                line-height: 14px;
                color: #FFFFFF;
                border-radius: 4px;
                font-family: robota-m;
                &:first-child{
                  margin-right: 16px;
                }
                &:nth-child(2){
                  margin-left: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
  .second--row{
    position: fixed;
    right: 227px;
    .table{
      background: var(--high--blue);
      width: 320px;
      height: 720px;
      border-radius: 16px;
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
        width: 272px;
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
        background-color: #FFFFFF;
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
</style>