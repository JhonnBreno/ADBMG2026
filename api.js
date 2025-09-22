    /*formulário-footer----------------------------------------------*/
    
    function sendMail(event) {
        event.preventDefault();
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');
    
        if (!emailField.value || !messageField.value) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
    
        var params = {
            email: emailField.value,
            message: messageField.value
        };
    
        const serviceID = "service_b8so43t";
        const templateID = "template_21bur5n";
    
        emailjs.send(serviceID, templateID, params)
            .then(
                res => {
                    emailField.value = "";
                    messageField.value = "";
                    console.log(res);
                    alert('Sua mensagem foi enviada com sucesso!');
                }
            )
            .catch(err => {
                console.error("Erro ao enviar mensagem:", err);
                alert("Ocorreu um erro. Tente novamente.");
            });
    }
    