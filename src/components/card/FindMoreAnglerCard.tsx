import { Avatar } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';

function FindMoreAnglerCard() {
    return (
        <div
            style={{
                display: 'inline-block',
                borderRadius: '8px',
                maxWidth: '240px',
                height: '280px',
                background: 'gray',
                verticalAlign: 'top',
            }}
        >
            <div
                style={{
                    width: '240px',
                    height: '160px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Avatar
                    style={{
                        '--size': '60px',
                        borderRadius: '50%',
                        marginRight: '-20px',
                    }}
                    src=""
                />
                <Avatar
                    style={{
                        '--size': '80px',
                        borderRadius: '50%',
                        zIndex: '2',
                    }}
                    src="https://p26-passport.byteacctimg.com/img/user-avatar/38f4c9d1217052095a68528aae030798~90x90.awebp"
                />
                <Avatar
                    style={{
                        '--size': '60px',
                        borderRadius: '50%',
                        marginLeft: '-20px',
                    }}
                    src=""
                />
            </div>

            <div
                style={{
                    margin: '8px',
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <span
                        style={{
                            width: '224px',
                            textAlign: 'center',
                            fontSize: 'smaller',
                            alignContent: 'center',
                        }}
                    >
                        Find more anglers and...
                    </span>
                </div>
            </div>
            <div
                style={{
                    padding: '8px',
                    display: 'flex',
                    height: '100px',
                    justifyContent: 'center',
                    alignItems: 'top',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        padding: '8px',
                        width: '36px',
                        height: '36px',
                        background: 'black',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        alignItems: 'center',
                    }}
                >
                    <RightOutline />
                </div>
            </div>
        </div>
    );
}

export default FindMoreAnglerCard;
