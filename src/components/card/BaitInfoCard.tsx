import { Image } from 'antd-mobile';
import HScroll from '../layout/HScroll';

function BaitInfoCard() {
    return (
        <div>
            <div style={{ display: 'flex', width: '100%', margin: '18px 0' }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '4px',
                    }}
                >
                    <b style={{ marginRight: 'auto', fontSize: '16px' }}>
                        Common snook
                    </b>

                    <span style={{ marginRight: 'auto', fontSize: '14px' }}>
                        2790 catches
                    </span>
                </div>

                <div style={{ flex: 1 }} />

                <Image src="" width={100}></Image>
            </div>
            <div style={{ textAlign: 'center' }}>
                <HScroll>
                    {[...Array(10)].map((_, i) => {
                        return (
                            <div
                                key={i}
                                style={{
                                    position: 'relative',
                                    height: '80px',
                                    width: '100px',
                                }}
                            >
                                <Image height={80} width={100} src="" />
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '0',
                                        right: '0',
                                        color: 'black',
                                        background: 'white',
                                    }}
                                >
                                    #{i}
                                </div>
                            </div>
                        );
                    })}

                    <div
                        style={{
                            width: '80px',
                            height: '80px',
                            display: 'table',
                        }}
                    >
                        <span
                            style={{
                                verticalAlign: 'middle',
                                fontSize: '14px',
                                display: 'table-cell',
                            }}
                        >
                            See more
                        </span>
                    </div>
                </HScroll>
            </div>
        </div>
    );
}

export default BaitInfoCard;
