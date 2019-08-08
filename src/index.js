class S3PathGenerator {

    static generate(url) {
        if (typeof url !== 'string' || !url) {
            throw new Error("Cannot be empty");
        }
        const protoparts = url.split(/:\/\//);
        if (!(protoparts[0] || "").match(/^https?$/)) {
            throw new Error("Unsupported protocol");
        }
        if (!protoparts[1]) {
            throw new Error("Empty domain");
        }

        const parts = protoparts[1].split(/\//).map(encodeURIComponent);
        if (parts[parts.length - 1] === '') {
            parts.pop();
            parts[parts.length - 1] += encodeURIComponent('/');
        }
        return protoparts[0] + '/' + parts.join('/');
    }
}

module.exports = S3PathGenerator;
