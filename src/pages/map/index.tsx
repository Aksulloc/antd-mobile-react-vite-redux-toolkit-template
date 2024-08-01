import { FC, useState, useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './index.module.less';
import mapboxgl from 'mapbox-gl';
import { FloatingPanel, FloatingPanelRef, Tabs } from 'antd-mobile';
import Catches from './tabs/Catches';
import TopBaits from './tabs/TopBaits';
import Forecast from './tabs/Forecast';

const Map: FC = () => {
    const mapContainerRef = useRef(null);
    const [routeGeometry] = useState(null);
    useEffect(() => {
        mapboxgl.accessToken = import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN;
        const map = new mapboxgl.Map({
            container: mapContainerRef.current!, // 地图容器 id
            style: 'mapbox://styles/mapbox/satellite-streets-v12', // 样式
            center: [88.3639, 22.5726], // 地图初始中心点 [经度, 维度]
            zoom: 1, // 地图初始缩放级别
            projection: { name: 'globe' }, // 地图投影，自 v2.9.0 起支持 'globe'
            maxPitch: 30, //
        });
        map.on('style.load', () => {
            map.setFog({
                color: 'rgb(186, 210, 235)', // Lower atmosphere
                'high-color': '#061d33', // Upper atmosphere
                'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
                'space-color': 'rgb(11, 11, 25)', // Background color
                'star-intensity': 0.6, // Background star brightness (default 0.35 at low zoooms )
            });
        });
        map.on('load', () => {
            map.addSource('dem', {
                type: 'raster-dem',
                url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
            });
            map.addLayer({
                id: 'hillshading',
                source: 'dem',
                type: 'hillshade',
            });
        });
    }, [routeGeometry]);

    const anchors = [200, window.innerHeight * 0.95];
    const ref = useRef<FloatingPanelRef>(null);

    const tabItems = [
        { key: 'Catches', title: 'Catches' },
        { key: 'TopBaits', title: 'Top Baits' },
        { key: 'Forecast', title: 'Forecast' },
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    const tabs: { [key: string]: JSX.Element } = {
        Catches: <Catches />,
        TopBaits: <TopBaits />,
        Forecast: <Forecast />,
    };

    return (
        <div className={styles.container}>
            <div
                ref={mapContainerRef}
                style={{
                    width: '100vw',
                    height: '100vh',
                }}
            />
            <FloatingPanel className={styles.panel} anchors={anchors} ref={ref}>
                <div className={styles.container}>
                    <Tabs
                        activeLineMode="fixed"
                        activeKey={tabItems[activeIndex].key}
                        onChange={(key) => {
                            const index = tabItems.findIndex(
                                (item) => item.key === key
                            );
                            setActiveIndex(index);
                        }}
                        stretch
                        className={styles.tabs}
                    >
                        {tabItems.map((item) => (
                            <Tabs.Tab title={item.title} key={item.key}>
                                {tabs[item.key]}
                            </Tabs.Tab>
                        ))}
                    </Tabs>
                </div>
            </FloatingPanel>
        </div>
    );
};

export default Map;
