class S3PathGenerator {

    static generate(url) {
        if (typeof url !== 'string' || !url) {
            throw new Error("Cannot be empty");
        }

        const superparts = url.split(/:\/\//);

        if (!(superparts[0] || "").match(/^https?$/)) {
            throw new Error("Unsupported protocol");
        }

        if (!superparts[1]) {
            throw new Error("Empty domain");
        }

        return superparts[0] + '/' + superparts[1].split(/\//).map(encodeURIComponent).join('/');
    }
}

module.exports = S3PathGenerator;
