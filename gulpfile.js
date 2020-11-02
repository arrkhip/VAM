var gulp       	 = require('gulp'), 
		sass         = require('gulp-sass'), 
		browserSync  = require('browser-sync'), 
		concat       = require('gulp-concat'), 
		uglify       = require('gulp-uglifyjs'), 
		cssnano      = require('gulp-cssnano'), 
		rename       = require('gulp-rename'), 
		del          = require('del'), 
		imagemin     = require('gulp-imagemin'), 
		pngquant     = require('imagemin-pngquant'), 
		cache        = require('gulp-cache'), 
		autoprefixer = require('gulp-autoprefixer'),
		cssbeautify  = require('gulp-cssbeautify'),
		smartgrid  	 = require('smart-grid'),
		rigger  		 = require('gulp-rigger');


var settings = {
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '15px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px'
        }
        /* 
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

smartgrid('./src/sass/smartgrid', settings);

// Styles
gulp.task('styles', function() { 
	return gulp.src('src/sass/style.sass') 
		.pipe(sass()) 
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) 
		.pipe(cssbeautify({
      indent: '  '
    }))
		.pipe(gulp.dest('build/css')) 
		.pipe(browserSync.reload({stream: true})) 
});

gulp.task('styles:libs', function() {
	return gulp.src([
	'src/libs/normalize/normalize.css',
	'src/libs/fancybox/jquery.fancybox.min.css',
	'src/libs/select2/select2.min.css',
	'src/libs/swiper/swiper.min.css',
	'src/libs/animate/animate.css'
	]) 
		.pipe(concat('libs.min.css')) 
		.pipe(cssnano()) 
		.pipe(gulp.dest('build/css')); 
});


// Server
gulp.task('browser-sync', function() { 
	browserSync({ 
		server: { 
			baseDir: 'build' 
		},
		notify: false 
	});
});


// Scripts
gulp.task('scripts', function() {
	return gulp.src('src/js/common.js')
		.pipe(rigger())
		.pipe(gulp.dest('build/js')); 
});

gulp.task('scripts:libs', function() {
	return gulp.src([ 
		'src/libs/jquery/dist/jquery.min.js', 
		'src/libs/svgxuse/svgxuse.min.js',
		'src/libs/fancybox/jquery.fancybox.min.js',
		'src/libs/select2/select2.min.js',
		'src/libs/swiper/swiper.min.js',
		'src/libs/input-mask/jquery.inputmask.min.js',
		'src/libs/lazysizes/lazysizes.min.js',
		'src/libs/wow/wow.min.js'
	])
		.pipe(concat('libs.min.js')) 
		.pipe(uglify()) 
		.pipe(gulp.dest('build/js')); 
});


// HTML
gulp.task('html', function() {
	return gulp.src('src/*.html')
		.pipe(rigger())
		.pipe(gulp.dest('build'))
		.pipe(browserSync.reload({ stream: true }));
});


// Clean
gulp.task('clean', async function() {
	return del.sync('build'); 
});


// Images
gulp.task('img', function() {
	return gulp.src('src/img/**/*') 
	//	.pipe(cache(imagemin({ 
	//	
	//		interlaced: true,
	//		progressive: true,
	//		svgoPlugins: [{removeViewBox: false}],
	//		use: [pngquant()]
	//	}))/**/)
		.pipe(gulp.dest('build/img')); 
});


// Copy
gulp.task('copy', function() {
	return gulp.src('src/assets/**/*')
		.pipe(gulp.dest('build'));
});


//Clear
gulp.task('clear', function (callback) {
	return cache.clearAll();
});


// Watch
gulp.task('watch', function() {
	gulp.watch(['src/sass/**/*.sass', 'src/blocks/**/*.sass'], gulp.parallel('styles')); 
	gulp.watch('src/**/*.html', gulp.parallel('html')); 
	gulp.watch(['src/js/common.js', 'src/libs/**/*.js'], gulp.parallel('scripts')); 
	gulp.watch('src/img/**/*', gulp.parallel('img')); 
});
gulp.task('default', gulp.parallel('clean', 'html', 'copy', 'styles:libs', 'styles', 'scripts:libs', 'scripts', 'img', 'browser-sync', 'watch'));
