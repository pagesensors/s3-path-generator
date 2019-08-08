class S3PathGenerator {

    static generate(url) {
        const protoparts = url.split(/:\/\//);
        if (!(protoparts[0] || "").match(/^https?$/)) {
            throw new Error("Unsupported protocol");
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
