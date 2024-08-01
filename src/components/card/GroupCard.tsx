import { Button, Image } from 'antd-mobile';

const GroupCard = () => {
    const imgsrc = '';

    return (
        <>
            <div style={{ display: 'flex', minWidth: '160px', width: '240px' }}>
                <div style={{ position: 'relative' }}>
                    <Image
                        style={{
                            borderRadius: 8,
                            minWidth: '160px',
                            minHeight: '160px',
                            width: '240px',
                        }}
                        src={imgsrc}
                    />

                    <div
                        style={{
                            position: 'absolute',
                            display: 'flex',
                            flexDirection: 'column',
                            bottom: 0,
                            marginLeft: 10,
                            marginBottom: 10,
                            color: 'white',
                        }}
                    >
                        <b>bbass1 bbass1</b>
                        <p>293 members</p>
                        <Button
                            style={{
                                maxHeight: '32px',
                                maxWidth: '80px',
                                marginTop: '8px',
                                // background: '#F14D68',
                                color: 'white',
                            }}
                        >
                            Joint
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GroupCard;
