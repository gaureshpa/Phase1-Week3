// Task 5 (55 min) - FormValidator Class
// 377. Build FormValidator(form, rules) - rules maps field names to arrays of rule objects
// 378. Support: required, minLength(n), maxLength(n), pattern(regex), email, match(otherField),
// custom(fn)
// 379. Validate on blur (individual field) and on submit (all fields)
// 380. Show inline errors in span.field-error. Add/remove is-invalid and is-valid CSS classes.
// 381. Apply to the registration form from Week 1

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

            if(rule.type === "minLength") {
                if (value.length < rule.value) {
                    error = `Minimum ${rule.value} characters needed.`;
                    break;
                }
            }

            if(rule.type === "maxLength") {
                if (value.length > rule.value) {
                    error = `Maximum ${rule.value} characters allowed.`;
                    break;
                }
            }

            if(rule.type === "pattern") {
                if (!rule.value.test(value)) {
                    error = "Invalid format. Password must contain atleast 8 characters, atlease one uppercase letter, one lowercase letter, one digit and one special character";
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

            if(rule.type === "customAge") {
                if (value < rule.value) {
                    error = "Must be atleast 18";
                    break;
                }
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