<template>
  <div :class="classes" :id="name" role="tabpanel" :aria-labelledby="tabName">
    <slot></slot>
  </div>
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
          classes: function () {
            if(this.aktiv === true){
              return 'tab-pane fade show active';
            }else{
              return 'tab-pane fade show';
            }
          },
        }
    }
</script>
