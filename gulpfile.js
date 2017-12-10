const path = require('path');
const gulp = require('gulp');
const template = require('gulp-template');
const moment = require('moment');
const inquirer = require('inquirer');
const gitConfig = require('git-config');


const config = gitConfig.sync();
const rootDir = 'src';

const constants = {
	templates: {
		containers: path.join(__dirname, 'internals', 'templates/containers/**/*.**')
	},
	output: rootDir,
	destination: ''
}

const toCamelCase = string => string.charAt(0).toLowerCase() + string.slice(1);

const generator = () => {
	const prompts = [
		{
			type: 'list',
			name: 'module',
			message: 'Which type of module you want to create :-',
			choices: ['components', 'containers']
		}, {
			type: 'input',
			name: 'name',
			message: 'Enter the name of the module (Use CamelCase eg: "LogOut") :-'
		}
	];

	return inquirer.prompt(prompts)
		.then(response => {
			const directory = constants.templates[response.module];
			return gulp.src(directory)
				.pipe(template({
					name: response.name,
					camelCaseName: toCamelCase(response.name),
					username: config.user.name,
					date: moment().format('DD-MM-YYYY')
				}))
				.pipe(gulp.dest(path.join(rootDir, 'app', response.module, response.name)));
		})
		.catch(error => {
			console.log({error});
		})
}

gulp.task('gen', () => generator());
