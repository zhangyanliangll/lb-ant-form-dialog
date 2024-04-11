import { Fragment as dt, isVNode as dc, Comment as fc, Text as Ga, computed as w, inject as he, provide as Ee, ref as k, defineComponent as F, unref as Te, shallowRef as D, getCurrentInstance as Ao, watch as Y, watchEffect as Ie, onBeforeUnmount as Be, triggerRef as pc, createVNode as v, h as mn, render as qe, cloneVNode as gc, Transition as On, onBeforeMount as mc, onMounted as Ae, onUpdated as _o, nextTick as je, Teleport as Va, reactive as Re, onUnmounted as vc, TransitionGroup as Ka, withDirectives as Xa, vShow as Ya, isRef as qa, toRefs as hc, customRef as yc, getCurrentScope as bc, onScopeDispose as Cc, resolveComponent as St, openBlock as Me, createBlock as xt, mergeProps as Qt, withCtx as rt, createElementVNode as dr, toDisplayString as Sc, normalizeStyle as xc, resolveDynamicComponent as fr, createElementBlock as Bn, renderList as $c, toHandlers as pr, renderSlot as wc, createCommentVNode as gr, toRaw as Oc } from "vue";
function _t(e) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _t(e);
}
function Tc(e, t) {
  if (_t(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t || "default");
    if (_t(o) != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pc(e) {
  var t = Tc(e, "string");
  return _t(t) == "symbol" ? t : t + "";
}
function Ec(e, t, n) {
  return t = Pc(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function mr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mr(Object(n), !0).forEach(function(o) {
      Ec(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mr(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function p() {
  return p = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, p.apply(this, arguments);
}
const Ic = Array.isArray, Ac = (e) => typeof e == "string", _c = (e) => e !== null && typeof e == "object";
function lt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "function" ? e(t) : e ?? n;
}
function Mc(e) {
  let t;
  const n = new Promise((r) => {
    t = e(() => {
      r(!0);
    });
  }), o = () => {
    t == null || t();
  };
  return o.then = (r, a) => n.then(r, a), o.promise = n, o;
}
function G() {
  const e = [];
  for (let t = 0; t < arguments.length; t++) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n) {
      if (Ac(n))
        e.push(n);
      else if (Ic(n))
        for (let o = 0; o < n.length; o++) {
          const r = G(n[o]);
          r && e.push(r);
        }
      else if (_c(n))
        for (const o in n)
          n[o] && e.push(o);
    }
  }
  return e.join(" ");
}
const Nc = (e) => e != null && e !== "", zt = (e, t) => {
  const n = p({}, e);
  return Object.keys(t).forEach((o) => {
    const r = n[o];
    if (r)
      r.type || r.default ? r.default = t[o] : r.def ? r.def(t[o]) : n[o] = {
        type: r,
        default: t[o]
      };
    else
      throw new Error(`not have ${o} prop`);
  }), n;
}, jc = Symbol("skipFlatten"), Mt = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = Array.isArray(e) ? e : [e], o = [];
  return n.forEach((r) => {
    Array.isArray(r) ? o.push(...Mt(r, t)) : r && r.type === dt ? r.key === jc ? o.push(r) : o.push(...Mt(r.children, t)) : r && dc(r) ? t && !Qa(r) ? o.push(r) : t || o.push(r) : Nc(r) && o.push(r);
  }), o;
}, vn = (e) => {
  var t;
  let n = ((t = e == null ? void 0 : e.vnode) === null || t === void 0 ? void 0 : t.el) || e && (e.$el || e);
  for (; n && !n.tagName; )
    n = n.nextSibling;
  return n;
};
function Qa(e) {
  return e && (e.type === fc || e.type === dt && e.children.length === 0 || e.type === Ga && e.children.trim() === "");
}
function Za() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const t = [];
  return e.forEach((n) => {
    Array.isArray(n) ? t.push(...n) : (n == null ? void 0 : n.type) === dt ? t.push(...Za(n.children)) : t.push(n);
  }), t.filter((n) => !Qa(n));
}
let Ja = (e) => setTimeout(e, 16), ei = (e) => clearTimeout(e);
typeof window < "u" && "requestAnimationFrame" in window && (Ja = (e) => window.requestAnimationFrame(e), ei = (e) => window.cancelAnimationFrame(e));
let vr = 0;
const Mo = /* @__PURE__ */ new Map();
function ti(e) {
  Mo.delete(e);
}
function Nt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  vr += 1;
  const n = vr;
  function o(r) {
    if (r === 0)
      ti(n), e();
    else {
      const a = Ja(() => {
        o(r - 1);
      });
      Mo.set(n, a);
    }
  }
  return o(t), n;
}
Nt.cancel = (e) => {
  const t = Mo.get(e);
  return ti(t), ei(t);
};
const hn = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t;
}, No = (e) => {
  const t = e;
  return t.install = function(n) {
    n.component(t.displayName || t.name, e);
  }, e;
};
function hr() {
  return {
    type: [Function, Array]
  };
}
function K(e) {
  return {
    type: Object,
    default: e
  };
}
function st(e) {
  return {
    type: Boolean,
    default: e
  };
}
function eo(e, t) {
  const n = {
    validator: () => !0,
    default: e
  };
  return n;
}
function yr(e) {
  return {
    type: Array,
    default: e
  };
}
function br(e) {
  return {
    type: String,
    default: e
  };
}
function Rc(e, t) {
  return e ? {
    type: e,
    default: t
  } : eo(t);
}
let ni = !1;
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      ni = !0;
    }
  });
  window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
} catch {
}
const Bc = ni;
function Hc(e, t, n, o) {
  if (e && e.addEventListener) {
    let r = o;
    r === void 0 && Bc && (t === "touchstart" || t === "touchmove" || t === "wheel") && (r = {
      passive: !1
    }), e.addEventListener(t, n, r);
  }
  return {
    remove: () => {
      e && e.removeEventListener && e.removeEventListener(t, n);
    }
  };
}
const jo = "anticon", Fc = Symbol("GlobalFormContextKey"), Dc = (e) => {
  Ee(Fc, e);
}, Lc = () => ({
  iconPrefixCls: String,
  getTargetContainer: {
    type: Function
  },
  getPopupContainer: {
    type: Function
  },
  prefixCls: String,
  getPrefixCls: {
    type: Function
  },
  renderEmpty: {
    type: Function
  },
  transformCellText: {
    type: Function
  },
  csp: K(),
  input: K(),
  autoInsertSpaceInButton: {
    type: Boolean,
    default: void 0
  },
  locale: K(),
  pageHeader: K(),
  componentSize: {
    type: String
  },
  componentDisabled: {
    type: Boolean,
    default: void 0
  },
  direction: {
    type: String,
    default: "ltr"
  },
  space: K(),
  virtual: {
    type: Boolean,
    default: void 0
  },
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: !0
  },
  form: K(),
  pagination: K(),
  theme: K(),
  select: K(),
  wave: K()
}), Ro = Symbol("configProvider"), oi = {
  getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
  iconPrefixCls: w(() => jo),
  getPopupContainer: w(() => () => document.body),
  direction: w(() => "ltr")
}, Tn = () => he(Ro, oi), zc = (e) => Ee(Ro, e), ri = Symbol("DisabledContextKey"), Bo = () => he(ri, k(void 0)), kc = (e) => {
  const t = Bo();
  return Ee(ri, w(() => {
    var n;
    return (n = e.value) !== null && n !== void 0 ? n : t.value;
  })), e;
}, Wc = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
}, Uc = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
}, Gc = Uc, Vc = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, ai = Vc, Kc = {
  lang: p({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, Gc),
  timePickerLocale: p({}, ai)
}, Cr = Kc, le = "${label} is not a valid ${type}", Qe = {
  locale: "en",
  Pagination: Wc,
  DatePicker: Cr,
  TimePicker: ai,
  Calendar: Cr,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: le,
        method: le,
        array: le,
        object: le,
        number: le,
        date: le,
        boolean: le,
        integer: le,
        float: le,
        regexp: le,
        email: le,
        url: le,
        hex: le
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  }
}, ii = F({
  compatConfig: {
    MODE: 3
  },
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = he("localeData", {}), r = w(() => {
      const {
        componentName: i = "global",
        defaultLocale: l
      } = e, u = l || Qe[i || "global"], {
        antLocale: s
      } = o, d = i && s ? s[i] : {};
      return p(p({}, typeof u == "function" ? u() : u), d || {});
    }), a = w(() => {
      const {
        antLocale: i
      } = o, l = i && i.locale;
      return i && i.exist && !l ? Qe.locale : l;
    });
    return () => {
      const i = e.children || n.default, {
        antLocale: l
      } = o;
      return i == null ? void 0 : i(r.value, a.value, l);
    };
  }
});
function Ho(e, t, n) {
  const o = he("localeData", {});
  return [w(() => {
    const {
      antLocale: a
    } = o, i = Te(t) || Qe[e || "global"], l = e && a ? a[e] : {};
    return p(p(p({}, typeof i == "function" ? i() : i), l || {}), Te(n) || {});
  })];
}
function Fo(e) {
  for (var t = 0, n, o = 0, r = e.length; r >= 4; ++o, r -= 4)
    n = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (r) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
const Sr = "%";
class Xc {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.instanceId = t;
  }
  get(t) {
    return this.cache.get(Array.isArray(t) ? t.join(Sr) : t) || null;
  }
  update(t, n) {
    const o = Array.isArray(t) ? t.join(Sr) : t, r = this.cache.get(o), a = n(r);
    a === null ? this.cache.delete(o) : this.cache.set(o, a);
  }
}
const Yc = Xc, li = "data-token-hash", Ve = "data-css-hash", qc = "data-cache-path", ct = "__cssinjs_instance__";
function jt() {
  const e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    const t = document.body.querySelectorAll(`style[${Ve}]`) || [], {
      firstChild: n
    } = document.head;
    Array.from(t).forEach((r) => {
      r[ct] = r[ct] || e, r[ct] === e && document.head.insertBefore(r, n);
    });
    const o = {};
    Array.from(document.querySelectorAll(`style[${Ve}]`)).forEach((r) => {
      var a;
      const i = r.getAttribute(Ve);
      o[i] ? r[ct] === e && ((a = r.parentNode) === null || a === void 0 || a.removeChild(r)) : o[i] = !0;
    });
  }
  return new Yc(e);
}
const ci = Symbol("StyleContextKey"), Qc = () => {
  var e, t, n;
  const o = Ao();
  let r;
  if (o && o.appContext) {
    const a = (n = (t = (e = o.appContext) === null || e === void 0 ? void 0 : e.config) === null || t === void 0 ? void 0 : t.globalProperties) === null || n === void 0 ? void 0 : n.__ANTDV_CSSINJS_CACHE__;
    a ? r = a : (r = jt(), o.appContext.config.globalProperties && (o.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = r));
  } else
    r = jt();
  return r;
}, si = {
  cache: jt(),
  defaultCache: !0,
  hashPriority: "low"
}, Pn = () => {
  const e = Qc();
  return he(ci, D(p(p({}, si), {
    cache: e
  })));
}, Zc = (e) => {
  const t = Pn(), n = D(p(p({}, si), {
    cache: jt()
  }));
  return Y([() => Te(e), t], () => {
    const o = p({}, t.value), r = Te(e);
    Object.keys(r).forEach((i) => {
      const l = r[i];
      r[i] !== void 0 && (o[i] = l);
    });
    const {
      cache: a
    } = r;
    o.cache = o.cache || jt(), o.defaultCache = !a && t.value.defaultCache, n.value = o;
  }, {
    immediate: !0
  }), Ee(ci, n), n;
}, Jc = () => ({
  autoClear: st(),
  /** @private Test only. Not work in production. */
  mock: br(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: K(),
  /** Tell children that this context is default generated context */
  defaultCache: st(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: br(),
  /** Tell cssinjs where to inject style in */
  container: Rc(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: st(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: yr(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: yr()
});
No(F({
  name: "AStyleProvider",
  inheritAttrs: !1,
  props: Jc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Zc(e), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
}));
function es() {
  return !1;
}
let to = !1;
function ts() {
  return to;
}
const ns = process.env.NODE_ENV === "production" ? es : ts;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  const e = window;
  if (typeof e.webpackHotUpdate == "function") {
    const t = e.webpackHotUpdate;
    e.webpackHotUpdate = function() {
      return to = !0, setTimeout(() => {
        to = !1;
      }, 0), t(...arguments);
    };
  }
}
function ui(e, t, n, o) {
  const r = Pn(), a = D(""), i = D();
  Ie(() => {
    a.value = [e, ...t.value].join("%");
  });
  const l = ns(), u = (s) => {
    r.value.cache.update(s, (d) => {
      const [c = 0, f] = d || [];
      return c - 1 === 0 ? (o == null || o(f, !1), null) : [c - 1, f];
    });
  };
  return Y(a, (s, d) => {
    d && u(d), r.value.cache.update(s, (c) => {
      const [f = 0, g] = c || [];
      let h = g;
      process.env.NODE_ENV !== "production" && g && l && (o == null || o(h, l), h = null);
      const b = h || n();
      return [f + 1, b];
    }), i.value = r.value.cache.get(a.value)[1];
  }, {
    immediate: !0
  }), Be(() => {
    u(a.value);
  }), i;
}
function ve() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function di(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
const xr = "data-vc-order", os = "vc-util-key", no = /* @__PURE__ */ new Map();
function fi() {
  let {
    mark: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return e ? e.startsWith("data-") ? e : `data-${e}` : os;
}
function En(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function rs(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function pi(e) {
  return Array.from((no.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function gi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!ve())
    return null;
  const {
    csp: n,
    prepend: o
  } = t, r = document.createElement("style");
  r.setAttribute(xr, rs(o)), n != null && n.nonce && (r.nonce = n == null ? void 0 : n.nonce), r.innerHTML = e;
  const a = En(t), {
    firstChild: i
  } = a;
  if (o) {
    if (o === "queue") {
      const l = pi(a).filter((u) => ["prepend", "prependQueue"].includes(u.getAttribute(xr)));
      if (l.length)
        return a.insertBefore(r, l[l.length - 1].nextSibling), r;
    }
    a.insertBefore(r, i);
  } else
    a.appendChild(r);
  return r;
}
function mi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = En(t);
  return pi(n).find((o) => o.getAttribute(fi(t)) === e);
}
function yn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = mi(e, t);
  n && En(t).removeChild(n);
}
function as(e, t) {
  const n = no.get(e);
  if (!n || !di(document, n)) {
    const o = gi("", t), {
      parentNode: r
    } = o;
    no.set(e, r), e.removeChild(o);
  }
}
function Rt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var o, r, a;
  const i = En(n);
  as(i, n);
  const l = mi(t, n);
  if (l)
    return !((o = n.csp) === null || o === void 0) && o.nonce && l.nonce !== ((r = n.csp) === null || r === void 0 ? void 0 : r.nonce) && (l.nonce = (a = n.csp) === null || a === void 0 ? void 0 : a.nonce), l.innerHTML !== e && (l.innerHTML = e), l;
  const u = gi(e, n);
  return u.setAttribute(fi(n), t), u;
}
function is(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
class ft {
  constructor() {
    this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = {
      map: this.cache
    };
    return t.forEach((r) => {
      var a;
      o ? o = (a = o == null ? void 0 : o.map) === null || a === void 0 ? void 0 : a.get(r) : o = void 0;
    }), o != null && o.value && n && (o.value[1] = this.cacheCallTimes++), o == null ? void 0 : o.value;
  }
  get(t) {
    var n;
    return (n = this.internalGet(t, !0)) === null || n === void 0 ? void 0 : n[0];
  }
  has(t) {
    return !!this.internalGet(t);
  }
  set(t, n) {
    if (!this.has(t)) {
      if (this.size() + 1 > ft.MAX_CACHE_SIZE + ft.MAX_CACHE_OFFSET) {
        const [r] = this.keys.reduce((a, i) => {
          const [, l] = a;
          return this.internalGet(i)[1] < l ? [i, this.internalGet(i)[1]] : a;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(r);
      }
      this.keys.push(t);
    }
    let o = this.cache;
    t.forEach((r, a) => {
      if (a === t.length - 1)
        o.set(r, {
          value: [n, this.cacheCallTimes++]
        });
      else {
        const i = o.get(r);
        i ? i.map || (i.map = /* @__PURE__ */ new Map()) : o.set(r, {
          map: /* @__PURE__ */ new Map()
        }), o = o.get(r).map;
      }
    });
  }
  deleteByPath(t, n) {
    var o;
    const r = t.get(n[0]);
    if (n.length === 1)
      return r.map ? t.set(n[0], {
        map: r.map
      }) : t.delete(n[0]), (o = r.value) === null || o === void 0 ? void 0 : o[0];
    const a = this.deleteByPath(r.map, n.slice(1));
    return (!r.map || r.map.size === 0) && !r.value && t.delete(n[0]), a;
  }
  delete(t) {
    if (this.has(t))
      return this.keys = this.keys.filter((n) => !is(n, t)), this.deleteByPath(this.cache, t);
  }
}
ft.MAX_CACHE_SIZE = 20;
ft.MAX_CACHE_OFFSET = 5;
let oo = {};
function ls(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error(`Warning: ${t}`);
}
function cs() {
  oo = {};
}
function ss(e, t, n) {
  !t && !oo[n] && (e(!1, n), oo[n] = !0);
}
function Do(e, t) {
  ss(ls, e, t);
}
function us() {
}
let vi = us;
process.env.NODE_ENV !== "production" && (vi = (e, t, n) => {
  Do(e, `[ant-design-vue: ${t}] ${n}`), process.env.NODE_ENV === "test" && cs();
});
const kt = vi;
let $r = 0;
class hi {
  constructor(t) {
    this.derivatives = Array.isArray(t) ? t : [t], this.id = $r, t.length === 0 && kt(t.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function."), $r += 1;
  }
  getDerivativeToken(t) {
    return this.derivatives.reduce((n, o) => o(t, n), void 0);
  }
}
const Hn = new ft();
function yi(e) {
  const t = Array.isArray(e) ? e : [e];
  return Hn.has(t) || Hn.set(t, new hi(t)), Hn.get(t);
}
const wr = /* @__PURE__ */ new WeakMap();
function bn(e) {
  let t = wr.get(e) || "";
  return t || (Object.keys(e).forEach((n) => {
    const o = e[n];
    t += n, o instanceof hi ? t += o.id : o && typeof o == "object" ? t += bn(o) : t += o;
  }), wr.set(e, t)), t;
}
function ds(e, t) {
  return Fo(`${t}_${bn(e)}`);
}
const Pt = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ""), bi = "_bAmBoO_";
function fs(e, t, n) {
  var o, r;
  if (ve()) {
    Rt(e, Pt);
    const a = document.createElement("div");
    a.style.position = "fixed", a.style.left = "0", a.style.top = "0", t == null || t(a), document.body.appendChild(a), process.env.NODE_ENV !== "production" && (a.innerHTML = "Test", a.style.zIndex = "9999999");
    const i = n ? n(a) : (o = getComputedStyle(a).content) === null || o === void 0 ? void 0 : o.includes(bi);
    return (r = a.parentNode) === null || r === void 0 || r.removeChild(a), yn(Pt), i;
  }
  return !1;
}
let Fn;
function ps() {
  return Fn === void 0 && (Fn = fs(`@layer ${Pt} { .${Pt} { content: "${bi}"!important; } }`, (e) => {
    e.className = Pt;
  })), Fn;
}
const Or = {}, gs = process.env.NODE_ENV === "production", ms = process.env.NODE_ENV === "prerender", vs = !gs && !ms ? "css-dev-only-do-not-override" : "css", ke = /* @__PURE__ */ new Map();
function hs(e) {
  ke.set(e, (ke.get(e) || 0) + 1);
}
function ys(e, t) {
  typeof document < "u" && document.querySelectorAll(`style[${li}="${e}"]`).forEach((o) => {
    var r;
    o[ct] === t && ((r = o.parentNode) === null || r === void 0 || r.removeChild(o));
  });
}
const bs = 0;
function Cs(e, t) {
  ke.set(e, (ke.get(e) || 0) - 1);
  const n = Array.from(ke.keys()), o = n.filter((r) => (ke.get(r) || 0) <= 0);
  n.length - o.length > bs && o.forEach((r) => {
    ys(r, t), ke.delete(r);
  });
}
const Ss = (e, t, n, o) => {
  const r = n.getDerivativeToken(e);
  let a = p(p({}, r), t);
  return o && (a = o(a)), a;
};
function xs(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : k({});
  const o = Pn(), r = w(() => p({}, ...t.value)), a = w(() => bn(r.value)), i = w(() => bn(n.value.override || Or));
  return ui("token", w(() => [n.value.salt || "", e.value.id, a.value, i.value]), () => {
    const {
      salt: u = "",
      override: s = Or,
      formatToken: d,
      getComputedToken: c
    } = n.value, f = c ? c(r.value, s, e.value) : Ss(r.value, s, e.value, d), g = ds(f, u);
    f._tokenKey = g, hs(g);
    const h = `${vs}-${Fo(g)}`;
    return f._hashId = h, [f, h];
  }, (u) => {
    var s;
    Cs(u[0]._tokenKey, (s = o.value) === null || s === void 0 ? void 0 : s.cache.instanceId);
  });
}
var $s = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ci = "comm", Si = "rule", xi = "decl", ws = "@import", Os = "@keyframes", Ts = "@layer", $i = Math.abs, Lo = String.fromCharCode;
function wi(e) {
  return e.trim();
}
function an(e, t, n) {
  return e.replace(t, n);
}
function Ps(e, t, n) {
  return e.indexOf(t, n);
}
function Bt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ht(e, t, n) {
  return e.slice(t, n);
}
function Oe(e) {
  return e.length;
}
function Es(e) {
  return e.length;
}
function Zt(e, t) {
  return t.push(e), e;
}
var In = 1, pt = 1, Oi = 0, de = 0, X = 0, ht = "";
function zo(e, t, n, o, r, a, i, l) {
  return { value: e, root: t, parent: n, type: o, props: r, children: a, line: In, column: pt, length: i, return: "", siblings: l };
}
function Is() {
  return X;
}
function As() {
  return X = de > 0 ? Bt(ht, --de) : 0, pt--, X === 10 && (pt = 1, In--), X;
}
function me() {
  return X = de < Oi ? Bt(ht, de++) : 0, pt++, X === 10 && (pt = 1, In++), X;
}
function Ke() {
  return Bt(ht, de);
}
function ln() {
  return de;
}
function An(e, t) {
  return Ht(ht, e, t);
}
function ro(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function _s(e) {
  return In = pt = 1, Oi = Oe(ht = e), de = 0, [];
}
function Ms(e) {
  return ht = "", e;
}
function Dn(e) {
  return wi(An(de - 1, ao(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ns(e) {
  for (; (X = Ke()) && X < 33; )
    me();
  return ro(e) > 2 || ro(X) > 3 ? "" : " ";
}
function js(e, t) {
  for (; --t && me() && !(X < 48 || X > 102 || X > 57 && X < 65 || X > 70 && X < 97); )
    ;
  return An(e, ln() + (t < 6 && Ke() == 32 && me() == 32));
}
function ao(e) {
  for (; me(); )
    switch (X) {
      case e:
        return de;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ao(X);
        break;
      case 40:
        e === 41 && ao(e);
        break;
      case 92:
        me();
        break;
    }
  return de;
}
function Rs(e, t) {
  for (; me() && e + X !== 57; )
    if (e + X === 84 && Ke() === 47)
      break;
  return "/*" + An(t, de - 1) + "*" + Lo(e === 47 ? e : me());
}
function Bs(e) {
  for (; !ro(Ke()); )
    me();
  return An(e, de);
}
function Hs(e) {
  return Ms(cn("", null, null, null, [""], e = _s(e), 0, [0], e));
}
function cn(e, t, n, o, r, a, i, l, u) {
  for (var s = 0, d = 0, c = i, f = 0, g = 0, h = 0, b = 1, S = 1, y = 1, x = 0, O = "", E = r, P = a, T = o, m = O; S; )
    switch (h = x, x = me()) {
      case 40:
        if (h != 108 && Bt(m, c - 1) == 58) {
          Ps(m += an(Dn(x), "&", "&\f"), "&\f", $i(s ? l[s - 1] : 0)) != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        m += Dn(x);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        m += Ns(h);
        break;
      case 92:
        m += js(ln() - 1, 7);
        continue;
      case 47:
        switch (Ke()) {
          case 42:
          case 47:
            Zt(Fs(Rs(me(), ln()), t, n, u), u);
            break;
          default:
            m += "/";
        }
        break;
      case 123 * b:
        l[s++] = Oe(m) * y;
      case 125 * b:
      case 59:
      case 0:
        switch (x) {
          case 0:
          case 125:
            S = 0;
          case 59 + d:
            y == -1 && (m = an(m, /\f/g, "")), g > 0 && Oe(m) - c && Zt(g > 32 ? Pr(m + ";", o, n, c - 1, u) : Pr(an(m, " ", "") + ";", o, n, c - 2, u), u);
            break;
          case 59:
            m += ";";
          default:
            if (Zt(T = Tr(m, t, n, s, d, r, l, O, E = [], P = [], c, a), a), x === 123)
              if (d === 0)
                cn(m, t, T, T, E, a, c, l, P);
              else
                switch (f === 99 && Bt(m, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    cn(e, T, T, o && Zt(Tr(e, T, T, 0, 0, r, l, O, r, E = [], c, P), P), r, P, c, l, o ? E : P);
                    break;
                  default:
                    cn(m, T, T, T, [""], P, 0, l, P);
                }
        }
        s = d = g = 0, b = y = 1, O = m = "", c = i;
        break;
      case 58:
        c = 1 + Oe(m), g = h;
      default:
        if (b < 1) {
          if (x == 123)
            --b;
          else if (x == 125 && b++ == 0 && As() == 125)
            continue;
        }
        switch (m += Lo(x), x * b) {
          case 38:
            y = d > 0 ? 1 : (m += "\f", -1);
            break;
          case 44:
            l[s++] = (Oe(m) - 1) * y, y = 1;
            break;
          case 64:
            Ke() === 45 && (m += Dn(me())), f = Ke(), d = c = Oe(O = m += Bs(ln())), x++;
            break;
          case 45:
            h === 45 && Oe(m) == 2 && (b = 0);
        }
    }
  return a;
}
function Tr(e, t, n, o, r, a, i, l, u, s, d, c) {
  for (var f = r - 1, g = r === 0 ? a : [""], h = Es(g), b = 0, S = 0, y = 0; b < o; ++b)
    for (var x = 0, O = Ht(e, f + 1, f = $i(S = i[b])), E = e; x < h; ++x)
      (E = wi(S > 0 ? g[x] + " " + O : an(O, /&\f/g, g[x]))) && (u[y++] = E);
  return zo(e, t, n, r === 0 ? Si : l, u, s, d, c);
}
function Fs(e, t, n, o) {
  return zo(e, t, n, Ci, Lo(Is()), Ht(e, 2, -2), 0, o);
}
function Pr(e, t, n, o, r) {
  return zo(e, t, n, xi, Ht(e, 0, o), Ht(e, o + 1, -1), o, r);
}
function io(e, t) {
  for (var n = "", o = 0; o < e.length; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Ds(e, t, n, o) {
  switch (e.type) {
    case Ts:
      if (e.children.length)
        break;
    case ws:
    case xi:
      return e.return = e.return || e.value;
    case Ci:
      return "";
    case Os:
      return e.return = e.value + "{" + io(e.children, o) + "}";
    case Si:
      if (!Oe(e.value = e.props.join(",")))
        return "";
  }
  return Oe(n = io(e.children, o)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ti(e, t) {
  const {
    path: n,
    parentSelectors: o
  } = t;
  Do(!1, `[Ant Design Vue CSS-in-JS] ${n ? `Error in '${n}': ` : ""}${e}${o.length ? ` Selector info: ${o.join(" -> ")}` : ""}`);
}
const Ls = (e, t, n) => {
  if (e === "content") {
    const o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    (typeof t != "string" || ["normal", "none", "initial", "inherit", "unset"].indexOf(t) === -1 && !o.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Ti(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${t}"'\`.`, n);
  }
}, zs = Ls, ks = (e, t, n) => {
  e === "animation" && n.hashId && t !== "none" && Ti(`You seem to be using hashed animation '${t}', in which case 'animationName' with Keyframe as value is recommended.`, n);
}, Ws = ks, Er = "data-ant-cssinjs-cache-path", Us = "_FILE_STYLE__";
let Xe, Pi = !0;
function Gs() {
  var e;
  if (!Xe && (Xe = {}, ve())) {
    const t = document.createElement("div");
    t.className = Er, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    let n = getComputedStyle(t).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach((r) => {
      const [a, i] = r.split(":");
      Xe[a] = i;
    });
    const o = document.querySelector(`style[${Er}]`);
    o && (Pi = !1, (e = o.parentNode) === null || e === void 0 || e.removeChild(o)), document.body.removeChild(t);
  }
}
function Vs(e) {
  return Gs(), !!Xe[e];
}
function Ks(e) {
  const t = Xe[e];
  let n = null;
  if (t && ve())
    if (Pi)
      n = Us;
    else {
      const o = document.querySelector(`style[${Ve}="${Xe[e]}"]`);
      o ? n = o.innerHTML : delete Xe[e];
    }
  return [n, t];
}
const Ir = ve(), Ei = "_skip_check_", Ii = "_multi_value_";
function Ar(e) {
  return io(Hs(e), Ds).replace(/\{%%%\:[^;];}/g, ";");
}
function Xs(e) {
  return typeof e == "object" && e && (Ei in e || Ii in e);
}
function Ys(e, t, n) {
  if (!t)
    return e;
  const o = `.${t}`, r = n === "low" ? `:where(${o})` : o;
  return e.split(",").map((i) => {
    var l;
    const u = i.trim().split(/\s+/);
    let s = u[0] || "";
    const d = ((l = s.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return s = `${d}${r}${s.slice(d.length)}`, [s, ...u.slice(1)].join(" ");
  }).join(",");
}
const lo = /* @__PURE__ */ new Set();
process.env.NODE_ENV;
const co = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    root: n,
    injectHash: o,
    parentSelectors: r
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  };
  const {
    hashId: a,
    layer: i,
    path: l,
    hashPriority: u,
    transformers: s = [],
    linters: d = []
  } = t;
  let c = "", f = {};
  function g(S) {
    const y = S.getName(a);
    if (!f[y]) {
      const [x] = co(S.style, t, {
        root: !1,
        parentSelectors: r
      });
      f[y] = `@keyframes ${S.getName(a)}${x}`;
    }
  }
  function h(S) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return S.forEach((x) => {
      Array.isArray(x) ? h(x, y) : x && y.push(x);
    }), y;
  }
  if (h(Array.isArray(e) ? e : [e]).forEach((S) => {
    const y = typeof S == "string" && !n ? {} : S;
    if (typeof y == "string")
      c += `${y}
`;
    else if (y._keyframe)
      g(y);
    else {
      const x = s.reduce((O, E) => {
        var P;
        return ((P = E == null ? void 0 : E.visit) === null || P === void 0 ? void 0 : P.call(E, O)) || O;
      }, y);
      Object.keys(x).forEach((O) => {
        var E;
        const P = x[O];
        if (typeof P == "object" && P && (O !== "animationName" || !P._keyframe) && !Xs(P)) {
          let T = !1, m = O.trim(), $ = !1;
          (n || o) && a ? m.startsWith("@") ? T = !0 : m = Ys(O, a, u) : n && !a && (m === "&" || m === "") && (m = "", $ = !0);
          const [I, M] = co(P, t, {
            root: $,
            injectHash: T,
            parentSelectors: [...r, m]
          });
          f = p(p({}, f), M), c += `${m}${I}`;
        } else {
          let T = function($, I) {
            process.env.NODE_ENV !== "production" && (typeof P != "object" || !(P != null && P[Ei])) && [zs, Ws, ...d].forEach((L) => L($, I, {
              path: l,
              hashId: a,
              parentSelectors: r
            }));
            const M = $.replace(/[A-Z]/g, (L) => `-${L.toLowerCase()}`);
            let H = I;
            !$s[$] && typeof H == "number" && H !== 0 && (H = `${H}px`), $ === "animationName" && (I != null && I._keyframe) && (g(I), H = I.getName(a)), c += `${M}:${H};`;
          };
          const m = (E = P == null ? void 0 : P.value) !== null && E !== void 0 ? E : P;
          typeof P == "object" && (P != null && P[Ii]) && Array.isArray(m) ? m.forEach(($) => {
            T(O, $);
          }) : T(O, m);
        }
      });
    }
  }), !n)
    c = `{${c}}`;
  else if (i && ps()) {
    const S = i.split(",");
    c = `@layer ${S[S.length - 1].trim()} {${c}}`, S.length > 1 && (c = `@layer ${i}{%%%:%}${c}`);
  }
  return [c, f];
};
function qs(e, t) {
  return Fo(`${e.join("%")}${t}`);
}
function so(e, t) {
  const n = Pn(), o = w(() => e.value.token._tokenKey), r = w(() => [o.value, ...e.value.path]);
  let a = Ir;
  return process.env.NODE_ENV !== "production" && n.value.mock !== void 0 && (a = n.value.mock === "client"), ui(
    "style",
    r,
    // Create cache if needed
    () => {
      const {
        path: i,
        hashId: l,
        layer: u,
        nonce: s,
        clientOnly: d,
        order: c = 0
      } = e.value, f = r.value.join("|");
      if (Vs(f)) {
        const [m, $] = Ks(f);
        if (m)
          return [m, o.value, $, {}, d, c];
      }
      const g = t(), {
        hashPriority: h,
        container: b,
        transformers: S,
        linters: y,
        cache: x
      } = n.value, [O, E] = co(g, {
        hashId: l,
        hashPriority: h,
        layer: u,
        path: i.join("-"),
        transformers: S,
        linters: y
      }), P = Ar(O), T = qs(r.value, P);
      if (a) {
        const m = {
          mark: Ve,
          prepend: "queue",
          attachTo: b,
          priority: c
        }, $ = typeof s == "function" ? s() : s;
        $ && (m.csp = {
          nonce: $
        });
        const I = Rt(P, T, m);
        I[ct] = x.instanceId, I.setAttribute(li, o.value), process.env.NODE_ENV !== "production" && I.setAttribute(qc, r.value.join("|")), Object.keys(E).forEach((M) => {
          lo.has(M) || (lo.add(M), Rt(Ar(E[M]), `_effect-${M}`, {
            mark: Ve,
            prepend: "queue",
            attachTo: b
          }));
        });
      }
      return [P, o.value, T, E, d, c];
    },
    // Remove cache if no need
    (i, l) => {
      let [, , u] = i;
      (l || n.value.autoClear) && Ir && yn(u, {
        mark: Ve
      });
    }
  ), (i) => i;
}
class V {
  constructor(t, n) {
    this._keyframe = !0, this.name = t, this.style = n;
  }
  getName() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return t ? `${t}-${this.name}` : this.name;
  }
}
const Qs = "4.1.2";
function J(e, t) {
  Zs(e) && (e = "100%");
  var n = Js(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Jt(e) {
  return Math.min(1, Math.max(0, e));
}
function Zs(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Js(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ai(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function en(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Ue(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function eu(e, t, n) {
  return {
    r: J(e, 255) * 255,
    g: J(t, 255) * 255,
    b: J(n, 255) * 255
  };
}
function _r(e, t, n) {
  e = J(e, 255), t = J(t, 255), n = J(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), a = 0, i = 0, l = (o + r) / 2;
  if (o === r)
    i = 0, a = 0;
  else {
    var u = o - r;
    switch (i = l > 0.5 ? u / (2 - o - r) : u / (o + r), o) {
      case e:
        a = (t - n) / u + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / u + 2;
        break;
      case n:
        a = (e - t) / u + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: i, l };
}
function Ln(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function tu(e, t, n) {
  var o, r, a;
  if (e = J(e, 360), t = J(t, 100), n = J(n, 100), t === 0)
    r = n, a = n, o = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - i;
    o = Ln(l, i, e + 1 / 3), r = Ln(l, i, e), a = Ln(l, i, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: a * 255 };
}
function uo(e, t, n) {
  e = J(e, 255), t = J(t, 255), n = J(n, 255);
  var o = Math.max(e, t, n), r = Math.min(e, t, n), a = 0, i = o, l = o - r, u = o === 0 ? 0 : l / o;
  if (o === r)
    a = 0;
  else {
    switch (o) {
      case e:
        a = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / l + 2;
        break;
      case n:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: u, v: i };
}
function nu(e, t, n) {
  e = J(e, 360) * 6, t = J(t, 100), n = J(n, 100);
  var o = Math.floor(e), r = e - o, a = n * (1 - t), i = n * (1 - r * t), l = n * (1 - (1 - r) * t), u = o % 6, s = [n, i, a, a, l, n][u], d = [l, n, n, i, a, a][u], c = [a, a, l, n, n, i][u];
  return { r: s * 255, g: d * 255, b: c * 255 };
}
function fo(e, t, n, o) {
  var r = [
    Ue(Math.round(e).toString(16)),
    Ue(Math.round(t).toString(16)),
    Ue(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function ou(e, t, n, o, r) {
  var a = [
    Ue(Math.round(e).toString(16)),
    Ue(Math.round(t).toString(16)),
    Ue(Math.round(n).toString(16)),
    Ue(ru(o))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function ru(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Mr(e) {
  return ce(e) / 255;
}
function ce(e) {
  return parseInt(e, 16);
}
function au(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var po = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function it(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, a = null, i = !1, l = !1;
  return typeof e == "string" && (e = cu(e)), typeof e == "object" && ($e(e.r) && $e(e.g) && $e(e.b) ? (t = eu(e.r, e.g, e.b), i = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : $e(e.h) && $e(e.s) && $e(e.v) ? (o = en(e.s), r = en(e.v), t = nu(e.h, o, r), i = !0, l = "hsv") : $e(e.h) && $e(e.s) && $e(e.l) && (o = en(e.s), a = en(e.l), t = tu(e.h, o, a), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Ai(n), {
    ok: i,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var iu = "[-\\+]?\\d+%?", lu = "[-\\+]?\\d*\\.\\d+%?", Ne = "(?:".concat(lu, ")|(?:").concat(iu, ")"), zn = "[\\s|\\(]+(".concat(Ne, ")[,|\\s]+(").concat(Ne, ")[,|\\s]+(").concat(Ne, ")\\s*\\)?"), kn = "[\\s|\\(]+(".concat(Ne, ")[,|\\s]+(").concat(Ne, ")[,|\\s]+(").concat(Ne, ")[,|\\s]+(").concat(Ne, ")\\s*\\)?"), ge = {
  CSS_UNIT: new RegExp(Ne),
  rgb: new RegExp("rgb" + zn),
  rgba: new RegExp("rgba" + kn),
  hsl: new RegExp("hsl" + zn),
  hsla: new RegExp("hsla" + kn),
  hsv: new RegExp("hsv" + zn),
  hsva: new RegExp("hsva" + kn),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function cu(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (po[e])
    e = po[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = ge.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = ge.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = ge.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = ge.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = ge.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = ge.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = ge.hex8.exec(e), n ? {
    r: ce(n[1]),
    g: ce(n[2]),
    b: ce(n[3]),
    a: Mr(n[4]),
    format: t ? "name" : "hex8"
  } : (n = ge.hex6.exec(e), n ? {
    r: ce(n[1]),
    g: ce(n[2]),
    b: ce(n[3]),
    format: t ? "name" : "hex"
  } : (n = ge.hex4.exec(e), n ? {
    r: ce(n[1] + n[1]),
    g: ce(n[2] + n[2]),
    b: ce(n[3] + n[3]),
    a: Mr(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = ge.hex3.exec(e), n ? {
    r: ce(n[1] + n[1]),
    g: ce(n[2] + n[2]),
    b: ce(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function $e(e) {
  return !!ge.CSS_UNIT.exec(String(e));
}
var Z = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = au(t)), this.originalInput = t;
      var r = it(t);
      this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (o = n.format) !== null && o !== void 0 ? o : r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, o, r, a = t.r / 255, i = t.g / 255, l = t.b / 255;
      return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? o = i / 12.92 : o = Math.pow((i + 0.055) / 1.055, 2.4), l <= 0.03928 ? r = l / 12.92 : r = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Ai(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = uo(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = uo(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = _r(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = _r(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), fo(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), ou(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), o = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(o, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(o, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(J(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(J(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + fo(this.r, this.g, this.b, !1), n = 0, o = Object.entries(po); n < o.length; n++) {
        var r = o[n], a = r[0], i = r[1];
        if (t === i)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var o = !1, r = this.a < 1 && this.a >= 0, a = !n && r && (t.startsWith("hex") || t === "name");
      return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = Jt(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Jt(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Jt(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Jt(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), o = (n.h + t) % 360;
      return n.h = o < 0 ? 360 + o : o, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var o = this.toRgb(), r = new e(t).toRgb(), a = n / 100, i = {
        r: (r.r - o.r) * a + o.r,
        g: (r.g - o.g) * a + o.g,
        b: (r.b - o.b) * a + o.b,
        a: (r.a - o.a) * a + o.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var o = this.toHsl(), r = 360 / n, a = [this];
      for (o.h = (o.h - (r * t >> 1) + 720) % 360; --t; )
        o.h = (o.h + r) % 360, a.push(new e(o));
      return a;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), o = n.h, r = n.s, a = n.v, i = [], l = 1 / t; t--; )
        i.push(new e({ h: o, s: r, v: a })), a = (a + l) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), o = new e(t).toRgb(), r = n.a + o.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + o.r * o.a * (1 - n.a)) / r,
        g: (n.g * n.a + o.g * o.a * (1 - n.a)) / r,
        b: (n.b * n.a + o.b * o.a * (1 - n.a)) / r,
        a: r
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), o = n.h, r = [this], a = 360 / t, i = 1; i < t; i++)
        r.push(new e({ h: (o + i * a) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), tn = 2, Nr = 0.16, su = 0.05, uu = 0.05, du = 0.15, _i = 5, Mi = 4, fu = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function jr(e) {
  var t = e.r, n = e.g, o = e.b, r = uo(t, n, o);
  return {
    h: r.h * 360,
    s: r.s,
    v: r.v
  };
}
function nn(e) {
  var t = e.r, n = e.g, o = e.b;
  return "#".concat(fo(t, n, o, !1));
}
function pu(e, t, n) {
  var o = n / 100, r = {
    r: (t.r - e.r) * o + e.r,
    g: (t.g - e.g) * o + e.g,
    b: (t.b - e.b) * o + e.b
  };
  return r;
}
function Rr(e, t, n) {
  var o;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? o = n ? Math.round(e.h) - tn * t : Math.round(e.h) + tn * t : o = n ? Math.round(e.h) + tn * t : Math.round(e.h) - tn * t, o < 0 ? o += 360 : o >= 360 && (o -= 360), o;
}
function Br(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var o;
  return n ? o = e.s - Nr * t : t === Mi ? o = e.s + Nr : o = e.s + su * t, o > 1 && (o = 1), n && t === _i && o > 0.1 && (o = 0.1), o < 0.06 && (o = 0.06), Number(o.toFixed(2));
}
function Hr(e, t, n) {
  var o;
  return n ? o = e.v + uu * t : o = e.v - du * t, o > 1 && (o = 1), Number(o.toFixed(2));
}
function Ze(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], o = it(e), r = _i; r > 0; r -= 1) {
    var a = jr(o), i = nn(it({
      h: Rr(a, r, !0),
      s: Br(a, r, !0),
      v: Hr(a, r, !0)
    }));
    n.push(i);
  }
  n.push(nn(o));
  for (var l = 1; l <= Mi; l += 1) {
    var u = jr(o), s = nn(it({
      h: Rr(u, l),
      s: Br(u, l),
      v: Hr(u, l)
    }));
    n.push(s);
  }
  return t.theme === "dark" ? fu.map(function(d) {
    var c = d.index, f = d.opacity, g = nn(pu(it(t.backgroundColor || "#141414"), it(n[c]), f * 100));
    return g;
  }) : n;
}
var Wn = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, sn = {}, Un = {};
Object.keys(Wn).forEach(function(e) {
  sn[e] = Ze(Wn[e]), sn[e].primary = sn[e][5], Un[e] = Ze(Wn[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Un[e].primary = Un[e][5];
});
var gu = sn.blue;
const mu = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function vu(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3)
    // 4
  };
}
const Ni = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, hu = p(p({}, Ni), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1
}), _n = hu;
function yu(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: o
  } = t;
  const {
    colorSuccess: r,
    colorWarning: a,
    colorError: i,
    colorInfo: l,
    colorPrimary: u,
    colorBgBase: s,
    colorTextBase: d
  } = e, c = n(u), f = n(r), g = n(a), h = n(i), b = n(l), S = o(s, d);
  return p(p({}, S), {
    colorPrimaryBg: c[1],
    colorPrimaryBgHover: c[2],
    colorPrimaryBorder: c[3],
    colorPrimaryBorderHover: c[4],
    colorPrimaryHover: c[5],
    colorPrimary: c[6],
    colorPrimaryActive: c[7],
    colorPrimaryTextHover: c[8],
    colorPrimaryText: c[9],
    colorPrimaryTextActive: c[10],
    colorSuccessBg: f[1],
    colorSuccessBgHover: f[2],
    colorSuccessBorder: f[3],
    colorSuccessBorderHover: f[4],
    colorSuccessHover: f[4],
    colorSuccess: f[6],
    colorSuccessActive: f[7],
    colorSuccessTextHover: f[8],
    colorSuccessText: f[9],
    colorSuccessTextActive: f[10],
    colorErrorBg: h[1],
    colorErrorBgHover: h[2],
    colorErrorBorder: h[3],
    colorErrorBorderHover: h[4],
    colorErrorHover: h[5],
    colorError: h[6],
    colorErrorActive: h[7],
    colorErrorTextHover: h[8],
    colorErrorText: h[9],
    colorErrorTextActive: h[10],
    colorWarningBg: g[1],
    colorWarningBgHover: g[2],
    colorWarningBorder: g[3],
    colorWarningBorderHover: g[4],
    colorWarningHover: g[4],
    colorWarning: g[6],
    colorWarningActive: g[7],
    colorWarningTextHover: g[8],
    colorWarningText: g[9],
    colorWarningTextActive: g[10],
    colorInfoBg: b[1],
    colorInfoBgHover: b[2],
    colorInfoBorder: b[3],
    colorInfoBorderHover: b[4],
    colorInfoHover: b[4],
    colorInfo: b[6],
    colorInfoActive: b[7],
    colorInfoTextHover: b[8],
    colorInfoText: b[9],
    colorInfoTextActive: b[10],
    colorBgMask: new Z("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const bu = (e) => {
  let t = e, n = e, o = e, r = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? o = 1 : e >= 6 && (o = 2), e > 4 && e < 8 ? r = 4 : e >= 8 && (r = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: o,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: r
  };
};
function Cu(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: o,
    lineWidth: r
  } = e;
  return p({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: r + 1
  }, bu(o));
}
const we = (e, t) => new Z(e).setAlpha(t).toRgbString(), $t = (e, t) => new Z(e).darken(t).toHexString(), Su = (e) => {
  const t = Ze(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, xu = (e, t) => {
  const n = e || "#fff", o = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: o,
    colorText: we(o, 0.88),
    colorTextSecondary: we(o, 0.65),
    colorTextTertiary: we(o, 0.45),
    colorTextQuaternary: we(o, 0.25),
    colorFill: we(o, 0.15),
    colorFillSecondary: we(o, 0.06),
    colorFillTertiary: we(o, 0.04),
    colorFillQuaternary: we(o, 0.02),
    colorBgLayout: $t(n, 4),
    colorBgContainer: $t(n, 0),
    colorBgElevated: $t(n, 0),
    colorBgSpotlight: we(o, 0.85),
    colorBorder: $t(n, 15),
    colorBorderSecondary: $t(n, 6)
  };
};
function $u(e) {
  const t = new Array(10).fill(null).map((n, o) => {
    const r = o - 1, a = e * Math.pow(2.71828, r / 5), i = o > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => {
    const o = n + 8;
    return {
      size: n,
      lineHeight: o / n
    };
  });
}
const wu = (e) => {
  const t = $u(e), n = t.map((r) => r.size), o = t.map((r) => r.lineHeight);
  return {
    fontSizeSM: n[0],
    fontSize: n[1],
    fontSizeLG: n[2],
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: o[1],
    lineHeightLG: o[2],
    lineHeightSM: o[0],
    lineHeightHeading1: o[6],
    lineHeightHeading2: o[5],
    lineHeightHeading3: o[4],
    lineHeightHeading4: o[3],
    lineHeightHeading5: o[2]
  };
};
function Ou(e) {
  const t = Object.keys(Ni).map((n) => {
    const o = Ze(e[n]);
    return new Array(10).fill(1).reduce((r, a, i) => (r[`${n}-${i + 1}`] = o[i], r), {});
  }).reduce((n, o) => (n = p(p({}, n), o), n), {});
  return p(p(p(p(p(p(p({}, e), t), yu(e, {
    generateColorPalettes: Su,
    generateNeutralColorPalettes: xu
  })), wu(e.fontSize)), vu(e)), mu(e)), Cu(e));
}
function Gn(e) {
  return e >= 0 && e <= 255;
}
function on(e, t) {
  const {
    r: n,
    g: o,
    b: r,
    a
  } = new Z(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: l,
    b: u
  } = new Z(t).toRgb();
  for (let s = 0.01; s <= 1; s += 0.01) {
    const d = Math.round((n - i * (1 - s)) / s), c = Math.round((o - l * (1 - s)) / s), f = Math.round((r - u * (1 - s)) / s);
    if (Gn(d) && Gn(c) && Gn(f))
      return new Z({
        r: d,
        g: c,
        b: f,
        a: Math.round(s * 100) / 100
      }).toRgbString();
  }
  return new Z({
    r: n,
    g: o,
    b: r,
    a: 1
  }).toRgbString();
}
var Tu = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
function Pu(e) {
  const {
    override: t
  } = e, n = Tu(e, ["override"]), o = p({}, t);
  Object.keys(_n).forEach((g) => {
    delete o[g];
  });
  const r = p(p({}, n), o), a = 480, i = 576, l = 768, u = 992, s = 1200, d = 1600, c = 2e3;
  return p(p(p({}, r), {
    colorLink: r.colorInfoText,
    colorLinkHover: r.colorInfoHover,
    colorLinkActive: r.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: r.colorFillSecondary,
    colorFillContentHover: r.colorFill,
    colorFillAlter: r.colorFillQuaternary,
    colorBgContainerDisabled: r.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: r.colorBgContainer,
    colorSplit: on(r.colorBorderSecondary, r.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: r.colorTextQuaternary,
    colorTextDisabled: r.colorTextQuaternary,
    colorTextHeading: r.colorText,
    colorTextLabel: r.colorTextSecondary,
    colorTextDescription: r.colorTextTertiary,
    colorTextLightSolid: r.colorWhite,
    colorHighlight: r.colorError,
    colorBgTextHover: r.colorFillSecondary,
    colorBgTextActive: r.colorFill,
    colorIcon: r.colorTextTertiary,
    colorIconHover: r.colorText,
    colorErrorOutline: on(r.colorErrorBg, r.colorBgContainer),
    colorWarningOutline: on(r.colorWarningBg, r.colorBgContainer),
    // Font
    fontSizeIcon: r.fontSizeSM,
    // Control
    lineWidth: r.lineWidth,
    controlOutlineWidth: r.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: r.controlHeight / 2,
    controlItemBgHover: r.colorFillTertiary,
    controlItemBgActive: r.colorPrimaryBg,
    controlItemBgActiveHover: r.colorPrimaryBgHover,
    controlItemBgActiveDisabled: r.colorFill,
    controlTmpOutline: r.colorFillQuaternary,
    controlOutline: on(r.colorPrimaryBg, r.colorBgContainer),
    lineType: r.lineType,
    borderRadius: r.borderRadius,
    borderRadiusXS: r.borderRadiusXS,
    borderRadiusSM: r.borderRadiusSM,
    borderRadiusLG: r.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: r.sizeXXS,
    paddingXS: r.sizeXS,
    paddingSM: r.sizeSM,
    padding: r.size,
    paddingMD: r.sizeMD,
    paddingLG: r.sizeLG,
    paddingXL: r.sizeXL,
    paddingContentHorizontalLG: r.sizeLG,
    paddingContentVerticalLG: r.sizeMS,
    paddingContentHorizontal: r.sizeMS,
    paddingContentVertical: r.sizeSM,
    paddingContentHorizontalSM: r.size,
    paddingContentVerticalSM: r.sizeXS,
    marginXXS: r.sizeXXS,
    marginXS: r.sizeXS,
    marginSM: r.sizeSM,
    margin: r.size,
    marginMD: r.sizeMD,
    marginLG: r.sizeLG,
    marginXL: r.sizeXL,
    marginXXL: r.sizeXXL,
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: a,
    screenXSMin: a,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: u - 1,
    screenLG: u,
    screenLGMin: u,
    screenLGMax: s - 1,
    screenXL: s,
    screenXLMin: s,
    screenXLMax: d - 1,
    screenXXL: d,
    screenXXLMin: d,
    screenXXLMax: c - 1,
    screenXXXL: c,
    screenXXXLMin: c,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new Z("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Z("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Z("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), o);
}
const ko = (e) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: e.fontFamily
}), Eu = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), Iu = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), Au = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), _u = (e, t) => {
  const {
    fontFamily: n,
    fontSize: o
  } = e, r = `[class^="${t}"], [class*=" ${t}"]`;
  return {
    [r]: {
      fontFamily: n,
      fontSize: o,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [r]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
}, Mu = (e) => ({
  outline: `${e.lineWidthBold}px solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), ji = (e) => ({
  "&:focus-visible": p({}, Mu(e))
});
function et(e, t, n) {
  return (o) => {
    const r = w(() => o == null ? void 0 : o.value), [a, i, l] = Wt(), {
      getPrefixCls: u,
      iconPrefixCls: s
    } = Tn(), d = w(() => u()), c = w(() => ({
      theme: a.value,
      token: i.value,
      hashId: l.value,
      path: ["Shared", d.value]
    }));
    so(c, () => [{
      // Link
      "&": Au(i.value)
    }]);
    const f = w(() => ({
      theme: a.value,
      token: i.value,
      hashId: l.value,
      path: [e, r.value, s.value]
    }));
    return [so(f, () => {
      const {
        token: g,
        flush: h
      } = ju(i.value), b = typeof n == "function" ? n(g) : n, S = p(p({}, b), i.value[e]), y = `.${r.value}`, x = He(g, {
        componentCls: y,
        prefixCls: r.value,
        iconCls: `.${s.value}`,
        antCls: `.${d.value}`
      }, S), O = t(x, {
        hashId: l.value,
        prefixCls: r.value,
        rootPrefixCls: d.value,
        iconPrefixCls: s.value,
        overrideComponentToken: i.value[e]
      });
      return h(e, S), [_u(i.value, r.value), O];
    }), l];
  };
}
const Ri = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let go = !0;
function He() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Ri)
    return p({}, ...t);
  go = !1;
  const o = {};
  return t.forEach((r) => {
    Object.keys(r).forEach((i) => {
      Object.defineProperty(o, i, {
        configurable: !0,
        enumerable: !0,
        get: () => r[i]
      });
    });
  }), go = !0, o;
}
function Nu() {
}
function ju(e) {
  let t, n = e, o = Nu;
  return Ri && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(r, a) {
      return go && t.add(a), r[a];
    }
  }), o = (r, a) => {
    Array.from(t);
  }), {
    token: n,
    keys: t,
    flush: o
  };
}
const Ru = yi(Ou), Bi = {
  token: _n,
  hashed: !0
}, Hi = Symbol("DesignTokenContext"), mo = D(), Bu = (e) => {
  Ee(Hi, e), Y(e, () => {
    mo.value = Te(e), pc(mo);
  }, {
    immediate: !0,
    deep: !0
  });
}, Hu = F({
  props: {
    value: K()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Bu(w(() => e.value)), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
function Wt() {
  const e = he(Hi, w(() => mo.value || Bi)), t = w(() => `${Qs}-${e.value.hashed || ""}`), n = w(() => e.value.theme || Ru), o = xs(n, w(() => [_n, e.value.token]), w(() => ({
    salt: t.value,
    override: p({
      override: e.value.token
    }, e.value.components),
    formatToken: Pu
  })));
  return [n, w(() => o.value[0]), w(() => e.value.hashed ? o.value[1] : "")];
}
const Fi = F({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = Wt(), t = w(() => new Z(e.value.colorBgBase).toHsl().l < 0.5 ? {
      opacity: 0.65
    } : {});
    return () => v("svg", {
      style: t.value,
      width: "184",
      height: "152",
      viewBox: "0 0 184 152",
      xmlns: "http://www.w3.org/2000/svg"
    }, [v("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, [v("g", {
      transform: "translate(24 31.67)"
    }, [v("ellipse", {
      "fill-opacity": ".8",
      fill: "#F5F5F7",
      cx: "67.797",
      cy: "106.89",
      rx: "67.797",
      ry: "12.668"
    }, null), v("path", {
      d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      fill: "#AEB8C2"
    }, null), v("path", {
      d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      fill: "url(#linearGradient-1)",
      transform: "translate(13.56)"
    }, null), v("path", {
      d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      fill: "#F5F5F7"
    }, null), v("path", {
      d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      fill: "#DCE0E6"
    }, null)]), v("path", {
      d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      fill: "#DCE0E6"
    }, null), v("g", {
      transform: "translate(149.65 15.383)",
      fill: "#FFF"
    }, [v("ellipse", {
      cx: "20.654",
      cy: "3.167",
      rx: "2.849",
      ry: "2.815"
    }, null), v("path", {
      d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Fi.PRESENTED_IMAGE_DEFAULT = !0;
const Fu = Fi, Di = F({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = Wt(), t = w(() => {
      const {
        colorFill: n,
        colorFillTertiary: o,
        colorFillQuaternary: r,
        colorBgContainer: a
      } = e.value;
      return {
        borderColor: new Z(n).onBackground(a).toHexString(),
        shadowColor: new Z(o).onBackground(a).toHexString(),
        contentColor: new Z(r).onBackground(a).toHexString()
      };
    });
    return () => v("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, [v("g", {
      transform: "translate(0 1)",
      fill: "none",
      "fill-rule": "evenodd"
    }, [v("ellipse", {
      fill: t.value.shadowColor,
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }, null), v("g", {
      "fill-rule": "nonzero",
      stroke: t.value.borderColor
    }, [v("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), v("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: t.value.contentColor
    }, null)])])]);
  }
});
Di.PRESENTED_IMAGE_SIMPLE = !0;
const Du = Di, Lu = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: o,
    marginXL: r,
    fontSize: a,
    lineHeight: i
  } = e;
  return {
    [t]: {
      marginInline: o,
      fontSize: a,
      lineHeight: i,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: o,
        opacity: e.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          height: "100%",
          margin: "auto"
        }
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-footer`]: {
        marginTop: n
      },
      "&-normal": {
        marginBlock: r,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: o,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, zu = et("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, o = He(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [Lu(o)];
});
var ku = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Li = v(Fu, null, null), zi = v(Du, null, null), Wu = () => ({
  prefixCls: String,
  imageStyle: K(),
  image: eo(),
  description: eo()
}), Wo = F({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: Wu(),
  setup(e, t) {
    let {
      slots: n = {},
      attrs: o
    } = t;
    const {
      direction: r,
      prefixCls: a
    } = Ce("empty", e), [i, l] = zu(a);
    return () => {
      var u, s;
      const d = a.value, c = p(p({}, e), o), {
        image: f = ((u = n.image) === null || u === void 0 ? void 0 : u.call(n)) || Li,
        description: g = ((s = n.description) === null || s === void 0 ? void 0 : s.call(n)) || void 0,
        imageStyle: h,
        class: b = ""
      } = c, S = ku(c, ["image", "description", "imageStyle", "class"]);
      return i(v(ii, {
        componentName: "Empty",
        children: (y) => {
          const x = typeof g < "u" ? g : y.description, O = typeof x == "string" ? x : "empty";
          let E = null;
          return typeof f == "string" ? E = v("img", {
            alt: O,
            src: f
          }, null) : E = f, v("div", N({
            class: G(d, b, l.value, {
              [`${d}-normal`]: f === zi,
              [`${d}-rtl`]: r.value === "rtl"
            })
          }, S), [v("div", {
            class: `${d}-image`,
            style: h
          }, [E]), x && v("p", {
            class: `${d}-description`
          }, [x]), n.default && v("div", {
            class: `${d}-footer`
          }, [Za(n.default())])]);
        }
      }, null));
    };
  }
});
Wo.PRESENTED_IMAGE_DEFAULT = Li;
Wo.PRESENTED_IMAGE_SIMPLE = zi;
const wt = No(Wo), ki = (e) => {
  const {
    prefixCls: t
  } = Ce("empty", e);
  return ((o) => {
    switch (o) {
      case "Table":
      case "List":
        return v(wt, {
          image: wt.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return v(wt, {
          image: wt.PRESENTED_IMAGE_SIMPLE,
          class: `${t.value}-small`
        }, null);
      default:
        return v(wt, null, null);
    }
  })(e.componentName);
};
function Uu(e) {
  return v(ki, {
    componentName: e
  }, null);
}
const Wi = Symbol("SizeContextKey"), Ui = () => he(Wi, k(void 0)), Gu = (e) => {
  const t = Ui();
  return Ee(Wi, w(() => e.value || t.value)), e;
}, Ce = (e, t) => {
  const n = Ui(), o = Bo(), r = he(Ro, p(p({}, oi), {
    renderEmpty: (m) => mn(ki, {
      componentName: m
    })
  })), a = w(() => r.getPrefixCls(e, t.prefixCls)), i = w(() => {
    var m, $;
    return (m = t.direction) !== null && m !== void 0 ? m : ($ = r.direction) === null || $ === void 0 ? void 0 : $.value;
  }), l = w(() => {
    var m;
    return (m = t.iconPrefixCls) !== null && m !== void 0 ? m : r.iconPrefixCls.value;
  }), u = w(() => r.getPrefixCls()), s = w(() => {
    var m;
    return (m = r.autoInsertSpaceInButton) === null || m === void 0 ? void 0 : m.value;
  }), d = r.renderEmpty, c = r.space, f = r.pageHeader, g = r.form, h = w(() => {
    var m, $;
    return (m = t.getTargetContainer) !== null && m !== void 0 ? m : ($ = r.getTargetContainer) === null || $ === void 0 ? void 0 : $.value;
  }), b = w(() => {
    var m, $, I;
    return ($ = (m = t.getContainer) !== null && m !== void 0 ? m : t.getPopupContainer) !== null && $ !== void 0 ? $ : (I = r.getPopupContainer) === null || I === void 0 ? void 0 : I.value;
  }), S = w(() => {
    var m, $;
    return (m = t.dropdownMatchSelectWidth) !== null && m !== void 0 ? m : ($ = r.dropdownMatchSelectWidth) === null || $ === void 0 ? void 0 : $.value;
  }), y = w(() => {
    var m;
    return (t.virtual === void 0 ? ((m = r.virtual) === null || m === void 0 ? void 0 : m.value) !== !1 : t.virtual !== !1) && S.value !== !1;
  }), x = w(() => t.size || n.value), O = w(() => {
    var m, $, I;
    return (m = t.autocomplete) !== null && m !== void 0 ? m : (I = ($ = r.input) === null || $ === void 0 ? void 0 : $.value) === null || I === void 0 ? void 0 : I.autocomplete;
  }), E = w(() => {
    var m;
    return (m = t.disabled) !== null && m !== void 0 ? m : o.value;
  }), P = w(() => {
    var m;
    return (m = t.csp) !== null && m !== void 0 ? m : r.csp;
  }), T = w(() => {
    var m, $;
    return (m = t.wave) !== null && m !== void 0 ? m : ($ = r.wave) === null || $ === void 0 ? void 0 : $.value;
  });
  return {
    configProvider: r,
    prefixCls: a,
    direction: i,
    size: x,
    getTargetContainer: h,
    getPopupContainer: b,
    space: c,
    pageHeader: f,
    form: g,
    autoInsertSpaceInButton: s,
    renderEmpty: d,
    virtual: y,
    dropdownMatchSelectWidth: S,
    rootPrefixCls: u,
    getPrefixCls: r.getPrefixCls,
    autocomplete: O,
    csp: P,
    iconPrefixCls: l,
    disabled: E,
    select: r.select,
    wave: T
  };
};
function Gi(e, t) {
  const n = p({}, e);
  for (let o = 0; o < t.length; o += 1) {
    const r = t[o];
    delete n[r];
  }
  return n;
}
function Fr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
  }
}
function Vi(e, t, n) {
  return t && Fr(e.prototype, t), n && Fr(e, n), e;
}
function un() {
  return (un = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }).apply(this, arguments);
}
function Ki(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Xi(e, t) {
  if (e == null)
    return {};
  var n, o, r = {}, a = Object.keys(e);
  for (o = 0; o < a.length; o++)
    t.indexOf(n = a[o]) >= 0 || (r[n] = e[n]);
  return r;
}
function Dr(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var Yi = Object.prototype, qi = Yi.toString, Vu = Yi.hasOwnProperty, Qi = /^\s*function (\w+)/;
function Lr(e) {
  var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var o = n.toString().match(Qi);
    return o ? o[1] : "";
  }
  return "";
}
var Je = function(e) {
  var t, n;
  return Dr(e) !== !1 && typeof (t = e.constructor) == "function" && Dr(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, Zi = function(e) {
  return e;
}, ee = Zi;
if (process.env.NODE_ENV !== "production") {
  var Ku = typeof console < "u";
  ee = Ku ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : Zi;
}
var Ft = function(e, t) {
  return Vu.call(e, t);
}, Xu = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, gt = Array.isArray || function(e) {
  return qi.call(e) === "[object Array]";
}, mt = function(e) {
  return qi.call(e) === "[object Function]";
}, Cn = function(e) {
  return Je(e) && Ft(e, "_vueTypes_name");
}, Ji = function(e) {
  return Je(e) && (Ft(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return Ft(e, t);
  }));
};
function Uo(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function tt(e, t, n) {
  var o;
  n === void 0 && (n = !1);
  var r = !0, a = "";
  o = Je(e) ? e : { type: e };
  var i = Cn(o) ? o._vueTypes_name + " - " : "";
  if (Ji(o) && o.type !== null) {
    if (o.type === void 0 || o.type === !0 || !o.required && t === void 0)
      return r;
    gt(o.type) ? (r = o.type.some(function(c) {
      return tt(c, t, !0) === !0;
    }), a = o.type.map(function(c) {
      return Lr(c);
    }).join(" or ")) : r = (a = Lr(o)) === "Array" ? gt(t) : a === "Object" ? Je(t) : a === "String" || a === "Number" || a === "Boolean" || a === "Function" ? function(c) {
      if (c == null)
        return "";
      var f = c.constructor.toString().match(Qi);
      return f ? f[1] : "";
    }(t) === a : t instanceof o.type;
  }
  if (!r) {
    var l = i + 'value "' + t + '" should be of type "' + a + '"';
    return n === !1 ? (ee(l), !1) : l;
  }
  if (Ft(o, "validator") && mt(o.validator)) {
    var u = ee, s = [];
    if (ee = function(c) {
      s.push(c);
    }, r = o.validator(t), ee = u, !r) {
      var d = (s.length > 1 ? "* " : "") + s.join(`
* `);
      return s.length = 0, n === !1 ? (ee(d), r) : d;
    }
  }
  return r;
}
function ue(e, t) {
  var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(r) {
    return r !== void 0 || this.default ? mt(r) || tt(this, r, !0) === !0 ? (this.default = gt(r) ? function() {
      return [].concat(r);
    } : Je(r) ? function() {
      return Object.assign({}, r);
    } : r, this) : (ee(this._vueTypes_name + ' - invalid default value: "' + r + '"'), this) : this;
  } } }), o = n.validator;
  return mt(o) && (n.validator = Uo(o, n)), n;
}
function be(e, t) {
  var n = ue(e, t);
  return Object.defineProperty(n, "validate", { value: function(o) {
    return mt(this.validator) && ee(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = Uo(o, this), this;
  } });
}
function zr(e, t, n) {
  var o, r, a = (o = t, r = {}, Object.getOwnPropertyNames(o).forEach(function(c) {
    r[c] = Object.getOwnPropertyDescriptor(o, c);
  }), Object.defineProperties({}, r));
  if (a._vueTypes_name = e, !Je(n))
    return a;
  var i, l, u = n.validator, s = Xi(n, ["validator"]);
  if (mt(u)) {
    var d = a.validator;
    d && (d = (l = (i = d).__original) !== null && l !== void 0 ? l : i), a.validator = Uo(d ? function(c) {
      return d.call(this, c) && u.call(this, c);
    } : u, a);
  }
  return Object.assign(a, s);
}
function Mn(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var Yu = function() {
  return be("any", {});
}, qu = function() {
  return be("function", { type: Function });
}, Qu = function() {
  return be("boolean", { type: Boolean });
}, Zu = function() {
  return be("string", { type: String });
}, Ju = function() {
  return be("number", { type: Number });
}, ed = function() {
  return be("array", { type: Array });
}, td = function() {
  return be("object", { type: Object });
}, nd = function() {
  return ue("integer", { type: Number, validator: function(e) {
    return Xu(e);
  } });
}, od = function() {
  return ue("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function rd(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return ue(e.name || "<<anonymous function>>", { validator: function(n) {
    var o = e(n);
    return o || ee(this._vueTypes_name + " - " + t), o;
  } });
}
function ad(e) {
  if (!gt(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(o, r) {
    if (r != null) {
      var a = r.constructor;
      o.indexOf(a) === -1 && o.push(a);
    }
    return o;
  }, []);
  return ue("oneOf", { type: n.length > 0 ? n : void 0, validator: function(o) {
    var r = e.indexOf(o) !== -1;
    return r || ee(t), r;
  } });
}
function id(e) {
  if (!gt(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], o = 0; o < e.length; o += 1) {
    var r = e[o];
    if (Ji(r)) {
      if (Cn(r) && r._vueTypes_name === "oneOf") {
        n = n.concat(r.type);
        continue;
      }
      if (mt(r.validator) && (t = !0), r.type !== !0 && r.type) {
        n = n.concat(r.type);
        continue;
      }
    }
    n.push(r);
  }
  return n = n.filter(function(a, i) {
    return n.indexOf(a) === i;
  }), ue("oneOfType", t ? { type: n, validator: function(a) {
    var i = [], l = e.some(function(u) {
      var s = tt(Cn(u) && u._vueTypes_name === "oneOf" ? u.type || null : u, a, !0);
      return typeof s == "string" && i.push(s), s === !0;
    });
    return l || ee("oneOfType - provided value does not match any of the " + i.length + ` passed-in validators:
` + Mn(i.join(`
`))), l;
  } } : { type: n });
}
function ld(e) {
  return ue("arrayOf", { type: Array, validator: function(t) {
    var n, o = t.every(function(r) {
      return (n = tt(e, r, !0)) === !0;
    });
    return o || ee(`arrayOf - value validation error:
` + Mn(n)), o;
  } });
}
function cd(e) {
  return ue("instanceOf", { type: e });
}
function sd(e) {
  return ue("objectOf", { type: Object, validator: function(t) {
    var n, o = Object.keys(t).every(function(r) {
      return (n = tt(e, t[r], !0)) === !0;
    });
    return o || ee(`objectOf - value validation error:
` + Mn(n)), o;
  } });
}
function ud(e) {
  var t = Object.keys(e), n = t.filter(function(r) {
    var a;
    return !!(!((a = e[r]) === null || a === void 0) && a.required);
  }), o = ue("shape", { type: Object, validator: function(r) {
    var a = this;
    if (!Je(r))
      return !1;
    var i = Object.keys(r);
    if (n.length > 0 && n.some(function(u) {
      return i.indexOf(u) === -1;
    })) {
      var l = n.filter(function(u) {
        return i.indexOf(u) === -1;
      });
      return ee(l.length === 1 ? 'shape - required property "' + l[0] + '" is not defined.' : 'shape - required properties "' + l.join('", "') + '" are not defined.'), !1;
    }
    return i.every(function(u) {
      if (t.indexOf(u) === -1)
        return a._vueTypes_isLoose === !0 || (ee('shape - shape definition does not include a "' + u + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var s = tt(e[u], r[u], !0);
      return typeof s == "string" && ee('shape - "' + u + `" property validation error:
 ` + Mn(s)), s === !0;
    });
  } });
  return Object.defineProperty(o, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(o, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), o;
}
var ye = function() {
  function e() {
  }
  return e.extend = function(t) {
    var n = this;
    if (gt(t))
      return t.forEach(function(c) {
        return n.extend(c);
      }), this;
    var o = t.name, r = t.validate, a = r !== void 0 && r, i = t.getter, l = i !== void 0 && i, u = Xi(t, ["name", "validate", "getter"]);
    if (Ft(this, o))
      throw new TypeError('[VueTypes error]: Type "' + o + '" already defined');
    var s, d = u.type;
    return Cn(d) ? (delete u.type, Object.defineProperty(this, o, l ? { get: function() {
      return zr(o, d, u);
    } } : { value: function() {
      var c, f = zr(o, d, u);
      return f.validator && (f.validator = (c = f.validator).bind.apply(c, [f].concat([].slice.call(arguments)))), f;
    } })) : (s = l ? { get: function() {
      var c = Object.assign({}, u);
      return a ? be(o, c) : ue(o, c);
    }, enumerable: !0 } : { value: function() {
      var c, f, g = Object.assign({}, u);
      return c = a ? be(o, g) : ue(o, g), g.validator && (c.validator = (f = g.validator).bind.apply(f, [c].concat([].slice.call(arguments)))), c;
    }, enumerable: !0 }, Object.defineProperty(this, o, s));
  }, Vi(e, null, [{ key: "any", get: function() {
    return Yu();
  } }, { key: "func", get: function() {
    return qu().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return Qu().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return Zu().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return Ju().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return ed().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return td().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return nd().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return od();
  } }]), e;
}();
function el(e) {
  var t;
  return e === void 0 && (e = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (t = function(n) {
    function o() {
      return n.apply(this, arguments) || this;
    }
    return Ki(o, n), Vi(o, null, [{ key: "sensibleDefaults", get: function() {
      return un({}, this.defaults);
    }, set: function(r) {
      this.defaults = r !== !1 ? un({}, r !== !0 ? r : e) : {};
    } }]), o;
  }(ye)).defaults = un({}, e), t;
}
ye.defaults = {}, ye.custom = rd, ye.oneOf = ad, ye.instanceOf = cd, ye.oneOfType = id, ye.arrayOf = ld, ye.objectOf = sd, ye.shape = ud, ye.utils = { validate: function(e, t) {
  return tt(t, e, !0) === !0;
}, toType: function(e, t, n) {
  return n === void 0 && (n = !1), n ? be(e, t) : ue(e, t);
} };
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return Ki(t, e), t;
})(el());
const U = el({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
U.extend([{
  name: "looseBool",
  getter: !0,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: !0,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: !0,
  type: null
}]);
const tl = (e, t, n) => {
  Do(e, `[ant-design-vue: ${t}] ${n}`);
};
function dd(e) {
  let {
    prefixCls: t,
    animation: n,
    transitionName: o
  } = e;
  return n ? {
    name: `${t}-${n}`
  } : o ? {
    name: o
  } : {};
}
function fd(e, t, n) {
  qe(gc(e, p({}, t)), n);
}
const pd = (e) => {
  if (!e)
    return !1;
  if (e.offsetParent)
    return !0;
  if (e.getBBox) {
    const t = e.getBBox();
    if (t.width || t.height)
      return !0;
  }
  if (e.getBoundingClientRect) {
    const t = e.getBoundingClientRect();
    if (t.width || t.height)
      return !0;
  }
  return !1;
};
var nl = typeof global == "object" && global && global.Object === Object && global, gd = typeof self == "object" && self && self.Object === Object && self, Fe = nl || gd || Function("return this")(), Sn = Fe.Symbol, ol = Object.prototype, md = ol.hasOwnProperty, vd = ol.toString, Ot = Sn ? Sn.toStringTag : void 0;
function hd(e) {
  var t = md.call(e, Ot), n = e[Ot];
  try {
    e[Ot] = void 0;
    var o = !0;
  } catch {
  }
  var r = vd.call(e);
  return o && (t ? e[Ot] = n : delete e[Ot]), r;
}
var yd = Object.prototype, bd = yd.toString;
function Cd(e) {
  return bd.call(e);
}
var Sd = "[object Null]", xd = "[object Undefined]", kr = Sn ? Sn.toStringTag : void 0;
function Ut(e) {
  return e == null ? e === void 0 ? xd : Sd : kr && kr in Object(e) ? hd(e) : Cd(e);
}
function rl(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var $d = "[object AsyncFunction]", wd = "[object Function]", Od = "[object GeneratorFunction]", Td = "[object Proxy]";
function al(e) {
  if (!rl(e))
    return !1;
  var t = Ut(e);
  return t == wd || t == Od || t == $d || t == Td;
}
var Vn = Fe["__core-js_shared__"], Wr = function() {
  var e = /[^.]+$/.exec(Vn && Vn.keys && Vn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Pd(e) {
  return !!Wr && Wr in e;
}
var Ed = Function.prototype, Id = Ed.toString;
function nt(e) {
  if (e != null) {
    try {
      return Id.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ad = /[\\^$.*+?()[\]{}|]/g, _d = /^\[object .+?Constructor\]$/, Md = Function.prototype, Nd = Object.prototype, jd = Md.toString, Rd = Nd.hasOwnProperty, Bd = RegExp(
  "^" + jd.call(Rd).replace(Ad, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Hd(e) {
  if (!rl(e) || Pd(e))
    return !1;
  var t = al(e) ? Bd : _d;
  return t.test(nt(e));
}
function Fd(e, t) {
  return e == null ? void 0 : e[t];
}
function Gt(e, t) {
  var n = Fd(e, t);
  return Hd(n) ? n : void 0;
}
var vo = Gt(Fe, "Map"), Dd = Array.isArray;
function Go(e) {
  return e != null && typeof e == "object";
}
var Ld = "[object Arguments]";
function Ur(e) {
  return Go(e) && Ut(e) == Ld;
}
var il = Object.prototype, zd = il.hasOwnProperty, kd = il.propertyIsEnumerable, Wd = Ur(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ur : function(e) {
  return Go(e) && zd.call(e, "callee") && !kd.call(e, "callee");
};
const Ud = Wd;
function Gd() {
  return !1;
}
var ll = typeof exports == "object" && exports && !exports.nodeType && exports, Gr = ll && typeof module == "object" && module && !module.nodeType && module, Vd = Gr && Gr.exports === ll, Vr = Vd ? Fe.Buffer : void 0, Kd = Vr ? Vr.isBuffer : void 0, Xd = Kd || Gd;
const Yd = Xd;
var qd = 9007199254740991;
function cl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qd;
}
var Qd = "[object Arguments]", Zd = "[object Array]", Jd = "[object Boolean]", ef = "[object Date]", tf = "[object Error]", nf = "[object Function]", of = "[object Map]", rf = "[object Number]", af = "[object Object]", lf = "[object RegExp]", cf = "[object Set]", sf = "[object String]", uf = "[object WeakMap]", df = "[object ArrayBuffer]", ff = "[object DataView]", pf = "[object Float32Array]", gf = "[object Float64Array]", mf = "[object Int8Array]", vf = "[object Int16Array]", hf = "[object Int32Array]", yf = "[object Uint8Array]", bf = "[object Uint8ClampedArray]", Cf = "[object Uint16Array]", Sf = "[object Uint32Array]", W = {};
W[pf] = W[gf] = W[mf] = W[vf] = W[hf] = W[yf] = W[bf] = W[Cf] = W[Sf] = !0;
W[Qd] = W[Zd] = W[df] = W[Jd] = W[ff] = W[ef] = W[tf] = W[nf] = W[of] = W[rf] = W[af] = W[lf] = W[cf] = W[sf] = W[uf] = !1;
function xf(e) {
  return Go(e) && cl(e.length) && !!W[Ut(e)];
}
function $f(e) {
  return function(t) {
    return e(t);
  };
}
var sl = typeof exports == "object" && exports && !exports.nodeType && exports, Et = sl && typeof module == "object" && module && !module.nodeType && module, wf = Et && Et.exports === sl, Kn = wf && nl.process, Kr = function() {
  try {
    var e = Et && Et.require && Et.require("util").types;
    return e || Kn && Kn.binding && Kn.binding("util");
  } catch {
  }
}(), Xr = Kr && Kr.isTypedArray, Of = Xr ? $f(Xr) : xf;
const Tf = Of;
var Pf = Object.prototype;
function ul(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Pf;
  return e === n;
}
function Ef(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var If = Ef(Object.keys, Object), Af = Object.prototype, _f = Af.hasOwnProperty;
function Mf(e) {
  if (!ul(e))
    return If(e);
  var t = [];
  for (var n in Object(e))
    _f.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Nf(e) {
  return e != null && cl(e.length) && !al(e);
}
var ho = Gt(Fe, "DataView"), yo = Gt(Fe, "Promise"), bo = Gt(Fe, "Set"), Co = Gt(Fe, "WeakMap"), Yr = "[object Map]", jf = "[object Object]", qr = "[object Promise]", Qr = "[object Set]", Zr = "[object WeakMap]", Jr = "[object DataView]", Rf = nt(ho), Bf = nt(vo), Hf = nt(yo), Ff = nt(bo), Df = nt(Co), ze = Ut;
(ho && ze(new ho(new ArrayBuffer(1))) != Jr || vo && ze(new vo()) != Yr || yo && ze(yo.resolve()) != qr || bo && ze(new bo()) != Qr || Co && ze(new Co()) != Zr) && (ze = function(e) {
  var t = Ut(e), n = t == jf ? e.constructor : void 0, o = n ? nt(n) : "";
  if (o)
    switch (o) {
      case Rf:
        return Jr;
      case Bf:
        return Yr;
      case Hf:
        return qr;
      case Ff:
        return Qr;
      case Df:
        return Zr;
    }
  return t;
});
const Lf = ze;
hn("bottomLeft", "bottomRight", "topLeft", "topRight");
const dl = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return p(e ? {
    name: e,
    appear: !0,
    // type: 'animation',
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    // appearActiveClass: `antdv-base-transtion`,
    // appearToClass: `${transitionName}-appear ${transitionName}-appear-active`,
    enterFromClass: `${e}-enter ${e}-enter-prepare ${e}-enter-start`,
    enterActiveClass: `${e}-enter ${e}-enter-prepare`,
    enterToClass: `${e}-enter ${e}-enter-active`,
    leaveFromClass: ` ${e}-leave`,
    leaveActiveClass: `${e}-leave ${e}-leave-active`,
    leaveToClass: `${e}-leave ${e}-leave-active`
  } : {
    css: !1
  }, t);
}, fl = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return p(e ? {
    name: e,
    appear: !0,
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    appearActiveClass: `${e}`,
    appearToClass: `${e}-appear ${e}-appear-active`,
    enterFromClass: `${e}-appear ${e}-enter ${e}-appear-prepare ${e}-enter-prepare`,
    enterActiveClass: `${e}`,
    enterToClass: `${e}-enter ${e}-appear ${e}-appear-active ${e}-enter-active`,
    leaveActiveClass: `${e} ${e}-leave`,
    leaveToClass: `${e}-leave-active`
  } : {
    css: !1
  }, t);
}, xn = (e, t, n) => n !== void 0 ? n : `${e}-${t}`, pl = Symbol("PortalContextKey"), gl = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: !0
  };
  Ee(pl, {
    inTriggerContext: t.inTriggerContext,
    shouldRender: w(() => {
      const {
        sPopupVisible: n,
        popupRef: o,
        forceRender: r,
        autoDestroy: a
      } = e || {};
      let i = !1;
      return (n || o || r) && (i = !0), !n && a && (i = !1), i;
    })
  });
}, zf = () => {
  gl({}, {
    inTriggerContext: !1
  });
  const e = he(pl, {
    shouldRender: w(() => !1),
    inTriggerContext: !1
  });
  return {
    shouldRender: w(() => e.shouldRender.value || e.inTriggerContext === !1)
  };
}, ml = F({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: !1,
  props: {
    getContainer: U.func.isRequired,
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t, o = !0, r;
    const {
      shouldRender: a
    } = zf();
    function i() {
      a.value && (r = e.getContainer());
    }
    mc(() => {
      o = !1, i();
    }), Ae(() => {
      r || i();
    });
    const l = Y(a, () => {
      a.value && !r && (r = e.getContainer()), r && l();
    });
    return _o(() => {
      je(() => {
        var u;
        a.value && ((u = e.didUpdate) === null || u === void 0 || u.call(e, e));
      });
    }), () => {
      var u;
      return a.value ? o ? (u = n.default) === null || u === void 0 ? void 0 : u.call(n) : r ? v(Va, {
        to: r
      }, n) : null : null;
    };
  }
});
let Xn;
function kf(e) {
  if (typeof document > "u")
    return 0;
  if (e || Xn === void 0) {
    const t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    const n = document.createElement("div"), o = n.style;
    o.position = "absolute", o.top = "0", o.left = "0", o.pointerEvents = "none", o.visibility = "hidden", o.width = "200px", o.height = "150px", o.overflow = "hidden", n.appendChild(t), document.body.appendChild(n);
    const r = t.offsetWidth;
    n.style.overflow = "scroll";
    let a = t.offsetWidth;
    r === a && (a = n.clientWidth), document.body.removeChild(n), Xn = r - a;
  }
  return Xn;
}
const Wf = `vc-util-locker-${Date.now()}`;
let ea = 0;
function Uf() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
function Gf(e) {
  const t = w(() => !!e && !!e.value);
  ea += 1;
  const n = `${Wf}_${ea}`;
  Ie((o) => {
    if (ve()) {
      if (t.value) {
        const r = kf(), a = Uf();
        Rt(`
html body {
  overflow-y: hidden;
  ${a ? `width: calc(100% - ${r}px);` : ""}
}`, n);
      } else
        yn(n);
      o(() => {
        yn(n);
      });
    }
  }, {
    flush: "post"
  });
}
let De = 0;
const dn = ve(), ta = (e) => {
  if (!dn)
    return null;
  if (e) {
    if (typeof e == "string")
      return document.querySelectorAll(e)[0];
    if (typeof e == "function")
      return e();
    if (typeof e == "object" && e instanceof window.HTMLElement)
      return e;
  }
  return document.body;
}, Vf = F({
  compatConfig: {
    MODE: 3
  },
  name: "PortalWrapper",
  inheritAttrs: !1,
  props: {
    wrapperClassName: String,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getContainer: U.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    autoLock: st(),
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = D(), r = D(), a = D(), i = D(1), l = ve() && document.createElement("div"), u = () => {
      var g, h;
      o.value === l && ((h = (g = o.value) === null || g === void 0 ? void 0 : g.parentNode) === null || h === void 0 || h.removeChild(o.value)), o.value = null;
    };
    let s = null;
    const d = function() {
      return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) || o.value && !o.value.parentNode ? (s = ta(e.getContainer), s ? (s.appendChild(o.value), !0) : !1) : !0;
    }, c = () => dn ? (o.value || (o.value = l, d(!0)), f(), o.value) : null, f = () => {
      const {
        wrapperClassName: g
      } = e;
      o.value && g && g !== o.value.className && (o.value.className = g);
    };
    return _o(() => {
      f(), d();
    }), Gf(w(() => e.autoLock && e.visible && ve() && (o.value === document.body || o.value === l))), Ae(() => {
      let g = !1;
      Y([() => e.visible, () => e.getContainer], (h, b) => {
        let [S, y] = h, [x, O] = b;
        dn && (s = ta(e.getContainer), s === document.body && (S && !x ? De += 1 : g && (De -= 1))), g && (typeof y == "function" && typeof O == "function" ? y.toString() !== O.toString() : y !== O) && u(), g = !0;
      }, {
        immediate: !0,
        flush: "post"
      }), je(() => {
        d() || (a.value = Nt(() => {
          i.value += 1;
        }));
      });
    }), Be(() => {
      const {
        visible: g
      } = e;
      dn && s === document.body && (De = g && De ? De - 1 : De), u(), Nt.cancel(a.value);
    }), () => {
      const {
        forceRender: g,
        visible: h
      } = e;
      let b = null;
      const S = {
        getOpenCount: () => De,
        getContainer: c
      };
      return i.value && (g || h || r.value) && (b = v(ml, {
        getContainer: c,
        ref: r,
        didUpdate: e.didUpdate
      }, {
        default: () => {
          var y;
          return (y = n.default) === null || y === void 0 ? void 0 : y.call(n, S);
        }
      })), b;
    };
  }
}), j = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  /**
   * END
   */
  END: 35,
  /**
   * HOME
   */
  HOME: 36,
  /**
   * LEFT
   */
  LEFT: 37,
  /**
   * UP
   */
  UP: 38,
  /**
   * RIGHT
   */
  RIGHT: 39,
  /**
   * DOWN
   */
  DOWN: 40,
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  /**
   * DELETE
   */
  DELETE: 46,
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  /**
   * DASH
   */
  DASH: 189,
  /**
   * EQUALS
   */
  EQUALS: 187,
  /**
   * COMMA
   */
  COMMA: 188,
  /**
   * PERIOD
   */
  PERIOD: 190,
  /**
   * SLASH
   */
  SLASH: 191,
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    const {
      keyCode: n
    } = t;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    n >= j.F1 && n <= j.F12)
      return !1;
    switch (n) {
      case j.ALT:
      case j.CAPS_LOCK:
      case j.CONTEXT_MENU:
      case j.CTRL:
      case j.DOWN:
      case j.END:
      case j.ESC:
      case j.HOME:
      case j.INSERT:
      case j.LEFT:
      case j.MAC_FF_META:
      case j.META:
      case j.NUMLOCK:
      case j.NUM_CENTER:
      case j.PAGE_DOWN:
      case j.PAGE_UP:
      case j.PAUSE:
      case j.PRINT_SCREEN:
      case j.RIGHT:
      case j.SHIFT:
      case j.UP:
      case j.WIN_KEY:
      case j.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= j.ZERO && t <= j.NINE || t >= j.NUM_ZERO && t <= j.NUM_MULTIPLY || t >= j.A && t <= j.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case j.SPACE:
      case j.QUESTION_MARK:
      case j.NUM_PLUS:
      case j.NUM_MINUS:
      case j.NUM_PERIOD:
      case j.NUM_DIVISION:
      case j.SEMICOLON:
      case j.DASH:
      case j.EQUALS:
      case j.COMMA:
      case j.PERIOD:
      case j.SLASH:
      case j.APOSTROPHE:
      case j.SINGLE_QUOTE:
      case j.OPEN_SQUARE_BRACKET:
      case j.BACKSLASH:
      case j.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, na = j, Kf = `accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`, Xf = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`, oa = `${Kf} ${Xf}`.split(/[\s\n]+/), Yf = "aria-", qf = "data-";
function ra(e, t) {
  return e.indexOf(t) === 0;
}
function Qf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = p({}, t);
  const o = {};
  return Object.keys(e).forEach((r) => {
    // Aria
    (n.aria && (r === "role" || ra(r, Yf)) || // Data
    n.data && ra(r, qf) || // Attr
    n.attr && (oa.includes(r) || oa.includes(r.toLowerCase()))) && (o[r] = e[r]);
  }), o;
}
function Le(e) {
  const t = typeof e == "function" ? e() : e, n = k(t);
  function o(r) {
    n.value = r;
  }
  return [n, o];
}
var Zf = Symbol("iconContext"), vl = function() {
  return he(Zf, {
    prefixCls: k("anticon"),
    rootClassName: k(""),
    csp: k()
  });
};
function Vo() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Jf(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
var aa = "data-vc-order", ep = "vc-icon-key", So = /* @__PURE__ */ new Map();
function hl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : ep;
}
function Ko(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function tp(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function yl(e) {
  return Array.from((So.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function bl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Vo())
    return null;
  var n = t.csp, o = t.prepend, r = document.createElement("style");
  r.setAttribute(aa, tp(o)), n && n.nonce && (r.nonce = n.nonce), r.innerHTML = e;
  var a = Ko(t), i = a.firstChild;
  if (o) {
    if (o === "queue") {
      var l = yl(a).filter(function(u) {
        return ["prepend", "prependQueue"].includes(u.getAttribute(aa));
      });
      if (l.length)
        return a.insertBefore(r, l[l.length - 1].nextSibling), r;
    }
    a.insertBefore(r, i);
  } else
    a.appendChild(r);
  return r;
}
function np(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Ko(t);
  return yl(n).find(function(o) {
    return o.getAttribute(hl(t)) === e;
  });
}
function op(e, t) {
  var n = So.get(e);
  if (!n || !Jf(document, n)) {
    var o = bl("", t), r = o.parentNode;
    So.set(e, r), e.removeChild(o);
  }
}
function rp(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = Ko(n);
  op(o, n);
  var r = np(t, n);
  if (r)
    return n.csp && n.csp.nonce && r.nonce !== n.csp.nonce && (r.nonce = n.csp.nonce), r.innerHTML !== e && (r.innerHTML = e), r;
  var a = bl(e, n);
  return a.setAttribute(hl(n), t), a;
}
function ia(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      ap(e, r, n[r]);
    });
  }
  return e;
}
function ap(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ip(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function lp(e, t) {
  ip(e, "[@ant-design/icons-vue] ".concat(t));
}
function la(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function xo(e, t, n) {
  return n ? mn(e.tag, ia({
    key: t
  }, n, e.attrs), (e.children || []).map(function(o, r) {
    return xo(o, "".concat(t, "-").concat(e.tag, "-").concat(r));
  })) : mn(e.tag, ia({
    key: t
  }, e.attrs), (e.children || []).map(function(o, r) {
    return xo(o, "".concat(t, "-").concat(e.tag, "-").concat(r));
  }));
}
function Cl(e) {
  return Ze(e)[0];
}
function Sl(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var cp = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
function xl(e) {
  return e && e.getRootNode && e.getRootNode();
}
function sp(e) {
  return Vo() ? xl(e) instanceof ShadowRoot : !1;
}
function up(e) {
  return sp(e) ? xl(e) : null;
}
var dp = function() {
  var t = vl(), n = t.prefixCls, o = t.csp, r = Ao(), a = cp;
  n && (a = a.replace(/anticon/g, n.value)), je(function() {
    if (Vo()) {
      var i = r.vnode.el, l = up(i);
      rp(a, "@ant-design-vue-icons", {
        prepend: !0,
        csp: o.value,
        attachTo: l
      });
    }
  });
}, fp = ["icon", "primaryColor", "secondaryColor"];
function pp(e, t) {
  if (e == null)
    return {};
  var n = gp(e, t), o, r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      o = a[r], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
function gp(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, a;
  for (a = 0; a < o.length; a++)
    r = o[a], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function fn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      mp(e, r, n[r]);
    });
  }
  return e;
}
function mp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var It = Re({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function vp(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  It.primaryColor = t, It.secondaryColor = n || Cl(t), It.calculated = !!n;
}
function hp() {
  return fn({}, It);
}
var yt = function(t, n) {
  var o = fn({}, t, n.attrs), r = o.icon, a = o.primaryColor, i = o.secondaryColor, l = pp(o, fp), u = It;
  if (a && (u = {
    primaryColor: a,
    secondaryColor: i || Cl(a)
  }), lp(la(r), "icon should be icon definiton, but got ".concat(r)), !la(r))
    return null;
  var s = r;
  return s && typeof s.icon == "function" && (s = fn({}, s, {
    icon: s.icon(u.primaryColor, u.secondaryColor)
  })), xo(s.icon, "svg-".concat(s.name), fn({}, l, {
    "data-icon": s.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
yt.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
yt.inheritAttrs = !1;
yt.displayName = "IconBase";
yt.getTwoToneColors = hp;
yt.setTwoToneColors = vp;
const Xo = yt;
function yp(e, t) {
  return xp(e) || Sp(e, t) || Cp(e, t) || bp();
}
function bp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cp(e, t) {
  if (e) {
    if (typeof e == "string")
      return ca(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ca(e, t);
  }
}
function ca(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++)
    o[n] = e[n];
  return o;
}
function Sp(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o = [], r = !0, a = !1, i, l;
    try {
      for (n = n.call(e); !(r = (i = n.next()).done) && (o.push(i.value), !(t && o.length === t)); r = !0)
        ;
    } catch (u) {
      a = !0, l = u;
    } finally {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (a)
          throw l;
      }
    }
    return o;
  }
}
function xp(e) {
  if (Array.isArray(e))
    return e;
}
function $l(e) {
  var t = Sl(e), n = yp(t, 2), o = n[0], r = n[1];
  return Xo.setTwoToneColors({
    primaryColor: o,
    secondaryColor: r
  });
}
function $p() {
  var e = Xo.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var wp = F({
  name: "InsertStyles",
  setup: function() {
    return dp(), function() {
      return null;
    };
  }
}), Op = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function Tp(e, t) {
  return Ap(e) || Ip(e, t) || Ep(e, t) || Pp();
}
function Pp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ep(e, t) {
  if (e) {
    if (typeof e == "string")
      return sa(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return sa(e, t);
  }
}
function sa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++)
    o[n] = e[n];
  return o;
}
function Ip(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var o = [], r = !0, a = !1, i, l;
    try {
      for (n = n.call(e); !(r = (i = n.next()).done) && (o.push(i.value), !(t && o.length === t)); r = !0)
        ;
    } catch (u) {
      a = !0, l = u;
    } finally {
      try {
        !r && n.return != null && n.return();
      } finally {
        if (a)
          throw l;
      }
    }
    return o;
  }
}
function Ap(e) {
  if (Array.isArray(e))
    return e;
}
function ua(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Tt(e, r, n[r]);
    });
  }
  return e;
}
function Tt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function _p(e, t) {
  if (e == null)
    return {};
  var n = Mp(e, t), o, r;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      o = a[r], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
function Mp(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, a;
  for (a = 0; a < o.length; a++)
    r = o[a], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
$l(gu.primary);
var bt = function(t, n) {
  var o, r = ua({}, t, n.attrs), a = r.class, i = r.icon, l = r.spin, u = r.rotate, s = r.tabindex, d = r.twoToneColor, c = r.onClick, f = _p(r, Op), g = vl(), h = g.prefixCls, b = g.rootClassName, S = (o = {}, Tt(o, b.value, !!b.value), Tt(o, h.value, !0), Tt(o, "".concat(h.value, "-").concat(i.name), !!i.name), Tt(o, "".concat(h.value, "-spin"), !!l || i.name === "loading"), o), y = s;
  y === void 0 && c && (y = -1);
  var x = u ? {
    msTransform: "rotate(".concat(u, "deg)"),
    transform: "rotate(".concat(u, "deg)")
  } : void 0, O = Sl(d), E = Tp(O, 2), P = E[0], T = E[1];
  return v("span", ua({
    role: "img",
    "aria-label": i.name
  }, f, {
    onClick: c,
    class: [S, a],
    tabindex: y
  }), [v(Xo, {
    icon: i,
    primaryColor: P,
    secondaryColor: T,
    style: x
  }, null), v(wp, null, null)]);
};
bt.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
bt.displayName = "AntdIcon";
bt.inheritAttrs = !1;
bt.getTwoToneColor = $p;
bt.setTwoToneColor = $l;
const Se = bt;
var Np = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const jp = Np;
function da(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Rp(e, r, n[r]);
    });
  }
  return e;
}
function Rp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Yo = function(t, n) {
  var o = da({}, t, n.attrs);
  return v(Se, da({}, o, {
    icon: jp
  }), null);
};
Yo.displayName = "LoadingOutlined";
Yo.inheritAttrs = !1;
const Dt = Yo;
var Bp = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
const Hp = Bp;
function fa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Fp(e, r, n[r]);
    });
  }
  return e;
}
function Fp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var qo = function(t, n) {
  var o = fa({}, t, n.attrs);
  return v(Se, fa({}, o, {
    icon: Hp
  }), null);
};
qo.displayName = "CloseOutlined";
qo.inheritAttrs = !1;
const Nn = qo;
var Dp = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
const Lp = Dp;
function pa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      zp(e, r, n[r]);
    });
  }
  return e;
}
function zp(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Qo = function(t, n) {
  var o = pa({}, t, n.attrs);
  return v(Se, pa({}, o, {
    icon: Lp
  }), null);
};
Qo.displayName = "CloseCircleFilled";
Qo.inheritAttrs = !1;
const Vt = Qo;
function wl(e) {
  const t = Symbol("contextKey");
  return {
    useProvide: (r, a) => {
      const i = Re({});
      return Ee(t, i), Ie(() => {
        p(i, r, a || {});
      }), i;
    },
    useInject: () => he(t, e) || {}
  };
}
const kp = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
}, Wp = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${t}-space-item`]: {
        "&:empty": {
          display: "none"
        }
      }
    }
  };
}, Up = et("Space", (e) => [Wp(e), kp(e)]);
var Gp = "[object Map]", Vp = "[object Set]", Kp = Object.prototype, Xp = Kp.hasOwnProperty;
function Ol(e) {
  if (e == null)
    return !0;
  if (Nf(e) && (Dd(e) || typeof e == "string" || typeof e.splice == "function" || Yd(e) || Tf(e) || Ud(e)))
    return !e.length;
  var t = Lf(e);
  if (t == Gp || t == Vp)
    return !e.size;
  if (ul(e))
    return !Mf(e).length;
  for (var n in e)
    if (Xp.call(e, n))
      return !1;
  return !0;
}
const Yp = () => ({
  compactSize: String,
  compactDirection: U.oneOf(hn("horizontal", "vertical")).def("horizontal"),
  isFirstItem: st(),
  isLastItem: st()
}), jn = wl(null), qp = (e, t) => {
  const n = jn.useInject(), o = w(() => {
    if (!n || Ol(n))
      return "";
    const {
      compactDirection: r,
      isFirstItem: a,
      isLastItem: i
    } = n, l = r === "vertical" ? "-vertical-" : "-";
    return G({
      [`${e.value}-compact${l}item`]: !0,
      [`${e.value}-compact${l}first-item`]: a,
      [`${e.value}-compact${l}last-item`]: i,
      [`${e.value}-compact${l}item-rtl`]: t.value === "rtl"
    });
  });
  return {
    compactSize: w(() => n == null ? void 0 : n.compactSize),
    compactDirection: w(() => n == null ? void 0 : n.compactDirection),
    compactItemClassnames: o
  };
};
F({
  name: "NoCompactStyle",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return jn.useProvide(null), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
const Qp = () => ({
  prefixCls: String,
  size: {
    type: String
  },
  direction: U.oneOf(hn("horizontal", "vertical")).def("horizontal"),
  align: U.oneOf(hn("start", "end", "center", "baseline")),
  block: {
    type: Boolean,
    default: void 0
  }
}), Zp = F({
  name: "CompactItem",
  props: Yp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return jn.useProvide(e), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
F({
  name: "ASpaceCompact",
  inheritAttrs: !1,
  props: Qp(),
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    const {
      prefixCls: r,
      direction: a
    } = Ce("space-compact", e), i = jn.useInject(), [l, u] = Up(r), s = w(() => G(r.value, u.value, {
      [`${r.value}-rtl`]: a.value === "rtl",
      [`${r.value}-block`]: e.block,
      [`${r.value}-vertical`]: e.direction === "vertical"
    }));
    return () => {
      var d;
      const c = Mt(((d = o.default) === null || d === void 0 ? void 0 : d.call(o)) || []);
      return c.length === 0 ? null : l(v("div", N(N({}, n), {}, {
        class: [s.value, n.class]
      }), [c.map((f, g) => {
        var h;
        const b = f && f.key || `${r.value}-item-${g}`, S = !i || Ol(i);
        return v(Zp, {
          key: b,
          compactSize: (h = e.size) !== null && h !== void 0 ? h : "middle",
          compactDirection: e.direction,
          isFirstItem: g === 0 && (S || (i == null ? void 0 : i.isFirstItem)),
          isLastItem: g === c.length - 1 && (S || (i == null ? void 0 : i.isLastItem))
        }, {
          default: () => [f]
        });
      })]));
    };
  }
});
const Jp = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), eg = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Tl = function(e, t, n, o) {
  const a = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: p(p({}, Jp(o)), {
      animationPlayState: "paused"
    }),
    [`${a}${e}-leave`]: p(p({}, eg(o)), {
      animationPlayState: "paused"
    }),
    [`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${a}${e}-leave${e}-leave-active`]: {
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, tg = new V("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), ng = new V("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), og = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const {
    antCls: n
  } = e, o = `${n}-fade`, r = t ? "&" : "";
  return [Tl(o, tg, ng, e.motionDurationMid, t), {
    [`
        ${r}${o}-enter,
        ${r}${o}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${r}${o}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
}, rg = new V("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), ag = new V("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), ga = new V("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), ma = new V("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), ig = new V("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), lg = new V("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), cg = new V("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), sg = new V("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), ug = new V("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), dg = new V("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), fg = new V("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), pg = new V("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), gg = {
  zoom: {
    inKeyframes: rg,
    outKeyframes: ag
  },
  "zoom-big": {
    inKeyframes: ga,
    outKeyframes: ma
  },
  "zoom-big-fast": {
    inKeyframes: ga,
    outKeyframes: ma
  },
  "zoom-left": {
    inKeyframes: cg,
    outKeyframes: sg
  },
  "zoom-right": {
    inKeyframes: ug,
    outKeyframes: dg
  },
  "zoom-up": {
    inKeyframes: ig,
    outKeyframes: lg
  },
  "zoom-down": {
    inKeyframes: fg,
    outKeyframes: pg
  }
}, mg = (e, t) => {
  const {
    antCls: n
  } = e, o = `${n}-${t}`, {
    inKeyframes: r,
    outKeyframes: a
  } = gg[t];
  return [Tl(o, r, a, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
    [`
        ${o}-enter,
        ${o}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${o}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
};
function vg(e, t, n) {
  const {
    focusElCls: o,
    focus: r,
    borderElCls: a
  } = n, i = a ? "> *" : "", l = ["hover", r ? "focus" : null, "active"].filter(Boolean).map((u) => `&:${u} ${i}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: -e.lineWidth
    },
    "&-item": p(p({
      [l]: {
        zIndex: 2
      }
    }, o ? {
      [`&${o}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${i}`]: {
        zIndex: 0
      }
    })
  };
}
function hg(e, t, n) {
  const {
    borderElCls: o
  } = n, r = o ? `> ${o}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${r}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${r}, &${e}-sm ${r}, &${e}-lg ${r}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${r}, &${e}-sm ${r}, &${e}-lg ${r}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function yg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: n
  } = e, o = `${n}-compact`;
  return {
    [o]: p(p({}, vg(e, o, t)), hg(n, o, t))
  };
}
var bg = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
const Cg = bg;
function va(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Sg(e, r, n[r]);
    });
  }
  return e;
}
function Sg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Zo = function(t, n) {
  var o = va({}, t, n.attrs);
  return v(Se, va({}, o, {
    icon: Cg
  }), null);
};
Zo.displayName = "CheckCircleOutlined";
Zo.inheritAttrs = !1;
const xg = Zo;
var $g = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
const wg = $g;
function ha(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Og(e, r, n[r]);
    });
  }
  return e;
}
function Og(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Jo = function(t, n) {
  var o = ha({}, t, n.attrs);
  return v(Se, ha({}, o, {
    icon: wg
  }), null);
};
Jo.displayName = "ExclamationCircleOutlined";
Jo.inheritAttrs = !1;
const Tg = Jo;
var Pg = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
const Eg = Pg;
function ya(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Ig(e, r, n[r]);
    });
  }
  return e;
}
function Ig(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var er = function(t, n) {
  var o = ya({}, t, n.attrs);
  return v(Se, ya({}, o, {
    icon: Eg
  }), null);
};
er.displayName = "InfoCircleOutlined";
er.inheritAttrs = !1;
const Ag = er;
var _g = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, name: "close-circle", theme: "outlined" };
const Mg = _g;
function ba(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Ng(e, r, n[r]);
    });
  }
  return e;
}
function Ng(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var tr = function(t, n) {
  var o = ba({}, t, n.attrs);
  return v(Se, ba({}, o, {
    icon: Mg
  }), null);
};
tr.displayName = "CloseCircleOutlined";
tr.inheritAttrs = !1;
const jg = tr;
var Rg = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const Bg = Rg;
function Ca(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Hg(e, r, n[r]);
    });
  }
  return e;
}
function Hg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var nr = function(t, n) {
  var o = Ca({}, t, n.attrs);
  return v(Se, Ca({}, o, {
    icon: Bg
  }), null);
};
nr.displayName = "CheckCircleFilled";
nr.inheritAttrs = !1;
const Kt = nr;
var Fg = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const Dg = Fg;
function Sa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Lg(e, r, n[r]);
    });
  }
  return e;
}
function Lg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var or = function(t, n) {
  var o = Sa({}, t, n.attrs);
  return v(Se, Sa({}, o, {
    icon: Dg
  }), null);
};
or.displayName = "ExclamationCircleFilled";
or.inheritAttrs = !1;
const Xt = or;
var zg = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const kg = zg;
function xa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, o = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(r) {
      return Object.getOwnPropertyDescriptor(n, r).enumerable;
    }))), o.forEach(function(r) {
      Wg(e, r, n[r]);
    });
  }
  return e;
}
function Wg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var rr = function(t, n) {
  var o = xa({}, t, n.attrs);
  return v(Se, xa({}, o, {
    icon: kg
  }), null);
};
rr.displayName = "InfoCircleFilled";
rr.inheritAttrs = !1;
const Yt = rr, Ug = (e) => {
  const {
    componentCls: t,
    colorPrimary: n
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${n})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        }
      }
    }
  };
}, Gg = et("Wave", (e) => [Ug(e)]);
function Vg(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Yn(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && Vg(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function Kg(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: o
  } = getComputedStyle(e);
  return Yn(t) ? t : Yn(n) ? n : Yn(o) ? o : null;
}
function qn(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Xg = F({
  props: {
    target: K(),
    className: String
  },
  setup(e) {
    const t = D(null), [n, o] = Le(null), [r, a] = Le([]), [i, l] = Le(0), [u, s] = Le(0), [d, c] = Le(0), [f, g] = Le(0), [h, b] = Le(!1);
    function S() {
      const {
        target: m
      } = e, $ = getComputedStyle(m);
      o(Kg(m));
      const I = $.position === "static", {
        borderLeftWidth: M,
        borderTopWidth: H
      } = $;
      l(I ? m.offsetLeft : qn(-parseFloat(M))), s(I ? m.offsetTop : qn(-parseFloat(H))), c(m.offsetWidth), g(m.offsetHeight);
      const {
        borderTopLeftRadius: L,
        borderTopRightRadius: _,
        borderBottomLeftRadius: R,
        borderBottomRightRadius: C
      } = $;
      a([L, _, C, R].map((A) => qn(parseFloat(A))));
    }
    let y, x, O;
    const E = () => {
      clearTimeout(O), Nt.cancel(x), y == null || y.disconnect();
    }, P = () => {
      var m;
      const $ = (m = t.value) === null || m === void 0 ? void 0 : m.parentElement;
      $ && (qe(null, $), $.parentElement && $.parentElement.removeChild($));
    };
    Ae(() => {
      E(), O = setTimeout(() => {
        P();
      }, 5e3);
      const {
        target: m
      } = e;
      m && (x = Nt(() => {
        S(), b(!0);
      }), typeof ResizeObserver < "u" && (y = new ResizeObserver(S), y.observe(m)));
    }), Be(() => {
      E();
    });
    const T = (m) => {
      m.propertyName === "opacity" && P();
    };
    return () => {
      if (!h.value)
        return null;
      const m = {
        left: `${i.value}px`,
        top: `${u.value}px`,
        width: `${d.value}px`,
        height: `${f.value}px`,
        borderRadius: r.value.map(($) => `${$}px`).join(" ")
      };
      return n && (m["--wave-color"] = n.value), v(On, {
        appear: !0,
        name: "wave-motion",
        appearFromClass: "wave-motion-appear",
        appearActiveClass: "wave-motion-appear",
        appearToClass: "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [v("div", {
          ref: t,
          class: e.className,
          style: m,
          onTransitionend: T
        }, null)]
      });
    };
  }
});
function Yg(e, t) {
  const n = document.createElement("div");
  n.style.position = "absolute", n.style.left = "0px", n.style.top = "0px", e == null || e.insertBefore(n, e == null ? void 0 : e.firstChild), qe(v(Xg, {
    target: e,
    className: t
  }, null), n);
}
function qg(e, t, n) {
  function o() {
    var r;
    const a = vn(e);
    !((r = n == null ? void 0 : n.value) === null || r === void 0) && r.disabled || !a || Yg(a, t.value);
  }
  return o;
}
const Qg = F({
  compatConfig: {
    MODE: 3
  },
  name: "Wave",
  props: {
    disabled: Boolean
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = Ao(), {
      prefixCls: r,
      wave: a
    } = Ce("wave", e), [, i] = Gg(r), l = qg(o, w(() => G(r.value, i.value)), a);
    let u;
    const s = () => {
      vn(o).removeEventListener("click", u, !0);
    };
    return Ae(() => {
      Y(() => e.disabled, () => {
        s(), je(() => {
          const d = vn(o);
          d == null || d.removeEventListener("click", u, !0), !(!d || d.nodeType !== 1 || e.disabled) && (u = (c) => {
            c.target.tagName === "INPUT" || !pd(c.target) || // No need wave
            !d.getAttribute || d.getAttribute("disabled") || d.disabled || d.className.includes("disabled") || d.className.includes("-leave") || l();
          }, d.addEventListener("click", u, !0));
        });
      }, {
        immediate: !0,
        flush: "post"
      });
    }), Be(() => {
      s();
    }), () => {
      var d;
      return (d = n.default) === null || d === void 0 ? void 0 : d.call(n)[0];
    };
  }
});
function Pl(e) {
  return e === "danger" ? {
    danger: !0
  } : {
    type: e
  };
}
const Zg = () => ({
  prefixCls: String,
  type: String,
  htmlType: {
    type: String,
    default: "button"
  },
  shape: {
    type: String
  },
  size: {
    type: String
  },
  loading: {
    type: [Boolean, Object],
    default: () => !1
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  ghost: {
    type: Boolean,
    default: void 0
  },
  block: {
    type: Boolean,
    default: void 0
  },
  danger: {
    type: Boolean,
    default: void 0
  },
  icon: U.any,
  href: String,
  target: String,
  title: String,
  onClick: hr(),
  onMousedown: hr()
}), $a = (e) => {
  e && (e.style.width = "0px", e.style.opacity = "0", e.style.transform = "scale(0)");
}, wa = (e) => {
  je(() => {
    e && (e.style.width = `${e.scrollWidth}px`, e.style.opacity = "1", e.style.transform = "scale(1)");
  });
}, Oa = (e) => {
  e && e.style && (e.style.width = null, e.style.opacity = null, e.style.transform = null);
}, Jg = F({
  compatConfig: {
    MODE: 3
  },
  name: "LoadingIcon",
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup(e) {
    return () => {
      const {
        existIcon: t,
        prefixCls: n,
        loading: o
      } = e;
      if (t)
        return v("span", {
          class: `${n}-loading-icon`
        }, [v(Dt, null, null)]);
      const r = !!o;
      return v(On, {
        name: `${n}-loading-icon-motion`,
        onBeforeEnter: $a,
        onEnter: wa,
        onAfterEnter: Oa,
        onBeforeLeave: wa,
        onLeave: (a) => {
          setTimeout(() => {
            $a(a);
          });
        },
        onAfterLeave: Oa
      }, {
        default: () => [r ? v("span", {
          class: `${n}-loading-icon`
        }, [v(Dt, null, null)]) : null]
      });
    };
  }
}), Ta = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), em = (e) => {
  const {
    componentCls: t,
    fontSize: n,
    lineWidth: o,
    colorPrimaryHover: r,
    colorErrorHover: a
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -o,
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover,\n          &:focus,\n          &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: n
        }
      },
      // Border Color
      Ta(`${t}-primary`, r),
      Ta(`${t}-danger`, a)
    ]
  };
};
function tm(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: -e.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function nm(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function om(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: p(p({}, tm(e, t)), nm(e.componentCls, t))
  };
}
const rm = (e) => {
  const {
    componentCls: t,
    iconCls: n
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: 400,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      backgroundColor: "transparent",
      border: `${e.lineWidth}px ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: e.lineHeight,
      color: e.colorText,
      "> span": {
        display: "inline-block"
      },
      // Leave a space between icon and text.
      [`> ${n} + span, > span + ${n}`]: {
        marginInlineStart: e.marginXS
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": p({}, ji(e)),
      // make `btn-icon-only` not too narrow
      [`&-icon-only${t}-compact-item`]: {
        flex: "none"
      },
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: -e.lineWidth,
            insetInlineStart: -e.lineWidth,
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${e.lineWidth * 2}px)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -e.lineWidth,
              insetInlineStart: -e.lineWidth,
              display: "inline-block",
              width: `calc(100% + ${e.lineWidth * 2}px)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, Pe = (e, t) => ({
  "&:not(:disabled)": {
    "&:hover": e,
    "&:active": t
  }
}), am = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), im = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.controlHeight / 2,
  paddingInlineEnd: e.controlHeight / 2
}), $o = (e) => ({
  cursor: "not-allowed",
  borderColor: e.colorBorder,
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  boxShadow: "none"
}), $n = (e, t, n, o, r, a, i) => ({
  [`&${e}-background-ghost`]: p(p({
    color: t || void 0,
    backgroundColor: "transparent",
    borderColor: n || void 0,
    boxShadow: "none"
  }, Pe(p({
    backgroundColor: "transparent"
  }, a), p({
    backgroundColor: "transparent"
  }, i))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: r || void 0
    }
  })
}), ar = (e) => ({
  "&:disabled": p({}, $o(e))
}), El = (e) => p({}, ar(e)), wn = (e) => ({
  "&:disabled": {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Il = (e) => p(p(p(p(p({}, El(e)), {
  backgroundColor: e.colorBgContainer,
  borderColor: e.colorBorder,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`
}), Pe({
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), $n(e.componentCls, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: p(p(p({
    color: e.colorError,
    borderColor: e.colorError
  }, Pe({
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), $n(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), ar(e))
}), lm = (e) => p(p(p(p(p({}, El(e)), {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimary,
  boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`
}), Pe({
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  backgroundColor: e.colorPrimaryActive
})), $n(e.componentCls, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: p(p(p({
    backgroundColor: e.colorError,
    boxShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`
  }, Pe({
    backgroundColor: e.colorErrorHover
  }, {
    backgroundColor: e.colorErrorActive
  })), $n(e.componentCls, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), ar(e))
}), cm = (e) => p(p({}, Il(e)), {
  borderStyle: "dashed"
}), sm = (e) => p(p(p({
  color: e.colorLink
}, Pe({
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), wn(e)), {
  [`&${e.componentCls}-dangerous`]: p(p({
    color: e.colorError
  }, Pe({
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), wn(e))
}), um = (e) => p(p(p({}, Pe({
  color: e.colorText,
  backgroundColor: e.colorBgTextHover
}, {
  color: e.colorText,
  backgroundColor: e.colorBgTextActive
})), wn(e)), {
  [`&${e.componentCls}-dangerous`]: p(p({
    color: e.colorError
  }, wn(e)), Pe({
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    backgroundColor: e.colorErrorBg
  }))
}), dm = (e) => p(p({}, $o(e)), {
  [`&${e.componentCls}:hover`]: p({}, $o(e))
}), fm = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: Il(e),
    [`${t}-primary`]: lm(e),
    [`${t}-dashed`]: cm(e),
    [`${t}-link`]: sm(e),
    [`${t}-text`]: um(e),
    [`${t}-disabled`]: dm(e)
  };
}, ir = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: n,
    iconCls: o,
    controlHeight: r,
    fontSize: a,
    lineHeight: i,
    lineWidth: l,
    borderRadius: u,
    buttonPaddingHorizontal: s
  } = e, d = Math.max(0, (r - a * i) / 2 - l), c = s - l, f = `${n}-icon-only`;
  return [
    // Size
    {
      [`${n}${t}`]: {
        fontSize: a,
        height: r,
        padding: `${d}px ${c}px`,
        borderRadius: u,
        [`&${f}`]: {
          width: r,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${n}-round`]: {
            width: "auto"
          },
          "> span": {
            transform: "scale(1.143)"
            // 14px -> 16px
          }
        },
        // Loading
        [`&${n}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${n}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        },
        [`&:not(${f}) ${n}-loading-icon > ${o}`]: {
          marginInlineEnd: e.marginXS
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: am(e)
    },
    {
      [`${n}${n}-round${t}`]: im(e)
    }
  ];
}, pm = (e) => ir(e), gm = (e) => {
  const t = He(e, {
    controlHeight: e.controlHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: e.borderRadiusSM
  });
  return ir(t, `${e.componentCls}-sm`);
}, mm = (e) => {
  const t = He(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.fontSizeLG,
    borderRadius: e.borderRadiusLG
  });
  return ir(t, `${e.componentCls}-lg`);
}, vm = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, hm = et("Button", (e) => {
  const {
    controlTmpOutline: t,
    paddingContentHorizontal: n
  } = e, o = He(e, {
    colorOutlineDefault: t,
    buttonPaddingHorizontal: n
  });
  return [
    // Shared
    rm(o),
    // Size
    gm(o),
    pm(o),
    mm(o),
    // Block
    vm(o),
    // Group (type, ghost, danger, disabled, loading)
    fm(o),
    // Button Group
    em(o),
    // Space Compact
    yg(e, {
      focus: !1
    }),
    om(e)
  ];
}), ym = () => ({
  prefixCls: String,
  size: {
    type: String
  }
}), Al = wl(), wo = F({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: ym(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      prefixCls: o,
      direction: r
    } = Ce("btn-group", e), [, , a] = Wt();
    Al.useProvide(Re({
      size: w(() => e.size)
    }));
    const i = w(() => {
      const {
        size: l
      } = e;
      let u = "";
      switch (l) {
        case "large":
          u = "lg";
          break;
        case "small":
          u = "sm";
          break;
        case "middle":
        case void 0:
          break;
        default:
          tl(!l, "Button.Group", "Invalid prop `size`.");
      }
      return {
        [`${o.value}`]: !0,
        [`${o.value}-${u}`]: u,
        [`${o.value}-rtl`]: r.value === "rtl",
        [a.value]: !0
      };
    });
    return () => {
      var l;
      return v("div", {
        class: i.value
      }, [Mt((l = n.default) === null || l === void 0 ? void 0 : l.call(n))]);
    };
  }
}), Pa = /^[\u4e00-\u9fa5]{2}$/, Ea = Pa.test.bind(Pa);
function rn(e) {
  return e === "text" || e === "link";
}
const Ye = F({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: !1,
  __ANT_BUTTON: !0,
  props: zt(Zg(), {
    type: "default"
  }),
  slots: Object,
  // emits: ['click', 'mousedown'],
  setup(e, t) {
    let {
      slots: n,
      attrs: o,
      emit: r,
      expose: a
    } = t;
    const {
      prefixCls: i,
      autoInsertSpaceInButton: l,
      direction: u,
      size: s
    } = Ce("btn", e), [d, c] = hm(i), f = Al.useInject(), g = Bo(), h = w(() => {
      var C;
      return (C = e.disabled) !== null && C !== void 0 ? C : g.value;
    }), b = D(null), S = D(void 0);
    let y = !1;
    const x = D(!1), O = D(!1), E = w(() => l.value !== !1), {
      compactSize: P,
      compactItemClassnames: T
    } = qp(i, u), m = w(() => typeof e.loading == "object" && e.loading.delay ? e.loading.delay || !0 : !!e.loading);
    Y(m, (C) => {
      clearTimeout(S.value), typeof m.value == "number" ? S.value = setTimeout(() => {
        x.value = C;
      }, m.value) : x.value = C;
    }, {
      immediate: !0
    });
    const $ = w(() => {
      const {
        type: C,
        shape: A = "default",
        ghost: B,
        block: z,
        danger: re
      } = e, q = i.value, ie = {
        large: "lg",
        small: "sm",
        middle: void 0
      }, fe = P.value || (f == null ? void 0 : f.size) || s.value, ae = fe && ie[fe] || "";
      return [T.value, {
        [c.value]: !0,
        [`${q}`]: !0,
        [`${q}-${A}`]: A !== "default" && A,
        [`${q}-${C}`]: C,
        [`${q}-${ae}`]: ae,
        [`${q}-loading`]: x.value,
        [`${q}-background-ghost`]: B && !rn(C),
        [`${q}-two-chinese-chars`]: O.value && E.value,
        [`${q}-block`]: z,
        [`${q}-dangerous`]: !!re,
        [`${q}-rtl`]: u.value === "rtl"
      }];
    }), I = () => {
      const C = b.value;
      if (!C || l.value === !1)
        return;
      const A = C.textContent;
      y && Ea(A) ? O.value || (O.value = !0) : O.value && (O.value = !1);
    }, M = (C) => {
      if (x.value || h.value) {
        C.preventDefault();
        return;
      }
      r("click", C);
    }, H = (C) => {
      r("mousedown", C);
    }, L = (C, A) => {
      const B = A ? " " : "";
      if (C.type === Ga) {
        let z = C.children.trim();
        return Ea(z) && (z = z.split("").join(B)), v("span", null, [z]);
      }
      return C;
    };
    return Ie(() => {
      tl(!(e.ghost && rn(e.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    }), Ae(I), _o(I), Be(() => {
      S.value && clearTimeout(S.value);
    }), a({
      focus: () => {
        var C;
        (C = b.value) === null || C === void 0 || C.focus();
      },
      blur: () => {
        var C;
        (C = b.value) === null || C === void 0 || C.blur();
      }
    }), () => {
      var C, A;
      const {
        icon: B = (C = n.icon) === null || C === void 0 ? void 0 : C.call(n)
      } = e, z = Mt((A = n.default) === null || A === void 0 ? void 0 : A.call(n));
      y = z.length === 1 && !B && !rn(e.type);
      const {
        type: re,
        htmlType: q,
        href: ie,
        title: fe,
        target: ae
      } = e, ot = x.value ? "loading" : B, te = p(p({}, o), {
        title: fe,
        disabled: h.value,
        class: [$.value, o.class, {
          [`${i.value}-icon-only`]: z.length === 0 && !!ot
        }],
        onClick: M,
        onMousedown: H
      });
      h.value || delete te.disabled;
      const _e = B && !x.value ? B : v(Jg, {
        existIcon: !!B,
        prefixCls: i.value,
        loading: !!x.value
      }, null), pe = z.map((Ct) => L(Ct, y && E.value));
      if (ie !== void 0)
        return d(v("a", N(N({}, te), {}, {
          href: ie,
          target: ae,
          ref: b
        }), [_e, pe]));
      let xe = v("button", N(N({}, te), {}, {
        ref: b,
        type: q
      }), [_e, pe]);
      if (!rn(re)) {
        const Ct = /* @__PURE__ */ function() {
          return xe;
        }();
        xe = v(Qg, {
          ref: "wave",
          disabled: !!x.value
        }, {
          default: () => [Ct]
        });
      }
      return d(xe);
    };
  }
});
Ye.Group = wo;
Ye.install = function(e) {
  return e.component(Ye.name, Ye), e.component(wo.name, wo), e;
};
const bm = () => ve() && window.document.documentElement;
let pn = p({}, Qe.Modal);
function Cm(e) {
  e ? pn = p(p({}, pn), e) : pn = p({}, Qe.Modal);
}
function Sm() {
  return pn;
}
const Oo = "internalMark", gn = F({
  compatConfig: {
    MODE: 3
  },
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    kt(e.ANT_MARK__ === Oo, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    const o = Re({
      antLocale: p(p({}, e.locale), {
        exist: !0
      }),
      ANT_MARK__: Oo
    });
    return Ee("localeData", o), Y(() => e.locale, (r) => {
      Cm(r && r.Modal), o.antLocale = p(p({}, r), {
        exist: !0
      });
    }, {
      immediate: !0
    }), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
gn.install = function(e) {
  return e.component(gn.name, gn), e;
};
const xm = No(gn), Rn = F({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t, r, a = !1;
    const i = w(() => e.duration === void 0 ? 4.5 : e.duration), l = () => {
      i.value && !a && (r = setTimeout(() => {
        s();
      }, i.value * 1e3));
    }, u = () => {
      r && (clearTimeout(r), r = null);
    }, s = (c) => {
      c && c.stopPropagation(), u();
      const {
        onClose: f,
        noticeKey: g
      } = e;
      f && f(g);
    }, d = () => {
      u(), l();
    };
    return Ae(() => {
      l();
    }), vc(() => {
      a = !0, u();
    }), Y([i, () => e.updateMark, () => e.visible], (c, f) => {
      let [g, h, b] = c, [S, y, x] = f;
      (g !== S || h !== y || b !== x && x) && d();
    }, {
      flush: "post"
    }), () => {
      var c, f;
      const {
        prefixCls: g,
        closable: h,
        closeIcon: b = (c = o.closeIcon) === null || c === void 0 ? void 0 : c.call(o),
        onClick: S,
        holder: y
      } = e, {
        class: x,
        style: O
      } = n, E = `${g}-notice`, P = Object.keys(n).reduce((m, $) => (($.startsWith("data-") || $.startsWith("aria-") || $ === "role") && (m[$] = n[$]), m), {}), T = v("div", N({
        class: G(E, x, {
          [`${E}-closable`]: h
        }),
        style: O,
        onMouseenter: u,
        onMouseleave: l,
        onClick: S
      }, P), [v("div", {
        class: `${E}-content`
      }, [(f = o.default) === null || f === void 0 ? void 0 : f.call(o)]), h ? v("a", {
        tabindex: 0,
        onClick: s,
        class: `${E}-close`
      }, [b || v("span", {
        class: `${E}-close-x`
      }, null)]) : null]);
      return y ? v(Va, {
        to: y
      }, {
        default: () => T
      }) : T;
    };
  }
});
var $m = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
let Ia = 0;
const wm = Date.now();
function Aa() {
  const e = Ia;
  return Ia += 1, `rcNotification_${wm}_${e}`;
}
const To = F({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId"],
  setup(e, t) {
    let {
      attrs: n,
      expose: o,
      slots: r
    } = t;
    const a = /* @__PURE__ */ new Map(), i = k([]), l = w(() => {
      const {
        prefixCls: d,
        animation: c = "fade"
      } = e;
      let f = e.transitionName;
      return !f && c && (f = `${d}-${c}`), fl(f);
    }), u = (d, c) => {
      const f = d.key || Aa(), g = p(p({}, d), {
        key: f
      }), {
        maxCount: h
      } = e, b = i.value.map((y) => y.notice.key).indexOf(f), S = i.value.concat();
      b !== -1 ? S.splice(b, 1, {
        notice: g,
        holderCallback: c
      }) : (h && i.value.length >= h && (g.key = S[0].notice.key, g.updateMark = Aa(), g.userPassKey = f, S.shift()), S.push({
        notice: g,
        holderCallback: c
      })), i.value = S;
    }, s = (d) => {
      i.value = i.value.filter((c) => {
        let {
          notice: {
            key: f,
            userPassKey: g
          }
        } = c;
        return (g || f) !== d;
      });
    };
    return o({
      add: u,
      remove: s,
      notices: i
    }), () => {
      var d;
      const {
        prefixCls: c,
        closeIcon: f = (d = r.closeIcon) === null || d === void 0 ? void 0 : d.call(r, {
          prefixCls: c
        })
      } = e, g = i.value.map((b, S) => {
        let {
          notice: y,
          holderCallback: x
        } = b;
        const O = S === i.value.length - 1 ? y.updateMark : void 0, {
          key: E,
          userPassKey: P
        } = y, {
          content: T
        } = y, m = p(p(p({
          prefixCls: c,
          closeIcon: typeof f == "function" ? f({
            prefixCls: c
          }) : f
        }, y), y.props), {
          key: E,
          noticeKey: P || E,
          updateMark: O,
          onClose: ($) => {
            var I;
            s($), (I = y.onClose) === null || I === void 0 || I.call(y);
          },
          onClick: y.onClick
        });
        return x ? v("div", {
          key: E,
          class: `${c}-hook-holder`,
          ref: ($) => {
            typeof E > "u" || ($ ? (a.set(E, $), x($, m)) : a.delete(E));
          }
        }, null) : v(Rn, N(N({}, m), {}, {
          class: G(m.class, e.hashId)
        }), {
          default: () => [typeof T == "function" ? T({
            prefixCls: c
          }) : T]
        });
      }), h = {
        [c]: 1,
        [n.class]: !!n.class,
        [e.hashId]: !0
      };
      return v("div", {
        class: h,
        style: n.style || {
          top: "65px",
          left: "50%"
        }
      }, [v(Ka, N({
        tag: "div"
      }, l.value), {
        default: () => [g]
      })]);
    };
  }
});
To.newInstance = function(t, n) {
  const o = t || {}, {
    name: r = "notification",
    getContainer: a,
    appContext: i,
    prefixCls: l,
    rootPrefixCls: u,
    transitionName: s,
    hasTransitionName: d,
    useStyle: c
  } = o, f = $m(o, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]), g = document.createElement("div");
  a ? a().appendChild(g) : document.body.appendChild(g);
  const h = F({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup(S, y) {
      let {
        attrs: x
      } = y;
      const O = D(), E = w(() => Q.getPrefixCls(r, l)), [, P] = c(E);
      return Ae(() => {
        n({
          notice(T) {
            var m;
            (m = O.value) === null || m === void 0 || m.add(T);
          },
          removeNotice(T) {
            var m;
            (m = O.value) === null || m === void 0 || m.remove(T);
          },
          destroy() {
            qe(null, g), g.parentNode && g.parentNode.removeChild(g);
          },
          component: O
        });
      }), () => {
        const T = Q, m = T.getRootPrefixCls(u, E.value), $ = d ? s : `${E.value}-${s}`;
        return v(tc, N(N({}, T), {}, {
          prefixCls: m
        }), {
          default: () => [v(To, N(N({
            ref: O
          }, x), {}, {
            prefixCls: E.value,
            transitionName: $,
            hashId: P.value
          }), null)]
        });
      };
    }
  }), b = v(h, f);
  b.appContext = i || b.appContext, qe(b, g);
};
const _l = To;
let _a = 0;
const Om = Date.now();
function Ma() {
  const e = _a;
  return _a += 1, `rcNotification_${Om}_${e}`;
}
const Tm = F({
  name: "HookNotification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId", "remove", "notices", "getStyles", "getClassName", "onAllRemoved", "getContainer"],
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    const r = /* @__PURE__ */ new Map(), a = w(() => e.notices), i = w(() => {
      let d = e.transitionName;
      if (!d && e.animation)
        switch (typeof e.animation) {
          case "string":
            d = e.animation;
            break;
          case "function":
            d = e.animation().name;
            break;
          case "object":
            d = e.animation.name;
            break;
          default:
            d = `${e.prefixCls}-fade`;
            break;
        }
      return fl(d);
    }), l = (d) => e.remove(d), u = k({});
    Y(a, () => {
      const d = {};
      Object.keys(u.value).forEach((c) => {
        d[c] = [];
      }), e.notices.forEach((c) => {
        const {
          placement: f = "topRight"
        } = c.notice;
        f && (d[f] = d[f] || [], d[f].push(c));
      }), u.value = d;
    });
    const s = w(() => Object.keys(u.value));
    return () => {
      var d;
      const {
        prefixCls: c,
        closeIcon: f = (d = o.closeIcon) === null || d === void 0 ? void 0 : d.call(o, {
          prefixCls: c
        })
      } = e, g = s.value.map((h) => {
        var b, S;
        const y = u.value[h], x = (b = e.getClassName) === null || b === void 0 ? void 0 : b.call(e, h), O = (S = e.getStyles) === null || S === void 0 ? void 0 : S.call(e, h), E = y.map((m, $) => {
          let {
            notice: I,
            holderCallback: M
          } = m;
          const H = $ === a.value.length - 1 ? I.updateMark : void 0, {
            key: L,
            userPassKey: _
          } = I, {
            content: R
          } = I, C = p(p(p({
            prefixCls: c,
            closeIcon: typeof f == "function" ? f({
              prefixCls: c
            }) : f
          }, I), I.props), {
            key: L,
            noticeKey: _ || L,
            updateMark: H,
            onClose: (A) => {
              var B;
              l(A), (B = I.onClose) === null || B === void 0 || B.call(I);
            },
            onClick: I.onClick
          });
          return M ? v("div", {
            key: L,
            class: `${c}-hook-holder`,
            ref: (A) => {
              typeof L > "u" || (A ? (r.set(L, A), M(A, C)) : r.delete(L));
            }
          }, null) : v(Rn, N(N({}, C), {}, {
            class: G(C.class, e.hashId)
          }), {
            default: () => [typeof R == "function" ? R({
              prefixCls: c
            }) : R]
          });
        }), P = {
          [c]: 1,
          [`${c}-${h}`]: 1,
          [n.class]: !!n.class,
          [e.hashId]: !0,
          [x]: !!x
        };
        function T() {
          var m;
          y.length > 0 || (Reflect.deleteProperty(u.value, h), (m = e.onAllRemoved) === null || m === void 0 || m.call(e));
        }
        return v("div", {
          key: h,
          class: P,
          style: n.style || O || {
            top: "65px",
            left: "50%"
          }
        }, [v(Ka, N(N({
          tag: "div"
        }, i.value), {}, {
          onAfterLeave: T
        }), {
          default: () => [E]
        })]);
      });
      return v(ml, {
        getContainer: e.getContainer
      }, {
        default: () => [g]
      });
    };
  }
}), Pm = Tm;
var Em = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Im = () => document.body;
let Na = 0;
function Am() {
  const e = {};
  for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
    n[o] = arguments[o];
  return n.forEach((r) => {
    r && Object.keys(r).forEach((a) => {
      const i = r[a];
      i !== void 0 && (e[a] = i);
    });
  }), e;
}
function Ml() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    getContainer: t = Im,
    motion: n,
    prefixCls: o,
    maxCount: r,
    getClassName: a,
    getStyles: i,
    onAllRemoved: l
  } = e, u = Em(e, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]), s = D([]), d = D(), c = (y, x) => {
    const O = y.key || Ma(), E = p(p({}, y), {
      key: O
    }), P = s.value.map((m) => m.notice.key).indexOf(O), T = s.value.concat();
    P !== -1 ? T.splice(P, 1, {
      notice: E,
      holderCallback: x
    }) : (r && s.value.length >= r && (E.key = T[0].notice.key, E.updateMark = Ma(), E.userPassKey = O, T.shift()), T.push({
      notice: E,
      holderCallback: x
    })), s.value = T;
  }, f = (y) => {
    s.value = s.value.filter((x) => {
      let {
        notice: {
          key: O,
          userPassKey: E
        }
      } = x;
      return (E || O) !== y;
    });
  }, g = () => {
    s.value = [];
  }, h = () => v(Pm, {
    ref: d,
    prefixCls: o,
    maxCount: r,
    notices: s.value,
    remove: f,
    getClassName: a,
    getStyles: i,
    animation: n,
    hashId: e.hashId,
    onAllRemoved: l,
    getContainer: t
  }, null), b = D([]), S = {
    open: (y) => {
      const x = Am(u, y);
      (x.key === null || x.key === void 0) && (x.key = `vc-notification-${Na}`, Na += 1), b.value = [...b.value, {
        type: "open",
        config: x
      }];
    },
    close: (y) => {
      b.value = [...b.value, {
        type: "close",
        key: y
      }];
    },
    destroy: () => {
      b.value = [...b.value, {
        type: "destroy"
      }];
    }
  };
  return Y(b, () => {
    b.value.length && (b.value.forEach((y) => {
      switch (y.type) {
        case "open":
          c(y.config);
          break;
        case "close":
          f(y.key);
          break;
        case "destroy":
          g();
          break;
      }
    }), b.value = []);
  }), [S, h];
}
const _m = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    boxShadowSecondary: o,
    colorBgElevated: r,
    colorSuccess: a,
    colorError: i,
    colorWarning: l,
    colorInfo: u,
    fontSizeLG: s,
    motionEaseInOutCirc: d,
    motionDurationSlow: c,
    marginXS: f,
    paddingXS: g,
    borderRadiusLG: h,
    zIndexPopup: b,
    // Custom token
    messageNoticeContentPadding: S
  } = e, y = new V("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: g,
      transform: "translateY(0)",
      opacity: 1
    }
  }), x = new V("MessageMoveOut", {
    "0%": {
      maxHeight: e.height,
      padding: g,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [t]: p(p({}, ko(e)), {
        position: "fixed",
        top: f,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        pointerEvents: "none",
        zIndex: b,
        [`${t}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
          animationName: y,
          animationDuration: c,
          animationPlayState: "paused",
          animationTimingFunction: d
        },
        [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${t}-move-up-leave`]: {
          animationName: x,
          animationDuration: c,
          animationPlayState: "paused",
          animationTimingFunction: d
        },
        [`${t}-move-up-leave${t}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [`${t}-notice`]: {
        padding: g,
        textAlign: "center",
        [n]: {
          verticalAlign: "text-bottom",
          marginInlineEnd: f,
          fontSize: s
        },
        [`${t}-notice-content`]: {
          display: "inline-block",
          padding: S,
          background: r,
          borderRadius: h,
          boxShadow: o,
          pointerEvents: "all"
        },
        [`${t}-success ${n}`]: {
          color: a
        },
        [`${t}-error ${n}`]: {
          color: i
        },
        [`${t}-warning ${n}`]: {
          color: l
        },
        [`
        ${t}-info ${n},
        ${t}-loading ${n}`]: {
          color: u
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: {
        padding: 0,
        textAlign: "start"
      }
    }
  ];
}, lr = et("Message", (e) => {
  const t = He(e, {
    messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
  });
  return [_m(t)];
}, (e) => ({
  height: 150,
  zIndexPopup: e.zIndexPopupBase + 10
})), Mm = {
  info: v(Yt, null, null),
  success: v(Kt, null, null),
  error: v(Vt, null, null),
  warning: v(Xt, null, null),
  loading: v(Dt, null, null)
}, Nl = F({
  name: "PureContent",
  inheritAttrs: !1,
  props: ["prefixCls", "type", "icon"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var o;
      return v("div", {
        class: G(`${e.prefixCls}-custom-content`, `${e.prefixCls}-${e.type}`)
      }, [e.icon || Mm[e.type], v("span", null, [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)])]);
    };
  }
});
F({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content"],
  setup(e, t) {
    let {
      slots: n,
      attrs: o
    } = t;
    var r;
    const {
      getPrefixCls: a
    } = Tn(), i = w(() => e.prefixCls || a("message")), [, l] = lr(i);
    return v(Rn, N(N({}, o), {}, {
      prefixCls: i.value,
      class: G(l.value, `${i.value}-notice-pure-panel`),
      noticeKey: "pure",
      duration: null
    }), {
      default: () => [v(Nl, {
        prefixCls: i.value,
        type: e.type,
        icon: e.icon
      }, {
        default: () => [(r = n.default) === null || r === void 0 ? void 0 : r.call(n)]
      })]
    });
  }
});
var Nm = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const jm = 8, Rm = 3, Bm = F({
  name: "Holder",
  inheritAttrs: !1,
  props: ["top", "prefixCls", "getContainer", "maxCount", "duration", "rtl", "transitionName", "onAllRemoved"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    var o, r;
    const {
      getPrefixCls: a,
      getPopupContainer: i
    } = Ce("message", e), l = w(() => a("message", e.prefixCls)), [, u] = lr(l), s = () => {
      var b;
      const S = (b = e.top) !== null && b !== void 0 ? b : jm;
      return {
        left: "50%",
        transform: "translateX(-50%)",
        top: typeof S == "number" ? `${S}px` : S
      };
    }, d = () => G(u.value, e.rtl ? `${l.value}-rtl` : ""), c = () => {
      var b;
      return dd({
        prefixCls: l.value,
        animation: (b = e.animation) !== null && b !== void 0 ? b : "move-up",
        transitionName: e.transitionName
      });
    }, f = v("span", {
      class: `${l.value}-close-x`
    }, [v(Nn, {
      class: `${l.value}-close-icon`
    }, null)]), [g, h] = Ml({
      //@ts-ignore
      getStyles: s,
      prefixCls: l.value,
      getClassName: d,
      motion: c,
      closable: !1,
      closeIcon: f,
      duration: (o = e.duration) !== null && o !== void 0 ? o : Rm,
      getContainer: (r = e.staticGetContainer) !== null && r !== void 0 ? r : i.value,
      maxCount: e.maxCount,
      onAllRemoved: e.onAllRemoved
    });
    return n(p(p({}, g), {
      prefixCls: l,
      hashId: u
    })), h;
  }
});
let ja = 0;
function Hm(e) {
  const t = D(null), n = Symbol("messageHolderKey"), o = (u) => {
    var s;
    (s = t.value) === null || s === void 0 || s.close(u);
  }, r = (u) => {
    if (!t.value) {
      const P = () => {
      };
      return P.then = () => {
      }, P;
    }
    const {
      open: s,
      prefixCls: d,
      hashId: c
    } = t.value, f = `${d}-notice`, {
      content: g,
      icon: h,
      type: b,
      key: S,
      class: y,
      onClose: x
    } = u, O = Nm(u, ["content", "icon", "type", "key", "class", "onClose"]);
    let E = S;
    return E == null && (ja += 1, E = `antd-message-${ja}`), Mc((P) => (s(p(p({}, O), {
      key: E,
      content: () => v(Nl, {
        prefixCls: d,
        type: b,
        icon: typeof h == "function" ? h() : h
      }, {
        default: () => [typeof g == "function" ? g() : g]
      }),
      placement: "top",
      // @ts-ignore
      class: G(b && `${f}-${b}`, c, y),
      onClose: () => {
        x == null || x(), P();
      }
    })), () => {
      o(E);
    }));
  }, i = {
    open: r,
    destroy: (u) => {
      var s;
      u !== void 0 ? o(u) : (s = t.value) === null || s === void 0 || s.destroy();
    }
  };
  return ["info", "success", "warning", "error", "loading"].forEach((u) => {
    const s = (d, c, f) => {
      let g;
      d && typeof d == "object" && "content" in d ? g = d : g = {
        content: d
      };
      let h, b;
      typeof c == "function" ? b = c : (h = c, b = f);
      const S = p(p({
        onClose: b,
        duration: h
      }, g), {
        type: u
      });
      return r(S);
    };
    i[u] = s;
  }), [i, () => v(Bm, N(N({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function Fm(e) {
  return Hm(e);
}
let jl = 3, Rl, oe, Dm = 1, Bl = "", Hl = "move-up", Fl = !1, Dl = () => document.body, Ll, zl = !1;
function Lm() {
  return Dm++;
}
function zm(e) {
  e.top !== void 0 && (Rl = e.top, oe = null), e.duration !== void 0 && (jl = e.duration), e.prefixCls !== void 0 && (Bl = e.prefixCls), e.getContainer !== void 0 && (Dl = e.getContainer, oe = null), e.transitionName !== void 0 && (Hl = e.transitionName, oe = null, Fl = !0), e.maxCount !== void 0 && (Ll = e.maxCount, oe = null), e.rtl !== void 0 && (zl = e.rtl);
}
function km(e, t) {
  if (oe) {
    t(oe);
    return;
  }
  _l.newInstance({
    appContext: e.appContext,
    prefixCls: e.prefixCls || Bl,
    rootPrefixCls: e.rootPrefixCls,
    transitionName: Hl,
    hasTransitionName: Fl,
    style: {
      top: Rl
    },
    getContainer: Dl || e.getPopupContainer,
    maxCount: Ll,
    name: "message",
    useStyle: lr
  }, (n) => {
    if (oe) {
      t(oe);
      return;
    }
    oe = n, t(n);
  });
}
const kl = {
  info: Yt,
  success: Kt,
  error: Vt,
  warning: Xt,
  loading: Dt
}, Wm = Object.keys(kl);
function Um(e) {
  const t = e.duration !== void 0 ? e.duration : jl, n = e.key || Lm(), o = new Promise((a) => {
    const i = () => (typeof e.onClose == "function" && e.onClose(), a(!0));
    km(e, (l) => {
      l.notice({
        key: n,
        duration: t,
        style: e.style || {},
        class: e.class,
        content: (u) => {
          let {
            prefixCls: s
          } = u;
          const d = kl[e.type], c = d ? v(d, null, null) : "", f = G(`${s}-custom-content`, {
            [`${s}-${e.type}`]: e.type,
            [`${s}-rtl`]: zl === !0
          });
          return v("div", {
            class: f
          }, [typeof e.icon == "function" ? e.icon() : e.icon || c, v("span", null, [typeof e.content == "function" ? e.content() : e.content])]);
        },
        onClose: i,
        onClick: e.onClick
      });
    });
  }), r = () => {
    oe && oe.removeNotice(n);
  };
  return r.then = (a, i) => o.then(a, i), r.promise = o, r;
}
function Gm(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
const Lt = {
  open: Um,
  config: zm,
  destroy(e) {
    if (oe)
      if (e) {
        const {
          removeNotice: t
        } = oe;
        t(e);
      } else {
        const {
          destroy: t
        } = oe;
        t(), oe = null;
      }
  }
};
function Vm(e, t) {
  e[t] = (n, o, r) => Gm(n) ? e.open(p(p({}, n), {
    type: t
  })) : (typeof o == "function" && (r = o, o = void 0), e.open({
    content: n,
    duration: o,
    type: t,
    onClose: r
  }));
}
Wm.forEach((e) => Vm(Lt, e));
Lt.warn = Lt.warning;
Lt.useMessage = Fm;
const Wl = Lt, Km = (e) => {
  const {
    componentCls: t,
    width: n,
    notificationMarginEdge: o
  } = e, r = new V("antNotificationTopFadeIn", {
    "0%": {
      marginTop: "-100%",
      opacity: 0
    },
    "100%": {
      marginTop: 0,
      opacity: 1
    }
  }), a = new V("antNotificationBottomFadeIn", {
    "0%": {
      marginBottom: "-100%",
      opacity: 0
    },
    "100%": {
      marginBottom: 0,
      opacity: 1
    }
  }), i = new V("antNotificationLeftFadeIn", {
    "0%": {
      right: {
        _skip_check_: !0,
        value: n
      },
      opacity: 0
    },
    "100%": {
      right: {
        _skip_check_: !0,
        value: 0
      },
      opacity: 1
    }
  });
  return {
    [`&${t}-top, &${t}-bottom`]: {
      marginInline: 0
    },
    [`&${t}-top`]: {
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: r
      }
    },
    [`&${t}-bottom`]: {
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: a
      }
    },
    [`&${t}-topLeft, &${t}-bottomLeft`]: {
      marginInlineEnd: 0,
      marginInlineStart: o,
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: i
      }
    }
  };
}, Xm = (e) => {
  const {
    iconCls: t,
    componentCls: n,
    // .ant-notification
    boxShadowSecondary: o,
    fontSizeLG: r,
    notificationMarginBottom: a,
    borderRadiusLG: i,
    colorSuccess: l,
    colorInfo: u,
    colorWarning: s,
    colorError: d,
    colorTextHeading: c,
    notificationBg: f,
    notificationPadding: g,
    notificationMarginEdge: h,
    motionDurationMid: b,
    motionEaseInOut: S,
    fontSize: y,
    lineHeight: x,
    width: O,
    notificationIconSize: E
  } = e, P = `${n}-notice`, T = new V("antNotificationFadeIn", {
    "0%": {
      left: {
        _skip_check_: !0,
        value: O
      },
      opacity: 0
    },
    "100%": {
      left: {
        _skip_check_: !0,
        value: 0
      },
      opacity: 1
    }
  }), m = new V("antNotificationFadeOut", {
    "0%": {
      maxHeight: e.animationMaxHeight,
      marginBottom: a,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [n]: p(p(p(p({}, ko(e)), {
        position: "fixed",
        zIndex: e.zIndexPopup,
        marginInlineEnd: h,
        [`${n}-hook-holder`]: {
          position: "relative"
        },
        [`&${n}-top, &${n}-bottom`]: {
          [`${n}-notice`]: {
            marginInline: "auto auto"
          }
        },
        [`&${n}-topLeft, &${n}-bottomLeft`]: {
          [`${n}-notice`]: {
            marginInlineEnd: "auto",
            marginInlineStart: 0
          }
        },
        //  animation
        [`${n}-fade-enter, ${n}-fade-appear`]: {
          animationDuration: e.motionDurationMid,
          animationTimingFunction: S,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${n}-fade-leave`]: {
          animationTimingFunction: S,
          animationFillMode: "both",
          animationDuration: b,
          animationPlayState: "paused"
        },
        [`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]: {
          animationName: T,
          animationPlayState: "running"
        },
        [`${n}-fade-leave${n}-fade-leave-active`]: {
          animationName: m,
          animationPlayState: "running"
        }
      }), Km(e)), {
        // RTL
        "&-rtl": {
          direction: "rtl",
          [`${n}-notice-btn`]: {
            float: "left"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [P]: {
        position: "relative",
        width: O,
        maxWidth: `calc(100vw - ${h * 2}px)`,
        marginBottom: a,
        marginInlineStart: "auto",
        padding: g,
        overflow: "hidden",
        lineHeight: x,
        wordWrap: "break-word",
        background: f,
        borderRadius: i,
        boxShadow: o,
        [`${n}-close-icon`]: {
          fontSize: y,
          cursor: "pointer"
        },
        [`${P}-message`]: {
          marginBottom: e.marginXS,
          color: c,
          fontSize: r,
          lineHeight: e.lineHeightLG
        },
        [`${P}-description`]: {
          fontSize: y
        },
        [`&${P}-closable ${P}-message`]: {
          paddingInlineEnd: e.paddingLG
        },
        [`${P}-with-icon ${P}-message`]: {
          marginBottom: e.marginXS,
          marginInlineStart: e.marginSM + E,
          fontSize: r
        },
        [`${P}-with-icon ${P}-description`]: {
          marginInlineStart: e.marginSM + E,
          fontSize: y
        },
        // Icon & color style in different selector level
        // https://github.com/ant-design/ant-design/issues/16503
        // https://github.com/ant-design/ant-design/issues/15512
        [`${P}-icon`]: {
          position: "absolute",
          fontSize: E,
          lineHeight: 0,
          // icon-font
          [`&-success${t}`]: {
            color: l
          },
          [`&-info${t}`]: {
            color: u
          },
          [`&-warning${t}`]: {
            color: s
          },
          [`&-error${t}`]: {
            color: d
          }
        },
        [`${P}-close`]: {
          position: "absolute",
          top: e.notificationPaddingVertical,
          insetInlineEnd: e.notificationPaddingHorizontal,
          color: e.colorIcon,
          outline: "none",
          width: e.notificationCloseButtonSize,
          height: e.notificationCloseButtonSize,
          borderRadius: e.borderRadiusSM,
          transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            color: e.colorIconHover,
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContent
          }
        },
        [`${P}-btn`]: {
          float: "right",
          marginTop: e.marginSM
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${P}-pure-panel`]: {
        margin: 0
      }
    }
  ];
}, cr = et("Notification", (e) => {
  const t = e.paddingMD, n = e.paddingLG, o = He(e, {
    // default.less variables
    notificationBg: e.colorBgElevated,
    notificationPaddingVertical: t,
    notificationPaddingHorizontal: n,
    // index.less variables
    notificationPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
    notificationMarginBottom: e.margin,
    notificationMarginEdge: e.marginLG,
    animationMaxHeight: 150,
    notificationIconSize: e.fontSizeLG * e.lineHeightLG,
    notificationCloseButtonSize: e.controlHeightLG * 0.55
  });
  return [Xm(o)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50,
  width: 384
}));
function Ul(e, t) {
  return t || v("span", {
    class: `${e}-close-x`
  }, [v(Nn, {
    class: `${e}-close-icon`
  }, null)]);
}
v(Yt, null, null), v(Kt, null, null), v(Vt, null, null), v(Xt, null, null), v(Dt, null, null);
const Ym = {
  success: Kt,
  info: Yt,
  error: Vt,
  warning: Xt
};
function Gl(e) {
  let {
    prefixCls: t,
    icon: n,
    type: o,
    message: r,
    description: a,
    btn: i
  } = e, l = null;
  if (n)
    l = v("span", {
      class: `${t}-icon`
    }, [lt(n)]);
  else if (o) {
    const u = Ym[o];
    l = v(u, {
      class: `${t}-icon ${t}-icon-${o}`
    }, null);
  }
  return v("div", {
    class: G({
      [`${t}-with-icon`]: l
    }),
    role: "alert"
  }, [l, v("div", {
    class: `${t}-message`
  }, [r]), v("div", {
    class: `${t}-description`
  }, [a]), i && v("div", {
    class: `${t}-btn`
  }, [i])]);
}
F({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "icon", "type", "message", "description", "btn", "closeIcon"],
  setup(e) {
    const {
      getPrefixCls: t
    } = Ce("notification", e), n = w(() => e.prefixCls || t("notification")), o = w(() => `${n.value}-notice`), [, r] = cr(n);
    return () => v(Rn, N(N({}, e), {}, {
      prefixCls: n.value,
      class: G(r.value, `${o.value}-pure-panel`),
      noticeKey: "pure",
      duration: null,
      closable: e.closable,
      closeIcon: Ul(n.value, e.closeIcon)
    }), {
      default: () => [v(Gl, {
        prefixCls: o.value,
        icon: e.icon,
        type: e.type,
        message: e.message,
        description: e.description,
        btn: e.btn
      }, null)]
    });
  }
});
function Vl(e, t, n) {
  let o;
  switch (t = typeof t == "number" ? `${t}px` : t, n = typeof n == "number" ? `${n}px` : n, e) {
    case "top":
      o = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: t,
        bottom: "auto"
      };
      break;
    case "topLeft":
      o = {
        left: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "topRight":
      o = {
        right: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "bottom":
      o = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom: n
      };
      break;
    case "bottomLeft":
      o = {
        left: 0,
        top: "auto",
        bottom: n
      };
      break;
    default:
      o = {
        right: 0,
        top: "auto",
        bottom: n
      };
      break;
  }
  return o;
}
function qm(e) {
  return {
    name: `${e}-fade`
  };
}
var Qm = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const Ra = 24, Zm = 4.5, Jm = F({
  name: "Holder",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content", "onAllRemoved"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    const {
      getPrefixCls: o,
      getPopupContainer: r
    } = Ce("notification", e), a = w(() => e.prefixCls || o("notification")), i = (f) => {
      var g, h;
      return Vl(f, (g = e.top) !== null && g !== void 0 ? g : Ra, (h = e.bottom) !== null && h !== void 0 ? h : Ra);
    }, [, l] = cr(a), u = () => G(l.value, {
      [`${a.value}-rtl`]: e.rtl
    }), s = () => qm(a.value), [d, c] = Ml({
      prefixCls: a.value,
      getStyles: i,
      getClassName: u,
      motion: s,
      closable: !0,
      closeIcon: Ul(a.value),
      duration: Zm,
      getContainer: () => {
        var f, g;
        return ((f = e.getPopupContainer) === null || f === void 0 ? void 0 : f.call(e)) || ((g = r.value) === null || g === void 0 ? void 0 : g.call(r)) || document.body;
      },
      maxCount: e.maxCount,
      hashId: l.value,
      onAllRemoved: e.onAllRemoved
    });
    return n(p(p({}, d), {
      prefixCls: a.value,
      hashId: l
    })), c;
  }
});
function e0(e) {
  const t = D(null), n = Symbol("notificationHolderKey"), o = (l) => {
    if (!t.value)
      return;
    const {
      open: u,
      prefixCls: s,
      hashId: d
    } = t.value, c = `${s}-notice`, {
      message: f,
      description: g,
      icon: h,
      type: b,
      btn: S,
      class: y
    } = l, x = Qm(l, ["message", "description", "icon", "type", "btn", "class"]);
    return u(p(p({
      placement: "topRight"
    }, x), {
      content: () => v(Gl, {
        prefixCls: c,
        icon: typeof h == "function" ? h() : h,
        type: b,
        message: typeof f == "function" ? f() : f,
        description: typeof g == "function" ? g() : g,
        btn: typeof S == "function" ? S() : S
      }, null),
      // @ts-ignore
      class: G(b && `${c}-${b}`, d, y)
    }));
  }, a = {
    open: o,
    destroy: (l) => {
      var u, s;
      l !== void 0 ? (u = t.value) === null || u === void 0 || u.close(l) : (s = t.value) === null || s === void 0 || s.destroy();
    }
  };
  return ["success", "info", "warning", "error"].forEach((l) => {
    a[l] = (u) => o(p(p({}, u), {
      type: l
    }));
  }), [a, () => v(Jm, N(N({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function t0(e) {
  return e0(e);
}
const We = {};
let Kl = 4.5, Xl = "24px", Yl = "24px", Po = "", ql = "topRight", Ql = () => document.body, Zl = null, Eo = !1, Jl;
function n0(e) {
  const {
    duration: t,
    placement: n,
    bottom: o,
    top: r,
    getContainer: a,
    closeIcon: i,
    prefixCls: l
  } = e;
  l !== void 0 && (Po = l), t !== void 0 && (Kl = t), n !== void 0 && (ql = n), o !== void 0 && (Yl = typeof o == "number" ? `${o}px` : o), r !== void 0 && (Xl = typeof r == "number" ? `${r}px` : r), a !== void 0 && (Ql = a), i !== void 0 && (Zl = i), e.rtl !== void 0 && (Eo = e.rtl), e.maxCount !== void 0 && (Jl = e.maxCount);
}
function o0(e, t) {
  let {
    prefixCls: n,
    placement: o = ql,
    getContainer: r = Ql,
    top: a,
    bottom: i,
    closeIcon: l = Zl,
    appContext: u
  } = e;
  const {
    getPrefixCls: s
  } = v0(), d = s("notification", n || Po), c = `${d}-${o}-${Eo}`, f = We[c];
  if (f) {
    Promise.resolve(f).then((h) => {
      t(h);
    });
    return;
  }
  const g = G(`${d}-${o}`, {
    [`${d}-rtl`]: Eo === !0
  });
  _l.newInstance({
    name: "notification",
    prefixCls: n || Po,
    useStyle: cr,
    class: g,
    style: Vl(o, a ?? Xl, i ?? Yl),
    appContext: u,
    getContainer: r,
    closeIcon: (h) => {
      let {
        prefixCls: b
      } = h;
      return v("span", {
        class: `${b}-close-x`
      }, [lt(l, {}, v(Nn, {
        class: `${b}-close-icon`
      }, null))]);
    },
    maxCount: Jl,
    hasTransitionName: !0
  }, (h) => {
    We[c] = h, t(h);
  });
}
const r0 = {
  success: xg,
  info: Ag,
  error: jg,
  warning: Tg
};
function a0(e) {
  const {
    icon: t,
    type: n,
    description: o,
    message: r,
    btn: a
  } = e, i = e.duration === void 0 ? Kl : e.duration;
  o0(e, (l) => {
    l.notice({
      content: (u) => {
        let {
          prefixCls: s
        } = u;
        const d = `${s}-notice`;
        let c = null;
        if (t)
          c = () => v("span", {
            class: `${d}-icon`
          }, [lt(t)]);
        else if (n) {
          const f = r0[n];
          c = () => v(f, {
            class: `${d}-icon ${d}-icon-${n}`
          }, null);
        }
        return v("div", {
          class: c ? `${d}-with-icon` : ""
        }, [c && c(), v("div", {
          class: `${d}-message`
        }, [!o && c ? v("span", {
          class: `${d}-message-single-line-auto-margin`
        }, null) : null, lt(r)]), v("div", {
          class: `${d}-description`
        }, [lt(o)]), a ? v("span", {
          class: `${d}-btn`
        }, [lt(a)]) : null]);
      },
      duration: i,
      closable: !0,
      onClose: e.onClose,
      onClick: e.onClick,
      key: e.key,
      style: e.style || {},
      class: e.class
    });
  });
}
const vt = {
  open: a0,
  close(e) {
    Object.keys(We).forEach((t) => Promise.resolve(We[t]).then((n) => {
      n.removeNotice(e);
    }));
  },
  config: n0,
  destroy() {
    Object.keys(We).forEach((e) => {
      Promise.resolve(We[e]).then((t) => {
        t.destroy();
      }), delete We[e];
    });
  }
}, i0 = ["success", "info", "warning", "error"];
i0.forEach((e) => {
  vt[e] = (t) => vt.open(p(p({}, t), {
    type: e
  }));
});
vt.warn = vt.warning;
vt.useNotification = t0;
const l0 = vt, c0 = `-ant-${Date.now()}-${Math.random()}`;
function s0(e, t) {
  const n = {}, o = (i, l) => {
    let u = i.clone();
    return u = (l == null ? void 0 : l(u)) || u, u.toRgbString();
  }, r = (i, l) => {
    const u = new Z(i), s = Ze(u.toRgbString());
    n[`${l}-color`] = o(u), n[`${l}-color-disabled`] = s[1], n[`${l}-color-hover`] = s[4], n[`${l}-color-active`] = s[6], n[`${l}-color-outline`] = u.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = s[0], n[`${l}-color-deprecated-border`] = s[2];
  };
  if (t.primaryColor) {
    r(t.primaryColor, "primary");
    const i = new Z(t.primaryColor), l = Ze(i.toRgbString());
    l.forEach((s, d) => {
      n[`primary-${d + 1}`] = s;
    }), n["primary-color-deprecated-l-35"] = o(i, (s) => s.lighten(35)), n["primary-color-deprecated-l-20"] = o(i, (s) => s.lighten(20)), n["primary-color-deprecated-t-20"] = o(i, (s) => s.tint(20)), n["primary-color-deprecated-t-50"] = o(i, (s) => s.tint(50)), n["primary-color-deprecated-f-12"] = o(i, (s) => s.setAlpha(s.getAlpha() * 0.12));
    const u = new Z(l[0]);
    n["primary-color-active-deprecated-f-30"] = o(u, (s) => s.setAlpha(s.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = o(u, (s) => s.darken(2));
  }
  return t.successColor && r(t.successColor, "success"), t.warningColor && r(t.warningColor, "warning"), t.errorColor && r(t.errorColor, "error"), t.infoColor && r(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function u0(e, t) {
  const n = s0(e, t);
  ve() ? Rt(n, `${c0}-dynamic-theme`) : kt(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const d0 = (e) => {
  const [t, n] = Wt();
  return so(w(() => ({
    theme: t.value,
    token: n.value,
    hashId: "",
    path: ["ant-design-icons", e.value]
  })), () => [{
    [`.${e.value}`]: p(p({}, Eu()), {
      [`.${e.value} .${e.value}-icon`]: {
        display: "block"
      }
    })
  }]);
};
function f0(e, t) {
  const n = w(() => (e == null ? void 0 : e.value) || {}), o = w(() => n.value.inherit === !1 || !(t != null && t.value) ? Bi : t.value);
  return w(() => {
    if (!(e != null && e.value))
      return t == null ? void 0 : t.value;
    const a = p({}, o.value.components);
    return Object.keys(e.value.components || {}).forEach((i) => {
      a[i] = p(p({}, a[i]), e.value.components[i]);
    }), p(p(p({}, o.value), n.value), {
      token: p(p({}, o.value.token), n.value.token),
      components: a
    });
  });
}
var p0 = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
const g0 = "ant";
function ut() {
  return Q.prefixCls || g0;
}
function ec() {
  return Q.iconPrefixCls || jo;
}
const sr = Re({}), Q = Re({});
Ie(() => {
  p(Q, sr), Q.prefixCls = ut(), Q.iconPrefixCls = ec(), Q.getPrefixCls = (e, t) => t || (e ? `${Q.prefixCls}-${e}` : Q.prefixCls), Q.getRootPrefixCls = () => Q.prefixCls ? Q.prefixCls : ut();
});
let Qn;
const m0 = (e) => {
  Qn && Qn(), Qn = Ie(() => {
    p(sr, Re(e)), p(Q, Re(e));
  }), e.theme && u0(ut(), e.theme);
}, v0 = () => ({
  getPrefixCls: (e, t) => t || (e ? `${ut()}-${e}` : ut()),
  getIconPrefixCls: ec,
  getRootPrefixCls: () => Q.prefixCls ? Q.prefixCls : ut()
}), At = F({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: Lc(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = Tn(), r = (C, A) => {
      const {
        prefixCls: B = "ant"
      } = e;
      if (A)
        return A;
      const z = B || o.getPrefixCls("");
      return C ? `${z}-${C}` : z;
    }, a = w(() => e.iconPrefixCls || o.iconPrefixCls.value || jo), i = w(() => a.value !== o.iconPrefixCls.value), l = w(() => {
      var C;
      return e.csp || ((C = o.csp) === null || C === void 0 ? void 0 : C.value);
    }), u = d0(a), s = f0(w(() => e.theme), w(() => {
      var C;
      return (C = o.theme) === null || C === void 0 ? void 0 : C.value;
    })), d = (C) => (e.renderEmpty || n.renderEmpty || o.renderEmpty || Uu)(C), c = w(() => {
      var C, A;
      return (C = e.autoInsertSpaceInButton) !== null && C !== void 0 ? C : (A = o.autoInsertSpaceInButton) === null || A === void 0 ? void 0 : A.value;
    }), f = w(() => {
      var C;
      return e.locale || ((C = o.locale) === null || C === void 0 ? void 0 : C.value);
    });
    Y(f, () => {
      sr.locale = f.value;
    }, {
      immediate: !0
    });
    const g = w(() => {
      var C;
      return e.direction || ((C = o.direction) === null || C === void 0 ? void 0 : C.value);
    }), h = w(() => {
      var C, A;
      return (C = e.space) !== null && C !== void 0 ? C : (A = o.space) === null || A === void 0 ? void 0 : A.value;
    }), b = w(() => {
      var C, A;
      return (C = e.virtual) !== null && C !== void 0 ? C : (A = o.virtual) === null || A === void 0 ? void 0 : A.value;
    }), S = w(() => {
      var C, A;
      return (C = e.dropdownMatchSelectWidth) !== null && C !== void 0 ? C : (A = o.dropdownMatchSelectWidth) === null || A === void 0 ? void 0 : A.value;
    }), y = w(() => {
      var C;
      return e.getTargetContainer !== void 0 ? e.getTargetContainer : (C = o.getTargetContainer) === null || C === void 0 ? void 0 : C.value;
    }), x = w(() => {
      var C;
      return e.getPopupContainer !== void 0 ? e.getPopupContainer : (C = o.getPopupContainer) === null || C === void 0 ? void 0 : C.value;
    }), O = w(() => {
      var C;
      return e.pageHeader !== void 0 ? e.pageHeader : (C = o.pageHeader) === null || C === void 0 ? void 0 : C.value;
    }), E = w(() => {
      var C;
      return e.input !== void 0 ? e.input : (C = o.input) === null || C === void 0 ? void 0 : C.value;
    }), P = w(() => {
      var C;
      return e.pagination !== void 0 ? e.pagination : (C = o.pagination) === null || C === void 0 ? void 0 : C.value;
    }), T = w(() => {
      var C;
      return e.form !== void 0 ? e.form : (C = o.form) === null || C === void 0 ? void 0 : C.value;
    }), m = w(() => {
      var C;
      return e.select !== void 0 ? e.select : (C = o.select) === null || C === void 0 ? void 0 : C.value;
    }), $ = w(() => e.componentSize), I = w(() => e.componentDisabled), M = w(() => {
      var C, A;
      return (C = e.wave) !== null && C !== void 0 ? C : (A = o.wave) === null || A === void 0 ? void 0 : A.value;
    }), H = {
      csp: l,
      autoInsertSpaceInButton: c,
      locale: f,
      direction: g,
      space: h,
      virtual: b,
      dropdownMatchSelectWidth: S,
      getPrefixCls: r,
      iconPrefixCls: a,
      theme: w(() => {
        var C, A;
        return (C = s.value) !== null && C !== void 0 ? C : (A = o.theme) === null || A === void 0 ? void 0 : A.value;
      }),
      renderEmpty: d,
      getTargetContainer: y,
      getPopupContainer: x,
      pageHeader: O,
      input: E,
      pagination: P,
      form: T,
      select: m,
      componentSize: $,
      componentDisabled: I,
      transformCellText: w(() => e.transformCellText),
      wave: M
    }, L = w(() => {
      const C = s.value || {}, {
        algorithm: A,
        token: B
      } = C, z = p0(C, ["algorithm", "token"]), re = A && (!Array.isArray(A) || A.length > 0) ? yi(A) : void 0;
      return p(p({}, z), {
        theme: re,
        token: p(p({}, _n), B)
      });
    }), _ = w(() => {
      var C, A;
      let B = {};
      return f.value && (B = ((C = f.value.Form) === null || C === void 0 ? void 0 : C.defaultValidateMessages) || ((A = Qe.Form) === null || A === void 0 ? void 0 : A.defaultValidateMessages) || {}), e.form && e.form.validateMessages && (B = p(p({}, B), e.form.validateMessages)), B;
    });
    zc(H), Dc({
      validateMessages: _
    }), Gu($), kc(I);
    const R = (C) => {
      var A, B;
      let z = i.value ? u((A = n.default) === null || A === void 0 ? void 0 : A.call(n)) : (B = n.default) === null || B === void 0 ? void 0 : B.call(n);
      if (e.theme) {
        const re = /* @__PURE__ */ function() {
          return z;
        }();
        z = v(Hu, {
          value: L.value
        }, {
          default: () => [re]
        });
      }
      return v(xm, {
        locale: f.value || C,
        ANT_MARK__: Oo
      }, {
        default: () => [z]
      });
    };
    return Ie(() => {
      g.value && (Wl.config({
        rtl: g.value === "rtl"
      }), l0.config({
        rtl: g.value === "rtl"
      }));
    }), () => v(ii, {
      children: (C, A, B) => R(B)
    }, null);
  }
});
At.config = m0;
At.install = function(e) {
  e.component(At.name, At);
};
const tc = At;
function ur() {
  return {
    keyboard: {
      type: Boolean,
      default: void 0
    },
    mask: {
      type: Boolean,
      default: void 0
    },
    afterClose: Function,
    closable: {
      type: Boolean,
      default: void 0
    },
    maskClosable: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    destroyOnClose: {
      type: Boolean,
      default: void 0
    },
    mousePosition: U.shape({
      x: Number,
      y: Number
    }).loose,
    title: U.any,
    footer: U.any,
    transitionName: String,
    maskTransitionName: String,
    animation: U.any,
    maskAnimation: U.any,
    wrapStyle: {
      type: Object,
      default: void 0
    },
    bodyStyle: {
      type: Object,
      default: void 0
    },
    maskStyle: {
      type: Object,
      default: void 0
    },
    prefixCls: String,
    wrapClassName: String,
    rootClassName: String,
    width: [String, Number],
    height: [String, Number],
    zIndex: Number,
    bodyProps: U.any,
    maskProps: U.any,
    wrapProps: U.any,
    getContainer: U.any,
    dialogStyle: {
      type: Object,
      default: void 0
    },
    dialogClass: String,
    closeIcon: U.any,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getOpenCount: Function,
    // https://github.com/ant-design/ant-design/issues/19771
    // https://github.com/react-component/dialog/issues/95
    focusTriggerAfterClose: {
      type: Boolean,
      default: void 0
    },
    onClose: Function,
    modalRender: Function
  };
}
function Ba(e, t, n) {
  let o = t;
  return !o && n && (o = `${e}-${n}`), o;
}
let Ha = -1;
function h0() {
  return Ha += 1, Ha;
}
function Fa(e, t) {
  let n = e[`page${t ? "Y" : "X"}Offset`];
  const o = `scroll${t ? "Top" : "Left"}`;
  if (typeof n != "number") {
    const r = e.document;
    n = r.documentElement[o], typeof n != "number" && (n = r.body[o]);
  }
  return n;
}
function y0(e) {
  const t = e.getBoundingClientRect(), n = {
    left: t.left,
    top: t.top
  }, o = e.ownerDocument, r = o.defaultView || o.parentWindow;
  return n.left += Fa(r), n.top += Fa(r, !0), n;
}
const Da = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, b0 = F({
  compatConfig: {
    MODE: 3
  },
  name: "DialogContent",
  inheritAttrs: !1,
  props: p(p({}, ur()), {
    motionName: String,
    ariaId: String,
    onVisibleChanged: Function,
    onMousedown: Function,
    onMouseup: Function
  }),
  setup(e, t) {
    let {
      expose: n,
      slots: o,
      attrs: r
    } = t;
    const a = k(), i = k(), l = k();
    n({
      focus: () => {
        var f;
        (f = a.value) === null || f === void 0 || f.focus();
      },
      changeActive: (f) => {
        const {
          activeElement: g
        } = document;
        f && g === i.value ? a.value.focus() : !f && g === a.value && i.value.focus();
      }
    });
    const u = k(), s = w(() => {
      const {
        width: f,
        height: g
      } = e, h = {};
      return f !== void 0 && (h.width = typeof f == "number" ? `${f}px` : f), g !== void 0 && (h.height = typeof g == "number" ? `${g}px` : g), u.value && (h.transformOrigin = u.value), h;
    }), d = () => {
      je(() => {
        if (l.value) {
          const f = y0(l.value);
          u.value = e.mousePosition ? `${e.mousePosition.x - f.left}px ${e.mousePosition.y - f.top}px` : "";
        }
      });
    }, c = (f) => {
      e.onVisibleChanged(f);
    };
    return () => {
      var f, g, h, b;
      const {
        prefixCls: S,
        footer: y = (f = o.footer) === null || f === void 0 ? void 0 : f.call(o),
        title: x = (g = o.title) === null || g === void 0 ? void 0 : g.call(o),
        ariaId: O,
        closable: E,
        closeIcon: P = (h = o.closeIcon) === null || h === void 0 ? void 0 : h.call(o),
        onClose: T,
        bodyStyle: m,
        bodyProps: $,
        onMousedown: I,
        onMouseup: M,
        visible: H,
        modalRender: L = o.modalRender,
        destroyOnClose: _,
        motionName: R
      } = e;
      let C;
      y && (C = v("div", {
        class: `${S}-footer`
      }, [y]));
      let A;
      x && (A = v("div", {
        class: `${S}-header`
      }, [v("div", {
        class: `${S}-title`,
        id: O
      }, [x])]));
      let B;
      E && (B = v("button", {
        type: "button",
        onClick: T,
        "aria-label": "Close",
        class: `${S}-close`
      }, [P || v("span", {
        class: `${S}-close-x`
      }, null)]));
      const z = v("div", {
        class: `${S}-content`
      }, [B, A, v("div", N({
        class: `${S}-body`,
        style: m
      }, $), [(b = o.default) === null || b === void 0 ? void 0 : b.call(o)]), C]), re = dl(R);
      return v(On, N(N({}, re), {}, {
        onBeforeEnter: d,
        onAfterEnter: () => c(!0),
        onAfterLeave: () => c(!1)
      }), {
        default: () => [H || !_ ? Xa(v("div", N(N({}, r), {}, {
          ref: l,
          key: "dialog-element",
          role: "document",
          style: [s.value, r.style],
          class: [S, r.class],
          onMousedown: I,
          onMouseup: M
        }), [v("div", {
          tabindex: 0,
          ref: a,
          style: Da,
          "aria-hidden": "true"
        }, null), L ? L({
          originVNode: z
        }) : z, v("div", {
          tabindex: 0,
          ref: i,
          style: Da,
          "aria-hidden": "true"
        }, null)]), [[Ya, H]]) : null]
      });
    };
  }
}), C0 = F({
  compatConfig: {
    MODE: 3
  },
  name: "DialogMask",
  props: {
    prefixCls: String,
    visible: Boolean,
    motionName: String,
    maskProps: Object
  },
  setup(e, t) {
    return () => {
      const {
        prefixCls: n,
        visible: o,
        maskProps: r,
        motionName: a
      } = e, i = dl(a);
      return v(On, i, {
        default: () => [Xa(v("div", N({
          class: `${n}-mask`
        }, r), null), [[Ya, o]])]
      });
    };
  }
}), La = F({
  compatConfig: {
    MODE: 3
  },
  name: "VcDialog",
  inheritAttrs: !1,
  props: zt(p(p({}, ur()), {
    getOpenCount: Function,
    scrollLocker: Object
  }), {
    mask: !0,
    visible: !1,
    keyboard: !0,
    closable: !0,
    maskClosable: !0,
    destroyOnClose: !1,
    prefixCls: "rc-dialog",
    getOpenCount: () => null,
    focusTriggerAfterClose: !0
  }),
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    const r = D(), a = D(), i = D(), l = D(e.visible), u = D(`vcDialogTitle${h0()}`), s = (y) => {
      var x, O;
      if (y)
        di(a.value, document.activeElement) || (r.value = document.activeElement, (x = i.value) === null || x === void 0 || x.focus());
      else {
        const E = l.value;
        if (l.value = !1, e.mask && r.value && e.focusTriggerAfterClose) {
          try {
            r.value.focus({
              preventScroll: !0
            });
          } catch {
          }
          r.value = null;
        }
        E && ((O = e.afterClose) === null || O === void 0 || O.call(e));
      }
    }, d = (y) => {
      var x;
      (x = e.onClose) === null || x === void 0 || x.call(e, y);
    }, c = D(!1), f = D(), g = () => {
      clearTimeout(f.value), c.value = !0;
    }, h = () => {
      f.value = setTimeout(() => {
        c.value = !1;
      });
    }, b = (y) => {
      if (!e.maskClosable)
        return null;
      c.value ? c.value = !1 : a.value === y.target && d(y);
    }, S = (y) => {
      if (e.keyboard && y.keyCode === na.ESC) {
        y.stopPropagation(), d(y);
        return;
      }
      e.visible && y.keyCode === na.TAB && i.value.changeActive(!y.shiftKey);
    };
    return Y(() => e.visible, () => {
      e.visible && (l.value = !0);
    }, {
      flush: "post"
    }), Be(() => {
      var y;
      clearTimeout(f.value), (y = e.scrollLocker) === null || y === void 0 || y.unLock();
    }), Ie(() => {
      var y, x;
      (y = e.scrollLocker) === null || y === void 0 || y.unLock(), l.value && ((x = e.scrollLocker) === null || x === void 0 || x.lock());
    }), () => {
      const {
        prefixCls: y,
        mask: x,
        visible: O,
        maskTransitionName: E,
        maskAnimation: P,
        zIndex: T,
        wrapClassName: m,
        rootClassName: $,
        wrapStyle: I,
        closable: M,
        maskProps: H,
        maskStyle: L,
        transitionName: _,
        animation: R,
        wrapProps: C,
        title: A = o.title
      } = e, {
        style: B,
        class: z
      } = n;
      return v("div", N({
        class: [`${y}-root`, $]
      }, Qf(e, {
        data: !0
      })), [v(C0, {
        prefixCls: y,
        visible: x && O,
        motionName: Ba(y, E, P),
        style: p({
          zIndex: T
        }, L),
        maskProps: H
      }, null), v("div", N({
        tabIndex: -1,
        onKeydown: S,
        class: G(`${y}-wrap`, m),
        ref: a,
        onClick: b,
        role: "dialog",
        "aria-labelledby": A ? u.value : null,
        style: p(p({
          zIndex: T
        }, I), {
          display: l.value ? null : "none"
        })
      }, C), [v(b0, N(N({}, Gi(e, ["scrollLocker"])), {}, {
        style: B,
        class: z,
        onMousedown: g,
        onMouseup: h,
        ref: i,
        closable: M,
        ariaId: u.value,
        prefixCls: y,
        visible: O,
        onClose: d,
        onVisibleChanged: s,
        motionName: Ba(y, _, R)
      }), o)])]);
    };
  }
}), S0 = ur(), x0 = F({
  compatConfig: {
    MODE: 3
  },
  name: "DialogWrap",
  inheritAttrs: !1,
  props: zt(S0, {
    visible: !1
  }),
  setup(e, t) {
    let {
      attrs: n,
      slots: o
    } = t;
    const r = k(e.visible);
    return gl({}, {
      inTriggerContext: !1
    }), Y(() => e.visible, () => {
      e.visible && (r.value = !0);
    }, {
      flush: "post"
    }), () => {
      const {
        visible: a,
        getContainer: i,
        forceRender: l,
        destroyOnClose: u = !1,
        afterClose: s
      } = e;
      let d = p(p(p({}, e), n), {
        ref: "_component",
        key: "dialog"
      });
      return i === !1 ? v(La, N(N({}, d), {}, {
        getOpenCount: () => 2
      }), o) : !l && u && !r.value ? null : v(Vf, {
        autoLock: !0,
        visible: a,
        forceRender: l,
        getContainer: i
      }, {
        default: (c) => (d = p(p(p({}, d), c), {
          afterClose: () => {
            s == null || s(), r.value = !1;
          }
        }), v(La, d, o))
      });
    };
  }
}), $0 = x0;
function za(e) {
  return {
    position: e,
    top: 0,
    insetInlineEnd: 0,
    bottom: 0,
    insetInlineStart: 0
  };
}
const w0 = (e) => {
  const {
    componentCls: t
  } = e;
  return [{
    [`${t}-root`]: {
      [`${t}${e.antCls}-zoom-enter, ${t}${e.antCls}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: e.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      [`${t}${e.antCls}-zoom-leave ${t}-content`]: {
        pointerEvents: "none"
      },
      [`${t}-mask`]: p(p({}, za("fixed")), {
        zIndex: e.zIndexPopupBase,
        height: "100%",
        backgroundColor: e.colorBgMask,
        [`${t}-hidden`]: {
          display: "none"
        }
      }),
      [`${t}-wrap`]: p(p({}, za("fixed")), {
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${t}-root`]: og(e)
  }];
}, O0 = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    // ======================== Root =========================
    {
      [`${t}-root`]: {
        [`${t}-wrap`]: {
          zIndex: e.zIndexPopupBase,
          position: "fixed",
          inset: 0,
          overflow: "auto",
          outline: 0,
          WebkitOverflowScrolling: "touch"
        },
        [`${t}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${t}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [t]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${e.screenSMMax})`]: {
          [t]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${e.marginXS} auto`
          },
          [`${t}-centered`]: {
            [t]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [t]: p(p({}, ko(e)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${e.margin * 2}px)`,
        margin: "0 auto",
        paddingBottom: e.paddingLG,
        [`${t}-title`]: {
          margin: 0,
          color: e.modalHeadingColor,
          fontWeight: e.fontWeightStrong,
          fontSize: e.modalHeaderTitleFontSize,
          lineHeight: e.modalHeaderTitleLineHeight,
          wordWrap: "break-word"
        },
        [`${t}-content`]: {
          position: "relative",
          backgroundColor: e.modalContentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: e.borderRadiusLG,
          boxShadow: e.boxShadowSecondary,
          pointerEvents: "auto",
          padding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`
        },
        [`${t}-close`]: p({
          position: "absolute",
          top: (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
          insetInlineEnd: (e.modalHeaderCloseSize - e.modalCloseBtnSize) / 2,
          zIndex: e.zIndexPopupBase + 10,
          padding: 0,
          color: e.modalCloseColor,
          fontWeight: e.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: e.borderRadiusSM,
          width: e.modalConfirmIconSize,
          height: e.modalConfirmIconSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
          "&-x": {
            display: "block",
            fontSize: e.fontSizeLG,
            fontStyle: "normal",
            lineHeight: `${e.modalCloseBtnSize}px`,
            textAlign: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:hover": {
            color: e.modalIconHoverColor,
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContent,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContentHover
          }
        }, ji(e)),
        [`${t}-header`]: {
          color: e.colorText,
          background: e.modalHeaderBg,
          borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
          marginBottom: e.marginXS
        },
        [`${t}-body`]: {
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          wordWrap: "break-word"
        },
        [`${t}-footer`]: {
          textAlign: "end",
          background: e.modalFooterBg,
          marginTop: e.marginSM,
          [`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]: {
            marginBottom: 0,
            marginInlineStart: e.marginXS
          }
        },
        [`${t}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${t}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${t}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
}, T0 = (e) => {
  const {
    componentCls: t
  } = e, n = `${t}-confirm`;
  return {
    [n]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${e.antCls}-modal-header`]: {
        display: "none"
      },
      [`${n}-body-wrapper`]: p({}, Iu()),
      [`${n}-body`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        [`${n}-title`]: {
          flex: "0 0 100%",
          display: "block",
          // create BFC to avoid
          // https://user-images.githubusercontent.com/507615/37702510-ba844e06-2d2d-11e8-9b67-8e19be57f445.png
          overflow: "hidden",
          color: e.colorTextHeading,
          fontWeight: e.fontWeightStrong,
          fontSize: e.modalHeaderTitleFontSize,
          lineHeight: e.modalHeaderTitleLineHeight,
          [`+ ${n}-content`]: {
            marginBlockStart: e.marginXS,
            flexBasis: "100%",
            maxWidth: `calc(100% - ${e.modalConfirmIconSize + e.marginSM}px)`
          }
        },
        [`${n}-content`]: {
          color: e.colorText,
          fontSize: e.fontSize
        },
        [`> ${e.iconCls}`]: {
          flex: "none",
          marginInlineEnd: e.marginSM,
          fontSize: e.modalConfirmIconSize,
          [`+ ${n}-title`]: {
            flex: 1
          },
          // `content` after `icon` should set marginLeft
          [`+ ${n}-title + ${n}-content`]: {
            marginInlineStart: e.modalConfirmIconSize + e.marginSM
          }
        }
      },
      [`${n}-btns`]: {
        textAlign: "end",
        marginTop: e.marginSM,
        [`${e.antCls}-btn + ${e.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: e.marginXS
        }
      }
    },
    [`${n}-error ${n}-body > ${e.iconCls}`]: {
      color: e.colorError
    },
    [`${n}-warning ${n}-body > ${e.iconCls},
        ${n}-confirm ${n}-body > ${e.iconCls}`]: {
      color: e.colorWarning
    },
    [`${n}-info ${n}-body > ${e.iconCls}`]: {
      color: e.colorInfo
    },
    [`${n}-success ${n}-body > ${e.iconCls}`]: {
      color: e.colorSuccess
    },
    // https://github.com/ant-design/ant-design/issues/37329
    [`${t}-zoom-leave ${t}-btns`]: {
      pointerEvents: "none"
    }
  };
}, P0 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-root`]: {
      [`${t}-wrap-rtl`]: {
        direction: "rtl",
        [`${t}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
}, E0 = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e, o = `${t}-confirm`;
  return {
    [t]: {
      [`${t}-content`]: {
        padding: 0
      },
      [`${t}-header`]: {
        padding: e.modalHeaderPadding,
        borderBottom: `${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,
        marginBottom: 0
      },
      [`${t}-body`]: {
        padding: e.modalBodyPadding
      },
      [`${t}-footer`]: {
        padding: `${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,
        borderTop: `${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,
        borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
        marginTop: 0
      }
    },
    [o]: {
      [`${n}-modal-body`]: {
        padding: `${e.padding * 2}px ${e.padding * 2}px ${e.paddingLG}px`
      },
      [`${o}-body`]: {
        [`> ${e.iconCls}`]: {
          marginInlineEnd: e.margin,
          // `content` after `icon` should set marginLeft
          [`+ ${o}-title + ${o}-content`]: {
            marginInlineStart: e.modalConfirmIconSize + e.margin
          }
        }
      },
      [`${o}-btns`]: {
        marginTop: e.marginLG
      }
    }
  };
}, I0 = et("Modal", (e) => {
  const t = e.padding, n = e.fontSizeHeading5, o = e.lineHeightHeading5, r = He(e, {
    modalBodyPadding: e.paddingLG,
    modalHeaderBg: e.colorBgElevated,
    modalHeaderPadding: `${t}px ${e.paddingLG}px`,
    modalHeaderBorderWidth: e.lineWidth,
    modalHeaderBorderStyle: e.lineType,
    modalHeaderTitleLineHeight: o,
    modalHeaderTitleFontSize: n,
    modalHeaderBorderColorSplit: e.colorSplit,
    modalHeaderCloseSize: o * n + t * 2,
    modalContentBg: e.colorBgElevated,
    modalHeadingColor: e.colorTextHeading,
    modalCloseColor: e.colorTextDescription,
    modalFooterBg: "transparent",
    modalFooterBorderColorSplit: e.colorSplit,
    modalFooterBorderStyle: e.lineType,
    modalFooterPaddingVertical: e.paddingXS,
    modalFooterPaddingHorizontal: e.padding,
    modalFooterBorderWidth: e.lineWidth,
    modalConfirmTitleFontSize: e.fontSizeLG,
    modalIconHoverColor: e.colorIconHover,
    modalConfirmIconSize: e.fontSize * e.lineHeight,
    modalCloseBtnSize: e.controlHeightLG * 0.55
  });
  return [O0(r), T0(r), P0(r), w0(r), e.wireframe && E0(r), mg(r, "zoom")];
});
var A0 = function(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
};
let Io;
const _0 = (e) => {
  Io = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(() => Io = null, 100);
};
bm() && Hc(document.documentElement, "click", _0, !0);
const M0 = () => ({
  prefixCls: String,
  /** @deprecated Please use `open` instead. */
  visible: {
    type: Boolean,
    default: void 0
  },
  open: {
    type: Boolean,
    default: void 0
  },
  confirmLoading: {
    type: Boolean,
    default: void 0
  },
  title: U.any,
  closable: {
    type: Boolean,
    default: void 0
  },
  closeIcon: U.any,
  onOk: Function,
  onCancel: Function,
  "onUpdate:visible": Function,
  "onUpdate:open": Function,
  onChange: Function,
  afterClose: Function,
  centered: {
    type: Boolean,
    default: void 0
  },
  width: [String, Number],
  footer: U.any,
  okText: U.any,
  okType: String,
  cancelText: U.any,
  icon: U.any,
  maskClosable: {
    type: Boolean,
    default: void 0
  },
  forceRender: {
    type: Boolean,
    default: void 0
  },
  okButtonProps: K(),
  cancelButtonProps: K(),
  destroyOnClose: {
    type: Boolean,
    default: void 0
  },
  wrapClassName: String,
  maskTransitionName: String,
  transitionName: String,
  getContainer: {
    type: [String, Function, Boolean, Object],
    default: void 0
  },
  zIndex: Number,
  bodyStyle: K(),
  maskStyle: K(),
  mask: {
    type: Boolean,
    default: void 0
  },
  keyboard: {
    type: Boolean,
    default: void 0
  },
  wrapProps: Object,
  focusTriggerAfterClose: {
    type: Boolean,
    default: void 0
  },
  modalRender: Function,
  mousePosition: K()
}), se = F({
  compatConfig: {
    MODE: 3
  },
  name: "AModal",
  inheritAttrs: !1,
  props: zt(M0(), {
    width: 520,
    confirmLoading: !1,
    okType: "primary"
  }),
  setup(e, t) {
    let {
      emit: n,
      slots: o,
      attrs: r
    } = t;
    const [a] = Ho("Modal"), {
      prefixCls: i,
      rootPrefixCls: l,
      direction: u,
      getPopupContainer: s
    } = Ce("modal", e), [d, c] = I0(i);
    kt(e.visible === void 0, "Modal", "`visible` will be removed in next major version, please use `open` instead.");
    const f = (b) => {
      n("update:visible", !1), n("update:open", !1), n("cancel", b), n("change", !1);
    }, g = (b) => {
      n("ok", b);
    }, h = () => {
      var b, S;
      const {
        okText: y = (b = o.okText) === null || b === void 0 ? void 0 : b.call(o),
        okType: x,
        cancelText: O = (S = o.cancelText) === null || S === void 0 ? void 0 : S.call(o),
        confirmLoading: E
      } = e;
      return v(dt, null, [v(Ye, N({
        onClick: f
      }, e.cancelButtonProps), {
        default: () => [O || a.value.cancelText]
      }), v(Ye, N(N({}, Pl(x)), {}, {
        loading: E,
        onClick: g
      }, e.okButtonProps), {
        default: () => [y || a.value.okText]
      })]);
    };
    return () => {
      var b, S;
      const {
        prefixCls: y,
        visible: x,
        open: O,
        wrapClassName: E,
        centered: P,
        getContainer: T,
        closeIcon: m = (b = o.closeIcon) === null || b === void 0 ? void 0 : b.call(o),
        focusTriggerAfterClose: $ = !0
      } = e, I = A0(e, ["prefixCls", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]), M = G(E, {
        [`${i.value}-centered`]: !!P,
        [`${i.value}-wrap-rtl`]: u.value === "rtl"
      });
      return d(v($0, N(N(N({}, I), r), {}, {
        rootClassName: c.value,
        class: G(c.value, r.class),
        getContainer: T || (s == null ? void 0 : s.value),
        prefixCls: i.value,
        wrapClassName: M,
        visible: O ?? x,
        onClose: f,
        focusTriggerAfterClose: $,
        transitionName: xn(l.value, "zoom", e.transitionName),
        maskTransitionName: xn(l.value, "fade", e.maskTransitionName),
        mousePosition: (S = I.mousePosition) !== null && S !== void 0 ? S : Io
      }), p(p({}, o), {
        footer: o.footer || h,
        closeIcon: () => v("span", {
          class: `${i.value}-close-x`
        }, [m || v(Nn, {
          class: `${i.value}-close-icon`
        }, null)])
      })));
    };
  }
}), N0 = () => {
  const e = D(!1);
  return Be(() => {
    e.value = !0;
  }), e;
}, j0 = {
  type: {
    type: String
  },
  actionFn: Function,
  close: Function,
  autofocus: Boolean,
  prefixCls: String,
  buttonProps: K(),
  emitEvent: Boolean,
  quitOnNullishReturnValue: Boolean
};
function ka(e) {
  return !!(e && e.then);
}
const Wa = F({
  compatConfig: {
    MODE: 3
  },
  name: "ActionButton",
  props: j0,
  setup(e, t) {
    let {
      slots: n
    } = t;
    const o = D(!1), r = D(), a = D(!1);
    let i;
    const l = N0();
    Ae(() => {
      e.autofocus && (i = setTimeout(() => {
        var c, f;
        return (f = (c = vn(r.value)) === null || c === void 0 ? void 0 : c.focus) === null || f === void 0 ? void 0 : f.call(c);
      }));
    }), Be(() => {
      clearTimeout(i);
    });
    const u = function() {
      for (var c, f = arguments.length, g = new Array(f), h = 0; h < f; h++)
        g[h] = arguments[h];
      (c = e.close) === null || c === void 0 || c.call(e, ...g);
    }, s = (c) => {
      ka(c) && (a.value = !0, c.then(function() {
        l.value || (a.value = !1), u(...arguments), o.value = !1;
      }, (f) => (l.value || (a.value = !1), o.value = !1, Promise.reject(f))));
    }, d = (c) => {
      const {
        actionFn: f
      } = e;
      if (o.value)
        return;
      if (o.value = !0, !f) {
        u();
        return;
      }
      let g;
      if (e.emitEvent) {
        if (g = f(c), e.quitOnNullishReturnValue && !ka(g)) {
          o.value = !1, u(c);
          return;
        }
      } else if (f.length)
        g = f(e.close), o.value = !1;
      else if (g = f(), !g) {
        u();
        return;
      }
      s(g);
    };
    return () => {
      const {
        type: c,
        prefixCls: f,
        buttonProps: g
      } = e;
      return v(Ye, N(N(N({}, Pl(c)), {}, {
        onClick: d,
        loading: a.value,
        prefixCls: f
      }, g), {}, {
        ref: r
      }), n);
    };
  }
});
function at(e) {
  return typeof e == "function" ? e() : e;
}
const nc = F({
  name: "ConfirmDialog",
  inheritAttrs: !1,
  props: ["icon", "onCancel", "onOk", "close", "closable", "zIndex", "afterClose", "visible", "open", "keyboard", "centered", "getContainer", "maskStyle", "okButtonProps", "cancelButtonProps", "okType", "prefixCls", "okCancel", "width", "mask", "maskClosable", "okText", "cancelText", "autoFocusButton", "transitionName", "maskTransitionName", "type", "title", "content", "direction", "rootPrefixCls", "bodyStyle", "closeIcon", "modalRender", "focusTriggerAfterClose", "wrapClassName", "confirmPrefixCls", "footer"],
  setup(e, t) {
    let {
      attrs: n
    } = t;
    const [o] = Ho("Modal");
    return process.env.NODE_ENV !== "production" && kt(e.visible === void 0, "Modal", "`visible` is deprecated, please use `open` instead."), () => {
      const {
        icon: r,
        onCancel: a,
        onOk: i,
        close: l,
        okText: u,
        closable: s = !1,
        zIndex: d,
        afterClose: c,
        keyboard: f,
        centered: g,
        getContainer: h,
        maskStyle: b,
        okButtonProps: S,
        cancelButtonProps: y,
        okCancel: x,
        width: O = 416,
        mask: E = !0,
        maskClosable: P = !1,
        type: T,
        open: m,
        title: $,
        content: I,
        direction: M,
        closeIcon: H,
        modalRender: L,
        focusTriggerAfterClose: _,
        rootPrefixCls: R,
        bodyStyle: C,
        wrapClassName: A,
        footer: B
      } = e;
      let z = r;
      if (!r && r !== null)
        switch (T) {
          case "info":
            z = v(Yt, null, null);
            break;
          case "success":
            z = v(Kt, null, null);
            break;
          case "error":
            z = v(Vt, null, null);
            break;
          default:
            z = v(Xt, null, null);
        }
      const re = e.okType || "primary", q = e.prefixCls || "ant-modal", ie = `${q}-confirm`, fe = n.style || {}, ae = x ?? T === "confirm", ot = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok", te = `${q}-confirm`, _e = G(te, `${te}-${e.type}`, {
        [`${te}-rtl`]: M === "rtl"
      }, n.class), pe = o.value, xe = ae && v(Wa, {
        actionFn: a,
        close: l,
        autofocus: ot === "cancel",
        buttonProps: y,
        prefixCls: `${R}-btn`
      }, {
        default: () => [at(e.cancelText) || pe.cancelText]
      });
      return v(se, {
        prefixCls: q,
        class: _e,
        wrapClassName: G({
          [`${te}-centered`]: !!g
        }, A),
        onCancel: (Ct) => l == null ? void 0 : l({
          triggerCancel: !0
        }, Ct),
        open: m,
        title: "",
        footer: "",
        transitionName: xn(R, "zoom", e.transitionName),
        maskTransitionName: xn(R, "fade", e.maskTransitionName),
        mask: E,
        maskClosable: P,
        maskStyle: b,
        style: fe,
        bodyStyle: C,
        width: O,
        zIndex: d,
        afterClose: c,
        keyboard: f,
        centered: g,
        getContainer: h,
        closable: s,
        closeIcon: H,
        modalRender: L,
        focusTriggerAfterClose: _
      }, {
        default: () => [v("div", {
          class: `${ie}-body-wrapper`
        }, [v("div", {
          class: `${ie}-body`
        }, [at(z), $ === void 0 ? null : v("span", {
          class: `${ie}-title`
        }, [at($)]), v("div", {
          class: `${ie}-content`
        }, [at(I)])]), B !== void 0 ? at(B) : v("div", {
          class: `${ie}-btns`
        }, [xe, v(Wa, {
          type: re,
          actionFn: i,
          close: l,
          autofocus: ot === "ok",
          buttonProps: S,
          prefixCls: `${R}-btn`
        }, {
          default: () => [at(u) || (ae ? pe.okText : pe.justOkText)]
        })])])]
      });
    };
  }
}), Ge = [], qt = (e) => {
  const t = document.createDocumentFragment();
  let n = p(p({}, Gi(e, ["parentContext", "appContext"])), {
    close: a,
    open: !0
  }), o = null;
  function r() {
    o && (qe(null, t), o = null);
    for (var s = arguments.length, d = new Array(s), c = 0; c < s; c++)
      d[c] = arguments[c];
    const f = d.some((g) => g && g.triggerCancel);
    e.onCancel && f && e.onCancel(() => {
    }, ...d.slice(1));
    for (let g = 0; g < Ge.length; g++)
      if (Ge[g] === a) {
        Ge.splice(g, 1);
        break;
      }
  }
  function a() {
    for (var s = arguments.length, d = new Array(s), c = 0; c < s; c++)
      d[c] = arguments[c];
    n = p(p({}, n), {
      open: !1,
      afterClose: () => {
        typeof e.afterClose == "function" && e.afterClose(), r.apply(this, d);
      }
    }), n.visible && delete n.visible, i(n);
  }
  function i(s) {
    typeof s == "function" ? n = s(n) : n = p(p({}, n), s), o && fd(o, n, t);
  }
  const l = (s) => {
    const d = Q, c = d.prefixCls, f = s.prefixCls || `${c}-modal`, g = d.iconPrefixCls, h = Sm();
    return v(tc, N(N({}, d), {}, {
      prefixCls: c
    }), {
      default: () => [v(nc, N(N({}, s), {}, {
        rootPrefixCls: c,
        prefixCls: f,
        iconPrefixCls: g,
        locale: h,
        cancelText: s.cancelText || h.cancelText
      }), null)]
    });
  };
  function u(s) {
    const d = v(l, p({}, s));
    return d.appContext = e.parentContext || e.appContext || d.appContext, qe(d, t), d;
  }
  return o = u(n), Ge.push(a), {
    destroy: a,
    update: i
  };
};
function oc(e) {
  return p(p({}, e), {
    type: "warning"
  });
}
function rc(e) {
  return p(p({}, e), {
    type: "info"
  });
}
function ac(e) {
  return p(p({}, e), {
    type: "success"
  });
}
function ic(e) {
  return p(p({}, e), {
    type: "error"
  });
}
function lc(e) {
  return p(p({}, e), {
    type: "confirm"
  });
}
const R0 = () => ({
  config: Object,
  afterClose: Function,
  destroyAction: Function,
  open: Boolean
}), B0 = F({
  name: "HookModal",
  inheritAttrs: !1,
  props: zt(R0(), {
    config: {
      width: 520,
      okType: "primary"
    }
  }),
  setup(e, t) {
    let {
      expose: n
    } = t;
    var o;
    const r = w(() => e.open), a = w(() => e.config), {
      direction: i,
      getPrefixCls: l
    } = Tn(), u = l("modal"), s = l(), d = () => {
      var h, b;
      e == null || e.afterClose(), (b = (h = a.value).afterClose) === null || b === void 0 || b.call(h);
    }, c = function() {
      e.destroyAction(...arguments);
    };
    n({
      destroy: c
    });
    const f = (o = a.value.okCancel) !== null && o !== void 0 ? o : a.value.type === "confirm", [g] = Ho("Modal", Qe.Modal);
    return () => v(nc, N(N({
      prefixCls: u,
      rootPrefixCls: s
    }, a.value), {}, {
      close: c,
      open: r.value,
      afterClose: d,
      okText: a.value.okText || (f ? g == null ? void 0 : g.value.okText : g == null ? void 0 : g.value.justOkText),
      direction: a.value.direction || i.value,
      cancelText: a.value.cancelText || (g == null ? void 0 : g.value.cancelText)
    }), null);
  }
});
let Ua = 0;
const H0 = F({
  name: "ElementsHolder",
  inheritAttrs: !1,
  setup(e, t) {
    let {
      expose: n
    } = t;
    const o = D([]);
    return n({
      addModal: (a) => (o.value.push(a), o.value = o.value.slice(), () => {
        o.value = o.value.filter((i) => i !== a);
      })
    }), () => o.value.map((a) => a());
  }
});
function F0() {
  const e = D(null), t = D([]);
  Y(t, () => {
    t.value.length && ([...t.value].forEach((i) => {
      i();
    }), t.value = []);
  }, {
    immediate: !0
  });
  const n = (a) => function(l) {
    var u;
    Ua += 1;
    const s = D(!0), d = D(null), c = D(Te(l)), f = D({});
    Y(() => l, (O) => {
      S(p(p({}, qa(O) ? O.value : O), f.value));
    });
    const g = function() {
      s.value = !1;
      for (var O = arguments.length, E = new Array(O), P = 0; P < O; P++)
        E[P] = arguments[P];
      const T = E.some((m) => m && m.triggerCancel);
      c.value.onCancel && T && c.value.onCancel(() => {
      }, ...E.slice(1));
    };
    let h;
    const b = () => v(B0, {
      key: `modal-${Ua}`,
      config: a(c.value),
      ref: d,
      open: s.value,
      destroyAction: g,
      afterClose: () => {
        h == null || h();
      }
    }, null);
    h = (u = e.value) === null || u === void 0 ? void 0 : u.addModal(b), h && Ge.push(h);
    const S = (O) => {
      c.value = p(p({}, c.value), O);
    };
    return {
      destroy: () => {
        d.value ? g() : t.value = [...t.value, g];
      },
      update: (O) => {
        f.value = O, d.value ? S(O) : t.value = [...t.value, () => S(O)];
      }
    };
  }, o = w(() => ({
    info: n(rc),
    success: n(ac),
    error: n(ic),
    warning: n(oc),
    confirm: n(lc)
  })), r = Symbol("modalHolderKey");
  return [o.value, () => v(H0, {
    key: r,
    ref: e
  }, null)];
}
function cc(e) {
  return qt(oc(e));
}
se.useModal = F0;
se.info = function(t) {
  return qt(rc(t));
};
se.success = function(t) {
  return qt(ac(t));
};
se.error = function(t) {
  return qt(ic(t));
};
se.warning = cc;
se.warn = cc;
se.confirm = function(t) {
  return qt(lc(t));
};
se.destroyAll = function() {
  for (; Ge.length; ) {
    const t = Ge.pop();
    t && t();
  }
};
se.install = function(e) {
  return e.component(se.name, se), e;
};
const D0 = F({
  name: "DynamicComponent",
  props: {
    renderMethod: {
      type: Function,
      required: !0
    },
    sourceData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  render() {
    return this.renderMethod ? this.renderMethod(mn, this.sourceData) : null;
  }
}), L0 = (e = "", t = !1) => t ? e.replace(/\s/g, "") : e.replace(/(^\s*)|(\s*$)/g, ""), Zn = (e = "", t = !1, n = 2, o = Number.MAX_SAFE_INTEGER) => (e = L0(e), e = e.replace(/^\./g, ""), t ? (e = e.replace(/[^-?(\d.)]/g, ""), e = e.replace(/-{2,}/g, "-"), e = e.replace("-", "$#$").replace(/-/g, "").replace("$#$", "-")) : e = e.replace(/[^\d.]/g, ""), e = e.replace(/\.{2,}/g, "."), e = e.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), n == 3 ? e = e.replace(/^(\-)*(\d+)\.(\d\d\d).*$/, "$1$2.$3") : e = e.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3"), t && e === "-" ? e : (e.indexOf(".") < 0 && e != "" && (e = String(parseFloat(e))), Number(e) > Number(o) ? Number(o) : e)), z0 = (e = "") => String(e).replace(/[^\d]/g, "");
function k0(e) {
  return bc() ? (Cc(e), !0) : !1;
}
function ne(e) {
  return typeof e == "function" ? e() : Te(e);
}
const sc = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const W0 = Object.prototype.toString, U0 = (e) => W0.call(e) === "[object Object]", G0 = () => {
};
function V0(e, t = {}) {
  if (!qa(e))
    return hc(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const o in e.value)
    n[o] = yc(() => ({
      get() {
        return e.value[o];
      },
      set(r) {
        var a;
        if ((a = ne(t.replaceRef)) != null ? a : !0)
          if (Array.isArray(e.value)) {
            const l = [...e.value];
            l[o] = r, e.value = l;
          } else {
            const l = { ...e.value, [o]: r };
            Object.setPrototypeOf(l, Object.getPrototypeOf(e.value)), e.value = l;
          }
        else
          e.value[o] = r;
      }
    }));
  return n;
}
function K0(e) {
  var t;
  const n = ne(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const uc = sc ? window : void 0;
function Jn(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = uc) : [t, n, o, r] = e, !t)
    return G0;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const a = [], i = () => {
    a.forEach((d) => d()), a.length = 0;
  }, l = (d, c, f, g) => (d.addEventListener(c, f, g), () => d.removeEventListener(c, f, g)), u = Y(
    () => [K0(t), ne(r)],
    ([d, c]) => {
      if (i(), !d)
        return;
      const f = U0(c) ? { ...c } : c;
      a.push(
        ...n.flatMap((g) => o.map((h) => l(d, g, h, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), s = () => {
    u(), i();
  };
  return k0(s), s;
}
function X0(e, t = {}) {
  var n, o;
  const {
    pointerTypes: r,
    preventDefault: a,
    stopPropagation: i,
    exact: l,
    onMove: u,
    onEnd: s,
    onStart: d,
    initialValue: c,
    axis: f = "both",
    draggingElement: g = uc,
    containerElement: h,
    handle: b = e
  } = t, S = k(
    (n = ne(c)) != null ? n : { x: 0, y: 0 }
  ), y = k(), x = (m) => r ? r.includes(m.pointerType) : !0, O = (m) => {
    ne(a) && m.preventDefault(), ne(i) && m.stopPropagation();
  }, E = (m) => {
    var $;
    if (ne(t.disabled) || !x(m) || ne(l) && m.target !== ne(e))
      return;
    const I = ne(h), M = ($ = I == null ? void 0 : I.getBoundingClientRect) == null ? void 0 : $.call(I), H = ne(e).getBoundingClientRect(), L = {
      x: m.clientX - (I ? H.left - M.left + I.scrollLeft : H.left),
      y: m.clientY - (I ? H.top - M.top + I.scrollTop : H.top)
    };
    (d == null ? void 0 : d(L, m)) !== !1 && (y.value = L, O(m));
  }, P = (m) => {
    if (ne(t.disabled) || !x(m) || !y.value)
      return;
    const $ = ne(h), I = ne(e).getBoundingClientRect();
    let { x: M, y: H } = S.value;
    (f === "x" || f === "both") && (M = m.clientX - y.value.x, $ && (M = Math.min(Math.max(0, M), $.scrollWidth - I.width))), (f === "y" || f === "both") && (H = m.clientY - y.value.y, $ && (H = Math.min(Math.max(0, H), $.scrollHeight - I.height))), S.value = {
      x: M,
      y: H
    }, u == null || u(S.value, m), O(m);
  }, T = (m) => {
    ne(t.disabled) || !x(m) || y.value && (y.value = void 0, s == null || s(S.value, m), O(m));
  };
  if (sc) {
    const m = { capture: (o = t.capture) != null ? o : !0 };
    Jn(b, "pointerdown", E, m), Jn(g, "pointermove", P, m), Jn(g, "pointerup", T, m);
  }
  return {
    ...V0(S),
    position: S,
    isDragging: w(() => !!y.value),
    style: w(
      () => `left:${S.value.x}px;top:${S.value.y}px;`
    )
  };
}
const Y0 = () => {
  const e = k(null), { x: t, y: n, isDragging: o } = X0(e), r = k(0), a = k(0), i = k(!1), l = k(0), u = k(0), s = k(0), d = k(0), c = k({ left: 0, right: 0, top: 0, bottom: 0 });
  Y([t, n], () => {
    if (!i.value) {
      r.value = t.value, a.value = n.value;
      const g = document.body.getBoundingClientRect(), h = e.value.getBoundingClientRect();
      c.value.right = g.width - h.width, c.value.bottom = g.height - h.height, s.value = l.value, d.value = u.value;
    }
    i.value = !0;
  }), Y(o, () => {
    o || (i.value = !1);
  }), Ie(() => {
    i.value && (l.value = s.value + Math.min(Math.max(c.value.left, t.value), c.value.right) - r.value, u.value = d.value + Math.min(Math.max(c.value.top, n.value), c.value.bottom) - a.value);
  });
  const f = w(() => ({
    transform: `translate(${l.value}px, ${u.value}px)`
  }));
  return {
    modalTitleRef: e,
    transformStyle: f
  };
}, q0 = {
  key: 0,
  class: "loading-content"
}, Q0 = /* @__PURE__ */ F({
  name: "LbAntFormDialog",
  __name: "index",
  props: {
    visible: {
      type: Boolean,
      default: () => !1
    },
    title: {
      type: String,
      default: "标题"
    },
    width: {
      type: String,
      default: () => "700px"
    },
    labelWidth: {
      type: Number || String,
      default: 90
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    isClickLeftClose: {
      type: Boolean,
      default: !0
    },
    okText: {
      type: String,
      default: "确认"
    },
    id: {
      type: String,
      default: () => ""
    },
    modelValue: {
      type: Object,
      default: () => ({})
    },
    formGroup: {
      // 表单配置
      type: Array,
      default: () => []
    },
    formProps: {
      // Form 参数
      type: Object,
      default: () => ({})
    },
    modalProps: {
      // 弹窗 参数
      type: Object,
      default: () => ({})
    },
    confirmTips: {
      // ⼆次确认提示
      type: String,
      default: "是否确认提交？"
    },
    isShowConfirmTips: {
      type: Boolean,
      default: !1
    },
    successText: {
      // 确认成功 提示文字
      type: String,
      default: ""
    },
    isShowSuccessText: {
      type: Boolean,
      default: !0
    },
    maskClosable: {
      type: Boolean,
      default: !1
    },
    rightSubmitApi: {
      // 右边按钮 api 接口
      type: Function
    },
    rightSubmitApiQuery: {
      // 右边按钮 api 默认 参数
      type: Object,
      default: () => ({})
    }
  },
  emits: [
    "update:modelValue",
    "update:visible",
    "rightSubmit",
    "leftSubmit",
    "updateData"
  ],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, a = k(!1), { modalTitleRef: i, transformStyle: l } = Y0(), u = k(), s = w({
      get() {
        return new Proxy(o.modelValue, {
          set(T, m, $) {
            return r("update:modelValue", {
              ...T,
              [m]: $
            }), !0;
          }
        });
      },
      set(T) {
        r("update:modelValue", T);
      }
    }), d = w({
      get() {
        return o.visible;
      },
      set(T) {
        r("update:visible", T);
      }
    }), c = w(() => ({
      width: o.width,
      okText: o.okText,
      cancelText: o.cancelText,
      confirmLoading: a.value,
      ...o.modalProps
    }));
    Ae(() => {
      console.log(u.value, "===onMounted==", o);
    });
    const f = async () => {
      var _;
      const {
        confirmTips: T,
        isShowConfirmTips: m,
        successText: $,
        isShowSuccessText: I,
        rightSubmitApi: M,
        rightSubmitApiQuery: H,
        formGroup: L
      } = o;
      try {
        await ((_ = u.value) == null ? void 0 : _.validateFields()), m && await new Promise((C, A) => {
          se.confirm({
            title: "提示",
            content: T,
            okText: "确认",
            cancelText: "取消",
            onOk() {
              return C(!0);
            },
            onCancel() {
              return A(new Error("取消"));
            }
          });
        }), a.value = !0;
        let R = JSON.parse(JSON.stringify(Oc(s.value)));
        console.log(s.value, "===model===");
        for (let C = 0; C < L.length; C++) {
          const {
            notQuery: A,
            value: B,
            separateQuery: z,
            splitLastKey: re,
            splitSymbol: q,
            valueName: ie,
            options: fe,
            fieldNames: ae,
            notValueName: ot
          } = L[C];
          if (B) {
            if (Array.isArray(z) && Array.isArray(R[B])) {
              const [te, _e] = z, [pe, xe] = R[B];
              R[te] = pe, R[_e] = xe, delete R[B];
              continue;
            }
            if (re) {
              const te = R[B].split(q);
              R[re] = te[te.length - 1], delete R[B];
            }
            if (ie && fe && !ot) {
              const te = (ae == null ? void 0 : ae.value) || "value", _e = (ae == null ? void 0 : ae.label) || "label", pe = fe == null ? void 0 : fe.find((xe) => xe[te] === R[B]);
              R[ie] = pe ? pe[_e] : "";
            }
            A && delete R[B];
          }
        }
        if (console.log(R, "===query==="), M) {
          try {
            R = Object.assign(H || {}, R), await M(R), I && Wl.info(`${$ || o.okText}成功！`), r("updateData"), P();
          } catch (C) {
            a.value = !1, console.log(C);
          }
          return;
        }
        r("rightSubmit", R, P, a);
      } catch (R) {
        console.log(R);
      }
    }, g = () => {
      a.value = !0, o.isClickLeftClose && P(), r("leftSubmit", P());
    }, h = (T) => {
      const m = (T == null ? void 0 : T.props) || {};
      let $ = (m == null ? void 0 : m.placeholder) || "";
      return $ || ($ = O(T) ? "请输入" : "请选择", T.targetElement === "a-range-picker" && ($ = ["开始日期", "结束日期"])), {
        ...m,
        allowClear: !0,
        "show-search": !0,
        "value-format": "YYYY-MM-DD",
        placeholder: $
      };
    }, b = ({ labelWidth: T, label: m }) => {
      let $ = m ? T || o.labelWidth : 0;
      return typeof $ == "number" && ($ = $ + "px"), { style: { width: $ } };
    }, S = ({ rules: T = [], required: m }) => (m && (T = [
      ...T,
      {
        validator: ($, I, M) => {
          $ || M("不能为空"), I(!0);
        }
      }
    ]), T.length && (T = T.map(($) => ({
      ...$,
      validator: (I) => x($.validator, I)
    }))), T), y = (T, m, $) => {
      const I = o.formGroup.find((M) => M.value === T);
      if (I) {
        const M = m.split(".");
        if (M.length === 1)
          I[m] = $;
        else {
          const H = M.length, L = M[H - 1], R = M.slice(0, H - 1).reduce((C, A) => C[A], I);
          R && (R[L] = $);
        }
      }
    }, x = (T, m) => new Promise(($, I) => {
      je(() => {
        const M = JSON.parse(JSON.stringify(s.value)) || {}, H = (M == null ? void 0 : M[m.field]) || "";
        T && T(H, $, I, m);
      });
    }), O = ({ targetElement: T }) => T === "a-input", E = async (T, m, ...$) => {
      await je();
      const [I] = $[0];
      let M = (I == null ? void 0 : I.target._value) || "";
      m === "number" ? M = Zn(String(M), !0) : m === "just" ? M = z0(String(M)) : m === "positive" ? M = Zn(String(M)) : m === "rate" && (M = Zn(String(M)) + "%", M = M === "%" ? "" : M), s.value[T] = M;
    }, P = () => {
      u.value.resetFields(), a.value = !1, d.value = !1;
    };
    return t({
      updateSourceData: y
    }), (T, m) => {
      const $ = St("a-form-item"), I = St("a-col"), M = St("a-form"), H = St("a-spin"), L = St("a-modal");
      return Me(), xt(L, Qt({
        open: d.value,
        "onUpdate:open": m[0] || (m[0] = (_) => d.value = _)
      }, c.value, {
        ref: "modalRef",
        class: "form-modal",
        layout: "inline",
        maskClosable: e.maskClosable,
        "wrap-style": { overflow: "hidden" },
        onOk: f,
        onCancel: g
      }), {
        title: rt(() => [
          dr("div", {
            ref_key: "modalTitleRef",
            ref: i,
            class: "modal-title"
          }, Sc(e.title), 513)
        ]),
        modalRender: rt(({ originVNode: _ }) => [
          dr("div", {
            style: xc(Te(l))
          }, [
            (Me(), xt(fr(_)))
          ], 4)
        ]),
        default: rt(() => [
          v(M, Qt(e.formProps, {
            ref_key: "formRef",
            ref: u,
            model: s.value,
            "scroll-to-first-error": !0
          }), {
            default: rt(() => [
              (Me(!0), Bn(dt, null, $c(e.formGroup, (_) => (Me(), Bn(dt, {
                key: _.value
              }, [
                _ != null && _.isHidden ? gr("", !0) : (Me(), xt(I, {
                  key: 0,
                  span: (_ == null ? void 0 : _.col) || 24
                }, {
                  default: rt(() => [
                    v($, Qt(_.formProps || {}, pr(_.formEvents || {}), {
                      label: _.label,
                      name: _ == null ? void 0 : _.value,
                      "label-col": b(_),
                      rules: S(_)
                    }), {
                      default: rt(() => [
                        _.targetElement === "slot" ? wc(T.$slots, _.slotName, {
                          key: 0,
                          row: s.value
                        }, void 0, !0) : _.renderItem ? (Me(), xt(Te(D0), {
                          key: 1,
                          "source-data": s.value,
                          "render-method": _.renderItem,
                          "form-item": _
                        }, null, 8, ["source-data", "render-method", "form-item"])) : (Me(), xt(fr(_.targetElement), Qt({
                          key: 2,
                          value: s.value[_.value],
                          "onUpdate:value": (R) => s.value[_.value] = R,
                          valueName: s.value[_ == null ? void 0 : _.valueName],
                          "onUpdate:valueName": (R) => s.value[_ == null ? void 0 : _.valueName] = R
                        }, h(_), pr(
                          _.targetEvents || {
                            change: (...R) => {
                              _.targetElement === "a-input" && E(_.value, _.type, R);
                            }
                          }
                        ), {
                          disabled: _ == null ? void 0 : _.disabled,
                          options: (_ == null ? void 0 : _.options) || [],
                          "field-names": _ == null ? void 0 : _.fieldNames,
                          optionFilterProp: (_ == null ? void 0 : _.optionFilterProp) || "label"
                        }), null, 16, ["value", "onUpdate:value", "valueName", "onUpdate:valueName", "disabled", "options", "field-names", "optionFilterProp"]))
                      ]),
                      _: 2
                    }, 1040, ["label", "name", "label-col", "rules"])
                  ]),
                  _: 2
                }, 1032, ["span"]))
              ], 64))), 128))
            ]),
            _: 3
          }, 16, ["model"]),
          a.value ? (Me(), Bn("div", q0, [
            v(H)
          ])) : gr("", !0)
        ]),
        _: 3
      }, 16, ["open", "maskClosable"]);
    };
  }
}), Z0 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, J0 = /* @__PURE__ */ Z0(Q0, [["__scopeId", "data-v-5835bbec"]]), ev = [J0], tv = function(e) {
  ev.map((t) => e.component(t.name, t));
}, ov = {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install: tv
};
export {
  ov as default
};
