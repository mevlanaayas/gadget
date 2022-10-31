<script>
export default {
  name: "Footer"
};
</script>

<template>
  <footer class="spec-footer footer">
    <div class="row">
      <div>
        <p class="text-center">© {{ new Date().getFullYear() }} gadget</p>
      </div>
    </div>
  </footer>
</template>

<style>
.spec-footer {
  right: 0;
  bottom: 0;
  left: 0;
  padding: 6px;
  background-color: white;
  color: black;
  text-align: center;
  position: fixed;
  z-index:10
}
</style>