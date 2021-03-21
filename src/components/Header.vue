<template>
  <div class="header">
    <ul>
      <img src="@/assets/images/logo2.png" />
      <p>{{restaurant}}</p>
    </ul>

    <ul>
      <li v-for="(menu, index) in menuOptions" :key="index"
          @click="menu.action">
        {{menu.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      options: [],
      restaurant: null,
      uid: null
    }
  },
  mounted () {
    this.uid = this.$route.params.id
    this.$analytics.setUserProperties({restaurant_id: this.uid, user: 'anonymous'})
    this.$db.collection('restaurant').doc(this.uid).get().then(response => {
      this.restaurant = response.data().info.name
    })
  },
  watch: {
    '$route': {
      handler: 'populateData',
      immediate: true
    }
  },
  computed: {
    menuOptions () {
      return this.options.filter(e => e.show)
    }
  },
  methods: {
    populateData () {
      const routeName = this.$route.name
      this.options = [
        {
          title: 'Scan Again',
          show: routeName !== 'Home',
          action: () => {
            this.$router.push({name: 'Home'})
          }
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/themes.scss';

  .header {
    height: 60px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 15px 10px -15px #dddbde;

    ul {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      list-style-type: none;
      margin: 0;
      padding: 0;

      p {
        font-weight: 700;
        color: $primary;
        background: -webkit-linear-gradient(45deg, $primary, $secondary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-transform: uppercase;
        word-break: break-all;
      }

      li {
        cursor: pointer;
        padding: 0 15px;
        font-size: 15px;
        font-weight: 700;

        &:nth-child(n+2) {
          border-left: 2px solid $grey-light;
        }
      }
    }
  }

  .desktop {
    .header {
      padding: 10px 18%;

      ul {
        p {
          margin: 0 15px;
          font-size: 16px;
          letter-spacing: 2px;
        }
      }

      img {
        height: 62px;
      }
    }
  }

  .mobile, .tablet {
    .header {
      padding: 10px 20px;

      img {
        height: 55px;
      }

      ul {
        p {
          margin: 0 5px;
        }

        li {
          font-size: 14px;
          padding: 0 8px;
        }
      }
    }
  }
</style>
