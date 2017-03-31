/**
 * Created by wangchunyang on 2017/3/11.
 */
var app1 = new Vue({
    el: "#app1",
    data: {
        isActive: "active"
    }
});

var app2 = new Vue({
    el: "#app2",
    data: {
        error: false,
        isActive: true
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                "text-danger": !this.error
            }
        }
    }
});

var arrayName = ["wang", "chun", "yang", "chen", "di"];

Vue.component("my-component", {
    template: "<p class='foo bar' @click='onClick'>Hi + {{message}}</p>",
    data: function () {
        return {
            message: "Wangcy"
        }
    },
    methods: {
        onClick: function () {
            this.message = arrayName[parseInt(Math.random() * 5)];
        }
    }
});

var app3 = new Vue({
    el: "#app3"
});

var app4 = new Vue({
    el: "#app4",
    components: {
        child: {
            props: ["message"],
            template: "<span>{{message}}</span>"
        }
    }
});

var app5 = new Vue({
    el: "#app5",
    data: {
        parentMsg: "Message from parents"
    },
    components: {
        childInput: {
            props: ["myMessage"],
            template: "<p>{{myMessage}}</p>"
        }
    }
});

var app6 = new Vue({
    el: "#app6",
    data: {
        styleObject: {
            fontSize: "16px",
            color: "#ff0000"
        }
    }
})
