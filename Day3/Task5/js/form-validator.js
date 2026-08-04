class FormValidator {
    constructor(form, rules) {
        this.form = form;
        this.rules = rules;
        this.attachEvents()
    }

    attachEvents() {
        for (const fieldName in this.rules) {
            const field = this.form.elements[fieldName];

            field.addEventListener("blur", () => {
                this.validateField(fieldName);
            });
        }

        this.form.addEventListener("submit", (event) => {
            let valid = true;
            for(const fieldName in this.rules) {
                if(!this.validateField(fieldName)) {
                    valid = false;
                }
            }

            if(!valid) {
                event.preventDefault();
            }
        });
    }

    validateField(fieldName) {

        const field = this.form.elements[fieldName];
        const value = field.value.trim();
        const rules = this.rules[fieldName];

        let error = "";

        for (const rule of rules) {
            if(rule.type === "required") {
                if(value==="") {
                    error ="This field is required. Fill it in";
                    break;
                }
            }

            if(rule.type === "maxLength") {
                if (value.length > rule.value) {
                    error = `Maximum ${rule.value} characters.`;
                    break;
                }
            }

            if(rule.type === "pattern") {
                if (!rule.value.test(value)) {
                    error = "Invalid format";
                    break;
                }
            }

            if(rule.type === "email") {
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = "Invalid email";
                    break;
                }
            }

            if(rule.type === "match") {
                const other = this.form.elements[rule.value];

                if (value !== other.value) {
                    error = "Passwords do not match";
                    break;
                }
            }

            if(rule.type === "custom") {
                if (!rule.value(value)) {
                    error = rule.message;
                    break;
                }
            }

            if(!rule.value(value)) {
                error = rule.message;
                break;
            }
        }
        this.showResult(field, error);
        return error === "";
    }

    showResult(field, error) {
        const span = field.nextElementSibling;
        span.textContent = error;
        field.classList.remove("is-valid", "is-invalid");

        if (error === "") {
            field.classList.add("is-valid");
        }
        else {
            field.classList.add("is-invalid")
        }
    }

    
}