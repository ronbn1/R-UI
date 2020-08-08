declare const onlineTheme: {
    font: {
        family: string;
        size: {
            small: string;
            smallMedium: string;
            smallMedium2: string;
            smallMedium3: string;
            medium: string;
            medium2: string;
            medium3: string;
            mediumLarge: string;
            large: string;
            huge: string;
            huger: string;
            gargantuan: string;
        };
        weight: {
            thin: string;
            regular: string;
            bold: string;
        };
    };
    sizes: {
        xs: string;
        s: string;
        m: string;
        l: string;
    };
    colors: {
        secondary: string;
        success: string;
        dark: string;
        darker: string;
        primary: string;
        light: string;
        selected: string;
    };
    icons: {
        plus: any;
        trash: any;
        heart: any;
        downArrow: any;
        rightArrow: any;
        leftArrow: any;
        upArrow: any;
        smile: any;
        close: any;
        doc: any;
        bell: any;
        conf: any;
        decrease: any;
        increase: any;
        leftDownArrow: any;
    };
};
export default onlineTheme;
export declare type ThemeType = typeof onlineTheme;
