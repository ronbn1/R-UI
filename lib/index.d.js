'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var reset = _interopDefault(require('styled-reset'));

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState");};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}var I=H.prototype=new G;I.constructor=H;objectAssign(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h;}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return {$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return {result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a);}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e);}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++);}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a));}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b);}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:objectAssign};var Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b);},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
var Component=F;var Fragment=r;var Profiler=u;var PureComponent=H;var StrictMode=t;var Suspense=y;var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
var cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=objectAssign({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h]);}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f;}return {$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};var createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};var createElement=M;var createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};var createRef=function(){return {current:null}};var forwardRef=function(a){return {$$typeof:x,render:a}};var isValidElement=O;
var lazy=function(a){return {$$typeof:A,_ctor:a,_status:-1,_result:null}};var memo=function(a,b){return {$$typeof:z,type:a,compare:void 0===b?null:b}};var useCallback=function(a,b){return Z().useCallback(a,b)};var useContext=function(a,b){return Z().useContext(a,b)};var useDebugValue=function(){};var useEffect=function(a,b){return Z().useEffect(a,b)};var useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
var useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};var useMemo=function(a,b){return Z().useMemo(a,b)};var useReducer=function(a,b,c){return Z().useReducer(a,b,c)};var useRef=function(a){return Z().useRef(a)};var useState=function(a){return Z().useState(a)};var version="16.13.1";

var react_production_min = {
	Children: Children,
	Component: Component,
	Fragment: Fragment,
	Profiler: Profiler,
	PureComponent: PureComponent,
	StrictMode: StrictMode,
	Suspense: Suspense,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	cloneElement: cloneElement,
	createContext: createContext,
	createElement: createElement,
	createFactory: createFactory,
	createRef: createRef,
	forwardRef: forwardRef,
	isValidElement: isValidElement,
	lazy: lazy,
	memo: memo,
	useCallback: useCallback,
	useContext: useContext,
	useDebugValue: useDebugValue,
	useEffect: useEffect,
	useImperativeHandle: useImperativeHandle,
	useLayoutEffect: useLayoutEffect,
	useMemo: useMemo,
	useReducer: useReducer,
	useRef: useRef,
	useState: useState,
	version: version
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var react_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

var _assign = objectAssign;
var checkPropTypes = checkPropTypes_1;

var ReactVersion = '16.13.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}
});

var react = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = react_production_min;
} else {
  module.exports = react_development;
}
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var sizes = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
exports.Sizes = void 0;
var Sizes;
(function (Sizes) {
    Sizes["XS"] = "xs";
    Sizes["SMALL"] = "small";
    Sizes["MEDIUM"] = "medium";
    Sizes["LARGE"] = "large";
})(Sizes = exports.Sizes || (exports.Sizes = {}));
});

var Position;
(function (Position) {
    Position["TOP_CENTER"] = "topCenter";
    Position["TOP_RIGHT"] = "topRight";
    Position["TOP_LEFT"] = "topLeft";
    Position["BOTTOM_CENTER"] = "bottomCenter";
    Position["BOTTOM_RIGHT"] = "bottomRight";
    Position["BOTTOM_LEFT"] = "bottomLeft";
    Position["RIGHT"] = "right";
    Position["LEFT"] = "left";
    Position["CENTER"] = "center";
})(Position || (Position = {}));

var toolTipPosition = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get Position () { return Position; }
});

var Colors_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
exports.Colors = void 0;
var Colors;
(function (Colors) {
    Colors["PRIMARY"] = "primary";
    Colors["SECONDARY"] = "secondary";
    Colors["SUCCESS"] = "success";
    Colors["DARK"] = "dark";
    Colors["DARKER"] = "darker";
    Colors["LIGHT"] = "light";
    Colors["SELECTED"] = "selected";
})(Colors = exports.Colors || (exports.Colors = {}));
});

var enums = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;

__createBinding(exports, sizes, "Sizes");

__createBinding(exports, toolTipPosition, "Position");

__createBinding(exports, Colors_1, "Colors");
});

const img = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='arrow-left' class='svg-inline--fa fa-arrow-left fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath fill='currentColor' d='M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z'%3e%3c/path%3e%3c/svg%3e";

const img$1 = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='arrow-down' class='svg-inline--fa fa-arrow-down fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath fill='currentColor' d='M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z'%3e%3c/path%3e%3c/svg%3e";

const img$2 = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='arrow-right' class='svg-inline--fa fa-arrow-right fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath fill='currentColor' d='M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z'%3e%3c/path%3e%3c/svg%3e";

const img$3 = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='arrow-up' class='svg-inline--fa fa-arrow-up fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath fill='currentColor' d='M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z'%3e%3c/path%3e%3c/svg%3e";

const img$4 = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='far' data-icon='heart' class='svg-inline--fa fa-heart fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath fill='currentColor' d='M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z'%3e%3c/path%3e%3c/svg%3e";

const img$5 = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='plus-circle' class='svg-inline--fa fa-plus-circle fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath fill='currentColor' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z'%3e%3c/path%3e%3c/svg%3e";

const img$6 = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='trash' class='svg-inline--fa fa-trash fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath fill='currentColor' d='M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z'%3e%3c/path%3e%3c/svg%3e";

const img$7 = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='far' data-icon='smile' class='svg-inline--fa fa-smile fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'%3e%3cpath fill='currentColor' d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z'%3e%3c/path%3e%3c/svg%3e";

const img$8 = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='times' class='svg-inline--fa fa-times fa-w-11' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 352 512'%3e%3cpath fill='currentColor' d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'%3e%3c/path%3e%3c/svg%3e";

const img$9 = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='file-alt' class='svg-inline--fa fa-file-alt fa-w-12' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3e%3cpath fill='currentColor' d='M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z'%3e%3c/path%3e%3c/svg%3e";

const img$a = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='bell' class='svg-inline--fa fa-bell fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath fill='currentColor' d='M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z'%3e%3c/path%3e%3c/svg%3e";

const img$b = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='cog' class='svg-inline--fa fa-cog fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath fill='currentColor' d='M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z'%3e%3c/path%3e%3c/svg%3e";

const img$c = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-trending-down'%3e%3cpolyline points='23 18 13.5 8.5 8.5 13.5 1 6'%3e%3c/polyline%3e%3cpolyline points='17 18 23 18 23 12'%3e%3c/polyline%3e%3c/svg%3e";

