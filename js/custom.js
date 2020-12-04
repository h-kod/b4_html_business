// Brochures Object
var brochuresObj = [
    {
        'lang': 'en',
        'type': 'pdf',
        'title': 'Our New Models - English',
        'description': 'PDF file 12.7 MB, publish date 10.12.2019 Friday',
        'url': '#'
    },
    {
        'lang': 'pt',
        'type': 'pdf',
        'title': 'O Nosso Novo Modelos - Portuguese',
        'description': 'PDF file 12.7 MB, publish date 10.12.2019 Friday',
        'url': '#'
    },
    {
        'lang': 'tr',
        'type': 'pdf',
        'title': 'Yeni Modellerimiz - Turkish',
        'description': 'PDF file 12.7 MB, publish date 10.12.2019 Friday',
        'url': '#'
    },
    {
        'lang': 'tr',
        'type': 'pdf',
        'title': 'Performans Serisi - Turkish',
        'description': 'PDF file 12.7 MB, publish date 10.12.2019 Friday',
        'url': '#'
    },
];


// All brochure List
brochEach("all");

function brochEach(value) {
    // Brochures Items Clear
    $(".brochures-item").remove();

    // Brochures Object Each
    $(brochuresObj).each(function (index) {
        let type = brochuresObj[index]["type"];
        let title = brochuresObj[index]["title"];
        let description = brochuresObj[index]["description"];
        let url = brochuresObj[index]["url"];
        let lang = brochuresObj[index]["lang"];

        // Brochures Language Filter or All
        if (lang == value || value == "all") {
            let brochures_item = "<div class=\"brochures-item\">";
            brochures_item += "<i class=\"file-icon " + type + " \"></i>";
            brochures_item += "<div class=\"brochures-caption\">";
            brochures_item += "<a href=" + url + " class=\"brochures-title\">" + title + "</a>";
            brochures_item += "<p class=\"brochures-description\">" + description + "</p>";
            brochures_item += "</div></div>";

            $('#brochures').append(brochures_item);
        }
    });

};


