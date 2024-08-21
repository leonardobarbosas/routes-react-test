import { useParams } from 'react-router-dom';

function EditarProdutos() {
  const { id } = useParams();

  return (
    <div className="conteudo">
      <h2>Editar Produtos</h2>
      <p>Produto selecionado = {id}</p>
    </div>
  );
}

export default EditarProdutos;