const img$d = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-trending-up'%3e%3cpolyline points='23 6 13.5 15.5 8.5 10.5 1 18'%3e%3c/polyline%3e%3cpolyline points='17 6 23 6 23 12'%3e%3c/polyline%3e%3c/svg%3e";

const img$e = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3c!-- Generator: Adobe Illustrator 18.0.0%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 44.5 41.3' enable-background='new 0 0 44.5 41.3' xml:space='preserve'%3e%3cpolygon fill-rule='evenodd' clip-rule='evenodd' fill='%233E3E3E' points='2.2%2c38.8 6.9%2c8.2 13.7%2c16.3 16.4%2c14.1 17.1%2c13.4 17.7%2c13 30.4%2c2.3 43.1%2c17.4 26.4%2c31.4 33.2%2c39.6 '/%3e%3c/svg%3e";

var onlineTheme = {
    font: {
        family: "Roboto",
        size: {
            small: "0.5rem",
            smallMedium: "0.7rem",
            smallMedium2: "0.8rem",
            smallMedium3: "0.9rem",
            medium: "1rem",
            medium2: "1.2rem",
            medium3: "1.3rem",
            mediumLarge: "1.4rem",
            large: "1.5rem",
            huge: "2rem",
            huger: "2.2.5rem",
            gargantuan: "3rem",
        },
        weight: {
            thin: "300",
            regular: "400",
            bold: "600",
        },
    },
    sizes: {
        xs: "0.8rem",
        s: "1rem",
        m: "1.5rem",
        l: "2rem",
    },
    colors: {
        secondary: "#3d5a80",
        success: "#3bceac",
        dark: "#152945",
        darker: "#171138",
        primary: "#ee6c4d",
        light: "#e0fbfc",
        selected: "#152844",
    },
    icons: {
        plus: img$5,
        trash: img$6,
        heart: img$4,
        downArrow: img$1,
        rightArrow: img$2,
        leftArrow: img,
        upArrow: img$3,
        smile: img$7,
        close: img$8,
        doc: img$9,
        conf: img$b,
        bell: img$a,
        decrease: img$c,
        increase: img$d,
        leftDownArrow: img$e,
    },
};

var SIcon = styled__default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n   background-size: cover;\n   opacity: 0.5;\n   width: ", ";\n   height: ", ";\n   background-color: ", ";\n   mask: ", ";\n   mask-repeat: no-repeat;\n"], ["\n   background-size: cover;\n   opacity: 0.5;\n   width: ",
    ";\n   height: ",
    ";\n   background-color: ",
    ";\n   mask: ",
    ";\n   mask-repeat: no-repeat;\n"])), function (_a) {
    var size = _a.size;
    return size === enums.Sizes.MEDIUM
        ? "1.5rem"
        : size === enums.Sizes.LARGE
            ? "3rem"
            : "1rem";
}, function (_a) {
    var size = _a.size;
    return size === enums.Sizes.MEDIUM
        ? "1.5rem"
        : size === enums.Sizes.LARGE
            ? "3rem"
            : "1rem";
}, function (props) {
    return props.color
        ? onlineTheme.colors[props.color]
        : onlineTheme.colors.primary;
}, function (props) {
    return props.icon
        ? "url(" + onlineTheme.icons[props.icon] + ") "
        : "url(" + props.svg + ") ";
});
var templateObject_1;

// export const SIcon = styled.span`
//    background-size: cover;
//    display: inline-block;
//    position: relative;
//    left: 5px;
//    top: 2.5px;
//    width: 1rem;
//    height: 1rem;
//    background-color: ${(props: Props) =>
//       props.color
//          ? onlineTheme.colors[props.color]
//          : onlineTheme.colors.primary};
//    mask: ${(props: Props) => {
//       console.log(onlineTheme.icons);
//       return props.icon && `url(${onlineTheme.icons[props.icon]}) `;
//    }};
//    mask-repeat: no-repeat;
// `;
var SButton = styled__default.button(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n   display: flex;\n   border: transparent;\n\n   color: ", ";\n\n   font-size: ", ";\n\n   border: ", ";\n\n   margin: 0.2rem;\n   padding: 0.2rem 0.7rem;\n   background-color: transparent;\n   border-radius: 3px;\n   outline: none;\n   transition: background 0.2s, color 0.2s;\n   .text {\n      padding: 0 0.5rem;\n   }\n   ", " {\n      margin-top: 1px;\n   }\n   &:hover {\n      background: ", ";\n      color: white;\n      cursor: pointer;\n      ", " {\n         background-color: white;\n      }\n   }\n"], ["\n   display: flex;\n   border: transparent;\n\n   color: ",
    ";\n\n   font-size: ",
    ";\n\n   border: ",
    ";\n\n   margin: 0.2rem;\n   padding: 0.2rem 0.7rem;\n   background-color: transparent;\n   border-radius: 3px;\n   outline: none;\n   transition: background 0.2s, color 0.2s;\n   .text {\n      padding: 0 0.5rem;\n   }\n   ", " {\n      margin-top: 1px;\n   }\n   &:hover {\n      background: ",
    ";\n      color: white;\n      cursor: pointer;\n      ", " {\n         background-color: white;\n      }\n   }\n"])), function (props) {
    return props.color
        ? onlineTheme.colors[props.color]
        : onlineTheme.colors.primary;
}, function (props) {
    return props.size ? onlineTheme.sizes[props.size] : "";
}, function (props) {
    return props.color
        ? "1px solid " + onlineTheme.colors[props.color]
        : "1px solid " + onlineTheme.colors.primary;
}, SIcon, function (props) {
    return props.color
        ? onlineTheme.colors[props.color]
        : onlineTheme.colors.primary;
}, SIcon);
var templateObject_1$1;

var Icon = function (_a) {
    var color = _a.color, icon = _a.icon, iconSize = _a.iconSize, _b = _a.active, svg = _a.svg;
    return (react.createElement(react.Fragment, null, icon ? (react.createElement(SIcon, { color: color, icon: icon, size: iconSize })) : (react.createElement(SIcon, { color: color, svg: svg, size: iconSize }))));
};

var Button = function (_a) {
    var text = _a.text, color = _a.color, size = _a.size, icon = _a.icon, onClick = _a.onClick, svg = _a.svg;
    return (react.createElement("span", { onClick: onClick },
        react.createElement(SButton, { color: color, size: size, icon: icon },
            react.createElement("div", { className: "text" }, text),
            icon ? react.createElement(Icon, { icon: icon }) : svg && react.createElement(Icon, { svg: svg }))));
};

