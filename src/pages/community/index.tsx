import { SwiperRef } from 'antd-mobile/es/components/swiper';
import { FC, useRef, useState } from 'react';
import { Tabs, Swiper } from 'antd-mobile';
import styles from './index.module.less';
import { ReactSVG } from 'react-svg';
import Feed from './tabs/Feed';
import MyArea from './tabs/MyArea';
import Groups from './tabs/Groups';

const Community: FC = () => {
    const tabItems = [
        { key: 'Feed', title: 'Feed' },
        { key: 'My Area', title: 'My Area' },
        { key: 'Groups', title: 'Groups' },
    ];

    const swiperRef = useRef<SwiperRef>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <div className={styles['content']}>
                <div
                    style={{
                        display: 'flex',
                        width: '100vw',
                        padding: '8px  12px',
                    }}
                >
                    <ReactSVG
                        src={'/src/assets/icons/ic_search_regulations.svg'}
                        wrapper="svg"
                        width="20px"
                        height="20px"
                        style={{
                            fill: 'White',
                            stroke: 'white',
                        }}
                    />
                    <div style={{ flex: 1, alignSelf: 'stretch' }}></div>
                    <ReactSVG
                        src={'/src/assets/icons/ic_search_regulations.svg'}
                        wrapper="svg"
                        width="20px"
                        height="20px"
                        style={{
                            fill: 'White',
                            stroke: 'white',
                        }}
                    />
                </div>
                <Tabs
                    activeLineMode="fixed"
                    activeKey={tabItems[activeIndex].key}
                    onChange={(key) => {
                        const index = tabItems.findIndex(
                            (item) => item.key === key
                        );
                        setActiveIndex(index);
                        swiperRef.current?.swipeTo(index);
                    }}
                    stretch={false}
                    className={styles.tabs}
                >
                    {tabItems.map((item) => (
                        <Tabs.Tab title={item.title} key={item.key} />
                    ))}
                </Tabs>
                <Swiper
                    direction="horizontal"
                    indicator={() => null}
                    ref={swiperRef}
                    defaultIndex={activeIndex}
                    onIndexChange={(index) => {
                        setActiveIndex(index);
                    }}
                    className={styles['swiper-container']}
                >
                    <Swiper.Item>
                        <div className="ontent">
                            <Feed></Feed>
                        </div>
                    </Swiper.Item>
                    <Swiper.Item>
                        <div className="ontent">
                            <MyArea></MyArea>
                        </div>
                    </Swiper.Item>
                    <Swiper.Item>
                        <div className="ontent">
                            <Groups></Groups>
                        </div>
                    </Swiper.Item>
                </Swiper>
            </div>
        </>
    );
};

export default Community;
