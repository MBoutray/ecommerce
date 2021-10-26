import Image from "next/image"
import styles from "../styles/Jumbotron.module.scss"
import iphone from "../public/iphone.png"

// arrow function

const Jumbotron = () => {
    return (
        <div>
            <div className={styles.backgroundimage}>
                <Image src={iphone} alt="iphone" />
            </div>
            <div className={styles.promotionalmessage}>
                <h3>SHOP</h3>
                <h2>iPhone</h2>
                <p>
                    An <strong>exclusive drop</strong> available.
                </p>
            </div>
        </div>
    )
}

export default Jumbotron