var STitle = styled__default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n   font-size: ", ";\n   text-align: ", ";\n   border-bottom: ", ";\n\n   color: ", ";\n\n   font-family: \"Roboto\", sans-serif;\n   font-weight: 600;\n   position: relative;\n\n   position: relative;\n   ", ";\n"], ["\n   font-size: ",
    ";\n   text-align: ", ";\n   border-bottom: ",
    ";\n\n   color: ",
    ";\n\n   font-family: \"Roboto\", sans-serif;\n   font-weight: 600;\n   position: relative;\n\n   position: relative;\n   ",
    ";\n"])), function (props) {
    return props.size ? onlineTheme.sizes[props.size] : "2rem";
}, function (props) { return props.align && props.align; }, function (props) {
    return props.underline
        ? "1px solid " + onlineTheme.colors[props.underline]
        : "";
}, function (props) {
    return props.color
        ? onlineTheme.colors[props.color]
        : onlineTheme.colors.primary;
}, function (props) {
    return props.square && styled.css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n         &:before {\n            position: absolute;\n            content: \"\";\n            width: 15px;\n            height: 15px;\n            top: 45%;\n            left: -25px;\n\n            background-color: ", ";\n\n            border-radius: 2px;\n            transform: rotate(45deg) translateY(-50%);\n         }\n      "], ["\n         &:before {\n            position: absolute;\n            content: \"\";\n            width: 15px;\n            height: 15px;\n            top: 45%;\n            left: -25px;\n\n            background-color: ",
        ";\n\n            border-radius: 2px;\n            transform: rotate(45deg) translateY(-50%);\n         }\n      "])), function (props) {
        return props.square ? "" + onlineTheme.colors[props.square] : "";
    });
});
var templateObject_1$2, templateObject_2;

var Title = function (props) {
    return (react.createElement(STitle, { underline: props.underline, size: props.size, color: props.color, square: props.square, align: props.align, style: __assign({}, props.style) }, props.text));
};

var fadeIn = styled.keyframes(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\nfrom{\n    opacity:0\n}\nto {\n    opacity:100\n}\n"], ["\nfrom{\n    opacity:0\n}\nto {\n    opacity:100\n}\n"])));
var fadeOut = styled.keyframes(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\nfrom{\n    opacity:100\n}\nto {\n    opacity:0\n}\n"], ["\nfrom{\n    opacity:100\n}\nto {\n    opacity:0\n}\n"])));
var SBackdrop = styled__default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n   position: absolute;\n   top: 0;\n   left: 0;\n   z-index: -1;\n\n   ", "\n\n   height: 100%;\n   width: 100%;\n   animation: ", " ", "s;\n   ", "\n"], ["\n   position: absolute;\n   top: 0;\n   left: 0;\n   z-index: -1;\n\n   ",
    "\n\n   height: 100%;\n   width: 100%;\n   animation: ", " ", "s;\n   ",
    "\n"])), function (_a) {
    var bg = _a.bg;
    return bg
        ? styled.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n              background-color: rgba(\n                 0,\n                 0,\n                 0,\n                 ", "\n              );\n           "], ["\n              background-color: rgba(\n                 0,\n                 0,\n                 0,\n                 ", "\n              );\n           "])), function (_a) {
            var opacity = _a.opacity;
            return opacity;
        }) : styled.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n              background-color: transparent;\n           "], ["\n              background-color: transparent;\n           "])));
}, fadeIn, function (_a) {
    var timer = _a.timer;
    return timer;
}, function (_a) {
    var isFadeOut = _a.isFadeOut;
    return isFadeOut && styled.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n         animation: ", " ", "s;\n      "], ["\n         animation: ", " ", "s;\n      "])), fadeOut, function (_a) {
        var timer = _a.timer;
        return timer;
    });
});
var templateObject_1$3, templateObject_2$1, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var Backdrop = function (_a) {
    var closeFn = _a.closeFn, _b = _a.opacity, opacity = _b === void 0 ? 0.05 : _b, _c = _a.timer, timer = _c === void 0 ? 0.2 : _c, _d = _a.bg, bg = _d === void 0 ? false : _d;
    var _e = __read(react.useState(false), 2), isFadeOut = _e[0], setIsFadeOut = _e[1];
    return (react.createElement(SBackdrop, { bg: bg, onClick: function () {
            setIsFadeOut(true);
            closeFn();
        }, isFadeOut: isFadeOut, opacity: opacity, timer: timer }));
};

