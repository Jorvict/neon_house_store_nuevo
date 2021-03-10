$('#restaurante').submit(function(e){
    e.preventDefault();
    let nomcategory = $("#nomcategory").val();
    let empresa = $("#empresa").val();
    let email = $("#email").val();
    let tel = $("#tel").val();
    let data ={
        option: "calatogrequest",
        nomcategory:nomcategory,
        empresa: empresa,
        email: email,
        tel: tel
    }
    $.ajax({
        type:"POST",
        url: "../controladores/catalogRequest.php",
        data: data,
        success: function(response){
            if(response == 1){
                swal({
                    title: "Formulario enviado exitosamente!",
                    text: "le responderemos lo mas pronto posible.",
                    icon: "success"
                }).then(function() {
                    //$("#restaurante").trigger('reset');
                    //$("#form_1").hide();
                    window.location.href = "categoria.html";
                });
                               
            }
            else{
                swal("Nooo!", "Error al enviar el formulario.", "error");

            }
            
        }

    })

})