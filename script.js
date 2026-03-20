function getFormvalue() {
    event.preventDefault();

    const fname = document.getElementsByName("fname")[0].value.trim();
    const lname = document.getElementsByName("lname")[0].value.trim();

    const fullName = (fname + " " + lname).trim();

    alert(fullName);
}