import ReactMarkdown from 'react-markdown';
import styles from './Popup.module.css'
import { Location } from '../../types';

interface PopupProps extends Location {
}

export function Popup({
  name,
  type,
  description,
  googleMapsLink,
}: PopupProps) {
  return (
    <div className={styles.marker}>
      <p className={styles.title}>{name}</p>
      <p>Type: {type}</p>
      {description && <ReactMarkdown children={description} />}
      <p className={styles.links}>
      <a target="_blank" rel="noreferrer" href={googleMapsLink}>Google Maps</a>
      </p>
    </div>
  )
}
