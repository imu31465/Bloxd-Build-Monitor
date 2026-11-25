/*! For license information please see igzsf.fa-renderer.7ff4fde2.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6903: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      FontAwesomeIcon: () => ht
    });
    var Ot = Vt(6894),
      qt = Vt(5127),
      Dt = Vt.n(qt),
      mt = Vt(63);

    function dt(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function jt(tt, et, Vt) {
      return (et = function(tt) {
        var et = function(tt, et) {
          if ("object" != typeof tt || !tt) return tt;
          var Vt = tt[Symbol.toPrimitive];
          if (void 0 !== Vt) {
            var Ot = Vt.call(tt, et || "default");
            if ("object" != typeof Ot) return Ot;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === et ? String : Number)(tt)
        }(tt, "string");
        return "symbol" == typeof et ? et : et + ""
      }(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Ht(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function Xt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? Ht(Object(Vt), !0).forEach((function(et) {
          jt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : Ht(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function Qt(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        var Vt = null == tt ? null : "undefined" != typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
        if (null != Vt) {
          var Ot, qt, Dt, mt, dt = [],
            jt = !0,
            Ht = !1;
          try {
            if (Dt = (Vt = Vt.call(tt)).next, 0 === et) {
              if (Object(Vt) !== Vt) return;
              jt = !1
            } else
              for (; !(jt = (Ot = Dt.call(Vt)).done) && (dt.push(Ot.value), dt.length !== et); jt = !0);
          } catch (tt) {
            Ht = !0, qt = tt
          } finally {
            try {
              if (!jt && null != Vt.return && (mt = Vt.return(), Object(mt) !== mt)) return
            } finally {
              if (Ht) throw qt
            }
          }
          return dt
        }
      }(tt, et) || ft(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lt(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return dt(tt)
      }(tt) || function(tt) {
        if ("undefined" != typeof Symbol && null != tt[Symbol.iterator] || null != tt["@@iterator"]) return Array.from(tt)
      }(tt) || ft(tt) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Et(tt) {
      return Et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, Et(tt)
    }

    function ft(tt, et) {
      if (tt) {
        if ("string" == typeof tt) return dt(tt, et);
        var Vt = {}.toString.call(tt).slice(8, -1);
        return "Object" === Vt && tt.constructor && (Vt = tt.constructor.name), "Map" === Vt || "Set" === Vt ? Array.from(tt) : "Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt) ? dt(tt, et) : void 0
      }
    }
    var wt;
    try {
      var yt = Vt(6906);
      wt = yt.version
    } catch (Wt) {
      wt = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function Nt(tt) {
      var et = tt.beat,
        Vt = tt.fade,
        Ot = tt.beatFade,
        qt = tt.bounce,
        Dt = tt.shake,
        mt = tt.flash,
        dt = tt.spin,
        Ht = tt.spinPulse,
        Xt = tt.spinReverse,
        lt = tt.pulse,
        Et = tt.fixedWidth,
        ft = tt.inverse,
        yt = tt.border,
        Nt = tt.listItem,
        Mt = tt.flip,
        bt = tt.size,
        Jt = tt.rotation,
        Ct = tt.pull,
        ut = tt.swapOpacity,
        Kt = tt.rotateBy,
        ht = tt.widthAuto,
        vt = function(tt, et) {
          for (var Vt = Qt(tt.split("-"), 2), Ot = Vt[0], qt = Vt[1], Dt = Qt(et.split("-"), 2), mt = Dt[0], dt = Dt[1], jt = Ot.split("."), Ht = mt.split("."), Xt = 0; Xt < Math.max(jt.length, Ht.length); Xt++) {
            var lt = jt[Xt] || "0",
              Et = Ht[Xt] || "0",
              ft = parseInt(lt, 10),
              wt = parseInt(Et, 10);
            if (ft !== wt) return ft > wt
          }
          for (var yt = 0; yt < Math.max(jt.length, Ht.length); yt++) {
            var Nt = jt[yt] || "0",
              Mt = Ht[yt] || "0";
            if (Nt !== Mt && Nt.length !== Mt.length) return Nt.length < Mt.length
          }
          return !(qt && !dt)
        }(wt, "7.0.0"),
        Wt = jt(jt(jt(jt(jt(jt({
          "fa-beat": et,
          "fa-fade": Vt,
          "fa-beat-fade": Ot,
          "fa-bounce": qt,
          "fa-shake": Dt,
          "fa-flash": mt,
          "fa-spin": dt,
          "fa-spin-reverse": Xt,
          "fa-spin-pulse": Ht,
          "fa-pulse": lt,
          "fa-fw": Et,
          "fa-inverse": ft,
          "fa-border": yt,
          "fa-li": Nt,
          "fa-flip": !0 === Mt,
          "fa-flip-horizontal": "horizontal" === Mt || "both" === Mt,
          "fa-flip-vertical": "vertical" === Mt || "both" === Mt
        }, "fa-".concat(bt), "undefined" !== typeof bt && null !== bt), "fa-rotate-".concat(Jt), "undefined" !== typeof Jt && null !== Jt && 0 !== Jt), "fa-pull-".concat(Ct), "undefined" !== typeof Ct && null !== Ct), "fa-swap-opacity", ut), "fa-rotate-by", vt && Kt), "fa-width-auto", vt && ht);
      return Object.keys(Wt).map((function(tt) {
        return Wt[tt] ? tt : null
      })).filter((function(tt) {
        return tt
      }))
    }

    function Mt(tt) {
      return et = tt, (et -= 0) === et ? tt : (tt = tt.replace(/[\-_\s]+(.)?/g, (function(tt, et) {
        return et ? et.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + tt.substr(1);
      var et
    }
    var bt = ["style"];
    var Jt = !1;
    try {
      Jt = !0
    } catch (Wt) {}

    function Ct(tt) {
      return tt && "object" === Et(tt) && tt.prefix && tt.iconName && tt.icon ? tt : Ot.parse.icon ? Ot.parse.icon(tt) : null === tt ? null : tt && "object" === Et(tt) && tt.prefix && tt.iconName ? tt : Array.isArray(tt) && 2 === tt.length ? {
        prefix: tt[0],
        iconName: tt[1]
      } : "string" === typeof tt ? {
        prefix: "fas",
        iconName: tt
      } : void 0
    }

    function ut(tt, et) {
      return Array.isArray(et) && et.length > 0 || !Array.isArray(et) && et ? jt({}, tt, et) : {}
    }
    var Kt = {
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
      ht = mt.forwardRef((function(tt, et) {
        var Vt = Xt(Xt({}, Kt), tt),
          qt = Vt.icon,
          Dt = Vt.mask,
          mt = Vt.symbol,
          dt = Vt.className,
          jt = Vt.title,
          Ht = Vt.titleId,
          Qt = Vt.maskId,
          Et = Ct(qt),
          ft = ut("classes", [].concat(lt(Nt(Vt)), lt((dt || "").split(" ")))),
          wt = ut("transform", "string" === typeof Vt.transform ? Ot.parse.transform(Vt.transform) : Vt.transform),
          yt = ut("mask", Ct(Dt)),
          Mt = (0, Ot.icon)(Et, Xt(Xt(Xt(Xt({}, ft), wt), yt), {}, {
            symbol: mt,
            title: jt,
            titleId: Ht,
            maskId: Qt
          }));
        if (!Mt) return function() {
          var tt;
          !Jt && console && "function" === typeof console.error && (tt = console).error.apply(tt, arguments)
        }("Could not find icon", Et), null;
        var bt = Mt.abstract,
          ht = {
            ref: et
          };
        return Object.keys(Vt).forEach((function(tt) {
          Kt.hasOwnProperty(tt) || (ht[tt] = Vt[tt])
        })), vt(bt[0], ht)
      }));
    ht.displayName = "FontAwesomeIcon", ht.propTypes = {
      beat: Dt().bool,
      border: Dt().bool,
      beatFade: Dt().bool,
      bounce: Dt().bool,
      className: Dt().string,
      fade: Dt().bool,
      flash: Dt().bool,
      mask: Dt().oneOfType([Dt().object, Dt().array, Dt().string]),
      maskId: Dt().string,
      fixedWidth: Dt().bool,
      inverse: Dt().bool,
      flip: Dt().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: Dt().oneOfType([Dt().object, Dt().array, Dt().string]),
      listItem: Dt().bool,
      pull: Dt().oneOf(["right", "left"]),
      pulse: Dt().bool,
      rotation: Dt().oneOf([0, 90, 180, 270]),
      rotateBy: Dt().bool,
      shake: Dt().bool,
      size: Dt().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: Dt().bool,
      spinPulse: Dt().bool,
      spinReverse: Dt().bool,
      symbol: Dt().oneOfType([Dt().bool, Dt().string]),
      title: Dt().string,
      titleId: Dt().string,
      transform: Dt().oneOfType([Dt().string, Dt().object]),
      swapOpacity: Dt().bool,
      widthAuto: Dt().bool
    };
    var vt = function tt(et, Vt) {
      var Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof Vt) return Vt;
      var qt = (Vt.children || []).map((function(Vt) {
          return tt(et, Vt)
        })),
        Dt = Object.keys(Vt.attributes || {}).reduce((function(tt, et) {
          var Ot = Vt.attributes[et];
          switch (et) {
            case "class":
              tt.attrs.className = Ot, delete Vt.attributes.class;
              break;
            case "style":
              tt.attrs.style = Ot.split(";").map((function(tt) {
                return tt.trim()
              })).filter((function(tt) {
                return tt
              })).reduce((function(tt, et) {
                var Vt, Ot = et.indexOf(":"),
                  qt = Mt(et.slice(0, Ot)),
                  Dt = et.slice(Ot + 1).trim();
                return qt.startsWith("webkit") ? tt[(Vt = qt, Vt.charAt(0).toUpperCase() + Vt.slice(1))] = Dt : tt[qt] = Dt, tt
              }), {});
              break;
            default:
              0 === et.indexOf("aria-") || 0 === et.indexOf("data-") ? tt.attrs[et.toLowerCase()] = Ot : tt.attrs[Mt(et)] = Ot
          }
          return tt
        }), {
          attrs: {}
        }),
        mt = Ot.style,
        dt = void 0 === mt ? {} : mt,
        jt = function(tt, et) {
          if (null == tt) return {};
          var Vt, Ot, qt = function(tt, et) {
            if (null == tt) return {};
            var Vt = {};
            for (var Ot in tt)
              if ({}.hasOwnProperty.call(tt, Ot)) {
                if (-1 !== et.indexOf(Ot)) continue;
                Vt[Ot] = tt[Ot]
              } return Vt
          }(tt, et);
          if (Object.getOwnPropertySymbols) {
            var Dt = Object.getOwnPropertySymbols(tt);
            for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], -1 === et.indexOf(Vt) && {}.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
          }
          return qt
        }(Ot, bt);
      return Dt.attrs.style = Xt(Xt({}, Dt.attrs.style), dt), et.apply(void 0, [Vt.tag, Xt(Xt({}, Dt.attrs), jt)].concat(lt(qt)))
    }.bind(null, mt.createElement)
  },
  5134: (tt, et, Vt) => {
    var Ot = Vt(5136);

    function qt() {}

    function Dt() {}
    Dt.resetWarningCache = qt, tt.exports = function() {
      function tt(tt, et, Vt, qt, Dt, mt) {
        if (mt !== Ot) {
          var dt = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw dt.name = "Invariant Violation", dt
        }
      }

      function et() {
        return tt
      }
      tt.isRequired = tt;
      var Vt = {
        array: tt,
        bigint: tt,
        bool: tt,
        func: tt,
        number: tt,
        object: tt,
        string: tt,
        symbol: tt,
        any: tt,
        arrayOf: et,
        element: tt,
        elementType: tt,
        instanceOf: et,
        node: tt,
        objectOf: et,
        oneOf: et,
        oneOfType: et,
        shape: et,
        exact: et,
        checkPropTypes: Dt,
        resetWarningCache: qt
      };
      return Vt.PropTypes = Vt, Vt
    }
  },
  5127: (tt, et, Vt) => {
    tt.exports = Vt(5134)()
  },
  5136: tt => {
    tt.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6894: (tt, et, Vt) => {
    function Ot(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function qt(tt, et) {
      for (var Vt = 0; Vt < et.length; Vt++) {
        var Ot = et[Vt];
        Ot.enumerable = Ot.enumerable || !1, Ot.configurable = !0, "value" in Ot && (Ot.writable = !0), Object.defineProperty(tt, Qt(Ot.key), Ot)
      }
    }

    function Dt(tt, et) {
      var Vt = "undefined" != typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
      if (!Vt) {
        if (Array.isArray(tt) || (Vt = Et(tt)) || et && tt && "number" == typeof tt.length) {
          Vt && (tt = Vt);
          var Ot = 0,
            qt = function() {};
          return {
            s: qt,
            n: function() {
              return Ot >= tt.length ? {
                done: !0
              } : {
                done: !1,
                value: tt[Ot++]
              }
            },
            e: function(tt) {
              throw tt
            },
            f: qt
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Dt, mt = !0,
        dt = !1;
      return {
        s: function() {
          Vt = Vt.call(tt)
        },
        n: function() {
          var tt = Vt.next();
          return mt = tt.done, tt
        },
        e: function(tt) {
          dt = !0, Dt = tt
        },
        f: function() {
          try {
            mt || null == Vt.return || Vt.return()
          } finally {
            if (dt) throw Dt
          }
        }
      }
    }

    function mt(tt, et, Vt) {
      return (et = Qt(et)) in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function dt(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function jt(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? dt(Object(Vt), !0).forEach((function(et) {
          mt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : dt(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function Ht(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        var Vt = null == tt ? null : "undefined" != typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
        if (null != Vt) {
          var Ot, qt, Dt, mt, dt = [],
            jt = !0,
            Ht = !1;
          try {
            if (Dt = (Vt = Vt.call(tt)).next, 0 === et) {
              if (Object(Vt) !== Vt) return;
              jt = !1
            } else
              for (; !(jt = (Ot = Dt.call(Vt)).done) && (dt.push(Ot.value), dt.length !== et); jt = !0);
          } catch (tt) {
            Ht = !0, qt = tt
          } finally {
            try {
              if (!jt && null != Vt.return && (mt = Vt.return(), Object(mt) !== mt)) return
            } finally {
              if (Ht) throw qt
            }
          }
          return dt
        }
      }(tt, et) || Et(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Xt(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return Ot(tt)
      }(tt) || function(tt) {
        if ("undefined" != typeof Symbol && null != tt[Symbol.iterator] || null != tt["@@iterator"]) return Array.from(tt)
      }(tt) || Et(tt) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Qt(tt) {
      var et = function(tt, et) {
        if ("object" != typeof tt || !tt) return tt;
        var Vt = tt[Symbol.toPrimitive];
        if (void 0 !== Vt) {
          var Ot = Vt.call(tt, et || "default");
          if ("object" != typeof Ot) return Ot;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === et ? String : Number)(tt)
      }(tt, "string");
      return "symbol" == typeof et ? et : et + ""
    }

    function lt(tt) {
      return lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(tt) {
        return typeof tt
      } : function(tt) {
        return tt && "function" == typeof Symbol && tt.constructor === Symbol && tt !== Symbol.prototype ? "symbol" : typeof tt
      }, lt(tt)
    }

    function Et(tt, et) {
      if (tt) {
        if ("string" == typeof tt) return Ot(tt, et);
        var Vt = {}.toString.call(tt).slice(8, -1);
        return "Object" === Vt && tt.constructor && (Vt = tt.constructor.name), "Map" === Vt || "Set" === Vt ? Array.from(tt) : "Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt) ? Ot(tt, et) : void 0
      }
    }
    Vt.r(et), Vt.d(et, {
      api: () => gV,
      config: () => Oq,
      counter: () => lq,
      dom: () => Dq,
      findIconDefinition: () => dq,
      icon: () => Hq,
      layer: () => Xq,
      library: () => qq,
      noAuto: () => Vq,
      parse: () => mq,
      text: () => Qq,
      toHtml: () => jq
    });
    var ft = function() {},
      wt = {},
      yt = {},
      Nt = null,
      Mt = {
        mark: ft,
        measure: ft
      };
    try {
      "undefined" !== typeof window && (wt = window), "undefined" !== typeof document && (yt = document), "undefined" !== typeof MutationObserver && (Nt = MutationObserver), "undefined" !== typeof performance && (Mt = performance)
    } catch (it) {}
    var bt, Jt, Ct = (wt.navigator || {}).userAgent,
      ut = void 0 === Ct ? "" : Ct,
      Kt = wt,
      ht = yt,
      vt = Nt,
      Wt = Mt,
      St = (Kt.document, !!ht.documentElement && !!ht.head && "function" === typeof ht.addEventListener && "function" === typeof ht.createElement),
      ct = ~ut.indexOf("MSIE") || ~ut.indexOf("Trident/"),
      Rt = {
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
      It = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      Pt = "classic",
      Zt = "duotone",
      Lt = "sharp",
      Ft = "sharp-duotone",
      kt = "chisel",
      Gt = "etch",
      zt = "graphite",
      ot = "jelly",
      rt = "jelly-duo",
      Ut = "jelly-fill",
      At = "notdog",
      it = "notdog-duo",
      Yt = "slab",
      Bt = "slab-press",
      pt = "thumbprint",
      xt = "utility",
      Tt = "utility-duo",
      gt = "utility-fill",
      st = "whiteboard",
      nt = [Pt, Zt, Lt, Ft, kt, Gt, zt, ot, rt, Ut, At, it, Yt, Bt, pt, xt, Tt, gt, st],
      te = (mt(mt(mt(mt(mt(mt(mt(mt(mt(mt(bt = {}, Pt, "Classic"), Zt, "Duotone"), Lt, "Sharp"), Ft, "Sharp Duotone"), kt, "Chisel"), Gt, "Etch"), zt, "Graphite"), ot, "Jelly"), rt, "Jelly Duo"), Ut, "Jelly Fill"), mt(mt(mt(mt(mt(mt(mt(mt(mt(bt, At, "Notdog"), it, "Notdog Duo"), Yt, "Slab"), Bt, "Slab Press"), pt, "Thumbprint"), xt, "Utility"), Tt, "Utility Duo"), gt, "Utility Fill"), st, "Whiteboard"), new Map([
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
      ee = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      Ve = {
        fak: "kit",
        "fa-kit": "kit"
      },
      Oe = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      qe = (mt(mt({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      De = {
        "kit-duotone": "fakd"
      },
      me = "duotone-group",
      de = "swap-opacity",
      je = "primary",
      He = "secondary",
      Xe = (mt(mt(mt(mt(mt(mt(mt(mt(mt(mt(Jt = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), mt(mt(mt(mt(mt(mt(mt(mt(mt(Jt, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), mt(mt({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      Qe = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      le = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Ee = le.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      fe = [].concat(Xt(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", me, de, je, He]).concat(le.map((function(tt) {
        return "".concat(tt, "x")
      }))).concat(Ee.map((function(tt) {
        return "w-".concat(tt)
      }))),
      we = "___FONT_AWESOME___",
      ye = "svg-inline--fa",
      Ne = "data-fa-i2svg",
      ae = "data-fa-pseudo-element",
      Me = "data-prefix",
      be = "data-icon",
      Je = "fontawesome-i2svg",
      Ce = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      ue = ["::before", "::after", ":before", ":after"],
      Ke = function() {
        try {
          return !0
        } catch (tt) {
          return !1
        }
      }();

    function he(tt) {
      return new Proxy(tt, {
        get: function(tt, et) {
          return et in tt ? tt[et] : tt[Pt]
        }
      })
    }
    var ve = jt({}, Rt);
    ve[Pt] = jt(jt(jt(jt({}, {
      "fa-duotone": "duotone"
    }), Rt[Pt]), Ve), Oe);
    var We = he(ve),
      Se = jt({}, {
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
    Se[Pt] = jt(jt(jt(jt({}, {
      duotone: "fad"
    }), Se[Pt]), qe), De);
    var ce = he(Se),
      Re = jt({}, Xe);
    Re[Pt] = jt(jt({}, Re[Pt]), {
      fak: "fa-kit"
    });
    var Ie = he(Re),
      Pe = jt({}, {
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
    Pe[Pt] = jt(jt({}, Pe[Pt]), {
      "fa-kit": "fak"
    });
    he(Pe);
    var Ze = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      Le = "fa-layers-text",
      Fe = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      ke = (he(jt({}, {
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
      Ge = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      ze = [].concat(Xt(["kit"]), Xt(fe)),
      oe = Kt.FontAwesomeConfig || {};
    if (ht && "function" === typeof ht.querySelector) {
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
      ].forEach((function(tt) {
        var et = Ht(tt, 2),
          Vt = et[0],
          Ot = et[1],
          qt = function(tt) {
            return "" === tt || "false" !== tt && ("true" === tt || tt)
          }(function(tt) {
            var et = ht.querySelector("script[" + tt + "]");
            if (et) return et.getAttribute(tt)
          }(Vt));
        void 0 !== qt && null !== qt && (oe[Ot] = qt)
      }))
    }
    var re = {
      styleDefault: "solid",
      familyDefault: Pt,
      cssPrefix: "fa",
      replacementClass: ye,
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
    oe.familyPrefix && (oe.cssPrefix = oe.familyPrefix);
    var Ue = jt(jt({}, re), oe);
    Ue.autoReplaceSvg || (Ue.observeMutations = !1);
    var Ae = {};
    Object.keys(re).forEach((function(tt) {
      Object.defineProperty(Ae, tt, {
        enumerable: !0,
        set: function(et) {
          Ue[tt] = et, ie.forEach((function(tt) {
            return tt(Ae)
          }))
        },
        get: function() {
          return Ue[tt]
        }
      })
    })), Object.defineProperty(Ae, "familyPrefix", {
      enumerable: !0,
      set: function(tt) {
        Ue.cssPrefix = tt, ie.forEach((function(tt) {
          return tt(Ae)
        }))
      },
      get: function() {
        return Ue.cssPrefix
      }
    }), Kt.FontAwesomeConfig = Ae;
    var ie = [];
    var Ye = 16,
      Be = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function pe() {
      for (var tt = 12, et = ""; tt-- > 0;) et += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return et
    }

    function xe(tt) {
      for (var et = [], Vt = (tt || []).length >>> 0; Vt--;) et[Vt] = tt[Vt];
      return et
    }

    function Te(tt) {
      return tt.classList ? xe(tt.classList) : (tt.getAttribute("class") || "").split(" ").filter((function(tt) {
        return tt
      }))
    }

    function ge(tt) {
      return "".concat(tt).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function se(tt) {
      return Object.keys(tt || {}).reduce((function(et, Vt) {
        return et + "".concat(Vt, ": ").concat(tt[Vt].trim(), ";")
      }), "")
    }

    function ne(tt) {
      return tt.size !== Be.size || tt.x !== Be.x || tt.y !== Be.y || tt.rotate !== Be.rotate || tt.flipX || tt.flipY
    }

    function tV() {
      var tt = "fa",
        et = ye,
        Vt = Ae.cssPrefix,
        Ot = Ae.replacementClass,
        qt = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (Vt !== tt || Ot !== et) {
        var Dt = new RegExp("\\.".concat(tt, "\\-"), "g"),
          mt = new RegExp("\\--".concat(tt, "\\-"), "g"),
          dt = new RegExp("\\.".concat(et), "g");
        qt = qt.replace(Dt, ".".concat(Vt, "-")).replace(mt, "--".concat(Vt, "-")).replace(dt, ".".concat(Ot))
      }
      return qt
    }
    var eV = !1;

    function VV() {
      Ae.autoAddCss && !eV && (! function(tt) {
        if (tt && St) {
          var et = ht.createElement("style");
          et.setAttribute("type", "text/css"), et.innerHTML = tt;
          for (var Vt = ht.head.childNodes, Ot = null, qt = Vt.length - 1; qt > -1; qt--) {
            var Dt = Vt[qt],
              mt = (Dt.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(mt) > -1 && (Ot = Dt)
          }
          ht.head.insertBefore(et, Ot)
        }
      }(tV()), eV = !0)
    }
    var OV = {
        mixout: function() {
          return {
            dom: {
              css: tV,
              insertCss: VV
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              VV()
            },
            beforeI2svg: function() {
              VV()
            }
          }
        }
      },
      qV = Kt || {};
    qV[we] || (qV[we] = {}), qV[we].styles || (qV[we].styles = {}), qV[we].hooks || (qV[we].hooks = {}), qV[we].shims || (qV[we].shims = []);
    var DV = qV[we],
      mV = [],
      dV = function() {
        ht.removeEventListener("DOMContentLoaded", dV), jV = 1, mV.map((function(tt) {
          return tt()
        }))
      },
      jV = !1;

    function HV(tt) {
      var et = tt.tag,
        Vt = tt.attributes,
        Ot = void 0 === Vt ? {} : Vt,
        qt = tt.children,
        Dt = void 0 === qt ? [] : qt;
      return "string" === typeof tt ? ge(tt) : "<".concat(et, " ").concat(function(tt) {
        return Object.keys(tt || {}).reduce((function(et, Vt) {
          return et + "".concat(Vt, '="').concat(ge(tt[Vt]), '" ')
        }), "").trim()
      }(Ot), ">").concat(Dt.map(HV).join(""), "</").concat(et, ">")
    }

    function XV(tt, et, Vt) {
      if (tt && tt[et] && tt[et][Vt]) return {
        prefix: et,
        iconName: Vt,
        icon: tt[et][Vt]
      }
    }
    St && ((jV = (ht.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ht.readyState)) || ht.addEventListener("DOMContentLoaded", dV));
    var QV = function(tt, et, Vt, Ot) {
      var qt, Dt, mt, dt = Object.keys(tt),
        jt = dt.length,
        Ht = void 0 !== Ot ? function(tt, et) {
          return function(Vt, Ot, qt, Dt) {
            return tt.call(et, Vt, Ot, qt, Dt)
          }
        }(et, Ot) : et;
      for (void 0 === Vt ? (qt = 1, mt = tt[dt[0]]) : (qt = 0, mt = Vt); qt < jt; qt++) mt = Ht(mt, tt[Dt = dt[qt]], Dt, tt);
      return mt
    };

    function lV(tt) {
      return 1 !== Xt(tt).length ? null : tt.codePointAt(0).toString(16)
    }

    function EV(tt) {
      return Object.keys(tt).reduce((function(et, Vt) {
        var Ot = tt[Vt];
        return !!Ot.icon ? et[Ot.iconName] = Ot.icon : et[Vt] = Ot, et
      }), {})
    }

    function fV(tt, et) {
      var Vt = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        Ot = void 0 !== Vt && Vt,
        qt = EV(et);
      "function" !== typeof DV.hooks.addPack || Ot ? DV.styles[tt] = jt(jt({}, DV.styles[tt] || {}), qt) : DV.hooks.addPack(tt, EV(et)), "fas" === tt && fV("fa", et)
    }
    var wV = DV.styles,
      yV = DV.shims,
      NV = Object.keys(Ie),
      aV = NV.reduce((function(tt, et) {
        return tt[et] = Object.keys(Ie[et]), tt
      }), {}),
      MV = null,
      bV = {},
      JV = {},
      CV = {},
      uV = {},
      KV = {};

    function hV(tt, et) {
      var Vt, Ot = et.split("-"),
        qt = Ot[0],
        Dt = Ot.slice(1).join("-");
      return qt !== tt || "" === Dt || (Vt = Dt, ~ze.indexOf(Vt)) ? null : Dt
    }
    var vV, WV = function() {
      var tt = function(tt) {
        return QV(wV, (function(et, Vt, Ot) {
          return et[Ot] = QV(Vt, tt, {}), et
        }), {})
      };
      bV = tt((function(tt, et, Vt) {
        (et[3] && (tt[et[3]] = Vt), et[2]) && et[2].filter((function(tt) {
          return "number" === typeof tt
        })).forEach((function(et) {
          tt[et.toString(16)] = Vt
        }));
        return tt
      })), JV = tt((function(tt, et, Vt) {
        (tt[Vt] = Vt, et[2]) && et[2].filter((function(tt) {
          return "string" === typeof tt
        })).forEach((function(et) {
          tt[et] = Vt
        }));
        return tt
      })), KV = tt((function(tt, et, Vt) {
        var Ot = et[2];
        return tt[Vt] = Vt, Ot.forEach((function(et) {
          tt[et] = Vt
        })), tt
      }));
      var et = "far" in wV || Ae.autoFetchSvg,
        Vt = QV(yV, (function(tt, Vt) {
          var Ot = Vt[0],
            qt = Vt[1],
            Dt = Vt[2];
          return "far" !== qt || et || (qt = "fas"), "string" === typeof Ot && (tt.names[Ot] = {
            prefix: qt,
            iconName: Dt
          }), "number" === typeof Ot && (tt.unicodes[Ot.toString(16)] = {
            prefix: qt,
            iconName: Dt
          }), tt
        }), {
          names: {},
          unicodes: {}
        });
      CV = Vt.names, uV = Vt.unicodes, MV = PV(Ae.styleDefault, {
        family: Ae.familyDefault
      })
    };

    function SV(tt, et) {
      return (bV[tt] || {})[et]
    }

    function cV(tt, et) {
      return (KV[tt] || {})[et]
    }

    function RV(tt) {
      return CV[tt] || {
        prefix: null,
        iconName: null
      }
    }

    function IV() {
      return MV
    }
    vV = function(tt) {
      MV = PV(tt.styleDefault, {
        family: Ae.familyDefault
      })
    }, ie.push(vV), WV();

    function PV(tt) {
      var et = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        Vt = void 0 === et ? Pt : et,
        Ot = We[Vt][tt];
      if (Vt === Zt && !tt) return "fad";
      var qt = ce[Vt][tt] || ce[Vt][Ot],
        Dt = tt in DV.styles ? tt : null;
      return qt || Dt || null
    }

    function ZV(tt) {
      return tt.sort().filter((function(tt, et, Vt) {
        return Vt.indexOf(tt) === et
      }))
    }
    var LV = Qe.concat(ee);

    function FV(tt) {
      var et = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        Vt = void 0 !== et && et,
        Ot = null,
        qt = ZV(tt.filter((function(tt) {
          return LV.includes(tt)
        }))),
        Dt = ZV(tt.filter((function(tt) {
          return !LV.includes(tt)
        }))),
        mt = Ht(qt.filter((function(tt) {
          return Ot = tt, !It.includes(tt)
        })), 1)[0],
        dt = void 0 === mt ? null : mt,
        Xt = function(tt) {
          var et = Pt,
            Vt = NV.reduce((function(tt, et) {
              return tt[et] = "".concat(Ae.cssPrefix, "-").concat(et), tt
            }), {});
          return nt.forEach((function(Ot) {
            (tt.includes(Vt[Ot]) || tt.some((function(tt) {
              return aV[Ot].includes(tt)
            }))) && (et = Ot)
          })), et
        }(qt),
        Qt = jt(jt({}, function(tt) {
          var et = [],
            Vt = null;
          return tt.forEach((function(tt) {
            var Ot = hV(Ae.cssPrefix, tt);
            Ot ? Vt = Ot : tt && et.push(tt)
          })), {
            iconName: Vt,
            rest: et
          }
        }(Dt)), {}, {
          prefix: PV(dt, {
            family: Xt
          })
        });
      return jt(jt(jt({}, Qt), function(tt) {
        var et = tt.values,
          Vt = tt.family,
          Ot = tt.canonical,
          qt = tt.givenPrefix,
          Dt = void 0 === qt ? "" : qt,
          mt = tt.styles,
          dt = void 0 === mt ? {} : mt,
          jt = tt.config,
          Ht = void 0 === jt ? {} : jt,
          Xt = Vt === Zt,
          Qt = et.includes("fa-duotone") || et.includes("fad"),
          lt = "duotone" === Ht.familyDefault,
          Et = "fad" === Ot.prefix || "fa-duotone" === Ot.prefix;
        !Xt && (Qt || lt || Et) && (Ot.prefix = "fad");
        (et.includes("fa-brands") || et.includes("fab")) && (Ot.prefix = "fab");
        if (!Ot.prefix && kV.includes(Vt)) {
          if (Object.keys(dt).find((function(tt) {
              return GV.includes(tt)
            })) || Ht.autoFetchSvg) {
            var ft = te.get(Vt).defaultShortPrefixId;
            Ot.prefix = ft, Ot.iconName = cV(Ot.prefix, Ot.iconName) || Ot.iconName
          }
        }
        "fa" !== Ot.prefix && "fa" !== Dt || (Ot.prefix = IV() || "fas");
        return Ot
      }({
        values: tt,
        family: Xt,
        styles: wV,
        config: Ae,
        canonical: Qt,
        givenPrefix: Ot
      })), function(tt, et, Vt) {
        var Ot = Vt.prefix,
          qt = Vt.iconName;
        if (tt || !Ot || !qt) return {
          prefix: Ot,
          iconName: qt
        };
        var Dt = "fa" === et ? RV(qt) : {},
          mt = cV(Ot, qt);
        qt = Dt.iconName || mt || qt, "far" !== (Ot = Dt.prefix || Ot) || wV.far || !wV.fas || Ae.autoFetchSvg || (Ot = "fas");
        return {
          prefix: Ot,
          iconName: qt
        }
      }(Vt, Ot, Qt))
    }
    var kV = nt.filter((function(tt) {
        return tt !== Pt || tt !== Zt
      })),
      GV = Object.keys(Xe).filter((function(tt) {
        return tt !== Pt
      })).map((function(tt) {
        return Object.keys(Xe[tt])
      })).flat();
    var zV = function() {
        return function(tt, et, Vt) {
          return et && qt(tt.prototype, et), Vt && qt(tt, Vt), Object.defineProperty(tt, "prototype", {
            writable: !1
          }), tt
        }((function tt() {
          ! function(tt, et) {
            if (!(tt instanceof et)) throw new TypeError("Cannot call a class as a function")
          }(this, tt), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var tt = this, et = arguments.length, Vt = new Array(et), Ot = 0; Ot < et; Ot++) Vt[Ot] = arguments[Ot];
            var qt = Vt.reduce(this._pullDefinitions, {});
            Object.keys(qt).forEach((function(et) {
              tt.definitions[et] = jt(jt({}, tt.definitions[et] || {}), qt[et]), fV(et, qt[et]);
              var Vt = Ie[Pt][et];
              Vt && fV(Vt, qt[et]), WV()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(tt, et) {
            var Vt = et.prefix && et.iconName && et.icon ? {
              0: et
            } : et;
            return Object.keys(Vt).map((function(et) {
              var Ot = Vt[et],
                qt = Ot.prefix,
                Dt = Ot.iconName,
                mt = Ot.icon,
                dt = mt[2];
              tt[qt] || (tt[qt] = {}), dt.length > 0 && dt.forEach((function(et) {
                "string" === typeof et && (tt[qt][et] = mt)
              })), tt[qt][Dt] = mt
            })), tt
          }
        }])
      }(),
      oV = [],
      rV = {},
      UV = {},
      AV = Object.keys(UV);

    function iV(tt, et) {
      for (var Vt = arguments.length, Ot = new Array(Vt > 2 ? Vt - 2 : 0), qt = 2; qt < Vt; qt++) Ot[qt - 2] = arguments[qt];
      return (rV[tt] || []).forEach((function(tt) {
        et = tt.apply(null, [et].concat(Ot))
      })), et
    }

    function YV(tt) {
      for (var et = arguments.length, Vt = new Array(et > 1 ? et - 1 : 0), Ot = 1; Ot < et; Ot++) Vt[Ot - 1] = arguments[Ot];
      (rV[tt] || []).forEach((function(tt) {
        tt.apply(null, Vt)
      }))
    }

    function BV() {
      var tt = arguments[0],
        et = Array.prototype.slice.call(arguments, 1);
      return UV[tt] ? UV[tt].apply(null, et) : void 0
    }

    function pV(tt) {
      "fa" === tt.prefix && (tt.prefix = "fas");
      var et = tt.iconName,
        Vt = tt.prefix || IV();
      if (et) return et = cV(Vt, et) || et, XV(xV.definitions, Vt, et) || XV(DV.styles, Vt, et)
    }
    var xV = new zV,
      TV = {
        i2svg: function() {
          var tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return St ? (YV("beforeI2svg", tt), BV("pseudoElements2svg", tt), BV("i2svg", tt)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var tt, et = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Vt = et.autoReplaceSvgRoot;
          !1 === Ae.autoReplaceSvg && (Ae.autoReplaceSvg = !0), Ae.observeMutations = !0, tt = function() {
            sV({
              autoReplaceSvgRoot: Vt
            }), YV("watch", et)
          }, St && (jV ? setTimeout(tt, 0) : mV.push(tt))
        }
      },
      gV = {
        noAuto: function() {
          Ae.autoReplaceSvg = !1, Ae.observeMutations = !1, YV("noAuto")
        },
        config: Ae,
        dom: TV,
        parse: {
          icon: function(tt) {
            if (null === tt) return null;
            if ("object" === lt(tt) && tt.prefix && tt.iconName) return {
              prefix: tt.prefix,
              iconName: cV(tt.prefix, tt.iconName) || tt.iconName
            };
            if (Array.isArray(tt) && 2 === tt.length) {
              var et = 0 === tt[1].indexOf("fa-") ? tt[1].slice(3) : tt[1],
                Vt = PV(tt[0]);
              return {
                prefix: Vt,
                iconName: cV(Vt, et) || et
              }
            }
            if ("string" === typeof tt && (tt.indexOf("".concat(Ae.cssPrefix, "-")) > -1 || tt.match(Ze))) {
              var Ot = FV(tt.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: Ot.prefix || IV(),
                iconName: cV(Ot.prefix, Ot.iconName) || Ot.iconName
              }
            }
            if ("string" === typeof tt) {
              var qt = IV();
              return {
                prefix: qt,
                iconName: cV(qt, tt) || tt
              }
            }
          }
        },
        library: xV,
        findIconDefinition: pV,
        toHtml: HV
      },
      sV = function() {
        var tt = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          et = void 0 === tt ? ht : tt;
        (Object.keys(DV.styles).length > 0 || Ae.autoFetchSvg) && St && Ae.autoReplaceSvg && gV.dom.i2svg({
          node: et
        })
      };

    function nV(tt, et) {
      return Object.defineProperty(tt, "abstract", {
        get: et
      }), Object.defineProperty(tt, "html", {
        get: function() {
          return tt.abstract.map((function(tt) {
            return HV(tt)
          }))
        }
      }), Object.defineProperty(tt, "node", {
        get: function() {
          if (St) {
            var et = ht.createElement("div");
            return et.innerHTML = tt.html, et.children
          }
        }
      }), tt
    }

    function tO(tt) {
      var et = tt.icons,
        Vt = et.main,
        Ot = et.mask,
        qt = tt.prefix,
        Dt = tt.iconName,
        mt = tt.transform,
        dt = tt.symbol,
        Ht = tt.maskId,
        Xt = tt.extra,
        Qt = tt.watchable,
        lt = void 0 !== Qt && Qt,
        Et = Ot.found ? Ot : Vt,
        ft = Et.width,
        wt = Et.height,
        yt = [Ae.replacementClass, Dt ? "".concat(Ae.cssPrefix, "-").concat(Dt) : ""].filter((function(tt) {
          return -1 === Xt.classes.indexOf(tt)
        })).filter((function(tt) {
          return "" !== tt || !!tt
        })).concat(Xt.classes).join(" "),
        Nt = {
          children: [],
          attributes: jt(jt({}, Xt.attributes), {}, {
            "data-prefix": qt,
            "data-icon": Dt,
            class: yt,
            role: Xt.attributes.role || "img",
            viewBox: "0 0 ".concat(ft, " ").concat(wt)
          })
        };
      (function(tt) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(et) {
          return et in tt
        }))
      })(Xt.attributes) || Xt.attributes["aria-hidden"] || (Nt.attributes["aria-hidden"] = "true"), lt && (Nt.attributes[Ne] = "");
      var Mt = jt(jt({}, Nt), {}, {
          prefix: qt,
          iconName: Dt,
          main: Vt,
          mask: Ot,
          maskId: Ht,
          transform: mt,
          symbol: dt,
          styles: jt({}, Xt.styles)
        }),
        bt = Ot.found && Vt.found ? BV("generateAbstractMask", Mt) || {
          children: [],
          attributes: {}
        } : BV("generateAbstractIcon", Mt) || {
          children: [],
          attributes: {}
        },
        Jt = bt.children,
        Ct = bt.attributes;
      return Mt.children = Jt, Mt.attributes = Ct, dt ? function(tt) {
        var et = tt.prefix,
          Vt = tt.iconName,
          Ot = tt.children,
          qt = tt.attributes,
          Dt = tt.symbol,
          mt = !0 === Dt ? "".concat(et, "-").concat(Ae.cssPrefix, "-").concat(Vt) : Dt;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: jt(jt({}, qt), {}, {
              id: mt
            }),
            children: Ot
          }]
        }]
      }(Mt) : function(tt) {
        var et = tt.children,
          Vt = tt.main,
          Ot = tt.mask,
          qt = tt.attributes,
          Dt = tt.styles,
          mt = tt.transform;
        if (ne(mt) && Vt.found && !Ot.found) {
          var dt = {
            x: Vt.width / Vt.height / 2,
            y: .5
          };
          qt.style = se(jt(jt({}, Dt), {}, {
            "transform-origin": "".concat(dt.x + mt.x / 16, "em ").concat(dt.y + mt.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: qt,
          children: et
        }]
      }(Mt)
    }

    function eO(tt) {
      var et = tt.content,
        Vt = tt.width,
        Ot = tt.height,
        qt = tt.transform,
        Dt = tt.extra,
        mt = tt.watchable,
        dt = void 0 !== mt && mt,
        Ht = jt(jt({}, Dt.attributes), {}, {
          class: Dt.classes.join(" ")
        });
      dt && (Ht[Ne] = "");
      var Xt = jt({}, Dt.styles);
      ne(qt) && (Xt.transform = function(tt) {
        var et = tt.transform,
          Vt = tt.width,
          Ot = void 0 === Vt ? 16 : Vt,
          qt = tt.height,
          Dt = void 0 === qt ? 16 : qt,
          mt = tt.startCentered,
          dt = void 0 !== mt && mt,
          jt = "";
        return jt += dt && ct ? "translate(".concat(et.x / Ye - Ot / 2, "em, ").concat(et.y / Ye - Dt / 2, "em) ") : dt ? "translate(calc(-50% + ".concat(et.x / Ye, "em), calc(-50% + ").concat(et.y / Ye, "em)) ") : "translate(".concat(et.x / Ye, "em, ").concat(et.y / Ye, "em) "), jt += "scale(".concat(et.size / Ye * (et.flipX ? -1 : 1), ", ").concat(et.size / Ye * (et.flipY ? -1 : 1), ") "), jt + "rotate(".concat(et.rotate, "deg) ")
      }({
        transform: qt,
        startCentered: !0,
        width: Vt,
        height: Ot
      }), Xt["-webkit-transform"] = Xt.transform);
      var Qt = se(Xt);
      Qt.length > 0 && (Ht.style = Qt);
      var lt = [];
      return lt.push({
        tag: "span",
        attributes: Ht,
        children: [et]
      }), lt
    }
    var VO = DV.styles;

    function OO(tt) {
      var et = tt[0],
        Vt = tt[1],
        Ot = Ht(tt.slice(4), 1)[0];
      return {
        found: !0,
        width: et,
        height: Vt,
        icon: Array.isArray(Ot) ? {
          tag: "g",
          attributes: {
            class: "".concat(Ae.cssPrefix, "-").concat(Ge.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(Ae.cssPrefix, "-").concat(Ge.SECONDARY),
              fill: "currentColor",
              d: Ot[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(Ae.cssPrefix, "-").concat(Ge.PRIMARY),
              fill: "currentColor",
              d: Ot[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: Ot
          }
        }
      }
    }
    var qO = {
      found: !1,
      width: 512,
      height: 512
    };

    function DO(tt, et) {
      var Vt = et;
      return "fa" === et && null !== Ae.styleDefault && (et = IV()), new Promise((function(Ot, qt) {
        if ("fa" === Vt) {
          var Dt = RV(tt) || {};
          tt = Dt.iconName || tt, et = Dt.prefix || et
        }
        if (tt && et && VO[et] && VO[et][tt]) return Ot(OO(VO[et][tt]));
        ! function(tt, et) {
          Ke || Ae.showMissingIcons || !tt || console.error('Icon with name "'.concat(tt, '" and prefix "').concat(et, '" is missing.'))
        }(tt, et), Ot(jt(jt({}, qO), {}, {
          icon: Ae.showMissingIcons && tt && BV("missingIconAbstract") || {}
        }))
      }))
    }
    var mO = function() {},
      dO = Ae.measurePerformance && Wt && Wt.mark && Wt.measure ? Wt : {
        mark: mO,
        measure: mO
      },
      jO = 'FA "7.2.0"',
      HO = function(tt) {
        dO.mark("".concat(jO, " ").concat(tt, " ends")), dO.measure("".concat(jO, " ").concat(tt), "".concat(jO, " ").concat(tt, " begins"), "".concat(jO, " ").concat(tt, " ends"))
      },
      XO = function(tt) {
        return dO.mark("".concat(jO, " ").concat(tt, " begins")),
          function() {
            return HO(tt)
          }
      },
      QO = function() {};

    function lO(tt) {
      return "string" === typeof(tt.getAttribute ? tt.getAttribute(Ne) : null)
    }

    function EO(tt) {
      return ht.createElementNS("http://www.w3.org/2000/svg", tt)
    }

    function fO(tt) {
      return ht.createElement(tt)
    }

    function wO(tt) {
      var et = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        Vt = void 0 === et ? "svg" === tt.tag ? EO : fO : et;
      if ("string" === typeof tt) return ht.createTextNode(tt);
      var Ot = Vt(tt.tag);
      return Object.keys(tt.attributes || []).forEach((function(et) {
        Ot.setAttribute(et, tt.attributes[et])
      })), (tt.children || []).forEach((function(tt) {
        Ot.appendChild(wO(tt, {
          ceFn: Vt
        }))
      })), Ot
    }
    var yO = {
      replace: function(tt) {
        var et = tt[0];
        if (et.parentNode)
          if (tt[1].forEach((function(tt) {
              et.parentNode.insertBefore(wO(tt), et)
            })), null === et.getAttribute(Ne) && Ae.keepOriginalSource) {
            var Vt = ht.createComment(function(tt) {
              var et = " ".concat(tt.outerHTML, " ");
              return "".concat(et, "Font Awesome fontawesome.com ")
            }(et));
            et.parentNode.replaceChild(Vt, et)
          } else et.remove()
      },
      nest: function(tt) {
        var et = tt[0],
          Vt = tt[1];
        if (~Te(et).indexOf(Ae.replacementClass)) return yO.replace(tt);
        var Ot = new RegExp("".concat(Ae.cssPrefix, "-.*"));
        if (delete Vt[0].attributes.id, Vt[0].attributes.class) {
          var qt = Vt[0].attributes.class.split(" ").reduce((function(tt, et) {
            return et === Ae.replacementClass || et.match(Ot) ? tt.toSvg.push(et) : tt.toNode.push(et), tt
          }), {
            toNode: [],
            toSvg: []
          });
          Vt[0].attributes.class = qt.toSvg.join(" "), 0 === qt.toNode.length ? et.removeAttribute("class") : et.setAttribute("class", qt.toNode.join(" "))
        }
        var Dt = Vt.map((function(tt) {
          return HV(tt)
        })).join("\n");
        et.setAttribute(Ne, ""), et.innerHTML = Dt
      }
    };

    function NO(tt) {
      tt()
    }

    function aO(tt, et) {
      var Vt = "function" === typeof et ? et : QO;
      if (0 === tt.length) Vt();
      else {
        var Ot = NO;
        "async" === Ae.mutateApproach && (Ot = Kt.requestAnimationFrame || NO), Ot((function() {
          var et = !0 === Ae.autoReplaceSvg ? yO.replace : yO[Ae.autoReplaceSvg] || yO.replace,
            Ot = XO("mutate");
          tt.map(et), Ot(), Vt()
        }))
      }
    }
    var MO = !1;

    function bO() {
      MO = !0
    }

    function JO() {
      MO = !1
    }
    var CO = null;

    function uO(tt) {
      if (vt && Ae.observeMutations) {
        var et = tt.treeCallback,
          Vt = void 0 === et ? QO : et,
          Ot = tt.nodeCallback,
          qt = void 0 === Ot ? QO : Ot,
          Dt = tt.pseudoElementsCallback,
          mt = void 0 === Dt ? QO : Dt,
          dt = tt.observeMutationsRoot,
          jt = void 0 === dt ? ht : dt;
        CO = new vt((function(tt) {
          if (!MO) {
            var et = IV();
            xe(tt).forEach((function(tt) {
              if ("childList" === tt.type && tt.addedNodes.length > 0 && !lO(tt.addedNodes[0]) && (Ae.searchPseudoElements && mt(tt.target), Vt(tt.target)), "attributes" === tt.type && tt.target.parentNode && Ae.searchPseudoElements && mt([tt.target], !0), "attributes" === tt.type && lO(tt.target) && ~ke.indexOf(tt.attributeName))
                if ("class" === tt.attributeName && function(tt) {
                    var et = tt.getAttribute ? tt.getAttribute(Me) : null,
                      Vt = tt.getAttribute ? tt.getAttribute(be) : null;
                    return et && Vt
                  }(tt.target)) {
                  var Ot = FV(Te(tt.target)),
                    Dt = Ot.prefix,
                    dt = Ot.iconName;
                  tt.target.setAttribute(Me, Dt || et), dt && tt.target.setAttribute(be, dt)
                } else(jt = tt.target) && jt.classList && jt.classList.contains && jt.classList.contains(Ae.replacementClass) && qt(tt.target);
              var jt
            }))
          }
        })), St && CO.observe(jt, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function KO(tt) {
      var et, Vt, Ot = tt.getAttribute("data-prefix"),
        qt = tt.getAttribute("data-icon"),
        Dt = void 0 !== tt.innerText ? tt.innerText.trim() : "",
        mt = FV(Te(tt));
      return mt.prefix || (mt.prefix = IV()), Ot && qt && (mt.prefix = Ot, mt.iconName = qt), mt.iconName && mt.prefix || (mt.prefix && Dt.length > 0 && (mt.iconName = (et = mt.prefix, Vt = tt.innerText, (JV[et] || {})[Vt] || SV(mt.prefix, lV(tt.innerText)))), !mt.iconName && Ae.autoFetchSvg && tt.firstChild && tt.firstChild.nodeType === Node.TEXT_NODE && (mt.iconName = tt.firstChild.data)), mt
    }

    function hO(tt) {
      var et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        Vt = KO(tt),
        Ot = Vt.iconName,
        qt = Vt.prefix,
        Dt = Vt.rest,
        mt = function(tt) {
          return xe(tt.attributes).reduce((function(tt, et) {
            return "class" !== tt.name && "style" !== tt.name && (tt[et.name] = et.value), tt
          }), {})
        }(tt),
        dt = iV("parseNodeAttributes", {}, tt),
        Ht = et.styleParser ? function(tt) {
          var et = tt.getAttribute("style"),
            Vt = [];
          return et && (Vt = et.split(";").reduce((function(tt, et) {
            var Vt = et.split(":"),
              Ot = Vt[0],
              qt = Vt.slice(1);
            return Ot && qt.length > 0 && (tt[Ot] = qt.join(":").trim()), tt
          }), {})), Vt
        }(tt) : [];
      return jt({
        iconName: Ot,
        prefix: qt,
        transform: Be,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: Dt,
          styles: Ht,
          attributes: mt
        }
      }, dt)
    }
    var vO = DV.styles;

    function WO(tt) {
      var et = "nest" === Ae.autoReplaceSvg ? hO(tt, {
        styleParser: !1
      }) : hO(tt);
      return ~et.extra.classes.indexOf(Le) ? BV("generateLayersText", tt, et) : BV("generateSvgReplacementMutation", tt, et)
    }

    function SO(tt) {
      var et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!St) return Promise.resolve();
      var Vt = ht.documentElement.classList,
        Ot = function(tt) {
          return Vt.add("".concat(Je, "-").concat(tt))
        },
        qt = function(tt) {
          return Vt.remove("".concat(Je, "-").concat(tt))
        },
        Dt = Ae.autoFetchSvg ? [].concat(Xt(ee), Xt(Qe)) : It.concat(Object.keys(vO));
      Dt.includes("fa") || Dt.push("fa");
      var mt = [".".concat(Le, ":not([").concat(Ne, "])")].concat(Dt.map((function(tt) {
        return ".".concat(tt, ":not([").concat(Ne, "])")
      }))).join(", ");
      if (0 === mt.length) return Promise.resolve();
      var dt = [];
      try {
        dt = xe(tt.querySelectorAll(mt))
      } catch (Qt) {}
      if (!(dt.length > 0)) return Promise.resolve();
      Ot("pending"), qt("complete");
      var jt = XO("onTree"),
        Ht = dt.reduce((function(tt, et) {
          try {
            var Vt = WO(et);
            Vt && tt.push(Vt)
          } catch (Qt) {
            Ke || "MissingIcon" === Qt.name && console.error(Qt)
          }
          return tt
        }), []);
      return new Promise((function(tt, Vt) {
        Promise.all(Ht).then((function(Vt) {
          aO(Vt, (function() {
            Ot("active"), Ot("complete"), qt("pending"), "function" === typeof et && et(), jt(), tt()
          }))
        })).catch((function(tt) {
          jt(), Vt(tt)
        }))
      }))
    }

    function cO(tt) {
      var et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      WO(tt).then((function(tt) {
        tt && aO([tt], et)
      }))
    }
    var RO = function(tt) {
        var et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Vt = et.transform,
          Ot = void 0 === Vt ? Be : Vt,
          qt = et.symbol,
          Dt = void 0 !== qt && qt,
          mt = et.mask,
          dt = void 0 === mt ? null : mt,
          Ht = et.maskId,
          Xt = void 0 === Ht ? null : Ht,
          Qt = et.classes,
          lt = void 0 === Qt ? [] : Qt,
          Et = et.attributes,
          ft = void 0 === Et ? {} : Et,
          wt = et.styles,
          yt = void 0 === wt ? {} : wt;
        if (tt) {
          var Nt = tt.prefix,
            Mt = tt.iconName,
            bt = tt.icon;
          return nV(jt({
            type: "icon"
          }, tt), (function() {
            return YV("beforeDOMElementCreation", {
              iconDefinition: tt,
              params: et
            }), tO({
              icons: {
                main: OO(bt),
                mask: dt ? OO(dt.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: Nt,
              iconName: Mt,
              transform: jt(jt({}, Be), Ot),
              symbol: Dt,
              maskId: Xt,
              extra: {
                attributes: ft,
                styles: yt,
                classes: lt
              }
            })
          }))
        }
      },
      IO = {
        mixout: function() {
          return {
            icon: (tt = RO, function(et) {
              var Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Ot = (et || {}).icon ? et : pV(et || {}),
                qt = Vt.mask;
              return qt && (qt = (qt || {}).icon ? qt : pV(qt || {})), tt(Ot, jt(jt({}, Vt), {}, {
                mask: qt
              }))
            })
          };
          var tt
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(tt) {
              return tt.treeCallback = SO, tt.nodeCallback = cO, tt
            }
          }
        },
        provides: function(tt) {
          tt.i2svg = function(tt) {
            var et = tt.node,
              Vt = void 0 === et ? ht : et,
              Ot = tt.callback;
            return SO(Vt, void 0 === Ot ? function() {} : Ot)
          }, tt.generateSvgReplacementMutation = function(tt, et) {
            var Vt = et.iconName,
              Ot = et.prefix,
              qt = et.transform,
              Dt = et.symbol,
              mt = et.mask,
              dt = et.maskId,
              jt = et.extra;
            return new Promise((function(et, Xt) {
              Promise.all([DO(Vt, Ot), mt.iconName ? DO(mt.iconName, mt.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(mt) {
                var Xt = Ht(mt, 2),
                  Qt = Xt[0],
                  lt = Xt[1];
                et([tt, tO({
                  icons: {
                    main: Qt,
                    mask: lt
                  },
                  prefix: Ot,
                  iconName: Vt,
                  transform: qt,
                  symbol: Dt,
                  maskId: dt,
                  extra: jt,
                  watchable: !0
                })])
              })).catch(Xt)
            }))
          }, tt.generateAbstractIcon = function(tt) {
            var et, Vt = tt.children,
              Ot = tt.attributes,
              qt = tt.main,
              Dt = tt.transform,
              mt = se(tt.styles);
            return mt.length > 0 && (Ot.style = mt), ne(Dt) && (et = BV("generateAbstractTransformGrouping", {
              main: qt,
              transform: Dt,
              containerWidth: qt.width,
              iconWidth: qt.width
            })), Vt.push(et || qt.icon), {
              children: Vt,
              attributes: Ot
            }
          }
        }
      },
      PO = {
        mixout: function() {
          return {
            layer: function(tt) {
              var et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Vt = et.classes,
                Ot = void 0 === Vt ? [] : Vt;
              return nV({
                type: "layer"
              }, (function() {
                YV("beforeDOMElementCreation", {
                  assembler: tt,
                  params: et
                });
                var Vt = [];
                return tt((function(tt) {
                  Array.isArray(tt) ? tt.map((function(tt) {
                    Vt = Vt.concat(tt.abstract)
                  })) : Vt = Vt.concat(tt.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(Ae.cssPrefix, "-layers")].concat(Xt(Ot)).join(" ")
                  },
                  children: Vt
                }]
              }))
            }
          }
        }
      },
      ZO = {
        mixout: function() {
          return {
            counter: function(tt) {
              var et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Vt = et.title,
                Ot = void 0 === Vt ? null : Vt,
                qt = et.classes,
                Dt = void 0 === qt ? [] : qt,
                mt = et.attributes,
                dt = void 0 === mt ? {} : mt,
                Ht = et.styles,
                Qt = void 0 === Ht ? {} : Ht;
              return nV({
                type: "counter",
                content: tt
              }, (function() {
                return YV("beforeDOMElementCreation", {
                    content: tt,
                    params: et
                  }),
                  function(tt) {
                    var et = tt.content,
                      Vt = tt.extra,
                      Ot = jt(jt({}, Vt.attributes), {}, {
                        class: Vt.classes.join(" ")
                      }),
                      qt = se(Vt.styles);
                    qt.length > 0 && (Ot.style = qt);
                    var Dt = [];
                    return Dt.push({
                      tag: "span",
                      attributes: Ot,
                      children: [et]
                    }), Dt
                  }({
                    content: tt.toString(),
                    title: Ot,
                    extra: {
                      attributes: dt,
                      styles: Qt,
                      classes: ["".concat(Ae.cssPrefix, "-layers-counter")].concat(Xt(Dt))
                    }
                  })
              }))
            }
          }
        }
      },
      LO = {
        mixout: function() {
          return {
            text: function(tt) {
              var et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Vt = et.transform,
                Ot = void 0 === Vt ? Be : Vt,
                qt = et.classes,
                Dt = void 0 === qt ? [] : qt,
                mt = et.attributes,
                dt = void 0 === mt ? {} : mt,
                Ht = et.styles,
                Qt = void 0 === Ht ? {} : Ht;
              return nV({
                type: "text",
                content: tt
              }, (function() {
                return YV("beforeDOMElementCreation", {
                  content: tt,
                  params: et
                }), eO({
                  content: tt,
                  transform: jt(jt({}, Be), Ot),
                  extra: {
                    attributes: dt,
                    styles: Qt,
                    classes: ["".concat(Ae.cssPrefix, "-layers-text")].concat(Xt(Dt))
                  }
                })
              }))
            }
          }
        },
        provides: function(tt) {
          tt.generateLayersText = function(tt, et) {
            var Vt = et.transform,
              Ot = et.extra,
              qt = null,
              Dt = null;
            if (ct) {
              var mt = parseInt(getComputedStyle(tt).fontSize, 10),
                dt = tt.getBoundingClientRect();
              qt = dt.width / mt, Dt = dt.height / mt
            }
            return Promise.resolve([tt, eO({
              content: tt.innerHTML,
              width: qt,
              height: Dt,
              transform: Vt,
              extra: Ot,
              watchable: !0
            })])
          }
        }
      },
      FO = new RegExp('"', "ug"),
      kO = [1105920, 1112319],
      GO = jt(jt(jt(jt({}, {
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
      zO = Object.keys(GO).reduce((function(tt, et) {
        return tt[et.toLowerCase()] = GO[et], tt
      }), {}),
      oO = Object.keys(zO).reduce((function(tt, et) {
        var Vt = zO[et];
        return tt[et] = Vt[900] || Xt(Object.entries(Vt))[0][1], tt
      }), {});

    function rO(tt, et) {
      var Vt = "".concat("data-fa-pseudo-element-pending").concat(et.replace(":", "-"));
      return new Promise((function(Ot, qt) {
        if (null !== tt.getAttribute(Vt)) return Ot();
        var Dt = xe(tt.children).filter((function(tt) {
            return tt.getAttribute(ae) === et
          }))[0],
          mt = Kt.getComputedStyle(tt, et),
          dt = mt.getPropertyValue("font-family"),
          Ht = dt.match(Fe),
          Qt = mt.getPropertyValue("font-weight"),
          lt = mt.getPropertyValue("content");
        if (Dt && !Ht) return tt.removeChild(Dt), Ot();
        if (Ht && "none" !== lt && "" !== lt) {
          var Et = mt.getPropertyValue("content"),
            ft = function(tt, et) {
              var Vt = tt.replace(/^['"]|['"]$/g, "").toLowerCase(),
                Ot = parseInt(et),
                qt = isNaN(Ot) ? "normal" : Ot;
              return (zO[Vt] || {})[qt] || oO[Vt]
            }(dt, Qt),
            wt = function(tt) {
              return lV(Xt(tt.replace(FO, ""))[0] || "")
            }(Et),
            yt = Ht[0].startsWith("FontAwesome"),
            Nt = function(tt) {
              var et = tt.getPropertyValue("font-feature-settings").includes("ss01"),
                Vt = tt.getPropertyValue("content").replace(FO, ""),
                Ot = Vt.codePointAt(0),
                qt = Ot >= kO[0] && Ot <= kO[1],
                Dt = 2 === Vt.length && Vt[0] === Vt[1];
              return qt || Dt || et
            }(mt),
            Mt = SV(ft, wt),
            bt = Mt;
          if (yt) {
            var Jt = function(tt) {
              var et = uV[tt],
                Vt = SV("fas", tt);
              return et || (Vt ? {
                prefix: "fas",
                iconName: Vt
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(wt);
            Jt.iconName && Jt.prefix && (Mt = Jt.iconName, ft = Jt.prefix)
          }
          if (!Mt || Nt || Dt && Dt.getAttribute(Me) === ft && Dt.getAttribute(be) === bt) Ot();
          else {
            tt.setAttribute(Vt, bt), Dt && tt.removeChild(Dt);
            var Ct = {
                iconName: null,
                prefix: null,
                transform: Be,
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
              ut = Ct.extra;
            ut.attributes[ae] = et, DO(Mt, ft).then((function(qt) {
              var Dt = tO(jt(jt({}, Ct), {}, {
                  icons: {
                    main: qt,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: ft,
                  iconName: bt,
                  extra: ut,
                  watchable: !0
                })),
                mt = ht.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === et ? tt.insertBefore(mt, tt.firstChild) : tt.appendChild(mt), mt.outerHTML = Dt.map((function(tt) {
                return HV(tt)
              })).join("\n"), tt.removeAttribute(Vt), Ot()
            })).catch(qt)
          }
        } else Ot()
      }))
    }

    function UO(tt) {
      return Promise.all([rO(tt, "::before"), rO(tt, "::after")])
    }

    function AO(tt) {
      return tt.parentNode !== document.head && !~Ce.indexOf(tt.tagName.toUpperCase()) && !tt.getAttribute(ae) && (!tt.parentNode || "svg" !== tt.parentNode.tagName)
    }
    var iO = function(tt) {
        return !!tt && ue.some((function(et) {
          return tt.includes(et)
        }))
      },
      YO = function(tt) {
        if (!tt) return [];
        var et = new Set,
          Vt = tt.split(/,(?![^()]*\))/).map((function(tt) {
            return tt.trim()
          }));
        Vt = Vt.flatMap((function(tt) {
          return tt.includes("(") ? tt : tt.split(",").map((function(tt) {
            return tt.trim()
          }))
        }));
        var Ot, qt = Dt(Vt);
        try {
          for (qt.s(); !(Ot = qt.n()).done;) {
            var mt = Ot.value;
            if (iO(mt)) {
              var dt = ue.reduce((function(tt, et) {
                return tt.replace(et, "")
              }), mt);
              "" !== dt && "*" !== dt && et.add(dt)
            }
          }
        } catch (jt) {
          qt.e(jt)
        } finally {
          qt.f()
        }
        return et
      };

    function BO(tt) {
      if (St) {
        var et;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) et = tt;
        else if (Ae.searchPseudoElementsFullScan) et = tt.querySelectorAll("*");
        else {
          var Vt, Ot = new Set,
            qt = Dt(document.styleSheets);
          try {
            for (qt.s(); !(Vt = qt.n()).done;) {
              var mt = Vt.value;
              try {
                var dt, jt = Dt(mt.cssRules);
                try {
                  for (jt.s(); !(dt = jt.n()).done;) {
                    var Ht, Xt = dt.value,
                      Qt = Dt(YO(Xt.selectorText));
                    try {
                      for (Qt.s(); !(Ht = Qt.n()).done;) {
                        var lt = Ht.value;
                        Ot.add(lt)
                      }
                    } catch (ft) {
                      Qt.e(ft)
                    } finally {
                      Qt.f()
                    }
                  }
                } catch (ft) {
                  jt.e(ft)
                } finally {
                  jt.f()
                }
              } catch (wt) {
                Ae.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(mt.href, " (").concat(wt.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (ft) {
            qt.e(ft)
          } finally {
            qt.f()
          }
          if (!Ot.size) return;
          var Et = Array.from(Ot).join(", ");
          try {
            et = tt.querySelectorAll(Et)
          } catch (yt) {}
        }
        return new Promise((function(tt, Vt) {
          var Ot = xe(et).filter(AO).map(UO),
            qt = XO("searchPseudoElements");
          bO(), Promise.all(Ot).then((function() {
            qt(), JO(), tt()
          })).catch((function() {
            qt(), JO(), Vt()
          }))
        }))
      }
    }
    var pO = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(tt) {
              return tt.pseudoElementsCallback = BO, tt
            }
          }
        },
        provides: function(tt) {
          tt.pseudoElements2svg = function(tt) {
            var et = tt.node,
              Vt = void 0 === et ? ht : et;
            Ae.searchPseudoElements && BO(Vt)
          }
        }
      },
      xO = !1,
      TO = function(tt) {
        return tt.toLowerCase().split(" ").reduce((function(tt, et) {
          var Vt = et.toLowerCase().split("-"),
            Ot = Vt[0],
            qt = Vt.slice(1).join("-");
          if (Ot && "h" === qt) return tt.flipX = !0, tt;
          if (Ot && "v" === qt) return tt.flipY = !0, tt;
          if (qt = parseFloat(qt), isNaN(qt)) return tt;
          switch (Ot) {
            case "grow":
              tt.size = tt.size + qt;
              break;
            case "shrink":
              tt.size = tt.size - qt;
              break;
            case "left":
              tt.x = tt.x - qt;
              break;
            case "right":
              tt.x = tt.x + qt;
              break;
            case "up":
              tt.y = tt.y - qt;
              break;
            case "down":
              tt.y = tt.y + qt;
              break;
            case "rotate":
              tt.rotate = tt.rotate + qt
          }
          return tt
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      gO = {
        mixout: function() {
          return {
            parse: {
              transform: function(tt) {
                return TO(tt)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(tt, et) {
              var Vt = et.getAttribute("data-fa-transform");
              return Vt && (tt.transform = TO(Vt)), tt
            }
          }
        },
        provides: function(tt) {
          tt.generateAbstractTransformGrouping = function(tt) {
            var et = tt.main,
              Vt = tt.transform,
              Ot = tt.containerWidth,
              qt = tt.iconWidth,
              Dt = {
                transform: "translate(".concat(Ot / 2, " 256)")
              },
              mt = "translate(".concat(32 * Vt.x, ", ").concat(32 * Vt.y, ") "),
              dt = "scale(".concat(Vt.size / 16 * (Vt.flipX ? -1 : 1), ", ").concat(Vt.size / 16 * (Vt.flipY ? -1 : 1), ") "),
              Ht = "rotate(".concat(Vt.rotate, " 0 0)"),
              Xt = {
                outer: Dt,
                inner: {
                  transform: "".concat(mt, " ").concat(dt, " ").concat(Ht)
                },
                path: {
                  transform: "translate(".concat(qt / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: jt({}, Xt.outer),
              children: [{
                tag: "g",
                attributes: jt({}, Xt.inner),
                children: [{
                  tag: et.icon.tag,
                  children: et.icon.children,
                  attributes: jt(jt({}, et.icon.attributes), Xt.path)
                }]
              }]
            }
          }
        }
      },
      sO = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function nO(tt) {
      var et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return tt.attributes && (tt.attributes.fill || et) && (tt.attributes.fill = "black"), tt
    }
    var tq = {
        hooks: function() {
          return {
            parseNodeAttributes: function(tt, et) {
              var Vt = et.getAttribute("data-fa-mask"),
                Ot = Vt ? FV(Vt.split(" ").map((function(tt) {
                  return tt.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return Ot.prefix || (Ot.prefix = IV()), tt.mask = Ot, tt.maskId = et.getAttribute("data-fa-mask-id"), tt
            }
          }
        },
        provides: function(tt) {
          tt.generateAbstractMask = function(tt) {
            var et, Vt = tt.children,
              Ot = tt.attributes,
              qt = tt.main,
              Dt = tt.mask,
              mt = tt.maskId,
              dt = tt.transform,
              Ht = qt.width,
              Xt = qt.icon,
              Qt = Dt.width,
              lt = Dt.icon,
              Et = function(tt) {
                var et = tt.transform,
                  Vt = tt.containerWidth,
                  Ot = tt.iconWidth,
                  qt = {
                    transform: "translate(".concat(Vt / 2, " 256)")
                  },
                  Dt = "translate(".concat(32 * et.x, ", ").concat(32 * et.y, ") "),
                  mt = "scale(".concat(et.size / 16 * (et.flipX ? -1 : 1), ", ").concat(et.size / 16 * (et.flipY ? -1 : 1), ") "),
                  dt = "rotate(".concat(et.rotate, " 0 0)");
                return {
                  outer: qt,
                  inner: {
                    transform: "".concat(Dt, " ").concat(mt, " ").concat(dt)
                  },
                  path: {
                    transform: "translate(".concat(Ot / 2 * -1, " -256)")
                  }
                }
              }({
                transform: dt,
                containerWidth: Qt,
                iconWidth: Ht
              }),
              ft = {
                tag: "rect",
                attributes: jt(jt({}, sO), {}, {
                  fill: "white"
                })
              },
              wt = Xt.children ? {
                children: Xt.children.map(nO)
              } : {},
              yt = {
                tag: "g",
                attributes: jt({}, Et.inner),
                children: [nO(jt({
                  tag: Xt.tag,
                  attributes: jt(jt({}, Xt.attributes), Et.path)
                }, wt))]
              },
              Nt = {
                tag: "g",
                attributes: jt({}, Et.outer),
                children: [yt]
              },
              Mt = "mask-".concat(mt || pe()),
              bt = "clip-".concat(mt || pe()),
              Jt = {
                tag: "mask",
                attributes: jt(jt({}, sO), {}, {
                  id: Mt,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [ft, Nt]
              },
              Ct = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: bt
                  },
                  children: (et = lt, "g" === et.tag ? et.children : [et])
                }, Jt]
              };
            return Vt.push(Ct, {
              tag: "rect",
              attributes: jt({
                fill: "currentColor",
                "clip-path": "url(#".concat(bt, ")"),
                mask: "url(#".concat(Mt, ")")
              }, sO)
            }), {
              children: Vt,
              attributes: Ot
            }
          }
        }
      },
      eq = {
        provides: function(tt) {
          var et = !1;
          Kt.matchMedia && (et = Kt.matchMedia("(prefers-reduced-motion: reduce)").matches), tt.missingIconAbstract = function() {
            var tt = [],
              Vt = {
                fill: "currentColor"
              },
              Ot = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            tt.push({
              tag: "path",
              attributes: jt(jt({}, Vt), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var qt = jt(jt({}, Ot), {}, {
                attributeName: "opacity"
              }),
              Dt = {
                tag: "circle",
                attributes: jt(jt({}, Vt), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return et || Dt.children.push({
              tag: "animate",
              attributes: jt(jt({}, Ot), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: jt(jt({}, qt), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), tt.push(Dt), tt.push({
              tag: "path",
              attributes: jt(jt({}, Vt), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: et ? [] : [{
                tag: "animate",
                attributes: jt(jt({}, qt), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), et || tt.push({
              tag: "path",
              attributes: jt(jt({}, Vt), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: jt(jt({}, qt), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: tt
            }
          }
        }
      };
    ! function(tt, et) {
      var Vt = et.mixoutsTo;
      oV = tt, rV = {}, Object.keys(UV).forEach((function(tt) {
        -1 === AV.indexOf(tt) && delete UV[tt]
      })), oV.forEach((function(tt) {
        var et = tt.mixout ? tt.mixout() : {};
        if (Object.keys(et).forEach((function(tt) {
            "function" === typeof et[tt] && (Vt[tt] = et[tt]), "object" === lt(et[tt]) && Object.keys(et[tt]).forEach((function(Ot) {
              Vt[tt] || (Vt[tt] = {}), Vt[tt][Ot] = et[tt][Ot]
            }))
          })), tt.hooks) {
          var Ot = tt.hooks();
          Object.keys(Ot).forEach((function(tt) {
            rV[tt] || (rV[tt] = []), rV[tt].push(Ot[tt])
          }))
        }
        tt.provides && tt.provides(UV)
      }))
    }([OV, IO, PO, ZO, LO, pO, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              bO(), xO = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            uO(iV("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            CO && CO.disconnect()
          },
          watch: function(tt) {
            var et = tt.observeMutationsRoot;
            xO ? JO() : uO(iV("mutationObserverCallbacks", {
              observeMutationsRoot: et
            }))
          }
        }
      }
    }, gO, tq, eq, {
      hooks: function() {
        return {
          parseNodeAttributes: function(tt, et) {
            var Vt = et.getAttribute("data-fa-symbol"),
              Ot = null !== Vt && ("" === Vt || Vt);
            return tt.symbol = Ot, tt
          }
        }
      }
    }], {
      mixoutsTo: gV
    });
    var Vq = gV.noAuto,
      Oq = gV.config,
      qq = gV.library,
      Dq = gV.dom,
      mq = gV.parse,
      dq = gV.findIconDefinition,
      jq = gV.toHtml,
      Hq = gV.icon,
      Xq = gV.layer,
      Qq = gV.text,
      lq = gV.counter
  },
  6906: tt => {
    tt.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);