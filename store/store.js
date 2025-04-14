(function() {
    'use strict';
	Lampa.Lang.add({
        pirate_store: {
            ru: "Красная линия",
            en: "Red Line",
            uk: "Червона лінія",
            be: "Чырвоная лінія",
            zh: "红线",
            pt: "Linha vermelha",
            bg: "Червена линия",
			he: "תוספים פיראטיים"
        }
    });
    function addStore() {
        if (Lampa.Settings.main && !Lampa.Settings.main().render().find('[data-component="pirate_store"]').length) {
            var field = "<div class=\"settings-folder selector\" data-component=\"pirate_store\" data-static=\"true\">\n\t\t\t<div class=\"settings-folder__icon\">\n\t\t\t\t<svg width=\"490.00000000000006\" height=\"490.00000000000006\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" version=\"1.1\"><path id=\"svg_1\" fill=\"#ff0000\" d=\"m31.25029,229.68749l427.49942,0l0,30.625l-427.49942,0l0,-30.625z\"/><path id=\"svg_5\" d=\"m-62.9171,180.83232\" opacity=\"NaN\" stroke=\"#ff0000\" fill=\"white\"/></svg>\n\t\t\t</div>\n\t\t\t<div class=\"settings-folder__name\">"+Lampa.Lang.translate('pirate_store')+"</div>\n\t\t</div>";
            Lampa.Settings.main().render().find('[data-component="more"]').after(field);
            Lampa.Settings.main().update();
        }
    }
    Lampa.Settings.listener.follow('open', function(e) {
        if (e.name == 'main') {
            e.body.find('[data-component="pirate_store"]').on('hover:enter', function() {
                Lampa.Extensions.show({
                    store: 'https://raw.githubusercontent.com/tvru/lampa/refs/heads/main/store/extensions.json',
                    with_installed: true
                });
            });
        }
    });
    if (window.appready) addStore();
    else {
        Lampa.Listener.follow('app', function(e) {
            if (e.type == 'ready') addStore();
        });
    }

})();
