import Card from './Card.jsx'
function Cards({ items }) {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
                {
                    items.map((item) => (
                        <Card key={item.id} item={item} ></Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards