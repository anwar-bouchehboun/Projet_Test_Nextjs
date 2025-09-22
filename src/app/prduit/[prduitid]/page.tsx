import React from 'react';



function Produit({ params }: { params: {  prduitid: string; }}) {
  return (
    <div>Produit {params.prduitid}</div>
  );
}

export default Produit;
