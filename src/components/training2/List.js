import { Children, cloneElement, useState } from 'react';
import { HighlightContext } from './context';

//1
// export default function List({ children }) {
//     const [selectedIndex, setSelectedIndex] = useState(0);
//     return (
//         <div className="List">
//             {Children.map(children, (child, index) =>
//                 cloneElement(child, {
//                     isHighlighted: index === selectedIndex,
//                 })
//             )}
//             <hr />
//             <button onClick={() => {setSelectedIndex((i) => (i + 1) % Children.count(children));}}>
//                 Next
//             </button>
//         </div>
//     );
// }
//2
// export default function List({ items, renderItem }) {
//     const [selectedIndex, setSelectedIndex] = useState(0);
//     return (
//         <div className="List">
//             {items.map((item, index) => {
//                 const isHighlighted =
//                     index === selectedIndex;
//                 return renderItem(item, isHighlighted);
//             })}
//             <hr />
//             <button
//                 onClick={() => {
//                     setSelectedIndex(
//                         (i) => (i + 1) % items.length
//                     );
//                 }}
//             >
//                 Next
//             </button>
//         </div>
//     );
// }

export default function List({ items, renderItem }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <div className="List">
            {items.map((item, index) => {
                const isHighlighted =
                    index === selectedIndex;
                return (
                    <HighlightContext.Provider
                        key={item.id}
                        value={isHighlighted}
                    >
                        {renderItem(item)}
                    </HighlightContext.Provider>
                );
            })}
            <hr />
            <button
                onClick={() => {
                    setSelectedIndex(
                        (i) => (i + 1) % items.length
                    );
                }}
            >
                Next
            </button>
        </div>
    );
}