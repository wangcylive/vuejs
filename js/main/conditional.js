/**
 * Created by wangchunyang on 2017/3/11.
 */
var app1 = new Vue({
    el: "#app1",
    data: {
        ok: true,
        type: "B",
        loginType: "username"
    },
    methods: {
        onChange: function () {
            console.log(this.loginType);
            this.loginType = "username" === this.loginType ? "email" : "username"
        }
    }
});

axios.get("../json/users.json").then(function (response) {
    var result = response.data;
    
    var arrayUsers = result.data;

    var app2 = new Vue({
        el: "#app2",
        data: {
            items: _.sortBy(arrayUsers, function (item) {
                return -item.age
            }),
            object: {
                firstName: "chunyang",
                lastName: "wang",
                age: "27"
            },
            maxUserName: _.maxBy(arrayUsers, "age").name,
            minUserName: _.minBy(arrayUsers, "age").name
        }
    });
});

var app3 = new Vue({
    el: "#app3",
    data: {
        newTodoText: "",
        errorMsg: "",
        todos: [
            "Do the dishes",
            "Take out the trash",
            "Mow the lawn"
        ]
    },
    methods: {
        addNewTodo: function () {
            if(!_.trim(this.newTodoText)) {
                this.errorMsg = "Please enter chars";

                return;
            }
            this.todos.push(this.newTodoText);
            this.newTodoText = "";
            this.errorMsg = "";
        }
    },
    components: {
        "todo-item": {
            props: ["title"],
            template: "<li>{{title}} <button @click='$emit(\"remove\")'>X</button></li>"
        }
    }
});

var app4 = new Vue({
    el: "#app4",
    data: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
});