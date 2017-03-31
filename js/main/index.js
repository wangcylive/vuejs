/**
 * Created by wangchunyang on 2017/3/10.
 */
var data1 = {
    message: "Hello Vue!",
    array: []
};

var app1 = new Vue({
    data: data1,
    beforeCreate: function () {
        data1.message = data1.message.toUpperCase();

        console.log("beforeCreate");
    },
    created: function () {
        data1.message = data1.message.toLowerCase();

        console.log("created");
    },
    beforeMount: function () {
        console.log("beforeMount");
    },
    mounted: function () {
        console.log("mounted");
    },
    beforeUpdate: function () {
        console.log("beforeUpdate");
    },
    updated: function () {
        console.log("updated");
    },
    beforeDestroy: function () {
        console.log("beforeDestroy");
    },
    destroyed: function () {
        console.log("destroy");
    }
});

app1.$mount("#app1");

var unwatch1 = app1.$watch("message", function (newVal, oldVal) {
    console.log(newVal, oldVal);

    unwatch1();
});

var unwatch2 = app1.$watch("array", function (newVal, oldVal) {
    console.log(newVal, oldVal);
});

var app2 = new Vue({
    el: "#app2",
    data: {
        message: 'You loaded this page on ' + new Date()
    }
});

var app3 = new Vue({
    el: "#app3",
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: "#app4",
    data: {
        todos: [
            {text: "Learn Javascript."},
            {text: "Learn Vue"},
            {text: "Learn for in"}
        ]
    },
    beforeUpdate: function () {
        console.log("beforeUpdate");
    },
    updated: function () {
        console.log("updated");
    }
});

var app5 = new Vue({
    el: "#app5",
    data: {
        message: "Hello Vue.js!"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join("");
        }
    }
});

var app6 = new Vue({
    el: "#app6",
    data: {
        message: "Hello Vue.js"
    }
});

app6.$watch("message", function (newVal, oldVal) {
    console.log(newVal, oldVal);
});

Vue.component("todo-item", {
    props: ['todo'],
    template: "<li>{{todo.text}}</li>"
});

var app7 = new Vue({
    el: "#app7",
    data: {
        groceryList: [
            {text: "Vegetables"},
            {text: "Cheese"},
            {text: "Whatever else humans are supposed to eat."}
        ]
    }
});

var app8 = new Vue({
    el: "#app8",
    data: {
        rawHtml: "<p>This is P.</p>"
    }
});

var app9 = new Vue({
    el: "#app9",
    data: {
        className: "form-group",
        btnDisabled: true,
        title: "this is button"
    }
});

var app10 = new Vue({
    el: "#app10",
    data: {
        id: "app10",
        number: 99.1,
        ok: !!0,
        message: "Wangchunyang"
    }
});

var app11 = new Vue({
    el: "#app11",
    data: {

    },
    methods: {
        onClick: function () {
            alert(Date.now());
        }
    }
});