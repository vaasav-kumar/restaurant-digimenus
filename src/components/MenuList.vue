<template>
  <div class="menu-list">
    <div v-for="(menu, index) in menus" :key="index">
      <div class="category" v-if="menu.category">
        <h5>{{menu.category}}</h5>
      </div>

      <menu-list v-if="menu.category" :menus="menu.items" />
      <div v-else class="items">
        <span>{{menu.name}}</span>
        <span>{{amountFormat(menu.price)}}</span>
        <i v-if="menu.available">Available</i>
        <i v-else>Not Available</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuList',
  props: {
    menus: Array
  },
  methods: {
    amountFormat (amount) {
      amount = parseFloat(amount)
      if (typeof amount === 'number' && !isNaN(amount)) {
        return amount.toLocaleString('en-IN', {style: 'currency', currency: 'INR', minimumFractionDigits: 1, maximumFractionDigits: 2})
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/menuItems.scss';

  .menu-list {
    counter-reset: sno;

    .items {
      *:nth-child(1) {
        &::before {
          counter-increment: sno;
          content: counter(sno) '. ';
        }
      }

      *:nth-child(2) {
        text-align: right;
      }

      i {
        font-weight: 200;
      }
    }
  }
</style>
