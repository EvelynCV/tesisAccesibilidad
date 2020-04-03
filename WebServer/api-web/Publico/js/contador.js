(function ($) {
    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            // establecer opciones para el elemento actual
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from:            $(this).data('from'),
                to:              $(this).data('to'),
                speed:           $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals:        $(this).data('decimals')
            }, options);

            // cuántas veces actualizar el valor y cuánto incrementar el valor en cada actualización
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // referencias y variables que cambiarán con cada actualización
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // si se encuentra un intervalo existente, borrarlo primero
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // inicializar el elemento con el valor inicial
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remueve el intervalo
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,               // el número en el que debe comenzar el elemento
        to: 0,                 // el número en el que debe terminar el elemento
        speed: 2500,           // cuánto tiempo debería tomar para contar entre los números objetivo
        refreshInterval: 100,  // con qué frecuencia se debe actualizar el elemento
        decimals: 0,           // el número de decimales para mostrar
        formatter: formatter,  // controlador para formatear el valor antes de renderizar
        onUpdate: null,        // método de devolución de llamada para cada vez que se actualiza el elemento
        onComplete: null       // método de devolución de llamada para cuando el elemento termina de actualizar
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));

jQuery(function ($) {
    // ejemplo de formato personalizado
    $('.count-number').data('countToOptions', {
        formatter: function (value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });

    // iniciar todos los temporizadores
    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
});