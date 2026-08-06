const form = document.getElementById("reg-form");
const validator = new FormValidator(form, {
    name: [
        {type: "required"},
        {type: "minLength", value: 3},
        {tpe: "maxLength", value: 10}
    ],

    email: [
        {type: "required"},
        {type: "email"}
    ],

    age : [
        {type: "required"},
        {type: "customAge", value: 18}
    ],

    password: [
        {type: "required"},
        {type: "pattern", value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/}
    ],

    confirmPassword: [
        {type: "required"},
        {type: "match", value: "password"},
        {type: "pattern", value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/}
    ]
});