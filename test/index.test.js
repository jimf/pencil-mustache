'use strict';

var test = require('tape'),
    mustache = require('..');

test('{{ escaped strings }}', function(assert) {
    var cases = [
        {
            input: '{{foo}}',
            context: { foo: 'foo' },
            expected: 'foo'
        },
        {
            input: '{{   foo   }}',
            context: { foo: 'foo' },
            expected: 'foo'
        },
        {
            input: '{{_foo}}',
            context: { _foo: 'foo' },
            expected: 'foo'
        },
        {
            input: '{{foO}}',
            context: { foO: 'foo' },
            expected: 'foo'
        },
        {
            input: '{{foO}}',
            context: { foO: 'foo' },
            expected: 'foo'
        },
        {
            input: '{{$fo0}}',
            context: { $fo0: 'foo' },
            expected: 'foo'
        },
        {
            input: '{{foo}}',
            context: { foo: '&' },
            expected: '&amp;'
        },
        {
            input: '{{foo}}{{bar}}',
            context: { foo: 'foo', bar: 'bar' },
            expected: 'foobar'
        },
        {
            input: '{{toString}}',
            context: {},
            expected: ''
        },
        {
            input: '{{foo}}',
            context: { foo: 1 },
            expected: '1'
        },
        {
            input: '{{foo}}',
            context: { foo: undefined },
            expected: ''
        },
        {
            input: '{{foo}}',
            context: { foo: null },
            expected: ''
        },
        {
            input: '{{foo}}',
            context: { foo: false },
            expected: 'false'
        },
        {
            input: '{{foo}}',
            context: { foo: true },
            expected: 'true'
        }
    ];

    assert.plan(cases.length);

    cases.forEach(function(testcase) {
        var template = mustache(testcase.input);
        assert.equal(template(testcase.context), testcase.expected);
    });

    assert.end();
});

test('{{{ unescaped strings }}}', function(assert) {
    var cases = [
        {
            input: '{{{foo}}}',
            context: { foo: 'foo' },
            expected: 'foo'
        },
        {
            input: '{{{  foo  }}}',
            context: { foo: 'foo' },
            expected: 'foo'
        },
        {
            input: '{{{_foo}}}',
            context: { _foo: 'foo' },
            expected: 'foo'
        },
        {
            input: '{{{foO}}}',
            context: { foO: 'foo' },
            expected: 'foo'
        },
        {
            input: '{{{foO}}}',
            context: { foO: 'foo' },
            expected: 'foo'
        },
        {
            input: '{{{$fo0}}}',
            context: { $fo0: 'foo' },
            expected: 'foo'
        },
        {
            input: '{{{foo}}}',
            context: { foo: '&' },
            expected: '&'
        },
        {
            input: '{{{foo}}}{{{bar}}}',
            context: { foo: 'foo', bar: 'bar' },
            expected: 'foobar'
        },
        {
            input: '{{{toString}}}',
            context: {},
            expected: ''
        },
        {
            input: '{{{foo}}}',
            context: { foo: 1 },
            expected: '1'
        },
        {
            input: '{{{foo}}}',
            context: { foo: undefined },
            expected: ''
        },
        {
            input: '{{{foo}}}',
            context: { foo: null },
            expected: ''
        },
        {
            input: '{{{foo}}}',
            context: { foo: false },
            expected: 'false'
        },
        {
            input: '{{{foo}}}',
            context: { foo: true },
            expected: 'true'
        }
    ];

    assert.plan(cases.length);

    cases.forEach(function(testcase) {
        var template = mustache(testcase.input);
        assert.equal(template(testcase.context), testcase.expected);
    });

    assert.end();
});
