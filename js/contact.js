
document.querySelector('#frmContact').addEventListener('submit', (e) => {

    e.preventDefault();
    
    const name = e.target.txtName.value;
    const email = e.target.txtEmail.value;
    const comments = e.target.txtComments.value;

    const submittedInfo = `thank you for your message and we will contact you letter

    Registered Information
    - name ${name}
    - email ${email}
    - comments${comments}
    `;

    alert(submittedInfo);

    window.location.replace('index.html')
});