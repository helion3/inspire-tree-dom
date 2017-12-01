/* Inspire Tree DOM
 * @version 4.0.3
 * https://github.com/helion3/inspire-tree-dom
 * @copyright Copyright 2015 Helion3, and other contributors
 * @license Licensed under MIT
 *          see https://github.com/helion3/inspire-tree-dom/blob/master/LICENSE
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash'), require('inspire-tree')) :
	typeof define === 'function' && define.amd ? define(['lodash', 'inspire-tree'], factory) :
	(global.InspireTreeDOM = factory(global._,global.InspireTree));
}(this, (function (_$1,InspireTree) { 'use strict';

InspireTree = InspireTree && InspireTree.hasOwnProperty('default') ? InspireTree['default'] : InspireTree;

var ENTER = 12;
var LEFT_ARROW = 37;
var UP_ARROW = 38;
var RIGHT_ARROW = 39;
var DOWN_ARROW = 40;

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dist = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
var NO_OP = "$NO_OP";
var ERROR_MSG = "a runtime error occured! Use Inferno in development environment to find the error.";
// This should be boolean and not reference to window.document
var isBrowser = !!(typeof window !== "undefined" && window.document);
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray$$1 = Array.isArray;
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
function isStringOrNumber(o) {
    var type = typeof o;
    return type === "string" || type === "number";
}
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isFunction$$1(o) {
    return typeof o === "function";
}
function isString$$1(o) {
    return typeof o === "string";
}
function isNumber(o) {
    return typeof o === "number";
}
function isNull(o) {
    return o === null;
}
function isTrue(o) {
    return o === true;
}
function isUndefined(o) {
    return o === void 0;
}
function isObject$$1(o) {
    return typeof o === "object";
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(("Inferno Error: " + message));
}
function combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key$1 in second) {
            out[key$1] = second[key$1];
        }
    }
    return out;
}
function Lifecycle() {
    this.listeners = [];
}
Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger() {
    var listeners = this.listeners;
    var listener;
    // We need to remove current listener from array when calling it, because more listeners might be added
    while ((listener = listeners.shift())) {
        listener();
    }
};

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var options = {
    afterMount: null,
    afterRender: null,
    afterUpdate: null,
    beforeRender: null,
    beforeUnmount: null,
    createVNode: null,
    findDOMNodeEnabled: false,
    recyclingEnabled: false,
    roots: []
};

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var xlinkNS = "http://www.w3.org/1999/xlink";
var xmlNS = "http://www.w3.org/XML/1998/namespace";
var svgNS = "http://www.w3.org/2000/svg";
var strictProps = new Set();
strictProps.add("volume");
strictProps.add("defaultChecked");
var booleanProps = new Set();
booleanProps.add("muted");
booleanProps.add("scoped");
booleanProps.add("loop");
booleanProps.add("open");
booleanProps.add("checked");
booleanProps.add("default");
booleanProps.add("capture");
booleanProps.add("disabled");
booleanProps.add("readOnly");
booleanProps.add("required");
booleanProps.add("autoplay");
booleanProps.add("controls");
booleanProps.add("seamless");
booleanProps.add("reversed");
booleanProps.add("allowfullscreen");
booleanProps.add("novalidate");
booleanProps.add("hidden");
booleanProps.add("autoFocus");
booleanProps.add("selected");
booleanProps.add("indeterminate");
var namespaces = new Map();
namespaces.set("xlink:href", xlinkNS);
namespaces.set("xlink:arcrole", xlinkNS);
namespaces.set("xlink:actuate", xlinkNS);
namespaces.set("xlink:show", xlinkNS);
namespaces.set("xlink:role", xlinkNS);
namespaces.set("xlink:title", xlinkNS);
namespaces.set("xlink:type", xlinkNS);
namespaces.set("xml:base", xmlNS);
namespaces.set("xml:lang", xmlNS);
namespaces.set("xml:space", xmlNS);
var isUnitlessNumber = new Set();
isUnitlessNumber.add("animationIterationCount");
isUnitlessNumber.add("borderImageOutset");
isUnitlessNumber.add("borderImageSlice");
isUnitlessNumber.add("borderImageWidth");
isUnitlessNumber.add("boxFlex");
isUnitlessNumber.add("boxFlexGroup");
isUnitlessNumber.add("boxOrdinalGroup");
isUnitlessNumber.add("columnCount");
isUnitlessNumber.add("flex");
isUnitlessNumber.add("flexGrow");
isUnitlessNumber.add("flexPositive");
isUnitlessNumber.add("flexShrink");
isUnitlessNumber.add("flexNegative");
isUnitlessNumber.add("flexOrder");
isUnitlessNumber.add("gridRow");
isUnitlessNumber.add("gridColumn");
isUnitlessNumber.add("fontWeight");
isUnitlessNumber.add("lineClamp");
isUnitlessNumber.add("lineHeight");
isUnitlessNumber.add("opacity");
isUnitlessNumber.add("order");
isUnitlessNumber.add("orphans");
isUnitlessNumber.add("tabSize");
isUnitlessNumber.add("widows");
isUnitlessNumber.add("zIndex");
isUnitlessNumber.add("zoom");
isUnitlessNumber.add("fillOpacity");
isUnitlessNumber.add("floodOpacity");
isUnitlessNumber.add("stopOpacity");
isUnitlessNumber.add("strokeDasharray");
isUnitlessNumber.add("strokeDashoffset");
isUnitlessNumber.add("strokeMiterlimit");
isUnitlessNumber.add("strokeOpacity");
isUnitlessNumber.add("strokeWidth");
var skipProps = new Set();
skipProps.add("children");
skipProps.add("childrenType");
skipProps.add("defaultValue");
skipProps.add("ref");
skipProps.add("key");
skipProps.add("checked");
skipProps.add("multiple");
var delegatedEvents = new Set();
delegatedEvents.add("onClick");
delegatedEvents.add("onMouseDown");
delegatedEvents.add("onMouseUp");
delegatedEvents.add("onMouseMove");
delegatedEvents.add("onSubmit");
delegatedEvents.add("onDblClick");
delegatedEvents.add("onKeyDown");
delegatedEvents.add("onKeyUp");
delegatedEvents.add("onKeyPress");

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var isiOS = isBrowser &&
    !!navigator.platform &&
    /iPad|iPhone|iPod/.test(navigator.platform);
var delegatedEvents$1 = new Map();
function handleEvent(name, lastEvent, nextEvent, dom) {
    var delegatedRoots = delegatedEvents$1.get(name);
    if (nextEvent) {
        if (!delegatedRoots) {
            delegatedRoots = { items: new Map(), docEvent: null };
            delegatedRoots.docEvent = attachEventToDocument(name, delegatedRoots);
            delegatedEvents$1.set(name, delegatedRoots);
        }
        if (!lastEvent) {
            if (isiOS && name === "onClick") {
                trapClickOnNonInteractiveElement(dom);
            }
        }
        delegatedRoots.items.set(dom, nextEvent);
    }
    else if (delegatedRoots) {
        var items = delegatedRoots.items;
        if (items.delete(dom)) {
            // If any items were deleted, check if listener need to be removed
            if (items.size === 0) {
                document.removeEventListener(normalizeEventName(name), delegatedRoots.docEvent);
                delegatedEvents$1.delete(name);
            }
        }
    }
}
function dispatchEvents(event, target, items, count, isClick, eventData) {
    var dom = target;
    while (count > 0) {
        if (isClick && dom.disabled) {
            return;
        }
        var eventsToTrigger = items.get(dom);
        if (eventsToTrigger) {
            count--;
            // linkEvent object
            eventData.dom = dom;
            if (eventsToTrigger.event) {
                eventsToTrigger.event(eventsToTrigger.data, event);
            }
            else {
                eventsToTrigger(event);
            }
            if (event.cancelBubble) {
                return;
            }
        }
        dom = dom.parentNode;
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        // Don't process clicks on disabled elements
        if (dom === null) {
            return;
        }
    }
}
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function stopPropagation() {
    this.cancelBubble = true;
    this.stopImmediatePropagation();
}
function attachEventToDocument(name, delegatedRoots) {
    var docEvent = function (event) {
        var count = delegatedRoots.items.size;
        if (count > 0) {
            event.stopPropagation = stopPropagation;
            // Event data needs to be object to save reference to currentTarget getter
            var eventData = {
                dom: document
            };
            try {
                Object.defineProperty(event, "currentTarget", {
                    configurable: true,
                    get: function get$$1() {
                        return eventData.dom;
                    }
                });
            }
            catch (e) {
                /* safari7 and phantomJS will crash */
            }
            dispatchEvents(event, event.target, delegatedRoots.items, count, event.type === "click", eventData);
        }
    };
    document.addEventListener(normalizeEventName(name), docEvent);
    return docEvent;
}
// tslint:disable-next-line:no-empty
function emptyFn() { }
function trapClickOnNonInteractiveElement(dom) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
    // Just set it using the onclick property so that we don't have to manage any
    // bookkeeping for it. Not sure if we need to clear it when the listener is
    // removed.
    // TODO: Only do this for the relevant Safaris maybe?
    dom.onclick = emptyFn;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function isCheckedType(type) {
    return type === "checkbox" || type === "radio";
}
function onTextInputChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onInput) {
        var event = props.onInput;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newProps, dom);
    }
}
function wrappedOnChange(e) {
    var props = this.vNode.props || EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    }
    else {
        event(e);
    }
}
function onCheckboxChange(e) {
    e.stopPropagation(); // This click should not propagate its for internal use
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    if (props.onClick) {
        var event = props.onClick;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (props.onclick) {
        props.onclick(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    applyValue(newProps, dom);
}
function processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue(nextPropsOrEmpty, dom);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            if (isCheckedType(nextPropsOrEmpty.type)) {
                dom.onclick = onCheckboxChange;
                dom.onclick.wrapped = true;
            }
            else {
                dom.oninput = onTextInputChange;
                dom.oninput.wrapped = true;
            }
            if (nextPropsOrEmpty.onChange) {
                dom.onchange = wrappedOnChange;
                dom.onchange.wrapped = true;
            }
        }
    }
}
function applyValue(nextPropsOrEmpty, dom) {
    var type = nextPropsOrEmpty.type;
    var value = nextPropsOrEmpty.value;
    var checked = nextPropsOrEmpty.checked;
    var multiple = nextPropsOrEmpty.multiple;
    var defaultValue = nextPropsOrEmpty.defaultValue;
    var hasValue = !isNullOrUndef(value);
    if (type && type !== dom.type) {
        dom.setAttribute("type", type);
    }
    if (multiple && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!isNullOrUndef(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + "";
    }
    if (isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
    else {
        if (hasValue && dom.value !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
        else if (!isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === "optgroup") {
        var children = vNode.children;
        if (isArray$$1(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        }
        else if (isVNode(children)) {
            updateChildOption(children, value);
        }
    }
    else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if ((isArray$$1(value) && value.indexOf(props.value) !== -1) ||
        props.value === value) {
        dom.selected = true;
    }
    else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
        dom.selected = props.selected || false;
    }
}
function onSelectChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onChange) {
        var event = props.onChange;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (props.onchange) {
        props.onchange(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue$1(newVNode, dom, newProps, false);
    }
}
function processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue$1(vNode, dom, nextPropsOrEmpty, mounting);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            dom.onchange = onSelectChange;
            dom.onchange.wrapped = true;
        }
    }
}
function applyValue$1(vNode, dom, nextPropsOrEmpty, mounting) {
    if (nextPropsOrEmpty.multiple !== dom.multiple) {
        dom.multiple = nextPropsOrEmpty.multiple;
    }
    var children = vNode.children;
    if (!isInvalid(children)) {
        var value = nextPropsOrEmpty.value;
        if (mounting && isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        if (isArray$$1(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        }
        else if (isVNode(children)) {
            updateChildOptionGroup(children, value);
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function wrappedOnChange$1(e) {
    var props = this.vNode.props || EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    }
    else {
        event(e);
    }
}
function onTextareaInputChange(e) {
    var vNode = this.vNode;
    var props = vNode.props || EMPTY_OBJ;
    var previousValue = props.value;
    if (props.onInput) {
        var event = props.onInput;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this.vNode;
    var newProps = newVNode.props || EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue$2(newVNode, vNode.dom, false);
    }
}
function processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue$2(nextPropsOrEmpty, dom, mounting);
    if (isControlled) {
        dom.vNode = vNode; // TODO: Remove this when implementing Fiber's
        if (mounting) {
            dom.oninput = onTextareaInputChange;
            dom.oninput.wrapped = true;
            if (nextPropsOrEmpty.onChange) {
                dom.onchange = wrappedOnChange$1;
                dom.onchange.wrapped = true;
            }
        }
    }
}
function applyValue$2(nextPropsOrEmpty, dom, mounting) {
    var value = nextPropsOrEmpty.value;
    var domValue = dom.value;
    if (isNullOrUndef(value)) {
        if (mounting) {
            var defaultValue = nextPropsOrEmpty.defaultValue;
            if (!isNullOrUndef(defaultValue)) {
                if (defaultValue !== domValue) {
                    dom.defaultValue = defaultValue;
                    dom.value = defaultValue;
                }
            }
            else if (domValue !== "") {
                dom.defaultValue = "";
                dom.value = "";
            }
        }
    }
    else {
        /* There is value so keep it controlled */
        if (domValue !== value) {
            dom.defaultValue = value;
            dom.value = value;
        }
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */
function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    if ((flags & 512 /* InputElement */) > 0) {
        processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
    }
    else if ((flags & 2048 /* SelectElement */) > 0) {
        processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
    }
    else if ((flags & 1024 /* TextareaElement */) > 0) {
        processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
    }
}
function isControlledFormElement(nextPropsOrEmpty) {
    return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type)
        ? !isNullOrUndef(nextPropsOrEmpty.checked)
        : !isNullOrUndef(nextPropsOrEmpty.value);
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function normalizeChildNodes(parentDom) {
    var dom = parentDom.firstChild;
    while (dom) {
        if (dom.nodeType === 8) {
            if (dom.data === "!") {
                var placeholder = document.createTextNode("");
                parentDom.replaceChild(placeholder, dom);
                dom = dom.nextSibling;
            }
            else {
                var lastDom = dom.previousSibling;
                parentDom.removeChild(dom);
                dom = lastDom || parentDom.firstChild;
            }
        }
        else {
            dom = dom.nextSibling;
        }
    }
}
function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    var props = vNode.props || EMPTY_OBJ;
    if (isClass) {
        var _isSVG = dom.namespaceURI === svgNS;
        var instance = createClassComponentInstance(vNode, type, props, context, _isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
        vNode.dom = input.dom;
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false; // Mount finished allow going sync
        if (options.findDOMNodeEnabled) {
            componentToDOMNodeMap.set(instance, dom);
        }
    }
    else {
        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
        hydrate(input$1, dom, lifecycle, context, isSVG);
        vNode.children = input$1;
        vNode.dom = input$1.dom;
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
    }
    return dom;
}
function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var flags = vNode.flags;
    var ref = vNode.ref;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        var newDom = mountElement(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    vNode.dom = dom;
    if (!isInvalid(children)) {
        hydrateChildren(children, dom, lifecycle, context, isSVG);
    }
    else if (dom.firstChild !== null && !isSamePropsInnerHTML(dom, props)) {
        dom.textContent = ""; // dom has content, but VNode has no children remove everything from DOM
    }
    if (props) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (!isNullOrUndef(className)) {
        if (isSVG) {
            dom.setAttribute("class", className);
        }
        else {
            dom.className = className;
        }
    }
    else {
        if (dom.className !== "") {
            dom.removeAttribute("class");
        }
    }
    if (ref) {
        mountRef(dom, ref, lifecycle);
    }
    return dom;
}
function hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
    normalizeChildNodes(parentDom);
    var dom = parentDom.firstChild;
    if (isStringOrNumber(children)) {
        if (!isNull(dom) && dom.nodeType === 3) {
            if (dom.nodeValue !== children) {
                dom.nodeValue = children;
            }
        }
        else if (children === "") {
            parentDom.appendChild(document.createTextNode(""));
        }
        else {
            parentDom.textContent = children;
        }
        if (!isNull(dom)) {
            dom = dom.nextSibling;
        }
    }
    else if (isArray$$1(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!isNull(child) && isObject$$1(child)) {
                if (!isNull(dom)) {
                    var nextSibling = dom.nextSibling;
                    hydrate(child, dom, lifecycle, context, isSVG);
                    dom = nextSibling;
                }
                else {
                    mount(child, parentDom, lifecycle, context, isSVG);
                }
            }
        }
    }
    else {
        // It's VNode
        if (!isNull(dom)) {
            hydrate(children, dom, lifecycle, context, isSVG);
            dom = dom.nextSibling;
        }
        else {
            mount(children, parentDom, lifecycle, context, isSVG);
        }
    }
    // clear any other DOM nodes, there should be only a single entry for the root
    while (dom) {
        var nextSibling$1 = dom.nextSibling;
        parentDom.removeChild(dom);
        dom = nextSibling$1;
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = mountText(vNode, null);
        vNode.dom = newDom;
        replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    var text = vNode.children;
    if (dom.nodeValue !== text) {
        dom.nodeValue = text;
    }
    vNode.dom = dom;
    return dom;
}
function hydrateVoid(vNode, dom) {
    vNode.dom = dom;
    return dom;
}
function hydrate(vNode, dom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
        hydrateComponent(vNode, dom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    else if (flags & 3970 /* Element */) {
        hydrateElement(vNode, dom, lifecycle, context, isSVG);
    }
    else if (flags & 1 /* Text */) {
        hydrateText(vNode, dom);
    }
    else if (flags & 4096 /* Void */) {
        hydrateVoid(vNode, dom);
    }
    else {
        throwError();
    }
}
function hydrateRoot(input, parentDom, lifecycle) {
    if (!isNull(parentDom)) {
        var dom = parentDom.firstChild;
        if (!isNull(dom)) {
            hydrate(input, dom, lifecycle, EMPTY_OBJ, false);
            dom = parentDom.firstChild;
            // clear any other DOM nodes, there should be only a single entry for the root
            while ((dom = dom.nextSibling)) {
                parentDom.removeChild(dom);
            }
            return true;
        }
    }
    return false;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
var componentPools = new Map();
var elementPools = new Map();
function recycleElement(vNode, lifecycle, context, isSVG) {
    var tag = vNode.type;
    var pools = elementPools.get(tag);
    if (!isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!isUndefined(recycledVNode)) {
                patchElement(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
                return vNode.dom;
            }
        }
    }
    return null;
}
function poolElement(vNode) {
    var tag = vNode.type;
    var key = vNode.key;
    var pools = elementPools.get(tag);
    if (isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        elementPools.set(tag, pools);
    }
    if (isNull(key)) {
        pools.nonKeyed.push(vNode);
    }
    else {
        var pool = pools.keyed.get(key);
        if (isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
function recycleComponent(vNode, lifecycle, context, isSVG) {
    var type = vNode.type;
    var pools = componentPools.get(type);
    if (!isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!isUndefined(recycledVNode)) {
                var flags = vNode.flags;
                var failed = patchComponent(recycledVNode, vNode, null, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0, true);
                if (!failed) {
                    return vNode.dom;
                }
            }
        }
    }
    return null;
}
function poolComponent(vNode) {
    var hooks = vNode.ref;
    var nonRecycleHooks = hooks &&
        (hooks.onComponentWillMount ||
            hooks.onComponentWillUnmount ||
            hooks.onComponentDidMount ||
            hooks.onComponentWillUpdate ||
            hooks.onComponentDidUpdate);
    if (nonRecycleHooks) {
        return;
    }
    var type = vNode.type;
    var key = vNode.key;
    var pools = componentPools.get(type);
    if (isUndefined(pools)) {
        pools = {
            keyed: new Map(),
            nonKeyed: []
        };
        componentPools.set(type, pools);
    }
    if (isNull(key)) {
        pools.nonKeyed.push(vNode);
    }
    else {
        var pool = pools.keyed.get(key);
        if (isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var flags = vNode.flags;
    var dom = vNode.dom;
    if (flags & 28 /* Component */) {
        var instance = vNode.children;
        var isStatefulComponent$$1 = (flags & 4 /* ComponentClass */) > 0;
        var props = vNode.props || EMPTY_OBJ;
        var ref = vNode.ref;
        if (!isRecycling) {
            if (isStatefulComponent$$1) {
                if (!instance._unmounted) {
                    if (!isNull(options.beforeUnmount)) {
                        options.beforeUnmount(vNode);
                    }
                    if (!isUndefined(instance.componentWillUnmount)) {
                        instance.componentWillUnmount();
                    }
                    if (ref && !isRecycling) {
                        ref(null);
                    }
                    instance._unmounted = true;
                    if (options.findDOMNodeEnabled) {
                        componentToDOMNodeMap.delete(instance);
                    }
                    unmount(instance._lastInput, null, instance._lifecycle, false, isRecycling);
                }
            }
            else {
                if (!isNullOrUndef(ref)) {
                    if (!isNullOrUndef(ref.onComponentWillUnmount)) {
                        ref.onComponentWillUnmount(dom, props);
                    }
                }
                unmount(instance, null, lifecycle, false, isRecycling);
            }
        }
        if (options.recyclingEnabled &&
            !isStatefulComponent$$1 &&
            (parentDom || canRecycle)) {
            poolComponent(vNode);
        }
    }
    else if (flags & 3970 /* Element */) {
        var ref$1 = vNode.ref;
        var props$1 = vNode.props;
        if (!isRecycling && isFunction$$1(ref$1)) {
            ref$1(null);
        }
        var children = vNode.children;
        if (!isNullOrUndef(children)) {
            if (isArray$$1(children)) {
                for (var i = 0, len = children.length; i < len; i++) {
                    var child = children[i];
                    if (!isInvalid(child) && isObject$$1(child)) {
                        unmount(child, null, lifecycle, false, isRecycling);
                    }
                }
            }
            else if (isObject$$1(children)) {
                unmount(children, null, lifecycle, false, isRecycling);
            }
        }
        if (!isNull(props$1)) {
            for (var name in props$1) {
                // do not add a hasOwnProperty check here, it affects performance
                if (props$1[name] !== null && isAttrAnEvent(name)) {
                    patchEvent(name, props$1[name], null, dom);
                    // We need to set this null, because same props otherwise come back if SCU returns false and we are recyling
                    props$1[name] = null;
                }
            }
        }
        if (options.recyclingEnabled && (parentDom || canRecycle)) {
            poolElement(vNode);
        }
    }
    if (!isNull(parentDom)) {
        removeChild(parentDom, dom);
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
// rather than use a Map, like we did before, we can use an array here
// given there shouldn't be THAT many roots on the page, the difference
// in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
var componentToDOMNodeMap = new Map();
var roots = options.roots;
/**
 * When inferno.options.findDOMNOdeEnabled is true, this function will return DOM Node by component instance
 * @param ref Component instance
 * @returns {*|null} returns dom node
 */
function findDOMNode(ref) {
    if (!options.findDOMNodeEnabled) {
        throwError();
    }
    var dom = ref && ref.nodeType ? ref : null;
    return componentToDOMNodeMap.get(ref) || dom;
}
function getRoot(dom) {
    for (var i = 0, len = roots.length; i < len; i++) {
        var root = roots[i];
        if (root.dom === dom) {
            return root;
        }
    }
    return null;
}
function setRoot(dom, input, lifecycle) {
    var root = {
        dom: dom,
        input: input,
        lifecycle: lifecycle
    };
    roots.push(root);
    return root;
}
function removeRoot(root) {
    for (var i = 0, len = roots.length; i < len; i++) {
        if (roots[i] === root) {
            roots.splice(i, 1);
            return;
        }
    }
}
var documentBody = isBrowser ? document.body : null;
/**
 * Renders virtual node tree into parent node.
 * @param {VNode | null | string | number} input vNode to be rendered
 * @param parentDom DOM node which content will be replaced by virtual node
 * @returns {InfernoChildren} rendered virtual node
 */
function render(input, parentDom) {
    if (documentBody === parentDom) {
        throwError();
    }
    if (input === NO_OP) {
        return;
    }
    var root = getRoot(parentDom);
    if (isNull(root)) {
        var lifecycle = new Lifecycle();
        if (!isInvalid(input)) {
            if (input.dom) {
                input = directClone(input);
            }
            if (!hydrateRoot(input, parentDom, lifecycle)) {
                mount(input, parentDom, lifecycle, EMPTY_OBJ, false);
            }
            root = setRoot(parentDom, input, lifecycle);
            lifecycle.trigger();
        }
    }
    else {
        var lifecycle$1 = root.lifecycle;
        lifecycle$1.listeners = [];
        if (isNullOrUndef(input)) {
            unmount(root.input, parentDom, lifecycle$1, false, false);
            removeRoot(root);
        }
        else {
            if (input.dom) {
                input = directClone(input);
            }
            patch(root.input, input, parentDom, lifecycle$1, EMPTY_OBJ, false, false);
        }
        root.input = input;
        lifecycle$1.trigger();
    }
    if (root) {
        var rootInput = root.input;
        if (rootInput && rootInput.flags & 28 /* Component */) {
            return rootInput.children;
        }
    }
}
function createRenderer(parentDom) {
    return function renderer(lastInput, nextInput) {
        if (!parentDom) {
            parentDom = lastInput;
        }
        render(nextInput, parentDom);
    };
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    if (lastVNode !== nextVNode) {
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        if (nextFlags & 28 /* Component */) {
            var isClass = (nextFlags & 4 /* ComponentClass */) > 0;
            if (lastFlags & 28 /* Component */) {
                patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling);
            }
            else {
                replaceVNode(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, isClass), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 3970 /* Element */) {
            if (lastFlags & 3970 /* Element */) {
                patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
            }
            else {
                replaceVNode(parentDom, mountElement(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 1 /* Text */) {
            if (lastFlags & 1 /* Text */) {
                patchText(lastVNode, nextVNode);
            }
            else {
                replaceVNode(parentDom, mountText(nextVNode, null), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 4096 /* Void */) {
            if (lastFlags & 4096 /* Void */) {
                patchVoid(lastVNode, nextVNode);
            }
            else {
                replaceVNode(parentDom, mountVoid(nextVNode, null), lastVNode, lifecycle, isRecycling);
            }
        }
        else {
            // Error case: mount new one replacing old one
            replaceLastChildAndUnmount(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function unmountChildren(children, dom, lifecycle, isRecycling) {
    if (isVNode(children)) {
        unmount(children, dom, lifecycle, true, isRecycling);
    }
    else if (isArray$$1(children)) {
        removeAllChildren(dom, children, lifecycle, isRecycling);
    }
    else {
        dom.textContent = "";
    }
}
function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    var nextTag = nextVNode.type;
    var lastTag = lastVNode.type;
    if (lastTag !== nextTag) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
    }
    else {
        var dom = lastVNode.dom;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        var nextRef = nextVNode.ref;
        var lastClassName = lastVNode.className;
        var nextClassName = nextVNode.className;
        nextVNode.dom = dom;
        isSVG = isSVG || (nextFlags & 128 /* SvgElement */) > 0;
        if (lastChildren !== nextChildren) {
            var childrenIsSVG = isSVG === true && nextVNode.type !== "foreignObject";
            patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, childrenIsSVG, isRecycling);
        }
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
            var nextPropsOrEmpty = nextProps || EMPTY_OBJ;
            var hasControlledValue = false;
            if (nextPropsOrEmpty !== EMPTY_OBJ) {
                var isFormElement = (nextFlags & 3584 /* FormElement */) > 0;
                if (isFormElement) {
                    hasControlledValue = isControlledFormElement(nextPropsOrEmpty);
                }
                for (var prop in nextPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    var nextValue = nextPropsOrEmpty[prop];
                    var lastValue = lastPropsOrEmpty[prop];
                    patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue);
                }
                if (isFormElement) {
                    // When inferno is recycling form element, we need to process it like it would be mounting
                    processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, isRecycling, hasControlledValue);
                }
            }
            if (lastPropsOrEmpty !== EMPTY_OBJ) {
                for (var prop$1 in lastPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    if (isNullOrUndef(nextPropsOrEmpty[prop$1]) &&
                        !isNullOrUndef(lastPropsOrEmpty[prop$1])) {
                        removeProp(prop$1, lastPropsOrEmpty[prop$1], dom, nextFlags);
                    }
                }
            }
        }
        // inlined patchProps  -- ends --
        if (lastClassName !== nextClassName) {
            if (isNullOrUndef(nextClassName)) {
                dom.removeAttribute("class");
            }
            else {
                if (isSVG) {
                    dom.setAttribute("class", nextClassName);
                }
                else {
                    dom.className = nextClassName;
                }
            }
        }
        if (nextRef) {
            if (lastVNode.ref !== nextRef || isRecycling) {
                mountRef(dom, nextRef, lifecycle);
            }
        }
    }
}
function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var patchArray = false;
    var patchKeyed = false;
    if (nextFlags & 64 /* HasNonKeyedChildren */) {
        patchArray = true;
    }
    else if ((lastFlags & 32 /* HasKeyedChildren */) > 0 &&
        (nextFlags & 32 /* HasKeyedChildren */) > 0) {
        patchKeyed = true;
        patchArray = true;
    }
    else if (isInvalid(nextChildren)) {
        unmountChildren(lastChildren, dom, lifecycle, isRecycling);
    }
    else if (isInvalid(lastChildren)) {
        if (isStringOrNumber(nextChildren)) {
            setTextContent(dom, nextChildren);
        }
        else {
            if (isArray$$1(nextChildren)) {
                mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
            }
            else {
                mount(nextChildren, dom, lifecycle, context, isSVG);
            }
        }
    }
    else if (isStringOrNumber(nextChildren)) {
        if (isStringOrNumber(lastChildren)) {
            updateTextContent(dom, nextChildren);
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            setTextContent(dom, nextChildren);
        }
    }
    else if (isArray$$1(nextChildren)) {
        if (isArray$$1(lastChildren)) {
            patchArray = true;
            if (isKeyed(lastChildren, nextChildren)) {
                patchKeyed = true;
            }
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    else if (isArray$$1(lastChildren)) {
        removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
        mount(nextChildren, dom, lifecycle, context, isSVG);
    }
    else if (isVNode(nextChildren)) {
        if (isVNode(lastChildren)) {
            patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mount(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    if (patchArray) {
        var lastLength = lastChildren.length;
        var nextLength = nextChildren.length;
        // Fast path's for both algorithms
        if (lastLength === 0) {
            if (nextLength > 0) {
                mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
            }
        }
        else if (nextLength === 0) {
            removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
        }
        else if (patchKeyed) {
            patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling, lastLength, nextLength);
        }
        else {
            patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling, lastLength, nextLength);
        }
    }
}
function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
    var lastType = lastVNode.type;
    var nextType = nextVNode.type;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    if (lastType !== nextType || lastKey !== nextKey) {
        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        return false;
    }
    else {
        var nextProps = nextVNode.props || EMPTY_OBJ;
        if (isClass) {
            var instance = lastVNode.children;
            instance._updating = true;
            if (instance._unmounted) {
                if (isNull(parentDom)) {
                    return true;
                }
                replaceChild(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, (nextVNode.flags & 4 /* ComponentClass */) > 0), lastVNode.dom);
            }
            else {
                var hasComponentDidUpdate = !isUndefined(instance.componentDidUpdate);
                var nextState = instance.state;
                // When component has componentDidUpdate hook, we need to clone lastState or will be modified by reference during update
                var lastState = hasComponentDidUpdate
                    ? combineFrom(nextState, null)
                    : nextState;
                var lastProps = instance.props;
                nextVNode.children = instance;
                instance._isSVG = isSVG;
                var lastInput = instance._lastInput;
                var nextInput = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
                // If this component was destroyed by its parent do nothing, this is no-op
                // It can happen by using external callback etc during render / update
                if (instance._unmounted) {
                    return false;
                }
                var didUpdate = true;
                // Update component before getting child context
                var childContext;
                if (!isNullOrUndef(instance.getChildContext)) {
                    childContext = instance.getChildContext();
                }
                if (isNullOrUndef(childContext)) {
                    childContext = context;
                }
                else {
                    childContext = combineFrom(context, childContext);
                }
                instance._childContext = childContext;
                if (isInvalid(nextInput)) {
                    nextInput = createVoidVNode();
                }
                else if (nextInput === NO_OP) {
                    nextInput = lastInput;
                    didUpdate = false;
                }
                else if (isStringOrNumber(nextInput)) {
                    nextInput = createTextVNode(nextInput, null);
                }
                else if (isArray$$1(nextInput)) {
                    throwError();
                }
                else if (isObject$$1(nextInput)) {
                    if (!isNull(nextInput.dom)) {
                        nextInput = directClone(nextInput);
                    }
                }
                if (nextInput.flags & 28 /* Component */) {
                    nextInput.parentVNode = nextVNode;
                }
                else if (lastInput.flags & 28 /* Component */) {
                    lastInput.parentVNode = nextVNode;
                }
                instance._lastInput = nextInput;
                instance._vNode = nextVNode;
                if (didUpdate) {
                    patch(lastInput, nextInput, parentDom, lifecycle, childContext, isSVG, isRecycling);
                    if (hasComponentDidUpdate && instance.componentDidUpdate) {
                        instance.componentDidUpdate(lastProps, lastState);
                    }
                    if (!isNull(options.afterUpdate)) {
                        options.afterUpdate(nextVNode);
                    }
                    if (options.findDOMNodeEnabled) {
                        componentToDOMNodeMap.set(instance, nextInput.dom);
                    }
                }
                nextVNode.dom = nextInput.dom;
            }
            instance._updating = false;
        }
        else {
            var shouldUpdate = true;
            var lastProps$1 = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !isNullOrUndef(nextHooks);
            var lastInput$1 = lastVNode.children;
            var nextInput$1 = lastInput$1;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput$1;
            if (lastKey !== nextKey) {
                shouldUpdate = true;
            }
            else {
                if (nextHooksDefined &&
                    !isNullOrUndef(nextHooks.onComponentShouldUpdate)) {
                    shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps$1, nextProps);
                }
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined &&
                    !isNullOrUndef(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps$1, nextProps);
                }
                nextInput$1 = nextType(nextProps, context);
                if (isInvalid(nextInput$1)) {
                    nextInput$1 = createVoidVNode();
                }
                else if (isStringOrNumber(nextInput$1) && nextInput$1 !== NO_OP) {
                    nextInput$1 = createTextVNode(nextInput$1, null);
                }
                else if (isArray$$1(nextInput$1)) {
                    throwError();
                }
                else if (isObject$$1(nextInput$1)) {
                    if (!isNull(nextInput$1.dom)) {
                        nextInput$1 = directClone(nextInput$1);
                    }
                }
                if (nextInput$1 !== NO_OP) {
                    patch(lastInput$1, nextInput$1, parentDom, lifecycle, context, isSVG, isRecycling);
                    nextVNode.children = nextInput$1;
                    if (nextHooksDefined &&
                        !isNullOrUndef(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps$1, nextProps);
                    }
                    nextVNode.dom = nextInput$1.dom;
                }
            }
            if (nextInput$1.flags & 28 /* Component */) {
                nextInput$1.parentVNode = nextVNode;
            }
            else if (lastInput$1.flags & 28 /* Component */) {
                lastInput$1.parentVNode = nextVNode;
            }
        }
    }
    return false;
}
function patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = lastVNode.dom;
    nextVNode.dom = dom;
    if (lastVNode.children !== nextText) {
        dom.nodeValue = nextText;
    }
}
function patchVoid(lastVNode, nextVNode) {
    nextVNode.dom = lastVNode.dom;
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling, lastChildrenLength, nextChildrenLength) {
    var commonLength = lastChildrenLength > nextChildrenLength
        ? nextChildrenLength
        : lastChildrenLength;
    var i = 0;
    for (; i < commonLength; i++) {
        var nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = directClone(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            var nextChild$1 = nextChildren[i];
            if (nextChild$1.dom) {
                nextChild$1 = nextChildren[i] = directClone(nextChild$1);
            }
            appendChild(dom, mount(nextChild$1, null, lifecycle, context, isSVG));
        }
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            unmount(lastChildren[i], dom, lifecycle, false, isRecycling);
        }
    }
}
function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling, aLength, bLength) {
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var aStart = 0;
    var bStart = 0;
    var i;
    var j;
    var aNode;
    var bNode;
    var nextNode;
    var nextPos;
    var node;
    var aStartNode = a[aStart];
    var bStartNode = b[bStart];
    var aEndNode = a[aEnd];
    var bEndNode = b[bEnd];
    if (bStartNode.dom) {
        b[bStart] = bStartNode = directClone(bStartNode);
    }
    if (bEndNode.dom) {
        b[bEnd] = bEndNode = directClone(bEndNode);
    }
    // Step 1
    // tslint:disable-next-line
    outer: {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            aStart++;
            bStart++;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aStartNode = a[aStart];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = directClone(bStartNode);
            }
        }
        // Sync nodes with the same key at the end.
        while (aEndNode.key === bEndNode.key) {
            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            aEnd--;
            bEnd--;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aEndNode = a[aEnd];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = directClone(bEndNode);
            }
        }
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < bLength ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = directClone(node);
                }
                bStart++;
                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    }
    else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            unmount(a[aStart++], dom, lifecycle, false, isRecycling);
        }
    }
    else {
        var aLeft = aEnd - aStart + 1;
        var bLeft = bEnd - bStart + 1;
        var sources = new Array(bLeft);
        // Mark all nodes as inserted.
        for (i = 0; i < bLeft; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if (bLeft <= 4 || aLeft * bLeft <= 16) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            }
                            else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = directClone(bNode);
                            }
                            patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                            patched++;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        }
        else {
            var keyIndex = new Map();
            // Map keys by their index in array
            for (i = bStart; i <= bEnd; i++) {
                keyIndex.set(b[i].key, i);
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLeft) {
                    j = keyIndex.get(aNode.key);
                    if (!isUndefined(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = directClone(bNode);
                        }
                        patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (aLeft === aLength && patched === 0) {
            removeAllChildren(dom, a, lifecycle, isRecycling);
            while (bStart < bLeft) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = directClone(node);
                }
                bStart++;
                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), null);
            }
        }
        else {
            i = aLeft - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (!isNull(aNode)) {
                    unmount(aNode, dom, lifecycle, true, isRecycling);
                    i--;
                }
            }
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextPos < bLength ? b[nextPos].dom : null);
                    }
                    else {
                        if (j < 0 || i !== seq[j]) {
                            pos = i + bStart;
                            node = b[pos];
                            nextPos = pos + 1;
                            insertOrAppend(dom, node.dom, nextPos < bLength ? b[nextPos].dom : null);
                        }
                        else {
                            j--;
                        }
                    }
                }
            }
            else if (patched !== bLeft) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLeft - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = directClone(node);
                        }
                        nextPos = pos + 1;
                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextPos < bLength ? b[nextPos].dom : null);
                    }
                }
            }
        }
    }
}
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var p = arr.slice(0);
    var result = [0];
    var i;
    var j;
    var u;
    var v;
    var c;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI !== -1) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = ((u + v) / 2) | 0;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}
