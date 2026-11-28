/*! For license information please see welxxc.fa-renderer.5c0bc7f4.chunk.js.LICENSE.txt */
export const id = 39;
export const ids = [39];
export const modules = {
  7960: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      FontAwesomeIcon: () => jb
    });
    var eb = Mb(7955),
      Hb = Mb(6022),
      pb = Mb.n(Hb),
      Vb = Mb(64);

    function gb(bb, wb) {
      (null == wb || wb > bb.length) && (wb = bb.length);
      for (var Mb = 0, eb = Array(wb); Mb < wb; Mb++) eb[Mb] = bb[Mb];
      return eb
    }

    function lb(bb, wb, Mb) {
      return (wb = function(bb) {
        var wb = function(bb, wb) {
          if ("object" != typeof bb || !bb) return bb;
          var Mb = bb[Symbol.toPrimitive];
          if (void 0 !== Mb) {
            var eb = Mb.call(bb, wb || "default");
            if ("object" != typeof eb) return eb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === wb ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == typeof wb ? wb : wb + ""
      }(wb)) in bb ? Object.defineProperty(bb, wb, {
        value: Mb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[wb] = Mb, bb
    }

    function Lb(bb, wb) {
      var Mb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var eb = Object.getOwnPropertySymbols(bb);
        wb && (eb = eb.filter((function(wb) {
          return Object.getOwnPropertyDescriptor(bb, wb).enumerable
        }))), Mb.push.apply(Mb, eb)
      }
      return Mb
    }

    function Ib(bb) {
      for (var wb = 1; wb < arguments.length; wb++) {
        var Mb = null != arguments[wb] ? arguments[wb] : {};
        wb % 2 ? Lb(Object(Mb), !0).forEach((function(wb) {
          lb(bb, wb, Mb[wb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Mb)) : Lb(Object(Mb)).forEach((function(wb) {
          Object.defineProperty(bb, wb, Object.getOwnPropertyDescriptor(Mb, wb))
        }))
      }
      return bb
    }

    function Ob(bb, wb) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, wb) {
        var Mb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != Mb) {
          var eb, Hb, pb, Vb, gb = [],
            lb = !0,
            Lb = !1;
          try {
            if (pb = (Mb = Mb.call(bb)).next, 0 === wb) {
              if (Object(Mb) !== Mb) return;
              lb = !1
            } else
              for (; !(lb = (eb = pb.call(Mb)).done) && (gb.push(eb.value), gb.length !== wb); lb = !0);
          } catch (bb) {
            Lb = !0, Hb = bb
          } finally {
            try {
              if (!lb && null != Mb.return && (Vb = Mb.return(), Object(Vb) !== Vb)) return
            } finally {
              if (Lb) throw Hb
            }
          }
          return gb
        }
      }(bb, wb) || Cb(bb, wb) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ub(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return gb(bb)
      }(bb) || function(bb) {
        if ("undefined" != typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Cb(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tb(bb) {
      return tb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, tb(bb)
    }

    function Cb(bb, wb) {
      if (bb) {
        if ("string" == typeof bb) return gb(bb, wb);
        var Mb = {}.toString.call(bb).slice(8, -1);
        return "Object" === Mb && bb.constructor && (Mb = bb.constructor.name), "Map" === Mb || "Set" === Mb ? Array.from(bb) : "Arguments" === Mb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Mb) ? gb(bb, wb) : void 0
      }
    }
    var Eb;
    try {
      var Fb = Mb(7962);
      Eb = Fb.version
    } catch (rb) {
      Eb = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function Bb(bb) {
      var wb = bb.beat,
        Mb = bb.fade,
        eb = bb.beatFade,
        Hb = bb.bounce,
        pb = bb.shake,
        Vb = bb.flash,
        gb = bb.spin,
        Lb = bb.spinPulse,
        Ib = bb.spinReverse,
        Ub = bb.pulse,
        tb = bb.fixedWidth,
        Cb = bb.inverse,
        Fb = bb.border,
        Bb = bb.listItem,
        sb = bb.flip,
        mb = bb.size,
        hb = bb.rotation,
        zb = bb.pull,
        Xb = bb.swapOpacity,
        xb = bb.rotateBy,
        jb = bb.widthAuto,
        Kb = function(bb, wb) {
          for (var Mb = Ob(bb.split("-"), 2), eb = Mb[0], Hb = Mb[1], pb = Ob(wb.split("-"), 2), Vb = pb[0], gb = pb[1], lb = eb.split("."), Lb = Vb.split("."), Ib = 0; Ib < Math.max(lb.length, Lb.length); Ib++) {
            var Ub = lb[Ib] || "0",
              tb = Lb[Ib] || "0",
              Cb = parseInt(Ub, 10),
              Eb = parseInt(tb, 10);
            if (Cb !== Eb) return Cb > Eb
          }
          for (var Fb = 0; Fb < Math.max(lb.length, Lb.length); Fb++) {
            var Bb = lb[Fb] || "0",
              sb = Lb[Fb] || "0";
            if (Bb !== sb && Bb.length !== sb.length) return Bb.length < sb.length
          }
          return !(Hb && !gb)
        }(Eb, "7.0.0"),
        rb = lb(lb(lb(lb(lb(lb({
          "fa-beat": wb,
          "fa-fade": Mb,
          "fa-beat-fade": eb,
          "fa-bounce": Hb,
          "fa-shake": pb,
          "fa-flash": Vb,
          "fa-spin": gb,
          "fa-spin-reverse": Ib,
          "fa-spin-pulse": Lb,
          "fa-pulse": Ub,
          "fa-fw": tb,
          "fa-inverse": Cb,
          "fa-border": Fb,
          "fa-li": Bb,
          "fa-flip": !0 === sb,
          "fa-flip-horizontal": "horizontal" === sb || "both" === sb,
          "fa-flip-vertical": "vertical" === sb || "both" === sb
        }, "fa-".concat(mb), "undefined" !== typeof mb && null !== mb), "fa-rotate-".concat(hb), "undefined" !== typeof hb && null !== hb && 0 !== hb), "fa-pull-".concat(zb), "undefined" !== typeof zb && null !== zb), "fa-swap-opacity", Xb), "fa-rotate-by", Kb && xb), "fa-width-auto", Kb && jb);
      return Object.keys(rb).map((function(bb) {
        return rb[bb] ? bb : null
      })).filter((function(bb) {
        return bb
      }))
    }

    function sb(bb) {
      return wb = bb, (wb -= 0) === wb ? bb : (bb = bb.replace(/[\-_\s]+(.)?/g, (function(bb, wb) {
        return wb ? wb.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + bb.substr(1);
      var wb
    }
    var mb = ["style"];
    var hb = !1;
    try {
      hb = !0
    } catch (rb) {}

    function zb(bb) {
      return bb && "object" === tb(bb) && bb.prefix && bb.iconName && bb.icon ? bb : eb.parse.icon ? eb.parse.icon(bb) : null === bb ? null : bb && "object" === tb(bb) && bb.prefix && bb.iconName ? bb : Array.isArray(bb) && 2 === bb.length ? {
        prefix: bb[0],
        iconName: bb[1]
      } : "string" === typeof bb ? {
        prefix: "fas",
        iconName: bb
      } : void 0
    }

    function Xb(bb, wb) {
      return Array.isArray(wb) && wb.length > 0 || !Array.isArray(wb) && wb ? lb({}, bb, wb) : {}
    }
    var xb = {
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
      jb = Vb.forwardRef((function(bb, wb) {
        var Mb = Ib(Ib({}, xb), bb),
          Hb = Mb.icon,
          pb = Mb.mask,
          Vb = Mb.symbol,
          gb = Mb.className,
          lb = Mb.title,
          Lb = Mb.titleId,
          Ob = Mb.maskId,
          tb = zb(Hb),
          Cb = Xb("classes", [].concat(Ub(Bb(Mb)), Ub((gb || "").split(" ")))),
          Eb = Xb("transform", "string" === typeof Mb.transform ? eb.parse.transform(Mb.transform) : Mb.transform),
          Fb = Xb("mask", zb(pb)),
          sb = (0, eb.icon)(tb, Ib(Ib(Ib(Ib({}, Cb), Eb), Fb), {}, {
            symbol: Vb,
            title: lb,
            titleId: Lb,
            maskId: Ob
          }));
        if (!sb) return function() {
          var bb;
          !hb && console && "function" === typeof console.error && (bb = console).error.apply(bb, arguments)
        }("Could not find icon", tb), null;
        var mb = sb.abstract,
          jb = {
            ref: wb
          };
        return Object.keys(Mb).forEach((function(bb) {
          xb.hasOwnProperty(bb) || (jb[bb] = Mb[bb])
        })), Kb(mb[0], jb)
      }));
    jb.displayName = "FontAwesomeIcon", jb.propTypes = {
      beat: pb().bool,
      border: pb().bool,
      beatFade: pb().bool,
      bounce: pb().bool,
      className: pb().string,
      fade: pb().bool,
      flash: pb().bool,
      mask: pb().oneOfType([pb().object, pb().array, pb().string]),
      maskId: pb().string,
      fixedWidth: pb().bool,
      inverse: pb().bool,
      flip: pb().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: pb().oneOfType([pb().object, pb().array, pb().string]),
      listItem: pb().bool,
      pull: pb().oneOf(["right", "left"]),
      pulse: pb().bool,
      rotation: pb().oneOf([0, 90, 180, 270]),
      rotateBy: pb().bool,
      shake: pb().bool,
      size: pb().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: pb().bool,
      spinPulse: pb().bool,
      spinReverse: pb().bool,
      symbol: pb().oneOfType([pb().bool, pb().string]),
      title: pb().string,
      titleId: pb().string,
      transform: pb().oneOfType([pb().string, pb().object]),
      swapOpacity: pb().bool,
      widthAuto: pb().bool
    };
    var Kb = function bb(wb, Mb) {
      var eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof Mb) return Mb;
      var Hb = (Mb.children || []).map((function(Mb) {
          return bb(wb, Mb)
        })),
        pb = Object.keys(Mb.attributes || {}).reduce((function(bb, wb) {
          var eb = Mb.attributes[wb];
          switch (wb) {
            case "class":
              bb.attrs.className = eb, delete Mb.attributes.class;
              break;
            case "style":
              bb.attrs.style = eb.split(";").map((function(bb) {
                return bb.trim()
              })).filter((function(bb) {
                return bb
              })).reduce((function(bb, wb) {
                var Mb, eb = wb.indexOf(":"),
                  Hb = sb(wb.slice(0, eb)),
                  pb = wb.slice(eb + 1).trim();
                return Hb.startsWith("webkit") ? bb[(Mb = Hb, Mb.charAt(0).toUpperCase() + Mb.slice(1))] = pb : bb[Hb] = pb, bb
              }), {});
              break;
            default:
              0 === wb.indexOf("aria-") || 0 === wb.indexOf("data-") ? bb.attrs[wb.toLowerCase()] = eb : bb.attrs[sb(wb)] = eb
          }
          return bb
        }), {
          attrs: {}
        }),
        Vb = eb.style,
        gb = void 0 === Vb ? {} : Vb,
        lb = function(bb, wb) {
          if (null == bb) return {};
          var Mb, eb, Hb = function(bb, wb) {
            if (null == bb) return {};
            var Mb = {};
            for (var eb in bb)
              if ({}.hasOwnProperty.call(bb, eb)) {
                if (-1 !== wb.indexOf(eb)) continue;
                Mb[eb] = bb[eb]
              } return Mb
          }(bb, wb);
          if (Object.getOwnPropertySymbols) {
            var pb = Object.getOwnPropertySymbols(bb);
            for (eb = 0; eb < pb.length; eb++) Mb = pb[eb], -1 === wb.indexOf(Mb) && {}.propertyIsEnumerable.call(bb, Mb) && (Hb[Mb] = bb[Mb])
          }
          return Hb
        }(eb, mb);
      return pb.attrs.style = Ib(Ib({}, pb.attrs.style), gb), wb.apply(void 0, [Mb.tag, Ib(Ib({}, pb.attrs), lb)].concat(Ub(Hb)))
    }.bind(null, Vb.createElement)
  },
  6028: (bb, wb, Mb) => {
    var eb = Mb(6030);

    function Hb() {}

    function pb() {}
    pb.resetWarningCache = Hb, bb.exports = function() {
      function bb(bb, wb, Mb, Hb, pb, Vb) {
        if (Vb !== eb) {
          var gb = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw gb.name = "Invariant Violation", gb
        }
      }

      function wb() {
        return bb
      }
      bb.isRequired = bb;
      var Mb = {
        array: bb,
        bigint: bb,
        bool: bb,
        func: bb,
        number: bb,
        object: bb,
        string: bb,
        symbol: bb,
        any: bb,
        arrayOf: wb,
        element: bb,
        elementType: bb,
        instanceOf: wb,
        node: bb,
        objectOf: wb,
        oneOf: wb,
        oneOfType: wb,
        shape: wb,
        exact: wb,
        checkPropTypes: pb,
        resetWarningCache: Hb
      };
      return Mb.PropTypes = Mb, Mb
    }
  },
  6022: (bb, wb, Mb) => {
    bb.exports = Mb(6028)()
  },
  6030: bb => {
    bb.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7955: (bb, wb, Mb) => {
    function eb(bb, wb) {
      (null == wb || wb > bb.length) && (wb = bb.length);
      for (var Mb = 0, eb = Array(wb); Mb < wb; Mb++) eb[Mb] = bb[Mb];
      return eb
    }

    function Hb(bb, wb) {
      for (var Mb = 0; Mb < wb.length; Mb++) {
        var eb = wb[Mb];
        eb.enumerable = eb.enumerable || !1, eb.configurable = !0, "value" in eb && (eb.writable = !0), Object.defineProperty(bb, Ob(eb.key), eb)
      }
    }

    function pb(bb, wb) {
      var Mb = "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
      if (!Mb) {
        if (Array.isArray(bb) || (Mb = tb(bb)) || wb && bb && "number" == typeof bb.length) {
          Mb && (bb = Mb);
          var eb = 0,
            Hb = function() {};
          return {
            s: Hb,
            n: function() {
              return eb >= bb.length ? {
                done: !0
              } : {
                done: !1,
                value: bb[eb++]
              }
            },
            e: function(bb) {
              throw bb
            },
            f: Hb
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var pb, Vb = !0,
        gb = !1;
      return {
        s: function() {
          Mb = Mb.call(bb)
        },
        n: function() {
          var bb = Mb.next();
          return Vb = bb.done, bb
        },
        e: function(bb) {
          gb = !0, pb = bb
        },
        f: function() {
          try {
            Vb || null == Mb.return || Mb.return()
          } finally {
            if (gb) throw pb
          }
        }
      }
    }

    function Vb(bb, wb, Mb) {
      return (wb = Ob(wb)) in bb ? Object.defineProperty(bb, wb, {
        value: Mb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[wb] = Mb, bb
    }

    function gb(bb, wb) {
      var Mb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var eb = Object.getOwnPropertySymbols(bb);
        wb && (eb = eb.filter((function(wb) {
          return Object.getOwnPropertyDescriptor(bb, wb).enumerable
        }))), Mb.push.apply(Mb, eb)
      }
      return Mb
    }

    function lb(bb) {
      for (var wb = 1; wb < arguments.length; wb++) {
        var Mb = null != arguments[wb] ? arguments[wb] : {};
        wb % 2 ? gb(Object(Mb), !0).forEach((function(wb) {
          Vb(bb, wb, Mb[wb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Mb)) : gb(Object(Mb)).forEach((function(wb) {
          Object.defineProperty(bb, wb, Object.getOwnPropertyDescriptor(Mb, wb))
        }))
      }
      return bb
    }

    function Lb(bb, wb) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, wb) {
        var Mb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != Mb) {
          var eb, Hb, pb, Vb, gb = [],
            lb = !0,
            Lb = !1;
          try {
            if (pb = (Mb = Mb.call(bb)).next, 0 === wb) {
              if (Object(Mb) !== Mb) return;
              lb = !1
            } else
              for (; !(lb = (eb = pb.call(Mb)).done) && (gb.push(eb.value), gb.length !== wb); lb = !0);
          } catch (bb) {
            Lb = !0, Hb = bb
          } finally {
            try {
              if (!lb && null != Mb.return && (Vb = Mb.return(), Object(Vb) !== Vb)) return
            } finally {
              if (Lb) throw Hb
            }
          }
          return gb
        }
      }(bb, wb) || tb(bb, wb) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ib(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return eb(bb)
      }(bb) || function(bb) {
        if ("undefined" != typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || tb(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ob(bb) {
      var wb = function(bb, wb) {
        if ("object" != typeof bb || !bb) return bb;
        var Mb = bb[Symbol.toPrimitive];
        if (void 0 !== Mb) {
          var eb = Mb.call(bb, wb || "default");
          if ("object" != typeof eb) return eb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === wb ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == typeof wb ? wb : wb + ""
    }

    function Ub(bb) {
      return Ub = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Ub(bb)
    }

    function tb(bb, wb) {
      if (bb) {
        if ("string" == typeof bb) return eb(bb, wb);
        var Mb = {}.toString.call(bb).slice(8, -1);
        return "Object" === Mb && bb.constructor && (Mb = bb.constructor.name), "Map" === Mb || "Set" === Mb ? Array.from(bb) : "Arguments" === Mb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Mb) ? eb(bb, wb) : void 0
      }
    }
    Mb.r(wb), Mb.d(wb, {
      api: () => oM,
      config: () => eH,
      counter: () => UH,
      dom: () => pH,
      findIconDefinition: () => gH,
      icon: () => LH,
      layer: () => IH,
      library: () => HH,
      noAuto: () => MH,
      parse: () => VH,
      text: () => OH,
      toHtml: () => lH
    });
    var Cb = function() {},
      Eb = {},
      Fb = {},
      Bb = null,
      sb = {
        mark: Cb,
        measure: Cb
      };
    try {
      "undefined" !== typeof window && (Eb = window), "undefined" !== typeof document && (Fb = document), "undefined" !== typeof MutationObserver && (Bb = MutationObserver), "undefined" !== typeof performance && (sb = performance)
    } catch (ab) {}
    var mb, hb, zb = (Eb.navigator || {}).userAgent,
      Xb = void 0 === zb ? "" : zb,
      xb = Eb,
      jb = Fb,
      Kb = Bb,
      rb = sb,
      Rb = (xb.document, !!jb.documentElement && !!jb.head && "function" === typeof jb.addEventListener && "function" === typeof jb.createElement),
      Db = ~Xb.indexOf("MSIE") || ~Xb.indexOf("Trident/"),
      cb = {
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
      Yb = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      Zb = "classic",
      fb = "duotone",
      Ab = "sharp",
      Wb = "sharp-duotone",
      Jb = "chisel",
      Sb = "etch",
      Nb = "graphite",
      vb = "jelly",
      Qb = "jelly-duo",
      Gb = "jelly-fill",
      qb = "notdog",
      ab = "notdog-duo",
      ib = "slab",
      ub = "slab-press",
      db = "thumbprint",
      Pb = "utility",
      nb = "utility-duo",
      yb = "utility-fill",
      ob = "whiteboard",
      Tb = [Zb, fb, Ab, Wb, Jb, Sb, Nb, vb, Qb, Gb, qb, ab, ib, ub, db, Pb, nb, yb, ob],
      kb = (Vb(Vb(Vb(Vb(Vb(Vb(Vb(Vb(Vb(Vb(mb = {}, Zb, "Classic"), fb, "Duotone"), Ab, "Sharp"), Wb, "Sharp Duotone"), Jb, "Chisel"), Sb, "Etch"), Nb, "Graphite"), vb, "Jelly"), Qb, "Jelly Duo"), Gb, "Jelly Fill"), Vb(Vb(Vb(Vb(Vb(Vb(Vb(Vb(Vb(mb, qb, "Notdog"), ab, "Notdog Duo"), ib, "Slab"), ub, "Slab Press"), db, "Thumbprint"), Pb, "Utility"), nb, "Utility Duo"), yb, "Utility Fill"), ob, "Whiteboard"), new Map([
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
      bw = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      ww = {
        fak: "kit",
        "fa-kit": "kit"
      },
      Mw = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      ew = (Vb(Vb({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      Hw = {
        "kit-duotone": "fakd"
      },
      pw = "duotone-group",
      Vw = "swap-opacity",
      gw = "primary",
      lw = "secondary",
      Lw = (Vb(Vb(Vb(Vb(Vb(Vb(Vb(Vb(Vb(Vb(hb = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), Vb(Vb(Vb(Vb(Vb(Vb(Vb(Vb(Vb(hb, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), Vb(Vb({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      Iw = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      Ow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Uw = Ow.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      tw = [].concat(Ib(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", pw, Vw, gw, lw]).concat(Ow.map((function(bb) {
        return "".concat(bb, "x")
      }))).concat(Uw.map((function(bb) {
        return "w-".concat(bb)
      }))),
      Cw = "___FONT_AWESOME___",
      Ew = "svg-inline--fa",
      Fw = "data-fa-i2svg",
      Bw = "data-fa-pseudo-element",
      sw = "data-prefix",
      mw = "data-icon",
      hw = "fontawesome-i2svg",
      zw = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      Xw = ["::before", "::after", ":before", ":after"],
      xw = function() {
        try {
          return !0
        } catch (bb) {
          return !1
        }
      }();

    function jw(bb) {
      return new Proxy(bb, {
        get: function(bb, wb) {
          return wb in bb ? bb[wb] : bb[Zb]
        }
      })
    }
    var Kw = lb({}, cb);
    Kw[Zb] = lb(lb(lb(lb({}, {
      "fa-duotone": "duotone"
    }), cb[Zb]), ww), Mw);
    var rw = jw(Kw),
      Rw = lb({}, {
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
    Rw[Zb] = lb(lb(lb(lb({}, {
      duotone: "fad"
    }), Rw[Zb]), ew), Hw);
    var Dw = jw(Rw),
      Yw = lb({}, Lw);
    Yw[Zb] = lb(lb({}, Yw[Zb]), {
      fak: "fa-kit"
    });
    var Zw = jw(Yw),
      fw = lb({}, {
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
    fw[Zb] = lb(lb({}, fw[Zb]), {
      "fa-kit": "fak"
    });
    jw(fw);
    var Aw = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      Ww = "fa-layers-text",
      Jw = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Sw = (jw(lb({}, {
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
      Nw = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      vw = [].concat(Ib(["kit"]), Ib(tw)),
      Qw = xb.FontAwesomeConfig || {};
    if (jb && "function" === typeof jb.querySelector) {
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
        var wb = Lb(bb, 2),
          Mb = wb[0],
          eb = wb[1],
          Hb = function(bb) {
            return "" === bb || "false" !== bb && ("true" === bb || bb)
          }(function(bb) {
            var wb = jb.querySelector("script[" + bb + "]");
            if (wb) return wb.getAttribute(bb)
          }(Mb));
        void 0 !== Hb && null !== Hb && (Qw[eb] = Hb)
      }))
    }
    var Gw = {
      styleDefault: "solid",
      familyDefault: Zb,
      cssPrefix: "fa",
      replacementClass: Ew,
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
    Qw.familyPrefix && (Qw.cssPrefix = Qw.familyPrefix);
    var qw = lb(lb({}, Gw), Qw);
    qw.autoReplaceSvg || (qw.observeMutations = !1);
    var aw = {};
    Object.keys(Gw).forEach((function(bb) {
      Object.defineProperty(aw, bb, {
        enumerable: !0,
        set: function(wb) {
          qw[bb] = wb, iw.forEach((function(bb) {
            return bb(aw)
          }))
        },
        get: function() {
          return qw[bb]
        }
      })
    })), Object.defineProperty(aw, "familyPrefix", {
      enumerable: !0,
      set: function(bb) {
        qw.cssPrefix = bb, iw.forEach((function(bb) {
          return bb(aw)
        }))
      },
      get: function() {
        return qw.cssPrefix
      }
    }), xb.FontAwesomeConfig = aw;
    var iw = [];
    var uw = 16,
      dw = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function Pw() {
      for (var bb = 12, wb = ""; bb-- > 0;) wb += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return wb
    }

    function nw(bb) {
      for (var wb = [], Mb = (bb || []).length >>> 0; Mb--;) wb[Mb] = bb[Mb];
      return wb
    }

    function yw(bb) {
      return bb.classList ? nw(bb.classList) : (bb.getAttribute("class") || "").split(" ").filter((function(bb) {
        return bb
      }))
    }

    function ow(bb) {
      return "".concat(bb).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Tw(bb) {
      return Object.keys(bb || {}).reduce((function(wb, Mb) {
        return wb + "".concat(Mb, ": ").concat(bb[Mb].trim(), ";")
      }), "")
    }

    function kw(bb) {
      return bb.size !== dw.size || bb.x !== dw.x || bb.y !== dw.y || bb.rotate !== dw.rotate || bb.flipX || bb.flipY
    }

    function bM() {
      var bb = "fa",
        wb = Ew,
        Mb = aw.cssPrefix,
        eb = aw.replacementClass,
        Hb = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (Mb !== bb || eb !== wb) {
        var pb = new RegExp("\\.".concat(bb, "\\-"), "g"),
          Vb = new RegExp("\\--".concat(bb, "\\-"), "g"),
          gb = new RegExp("\\.".concat(wb), "g");
        Hb = Hb.replace(pb, ".".concat(Mb, "-")).replace(Vb, "--".concat(Mb, "-")).replace(gb, ".".concat(eb))
      }
      return Hb
    }
    var wM = !1;

    function MM() {
      aw.autoAddCss && !wM && (! function(bb) {
        if (bb && Rb) {
          var wb = jb.createElement("style");
          wb.setAttribute("type", "text/css"), wb.innerHTML = bb;
          for (var Mb = jb.head.childNodes, eb = null, Hb = Mb.length - 1; Hb > -1; Hb--) {
            var pb = Mb[Hb],
              Vb = (pb.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(Vb) > -1 && (eb = pb)
          }
          jb.head.insertBefore(wb, eb)
        }
      }(bM()), wM = !0)
    }
    var eM = {
        mixout: function() {
          return {
            dom: {
              css: bM,
              insertCss: MM
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              MM()
            },
            beforeI2svg: function() {
              MM()
            }
          }
        }
      },
      HM = xb || {};
    HM[Cw] || (HM[Cw] = {}), HM[Cw].styles || (HM[Cw].styles = {}), HM[Cw].hooks || (HM[Cw].hooks = {}), HM[Cw].shims || (HM[Cw].shims = []);
    var pM = HM[Cw],
      VM = [],
      gM = function() {
        jb.removeEventListener("DOMContentLoaded", gM), lM = 1, VM.map((function(bb) {
          return bb()
        }))
      },
      lM = !1;

    function LM(bb) {
      var wb = bb.tag,
        Mb = bb.attributes,
        eb = void 0 === Mb ? {} : Mb,
        Hb = bb.children,
        pb = void 0 === Hb ? [] : Hb;
      return "string" === typeof bb ? ow(bb) : "<".concat(wb, " ").concat(function(bb) {
        return Object.keys(bb || {}).reduce((function(wb, Mb) {
          return wb + "".concat(Mb, '="').concat(ow(bb[Mb]), '" ')
        }), "").trim()
      }(eb), ">").concat(pb.map(LM).join(""), "</").concat(wb, ">")
    }

    function IM(bb, wb, Mb) {
      if (bb && bb[wb] && bb[wb][Mb]) return {
        prefix: wb,
        iconName: Mb,
        icon: bb[wb][Mb]
      }
    }
    Rb && ((lM = (jb.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(jb.readyState)) || jb.addEventListener("DOMContentLoaded", gM));
    var OM = function(bb, wb, Mb, eb) {
      var Hb, pb, Vb, gb = Object.keys(bb),
        lb = gb.length,
        Lb = void 0 !== eb ? function(bb, wb) {
          return function(Mb, eb, Hb, pb) {
            return bb.call(wb, Mb, eb, Hb, pb)
          }
        }(wb, eb) : wb;
      for (void 0 === Mb ? (Hb = 1, Vb = bb[gb[0]]) : (Hb = 0, Vb = Mb); Hb < lb; Hb++) Vb = Lb(Vb, bb[pb = gb[Hb]], pb, bb);
      return Vb
    };

    function UM(bb) {
      return 1 !== Ib(bb).length ? null : bb.codePointAt(0).toString(16)
    }

    function tM(bb) {
      return Object.keys(bb).reduce((function(wb, Mb) {
        var eb = bb[Mb];
        return !!eb.icon ? wb[eb.iconName] = eb.icon : wb[Mb] = eb, wb
      }), {})
    }

    function CM(bb, wb) {
      var Mb = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        eb = void 0 !== Mb && Mb,
        Hb = tM(wb);
      "function" !== typeof pM.hooks.addPack || eb ? pM.styles[bb] = lb(lb({}, pM.styles[bb] || {}), Hb) : pM.hooks.addPack(bb, tM(wb)), "fas" === bb && CM("fa", wb)
    }
    var EM = pM.styles,
      FM = pM.shims,
      BM = Object.keys(Zw),
      sM = BM.reduce((function(bb, wb) {
        return bb[wb] = Object.keys(Zw[wb]), bb
      }), {}),
      mM = null,
      hM = {},
      zM = {},
      XM = {},
      xM = {},
      jM = {};

    function KM(bb, wb) {
      var Mb, eb = wb.split("-"),
        Hb = eb[0],
        pb = eb.slice(1).join("-");
      return Hb !== bb || "" === pb || (Mb = pb, ~vw.indexOf(Mb)) ? null : pb
    }
    var rM, RM = function() {
      var bb = function(bb) {
        return OM(EM, (function(wb, Mb, eb) {
          return wb[eb] = OM(Mb, bb, {}), wb
        }), {})
      };
      hM = bb((function(bb, wb, Mb) {
        (wb[3] && (bb[wb[3]] = Mb), wb[2]) && wb[2].filter((function(bb) {
          return "number" === typeof bb
        })).forEach((function(wb) {
          bb[wb.toString(16)] = Mb
        }));
        return bb
      })), zM = bb((function(bb, wb, Mb) {
        (bb[Mb] = Mb, wb[2]) && wb[2].filter((function(bb) {
          return "string" === typeof bb
        })).forEach((function(wb) {
          bb[wb] = Mb
        }));
        return bb
      })), jM = bb((function(bb, wb, Mb) {
        var eb = wb[2];
        return bb[Mb] = Mb, eb.forEach((function(wb) {
          bb[wb] = Mb
        })), bb
      }));
      var wb = "far" in EM || aw.autoFetchSvg,
        Mb = OM(FM, (function(bb, Mb) {
          var eb = Mb[0],
            Hb = Mb[1],
            pb = Mb[2];
          return "far" !== Hb || wb || (Hb = "fas"), "string" === typeof eb && (bb.names[eb] = {
            prefix: Hb,
            iconName: pb
          }), "number" === typeof eb && (bb.unicodes[eb.toString(16)] = {
            prefix: Hb,
            iconName: pb
          }), bb
        }), {
          names: {},
          unicodes: {}
        });
      XM = Mb.names, xM = Mb.unicodes, mM = fM(aw.styleDefault, {
        family: aw.familyDefault
      })
    };

    function DM(bb, wb) {
      return (hM[bb] || {})[wb]
    }

    function cM(bb, wb) {
      return (jM[bb] || {})[wb]
    }

    function YM(bb) {
      return XM[bb] || {
        prefix: null,
        iconName: null
      }
    }

    function ZM() {
      return mM
    }
    rM = function(bb) {
      mM = fM(bb.styleDefault, {
        family: aw.familyDefault
      })
    }, iw.push(rM), RM();

    function fM(bb) {
      var wb = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        Mb = void 0 === wb ? Zb : wb,
        eb = rw[Mb][bb];
      if (Mb === fb && !bb) return "fad";
      var Hb = Dw[Mb][bb] || Dw[Mb][eb],
        pb = bb in pM.styles ? bb : null;
      return Hb || pb || null
    }

    function AM(bb) {
      return bb.sort().filter((function(bb, wb, Mb) {
        return Mb.indexOf(bb) === wb
      }))
    }
    var WM = Iw.concat(bw);

    function JM(bb) {
      var wb = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        Mb = void 0 !== wb && wb,
        eb = null,
        Hb = AM(bb.filter((function(bb) {
          return WM.includes(bb)
        }))),
        pb = AM(bb.filter((function(bb) {
          return !WM.includes(bb)
        }))),
        Vb = Lb(Hb.filter((function(bb) {
          return eb = bb, !Yb.includes(bb)
        })), 1)[0],
        gb = void 0 === Vb ? null : Vb,
        Ib = function(bb) {
          var wb = Zb,
            Mb = BM.reduce((function(bb, wb) {
              return bb[wb] = "".concat(aw.cssPrefix, "-").concat(wb), bb
            }), {});
          return Tb.forEach((function(eb) {
            (bb.includes(Mb[eb]) || bb.some((function(bb) {
              return sM[eb].includes(bb)
            }))) && (wb = eb)
          })), wb
        }(Hb),
        Ob = lb(lb({}, function(bb) {
          var wb = [],
            Mb = null;
          return bb.forEach((function(bb) {
            var eb = KM(aw.cssPrefix, bb);
            eb ? Mb = eb : bb && wb.push(bb)
          })), {
            iconName: Mb,
            rest: wb
          }
        }(pb)), {}, {
          prefix: fM(gb, {
            family: Ib
          })
        });
      return lb(lb(lb({}, Ob), function(bb) {
        var wb = bb.values,
          Mb = bb.family,
          eb = bb.canonical,
          Hb = bb.givenPrefix,
          pb = void 0 === Hb ? "" : Hb,
          Vb = bb.styles,
          gb = void 0 === Vb ? {} : Vb,
          lb = bb.config,
          Lb = void 0 === lb ? {} : lb,
          Ib = Mb === fb,
          Ob = wb.includes("fa-duotone") || wb.includes("fad"),
          Ub = "duotone" === Lb.familyDefault,
          tb = "fad" === eb.prefix || "fa-duotone" === eb.prefix;
        !Ib && (Ob || Ub || tb) && (eb.prefix = "fad");
        (wb.includes("fa-brands") || wb.includes("fab")) && (eb.prefix = "fab");
        if (!eb.prefix && SM.includes(Mb)) {
          if (Object.keys(gb).find((function(bb) {
              return NM.includes(bb)
            })) || Lb.autoFetchSvg) {
            var Cb = kb.get(Mb).defaultShortPrefixId;
            eb.prefix = Cb, eb.iconName = cM(eb.prefix, eb.iconName) || eb.iconName
          }
        }
        "fa" !== eb.prefix && "fa" !== pb || (eb.prefix = ZM() || "fas");
        return eb
      }({
        values: bb,
        family: Ib,
        styles: EM,
        config: aw,
        canonical: Ob,
        givenPrefix: eb
      })), function(bb, wb, Mb) {
        var eb = Mb.prefix,
          Hb = Mb.iconName;
        if (bb || !eb || !Hb) return {
          prefix: eb,
          iconName: Hb
        };
        var pb = "fa" === wb ? YM(Hb) : {},
          Vb = cM(eb, Hb);
        Hb = pb.iconName || Vb || Hb, "far" !== (eb = pb.prefix || eb) || EM.far || !EM.fas || aw.autoFetchSvg || (eb = "fas");
        return {
          prefix: eb,
          iconName: Hb
        }
      }(Mb, eb, Ob))
    }
    var SM = Tb.filter((function(bb) {
        return bb !== Zb || bb !== fb
      })),
      NM = Object.keys(Lw).filter((function(bb) {
        return bb !== Zb
      })).map((function(bb) {
        return Object.keys(Lw[bb])
      })).flat();
    var vM = function() {
        return function(bb, wb, Mb) {
          return wb && Hb(bb.prototype, wb), Mb && Hb(bb, Mb), Object.defineProperty(bb, "prototype", {
            writable: !1
          }), bb
        }((function bb() {
          ! function(bb, wb) {
            if (!(bb instanceof wb)) throw new TypeError("Cannot call a class as a function")
          }(this, bb), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var bb = this, wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
            var Hb = Mb.reduce(this._pullDefinitions, {});
            Object.keys(Hb).forEach((function(wb) {
              bb.definitions[wb] = lb(lb({}, bb.definitions[wb] || {}), Hb[wb]), CM(wb, Hb[wb]);
              var Mb = Zw[Zb][wb];
              Mb && CM(Mb, Hb[wb]), RM()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(bb, wb) {
            var Mb = wb.prefix && wb.iconName && wb.icon ? {
              0: wb
            } : wb;
            return Object.keys(Mb).map((function(wb) {
              var eb = Mb[wb],
                Hb = eb.prefix,
                pb = eb.iconName,
                Vb = eb.icon,
                gb = Vb[2];
              bb[Hb] || (bb[Hb] = {}), gb.length > 0 && gb.forEach((function(wb) {
                "string" === typeof wb && (bb[Hb][wb] = Vb)
              })), bb[Hb][pb] = Vb
            })), bb
          }
        }])
      }(),
      QM = [],
      GM = {},
      qM = {},
      aM = Object.keys(qM);

    function iM(bb, wb) {
      for (var Mb = arguments.length, eb = new Array(Mb > 2 ? Mb - 2 : 0), Hb = 2; Hb < Mb; Hb++) eb[Hb - 2] = arguments[Hb];
      return (GM[bb] || []).forEach((function(bb) {
        wb = bb.apply(null, [wb].concat(eb))
      })), wb
    }

    function uM(bb) {
      for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
      (GM[bb] || []).forEach((function(bb) {
        bb.apply(null, Mb)
      }))
    }

    function dM() {
      var bb = arguments[0],
        wb = Array.prototype.slice.call(arguments, 1);
      return qM[bb] ? qM[bb].apply(null, wb) : void 0
    }

    function PM(bb) {
      "fa" === bb.prefix && (bb.prefix = "fas");
      var wb = bb.iconName,
        Mb = bb.prefix || ZM();
      if (wb) return wb = cM(Mb, wb) || wb, IM(nM.definitions, Mb, wb) || IM(pM.styles, Mb, wb)
    }
    var nM = new vM,
      yM = {
        i2svg: function() {
          var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Rb ? (uM("beforeI2svg", bb), dM("pseudoElements2svg", bb), dM("i2svg", bb)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var bb, wb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Mb = wb.autoReplaceSvgRoot;
          !1 === aw.autoReplaceSvg && (aw.autoReplaceSvg = !0), aw.observeMutations = !0, bb = function() {
            TM({
              autoReplaceSvgRoot: Mb
            }), uM("watch", wb)
          }, Rb && (lM ? setTimeout(bb, 0) : VM.push(bb))
        }
      },
      oM = {
        noAuto: function() {
          aw.autoReplaceSvg = !1, aw.observeMutations = !1, uM("noAuto")
        },
        config: aw,
        dom: yM,
        parse: {
          icon: function(bb) {
            if (null === bb) return null;
            if ("object" === Ub(bb) && bb.prefix && bb.iconName) return {
              prefix: bb.prefix,
              iconName: cM(bb.prefix, bb.iconName) || bb.iconName
            };
            if (Array.isArray(bb) && 2 === bb.length) {
              var wb = 0 === bb[1].indexOf("fa-") ? bb[1].slice(3) : bb[1],
                Mb = fM(bb[0]);
              return {
                prefix: Mb,
                iconName: cM(Mb, wb) || wb
              }
            }
            if ("string" === typeof bb && (bb.indexOf("".concat(aw.cssPrefix, "-")) > -1 || bb.match(Aw))) {
              var eb = JM(bb.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: eb.prefix || ZM(),
                iconName: cM(eb.prefix, eb.iconName) || eb.iconName
              }
            }
            if ("string" === typeof bb) {
              var Hb = ZM();
              return {
                prefix: Hb,
                iconName: cM(Hb, bb) || bb
              }
            }
          }
        },
        library: nM,
        findIconDefinition: PM,
        toHtml: LM
      },
      TM = function() {
        var bb = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          wb = void 0 === bb ? jb : bb;
        (Object.keys(pM.styles).length > 0 || aw.autoFetchSvg) && Rb && aw.autoReplaceSvg && oM.dom.i2svg({
          node: wb
        })
      };

    function kM(bb, wb) {
      return Object.defineProperty(bb, "abstract", {
        get: wb
      }), Object.defineProperty(bb, "html", {
        get: function() {
          return bb.abstract.map((function(bb) {
            return LM(bb)
          }))
        }
      }), Object.defineProperty(bb, "node", {
        get: function() {
          if (Rb) {
            var wb = jb.createElement("div");
            return wb.innerHTML = bb.html, wb.children
          }
        }
      }), bb
    }

    function be(bb) {
      var wb = bb.icons,
        Mb = wb.main,
        eb = wb.mask,
        Hb = bb.prefix,
        pb = bb.iconName,
        Vb = bb.transform,
        gb = bb.symbol,
        Lb = bb.maskId,
        Ib = bb.extra,
        Ob = bb.watchable,
        Ub = void 0 !== Ob && Ob,
        tb = eb.found ? eb : Mb,
        Cb = tb.width,
        Eb = tb.height,
        Fb = [aw.replacementClass, pb ? "".concat(aw.cssPrefix, "-").concat(pb) : ""].filter((function(bb) {
          return -1 === Ib.classes.indexOf(bb)
        })).filter((function(bb) {
          return "" !== bb || !!bb
        })).concat(Ib.classes).join(" "),
        Bb = {
          children: [],
          attributes: lb(lb({}, Ib.attributes), {}, {
            "data-prefix": Hb,
            "data-icon": pb,
            class: Fb,
            role: Ib.attributes.role || "img",
            viewBox: "0 0 ".concat(Cb, " ").concat(Eb)
          })
        };
      (function(bb) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(wb) {
          return wb in bb
        }))
      })(Ib.attributes) || Ib.attributes["aria-hidden"] || (Bb.attributes["aria-hidden"] = "true"), Ub && (Bb.attributes[Fw] = "");
      var sb = lb(lb({}, Bb), {}, {
          prefix: Hb,
          iconName: pb,
          main: Mb,
          mask: eb,
          maskId: Lb,
          transform: Vb,
          symbol: gb,
          styles: lb({}, Ib.styles)
        }),
        mb = eb.found && Mb.found ? dM("generateAbstractMask", sb) || {
          children: [],
          attributes: {}
        } : dM("generateAbstractIcon", sb) || {
          children: [],
          attributes: {}
        },
        hb = mb.children,
        zb = mb.attributes;
      return sb.children = hb, sb.attributes = zb, gb ? function(bb) {
        var wb = bb.prefix,
          Mb = bb.iconName,
          eb = bb.children,
          Hb = bb.attributes,
          pb = bb.symbol,
          Vb = !0 === pb ? "".concat(wb, "-").concat(aw.cssPrefix, "-").concat(Mb) : pb;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: lb(lb({}, Hb), {}, {
              id: Vb
            }),
            children: eb
          }]
        }]
      }(sb) : function(bb) {
        var wb = bb.children,
          Mb = bb.main,
          eb = bb.mask,
          Hb = bb.attributes,
          pb = bb.styles,
          Vb = bb.transform;
        if (kw(Vb) && Mb.found && !eb.found) {
          var gb = {
            x: Mb.width / Mb.height / 2,
            y: .5
          };
          Hb.style = Tw(lb(lb({}, pb), {}, {
            "transform-origin": "".concat(gb.x + Vb.x / 16, "em ").concat(gb.y + Vb.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: Hb,
          children: wb
        }]
      }(sb)
    }

    function we(bb) {
      var wb = bb.content,
        Mb = bb.width,
        eb = bb.height,
        Hb = bb.transform,
        pb = bb.extra,
        Vb = bb.watchable,
        gb = void 0 !== Vb && Vb,
        Lb = lb(lb({}, pb.attributes), {}, {
          class: pb.classes.join(" ")
        });
      gb && (Lb[Fw] = "");
      var Ib = lb({}, pb.styles);
      kw(Hb) && (Ib.transform = function(bb) {
        var wb = bb.transform,
          Mb = bb.width,
          eb = void 0 === Mb ? 16 : Mb,
          Hb = bb.height,
          pb = void 0 === Hb ? 16 : Hb,
          Vb = bb.startCentered,
          gb = void 0 !== Vb && Vb,
          lb = "";
        return lb += gb && Db ? "translate(".concat(wb.x / uw - eb / 2, "em, ").concat(wb.y / uw - pb / 2, "em) ") : gb ? "translate(calc(-50% + ".concat(wb.x / uw, "em), calc(-50% + ").concat(wb.y / uw, "em)) ") : "translate(".concat(wb.x / uw, "em, ").concat(wb.y / uw, "em) "), lb += "scale(".concat(wb.size / uw * (wb.flipX ? -1 : 1), ", ").concat(wb.size / uw * (wb.flipY ? -1 : 1), ") "), lb + "rotate(".concat(wb.rotate, "deg) ")
      }({
        transform: Hb,
        startCentered: !0,
        width: Mb,
        height: eb
      }), Ib["-webkit-transform"] = Ib.transform);
      var Ob = Tw(Ib);
      Ob.length > 0 && (Lb.style = Ob);
      var Ub = [];
      return Ub.push({
        tag: "span",
        attributes: Lb,
        children: [wb]
      }), Ub
    }
    var Me = pM.styles;

    function ee(bb) {
      var wb = bb[0],
        Mb = bb[1],
        eb = Lb(bb.slice(4), 1)[0];
      return {
        found: !0,
        width: wb,
        height: Mb,
        icon: Array.isArray(eb) ? {
          tag: "g",
          attributes: {
            class: "".concat(aw.cssPrefix, "-").concat(Nw.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(aw.cssPrefix, "-").concat(Nw.SECONDARY),
              fill: "currentColor",
              d: eb[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(aw.cssPrefix, "-").concat(Nw.PRIMARY),
              fill: "currentColor",
              d: eb[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: eb
          }
        }
      }
    }
    var He = {
      found: !1,
      width: 512,
      height: 512
    };

    function pe(bb, wb) {
      var Mb = wb;
      return "fa" === wb && null !== aw.styleDefault && (wb = ZM()), new Promise((function(eb, Hb) {
        if ("fa" === Mb) {
          var pb = YM(bb) || {};
          bb = pb.iconName || bb, wb = pb.prefix || wb
        }
        if (bb && wb && Me[wb] && Me[wb][bb]) return eb(ee(Me[wb][bb]));
        ! function(bb, wb) {
          xw || aw.showMissingIcons || !bb || console.error('Icon with name "'.concat(bb, '" and prefix "').concat(wb, '" is missing.'))
        }(bb, wb), eb(lb(lb({}, He), {}, {
          icon: aw.showMissingIcons && bb && dM("missingIconAbstract") || {}
        }))
      }))
    }
    var Ve = function() {},
      ge = aw.measurePerformance && rb && rb.mark && rb.measure ? rb : {
        mark: Ve,
        measure: Ve
      },
      le = 'FA "7.2.0"',
      Le = function(bb) {
        ge.mark("".concat(le, " ").concat(bb, " ends")), ge.measure("".concat(le, " ").concat(bb), "".concat(le, " ").concat(bb, " begins"), "".concat(le, " ").concat(bb, " ends"))
      },
      Ie = function(bb) {
        return ge.mark("".concat(le, " ").concat(bb, " begins")),
          function() {
            return Le(bb)
          }
      },
      Oe = function() {};

    function Ue(bb) {
      return "string" === typeof(bb.getAttribute ? bb.getAttribute(Fw) : null)
    }

    function te(bb) {
      return jb.createElementNS("http://www.w3.org/2000/svg", bb)
    }

    function Ce(bb) {
      return jb.createElement(bb)
    }

    function Ee(bb) {
      var wb = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        Mb = void 0 === wb ? "svg" === bb.tag ? te : Ce : wb;
      if ("string" === typeof bb) return jb.createTextNode(bb);
      var eb = Mb(bb.tag);
      return Object.keys(bb.attributes || []).forEach((function(wb) {
        eb.setAttribute(wb, bb.attributes[wb])
      })), (bb.children || []).forEach((function(bb) {
        eb.appendChild(Ee(bb, {
          ceFn: Mb
        }))
      })), eb
    }
    var Fe = {
      replace: function(bb) {
        var wb = bb[0];
        if (wb.parentNode)
          if (bb[1].forEach((function(bb) {
              wb.parentNode.insertBefore(Ee(bb), wb)
            })), null === wb.getAttribute(Fw) && aw.keepOriginalSource) {
            var Mb = jb.createComment(function(bb) {
              var wb = " ".concat(bb.outerHTML, " ");
              return "".concat(wb, "Font Awesome fontawesome.com ")
            }(wb));
            wb.parentNode.replaceChild(Mb, wb)
          } else wb.remove()
      },
      nest: function(bb) {
        var wb = bb[0],
          Mb = bb[1];
        if (~yw(wb).indexOf(aw.replacementClass)) return Fe.replace(bb);
        var eb = new RegExp("".concat(aw.cssPrefix, "-.*"));
        if (delete Mb[0].attributes.id, Mb[0].attributes.class) {
          var Hb = Mb[0].attributes.class.split(" ").reduce((function(bb, wb) {
            return wb === aw.replacementClass || wb.match(eb) ? bb.toSvg.push(wb) : bb.toNode.push(wb), bb
          }), {
            toNode: [],
            toSvg: []
          });
          Mb[0].attributes.class = Hb.toSvg.join(" "), 0 === Hb.toNode.length ? wb.removeAttribute("class") : wb.setAttribute("class", Hb.toNode.join(" "))
        }
        var pb = Mb.map((function(bb) {
          return LM(bb)
        })).join("\n");
        wb.setAttribute(Fw, ""), wb.innerHTML = pb
      }
    };

    function Be(bb) {
      bb()
    }

    function se(bb, wb) {
      var Mb = "function" === typeof wb ? wb : Oe;
      if (0 === bb.length) Mb();
      else {
        var eb = Be;
        "async" === aw.mutateApproach && (eb = xb.requestAnimationFrame || Be), eb((function() {
          var wb = !0 === aw.autoReplaceSvg ? Fe.replace : Fe[aw.autoReplaceSvg] || Fe.replace,
            eb = Ie("mutate");
          bb.map(wb), eb(), Mb()
        }))
      }
    }
    var me = !1;

    function he() {
      me = !0
    }

    function ze() {
      me = !1
    }
    var Xe = null;

    function xe(bb) {
      if (Kb && aw.observeMutations) {
        var wb = bb.treeCallback,
          Mb = void 0 === wb ? Oe : wb,
          eb = bb.nodeCallback,
          Hb = void 0 === eb ? Oe : eb,
          pb = bb.pseudoElementsCallback,
          Vb = void 0 === pb ? Oe : pb,
          gb = bb.observeMutationsRoot,
          lb = void 0 === gb ? jb : gb;
        Xe = new Kb((function(bb) {
          if (!me) {
            var wb = ZM();
            nw(bb).forEach((function(bb) {
              if ("childList" === bb.type && bb.addedNodes.length > 0 && !Ue(bb.addedNodes[0]) && (aw.searchPseudoElements && Vb(bb.target), Mb(bb.target)), "attributes" === bb.type && bb.target.parentNode && aw.searchPseudoElements && Vb([bb.target], !0), "attributes" === bb.type && Ue(bb.target) && ~Sw.indexOf(bb.attributeName))
                if ("class" === bb.attributeName && function(bb) {
                    var wb = bb.getAttribute ? bb.getAttribute(sw) : null,
                      Mb = bb.getAttribute ? bb.getAttribute(mw) : null;
                    return wb && Mb
                  }(bb.target)) {
                  var eb = JM(yw(bb.target)),
                    pb = eb.prefix,
                    gb = eb.iconName;
                  bb.target.setAttribute(sw, pb || wb), gb && bb.target.setAttribute(mw, gb)
                } else(lb = bb.target) && lb.classList && lb.classList.contains && lb.classList.contains(aw.replacementClass) && Hb(bb.target);
              var lb
            }))
          }
        })), Rb && Xe.observe(lb, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function je(bb) {
      var wb, Mb, eb = bb.getAttribute("data-prefix"),
        Hb = bb.getAttribute("data-icon"),
        pb = void 0 !== bb.innerText ? bb.innerText.trim() : "",
        Vb = JM(yw(bb));
      return Vb.prefix || (Vb.prefix = ZM()), eb && Hb && (Vb.prefix = eb, Vb.iconName = Hb), Vb.iconName && Vb.prefix || (Vb.prefix && pb.length > 0 && (Vb.iconName = (wb = Vb.prefix, Mb = bb.innerText, (zM[wb] || {})[Mb] || DM(Vb.prefix, UM(bb.innerText)))), !Vb.iconName && aw.autoFetchSvg && bb.firstChild && bb.firstChild.nodeType === Node.TEXT_NODE && (Vb.iconName = bb.firstChild.data)), Vb
    }

    function Ke(bb) {
      var wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        Mb = je(bb),
        eb = Mb.iconName,
        Hb = Mb.prefix,
        pb = Mb.rest,
        Vb = function(bb) {
          return nw(bb.attributes).reduce((function(bb, wb) {
            return "class" !== bb.name && "style" !== bb.name && (bb[wb.name] = wb.value), bb
          }), {})
        }(bb),
        gb = iM("parseNodeAttributes", {}, bb),
        Lb = wb.styleParser ? function(bb) {
          var wb = bb.getAttribute("style"),
            Mb = [];
          return wb && (Mb = wb.split(";").reduce((function(bb, wb) {
            var Mb = wb.split(":"),
              eb = Mb[0],
              Hb = Mb.slice(1);
            return eb && Hb.length > 0 && (bb[eb] = Hb.join(":").trim()), bb
          }), {})), Mb
        }(bb) : [];
      return lb({
        iconName: eb,
        prefix: Hb,
        transform: dw,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: pb,
          styles: Lb,
          attributes: Vb
        }
      }, gb)
    }
    var re = pM.styles;

    function Re(bb) {
      var wb = "nest" === aw.autoReplaceSvg ? Ke(bb, {
        styleParser: !1
      }) : Ke(bb);
      return ~wb.extra.classes.indexOf(Ww) ? dM("generateLayersText", bb, wb) : dM("generateSvgReplacementMutation", bb, wb)
    }

    function De(bb) {
      var wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!Rb) return Promise.resolve();
      var Mb = jb.documentElement.classList,
        eb = function(bb) {
          return Mb.add("".concat(hw, "-").concat(bb))
        },
        Hb = function(bb) {
          return Mb.remove("".concat(hw, "-").concat(bb))
        },
        pb = aw.autoFetchSvg ? [].concat(Ib(bw), Ib(Iw)) : Yb.concat(Object.keys(re));
      pb.includes("fa") || pb.push("fa");
      var Vb = [".".concat(Ww, ":not([").concat(Fw, "])")].concat(pb.map((function(bb) {
        return ".".concat(bb, ":not([").concat(Fw, "])")
      }))).join(", ");
      if (0 === Vb.length) return Promise.resolve();
      var gb = [];
      try {
        gb = nw(bb.querySelectorAll(Vb))
      } catch (Ob) {}
      if (!(gb.length > 0)) return Promise.resolve();
      eb("pending"), Hb("complete");
      var lb = Ie("onTree"),
        Lb = gb.reduce((function(bb, wb) {
          try {
            var Mb = Re(wb);
            Mb && bb.push(Mb)
          } catch (Ob) {
            xw || "MissingIcon" === Ob.name && console.error(Ob)
          }
          return bb
        }), []);
      return new Promise((function(bb, Mb) {
        Promise.all(Lb).then((function(Mb) {
          se(Mb, (function() {
            eb("active"), eb("complete"), Hb("pending"), "function" === typeof wb && wb(), lb(), bb()
          }))
        })).catch((function(bb) {
          lb(), Mb(bb)
        }))
      }))
    }

    function ce(bb) {
      var wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      Re(bb).then((function(bb) {
        bb && se([bb], wb)
      }))
    }
    var Ye = function(bb) {
        var wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Mb = wb.transform,
          eb = void 0 === Mb ? dw : Mb,
          Hb = wb.symbol,
          pb = void 0 !== Hb && Hb,
          Vb = wb.mask,
          gb = void 0 === Vb ? null : Vb,
          Lb = wb.maskId,
          Ib = void 0 === Lb ? null : Lb,
          Ob = wb.classes,
          Ub = void 0 === Ob ? [] : Ob,
          tb = wb.attributes,
          Cb = void 0 === tb ? {} : tb,
          Eb = wb.styles,
          Fb = void 0 === Eb ? {} : Eb;
        if (bb) {
          var Bb = bb.prefix,
            sb = bb.iconName,
            mb = bb.icon;
          return kM(lb({
            type: "icon"
          }, bb), (function() {
            return uM("beforeDOMElementCreation", {
              iconDefinition: bb,
              params: wb
            }), be({
              icons: {
                main: ee(mb),
                mask: gb ? ee(gb.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: Bb,
              iconName: sb,
              transform: lb(lb({}, dw), eb),
              symbol: pb,
              maskId: Ib,
              extra: {
                attributes: Cb,
                styles: Fb,
                classes: Ub
              }
            })
          }))
        }
      },
      Ze = {
        mixout: function() {
          return {
            icon: (bb = Ye, function(wb) {
              var Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                eb = (wb || {}).icon ? wb : PM(wb || {}),
                Hb = Mb.mask;
              return Hb && (Hb = (Hb || {}).icon ? Hb : PM(Hb || {})), bb(eb, lb(lb({}, Mb), {}, {
                mask: Hb
              }))
            })
          };
          var bb
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(bb) {
              return bb.treeCallback = De, bb.nodeCallback = ce, bb
            }
          }
        },
        provides: function(bb) {
          bb.i2svg = function(bb) {
            var wb = bb.node,
              Mb = void 0 === wb ? jb : wb,
              eb = bb.callback;
            return De(Mb, void 0 === eb ? function() {} : eb)
          }, bb.generateSvgReplacementMutation = function(bb, wb) {
            var Mb = wb.iconName,
              eb = wb.prefix,
              Hb = wb.transform,
              pb = wb.symbol,
              Vb = wb.mask,
              gb = wb.maskId,
              lb = wb.extra;
            return new Promise((function(wb, Ib) {
              Promise.all([pe(Mb, eb), Vb.iconName ? pe(Vb.iconName, Vb.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(Vb) {
                var Ib = Lb(Vb, 2),
                  Ob = Ib[0],
                  Ub = Ib[1];
                wb([bb, be({
                  icons: {
                    main: Ob,
                    mask: Ub
                  },
                  prefix: eb,
                  iconName: Mb,
                  transform: Hb,
                  symbol: pb,
                  maskId: gb,
                  extra: lb,
                  watchable: !0
                })])
              })).catch(Ib)
            }))
          }, bb.generateAbstractIcon = function(bb) {
            var wb, Mb = bb.children,
              eb = bb.attributes,
              Hb = bb.main,
              pb = bb.transform,
              Vb = Tw(bb.styles);
            return Vb.length > 0 && (eb.style = Vb), kw(pb) && (wb = dM("generateAbstractTransformGrouping", {
              main: Hb,
              transform: pb,
              containerWidth: Hb.width,
              iconWidth: Hb.width
            })), Mb.push(wb || Hb.icon), {
              children: Mb,
              attributes: eb
            }
          }
        }
      },
      fe = {
        mixout: function() {
          return {
            layer: function(bb) {
              var wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Mb = wb.classes,
                eb = void 0 === Mb ? [] : Mb;
              return kM({
                type: "layer"
              }, (function() {
                uM("beforeDOMElementCreation", {
                  assembler: bb,
                  params: wb
                });
                var Mb = [];
                return bb((function(bb) {
                  Array.isArray(bb) ? bb.map((function(bb) {
                    Mb = Mb.concat(bb.abstract)
                  })) : Mb = Mb.concat(bb.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(aw.cssPrefix, "-layers")].concat(Ib(eb)).join(" ")
                  },
                  children: Mb
                }]
              }))
            }
          }
        }
      },
      Ae = {
        mixout: function() {
          return {
            counter: function(bb) {
              var wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Mb = wb.title,
                eb = void 0 === Mb ? null : Mb,
                Hb = wb.classes,
                pb = void 0 === Hb ? [] : Hb,
                Vb = wb.attributes,
                gb = void 0 === Vb ? {} : Vb,
                Lb = wb.styles,
                Ob = void 0 === Lb ? {} : Lb;
              return kM({
                type: "counter",
                content: bb
              }, (function() {
                return uM("beforeDOMElementCreation", {
                    content: bb,
                    params: wb
                  }),
                  function(bb) {
                    var wb = bb.content,
                      Mb = bb.extra,
                      eb = lb(lb({}, Mb.attributes), {}, {
                        class: Mb.classes.join(" ")
                      }),
                      Hb = Tw(Mb.styles);
                    Hb.length > 0 && (eb.style = Hb);
                    var pb = [];
                    return pb.push({
                      tag: "span",
                      attributes: eb,
                      children: [wb]
                    }), pb
                  }({
                    content: bb.toString(),
                    title: eb,
                    extra: {
                      attributes: gb,
                      styles: Ob,
                      classes: ["".concat(aw.cssPrefix, "-layers-counter")].concat(Ib(pb))
                    }
                  })
              }))
            }
          }
        }
      },
      We = {
        mixout: function() {
          return {
            text: function(bb) {
              var wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Mb = wb.transform,
                eb = void 0 === Mb ? dw : Mb,
                Hb = wb.classes,
                pb = void 0 === Hb ? [] : Hb,
                Vb = wb.attributes,
                gb = void 0 === Vb ? {} : Vb,
                Lb = wb.styles,
                Ob = void 0 === Lb ? {} : Lb;
              return kM({
                type: "text",
                content: bb
              }, (function() {
                return uM("beforeDOMElementCreation", {
                  content: bb,
                  params: wb
                }), we({
                  content: bb,
                  transform: lb(lb({}, dw), eb),
                  extra: {
                    attributes: gb,
                    styles: Ob,
                    classes: ["".concat(aw.cssPrefix, "-layers-text")].concat(Ib(pb))
                  }
                })
              }))
            }
          }
        },
        provides: function(bb) {
          bb.generateLayersText = function(bb, wb) {
            var Mb = wb.transform,
              eb = wb.extra,
              Hb = null,
              pb = null;
            if (Db) {
              var Vb = parseInt(getComputedStyle(bb).fontSize, 10),
                gb = bb.getBoundingClientRect();
              Hb = gb.width / Vb, pb = gb.height / Vb
            }
            return Promise.resolve([bb, we({
              content: bb.innerHTML,
              width: Hb,
              height: pb,
              transform: Mb,
              extra: eb,
              watchable: !0
            })])
          }
        }
      },
      Je = new RegExp('"', "ug"),
      Se = [1105920, 1112319],
      Ne = lb(lb(lb(lb({}, {
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
      ve = Object.keys(Ne).reduce((function(bb, wb) {
        return bb[wb.toLowerCase()] = Ne[wb], bb
      }), {}),
      Qe = Object.keys(ve).reduce((function(bb, wb) {
        var Mb = ve[wb];
        return bb[wb] = Mb[900] || Ib(Object.entries(Mb))[0][1], bb
      }), {});

    function Ge(bb, wb) {
      var Mb = "".concat("data-fa-pseudo-element-pending").concat(wb.replace(":", "-"));
      return new Promise((function(eb, Hb) {
        if (null !== bb.getAttribute(Mb)) return eb();
        var pb = nw(bb.children).filter((function(bb) {
            return bb.getAttribute(Bw) === wb
          }))[0],
          Vb = xb.getComputedStyle(bb, wb),
          gb = Vb.getPropertyValue("font-family"),
          Lb = gb.match(Jw),
          Ob = Vb.getPropertyValue("font-weight"),
          Ub = Vb.getPropertyValue("content");
        if (pb && !Lb) return bb.removeChild(pb), eb();
        if (Lb && "none" !== Ub && "" !== Ub) {
          var tb = Vb.getPropertyValue("content"),
            Cb = function(bb, wb) {
              var Mb = bb.replace(/^['"]|['"]$/g, "").toLowerCase(),
                eb = parseInt(wb),
                Hb = isNaN(eb) ? "normal" : eb;
              return (ve[Mb] || {})[Hb] || Qe[Mb]
            }(gb, Ob),
            Eb = function(bb) {
              return UM(Ib(bb.replace(Je, ""))[0] || "")
            }(tb),
            Fb = Lb[0].startsWith("FontAwesome"),
            Bb = function(bb) {
              var wb = bb.getPropertyValue("font-feature-settings").includes("ss01"),
                Mb = bb.getPropertyValue("content").replace(Je, ""),
                eb = Mb.codePointAt(0),
                Hb = eb >= Se[0] && eb <= Se[1],
                pb = 2 === Mb.length && Mb[0] === Mb[1];
              return Hb || pb || wb
            }(Vb),
            sb = DM(Cb, Eb),
            mb = sb;
          if (Fb) {
            var hb = function(bb) {
              var wb = xM[bb],
                Mb = DM("fas", bb);
              return wb || (Mb ? {
                prefix: "fas",
                iconName: Mb
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(Eb);
            hb.iconName && hb.prefix && (sb = hb.iconName, Cb = hb.prefix)
          }
          if (!sb || Bb || pb && pb.getAttribute(sw) === Cb && pb.getAttribute(mw) === mb) eb();
          else {
            bb.setAttribute(Mb, mb), pb && bb.removeChild(pb);
            var zb = {
                iconName: null,
                prefix: null,
                transform: dw,
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
              Xb = zb.extra;
            Xb.attributes[Bw] = wb, pe(sb, Cb).then((function(Hb) {
              var pb = be(lb(lb({}, zb), {}, {
                  icons: {
                    main: Hb,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: Cb,
                  iconName: mb,
                  extra: Xb,
                  watchable: !0
                })),
                Vb = jb.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === wb ? bb.insertBefore(Vb, bb.firstChild) : bb.appendChild(Vb), Vb.outerHTML = pb.map((function(bb) {
                return LM(bb)
              })).join("\n"), bb.removeAttribute(Mb), eb()
            })).catch(Hb)
          }
        } else eb()
      }))
    }

    function qe(bb) {
      return Promise.all([Ge(bb, "::before"), Ge(bb, "::after")])
    }

    function ae(bb) {
      return bb.parentNode !== document.head && !~zw.indexOf(bb.tagName.toUpperCase()) && !bb.getAttribute(Bw) && (!bb.parentNode || "svg" !== bb.parentNode.tagName)
    }
    var ie = function(bb) {
        return !!bb && Xw.some((function(wb) {
          return bb.includes(wb)
        }))
      },
      ue = function(bb) {
        if (!bb) return [];
        var wb = new Set,
          Mb = bb.split(/,(?![^()]*\))/).map((function(bb) {
            return bb.trim()
          }));
        Mb = Mb.flatMap((function(bb) {
          return bb.includes("(") ? bb : bb.split(",").map((function(bb) {
            return bb.trim()
          }))
        }));
        var eb, Hb = pb(Mb);
        try {
          for (Hb.s(); !(eb = Hb.n()).done;) {
            var Vb = eb.value;
            if (ie(Vb)) {
              var gb = Xw.reduce((function(bb, wb) {
                return bb.replace(wb, "")
              }), Vb);
              "" !== gb && "*" !== gb && wb.add(gb)
            }
          }
        } catch (lb) {
          Hb.e(lb)
        } finally {
          Hb.f()
        }
        return wb
      };

    function de(bb) {
      if (Rb) {
        var wb;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) wb = bb;
        else if (aw.searchPseudoElementsFullScan) wb = bb.querySelectorAll("*");
        else {
          var Mb, eb = new Set,
            Hb = pb(document.styleSheets);
          try {
            for (Hb.s(); !(Mb = Hb.n()).done;) {
              var Vb = Mb.value;
              try {
                var gb, lb = pb(Vb.cssRules);
                try {
                  for (lb.s(); !(gb = lb.n()).done;) {
                    var Lb, Ib = gb.value,
                      Ob = pb(ue(Ib.selectorText));
                    try {
                      for (Ob.s(); !(Lb = Ob.n()).done;) {
                        var Ub = Lb.value;
                        eb.add(Ub)
                      }
                    } catch (Cb) {
                      Ob.e(Cb)
                    } finally {
                      Ob.f()
                    }
                  }
                } catch (Cb) {
                  lb.e(Cb)
                } finally {
                  lb.f()
                }
              } catch (Eb) {
                aw.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(Vb.href, " (").concat(Eb.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (Cb) {
            Hb.e(Cb)
          } finally {
            Hb.f()
          }
          if (!eb.size) return;
          var tb = Array.from(eb).join(", ");
          try {
            wb = bb.querySelectorAll(tb)
          } catch (Fb) {}
        }
        return new Promise((function(bb, Mb) {
          var eb = nw(wb).filter(ae).map(qe),
            Hb = Ie("searchPseudoElements");
          he(), Promise.all(eb).then((function() {
            Hb(), ze(), bb()
          })).catch((function() {
            Hb(), ze(), Mb()
          }))
        }))
      }
    }
    var Pe = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(bb) {
              return bb.pseudoElementsCallback = de, bb
            }
          }
        },
        provides: function(bb) {
          bb.pseudoElements2svg = function(bb) {
            var wb = bb.node,
              Mb = void 0 === wb ? jb : wb;
            aw.searchPseudoElements && de(Mb)
          }
        }
      },
      ne = !1,
      ye = function(bb) {
        return bb.toLowerCase().split(" ").reduce((function(bb, wb) {
          var Mb = wb.toLowerCase().split("-"),
            eb = Mb[0],
            Hb = Mb.slice(1).join("-");
          if (eb && "h" === Hb) return bb.flipX = !0, bb;
          if (eb && "v" === Hb) return bb.flipY = !0, bb;
          if (Hb = parseFloat(Hb), isNaN(Hb)) return bb;
          switch (eb) {
            case "grow":
              bb.size = bb.size + Hb;
              break;
            case "shrink":
              bb.size = bb.size - Hb;
              break;
            case "left":
              bb.x = bb.x - Hb;
              break;
            case "right":
              bb.x = bb.x + Hb;
              break;
            case "up":
              bb.y = bb.y - Hb;
              break;
            case "down":
              bb.y = bb.y + Hb;
              break;
            case "rotate":
              bb.rotate = bb.rotate + Hb
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
      oe = {
        mixout: function() {
          return {
            parse: {
              transform: function(bb) {
                return ye(bb)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(bb, wb) {
              var Mb = wb.getAttribute("data-fa-transform");
              return Mb && (bb.transform = ye(Mb)), bb
            }
          }
        },
        provides: function(bb) {
          bb.generateAbstractTransformGrouping = function(bb) {
            var wb = bb.main,
              Mb = bb.transform,
              eb = bb.containerWidth,
              Hb = bb.iconWidth,
              pb = {
                transform: "translate(".concat(eb / 2, " 256)")
              },
              Vb = "translate(".concat(32 * Mb.x, ", ").concat(32 * Mb.y, ") "),
              gb = "scale(".concat(Mb.size / 16 * (Mb.flipX ? -1 : 1), ", ").concat(Mb.size / 16 * (Mb.flipY ? -1 : 1), ") "),
              Lb = "rotate(".concat(Mb.rotate, " 0 0)"),
              Ib = {
                outer: pb,
                inner: {
                  transform: "".concat(Vb, " ").concat(gb, " ").concat(Lb)
                },
                path: {
                  transform: "translate(".concat(Hb / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: lb({}, Ib.outer),
              children: [{
                tag: "g",
                attributes: lb({}, Ib.inner),
                children: [{
                  tag: wb.icon.tag,
                  children: wb.icon.children,
                  attributes: lb(lb({}, wb.icon.attributes), Ib.path)
                }]
              }]
            }
          }
        }
      },
      Te = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function ke(bb) {
      var wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return bb.attributes && (bb.attributes.fill || wb) && (bb.attributes.fill = "black"), bb
    }
    var bH = {
        hooks: function() {
          return {
            parseNodeAttributes: function(bb, wb) {
              var Mb = wb.getAttribute("data-fa-mask"),
                eb = Mb ? JM(Mb.split(" ").map((function(bb) {
                  return bb.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return eb.prefix || (eb.prefix = ZM()), bb.mask = eb, bb.maskId = wb.getAttribute("data-fa-mask-id"), bb
            }
          }
        },
        provides: function(bb) {
          bb.generateAbstractMask = function(bb) {
            var wb, Mb = bb.children,
              eb = bb.attributes,
              Hb = bb.main,
              pb = bb.mask,
              Vb = bb.maskId,
              gb = bb.transform,
              Lb = Hb.width,
              Ib = Hb.icon,
              Ob = pb.width,
              Ub = pb.icon,
              tb = function(bb) {
                var wb = bb.transform,
                  Mb = bb.containerWidth,
                  eb = bb.iconWidth,
                  Hb = {
                    transform: "translate(".concat(Mb / 2, " 256)")
                  },
                  pb = "translate(".concat(32 * wb.x, ", ").concat(32 * wb.y, ") "),
                  Vb = "scale(".concat(wb.size / 16 * (wb.flipX ? -1 : 1), ", ").concat(wb.size / 16 * (wb.flipY ? -1 : 1), ") "),
                  gb = "rotate(".concat(wb.rotate, " 0 0)");
                return {
                  outer: Hb,
                  inner: {
                    transform: "".concat(pb, " ").concat(Vb, " ").concat(gb)
                  },
                  path: {
                    transform: "translate(".concat(eb / 2 * -1, " -256)")
                  }
                }
              }({
                transform: gb,
                containerWidth: Ob,
                iconWidth: Lb
              }),
              Cb = {
                tag: "rect",
                attributes: lb(lb({}, Te), {}, {
                  fill: "white"
                })
              },
              Eb = Ib.children ? {
                children: Ib.children.map(ke)
              } : {},
              Fb = {
                tag: "g",
                attributes: lb({}, tb.inner),
                children: [ke(lb({
                  tag: Ib.tag,
                  attributes: lb(lb({}, Ib.attributes), tb.path)
                }, Eb))]
              },
              Bb = {
                tag: "g",
                attributes: lb({}, tb.outer),
                children: [Fb]
              },
              sb = "mask-".concat(Vb || Pw()),
              mb = "clip-".concat(Vb || Pw()),
              hb = {
                tag: "mask",
                attributes: lb(lb({}, Te), {}, {
                  id: sb,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [Cb, Bb]
              },
              zb = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: mb
                  },
                  children: (wb = Ub, "g" === wb.tag ? wb.children : [wb])
                }, hb]
              };
            return Mb.push(zb, {
              tag: "rect",
              attributes: lb({
                fill: "currentColor",
                "clip-path": "url(#".concat(mb, ")"),
                mask: "url(#".concat(sb, ")")
              }, Te)
            }), {
              children: Mb,
              attributes: eb
            }
          }
        }
      },
      wH = {
        provides: function(bb) {
          var wb = !1;
          xb.matchMedia && (wb = xb.matchMedia("(prefers-reduced-motion: reduce)").matches), bb.missingIconAbstract = function() {
            var bb = [],
              Mb = {
                fill: "currentColor"
              },
              eb = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            bb.push({
              tag: "path",
              attributes: lb(lb({}, Mb), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var Hb = lb(lb({}, eb), {}, {
                attributeName: "opacity"
              }),
              pb = {
                tag: "circle",
                attributes: lb(lb({}, Mb), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return wb || pb.children.push({
              tag: "animate",
              attributes: lb(lb({}, eb), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: lb(lb({}, Hb), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), bb.push(pb), bb.push({
              tag: "path",
              attributes: lb(lb({}, Mb), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: wb ? [] : [{
                tag: "animate",
                attributes: lb(lb({}, Hb), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), wb || bb.push({
              tag: "path",
              attributes: lb(lb({}, Mb), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: lb(lb({}, Hb), {}, {
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
    ! function(bb, wb) {
      var Mb = wb.mixoutsTo;
      QM = bb, GM = {}, Object.keys(qM).forEach((function(bb) {
        -1 === aM.indexOf(bb) && delete qM[bb]
      })), QM.forEach((function(bb) {
        var wb = bb.mixout ? bb.mixout() : {};
        if (Object.keys(wb).forEach((function(bb) {
            "function" === typeof wb[bb] && (Mb[bb] = wb[bb]), "object" === Ub(wb[bb]) && Object.keys(wb[bb]).forEach((function(eb) {
              Mb[bb] || (Mb[bb] = {}), Mb[bb][eb] = wb[bb][eb]
            }))
          })), bb.hooks) {
          var eb = bb.hooks();
          Object.keys(eb).forEach((function(bb) {
            GM[bb] || (GM[bb] = []), GM[bb].push(eb[bb])
          }))
        }
        bb.provides && bb.provides(qM)
      }))
    }([eM, Ze, fe, Ae, We, Pe, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              he(), ne = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            xe(iM("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            Xe && Xe.disconnect()
          },
          watch: function(bb) {
            var wb = bb.observeMutationsRoot;
            ne ? ze() : xe(iM("mutationObserverCallbacks", {
              observeMutationsRoot: wb
            }))
          }
        }
      }
    }, oe, bH, wH, {
      hooks: function() {
        return {
          parseNodeAttributes: function(bb, wb) {
            var Mb = wb.getAttribute("data-fa-symbol"),
              eb = null !== Mb && ("" === Mb || Mb);
            return bb.symbol = eb, bb
          }
        }
      }
    }], {
      mixoutsTo: oM
    });
    var MH = oM.noAuto,
      eH = oM.config,
      HH = oM.library,
      pH = oM.dom,
      VH = oM.parse,
      gH = oM.findIconDefinition,
      lH = oM.toHtml,
      LH = oM.icon,
      IH = oM.layer,
      OH = oM.text,
      UH = oM.counter
  },
  7962: bb => {
    bb.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);