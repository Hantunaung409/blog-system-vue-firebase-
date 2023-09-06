<template>
    <div class="spin">

    </div>
</template>

<script>
    export default {
        name: 'LoadingSpinner',
    }
</script>

<style lang="scss">
 .spin {
    width: 40px;
    height: 40px;
    border: 5px solid transparent;
    border-radius: 50%;
    margin: 100px auto;
    border-top: 5px solid red;
   animation: spinner 1s infinite;
 }

 @keyframes spinner {
  to{ transform: rotate(360deg);}

 }
</style>