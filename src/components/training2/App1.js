import { products } from "./data";
import List from "./List";
import Row from "./Row";

// код из статьи https://reactdev.ru/reference/cloneElement/ 

//1
// export default function App1() {
//     return (
//         <List>
//             {products.map((product) => (
//                 <Row
//                     key={product.id}
//                     title={product.title}
//                 />
//             ))}
//         </List>
//     );
// }

//2
// export default function App1() {
//     return (
//         <List
//             items={products}
//             renderItem={(product, isHighlighted) => (
//                 <Row
//                     key={product.id}
//                     title={product.title}
//                     isHighlighted={isHighlighted}
//                 />
//             )}
//         />
//     );
// }

//3
export default function App1() {
    return (
        <List
            items={products}
            renderItem={(product) => (
                <Row title={product.title} />
            )}
        />
    );
}