const CollectionItemCard = ({ img, itemName, itemCounts }) => {
    return <div className="collection-item">
        <a href="/explore">
            <div className="cover-image"><img src={img} alt="" />
            </div>
            <div className="collection-info">
                <div className="title h3">{itemName}</div>
                <div className="number">{itemCounts} items</div>
            </div>
        </a>
    </div>
}

export default CollectionItemCard;