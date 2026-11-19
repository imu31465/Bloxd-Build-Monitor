/*! For license information please see zyyatq.fa-renderer.3c7ca62e.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6243: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      FontAwesomeIcon: () => eY
    });
    var FY = DY(6237),
      AY = DY(4543),
      IY = DY.n(AY),
      RY = DY(61);

    function OY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function gY(YY, rY, DY) {
      return (rY = function(YY) {
        var rY = function(YY, rY) {
          if ("object" != typeof YY || !YY) return YY;
          var DY = YY[Symbol.toPrimitive];
          if (void 0 !== DY) {
            var FY = DY.call(YY, rY || "default");
            if ("object" != typeof FY) return FY;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rY ? String : Number)(YY)
        }(YY, "string");
        return "symbol" == typeof rY ? rY : rY + ""
      }(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function aY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function vY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? aY(Object(DY), !0).forEach((function(rY) {
          gY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : aY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function uY(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        var DY = null == YY ? null : "undefined" != typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
        if (null != DY) {
          var FY, AY, IY, RY, OY = [],
            gY = !0,
            aY = !1;
          try {
            if (IY = (DY = DY.call(YY)).next, 0 === rY) {
              if (Object(DY) !== DY) return;
              gY = !1
            } else
              for (; !(gY = (FY = IY.call(DY)).done) && (OY.push(FY.value), OY.length !== rY); gY = !0);
          } catch (YY) {
            aY = !0, AY = YY
          } finally {
            try {
              if (!gY && null != DY.return && (RY = DY.return(), Object(RY) !== RY)) return
            } finally {
              if (aY) throw AY
            }
          }
          return OY
        }
      }(YY, rY) || yY(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sY(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return OY(YY)
      }(YY) || function(YY) {
        if ("undefined" != typeof Symbol && null != YY[Symbol.iterator] || null != YY["@@iterator"]) return Array.from(YY)
      }(YY) || yY(YY) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iY(YY) {
      return iY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, iY(YY)
    }

    function yY(YY, rY) {
      if (YY) {
        if ("string" == typeof YY) return OY(YY, rY);
        var DY = {}.toString.call(YY).slice(8, -1);
        return "Object" === DY && YY.constructor && (DY = YY.constructor.name), "Map" === DY || "Set" === DY ? Array.from(YY) : "Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY) ? OY(YY, rY) : void 0
      }
    }
    var QY;
    try {
      var oY = DY(6250);
      QY = oY.version
    } catch (BY) {
      QY = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function WY(YY) {
      var rY = YY.beat,
        DY = YY.fade,
        FY = YY.beatFade,
        AY = YY.bounce,
        IY = YY.shake,
        RY = YY.flash,
        OY = YY.spin,
        aY = YY.spinPulse,
        vY = YY.spinReverse,
        sY = YY.pulse,
        iY = YY.fixedWidth,
        yY = YY.inverse,
        oY = YY.border,
        WY = YY.listItem,
        EY = YY.flip,
        mY = YY.size,
        VY = YY.rotation,
        SY = YY.pull,
        lY = YY.swapOpacity,
        TY = YY.rotateBy,
        eY = YY.widthAuto,
        NY = function(YY, rY) {
          for (var DY = uY(YY.split("-"), 2), FY = DY[0], AY = DY[1], IY = uY(rY.split("-"), 2), RY = IY[0], OY = IY[1], gY = FY.split("."), aY = RY.split("."), vY = 0; vY < Math.max(gY.length, aY.length); vY++) {
            var sY = gY[vY] || "0",
              iY = aY[vY] || "0",
              yY = parseInt(sY, 10),
              QY = parseInt(iY, 10);
            if (yY !== QY) return yY > QY
          }
          for (var oY = 0; oY < Math.max(gY.length, aY.length); oY++) {
            var WY = gY[oY] || "0",
              EY = aY[oY] || "0";
            if (WY !== EY && WY.length !== EY.length) return WY.length < EY.length
          }
          return !(AY && !OY)
        }(QY, "7.0.0"),
        BY = gY(gY(gY(gY(gY(gY({
          "fa-beat": rY,
          "fa-fade": DY,
          "fa-beat-fade": FY,
          "fa-bounce": AY,
          "fa-shake": IY,
          "fa-flash": RY,
          "fa-spin": OY,
          "fa-spin-reverse": vY,
          "fa-spin-pulse": aY,
          "fa-pulse": sY,
          "fa-fw": iY,
          "fa-inverse": yY,
          "fa-border": oY,
          "fa-li": WY,
          "fa-flip": !0 === EY,
          "fa-flip-horizontal": "horizontal" === EY || "both" === EY,
          "fa-flip-vertical": "vertical" === EY || "both" === EY
        }, "fa-".concat(mY), "undefined" !== typeof mY && null !== mY), "fa-rotate-".concat(VY), "undefined" !== typeof VY && null !== VY && 0 !== VY), "fa-pull-".concat(SY), "undefined" !== typeof SY && null !== SY), "fa-swap-opacity", lY), "fa-rotate-by", NY && TY), "fa-width-auto", NY && eY);
      return Object.keys(BY).map((function(YY) {
        return BY[YY] ? YY : null
      })).filter((function(YY) {
        return YY
      }))
    }

    function EY(YY) {
      return rY = YY, (rY -= 0) === rY ? YY : (YY = YY.replace(/[\-_\s]+(.)?/g, (function(YY, rY) {
        return rY ? rY.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + YY.substr(1);
      var rY
    }
    var mY = ["style"];
    var VY = !1;
    try {
      VY = !0
    } catch (BY) {}

    function SY(YY) {
      return YY && "object" === iY(YY) && YY.prefix && YY.iconName && YY.icon ? YY : FY.parse.icon ? FY.parse.icon(YY) : null === YY ? null : YY && "object" === iY(YY) && YY.prefix && YY.iconName ? YY : Array.isArray(YY) && 2 === YY.length ? {
        prefix: YY[0],
        iconName: YY[1]
      } : "string" === typeof YY ? {
        prefix: "fas",
        iconName: YY
      } : void 0
    }

    function lY(YY, rY) {
      return Array.isArray(rY) && rY.length > 0 || !Array.isArray(rY) && rY ? gY({}, YY, rY) : {}
    }
    var TY = {
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
      eY = RY.forwardRef((function(YY, rY) {
        var DY = vY(vY({}, TY), YY),
          AY = DY.icon,
          IY = DY.mask,
          RY = DY.symbol,
          OY = DY.className,
          gY = DY.title,
          aY = DY.titleId,
          uY = DY.maskId,
          iY = SY(AY),
          yY = lY("classes", [].concat(sY(WY(DY)), sY((OY || "").split(" ")))),
          QY = lY("transform", "string" === typeof DY.transform ? FY.parse.transform(DY.transform) : DY.transform),
          oY = lY("mask", SY(IY)),
          EY = (0, FY.icon)(iY, vY(vY(vY(vY({}, yY), QY), oY), {}, {
            symbol: RY,
            title: gY,
            titleId: aY,
            maskId: uY
          }));
        if (!EY) return function() {
          var YY;
          !VY && console && "function" === typeof console.error && (YY = console).error.apply(YY, arguments)
        }("Could not find icon", iY), null;
        var mY = EY.abstract,
          eY = {
            ref: rY
          };
        return Object.keys(DY).forEach((function(YY) {
          TY.hasOwnProperty(YY) || (eY[YY] = DY[YY])
        })), NY(mY[0], eY)
      }));
    eY.displayName = "FontAwesomeIcon", eY.propTypes = {
      beat: IY().bool,
      border: IY().bool,
      beatFade: IY().bool,
      bounce: IY().bool,
      className: IY().string,
      fade: IY().bool,
      flash: IY().bool,
      mask: IY().oneOfType([IY().object, IY().array, IY().string]),
      maskId: IY().string,
      fixedWidth: IY().bool,
      inverse: IY().bool,
      flip: IY().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: IY().oneOfType([IY().object, IY().array, IY().string]),
      listItem: IY().bool,
      pull: IY().oneOf(["right", "left"]),
      pulse: IY().bool,
      rotation: IY().oneOf([0, 90, 180, 270]),
      rotateBy: IY().bool,
      shake: IY().bool,
      size: IY().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: IY().bool,
      spinPulse: IY().bool,
      spinReverse: IY().bool,
      symbol: IY().oneOfType([IY().bool, IY().string]),
      title: IY().string,
      titleId: IY().string,
      transform: IY().oneOfType([IY().string, IY().object]),
      swapOpacity: IY().bool,
      widthAuto: IY().bool
    };
    var NY = function YY(rY, DY) {
      var FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof DY) return DY;
      var AY = (DY.children || []).map((function(DY) {
          return YY(rY, DY)
        })),
        IY = Object.keys(DY.attributes || {}).reduce((function(YY, rY) {
          var FY = DY.attributes[rY];
          switch (rY) {
            case "class":
              YY.attrs.className = FY, delete DY.attributes.class;
              break;
            case "style":
              YY.attrs.style = FY.split(";").map((function(YY) {
                return YY.trim()
              })).filter((function(YY) {
                return YY
              })).reduce((function(YY, rY) {
                var DY, FY = rY.indexOf(":"),
                  AY = EY(rY.slice(0, FY)),
                  IY = rY.slice(FY + 1).trim();
                return AY.startsWith("webkit") ? YY[(DY = AY, DY.charAt(0).toUpperCase() + DY.slice(1))] = IY : YY[AY] = IY, YY
              }), {});
              break;
            default:
              0 === rY.indexOf("aria-") || 0 === rY.indexOf("data-") ? YY.attrs[rY.toLowerCase()] = FY : YY.attrs[EY(rY)] = FY
          }
          return YY
        }), {
          attrs: {}
        }),
        RY = FY.style,
        OY = void 0 === RY ? {} : RY,
        gY = function(YY, rY) {
          if (null == YY) return {};
          var DY, FY, AY = function(YY, rY) {
            if (null == YY) return {};
            var DY = {};
            for (var FY in YY)
              if ({}.hasOwnProperty.call(YY, FY)) {
                if (-1 !== rY.indexOf(FY)) continue;
                DY[FY] = YY[FY]
              } return DY
          }(YY, rY);
          if (Object.getOwnPropertySymbols) {
            var IY = Object.getOwnPropertySymbols(YY);
            for (FY = 0; FY < IY.length; FY++) DY = IY[FY], -1 === rY.indexOf(DY) && {}.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
          }
          return AY
        }(FY, mY);
      return IY.attrs.style = vY(vY({}, IY.attrs.style), OY), rY.apply(void 0, [DY.tag, vY(vY({}, IY.attrs), gY)].concat(sY(AY)))
    }.bind(null, RY.createElement)
  },
  4552: (YY, rY, DY) => {
    var FY = DY(4560);

    function AY() {}

    function IY() {}
    IY.resetWarningCache = AY, YY.exports = function() {
      function YY(YY, rY, DY, AY, IY, RY) {
        if (RY !== FY) {
          var OY = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw OY.name = "Invariant Violation", OY
        }
      }

      function rY() {
        return YY
      }
      YY.isRequired = YY;
      var DY = {
        array: YY,
        bigint: YY,
        bool: YY,
        func: YY,
        number: YY,
        object: YY,
        string: YY,
        symbol: YY,
        any: YY,
        arrayOf: rY,
        element: YY,
        elementType: YY,
        instanceOf: rY,
        node: YY,
        objectOf: rY,
        oneOf: rY,
        oneOfType: rY,
        shape: rY,
        exact: rY,
        checkPropTypes: IY,
        resetWarningCache: AY
      };
      return DY.PropTypes = DY, DY
    }
  },
  4543: (YY, rY, DY) => {
    YY.exports = DY(4552)()
  },
  4560: YY => {
    YY.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6237: (YY, rY, DY) => {
    function FY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function AY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, uY(FY.key), FY)
      }
    }

    function IY(YY, rY) {
      var DY = "undefined" != typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
      if (!DY) {
        if (Array.isArray(YY) || (DY = iY(YY)) || rY && YY && "number" == typeof YY.length) {
          DY && (YY = DY);
          var FY = 0,
            AY = function() {};
          return {
            s: AY,
            n: function() {
              return FY >= YY.length ? {
                done: !0
              } : {
                done: !1,
                value: YY[FY++]
              }
            },
            e: function(YY) {
              throw YY
            },
            f: AY
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var IY, RY = !0,
        OY = !1;
      return {
        s: function() {
          DY = DY.call(YY)
        },
        n: function() {
          var YY = DY.next();
          return RY = YY.done, YY
        },
        e: function(YY) {
          OY = !0, IY = YY
        },
        f: function() {
          try {
            RY || null == DY.return || DY.return()
          } finally {
            if (OY) throw IY
          }
        }
      }
    }

    function RY(YY, rY, DY) {
      return (rY = uY(rY)) in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function OY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function gY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? OY(Object(DY), !0).forEach((function(rY) {
          RY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : OY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function aY(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        var DY = null == YY ? null : "undefined" != typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
        if (null != DY) {
          var FY, AY, IY, RY, OY = [],
            gY = !0,
            aY = !1;
          try {
            if (IY = (DY = DY.call(YY)).next, 0 === rY) {
              if (Object(DY) !== DY) return;
              gY = !1
            } else
              for (; !(gY = (FY = IY.call(DY)).done) && (OY.push(FY.value), OY.length !== rY); gY = !0);
          } catch (YY) {
            aY = !0, AY = YY
          } finally {
            try {
              if (!gY && null != DY.return && (RY = DY.return(), Object(RY) !== RY)) return
            } finally {
              if (aY) throw AY
            }
          }
          return OY
        }
      }(YY, rY) || iY(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vY(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return FY(YY)
      }(YY) || function(YY) {
        if ("undefined" != typeof Symbol && null != YY[Symbol.iterator] || null != YY["@@iterator"]) return Array.from(YY)
      }(YY) || iY(YY) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uY(YY) {
      var rY = function(YY, rY) {
        if ("object" != typeof YY || !YY) return YY;
        var DY = YY[Symbol.toPrimitive];
        if (void 0 !== DY) {
          var FY = DY.call(YY, rY || "default");
          if ("object" != typeof FY) return FY;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rY ? String : Number)(YY)
      }(YY, "string");
      return "symbol" == typeof rY ? rY : rY + ""
    }

    function sY(YY) {
      return sY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, sY(YY)
    }

    function iY(YY, rY) {
      if (YY) {
        if ("string" == typeof YY) return FY(YY, rY);
        var DY = {}.toString.call(YY).slice(8, -1);
        return "Object" === DY && YY.constructor && (DY = YY.constructor.name), "Map" === DY || "Set" === DY ? Array.from(YY) : "Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY) ? FY(YY, rY) : void 0
      }
    }
    DY.r(rY), DY.d(rY, {
      api: () => PD,
      config: () => DA,
      counter: () => uA,
      dom: () => AA,
      findIconDefinition: () => RA,
      icon: () => gA,
      layer: () => aA,
      library: () => FA,
      noAuto: () => rA,
      parse: () => IA,
      text: () => vA,
      toHtml: () => OA
    });
    var yY = function() {},
      QY = {},
      oY = {},
      WY = null,
      EY = {
        mark: yY,
        measure: yY
      };
    try {
      "undefined" !== typeof window && (QY = window), "undefined" !== typeof document && (oY = document), "undefined" !== typeof MutationObserver && (WY = MutationObserver), "undefined" !== typeof performance && (EY = performance)
    } catch (qY) {}
    var mY, VY, SY = (QY.navigator || {}).userAgent,
      lY = void 0 === SY ? "" : SY,
      TY = QY,
      eY = oY,
      NY = WY,
      BY = EY,
      cY = (TY.document, !!eY.documentElement && !!eY.head && "function" === typeof eY.addEventListener && "function" === typeof eY.createElement),
      KY = ~lY.indexOf("MSIE") || ~lY.indexOf("Trident/"),
      HY = {
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
      zY = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      ZY = "classic",
      CY = "duotone",
      fY = "sharp",
      jY = "sharp-duotone",
      hY = "chisel",
      dY = "etch",
      JY = "graphite",
      MY = "jelly",
      wY = "jelly-duo",
      bY = "jelly-fill",
      XY = "notdog",
      qY = "notdog-duo",
      pY = "slab",
      kY = "slab-press",
      GY = "thumbprint",
      xY = "utility",
      nY = "utility-duo",
      PY = "utility-fill",
      UY = "whiteboard",
      LY = [ZY, CY, fY, jY, hY, dY, JY, MY, wY, bY, XY, qY, pY, kY, GY, xY, nY, PY, UY],
      tY = (RY(RY(RY(RY(RY(RY(RY(RY(RY(RY(mY = {}, ZY, "Classic"), CY, "Duotone"), fY, "Sharp"), jY, "Sharp Duotone"), hY, "Chisel"), dY, "Etch"), JY, "Graphite"), MY, "Jelly"), wY, "Jelly Duo"), bY, "Jelly Fill"), RY(RY(RY(RY(RY(RY(RY(RY(RY(mY, XY, "Notdog"), qY, "Notdog Duo"), pY, "Slab"), kY, "Slab Press"), GY, "Thumbprint"), xY, "Utility"), nY, "Utility Duo"), PY, "Utility Fill"), UY, "Whiteboard"), new Map([
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
      Yr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      rr = {
        fak: "kit",
        "fa-kit": "kit"
      },
      Dr = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      Fr = (RY(RY({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      Ar = {
        "kit-duotone": "fakd"
      },
      Ir = "duotone-group",
      Rr = "swap-opacity",
      Or = "primary",
      gr = "secondary",
      ar = (RY(RY(RY(RY(RY(RY(RY(RY(RY(RY(VY = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), RY(RY(RY(RY(RY(RY(RY(RY(RY(VY, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), RY(RY({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      vr = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      ur = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      sr = ur.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      ir = [].concat(vY(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", Ir, Rr, Or, gr]).concat(ur.map((function(YY) {
        return "".concat(YY, "x")
      }))).concat(sr.map((function(YY) {
        return "w-".concat(YY)
      }))),
      yr = "___FONT_AWESOME___",
      Qr = "svg-inline--fa",
      or = "data-fa-i2svg",
      Wr = "data-fa-pseudo-element",
      Er = "data-prefix",
      mr = "data-icon",
      Vr = "fontawesome-i2svg",
      Sr = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      lr = ["::before", "::after", ":before", ":after"],
      Tr = function() {
        try {
          return !0
        } catch (YY) {
          return !1
        }
      }();

    function er(YY) {
      return new Proxy(YY, {
        get: function(YY, rY) {
          return rY in YY ? YY[rY] : YY[ZY]
        }
      })
    }
    var Nr = gY({}, HY);
    Nr[ZY] = gY(gY(gY(gY({}, {
      "fa-duotone": "duotone"
    }), HY[ZY]), rr), Dr);
    var Br = er(Nr),
      cr = gY({}, {
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
    cr[ZY] = gY(gY(gY(gY({}, {
      duotone: "fad"
    }), cr[ZY]), Fr), Ar);
    var Kr = er(cr),
      Hr = gY({}, ar);
    Hr[ZY] = gY(gY({}, Hr[ZY]), {
      fak: "fa-kit"
    });
    var zr = er(Hr),
      Zr = gY({}, {
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
    Zr[ZY] = gY(gY({}, Zr[ZY]), {
      "fa-kit": "fak"
    });
    er(Zr);
    var Cr = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      fr = "fa-layers-text",
      jr = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      hr = (er(gY({}, {
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
      dr = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      Jr = [].concat(vY(["kit"]), vY(ir)),
      Mr = TY.FontAwesomeConfig || {};
    if (eY && "function" === typeof eY.querySelector) {
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
      ].forEach((function(YY) {
        var rY = aY(YY, 2),
          DY = rY[0],
          FY = rY[1],
          AY = function(YY) {
            return "" === YY || "false" !== YY && ("true" === YY || YY)
          }(function(YY) {
            var rY = eY.querySelector("script[" + YY + "]");
            if (rY) return rY.getAttribute(YY)
          }(DY));
        void 0 !== AY && null !== AY && (Mr[FY] = AY)
      }))
    }
    var wr = {
      styleDefault: "solid",
      familyDefault: ZY,
      cssPrefix: "fa",
      replacementClass: Qr,
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
    Mr.familyPrefix && (Mr.cssPrefix = Mr.familyPrefix);
    var br = gY(gY({}, wr), Mr);
    br.autoReplaceSvg || (br.observeMutations = !1);
    var Xr = {};
    Object.keys(wr).forEach((function(YY) {
      Object.defineProperty(Xr, YY, {
        enumerable: !0,
        set: function(rY) {
          br[YY] = rY, qr.forEach((function(YY) {
            return YY(Xr)
          }))
        },
        get: function() {
          return br[YY]
        }
      })
    })), Object.defineProperty(Xr, "familyPrefix", {
      enumerable: !0,
      set: function(YY) {
        br.cssPrefix = YY, qr.forEach((function(YY) {
          return YY(Xr)
        }))
      },
      get: function() {
        return br.cssPrefix
      }
    }), TY.FontAwesomeConfig = Xr;
    var qr = [];
    var pr = 16,
      kr = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function Gr() {
      for (var YY = 12, rY = ""; YY-- > 0;) rY += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return rY
    }

    function xr(YY) {
      for (var rY = [], DY = (YY || []).length >>> 0; DY--;) rY[DY] = YY[DY];
      return rY
    }

    function nr(YY) {
      return YY.classList ? xr(YY.classList) : (YY.getAttribute("class") || "").split(" ").filter((function(YY) {
        return YY
      }))
    }

    function Pr(YY) {
      return "".concat(YY).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Ur(YY) {
      return Object.keys(YY || {}).reduce((function(rY, DY) {
        return rY + "".concat(DY, ": ").concat(YY[DY].trim(), ";")
      }), "")
    }

    function Lr(YY) {
      return YY.size !== kr.size || YY.x !== kr.x || YY.y !== kr.y || YY.rotate !== kr.rotate || YY.flipX || YY.flipY
    }

    function tr() {
      var YY = "fa",
        rY = Qr,
        DY = Xr.cssPrefix,
        FY = Xr.replacementClass,
        AY = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (DY !== YY || FY !== rY) {
        var IY = new RegExp("\\.".concat(YY, "\\-"), "g"),
          RY = new RegExp("\\--".concat(YY, "\\-"), "g"),
          OY = new RegExp("\\.".concat(rY), "g");
        AY = AY.replace(IY, ".".concat(DY, "-")).replace(RY, "--".concat(DY, "-")).replace(OY, ".".concat(FY))
      }
      return AY
    }
    var YD = !1;

    function rD() {
      Xr.autoAddCss && !YD && (! function(YY) {
        if (YY && cY) {
          var rY = eY.createElement("style");
          rY.setAttribute("type", "text/css"), rY.innerHTML = YY;
          for (var DY = eY.head.childNodes, FY = null, AY = DY.length - 1; AY > -1; AY--) {
            var IY = DY[AY],
              RY = (IY.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(RY) > -1 && (FY = IY)
          }
          eY.head.insertBefore(rY, FY)
        }
      }(tr()), YD = !0)
    }
    var DD = {
        mixout: function() {
          return {
            dom: {
              css: tr,
              insertCss: rD
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              rD()
            },
            beforeI2svg: function() {
              rD()
            }
          }
        }
      },
      FD = TY || {};
    FD[yr] || (FD[yr] = {}), FD[yr].styles || (FD[yr].styles = {}), FD[yr].hooks || (FD[yr].hooks = {}), FD[yr].shims || (FD[yr].shims = []);
    var AD = FD[yr],
      ID = [],
      RD = function() {
        eY.removeEventListener("DOMContentLoaded", RD), OD = 1, ID.map((function(YY) {
          return YY()
        }))
      },
      OD = !1;

    function gD(YY) {
      var rY = YY.tag,
        DY = YY.attributes,
        FY = void 0 === DY ? {} : DY,
        AY = YY.children,
        IY = void 0 === AY ? [] : AY;
      return "string" === typeof YY ? Pr(YY) : "<".concat(rY, " ").concat(function(YY) {
        return Object.keys(YY || {}).reduce((function(rY, DY) {
          return rY + "".concat(DY, '="').concat(Pr(YY[DY]), '" ')
        }), "").trim()
      }(FY), ">").concat(IY.map(gD).join(""), "</").concat(rY, ">")
    }

    function aD(YY, rY, DY) {
      if (YY && YY[rY] && YY[rY][DY]) return {
        prefix: rY,
        iconName: DY,
        icon: YY[rY][DY]
      }
    }
    cY && ((OD = (eY.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(eY.readyState)) || eY.addEventListener("DOMContentLoaded", RD));
    var vD = function(YY, rY, DY, FY) {
      var AY, IY, RY, OY = Object.keys(YY),
        gY = OY.length,
        aY = void 0 !== FY ? function(YY, rY) {
          return function(DY, FY, AY, IY) {
            return YY.call(rY, DY, FY, AY, IY)
          }
        }(rY, FY) : rY;
      for (void 0 === DY ? (AY = 1, RY = YY[OY[0]]) : (AY = 0, RY = DY); AY < gY; AY++) RY = aY(RY, YY[IY = OY[AY]], IY, YY);
      return RY
    };

    function uD(YY) {
      return 1 !== vY(YY).length ? null : YY.codePointAt(0).toString(16)
    }

    function sD(YY) {
      return Object.keys(YY).reduce((function(rY, DY) {
        var FY = YY[DY];
        return !!FY.icon ? rY[FY.iconName] = FY.icon : rY[DY] = FY, rY
      }), {})
    }

    function iD(YY, rY) {
      var DY = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        FY = void 0 !== DY && DY,
        AY = sD(rY);
      "function" !== typeof AD.hooks.addPack || FY ? AD.styles[YY] = gY(gY({}, AD.styles[YY] || {}), AY) : AD.hooks.addPack(YY, sD(rY)), "fas" === YY && iD("fa", rY)
    }
    var yD = AD.styles,
      QD = AD.shims,
      oD = Object.keys(zr),
      WD = oD.reduce((function(YY, rY) {
        return YY[rY] = Object.keys(zr[rY]), YY
      }), {}),
      ED = null,
      mD = {},
      VD = {},
      SD = {},
      lD = {},
      TD = {};

    function eD(YY, rY) {
      var DY, FY = rY.split("-"),
        AY = FY[0],
        IY = FY.slice(1).join("-");
      return AY !== YY || "" === IY || (DY = IY, ~Jr.indexOf(DY)) ? null : IY
    }
    var ND, BD = function() {
      var YY = function(YY) {
        return vD(yD, (function(rY, DY, FY) {
          return rY[FY] = vD(DY, YY, {}), rY
        }), {})
      };
      mD = YY((function(YY, rY, DY) {
        (rY[3] && (YY[rY[3]] = DY), rY[2]) && rY[2].filter((function(YY) {
          return "number" === typeof YY
        })).forEach((function(rY) {
          YY[rY.toString(16)] = DY
        }));
        return YY
      })), VD = YY((function(YY, rY, DY) {
        (YY[DY] = DY, rY[2]) && rY[2].filter((function(YY) {
          return "string" === typeof YY
        })).forEach((function(rY) {
          YY[rY] = DY
        }));
        return YY
      })), TD = YY((function(YY, rY, DY) {
        var FY = rY[2];
        return YY[DY] = DY, FY.forEach((function(rY) {
          YY[rY] = DY
        })), YY
      }));
      var rY = "far" in yD || Xr.autoFetchSvg,
        DY = vD(QD, (function(YY, DY) {
          var FY = DY[0],
            AY = DY[1],
            IY = DY[2];
          return "far" !== AY || rY || (AY = "fas"), "string" === typeof FY && (YY.names[FY] = {
            prefix: AY,
            iconName: IY
          }), "number" === typeof FY && (YY.unicodes[FY.toString(16)] = {
            prefix: AY,
            iconName: IY
          }), YY
        }), {
          names: {},
          unicodes: {}
        });
      SD = DY.names, lD = DY.unicodes, ED = ZD(Xr.styleDefault, {
        family: Xr.familyDefault
      })
    };

    function cD(YY, rY) {
      return (mD[YY] || {})[rY]
    }

    function KD(YY, rY) {
      return (TD[YY] || {})[rY]
    }

    function HD(YY) {
      return SD[YY] || {
        prefix: null,
        iconName: null
      }
    }

    function zD() {
      return ED
    }
    ND = function(YY) {
      ED = ZD(YY.styleDefault, {
        family: Xr.familyDefault
      })
    }, qr.push(ND), BD();

    function ZD(YY) {
      var rY = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        DY = void 0 === rY ? ZY : rY,
        FY = Br[DY][YY];
      if (DY === CY && !YY) return "fad";
      var AY = Kr[DY][YY] || Kr[DY][FY],
        IY = YY in AD.styles ? YY : null;
      return AY || IY || null
    }

    function CD(YY) {
      return YY.sort().filter((function(YY, rY, DY) {
        return DY.indexOf(YY) === rY
      }))
    }
    var fD = vr.concat(Yr);

    function jD(YY) {
      var rY = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        DY = void 0 !== rY && rY,
        FY = null,
        AY = CD(YY.filter((function(YY) {
          return fD.includes(YY)
        }))),
        IY = CD(YY.filter((function(YY) {
          return !fD.includes(YY)
        }))),
        RY = aY(AY.filter((function(YY) {
          return FY = YY, !zY.includes(YY)
        })), 1)[0],
        OY = void 0 === RY ? null : RY,
        vY = function(YY) {
          var rY = ZY,
            DY = oD.reduce((function(YY, rY) {
              return YY[rY] = "".concat(Xr.cssPrefix, "-").concat(rY), YY
            }), {});
          return LY.forEach((function(FY) {
            (YY.includes(DY[FY]) || YY.some((function(YY) {
              return WD[FY].includes(YY)
            }))) && (rY = FY)
          })), rY
        }(AY),
        uY = gY(gY({}, function(YY) {
          var rY = [],
            DY = null;
          return YY.forEach((function(YY) {
            var FY = eD(Xr.cssPrefix, YY);
            FY ? DY = FY : YY && rY.push(YY)
          })), {
            iconName: DY,
            rest: rY
          }
        }(IY)), {}, {
          prefix: ZD(OY, {
            family: vY
          })
        });
      return gY(gY(gY({}, uY), function(YY) {
        var rY = YY.values,
          DY = YY.family,
          FY = YY.canonical,
          AY = YY.givenPrefix,
          IY = void 0 === AY ? "" : AY,
          RY = YY.styles,
          OY = void 0 === RY ? {} : RY,
          gY = YY.config,
          aY = void 0 === gY ? {} : gY,
          vY = DY === CY,
          uY = rY.includes("fa-duotone") || rY.includes("fad"),
          sY = "duotone" === aY.familyDefault,
          iY = "fad" === FY.prefix || "fa-duotone" === FY.prefix;
        !vY && (uY || sY || iY) && (FY.prefix = "fad");
        (rY.includes("fa-brands") || rY.includes("fab")) && (FY.prefix = "fab");
        if (!FY.prefix && hD.includes(DY)) {
          if (Object.keys(OY).find((function(YY) {
              return dD.includes(YY)
            })) || aY.autoFetchSvg) {
            var yY = tY.get(DY).defaultShortPrefixId;
            FY.prefix = yY, FY.iconName = KD(FY.prefix, FY.iconName) || FY.iconName
          }
        }
        "fa" !== FY.prefix && "fa" !== IY || (FY.prefix = zD() || "fas");
        return FY
      }({
        values: YY,
        family: vY,
        styles: yD,
        config: Xr,
        canonical: uY,
        givenPrefix: FY
      })), function(YY, rY, DY) {
        var FY = DY.prefix,
          AY = DY.iconName;
        if (YY || !FY || !AY) return {
          prefix: FY,
          iconName: AY
        };
        var IY = "fa" === rY ? HD(AY) : {},
          RY = KD(FY, AY);
        AY = IY.iconName || RY || AY, "far" !== (FY = IY.prefix || FY) || yD.far || !yD.fas || Xr.autoFetchSvg || (FY = "fas");
        return {
          prefix: FY,
          iconName: AY
        }
      }(DY, FY, uY))
    }
    var hD = LY.filter((function(YY) {
        return YY !== ZY || YY !== CY
      })),
      dD = Object.keys(ar).filter((function(YY) {
        return YY !== ZY
      })).map((function(YY) {
        return Object.keys(ar[YY])
      })).flat();
    var JD = function() {
        return function(YY, rY, DY) {
          return rY && AY(YY.prototype, rY), DY && AY(YY, DY), Object.defineProperty(YY, "prototype", {
            writable: !1
          }), YY
        }((function YY() {
          ! function(YY, rY) {
            if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
          }(this, YY), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var YY = this, rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
            var AY = DY.reduce(this._pullDefinitions, {});
            Object.keys(AY).forEach((function(rY) {
              YY.definitions[rY] = gY(gY({}, YY.definitions[rY] || {}), AY[rY]), iD(rY, AY[rY]);
              var DY = zr[ZY][rY];
              DY && iD(DY, AY[rY]), BD()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(YY, rY) {
            var DY = rY.prefix && rY.iconName && rY.icon ? {
              0: rY
            } : rY;
            return Object.keys(DY).map((function(rY) {
              var FY = DY[rY],
                AY = FY.prefix,
                IY = FY.iconName,
                RY = FY.icon,
                OY = RY[2];
              YY[AY] || (YY[AY] = {}), OY.length > 0 && OY.forEach((function(rY) {
                "string" === typeof rY && (YY[AY][rY] = RY)
              })), YY[AY][IY] = RY
            })), YY
          }
        }])
      }(),
      MD = [],
      wD = {},
      bD = {},
      XD = Object.keys(bD);

    function qD(YY, rY) {
      for (var DY = arguments.length, FY = new Array(DY > 2 ? DY - 2 : 0), AY = 2; AY < DY; AY++) FY[AY - 2] = arguments[AY];
      return (wD[YY] || []).forEach((function(YY) {
        rY = YY.apply(null, [rY].concat(FY))
      })), rY
    }

    function pD(YY) {
      for (var rY = arguments.length, DY = new Array(rY > 1 ? rY - 1 : 0), FY = 1; FY < rY; FY++) DY[FY - 1] = arguments[FY];
      (wD[YY] || []).forEach((function(YY) {
        YY.apply(null, DY)
      }))
    }

    function kD() {
      var YY = arguments[0],
        rY = Array.prototype.slice.call(arguments, 1);
      return bD[YY] ? bD[YY].apply(null, rY) : void 0
    }

    function GD(YY) {
      "fa" === YY.prefix && (YY.prefix = "fas");
      var rY = YY.iconName,
        DY = YY.prefix || zD();
      if (rY) return rY = KD(DY, rY) || rY, aD(xD.definitions, DY, rY) || aD(AD.styles, DY, rY)
    }
    var xD = new JD,
      nD = {
        i2svg: function() {
          var YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return cY ? (pD("beforeI2svg", YY), kD("pseudoElements2svg", YY), kD("i2svg", YY)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var YY, rY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            DY = rY.autoReplaceSvgRoot;
          !1 === Xr.autoReplaceSvg && (Xr.autoReplaceSvg = !0), Xr.observeMutations = !0, YY = function() {
            UD({
              autoReplaceSvgRoot: DY
            }), pD("watch", rY)
          }, cY && (OD ? setTimeout(YY, 0) : ID.push(YY))
        }
      },
      PD = {
        noAuto: function() {
          Xr.autoReplaceSvg = !1, Xr.observeMutations = !1, pD("noAuto")
        },
        config: Xr,
        dom: nD,
        parse: {
          icon: function(YY) {
            if (null === YY) return null;
            if ("object" === sY(YY) && YY.prefix && YY.iconName) return {
              prefix: YY.prefix,
              iconName: KD(YY.prefix, YY.iconName) || YY.iconName
            };
            if (Array.isArray(YY) && 2 === YY.length) {
              var rY = 0 === YY[1].indexOf("fa-") ? YY[1].slice(3) : YY[1],
                DY = ZD(YY[0]);
              return {
                prefix: DY,
                iconName: KD(DY, rY) || rY
              }
            }
            if ("string" === typeof YY && (YY.indexOf("".concat(Xr.cssPrefix, "-")) > -1 || YY.match(Cr))) {
              var FY = jD(YY.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: FY.prefix || zD(),
                iconName: KD(FY.prefix, FY.iconName) || FY.iconName
              }
            }
            if ("string" === typeof YY) {
              var AY = zD();
              return {
                prefix: AY,
                iconName: KD(AY, YY) || YY
              }
            }
          }
        },
        library: xD,
        findIconDefinition: GD,
        toHtml: gD
      },
      UD = function() {
        var YY = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          rY = void 0 === YY ? eY : YY;
        (Object.keys(AD.styles).length > 0 || Xr.autoFetchSvg) && cY && Xr.autoReplaceSvg && PD.dom.i2svg({
          node: rY
        })
      };

    function LD(YY, rY) {
      return Object.defineProperty(YY, "abstract", {
        get: rY
      }), Object.defineProperty(YY, "html", {
        get: function() {
          return YY.abstract.map((function(YY) {
            return gD(YY)
          }))
        }
      }), Object.defineProperty(YY, "node", {
        get: function() {
          if (cY) {
            var rY = eY.createElement("div");
            return rY.innerHTML = YY.html, rY.children
          }
        }
      }), YY
    }

    function tD(YY) {
      var rY = YY.icons,
        DY = rY.main,
        FY = rY.mask,
        AY = YY.prefix,
        IY = YY.iconName,
        RY = YY.transform,
        OY = YY.symbol,
        aY = YY.maskId,
        vY = YY.extra,
        uY = YY.watchable,
        sY = void 0 !== uY && uY,
        iY = FY.found ? FY : DY,
        yY = iY.width,
        QY = iY.height,
        oY = [Xr.replacementClass, IY ? "".concat(Xr.cssPrefix, "-").concat(IY) : ""].filter((function(YY) {
          return -1 === vY.classes.indexOf(YY)
        })).filter((function(YY) {
          return "" !== YY || !!YY
        })).concat(vY.classes).join(" "),
        WY = {
          children: [],
          attributes: gY(gY({}, vY.attributes), {}, {
            "data-prefix": AY,
            "data-icon": IY,
            class: oY,
            role: vY.attributes.role || "img",
            viewBox: "0 0 ".concat(yY, " ").concat(QY)
          })
        };
      (function(YY) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(rY) {
          return rY in YY
        }))
      })(vY.attributes) || vY.attributes["aria-hidden"] || (WY.attributes["aria-hidden"] = "true"), sY && (WY.attributes[or] = "");
      var EY = gY(gY({}, WY), {}, {
          prefix: AY,
          iconName: IY,
          main: DY,
          mask: FY,
          maskId: aY,
          transform: RY,
          symbol: OY,
          styles: gY({}, vY.styles)
        }),
        mY = FY.found && DY.found ? kD("generateAbstractMask", EY) || {
          children: [],
          attributes: {}
        } : kD("generateAbstractIcon", EY) || {
          children: [],
          attributes: {}
        },
        VY = mY.children,
        SY = mY.attributes;
      return EY.children = VY, EY.attributes = SY, OY ? function(YY) {
        var rY = YY.prefix,
          DY = YY.iconName,
          FY = YY.children,
          AY = YY.attributes,
          IY = YY.symbol,
          RY = !0 === IY ? "".concat(rY, "-").concat(Xr.cssPrefix, "-").concat(DY) : IY;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: gY(gY({}, AY), {}, {
              id: RY
            }),
            children: FY
          }]
        }]
      }(EY) : function(YY) {
        var rY = YY.children,
          DY = YY.main,
          FY = YY.mask,
          AY = YY.attributes,
          IY = YY.styles,
          RY = YY.transform;
        if (Lr(RY) && DY.found && !FY.found) {
          var OY = {
            x: DY.width / DY.height / 2,
            y: .5
          };
          AY.style = Ur(gY(gY({}, IY), {}, {
            "transform-origin": "".concat(OY.x + RY.x / 16, "em ").concat(OY.y + RY.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: AY,
          children: rY
        }]
      }(EY)
    }

    function YF(YY) {
      var rY = YY.content,
        DY = YY.width,
        FY = YY.height,
        AY = YY.transform,
        IY = YY.extra,
        RY = YY.watchable,
        OY = void 0 !== RY && RY,
        aY = gY(gY({}, IY.attributes), {}, {
          class: IY.classes.join(" ")
        });
      OY && (aY[or] = "");
      var vY = gY({}, IY.styles);
      Lr(AY) && (vY.transform = function(YY) {
        var rY = YY.transform,
          DY = YY.width,
          FY = void 0 === DY ? 16 : DY,
          AY = YY.height,
          IY = void 0 === AY ? 16 : AY,
          RY = YY.startCentered,
          OY = void 0 !== RY && RY,
          gY = "";
        return gY += OY && KY ? "translate(".concat(rY.x / pr - FY / 2, "em, ").concat(rY.y / pr - IY / 2, "em) ") : OY ? "translate(calc(-50% + ".concat(rY.x / pr, "em), calc(-50% + ").concat(rY.y / pr, "em)) ") : "translate(".concat(rY.x / pr, "em, ").concat(rY.y / pr, "em) "), gY += "scale(".concat(rY.size / pr * (rY.flipX ? -1 : 1), ", ").concat(rY.size / pr * (rY.flipY ? -1 : 1), ") "), gY + "rotate(".concat(rY.rotate, "deg) ")
      }({
        transform: AY,
        startCentered: !0,
        width: DY,
        height: FY
      }), vY["-webkit-transform"] = vY.transform);
      var uY = Ur(vY);
      uY.length > 0 && (aY.style = uY);
      var sY = [];
      return sY.push({
        tag: "span",
        attributes: aY,
        children: [rY]
      }), sY
    }
    var rF = AD.styles;

    function DF(YY) {
      var rY = YY[0],
        DY = YY[1],
        FY = aY(YY.slice(4), 1)[0];
      return {
        found: !0,
        width: rY,
        height: DY,
        icon: Array.isArray(FY) ? {
          tag: "g",
          attributes: {
            class: "".concat(Xr.cssPrefix, "-").concat(dr.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(Xr.cssPrefix, "-").concat(dr.SECONDARY),
              fill: "currentColor",
              d: FY[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(Xr.cssPrefix, "-").concat(dr.PRIMARY),
              fill: "currentColor",
              d: FY[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: FY
          }
        }
      }
    }
    var FF = {
      found: !1,
      width: 512,
      height: 512
    };

    function AF(YY, rY) {
      var DY = rY;
      return "fa" === rY && null !== Xr.styleDefault && (rY = zD()), new Promise((function(FY, AY) {
        if ("fa" === DY) {
          var IY = HD(YY) || {};
          YY = IY.iconName || YY, rY = IY.prefix || rY
        }
        if (YY && rY && rF[rY] && rF[rY][YY]) return FY(DF(rF[rY][YY]));
        ! function(YY, rY) {
          Tr || Xr.showMissingIcons || !YY || console.error('Icon with name "'.concat(YY, '" and prefix "').concat(rY, '" is missing.'))
        }(YY, rY), FY(gY(gY({}, FF), {}, {
          icon: Xr.showMissingIcons && YY && kD("missingIconAbstract") || {}
        }))
      }))
    }
    var IF = function() {},
      RF = Xr.measurePerformance && BY && BY.mark && BY.measure ? BY : {
        mark: IF,
        measure: IF
      },
      OF = 'FA "7.2.0"',
      gF = function(YY) {
        RF.mark("".concat(OF, " ").concat(YY, " ends")), RF.measure("".concat(OF, " ").concat(YY), "".concat(OF, " ").concat(YY, " begins"), "".concat(OF, " ").concat(YY, " ends"))
      },
      aF = function(YY) {
        return RF.mark("".concat(OF, " ").concat(YY, " begins")),
          function() {
            return gF(YY)
          }
      },
      vF = function() {};

    function uF(YY) {
      return "string" === typeof(YY.getAttribute ? YY.getAttribute(or) : null)
    }

    function sF(YY) {
      return eY.createElementNS("http://www.w3.org/2000/svg", YY)
    }

    function iF(YY) {
      return eY.createElement(YY)
    }

    function yF(YY) {
      var rY = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        DY = void 0 === rY ? "svg" === YY.tag ? sF : iF : rY;
      if ("string" === typeof YY) return eY.createTextNode(YY);
      var FY = DY(YY.tag);
      return Object.keys(YY.attributes || []).forEach((function(rY) {
        FY.setAttribute(rY, YY.attributes[rY])
      })), (YY.children || []).forEach((function(YY) {
        FY.appendChild(yF(YY, {
          ceFn: DY
        }))
      })), FY
    }
    var QF = {
      replace: function(YY) {
        var rY = YY[0];
        if (rY.parentNode)
          if (YY[1].forEach((function(YY) {
              rY.parentNode.insertBefore(yF(YY), rY)
            })), null === rY.getAttribute(or) && Xr.keepOriginalSource) {
            var DY = eY.createComment(function(YY) {
              var rY = " ".concat(YY.outerHTML, " ");
              return "".concat(rY, "Font Awesome fontawesome.com ")
            }(rY));
            rY.parentNode.replaceChild(DY, rY)
          } else rY.remove()
      },
      nest: function(YY) {
        var rY = YY[0],
          DY = YY[1];
        if (~nr(rY).indexOf(Xr.replacementClass)) return QF.replace(YY);
        var FY = new RegExp("".concat(Xr.cssPrefix, "-.*"));
        if (delete DY[0].attributes.id, DY[0].attributes.class) {
          var AY = DY[0].attributes.class.split(" ").reduce((function(YY, rY) {
            return rY === Xr.replacementClass || rY.match(FY) ? YY.toSvg.push(rY) : YY.toNode.push(rY), YY
          }), {
            toNode: [],
            toSvg: []
          });
          DY[0].attributes.class = AY.toSvg.join(" "), 0 === AY.toNode.length ? rY.removeAttribute("class") : rY.setAttribute("class", AY.toNode.join(" "))
        }
        var IY = DY.map((function(YY) {
          return gD(YY)
        })).join("\n");
        rY.setAttribute(or, ""), rY.innerHTML = IY
      }
    };

    function oF(YY) {
      YY()
    }

    function WF(YY, rY) {
      var DY = "function" === typeof rY ? rY : vF;
      if (0 === YY.length) DY();
      else {
        var FY = oF;
        "async" === Xr.mutateApproach && (FY = TY.requestAnimationFrame || oF), FY((function() {
          var rY = !0 === Xr.autoReplaceSvg ? QF.replace : QF[Xr.autoReplaceSvg] || QF.replace,
            FY = aF("mutate");
          YY.map(rY), FY(), DY()
        }))
      }
    }
    var EF = !1;

    function mF() {
      EF = !0
    }

    function VF() {
      EF = !1
    }
    var SF = null;

    function lF(YY) {
      if (NY && Xr.observeMutations) {
        var rY = YY.treeCallback,
          DY = void 0 === rY ? vF : rY,
          FY = YY.nodeCallback,
          AY = void 0 === FY ? vF : FY,
          IY = YY.pseudoElementsCallback,
          RY = void 0 === IY ? vF : IY,
          OY = YY.observeMutationsRoot,
          gY = void 0 === OY ? eY : OY;
        SF = new NY((function(YY) {
          if (!EF) {
            var rY = zD();
            xr(YY).forEach((function(YY) {
              if ("childList" === YY.type && YY.addedNodes.length > 0 && !uF(YY.addedNodes[0]) && (Xr.searchPseudoElements && RY(YY.target), DY(YY.target)), "attributes" === YY.type && YY.target.parentNode && Xr.searchPseudoElements && RY([YY.target], !0), "attributes" === YY.type && uF(YY.target) && ~hr.indexOf(YY.attributeName))
                if ("class" === YY.attributeName && function(YY) {
                    var rY = YY.getAttribute ? YY.getAttribute(Er) : null,
                      DY = YY.getAttribute ? YY.getAttribute(mr) : null;
                    return rY && DY
                  }(YY.target)) {
                  var FY = jD(nr(YY.target)),
                    IY = FY.prefix,
                    OY = FY.iconName;
                  YY.target.setAttribute(Er, IY || rY), OY && YY.target.setAttribute(mr, OY)
                } else(gY = YY.target) && gY.classList && gY.classList.contains && gY.classList.contains(Xr.replacementClass) && AY(YY.target);
              var gY
            }))
          }
        })), cY && SF.observe(gY, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function TF(YY) {
      var rY, DY, FY = YY.getAttribute("data-prefix"),
        AY = YY.getAttribute("data-icon"),
        IY = void 0 !== YY.innerText ? YY.innerText.trim() : "",
        RY = jD(nr(YY));
      return RY.prefix || (RY.prefix = zD()), FY && AY && (RY.prefix = FY, RY.iconName = AY), RY.iconName && RY.prefix || (RY.prefix && IY.length > 0 && (RY.iconName = (rY = RY.prefix, DY = YY.innerText, (VD[rY] || {})[DY] || cD(RY.prefix, uD(YY.innerText)))), !RY.iconName && Xr.autoFetchSvg && YY.firstChild && YY.firstChild.nodeType === Node.TEXT_NODE && (RY.iconName = YY.firstChild.data)), RY
    }

    function eF(YY) {
      var rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        DY = TF(YY),
        FY = DY.iconName,
        AY = DY.prefix,
        IY = DY.rest,
        RY = function(YY) {
          return xr(YY.attributes).reduce((function(YY, rY) {
            return "class" !== YY.name && "style" !== YY.name && (YY[rY.name] = rY.value), YY
          }), {})
        }(YY),
        OY = qD("parseNodeAttributes", {}, YY),
        aY = rY.styleParser ? function(YY) {
          var rY = YY.getAttribute("style"),
            DY = [];
          return rY && (DY = rY.split(";").reduce((function(YY, rY) {
            var DY = rY.split(":"),
              FY = DY[0],
              AY = DY.slice(1);
            return FY && AY.length > 0 && (YY[FY] = AY.join(":").trim()), YY
          }), {})), DY
        }(YY) : [];
      return gY({
        iconName: FY,
        prefix: AY,
        transform: kr,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: IY,
          styles: aY,
          attributes: RY
        }
      }, OY)
    }
    var NF = AD.styles;

    function BF(YY) {
      var rY = "nest" === Xr.autoReplaceSvg ? eF(YY, {
        styleParser: !1
      }) : eF(YY);
      return ~rY.extra.classes.indexOf(fr) ? kD("generateLayersText", YY, rY) : kD("generateSvgReplacementMutation", YY, rY)
    }

    function cF(YY) {
      var rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!cY) return Promise.resolve();
      var DY = eY.documentElement.classList,
        FY = function(YY) {
          return DY.add("".concat(Vr, "-").concat(YY))
        },
        AY = function(YY) {
          return DY.remove("".concat(Vr, "-").concat(YY))
        },
        IY = Xr.autoFetchSvg ? [].concat(vY(Yr), vY(vr)) : zY.concat(Object.keys(NF));
      IY.includes("fa") || IY.push("fa");
      var RY = [".".concat(fr, ":not([").concat(or, "])")].concat(IY.map((function(YY) {
        return ".".concat(YY, ":not([").concat(or, "])")
      }))).join(", ");
      if (0 === RY.length) return Promise.resolve();
      var OY = [];
      try {
        OY = xr(YY.querySelectorAll(RY))
      } catch (uY) {}
      if (!(OY.length > 0)) return Promise.resolve();
      FY("pending"), AY("complete");
      var gY = aF("onTree"),
        aY = OY.reduce((function(YY, rY) {
          try {
            var DY = BF(rY);
            DY && YY.push(DY)
          } catch (uY) {
            Tr || "MissingIcon" === uY.name && console.error(uY)
          }
          return YY
        }), []);
      return new Promise((function(YY, DY) {
        Promise.all(aY).then((function(DY) {
          WF(DY, (function() {
            FY("active"), FY("complete"), AY("pending"), "function" === typeof rY && rY(), gY(), YY()
          }))
        })).catch((function(YY) {
          gY(), DY(YY)
        }))
      }))
    }

    function KF(YY) {
      var rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      BF(YY).then((function(YY) {
        YY && WF([YY], rY)
      }))
    }
    var HF = function(YY) {
        var rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          DY = rY.transform,
          FY = void 0 === DY ? kr : DY,
          AY = rY.symbol,
          IY = void 0 !== AY && AY,
          RY = rY.mask,
          OY = void 0 === RY ? null : RY,
          aY = rY.maskId,
          vY = void 0 === aY ? null : aY,
          uY = rY.classes,
          sY = void 0 === uY ? [] : uY,
          iY = rY.attributes,
          yY = void 0 === iY ? {} : iY,
          QY = rY.styles,
          oY = void 0 === QY ? {} : QY;
        if (YY) {
          var WY = YY.prefix,
            EY = YY.iconName,
            mY = YY.icon;
          return LD(gY({
            type: "icon"
          }, YY), (function() {
            return pD("beforeDOMElementCreation", {
              iconDefinition: YY,
              params: rY
            }), tD({
              icons: {
                main: DF(mY),
                mask: OY ? DF(OY.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: WY,
              iconName: EY,
              transform: gY(gY({}, kr), FY),
              symbol: IY,
              maskId: vY,
              extra: {
                attributes: yY,
                styles: oY,
                classes: sY
              }
            })
          }))
        }
      },
      zF = {
        mixout: function() {
          return {
            icon: (YY = HF, function(rY) {
              var DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                FY = (rY || {}).icon ? rY : GD(rY || {}),
                AY = DY.mask;
              return AY && (AY = (AY || {}).icon ? AY : GD(AY || {})), YY(FY, gY(gY({}, DY), {}, {
                mask: AY
              }))
            })
          };
          var YY
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(YY) {
              return YY.treeCallback = cF, YY.nodeCallback = KF, YY
            }
          }
        },
        provides: function(YY) {
          YY.i2svg = function(YY) {
            var rY = YY.node,
              DY = void 0 === rY ? eY : rY,
              FY = YY.callback;
            return cF(DY, void 0 === FY ? function() {} : FY)
          }, YY.generateSvgReplacementMutation = function(YY, rY) {
            var DY = rY.iconName,
              FY = rY.prefix,
              AY = rY.transform,
              IY = rY.symbol,
              RY = rY.mask,
              OY = rY.maskId,
              gY = rY.extra;
            return new Promise((function(rY, vY) {
              Promise.all([AF(DY, FY), RY.iconName ? AF(RY.iconName, RY.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(RY) {
                var vY = aY(RY, 2),
                  uY = vY[0],
                  sY = vY[1];
                rY([YY, tD({
                  icons: {
                    main: uY,
                    mask: sY
                  },
                  prefix: FY,
                  iconName: DY,
                  transform: AY,
                  symbol: IY,
                  maskId: OY,
                  extra: gY,
                  watchable: !0
                })])
              })).catch(vY)
            }))
          }, YY.generateAbstractIcon = function(YY) {
            var rY, DY = YY.children,
              FY = YY.attributes,
              AY = YY.main,
              IY = YY.transform,
              RY = Ur(YY.styles);
            return RY.length > 0 && (FY.style = RY), Lr(IY) && (rY = kD("generateAbstractTransformGrouping", {
              main: AY,
              transform: IY,
              containerWidth: AY.width,
              iconWidth: AY.width
            })), DY.push(rY || AY.icon), {
              children: DY,
              attributes: FY
            }
          }
        }
      },
      ZF = {
        mixout: function() {
          return {
            layer: function(YY) {
              var rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                DY = rY.classes,
                FY = void 0 === DY ? [] : DY;
              return LD({
                type: "layer"
              }, (function() {
                pD("beforeDOMElementCreation", {
                  assembler: YY,
                  params: rY
                });
                var DY = [];
                return YY((function(YY) {
                  Array.isArray(YY) ? YY.map((function(YY) {
                    DY = DY.concat(YY.abstract)
                  })) : DY = DY.concat(YY.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(Xr.cssPrefix, "-layers")].concat(vY(FY)).join(" ")
                  },
                  children: DY
                }]
              }))
            }
          }
        }
      },
      CF = {
        mixout: function() {
          return {
            counter: function(YY) {
              var rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                DY = rY.title,
                FY = void 0 === DY ? null : DY,
                AY = rY.classes,
                IY = void 0 === AY ? [] : AY,
                RY = rY.attributes,
                OY = void 0 === RY ? {} : RY,
                aY = rY.styles,
                uY = void 0 === aY ? {} : aY;
              return LD({
                type: "counter",
                content: YY
              }, (function() {
                return pD("beforeDOMElementCreation", {
                    content: YY,
                    params: rY
                  }),
                  function(YY) {
                    var rY = YY.content,
                      DY = YY.extra,
                      FY = gY(gY({}, DY.attributes), {}, {
                        class: DY.classes.join(" ")
                      }),
                      AY = Ur(DY.styles);
                    AY.length > 0 && (FY.style = AY);
                    var IY = [];
                    return IY.push({
                      tag: "span",
                      attributes: FY,
                      children: [rY]
                    }), IY
                  }({
                    content: YY.toString(),
                    title: FY,
                    extra: {
                      attributes: OY,
                      styles: uY,
                      classes: ["".concat(Xr.cssPrefix, "-layers-counter")].concat(vY(IY))
                    }
                  })
              }))
            }
          }
        }
      },
      fF = {
        mixout: function() {
          return {
            text: function(YY) {
              var rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                DY = rY.transform,
                FY = void 0 === DY ? kr : DY,
                AY = rY.classes,
                IY = void 0 === AY ? [] : AY,
                RY = rY.attributes,
                OY = void 0 === RY ? {} : RY,
                aY = rY.styles,
                uY = void 0 === aY ? {} : aY;
              return LD({
                type: "text",
                content: YY
              }, (function() {
                return pD("beforeDOMElementCreation", {
                  content: YY,
                  params: rY
                }), YF({
                  content: YY,
                  transform: gY(gY({}, kr), FY),
                  extra: {
                    attributes: OY,
                    styles: uY,
                    classes: ["".concat(Xr.cssPrefix, "-layers-text")].concat(vY(IY))
                  }
                })
              }))
            }
          }
        },
        provides: function(YY) {
          YY.generateLayersText = function(YY, rY) {
            var DY = rY.transform,
              FY = rY.extra,
              AY = null,
              IY = null;
            if (KY) {
              var RY = parseInt(getComputedStyle(YY).fontSize, 10),
                OY = YY.getBoundingClientRect();
              AY = OY.width / RY, IY = OY.height / RY
            }
            return Promise.resolve([YY, YF({
              content: YY.innerHTML,
              width: AY,
              height: IY,
              transform: DY,
              extra: FY,
              watchable: !0
            })])
          }
        }
      },
      jF = new RegExp('"', "ug"),
      hF = [1105920, 1112319],
      dF = gY(gY(gY(gY({}, {
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
      JF = Object.keys(dF).reduce((function(YY, rY) {
        return YY[rY.toLowerCase()] = dF[rY], YY
      }), {}),
      MF = Object.keys(JF).reduce((function(YY, rY) {
        var DY = JF[rY];
        return YY[rY] = DY[900] || vY(Object.entries(DY))[0][1], YY
      }), {});

    function wF(YY, rY) {
      var DY = "".concat("data-fa-pseudo-element-pending").concat(rY.replace(":", "-"));
      return new Promise((function(FY, AY) {
        if (null !== YY.getAttribute(DY)) return FY();
        var IY = xr(YY.children).filter((function(YY) {
            return YY.getAttribute(Wr) === rY
          }))[0],
          RY = TY.getComputedStyle(YY, rY),
          OY = RY.getPropertyValue("font-family"),
          aY = OY.match(jr),
          uY = RY.getPropertyValue("font-weight"),
          sY = RY.getPropertyValue("content");
        if (IY && !aY) return YY.removeChild(IY), FY();
        if (aY && "none" !== sY && "" !== sY) {
          var iY = RY.getPropertyValue("content"),
            yY = function(YY, rY) {
              var DY = YY.replace(/^['"]|['"]$/g, "").toLowerCase(),
                FY = parseInt(rY),
                AY = isNaN(FY) ? "normal" : FY;
              return (JF[DY] || {})[AY] || MF[DY]
            }(OY, uY),
            QY = function(YY) {
              return uD(vY(YY.replace(jF, ""))[0] || "")
            }(iY),
            oY = aY[0].startsWith("FontAwesome"),
            WY = function(YY) {
              var rY = YY.getPropertyValue("font-feature-settings").includes("ss01"),
                DY = YY.getPropertyValue("content").replace(jF, ""),
                FY = DY.codePointAt(0),
                AY = FY >= hF[0] && FY <= hF[1],
                IY = 2 === DY.length && DY[0] === DY[1];
              return AY || IY || rY
            }(RY),
            EY = cD(yY, QY),
            mY = EY;
          if (oY) {
            var VY = function(YY) {
              var rY = lD[YY],
                DY = cD("fas", YY);
              return rY || (DY ? {
                prefix: "fas",
                iconName: DY
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(QY);
            VY.iconName && VY.prefix && (EY = VY.iconName, yY = VY.prefix)
          }
          if (!EY || WY || IY && IY.getAttribute(Er) === yY && IY.getAttribute(mr) === mY) FY();
          else {
            YY.setAttribute(DY, mY), IY && YY.removeChild(IY);
            var SY = {
                iconName: null,
                prefix: null,
                transform: kr,
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
              lY = SY.extra;
            lY.attributes[Wr] = rY, AF(EY, yY).then((function(AY) {
              var IY = tD(gY(gY({}, SY), {}, {
                  icons: {
                    main: AY,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: yY,
                  iconName: mY,
                  extra: lY,
                  watchable: !0
                })),
                RY = eY.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === rY ? YY.insertBefore(RY, YY.firstChild) : YY.appendChild(RY), RY.outerHTML = IY.map((function(YY) {
                return gD(YY)
              })).join("\n"), YY.removeAttribute(DY), FY()
            })).catch(AY)
          }
        } else FY()
      }))
    }

    function bF(YY) {
      return Promise.all([wF(YY, "::before"), wF(YY, "::after")])
    }

    function XF(YY) {
      return YY.parentNode !== document.head && !~Sr.indexOf(YY.tagName.toUpperCase()) && !YY.getAttribute(Wr) && (!YY.parentNode || "svg" !== YY.parentNode.tagName)
    }
    var qF = function(YY) {
        return !!YY && lr.some((function(rY) {
          return YY.includes(rY)
        }))
      },
      pF = function(YY) {
        if (!YY) return [];
        var rY = new Set,
          DY = YY.split(/,(?![^()]*\))/).map((function(YY) {
            return YY.trim()
          }));
        DY = DY.flatMap((function(YY) {
          return YY.includes("(") ? YY : YY.split(",").map((function(YY) {
            return YY.trim()
          }))
        }));
        var FY, AY = IY(DY);
        try {
          for (AY.s(); !(FY = AY.n()).done;) {
            var RY = FY.value;
            if (qF(RY)) {
              var OY = lr.reduce((function(YY, rY) {
                return YY.replace(rY, "")
              }), RY);
              "" !== OY && "*" !== OY && rY.add(OY)
            }
          }
        } catch (gY) {
          AY.e(gY)
        } finally {
          AY.f()
        }
        return rY
      };

    function kF(YY) {
      if (cY) {
        var rY;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) rY = YY;
        else if (Xr.searchPseudoElementsFullScan) rY = YY.querySelectorAll("*");
        else {
          var DY, FY = new Set,
            AY = IY(document.styleSheets);
          try {
            for (AY.s(); !(DY = AY.n()).done;) {
              var RY = DY.value;
              try {
                var OY, gY = IY(RY.cssRules);
                try {
                  for (gY.s(); !(OY = gY.n()).done;) {
                    var aY, vY = OY.value,
                      uY = IY(pF(vY.selectorText));
                    try {
                      for (uY.s(); !(aY = uY.n()).done;) {
                        var sY = aY.value;
                        FY.add(sY)
                      }
                    } catch (yY) {
                      uY.e(yY)
                    } finally {
                      uY.f()
                    }
                  }
                } catch (yY) {
                  gY.e(yY)
                } finally {
                  gY.f()
                }
              } catch (QY) {
                Xr.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(RY.href, " (").concat(QY.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (yY) {
            AY.e(yY)
          } finally {
            AY.f()
          }
          if (!FY.size) return;
          var iY = Array.from(FY).join(", ");
          try {
            rY = YY.querySelectorAll(iY)
          } catch (oY) {}
        }
        return new Promise((function(YY, DY) {
          var FY = xr(rY).filter(XF).map(bF),
            AY = aF("searchPseudoElements");
          mF(), Promise.all(FY).then((function() {
            AY(), VF(), YY()
          })).catch((function() {
            AY(), VF(), DY()
          }))
        }))
      }
    }
    var GF = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(YY) {
              return YY.pseudoElementsCallback = kF, YY
            }
          }
        },
        provides: function(YY) {
          YY.pseudoElements2svg = function(YY) {
            var rY = YY.node,
              DY = void 0 === rY ? eY : rY;
            Xr.searchPseudoElements && kF(DY)
          }
        }
      },
      xF = !1,
      nF = function(YY) {
        return YY.toLowerCase().split(" ").reduce((function(YY, rY) {
          var DY = rY.toLowerCase().split("-"),
            FY = DY[0],
            AY = DY.slice(1).join("-");
          if (FY && "h" === AY) return YY.flipX = !0, YY;
          if (FY && "v" === AY) return YY.flipY = !0, YY;
          if (AY = parseFloat(AY), isNaN(AY)) return YY;
          switch (FY) {
            case "grow":
              YY.size = YY.size + AY;
              break;
            case "shrink":
              YY.size = YY.size - AY;
              break;
            case "left":
              YY.x = YY.x - AY;
              break;
            case "right":
              YY.x = YY.x + AY;
              break;
            case "up":
              YY.y = YY.y - AY;
              break;
            case "down":
              YY.y = YY.y + AY;
              break;
            case "rotate":
              YY.rotate = YY.rotate + AY
          }
          return YY
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      PF = {
        mixout: function() {
          return {
            parse: {
              transform: function(YY) {
                return nF(YY)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(YY, rY) {
              var DY = rY.getAttribute("data-fa-transform");
              return DY && (YY.transform = nF(DY)), YY
            }
          }
        },
        provides: function(YY) {
          YY.generateAbstractTransformGrouping = function(YY) {
            var rY = YY.main,
              DY = YY.transform,
              FY = YY.containerWidth,
              AY = YY.iconWidth,
              IY = {
                transform: "translate(".concat(FY / 2, " 256)")
              },
              RY = "translate(".concat(32 * DY.x, ", ").concat(32 * DY.y, ") "),
              OY = "scale(".concat(DY.size / 16 * (DY.flipX ? -1 : 1), ", ").concat(DY.size / 16 * (DY.flipY ? -1 : 1), ") "),
              aY = "rotate(".concat(DY.rotate, " 0 0)"),
              vY = {
                outer: IY,
                inner: {
                  transform: "".concat(RY, " ").concat(OY, " ").concat(aY)
                },
                path: {
                  transform: "translate(".concat(AY / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: gY({}, vY.outer),
              children: [{
                tag: "g",
                attributes: gY({}, vY.inner),
                children: [{
                  tag: rY.icon.tag,
                  children: rY.icon.children,
                  attributes: gY(gY({}, rY.icon.attributes), vY.path)
                }]
              }]
            }
          }
        }
      },
      UF = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function LF(YY) {
      var rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return YY.attributes && (YY.attributes.fill || rY) && (YY.attributes.fill = "black"), YY
    }
    var tF = {
        hooks: function() {
          return {
            parseNodeAttributes: function(YY, rY) {
              var DY = rY.getAttribute("data-fa-mask"),
                FY = DY ? jD(DY.split(" ").map((function(YY) {
                  return YY.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return FY.prefix || (FY.prefix = zD()), YY.mask = FY, YY.maskId = rY.getAttribute("data-fa-mask-id"), YY
            }
          }
        },
        provides: function(YY) {
          YY.generateAbstractMask = function(YY) {
            var rY, DY = YY.children,
              FY = YY.attributes,
              AY = YY.main,
              IY = YY.mask,
              RY = YY.maskId,
              OY = YY.transform,
              aY = AY.width,
              vY = AY.icon,
              uY = IY.width,
              sY = IY.icon,
              iY = function(YY) {
                var rY = YY.transform,
                  DY = YY.containerWidth,
                  FY = YY.iconWidth,
                  AY = {
                    transform: "translate(".concat(DY / 2, " 256)")
                  },
                  IY = "translate(".concat(32 * rY.x, ", ").concat(32 * rY.y, ") "),
                  RY = "scale(".concat(rY.size / 16 * (rY.flipX ? -1 : 1), ", ").concat(rY.size / 16 * (rY.flipY ? -1 : 1), ") "),
                  OY = "rotate(".concat(rY.rotate, " 0 0)");
                return {
                  outer: AY,
                  inner: {
                    transform: "".concat(IY, " ").concat(RY, " ").concat(OY)
                  },
                  path: {
                    transform: "translate(".concat(FY / 2 * -1, " -256)")
                  }
                }
              }({
                transform: OY,
                containerWidth: uY,
                iconWidth: aY
              }),
              yY = {
                tag: "rect",
                attributes: gY(gY({}, UF), {}, {
                  fill: "white"
                })
              },
              QY = vY.children ? {
                children: vY.children.map(LF)
              } : {},
              oY = {
                tag: "g",
                attributes: gY({}, iY.inner),
                children: [LF(gY({
                  tag: vY.tag,
                  attributes: gY(gY({}, vY.attributes), iY.path)
                }, QY))]
              },
              WY = {
                tag: "g",
                attributes: gY({}, iY.outer),
                children: [oY]
              },
              EY = "mask-".concat(RY || Gr()),
              mY = "clip-".concat(RY || Gr()),
              VY = {
                tag: "mask",
                attributes: gY(gY({}, UF), {}, {
                  id: EY,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [yY, WY]
              },
              SY = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: mY
                  },
                  children: (rY = sY, "g" === rY.tag ? rY.children : [rY])
                }, VY]
              };
            return DY.push(SY, {
              tag: "rect",
              attributes: gY({
                fill: "currentColor",
                "clip-path": "url(#".concat(mY, ")"),
                mask: "url(#".concat(EY, ")")
              }, UF)
            }), {
              children: DY,
              attributes: FY
            }
          }
        }
      },
      YA = {
        provides: function(YY) {
          var rY = !1;
          TY.matchMedia && (rY = TY.matchMedia("(prefers-reduced-motion: reduce)").matches), YY.missingIconAbstract = function() {
            var YY = [],
              DY = {
                fill: "currentColor"
              },
              FY = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            YY.push({
              tag: "path",
              attributes: gY(gY({}, DY), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var AY = gY(gY({}, FY), {}, {
                attributeName: "opacity"
              }),
              IY = {
                tag: "circle",
                attributes: gY(gY({}, DY), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return rY || IY.children.push({
              tag: "animate",
              attributes: gY(gY({}, FY), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: gY(gY({}, AY), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), YY.push(IY), YY.push({
              tag: "path",
              attributes: gY(gY({}, DY), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: rY ? [] : [{
                tag: "animate",
                attributes: gY(gY({}, AY), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), rY || YY.push({
              tag: "path",
              attributes: gY(gY({}, DY), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: gY(gY({}, AY), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: YY
            }
          }
        }
      };
    ! function(YY, rY) {
      var DY = rY.mixoutsTo;
      MD = YY, wD = {}, Object.keys(bD).forEach((function(YY) {
        -1 === XD.indexOf(YY) && delete bD[YY]
      })), MD.forEach((function(YY) {
        var rY = YY.mixout ? YY.mixout() : {};
        if (Object.keys(rY).forEach((function(YY) {
            "function" === typeof rY[YY] && (DY[YY] = rY[YY]), "object" === sY(rY[YY]) && Object.keys(rY[YY]).forEach((function(FY) {
              DY[YY] || (DY[YY] = {}), DY[YY][FY] = rY[YY][FY]
            }))
          })), YY.hooks) {
          var FY = YY.hooks();
          Object.keys(FY).forEach((function(YY) {
            wD[YY] || (wD[YY] = []), wD[YY].push(FY[YY])
          }))
        }
        YY.provides && YY.provides(bD)
      }))
    }([DD, zF, ZF, CF, fF, GF, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              mF(), xF = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            lF(qD("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            SF && SF.disconnect()
          },
          watch: function(YY) {
            var rY = YY.observeMutationsRoot;
            xF ? VF() : lF(qD("mutationObserverCallbacks", {
              observeMutationsRoot: rY
            }))
          }
        }
      }
    }, PF, tF, YA, {
      hooks: function() {
        return {
          parseNodeAttributes: function(YY, rY) {
            var DY = rY.getAttribute("data-fa-symbol"),
              FY = null !== DY && ("" === DY || DY);
            return YY.symbol = FY, YY
          }
        }
      }
    }], {
      mixoutsTo: PD
    });
    var rA = PD.noAuto,
      DA = PD.config,
      FA = PD.library,
      AA = PD.dom,
      IA = PD.parse,
      RA = PD.findIconDefinition,
      OA = PD.toHtml,
      gA = PD.icon,
      aA = PD.layer,
      vA = PD.text,
      uA = PD.counter
  },
  6250: YY => {
    YY.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);