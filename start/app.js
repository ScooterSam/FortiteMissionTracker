'use strict';
const path = require('path');
/*
 |--------------------------------------------------------------------------
 | Providers
 |--------------------------------------------------------------------------
 |
 | Providers are building blocks for your Adonis app. Anytime you install
 | a new Adonis specific package, chances are you will register the
 | provider here.
 |
 */
const providers = [
	'@adonisjs/framework/providers/AppProvider',
	'@adonisjs/framework/providers/ViewProvider',
	'@adonisjs/lucid/providers/LucidProvider',
	'@adonisjs/bodyparser/providers/BodyParserProvider',
	'@adonisjs/cors/providers/CorsProvider',
	'@adonisjs/shield/providers/ShieldProvider',
	'@adonisjs/session/providers/SessionProvider',
	'@adonisjs/auth/providers/AuthProvider',
	'adonis-scheduler/providers/SchedulerProvider',
	'@adonisjs/redis/providers/RedisProvider',
	'adonis-cache/providers/CacheProvider',
	'adonisjs-bugsnag/providers/BugSnagProvider',
	path.join(__dirname, '..', 'providers', 'DiscordBotProvider'),
];

/*
 |--------------------------------------------------------------------------
 | Ace Providers
 |--------------------------------------------------------------------------
 |
 | Ace providers are required only when running ace commands. For example
 | Providers for migrations, tests etc.
 |
 */
const aceProviders = [
	'@adonisjs/lucid/providers/MigrationsProvider',
	'adonis-scheduler/providers/CommandsProvider',
	'adonis-cache/providers/CommandsProvider',

];

/*
 |--------------------------------------------------------------------------
 | Aliases
 |--------------------------------------------------------------------------
 |
 | Aliases are short unique names for IoC container bindings. You are free
 | to create your own aliases.
 |
 | For example:
 |   { Route: 'Adonis/Src/Route' }
 |
 */
const aliases = {
	Scheduler : 'Adonis/Addons/Scheduler',
	Cache     : 'Adonis/Addons/Cache',
};

/*
 |--------------------------------------------------------------------------
 | Commands
 |--------------------------------------------------------------------------
 |
 | Here you store ace commands for your package
 |
 */
const commands = [
	'App/Commands/UpdateMission',
];

module.exports = {providers, aceProviders, aliases, commands};
