<script setup lang="ts"></script>

<template>
  <div class="custom-checkbox">
    <input id="status" type="checkbox" name="status" />
    <label for="status">
      <div class="status-switch" data-unchecked="Разово" data-checked="Ежемесячно"></div>
    </label>
  </div>
</template>

<style scoped lang="scss">
  .custom-checkbox {
    height: 40px;
  }
  .custom-checkbox input#status {
    display: none;
  }
  .custom-checkbox input#status + label {
    height: 100%;
    width: 100%;
  }
  .custom-checkbox input#status + label > .status-switch {
    cursor: pointer;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: $white-color;
    color: $blue-dark-color;
    transition: all 0.5s ease;
    border-radius: 15px;
  }
  .custom-checkbox input#status + label > .status-switch:before,
  .custom-checkbox input#status + label > .status-switch:after {
    border-radius: 15px;
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: center;
    transition: all 0.3s ease;
  }
  .custom-checkbox input#status + label > .status-switch:before {
    background-color: $blue-color;
    color: $white-color;
    z-index: 10;
    content: attr(data-unchecked);
  }
  .custom-checkbox input#status + label > .status-switch:after {
    right: 0;
    content: attr(data-checked);
  }
  .custom-checkbox input#status:checked + label > .status-switch {
    background-color: $white-color;
  }
  .custom-checkbox input#status:checked + label > .status-switch:after {
    left: 0;
    margin-left: -1px;

    content: attr(data-unchecked);
  }
  .custom-checkbox input#status:checked + label > .status-switch:before {
    color: $white-color;
    left: 50%;
    content: attr(data-checked);
  }
</style>
