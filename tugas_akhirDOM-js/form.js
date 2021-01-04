function buat_login() {
    var tombolDaftar = document.getElementById("X");
    tombolDaftar.parentElement.removeChild(tombolDaftar);
    var divPertama = document.getElementsByTagName("div")[0];
    var p = document.createElement("p");
    p.innerHTML = "silahkan mendaftar";
    p.className = "tulisan_login";
    divPertama.appendChild(p);
    var formDaftar = document.createElement("form");
    divPertama.appendChild(formDaftar);
    // Nama Pengguna
    var namaPengguna = document.createElement("label");
    namaPengguna.innerHTML = "Nama User";
    formDaftar.appendChild(namaPengguna);
    var inputNamaPengguna = document.createElement("input");
    inputNamaPengguna.name = "namaPengguna"
    inputNamaPengguna.type = "text";
    inputNamaPengguna.className = "form_login";
    inputNamaPengguna.placeholder = "Nama User..";
    formDaftar.appendChild(inputNamaPengguna);
    // Nomor Handphone
    var nomoHp = document.createElement("label");
    nomoHp.innerHTML = "Nomor Handphone";
    formDaftar.appendChild(nomoHp);
    var inputNoHp = document.createElement("input");
    inputNoHp.name = "handphone"
    inputNoHp.type = "text";
    inputNoHp.className = "form_login";
    inputNoHp.placeholder = "Nomor Handphone.";
    formDaftar.appendChild(inputNoHp);
    // username
    var username = document.createElement("label");
    username.innerHTML = "Username";
    formDaftar.appendChild(username);
    var inputUsername = document.createElement("input");
    inputUsername.name = "username"
    inputUsername.type = "text";
    inputUsername.className = "form_login";
    inputUsername.placeholder = "Usernama atau Email..";
    formDaftar.appendChild(inputUsername);
    // password
    var password = document.createElement("label");
    password.innerHTML = "Password";
    formDaftar.appendChild(password);
    var inputPassword = document.createElement("input");
    inputPassword.name = "password"
    inputPassword.type = "password";
    inputPassword.className = "form_login";
    inputPassword.placeholder = "Password..";
    formDaftar.appendChild(inputPassword);
    // tombol submit login
    var tombolSubmitLogin = document.createElement("input");
    tombolSubmitLogin.name = "submitLogin"
    tombolSubmitLogin.type = "submit";
    tombolSubmitLogin.className = "tombol_login";
    tombolSubmitLogin.inner = "DAFTAR SEKARANG";
    formDaftar.appendChild(tombolSubmitLogin);



}