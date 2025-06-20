
const database = 'MUH ISRA DANIAL';
const collection = 'UAS';


use(database);


db.createCollection(collection);

db.produk.insertOne({
    nama: "Buku Tulis",
    harga: 5000,
    stok: 100
});

