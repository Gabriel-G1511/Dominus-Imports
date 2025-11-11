module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compila LESS
        less: {
            development: {
                files: {
                    'dist/css/main.css': 'src/main.less'
                }
            }
        },

        // Minifica CSS
        cssmin: {
            target: {
                files: {
                    'dist/css/main.min.css': ['dist/css/main.css']
                }
            }
        },

        // Monitora alterações
        watch: {
            styles: {
                files: ['src/**/*.less'], // monitora todos os LESS
                tasks: ['less', 'cssmin'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'cssmin', 'watch']);
};
