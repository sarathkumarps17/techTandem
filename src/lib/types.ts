export type ScrollContextType = {
    activeSection: number;
    scrollToSection: (id: string) => void;
    registerSection: (id: string) => void;
};

