function mostrar(id) {
    if (id == "tarjeta") {
        $("#tarjeta").show();
        $("#flyer").hide();
    }

    if (id == "flyer") {
        $("#tarjeta").hide();
        $("#flyer").show();
    }
}