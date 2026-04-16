const text = ["ECE Student", "Web Developer", "IoT Developer"];
let i = 0, j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        document.querySelector(".typing").textContent = currentText;

        if (j == text[i].length) isDeleting = true;
        if (j == 0 && isDeleting) {
            isDeleting = false;
            i++;
        }
    } else {
        i = 0;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();