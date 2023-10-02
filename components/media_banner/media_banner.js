import MediaItemBlock from '../shared/media_block/media_item_block';
import styles from './media_banner.module.css';

export default function MediaBanner() {
  return (
    <div className={styles.media_banner}>
        <MediaItemBlock/>
        <MediaItemBlock/>
        <MediaItemBlock/>
    </div>
  )
}