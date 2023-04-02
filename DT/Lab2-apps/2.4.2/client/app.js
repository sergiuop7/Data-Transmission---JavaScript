var app = new Vue({
    el: '#app',
    data: {
        users: [],
        usersService: null
    },
    created: function () {
        this.usersService = users();
        this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {
        addUser: function (name, city) {
            console.log(name, city);
            this.usersService.add({ name, city }).then(response => (this.users = response.data));
            location.reload();
        },
        deleteUser: function (index) {
            this.usersService.remove(index).then(response => (this.users = response.data));
            location.reload();
        },
        modifyUser: function (index, name, city) {
            this.usersService.modify(index, { name, city }).then(response => (this.users = response.data));
            location.reload();
        }
    }
})