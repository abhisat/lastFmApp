declare namespace AppCssModule {
    export interface IAppCss {
        App: string;
        'App-logo-spin': string;
        header: string;
        link: string;
        logo: string;
    }
}

declare const AppCssModule: AppCssModule.IAppCss & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: AppCssModule.IAppCss;
};

export = AppCssModule;
