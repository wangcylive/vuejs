/**
 * Created by wangchunyang on 2017/3/14.
 */
var app1 = new Vue({
    el: "#app1",
    components: {
        "child": {
            props: ["myMessage"],
            template: "<span>{{myMessage}}</span>"
        }
    }
});

var app2 = new Vue({
    el: "#app2",
    data: {
        parentMsg: "Message from parent"
    },
    components: {
        child: {
            props: ["myMessage"],
            template: "<span>{{myMessage}}</span>"
        }
    }
});

var components1 = Vue.component("my-components", {
    props: ["message"],
    template: "<span>{{message}}</span>"
});

var app3 = new Vue({
    el: "#app3",
    components: {
        comp: {
            props: ["someProp"],
            template: "<span>{{someProp}}</span>"
        }
    },
    methods: {
        click: function () {
            var someProp = this.$children[0].$props.someProp;

            console.log(someProp, typeof someProp);
        }
    }
});

var app4 = new Vue({
    el: "#app4",
    data: {
        message: "app4"
    }
});

var app5 = new Vue({
    el: "#app5",
    components: {
        "my-components1": {
            props: {
                message: {
                    type: String,
                    default: "你好"
                },
                time: Object
            },
            template: "<p>{{message}} {{time.name}}</p>"
        }
    }
});

Vue.component("button-counter", {
    template: "<button @click='increment'>{{counter}}</button>",
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function () {
            this.counter++;

            this.$emit('increment');
        }
    }
});

new Vue({
    el: "#app6",
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function () {
            this.total++;
        }
    }
});

Vue.component("currency-input", {
    template: "<p>$<input ref='input' type='text' v-bind:value='value' v-on:input='updateValue($event.target.value)'></p>",
    props: ["value"],
    methods: {
        updateValue: function (value) {
            var formatValue = Number(value.trim());

            if(isNaN(formatValue)) {
                this.$refs.input.value = parseFloat(value) || 0;

                this.$emit("input", formatValue);
            }
        }
    }
});

new Vue({
    el: "#app7",
    data: {
        price: 0
    }
});

var app8 = new Vue({
    el: "#app8",
    data: {
        price: 0,
        shopping: 0,
        handing: 0,
        discount: 0
    },
    computed: {
        total: function() {
            return (this.price * 100 + this.shopping * 100 + this.handing * 100 + this.discount * 100) / 100
        }
    },
    components: {
        "currency-input": {
            template: "<div><label v-if='label'>{{label}}</label><input ref='input' type='number' v-bind:value='value' " +
            "@input='updateValue($event.target.value)' @focus='selectAll' @blur='formatValue'></div>",
            props: {
                label: {
                    type: String,
                    default: ""
                },
                value: {
                    type: Number,
                    default: 0
                }
            },
            mounted: function () {
                this.formatValue();
            },
            methods: {
                updateValue: function (value) {
                    var floatValue = (parseInt(parseFloat(value) * 100) / 100 || 0);

                    this.$refs.input.value = floatValue;

                    this.$emit("input", floatValue);
                },
                selectAll: function () {
                    event.target.select();
                },
                formatValue: function () {
                    this.$refs.input.value = parseInt(parseFloat(this.value) * 100) / 100 || 0;
                }
            }
        }
    }
});

app8.$on("showMsg", function (string) {
    console.log(string);
});

app8.$emit("showMsg", "你好");