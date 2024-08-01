import { Image } from 'antd-mobile';

function PopularAreaCard() {
    return (
        <div
            style={{
                display: 'inline-block',
                borderRadius: '8px',
                width: '140px',
                height: '140px',
                background: 'red',
                verticalAlign: 'top',
            }}
        >
            <Image
                width={'140px'}
                height={'140px'}
                src="404"
                style={{
                    borderRadius: '8px',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    bottom: 0,
                    marginLeft: 10,
                    marginBottom: 5,
                    color: 'red',
                    width: '140px',
                }}
            >
                <b
                    style={{
                        fontSize: 'small',
                        width: '120px',
                        wordBreak: 'break-word',
                        wordWrap: 'break-word',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    North Fork Suwannee River
                </b>
                <p style={{ fontSize: 'x-small' }}>10 Catches</p>
            </div>
        </div>
    );
}

export default PopularAreaCard;
