import { CapsuleTabs, Grid, InfiniteScroll, Image } from 'antd-mobile';
import styles from './Catches.module.less';
import { useState } from 'react';
function Catches() {
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
        <div style={{ overflow: 'visible' }}>
            <CapsuleTabs className={styles.tabs}>
                <CapsuleTabs.Tab title="Date" key="Date" />
                <CapsuleTabs.Tab title="Weight" key="Weight" />
                <CapsuleTabs.Tab title="Length" key="Length" />
            </CapsuleTabs>
            <Grid columns={3} gap={1} style={{ marginTop: 4 }}>
                {data.map((_: string, index: number) => (
                    <Grid.Item key={index} style={{ alignItems: 'center' }}>
                        <Image src={''} fit="fill" />
                    </Grid.Item>
                ))}
            </Grid>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>
    );
}

export default Catches;
