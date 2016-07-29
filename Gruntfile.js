module.exports = function(grunt) {
    "use strict";

    var pkg = grunt.file.readJSON('bower.json');

    grunt.initConfig({
        pkg: pkg,
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= pkg.version %> <%= pkg.license %>\n' +
                        '   <%= pkg.homepage %>\n' +
                        '   ' + pkg.authors.join('\n   ') + ' */\n'
            },
            build: {
                expand: true,
                cwd: 'dist',
                src: ['**/*.js', '!**/*.min.js'],
                ext: '.min.js',
                extDot: 'last',
                dest: 'dist'
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            all: ['dist/**/*.js', '!dist/**/*.min.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'uglify']);
};