function isAttrAnEvent(attr) {
    return attr[0] === "o" && attr[1] === "n";
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue) {
    if (lastValue !== nextValue) {
        if (skipProps.has(prop) || (hasControlledValue && prop === "value")) {
            return;
        }
        else if (booleanProps.has(prop)) {
            prop = prop === "autoFocus" ? prop.toLowerCase() : prop;
            dom[prop] = !!nextValue;
        }
        else if (strictProps.has(prop)) {
            var value = isNullOrUndef(nextValue) ? "" : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
        }
        else if (isAttrAnEvent(prop)) {
            patchEvent(prop, lastValue, nextValue, dom);
        }
        else if (isNullOrUndef(nextValue)) {
            dom.removeAttribute(prop);
        }
        else if (prop === "style") {
            patchStyle(lastValue, nextValue, dom);
        }
        else if (prop === "dangerouslySetInnerHTML") {
            var lastHtml = lastValue && lastValue.__html;
            var nextHtml = nextValue && nextValue.__html;
            if (lastHtml !== nextHtml) {
                if (!isNullOrUndef(nextHtml) && !isSameInnerHTML(dom, nextHtml)) {
                    dom.innerHTML = nextHtml;
                }
            }
        }
        else {
            // We optimize for NS being boolean. Its 99.9% time false
            if (isSVG && namespaces.has(prop)) {
                // If we end up in this path we can read property again
                dom.setAttributeNS(namespaces.get(prop), prop, nextValue);
            }
            else {
                dom.setAttribute(prop, nextValue);
            }
        }
    }
}
function patchEvent(name, lastValue, nextValue, dom) {
    if (lastValue !== nextValue) {
        if (delegatedEvents.has(name)) {
            handleEvent(name, lastValue, nextValue, dom);
        }
        else {
            var nameLowerCase = name.toLowerCase();
            var domEvent = dom[nameLowerCase];
            // if the function is wrapped, that means it's been controlled by a wrapper
            if (domEvent && domEvent.wrapped) {
                return;
            }
            if (!isFunction$$1(nextValue) && !isNullOrUndef(nextValue)) {
                var linkEvent = nextValue.event;
                if (linkEvent && isFunction$$1(linkEvent)) {
                    dom[nameLowerCase] = function (e) {
                        linkEvent(nextValue.data, e);
                    };
                }
                else {
                    throwError();
                }
            }
            else {
                dom[nameLowerCase] = nextValue;
            }
        }
    }
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    var domStyle = dom.style;
    var style;
    var value;
    if (isString$$1(nextAttrValue)) {
        domStyle.cssText = nextAttrValue;
        return;
    }
    if (!isNullOrUndef(lastAttrValue) && !isString$$1(lastAttrValue)) {
        for (style in nextAttrValue) {
            // do not add a hasOwnProperty check here, it affects performance
            value = nextAttrValue[style];
            if (value !== lastAttrValue[style]) {
                domStyle[style] =
                    !isNumber(value) || isUnitlessNumber.has(style)
                        ? value
                        : value + "px";
            }
        }
        for (style in lastAttrValue) {
            if (isNullOrUndef(nextAttrValue[style])) {
                domStyle[style] = "";
            }
        }
    }
    else {
        for (style in nextAttrValue) {
            value = nextAttrValue[style];
            domStyle[style] =
                !isNumber(value) || isUnitlessNumber.has(style) ? value : value + "px";
        }
    }
}
function removeProp(prop, lastValue, dom, nextFlags) {
    if (prop === "value") {
        // When removing value of select element, it needs to be set to null instead empty string, because empty string is valid value for option which makes that option selected
        // MS IE/Edge don't follow html spec for textArea and input elements and we need to set empty string to value in those cases to avoid "null" and "undefined" texts
        dom.value = nextFlags & 2048 /* SelectElement */ ? null : "";
    }
    else if (prop === "style") {
        dom.removeAttribute("style");
    }
    else if (isAttrAnEvent(prop)) {
        handleEvent(prop, lastValue, null, dom);
    }
    else {
        dom.removeAttribute(prop);
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function mount(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 3970 /* Element */) {
        return mountElement(vNode, parentDom, lifecycle, context, isSVG);
    }
    else if (flags & 28 /* Component */) {
        return mountComponent(vNode, parentDom, lifecycle, context, isSVG, (flags & 4 /* ComponentClass */) > 0);
    }
    else if (flags & 4096 /* Void */) {
        return mountVoid(vNode, parentDom);
    }
    else if (flags & 1 /* Text */) {
        return mountText(vNode, parentDom);
    }
    else {
        throwError();
    }
}
function mountText(vNode, parentDom) {
    var dom = document.createTextNode(vNode.children);
    vNode.dom = dom;
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountVoid(vNode, parentDom) {
    var dom = document.createTextNode("");
    vNode.dom = dom;
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    var dom;
    if (options.recyclingEnabled) {
        dom = recycleElement(vNode, lifecycle, context, isSVG);
        if (!isNull(dom)) {
            if (!isNull(parentDom)) {
                appendChild(parentDom, dom);
            }
            return dom;
        }
    }
    var flags = vNode.flags;
    isSVG = isSVG || (flags & 128 /* SvgElement */) > 0;
    dom = documentCreateElement(vNode.type, isSVG);
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var ref = vNode.ref;
    vNode.dom = dom;
    if (!isInvalid(children)) {
        if (isStringOrNumber(children)) {
            setTextContent(dom, children);
        }
        else {
            var childrenIsSVG = isSVG === true && vNode.type !== "foreignObject";
            if (isArray$$1(children)) {
                mountArrayChildren(children, dom, lifecycle, context, childrenIsSVG);
            }
            else if (isVNode(children)) {
                mount(children, dom, lifecycle, context, childrenIsSVG);
            }
        }
    }
    if (!isNull(props)) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (className !== null) {
        if (isSVG) {
            dom.setAttribute("class", className);
        }
        else {
            dom.className = className;
        }
    }
    if (!isNull(ref)) {
        mountRef(dom, ref, lifecycle);
    }
    if (!isNull(parentDom)) {
        appendChild(parentDom, dom);
    }
    return dom;
}
function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        // Verify can string/number be here. might cause de-opt. - Normalization takes care of it.
        if (!isInvalid(child)) {
            if (child.dom) {
                children[i] = child = directClone(child);
            }
            mount(children[i], dom, lifecycle, context, isSVG);
        }
    }
}
function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    var dom;
    if (options.recyclingEnabled) {
        dom = recycleComponent(vNode, lifecycle, context, isSVG);
        if (!isNull(dom)) {
            if (!isNull(parentDom)) {
                appendChild(parentDom, dom);
            }
            return dom;
        }
    }
    var type = vNode.type;
    var props = vNode.props || EMPTY_OBJ;
    var ref = vNode.ref;
    if (isClass) {
        var instance = createClassComponentInstance(vNode, type, props, context, isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
        if (!isNull(parentDom)) {
            appendChild(parentDom, dom);
        }
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false;
        if (options.findDOMNodeEnabled) {
            componentToDOMNodeMap.set(instance, dom);
        }
    }
    else {
        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
        vNode.dom = dom = mount(input$1, null, lifecycle, context, isSVG);
        vNode.children = input$1;
        mountFunctionalComponentCallbacks(props, ref, dom, lifecycle);
        if (!isNull(parentDom)) {
            appendChild(parentDom, dom);
        }
    }
    return dom;
}
function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (ref) {
        if (isFunction$$1(ref)) {
            ref(instance);
        }
        else {
            throwError();
        }
    }
    var hasDidMount = !isUndefined(instance.componentDidMount);
    var afterMount = options.afterMount;
    if (hasDidMount || !isNull(afterMount)) {
        lifecycle.addListener((function () {
            instance._updating = true;
            if (afterMount) {
                afterMount(vNode);
            }
            if (hasDidMount) {
                instance.componentDidMount();
            }
            instance._updating = false;
        }));
    }
}
function mountFunctionalComponentCallbacks(props, ref, dom, lifecycle) {
    if (ref) {
        if (!isNullOrUndef(ref.onComponentWillMount)) {
            ref.onComponentWillMount(props);
        }
        if (!isNullOrUndef(ref.onComponentDidMount)) {
            lifecycle.addListener((function () { return ref.onComponentDidMount(dom, props); }));
        }
    }
}
function mountRef(dom, value, lifecycle) {
    if (isFunction$$1(value)) {
        lifecycle.addListener((function () { return value(dom); }));
    }
    else {
        if (isInvalid(value)) {
            return;
        }
        throwError();
    }
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = {};
function createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
    if (isUndefined(context)) {
        context = EMPTY_OBJ; // Context should not be mutable
    }
    var instance = new Component(props, context);
    vNode.children = instance;
    instance._blockSetState = false;
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    // setState callbacks must fire after render is done when called from componentWillReceiveProps or componentWillMount
    instance._lifecycle = lifecycle;
    instance._unmounted = false;
    instance._isSVG = isSVG;
    if (!isNullOrUndef(instance.componentWillMount)) {
        instance._blockRender = true;
        instance.componentWillMount();
        if (instance._pendingSetState) {
            var state = instance.state;
            var pending = instance._pendingState;
            if (state === null) {
                instance.state = pending;
            }
            else {
                for (var key in pending) {
                    state[key] = pending[key];
                }
            }
            instance._pendingSetState = false;
            instance._pendingState = null;
        }
        instance._blockRender = false;
    }
    var childContext;
    if (!isNullOrUndef(instance.getChildContext)) {
        childContext = instance.getChildContext();
    }
    if (isNullOrUndef(childContext)) {
        instance._childContext = context;
    }
    else {
        instance._childContext = combineFrom(context, childContext);
    }
    if (!isNull(options.beforeRender)) {
        options.beforeRender(instance);
    }
    var input = instance.render(props, instance.state, context);
    if (!isNull(options.afterRender)) {
        options.afterRender(instance);
    }
    if (isArray$$1(input)) {
        throwError();
    }
    else if (isInvalid(input)) {
        input = createVoidVNode();
    }
    else if (isStringOrNumber(input)) {
        input = createTextVNode(input, null);
    }
    else {
        if (input.dom) {
            input = directClone(input);
        }
        if (input.flags & 28 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // so we break monomorphism on our input and supply it our vNode as parentVNode
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = vNode;
        }
    }
    instance._lastInput = input;
    return instance;
}
function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
    replaceVNode(parentDom, mount(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
}
function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
    unmount(vNode, null, lifecycle, false, isRecycling);
    replaceChild(parentDom, dom, vNode.dom);
}
function createFunctionalComponentInput(vNode, component, props, context) {
    var input = component(props, context);
    if (isArray$$1(input)) {
        throwError();
    }
    else if (isInvalid(input)) {
        input = createVoidVNode();
    }
    else if (isStringOrNumber(input)) {
        input = createTextVNode(input, null);
    }
    else {
        if (input.dom) {
            input = directClone(input);
        }
        if (input.flags & 28 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // so we break monomorphism on our input and supply it our vNode as parentVNode
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = vNode;
        }
    }
    return input;
}
function setTextContent(dom, text) {
    if (text !== "") {
        dom.textContent = text;
    }
    else {
        dom.appendChild(document.createTextNode(""));
    }
}
function updateTextContent(dom, text) {
    var textNode = dom.firstChild;
    // Guard against external change on DOM node.
    if (isNull(textNode)) {
        setTextContent(dom, text);
    }
    else {
        textNode.nodeValue = text;
    }
}
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
function insertOrAppend(parentDom, newNode, nextNode) {
    if (isNullOrUndef(nextNode)) {
        appendChild(parentDom, newNode);
    }
    else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(svgNS, tag);
    }
    else {
        return document.createElement(tag);
    }
}
function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    unmount(lastNode, null, lifecycle, false, isRecycling);
    var dom = mount(nextNode, null, lifecycle, context, isSVG);
    nextNode.dom = dom;
    replaceChild(parentDom, dom, lastNode.dom);
}
function replaceChild(parentDom, newDom, lastDom) {
    if (!parentDom) {
        parentDom = lastDom.parentNode;
    }
    parentDom.replaceChild(newDom, lastDom);
}
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
function removeAllChildren(dom, children, lifecycle, isRecycling) {
    if (!options.recyclingEnabled || (options.recyclingEnabled && !isRecycling)) {
        removeChildren(null, children, lifecycle, isRecycling);
    }
    dom.textContent = "";
}
function removeChildren(dom, children, lifecycle, isRecycling) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!isInvalid(child)) {
            unmount(child, dom, lifecycle, true, isRecycling);
        }
    }
}
function isKeyed(lastChildren, nextChildren) {
    return (nextChildren.length > 0 &&
        !isNullOrUndef(nextChildren[0]) &&
        !isNullOrUndef(nextChildren[0].key) &&
        lastChildren.length > 0 &&
        !isNullOrUndef(lastChildren[0]) &&
        !isNullOrUndef(lastChildren[0].key));
}
function isSameInnerHTML(dom, innerHTML) {
    var tempdom = document.createElement("i");
    tempdom.innerHTML = innerHTML;
    return tempdom.innerHTML === dom.innerHTML;
}
function isSamePropsInnerHTML(dom, props) {
    return Boolean(props &&
        props.dangerouslySetInnerHTML &&
        props.dangerouslySetInnerHTML.__html &&
        isSameInnerHTML(dom, props.dangerouslySetInnerHTML.__html));
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/**
 * Creates virtual node
 * @param {number} flags
 * @param {string|Function|null} type
 * @param {string|null=} className
 * @param {object=} children
 * @param {object=} props
 * @param {*=} key
 * @param {object|Function=} ref
 * @param {boolean=} noNormalise
 * @returns {VNode} returns new virtual node
 */
function createVNode(flags, type, className, children, props, key, ref, noNormalise) {
    if (flags & 16 /* ComponentUnknown */) {
        flags = isStatefulComponent(type)
            ? 4 /* ComponentClass */
            : 8 /* ComponentFunction */;
    }
    var vNode = {
        children: children === void 0 ? null : children,
        className: className === void 0 ? null : className,
        dom: null,
        flags: flags,
        key: key === void 0 ? null : key,
        props: props === void 0 ? null : props,
        ref: ref === void 0 ? null : ref,
        type: type
    };
    if (noNormalise !== true) {
        normalize(vNode);
    }
    if (options.createVNode !== null) {
        options.createVNode(vNode);
    }
    return vNode;
}
function directClone(vNodeToClone) {
    var newVNode;
    var flags = vNodeToClone.flags;
    if (flags & 28 /* Component */) {
        var props;
        var propsToClone = vNodeToClone.props;
        if (isNull(propsToClone)) {
            props = EMPTY_OBJ;
        }
        else {
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
        newVNode = createVNode(flags, vNodeToClone.type, null, null, props, vNodeToClone.key, vNodeToClone.ref, true);
        var newProps = newVNode.props;
        var newChildren = newProps.children;
        // we need to also clone component children that are in props
        // as the children may also have been hoisted
        if (newChildren) {
            if (isArray$$1(newChildren)) {
                var len = newChildren.length;
                if (len > 0) {
                    var tmpArray = [];
                    for (var i = 0; i < len; i++) {
                        var child = newChildren[i];
                        if (isStringOrNumber(child)) {
                            tmpArray.push(child);
                        }
                        else if (!isInvalid(child) && isVNode(child)) {
                            tmpArray.push(directClone(child));
                        }
                    }
                    newProps.children = tmpArray;
                }
            }
            else if (isVNode(newChildren)) {
                newProps.children = directClone(newChildren);
            }
        }
        newVNode.children = null;
    }
    else if (flags & 3970 /* Element */) {
        var children = vNodeToClone.children;
        var props$1;
        var propsToClone$1 = vNodeToClone.props;
        if (propsToClone$1 === null) {
            props$1 = EMPTY_OBJ;
        }
        else {
            props$1 = {};
            for (var key$1 in propsToClone$1) {
                props$1[key$1] = propsToClone$1[key$1];
            }
        }
        newVNode = createVNode(flags, vNodeToClone.type, vNodeToClone.className, children, props$1, vNodeToClone.key, vNodeToClone.ref, !children);
    }
    else if (flags & 1 /* Text */) {
        newVNode = createTextVNode(vNodeToClone.children, vNodeToClone.key);
    }
    return newVNode;
}
/*
 directClone is preferred over cloneVNode and used internally also.
 This function makes Inferno backwards compatible.
 And can be tree-shaked by modern bundlers

 Would be nice to combine this with directClone but could not do it without breaking change
 */
/**
 * Clones given virtual node by creating new instance of it
 * @param {VNode} vNodeToClone virtual node to be cloned
 * @param {Props=} props additional props for new virtual node
 * @param {...*} _children new children for new virtual node
 * @returns {VNode} new virtual node
 */
function cloneVNode(vNodeToClone, props) {
    var _children = [], len$2 = arguments.length - 2;
    while ( len$2-- > 0 ) _children[ len$2 ] = arguments[ len$2 + 2 ];

    var children = _children;
    var childrenLen = _children.length;
    if (childrenLen > 0 && !isUndefined(_children[0])) {
        if (!props) {
            props = {};
        }
        if (childrenLen === 1) {
            children = _children[0];
        }
        if (!isUndefined(children)) {
            props.children = children;
        }
    }
    var newVNode;
    if (isArray$$1(vNodeToClone)) {
        var tmpArray = [];
        for (var i = 0, len = vNodeToClone.length; i < len; i++) {
            tmpArray.push(directClone(vNodeToClone[i]));
        }
        newVNode = tmpArray;
    }
    else {
        var flags = vNodeToClone.flags;
        var className = vNodeToClone.className;
        var key = vNodeToClone.key;
        var ref = vNodeToClone.ref;
        if (props) {
            if (props.hasOwnProperty("className")) {
                className = props.className;
            }
            if (props.hasOwnProperty("ref")) {
                ref = props.ref;
            }
            if (props.hasOwnProperty("key")) {
                key = props.key;
            }
        }
        if (flags & 28 /* Component */) {
            newVNode = createVNode(flags, vNodeToClone.type, className, null, !vNodeToClone.props && !props
                ? EMPTY_OBJ
                : combineFrom(vNodeToClone.props, props), key, ref, true);
            var newProps = newVNode.props;
            if (newProps) {
                var newChildren = newProps.children;
                // we need to also clone component children that are in props
                // as the children may also have been hoisted
                if (newChildren) {
                    if (isArray$$1(newChildren)) {
                        var len$1 = newChildren.length;
                        if (len$1 > 0) {
                            var tmpArray$1 = [];
                            for (var i$1 = 0; i$1 < len$1; i$1++) {
                                var child = newChildren[i$1];
                                if (isStringOrNumber(child)) {
                                    tmpArray$1.push(child);
                                }
                                else if (!isInvalid(child) && isVNode(child)) {
                                    tmpArray$1.push(directClone(child));
                                }
                            }
                            newProps.children = tmpArray$1;
                        }
                    }
                    else if (isVNode(newChildren)) {
                        newProps.children = directClone(newChildren);
                    }
                }
            }
            newVNode.children = null;
        }
        else if (flags & 3970 /* Element */) {
            children =
                props && !isUndefined(props.children)
                    ? props.children
                    : vNodeToClone.children;
            newVNode = createVNode(flags, vNodeToClone.type, className, children, !vNodeToClone.props && !props
                ? EMPTY_OBJ
                : combineFrom(vNodeToClone.props, props), key, ref, false);
        }
        else if (flags & 1 /* Text */) {
            newVNode = createTextVNode(vNodeToClone.children, key);
        }
    }
    return newVNode;
}
function createVoidVNode() {
    return createVNode(4096 /* Void */, null);
}
function createTextVNode(text, key) {
    return createVNode(1 /* Text */, null, null, text, null, key);
}
function isVNode(o) {
    return !!o.flags;
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
function applyKey(key, vNode) {
    vNode.key = key;
    return vNode;
}
function applyKeyIfMissing(key, vNode) {
    if (isNumber(key)) {
        key = "." + key;
    }
    if (isNull(vNode.key) || vNode.key[0] === ".") {
        return applyKey(key, vNode);
    }
    return vNode;
}
function applyKeyPrefix(key, vNode) {
    vNode.key = key + vNode.key;
    return vNode;
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        var key = currentKey + "." + index;
        if (!isInvalid(n)) {
            if (isArray$$1(n)) {
                _normalizeVNodes(n, result, 0, key);
            }
            else {
                if (isStringOrNumber(n)) {
                    n = createTextVNode(n, null);
                }
                else if ((isVNode(n) && n.dom) || (n.key && n.key[0] === ".")) {
                    n = directClone(n);
                }
                if (isNull(n.key) || n.key[0] === ".") {
                    n = applyKey(key, n);
                }
                else {
                    n = applyKeyPrefix(currentKey, n);
                }
                result.push(n);
            }
        }
    }
}
function normalizeVNodes(nodes) {
    var newNodes;
    // we assign $ which basically means we've flagged this array for future note
    // if it comes back again, we need to clone it, as people are using it
    // in an immutable way
    // tslint:disable
    if (nodes["$"] === true) {
        nodes = nodes.slice();
    }
    else {
        nodes["$"] = true;
    }
    // tslint:enable
    for (var i = 0, len = nodes.length; i < len; i++) {
        var n = nodes[i];
        if (isInvalid(n) || isArray$$1(n)) {
            var result = (newNodes || nodes).slice(0, i);
            _normalizeVNodes(nodes, result, i, "");
            return result;
        }
        else if (isStringOrNumber(n)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, createTextVNode(n, null)));
        }
        else if ((isVNode(n) && n.dom !== null) ||
            (isNull(n.key) && (n.flags & 64 /* HasNonKeyedChildren */) === 0)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, directClone(n)));
        }
        else if (newNodes) {
            newNodes.push(applyKeyIfMissing(i, directClone(n)));
        }
    }
    return newNodes || nodes;
}
function normalizeChildren(children) {
    if (isArray$$1(children)) {
        return normalizeVNodes(children);
    }
    else if (isVNode(children) && children.dom !== null) {
        return directClone(children);
    }
    return children;
}
function normalizeProps(vNode, props, children) {
    if (vNode.flags & 3970 /* Element */) {
        if (isNullOrUndef(children) && props.hasOwnProperty("children")) {
            vNode.children = props.children;
        }
        if (props.hasOwnProperty("className")) {
            vNode.className = props.className || null;
            delete props.className;
        }
    }
    if (props.hasOwnProperty("ref")) {
        vNode.ref = props.ref;
        delete props.ref;
    }
    if (props.hasOwnProperty("key")) {
        vNode.key = props.key;
        delete props.key;
    }
}
function getFlagsForElementVnode(type) {
    if (type === "svg") {
        return 128 /* SvgElement */;
    }
    else if (type === "input") {
        return 512 /* InputElement */;
    }
    else if (type === "select") {
        return 2048 /* SelectElement */;
    }
    else if (type === "textarea") {
        return 1024 /* TextareaElement */;
    }
    else if (type === "media") {
        return 256 /* MediaElement */;
    }
    return 2 /* HtmlElement */;
}
function normalize(vNode) {
    var props = vNode.props;
    var children = vNode.children;
    // convert a wrongly created type back to element
    // Primitive node doesn't have defaultProps, only Component
    if (vNode.flags & 28 /* Component */) {
        // set default props
        var type = vNode.type;
        var defaultProps = type.defaultProps;
        if (!isNullOrUndef(defaultProps)) {
            if (!props) {
                props = vNode.props = defaultProps; // Create new object if only defaultProps given
            }
            else {
                for (var prop in defaultProps) {
                    if (isUndefined(props[prop])) {
                        props[prop] = defaultProps[prop];
                    }
                }
            }
        }
        if (isString$$1(type)) {
            vNode.flags = getFlagsForElementVnode(type);
            if (props && props.children) {
                vNode.children = props.children;
                children = props.children;
            }
        }
    }
    if (props) {
        normalizeProps(vNode, props, children);
        if (!isInvalid(props.children)) {
            props.children = normalizeChildren(props.children);
        }
    }
    if (!isInvalid(children)) {
        vNode.children = normalizeChildren(children);
    }
    
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function linkEvent(data, event) {
    if (isFunction$$1(event)) {
        return { data: data, event: event };
    }
    return null; // Return null when event is invalid, to avoid creating unnecessary event handlers
}

/**
 * @module Inferno
 */ /** TypeDoc Comment */
/* tslint:disable:object-literal-sort-keys */
var version = "3.10.1";
// we duplicate it so it plays nicely with different module loading systems
var index = {
    EMPTY_OBJ: EMPTY_OBJ,
    NO_OP: NO_OP,
    cloneVNode: cloneVNode,
    createRenderer: createRenderer,
    createVNode: createVNode,
    findDOMNode: findDOMNode,
    getFlagsForElementVnode: getFlagsForElementVnode,
    internal_DOMNodeMap: componentToDOMNodeMap,
    internal_isUnitlessNumber: isUnitlessNumber,
    internal_normalize: normalize,
    internal_patch: patch,
    linkEvent: linkEvent,
    options: options,
    render: render,
    version: version
};

exports['default'] = index;
exports.EMPTY_OBJ = EMPTY_OBJ;
exports.NO_OP = NO_OP;
exports.cloneVNode = cloneVNode;
exports.createRenderer = createRenderer;
exports.createVNode = createVNode;
exports.findDOMNode = findDOMNode;
exports.getFlagsForElementVnode = getFlagsForElementVnode;
exports.internal_DOMNodeMap = componentToDOMNodeMap;
exports.internal_isUnitlessNumber = isUnitlessNumber;
exports.internal_normalize = normalize;
exports.internal_patch = patch;
exports.linkEvent = linkEvent;
exports.options = options;
exports.render = render;
exports.version = version;
});

