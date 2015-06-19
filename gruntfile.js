module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                sourceMap: true,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy HH:MM:ss") %> */\n'
            },
            js: {
                files: [{
                    // expand: true,
                    // cwd: 'src',
                    src: 'src/*.js',
                    // dest: 'build',
                    dest:'build/app.min.js'
                    // ext:'min.js'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);

}