var GlobalStyle = styled.createGlobalStyle(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  ", "\n  p,h1,h2,h3,span{\n  font-family:", "\n  }\n"], ["\n  ", "\n  p,h1,h2,h3,span{\n  font-family:", "\n  }\n"])), reset, onlineTheme.font.family);
var templateObject_1$4;

var SCard = styled__default.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n   width: ", ";\n   border: ", ";\n   border-radius: 8px;\n"], ["\n   width: ",
    ";\n   border: ",
    ";\n   border-radius: 8px;\n"])), function (_a) {
    var width = _a.width;
    return width === enums.Sizes.LARGE
        ? "25rem"
        : width === enums.Sizes.MEDIUM
            ? "20rem"
            : width === enums.Sizes.SMALL
                ? "15rem"
                : "10rem";
}, function (_a) {
    var borderColor = _a.borderColor;
    return borderColor ? "1px solid " + borderColor : "1px solid #eeeeee";
});
var SBody = styled__default.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n   padding: 1rem;\n"], ["\n   padding: 1rem;\n"])));
var STitle$1 = styled__default.h2(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n   font-size: ", ";\n   color: ", ";\n   padding: 0 0.4rem;\n"], ["\n   font-size: ",
    ";\n   color: ",
    ";\n   padding: 0 0.4rem;\n"])), function (_a) {
    var size = _a.size;
    return size ? onlineTheme.sizes[size] : "1.2rem";
}, function (_a) {
    var color = _a.color;
    return color ? onlineTheme.colors[color] : onlineTheme.colors.primary;
});
var SSubtitle = styled__default.p(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n   font-size: ", ";\n\n   color: ", ";\n   padding: 0.5rem;\n"], ["\n   font-size: ",
    ";\n\n   color: ",
    ";\n   padding: 0.5rem;\n"])), function (_a) {
    var size = _a.size;
    return size ? onlineTheme.sizes[size] : "1rem";
}, function (_a) {
    var color = _a.color;
    return color ? onlineTheme.colors[color] : onlineTheme.colors.dark;
});
var SText = styled__default.p(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n   font-size: ", ";\n\n   color: ", ";\n   padding: 0.5rem;\n"], ["\n   font-size: ",
    ";\n\n   color: ",
    ";\n   padding: 0.5rem;\n"])), function (_a) {
    var size = _a.size;
    return size ? onlineTheme.sizes[size] : "1rem";
}, function (_a) {
    var color = _a.color;
    return color ? onlineTheme.colors[color] : onlineTheme.colors.secondary;
});
var SLinkContainer = styled__default.div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n   display: flex;\n   justify-content: center;\n"], ["\n   display: flex;\n   justify-content: center;\n"])));
var STopIcon = styled__default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n   display: flex;\n   justify-content: flex-end;\n"], ["\n   display: flex;\n   justify-content: flex-end;\n"])));
var templateObject_1$5, templateObject_2$2, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6$1, templateObject_7;
// interface ISTitle {}
// export const STitle: StyledComponent<"h1", any, STitle, never> = styled(Title)``;
// interface ISMenu {
//    color?: Colors;
// }
// export const SMenu: StyledComponent<"div", any, ISMenu, never> = styled.div`
//    width: fit-content;
//    margin: 0.5rem 0;
//    border: 1px solid #eeeeee;
//    border-radius: 5px;
//    background-color: white;
// `;
// interface ISItem {
//    color?: Colors;
// }
// export const SItem: StyledComponent<"div", any, ISItem, never> = styled.div`
//    padding: 0.5rem 1rem;
//    color: ${({ color }: ISItem) => color && onlineTheme.colors[color]};
//    font-family: ${onlineTheme.font.family};
//    font-size: 0.9rem;
//    &:hover {
//       cursor: pointer;
//       background-color: #eeeeee60;
//    }
// `;

var Card = function (_a) {
    var children = _a.children, width = _a.width, _b = _a.style, style = _b === void 0 ? {} : _b, borderColor = _a.borderColor;
    return (react.createElement(SCard, { width: width, style: __assign({}, style), borderColor: borderColor },
        react.createElement(GlobalStyle, null),
        children));
};
var Body = function (_a) {
    var children = _a.children, _b = _a.style, style = _b === void 0 ? {} : _b;
    return react.createElement(SBody, { style: __assign({}, style) }, children);
};
var Title$1 = function (_a) {
    var children = _a.children, size = _a.size, color = _a.color, _b = _a.style, style = _b === void 0 ? {} : _b;
    return (react.createElement(STitle$1, { size: size, color: color, style: __assign({}, style) }, children));
};
var Subtitle = function (_a) {
    var children = _a.children, size = _a.size, color = _a.color, _b = _a.style, style = _b === void 0 ? {} : _b;
    return (react.createElement(SSubtitle, { size: size, color: color, style: __assign({}, style) }, children));
};
var Text = function (_a) {
    var children = _a.children, size = _a.size, color = _a.color, _b = _a.style, style = _b === void 0 ? {} : _b;
    return (react.createElement(SText, { size: size, color: color, style: __assign({}, style) }, children));
};
var LinksContainer = function (_a) {
    var children = _a.children, _b = _a.style, style = _b === void 0 ? {} : _b;
    return react.createElement(SLinkContainer, { style: __assign({}, style) },
        " ",
        children);
};
var Link = function (_a) {
    var children = _a.children, color = _a.color;
    return react.createElement(Button, { text: children, color: color });
};
var TopIcon = function (_a) {
    var icon = _a.icon, color = _a.color;
    return react.createElement(STopIcon, null, icon && react.createElement(Icon, { icon: icon, color: color }));
};
Card.Body = Body;
Card.Title = Title$1;
Card.Subtitle = Subtitle;
Card.Text = Text;
Card.LinksContainer = LinksContainer;
Card.Link = Link;
Card.TopIcon = TopIcon;

var openFromRight = styled.keyframes(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\nfrom{\n   transform: translateX(-100%);\n}\nto{\n   transform: translateX(0);\n}\n"], ["\nfrom{\n   transform: translateX(-100%);\n}\nto{\n   transform: translateX(0);\n}\n"])));
var closeFromRight = styled.keyframes(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\nfrom{\n   transform: translateX(0);\n}\nto{\n   transform: translateX(-100%);\n}\n"], ["\nfrom{\n   transform: translateX(0);\n}\nto{\n   transform: translateX(-100%);\n}\n"])));
var SDrawer = styled__default.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n   height: 100vh;\n   width: ", ";\n   background-color: #fff;\n   box-shadow: -10px 0px 20px 1px black;\n   position: absolute;\n   left: 0;\n   top: 0;\n   animation: ", " 0.3s;\n   ", "\n   h2 {\n      text-align: center;\n      margin-top: 3rem;\n      color: ", ";\n      font-family: ", ";\n   }\n\n   img {\n      width: 1rem;\n   }\n\n   .closeBtn {\n      width: 1rem;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      cursor: pointer;\n   }\n   .iconContainer {\n      width: fit-content;\n      position: absolute;\n      top: 0.8rem;\n      right: 1.1rem;\n      cursor: pointer;\n   }\n"], ["\n   height: 100vh;\n   width: ",
    ";\n   background-color: #fff;\n   box-shadow: -10px 0px 20px 1px black;\n   position: absolute;\n   left: 0;\n   top: 0;\n   animation: ", " 0.3s;\n   ",
    "\n   h2 {\n      text-align: center;\n      margin-top: 3rem;\n      color: ", ";\n      font-family: ", ";\n   }\n\n   img {\n      width: 1rem;\n   }\n\n   .closeBtn {\n      width: 1rem;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      cursor: pointer;\n   }\n   .iconContainer {\n      width: fit-content;\n      position: absolute;\n      top: 0.8rem;\n      right: 1.1rem;\n      cursor: pointer;\n   }\n"])), function (_a) {
    var drawerWith = _a.drawerWith;
    return drawerWith === enums.Sizes.LARGE
        ? "40rem"
        : drawerWith === enums.Sizes.SMALL
            ? "15rem"
            : "20rem";
}, openFromRight, function (_a) {
    var isFadeOut = _a.isFadeOut;
    return isFadeOut && styled.css(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n         animation: ", " 0.3s ease-in;\n      "], ["\n         animation: ", " 0.3s ease-in;\n      "])), closeFromRight);
}, onlineTheme.colors.primary, onlineTheme.font.family);
var templateObject_1$6, templateObject_2$3, templateObject_3$2, templateObject_4$2;

