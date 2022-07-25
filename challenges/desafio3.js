db.produtos
  .find(
    { vendidos: { $eq: 137 } },
    { _id: false, nome: true, vendidos: true },
  );