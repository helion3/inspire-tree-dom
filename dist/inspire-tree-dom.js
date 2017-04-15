(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash'), require('inspire-tree')) :
	typeof define === 'function' && define.amd ? define(['lodash', 'inspire-tree'], factory) :
	(global.InspireDOM = factory(global._,global.InspireTree));
}(this, (function (_$1,InspireTree) { 'use strict';

InspireTree = 'default' in InspireTree ? InspireTree['default'] : InspireTree;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index$5 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NO_OP = '$NO_OP';
exports.ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
// This should be boolean and not reference to window.document
exports.isBrowser = !!(typeof window !== 'undefined' && window.document);
function toArray(children) {
    return exports.isArray(children) ? children : (children ? [children] : children);
}
exports.toArray = toArray;
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
exports.isArray = Array.isArray;
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
exports.isStatefulComponent = isStatefulComponent;
function isStringOrNumber(obj) {
    var type = typeof obj;
    return type === 'string' || type === 'number';
}
exports.isStringOrNumber = isStringOrNumber;
function isNullOrUndef(obj) {
    return isUndefined(obj) || isNull(obj);
}
exports.isNullOrUndef = isNullOrUndef;
function isInvalid(obj) {
    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
}
exports.isInvalid = isInvalid;
function isFunction$$1(obj) {
    return typeof obj === 'function';
}
exports.isFunction = isFunction$$1;
function isString$$1(obj) {
    return typeof obj === 'string';
}
exports.isString = isString$$1;
function isNumber(obj) {
    return typeof obj === 'number';
}
exports.isNumber = isNumber;
function isNull(obj) {
    return obj === null;
}
exports.isNull = isNull;
function isTrue(obj) {
    return obj === true;
}
exports.isTrue = isTrue;
function isUndefined(obj) {
    return obj === undefined;
}
exports.isUndefined = isUndefined;
function isObject$$1(o) {
    return typeof o === 'object';
}
exports.isObject = isObject$$1;
function throwError(message) {
    if (!message) {
        message = exports.ERROR_MSG;
    }
    throw new Error("Inferno Error: " + message);
}
exports.throwError = throwError;
function warning(message) {
    console.warn(message);
}
exports.warning = warning;
function combineFrom(first, second) {
    var obj = {};
    var key;
    if (first) {
        for (key in first) {
            obj[key] = first[key];
        }
    }
    if (second) {
        for (key in second) {
            obj[key] = second[key];
        }
    }
    return obj;
}
exports.combineFrom = combineFrom;
function Lifecycle() {
    this.listeners = [];
}
exports.Lifecycle = Lifecycle;
Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger() {
    var listeners = this.listeners;
    var listener;
    // We need to remove current listener from array when calling it, because more listeners might be added
    while (listener = listeners.shift()) {
        listener();
    }
};
});

var index$3 = createCommonjsModule(function (module) {
module.exports = index$5;
module.exports.default = module.exports;
});

var options = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    recyclingEnabled: false,
    findDOMNodeEnabled: false,
    roots: null,
    createVNode: null,
    beforeRender: null,
    afterRender: null,
    afterMount: null,
    afterUpdate: null,
    beforeUnmount: null
};
});

var constants = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xlinkNS = 'http://www.w3.org/1999/xlink';
exports.xmlNS = 'http://www.w3.org/XML/1998/namespace';
exports.svgNS = 'http://www.w3.org/2000/svg';
var TRUE = true;
exports.strictProps = Object.create(null);
exports.strictProps.volume = TRUE;
exports.strictProps.defaultChecked = TRUE;
Object.freeze(exports.strictProps);
exports.booleanProps = Object.create(null);
exports.booleanProps.muted = TRUE;
exports.booleanProps.scoped = TRUE;
exports.booleanProps.loop = TRUE;
exports.booleanProps.open = TRUE;
exports.booleanProps.checked = TRUE;
exports.booleanProps.default = TRUE;
exports.booleanProps.capture = TRUE;
exports.booleanProps.disabled = TRUE;
exports.booleanProps.readOnly = TRUE;
exports.booleanProps.required = TRUE;
exports.booleanProps.autoplay = TRUE;
exports.booleanProps.controls = TRUE;
exports.booleanProps.seamless = TRUE;
exports.booleanProps.reversed = TRUE;
exports.booleanProps.allowfullscreen = TRUE;
exports.booleanProps.novalidate = TRUE;
exports.booleanProps.hidden = TRUE;
exports.booleanProps.autoFocus = TRUE;
Object.freeze(exports.booleanProps);
exports.namespaces = Object.create(null);
exports.namespaces['xlink:href'] = exports.xlinkNS;
exports.namespaces['xlink:arcrole'] = exports.xlinkNS;
exports.namespaces['xlink:actuate'] = exports.xlinkNS;
exports.namespaces['xlink:show'] = exports.xlinkNS;
exports.namespaces['xlink:role'] = exports.xlinkNS;
exports.namespaces['xlink:title'] = exports.xlinkNS;
exports.namespaces['xlink:type'] = exports.xlinkNS;
exports.namespaces['xml:base'] = exports.xmlNS;
exports.namespaces['xml:lang'] = exports.xmlNS;
exports.namespaces['xml:space'] = exports.xmlNS;
Object.freeze(exports.namespaces);
exports.isUnitlessNumber = Object.create(null);
exports.isUnitlessNumber.animationIterationCount = TRUE;
exports.isUnitlessNumber.borderImageOutset = TRUE;
exports.isUnitlessNumber.borderImageSlice = TRUE;
exports.isUnitlessNumber.borderImageWidth = TRUE;
exports.isUnitlessNumber.boxFlex = TRUE;
exports.isUnitlessNumber.boxFlexGroup = TRUE;
exports.isUnitlessNumber.boxOrdinalGroup = TRUE;
exports.isUnitlessNumber.columnCount = TRUE;
exports.isUnitlessNumber.flex = TRUE;
exports.isUnitlessNumber.flexGrow = TRUE;
exports.isUnitlessNumber.flexPositive = TRUE;
exports.isUnitlessNumber.flexShrink = TRUE;
exports.isUnitlessNumber.flexNegative = TRUE;
exports.isUnitlessNumber.flexOrder = TRUE;
exports.isUnitlessNumber.gridRow = TRUE;
exports.isUnitlessNumber.gridColumn = TRUE;
exports.isUnitlessNumber.fontWeight = TRUE;
exports.isUnitlessNumber.lineClamp = TRUE;
exports.isUnitlessNumber.lineHeight = TRUE;
exports.isUnitlessNumber.opacity = TRUE;
exports.isUnitlessNumber.order = TRUE;
exports.isUnitlessNumber.orphans = TRUE;
exports.isUnitlessNumber.tabSize = TRUE;
exports.isUnitlessNumber.widows = TRUE;
exports.isUnitlessNumber.zIndex = TRUE;
exports.isUnitlessNumber.zoom = TRUE;
exports.isUnitlessNumber.fillOpacity = TRUE;
exports.isUnitlessNumber.floodOpacity = TRUE;
exports.isUnitlessNumber.stopOpacity = TRUE;
exports.isUnitlessNumber.strokeDasharray = TRUE;
exports.isUnitlessNumber.strokeDashoffset = TRUE;
exports.isUnitlessNumber.strokeMiterlimit = TRUE;
exports.isUnitlessNumber.strokeOpacity = TRUE;
exports.isUnitlessNumber.strokeWidth = TRUE;
Object.freeze(exports.isUnitlessNumber);
exports.skipProps = Object.create(null);
exports.skipProps.children = TRUE;
exports.skipProps.childrenType = TRUE;
exports.skipProps.defaultValue = TRUE;
exports.skipProps.ref = TRUE;
exports.skipProps.key = TRUE;
exports.skipProps.selected = TRUE;
exports.skipProps.checked = TRUE;
exports.skipProps.multiple = TRUE;
Object.freeze(exports.skipProps);
exports.delegatedEvents = Object.create(null);
exports.delegatedEvents.onClick = TRUE;
exports.delegatedEvents.onMouseDown = TRUE;
exports.delegatedEvents.onMouseUp = TRUE;
exports.delegatedEvents.onMouseMove = TRUE;
exports.delegatedEvents.onSubmit = TRUE;
exports.delegatedEvents.onDblClick = TRUE;
exports.delegatedEvents.onKeyDown = TRUE;
exports.delegatedEvents.onKeyUp = TRUE;
exports.delegatedEvents.onKeyPress = TRUE;
Object.freeze(exports.delegatedEvents);
});

var delegation = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var isiOS = index$3.isBrowser && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var delegatedEvents = new Map();
function handleEvent(name, lastEvent, nextEvent, dom) {
    var delegatedRoots = delegatedEvents.get(name);
    if (nextEvent) {
        if (!delegatedRoots) {
            delegatedRoots = { items: new Map(), count: 0, docEvent: null };
            delegatedRoots.docEvent = attachEventToDocument(name, delegatedRoots);
            delegatedEvents.set(name, delegatedRoots);
        }
        if (!lastEvent) {
            delegatedRoots.count++;
            if (isiOS && name === 'onClick') {
                trapClickOnNonInteractiveElement(dom);
            }
        }
        delegatedRoots.items.set(dom, nextEvent);
    }
    else if (delegatedRoots) {
        delegatedRoots.count--;
        delegatedRoots.items.delete(dom);
        if (delegatedRoots.count === 0) {
            document.removeEventListener(normalizeEventName(name), delegatedRoots.docEvent);
            delegatedEvents.delete(name);
        }
    }
}
exports.handleEvent = handleEvent;
function dispatchEvent(event, target, items, count, dom, isClick) {
    var eventsToTrigger = items.get(target);
    if (eventsToTrigger) {
        count--;
        // linkEvent object
        dom = target;
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
    if (count > 0) {
        var parentDom = target.parentNode;
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        // Don't process clicks on disabled elements
        if (parentDom === null || (isClick && parentDom.nodeType === 1 && parentDom.disabled)) {
            return;
        }
        dispatchEvent(event, parentDom, items, count, dom, isClick);
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
        var count = delegatedRoots.count;
        if (count > 0) {
            event.stopPropagation = stopPropagation;
            dispatchEvent(event, event.target, delegatedRoots.items, count, document, event.type === 'click');
        }
    };
    document.addEventListener(normalizeEventName(name), docEvent);
    return docEvent;
}
function emptyFn() {
}
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
});

var InputWrapper = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


function isCheckedType(type) {
    return type === 'checkbox' || type === 'radio';
}
exports.isCheckedType = isCheckedType;
function onTextInputChange(e) {
    var vNode = this;
    var props = vNode.props || utils.EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onInput) {
        var event_1 = props.onInput;
        if (event_1.event) {
            event_1.event(event_1.data, e);
        }
        else {
            event_1(e);
        }
    }
    else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this;
    var newProps = newVNode.props || utils.EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newProps, dom);
    }
}
function wrappedOnChange(e) {
    var props = this.props || utils.EMPTY_OBJ;
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
    var vNode = this;
    var props = vNode.props || utils.EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onClick) {
        var event_2 = props.onClick;
        if (event_2.event) {
            event_2.event(event_2.data, e);
        }
        else {
            event_2(e);
        }
    }
    else if (props.onclick) {
        props.onclick(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this;
    var newProps = newVNode.props || utils.EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newProps, dom);
    }
}
function processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue(nextPropsOrEmpty, dom);
    if (mounting && isControlled) {
        if (isCheckedType(nextPropsOrEmpty.type)) {
            dom.onclick = onCheckboxChange.bind(vNode);
            dom.onclick.wrapped = true;
        }
        else {
            dom.oninput = onTextInputChange.bind(vNode);
            dom.oninput.wrapped = true;
        }
        if (nextPropsOrEmpty.onChange) {
            dom.onchange = wrappedOnChange.bind(vNode);
            dom.onchange.wrapped = true;
        }
    }
}
exports.processInput = processInput;
function applyValue(nextPropsOrEmpty, dom) {
    var type = nextPropsOrEmpty.type;
    var value = nextPropsOrEmpty.value;
    var checked = nextPropsOrEmpty.checked;
    var multiple = nextPropsOrEmpty.multiple;
    var defaultValue = nextPropsOrEmpty.defaultValue;
    var hasValue = !index$3.isNullOrUndef(value);
    if (type && type !== dom.type) {
        dom.setAttribute('type', type);
    }
    if (multiple && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!index$3.isNullOrUndef(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + '';
    }
    if (isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        if (!index$3.isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
    else {
        if (hasValue && dom.value !== value) {
            dom.value = value;
        }
        else if (!index$3.isNullOrUndef(checked)) {
            dom.checked = checked;
        }
    }
}
exports.applyValue = applyValue;
});

var SelectWrapper = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });



function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === 'optgroup') {
        var children = vNode.children;
        if (index$3.isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        }
        else if (VNodes.isVNode(children)) {
            updateChildOption(children, value);
        }
    }
    else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || utils.EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if ((index$3.isArray(value) && value.indexOf(props.value) !== -1) || props.value === value) {
        dom.selected = true;
    }
    else if (!index$3.isNullOrUndef(value) || !index$3.isNullOrUndef(props.selected)) {
        dom.selected = props.selected || false;
    }
}
function onSelectChange(e) {
    var vNode = this;
    var props = vNode.props || utils.EMPTY_OBJ;
    var dom = vNode.dom;
    var previousValue = props.value;
    if (props.onChange) {
        var event_1 = props.onChange;
        if (event_1.event) {
            event_1.event(event_1.data, e);
        }
        else {
            event_1(e);
        }
    }
    else if (props.onchange) {
        props.onchange(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this;
    var newProps = newVNode.props || utils.EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newVNode, dom, newProps, false);
    }
}
function processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue(vNode, dom, nextPropsOrEmpty, mounting);
    if (mounting && isControlled) {
        dom.onchange = onSelectChange.bind(vNode);
        dom.onchange.wrapped = true;
    }
}
exports.processSelect = processSelect;
function applyValue(vNode, dom, nextPropsOrEmpty, mounting) {
    if (nextPropsOrEmpty.multiple !== dom.multiple) {
        dom.multiple = nextPropsOrEmpty.multiple;
    }
    var children = vNode.children;
    if (!index$3.isInvalid(children)) {
        var value = nextPropsOrEmpty.value;
        if (mounting && index$3.isNullOrUndef(value)) {
            value = nextPropsOrEmpty.defaultValue;
        }
        if (index$3.isArray(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        }
        else if (VNodes.isVNode(children)) {
            updateChildOptionGroup(children, value);
        }
    }
}
exports.applyValue = applyValue;
});

var TextareaWrapper = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


function wrappedOnChange(e) {
    var props = this.props || utils.EMPTY_OBJ;
    var event = props.onChange;
    if (event.event) {
        event.event(event.data, e);
    }
    else {
        event(e);
    }
}
function onTextareaInputChange(e) {
    var vNode = this;
    var props = vNode.props || utils.EMPTY_OBJ;
    var previousValue = props.value;
    if (props.onInput) {
        var event_1 = props.onInput;
        if (event_1.event) {
            event_1.event(event_1.data, e);
        }
        else {
            event_1(e);
        }
    }
    else if (props.oninput) {
        props.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events syncronously
    // so we need to get it from the context of `this` again
    var newVNode = this;
    var newProps = newVNode.props || utils.EMPTY_OBJ;
    // If render is going async there is no value change yet, it will come back to process input soon
    if (previousValue !== newProps.value) {
        // When this happens we need to store current cursor position and restore it, to avoid jumping
        applyValue(newVNode, vNode.dom, false);
    }
}
function processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    applyValue(nextPropsOrEmpty, dom, mounting);
    if (mounting && isControlled) {
        dom.oninput = onTextareaInputChange.bind(vNode);
        dom.oninput.wrapped = true;
        if (nextPropsOrEmpty.onChange) {
            dom.onchange = wrappedOnChange.bind(vNode);
            dom.onchange.wrapped = true;
        }
    }
}
exports.processTextarea = processTextarea;
function applyValue(nextPropsOrEmpty, dom, mounting) {
    var value = nextPropsOrEmpty.value;
    var domValue = dom.value;
    if (index$3.isNullOrUndef(value)) {
        if (mounting) {
            var defaultValue = nextPropsOrEmpty.defaultValue;
            if (!index$3.isNullOrUndef(defaultValue)) {
                if (defaultValue !== domValue) {
                    dom.value = defaultValue;
                }
            }
            else if (domValue !== '') {
                dom.value = '';
            }
        }
    }
    else {
        /* There is value so keep it controlled */
        if (domValue !== value) {
            dom.value = value;
        }
    }
}
exports.applyValue = applyValue;
});

var processElement_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });




/**
 * There is currently no support for switching same input between controlled and nonControlled
 * If that ever becomes a real issue, then re design controlled elements
 * Currently user must choose either controlled or non-controlled and stick with that
 */
function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
    if (flags & 512 /* InputElement */) {
        InputWrapper.processInput(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
    }
    if (flags & 2048 /* SelectElement */) {
        SelectWrapper.processSelect(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
    }
    if (flags & 1024 /* TextareaElement */) {
        TextareaWrapper.processTextarea(vNode, dom, nextPropsOrEmpty, mounting, isControlled);
    }
}
exports.processElement = processElement;
function isControlledFormElement(nextPropsOrEmpty) {
    return (nextPropsOrEmpty.type && InputWrapper.isCheckedType(nextPropsOrEmpty.type)) ? !index$3.isNullOrUndef(nextPropsOrEmpty.checked) : !index$3.isNullOrUndef(nextPropsOrEmpty.value);
}
exports.isControlledFormElement = isControlledFormElement;
});

var hydration = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });








function normalizeChildNodes(parentDom) {
    var dom = parentDom.firstChild;
    while (dom) {
        if (dom.nodeType === 8) {
            if (dom.data === '!') {
                var placeholder = document.createTextNode('');
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
exports.normalizeChildNodes = normalizeChildNodes;
function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    vNode.dom = dom;
    var props = vNode.props || utils.EMPTY_OBJ;
    if (isClass) {
        var _isSVG = dom.namespaceURI === constants.svgNS;
        var instance = utils.createClassComponentInstance(vNode, type, props, context, _isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vComponent = vNode;
        instance._vNode = vNode;
        hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
        mounting.mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false; // Mount finished allow going sync
        options.default.findDOMNodeEnabled && rendering.componentToDOMNodeMap.set(instance, dom);
    }
    else {
        var input = utils.createFunctionalComponentInput(vNode, type, props, context);
        hydrate(input, dom, lifecycle, context, isSVG);
        vNode.children = input;
        vNode.dom = input.dom;
        mounting.mountFunctionalComponentCallbacks(ref, dom, lifecycle);
    }
    return dom;
}
function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var flags = vNode.flags;
    var ref = vNode.ref;
    if (isSVG || (flags & 128 /* SvgElement */)) {
        isSVG = true;
    }
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        var newDom = mounting.mountElement(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        utils.replaceChild(dom.parentNode, newDom, dom);
        return newDom;
    }
    vNode.dom = dom;
    if (children) {
        hydrateChildren(children, dom, lifecycle, context, isSVG);
    }
    if (props) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = processElement_1.isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patching.patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement_1.processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (index$3.isNullOrUndef(className)) {
        dom.removeAttribute('class');
    }
    else {
        if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
    }
    if (ref) {
        mounting.mountRef(dom, ref, lifecycle);
    }
    return dom;
}
function hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
    normalizeChildNodes(parentDom);
    var dom = parentDom.firstChild;
    if (index$3.isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!index$3.isNull(child) && index$3.isObject(child)) {
                if (dom) {
                    dom = hydrate(child, dom, lifecycle, context, isSVG);
                    dom = dom.nextSibling;
                }
                else {
                    mounting.mount(child, parentDom, lifecycle, context, isSVG);
                }
            }
        }
    }
    else if (index$3.isStringOrNumber(children)) {
        if (dom && dom.nodeType === 3) {
            if (dom.nodeValue !== children) {
                dom.nodeValue = children;
            }
        }
        else if (children) {
            parentDom.textContent = children;
        }
        dom = dom.nextSibling;
    }
    else if (index$3.isObject(children)) {
        hydrate(children, dom, lifecycle, context, isSVG);
        dom = dom.nextSibling;
    }
    // clear any other DOM nodes, there should be only a single entry for the root
    while (dom) {
        var nextSibling = dom.nextSibling;
        parentDom.removeChild(dom);
        dom = nextSibling;
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = mounting.mountText(vNode, null);
        vNode.dom = newDom;
        utils.replaceChild(dom.parentNode, newDom, dom);
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
        return hydrateComponent(vNode, dom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
    }
    else if (flags & 3970 /* Element */) {
        return hydrateElement(vNode, dom, lifecycle, context, isSVG);
    }
    else if (flags & 1 /* Text */) {
        return hydrateText(vNode, dom);
    }
    else if (flags & 4096 /* Void */) {
        return hydrateVoid(vNode, dom);
    }
    else {
        index$3.throwError();
    }
}
function hydrateRoot(input, parentDom, lifecycle) {
    var dom = parentDom && parentDom.firstChild;
    if (dom) {
        hydrate(input, dom, lifecycle, utils.EMPTY_OBJ, false);
        dom = parentDom.firstChild;
        // clear any other DOM nodes, there should be only a single entry for the root
        while (dom = dom.nextSibling) {
            parentDom.removeChild(dom);
        }
        return true;
    }
    return false;
}
exports.default = hydrateRoot;
});

var recycling = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


