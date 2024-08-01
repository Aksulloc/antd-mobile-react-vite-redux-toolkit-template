import { Avatar, Button, Image } from 'antd-mobile';

function ProfileCard() {
    const imgsrc =
        //   'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60';
        '';

    return (
        <div
            style={{
                display: 'inline-block',
                borderRadius: '8px',
                maxWidth: '240px',
                height: '280px',
                background: 'red',
                verticalAlign: 'top',
            }}
        >
            <Image
                width={'240px'}
                height={'160px'}
                src={imgsrc}
                style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
            />

            <div
                style={{
                    margin: '8px',
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Avatar style={{ borderRadius: '50%' }} src="" />
                <div
                    style={{
                        marginLeft: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <abbr>bbass1</abbr>
                    <p style={{ fontSize: 'x-small' }}>🇫🇷 bbass1</p>
                    <p style={{ fontSize: 'x-small' }}>293 Catches</p>
                </div>
            </div>
            <div
                style={{
                    padding: '8px',
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <p style={{ fontSize: 'x-small', alignContent: 'center' }}>
                    Active angle in USA
                </p>

                <Button
                    size="small"
                    style={{
                        background: '#061d33',
                        margin: 'auto',
                        right: '0',
                    }}
                >
                    Follow
                </Button>
            </div>
        </div>
    );
}

export default ProfileCard;
