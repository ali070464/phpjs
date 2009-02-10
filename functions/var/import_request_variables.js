function import_request_variables (types, prefix) {
    // http://kevin.vanzonneveld.net
    // +      original by: Jalal Berrami
    // + reimplemented by: Brett Zamir
    // *        example 1: document.cookie = 'snack=yummy';
    // *        example 1: import_request_variables('gc', 'pr_');
    // *        results 1: pr_snack == 'yummy'

    var i = 0, current = '', url = '', vars = '';
    prefix = prefix || '';

    if (/g/i.test(types)) { // GET
        for(i = 0, url = window.location.href, vars = url.substring(url.lastIndexOf("?") + 1, url.length).split("&"); i < vars.length;i++){
            current = vars[i].split("=");
            window[prefix+current[0]] = current[1] || null;
        }
    }
    if (/c/i.test(types)) { // COOKIE
        for(i = 0, vars = document.cookie.split("&"); i < vars.length;i++){
            current = vars[i].split("=");
            window[prefix+current[0]] = current[1].split(";")[0] || null;
        }
    }
}