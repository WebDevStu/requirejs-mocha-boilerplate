module.exports = function (grunt) {

    grunt.initConfig({

        "pkg": grunt.file.readJSON('package.json'),

        // bower install...
        "bower": {
            install: {
                options: {
                    install:        true,
                    targetDir:      './bower_components'
                }
            }
        },


        // mocha tests
        "mocha_phantomjs": {
            all: ["./test/index.html"]
        }
    });

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // task runner
    grunt.registerTask('default', ['bower', 'mocha_phantomjs']);
};