var componentPools = new Map();
var elementPools = new Map();
function recycleElement(vNode, lifecycle, context, isSVG) {
    var tag = vNode.type;
    var pools = elementPools.get(tag);
    if (!index$3.isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!index$3.isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!index$3.isUndefined(recycledVNode)) {
                patching.patchElement(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
                return vNode.dom;
            }
        }
    }
    return null;
}
exports.recycleElement = recycleElement;
function poolElement(vNode) {
    var tag = vNode.type;
    var key = vNode.key;
    var pools = elementPools.get(tag);
    if (index$3.isUndefined(pools)) {
        pools = {
            nonKeyed: [],
            keyed: new Map()
        };
        elementPools.set(tag, pools);
    }
    if (index$3.isNull(key)) {
        pools.nonKeyed.push(vNode);
    }
    else {
        var pool = pools.keyed.get(key);
        if (index$3.isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
exports.poolElement = poolElement;
function recycleComponent(vNode, lifecycle, context, isSVG) {
    var type = vNode.type;
    var pools = componentPools.get(type);
    if (!index$3.isUndefined(pools)) {
        var key = vNode.key;
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!index$3.isUndefined(pool)) {
            var recycledVNode = pool.pop();
            if (!index$3.isUndefined(recycledVNode)) {
                var flags = vNode.flags;
                var failed = patching.patchComponent(recycledVNode, vNode, null, lifecycle, context, isSVG, flags & 4 /* ComponentClass */, true);
                if (!failed) {
                    return vNode.dom;
                }
            }
        }
    }
    return null;
}
exports.recycleComponent = recycleComponent;
function poolComponent(vNode) {
    var hooks = vNode.ref;
    var nonRecycleHooks = hooks && (hooks.onComponentWillMount ||
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
    if (index$3.isUndefined(pools)) {
        pools = {
            nonKeyed: [],
            keyed: new Map()
        };
        componentPools.set(type, pools);
    }
    if (index$3.isNull(key)) {
        pools.nonKeyed.push(vNode);
    }
    else {
        var pool = pools.keyed.get(key);
        if (index$3.isUndefined(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
exports.poolComponent = poolComponent;
});

var unmounting = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });






function unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
        unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling);
    }
    else if (flags & 3970 /* Element */) {
        unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling);
    }
    else if (flags & (1 /* Text */ | 4096 /* Void */)) {
        unmountVoidOrText(vNode, parentDom);
    }
}
exports.unmount = unmount;
function unmountVoidOrText(vNode, parentDom) {
    if (parentDom) {
        utils.removeChild(parentDom, vNode.dom);
    }
}
function unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var instance = vNode.children;
    var flags = vNode.flags;
    var isStatefulComponent = flags & 4;
    var ref = vNode.ref;
    var dom = vNode.dom;
    if (!isRecycling) {
        if (isStatefulComponent) {
            if (!instance._unmounted) {
                instance._blockSetState = true;
                options.default.beforeUnmount && options.default.beforeUnmount(vNode);
                instance.componentWillUnmount && instance.componentWillUnmount();
                if (ref && !isRecycling) {
                    ref(null);
                }
                instance._unmounted = true;
                options.default.findDOMNodeEnabled && rendering.componentToDOMNodeMap.delete(instance);
                unmount(instance._lastInput, null, instance._lifecycle, false, isRecycling);
            }
        }
        else {
            if (!index$3.isNullOrUndef(ref)) {
                if (!index$3.isNullOrUndef(ref.onComponentWillUnmount)) {
                    ref.onComponentWillUnmount(dom);
                }
            }
            unmount(instance, null, lifecycle, false, isRecycling);
        }
    }
    if (parentDom) {
        var lastInput = instance._lastInput;
        if (index$3.isNullOrUndef(lastInput)) {
            lastInput = instance;
        }
        utils.removeChild(parentDom, dom);
    }
    if (options.default.recyclingEnabled && !isStatefulComponent && (parentDom || canRecycle)) {
        recycling.poolComponent(vNode);
    }
}
exports.unmountComponent = unmountComponent;
function unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var dom = vNode.dom;
    var ref = vNode.ref;
    var props = vNode.props;
    if (ref && !isRecycling) {
        unmountRef(ref);
    }
    var children = vNode.children;
    if (!index$3.isNullOrUndef(children)) {
        unmountChildren(children, lifecycle, isRecycling);
    }
    if (!index$3.isNull(props)) {
        for (var name_1 in props) {
            // do not add a hasOwnProperty check here, it affects performance
            if (props[name_1] !== null && patching.isAttrAnEvent(name_1)) {
                patching.patchEvent(name_1, props[name_1], null, dom);
                // We need to set this null, because same props otherwise come back if SCU returns false and we are recyling
                props[name_1] = null;
            }
        }
    }
    if (parentDom) {
        utils.removeChild(parentDom, dom);
    }
    if (options.default.recyclingEnabled && (parentDom || canRecycle)) {
        recycling.poolElement(vNode);
    }
}
exports.unmountElement = unmountElement;
function unmountChildren(children, lifecycle, isRecycling) {
    if (index$3.isArray(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!index$3.isInvalid(child) && index$3.isObject(child)) {
                unmount(child, null, lifecycle, false, isRecycling);
            }
        }
    }
    else if (index$3.isObject(children)) {
        unmount(children, null, lifecycle, false, isRecycling);
    }
}
function unmountRef(ref) {
    if (index$3.isFunction(ref)) {
        ref(null);
    }
    else {
        if (index$3.isInvalid(ref)) {
            return;
        }
        index$3.throwError();
    }
}
});

var rendering = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });








// rather than use a Map, like we did before, we can use an array here
// given there shouldn't be THAT many roots on the page, the difference
// in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
exports.roots = [];
exports.componentToDOMNodeMap = new Map();
options.default.roots = exports.roots;
/**
 * When inferno.options.findDOMNOdeEnabled is true, this function will return DOM Node by component instance
 * @param ref Component instance
 * @returns {*|null} returns dom node
 */
function findDOMNode(ref) {
    if (!options.default.findDOMNodeEnabled) {
        index$3.throwError();
    }
    var dom = ref && ref.nodeType ? ref : null;
    return exports.componentToDOMNodeMap.get(ref) || dom;
}
exports.findDOMNode = findDOMNode;
function getRoot(dom) {
    for (var i = 0, len = exports.roots.length; i < len; i++) {
        var root = exports.roots[i];
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
    exports.roots.push(root);
    return root;
}
function removeRoot(root) {
    for (var i = 0, len = exports.roots.length; i < len; i++) {
        if (exports.roots[i] === root) {
            exports.roots.splice(i, 1);
            return;
        }
    }
}
var documentBody = index$3.isBrowser ? document.body : null;
/**
 * Renders virtual node tree into parent node.
 * @param {VNode | null | string | number} input vNode to be rendered
 * @param parentDom DOM node which content will be replaced by virtual node
 * @returns {InfernoChildren} rendered virtual node
 */
function render(input, parentDom) {
    if (documentBody === parentDom) {
        index$3.throwError();
    }
    if (input === index$3.NO_OP) {
        return;
    }
    var root = getRoot(parentDom);
    if (index$3.isNull(root)) {
        var lifecycle = new index$3.Lifecycle();
        if (!index$3.isInvalid(input)) {
            if (input.dom) {
                input = VNodes.directClone(input);
            }
            if (!hydration.default(input, parentDom, lifecycle)) {
                mounting.mount(input, parentDom, lifecycle, utils.EMPTY_OBJ, false);
            }
            root = setRoot(parentDom, input, lifecycle);
            lifecycle.trigger();
        }
    }
    else {
        var lifecycle = root.lifecycle;
        lifecycle.listeners = [];
        if (index$3.isNullOrUndef(input)) {
            unmounting.unmount(root.input, parentDom, lifecycle, false, false);
            removeRoot(root);
        }
        else {
            if (input.dom) {
                input = VNodes.directClone(input);
            }
            patching.patch(root.input, input, parentDom, lifecycle, utils.EMPTY_OBJ, false, false);
        }
        root.input = input;
        lifecycle.trigger();
    }
    if (root) {
        var rootInput = root.input;
        if (rootInput && (rootInput.flags & 28 /* Component */)) {
            return rootInput.children;
        }
    }
}
exports.render = render;
function createRenderer(parentDom) {
    return function renderer(lastInput, nextInput) {
        if (!parentDom) {
            parentDom = lastInput;
        }
        render(nextInput, parentDom);
    };
}
exports.createRenderer = createRenderer;
});

var patching = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });










function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    if (lastVNode !== nextVNode) {
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        if (nextFlags & 28 /* Component */) {
            if (lastFlags & 28 /* Component */) {
                patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */, isRecycling);
            }
            else {
                utils.replaceVNode(parentDom, mounting.mountComponent(nextVNode, null, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 3970 /* Element */) {
            if (lastFlags & 3970 /* Element */) {
                patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
            }
            else {
                utils.replaceVNode(parentDom, mounting.mountElement(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 1 /* Text */) {
            if (lastFlags & 1 /* Text */) {
                patchText(lastVNode, nextVNode);
            }
            else {
                utils.replaceVNode(parentDom, mounting.mountText(nextVNode, null), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 4096 /* Void */) {
            if (lastFlags & 4096 /* Void */) {
                patchVoid(lastVNode, nextVNode);
            }
            else {
                utils.replaceVNode(parentDom, mounting.mountVoid(nextVNode, null), lastVNode, lifecycle, isRecycling);
            }
        }
        else {
            // Error case: mount new one replacing old one
            utils.replaceLastChildAndUnmount(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
exports.patch = patch;
function unmountChildren(children, dom, lifecycle, isRecycling) {
    if (VNodes.isVNode(children)) {
        unmounting.unmount(children, dom, lifecycle, true, isRecycling);
    }
    else if (index$3.isArray(children)) {
        utils.removeAllChildren(dom, children, lifecycle, isRecycling);
    }
    else {
        dom.textContent = '';
    }
}
function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    var nextTag = nextVNode.type;
    var lastTag = lastVNode.type;
    if (lastTag !== nextTag) {
        utils.replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
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
        if (isSVG || (nextFlags & 128 /* SvgElement */) > 0) {
            isSVG = true;
        }
        if (lastChildren !== nextChildren) {
            patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || utils.EMPTY_OBJ;
            var nextPropsOrEmpty = nextProps || utils.EMPTY_OBJ;
            var hasControlledValue = false;
            if (nextPropsOrEmpty !== utils.EMPTY_OBJ) {
                var isFormElement = (nextFlags & 3584 /* FormElement */) > 0;
                if (isFormElement) {
                    hasControlledValue = processElement_1.isControlledFormElement(nextPropsOrEmpty);
                }
                for (var prop in nextPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    var nextValue = nextPropsOrEmpty[prop];
                    var lastValue = lastPropsOrEmpty[prop];
                    patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue);
                }
                if (isFormElement) {
                    processElement_1.processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, false, hasControlledValue);
                }
            }
            if (lastPropsOrEmpty !== utils.EMPTY_OBJ) {
                for (var prop in lastPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    if (index$3.isNullOrUndef(nextPropsOrEmpty[prop])) {
                        removeProp(prop, lastPropsOrEmpty[prop], dom);
                    }
                }
            }
        }
        // inlined patchProps  -- ends --
        if (lastClassName !== nextClassName) {
            if (index$3.isNullOrUndef(nextClassName)) {
                dom.removeAttribute('class');
            }
            else {
                if (isSVG) {
                    dom.setAttribute('class', nextClassName);
                }
                else {
                    dom.className = nextClassName;
                }
            }
        }
        if (nextRef) {
            if (lastVNode.ref !== nextRef || isRecycling) {
                mounting.mountRef(dom, nextRef, lifecycle);
            }
        }
    }
}
exports.patchElement = patchElement;
function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var patchArray = false;
    var patchKeyed = false;
    if (nextFlags & 64 /* HasNonKeyedChildren */) {
        patchArray = true;
    }
    else if ((lastFlags & 32 /* HasKeyedChildren */) && (nextFlags & 32 /* HasKeyedChildren */)) {
        patchKeyed = true;
        patchArray = true;
    }
    else if (index$3.isInvalid(nextChildren)) {
        unmountChildren(lastChildren, dom, lifecycle, isRecycling);
    }
    else if (index$3.isInvalid(lastChildren)) {
        if (index$3.isStringOrNumber(nextChildren)) {
            utils.setTextContent(dom, nextChildren);
        }
        else {
            if (index$3.isArray(nextChildren)) {
                mounting.mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
            }
            else {
                mounting.mount(nextChildren, dom, lifecycle, context, isSVG);
            }
        }
    }
    else if (index$3.isStringOrNumber(nextChildren)) {
        if (index$3.isStringOrNumber(lastChildren)) {
            utils.updateTextContent(dom, nextChildren);
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            utils.setTextContent(dom, nextChildren);
        }
    }
    else if (index$3.isArray(nextChildren)) {
        if (index$3.isArray(lastChildren)) {
            patchArray = true;
            if (utils.isKeyed(lastChildren, nextChildren)) {
                patchKeyed = true;
            }
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mounting.mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    else if (index$3.isArray(lastChildren)) {
        utils.removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
        mounting.mount(nextChildren, dom, lifecycle, context, isSVG);
    }
    else if (VNodes.isVNode(nextChildren)) {
        if (VNodes.isVNode(lastChildren)) {
            patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            mounting.mount(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    if (patchArray) {
        if (patchKeyed) {
            patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        else {
            patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
    var lastType = lastVNode.type;
    var nextType = nextVNode.type;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    if (lastType !== nextType || lastKey !== nextKey) {
        utils.replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        return false;
    }
    else {
        var nextProps = nextVNode.props || utils.EMPTY_OBJ;
        if (isClass) {
            var instance = lastVNode.children;
            instance._updating = true;
            if (instance._unmounted) {
                if (index$3.isNull(parentDom)) {
                    return true;
                }
                utils.replaceChild(parentDom, mounting.mountComponent(nextVNode, null, lifecycle, context, isSVG, nextVNode.flags & 4 /* ComponentClass */), lastVNode.dom);
            }
            else {
                var lastState = instance.state;
                var nextState = instance.state;
                var lastProps = instance.props;
                var childContext = void 0;
                if (!index$3.isUndefined(instance.getChildContext)) {
                    childContext = instance.getChildContext();
                }
                nextVNode.children = instance;
                instance._isSVG = isSVG;
                if (index$3.isNullOrUndef(childContext)) {
                    childContext = context;
                }
                else {
                    childContext = index$3.combineFrom(context, childContext);
                }
                var lastInput = instance._lastInput;
                var nextInput = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
                var didUpdate = true;
                instance._childContext = childContext;
                if (index$3.isInvalid(nextInput)) {
                    nextInput = VNodes.createVoidVNode();
                }
                else if (nextInput === index$3.NO_OP) {
                    nextInput = lastInput;
                    didUpdate = false;
                }
                else if (index$3.isStringOrNumber(nextInput)) {
                    nextInput = VNodes.createTextVNode(nextInput, null);
                }
                else if (index$3.isArray(nextInput)) {
                    index$3.throwError();
                }
                else if (index$3.isObject(nextInput) && nextInput.dom) {
                    nextInput = VNodes.directClone(nextInput);
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
                    if (!index$3.isUndefined(instance.componentDidUpdate)) {
                        instance.componentDidUpdate(lastProps, lastState);
                    }
                    options.default.afterUpdate && options.default.afterUpdate(nextVNode);
                    options.default.findDOMNodeEnabled && rendering.componentToDOMNodeMap.set(instance, nextInput.dom);
                }
                nextVNode.dom = nextInput.dom;
            }
            instance._updating = false;
        }
        else {
            var shouldUpdate = true;
            var lastProps = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !index$3.isNullOrUndef(nextHooks);
            var lastInput = lastVNode.children;
            var nextInput = lastInput;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput;
            if (lastKey !== nextKey) {
                shouldUpdate = true;
            }
            else {
                if (nextHooksDefined && !index$3.isNullOrUndef(nextHooks.onComponentShouldUpdate)) {
                    shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps, nextProps);
                }
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && !index$3.isNullOrUndef(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps, nextProps);
                }
                nextInput = nextType(nextProps, context);
                if (index$3.isInvalid(nextInput)) {
                    nextInput = VNodes.createVoidVNode();
                }
                else if (index$3.isStringOrNumber(nextInput) && nextInput !== index$3.NO_OP) {
                    nextInput = VNodes.createTextVNode(nextInput, null);
                }
                else if (index$3.isArray(nextInput)) {
                    index$3.throwError();
                }
                else if (index$3.isObject(nextInput) && nextInput.dom) {
                    nextInput = VNodes.directClone(nextInput);
                }
                if (nextInput !== index$3.NO_OP) {
                    patch(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling);
                    nextVNode.children = nextInput;
                    if (nextHooksDefined && !index$3.isNullOrUndef(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps, nextProps);
                    }
                    nextVNode.dom = nextInput.dom;
                }
            }
            if (nextInput.flags & 28 /* Component */) {
                nextInput.parentVNode = nextVNode;
            }
            else if (lastInput.flags & 28 /* Component */) {
                lastInput.parentVNode = nextVNode;
            }
        }
    }
    return false;
}
exports.patchComponent = patchComponent;
function patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = lastVNode.dom;
    nextVNode.dom = dom;
    if (lastVNode.children !== nextText) {
        dom.nodeValue = nextText;
    }
}
exports.patchText = patchText;
function patchVoid(lastVNode, nextVNode) {
    nextVNode.dom = lastVNode.dom;
}
exports.patchVoid = patchVoid;
function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var lastChildrenLength = lastChildren.length;
    var nextChildrenLength = nextChildren.length;
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    for (; i < commonLength; i++) {
        var nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = VNodes.directClone(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            var nextChild = nextChildren[i];
            if (nextChild.dom) {
                nextChild = nextChildren[i] = VNodes.directClone(nextChild);
            }
            utils.appendChild(dom, mounting.mount(nextChild, null, lifecycle, context, isSVG));
        }
    }
    else if (nextChildrenLength === 0) {
        utils.removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            unmounting.unmount(lastChildren[i], dom, lifecycle, false, isRecycling);
        }
    }
}
exports.patchNonKeyedChildren = patchNonKeyedChildren;
function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling) {
    var aLength = a.length;
    var bLength = b.length;
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
    if (aLength === 0) {
        if (bLength !== 0) {
            mounting.mountArrayChildren(b, dom, lifecycle, context, isSVG);
        }
        return;
    }
    else if (bLength === 0) {
        utils.removeAllChildren(dom, a, lifecycle, isRecycling);
        return;
    }
    var aStartNode = a[aStart];
    var bStartNode = b[bStart];
    var aEndNode = a[aEnd];
    var bEndNode = b[bEnd];
    if (bStartNode.dom) {
        b[bStart] = bStartNode = VNodes.directClone(bStartNode);
    }
    if (bEndNode.dom) {
        b[bEnd] = bEndNode = VNodes.directClone(bEndNode);
    }
    // Step 1
    /* eslint no-constant-condition: 0 */
    outer: while (true) {
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
                b[bStart] = bStartNode = VNodes.directClone(bStartNode);
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
                b[bEnd] = bEndNode = VNodes.directClone(bEndNode);
            }
        }
        // Move and sync nodes from right to left.
        if (aEndNode.key === bStartNode.key) {
            patch(aEndNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            utils.insertOrAppend(dom, bStartNode.dom, aStartNode.dom);
            aEnd--;
            bStart++;
            aEndNode = a[aEnd];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = VNodes.directClone(bStartNode);
            }
            continue;
        }
        // Move and sync nodes from left to right.
        if (aStartNode.key === bEndNode.key) {
            patch(aStartNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            utils.insertOrAppend(dom, bEndNode.dom, nextNode);
            aStart++;
            bEnd--;
            aStartNode = a[aStart];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = VNodes.directClone(bEndNode);
            }
            continue;
        }
        break;
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = VNodes.directClone(node);
                }
                bStart++;
                utils.insertOrAppend(dom, mounting.mount(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    }
    else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            unmounting.unmount(a[aStart++], dom, lifecycle, false, isRecycling);
        }
    }
    else {
        aLength = aEnd - aStart + 1;
        bLength = bEnd - bStart + 1;
        var sources = new Array(bLength);
        // Mark all nodes as inserted.
        for (i = 0; i < bLength; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if ((bLength <= 4) || (aLength * bLength <= 16)) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
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
                                b[j] = bNode = VNodes.directClone(bNode);
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
                if (patched < bLength) {
                    j = keyIndex.get(aNode.key);
                    if (!index$3.isUndefined(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = VNodes.directClone(bNode);
                        }
                        patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (aLength === a.length && patched === 0) {
            utils.removeAllChildren(dom, a, lifecycle, isRecycling);
            while (bStart < bLength) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = VNodes.directClone(node);
                }
                bStart++;
                utils.insertOrAppend(dom, mounting.mount(node, null, lifecycle, context, isSVG), null);
            }
        }
        else {
            i = aLength - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (!index$3.isNull(aNode)) {
                    unmounting.unmount(aNode, dom, lifecycle, true, isRecycling);
                    i--;
                }
            }
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = VNodes.directClone(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        utils.insertOrAppend(dom, mounting.mount(node, dom, lifecycle, context, isSVG), nextNode);
                    }
                    else {
                        if (j < 0 || i !== seq[j]) {
                            pos = i + bStart;
                            node = b[pos];
                            nextPos = pos + 1;
                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
                            utils.insertOrAppend(dom, node.dom, nextNode);
                        }
                        else {
                            j--;
                        }
                    }
                }
            }
            else if (patched !== bLength) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = VNodes.directClone(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        utils.insertOrAppend(dom, mounting.mount(node, null, lifecycle, context, isSVG), nextNode);
                    }
                }
            }
        }
    }
}
exports.patchKeyedChildren = patchKeyedChildren;
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
        if (arrI === -1) {
            continue;
        }
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
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}
function isAttrAnEvent(attr) {
    return attr[0] === 'o' && attr[1] === 'n';
}
exports.isAttrAnEvent = isAttrAnEvent;
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue) {
    if (lastValue !== nextValue) {
        if (prop in constants.skipProps || (hasControlledValue && prop === 'value')) {
            return;
        }
        else if (prop in constants.booleanProps) {
            prop = prop === 'autoFocus' ? prop.toLowerCase() : prop;
            dom[prop] = !!nextValue;
        }
        else if (prop in constants.strictProps) {
            var value = index$3.isNullOrUndef(nextValue) ? '' : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
        }
        else if (isAttrAnEvent(prop)) {
            patchEvent(prop, lastValue, nextValue, dom);
        }
        else if (index$3.isNullOrUndef(nextValue)) {
            dom.removeAttribute(prop);
        }
        else if (prop === 'style') {
            patchStyle(lastValue, nextValue, dom);
        }
        else if (prop === 'dangerouslySetInnerHTML') {
            var lastHtml = lastValue && lastValue.__html;
            var nextHtml = nextValue && nextValue.__html;
            if (lastHtml !== nextHtml) {
                if (!index$3.isNullOrUndef(nextHtml)) {
                    dom.innerHTML = nextHtml;
                }
            }
        }
        else {
            // We optimize for NS being boolean. Its 99.9% time false
            if (isSVG && prop in constants.namespaces) {
                // If we end up in this path we can read property again
                dom.setAttributeNS(constants.namespaces[prop], prop, nextValue);
            }
            else {
                dom.setAttribute(prop, nextValue);
            }
        }
    }
}
exports.patchProp = patchProp;
function patchEvent(name, lastValue, nextValue, dom) {
    if (lastValue !== nextValue) {
        if (name in constants.delegatedEvents) {
            delegation.handleEvent(name, lastValue, nextValue, dom);
        }
        else {
            var nameLowerCase = name.toLowerCase();
            var domEvent = dom[nameLowerCase];
            // if the function is wrapped, that means it's been controlled by a wrapper
            if (domEvent && domEvent.wrapped) {
                return;
            }
            if (!index$3.isFunction(nextValue) && !index$3.isNullOrUndef(nextValue)) {
                var linkEvent_1 = nextValue.event;
                if (linkEvent_1 && index$3.isFunction(linkEvent_1)) {
                    if (!dom._data) {
                        dom[nameLowerCase] = function (e) {
                            linkEvent_1(e.currentTarget._data, e);
                        };
                    }
                    dom._data = nextValue.data;
                }
                else {
                    index$3.throwError();
                }
            }
            else {
                dom[nameLowerCase] = nextValue;
            }
        }
    }
}
exports.patchEvent = patchEvent;
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    var domStyle = dom.style;
    if (index$3.isString(nextAttrValue)) {
        domStyle.cssText = nextAttrValue;
        return;
    }
    for (var style in nextAttrValue) {
        // do not add a hasOwnProperty check here, it affects performance
        var value = nextAttrValue[style];
        if (!index$3.isNumber(value) || style in constants.isUnitlessNumber) {
            domStyle[style] = value;
        }
        else {
            domStyle[style] = value + 'px';
        }
    }
    if (!index$3.isNullOrUndef(lastAttrValue)) {
        for (var style in lastAttrValue) {
            if (index$3.isNullOrUndef(nextAttrValue[style])) {
                domStyle[style] = '';
            }
        }
    }
}
exports.patchStyle = patchStyle;
function removeProp(prop, lastValue, dom) {
    if (prop === 'value') {
        dom.value = '';
    }
    else if (prop === 'style') {
        dom.removeAttribute('style');
    }
    else if (isAttrAnEvent(prop)) {
        delegation.handleEvent(name, lastValue, null, dom);
    }
    else {
        dom.removeAttribute(prop);
    }
}
});

