// Kullanıcı bilgileri (gerçek bir uygulamada sunucu tarafında saklanmalıdır)
const users = [
    { username: "Türker Ataç", identificationNumber: "10000000000", password: "12345" },
    { username: "Emir Tunalı", identificationNumber: "10000000001", password: "12345" },
    // Diğer kullanıcılar...
];

const loginMenu = document.getElementById('loginMenu');
const loginButton = document.getElementById('openLogin');
const closeButton = document.getElementById('closeLogin');
const logoutButton = document.getElementById('logoutButton');
const loginOverlay = document.getElementById('loginOverlay');
const loginForm = document.getElementById('loginForm');
const pleaseLoginText = document.querySelector('.pleaseLoginText');

loginButton.addEventListener('click', function () {
    loginOverlay.style.display = 'flex';
});

closeButton.addEventListener('click', function () {
    loginOverlay.style.display = 'none';
});

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Basit bir kimlik doğrulama kontrolü (gerçek bir uygulamada sunucu tarafında yapılmalıdır)
    const enteredUsername = document.getElementById('nameSurname').value;
    const enteredIdentificationNumber = document.getElementById('identificationNumber').value;
    const enteredPassword = document.getElementById('password').value;

    // Kullanıcıları kontrol et
    const foundUser = users.find(user =>
        user.username === enteredUsername &&
        user.identificationNumber === enteredIdentificationNumber &&
        user.password === enteredPassword
    );

    if (foundUser) {
        // Giriş başarılı, menu ve overlay'ı güncelle
        loginOverlay.style.display = 'none';
        pleaseLoginText.innerHTML = foundUser.username + ' olarak giriş yaptınız.';
        loginButton.style.display = 'none';
        logoutButton.style.display = 'inline-block';
    } else {
        // Giriş başarısız, hata mesajı eklenebilir
        alert('Giriş başarısız. Kullanıcı adı, kimlik numarası veya şifre hatalı.');
    }
});

logoutButton.addEventListener('click', function () {
    // Çıkış işlemi, menu ve overlay'ı güncelle
    pleaseLoginText.innerHTML = 'Çıkış yapıldı. Sisteme erişebilmek için lütfen giriş yapın.';
    logoutButton.style.display = 'none';
    loginButton.style.display = 'inline-block';
});