var SItemContainer = styled__default.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n   display: flex;\n   flex-direction: column;\n   padding-top: 0.5rem;\n   position: absolute;\n   top: 40%;\n   left: 0;\n   width: 100%;\n   transform: translateY(-50%);\n"], ["\n   display: flex;\n   flex-direction: column;\n   padding-top: 0.5rem;\n   position: absolute;\n   top: 40%;\n   left: 0;\n   width: 100%;\n   transform: translateY(-50%);\n"])));
var SItem = styled__default.p(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n   display: flex;\n   margin: 0.2rem;\n   img {\n      opacity: 0.5;\n      width: 20px;\n      padding: 0 3rem 0 1rem;\n   }\n   color: ", ";\n   width: 100%;\n   text-align: center;\n   padding: 0.5rem 0;\n   font-family: ", ";\n   cursor: pointer;\n   &:hover {\n      background-color: ", ";\n   }\n"], ["\n   display: flex;\n   margin: 0.2rem;\n   img {\n      opacity: 0.5;\n      width: 20px;\n      padding: 0 3rem 0 1rem;\n   }\n   color: ",
    ";\n   width: 100%;\n   text-align: center;\n   padding: 0.5rem 0;\n   font-family: ", ";\n   cursor: pointer;\n   &:hover {\n      background-color: ", ";\n   }\n"])), function (_a) {
    var color = _a.color;
    return color ? onlineTheme.colors[color] : onlineTheme.colors.dark;
}, onlineTheme.font.family, onlineTheme.colors.primary + "f0");
var templateObject_1$7, templateObject_2$4;

var Drawer = function (_a) {
    var trigger = _a.trigger, _b = _a.drawerWith, drawerWith = _b === void 0 ? enums.Sizes.SMALL : _b, _c = _a.color, color = _c === void 0 ? "dark" : _c, closeBtnColor = _a.closeBtnColor, title = _a.title, children = _a.children, _d = _a.backdropBg, backdropBg = _d === void 0 ? false : _d;
    var _e = __read(react.useState(false), 2), isShown = _e[0], setIsShown = _e[1];
    var _f = __read(react.useState(false), 2), isFadeOut = _f[0], setIsFadeOut = _f[1];
    var closeFn = function () {
        setIsFadeOut(true);
        setTimeout(function () {
            setIsShown(false);
        }, 300);
    };
    return (react.createElement(react.Fragment, null,
        react.createElement("span", { onClick: function () {
                setIsFadeOut(false);
                setIsShown(function (cur) { return !cur; });
            } }, trigger),
        isShown && (react.createElement(react.Fragment, null,
            react.createElement(Backdrop, { bg: backdropBg, closeFn: closeFn, opacity: 0.05, timer: 0.3 }),
            console.log(color),
            react.createElement(SDrawer, { drawerWith: drawerWith, isFadeOut: isFadeOut, color: color },
                react.createElement("div", { className: "iconContainer", onClick: function () { return closeFn(); } },
                    react.createElement(SIcon, { icon: "leftArrow", color: closeBtnColor
                            ? closeBtnColor
                            : color === "dark"
                                ? "light"
                                : "dark" })),
                title && react.createElement("h2", null, title),
                react.createElement(SItemContainer, null, children))))));
};

var positionToolTip = function (side) {
    switch (side) {
        case Position.TOP_LEFT:
            return "\n              left: -50%;\n           ";
        case Position.TOP_RIGHT:
            return "\n              left: 150%;\n           ";
        case Position.BOTTOM_CENTER:
            return "\n              top: 120%;\n              left: 50%;\n              transform: translateX(-50%);\n              height: fit-content;\n           ";
        case Position.BOTTOM_RIGHT:
            return "\n              top: 120%;\n              left: 120%;\n              transform: translateX(-50%);\n              height: fit-content;\n           ";
        case Position.BOTTOM_LEFT:
            return "\n              top: 120%;\n              left: -20%;\n              transform: translateX(-50%);\n              height: fit-content;\n           ";
        case Position.RIGHT:
            return "\n              top: 50%;\n              left: 125%;\n              transform: translateY(-50%);\n              height: fit-content;\n           ";
        case Position.LEFT:
            return "\n              top: 50%;\n              left: -215%;\n              transform: translate(-50%, -50%);\n              height: fit-content;\n           ";
        default:
            return "";
    }
};
var positionToolTipTriangular = function (side) {
    switch (side) {
        case Position.TOP_CENTER:
            return "\n            left: 50%;\n            bottom: calc(120% - 0.4rem);\n            transform: translateX(-50%);\n         ";
        case Position.TOP_LEFT:
            return "\n            left: 5%;\n            bottom: calc(120% - 0.4rem);\n            transform: translateX(-50%);\n         ";
        case Position.TOP_RIGHT:
            return "\n            left: 95%;\n            bottom: calc(120% - 0.4rem);\n            transform: translateX(-50%);\n         ";
        case Position.BOTTOM_CENTER:
            return "\n            left: 50%;\n            bottom: calc(120% - 1.8rem);\n            transform: translateX(-50%) rotate(180deg);\n         ";
        case Position.BOTTOM_RIGHT:
            return "\n            left: 95%;\n            bottom: calc(120% - 1.8rem);\n            transform: translateX(-50%) rotate(180deg);\n         ";
        case Position.BOTTOM_LEFT:
            return "\n            left: 5%;\n            bottom: calc(120% - 1.8rem);\n            transform: translateX(-50%) rotate(180deg);\n         ";
        case Position.RIGHT:
            return "\n            left: 120%;\n            top: 50%;\n            bottom: calc(120% - 1.8rem);\n            transform: translate(-50%, -50%) rotate(90deg);\n         ";
        case Position.LEFT:
            return "\n            left: -20%;\n            top: 50%;\n            bottom: calc(120% - 1.8rem);\n            transform: translate(-50%, -50%) rotate(-90deg);\n         ";
    }
};

