<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    display: inline-flex;
    font-family: 'Open sans', sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    height: 52px;
    width: 100%;
    padding: 0 10px;
  }

  label {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 700;
  }

  input,
  select,
  textarea {
    box-sizing: border-box;
    border: solid 1px rgba(0, 0, 0, 0.4);
  }
</style>
