
"use strict";



module.exports = function(grunt){
	
	require('time-grunt')(grunt);
	
	require('load-grunt-tasks')(grunt); // 会自动寻找 package中 声明的grunt 全部加载进来
	
	let config = {
		app: 'app',
		dist: 'dist'
	}
	
	// 配置文件
	grunt.initConfig({
			
			// 压缩
			uglify: {
	      options: {
	        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	      },
	      build: {
	        src: 'app/<%= pkg.name %>.js',
	        dest: 'build/<%= pkg.name %>.min.js'
	      }
	    }
			
			jshint: {
	      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
	      options: {
	        globals: {
	          jQuery: true
	        }
	      }
	    }
			// 任务   编译 Less
	    less: {
        build: {
          expand: true, // 动态编译
          cwd: 'less/',   // 所有的'src'里指定文件都是相对于这个属性指定的路径
          src: '['*.less']', // 相对与cwd路径下需要匹配的文件，这个地方是匹配所有的less文件
          dist: 'css/',
          ext: '.css'
        }
	    },
	    
	    sass: {
        build: {
          expand: true, // 动态编译
          cwd: 'sass/',   // 所有的'src'里指定文件都是相对于这个属性指定的路径
          src: '['*.scss']', // 相对与cwd路径下需要匹配的文件，这个地方是匹配所有的less文件
          dist: 'sass/',
          ext: '.css'
        }
	    },
	    
	    // 合并文件
	    concat: {
			  options: {
			    // 定义一个用于插入合并输出文件之间的字符
			    separator: ';'
			  },
			  dist: {
			    // 将要被合并的文件
			    src: ['src/**/*.js'],
			    // 合并后的JS文件的存放位置
//			    dest: 'dist/<%= pkg.name %>.js'
					dest: 'dist/libs.js'
			  }
			}

	    // 检测
	    watch: {
        files: ['less/**/*.less'], // 监听less文件夹下，所有less文件，以及所有目录下的less文件
        tasks: ['default'] // 当上面被监听的文件发生变化的时候会执行这个任务
	    }
	});
	
	// 开启任务
	grunt.registerTask('default', ['less']);
	
}
