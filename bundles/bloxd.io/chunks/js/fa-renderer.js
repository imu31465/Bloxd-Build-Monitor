/*! For license information please see bcgkc.fa-renderer.9b0ac318.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6664: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      FontAwesomeIcon: () => PT
    });
    var lT = cT(6657),
      MT = cT(4917),
      KT = cT.n(MT),
      OT = cT(71);

    function yT(TT, kT) {
      (null == kT || kT > TT.length) && (kT = TT.length);
      for (var cT = 0, lT = Array(kT); cT < kT; cT++) lT[cT] = TT[cT];
      return lT
    }

    function fT(TT, kT, cT) {
      return (kT = function(TT) {
        var kT = function(TT, kT) {
          if ("object" != typeof TT || !TT) return TT;
          var cT = TT[Symbol.toPrimitive];
          if (void 0 !== cT) {
            var lT = cT.call(TT, kT || "default");
            if ("object" != typeof lT) return lT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === kT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == typeof kT ? kT : kT + ""
      }(kT)) in TT ? Object.defineProperty(TT, kT, {
        value: cT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[kT] = cT, TT
    }

    function xT(TT, kT) {
      var cT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var lT = Object.getOwnPropertySymbols(TT);
        kT && (lT = lT.filter((function(kT) {
          return Object.getOwnPropertyDescriptor(TT, kT).enumerable
        }))), cT.push.apply(cT, lT)
      }
      return cT
    }

    function IT(TT) {
      for (var kT = 1; kT < arguments.length; kT++) {
        var cT = null != arguments[kT] ? arguments[kT] : {};
        kT % 2 ? xT(Object(cT), !0).forEach((function(kT) {
          fT(TT, kT, cT[kT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(cT)) : xT(Object(cT)).forEach((function(kT) {
          Object.defineProperty(TT, kT, Object.getOwnPropertyDescriptor(cT, kT))
        }))
      }
      return TT
    }

    function AT(TT, kT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, kT) {
        var cT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != cT) {
          var lT, MT, KT, OT, yT = [],
            fT = !0,
            xT = !1;
          try {
            if (KT = (cT = cT.call(TT)).next, 0 === kT) {
              if (Object(cT) !== cT) return;
              fT = !1
            } else
              for (; !(fT = (lT = KT.call(cT)).done) && (yT.push(lT.value), yT.length !== kT); fT = !0);
          } catch (TT) {
            xT = !0, MT = TT
          } finally {
            try {
              if (!fT && null != cT.return && (OT = cT.return(), Object(OT) !== OT)) return
            } finally {
              if (xT) throw MT
            }
          }
          return yT
        }
      }(TT, kT) || vT(TT, kT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function CT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return yT(TT)
      }(TT) || function(TT) {
        if ("undefined" != typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || vT(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function jT(TT) {
      return jT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, jT(TT)
    }

    function vT(TT, kT) {
      if (TT) {
        if ("string" == typeof TT) return yT(TT, kT);
        var cT = {}.toString.call(TT).slice(8, -1);
        return "Object" === cT && TT.constructor && (cT = TT.constructor.name), "Map" === cT || "Set" === cT ? Array.from(TT) : "Arguments" === cT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cT) ? yT(TT, kT) : void 0
      }
    }
    var tT;
    try {
      var hT = cT(6668);
      tT = hT.version
    } catch (mT) {
      tT = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function NT(TT) {
      var kT = TT.beat,
        cT = TT.fade,
        lT = TT.beatFade,
        MT = TT.bounce,
        KT = TT.shake,
        OT = TT.flash,
        yT = TT.spin,
        xT = TT.spinPulse,
        IT = TT.spinReverse,
        CT = TT.pulse,
        jT = TT.fixedWidth,
        vT = TT.inverse,
        hT = TT.border,
        NT = TT.listItem,
        QT = TT.flip,
        ST = TT.size,
        DT = TT.rotation,
        aT = TT.pull,
        FT = TT.swapOpacity,
        rT = TT.rotateBy,
        PT = TT.widthAuto,
        wT = function(TT, kT) {
          for (var cT = AT(TT.split("-"), 2), lT = cT[0], MT = cT[1], KT = AT(kT.split("-"), 2), OT = KT[0], yT = KT[1], fT = lT.split("."), xT = OT.split("."), IT = 0; IT < Math.max(fT.length, xT.length); IT++) {
            var CT = fT[IT] || "0",
              jT = xT[IT] || "0",
              vT = parseInt(CT, 10),
              tT = parseInt(jT, 10);
            if (vT !== tT) return vT > tT
          }
          for (var hT = 0; hT < Math.max(fT.length, xT.length); hT++) {
            var NT = fT[hT] || "0",
              QT = xT[hT] || "0";
            if (NT !== QT && NT.length !== QT.length) return NT.length < QT.length
          }
          return !(MT && !yT)
        }(tT, "7.0.0"),
        mT = fT(fT(fT(fT(fT(fT({
          "fa-beat": kT,
          "fa-fade": cT,
          "fa-beat-fade": lT,
          "fa-bounce": MT,
          "fa-shake": KT,
          "fa-flash": OT,
          "fa-spin": yT,
          "fa-spin-reverse": IT,
          "fa-spin-pulse": xT,
          "fa-pulse": CT,
          "fa-fw": jT,
          "fa-inverse": vT,
          "fa-border": hT,
          "fa-li": NT,
          "fa-flip": !0 === QT,
          "fa-flip-horizontal": "horizontal" === QT || "both" === QT,
          "fa-flip-vertical": "vertical" === QT || "both" === QT
        }, "fa-".concat(ST), "undefined" !== typeof ST && null !== ST), "fa-rotate-".concat(DT), "undefined" !== typeof DT && null !== DT && 0 !== DT), "fa-pull-".concat(aT), "undefined" !== typeof aT && null !== aT), "fa-swap-opacity", FT), "fa-rotate-by", wT && rT), "fa-width-auto", wT && PT);
      return Object.keys(mT).map((function(TT) {
        return mT[TT] ? TT : null
      })).filter((function(TT) {
        return TT
      }))
    }

    function QT(TT) {
      return kT = TT, (kT -= 0) === kT ? TT : (TT = TT.replace(/[\-_\s]+(.)?/g, (function(TT, kT) {
        return kT ? kT.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + TT.substr(1);
      var kT
    }
    var ST = ["style"];
    var DT = !1;
    try {
      DT = !0
    } catch (mT) {}

    function aT(TT) {
      return TT && "object" === jT(TT) && TT.prefix && TT.iconName && TT.icon ? TT : lT.parse.icon ? lT.parse.icon(TT) : null === TT ? null : TT && "object" === jT(TT) && TT.prefix && TT.iconName ? TT : Array.isArray(TT) && 2 === TT.length ? {
        prefix: TT[0],
        iconName: TT[1]
      } : "string" === typeof TT ? {
        prefix: "fas",
        iconName: TT
      } : void 0
    }

    function FT(TT, kT) {
      return Array.isArray(kT) && kT.length > 0 || !Array.isArray(kT) && kT ? fT({}, TT, kT) : {}
    }
    var rT = {
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
      PT = OT.forwardRef((function(TT, kT) {
        var cT = IT(IT({}, rT), TT),
          MT = cT.icon,
          KT = cT.mask,
          OT = cT.symbol,
          yT = cT.className,
          fT = cT.title,
          xT = cT.titleId,
          AT = cT.maskId,
          jT = aT(MT),
          vT = FT("classes", [].concat(CT(NT(cT)), CT((yT || "").split(" ")))),
          tT = FT("transform", "string" === typeof cT.transform ? lT.parse.transform(cT.transform) : cT.transform),
          hT = FT("mask", aT(KT)),
          QT = (0, lT.icon)(jT, IT(IT(IT(IT({}, vT), tT), hT), {}, {
            symbol: OT,
            title: fT,
            titleId: xT,
            maskId: AT
          }));
        if (!QT) return function() {
          var TT;
          !DT && console && "function" === typeof console.error && (TT = console).error.apply(TT, arguments)
        }("Could not find icon", jT), null;
        var ST = QT.abstract,
          PT = {
            ref: kT
          };
        return Object.keys(cT).forEach((function(TT) {
          rT.hasOwnProperty(TT) || (PT[TT] = cT[TT])
        })), wT(ST[0], PT)
      }));
    PT.displayName = "FontAwesomeIcon", PT.propTypes = {
      beat: KT().bool,
      border: KT().bool,
      beatFade: KT().bool,
      bounce: KT().bool,
      className: KT().string,
      fade: KT().bool,
      flash: KT().bool,
      mask: KT().oneOfType([KT().object, KT().array, KT().string]),
      maskId: KT().string,
      fixedWidth: KT().bool,
      inverse: KT().bool,
      flip: KT().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: KT().oneOfType([KT().object, KT().array, KT().string]),
      listItem: KT().bool,
      pull: KT().oneOf(["right", "left"]),
      pulse: KT().bool,
      rotation: KT().oneOf([0, 90, 180, 270]),
      rotateBy: KT().bool,
      shake: KT().bool,
      size: KT().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: KT().bool,
      spinPulse: KT().bool,
      spinReverse: KT().bool,
      symbol: KT().oneOfType([KT().bool, KT().string]),
      title: KT().string,
      titleId: KT().string,
      transform: KT().oneOfType([KT().string, KT().object]),
      swapOpacity: KT().bool,
      widthAuto: KT().bool
    };
    var wT = function TT(kT, cT) {
      var lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof cT) return cT;
      var MT = (cT.children || []).map((function(cT) {
          return TT(kT, cT)
        })),
        KT = Object.keys(cT.attributes || {}).reduce((function(TT, kT) {
          var lT = cT.attributes[kT];
          switch (kT) {
            case "class":
              TT.attrs.className = lT, delete cT.attributes.class;
              break;
            case "style":
              TT.attrs.style = lT.split(";").map((function(TT) {
                return TT.trim()
              })).filter((function(TT) {
                return TT
              })).reduce((function(TT, kT) {
                var cT, lT = kT.indexOf(":"),
                  MT = QT(kT.slice(0, lT)),
                  KT = kT.slice(lT + 1).trim();
                return MT.startsWith("webkit") ? TT[(cT = MT, cT.charAt(0).toUpperCase() + cT.slice(1))] = KT : TT[MT] = KT, TT
              }), {});
              break;
            default:
              0 === kT.indexOf("aria-") || 0 === kT.indexOf("data-") ? TT.attrs[kT.toLowerCase()] = lT : TT.attrs[QT(kT)] = lT
          }
          return TT
        }), {
          attrs: {}
        }),
        OT = lT.style,
        yT = void 0 === OT ? {} : OT,
        fT = function(TT, kT) {
          if (null == TT) return {};
          var cT, lT, MT = function(TT, kT) {
            if (null == TT) return {};
            var cT = {};
            for (var lT in TT)
              if ({}.hasOwnProperty.call(TT, lT)) {
                if (-1 !== kT.indexOf(lT)) continue;
                cT[lT] = TT[lT]
              } return cT
          }(TT, kT);
          if (Object.getOwnPropertySymbols) {
            var KT = Object.getOwnPropertySymbols(TT);
            for (lT = 0; lT < KT.length; lT++) cT = KT[lT], -1 === kT.indexOf(cT) && {}.propertyIsEnumerable.call(TT, cT) && (MT[cT] = TT[cT])
          }
          return MT
        }(lT, ST);
      return KT.attrs.style = IT(IT({}, KT.attrs.style), yT), kT.apply(void 0, [cT.tag, IT(IT({}, KT.attrs), fT)].concat(CT(MT)))
    }.bind(null, OT.createElement)
  },
  4919: (TT, kT, cT) => {
    var lT = cT(4923);

    function MT() {}

    function KT() {}
    KT.resetWarningCache = MT, TT.exports = function() {
      function TT(TT, kT, cT, MT, KT, OT) {
        if (OT !== lT) {
          var yT = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw yT.name = "Invariant Violation", yT
        }
      }

      function kT() {
        return TT
      }
      TT.isRequired = TT;
      var cT = {
        array: TT,
        bigint: TT,
        bool: TT,
        func: TT,
        number: TT,
        object: TT,
        string: TT,
        symbol: TT,
        any: TT,
        arrayOf: kT,
        element: TT,
        elementType: TT,
        instanceOf: kT,
        node: TT,
        objectOf: kT,
        oneOf: kT,
        oneOfType: kT,
        shape: kT,
        exact: kT,
        checkPropTypes: KT,
        resetWarningCache: MT
      };
      return cT.PropTypes = cT, cT
    }
  },
  4917: (TT, kT, cT) => {
    TT.exports = cT(4919)()
  },
  4923: TT => {
    TT.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6657: (TT, kT, cT) => {
    function lT(TT, kT) {
      (null == kT || kT > TT.length) && (kT = TT.length);
      for (var cT = 0, lT = Array(kT); cT < kT; cT++) lT[cT] = TT[cT];
      return lT
    }

    function MT(TT, kT) {
      for (var cT = 0; cT < kT.length; cT++) {
        var lT = kT[cT];
        lT.enumerable = lT.enumerable || !1, lT.configurable = !0, "value" in lT && (lT.writable = !0), Object.defineProperty(TT, AT(lT.key), lT)
      }
    }

    function KT(TT, kT) {
      var cT = "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
      if (!cT) {
        if (Array.isArray(TT) || (cT = jT(TT)) || kT && TT && "number" == typeof TT.length) {
          cT && (TT = cT);
          var lT = 0,
            MT = function() {};
          return {
            s: MT,
            n: function() {
              return lT >= TT.length ? {
                done: !0
              } : {
                done: !1,
                value: TT[lT++]
              }
            },
            e: function(TT) {
              throw TT
            },
            f: MT
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var KT, OT = !0,
        yT = !1;
      return {
        s: function() {
          cT = cT.call(TT)
        },
        n: function() {
          var TT = cT.next();
          return OT = TT.done, TT
        },
        e: function(TT) {
          yT = !0, KT = TT
        },
        f: function() {
          try {
            OT || null == cT.return || cT.return()
          } finally {
            if (yT) throw KT
          }
        }
      }
    }

    function OT(TT, kT, cT) {
      return (kT = AT(kT)) in TT ? Object.defineProperty(TT, kT, {
        value: cT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[kT] = cT, TT
    }

    function yT(TT, kT) {
      var cT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var lT = Object.getOwnPropertySymbols(TT);
        kT && (lT = lT.filter((function(kT) {
          return Object.getOwnPropertyDescriptor(TT, kT).enumerable
        }))), cT.push.apply(cT, lT)
      }
      return cT
    }

    function fT(TT) {
      for (var kT = 1; kT < arguments.length; kT++) {
        var cT = null != arguments[kT] ? arguments[kT] : {};
        kT % 2 ? yT(Object(cT), !0).forEach((function(kT) {
          OT(TT, kT, cT[kT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(cT)) : yT(Object(cT)).forEach((function(kT) {
          Object.defineProperty(TT, kT, Object.getOwnPropertyDescriptor(cT, kT))
        }))
      }
      return TT
    }

    function xT(TT, kT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, kT) {
        var cT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != cT) {
          var lT, MT, KT, OT, yT = [],
            fT = !0,
            xT = !1;
          try {
            if (KT = (cT = cT.call(TT)).next, 0 === kT) {
              if (Object(cT) !== cT) return;
              fT = !1
            } else
              for (; !(fT = (lT = KT.call(cT)).done) && (yT.push(lT.value), yT.length !== kT); fT = !0);
          } catch (TT) {
            xT = !0, MT = TT
          } finally {
            try {
              if (!fT && null != cT.return && (OT = cT.return(), Object(OT) !== OT)) return
            } finally {
              if (xT) throw MT
            }
          }
          return yT
        }
      }(TT, kT) || jT(TT, kT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return lT(TT)
      }(TT) || function(TT) {
        if ("undefined" != typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || jT(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AT(TT) {
      var kT = function(TT, kT) {
        if ("object" != typeof TT || !TT) return TT;
        var cT = TT[Symbol.toPrimitive];
        if (void 0 !== cT) {
          var lT = cT.call(TT, kT || "default");
          if ("object" != typeof lT) return lT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === kT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == typeof kT ? kT : kT + ""
    }

    function CT(TT) {
      return CT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, CT(TT)
    }

    function jT(TT, kT) {
      if (TT) {
        if ("string" == typeof TT) return lT(TT, kT);
        var cT = {}.toString.call(TT).slice(8, -1);
        return "Object" === cT && TT.constructor && (cT = TT.constructor.name), "Map" === cT || "Set" === cT ? Array.from(TT) : "Arguments" === cT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cT) ? lT(TT, kT) : void 0
      }
    }
    cT.r(kT), cT.d(kT, {
      api: () => ic,
      config: () => lM,
      counter: () => CM,
      dom: () => KM,
      findIconDefinition: () => yM,
      icon: () => xM,
      layer: () => IM,
      library: () => MM,
      noAuto: () => cM,
      parse: () => OM,
      text: () => AM,
      toHtml: () => fM
    });
    var vT = function() {},
      tT = {},
      hT = {},
      NT = null,
      QT = {
        mark: vT,
        measure: vT
      };
    try {
      "undefined" !== typeof window && (tT = window), "undefined" !== typeof document && (hT = document), "undefined" !== typeof MutationObserver && (NT = MutationObserver), "undefined" !== typeof performance && (QT = performance)
    } catch (gT) {}
    var ST, DT, aT = (tT.navigator || {}).userAgent,
      FT = void 0 === aT ? "" : aT,
      rT = tT,
      PT = hT,
      wT = NT,
      mT = QT,
      bT = (rT.document, !!PT.documentElement && !!PT.head && "function" === typeof PT.addEventListener && "function" === typeof PT.createElement),
      zT = ~FT.indexOf("MSIE") || ~FT.indexOf("Trident/"),
      JT = {
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
      oT = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      HT = "classic",
      eT = "duotone",
      GT = "sharp",
      VT = "sharp-duotone",
      ET = "chisel",
      ZT = "etch",
      uT = "graphite",
      XT = "jelly",
      dT = "jelly-duo",
      LT = "jelly-fill",
      RT = "notdog",
      gT = "notdog-duo",
      UT = "slab",
      YT = "slab-press",
      BT = "thumbprint",
      WT = "utility",
      nT = "utility-duo",
      pT = "utility-fill",
      iT = "whiteboard",
      qT = [HT, eT, GT, VT, ET, ZT, uT, XT, dT, LT, RT, gT, UT, YT, BT, WT, nT, pT, iT],
      sT = (OT(OT(OT(OT(OT(OT(OT(OT(OT(OT(ST = {}, HT, "Classic"), eT, "Duotone"), GT, "Sharp"), VT, "Sharp Duotone"), ET, "Chisel"), ZT, "Etch"), uT, "Graphite"), XT, "Jelly"), dT, "Jelly Duo"), LT, "Jelly Fill"), OT(OT(OT(OT(OT(OT(OT(OT(OT(ST, RT, "Notdog"), gT, "Notdog Duo"), UT, "Slab"), YT, "Slab Press"), BT, "Thumbprint"), WT, "Utility"), nT, "Utility Duo"), pT, "Utility Fill"), iT, "Whiteboard"), new Map([
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
      Tk = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      kk = {
        fak: "kit",
        "fa-kit": "kit"
      },
      ck = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      lk = (OT(OT({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      Mk = {
        "kit-duotone": "fakd"
      },
      Kk = "duotone-group",
      Ok = "swap-opacity",
      yk = "primary",
      fk = "secondary",
      xk = (OT(OT(OT(OT(OT(OT(OT(OT(OT(OT(DT = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), OT(OT(OT(OT(OT(OT(OT(OT(OT(DT, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), OT(OT({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      Ik = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      Ak = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Ck = Ak.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      jk = [].concat(IT(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", Kk, Ok, yk, fk]).concat(Ak.map((function(TT) {
        return "".concat(TT, "x")
      }))).concat(Ck.map((function(TT) {
        return "w-".concat(TT)
      }))),
      vk = "___FONT_AWESOME___",
      tk = "svg-inline--fa",
      hk = "data-fa-i2svg",
      Nk = "data-fa-pseudo-element",
      Qk = "data-prefix",
      Sk = "data-icon",
      Dk = "fontawesome-i2svg",
      ak = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      Fk = ["::before", "::after", ":before", ":after"],
      rk = function() {
        try {
          return !0
        } catch (TT) {
          return !1
        }
      }();

    function Pk(TT) {
      return new Proxy(TT, {
        get: function(TT, kT) {
          return kT in TT ? TT[kT] : TT[HT]
        }
      })
    }
    var wk = fT({}, JT);
    wk[HT] = fT(fT(fT(fT({}, {
      "fa-duotone": "duotone"
    }), JT[HT]), kk), ck);
    var mk = Pk(wk),
      bk = fT({}, {
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
    bk[HT] = fT(fT(fT(fT({}, {
      duotone: "fad"
    }), bk[HT]), lk), Mk);
    var zk = Pk(bk),
      Jk = fT({}, xk);
    Jk[HT] = fT(fT({}, Jk[HT]), {
      fak: "fa-kit"
    });
    var Hk = Pk(Jk),
      ek = fT({}, {
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
    ek[HT] = fT(fT({}, ek[HT]), {
      "fa-kit": "fak"
    });
    Pk(ek);
    var Gk = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      Vk = "fa-layers-text",
      Ek = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Zk = (Pk(fT({}, {
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
      uk = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      Xk = [].concat(IT(["kit"]), IT(jk)),
      dk = rT.FontAwesomeConfig || {};
    if (PT && "function" === typeof PT.querySelector) {
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
      ].forEach((function(TT) {
        var kT = xT(TT, 2),
          cT = kT[0],
          lT = kT[1],
          MT = function(TT) {
            return "" === TT || "false" !== TT && ("true" === TT || TT)
          }(function(TT) {
            var kT = PT.querySelector("script[" + TT + "]");
            if (kT) return kT.getAttribute(TT)
          }(cT));
        void 0 !== MT && null !== MT && (dk[lT] = MT)
      }))
    }
    var Lk = {
      styleDefault: "solid",
      familyDefault: HT,
      cssPrefix: "fa",
      replacementClass: tk,
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
    dk.familyPrefix && (dk.cssPrefix = dk.familyPrefix);
    var Rk = fT(fT({}, Lk), dk);
    Rk.autoReplaceSvg || (Rk.observeMutations = !1);
    var gk = {};
    Object.keys(Lk).forEach((function(TT) {
      Object.defineProperty(gk, TT, {
        enumerable: !0,
        set: function(kT) {
          Rk[TT] = kT, Uk.forEach((function(TT) {
            return TT(gk)
          }))
        },
        get: function() {
          return Rk[TT]
        }
      })
    })), Object.defineProperty(gk, "familyPrefix", {
      enumerable: !0,
      set: function(TT) {
        Rk.cssPrefix = TT, Uk.forEach((function(TT) {
          return TT(gk)
        }))
      },
      get: function() {
        return Rk.cssPrefix
      }
    }), rT.FontAwesomeConfig = gk;
    var Uk = [];
    var Yk = 16,
      Bk = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function Wk() {
      for (var TT = 12, kT = ""; TT-- > 0;) kT += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return kT
    }

    function nk(TT) {
      for (var kT = [], cT = (TT || []).length >>> 0; cT--;) kT[cT] = TT[cT];
      return kT
    }

    function pk(TT) {
      return TT.classList ? nk(TT.classList) : (TT.getAttribute("class") || "").split(" ").filter((function(TT) {
        return TT
      }))
    }

    function ik(TT) {
      return "".concat(TT).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function qk(TT) {
      return Object.keys(TT || {}).reduce((function(kT, cT) {
        return kT + "".concat(cT, ": ").concat(TT[cT].trim(), ";")
      }), "")
    }

    function sk(TT) {
      return TT.size !== Bk.size || TT.x !== Bk.x || TT.y !== Bk.y || TT.rotate !== Bk.rotate || TT.flipX || TT.flipY
    }

    function Tc() {
      var TT = "fa",
        kT = tk,
        cT = gk.cssPrefix,
        lT = gk.replacementClass,
        MT = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (cT !== TT || lT !== kT) {
        var KT = new RegExp("\\.".concat(TT, "\\-"), "g"),
          OT = new RegExp("\\--".concat(TT, "\\-"), "g"),
          yT = new RegExp("\\.".concat(kT), "g");
        MT = MT.replace(KT, ".".concat(cT, "-")).replace(OT, "--".concat(cT, "-")).replace(yT, ".".concat(lT))
      }
      return MT
    }
    var kc = !1;

    function cc() {
      gk.autoAddCss && !kc && (! function(TT) {
        if (TT && bT) {
          var kT = PT.createElement("style");
          kT.setAttribute("type", "text/css"), kT.innerHTML = TT;
          for (var cT = PT.head.childNodes, lT = null, MT = cT.length - 1; MT > -1; MT--) {
            var KT = cT[MT],
              OT = (KT.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(OT) > -1 && (lT = KT)
          }
          PT.head.insertBefore(kT, lT)
        }
      }(Tc()), kc = !0)
    }
    var lc = {
        mixout: function() {
          return {
            dom: {
              css: Tc,
              insertCss: cc
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              cc()
            },
            beforeI2svg: function() {
              cc()
            }
          }
        }
      },
      Mc = rT || {};
    Mc[vk] || (Mc[vk] = {}), Mc[vk].styles || (Mc[vk].styles = {}), Mc[vk].hooks || (Mc[vk].hooks = {}), Mc[vk].shims || (Mc[vk].shims = []);
    var Kc = Mc[vk],
      Oc = [],
      yc = function() {
        PT.removeEventListener("DOMContentLoaded", yc), fc = 1, Oc.map((function(TT) {
          return TT()
        }))
      },
      fc = !1;

    function xc(TT) {
      var kT = TT.tag,
        cT = TT.attributes,
        lT = void 0 === cT ? {} : cT,
        MT = TT.children,
        KT = void 0 === MT ? [] : MT;
      return "string" === typeof TT ? ik(TT) : "<".concat(kT, " ").concat(function(TT) {
        return Object.keys(TT || {}).reduce((function(kT, cT) {
          return kT + "".concat(cT, '="').concat(ik(TT[cT]), '" ')
        }), "").trim()
      }(lT), ">").concat(KT.map(xc).join(""), "</").concat(kT, ">")
    }

    function Ic(TT, kT, cT) {
      if (TT && TT[kT] && TT[kT][cT]) return {
        prefix: kT,
        iconName: cT,
        icon: TT[kT][cT]
      }
    }
    bT && ((fc = (PT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(PT.readyState)) || PT.addEventListener("DOMContentLoaded", yc));
    var Ac = function(TT, kT, cT, lT) {
      var MT, KT, OT, yT = Object.keys(TT),
        fT = yT.length,
        xT = void 0 !== lT ? function(TT, kT) {
          return function(cT, lT, MT, KT) {
            return TT.call(kT, cT, lT, MT, KT)
          }
        }(kT, lT) : kT;
      for (void 0 === cT ? (MT = 1, OT = TT[yT[0]]) : (MT = 0, OT = cT); MT < fT; MT++) OT = xT(OT, TT[KT = yT[MT]], KT, TT);
      return OT
    };

    function Cc(TT) {
      return 1 !== IT(TT).length ? null : TT.codePointAt(0).toString(16)
    }

    function jc(TT) {
      return Object.keys(TT).reduce((function(kT, cT) {
        var lT = TT[cT];
        return !!lT.icon ? kT[lT.iconName] = lT.icon : kT[cT] = lT, kT
      }), {})
    }

    function vc(TT, kT) {
      var cT = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        lT = void 0 !== cT && cT,
        MT = jc(kT);
      "function" !== typeof Kc.hooks.addPack || lT ? Kc.styles[TT] = fT(fT({}, Kc.styles[TT] || {}), MT) : Kc.hooks.addPack(TT, jc(kT)), "fas" === TT && vc("fa", kT)
    }
    var tc = Kc.styles,
      hc = Kc.shims,
      Nc = Object.keys(Hk),
      Qc = Nc.reduce((function(TT, kT) {
        return TT[kT] = Object.keys(Hk[kT]), TT
      }), {}),
      Sc = null,
      Dc = {},
      ac = {},
      Fc = {},
      rc = {},
      Pc = {};

    function wc(TT, kT) {
      var cT, lT = kT.split("-"),
        MT = lT[0],
        KT = lT.slice(1).join("-");
      return MT !== TT || "" === KT || (cT = KT, ~Xk.indexOf(cT)) ? null : KT
    }
    var mc, bc = function() {
      var TT = function(TT) {
        return Ac(tc, (function(kT, cT, lT) {
          return kT[lT] = Ac(cT, TT, {}), kT
        }), {})
      };
      Dc = TT((function(TT, kT, cT) {
        (kT[3] && (TT[kT[3]] = cT), kT[2]) && kT[2].filter((function(TT) {
          return "number" === typeof TT
        })).forEach((function(kT) {
          TT[kT.toString(16)] = cT
        }));
        return TT
      })), ac = TT((function(TT, kT, cT) {
        (TT[cT] = cT, kT[2]) && kT[2].filter((function(TT) {
          return "string" === typeof TT
        })).forEach((function(kT) {
          TT[kT] = cT
        }));
        return TT
      })), Pc = TT((function(TT, kT, cT) {
        var lT = kT[2];
        return TT[cT] = cT, lT.forEach((function(kT) {
          TT[kT] = cT
        })), TT
      }));
      var kT = "far" in tc || gk.autoFetchSvg,
        cT = Ac(hc, (function(TT, cT) {
          var lT = cT[0],
            MT = cT[1],
            KT = cT[2];
          return "far" !== MT || kT || (MT = "fas"), "string" === typeof lT && (TT.names[lT] = {
            prefix: MT,
            iconName: KT
          }), "number" === typeof lT && (TT.unicodes[lT.toString(16)] = {
            prefix: MT,
            iconName: KT
          }), TT
        }), {
          names: {},
          unicodes: {}
        });
      Fc = cT.names, rc = cT.unicodes, Sc = ec(gk.styleDefault, {
        family: gk.familyDefault
      })
    };

    function zc(TT, kT) {
      return (Dc[TT] || {})[kT]
    }

    function Jc(TT, kT) {
      return (Pc[TT] || {})[kT]
    }

    function oc(TT) {
      return Fc[TT] || {
        prefix: null,
        iconName: null
      }
    }

    function Hc() {
      return Sc
    }
    mc = function(TT) {
      Sc = ec(TT.styleDefault, {
        family: gk.familyDefault
      })
    }, Uk.push(mc), bc();

    function ec(TT) {
      var kT = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        cT = void 0 === kT ? HT : kT,
        lT = mk[cT][TT];
      if (cT === eT && !TT) return "fad";
      var MT = zk[cT][TT] || zk[cT][lT],
        KT = TT in Kc.styles ? TT : null;
      return MT || KT || null
    }

    function Gc(TT) {
      return TT.sort().filter((function(TT, kT, cT) {
        return cT.indexOf(TT) === kT
      }))
    }
    var Vc = Ik.concat(Tk);

    function Ec(TT) {
      var kT = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        cT = void 0 !== kT && kT,
        lT = null,
        MT = Gc(TT.filter((function(TT) {
          return Vc.includes(TT)
        }))),
        KT = Gc(TT.filter((function(TT) {
          return !Vc.includes(TT)
        }))),
        OT = xT(MT.filter((function(TT) {
          return lT = TT, !oT.includes(TT)
        })), 1)[0],
        yT = void 0 === OT ? null : OT,
        IT = function(TT) {
          var kT = HT,
            cT = Nc.reduce((function(TT, kT) {
              return TT[kT] = "".concat(gk.cssPrefix, "-").concat(kT), TT
            }), {});
          return qT.forEach((function(lT) {
            (TT.includes(cT[lT]) || TT.some((function(TT) {
              return Qc[lT].includes(TT)
            }))) && (kT = lT)
          })), kT
        }(MT),
        AT = fT(fT({}, function(TT) {
          var kT = [],
            cT = null;
          return TT.forEach((function(TT) {
            var lT = wc(gk.cssPrefix, TT);
            lT ? cT = lT : TT && kT.push(TT)
          })), {
            iconName: cT,
            rest: kT
          }
        }(KT)), {}, {
          prefix: ec(yT, {
            family: IT
          })
        });
      return fT(fT(fT({}, AT), function(TT) {
        var kT = TT.values,
          cT = TT.family,
          lT = TT.canonical,
          MT = TT.givenPrefix,
          KT = void 0 === MT ? "" : MT,
          OT = TT.styles,
          yT = void 0 === OT ? {} : OT,
          fT = TT.config,
          xT = void 0 === fT ? {} : fT,
          IT = cT === eT,
          AT = kT.includes("fa-duotone") || kT.includes("fad"),
          CT = "duotone" === xT.familyDefault,
          jT = "fad" === lT.prefix || "fa-duotone" === lT.prefix;
        !IT && (AT || CT || jT) && (lT.prefix = "fad");
        (kT.includes("fa-brands") || kT.includes("fab")) && (lT.prefix = "fab");
        if (!lT.prefix && Zc.includes(cT)) {
          if (Object.keys(yT).find((function(TT) {
              return uc.includes(TT)
            })) || xT.autoFetchSvg) {
            var vT = sT.get(cT).defaultShortPrefixId;
            lT.prefix = vT, lT.iconName = Jc(lT.prefix, lT.iconName) || lT.iconName
          }
        }
        "fa" !== lT.prefix && "fa" !== KT || (lT.prefix = Hc() || "fas");
        return lT
      }({
        values: TT,
        family: IT,
        styles: tc,
        config: gk,
        canonical: AT,
        givenPrefix: lT
      })), function(TT, kT, cT) {
        var lT = cT.prefix,
          MT = cT.iconName;
        if (TT || !lT || !MT) return {
          prefix: lT,
          iconName: MT
        };
        var KT = "fa" === kT ? oc(MT) : {},
          OT = Jc(lT, MT);
        MT = KT.iconName || OT || MT, "far" !== (lT = KT.prefix || lT) || tc.far || !tc.fas || gk.autoFetchSvg || (lT = "fas");
        return {
          prefix: lT,
          iconName: MT
        }
      }(cT, lT, AT))
    }
    var Zc = qT.filter((function(TT) {
        return TT !== HT || TT !== eT
      })),
      uc = Object.keys(xk).filter((function(TT) {
        return TT !== HT
      })).map((function(TT) {
        return Object.keys(xk[TT])
      })).flat();
    var Xc = function() {
        return function(TT, kT, cT) {
          return kT && MT(TT.prototype, kT), cT && MT(TT, cT), Object.defineProperty(TT, "prototype", {
            writable: !1
          }), TT
        }((function TT() {
          ! function(TT, kT) {
            if (!(TT instanceof kT)) throw new TypeError("Cannot call a class as a function")
          }(this, TT), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var TT = this, kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
            var MT = cT.reduce(this._pullDefinitions, {});
            Object.keys(MT).forEach((function(kT) {
              TT.definitions[kT] = fT(fT({}, TT.definitions[kT] || {}), MT[kT]), vc(kT, MT[kT]);
              var cT = Hk[HT][kT];
              cT && vc(cT, MT[kT]), bc()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(TT, kT) {
            var cT = kT.prefix && kT.iconName && kT.icon ? {
              0: kT
            } : kT;
            return Object.keys(cT).map((function(kT) {
              var lT = cT[kT],
                MT = lT.prefix,
                KT = lT.iconName,
                OT = lT.icon,
                yT = OT[2];
              TT[MT] || (TT[MT] = {}), yT.length > 0 && yT.forEach((function(kT) {
                "string" === typeof kT && (TT[MT][kT] = OT)
              })), TT[MT][KT] = OT
            })), TT
          }
        }])
      }(),
      dc = [],
      Lc = {},
      Rc = {},
      gc = Object.keys(Rc);

    function Uc(TT, kT) {
      for (var cT = arguments.length, lT = new Array(cT > 2 ? cT - 2 : 0), MT = 2; MT < cT; MT++) lT[MT - 2] = arguments[MT];
      return (Lc[TT] || []).forEach((function(TT) {
        kT = TT.apply(null, [kT].concat(lT))
      })), kT
    }

    function Yc(TT) {
      for (var kT = arguments.length, cT = new Array(kT > 1 ? kT - 1 : 0), lT = 1; lT < kT; lT++) cT[lT - 1] = arguments[lT];
      (Lc[TT] || []).forEach((function(TT) {
        TT.apply(null, cT)
      }))
    }

    function Bc() {
      var TT = arguments[0],
        kT = Array.prototype.slice.call(arguments, 1);
      return Rc[TT] ? Rc[TT].apply(null, kT) : void 0
    }

    function Wc(TT) {
      "fa" === TT.prefix && (TT.prefix = "fas");
      var kT = TT.iconName,
        cT = TT.prefix || Hc();
      if (kT) return kT = Jc(cT, kT) || kT, Ic(nc.definitions, cT, kT) || Ic(Kc.styles, cT, kT)
    }
    var nc = new Xc,
      pc = {
        i2svg: function() {
          var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return bT ? (Yc("beforeI2svg", TT), Bc("pseudoElements2svg", TT), Bc("i2svg", TT)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var TT, kT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            cT = kT.autoReplaceSvgRoot;
          !1 === gk.autoReplaceSvg && (gk.autoReplaceSvg = !0), gk.observeMutations = !0, TT = function() {
            qc({
              autoReplaceSvgRoot: cT
            }), Yc("watch", kT)
          }, bT && (fc ? setTimeout(TT, 0) : Oc.push(TT))
        }
      },
      ic = {
        noAuto: function() {
          gk.autoReplaceSvg = !1, gk.observeMutations = !1, Yc("noAuto")
        },
        config: gk,
        dom: pc,
        parse: {
          icon: function(TT) {
            if (null === TT) return null;
            if ("object" === CT(TT) && TT.prefix && TT.iconName) return {
              prefix: TT.prefix,
              iconName: Jc(TT.prefix, TT.iconName) || TT.iconName
            };
            if (Array.isArray(TT) && 2 === TT.length) {
              var kT = 0 === TT[1].indexOf("fa-") ? TT[1].slice(3) : TT[1],
                cT = ec(TT[0]);
              return {
                prefix: cT,
                iconName: Jc(cT, kT) || kT
              }
            }
            if ("string" === typeof TT && (TT.indexOf("".concat(gk.cssPrefix, "-")) > -1 || TT.match(Gk))) {
              var lT = Ec(TT.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: lT.prefix || Hc(),
                iconName: Jc(lT.prefix, lT.iconName) || lT.iconName
              }
            }
            if ("string" === typeof TT) {
              var MT = Hc();
              return {
                prefix: MT,
                iconName: Jc(MT, TT) || TT
              }
            }
          }
        },
        library: nc,
        findIconDefinition: Wc,
        toHtml: xc
      },
      qc = function() {
        var TT = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          kT = void 0 === TT ? PT : TT;
        (Object.keys(Kc.styles).length > 0 || gk.autoFetchSvg) && bT && gk.autoReplaceSvg && ic.dom.i2svg({
          node: kT
        })
      };

    function sc(TT, kT) {
      return Object.defineProperty(TT, "abstract", {
        get: kT
      }), Object.defineProperty(TT, "html", {
        get: function() {
          return TT.abstract.map((function(TT) {
            return xc(TT)
          }))
        }
      }), Object.defineProperty(TT, "node", {
        get: function() {
          if (bT) {
            var kT = PT.createElement("div");
            return kT.innerHTML = TT.html, kT.children
          }
        }
      }), TT
    }

    function Tl(TT) {
      var kT = TT.icons,
        cT = kT.main,
        lT = kT.mask,
        MT = TT.prefix,
        KT = TT.iconName,
        OT = TT.transform,
        yT = TT.symbol,
        xT = TT.maskId,
        IT = TT.extra,
        AT = TT.watchable,
        CT = void 0 !== AT && AT,
        jT = lT.found ? lT : cT,
        vT = jT.width,
        tT = jT.height,
        hT = [gk.replacementClass, KT ? "".concat(gk.cssPrefix, "-").concat(KT) : ""].filter((function(TT) {
          return -1 === IT.classes.indexOf(TT)
        })).filter((function(TT) {
          return "" !== TT || !!TT
        })).concat(IT.classes).join(" "),
        NT = {
          children: [],
          attributes: fT(fT({}, IT.attributes), {}, {
            "data-prefix": MT,
            "data-icon": KT,
            class: hT,
            role: IT.attributes.role || "img",
            viewBox: "0 0 ".concat(vT, " ").concat(tT)
          })
        };
      (function(TT) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(kT) {
          return kT in TT
        }))
      })(IT.attributes) || IT.attributes["aria-hidden"] || (NT.attributes["aria-hidden"] = "true"), CT && (NT.attributes[hk] = "");
      var QT = fT(fT({}, NT), {}, {
          prefix: MT,
          iconName: KT,
          main: cT,
          mask: lT,
          maskId: xT,
          transform: OT,
          symbol: yT,
          styles: fT({}, IT.styles)
        }),
        ST = lT.found && cT.found ? Bc("generateAbstractMask", QT) || {
          children: [],
          attributes: {}
        } : Bc("generateAbstractIcon", QT) || {
          children: [],
          attributes: {}
        },
        DT = ST.children,
        aT = ST.attributes;
      return QT.children = DT, QT.attributes = aT, yT ? function(TT) {
        var kT = TT.prefix,
          cT = TT.iconName,
          lT = TT.children,
          MT = TT.attributes,
          KT = TT.symbol,
          OT = !0 === KT ? "".concat(kT, "-").concat(gk.cssPrefix, "-").concat(cT) : KT;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: fT(fT({}, MT), {}, {
              id: OT
            }),
            children: lT
          }]
        }]
      }(QT) : function(TT) {
        var kT = TT.children,
          cT = TT.main,
          lT = TT.mask,
          MT = TT.attributes,
          KT = TT.styles,
          OT = TT.transform;
        if (sk(OT) && cT.found && !lT.found) {
          var yT = {
            x: cT.width / cT.height / 2,
            y: .5
          };
          MT.style = qk(fT(fT({}, KT), {}, {
            "transform-origin": "".concat(yT.x + OT.x / 16, "em ").concat(yT.y + OT.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: MT,
          children: kT
        }]
      }(QT)
    }

    function kl(TT) {
      var kT = TT.content,
        cT = TT.width,
        lT = TT.height,
        MT = TT.transform,
        KT = TT.extra,
        OT = TT.watchable,
        yT = void 0 !== OT && OT,
        xT = fT(fT({}, KT.attributes), {}, {
          class: KT.classes.join(" ")
        });
      yT && (xT[hk] = "");
      var IT = fT({}, KT.styles);
      sk(MT) && (IT.transform = function(TT) {
        var kT = TT.transform,
          cT = TT.width,
          lT = void 0 === cT ? 16 : cT,
          MT = TT.height,
          KT = void 0 === MT ? 16 : MT,
          OT = TT.startCentered,
          yT = void 0 !== OT && OT,
          fT = "";
        return fT += yT && zT ? "translate(".concat(kT.x / Yk - lT / 2, "em, ").concat(kT.y / Yk - KT / 2, "em) ") : yT ? "translate(calc(-50% + ".concat(kT.x / Yk, "em), calc(-50% + ").concat(kT.y / Yk, "em)) ") : "translate(".concat(kT.x / Yk, "em, ").concat(kT.y / Yk, "em) "), fT += "scale(".concat(kT.size / Yk * (kT.flipX ? -1 : 1), ", ").concat(kT.size / Yk * (kT.flipY ? -1 : 1), ") "), fT + "rotate(".concat(kT.rotate, "deg) ")
      }({
        transform: MT,
        startCentered: !0,
        width: cT,
        height: lT
      }), IT["-webkit-transform"] = IT.transform);
      var AT = qk(IT);
      AT.length > 0 && (xT.style = AT);
      var CT = [];
      return CT.push({
        tag: "span",
        attributes: xT,
        children: [kT]
      }), CT
    }
    var cl = Kc.styles;

    function ll(TT) {
      var kT = TT[0],
        cT = TT[1],
        lT = xT(TT.slice(4), 1)[0];
      return {
        found: !0,
        width: kT,
        height: cT,
        icon: Array.isArray(lT) ? {
          tag: "g",
          attributes: {
            class: "".concat(gk.cssPrefix, "-").concat(uk.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(gk.cssPrefix, "-").concat(uk.SECONDARY),
              fill: "currentColor",
              d: lT[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(gk.cssPrefix, "-").concat(uk.PRIMARY),
              fill: "currentColor",
              d: lT[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: lT
          }
        }
      }
    }
    var Ml = {
      found: !1,
      width: 512,
      height: 512
    };

    function Kl(TT, kT) {
      var cT = kT;
      return "fa" === kT && null !== gk.styleDefault && (kT = Hc()), new Promise((function(lT, MT) {
        if ("fa" === cT) {
          var KT = oc(TT) || {};
          TT = KT.iconName || TT, kT = KT.prefix || kT
        }
        if (TT && kT && cl[kT] && cl[kT][TT]) return lT(ll(cl[kT][TT]));
        ! function(TT, kT) {
          rk || gk.showMissingIcons || !TT || console.error('Icon with name "'.concat(TT, '" and prefix "').concat(kT, '" is missing.'))
        }(TT, kT), lT(fT(fT({}, Ml), {}, {
          icon: gk.showMissingIcons && TT && Bc("missingIconAbstract") || {}
        }))
      }))
    }
    var Ol = function() {},
      yl = gk.measurePerformance && mT && mT.mark && mT.measure ? mT : {
        mark: Ol,
        measure: Ol
      },
      fl = 'FA "7.2.0"',
      xl = function(TT) {
        yl.mark("".concat(fl, " ").concat(TT, " ends")), yl.measure("".concat(fl, " ").concat(TT), "".concat(fl, " ").concat(TT, " begins"), "".concat(fl, " ").concat(TT, " ends"))
      },
      Il = function(TT) {
        return yl.mark("".concat(fl, " ").concat(TT, " begins")),
          function() {
            return xl(TT)
          }
      },
      Al = function() {};

    function Cl(TT) {
      return "string" === typeof(TT.getAttribute ? TT.getAttribute(hk) : null)
    }

    function jl(TT) {
      return PT.createElementNS("http://www.w3.org/2000/svg", TT)
    }

    function vl(TT) {
      return PT.createElement(TT)
    }

    function tl(TT) {
      var kT = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        cT = void 0 === kT ? "svg" === TT.tag ? jl : vl : kT;
      if ("string" === typeof TT) return PT.createTextNode(TT);
      var lT = cT(TT.tag);
      return Object.keys(TT.attributes || []).forEach((function(kT) {
        lT.setAttribute(kT, TT.attributes[kT])
      })), (TT.children || []).forEach((function(TT) {
        lT.appendChild(tl(TT, {
          ceFn: cT
        }))
      })), lT
    }
    var hl = {
      replace: function(TT) {
        var kT = TT[0];
        if (kT.parentNode)
          if (TT[1].forEach((function(TT) {
              kT.parentNode.insertBefore(tl(TT), kT)
            })), null === kT.getAttribute(hk) && gk.keepOriginalSource) {
            var cT = PT.createComment(function(TT) {
              var kT = " ".concat(TT.outerHTML, " ");
              return "".concat(kT, "Font Awesome fontawesome.com ")
            }(kT));
            kT.parentNode.replaceChild(cT, kT)
          } else kT.remove()
      },
      nest: function(TT) {
        var kT = TT[0],
          cT = TT[1];
        if (~pk(kT).indexOf(gk.replacementClass)) return hl.replace(TT);
        var lT = new RegExp("".concat(gk.cssPrefix, "-.*"));
        if (delete cT[0].attributes.id, cT[0].attributes.class) {
          var MT = cT[0].attributes.class.split(" ").reduce((function(TT, kT) {
            return kT === gk.replacementClass || kT.match(lT) ? TT.toSvg.push(kT) : TT.toNode.push(kT), TT
          }), {
            toNode: [],
            toSvg: []
          });
          cT[0].attributes.class = MT.toSvg.join(" "), 0 === MT.toNode.length ? kT.removeAttribute("class") : kT.setAttribute("class", MT.toNode.join(" "))
        }
        var KT = cT.map((function(TT) {
          return xc(TT)
        })).join("\n");
        kT.setAttribute(hk, ""), kT.innerHTML = KT
      }
    };

    function Nl(TT) {
      TT()
    }

    function Ql(TT, kT) {
      var cT = "function" === typeof kT ? kT : Al;
      if (0 === TT.length) cT();
      else {
        var lT = Nl;
        "async" === gk.mutateApproach && (lT = rT.requestAnimationFrame || Nl), lT((function() {
          var kT = !0 === gk.autoReplaceSvg ? hl.replace : hl[gk.autoReplaceSvg] || hl.replace,
            lT = Il("mutate");
          TT.map(kT), lT(), cT()
        }))
      }
    }
    var Sl = !1;

    function Dl() {
      Sl = !0
    }

    function al() {
      Sl = !1
    }
    var Fl = null;

    function rl(TT) {
      if (wT && gk.observeMutations) {
        var kT = TT.treeCallback,
          cT = void 0 === kT ? Al : kT,
          lT = TT.nodeCallback,
          MT = void 0 === lT ? Al : lT,
          KT = TT.pseudoElementsCallback,
          OT = void 0 === KT ? Al : KT,
          yT = TT.observeMutationsRoot,
          fT = void 0 === yT ? PT : yT;
        Fl = new wT((function(TT) {
          if (!Sl) {
            var kT = Hc();
            nk(TT).forEach((function(TT) {
              if ("childList" === TT.type && TT.addedNodes.length > 0 && !Cl(TT.addedNodes[0]) && (gk.searchPseudoElements && OT(TT.target), cT(TT.target)), "attributes" === TT.type && TT.target.parentNode && gk.searchPseudoElements && OT([TT.target], !0), "attributes" === TT.type && Cl(TT.target) && ~Zk.indexOf(TT.attributeName))
                if ("class" === TT.attributeName && function(TT) {
                    var kT = TT.getAttribute ? TT.getAttribute(Qk) : null,
                      cT = TT.getAttribute ? TT.getAttribute(Sk) : null;
                    return kT && cT
                  }(TT.target)) {
                  var lT = Ec(pk(TT.target)),
                    KT = lT.prefix,
                    yT = lT.iconName;
                  TT.target.setAttribute(Qk, KT || kT), yT && TT.target.setAttribute(Sk, yT)
                } else(fT = TT.target) && fT.classList && fT.classList.contains && fT.classList.contains(gk.replacementClass) && MT(TT.target);
              var fT
            }))
          }
        })), bT && Fl.observe(fT, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function Pl(TT) {
      var kT, cT, lT = TT.getAttribute("data-prefix"),
        MT = TT.getAttribute("data-icon"),
        KT = void 0 !== TT.innerText ? TT.innerText.trim() : "",
        OT = Ec(pk(TT));
      return OT.prefix || (OT.prefix = Hc()), lT && MT && (OT.prefix = lT, OT.iconName = MT), OT.iconName && OT.prefix || (OT.prefix && KT.length > 0 && (OT.iconName = (kT = OT.prefix, cT = TT.innerText, (ac[kT] || {})[cT] || zc(OT.prefix, Cc(TT.innerText)))), !OT.iconName && gk.autoFetchSvg && TT.firstChild && TT.firstChild.nodeType === Node.TEXT_NODE && (OT.iconName = TT.firstChild.data)), OT
    }

    function wl(TT) {
      var kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        cT = Pl(TT),
        lT = cT.iconName,
        MT = cT.prefix,
        KT = cT.rest,
        OT = function(TT) {
          return nk(TT.attributes).reduce((function(TT, kT) {
            return "class" !== TT.name && "style" !== TT.name && (TT[kT.name] = kT.value), TT
          }), {})
        }(TT),
        yT = Uc("parseNodeAttributes", {}, TT),
        xT = kT.styleParser ? function(TT) {
          var kT = TT.getAttribute("style"),
            cT = [];
          return kT && (cT = kT.split(";").reduce((function(TT, kT) {
            var cT = kT.split(":"),
              lT = cT[0],
              MT = cT.slice(1);
            return lT && MT.length > 0 && (TT[lT] = MT.join(":").trim()), TT
          }), {})), cT
        }(TT) : [];
      return fT({
        iconName: lT,
        prefix: MT,
        transform: Bk,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: KT,
          styles: xT,
          attributes: OT
        }
      }, yT)
    }
    var ml = Kc.styles;

    function bl(TT) {
      var kT = "nest" === gk.autoReplaceSvg ? wl(TT, {
        styleParser: !1
      }) : wl(TT);
      return ~kT.extra.classes.indexOf(Vk) ? Bc("generateLayersText", TT, kT) : Bc("generateSvgReplacementMutation", TT, kT)
    }

    function zl(TT) {
      var kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!bT) return Promise.resolve();
      var cT = PT.documentElement.classList,
        lT = function(TT) {
          return cT.add("".concat(Dk, "-").concat(TT))
        },
        MT = function(TT) {
          return cT.remove("".concat(Dk, "-").concat(TT))
        },
        KT = gk.autoFetchSvg ? [].concat(IT(Tk), IT(Ik)) : oT.concat(Object.keys(ml));
      KT.includes("fa") || KT.push("fa");
      var OT = [".".concat(Vk, ":not([").concat(hk, "])")].concat(KT.map((function(TT) {
        return ".".concat(TT, ":not([").concat(hk, "])")
      }))).join(", ");
      if (0 === OT.length) return Promise.resolve();
      var yT = [];
      try {
        yT = nk(TT.querySelectorAll(OT))
      } catch (AT) {}
      if (!(yT.length > 0)) return Promise.resolve();
      lT("pending"), MT("complete");
      var fT = Il("onTree"),
        xT = yT.reduce((function(TT, kT) {
          try {
            var cT = bl(kT);
            cT && TT.push(cT)
          } catch (AT) {
            rk || "MissingIcon" === AT.name && console.error(AT)
          }
          return TT
        }), []);
      return new Promise((function(TT, cT) {
        Promise.all(xT).then((function(cT) {
          Ql(cT, (function() {
            lT("active"), lT("complete"), MT("pending"), "function" === typeof kT && kT(), fT(), TT()
          }))
        })).catch((function(TT) {
          fT(), cT(TT)
        }))
      }))
    }

    function Jl(TT) {
      var kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      bl(TT).then((function(TT) {
        TT && Ql([TT], kT)
      }))
    }
    var ol = function(TT) {
        var kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cT = kT.transform,
          lT = void 0 === cT ? Bk : cT,
          MT = kT.symbol,
          KT = void 0 !== MT && MT,
          OT = kT.mask,
          yT = void 0 === OT ? null : OT,
          xT = kT.maskId,
          IT = void 0 === xT ? null : xT,
          AT = kT.classes,
          CT = void 0 === AT ? [] : AT,
          jT = kT.attributes,
          vT = void 0 === jT ? {} : jT,
          tT = kT.styles,
          hT = void 0 === tT ? {} : tT;
        if (TT) {
          var NT = TT.prefix,
            QT = TT.iconName,
            ST = TT.icon;
          return sc(fT({
            type: "icon"
          }, TT), (function() {
            return Yc("beforeDOMElementCreation", {
              iconDefinition: TT,
              params: kT
            }), Tl({
              icons: {
                main: ll(ST),
                mask: yT ? ll(yT.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: NT,
              iconName: QT,
              transform: fT(fT({}, Bk), lT),
              symbol: KT,
              maskId: IT,
              extra: {
                attributes: vT,
                styles: hT,
                classes: CT
              }
            })
          }))
        }
      },
      Hl = {
        mixout: function() {
          return {
            icon: (TT = ol, function(kT) {
              var cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                lT = (kT || {}).icon ? kT : Wc(kT || {}),
                MT = cT.mask;
              return MT && (MT = (MT || {}).icon ? MT : Wc(MT || {})), TT(lT, fT(fT({}, cT), {}, {
                mask: MT
              }))
            })
          };
          var TT
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(TT) {
              return TT.treeCallback = zl, TT.nodeCallback = Jl, TT
            }
          }
        },
        provides: function(TT) {
          TT.i2svg = function(TT) {
            var kT = TT.node,
              cT = void 0 === kT ? PT : kT,
              lT = TT.callback;
            return zl(cT, void 0 === lT ? function() {} : lT)
          }, TT.generateSvgReplacementMutation = function(TT, kT) {
            var cT = kT.iconName,
              lT = kT.prefix,
              MT = kT.transform,
              KT = kT.symbol,
              OT = kT.mask,
              yT = kT.maskId,
              fT = kT.extra;
            return new Promise((function(kT, IT) {
              Promise.all([Kl(cT, lT), OT.iconName ? Kl(OT.iconName, OT.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(OT) {
                var IT = xT(OT, 2),
                  AT = IT[0],
                  CT = IT[1];
                kT([TT, Tl({
                  icons: {
                    main: AT,
                    mask: CT
                  },
                  prefix: lT,
                  iconName: cT,
                  transform: MT,
                  symbol: KT,
                  maskId: yT,
                  extra: fT,
                  watchable: !0
                })])
              })).catch(IT)
            }))
          }, TT.generateAbstractIcon = function(TT) {
            var kT, cT = TT.children,
              lT = TT.attributes,
              MT = TT.main,
              KT = TT.transform,
              OT = qk(TT.styles);
            return OT.length > 0 && (lT.style = OT), sk(KT) && (kT = Bc("generateAbstractTransformGrouping", {
              main: MT,
              transform: KT,
              containerWidth: MT.width,
              iconWidth: MT.width
            })), cT.push(kT || MT.icon), {
              children: cT,
              attributes: lT
            }
          }
        }
      },
      el = {
        mixout: function() {
          return {
            layer: function(TT) {
              var kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                cT = kT.classes,
                lT = void 0 === cT ? [] : cT;
              return sc({
                type: "layer"
              }, (function() {
                Yc("beforeDOMElementCreation", {
                  assembler: TT,
                  params: kT
                });
                var cT = [];
                return TT((function(TT) {
                  Array.isArray(TT) ? TT.map((function(TT) {
                    cT = cT.concat(TT.abstract)
                  })) : cT = cT.concat(TT.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(gk.cssPrefix, "-layers")].concat(IT(lT)).join(" ")
                  },
                  children: cT
                }]
              }))
            }
          }
        }
      },
      Gl = {
        mixout: function() {
          return {
            counter: function(TT) {
              var kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                cT = kT.title,
                lT = void 0 === cT ? null : cT,
                MT = kT.classes,
                KT = void 0 === MT ? [] : MT,
                OT = kT.attributes,
                yT = void 0 === OT ? {} : OT,
                xT = kT.styles,
                AT = void 0 === xT ? {} : xT;
              return sc({
                type: "counter",
                content: TT
              }, (function() {
                return Yc("beforeDOMElementCreation", {
                    content: TT,
                    params: kT
                  }),
                  function(TT) {
                    var kT = TT.content,
                      cT = TT.extra,
                      lT = fT(fT({}, cT.attributes), {}, {
                        class: cT.classes.join(" ")
                      }),
                      MT = qk(cT.styles);
                    MT.length > 0 && (lT.style = MT);
                    var KT = [];
                    return KT.push({
                      tag: "span",
                      attributes: lT,
                      children: [kT]
                    }), KT
                  }({
                    content: TT.toString(),
                    title: lT,
                    extra: {
                      attributes: yT,
                      styles: AT,
                      classes: ["".concat(gk.cssPrefix, "-layers-counter")].concat(IT(KT))
                    }
                  })
              }))
            }
          }
        }
      },
      Vl = {
        mixout: function() {
          return {
            text: function(TT) {
              var kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                cT = kT.transform,
                lT = void 0 === cT ? Bk : cT,
                MT = kT.classes,
                KT = void 0 === MT ? [] : MT,
                OT = kT.attributes,
                yT = void 0 === OT ? {} : OT,
                xT = kT.styles,
                AT = void 0 === xT ? {} : xT;
              return sc({
                type: "text",
                content: TT
              }, (function() {
                return Yc("beforeDOMElementCreation", {
                  content: TT,
                  params: kT
                }), kl({
                  content: TT,
                  transform: fT(fT({}, Bk), lT),
                  extra: {
                    attributes: yT,
                    styles: AT,
                    classes: ["".concat(gk.cssPrefix, "-layers-text")].concat(IT(KT))
                  }
                })
              }))
            }
          }
        },
        provides: function(TT) {
          TT.generateLayersText = function(TT, kT) {
            var cT = kT.transform,
              lT = kT.extra,
              MT = null,
              KT = null;
            if (zT) {
              var OT = parseInt(getComputedStyle(TT).fontSize, 10),
                yT = TT.getBoundingClientRect();
              MT = yT.width / OT, KT = yT.height / OT
            }
            return Promise.resolve([TT, kl({
              content: TT.innerHTML,
              width: MT,
              height: KT,
              transform: cT,
              extra: lT,
              watchable: !0
            })])
          }
        }
      },
      El = new RegExp('"', "ug"),
      Zl = [1105920, 1112319],
      ul = fT(fT(fT(fT({}, {
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
      Xl = Object.keys(ul).reduce((function(TT, kT) {
        return TT[kT.toLowerCase()] = ul[kT], TT
      }), {}),
      dl = Object.keys(Xl).reduce((function(TT, kT) {
        var cT = Xl[kT];
        return TT[kT] = cT[900] || IT(Object.entries(cT))[0][1], TT
      }), {});

    function Ll(TT, kT) {
      var cT = "".concat("data-fa-pseudo-element-pending").concat(kT.replace(":", "-"));
      return new Promise((function(lT, MT) {
        if (null !== TT.getAttribute(cT)) return lT();
        var KT = nk(TT.children).filter((function(TT) {
            return TT.getAttribute(Nk) === kT
          }))[0],
          OT = rT.getComputedStyle(TT, kT),
          yT = OT.getPropertyValue("font-family"),
          xT = yT.match(Ek),
          AT = OT.getPropertyValue("font-weight"),
          CT = OT.getPropertyValue("content");
        if (KT && !xT) return TT.removeChild(KT), lT();
        if (xT && "none" !== CT && "" !== CT) {
          var jT = OT.getPropertyValue("content"),
            vT = function(TT, kT) {
              var cT = TT.replace(/^['"]|['"]$/g, "").toLowerCase(),
                lT = parseInt(kT),
                MT = isNaN(lT) ? "normal" : lT;
              return (Xl[cT] || {})[MT] || dl[cT]
            }(yT, AT),
            tT = function(TT) {
              return Cc(IT(TT.replace(El, ""))[0] || "")
            }(jT),
            hT = xT[0].startsWith("FontAwesome"),
            NT = function(TT) {
              var kT = TT.getPropertyValue("font-feature-settings").includes("ss01"),
                cT = TT.getPropertyValue("content").replace(El, ""),
                lT = cT.codePointAt(0),
                MT = lT >= Zl[0] && lT <= Zl[1],
                KT = 2 === cT.length && cT[0] === cT[1];
              return MT || KT || kT
            }(OT),
            QT = zc(vT, tT),
            ST = QT;
          if (hT) {
            var DT = function(TT) {
              var kT = rc[TT],
                cT = zc("fas", TT);
              return kT || (cT ? {
                prefix: "fas",
                iconName: cT
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(tT);
            DT.iconName && DT.prefix && (QT = DT.iconName, vT = DT.prefix)
          }
          if (!QT || NT || KT && KT.getAttribute(Qk) === vT && KT.getAttribute(Sk) === ST) lT();
          else {
            TT.setAttribute(cT, ST), KT && TT.removeChild(KT);
            var aT = {
                iconName: null,
                prefix: null,
                transform: Bk,
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
              FT = aT.extra;
            FT.attributes[Nk] = kT, Kl(QT, vT).then((function(MT) {
              var KT = Tl(fT(fT({}, aT), {}, {
                  icons: {
                    main: MT,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: vT,
                  iconName: ST,
                  extra: FT,
                  watchable: !0
                })),
                OT = PT.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === kT ? TT.insertBefore(OT, TT.firstChild) : TT.appendChild(OT), OT.outerHTML = KT.map((function(TT) {
                return xc(TT)
              })).join("\n"), TT.removeAttribute(cT), lT()
            })).catch(MT)
          }
        } else lT()
      }))
    }

    function Rl(TT) {
      return Promise.all([Ll(TT, "::before"), Ll(TT, "::after")])
    }

    function gl(TT) {
      return TT.parentNode !== document.head && !~ak.indexOf(TT.tagName.toUpperCase()) && !TT.getAttribute(Nk) && (!TT.parentNode || "svg" !== TT.parentNode.tagName)
    }
    var Ul = function(TT) {
        return !!TT && Fk.some((function(kT) {
          return TT.includes(kT)
        }))
      },
      Yl = function(TT) {
        if (!TT) return [];
        var kT = new Set,
          cT = TT.split(/,(?![^()]*\))/).map((function(TT) {
            return TT.trim()
          }));
        cT = cT.flatMap((function(TT) {
          return TT.includes("(") ? TT : TT.split(",").map((function(TT) {
            return TT.trim()
          }))
        }));
        var lT, MT = KT(cT);
        try {
          for (MT.s(); !(lT = MT.n()).done;) {
            var OT = lT.value;
            if (Ul(OT)) {
              var yT = Fk.reduce((function(TT, kT) {
                return TT.replace(kT, "")
              }), OT);
              "" !== yT && "*" !== yT && kT.add(yT)
            }
          }
        } catch (fT) {
          MT.e(fT)
        } finally {
          MT.f()
        }
        return kT
      };

    function Bl(TT) {
      if (bT) {
        var kT;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) kT = TT;
        else if (gk.searchPseudoElementsFullScan) kT = TT.querySelectorAll("*");
        else {
          var cT, lT = new Set,
            MT = KT(document.styleSheets);
          try {
            for (MT.s(); !(cT = MT.n()).done;) {
              var OT = cT.value;
              try {
                var yT, fT = KT(OT.cssRules);
                try {
                  for (fT.s(); !(yT = fT.n()).done;) {
                    var xT, IT = yT.value,
                      AT = KT(Yl(IT.selectorText));
                    try {
                      for (AT.s(); !(xT = AT.n()).done;) {
                        var CT = xT.value;
                        lT.add(CT)
                      }
                    } catch (vT) {
                      AT.e(vT)
                    } finally {
                      AT.f()
                    }
                  }
                } catch (vT) {
                  fT.e(vT)
                } finally {
                  fT.f()
                }
              } catch (tT) {
                gk.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(OT.href, " (").concat(tT.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (vT) {
            MT.e(vT)
          } finally {
            MT.f()
          }
          if (!lT.size) return;
          var jT = Array.from(lT).join(", ");
          try {
            kT = TT.querySelectorAll(jT)
          } catch (hT) {}
        }
        return new Promise((function(TT, cT) {
          var lT = nk(kT).filter(gl).map(Rl),
            MT = Il("searchPseudoElements");
          Dl(), Promise.all(lT).then((function() {
            MT(), al(), TT()
          })).catch((function() {
            MT(), al(), cT()
          }))
        }))
      }
    }
    var Wl = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(TT) {
              return TT.pseudoElementsCallback = Bl, TT
            }
          }
        },
        provides: function(TT) {
          TT.pseudoElements2svg = function(TT) {
            var kT = TT.node,
              cT = void 0 === kT ? PT : kT;
            gk.searchPseudoElements && Bl(cT)
          }
        }
      },
      nl = !1,
      pl = function(TT) {
        return TT.toLowerCase().split(" ").reduce((function(TT, kT) {
          var cT = kT.toLowerCase().split("-"),
            lT = cT[0],
            MT = cT.slice(1).join("-");
          if (lT && "h" === MT) return TT.flipX = !0, TT;
          if (lT && "v" === MT) return TT.flipY = !0, TT;
          if (MT = parseFloat(MT), isNaN(MT)) return TT;
          switch (lT) {
            case "grow":
              TT.size = TT.size + MT;
              break;
            case "shrink":
              TT.size = TT.size - MT;
              break;
            case "left":
              TT.x = TT.x - MT;
              break;
            case "right":
              TT.x = TT.x + MT;
              break;
            case "up":
              TT.y = TT.y - MT;
              break;
            case "down":
              TT.y = TT.y + MT;
              break;
            case "rotate":
              TT.rotate = TT.rotate + MT
          }
          return TT
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      il = {
        mixout: function() {
          return {
            parse: {
              transform: function(TT) {
                return pl(TT)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(TT, kT) {
              var cT = kT.getAttribute("data-fa-transform");
              return cT && (TT.transform = pl(cT)), TT
            }
          }
        },
        provides: function(TT) {
          TT.generateAbstractTransformGrouping = function(TT) {
            var kT = TT.main,
              cT = TT.transform,
              lT = TT.containerWidth,
              MT = TT.iconWidth,
              KT = {
                transform: "translate(".concat(lT / 2, " 256)")
              },
              OT = "translate(".concat(32 * cT.x, ", ").concat(32 * cT.y, ") "),
              yT = "scale(".concat(cT.size / 16 * (cT.flipX ? -1 : 1), ", ").concat(cT.size / 16 * (cT.flipY ? -1 : 1), ") "),
              xT = "rotate(".concat(cT.rotate, " 0 0)"),
              IT = {
                outer: KT,
                inner: {
                  transform: "".concat(OT, " ").concat(yT, " ").concat(xT)
                },
                path: {
                  transform: "translate(".concat(MT / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: fT({}, IT.outer),
              children: [{
                tag: "g",
                attributes: fT({}, IT.inner),
                children: [{
                  tag: kT.icon.tag,
                  children: kT.icon.children,
                  attributes: fT(fT({}, kT.icon.attributes), IT.path)
                }]
              }]
            }
          }
        }
      },
      ql = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function sl(TT) {
      var kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return TT.attributes && (TT.attributes.fill || kT) && (TT.attributes.fill = "black"), TT
    }
    var TM = {
        hooks: function() {
          return {
            parseNodeAttributes: function(TT, kT) {
              var cT = kT.getAttribute("data-fa-mask"),
                lT = cT ? Ec(cT.split(" ").map((function(TT) {
                  return TT.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return lT.prefix || (lT.prefix = Hc()), TT.mask = lT, TT.maskId = kT.getAttribute("data-fa-mask-id"), TT
            }
          }
        },
        provides: function(TT) {
          TT.generateAbstractMask = function(TT) {
            var kT, cT = TT.children,
              lT = TT.attributes,
              MT = TT.main,
              KT = TT.mask,
              OT = TT.maskId,
              yT = TT.transform,
              xT = MT.width,
              IT = MT.icon,
              AT = KT.width,
              CT = KT.icon,
              jT = function(TT) {
                var kT = TT.transform,
                  cT = TT.containerWidth,
                  lT = TT.iconWidth,
                  MT = {
                    transform: "translate(".concat(cT / 2, " 256)")
                  },
                  KT = "translate(".concat(32 * kT.x, ", ").concat(32 * kT.y, ") "),
                  OT = "scale(".concat(kT.size / 16 * (kT.flipX ? -1 : 1), ", ").concat(kT.size / 16 * (kT.flipY ? -1 : 1), ") "),
                  yT = "rotate(".concat(kT.rotate, " 0 0)");
                return {
                  outer: MT,
                  inner: {
                    transform: "".concat(KT, " ").concat(OT, " ").concat(yT)
                  },
                  path: {
                    transform: "translate(".concat(lT / 2 * -1, " -256)")
                  }
                }
              }({
                transform: yT,
                containerWidth: AT,
                iconWidth: xT
              }),
              vT = {
                tag: "rect",
                attributes: fT(fT({}, ql), {}, {
                  fill: "white"
                })
              },
              tT = IT.children ? {
                children: IT.children.map(sl)
              } : {},
              hT = {
                tag: "g",
                attributes: fT({}, jT.inner),
                children: [sl(fT({
                  tag: IT.tag,
                  attributes: fT(fT({}, IT.attributes), jT.path)
                }, tT))]
              },
              NT = {
                tag: "g",
                attributes: fT({}, jT.outer),
                children: [hT]
              },
              QT = "mask-".concat(OT || Wk()),
              ST = "clip-".concat(OT || Wk()),
              DT = {
                tag: "mask",
                attributes: fT(fT({}, ql), {}, {
                  id: QT,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [vT, NT]
              },
              aT = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: ST
                  },
                  children: (kT = CT, "g" === kT.tag ? kT.children : [kT])
                }, DT]
              };
            return cT.push(aT, {
              tag: "rect",
              attributes: fT({
                fill: "currentColor",
                "clip-path": "url(#".concat(ST, ")"),
                mask: "url(#".concat(QT, ")")
              }, ql)
            }), {
              children: cT,
              attributes: lT
            }
          }
        }
      },
      kM = {
        provides: function(TT) {
          var kT = !1;
          rT.matchMedia && (kT = rT.matchMedia("(prefers-reduced-motion: reduce)").matches), TT.missingIconAbstract = function() {
            var TT = [],
              cT = {
                fill: "currentColor"
              },
              lT = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            TT.push({
              tag: "path",
              attributes: fT(fT({}, cT), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var MT = fT(fT({}, lT), {}, {
                attributeName: "opacity"
              }),
              KT = {
                tag: "circle",
                attributes: fT(fT({}, cT), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return kT || KT.children.push({
              tag: "animate",
              attributes: fT(fT({}, lT), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: fT(fT({}, MT), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), TT.push(KT), TT.push({
              tag: "path",
              attributes: fT(fT({}, cT), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: kT ? [] : [{
                tag: "animate",
                attributes: fT(fT({}, MT), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), kT || TT.push({
              tag: "path",
              attributes: fT(fT({}, cT), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: fT(fT({}, MT), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: TT
            }
          }
        }
      };
    ! function(TT, kT) {
      var cT = kT.mixoutsTo;
      dc = TT, Lc = {}, Object.keys(Rc).forEach((function(TT) {
        -1 === gc.indexOf(TT) && delete Rc[TT]
      })), dc.forEach((function(TT) {
        var kT = TT.mixout ? TT.mixout() : {};
        if (Object.keys(kT).forEach((function(TT) {
            "function" === typeof kT[TT] && (cT[TT] = kT[TT]), "object" === CT(kT[TT]) && Object.keys(kT[TT]).forEach((function(lT) {
              cT[TT] || (cT[TT] = {}), cT[TT][lT] = kT[TT][lT]
            }))
          })), TT.hooks) {
          var lT = TT.hooks();
          Object.keys(lT).forEach((function(TT) {
            Lc[TT] || (Lc[TT] = []), Lc[TT].push(lT[TT])
          }))
        }
        TT.provides && TT.provides(Rc)
      }))
    }([lc, Hl, el, Gl, Vl, Wl, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              Dl(), nl = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            rl(Uc("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            Fl && Fl.disconnect()
          },
          watch: function(TT) {
            var kT = TT.observeMutationsRoot;
            nl ? al() : rl(Uc("mutationObserverCallbacks", {
              observeMutationsRoot: kT
            }))
          }
        }
      }
    }, il, TM, kM, {
      hooks: function() {
        return {
          parseNodeAttributes: function(TT, kT) {
            var cT = kT.getAttribute("data-fa-symbol"),
              lT = null !== cT && ("" === cT || cT);
            return TT.symbol = lT, TT
          }
        }
      }
    }], {
      mixoutsTo: ic
    });
    var cM = ic.noAuto,
      lM = ic.config,
      MM = ic.library,
      KM = ic.dom,
      OM = ic.parse,
      yM = ic.findIconDefinition,
      fM = ic.toHtml,
      xM = ic.icon,
      IM = ic.layer,
      AM = ic.text,
      CM = ic.counter
  },
  6668: TT => {
    TT.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);