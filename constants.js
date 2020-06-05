function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

//The TOKEN must be defined in a .env file in the root directory in a string 'TOKEN'
define('TOKEN', process.env.TOKEN)
define('YT_TOKEN', process.env.YT_TOKEN)
define('UPREFIX', '!')
define('APREFIX', '&')
