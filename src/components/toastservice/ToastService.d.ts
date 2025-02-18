import Vue, { PluginFunction } from 'vue';

export const install: PluginFunction<{}>;

interface ToastServiceMethods {
    add(message: any): any;
    remove(message: any): any;
    removeGroup(group: any): void;
    removeAllGroups(): void;
}

declare module 'vue/types/vue' {
    interface Vue {
        $toast: ToastServiceMethods;
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $toast: ToastServiceMethods;
    }
}
