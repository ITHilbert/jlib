<template>
    <div class="card-header" v-bind="$attrs">
        <slot></slot>
    </div>
</template>

<style>
.card-header{
  font-weight: bold;}
</style>
