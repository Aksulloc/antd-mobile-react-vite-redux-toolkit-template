import FeedItemCard from '@/components/card/FeedItemCard';
import { TFeedItem } from '@/types/index/box';
import { List, PullToRefresh, InfiniteScroll } from 'antd-mobile';
// import styles from './MyArea.module.less';
import { Fragment, useEffect, useState } from 'react';
import HScroll from '@/components/layout/HScroll';
import FishCard from '@/components/card/FishCard';
import FishingArea from '@/components/mapbox/FishingArea';

const MyArea = () => {
    const actCard: TFeedItem = {
        id: 0,
        boxImg: '',
        title: '',
        authorPic: '',
        authorName: '',
    };

    useEffect(() => {
        return () => {};
    }, []);

    function getNextData() {
        const ret: string[] = [];
        for (let i = 0; i < 1; i += 1) {
            ret.push(`${i}`);
        }
        return ret;
    }
    const [data, setData] = useState<string[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const loadMore = async () => {
        const append = await getNextData();
        setData([...data, ...append]);
        setHasMore(append.length > 0);
        console.log('more data...');
    };

    return (
        <div style={{ height: '100vh' }}>
            <PullToRefresh
                onRefresh={async () => {
                    setData([...getNextData(), ...data]);
                    console.log('onRefresh data...');
                }}
            >
                <List>
                    <Fragment>
                        <FishingArea />
                    </Fragment>
                    <Fragment>
                        <HScroll>
                            <FishCard />
                            <FishCard />
                            <FishCard />
                            <FishCard />
                            <FishCard />
                            <FishCard />
                            <FishCard />
                        </HScroll>
                    </Fragment>
                    {data.map((_item: string, index: number) => (
                        <Fragment key={index}>
                            <FeedItemCard list={actCard}></FeedItemCard>
                        </Fragment>
                    ))}
                </List>

                <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
            </PullToRefresh>
        </div>
    );
};

export default MyArea;
