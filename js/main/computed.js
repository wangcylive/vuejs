/**
 * Created by wangchunyang on 2017/3/11.
 */
var app1 = new Vue({
    el: "#app1",
    data: {
        message: "Hello Vue.js"
    },
    methods: {
        methodReverseMessage: function () {
            return this.message.split("").reverse().join("");
        }
    },
    computed: {
        computedReverseMessage: function () {
            return this.message.split("").reverse().join("");
        }
    }
});

var app2 = new Vue({
    el: "#app2",
    data: {
        message: "Hello vue.js"
    },
    methods: {
        methodDate: function () {
            return this.message + " " + Date.now();
        }
    },
    computed: {
        computedDate: function () {
            return this.message + " " + Date.now();
        }
    }
});

var app3 = new Vue({
    el: "#app3",
    data: {
        firstName: "Foo",
        lastName: "Bar",
        watchFullName: "Foo Bar"
    },
    watch: {
        firstName: function(val) {
            this.watchFullName = val + " " + this.lastName
        },
        lastName: function (val) {
            this.watchFullName = this.firstName + " " + val;
        }
    },
    computed: {
        computedFullName: {
            get: function () {
                return this.firstName + " " + this.lastName
            },
            set: function (newName) {
                var names = newName.split(" ");
                this.firstName = names.shift();
                this.lastName = names.pop();
            }
        }
    }
});

var app4 = new Vue({
    el: "#app4",
    data: {
        question: "",
        answer: "I cannot give you an answer until you ask a question!"
    },
    watch: {
        question: function (newQuestion) {
            this.answer = "Waiting for you to top typing...";

            this.getAnswer();
        }
    },
    methods: {
        getAnswer: _.debounce(function () {
            var vm = this;

            if(this.question.indexOf("?") === -1) {
                vm.answer = 'Questions usually contain a question mark. ;-)';
                return;
            }

            vm.answer = "Thinking...";

            axios.get("https://yesno.wtf/api")
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer);
                })
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API. ' + error;
                });
        }, 500)
    }
});