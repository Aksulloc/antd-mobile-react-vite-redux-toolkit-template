import { ActionSheet, Avatar, Button, Ellipsis, Skeleton } from 'antd-mobile';
import { FC, useRef } from 'react';
import { ReactSVG } from 'react-svg';
import type {
    Action,
    ActionSheetShowHandler,
} from 'antd-mobile/es/components/action-sheet';
interface IProps {
    list: string;
    avatarSrc: string;
    loading?: boolean;
}
const FeedItemCardHeadView: FC<IProps> = () => {
    const sleep = (ms: number) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };
    const handler = useRef<ActionSheetShowHandler>();
    const actions: Action[] = [
        {
            text: 'Report',
            key: 'Report',
            danger: true,
            onClick: () => {
                handler.current?.close();
            },
        },
    ];
    return (
        <>
            <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ padding: 1, marginLeft: 2 }}>
                    <Skeleton animated />
                    <Avatar
                        style={{
                            '--size': '40px',
                            '--border-radius': '50%',
                        }}
                        src=""
                    />
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '4px',
                    }}
                >
                    <b style={{ marginRight: 'auto', fontSize: '14px' }}>
                        nataliejones7493
                    </b>
                    <Ellipsis
                        direction="end"
                        style={{ fontSize: '11px' }}
                        content={
                            '6h·Bavou Citamon·斑真鮰(斑點(trerertertert12345678890ge.'
                        }
                    />
                </div>

                <div style={{ flex: 1 }} />
                <div
                    style={{
                        display: 'flex',
                        padding: 1,
                        marginLeft: 'auto',
                        marginRight: '0',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        color="primary"
                        fill="outline"
                        size="mini"
                        style={{
                            height: '24px',
                            maxWidth: '80px',
                            marginLeft: 'auto',
                        }}
                        loading="auto"
                        onClick={async () => {
                            await sleep(1500);
                        }}
                    >
                        Follow
                    </Button>
                    <ReactSVG
                        onClick={() => {
                            handler.current = ActionSheet.show({
                                cancelText: 'Cancel',
                                actions: actions,
                                // onClose: () => setVisible(false),
                                onAction: (action) => {
                                    if (action.key === 'save') {
                                        console.log('save');
                                    }
                                },
                            });
                        }}
                        src={'/src/assets/icons/ic_more_vert.svg'}
                        wrapper="svg"
                        width="24px"
                        height="24px"
                    />
                </div>
            </div>

            {/* <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
                <DrawerContent bg={'#00000000'}>
                    <Button h={12} w={'90%'} margin={'auto'} marginBottom={4}>
                        <Text color={'red.500'}>Report</Text>
                    </Button>
                    <Button
                        h={12}
                        w={'90%'}
                        margin={'auto'}
                        marginBottom={'6px'}
                        onClick={onClose}
                    >
                        <Text color={'blue.500'}>Cancel</Text>
                    </Button>
                </DrawerContent>
            </Drawer> */}
        </>
    );
};

export default FeedItemCardHeadView;
