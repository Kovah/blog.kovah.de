const _site = require("./site.json");

let site = {
    buildTime: new Date(),
};

for (language of _site.langs) {
    site[language.id] = {
        _t: require(`./l10n/messages_${language.id}.json`)
    }
}

module.exports = site;
