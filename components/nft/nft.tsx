import Image from "next/image"
import styles from "./nft.module.css"
export default function Nft(nft:any){
    const fileType=nft.media[0].gateway.split(".")[-1]
    return(
        <div className={styles.nftContainer}>
            <div className={styles.media}>
                {fileType==="mp4"? (
                     <video loop autoPlay muted className={styles.video}>
                     <source src={nft.media[0].gateway} type="video/mp4" className={styles.videoContainer}/>
                   </video>
                ):(
                    <div className={styles.imageContainer}>
                    <img
                        src={nft.media[0].gateway}
                        alt={nft.tokenId}
                        className={styles.image}
                    />
                    </div>
                )}
            </div>
            <div className={styles.desc}>
                <h2 className={styles.title}>{nft.title}</h2>
                <p className={styles.name}>{nft.contract.name}</p>
                <p className={styles.time}>{nft.timeLastUpdated}</p>
            </div>
        </div>
    )
}