unwrapExports(dist);

var inferno = createCommonjsModule(function (module) {
module.exports = dist.default;
module.exports.default = module.exports;
});

var inferno_1 = inferno.render;

/**
 * Helper method to create an object for a new node.
 *
 * @private
 * @return {void}
 */
function blankNode() {
    return {
        text: 'New Node',
        itree: {
            state: {
                editing: true,
                focused: true
            }
        }
    };
}

var dist$1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });



/**
 * @module Inferno-Shared
 */ /** TypeDoc Comment */
var NO_OP = "$NO_OP";
var ERROR_MSG = "a runtime error occured! Use Inferno in development environment to find the error.";
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray$$1 = Array.isArray;
function isStringOrNumber(o) {
    var type = typeof o;
    return type === "string" || type === "number";
}
function isNullOrUndef(o) {
    return isUndefined(o) || isNull(o);
}
function isInvalid(o) {
    return isNull(o) || o === false || isTrue(o) || isUndefined(o);
}
function isFunction$$1(o) {
    return typeof o === "function";
}
function isNull(o) {
    return o === null;
}
function isTrue(o) {
    return o === true;
}
function isUndefined(o) {
    return o === void 0;
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(("Inferno Error: " + message));
}
function combineFrom(first, second) {
    var out = {};
    if (first) {
        for (var key in first) {
            out[key] = first[key];
        }
    }
    if (second) {
        for (var key$1 in second) {
            out[key$1] = second[key$1];
        }
    }
    return out;
}
function Lifecycle() {
    this.listeners = [];
}
Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger() {
    var listeners = this.listeners;
    var listener;
    // We need to remove current listener from array when calling it, because more listeners might be added
    while ((listener = listeners.shift())) {
        listener();
    }
};

