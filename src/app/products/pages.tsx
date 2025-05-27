export default function Products(){
  const produtos = [
    {id:1,produto:"toalha", preco:70},
    {id:2,produto:"perfume", preco:87},
    {id:3,produto:"gloss", preco:27}
  ]
  return(
    <div>
      <h2>Lista dos produtos</h2>
      {produtos.map((produto)=>{
        return(<li key={produto.id}>{produto.produto}: R$ {produto.preco},0</li>)
      })}
    </div>
  )
}