
//1 /2
export default function Row({ title, isHighlighted }) {
    return (
        <div
            className={[
                'Row',
                isHighlighted ? 'RowHighlighted' : '',].join(' ')}
        >
            {title}
        </div>
    );
}

