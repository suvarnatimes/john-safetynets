const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dovm8ucqv',
    api_key: '646959251174412',
    api_secret: 'DcuuViRoPqsN5vWv7YYPxVM0-lg'
});

console.log("Testing Cloudinary Connection...");

cloudinary.api.resources({ max_results: 1 }, (error, result) => {
    if (error) {
        console.error("Connection Failed:", error);
    } else {
        console.log("Connection Successful!");
        console.log("Cloud Name:", result.rate_limit_allowed ? "Confirmed" : "Unknown");
    }
});
