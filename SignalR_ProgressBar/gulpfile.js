/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var cp = require('child_process');

function executeCommand(command) {
    var cmd = cp.exec(command, { cwd: 'ClientApp' });

    cmd.stdout.on('data', data => console.log(data));
    cmd.stderr.on('data', data => console.error(data));
    cmd.on('close', code => console.log(`Child process exited with code ${code}`));

    return cmd;
}

gulp.task('Install-Packages', function () {
    return executeCommand('npm install');
});

gulp.task('Build', function () {
    return executeCommand('ng build');
});

gulp.task('Serve', function () {
    return executeCommand('ng serve --open');
});
gulp.task('Watch', function () {
    return executeCommand('ng build --watch');
});