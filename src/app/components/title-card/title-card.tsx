import styles from './title-card.module.css'

export default function TitleCard(){
    return(
        <main className={styles.mainBody}>
        <div className={styles.titleAndSubtitle}>
          <h1 className={styles.title}>văleanu <span className={styles.highlightedText}>lucian</span>-george</h1>
          <h2 className={styles.subtitle}>developer, artist and plumber </h2>
        </div>
      </main>
  
    );
}