/**
 * @module Inferno-Component
 */ /** TypeDoc Comment */
// Make sure u use EMPTY_OBJ from 'inferno', otherwise it'll be a different reference
var componentCallbackQueue = new Map();
var resolvedPromise = Promise.resolve();
function addToQueue(component, force, callback) {
    var queue = componentCallbackQueue.get(component);
    if (queue === void 0) {
        queue = [];
        componentCallbackQueue.set(component, queue);
        resolvedPromise.then((function () {
            componentCallbackQueue.delete(component);
            component._updating = true;
            applyState(component, force, (function () {
                for (var i = 0, len = queue.length; i < len; i++) {
                    queue[i].call(component);
                }
            }));
            component._updating = false;
        }));
    }
    if (!isNullOrUndef(callback)) {
        queue.push(callback);
    }
}
function queueStateChanges(component, newState, callback) {
    if (isFunction$$1(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    var pending = component._pendingState;
    if (isNullOrUndef(pending)) {
        component._pendingState = newState;
    }
    else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (!component._pendingSetState && !component._blockRender) {
        if (!component._updating) {
            component._pendingSetState = true;
            component._updating = true;
            applyState(component, false, callback);
            component._updating = false;
        }
        else {
            addToQueue(component, false, callback);
        }
    }
    else {
        component._pendingSetState = true;
        if (isFunction$$1(callback) && component._blockRender) {
            component._lifecycle.addListener(callback.bind(component));
        }
    }
}
function applyState(component, force, callback) {
    if (component._unmounted) {
        return;
    }
    if (force || !component._blockRender) {
        component._pendingSetState = false;
        var pendingState = component._pendingState;
        var prevState = component.state;
        var nextState = combineFrom(prevState, pendingState);
        var props = component.props;
        var context = component.context;
        component._pendingState = null;
        var nextInput;
        var renderOutput = component._updateComponent(prevState, nextState, props, props, context, force, true);
        var didUpdate = true;
        if (isInvalid(renderOutput)) {
            nextInput = inferno.createVNode(4096 /* Void */, null);
        }
        else if (renderOutput === NO_OP) {
            nextInput = component._lastInput;
            didUpdate = false;
        }
        else if (isStringOrNumber(renderOutput)) {
            nextInput = inferno.createVNode(1 /* Text */, null, null, renderOutput);
        }
        else if (isArray$$1(renderOutput)) {
            return throwError();
        }
        else {
            nextInput = renderOutput;
        }
        var lastInput = component._lastInput;
        var vNode = component._vNode;
        var parentDom = (lastInput.dom && lastInput.dom.parentNode) ||
            (lastInput.dom = vNode.dom);
        if (nextInput.flags & 28 /* Component */) {
            nextInput.parentVNode = vNode;
        }
        component._lastInput = nextInput;
        if (didUpdate) {
            var childContext;
            if (!isNullOrUndef(component.getChildContext)) {
                childContext = component.getChildContext();
            }
            if (isNullOrUndef(childContext)) {
                childContext = component._childContext;
            }
            else {
                childContext = combineFrom(context, childContext);
            }
            var lifeCycle = component._lifecycle;
            inferno.internal_patch(lastInput, nextInput, parentDom, lifeCycle, childContext, component._isSVG, false);
            // If this component was unmounted by its parent, do nothing. This is no-op
            if (component._unmounted) {
                return;
            }
            lifeCycle.trigger();
            if (!isNullOrUndef(component.componentDidUpdate)) {
                component.componentDidUpdate(props, prevState, context);
            }
            if (!isNull(inferno.options.afterUpdate)) {
                inferno.options.afterUpdate(vNode);
            }
        }
        var dom = (vNode.dom = nextInput.dom);
        if (inferno.options.findDOMNodeEnabled) {
            inferno.internal_DOMNodeMap.set(component, nextInput.dom);
        }
        while (!isNullOrUndef((vNode = vNode.parentVNode))) {
            if ((vNode.flags & 28 /* Component */) > 0) {
                vNode.dom = dom;
            }
        }
    }
    else {
        component.state = component._pendingState;
        component._pendingState = null;
    }
    if (isFunction$$1(callback)) {
        callback.call(component);
    }
}
var Component = function Component(props, context) {
    this.state = null;
    this._blockRender = false;
    this._blockSetState = true;
    this._pendingSetState = false;
    this._pendingState = null;
    this._lastInput = null;
    this._vNode = null;
    this._unmounted = false;
    this._lifecycle = null;
    this._childContext = null;
    this._isSVG = false;
    this._updating = true;
    /** @type {object} */
    this.props = props || inferno.EMPTY_OBJ;
    /** @type {object} */
    this.context = context || inferno.EMPTY_OBJ; // context should not be mutable
};
Component.prototype.forceUpdate = function forceUpdate (callback) {
    if (this._unmounted) {
        return;
    }
    applyState(this, true, callback);
};
Component.prototype.setState = function setState (newState, callback) {
    if (this._unmounted) {
        return;
    }
    if (!this._blockSetState) {
        queueStateChanges(this, newState, callback);
    }
    else {
        throwError();
    }
};
Component.prototype._updateComponent = function _updateComponent (prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
    if (this._unmounted === true) {
        throwError();
    }
    if (prevProps !== nextProps ||
        nextProps === inferno.EMPTY_OBJ ||
        prevState !== nextState ||
        force) {
        if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ) {
            if (!isNullOrUndef(this.componentWillReceiveProps) && !fromSetState) {
                this._blockRender = true;
                this.componentWillReceiveProps(nextProps, context);
                // If this component was removed during its own update do nothing...
                if (this._unmounted) {
                    return NO_OP;
                }
                this._blockRender = false;
            }
            if (this._pendingSetState) {
                nextState = combineFrom(nextState, this._pendingState);
                this._pendingSetState = false;
                this._pendingState = null;
            }
        }
        /* Update if scu is not defined, or it returns truthy value or force */
        if (force ||
            isNullOrUndef(this.shouldComponentUpdate) ||
            (this.shouldComponentUpdate &&
                this.shouldComponentUpdate(nextProps, nextState, context))) {
            if (!isNullOrUndef(this.componentWillUpdate)) {
                this._blockSetState = true;
                this.componentWillUpdate(nextProps, nextState, context);
                this._blockSetState = false;
            }
            this.props = nextProps;
            this.state = nextState;
            this.context = context;
            if (inferno.options.beforeRender) {
                inferno.options.beforeRender(this);
            }
            var render = this.render(nextProps, nextState, context);
            if (inferno.options.afterRender) {
                inferno.options.afterRender(this);
            }
            return render;
        }
        else {
            this.props = nextProps;
            this.state = nextState;
            this.context = context;
        }
    }
    return NO_OP;
};
// tslint:disable-next-line:no-empty
Component.prototype.render = function render (nextProps, nextState, nextContext) { };

exports['default'] = Component;
});

