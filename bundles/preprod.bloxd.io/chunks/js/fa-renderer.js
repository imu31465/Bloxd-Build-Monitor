/*! For license information please see fecih8.fa-renderer.a3d42e55.chunk.js.LICENSE.txt */
export const id = 38;
export const ids = [38];
export const modules = {
  7360: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      FontAwesomeIcon: () => WU
    });
    var cU = zU(7353),
      yU = zU(5499),
      QU = zU.n(yU),
      AU = zU(61);

    function FU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function oU(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU, XU) {
          if ("object" != typeof UU || !UU) return UU;
          var zU = UU[Symbol.toPrimitive];
          if (void 0 !== zU) {
            var cU = zU.call(UU, XU || "default");
            if ("object" != typeof cU) return cU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === XU ? String : Number)(UU)
        }(UU, "string");
        return "symbol" == typeof XU ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function DU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function EU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? DU(Object(zU), !0).forEach((function(XU) {
          oU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : DU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function YU(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        var zU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != zU) {
          var cU, yU, QU, AU, FU = [],
            oU = !0,
            DU = !1;
          try {
            if (QU = (zU = zU.call(UU)).next, 0 === XU) {
              if (Object(zU) !== zU) return;
              oU = !1
            } else
              for (; !(oU = (cU = QU.call(zU)).done) && (FU.push(cU.value), FU.length !== XU); oU = !0);
          } catch (UU) {
            DU = !0, yU = UU
          } finally {
            try {
              if (!oU && null != zU.return && (AU = zU.return(), Object(AU) !== AU)) return
            } finally {
              if (DU) throw yU
            }
          }
          return FU
        }
      }(UU, XU) || pU(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function NU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return FU(UU)
      }(UU) || function(UU) {
        if ("undefined" != typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || pU(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IU(UU) {
      return IU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, IU(UU)
    }

    function pU(UU, XU) {
      if (UU) {
        if ("string" == typeof UU) return FU(UU, XU);
        var zU = {}.toString.call(UU).slice(8, -1);
        return "Object" === zU && UU.constructor && (zU = UU.constructor.name), "Map" === zU || "Set" === zU ? Array.from(UU) : "Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU) ? FU(UU, XU) : void 0
      }
    }
    var aU;
    try {
      var tU = zU(7367);
      aU = tU.version
    } catch (LU) {
      aU = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function gU(UU) {
      var XU = UU.beat,
        zU = UU.fade,
        cU = UU.beatFade,
        yU = UU.bounce,
        QU = UU.shake,
        AU = UU.flash,
        FU = UU.spin,
        DU = UU.spinPulse,
        EU = UU.spinReverse,
        NU = UU.pulse,
        IU = UU.fixedWidth,
        pU = UU.inverse,
        tU = UU.border,
        gU = UU.listItem,
        kU = UU.flip,
        GU = UU.size,
        BU = UU.rotation,
        ZU = UU.pull,
        RU = UU.swapOpacity,
        PU = UU.rotateBy,
        WU = UU.widthAuto,
        dU = function(UU, XU) {
          for (var zU = YU(UU.split("-"), 2), cU = zU[0], yU = zU[1], QU = YU(XU.split("-"), 2), AU = QU[0], FU = QU[1], oU = cU.split("."), DU = AU.split("."), EU = 0; EU < Math.max(oU.length, DU.length); EU++) {
            var NU = oU[EU] || "0",
              IU = DU[EU] || "0",
              pU = parseInt(NU, 10),
              aU = parseInt(IU, 10);
            if (pU !== aU) return pU > aU
          }
          for (var tU = 0; tU < Math.max(oU.length, DU.length); tU++) {
            var gU = oU[tU] || "0",
              kU = DU[tU] || "0";
            if (gU !== kU && gU.length !== kU.length) return gU.length < kU.length
          }
          return !(yU && !FU)
        }(aU, "7.0.0"),
        LU = oU(oU(oU(oU(oU(oU({
          "fa-beat": XU,
          "fa-fade": zU,
          "fa-beat-fade": cU,
          "fa-bounce": yU,
          "fa-shake": QU,
          "fa-flash": AU,
          "fa-spin": FU,
          "fa-spin-reverse": EU,
          "fa-spin-pulse": DU,
          "fa-pulse": NU,
          "fa-fw": IU,
          "fa-inverse": pU,
          "fa-border": tU,
          "fa-li": gU,
          "fa-flip": !0 === kU,
          "fa-flip-horizontal": "horizontal" === kU || "both" === kU,
          "fa-flip-vertical": "vertical" === kU || "both" === kU
        }, "fa-".concat(GU), "undefined" !== typeof GU && null !== GU), "fa-rotate-".concat(BU), "undefined" !== typeof BU && null !== BU && 0 !== BU), "fa-pull-".concat(ZU), "undefined" !== typeof ZU && null !== ZU), "fa-swap-opacity", RU), "fa-rotate-by", dU && PU), "fa-width-auto", dU && WU);
      return Object.keys(LU).map((function(UU) {
        return LU[UU] ? UU : null
      })).filter((function(UU) {
        return UU
      }))
    }

    function kU(UU) {
      return XU = UU, (XU -= 0) === XU ? UU : (UU = UU.replace(/[\-_\s]+(.)?/g, (function(UU, XU) {
        return XU ? XU.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + UU.substr(1);
      var XU
    }
    var GU = ["style"];
    var BU = !1;
    try {
      BU = !0
    } catch (LU) {}

    function ZU(UU) {
      return UU && "object" === IU(UU) && UU.prefix && UU.iconName && UU.icon ? UU : cU.parse.icon ? cU.parse.icon(UU) : null === UU ? null : UU && "object" === IU(UU) && UU.prefix && UU.iconName ? UU : Array.isArray(UU) && 2 === UU.length ? {
        prefix: UU[0],
        iconName: UU[1]
      } : "string" === typeof UU ? {
        prefix: "fas",
        iconName: UU
      } : void 0
    }

    function RU(UU, XU) {
      return Array.isArray(XU) && XU.length > 0 || !Array.isArray(XU) && XU ? oU({}, UU, XU) : {}
    }
    var PU = {
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
      WU = AU.forwardRef((function(UU, XU) {
        var zU = EU(EU({}, PU), UU),
          yU = zU.icon,
          QU = zU.mask,
          AU = zU.symbol,
          FU = zU.className,
          oU = zU.title,
          DU = zU.titleId,
          YU = zU.maskId,
          IU = ZU(yU),
          pU = RU("classes", [].concat(NU(gU(zU)), NU((FU || "").split(" ")))),
          aU = RU("transform", "string" === typeof zU.transform ? cU.parse.transform(zU.transform) : zU.transform),
          tU = RU("mask", ZU(QU)),
          kU = (0, cU.icon)(IU, EU(EU(EU(EU({}, pU), aU), tU), {}, {
            symbol: AU,
            title: oU,
            titleId: DU,
            maskId: YU
          }));
        if (!kU) return function() {
          var UU;
          !BU && console && "function" === typeof console.error && (UU = console).error.apply(UU, arguments)
        }("Could not find icon", IU), null;
        var GU = kU.abstract,
          WU = {
            ref: XU
          };
        return Object.keys(zU).forEach((function(UU) {
          PU.hasOwnProperty(UU) || (WU[UU] = zU[UU])
        })), dU(GU[0], WU)
      }));
    WU.displayName = "FontAwesomeIcon", WU.propTypes = {
      beat: QU().bool,
      border: QU().bool,
      beatFade: QU().bool,
      bounce: QU().bool,
      className: QU().string,
      fade: QU().bool,
      flash: QU().bool,
      mask: QU().oneOfType([QU().object, QU().array, QU().string]),
      maskId: QU().string,
      fixedWidth: QU().bool,
      inverse: QU().bool,
      flip: QU().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: QU().oneOfType([QU().object, QU().array, QU().string]),
      listItem: QU().bool,
      pull: QU().oneOf(["right", "left"]),
      pulse: QU().bool,
      rotation: QU().oneOf([0, 90, 180, 270]),
      rotateBy: QU().bool,
      shake: QU().bool,
      size: QU().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: QU().bool,
      spinPulse: QU().bool,
      spinReverse: QU().bool,
      symbol: QU().oneOfType([QU().bool, QU().string]),
      title: QU().string,
      titleId: QU().string,
      transform: QU().oneOfType([QU().string, QU().object]),
      swapOpacity: QU().bool,
      widthAuto: QU().bool
    };
    var dU = function UU(XU, zU) {
      var cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof zU) return zU;
      var yU = (zU.children || []).map((function(zU) {
          return UU(XU, zU)
        })),
        QU = Object.keys(zU.attributes || {}).reduce((function(UU, XU) {
          var cU = zU.attributes[XU];
          switch (XU) {
            case "class":
              UU.attrs.className = cU, delete zU.attributes.class;
              break;
            case "style":
              UU.attrs.style = cU.split(";").map((function(UU) {
                return UU.trim()
              })).filter((function(UU) {
                return UU
              })).reduce((function(UU, XU) {
                var zU, cU = XU.indexOf(":"),
                  yU = kU(XU.slice(0, cU)),
                  QU = XU.slice(cU + 1).trim();
                return yU.startsWith("webkit") ? UU[(zU = yU, zU.charAt(0).toUpperCase() + zU.slice(1))] = QU : UU[yU] = QU, UU
              }), {});
              break;
            default:
              0 === XU.indexOf("aria-") || 0 === XU.indexOf("data-") ? UU.attrs[XU.toLowerCase()] = cU : UU.attrs[kU(XU)] = cU
          }
          return UU
        }), {
          attrs: {}
        }),
        AU = cU.style,
        FU = void 0 === AU ? {} : AU,
        oU = function(UU, XU) {
          if (null == UU) return {};
          var zU, cU, yU = function(UU, XU) {
            if (null == UU) return {};
            var zU = {};
            for (var cU in UU)
              if ({}.hasOwnProperty.call(UU, cU)) {
                if (-1 !== XU.indexOf(cU)) continue;
                zU[cU] = UU[cU]
              } return zU
          }(UU, XU);
          if (Object.getOwnPropertySymbols) {
            var QU = Object.getOwnPropertySymbols(UU);
            for (cU = 0; cU < QU.length; cU++) zU = QU[cU], -1 === XU.indexOf(zU) && {}.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
          }
          return yU
        }(cU, GU);
      return QU.attrs.style = EU(EU({}, QU.attrs.style), FU), XU.apply(void 0, [zU.tag, EU(EU({}, QU.attrs), oU)].concat(NU(yU)))
    }.bind(null, AU.createElement)
  },
  5505: (UU, XU, zU) => {
    var cU = zU(5512);

    function yU() {}

    function QU() {}
    QU.resetWarningCache = yU, UU.exports = function() {
      function UU(UU, XU, zU, yU, QU, AU) {
        if (AU !== cU) {
          var FU = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw FU.name = "Invariant Violation", FU
        }
      }

      function XU() {
        return UU
      }
      UU.isRequired = UU;
      var zU = {
        array: UU,
        bigint: UU,
        bool: UU,
        func: UU,
        number: UU,
        object: UU,
        string: UU,
        symbol: UU,
        any: UU,
        arrayOf: XU,
        element: UU,
        elementType: UU,
        instanceOf: XU,
        node: UU,
        objectOf: XU,
        oneOf: XU,
        oneOfType: XU,
        shape: XU,
        exact: XU,
        checkPropTypes: QU,
        resetWarningCache: yU
      };
      return zU.PropTypes = zU, zU
    }
  },
  5499: (UU, XU, zU) => {
    UU.exports = zU(5505)()
  },
  5512: UU => {
    UU.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7353: (UU, XU, zU) => {
    function cU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function yU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, YU(cU.key), cU)
      }
    }

    function QU(UU, XU) {
      var zU = "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
      if (!zU) {
        if (Array.isArray(UU) || (zU = IU(UU)) || XU && UU && "number" == typeof UU.length) {
          zU && (UU = zU);
          var cU = 0,
            yU = function() {};
          return {
            s: yU,
            n: function() {
              return cU >= UU.length ? {
                done: !0
              } : {
                done: !1,
                value: UU[cU++]
              }
            },
            e: function(UU) {
              throw UU
            },
            f: yU
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var QU, AU = !0,
        FU = !1;
      return {
        s: function() {
          zU = zU.call(UU)
        },
        n: function() {
          var UU = zU.next();
          return AU = UU.done, UU
        },
        e: function(UU) {
          FU = !0, QU = UU
        },
        f: function() {
          try {
            AU || null == zU.return || zU.return()
          } finally {
            if (FU) throw QU
          }
        }
      }
    }

    function AU(UU, XU, zU) {
      return (XU = YU(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function FU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function oU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? FU(Object(zU), !0).forEach((function(XU) {
          AU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : FU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function DU(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        var zU = null == UU ? null : "undefined" != typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null != zU) {
          var cU, yU, QU, AU, FU = [],
            oU = !0,
            DU = !1;
          try {
            if (QU = (zU = zU.call(UU)).next, 0 === XU) {
              if (Object(zU) !== zU) return;
              oU = !1
            } else
              for (; !(oU = (cU = QU.call(zU)).done) && (FU.push(cU.value), FU.length !== XU); oU = !0);
          } catch (UU) {
            DU = !0, yU = UU
          } finally {
            try {
              if (!oU && null != zU.return && (AU = zU.return(), Object(AU) !== AU)) return
            } finally {
              if (DU) throw yU
            }
          }
          return FU
        }
      }(UU, XU) || IU(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function EU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return cU(UU)
      }(UU) || function(UU) {
        if ("undefined" != typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || IU(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YU(UU) {
      var XU = function(UU, XU) {
        if ("object" != typeof UU || !UU) return UU;
        var zU = UU[Symbol.toPrimitive];
        if (void 0 !== zU) {
          var cU = zU.call(UU, XU || "default");
          if ("object" != typeof cU) return cU;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === XU ? String : Number)(UU)
      }(UU, "string");
      return "symbol" == typeof XU ? XU : XU + ""
    }

    function NU(UU) {
      return NU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, NU(UU)
    }

    function IU(UU, XU) {
      if (UU) {
        if ("string" == typeof UU) return cU(UU, XU);
        var zU = {}.toString.call(UU).slice(8, -1);
        return "Object" === zU && UU.constructor && (zU = UU.constructor.name), "Map" === zU || "Set" === zU ? Array.from(UU) : "Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU) ? cU(UU, XU) : void 0
      }
    }
    zU.r(XU), zU.d(XU, {
      api: () => Kz,
      config: () => zy,
      counter: () => Yy,
      dom: () => yy,
      findIconDefinition: () => Ay,
      icon: () => oy,
      layer: () => Dy,
      library: () => cy,
      noAuto: () => Xy,
      parse: () => Qy,
      text: () => Ey,
      toHtml: () => Fy
    });
    var pU = function() {},
      aU = {},
      tU = {},
      gU = null,
      kU = {
        mark: pU,
        measure: pU
      };
    try {
      "undefined" !== typeof window && (aU = window), "undefined" !== typeof document && (tU = document), "undefined" !== typeof MutationObserver && (gU = MutationObserver), "undefined" !== typeof performance && (kU = performance)
    } catch (nU) {}
    var GU, BU, ZU = (aU.navigator || {}).userAgent,
      RU = void 0 === ZU ? "" : ZU,
      PU = aU,
      WU = tU,
      dU = gU,
      LU = kU,
      eU = (PU.document, !!WU.documentElement && !!WU.head && "function" === typeof WU.addEventListener && "function" === typeof WU.createElement),
      CU = ~RU.indexOf("MSIE") || ~RU.indexOf("Trident/"),
      wU = {
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
      qU = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      OU = "classic",
      SU = "duotone",
      rU = "sharp",
      uU = "sharp-duotone",
      fU = "chisel",
      iU = "etch",
      HU = "graphite",
      MU = "jelly",
      vU = "jelly-duo",
      VU = "jelly-fill",
      sU = "notdog",
      nU = "notdog-duo",
      mU = "slab",
      lU = "slab-press",
      xU = "thumbprint",
      JU = "utility",
      jU = "utility-duo",
      KU = "utility-fill",
      bU = "whiteboard",
      TU = [OU, SU, rU, uU, fU, iU, HU, MU, vU, VU, sU, nU, mU, lU, xU, JU, jU, KU, bU],
      hU = (AU(AU(AU(AU(AU(AU(AU(AU(AU(AU(GU = {}, OU, "Classic"), SU, "Duotone"), rU, "Sharp"), uU, "Sharp Duotone"), fU, "Chisel"), iU, "Etch"), HU, "Graphite"), MU, "Jelly"), vU, "Jelly Duo"), VU, "Jelly Fill"), AU(AU(AU(AU(AU(AU(AU(AU(AU(GU, sU, "Notdog"), nU, "Notdog Duo"), mU, "Slab"), lU, "Slab Press"), xU, "Thumbprint"), JU, "Utility"), jU, "Utility Duo"), KU, "Utility Fill"), bU, "Whiteboard"), new Map([
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
      UX = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      XX = {
        fak: "kit",
        "fa-kit": "kit"
      },
      zX = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      cX = (AU(AU({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      yX = {
        "kit-duotone": "fakd"
      },
      QX = "duotone-group",
      AX = "swap-opacity",
      FX = "primary",
      oX = "secondary",
      DX = (AU(AU(AU(AU(AU(AU(AU(AU(AU(AU(BU = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), AU(AU(AU(AU(AU(AU(AU(AU(AU(BU, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), AU(AU({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      EX = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      YX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      NX = YX.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      IX = [].concat(EU(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", QX, AX, FX, oX]).concat(YX.map((function(UU) {
        return "".concat(UU, "x")
      }))).concat(NX.map((function(UU) {
        return "w-".concat(UU)
      }))),
      pX = "___FONT_AWESOME___",
      aX = "svg-inline--fa",
      tX = "data-fa-i2svg",
      gX = "data-fa-pseudo-element",
      kX = "data-prefix",
      GX = "data-icon",
      BX = "fontawesome-i2svg",
      ZX = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      RX = ["::before", "::after", ":before", ":after"],
      PX = function() {
        try {
          return !0
        } catch (UU) {
          return !1
        }
      }();

    function WX(UU) {
      return new Proxy(UU, {
        get: function(UU, XU) {
          return XU in UU ? UU[XU] : UU[OU]
        }
      })
    }
    var dX = oU({}, wU);
    dX[OU] = oU(oU(oU(oU({}, {
      "fa-duotone": "duotone"
    }), wU[OU]), XX), zX);
    var LX = WX(dX),
      eX = oU({}, {
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
    eX[OU] = oU(oU(oU(oU({}, {
      duotone: "fad"
    }), eX[OU]), cX), yX);
    var CX = WX(eX),
      wX = oU({}, DX);
    wX[OU] = oU(oU({}, wX[OU]), {
      fak: "fa-kit"
    });
    var qX = WX(wX),
      OX = oU({}, {
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
    OX[OU] = oU(oU({}, OX[OU]), {
      "fa-kit": "fak"
    });
    WX(OX);
    var SX = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      rX = "fa-layers-text",
      uX = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      fX = (WX(oU({}, {
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
      iX = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      HX = [].concat(EU(["kit"]), EU(IX)),
      MX = PU.FontAwesomeConfig || {};
    if (WU && "function" === typeof WU.querySelector) {
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
        var XU = DU(UU, 2),
          zU = XU[0],
          cU = XU[1],
          yU = function(UU) {
            return "" === UU || "false" !== UU && ("true" === UU || UU)
          }(function(UU) {
            var XU = WU.querySelector("script[" + UU + "]");
            if (XU) return XU.getAttribute(UU)
          }(zU));
        void 0 !== yU && null !== yU && (MX[cU] = yU)
      }))
    }
    var vX = {
      styleDefault: "solid",
      familyDefault: OU,
      cssPrefix: "fa",
      replacementClass: aX,
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
    MX.familyPrefix && (MX.cssPrefix = MX.familyPrefix);
    var VX = oU(oU({}, vX), MX);
    VX.autoReplaceSvg || (VX.observeMutations = !1);
    var sX = {};
    Object.keys(vX).forEach((function(UU) {
      Object.defineProperty(sX, UU, {
        enumerable: !0,
        set: function(XU) {
          VX[UU] = XU, nX.forEach((function(UU) {
            return UU(sX)
          }))
        },
        get: function() {
          return VX[UU]
        }
      })
    })), Object.defineProperty(sX, "familyPrefix", {
      enumerable: !0,
      set: function(UU) {
        VX.cssPrefix = UU, nX.forEach((function(UU) {
          return UU(sX)
        }))
      },
      get: function() {
        return VX.cssPrefix
      }
    }), PU.FontAwesomeConfig = sX;
    var nX = [];
    var mX = 16,
      lX = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function xX() {
      for (var UU = 12, XU = ""; UU-- > 0;) XU += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return XU
    }

    function JX(UU) {
      for (var XU = [], zU = (UU || []).length >>> 0; zU--;) XU[zU] = UU[zU];
      return XU
    }

    function jX(UU) {
      return UU.classList ? JX(UU.classList) : (UU.getAttribute("class") || "").split(" ").filter((function(UU) {
        return UU
      }))
    }

    function KX(UU) {
      return "".concat(UU).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function bX(UU) {
      return Object.keys(UU || {}).reduce((function(XU, zU) {
        return XU + "".concat(zU, ": ").concat(UU[zU].trim(), ";")
      }), "")
    }

    function TX(UU) {
      return UU.size !== lX.size || UU.x !== lX.x || UU.y !== lX.y || UU.rotate !== lX.rotate || UU.flipX || UU.flipY
    }

    function hX() {
      var UU = "fa",
        XU = aX,
        zU = sX.cssPrefix,
        cU = sX.replacementClass,
        yU = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (zU !== UU || cU !== XU) {
        var QU = new RegExp("\\.".concat(UU, "\\-"), "g"),
          AU = new RegExp("\\--".concat(UU, "\\-"), "g"),
          FU = new RegExp("\\.".concat(XU), "g");
        yU = yU.replace(QU, ".".concat(zU, "-")).replace(AU, "--".concat(zU, "-")).replace(FU, ".".concat(cU))
      }
      return yU
    }
    var Uz = !1;

    function Xz() {
      sX.autoAddCss && !Uz && (! function(UU) {
        if (UU && eU) {
          var XU = WU.createElement("style");
          XU.setAttribute("type", "text/css"), XU.innerHTML = UU;
          for (var zU = WU.head.childNodes, cU = null, yU = zU.length - 1; yU > -1; yU--) {
            var QU = zU[yU],
              AU = (QU.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(AU) > -1 && (cU = QU)
          }
          WU.head.insertBefore(XU, cU)
        }
      }(hX()), Uz = !0)
    }
    var zz = {
        mixout: function() {
          return {
            dom: {
              css: hX,
              insertCss: Xz
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              Xz()
            },
            beforeI2svg: function() {
              Xz()
            }
          }
        }
      },
      cz = PU || {};
    cz[pX] || (cz[pX] = {}), cz[pX].styles || (cz[pX].styles = {}), cz[pX].hooks || (cz[pX].hooks = {}), cz[pX].shims || (cz[pX].shims = []);
    var yz = cz[pX],
      Qz = [],
      Az = function() {
        WU.removeEventListener("DOMContentLoaded", Az), Fz = 1, Qz.map((function(UU) {
          return UU()
        }))
      },
      Fz = !1;

    function oz(UU) {
      var XU = UU.tag,
        zU = UU.attributes,
        cU = void 0 === zU ? {} : zU,
        yU = UU.children,
        QU = void 0 === yU ? [] : yU;
      return "string" === typeof UU ? KX(UU) : "<".concat(XU, " ").concat(function(UU) {
        return Object.keys(UU || {}).reduce((function(XU, zU) {
          return XU + "".concat(zU, '="').concat(KX(UU[zU]), '" ')
        }), "").trim()
      }(cU), ">").concat(QU.map(oz).join(""), "</").concat(XU, ">")
    }

    function Dz(UU, XU, zU) {
      if (UU && UU[XU] && UU[XU][zU]) return {
        prefix: XU,
        iconName: zU,
        icon: UU[XU][zU]
      }
    }
    eU && ((Fz = (WU.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(WU.readyState)) || WU.addEventListener("DOMContentLoaded", Az));
    var Ez = function(UU, XU, zU, cU) {
      var yU, QU, AU, FU = Object.keys(UU),
        oU = FU.length,
        DU = void 0 !== cU ? function(UU, XU) {
          return function(zU, cU, yU, QU) {
            return UU.call(XU, zU, cU, yU, QU)
          }
        }(XU, cU) : XU;
      for (void 0 === zU ? (yU = 1, AU = UU[FU[0]]) : (yU = 0, AU = zU); yU < oU; yU++) AU = DU(AU, UU[QU = FU[yU]], QU, UU);
      return AU
    };

    function Yz(UU) {
      return 1 !== EU(UU).length ? null : UU.codePointAt(0).toString(16)
    }

    function Nz(UU) {
      return Object.keys(UU).reduce((function(XU, zU) {
        var cU = UU[zU];
        return !!cU.icon ? XU[cU.iconName] = cU.icon : XU[zU] = cU, XU
      }), {})
    }

    function Iz(UU, XU) {
      var zU = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        cU = void 0 !== zU && zU,
        yU = Nz(XU);
      "function" !== typeof yz.hooks.addPack || cU ? yz.styles[UU] = oU(oU({}, yz.styles[UU] || {}), yU) : yz.hooks.addPack(UU, Nz(XU)), "fas" === UU && Iz("fa", XU)
    }
    var pz = yz.styles,
      az = yz.shims,
      tz = Object.keys(qX),
      gz = tz.reduce((function(UU, XU) {
        return UU[XU] = Object.keys(qX[XU]), UU
      }), {}),
      kz = null,
      Gz = {},
      Bz = {},
      Zz = {},
      Rz = {},
      Pz = {};

    function Wz(UU, XU) {
      var zU, cU = XU.split("-"),
        yU = cU[0],
        QU = cU.slice(1).join("-");
      return yU !== UU || "" === QU || (zU = QU, ~HX.indexOf(zU)) ? null : QU
    }
    var dz, Lz = function() {
      var UU = function(UU) {
        return Ez(pz, (function(XU, zU, cU) {
          return XU[cU] = Ez(zU, UU, {}), XU
        }), {})
      };
      Gz = UU((function(UU, XU, zU) {
        (XU[3] && (UU[XU[3]] = zU), XU[2]) && XU[2].filter((function(UU) {
          return "number" === typeof UU
        })).forEach((function(XU) {
          UU[XU.toString(16)] = zU
        }));
        return UU
      })), Bz = UU((function(UU, XU, zU) {
        (UU[zU] = zU, XU[2]) && XU[2].filter((function(UU) {
          return "string" === typeof UU
        })).forEach((function(XU) {
          UU[XU] = zU
        }));
        return UU
      })), Pz = UU((function(UU, XU, zU) {
        var cU = XU[2];
        return UU[zU] = zU, cU.forEach((function(XU) {
          UU[XU] = zU
        })), UU
      }));
      var XU = "far" in pz || sX.autoFetchSvg,
        zU = Ez(az, (function(UU, zU) {
          var cU = zU[0],
            yU = zU[1],
            QU = zU[2];
          return "far" !== yU || XU || (yU = "fas"), "string" === typeof cU && (UU.names[cU] = {
            prefix: yU,
            iconName: QU
          }), "number" === typeof cU && (UU.unicodes[cU.toString(16)] = {
            prefix: yU,
            iconName: QU
          }), UU
        }), {
          names: {},
          unicodes: {}
        });
      Zz = zU.names, Rz = zU.unicodes, kz = Oz(sX.styleDefault, {
        family: sX.familyDefault
      })
    };

    function ez(UU, XU) {
      return (Gz[UU] || {})[XU]
    }

    function Cz(UU, XU) {
      return (Pz[UU] || {})[XU]
    }

    function wz(UU) {
      return Zz[UU] || {
        prefix: null,
        iconName: null
      }
    }

    function qz() {
      return kz
    }
    dz = function(UU) {
      kz = Oz(UU.styleDefault, {
        family: sX.familyDefault
      })
    }, nX.push(dz), Lz();

    function Oz(UU) {
      var XU = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        zU = void 0 === XU ? OU : XU,
        cU = LX[zU][UU];
      if (zU === SU && !UU) return "fad";
      var yU = CX[zU][UU] || CX[zU][cU],
        QU = UU in yz.styles ? UU : null;
      return yU || QU || null
    }

    function Sz(UU) {
      return UU.sort().filter((function(UU, XU, zU) {
        return zU.indexOf(UU) === XU
      }))
    }
    var rz = EX.concat(UX);

    function uz(UU) {
      var XU = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        zU = void 0 !== XU && XU,
        cU = null,
        yU = Sz(UU.filter((function(UU) {
          return rz.includes(UU)
        }))),
        QU = Sz(UU.filter((function(UU) {
          return !rz.includes(UU)
        }))),
        AU = DU(yU.filter((function(UU) {
          return cU = UU, !qU.includes(UU)
        })), 1)[0],
        FU = void 0 === AU ? null : AU,
        EU = function(UU) {
          var XU = OU,
            zU = tz.reduce((function(UU, XU) {
              return UU[XU] = "".concat(sX.cssPrefix, "-").concat(XU), UU
            }), {});
          return TU.forEach((function(cU) {
            (UU.includes(zU[cU]) || UU.some((function(UU) {
              return gz[cU].includes(UU)
            }))) && (XU = cU)
          })), XU
        }(yU),
        YU = oU(oU({}, function(UU) {
          var XU = [],
            zU = null;
          return UU.forEach((function(UU) {
            var cU = Wz(sX.cssPrefix, UU);
            cU ? zU = cU : UU && XU.push(UU)
          })), {
            iconName: zU,
            rest: XU
          }
        }(QU)), {}, {
          prefix: Oz(FU, {
            family: EU
          })
        });
      return oU(oU(oU({}, YU), function(UU) {
        var XU = UU.values,
          zU = UU.family,
          cU = UU.canonical,
          yU = UU.givenPrefix,
          QU = void 0 === yU ? "" : yU,
          AU = UU.styles,
          FU = void 0 === AU ? {} : AU,
          oU = UU.config,
          DU = void 0 === oU ? {} : oU,
          EU = zU === SU,
          YU = XU.includes("fa-duotone") || XU.includes("fad"),
          NU = "duotone" === DU.familyDefault,
          IU = "fad" === cU.prefix || "fa-duotone" === cU.prefix;
        !EU && (YU || NU || IU) && (cU.prefix = "fad");
        (XU.includes("fa-brands") || XU.includes("fab")) && (cU.prefix = "fab");
        if (!cU.prefix && fz.includes(zU)) {
          if (Object.keys(FU).find((function(UU) {
              return iz.includes(UU)
            })) || DU.autoFetchSvg) {
            var pU = hU.get(zU).defaultShortPrefixId;
            cU.prefix = pU, cU.iconName = Cz(cU.prefix, cU.iconName) || cU.iconName
          }
        }
        "fa" !== cU.prefix && "fa" !== QU || (cU.prefix = qz() || "fas");
        return cU
      }({
        values: UU,
        family: EU,
        styles: pz,
        config: sX,
        canonical: YU,
        givenPrefix: cU
      })), function(UU, XU, zU) {
        var cU = zU.prefix,
          yU = zU.iconName;
        if (UU || !cU || !yU) return {
          prefix: cU,
          iconName: yU
        };
        var QU = "fa" === XU ? wz(yU) : {},
          AU = Cz(cU, yU);
        yU = QU.iconName || AU || yU, "far" !== (cU = QU.prefix || cU) || pz.far || !pz.fas || sX.autoFetchSvg || (cU = "fas");
        return {
          prefix: cU,
          iconName: yU
        }
      }(zU, cU, YU))
    }
    var fz = TU.filter((function(UU) {
        return UU !== OU || UU !== SU
      })),
      iz = Object.keys(DX).filter((function(UU) {
        return UU !== OU
      })).map((function(UU) {
        return Object.keys(DX[UU])
      })).flat();
    var Hz = function() {
        return function(UU, XU, zU) {
          return XU && yU(UU.prototype, XU), zU && yU(UU, zU), Object.defineProperty(UU, "prototype", {
            writable: !1
          }), UU
        }((function UU() {
          ! function(UU, XU) {
            if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
          }(this, UU), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var UU = this, XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
            var yU = zU.reduce(this._pullDefinitions, {});
            Object.keys(yU).forEach((function(XU) {
              UU.definitions[XU] = oU(oU({}, UU.definitions[XU] || {}), yU[XU]), Iz(XU, yU[XU]);
              var zU = qX[OU][XU];
              zU && Iz(zU, yU[XU]), Lz()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(UU, XU) {
            var zU = XU.prefix && XU.iconName && XU.icon ? {
              0: XU
            } : XU;
            return Object.keys(zU).map((function(XU) {
              var cU = zU[XU],
                yU = cU.prefix,
                QU = cU.iconName,
                AU = cU.icon,
                FU = AU[2];
              UU[yU] || (UU[yU] = {}), FU.length > 0 && FU.forEach((function(XU) {
                "string" === typeof XU && (UU[yU][XU] = AU)
              })), UU[yU][QU] = AU
            })), UU
          }
        }])
      }(),
      Mz = [],
      vz = {},
      Vz = {},
      sz = Object.keys(Vz);

    function nz(UU, XU) {
      for (var zU = arguments.length, cU = new Array(zU > 2 ? zU - 2 : 0), yU = 2; yU < zU; yU++) cU[yU - 2] = arguments[yU];
      return (vz[UU] || []).forEach((function(UU) {
        XU = UU.apply(null, [XU].concat(cU))
      })), XU
    }

    function mz(UU) {
      for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
      (vz[UU] || []).forEach((function(UU) {
        UU.apply(null, zU)
      }))
    }

    function lz() {
      var UU = arguments[0],
        XU = Array.prototype.slice.call(arguments, 1);
      return Vz[UU] ? Vz[UU].apply(null, XU) : void 0
    }

    function xz(UU) {
      "fa" === UU.prefix && (UU.prefix = "fas");
      var XU = UU.iconName,
        zU = UU.prefix || qz();
      if (XU) return XU = Cz(zU, XU) || XU, Dz(Jz.definitions, zU, XU) || Dz(yz.styles, zU, XU)
    }
    var Jz = new Hz,
      jz = {
        i2svg: function() {
          var UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return eU ? (mz("beforeI2svg", UU), lz("pseudoElements2svg", UU), lz("i2svg", UU)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var UU, XU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            zU = XU.autoReplaceSvgRoot;
          !1 === sX.autoReplaceSvg && (sX.autoReplaceSvg = !0), sX.observeMutations = !0, UU = function() {
            bz({
              autoReplaceSvgRoot: zU
            }), mz("watch", XU)
          }, eU && (Fz ? setTimeout(UU, 0) : Qz.push(UU))
        }
      },
      Kz = {
        noAuto: function() {
          sX.autoReplaceSvg = !1, sX.observeMutations = !1, mz("noAuto")
        },
        config: sX,
        dom: jz,
        parse: {
          icon: function(UU) {
            if (null === UU) return null;
            if ("object" === NU(UU) && UU.prefix && UU.iconName) return {
              prefix: UU.prefix,
              iconName: Cz(UU.prefix, UU.iconName) || UU.iconName
            };
            if (Array.isArray(UU) && 2 === UU.length) {
              var XU = 0 === UU[1].indexOf("fa-") ? UU[1].slice(3) : UU[1],
                zU = Oz(UU[0]);
              return {
                prefix: zU,
                iconName: Cz(zU, XU) || XU
              }
            }
            if ("string" === typeof UU && (UU.indexOf("".concat(sX.cssPrefix, "-")) > -1 || UU.match(SX))) {
              var cU = uz(UU.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: cU.prefix || qz(),
                iconName: Cz(cU.prefix, cU.iconName) || cU.iconName
              }
            }
            if ("string" === typeof UU) {
              var yU = qz();
              return {
                prefix: yU,
                iconName: Cz(yU, UU) || UU
              }
            }
          }
        },
        library: Jz,
        findIconDefinition: xz,
        toHtml: oz
      },
      bz = function() {
        var UU = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          XU = void 0 === UU ? WU : UU;
        (Object.keys(yz.styles).length > 0 || sX.autoFetchSvg) && eU && sX.autoReplaceSvg && Kz.dom.i2svg({
          node: XU
        })
      };

    function Tz(UU, XU) {
      return Object.defineProperty(UU, "abstract", {
        get: XU
      }), Object.defineProperty(UU, "html", {
        get: function() {
          return UU.abstract.map((function(UU) {
            return oz(UU)
          }))
        }
      }), Object.defineProperty(UU, "node", {
        get: function() {
          if (eU) {
            var XU = WU.createElement("div");
            return XU.innerHTML = UU.html, XU.children
          }
        }
      }), UU
    }

    function hz(UU) {
      var XU = UU.icons,
        zU = XU.main,
        cU = XU.mask,
        yU = UU.prefix,
        QU = UU.iconName,
        AU = UU.transform,
        FU = UU.symbol,
        DU = UU.maskId,
        EU = UU.extra,
        YU = UU.watchable,
        NU = void 0 !== YU && YU,
        IU = cU.found ? cU : zU,
        pU = IU.width,
        aU = IU.height,
        tU = [sX.replacementClass, QU ? "".concat(sX.cssPrefix, "-").concat(QU) : ""].filter((function(UU) {
          return -1 === EU.classes.indexOf(UU)
        })).filter((function(UU) {
          return "" !== UU || !!UU
        })).concat(EU.classes).join(" "),
        gU = {
          children: [],
          attributes: oU(oU({}, EU.attributes), {}, {
            "data-prefix": yU,
            "data-icon": QU,
            class: tU,
            role: EU.attributes.role || "img",
            viewBox: "0 0 ".concat(pU, " ").concat(aU)
          })
        };
      (function(UU) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(XU) {
          return XU in UU
        }))
      })(EU.attributes) || EU.attributes["aria-hidden"] || (gU.attributes["aria-hidden"] = "true"), NU && (gU.attributes[tX] = "");
      var kU = oU(oU({}, gU), {}, {
          prefix: yU,
          iconName: QU,
          main: zU,
          mask: cU,
          maskId: DU,
          transform: AU,
          symbol: FU,
          styles: oU({}, EU.styles)
        }),
        GU = cU.found && zU.found ? lz("generateAbstractMask", kU) || {
          children: [],
          attributes: {}
        } : lz("generateAbstractIcon", kU) || {
          children: [],
          attributes: {}
        },
        BU = GU.children,
        ZU = GU.attributes;
      return kU.children = BU, kU.attributes = ZU, FU ? function(UU) {
        var XU = UU.prefix,
          zU = UU.iconName,
          cU = UU.children,
          yU = UU.attributes,
          QU = UU.symbol,
          AU = !0 === QU ? "".concat(XU, "-").concat(sX.cssPrefix, "-").concat(zU) : QU;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: oU(oU({}, yU), {}, {
              id: AU
            }),
            children: cU
          }]
        }]
      }(kU) : function(UU) {
        var XU = UU.children,
          zU = UU.main,
          cU = UU.mask,
          yU = UU.attributes,
          QU = UU.styles,
          AU = UU.transform;
        if (TX(AU) && zU.found && !cU.found) {
          var FU = {
            x: zU.width / zU.height / 2,
            y: .5
          };
          yU.style = bX(oU(oU({}, QU), {}, {
            "transform-origin": "".concat(FU.x + AU.x / 16, "em ").concat(FU.y + AU.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: yU,
          children: XU
        }]
      }(kU)
    }

    function Uc(UU) {
      var XU = UU.content,
        zU = UU.width,
        cU = UU.height,
        yU = UU.transform,
        QU = UU.extra,
        AU = UU.watchable,
        FU = void 0 !== AU && AU,
        DU = oU(oU({}, QU.attributes), {}, {
          class: QU.classes.join(" ")
        });
      FU && (DU[tX] = "");
      var EU = oU({}, QU.styles);
      TX(yU) && (EU.transform = function(UU) {
        var XU = UU.transform,
          zU = UU.width,
          cU = void 0 === zU ? 16 : zU,
          yU = UU.height,
          QU = void 0 === yU ? 16 : yU,
          AU = UU.startCentered,
          FU = void 0 !== AU && AU,
          oU = "";
        return oU += FU && CU ? "translate(".concat(XU.x / mX - cU / 2, "em, ").concat(XU.y / mX - QU / 2, "em) ") : FU ? "translate(calc(-50% + ".concat(XU.x / mX, "em), calc(-50% + ").concat(XU.y / mX, "em)) ") : "translate(".concat(XU.x / mX, "em, ").concat(XU.y / mX, "em) "), oU += "scale(".concat(XU.size / mX * (XU.flipX ? -1 : 1), ", ").concat(XU.size / mX * (XU.flipY ? -1 : 1), ") "), oU + "rotate(".concat(XU.rotate, "deg) ")
      }({
        transform: yU,
        startCentered: !0,
        width: zU,
        height: cU
      }), EU["-webkit-transform"] = EU.transform);
      var YU = bX(EU);
      YU.length > 0 && (DU.style = YU);
      var NU = [];
      return NU.push({
        tag: "span",
        attributes: DU,
        children: [XU]
      }), NU
    }
    var Xc = yz.styles;

    function zc(UU) {
      var XU = UU[0],
        zU = UU[1],
        cU = DU(UU.slice(4), 1)[0];
      return {
        found: !0,
        width: XU,
        height: zU,
        icon: Array.isArray(cU) ? {
          tag: "g",
          attributes: {
            class: "".concat(sX.cssPrefix, "-").concat(iX.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(sX.cssPrefix, "-").concat(iX.SECONDARY),
              fill: "currentColor",
              d: cU[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(sX.cssPrefix, "-").concat(iX.PRIMARY),
              fill: "currentColor",
              d: cU[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: cU
          }
        }
      }
    }
    var cc = {
      found: !1,
      width: 512,
      height: 512
    };

    function yc(UU, XU) {
      var zU = XU;
      return "fa" === XU && null !== sX.styleDefault && (XU = qz()), new Promise((function(cU, yU) {
        if ("fa" === zU) {
          var QU = wz(UU) || {};
          UU = QU.iconName || UU, XU = QU.prefix || XU
        }
        if (UU && XU && Xc[XU] && Xc[XU][UU]) return cU(zc(Xc[XU][UU]));
        ! function(UU, XU) {
          PX || sX.showMissingIcons || !UU || console.error('Icon with name "'.concat(UU, '" and prefix "').concat(XU, '" is missing.'))
        }(UU, XU), cU(oU(oU({}, cc), {}, {
          icon: sX.showMissingIcons && UU && lz("missingIconAbstract") || {}
        }))
      }))
    }
    var Qc = function() {},
      Ac = sX.measurePerformance && LU && LU.mark && LU.measure ? LU : {
        mark: Qc,
        measure: Qc
      },
      Fc = 'FA "7.2.0"',
      oc = function(UU) {
        Ac.mark("".concat(Fc, " ").concat(UU, " ends")), Ac.measure("".concat(Fc, " ").concat(UU), "".concat(Fc, " ").concat(UU, " begins"), "".concat(Fc, " ").concat(UU, " ends"))
      },
      Dc = function(UU) {
        return Ac.mark("".concat(Fc, " ").concat(UU, " begins")),
          function() {
            return oc(UU)
          }
      },
      Ec = function() {};

    function Yc(UU) {
      return "string" === typeof(UU.getAttribute ? UU.getAttribute(tX) : null)
    }

    function Nc(UU) {
      return WU.createElementNS("http://www.w3.org/2000/svg", UU)
    }

    function Ic(UU) {
      return WU.createElement(UU)
    }

    function pc(UU) {
      var XU = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        zU = void 0 === XU ? "svg" === UU.tag ? Nc : Ic : XU;
      if ("string" === typeof UU) return WU.createTextNode(UU);
      var cU = zU(UU.tag);
      return Object.keys(UU.attributes || []).forEach((function(XU) {
        cU.setAttribute(XU, UU.attributes[XU])
      })), (UU.children || []).forEach((function(UU) {
        cU.appendChild(pc(UU, {
          ceFn: zU
        }))
      })), cU
    }
    var ac = {
      replace: function(UU) {
        var XU = UU[0];
        if (XU.parentNode)
          if (UU[1].forEach((function(UU) {
              XU.parentNode.insertBefore(pc(UU), XU)
            })), null === XU.getAttribute(tX) && sX.keepOriginalSource) {
            var zU = WU.createComment(function(UU) {
              var XU = " ".concat(UU.outerHTML, " ");
              return "".concat(XU, "Font Awesome fontawesome.com ")
            }(XU));
            XU.parentNode.replaceChild(zU, XU)
          } else XU.remove()
      },
      nest: function(UU) {
        var XU = UU[0],
          zU = UU[1];
        if (~jX(XU).indexOf(sX.replacementClass)) return ac.replace(UU);
        var cU = new RegExp("".concat(sX.cssPrefix, "-.*"));
        if (delete zU[0].attributes.id, zU[0].attributes.class) {
          var yU = zU[0].attributes.class.split(" ").reduce((function(UU, XU) {
            return XU === sX.replacementClass || XU.match(cU) ? UU.toSvg.push(XU) : UU.toNode.push(XU), UU
          }), {
            toNode: [],
            toSvg: []
          });
          zU[0].attributes.class = yU.toSvg.join(" "), 0 === yU.toNode.length ? XU.removeAttribute("class") : XU.setAttribute("class", yU.toNode.join(" "))
        }
        var QU = zU.map((function(UU) {
          return oz(UU)
        })).join("\n");
        XU.setAttribute(tX, ""), XU.innerHTML = QU
      }
    };

    function tc(UU) {
      UU()
    }

    function gc(UU, XU) {
      var zU = "function" === typeof XU ? XU : Ec;
      if (0 === UU.length) zU();
      else {
        var cU = tc;
        "async" === sX.mutateApproach && (cU = PU.requestAnimationFrame || tc), cU((function() {
          var XU = !0 === sX.autoReplaceSvg ? ac.replace : ac[sX.autoReplaceSvg] || ac.replace,
            cU = Dc("mutate");
          UU.map(XU), cU(), zU()
        }))
      }
    }
    var kc = !1;

    function Gc() {
      kc = !0
    }

    function Bc() {
      kc = !1
    }
    var Zc = null;

    function Rc(UU) {
      if (dU && sX.observeMutations) {
        var XU = UU.treeCallback,
          zU = void 0 === XU ? Ec : XU,
          cU = UU.nodeCallback,
          yU = void 0 === cU ? Ec : cU,
          QU = UU.pseudoElementsCallback,
          AU = void 0 === QU ? Ec : QU,
          FU = UU.observeMutationsRoot,
          oU = void 0 === FU ? WU : FU;
        Zc = new dU((function(UU) {
          if (!kc) {
            var XU = qz();
            JX(UU).forEach((function(UU) {
              if ("childList" === UU.type && UU.addedNodes.length > 0 && !Yc(UU.addedNodes[0]) && (sX.searchPseudoElements && AU(UU.target), zU(UU.target)), "attributes" === UU.type && UU.target.parentNode && sX.searchPseudoElements && AU([UU.target], !0), "attributes" === UU.type && Yc(UU.target) && ~fX.indexOf(UU.attributeName))
                if ("class" === UU.attributeName && function(UU) {
                    var XU = UU.getAttribute ? UU.getAttribute(kX) : null,
                      zU = UU.getAttribute ? UU.getAttribute(GX) : null;
                    return XU && zU
                  }(UU.target)) {
                  var cU = uz(jX(UU.target)),
                    QU = cU.prefix,
                    FU = cU.iconName;
                  UU.target.setAttribute(kX, QU || XU), FU && UU.target.setAttribute(GX, FU)
                } else(oU = UU.target) && oU.classList && oU.classList.contains && oU.classList.contains(sX.replacementClass) && yU(UU.target);
              var oU
            }))
          }
        })), eU && Zc.observe(oU, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function Pc(UU) {
      var XU, zU, cU = UU.getAttribute("data-prefix"),
        yU = UU.getAttribute("data-icon"),
        QU = void 0 !== UU.innerText ? UU.innerText.trim() : "",
        AU = uz(jX(UU));
      return AU.prefix || (AU.prefix = qz()), cU && yU && (AU.prefix = cU, AU.iconName = yU), AU.iconName && AU.prefix || (AU.prefix && QU.length > 0 && (AU.iconName = (XU = AU.prefix, zU = UU.innerText, (Bz[XU] || {})[zU] || ez(AU.prefix, Yz(UU.innerText)))), !AU.iconName && sX.autoFetchSvg && UU.firstChild && UU.firstChild.nodeType === Node.TEXT_NODE && (AU.iconName = UU.firstChild.data)), AU
    }

    function Wc(UU) {
      var XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        zU = Pc(UU),
        cU = zU.iconName,
        yU = zU.prefix,
        QU = zU.rest,
        AU = function(UU) {
          return JX(UU.attributes).reduce((function(UU, XU) {
            return "class" !== UU.name && "style" !== UU.name && (UU[XU.name] = XU.value), UU
          }), {})
        }(UU),
        FU = nz("parseNodeAttributes", {}, UU),
        DU = XU.styleParser ? function(UU) {
          var XU = UU.getAttribute("style"),
            zU = [];
          return XU && (zU = XU.split(";").reduce((function(UU, XU) {
            var zU = XU.split(":"),
              cU = zU[0],
              yU = zU.slice(1);
            return cU && yU.length > 0 && (UU[cU] = yU.join(":").trim()), UU
          }), {})), zU
        }(UU) : [];
      return oU({
        iconName: cU,
        prefix: yU,
        transform: lX,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: QU,
          styles: DU,
          attributes: AU
        }
      }, FU)
    }
    var dc = yz.styles;

    function Lc(UU) {
      var XU = "nest" === sX.autoReplaceSvg ? Wc(UU, {
        styleParser: !1
      }) : Wc(UU);
      return ~XU.extra.classes.indexOf(rX) ? lz("generateLayersText", UU, XU) : lz("generateSvgReplacementMutation", UU, XU)
    }

    function ec(UU) {
      var XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!eU) return Promise.resolve();
      var zU = WU.documentElement.classList,
        cU = function(UU) {
          return zU.add("".concat(BX, "-").concat(UU))
        },
        yU = function(UU) {
          return zU.remove("".concat(BX, "-").concat(UU))
        },
        QU = sX.autoFetchSvg ? [].concat(EU(UX), EU(EX)) : qU.concat(Object.keys(dc));
      QU.includes("fa") || QU.push("fa");
      var AU = [".".concat(rX, ":not([").concat(tX, "])")].concat(QU.map((function(UU) {
        return ".".concat(UU, ":not([").concat(tX, "])")
      }))).join(", ");
      if (0 === AU.length) return Promise.resolve();
      var FU = [];
      try {
        FU = JX(UU.querySelectorAll(AU))
      } catch (YU) {}
      if (!(FU.length > 0)) return Promise.resolve();
      cU("pending"), yU("complete");
      var oU = Dc("onTree"),
        DU = FU.reduce((function(UU, XU) {
          try {
            var zU = Lc(XU);
            zU && UU.push(zU)
          } catch (YU) {
            PX || "MissingIcon" === YU.name && console.error(YU)
          }
          return UU
        }), []);
      return new Promise((function(UU, zU) {
        Promise.all(DU).then((function(zU) {
          gc(zU, (function() {
            cU("active"), cU("complete"), yU("pending"), "function" === typeof XU && XU(), oU(), UU()
          }))
        })).catch((function(UU) {
          oU(), zU(UU)
        }))
      }))
    }

    function Cc(UU) {
      var XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      Lc(UU).then((function(UU) {
        UU && gc([UU], XU)
      }))
    }
    var wc = function(UU) {
        var XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          zU = XU.transform,
          cU = void 0 === zU ? lX : zU,
          yU = XU.symbol,
          QU = void 0 !== yU && yU,
          AU = XU.mask,
          FU = void 0 === AU ? null : AU,
          DU = XU.maskId,
          EU = void 0 === DU ? null : DU,
          YU = XU.classes,
          NU = void 0 === YU ? [] : YU,
          IU = XU.attributes,
          pU = void 0 === IU ? {} : IU,
          aU = XU.styles,
          tU = void 0 === aU ? {} : aU;
        if (UU) {
          var gU = UU.prefix,
            kU = UU.iconName,
            GU = UU.icon;
          return Tz(oU({
            type: "icon"
          }, UU), (function() {
            return mz("beforeDOMElementCreation", {
              iconDefinition: UU,
              params: XU
            }), hz({
              icons: {
                main: zc(GU),
                mask: FU ? zc(FU.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: gU,
              iconName: kU,
              transform: oU(oU({}, lX), cU),
              symbol: QU,
              maskId: EU,
              extra: {
                attributes: pU,
                styles: tU,
                classes: NU
              }
            })
          }))
        }
      },
      qc = {
        mixout: function() {
          return {
            icon: (UU = wc, function(XU) {
              var zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                cU = (XU || {}).icon ? XU : xz(XU || {}),
                yU = zU.mask;
              return yU && (yU = (yU || {}).icon ? yU : xz(yU || {})), UU(cU, oU(oU({}, zU), {}, {
                mask: yU
              }))
            })
          };
          var UU
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(UU) {
              return UU.treeCallback = ec, UU.nodeCallback = Cc, UU
            }
          }
        },
        provides: function(UU) {
          UU.i2svg = function(UU) {
            var XU = UU.node,
              zU = void 0 === XU ? WU : XU,
              cU = UU.callback;
            return ec(zU, void 0 === cU ? function() {} : cU)
          }, UU.generateSvgReplacementMutation = function(UU, XU) {
            var zU = XU.iconName,
              cU = XU.prefix,
              yU = XU.transform,
              QU = XU.symbol,
              AU = XU.mask,
              FU = XU.maskId,
              oU = XU.extra;
            return new Promise((function(XU, EU) {
              Promise.all([yc(zU, cU), AU.iconName ? yc(AU.iconName, AU.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(AU) {
                var EU = DU(AU, 2),
                  YU = EU[0],
                  NU = EU[1];
                XU([UU, hz({
                  icons: {
                    main: YU,
                    mask: NU
                  },
                  prefix: cU,
                  iconName: zU,
                  transform: yU,
                  symbol: QU,
                  maskId: FU,
                  extra: oU,
                  watchable: !0
                })])
              })).catch(EU)
            }))
          }, UU.generateAbstractIcon = function(UU) {
            var XU, zU = UU.children,
              cU = UU.attributes,
              yU = UU.main,
              QU = UU.transform,
              AU = bX(UU.styles);
            return AU.length > 0 && (cU.style = AU), TX(QU) && (XU = lz("generateAbstractTransformGrouping", {
              main: yU,
              transform: QU,
              containerWidth: yU.width,
              iconWidth: yU.width
            })), zU.push(XU || yU.icon), {
              children: zU,
              attributes: cU
            }
          }
        }
      },
      Oc = {
        mixout: function() {
          return {
            layer: function(UU) {
              var XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                zU = XU.classes,
                cU = void 0 === zU ? [] : zU;
              return Tz({
                type: "layer"
              }, (function() {
                mz("beforeDOMElementCreation", {
                  assembler: UU,
                  params: XU
                });
                var zU = [];
                return UU((function(UU) {
                  Array.isArray(UU) ? UU.map((function(UU) {
                    zU = zU.concat(UU.abstract)
                  })) : zU = zU.concat(UU.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(sX.cssPrefix, "-layers")].concat(EU(cU)).join(" ")
                  },
                  children: zU
                }]
              }))
            }
          }
        }
      },
      Sc = {
        mixout: function() {
          return {
            counter: function(UU) {
              var XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                zU = XU.title,
                cU = void 0 === zU ? null : zU,
                yU = XU.classes,
                QU = void 0 === yU ? [] : yU,
                AU = XU.attributes,
                FU = void 0 === AU ? {} : AU,
                DU = XU.styles,
                YU = void 0 === DU ? {} : DU;
              return Tz({
                type: "counter",
                content: UU
              }, (function() {
                return mz("beforeDOMElementCreation", {
                    content: UU,
                    params: XU
                  }),
                  function(UU) {
                    var XU = UU.content,
                      zU = UU.extra,
                      cU = oU(oU({}, zU.attributes), {}, {
                        class: zU.classes.join(" ")
                      }),
                      yU = bX(zU.styles);
                    yU.length > 0 && (cU.style = yU);
                    var QU = [];
                    return QU.push({
                      tag: "span",
                      attributes: cU,
                      children: [XU]
                    }), QU
                  }({
                    content: UU.toString(),
                    title: cU,
                    extra: {
                      attributes: FU,
                      styles: YU,
                      classes: ["".concat(sX.cssPrefix, "-layers-counter")].concat(EU(QU))
                    }
                  })
              }))
            }
          }
        }
      },
      rc = {
        mixout: function() {
          return {
            text: function(UU) {
              var XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                zU = XU.transform,
                cU = void 0 === zU ? lX : zU,
                yU = XU.classes,
                QU = void 0 === yU ? [] : yU,
                AU = XU.attributes,
                FU = void 0 === AU ? {} : AU,
                DU = XU.styles,
                YU = void 0 === DU ? {} : DU;
              return Tz({
                type: "text",
                content: UU
              }, (function() {
                return mz("beforeDOMElementCreation", {
                  content: UU,
                  params: XU
                }), Uc({
                  content: UU,
                  transform: oU(oU({}, lX), cU),
                  extra: {
                    attributes: FU,
                    styles: YU,
                    classes: ["".concat(sX.cssPrefix, "-layers-text")].concat(EU(QU))
                  }
                })
              }))
            }
          }
        },
        provides: function(UU) {
          UU.generateLayersText = function(UU, XU) {
            var zU = XU.transform,
              cU = XU.extra,
              yU = null,
              QU = null;
            if (CU) {
              var AU = parseInt(getComputedStyle(UU).fontSize, 10),
                FU = UU.getBoundingClientRect();
              yU = FU.width / AU, QU = FU.height / AU
            }
            return Promise.resolve([UU, Uc({
              content: UU.innerHTML,
              width: yU,
              height: QU,
              transform: zU,
              extra: cU,
              watchable: !0
            })])
          }
        }
      },
      uc = new RegExp('"', "ug"),
      fc = [1105920, 1112319],
      ic = oU(oU(oU(oU({}, {
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
      Hc = Object.keys(ic).reduce((function(UU, XU) {
        return UU[XU.toLowerCase()] = ic[XU], UU
      }), {}),
      Mc = Object.keys(Hc).reduce((function(UU, XU) {
        var zU = Hc[XU];
        return UU[XU] = zU[900] || EU(Object.entries(zU))[0][1], UU
      }), {});

    function vc(UU, XU) {
      var zU = "".concat("data-fa-pseudo-element-pending").concat(XU.replace(":", "-"));
      return new Promise((function(cU, yU) {
        if (null !== UU.getAttribute(zU)) return cU();
        var QU = JX(UU.children).filter((function(UU) {
            return UU.getAttribute(gX) === XU
          }))[0],
          AU = PU.getComputedStyle(UU, XU),
          FU = AU.getPropertyValue("font-family"),
          DU = FU.match(uX),
          YU = AU.getPropertyValue("font-weight"),
          NU = AU.getPropertyValue("content");
        if (QU && !DU) return UU.removeChild(QU), cU();
        if (DU && "none" !== NU && "" !== NU) {
          var IU = AU.getPropertyValue("content"),
            pU = function(UU, XU) {
              var zU = UU.replace(/^['"]|['"]$/g, "").toLowerCase(),
                cU = parseInt(XU),
                yU = isNaN(cU) ? "normal" : cU;
              return (Hc[zU] || {})[yU] || Mc[zU]
            }(FU, YU),
            aU = function(UU) {
              return Yz(EU(UU.replace(uc, ""))[0] || "")
            }(IU),
            tU = DU[0].startsWith("FontAwesome"),
            gU = function(UU) {
              var XU = UU.getPropertyValue("font-feature-settings").includes("ss01"),
                zU = UU.getPropertyValue("content").replace(uc, ""),
                cU = zU.codePointAt(0),
                yU = cU >= fc[0] && cU <= fc[1],
                QU = 2 === zU.length && zU[0] === zU[1];
              return yU || QU || XU
            }(AU),
            kU = ez(pU, aU),
            GU = kU;
          if (tU) {
            var BU = function(UU) {
              var XU = Rz[UU],
                zU = ez("fas", UU);
              return XU || (zU ? {
                prefix: "fas",
                iconName: zU
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(aU);
            BU.iconName && BU.prefix && (kU = BU.iconName, pU = BU.prefix)
          }
          if (!kU || gU || QU && QU.getAttribute(kX) === pU && QU.getAttribute(GX) === GU) cU();
          else {
            UU.setAttribute(zU, GU), QU && UU.removeChild(QU);
            var ZU = {
                iconName: null,
                prefix: null,
                transform: lX,
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
              RU = ZU.extra;
            RU.attributes[gX] = XU, yc(kU, pU).then((function(yU) {
              var QU = hz(oU(oU({}, ZU), {}, {
                  icons: {
                    main: yU,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: pU,
                  iconName: GU,
                  extra: RU,
                  watchable: !0
                })),
                AU = WU.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === XU ? UU.insertBefore(AU, UU.firstChild) : UU.appendChild(AU), AU.outerHTML = QU.map((function(UU) {
                return oz(UU)
              })).join("\n"), UU.removeAttribute(zU), cU()
            })).catch(yU)
          }
        } else cU()
      }))
    }

    function Vc(UU) {
      return Promise.all([vc(UU, "::before"), vc(UU, "::after")])
    }

    function sc(UU) {
      return UU.parentNode !== document.head && !~ZX.indexOf(UU.tagName.toUpperCase()) && !UU.getAttribute(gX) && (!UU.parentNode || "svg" !== UU.parentNode.tagName)
    }
    var nc = function(UU) {
        return !!UU && RX.some((function(XU) {
          return UU.includes(XU)
        }))
      },
      mc = function(UU) {
        if (!UU) return [];
        var XU = new Set,
          zU = UU.split(/,(?![^()]*\))/).map((function(UU) {
            return UU.trim()
          }));
        zU = zU.flatMap((function(UU) {
          return UU.includes("(") ? UU : UU.split(",").map((function(UU) {
            return UU.trim()
          }))
        }));
        var cU, yU = QU(zU);
        try {
          for (yU.s(); !(cU = yU.n()).done;) {
            var AU = cU.value;
            if (nc(AU)) {
              var FU = RX.reduce((function(UU, XU) {
                return UU.replace(XU, "")
              }), AU);
              "" !== FU && "*" !== FU && XU.add(FU)
            }
          }
        } catch (oU) {
          yU.e(oU)
        } finally {
          yU.f()
        }
        return XU
      };

    function lc(UU) {
      if (eU) {
        var XU;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) XU = UU;
        else if (sX.searchPseudoElementsFullScan) XU = UU.querySelectorAll("*");
        else {
          var zU, cU = new Set,
            yU = QU(document.styleSheets);
          try {
            for (yU.s(); !(zU = yU.n()).done;) {
              var AU = zU.value;
              try {
                var FU, oU = QU(AU.cssRules);
                try {
                  for (oU.s(); !(FU = oU.n()).done;) {
                    var DU, EU = FU.value,
                      YU = QU(mc(EU.selectorText));
                    try {
                      for (YU.s(); !(DU = YU.n()).done;) {
                        var NU = DU.value;
                        cU.add(NU)
                      }
                    } catch (pU) {
                      YU.e(pU)
                    } finally {
                      YU.f()
                    }
                  }
                } catch (pU) {
                  oU.e(pU)
                } finally {
                  oU.f()
                }
              } catch (aU) {
                sX.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(AU.href, " (").concat(aU.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (pU) {
            yU.e(pU)
          } finally {
            yU.f()
          }
          if (!cU.size) return;
          var IU = Array.from(cU).join(", ");
          try {
            XU = UU.querySelectorAll(IU)
          } catch (tU) {}
        }
        return new Promise((function(UU, zU) {
          var cU = JX(XU).filter(sc).map(Vc),
            yU = Dc("searchPseudoElements");
          Gc(), Promise.all(cU).then((function() {
            yU(), Bc(), UU()
          })).catch((function() {
            yU(), Bc(), zU()
          }))
        }))
      }
    }
    var xc = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(UU) {
              return UU.pseudoElementsCallback = lc, UU
            }
          }
        },
        provides: function(UU) {
          UU.pseudoElements2svg = function(UU) {
            var XU = UU.node,
              zU = void 0 === XU ? WU : XU;
            sX.searchPseudoElements && lc(zU)
          }
        }
      },
      Jc = !1,
      jc = function(UU) {
        return UU.toLowerCase().split(" ").reduce((function(UU, XU) {
          var zU = XU.toLowerCase().split("-"),
            cU = zU[0],
            yU = zU.slice(1).join("-");
          if (cU && "h" === yU) return UU.flipX = !0, UU;
          if (cU && "v" === yU) return UU.flipY = !0, UU;
          if (yU = parseFloat(yU), isNaN(yU)) return UU;
          switch (cU) {
            case "grow":
              UU.size = UU.size + yU;
              break;
            case "shrink":
              UU.size = UU.size - yU;
              break;
            case "left":
              UU.x = UU.x - yU;
              break;
            case "right":
              UU.x = UU.x + yU;
              break;
            case "up":
              UU.y = UU.y - yU;
              break;
            case "down":
              UU.y = UU.y + yU;
              break;
            case "rotate":
              UU.rotate = UU.rotate + yU
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
      Kc = {
        mixout: function() {
          return {
            parse: {
              transform: function(UU) {
                return jc(UU)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(UU, XU) {
              var zU = XU.getAttribute("data-fa-transform");
              return zU && (UU.transform = jc(zU)), UU
            }
          }
        },
        provides: function(UU) {
          UU.generateAbstractTransformGrouping = function(UU) {
            var XU = UU.main,
              zU = UU.transform,
              cU = UU.containerWidth,
              yU = UU.iconWidth,
              QU = {
                transform: "translate(".concat(cU / 2, " 256)")
              },
              AU = "translate(".concat(32 * zU.x, ", ").concat(32 * zU.y, ") "),
              FU = "scale(".concat(zU.size / 16 * (zU.flipX ? -1 : 1), ", ").concat(zU.size / 16 * (zU.flipY ? -1 : 1), ") "),
              DU = "rotate(".concat(zU.rotate, " 0 0)"),
              EU = {
                outer: QU,
                inner: {
                  transform: "".concat(AU, " ").concat(FU, " ").concat(DU)
                },
                path: {
                  transform: "translate(".concat(yU / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: oU({}, EU.outer),
              children: [{
                tag: "g",
                attributes: oU({}, EU.inner),
                children: [{
                  tag: XU.icon.tag,
                  children: XU.icon.children,
                  attributes: oU(oU({}, XU.icon.attributes), EU.path)
                }]
              }]
            }
          }
        }
      },
      bc = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function Tc(UU) {
      var XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return UU.attributes && (UU.attributes.fill || XU) && (UU.attributes.fill = "black"), UU
    }
    var hc = {
        hooks: function() {
          return {
            parseNodeAttributes: function(UU, XU) {
              var zU = XU.getAttribute("data-fa-mask"),
                cU = zU ? uz(zU.split(" ").map((function(UU) {
                  return UU.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return cU.prefix || (cU.prefix = qz()), UU.mask = cU, UU.maskId = XU.getAttribute("data-fa-mask-id"), UU
            }
          }
        },
        provides: function(UU) {
          UU.generateAbstractMask = function(UU) {
            var XU, zU = UU.children,
              cU = UU.attributes,
              yU = UU.main,
              QU = UU.mask,
              AU = UU.maskId,
              FU = UU.transform,
              DU = yU.width,
              EU = yU.icon,
              YU = QU.width,
              NU = QU.icon,
              IU = function(UU) {
                var XU = UU.transform,
                  zU = UU.containerWidth,
                  cU = UU.iconWidth,
                  yU = {
                    transform: "translate(".concat(zU / 2, " 256)")
                  },
                  QU = "translate(".concat(32 * XU.x, ", ").concat(32 * XU.y, ") "),
                  AU = "scale(".concat(XU.size / 16 * (XU.flipX ? -1 : 1), ", ").concat(XU.size / 16 * (XU.flipY ? -1 : 1), ") "),
                  FU = "rotate(".concat(XU.rotate, " 0 0)");
                return {
                  outer: yU,
                  inner: {
                    transform: "".concat(QU, " ").concat(AU, " ").concat(FU)
                  },
                  path: {
                    transform: "translate(".concat(cU / 2 * -1, " -256)")
                  }
                }
              }({
                transform: FU,
                containerWidth: YU,
                iconWidth: DU
              }),
              pU = {
                tag: "rect",
                attributes: oU(oU({}, bc), {}, {
                  fill: "white"
                })
              },
              aU = EU.children ? {
                children: EU.children.map(Tc)
              } : {},
              tU = {
                tag: "g",
                attributes: oU({}, IU.inner),
                children: [Tc(oU({
                  tag: EU.tag,
                  attributes: oU(oU({}, EU.attributes), IU.path)
                }, aU))]
              },
              gU = {
                tag: "g",
                attributes: oU({}, IU.outer),
                children: [tU]
              },
              kU = "mask-".concat(AU || xX()),
              GU = "clip-".concat(AU || xX()),
              BU = {
                tag: "mask",
                attributes: oU(oU({}, bc), {}, {
                  id: kU,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [pU, gU]
              },
              ZU = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: GU
                  },
                  children: (XU = NU, "g" === XU.tag ? XU.children : [XU])
                }, BU]
              };
            return zU.push(ZU, {
              tag: "rect",
              attributes: oU({
                fill: "currentColor",
                "clip-path": "url(#".concat(GU, ")"),
                mask: "url(#".concat(kU, ")")
              }, bc)
            }), {
              children: zU,
              attributes: cU
            }
          }
        }
      },
      Uy = {
        provides: function(UU) {
          var XU = !1;
          PU.matchMedia && (XU = PU.matchMedia("(prefers-reduced-motion: reduce)").matches), UU.missingIconAbstract = function() {
            var UU = [],
              zU = {
                fill: "currentColor"
              },
              cU = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            UU.push({
              tag: "path",
              attributes: oU(oU({}, zU), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var yU = oU(oU({}, cU), {}, {
                attributeName: "opacity"
              }),
              QU = {
                tag: "circle",
                attributes: oU(oU({}, zU), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return XU || QU.children.push({
              tag: "animate",
              attributes: oU(oU({}, cU), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: oU(oU({}, yU), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), UU.push(QU), UU.push({
              tag: "path",
              attributes: oU(oU({}, zU), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: XU ? [] : [{
                tag: "animate",
                attributes: oU(oU({}, yU), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), XU || UU.push({
              tag: "path",
              attributes: oU(oU({}, zU), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: oU(oU({}, yU), {}, {
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
    ! function(UU, XU) {
      var zU = XU.mixoutsTo;
      Mz = UU, vz = {}, Object.keys(Vz).forEach((function(UU) {
        -1 === sz.indexOf(UU) && delete Vz[UU]
      })), Mz.forEach((function(UU) {
        var XU = UU.mixout ? UU.mixout() : {};
        if (Object.keys(XU).forEach((function(UU) {
            "function" === typeof XU[UU] && (zU[UU] = XU[UU]), "object" === NU(XU[UU]) && Object.keys(XU[UU]).forEach((function(cU) {
              zU[UU] || (zU[UU] = {}), zU[UU][cU] = XU[UU][cU]
            }))
          })), UU.hooks) {
          var cU = UU.hooks();
          Object.keys(cU).forEach((function(UU) {
            vz[UU] || (vz[UU] = []), vz[UU].push(cU[UU])
          }))
        }
        UU.provides && UU.provides(Vz)
      }))
    }([zz, qc, Oc, Sc, rc, xc, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              Gc(), Jc = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            Rc(nz("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            Zc && Zc.disconnect()
          },
          watch: function(UU) {
            var XU = UU.observeMutationsRoot;
            Jc ? Bc() : Rc(nz("mutationObserverCallbacks", {
              observeMutationsRoot: XU
            }))
          }
        }
      }
    }, Kc, hc, Uy, {
      hooks: function() {
        return {
          parseNodeAttributes: function(UU, XU) {
            var zU = XU.getAttribute("data-fa-symbol"),
              cU = null !== zU && ("" === zU || zU);
            return UU.symbol = cU, UU
          }
        }
      }
    }], {
      mixoutsTo: Kz
    });
    var Xy = Kz.noAuto,
      zy = Kz.config,
      cy = Kz.library,
      yy = Kz.dom,
      Qy = Kz.parse,
      Ay = Kz.findIconDefinition,
      Fy = Kz.toHtml,
      oy = Kz.icon,
      Dy = Kz.layer,
      Ey = Kz.text,
      Yy = Kz.counter
  },
  7367: UU => {
    UU.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);