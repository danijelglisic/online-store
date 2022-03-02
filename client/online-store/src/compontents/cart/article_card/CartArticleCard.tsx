import React, { SetStateAction } from 'react'
import { useQuery, useMutation, gql, QueryResult } from "@apollo/client";
import { FilterContextType } from '../../../types/Types';

type Props = {
    id: string;
    name: string;
    image_url: string;
    price: number;
    category_id: string;
    category_name: string;
    cart_id: string;
    refetch: any
}
const REMOVE_FROM_CART_MUTATION = gql`
  mutation Mutation($articleId: ID!, $cartId: ID!) {
  removeFromCart(article_id: $articleId, cart_id: $cartId)
}
 `;


const CartArticleCard: React.FC<Props> = ({ id, name, image_url, price, category_id, category_name, cart_id, refetch }) => {

    const [removeFromCart, { data, loading }] = useMutation<any>(REMOVE_FROM_CART_MUTATION, {
        onCompleted: () => {
            refetch()
        }
    })

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={image_url} alt="" />
                    </div>
                    <div className="fml-4">
                        <div className="text-sm font-medium text-gray-900">{name}</div>
                        <div className="text-sm text-gray-500">VELICINA</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 text-left whitespace-nowrap">
                <div className="text-sm text-gray-900">{category_name}</div>
                <div className="text-sm text-gray-200">{category_id}</div>
            </td>
            <td className="px-6 py-4 text-left whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{price}</span>
            </td>
            <td className="px-6 py-4 text-left whitespace-nowrap">1 </td>
            <td className="px-6 py-4 text-left swhitespace-nowrap">
                <button onClick={
                    () => removeFromCart({
                        variables: {
                            articleId: id,
                            cartId: cart_id,
                        }
                    })
                } className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" >X</button>
            </td>
        </tr>
    )
}

export default CartArticleCard