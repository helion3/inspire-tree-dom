/// <reference types="es6-promise" />

declare module "inspire-tree-dom" {
    /**
     * Validation callback for validating drag node may be dropped into the target.
     */
    interface DropTargetValidator {
        (dragNode: TreeNode, targetNode: TreeNode): boolean;
    }

    /**
     * Represents a tree DOM configuration object
     */
    interface Config {
        autoLoadMore?: boolean;
        deferredRendering?: boolean;
        dragAndDrop?: {
            enabled?: boolean;
            validateOn?: string;
            validate: DropTargetValidator
        };
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
