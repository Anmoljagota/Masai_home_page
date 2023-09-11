import styles from "../Rcomponents/styles/Home.module.css"
export default function Home(){
 
    return (

                <div className="image-container">
                    <img className={`${styles.image} ${styles.smallImage}`} src="https://masai-website-images.s3.ap-south-1.amazonaws.com/mobile_3.webp" alt="Small Image"/>
                    <img className={`${styles.image} ${styles.largeImage}`} src="https://masai-website-images.s3.ap-south-1.amazonaws.com/desktop_3.webp" alt="Large Image"/>
                </div>

        
    )
}