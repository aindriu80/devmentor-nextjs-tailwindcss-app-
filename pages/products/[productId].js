import { useRouter } from 'next/router'
function Product({ product }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading....</div>
  }
  return (
    <div>
      <h2>
        {product.id}
        {product.title}
        <p>{product.price}</p>
      </h2>
      {product.description}
    </div>
  )
}

export default Product

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  )
  const data = await response.json()

  return {
    props: {
      product: data,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true,
  }
}