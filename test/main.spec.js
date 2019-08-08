const S3PathGenerator = require('../src');

describe("main", function () {

    it("missing capacity", () => {
        expect(() => S3PathGenerator.generate('ftp://www.google.com')).toThrowError();
        expect(() => S3PathGenerator.generate('www.google.com')).toThrowError();
        expect(() => S3PathGenerator.generate('https://')).toThrowError();
        expect(() => S3PathGenerator.generate('http://')).toThrowError();
        expect(S3PathGenerator.generate('http://www.google.com')).toBe('http/www.google.com');
        expect(S3PathGenerator.generate('https://www.google.com')).toBe('https/www.google.com');
        expect(S3PathGenerator.generate('https://www.google.com/')).toBe('https/www.google.com%2F');
        expect(S3PathGenerator.generate('https://www.google.com/test')).toBe('https/www.google.com/test');
        expect(S3PathGenerator.generate('https://www.google.com/test/')).toBe('https/www.google.com/test%2F');
        expect(S3PathGenerator.generate('https://www.google.com/with space/')).toBe('https/www.google.com/with%20space%2F');
        expect(S3PathGenerator.generate('https://www.google.com/test///////test')).toBe('https/www.google.com/test///////test');
        expect(S3PathGenerator.generate('https://www.google.com/test///////test/')).toBe('https/www.google.com/test///////test%2F');
    });
});
