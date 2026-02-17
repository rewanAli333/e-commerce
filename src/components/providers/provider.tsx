// 'use client';

// import { Provider } from "react-redux";
// import {ReactNode, useRef} from "react";
// import { AppStore, createStore, PreloadedState } from "@/store/store";
// import { I18nextProvider } from 'react-i18next';
// import i18n from '../../locales/i18n';

// type ProvidersProps = {
//     children: React.ReactNode;
//     preloadedState: PreloadedState
// };


// export default function Providers({ children, preloadedState }: ProvidersProps) {
//     const storeRef = useRef<null | AppStore>(null);

//     if (!storeRef.current) {
//         storeRef.current = createStore(preloadedState);
//     }
//     return <>
//         <I18nextProvider i18n={i18n}>
//                 {children}
//         </I18nextProvider>
//     </>
// }



'use client'

import { Provider as ReduxProvider } from "react-redux";
import { ReactNode, useRef } from "react";
import { AppStore, createStore, PreloadedState } from "@/store/store";
;

type ProvidersProps = {
    children: ReactNode;
    preloadedState: PreloadedState;
};

export default function Providers({ children, preloadedState }: ProvidersProps) {
    const storeRef = useRef<null | AppStore>(null);

    if (!storeRef.current) {
        storeRef.current = createStore(preloadedState);
    }

    return (
            <ReduxProvider store={storeRef.current}>
                {children}
            </ReduxProvider>
    );
}
