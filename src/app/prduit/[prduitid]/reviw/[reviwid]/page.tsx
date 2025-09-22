import React from 'react'

function Reviows({ params }: { params: {  prduitid: string;
    reviwid:string
 }}) {
  return (
    <div>
      produit {params.prduitid } reviows {params.reviwid}
    </div>
  )
}

export default Reviows