unwrapExports(dist$1);

var infernoComponent = createCommonjsModule(function (module) {
module.exports = dist$1.default;
module.exports.default = module.exports;
});

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var createVNode$4 = inferno.createVNode;

var Checkbox = function (_Component) {
    inherits(Checkbox, _Component);

    function Checkbox() {
        classCallCheck(this, Checkbox);
        return possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
    }

    createClass(Checkbox, [{
        key: 'click',
        value: function click(event) {
            var _this2 = this;

            // Define our default handler
            var handler = function handler() {
                _this2.props.node.toggleCheck();
            };

            // Emit an event with our forwarded MouseEvent, node, and default handler
            this.props.dom._tree.emit('node.click', event, this.props.node, handler);

            // Unless default is prevented, auto call our default handler
            if (!event.treeDefaultPrevented) {
                handler();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return createVNode$4(512, 'input', null, null, {
                'checked': this.props.node.checked(),
                'indeterminate': this.props.indeterminate,
                'onClick': this.click.bind(this),
                'type': 'checkbox'
            });
        }
    }]);
    return Checkbox;
}(infernoComponent);

/**
 * Utility method for parsing and merging custom class names.
 *
 * @private
 * @param {TreeNode} node Node object.
 * @param {string} type 'li' or 'a' attribute object type.
 * @return {Array} Processed class names
 */
var classlist = (function (node) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'li';

    var nodeAttrs = node.itree[type].attributes;
    var classNames = [];

    // Append any custom class names
    var customClasses = nodeAttrs.class || nodeAttrs.className;

    // Support callbacks
    if (_$1.isFunction(customClasses)) {
        customClasses = customClasses(node);
    }

    // Convert custom classes into an array and concat
    if (!_$1.isEmpty(customClasses)) {
        if (_$1.isString(customClasses)) {
            // Support periods for backwards compat with hyperscript-formatted classes
            classNames = classNames.concat(customClasses.split(/[\s\.]+/));
        } else if (_$1.isArray(customClasses)) {
            classNames = classNames.concat(customClasses);
        }
    }

    return classNames;
});

