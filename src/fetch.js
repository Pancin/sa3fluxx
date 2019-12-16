/* Fetch */

/** 
 * @function doFetchRequest
 * @param {String} method The method of the Fetch request. One of: "GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"
 * @param {String} url The url of the API to call, optionally with parameters.
 * @param {Object} headers The Associative Array containing the Request Headers. It must be undefined if there are no headers.
 * @param {String} body The body String to be sent to the server. It must be undefined if there is no body.
 * @returns {Promise} which receives the HTTP response.
 */
function doFetchRequest(method, url, headers, body) {
    if (method !== "POST" && method !== "PUT" && method !== "PATCH" && method !== "GET" && method !== "DELETE" && method !== "OPTIONS" && method !== "HEAD") {
        throw Error("invalid method");
    }
    else if ((method === "POST" || method === "PUT" || method === "PATCH") && typeof (body) !== "string") {
        throw Error("body must be a string");
    }
    else if ((method === "GET" || method === "DELETE" || method === "OPTIONS" || method === "HEAD") && body !== undefined) {
        throw Error("body must be undefined");
    }
    return fetch(url, { method: method, headers: headers, body: body });
}


/** @function doJSONRequest
 * @param {String} method The method of the Fetch request. One of: "GET", "POST", "PUT", "DELETE".
 * @param {String} url The url of the API to call, optionally with parameters.
 * @param {Object} headers The Associative Array containing the Request Headers. It must be undefined if there are no headers.
 * @param {Object} body The object to be sent as JSON body to the server. It must be undefined if there is no body.
 * @returns {Promise} which receives directly the object parsed from the response JSON.
 */
function doJSONRequest(method, url, headers, body) {
    if ((headers["Accept"] && headers["Accept"] !== 'application/json') || (headers["Content-Type"] && headers["Content-Type"] !== 'application/json')) {
        throw Error("invalid headers");
    }
    else if ((method === "GET" || method === "OPTIONS" || method === "HEAD" || method === "DELETE") && body !== undefined) {
        throw Error("body must be undefined");
    }
    else if ((method === "POST" || method === "PUT" || method === "PATCH") && typeof(body) !== "object") {
        throw Error("body must be an object");
    }
    else if ((method === "POST" || method === "PUT" || method === "PATCH") && typeof(body) === "object") {
        headers["Content-Type"] = "application/json";
        // try {
        //     body = JSON.stringify(body);    
        // } catch (err) {
        //     throw Error("body is not JSON compliant");
        // }
    }
    
    headers["Accept"] = "application/json";

    return doFetchRequest(method, url, headers, (body===null)?null:JSON.stringify(body)).then(res => {
        return res.json();
    });
}

