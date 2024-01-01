
        /*<![CDATA[*/
        function login() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            var data = {
                personelNameSurname: username,
                personelPassword: password,

            };

            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                credentials: 'same-origin'
            })
            .then(response => response.text())
            .then(result => {
                if (result === 'success') {
                    window.location.href = '/index';
                } else {
                    document.getElementById("error").innerText = "Invalid credentials";
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
        /*]]>*/
