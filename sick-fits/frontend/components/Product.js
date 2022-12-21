import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import Title from './styles/Title';

/* eslint-disable react/prop-types */
export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{product.price}</PriceTag>
    </ItemStyles>
  );
}