var SToolTipContainer = styled__default.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n   position: relative;\n   display: inline-block;\n"], ["\n   position: relative;\n   display: inline-block;\n"])));
var SToolTip = styled__default.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n   background-color: ", ";\n   border-radius: 5px;\n   position: absolute;\n   bottom: 120%;\n   left: 50%;\n   transform: translateX(-50%);\n   padding: ", ";\n   color: #eee;\n   text-align: center;\n   width: max-content;\n   max-width: 15em;\n   .body {\n      font-size: ", ";\n      padding: 0.3em;\n   }\n\n   ", "\n"], ["\n   background-color: ", ";\n   border-radius: 5px;\n   position: absolute;\n   bottom: 120%;\n   left: 50%;\n   transform: translateX(-50%);\n   padding: ", ";\n   color: #eee;\n   text-align: center;\n   width: max-content;\n   max-width: 15em;\n   .body {\n      font-size: ", ";\n      padding: 0.3em;\n   }\n\n   ",
    "\n"])), onlineTheme.colors.dark, function (_a) {
    var isTitle = _a.isTitle;
    return (isTitle ? "0.5rem" : 0);
}, onlineTheme.font.size.smallMedium2, function (_a) {
    var side = _a.side;
    return styled.css(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n         ", "\n      "], ["\n         ", "\n      "])), positionToolTip(side));
});
var Triangular = styled__default.div(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n   clip-path: polygon(50% 100%, 0 0, 100% 0);\n   background-color: ", ";\n   width: 0.8rem;\n   height: 0.5rem;\n   position: absolute;\n   ", "\n"], ["\n   clip-path: polygon(50% 100%, 0 0, 100% 0);\n   background-color: ", ";\n   width: 0.8rem;\n   height: 0.5rem;\n   position: absolute;\n   ",
    "\n"])), onlineTheme.colors.dark, function (_a) {
    var side = _a.side;
    return styled.css(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n         ", "\n      "], ["\n         ", "\n      "])), positionToolTipTriangular(side));
});
var ToolTipTitle = styled__default.div(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n   text-align: left;\n   border-bottom: 1px solid #eeeeee50;\n"], ["\n   text-align: left;\n   border-bottom: 1px solid #eeeeee50;\n"])));
var templateObject_1$8, templateObject_2$5, templateObject_3$3, templateObject_4$3, templateObject_5$2, templateObject_6$2;

var ToolTip = function (_a) {
    var children = _a.children, body = _a.body, title = _a.title, _b = _a.side, side = _b === void 0 ? enums.Position.TOP_CENTER : _b;
    var _c = __read(react.useState(false), 2), showToolTip = _c[0], setShowToolTip = _c[1];
    return (react.createElement(react.Fragment, null,
        react.createElement(SToolTipContainer, { onMouseEnter: function () { return setShowToolTip(true); }, onMouseLeave: function () { return setShowToolTip(false); } },
            showToolTip && (react.createElement(react.Fragment, null,
                react.createElement(SToolTip, { isTitle: true, side: side },
                    title && react.createElement(ToolTipTitle, null, title),
                    react.createElement("div", { className: "body" }, body)),
                react.createElement(Triangular, { side: side }))),
            children)));
};

var SToggle = styled__default.p(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n   display: flex;\n   color: ", ";\n   cursor: pointer;\n   width: fit-content;\n\n   .iconContainer {\n      padding: 0 0.5rem;\n   }\n"], ["\n   display: flex;\n   color: ", ";\n   cursor: pointer;\n   width: fit-content;\n\n   .iconContainer {\n      padding: 0 0.5rem;\n   }\n"])), function (_a) {
    var color = _a.color;
    return color && onlineTheme.colors[color];
});
var SMenu = styled__default.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n   width: fit-content;\n   margin: 0.5rem 0;\n   border: 1px solid #eeeeee;\n   border-radius: 5px;\n   background-color: white;\n"], ["\n   width: fit-content;\n   margin: 0.5rem 0;\n   border: 1px solid #eeeeee;\n   border-radius: 5px;\n   background-color: white;\n"])));
var SItem$1 = styled__default.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n   padding: 0.5rem 1rem;\n   color: ", ";\n   font-family: ", ";\n   font-size: 0.9rem;\n   &:hover {\n      cursor: pointer;\n      background-color: #eeeeee60;\n   }\n"], ["\n   padding: 0.5rem 1rem;\n   color: ", ";\n   font-family: ", ";\n   font-size: 0.9rem;\n   &:hover {\n      cursor: pointer;\n      background-color: #eeeeee60;\n   }\n"])), function (_a) {
    var color = _a.color;
    return color && onlineTheme.colors[color];
}, onlineTheme.font.family);
var templateObject_1$9, templateObject_2$6, templateObject_3$4;

var Dropdown = function (_a) {
    var children = _a.children;
    var toggle = children.filter(function (c) { return c.type.name === "Toggle"; });
    var menu = children.filter(function (c) { return c.type.name === "Menu"; });
    var _b = __read(react.useState(false), 2), isShown = _b[0], setIsShown = _b[1];
    return (react.createElement(react.Fragment, null,
        react.createElement(GlobalStyle, null),
        react.createElement("span", { onClick: function () { return setIsShown(function (cur) { return !cur; }); } }, toggle),
        isShown && (react.createElement(react.Fragment, null,
            react.createElement(Backdrop, { closeFn: function () { return setIsShown(false); } }),
            menu))));
};
var Toggle = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? enums.Colors.DARK : _b;
    return (react.createElement(react.Fragment, null,
        react.createElement(SToggle, { color: color },
            children,
            react.createElement("span", { className: "iconContainer" },
                react.createElement(Icon, { icon: "downArrow", color: color })))));
};
var Menu = function (_a) {
    var children = _a.children;
    return (react.createElement(react.Fragment, null,
        react.createElement(SMenu, null, children)));
};
var Item = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? enums.Colors.DARK : _b;
    return (react.createElement(react.Fragment, null,
        react.createElement(SItem$1, { color: color }, children)));
};
Dropdown.Toggle = Toggle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

