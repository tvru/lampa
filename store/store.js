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
            var field = "<div class=\"settings-folder selector\" data-component=\"pirate_store\" data-static=\"true\">\n\t\t\t<div class=\"settings-folder__icon\">\n\t\t\t\t<svg width=\"512\" height=\"512\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"Complete\"><g id=\"minus\"><line fill=\"none\" stroke=\"#000000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"/></g></g></svg>\n\t\t\t</div>\n\t\t\t<div class=\"settings-folder__name\">"+Lampa.Lang.translate('pirate_store')+"</div>\n\t\t</div>";
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
