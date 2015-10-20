'use strict';

var escapeHtml = require('xml-escape'),
    mustaches = /(\{\{ *([a-zA-Z0-9$_]+) *\}\})|(\{\{\{ *([a-zA-Z0-9$_]+) *\}\}\})/g;

module.exports = function(template) {
    return function(context) {
        return template.replace(mustaches, function(matches, $1, $2, $3, $4) {
            var key = $2 || $4,
                escape = Boolean($2),
                value = context.hasOwnProperty(key) ? String(context[key]) : '';

            if (value && escape) { return escapeHtml(value); }

            return value;
        });
    };
};