var SSideNav = styled__default.div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n   width: ", ";\n   height: 100vh;\n   ", "\n"], ["\n   width: ",
    ";\n   height: 100vh;\n   ",
    "\n"])), function (_a) {
    var _b = _a.width, width = _b === void 0 ? enums.Sizes.MEDIUM : _b;
    return width === enums.Sizes.MEDIUM
        ? "150px"
        : width === enums.Sizes.LARGE
            ? "200px"
            : "125px";
}, function (_a) {
    var gradientBackgroundColor = _a.gradientBackgroundColor, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? enums.Colors.PRIMARY : _b;
    return gradientBackgroundColor
        ? styled.css(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n              background: linear-gradient(\n                 220deg,\n                 ", ",\n                 ", "\n              );\n           "], ["\n              background: linear-gradient(\n                 220deg,\n                 ", ",\n                 ", "\n              );\n           "])), onlineTheme.colors[gradientBackgroundColor[0]] + "e0", onlineTheme.colors[gradientBackgroundColor[1]]) : backgroundColor && styled.css(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n              background-color: ", ";\n           "], ["\n              background-color: ", ";\n           "])), onlineTheme.colors[backgroundColor]);
});
var SLogo = styled__default.div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n   font-size: 1.5rem;\n   color: ", ";\n   text-align: center;\n   padding: 1rem 0;\n   font-family: ", ";\n"], ["\n   font-size: 1.5rem;\n   color: ", ";\n   text-align: center;\n   padding: 1rem 0;\n   font-family: ", ";\n"])), onlineTheme.colors.primary, onlineTheme.font.family);
var templateObject_1$a, templateObject_2$7, templateObject_3$5, templateObject_4$4;

var SideNav = function (_a) {
    var logo = _a.logo, children = _a.children;
    return (react.createElement(react.Fragment, null,
        react.createElement(GlobalStyle, null),
        react.createElement(SSideNav, { width: enums.Sizes.SMALL, gradientBackgroundColor: [enums.Colors.DARK, enums.Colors.DARKER] },
            logo && react.createElement(SLogo, null, logo),
            children)));
};

var SItem$2 = styled__default.div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n   height: 60px;\n   padding: 5px 0;\n   width: 100%;\n   position: relative;\n   transition: all 0.2s;\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   cursor: pointer;\n   .selectedLine {\n      opacity: 0;\n      transition: all 0.2s;\n   }\n   ", ";\n"], ["\n   height: 60px;\n   padding: 5px 0;\n   width: 100%;\n   position: relative;\n   transition: all 0.2s;\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   cursor: pointer;\n   .selectedLine {\n      opacity: 0;\n      transition: all 0.2s;\n   }\n   ",
    ";\n"])), function (_a) {
    var active = _a.active;
    return active && styled.css(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n         background-color: ", ";\n         .selectedLine {\n            opacity: 1;\n            width: 5px;\n            height: 100%;\n            background-color: ", ";\n            position: absolute;\n            top: 0%;\n            left: 0;\n         }\n         ", " ,", "{\n            opacity: 1;\n         }\n      "], ["\n         background-color: ", ";\n         .selectedLine {\n            opacity: 1;\n            width: 5px;\n            height: 100%;\n            background-color: ", ";\n            position: absolute;\n            top: 0%;\n            left: 0;\n         }\n         ", " ,", "{\n            opacity: 1;\n         }\n      "])), onlineTheme.colors.selected, onlineTheme.colors.primary, SIcon$1, SLabel);
});
var SLabel = styled__default.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n   font-size: 0.75rem;\n   font-family: ", ";\n   color: white;\n   text-align: center;\n   opacity: 0.5;\n   padding-top: 0.5rem;\n"], ["\n   font-size: 0.75rem;\n   font-family: ", ";\n   color: white;\n   text-align: center;\n   opacity: 0.5;\n   padding-top: 0.5rem;\n"])), onlineTheme.font.family);
var SIcon$1 = styled__default.div(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n   background-size: cover;\n   opacity: 0.5;\n   width: ", ";\n   height: ", ";\n   background-color: ", ";\n   mask: ", ";\n   mask-repeat: no-repeat;\n"], ["\n   background-size: cover;\n   opacity: 0.5;\n   width: ",
    ";\n   height: ",
    ";\n   background-color: ",
    ";\n   mask: ",
    ";\n   mask-repeat: no-repeat;\n"])), function (_a) {
    var size = _a.size;
    return size === enums.Sizes.MEDIUM
        ? "1.5rem"
        : size === enums.Sizes.LARGE
            ? "3rem"
            : "1rem";
}, function (_a) {
    var size = _a.size;
    return size === enums.Sizes.MEDIUM
        ? "1.5rem"
        : size === enums.Sizes.LARGE
            ? "3rem"
            : "1rem";
}, function (props) {
    return props.color
        ? onlineTheme.colors[props.color]
        : onlineTheme.colors.primary;
}, function (props) {
    return props.icon && "url(" + onlineTheme.icons[props.icon] + ") ";
});
var templateObject_1$b, templateObject_2$8, templateObject_3$6, templateObject_4$5;

var Item$1 = function (_a) {
    var label = _a.label, icon = _a.icon, iconSize = _a.iconSize, _b = _a.active, active = _b === void 0 ? false : _b, svg = _a.svg;
    return (react.createElement(react.Fragment, null,
        react.createElement(SItem$2, { active: active },
            react.createElement("div", { className: "selectedLine" }),
            icon ? (react.createElement(Icon, { color: enums.Colors.LIGHT, icon: icon, iconSize: iconSize })) : (react.createElement(Icon, { color: enums.Colors.LIGHT, svg: svg, iconSize: iconSize })),
            react.createElement(SLabel, null, label))));
};

var SNavBar = styled__default.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n   padding: 0.5rem 3rem;\n   border-bottom: 1px solid #ffffff40;\n   display: flex;\n   justify-content: space-between;\n   align-items: center;\n\n   .iconsContainer {\n      display: flex;\n      justify-content: flex-end;\n   }\n   .icon {\n      padding: 0.5rem 1rem;\n      cursor: pointer;\n   }\n"], ["\n   padding: 0.5rem 3rem;\n   border-bottom: 1px solid #ffffff40;\n   display: flex;\n   justify-content: space-between;\n   align-items: center;\n\n   .iconsContainer {\n      display: flex;\n      justify-content: flex-end;\n   }\n   .icon {\n      padding: 0.5rem 1rem;\n      cursor: pointer;\n   }\n"])));
var templateObject_1$c;

var SideNav$1 = function (_a) {
    var title = _a.title, icon = _a.icon, titleStyle = _a.titleStyle;
    return (react.createElement(react.Fragment, null,
        react.createElement(SNavBar, null,
            title && (react.createElement(Title, { text: title, color: enums.Colors.LIGHT, style: __assign({}, titleStyle) })),
            react.createElement("div", { className: "iconsContainer" }, icon &&
                icon.map(function (i) { return (react.createElement("div", { className: "icon" },
                    react.createElement(SIcon, { svg: i, size: enums.Sizes.MEDIUM, color: enums.Colors.LIGHT }))); })))));
};

