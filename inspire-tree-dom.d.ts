/// <reference types="es6-promise" />

declare module "inspire-tree-dom" {
    /**
     * Represents a tree DOM configuration object
     */
    interface Config {
        autoLoadMore?: boolean;
        deferredRendering?: boolean;
        nodeHeight?: number;
        showCheckboxes?: boolean;
        dragTargets?: Array<string>;
        tabindex?: number;
        target: HTMLElement;
    }

    class InspireTreeDOM {
        constructor(tree: any, opts: Config);
    }

	export default InspireTreeDOM;
}
