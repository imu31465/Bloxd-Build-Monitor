/*! For license information please see wp3j0a.fa-renderer.8804c5c7.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6689: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      FontAwesomeIcon: () => iG
    });
    var wG = ZG(6685),
      SG = ZG(4985),
      LG = ZG.n(SG),
      yG = ZG(51);

    function kG(GG, bG) {
      (null == bG || bG > GG.length) && (bG = GG.length);
      for (var ZG = 0, wG = Array(bG); ZG < bG; ZG++) wG[ZG] = GG[ZG];
      return wG
    }

    function UG(GG, bG, ZG) {
      return (bG = function(GG) {
        var bG = function(GG, bG) {
          if ("object" != typeof GG || !GG) return GG;
          var ZG = GG[Symbol.toPrimitive];
          if (void 0 !== ZG) {
            var wG = ZG.call(GG, bG || "default");
            if ("object" != typeof wG) return wG;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === bG ? String : Number)(GG)
        }(GG, "string");
        return "symbol" == typeof bG ? bG : bG + ""
      }(bG)) in GG ? Object.defineProperty(GG, bG, {
        value: ZG,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : GG[bG] = ZG, GG
    }

    function YG(GG, bG) {
      var ZG = Object.keys(GG);
      if (Object.getOwnPropertySymbols) {
        var wG = Object.getOwnPropertySymbols(GG);
        bG && (wG = wG.filter((function(bG) {
          return Object.getOwnPropertyDescriptor(GG, bG).enumerable
        }))), ZG.push.apply(ZG, wG)
      }
      return ZG
    }

    function VG(GG) {
      for (var bG = 1; bG < arguments.length; bG++) {
        var ZG = null != arguments[bG] ? arguments[bG] : {};
        bG % 2 ? YG(Object(ZG), !0).forEach((function(bG) {
          UG(GG, bG, ZG[bG])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(GG, Object.getOwnPropertyDescriptors(ZG)) : YG(Object(ZG)).forEach((function(bG) {
          Object.defineProperty(GG, bG, Object.getOwnPropertyDescriptor(ZG, bG))
        }))
      }
      return GG
    }

    function pG(GG, bG) {
      return function(GG) {
        if (Array.isArray(GG)) return GG
      }(GG) || function(GG, bG) {
        var ZG = null == GG ? null : "undefined" != typeof Symbol && GG[Symbol.iterator] || GG["@@iterator"];
        if (null != ZG) {
          var wG, SG, LG, yG, kG = [],
            UG = !0,
            YG = !1;
          try {
            if (LG = (ZG = ZG.call(GG)).next, 0 === bG) {
              if (Object(ZG) !== ZG) return;
              UG = !1
            } else
              for (; !(UG = (wG = LG.call(ZG)).done) && (kG.push(wG.value), kG.length !== bG); UG = !0);
          } catch (GG) {
            YG = !0, SG = GG
          } finally {
            try {
              if (!UG && null != ZG.return && (yG = ZG.return(), Object(yG) !== yG)) return
            } finally {
              if (YG) throw SG
            }
          }
          return kG
        }
      }(GG, bG) || KG(GG, bG) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fG(GG) {
      return function(GG) {
        if (Array.isArray(GG)) return kG(GG)
      }(GG) || function(GG) {
        if ("undefined" != typeof Symbol && null != GG[Symbol.iterator] || null != GG["@@iterator"]) return Array.from(GG)
      }(GG) || KG(GG) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function QG(GG) {
      return QG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(GG) {
        return typeof GG
      } : function(GG) {
        return GG && "function" == typeof Symbol && GG.constructor === Symbol && GG !== Symbol.prototype ? "symbol" : typeof GG
      }, QG(GG)
    }

    function KG(GG, bG) {
      if (GG) {
        if ("string" == typeof GG) return kG(GG, bG);
        var ZG = {}.toString.call(GG).slice(8, -1);
        return "Object" === ZG && GG.constructor && (ZG = GG.constructor.name), "Map" === ZG || "Set" === ZG ? Array.from(GG) : "Arguments" === ZG || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZG) ? kG(GG, bG) : void 0
      }
    }
    var hG;
    try {
      var dG = ZG(6695);
      hG = dG.version
    } catch (WG) {
      hG = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function JG(GG) {
      var bG = GG.beat,
        ZG = GG.fade,
        wG = GG.beatFade,
        SG = GG.bounce,
        LG = GG.shake,
        yG = GG.flash,
        kG = GG.spin,
        YG = GG.spinPulse,
        VG = GG.spinReverse,
        fG = GG.pulse,
        QG = GG.fixedWidth,
        KG = GG.inverse,
        dG = GG.border,
        JG = GG.listItem,
        rG = GG.flip,
        zG = GG.size,
        EG = GG.rotation,
        oG = GG.pull,
        XG = GG.swapOpacity,
        uG = GG.rotateBy,
        iG = GG.widthAuto,
        CG = function(GG, bG) {
          for (var ZG = pG(GG.split("-"), 2), wG = ZG[0], SG = ZG[1], LG = pG(bG.split("-"), 2), yG = LG[0], kG = LG[1], UG = wG.split("."), YG = yG.split("."), VG = 0; VG < Math.max(UG.length, YG.length); VG++) {
            var fG = UG[VG] || "0",
              QG = YG[VG] || "0",
              KG = parseInt(fG, 10),
              hG = parseInt(QG, 10);
            if (KG !== hG) return KG > hG
          }
          for (var dG = 0; dG < Math.max(UG.length, YG.length); dG++) {
            var JG = UG[dG] || "0",
              rG = YG[dG] || "0";
            if (JG !== rG && JG.length !== rG.length) return JG.length < rG.length
          }
          return !(SG && !kG)
        }(hG, "7.0.0"),
        WG = UG(UG(UG(UG(UG(UG({
          "fa-beat": bG,
          "fa-fade": ZG,
          "fa-beat-fade": wG,
          "fa-bounce": SG,
          "fa-shake": LG,
          "fa-flash": yG,
          "fa-spin": kG,
          "fa-spin-reverse": VG,
          "fa-spin-pulse": YG,
          "fa-pulse": fG,
          "fa-fw": QG,
          "fa-inverse": KG,
          "fa-border": dG,
          "fa-li": JG,
          "fa-flip": !0 === rG,
          "fa-flip-horizontal": "horizontal" === rG || "both" === rG,
          "fa-flip-vertical": "vertical" === rG || "both" === rG
        }, "fa-".concat(zG), "undefined" !== typeof zG && null !== zG), "fa-rotate-".concat(EG), "undefined" !== typeof EG && null !== EG && 0 !== EG), "fa-pull-".concat(oG), "undefined" !== typeof oG && null !== oG), "fa-swap-opacity", XG), "fa-rotate-by", CG && uG), "fa-width-auto", CG && iG);
      return Object.keys(WG).map((function(GG) {
        return WG[GG] ? GG : null
      })).filter((function(GG) {
        return GG
      }))
    }

    function rG(GG) {
      return bG = GG, (bG -= 0) === bG ? GG : (GG = GG.replace(/[\-_\s]+(.)?/g, (function(GG, bG) {
        return bG ? bG.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + GG.substr(1);
      var bG
    }
    var zG = ["style"];
    var EG = !1;
    try {
      EG = !0
    } catch (WG) {}

    function oG(GG) {
      return GG && "object" === QG(GG) && GG.prefix && GG.iconName && GG.icon ? GG : wG.parse.icon ? wG.parse.icon(GG) : null === GG ? null : GG && "object" === QG(GG) && GG.prefix && GG.iconName ? GG : Array.isArray(GG) && 2 === GG.length ? {
        prefix: GG[0],
        iconName: GG[1]
      } : "string" === typeof GG ? {
        prefix: "fas",
        iconName: GG
      } : void 0
    }

    function XG(GG, bG) {
      return Array.isArray(bG) && bG.length > 0 || !Array.isArray(bG) && bG ? UG({}, GG, bG) : {}
    }
    var uG = {
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
      iG = yG.forwardRef((function(GG, bG) {
        var ZG = VG(VG({}, uG), GG),
          SG = ZG.icon,
          LG = ZG.mask,
          yG = ZG.symbol,
          kG = ZG.className,
          UG = ZG.title,
          YG = ZG.titleId,
          pG = ZG.maskId,
          QG = oG(SG),
          KG = XG("classes", [].concat(fG(JG(ZG)), fG((kG || "").split(" ")))),
          hG = XG("transform", "string" === typeof ZG.transform ? wG.parse.transform(ZG.transform) : ZG.transform),
          dG = XG("mask", oG(LG)),
          rG = (0, wG.icon)(QG, VG(VG(VG(VG({}, KG), hG), dG), {}, {
            symbol: yG,
            title: UG,
            titleId: YG,
            maskId: pG
          }));
        if (!rG) return function() {
          var GG;
          !EG && console && "function" === typeof console.error && (GG = console).error.apply(GG, arguments)
        }("Could not find icon", QG), null;
        var zG = rG.abstract,
          iG = {
            ref: bG
          };
        return Object.keys(ZG).forEach((function(GG) {
          uG.hasOwnProperty(GG) || (iG[GG] = ZG[GG])
        })), CG(zG[0], iG)
      }));
    iG.displayName = "FontAwesomeIcon", iG.propTypes = {
      beat: LG().bool,
      border: LG().bool,
      beatFade: LG().bool,
      bounce: LG().bool,
      className: LG().string,
      fade: LG().bool,
      flash: LG().bool,
      mask: LG().oneOfType([LG().object, LG().array, LG().string]),
      maskId: LG().string,
      fixedWidth: LG().bool,
      inverse: LG().bool,
      flip: LG().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: LG().oneOfType([LG().object, LG().array, LG().string]),
      listItem: LG().bool,
      pull: LG().oneOf(["right", "left"]),
      pulse: LG().bool,
      rotation: LG().oneOf([0, 90, 180, 270]),
      rotateBy: LG().bool,
      shake: LG().bool,
      size: LG().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: LG().bool,
      spinPulse: LG().bool,
      spinReverse: LG().bool,
      symbol: LG().oneOfType([LG().bool, LG().string]),
      title: LG().string,
      titleId: LG().string,
      transform: LG().oneOfType([LG().string, LG().object]),
      swapOpacity: LG().bool,
      widthAuto: LG().bool
    };
    var CG = function GG(bG, ZG) {
      var wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof ZG) return ZG;
      var SG = (ZG.children || []).map((function(ZG) {
          return GG(bG, ZG)
        })),
        LG = Object.keys(ZG.attributes || {}).reduce((function(GG, bG) {
          var wG = ZG.attributes[bG];
          switch (bG) {
            case "class":
              GG.attrs.className = wG, delete ZG.attributes.class;
              break;
            case "style":
              GG.attrs.style = wG.split(";").map((function(GG) {
                return GG.trim()
              })).filter((function(GG) {
                return GG
              })).reduce((function(GG, bG) {
                var ZG, wG = bG.indexOf(":"),
                  SG = rG(bG.slice(0, wG)),
                  LG = bG.slice(wG + 1).trim();
                return SG.startsWith("webkit") ? GG[(ZG = SG, ZG.charAt(0).toUpperCase() + ZG.slice(1))] = LG : GG[SG] = LG, GG
              }), {});
              break;
            default:
              0 === bG.indexOf("aria-") || 0 === bG.indexOf("data-") ? GG.attrs[bG.toLowerCase()] = wG : GG.attrs[rG(bG)] = wG
          }
          return GG
        }), {
          attrs: {}
        }),
        yG = wG.style,
        kG = void 0 === yG ? {} : yG,
        UG = function(GG, bG) {
          if (null == GG) return {};
          var ZG, wG, SG = function(GG, bG) {
            if (null == GG) return {};
            var ZG = {};
            for (var wG in GG)
              if ({}.hasOwnProperty.call(GG, wG)) {
                if (-1 !== bG.indexOf(wG)) continue;
                ZG[wG] = GG[wG]
              } return ZG
          }(GG, bG);
          if (Object.getOwnPropertySymbols) {
            var LG = Object.getOwnPropertySymbols(GG);
            for (wG = 0; wG < LG.length; wG++) ZG = LG[wG], -1 === bG.indexOf(ZG) && {}.propertyIsEnumerable.call(GG, ZG) && (SG[ZG] = GG[ZG])
          }
          return SG
        }(wG, zG);
      return LG.attrs.style = VG(VG({}, LG.attrs.style), kG), bG.apply(void 0, [ZG.tag, VG(VG({}, LG.attrs), UG)].concat(fG(SG)))
    }.bind(null, yG.createElement)
  },
  4993: (GG, bG, ZG) => {
    var wG = ZG(4997);

    function SG() {}

    function LG() {}
    LG.resetWarningCache = SG, GG.exports = function() {
      function GG(GG, bG, ZG, SG, LG, yG) {
        if (yG !== wG) {
          var kG = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw kG.name = "Invariant Violation", kG
        }
      }

      function bG() {
        return GG
      }
      GG.isRequired = GG;
      var ZG = {
        array: GG,
        bigint: GG,
        bool: GG,
        func: GG,
        number: GG,
        object: GG,
        string: GG,
        symbol: GG,
        any: GG,
        arrayOf: bG,
        element: GG,
        elementType: GG,
        instanceOf: bG,
        node: GG,
        objectOf: bG,
        oneOf: bG,
        oneOfType: bG,
        shape: bG,
        exact: bG,
        checkPropTypes: LG,
        resetWarningCache: SG
      };
      return ZG.PropTypes = ZG, ZG
    }
  },
  4985: (GG, bG, ZG) => {
    GG.exports = ZG(4993)()
  },
  4997: GG => {
    GG.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6685: (GG, bG, ZG) => {
    function wG(GG, bG) {
      (null == bG || bG > GG.length) && (bG = GG.length);
      for (var ZG = 0, wG = Array(bG); ZG < bG; ZG++) wG[ZG] = GG[ZG];
      return wG
    }

    function SG(GG, bG) {
      for (var ZG = 0; ZG < bG.length; ZG++) {
        var wG = bG[ZG];
        wG.enumerable = wG.enumerable || !1, wG.configurable = !0, "value" in wG && (wG.writable = !0), Object.defineProperty(GG, pG(wG.key), wG)
      }
    }

    function LG(GG, bG) {
      var ZG = "undefined" != typeof Symbol && GG[Symbol.iterator] || GG["@@iterator"];
      if (!ZG) {
        if (Array.isArray(GG) || (ZG = QG(GG)) || bG && GG && "number" == typeof GG.length) {
          ZG && (GG = ZG);
          var wG = 0,
            SG = function() {};
          return {
            s: SG,
            n: function() {
              return wG >= GG.length ? {
                done: !0
              } : {
                done: !1,
                value: GG[wG++]
              }
            },
            e: function(GG) {
              throw GG
            },
            f: SG
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var LG, yG = !0,
        kG = !1;
      return {
        s: function() {
          ZG = ZG.call(GG)
        },
        n: function() {
          var GG = ZG.next();
          return yG = GG.done, GG
        },
        e: function(GG) {
          kG = !0, LG = GG
        },
        f: function() {
          try {
            yG || null == ZG.return || ZG.return()
          } finally {
            if (kG) throw LG
          }
        }
      }
    }

    function yG(GG, bG, ZG) {
      return (bG = pG(bG)) in GG ? Object.defineProperty(GG, bG, {
        value: ZG,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : GG[bG] = ZG, GG
    }

    function kG(GG, bG) {
      var ZG = Object.keys(GG);
      if (Object.getOwnPropertySymbols) {
        var wG = Object.getOwnPropertySymbols(GG);
        bG && (wG = wG.filter((function(bG) {
          return Object.getOwnPropertyDescriptor(GG, bG).enumerable
        }))), ZG.push.apply(ZG, wG)
      }
      return ZG
    }

    function UG(GG) {
      for (var bG = 1; bG < arguments.length; bG++) {
        var ZG = null != arguments[bG] ? arguments[bG] : {};
        bG % 2 ? kG(Object(ZG), !0).forEach((function(bG) {
          yG(GG, bG, ZG[bG])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(GG, Object.getOwnPropertyDescriptors(ZG)) : kG(Object(ZG)).forEach((function(bG) {
          Object.defineProperty(GG, bG, Object.getOwnPropertyDescriptor(ZG, bG))
        }))
      }
      return GG
    }

    function YG(GG, bG) {
      return function(GG) {
        if (Array.isArray(GG)) return GG
      }(GG) || function(GG, bG) {
        var ZG = null == GG ? null : "undefined" != typeof Symbol && GG[Symbol.iterator] || GG["@@iterator"];
        if (null != ZG) {
          var wG, SG, LG, yG, kG = [],
            UG = !0,
            YG = !1;
          try {
            if (LG = (ZG = ZG.call(GG)).next, 0 === bG) {
              if (Object(ZG) !== ZG) return;
              UG = !1
            } else
              for (; !(UG = (wG = LG.call(ZG)).done) && (kG.push(wG.value), kG.length !== bG); UG = !0);
          } catch (GG) {
            YG = !0, SG = GG
          } finally {
            try {
              if (!UG && null != ZG.return && (yG = ZG.return(), Object(yG) !== yG)) return
            } finally {
              if (YG) throw SG
            }
          }
          return kG
        }
      }(GG, bG) || QG(GG, bG) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function VG(GG) {
      return function(GG) {
        if (Array.isArray(GG)) return wG(GG)
      }(GG) || function(GG) {
        if ("undefined" != typeof Symbol && null != GG[Symbol.iterator] || null != GG["@@iterator"]) return Array.from(GG)
      }(GG) || QG(GG) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pG(GG) {
      var bG = function(GG, bG) {
        if ("object" != typeof GG || !GG) return GG;
        var ZG = GG[Symbol.toPrimitive];
        if (void 0 !== ZG) {
          var wG = ZG.call(GG, bG || "default");
          if ("object" != typeof wG) return wG;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === bG ? String : Number)(GG)
      }(GG, "string");
      return "symbol" == typeof bG ? bG : bG + ""
    }

    function fG(GG) {
      return fG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(GG) {
        return typeof GG
      } : function(GG) {
        return GG && "function" == typeof Symbol && GG.constructor === Symbol && GG !== Symbol.prototype ? "symbol" : typeof GG
      }, fG(GG)
    }

    function QG(GG, bG) {
      if (GG) {
        if ("string" == typeof GG) return wG(GG, bG);
        var ZG = {}.toString.call(GG).slice(8, -1);
        return "Object" === ZG && GG.constructor && (ZG = GG.constructor.name), "Map" === ZG || "Set" === ZG ? Array.from(GG) : "Arguments" === ZG || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZG) ? wG(GG, bG) : void 0
      }
    }
    ZG.r(bG), ZG.d(bG, {
      api: () => NZ,
      config: () => wS,
      counter: () => fS,
      dom: () => LS,
      findIconDefinition: () => kS,
      icon: () => YS,
      layer: () => VS,
      library: () => SS,
      noAuto: () => ZS,
      parse: () => yS,
      text: () => pS,
      toHtml: () => US
    });
    var KG = function() {},
      hG = {},
      dG = {},
      JG = null,
      rG = {
        mark: KG,
        measure: KG
      };
    try {
      "undefined" !== typeof window && (hG = window), "undefined" !== typeof document && (dG = document), "undefined" !== typeof MutationObserver && (JG = MutationObserver), "undefined" !== typeof performance && (rG = performance)
    } catch (eG) {}
    var zG, EG, oG = (hG.navigator || {}).userAgent,
      XG = void 0 === oG ? "" : oG,
      uG = hG,
      iG = dG,
      CG = JG,
      WG = rG,
      mG = (uG.document, !!iG.documentElement && !!iG.head && "function" === typeof iG.addEventListener && "function" === typeof iG.createElement),
      IG = ~XG.indexOf("MSIE") || ~XG.indexOf("Trident/"),
      FG = {
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
      vG = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      aG = "classic",
      cG = "duotone",
      lG = "sharp",
      jG = "sharp-duotone",
      PG = "chisel",
      MG = "etch",
      AG = "graphite",
      sG = "jelly",
      qG = "jelly-duo",
      nG = "jelly-fill",
      gG = "notdog",
      eG = "notdog-duo",
      RG = "slab",
      TG = "slab-press",
      HG = "thumbprint",
      tG = "utility",
      DG = "utility-duo",
      NG = "utility-fill",
      OG = "whiteboard",
      xG = [aG, cG, lG, jG, PG, MG, AG, sG, qG, nG, gG, eG, RG, TG, HG, tG, DG, NG, OG],
      BG = (yG(yG(yG(yG(yG(yG(yG(yG(yG(yG(zG = {}, aG, "Classic"), cG, "Duotone"), lG, "Sharp"), jG, "Sharp Duotone"), PG, "Chisel"), MG, "Etch"), AG, "Graphite"), sG, "Jelly"), qG, "Jelly Duo"), nG, "Jelly Fill"), yG(yG(yG(yG(yG(yG(yG(yG(yG(zG, gG, "Notdog"), eG, "Notdog Duo"), RG, "Slab"), TG, "Slab Press"), HG, "Thumbprint"), tG, "Utility"), DG, "Utility Duo"), NG, "Utility Fill"), OG, "Whiteboard"), new Map([
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
      Gb = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      bb = {
        fak: "kit",
        "fa-kit": "kit"
      },
      Zb = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      wb = (yG(yG({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      Sb = {
        "kit-duotone": "fakd"
      },
      Lb = "duotone-group",
      yb = "swap-opacity",
      kb = "primary",
      Ub = "secondary",
      Yb = (yG(yG(yG(yG(yG(yG(yG(yG(yG(yG(EG = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), yG(yG(yG(yG(yG(yG(yG(yG(yG(EG, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), yG(yG({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      Vb = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      pb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      fb = pb.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      Qb = [].concat(VG(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", Lb, yb, kb, Ub]).concat(pb.map((function(GG) {
        return "".concat(GG, "x")
      }))).concat(fb.map((function(GG) {
        return "w-".concat(GG)
      }))),
      Kb = "___FONT_AWESOME___",
      hb = "svg-inline--fa",
      db = "data-fa-i2svg",
      Jb = "data-fa-pseudo-element",
      rb = "data-prefix",
      zb = "data-icon",
      Eb = "fontawesome-i2svg",
      ob = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      Xb = ["::before", "::after", ":before", ":after"],
      ub = function() {
        try {
          return !0
        } catch (GG) {
          return !1
        }
      }();

    function ib(GG) {
      return new Proxy(GG, {
        get: function(GG, bG) {
          return bG in GG ? GG[bG] : GG[aG]
        }
      })
    }
    var Cb = UG({}, FG);
    Cb[aG] = UG(UG(UG(UG({}, {
      "fa-duotone": "duotone"
    }), FG[aG]), bb), Zb);
    var Wb = ib(Cb),
      mb = UG({}, {
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
    mb[aG] = UG(UG(UG(UG({}, {
      duotone: "fad"
    }), mb[aG]), wb), Sb);
    var Ib = ib(mb),
      Fb = UG({}, Yb);
    Fb[aG] = UG(UG({}, Fb[aG]), {
      fak: "fa-kit"
    });
    var vb = ib(Fb),
      ab = UG({}, {
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
    ab[aG] = UG(UG({}, ab[aG]), {
      "fa-kit": "fak"
    });
    ib(ab);
    var cb = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      lb = "fa-layers-text",
      jb = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Pb = (ib(UG({}, {
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
      Mb = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      Ab = [].concat(VG(["kit"]), VG(Qb)),
      sb = uG.FontAwesomeConfig || {};
    if (iG && "function" === typeof iG.querySelector) {
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
      ].forEach((function(GG) {
        var bG = YG(GG, 2),
          ZG = bG[0],
          wG = bG[1],
          SG = function(GG) {
            return "" === GG || "false" !== GG && ("true" === GG || GG)
          }(function(GG) {
            var bG = iG.querySelector("script[" + GG + "]");
            if (bG) return bG.getAttribute(GG)
          }(ZG));
        void 0 !== SG && null !== SG && (sb[wG] = SG)
      }))
    }
    var qb = {
      styleDefault: "solid",
      familyDefault: aG,
      cssPrefix: "fa",
      replacementClass: hb,
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
    sb.familyPrefix && (sb.cssPrefix = sb.familyPrefix);
    var nb = UG(UG({}, qb), sb);
    nb.autoReplaceSvg || (nb.observeMutations = !1);
    var gb = {};
    Object.keys(qb).forEach((function(GG) {
      Object.defineProperty(gb, GG, {
        enumerable: !0,
        set: function(bG) {
          nb[GG] = bG, eb.forEach((function(GG) {
            return GG(gb)
          }))
        },
        get: function() {
          return nb[GG]
        }
      })
    })), Object.defineProperty(gb, "familyPrefix", {
      enumerable: !0,
      set: function(GG) {
        nb.cssPrefix = GG, eb.forEach((function(GG) {
          return GG(gb)
        }))
      },
      get: function() {
        return nb.cssPrefix
      }
    }), uG.FontAwesomeConfig = gb;
    var eb = [];
    var Rb = 16,
      Tb = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function Hb() {
      for (var GG = 12, bG = ""; GG-- > 0;) bG += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return bG
    }

    function tb(GG) {
      for (var bG = [], ZG = (GG || []).length >>> 0; ZG--;) bG[ZG] = GG[ZG];
      return bG
    }

    function Db(GG) {
      return GG.classList ? tb(GG.classList) : (GG.getAttribute("class") || "").split(" ").filter((function(GG) {
        return GG
      }))
    }

    function Nb(GG) {
      return "".concat(GG).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Ob(GG) {
      return Object.keys(GG || {}).reduce((function(bG, ZG) {
        return bG + "".concat(ZG, ": ").concat(GG[ZG].trim(), ";")
      }), "")
    }

    function xb(GG) {
      return GG.size !== Tb.size || GG.x !== Tb.x || GG.y !== Tb.y || GG.rotate !== Tb.rotate || GG.flipX || GG.flipY
    }

    function Bb() {
      var GG = "fa",
        bG = hb,
        ZG = gb.cssPrefix,
        wG = gb.replacementClass,
        SG = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (ZG !== GG || wG !== bG) {
        var LG = new RegExp("\\.".concat(GG, "\\-"), "g"),
          yG = new RegExp("\\--".concat(GG, "\\-"), "g"),
          kG = new RegExp("\\.".concat(bG), "g");
        SG = SG.replace(LG, ".".concat(ZG, "-")).replace(yG, "--".concat(ZG, "-")).replace(kG, ".".concat(wG))
      }
      return SG
    }
    var GZ = !1;

    function bZ() {
      gb.autoAddCss && !GZ && (! function(GG) {
        if (GG && mG) {
          var bG = iG.createElement("style");
          bG.setAttribute("type", "text/css"), bG.innerHTML = GG;
          for (var ZG = iG.head.childNodes, wG = null, SG = ZG.length - 1; SG > -1; SG--) {
            var LG = ZG[SG],
              yG = (LG.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(yG) > -1 && (wG = LG)
          }
          iG.head.insertBefore(bG, wG)
        }
      }(Bb()), GZ = !0)
    }
    var ZZ = {
        mixout: function() {
          return {
            dom: {
              css: Bb,
              insertCss: bZ
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              bZ()
            },
            beforeI2svg: function() {
              bZ()
            }
          }
        }
      },
      wZ = uG || {};
    wZ[Kb] || (wZ[Kb] = {}), wZ[Kb].styles || (wZ[Kb].styles = {}), wZ[Kb].hooks || (wZ[Kb].hooks = {}), wZ[Kb].shims || (wZ[Kb].shims = []);
    var SZ = wZ[Kb],
      LZ = [],
      yZ = function() {
        iG.removeEventListener("DOMContentLoaded", yZ), kZ = 1, LZ.map((function(GG) {
          return GG()
        }))
      },
      kZ = !1;

    function UZ(GG) {
      var bG = GG.tag,
        ZG = GG.attributes,
        wG = void 0 === ZG ? {} : ZG,
        SG = GG.children,
        LG = void 0 === SG ? [] : SG;
      return "string" === typeof GG ? Nb(GG) : "<".concat(bG, " ").concat(function(GG) {
        return Object.keys(GG || {}).reduce((function(bG, ZG) {
          return bG + "".concat(ZG, '="').concat(Nb(GG[ZG]), '" ')
        }), "").trim()
      }(wG), ">").concat(LG.map(UZ).join(""), "</").concat(bG, ">")
    }

    function YZ(GG, bG, ZG) {
      if (GG && GG[bG] && GG[bG][ZG]) return {
        prefix: bG,
        iconName: ZG,
        icon: GG[bG][ZG]
      }
    }
    mG && ((kZ = (iG.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(iG.readyState)) || iG.addEventListener("DOMContentLoaded", yZ));
    var VZ = function(GG, bG, ZG, wG) {
      var SG, LG, yG, kG = Object.keys(GG),
        UG = kG.length,
        YG = void 0 !== wG ? function(GG, bG) {
          return function(ZG, wG, SG, LG) {
            return GG.call(bG, ZG, wG, SG, LG)
          }
        }(bG, wG) : bG;
      for (void 0 === ZG ? (SG = 1, yG = GG[kG[0]]) : (SG = 0, yG = ZG); SG < UG; SG++) yG = YG(yG, GG[LG = kG[SG]], LG, GG);
      return yG
    };

    function pZ(GG) {
      return 1 !== VG(GG).length ? null : GG.codePointAt(0).toString(16)
    }

    function fZ(GG) {
      return Object.keys(GG).reduce((function(bG, ZG) {
        var wG = GG[ZG];
        return !!wG.icon ? bG[wG.iconName] = wG.icon : bG[ZG] = wG, bG
      }), {})
    }

    function QZ(GG, bG) {
      var ZG = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        wG = void 0 !== ZG && ZG,
        SG = fZ(bG);
      "function" !== typeof SZ.hooks.addPack || wG ? SZ.styles[GG] = UG(UG({}, SZ.styles[GG] || {}), SG) : SZ.hooks.addPack(GG, fZ(bG)), "fas" === GG && QZ("fa", bG)
    }
    var KZ = SZ.styles,
      hZ = SZ.shims,
      dZ = Object.keys(vb),
      JZ = dZ.reduce((function(GG, bG) {
        return GG[bG] = Object.keys(vb[bG]), GG
      }), {}),
      rZ = null,
      zZ = {},
      EZ = {},
      oZ = {},
      XZ = {},
      uZ = {};

    function iZ(GG, bG) {
      var ZG, wG = bG.split("-"),
        SG = wG[0],
        LG = wG.slice(1).join("-");
      return SG !== GG || "" === LG || (ZG = LG, ~Ab.indexOf(ZG)) ? null : LG
    }
    var CZ, WZ = function() {
      var GG = function(GG) {
        return VZ(KZ, (function(bG, ZG, wG) {
          return bG[wG] = VZ(ZG, GG, {}), bG
        }), {})
      };
      zZ = GG((function(GG, bG, ZG) {
        (bG[3] && (GG[bG[3]] = ZG), bG[2]) && bG[2].filter((function(GG) {
          return "number" === typeof GG
        })).forEach((function(bG) {
          GG[bG.toString(16)] = ZG
        }));
        return GG
      })), EZ = GG((function(GG, bG, ZG) {
        (GG[ZG] = ZG, bG[2]) && bG[2].filter((function(GG) {
          return "string" === typeof GG
        })).forEach((function(bG) {
          GG[bG] = ZG
        }));
        return GG
      })), uZ = GG((function(GG, bG, ZG) {
        var wG = bG[2];
        return GG[ZG] = ZG, wG.forEach((function(bG) {
          GG[bG] = ZG
        })), GG
      }));
      var bG = "far" in KZ || gb.autoFetchSvg,
        ZG = VZ(hZ, (function(GG, ZG) {
          var wG = ZG[0],
            SG = ZG[1],
            LG = ZG[2];
          return "far" !== SG || bG || (SG = "fas"), "string" === typeof wG && (GG.names[wG] = {
            prefix: SG,
            iconName: LG
          }), "number" === typeof wG && (GG.unicodes[wG.toString(16)] = {
            prefix: SG,
            iconName: LG
          }), GG
        }), {
          names: {},
          unicodes: {}
        });
      oZ = ZG.names, XZ = ZG.unicodes, rZ = aZ(gb.styleDefault, {
        family: gb.familyDefault
      })
    };

    function mZ(GG, bG) {
      return (zZ[GG] || {})[bG]
    }

    function IZ(GG, bG) {
      return (uZ[GG] || {})[bG]
    }

    function FZ(GG) {
      return oZ[GG] || {
        prefix: null,
        iconName: null
      }
    }

    function vZ() {
      return rZ
    }
    CZ = function(GG) {
      rZ = aZ(GG.styleDefault, {
        family: gb.familyDefault
      })
    }, eb.push(CZ), WZ();

    function aZ(GG) {
      var bG = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        ZG = void 0 === bG ? aG : bG,
        wG = Wb[ZG][GG];
      if (ZG === cG && !GG) return "fad";
      var SG = Ib[ZG][GG] || Ib[ZG][wG],
        LG = GG in SZ.styles ? GG : null;
      return SG || LG || null
    }

    function cZ(GG) {
      return GG.sort().filter((function(GG, bG, ZG) {
        return ZG.indexOf(GG) === bG
      }))
    }
    var lZ = Vb.concat(Gb);

    function jZ(GG) {
      var bG = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        ZG = void 0 !== bG && bG,
        wG = null,
        SG = cZ(GG.filter((function(GG) {
          return lZ.includes(GG)
        }))),
        LG = cZ(GG.filter((function(GG) {
          return !lZ.includes(GG)
        }))),
        yG = YG(SG.filter((function(GG) {
          return wG = GG, !vG.includes(GG)
        })), 1)[0],
        kG = void 0 === yG ? null : yG,
        VG = function(GG) {
          var bG = aG,
            ZG = dZ.reduce((function(GG, bG) {
              return GG[bG] = "".concat(gb.cssPrefix, "-").concat(bG), GG
            }), {});
          return xG.forEach((function(wG) {
            (GG.includes(ZG[wG]) || GG.some((function(GG) {
              return JZ[wG].includes(GG)
            }))) && (bG = wG)
          })), bG
        }(SG),
        pG = UG(UG({}, function(GG) {
          var bG = [],
            ZG = null;
          return GG.forEach((function(GG) {
            var wG = iZ(gb.cssPrefix, GG);
            wG ? ZG = wG : GG && bG.push(GG)
          })), {
            iconName: ZG,
            rest: bG
          }
        }(LG)), {}, {
          prefix: aZ(kG, {
            family: VG
          })
        });
      return UG(UG(UG({}, pG), function(GG) {
        var bG = GG.values,
          ZG = GG.family,
          wG = GG.canonical,
          SG = GG.givenPrefix,
          LG = void 0 === SG ? "" : SG,
          yG = GG.styles,
          kG = void 0 === yG ? {} : yG,
          UG = GG.config,
          YG = void 0 === UG ? {} : UG,
          VG = ZG === cG,
          pG = bG.includes("fa-duotone") || bG.includes("fad"),
          fG = "duotone" === YG.familyDefault,
          QG = "fad" === wG.prefix || "fa-duotone" === wG.prefix;
        !VG && (pG || fG || QG) && (wG.prefix = "fad");
        (bG.includes("fa-brands") || bG.includes("fab")) && (wG.prefix = "fab");
        if (!wG.prefix && PZ.includes(ZG)) {
          if (Object.keys(kG).find((function(GG) {
              return MZ.includes(GG)
            })) || YG.autoFetchSvg) {
            var KG = BG.get(ZG).defaultShortPrefixId;
            wG.prefix = KG, wG.iconName = IZ(wG.prefix, wG.iconName) || wG.iconName
          }
        }
        "fa" !== wG.prefix && "fa" !== LG || (wG.prefix = vZ() || "fas");
        return wG
      }({
        values: GG,
        family: VG,
        styles: KZ,
        config: gb,
        canonical: pG,
        givenPrefix: wG
      })), function(GG, bG, ZG) {
        var wG = ZG.prefix,
          SG = ZG.iconName;
        if (GG || !wG || !SG) return {
          prefix: wG,
          iconName: SG
        };
        var LG = "fa" === bG ? FZ(SG) : {},
          yG = IZ(wG, SG);
        SG = LG.iconName || yG || SG, "far" !== (wG = LG.prefix || wG) || KZ.far || !KZ.fas || gb.autoFetchSvg || (wG = "fas");
        return {
          prefix: wG,
          iconName: SG
        }
      }(ZG, wG, pG))
    }
    var PZ = xG.filter((function(GG) {
        return GG !== aG || GG !== cG
      })),
      MZ = Object.keys(Yb).filter((function(GG) {
        return GG !== aG
      })).map((function(GG) {
        return Object.keys(Yb[GG])
      })).flat();
    var AZ = function() {
        return function(GG, bG, ZG) {
          return bG && SG(GG.prototype, bG), ZG && SG(GG, ZG), Object.defineProperty(GG, "prototype", {
            writable: !1
          }), GG
        }((function GG() {
          ! function(GG, bG) {
            if (!(GG instanceof bG)) throw new TypeError("Cannot call a class as a function")
          }(this, GG), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var GG = this, bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
            var SG = ZG.reduce(this._pullDefinitions, {});
            Object.keys(SG).forEach((function(bG) {
              GG.definitions[bG] = UG(UG({}, GG.definitions[bG] || {}), SG[bG]), QZ(bG, SG[bG]);
              var ZG = vb[aG][bG];
              ZG && QZ(ZG, SG[bG]), WZ()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(GG, bG) {
            var ZG = bG.prefix && bG.iconName && bG.icon ? {
              0: bG
            } : bG;
            return Object.keys(ZG).map((function(bG) {
              var wG = ZG[bG],
                SG = wG.prefix,
                LG = wG.iconName,
                yG = wG.icon,
                kG = yG[2];
              GG[SG] || (GG[SG] = {}), kG.length > 0 && kG.forEach((function(bG) {
                "string" === typeof bG && (GG[SG][bG] = yG)
              })), GG[SG][LG] = yG
            })), GG
          }
        }])
      }(),
      sZ = [],
      qZ = {},
      nZ = {},
      gZ = Object.keys(nZ);

    function eZ(GG, bG) {
      for (var ZG = arguments.length, wG = new Array(ZG > 2 ? ZG - 2 : 0), SG = 2; SG < ZG; SG++) wG[SG - 2] = arguments[SG];
      return (qZ[GG] || []).forEach((function(GG) {
        bG = GG.apply(null, [bG].concat(wG))
      })), bG
    }

    function RZ(GG) {
      for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), wG = 1; wG < bG; wG++) ZG[wG - 1] = arguments[wG];
      (qZ[GG] || []).forEach((function(GG) {
        GG.apply(null, ZG)
      }))
    }

    function TZ() {
      var GG = arguments[0],
        bG = Array.prototype.slice.call(arguments, 1);
      return nZ[GG] ? nZ[GG].apply(null, bG) : void 0
    }

    function HZ(GG) {
      "fa" === GG.prefix && (GG.prefix = "fas");
      var bG = GG.iconName,
        ZG = GG.prefix || vZ();
      if (bG) return bG = IZ(ZG, bG) || bG, YZ(tZ.definitions, ZG, bG) || YZ(SZ.styles, ZG, bG)
    }
    var tZ = new AZ,
      DZ = {
        i2svg: function() {
          var GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return mG ? (RZ("beforeI2svg", GG), TZ("pseudoElements2svg", GG), TZ("i2svg", GG)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var GG, bG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            ZG = bG.autoReplaceSvgRoot;
          !1 === gb.autoReplaceSvg && (gb.autoReplaceSvg = !0), gb.observeMutations = !0, GG = function() {
            OZ({
              autoReplaceSvgRoot: ZG
            }), RZ("watch", bG)
          }, mG && (kZ ? setTimeout(GG, 0) : LZ.push(GG))
        }
      },
      NZ = {
        noAuto: function() {
          gb.autoReplaceSvg = !1, gb.observeMutations = !1, RZ("noAuto")
        },
        config: gb,
        dom: DZ,
        parse: {
          icon: function(GG) {
            if (null === GG) return null;
            if ("object" === fG(GG) && GG.prefix && GG.iconName) return {
              prefix: GG.prefix,
              iconName: IZ(GG.prefix, GG.iconName) || GG.iconName
            };
            if (Array.isArray(GG) && 2 === GG.length) {
              var bG = 0 === GG[1].indexOf("fa-") ? GG[1].slice(3) : GG[1],
                ZG = aZ(GG[0]);
              return {
                prefix: ZG,
                iconName: IZ(ZG, bG) || bG
              }
            }
            if ("string" === typeof GG && (GG.indexOf("".concat(gb.cssPrefix, "-")) > -1 || GG.match(cb))) {
              var wG = jZ(GG.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: wG.prefix || vZ(),
                iconName: IZ(wG.prefix, wG.iconName) || wG.iconName
              }
            }
            if ("string" === typeof GG) {
              var SG = vZ();
              return {
                prefix: SG,
                iconName: IZ(SG, GG) || GG
              }
            }
          }
        },
        library: tZ,
        findIconDefinition: HZ,
        toHtml: UZ
      },
      OZ = function() {
        var GG = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          bG = void 0 === GG ? iG : GG;
        (Object.keys(SZ.styles).length > 0 || gb.autoFetchSvg) && mG && gb.autoReplaceSvg && NZ.dom.i2svg({
          node: bG
        })
      };

    function xZ(GG, bG) {
      return Object.defineProperty(GG, "abstract", {
        get: bG
      }), Object.defineProperty(GG, "html", {
        get: function() {
          return GG.abstract.map((function(GG) {
            return UZ(GG)
          }))
        }
      }), Object.defineProperty(GG, "node", {
        get: function() {
          if (mG) {
            var bG = iG.createElement("div");
            return bG.innerHTML = GG.html, bG.children
          }
        }
      }), GG
    }

    function BZ(GG) {
      var bG = GG.icons,
        ZG = bG.main,
        wG = bG.mask,
        SG = GG.prefix,
        LG = GG.iconName,
        yG = GG.transform,
        kG = GG.symbol,
        YG = GG.maskId,
        VG = GG.extra,
        pG = GG.watchable,
        fG = void 0 !== pG && pG,
        QG = wG.found ? wG : ZG,
        KG = QG.width,
        hG = QG.height,
        dG = [gb.replacementClass, LG ? "".concat(gb.cssPrefix, "-").concat(LG) : ""].filter((function(GG) {
          return -1 === VG.classes.indexOf(GG)
        })).filter((function(GG) {
          return "" !== GG || !!GG
        })).concat(VG.classes).join(" "),
        JG = {
          children: [],
          attributes: UG(UG({}, VG.attributes), {}, {
            "data-prefix": SG,
            "data-icon": LG,
            class: dG,
            role: VG.attributes.role || "img",
            viewBox: "0 0 ".concat(KG, " ").concat(hG)
          })
        };
      (function(GG) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(bG) {
          return bG in GG
        }))
      })(VG.attributes) || VG.attributes["aria-hidden"] || (JG.attributes["aria-hidden"] = "true"), fG && (JG.attributes[db] = "");
      var rG = UG(UG({}, JG), {}, {
          prefix: SG,
          iconName: LG,
          main: ZG,
          mask: wG,
          maskId: YG,
          transform: yG,
          symbol: kG,
          styles: UG({}, VG.styles)
        }),
        zG = wG.found && ZG.found ? TZ("generateAbstractMask", rG) || {
          children: [],
          attributes: {}
        } : TZ("generateAbstractIcon", rG) || {
          children: [],
          attributes: {}
        },
        EG = zG.children,
        oG = zG.attributes;
      return rG.children = EG, rG.attributes = oG, kG ? function(GG) {
        var bG = GG.prefix,
          ZG = GG.iconName,
          wG = GG.children,
          SG = GG.attributes,
          LG = GG.symbol,
          yG = !0 === LG ? "".concat(bG, "-").concat(gb.cssPrefix, "-").concat(ZG) : LG;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: UG(UG({}, SG), {}, {
              id: yG
            }),
            children: wG
          }]
        }]
      }(rG) : function(GG) {
        var bG = GG.children,
          ZG = GG.main,
          wG = GG.mask,
          SG = GG.attributes,
          LG = GG.styles,
          yG = GG.transform;
        if (xb(yG) && ZG.found && !wG.found) {
          var kG = {
            x: ZG.width / ZG.height / 2,
            y: .5
          };
          SG.style = Ob(UG(UG({}, LG), {}, {
            "transform-origin": "".concat(kG.x + yG.x / 16, "em ").concat(kG.y + yG.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: SG,
          children: bG
        }]
      }(rG)
    }

    function Gw(GG) {
      var bG = GG.content,
        ZG = GG.width,
        wG = GG.height,
        SG = GG.transform,
        LG = GG.extra,
        yG = GG.watchable,
        kG = void 0 !== yG && yG,
        YG = UG(UG({}, LG.attributes), {}, {
          class: LG.classes.join(" ")
        });
      kG && (YG[db] = "");
      var VG = UG({}, LG.styles);
      xb(SG) && (VG.transform = function(GG) {
        var bG = GG.transform,
          ZG = GG.width,
          wG = void 0 === ZG ? 16 : ZG,
          SG = GG.height,
          LG = void 0 === SG ? 16 : SG,
          yG = GG.startCentered,
          kG = void 0 !== yG && yG,
          UG = "";
        return UG += kG && IG ? "translate(".concat(bG.x / Rb - wG / 2, "em, ").concat(bG.y / Rb - LG / 2, "em) ") : kG ? "translate(calc(-50% + ".concat(bG.x / Rb, "em), calc(-50% + ").concat(bG.y / Rb, "em)) ") : "translate(".concat(bG.x / Rb, "em, ").concat(bG.y / Rb, "em) "), UG += "scale(".concat(bG.size / Rb * (bG.flipX ? -1 : 1), ", ").concat(bG.size / Rb * (bG.flipY ? -1 : 1), ") "), UG + "rotate(".concat(bG.rotate, "deg) ")
      }({
        transform: SG,
        startCentered: !0,
        width: ZG,
        height: wG
      }), VG["-webkit-transform"] = VG.transform);
      var pG = Ob(VG);
      pG.length > 0 && (YG.style = pG);
      var fG = [];
      return fG.push({
        tag: "span",
        attributes: YG,
        children: [bG]
      }), fG
    }
    var bw = SZ.styles;

    function Zw(GG) {
      var bG = GG[0],
        ZG = GG[1],
        wG = YG(GG.slice(4), 1)[0];
      return {
        found: !0,
        width: bG,
        height: ZG,
        icon: Array.isArray(wG) ? {
          tag: "g",
          attributes: {
            class: "".concat(gb.cssPrefix, "-").concat(Mb.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(gb.cssPrefix, "-").concat(Mb.SECONDARY),
              fill: "currentColor",
              d: wG[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(gb.cssPrefix, "-").concat(Mb.PRIMARY),
              fill: "currentColor",
              d: wG[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: wG
          }
        }
      }
    }
    var ww = {
      found: !1,
      width: 512,
      height: 512
    };

    function Sw(GG, bG) {
      var ZG = bG;
      return "fa" === bG && null !== gb.styleDefault && (bG = vZ()), new Promise((function(wG, SG) {
        if ("fa" === ZG) {
          var LG = FZ(GG) || {};
          GG = LG.iconName || GG, bG = LG.prefix || bG
        }
        if (GG && bG && bw[bG] && bw[bG][GG]) return wG(Zw(bw[bG][GG]));
        ! function(GG, bG) {
          ub || gb.showMissingIcons || !GG || console.error('Icon with name "'.concat(GG, '" and prefix "').concat(bG, '" is missing.'))
        }(GG, bG), wG(UG(UG({}, ww), {}, {
          icon: gb.showMissingIcons && GG && TZ("missingIconAbstract") || {}
        }))
      }))
    }
    var Lw = function() {},
      yw = gb.measurePerformance && WG && WG.mark && WG.measure ? WG : {
        mark: Lw,
        measure: Lw
      },
      kw = 'FA "7.2.0"',
      Uw = function(GG) {
        yw.mark("".concat(kw, " ").concat(GG, " ends")), yw.measure("".concat(kw, " ").concat(GG), "".concat(kw, " ").concat(GG, " begins"), "".concat(kw, " ").concat(GG, " ends"))
      },
      Yw = function(GG) {
        return yw.mark("".concat(kw, " ").concat(GG, " begins")),
          function() {
            return Uw(GG)
          }
      },
      Vw = function() {};

    function pw(GG) {
      return "string" === typeof(GG.getAttribute ? GG.getAttribute(db) : null)
    }

    function fw(GG) {
      return iG.createElementNS("http://www.w3.org/2000/svg", GG)
    }

    function Qw(GG) {
      return iG.createElement(GG)
    }

    function Kw(GG) {
      var bG = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        ZG = void 0 === bG ? "svg" === GG.tag ? fw : Qw : bG;
      if ("string" === typeof GG) return iG.createTextNode(GG);
      var wG = ZG(GG.tag);
      return Object.keys(GG.attributes || []).forEach((function(bG) {
        wG.setAttribute(bG, GG.attributes[bG])
      })), (GG.children || []).forEach((function(GG) {
        wG.appendChild(Kw(GG, {
          ceFn: ZG
        }))
      })), wG
    }
    var hw = {
      replace: function(GG) {
        var bG = GG[0];
        if (bG.parentNode)
          if (GG[1].forEach((function(GG) {
              bG.parentNode.insertBefore(Kw(GG), bG)
            })), null === bG.getAttribute(db) && gb.keepOriginalSource) {
            var ZG = iG.createComment(function(GG) {
              var bG = " ".concat(GG.outerHTML, " ");
              return "".concat(bG, "Font Awesome fontawesome.com ")
            }(bG));
            bG.parentNode.replaceChild(ZG, bG)
          } else bG.remove()
      },
      nest: function(GG) {
        var bG = GG[0],
          ZG = GG[1];
        if (~Db(bG).indexOf(gb.replacementClass)) return hw.replace(GG);
        var wG = new RegExp("".concat(gb.cssPrefix, "-.*"));
        if (delete ZG[0].attributes.id, ZG[0].attributes.class) {
          var SG = ZG[0].attributes.class.split(" ").reduce((function(GG, bG) {
            return bG === gb.replacementClass || bG.match(wG) ? GG.toSvg.push(bG) : GG.toNode.push(bG), GG
          }), {
            toNode: [],
            toSvg: []
          });
          ZG[0].attributes.class = SG.toSvg.join(" "), 0 === SG.toNode.length ? bG.removeAttribute("class") : bG.setAttribute("class", SG.toNode.join(" "))
        }
        var LG = ZG.map((function(GG) {
          return UZ(GG)
        })).join("\n");
        bG.setAttribute(db, ""), bG.innerHTML = LG
      }
    };

    function dw(GG) {
      GG()
    }

    function Jw(GG, bG) {
      var ZG = "function" === typeof bG ? bG : Vw;
      if (0 === GG.length) ZG();
      else {
        var wG = dw;
        "async" === gb.mutateApproach && (wG = uG.requestAnimationFrame || dw), wG((function() {
          var bG = !0 === gb.autoReplaceSvg ? hw.replace : hw[gb.autoReplaceSvg] || hw.replace,
            wG = Yw("mutate");
          GG.map(bG), wG(), ZG()
        }))
      }
    }
    var rw = !1;

    function zw() {
      rw = !0
    }

    function Ew() {
      rw = !1
    }
    var ow = null;

    function Xw(GG) {
      if (CG && gb.observeMutations) {
        var bG = GG.treeCallback,
          ZG = void 0 === bG ? Vw : bG,
          wG = GG.nodeCallback,
          SG = void 0 === wG ? Vw : wG,
          LG = GG.pseudoElementsCallback,
          yG = void 0 === LG ? Vw : LG,
          kG = GG.observeMutationsRoot,
          UG = void 0 === kG ? iG : kG;
        ow = new CG((function(GG) {
          if (!rw) {
            var bG = vZ();
            tb(GG).forEach((function(GG) {
              if ("childList" === GG.type && GG.addedNodes.length > 0 && !pw(GG.addedNodes[0]) && (gb.searchPseudoElements && yG(GG.target), ZG(GG.target)), "attributes" === GG.type && GG.target.parentNode && gb.searchPseudoElements && yG([GG.target], !0), "attributes" === GG.type && pw(GG.target) && ~Pb.indexOf(GG.attributeName))
                if ("class" === GG.attributeName && function(GG) {
                    var bG = GG.getAttribute ? GG.getAttribute(rb) : null,
                      ZG = GG.getAttribute ? GG.getAttribute(zb) : null;
                    return bG && ZG
                  }(GG.target)) {
                  var wG = jZ(Db(GG.target)),
                    LG = wG.prefix,
                    kG = wG.iconName;
                  GG.target.setAttribute(rb, LG || bG), kG && GG.target.setAttribute(zb, kG)
                } else(UG = GG.target) && UG.classList && UG.classList.contains && UG.classList.contains(gb.replacementClass) && SG(GG.target);
              var UG
            }))
          }
        })), mG && ow.observe(UG, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function uw(GG) {
      var bG, ZG, wG = GG.getAttribute("data-prefix"),
        SG = GG.getAttribute("data-icon"),
        LG = void 0 !== GG.innerText ? GG.innerText.trim() : "",
        yG = jZ(Db(GG));
      return yG.prefix || (yG.prefix = vZ()), wG && SG && (yG.prefix = wG, yG.iconName = SG), yG.iconName && yG.prefix || (yG.prefix && LG.length > 0 && (yG.iconName = (bG = yG.prefix, ZG = GG.innerText, (EZ[bG] || {})[ZG] || mZ(yG.prefix, pZ(GG.innerText)))), !yG.iconName && gb.autoFetchSvg && GG.firstChild && GG.firstChild.nodeType === Node.TEXT_NODE && (yG.iconName = GG.firstChild.data)), yG
    }

    function iw(GG) {
      var bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        ZG = uw(GG),
        wG = ZG.iconName,
        SG = ZG.prefix,
        LG = ZG.rest,
        yG = function(GG) {
          return tb(GG.attributes).reduce((function(GG, bG) {
            return "class" !== GG.name && "style" !== GG.name && (GG[bG.name] = bG.value), GG
          }), {})
        }(GG),
        kG = eZ("parseNodeAttributes", {}, GG),
        YG = bG.styleParser ? function(GG) {
          var bG = GG.getAttribute("style"),
            ZG = [];
          return bG && (ZG = bG.split(";").reduce((function(GG, bG) {
            var ZG = bG.split(":"),
              wG = ZG[0],
              SG = ZG.slice(1);
            return wG && SG.length > 0 && (GG[wG] = SG.join(":").trim()), GG
          }), {})), ZG
        }(GG) : [];
      return UG({
        iconName: wG,
        prefix: SG,
        transform: Tb,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: LG,
          styles: YG,
          attributes: yG
        }
      }, kG)
    }
    var Cw = SZ.styles;

    function Ww(GG) {
      var bG = "nest" === gb.autoReplaceSvg ? iw(GG, {
        styleParser: !1
      }) : iw(GG);
      return ~bG.extra.classes.indexOf(lb) ? TZ("generateLayersText", GG, bG) : TZ("generateSvgReplacementMutation", GG, bG)
    }

    function mw(GG) {
      var bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!mG) return Promise.resolve();
      var ZG = iG.documentElement.classList,
        wG = function(GG) {
          return ZG.add("".concat(Eb, "-").concat(GG))
        },
        SG = function(GG) {
          return ZG.remove("".concat(Eb, "-").concat(GG))
        },
        LG = gb.autoFetchSvg ? [].concat(VG(Gb), VG(Vb)) : vG.concat(Object.keys(Cw));
      LG.includes("fa") || LG.push("fa");
      var yG = [".".concat(lb, ":not([").concat(db, "])")].concat(LG.map((function(GG) {
        return ".".concat(GG, ":not([").concat(db, "])")
      }))).join(", ");
      if (0 === yG.length) return Promise.resolve();
      var kG = [];
      try {
        kG = tb(GG.querySelectorAll(yG))
      } catch (pG) {}
      if (!(kG.length > 0)) return Promise.resolve();
      wG("pending"), SG("complete");
      var UG = Yw("onTree"),
        YG = kG.reduce((function(GG, bG) {
          try {
            var ZG = Ww(bG);
            ZG && GG.push(ZG)
          } catch (pG) {
            ub || "MissingIcon" === pG.name && console.error(pG)
          }
          return GG
        }), []);
      return new Promise((function(GG, ZG) {
        Promise.all(YG).then((function(ZG) {
          Jw(ZG, (function() {
            wG("active"), wG("complete"), SG("pending"), "function" === typeof bG && bG(), UG(), GG()
          }))
        })).catch((function(GG) {
          UG(), ZG(GG)
        }))
      }))
    }

    function Iw(GG) {
      var bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      Ww(GG).then((function(GG) {
        GG && Jw([GG], bG)
      }))
    }
    var Fw = function(GG) {
        var bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZG = bG.transform,
          wG = void 0 === ZG ? Tb : ZG,
          SG = bG.symbol,
          LG = void 0 !== SG && SG,
          yG = bG.mask,
          kG = void 0 === yG ? null : yG,
          YG = bG.maskId,
          VG = void 0 === YG ? null : YG,
          pG = bG.classes,
          fG = void 0 === pG ? [] : pG,
          QG = bG.attributes,
          KG = void 0 === QG ? {} : QG,
          hG = bG.styles,
          dG = void 0 === hG ? {} : hG;
        if (GG) {
          var JG = GG.prefix,
            rG = GG.iconName,
            zG = GG.icon;
          return xZ(UG({
            type: "icon"
          }, GG), (function() {
            return RZ("beforeDOMElementCreation", {
              iconDefinition: GG,
              params: bG
            }), BZ({
              icons: {
                main: Zw(zG),
                mask: kG ? Zw(kG.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: JG,
              iconName: rG,
              transform: UG(UG({}, Tb), wG),
              symbol: LG,
              maskId: VG,
              extra: {
                attributes: KG,
                styles: dG,
                classes: fG
              }
            })
          }))
        }
      },
      vw = {
        mixout: function() {
          return {
            icon: (GG = Fw, function(bG) {
              var ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                wG = (bG || {}).icon ? bG : HZ(bG || {}),
                SG = ZG.mask;
              return SG && (SG = (SG || {}).icon ? SG : HZ(SG || {})), GG(wG, UG(UG({}, ZG), {}, {
                mask: SG
              }))
            })
          };
          var GG
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(GG) {
              return GG.treeCallback = mw, GG.nodeCallback = Iw, GG
            }
          }
        },
        provides: function(GG) {
          GG.i2svg = function(GG) {
            var bG = GG.node,
              ZG = void 0 === bG ? iG : bG,
              wG = GG.callback;
            return mw(ZG, void 0 === wG ? function() {} : wG)
          }, GG.generateSvgReplacementMutation = function(GG, bG) {
            var ZG = bG.iconName,
              wG = bG.prefix,
              SG = bG.transform,
              LG = bG.symbol,
              yG = bG.mask,
              kG = bG.maskId,
              UG = bG.extra;
            return new Promise((function(bG, VG) {
              Promise.all([Sw(ZG, wG), yG.iconName ? Sw(yG.iconName, yG.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(yG) {
                var VG = YG(yG, 2),
                  pG = VG[0],
                  fG = VG[1];
                bG([GG, BZ({
                  icons: {
                    main: pG,
                    mask: fG
                  },
                  prefix: wG,
                  iconName: ZG,
                  transform: SG,
                  symbol: LG,
                  maskId: kG,
                  extra: UG,
                  watchable: !0
                })])
              })).catch(VG)
            }))
          }, GG.generateAbstractIcon = function(GG) {
            var bG, ZG = GG.children,
              wG = GG.attributes,
              SG = GG.main,
              LG = GG.transform,
              yG = Ob(GG.styles);
            return yG.length > 0 && (wG.style = yG), xb(LG) && (bG = TZ("generateAbstractTransformGrouping", {
              main: SG,
              transform: LG,
              containerWidth: SG.width,
              iconWidth: SG.width
            })), ZG.push(bG || SG.icon), {
              children: ZG,
              attributes: wG
            }
          }
        }
      },
      aw = {
        mixout: function() {
          return {
            layer: function(GG) {
              var bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ZG = bG.classes,
                wG = void 0 === ZG ? [] : ZG;
              return xZ({
                type: "layer"
              }, (function() {
                RZ("beforeDOMElementCreation", {
                  assembler: GG,
                  params: bG
                });
                var ZG = [];
                return GG((function(GG) {
                  Array.isArray(GG) ? GG.map((function(GG) {
                    ZG = ZG.concat(GG.abstract)
                  })) : ZG = ZG.concat(GG.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(gb.cssPrefix, "-layers")].concat(VG(wG)).join(" ")
                  },
                  children: ZG
                }]
              }))
            }
          }
        }
      },
      lw = {
        mixout: function() {
          return {
            counter: function(GG) {
              var bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ZG = bG.title,
                wG = void 0 === ZG ? null : ZG,
                SG = bG.classes,
                LG = void 0 === SG ? [] : SG,
                yG = bG.attributes,
                kG = void 0 === yG ? {} : yG,
                YG = bG.styles,
                pG = void 0 === YG ? {} : YG;
              return xZ({
                type: "counter",
                content: GG
              }, (function() {
                return RZ("beforeDOMElementCreation", {
                    content: GG,
                    params: bG
                  }),
                  function(GG) {
                    var bG = GG.content,
                      ZG = GG.extra,
                      wG = UG(UG({}, ZG.attributes), {}, {
                        class: ZG.classes.join(" ")
                      }),
                      SG = Ob(ZG.styles);
                    SG.length > 0 && (wG.style = SG);
                    var LG = [];
                    return LG.push({
                      tag: "span",
                      attributes: wG,
                      children: [bG]
                    }), LG
                  }({
                    content: GG.toString(),
                    title: wG,
                    extra: {
                      attributes: kG,
                      styles: pG,
                      classes: ["".concat(gb.cssPrefix, "-layers-counter")].concat(VG(LG))
                    }
                  })
              }))
            }
          }
        }
      },
      jw = {
        mixout: function() {
          return {
            text: function(GG) {
              var bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ZG = bG.transform,
                wG = void 0 === ZG ? Tb : ZG,
                SG = bG.classes,
                LG = void 0 === SG ? [] : SG,
                yG = bG.attributes,
                kG = void 0 === yG ? {} : yG,
                YG = bG.styles,
                pG = void 0 === YG ? {} : YG;
              return xZ({
                type: "text",
                content: GG
              }, (function() {
                return RZ("beforeDOMElementCreation", {
                  content: GG,
                  params: bG
                }), Gw({
                  content: GG,
                  transform: UG(UG({}, Tb), wG),
                  extra: {
                    attributes: kG,
                    styles: pG,
                    classes: ["".concat(gb.cssPrefix, "-layers-text")].concat(VG(LG))
                  }
                })
              }))
            }
          }
        },
        provides: function(GG) {
          GG.generateLayersText = function(GG, bG) {
            var ZG = bG.transform,
              wG = bG.extra,
              SG = null,
              LG = null;
            if (IG) {
              var yG = parseInt(getComputedStyle(GG).fontSize, 10),
                kG = GG.getBoundingClientRect();
              SG = kG.width / yG, LG = kG.height / yG
            }
            return Promise.resolve([GG, Gw({
              content: GG.innerHTML,
              width: SG,
              height: LG,
              transform: ZG,
              extra: wG,
              watchable: !0
            })])
          }
        }
      },
      Pw = new RegExp('"', "ug"),
      Mw = [1105920, 1112319],
      Aw = UG(UG(UG(UG({}, {
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
      sw = Object.keys(Aw).reduce((function(GG, bG) {
        return GG[bG.toLowerCase()] = Aw[bG], GG
      }), {}),
      qw = Object.keys(sw).reduce((function(GG, bG) {
        var ZG = sw[bG];
        return GG[bG] = ZG[900] || VG(Object.entries(ZG))[0][1], GG
      }), {});

    function nw(GG, bG) {
      var ZG = "".concat("data-fa-pseudo-element-pending").concat(bG.replace(":", "-"));
      return new Promise((function(wG, SG) {
        if (null !== GG.getAttribute(ZG)) return wG();
        var LG = tb(GG.children).filter((function(GG) {
            return GG.getAttribute(Jb) === bG
          }))[0],
          yG = uG.getComputedStyle(GG, bG),
          kG = yG.getPropertyValue("font-family"),
          YG = kG.match(jb),
          pG = yG.getPropertyValue("font-weight"),
          fG = yG.getPropertyValue("content");
        if (LG && !YG) return GG.removeChild(LG), wG();
        if (YG && "none" !== fG && "" !== fG) {
          var QG = yG.getPropertyValue("content"),
            KG = function(GG, bG) {
              var ZG = GG.replace(/^['"]|['"]$/g, "").toLowerCase(),
                wG = parseInt(bG),
                SG = isNaN(wG) ? "normal" : wG;
              return (sw[ZG] || {})[SG] || qw[ZG]
            }(kG, pG),
            hG = function(GG) {
              return pZ(VG(GG.replace(Pw, ""))[0] || "")
            }(QG),
            dG = YG[0].startsWith("FontAwesome"),
            JG = function(GG) {
              var bG = GG.getPropertyValue("font-feature-settings").includes("ss01"),
                ZG = GG.getPropertyValue("content").replace(Pw, ""),
                wG = ZG.codePointAt(0),
                SG = wG >= Mw[0] && wG <= Mw[1],
                LG = 2 === ZG.length && ZG[0] === ZG[1];
              return SG || LG || bG
            }(yG),
            rG = mZ(KG, hG),
            zG = rG;
          if (dG) {
            var EG = function(GG) {
              var bG = XZ[GG],
                ZG = mZ("fas", GG);
              return bG || (ZG ? {
                prefix: "fas",
                iconName: ZG
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(hG);
            EG.iconName && EG.prefix && (rG = EG.iconName, KG = EG.prefix)
          }
          if (!rG || JG || LG && LG.getAttribute(rb) === KG && LG.getAttribute(zb) === zG) wG();
          else {
            GG.setAttribute(ZG, zG), LG && GG.removeChild(LG);
            var oG = {
                iconName: null,
                prefix: null,
                transform: Tb,
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
              XG = oG.extra;
            XG.attributes[Jb] = bG, Sw(rG, KG).then((function(SG) {
              var LG = BZ(UG(UG({}, oG), {}, {
                  icons: {
                    main: SG,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: KG,
                  iconName: zG,
                  extra: XG,
                  watchable: !0
                })),
                yG = iG.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === bG ? GG.insertBefore(yG, GG.firstChild) : GG.appendChild(yG), yG.outerHTML = LG.map((function(GG) {
                return UZ(GG)
              })).join("\n"), GG.removeAttribute(ZG), wG()
            })).catch(SG)
          }
        } else wG()
      }))
    }

    function gw(GG) {
      return Promise.all([nw(GG, "::before"), nw(GG, "::after")])
    }

    function ew(GG) {
      return GG.parentNode !== document.head && !~ob.indexOf(GG.tagName.toUpperCase()) && !GG.getAttribute(Jb) && (!GG.parentNode || "svg" !== GG.parentNode.tagName)
    }
    var Rw = function(GG) {
        return !!GG && Xb.some((function(bG) {
          return GG.includes(bG)
        }))
      },
      Tw = function(GG) {
        if (!GG) return [];
        var bG = new Set,
          ZG = GG.split(/,(?![^()]*\))/).map((function(GG) {
            return GG.trim()
          }));
        ZG = ZG.flatMap((function(GG) {
          return GG.includes("(") ? GG : GG.split(",").map((function(GG) {
            return GG.trim()
          }))
        }));
        var wG, SG = LG(ZG);
        try {
          for (SG.s(); !(wG = SG.n()).done;) {
            var yG = wG.value;
            if (Rw(yG)) {
              var kG = Xb.reduce((function(GG, bG) {
                return GG.replace(bG, "")
              }), yG);
              "" !== kG && "*" !== kG && bG.add(kG)
            }
          }
        } catch (UG) {
          SG.e(UG)
        } finally {
          SG.f()
        }
        return bG
      };

    function Hw(GG) {
      if (mG) {
        var bG;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) bG = GG;
        else if (gb.searchPseudoElementsFullScan) bG = GG.querySelectorAll("*");
        else {
          var ZG, wG = new Set,
            SG = LG(document.styleSheets);
          try {
            for (SG.s(); !(ZG = SG.n()).done;) {
              var yG = ZG.value;
              try {
                var kG, UG = LG(yG.cssRules);
                try {
                  for (UG.s(); !(kG = UG.n()).done;) {
                    var YG, VG = kG.value,
                      pG = LG(Tw(VG.selectorText));
                    try {
                      for (pG.s(); !(YG = pG.n()).done;) {
                        var fG = YG.value;
                        wG.add(fG)
                      }
                    } catch (KG) {
                      pG.e(KG)
                    } finally {
                      pG.f()
                    }
                  }
                } catch (KG) {
                  UG.e(KG)
                } finally {
                  UG.f()
                }
              } catch (hG) {
                gb.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(yG.href, " (").concat(hG.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (KG) {
            SG.e(KG)
          } finally {
            SG.f()
          }
          if (!wG.size) return;
          var QG = Array.from(wG).join(", ");
          try {
            bG = GG.querySelectorAll(QG)
          } catch (dG) {}
        }
        return new Promise((function(GG, ZG) {
          var wG = tb(bG).filter(ew).map(gw),
            SG = Yw("searchPseudoElements");
          zw(), Promise.all(wG).then((function() {
            SG(), Ew(), GG()
          })).catch((function() {
            SG(), Ew(), ZG()
          }))
        }))
      }
    }
    var tw = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(GG) {
              return GG.pseudoElementsCallback = Hw, GG
            }
          }
        },
        provides: function(GG) {
          GG.pseudoElements2svg = function(GG) {
            var bG = GG.node,
              ZG = void 0 === bG ? iG : bG;
            gb.searchPseudoElements && Hw(ZG)
          }
        }
      },
      Dw = !1,
      Nw = function(GG) {
        return GG.toLowerCase().split(" ").reduce((function(GG, bG) {
          var ZG = bG.toLowerCase().split("-"),
            wG = ZG[0],
            SG = ZG.slice(1).join("-");
          if (wG && "h" === SG) return GG.flipX = !0, GG;
          if (wG && "v" === SG) return GG.flipY = !0, GG;
          if (SG = parseFloat(SG), isNaN(SG)) return GG;
          switch (wG) {
            case "grow":
              GG.size = GG.size + SG;
              break;
            case "shrink":
              GG.size = GG.size - SG;
              break;
            case "left":
              GG.x = GG.x - SG;
              break;
            case "right":
              GG.x = GG.x + SG;
              break;
            case "up":
              GG.y = GG.y - SG;
              break;
            case "down":
              GG.y = GG.y + SG;
              break;
            case "rotate":
              GG.rotate = GG.rotate + SG
          }
          return GG
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      Ow = {
        mixout: function() {
          return {
            parse: {
              transform: function(GG) {
                return Nw(GG)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(GG, bG) {
              var ZG = bG.getAttribute("data-fa-transform");
              return ZG && (GG.transform = Nw(ZG)), GG
            }
          }
        },
        provides: function(GG) {
          GG.generateAbstractTransformGrouping = function(GG) {
            var bG = GG.main,
              ZG = GG.transform,
              wG = GG.containerWidth,
              SG = GG.iconWidth,
              LG = {
                transform: "translate(".concat(wG / 2, " 256)")
              },
              yG = "translate(".concat(32 * ZG.x, ", ").concat(32 * ZG.y, ") "),
              kG = "scale(".concat(ZG.size / 16 * (ZG.flipX ? -1 : 1), ", ").concat(ZG.size / 16 * (ZG.flipY ? -1 : 1), ") "),
              YG = "rotate(".concat(ZG.rotate, " 0 0)"),
              VG = {
                outer: LG,
                inner: {
                  transform: "".concat(yG, " ").concat(kG, " ").concat(YG)
                },
                path: {
                  transform: "translate(".concat(SG / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: UG({}, VG.outer),
              children: [{
                tag: "g",
                attributes: UG({}, VG.inner),
                children: [{
                  tag: bG.icon.tag,
                  children: bG.icon.children,
                  attributes: UG(UG({}, bG.icon.attributes), VG.path)
                }]
              }]
            }
          }
        }
      },
      xw = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function Bw(GG) {
      var bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return GG.attributes && (GG.attributes.fill || bG) && (GG.attributes.fill = "black"), GG
    }
    var GS = {
        hooks: function() {
          return {
            parseNodeAttributes: function(GG, bG) {
              var ZG = bG.getAttribute("data-fa-mask"),
                wG = ZG ? jZ(ZG.split(" ").map((function(GG) {
                  return GG.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return wG.prefix || (wG.prefix = vZ()), GG.mask = wG, GG.maskId = bG.getAttribute("data-fa-mask-id"), GG
            }
          }
        },
        provides: function(GG) {
          GG.generateAbstractMask = function(GG) {
            var bG, ZG = GG.children,
              wG = GG.attributes,
              SG = GG.main,
              LG = GG.mask,
              yG = GG.maskId,
              kG = GG.transform,
              YG = SG.width,
              VG = SG.icon,
              pG = LG.width,
              fG = LG.icon,
              QG = function(GG) {
                var bG = GG.transform,
                  ZG = GG.containerWidth,
                  wG = GG.iconWidth,
                  SG = {
                    transform: "translate(".concat(ZG / 2, " 256)")
                  },
                  LG = "translate(".concat(32 * bG.x, ", ").concat(32 * bG.y, ") "),
                  yG = "scale(".concat(bG.size / 16 * (bG.flipX ? -1 : 1), ", ").concat(bG.size / 16 * (bG.flipY ? -1 : 1), ") "),
                  kG = "rotate(".concat(bG.rotate, " 0 0)");
                return {
                  outer: SG,
                  inner: {
                    transform: "".concat(LG, " ").concat(yG, " ").concat(kG)
                  },
                  path: {
                    transform: "translate(".concat(wG / 2 * -1, " -256)")
                  }
                }
              }({
                transform: kG,
                containerWidth: pG,
                iconWidth: YG
              }),
              KG = {
                tag: "rect",
                attributes: UG(UG({}, xw), {}, {
                  fill: "white"
                })
              },
              hG = VG.children ? {
                children: VG.children.map(Bw)
              } : {},
              dG = {
                tag: "g",
                attributes: UG({}, QG.inner),
                children: [Bw(UG({
                  tag: VG.tag,
                  attributes: UG(UG({}, VG.attributes), QG.path)
                }, hG))]
              },
              JG = {
                tag: "g",
                attributes: UG({}, QG.outer),
                children: [dG]
              },
              rG = "mask-".concat(yG || Hb()),
              zG = "clip-".concat(yG || Hb()),
              EG = {
                tag: "mask",
                attributes: UG(UG({}, xw), {}, {
                  id: rG,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [KG, JG]
              },
              oG = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: zG
                  },
                  children: (bG = fG, "g" === bG.tag ? bG.children : [bG])
                }, EG]
              };
            return ZG.push(oG, {
              tag: "rect",
              attributes: UG({
                fill: "currentColor",
                "clip-path": "url(#".concat(zG, ")"),
                mask: "url(#".concat(rG, ")")
              }, xw)
            }), {
              children: ZG,
              attributes: wG
            }
          }
        }
      },
      bS = {
        provides: function(GG) {
          var bG = !1;
          uG.matchMedia && (bG = uG.matchMedia("(prefers-reduced-motion: reduce)").matches), GG.missingIconAbstract = function() {
            var GG = [],
              ZG = {
                fill: "currentColor"
              },
              wG = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            GG.push({
              tag: "path",
              attributes: UG(UG({}, ZG), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var SG = UG(UG({}, wG), {}, {
                attributeName: "opacity"
              }),
              LG = {
                tag: "circle",
                attributes: UG(UG({}, ZG), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return bG || LG.children.push({
              tag: "animate",
              attributes: UG(UG({}, wG), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: UG(UG({}, SG), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), GG.push(LG), GG.push({
              tag: "path",
              attributes: UG(UG({}, ZG), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: bG ? [] : [{
                tag: "animate",
                attributes: UG(UG({}, SG), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), bG || GG.push({
              tag: "path",
              attributes: UG(UG({}, ZG), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: UG(UG({}, SG), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: GG
            }
          }
        }
      };
    ! function(GG, bG) {
      var ZG = bG.mixoutsTo;
      sZ = GG, qZ = {}, Object.keys(nZ).forEach((function(GG) {
        -1 === gZ.indexOf(GG) && delete nZ[GG]
      })), sZ.forEach((function(GG) {
        var bG = GG.mixout ? GG.mixout() : {};
        if (Object.keys(bG).forEach((function(GG) {
            "function" === typeof bG[GG] && (ZG[GG] = bG[GG]), "object" === fG(bG[GG]) && Object.keys(bG[GG]).forEach((function(wG) {
              ZG[GG] || (ZG[GG] = {}), ZG[GG][wG] = bG[GG][wG]
            }))
          })), GG.hooks) {
          var wG = GG.hooks();
          Object.keys(wG).forEach((function(GG) {
            qZ[GG] || (qZ[GG] = []), qZ[GG].push(wG[GG])
          }))
        }
        GG.provides && GG.provides(nZ)
      }))
    }([ZZ, vw, aw, lw, jw, tw, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              zw(), Dw = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            Xw(eZ("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            ow && ow.disconnect()
          },
          watch: function(GG) {
            var bG = GG.observeMutationsRoot;
            Dw ? Ew() : Xw(eZ("mutationObserverCallbacks", {
              observeMutationsRoot: bG
            }))
          }
        }
      }
    }, Ow, GS, bS, {
      hooks: function() {
        return {
          parseNodeAttributes: function(GG, bG) {
            var ZG = bG.getAttribute("data-fa-symbol"),
              wG = null !== ZG && ("" === ZG || ZG);
            return GG.symbol = wG, GG
          }
        }
      }
    }], {
      mixoutsTo: NZ
    });
    var ZS = NZ.noAuto,
      wS = NZ.config,
      SS = NZ.library,
      LS = NZ.dom,
      yS = NZ.parse,
      kS = NZ.findIconDefinition,
      US = NZ.toHtml,
      YS = NZ.icon,
      VS = NZ.layer,
      pS = NZ.text,
      fS = NZ.counter
  },
  6695: GG => {
    GG.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);