/**
 * Created by wangchunyang on 2017/3/12.
 */
var app1 = new Vue({
    el: "#app1",
    data: {
        counter: 0
    },
    methods: {
        greet: function (event) {
            console.log(this.counter, this.$el.id, event.target.tagName);
        },
        say: function (msg) {
            console.log(arguments);
            alert(msg);
        },
        submit: function (event) {
            console.log(event.type);
        },
        submitClick: function (event) {
            console.log(event.type);
        },
        linkClick: function (event) {
            console.log(event.target.href);
        },
        divClick: function (event) {
            console.log(event.target.tagName);
        },
        pClick: function (event) {
            console.log(event.target.textContent);
        },
        inputDelete: function (event) {
            console.log(event);
        }
    }
});