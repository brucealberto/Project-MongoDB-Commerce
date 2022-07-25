db.produtos
  .find(
    { vendidos: { $exists: true } },
    { _id: false, nome: true, vendidos: true },
  )
  .sort({ vendidos: 1 });
