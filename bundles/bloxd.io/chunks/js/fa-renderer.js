/*! For license information please see 1yqdn.fa-renderer.59fd3f7b.chunk.js.LICENSE.txt */
export const id = 39;
export const ids = [39];
export const modules = {
  7766: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      FontAwesomeIcon: () => yW
    });
    var mW = OW(7763),
      EW = OW(5868),
      NW = OW.n(EW),
      PW = OW(62);

    function LW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function cW(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW, iW) {
          if ("object" != typeof WW || !WW) return WW;
          var OW = WW[Symbol.toPrimitive];
          if (void 0 !== OW) {
            var mW = OW.call(WW, iW || "default");
            if ("object" != typeof mW) return mW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === iW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == typeof iW ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function wW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function tW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? wW(Object(OW), !0).forEach((function(iW) {
          cW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : wW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function ZW(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        var OW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != OW) {
          var mW, EW, NW, PW, LW = [],
            cW = !0,
            wW = !1;
          try {
            if (NW = (OW = OW.call(WW)).next, 0 === iW) {
              if (Object(OW) !== OW) return;
              cW = !1
            } else
              for (; !(cW = (mW = NW.call(OW)).done) && (LW.push(mW.value), LW.length !== iW); cW = !0);
          } catch (WW) {
            wW = !0, EW = WW
          } finally {
            try {
              if (!cW && null != OW.return && (PW = OW.return(), Object(PW) !== PW)) return
            } finally {
              if (wW) throw EW
            }
          }
          return LW
        }
      }(WW, iW) || AW(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xW(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return LW(WW)
      }(WW) || function(WW) {
        if ("undefined" != typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || AW(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lW(WW) {
      return lW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, lW(WW)
    }

    function AW(WW, iW) {
      if (WW) {
        if ("string" == typeof WW) return LW(WW, iW);
        var OW = {}.toString.call(WW).slice(8, -1);
        return "Object" === OW && WW.constructor && (OW = WW.constructor.name), "Map" === OW || "Set" === OW ? Array.from(WW) : "Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW) ? LW(WW, iW) : void 0
      }
    }
    var bW;
    try {
      var jW = OW(7773);
      bW = jW.version
    } catch (JW) {
      bW = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function UW(WW) {
      var iW = WW.beat,
        OW = WW.fade,
        mW = WW.beatFade,
        EW = WW.bounce,
        NW = WW.shake,
        PW = WW.flash,
        LW = WW.spin,
        wW = WW.spinPulse,
        tW = WW.spinReverse,
        xW = WW.pulse,
        lW = WW.fixedWidth,
        AW = WW.inverse,
        jW = WW.border,
        UW = WW.listItem,
        kW = WW.flip,
        sW = WW.size,
        MW = WW.rotation,
        KW = WW.pull,
        SW = WW.swapOpacity,
        YW = WW.rotateBy,
        yW = WW.widthAuto,
        TW = function(WW, iW) {
          for (var OW = ZW(WW.split("-"), 2), mW = OW[0], EW = OW[1], NW = ZW(iW.split("-"), 2), PW = NW[0], LW = NW[1], cW = mW.split("."), wW = PW.split("."), tW = 0; tW < Math.max(cW.length, wW.length); tW++) {
            var xW = cW[tW] || "0",
              lW = wW[tW] || "0",
              AW = parseInt(xW, 10),
              bW = parseInt(lW, 10);
            if (AW !== bW) return AW > bW
          }
          for (var jW = 0; jW < Math.max(cW.length, wW.length); jW++) {
            var UW = cW[jW] || "0",
              kW = wW[jW] || "0";
            if (UW !== kW && UW.length !== kW.length) return UW.length < kW.length
          }
          return !(EW && !LW)
        }(bW, "7.0.0"),
        JW = cW(cW(cW(cW(cW(cW({
          "fa-beat": iW,
          "fa-fade": OW,
          "fa-beat-fade": mW,
          "fa-bounce": EW,
          "fa-shake": NW,
          "fa-flash": PW,
          "fa-spin": LW,
          "fa-spin-reverse": tW,
          "fa-spin-pulse": wW,
          "fa-pulse": xW,
          "fa-fw": lW,
          "fa-inverse": AW,
          "fa-border": jW,
          "fa-li": UW,
          "fa-flip": !0 === kW,
          "fa-flip-horizontal": "horizontal" === kW || "both" === kW,
          "fa-flip-vertical": "vertical" === kW || "both" === kW
        }, "fa-".concat(sW), "undefined" !== typeof sW && null !== sW), "fa-rotate-".concat(MW), "undefined" !== typeof MW && null !== MW && 0 !== MW), "fa-pull-".concat(KW), "undefined" !== typeof KW && null !== KW), "fa-swap-opacity", SW), "fa-rotate-by", TW && YW), "fa-width-auto", TW && yW);
      return Object.keys(JW).map((function(WW) {
        return JW[WW] ? WW : null
      })).filter((function(WW) {
        return WW
      }))
    }

    function kW(WW) {
      return iW = WW, (iW -= 0) === iW ? WW : (WW = WW.replace(/[\-_\s]+(.)?/g, (function(WW, iW) {
        return iW ? iW.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + WW.substr(1);
      var iW
    }
    var sW = ["style"];
    var MW = !1;
    try {
      MW = !0
    } catch (JW) {}

    function KW(WW) {
      return WW && "object" === lW(WW) && WW.prefix && WW.iconName && WW.icon ? WW : mW.parse.icon ? mW.parse.icon(WW) : null === WW ? null : WW && "object" === lW(WW) && WW.prefix && WW.iconName ? WW : Array.isArray(WW) && 2 === WW.length ? {
        prefix: WW[0],
        iconName: WW[1]
      } : "string" === typeof WW ? {
        prefix: "fas",
        iconName: WW
      } : void 0
    }

    function SW(WW, iW) {
      return Array.isArray(iW) && iW.length > 0 || !Array.isArray(iW) && iW ? cW({}, WW, iW) : {}
    }
    var YW = {
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
      yW = PW.forwardRef((function(WW, iW) {
        var OW = tW(tW({}, YW), WW),
          EW = OW.icon,
          NW = OW.mask,
          PW = OW.symbol,
          LW = OW.className,
          cW = OW.title,
          wW = OW.titleId,
          ZW = OW.maskId,
          lW = KW(EW),
          AW = SW("classes", [].concat(xW(UW(OW)), xW((LW || "").split(" ")))),
          bW = SW("transform", "string" === typeof OW.transform ? mW.parse.transform(OW.transform) : OW.transform),
          jW = SW("mask", KW(NW)),
          kW = (0, mW.icon)(lW, tW(tW(tW(tW({}, AW), bW), jW), {}, {
            symbol: PW,
            title: cW,
            titleId: wW,
            maskId: ZW
          }));
        if (!kW) return function() {
          var WW;
          !MW && console && "function" === typeof console.error && (WW = console).error.apply(WW, arguments)
        }("Could not find icon", lW), null;
        var sW = kW.abstract,
          yW = {
            ref: iW
          };
        return Object.keys(OW).forEach((function(WW) {
          YW.hasOwnProperty(WW) || (yW[WW] = OW[WW])
        })), TW(sW[0], yW)
      }));
    yW.displayName = "FontAwesomeIcon", yW.propTypes = {
      beat: NW().bool,
      border: NW().bool,
      beatFade: NW().bool,
      bounce: NW().bool,
      className: NW().string,
      fade: NW().bool,
      flash: NW().bool,
      mask: NW().oneOfType([NW().object, NW().array, NW().string]),
      maskId: NW().string,
      fixedWidth: NW().bool,
      inverse: NW().bool,
      flip: NW().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: NW().oneOfType([NW().object, NW().array, NW().string]),
      listItem: NW().bool,
      pull: NW().oneOf(["right", "left"]),
      pulse: NW().bool,
      rotation: NW().oneOf([0, 90, 180, 270]),
      rotateBy: NW().bool,
      shake: NW().bool,
      size: NW().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: NW().bool,
      spinPulse: NW().bool,
      spinReverse: NW().bool,
      symbol: NW().oneOfType([NW().bool, NW().string]),
      title: NW().string,
      titleId: NW().string,
      transform: NW().oneOfType([NW().string, NW().object]),
      swapOpacity: NW().bool,
      widthAuto: NW().bool
    };
    var TW = function WW(iW, OW) {
      var mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof OW) return OW;
      var EW = (OW.children || []).map((function(OW) {
          return WW(iW, OW)
        })),
        NW = Object.keys(OW.attributes || {}).reduce((function(WW, iW) {
          var mW = OW.attributes[iW];
          switch (iW) {
            case "class":
              WW.attrs.className = mW, delete OW.attributes.class;
              break;
            case "style":
              WW.attrs.style = mW.split(";").map((function(WW) {
                return WW.trim()
              })).filter((function(WW) {
                return WW
              })).reduce((function(WW, iW) {
                var OW, mW = iW.indexOf(":"),
                  EW = kW(iW.slice(0, mW)),
                  NW = iW.slice(mW + 1).trim();
                return EW.startsWith("webkit") ? WW[(OW = EW, OW.charAt(0).toUpperCase() + OW.slice(1))] = NW : WW[EW] = NW, WW
              }), {});
              break;
            default:
              0 === iW.indexOf("aria-") || 0 === iW.indexOf("data-") ? WW.attrs[iW.toLowerCase()] = mW : WW.attrs[kW(iW)] = mW
          }
          return WW
        }), {
          attrs: {}
        }),
        PW = mW.style,
        LW = void 0 === PW ? {} : PW,
        cW = function(WW, iW) {
          if (null == WW) return {};
          var OW, mW, EW = function(WW, iW) {
            if (null == WW) return {};
            var OW = {};
            for (var mW in WW)
              if ({}.hasOwnProperty.call(WW, mW)) {
                if (-1 !== iW.indexOf(mW)) continue;
                OW[mW] = WW[mW]
              } return OW
          }(WW, iW);
          if (Object.getOwnPropertySymbols) {
            var NW = Object.getOwnPropertySymbols(WW);
            for (mW = 0; mW < NW.length; mW++) OW = NW[mW], -1 === iW.indexOf(OW) && {}.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
          }
          return EW
        }(mW, sW);
      return NW.attrs.style = tW(tW({}, NW.attrs.style), LW), iW.apply(void 0, [OW.tag, tW(tW({}, NW.attrs), cW)].concat(xW(EW)))
    }.bind(null, PW.createElement)
  },
  5877: (WW, iW, OW) => {
    var mW = OW(5886);

    function EW() {}

    function NW() {}
    NW.resetWarningCache = EW, WW.exports = function() {
      function WW(WW, iW, OW, EW, NW, PW) {
        if (PW !== mW) {
          var LW = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw LW.name = "Invariant Violation", LW
        }
      }

      function iW() {
        return WW
      }
      WW.isRequired = WW;
      var OW = {
        array: WW,
        bigint: WW,
        bool: WW,
        func: WW,
        number: WW,
        object: WW,
        string: WW,
        symbol: WW,
        any: WW,
        arrayOf: iW,
        element: WW,
        elementType: WW,
        instanceOf: iW,
        node: WW,
        objectOf: iW,
        oneOf: iW,
        oneOfType: iW,
        shape: iW,
        exact: iW,
        checkPropTypes: NW,
        resetWarningCache: EW
      };
      return OW.PropTypes = OW, OW
    }
  },
  5868: (WW, iW, OW) => {
    WW.exports = OW(5877)()
  },
  5886: WW => {
    WW.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7763: (WW, iW, OW) => {
    function mW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function EW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, ZW(mW.key), mW)
      }
    }

    function NW(WW, iW) {
      var OW = "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
      if (!OW) {
        if (Array.isArray(WW) || (OW = lW(WW)) || iW && WW && "number" == typeof WW.length) {
          OW && (WW = OW);
          var mW = 0,
            EW = function() {};
          return {
            s: EW,
            n: function() {
              return mW >= WW.length ? {
                done: !0
              } : {
                done: !1,
                value: WW[mW++]
              }
            },
            e: function(WW) {
              throw WW
            },
            f: EW
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var NW, PW = !0,
        LW = !1;
      return {
        s: function() {
          OW = OW.call(WW)
        },
        n: function() {
          var WW = OW.next();
          return PW = WW.done, WW
        },
        e: function(WW) {
          LW = !0, NW = WW
        },
        f: function() {
          try {
            PW || null == OW.return || OW.return()
          } finally {
            if (LW) throw NW
          }
        }
      }
    }

    function PW(WW, iW, OW) {
      return (iW = ZW(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function LW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function cW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? LW(Object(OW), !0).forEach((function(iW) {
          PW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : LW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function wW(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        var OW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != OW) {
          var mW, EW, NW, PW, LW = [],
            cW = !0,
            wW = !1;
          try {
            if (NW = (OW = OW.call(WW)).next, 0 === iW) {
              if (Object(OW) !== OW) return;
              cW = !1
            } else
              for (; !(cW = (mW = NW.call(OW)).done) && (LW.push(mW.value), LW.length !== iW); cW = !0);
          } catch (WW) {
            wW = !0, EW = WW
          } finally {
            try {
              if (!cW && null != OW.return && (PW = OW.return(), Object(PW) !== PW)) return
            } finally {
              if (wW) throw EW
            }
          }
          return LW
        }
      }(WW, iW) || lW(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tW(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return mW(WW)
      }(WW) || function(WW) {
        if ("undefined" != typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || lW(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ZW(WW) {
      var iW = function(WW, iW) {
        if ("object" != typeof WW || !WW) return WW;
        var OW = WW[Symbol.toPrimitive];
        if (void 0 !== OW) {
          var mW = OW.call(WW, iW || "default");
          if ("object" != typeof mW) return mW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === iW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == typeof iW ? iW : iW + ""
    }

    function xW(WW) {
      return xW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, xW(WW)
    }

    function lW(WW, iW) {
      if (WW) {
        if ("string" == typeof WW) return mW(WW, iW);
        var OW = {}.toString.call(WW).slice(8, -1);
        return "Object" === OW && WW.constructor && (OW = WW.constructor.name), "Map" === OW || "Set" === OW ? Array.from(WW) : "Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW) ? mW(WW, iW) : void 0
      }
    }
    OW.r(iW), OW.d(iW, {
      api: () => FO,
      config: () => NE,
      counter: () => AE,
      dom: () => LE,
      findIconDefinition: () => wE,
      icon: () => ZE,
      layer: () => xE,
      library: () => PE,
      noAuto: () => EE,
      parse: () => cE,
      text: () => lE,
      toHtml: () => tE
    });
    var AW = function() {},
      bW = {},
      jW = {},
      UW = null,
      kW = {
        mark: AW,
        measure: AW
      };
    try {
      "undefined" !== typeof window && (bW = window), "undefined" !== typeof document && (jW = document), "undefined" !== typeof MutationObserver && (UW = MutationObserver), "undefined" !== typeof performance && (kW = performance)
    } catch (BW) {}
    var sW, MW, KW = (bW.navigator || {}).userAgent,
      SW = void 0 === KW ? "" : KW,
      YW = bW,
      yW = jW,
      TW = UW,
      JW = kW,
      hW = (YW.document, !!yW.documentElement && !!yW.head && "function" === typeof yW.addEventListener && "function" === typeof yW.createElement),
      HW = ~SW.indexOf("MSIE") || ~SW.indexOf("Trident/"),
      nW = {
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
      uW = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      oW = "classic",
      dW = "duotone",
      eW = "sharp",
      vW = "sharp-duotone",
      gW = "chisel",
      DW = "etch",
      VW = "graphite",
      pW = "jelly",
      fW = "jelly-duo",
      CW = "jelly-fill",
      XW = "notdog",
      BW = "notdog-duo",
      qW = "slab",
      RW = "slab-press",
      GW = "thumbprint",
      IW = "utility",
      aW = "utility-duo",
      rW = "utility-fill",
      zW = "whiteboard",
      FW = [oW, dW, eW, vW, gW, DW, VW, pW, fW, CW, XW, BW, qW, RW, GW, IW, aW, rW, zW],
      QW = (PW(PW(PW(PW(PW(PW(PW(PW(PW(PW(sW = {}, oW, "Classic"), dW, "Duotone"), eW, "Sharp"), vW, "Sharp Duotone"), gW, "Chisel"), DW, "Etch"), VW, "Graphite"), pW, "Jelly"), fW, "Jelly Duo"), CW, "Jelly Fill"), PW(PW(PW(PW(PW(PW(PW(PW(PW(sW, XW, "Notdog"), BW, "Notdog Duo"), qW, "Slab"), RW, "Slab Press"), GW, "Thumbprint"), IW, "Utility"), aW, "Utility Duo"), rW, "Utility Fill"), zW, "Whiteboard"), new Map([
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
      Wi = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      ii = {
        fak: "kit",
        "fa-kit": "kit"
      },
      Oi = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      mi = (PW(PW({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      Ei = {
        "kit-duotone": "fakd"
      },
      Ni = "duotone-group",
      Pi = "swap-opacity",
      Li = "primary",
      ci = "secondary",
      wi = (PW(PW(PW(PW(PW(PW(PW(PW(PW(PW(MW = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), PW(PW(PW(PW(PW(PW(PW(PW(PW(MW, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), PW(PW({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      ti = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      Zi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      xi = Zi.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      li = [].concat(tW(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", Ni, Pi, Li, ci]).concat(Zi.map((function(WW) {
        return "".concat(WW, "x")
      }))).concat(xi.map((function(WW) {
        return "w-".concat(WW)
      }))),
      Ai = "___FONT_AWESOME___",
      bi = "svg-inline--fa",
      ji = "data-fa-i2svg",
      Ui = "data-fa-pseudo-element",
      ki = "data-prefix",
      si = "data-icon",
      Mi = "fontawesome-i2svg",
      Ki = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      Si = ["::before", "::after", ":before", ":after"],
      Yi = function() {
        try {
          return !0
        } catch (WW) {
          return !1
        }
      }();

    function yi(WW) {
      return new Proxy(WW, {
        get: function(WW, iW) {
          return iW in WW ? WW[iW] : WW[oW]
        }
      })
    }
    var Ti = cW({}, nW);
    Ti[oW] = cW(cW(cW(cW({}, {
      "fa-duotone": "duotone"
    }), nW[oW]), ii), Oi);
    var Ji = yi(Ti),
      Hi = cW({}, {
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
    Hi[oW] = cW(cW(cW(cW({}, {
      duotone: "fad"
    }), Hi[oW]), mi), Ei);
    var ni = yi(Hi),
      ui = cW({}, wi);
    ui[oW] = cW(cW({}, ui[oW]), {
      fak: "fa-kit"
    });
    var oi = yi(ui),
      di = cW({}, {
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
    di[oW] = cW(cW({}, di[oW]), {
      "fa-kit": "fak"
    });
    yi(di);
    var ei = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      vi = "fa-layers-text",
      gi = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Di = (yi(cW({}, {
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
      Vi = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      fi = [].concat(tW(["kit"]), tW(li)),
      Ci = YW.FontAwesomeConfig || {};
    if (yW && "function" === typeof yW.querySelector) {
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
      ].forEach((function(WW) {
        var iW = wW(WW, 2),
          OW = iW[0],
          mW = iW[1],
          EW = function(WW) {
            return "" === WW || "false" !== WW && ("true" === WW || WW)
          }(function(WW) {
            var iW = yW.querySelector("script[" + WW + "]");
            if (iW) return iW.getAttribute(WW)
          }(OW));
        void 0 !== EW && null !== EW && (Ci[mW] = EW)
      }))
    }
    var Xi = {
      styleDefault: "solid",
      familyDefault: oW,
      cssPrefix: "fa",
      replacementClass: bi,
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
    Ci.familyPrefix && (Ci.cssPrefix = Ci.familyPrefix);
    var Bi = cW(cW({}, Xi), Ci);
    Bi.autoReplaceSvg || (Bi.observeMutations = !1);
    var qi = {};
    Object.keys(Xi).forEach((function(WW) {
      Object.defineProperty(qi, WW, {
        enumerable: !0,
        set: function(iW) {
          Bi[WW] = iW, Ri.forEach((function(WW) {
            return WW(qi)
          }))
        },
        get: function() {
          return Bi[WW]
        }
      })
    })), Object.defineProperty(qi, "familyPrefix", {
      enumerable: !0,
      set: function(WW) {
        Bi.cssPrefix = WW, Ri.forEach((function(WW) {
          return WW(qi)
        }))
      },
      get: function() {
        return Bi.cssPrefix
      }
    }), YW.FontAwesomeConfig = qi;
    var Ri = [];
    var Gi = 16,
      Ii = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function ai() {
      for (var WW = 12, iW = ""; WW-- > 0;) iW += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return iW
    }

    function ri(WW) {
      for (var iW = [], OW = (WW || []).length >>> 0; OW--;) iW[OW] = WW[OW];
      return iW
    }

    function zi(WW) {
      return WW.classList ? ri(WW.classList) : (WW.getAttribute("class") || "").split(" ").filter((function(WW) {
        return WW
      }))
    }

    function Fi(WW) {
      return "".concat(WW).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Qi(WW) {
      return Object.keys(WW || {}).reduce((function(iW, OW) {
        return iW + "".concat(OW, ": ").concat(WW[OW].trim(), ";")
      }), "")
    }

    function WO(WW) {
      return WW.size !== Ii.size || WW.x !== Ii.x || WW.y !== Ii.y || WW.rotate !== Ii.rotate || WW.flipX || WW.flipY
    }

    function iO() {
      var WW = "fa",
        iW = bi,
        OW = qi.cssPrefix,
        mW = qi.replacementClass,
        EW = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (OW !== WW || mW !== iW) {
        var NW = new RegExp("\\.".concat(WW, "\\-"), "g"),
          PW = new RegExp("\\--".concat(WW, "\\-"), "g"),
          LW = new RegExp("\\.".concat(iW), "g");
        EW = EW.replace(NW, ".".concat(OW, "-")).replace(PW, "--".concat(OW, "-")).replace(LW, ".".concat(mW))
      }
      return EW
    }
    var OO = !1;

    function mO() {
      qi.autoAddCss && !OO && (! function(WW) {
        if (WW && hW) {
          var iW = yW.createElement("style");
          iW.setAttribute("type", "text/css"), iW.innerHTML = WW;
          for (var OW = yW.head.childNodes, mW = null, EW = OW.length - 1; EW > -1; EW--) {
            var NW = OW[EW],
              PW = (NW.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(PW) > -1 && (mW = NW)
          }
          yW.head.insertBefore(iW, mW)
        }
      }(iO()), OO = !0)
    }
    var EO = {
        mixout: function() {
          return {
            dom: {
              css: iO,
              insertCss: mO
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              mO()
            },
            beforeI2svg: function() {
              mO()
            }
          }
        }
      },
      NO = YW || {};
    NO[Ai] || (NO[Ai] = {}), NO[Ai].styles || (NO[Ai].styles = {}), NO[Ai].hooks || (NO[Ai].hooks = {}), NO[Ai].shims || (NO[Ai].shims = []);
    var PO = NO[Ai],
      LO = [],
      cO = function() {
        yW.removeEventListener("DOMContentLoaded", cO), wO = 1, LO.map((function(WW) {
          return WW()
        }))
      },
      wO = !1;

    function tO(WW) {
      var iW = WW.tag,
        OW = WW.attributes,
        mW = void 0 === OW ? {} : OW,
        EW = WW.children,
        NW = void 0 === EW ? [] : EW;
      return "string" === typeof WW ? Fi(WW) : "<".concat(iW, " ").concat(function(WW) {
        return Object.keys(WW || {}).reduce((function(iW, OW) {
          return iW + "".concat(OW, '="').concat(Fi(WW[OW]), '" ')
        }), "").trim()
      }(mW), ">").concat(NW.map(tO).join(""), "</").concat(iW, ">")
    }

    function ZO(WW, iW, OW) {
      if (WW && WW[iW] && WW[iW][OW]) return {
        prefix: iW,
        iconName: OW,
        icon: WW[iW][OW]
      }
    }
    hW && ((wO = (yW.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(yW.readyState)) || yW.addEventListener("DOMContentLoaded", cO));
    var xO = function(WW, iW, OW, mW) {
      var EW, NW, PW, LW = Object.keys(WW),
        cW = LW.length,
        wW = void 0 !== mW ? function(WW, iW) {
          return function(OW, mW, EW, NW) {
            return WW.call(iW, OW, mW, EW, NW)
          }
        }(iW, mW) : iW;
      for (void 0 === OW ? (EW = 1, PW = WW[LW[0]]) : (EW = 0, PW = OW); EW < cW; EW++) PW = wW(PW, WW[NW = LW[EW]], NW, WW);
      return PW
    };

    function lO(WW) {
      return 1 !== tW(WW).length ? null : WW.codePointAt(0).toString(16)
    }

    function AO(WW) {
      return Object.keys(WW).reduce((function(iW, OW) {
        var mW = WW[OW];
        return !!mW.icon ? iW[mW.iconName] = mW.icon : iW[OW] = mW, iW
      }), {})
    }

    function bO(WW, iW) {
      var OW = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        mW = void 0 !== OW && OW,
        EW = AO(iW);
      "function" !== typeof PO.hooks.addPack || mW ? PO.styles[WW] = cW(cW({}, PO.styles[WW] || {}), EW) : PO.hooks.addPack(WW, AO(iW)), "fas" === WW && bO("fa", iW)
    }
    var jO = PO.styles,
      UO = PO.shims,
      kO = Object.keys(oi),
      sO = kO.reduce((function(WW, iW) {
        return WW[iW] = Object.keys(oi[iW]), WW
      }), {}),
      MO = null,
      KO = {},
      SO = {},
      YO = {},
      yO = {},
      TO = {};

    function JO(WW, iW) {
      var OW, mW = iW.split("-"),
        EW = mW[0],
        NW = mW.slice(1).join("-");
      return EW !== WW || "" === NW || (OW = NW, ~fi.indexOf(OW)) ? null : NW
    }
    var hO, HO = function() {
      var WW = function(WW) {
        return xO(jO, (function(iW, OW, mW) {
          return iW[mW] = xO(OW, WW, {}), iW
        }), {})
      };
      KO = WW((function(WW, iW, OW) {
        (iW[3] && (WW[iW[3]] = OW), iW[2]) && iW[2].filter((function(WW) {
          return "number" === typeof WW
        })).forEach((function(iW) {
          WW[iW.toString(16)] = OW
        }));
        return WW
      })), SO = WW((function(WW, iW, OW) {
        (WW[OW] = OW, iW[2]) && iW[2].filter((function(WW) {
          return "string" === typeof WW
        })).forEach((function(iW) {
          WW[iW] = OW
        }));
        return WW
      })), TO = WW((function(WW, iW, OW) {
        var mW = iW[2];
        return WW[OW] = OW, mW.forEach((function(iW) {
          WW[iW] = OW
        })), WW
      }));
      var iW = "far" in jO || qi.autoFetchSvg,
        OW = xO(UO, (function(WW, OW) {
          var mW = OW[0],
            EW = OW[1],
            NW = OW[2];
          return "far" !== EW || iW || (EW = "fas"), "string" === typeof mW && (WW.names[mW] = {
            prefix: EW,
            iconName: NW
          }), "number" === typeof mW && (WW.unicodes[mW.toString(16)] = {
            prefix: EW,
            iconName: NW
          }), WW
        }), {
          names: {},
          unicodes: {}
        });
      YO = OW.names, yO = OW.unicodes, MO = eO(qi.styleDefault, {
        family: qi.familyDefault
      })
    };

    function nO(WW, iW) {
      return (KO[WW] || {})[iW]
    }

    function uO(WW, iW) {
      return (TO[WW] || {})[iW]
    }

    function oO(WW) {
      return YO[WW] || {
        prefix: null,
        iconName: null
      }
    }

    function dO() {
      return MO
    }
    hO = function(WW) {
      MO = eO(WW.styleDefault, {
        family: qi.familyDefault
      })
    }, Ri.push(hO), HO();

    function eO(WW) {
      var iW = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        OW = void 0 === iW ? oW : iW,
        mW = Ji[OW][WW];
      if (OW === dW && !WW) return "fad";
      var EW = ni[OW][WW] || ni[OW][mW],
        NW = WW in PO.styles ? WW : null;
      return EW || NW || null
    }

    function vO(WW) {
      return WW.sort().filter((function(WW, iW, OW) {
        return OW.indexOf(WW) === iW
      }))
    }
    var gO = ti.concat(Wi);

    function DO(WW) {
      var iW = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        OW = void 0 !== iW && iW,
        mW = null,
        EW = vO(WW.filter((function(WW) {
          return gO.includes(WW)
        }))),
        NW = vO(WW.filter((function(WW) {
          return !gO.includes(WW)
        }))),
        PW = wW(EW.filter((function(WW) {
          return mW = WW, !uW.includes(WW)
        })), 1)[0],
        LW = void 0 === PW ? null : PW,
        tW = function(WW) {
          var iW = oW,
            OW = kO.reduce((function(WW, iW) {
              return WW[iW] = "".concat(qi.cssPrefix, "-").concat(iW), WW
            }), {});
          return FW.forEach((function(mW) {
            (WW.includes(OW[mW]) || WW.some((function(WW) {
              return sO[mW].includes(WW)
            }))) && (iW = mW)
          })), iW
        }(EW),
        ZW = cW(cW({}, function(WW) {
          var iW = [],
            OW = null;
          return WW.forEach((function(WW) {
            var mW = JO(qi.cssPrefix, WW);
            mW ? OW = mW : WW && iW.push(WW)
          })), {
            iconName: OW,
            rest: iW
          }
        }(NW)), {}, {
          prefix: eO(LW, {
            family: tW
          })
        });
      return cW(cW(cW({}, ZW), function(WW) {
        var iW = WW.values,
          OW = WW.family,
          mW = WW.canonical,
          EW = WW.givenPrefix,
          NW = void 0 === EW ? "" : EW,
          PW = WW.styles,
          LW = void 0 === PW ? {} : PW,
          cW = WW.config,
          wW = void 0 === cW ? {} : cW,
          tW = OW === dW,
          ZW = iW.includes("fa-duotone") || iW.includes("fad"),
          xW = "duotone" === wW.familyDefault,
          lW = "fad" === mW.prefix || "fa-duotone" === mW.prefix;
        !tW && (ZW || xW || lW) && (mW.prefix = "fad");
        (iW.includes("fa-brands") || iW.includes("fab")) && (mW.prefix = "fab");
        if (!mW.prefix && VO.includes(OW)) {
          if (Object.keys(LW).find((function(WW) {
              return pO.includes(WW)
            })) || wW.autoFetchSvg) {
            var AW = QW.get(OW).defaultShortPrefixId;
            mW.prefix = AW, mW.iconName = uO(mW.prefix, mW.iconName) || mW.iconName
          }
        }
        "fa" !== mW.prefix && "fa" !== NW || (mW.prefix = dO() || "fas");
        return mW
      }({
        values: WW,
        family: tW,
        styles: jO,
        config: qi,
        canonical: ZW,
        givenPrefix: mW
      })), function(WW, iW, OW) {
        var mW = OW.prefix,
          EW = OW.iconName;
        if (WW || !mW || !EW) return {
          prefix: mW,
          iconName: EW
        };
        var NW = "fa" === iW ? oO(EW) : {},
          PW = uO(mW, EW);
        EW = NW.iconName || PW || EW, "far" !== (mW = NW.prefix || mW) || jO.far || !jO.fas || qi.autoFetchSvg || (mW = "fas");
        return {
          prefix: mW,
          iconName: EW
        }
      }(OW, mW, ZW))
    }
    var VO = FW.filter((function(WW) {
        return WW !== oW || WW !== dW
      })),
      pO = Object.keys(wi).filter((function(WW) {
        return WW !== oW
      })).map((function(WW) {
        return Object.keys(wi[WW])
      })).flat();
    var fO = function() {
        return function(WW, iW, OW) {
          return iW && EW(WW.prototype, iW), OW && EW(WW, OW), Object.defineProperty(WW, "prototype", {
            writable: !1
          }), WW
        }((function WW() {
          ! function(WW, iW) {
            if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
          }(this, WW), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var WW = this, iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
            var EW = OW.reduce(this._pullDefinitions, {});
            Object.keys(EW).forEach((function(iW) {
              WW.definitions[iW] = cW(cW({}, WW.definitions[iW] || {}), EW[iW]), bO(iW, EW[iW]);
              var OW = oi[oW][iW];
              OW && bO(OW, EW[iW]), HO()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(WW, iW) {
            var OW = iW.prefix && iW.iconName && iW.icon ? {
              0: iW
            } : iW;
            return Object.keys(OW).map((function(iW) {
              var mW = OW[iW],
                EW = mW.prefix,
                NW = mW.iconName,
                PW = mW.icon,
                LW = PW[2];
              WW[EW] || (WW[EW] = {}), LW.length > 0 && LW.forEach((function(iW) {
                "string" === typeof iW && (WW[EW][iW] = PW)
              })), WW[EW][NW] = PW
            })), WW
          }
        }])
      }(),
      CO = [],
      XO = {},
      BO = {},
      qO = Object.keys(BO);

    function RO(WW, iW) {
      for (var OW = arguments.length, mW = new Array(OW > 2 ? OW - 2 : 0), EW = 2; EW < OW; EW++) mW[EW - 2] = arguments[EW];
      return (XO[WW] || []).forEach((function(WW) {
        iW = WW.apply(null, [iW].concat(mW))
      })), iW
    }

    function GO(WW) {
      for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
      (XO[WW] || []).forEach((function(WW) {
        WW.apply(null, OW)
      }))
    }

    function IO() {
      var WW = arguments[0],
        iW = Array.prototype.slice.call(arguments, 1);
      return BO[WW] ? BO[WW].apply(null, iW) : void 0
    }

    function aO(WW) {
      "fa" === WW.prefix && (WW.prefix = "fas");
      var iW = WW.iconName,
        OW = WW.prefix || dO();
      if (iW) return iW = uO(OW, iW) || iW, ZO(rO.definitions, OW, iW) || ZO(PO.styles, OW, iW)
    }
    var rO = new fO,
      zO = {
        i2svg: function() {
          var WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return hW ? (GO("beforeI2svg", WW), IO("pseudoElements2svg", WW), IO("i2svg", WW)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var WW, iW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            OW = iW.autoReplaceSvgRoot;
          !1 === qi.autoReplaceSvg && (qi.autoReplaceSvg = !0), qi.observeMutations = !0, WW = function() {
            QO({
              autoReplaceSvgRoot: OW
            }), GO("watch", iW)
          }, hW && (wO ? setTimeout(WW, 0) : LO.push(WW))
        }
      },
      FO = {
        noAuto: function() {
          qi.autoReplaceSvg = !1, qi.observeMutations = !1, GO("noAuto")
        },
        config: qi,
        dom: zO,
        parse: {
          icon: function(WW) {
            if (null === WW) return null;
            if ("object" === xW(WW) && WW.prefix && WW.iconName) return {
              prefix: WW.prefix,
              iconName: uO(WW.prefix, WW.iconName) || WW.iconName
            };
            if (Array.isArray(WW) && 2 === WW.length) {
              var iW = 0 === WW[1].indexOf("fa-") ? WW[1].slice(3) : WW[1],
                OW = eO(WW[0]);
              return {
                prefix: OW,
                iconName: uO(OW, iW) || iW
              }
            }
            if ("string" === typeof WW && (WW.indexOf("".concat(qi.cssPrefix, "-")) > -1 || WW.match(ei))) {
              var mW = DO(WW.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: mW.prefix || dO(),
                iconName: uO(mW.prefix, mW.iconName) || mW.iconName
              }
            }
            if ("string" === typeof WW) {
              var EW = dO();
              return {
                prefix: EW,
                iconName: uO(EW, WW) || WW
              }
            }
          }
        },
        library: rO,
        findIconDefinition: aO,
        toHtml: tO
      },
      QO = function() {
        var WW = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          iW = void 0 === WW ? yW : WW;
        (Object.keys(PO.styles).length > 0 || qi.autoFetchSvg) && hW && qi.autoReplaceSvg && FO.dom.i2svg({
          node: iW
        })
      };

    function Wm(WW, iW) {
      return Object.defineProperty(WW, "abstract", {
        get: iW
      }), Object.defineProperty(WW, "html", {
        get: function() {
          return WW.abstract.map((function(WW) {
            return tO(WW)
          }))
        }
      }), Object.defineProperty(WW, "node", {
        get: function() {
          if (hW) {
            var iW = yW.createElement("div");
            return iW.innerHTML = WW.html, iW.children
          }
        }
      }), WW
    }

    function im(WW) {
      var iW = WW.icons,
        OW = iW.main,
        mW = iW.mask,
        EW = WW.prefix,
        NW = WW.iconName,
        PW = WW.transform,
        LW = WW.symbol,
        wW = WW.maskId,
        tW = WW.extra,
        ZW = WW.watchable,
        xW = void 0 !== ZW && ZW,
        lW = mW.found ? mW : OW,
        AW = lW.width,
        bW = lW.height,
        jW = [qi.replacementClass, NW ? "".concat(qi.cssPrefix, "-").concat(NW) : ""].filter((function(WW) {
          return -1 === tW.classes.indexOf(WW)
        })).filter((function(WW) {
          return "" !== WW || !!WW
        })).concat(tW.classes).join(" "),
        UW = {
          children: [],
          attributes: cW(cW({}, tW.attributes), {}, {
            "data-prefix": EW,
            "data-icon": NW,
            class: jW,
            role: tW.attributes.role || "img",
            viewBox: "0 0 ".concat(AW, " ").concat(bW)
          })
        };
      (function(WW) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(iW) {
          return iW in WW
        }))
      })(tW.attributes) || tW.attributes["aria-hidden"] || (UW.attributes["aria-hidden"] = "true"), xW && (UW.attributes[ji] = "");
      var kW = cW(cW({}, UW), {}, {
          prefix: EW,
          iconName: NW,
          main: OW,
          mask: mW,
          maskId: wW,
          transform: PW,
          symbol: LW,
          styles: cW({}, tW.styles)
        }),
        sW = mW.found && OW.found ? IO("generateAbstractMask", kW) || {
          children: [],
          attributes: {}
        } : IO("generateAbstractIcon", kW) || {
          children: [],
          attributes: {}
        },
        MW = sW.children,
        KW = sW.attributes;
      return kW.children = MW, kW.attributes = KW, LW ? function(WW) {
        var iW = WW.prefix,
          OW = WW.iconName,
          mW = WW.children,
          EW = WW.attributes,
          NW = WW.symbol,
          PW = !0 === NW ? "".concat(iW, "-").concat(qi.cssPrefix, "-").concat(OW) : NW;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: cW(cW({}, EW), {}, {
              id: PW
            }),
            children: mW
          }]
        }]
      }(kW) : function(WW) {
        var iW = WW.children,
          OW = WW.main,
          mW = WW.mask,
          EW = WW.attributes,
          NW = WW.styles,
          PW = WW.transform;
        if (WO(PW) && OW.found && !mW.found) {
          var LW = {
            x: OW.width / OW.height / 2,
            y: .5
          };
          EW.style = Qi(cW(cW({}, NW), {}, {
            "transform-origin": "".concat(LW.x + PW.x / 16, "em ").concat(LW.y + PW.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: EW,
          children: iW
        }]
      }(kW)
    }

    function Om(WW) {
      var iW = WW.content,
        OW = WW.width,
        mW = WW.height,
        EW = WW.transform,
        NW = WW.extra,
        PW = WW.watchable,
        LW = void 0 !== PW && PW,
        wW = cW(cW({}, NW.attributes), {}, {
          class: NW.classes.join(" ")
        });
      LW && (wW[ji] = "");
      var tW = cW({}, NW.styles);
      WO(EW) && (tW.transform = function(WW) {
        var iW = WW.transform,
          OW = WW.width,
          mW = void 0 === OW ? 16 : OW,
          EW = WW.height,
          NW = void 0 === EW ? 16 : EW,
          PW = WW.startCentered,
          LW = void 0 !== PW && PW,
          cW = "";
        return cW += LW && HW ? "translate(".concat(iW.x / Gi - mW / 2, "em, ").concat(iW.y / Gi - NW / 2, "em) ") : LW ? "translate(calc(-50% + ".concat(iW.x / Gi, "em), calc(-50% + ").concat(iW.y / Gi, "em)) ") : "translate(".concat(iW.x / Gi, "em, ").concat(iW.y / Gi, "em) "), cW += "scale(".concat(iW.size / Gi * (iW.flipX ? -1 : 1), ", ").concat(iW.size / Gi * (iW.flipY ? -1 : 1), ") "), cW + "rotate(".concat(iW.rotate, "deg) ")
      }({
        transform: EW,
        startCentered: !0,
        width: OW,
        height: mW
      }), tW["-webkit-transform"] = tW.transform);
      var ZW = Qi(tW);
      ZW.length > 0 && (wW.style = ZW);
      var xW = [];
      return xW.push({
        tag: "span",
        attributes: wW,
        children: [iW]
      }), xW
    }
    var mm = PO.styles;

    function Em(WW) {
      var iW = WW[0],
        OW = WW[1],
        mW = wW(WW.slice(4), 1)[0];
      return {
        found: !0,
        width: iW,
        height: OW,
        icon: Array.isArray(mW) ? {
          tag: "g",
          attributes: {
            class: "".concat(qi.cssPrefix, "-").concat(Vi.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(qi.cssPrefix, "-").concat(Vi.SECONDARY),
              fill: "currentColor",
              d: mW[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(qi.cssPrefix, "-").concat(Vi.PRIMARY),
              fill: "currentColor",
              d: mW[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: mW
          }
        }
      }
    }
    var Nm = {
      found: !1,
      width: 512,
      height: 512
    };

    function Pm(WW, iW) {
      var OW = iW;
      return "fa" === iW && null !== qi.styleDefault && (iW = dO()), new Promise((function(mW, EW) {
        if ("fa" === OW) {
          var NW = oO(WW) || {};
          WW = NW.iconName || WW, iW = NW.prefix || iW
        }
        if (WW && iW && mm[iW] && mm[iW][WW]) return mW(Em(mm[iW][WW]));
        ! function(WW, iW) {
          Yi || qi.showMissingIcons || !WW || console.error('Icon with name "'.concat(WW, '" and prefix "').concat(iW, '" is missing.'))
        }(WW, iW), mW(cW(cW({}, Nm), {}, {
          icon: qi.showMissingIcons && WW && IO("missingIconAbstract") || {}
        }))
      }))
    }
    var Lm = function() {},
      cm = qi.measurePerformance && JW && JW.mark && JW.measure ? JW : {
        mark: Lm,
        measure: Lm
      },
      wm = 'FA "7.2.0"',
      tm = function(WW) {
        cm.mark("".concat(wm, " ").concat(WW, " ends")), cm.measure("".concat(wm, " ").concat(WW), "".concat(wm, " ").concat(WW, " begins"), "".concat(wm, " ").concat(WW, " ends"))
      },
      Zm = function(WW) {
        return cm.mark("".concat(wm, " ").concat(WW, " begins")),
          function() {
            return tm(WW)
          }
      },
      xm = function() {};

    function lm(WW) {
      return "string" === typeof(WW.getAttribute ? WW.getAttribute(ji) : null)
    }

    function Am(WW) {
      return yW.createElementNS("http://www.w3.org/2000/svg", WW)
    }

    function bm(WW) {
      return yW.createElement(WW)
    }

    function jm(WW) {
      var iW = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        OW = void 0 === iW ? "svg" === WW.tag ? Am : bm : iW;
      if ("string" === typeof WW) return yW.createTextNode(WW);
      var mW = OW(WW.tag);
      return Object.keys(WW.attributes || []).forEach((function(iW) {
        mW.setAttribute(iW, WW.attributes[iW])
      })), (WW.children || []).forEach((function(WW) {
        mW.appendChild(jm(WW, {
          ceFn: OW
        }))
      })), mW
    }
    var Um = {
      replace: function(WW) {
        var iW = WW[0];
        if (iW.parentNode)
          if (WW[1].forEach((function(WW) {
              iW.parentNode.insertBefore(jm(WW), iW)
            })), null === iW.getAttribute(ji) && qi.keepOriginalSource) {
            var OW = yW.createComment(function(WW) {
              var iW = " ".concat(WW.outerHTML, " ");
              return "".concat(iW, "Font Awesome fontawesome.com ")
            }(iW));
            iW.parentNode.replaceChild(OW, iW)
          } else iW.remove()
      },
      nest: function(WW) {
        var iW = WW[0],
          OW = WW[1];
        if (~zi(iW).indexOf(qi.replacementClass)) return Um.replace(WW);
        var mW = new RegExp("".concat(qi.cssPrefix, "-.*"));
        if (delete OW[0].attributes.id, OW[0].attributes.class) {
          var EW = OW[0].attributes.class.split(" ").reduce((function(WW, iW) {
            return iW === qi.replacementClass || iW.match(mW) ? WW.toSvg.push(iW) : WW.toNode.push(iW), WW
          }), {
            toNode: [],
            toSvg: []
          });
          OW[0].attributes.class = EW.toSvg.join(" "), 0 === EW.toNode.length ? iW.removeAttribute("class") : iW.setAttribute("class", EW.toNode.join(" "))
        }
        var NW = OW.map((function(WW) {
          return tO(WW)
        })).join("\n");
        iW.setAttribute(ji, ""), iW.innerHTML = NW
      }
    };

    function km(WW) {
      WW()
    }

    function sm(WW, iW) {
      var OW = "function" === typeof iW ? iW : xm;
      if (0 === WW.length) OW();
      else {
        var mW = km;
        "async" === qi.mutateApproach && (mW = YW.requestAnimationFrame || km), mW((function() {
          var iW = !0 === qi.autoReplaceSvg ? Um.replace : Um[qi.autoReplaceSvg] || Um.replace,
            mW = Zm("mutate");
          WW.map(iW), mW(), OW()
        }))
      }
    }
    var Mm = !1;

    function Km() {
      Mm = !0
    }

    function Sm() {
      Mm = !1
    }
    var Ym = null;

    function ym(WW) {
      if (TW && qi.observeMutations) {
        var iW = WW.treeCallback,
          OW = void 0 === iW ? xm : iW,
          mW = WW.nodeCallback,
          EW = void 0 === mW ? xm : mW,
          NW = WW.pseudoElementsCallback,
          PW = void 0 === NW ? xm : NW,
          LW = WW.observeMutationsRoot,
          cW = void 0 === LW ? yW : LW;
        Ym = new TW((function(WW) {
          if (!Mm) {
            var iW = dO();
            ri(WW).forEach((function(WW) {
              if ("childList" === WW.type && WW.addedNodes.length > 0 && !lm(WW.addedNodes[0]) && (qi.searchPseudoElements && PW(WW.target), OW(WW.target)), "attributes" === WW.type && WW.target.parentNode && qi.searchPseudoElements && PW([WW.target], !0), "attributes" === WW.type && lm(WW.target) && ~Di.indexOf(WW.attributeName))
                if ("class" === WW.attributeName && function(WW) {
                    var iW = WW.getAttribute ? WW.getAttribute(ki) : null,
                      OW = WW.getAttribute ? WW.getAttribute(si) : null;
                    return iW && OW
                  }(WW.target)) {
                  var mW = DO(zi(WW.target)),
                    NW = mW.prefix,
                    LW = mW.iconName;
                  WW.target.setAttribute(ki, NW || iW), LW && WW.target.setAttribute(si, LW)
                } else(cW = WW.target) && cW.classList && cW.classList.contains && cW.classList.contains(qi.replacementClass) && EW(WW.target);
              var cW
            }))
          }
        })), hW && Ym.observe(cW, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function Tm(WW) {
      var iW, OW, mW = WW.getAttribute("data-prefix"),
        EW = WW.getAttribute("data-icon"),
        NW = void 0 !== WW.innerText ? WW.innerText.trim() : "",
        PW = DO(zi(WW));
      return PW.prefix || (PW.prefix = dO()), mW && EW && (PW.prefix = mW, PW.iconName = EW), PW.iconName && PW.prefix || (PW.prefix && NW.length > 0 && (PW.iconName = (iW = PW.prefix, OW = WW.innerText, (SO[iW] || {})[OW] || nO(PW.prefix, lO(WW.innerText)))), !PW.iconName && qi.autoFetchSvg && WW.firstChild && WW.firstChild.nodeType === Node.TEXT_NODE && (PW.iconName = WW.firstChild.data)), PW
    }

    function Jm(WW) {
      var iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        OW = Tm(WW),
        mW = OW.iconName,
        EW = OW.prefix,
        NW = OW.rest,
        PW = function(WW) {
          return ri(WW.attributes).reduce((function(WW, iW) {
            return "class" !== WW.name && "style" !== WW.name && (WW[iW.name] = iW.value), WW
          }), {})
        }(WW),
        LW = RO("parseNodeAttributes", {}, WW),
        wW = iW.styleParser ? function(WW) {
          var iW = WW.getAttribute("style"),
            OW = [];
          return iW && (OW = iW.split(";").reduce((function(WW, iW) {
            var OW = iW.split(":"),
              mW = OW[0],
              EW = OW.slice(1);
            return mW && EW.length > 0 && (WW[mW] = EW.join(":").trim()), WW
          }), {})), OW
        }(WW) : [];
      return cW({
        iconName: mW,
        prefix: EW,
        transform: Ii,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: NW,
          styles: wW,
          attributes: PW
        }
      }, LW)
    }
    var hm = PO.styles;

    function Hm(WW) {
      var iW = "nest" === qi.autoReplaceSvg ? Jm(WW, {
        styleParser: !1
      }) : Jm(WW);
      return ~iW.extra.classes.indexOf(vi) ? IO("generateLayersText", WW, iW) : IO("generateSvgReplacementMutation", WW, iW)
    }

    function nm(WW) {
      var iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!hW) return Promise.resolve();
      var OW = yW.documentElement.classList,
        mW = function(WW) {
          return OW.add("".concat(Mi, "-").concat(WW))
        },
        EW = function(WW) {
          return OW.remove("".concat(Mi, "-").concat(WW))
        },
        NW = qi.autoFetchSvg ? [].concat(tW(Wi), tW(ti)) : uW.concat(Object.keys(hm));
      NW.includes("fa") || NW.push("fa");
      var PW = [".".concat(vi, ":not([").concat(ji, "])")].concat(NW.map((function(WW) {
        return ".".concat(WW, ":not([").concat(ji, "])")
      }))).join(", ");
      if (0 === PW.length) return Promise.resolve();
      var LW = [];
      try {
        LW = ri(WW.querySelectorAll(PW))
      } catch (ZW) {}
      if (!(LW.length > 0)) return Promise.resolve();
      mW("pending"), EW("complete");
      var cW = Zm("onTree"),
        wW = LW.reduce((function(WW, iW) {
          try {
            var OW = Hm(iW);
            OW && WW.push(OW)
          } catch (ZW) {
            Yi || "MissingIcon" === ZW.name && console.error(ZW)
          }
          return WW
        }), []);
      return new Promise((function(WW, OW) {
        Promise.all(wW).then((function(OW) {
          sm(OW, (function() {
            mW("active"), mW("complete"), EW("pending"), "function" === typeof iW && iW(), cW(), WW()
          }))
        })).catch((function(WW) {
          cW(), OW(WW)
        }))
      }))
    }

    function um(WW) {
      var iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      Hm(WW).then((function(WW) {
        WW && sm([WW], iW)
      }))
    }
    var om = function(WW) {
        var iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          OW = iW.transform,
          mW = void 0 === OW ? Ii : OW,
          EW = iW.symbol,
          NW = void 0 !== EW && EW,
          PW = iW.mask,
          LW = void 0 === PW ? null : PW,
          wW = iW.maskId,
          tW = void 0 === wW ? null : wW,
          ZW = iW.classes,
          xW = void 0 === ZW ? [] : ZW,
          lW = iW.attributes,
          AW = void 0 === lW ? {} : lW,
          bW = iW.styles,
          jW = void 0 === bW ? {} : bW;
        if (WW) {
          var UW = WW.prefix,
            kW = WW.iconName,
            sW = WW.icon;
          return Wm(cW({
            type: "icon"
          }, WW), (function() {
            return GO("beforeDOMElementCreation", {
              iconDefinition: WW,
              params: iW
            }), im({
              icons: {
                main: Em(sW),
                mask: LW ? Em(LW.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: UW,
              iconName: kW,
              transform: cW(cW({}, Ii), mW),
              symbol: NW,
              maskId: tW,
              extra: {
                attributes: AW,
                styles: jW,
                classes: xW
              }
            })
          }))
        }
      },
      dm = {
        mixout: function() {
          return {
            icon: (WW = om, function(iW) {
              var OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                mW = (iW || {}).icon ? iW : aO(iW || {}),
                EW = OW.mask;
              return EW && (EW = (EW || {}).icon ? EW : aO(EW || {})), WW(mW, cW(cW({}, OW), {}, {
                mask: EW
              }))
            })
          };
          var WW
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(WW) {
              return WW.treeCallback = nm, WW.nodeCallback = um, WW
            }
          }
        },
        provides: function(WW) {
          WW.i2svg = function(WW) {
            var iW = WW.node,
              OW = void 0 === iW ? yW : iW,
              mW = WW.callback;
            return nm(OW, void 0 === mW ? function() {} : mW)
          }, WW.generateSvgReplacementMutation = function(WW, iW) {
            var OW = iW.iconName,
              mW = iW.prefix,
              EW = iW.transform,
              NW = iW.symbol,
              PW = iW.mask,
              LW = iW.maskId,
              cW = iW.extra;
            return new Promise((function(iW, tW) {
              Promise.all([Pm(OW, mW), PW.iconName ? Pm(PW.iconName, PW.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(PW) {
                var tW = wW(PW, 2),
                  ZW = tW[0],
                  xW = tW[1];
                iW([WW, im({
                  icons: {
                    main: ZW,
                    mask: xW
                  },
                  prefix: mW,
                  iconName: OW,
                  transform: EW,
                  symbol: NW,
                  maskId: LW,
                  extra: cW,
                  watchable: !0
                })])
              })).catch(tW)
            }))
          }, WW.generateAbstractIcon = function(WW) {
            var iW, OW = WW.children,
              mW = WW.attributes,
              EW = WW.main,
              NW = WW.transform,
              PW = Qi(WW.styles);
            return PW.length > 0 && (mW.style = PW), WO(NW) && (iW = IO("generateAbstractTransformGrouping", {
              main: EW,
              transform: NW,
              containerWidth: EW.width,
              iconWidth: EW.width
            })), OW.push(iW || EW.icon), {
              children: OW,
              attributes: mW
            }
          }
        }
      },
      em = {
        mixout: function() {
          return {
            layer: function(WW) {
              var iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                OW = iW.classes,
                mW = void 0 === OW ? [] : OW;
              return Wm({
                type: "layer"
              }, (function() {
                GO("beforeDOMElementCreation", {
                  assembler: WW,
                  params: iW
                });
                var OW = [];
                return WW((function(WW) {
                  Array.isArray(WW) ? WW.map((function(WW) {
                    OW = OW.concat(WW.abstract)
                  })) : OW = OW.concat(WW.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(qi.cssPrefix, "-layers")].concat(tW(mW)).join(" ")
                  },
                  children: OW
                }]
              }))
            }
          }
        }
      },
      gm = {
        mixout: function() {
          return {
            counter: function(WW) {
              var iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                OW = iW.title,
                mW = void 0 === OW ? null : OW,
                EW = iW.classes,
                NW = void 0 === EW ? [] : EW,
                PW = iW.attributes,
                LW = void 0 === PW ? {} : PW,
                wW = iW.styles,
                ZW = void 0 === wW ? {} : wW;
              return Wm({
                type: "counter",
                content: WW
              }, (function() {
                return GO("beforeDOMElementCreation", {
                    content: WW,
                    params: iW
                  }),
                  function(WW) {
                    var iW = WW.content,
                      OW = WW.extra,
                      mW = cW(cW({}, OW.attributes), {}, {
                        class: OW.classes.join(" ")
                      }),
                      EW = Qi(OW.styles);
                    EW.length > 0 && (mW.style = EW);
                    var NW = [];
                    return NW.push({
                      tag: "span",
                      attributes: mW,
                      children: [iW]
                    }), NW
                  }({
                    content: WW.toString(),
                    title: mW,
                    extra: {
                      attributes: LW,
                      styles: ZW,
                      classes: ["".concat(qi.cssPrefix, "-layers-counter")].concat(tW(NW))
                    }
                  })
              }))
            }
          }
        }
      },
      Dm = {
        mixout: function() {
          return {
            text: function(WW) {
              var iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                OW = iW.transform,
                mW = void 0 === OW ? Ii : OW,
                EW = iW.classes,
                NW = void 0 === EW ? [] : EW,
                PW = iW.attributes,
                LW = void 0 === PW ? {} : PW,
                wW = iW.styles,
                ZW = void 0 === wW ? {} : wW;
              return Wm({
                type: "text",
                content: WW
              }, (function() {
                return GO("beforeDOMElementCreation", {
                  content: WW,
                  params: iW
                }), Om({
                  content: WW,
                  transform: cW(cW({}, Ii), mW),
                  extra: {
                    attributes: LW,
                    styles: ZW,
                    classes: ["".concat(qi.cssPrefix, "-layers-text")].concat(tW(NW))
                  }
                })
              }))
            }
          }
        },
        provides: function(WW) {
          WW.generateLayersText = function(WW, iW) {
            var OW = iW.transform,
              mW = iW.extra,
              EW = null,
              NW = null;
            if (HW) {
              var PW = parseInt(getComputedStyle(WW).fontSize, 10),
                LW = WW.getBoundingClientRect();
              EW = LW.width / PW, NW = LW.height / PW
            }
            return Promise.resolve([WW, Om({
              content: WW.innerHTML,
              width: EW,
              height: NW,
              transform: OW,
              extra: mW,
              watchable: !0
            })])
          }
        }
      },
      Vm = new RegExp('"', "ug"),
      pm = [1105920, 1112319],
      fm = cW(cW(cW(cW({}, {
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
      Cm = Object.keys(fm).reduce((function(WW, iW) {
        return WW[iW.toLowerCase()] = fm[iW], WW
      }), {}),
      Xm = Object.keys(Cm).reduce((function(WW, iW) {
        var OW = Cm[iW];
        return WW[iW] = OW[900] || tW(Object.entries(OW))[0][1], WW
      }), {});

    function Bm(WW, iW) {
      var OW = "".concat("data-fa-pseudo-element-pending").concat(iW.replace(":", "-"));
      return new Promise((function(mW, EW) {
        if (null !== WW.getAttribute(OW)) return mW();
        var NW = ri(WW.children).filter((function(WW) {
            return WW.getAttribute(Ui) === iW
          }))[0],
          PW = YW.getComputedStyle(WW, iW),
          LW = PW.getPropertyValue("font-family"),
          wW = LW.match(gi),
          ZW = PW.getPropertyValue("font-weight"),
          xW = PW.getPropertyValue("content");
        if (NW && !wW) return WW.removeChild(NW), mW();
        if (wW && "none" !== xW && "" !== xW) {
          var lW = PW.getPropertyValue("content"),
            AW = function(WW, iW) {
              var OW = WW.replace(/^['"]|['"]$/g, "").toLowerCase(),
                mW = parseInt(iW),
                EW = isNaN(mW) ? "normal" : mW;
              return (Cm[OW] || {})[EW] || Xm[OW]
            }(LW, ZW),
            bW = function(WW) {
              return lO(tW(WW.replace(Vm, ""))[0] || "")
            }(lW),
            jW = wW[0].startsWith("FontAwesome"),
            UW = function(WW) {
              var iW = WW.getPropertyValue("font-feature-settings").includes("ss01"),
                OW = WW.getPropertyValue("content").replace(Vm, ""),
                mW = OW.codePointAt(0),
                EW = mW >= pm[0] && mW <= pm[1],
                NW = 2 === OW.length && OW[0] === OW[1];
              return EW || NW || iW
            }(PW),
            kW = nO(AW, bW),
            sW = kW;
          if (jW) {
            var MW = function(WW) {
              var iW = yO[WW],
                OW = nO("fas", WW);
              return iW || (OW ? {
                prefix: "fas",
                iconName: OW
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(bW);
            MW.iconName && MW.prefix && (kW = MW.iconName, AW = MW.prefix)
          }
          if (!kW || UW || NW && NW.getAttribute(ki) === AW && NW.getAttribute(si) === sW) mW();
          else {
            WW.setAttribute(OW, sW), NW && WW.removeChild(NW);
            var KW = {
                iconName: null,
                prefix: null,
                transform: Ii,
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
              SW = KW.extra;
            SW.attributes[Ui] = iW, Pm(kW, AW).then((function(EW) {
              var NW = im(cW(cW({}, KW), {}, {
                  icons: {
                    main: EW,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: AW,
                  iconName: sW,
                  extra: SW,
                  watchable: !0
                })),
                PW = yW.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === iW ? WW.insertBefore(PW, WW.firstChild) : WW.appendChild(PW), PW.outerHTML = NW.map((function(WW) {
                return tO(WW)
              })).join("\n"), WW.removeAttribute(OW), mW()
            })).catch(EW)
          }
        } else mW()
      }))
    }

    function qm(WW) {
      return Promise.all([Bm(WW, "::before"), Bm(WW, "::after")])
    }

    function Rm(WW) {
      return WW.parentNode !== document.head && !~Ki.indexOf(WW.tagName.toUpperCase()) && !WW.getAttribute(Ui) && (!WW.parentNode || "svg" !== WW.parentNode.tagName)
    }
    var Gm = function(WW) {
        return !!WW && Si.some((function(iW) {
          return WW.includes(iW)
        }))
      },
      Im = function(WW) {
        if (!WW) return [];
        var iW = new Set,
          OW = WW.split(/,(?![^()]*\))/).map((function(WW) {
            return WW.trim()
          }));
        OW = OW.flatMap((function(WW) {
          return WW.includes("(") ? WW : WW.split(",").map((function(WW) {
            return WW.trim()
          }))
        }));
        var mW, EW = NW(OW);
        try {
          for (EW.s(); !(mW = EW.n()).done;) {
            var PW = mW.value;
            if (Gm(PW)) {
              var LW = Si.reduce((function(WW, iW) {
                return WW.replace(iW, "")
              }), PW);
              "" !== LW && "*" !== LW && iW.add(LW)
            }
          }
        } catch (cW) {
          EW.e(cW)
        } finally {
          EW.f()
        }
        return iW
      };

    function am(WW) {
      if (hW) {
        var iW;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) iW = WW;
        else if (qi.searchPseudoElementsFullScan) iW = WW.querySelectorAll("*");
        else {
          var OW, mW = new Set,
            EW = NW(document.styleSheets);
          try {
            for (EW.s(); !(OW = EW.n()).done;) {
              var PW = OW.value;
              try {
                var LW, cW = NW(PW.cssRules);
                try {
                  for (cW.s(); !(LW = cW.n()).done;) {
                    var wW, tW = LW.value,
                      ZW = NW(Im(tW.selectorText));
                    try {
                      for (ZW.s(); !(wW = ZW.n()).done;) {
                        var xW = wW.value;
                        mW.add(xW)
                      }
                    } catch (AW) {
                      ZW.e(AW)
                    } finally {
                      ZW.f()
                    }
                  }
                } catch (AW) {
                  cW.e(AW)
                } finally {
                  cW.f()
                }
              } catch (bW) {
                qi.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(PW.href, " (").concat(bW.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (AW) {
            EW.e(AW)
          } finally {
            EW.f()
          }
          if (!mW.size) return;
          var lW = Array.from(mW).join(", ");
          try {
            iW = WW.querySelectorAll(lW)
          } catch (jW) {}
        }
        return new Promise((function(WW, OW) {
          var mW = ri(iW).filter(Rm).map(qm),
            EW = Zm("searchPseudoElements");
          Km(), Promise.all(mW).then((function() {
            EW(), Sm(), WW()
          })).catch((function() {
            EW(), Sm(), OW()
          }))
        }))
      }
    }
    var rm = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(WW) {
              return WW.pseudoElementsCallback = am, WW
            }
          }
        },
        provides: function(WW) {
          WW.pseudoElements2svg = function(WW) {
            var iW = WW.node,
              OW = void 0 === iW ? yW : iW;
            qi.searchPseudoElements && am(OW)
          }
        }
      },
      zm = !1,
      Fm = function(WW) {
        return WW.toLowerCase().split(" ").reduce((function(WW, iW) {
          var OW = iW.toLowerCase().split("-"),
            mW = OW[0],
            EW = OW.slice(1).join("-");
          if (mW && "h" === EW) return WW.flipX = !0, WW;
          if (mW && "v" === EW) return WW.flipY = !0, WW;
          if (EW = parseFloat(EW), isNaN(EW)) return WW;
          switch (mW) {
            case "grow":
              WW.size = WW.size + EW;
              break;
            case "shrink":
              WW.size = WW.size - EW;
              break;
            case "left":
              WW.x = WW.x - EW;
              break;
            case "right":
              WW.x = WW.x + EW;
              break;
            case "up":
              WW.y = WW.y - EW;
              break;
            case "down":
              WW.y = WW.y + EW;
              break;
            case "rotate":
              WW.rotate = WW.rotate + EW
          }
          return WW
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      Qm = {
        mixout: function() {
          return {
            parse: {
              transform: function(WW) {
                return Fm(WW)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(WW, iW) {
              var OW = iW.getAttribute("data-fa-transform");
              return OW && (WW.transform = Fm(OW)), WW
            }
          }
        },
        provides: function(WW) {
          WW.generateAbstractTransformGrouping = function(WW) {
            var iW = WW.main,
              OW = WW.transform,
              mW = WW.containerWidth,
              EW = WW.iconWidth,
              NW = {
                transform: "translate(".concat(mW / 2, " 256)")
              },
              PW = "translate(".concat(32 * OW.x, ", ").concat(32 * OW.y, ") "),
              LW = "scale(".concat(OW.size / 16 * (OW.flipX ? -1 : 1), ", ").concat(OW.size / 16 * (OW.flipY ? -1 : 1), ") "),
              wW = "rotate(".concat(OW.rotate, " 0 0)"),
              tW = {
                outer: NW,
                inner: {
                  transform: "".concat(PW, " ").concat(LW, " ").concat(wW)
                },
                path: {
                  transform: "translate(".concat(EW / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: cW({}, tW.outer),
              children: [{
                tag: "g",
                attributes: cW({}, tW.inner),
                children: [{
                  tag: iW.icon.tag,
                  children: iW.icon.children,
                  attributes: cW(cW({}, iW.icon.attributes), tW.path)
                }]
              }]
            }
          }
        }
      },
      WE = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function iE(WW) {
      var iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return WW.attributes && (WW.attributes.fill || iW) && (WW.attributes.fill = "black"), WW
    }
    var OE = {
        hooks: function() {
          return {
            parseNodeAttributes: function(WW, iW) {
              var OW = iW.getAttribute("data-fa-mask"),
                mW = OW ? DO(OW.split(" ").map((function(WW) {
                  return WW.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return mW.prefix || (mW.prefix = dO()), WW.mask = mW, WW.maskId = iW.getAttribute("data-fa-mask-id"), WW
            }
          }
        },
        provides: function(WW) {
          WW.generateAbstractMask = function(WW) {
            var iW, OW = WW.children,
              mW = WW.attributes,
              EW = WW.main,
              NW = WW.mask,
              PW = WW.maskId,
              LW = WW.transform,
              wW = EW.width,
              tW = EW.icon,
              ZW = NW.width,
              xW = NW.icon,
              lW = function(WW) {
                var iW = WW.transform,
                  OW = WW.containerWidth,
                  mW = WW.iconWidth,
                  EW = {
                    transform: "translate(".concat(OW / 2, " 256)")
                  },
                  NW = "translate(".concat(32 * iW.x, ", ").concat(32 * iW.y, ") "),
                  PW = "scale(".concat(iW.size / 16 * (iW.flipX ? -1 : 1), ", ").concat(iW.size / 16 * (iW.flipY ? -1 : 1), ") "),
                  LW = "rotate(".concat(iW.rotate, " 0 0)");
                return {
                  outer: EW,
                  inner: {
                    transform: "".concat(NW, " ").concat(PW, " ").concat(LW)
                  },
                  path: {
                    transform: "translate(".concat(mW / 2 * -1, " -256)")
                  }
                }
              }({
                transform: LW,
                containerWidth: ZW,
                iconWidth: wW
              }),
              AW = {
                tag: "rect",
                attributes: cW(cW({}, WE), {}, {
                  fill: "white"
                })
              },
              bW = tW.children ? {
                children: tW.children.map(iE)
              } : {},
              jW = {
                tag: "g",
                attributes: cW({}, lW.inner),
                children: [iE(cW({
                  tag: tW.tag,
                  attributes: cW(cW({}, tW.attributes), lW.path)
                }, bW))]
              },
              UW = {
                tag: "g",
                attributes: cW({}, lW.outer),
                children: [jW]
              },
              kW = "mask-".concat(PW || ai()),
              sW = "clip-".concat(PW || ai()),
              MW = {
                tag: "mask",
                attributes: cW(cW({}, WE), {}, {
                  id: kW,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [AW, UW]
              },
              KW = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: sW
                  },
                  children: (iW = xW, "g" === iW.tag ? iW.children : [iW])
                }, MW]
              };
            return OW.push(KW, {
              tag: "rect",
              attributes: cW({
                fill: "currentColor",
                "clip-path": "url(#".concat(sW, ")"),
                mask: "url(#".concat(kW, ")")
              }, WE)
            }), {
              children: OW,
              attributes: mW
            }
          }
        }
      },
      mE = {
        provides: function(WW) {
          var iW = !1;
          YW.matchMedia && (iW = YW.matchMedia("(prefers-reduced-motion: reduce)").matches), WW.missingIconAbstract = function() {
            var WW = [],
              OW = {
                fill: "currentColor"
              },
              mW = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            WW.push({
              tag: "path",
              attributes: cW(cW({}, OW), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var EW = cW(cW({}, mW), {}, {
                attributeName: "opacity"
              }),
              NW = {
                tag: "circle",
                attributes: cW(cW({}, OW), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return iW || NW.children.push({
              tag: "animate",
              attributes: cW(cW({}, mW), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: cW(cW({}, EW), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), WW.push(NW), WW.push({
              tag: "path",
              attributes: cW(cW({}, OW), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: iW ? [] : [{
                tag: "animate",
                attributes: cW(cW({}, EW), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), iW || WW.push({
              tag: "path",
              attributes: cW(cW({}, OW), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: cW(cW({}, EW), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: WW
            }
          }
        }
      };
    ! function(WW, iW) {
      var OW = iW.mixoutsTo;
      CO = WW, XO = {}, Object.keys(BO).forEach((function(WW) {
        -1 === qO.indexOf(WW) && delete BO[WW]
      })), CO.forEach((function(WW) {
        var iW = WW.mixout ? WW.mixout() : {};
        if (Object.keys(iW).forEach((function(WW) {
            "function" === typeof iW[WW] && (OW[WW] = iW[WW]), "object" === xW(iW[WW]) && Object.keys(iW[WW]).forEach((function(mW) {
              OW[WW] || (OW[WW] = {}), OW[WW][mW] = iW[WW][mW]
            }))
          })), WW.hooks) {
          var mW = WW.hooks();
          Object.keys(mW).forEach((function(WW) {
            XO[WW] || (XO[WW] = []), XO[WW].push(mW[WW])
          }))
        }
        WW.provides && WW.provides(BO)
      }))
    }([EO, dm, em, gm, Dm, rm, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              Km(), zm = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            ym(RO("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            Ym && Ym.disconnect()
          },
          watch: function(WW) {
            var iW = WW.observeMutationsRoot;
            zm ? Sm() : ym(RO("mutationObserverCallbacks", {
              observeMutationsRoot: iW
            }))
          }
        }
      }
    }, Qm, OE, mE, {
      hooks: function() {
        return {
          parseNodeAttributes: function(WW, iW) {
            var OW = iW.getAttribute("data-fa-symbol"),
              mW = null !== OW && ("" === OW || OW);
            return WW.symbol = mW, WW
          }
        }
      }
    }], {
      mixoutsTo: FO
    });
    var EE = FO.noAuto,
      NE = FO.config,
      PE = FO.library,
      LE = FO.dom,
      cE = FO.parse,
      wE = FO.findIconDefinition,
      tE = FO.toHtml,
      ZE = FO.icon,
      xE = FO.layer,
      lE = FO.text,
      AE = FO.counter
  },
  7773: WW => {
    WW.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);