var mounting = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });








function mount(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 3970 /* Element */) {
        return mountElement(vNode, parentDom, lifecycle, context, isSVG);
    }
    else if (flags & 28 /* Component */) {
        return mountComponent(vNode, parentDom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
    }
    else if (flags & 4096 /* Void */) {
        return mountVoid(vNode, parentDom);
    }
    else if (flags & 1 /* Text */) {
        return mountText(vNode, parentDom);
    }
    else {
        index$3.throwError();
    }
}
exports.mount = mount;
function mountText(vNode, parentDom) {
    var dom = document.createTextNode(vNode.children);
    vNode.dom = dom;
    if (parentDom) {
        utils.appendChild(parentDom, dom);
    }
    return dom;
}
exports.mountText = mountText;
function mountVoid(vNode, parentDom) {
    var dom = document.createTextNode('');
    vNode.dom = dom;
    if (parentDom) {
        utils.appendChild(parentDom, dom);
    }
    return dom;
}
exports.mountVoid = mountVoid;
function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    if (options.default.recyclingEnabled) {
        var dom_1 = recycling.recycleElement(vNode, lifecycle, context, isSVG);
        if (!index$3.isNull(dom_1)) {
            if (!index$3.isNull(parentDom)) {
                utils.appendChild(parentDom, dom_1);
            }
            return dom_1;
        }
    }
    var flags = vNode.flags;
    if (isSVG || (flags & 128 /* SvgElement */)) {
        isSVG = true;
    }
    var dom = utils.documentCreateElement(vNode.type, isSVG);
    var children = vNode.children;
    var props = vNode.props;
    var className = vNode.className;
    var ref = vNode.ref;
    vNode.dom = dom;
    if (!index$3.isInvalid(children)) {
        if (index$3.isStringOrNumber(children)) {
            utils.setTextContent(dom, children);
        }
        else if (index$3.isArray(children)) {
            mountArrayChildren(children, dom, lifecycle, context, isSVG);
        }
        else if (VNodes.isVNode(children)) {
            mount(children, dom, lifecycle, context, isSVG);
        }
    }
    if (!index$3.isNull(props)) {
        var hasControlledValue = false;
        var isFormElement = (flags & 3584 /* FormElement */) > 0;
        if (isFormElement) {
            hasControlledValue = processElement_1.isControlledFormElement(props);
        }
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            patching.patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
        if (isFormElement) {
            processElement_1.processElement(flags, vNode, dom, props, true, hasControlledValue);
        }
    }
    if (index$3.isNullOrUndef(className)) {
        dom.removeAttribute('class');
    }
    else {
        if (isSVG) {
            dom.setAttribute('class', className);
        }
        else {
            dom.className = className;
        }
    }
    if (!index$3.isNull(ref)) {
        mountRef(dom, ref, lifecycle);
    }
    if (!index$3.isNull(parentDom)) {
        utils.appendChild(parentDom, dom);
    }
    return dom;
}
exports.mountElement = mountElement;
function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        // Verify can string/number be here. might cause de-opt. - Normalization takes care of it.
        if (!index$3.isInvalid(child)) {
            if (child.dom) {
                children[i] = child = VNodes.directClone(child);
            }
            mount(children[i], dom, lifecycle, context, isSVG);
        }
    }
}
exports.mountArrayChildren = mountArrayChildren;
function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    if (options.default.recyclingEnabled) {
        var dom_2 = recycling.recycleComponent(vNode, lifecycle, context, isSVG);
        if (!index$3.isNull(dom_2)) {
            if (!index$3.isNull(parentDom)) {
                utils.appendChild(parentDom, dom_2);
            }
            return dom_2;
        }
    }
    var type = vNode.type;
    var props = vNode.props || utils.EMPTY_OBJ;
    var ref = vNode.ref;
    var dom;
    if (isClass) {
        var instance = utils.createClassComponentInstance(vNode, type, props, context, isSVG, lifecycle);
        var input = instance._lastInput;
        instance._vNode = vNode;
        vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
        if (!index$3.isNull(parentDom)) {
            utils.appendChild(parentDom, dom);
        }
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        instance._updating = false;
        options.default.findDOMNodeEnabled && rendering.componentToDOMNodeMap.set(instance, dom);
    }
    else {
        var input = utils.createFunctionalComponentInput(vNode, type, props, context);
        vNode.dom = dom = mount(input, null, lifecycle, context, isSVG);
        vNode.children = input;
        mountFunctionalComponentCallbacks(ref, dom, lifecycle);
        if (!index$3.isNull(parentDom)) {
            utils.appendChild(parentDom, dom);
        }
    }
    return dom;
}
exports.mountComponent = mountComponent;
function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (ref) {
        if (index$3.isFunction(ref)) {
            ref(instance);
        }
        else {
            index$3.throwError();
        }
    }
    var hasDidMount = !index$3.isUndefined(instance.componentDidMount);
    var afterMount = options.default.afterMount;
    if (hasDidMount || !index$3.isNull(afterMount)) {
        lifecycle.addListener(function () {
            instance._updating = true;
            if (afterMount) {
                afterMount(vNode);
            }
            if (hasDidMount) {
                instance.componentDidMount();
            }
            instance._updating = false;
        });
    }
}
exports.mountClassComponentCallbacks = mountClassComponentCallbacks;
function mountFunctionalComponentCallbacks(ref, dom, lifecycle) {
    if (ref) {
        if (!index$3.isNullOrUndef(ref.onComponentWillMount)) {
            ref.onComponentWillMount();
        }
        if (!index$3.isNullOrUndef(ref.onComponentDidMount)) {
            lifecycle.addListener(function () { return ref.onComponentDidMount(dom); });
        }
    }
}
exports.mountFunctionalComponentCallbacks = mountFunctionalComponentCallbacks;
function mountRef(dom, value, lifecycle) {
    if (index$3.isFunction(value)) {
        lifecycle.addListener(function () { return value(dom); });
    }
    else {
        if (index$3.isInvalid(value)) {
            return;
        }
        index$3.throwError();
    }
}
exports.mountRef = mountRef;
});

var utils = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });








// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
exports.EMPTY_OBJ = {};
function createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
    if (index$3.isUndefined(context)) {
        context = exports.EMPTY_OBJ; // Context should not be mutable
    }
    var instance = new Component(props, context);
    vNode.children = instance;
    instance._blockSetState = false;
    instance.context = context;
    if (instance.props === exports.EMPTY_OBJ) {
        instance.props = props;
    }
    instance._patch = patching.patch;
    if (options.default.findDOMNodeEnabled) {
        instance._componentToDOMNodeMap = rendering.componentToDOMNodeMap;
    }
    // setState callbacks must fire after render is done when called from componentWillReceiveProps or componentWillMount
    instance._lifecycle = lifecycle;
    instance._unmounted = false;
    instance._pendingSetState = true;
    instance._isSVG = isSVG;
    if (!index$3.isUndefined(instance.componentWillMount)) {
        instance._blockRender = true;
        instance.componentWillMount();
        instance._blockRender = false;
    }
    var childContext;
    if (!index$3.isUndefined(instance.getChildContext)) {
        childContext = instance.getChildContext();
    }
    if (index$3.isNullOrUndef(childContext)) {
        instance._childContext = context;
    }
    else {
        instance._childContext = index$3.combineFrom(context, childContext);
    }
    options.default.beforeRender && options.default.beforeRender(instance);
    var input = instance.render(props, instance.state, context);
    options.default.afterRender && options.default.afterRender(instance);
    if (index$3.isArray(input)) {
        index$3.throwError();
    }
    else if (index$3.isInvalid(input)) {
        input = VNodes.createVoidVNode();
    }
    else if (index$3.isStringOrNumber(input)) {
        input = VNodes.createTextVNode(input, null);
    }
    else {
        if (input.dom) {
            input = VNodes.directClone(input);
        }
        if (input.flags & 28 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // so we break monomorphism on our input and supply it our vNode as parentVNode
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = vNode;
        }
    }
    instance._pendingSetState = false;
    instance._lastInput = input;
    return instance;
}
exports.createClassComponentInstance = createClassComponentInstance;
function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
    replaceVNode(parentDom, mounting.mount(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
}
exports.replaceLastChildAndUnmount = replaceLastChildAndUnmount;
function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
    unmounting.unmount(vNode, null, lifecycle, false, isRecycling);
    replaceChild(parentDom, dom, vNode.dom);
}
exports.replaceVNode = replaceVNode;
function createFunctionalComponentInput(vNode, component, props, context) {
    var input = component(props, context);
    if (index$3.isArray(input)) {
        index$3.throwError();
    }
    else if (index$3.isInvalid(input)) {
        input = VNodes.createVoidVNode();
    }
    else if (index$3.isStringOrNumber(input)) {
        input = VNodes.createTextVNode(input, null);
    }
    else {
        if (input.dom) {
            input = VNodes.directClone(input);
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
exports.createFunctionalComponentInput = createFunctionalComponentInput;
function setTextContent(dom, text) {
    if (text !== '') {
        dom.textContent = text;
    }
    else {
        dom.appendChild(document.createTextNode(''));
    }
}
exports.setTextContent = setTextContent;
function updateTextContent(dom, text) {
    dom.firstChild.nodeValue = text;
}
exports.updateTextContent = updateTextContent;
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
exports.appendChild = appendChild;
function insertOrAppend(parentDom, newNode, nextNode) {
    if (index$3.isNullOrUndef(nextNode)) {
        appendChild(parentDom, newNode);
    }
    else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
exports.insertOrAppend = insertOrAppend;
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(constants.svgNS, tag);
    }
    else {
        return document.createElement(tag);
    }
}
exports.documentCreateElement = documentCreateElement;
function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    unmounting.unmount(lastNode, null, lifecycle, false, isRecycling);
    var dom = mounting.mount(nextNode, null, lifecycle, context, isSVG);
    nextNode.dom = dom;
    replaceChild(parentDom, dom, lastNode.dom);
}
exports.replaceWithNewNode = replaceWithNewNode;
function replaceChild(parentDom, nextDom, lastDom) {
    if (!parentDom) {
        parentDom = lastDom.parentNode;
    }
    parentDom.replaceChild(nextDom, lastDom);
}
exports.replaceChild = replaceChild;
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
exports.removeChild = removeChild;
function removeAllChildren(dom, children, lifecycle, isRecycling) {
    dom.textContent = '';
    if (!options.default.recyclingEnabled || (options.default.recyclingEnabled && !isRecycling)) {
        removeChildren(null, children, lifecycle, isRecycling);
    }
}
exports.removeAllChildren = removeAllChildren;
function removeChildren(dom, children, lifecycle, isRecycling) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!index$3.isInvalid(child)) {
            unmounting.unmount(child, dom, lifecycle, true, isRecycling);
        }
    }
}
exports.removeChildren = removeChildren;
function isKeyed(lastChildren, nextChildren) {
    return nextChildren.length && !index$3.isNullOrUndef(nextChildren[0]) && !index$3.isNullOrUndef(nextChildren[0].key)
        && lastChildren.length && !index$3.isNullOrUndef(lastChildren[0]) && !index$3.isNullOrUndef(lastChildren[0].key);
}
exports.isKeyed = isKeyed;
});

