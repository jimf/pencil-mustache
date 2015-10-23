'use strict';

var escapeHtml = require('xml-escape'),
    mustaches = /(\{\{ *([a-zA-Z0-9$_]+) *\}\})|(\{\{\{ *([a-zA-Z0-9$_]+) *\}\}\})/g;

function prop(key, context) {
    var value = context.hasOwnProperty(key) ? context[key] : '';
    if (value === undefined || value === null) { return ''; }
    return String(value);
}

module.exports = function(template) {
    return function(context) {
        return template.replace(mustaches, function(matches, $1, $2, $3, $4) {
            var key = $2 || $4,
                escape = Boolean($2),
                value = prop(key, context);

            if (value && escape) { return escapeHtml(value); }

            return value;
        });
    };
};
