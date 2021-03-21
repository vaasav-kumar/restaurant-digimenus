<template>
  <div class="menu-items">
    <div class="head">
      <h6>Menu Items</h6>
    </div>

    <menu-list :menus="menus" />
    <loader v-if="loader" />
    <div class="empty" v-else-if="menus.length === 0">
      <p>No menu items found</p>
    </div>
  </div>
</template>

<script>
import MenuList from '@/components/MenuList'
import Loader from '@/components/Loader'

export default {
  name: 'Menus',
  components: { MenuList, Loader },
  data () {
    return {
      menus: [],
      loader: false
    }
  },
  created () {
    this.$auth.signInAnonymously()
    this.populateData()
  },
  methods: {
    populateData () {
      this.loader = true
      this.$db.collection('restaurant').doc(this.$route.params.id)
        .onSnapshot(response => {
          this.menus = response.data().items || []
          this.loader = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/menuPage.scss';
</style>
