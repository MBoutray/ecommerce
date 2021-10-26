import styles from "../styles/Contact.module.scss"

export default function Contact() {
    return (
        <div className={styles.contact}>
            <h2 className={styles.contact__title}>Any questions ? <span>Contact us.</span></h2>
            <a href="">
                <button>Contact Us</button>
            </a>
        </div>
    )
}