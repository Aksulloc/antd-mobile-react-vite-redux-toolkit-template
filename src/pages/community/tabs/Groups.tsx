import GroupCard from '@/components/card/GroupCard';
import FeedItemCard from '@/components/card/FeedItemCard';
import { TFeedItem } from '@/types/index/box';
import {
    Button,
    List,
    Space,
    Image,
    Ellipsis,
    PullToRefresh,
    InfiniteScroll,
} from 'antd-mobile';
// import styles from './Groups.module.less';
import { Fragment, useEffect, useState } from 'react';
import HScroll from '@/components/layout/HScroll';
function Groups() {
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
                <Space wrap>
                    <Button block shape="rounded" color="primary" size="mini">
                        Create Group
                    </Button>

                    <Button block shape="rounded" color="primary" size="mini">
                        Discover
                    </Button>
                </Space>
                <br />
                <List header="My Groups">
                    <List.Item
                        prefix={
                            <Image
                                src={''}
                                width={64}
                                height={64}
                                fit="cover"
                                style={{ borderRadius: 8 }}
                            />
                        }
                        onClick={() => {}}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '4px',
                            }}
                        >
                            <b
                                style={{
                                    marginRight: 'auto',
                                    fontSize: '14px',
                                }}
                            >
                                nataliejones7493
                            </b>
                            <Ellipsis
                                direction="end"
                                style={{ fontSize: '11px' }}
                                content={
                                    '6h·Bavou Citamon·斑真鮰(斑點(trerertertert12345678890ge.'
                                }
                            />
                        </div>
                    </List.Item>

                    <List.Item
                        prefix={
                            <Image
                                src={''}
                                width={64}
                                height={64}
                                fit="cover"
                                style={{ borderRadius: 8 }}
                            />
                        }
                        onClick={() => {}}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '4px',
                            }}
                        >
                            <b
                                style={{
                                    marginRight: 'auto',
                                    fontSize: '14px',
                                }}
                            >
                                nataliejones7493
                            </b>
                            <Ellipsis
                                direction="end"
                                style={{ fontSize: '11px' }}
                                content={
                                    '6h·Bavou Citamon·斑真鮰(斑點(trerertertert12345678890ge.'
                                }
                            />
                        </div>
                    </List.Item>
                </List>

                <List header="Last Activity">
                    {data.map((_: string, index: number) => (
                        <Fragment key={index}>
                            {index === 1 && (
                                <Fragment>
                                    <div className="adm-list-header">
                                        Recommend Group
                                    </div>

                                    <HScroll>
                                        <GroupCard />
                                        <GroupCard />
                                        <GroupCard />
                                        <GroupCard />
                                        <GroupCard />
                                    </HScroll>
                                </Fragment>
                            )}
                            <FeedItemCard list={actCard}></FeedItemCard>
                        </Fragment>
                    ))}
                </List>

                <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
            </PullToRefresh>
        </div>
    );
}

export default Groups;
