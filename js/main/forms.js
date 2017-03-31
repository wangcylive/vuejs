/**
 * Created by wangchunyang on 2017/3/13.
 */
var app1 = new Vue({
    el: "#app1",
    data: {
        message1: "",
        message2: "",
        message3: "",
        message4: "",
        checkbox1: false,
        checkbox2: [],
        picked: "One",
        selected1: "A",
        selected2: [],
        selected3: "A",
        options: [
            {text: "one", value: "A"},
            {text: "two", value: "B"},
            {text: "three", value: "C"}
        ],
        radio1: false,
        a: "你好",
        b: "不好",
        toggle: "你好",
        number: ""
    },
    methods: {
        messageInput: function (event) {
            this.message = event.target.value;
        }
    }
});