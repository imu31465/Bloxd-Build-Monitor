/*! For license information please see x17cru.fa-renderer.fcfbf671.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6560: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      FontAwesomeIcon: () => sd
    });
    var pd = kd(6551),
      Nd = kd(4845),
      Wd = kd.n(Nd),
      Pd = kd(56);

    function Zd(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function gd(dd, Jd, kd) {
      return (Jd = function(dd) {
        var Jd = function(dd, Jd) {
          if ("object" != typeof dd || !dd) return dd;
          var kd = dd[Symbol.toPrimitive];
          if (void 0 !== kd) {
            var pd = kd.call(dd, Jd || "default");
            if ("object" != typeof pd) return pd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Jd ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == typeof Jd ? Jd : Jd + ""
      }(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Cd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Kd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Cd(Object(kd), !0).forEach((function(Jd) {
          gd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Cd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function od(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        var kd = null == dd ? null : "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null != kd) {
          var pd, Nd, Wd, Pd, Zd = [],
            gd = !0,
            Cd = !1;
          try {
            if (Wd = (kd = kd.call(dd)).next, 0 === Jd) {
              if (Object(kd) !== kd) return;
              gd = !1
            } else
              for (; !(gd = (pd = Wd.call(kd)).done) && (Zd.push(pd.value), Zd.length !== Jd); gd = !0);
          } catch (dd) {
            Cd = !0, Nd = dd
          } finally {
            try {
              if (!gd && null != kd.return && (Pd = kd.return(), Object(Pd) !== Pd)) return
            } finally {
              if (Cd) throw Nd
            }
          }
          return Zd
        }
      }(dd, Jd) || Ld(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ld(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return Zd(dd)
      }(dd) || function(dd) {
        if ("undefined" != typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || Ld(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Qd(dd) {
      return Qd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Qd(dd)
    }

    function Ld(dd, Jd) {
      if (dd) {
        if ("string" == typeof dd) return Zd(dd, Jd);
        var kd = {}.toString.call(dd).slice(8, -1);
        return "Object" === kd && dd.constructor && (kd = dd.constructor.name), "Map" === kd || "Set" === kd ? Array.from(dd) : "Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd) ? Zd(dd, Jd) : void 0
      }
    }
    var Od;
    try {
      var ed = kd(6567);
      Od = ed.version
    } catch (Md) {
      Od = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function Rd(dd) {
      var Jd = dd.beat,
        kd = dd.fade,
        pd = dd.beatFade,
        Nd = dd.bounce,
        Wd = dd.shake,
        Pd = dd.flash,
        Zd = dd.spin,
        Cd = dd.spinPulse,
        Kd = dd.spinReverse,
        ld = dd.pulse,
        Qd = dd.fixedWidth,
        Ld = dd.inverse,
        ed = dd.border,
        Rd = dd.listItem,
        Id = dd.flip,
        Gd = dd.size,
        vd = dd.rotation,
        xd = dd.pull,
        qd = dd.swapOpacity,
        Bd = dd.rotateBy,
        sd = dd.widthAuto,
        ad = function(dd, Jd) {
          for (var kd = od(dd.split("-"), 2), pd = kd[0], Nd = kd[1], Wd = od(Jd.split("-"), 2), Pd = Wd[0], Zd = Wd[1], gd = pd.split("."), Cd = Pd.split("."), Kd = 0; Kd < Math.max(gd.length, Cd.length); Kd++) {
            var ld = gd[Kd] || "0",
              Qd = Cd[Kd] || "0",
              Ld = parseInt(ld, 10),
              Od = parseInt(Qd, 10);
            if (Ld !== Od) return Ld > Od
          }
          for (var ed = 0; ed < Math.max(gd.length, Cd.length); ed++) {
            var Rd = gd[ed] || "0",
              Id = Cd[ed] || "0";
            if (Rd !== Id && Rd.length !== Id.length) return Rd.length < Id.length
          }
          return !(Nd && !Zd)
        }(Od, "7.0.0"),
        Md = gd(gd(gd(gd(gd(gd({
          "fa-beat": Jd,
          "fa-fade": kd,
          "fa-beat-fade": pd,
          "fa-bounce": Nd,
          "fa-shake": Wd,
          "fa-flash": Pd,
          "fa-spin": Zd,
          "fa-spin-reverse": Kd,
          "fa-spin-pulse": Cd,
          "fa-pulse": ld,
          "fa-fw": Qd,
          "fa-inverse": Ld,
          "fa-border": ed,
          "fa-li": Rd,
          "fa-flip": !0 === Id,
          "fa-flip-horizontal": "horizontal" === Id || "both" === Id,
          "fa-flip-vertical": "vertical" === Id || "both" === Id
        }, "fa-".concat(Gd), "undefined" !== typeof Gd && null !== Gd), "fa-rotate-".concat(vd), "undefined" !== typeof vd && null !== vd && 0 !== vd), "fa-pull-".concat(xd), "undefined" !== typeof xd && null !== xd), "fa-swap-opacity", qd), "fa-rotate-by", ad && Bd), "fa-width-auto", ad && sd);
      return Object.keys(Md).map((function(dd) {
        return Md[dd] ? dd : null
      })).filter((function(dd) {
        return dd
      }))
    }

    function Id(dd) {
      return Jd = dd, (Jd -= 0) === Jd ? dd : (dd = dd.replace(/[\-_\s]+(.)?/g, (function(dd, Jd) {
        return Jd ? Jd.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + dd.substr(1);
      var Jd
    }
    var Gd = ["style"];
    var vd = !1;
    try {
      vd = !0
    } catch (Md) {}

    function xd(dd) {
      return dd && "object" === Qd(dd) && dd.prefix && dd.iconName && dd.icon ? dd : pd.parse.icon ? pd.parse.icon(dd) : null === dd ? null : dd && "object" === Qd(dd) && dd.prefix && dd.iconName ? dd : Array.isArray(dd) && 2 === dd.length ? {
        prefix: dd[0],
        iconName: dd[1]
      } : "string" === typeof dd ? {
        prefix: "fas",
        iconName: dd
      } : void 0
    }

    function qd(dd, Jd) {
      return Array.isArray(Jd) && Jd.length > 0 || !Array.isArray(Jd) && Jd ? gd({}, dd, Jd) : {}
    }
    var Bd = {
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
      sd = Pd.forwardRef((function(dd, Jd) {
        var kd = Kd(Kd({}, Bd), dd),
          Nd = kd.icon,
          Wd = kd.mask,
          Pd = kd.symbol,
          Zd = kd.className,
          gd = kd.title,
          Cd = kd.titleId,
          od = kd.maskId,
          Qd = xd(Nd),
          Ld = qd("classes", [].concat(ld(Rd(kd)), ld((Zd || "").split(" ")))),
          Od = qd("transform", "string" === typeof kd.transform ? pd.parse.transform(kd.transform) : kd.transform),
          ed = qd("mask", xd(Wd)),
          Id = (0, pd.icon)(Qd, Kd(Kd(Kd(Kd({}, Ld), Od), ed), {}, {
            symbol: Pd,
            title: gd,
            titleId: Cd,
            maskId: od
          }));
        if (!Id) return function() {
          var dd;
          !vd && console && "function" === typeof console.error && (dd = console).error.apply(dd, arguments)
        }("Could not find icon", Qd), null;
        var Gd = Id.abstract,
          sd = {
            ref: Jd
          };
        return Object.keys(kd).forEach((function(dd) {
          Bd.hasOwnProperty(dd) || (sd[dd] = kd[dd])
        })), ad(Gd[0], sd)
      }));
    sd.displayName = "FontAwesomeIcon", sd.propTypes = {
      beat: Wd().bool,
      border: Wd().bool,
      beatFade: Wd().bool,
      bounce: Wd().bool,
      className: Wd().string,
      fade: Wd().bool,
      flash: Wd().bool,
      mask: Wd().oneOfType([Wd().object, Wd().array, Wd().string]),
      maskId: Wd().string,
      fixedWidth: Wd().bool,
      inverse: Wd().bool,
      flip: Wd().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: Wd().oneOfType([Wd().object, Wd().array, Wd().string]),
      listItem: Wd().bool,
      pull: Wd().oneOf(["right", "left"]),
      pulse: Wd().bool,
      rotation: Wd().oneOf([0, 90, 180, 270]),
      rotateBy: Wd().bool,
      shake: Wd().bool,
      size: Wd().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: Wd().bool,
      spinPulse: Wd().bool,
      spinReverse: Wd().bool,
      symbol: Wd().oneOfType([Wd().bool, Wd().string]),
      title: Wd().string,
      titleId: Wd().string,
      transform: Wd().oneOfType([Wd().string, Wd().object]),
      swapOpacity: Wd().bool,
      widthAuto: Wd().bool
    };
    var ad = function dd(Jd, kd) {
      var pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof kd) return kd;
      var Nd = (kd.children || []).map((function(kd) {
          return dd(Jd, kd)
        })),
        Wd = Object.keys(kd.attributes || {}).reduce((function(dd, Jd) {
          var pd = kd.attributes[Jd];
          switch (Jd) {
            case "class":
              dd.attrs.className = pd, delete kd.attributes.class;
              break;
            case "style":
              dd.attrs.style = pd.split(";").map((function(dd) {
                return dd.trim()
              })).filter((function(dd) {
                return dd
              })).reduce((function(dd, Jd) {
                var kd, pd = Jd.indexOf(":"),
                  Nd = Id(Jd.slice(0, pd)),
                  Wd = Jd.slice(pd + 1).trim();
                return Nd.startsWith("webkit") ? dd[(kd = Nd, kd.charAt(0).toUpperCase() + kd.slice(1))] = Wd : dd[Nd] = Wd, dd
              }), {});
              break;
            default:
              0 === Jd.indexOf("aria-") || 0 === Jd.indexOf("data-") ? dd.attrs[Jd.toLowerCase()] = pd : dd.attrs[Id(Jd)] = pd
          }
          return dd
        }), {
          attrs: {}
        }),
        Pd = pd.style,
        Zd = void 0 === Pd ? {} : Pd,
        gd = function(dd, Jd) {
          if (null == dd) return {};
          var kd, pd, Nd = function(dd, Jd) {
            if (null == dd) return {};
            var kd = {};
            for (var pd in dd)
              if ({}.hasOwnProperty.call(dd, pd)) {
                if (-1 !== Jd.indexOf(pd)) continue;
                kd[pd] = dd[pd]
              } return kd
          }(dd, Jd);
          if (Object.getOwnPropertySymbols) {
            var Wd = Object.getOwnPropertySymbols(dd);
            for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], -1 === Jd.indexOf(kd) && {}.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
          }
          return Nd
        }(pd, Gd);
      return Wd.attrs.style = Kd(Kd({}, Wd.attrs.style), Zd), Jd.apply(void 0, [kd.tag, Kd(Kd({}, Wd.attrs), gd)].concat(ld(Nd)))
    }.bind(null, Pd.createElement)
  },
  4854: (dd, Jd, kd) => {
    var pd = kd(4856);

    function Nd() {}

    function Wd() {}
    Wd.resetWarningCache = Nd, dd.exports = function() {
      function dd(dd, Jd, kd, Nd, Wd, Pd) {
        if (Pd !== pd) {
          var Zd = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Zd.name = "Invariant Violation", Zd
        }
      }

      function Jd() {
        return dd
      }
      dd.isRequired = dd;
      var kd = {
        array: dd,
        bigint: dd,
        bool: dd,
        func: dd,
        number: dd,
        object: dd,
        string: dd,
        symbol: dd,
        any: dd,
        arrayOf: Jd,
        element: dd,
        elementType: dd,
        instanceOf: Jd,
        node: dd,
        objectOf: Jd,
        oneOf: Jd,
        oneOfType: Jd,
        shape: Jd,
        exact: Jd,
        checkPropTypes: Wd,
        resetWarningCache: Nd
      };
      return kd.PropTypes = kd, kd
    }
  },
  4845: (dd, Jd, kd) => {
    dd.exports = kd(4854)()
  },
  4856: dd => {
    dd.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6551: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function Nd(dd, Jd) {
      for (var kd = 0; kd < Jd.length; kd++) {
        var pd = Jd[kd];
        pd.enumerable = pd.enumerable || !1, pd.configurable = !0, "value" in pd && (pd.writable = !0), Object.defineProperty(dd, od(pd.key), pd)
      }
    }

    function Wd(dd, Jd) {
      var kd = "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
      if (!kd) {
        if (Array.isArray(dd) || (kd = Qd(dd)) || Jd && dd && "number" == typeof dd.length) {
          kd && (dd = kd);
          var pd = 0,
            Nd = function() {};
          return {
            s: Nd,
            n: function() {
              return pd >= dd.length ? {
                done: !0
              } : {
                done: !1,
                value: dd[pd++]
              }
            },
            e: function(dd) {
              throw dd
            },
            f: Nd
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Wd, Pd = !0,
        Zd = !1;
      return {
        s: function() {
          kd = kd.call(dd)
        },
        n: function() {
          var dd = kd.next();
          return Pd = dd.done, dd
        },
        e: function(dd) {
          Zd = !0, Wd = dd
        },
        f: function() {
          try {
            Pd || null == kd.return || kd.return()
          } finally {
            if (Zd) throw Wd
          }
        }
      }
    }

    function Pd(dd, Jd, kd) {
      return (Jd = od(Jd)) in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function Zd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function gd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Zd(Object(kd), !0).forEach((function(Jd) {
          Pd(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Zd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function Cd(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        var kd = null == dd ? null : "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null != kd) {
          var pd, Nd, Wd, Pd, Zd = [],
            gd = !0,
            Cd = !1;
          try {
            if (Wd = (kd = kd.call(dd)).next, 0 === Jd) {
              if (Object(kd) !== kd) return;
              gd = !1
            } else
              for (; !(gd = (pd = Wd.call(kd)).done) && (Zd.push(pd.value), Zd.length !== Jd); gd = !0);
          } catch (dd) {
            Cd = !0, Nd = dd
          } finally {
            try {
              if (!gd && null != kd.return && (Pd = kd.return(), Object(Pd) !== Pd)) return
            } finally {
              if (Cd) throw Nd
            }
          }
          return Zd
        }
      }(dd, Jd) || Qd(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Kd(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return pd(dd)
      }(dd) || function(dd) {
        if ("undefined" != typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || Qd(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function od(dd) {
      var Jd = function(dd, Jd) {
        if ("object" != typeof dd || !dd) return dd;
        var kd = dd[Symbol.toPrimitive];
        if (void 0 !== kd) {
          var pd = kd.call(dd, Jd || "default");
          if ("object" != typeof pd) return pd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Jd ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == typeof Jd ? Jd : Jd + ""
    }

    function ld(dd) {
      return ld = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, ld(dd)
    }

    function Qd(dd, Jd) {
      if (dd) {
        if ("string" == typeof dd) return pd(dd, Jd);
        var kd = {}.toString.call(dd).slice(8, -1);
        return "Object" === kd && dd.constructor && (kd = dd.constructor.name), "Map" === kd || "Set" === kd ? Array.from(dd) : "Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd) ? pd(dd, Jd) : void 0
      }
    }
    kd.r(Jd), kd.d(Jd, {
      api: () => wk,
      config: () => WN,
      counter: () => LN,
      dom: () => ZN,
      findIconDefinition: () => CN,
      icon: () => oN,
      layer: () => lN,
      library: () => PN,
      noAuto: () => NN,
      parse: () => gN,
      text: () => QN,
      toHtml: () => KN
    });
    var Ld = function() {},
      Od = {},
      ed = {},
      Rd = null,
      Id = {
        mark: Ld,
        measure: Ld
      };
    try {
      "undefined" !== typeof window && (Od = window), "undefined" !== typeof document && (ed = document), "undefined" !== typeof MutationObserver && (Rd = MutationObserver), "undefined" !== typeof performance && (Id = performance)
    } catch (hd) {}
    var Gd, vd, xd = (Od.navigator || {}).userAgent,
      qd = void 0 === xd ? "" : xd,
      Bd = Od,
      sd = ed,
      ad = Rd,
      Md = Id,
      Fd = (Bd.document, !!sd.documentElement && !!sd.head && "function" === typeof sd.addEventListener && "function" === typeof sd.createElement),
      Yd = ~qd.indexOf("MSIE") || ~qd.indexOf("Trident/"),
      md = {
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
      bd = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      Sd = "classic",
      jd = "duotone",
      Xd = "sharp",
      fd = "sharp-duotone",
      nd = "chisel",
      Ud = "etch",
      yd = "graphite",
      Dd = "jelly",
      Td = "jelly-duo",
      Ed = "jelly-fill",
      cd = "notdog",
      hd = "notdog-duo",
      rd = "slab",
      ud = "slab-press",
      td = "thumbprint",
      Vd = "utility",
      zd = "utility-duo",
      Hd = "utility-fill",
      wd = "whiteboard",
      Ad = [Sd, jd, Xd, fd, nd, Ud, yd, Dd, Td, Ed, cd, hd, rd, ud, td, Vd, zd, Hd, wd],
      dJ = (Pd(Pd(Pd(Pd(Pd(Pd(Pd(Pd(Pd(Pd(Gd = {}, Sd, "Classic"), jd, "Duotone"), Xd, "Sharp"), fd, "Sharp Duotone"), nd, "Chisel"), Ud, "Etch"), yd, "Graphite"), Dd, "Jelly"), Td, "Jelly Duo"), Ed, "Jelly Fill"), Pd(Pd(Pd(Pd(Pd(Pd(Pd(Pd(Pd(Gd, cd, "Notdog"), hd, "Notdog Duo"), rd, "Slab"), ud, "Slab Press"), td, "Thumbprint"), Vd, "Utility"), zd, "Utility Duo"), Hd, "Utility Fill"), wd, "Whiteboard"), new Map([
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
      JJ = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      kJ = {
        fak: "kit",
        "fa-kit": "kit"
      },
      pJ = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      NJ = (Pd(Pd({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      WJ = {
        "kit-duotone": "fakd"
      },
      PJ = "duotone-group",
      ZJ = "swap-opacity",
      gJ = "primary",
      CJ = "secondary",
      KJ = (Pd(Pd(Pd(Pd(Pd(Pd(Pd(Pd(Pd(Pd(vd = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), Pd(Pd(Pd(Pd(Pd(Pd(Pd(Pd(Pd(vd, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), Pd(Pd({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      oJ = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      lJ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      QJ = lJ.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      LJ = [].concat(Kd(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", PJ, ZJ, gJ, CJ]).concat(lJ.map((function(dd) {
        return "".concat(dd, "x")
      }))).concat(QJ.map((function(dd) {
        return "w-".concat(dd)
      }))),
      OJ = "___FONT_AWESOME___",
      eJ = "svg-inline--fa",
      RJ = "data-fa-i2svg",
      IJ = "data-fa-pseudo-element",
      GJ = "data-prefix",
      vJ = "data-icon",
      xJ = "fontawesome-i2svg",
      qJ = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      BJ = ["::before", "::after", ":before", ":after"],
      sJ = function() {
        try {
          return !0
        } catch (dd) {
          return !1
        }
      }();

    function iJ(dd) {
      return new Proxy(dd, {
        get: function(dd, Jd) {
          return Jd in dd ? dd[Jd] : dd[Sd]
        }
      })
    }
    var aJ = gd({}, md);
    aJ[Sd] = gd(gd(gd(gd({}, {
      "fa-duotone": "duotone"
    }), md[Sd]), kJ), pJ);
    var MJ = iJ(aJ),
      FJ = gd({}, {
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
    FJ[Sd] = gd(gd(gd(gd({}, {
      duotone: "fad"
    }), FJ[Sd]), NJ), WJ);
    var YJ = iJ(FJ),
      mJ = gd({}, KJ);
    mJ[Sd] = gd(gd({}, mJ[Sd]), {
      fak: "fa-kit"
    });
    var bJ = iJ(mJ),
      SJ = gd({}, {
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
    SJ[Sd] = gd(gd({}, SJ[Sd]), {
      "fa-kit": "fak"
    });
    iJ(SJ);
    var jJ = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      XJ = "fa-layers-text",
      fJ = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      nJ = (iJ(gd({}, {
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
      UJ = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      yJ = [].concat(Kd(["kit"]), Kd(LJ)),
      DJ = Bd.FontAwesomeConfig || {};
    if (sd && "function" === typeof sd.querySelector) {
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
      ].forEach((function(dd) {
        var Jd = Cd(dd, 2),
          kd = Jd[0],
          pd = Jd[1],
          Nd = function(dd) {
            return "" === dd || "false" !== dd && ("true" === dd || dd)
          }(function(dd) {
            var Jd = sd.querySelector("script[" + dd + "]");
            if (Jd) return Jd.getAttribute(dd)
          }(kd));
        void 0 !== Nd && null !== Nd && (DJ[pd] = Nd)
      }))
    }
    var TJ = {
      styleDefault: "solid",
      familyDefault: Sd,
      cssPrefix: "fa",
      replacementClass: eJ,
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
    DJ.familyPrefix && (DJ.cssPrefix = DJ.familyPrefix);
    var EJ = gd(gd({}, TJ), DJ);
    EJ.autoReplaceSvg || (EJ.observeMutations = !1);
    var cJ = {};
    Object.keys(TJ).forEach((function(dd) {
      Object.defineProperty(cJ, dd, {
        enumerable: !0,
        set: function(Jd) {
          EJ[dd] = Jd, hJ.forEach((function(dd) {
            return dd(cJ)
          }))
        },
        get: function() {
          return EJ[dd]
        }
      })
    })), Object.defineProperty(cJ, "familyPrefix", {
      enumerable: !0,
      set: function(dd) {
        EJ.cssPrefix = dd, hJ.forEach((function(dd) {
          return dd(cJ)
        }))
      },
      get: function() {
        return EJ.cssPrefix
      }
    }), Bd.FontAwesomeConfig = cJ;
    var hJ = [];
    var rJ = 16,
      uJ = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function tJ() {
      for (var dd = 12, Jd = ""; dd-- > 0;) Jd += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return Jd
    }

    function VJ(dd) {
      for (var Jd = [], kd = (dd || []).length >>> 0; kd--;) Jd[kd] = dd[kd];
      return Jd
    }

    function zJ(dd) {
      return dd.classList ? VJ(dd.classList) : (dd.getAttribute("class") || "").split(" ").filter((function(dd) {
        return dd
      }))
    }

    function HJ(dd) {
      return "".concat(dd).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function wJ(dd) {
      return Object.keys(dd || {}).reduce((function(Jd, kd) {
        return Jd + "".concat(kd, ": ").concat(dd[kd].trim(), ";")
      }), "")
    }

    function AJ(dd) {
      return dd.size !== uJ.size || dd.x !== uJ.x || dd.y !== uJ.y || dd.rotate !== uJ.rotate || dd.flipX || dd.flipY
    }

    function dk() {
      var dd = "fa",
        Jd = eJ,
        kd = cJ.cssPrefix,
        pd = cJ.replacementClass,
        Nd = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (kd !== dd || pd !== Jd) {
        var Wd = new RegExp("\\.".concat(dd, "\\-"), "g"),
          Pd = new RegExp("\\--".concat(dd, "\\-"), "g"),
          Zd = new RegExp("\\.".concat(Jd), "g");
        Nd = Nd.replace(Wd, ".".concat(kd, "-")).replace(Pd, "--".concat(kd, "-")).replace(Zd, ".".concat(pd))
      }
      return Nd
    }
    var Jk = !1;

    function kk() {
      cJ.autoAddCss && !Jk && (! function(dd) {
        if (dd && Fd) {
          var Jd = sd.createElement("style");
          Jd.setAttribute("type", "text/css"), Jd.innerHTML = dd;
          for (var kd = sd.head.childNodes, pd = null, Nd = kd.length - 1; Nd > -1; Nd--) {
            var Wd = kd[Nd],
              Pd = (Wd.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(Pd) > -1 && (pd = Wd)
          }
          sd.head.insertBefore(Jd, pd)
        }
      }(dk()), Jk = !0)
    }
    var pk = {
        mixout: function() {
          return {
            dom: {
              css: dk,
              insertCss: kk
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              kk()
            },
            beforeI2svg: function() {
              kk()
            }
          }
        }
      },
      Nk = Bd || {};
    Nk[OJ] || (Nk[OJ] = {}), Nk[OJ].styles || (Nk[OJ].styles = {}), Nk[OJ].hooks || (Nk[OJ].hooks = {}), Nk[OJ].shims || (Nk[OJ].shims = []);
    var Wk = Nk[OJ],
      Pk = [],
      Zk = function() {
        sd.removeEventListener("DOMContentLoaded", Zk), gk = 1, Pk.map((function(dd) {
          return dd()
        }))
      },
      gk = !1;

    function Ck(dd) {
      var Jd = dd.tag,
        kd = dd.attributes,
        pd = void 0 === kd ? {} : kd,
        Nd = dd.children,
        Wd = void 0 === Nd ? [] : Nd;
      return "string" === typeof dd ? HJ(dd) : "<".concat(Jd, " ").concat(function(dd) {
        return Object.keys(dd || {}).reduce((function(Jd, kd) {
          return Jd + "".concat(kd, '="').concat(HJ(dd[kd]), '" ')
        }), "").trim()
      }(pd), ">").concat(Wd.map(Ck).join(""), "</").concat(Jd, ">")
    }

    function Kk(dd, Jd, kd) {
      if (dd && dd[Jd] && dd[Jd][kd]) return {
        prefix: Jd,
        iconName: kd,
        icon: dd[Jd][kd]
      }
    }
    Fd && ((gk = (sd.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(sd.readyState)) || sd.addEventListener("DOMContentLoaded", Zk));
    var lk = function(dd, Jd, kd, pd) {
      var Nd, Wd, Pd, Zd = Object.keys(dd),
        gd = Zd.length,
        Cd = void 0 !== pd ? function(dd, Jd) {
          return function(kd, pd, Nd, Wd) {
            return dd.call(Jd, kd, pd, Nd, Wd)
          }
        }(Jd, pd) : Jd;
      for (void 0 === kd ? (Nd = 1, Pd = dd[Zd[0]]) : (Nd = 0, Pd = kd); Nd < gd; Nd++) Pd = Cd(Pd, dd[Wd = Zd[Nd]], Wd, dd);
      return Pd
    };

    function Qk(dd) {
      return 1 !== Kd(dd).length ? null : dd.codePointAt(0).toString(16)
    }

    function Lk(dd) {
      return Object.keys(dd).reduce((function(Jd, kd) {
        var pd = dd[kd];
        return !!pd.icon ? Jd[pd.iconName] = pd.icon : Jd[kd] = pd, Jd
      }), {})
    }

    function Ok(dd, Jd) {
      var kd = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        pd = void 0 !== kd && kd,
        Nd = Lk(Jd);
      "function" !== typeof Wk.hooks.addPack || pd ? Wk.styles[dd] = gd(gd({}, Wk.styles[dd] || {}), Nd) : Wk.hooks.addPack(dd, Lk(Jd)), "fas" === dd && Ok("fa", Jd)
    }
    var ek = Wk.styles,
      Rk = Wk.shims,
      Ik = Object.keys(bJ),
      Gk = Ik.reduce((function(dd, Jd) {
        return dd[Jd] = Object.keys(bJ[Jd]), dd
      }), {}),
      vk = null,
      xk = {},
      qk = {},
      Bk = {},
      sk = {},
      ik = {};

    function ak(dd, Jd) {
      var kd, pd = Jd.split("-"),
        Nd = pd[0],
        Wd = pd.slice(1).join("-");
      return Nd !== dd || "" === Wd || (kd = Wd, ~yJ.indexOf(kd)) ? null : Wd
    }
    var Mk, Fk = function() {
      var dd = function(dd) {
        return lk(ek, (function(Jd, kd, pd) {
          return Jd[pd] = lk(kd, dd, {}), Jd
        }), {})
      };
      xk = dd((function(dd, Jd, kd) {
        (Jd[3] && (dd[Jd[3]] = kd), Jd[2]) && Jd[2].filter((function(dd) {
          return "number" === typeof dd
        })).forEach((function(Jd) {
          dd[Jd.toString(16)] = kd
        }));
        return dd
      })), qk = dd((function(dd, Jd, kd) {
        (dd[kd] = kd, Jd[2]) && Jd[2].filter((function(dd) {
          return "string" === typeof dd
        })).forEach((function(Jd) {
          dd[Jd] = kd
        }));
        return dd
      })), ik = dd((function(dd, Jd, kd) {
        var pd = Jd[2];
        return dd[kd] = kd, pd.forEach((function(Jd) {
          dd[Jd] = kd
        })), dd
      }));
      var Jd = "far" in ek || cJ.autoFetchSvg,
        kd = lk(Rk, (function(dd, kd) {
          var pd = kd[0],
            Nd = kd[1],
            Wd = kd[2];
          return "far" !== Nd || Jd || (Nd = "fas"), "string" === typeof pd && (dd.names[pd] = {
            prefix: Nd,
            iconName: Wd
          }), "number" === typeof pd && (dd.unicodes[pd.toString(16)] = {
            prefix: Nd,
            iconName: Wd
          }), dd
        }), {
          names: {},
          unicodes: {}
        });
      Bk = kd.names, sk = kd.unicodes, vk = jk(cJ.styleDefault, {
        family: cJ.familyDefault
      })
    };

    function Yk(dd, Jd) {
      return (xk[dd] || {})[Jd]
    }

    function mk(dd, Jd) {
      return (ik[dd] || {})[Jd]
    }

    function bk(dd) {
      return Bk[dd] || {
        prefix: null,
        iconName: null
      }
    }

    function Sk() {
      return vk
    }
    Mk = function(dd) {
      vk = jk(dd.styleDefault, {
        family: cJ.familyDefault
      })
    }, hJ.push(Mk), Fk();

    function jk(dd) {
      var Jd = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        kd = void 0 === Jd ? Sd : Jd,
        pd = MJ[kd][dd];
      if (kd === jd && !dd) return "fad";
      var Nd = YJ[kd][dd] || YJ[kd][pd],
        Wd = dd in Wk.styles ? dd : null;
      return Nd || Wd || null
    }

    function Xk(dd) {
      return dd.sort().filter((function(dd, Jd, kd) {
        return kd.indexOf(dd) === Jd
      }))
    }
    var fk = oJ.concat(JJ);

    function nk(dd) {
      var Jd = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        kd = void 0 !== Jd && Jd,
        pd = null,
        Nd = Xk(dd.filter((function(dd) {
          return fk.includes(dd)
        }))),
        Wd = Xk(dd.filter((function(dd) {
          return !fk.includes(dd)
        }))),
        Pd = Cd(Nd.filter((function(dd) {
          return pd = dd, !bd.includes(dd)
        })), 1)[0],
        Zd = void 0 === Pd ? null : Pd,
        Kd = function(dd) {
          var Jd = Sd,
            kd = Ik.reduce((function(dd, Jd) {
              return dd[Jd] = "".concat(cJ.cssPrefix, "-").concat(Jd), dd
            }), {});
          return Ad.forEach((function(pd) {
            (dd.includes(kd[pd]) || dd.some((function(dd) {
              return Gk[pd].includes(dd)
            }))) && (Jd = pd)
          })), Jd
        }(Nd),
        od = gd(gd({}, function(dd) {
          var Jd = [],
            kd = null;
          return dd.forEach((function(dd) {
            var pd = ak(cJ.cssPrefix, dd);
            pd ? kd = pd : dd && Jd.push(dd)
          })), {
            iconName: kd,
            rest: Jd
          }
        }(Wd)), {}, {
          prefix: jk(Zd, {
            family: Kd
          })
        });
      return gd(gd(gd({}, od), function(dd) {
        var Jd = dd.values,
          kd = dd.family,
          pd = dd.canonical,
          Nd = dd.givenPrefix,
          Wd = void 0 === Nd ? "" : Nd,
          Pd = dd.styles,
          Zd = void 0 === Pd ? {} : Pd,
          gd = dd.config,
          Cd = void 0 === gd ? {} : gd,
          Kd = kd === jd,
          od = Jd.includes("fa-duotone") || Jd.includes("fad"),
          ld = "duotone" === Cd.familyDefault,
          Qd = "fad" === pd.prefix || "fa-duotone" === pd.prefix;
        !Kd && (od || ld || Qd) && (pd.prefix = "fad");
        (Jd.includes("fa-brands") || Jd.includes("fab")) && (pd.prefix = "fab");
        if (!pd.prefix && Uk.includes(kd)) {
          if (Object.keys(Zd).find((function(dd) {
              return yk.includes(dd)
            })) || Cd.autoFetchSvg) {
            var Ld = dJ.get(kd).defaultShortPrefixId;
            pd.prefix = Ld, pd.iconName = mk(pd.prefix, pd.iconName) || pd.iconName
          }
        }
        "fa" !== pd.prefix && "fa" !== Wd || (pd.prefix = Sk() || "fas");
        return pd
      }({
        values: dd,
        family: Kd,
        styles: ek,
        config: cJ,
        canonical: od,
        givenPrefix: pd
      })), function(dd, Jd, kd) {
        var pd = kd.prefix,
          Nd = kd.iconName;
        if (dd || !pd || !Nd) return {
          prefix: pd,
          iconName: Nd
        };
        var Wd = "fa" === Jd ? bk(Nd) : {},
          Pd = mk(pd, Nd);
        Nd = Wd.iconName || Pd || Nd, "far" !== (pd = Wd.prefix || pd) || ek.far || !ek.fas || cJ.autoFetchSvg || (pd = "fas");
        return {
          prefix: pd,
          iconName: Nd
        }
      }(kd, pd, od))
    }
    var Uk = Ad.filter((function(dd) {
        return dd !== Sd || dd !== jd
      })),
      yk = Object.keys(KJ).filter((function(dd) {
        return dd !== Sd
      })).map((function(dd) {
        return Object.keys(KJ[dd])
      })).flat();
    var Dk = function() {
        return function(dd, Jd, kd) {
          return Jd && Nd(dd.prototype, Jd), kd && Nd(dd, kd), Object.defineProperty(dd, "prototype", {
            writable: !1
          }), dd
        }((function dd() {
          ! function(dd, Jd) {
            if (!(dd instanceof Jd)) throw new TypeError("Cannot call a class as a function")
          }(this, dd), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var dd = this, Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
            var Nd = kd.reduce(this._pullDefinitions, {});
            Object.keys(Nd).forEach((function(Jd) {
              dd.definitions[Jd] = gd(gd({}, dd.definitions[Jd] || {}), Nd[Jd]), Ok(Jd, Nd[Jd]);
              var kd = bJ[Sd][Jd];
              kd && Ok(kd, Nd[Jd]), Fk()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(dd, Jd) {
            var kd = Jd.prefix && Jd.iconName && Jd.icon ? {
              0: Jd
            } : Jd;
            return Object.keys(kd).map((function(Jd) {
              var pd = kd[Jd],
                Nd = pd.prefix,
                Wd = pd.iconName,
                Pd = pd.icon,
                Zd = Pd[2];
              dd[Nd] || (dd[Nd] = {}), Zd.length > 0 && Zd.forEach((function(Jd) {
                "string" === typeof Jd && (dd[Nd][Jd] = Pd)
              })), dd[Nd][Wd] = Pd
            })), dd
          }
        }])
      }(),
      Tk = [],
      Ek = {},
      ck = {},
      hk = Object.keys(ck);

    function rk(dd, Jd) {
      for (var kd = arguments.length, pd = new Array(kd > 2 ? kd - 2 : 0), Nd = 2; Nd < kd; Nd++) pd[Nd - 2] = arguments[Nd];
      return (Ek[dd] || []).forEach((function(dd) {
        Jd = dd.apply(null, [Jd].concat(pd))
      })), Jd
    }

    function uk(dd) {
      for (var Jd = arguments.length, kd = new Array(Jd > 1 ? Jd - 1 : 0), pd = 1; pd < Jd; pd++) kd[pd - 1] = arguments[pd];
      (Ek[dd] || []).forEach((function(dd) {
        dd.apply(null, kd)
      }))
    }

    function tk() {
      var dd = arguments[0],
        Jd = Array.prototype.slice.call(arguments, 1);
      return ck[dd] ? ck[dd].apply(null, Jd) : void 0
    }

    function Vk(dd) {
      "fa" === dd.prefix && (dd.prefix = "fas");
      var Jd = dd.iconName,
        kd = dd.prefix || Sk();
      if (Jd) return Jd = mk(kd, Jd) || Jd, Kk(zk.definitions, kd, Jd) || Kk(Wk.styles, kd, Jd)
    }
    var zk = new Dk,
      Hk = {
        i2svg: function() {
          var dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Fd ? (uk("beforeI2svg", dd), tk("pseudoElements2svg", dd), tk("i2svg", dd)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var dd, Jd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            kd = Jd.autoReplaceSvgRoot;
          !1 === cJ.autoReplaceSvg && (cJ.autoReplaceSvg = !0), cJ.observeMutations = !0, dd = function() {
            Ak({
              autoReplaceSvgRoot: kd
            }), uk("watch", Jd)
          }, Fd && (gk ? setTimeout(dd, 0) : Pk.push(dd))
        }
      },
      wk = {
        noAuto: function() {
          cJ.autoReplaceSvg = !1, cJ.observeMutations = !1, uk("noAuto")
        },
        config: cJ,
        dom: Hk,
        parse: {
          icon: function(dd) {
            if (null === dd) return null;
            if ("object" === ld(dd) && dd.prefix && dd.iconName) return {
              prefix: dd.prefix,
              iconName: mk(dd.prefix, dd.iconName) || dd.iconName
            };
            if (Array.isArray(dd) && 2 === dd.length) {
              var Jd = 0 === dd[1].indexOf("fa-") ? dd[1].slice(3) : dd[1],
                kd = jk(dd[0]);
              return {
                prefix: kd,
                iconName: mk(kd, Jd) || Jd
              }
            }
            if ("string" === typeof dd && (dd.indexOf("".concat(cJ.cssPrefix, "-")) > -1 || dd.match(jJ))) {
              var pd = nk(dd.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: pd.prefix || Sk(),
                iconName: mk(pd.prefix, pd.iconName) || pd.iconName
              }
            }
            if ("string" === typeof dd) {
              var Nd = Sk();
              return {
                prefix: Nd,
                iconName: mk(Nd, dd) || dd
              }
            }
          }
        },
        library: zk,
        findIconDefinition: Vk,
        toHtml: Ck
      },
      Ak = function() {
        var dd = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          Jd = void 0 === dd ? sd : dd;
        (Object.keys(Wk.styles).length > 0 || cJ.autoFetchSvg) && Fd && cJ.autoReplaceSvg && wk.dom.i2svg({
          node: Jd
        })
      };

    function dp(dd, Jd) {
      return Object.defineProperty(dd, "abstract", {
        get: Jd
      }), Object.defineProperty(dd, "html", {
        get: function() {
          return dd.abstract.map((function(dd) {
            return Ck(dd)
          }))
        }
      }), Object.defineProperty(dd, "node", {
        get: function() {
          if (Fd) {
            var Jd = sd.createElement("div");
            return Jd.innerHTML = dd.html, Jd.children
          }
        }
      }), dd
    }

    function Jp(dd) {
      var Jd = dd.icons,
        kd = Jd.main,
        pd = Jd.mask,
        Nd = dd.prefix,
        Wd = dd.iconName,
        Pd = dd.transform,
        Zd = dd.symbol,
        Cd = dd.maskId,
        Kd = dd.extra,
        od = dd.watchable,
        ld = void 0 !== od && od,
        Qd = pd.found ? pd : kd,
        Ld = Qd.width,
        Od = Qd.height,
        ed = [cJ.replacementClass, Wd ? "".concat(cJ.cssPrefix, "-").concat(Wd) : ""].filter((function(dd) {
          return -1 === Kd.classes.indexOf(dd)
        })).filter((function(dd) {
          return "" !== dd || !!dd
        })).concat(Kd.classes).join(" "),
        Rd = {
          children: [],
          attributes: gd(gd({}, Kd.attributes), {}, {
            "data-prefix": Nd,
            "data-icon": Wd,
            class: ed,
            role: Kd.attributes.role || "img",
            viewBox: "0 0 ".concat(Ld, " ").concat(Od)
          })
        };
      (function(dd) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(Jd) {
          return Jd in dd
        }))
      })(Kd.attributes) || Kd.attributes["aria-hidden"] || (Rd.attributes["aria-hidden"] = "true"), ld && (Rd.attributes[RJ] = "");
      var Id = gd(gd({}, Rd), {}, {
          prefix: Nd,
          iconName: Wd,
          main: kd,
          mask: pd,
          maskId: Cd,
          transform: Pd,
          symbol: Zd,
          styles: gd({}, Kd.styles)
        }),
        Gd = pd.found && kd.found ? tk("generateAbstractMask", Id) || {
          children: [],
          attributes: {}
        } : tk("generateAbstractIcon", Id) || {
          children: [],
          attributes: {}
        },
        vd = Gd.children,
        xd = Gd.attributes;
      return Id.children = vd, Id.attributes = xd, Zd ? function(dd) {
        var Jd = dd.prefix,
          kd = dd.iconName,
          pd = dd.children,
          Nd = dd.attributes,
          Wd = dd.symbol,
          Pd = !0 === Wd ? "".concat(Jd, "-").concat(cJ.cssPrefix, "-").concat(kd) : Wd;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: gd(gd({}, Nd), {}, {
              id: Pd
            }),
            children: pd
          }]
        }]
      }(Id) : function(dd) {
        var Jd = dd.children,
          kd = dd.main,
          pd = dd.mask,
          Nd = dd.attributes,
          Wd = dd.styles,
          Pd = dd.transform;
        if (AJ(Pd) && kd.found && !pd.found) {
          var Zd = {
            x: kd.width / kd.height / 2,
            y: .5
          };
          Nd.style = wJ(gd(gd({}, Wd), {}, {
            "transform-origin": "".concat(Zd.x + Pd.x / 16, "em ").concat(Zd.y + Pd.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: Nd,
          children: Jd
        }]
      }(Id)
    }

    function kp(dd) {
      var Jd = dd.content,
        kd = dd.width,
        pd = dd.height,
        Nd = dd.transform,
        Wd = dd.extra,
        Pd = dd.watchable,
        Zd = void 0 !== Pd && Pd,
        Cd = gd(gd({}, Wd.attributes), {}, {
          class: Wd.classes.join(" ")
        });
      Zd && (Cd[RJ] = "");
      var Kd = gd({}, Wd.styles);
      AJ(Nd) && (Kd.transform = function(dd) {
        var Jd = dd.transform,
          kd = dd.width,
          pd = void 0 === kd ? 16 : kd,
          Nd = dd.height,
          Wd = void 0 === Nd ? 16 : Nd,
          Pd = dd.startCentered,
          Zd = void 0 !== Pd && Pd,
          gd = "";
        return gd += Zd && Yd ? "translate(".concat(Jd.x / rJ - pd / 2, "em, ").concat(Jd.y / rJ - Wd / 2, "em) ") : Zd ? "translate(calc(-50% + ".concat(Jd.x / rJ, "em), calc(-50% + ").concat(Jd.y / rJ, "em)) ") : "translate(".concat(Jd.x / rJ, "em, ").concat(Jd.y / rJ, "em) "), gd += "scale(".concat(Jd.size / rJ * (Jd.flipX ? -1 : 1), ", ").concat(Jd.size / rJ * (Jd.flipY ? -1 : 1), ") "), gd + "rotate(".concat(Jd.rotate, "deg) ")
      }({
        transform: Nd,
        startCentered: !0,
        width: kd,
        height: pd
      }), Kd["-webkit-transform"] = Kd.transform);
      var od = wJ(Kd);
      od.length > 0 && (Cd.style = od);
      var ld = [];
      return ld.push({
        tag: "span",
        attributes: Cd,
        children: [Jd]
      }), ld
    }
    var pp = Wk.styles;

    function Np(dd) {
      var Jd = dd[0],
        kd = dd[1],
        pd = Cd(dd.slice(4), 1)[0];
      return {
        found: !0,
        width: Jd,
        height: kd,
        icon: Array.isArray(pd) ? {
          tag: "g",
          attributes: {
            class: "".concat(cJ.cssPrefix, "-").concat(UJ.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(cJ.cssPrefix, "-").concat(UJ.SECONDARY),
              fill: "currentColor",
              d: pd[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(cJ.cssPrefix, "-").concat(UJ.PRIMARY),
              fill: "currentColor",
              d: pd[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: pd
          }
        }
      }
    }
    var Wp = {
      found: !1,
      width: 512,
      height: 512
    };

    function Pp(dd, Jd) {
      var kd = Jd;
      return "fa" === Jd && null !== cJ.styleDefault && (Jd = Sk()), new Promise((function(pd, Nd) {
        if ("fa" === kd) {
          var Wd = bk(dd) || {};
          dd = Wd.iconName || dd, Jd = Wd.prefix || Jd
        }
        if (dd && Jd && pp[Jd] && pp[Jd][dd]) return pd(Np(pp[Jd][dd]));
        ! function(dd, Jd) {
          sJ || cJ.showMissingIcons || !dd || console.error('Icon with name "'.concat(dd, '" and prefix "').concat(Jd, '" is missing.'))
        }(dd, Jd), pd(gd(gd({}, Wp), {}, {
          icon: cJ.showMissingIcons && dd && tk("missingIconAbstract") || {}
        }))
      }))
    }
    var Zp = function() {},
      gp = cJ.measurePerformance && Md && Md.mark && Md.measure ? Md : {
        mark: Zp,
        measure: Zp
      },
      Cp = 'FA "7.2.0"',
      Kp = function(dd) {
        gp.mark("".concat(Cp, " ").concat(dd, " ends")), gp.measure("".concat(Cp, " ").concat(dd), "".concat(Cp, " ").concat(dd, " begins"), "".concat(Cp, " ").concat(dd, " ends"))
      },
      op = function(dd) {
        return gp.mark("".concat(Cp, " ").concat(dd, " begins")),
          function() {
            return Kp(dd)
          }
      },
      lp = function() {};

    function Qp(dd) {
      return "string" === typeof(dd.getAttribute ? dd.getAttribute(RJ) : null)
    }

    function Lp(dd) {
      return sd.createElementNS("http://www.w3.org/2000/svg", dd)
    }

    function Op(dd) {
      return sd.createElement(dd)
    }

    function ep(dd) {
      var Jd = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        kd = void 0 === Jd ? "svg" === dd.tag ? Lp : Op : Jd;
      if ("string" === typeof dd) return sd.createTextNode(dd);
      var pd = kd(dd.tag);
      return Object.keys(dd.attributes || []).forEach((function(Jd) {
        pd.setAttribute(Jd, dd.attributes[Jd])
      })), (dd.children || []).forEach((function(dd) {
        pd.appendChild(ep(dd, {
          ceFn: kd
        }))
      })), pd
    }
    var Rp = {
      replace: function(dd) {
        var Jd = dd[0];
        if (Jd.parentNode)
          if (dd[1].forEach((function(dd) {
              Jd.parentNode.insertBefore(ep(dd), Jd)
            })), null === Jd.getAttribute(RJ) && cJ.keepOriginalSource) {
            var kd = sd.createComment(function(dd) {
              var Jd = " ".concat(dd.outerHTML, " ");
              return "".concat(Jd, "Font Awesome fontawesome.com ")
            }(Jd));
            Jd.parentNode.replaceChild(kd, Jd)
          } else Jd.remove()
      },
      nest: function(dd) {
        var Jd = dd[0],
          kd = dd[1];
        if (~zJ(Jd).indexOf(cJ.replacementClass)) return Rp.replace(dd);
        var pd = new RegExp("".concat(cJ.cssPrefix, "-.*"));
        if (delete kd[0].attributes.id, kd[0].attributes.class) {
          var Nd = kd[0].attributes.class.split(" ").reduce((function(dd, Jd) {
            return Jd === cJ.replacementClass || Jd.match(pd) ? dd.toSvg.push(Jd) : dd.toNode.push(Jd), dd
          }), {
            toNode: [],
            toSvg: []
          });
          kd[0].attributes.class = Nd.toSvg.join(" "), 0 === Nd.toNode.length ? Jd.removeAttribute("class") : Jd.setAttribute("class", Nd.toNode.join(" "))
        }
        var Wd = kd.map((function(dd) {
          return Ck(dd)
        })).join("\n");
        Jd.setAttribute(RJ, ""), Jd.innerHTML = Wd
      }
    };

    function Ip(dd) {
      dd()
    }

    function Gp(dd, Jd) {
      var kd = "function" === typeof Jd ? Jd : lp;
      if (0 === dd.length) kd();
      else {
        var pd = Ip;
        "async" === cJ.mutateApproach && (pd = Bd.requestAnimationFrame || Ip), pd((function() {
          var Jd = !0 === cJ.autoReplaceSvg ? Rp.replace : Rp[cJ.autoReplaceSvg] || Rp.replace,
            pd = op("mutate");
          dd.map(Jd), pd(), kd()
        }))
      }
    }
    var vp = !1;

    function xp() {
      vp = !0
    }

    function qp() {
      vp = !1
    }
    var Bp = null;

    function sp(dd) {
      if (ad && cJ.observeMutations) {
        var Jd = dd.treeCallback,
          kd = void 0 === Jd ? lp : Jd,
          pd = dd.nodeCallback,
          Nd = void 0 === pd ? lp : pd,
          Wd = dd.pseudoElementsCallback,
          Pd = void 0 === Wd ? lp : Wd,
          Zd = dd.observeMutationsRoot,
          gd = void 0 === Zd ? sd : Zd;
        Bp = new ad((function(dd) {
          if (!vp) {
            var Jd = Sk();
            VJ(dd).forEach((function(dd) {
              if ("childList" === dd.type && dd.addedNodes.length > 0 && !Qp(dd.addedNodes[0]) && (cJ.searchPseudoElements && Pd(dd.target), kd(dd.target)), "attributes" === dd.type && dd.target.parentNode && cJ.searchPseudoElements && Pd([dd.target], !0), "attributes" === dd.type && Qp(dd.target) && ~nJ.indexOf(dd.attributeName))
                if ("class" === dd.attributeName && function(dd) {
                    var Jd = dd.getAttribute ? dd.getAttribute(GJ) : null,
                      kd = dd.getAttribute ? dd.getAttribute(vJ) : null;
                    return Jd && kd
                  }(dd.target)) {
                  var pd = nk(zJ(dd.target)),
                    Wd = pd.prefix,
                    Zd = pd.iconName;
                  dd.target.setAttribute(GJ, Wd || Jd), Zd && dd.target.setAttribute(vJ, Zd)
                } else(gd = dd.target) && gd.classList && gd.classList.contains && gd.classList.contains(cJ.replacementClass) && Nd(dd.target);
              var gd
            }))
          }
        })), Fd && Bp.observe(gd, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function ip(dd) {
      var Jd, kd, pd = dd.getAttribute("data-prefix"),
        Nd = dd.getAttribute("data-icon"),
        Wd = void 0 !== dd.innerText ? dd.innerText.trim() : "",
        Pd = nk(zJ(dd));
      return Pd.prefix || (Pd.prefix = Sk()), pd && Nd && (Pd.prefix = pd, Pd.iconName = Nd), Pd.iconName && Pd.prefix || (Pd.prefix && Wd.length > 0 && (Pd.iconName = (Jd = Pd.prefix, kd = dd.innerText, (qk[Jd] || {})[kd] || Yk(Pd.prefix, Qk(dd.innerText)))), !Pd.iconName && cJ.autoFetchSvg && dd.firstChild && dd.firstChild.nodeType === Node.TEXT_NODE && (Pd.iconName = dd.firstChild.data)), Pd
    }

    function ap(dd) {
      var Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        kd = ip(dd),
        pd = kd.iconName,
        Nd = kd.prefix,
        Wd = kd.rest,
        Pd = function(dd) {
          return VJ(dd.attributes).reduce((function(dd, Jd) {
            return "class" !== dd.name && "style" !== dd.name && (dd[Jd.name] = Jd.value), dd
          }), {})
        }(dd),
        Zd = rk("parseNodeAttributes", {}, dd),
        Cd = Jd.styleParser ? function(dd) {
          var Jd = dd.getAttribute("style"),
            kd = [];
          return Jd && (kd = Jd.split(";").reduce((function(dd, Jd) {
            var kd = Jd.split(":"),
              pd = kd[0],
              Nd = kd.slice(1);
            return pd && Nd.length > 0 && (dd[pd] = Nd.join(":").trim()), dd
          }), {})), kd
        }(dd) : [];
      return gd({
        iconName: pd,
        prefix: Nd,
        transform: uJ,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: Wd,
          styles: Cd,
          attributes: Pd
        }
      }, Zd)
    }
    var Mp = Wk.styles;

    function Fp(dd) {
      var Jd = "nest" === cJ.autoReplaceSvg ? ap(dd, {
        styleParser: !1
      }) : ap(dd);
      return ~Jd.extra.classes.indexOf(XJ) ? tk("generateLayersText", dd, Jd) : tk("generateSvgReplacementMutation", dd, Jd)
    }

    function Yp(dd) {
      var Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!Fd) return Promise.resolve();
      var kd = sd.documentElement.classList,
        pd = function(dd) {
          return kd.add("".concat(xJ, "-").concat(dd))
        },
        Nd = function(dd) {
          return kd.remove("".concat(xJ, "-").concat(dd))
        },
        Wd = cJ.autoFetchSvg ? [].concat(Kd(JJ), Kd(oJ)) : bd.concat(Object.keys(Mp));
      Wd.includes("fa") || Wd.push("fa");
      var Pd = [".".concat(XJ, ":not([").concat(RJ, "])")].concat(Wd.map((function(dd) {
        return ".".concat(dd, ":not([").concat(RJ, "])")
      }))).join(", ");
      if (0 === Pd.length) return Promise.resolve();
      var Zd = [];
      try {
        Zd = VJ(dd.querySelectorAll(Pd))
      } catch (od) {}
      if (!(Zd.length > 0)) return Promise.resolve();
      pd("pending"), Nd("complete");
      var gd = op("onTree"),
        Cd = Zd.reduce((function(dd, Jd) {
          try {
            var kd = Fp(Jd);
            kd && dd.push(kd)
          } catch (od) {
            sJ || "MissingIcon" === od.name && console.error(od)
          }
          return dd
        }), []);
      return new Promise((function(dd, kd) {
        Promise.all(Cd).then((function(kd) {
          Gp(kd, (function() {
            pd("active"), pd("complete"), Nd("pending"), "function" === typeof Jd && Jd(), gd(), dd()
          }))
        })).catch((function(dd) {
          gd(), kd(dd)
        }))
      }))
    }

    function mp(dd) {
      var Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      Fp(dd).then((function(dd) {
        dd && Gp([dd], Jd)
      }))
    }
    var bp = function(dd) {
        var Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          kd = Jd.transform,
          pd = void 0 === kd ? uJ : kd,
          Nd = Jd.symbol,
          Wd = void 0 !== Nd && Nd,
          Pd = Jd.mask,
          Zd = void 0 === Pd ? null : Pd,
          Cd = Jd.maskId,
          Kd = void 0 === Cd ? null : Cd,
          od = Jd.classes,
          ld = void 0 === od ? [] : od,
          Qd = Jd.attributes,
          Ld = void 0 === Qd ? {} : Qd,
          Od = Jd.styles,
          ed = void 0 === Od ? {} : Od;
        if (dd) {
          var Rd = dd.prefix,
            Id = dd.iconName,
            Gd = dd.icon;
          return dp(gd({
            type: "icon"
          }, dd), (function() {
            return uk("beforeDOMElementCreation", {
              iconDefinition: dd,
              params: Jd
            }), Jp({
              icons: {
                main: Np(Gd),
                mask: Zd ? Np(Zd.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: Rd,
              iconName: Id,
              transform: gd(gd({}, uJ), pd),
              symbol: Wd,
              maskId: Kd,
              extra: {
                attributes: Ld,
                styles: ed,
                classes: ld
              }
            })
          }))
        }
      },
      Sp = {
        mixout: function() {
          return {
            icon: (dd = bp, function(Jd) {
              var kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                pd = (Jd || {}).icon ? Jd : Vk(Jd || {}),
                Nd = kd.mask;
              return Nd && (Nd = (Nd || {}).icon ? Nd : Vk(Nd || {})), dd(pd, gd(gd({}, kd), {}, {
                mask: Nd
              }))
            })
          };
          var dd
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(dd) {
              return dd.treeCallback = Yp, dd.nodeCallback = mp, dd
            }
          }
        },
        provides: function(dd) {
          dd.i2svg = function(dd) {
            var Jd = dd.node,
              kd = void 0 === Jd ? sd : Jd,
              pd = dd.callback;
            return Yp(kd, void 0 === pd ? function() {} : pd)
          }, dd.generateSvgReplacementMutation = function(dd, Jd) {
            var kd = Jd.iconName,
              pd = Jd.prefix,
              Nd = Jd.transform,
              Wd = Jd.symbol,
              Pd = Jd.mask,
              Zd = Jd.maskId,
              gd = Jd.extra;
            return new Promise((function(Jd, Kd) {
              Promise.all([Pp(kd, pd), Pd.iconName ? Pp(Pd.iconName, Pd.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(Pd) {
                var Kd = Cd(Pd, 2),
                  od = Kd[0],
                  ld = Kd[1];
                Jd([dd, Jp({
                  icons: {
                    main: od,
                    mask: ld
                  },
                  prefix: pd,
                  iconName: kd,
                  transform: Nd,
                  symbol: Wd,
                  maskId: Zd,
                  extra: gd,
                  watchable: !0
                })])
              })).catch(Kd)
            }))
          }, dd.generateAbstractIcon = function(dd) {
            var Jd, kd = dd.children,
              pd = dd.attributes,
              Nd = dd.main,
              Wd = dd.transform,
              Pd = wJ(dd.styles);
            return Pd.length > 0 && (pd.style = Pd), AJ(Wd) && (Jd = tk("generateAbstractTransformGrouping", {
              main: Nd,
              transform: Wd,
              containerWidth: Nd.width,
              iconWidth: Nd.width
            })), kd.push(Jd || Nd.icon), {
              children: kd,
              attributes: pd
            }
          }
        }
      },
      jp = {
        mixout: function() {
          return {
            layer: function(dd) {
              var Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                kd = Jd.classes,
                pd = void 0 === kd ? [] : kd;
              return dp({
                type: "layer"
              }, (function() {
                uk("beforeDOMElementCreation", {
                  assembler: dd,
                  params: Jd
                });
                var kd = [];
                return dd((function(dd) {
                  Array.isArray(dd) ? dd.map((function(dd) {
                    kd = kd.concat(dd.abstract)
                  })) : kd = kd.concat(dd.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(cJ.cssPrefix, "-layers")].concat(Kd(pd)).join(" ")
                  },
                  children: kd
                }]
              }))
            }
          }
        }
      },
      Xp = {
        mixout: function() {
          return {
            counter: function(dd) {
              var Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                kd = Jd.title,
                pd = void 0 === kd ? null : kd,
                Nd = Jd.classes,
                Wd = void 0 === Nd ? [] : Nd,
                Pd = Jd.attributes,
                Zd = void 0 === Pd ? {} : Pd,
                Cd = Jd.styles,
                od = void 0 === Cd ? {} : Cd;
              return dp({
                type: "counter",
                content: dd
              }, (function() {
                return uk("beforeDOMElementCreation", {
                    content: dd,
                    params: Jd
                  }),
                  function(dd) {
                    var Jd = dd.content,
                      kd = dd.extra,
                      pd = gd(gd({}, kd.attributes), {}, {
                        class: kd.classes.join(" ")
                      }),
                      Nd = wJ(kd.styles);
                    Nd.length > 0 && (pd.style = Nd);
                    var Wd = [];
                    return Wd.push({
                      tag: "span",
                      attributes: pd,
                      children: [Jd]
                    }), Wd
                  }({
                    content: dd.toString(),
                    title: pd,
                    extra: {
                      attributes: Zd,
                      styles: od,
                      classes: ["".concat(cJ.cssPrefix, "-layers-counter")].concat(Kd(Wd))
                    }
                  })
              }))
            }
          }
        }
      },
      fp = {
        mixout: function() {
          return {
            text: function(dd) {
              var Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                kd = Jd.transform,
                pd = void 0 === kd ? uJ : kd,
                Nd = Jd.classes,
                Wd = void 0 === Nd ? [] : Nd,
                Pd = Jd.attributes,
                Zd = void 0 === Pd ? {} : Pd,
                Cd = Jd.styles,
                od = void 0 === Cd ? {} : Cd;
              return dp({
                type: "text",
                content: dd
              }, (function() {
                return uk("beforeDOMElementCreation", {
                  content: dd,
                  params: Jd
                }), kp({
                  content: dd,
                  transform: gd(gd({}, uJ), pd),
                  extra: {
                    attributes: Zd,
                    styles: od,
                    classes: ["".concat(cJ.cssPrefix, "-layers-text")].concat(Kd(Wd))
                  }
                })
              }))
            }
          }
        },
        provides: function(dd) {
          dd.generateLayersText = function(dd, Jd) {
            var kd = Jd.transform,
              pd = Jd.extra,
              Nd = null,
              Wd = null;
            if (Yd) {
              var Pd = parseInt(getComputedStyle(dd).fontSize, 10),
                Zd = dd.getBoundingClientRect();
              Nd = Zd.width / Pd, Wd = Zd.height / Pd
            }
            return Promise.resolve([dd, kp({
              content: dd.innerHTML,
              width: Nd,
              height: Wd,
              transform: kd,
              extra: pd,
              watchable: !0
            })])
          }
        }
      },
      np = new RegExp('"', "ug"),
      Up = [1105920, 1112319],
      yp = gd(gd(gd(gd({}, {
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
      Dp = Object.keys(yp).reduce((function(dd, Jd) {
        return dd[Jd.toLowerCase()] = yp[Jd], dd
      }), {}),
      Tp = Object.keys(Dp).reduce((function(dd, Jd) {
        var kd = Dp[Jd];
        return dd[Jd] = kd[900] || Kd(Object.entries(kd))[0][1], dd
      }), {});

    function Ep(dd, Jd) {
      var kd = "".concat("data-fa-pseudo-element-pending").concat(Jd.replace(":", "-"));
      return new Promise((function(pd, Nd) {
        if (null !== dd.getAttribute(kd)) return pd();
        var Wd = VJ(dd.children).filter((function(dd) {
            return dd.getAttribute(IJ) === Jd
          }))[0],
          Pd = Bd.getComputedStyle(dd, Jd),
          Zd = Pd.getPropertyValue("font-family"),
          Cd = Zd.match(fJ),
          od = Pd.getPropertyValue("font-weight"),
          ld = Pd.getPropertyValue("content");
        if (Wd && !Cd) return dd.removeChild(Wd), pd();
        if (Cd && "none" !== ld && "" !== ld) {
          var Qd = Pd.getPropertyValue("content"),
            Ld = function(dd, Jd) {
              var kd = dd.replace(/^['"]|['"]$/g, "").toLowerCase(),
                pd = parseInt(Jd),
                Nd = isNaN(pd) ? "normal" : pd;
              return (Dp[kd] || {})[Nd] || Tp[kd]
            }(Zd, od),
            Od = function(dd) {
              return Qk(Kd(dd.replace(np, ""))[0] || "")
            }(Qd),
            ed = Cd[0].startsWith("FontAwesome"),
            Rd = function(dd) {
              var Jd = dd.getPropertyValue("font-feature-settings").includes("ss01"),
                kd = dd.getPropertyValue("content").replace(np, ""),
                pd = kd.codePointAt(0),
                Nd = pd >= Up[0] && pd <= Up[1],
                Wd = 2 === kd.length && kd[0] === kd[1];
              return Nd || Wd || Jd
            }(Pd),
            Id = Yk(Ld, Od),
            Gd = Id;
          if (ed) {
            var vd = function(dd) {
              var Jd = sk[dd],
                kd = Yk("fas", dd);
              return Jd || (kd ? {
                prefix: "fas",
                iconName: kd
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(Od);
            vd.iconName && vd.prefix && (Id = vd.iconName, Ld = vd.prefix)
          }
          if (!Id || Rd || Wd && Wd.getAttribute(GJ) === Ld && Wd.getAttribute(vJ) === Gd) pd();
          else {
            dd.setAttribute(kd, Gd), Wd && dd.removeChild(Wd);
            var xd = {
                iconName: null,
                prefix: null,
                transform: uJ,
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
              qd = xd.extra;
            qd.attributes[IJ] = Jd, Pp(Id, Ld).then((function(Nd) {
              var Wd = Jp(gd(gd({}, xd), {}, {
                  icons: {
                    main: Nd,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: Ld,
                  iconName: Gd,
                  extra: qd,
                  watchable: !0
                })),
                Pd = sd.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === Jd ? dd.insertBefore(Pd, dd.firstChild) : dd.appendChild(Pd), Pd.outerHTML = Wd.map((function(dd) {
                return Ck(dd)
              })).join("\n"), dd.removeAttribute(kd), pd()
            })).catch(Nd)
          }
        } else pd()
      }))
    }

    function cp(dd) {
      return Promise.all([Ep(dd, "::before"), Ep(dd, "::after")])
    }

    function hp(dd) {
      return dd.parentNode !== document.head && !~qJ.indexOf(dd.tagName.toUpperCase()) && !dd.getAttribute(IJ) && (!dd.parentNode || "svg" !== dd.parentNode.tagName)
    }
    var rp = function(dd) {
        return !!dd && BJ.some((function(Jd) {
          return dd.includes(Jd)
        }))
      },
      tp = function(dd) {
        if (!dd) return [];
        var Jd = new Set,
          kd = dd.split(/,(?![^()]*\))/).map((function(dd) {
            return dd.trim()
          }));
        kd = kd.flatMap((function(dd) {
          return dd.includes("(") ? dd : dd.split(",").map((function(dd) {
            return dd.trim()
          }))
        }));
        var pd, Nd = Wd(kd);
        try {
          for (Nd.s(); !(pd = Nd.n()).done;) {
            var Pd = pd.value;
            if (rp(Pd)) {
              var Zd = BJ.reduce((function(dd, Jd) {
                return dd.replace(Jd, "")
              }), Pd);
              "" !== Zd && "*" !== Zd && Jd.add(Zd)
            }
          }
        } catch (gd) {
          Nd.e(gd)
        } finally {
          Nd.f()
        }
        return Jd
      };

    function Vp(dd) {
      if (Fd) {
        var Jd;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) Jd = dd;
        else if (cJ.searchPseudoElementsFullScan) Jd = dd.querySelectorAll("*");
        else {
          var kd, pd = new Set,
            Nd = Wd(document.styleSheets);
          try {
            for (Nd.s(); !(kd = Nd.n()).done;) {
              var Pd = kd.value;
              try {
                var Zd, gd = Wd(Pd.cssRules);
                try {
                  for (gd.s(); !(Zd = gd.n()).done;) {
                    var Cd, Kd = Zd.value,
                      od = Wd(tp(Kd.selectorText));
                    try {
                      for (od.s(); !(Cd = od.n()).done;) {
                        var ld = Cd.value;
                        pd.add(ld)
                      }
                    } catch (Ld) {
                      od.e(Ld)
                    } finally {
                      od.f()
                    }
                  }
                } catch (Ld) {
                  gd.e(Ld)
                } finally {
                  gd.f()
                }
              } catch (Od) {
                cJ.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(Pd.href, " (").concat(Od.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (Ld) {
            Nd.e(Ld)
          } finally {
            Nd.f()
          }
          if (!pd.size) return;
          var Qd = Array.from(pd).join(", ");
          try {
            Jd = dd.querySelectorAll(Qd)
          } catch (ed) {}
        }
        return new Promise((function(dd, kd) {
          var pd = VJ(Jd).filter(hp).map(cp),
            Nd = op("searchPseudoElements");
          xp(), Promise.all(pd).then((function() {
            Nd(), qp(), dd()
          })).catch((function() {
            Nd(), qp(), kd()
          }))
        }))
      }
    }
    var zp = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(dd) {
              return dd.pseudoElementsCallback = Vp, dd
            }
          }
        },
        provides: function(dd) {
          dd.pseudoElements2svg = function(dd) {
            var Jd = dd.node,
              kd = void 0 === Jd ? sd : Jd;
            cJ.searchPseudoElements && Vp(kd)
          }
        }
      },
      Hp = !1,
      wp = function(dd) {
        return dd.toLowerCase().split(" ").reduce((function(dd, Jd) {
          var kd = Jd.toLowerCase().split("-"),
            pd = kd[0],
            Nd = kd.slice(1).join("-");
          if (pd && "h" === Nd) return dd.flipX = !0, dd;
          if (pd && "v" === Nd) return dd.flipY = !0, dd;
          if (Nd = parseFloat(Nd), isNaN(Nd)) return dd;
          switch (pd) {
            case "grow":
              dd.size = dd.size + Nd;
              break;
            case "shrink":
              dd.size = dd.size - Nd;
              break;
            case "left":
              dd.x = dd.x - Nd;
              break;
            case "right":
              dd.x = dd.x + Nd;
              break;
            case "up":
              dd.y = dd.y - Nd;
              break;
            case "down":
              dd.y = dd.y + Nd;
              break;
            case "rotate":
              dd.rotate = dd.rotate + Nd
          }
          return dd
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      Ap = {
        mixout: function() {
          return {
            parse: {
              transform: function(dd) {
                return wp(dd)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(dd, Jd) {
              var kd = Jd.getAttribute("data-fa-transform");
              return kd && (dd.transform = wp(kd)), dd
            }
          }
        },
        provides: function(dd) {
          dd.generateAbstractTransformGrouping = function(dd) {
            var Jd = dd.main,
              kd = dd.transform,
              pd = dd.containerWidth,
              Nd = dd.iconWidth,
              Wd = {
                transform: "translate(".concat(pd / 2, " 256)")
              },
              Pd = "translate(".concat(32 * kd.x, ", ").concat(32 * kd.y, ") "),
              Zd = "scale(".concat(kd.size / 16 * (kd.flipX ? -1 : 1), ", ").concat(kd.size / 16 * (kd.flipY ? -1 : 1), ") "),
              Cd = "rotate(".concat(kd.rotate, " 0 0)"),
              Kd = {
                outer: Wd,
                inner: {
                  transform: "".concat(Pd, " ").concat(Zd, " ").concat(Cd)
                },
                path: {
                  transform: "translate(".concat(Nd / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: gd({}, Kd.outer),
              children: [{
                tag: "g",
                attributes: gd({}, Kd.inner),
                children: [{
                  tag: Jd.icon.tag,
                  children: Jd.icon.children,
                  attributes: gd(gd({}, Jd.icon.attributes), Kd.path)
                }]
              }]
            }
          }
        }
      },
      dN = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function JN(dd) {
      var Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return dd.attributes && (dd.attributes.fill || Jd) && (dd.attributes.fill = "black"), dd
    }
    var kN = {
        hooks: function() {
          return {
            parseNodeAttributes: function(dd, Jd) {
              var kd = Jd.getAttribute("data-fa-mask"),
                pd = kd ? nk(kd.split(" ").map((function(dd) {
                  return dd.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return pd.prefix || (pd.prefix = Sk()), dd.mask = pd, dd.maskId = Jd.getAttribute("data-fa-mask-id"), dd
            }
          }
        },
        provides: function(dd) {
          dd.generateAbstractMask = function(dd) {
            var Jd, kd = dd.children,
              pd = dd.attributes,
              Nd = dd.main,
              Wd = dd.mask,
              Pd = dd.maskId,
              Zd = dd.transform,
              Cd = Nd.width,
              Kd = Nd.icon,
              od = Wd.width,
              ld = Wd.icon,
              Qd = function(dd) {
                var Jd = dd.transform,
                  kd = dd.containerWidth,
                  pd = dd.iconWidth,
                  Nd = {
                    transform: "translate(".concat(kd / 2, " 256)")
                  },
                  Wd = "translate(".concat(32 * Jd.x, ", ").concat(32 * Jd.y, ") "),
                  Pd = "scale(".concat(Jd.size / 16 * (Jd.flipX ? -1 : 1), ", ").concat(Jd.size / 16 * (Jd.flipY ? -1 : 1), ") "),
                  Zd = "rotate(".concat(Jd.rotate, " 0 0)");
                return {
                  outer: Nd,
                  inner: {
                    transform: "".concat(Wd, " ").concat(Pd, " ").concat(Zd)
                  },
                  path: {
                    transform: "translate(".concat(pd / 2 * -1, " -256)")
                  }
                }
              }({
                transform: Zd,
                containerWidth: od,
                iconWidth: Cd
              }),
              Ld = {
                tag: "rect",
                attributes: gd(gd({}, dN), {}, {
                  fill: "white"
                })
              },
              Od = Kd.children ? {
                children: Kd.children.map(JN)
              } : {},
              ed = {
                tag: "g",
                attributes: gd({}, Qd.inner),
                children: [JN(gd({
                  tag: Kd.tag,
                  attributes: gd(gd({}, Kd.attributes), Qd.path)
                }, Od))]
              },
              Rd = {
                tag: "g",
                attributes: gd({}, Qd.outer),
                children: [ed]
              },
              Id = "mask-".concat(Pd || tJ()),
              Gd = "clip-".concat(Pd || tJ()),
              vd = {
                tag: "mask",
                attributes: gd(gd({}, dN), {}, {
                  id: Id,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [Ld, Rd]
              },
              xd = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: Gd
                  },
                  children: (Jd = ld, "g" === Jd.tag ? Jd.children : [Jd])
                }, vd]
              };
            return kd.push(xd, {
              tag: "rect",
              attributes: gd({
                fill: "currentColor",
                "clip-path": "url(#".concat(Gd, ")"),
                mask: "url(#".concat(Id, ")")
              }, dN)
            }), {
              children: kd,
              attributes: pd
            }
          }
        }
      },
      pN = {
        provides: function(dd) {
          var Jd = !1;
          Bd.matchMedia && (Jd = Bd.matchMedia("(prefers-reduced-motion: reduce)").matches), dd.missingIconAbstract = function() {
            var dd = [],
              kd = {
                fill: "currentColor"
              },
              pd = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            dd.push({
              tag: "path",
              attributes: gd(gd({}, kd), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var Nd = gd(gd({}, pd), {}, {
                attributeName: "opacity"
              }),
              Wd = {
                tag: "circle",
                attributes: gd(gd({}, kd), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return Jd || Wd.children.push({
              tag: "animate",
              attributes: gd(gd({}, pd), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: gd(gd({}, Nd), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), dd.push(Wd), dd.push({
              tag: "path",
              attributes: gd(gd({}, kd), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: Jd ? [] : [{
                tag: "animate",
                attributes: gd(gd({}, Nd), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), Jd || dd.push({
              tag: "path",
              attributes: gd(gd({}, kd), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: gd(gd({}, Nd), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: dd
            }
          }
        }
      };
    ! function(dd, Jd) {
      var kd = Jd.mixoutsTo;
      Tk = dd, Ek = {}, Object.keys(ck).forEach((function(dd) {
        -1 === hk.indexOf(dd) && delete ck[dd]
      })), Tk.forEach((function(dd) {
        var Jd = dd.mixout ? dd.mixout() : {};
        if (Object.keys(Jd).forEach((function(dd) {
            "function" === typeof Jd[dd] && (kd[dd] = Jd[dd]), "object" === ld(Jd[dd]) && Object.keys(Jd[dd]).forEach((function(pd) {
              kd[dd] || (kd[dd] = {}), kd[dd][pd] = Jd[dd][pd]
            }))
          })), dd.hooks) {
          var pd = dd.hooks();
          Object.keys(pd).forEach((function(dd) {
            Ek[dd] || (Ek[dd] = []), Ek[dd].push(pd[dd])
          }))
        }
        dd.provides && dd.provides(ck)
      }))
    }([pk, Sp, jp, Xp, fp, zp, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              xp(), Hp = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            sp(rk("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            Bp && Bp.disconnect()
          },
          watch: function(dd) {
            var Jd = dd.observeMutationsRoot;
            Hp ? qp() : sp(rk("mutationObserverCallbacks", {
              observeMutationsRoot: Jd
            }))
          }
        }
      }
    }, Ap, kN, pN, {
      hooks: function() {
        return {
          parseNodeAttributes: function(dd, Jd) {
            var kd = Jd.getAttribute("data-fa-symbol"),
              pd = null !== kd && ("" === kd || kd);
            return dd.symbol = pd, dd
          }
        }
      }
    }], {
      mixoutsTo: wk
    });
    var NN = wk.noAuto,
      WN = wk.config,
      PN = wk.library,
      ZN = wk.dom,
      gN = wk.parse,
      CN = wk.findIconDefinition,
      KN = wk.toHtml,
      oN = wk.icon,
      lN = wk.layer,
      QN = wk.text,
      LN = wk.counter
  },
  6567: dd => {
    dd.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);