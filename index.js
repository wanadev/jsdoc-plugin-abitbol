exports.handlers = {
    beforeParse : function(e) {
        var classMatch = e.source.match(/\/\*\*[\s\S]*@class\s+(.*?)\s*$[\s\S]*?\*\//m);
        var className = classMatch ? classMatch[1] : null;

        if (className) {
            e.source = e.source.replace(/(.*?\s?=\s?.*?\.\$extend\(\X*?)(\{)/, "$1/** @lends " + className + " */$2");
            e.source = e.source.replace(/@(member|event|fires|emits)\s+([a-zA-Z\._-]*?)\s*$/gm, "@$1 " + className + "#$2");
        }

        console.log(e.source);
    },
};
