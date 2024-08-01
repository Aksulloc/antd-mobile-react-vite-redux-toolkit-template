import { TFeedItem } from '@/types/index/box';
import { FC } from 'react';
import { Card, Skeleton } from 'antd-mobile';
import FeedItemCardHeadView from './FeedItemCardHeadView';
import styles from './FeedItemCard.module.less';
import FeedItemCardCallToAction from './FeedItemCardCallToAction';

interface IProps {
    list: TFeedItem;
    loading?: boolean;
}

const FeedItemCard: FC<IProps> = () => {
    return (
        <Card>
            <FeedItemCardHeadView
                list={''}
                avatarSrc={''}
            ></FeedItemCardHeadView>
            <Skeleton animated className={styles.customSkeleton} />
            <FeedItemCardCallToAction list={''} avatarSrc={''} />
        </Card>
    );
};

export default FeedItemCard;
