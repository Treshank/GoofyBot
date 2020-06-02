function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define('TOKEN', process.env.TOKEN)
define('UPREFIX', '!')
define('APREFIX', '&')
