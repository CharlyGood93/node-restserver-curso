// Get Port
process.env.PORT = process.env.PORT || 3000;

// Environment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Connect DB
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://CharlyGood:q45yG9pS5GG5Ymet@cluster0-6fx0x.mongodb.net/cafe';
}

process.env.URL_DB = urlDB;