var normalization = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


function applyKey(key, vNode) {
    vNode.key = key;
    return vNode;
}
function applyKeyIfMissing(key, vNode) {
    if (index$3.isNumber(key)) {
        key = "." + key;
    }
    if (index$3.isNull(vNode.key) || vNode.key[0] === '.') {
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
        if (!index$3.isInvalid(n)) {
            if (index$3.isArray(n)) {
                _normalizeVNodes(n, result, 0, key);
            }
            else {
                if (index$3.isStringOrNumber(n)) {
                    n = VNodes.createTextVNode(n, null);
                }
                else if (VNodes.isVNode(n) && n.dom || (n.key && n.key[0] === '.')) {
                    n = VNodes.directClone(n);
                }
                if (index$3.isNull(n.key) || n.key[0] === '.') {
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
    if (nodes['$']) {
        nodes = nodes.slice();
    }
    else {
        nodes['$'] = true;
    }
    // tslint:enable
    for (var i = 0, len = nodes.length; i < len; i++) {
        var n = nodes[i];
        if (index$3.isInvalid(n) || index$3.isArray(n)) {
            var result = (newNodes || nodes).slice(0, i);
            _normalizeVNodes(nodes, result, i, "");
            return result;
        }
        else if (index$3.isStringOrNumber(n)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, VNodes.createTextVNode(n, null)));
        }
        else if ((VNodes.isVNode(n) && n.dom) || (index$3.isNull(n.key) && !(n.flags & 64 /* HasNonKeyedChildren */))) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, VNodes.directClone(n)));
        }
        else if (newNodes) {
            newNodes.push(applyKeyIfMissing(i, VNodes.directClone(n)));
        }
    }
    return newNodes || nodes;
}
exports.normalizeVNodes = normalizeVNodes;
function normalizeChildren(children) {
    if (index$3.isArray(children)) {
        return normalizeVNodes(children);
    }
    else if (VNodes.isVNode(children) && children.dom) {
        return VNodes.directClone(children);
    }
    return children;
}
function normalizeProps(vNode, props, children) {
    if (!(vNode.flags & 28 /* Component */)) {
        if (index$3.isNullOrUndef(children) && !index$3.isNullOrUndef(props.children)) {
            vNode.children = props.children;
        }
        if (props.className) {
            vNode.className = props.className;
            delete props.className;
        }
    }
    if (props.ref) {
        vNode.ref = props.ref;
        delete props.ref;
    }
    if (!index$3.isNullOrUndef(props.key)) {
        vNode.key = props.key;
        delete props.key;
    }
}
function normalizeElement(type, vNode) {
    if (type === 'svg') {
        vNode.flags = 128 /* SvgElement */;
    }
    else if (type === 'input') {
        vNode.flags = 512 /* InputElement */;
    }
    else if (type === 'select') {
        vNode.flags = 2048 /* SelectElement */;
    }
    else if (type === 'textarea') {
        vNode.flags = 1024 /* TextareaElement */;
    }
    else if (type === 'media') {
        vNode.flags = 256 /* MediaElement */;
    }
    else {
        vNode.flags = 2 /* HtmlElement */;
    }
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
        if (!index$3.isNullOrUndef(defaultProps)) {
            if (!props) {
                props = vNode.props = defaultProps; // Create new object if only defaultProps given
            }
            else {
                for (var prop in defaultProps) {
                    if (index$3.isUndefined(props[prop])) {
                        props[prop] = defaultProps[prop];
                    }
                }
            }
        }
        if (index$3.isString(type)) {
            normalizeElement(type, vNode);
            if (props && props.children) {
                vNode.children = props.children;
                children = props.children;
            }
        }
    }
    if (props) {
        normalizeProps(vNode, props, children);
    }
    if (!index$3.isInvalid(children)) {
        vNode.children = normalizeChildren(children);
    }
    if (props && !index$3.isInvalid(props.children)) {
        props.children = normalizeChildren(props.children);
    }
    
}
exports.normalize = normalize;
});

var VNodes = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });




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
        flags = index$3.isStatefulComponent(type) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
    }
    var vNode = {
        children: index$3.isUndefined(children) ? null : children,
        className: className,
        dom: null,
        flags: flags,
        key: index$3.isUndefined(key) ? null : key,
        props: props || null,
        ref: ref || null,
        type: type
    };
    if (!noNormalise) {
        normalization.normalize(vNode);
    }
    if (options.default.createVNode) {
        options.default.createVNode(vNode);
    }
    return vNode;
}
exports.createVNode = createVNode;
function directClone(vNodeToClone) {
    var newVNode;
    var flags = vNodeToClone.flags;
    if (flags & 28 /* Component */) {
        var props = void 0;
        var propsToClone = vNodeToClone.props;
        if (!propsToClone) {
            props = utils.EMPTY_OBJ;
        }
        else {
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
        newVNode = createVNode(flags, vNodeToClone.type, vNodeToClone.className, null, props, vNodeToClone.key, vNodeToClone.ref, true);
        var newProps = newVNode.props;
        if (newProps) {
            var newChildren = newProps.children;
            // we need to also clone component children that are in props
            // as the children may also have been hoisted
            if (newChildren) {
                if (index$3.isArray(newChildren)) {
                    var len = newChildren.length;
                    if (len > 0) {
                        var tmpArray = [];
                        for (var i = 0; i < len; i++) {
                            var child = newChildren[i];
                            if (index$3.isStringOrNumber(child)) {
                                tmpArray.push(child);
                            }
                            else if (!index$3.isInvalid(child) && isVNode(child)) {
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
        }
        newVNode.children = null;
    }
    else if (flags & 3970 /* Element */) {
        var children = vNodeToClone.children;
        var props = void 0;
        var propsToClone = vNodeToClone.props;
        if (!propsToClone) {
            props = utils.EMPTY_OBJ;
        }
        else {
            props = {};
            for (var key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
        newVNode = createVNode(flags, vNodeToClone.type, vNodeToClone.className, children, props, vNodeToClone.key, vNodeToClone.ref, !children);
    }
    else if (flags & 1 /* Text */) {
        newVNode = createTextVNode(vNodeToClone.children, vNodeToClone.key);
    }
    return newVNode;
}
exports.directClone = directClone;
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
    var _children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _children[_i - 2] = arguments[_i];
    }
    var children = _children;
    var childrenLen = _children.length;
    if (childrenLen > 0 && !index$3.isUndefined(_children[0])) {
        if (!props) {
            props = {};
        }
        if (childrenLen === 1) {
            children = _children[0];
        }
        if (!index$3.isUndefined(children)) {
            props.children = children;
        }
    }
    var newVNode;
    if (index$3.isArray(vNodeToClone)) {
        var tmpArray = [];
        for (var i = 0, len = vNodeToClone.length; i < len; i++) {
            tmpArray.push(directClone(vNodeToClone[i]));
        }
        newVNode = tmpArray;
    }
    else {
        var flags = vNodeToClone.flags;
        var className = vNodeToClone.className || (props && props.className) || null;
        var key = !index$3.isNullOrUndef(vNodeToClone.key) ? vNodeToClone.key : (props ? props.key : null);
        var ref = vNodeToClone.ref || (props ? props.ref : null);
        if (flags & 28 /* Component */) {
            newVNode = createVNode(flags, vNodeToClone.type, className, null, (!vNodeToClone.props && !props) ? utils.EMPTY_OBJ : index$3.combineFrom(vNodeToClone.props, props), key, ref, true);
            var newProps = newVNode.props;
            if (newProps) {
                var newChildren = newProps.children;
                // we need to also clone component children that are in props
                // as the children may also have been hoisted
                if (newChildren) {
                    if (index$3.isArray(newChildren)) {
                        var len = newChildren.length;
                        if (len > 0) {
                            var tmpArray = [];
                            for (var i = 0; i < len; i++) {
                                var child = newChildren[i];
                                if (index$3.isStringOrNumber(child)) {
                                    tmpArray.push(child);
                                }
                                else if (!index$3.isInvalid(child) && isVNode(child)) {
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
            }
            newVNode.children = null;
        }
        else if (flags & 3970 /* Element */) {
            children = (props && !index$3.isUndefined(props.children)) ? props.children : vNodeToClone.children;
            newVNode = createVNode(flags, vNodeToClone.type, className, children, (!vNodeToClone.props && !props) ? utils.EMPTY_OBJ : index$3.combineFrom(vNodeToClone.props, props), key, ref, !children);
        }
        else if (flags & 1 /* Text */) {
            newVNode = createTextVNode(vNodeToClone.children, key);
        }
    }
    return newVNode;
}
exports.cloneVNode = cloneVNode;
function createVoidVNode() {
    return createVNode(4096 /* Void */, null);
}
exports.createVoidVNode = createVoidVNode;
function createTextVNode(text, key) {
    return createVNode(1 /* Text */, null, null, text, null, key);
}
exports.createTextVNode = createTextVNode;
function isVNode(o) {
    return !!o.flags;
}
exports.isVNode = isVNode;
});

var linkEvent_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function linkEvent(data, event) {
    return { data: data, event: event };
}
exports.default = linkEvent;
});

var index$1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.NO_OP = index$3.NO_OP;

exports.options = options.default;

exports.cloneVNode = VNodes.cloneVNode;
exports.createVNode = VNodes.createVNode;

exports.linkEvent = linkEvent_1.default;

exports.createRenderer = rendering.createRenderer;
exports.findDOMNode = rendering.findDOMNode;
exports.render = rendering.render;

exports.EMPTY_OBJ = utils.EMPTY_OBJ;
exports.version = '1.6.2';
// we duplicate it so it plays nicely with different module loading systems
exports.default = {
    linkEvent: linkEvent_1.default,
    // core shapes
    createVNode: VNodes.createVNode,
    // cloning
    cloneVNode: VNodes.cloneVNode,
    // used to shared common items between Inferno libs
    NO_OP: index$3.NO_OP,
    EMPTY_OBJ: utils.EMPTY_OBJ,
    // DOM
    render: rendering.render,
    findDOMNode: rendering.findDOMNode,
    createRenderer: rendering.createRenderer,
    options: options.default,
    version: exports.version
};
// Internal stuff that only core inferno-* packages use

exports.internal_isUnitlessNumber = constants.isUnitlessNumber;
// Mainly for testing

exports.internal_normalize = normalization.normalize;
});

var index = createCommonjsModule(function (module) {
module.exports = index$1.default;
module.exports.default = module.exports;
});

var index_1 = index.render;

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

var index$8 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Make sure u use EMPTY_OBJ from 'inferno', otherwise it'll be a different reference


var noOp = index$3.ERROR_MSG;
var componentCallbackQueue = new Map();
// when a components root VNode is also a component, we can run into issues
// this will recursively look for vNode.parentNode if the VNode is a component
function updateParentComponentVNodes(vNode, dom) {
    if (vNode.flags & 28 /* Component */) {
        var parentVNode = vNode.parentVNode;
        if (parentVNode) {
            parentVNode.dom = dom;
            updateParentComponentVNodes(parentVNode, dom);
        }
    }
}
var resolvedPromise = Promise.resolve();
function addToQueue(component, force, callback) {
    // TODO this function needs to be revised and improved on
    var queue = componentCallbackQueue.get(component);
    if (!queue) {
        queue = [];
        componentCallbackQueue.set(component, queue);
        resolvedPromise.then(function () {
            componentCallbackQueue.delete(component);
            component._updating = true;
            applyState(component, force, function () {
                for (var i = 0, len = queue.length; i < len; i++) {
                    queue[i]();
                }
            });
            component._updating = false;
        });
    }
    if (callback) {
        queue.push(callback);
    }
}
function queueStateChanges(component, newState, callback) {
    if (index$3.isFunction(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    var pending = component._pendingState;
    if (pending === null) {
        component._pendingState = pending = newState;
    }
    else {
        for (var stateKey in newState) {
            pending[stateKey] = newState[stateKey];
        }
    }
    if (index$3.isBrowser && !component._pendingSetState && !component._blockRender) {
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
        var state = component.state;
        if (state === null) {
            component.state = pending;
        }
        else {
            for (var key in pending) {
                state[key] = pending[key];
            }
        }
        component._pendingState = null;
        if (callback && component._blockRender) {
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
        var nextState = index$3.combineFrom(prevState, pendingState);
        var props = component.props;
        var context_1 = component.context;
        component._pendingState = null;
        var nextInput = component._updateComponent(prevState, nextState, props, props, context_1, force, true);
        var didUpdate = true;
        if (index$3.isInvalid(nextInput)) {
            nextInput = index.createVNode(4096 /* Void */, null);
        }
        else if (nextInput === index$3.NO_OP) {
            nextInput = component._lastInput;
            didUpdate = false;
        }
        else if (index$3.isStringOrNumber(nextInput)) {
            nextInput = index.createVNode(1 /* Text */, null, null, nextInput);
        }
        else if (index$3.isArray(nextInput)) {
            index$3.throwError();
        }
        var lastInput = component._lastInput;
        var vNode = component._vNode;
        var parentDom = (lastInput.dom && lastInput.dom.parentNode) || (lastInput.dom = vNode.dom);
        component._lastInput = nextInput;
        if (didUpdate) {
            var childContext = void 0;
            if (!index$3.isUndefined(component.getChildContext)) {
                childContext = component.getChildContext();
            }
            if (index$3.isNullOrUndef(childContext)) {
                childContext = component._childContext;
            }
            else {
                childContext = index$3.combineFrom(context_1, childContext);
            }
            var lifeCycle = component._lifecycle;
            component._patch(lastInput, nextInput, parentDom, lifeCycle, childContext, component._isSVG, false);
            lifeCycle.trigger();
            if (!index$3.isUndefined(component.componentDidUpdate)) {
                component.componentDidUpdate(props, prevState, context_1);
            }
            index.options.afterUpdate && index.options.afterUpdate(vNode);
        }
        var dom = vNode.dom = nextInput.dom;
        var componentToDOMNodeMap = component._componentToDOMNodeMap;
        componentToDOMNodeMap && componentToDOMNodeMap.set(component, nextInput.dom);
        updateParentComponentVNodes(vNode, dom);
    }
    else {
        component.state = component._pendingState;
        component._pendingState = null;
    }
    if (!index$3.isNullOrUndef(callback)) {
        callback.call(component);
    }
}
var alreadyWarned = false;
var Component = (function () {
    function Component(props, context) {
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
        this._patch = null;
        this._isSVG = false;
        this._componentToDOMNodeMap = null;
        this._updating = true;
        /** @type {object} */
        this.props = props || index.EMPTY_OBJ;
        /** @type {object} */
        this.context = context || index.EMPTY_OBJ; // context should not be mutable
    }
    Component.prototype.render = function (nextProps, nextState, nextContext) {
    };
    Component.prototype.forceUpdate = function (callback) {
        if (this._unmounted || !index$3.isBrowser) {
            return;
        }
        applyState(this, true, callback);
    };
    Component.prototype.setState = function (newState, callback) {
        if (this._unmounted) {
            return;
        }
        if (!this._blockSetState) {
            queueStateChanges(this, newState, callback);
        }
        else {
            index$3.throwError();
        }
    };
    Component.prototype.setStateSync = function (newState) {
        this.setState(newState);
    };
    Component.prototype._updateComponent = function (prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
        if (this._unmounted === true) {
            index$3.throwError();
        }
        if ((prevProps !== nextProps || nextProps === index.EMPTY_OBJ) || prevState !== nextState || force) {
            if (prevProps !== nextProps || nextProps === index.EMPTY_OBJ) {
                if (!index$3.isUndefined(this.componentWillReceiveProps) && !fromSetState) {
                    this._blockRender = true;
                    this.componentWillReceiveProps(nextProps, context);
                    this._blockRender = false;
                }
                if (this._pendingSetState) {
                    nextState = index$3.combineFrom(nextState, this._pendingState);
                    this._pendingSetState = false;
                    this._pendingState = null;
                }
            }
            /* Update if scu is not defined, or it returns truthy value or force */
            if (index$3.isUndefined(this.shouldComponentUpdate) || this.shouldComponentUpdate(nextProps, nextState, context) || force) {
                if (!index$3.isUndefined(this.componentWillUpdate)) {
                    this._blockSetState = true;
                    this.componentWillUpdate(nextProps, nextState, context);
                    this._blockSetState = false;
                }
                this.props = nextProps;
                this.state = nextState;
                this.context = context;
                if (index.options.beforeRender) {
                    index.options.beforeRender(this);
                }
                var render = this.render(nextProps, nextState, context);
                if (index.options.afterRender) {
                    index.options.afterRender(this);
                }
                return render;
            }
            else {
                this.props = nextProps;
                this.state = nextState;
                this.context = context;
            }
        }
        return index$3.NO_OP;
    };
    return Component;
}());
exports.default = Component;
});

var index$7 = createCommonjsModule(function (module) {
module.exports = index$8.default;
module.exports.default = module.exports;
});

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

var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
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



var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var createVNode$4 = index.createVNode;

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
            var _this3 = this;

            return createVNode$4(512, 'input', null, null, {
                'checked': this.props.node.checked(),
                'indeterminate': this.props.node.indeterminate(),
                'onClick': this.click.bind(this),
                'type': 'checkbox'
            }, null, function (elem) {
                return elem.indeterminate = _this3.props.indeterminate;
            });
        }
    }]);
    return Checkbox;
}(index$7);

var createVNode$5 = index.createVNode;

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
}(index$7);

