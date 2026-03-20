/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "react-native" {
    import type React from "react";

    export type ViewStyle = Record<string, any>;
    export type TextStyle = Record<string, any>;
    export type ImageStyle = Record<string, any>;
    export type ImageSourcePropType = any;
    export type ColorValue = string;
    export type DimensionValue = number | string;

    export const View: React.ComponentType<any>;
    export const Text: React.ComponentType<any>;
    export const Image: React.ComponentType<any>;
    export const Pressable: React.ComponentType<any>;
    export const ScrollView: React.ComponentType<any>;
    export const FlatList: React.ComponentType<any>;
    export const ActivityIndicator: React.ComponentType<any>;
    export const TextInput: React.ComponentType<any>;
    export const TouchableOpacity: React.ComponentType<any>;
    export const Platform: {
        OS: string;
        select: (obj: any) => any;
    };

    export const StyleSheet: {
        create: <T extends Record<string, any>>(styles: T) => T;
        flatten: (style: any) => any;
        hairlineWidth: number;
    };

    export const Dimensions: {
        get: (dim: "window" | "screen") => { width: number; height: number };
        addEventListener: (type: string, handler: any) => any;
    };

    export const Animated: any;
    export const Easing: any;
    export const Linking: any;
}