var fadeIn$1 = styled.keyframes(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  from {\n   opacity:0;\n   margin-top:-10rem;\n  }\n\n  to {\n   opacity:1;\n   margin-top:0rem;\n   }\n"], ["\n  from {\n   opacity:0;\n   margin-top:-10rem;\n  }\n\n  to {\n   opacity:1;\n   margin-top:0rem;\n   }\n"])));
var fadeOut$1 = styled.keyframes(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  from {\n   opacity:1;\n   margin-top:0rem;\n  }\n \n  to {\n   opacity:0;\n   margin-top:-10rem;\n   }\n"], ["\n  from {\n   opacity:1;\n   margin-top:0rem;\n  }\n \n  to {\n   opacity:0;\n   margin-top:-10rem;\n   }\n"])));
var SModal = styled__default.div(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n   ", ";\n\n   display: flex;\n\n   flex-direction: column;\n   max-width: ", ";\n\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   box-shadow: 0px 0 30px -20px ", ";\n   border-radius: 5px;\n   .close {\n      position: absolute;\n      right: 20px;\n      top: 20px;\n      img {\n         width: 20px;\n         height: 20px;\n         opacity: 0.7;\n         cursor: pointer;\n      }\n   }\n"], ["\n   ",
    ";\n\n   display: flex;\n\n   flex-direction: column;\n   max-width: ",
    ";\n\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   box-shadow: 0px 0 30px -20px ", ";\n   border-radius: 5px;\n   .close {\n      position: absolute;\n      right: 20px;\n      top: 20px;\n      img {\n         width: 20px;\n         height: 20px;\n         opacity: 0.7;\n         cursor: pointer;\n      }\n   }\n"])), function (_a) {
    var isFadeOut = _a.isFadeOut;
    if (isFadeOut) {
        return styled.css(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n            animation: ", " 0.3s;\n         "], ["\n            animation: ", " 0.3s;\n         "])), fadeOut$1);
    }
    else {
        return styled.css(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n            animation: ", " 0.2s;\n         "], ["\n            animation: ", " 0.2s;\n         "])), function (_a) {
            var show = _a.show;
            return (show ? fadeIn$1 : fadeOut$1);
        });
    }
}, function (_a) {
    var size = _a.size;
    return size === enums.Sizes.MEDIUM ? "40%" : size === enums.Sizes.SMALL ? "25%" : "50%";
}, onlineTheme.colors.dark);
var SBody$1 = styled__default.div(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n   display: flex;\n   flex-direction: column;\n   flex: 1;\n   padding: 0 1rem 0 1rem;\n   .text {\n      text-align: center;\n      padding-bottom: 1rem;\n      font-family: ", ";\n   }\n"], ["\n   display: flex;\n   flex-direction: column;\n   flex: 1;\n   padding: 0 1rem 0 1rem;\n   .text {\n      text-align: center;\n      padding-bottom: 1rem;\n      font-family: ", ";\n   }\n"])), onlineTheme.font.family);
var SBtnContainer = styled__default.div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n   display: flex;\n   justify-content: ", ";\n   flex: 1;\n"], ["\n   display: flex;\n   justify-content: ",
    ";\n   flex: 1;\n"])), function (_a) {
    var buttonPosition = _a.buttonPosition;
    return buttonPosition === enums.Position.LEFT
        ? "flex-start"
        : buttonPosition === enums.Position.RIGHT
            ? "flex-end"
            : enums.Position.CENTER;
});
var templateObject_1$d, templateObject_2$9, templateObject_3$7, templateObject_4$6, templateObject_5$3, templateObject_6$3, templateObject_7$1;

var Modal = function (_a) {
    var children = _a.children, body = _a.body, title = _a.title, color = _a.color, button = _a.button, onClickButton = _a.onClickButton, _b = _a.size, size = _b === void 0 ? enums.Sizes.MEDIUM : _b, _c = _a.buttonPosition, buttonPosition = _c === void 0 ? enums.Position.CENTER : _c;
    var _d = __read(react.useState(false), 2), isModalShow = _d[0], setIsModalShow = _d[1];
    var _e = __read(react.useState(false), 2), fadeOut = _e[0], setFadeOut = _e[1];
    react.useEffect(function () {
        if (fadeOut) {
            setTimeout(function () {
                setFadeOut(false);
                setIsModalShow(false);
            }, 200);
        }
    }, [fadeOut]);
    return (react.createElement(react.Fragment, null,
        react.createElement("span", { onClick: function () {
                return isModalShow ? setFadeOut(true) : setIsModalShow(true);
            } },
            react.createElement("span", { style: { cursor: "pointer" } }, children)),
        isModalShow && (react.createElement(react.Fragment, null,
            react.createElement("div", { style: {
                    width: "100vw",
                    height: "100vh",
                    position: "absolute",
                }, onClick: function () {
                    setFadeOut(true);
                } }),
            react.createElement(SModal, { size: size, show: isModalShow, isFadeOut: fadeOut },
                title && react.createElement(Title, { text: title, color: color, align: "center" }),
                react.createElement("span", { className: "close", onClick: function () { return setFadeOut(true); } },
                    react.createElement("img", { src: onlineTheme.icons.close, alt: "close" })),
                react.createElement(SBody$1, null, typeof body === "object" ? (body.map(function (b) { return react.createElement("p", { className: "text" }, b); })) : (react.createElement("p", { className: "text" }, body))),
                button && (react.createElement(SBtnContainer, { buttonPosition: buttonPosition }, typeof button === "string" ? (react.createElement(Button, { text: button, onClick: onClickButton, color: color })) : (button.map(function (b, i) {
                    return typeof onClickButton === "object" && (react.createElement(Button, { key: i, text: b, onClick: onClickButton[i], color: color }));
                })))))))));
};

exports.Backdrop = Backdrop;
exports.Button = Button;
exports.Card = Card;
exports.Colors = Colors_1.Colors;
exports.Drawer = Drawer;
exports.Dropdown = Dropdown;
exports.Icon = Icon;
exports.Item = Item$1;
exports.Modal = Modal;
exports.NavBar = SideNav$1;
exports.SideNav = SideNav;
exports.Title = Title;
exports.ToolTip = ToolTip;
//# sourceMappingURL=index.d.js.map
