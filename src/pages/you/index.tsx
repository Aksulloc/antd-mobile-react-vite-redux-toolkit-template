import { FC, useState, Fragment } from 'react';
import style from './index.module.less';
import {
    Avatar,
    Button,
    List,
    Space,
    Image,
    Ellipsis,
    PullToRefresh,
} from 'antd-mobile';
import {
    CheckOutline,
    DownOutline,
    FilterOutline,
    HeartOutline,
    HistogramOutline,
    ShopbagOutline,
    StarOutline,
    UndoOutline,
    UnorderedListOutline,
} from 'antd-mobile-icons';

const You: FC = () => {
    const [data, setData] = useState<string[]>(['1', '2']);
    function getNextData() {
        const ret: string[] = [];
        for (let i = 0; i < 1; i += 1) {
            ret.push(`${i}`);
        }
        return ret;
    }
    const listHandler = () => {
        return (
            <div className={style.listheader}>
                <span>Catches</span>
                <DownOutline />
                <div style={{ flex: 1 }}></div>
                <FilterOutline />
                <UnorderedListOutline />
            </div>
        );
    };

    return (
        <div className={style.container}>
            <PullToRefresh
                onRefresh={async () => {
                    setData([...getNextData(), ...data]);
                    console.log('onRefresh data...');
                }}
                canReleaseText={<UndoOutline />}
                completeText={<CheckOutline />}
            >
                <div className={style.info}>
                    <Avatar
                        src={''}
                        style={{ '--size': '100px', borderRadius: '50%' }}
                    />
                    <h4>You</h4>
                    <div>
                        <span>@ak4966</span>
                        <span>United States</span>
                    </div>
                    <Space>
                        <div>
                            <div>0</div>
                            <div>Catches</div>
                        </div>
                        <div>
                            <div>0</div>
                            <div>Followers</div>
                        </div>
                        <div>
                            <div>0</div>
                            <div>Following</div>
                        </div>
                    </Space>
                </div>

                <Space direction="vertical" style={{ width: '100vw' }}>
                    <Space justify="center" block>
                        <Button size="small">Edit profile</Button>
                        <Button size="small">Find friends</Button>
                        <Button size="small">^</Button>
                    </Space>
                    <Space justify="center" block>
                        <Button size="small">
                            <HeartOutline />
                            <div>Species</div>
                        </Button>
                        <Button size="small">
                            <HistogramOutline />
                            <div>Statistics</div>
                        </Button>
                        <Button size="small">
                            <ShopbagOutline />
                            <div>Your gear</div>
                        </Button>
                        <Button size="small">
                            <StarOutline />
                            <div>Your Map</div>
                        </Button>
                    </Space>
                </Space>

                <List
                    header={listHandler()}
                    style={{
                        '--border-inner': '0px',
                        '--padding-left': '0px',
                        '--padding-right': '0px',
                    }}
                >
                    {data.map((_: string, index: number) => (
                        <Fragment key={index}>
                            <List.Item
                                prefix={
                                    <Image
                                        src={''}
                                        width={80}
                                        height={80}
                                        fit="cover"
                                        style={{ borderRadius: 4 }}
                                    />
                                }
                                onClick={() => {}}
                                arrow={false}
                                style={{ padding: '10px' }}
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
    );
};

export default You;
