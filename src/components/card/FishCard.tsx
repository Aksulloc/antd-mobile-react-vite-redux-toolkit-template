import { Image } from 'antd-mobile';
function FishCard() {
    const imgsrc = '404';
    //  'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60';

    return (
        <>
            <div
                style={{
                    width: '100px',
                    borderRadius: '8px',
                    background: 'red',
                    verticalAlign: 'top',
                }}
            >
                <div style={{ padding: '5px' }}>
                    <Image
                        style={{
                            width: '90px',
                            height: '40px',
                            borderRadius: '8px',
                        }}
                        src={imgsrc}
                    />
                    <div
                        style={{
                            width: '90px',
                            textAlign: 'center',
                            fontSize: 'x-small',
                        }}
                    >
                        Red drum
                    </div>
                </div>
            </div>
        </>
    );
}

export default FishCard;
