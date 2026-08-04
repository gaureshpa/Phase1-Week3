const form = document.getElementById("reg-form");
const validator = new FormValidator(form, {
    name: [
        {type: "required"},
        {type: "minLength", value: 3}
    ],

    email: [
        {type: "required"},
        {type: "email"}
    ],

    password: [
        {type: "required"},
        {type: "minLength", value: 6}
    ],

    confirmPassword: [
        {type: "required"},
        {type: "match", value: "password"}
    ]
});