var createVNode$6 = index.createVNode;

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
}(index$7);

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

var createVNode$8 = index.createVNode;

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
            if (event.which === 13) {
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

            // Update the text
            this.props.node.set('text', this.ref.value);

            // Disable editing and update
            this.props.node.state('editing', false);
            this.props.node.markDirty();
            this.props.dom.applyChanges();
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
}(index$7);

var createVNode$7 = index.createVNode;

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

            var node = this.props.node;
            var dom = this.props.dom;

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
        key: 'dblclick',
        value: function dblclick(event) {
            var node = this.props.node;
            var dom = this.props.dom;

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
            var attributes = node.itree.a.attributes || {};
            attributes.className = 'title icon';
            attributes.tabindex = 1;
            attributes.unselectable = 'on';

            if (!this.props.dom.config.showCheckboxes) {
                var folder = this.props.expanded ? 'icon-folder-open' : 'icon-folder';
                attributes.className += ' ' + (node.itree.icon || (this.props.hasOrWillHaveChildren ? folder : 'icon-file-empty'));
            }

            var content = node.text;
            if (node.editing()) {
                content = createVNode$7(16, EditForm, null, null, {
                    'dom': this.props.dom,
                    'node': this.props.node
                });
            }

            return createVNode$7(2, 'a', null, content, _extends({
                'onBlur': this.blur.bind(this),
                'onClick': this.click.bind(this),
                'onDblClick': this.dblclick.bind(this),
                'onFocus': this.focus.bind(this),
                'onMouseDown': this.mousedown.bind(this)
            }, attributes));
        }
    }]);
    return NodeAnchor;
}(index$7);

var createVNode$9 = index.createVNode;

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
}(index$7);

var createVNode$3 = index.createVNode;

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
        key: 'getClassNames',
        value: function getClassNames() {
            var node = this.props.node;
            var state = node.itree.state;
            var attributes = node.itree.li.attributes;

            // Set state classnames
            var classNames = [];

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

            classNames.push(node.children ? 'folder' : 'leaf');

            // Append any custom class names
            var customClasses = attributes.class || attributes.className;
            if (_.isFunction(customClasses)) {
                customClasses = customClasses(node);
            }

            // Append content correctly
            if (!_.isEmpty(customClasses)) {
                if (_.isString(customClasses)) {
                    classNames = classNames.concat(customClasses.split(' '));
                } else if (_.isArray(customClasses)) {
                    classNames = classNames.concat(customClasses);
                }
            }

            return classNames.join(' ');
        }
    }, {
        key: 'getAttributes',
        value: function getAttributes() {
            var node = this.props.node;
            var attributes = _.clone(node.itree.li.attributes) || {};
            attributes.className = this.getClassNames();

            // Force internal-use attributes
            attributes['data-uid'] = node.id;

            return attributes;
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
            var dom = this.props.dom;
            var node = this.props.node;

            if (node.hasChildren()) {
                var nodes = node.children;
                var pagination = dom.getContextPagination(node);
                var limit = _.get(pagination, 'limit', nodes.length);
                var loading = dom.loading;
                var total = _.get(pagination, 'total', nodes.length);

                return createVNode$3(16, List, null, null, {
                    'context': node,
                    'dom': dom,
                    'limit': limit,
                    'loading': loading,
                    'nodes': nodes,
                    'total': total
                });
            } else if (this.props.dom.isDynamic && !node.hasLoadedChildren()) {
                return createVNode$3(16, EmptyList, null, null, {
                    'text': 'Loading...'
                });
            } else if (this.props.dom.isDynamic) {
                return createVNode$3(16, EmptyList, null, null, {
                    'text': 'No Results'
                });
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
                'hasOrWillHaveChildren': Boolean(node.children),
                'node': node,
                'text': node.text
            })]), createVNode$3(2, 'div', 'wholerow'), this.renderChildren()], _extends({}, this.getAttributes()), null, function (domNode) {
                return _this2.props.node.itree.ref = domNode;
            });

            // Clear dirty bool only after everything has been generated (and states set)
            this.props.node.state('rendered', true);
            this.props.node.itree.dirty = false;

            return li;
        }
    }]);
    return ListItem;
}(index$7);

var createVNode$2 = index.createVNode;

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

            this.props.dom.loadMore(this.props.context, event);
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

            // If rendering deferred, chunk the nodes client-side
            if (this.props.dom.config.deferredRendering) {
                // Determine the limit. Either for our current context or for the root level
                var limit = this.props.limit || this.props.dom.getNodeslimit();

                // Slice the current nodes by this context's pagination
                renderNodes = _.slice(this.props.nodes, 0, limit);
            }

            // Render nodes as list items
            var items = _.map(renderNodes, function (node) {
                return createVNode$2(16, ListItem, null, null, {
                    'dom': _this2.props.dom,
                    'node': node
                }, node.id);
            });

            if (this.isDeferred() && this.props.limit < this.props.total) {
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
}(index$7);

