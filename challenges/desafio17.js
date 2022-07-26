const dbProdutos = db.produtos.countDocuments({});

db.resumoProdutos.insertOne(
    { franquia: "McDonalds", totalProdutos: dbProdutos }, 
);

db.resumoProdutos.find(
  {},
  { _id: 0 },
  );