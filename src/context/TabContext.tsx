import { createContext, ReactNode, useState } from 'react';

interface Tab {
    previousTabIndex: number;
    currentTabIndex: number;
}

interface TabContextData {
    previousTabIndex: number;
    currentTabIndex: number;
    setCurrentTab: (currentTab: number, previousTab: number) => void;
}

interface TabProviderProps {
    children: ReactNode;
}

export const TabContext = createContext<TabContextData>({
    currentTabIndex: 0,
    previousTabIndex: 0,
    setCurrentTab: () => { },
});

export function TabProvider({ children }: TabProviderProps) {
    const [tab, setTab] = useState<Tab>({ currentTabIndex: 0, previousTabIndex: 0 });

    function setCurrentTab(currentTabIndex: number, previousTabIndex: number) {
        setTab({ currentTabIndex, previousTabIndex });
    }

    const { currentTabIndex, previousTabIndex } = tab;

    return (
        <TabContext.Provider value={{ currentTabIndex, previousTabIndex, setCurrentTab }}>
            {children}
        </TabContext.Provider>
    );
}
