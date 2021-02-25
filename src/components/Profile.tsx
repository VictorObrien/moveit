import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/VictorObrien.png" alt="Foto perfil"/>
      <div>
        <strong>Paulo Victor</strong>
        <p>Level 1</p>
      </div>
    </div>
  )
}