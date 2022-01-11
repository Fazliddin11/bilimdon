<template>
  <div>
    <div class="about" v-for="(item,index) in items" :key="index">
      <div class="id">
        ID:124234234
      </div>
      <div class="one">
        <div class="circle">{{ item[1] }}</div>
        <div class="add1">{{ item[2] }}</div>
        <div class="circle">{{ item[3] }}</div>
        <div class="add2">{{ item[4] }}</div>
        <div class="circle">{{ item[5] }}</div>
        <div class="equality">{{ item[6] }}</div>
        <div>{{ item[7] }}</div>
      </div>
      <div class="two">
        <div class="add3">{{ item[8] }}</div>
        <div class="div"></div>
        <div class="add4">{{ item[9] }}</div>
        <div class="div"></div>
        <div class="add5">{{ item[10] }}</div>
        <div class="div"></div>
        <div></div>
      </div>
      <div class="one">
        <div class="circle">{{ item[11] }}</div>
        <div class="add1">{{ item[12] }}</div>
        <div class="circle">{{ item[13] }}</div>
        <div class="add2">{{ item[14] }}</div>
        <div class="circle">{{ item[15] }}</div>
        <div class="equality">{{ item[16] }}</div>
        <div>{{ item[17] }}</div>
      </div>
      <div class="two">
        <div class="add3">{{ item[18] }}</div>
        <div class="div"></div>
        <div class="add4">{{ item[19] }}</div>
        <div class="div"></div>
        <div class="add5">{{ item[20] }}</div>
        <div class="div"></div>
        <div></div>
      </div>
      <div class="one">
        <div class="circle">{{ item[21] }}</div>
        <div class="add1">{{ item[22] }}</div>
        <div class="circle">{{ item[23] }}</div>
        <div class="add2">{{ item[24] }}</div>
        <div class="circle">{{ item[25] }}</div>
        <div class="equality">{{ item[26] }}</div>
        <div>{{ item[27] }}</div>
      </div>
      <div class="two">
        <div class="add3">{{ item[28] }}</div>
        <div class="div"></div>
        <div class="add4">{{ item[29] }}</div>
        <div class="div"></div>
        <div class="add5">{{ item[30] }}</div>
        <div class="div"></div>
        <div></div>
      </div>
      <div class="two">
        <div class="add3">{{ item[31] }}</div>
        <div class="div"></div>
        <div class="add4">{{ item[32] }}</div>
        <div class="div"></div>
        <div class="add5">{{ item[33] }}</div>
        <div class="div"></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        ['123123123123', '4', '+', '2', '+', '6', '=', '12', '+', '+', '+', '0', '+', '1', '+', '8', '=', '18', '+', '+', '+', '7', '+', '5', '+', '3', '=', '15', '=', '=', '=', '20', '8', '17'],
        ['123123123123', '4', '+', '2', '+', '6', '=', '12', '+', '+', '+', '0', '+', '1', '+', '8', '=', '18', '+', '+', '+', '7', '+', '5', '+', '3', '=', '15', '=', '=', '=', '20', '8', '17'],
        ['123123123123', '4', '+', '2', '+', '6', '=', '12', '+', '+', '+', '0', '+', '1', '+', '8', '=', '18', '+', '+', '+', '7', '+', '5', '+', '3', '=', '15', '=', '=', '=', '20', '8', '17'],
        ['123123123123', '4', '+', '2', '+', '6', '=', '12', '+', '+', '+', '0', '+', '1', '+', '8', '=', '18', '+', '+', '+', '7', '+', '5', '+', '3', '=', '15', '=', '=', '=', '20', '8', '17'],
        ['123123123123', '4', '+', '2', '+', '6', '=', '12', '+', '+', '+', '0', '+', '1', '+', '8', '=', '18', '+', '+', '+', '7', '+', '5', '+', '3', '=', '15', '=', '=', '=', '20', '8', '17'],
        ['123123123123', '4', '+', '2', '+', '6', '=', '12', '+', '+', '+', '0', '+', '1', '+', '8', '=', '18', '+', '+', '+', '7', '+', '5', '+', '3', '=', '15', '=', '=', '=', '20', '8', '17'],
        ['123123123123', '4', '+', '2', '+', '6', '=', '12', '+', '+', '+', '0', '+', '1', '+', '8', '=', '18', '+', '+', '+', '7', '+', '5', '+', '3', '=', '15', '=', '=', '=', '20', '8', '17'],
        ['123123123123', '4', '+', '2', '+', '6', '=', '12', '+', '+', '+', '0', '+', '1', '+', '8', '=', '18', '+', '+', '+', '7', '+', '5', '+', '3', '=', '15', '=', '=', '=', '20', '8', '17'],
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  padding: 3px 20px;

  .two,
  .one {
    display: flex;
    align-items: center;
  }
}

.circle {
  border: 1px solid #000;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.equality,
.add1,
.add2,
.add5,
.add4,
.div,
.add3 {
  width: 20px;
}

.add5,
.add4,
.div,
.add3 {
  margin-left: 16px;
}

.about {
  &:nth-child(5),
  &:nth-child(3),
  &:nth-child(7),
  &:first-child {
    float: left;
  }
}
</style>