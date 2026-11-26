/*! For license information please see cwj32u.fa-renderer.ff4c28e6.chunk.js.LICENSE.txt */
export const id = 38;
export const ids = [38];
export const modules = {
  7303: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      FontAwesomeIcon: () => OH
    });
    var AH = LH(7298),
      rH = LH(5450),
      SH = LH.n(rH),
      hH = LH(45);

    function tH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function zH(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH, BH) {
          if ("object" != typeof HH || !HH) return HH;
          var LH = HH[Symbol.toPrimitive];
          if (void 0 !== LH) {
            var AH = LH.call(HH, BH || "default");
            if ("object" != typeof AH) return AH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === BH ? String : Number)(HH)
        }(HH, "string");
        return "symbol" == typeof BH ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function CH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function EH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? CH(Object(LH), !0).forEach((function(BH) {
          zH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : CH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function XH(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        var LH = null == HH ? null : "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null != LH) {
          var AH, rH, SH, hH, tH = [],
            zH = !0,
            CH = !1;
          try {
            if (SH = (LH = LH.call(HH)).next, 0 === BH) {
              if (Object(LH) !== LH) return;
              zH = !1
            } else
              for (; !(zH = (AH = SH.call(LH)).done) && (tH.push(AH.value), tH.length !== BH); zH = !0);
          } catch (HH) {
            CH = !0, rH = HH
          } finally {
            try {
              if (!zH && null != LH.return && (hH = LH.return(), Object(hH) !== hH)) return
            } finally {
              if (CH) throw rH
            }
          }
          return tH
        }
      }(HH, BH) || uH(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function GH(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return tH(HH)
      }(HH) || function(HH) {
        if ("undefined" != typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
      }(HH) || uH(HH) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YH(HH) {
      return YH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, YH(HH)
    }

    function uH(HH, BH) {
      if (HH) {
        if ("string" == typeof HH) return tH(HH, BH);
        var LH = {}.toString.call(HH).slice(8, -1);
        return "Object" === LH && HH.constructor && (LH = HH.constructor.name), "Map" === LH || "Set" === LH ? Array.from(HH) : "Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH) ? tH(HH, BH) : void 0
      }
    }
    var QH;
    try {
      var WH = LH(7310);
      QH = WH.version
    } catch (kH) {
      QH = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function MH(HH) {
      var BH = HH.beat,
        LH = HH.fade,
        AH = HH.beatFade,
        rH = HH.bounce,
        SH = HH.shake,
        hH = HH.flash,
        tH = HH.spin,
        CH = HH.spinPulse,
        EH = HH.spinReverse,
        GH = HH.pulse,
        YH = HH.fixedWidth,
        uH = HH.inverse,
        WH = HH.border,
        MH = HH.listItem,
        xH = HH.flip,
        vH = HH.size,
        PH = HH.rotation,
        TH = HH.pull,
        UH = HH.swapOpacity,
        VH = HH.rotateBy,
        OH = HH.widthAuto,
        bH = function(HH, BH) {
          for (var LH = XH(HH.split("-"), 2), AH = LH[0], rH = LH[1], SH = XH(BH.split("-"), 2), hH = SH[0], tH = SH[1], zH = AH.split("."), CH = hH.split("."), EH = 0; EH < Math.max(zH.length, CH.length); EH++) {
            var GH = zH[EH] || "0",
              YH = CH[EH] || "0",
              uH = parseInt(GH, 10),
              QH = parseInt(YH, 10);
            if (uH !== QH) return uH > QH
          }
          for (var WH = 0; WH < Math.max(zH.length, CH.length); WH++) {
            var MH = zH[WH] || "0",
              xH = CH[WH] || "0";
            if (MH !== xH && MH.length !== xH.length) return MH.length < xH.length
          }
          return !(rH && !tH)
        }(QH, "7.0.0"),
        kH = zH(zH(zH(zH(zH(zH({
          "fa-beat": BH,
          "fa-fade": LH,
          "fa-beat-fade": AH,
          "fa-bounce": rH,
          "fa-shake": SH,
          "fa-flash": hH,
          "fa-spin": tH,
          "fa-spin-reverse": EH,
          "fa-spin-pulse": CH,
          "fa-pulse": GH,
          "fa-fw": YH,
          "fa-inverse": uH,
          "fa-border": WH,
          "fa-li": MH,
          "fa-flip": !0 === xH,
          "fa-flip-horizontal": "horizontal" === xH || "both" === xH,
          "fa-flip-vertical": "vertical" === xH || "both" === xH
        }, "fa-".concat(vH), "undefined" !== typeof vH && null !== vH), "fa-rotate-".concat(PH), "undefined" !== typeof PH && null !== PH && 0 !== PH), "fa-pull-".concat(TH), "undefined" !== typeof TH && null !== TH), "fa-swap-opacity", UH), "fa-rotate-by", bH && VH), "fa-width-auto", bH && OH);
      return Object.keys(kH).map((function(HH) {
        return kH[HH] ? HH : null
      })).filter((function(HH) {
        return HH
      }))
    }

    function xH(HH) {
      return BH = HH, (BH -= 0) === BH ? HH : (HH = HH.replace(/[\-_\s]+(.)?/g, (function(HH, BH) {
        return BH ? BH.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + HH.substr(1);
      var BH
    }
    var vH = ["style"];
    var PH = !1;
    try {
      PH = !0
    } catch (kH) {}

    function TH(HH) {
      return HH && "object" === YH(HH) && HH.prefix && HH.iconName && HH.icon ? HH : AH.parse.icon ? AH.parse.icon(HH) : null === HH ? null : HH && "object" === YH(HH) && HH.prefix && HH.iconName ? HH : Array.isArray(HH) && 2 === HH.length ? {
        prefix: HH[0],
        iconName: HH[1]
      } : "string" === typeof HH ? {
        prefix: "fas",
        iconName: HH
      } : void 0
    }

    function UH(HH, BH) {
      return Array.isArray(BH) && BH.length > 0 || !Array.isArray(BH) && BH ? zH({}, HH, BH) : {}
    }
    var VH = {
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
      OH = hH.forwardRef((function(HH, BH) {
        var LH = EH(EH({}, VH), HH),
          rH = LH.icon,
          SH = LH.mask,
          hH = LH.symbol,
          tH = LH.className,
          zH = LH.title,
          CH = LH.titleId,
          XH = LH.maskId,
          YH = TH(rH),
          uH = UH("classes", [].concat(GH(MH(LH)), GH((tH || "").split(" ")))),
          QH = UH("transform", "string" === typeof LH.transform ? AH.parse.transform(LH.transform) : LH.transform),
          WH = UH("mask", TH(SH)),
          xH = (0, AH.icon)(YH, EH(EH(EH(EH({}, uH), QH), WH), {}, {
            symbol: hH,
            title: zH,
            titleId: CH,
            maskId: XH
          }));
        if (!xH) return function() {
          var HH;
          !PH && console && "function" === typeof console.error && (HH = console).error.apply(HH, arguments)
        }("Could not find icon", YH), null;
        var vH = xH.abstract,
          OH = {
            ref: BH
          };
        return Object.keys(LH).forEach((function(HH) {
          VH.hasOwnProperty(HH) || (OH[HH] = LH[HH])
        })), bH(vH[0], OH)
      }));
    OH.displayName = "FontAwesomeIcon", OH.propTypes = {
      beat: SH().bool,
      border: SH().bool,
      beatFade: SH().bool,
      bounce: SH().bool,
      className: SH().string,
      fade: SH().bool,
      flash: SH().bool,
      mask: SH().oneOfType([SH().object, SH().array, SH().string]),
      maskId: SH().string,
      fixedWidth: SH().bool,
      inverse: SH().bool,
      flip: SH().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: SH().oneOfType([SH().object, SH().array, SH().string]),
      listItem: SH().bool,
      pull: SH().oneOf(["right", "left"]),
      pulse: SH().bool,
      rotation: SH().oneOf([0, 90, 180, 270]),
      rotateBy: SH().bool,
      shake: SH().bool,
      size: SH().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: SH().bool,
      spinPulse: SH().bool,
      spinReverse: SH().bool,
      symbol: SH().oneOfType([SH().bool, SH().string]),
      title: SH().string,
      titleId: SH().string,
      transform: SH().oneOfType([SH().string, SH().object]),
      swapOpacity: SH().bool,
      widthAuto: SH().bool
    };
    var bH = function HH(BH, LH) {
      var AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof LH) return LH;
      var rH = (LH.children || []).map((function(LH) {
          return HH(BH, LH)
        })),
        SH = Object.keys(LH.attributes || {}).reduce((function(HH, BH) {
          var AH = LH.attributes[BH];
          switch (BH) {
            case "class":
              HH.attrs.className = AH, delete LH.attributes.class;
              break;
            case "style":
              HH.attrs.style = AH.split(";").map((function(HH) {
                return HH.trim()
              })).filter((function(HH) {
                return HH
              })).reduce((function(HH, BH) {
                var LH, AH = BH.indexOf(":"),
                  rH = xH(BH.slice(0, AH)),
                  SH = BH.slice(AH + 1).trim();
                return rH.startsWith("webkit") ? HH[(LH = rH, LH.charAt(0).toUpperCase() + LH.slice(1))] = SH : HH[rH] = SH, HH
              }), {});
              break;
            default:
              0 === BH.indexOf("aria-") || 0 === BH.indexOf("data-") ? HH.attrs[BH.toLowerCase()] = AH : HH.attrs[xH(BH)] = AH
          }
          return HH
        }), {
          attrs: {}
        }),
        hH = AH.style,
        tH = void 0 === hH ? {} : hH,
        zH = function(HH, BH) {
          if (null == HH) return {};
          var LH, AH, rH = function(HH, BH) {
            if (null == HH) return {};
            var LH = {};
            for (var AH in HH)
              if ({}.hasOwnProperty.call(HH, AH)) {
                if (-1 !== BH.indexOf(AH)) continue;
                LH[AH] = HH[AH]
              } return LH
          }(HH, BH);
          if (Object.getOwnPropertySymbols) {
            var SH = Object.getOwnPropertySymbols(HH);
            for (AH = 0; AH < SH.length; AH++) LH = SH[AH], -1 === BH.indexOf(LH) && {}.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
          }
          return rH
        }(AH, vH);
      return SH.attrs.style = EH(EH({}, SH.attrs.style), tH), BH.apply(void 0, [LH.tag, EH(EH({}, SH.attrs), zH)].concat(GH(rH)))
    }.bind(null, hH.createElement)
  },
  5454: (HH, BH, LH) => {
    var AH = LH(5462);

    function rH() {}

    function SH() {}
    SH.resetWarningCache = rH, HH.exports = function() {
      function HH(HH, BH, LH, rH, SH, hH) {
        if (hH !== AH) {
          var tH = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw tH.name = "Invariant Violation", tH
        }
      }

      function BH() {
        return HH
      }
      HH.isRequired = HH;
      var LH = {
        array: HH,
        bigint: HH,
        bool: HH,
        func: HH,
        number: HH,
        object: HH,
        string: HH,
        symbol: HH,
        any: HH,
        arrayOf: BH,
        element: HH,
        elementType: HH,
        instanceOf: BH,
        node: HH,
        objectOf: BH,
        oneOf: BH,
        oneOfType: BH,
        shape: BH,
        exact: BH,
        checkPropTypes: SH,
        resetWarningCache: rH
      };
      return LH.PropTypes = LH, LH
    }
  },
  5450: (HH, BH, LH) => {
    HH.exports = LH(5454)()
  },
  5462: HH => {
    HH.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7298: (HH, BH, LH) => {
    function AH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function rH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, XH(AH.key), AH)
      }
    }

    function SH(HH, BH) {
      var LH = "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
      if (!LH) {
        if (Array.isArray(HH) || (LH = YH(HH)) || BH && HH && "number" == typeof HH.length) {
          LH && (HH = LH);
          var AH = 0,
            rH = function() {};
          return {
            s: rH,
            n: function() {
              return AH >= HH.length ? {
                done: !0
              } : {
                done: !1,
                value: HH[AH++]
              }
            },
            e: function(HH) {
              throw HH
            },
            f: rH
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var SH, hH = !0,
        tH = !1;
      return {
        s: function() {
          LH = LH.call(HH)
        },
        n: function() {
          var HH = LH.next();
          return hH = HH.done, HH
        },
        e: function(HH) {
          tH = !0, SH = HH
        },
        f: function() {
          try {
            hH || null == LH.return || LH.return()
          } finally {
            if (tH) throw SH
          }
        }
      }
    }

    function hH(HH, BH, LH) {
      return (BH = XH(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function tH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function zH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? tH(Object(LH), !0).forEach((function(BH) {
          hH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : tH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function CH(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        var LH = null == HH ? null : "undefined" != typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null != LH) {
          var AH, rH, SH, hH, tH = [],
            zH = !0,
            CH = !1;
          try {
            if (SH = (LH = LH.call(HH)).next, 0 === BH) {
              if (Object(LH) !== LH) return;
              zH = !1
            } else
              for (; !(zH = (AH = SH.call(LH)).done) && (tH.push(AH.value), tH.length !== BH); zH = !0);
          } catch (HH) {
            CH = !0, rH = HH
          } finally {
            try {
              if (!zH && null != LH.return && (hH = LH.return(), Object(hH) !== hH)) return
            } finally {
              if (CH) throw rH
            }
          }
          return tH
        }
      }(HH, BH) || YH(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function EH(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return AH(HH)
      }(HH) || function(HH) {
        if ("undefined" != typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
      }(HH) || YH(HH) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function XH(HH) {
      var BH = function(HH, BH) {
        if ("object" != typeof HH || !HH) return HH;
        var LH = HH[Symbol.toPrimitive];
        if (void 0 !== LH) {
          var AH = LH.call(HH, BH || "default");
          if ("object" != typeof AH) return AH;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === BH ? String : Number)(HH)
      }(HH, "string");
      return "symbol" == typeof BH ? BH : BH + ""
    }

    function GH(HH) {
      return GH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, GH(HH)
    }

    function YH(HH, BH) {
      if (HH) {
        if ("string" == typeof HH) return AH(HH, BH);
        var LH = {}.toString.call(HH).slice(8, -1);
        return "Object" === LH && HH.constructor && (LH = HH.constructor.name), "Map" === LH || "Set" === LH ? Array.from(HH) : "Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH) ? AH(HH, BH) : void 0
      }
    }
    LH.r(BH), LH.d(BH, {
      api: () => JL,
      config: () => Lr,
      counter: () => Xr,
      dom: () => rr,
      findIconDefinition: () => hr,
      icon: () => zr,
      layer: () => Cr,
      library: () => Ar,
      noAuto: () => Br,
      parse: () => Sr,
      text: () => Er,
      toHtml: () => tr
    });
    var uH = function() {},
      QH = {},
      WH = {},
      MH = null,
      xH = {
        mark: uH,
        measure: uH
      };
    try {
      "undefined" !== typeof window && (QH = window), "undefined" !== typeof document && (WH = document), "undefined" !== typeof MutationObserver && (MH = MutationObserver), "undefined" !== typeof performance && (xH = performance)
    } catch (DH) {}
    var vH, PH, TH = (QH.navigator || {}).userAgent,
      UH = void 0 === TH ? "" : TH,
      VH = QH,
      OH = WH,
      bH = MH,
      kH = xH,
      mH = (VH.document, !!OH.documentElement && !!OH.head && "function" === typeof OH.addEventListener && "function" === typeof OH.createElement),
      oH = ~UH.indexOf("MSIE") || ~UH.indexOf("Trident/"),
      IH = {
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
      fH = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      lH = "classic",
      KH = "duotone",
      cH = "sharp",
      eH = "sharp-duotone",
      qH = "chisel",
      gH = "etch",
      NH = "graphite",
      RH = "jelly",
      jH = "jelly-duo",
      nH = "jelly-fill",
      FH = "notdog",
      DH = "notdog-duo",
      wH = "slab",
      ZH = "slab-press",
      dH = "thumbprint",
      aH = "utility",
      sH = "utility-duo",
      JH = "utility-fill",
      iH = "whiteboard",
      pH = [lH, KH, cH, eH, qH, gH, NH, RH, jH, nH, FH, DH, wH, ZH, dH, aH, sH, JH, iH],
      yH = (hH(hH(hH(hH(hH(hH(hH(hH(hH(hH(vH = {}, lH, "Classic"), KH, "Duotone"), cH, "Sharp"), eH, "Sharp Duotone"), qH, "Chisel"), gH, "Etch"), NH, "Graphite"), RH, "Jelly"), jH, "Jelly Duo"), nH, "Jelly Fill"), hH(hH(hH(hH(hH(hH(hH(hH(hH(vH, FH, "Notdog"), DH, "Notdog Duo"), wH, "Slab"), ZH, "Slab Press"), dH, "Thumbprint"), aH, "Utility"), sH, "Utility Duo"), JH, "Utility Fill"), iH, "Whiteboard"), new Map([
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
      HB = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      BB = {
        fak: "kit",
        "fa-kit": "kit"
      },
      LB = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      AB = (hH(hH({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      rB = {
        "kit-duotone": "fakd"
      },
      SB = "duotone-group",
      hB = "swap-opacity",
      tB = "primary",
      zB = "secondary",
      CB = (hH(hH(hH(hH(hH(hH(hH(hH(hH(hH(PH = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), hH(hH(hH(hH(hH(hH(hH(hH(hH(PH, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), hH(hH({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      EB = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      XB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      GB = XB.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      YB = [].concat(EH(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", SB, hB, tB, zB]).concat(XB.map((function(HH) {
        return "".concat(HH, "x")
      }))).concat(GB.map((function(HH) {
        return "w-".concat(HH)
      }))),
      uB = "___FONT_AWESOME___",
      QB = "svg-inline--fa",
      WB = "data-fa-i2svg",
      MB = "data-fa-pseudo-element",
      xB = "data-prefix",
      vB = "data-icon",
      PB = "fontawesome-i2svg",
      TB = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      UB = ["::before", "::after", ":before", ":after"],
      VB = function() {
        try {
          return !0
        } catch (HH) {
          return !1
        }
      }();

    function OB(HH) {
      return new Proxy(HH, {
        get: function(HH, BH) {
          return BH in HH ? HH[BH] : HH[lH]
        }
      })
    }
    var bB = zH({}, IH);
    bB[lH] = zH(zH(zH(zH({}, {
      "fa-duotone": "duotone"
    }), IH[lH]), BB), LB);
    var kB = OB(bB),
      mB = zH({}, {
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
    mB[lH] = zH(zH(zH(zH({}, {
      duotone: "fad"
    }), mB[lH]), AB), rB);
    var oB = OB(mB),
      IB = zH({}, CB);
    IB[lH] = zH(zH({}, IB[lH]), {
      fak: "fa-kit"
    });
    var fB = OB(IB),
      lB = zH({}, {
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
    lB[lH] = zH(zH({}, lB[lH]), {
      "fa-kit": "fak"
    });
    OB(lB);
    var KB = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      cB = "fa-layers-text",
      eB = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      qB = (OB(zH({}, {
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
      gB = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      NB = [].concat(EH(["kit"]), EH(YB)),
      RB = VH.FontAwesomeConfig || {};
    if (OH && "function" === typeof OH.querySelector) {
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
      ].forEach((function(HH) {
        var BH = CH(HH, 2),
          LH = BH[0],
          AH = BH[1],
          rH = function(HH) {
            return "" === HH || "false" !== HH && ("true" === HH || HH)
          }(function(HH) {
            var BH = OH.querySelector("script[" + HH + "]");
            if (BH) return BH.getAttribute(HH)
          }(LH));
        void 0 !== rH && null !== rH && (RB[AH] = rH)
      }))
    }
    var jB = {
      styleDefault: "solid",
      familyDefault: lH,
      cssPrefix: "fa",
      replacementClass: QB,
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
    RB.familyPrefix && (RB.cssPrefix = RB.familyPrefix);
    var nB = zH(zH({}, jB), RB);
    nB.autoReplaceSvg || (nB.observeMutations = !1);
    var FB = {};
    Object.keys(jB).forEach((function(HH) {
      Object.defineProperty(FB, HH, {
        enumerable: !0,
        set: function(BH) {
          nB[HH] = BH, DB.forEach((function(HH) {
            return HH(FB)
          }))
        },
        get: function() {
          return nB[HH]
        }
      })
    })), Object.defineProperty(FB, "familyPrefix", {
      enumerable: !0,
      set: function(HH) {
        nB.cssPrefix = HH, DB.forEach((function(HH) {
          return HH(FB)
        }))
      },
      get: function() {
        return nB.cssPrefix
      }
    }), VH.FontAwesomeConfig = FB;
    var DB = [];
    var wB = 16,
      ZB = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function dB() {
      for (var HH = 12, BH = ""; HH-- > 0;) BH += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return BH
    }

    function aB(HH) {
      for (var BH = [], LH = (HH || []).length >>> 0; LH--;) BH[LH] = HH[LH];
      return BH
    }

    function sB(HH) {
      return HH.classList ? aB(HH.classList) : (HH.getAttribute("class") || "").split(" ").filter((function(HH) {
        return HH
      }))
    }

    function JB(HH) {
      return "".concat(HH).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function iB(HH) {
      return Object.keys(HH || {}).reduce((function(BH, LH) {
        return BH + "".concat(LH, ": ").concat(HH[LH].trim(), ";")
      }), "")
    }

    function pB(HH) {
      return HH.size !== ZB.size || HH.x !== ZB.x || HH.y !== ZB.y || HH.rotate !== ZB.rotate || HH.flipX || HH.flipY
    }

    function yB() {
      var HH = "fa",
        BH = QB,
        LH = FB.cssPrefix,
        AH = FB.replacementClass,
        rH = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (LH !== HH || AH !== BH) {
        var SH = new RegExp("\\.".concat(HH, "\\-"), "g"),
          hH = new RegExp("\\--".concat(HH, "\\-"), "g"),
          tH = new RegExp("\\.".concat(BH), "g");
        rH = rH.replace(SH, ".".concat(LH, "-")).replace(hH, "--".concat(LH, "-")).replace(tH, ".".concat(AH))
      }
      return rH
    }
    var HL = !1;

    function BL() {
      FB.autoAddCss && !HL && (! function(HH) {
        if (HH && mH) {
          var BH = OH.createElement("style");
          BH.setAttribute("type", "text/css"), BH.innerHTML = HH;
          for (var LH = OH.head.childNodes, AH = null, rH = LH.length - 1; rH > -1; rH--) {
            var SH = LH[rH],
              hH = (SH.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(hH) > -1 && (AH = SH)
          }
          OH.head.insertBefore(BH, AH)
        }
      }(yB()), HL = !0)
    }
    var LL = {
        mixout: function() {
          return {
            dom: {
              css: yB,
              insertCss: BL
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              BL()
            },
            beforeI2svg: function() {
              BL()
            }
          }
        }
      },
      AL = VH || {};
    AL[uB] || (AL[uB] = {}), AL[uB].styles || (AL[uB].styles = {}), AL[uB].hooks || (AL[uB].hooks = {}), AL[uB].shims || (AL[uB].shims = []);
    var rL = AL[uB],
      SL = [],
      hL = function() {
        OH.removeEventListener("DOMContentLoaded", hL), tL = 1, SL.map((function(HH) {
          return HH()
        }))
      },
      tL = !1;

    function zL(HH) {
      var BH = HH.tag,
        LH = HH.attributes,
        AH = void 0 === LH ? {} : LH,
        rH = HH.children,
        SH = void 0 === rH ? [] : rH;
      return "string" === typeof HH ? JB(HH) : "<".concat(BH, " ").concat(function(HH) {
        return Object.keys(HH || {}).reduce((function(BH, LH) {
          return BH + "".concat(LH, '="').concat(JB(HH[LH]), '" ')
        }), "").trim()
      }(AH), ">").concat(SH.map(zL).join(""), "</").concat(BH, ">")
    }

    function CL(HH, BH, LH) {
      if (HH && HH[BH] && HH[BH][LH]) return {
        prefix: BH,
        iconName: LH,
        icon: HH[BH][LH]
      }
    }
    mH && ((tL = (OH.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(OH.readyState)) || OH.addEventListener("DOMContentLoaded", hL));
    var EL = function(HH, BH, LH, AH) {
      var rH, SH, hH, tH = Object.keys(HH),
        zH = tH.length,
        CH = void 0 !== AH ? function(HH, BH) {
          return function(LH, AH, rH, SH) {
            return HH.call(BH, LH, AH, rH, SH)
          }
        }(BH, AH) : BH;
      for (void 0 === LH ? (rH = 1, hH = HH[tH[0]]) : (rH = 0, hH = LH); rH < zH; rH++) hH = CH(hH, HH[SH = tH[rH]], SH, HH);
      return hH
    };

    function XL(HH) {
      return 1 !== EH(HH).length ? null : HH.codePointAt(0).toString(16)
    }

    function GL(HH) {
      return Object.keys(HH).reduce((function(BH, LH) {
        var AH = HH[LH];
        return !!AH.icon ? BH[AH.iconName] = AH.icon : BH[LH] = AH, BH
      }), {})
    }

    function YL(HH, BH) {
      var LH = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        AH = void 0 !== LH && LH,
        rH = GL(BH);
      "function" !== typeof rL.hooks.addPack || AH ? rL.styles[HH] = zH(zH({}, rL.styles[HH] || {}), rH) : rL.hooks.addPack(HH, GL(BH)), "fas" === HH && YL("fa", BH)
    }
    var uL = rL.styles,
      QL = rL.shims,
      WL = Object.keys(fB),
      ML = WL.reduce((function(HH, BH) {
        return HH[BH] = Object.keys(fB[BH]), HH
      }), {}),
      xL = null,
      vL = {},
      PL = {},
      TL = {},
      UL = {},
      VL = {};

    function OL(HH, BH) {
      var LH, AH = BH.split("-"),
        rH = AH[0],
        SH = AH.slice(1).join("-");
      return rH !== HH || "" === SH || (LH = SH, ~NB.indexOf(LH)) ? null : SH
    }
    var bL, kL = function() {
      var HH = function(HH) {
        return EL(uL, (function(BH, LH, AH) {
          return BH[AH] = EL(LH, HH, {}), BH
        }), {})
      };
      vL = HH((function(HH, BH, LH) {
        (BH[3] && (HH[BH[3]] = LH), BH[2]) && BH[2].filter((function(HH) {
          return "number" === typeof HH
        })).forEach((function(BH) {
          HH[BH.toString(16)] = LH
        }));
        return HH
      })), PL = HH((function(HH, BH, LH) {
        (HH[LH] = LH, BH[2]) && BH[2].filter((function(HH) {
          return "string" === typeof HH
        })).forEach((function(BH) {
          HH[BH] = LH
        }));
        return HH
      })), VL = HH((function(HH, BH, LH) {
        var AH = BH[2];
        return HH[LH] = LH, AH.forEach((function(BH) {
          HH[BH] = LH
        })), HH
      }));
      var BH = "far" in uL || FB.autoFetchSvg,
        LH = EL(QL, (function(HH, LH) {
          var AH = LH[0],
            rH = LH[1],
            SH = LH[2];
          return "far" !== rH || BH || (rH = "fas"), "string" === typeof AH && (HH.names[AH] = {
            prefix: rH,
            iconName: SH
          }), "number" === typeof AH && (HH.unicodes[AH.toString(16)] = {
            prefix: rH,
            iconName: SH
          }), HH
        }), {
          names: {},
          unicodes: {}
        });
      TL = LH.names, UL = LH.unicodes, xL = lL(FB.styleDefault, {
        family: FB.familyDefault
      })
    };

    function mL(HH, BH) {
      return (vL[HH] || {})[BH]
    }

    function oL(HH, BH) {
      return (VL[HH] || {})[BH]
    }

    function IL(HH) {
      return TL[HH] || {
        prefix: null,
        iconName: null
      }
    }

    function fL() {
      return xL
    }
    bL = function(HH) {
      xL = lL(HH.styleDefault, {
        family: FB.familyDefault
      })
    }, DB.push(bL), kL();

    function lL(HH) {
      var BH = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        LH = void 0 === BH ? lH : BH,
        AH = kB[LH][HH];
      if (LH === KH && !HH) return "fad";
      var rH = oB[LH][HH] || oB[LH][AH],
        SH = HH in rL.styles ? HH : null;
      return rH || SH || null
    }

    function KL(HH) {
      return HH.sort().filter((function(HH, BH, LH) {
        return LH.indexOf(HH) === BH
      }))
    }
    var cL = EB.concat(HB);

    function eL(HH) {
      var BH = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        LH = void 0 !== BH && BH,
        AH = null,
        rH = KL(HH.filter((function(HH) {
          return cL.includes(HH)
        }))),
        SH = KL(HH.filter((function(HH) {
          return !cL.includes(HH)
        }))),
        hH = CH(rH.filter((function(HH) {
          return AH = HH, !fH.includes(HH)
        })), 1)[0],
        tH = void 0 === hH ? null : hH,
        EH = function(HH) {
          var BH = lH,
            LH = WL.reduce((function(HH, BH) {
              return HH[BH] = "".concat(FB.cssPrefix, "-").concat(BH), HH
            }), {});
          return pH.forEach((function(AH) {
            (HH.includes(LH[AH]) || HH.some((function(HH) {
              return ML[AH].includes(HH)
            }))) && (BH = AH)
          })), BH
        }(rH),
        XH = zH(zH({}, function(HH) {
          var BH = [],
            LH = null;
          return HH.forEach((function(HH) {
            var AH = OL(FB.cssPrefix, HH);
            AH ? LH = AH : HH && BH.push(HH)
          })), {
            iconName: LH,
            rest: BH
          }
        }(SH)), {}, {
          prefix: lL(tH, {
            family: EH
          })
        });
      return zH(zH(zH({}, XH), function(HH) {
        var BH = HH.values,
          LH = HH.family,
          AH = HH.canonical,
          rH = HH.givenPrefix,
          SH = void 0 === rH ? "" : rH,
          hH = HH.styles,
          tH = void 0 === hH ? {} : hH,
          zH = HH.config,
          CH = void 0 === zH ? {} : zH,
          EH = LH === KH,
          XH = BH.includes("fa-duotone") || BH.includes("fad"),
          GH = "duotone" === CH.familyDefault,
          YH = "fad" === AH.prefix || "fa-duotone" === AH.prefix;
        !EH && (XH || GH || YH) && (AH.prefix = "fad");
        (BH.includes("fa-brands") || BH.includes("fab")) && (AH.prefix = "fab");
        if (!AH.prefix && qL.includes(LH)) {
          if (Object.keys(tH).find((function(HH) {
              return gL.includes(HH)
            })) || CH.autoFetchSvg) {
            var uH = yH.get(LH).defaultShortPrefixId;
            AH.prefix = uH, AH.iconName = oL(AH.prefix, AH.iconName) || AH.iconName
          }
        }
        "fa" !== AH.prefix && "fa" !== SH || (AH.prefix = fL() || "fas");
        return AH
      }({
        values: HH,
        family: EH,
        styles: uL,
        config: FB,
        canonical: XH,
        givenPrefix: AH
      })), function(HH, BH, LH) {
        var AH = LH.prefix,
          rH = LH.iconName;
        if (HH || !AH || !rH) return {
          prefix: AH,
          iconName: rH
        };
        var SH = "fa" === BH ? IL(rH) : {},
          hH = oL(AH, rH);
        rH = SH.iconName || hH || rH, "far" !== (AH = SH.prefix || AH) || uL.far || !uL.fas || FB.autoFetchSvg || (AH = "fas");
        return {
          prefix: AH,
          iconName: rH
        }
      }(LH, AH, XH))
    }
    var qL = pH.filter((function(HH) {
        return HH !== lH || HH !== KH
      })),
      gL = Object.keys(CB).filter((function(HH) {
        return HH !== lH
      })).map((function(HH) {
        return Object.keys(CB[HH])
      })).flat();
    var NL = function() {
        return function(HH, BH, LH) {
          return BH && rH(HH.prototype, BH), LH && rH(HH, LH), Object.defineProperty(HH, "prototype", {
            writable: !1
          }), HH
        }((function HH() {
          ! function(HH, BH) {
            if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
          }(this, HH), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var HH = this, BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
            var rH = LH.reduce(this._pullDefinitions, {});
            Object.keys(rH).forEach((function(BH) {
              HH.definitions[BH] = zH(zH({}, HH.definitions[BH] || {}), rH[BH]), YL(BH, rH[BH]);
              var LH = fB[lH][BH];
              LH && YL(LH, rH[BH]), kL()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(HH, BH) {
            var LH = BH.prefix && BH.iconName && BH.icon ? {
              0: BH
            } : BH;
            return Object.keys(LH).map((function(BH) {
              var AH = LH[BH],
                rH = AH.prefix,
                SH = AH.iconName,
                hH = AH.icon,
                tH = hH[2];
              HH[rH] || (HH[rH] = {}), tH.length > 0 && tH.forEach((function(BH) {
                "string" === typeof BH && (HH[rH][BH] = hH)
              })), HH[rH][SH] = hH
            })), HH
          }
        }])
      }(),
      RL = [],
      jL = {},
      nL = {},
      FL = Object.keys(nL);

    function DL(HH, BH) {
      for (var LH = arguments.length, AH = new Array(LH > 2 ? LH - 2 : 0), rH = 2; rH < LH; rH++) AH[rH - 2] = arguments[rH];
      return (jL[HH] || []).forEach((function(HH) {
        BH = HH.apply(null, [BH].concat(AH))
      })), BH
    }

    function wL(HH) {
      for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
      (jL[HH] || []).forEach((function(HH) {
        HH.apply(null, LH)
      }))
    }

    function ZL() {
      var HH = arguments[0],
        BH = Array.prototype.slice.call(arguments, 1);
      return nL[HH] ? nL[HH].apply(null, BH) : void 0
    }

    function dL(HH) {
      "fa" === HH.prefix && (HH.prefix = "fas");
      var BH = HH.iconName,
        LH = HH.prefix || fL();
      if (BH) return BH = oL(LH, BH) || BH, CL(aL.definitions, LH, BH) || CL(rL.styles, LH, BH)
    }
    var aL = new NL,
      sL = {
        i2svg: function() {
          var HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return mH ? (wL("beforeI2svg", HH), ZL("pseudoElements2svg", HH), ZL("i2svg", HH)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var HH, BH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            LH = BH.autoReplaceSvgRoot;
          !1 === FB.autoReplaceSvg && (FB.autoReplaceSvg = !0), FB.observeMutations = !0, HH = function() {
            iL({
              autoReplaceSvgRoot: LH
            }), wL("watch", BH)
          }, mH && (tL ? setTimeout(HH, 0) : SL.push(HH))
        }
      },
      JL = {
        noAuto: function() {
          FB.autoReplaceSvg = !1, FB.observeMutations = !1, wL("noAuto")
        },
        config: FB,
        dom: sL,
        parse: {
          icon: function(HH) {
            if (null === HH) return null;
            if ("object" === GH(HH) && HH.prefix && HH.iconName) return {
              prefix: HH.prefix,
              iconName: oL(HH.prefix, HH.iconName) || HH.iconName
            };
            if (Array.isArray(HH) && 2 === HH.length) {
              var BH = 0 === HH[1].indexOf("fa-") ? HH[1].slice(3) : HH[1],
                LH = lL(HH[0]);
              return {
                prefix: LH,
                iconName: oL(LH, BH) || BH
              }
            }
            if ("string" === typeof HH && (HH.indexOf("".concat(FB.cssPrefix, "-")) > -1 || HH.match(KB))) {
              var AH = eL(HH.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: AH.prefix || fL(),
                iconName: oL(AH.prefix, AH.iconName) || AH.iconName
              }
            }
            if ("string" === typeof HH) {
              var rH = fL();
              return {
                prefix: rH,
                iconName: oL(rH, HH) || HH
              }
            }
          }
        },
        library: aL,
        findIconDefinition: dL,
        toHtml: zL
      },
      iL = function() {
        var HH = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          BH = void 0 === HH ? OH : HH;
        (Object.keys(rL.styles).length > 0 || FB.autoFetchSvg) && mH && FB.autoReplaceSvg && JL.dom.i2svg({
          node: BH
        })
      };

    function pL(HH, BH) {
      return Object.defineProperty(HH, "abstract", {
        get: BH
      }), Object.defineProperty(HH, "html", {
        get: function() {
          return HH.abstract.map((function(HH) {
            return zL(HH)
          }))
        }
      }), Object.defineProperty(HH, "node", {
        get: function() {
          if (mH) {
            var BH = OH.createElement("div");
            return BH.innerHTML = HH.html, BH.children
          }
        }
      }), HH
    }

    function yL(HH) {
      var BH = HH.icons,
        LH = BH.main,
        AH = BH.mask,
        rH = HH.prefix,
        SH = HH.iconName,
        hH = HH.transform,
        tH = HH.symbol,
        CH = HH.maskId,
        EH = HH.extra,
        XH = HH.watchable,
        GH = void 0 !== XH && XH,
        YH = AH.found ? AH : LH,
        uH = YH.width,
        QH = YH.height,
        WH = [FB.replacementClass, SH ? "".concat(FB.cssPrefix, "-").concat(SH) : ""].filter((function(HH) {
          return -1 === EH.classes.indexOf(HH)
        })).filter((function(HH) {
          return "" !== HH || !!HH
        })).concat(EH.classes).join(" "),
        MH = {
          children: [],
          attributes: zH(zH({}, EH.attributes), {}, {
            "data-prefix": rH,
            "data-icon": SH,
            class: WH,
            role: EH.attributes.role || "img",
            viewBox: "0 0 ".concat(uH, " ").concat(QH)
          })
        };
      (function(HH) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(BH) {
          return BH in HH
        }))
      })(EH.attributes) || EH.attributes["aria-hidden"] || (MH.attributes["aria-hidden"] = "true"), GH && (MH.attributes[WB] = "");
      var xH = zH(zH({}, MH), {}, {
          prefix: rH,
          iconName: SH,
          main: LH,
          mask: AH,
          maskId: CH,
          transform: hH,
          symbol: tH,
          styles: zH({}, EH.styles)
        }),
        vH = AH.found && LH.found ? ZL("generateAbstractMask", xH) || {
          children: [],
          attributes: {}
        } : ZL("generateAbstractIcon", xH) || {
          children: [],
          attributes: {}
        },
        PH = vH.children,
        TH = vH.attributes;
      return xH.children = PH, xH.attributes = TH, tH ? function(HH) {
        var BH = HH.prefix,
          LH = HH.iconName,
          AH = HH.children,
          rH = HH.attributes,
          SH = HH.symbol,
          hH = !0 === SH ? "".concat(BH, "-").concat(FB.cssPrefix, "-").concat(LH) : SH;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: zH(zH({}, rH), {}, {
              id: hH
            }),
            children: AH
          }]
        }]
      }(xH) : function(HH) {
        var BH = HH.children,
          LH = HH.main,
          AH = HH.mask,
          rH = HH.attributes,
          SH = HH.styles,
          hH = HH.transform;
        if (pB(hH) && LH.found && !AH.found) {
          var tH = {
            x: LH.width / LH.height / 2,
            y: .5
          };
          rH.style = iB(zH(zH({}, SH), {}, {
            "transform-origin": "".concat(tH.x + hH.x / 16, "em ").concat(tH.y + hH.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: rH,
          children: BH
        }]
      }(xH)
    }

    function HA(HH) {
      var BH = HH.content,
        LH = HH.width,
        AH = HH.height,
        rH = HH.transform,
        SH = HH.extra,
        hH = HH.watchable,
        tH = void 0 !== hH && hH,
        CH = zH(zH({}, SH.attributes), {}, {
          class: SH.classes.join(" ")
        });
      tH && (CH[WB] = "");
      var EH = zH({}, SH.styles);
      pB(rH) && (EH.transform = function(HH) {
        var BH = HH.transform,
          LH = HH.width,
          AH = void 0 === LH ? 16 : LH,
          rH = HH.height,
          SH = void 0 === rH ? 16 : rH,
          hH = HH.startCentered,
          tH = void 0 !== hH && hH,
          zH = "";
        return zH += tH && oH ? "translate(".concat(BH.x / wB - AH / 2, "em, ").concat(BH.y / wB - SH / 2, "em) ") : tH ? "translate(calc(-50% + ".concat(BH.x / wB, "em), calc(-50% + ").concat(BH.y / wB, "em)) ") : "translate(".concat(BH.x / wB, "em, ").concat(BH.y / wB, "em) "), zH += "scale(".concat(BH.size / wB * (BH.flipX ? -1 : 1), ", ").concat(BH.size / wB * (BH.flipY ? -1 : 1), ") "), zH + "rotate(".concat(BH.rotate, "deg) ")
      }({
        transform: rH,
        startCentered: !0,
        width: LH,
        height: AH
      }), EH["-webkit-transform"] = EH.transform);
      var XH = iB(EH);
      XH.length > 0 && (CH.style = XH);
      var GH = [];
      return GH.push({
        tag: "span",
        attributes: CH,
        children: [BH]
      }), GH
    }
    var BA = rL.styles;

    function LA(HH) {
      var BH = HH[0],
        LH = HH[1],
        AH = CH(HH.slice(4), 1)[0];
      return {
        found: !0,
        width: BH,
        height: LH,
        icon: Array.isArray(AH) ? {
          tag: "g",
          attributes: {
            class: "".concat(FB.cssPrefix, "-").concat(gB.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(FB.cssPrefix, "-").concat(gB.SECONDARY),
              fill: "currentColor",
              d: AH[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(FB.cssPrefix, "-").concat(gB.PRIMARY),
              fill: "currentColor",
              d: AH[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: AH
          }
        }
      }
    }
    var AA = {
      found: !1,
      width: 512,
      height: 512
    };

    function rA(HH, BH) {
      var LH = BH;
      return "fa" === BH && null !== FB.styleDefault && (BH = fL()), new Promise((function(AH, rH) {
        if ("fa" === LH) {
          var SH = IL(HH) || {};
          HH = SH.iconName || HH, BH = SH.prefix || BH
        }
        if (HH && BH && BA[BH] && BA[BH][HH]) return AH(LA(BA[BH][HH]));
        ! function(HH, BH) {
          VB || FB.showMissingIcons || !HH || console.error('Icon with name "'.concat(HH, '" and prefix "').concat(BH, '" is missing.'))
        }(HH, BH), AH(zH(zH({}, AA), {}, {
          icon: FB.showMissingIcons && HH && ZL("missingIconAbstract") || {}
        }))
      }))
    }
    var SA = function() {},
      hA = FB.measurePerformance && kH && kH.mark && kH.measure ? kH : {
        mark: SA,
        measure: SA
      },
      tA = 'FA "7.2.0"',
      zA = function(HH) {
        hA.mark("".concat(tA, " ").concat(HH, " ends")), hA.measure("".concat(tA, " ").concat(HH), "".concat(tA, " ").concat(HH, " begins"), "".concat(tA, " ").concat(HH, " ends"))
      },
      CA = function(HH) {
        return hA.mark("".concat(tA, " ").concat(HH, " begins")),
          function() {
            return zA(HH)
          }
      },
      EA = function() {};

    function XA(HH) {
      return "string" === typeof(HH.getAttribute ? HH.getAttribute(WB) : null)
    }

    function GA(HH) {
      return OH.createElementNS("http://www.w3.org/2000/svg", HH)
    }

    function YA(HH) {
      return OH.createElement(HH)
    }

    function uA(HH) {
      var BH = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        LH = void 0 === BH ? "svg" === HH.tag ? GA : YA : BH;
      if ("string" === typeof HH) return OH.createTextNode(HH);
      var AH = LH(HH.tag);
      return Object.keys(HH.attributes || []).forEach((function(BH) {
        AH.setAttribute(BH, HH.attributes[BH])
      })), (HH.children || []).forEach((function(HH) {
        AH.appendChild(uA(HH, {
          ceFn: LH
        }))
      })), AH
    }
    var QA = {
      replace: function(HH) {
        var BH = HH[0];
        if (BH.parentNode)
          if (HH[1].forEach((function(HH) {
              BH.parentNode.insertBefore(uA(HH), BH)
            })), null === BH.getAttribute(WB) && FB.keepOriginalSource) {
            var LH = OH.createComment(function(HH) {
              var BH = " ".concat(HH.outerHTML, " ");
              return "".concat(BH, "Font Awesome fontawesome.com ")
            }(BH));
            BH.parentNode.replaceChild(LH, BH)
          } else BH.remove()
      },
      nest: function(HH) {
        var BH = HH[0],
          LH = HH[1];
        if (~sB(BH).indexOf(FB.replacementClass)) return QA.replace(HH);
        var AH = new RegExp("".concat(FB.cssPrefix, "-.*"));
        if (delete LH[0].attributes.id, LH[0].attributes.class) {
          var rH = LH[0].attributes.class.split(" ").reduce((function(HH, BH) {
            return BH === FB.replacementClass || BH.match(AH) ? HH.toSvg.push(BH) : HH.toNode.push(BH), HH
          }), {
            toNode: [],
            toSvg: []
          });
          LH[0].attributes.class = rH.toSvg.join(" "), 0 === rH.toNode.length ? BH.removeAttribute("class") : BH.setAttribute("class", rH.toNode.join(" "))
        }
        var SH = LH.map((function(HH) {
          return zL(HH)
        })).join("\n");
        BH.setAttribute(WB, ""), BH.innerHTML = SH
      }
    };

    function WA(HH) {
      HH()
    }

    function MA(HH, BH) {
      var LH = "function" === typeof BH ? BH : EA;
      if (0 === HH.length) LH();
      else {
        var AH = WA;
        "async" === FB.mutateApproach && (AH = VH.requestAnimationFrame || WA), AH((function() {
          var BH = !0 === FB.autoReplaceSvg ? QA.replace : QA[FB.autoReplaceSvg] || QA.replace,
            AH = CA("mutate");
          HH.map(BH), AH(), LH()
        }))
      }
    }
    var xA = !1;

    function vA() {
      xA = !0
    }

    function PA() {
      xA = !1
    }
    var TA = null;

    function UA(HH) {
      if (bH && FB.observeMutations) {
        var BH = HH.treeCallback,
          LH = void 0 === BH ? EA : BH,
          AH = HH.nodeCallback,
          rH = void 0 === AH ? EA : AH,
          SH = HH.pseudoElementsCallback,
          hH = void 0 === SH ? EA : SH,
          tH = HH.observeMutationsRoot,
          zH = void 0 === tH ? OH : tH;
        TA = new bH((function(HH) {
          if (!xA) {
            var BH = fL();
            aB(HH).forEach((function(HH) {
              if ("childList" === HH.type && HH.addedNodes.length > 0 && !XA(HH.addedNodes[0]) && (FB.searchPseudoElements && hH(HH.target), LH(HH.target)), "attributes" === HH.type && HH.target.parentNode && FB.searchPseudoElements && hH([HH.target], !0), "attributes" === HH.type && XA(HH.target) && ~qB.indexOf(HH.attributeName))
                if ("class" === HH.attributeName && function(HH) {
                    var BH = HH.getAttribute ? HH.getAttribute(xB) : null,
                      LH = HH.getAttribute ? HH.getAttribute(vB) : null;
                    return BH && LH
                  }(HH.target)) {
                  var AH = eL(sB(HH.target)),
                    SH = AH.prefix,
                    tH = AH.iconName;
                  HH.target.setAttribute(xB, SH || BH), tH && HH.target.setAttribute(vB, tH)
                } else(zH = HH.target) && zH.classList && zH.classList.contains && zH.classList.contains(FB.replacementClass) && rH(HH.target);
              var zH
            }))
          }
        })), mH && TA.observe(zH, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function VA(HH) {
      var BH, LH, AH = HH.getAttribute("data-prefix"),
        rH = HH.getAttribute("data-icon"),
        SH = void 0 !== HH.innerText ? HH.innerText.trim() : "",
        hH = eL(sB(HH));
      return hH.prefix || (hH.prefix = fL()), AH && rH && (hH.prefix = AH, hH.iconName = rH), hH.iconName && hH.prefix || (hH.prefix && SH.length > 0 && (hH.iconName = (BH = hH.prefix, LH = HH.innerText, (PL[BH] || {})[LH] || mL(hH.prefix, XL(HH.innerText)))), !hH.iconName && FB.autoFetchSvg && HH.firstChild && HH.firstChild.nodeType === Node.TEXT_NODE && (hH.iconName = HH.firstChild.data)), hH
    }

    function OA(HH) {
      var BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        LH = VA(HH),
        AH = LH.iconName,
        rH = LH.prefix,
        SH = LH.rest,
        hH = function(HH) {
          return aB(HH.attributes).reduce((function(HH, BH) {
            return "class" !== HH.name && "style" !== HH.name && (HH[BH.name] = BH.value), HH
          }), {})
        }(HH),
        tH = DL("parseNodeAttributes", {}, HH),
        CH = BH.styleParser ? function(HH) {
          var BH = HH.getAttribute("style"),
            LH = [];
          return BH && (LH = BH.split(";").reduce((function(HH, BH) {
            var LH = BH.split(":"),
              AH = LH[0],
              rH = LH.slice(1);
            return AH && rH.length > 0 && (HH[AH] = rH.join(":").trim()), HH
          }), {})), LH
        }(HH) : [];
      return zH({
        iconName: AH,
        prefix: rH,
        transform: ZB,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: SH,
          styles: CH,
          attributes: hH
        }
      }, tH)
    }
    var bA = rL.styles;

    function kA(HH) {
      var BH = "nest" === FB.autoReplaceSvg ? OA(HH, {
        styleParser: !1
      }) : OA(HH);
      return ~BH.extra.classes.indexOf(cB) ? ZL("generateLayersText", HH, BH) : ZL("generateSvgReplacementMutation", HH, BH)
    }

    function mA(HH) {
      var BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!mH) return Promise.resolve();
      var LH = OH.documentElement.classList,
        AH = function(HH) {
          return LH.add("".concat(PB, "-").concat(HH))
        },
        rH = function(HH) {
          return LH.remove("".concat(PB, "-").concat(HH))
        },
        SH = FB.autoFetchSvg ? [].concat(EH(HB), EH(EB)) : fH.concat(Object.keys(bA));
      SH.includes("fa") || SH.push("fa");
      var hH = [".".concat(cB, ":not([").concat(WB, "])")].concat(SH.map((function(HH) {
        return ".".concat(HH, ":not([").concat(WB, "])")
      }))).join(", ");
      if (0 === hH.length) return Promise.resolve();
      var tH = [];
      try {
        tH = aB(HH.querySelectorAll(hH))
      } catch (XH) {}
      if (!(tH.length > 0)) return Promise.resolve();
      AH("pending"), rH("complete");
      var zH = CA("onTree"),
        CH = tH.reduce((function(HH, BH) {
          try {
            var LH = kA(BH);
            LH && HH.push(LH)
          } catch (XH) {
            VB || "MissingIcon" === XH.name && console.error(XH)
          }
          return HH
        }), []);
      return new Promise((function(HH, LH) {
        Promise.all(CH).then((function(LH) {
          MA(LH, (function() {
            AH("active"), AH("complete"), rH("pending"), "function" === typeof BH && BH(), zH(), HH()
          }))
        })).catch((function(HH) {
          zH(), LH(HH)
        }))
      }))
    }

    function oA(HH) {
      var BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      kA(HH).then((function(HH) {
        HH && MA([HH], BH)
      }))
    }
    var IA = function(HH) {
        var BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          LH = BH.transform,
          AH = void 0 === LH ? ZB : LH,
          rH = BH.symbol,
          SH = void 0 !== rH && rH,
          hH = BH.mask,
          tH = void 0 === hH ? null : hH,
          CH = BH.maskId,
          EH = void 0 === CH ? null : CH,
          XH = BH.classes,
          GH = void 0 === XH ? [] : XH,
          YH = BH.attributes,
          uH = void 0 === YH ? {} : YH,
          QH = BH.styles,
          WH = void 0 === QH ? {} : QH;
        if (HH) {
          var MH = HH.prefix,
            xH = HH.iconName,
            vH = HH.icon;
          return pL(zH({
            type: "icon"
          }, HH), (function() {
            return wL("beforeDOMElementCreation", {
              iconDefinition: HH,
              params: BH
            }), yL({
              icons: {
                main: LA(vH),
                mask: tH ? LA(tH.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: MH,
              iconName: xH,
              transform: zH(zH({}, ZB), AH),
              symbol: SH,
              maskId: EH,
              extra: {
                attributes: uH,
                styles: WH,
                classes: GH
              }
            })
          }))
        }
      },
      fA = {
        mixout: function() {
          return {
            icon: (HH = IA, function(BH) {
              var LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                AH = (BH || {}).icon ? BH : dL(BH || {}),
                rH = LH.mask;
              return rH && (rH = (rH || {}).icon ? rH : dL(rH || {})), HH(AH, zH(zH({}, LH), {}, {
                mask: rH
              }))
            })
          };
          var HH
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(HH) {
              return HH.treeCallback = mA, HH.nodeCallback = oA, HH
            }
          }
        },
        provides: function(HH) {
          HH.i2svg = function(HH) {
            var BH = HH.node,
              LH = void 0 === BH ? OH : BH,
              AH = HH.callback;
            return mA(LH, void 0 === AH ? function() {} : AH)
          }, HH.generateSvgReplacementMutation = function(HH, BH) {
            var LH = BH.iconName,
              AH = BH.prefix,
              rH = BH.transform,
              SH = BH.symbol,
              hH = BH.mask,
              tH = BH.maskId,
              zH = BH.extra;
            return new Promise((function(BH, EH) {
              Promise.all([rA(LH, AH), hH.iconName ? rA(hH.iconName, hH.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(hH) {
                var EH = CH(hH, 2),
                  XH = EH[0],
                  GH = EH[1];
                BH([HH, yL({
                  icons: {
                    main: XH,
                    mask: GH
                  },
                  prefix: AH,
                  iconName: LH,
                  transform: rH,
                  symbol: SH,
                  maskId: tH,
                  extra: zH,
                  watchable: !0
                })])
              })).catch(EH)
            }))
          }, HH.generateAbstractIcon = function(HH) {
            var BH, LH = HH.children,
              AH = HH.attributes,
              rH = HH.main,
              SH = HH.transform,
              hH = iB(HH.styles);
            return hH.length > 0 && (AH.style = hH), pB(SH) && (BH = ZL("generateAbstractTransformGrouping", {
              main: rH,
              transform: SH,
              containerWidth: rH.width,
              iconWidth: rH.width
            })), LH.push(BH || rH.icon), {
              children: LH,
              attributes: AH
            }
          }
        }
      },
      lA = {
        mixout: function() {
          return {
            layer: function(HH) {
              var BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                LH = BH.classes,
                AH = void 0 === LH ? [] : LH;
              return pL({
                type: "layer"
              }, (function() {
                wL("beforeDOMElementCreation", {
                  assembler: HH,
                  params: BH
                });
                var LH = [];
                return HH((function(HH) {
                  Array.isArray(HH) ? HH.map((function(HH) {
                    LH = LH.concat(HH.abstract)
                  })) : LH = LH.concat(HH.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(FB.cssPrefix, "-layers")].concat(EH(AH)).join(" ")
                  },
                  children: LH
                }]
              }))
            }
          }
        }
      },
      KA = {
        mixout: function() {
          return {
            counter: function(HH) {
              var BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                LH = BH.title,
                AH = void 0 === LH ? null : LH,
                rH = BH.classes,
                SH = void 0 === rH ? [] : rH,
                hH = BH.attributes,
                tH = void 0 === hH ? {} : hH,
                CH = BH.styles,
                XH = void 0 === CH ? {} : CH;
              return pL({
                type: "counter",
                content: HH
              }, (function() {
                return wL("beforeDOMElementCreation", {
                    content: HH,
                    params: BH
                  }),
                  function(HH) {
                    var BH = HH.content,
                      LH = HH.extra,
                      AH = zH(zH({}, LH.attributes), {}, {
                        class: LH.classes.join(" ")
                      }),
                      rH = iB(LH.styles);
                    rH.length > 0 && (AH.style = rH);
                    var SH = [];
                    return SH.push({
                      tag: "span",
                      attributes: AH,
                      children: [BH]
                    }), SH
                  }({
                    content: HH.toString(),
                    title: AH,
                    extra: {
                      attributes: tH,
                      styles: XH,
                      classes: ["".concat(FB.cssPrefix, "-layers-counter")].concat(EH(SH))
                    }
                  })
              }))
            }
          }
        }
      },
      cA = {
        mixout: function() {
          return {
            text: function(HH) {
              var BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                LH = BH.transform,
                AH = void 0 === LH ? ZB : LH,
                rH = BH.classes,
                SH = void 0 === rH ? [] : rH,
                hH = BH.attributes,
                tH = void 0 === hH ? {} : hH,
                CH = BH.styles,
                XH = void 0 === CH ? {} : CH;
              return pL({
                type: "text",
                content: HH
              }, (function() {
                return wL("beforeDOMElementCreation", {
                  content: HH,
                  params: BH
                }), HA({
                  content: HH,
                  transform: zH(zH({}, ZB), AH),
                  extra: {
                    attributes: tH,
                    styles: XH,
                    classes: ["".concat(FB.cssPrefix, "-layers-text")].concat(EH(SH))
                  }
                })
              }))
            }
          }
        },
        provides: function(HH) {
          HH.generateLayersText = function(HH, BH) {
            var LH = BH.transform,
              AH = BH.extra,
              rH = null,
              SH = null;
            if (oH) {
              var hH = parseInt(getComputedStyle(HH).fontSize, 10),
                tH = HH.getBoundingClientRect();
              rH = tH.width / hH, SH = tH.height / hH
            }
            return Promise.resolve([HH, HA({
              content: HH.innerHTML,
              width: rH,
              height: SH,
              transform: LH,
              extra: AH,
              watchable: !0
            })])
          }
        }
      },
      eA = new RegExp('"', "ug"),
      qA = [1105920, 1112319],
      gA = zH(zH(zH(zH({}, {
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
      NA = Object.keys(gA).reduce((function(HH, BH) {
        return HH[BH.toLowerCase()] = gA[BH], HH
      }), {}),
      RA = Object.keys(NA).reduce((function(HH, BH) {
        var LH = NA[BH];
        return HH[BH] = LH[900] || EH(Object.entries(LH))[0][1], HH
      }), {});

    function jA(HH, BH) {
      var LH = "".concat("data-fa-pseudo-element-pending").concat(BH.replace(":", "-"));
      return new Promise((function(AH, rH) {
        if (null !== HH.getAttribute(LH)) return AH();
        var SH = aB(HH.children).filter((function(HH) {
            return HH.getAttribute(MB) === BH
          }))[0],
          hH = VH.getComputedStyle(HH, BH),
          tH = hH.getPropertyValue("font-family"),
          CH = tH.match(eB),
          XH = hH.getPropertyValue("font-weight"),
          GH = hH.getPropertyValue("content");
        if (SH && !CH) return HH.removeChild(SH), AH();
        if (CH && "none" !== GH && "" !== GH) {
          var YH = hH.getPropertyValue("content"),
            uH = function(HH, BH) {
              var LH = HH.replace(/^['"]|['"]$/g, "").toLowerCase(),
                AH = parseInt(BH),
                rH = isNaN(AH) ? "normal" : AH;
              return (NA[LH] || {})[rH] || RA[LH]
            }(tH, XH),
            QH = function(HH) {
              return XL(EH(HH.replace(eA, ""))[0] || "")
            }(YH),
            WH = CH[0].startsWith("FontAwesome"),
            MH = function(HH) {
              var BH = HH.getPropertyValue("font-feature-settings").includes("ss01"),
                LH = HH.getPropertyValue("content").replace(eA, ""),
                AH = LH.codePointAt(0),
                rH = AH >= qA[0] && AH <= qA[1],
                SH = 2 === LH.length && LH[0] === LH[1];
              return rH || SH || BH
            }(hH),
            xH = mL(uH, QH),
            vH = xH;
          if (WH) {
            var PH = function(HH) {
              var BH = UL[HH],
                LH = mL("fas", HH);
              return BH || (LH ? {
                prefix: "fas",
                iconName: LH
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(QH);
            PH.iconName && PH.prefix && (xH = PH.iconName, uH = PH.prefix)
          }
          if (!xH || MH || SH && SH.getAttribute(xB) === uH && SH.getAttribute(vB) === vH) AH();
          else {
            HH.setAttribute(LH, vH), SH && HH.removeChild(SH);
            var TH = {
                iconName: null,
                prefix: null,
                transform: ZB,
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
              UH = TH.extra;
            UH.attributes[MB] = BH, rA(xH, uH).then((function(rH) {
              var SH = yL(zH(zH({}, TH), {}, {
                  icons: {
                    main: rH,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: uH,
                  iconName: vH,
                  extra: UH,
                  watchable: !0
                })),
                hH = OH.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === BH ? HH.insertBefore(hH, HH.firstChild) : HH.appendChild(hH), hH.outerHTML = SH.map((function(HH) {
                return zL(HH)
              })).join("\n"), HH.removeAttribute(LH), AH()
            })).catch(rH)
          }
        } else AH()
      }))
    }

    function nA(HH) {
      return Promise.all([jA(HH, "::before"), jA(HH, "::after")])
    }

    function FA(HH) {
      return HH.parentNode !== document.head && !~TB.indexOf(HH.tagName.toUpperCase()) && !HH.getAttribute(MB) && (!HH.parentNode || "svg" !== HH.parentNode.tagName)
    }
    var DA = function(HH) {
        return !!HH && UB.some((function(BH) {
          return HH.includes(BH)
        }))
      },
      wA = function(HH) {
        if (!HH) return [];
        var BH = new Set,
          LH = HH.split(/,(?![^()]*\))/).map((function(HH) {
            return HH.trim()
          }));
        LH = LH.flatMap((function(HH) {
          return HH.includes("(") ? HH : HH.split(",").map((function(HH) {
            return HH.trim()
          }))
        }));
        var AH, rH = SH(LH);
        try {
          for (rH.s(); !(AH = rH.n()).done;) {
            var hH = AH.value;
            if (DA(hH)) {
              var tH = UB.reduce((function(HH, BH) {
                return HH.replace(BH, "")
              }), hH);
              "" !== tH && "*" !== tH && BH.add(tH)
            }
          }
        } catch (zH) {
          rH.e(zH)
        } finally {
          rH.f()
        }
        return BH
      };

    function ZA(HH) {
      if (mH) {
        var BH;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) BH = HH;
        else if (FB.searchPseudoElementsFullScan) BH = HH.querySelectorAll("*");
        else {
          var LH, AH = new Set,
            rH = SH(document.styleSheets);
          try {
            for (rH.s(); !(LH = rH.n()).done;) {
              var hH = LH.value;
              try {
                var tH, zH = SH(hH.cssRules);
                try {
                  for (zH.s(); !(tH = zH.n()).done;) {
                    var CH, EH = tH.value,
                      XH = SH(wA(EH.selectorText));
                    try {
                      for (XH.s(); !(CH = XH.n()).done;) {
                        var GH = CH.value;
                        AH.add(GH)
                      }
                    } catch (uH) {
                      XH.e(uH)
                    } finally {
                      XH.f()
                    }
                  }
                } catch (uH) {
                  zH.e(uH)
                } finally {
                  zH.f()
                }
              } catch (QH) {
                FB.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(hH.href, " (").concat(QH.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (uH) {
            rH.e(uH)
          } finally {
            rH.f()
          }
          if (!AH.size) return;
          var YH = Array.from(AH).join(", ");
          try {
            BH = HH.querySelectorAll(YH)
          } catch (WH) {}
        }
        return new Promise((function(HH, LH) {
          var AH = aB(BH).filter(FA).map(nA),
            rH = CA("searchPseudoElements");
          vA(), Promise.all(AH).then((function() {
            rH(), PA(), HH()
          })).catch((function() {
            rH(), PA(), LH()
          }))
        }))
      }
    }
    var dA = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(HH) {
              return HH.pseudoElementsCallback = ZA, HH
            }
          }
        },
        provides: function(HH) {
          HH.pseudoElements2svg = function(HH) {
            var BH = HH.node,
              LH = void 0 === BH ? OH : BH;
            FB.searchPseudoElements && ZA(LH)
          }
        }
      },
      aA = !1,
      sA = function(HH) {
        return HH.toLowerCase().split(" ").reduce((function(HH, BH) {
          var LH = BH.toLowerCase().split("-"),
            AH = LH[0],
            rH = LH.slice(1).join("-");
          if (AH && "h" === rH) return HH.flipX = !0, HH;
          if (AH && "v" === rH) return HH.flipY = !0, HH;
          if (rH = parseFloat(rH), isNaN(rH)) return HH;
          switch (AH) {
            case "grow":
              HH.size = HH.size + rH;
              break;
            case "shrink":
              HH.size = HH.size - rH;
              break;
            case "left":
              HH.x = HH.x - rH;
              break;
            case "right":
              HH.x = HH.x + rH;
              break;
            case "up":
              HH.y = HH.y - rH;
              break;
            case "down":
              HH.y = HH.y + rH;
              break;
            case "rotate":
              HH.rotate = HH.rotate + rH
          }
          return HH
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      JA = {
        mixout: function() {
          return {
            parse: {
              transform: function(HH) {
                return sA(HH)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(HH, BH) {
              var LH = BH.getAttribute("data-fa-transform");
              return LH && (HH.transform = sA(LH)), HH
            }
          }
        },
        provides: function(HH) {
          HH.generateAbstractTransformGrouping = function(HH) {
            var BH = HH.main,
              LH = HH.transform,
              AH = HH.containerWidth,
              rH = HH.iconWidth,
              SH = {
                transform: "translate(".concat(AH / 2, " 256)")
              },
              hH = "translate(".concat(32 * LH.x, ", ").concat(32 * LH.y, ") "),
              tH = "scale(".concat(LH.size / 16 * (LH.flipX ? -1 : 1), ", ").concat(LH.size / 16 * (LH.flipY ? -1 : 1), ") "),
              CH = "rotate(".concat(LH.rotate, " 0 0)"),
              EH = {
                outer: SH,
                inner: {
                  transform: "".concat(hH, " ").concat(tH, " ").concat(CH)
                },
                path: {
                  transform: "translate(".concat(rH / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: zH({}, EH.outer),
              children: [{
                tag: "g",
                attributes: zH({}, EH.inner),
                children: [{
                  tag: BH.icon.tag,
                  children: BH.icon.children,
                  attributes: zH(zH({}, BH.icon.attributes), EH.path)
                }]
              }]
            }
          }
        }
      },
      iA = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function pA(HH) {
      var BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return HH.attributes && (HH.attributes.fill || BH) && (HH.attributes.fill = "black"), HH
    }
    var yA = {
        hooks: function() {
          return {
            parseNodeAttributes: function(HH, BH) {
              var LH = BH.getAttribute("data-fa-mask"),
                AH = LH ? eL(LH.split(" ").map((function(HH) {
                  return HH.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return AH.prefix || (AH.prefix = fL()), HH.mask = AH, HH.maskId = BH.getAttribute("data-fa-mask-id"), HH
            }
          }
        },
        provides: function(HH) {
          HH.generateAbstractMask = function(HH) {
            var BH, LH = HH.children,
              AH = HH.attributes,
              rH = HH.main,
              SH = HH.mask,
              hH = HH.maskId,
              tH = HH.transform,
              CH = rH.width,
              EH = rH.icon,
              XH = SH.width,
              GH = SH.icon,
              YH = function(HH) {
                var BH = HH.transform,
                  LH = HH.containerWidth,
                  AH = HH.iconWidth,
                  rH = {
                    transform: "translate(".concat(LH / 2, " 256)")
                  },
                  SH = "translate(".concat(32 * BH.x, ", ").concat(32 * BH.y, ") "),
                  hH = "scale(".concat(BH.size / 16 * (BH.flipX ? -1 : 1), ", ").concat(BH.size / 16 * (BH.flipY ? -1 : 1), ") "),
                  tH = "rotate(".concat(BH.rotate, " 0 0)");
                return {
                  outer: rH,
                  inner: {
                    transform: "".concat(SH, " ").concat(hH, " ").concat(tH)
                  },
                  path: {
                    transform: "translate(".concat(AH / 2 * -1, " -256)")
                  }
                }
              }({
                transform: tH,
                containerWidth: XH,
                iconWidth: CH
              }),
              uH = {
                tag: "rect",
                attributes: zH(zH({}, iA), {}, {
                  fill: "white"
                })
              },
              QH = EH.children ? {
                children: EH.children.map(pA)
              } : {},
              WH = {
                tag: "g",
                attributes: zH({}, YH.inner),
                children: [pA(zH({
                  tag: EH.tag,
                  attributes: zH(zH({}, EH.attributes), YH.path)
                }, QH))]
              },
              MH = {
                tag: "g",
                attributes: zH({}, YH.outer),
                children: [WH]
              },
              xH = "mask-".concat(hH || dB()),
              vH = "clip-".concat(hH || dB()),
              PH = {
                tag: "mask",
                attributes: zH(zH({}, iA), {}, {
                  id: xH,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [uH, MH]
              },
              TH = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: vH
                  },
                  children: (BH = GH, "g" === BH.tag ? BH.children : [BH])
                }, PH]
              };
            return LH.push(TH, {
              tag: "rect",
              attributes: zH({
                fill: "currentColor",
                "clip-path": "url(#".concat(vH, ")"),
                mask: "url(#".concat(xH, ")")
              }, iA)
            }), {
              children: LH,
              attributes: AH
            }
          }
        }
      },
      Hr = {
        provides: function(HH) {
          var BH = !1;
          VH.matchMedia && (BH = VH.matchMedia("(prefers-reduced-motion: reduce)").matches), HH.missingIconAbstract = function() {
            var HH = [],
              LH = {
                fill: "currentColor"
              },
              AH = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            HH.push({
              tag: "path",
              attributes: zH(zH({}, LH), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var rH = zH(zH({}, AH), {}, {
                attributeName: "opacity"
              }),
              SH = {
                tag: "circle",
                attributes: zH(zH({}, LH), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return BH || SH.children.push({
              tag: "animate",
              attributes: zH(zH({}, AH), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: zH(zH({}, rH), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), HH.push(SH), HH.push({
              tag: "path",
              attributes: zH(zH({}, LH), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: BH ? [] : [{
                tag: "animate",
                attributes: zH(zH({}, rH), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), BH || HH.push({
              tag: "path",
              attributes: zH(zH({}, LH), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: zH(zH({}, rH), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: HH
            }
          }
        }
      };
    ! function(HH, BH) {
      var LH = BH.mixoutsTo;
      RL = HH, jL = {}, Object.keys(nL).forEach((function(HH) {
        -1 === FL.indexOf(HH) && delete nL[HH]
      })), RL.forEach((function(HH) {
        var BH = HH.mixout ? HH.mixout() : {};
        if (Object.keys(BH).forEach((function(HH) {
            "function" === typeof BH[HH] && (LH[HH] = BH[HH]), "object" === GH(BH[HH]) && Object.keys(BH[HH]).forEach((function(AH) {
              LH[HH] || (LH[HH] = {}), LH[HH][AH] = BH[HH][AH]
            }))
          })), HH.hooks) {
          var AH = HH.hooks();
          Object.keys(AH).forEach((function(HH) {
            jL[HH] || (jL[HH] = []), jL[HH].push(AH[HH])
          }))
        }
        HH.provides && HH.provides(nL)
      }))
    }([LL, fA, lA, KA, cA, dA, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              vA(), aA = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            UA(DL("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            TA && TA.disconnect()
          },
          watch: function(HH) {
            var BH = HH.observeMutationsRoot;
            aA ? PA() : UA(DL("mutationObserverCallbacks", {
              observeMutationsRoot: BH
            }))
          }
        }
      }
    }, JA, yA, Hr, {
      hooks: function() {
        return {
          parseNodeAttributes: function(HH, BH) {
            var LH = BH.getAttribute("data-fa-symbol"),
              AH = null !== LH && ("" === LH || LH);
            return HH.symbol = AH, HH
          }
        }
      }
    }], {
      mixoutsTo: JL
    });
    var Br = JL.noAuto,
      Lr = JL.config,
      Ar = JL.library,
      rr = JL.dom,
      Sr = JL.parse,
      hr = JL.findIconDefinition,
      tr = JL.toHtml,
      zr = JL.icon,
      Cr = JL.layer,
      Er = JL.text,
      Xr = JL.counter
  },
  7310: HH => {
    HH.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);