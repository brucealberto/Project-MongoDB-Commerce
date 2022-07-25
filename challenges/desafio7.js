db.produtos.find(
  { $nor: [{ vendidos: 50 }, { tags: { $exists: true } }] },
  { _id: 0, nome: 1, vendidos: 1 },
);