var createVNode$5 = inferno.createVNode;

var EditToolbar = function (_Component) {
    inherits(EditToolbar, _Component);

    function EditToolbar() {
        classCallCheck(this, EditToolbar);
        return possibleConstructorReturn(this, (EditToolbar.__proto__ || Object.getPrototypeOf(EditToolbar)).apply(this, arguments));
    }

    createClass(EditToolbar, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return false;
        }
    }, {
        key: 'add',
        value: function add(event) {
            event.stopPropagation();

            this.props.node.addChild(blankNode());
            this.props.node.expand();
        }
    }, {
        key: 'edit',
        value: function edit(event) {
            event.stopPropagation();

            this.props.node.toggleEditing();
        }
    }, {
        key: 'remove',
        value: function remove(event) {
            event.stopPropagation();

            this.props.node.remove();
        }
    }, {
        key: 'render',
        value: function render() {
            var buttons = [];

            if (this.props.dom._tree.config.editing.edit) {
                buttons.push(createVNode$5(2, 'a', 'btn icon icon-pencil', null, {
                    'onclick': this.edit.bind(this),
                    'title': 'Edit this node'
                }));
            }

            if (this.props.dom._tree.config.editing.add) {
                buttons.push(createVNode$5(2, 'a', 'btn icon icon-plus', null, {
                    'onclick': this.add.bind(this),
                    'title': 'Add a child node'
                }));
            }

            if (this.props.dom._tree.config.editing.remove) {
                buttons.push(createVNode$5(2, 'a', 'btn icon icon-minus', null, {
                    'onclick': this.remove.bind(this),
                    'title': 'Remove this node'
                }));
            }

            return createVNode$5(2, 'span', 'btn-group', buttons);
        }
    }]);
    return EditToolbar;
}(infernoComponent);

var createVNode$6 = inferno.createVNode;

var EmptyList = function (_Component) {
    inherits(EmptyList, _Component);

    function EmptyList() {
        classCallCheck(this, EmptyList);
        return possibleConstructorReturn(this, (EmptyList.__proto__ || Object.getPrototypeOf(EmptyList)).apply(this, arguments));
    }

    createClass(EmptyList, [{
        key: 'render',
        value: function render() {
            return createVNode$6(2, 'ol', null, createVNode$6(2, 'li', 'leaf', createVNode$6(2, 'span', 'title icon icon-file-empty empty', this.props.text)));
        }
    }]);
    return EmptyList;
}(infernoComponent);

'use strict';

/**
 * Compares all keys on the given state. Returns true if any difference exists.
 *
 * @private
 * @category DOM
 * @param {object} previousState Previous state.
 * @param {object} currentState  Current state.
 * @return {boolean} Difference was found.
 */
function stateComparator(previousState, currentState) {
    // Always treat dirty flag as a state difference
    var isDirty = currentState.dirty || false;

    if (!isDirty) {
        _$1.each(Object.keys(currentState), function (key) {
            if (key !== 'dirty' && currentState[key] !== previousState[key]) {
                isDirty = true;
                return false;
            }
        });
    }

    return isDirty;
}

var createVNode$8 = inferno.createVNode;

