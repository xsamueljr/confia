import { SUBMIT_URL } from "src/constants";

const form = document.getElementById("contact-form") as HTMLFormElement;

const nameField = document.getElementById("name") as HTMLInputElement;
const emailField = document.getElementById("email") as HTMLInputElement;
const messageField = document.getElementById("message") as HTMLInputElement;

// Form operation helpers
function clearForm(): void {
    for (const field of [nameField, emailField, messageField]) {
        field.value = "";
    }
}

function getFormData(): { name: string; email: string; message: string } {
    return {
        name: nameField.value,
        email: emailField.value,
        message: messageField.value,
    };
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    // Logic for form submission goes here
    const response = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(getFormData()),
    });

    if (response.status !== 201) {
        let body;
        try {
            body = await response.json();
        } catch (error) {
            console.error(error);
            return;
        }
        const message =
            body.error ?? "Ha habido un problema al enviar tu mensaje";
        alert(message);
        return;
    }

    alert("Gracias por contactarnos. Te responderemos pronto.");
    clearForm();
});