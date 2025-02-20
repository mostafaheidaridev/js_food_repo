document.querySelector('#frmContact').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target.txtName.value;
    const email = e.target.txtEmail.value;
    const comments = e.target.txtComments.value;

    const model = document.querySelector('#contact_message');

    model.querySelector('#name').innerText = name;
    model.querySelector('#email').innerText = email;
    model.querySelector('#comments').innerText = comments;

    model.showModal();

    model.focus();

    model.querySelector('.close').addEventListener('click', () => {
        model.close();
    });
    model.addEventListener('click', () => {
        window.location.replace('index.html');
    }); // Added a closing parenthesis here

    // window.location.replace('index.html');
});