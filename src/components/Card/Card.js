
import styles from "./Card.module.css"
import clock_svg from '../../assets/icon-clock.svg';
import eth_svg from '../../assets/icon-ethereum.svg';
const Card = ({id, title, description, eth_ammount, time_left, author, nft_img}) =>{

    return(
        <div className={styles.card_container}>
            <div className={styles.panel}>
                <div className={styles.img_container}>
                    <img src={nft_img}/>
                </div>
                <div className={styles.main}>
                    <div class={styles.details}>
                        <h2>{title} {id}</h2>
                        <p>{description}</p>
                    </div>
                    <div className={styles.addi_details}>
                        <div>
                            <img src = {eth_svg}/>
                            <p class={styles.eth}>{eth_ammount} ETH</p>
                        </div>
                        <div>
                            <img src = {clock_svg}/>
                            <p>{time_left} days left</p>
                        </div>
                    </div>
                    <div className={styles.separator}></div>
                    <div className={styles.footer}>
                        <div className={styles.avatar}>
                            <img src={author.avatar}/>
                        </div>
                        <p>Creation of <span>{author.name}</span></p>
                        {/* <span>{author.name}</span> */}
                    </div>
                </div>
            </div>
   
        </div>
    )
}

export default Card