var createVNode$1 = index.createVNode;

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
            var dom = this.props.dom;
            var nodes = this.props.nodes;
            var pagination = dom.getContextPagination();
            var limit = _.get(pagination, 'limit', nodes.length);
            var loading = dom.loading;
            var total = _.get(pagination, 'total', nodes.length);

            return createVNode$1(16, List, null, null, {
                'dom': dom,
                'limit': limit,
                'loading': loading,
                'nodes': nodes,
                'total': total,
                children: this.renderAddLink()
            });
        }
    }]);
    return Tree;
}(index$7);

// Libs

/**
 * Default InspireTree rendering logic.
 *
 * @category DOM
 * @return {InspireDOM} Default renderer.
 */
var createVNode = index.createVNode;

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

        // Assign defaults
        this.config = _$1.defaults({}, opts, {
            autoLoadMore: true,
            deferredRendering: false,
            nodeHeight: 25,
            showCheckboxes: false,
            target: false
        });

        // If user didn't specify showCheckboxes,
        // but is using checkbox selection mode,
        // enable it automatically.
        if (tree.config.selection.mode === 'checkbox' && !_$1.isBoolean(_$1.get(opts, 'showCheckboxes'))) {
            this.config.showCheckboxes = true;
        }

        // Cache because we use in loops
        this.isDynamic = _$1.isFunction(this._tree.config.data);
        this.contextMenuChoices = this._tree.config.contextMenu;

        // Connect to our target DOM element
        this.attach(this.config.target);

        // Apply changes
        tree.on('changes.applied', function () {
            _this.applyChanges();
            console.log('heard event');
        });

        this.applyChanges();
    }

    /**
     * Apply pending data changes to the DOM.
     *
     * Will skip rendering as long as any calls
     * to `batch` have yet to be resolved,
     *
     * @category DOM
     * @private
     * @return {void}
     */


    createClass(InspireDOM, [{
        key: 'applyChanges',
        value: function applyChanges() {
            // Never rerender when until batch complete
            if (this.batching > 0) {
                return;
            }

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

    }, {
        key: 'attach',
        value: function attach(target) {
            var _this2 = this;

            this.$target = this.getElement(target);
            this.$scrollLayer = this.getScrollableAncestor(this.$target);

            if (!this.$target) {
                throw new Error('No valid element to attach to.');
            }

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
            this.$target.setAttribute('tabindex', this._tree.config.tabindex || 0);

            // Handle keyboard interaction
            this.$target.addEventListener('keyup', this.keyboardListener.bind(this));

            var dragTargetSelectors = this._tree.config.dragTargets;
            if (!_$1.isEmpty(dragTargetSelectors)) {
                _$1.each(dragTargetSelectors, function (selector) {
                    var dropTarget = _this2.getElement(selector);

                    if (dropTarget) {
                        _this2.dropTargets.push(dropTarget);
                    } else {
                        throw new Error('No valid element found for drop target ' + selector);
                    }
                });
            }

            this.isDragDropEnabled = this.dropTargets.length > 0;

            if (this.isDragDropEnabled) {
                document.addEventListener('mouseup', this.mouseUpListener.bind(this));
                document.addEventListener('mousemove', this.mouseMoveListener.bind(this));
            }

            // Sync browser focus to focus state
            this._tree.on('node.focused', function (node) {
                var elem = node.itree.ref.querySelector('.title');
                if (elem !== document.activeElement) {
                    elem.focus();
                }
            });

            // Set pagination limits
            this.pagination = {
                limit: this.getNodesLimit()
            };

            var setPagination = function setPagination(node) {
                node.itree.pagination = {
                    limit: limit,
                    total: node.hasChildren() ? node.children.length : -1
                };
            };

            var limit = this.pagination.limit;
            this._tree.on('model.loaded', function () {
                // Set context-specific pagination
                _this2._tree.nodes().recurseDown(function (node) {
                    if (node.hasChildren()) {
                        setPagination(node);
                    }
                });
            });

            this._tree.on('node.added', function (node) {
                if (node.children) {
                    setPagination(node);
                }

                var parent = node.getParent();
                if (parent && !parent.itree.pagination) {
                    setPagination(parent);
                }
            });

            this._tree.on('node.removed', function (exported, parent) {
                var pagination = parent ? parent.itree.pagination : _this2.getContextPagination();
                pagination.total--;
            });

            // Listen for scrolls for automatic loading
            if ((this.config.deferredRendering || this._tree.config.deferredLoading) && this.config.autoLoadMore) {
                this.$target.addEventListener('scroll', _$1.throttle(this.scrollListener.bind(this), 20));
            }

            this.$target.inspireTree = this._tree;
        }

        /**
         * Disable rendering in preparation for multiple changes.
         *
         * @category DOM
         * @private
         * @return {void}
         */

    }, {
        key: 'batch',
        value: function batch() {
            if (this.batching < 0) {
                this.batching = 0;
            }

            this.batching++;
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
         * Creates a draggable element by cloning a target,
         * registers a listener for mousemove.
         *
         * @private
         * @param {HTMLElement} element DOM Element.
         * @param {Event} event Click event to use.
         * @return {void}
         */

    }, {
        key: 'createDraggableElement',
        value: function createDraggableElement(element, event) {
            this.$dragNode = this.nodeFromTitleDOMElement(element);

            var rect = element.getBoundingClientRect();
            var diffX = event.clientX - rect.left;
            var diffY = event.clientY - rect.top;

            this.dragHandleOffset = { left: diffX, top: diffY };

            this.$dragElement = element.cloneNode(true);
            this.$dragElement.className += ' dragging';
            this.$dragElement.style.top = rect.top + 'px';
            this.$dragElement.style.left = rect.left + 'px';
            this.$target.appendChild(this.$dragElement);
        }

        /**
         * Permit rerendering of batched changes.
         *
         * @category DOM
         * @private
         * @return {void}
         */

    }, {
        key: 'end',
        value: function end() {
            this.batching--;

            if (this.batching === 0) {
                this.applyChanges();
            }
        }

        /**
         * Get the pagination for the given context node, or root if undefined.
         *
         * @param {TreeNode} context Context node.
         * @return {object} Pagination configuration object.
         */

    }, {
        key: 'getContextPagination',
        value: function getContextPagination(context) {
            return context ? _$1.get(context, 'itree.pagination') : this.pagination;
        }

        /**
         * Get an HTMLElement through various means:
         * An element, jquery object, or a selector.
         *
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
         * Get the max nodes per "page" we'll allow. Defaults to how many nodes can fit.
         *
         * @private
         * @return {integer} Node count
         */

    }, {
        key: 'getNodesLimit',
        value: function getNodesLimit() {
            var limit = this._tree.config.pagination.limit;
            return (limit > 0 ? limit : _$1.ceil(this.$scrollLayer.clientHeight / this.config.nodeHeight)) || 20;
        }

        /**
         * Helper method to find a scrollable ancestor element.
         *
         * @param  {HTMLElement} $element Starting element.
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
         * Listen to keyboard event for navigation.
         *
         * @private
         * @param {Event} event Keyboard event.
         * @return {void}
         */

    }, {
        key: 'keyboardListener',
        value: function keyboardListener(event) {
            // Navigation
            var focusedNode = this._tree.focused();
            if (focusedNode) {
                focusedNode = focusedNode[0];
                switch (event.which) {
                    case 40:
                        this.moveFocusDownFrom(focusedNode);
                        break;
                    case 13:
                        focusedNode.toggleSelect();
                        break;
                    case 37:
                        focusedNode.collapse();
                        break;
                    case 39:
                        focusedNode.expand();
                        break;
                    case 38:
                        this.moveFocusUpFrom(focusedNode);
                        break;
                    default:
                }
            }
        }

        /**
         * Loads/renders additional nodes for a given context, or the root.
         *
         * @private
         * @param {TreeNode} context Parent node, or none for root.
         * @param {Event} event Click or scroll event which triggered this call.
         * @return {Promise} Resolves with request results.
         */

    }, {
        key: 'loadMore',
        value: function loadMore(context, event) {
            var _this3 = this;

            if (this.loading) {
                return;
            }

            var pagination = this.getContextPagination(context);
            var promise = void 0;

            // Set loading flag, prevents repeat requests
            this.loading = true;
            this.batch();

            // Mark this context as dirty since we'll update text/tree nodes
            _$1.invoke(context, 'markDirty');

            // Increment the pagination
            pagination.limit += this.getNodesLimit();

            // Emit an event
            this._tree.emit('node.paginate', context, pagination, event);

            if (this._tree.config.deferredLoading) {
                if (context) {
                    promise = context.loadChildren();
                } else {
                    promise = this._tree.load(this._tree.config.data);
                }
            } else {
                this.loading = false;
            }

            this.end();

            // Clear the loading flag
            if (this._tree.config.deferredLoading) {
                promise.then(function () {
                    _this3.loading = false;
                    _this3.applyChanges();
                }).catch(function () {
                    _this3.loading = false;
                    _this3.applyChanges();
                });
            }

            return promise;
        }

        /**
         * Listener for mouse move events for drag and drop.
         * Is removed automatically on mouse up.
         *
         * @private
         * @param {Event} event Mouse move event.
         * @return {void}
         */

    }, {
        key: 'mouseMoveListener',
        value: function mouseMoveListener(event) {
            if (this.isMouseHeld && !this.$dragElement) {
                this.createDraggableElement(event.target, event);
            } else if (this.$dragElement) {
                event.preventDefault();
                event.stopPropagation();

                var x = event.clientX - this.dragHandleOffset.left;
                var y = event.clientY - this.dragHandleOffset.top;

                this.$dragElement.style.left = x + 'px';
                this.$dragElement.style.top = y + 'px';

                var validTarget = void 0;
                _$1.each(this.dropTargets, function (target) {
                    var rect = target.getBoundingClientRect();

                    if (event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom) {
                        validTarget = target;
                        return false;
                    }
                });

                // If new target found for the first time
                if (!this.$activeDropTarget && validTarget && validTarget.className.indexOf('itree-active-drop-target') === -1) {
                    validTarget.className += ' itree-active-drop-target';
                }

                this.$activeDropTarget = validTarget;
            }
        }

        /**
         * Handle mouse up events for dragged elements.
         *
         * @return {void}
         */

    }, {
        key: 'mouseUpListener',
        value: function mouseUpListener() {
            this.isMouseHeld = false;

            if (this.$dragElement) {
                this.$dragElement.parentNode.removeChild(this.$dragElement);

                if (this.$activeDropTarget) {
                    var targetIsTree = _$1.isFunction(_$1.get(this.$activeDropTarget, 'inspireTree.addNode'));

                    // Notify that the node was "dropped out" of this tree
                    this._tree.emit('node.dropout', this.$dragNode, this.$activeDropTarget, targetIsTree);

                    // If drop target supports the addNode method, invoke it
                    if (targetIsTree) {
                        var newNode = this.$activeDropTarget.inspireTree.addNode(this.$dragNode.copyHierarchy().toObject());

                        // Notify that the node was "dropped out"
                        this.$activeDropTarget.inspireTree.emit('node.dropin', newNode);
                    }
                }
            }

            if (this.$activeDropTarget) {
                this.$activeDropTarget.className = this.$activeDropTarget.className.replace('itree-active-drop-target', '');
            }

            this.$dragNode = null;
            this.$dragElement = null;
            this.$activeDropTarget = null;
        }

        /**
         * Move select down the visible tree from a starting node.
         *
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
            index_1(createVNode(16, Tree, null, null, {
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
            var _this4 = this;

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
                            context = _this4._tree.node($parent.getAttribute('data-uid'));
                        }

                        _this4.loadMore(context, event);
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
    }]);
    return InspireDOM;
}();

return InspireDOM;

})));
