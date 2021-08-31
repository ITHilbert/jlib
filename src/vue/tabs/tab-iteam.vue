<template>
  <li class="nav-item">
    <a :class="classes" :id="tabName" data-toggle="tab" :href="charpName" role="tab" :aria-controls="name" :aria-selected="aktiv" v-bind="$attrs"><slot></slot></a>
  </li>
</template>

<script>
    export default {
        props: {
          'name': {
              default: 'home'
          },
          'aktiv': {
            default: false
          }
        },
        computed: {
          tabName: function () {
            return this.name + '-tab';
          },
          charpName: function () {
            return '#'+this.name;
          },
          classes: function () {
            if(this.aktiv === true){
              return 'nav-link active';
            }else{
              return 'nav-link';
            }
          },
        }
    }
</script>
