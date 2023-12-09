$(document).ready(function() {
    const searchInput = $('#searchInput');
    const searchResults = $('#searchResults');
    let searchData = [];

    // Cargar datos desde el archivo XML
    $.ajax({
        type: "GET",
        url: "site-maped.xml",
        dataType: "xml",
        success: function(xml) {
            $(xml).find('pagina').each(function() {
                const title = $(this).find('titulo').text();
                const content = $(this).find('contenido').text();
                const url = $(this).attr('url');
                searchData.push({ title, content, url });
            });
        },
        error: function(xhr, status, error) {
            console.error('Error al cargar el archivo XML:', error);
        }
    });

    //Se filtra los datos del archivo XML con el string del buscador
    searchInput.on('input', function () {
        const query = searchInput.val().toLowerCase();
        const filteredData = searchData.filter(item =>
            item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query)
        );

        displayResults(filteredData);
    });

    /**
     * 
     * @param {*} results Lista de resultados
     * @returns Nada si no hay busqueda o una lista de los resultados filtrados
     */
    function displayResults(results) {
        if (searchInput.val().trim() === '') {
            // Si no hay nada escrito en el buscador, borrar todos los resultados
            searchResults.empty();
            return;
        }

        searchResults.empty();

        if (results.length === 0) {
            // Si no hay resultados, mostrar un mensaje
            const noResultsMessage = $('<li></li>');
            noResultsMessage.text('No se encontraron resultados');
            searchResults.append(noResultsMessage);
        } else {
            results.forEach(result => {
                const li = $('<li></li>');
                li.html(`<strong>${result.title}</strong><br>${result.content}`);
                
                // Añadir evento de clic al elemento li
                li.click(function() {
                    // Redirigir a la URL correspondiente (usando el atributo 'url' de la página)
                    window.location.href = result.url;
                });

                searchResults.append(li);
            });
        }
    }
});
