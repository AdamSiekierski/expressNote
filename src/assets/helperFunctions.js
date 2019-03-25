function whitelistQuery(query) {
    let whitelisted = [];
    let x = 0;
    for (let i = 0; i < Object.values(query).length; i++) {
        if (Object.entries(query)[i].includes('title') || Object.entries(query)[i].includes('content')) {
            whitelisted[x] = Object.entries(query)[i];
            x++;
        }
    }
    return whitelisted;
}

function createSqlParams(whitelistedQuery) { // Create a string with SQL filters
    let searchValues = '';
    for (let i = 0; i < whitelistedQuery.length; i++) {
        searchValues += `${whitelistedQuery[i][0]} LIKE '%${whitelistedQuery[i][1]}%'`;
        if (!(i === whitelistedQuery.length -1)) {
            searchValues += ' AND ';
        }
    }
    return searchValues;
}

export { whitelistQuery, createSqlParams }
