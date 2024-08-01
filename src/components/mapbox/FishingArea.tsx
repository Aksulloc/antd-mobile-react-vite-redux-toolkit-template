import { useEffect, useRef, useState } from 'react';
import { Image, Button, Popup } from 'antd-mobile';
import { ReactSVG } from 'react-svg';
import mapboxgl from 'mapbox-gl';
import styles from './FishingArea.module.less';
import CountUp from 'react-countup';

function FishingArea() {
    const [visible5, setVisible5] = useState(false);
    const [mapScale, setMapScale] = useState(1000000);
    const [lastMapScale, setLastMapScale] = useState(1000);
    const [fitBounds, setFitBounds] = useState(false);
    const [map, setMap] = useState<mapboxgl.Map>();

    const mapContainerRef = useRef(null);
    const scaleRef = useRef(0);
    const [routeGeometry] = useState(null);

    useEffect(() => {
        if (!visible5) {
            return;
        }
    }, [routeGeometry]);

    const loadMap = () => {
        mapboxgl.accessToken = import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN;
        console.log(mapContainerRef);
        const map = new mapboxgl.Map({
            container: mapContainerRef.current!, // 地图容器 id
            style: 'mapbox://styles/mapbox/satellite-streets-v12', // 样式
            center: [0, 0], // 地图初始中心点 [经度, 维度]
            zoom: 0.5, // 地图初始缩放级别
            projection: { name: 'globe' }, // 地图投影，自 v2.9.0 起支持 'globe'
            maxPitch: 30, //
            touchPitch: false, //
            pitchWithRotate: false, //
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

        map.on('zoom', () => {
            const maxWidth = 100; // mapbox源码中默认值为100
            const y = map.getContainer().offsetHeight / 2;
            const x = map.getContainer().offsetWidth / 2 - maxWidth / 2;
            const left = map.unproject([x, y]);
            const right = map.unproject([x + maxWidth, y]);
            let scale = Math.floor(left.distanceTo(right));
            scale /= 1000;
            scale = Math.floor(scale);

            if (scale < 200) {
                console.log('set setLastMapScale: ', mapScale);
                setLastMapScale(scaleRef.current);
                scaleRef.current = scale;
                setMapScale(scale);
                setFitBounds(true);
            } else {
                setFitBounds(false);
            }
            console.log('update inner scale: ', lastMapScale, mapScale);
        });

        map.on('zoomend', () => {});

        setMap(map);
    };

    const randomFly = (longitude: number, latitude: number) => {
        map?.flyTo({
            center: [longitude, latitude],
            zoom: 5,
            // bearing: 130,
            duration: 2000,
            essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
    };

    const getRingPercent = (percent: number, r: number) => {
        const perimeter = Math.PI * 2 * r; //周长
        return (percent / 100) * perimeter + ' ' + perimeter;
    };
    const cvw = window.innerWidth * 0.85;

    const clearMap = () => {
        map?.flyTo({
            center: [0, 0],
            zoom: 0.5,
            duration: 2000,
            essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
    };

    return (
        <div
            style={{
                display: 'flex',
                width: '100vw',
                height: '200px',
                background: 'red',
                // verticalAlign: 'top',
            }}
        >
            <Image
                height={'200px'}
                src="404"
                //src="https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/-82.6328,42.4207,5,0/390x200?access_token=pk.eyJ1Ijoia3Vvc3RpdmFuIiwiYSI6ImNsd3pyNHVoYzA5ODYyanF1Y3M0bTU2bm0ifQ.YfGi8zvPA6PeqtAsEV2t0g"
            ></Image>
            <div
                style={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '200px',
                    color: 'white',
                    width: '100vw',
                    padding: '20px',
                }}
            >
                <b
                    style={{
                        fontSize: 'large',
                        wordBreak: 'break-word',
                        wordWrap: 'break-word',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    Fishing area
                </b>
                <p style={{ fontSize: 'small' }}>
                    showing catches logged in the area
                </p>
                <div style={{ flex: 1 }}></div>
                <Button
                    size="mini"
                    style={{
                        background: '#061d33',
                        width: '100px',
                        height: '35px',
                        color: 'white',
                        borderWidth: '0px',
                    }}
                    onClick={() => setVisible5(true)}
                >
                    Edit area
                </Button>
            </div>

            {/* 编辑弹窗 */}
            <Popup
                afterShow={loadMap}
                visible={visible5}
                onMaskClick={() => {
                    setVisible5(false);
                }}
                bodyStyle={{
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    minHeight: '95vh',
                    background: '#08101D',
                }}
            >
                {/* header bar */}
                <div
                    style={{
                        padding: '1vh 4vw',
                        display: 'flex',
                        justifyContent: 'space-between',
                        background: '#101C28',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px',
                        height: '5vh',
                        color: 'white',
                        position: 'relative',
                        zIndex: 2,
                    }}
                >
                    <div
                        onClick={() => {
                            setVisible5(false);
                        }}
                    >
                        Cancel
                    </div>
                    <div>Edit fishing area</div>
                    <div onClick={clearMap}>Clear</div>
                </div>

                {/* content */}
                <div
                    ref={mapContainerRef}
                    style={{
                        position: 'absolute',
                        left: '0',
                        bottom: '0',
                        width: '100vw',
                        height: '90vh',
                        zIndex: -1,
                    }}
                ></div>
                <div
                    className={styles.wrap}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '90vh',
                        width: '100vw',
                        position: 'absolute',
                        bottom: '0',
                        //padding: '16px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                        // background: '#08101Dcc',
                        // background: 'black',
                        // clipPath: 'circle(50% at 50% 50%)',
                    }}
                ></div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '90vh',
                        width: '100vw',
                        position: 'absolute',
                        bottom: '0',
                        //padding: '16px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                        // background: '#08101Dcc',
                        // background: 'black',
                        // clipPath: 'circle(50% at 50% 50%)',
                    }}
                >
                    <div style={{ height: '20vh' }}>
                        <div
                            className={styles.title}
                            style={{
                                fontSize: 'x-large',
                                width: '80vw',
                                wordBreak: 'break-word',
                                fontWeight: 'bold',
                                wordWrap: 'break-word',
                                whiteSpace: 'pre-wrap',
                                color: 'white',
                                textAlign: 'center',
                            }}
                        >
                            Zoom and pan the map to adjust your area
                            {fitBounds && (
                                <div
                                    style={{
                                        fontSize: 'small',
                                        color: 'white',
                                        marginTop: '5px',
                                    }}
                                >
                                    <CountUp
                                        start={lastMapScale}
                                        end={mapScale * 2}
                                        separator=" "
                                        decimals={3}
                                        decimal=","
                                        suffix=" catches "
                                        onUpdate={() => {
                                            console.log(
                                                'start',
                                                lastMapScale,
                                                mapScale
                                            );
                                        }}
                                    >
                                        {({ countUpRef }) => (
                                            <div>
                                                <span
                                                    style={{
                                                        color: 'green',
                                                    }}
                                                    ref={countUpRef}
                                                />
                                                found in the area
                                            </div>
                                        )}
                                    </CountUp>
                                </div>
                            )}
                        </div>
                    </div>

                    <svg
                        width={cvw + 10}
                        height={cvw + 10}
                        viewBox={`0 0 ${cvw * 2} ${cvw * 2}`}
                    >
                        <circle
                            cx={cvw}
                            cy={cvw}
                            r={cvw - 10}
                            strokeWidth="2"
                            stroke="white"
                            fill="none"
                        ></circle>

                        <circle
                            cx={cvw}
                            cy={cvw}
                            r={cvw - 7}
                            strokeWidth="10"
                            stroke={fitBounds ? 'green' : 'rgba(0,0,0,0)'}
                            fill={mapScale < 100 ? 'rgba(0,255,0,0.2)' : 'none'}
                            strokeLinecap="round"
                            transform={`rotate(-90 ${cvw} ${cvw})`}
                            strokeDasharray={getRingPercent(
                                200 - mapScale,
                                cvw - 10
                            )}
                        ></circle>
                    </svg>

                    <div style={{ height: '20vh', width: '80vw' }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                paddingBottom: '1vh',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div>
                                <ReactSVG
                                    src="\src\assets\icons\ic_map_scale.svg"
                                    wrapper="svg"
                                    width="100px"
                                    height="15px"
                                ></ReactSVG>
                                <div style={{ color: 'white' }}>
                                    {fitBounds && mapScale} miles
                                </div>
                            </div>
                            <ReactSVG
                                src="\src\assets\icons\ic_map_location.svg"
                                wrapper="svg"
                                width="48px"
                                height="48px"
                                style={{
                                    border: '0px solid',
                                    pointerEvents: 'auto',
                                    background: '#586877',
                                }}
                                onClick={() => {
                                    // 获取当前定位
                                    navigator.geolocation.getCurrentPosition(
                                        (position) => {
                                            const { longitude, latitude } =
                                                position.coords;
                                            randomFly(longitude, latitude);
                                        },
                                        () => {
                                            console.log('定位失败');
                                        },
                                        {
                                            enableHighAccuracy: true,
                                            maximumAge: 10000,
                                            timeout: 10000,
                                        }
                                    );
                                }}
                            ></ReactSVG>
                        </div>
                        <Button
                            block
                            size="large"
                            style={{
                                border: '0px solid',
                                pointerEvents: 'auto',
                                background: fitBounds ? '#F14D68' : '#586877',
                            }}
                        >
                            {fitBounds ? 'Select area' : 'Zoom in to continue'}
                        </Button>
                    </div>
                </div>
            </Popup>
        </div>
    );
}

export default FishingArea;
