/*! For license information please see 98edle.fa-renderer.b8415888.chunk.js.LICENSE.txt */
export const id = 27;
export const ids = [27];
export const modules = {
  5688: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      FontAwesomeIcon: () => QW
    });
    var wW = MW(5679),
      CW = MW(3940),
      zR = MW.n(CW),
      AW = MW(75);

    function bR(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function yR(WW, RW, MW) {
      return (RW = function(WW) {
        var RW = function(WW, RW) {
          if ("object" != typeof WW || !WW) return WW;
          var MW = WW[Symbol.toPrimitive];
          if (void 0 !== MW) {
            var wW = MW.call(WW, RW || "default");
            if ("object" != typeof wW) return wW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === RW ? String : Number)(WW)
        }(WW, "string");
        return "symbol" == typeof RW ? RW : RW + ""
      }(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function NW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function eW(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? NW(Object(MW), !0).forEach((function(RW) {
          yR(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : NW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function BW(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        var MW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != MW) {
          var wW, CW, zR, AW, bR = [],
            yR = !0,
            NW = !1;
          try {
            if (zR = (MW = MW.call(WW)).next, 0 === RW) {
              if (Object(MW) !== MW) return;
              yR = !1
            } else
              for (; !(yR = (wW = zR.call(MW)).done) && (bR.push(wW.value), bR.length !== RW); yR = !0);
          } catch (WW) {
            NW = !0, CW = WW
          } finally {
            try {
              if (!yR && null != MW.return && (AW = MW.return(), Object(AW) !== AW)) return
            } finally {
              if (NW) throw CW
            }
          }
          return bR
        }
      }(WW, RW) || gR(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tR(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return bR(WW)
      }(WW) || function(WW) {
        if ("undefined" != typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || gR(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function TW(WW) {
      return TW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, TW(WW)
    }

    function gR(WW, RW) {
      if (WW) {
        if ("string" == typeof WW) return bR(WW, RW);
        var MW = {}.toString.call(WW).slice(8, -1);
        return "Object" === MW && WW.constructor && (MW = WW.constructor.name), "Map" === MW || "Set" === MW ? Array.from(WW) : "Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW) ? bR(WW, RW) : void 0
      }
    }
    var iR;
    try {
      var YW = MW(5692);
      iR = YW.version
    } catch (cR) {
      iR = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function JW(WW) {
      var RW = WW.beat,
        MW = WW.fade,
        wW = WW.beatFade,
        CW = WW.bounce,
        zR = WW.shake,
        AW = WW.flash,
        bR = WW.spin,
        NW = WW.spinPulse,
        eW = WW.spinReverse,
        tR = WW.pulse,
        TW = WW.fixedWidth,
        gR = WW.inverse,
        YW = WW.border,
        JW = WW.listItem,
        PW = WW.flip,
        IW = WW.size,
        oW = WW.rotation,
        lW = WW.pull,
        FW = WW.swapOpacity,
        fW = WW.rotateBy,
        QW = WW.widthAuto,
        rR = function(WW, RW) {
          for (var MW = BW(WW.split("-"), 2), wW = MW[0], CW = MW[1], zR = BW(RW.split("-"), 2), AW = zR[0], bR = zR[1], yR = wW.split("."), NW = AW.split("."), eW = 0; eW < Math.max(yR.length, NW.length); eW++) {
            var tR = yR[eW] || "0",
              TW = NW[eW] || "0",
              gR = parseInt(tR, 10),
              iR = parseInt(TW, 10);
            if (gR !== iR) return gR > iR
          }
          for (var YW = 0; YW < Math.max(yR.length, NW.length); YW++) {
            var JW = yR[YW] || "0",
              PW = NW[YW] || "0";
            if (JW !== PW && JW.length !== PW.length) return JW.length < PW.length
          }
          return !(CW && !bR)
        }(iR, "7.0.0"),
        cR = yR(yR(yR(yR(yR(yR({
          "fa-beat": RW,
          "fa-fade": MW,
          "fa-beat-fade": wW,
          "fa-bounce": CW,
          "fa-shake": zR,
          "fa-flash": AW,
          "fa-spin": bR,
          "fa-spin-reverse": eW,
          "fa-spin-pulse": NW,
          "fa-pulse": tR,
          "fa-fw": TW,
          "fa-inverse": gR,
          "fa-border": YW,
          "fa-li": JW,
          "fa-flip": !0 === PW,
          "fa-flip-horizontal": "horizontal" === PW || "both" === PW,
          "fa-flip-vertical": "vertical" === PW || "both" === PW
        }, "fa-".concat(IW), "undefined" !== typeof IW && null !== IW), "fa-rotate-".concat(oW), "undefined" !== typeof oW && null !== oW && 0 !== oW), "fa-pull-".concat(lW), "undefined" !== typeof lW && null !== lW), "fa-swap-opacity", FW), "fa-rotate-by", rR && fW), "fa-width-auto", rR && QW);
      return Object.keys(cR).map((function(WW) {
        return cR[WW] ? WW : null
      })).filter((function(WW) {
        return WW
      }))
    }

    function PW(WW) {
      return RW = WW, (RW -= 0) === RW ? WW : (WW = WW.replace(/[\-_\s]+(.)?/g, (function(WW, RW) {
        return RW ? RW.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + WW.substr(1);
      var RW
    }
    var IW = ["style"];
    var oW = !1;
    try {
      oW = !0
    } catch (cR) {}

    function lW(WW) {
      return WW && "object" === TW(WW) && WW.prefix && WW.iconName && WW.icon ? WW : wW.parse.icon ? wW.parse.icon(WW) : null === WW ? null : WW && "object" === TW(WW) && WW.prefix && WW.iconName ? WW : Array.isArray(WW) && 2 === WW.length ? {
        prefix: WW[0],
        iconName: WW[1]
      } : "string" === typeof WW ? {
        prefix: "fas",
        iconName: WW
      } : void 0
    }

    function FW(WW, RW) {
      return Array.isArray(RW) && RW.length > 0 || !Array.isArray(RW) && RW ? yR({}, WW, RW) : {}
    }
    var fW = {
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
      QW = AW.forwardRef((function(WW, RW) {
        var MW = eW(eW({}, fW), WW),
          CW = MW.icon,
          zR = MW.mask,
          AW = MW.symbol,
          bR = MW.className,
          yR = MW.title,
          NW = MW.titleId,
          BW = MW.maskId,
          TW = lW(CW),
          gR = FW("classes", [].concat(tR(JW(MW)), tR((bR || "").split(" ")))),
          iR = FW("transform", "string" === typeof MW.transform ? wW.parse.transform(MW.transform) : MW.transform),
          YW = FW("mask", lW(zR)),
          PW = (0, wW.icon)(TW, eW(eW(eW(eW({}, gR), iR), YW), {}, {
            symbol: AW,
            title: yR,
            titleId: NW,
            maskId: BW
          }));
        if (!PW) return function() {
          var WW;
          !oW && console && "function" === typeof console.error && (WW = console).error.apply(WW, arguments)
        }("Could not find icon", TW), null;
        var IW = PW.abstract,
          QW = {
            ref: RW
          };
        return Object.keys(MW).forEach((function(WW) {
          fW.hasOwnProperty(WW) || (QW[WW] = MW[WW])
        })), rR(IW[0], QW)
      }));
    QW.displayName = "FontAwesomeIcon", QW.propTypes = {
      beat: zR().bool,
      border: zR().bool,
      beatFade: zR().bool,
      bounce: zR().bool,
      className: zR().string,
      fade: zR().bool,
      flash: zR().bool,
      mask: zR().oneOfType([zR().object, zR().array, zR().string]),
      maskId: zR().string,
      fixedWidth: zR().bool,
      inverse: zR().bool,
      flip: zR().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: zR().oneOfType([zR().object, zR().array, zR().string]),
      listItem: zR().bool,
      pull: zR().oneOf(["right", "left"]),
      pulse: zR().bool,
      rotation: zR().oneOf([0, 90, 180, 270]),
      rotateBy: zR().bool,
      shake: zR().bool,
      size: zR().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: zR().bool,
      spinPulse: zR().bool,
      spinReverse: zR().bool,
      symbol: zR().oneOfType([zR().bool, zR().string]),
      title: zR().string,
      titleId: zR().string,
      transform: zR().oneOfType([zR().string, zR().object]),
      swapOpacity: zR().bool,
      widthAuto: zR().bool
    };
    var rR = function WW(RW, MW) {
      var wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof MW) return MW;
      var CW = (MW.children || []).map((function(MW) {
          return WW(RW, MW)
        })),
        zR = Object.keys(MW.attributes || {}).reduce((function(WW, RW) {
          var wW = MW.attributes[RW];
          switch (RW) {
            case "class":
              WW.attrs.className = wW, delete MW.attributes.class;
              break;
            case "style":
              WW.attrs.style = wW.split(";").map((function(WW) {
                return WW.trim()
              })).filter((function(WW) {
                return WW
              })).reduce((function(WW, RW) {
                var MW, wW = RW.indexOf(":"),
                  CW = PW(RW.slice(0, wW)),
                  zR = RW.slice(wW + 1).trim();
                return CW.startsWith("webkit") ? WW[(MW = CW, MW.charAt(0).toUpperCase() + MW.slice(1))] = zR : WW[CW] = zR, WW
              }), {});
              break;
            default:
              0 === RW.indexOf("aria-") || 0 === RW.indexOf("data-") ? WW.attrs[RW.toLowerCase()] = wW : WW.attrs[PW(RW)] = wW
          }
          return WW
        }), {
          attrs: {}
        }),
        AW = wW.style,
        bR = void 0 === AW ? {} : AW,
        yR = function(WW, RW) {
          if (null == WW) return {};
          var MW, wW, CW = function(WW, RW) {
            if (null == WW) return {};
            var MW = {};
            for (var wW in WW)
              if ({}.hasOwnProperty.call(WW, wW)) {
                if (-1 !== RW.indexOf(wW)) continue;
                MW[wW] = WW[wW]
              } return MW
          }(WW, RW);
          if (Object.getOwnPropertySymbols) {
            var zR = Object.getOwnPropertySymbols(WW);
            for (wW = 0; wW < zR.length; wW++) MW = zR[wW], -1 === RW.indexOf(MW) && {}.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
          }
          return CW
        }(wW, IW);
      return zR.attrs.style = eW(eW({}, zR.attrs.style), bR), RW.apply(void 0, [MW.tag, eW(eW({}, zR.attrs), yR)].concat(tR(CW)))
    }.bind(null, AW.createElement)
  },
  3942: (WW, RW, MW) => {
    var wW = MW(3944);

    function CW() {}

    function zR() {}
    zR.resetWarningCache = CW, WW.exports = function() {
      function WW(WW, RW, MW, CW, zR, AW) {
        if (AW !== wW) {
          var bR = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw bR.name = "Invariant Violation", bR
        }
      }

      function RW() {
        return WW
      }
      WW.isRequired = WW;
      var MW = {
        array: WW,
        bigint: WW,
        bool: WW,
        func: WW,
        number: WW,
        object: WW,
        string: WW,
        symbol: WW,
        any: WW,
        arrayOf: RW,
        element: WW,
        elementType: WW,
        instanceOf: RW,
        node: WW,
        objectOf: RW,
        oneOf: RW,
        oneOfType: RW,
        shape: RW,
        exact: RW,
        checkPropTypes: zR,
        resetWarningCache: CW
      };
      return MW.PropTypes = MW, MW
    }
  },
  3940: (WW, RW, MW) => {
    WW.exports = MW(3942)()
  },
  3944: WW => {
    WW.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5679: (WW, RW, MW) => {
    function wW(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function CW(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, BW(wW.key), wW)
      }
    }

    function zR(WW, RW) {
      var MW = "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
      if (!MW) {
        if (Array.isArray(WW) || (MW = TW(WW)) || RW && WW && "number" == typeof WW.length) {
          MW && (WW = MW);
          var wW = 0,
            CW = function() {};
          return {
            s: CW,
            n: function() {
              return wW >= WW.length ? {
                done: !0
              } : {
                done: !1,
                value: WW[wW++]
              }
            },
            e: function(WW) {
              throw WW
            },
            f: CW
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var zR, AW = !0,
        bR = !1;
      return {
        s: function() {
          MW = MW.call(WW)
        },
        n: function() {
          var WW = MW.next();
          return AW = WW.done, WW
        },
        e: function(WW) {
          bR = !0, zR = WW
        },
        f: function() {
          try {
            AW || null == MW.return || MW.return()
          } finally {
            if (bR) throw zR
          }
        }
      }
    }

    function AW(WW, RW, MW) {
      return (RW = BW(RW)) in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function bR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function yR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? bR(Object(MW), !0).forEach((function(RW) {
          AW(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : bR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function NW(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        var MW = null == WW ? null : "undefined" != typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null != MW) {
          var wW, CW, zR, AW, bR = [],
            yR = !0,
            NW = !1;
          try {
            if (zR = (MW = MW.call(WW)).next, 0 === RW) {
              if (Object(MW) !== MW) return;
              yR = !1
            } else
              for (; !(yR = (wW = zR.call(MW)).done) && (bR.push(wW.value), bR.length !== RW); yR = !0);
          } catch (WW) {
            NW = !0, CW = WW
          } finally {
            try {
              if (!yR && null != MW.return && (AW = MW.return(), Object(AW) !== AW)) return
            } finally {
              if (NW) throw CW
            }
          }
          return bR
        }
      }(WW, RW) || TW(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function eW(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return wW(WW)
      }(WW) || function(WW) {
        if ("undefined" != typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || TW(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function BW(WW) {
      var RW = function(WW, RW) {
        if ("object" != typeof WW || !WW) return WW;
        var MW = WW[Symbol.toPrimitive];
        if (void 0 !== MW) {
          var wW = MW.call(WW, RW || "default");
          if ("object" != typeof wW) return wW;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === RW ? String : Number)(WW)
      }(WW, "string");
      return "symbol" == typeof RW ? RW : RW + ""
    }

    function tR(WW) {
      return tR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, tR(WW)
    }

    function TW(WW, RW) {
      if (WW) {
        if ("string" == typeof WW) return wW(WW, RW);
        var MW = {}.toString.call(WW).slice(8, -1);
        return "Object" === MW && WW.constructor && (MW = WW.constructor.name), "Map" === MW || "Set" === MW ? Array.from(WW) : "Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW) ? wW(WW, RW) : void 0
      }
    }
    MW.r(RW), MW.d(RW, {
      api: () => DM,
      config: () => MC,
      counter: () => BC,
      dom: () => CC,
      findIconDefinition: () => AC,
      icon: () => yz,
      layer: () => NC,
      library: () => wC,
      noAuto: () => RC,
      parse: () => zz,
      text: () => eC,
      toHtml: () => bz
    });
    var gR = function() {},
      iR = {},
      YW = {},
      JW = null,
      PW = {
        mark: gR,
        measure: gR
      };
    try {
      "undefined" !== typeof window && (iR = window), "undefined" !== typeof document && (YW = document), "undefined" !== typeof MutationObserver && (JW = MutationObserver), "undefined" !== typeof performance && (PW = performance)
    } catch (uW) {}
    var IW, oW, lW = (iR.navigator || {}).userAgent,
      FW = void 0 === lW ? "" : lW,
      fW = iR,
      QW = YW,
      rR = JW,
      cR = PW,
      XW = (fW.document, !!QW.documentElement && !!QW.head && "function" === typeof QW.addEventListener && "function" === typeof QW.createElement),
      jR = ~FW.indexOf("MSIE") || ~FW.indexOf("Trident/"),
      kR = {
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
      aR = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      sW = "classic",
      dW = "duotone",
      pW = "sharp",
      hW = "sharp-duotone",
      UW = "chisel",
      EW = "etch",
      VW = "graphite",
      mR = "jelly",
      xR = "jelly-duo",
      vR = "jelly-fill",
      KW = "notdog",
      uW = "notdog-duo",
      OW = "slab",
      nW = "slab-press",
      GW = "thumbprint",
      LW = "utility",
      HW = "utility-duo",
      DW = "utility-fill",
      qR = "whiteboard",
      ZW = [sW, dW, pW, hW, UW, EW, VW, mR, xR, vR, KW, uW, OW, nW, GW, LW, HW, DW, qR],
      SW = (AW(AW(AW(AW(AW(AW(AW(AW(AW(AW(IW = {}, sW, "Classic"), dW, "Duotone"), pW, "Sharp"), hW, "Sharp Duotone"), UW, "Chisel"), EW, "Etch"), VW, "Graphite"), mR, "Jelly"), xR, "Jelly Duo"), vR, "Jelly Fill"), AW(AW(AW(AW(AW(AW(AW(AW(AW(IW, KW, "Notdog"), uW, "Notdog Duo"), OW, "Slab"), nW, "Slab Press"), GW, "Thumbprint"), LW, "Utility"), HW, "Utility Duo"), DW, "Utility Fill"), qR, "Whiteboard"), new Map([
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
      WR = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      RR = {
        fak: "kit",
        "fa-kit": "kit"
      },
      MR = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      wR = (AW(AW({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      CR = {
        "kit-duotone": "fakd"
      },
      zM = "duotone-group",
      AR = "swap-opacity",
      bM = "primary",
      yM = "secondary",
      NR = (AW(AW(AW(AW(AW(AW(AW(AW(AW(AW(oW = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), AW(AW(AW(AW(AW(AW(AW(AW(AW(oW, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), AW(AW({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      eR = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      BR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tM = BR.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      TR = [].concat(eW(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", zM, AR, bM, yM]).concat(BR.map((function(WW) {
        return "".concat(WW, "x")
      }))).concat(tM.map((function(WW) {
        return "w-".concat(WW)
      }))),
      gM = "___FONT_AWESOME___",
      iM = "svg-inline--fa",
      YR = "data-fa-i2svg",
      JR = "data-fa-pseudo-element",
      PR = "data-prefix",
      IR = "data-icon",
      oR = "fontawesome-i2svg",
      lR = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      FR = ["::before", "::after", ":before", ":after"],
      fR = function() {
        try {
          return !0
        } catch (WW) {
          return !1
        }
      }();

    function QR(WW) {
      return new Proxy(WW, {
        get: function(WW, RW) {
          return RW in WW ? WW[RW] : WW[sW]
        }
      })
    }
    var rM = yR({}, kR);
    rM[sW] = yR(yR(yR(yR({}, {
      "fa-duotone": "duotone"
    }), kR[sW]), RR), MR);
    var cM = QR(rM),
      XR = yR({}, {
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
    XR[sW] = yR(yR(yR(yR({}, {
      duotone: "fad"
    }), XR[sW]), wR), CR);
    var jM = QR(XR),
      kM = yR({}, NR);
    kM[sW] = yR(yR({}, kM[sW]), {
      fak: "fa-kit"
    });
    var aM = QR(kM),
      sR = yR({}, {
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
    sR[sW] = yR(yR({}, sR[sW]), {
      "fa-kit": "fak"
    });
    QR(sR);
    var dR = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      pR = "fa-layers-text",
      hR = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      UR = (QR(yR({}, {
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
      ER = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      VR = [].concat(eW(["kit"]), eW(TR)),
      mM = fW.FontAwesomeConfig || {};
    if (QW && "function" === typeof QW.querySelector) {
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
        var RW = NW(WW, 2),
          MW = RW[0],
          wW = RW[1],
          CW = function(WW) {
            return "" === WW || "false" !== WW && ("true" === WW || WW)
          }(function(WW) {
            var RW = QW.querySelector("script[" + WW + "]");
            if (RW) return RW.getAttribute(WW)
          }(MW));
        void 0 !== CW && null !== CW && (mM[wW] = CW)
      }))
    }
    var xM = {
      styleDefault: "solid",
      familyDefault: sW,
      cssPrefix: "fa",
      replacementClass: iM,
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
    mM.familyPrefix && (mM.cssPrefix = mM.familyPrefix);
    var vM = yR(yR({}, xM), mM);
    vM.autoReplaceSvg || (vM.observeMutations = !1);
    var KR = {};
    Object.keys(xM).forEach((function(WW) {
      Object.defineProperty(KR, WW, {
        enumerable: !0,
        set: function(RW) {
          vM[WW] = RW, uR.forEach((function(WW) {
            return WW(KR)
          }))
        },
        get: function() {
          return vM[WW]
        }
      })
    })), Object.defineProperty(KR, "familyPrefix", {
      enumerable: !0,
      set: function(WW) {
        vM.cssPrefix = WW, uR.forEach((function(WW) {
          return WW(KR)
        }))
      },
      get: function() {
        return vM.cssPrefix
      }
    }), fW.FontAwesomeConfig = KR;
    var uR = [];
    var OR = 16,
      nR = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function GR() {
      for (var WW = 12, RW = ""; WW-- > 0;) RW += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return RW
    }

    function LR(WW) {
      for (var RW = [], MW = (WW || []).length >>> 0; MW--;) RW[MW] = WW[MW];
      return RW
    }

    function HR(WW) {
      return WW.classList ? LR(WW.classList) : (WW.getAttribute("class") || "").split(" ").filter((function(WW) {
        return WW
      }))
    }

    function DR(WW) {
      return "".concat(WW).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function qM(WW) {
      return Object.keys(WW || {}).reduce((function(RW, MW) {
        return RW + "".concat(MW, ": ").concat(WW[MW].trim(), ";")
      }), "")
    }

    function ZR(WW) {
      return WW.size !== nR.size || WW.x !== nR.x || WW.y !== nR.y || WW.rotate !== nR.rotate || WW.flipX || WW.flipY
    }

    function SR() {
      var WW = "fa",
        RW = iM,
        MW = KR.cssPrefix,
        wW = KR.replacementClass,
        CW = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (MW !== WW || wW !== RW) {
        var zR = new RegExp("\\.".concat(WW, "\\-"), "g"),
          AW = new RegExp("\\--".concat(WW, "\\-"), "g"),
          bR = new RegExp("\\.".concat(RW), "g");
        CW = CW.replace(zR, ".".concat(MW, "-")).replace(AW, "--".concat(MW, "-")).replace(bR, ".".concat(wW))
      }
      return CW
    }
    var WM = !1;

    function RM() {
      KR.autoAddCss && !WM && (! function(WW) {
        if (WW && XW) {
          var RW = QW.createElement("style");
          RW.setAttribute("type", "text/css"), RW.innerHTML = WW;
          for (var MW = QW.head.childNodes, wW = null, CW = MW.length - 1; CW > -1; CW--) {
            var zR = MW[CW],
              AW = (zR.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(AW) > -1 && (wW = zR)
          }
          QW.head.insertBefore(RW, wW)
        }
      }(SR()), WM = !0)
    }
    var MM = {
        mixout: function() {
          return {
            dom: {
              css: SR,
              insertCss: RM
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              RM()
            },
            beforeI2svg: function() {
              RM()
            }
          }
        }
      },
      wM = fW || {};
    wM[gM] || (wM[gM] = {}), wM[gM].styles || (wM[gM].styles = {}), wM[gM].hooks || (wM[gM].hooks = {}), wM[gM].shims || (wM[gM].shims = []);
    var CM = wM[gM],
      zw = [],
      AM = function() {
        QW.removeEventListener("DOMContentLoaded", AM), bw = 1, zw.map((function(WW) {
          return WW()
        }))
      },
      bw = !1;

    function yw(WW) {
      var RW = WW.tag,
        MW = WW.attributes,
        wW = void 0 === MW ? {} : MW,
        CW = WW.children,
        zR = void 0 === CW ? [] : CW;
      return "string" === typeof WW ? DR(WW) : "<".concat(RW, " ").concat(function(WW) {
        return Object.keys(WW || {}).reduce((function(RW, MW) {
          return RW + "".concat(MW, '="').concat(DR(WW[MW]), '" ')
        }), "").trim()
      }(wW), ">").concat(zR.map(yw).join(""), "</").concat(RW, ">")
    }

    function NM(WW, RW, MW) {
      if (WW && WW[RW] && WW[RW][MW]) return {
        prefix: RW,
        iconName: MW,
        icon: WW[RW][MW]
      }
    }
    XW && ((bw = (QW.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(QW.readyState)) || QW.addEventListener("DOMContentLoaded", AM));
    var eM = function(WW, RW, MW, wW) {
      var CW, zR, AW, bR = Object.keys(WW),
        yR = bR.length,
        NW = void 0 !== wW ? function(WW, RW) {
          return function(MW, wW, CW, zR) {
            return WW.call(RW, MW, wW, CW, zR)
          }
        }(RW, wW) : RW;
      for (void 0 === MW ? (CW = 1, AW = WW[bR[0]]) : (CW = 0, AW = MW); CW < yR; CW++) AW = NW(AW, WW[zR = bR[CW]], zR, WW);
      return AW
    };

    function BM(WW) {
      return 1 !== eW(WW).length ? null : WW.codePointAt(0).toString(16)
    }

    function tw(WW) {
      return Object.keys(WW).reduce((function(RW, MW) {
        var wW = WW[MW];
        return !!wW.icon ? RW[wW.iconName] = wW.icon : RW[MW] = wW, RW
      }), {})
    }

    function TM(WW, RW) {
      var MW = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        wW = void 0 !== MW && MW,
        CW = tw(RW);
      "function" !== typeof CM.hooks.addPack || wW ? CM.styles[WW] = yR(yR({}, CM.styles[WW] || {}), CW) : CM.hooks.addPack(WW, tw(RW)), "fas" === WW && TM("fa", RW)
    }
    var gw = CM.styles,
      iw = CM.shims,
      YM = Object.keys(aM),
      JM = YM.reduce((function(WW, RW) {
        return WW[RW] = Object.keys(aM[RW]), WW
      }), {}),
      PM = null,
      IM = {},
      oM = {},
      lM = {},
      FM = {},
      fM = {};

    function QM(WW, RW) {
      var MW, wW = RW.split("-"),
        CW = wW[0],
        zR = wW.slice(1).join("-");
      return CW !== WW || "" === zR || (MW = zR, ~VR.indexOf(MW)) ? null : zR
    }
    var rw, cwW = function() {
      var WW = function(WW) {
        return eM(gw, (function(RW, MW, wW) {
          return RW[wW] = eM(MW, WW, {}), RW
        }), {})
      };
      IM = WW((function(WW, RW, MW) {
        (RW[3] && (WW[RW[3]] = MW), RW[2]) && RW[2].filter((function(WW) {
          return "number" === typeof WW
        })).forEach((function(RW) {
          WW[RW.toString(16)] = MW
        }));
        return WW
      })), oM = WW((function(WW, RW, MW) {
        (WW[MW] = MW, RW[2]) && RW[2].filter((function(WW) {
          return "string" === typeof WW
        })).forEach((function(RW) {
          WW[RW] = MW
        }));
        return WW
      })), fM = WW((function(WW, RW, MW) {
        var wW = RW[2];
        return WW[MW] = MW, wW.forEach((function(RW) {
          WW[RW] = MW
        })), WW
      }));
      var RW = "far" in gw || KR.autoFetchSvg,
        MW = eM(iw, (function(WW, MW) {
          var wW = MW[0],
            CW = MW[1],
            zR = MW[2];
          return "far" !== CW || RW || (CW = "fas"), "string" === typeof wW && (WW.names[wW] = {
            prefix: CW,
            iconName: zR
          }), "number" === typeof wW && (WW.unicodes[wW.toString(16)] = {
            prefix: CW,
            iconName: zR
          }), WW
        }), {
          names: {},
          unicodes: {}
        });
      lM = MW.names, FM = MW.unicodes, PM = sM(KR.styleDefault, {
        family: KR.familyDefault
      })
    };

    function XM(WW, RW) {
      return (IM[WW] || {})[RW]
    }

    function jw(WW, RW) {
      return (fM[WW] || {})[RW]
    }

    function kw(WW) {
      return lM[WW] || {
        prefix: null,
        iconName: null
      }
    }

    function aw() {
      return PM
    }
    rw = function(WW) {
      PM = sM(WW.styleDefault, {
        family: KR.familyDefault
      })
    }, uR.push(rw), cwW();

    function sM(WW) {
      var RW = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        MW = void 0 === RW ? sW : RW,
        wW = cM[MW][WW];
      if (MW === dW && !WW) return "fad";
      var CW = jM[MW][WW] || jM[MW][wW],
        zR = WW in CM.styles ? WW : null;
      return CW || zR || null
    }

    function dM(WW) {
      return WW.sort().filter((function(WW, RW, MW) {
        return MW.indexOf(WW) === RW
      }))
    }
    var pM = eR.concat(WR);

    function hM(WW) {
      var RW = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        MW = void 0 !== RW && RW,
        wW = null,
        CW = dM(WW.filter((function(WW) {
          return pM.includes(WW)
        }))),
        zR = dM(WW.filter((function(WW) {
          return !pM.includes(WW)
        }))),
        AW = NW(CW.filter((function(WW) {
          return wW = WW, !aR.includes(WW)
        })), 1)[0],
        bR = void 0 === AW ? null : AW,
        eW = function(WW) {
          var RW = sW,
            MW = YM.reduce((function(WW, RW) {
              return WW[RW] = "".concat(KR.cssPrefix, "-").concat(RW), WW
            }), {});
          return ZW.forEach((function(wW) {
            (WW.includes(MW[wW]) || WW.some((function(WW) {
              return JM[wW].includes(WW)
            }))) && (RW = wW)
          })), RW
        }(CW),
        BW = yR(yR({}, function(WW) {
          var RW = [],
            MW = null;
          return WW.forEach((function(WW) {
            var wW = QM(KR.cssPrefix, WW);
            wW ? MW = wW : WW && RW.push(WW)
          })), {
            iconName: MW,
            rest: RW
          }
        }(zR)), {}, {
          prefix: sM(bR, {
            family: eW
          })
        });
      return yR(yR(yR({}, BW), function(WW) {
        var RW = WW.values,
          MW = WW.family,
          wW = WW.canonical,
          CW = WW.givenPrefix,
          zR = void 0 === CW ? "" : CW,
          AW = WW.styles,
          bR = void 0 === AW ? {} : AW,
          yR = WW.config,
          NW = void 0 === yR ? {} : yR,
          eW = MW === dW,
          BW = RW.includes("fa-duotone") || RW.includes("fad"),
          tR = "duotone" === NW.familyDefault,
          TW = "fad" === wW.prefix || "fa-duotone" === wW.prefix;
        !eW && (BW || tR || TW) && (wW.prefix = "fad");
        (RW.includes("fa-brands") || RW.includes("fab")) && (wW.prefix = "fab");
        if (!wW.prefix && UM.includes(MW)) {
          if (Object.keys(bR).find((function(WW) {
              return EM.includes(WW)
            })) || NW.autoFetchSvg) {
            var gR = SW.get(MW).defaultShortPrefixId;
            wW.prefix = gR, wW.iconName = jw(wW.prefix, wW.iconName) || wW.iconName
          }
        }
        "fa" !== wW.prefix && "fa" !== zR || (wW.prefix = aw() || "fas");
        return wW
      }({
        values: WW,
        family: eW,
        styles: gw,
        config: KR,
        canonical: BW,
        givenPrefix: wW
      })), function(WW, RW, MW) {
        var wW = MW.prefix,
          CW = MW.iconName;
        if (WW || !wW || !CW) return {
          prefix: wW,
          iconName: CW
        };
        var zR = "fa" === RW ? kw(CW) : {},
          AW = jw(wW, CW);
        CW = zR.iconName || AW || CW, "far" !== (wW = zR.prefix || wW) || gw.far || !gw.fas || KR.autoFetchSvg || (wW = "fas");
        return {
          prefix: wW,
          iconName: CW
        }
      }(MW, wW, BW))
    }
    var UM = ZW.filter((function(WW) {
        return WW !== sW || WW !== dW
      })),
      EM = Object.keys(NR).filter((function(WW) {
        return WW !== sW
      })).map((function(WW) {
        return Object.keys(NR[WW])
      })).flat();
    var VM = function() {
        return function(WW, RW, MW) {
          return RW && CW(WW.prototype, RW), MW && CW(WW, MW), Object.defineProperty(WW, "prototype", {
            writable: !1
          }), WW
        }((function WW() {
          ! function(WW, RW) {
            if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
          }(this, WW), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var WW = this, RW = arguments.length, MW = new Array(RW), wW = 0; wW < RW; wW++) MW[wW] = arguments[wW];
            var CW = MW.reduce(this._pullDefinitions, {});
            Object.keys(CW).forEach((function(RW) {
              WW.definitions[RW] = yR(yR({}, WW.definitions[RW] || {}), CW[RW]), TM(RW, CW[RW]);
              var MW = aM[sW][RW];
              MW && TM(MW, CW[RW]), cwW()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(WW, RW) {
            var MW = RW.prefix && RW.iconName && RW.icon ? {
              0: RW
            } : RW;
            return Object.keys(MW).map((function(RW) {
              var wW = MW[RW],
                CW = wW.prefix,
                zR = wW.iconName,
                AW = wW.icon,
                bR = AW[2];
              WW[CW] || (WW[CW] = {}), bR.length > 0 && bR.forEach((function(RW) {
                "string" === typeof RW && (WW[CW][RW] = AW)
              })), WW[CW][zR] = AW
            })), WW
          }
        }])
      }(),
      mw = [],
      xw = {},
      vw = {},
      KM = Object.keys(vw);

    function uM(WW, RW) {
      for (var MW = arguments.length, wW = new Array(MW > 2 ? MW - 2 : 0), CW = 2; CW < MW; CW++) wW[CW - 2] = arguments[CW];
      return (xw[WW] || []).forEach((function(WW) {
        RW = WW.apply(null, [RW].concat(wW))
      })), RW
    }

    function OM(WW) {
      for (var RW = arguments.length, MW = new Array(RW > 1 ? RW - 1 : 0), wW = 1; wW < RW; wW++) MW[wW - 1] = arguments[wW];
      (xw[WW] || []).forEach((function(WW) {
        WW.apply(null, MW)
      }))
    }

    function nM() {
      var WW = arguments[0],
        RW = Array.prototype.slice.call(arguments, 1);
      return vw[WW] ? vw[WW].apply(null, RW) : void 0
    }

    function GM(WW) {
      "fa" === WW.prefix && (WW.prefix = "fas");
      var RW = WW.iconName,
        MW = WW.prefix || aw();
      if (RW) return RW = jw(MW, RW) || RW, NM(LM.definitions, MW, RW) || NM(CM.styles, MW, RW)
    }
    var LM = new VM,
      HM = {
        i2svg: function() {
          var WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return XW ? (OM("beforeI2svg", WW), nM("pseudoElements2svg", WW), nM("i2svg", WW)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var WW, RW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            MW = RW.autoReplaceSvgRoot;
          !1 === KR.autoReplaceSvg && (KR.autoReplaceSvg = !0), KR.observeMutations = !0, WW = function() {
            qw({
              autoReplaceSvgRoot: MW
            }), OM("watch", RW)
          }, XW && (bw ? setTimeout(WW, 0) : zw.push(WW))
        }
      },
      DM = {
        noAuto: function() {
          KR.autoReplaceSvg = !1, KR.observeMutations = !1, OM("noAuto")
        },
        config: KR,
        dom: HM,
        parse: {
          icon: function(WW) {
            if (null === WW) return null;
            if ("object" === tR(WW) && WW.prefix && WW.iconName) return {
              prefix: WW.prefix,
              iconName: jw(WW.prefix, WW.iconName) || WW.iconName
            };
            if (Array.isArray(WW) && 2 === WW.length) {
              var RW = 0 === WW[1].indexOf("fa-") ? WW[1].slice(3) : WW[1],
                MW = sM(WW[0]);
              return {
                prefix: MW,
                iconName: jw(MW, RW) || RW
              }
            }
            if ("string" === typeof WW && (WW.indexOf("".concat(KR.cssPrefix, "-")) > -1 || WW.match(dR))) {
              var wW = hM(WW.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: wW.prefix || aw(),
                iconName: jw(wW.prefix, wW.iconName) || wW.iconName
              }
            }
            if ("string" === typeof WW) {
              var CW = aw();
              return {
                prefix: CW,
                iconName: jw(CW, WW) || WW
              }
            }
          }
        },
        library: LM,
        findIconDefinition: GM,
        toHtml: yw
      },
      qw = function() {
        var WW = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          RW = void 0 === WW ? QW : WW;
        (Object.keys(CM.styles).length > 0 || KR.autoFetchSvg) && XW && KR.autoReplaceSvg && DM.dom.i2svg({
          node: RW
        })
      };

    function ZM(WW, RW) {
      return Object.defineProperty(WW, "abstract", {
        get: RW
      }), Object.defineProperty(WW, "html", {
        get: function() {
          return WW.abstract.map((function(WW) {
            return yw(WW)
          }))
        }
      }), Object.defineProperty(WW, "node", {
        get: function() {
          if (XW) {
            var RW = QW.createElement("div");
            return RW.innerHTML = WW.html, RW.children
          }
        }
      }), WW
    }

    function SM(WW) {
      var RW = WW.icons,
        MW = RW.main,
        wW = RW.mask,
        CW = WW.prefix,
        zR = WW.iconName,
        AW = WW.transform,
        bR = WW.symbol,
        NW = WW.maskId,
        eW = WW.extra,
        BW = WW.watchable,
        tR = void 0 !== BW && BW,
        TW = wW.found ? wW : MW,
        gR = TW.width,
        iR = TW.height,
        YW = [KR.replacementClass, zR ? "".concat(KR.cssPrefix, "-").concat(zR) : ""].filter((function(WW) {
          return -1 === eW.classes.indexOf(WW)
        })).filter((function(WW) {
          return "" !== WW || !!WW
        })).concat(eW.classes).join(" "),
        JW = {
          children: [],
          attributes: yR(yR({}, eW.attributes), {}, {
            "data-prefix": CW,
            "data-icon": zR,
            class: YW,
            role: eW.attributes.role || "img",
            viewBox: "0 0 ".concat(gR, " ").concat(iR)
          })
        };
      (function(WW) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(RW) {
          return RW in WW
        }))
      })(eW.attributes) || eW.attributes["aria-hidden"] || (JW.attributes["aria-hidden"] = "true"), tR && (JW.attributes[YR] = "");
      var PW = yR(yR({}, JW), {}, {
          prefix: CW,
          iconName: zR,
          main: MW,
          mask: wW,
          maskId: NW,
          transform: AW,
          symbol: bR,
          styles: yR({}, eW.styles)
        }),
        IW = wW.found && MW.found ? nM("generateAbstractMask", PW) || {
          children: [],
          attributes: {}
        } : nM("generateAbstractIcon", PW) || {
          children: [],
          attributes: {}
        },
        oW = IW.children,
        lW = IW.attributes;
      return PW.children = oW, PW.attributes = lW, bR ? function(WW) {
        var RW = WW.prefix,
          MW = WW.iconName,
          wW = WW.children,
          CW = WW.attributes,
          zR = WW.symbol,
          AW = !0 === zR ? "".concat(RW, "-").concat(KR.cssPrefix, "-").concat(MW) : zR;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: yR(yR({}, CW), {}, {
              id: AW
            }),
            children: wW
          }]
        }]
      }(PW) : function(WW) {
        var RW = WW.children,
          MW = WW.main,
          wW = WW.mask,
          CW = WW.attributes,
          zR = WW.styles,
          AW = WW.transform;
        if (ZR(AW) && MW.found && !wW.found) {
          var bR = {
            x: MW.width / MW.height / 2,
            y: .5
          };
          CW.style = qM(yR(yR({}, zR), {}, {
            "transform-origin": "".concat(bR.x + AW.x / 16, "em ").concat(bR.y + AW.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: CW,
          children: RW
        }]
      }(PW)
    }

    function Ww(WW) {
      var RW = WW.content,
        MW = WW.width,
        wW = WW.height,
        CW = WW.transform,
        zR = WW.extra,
        AW = WW.watchable,
        bR = void 0 !== AW && AW,
        NW = yR(yR({}, zR.attributes), {}, {
          class: zR.classes.join(" ")
        });
      bR && (NW[YR] = "");
      var eW = yR({}, zR.styles);
      ZR(CW) && (eW.transform = function(WW) {
        var RW = WW.transform,
          MW = WW.width,
          wW = void 0 === MW ? 16 : MW,
          CW = WW.height,
          zR = void 0 === CW ? 16 : CW,
          AW = WW.startCentered,
          bR = void 0 !== AW && AW,
          yR = "";
        return yR += bR && jR ? "translate(".concat(RW.x / OR - wW / 2, "em, ").concat(RW.y / OR - zR / 2, "em) ") : bR ? "translate(calc(-50% + ".concat(RW.x / OR, "em), calc(-50% + ").concat(RW.y / OR, "em)) ") : "translate(".concat(RW.x / OR, "em, ").concat(RW.y / OR, "em) "), yR += "scale(".concat(RW.size / OR * (RW.flipX ? -1 : 1), ", ").concat(RW.size / OR * (RW.flipY ? -1 : 1), ") "), yR + "rotate(".concat(RW.rotate, "deg) ")
      }({
        transform: CW,
        startCentered: !0,
        width: MW,
        height: wW
      }), eW["-webkit-transform"] = eW.transform);
      var BW = qM(eW);
      BW.length > 0 && (NW.style = BW);
      var tR = [];
      return tR.push({
        tag: "span",
        attributes: NW,
        children: [RW]
      }), tR
    }
    var Rw = CM.styles;

    function Mw(WW) {
      var RW = WW[0],
        MW = WW[1],
        wW = NW(WW.slice(4), 1)[0];
      return {
        found: !0,
        width: RW,
        height: MW,
        icon: Array.isArray(wW) ? {
          tag: "g",
          attributes: {
            class: "".concat(KR.cssPrefix, "-").concat(ER.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(KR.cssPrefix, "-").concat(ER.SECONDARY),
              fill: "currentColor",
              d: wW[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(KR.cssPrefix, "-").concat(ER.PRIMARY),
              fill: "currentColor",
              d: wW[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: wW
          }
        }
      }
    }
    var ww = {
      found: !1,
      width: 512,
      height: 512
    };

    function Cw(WW, RW) {
      var MW = RW;
      return "fa" === RW && null !== KR.styleDefault && (RW = aw()), new Promise((function(wW, CW) {
        if ("fa" === MW) {
          var zR = kw(WW) || {};
          WW = zR.iconName || WW, RW = zR.prefix || RW
        }
        if (WW && RW && Rw[RW] && Rw[RW][WW]) return wW(Mw(Rw[RW][WW]));
        ! function(WW, RW) {
          fR || KR.showMissingIcons || !WW || console.error('Icon with name "'.concat(WW, '" and prefix "').concat(RW, '" is missing.'))
        }(WW, RW), wW(yR(yR({}, ww), {}, {
          icon: KR.showMissingIcons && WW && nM("missingIconAbstract") || {}
        }))
      }))
    }
    var zC = function() {},
      Aw = KR.measurePerformance && cR && cR.mark && cR.measure ? cR : {
        mark: zC,
        measure: zC
      },
      bC = 'FA "7.2.0"',
      yC = function(WW) {
        Aw.mark("".concat(bC, " ").concat(WW, " ends")), Aw.measure("".concat(bC, " ").concat(WW), "".concat(bC, " ").concat(WW, " begins"), "".concat(bC, " ").concat(WW, " ends"))
      },
      Nw = function(WW) {
        return Aw.mark("".concat(bC, " ").concat(WW, " begins")),
          function() {
            return yC(WW)
          }
      },
      ew = function() {};

    function Bw(WW) {
      return "string" === typeof(WW.getAttribute ? WW.getAttribute(YR) : null)
    }

    function tC(WW) {
      return QW.createElementNS("http://www.w3.org/2000/svg", WW)
    }

    function Tw(WW) {
      return QW.createElement(WW)
    }

    function gC(WW) {
      var RW = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        MW = void 0 === RW ? "svg" === WW.tag ? tC : Tw : RW;
      if ("string" === typeof WW) return QW.createTextNode(WW);
      var wW = MW(WW.tag);
      return Object.keys(WW.attributes || []).forEach((function(RW) {
        wW.setAttribute(RW, WW.attributes[RW])
      })), (WW.children || []).forEach((function(WW) {
        wW.appendChild(gC(WW, {
          ceFn: MW
        }))
      })), wW
    }
    var iC = {
      replace: function(WW) {
        var RW = WW[0];
        if (RW.parentNode)
          if (WW[1].forEach((function(WW) {
              RW.parentNode.insertBefore(gC(WW), RW)
            })), null === RW.getAttribute(YR) && KR.keepOriginalSource) {
            var MW = QW.createComment(function(WW) {
              var RW = " ".concat(WW.outerHTML, " ");
              return "".concat(RW, "Font Awesome fontawesome.com ")
            }(RW));
            RW.parentNode.replaceChild(MW, RW)
          } else RW.remove()
      },
      nest: function(WW) {
        var RW = WW[0],
          MW = WW[1];
        if (~HR(RW).indexOf(KR.replacementClass)) return iC.replace(WW);
        var wW = new RegExp("".concat(KR.cssPrefix, "-.*"));
        if (delete MW[0].attributes.id, MW[0].attributes.class) {
          var CW = MW[0].attributes.class.split(" ").reduce((function(WW, RW) {
            return RW === KR.replacementClass || RW.match(wW) ? WW.toSvg.push(RW) : WW.toNode.push(RW), WW
          }), {
            toNode: [],
            toSvg: []
          });
          MW[0].attributes.class = CW.toSvg.join(" "), 0 === CW.toNode.length ? RW.removeAttribute("class") : RW.setAttribute("class", CW.toNode.join(" "))
        }
        var zR = MW.map((function(WW) {
          return yw(WW)
        })).join("\n");
        RW.setAttribute(YR, ""), RW.innerHTML = zR
      }
    };

    function Yw(WW) {
      WW()
    }

    function Jw(WW, RW) {
      var MW = "function" === typeof RW ? RW : ew;
      if (0 === WW.length) MW();
      else {
        var wW = Yw;
        "async" === KR.mutateApproach && (wW = fW.requestAnimationFrame || Yw), wW((function() {
          var RW = !0 === KR.autoReplaceSvg ? iC.replace : iC[KR.autoReplaceSvg] || iC.replace,
            wW = Nw("mutate");
          WW.map(RW), wW(), MW()
        }))
      }
    }
    var Pw = !1;

    function Iw() {
      Pw = !0
    }

    function ow() {
      Pw = !1
    }
    var lw = null;

    function Fw(WW) {
      if (rR && KR.observeMutations) {
        var RW = WW.treeCallback,
          MW = void 0 === RW ? ew : RW,
          wW = WW.nodeCallback,
          CW = void 0 === wW ? ew : wW,
          zR = WW.pseudoElementsCallback,
          AW = void 0 === zR ? ew : zR,
          bR = WW.observeMutationsRoot,
          yR = void 0 === bR ? QW : bR;
        lw = new rR((function(WW) {
          if (!Pw) {
            var RW = aw();
            LR(WW).forEach((function(WW) {
              if ("childList" === WW.type && WW.addedNodes.length > 0 && !Bw(WW.addedNodes[0]) && (KR.searchPseudoElements && AW(WW.target), MW(WW.target)), "attributes" === WW.type && WW.target.parentNode && KR.searchPseudoElements && AW([WW.target], !0), "attributes" === WW.type && Bw(WW.target) && ~UR.indexOf(WW.attributeName))
                if ("class" === WW.attributeName && function(WW) {
                    var RW = WW.getAttribute ? WW.getAttribute(PR) : null,
                      MW = WW.getAttribute ? WW.getAttribute(IR) : null;
                    return RW && MW
                  }(WW.target)) {
                  var wW = hM(HR(WW.target)),
                    zR = wW.prefix,
                    bR = wW.iconName;
                  WW.target.setAttribute(PR, zR || RW), bR && WW.target.setAttribute(IR, bR)
                } else(yR = WW.target) && yR.classList && yR.classList.contains && yR.classList.contains(KR.replacementClass) && CW(WW.target);
              var yR
            }))
          }
        })), XW && lw.observe(yR, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function fw(WW) {
      var RW, MW, wW = WW.getAttribute("data-prefix"),
        CW = WW.getAttribute("data-icon"),
        zR = void 0 !== WW.innerText ? WW.innerText.trim() : "",
        AW = hM(HR(WW));
      return AW.prefix || (AW.prefix = aw()), wW && CW && (AW.prefix = wW, AW.iconName = CW), AW.iconName && AW.prefix || (AW.prefix && zR.length > 0 && (AW.iconName = (RW = AW.prefix, MW = WW.innerText, (oM[RW] || {})[MW] || XM(AW.prefix, BM(WW.innerText)))), !AW.iconName && KR.autoFetchSvg && WW.firstChild && WW.firstChild.nodeType === Node.TEXT_NODE && (AW.iconName = WW.firstChild.data)), AW
    }

    function Qw(WW) {
      var RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        MW = fw(WW),
        wW = MW.iconName,
        CW = MW.prefix,
        zR = MW.rest,
        AW = function(WW) {
          return LR(WW.attributes).reduce((function(WW, RW) {
            return "class" !== WW.name && "style" !== WW.name && (WW[RW.name] = RW.value), WW
          }), {})
        }(WW),
        bR = uM("parseNodeAttributes", {}, WW),
        NW = RW.styleParser ? function(WW) {
          var RW = WW.getAttribute("style"),
            MW = [];
          return RW && (MW = RW.split(";").reduce((function(WW, RW) {
            var MW = RW.split(":"),
              wW = MW[0],
              CW = MW.slice(1);
            return wW && CW.length > 0 && (WW[wW] = CW.join(":").trim()), WW
          }), {})), MW
        }(WW) : [];
      return yR({
        iconName: wW,
        prefix: CW,
        transform: nR,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: zR,
          styles: NW,
          attributes: AW
        }
      }, bR)
    }
    var rC = CM.styles;

    function cC(WW) {
      var RW = "nest" === KR.autoReplaceSvg ? Qw(WW, {
        styleParser: !1
      }) : Qw(WW);
      return ~RW.extra.classes.indexOf(pR) ? nM("generateLayersText", WW, RW) : nM("generateSvgReplacementMutation", WW, RW)
    }

    function Xw(WW) {
      var RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!XW) return Promise.resolve();
      var MW = QW.documentElement.classList,
        wW = function(WW) {
          return MW.add("".concat(oR, "-").concat(WW))
        },
        CW = function(WW) {
          return MW.remove("".concat(oR, "-").concat(WW))
        },
        zR = KR.autoFetchSvg ? [].concat(eW(WR), eW(eR)) : aR.concat(Object.keys(rC));
      zR.includes("fa") || zR.push("fa");
      var AW = [".".concat(pR, ":not([").concat(YR, "])")].concat(zR.map((function(WW) {
        return ".".concat(WW, ":not([").concat(YR, "])")
      }))).join(", ");
      if (0 === AW.length) return Promise.resolve();
      var bR = [];
      try {
        bR = LR(WW.querySelectorAll(AW))
      } catch (BW) {}
      if (!(bR.length > 0)) return Promise.resolve();
      wW("pending"), CW("complete");
      var yR = Nw("onTree"),
        NW = bR.reduce((function(WW, RW) {
          try {
            var MW = cC(RW);
            MW && WW.push(MW)
          } catch (BW) {
            fR || "MissingIcon" === BW.name && console.error(BW)
          }
          return WW
        }), []);
      return new Promise((function(WW, MW) {
        Promise.all(NW).then((function(MW) {
          Jw(MW, (function() {
            wW("active"), wW("complete"), CW("pending"), "function" === typeof RW && RW(), yR(), WW()
          }))
        })).catch((function(WW) {
          yR(), MW(WW)
        }))
      }))
    }

    function jC(WW) {
      var RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      cC(WW).then((function(WW) {
        WW && Jw([WW], RW)
      }))
    }
    var kC = function(WW) {
        var RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          MW = RW.transform,
          wW = void 0 === MW ? nR : MW,
          CW = RW.symbol,
          zR = void 0 !== CW && CW,
          AW = RW.mask,
          bR = void 0 === AW ? null : AW,
          NW = RW.maskId,
          eW = void 0 === NW ? null : NW,
          BW = RW.classes,
          tR = void 0 === BW ? [] : BW,
          TW = RW.attributes,
          gR = void 0 === TW ? {} : TW,
          iR = RW.styles,
          YW = void 0 === iR ? {} : iR;
        if (WW) {
          var JW = WW.prefix,
            PW = WW.iconName,
            IW = WW.icon;
          return ZM(yR({
            type: "icon"
          }, WW), (function() {
            return OM("beforeDOMElementCreation", {
              iconDefinition: WW,
              params: RW
            }), SM({
              icons: {
                main: Mw(IW),
                mask: bR ? Mw(bR.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: JW,
              iconName: PW,
              transform: yR(yR({}, nR), wW),
              symbol: zR,
              maskId: eW,
              extra: {
                attributes: gR,
                styles: YW,
                classes: tR
              }
            })
          }))
        }
      },
      aC = {
        mixout: function() {
          return {
            icon: (WW = kC, function(RW) {
              var MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                wW = (RW || {}).icon ? RW : GM(RW || {}),
                CW = MW.mask;
              return CW && (CW = (CW || {}).icon ? CW : GM(CW || {})), WW(wW, yR(yR({}, MW), {}, {
                mask: CW
              }))
            })
          };
          var WW
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(WW) {
              return WW.treeCallback = Xw, WW.nodeCallback = jC, WW
            }
          }
        },
        provides: function(WW) {
          WW.i2svg = function(WW) {
            var RW = WW.node,
              MW = void 0 === RW ? QW : RW,
              wW = WW.callback;
            return Xw(MW, void 0 === wW ? function() {} : wW)
          }, WW.generateSvgReplacementMutation = function(WW, RW) {
            var MW = RW.iconName,
              wW = RW.prefix,
              CW = RW.transform,
              zR = RW.symbol,
              AW = RW.mask,
              bR = RW.maskId,
              yR = RW.extra;
            return new Promise((function(RW, eW) {
              Promise.all([Cw(MW, wW), AW.iconName ? Cw(AW.iconName, AW.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(AW) {
                var eW = NW(AW, 2),
                  BW = eW[0],
                  tR = eW[1];
                RW([WW, SM({
                  icons: {
                    main: BW,
                    mask: tR
                  },
                  prefix: wW,
                  iconName: MW,
                  transform: CW,
                  symbol: zR,
                  maskId: bR,
                  extra: yR,
                  watchable: !0
                })])
              })).catch(eW)
            }))
          }, WW.generateAbstractIcon = function(WW) {
            var RW, MW = WW.children,
              wW = WW.attributes,
              CW = WW.main,
              zR = WW.transform,
              AW = qM(WW.styles);
            return AW.length > 0 && (wW.style = AW), ZR(zR) && (RW = nM("generateAbstractTransformGrouping", {
              main: CW,
              transform: zR,
              containerWidth: CW.width,
              iconWidth: CW.width
            })), MW.push(RW || CW.icon), {
              children: MW,
              attributes: wW
            }
          }
        }
      },
      sw = {
        mixout: function() {
          return {
            layer: function(WW) {
              var RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                MW = RW.classes,
                wW = void 0 === MW ? [] : MW;
              return ZM({
                type: "layer"
              }, (function() {
                OM("beforeDOMElementCreation", {
                  assembler: WW,
                  params: RW
                });
                var MW = [];
                return WW((function(WW) {
                  Array.isArray(WW) ? WW.map((function(WW) {
                    MW = MW.concat(WW.abstract)
                  })) : MW = MW.concat(WW.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(KR.cssPrefix, "-layers")].concat(eW(wW)).join(" ")
                  },
                  children: MW
                }]
              }))
            }
          }
        }
      },
      dw = {
        mixout: function() {
          return {
            counter: function(WW) {
              var RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                MW = RW.title,
                wW = void 0 === MW ? null : MW,
                CW = RW.classes,
                zR = void 0 === CW ? [] : CW,
                AW = RW.attributes,
                bR = void 0 === AW ? {} : AW,
                NW = RW.styles,
                BW = void 0 === NW ? {} : NW;
              return ZM({
                type: "counter",
                content: WW
              }, (function() {
                return OM("beforeDOMElementCreation", {
                    content: WW,
                    params: RW
                  }),
                  function(WW) {
                    var RW = WW.content,
                      MW = WW.extra,
                      wW = yR(yR({}, MW.attributes), {}, {
                        class: MW.classes.join(" ")
                      }),
                      CW = qM(MW.styles);
                    CW.length > 0 && (wW.style = CW);
                    var zR = [];
                    return zR.push({
                      tag: "span",
                      attributes: wW,
                      children: [RW]
                    }), zR
                  }({
                    content: WW.toString(),
                    title: wW,
                    extra: {
                      attributes: bR,
                      styles: BW,
                      classes: ["".concat(KR.cssPrefix, "-layers-counter")].concat(eW(zR))
                    }
                  })
              }))
            }
          }
        }
      },
      pw = {
        mixout: function() {
          return {
            text: function(WW) {
              var RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                MW = RW.transform,
                wW = void 0 === MW ? nR : MW,
                CW = RW.classes,
                zR = void 0 === CW ? [] : CW,
                AW = RW.attributes,
                bR = void 0 === AW ? {} : AW,
                NW = RW.styles,
                BW = void 0 === NW ? {} : NW;
              return ZM({
                type: "text",
                content: WW
              }, (function() {
                return OM("beforeDOMElementCreation", {
                  content: WW,
                  params: RW
                }), Ww({
                  content: WW,
                  transform: yR(yR({}, nR), wW),
                  extra: {
                    attributes: bR,
                    styles: BW,
                    classes: ["".concat(KR.cssPrefix, "-layers-text")].concat(eW(zR))
                  }
                })
              }))
            }
          }
        },
        provides: function(WW) {
          WW.generateLayersText = function(WW, RW) {
            var MW = RW.transform,
              wW = RW.extra,
              CW = null,
              zR = null;
            if (jR) {
              var AW = parseInt(getComputedStyle(WW).fontSize, 10),
                bR = WW.getBoundingClientRect();
              CW = bR.width / AW, zR = bR.height / AW
            }
            return Promise.resolve([WW, Ww({
              content: WW.innerHTML,
              width: CW,
              height: zR,
              transform: MW,
              extra: wW,
              watchable: !0
            })])
          }
        }
      },
      hw = new RegExp('"', "ug"),
      Uw = [1105920, 1112319],
      Ew = yR(yR(yR(yR({}, {
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
      Vw = Object.keys(Ew).reduce((function(WW, RW) {
        return WW[RW.toLowerCase()] = Ew[RW], WW
      }), {}),
      mC = Object.keys(Vw).reduce((function(WW, RW) {
        var MW = Vw[RW];
        return WW[RW] = MW[900] || eW(Object.entries(MW))[0][1], WW
      }), {});

    function xC(WW, RW) {
      var MW = "".concat("data-fa-pseudo-element-pending").concat(RW.replace(":", "-"));
      return new Promise((function(wW, CW) {
        if (null !== WW.getAttribute(MW)) return wW();
        var zR = LR(WW.children).filter((function(WW) {
            return WW.getAttribute(JR) === RW
          }))[0],
          AW = fW.getComputedStyle(WW, RW),
          bR = AW.getPropertyValue("font-family"),
          NW = bR.match(hR),
          BW = AW.getPropertyValue("font-weight"),
          tR = AW.getPropertyValue("content");
        if (zR && !NW) return WW.removeChild(zR), wW();
        if (NW && "none" !== tR && "" !== tR) {
          var TW = AW.getPropertyValue("content"),
            gR = function(WW, RW) {
              var MW = WW.replace(/^['"]|['"]$/g, "").toLowerCase(),
                wW = parseInt(RW),
                CW = isNaN(wW) ? "normal" : wW;
              return (Vw[MW] || {})[CW] || mC[MW]
            }(bR, BW),
            iR = function(WW) {
              return BM(eW(WW.replace(hw, ""))[0] || "")
            }(TW),
            YW = NW[0].startsWith("FontAwesome"),
            JW = function(WW) {
              var RW = WW.getPropertyValue("font-feature-settings").includes("ss01"),
                MW = WW.getPropertyValue("content").replace(hw, ""),
                wW = MW.codePointAt(0),
                CW = wW >= Uw[0] && wW <= Uw[1],
                zR = 2 === MW.length && MW[0] === MW[1];
              return CW || zR || RW
            }(AW),
            PW = XM(gR, iR),
            IW = PW;
          if (YW) {
            var oW = function(WW) {
              var RW = FM[WW],
                MW = XM("fas", WW);
              return RW || (MW ? {
                prefix: "fas",
                iconName: MW
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(iR);
            oW.iconName && oW.prefix && (PW = oW.iconName, gR = oW.prefix)
          }
          if (!PW || JW || zR && zR.getAttribute(PR) === gR && zR.getAttribute(IR) === IW) wW();
          else {
            WW.setAttribute(MW, IW), zR && WW.removeChild(zR);
            var lW = {
                iconName: null,
                prefix: null,
                transform: nR,
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
              FW = lW.extra;
            FW.attributes[JR] = RW, Cw(PW, gR).then((function(CW) {
              var zR = SM(yR(yR({}, lW), {}, {
                  icons: {
                    main: CW,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: gR,
                  iconName: IW,
                  extra: FW,
                  watchable: !0
                })),
                AW = QW.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === RW ? WW.insertBefore(AW, WW.firstChild) : WW.appendChild(AW), AW.outerHTML = zR.map((function(WW) {
                return yw(WW)
              })).join("\n"), WW.removeAttribute(MW), wW()
            })).catch(CW)
          }
        } else wW()
      }))
    }

    function vC(WW) {
      return Promise.all([xC(WW, "::before"), xC(WW, "::after")])
    }

    function Kw(WW) {
      return WW.parentNode !== document.head && !~lR.indexOf(WW.tagName.toUpperCase()) && !WW.getAttribute(JR) && (!WW.parentNode || "svg" !== WW.parentNode.tagName)
    }
    var uw = function(WW) {
        return !!WW && FR.some((function(RW) {
          return WW.includes(RW)
        }))
      },
      Ow = function(WW) {
        if (!WW) return [];
        var RW = new Set,
          MW = WW.split(/,(?![^()]*\))/).map((function(WW) {
            return WW.trim()
          }));
        MW = MW.flatMap((function(WW) {
          return WW.includes("(") ? WW : WW.split(",").map((function(WW) {
            return WW.trim()
          }))
        }));
        var wW, CW = zR(MW);
        try {
          for (CW.s(); !(wW = CW.n()).done;) {
            var AW = wW.value;
            if (uw(AW)) {
              var bR = FR.reduce((function(WW, RW) {
                return WW.replace(RW, "")
              }), AW);
              "" !== bR && "*" !== bR && RW.add(bR)
            }
          }
        } catch (yR) {
          CW.e(yR)
        } finally {
          CW.f()
        }
        return RW
      };

    function nw(WW) {
      if (XW) {
        var RW;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) RW = WW;
        else if (KR.searchPseudoElementsFullScan) RW = WW.querySelectorAll("*");
        else {
          var MW, wW = new Set,
            CW = zR(document.styleSheets);
          try {
            for (CW.s(); !(MW = CW.n()).done;) {
              var AW = MW.value;
              try {
                var bR, yR = zR(AW.cssRules);
                try {
                  for (yR.s(); !(bR = yR.n()).done;) {
                    var NW, eW = bR.value,
                      BW = zR(Ow(eW.selectorText));
                    try {
                      for (BW.s(); !(NW = BW.n()).done;) {
                        var tR = NW.value;
                        wW.add(tR)
                      }
                    } catch (gR) {
                      BW.e(gR)
                    } finally {
                      BW.f()
                    }
                  }
                } catch (gR) {
                  yR.e(gR)
                } finally {
                  yR.f()
                }
              } catch (iR) {
                KR.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(AW.href, " (").concat(iR.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (gR) {
            CW.e(gR)
          } finally {
            CW.f()
          }
          if (!wW.size) return;
          var TW = Array.from(wW).join(", ");
          try {
            RW = WW.querySelectorAll(TW)
          } catch (YW) {}
        }
        return new Promise((function(WW, MW) {
          var wW = LR(RW).filter(Kw).map(vC),
            CW = Nw("searchPseudoElements");
          Iw(), Promise.all(wW).then((function() {
            CW(), ow(), WW()
          })).catch((function() {
            CW(), ow(), MW()
          }))
        }))
      }
    }
    var Gw = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(WW) {
              return WW.pseudoElementsCallback = nw, WW
            }
          }
        },
        provides: function(WW) {
          WW.pseudoElements2svg = function(WW) {
            var RW = WW.node,
              MW = void 0 === RW ? QW : RW;
            KR.searchPseudoElements && nw(MW)
          }
        }
      },
      Lw = !1,
      Hw = function(WW) {
        return WW.toLowerCase().split(" ").reduce((function(WW, RW) {
          var MW = RW.toLowerCase().split("-"),
            wW = MW[0],
            CW = MW.slice(1).join("-");
          if (wW && "h" === CW) return WW.flipX = !0, WW;
          if (wW && "v" === CW) return WW.flipY = !0, WW;
          if (CW = parseFloat(CW), isNaN(CW)) return WW;
          switch (wW) {
            case "grow":
              WW.size = WW.size + CW;
              break;
            case "shrink":
              WW.size = WW.size - CW;
              break;
            case "left":
              WW.x = WW.x - CW;
              break;
            case "right":
              WW.x = WW.x + CW;
              break;
            case "up":
              WW.y = WW.y - CW;
              break;
            case "down":
              WW.y = WW.y + CW;
              break;
            case "rotate":
              WW.rotate = WW.rotate + CW
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
      Dw = {
        mixout: function() {
          return {
            parse: {
              transform: function(WW) {
                return Hw(WW)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(WW, RW) {
              var MW = RW.getAttribute("data-fa-transform");
              return MW && (WW.transform = Hw(MW)), WW
            }
          }
        },
        provides: function(WW) {
          WW.generateAbstractTransformGrouping = function(WW) {
            var RW = WW.main,
              MW = WW.transform,
              wW = WW.containerWidth,
              CW = WW.iconWidth,
              zR = {
                transform: "translate(".concat(wW / 2, " 256)")
              },
              AW = "translate(".concat(32 * MW.x, ", ").concat(32 * MW.y, ") "),
              bR = "scale(".concat(MW.size / 16 * (MW.flipX ? -1 : 1), ", ").concat(MW.size / 16 * (MW.flipY ? -1 : 1), ") "),
              NW = "rotate(".concat(MW.rotate, " 0 0)"),
              eW = {
                outer: zR,
                inner: {
                  transform: "".concat(AW, " ").concat(bR, " ").concat(NW)
                },
                path: {
                  transform: "translate(".concat(CW / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: yR({}, eW.outer),
              children: [{
                tag: "g",
                attributes: yR({}, eW.inner),
                children: [{
                  tag: RW.icon.tag,
                  children: RW.icon.children,
                  attributes: yR(yR({}, RW.icon.attributes), eW.path)
                }]
              }]
            }
          }
        }
      },
      qC = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function Zw(WW) {
      var RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return WW.attributes && (WW.attributes.fill || RW) && (WW.attributes.fill = "black"), WW
    }
    var Sw = {
        hooks: function() {
          return {
            parseNodeAttributes: function(WW, RW) {
              var MW = RW.getAttribute("data-fa-mask"),
                wW = MW ? hM(MW.split(" ").map((function(WW) {
                  return WW.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return wW.prefix || (wW.prefix = aw()), WW.mask = wW, WW.maskId = RW.getAttribute("data-fa-mask-id"), WW
            }
          }
        },
        provides: function(WW) {
          WW.generateAbstractMask = function(WW) {
            var RW, MW = WW.children,
              wW = WW.attributes,
              CW = WW.main,
              zR = WW.mask,
              AW = WW.maskId,
              bR = WW.transform,
              NW = CW.width,
              eW = CW.icon,
              BW = zR.width,
              tR = zR.icon,
              TW = function(WW) {
                var RW = WW.transform,
                  MW = WW.containerWidth,
                  wW = WW.iconWidth,
                  CW = {
                    transform: "translate(".concat(MW / 2, " 256)")
                  },
                  zR = "translate(".concat(32 * RW.x, ", ").concat(32 * RW.y, ") "),
                  AW = "scale(".concat(RW.size / 16 * (RW.flipX ? -1 : 1), ", ").concat(RW.size / 16 * (RW.flipY ? -1 : 1), ") "),
                  bR = "rotate(".concat(RW.rotate, " 0 0)");
                return {
                  outer: CW,
                  inner: {
                    transform: "".concat(zR, " ").concat(AW, " ").concat(bR)
                  },
                  path: {
                    transform: "translate(".concat(wW / 2 * -1, " -256)")
                  }
                }
              }({
                transform: bR,
                containerWidth: BW,
                iconWidth: NW
              }),
              gR = {
                tag: "rect",
                attributes: yR(yR({}, qC), {}, {
                  fill: "white"
                })
              },
              iR = eW.children ? {
                children: eW.children.map(Zw)
              } : {},
              YW = {
                tag: "g",
                attributes: yR({}, TW.inner),
                children: [Zw(yR({
                  tag: eW.tag,
                  attributes: yR(yR({}, eW.attributes), TW.path)
                }, iR))]
              },
              JW = {
                tag: "g",
                attributes: yR({}, TW.outer),
                children: [YW]
              },
              PW = "mask-".concat(AW || GR()),
              IW = "clip-".concat(AW || GR()),
              oW = {
                tag: "mask",
                attributes: yR(yR({}, qC), {}, {
                  id: PW,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [gR, JW]
              },
              lW = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: IW
                  },
                  children: (RW = tR, "g" === RW.tag ? RW.children : [RW])
                }, oW]
              };
            return MW.push(lW, {
              tag: "rect",
              attributes: yR({
                fill: "currentColor",
                "clip-path": "url(#".concat(IW, ")"),
                mask: "url(#".concat(PW, ")")
              }, qC)
            }), {
              children: MW,
              attributes: wW
            }
          }
        }
      },
      WC = {
        provides: function(WW) {
          var RW = !1;
          fW.matchMedia && (RW = fW.matchMedia("(prefers-reduced-motion: reduce)").matches), WW.missingIconAbstract = function() {
            var WW = [],
              MW = {
                fill: "currentColor"
              },
              wW = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            WW.push({
              tag: "path",
              attributes: yR(yR({}, MW), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var CW = yR(yR({}, wW), {}, {
                attributeName: "opacity"
              }),
              zR = {
                tag: "circle",
                attributes: yR(yR({}, MW), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return RW || zR.children.push({
              tag: "animate",
              attributes: yR(yR({}, wW), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: yR(yR({}, CW), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), WW.push(zR), WW.push({
              tag: "path",
              attributes: yR(yR({}, MW), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: RW ? [] : [{
                tag: "animate",
                attributes: yR(yR({}, CW), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), RW || WW.push({
              tag: "path",
              attributes: yR(yR({}, MW), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: yR(yR({}, CW), {}, {
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
    ! function(WW, RW) {
      var MW = RW.mixoutsTo;
      mw = WW, xw = {}, Object.keys(vw).forEach((function(WW) {
        -1 === KM.indexOf(WW) && delete vw[WW]
      })), mw.forEach((function(WW) {
        var RW = WW.mixout ? WW.mixout() : {};
        if (Object.keys(RW).forEach((function(WW) {
            "function" === typeof RW[WW] && (MW[WW] = RW[WW]), "object" === tR(RW[WW]) && Object.keys(RW[WW]).forEach((function(wW) {
              MW[WW] || (MW[WW] = {}), MW[WW][wW] = RW[WW][wW]
            }))
          })), WW.hooks) {
          var wW = WW.hooks();
          Object.keys(wW).forEach((function(WW) {
            xw[WW] || (xw[WW] = []), xw[WW].push(wW[WW])
          }))
        }
        WW.provides && WW.provides(vw)
      }))
    }([MM, aC, sw, dw, pw, Gw, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              Iw(), Lw = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            Fw(uM("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            lw && lw.disconnect()
          },
          watch: function(WW) {
            var RW = WW.observeMutationsRoot;
            Lw ? ow() : Fw(uM("mutationObserverCallbacks", {
              observeMutationsRoot: RW
            }))
          }
        }
      }
    }, Dw, Sw, WC, {
      hooks: function() {
        return {
          parseNodeAttributes: function(WW, RW) {
            var MW = RW.getAttribute("data-fa-symbol"),
              wW = null !== MW && ("" === MW || MW);
            return WW.symbol = wW, WW
          }
        }
      }
    }], {
      mixoutsTo: DM
    });
    var RC = DM.noAuto,
      MC = DM.config,
      wC = DM.library,
      CC = DM.dom,
      zz = DM.parse,
      AC = DM.findIconDefinition,
      bz = DM.toHtml,
      yz = DM.icon,
      NC = DM.layer,
      eC = DM.text,
      BC = DM.counter
  },
  5692: WW => {
    WW.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);