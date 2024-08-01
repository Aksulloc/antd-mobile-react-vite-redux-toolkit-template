import { Image, CapsuleTabs } from 'antd-mobile';
import styles from './Forecast.module.less';
import WeatherChart from '@/components/charts/WeatherChart';
import { useState } from 'react';
import BiteForecastChart from '@/components/charts/BiteForecastChart';

function Forecast() {
    const [actKey, setActKey] = useState(true);
    return (
        <div>
            <CapsuleTabs
                className={styles.tabs}
                onChange={(key) => {
                    setActKey(key === 'Weather' ? true : false);
                }}
            >
                <CapsuleTabs.Tab title="Weather" key="Weather" />
                <CapsuleTabs.Tab title="BiteTime™" key="BiteTime™" />
            </CapsuleTabs>
            <br />
            {actKey && (
                <>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <Image src="" />
                                <span>64°</span>
                            </div>
                            <span>Feels like 60°</span>
                        </div>

                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <Image src="" />
                                <span>64°</span>
                            </div>
                            <span>Feels like 60°</span>
                        </div>

                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <Image src="" />
                                <span>64°</span>
                            </div>
                            <span>Feels like 60°</span>
                        </div>
                    </div>
                    <WeatherChart></WeatherChart>
                </>
            )}

            {!actKey && <BiteForecastChart />}
        </div>
    );
}

export default Forecast;
