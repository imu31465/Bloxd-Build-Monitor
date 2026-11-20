/*! For license information please see eulrrq.fa-renderer.7347e6f3.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6361: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      FontAwesomeIcon: () => wU
    });
    var tU = gU(6356),
      pU = gU(4626),
      EU = gU.n(pU),
      PU = gU(56);

    function TU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function qU(UU, RU, gU) {
      return (RU = function(UU) {
        var RU = function(UU, RU) {
          if ("object" != typeof UU || !UU) return UU;
          var gU = UU[Symbol.toPrimitive];
          if (void 0 !== gU) {
            var tU = gU.call(UU, RU || "default");
            if ("object" != typeof tU) return tU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == typeof RU ? RU : RU + ""
      }(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function KU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function cU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? KU(Object(gU), !0).forEach((function(RU) {
          qU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : KU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function GU(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        var gU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != gU) {
          var tU, pU, EU, PU, TU = [],
            qU = !0,
            KU = !1;
          try {
            if (EU = (gU = gU.call(UU)).next, 0 === RU) {
              if (Object(gU) !== gU) return;
              qU = !1
            } else
              for (; !(qU = (tU = EU.call(gU)).done) && (TU.push(tU.value), TU.length !== RU); qU = !0);
          } catch (UU) {
            KU = !0, pU = UU
          } finally {
            try {
              if (!qU && null != gU.return && (PU = gU.return(), Object(PU) !== PU)) return
            } finally {
              if (KU) throw pU
            }
          }
          return TU
        }
      }(UU, RU) || CU(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function jU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return TU(UU)
      }(UU) || function(UU) {
        if ("undefined" != typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || CU(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uU(UU) {
      return uU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, uU(UU)
    }

    function CU(UU, RU) {
      if (UU) {
        if ("string" == typeof UU) return TU(UU, RU);
        var gU = {}.toString.call(UU).slice(8, -1);
        return "Object" === gU && UU.constructor && (gU = UU.constructor.name), "Map" === gU || "Set" === gU ? Array.from(UU) : "Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU) ? TU(UU, RU) : void 0
      }
    }
    var hU;
    try {
      var QU = gU(6366);
      hU = QU.version
    } catch (bU) {
      hU = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function eU(UU) {
      var RU = UU.beat,
        gU = UU.fade,
        tU = UU.beatFade,
        pU = UU.bounce,
        EU = UU.shake,
        PU = UU.flash,
        TU = UU.spin,
        KU = UU.spinPulse,
        cU = UU.spinReverse,
        jU = UU.pulse,
        uU = UU.fixedWidth,
        CU = UU.inverse,
        QU = UU.border,
        eU = UU.listItem,
        WU = UU.flip,
        fU = UU.size,
        xU = UU.rotation,
        mU = UU.pull,
        IU = UU.swapOpacity,
        JU = UU.rotateBy,
        wU = UU.widthAuto,
        nU = function(UU, RU) {
          for (var gU = GU(UU.split("-"), 2), tU = gU[0], pU = gU[1], EU = GU(RU.split("-"), 2), PU = EU[0], TU = EU[1], qU = tU.split("."), KU = PU.split("."), cU = 0; cU < Math.max(qU.length, KU.length); cU++) {
            var jU = qU[cU] || "0",
              uU = KU[cU] || "0",
              CU = parseInt(jU, 10),
              hU = parseInt(uU, 10);
            if (CU !== hU) return CU > hU
          }
          for (var QU = 0; QU < Math.max(qU.length, KU.length); QU++) {
            var eU = qU[QU] || "0",
              WU = KU[QU] || "0";
            if (eU !== WU && eU.length !== WU.length) return eU.length < WU.length
          }
          return !(pU && !TU)
        }(hU, "7.0.0"),
        bU = qU(qU(qU(qU(qU(qU({
          "fa-beat": RU,
          "fa-fade": gU,
          "fa-beat-fade": tU,
          "fa-bounce": pU,
          "fa-shake": EU,
          "fa-flash": PU,
          "fa-spin": TU,
          "fa-spin-reverse": cU,
          "fa-spin-pulse": KU,
          "fa-pulse": jU,
          "fa-fw": uU,
          "fa-inverse": CU,
          "fa-border": QU,
          "fa-li": eU,
          "fa-flip": !0 === WU,
          "fa-flip-horizontal": "horizontal" === WU || "both" === WU,
          "fa-flip-vertical": "vertical" === WU || "both" === WU
        }, "fa-".concat(fU), "undefined" !== typeof fU && null !== fU), "fa-rotate-".concat(xU), "undefined" !== typeof xU && null !== xU && 0 !== xU), "fa-pull-".concat(mU), "undefined" !== typeof mU && null !== mU), "fa-swap-opacity", IU), "fa-rotate-by", nU && JU), "fa-width-auto", nU && wU);
      return Object.keys(bU).map((function(UU) {
        return bU[UU] ? UU : null
      })).filter((function(UU) {
        return UU
      }))
    }

    function WU(UU) {
      return RU = UU, (RU -= 0) === RU ? UU : (UU = UU.replace(/[\-_\s]+(.)?/g, (function(UU, RU) {
        return RU ? RU.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + UU.substr(1);
      var RU
    }
    var fU = ["style"];
    var xU = !1;
    try {
      xU = !0
    } catch (bU) {}

    function mU(UU) {
      return UU && "object" === uU(UU) && UU.prefix && UU.iconName && UU.icon ? UU : tU.parse.icon ? tU.parse.icon(UU) : null === UU ? null : UU && "object" === uU(UU) && UU.prefix && UU.iconName ? UU : Array.isArray(UU) && 2 === UU.length ? {
        prefix: UU[0],
        iconName: UU[1]
      } : "string" === typeof UU ? {
        prefix: "fas",
        iconName: UU
      } : void 0
    }

    function IU(UU, RU) {
      return Array.isArray(RU) && RU.length > 0 || !Array.isArray(RU) && RU ? qU({}, UU, RU) : {}
    }
    var JU = {
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
      wU = PU.forwardRef((function(UU, RU) {
        var gU = cU(cU({}, JU), UU),
          pU = gU.icon,
          EU = gU.mask,
          PU = gU.symbol,
          TU = gU.className,
          qU = gU.title,
          KU = gU.titleId,
          GU = gU.maskId,
          uU = mU(pU),
          CU = IU("classes", [].concat(jU(eU(gU)), jU((TU || "").split(" ")))),
          hU = IU("transform", "string" === typeof gU.transform ? tU.parse.transform(gU.transform) : gU.transform),
          QU = IU("mask", mU(EU)),
          WU = (0, tU.icon)(uU, cU(cU(cU(cU({}, CU), hU), QU), {}, {
            symbol: PU,
            title: qU,
            titleId: KU,
            maskId: GU
          }));
        if (!WU) return function() {
          var UU;
          !xU && console && "function" === typeof console.error && (UU = console).error.apply(UU, arguments)
        }("Could not find icon", uU), null;
        var fU = WU.abstract,
          wU = {
            ref: RU
          };
        return Object.keys(gU).forEach((function(UU) {
          JU.hasOwnProperty(UU) || (wU[UU] = gU[UU])
        })), nU(fU[0], wU)
      }));
    wU.displayName = "FontAwesomeIcon", wU.propTypes = {
      beat: EU().bool,
      border: EU().bool,
      beatFade: EU().bool,
      bounce: EU().bool,
      className: EU().string,
      fade: EU().bool,
      flash: EU().bool,
      mask: EU().oneOfType([EU().object, EU().array, EU().string]),
      maskId: EU().string,
      fixedWidth: EU().bool,
      inverse: EU().bool,
      flip: EU().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: EU().oneOfType([EU().object, EU().array, EU().string]),
      listItem: EU().bool,
      pull: EU().oneOf(["right", "left"]),
      pulse: EU().bool,
      rotation: EU().oneOf([0, 90, 180, 270]),
      rotateBy: EU().bool,
      shake: EU().bool,
      size: EU().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: EU().bool,
      spinPulse: EU().bool,
      spinReverse: EU().bool,
      symbol: EU().oneOfType([EU().bool, EU().string]),
      title: EU().string,
      titleId: EU().string,
      transform: EU().oneOfType([EU().string, EU().object]),
      swapOpacity: EU().bool,
      widthAuto: EU().bool
    };
    var nU = function UU(RU, gU) {
      var tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof gU) return gU;
      var pU = (gU.children || []).map((function(gU) {
          return UU(RU, gU)
        })),
        EU = Object.keys(gU.attributes || {}).reduce((function(UU, RU) {
          var tU = gU.attributes[RU];
          switch (RU) {
            case "class":
              UU.attrs.className = tU, delete gU.attributes.class;
              break;
            case "style":
              UU.attrs.style = tU.split(";").map((function(UU) {
                return UU.trim()
              })).filter((function(UU) {
                return UU
              })).reduce((function(UU, RU) {
                var gU, tU = RU.indexOf(":"),
                  pU = WU(RU.slice(0, tU)),
                  EU = RU.slice(tU + 1).trim();
                return pU.startsWith("webkit") ? UU[(gU = pU, gU.charAt(0).toUpperCase() + gU.slice(1))] = EU : UU[pU] = EU, UU
              }), {});
              break;
            default:
              0 === RU.indexOf("aria-") || 0 === RU.indexOf("data-") ? UU.attrs[RU.toLowerCase()] = tU : UU.attrs[WU(RU)] = tU
          }
          return UU
        }), {
          attrs: {}
        }),
        PU = tU.style,
        TU = void 0 === PU ? {} : PU,
        qU = function(UU, RU) {
          if (null == UU) return {};
          var gU, tU, pU = function(UU, RU) {
            if (null == UU) return {};
            var gU = {};
            for (var tU in UU)
              if ({}.hasOwnProperty.call(UU, tU)) {
                if (-1 !== RU.indexOf(tU)) continue;
                gU[tU] = UU[tU]
              } return gU
          }(UU, RU);
          if (Object.getOwnPropertySymbols) {
            var EU = Object.getOwnPropertySymbols(UU);
            for (tU = 0; tU < EU.length; tU++) gU = EU[tU], -1 === RU.indexOf(gU) && {}.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
          }
          return pU
        }(tU, fU);
      return EU.attrs.style = cU(cU({}, EU.attrs.style), TU), RU.apply(void 0, [gU.tag, cU(cU({}, EU.attrs), qU)].concat(jU(pU)))
    }.bind(null, PU.createElement)
  },
  4635: (UU, RU, gU) => {
    var tU = gU(4642);

    function pU() {}

    function EU() {}
    EU.resetWarningCache = pU, UU.exports = function() {
      function UU(UU, RU, gU, pU, EU, PU) {
        if (PU !== tU) {
          var TU = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw TU.name = "Invariant Violation", TU
        }
      }

      function RU() {
        return UU
      }
      UU.isRequired = UU;
      var gU = {
        array: UU,
        bigint: UU,
        bool: UU,
        func: UU,
        number: UU,
        object: UU,
        string: UU,
        symbol: UU,
        any: UU,
        arrayOf: RU,
        element: UU,
        elementType: UU,
        instanceOf: RU,
        node: UU,
        objectOf: RU,
        oneOf: RU,
        oneOfType: RU,
        shape: RU,
        exact: RU,
        checkPropTypes: EU,
        resetWarningCache: pU
      };
      return gU.PropTypes = gU, gU
    }
  },
  4626: (UU, RU, gU) => {
    UU.exports = gU(4635)()
  },
  4642: UU => {
    UU.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6356: (UU, RU, gU) => {
    function tU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function pU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, GU(tU.key), tU)
      }
    }

    function EU(UU, RU) {
      var gU = "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
      if (!gU) {
        if (Array.isArray(UU) || (gU = uU(UU)) || RU && UU && "number" == typeof UU.length) {
          gU && (UU = gU);
          var tU = 0,
            pU = function() {};
          return {
            s: pU,
            n: function() {
              return tU >= UU.length ? {
                done: !0
              } : {
                done: !1,
                value: UU[tU++]
              }
            },
            e: function(UU) {
              throw UU
            },
            f: pU
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var EU, PU = !0,
        TU = !1;
      return {
        s: function() {
          gU = gU.call(UU)
        },
        n: function() {
          var UU = gU.next();
          return PU = UU.done, UU
        },
        e: function(UU) {
          TU = !0, EU = UU
        },
        f: function() {
          try {
            PU || null == gU.return || gU.return()
          } finally {
            if (TU) throw EU
          }
        }
      }
    }

    function PU(UU, RU, gU) {
      return (RU = GU(RU)) in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function TU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function qU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? TU(Object(gU), !0).forEach((function(RU) {
          PU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : TU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function KU(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        var gU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != gU) {
          var tU, pU, EU, PU, TU = [],
            qU = !0,
            KU = !1;
          try {
            if (EU = (gU = gU.call(UU)).next, 0 === RU) {
              if (Object(gU) !== gU) return;
              qU = !1
            } else
              for (; !(qU = (tU = EU.call(gU)).done) && (TU.push(tU.value), TU.length !== RU); qU = !0);
          } catch (UU) {
            KU = !0, pU = UU
          } finally {
            try {
              if (!qU && null != gU.return && (PU = gU.return(), Object(PU) !== PU)) return
            } finally {
              if (KU) throw pU
            }
          }
          return TU
        }
      }(UU, RU) || uU(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return tU(UU)
      }(UU) || function(UU) {
        if ("undefined" != typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || uU(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function GU(UU) {
      var RU = function(UU, RU) {
        if ("object" != typeof UU || !UU) return UU;
        var gU = UU[Symbol.toPrimitive];
        if (void 0 !== gU) {
          var tU = gU.call(UU, RU || "default");
          if ("object" != typeof tU) return tU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == typeof RU ? RU : RU + ""
    }

    function jU(UU) {
      return jU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, jU(UU)
    }

    function uU(UU, RU) {
      if (UU) {
        if ("string" == typeof UU) return tU(UU, RU);
        var gU = {}.toString.call(UU).slice(8, -1);
        return "Object" === gU && UU.constructor && (gU = UU.constructor.name), "Map" === gU || "Set" === gU ? Array.from(UU) : "Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU) ? tU(UU, RU) : void 0
      }
    }
    gU.r(RU), gU.d(RU, {
      api: () => Lg,
      config: () => tp,
      counter: () => jp,
      dom: () => Ep,
      findIconDefinition: () => Tp,
      icon: () => Kp,
      layer: () => cp,
      library: () => pp,
      noAuto: () => gp,
      parse: () => Pp,
      text: () => Gp,
      toHtml: () => qp
    });
    var CU = function() {},
      hU = {},
      QU = {},
      eU = null,
      WU = {
        mark: CU,
        measure: CU
      };
    try {
      "undefined" !== typeof window && (hU = window), "undefined" !== typeof document && (QU = document), "undefined" !== typeof MutationObserver && (eU = MutationObserver), "undefined" !== typeof performance && (WU = performance)
    } catch (FU) {}
    var fU, xU, mU = (hU.navigator || {}).userAgent,
      IU = void 0 === mU ? "" : mU,
      JU = hU,
      wU = QU,
      nU = eU,
      bU = WU,
      oU = (JU.document, !!wU.documentElement && !!wU.head && "function" === typeof wU.addEventListener && "function" === typeof wU.createElement),
      ZU = ~IU.indexOf("MSIE") || ~IU.indexOf("Trident/"),
      aU = {
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
      YU = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      BU = "classic",
      VU = "duotone",
      rU = "sharp",
      XU = "sharp-duotone",
      vU = "chisel",
      dU = "etch",
      HU = "graphite",
      SU = "jelly",
      sU = "jelly-duo",
      yU = "jelly-fill",
      kU = "notdog",
      FU = "notdog-duo",
      iU = "slab",
      AU = "slab-press",
      zU = "thumbprint",
      MU = "utility",
      DU = "utility-duo",
      LU = "utility-fill",
      NU = "whiteboard",
      lU = [BU, VU, rU, XU, vU, dU, HU, SU, sU, yU, kU, FU, iU, AU, zU, MU, DU, LU, NU],
      OU = (PU(PU(PU(PU(PU(PU(PU(PU(PU(PU(fU = {}, BU, "Classic"), VU, "Duotone"), rU, "Sharp"), XU, "Sharp Duotone"), vU, "Chisel"), dU, "Etch"), HU, "Graphite"), SU, "Jelly"), sU, "Jelly Duo"), yU, "Jelly Fill"), PU(PU(PU(PU(PU(PU(PU(PU(PU(fU, kU, "Notdog"), FU, "Notdog Duo"), iU, "Slab"), AU, "Slab Press"), zU, "Thumbprint"), MU, "Utility"), DU, "Utility Duo"), LU, "Utility Fill"), NU, "Whiteboard"), new Map([
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
      UR = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      RR = {
        fak: "kit",
        "fa-kit": "kit"
      },
      gR = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      tR = (PU(PU({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      pR = {
        "kit-duotone": "fakd"
      },
      ER = "duotone-group",
      PR = "swap-opacity",
      TR = "primary",
      qR = "secondary",
      KR = (PU(PU(PU(PU(PU(PU(PU(PU(PU(PU(xU = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), PU(PU(PU(PU(PU(PU(PU(PU(PU(xU, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), PU(PU({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      cR = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      GR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      jR = GR.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      uR = [].concat(cU(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", ER, PR, TR, qR]).concat(GR.map((function(UU) {
        return "".concat(UU, "x")
      }))).concat(jR.map((function(UU) {
        return "w-".concat(UU)
      }))),
      CR = "___FONT_AWESOME___",
      hR = "svg-inline--fa",
      QR = "data-fa-i2svg",
      eR = "data-fa-pseudo-element",
      WR = "data-prefix",
      fR = "data-icon",
      xR = "fontawesome-i2svg",
      mR = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      IR = ["::before", "::after", ":before", ":after"],
      JR = function() {
        try {
          return !0
        } catch (UU) {
          return !1
        }
      }();

    function wR(UU) {
      return new Proxy(UU, {
        get: function(UU, RU) {
          return RU in UU ? UU[RU] : UU[BU]
        }
      })
    }
    var nR = qU({}, aU);
    nR[BU] = qU(qU(qU(qU({}, {
      "fa-duotone": "duotone"
    }), aU[BU]), RR), gR);
    var bR = wR(nR),
      oR = qU({}, {
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
    oR[BU] = qU(qU(qU(qU({}, {
      duotone: "fad"
    }), oR[BU]), tR), pR);
    var ZR = wR(oR),
      aR = qU({}, KR);
    aR[BU] = qU(qU({}, aR[BU]), {
      fak: "fa-kit"
    });
    var YR = wR(aR),
      BR = qU({}, {
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
    BR[BU] = qU(qU({}, BR[BU]), {
      "fa-kit": "fak"
    });
    wR(BR);
    var VR = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      rR = "fa-layers-text",
      XR = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      vR = (wR(qU({}, {
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
      dR = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      HR = [].concat(cU(["kit"]), cU(uR)),
      SR = JU.FontAwesomeConfig || {};
    if (wU && "function" === typeof wU.querySelector) {
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
      ].forEach((function(UU) {
        var RU = KU(UU, 2),
          gU = RU[0],
          tU = RU[1],
          pU = function(UU) {
            return "" === UU || "false" !== UU && ("true" === UU || UU)
          }(function(UU) {
            var RU = wU.querySelector("script[" + UU + "]");
            if (RU) return RU.getAttribute(UU)
          }(gU));
        void 0 !== pU && null !== pU && (SR[tU] = pU)
      }))
    }
    var sR = {
      styleDefault: "solid",
      familyDefault: BU,
      cssPrefix: "fa",
      replacementClass: hR,
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
    SR.familyPrefix && (SR.cssPrefix = SR.familyPrefix);
    var yR = qU(qU({}, sR), SR);
    yR.autoReplaceSvg || (yR.observeMutations = !1);
    var kR = {};
    Object.keys(sR).forEach((function(UU) {
      Object.defineProperty(kR, UU, {
        enumerable: !0,
        set: function(RU) {
          yR[UU] = RU, FR.forEach((function(UU) {
            return UU(kR)
          }))
        },
        get: function() {
          return yR[UU]
        }
      })
    })), Object.defineProperty(kR, "familyPrefix", {
      enumerable: !0,
      set: function(UU) {
        yR.cssPrefix = UU, FR.forEach((function(UU) {
          return UU(kR)
        }))
      },
      get: function() {
        return yR.cssPrefix
      }
    }), JU.FontAwesomeConfig = kR;
    var FR = [];
    var iR = 16,
      AR = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function zR() {
      for (var UU = 12, RU = ""; UU-- > 0;) RU += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return RU
    }

    function MR(UU) {
      for (var RU = [], gU = (UU || []).length >>> 0; gU--;) RU[gU] = UU[gU];
      return RU
    }

    function DR(UU) {
      return UU.classList ? MR(UU.classList) : (UU.getAttribute("class") || "").split(" ").filter((function(UU) {
        return UU
      }))
    }

    function LR(UU) {
      return "".concat(UU).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function NR(UU) {
      return Object.keys(UU || {}).reduce((function(RU, gU) {
        return RU + "".concat(gU, ": ").concat(UU[gU].trim(), ";")
      }), "")
    }

    function lR(UU) {
      return UU.size !== AR.size || UU.x !== AR.x || UU.y !== AR.y || UU.rotate !== AR.rotate || UU.flipX || UU.flipY
    }

    function OR() {
      var UU = "fa",
        RU = hR,
        gU = kR.cssPrefix,
        tU = kR.replacementClass,
        pU = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (gU !== UU || tU !== RU) {
        var EU = new RegExp("\\.".concat(UU, "\\-"), "g"),
          PU = new RegExp("\\--".concat(UU, "\\-"), "g"),
          TU = new RegExp("\\.".concat(RU), "g");
        pU = pU.replace(EU, ".".concat(gU, "-")).replace(PU, "--".concat(gU, "-")).replace(TU, ".".concat(tU))
      }
      return pU
    }
    var Ug = !1;

    function Rg() {
      kR.autoAddCss && !Ug && (! function(UU) {
        if (UU && oU) {
          var RU = wU.createElement("style");
          RU.setAttribute("type", "text/css"), RU.innerHTML = UU;
          for (var gU = wU.head.childNodes, tU = null, pU = gU.length - 1; pU > -1; pU--) {
            var EU = gU[pU],
              PU = (EU.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(PU) > -1 && (tU = EU)
          }
          wU.head.insertBefore(RU, tU)
        }
      }(OR()), Ug = !0)
    }
    var gg = {
        mixout: function() {
          return {
            dom: {
              css: OR,
              insertCss: Rg
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              Rg()
            },
            beforeI2svg: function() {
              Rg()
            }
          }
        }
      },
      tg = JU || {};
    tg[CR] || (tg[CR] = {}), tg[CR].styles || (tg[CR].styles = {}), tg[CR].hooks || (tg[CR].hooks = {}), tg[CR].shims || (tg[CR].shims = []);
    var pg = tg[CR],
      Eg = [],
      Pg = function() {
        wU.removeEventListener("DOMContentLoaded", Pg), Tg = 1, Eg.map((function(UU) {
          return UU()
        }))
      },
      Tg = !1;

    function qg(UU) {
      var RU = UU.tag,
        gU = UU.attributes,
        tU = void 0 === gU ? {} : gU,
        pU = UU.children,
        EU = void 0 === pU ? [] : pU;
      return "string" === typeof UU ? LR(UU) : "<".concat(RU, " ").concat(function(UU) {
        return Object.keys(UU || {}).reduce((function(RU, gU) {
          return RU + "".concat(gU, '="').concat(LR(UU[gU]), '" ')
        }), "").trim()
      }(tU), ">").concat(EU.map(qg).join(""), "</").concat(RU, ">")
    }

    function Kg(UU, RU, gU) {
      if (UU && UU[RU] && UU[RU][gU]) return {
        prefix: RU,
        iconName: gU,
        icon: UU[RU][gU]
      }
    }
    oU && ((Tg = (wU.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(wU.readyState)) || wU.addEventListener("DOMContentLoaded", Pg));
    var cg = function(UU, RU, gU, tU) {
      var pU, EU, PU, TU = Object.keys(UU),
        qU = TU.length,
        KU = void 0 !== tU ? function(UU, RU) {
          return function(gU, tU, pU, EU) {
            return UU.call(RU, gU, tU, pU, EU)
          }
        }(RU, tU) : RU;
      for (void 0 === gU ? (pU = 1, PU = UU[TU[0]]) : (pU = 0, PU = gU); pU < qU; pU++) PU = KU(PU, UU[EU = TU[pU]], EU, UU);
      return PU
    };

    function Gg(UU) {
      return 1 !== cU(UU).length ? null : UU.codePointAt(0).toString(16)
    }

    function jg(UU) {
      return Object.keys(UU).reduce((function(RU, gU) {
        var tU = UU[gU];
        return !!tU.icon ? RU[tU.iconName] = tU.icon : RU[gU] = tU, RU
      }), {})
    }

    function ug(UU, RU) {
      var gU = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        tU = void 0 !== gU && gU,
        pU = jg(RU);
      "function" !== typeof pg.hooks.addPack || tU ? pg.styles[UU] = qU(qU({}, pg.styles[UU] || {}), pU) : pg.hooks.addPack(UU, jg(RU)), "fas" === UU && ug("fa", RU)
    }
    var Cg = pg.styles,
      hg = pg.shims,
      Qg = Object.keys(YR),
      eg = Qg.reduce((function(UU, RU) {
        return UU[RU] = Object.keys(YR[RU]), UU
      }), {}),
      Wg = null,
      fg = {},
      xg = {},
      mg = {},
      Ig = {},
      Jg = {};

    function wg(UU, RU) {
      var gU, tU = RU.split("-"),
        pU = tU[0],
        EU = tU.slice(1).join("-");
      return pU !== UU || "" === EU || (gU = EU, ~HR.indexOf(gU)) ? null : EU
    }
    var ng, bg = function() {
      var UU = function(UU) {
        return cg(Cg, (function(RU, gU, tU) {
          return RU[tU] = cg(gU, UU, {}), RU
        }), {})
      };
      fg = UU((function(UU, RU, gU) {
        (RU[3] && (UU[RU[3]] = gU), RU[2]) && RU[2].filter((function(UU) {
          return "number" === typeof UU
        })).forEach((function(RU) {
          UU[RU.toString(16)] = gU
        }));
        return UU
      })), xg = UU((function(UU, RU, gU) {
        (UU[gU] = gU, RU[2]) && RU[2].filter((function(UU) {
          return "string" === typeof UU
        })).forEach((function(RU) {
          UU[RU] = gU
        }));
        return UU
      })), Jg = UU((function(UU, RU, gU) {
        var tU = RU[2];
        return UU[gU] = gU, tU.forEach((function(RU) {
          UU[RU] = gU
        })), UU
      }));
      var RU = "far" in Cg || kR.autoFetchSvg,
        gU = cg(hg, (function(UU, gU) {
          var tU = gU[0],
            pU = gU[1],
            EU = gU[2];
          return "far" !== pU || RU || (pU = "fas"), "string" === typeof tU && (UU.names[tU] = {
            prefix: pU,
            iconName: EU
          }), "number" === typeof tU && (UU.unicodes[tU.toString(16)] = {
            prefix: pU,
            iconName: EU
          }), UU
        }), {
          names: {},
          unicodes: {}
        });
      mg = gU.names, Ig = gU.unicodes, Wg = Bg(kR.styleDefault, {
        family: kR.familyDefault
      })
    };

    function og(UU, RU) {
      return (fg[UU] || {})[RU]
    }

    function Zg(UU, RU) {
      return (Jg[UU] || {})[RU]
    }

    function ag(UU) {
      return mg[UU] || {
        prefix: null,
        iconName: null
      }
    }

    function Yg() {
      return Wg
    }
    ng = function(UU) {
      Wg = Bg(UU.styleDefault, {
        family: kR.familyDefault
      })
    }, FR.push(ng), bg();

    function Bg(UU) {
      var RU = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        gU = void 0 === RU ? BU : RU,
        tU = bR[gU][UU];
      if (gU === VU && !UU) return "fad";
      var pU = ZR[gU][UU] || ZR[gU][tU],
        EU = UU in pg.styles ? UU : null;
      return pU || EU || null
    }

    function Vg(UU) {
      return UU.sort().filter((function(UU, RU, gU) {
        return gU.indexOf(UU) === RU
      }))
    }
    var rg = cR.concat(UR);

    function Xg(UU) {
      var RU = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        gU = void 0 !== RU && RU,
        tU = null,
        pU = Vg(UU.filter((function(UU) {
          return rg.includes(UU)
        }))),
        EU = Vg(UU.filter((function(UU) {
          return !rg.includes(UU)
        }))),
        PU = KU(pU.filter((function(UU) {
          return tU = UU, !YU.includes(UU)
        })), 1)[0],
        TU = void 0 === PU ? null : PU,
        cU = function(UU) {
          var RU = BU,
            gU = Qg.reduce((function(UU, RU) {
              return UU[RU] = "".concat(kR.cssPrefix, "-").concat(RU), UU
            }), {});
          return lU.forEach((function(tU) {
            (UU.includes(gU[tU]) || UU.some((function(UU) {
              return eg[tU].includes(UU)
            }))) && (RU = tU)
          })), RU
        }(pU),
        GU = qU(qU({}, function(UU) {
          var RU = [],
            gU = null;
          return UU.forEach((function(UU) {
            var tU = wg(kR.cssPrefix, UU);
            tU ? gU = tU : UU && RU.push(UU)
          })), {
            iconName: gU,
            rest: RU
          }
        }(EU)), {}, {
          prefix: Bg(TU, {
            family: cU
          })
        });
      return qU(qU(qU({}, GU), function(UU) {
        var RU = UU.values,
          gU = UU.family,
          tU = UU.canonical,
          pU = UU.givenPrefix,
          EU = void 0 === pU ? "" : pU,
          PU = UU.styles,
          TU = void 0 === PU ? {} : PU,
          qU = UU.config,
          KU = void 0 === qU ? {} : qU,
          cU = gU === VU,
          GU = RU.includes("fa-duotone") || RU.includes("fad"),
          jU = "duotone" === KU.familyDefault,
          uU = "fad" === tU.prefix || "fa-duotone" === tU.prefix;
        !cU && (GU || jU || uU) && (tU.prefix = "fad");
        (RU.includes("fa-brands") || RU.includes("fab")) && (tU.prefix = "fab");
        if (!tU.prefix && vg.includes(gU)) {
          if (Object.keys(TU).find((function(UU) {
              return dg.includes(UU)
            })) || KU.autoFetchSvg) {
            var CU = OU.get(gU).defaultShortPrefixId;
            tU.prefix = CU, tU.iconName = Zg(tU.prefix, tU.iconName) || tU.iconName
          }
        }
        "fa" !== tU.prefix && "fa" !== EU || (tU.prefix = Yg() || "fas");
        return tU
      }({
        values: UU,
        family: cU,
        styles: Cg,
        config: kR,
        canonical: GU,
        givenPrefix: tU
      })), function(UU, RU, gU) {
        var tU = gU.prefix,
          pU = gU.iconName;
        if (UU || !tU || !pU) return {
          prefix: tU,
          iconName: pU
        };
        var EU = "fa" === RU ? ag(pU) : {},
          PU = Zg(tU, pU);
        pU = EU.iconName || PU || pU, "far" !== (tU = EU.prefix || tU) || Cg.far || !Cg.fas || kR.autoFetchSvg || (tU = "fas");
        return {
          prefix: tU,
          iconName: pU
        }
      }(gU, tU, GU))
    }
    var vg = lU.filter((function(UU) {
        return UU !== BU || UU !== VU
      })),
      dg = Object.keys(KR).filter((function(UU) {
        return UU !== BU
      })).map((function(UU) {
        return Object.keys(KR[UU])
      })).flat();
    var Hg = function() {
        return function(UU, RU, gU) {
          return RU && pU(UU.prototype, RU), gU && pU(UU, gU), Object.defineProperty(UU, "prototype", {
            writable: !1
          }), UU
        }((function UU() {
          ! function(UU, RU) {
            if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
          }(this, UU), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var UU = this, RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
            var pU = gU.reduce(this._pullDefinitions, {});
            Object.keys(pU).forEach((function(RU) {
              UU.definitions[RU] = qU(qU({}, UU.definitions[RU] || {}), pU[RU]), ug(RU, pU[RU]);
              var gU = YR[BU][RU];
              gU && ug(gU, pU[RU]), bg()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(UU, RU) {
            var gU = RU.prefix && RU.iconName && RU.icon ? {
              0: RU
            } : RU;
            return Object.keys(gU).map((function(RU) {
              var tU = gU[RU],
                pU = tU.prefix,
                EU = tU.iconName,
                PU = tU.icon,
                TU = PU[2];
              UU[pU] || (UU[pU] = {}), TU.length > 0 && TU.forEach((function(RU) {
                "string" === typeof RU && (UU[pU][RU] = PU)
              })), UU[pU][EU] = PU
            })), UU
          }
        }])
      }(),
      Sg = [],
      sg = {},
      yg = {},
      kg = Object.keys(yg);

    function Fg(UU, RU) {
      for (var gU = arguments.length, tU = new Array(gU > 2 ? gU - 2 : 0), pU = 2; pU < gU; pU++) tU[pU - 2] = arguments[pU];
      return (sg[UU] || []).forEach((function(UU) {
        RU = UU.apply(null, [RU].concat(tU))
      })), RU
    }

    function ig(UU) {
      for (var RU = arguments.length, gU = new Array(RU > 1 ? RU - 1 : 0), tU = 1; tU < RU; tU++) gU[tU - 1] = arguments[tU];
      (sg[UU] || []).forEach((function(UU) {
        UU.apply(null, gU)
      }))
    }

    function Ag() {
      var UU = arguments[0],
        RU = Array.prototype.slice.call(arguments, 1);
      return yg[UU] ? yg[UU].apply(null, RU) : void 0
    }

    function zg(UU) {
      "fa" === UU.prefix && (UU.prefix = "fas");
      var RU = UU.iconName,
        gU = UU.prefix || Yg();
      if (RU) return RU = Zg(gU, RU) || RU, Kg(Mg.definitions, gU, RU) || Kg(pg.styles, gU, RU)
    }
    var Mg = new Hg,
      Dg = {
        i2svg: function() {
          var UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return oU ? (ig("beforeI2svg", UU), Ag("pseudoElements2svg", UU), Ag("i2svg", UU)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var UU, RU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            gU = RU.autoReplaceSvgRoot;
          !1 === kR.autoReplaceSvg && (kR.autoReplaceSvg = !0), kR.observeMutations = !0, UU = function() {
            Ng({
              autoReplaceSvgRoot: gU
            }), ig("watch", RU)
          }, oU && (Tg ? setTimeout(UU, 0) : Eg.push(UU))
        }
      },
      Lg = {
        noAuto: function() {
          kR.autoReplaceSvg = !1, kR.observeMutations = !1, ig("noAuto")
        },
        config: kR,
        dom: Dg,
        parse: {
          icon: function(UU) {
            if (null === UU) return null;
            if ("object" === jU(UU) && UU.prefix && UU.iconName) return {
              prefix: UU.prefix,
              iconName: Zg(UU.prefix, UU.iconName) || UU.iconName
            };
            if (Array.isArray(UU) && 2 === UU.length) {
              var RU = 0 === UU[1].indexOf("fa-") ? UU[1].slice(3) : UU[1],
                gU = Bg(UU[0]);
              return {
                prefix: gU,
                iconName: Zg(gU, RU) || RU
              }
            }
            if ("string" === typeof UU && (UU.indexOf("".concat(kR.cssPrefix, "-")) > -1 || UU.match(VR))) {
              var tU = Xg(UU.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: tU.prefix || Yg(),
                iconName: Zg(tU.prefix, tU.iconName) || tU.iconName
              }
            }
            if ("string" === typeof UU) {
              var pU = Yg();
              return {
                prefix: pU,
                iconName: Zg(pU, UU) || UU
              }
            }
          }
        },
        library: Mg,
        findIconDefinition: zg,
        toHtml: qg
      },
      Ng = function() {
        var UU = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          RU = void 0 === UU ? wU : UU;
        (Object.keys(pg.styles).length > 0 || kR.autoFetchSvg) && oU && kR.autoReplaceSvg && Lg.dom.i2svg({
          node: RU
        })
      };

    function lg(UU, RU) {
      return Object.defineProperty(UU, "abstract", {
        get: RU
      }), Object.defineProperty(UU, "html", {
        get: function() {
          return UU.abstract.map((function(UU) {
            return qg(UU)
          }))
        }
      }), Object.defineProperty(UU, "node", {
        get: function() {
          if (oU) {
            var RU = wU.createElement("div");
            return RU.innerHTML = UU.html, RU.children
          }
        }
      }), UU
    }

    function Og(UU) {
      var RU = UU.icons,
        gU = RU.main,
        tU = RU.mask,
        pU = UU.prefix,
        EU = UU.iconName,
        PU = UU.transform,
        TU = UU.symbol,
        KU = UU.maskId,
        cU = UU.extra,
        GU = UU.watchable,
        jU = void 0 !== GU && GU,
        uU = tU.found ? tU : gU,
        CU = uU.width,
        hU = uU.height,
        QU = [kR.replacementClass, EU ? "".concat(kR.cssPrefix, "-").concat(EU) : ""].filter((function(UU) {
          return -1 === cU.classes.indexOf(UU)
        })).filter((function(UU) {
          return "" !== UU || !!UU
        })).concat(cU.classes).join(" "),
        eU = {
          children: [],
          attributes: qU(qU({}, cU.attributes), {}, {
            "data-prefix": pU,
            "data-icon": EU,
            class: QU,
            role: cU.attributes.role || "img",
            viewBox: "0 0 ".concat(CU, " ").concat(hU)
          })
        };
      (function(UU) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(RU) {
          return RU in UU
        }))
      })(cU.attributes) || cU.attributes["aria-hidden"] || (eU.attributes["aria-hidden"] = "true"), jU && (eU.attributes[QR] = "");
      var WU = qU(qU({}, eU), {}, {
          prefix: pU,
          iconName: EU,
          main: gU,
          mask: tU,
          maskId: KU,
          transform: PU,
          symbol: TU,
          styles: qU({}, cU.styles)
        }),
        fU = tU.found && gU.found ? Ag("generateAbstractMask", WU) || {
          children: [],
          attributes: {}
        } : Ag("generateAbstractIcon", WU) || {
          children: [],
          attributes: {}
        },
        xU = fU.children,
        mU = fU.attributes;
      return WU.children = xU, WU.attributes = mU, TU ? function(UU) {
        var RU = UU.prefix,
          gU = UU.iconName,
          tU = UU.children,
          pU = UU.attributes,
          EU = UU.symbol,
          PU = !0 === EU ? "".concat(RU, "-").concat(kR.cssPrefix, "-").concat(gU) : EU;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: qU(qU({}, pU), {}, {
              id: PU
            }),
            children: tU
          }]
        }]
      }(WU) : function(UU) {
        var RU = UU.children,
          gU = UU.main,
          tU = UU.mask,
          pU = UU.attributes,
          EU = UU.styles,
          PU = UU.transform;
        if (lR(PU) && gU.found && !tU.found) {
          var TU = {
            x: gU.width / gU.height / 2,
            y: .5
          };
          pU.style = NR(qU(qU({}, EU), {}, {
            "transform-origin": "".concat(TU.x + PU.x / 16, "em ").concat(TU.y + PU.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: pU,
          children: RU
        }]
      }(WU)
    }

    function Ut(UU) {
      var RU = UU.content,
        gU = UU.width,
        tU = UU.height,
        pU = UU.transform,
        EU = UU.extra,
        PU = UU.watchable,
        TU = void 0 !== PU && PU,
        KU = qU(qU({}, EU.attributes), {}, {
          class: EU.classes.join(" ")
        });
      TU && (KU[QR] = "");
      var cU = qU({}, EU.styles);
      lR(pU) && (cU.transform = function(UU) {
        var RU = UU.transform,
          gU = UU.width,
          tU = void 0 === gU ? 16 : gU,
          pU = UU.height,
          EU = void 0 === pU ? 16 : pU,
          PU = UU.startCentered,
          TU = void 0 !== PU && PU,
          qU = "";
        return qU += TU && ZU ? "translate(".concat(RU.x / iR - tU / 2, "em, ").concat(RU.y / iR - EU / 2, "em) ") : TU ? "translate(calc(-50% + ".concat(RU.x / iR, "em), calc(-50% + ").concat(RU.y / iR, "em)) ") : "translate(".concat(RU.x / iR, "em, ").concat(RU.y / iR, "em) "), qU += "scale(".concat(RU.size / iR * (RU.flipX ? -1 : 1), ", ").concat(RU.size / iR * (RU.flipY ? -1 : 1), ") "), qU + "rotate(".concat(RU.rotate, "deg) ")
      }({
        transform: pU,
        startCentered: !0,
        width: gU,
        height: tU
      }), cU["-webkit-transform"] = cU.transform);
      var GU = NR(cU);
      GU.length > 0 && (KU.style = GU);
      var jU = [];
      return jU.push({
        tag: "span",
        attributes: KU,
        children: [RU]
      }), jU
    }
    var Rt = pg.styles;

    function gt(UU) {
      var RU = UU[0],
        gU = UU[1],
        tU = KU(UU.slice(4), 1)[0];
      return {
        found: !0,
        width: RU,
        height: gU,
        icon: Array.isArray(tU) ? {
          tag: "g",
          attributes: {
            class: "".concat(kR.cssPrefix, "-").concat(dR.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(kR.cssPrefix, "-").concat(dR.SECONDARY),
              fill: "currentColor",
              d: tU[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(kR.cssPrefix, "-").concat(dR.PRIMARY),
              fill: "currentColor",
              d: tU[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: tU
          }
        }
      }
    }
    var tt = {
      found: !1,
      width: 512,
      height: 512
    };

    function pt(UU, RU) {
      var gU = RU;
      return "fa" === RU && null !== kR.styleDefault && (RU = Yg()), new Promise((function(tU, pU) {
        if ("fa" === gU) {
          var EU = ag(UU) || {};
          UU = EU.iconName || UU, RU = EU.prefix || RU
        }
        if (UU && RU && Rt[RU] && Rt[RU][UU]) return tU(gt(Rt[RU][UU]));
        ! function(UU, RU) {
          JR || kR.showMissingIcons || !UU || console.error('Icon with name "'.concat(UU, '" and prefix "').concat(RU, '" is missing.'))
        }(UU, RU), tU(qU(qU({}, tt), {}, {
          icon: kR.showMissingIcons && UU && Ag("missingIconAbstract") || {}
        }))
      }))
    }
    var Et = function() {},
      Pt = kR.measurePerformance && bU && bU.mark && bU.measure ? bU : {
        mark: Et,
        measure: Et
      },
      Tt = 'FA "7.2.0"',
      qt = function(UU) {
        Pt.mark("".concat(Tt, " ").concat(UU, " ends")), Pt.measure("".concat(Tt, " ").concat(UU), "".concat(Tt, " ").concat(UU, " begins"), "".concat(Tt, " ").concat(UU, " ends"))
      },
      Kt = function(UU) {
        return Pt.mark("".concat(Tt, " ").concat(UU, " begins")),
          function() {
            return qt(UU)
          }
      },
      ct = function() {};

    function Gt(UU) {
      return "string" === typeof(UU.getAttribute ? UU.getAttribute(QR) : null)
    }

    function jt(UU) {
      return wU.createElementNS("http://www.w3.org/2000/svg", UU)
    }

    function ut(UU) {
      return wU.createElement(UU)
    }

    function Ct(UU) {
      var RU = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        gU = void 0 === RU ? "svg" === UU.tag ? jt : ut : RU;
      if ("string" === typeof UU) return wU.createTextNode(UU);
      var tU = gU(UU.tag);
      return Object.keys(UU.attributes || []).forEach((function(RU) {
        tU.setAttribute(RU, UU.attributes[RU])
      })), (UU.children || []).forEach((function(UU) {
        tU.appendChild(Ct(UU, {
          ceFn: gU
        }))
      })), tU
    }
    var ht = {
      replace: function(UU) {
        var RU = UU[0];
        if (RU.parentNode)
          if (UU[1].forEach((function(UU) {
              RU.parentNode.insertBefore(Ct(UU), RU)
            })), null === RU.getAttribute(QR) && kR.keepOriginalSource) {
            var gU = wU.createComment(function(UU) {
              var RU = " ".concat(UU.outerHTML, " ");
              return "".concat(RU, "Font Awesome fontawesome.com ")
            }(RU));
            RU.parentNode.replaceChild(gU, RU)
          } else RU.remove()
      },
      nest: function(UU) {
        var RU = UU[0],
          gU = UU[1];
        if (~DR(RU).indexOf(kR.replacementClass)) return ht.replace(UU);
        var tU = new RegExp("".concat(kR.cssPrefix, "-.*"));
        if (delete gU[0].attributes.id, gU[0].attributes.class) {
          var pU = gU[0].attributes.class.split(" ").reduce((function(UU, RU) {
            return RU === kR.replacementClass || RU.match(tU) ? UU.toSvg.push(RU) : UU.toNode.push(RU), UU
          }), {
            toNode: [],
            toSvg: []
          });
          gU[0].attributes.class = pU.toSvg.join(" "), 0 === pU.toNode.length ? RU.removeAttribute("class") : RU.setAttribute("class", pU.toNode.join(" "))
        }
        var EU = gU.map((function(UU) {
          return qg(UU)
        })).join("\n");
        RU.setAttribute(QR, ""), RU.innerHTML = EU
      }
    };

    function Qt(UU) {
      UU()
    }

    function et(UU, RU) {
      var gU = "function" === typeof RU ? RU : ct;
      if (0 === UU.length) gU();
      else {
        var tU = Qt;
        "async" === kR.mutateApproach && (tU = JU.requestAnimationFrame || Qt), tU((function() {
          var RU = !0 === kR.autoReplaceSvg ? ht.replace : ht[kR.autoReplaceSvg] || ht.replace,
            tU = Kt("mutate");
          UU.map(RU), tU(), gU()
        }))
      }
    }
    var Wt = !1;

    function ft() {
      Wt = !0
    }

    function xt() {
      Wt = !1
    }
    var mt = null;

    function It(UU) {
      if (nU && kR.observeMutations) {
        var RU = UU.treeCallback,
          gU = void 0 === RU ? ct : RU,
          tU = UU.nodeCallback,
          pU = void 0 === tU ? ct : tU,
          EU = UU.pseudoElementsCallback,
          PU = void 0 === EU ? ct : EU,
          TU = UU.observeMutationsRoot,
          qU = void 0 === TU ? wU : TU;
        mt = new nU((function(UU) {
          if (!Wt) {
            var RU = Yg();
            MR(UU).forEach((function(UU) {
              if ("childList" === UU.type && UU.addedNodes.length > 0 && !Gt(UU.addedNodes[0]) && (kR.searchPseudoElements && PU(UU.target), gU(UU.target)), "attributes" === UU.type && UU.target.parentNode && kR.searchPseudoElements && PU([UU.target], !0), "attributes" === UU.type && Gt(UU.target) && ~vR.indexOf(UU.attributeName))
                if ("class" === UU.attributeName && function(UU) {
                    var RU = UU.getAttribute ? UU.getAttribute(WR) : null,
                      gU = UU.getAttribute ? UU.getAttribute(fR) : null;
                    return RU && gU
                  }(UU.target)) {
                  var tU = Xg(DR(UU.target)),
                    EU = tU.prefix,
                    TU = tU.iconName;
                  UU.target.setAttribute(WR, EU || RU), TU && UU.target.setAttribute(fR, TU)
                } else(qU = UU.target) && qU.classList && qU.classList.contains && qU.classList.contains(kR.replacementClass) && pU(UU.target);
              var qU
            }))
          }
        })), oU && mt.observe(qU, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function Jt(UU) {
      var RU, gU, tU = UU.getAttribute("data-prefix"),
        pU = UU.getAttribute("data-icon"),
        EU = void 0 !== UU.innerText ? UU.innerText.trim() : "",
        PU = Xg(DR(UU));
      return PU.prefix || (PU.prefix = Yg()), tU && pU && (PU.prefix = tU, PU.iconName = pU), PU.iconName && PU.prefix || (PU.prefix && EU.length > 0 && (PU.iconName = (RU = PU.prefix, gU = UU.innerText, (xg[RU] || {})[gU] || og(PU.prefix, Gg(UU.innerText)))), !PU.iconName && kR.autoFetchSvg && UU.firstChild && UU.firstChild.nodeType === Node.TEXT_NODE && (PU.iconName = UU.firstChild.data)), PU
    }

    function wt(UU) {
      var RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        gU = Jt(UU),
        tU = gU.iconName,
        pU = gU.prefix,
        EU = gU.rest,
        PU = function(UU) {
          return MR(UU.attributes).reduce((function(UU, RU) {
            return "class" !== UU.name && "style" !== UU.name && (UU[RU.name] = RU.value), UU
          }), {})
        }(UU),
        TU = Fg("parseNodeAttributes", {}, UU),
        KU = RU.styleParser ? function(UU) {
          var RU = UU.getAttribute("style"),
            gU = [];
          return RU && (gU = RU.split(";").reduce((function(UU, RU) {
            var gU = RU.split(":"),
              tU = gU[0],
              pU = gU.slice(1);
            return tU && pU.length > 0 && (UU[tU] = pU.join(":").trim()), UU
          }), {})), gU
        }(UU) : [];
      return qU({
        iconName: tU,
        prefix: pU,
        transform: AR,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: EU,
          styles: KU,
          attributes: PU
        }
      }, TU)
    }
    var nt = pg.styles;

    function bt(UU) {
      var RU = "nest" === kR.autoReplaceSvg ? wt(UU, {
        styleParser: !1
      }) : wt(UU);
      return ~RU.extra.classes.indexOf(rR) ? Ag("generateLayersText", UU, RU) : Ag("generateSvgReplacementMutation", UU, RU)
    }

    function ot(UU) {
      var RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!oU) return Promise.resolve();
      var gU = wU.documentElement.classList,
        tU = function(UU) {
          return gU.add("".concat(xR, "-").concat(UU))
        },
        pU = function(UU) {
          return gU.remove("".concat(xR, "-").concat(UU))
        },
        EU = kR.autoFetchSvg ? [].concat(cU(UR), cU(cR)) : YU.concat(Object.keys(nt));
      EU.includes("fa") || EU.push("fa");
      var PU = [".".concat(rR, ":not([").concat(QR, "])")].concat(EU.map((function(UU) {
        return ".".concat(UU, ":not([").concat(QR, "])")
      }))).join(", ");
      if (0 === PU.length) return Promise.resolve();
      var TU = [];
      try {
        TU = MR(UU.querySelectorAll(PU))
      } catch (GU) {}
      if (!(TU.length > 0)) return Promise.resolve();
      tU("pending"), pU("complete");
      var qU = Kt("onTree"),
        KU = TU.reduce((function(UU, RU) {
          try {
            var gU = bt(RU);
            gU && UU.push(gU)
          } catch (GU) {
            JR || "MissingIcon" === GU.name && console.error(GU)
          }
          return UU
        }), []);
      return new Promise((function(UU, gU) {
        Promise.all(KU).then((function(gU) {
          et(gU, (function() {
            tU("active"), tU("complete"), pU("pending"), "function" === typeof RU && RU(), qU(), UU()
          }))
        })).catch((function(UU) {
          qU(), gU(UU)
        }))
      }))
    }

    function Zt(UU) {
      var RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      bt(UU).then((function(UU) {
        UU && et([UU], RU)
      }))
    }
    var Yt = function(UU) {
        var RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gU = RU.transform,
          tU = void 0 === gU ? AR : gU,
          pU = RU.symbol,
          EU = void 0 !== pU && pU,
          PU = RU.mask,
          TU = void 0 === PU ? null : PU,
          KU = RU.maskId,
          cU = void 0 === KU ? null : KU,
          GU = RU.classes,
          jU = void 0 === GU ? [] : GU,
          uU = RU.attributes,
          CU = void 0 === uU ? {} : uU,
          hU = RU.styles,
          QU = void 0 === hU ? {} : hU;
        if (UU) {
          var eU = UU.prefix,
            WU = UU.iconName,
            fU = UU.icon;
          return lg(qU({
            type: "icon"
          }, UU), (function() {
            return ig("beforeDOMElementCreation", {
              iconDefinition: UU,
              params: RU
            }), Og({
              icons: {
                main: gt(fU),
                mask: TU ? gt(TU.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: eU,
              iconName: WU,
              transform: qU(qU({}, AR), tU),
              symbol: EU,
              maskId: cU,
              extra: {
                attributes: CU,
                styles: QU,
                classes: jU
              }
            })
          }))
        }
      },
      Bt = {
        mixout: function() {
          return {
            icon: (UU = Yt, function(RU) {
              var gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                tU = (RU || {}).icon ? RU : zg(RU || {}),
                pU = gU.mask;
              return pU && (pU = (pU || {}).icon ? pU : zg(pU || {})), UU(tU, qU(qU({}, gU), {}, {
                mask: pU
              }))
            })
          };
          var UU
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(UU) {
              return UU.treeCallback = ot, UU.nodeCallback = Zt, UU
            }
          }
        },
        provides: function(UU) {
          UU.i2svg = function(UU) {
            var RU = UU.node,
              gU = void 0 === RU ? wU : RU,
              tU = UU.callback;
            return ot(gU, void 0 === tU ? function() {} : tU)
          }, UU.generateSvgReplacementMutation = function(UU, RU) {
            var gU = RU.iconName,
              tU = RU.prefix,
              pU = RU.transform,
              EU = RU.symbol,
              PU = RU.mask,
              TU = RU.maskId,
              qU = RU.extra;
            return new Promise((function(RU, cU) {
              Promise.all([pt(gU, tU), PU.iconName ? pt(PU.iconName, PU.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(PU) {
                var cU = KU(PU, 2),
                  GU = cU[0],
                  jU = cU[1];
                RU([UU, Og({
                  icons: {
                    main: GU,
                    mask: jU
                  },
                  prefix: tU,
                  iconName: gU,
                  transform: pU,
                  symbol: EU,
                  maskId: TU,
                  extra: qU,
                  watchable: !0
                })])
              })).catch(cU)
            }))
          }, UU.generateAbstractIcon = function(UU) {
            var RU, gU = UU.children,
              tU = UU.attributes,
              pU = UU.main,
              EU = UU.transform,
              PU = NR(UU.styles);
            return PU.length > 0 && (tU.style = PU), lR(EU) && (RU = Ag("generateAbstractTransformGrouping", {
              main: pU,
              transform: EU,
              containerWidth: pU.width,
              iconWidth: pU.width
            })), gU.push(RU || pU.icon), {
              children: gU,
              attributes: tU
            }
          }
        }
      },
      Vt = {
        mixout: function() {
          return {
            layer: function(UU) {
              var RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                gU = RU.classes,
                tU = void 0 === gU ? [] : gU;
              return lg({
                type: "layer"
              }, (function() {
                ig("beforeDOMElementCreation", {
                  assembler: UU,
                  params: RU
                });
                var gU = [];
                return UU((function(UU) {
                  Array.isArray(UU) ? UU.map((function(UU) {
                    gU = gU.concat(UU.abstract)
                  })) : gU = gU.concat(UU.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(kR.cssPrefix, "-layers")].concat(cU(tU)).join(" ")
                  },
                  children: gU
                }]
              }))
            }
          }
        }
      },
      rt = {
        mixout: function() {
          return {
            counter: function(UU) {
              var RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                gU = RU.title,
                tU = void 0 === gU ? null : gU,
                pU = RU.classes,
                EU = void 0 === pU ? [] : pU,
                PU = RU.attributes,
                TU = void 0 === PU ? {} : PU,
                KU = RU.styles,
                GU = void 0 === KU ? {} : KU;
              return lg({
                type: "counter",
                content: UU
              }, (function() {
                return ig("beforeDOMElementCreation", {
                    content: UU,
                    params: RU
                  }),
                  function(UU) {
                    var RU = UU.content,
                      gU = UU.extra,
                      tU = qU(qU({}, gU.attributes), {}, {
                        class: gU.classes.join(" ")
                      }),
                      pU = NR(gU.styles);
                    pU.length > 0 && (tU.style = pU);
                    var EU = [];
                    return EU.push({
                      tag: "span",
                      attributes: tU,
                      children: [RU]
                    }), EU
                  }({
                    content: UU.toString(),
                    title: tU,
                    extra: {
                      attributes: TU,
                      styles: GU,
                      classes: ["".concat(kR.cssPrefix, "-layers-counter")].concat(cU(EU))
                    }
                  })
              }))
            }
          }
        }
      },
      Xt = {
        mixout: function() {
          return {
            text: function(UU) {
              var RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                gU = RU.transform,
                tU = void 0 === gU ? AR : gU,
                pU = RU.classes,
                EU = void 0 === pU ? [] : pU,
                PU = RU.attributes,
                TU = void 0 === PU ? {} : PU,
                KU = RU.styles,
                GU = void 0 === KU ? {} : KU;
              return lg({
                type: "text",
                content: UU
              }, (function() {
                return ig("beforeDOMElementCreation", {
                  content: UU,
                  params: RU
                }), Ut({
                  content: UU,
                  transform: qU(qU({}, AR), tU),
                  extra: {
                    attributes: TU,
                    styles: GU,
                    classes: ["".concat(kR.cssPrefix, "-layers-text")].concat(cU(EU))
                  }
                })
              }))
            }
          }
        },
        provides: function(UU) {
          UU.generateLayersText = function(UU, RU) {
            var gU = RU.transform,
              tU = RU.extra,
              pU = null,
              EU = null;
            if (ZU) {
              var PU = parseInt(getComputedStyle(UU).fontSize, 10),
                TU = UU.getBoundingClientRect();
              pU = TU.width / PU, EU = TU.height / PU
            }
            return Promise.resolve([UU, Ut({
              content: UU.innerHTML,
              width: pU,
              height: EU,
              transform: gU,
              extra: tU,
              watchable: !0
            })])
          }
        }
      },
      vt = new RegExp('"', "ug"),
      dt = [1105920, 1112319],
      Ht = qU(qU(qU(qU({}, {
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
      St = Object.keys(Ht).reduce((function(UU, RU) {
        return UU[RU.toLowerCase()] = Ht[RU], UU
      }), {}),
      st = Object.keys(St).reduce((function(UU, RU) {
        var gU = St[RU];
        return UU[RU] = gU[900] || cU(Object.entries(gU))[0][1], UU
      }), {});

    function yt(UU, RU) {
      var gU = "".concat("data-fa-pseudo-element-pending").concat(RU.replace(":", "-"));
      return new Promise((function(tU, pU) {
        if (null !== UU.getAttribute(gU)) return tU();
        var EU = MR(UU.children).filter((function(UU) {
            return UU.getAttribute(eR) === RU
          }))[0],
          PU = JU.getComputedStyle(UU, RU),
          TU = PU.getPropertyValue("font-family"),
          KU = TU.match(XR),
          GU = PU.getPropertyValue("font-weight"),
          jU = PU.getPropertyValue("content");
        if (EU && !KU) return UU.removeChild(EU), tU();
        if (KU && "none" !== jU && "" !== jU) {
          var uU = PU.getPropertyValue("content"),
            CU = function(UU, RU) {
              var gU = UU.replace(/^['"]|['"]$/g, "").toLowerCase(),
                tU = parseInt(RU),
                pU = isNaN(tU) ? "normal" : tU;
              return (St[gU] || {})[pU] || st[gU]
            }(TU, GU),
            hU = function(UU) {
              return Gg(cU(UU.replace(vt, ""))[0] || "")
            }(uU),
            QU = KU[0].startsWith("FontAwesome"),
            eU = function(UU) {
              var RU = UU.getPropertyValue("font-feature-settings").includes("ss01"),
                gU = UU.getPropertyValue("content").replace(vt, ""),
                tU = gU.codePointAt(0),
                pU = tU >= dt[0] && tU <= dt[1],
                EU = 2 === gU.length && gU[0] === gU[1];
              return pU || EU || RU
            }(PU),
            WU = og(CU, hU),
            fU = WU;
          if (QU) {
            var xU = function(UU) {
              var RU = Ig[UU],
                gU = og("fas", UU);
              return RU || (gU ? {
                prefix: "fas",
                iconName: gU
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(hU);
            xU.iconName && xU.prefix && (WU = xU.iconName, CU = xU.prefix)
          }
          if (!WU || eU || EU && EU.getAttribute(WR) === CU && EU.getAttribute(fR) === fU) tU();
          else {
            UU.setAttribute(gU, fU), EU && UU.removeChild(EU);
            var mU = {
                iconName: null,
                prefix: null,
                transform: AR,
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
              IU = mU.extra;
            IU.attributes[eR] = RU, pt(WU, CU).then((function(pU) {
              var EU = Og(qU(qU({}, mU), {}, {
                  icons: {
                    main: pU,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: CU,
                  iconName: fU,
                  extra: IU,
                  watchable: !0
                })),
                PU = wU.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === RU ? UU.insertBefore(PU, UU.firstChild) : UU.appendChild(PU), PU.outerHTML = EU.map((function(UU) {
                return qg(UU)
              })).join("\n"), UU.removeAttribute(gU), tU()
            })).catch(pU)
          }
        } else tU()
      }))
    }

    function kt(UU) {
      return Promise.all([yt(UU, "::before"), yt(UU, "::after")])
    }

    function Ft(UU) {
      return UU.parentNode !== document.head && !~mR.indexOf(UU.tagName.toUpperCase()) && !UU.getAttribute(eR) && (!UU.parentNode || "svg" !== UU.parentNode.tagName)
    }
    var it = function(UU) {
        return !!UU && IR.some((function(RU) {
          return UU.includes(RU)
        }))
      },
      At = function(UU) {
        if (!UU) return [];
        var RU = new Set,
          gU = UU.split(/,(?![^()]*\))/).map((function(UU) {
            return UU.trim()
          }));
        gU = gU.flatMap((function(UU) {
          return UU.includes("(") ? UU : UU.split(",").map((function(UU) {
            return UU.trim()
          }))
        }));
        var tU, pU = EU(gU);
        try {
          for (pU.s(); !(tU = pU.n()).done;) {
            var PU = tU.value;
            if (it(PU)) {
              var TU = IR.reduce((function(UU, RU) {
                return UU.replace(RU, "")
              }), PU);
              "" !== TU && "*" !== TU && RU.add(TU)
            }
          }
        } catch (qU) {
          pU.e(qU)
        } finally {
          pU.f()
        }
        return RU
      };

    function zt(UU) {
      if (oU) {
        var RU;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) RU = UU;
        else if (kR.searchPseudoElementsFullScan) RU = UU.querySelectorAll("*");
        else {
          var gU, tU = new Set,
            pU = EU(document.styleSheets);
          try {
            for (pU.s(); !(gU = pU.n()).done;) {
              var PU = gU.value;
              try {
                var TU, qU = EU(PU.cssRules);
                try {
                  for (qU.s(); !(TU = qU.n()).done;) {
                    var KU, cU = TU.value,
                      GU = EU(At(cU.selectorText));
                    try {
                      for (GU.s(); !(KU = GU.n()).done;) {
                        var jU = KU.value;
                        tU.add(jU)
                      }
                    } catch (CU) {
                      GU.e(CU)
                    } finally {
                      GU.f()
                    }
                  }
                } catch (CU) {
                  qU.e(CU)
                } finally {
                  qU.f()
                }
              } catch (hU) {
                kR.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(PU.href, " (").concat(hU.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (CU) {
            pU.e(CU)
          } finally {
            pU.f()
          }
          if (!tU.size) return;
          var uU = Array.from(tU).join(", ");
          try {
            RU = UU.querySelectorAll(uU)
          } catch (QU) {}
        }
        return new Promise((function(UU, gU) {
          var tU = MR(RU).filter(Ft).map(kt),
            pU = Kt("searchPseudoElements");
          ft(), Promise.all(tU).then((function() {
            pU(), xt(), UU()
          })).catch((function() {
            pU(), xt(), gU()
          }))
        }))
      }
    }
    var Mt = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(UU) {
              return UU.pseudoElementsCallback = zt, UU
            }
          }
        },
        provides: function(UU) {
          UU.pseudoElements2svg = function(UU) {
            var RU = UU.node,
              gU = void 0 === RU ? wU : RU;
            kR.searchPseudoElements && zt(gU)
          }
        }
      },
      Dt = !1,
      Lt = function(UU) {
        return UU.toLowerCase().split(" ").reduce((function(UU, RU) {
          var gU = RU.toLowerCase().split("-"),
            tU = gU[0],
            pU = gU.slice(1).join("-");
          if (tU && "h" === pU) return UU.flipX = !0, UU;
          if (tU && "v" === pU) return UU.flipY = !0, UU;
          if (pU = parseFloat(pU), isNaN(pU)) return UU;
          switch (tU) {
            case "grow":
              UU.size = UU.size + pU;
              break;
            case "shrink":
              UU.size = UU.size - pU;
              break;
            case "left":
              UU.x = UU.x - pU;
              break;
            case "right":
              UU.x = UU.x + pU;
              break;
            case "up":
              UU.y = UU.y - pU;
              break;
            case "down":
              UU.y = UU.y + pU;
              break;
            case "rotate":
              UU.rotate = UU.rotate + pU
          }
          return UU
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      Nt = {
        mixout: function() {
          return {
            parse: {
              transform: function(UU) {
                return Lt(UU)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(UU, RU) {
              var gU = RU.getAttribute("data-fa-transform");
              return gU && (UU.transform = Lt(gU)), UU
            }
          }
        },
        provides: function(UU) {
          UU.generateAbstractTransformGrouping = function(UU) {
            var RU = UU.main,
              gU = UU.transform,
              tU = UU.containerWidth,
              pU = UU.iconWidth,
              EU = {
                transform: "translate(".concat(tU / 2, " 256)")
              },
              PU = "translate(".concat(32 * gU.x, ", ").concat(32 * gU.y, ") "),
              TU = "scale(".concat(gU.size / 16 * (gU.flipX ? -1 : 1), ", ").concat(gU.size / 16 * (gU.flipY ? -1 : 1), ") "),
              KU = "rotate(".concat(gU.rotate, " 0 0)"),
              cU = {
                outer: EU,
                inner: {
                  transform: "".concat(PU, " ").concat(TU, " ").concat(KU)
                },
                path: {
                  transform: "translate(".concat(pU / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: qU({}, cU.outer),
              children: [{
                tag: "g",
                attributes: qU({}, cU.inner),
                children: [{
                  tag: RU.icon.tag,
                  children: RU.icon.children,
                  attributes: qU(qU({}, RU.icon.attributes), cU.path)
                }]
              }]
            }
          }
        }
      },
      lt = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function Ot(UU) {
      var RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return UU.attributes && (UU.attributes.fill || RU) && (UU.attributes.fill = "black"), UU
    }
    var Up = {
        hooks: function() {
          return {
            parseNodeAttributes: function(UU, RU) {
              var gU = RU.getAttribute("data-fa-mask"),
                tU = gU ? Xg(gU.split(" ").map((function(UU) {
                  return UU.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return tU.prefix || (tU.prefix = Yg()), UU.mask = tU, UU.maskId = RU.getAttribute("data-fa-mask-id"), UU
            }
          }
        },
        provides: function(UU) {
          UU.generateAbstractMask = function(UU) {
            var RU, gU = UU.children,
              tU = UU.attributes,
              pU = UU.main,
              EU = UU.mask,
              PU = UU.maskId,
              TU = UU.transform,
              KU = pU.width,
              cU = pU.icon,
              GU = EU.width,
              jU = EU.icon,
              uU = function(UU) {
                var RU = UU.transform,
                  gU = UU.containerWidth,
                  tU = UU.iconWidth,
                  pU = {
                    transform: "translate(".concat(gU / 2, " 256)")
                  },
                  EU = "translate(".concat(32 * RU.x, ", ").concat(32 * RU.y, ") "),
                  PU = "scale(".concat(RU.size / 16 * (RU.flipX ? -1 : 1), ", ").concat(RU.size / 16 * (RU.flipY ? -1 : 1), ") "),
                  TU = "rotate(".concat(RU.rotate, " 0 0)");
                return {
                  outer: pU,
                  inner: {
                    transform: "".concat(EU, " ").concat(PU, " ").concat(TU)
                  },
                  path: {
                    transform: "translate(".concat(tU / 2 * -1, " -256)")
                  }
                }
              }({
                transform: TU,
                containerWidth: GU,
                iconWidth: KU
              }),
              CU = {
                tag: "rect",
                attributes: qU(qU({}, lt), {}, {
                  fill: "white"
                })
              },
              hU = cU.children ? {
                children: cU.children.map(Ot)
              } : {},
              QU = {
                tag: "g",
                attributes: qU({}, uU.inner),
                children: [Ot(qU({
                  tag: cU.tag,
                  attributes: qU(qU({}, cU.attributes), uU.path)
                }, hU))]
              },
              eU = {
                tag: "g",
                attributes: qU({}, uU.outer),
                children: [QU]
              },
              WU = "mask-".concat(PU || zR()),
              fU = "clip-".concat(PU || zR()),
              xU = {
                tag: "mask",
                attributes: qU(qU({}, lt), {}, {
                  id: WU,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [CU, eU]
              },
              mU = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: fU
                  },
                  children: (RU = jU, "g" === RU.tag ? RU.children : [RU])
                }, xU]
              };
            return gU.push(mU, {
              tag: "rect",
              attributes: qU({
                fill: "currentColor",
                "clip-path": "url(#".concat(fU, ")"),
                mask: "url(#".concat(WU, ")")
              }, lt)
            }), {
              children: gU,
              attributes: tU
            }
          }
        }
      },
      Rp = {
        provides: function(UU) {
          var RU = !1;
          JU.matchMedia && (RU = JU.matchMedia("(prefers-reduced-motion: reduce)").matches), UU.missingIconAbstract = function() {
            var UU = [],
              gU = {
                fill: "currentColor"
              },
              tU = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            UU.push({
              tag: "path",
              attributes: qU(qU({}, gU), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var pU = qU(qU({}, tU), {}, {
                attributeName: "opacity"
              }),
              EU = {
                tag: "circle",
                attributes: qU(qU({}, gU), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return RU || EU.children.push({
              tag: "animate",
              attributes: qU(qU({}, tU), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: qU(qU({}, pU), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), UU.push(EU), UU.push({
              tag: "path",
              attributes: qU(qU({}, gU), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: RU ? [] : [{
                tag: "animate",
                attributes: qU(qU({}, pU), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), RU || UU.push({
              tag: "path",
              attributes: qU(qU({}, gU), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: qU(qU({}, pU), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: UU
            }
          }
        }
      };
    ! function(UU, RU) {
      var gU = RU.mixoutsTo;
      Sg = UU, sg = {}, Object.keys(yg).forEach((function(UU) {
        -1 === kg.indexOf(UU) && delete yg[UU]
      })), Sg.forEach((function(UU) {
        var RU = UU.mixout ? UU.mixout() : {};
        if (Object.keys(RU).forEach((function(UU) {
            "function" === typeof RU[UU] && (gU[UU] = RU[UU]), "object" === jU(RU[UU]) && Object.keys(RU[UU]).forEach((function(tU) {
              gU[UU] || (gU[UU] = {}), gU[UU][tU] = RU[UU][tU]
            }))
          })), UU.hooks) {
          var tU = UU.hooks();
          Object.keys(tU).forEach((function(UU) {
            sg[UU] || (sg[UU] = []), sg[UU].push(tU[UU])
          }))
        }
        UU.provides && UU.provides(yg)
      }))
    }([gg, Bt, Vt, rt, Xt, Mt, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              ft(), Dt = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            It(Fg("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            mt && mt.disconnect()
          },
          watch: function(UU) {
            var RU = UU.observeMutationsRoot;
            Dt ? xt() : It(Fg("mutationObserverCallbacks", {
              observeMutationsRoot: RU
            }))
          }
        }
      }
    }, Nt, Up, Rp, {
      hooks: function() {
        return {
          parseNodeAttributes: function(UU, RU) {
            var gU = RU.getAttribute("data-fa-symbol"),
              tU = null !== gU && ("" === gU || gU);
            return UU.symbol = tU, UU
          }
        }
      }
    }], {
      mixoutsTo: Lg
    });
    var gp = Lg.noAuto,
      tp = Lg.config,
      pp = Lg.library,
      Ep = Lg.dom,
      Pp = Lg.parse,
      Tp = Lg.findIconDefinition,
      qp = Lg.toHtml,
      Kp = Lg.icon,
      cp = Lg.layer,
      Gp = Lg.text,
      jp = Lg.counter
  },
  6366: UU => {
    UU.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);