import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items:  [
        {name: 'Buy_groceries', done: true},
        {name: 'Clean_house', done: false},
        {name: 'Book_yoga_session', done: true},
        {name: 'Pay_tuition_fee', done: false}
      ],
        newItem: ''
    },
    methods: {
      saveNewItem: function (e) {
      e.preventDefault();
      this.items.push({
        name: this.newItem,
        done: false
      });
      this.newItem = '';
    },
    doItem: function (index) {
      this.items[index].done = true;
      }
    }
  });
});
