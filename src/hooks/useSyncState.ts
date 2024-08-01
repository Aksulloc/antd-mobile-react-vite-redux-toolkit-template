// import { useEffect, useRef, useState } from 'react';

// /**
//  * 定义含回调函数的useState方法，回调中可拿到最新的state
//  * @param {any} state 要设置的state值
//  * @returns {Array} 和useState返回值相同[data, setData]
//  */
// const useSyncState = (state: any) => {
//     const cbRef = useRef();
//     const [data, setData] = useState(state);

//     // 核心：依靠useEffect，在data更新后执行callback
//     useEffect(() => {
//         cbRef.current && cbRef.current(data);
//     }, [data]);

//     return [
//         data,
//         (val: any, callback: undefined) => {
//             cbRef.current = callback;
//             setData(val);
//         },
//     ];
// };

// export default useSyncState;
