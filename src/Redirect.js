const Redirect = () => {
    // Copied from Stackoverflow https://stackoverflow.com/questions/2090551/parse-query-string-in-javascript/2091331#2091331
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);

        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        console.log('Query variable %s not found', variable);
    }

    const idParam = getQueryVariable('id');

    window.location.href = `https://www.google.com/?id=${idParam}`;
    return;
};

export default Redirect;
