'use client';

// import { store } from "@/store/store";
import { Provider } from "react-redux";
import {ReactNode, useRef} from "react";
import { AppStore, createStore, PreloadedState } from "@/store/store";

type ProvidersProps = {
    children: React.ReactNode;
    preloadedState: PreloadedState
};


export default function Providers({ children, preloadedState }: ProvidersProps) {
    const storeRef = useRef<null | AppStore>(null);

    if (!storeRef.current) {
        storeRef.current = createStore(preloadedState);
    }
    return <>
        <Provider store={storeRef.current!}>
                {children}
        </Provider>
    </>
}