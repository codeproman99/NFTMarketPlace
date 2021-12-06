const AdditionalDetails = () => {
    return <div className="product-description">
        <ul className="details-list">
            <li>
                <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon"></use>
                </svg>
                <span className="detail-label">Size</span>
                <span className="bold">5000 x 3500px (37MB)</span>
            </li>
            <li>
                <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon"></use>
                </svg>
                <span className="detail-label">Formats</span>
                <span className="bold">MP4, JPEG and PNG</span>
            </li>
            <li>
                <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon"></use>
                </svg>
                <span className="detail-label">Contract Address</span>
                <span className="bold">0xf7a6...f643</span>
            </li>
            <li>
                <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon"></use>
                </svg>
                <span className="detail-label">Token ID</span>
                <span className="bold">3584</span>
            </li>
            <li>
                <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon"></use>
                </svg>
                <span className="detail-label">Token Standard</span>
                <span className="bold">ERC-721</span>
            </li>
            <li>
                <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon"></use>
                </svg>
                <span className="detail-label">Blockchain</span>
                <span className="bold">Ethereum</span>
            </li>
        </ul>
    </div>
}

export default AdditionalDetails;