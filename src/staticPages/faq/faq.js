import Footer from "../../components/common/footer/footer";
import Header from "../../components/common/header/header";
import SubHeader from "../../components/common/header/subHeader";

const faqData = [
    {
        title: "How can I join Criptoki? Can anyone do it?",
        data: <>
            A non-fungible token (NFT) is a unit of data stored on a digital ledger,
            called a blockchain, that certifies a digital asset to be unique and therefore not
            interchangeable. NFTs can be used to represent items such as photos, videos, audio, and
            other types of digital files. Access to any copy of the original file, however, is not
            restricted to the buyer of the NFT. While copies of these digital items are available for
            anyone to obtain, NFTs are tracked on blockchains to provide the owner with a proof of
            ownership that is separate from copyright.
        </>
    },
    {
        title: "What are NFTs (Non-Fungible Tokens)?",
        data: <>
            A non-fungible token (NFT) is a unit of data stored on a digital ledger,
            called a blockchain, that certifies a digital asset to be unique and therefore not
            interchangeable. NFTs can be used to represent items such as photos, videos, audio, and
            other types of digital files. Access to any copy of the original file, however, is not
            restricted to the buyer of the NFT. While copies of these digital items are available for
            anyone to obtain, NFTs are tracked on blockchains to provide the owner with a proof of
            ownership that is separate from copyright.
        </>
    },
    {
        title: "How do I create/submit a new artwork?",
        data: <>
            A non-fungible token (NFT) is a unit of data stored on a digital ledger,
            called a blockchain, that certifies a digital asset to be unique and therefore not
            interchangeable. NFTs can be used to represent items such as photos, videos, audio, and
            other types of digital files. Access to any copy of the original file, however, is not
            restricted to the buyer of the NFT. While copies of these digital items are available for
            anyone to obtain, NFTs are tracked on blockchains to provide the owner with a proof of
            ownership that is separate from copyright.
        </>
    },
    {
        title: "Can I gift or send a collectible to someone?",
        data: <>
            A non-fungible token (NFT) is a unit of data stored on a digital ledger,
            called a blockchain, that certifies a digital asset to be unique and therefore not
            interchangeable. NFTs can be used to represent items such as photos, videos, audio, and
            other types of digital files. Access to any copy of the original file, however, is not
            restricted to the buyer of the NFT. While copies of these digital items are available for
            anyone to obtain, NFTs are tracked on blockchains to provide the owner with a proof of
            ownership that is separate from copyright.
        </>
    },
    {
        title: "How does the earnings system work?",
        data: <>
            A non-fungible token (NFT) is a unit of data stored on a digital ledger,
            called a blockchain, that certifies a digital asset to be unique and therefore not
            interchangeable. NFTs can be used to represent items such as photos, videos, audio, and
            other types of digital files. Access to any copy of the original file, however, is not
            restricted to the buyer of the NFT. While copies of these digital items are available for
            anyone to obtain, NFTs are tracked on blockchains to provide the owner with a proof of
            ownership that is separate from copyright.
        </>
    },
    {
        title: "Collectors have different account from creators?",
        data: <>
            A non-fungible token (NFT) is a unit of data stored on a digital ledger,
            called a blockchain, that certifies a digital asset to be unique and therefore not
            interchangeable. NFTs can be used to represent items such as photos, videos, audio, and
            other types of digital files. Access to any copy of the original file, however, is not
            restricted to the buyer of the NFT. While copies of these digital items are available for
            anyone to obtain, NFTs are tracked on blockchains to provide the owner with a proof of
            ownership that is separate from copyright.
        </>
    }
]

const FaqPage = () => {
    return <>
        <Header />
        <SubHeader />

        <div className="primary-content-area section-medium content-padding">
            <div className="page-title text-center">
                <h2>Frequently <span className="gradient-text">Asked Questions</span></h2>
            </div>
            <div className="accordion">
                {(faqData || []).map((v, i) => {
                    return <div className="accordion-card" key={i}>
                        <div className="card-header">
                            <div className="card-button">
                                <div className="card-title">{v.title}</div>
                                <div className="icon-box"> <svg className="crumina-icon plus-icon show">
                                    <use xlinkHref="#minus-icon"></use>
                                </svg>
                                    <svg className="crumina-icon minus-icon">
                                        <use xlinkHref="#minus-icon"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="card-info">{v.data}</div>
                        </div>
                    </div>
                })}
            </div>
        </div>

        <Footer />
    </>
}

export default FaqPage;