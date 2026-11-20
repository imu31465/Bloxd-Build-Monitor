/*! For license information please see fsa8nn.fa-renderer.7be6cbd5.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6348: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      FontAwesomeIcon: () => hb
    });
    var kb = sb(6343),
      Wb = sb(4669),
      ab = sb.n(Wb),
      Tb = sb(64);

    function Ub(bb, cb) {
      (null == cb || cb > bb.length) && (cb = bb.length);
      for (var sb = 0, kb = Array(cb); sb < cb; sb++) kb[sb] = bb[sb];
      return kb
    }

    function Ib(bb, cb, sb) {
      return (cb = function(bb) {
        var cb = function(bb, cb) {
          if ("object" != typeof bb || !bb) return bb;
          var sb = bb[Symbol.toPrimitive];
          if (void 0 !== sb) {
            var kb = sb.call(bb, cb || "default");
            if ("object" != typeof kb) return kb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cb ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == typeof cb ? cb : cb + ""
      }(cb)) in bb ? Object.defineProperty(bb, cb, {
        value: sb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[cb] = sb, bb
    }

    function Hb(bb, cb) {
      var sb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var kb = Object.getOwnPropertySymbols(bb);
        cb && (kb = kb.filter((function(cb) {
          return Object.getOwnPropertyDescriptor(bb, cb).enumerable
        }))), sb.push.apply(sb, kb)
      }
      return sb
    }

    function fb(bb) {
      for (var cb = 1; cb < arguments.length; cb++) {
        var sb = null != arguments[cb] ? arguments[cb] : {};
        cb % 2 ? Hb(Object(sb), !0).forEach((function(cb) {
          Ib(bb, cb, sb[cb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(sb)) : Hb(Object(sb)).forEach((function(cb) {
          Object.defineProperty(bb, cb, Object.getOwnPropertyDescriptor(sb, cb))
        }))
      }
      return bb
    }

    function Mb(bb, cb) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, cb) {
        var sb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != sb) {
          var kb, Wb, ab, Tb, Ub = [],
            Ib = !0,
            Hb = !1;
          try {
            if (ab = (sb = sb.call(bb)).next, 0 === cb) {
              if (Object(sb) !== sb) return;
              Ib = !1
            } else
              for (; !(Ib = (kb = ab.call(sb)).done) && (Ub.push(kb.value), Ub.length !== cb); Ib = !0);
          } catch (bb) {
            Hb = !0, Wb = bb
          } finally {
            try {
              if (!Ib && null != sb.return && (Tb = sb.return(), Object(Tb) !== Tb)) return
            } finally {
              if (Hb) throw Wb
            }
          }
          return Ub
        }
      }(bb, cb) || mb(bb, cb) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Xb(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return Ub(bb)
      }(bb) || function(bb) {
        if ("undefined" != typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || mb(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nb(bb) {
      return nb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, nb(bb)
    }

    function mb(bb, cb) {
      if (bb) {
        if ("string" == typeof bb) return Ub(bb, cb);
        var sb = {}.toString.call(bb).slice(8, -1);
        return "Object" === sb && bb.constructor && (sb = bb.constructor.name), "Map" === sb || "Set" === sb ? Array.from(bb) : "Arguments" === sb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(sb) ? Ub(bb, cb) : void 0
      }
    }
    var lb;
    try {
      var Qb = sb(6356);
      lb = Qb.version
    } catch (gb) {
      lb = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function eb(bb) {
      var cb = bb.beat,
        sb = bb.fade,
        kb = bb.beatFade,
        Wb = bb.bounce,
        ab = bb.shake,
        Tb = bb.flash,
        Ub = bb.spin,
        Hb = bb.spinPulse,
        fb = bb.spinReverse,
        Xb = bb.pulse,
        nb = bb.fixedWidth,
        mb = bb.inverse,
        Qb = bb.border,
        eb = bb.listItem,
        Cb = bb.flip,
        Nb = bb.size,
        Vb = bb.rotation,
        Lb = bb.pull,
        ub = bb.swapOpacity,
        Yb = bb.rotateBy,
        hb = bb.widthAuto,
        Jb = function(bb, cb) {
          for (var sb = Mb(bb.split("-"), 2), kb = sb[0], Wb = sb[1], ab = Mb(cb.split("-"), 2), Tb = ab[0], Ub = ab[1], Ib = kb.split("."), Hb = Tb.split("."), fb = 0; fb < Math.max(Ib.length, Hb.length); fb++) {
            var Xb = Ib[fb] || "0",
              nb = Hb[fb] || "0",
              mb = parseInt(Xb, 10),
              lb = parseInt(nb, 10);
            if (mb !== lb) return mb > lb
          }
          for (var Qb = 0; Qb < Math.max(Ib.length, Hb.length); Qb++) {
            var eb = Ib[Qb] || "0",
              Cb = Hb[Qb] || "0";
            if (eb !== Cb && eb.length !== Cb.length) return eb.length < Cb.length
          }
          return !(Wb && !Ub)
        }(lb, "7.0.0"),
        gb = Ib(Ib(Ib(Ib(Ib(Ib({
          "fa-beat": cb,
          "fa-fade": sb,
          "fa-beat-fade": kb,
          "fa-bounce": Wb,
          "fa-shake": ab,
          "fa-flash": Tb,
          "fa-spin": Ub,
          "fa-spin-reverse": fb,
          "fa-spin-pulse": Hb,
          "fa-pulse": Xb,
          "fa-fw": nb,
          "fa-inverse": mb,
          "fa-border": Qb,
          "fa-li": eb,
          "fa-flip": !0 === Cb,
          "fa-flip-horizontal": "horizontal" === Cb || "both" === Cb,
          "fa-flip-vertical": "vertical" === Cb || "both" === Cb
        }, "fa-".concat(Nb), "undefined" !== typeof Nb && null !== Nb), "fa-rotate-".concat(Vb), "undefined" !== typeof Vb && null !== Vb && 0 !== Vb), "fa-pull-".concat(Lb), "undefined" !== typeof Lb && null !== Lb), "fa-swap-opacity", ub), "fa-rotate-by", Jb && Yb), "fa-width-auto", Jb && hb);
      return Object.keys(gb).map((function(bb) {
        return gb[bb] ? bb : null
      })).filter((function(bb) {
        return bb
      }))
    }

    function Cb(bb) {
      return cb = bb, (cb -= 0) === cb ? bb : (bb = bb.replace(/[\-_\s]+(.)?/g, (function(bb, cb) {
        return cb ? cb.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + bb.substr(1);
      var cb
    }
    var Nb = ["style"];
    var Vb = !1;
    try {
      Vb = !0
    } catch (gb) {}

    function Lb(bb) {
      return bb && "object" === nb(bb) && bb.prefix && bb.iconName && bb.icon ? bb : kb.parse.icon ? kb.parse.icon(bb) : null === bb ? null : bb && "object" === nb(bb) && bb.prefix && bb.iconName ? bb : Array.isArray(bb) && 2 === bb.length ? {
        prefix: bb[0],
        iconName: bb[1]
      } : "string" === typeof bb ? {
        prefix: "fas",
        iconName: bb
      } : void 0
    }

    function ub(bb, cb) {
      return Array.isArray(cb) && cb.length > 0 || !Array.isArray(cb) && cb ? Ib({}, bb, cb) : {}
    }
    var Yb = {
        border: !1,
        className: "",
        mask: null,
        maskId: null,
        fixedWidth: !1,
        inverse: !1,
        flip: !1,
        icon: null,
        listItem: !1,
        pull: null,
        pulse: !1,
        rotation: null,
        rotateBy: !1,
        size: null,
        spin: !1,
        spinPulse: !1,
        spinReverse: !1,
        beat: !1,
        fade: !1,
        beatFade: !1,
        bounce: !1,
        shake: !1,
        symbol: !1,
        title: "",
        titleId: null,
        transform: null,
        swapOpacity: !1,
        widthAuto: !1
      },
      hb = Tb.forwardRef((function(bb, cb) {
        var sb = fb(fb({}, Yb), bb),
          Wb = sb.icon,
          ab = sb.mask,
          Tb = sb.symbol,
          Ub = sb.className,
          Ib = sb.title,
          Hb = sb.titleId,
          Mb = sb.maskId,
          nb = Lb(Wb),
          mb = ub("classes", [].concat(Xb(eb(sb)), Xb((Ub || "").split(" ")))),
          lb = ub("transform", "string" === typeof sb.transform ? kb.parse.transform(sb.transform) : sb.transform),
          Qb = ub("mask", Lb(ab)),
          Cb = (0, kb.icon)(nb, fb(fb(fb(fb({}, mb), lb), Qb), {}, {
            symbol: Tb,
            title: Ib,
            titleId: Hb,
            maskId: Mb
          }));
        if (!Cb) return function() {
          var bb;
          !Vb && console && "function" === typeof console.error && (bb = console).error.apply(bb, arguments)
        }("Could not find icon", nb), null;
        var Nb = Cb.abstract,
          hb = {
            ref: cb
          };
        return Object.keys(sb).forEach((function(bb) {
          Yb.hasOwnProperty(bb) || (hb[bb] = sb[bb])
        })), Jb(Nb[0], hb)
      }));
    hb.displayName = "FontAwesomeIcon", hb.propTypes = {
      beat: ab().bool,
      border: ab().bool,
      beatFade: ab().bool,
      bounce: ab().bool,
      className: ab().string,
      fade: ab().bool,
      flash: ab().bool,
      mask: ab().oneOfType([ab().object, ab().array, ab().string]),
      maskId: ab().string,
      fixedWidth: ab().bool,
      inverse: ab().bool,
      flip: ab().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: ab().oneOfType([ab().object, ab().array, ab().string]),
      listItem: ab().bool,
      pull: ab().oneOf(["right", "left"]),
      pulse: ab().bool,
      rotation: ab().oneOf([0, 90, 180, 270]),
      rotateBy: ab().bool,
      shake: ab().bool,
      size: ab().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: ab().bool,
      spinPulse: ab().bool,
      spinReverse: ab().bool,
      symbol: ab().oneOfType([ab().bool, ab().string]),
      title: ab().string,
      titleId: ab().string,
      transform: ab().oneOfType([ab().string, ab().object]),
      swapOpacity: ab().bool,
      widthAuto: ab().bool
    };
    var Jb = function bb(cb, sb) {
      var kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof sb) return sb;
      var Wb = (sb.children || []).map((function(sb) {
          return bb(cb, sb)
        })),
        ab = Object.keys(sb.attributes || {}).reduce((function(bb, cb) {
          var kb = sb.attributes[cb];
          switch (cb) {
            case "class":
              bb.attrs.className = kb, delete sb.attributes.class;
              break;
            case "style":
              bb.attrs.style = kb.split(";").map((function(bb) {
                return bb.trim()
              })).filter((function(bb) {
                return bb
              })).reduce((function(bb, cb) {
                var sb, kb = cb.indexOf(":"),
                  Wb = Cb(cb.slice(0, kb)),
                  ab = cb.slice(kb + 1).trim();
                return Wb.startsWith("webkit") ? bb[(sb = Wb, sb.charAt(0).toUpperCase() + sb.slice(1))] = ab : bb[Wb] = ab, bb
              }), {});
              break;
            default:
              0 === cb.indexOf("aria-") || 0 === cb.indexOf("data-") ? bb.attrs[cb.toLowerCase()] = kb : bb.attrs[Cb(cb)] = kb
          }
          return bb
        }), {
          attrs: {}
        }),
        Tb = kb.style,
        Ub = void 0 === Tb ? {} : Tb,
        Ib = function(bb, cb) {
          if (null == bb) return {};
          var sb, kb, Wb = function(bb, cb) {
            if (null == bb) return {};
            var sb = {};
            for (var kb in bb)
              if ({}.hasOwnProperty.call(bb, kb)) {
                if (-1 !== cb.indexOf(kb)) continue;
                sb[kb] = bb[kb]
              } return sb
          }(bb, cb);
          if (Object.getOwnPropertySymbols) {
            var ab = Object.getOwnPropertySymbols(bb);
            for (kb = 0; kb < ab.length; kb++) sb = ab[kb], -1 === cb.indexOf(sb) && {}.propertyIsEnumerable.call(bb, sb) && (Wb[sb] = bb[sb])
          }
          return Wb
        }(kb, Nb);
      return ab.attrs.style = fb(fb({}, ab.attrs.style), Ub), cb.apply(void 0, [sb.tag, fb(fb({}, ab.attrs), Ib)].concat(Xb(Wb)))
    }.bind(null, Tb.createElement)
  },
  4676: (bb, cb, sb) => {
    var kb = sb(4684);

    function Wb() {}

    function ab() {}
    ab.resetWarningCache = Wb, bb.exports = function() {
      function bb(bb, cb, sb, Wb, ab, Tb) {
        if (Tb !== kb) {
          var Ub = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Ub.name = "Invariant Violation", Ub
        }
      }

      function cb() {
        return bb
      }
      bb.isRequired = bb;
      var sb = {
        array: bb,
        bigint: bb,
        bool: bb,
        func: bb,
        number: bb,
        object: bb,
        string: bb,
        symbol: bb,
        any: bb,
        arrayOf: cb,
        element: bb,
        elementType: bb,
        instanceOf: cb,
        node: bb,
        objectOf: cb,
        oneOf: cb,
        oneOfType: cb,
        shape: cb,
        exact: cb,
        checkPropTypes: ab,
        resetWarningCache: Wb
      };
      return sb.PropTypes = sb, sb
    }
  },
  4669: (bb, cb, sb) => {
    bb.exports = sb(4676)()
  },
  4684: bb => {
    bb.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6343: (bb, cb, sb) => {
    function kb(bb, cb) {
      (null == cb || cb > bb.length) && (cb = bb.length);
      for (var sb = 0, kb = Array(cb); sb < cb; sb++) kb[sb] = bb[sb];
      return kb
    }

    function Wb(bb, cb) {
      for (var sb = 0; sb < cb.length; sb++) {
        var kb = cb[sb];
        kb.enumerable = kb.enumerable || !1, kb.configurable = !0, "value" in kb && (kb.writable = !0), Object.defineProperty(bb, Mb(kb.key), kb)
      }
    }

    function ab(bb, cb) {
      var sb = "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
      if (!sb) {
        if (Array.isArray(bb) || (sb = nb(bb)) || cb && bb && "number" == typeof bb.length) {
          sb && (bb = sb);
          var kb = 0,
            Wb = function() {};
          return {
            s: Wb,
            n: function() {
              return kb >= bb.length ? {
                done: !0
              } : {
                done: !1,
                value: bb[kb++]
              }
            },
            e: function(bb) {
              throw bb
            },
            f: Wb
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var ab, Tb = !0,
        Ub = !1;
      return {
        s: function() {
          sb = sb.call(bb)
        },
        n: function() {
          var bb = sb.next();
          return Tb = bb.done, bb
        },
        e: function(bb) {
          Ub = !0, ab = bb
        },
        f: function() {
          try {
            Tb || null == sb.return || sb.return()
          } finally {
            if (Ub) throw ab
          }
        }
      }
    }

    function Tb(bb, cb, sb) {
      return (cb = Mb(cb)) in bb ? Object.defineProperty(bb, cb, {
        value: sb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[cb] = sb, bb
    }

    function Ub(bb, cb) {
      var sb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var kb = Object.getOwnPropertySymbols(bb);
        cb && (kb = kb.filter((function(cb) {
          return Object.getOwnPropertyDescriptor(bb, cb).enumerable
        }))), sb.push.apply(sb, kb)
      }
      return sb
    }

    function Ib(bb) {
      for (var cb = 1; cb < arguments.length; cb++) {
        var sb = null != arguments[cb] ? arguments[cb] : {};
        cb % 2 ? Ub(Object(sb), !0).forEach((function(cb) {
          Tb(bb, cb, sb[cb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(sb)) : Ub(Object(sb)).forEach((function(cb) {
          Object.defineProperty(bb, cb, Object.getOwnPropertyDescriptor(sb, cb))
        }))
      }
      return bb
    }

    function Hb(bb, cb) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, cb) {
        var sb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != sb) {
          var kb, Wb, ab, Tb, Ub = [],
            Ib = !0,
            Hb = !1;
          try {
            if (ab = (sb = sb.call(bb)).next, 0 === cb) {
              if (Object(sb) !== sb) return;
              Ib = !1
            } else
              for (; !(Ib = (kb = ab.call(sb)).done) && (Ub.push(kb.value), Ub.length !== cb); Ib = !0);
          } catch (bb) {
            Hb = !0, Wb = bb
          } finally {
            try {
              if (!Ib && null != sb.return && (Tb = sb.return(), Object(Tb) !== Tb)) return
            } finally {
              if (Hb) throw Wb
            }
          }
          return Ub
        }
      }(bb, cb) || nb(bb, cb) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fb(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return kb(bb)
      }(bb) || function(bb) {
        if ("undefined" != typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || nb(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Mb(bb) {
      var cb = function(bb, cb) {
        if ("object" != typeof bb || !bb) return bb;
        var sb = bb[Symbol.toPrimitive];
        if (void 0 !== sb) {
          var kb = sb.call(bb, cb || "default");
          if ("object" != typeof kb) return kb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cb ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == typeof cb ? cb : cb + ""
    }

    function Xb(bb) {
      return Xb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Xb(bb)
    }

    function nb(bb, cb) {
      if (bb) {
        if ("string" == typeof bb) return kb(bb, cb);
        var sb = {}.toString.call(bb).slice(8, -1);
        return "Object" === sb && bb.constructor && (sb = bb.constructor.name), "Map" === sb || "Set" === sb ? Array.from(bb) : "Arguments" === sb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(sb) ? kb(bb, cb) : void 0
      }
    }
    sb.r(cb), sb.d(cb, {
      api: () => xs,
      config: () => aW,
      counter: () => mW,
      dom: () => UW,
      findIconDefinition: () => HW,
      icon: () => MW,
      layer: () => XW,
      library: () => TW,
      noAuto: () => WW,
      parse: () => IW,
      text: () => nW,
      toHtml: () => fW
    });
    var mb = function() {},
      lb = {},
      Qb = {},
      eb = null,
      Cb = {
        mark: mb,
        measure: mb
      };
    try {
      "undefined" !== typeof window && (lb = window), "undefined" !== typeof document && (Qb = document), "undefined" !== typeof MutationObserver && (eb = MutationObserver), "undefined" !== typeof performance && (Cb = performance)
    } catch (wb) {}
    var Nb, Vb, Lb = (lb.navigator || {}).userAgent,
      ub = void 0 === Lb ? "" : Lb,
      Yb = lb,
      hb = Qb,
      Jb = eb,
      gb = Cb,
      Bb = (Yb.document, !!hb.documentElement && !!hb.head && "function" === typeof hb.addEventListener && "function" === typeof hb.createElement),
      tb = ~ub.indexOf("MSIE") || ~ub.indexOf("Trident/"),
      yb = {
        classic: {
          fa: "solid",
          fas: "solid",
          "fa-solid": "solid",
          far: "regular",
          "fa-regular": "regular",
          fal: "light",
          "fa-light": "light",
          fat: "thin",
          "fa-thin": "thin",
          fab: "brands",
          "fa-brands": "brands"
        },
        duotone: {
          fa: "solid",
          fad: "solid",
          "fa-solid": "solid",
          "fa-duotone": "solid",
          fadr: "regular",
          "fa-regular": "regular",
          fadl: "light",
          "fa-light": "light",
          fadt: "thin",
          "fa-thin": "thin"
        },
        sharp: {
          fa: "solid",
          fass: "solid",
          "fa-solid": "solid",
          fasr: "regular",
          "fa-regular": "regular",
          fasl: "light",
          "fa-light": "light",
          fast: "thin",
          "fa-thin": "thin"
        },
        "sharp-duotone": {
          fa: "solid",
          fasds: "solid",
          "fa-solid": "solid",
          fasdr: "regular",
          "fa-regular": "regular",
          fasdl: "light",
          "fa-light": "light",
          fasdt: "thin",
          "fa-thin": "thin"
        },
        slab: {
          "fa-regular": "regular",
          faslr: "regular"
        },
        "slab-press": {
          "fa-regular": "regular",
          faslpr: "regular"
        },
        thumbprint: {
          "fa-light": "light",
          fatl: "light"
        },
        whiteboard: {
          "fa-semibold": "semibold",
          fawsb: "semibold"
        },
        notdog: {
          "fa-solid": "solid",
          fans: "solid"
        },
        "notdog-duo": {
          "fa-solid": "solid",
          fands: "solid"
        },
        etch: {
          "fa-solid": "solid",
          faes: "solid"
        },
        graphite: {
          "fa-thin": "thin",
          fagt: "thin"
        },
        jelly: {
          "fa-regular": "regular",
          fajr: "regular"
        },
        "jelly-fill": {
          "fa-regular": "regular",
          fajfr: "regular"
        },
        "jelly-duo": {
          "fa-regular": "regular",
          fajdr: "regular"
        },
        chisel: {
          "fa-regular": "regular",
          facr: "regular"
        },
        utility: {
          "fa-semibold": "semibold",
          fausb: "semibold"
        },
        "utility-duo": {
          "fa-semibold": "semibold",
          faudsb: "semibold"
        },
        "utility-fill": {
          "fa-semibold": "semibold",
          faufsb: "semibold"
        }
      },
      Pb = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      Db = "classic",
      Eb = "duotone",
      ib = "sharp",
      Ob = "sharp-duotone",
      Gb = "chisel",
      Kb = "etch",
      Zb = "graphite",
      zb = "jelly",
      qb = "jelly-duo",
      db = "jelly-fill",
      Ab = "notdog",
      wb = "notdog-duo",
      rb = "slab",
      ob = "slab-press",
      Sb = "thumbprint",
      Rb = "utility",
      vb = "utility-duo",
      Fb = "utility-fill",
      xb = "whiteboard",
      jb = [Db, Eb, ib, Ob, Gb, Kb, Zb, zb, qb, db, Ab, wb, rb, ob, Sb, Rb, vb, Fb, xb],
      pb = (Tb(Tb(Tb(Tb(Tb(Tb(Tb(Tb(Tb(Tb(Nb = {}, Db, "Classic"), Eb, "Duotone"), ib, "Sharp"), Ob, "Sharp Duotone"), Gb, "Chisel"), Kb, "Etch"), Zb, "Graphite"), zb, "Jelly"), qb, "Jelly Duo"), db, "Jelly Fill"), Tb(Tb(Tb(Tb(Tb(Tb(Tb(Tb(Tb(Nb, Ab, "Notdog"), wb, "Notdog Duo"), rb, "Slab"), ob, "Slab Press"), Sb, "Thumbprint"), Rb, "Utility"), vb, "Utility Duo"), Fb, "Utility Fill"), xb, "Whiteboard"), new Map([
        ["classic", {
          defaultShortPrefixId: "fas",
          defaultStyleId: "solid",
          styleIds: ["solid", "regular", "light", "thin", "brands"],
          futureStyleIds: [],
          defaultFontWeight: 900
        }],
        ["duotone", {
          defaultShortPrefixId: "fad",
          defaultStyleId: "solid",
          styleIds: ["solid", "regular", "light", "thin"],
          futureStyleIds: [],
          defaultFontWeight: 900
        }],
        ["sharp", {
          defaultShortPrefixId: "fass",
          defaultStyleId: "solid",
          styleIds: ["solid", "regular", "light", "thin"],
          futureStyleIds: [],
          defaultFontWeight: 900
        }],
        ["sharp-duotone", {
          defaultShortPrefixId: "fasds",
          defaultStyleId: "solid",
          styleIds: ["solid", "regular", "light", "thin"],
          futureStyleIds: [],
          defaultFontWeight: 900
        }],
        ["chisel", {
          defaultShortPrefixId: "facr",
          defaultStyleId: "regular",
          styleIds: ["regular"],
          futureStyleIds: [],
          defaultFontWeight: 400
        }],
        ["etch", {
          defaultShortPrefixId: "faes",
          defaultStyleId: "solid",
          styleIds: ["solid"],
          futureStyleIds: [],
          defaultFontWeight: 900
        }],
        ["graphite", {
          defaultShortPrefixId: "fagt",
          defaultStyleId: "thin",
          styleIds: ["thin"],
          futureStyleIds: [],
          defaultFontWeight: 100
        }],
        ["jelly", {
          defaultShortPrefixId: "fajr",
          defaultStyleId: "regular",
          styleIds: ["regular"],
          futureStyleIds: [],
          defaultFontWeight: 400
        }],
        ["jelly-duo", {
          defaultShortPrefixId: "fajdr",
          defaultStyleId: "regular",
          styleIds: ["regular"],
          futureStyleIds: [],
          defaultFontWeight: 400
        }],
        ["jelly-fill", {
          defaultShortPrefixId: "fajfr",
          defaultStyleId: "regular",
          styleIds: ["regular"],
          futureStyleIds: [],
          defaultFontWeight: 400
        }],
        ["notdog", {
          defaultShortPrefixId: "fans",
          defaultStyleId: "solid",
          styleIds: ["solid"],
          futureStyleIds: [],
          defaultFontWeight: 900
        }],
        ["notdog-duo", {
          defaultShortPrefixId: "fands",
          defaultStyleId: "solid",
          styleIds: ["solid"],
          futureStyleIds: [],
          defaultFontWeight: 900
        }],
        ["slab", {
          defaultShortPrefixId: "faslr",
          defaultStyleId: "regular",
          styleIds: ["regular"],
          futureStyleIds: [],
          defaultFontWeight: 400
        }],
        ["slab-press", {
          defaultShortPrefixId: "faslpr",
          defaultStyleId: "regular",
          styleIds: ["regular"],
          futureStyleIds: [],
          defaultFontWeight: 400
        }],
        ["thumbprint", {
          defaultShortPrefixId: "fatl",
          defaultStyleId: "light",
          styleIds: ["light"],
          futureStyleIds: [],
          defaultFontWeight: 300
        }],
        ["utility", {
          defaultShortPrefixId: "fausb",
          defaultStyleId: "semibold",
          styleIds: ["semibold"],
          futureStyleIds: [],
          defaultFontWeight: 600
        }],
        ["utility-duo", {
          defaultShortPrefixId: "faudsb",
          defaultStyleId: "semibold",
          styleIds: ["semibold"],
          futureStyleIds: [],
          defaultFontWeight: 600
        }],
        ["utility-fill", {
          defaultShortPrefixId: "faufsb",
          defaultStyleId: "semibold",
          styleIds: ["semibold"],
          futureStyleIds: [],
          defaultFontWeight: 600
        }],
        ["whiteboard", {
          defaultShortPrefixId: "fawsb",
          defaultStyleId: "semibold",
          styleIds: ["semibold"],
          futureStyleIds: [],
          defaultFontWeight: 600
        }]
      ])),
      bc = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      cc = {
        fak: "kit",
        "fa-kit": "kit"
      },
      sc = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      kc = (Tb(Tb({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      Wc = {
        "kit-duotone": "fakd"
      },
      ac = "duotone-group",
      Tc = "swap-opacity",
      Uc = "primary",
      Ic = "secondary",
      Hc = (Tb(Tb(Tb(Tb(Tb(Tb(Tb(Tb(Tb(Tb(Vb = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), Tb(Tb(Tb(Tb(Tb(Tb(Tb(Tb(Tb(Vb, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), Tb(Tb({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        classic: {
          fab: "fa-brands",
          fad: "fa-duotone",
          fal: "fa-light",
          far: "fa-regular",
          fas: "fa-solid",
          fat: "fa-thin"
        },
        duotone: {
          fadr: "fa-regular",
          fadl: "fa-light",
          fadt: "fa-thin"
        },
        sharp: {
          fass: "fa-solid",
          fasr: "fa-regular",
          fasl: "fa-light",
          fast: "fa-thin"
        },
        "sharp-duotone": {
          fasds: "fa-solid",
          fasdr: "fa-regular",
          fasdl: "fa-light",
          fasdt: "fa-thin"
        },
        slab: {
          faslr: "fa-regular"
        },
        "slab-press": {
          faslpr: "fa-regular"
        },
        whiteboard: {
          fawsb: "fa-semibold"
        },
        thumbprint: {
          fatl: "fa-light"
        },
        notdog: {
          fans: "fa-solid"
        },
        "notdog-duo": {
          fands: "fa-solid"
        },
        etch: {
          faes: "fa-solid"
        },
        graphite: {
          fagt: "fa-thin"
        },
        jelly: {
          fajr: "fa-regular"
        },
        "jelly-fill": {
          fajfr: "fa-regular"
        },
        "jelly-duo": {
          fajdr: "fa-regular"
        },
        chisel: {
          facr: "fa-regular"
        },
        utility: {
          fausb: "fa-semibold"
        },
        "utility-duo": {
          faudsb: "fa-semibold"
        },
        "utility-fill": {
          faufsb: "fa-semibold"
        }
      }),
      fc = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      Mc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Xc = Mc.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      nc = [].concat(fb(Object.keys({
        classic: ["fas", "far", "fal", "fat", "fad"],
        duotone: ["fadr", "fadl", "fadt"],
        sharp: ["fass", "fasr", "fasl", "fast"],
        "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
        slab: ["faslr"],
        "slab-press": ["faslpr"],
        whiteboard: ["fawsb"],
        thumbprint: ["fatl"],
        notdog: ["fans"],
        "notdog-duo": ["fands"],
        etch: ["faes"],
        graphite: ["fagt"],
        jelly: ["fajr"],
        "jelly-fill": ["fajfr"],
        "jelly-duo": ["fajdr"],
        chisel: ["facr"],
        utility: ["fausb"],
        "utility-duo": ["faudsb"],
        "utility-fill": ["faufsb"]
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", ac, Tc, Uc, Ic]).concat(Mc.map((function(bb) {
        return "".concat(bb, "x")
      }))).concat(Xc.map((function(bb) {
        return "w-".concat(bb)
      }))),
      mc = "___FONT_AWESOME___",
      lc = "svg-inline--fa",
      Qc = "data-fa-i2svg",
      ec = "data-fa-pseudo-element",
      Cc = "data-prefix",
      Nc = "data-icon",
      Vc = "fontawesome-i2svg",
      Lc = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      uc = ["::before", "::after", ":before", ":after"],
      Yc = function() {
        try {
          return !0
        } catch (bb) {
          return !1
        }
      }();

    function hc(bb) {
      return new Proxy(bb, {
        get: function(bb, cb) {
          return cb in bb ? bb[cb] : bb[Db]
        }
      })
    }
    var Jc = Ib({}, yb);
    Jc[Db] = Ib(Ib(Ib(Ib({}, {
      "fa-duotone": "duotone"
    }), yb[Db]), cc), sc);
    var gc = hc(Jc),
      Bc = Ib({}, {
        chisel: {
          regular: "facr"
        },
        classic: {
          brands: "fab",
          light: "fal",
          regular: "far",
          solid: "fas",
          thin: "fat"
        },
        duotone: {
          light: "fadl",
          regular: "fadr",
          solid: "fad",
          thin: "fadt"
        },
        etch: {
          solid: "faes"
        },
        graphite: {
          thin: "fagt"
        },
        jelly: {
          regular: "fajr"
        },
        "jelly-duo": {
          regular: "fajdr"
        },
        "jelly-fill": {
          regular: "fajfr"
        },
        notdog: {
          solid: "fans"
        },
        "notdog-duo": {
          solid: "fands"
        },
        sharp: {
          light: "fasl",
          regular: "fasr",
          solid: "fass",
          thin: "fast"
        },
        "sharp-duotone": {
          light: "fasdl",
          regular: "fasdr",
          solid: "fasds",
          thin: "fasdt"
        },
        slab: {
          regular: "faslr"
        },
        "slab-press": {
          regular: "faslpr"
        },
        thumbprint: {
          light: "fatl"
        },
        utility: {
          semibold: "fausb"
        },
        "utility-duo": {
          semibold: "faudsb"
        },
        "utility-fill": {
          semibold: "faufsb"
        },
        whiteboard: {
          semibold: "fawsb"
        }
      });
    Bc[Db] = Ib(Ib(Ib(Ib({}, {
      duotone: "fad"
    }), Bc[Db]), kc), Wc);
    var tc = hc(Bc),
      yc = Ib({}, Hc);
    yc[Db] = Ib(Ib({}, yc[Db]), {
      fak: "fa-kit"
    });
    var Pc = hc(yc),
      Dc = Ib({}, {
        classic: {
          "fa-brands": "fab",
          "fa-duotone": "fad",
          "fa-light": "fal",
          "fa-regular": "far",
          "fa-solid": "fas",
          "fa-thin": "fat"
        },
        duotone: {
          "fa-regular": "fadr",
          "fa-light": "fadl",
          "fa-thin": "fadt"
        },
        sharp: {
          "fa-solid": "fass",
          "fa-regular": "fasr",
          "fa-light": "fasl",
          "fa-thin": "fast"
        },
        "sharp-duotone": {
          "fa-solid": "fasds",
          "fa-regular": "fasdr",
          "fa-light": "fasdl",
          "fa-thin": "fasdt"
        },
        slab: {
          "fa-regular": "faslr"
        },
        "slab-press": {
          "fa-regular": "faslpr"
        },
        whiteboard: {
          "fa-semibold": "fawsb"
        },
        thumbprint: {
          "fa-light": "fatl"
        },
        notdog: {
          "fa-solid": "fans"
        },
        "notdog-duo": {
          "fa-solid": "fands"
        },
        etch: {
          "fa-solid": "faes"
        },
        graphite: {
          "fa-thin": "fagt"
        },
        jelly: {
          "fa-regular": "fajr"
        },
        "jelly-fill": {
          "fa-regular": "fajfr"
        },
        "jelly-duo": {
          "fa-regular": "fajdr"
        },
        chisel: {
          "fa-regular": "facr"
        },
        utility: {
          "fa-semibold": "fausb"
        },
        "utility-duo": {
          "fa-semibold": "faudsb"
        },
        "utility-fill": {
          "fa-semibold": "faufsb"
        }
      });
    Dc[Db] = Ib(Ib({}, Dc[Db]), {
      "fa-kit": "fak"
    });
    hc(Dc);
    var Ec = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      ic = "fa-layers-text",
      Oc = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Gc = (hc(Ib({}, {
        classic: {
          900: "fas",
          400: "far",
          normal: "far",
          300: "fal",
          100: "fat"
        },
        duotone: {
          900: "fad",
          400: "fadr",
          300: "fadl",
          100: "fadt"
        },
        sharp: {
          900: "fass",
          400: "fasr",
          300: "fasl",
          100: "fast"
        },
        "sharp-duotone": {
          900: "fasds",
          400: "fasdr",
          300: "fasdl",
          100: "fasdt"
        },
        slab: {
          400: "faslr"
        },
        "slab-press": {
          400: "faslpr"
        },
        whiteboard: {
          600: "fawsb"
        },
        thumbprint: {
          300: "fatl"
        },
        notdog: {
          900: "fans"
        },
        "notdog-duo": {
          900: "fands"
        },
        etch: {
          900: "faes"
        },
        graphite: {
          100: "fagt"
        },
        chisel: {
          400: "facr"
        },
        jelly: {
          400: "fajr"
        },
        "jelly-fill": {
          400: "fajfr"
        },
        "jelly-duo": {
          400: "fajdr"
        },
        utility: {
          600: "fausb"
        },
        "utility-duo": {
          600: "faudsb"
        },
        "utility-fill": {
          600: "faufsb"
        }
      })), ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"]),
      Kc = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      Zc = [].concat(fb(["kit"]), fb(nc)),
      zc = Yb.FontAwesomeConfig || {};
    if (hb && "function" === typeof hb.querySelector) {
      [
        ["data-family-prefix", "familyPrefix"],
        ["data-css-prefix", "cssPrefix"],
        ["data-family-default", "familyDefault"],
        ["data-style-default", "styleDefault"],
        ["data-replacement-class", "replacementClass"],
        ["data-auto-replace-svg", "autoReplaceSvg"],
        ["data-auto-add-css", "autoAddCss"],
        ["data-search-pseudo-elements", "searchPseudoElements"],
        ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"],
        ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"],
        ["data-observe-mutations", "observeMutations"],
        ["data-mutate-approach", "mutateApproach"],
        ["data-keep-original-source", "keepOriginalSource"],
        ["data-measure-performance", "measurePerformance"],
        ["data-show-missing-icons", "showMissingIcons"]
      ].forEach((function(bb) {
        var cb = Hb(bb, 2),
          sb = cb[0],
          kb = cb[1],
          Wb = function(bb) {
            return "" === bb || "false" !== bb && ("true" === bb || bb)
          }(function(bb) {
            var cb = hb.querySelector("script[" + bb + "]");
            if (cb) return cb.getAttribute(bb)
          }(sb));
        void 0 !== Wb && null !== Wb && (zc[kb] = Wb)
      }))
    }
    var qc = {
      styleDefault: "solid",
      familyDefault: Db,
      cssPrefix: "fa",
      replacementClass: lc,
      autoReplaceSvg: !0,
      autoAddCss: !0,
      searchPseudoElements: !1,
      searchPseudoElementsWarnings: !0,
      searchPseudoElementsFullScan: !1,
      observeMutations: !0,
      mutateApproach: "async",
      keepOriginalSource: !0,
      measurePerformance: !1,
      showMissingIcons: !0
    };
    zc.familyPrefix && (zc.cssPrefix = zc.familyPrefix);
    var dc = Ib(Ib({}, qc), zc);
    dc.autoReplaceSvg || (dc.observeMutations = !1);
    var Ac = {};
    Object.keys(qc).forEach((function(bb) {
      Object.defineProperty(Ac, bb, {
        enumerable: !0,
        set: function(cb) {
          dc[bb] = cb, wc.forEach((function(bb) {
            return bb(Ac)
          }))
        },
        get: function() {
          return dc[bb]
        }
      })
    })), Object.defineProperty(Ac, "familyPrefix", {
      enumerable: !0,
      set: function(bb) {
        dc.cssPrefix = bb, wc.forEach((function(bb) {
          return bb(Ac)
        }))
      },
      get: function() {
        return dc.cssPrefix
      }
    }), Yb.FontAwesomeConfig = Ac;
    var wc = [];
    var rc = 16,
      oc = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function Sc() {
      for (var bb = 12, cb = ""; bb-- > 0;) cb += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return cb
    }

    function Rc(bb) {
      for (var cb = [], sb = (bb || []).length >>> 0; sb--;) cb[sb] = bb[sb];
      return cb
    }

    function vc(bb) {
      return bb.classList ? Rc(bb.classList) : (bb.getAttribute("class") || "").split(" ").filter((function(bb) {
        return bb
      }))
    }

    function Fc(bb) {
      return "".concat(bb).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function xc(bb) {
      return Object.keys(bb || {}).reduce((function(cb, sb) {
        return cb + "".concat(sb, ": ").concat(bb[sb].trim(), ";")
      }), "")
    }

    function jc(bb) {
      return bb.size !== oc.size || bb.x !== oc.x || bb.y !== oc.y || bb.rotate !== oc.rotate || bb.flipX || bb.flipY
    }

    function pc() {
      var bb = "fa",
        cb = lc,
        sb = Ac.cssPrefix,
        kb = Ac.replacementClass,
        Wb = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (sb !== bb || kb !== cb) {
        var ab = new RegExp("\\.".concat(bb, "\\-"), "g"),
          Tb = new RegExp("\\--".concat(bb, "\\-"), "g"),
          Ub = new RegExp("\\.".concat(cb), "g");
        Wb = Wb.replace(ab, ".".concat(sb, "-")).replace(Tb, "--".concat(sb, "-")).replace(Ub, ".".concat(kb))
      }
      return Wb
    }
    var bs = !1;

    function cs() {
      Ac.autoAddCss && !bs && (! function(bb) {
        if (bb && Bb) {
          var cb = hb.createElement("style");
          cb.setAttribute("type", "text/css"), cb.innerHTML = bb;
          for (var sb = hb.head.childNodes, kb = null, Wb = sb.length - 1; Wb > -1; Wb--) {
            var ab = sb[Wb],
              Tb = (ab.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(Tb) > -1 && (kb = ab)
          }
          hb.head.insertBefore(cb, kb)
        }
      }(pc()), bs = !0)
    }
    var ss = {
        mixout: function() {
          return {
            dom: {
              css: pc,
              insertCss: cs
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              cs()
            },
            beforeI2svg: function() {
              cs()
            }
          }
        }
      },
      ks = Yb || {};
    ks[mc] || (ks[mc] = {}), ks[mc].styles || (ks[mc].styles = {}), ks[mc].hooks || (ks[mc].hooks = {}), ks[mc].shims || (ks[mc].shims = []);
    var Ws = ks[mc],
      as = [],
      Ts = function() {
        hb.removeEventListener("DOMContentLoaded", Ts), Us = 1, as.map((function(bb) {
          return bb()
        }))
      },
      Us = !1;

    function Is(bb) {
      var cb = bb.tag,
        sb = bb.attributes,
        kb = void 0 === sb ? {} : sb,
        Wb = bb.children,
        ab = void 0 === Wb ? [] : Wb;
      return "string" === typeof bb ? Fc(bb) : "<".concat(cb, " ").concat(function(bb) {
        return Object.keys(bb || {}).reduce((function(cb, sb) {
          return cb + "".concat(sb, '="').concat(Fc(bb[sb]), '" ')
        }), "").trim()
      }(kb), ">").concat(ab.map(Is).join(""), "</").concat(cb, ">")
    }

    function Hs(bb, cb, sb) {
      if (bb && bb[cb] && bb[cb][sb]) return {
        prefix: cb,
        iconName: sb,
        icon: bb[cb][sb]
      }
    }
    Bb && ((Us = (hb.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(hb.readyState)) || hb.addEventListener("DOMContentLoaded", Ts));
    var fs = function(bb, cb, sb, kb) {
      var Wb, ab, Tb, Ub = Object.keys(bb),
        Ib = Ub.length,
        Hb = void 0 !== kb ? function(bb, cb) {
          return function(sb, kb, Wb, ab) {
            return bb.call(cb, sb, kb, Wb, ab)
          }
        }(cb, kb) : cb;
      for (void 0 === sb ? (Wb = 1, Tb = bb[Ub[0]]) : (Wb = 0, Tb = sb); Wb < Ib; Wb++) Tb = Hb(Tb, bb[ab = Ub[Wb]], ab, bb);
      return Tb
    };

    function Ms(bb) {
      return 1 !== fb(bb).length ? null : bb.codePointAt(0).toString(16)
    }

    function Xs(bb) {
      return Object.keys(bb).reduce((function(cb, sb) {
        var kb = bb[sb];
        return !!kb.icon ? cb[kb.iconName] = kb.icon : cb[sb] = kb, cb
      }), {})
    }

    function ns(bb, cb) {
      var sb = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        kb = void 0 !== sb && sb,
        Wb = Xs(cb);
      "function" !== typeof Ws.hooks.addPack || kb ? Ws.styles[bb] = Ib(Ib({}, Ws.styles[bb] || {}), Wb) : Ws.hooks.addPack(bb, Xs(cb)), "fas" === bb && ns("fa", cb)
    }
    var ms = Ws.styles,
      ls = Ws.shims,
      Qs = Object.keys(Pc),
      es = Qs.reduce((function(bb, cb) {
        return bb[cb] = Object.keys(Pc[cb]), bb
      }), {}),
      Cs = null,
      Ns = {},
      Vs = {},
      Ls = {},
      us = {},
      Ys = {};

    function hs(bb, cb) {
      var sb, kb = cb.split("-"),
        Wb = kb[0],
        ab = kb.slice(1).join("-");
      return Wb !== bb || "" === ab || (sb = ab, ~Zc.indexOf(sb)) ? null : ab
    }
    var gs, Bs = function() {
      var bb = function(bb) {
        return fs(ms, (function(cb, sb, kb) {
          return cb[kb] = fs(sb, bb, {}), cb
        }), {})
      };
      Ns = bb((function(bb, cb, sb) {
        (cb[3] && (bb[cb[3]] = sb), cb[2]) && cb[2].filter((function(bb) {
          return "number" === typeof bb
        })).forEach((function(cb) {
          bb[cb.toString(16)] = sb
        }));
        return bb
      })), Vs = bb((function(bb, cb, sb) {
        (bb[sb] = sb, cb[2]) && cb[2].filter((function(bb) {
          return "string" === typeof bb
        })).forEach((function(cb) {
          bb[cb] = sb
        }));
        return bb
      })), Ys = bb((function(bb, cb, sb) {
        var kb = cb[2];
        return bb[sb] = sb, kb.forEach((function(cb) {
          bb[cb] = sb
        })), bb
      }));
      var cb = "far" in ms || Ac.autoFetchSvg,
        sb = fs(ls, (function(bb, sb) {
          var kb = sb[0],
            Wb = sb[1],
            ab = sb[2];
          return "far" !== Wb || cb || (Wb = "fas"), "string" === typeof kb && (bb.names[kb] = {
            prefix: Wb,
            iconName: ab
          }), "number" === typeof kb && (bb.unicodes[kb.toString(16)] = {
            prefix: Wb,
            iconName: ab
          }), bb
        }), {
          names: {},
          unicodes: {}
        });
      Ls = sb.names, us = sb.unicodes, Cs = Es(Ac.styleDefault, {
        family: Ac.familyDefault
      })
    };

    function ts(bb, cb) {
      return (Ns[bb] || {})[cb]
    }

    function ys(bb, cb) {
      return (Ys[bb] || {})[cb]
    }

    function Ps(bb) {
      return Ls[bb] || {
        prefix: null,
        iconName: null
      }
    }

    function Ds() {
      return Cs
    }
    gs = function(bb) {
      Cs = Es(bb.styleDefault, {
        family: Ac.familyDefault
      })
    }, wc.push(gs), Bs();

    function Es(bb) {
      var cb = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        sb = void 0 === cb ? Db : cb,
        kb = gc[sb][bb];
      if (sb === Eb && !bb) return "fad";
      var Wb = tc[sb][bb] || tc[sb][kb],
        ab = bb in Ws.styles ? bb : null;
      return Wb || ab || null
    }

    function is(bb) {
      return bb.sort().filter((function(bb, cb, sb) {
        return sb.indexOf(bb) === cb
      }))
    }
    var Os = fc.concat(bc);

    function Gs(bb) {
      var cb = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        sb = void 0 !== cb && cb,
        kb = null,
        Wb = is(bb.filter((function(bb) {
          return Os.includes(bb)
        }))),
        ab = is(bb.filter((function(bb) {
          return !Os.includes(bb)
        }))),
        Tb = Hb(Wb.filter((function(bb) {
          return kb = bb, !Pb.includes(bb)
        })), 1)[0],
        Ub = void 0 === Tb ? null : Tb,
        fb = function(bb) {
          var cb = Db,
            sb = Qs.reduce((function(bb, cb) {
              return bb[cb] = "".concat(Ac.cssPrefix, "-").concat(cb), bb
            }), {});
          return jb.forEach((function(kb) {
            (bb.includes(sb[kb]) || bb.some((function(bb) {
              return es[kb].includes(bb)
            }))) && (cb = kb)
          })), cb
        }(Wb),
        Mb = Ib(Ib({}, function(bb) {
          var cb = [],
            sb = null;
          return bb.forEach((function(bb) {
            var kb = hs(Ac.cssPrefix, bb);
            kb ? sb = kb : bb && cb.push(bb)
          })), {
            iconName: sb,
            rest: cb
          }
        }(ab)), {}, {
          prefix: Es(Ub, {
            family: fb
          })
        });
      return Ib(Ib(Ib({}, Mb), function(bb) {
        var cb = bb.values,
          sb = bb.family,
          kb = bb.canonical,
          Wb = bb.givenPrefix,
          ab = void 0 === Wb ? "" : Wb,
          Tb = bb.styles,
          Ub = void 0 === Tb ? {} : Tb,
          Ib = bb.config,
          Hb = void 0 === Ib ? {} : Ib,
          fb = sb === Eb,
          Mb = cb.includes("fa-duotone") || cb.includes("fad"),
          Xb = "duotone" === Hb.familyDefault,
          nb = "fad" === kb.prefix || "fa-duotone" === kb.prefix;
        !fb && (Mb || Xb || nb) && (kb.prefix = "fad");
        (cb.includes("fa-brands") || cb.includes("fab")) && (kb.prefix = "fab");
        if (!kb.prefix && Ks.includes(sb)) {
          if (Object.keys(Ub).find((function(bb) {
              return Zs.includes(bb)
            })) || Hb.autoFetchSvg) {
            var mb = pb.get(sb).defaultShortPrefixId;
            kb.prefix = mb, kb.iconName = ys(kb.prefix, kb.iconName) || kb.iconName
          }
        }
        "fa" !== kb.prefix && "fa" !== ab || (kb.prefix = Ds() || "fas");
        return kb
      }({
        values: bb,
        family: fb,
        styles: ms,
        config: Ac,
        canonical: Mb,
        givenPrefix: kb
      })), function(bb, cb, sb) {
        var kb = sb.prefix,
          Wb = sb.iconName;
        if (bb || !kb || !Wb) return {
          prefix: kb,
          iconName: Wb
        };
        var ab = "fa" === cb ? Ps(Wb) : {},
          Tb = ys(kb, Wb);
        Wb = ab.iconName || Tb || Wb, "far" !== (kb = ab.prefix || kb) || ms.far || !ms.fas || Ac.autoFetchSvg || (kb = "fas");
        return {
          prefix: kb,
          iconName: Wb
        }
      }(sb, kb, Mb))
    }
    var Ks = jb.filter((function(bb) {
        return bb !== Db || bb !== Eb
      })),
      Zs = Object.keys(Hc).filter((function(bb) {
        return bb !== Db
      })).map((function(bb) {
        return Object.keys(Hc[bb])
      })).flat();
    var zs = function() {
        return function(bb, cb, sb) {
          return cb && Wb(bb.prototype, cb), sb && Wb(bb, sb), Object.defineProperty(bb, "prototype", {
            writable: !1
          }), bb
        }((function bb() {
          ! function(bb, cb) {
            if (!(bb instanceof cb)) throw new TypeError("Cannot call a class as a function")
          }(this, bb), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var bb = this, cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
            var Wb = sb.reduce(this._pullDefinitions, {});
            Object.keys(Wb).forEach((function(cb) {
              bb.definitions[cb] = Ib(Ib({}, bb.definitions[cb] || {}), Wb[cb]), ns(cb, Wb[cb]);
              var sb = Pc[Db][cb];
              sb && ns(sb, Wb[cb]), Bs()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(bb, cb) {
            var sb = cb.prefix && cb.iconName && cb.icon ? {
              0: cb
            } : cb;
            return Object.keys(sb).map((function(cb) {
              var kb = sb[cb],
                Wb = kb.prefix,
                ab = kb.iconName,
                Tb = kb.icon,
                Ub = Tb[2];
              bb[Wb] || (bb[Wb] = {}), Ub.length > 0 && Ub.forEach((function(cb) {
                "string" === typeof cb && (bb[Wb][cb] = Tb)
              })), bb[Wb][ab] = Tb
            })), bb
          }
        }])
      }(),
      qs = [],
      ds = {},
      As = {},
      ws = Object.keys(As);

    function rs(bb, cb) {
      for (var sb = arguments.length, kb = new Array(sb > 2 ? sb - 2 : 0), Wb = 2; Wb < sb; Wb++) kb[Wb - 2] = arguments[Wb];
      return (ds[bb] || []).forEach((function(bb) {
        cb = bb.apply(null, [cb].concat(kb))
      })), cb
    }

    function os(bb) {
      for (var cb = arguments.length, sb = new Array(cb > 1 ? cb - 1 : 0), kb = 1; kb < cb; kb++) sb[kb - 1] = arguments[kb];
      (ds[bb] || []).forEach((function(bb) {
        bb.apply(null, sb)
      }))
    }

    function Ss() {
      var bb = arguments[0],
        cb = Array.prototype.slice.call(arguments, 1);
      return As[bb] ? As[bb].apply(null, cb) : void 0
    }

    function Rs(bb) {
      "fa" === bb.prefix && (bb.prefix = "fas");
      var cb = bb.iconName,
        sb = bb.prefix || Ds();
      if (cb) return cb = ys(sb, cb) || cb, Hs(vs.definitions, sb, cb) || Hs(Ws.styles, sb, cb)
    }
    var vs = new zs,
      Fs = {
        i2svg: function() {
          var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Bb ? (os("beforeI2svg", bb), Ss("pseudoElements2svg", bb), Ss("i2svg", bb)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var bb, cb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            sb = cb.autoReplaceSvgRoot;
          !1 === Ac.autoReplaceSvg && (Ac.autoReplaceSvg = !0), Ac.observeMutations = !0, bb = function() {
            ps({
              autoReplaceSvgRoot: sb
            }), os("watch", cb)
          }, Bb && (Us ? setTimeout(bb, 0) : as.push(bb))
        }
      },
      xs = {
        noAuto: function() {
          Ac.autoReplaceSvg = !1, Ac.observeMutations = !1, os("noAuto")
        },
        config: Ac,
        dom: Fs,
        parse: {
          icon: function(bb) {
            if (null === bb) return null;
            if ("object" === Xb(bb) && bb.prefix && bb.iconName) return {
              prefix: bb.prefix,
              iconName: ys(bb.prefix, bb.iconName) || bb.iconName
            };
            if (Array.isArray(bb) && 2 === bb.length) {
              var cb = 0 === bb[1].indexOf("fa-") ? bb[1].slice(3) : bb[1],
                sb = Es(bb[0]);
              return {
                prefix: sb,
                iconName: ys(sb, cb) || cb
              }
            }
            if ("string" === typeof bb && (bb.indexOf("".concat(Ac.cssPrefix, "-")) > -1 || bb.match(Ec))) {
              var kb = Gs(bb.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: kb.prefix || Ds(),
                iconName: ys(kb.prefix, kb.iconName) || kb.iconName
              }
            }
            if ("string" === typeof bb) {
              var Wb = Ds();
              return {
                prefix: Wb,
                iconName: ys(Wb, bb) || bb
              }
            }
          }
        },
        library: vs,
        findIconDefinition: Rs,
        toHtml: Is
      },
      ps = function() {
        var bb = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          cb = void 0 === bb ? hb : bb;
        (Object.keys(Ws.styles).length > 0 || Ac.autoFetchSvg) && Bb && Ac.autoReplaceSvg && xs.dom.i2svg({
          node: cb
        })
      };

    function bk(bb, cb) {
      return Object.defineProperty(bb, "abstract", {
        get: cb
      }), Object.defineProperty(bb, "html", {
        get: function() {
          return bb.abstract.map((function(bb) {
            return Is(bb)
          }))
        }
      }), Object.defineProperty(bb, "node", {
        get: function() {
          if (Bb) {
            var cb = hb.createElement("div");
            return cb.innerHTML = bb.html, cb.children
          }
        }
      }), bb
    }

    function ck(bb) {
      var cb = bb.icons,
        sb = cb.main,
        kb = cb.mask,
        Wb = bb.prefix,
        ab = bb.iconName,
        Tb = bb.transform,
        Ub = bb.symbol,
        Hb = bb.maskId,
        fb = bb.extra,
        Mb = bb.watchable,
        Xb = void 0 !== Mb && Mb,
        nb = kb.found ? kb : sb,
        mb = nb.width,
        lb = nb.height,
        Qb = [Ac.replacementClass, ab ? "".concat(Ac.cssPrefix, "-").concat(ab) : ""].filter((function(bb) {
          return -1 === fb.classes.indexOf(bb)
        })).filter((function(bb) {
          return "" !== bb || !!bb
        })).concat(fb.classes).join(" "),
        eb = {
          children: [],
          attributes: Ib(Ib({}, fb.attributes), {}, {
            "data-prefix": Wb,
            "data-icon": ab,
            class: Qb,
            role: fb.attributes.role || "img",
            viewBox: "0 0 ".concat(mb, " ").concat(lb)
          })
        };
      (function(bb) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(cb) {
          return cb in bb
        }))
      })(fb.attributes) || fb.attributes["aria-hidden"] || (eb.attributes["aria-hidden"] = "true"), Xb && (eb.attributes[Qc] = "");
      var Cb = Ib(Ib({}, eb), {}, {
          prefix: Wb,
          iconName: ab,
          main: sb,
          mask: kb,
          maskId: Hb,
          transform: Tb,
          symbol: Ub,
          styles: Ib({}, fb.styles)
        }),
        Nb = kb.found && sb.found ? Ss("generateAbstractMask", Cb) || {
          children: [],
          attributes: {}
        } : Ss("generateAbstractIcon", Cb) || {
          children: [],
          attributes: {}
        },
        Vb = Nb.children,
        Lb = Nb.attributes;
      return Cb.children = Vb, Cb.attributes = Lb, Ub ? function(bb) {
        var cb = bb.prefix,
          sb = bb.iconName,
          kb = bb.children,
          Wb = bb.attributes,
          ab = bb.symbol,
          Tb = !0 === ab ? "".concat(cb, "-").concat(Ac.cssPrefix, "-").concat(sb) : ab;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: Ib(Ib({}, Wb), {}, {
              id: Tb
            }),
            children: kb
          }]
        }]
      }(Cb) : function(bb) {
        var cb = bb.children,
          sb = bb.main,
          kb = bb.mask,
          Wb = bb.attributes,
          ab = bb.styles,
          Tb = bb.transform;
        if (jc(Tb) && sb.found && !kb.found) {
          var Ub = {
            x: sb.width / sb.height / 2,
            y: .5
          };
          Wb.style = xc(Ib(Ib({}, ab), {}, {
            "transform-origin": "".concat(Ub.x + Tb.x / 16, "em ").concat(Ub.y + Tb.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: Wb,
          children: cb
        }]
      }(Cb)
    }

    function sk(bb) {
      var cb = bb.content,
        sb = bb.width,
        kb = bb.height,
        Wb = bb.transform,
        ab = bb.extra,
        Tb = bb.watchable,
        Ub = void 0 !== Tb && Tb,
        Hb = Ib(Ib({}, ab.attributes), {}, {
          class: ab.classes.join(" ")
        });
      Ub && (Hb[Qc] = "");
      var fb = Ib({}, ab.styles);
      jc(Wb) && (fb.transform = function(bb) {
        var cb = bb.transform,
          sb = bb.width,
          kb = void 0 === sb ? 16 : sb,
          Wb = bb.height,
          ab = void 0 === Wb ? 16 : Wb,
          Tb = bb.startCentered,
          Ub = void 0 !== Tb && Tb,
          Ib = "";
        return Ib += Ub && tb ? "translate(".concat(cb.x / rc - kb / 2, "em, ").concat(cb.y / rc - ab / 2, "em) ") : Ub ? "translate(calc(-50% + ".concat(cb.x / rc, "em), calc(-50% + ").concat(cb.y / rc, "em)) ") : "translate(".concat(cb.x / rc, "em, ").concat(cb.y / rc, "em) "), Ib += "scale(".concat(cb.size / rc * (cb.flipX ? -1 : 1), ", ").concat(cb.size / rc * (cb.flipY ? -1 : 1), ") "), Ib + "rotate(".concat(cb.rotate, "deg) ")
      }({
        transform: Wb,
        startCentered: !0,
        width: sb,
        height: kb
      }), fb["-webkit-transform"] = fb.transform);
      var Mb = xc(fb);
      Mb.length > 0 && (Hb.style = Mb);
      var Xb = [];
      return Xb.push({
        tag: "span",
        attributes: Hb,
        children: [cb]
      }), Xb
    }
    var kk = Ws.styles;

    function Wk(bb) {
      var cb = bb[0],
        sb = bb[1],
        kb = Hb(bb.slice(4), 1)[0];
      return {
        found: !0,
        width: cb,
        height: sb,
        icon: Array.isArray(kb) ? {
          tag: "g",
          attributes: {
            class: "".concat(Ac.cssPrefix, "-").concat(Kc.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(Ac.cssPrefix, "-").concat(Kc.SECONDARY),
              fill: "currentColor",
              d: kb[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(Ac.cssPrefix, "-").concat(Kc.PRIMARY),
              fill: "currentColor",
              d: kb[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: kb
          }
        }
      }
    }
    var ak = {
      found: !1,
      width: 512,
      height: 512
    };

    function Tk(bb, cb) {
      var sb = cb;
      return "fa" === cb && null !== Ac.styleDefault && (cb = Ds()), new Promise((function(kb, Wb) {
        if ("fa" === sb) {
          var ab = Ps(bb) || {};
          bb = ab.iconName || bb, cb = ab.prefix || cb
        }
        if (bb && cb && kk[cb] && kk[cb][bb]) return kb(Wk(kk[cb][bb]));
        ! function(bb, cb) {
          Yc || Ac.showMissingIcons || !bb || console.error('Icon with name "'.concat(bb, '" and prefix "').concat(cb, '" is missing.'))
        }(bb, cb), kb(Ib(Ib({}, ak), {}, {
          icon: Ac.showMissingIcons && bb && Ss("missingIconAbstract") || {}
        }))
      }))
    }
    var Uk = function() {},
      Ik = Ac.measurePerformance && gb && gb.mark && gb.measure ? gb : {
        mark: Uk,
        measure: Uk
      },
      Hk = 'FA "7.2.0"',
      fk = function(bb) {
        Ik.mark("".concat(Hk, " ").concat(bb, " ends")), Ik.measure("".concat(Hk, " ").concat(bb), "".concat(Hk, " ").concat(bb, " begins"), "".concat(Hk, " ").concat(bb, " ends"))
      },
      Mk = function(bb) {
        return Ik.mark("".concat(Hk, " ").concat(bb, " begins")),
          function() {
            return fk(bb)
          }
      },
      Xk = function() {};

    function nk(bb) {
      return "string" === typeof(bb.getAttribute ? bb.getAttribute(Qc) : null)
    }

    function mk(bb) {
      return hb.createElementNS("http://www.w3.org/2000/svg", bb)
    }

    function lk(bb) {
      return hb.createElement(bb)
    }

    function Qk(bb) {
      var cb = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        sb = void 0 === cb ? "svg" === bb.tag ? mk : lk : cb;
      if ("string" === typeof bb) return hb.createTextNode(bb);
      var kb = sb(bb.tag);
      return Object.keys(bb.attributes || []).forEach((function(cb) {
        kb.setAttribute(cb, bb.attributes[cb])
      })), (bb.children || []).forEach((function(bb) {
        kb.appendChild(Qk(bb, {
          ceFn: sb
        }))
      })), kb
    }
    var ek = {
      replace: function(bb) {
        var cb = bb[0];
        if (cb.parentNode)
          if (bb[1].forEach((function(bb) {
              cb.parentNode.insertBefore(Qk(bb), cb)
            })), null === cb.getAttribute(Qc) && Ac.keepOriginalSource) {
            var sb = hb.createComment(function(bb) {
              var cb = " ".concat(bb.outerHTML, " ");
              return "".concat(cb, "Font Awesome fontawesome.com ")
            }(cb));
            cb.parentNode.replaceChild(sb, cb)
          } else cb.remove()
      },
      nest: function(bb) {
        var cb = bb[0],
          sb = bb[1];
        if (~vc(cb).indexOf(Ac.replacementClass)) return ek.replace(bb);
        var kb = new RegExp("".concat(Ac.cssPrefix, "-.*"));
        if (delete sb[0].attributes.id, sb[0].attributes.class) {
          var Wb = sb[0].attributes.class.split(" ").reduce((function(bb, cb) {
            return cb === Ac.replacementClass || cb.match(kb) ? bb.toSvg.push(cb) : bb.toNode.push(cb), bb
          }), {
            toNode: [],
            toSvg: []
          });
          sb[0].attributes.class = Wb.toSvg.join(" "), 0 === Wb.toNode.length ? cb.removeAttribute("class") : cb.setAttribute("class", Wb.toNode.join(" "))
        }
        var ab = sb.map((function(bb) {
          return Is(bb)
        })).join("\n");
        cb.setAttribute(Qc, ""), cb.innerHTML = ab
      }
    };

    function Ck(bb) {
      bb()
    }

    function Nk(bb, cb) {
      var sb = "function" === typeof cb ? cb : Xk;
      if (0 === bb.length) sb();
      else {
        var kb = Ck;
        "async" === Ac.mutateApproach && (kb = Yb.requestAnimationFrame || Ck), kb((function() {
          var cb = !0 === Ac.autoReplaceSvg ? ek.replace : ek[Ac.autoReplaceSvg] || ek.replace,
            kb = Mk("mutate");
          bb.map(cb), kb(), sb()
        }))
      }
    }
    var Vk = !1;

    function Lk() {
      Vk = !0
    }

    function uk() {
      Vk = !1
    }
    var Yk = null;

    function hk(bb) {
      if (Jb && Ac.observeMutations) {
        var cb = bb.treeCallback,
          sb = void 0 === cb ? Xk : cb,
          kb = bb.nodeCallback,
          Wb = void 0 === kb ? Xk : kb,
          ab = bb.pseudoElementsCallback,
          Tb = void 0 === ab ? Xk : ab,
          Ub = bb.observeMutationsRoot,
          Ib = void 0 === Ub ? hb : Ub;
        Yk = new Jb((function(bb) {
          if (!Vk) {
            var cb = Ds();
            Rc(bb).forEach((function(bb) {
              if ("childList" === bb.type && bb.addedNodes.length > 0 && !nk(bb.addedNodes[0]) && (Ac.searchPseudoElements && Tb(bb.target), sb(bb.target)), "attributes" === bb.type && bb.target.parentNode && Ac.searchPseudoElements && Tb([bb.target], !0), "attributes" === bb.type && nk(bb.target) && ~Gc.indexOf(bb.attributeName))
                if ("class" === bb.attributeName && function(bb) {
                    var cb = bb.getAttribute ? bb.getAttribute(Cc) : null,
                      sb = bb.getAttribute ? bb.getAttribute(Nc) : null;
                    return cb && sb
                  }(bb.target)) {
                  var kb = Gs(vc(bb.target)),
                    ab = kb.prefix,
                    Ub = kb.iconName;
                  bb.target.setAttribute(Cc, ab || cb), Ub && bb.target.setAttribute(Nc, Ub)
                } else(Ib = bb.target) && Ib.classList && Ib.classList.contains && Ib.classList.contains(Ac.replacementClass) && Wb(bb.target);
              var Ib
            }))
          }
        })), Bb && Yk.observe(Ib, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function Jk(bb) {
      var cb, sb, kb = bb.getAttribute("data-prefix"),
        Wb = bb.getAttribute("data-icon"),
        ab = void 0 !== bb.innerText ? bb.innerText.trim() : "",
        Tb = Gs(vc(bb));
      return Tb.prefix || (Tb.prefix = Ds()), kb && Wb && (Tb.prefix = kb, Tb.iconName = Wb), Tb.iconName && Tb.prefix || (Tb.prefix && ab.length > 0 && (Tb.iconName = (cb = Tb.prefix, sb = bb.innerText, (Vs[cb] || {})[sb] || ts(Tb.prefix, Ms(bb.innerText)))), !Tb.iconName && Ac.autoFetchSvg && bb.firstChild && bb.firstChild.nodeType === Node.TEXT_NODE && (Tb.iconName = bb.firstChild.data)), Tb
    }

    function gk(bb) {
      var cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        sb = Jk(bb),
        kb = sb.iconName,
        Wb = sb.prefix,
        ab = sb.rest,
        Tb = function(bb) {
          return Rc(bb.attributes).reduce((function(bb, cb) {
            return "class" !== bb.name && "style" !== bb.name && (bb[cb.name] = cb.value), bb
          }), {})
        }(bb),
        Ub = rs("parseNodeAttributes", {}, bb),
        Hb = cb.styleParser ? function(bb) {
          var cb = bb.getAttribute("style"),
            sb = [];
          return cb && (sb = cb.split(";").reduce((function(bb, cb) {
            var sb = cb.split(":"),
              kb = sb[0],
              Wb = sb.slice(1);
            return kb && Wb.length > 0 && (bb[kb] = Wb.join(":").trim()), bb
          }), {})), sb
        }(bb) : [];
      return Ib({
        iconName: kb,
        prefix: Wb,
        transform: oc,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: ab,
          styles: Hb,
          attributes: Tb
        }
      }, Ub)
    }
    var Bk = Ws.styles;

    function tk(bb) {
      var cb = "nest" === Ac.autoReplaceSvg ? gk(bb, {
        styleParser: !1
      }) : gk(bb);
      return ~cb.extra.classes.indexOf(ic) ? Ss("generateLayersText", bb, cb) : Ss("generateSvgReplacementMutation", bb, cb)
    }

    function yk(bb) {
      var cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!Bb) return Promise.resolve();
      var sb = hb.documentElement.classList,
        kb = function(bb) {
          return sb.add("".concat(Vc, "-").concat(bb))
        },
        Wb = function(bb) {
          return sb.remove("".concat(Vc, "-").concat(bb))
        },
        ab = Ac.autoFetchSvg ? [].concat(fb(bc), fb(fc)) : Pb.concat(Object.keys(Bk));
      ab.includes("fa") || ab.push("fa");
      var Tb = [".".concat(ic, ":not([").concat(Qc, "])")].concat(ab.map((function(bb) {
        return ".".concat(bb, ":not([").concat(Qc, "])")
      }))).join(", ");
      if (0 === Tb.length) return Promise.resolve();
      var Ub = [];
      try {
        Ub = Rc(bb.querySelectorAll(Tb))
      } catch (Mb) {}
      if (!(Ub.length > 0)) return Promise.resolve();
      kb("pending"), Wb("complete");
      var Ib = Mk("onTree"),
        Hb = Ub.reduce((function(bb, cb) {
          try {
            var sb = tk(cb);
            sb && bb.push(sb)
          } catch (Mb) {
            Yc || "MissingIcon" === Mb.name && console.error(Mb)
          }
          return bb
        }), []);
      return new Promise((function(bb, sb) {
        Promise.all(Hb).then((function(sb) {
          Nk(sb, (function() {
            kb("active"), kb("complete"), Wb("pending"), "function" === typeof cb && cb(), Ib(), bb()
          }))
        })).catch((function(bb) {
          Ib(), sb(bb)
        }))
      }))
    }

    function Pk(bb) {
      var cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      tk(bb).then((function(bb) {
        bb && Nk([bb], cb)
      }))
    }
    var Dk = function(bb) {
        var cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          sb = cb.transform,
          kb = void 0 === sb ? oc : sb,
          Wb = cb.symbol,
          ab = void 0 !== Wb && Wb,
          Tb = cb.mask,
          Ub = void 0 === Tb ? null : Tb,
          Hb = cb.maskId,
          fb = void 0 === Hb ? null : Hb,
          Mb = cb.classes,
          Xb = void 0 === Mb ? [] : Mb,
          nb = cb.attributes,
          mb = void 0 === nb ? {} : nb,
          lb = cb.styles,
          Qb = void 0 === lb ? {} : lb;
        if (bb) {
          var eb = bb.prefix,
            Cb = bb.iconName,
            Nb = bb.icon;
          return bk(Ib({
            type: "icon"
          }, bb), (function() {
            return os("beforeDOMElementCreation", {
              iconDefinition: bb,
              params: cb
            }), ck({
              icons: {
                main: Wk(Nb),
                mask: Ub ? Wk(Ub.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: eb,
              iconName: Cb,
              transform: Ib(Ib({}, oc), kb),
              symbol: ab,
              maskId: fb,
              extra: {
                attributes: mb,
                styles: Qb,
                classes: Xb
              }
            })
          }))
        }
      },
      Ek = {
        mixout: function() {
          return {
            icon: (bb = Dk, function(cb) {
              var sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                kb = (cb || {}).icon ? cb : Rs(cb || {}),
                Wb = sb.mask;
              return Wb && (Wb = (Wb || {}).icon ? Wb : Rs(Wb || {})), bb(kb, Ib(Ib({}, sb), {}, {
                mask: Wb
              }))
            })
          };
          var bb
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(bb) {
              return bb.treeCallback = yk, bb.nodeCallback = Pk, bb
            }
          }
        },
        provides: function(bb) {
          bb.i2svg = function(bb) {
            var cb = bb.node,
              sb = void 0 === cb ? hb : cb,
              kb = bb.callback;
            return yk(sb, void 0 === kb ? function() {} : kb)
          }, bb.generateSvgReplacementMutation = function(bb, cb) {
            var sb = cb.iconName,
              kb = cb.prefix,
              Wb = cb.transform,
              ab = cb.symbol,
              Tb = cb.mask,
              Ub = cb.maskId,
              Ib = cb.extra;
            return new Promise((function(cb, fb) {
              Promise.all([Tk(sb, kb), Tb.iconName ? Tk(Tb.iconName, Tb.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(Tb) {
                var fb = Hb(Tb, 2),
                  Mb = fb[0],
                  Xb = fb[1];
                cb([bb, ck({
                  icons: {
                    main: Mb,
                    mask: Xb
                  },
                  prefix: kb,
                  iconName: sb,
                  transform: Wb,
                  symbol: ab,
                  maskId: Ub,
                  extra: Ib,
                  watchable: !0
                })])
              })).catch(fb)
            }))
          }, bb.generateAbstractIcon = function(bb) {
            var cb, sb = bb.children,
              kb = bb.attributes,
              Wb = bb.main,
              ab = bb.transform,
              Tb = xc(bb.styles);
            return Tb.length > 0 && (kb.style = Tb), jc(ab) && (cb = Ss("generateAbstractTransformGrouping", {
              main: Wb,
              transform: ab,
              containerWidth: Wb.width,
              iconWidth: Wb.width
            })), sb.push(cb || Wb.icon), {
              children: sb,
              attributes: kb
            }
          }
        }
      },
      ik = {
        mixout: function() {
          return {
            layer: function(bb) {
              var cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                sb = cb.classes,
                kb = void 0 === sb ? [] : sb;
              return bk({
                type: "layer"
              }, (function() {
                os("beforeDOMElementCreation", {
                  assembler: bb,
                  params: cb
                });
                var sb = [];
                return bb((function(bb) {
                  Array.isArray(bb) ? bb.map((function(bb) {
                    sb = sb.concat(bb.abstract)
                  })) : sb = sb.concat(bb.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(Ac.cssPrefix, "-layers")].concat(fb(kb)).join(" ")
                  },
                  children: sb
                }]
              }))
            }
          }
        }
      },
      Ok = {
        mixout: function() {
          return {
            counter: function(bb) {
              var cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                sb = cb.title,
                kb = void 0 === sb ? null : sb,
                Wb = cb.classes,
                ab = void 0 === Wb ? [] : Wb,
                Tb = cb.attributes,
                Ub = void 0 === Tb ? {} : Tb,
                Hb = cb.styles,
                Mb = void 0 === Hb ? {} : Hb;
              return bk({
                type: "counter",
                content: bb
              }, (function() {
                return os("beforeDOMElementCreation", {
                    content: bb,
                    params: cb
                  }),
                  function(bb) {
                    var cb = bb.content,
                      sb = bb.extra,
                      kb = Ib(Ib({}, sb.attributes), {}, {
                        class: sb.classes.join(" ")
                      }),
                      Wb = xc(sb.styles);
                    Wb.length > 0 && (kb.style = Wb);
                    var ab = [];
                    return ab.push({
                      tag: "span",
                      attributes: kb,
                      children: [cb]
                    }), ab
                  }({
                    content: bb.toString(),
                    title: kb,
                    extra: {
                      attributes: Ub,
                      styles: Mb,
                      classes: ["".concat(Ac.cssPrefix, "-layers-counter")].concat(fb(ab))
                    }
                  })
              }))
            }
          }
        }
      },
      Gk = {
        mixout: function() {
          return {
            text: function(bb) {
              var cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                sb = cb.transform,
                kb = void 0 === sb ? oc : sb,
                Wb = cb.classes,
                ab = void 0 === Wb ? [] : Wb,
                Tb = cb.attributes,
                Ub = void 0 === Tb ? {} : Tb,
                Hb = cb.styles,
                Mb = void 0 === Hb ? {} : Hb;
              return bk({
                type: "text",
                content: bb
              }, (function() {
                return os("beforeDOMElementCreation", {
                  content: bb,
                  params: cb
                }), sk({
                  content: bb,
                  transform: Ib(Ib({}, oc), kb),
                  extra: {
                    attributes: Ub,
                    styles: Mb,
                    classes: ["".concat(Ac.cssPrefix, "-layers-text")].concat(fb(ab))
                  }
                })
              }))
            }
          }
        },
        provides: function(bb) {
          bb.generateLayersText = function(bb, cb) {
            var sb = cb.transform,
              kb = cb.extra,
              Wb = null,
              ab = null;
            if (tb) {
              var Tb = parseInt(getComputedStyle(bb).fontSize, 10),
                Ub = bb.getBoundingClientRect();
              Wb = Ub.width / Tb, ab = Ub.height / Tb
            }
            return Promise.resolve([bb, sk({
              content: bb.innerHTML,
              width: Wb,
              height: ab,
              transform: sb,
              extra: kb,
              watchable: !0
            })])
          }
        }
      },
      Kk = new RegExp('"', "ug"),
      Zk = [1105920, 1112319],
      zk = Ib(Ib(Ib(Ib({}, {
        FontAwesome: {
          normal: "fas",
          400: "fas"
        }
      }), {
        "Font Awesome 7 Free": {
          900: "fas",
          400: "far"
        },
        "Font Awesome 7 Pro": {
          900: "fas",
          400: "far",
          normal: "far",
          300: "fal",
          100: "fat"
        },
        "Font Awesome 7 Brands": {
          400: "fab",
          normal: "fab"
        },
        "Font Awesome 7 Duotone": {
          900: "fad",
          400: "fadr",
          normal: "fadr",
          300: "fadl",
          100: "fadt"
        },
        "Font Awesome 7 Sharp": {
          900: "fass",
          400: "fasr",
          normal: "fasr",
          300: "fasl",
          100: "fast"
        },
        "Font Awesome 7 Sharp Duotone": {
          900: "fasds",
          400: "fasdr",
          normal: "fasdr",
          300: "fasdl",
          100: "fasdt"
        },
        "Font Awesome 7 Jelly": {
          400: "fajr",
          normal: "fajr"
        },
        "Font Awesome 7 Jelly Fill": {
          400: "fajfr",
          normal: "fajfr"
        },
        "Font Awesome 7 Jelly Duo": {
          400: "fajdr",
          normal: "fajdr"
        },
        "Font Awesome 7 Slab": {
          400: "faslr",
          normal: "faslr"
        },
        "Font Awesome 7 Slab Press": {
          400: "faslpr",
          normal: "faslpr"
        },
        "Font Awesome 7 Thumbprint": {
          300: "fatl",
          normal: "fatl"
        },
        "Font Awesome 7 Notdog": {
          900: "fans",
          normal: "fans"
        },
        "Font Awesome 7 Notdog Duo": {
          900: "fands",
          normal: "fands"
        },
        "Font Awesome 7 Etch": {
          900: "faes",
          normal: "faes"
        },
        "Font Awesome 7 Graphite": {
          100: "fagt",
          normal: "fagt"
        },
        "Font Awesome 7 Chisel": {
          400: "facr",
          normal: "facr"
        },
        "Font Awesome 7 Whiteboard": {
          600: "fawsb",
          normal: "fawsb"
        },
        "Font Awesome 7 Utility": {
          600: "fausb",
          normal: "fausb"
        },
        "Font Awesome 7 Utility Duo": {
          600: "faudsb",
          normal: "faudsb"
        },
        "Font Awesome 7 Utility Fill": {
          600: "faufsb",
          normal: "faufsb"
        }
      }), {
        "Font Awesome 5 Free": {
          900: "fas",
          400: "far"
        },
        "Font Awesome 5 Pro": {
          900: "fas",
          400: "far",
          normal: "far",
          300: "fal"
        },
        "Font Awesome 5 Brands": {
          400: "fab",
          normal: "fab"
        },
        "Font Awesome 5 Duotone": {
          900: "fad"
        }
      }), {
        "Font Awesome Kit": {
          400: "fak",
          normal: "fak"
        },
        "Font Awesome Kit Duotone": {
          400: "fakd",
          normal: "fakd"
        }
      }),
      qk = Object.keys(zk).reduce((function(bb, cb) {
        return bb[cb.toLowerCase()] = zk[cb], bb
      }), {}),
      dk = Object.keys(qk).reduce((function(bb, cb) {
        var sb = qk[cb];
        return bb[cb] = sb[900] || fb(Object.entries(sb))[0][1], bb
      }), {});

    function Ak(bb, cb) {
      var sb = "".concat("data-fa-pseudo-element-pending").concat(cb.replace(":", "-"));
      return new Promise((function(kb, Wb) {
        if (null !== bb.getAttribute(sb)) return kb();
        var ab = Rc(bb.children).filter((function(bb) {
            return bb.getAttribute(ec) === cb
          }))[0],
          Tb = Yb.getComputedStyle(bb, cb),
          Ub = Tb.getPropertyValue("font-family"),
          Hb = Ub.match(Oc),
          Mb = Tb.getPropertyValue("font-weight"),
          Xb = Tb.getPropertyValue("content");
        if (ab && !Hb) return bb.removeChild(ab), kb();
        if (Hb && "none" !== Xb && "" !== Xb) {
          var nb = Tb.getPropertyValue("content"),
            mb = function(bb, cb) {
              var sb = bb.replace(/^['"]|['"]$/g, "").toLowerCase(),
                kb = parseInt(cb),
                Wb = isNaN(kb) ? "normal" : kb;
              return (qk[sb] || {})[Wb] || dk[sb]
            }(Ub, Mb),
            lb = function(bb) {
              return Ms(fb(bb.replace(Kk, ""))[0] || "")
            }(nb),
            Qb = Hb[0].startsWith("FontAwesome"),
            eb = function(bb) {
              var cb = bb.getPropertyValue("font-feature-settings").includes("ss01"),
                sb = bb.getPropertyValue("content").replace(Kk, ""),
                kb = sb.codePointAt(0),
                Wb = kb >= Zk[0] && kb <= Zk[1],
                ab = 2 === sb.length && sb[0] === sb[1];
              return Wb || ab || cb
            }(Tb),
            Cb = ts(mb, lb),
            Nb = Cb;
          if (Qb) {
            var Vb = function(bb) {
              var cb = us[bb],
                sb = ts("fas", bb);
              return cb || (sb ? {
                prefix: "fas",
                iconName: sb
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(lb);
            Vb.iconName && Vb.prefix && (Cb = Vb.iconName, mb = Vb.prefix)
          }
          if (!Cb || eb || ab && ab.getAttribute(Cc) === mb && ab.getAttribute(Nc) === Nb) kb();
          else {
            bb.setAttribute(sb, Nb), ab && bb.removeChild(ab);
            var Lb = {
                iconName: null,
                prefix: null,
                transform: oc,
                symbol: !1,
                mask: {
                  iconName: null,
                  prefix: null,
                  rest: []
                },
                maskId: null,
                extra: {
                  classes: [],
                  styles: {},
                  attributes: {}
                }
              },
              ub = Lb.extra;
            ub.attributes[ec] = cb, Tk(Cb, mb).then((function(Wb) {
              var ab = ck(Ib(Ib({}, Lb), {}, {
                  icons: {
                    main: Wb,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: mb,
                  iconName: Nb,
                  extra: ub,
                  watchable: !0
                })),
                Tb = hb.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === cb ? bb.insertBefore(Tb, bb.firstChild) : bb.appendChild(Tb), Tb.outerHTML = ab.map((function(bb) {
                return Is(bb)
              })).join("\n"), bb.removeAttribute(sb), kb()
            })).catch(Wb)
          }
        } else kb()
      }))
    }

    function wk(bb) {
      return Promise.all([Ak(bb, "::before"), Ak(bb, "::after")])
    }

    function rk(bb) {
      return bb.parentNode !== document.head && !~Lc.indexOf(bb.tagName.toUpperCase()) && !bb.getAttribute(ec) && (!bb.parentNode || "svg" !== bb.parentNode.tagName)
    }
    var Sk = function(bb) {
        return !!bb && uc.some((function(cb) {
          return bb.includes(cb)
        }))
      },
      Rk = function(bb) {
        if (!bb) return [];
        var cb = new Set,
          sb = bb.split(/,(?![^()]*\))/).map((function(bb) {
            return bb.trim()
          }));
        sb = sb.flatMap((function(bb) {
          return bb.includes("(") ? bb : bb.split(",").map((function(bb) {
            return bb.trim()
          }))
        }));
        var kb, Wb = ab(sb);
        try {
          for (Wb.s(); !(kb = Wb.n()).done;) {
            var Tb = kb.value;
            if (Sk(Tb)) {
              var Ub = uc.reduce((function(bb, cb) {
                return bb.replace(cb, "")
              }), Tb);
              "" !== Ub && "*" !== Ub && cb.add(Ub)
            }
          }
        } catch (Ib) {
          Wb.e(Ib)
        } finally {
          Wb.f()
        }
        return cb
      };

    function vk(bb) {
      if (Bb) {
        var cb;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) cb = bb;
        else if (Ac.searchPseudoElementsFullScan) cb = bb.querySelectorAll("*");
        else {
          var sb, kb = new Set,
            Wb = ab(document.styleSheets);
          try {
            for (Wb.s(); !(sb = Wb.n()).done;) {
              var Tb = sb.value;
              try {
                var Ub, Ib = ab(Tb.cssRules);
                try {
                  for (Ib.s(); !(Ub = Ib.n()).done;) {
                    var Hb, fb = Ub.value,
                      Mb = ab(Rk(fb.selectorText));
                    try {
                      for (Mb.s(); !(Hb = Mb.n()).done;) {
                        var Xb = Hb.value;
                        kb.add(Xb)
                      }
                    } catch (mb) {
                      Mb.e(mb)
                    } finally {
                      Mb.f()
                    }
                  }
                } catch (mb) {
                  Ib.e(mb)
                } finally {
                  Ib.f()
                }
              } catch (lb) {
                Ac.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(Tb.href, " (").concat(lb.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (mb) {
            Wb.e(mb)
          } finally {
            Wb.f()
          }
          if (!kb.size) return;
          var nb = Array.from(kb).join(", ");
          try {
            cb = bb.querySelectorAll(nb)
          } catch (Qb) {}
        }
        return new Promise((function(bb, sb) {
          var kb = Rc(cb).filter(rk).map(wk),
            Wb = Mk("searchPseudoElements");
          Lk(), Promise.all(kb).then((function() {
            Wb(), uk(), bb()
          })).catch((function() {
            Wb(), uk(), sb()
          }))
        }))
      }
    }
    var Fk = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(bb) {
              return bb.pseudoElementsCallback = vk, bb
            }
          }
        },
        provides: function(bb) {
          bb.pseudoElements2svg = function(bb) {
            var cb = bb.node,
              sb = void 0 === cb ? hb : cb;
            Ac.searchPseudoElements && vk(sb)
          }
        }
      },
      xk = !1,
      jk = function(bb) {
        return bb.toLowerCase().split(" ").reduce((function(bb, cb) {
          var sb = cb.toLowerCase().split("-"),
            kb = sb[0],
            Wb = sb.slice(1).join("-");
          if (kb && "h" === Wb) return bb.flipX = !0, bb;
          if (kb && "v" === Wb) return bb.flipY = !0, bb;
          if (Wb = parseFloat(Wb), isNaN(Wb)) return bb;
          switch (kb) {
            case "grow":
              bb.size = bb.size + Wb;
              break;
            case "shrink":
              bb.size = bb.size - Wb;
              break;
            case "left":
              bb.x = bb.x - Wb;
              break;
            case "right":
              bb.x = bb.x + Wb;
              break;
            case "up":
              bb.y = bb.y - Wb;
              break;
            case "down":
              bb.y = bb.y + Wb;
              break;
            case "rotate":
              bb.rotate = bb.rotate + Wb
          }
          return bb
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      pk = {
        mixout: function() {
          return {
            parse: {
              transform: function(bb) {
                return jk(bb)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(bb, cb) {
              var sb = cb.getAttribute("data-fa-transform");
              return sb && (bb.transform = jk(sb)), bb
            }
          }
        },
        provides: function(bb) {
          bb.generateAbstractTransformGrouping = function(bb) {
            var cb = bb.main,
              sb = bb.transform,
              kb = bb.containerWidth,
              Wb = bb.iconWidth,
              ab = {
                transform: "translate(".concat(kb / 2, " 256)")
              },
              Tb = "translate(".concat(32 * sb.x, ", ").concat(32 * sb.y, ") "),
              Ub = "scale(".concat(sb.size / 16 * (sb.flipX ? -1 : 1), ", ").concat(sb.size / 16 * (sb.flipY ? -1 : 1), ") "),
              Hb = "rotate(".concat(sb.rotate, " 0 0)"),
              fb = {
                outer: ab,
                inner: {
                  transform: "".concat(Tb, " ").concat(Ub, " ").concat(Hb)
                },
                path: {
                  transform: "translate(".concat(Wb / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: Ib({}, fb.outer),
              children: [{
                tag: "g",
                attributes: Ib({}, fb.inner),
                children: [{
                  tag: cb.icon.tag,
                  children: cb.icon.children,
                  attributes: Ib(Ib({}, cb.icon.attributes), fb.path)
                }]
              }]
            }
          }
        }
      },
      bW = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function cW(bb) {
      var cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return bb.attributes && (bb.attributes.fill || cb) && (bb.attributes.fill = "black"), bb
    }
    var sW = {
        hooks: function() {
          return {
            parseNodeAttributes: function(bb, cb) {
              var sb = cb.getAttribute("data-fa-mask"),
                kb = sb ? Gs(sb.split(" ").map((function(bb) {
                  return bb.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return kb.prefix || (kb.prefix = Ds()), bb.mask = kb, bb.maskId = cb.getAttribute("data-fa-mask-id"), bb
            }
          }
        },
        provides: function(bb) {
          bb.generateAbstractMask = function(bb) {
            var cb, sb = bb.children,
              kb = bb.attributes,
              Wb = bb.main,
              ab = bb.mask,
              Tb = bb.maskId,
              Ub = bb.transform,
              Hb = Wb.width,
              fb = Wb.icon,
              Mb = ab.width,
              Xb = ab.icon,
              nb = function(bb) {
                var cb = bb.transform,
                  sb = bb.containerWidth,
                  kb = bb.iconWidth,
                  Wb = {
                    transform: "translate(".concat(sb / 2, " 256)")
                  },
                  ab = "translate(".concat(32 * cb.x, ", ").concat(32 * cb.y, ") "),
                  Tb = "scale(".concat(cb.size / 16 * (cb.flipX ? -1 : 1), ", ").concat(cb.size / 16 * (cb.flipY ? -1 : 1), ") "),
                  Ub = "rotate(".concat(cb.rotate, " 0 0)");
                return {
                  outer: Wb,
                  inner: {
                    transform: "".concat(ab, " ").concat(Tb, " ").concat(Ub)
                  },
                  path: {
                    transform: "translate(".concat(kb / 2 * -1, " -256)")
                  }
                }
              }({
                transform: Ub,
                containerWidth: Mb,
                iconWidth: Hb
              }),
              mb = {
                tag: "rect",
                attributes: Ib(Ib({}, bW), {}, {
                  fill: "white"
                })
              },
              lb = fb.children ? {
                children: fb.children.map(cW)
              } : {},
              Qb = {
                tag: "g",
                attributes: Ib({}, nb.inner),
                children: [cW(Ib({
                  tag: fb.tag,
                  attributes: Ib(Ib({}, fb.attributes), nb.path)
                }, lb))]
              },
              eb = {
                tag: "g",
                attributes: Ib({}, nb.outer),
                children: [Qb]
              },
              Cb = "mask-".concat(Tb || Sc()),
              Nb = "clip-".concat(Tb || Sc()),
              Vb = {
                tag: "mask",
                attributes: Ib(Ib({}, bW), {}, {
                  id: Cb,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [mb, eb]
              },
              Lb = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: Nb
                  },
                  children: (cb = Xb, "g" === cb.tag ? cb.children : [cb])
                }, Vb]
              };
            return sb.push(Lb, {
              tag: "rect",
              attributes: Ib({
                fill: "currentColor",
                "clip-path": "url(#".concat(Nb, ")"),
                mask: "url(#".concat(Cb, ")")
              }, bW)
            }), {
              children: sb,
              attributes: kb
            }
          }
        }
      },
      kW = {
        provides: function(bb) {
          var cb = !1;
          Yb.matchMedia && (cb = Yb.matchMedia("(prefers-reduced-motion: reduce)").matches), bb.missingIconAbstract = function() {
            var bb = [],
              sb = {
                fill: "currentColor"
              },
              kb = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            bb.push({
              tag: "path",
              attributes: Ib(Ib({}, sb), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var Wb = Ib(Ib({}, kb), {}, {
                attributeName: "opacity"
              }),
              ab = {
                tag: "circle",
                attributes: Ib(Ib({}, sb), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return cb || ab.children.push({
              tag: "animate",
              attributes: Ib(Ib({}, kb), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: Ib(Ib({}, Wb), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), bb.push(ab), bb.push({
              tag: "path",
              attributes: Ib(Ib({}, sb), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: cb ? [] : [{
                tag: "animate",
                attributes: Ib(Ib({}, Wb), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), cb || bb.push({
              tag: "path",
              attributes: Ib(Ib({}, sb), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: Ib(Ib({}, Wb), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: bb
            }
          }
        }
      };
    ! function(bb, cb) {
      var sb = cb.mixoutsTo;
      qs = bb, ds = {}, Object.keys(As).forEach((function(bb) {
        -1 === ws.indexOf(bb) && delete As[bb]
      })), qs.forEach((function(bb) {
        var cb = bb.mixout ? bb.mixout() : {};
        if (Object.keys(cb).forEach((function(bb) {
            "function" === typeof cb[bb] && (sb[bb] = cb[bb]), "object" === Xb(cb[bb]) && Object.keys(cb[bb]).forEach((function(kb) {
              sb[bb] || (sb[bb] = {}), sb[bb][kb] = cb[bb][kb]
            }))
          })), bb.hooks) {
          var kb = bb.hooks();
          Object.keys(kb).forEach((function(bb) {
            ds[bb] || (ds[bb] = []), ds[bb].push(kb[bb])
          }))
        }
        bb.provides && bb.provides(As)
      }))
    }([ss, Ek, ik, Ok, Gk, Fk, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              Lk(), xk = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            hk(rs("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            Yk && Yk.disconnect()
          },
          watch: function(bb) {
            var cb = bb.observeMutationsRoot;
            xk ? uk() : hk(rs("mutationObserverCallbacks", {
              observeMutationsRoot: cb
            }))
          }
        }
      }
    }, pk, sW, kW, {
      hooks: function() {
        return {
          parseNodeAttributes: function(bb, cb) {
            var sb = cb.getAttribute("data-fa-symbol"),
              kb = null !== sb && ("" === sb || sb);
            return bb.symbol = kb, bb
          }
        }
      }
    }], {
      mixoutsTo: xs
    });
    var WW = xs.noAuto,
      aW = xs.config,
      TW = xs.library,
      UW = xs.dom,
      IW = xs.parse,
      HW = xs.findIconDefinition,
      fW = xs.toHtml,
      MW = xs.icon,
      XW = xs.layer,
      nW = xs.text,
      mW = xs.counter
  },
  6356: bb => {
    bb.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);