const gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    removeLogging = require("gulp-remove-logging"),
    zip = require('gulp-zip');



const { name: projectName } = require('./package.json');

const incSrc = `./inc/loader.php`,
  destSrc = `./build/${projectName}/inc/`;


const buildModulePath = `./build/${projectName}`;

const minifyAssets = () => {
  return gulp
    .src([
      incSrc,
      './inc/loader.php'
    ])
    .pipe(removeLogging())
    .pipe(uglify())
    .pipe(
      gulp.dest(function(file) {
        if (file.basename === "loader.php")
          return `${buildModulePath}/inc/`;
        return destSrc;
      })
    );
};


const pluginZip = () => {
    return gulp
        .src([`src/*.php`])
        .pipe(zip(projectName + '.zip'))
        .pipe(gulp.dest('build'));
};
gulp.task('zip', pluginZip);
gulp.task("inc", minifyAssets);


const cleanjsx = () => { 
    return gulp
        .src(['**',
            '!node_modules/**',
            '!gulpfile.js',
            '!*.json',
            '!*.lock',
            '!*.log',
            '!*.zip',
            '!*.vscode/**',
            '!*.editorconfig',
            '!*.gitignore',
            '!*.eslintrc',
        ])
        .pipe(gulp.dest(`./build/${projectName}`));
}
gulp.task('cleanjsx', cleanjsx);