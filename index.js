var filtroTeclas = function(event) {
    return ((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 45 || event.charCode == 46))
  }

  document.getElementById('salvar').addEventListener('click', function() {
    
    document.getElementById('no').value = '';
    document.getElementById('ne').value = '';
    document.getElementById('assunto').value = '';
});