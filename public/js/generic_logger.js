
var Logger = function() {

    return {
        
        genericLog: function(message, type) {
            if (typeof(message) === 'object') {
                message = JSON.stringify(message);
            }
            /* Logs in console window */
            console.log(message);

            if (typeof(type) === 'undefined') {
                type = 'default';
            }
            /* If html container is available, logs there alos */
            // if ($('#log_container').length == 0) {

            //     return;
            // }

            // logContainer = $('#log_container');
            // logElement = $('<div>', {class: 'log_message ' + type + '_log'});
            // logElement.text(message);
            // logContainer.prepend(logElement);
        },

        pusherLog: function(message) {

            this.genericLog(message, 'pusher');
        },

        log: function(message) {

            this.genericLog(message);
        }
    };
};