
/**
 * Represents an enumeration with the content types that are supported by the HTTP client.
 */
enum ContentType {

    /**
     * The content type "application/json" is used to encode the data that is send with the request.
     */
    Json,

    /**
     * The content type "application/x-www-form-urlencoded" is used to encode the data that is send with the request.
     */
    UrlFormEncoded
}

// Exports the module, so that it can be loaded via Require
export = ContentType;