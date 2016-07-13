<template>
  <nav class="gl-nav" @click="changeMusicPage">
    <ul class="menu">
      <li class="nav-primary-menu menu-item" v-for="menu in menus">
        <a href="{{ menu.link }}">{{ menu.name }}</a>
      </li>
    </ul>
  </nav>
</template>
<style>
  .gl-nav {
    flex: 1 0 0;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8125em;
    line-height: 1.3846;
    text-transform: uppercase;
  }

  .gl-nav .menu {
    padding: 0;
    margin: 0 auto;
    max-width: 1100px;
    width: 100%;
    background-color: transparent;
    display: block;
    position: static;
  }

  .menu .menu-item {
    border-width: 0;
    display: inline-block;
    position: relative;
    margin-bottom: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
    list-style: none;
  }

  .menu .menu-item a {
    display: block;
    letter-spacing: 0.1em;
    line-height: 1.53846154;
    position: relative;
    text-align: left;
    text-decoration: none;
    padding: 1.53846154em 1.23076923em;
    transition: none;
  }

  .menu .menu-item a:hover {
    color: rgba(255, 255, 255, 0.9);
  }
</style>
<script>
  import { changeMusicPage } from '../vuex/actions'

  export default{
    data(){
      return {
        menus: [{
          name: '腰乐队',
          link: '#'
        }, {
          name: '李志',
          link: '#'
        }, {
          name: 'Joan Baez',
          link: '#'
        }, {
          name: '声音玩具',
          link: '#'
        }, {
          name: 'Uncle Cracker',
          link: '#'
        }]
      }
    },
    vuex: {
      actions: {
        changeMusicPage
      }
    }
  }
</script>
