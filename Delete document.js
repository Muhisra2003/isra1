const database = 'MUH ISRA DANIAL';
const collection = 'UAS';


use(database);


db.createCollection(collection);
db.produk.deleteOne({ nama: "Pulpen" });