var EditForm = function (_Component) {
    inherits(EditForm, _Component);

    function EditForm(props) {
        classCallCheck(this, EditForm);

        var _this = possibleConstructorReturn(this, (EditForm.__proto__ || Object.getPrototypeOf(EditForm)).call(this, props));

        _this.state = _this.getStateFromNodes(props.node);
        return _this;
    }

    createClass(EditForm, [{
        key: 'getStateFromNodes',
        value: function getStateFromNodes(node) {
            return {
                text: node.text
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(data) {
            this.setState(this.getStateFromNodes(data.node));
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return stateComparator(this.state, nextState);
        }
    }, {
        key: 'click',
        value: function click(event) {
            var _this2 = this;

            // Define our default handler
            var handler = function handler() {
                _this2.props.node.toggleCheck();
            };

            // Emit an event with our forwarded MouseEvent, node, and default handler
            this.props.dom._tree.emit('node.click', event, this.props.node, handler);

            // Unless default is prevented, auto call our default handler
            if (!event.treeDefaultPrevented) {
                handler();
            }
        }
    }, {
        key: 'keypress',
        value: function keypress(event) {
            if (event.which === ENTER) {
                return this.save();
            }
        }
    }, {
        key: 'input',
        value: function input(event) {
            this.setState({
                text: event.target.value
            });
        }
    }, {
        key: 'cancel',
        value: function cancel(event) {
            if (event) {
                event.stopPropagation();
            }

            this.props.node.toggleEditing();
        }
    }, {
        key: 'save',
        value: function save(event) {
            if (event) {
                event.stopPropagation();
            }

            // Cache current text
            var originalText = this.props.node.text;
            var newText = this.ref.value;

            // Update the text
            this.props.node.set('text', newText);

            // Disable editing and update
            this.props.node.state('editing', false);
            this.props.node.markDirty();
            this.props.dom._tree.applyChanges();

            if (originalText !== newText) {
                this.props.dom._tree.emit('node.edited', this.props.node, originalText, newText);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return createVNode$8(2, 'form', null, [createVNode$8(512, 'input', null, null, {
                'onClick': function onClick(event) {
                    return event.stopPropagation;
                },
                'onInput': this.input.bind(this),
                'onKeyPress': this.keypress.bind(this),
                'value': this.state.text
            }, null, function (elem) {
                return _this3.ref = elem;
            }), createVNode$8(2, 'span', 'btn-group', [createVNode$8(2, 'button', 'btn icon icon-check', null, {
                'onClick': this.save.bind(this),
                'title': 'Save',
                'type': 'button'
            }), createVNode$8(2, 'button', 'btn icon icon-cross', null, {
                'onClick': this.cancel.bind(this),
                'title': 'Cancel',
                'type': 'button'
            })])], {
                'onsubmit': function onsubmit(event) {
                    return event.preventDefault;
                }
            });
        }
    }]);
    return EditForm;
}(infernoComponent);

var createVNode$7 = inferno.createVNode;

var NodeAnchor = function (_Component) {
    inherits(NodeAnchor, _Component);

    function NodeAnchor() {
        classCallCheck(this, NodeAnchor);
        return possibleConstructorReturn(this, (NodeAnchor.__proto__ || Object.getPrototypeOf(NodeAnchor)).apply(this, arguments));
    }

    createClass(NodeAnchor, [{
        key: 'blur',
        value: function blur() {
            this.props.node.blur();
        }
    }, {
        key: 'click',
        value: function click(event) {
            var _this2 = this;

            var _props = this.props,
                node = _props.node,
                dom = _props.dom;

            // Define our default handler

            var handler = function handler() {
                event.preventDefault();

                if (_this2.props.editing) {
                    return;
                }

                if (event.metaKey || event.ctrlKey || event.shiftKey) {
                    dom._tree.disableDeselection();
                }

                if (event.shiftKey) {
                    dom.clearSelection();

                    var selected = dom._tree.lastSelectedNode();
                    if (selected) {
                        dom._tree.selectBetween.apply(dom._tree, dom._tree.boundingNodes(selected, node));
                    }
                }

                if (node.selected()) {
                    if (!dom._tree.config.selection.disableDirectDeselection) {
                        node.deselect();
                    }
                } else {
                    node.select();
                }

                dom._tree.enableDeselection();
            };

            // Emit an event with our forwarded MouseEvent, node, and default handler
            dom._tree.emit('node.click', event, node, handler);

            // Unless default is prevented, auto call our default handler
            if (!event.treeDefaultPrevented) {
                handler();
            }
        }
    }, {
        key: 'contextMenu',
        value: function contextMenu(event) {
            var _props2 = this.props,
                node = _props2.node,
                dom = _props2.dom;


            dom._tree.emit('node.contextmenu', event, node);
        }
    }, {
        key: 'dblclick',
        value: function dblclick(event) {
            var _props3 = this.props,
                node = _props3.node,
                dom = _props3.dom;

            // Define our default handler

            var handler = function handler() {
                // Clear text selection which occurs on double click
                dom.clearSelection();

                node.toggleCollapse();
            };

            // Emit an event with our forwarded MouseEvent, node, and default handler
            dom._tree.emit('node.dblclick', event, node, handler);

            // Unless default is prevented, auto call our default handler
            if (!event.treeDefaultPrevented) {
                handler();
            }
        }
    }, {
        key: 'focus',
        value: function focus(event) {
            this.props.node.focus(event);
        }
    }, {
        key: 'mousedown',
        value: function mousedown() {
            if (this.props.dom.isDragDropEnabled) {
                this.props.dom.isMouseHeld = true;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var node = this.props.node;
            var attributes = _.clone(node.itree.a.attributes) || {};
            attributes.tabindex = 1;
            attributes.unselectable = 'on';

            // Build and set classnames
            var classNames = classlist(node, 'a').concat(['title', 'icon']);

            if (!this.props.dom.config.showCheckboxes) {
                var folder = this.props.expanded ? 'icon-folder-open' : 'icon-folder';
                classNames.push(node.itree.icon || (this.props.hasOrWillHaveChildren ? folder : 'icon-file-empty'));
            }

            attributes.className = classNames.join(' ');

            var content = node.text;
            if (node.editing()) {
                content = createVNode$7(16, EditForm, null, null, {
                    'dom': this.props.dom,
                    'node': this.props.node
                });
            }

            return createVNode$7(2, 'a', null, content, _extends({
                'data-uid': node.id,
                'onBlur': this.blur.bind(this),
                'onClick': this.click.bind(this),
                'onContextMenu': this.contextMenu.bind(this),
                'onDblClick': this.dblclick.bind(this),
                'onFocus': this.focus.bind(this),
                'onMouseDown': this.mousedown.bind(this)
            }, attributes));
        }
    }]);
    return NodeAnchor;
}(infernoComponent);

var createVNode$9 = inferno.createVNode;

var ToggleAnchor = function (_Component) {
    inherits(ToggleAnchor, _Component);

    function ToggleAnchor() {
        classCallCheck(this, ToggleAnchor);
        return possibleConstructorReturn(this, (ToggleAnchor.__proto__ || Object.getPrototypeOf(ToggleAnchor)).apply(this, arguments));
    }

    createClass(ToggleAnchor, [{
        key: 'className',
        value: function className() {
            return 'toggle icon ' + (this.props.collapsed ? 'icon-expand' : 'icon-collapse');
        }
    }, {
        key: 'render',
        value: function render() {
            return createVNode$9(2, 'a', this.className(), null, {
                'onClick': this.props.node.toggleCollapse.bind(this.props.node)
            });
        }
    }]);
    return ToggleAnchor;
}(infernoComponent);

var createVNode$3 = inferno.createVNode;

var ListItem = function (_Component) {
    inherits(ListItem, _Component);

    function ListItem(props) {
        classCallCheck(this, ListItem);

        var _this = possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));

        _this.state = _this.stateFromNode(props.node);
        return _this;
    }

    createClass(ListItem, [{
        key: 'stateFromNode',
        value: function stateFromNode(node) {
            return {
                dirty: node.itree.dirty
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(data) {
            this.setState(this.stateFromNode(data.node));
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextState.dirty;
        }
    }, {
        key: 'getAttributes',
        value: function getAttributes() {
            var node = this.props.node;
            var attributes = _.clone(node.itree.li.attributes) || {};
            attributes.className = this.getClassNames();

            // Force internal-use attributes
            attributes['data-uid'] = node.id;

            // Allow drag and drop?
            if (this.props.dom.config.dragAndDrop.enabled) {
                attributes.draggable = node.state('draggable');
                attributes.onDragEnd = this.onDragEnd.bind(this);
                attributes.onDragEnter = this.onDragEnter.bind(this);
                attributes.onDragLeave = this.onDragLeave.bind(this);
                attributes.onDragStart = this.onDragStart.bind(this);

                // Are we a valid drop target?
                if (node.state('drop-target')) {
                    attributes.onDragOver = this.onDragOver.bind(this);
                    attributes.onDrop = this.onDrop.bind(this);
                } else {
                    // Setting to null forces removal of prior listeners
                    attributes.onDragOver = null;
                    attributes.onDrop = null;
                }
            }

            return attributes;
        }
    }, {
        key: 'getClassNames',
        value: function getClassNames() {
            var node = this.props.node;
            var state = node.itree.state;

            // Set state classnames
            var classNames = classlist(node);

            // https://jsperf.com/object-keys-vs-each
            _.each(Object.keys(state), function (key) {
                if (state[key]) {
                    classNames.push(key);
                }
            });

            // Inverse and additional classes
            if (!node.hidden() && node.removed()) {
                classNames.push('hidden');
            }

            if (node.expanded()) {
                classNames.push('expanded');
            }

            classNames.push(node.hasOrWillHaveChildren() ? 'folder' : 'leaf');

            return classNames.join(' ');
        }
    }, {
        key: 'getTargetDirection',
        value: function getTargetDirection(event, elem) {
            var clientY = event.clientY;
            var targetRect = elem.getBoundingClientRect();

            var yThresholdForAbove = targetRect.top + targetRect.height / 3;
            var yThresholdForBelow = targetRect.bottom - targetRect.height / 3;

            var dir = 0;

            if (clientY <= yThresholdForAbove) {
                dir = -1;
            } else if (clientY >= yThresholdForBelow) {
                dir = 1;
            }

            return dir;
        }
    }, {
        key: 'onDragStart',
        value: function onDragStart(event) {
            event.stopPropagation();

            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.dropEffect = 'move';

            var node = this.props.node;

            // Due to "protected" mode we can't access any DataTransfer data
            // during the dragover event, yet we still need to validate this node with the target
            this.props.dom._activeDragNode = node;

            event.dataTransfer.setData('treeId', node.tree().id);
            event.dataTransfer.setData('nodeId', node.id);

            // Disable self and children as drop targets
            node.state('drop-target', false);

            if (node.hasChildren()) {
                node.children.stateDeep('drop-target', false);
            }

            // If we should validate all nodes as potential drop targets on drag start
            if (this.props.dom.config.dragAndDrop.validateOn === 'dragstart') {
                var validator = this.props.dom.config.dragAndDrop.validate;
                var validateCallable = _.isFunction(validator);

                // Validate with a custom recursor because a return of "false"
                // should mean "do not descend" rather than "stop iterating"
                var recursor = function recursor(obj, iteratee) {
                    if (InspireTree.isTreeNodes(obj)) {
                        _.each(obj, function (n) {
                            recursor(n, iteratee);
                        });
                    } else if (InspireTree.isTreeNode(obj)) {
                        if (iteratee(obj) !== false && obj.hasChildren()) {
                            recursor(obj.children, iteratee);
                        }
                    }
                };

                this.props.dom._tree.batch();

                recursor(this.props.dom._tree.model, function (n) {
                    var valid = n.id !== node.id;

                    // Ensure target node isn't a descendant
                    if (valid) {
                        valid = !n.hasAncestor(node);
                    }

                    // If still valid and user has additional validation...
                    if (valid && validateCallable) {
                        valid = validator(node, n);
                    }

                    // Set state
                    n.state('drop-target', valid);

                    return valid;
                });

                this.props.dom._tree.end();
            }

            this.props.dom._tree.emit('node.dragstart', event);
        }
    }, {
        key: 'onDragEnd',
        value: function onDragEnd(event) {
            event.preventDefault();
            event.stopPropagation();

            this.unhighlightTarget();

            this.props.dom._tree.emit('node.dragend', event);
        }
    }, {
        key: 'onDragEnter',
        value: function onDragEnter(event) {
            event.preventDefault();
            event.stopPropagation();

            // Nodes already within parents don't trigger enter/leave events on their ancestors
            this.props.node.recurseUp(this.unhighlightTarget);

            // Set drag target state
            this.props.node.state('drag-targeting', true);

            this.props.dom._tree.emit('node.dragenter', event);
        }
    }, {
        key: 'onDragLeave',
        value: function onDragLeave(event) {
            event.preventDefault();
            event.stopPropagation();

            this.unhighlightTarget();

            this.props.dom._tree.emit('node.dragleave', event);
        }
    }, {
        key: 'onDragOver',
        value: function onDragOver(event) {
            event.preventDefault();
            event.stopPropagation();

            var dragNode = this.props.dom._activeDragNode;
            var node = this.props.node;

            // Event.target doesn't always match the element we need to calculate
            var dir = this.getTargetDirection(event, node.itree.ref.querySelector('a'));

            if (this.props.dom.config.dragAndDrop.validateOn === 'dragover') {
                // Validate drop target
                var validator = this.props.dom.config.dragAndDrop.validate;
                var validateCallable = _.isFunction(validator);

                var valid = dragNode.id !== node.id;

                if (valid) {
                    valid = !node.hasAncestor(dragNode);
                }

                if (valid && validateCallable) {
                    valid = validator(dragNode, node, dir);
                }

                // Set state
                node.state('drop-target', valid);
                this.props.dom._tree.applyChanges();

                if (!valid) {
                    return;
                }
            }

            // Set drag target states
            this.props.dom._tree.batch();
            node.state('drag-targeting', true);
            node.state('drag-targeting-above', dir === -1);
            node.state('drag-targeting-below', dir === 1);
            node.state('drag-targeting-insert', dir === 0);
            this.props.dom._tree.end();

            this.props.dom._tree.emit('node.dragover', event, dir);
        }
    }, {
        key: 'onDrop',
        value: function onDrop(event) {
            event.preventDefault();
            event.stopPropagation();

            // Always unhighlight target
            this.unhighlightTarget();

            // Get the data from our transfer
            var treeId = event.dataTransfer.getData('treeId');
            var nodeId = event.dataTransfer.getData('nodeId');

            // Find the drop target
            var targetNode = this.props.node;

            // Clear cache
            this.props.dom._activeDragNode = null;

            // Determine the insert direction (calc before removing source node, which modifies the DOM)
            var dir = this.getTargetDirection(event, event.target);

            var sourceTree = void 0;
            if (treeId === this.props.dom._tree.id) {
                sourceTree = this.props.dom._tree;
            } else {
                sourceTree = document.querySelector('[data-uid="' + treeId + '"]').inspireTree;
            }

            var node = sourceTree.node(nodeId);
            node.state('drop-target', true);

            var exported = node.remove(true);

            // Get the index of the target node
            var targetIndex = targetNode.context().indexOf(targetNode);

            var newNode = void 0,
                newIndex = void 0;
            if (dir === 0) {
                // Add as a child
                newNode = targetNode.addChild(exported);

                // Cache the new index
                newIndex = targetNode.children.indexOf(newNode);

                // Auto-expand
                targetNode.expand();
            } else {
                // Determine the new index
                newIndex = dir === 1 ? ++targetIndex : targetIndex;

                // Insert and cache the node
                newNode = targetNode.context().insertAt(newIndex, exported);
            }

            this.props.dom._tree.emit('node.drop', event, newNode, targetNode, newIndex);
        }
    }, {
        key: 'unhighlightTarget',
        value: function unhighlightTarget(node) {
            (node || this.props.node).states(['drag-targeting', 'drag-targeting-above', 'drag-targeting-below', 'drag-targeting-insert'], false);
        }
    }, {
        key: 'renderCheckbox',
        value: function renderCheckbox() {
            var node = this.props.node;

            if (this.props.dom.config.showCheckboxes) {
                return createVNode$3(16, Checkbox, null, null, {
                    'checked': node.checked(),
                    'dom': this.props.dom,
                    'indeterminate': node.indeterminate(),
                    'node': node
                });
            }
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _props = this.props,
                node = _props.node,
                dom = _props.dom;


            if (node.hasChildren()) {
                var nodes = node.children;
                var loading = dom.loading;
                var pagination = nodes.pagination();

                return createVNode$3(16, List, null, null, {
                    'context': node,
                    'dom': dom,
                    'limit': pagination.limit,
                    'loading': loading,
                    'nodes': nodes,
                    'total': pagination.total
                });
            } else if (this.props.dom.isDynamic && node.children) {
                if (!node.hasLoadedChildren()) {
                    return createVNode$3(16, EmptyList, null, null, {
                        'text': 'Loading...'
                    });
                } else {
                    return createVNode$3(16, EmptyList, null, null, {
                        'text': 'No Results'
                    });
                }
            }
        }
    }, {
        key: 'renderEditToolbar',
        value: function renderEditToolbar() {
            // @todo fix this boolean
            if (this.props.dom._tree.config.editing.edit && !this.props.node.editing()) {
                return createVNode$3(16, EditToolbar, null, null, {
                    'dom': this.props.dom,
                    'node': this.props.node
                });
            }
        }
    }, {
        key: 'renderToggle',
        value: function renderToggle() {
            var node = this.props.node;
            var hasVisibleChildren = !this.props.dom.isDynamic ? node.hasVisibleChildren() : Boolean(node.children);

            if (hasVisibleChildren) {
                return createVNode$3(16, ToggleAnchor, null, null, {
                    'collapsed': node.collapsed(),
                    'node': node
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var node = this.props.node;

            var li = createVNode$3(2, 'li', null, [this.renderEditToolbar(), createVNode$3(2, 'div', 'title-wrap', [this.renderToggle(), this.renderCheckbox(), createVNode$3(16, NodeAnchor, null, null, {
                'dom': this.props.dom,
                'editing': node.editing(),
                'expanded': node.expanded(),
                'hasOrWillHaveChildren': node.hasOrWillHaveChildren(),
                'node': node,
                'text': node.text
            })]), createVNode$3(2, 'div', 'wholerow'), this.renderChildren()], _extends({}, this.getAttributes()), null, function (elem) {
                return _this2.node = _this2.props.node.itree.ref = elem;
            });

            // Clear dirty bool only after everything has been generated (and states set)
            this.props.node.state('rendered', true);
            this.props.node.itree.dirty = false;

            return li;
        }
    }]);
    return ListItem;
}(infernoComponent);

var createVNode$2 = inferno.createVNode;

var List = function (_Component) {
    inherits(List, _Component);

    function List() {
        classCallCheck(this, List);
        return possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    createClass(List, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return _.find(nextProps.nodes, 'itree.dirty') || stateComparator(this.props, nextProps);
        }
    }, {
        key: 'isDeferred',
        value: function isDeferred() {
            return this.props.dom.config.deferredRendering || this.props.dom._tree.config.deferredLoading;
        }
    }, {
        key: 'loadMore',
        value: function loadMore(event) {
            event.preventDefault();
            if (this.props.context) {
                this.props.context.loadMore(event);
            } else {
                this.props.dom._tree.loadMore(event);
            }
        }
    }, {
        key: 'renderLoadMoreNode',
        value: function renderLoadMoreNode() {
            return createVNode$2(2, 'li', 'leaf detached', createVNode$2(2, 'a', 'title icon icon-more load-more', 'Load More', {
                'onClick': this.loadMore.bind(this)
            }));
        }
    }, {
        key: 'renderLoadingTextNode',
        value: function renderLoadingTextNode() {
            return createVNode$2(2, 'li', 'leaf', createVNode$2(2, 'span', 'title icon icon-more', 'Loading...'));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var renderNodes = this.props.nodes;
            var pagination = renderNodes.pagination();

            // If rendering deferred, chunk the nodes client-side
            if (this.props.dom.config.deferredRendering) {
                // Filter non-hidden/removed nodes and limit by this context's pagination
                var count = 0;
                renderNodes = this.props.nodes.filter(function (n) {
                    var matches = !(n.hidden() || n.removed());

                    if (matches) {
                        count++;
                    }

                    return count <= pagination.limit && matches;
                });
            }

            // Render nodes as list items
            var items = _.map(renderNodes, function (node) {
                return createVNode$2(16, ListItem, null, null, {
                    'dom': _this2.props.dom,
                    'node': node
                }, node.id);
            });

            if (this.isDeferred() && pagination.limit < pagination.total) {
                if (!this.props.loading) {
                    items.push(this.renderLoadMoreNode());
                } else {
                    items.push(this.renderLoadingTextNode());
                }
            }

            return createVNode$2(2, 'ol', null, [items, this.props.children]);
        }
    }]);
    return List;
}(infernoComponent);

var createVNode$1 = inferno.createVNode;

var Tree = function (_Component) {
    inherits(Tree, _Component);

    function Tree() {
        classCallCheck(this, Tree);
        return possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).apply(this, arguments));
    }

    createClass(Tree, [{
        key: 'add',
        value: function add() {
            this.props.dom._tree.focused().blur();

            this.props.dom._tree.addNode(blankNode());
        }
    }, {
        key: 'renderAddLink',
        value: function renderAddLink() {
            if (this.props.dom._tree.config.editing.add) {
                return createVNode$1(2, 'li', null, createVNode$1(2, 'a', 'btn icon icon-plus', null, {
                    'onClick': this.add.bind(this),
                    'title': 'Add a new root node'
                }));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                dom = _props.dom,
                nodes = _props.nodes;

            var loading = dom.loading;
            var pagination = nodes.pagination();

            return createVNode$1(16, List, null, null, {
                'dom': dom,
                'limit': pagination.limit,
                'loading': loading,
                'nodes': nodes,
                'total': pagination.total,
                children: this.renderAddLink()
            });
        }
    }]);
    return Tree;
}(infernoComponent);

'use strict';

// Libs

/**
 * Default InspireTree rendering logic.
 *
 * @category DOM
 * @return {InspireDOM} Default renderer.
 */
var createVNode = inferno.createVNode;

var InspireDOM = function () {
    function InspireDOM(tree, opts) {
        var _this = this;

        classCallCheck(this, InspireDOM);

        if (!(tree instanceof InspireTree)) {
            throw new TypeError('Tree argument is not an InspireTree instance.');
        }

        // Init properties
        this._tree = tree;
        this.batching = 0;
        this.dropTargets = [];
        this.$scrollLayer;

        if (!opts.target) {
            throw new TypeError('Invalid `target` property - must be a selector, HTMLElement, or jQuery element.');
        }

        // Let InspireTree know we're in control of a node's `rendered` state
        tree.usesNativeDOM = true;

        var dndDefaults = {
            enabled: false,
            validateOn: 'dragstart',
            validate: null
        };

        // Assign defaults
        this.config = _$1.defaultsDeep({}, opts, {
            autoLoadMore: true,
            deferredRendering: false,
            dragAndDrop: dndDefaults,
            nodeHeight: 25,
            showCheckboxes: false,
            tabindex: -1,
            target: false
        });

        if (opts.dragAndDrop === true) {
            this.config.dragAndDrop = dndDefaults;
            this.config.dragAndDrop.enabled = true;
        }

        // If user didn't specify showCheckboxes,
        // but is using checkbox selection mode,
        // enable it automatically.
        if (tree.config.selection.mode === 'checkbox' && !_$1.isBoolean(_$1.get(opts, 'showCheckboxes'))) {
            this.config.showCheckboxes = true;
        }

        // Cache because we use in loops
        this.isDynamic = _$1.isFunction(this._tree.config.data);

        // Connect to our target DOM element
        this.attach(this.config.target);

        var initialRender = true;

        // Apply changes
        tree.on('changes.applied', function () {
            _this.renderNodes();

            if (initialRender) {
                _this.scrollSelectedIntoView();

                initialRender = false;
            }
        });

        // Immediately render, just in case any already exists
        this.renderNodes();
    }

    /**
     * Attaches to the DOM element for rendering.
     *
     * @category DOM
     * @private
     * @param {HTMLElement} target Element, selector, or jQuery-like object.
     * @return {void}
     */


    createClass(InspireDOM, [{
        key: 'attach',
        value: function attach(target) {
            this.$target = this.getElement(target);
            this.$scrollLayer = this.getScrollableAncestor(this.$target);

            if (!this.$target) {
                throw new Error('No valid element to attach to.');
            }

            this.$target.setAttribute('data-uid', this._tree.id);

            // Set classnames
            var classNames = this.$target.className.split(' ');
            classNames.push('inspire-tree');

            if (this._tree.config.editable) {
                classNames.push('editable');

                _$1.each(_$1.pickBy(this._tree.config.editing, _$1.identity), function (v, key) {
                    classNames.push('editable-' + key);
                });
            }

            this.$target.className = classNames.join(' ');
            this.$target.setAttribute('tabindex', this.config.tabindex || 0);

            // Handle keyboard interaction
            this.$target.addEventListener('keydown', this.keyboardListener.bind(this));

            // Drag and drop listeners
            if (this.config.dragAndDrop.enabled) {
                this.$target.addEventListener('dragenter', this.onDragEnter.bind(this), false);
                this.$target.addEventListener('dragleave', this.onDragLeave.bind(this), false);
                this.$target.addEventListener('dragover', this.onDragOver.bind(this), false);
                this.$target.addEventListener('drop', this.onDrop.bind(this), false);

                this.$target.classList.add('drag-and-drop');
            }

            // Sync browser focus to focus state
            this._tree.on('node.focused', function (node) {
                var elem = node.itree.ref.querySelector('.title');
                if (elem !== document.activeElement) {
                    elem.focus();
                }
            });

            if (this.config.deferredRendering || this._tree.config.deferredLoading) {
                // Force valid pagination limit based on viewport
                var limit = this._tree.config.pagination.limit;
                this._tree.config.pagination.limit = limit > 0 ? limit : _$1.ceil(this.$scrollLayer.clientHeight / this.config.nodeHeight);

                // Listen for scrolls for automatic loading
                if (this.config.autoLoadMore) {
                    this.$target.addEventListener('scroll', _$1.throttle(this.scrollListener.bind(this), 20));
                }
            }

            this.$target.inspireTree = this._tree;
        }

        /**
         * Clear page text selection, primarily after a click event which
         * natively selects a range of text.
         *
         * @category DOM
         * @private
         * @return {void}
         */

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (document.selection && document.selection.empty) {
                document.selection.empty();
            } else if (window.getSelection) {
                window.getSelection().removeAllRanges();
            }
        }

        /**
         * Get an HTMLElement through various means:
         * An element, jquery object, or a selector.
         *
         * @category DOM
         * @private
         * @param {mixed} target Element, jQuery selector, selector.
         * @return {HTMLElement} Matching element.
         */

    }, {
        key: 'getElement',
        value: function getElement(target) {
            var $element = void 0;

            if (target instanceof HTMLElement) {
                $element = target;
            } else if (_$1.isObject(target) && _$1.isObject(target[0])) {
                $element = target[0];
            } else if (_$1.isString(target)) {
                var match = document.querySelector(target);
                if (match) {
                    $element = match;
                }
            }

            return $element;
        }

        /**
         * Helper method to find a scrollable ancestor element.
         *
         * @category DOM
         * @private
         * @param {HTMLElement} $element Starting element.
         * @return {HTMLElement} Scrollable element.
         */

    }, {
        key: 'getScrollableAncestor',
        value: function getScrollableAncestor($element) {
            if ($element instanceof Element) {
                var style = getComputedStyle($element);
                if (style.overflow !== 'auto' && $element.parentNode) {
                    $element = this.getScrollableAncestor($element.parentNode);
                }
            }

            return $element;
        }

        /**
         * Get a tree instance based on an ID.
         *
         * @category DOM
         * @param {string} id Tree ID.
         * @return {InspireTree} Tree instance.
         */

    }, {
        key: 'keyboardListener',


        /**
         * Listen to keyboard event for navigation.
         *
         * @category DOM
         * @private
         * @param {Event} event Keyboard event.
         * @return {void}
         */
        value: function keyboardListener(event) {
            event.stopPropagation();

            // Ignore keys we won't care for.
            // For example, this avoids trampling cmd+reload
            if ([DOWN_ARROW, ENTER, LEFT_ARROW, RIGHT_ARROW, UP_ARROW].indexOf(event.which) < 0) {
                return;
            }

            // Navigation
            var focusedNodes = this._tree.focused();
            if (focusedNodes.length) {
                event.preventDefault();

                switch (event.which) {
                    case DOWN_ARROW:
                        this.moveFocusDownFrom(focusedNodes[0]);
                        break;
                    case ENTER:
                        focusedNodes[0].toggleSelect();
                        break;
                    case LEFT_ARROW:
                        focusedNodes[0].collapse();
                        break;
                    case RIGHT_ARROW:
                        focusedNodes[0].expand();
                        break;
                    case UP_ARROW:
                        this.moveFocusUpFrom(focusedNodes[0]);
                        break;
                    default:
                }
            }
        }

        /**
         * Move select down the visible tree from a starting node.
         *
         * @category DOM
         * @private
         * @param {object} startingNode Node object.
         * @return {void}
         */

    }, {
        key: 'moveFocusDownFrom',
        value: function moveFocusDownFrom(startingNode) {
            var next = startingNode.nextVisibleNode();
            if (next) {
                next.focus();
            }
        }

        /**
         * Move select up the visible tree from a starting node.
         *
         * @category DOM
         * @private
         * @param {object} startingNode Node object.
         * @return {void}
         */

    }, {
        key: 'moveFocusUpFrom',
        value: function moveFocusUpFrom(startingNode) {
            var prev = startingNode.previousVisibleNode();
            if (prev) {
                prev.focus();
            }
        }

        /**
         * Helper method for obtaining the data-uid from a DOM element.
         *
         * @category DOM
         * @private
         * @param {HTMLElement} element HTML Element.
         * @return {object} Node object
         */

    }, {
        key: 'nodeFromTitleDOMElement',
        value: function nodeFromTitleDOMElement(element) {
            var uid = element.parentNode.parentNode.getAttribute('data-uid');
            return this._tree.node(uid);
        }

        /**
         * Drag enter listener.
         *
         * @category DOM
         * @private
         * @param {DragEvent} event Drag enter.
         * @return {void}
         */

    }, {
        key: 'onDragEnter',
        value: function onDragEnter(event) {
            event.preventDefault();

            event.target.classList.add('drag-targeting', 'drag-targeting-insert');
        }

        /**
         * Drag leave listener.
         *
         * @category DOM
         * @private
         * @param {DragEvent} event Drag leave.
         * @return {void}
         */

    }, {
        key: 'onDragLeave',
        value: function onDragLeave(event) {
            event.preventDefault();

            this.unhighlightTarget(event.target);
        }

        /**
         * Drag over listener.
         *
         * @category DOM
         * @private
         * @param {DragEvent} event Drag over.
         * @return {void}
         */

    }, {
        key: 'onDragOver',
        value: function onDragOver(event) {
            event.preventDefault();
        }

        /**
         * Drop listener.
         *
         * @category DOM
         * @private
         * @param {DragEvent} event Dropped.
         * @return {void}
         */

    }, {
        key: 'onDrop',
        value: function onDrop(event) {
            event.preventDefault();

            this.unhighlightTarget(event.target);

            var treeId = event.dataTransfer.getData('treeId');
            var nodeId = event.dataTransfer.getData('nodeId');

            // Find the tree
            var tree = InspireDOM.getTreeById(treeId);
            var node = tree.node(nodeId);

            node.state('drop-target', true);

            // Remove the node from its previous context
            var exported = node.remove(true);

            // Add the node to this tree/level
            var newNode = this._tree.addNode(exported);
            var newIndex = this._tree.indexOf(newNode);

            this._tree.emit('node.drop', event, newNode, null, newIndex);
        }

        /**
         * Triggers rendering for the given node array.
         *
         * @category DOM
         * @private
         * @param {array} nodes Array of node objects.
         * @return {void}
         */

    }, {
        key: 'renderNodes',
        value: function renderNodes(nodes) {
            inferno_1(createVNode(16, Tree, null, null, {
                'dom': this,
                'nodes': nodes || this._tree.nodes()
            }), this.$target);
        }
    }, {
        key: 'scrollListener',


        /**
         * Listens for scroll events, to automatically trigger
         * Load More links when they're scrolled into view.
         *
         * @category DOM
         * @private
         * @param {Event} event Scroll event.
         * @return {void}
         */
        value: function scrollListener(event) {
            var _this2 = this;

            if (!this.rendering && !this.loading) {
                // Get the bounding rect of the scroll layer
                var rect = this.$scrollLayer.getBoundingClientRect();

                // Find all load-more links
                var links = document.querySelectorAll('.load-more');
                _$1.each(links, function (link) {
                    // Look for load-more links which overlap our "viewport"
                    var r = link.getBoundingClientRect();
                    var overlap = !(rect.right < r.left || rect.left > r.right || rect.bottom < r.top || rect.top > r.bottom);

                    if (overlap) {
                        // Auto-trigger Load More links
                        var context = void 0;

                        var $parent = link.parentNode.parentNode.parentNode;
                        if ($parent.tagName === 'LI') {
                            context = _this2._tree.node($parent.getAttribute('data-uid'));
                        }

                        _this2._tree.loadMore(context, event);
                    }
                });
            }
        }

        /**
         * Scroll the first selected node into view.
         *
         * @category DOM
         * @private
         * @return {void}
         */

    }, {
        key: 'scrollSelectedIntoView',
        value: function scrollSelectedIntoView() {
            var $selected = this.$target.querySelector('.selected');

            if ($selected && this.$scrollLayer) {
                this.$scrollLayer.scrollTop = $selected.offsetTop;
            }
        }

        /**
         * Remove highlight class.
         *
         * @category DOM
         * @private
         * @param {HTMLElement} element Target element.
         * @return {void}
         */

    }, {
        key: 'unhighlightTarget',
        value: function unhighlightTarget(element) {
            if (element) {
                element.classList.remove('drag-targeting', 'drag-targeting-insert');
            }
        }
    }], [{
        key: 'getTreeById',
        value: function getTreeById(id) {
            var element = document.querySelector('[data-uid="' + id + '"]');
            if (element) {
                return element.inspireTree;
            }
        }
    }]);
    return InspireDOM;
}();

return InspireDOM;

})));
