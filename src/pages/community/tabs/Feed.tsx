import { Fragment, useEffect, useState } from 'react';
import styles from './Feed.module.less';
import { InfiniteScroll, PullToRefresh, List } from 'antd-mobile';
import { ReactSVG } from 'react-svg';
import FeedItemCard from '@/components/card/FeedItemCard';
import { TFeedItem } from '@/types/index/box';
import ProfileCard from '@/components/card/ProfileCard';
import HScroll from '@/components/layout/HScroll';
import FindMoreAnglerCard from '@/components/card/FindMoreAnglerCard';
import PopularAreaCard from '@/components/card/PopularAreaCard';
function Feed() {
    const itemKey = 'props';
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

    const feedItem: TFeedItem = {
        id: 0,
        boxImg: '',
        title: '',
        authorPic: '',
        authorName: '',
    };
    useEffect(() => {
        setData([]);
        getNextData();
    }, [itemKey]);

    return (
        <div className={styles['feed-tab']}>
            <div
                style={{
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                    textAlign: 'center',
                    background: 'white',
                    alignItems: 'center',
                    margin: '8px 0px',
                    height: '40px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'row',
                        gap: '0.25rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    <ReactSVG
                        src={'/src/assets/icons/ic_log_catch_round.svg'}
                        wrapper="span"
                        style={{
                            fill: 'White',
                            width: '25px',
                            height: '25px',
                        }}
                    />
                    <abbr
                        style={{
                            paddingLeft: '8px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                        }}
                    >
                        {'Log catch'}
                    </abbr>
                </div>
                <hr className={styles['hr']} />
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '0.25rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    <ReactSVG
                        src={'/src/assets/icons/ic_add_post_round.svg'}
                        wrapper="span"
                        style={{
                            fill: 'White',
                            width: '25px',
                            height: '25px',
                        }}
                    />

                    <abbr
                        style={{
                            paddingLeft: '8px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                        }}
                    >
                        {'Add post'}
                    </abbr>
                </div>
            </div>

            <div style={{ overflowY: 'scroll' }}>
                <PullToRefresh
                    key={itemKey}
                    onRefresh={async () => {
                        setData([...getNextData(), ...data]);
                        console.log('onRefresh data...');
                    }}
                >
                    <List style={{ '--border-inner': '0px' }}>
                        {data.map((_: string, index: number) => (
                            <Fragment key={index}>
                                {index === 3 && (
                                    <Fragment>
                                        <div className="adm-list-header">
                                            You may be interested in
                                        </div>
                                        <HScroll>
                                            <ProfileCard />
                                            <ProfileCard />
                                            <ProfileCard />
                                            <ProfileCard />
                                            <FindMoreAnglerCard />
                                        </HScroll>
                                    </Fragment>
                                )}

                                {index === 4 && (
                                    <Fragment>
                                        <div className="adm-list-header">
                                            Popular waters in your area
                                        </div>
                                        <HScroll>
                                            <PopularAreaCard />
                                            <PopularAreaCard />
                                            <PopularAreaCard />
                                            <PopularAreaCard />
                                            <PopularAreaCard />
                                            <PopularAreaCard />
                                            <PopularAreaCard />
                                            <PopularAreaCard />
                                            <PopularAreaCard />
                                        </HScroll>
                                    </Fragment>
                                )}
                                <List.Item>
                                    <FeedItemCard
                                        list={feedItem}
                                    ></FeedItemCard>
                                </List.Item>
                            </Fragment>
                        ))}
                    </List>
                    <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
                </PullToRefresh>
            </div>
        </div>
    );
}

export default Feed;
