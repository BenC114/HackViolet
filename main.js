window.addEventListener('load', () => {
    // Assign the form to const form
    const form = document.querySelector("#new-assignment-form");
    // Assign the input to const input
    const input = document.querySelector("#new-assignment-input");
    // Assign stuff from 'Your Assignments' to const list_elements
    const list_elements = document.querySelector("#assignments");

    // Mess with our form now
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop refresh of page

        const task = input.value;

        if (!task) {
            alert("Please fill out the task");
        }
        else {
            console.log("Success");
        }
    })
})