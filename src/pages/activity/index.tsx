import { FC, useState, useEffect, Fragment } from 'react';

import styles from './index.module.less';
import { AutoCenter, List, PullToRefresh, Image, Ellipsis } from 'antd-mobile';
const Activity: FC = () => {
    function getNextData() {
        const ret: string[] = [];
        for (let i = 0; i < 1; i += 1) {
            ret.push(`${i}`);
        }
        return ret;
    }
    const [data, setData] = useState<string[]>([]);
    const loadMore = async () => {
        const append = await getNextData();
        setData([...data, ...append]);
        console.log('more data...');
    };

    useEffect(() => {
        loadMore();
    }, []);

    return (
        <div className={styles.container}>
            <AutoCenter>Notification</AutoCenter>
            <div style={{ overflowY: 'scroll' }}>
                <PullToRefresh
                    onRefresh={async () => {
                        setData([...getNextData(), ...data]);
                        console.log('onRefresh data...');
                    }}
                >
                    <List header="Earlier" style={{ '--border-inner': '0px' }}>
                        {data.map((_: string, index: number) => (
                            <Fragment key={index}>
                                <List.Item
                                    prefix={
                                        <Image
                                            src={''}
                                            width={40}
                                            height={40}
                                            fit="cover"
                                            style={{ borderRadius: 20 }}
                                        />
                                    }
                                    onClick={() => {}}
                                    arrow={false}
                                    extra={
                                        <Image
                                            src={''}
                                            width={64}
                                            height={64}
                                            fit="cover"
                                            style={{ borderRadius: 8 }}
                                        />
                                    }
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
                            </Fragment>
                        ))}
                    </List>
                </PullToRefresh>
            </div>
        </div>
    );
};

export default Activity;
