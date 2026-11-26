/*! For license information please see pxmq3aq.fa-renderer.95c54cc8.chunk.js.LICENSE.txt */
export const id = 37;
export const ids = [37];
export const modules = {
  7318: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      FontAwesomeIcon: () => AV
    });
    var JV = xV(7314),
      YV = xV(5453),
      UV = xV.n(YV),
      yV = xV(62);

    function pV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function QV(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV, eV) {
          if ("object" != typeof VV || !VV) return VV;
          var xV = VV[Symbol.toPrimitive];
          if (void 0 !== xV) {
            var JV = xV.call(VV, eV || "default");
            if ("object" != typeof JV) return JV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === eV ? String : Number)(VV)
        }(VV, "string");
        return "symbol" == typeof eV ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function nV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function wV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? nV(Object(xV), !0).forEach((function(eV) {
          QV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : nV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function ZV(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        var xV = null == VV ? null : "undefined" != typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
        if (null != xV) {
          var JV, YV, UV, yV, pV = [],
            QV = !0,
            nV = !1;
          try {
            if (UV = (xV = xV.call(VV)).next, 0 === eV) {
              if (Object(xV) !== xV) return;
              QV = !1
            } else
              for (; !(QV = (JV = UV.call(xV)).done) && (pV.push(JV.value), pV.length !== eV); QV = !0);
          } catch (VV) {
            nV = !0, YV = VV
          } finally {
            try {
              if (!QV && null != xV.return && (yV = xV.return(), Object(yV) !== yV)) return
            } finally {
              if (nV) throw YV
            }
          }
          return pV
        }
      }(VV, eV) || kV(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vV(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return pV(VV)
      }(VV) || function(VV) {
        if ("undefined" != typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
      }(VV) || kV(VV) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rV(VV) {
      return rV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, rV(VV)
    }

    function kV(VV, eV) {
      if (VV) {
        if ("string" == typeof VV) return pV(VV, eV);
        var xV = {}.toString.call(VV).slice(8, -1);
        return "Object" === xV && VV.constructor && (xV = VV.constructor.name), "Map" === xV || "Set" === xV ? Array.from(VV) : "Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV) ? pV(VV, eV) : void 0
      }
    }
    var bV;
    try {
      var EV = xV(7324);
      bV = EV.version
    } catch (XV) {
      bV = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function BV(VV) {
      var eV = VV.beat,
        xV = VV.fade,
        JV = VV.beatFade,
        YV = VV.bounce,
        UV = VV.shake,
        yV = VV.flash,
        pV = VV.spin,
        nV = VV.spinPulse,
        wV = VV.spinReverse,
        vV = VV.pulse,
        rV = VV.fixedWidth,
        kV = VV.inverse,
        EV = VV.border,
        BV = VV.listItem,
        jV = VV.flip,
        qV = VV.size,
        tV = VV.rotation,
        FV = VV.pull,
        TV = VV.swapOpacity,
        PV = VV.rotateBy,
        AV = VV.widthAuto,
        NV = function(VV, eV) {
          for (var xV = ZV(VV.split("-"), 2), JV = xV[0], YV = xV[1], UV = ZV(eV.split("-"), 2), yV = UV[0], pV = UV[1], QV = JV.split("."), nV = yV.split("."), wV = 0; wV < Math.max(QV.length, nV.length); wV++) {
            var vV = QV[wV] || "0",
              rV = nV[wV] || "0",
              kV = parseInt(vV, 10),
              bV = parseInt(rV, 10);
            if (kV !== bV) return kV > bV
          }
          for (var EV = 0; EV < Math.max(QV.length, nV.length); EV++) {
            var BV = QV[EV] || "0",
              jV = nV[EV] || "0";
            if (BV !== jV && BV.length !== jV.length) return BV.length < jV.length
          }
          return !(YV && !pV)
        }(bV, "7.0.0"),
        XV = QV(QV(QV(QV(QV(QV({
          "fa-beat": eV,
          "fa-fade": xV,
          "fa-beat-fade": JV,
          "fa-bounce": YV,
          "fa-shake": UV,
          "fa-flash": yV,
          "fa-spin": pV,
          "fa-spin-reverse": wV,
          "fa-spin-pulse": nV,
          "fa-pulse": vV,
          "fa-fw": rV,
          "fa-inverse": kV,
          "fa-border": EV,
          "fa-li": BV,
          "fa-flip": !0 === jV,
          "fa-flip-horizontal": "horizontal" === jV || "both" === jV,
          "fa-flip-vertical": "vertical" === jV || "both" === jV
        }, "fa-".concat(qV), "undefined" !== typeof qV && null !== qV), "fa-rotate-".concat(tV), "undefined" !== typeof tV && null !== tV && 0 !== tV), "fa-pull-".concat(FV), "undefined" !== typeof FV && null !== FV), "fa-swap-opacity", TV), "fa-rotate-by", NV && PV), "fa-width-auto", NV && AV);
      return Object.keys(XV).map((function(VV) {
        return XV[VV] ? VV : null
      })).filter((function(VV) {
        return VV
      }))
    }

    function jV(VV) {
      return eV = VV, (eV -= 0) === eV ? VV : (VV = VV.replace(/[\-_\s]+(.)?/g, (function(VV, eV) {
        return eV ? eV.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + VV.substr(1);
      var eV
    }
    var qV = ["style"];
    var tV = !1;
    try {
      tV = !0
    } catch (XV) {}

    function FV(VV) {
      return VV && "object" === rV(VV) && VV.prefix && VV.iconName && VV.icon ? VV : JV.parse.icon ? JV.parse.icon(VV) : null === VV ? null : VV && "object" === rV(VV) && VV.prefix && VV.iconName ? VV : Array.isArray(VV) && 2 === VV.length ? {
        prefix: VV[0],
        iconName: VV[1]
      } : "string" === typeof VV ? {
        prefix: "fas",
        iconName: VV
      } : void 0
    }

    function TV(VV, eV) {
      return Array.isArray(eV) && eV.length > 0 || !Array.isArray(eV) && eV ? QV({}, VV, eV) : {}
    }
    var PV = {
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
      AV = yV.forwardRef((function(VV, eV) {
        var xV = wV(wV({}, PV), VV),
          YV = xV.icon,
          UV = xV.mask,
          yV = xV.symbol,
          pV = xV.className,
          QV = xV.title,
          nV = xV.titleId,
          ZV = xV.maskId,
          rV = FV(YV),
          kV = TV("classes", [].concat(vV(BV(xV)), vV((pV || "").split(" ")))),
          bV = TV("transform", "string" === typeof xV.transform ? JV.parse.transform(xV.transform) : xV.transform),
          EV = TV("mask", FV(UV)),
          jV = (0, JV.icon)(rV, wV(wV(wV(wV({}, kV), bV), EV), {}, {
            symbol: yV,
            title: QV,
            titleId: nV,
            maskId: ZV
          }));
        if (!jV) return function() {
          var VV;
          !tV && console && "function" === typeof console.error && (VV = console).error.apply(VV, arguments)
        }("Could not find icon", rV), null;
        var qV = jV.abstract,
          AV = {
            ref: eV
          };
        return Object.keys(xV).forEach((function(VV) {
          PV.hasOwnProperty(VV) || (AV[VV] = xV[VV])
        })), NV(qV[0], AV)
      }));
    AV.displayName = "FontAwesomeIcon", AV.propTypes = {
      beat: UV().bool,
      border: UV().bool,
      beatFade: UV().bool,
      bounce: UV().bool,
      className: UV().string,
      fade: UV().bool,
      flash: UV().bool,
      mask: UV().oneOfType([UV().object, UV().array, UV().string]),
      maskId: UV().string,
      fixedWidth: UV().bool,
      inverse: UV().bool,
      flip: UV().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: UV().oneOfType([UV().object, UV().array, UV().string]),
      listItem: UV().bool,
      pull: UV().oneOf(["right", "left"]),
      pulse: UV().bool,
      rotation: UV().oneOf([0, 90, 180, 270]),
      rotateBy: UV().bool,
      shake: UV().bool,
      size: UV().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: UV().bool,
      spinPulse: UV().bool,
      spinReverse: UV().bool,
      symbol: UV().oneOfType([UV().bool, UV().string]),
      title: UV().string,
      titleId: UV().string,
      transform: UV().oneOfType([UV().string, UV().object]),
      swapOpacity: UV().bool,
      widthAuto: UV().bool
    };
    var NV = function VV(eV, xV) {
      var JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof xV) return xV;
      var YV = (xV.children || []).map((function(xV) {
          return VV(eV, xV)
        })),
        UV = Object.keys(xV.attributes || {}).reduce((function(VV, eV) {
          var JV = xV.attributes[eV];
          switch (eV) {
            case "class":
              VV.attrs.className = JV, delete xV.attributes.class;
              break;
            case "style":
              VV.attrs.style = JV.split(";").map((function(VV) {
                return VV.trim()
              })).filter((function(VV) {
                return VV
              })).reduce((function(VV, eV) {
                var xV, JV = eV.indexOf(":"),
                  YV = jV(eV.slice(0, JV)),
                  UV = eV.slice(JV + 1).trim();
                return YV.startsWith("webkit") ? VV[(xV = YV, xV.charAt(0).toUpperCase() + xV.slice(1))] = UV : VV[YV] = UV, VV
              }), {});
              break;
            default:
              0 === eV.indexOf("aria-") || 0 === eV.indexOf("data-") ? VV.attrs[eV.toLowerCase()] = JV : VV.attrs[jV(eV)] = JV
          }
          return VV
        }), {
          attrs: {}
        }),
        yV = JV.style,
        pV = void 0 === yV ? {} : yV,
        QV = function(VV, eV) {
          if (null == VV) return {};
          var xV, JV, YV = function(VV, eV) {
            if (null == VV) return {};
            var xV = {};
            for (var JV in VV)
              if ({}.hasOwnProperty.call(VV, JV)) {
                if (-1 !== eV.indexOf(JV)) continue;
                xV[JV] = VV[JV]
              } return xV
          }(VV, eV);
          if (Object.getOwnPropertySymbols) {
            var UV = Object.getOwnPropertySymbols(VV);
            for (JV = 0; JV < UV.length; JV++) xV = UV[JV], -1 === eV.indexOf(xV) && {}.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
          }
          return YV
        }(JV, qV);
      return UV.attrs.style = wV(wV({}, UV.attrs.style), pV), eV.apply(void 0, [xV.tag, wV(wV({}, UV.attrs), QV)].concat(vV(YV)))
    }.bind(null, yV.createElement)
  },
  5461: (VV, eV, xV) => {
    var JV = xV(5469);

    function YV() {}

    function UV() {}
    UV.resetWarningCache = YV, VV.exports = function() {
      function VV(VV, eV, xV, YV, UV, yV) {
        if (yV !== JV) {
          var pV = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw pV.name = "Invariant Violation", pV
        }
      }

      function eV() {
        return VV
      }
      VV.isRequired = VV;
      var xV = {
        array: VV,
        bigint: VV,
        bool: VV,
        func: VV,
        number: VV,
        object: VV,
        string: VV,
        symbol: VV,
        any: VV,
        arrayOf: eV,
        element: VV,
        elementType: VV,
        instanceOf: eV,
        node: VV,
        objectOf: eV,
        oneOf: eV,
        oneOfType: eV,
        shape: eV,
        exact: eV,
        checkPropTypes: UV,
        resetWarningCache: YV
      };
      return xV.PropTypes = xV, xV
    }
  },
  5453: (VV, eV, xV) => {
    VV.exports = xV(5461)()
  },
  5469: VV => {
    VV.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7314: (VV, eV, xV) => {
    function JV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function YV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, ZV(JV.key), JV)
      }
    }

    function UV(VV, eV) {
      var xV = "undefined" != typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
      if (!xV) {
        if (Array.isArray(VV) || (xV = rV(VV)) || eV && VV && "number" == typeof VV.length) {
          xV && (VV = xV);
          var JV = 0,
            YV = function() {};
          return {
            s: YV,
            n: function() {
              return JV >= VV.length ? {
                done: !0
              } : {
                done: !1,
                value: VV[JV++]
              }
            },
            e: function(VV) {
              throw VV
            },
            f: YV
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var UV, yV = !0,
        pV = !1;
      return {
        s: function() {
          xV = xV.call(VV)
        },
        n: function() {
          var VV = xV.next();
          return yV = VV.done, VV
        },
        e: function(VV) {
          pV = !0, UV = VV
        },
        f: function() {
          try {
            yV || null == xV.return || xV.return()
          } finally {
            if (pV) throw UV
          }
        }
      }
    }

    function yV(VV, eV, xV) {
      return (eV = ZV(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function pV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function QV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? pV(Object(xV), !0).forEach((function(eV) {
          yV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : pV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function nV(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        var xV = null == VV ? null : "undefined" != typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
        if (null != xV) {
          var JV, YV, UV, yV, pV = [],
            QV = !0,
            nV = !1;
          try {
            if (UV = (xV = xV.call(VV)).next, 0 === eV) {
              if (Object(xV) !== xV) return;
              QV = !1
            } else
              for (; !(QV = (JV = UV.call(xV)).done) && (pV.push(JV.value), pV.length !== eV); QV = !0);
          } catch (VV) {
            nV = !0, YV = VV
          } finally {
            try {
              if (!QV && null != xV.return && (yV = xV.return(), Object(yV) !== yV)) return
            } finally {
              if (nV) throw YV
            }
          }
          return pV
        }
      }(VV, eV) || rV(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wV(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return JV(VV)
      }(VV) || function(VV) {
        if ("undefined" != typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
      }(VV) || rV(VV) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ZV(VV) {
      var eV = function(VV, eV) {
        if ("object" != typeof VV || !VV) return VV;
        var xV = VV[Symbol.toPrimitive];
        if (void 0 !== xV) {
          var JV = xV.call(VV, eV || "default");
          if ("object" != typeof JV) return JV;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === eV ? String : Number)(VV)
      }(VV, "string");
      return "symbol" == typeof eV ? eV : eV + ""
    }

    function vV(VV) {
      return vV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, vV(VV)
    }

    function rV(VV, eV) {
      if (VV) {
        if ("string" == typeof VV) return JV(VV, eV);
        var xV = {}.toString.call(VV).slice(8, -1);
        return "Object" === xV && VV.constructor && (xV = VV.constructor.name), "Map" === xV || "Set" === xV ? Array.from(VV) : "Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV) ? JV(VV, eV) : void 0
      }
    }
    xV.r(eV), xV.d(eV, {
      api: () => Sx,
      config: () => xY,
      counter: () => ZY,
      dom: () => YY,
      findIconDefinition: () => yY,
      icon: () => QY,
      layer: () => nY,
      library: () => JY,
      noAuto: () => eY,
      parse: () => UY,
      text: () => wY,
      toHtml: () => pY
    });
    var kV = function() {},
      bV = {},
      EV = {},
      BV = null,
      jV = {
        mark: kV,
        measure: kV
      };
    try {
      "undefined" !== typeof window && (bV = window), "undefined" !== typeof document && (EV = document), "undefined" !== typeof MutationObserver && (BV = MutationObserver), "undefined" !== typeof performance && (jV = performance)
    } catch (fV) {}
    var qV, tV, FV = (bV.navigator || {}).userAgent,
      TV = void 0 === FV ? "" : FV,
      PV = bV,
      AV = EV,
      NV = BV,
      XV = jV,
      MV = (PV.document, !!AV.documentElement && !!AV.head && "function" === typeof AV.addEventListener && "function" === typeof AV.createElement),
      zV = ~TV.indexOf("MSIE") || ~TV.indexOf("Trident/"),
      GV = {
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
      WV = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      RV = "classic",
      gV = "duotone",
      DV = "sharp",
      iV = "sharp-duotone",
      CV = "chisel",
      aV = "etch",
      oV = "graphite",
      cV = "jelly",
      hV = "jelly-duo",
      lV = "jelly-fill",
      LV = "notdog",
      fV = "notdog-duo",
      mV = "slab",
      KV = "slab-press",
      HV = "thumbprint",
      uV = "utility",
      sV = "utility-duo",
      SV = "utility-fill",
      IV = "whiteboard",
      dV = [RV, gV, DV, iV, CV, aV, oV, cV, hV, lV, LV, fV, mV, KV, HV, uV, sV, SV, IV],
      OV = (yV(yV(yV(yV(yV(yV(yV(yV(yV(yV(qV = {}, RV, "Classic"), gV, "Duotone"), DV, "Sharp"), iV, "Sharp Duotone"), CV, "Chisel"), aV, "Etch"), oV, "Graphite"), cV, "Jelly"), hV, "Jelly Duo"), lV, "Jelly Fill"), yV(yV(yV(yV(yV(yV(yV(yV(yV(qV, LV, "Notdog"), fV, "Notdog Duo"), mV, "Slab"), KV, "Slab Press"), HV, "Thumbprint"), uV, "Utility"), sV, "Utility Duo"), SV, "Utility Fill"), IV, "Whiteboard"), new Map([
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
      Ve = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      ee = {
        fak: "kit",
        "fa-kit": "kit"
      },
      xe = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      Je = (yV(yV({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      Ye = {
        "kit-duotone": "fakd"
      },
      Ue = "duotone-group",
      ye = "swap-opacity",
      pe = "primary",
      Qe = "secondary",
      ne = (yV(yV(yV(yV(yV(yV(yV(yV(yV(yV(tV = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), yV(yV(yV(yV(yV(yV(yV(yV(yV(tV, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), yV(yV({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      we = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      Ze = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      ve = Ze.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      re = [].concat(wV(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", Ue, ye, pe, Qe]).concat(Ze.map((function(VV) {
        return "".concat(VV, "x")
      }))).concat(ve.map((function(VV) {
        return "w-".concat(VV)
      }))),
      ke = "___FONT_AWESOME___",
      be = "svg-inline--fa",
      Ee = "data-fa-i2svg",
      Be = "data-fa-pseudo-element",
      je = "data-prefix",
      qe = "data-icon",
      te = "fontawesome-i2svg",
      Fe = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      Te = ["::before", "::after", ":before", ":after"],
      Pe = function() {
        try {
          return !0
        } catch (VV) {
          return !1
        }
      }();

    function Ae(VV) {
      return new Proxy(VV, {
        get: function(VV, eV) {
          return eV in VV ? VV[eV] : VV[RV]
        }
      })
    }
    var Ne = QV({}, GV);
    Ne[RV] = QV(QV(QV(QV({}, {
      "fa-duotone": "duotone"
    }), GV[RV]), ee), xe);
    var Xe = Ae(Ne),
      Me = QV({}, {
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
    Me[RV] = QV(QV(QV(QV({}, {
      duotone: "fad"
    }), Me[RV]), Je), Ye);
    var ze = Ae(Me),
      Ge = QV({}, ne);
    Ge[RV] = QV(QV({}, Ge[RV]), {
      fak: "fa-kit"
    });
    var We = Ae(Ge),
      Re = QV({}, {
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
    Re[RV] = QV(QV({}, Re[RV]), {
      "fa-kit": "fak"
    });
    Ae(Re);
    var ge = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      De = "fa-layers-text",
      ie = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Ce = (Ae(QV({}, {
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
      ae = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      oe = [].concat(wV(["kit"]), wV(re)),
      ce = PV.FontAwesomeConfig || {};
    if (AV && "function" === typeof AV.querySelector) {
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
      ].forEach((function(VV) {
        var eV = nV(VV, 2),
          xV = eV[0],
          JV = eV[1],
          YV = function(VV) {
            return "" === VV || "false" !== VV && ("true" === VV || VV)
          }(function(VV) {
            var eV = AV.querySelector("script[" + VV + "]");
            if (eV) return eV.getAttribute(VV)
          }(xV));
        void 0 !== YV && null !== YV && (ce[JV] = YV)
      }))
    }
    var he = {
      styleDefault: "solid",
      familyDefault: RV,
      cssPrefix: "fa",
      replacementClass: be,
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
    ce.familyPrefix && (ce.cssPrefix = ce.familyPrefix);
    var le = QV(QV({}, he), ce);
    le.autoReplaceSvg || (le.observeMutations = !1);
    var Le = {};
    Object.keys(he).forEach((function(VV) {
      Object.defineProperty(Le, VV, {
        enumerable: !0,
        set: function(eV) {
          le[VV] = eV, fe.forEach((function(VV) {
            return VV(Le)
          }))
        },
        get: function() {
          return le[VV]
        }
      })
    })), Object.defineProperty(Le, "familyPrefix", {
      enumerable: !0,
      set: function(VV) {
        le.cssPrefix = VV, fe.forEach((function(VV) {
          return VV(Le)
        }))
      },
      get: function() {
        return le.cssPrefix
      }
    }), PV.FontAwesomeConfig = Le;
    var fe = [];
    var me = 16,
      Ke = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function He() {
      for (var VV = 12, eV = ""; VV-- > 0;) eV += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return eV
    }

    function ue(VV) {
      for (var eV = [], xV = (VV || []).length >>> 0; xV--;) eV[xV] = VV[xV];
      return eV
    }

    function se(VV) {
      return VV.classList ? ue(VV.classList) : (VV.getAttribute("class") || "").split(" ").filter((function(VV) {
        return VV
      }))
    }

    function Se(VV) {
      return "".concat(VV).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Ie(VV) {
      return Object.keys(VV || {}).reduce((function(eV, xV) {
        return eV + "".concat(xV, ": ").concat(VV[xV].trim(), ";")
      }), "")
    }

    function de(VV) {
      return VV.size !== Ke.size || VV.x !== Ke.x || VV.y !== Ke.y || VV.rotate !== Ke.rotate || VV.flipX || VV.flipY
    }

    function Oe() {
      var VV = "fa",
        eV = be,
        xV = Le.cssPrefix,
        JV = Le.replacementClass,
        YV = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (xV !== VV || JV !== eV) {
        var UV = new RegExp("\\.".concat(VV, "\\-"), "g"),
          yV = new RegExp("\\--".concat(VV, "\\-"), "g"),
          pV = new RegExp("\\.".concat(eV), "g");
        YV = YV.replace(UV, ".".concat(xV, "-")).replace(yV, "--".concat(xV, "-")).replace(pV, ".".concat(JV))
      }
      return YV
    }
    var Vx = !1;

    function ex() {
      Le.autoAddCss && !Vx && (! function(VV) {
        if (VV && MV) {
          var eV = AV.createElement("style");
          eV.setAttribute("type", "text/css"), eV.innerHTML = VV;
          for (var xV = AV.head.childNodes, JV = null, YV = xV.length - 1; YV > -1; YV--) {
            var UV = xV[YV],
              yV = (UV.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(yV) > -1 && (JV = UV)
          }
          AV.head.insertBefore(eV, JV)
        }
      }(Oe()), Vx = !0)
    }
    var xx = {
        mixout: function() {
          return {
            dom: {
              css: Oe,
              insertCss: ex
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              ex()
            },
            beforeI2svg: function() {
              ex()
            }
          }
        }
      },
      Jx = PV || {};
    Jx[ke] || (Jx[ke] = {}), Jx[ke].styles || (Jx[ke].styles = {}), Jx[ke].hooks || (Jx[ke].hooks = {}), Jx[ke].shims || (Jx[ke].shims = []);
    var Yx = Jx[ke],
      Ux = [],
      yx = function() {
        AV.removeEventListener("DOMContentLoaded", yx), px = 1, Ux.map((function(VV) {
          return VV()
        }))
      },
      px = !1;

    function Qx(VV) {
      var eV = VV.tag,
        xV = VV.attributes,
        JV = void 0 === xV ? {} : xV,
        YV = VV.children,
        UV = void 0 === YV ? [] : YV;
      return "string" === typeof VV ? Se(VV) : "<".concat(eV, " ").concat(function(VV) {
        return Object.keys(VV || {}).reduce((function(eV, xV) {
          return eV + "".concat(xV, '="').concat(Se(VV[xV]), '" ')
        }), "").trim()
      }(JV), ">").concat(UV.map(Qx).join(""), "</").concat(eV, ">")
    }

    function nx(VV, eV, xV) {
      if (VV && VV[eV] && VV[eV][xV]) return {
        prefix: eV,
        iconName: xV,
        icon: VV[eV][xV]
      }
    }
    MV && ((px = (AV.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(AV.readyState)) || AV.addEventListener("DOMContentLoaded", yx));
    var wx = function(VV, eV, xV, JV) {
      var YV, UV, yV, pV = Object.keys(VV),
        QV = pV.length,
        nV = void 0 !== JV ? function(VV, eV) {
          return function(xV, JV, YV, UV) {
            return VV.call(eV, xV, JV, YV, UV)
          }
        }(eV, JV) : eV;
      for (void 0 === xV ? (YV = 1, yV = VV[pV[0]]) : (YV = 0, yV = xV); YV < QV; YV++) yV = nV(yV, VV[UV = pV[YV]], UV, VV);
      return yV
    };

    function Zx(VV) {
      return 1 !== wV(VV).length ? null : VV.codePointAt(0).toString(16)
    }

    function vx(VV) {
      return Object.keys(VV).reduce((function(eV, xV) {
        var JV = VV[xV];
        return !!JV.icon ? eV[JV.iconName] = JV.icon : eV[xV] = JV, eV
      }), {})
    }

    function rx(VV, eV) {
      var xV = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        JV = void 0 !== xV && xV,
        YV = vx(eV);
      "function" !== typeof Yx.hooks.addPack || JV ? Yx.styles[VV] = QV(QV({}, Yx.styles[VV] || {}), YV) : Yx.hooks.addPack(VV, vx(eV)), "fas" === VV && rx("fa", eV)
    }
    var kx = Yx.styles,
      bx = Yx.shims,
      Ex = Object.keys(We),
      Bx = Ex.reduce((function(VV, eV) {
        return VV[eV] = Object.keys(We[eV]), VV
      }), {}),
      jx = null,
      qx = {},
      tx = {},
      Fx = {},
      Tx = {},
      Px = {};

    function Ax(VV, eV) {
      var xV, JV = eV.split("-"),
        YV = JV[0],
        UV = JV.slice(1).join("-");
      return YV !== VV || "" === UV || (xV = UV, ~oe.indexOf(xV)) ? null : UV
    }
    var Nx, Xx = function() {
      var VV = function(VV) {
        return wx(kx, (function(eV, xV, JV) {
          return eV[JV] = wx(xV, VV, {}), eV
        }), {})
      };
      qx = VV((function(VV, eV, xV) {
        (eV[3] && (VV[eV[3]] = xV), eV[2]) && eV[2].filter((function(VV) {
          return "number" === typeof VV
        })).forEach((function(eV) {
          VV[eV.toString(16)] = xV
        }));
        return VV
      })), tx = VV((function(VV, eV, xV) {
        (VV[xV] = xV, eV[2]) && eV[2].filter((function(VV) {
          return "string" === typeof VV
        })).forEach((function(eV) {
          VV[eV] = xV
        }));
        return VV
      })), Px = VV((function(VV, eV, xV) {
        var JV = eV[2];
        return VV[xV] = xV, JV.forEach((function(eV) {
          VV[eV] = xV
        })), VV
      }));
      var eV = "far" in kx || Le.autoFetchSvg,
        xV = wx(bx, (function(VV, xV) {
          var JV = xV[0],
            YV = xV[1],
            UV = xV[2];
          return "far" !== YV || eV || (YV = "fas"), "string" === typeof JV && (VV.names[JV] = {
            prefix: YV,
            iconName: UV
          }), "number" === typeof JV && (VV.unicodes[JV.toString(16)] = {
            prefix: YV,
            iconName: UV
          }), VV
        }), {
          names: {},
          unicodes: {}
        });
      Fx = xV.names, Tx = xV.unicodes, jx = Rx(Le.styleDefault, {
        family: Le.familyDefault
      })
    };

    function Mx(VV, eV) {
      return (qx[VV] || {})[eV]
    }

    function zx(VV, eV) {
      return (Px[VV] || {})[eV]
    }

    function Gx(VV) {
      return Fx[VV] || {
        prefix: null,
        iconName: null
      }
    }

    function Wx() {
      return jx
    }
    Nx = function(VV) {
      jx = Rx(VV.styleDefault, {
        family: Le.familyDefault
      })
    }, fe.push(Nx), Xx();

    function Rx(VV) {
      var eV = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        xV = void 0 === eV ? RV : eV,
        JV = Xe[xV][VV];
      if (xV === gV && !VV) return "fad";
      var YV = ze[xV][VV] || ze[xV][JV],
        UV = VV in Yx.styles ? VV : null;
      return YV || UV || null
    }

    function gx(VV) {
      return VV.sort().filter((function(VV, eV, xV) {
        return xV.indexOf(VV) === eV
      }))
    }
    var Dx = we.concat(Ve);

    function ix(VV) {
      var eV = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        xV = void 0 !== eV && eV,
        JV = null,
        YV = gx(VV.filter((function(VV) {
          return Dx.includes(VV)
        }))),
        UV = gx(VV.filter((function(VV) {
          return !Dx.includes(VV)
        }))),
        yV = nV(YV.filter((function(VV) {
          return JV = VV, !WV.includes(VV)
        })), 1)[0],
        pV = void 0 === yV ? null : yV,
        wV = function(VV) {
          var eV = RV,
            xV = Ex.reduce((function(VV, eV) {
              return VV[eV] = "".concat(Le.cssPrefix, "-").concat(eV), VV
            }), {});
          return dV.forEach((function(JV) {
            (VV.includes(xV[JV]) || VV.some((function(VV) {
              return Bx[JV].includes(VV)
            }))) && (eV = JV)
          })), eV
        }(YV),
        ZV = QV(QV({}, function(VV) {
          var eV = [],
            xV = null;
          return VV.forEach((function(VV) {
            var JV = Ax(Le.cssPrefix, VV);
            JV ? xV = JV : VV && eV.push(VV)
          })), {
            iconName: xV,
            rest: eV
          }
        }(UV)), {}, {
          prefix: Rx(pV, {
            family: wV
          })
        });
      return QV(QV(QV({}, ZV), function(VV) {
        var eV = VV.values,
          xV = VV.family,
          JV = VV.canonical,
          YV = VV.givenPrefix,
          UV = void 0 === YV ? "" : YV,
          yV = VV.styles,
          pV = void 0 === yV ? {} : yV,
          QV = VV.config,
          nV = void 0 === QV ? {} : QV,
          wV = xV === gV,
          ZV = eV.includes("fa-duotone") || eV.includes("fad"),
          vV = "duotone" === nV.familyDefault,
          rV = "fad" === JV.prefix || "fa-duotone" === JV.prefix;
        !wV && (ZV || vV || rV) && (JV.prefix = "fad");
        (eV.includes("fa-brands") || eV.includes("fab")) && (JV.prefix = "fab");
        if (!JV.prefix && Cx.includes(xV)) {
          if (Object.keys(pV).find((function(VV) {
              return ax.includes(VV)
            })) || nV.autoFetchSvg) {
            var kV = OV.get(xV).defaultShortPrefixId;
            JV.prefix = kV, JV.iconName = zx(JV.prefix, JV.iconName) || JV.iconName
          }
        }
        "fa" !== JV.prefix && "fa" !== UV || (JV.prefix = Wx() || "fas");
        return JV
      }({
        values: VV,
        family: wV,
        styles: kx,
        config: Le,
        canonical: ZV,
        givenPrefix: JV
      })), function(VV, eV, xV) {
        var JV = xV.prefix,
          YV = xV.iconName;
        if (VV || !JV || !YV) return {
          prefix: JV,
          iconName: YV
        };
        var UV = "fa" === eV ? Gx(YV) : {},
          yV = zx(JV, YV);
        YV = UV.iconName || yV || YV, "far" !== (JV = UV.prefix || JV) || kx.far || !kx.fas || Le.autoFetchSvg || (JV = "fas");
        return {
          prefix: JV,
          iconName: YV
        }
      }(xV, JV, ZV))
    }
    var Cx = dV.filter((function(VV) {
        return VV !== RV || VV !== gV
      })),
      ax = Object.keys(ne).filter((function(VV) {
        return VV !== RV
      })).map((function(VV) {
        return Object.keys(ne[VV])
      })).flat();
    var ox = function() {
        return function(VV, eV, xV) {
          return eV && YV(VV.prototype, eV), xV && YV(VV, xV), Object.defineProperty(VV, "prototype", {
            writable: !1
          }), VV
        }((function VV() {
          ! function(VV, eV) {
            if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
          }(this, VV), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var VV = this, eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
            var YV = xV.reduce(this._pullDefinitions, {});
            Object.keys(YV).forEach((function(eV) {
              VV.definitions[eV] = QV(QV({}, VV.definitions[eV] || {}), YV[eV]), rx(eV, YV[eV]);
              var xV = We[RV][eV];
              xV && rx(xV, YV[eV]), Xx()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(VV, eV) {
            var xV = eV.prefix && eV.iconName && eV.icon ? {
              0: eV
            } : eV;
            return Object.keys(xV).map((function(eV) {
              var JV = xV[eV],
                YV = JV.prefix,
                UV = JV.iconName,
                yV = JV.icon,
                pV = yV[2];
              VV[YV] || (VV[YV] = {}), pV.length > 0 && pV.forEach((function(eV) {
                "string" === typeof eV && (VV[YV][eV] = yV)
              })), VV[YV][UV] = yV
            })), VV
          }
        }])
      }(),
      cx = [],
      hx = {},
      lx = {},
      Lx = Object.keys(lx);

    function fx(VV, eV) {
      for (var xV = arguments.length, JV = new Array(xV > 2 ? xV - 2 : 0), YV = 2; YV < xV; YV++) JV[YV - 2] = arguments[YV];
      return (hx[VV] || []).forEach((function(VV) {
        eV = VV.apply(null, [eV].concat(JV))
      })), eV
    }

    function mx(VV) {
      for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
      (hx[VV] || []).forEach((function(VV) {
        VV.apply(null, xV)
      }))
    }

    function Kx() {
      var VV = arguments[0],
        eV = Array.prototype.slice.call(arguments, 1);
      return lx[VV] ? lx[VV].apply(null, eV) : void 0
    }

    function Hx(VV) {
      "fa" === VV.prefix && (VV.prefix = "fas");
      var eV = VV.iconName,
        xV = VV.prefix || Wx();
      if (eV) return eV = zx(xV, eV) || eV, nx(ux.definitions, xV, eV) || nx(Yx.styles, xV, eV)
    }
    var ux = new ox,
      sx = {
        i2svg: function() {
          var VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return MV ? (mx("beforeI2svg", VV), Kx("pseudoElements2svg", VV), Kx("i2svg", VV)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var VV, eV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            xV = eV.autoReplaceSvgRoot;
          !1 === Le.autoReplaceSvg && (Le.autoReplaceSvg = !0), Le.observeMutations = !0, VV = function() {
            Ix({
              autoReplaceSvgRoot: xV
            }), mx("watch", eV)
          }, MV && (px ? setTimeout(VV, 0) : Ux.push(VV))
        }
      },
      Sx = {
        noAuto: function() {
          Le.autoReplaceSvg = !1, Le.observeMutations = !1, mx("noAuto")
        },
        config: Le,
        dom: sx,
        parse: {
          icon: function(VV) {
            if (null === VV) return null;
            if ("object" === vV(VV) && VV.prefix && VV.iconName) return {
              prefix: VV.prefix,
              iconName: zx(VV.prefix, VV.iconName) || VV.iconName
            };
            if (Array.isArray(VV) && 2 === VV.length) {
              var eV = 0 === VV[1].indexOf("fa-") ? VV[1].slice(3) : VV[1],
                xV = Rx(VV[0]);
              return {
                prefix: xV,
                iconName: zx(xV, eV) || eV
              }
            }
            if ("string" === typeof VV && (VV.indexOf("".concat(Le.cssPrefix, "-")) > -1 || VV.match(ge))) {
              var JV = ix(VV.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: JV.prefix || Wx(),
                iconName: zx(JV.prefix, JV.iconName) || JV.iconName
              }
            }
            if ("string" === typeof VV) {
              var YV = Wx();
              return {
                prefix: YV,
                iconName: zx(YV, VV) || VV
              }
            }
          }
        },
        library: ux,
        findIconDefinition: Hx,
        toHtml: Qx
      },
      Ix = function() {
        var VV = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          eV = void 0 === VV ? AV : VV;
        (Object.keys(Yx.styles).length > 0 || Le.autoFetchSvg) && MV && Le.autoReplaceSvg && Sx.dom.i2svg({
          node: eV
        })
      };

    function dx(VV, eV) {
      return Object.defineProperty(VV, "abstract", {
        get: eV
      }), Object.defineProperty(VV, "html", {
        get: function() {
          return VV.abstract.map((function(VV) {
            return Qx(VV)
          }))
        }
      }), Object.defineProperty(VV, "node", {
        get: function() {
          if (MV) {
            var eV = AV.createElement("div");
            return eV.innerHTML = VV.html, eV.children
          }
        }
      }), VV
    }

    function Ox(VV) {
      var eV = VV.icons,
        xV = eV.main,
        JV = eV.mask,
        YV = VV.prefix,
        UV = VV.iconName,
        yV = VV.transform,
        pV = VV.symbol,
        nV = VV.maskId,
        wV = VV.extra,
        ZV = VV.watchable,
        vV = void 0 !== ZV && ZV,
        rV = JV.found ? JV : xV,
        kV = rV.width,
        bV = rV.height,
        EV = [Le.replacementClass, UV ? "".concat(Le.cssPrefix, "-").concat(UV) : ""].filter((function(VV) {
          return -1 === wV.classes.indexOf(VV)
        })).filter((function(VV) {
          return "" !== VV || !!VV
        })).concat(wV.classes).join(" "),
        BV = {
          children: [],
          attributes: QV(QV({}, wV.attributes), {}, {
            "data-prefix": YV,
            "data-icon": UV,
            class: EV,
            role: wV.attributes.role || "img",
            viewBox: "0 0 ".concat(kV, " ").concat(bV)
          })
        };
      (function(VV) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(eV) {
          return eV in VV
        }))
      })(wV.attributes) || wV.attributes["aria-hidden"] || (BV.attributes["aria-hidden"] = "true"), vV && (BV.attributes[Ee] = "");
      var jV = QV(QV({}, BV), {}, {
          prefix: YV,
          iconName: UV,
          main: xV,
          mask: JV,
          maskId: nV,
          transform: yV,
          symbol: pV,
          styles: QV({}, wV.styles)
        }),
        qV = JV.found && xV.found ? Kx("generateAbstractMask", jV) || {
          children: [],
          attributes: {}
        } : Kx("generateAbstractIcon", jV) || {
          children: [],
          attributes: {}
        },
        tV = qV.children,
        FV = qV.attributes;
      return jV.children = tV, jV.attributes = FV, pV ? function(VV) {
        var eV = VV.prefix,
          xV = VV.iconName,
          JV = VV.children,
          YV = VV.attributes,
          UV = VV.symbol,
          yV = !0 === UV ? "".concat(eV, "-").concat(Le.cssPrefix, "-").concat(xV) : UV;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: QV(QV({}, YV), {}, {
              id: yV
            }),
            children: JV
          }]
        }]
      }(jV) : function(VV) {
        var eV = VV.children,
          xV = VV.main,
          JV = VV.mask,
          YV = VV.attributes,
          UV = VV.styles,
          yV = VV.transform;
        if (de(yV) && xV.found && !JV.found) {
          var pV = {
            x: xV.width / xV.height / 2,
            y: .5
          };
          YV.style = Ie(QV(QV({}, UV), {}, {
            "transform-origin": "".concat(pV.x + yV.x / 16, "em ").concat(pV.y + yV.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: YV,
          children: eV
        }]
      }(jV)
    }

    function VJ(VV) {
      var eV = VV.content,
        xV = VV.width,
        JV = VV.height,
        YV = VV.transform,
        UV = VV.extra,
        yV = VV.watchable,
        pV = void 0 !== yV && yV,
        nV = QV(QV({}, UV.attributes), {}, {
          class: UV.classes.join(" ")
        });
      pV && (nV[Ee] = "");
      var wV = QV({}, UV.styles);
      de(YV) && (wV.transform = function(VV) {
        var eV = VV.transform,
          xV = VV.width,
          JV = void 0 === xV ? 16 : xV,
          YV = VV.height,
          UV = void 0 === YV ? 16 : YV,
          yV = VV.startCentered,
          pV = void 0 !== yV && yV,
          QV = "";
        return QV += pV && zV ? "translate(".concat(eV.x / me - JV / 2, "em, ").concat(eV.y / me - UV / 2, "em) ") : pV ? "translate(calc(-50% + ".concat(eV.x / me, "em), calc(-50% + ").concat(eV.y / me, "em)) ") : "translate(".concat(eV.x / me, "em, ").concat(eV.y / me, "em) "), QV += "scale(".concat(eV.size / me * (eV.flipX ? -1 : 1), ", ").concat(eV.size / me * (eV.flipY ? -1 : 1), ") "), QV + "rotate(".concat(eV.rotate, "deg) ")
      }({
        transform: YV,
        startCentered: !0,
        width: xV,
        height: JV
      }), wV["-webkit-transform"] = wV.transform);
      var ZV = Ie(wV);
      ZV.length > 0 && (nV.style = ZV);
      var vV = [];
      return vV.push({
        tag: "span",
        attributes: nV,
        children: [eV]
      }), vV
    }
    var eJ = Yx.styles;

    function xJ(VV) {
      var eV = VV[0],
        xV = VV[1],
        JV = nV(VV.slice(4), 1)[0];
      return {
        found: !0,
        width: eV,
        height: xV,
        icon: Array.isArray(JV) ? {
          tag: "g",
          attributes: {
            class: "".concat(Le.cssPrefix, "-").concat(ae.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(Le.cssPrefix, "-").concat(ae.SECONDARY),
              fill: "currentColor",
              d: JV[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(Le.cssPrefix, "-").concat(ae.PRIMARY),
              fill: "currentColor",
              d: JV[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: JV
          }
        }
      }
    }
    var JJ = {
      found: !1,
      width: 512,
      height: 512
    };

    function YJ(VV, eV) {
      var xV = eV;
      return "fa" === eV && null !== Le.styleDefault && (eV = Wx()), new Promise((function(JV, YV) {
        if ("fa" === xV) {
          var UV = Gx(VV) || {};
          VV = UV.iconName || VV, eV = UV.prefix || eV
        }
        if (VV && eV && eJ[eV] && eJ[eV][VV]) return JV(xJ(eJ[eV][VV]));
        ! function(VV, eV) {
          Pe || Le.showMissingIcons || !VV || console.error('Icon with name "'.concat(VV, '" and prefix "').concat(eV, '" is missing.'))
        }(VV, eV), JV(QV(QV({}, JJ), {}, {
          icon: Le.showMissingIcons && VV && Kx("missingIconAbstract") || {}
        }))
      }))
    }
    var UJ = function() {},
      yJ = Le.measurePerformance && XV && XV.mark && XV.measure ? XV : {
        mark: UJ,
        measure: UJ
      },
      pJ = 'FA "7.2.0"',
      QJ = function(VV) {
        yJ.mark("".concat(pJ, " ").concat(VV, " ends")), yJ.measure("".concat(pJ, " ").concat(VV), "".concat(pJ, " ").concat(VV, " begins"), "".concat(pJ, " ").concat(VV, " ends"))
      },
      nJ = function(VV) {
        return yJ.mark("".concat(pJ, " ").concat(VV, " begins")),
          function() {
            return QJ(VV)
          }
      },
      wJ = function() {};

    function ZJ(VV) {
      return "string" === typeof(VV.getAttribute ? VV.getAttribute(Ee) : null)
    }

    function vJ(VV) {
      return AV.createElementNS("http://www.w3.org/2000/svg", VV)
    }

    function rJ(VV) {
      return AV.createElement(VV)
    }

    function kJ(VV) {
      var eV = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        xV = void 0 === eV ? "svg" === VV.tag ? vJ : rJ : eV;
      if ("string" === typeof VV) return AV.createTextNode(VV);
      var JV = xV(VV.tag);
      return Object.keys(VV.attributes || []).forEach((function(eV) {
        JV.setAttribute(eV, VV.attributes[eV])
      })), (VV.children || []).forEach((function(VV) {
        JV.appendChild(kJ(VV, {
          ceFn: xV
        }))
      })), JV
    }
    var bJ = {
      replace: function(VV) {
        var eV = VV[0];
        if (eV.parentNode)
          if (VV[1].forEach((function(VV) {
              eV.parentNode.insertBefore(kJ(VV), eV)
            })), null === eV.getAttribute(Ee) && Le.keepOriginalSource) {
            var xV = AV.createComment(function(VV) {
              var eV = " ".concat(VV.outerHTML, " ");
              return "".concat(eV, "Font Awesome fontawesome.com ")
            }(eV));
            eV.parentNode.replaceChild(xV, eV)
          } else eV.remove()
      },
      nest: function(VV) {
        var eV = VV[0],
          xV = VV[1];
        if (~se(eV).indexOf(Le.replacementClass)) return bJ.replace(VV);
        var JV = new RegExp("".concat(Le.cssPrefix, "-.*"));
        if (delete xV[0].attributes.id, xV[0].attributes.class) {
          var YV = xV[0].attributes.class.split(" ").reduce((function(VV, eV) {
            return eV === Le.replacementClass || eV.match(JV) ? VV.toSvg.push(eV) : VV.toNode.push(eV), VV
          }), {
            toNode: [],
            toSvg: []
          });
          xV[0].attributes.class = YV.toSvg.join(" "), 0 === YV.toNode.length ? eV.removeAttribute("class") : eV.setAttribute("class", YV.toNode.join(" "))
        }
        var UV = xV.map((function(VV) {
          return Qx(VV)
        })).join("\n");
        eV.setAttribute(Ee, ""), eV.innerHTML = UV
      }
    };

    function EJ(VV) {
      VV()
    }

    function BJ(VV, eV) {
      var xV = "function" === typeof eV ? eV : wJ;
      if (0 === VV.length) xV();
      else {
        var JV = EJ;
        "async" === Le.mutateApproach && (JV = PV.requestAnimationFrame || EJ), JV((function() {
          var eV = !0 === Le.autoReplaceSvg ? bJ.replace : bJ[Le.autoReplaceSvg] || bJ.replace,
            JV = nJ("mutate");
          VV.map(eV), JV(), xV()
        }))
      }
    }
    var jJ = !1;

    function qJ() {
      jJ = !0
    }

    function tJ() {
      jJ = !1
    }
    var FJ = null;

    function TJ(VV) {
      if (NV && Le.observeMutations) {
        var eV = VV.treeCallback,
          xV = void 0 === eV ? wJ : eV,
          JV = VV.nodeCallback,
          YV = void 0 === JV ? wJ : JV,
          UV = VV.pseudoElementsCallback,
          yV = void 0 === UV ? wJ : UV,
          pV = VV.observeMutationsRoot,
          QV = void 0 === pV ? AV : pV;
        FJ = new NV((function(VV) {
          if (!jJ) {
            var eV = Wx();
            ue(VV).forEach((function(VV) {
              if ("childList" === VV.type && VV.addedNodes.length > 0 && !ZJ(VV.addedNodes[0]) && (Le.searchPseudoElements && yV(VV.target), xV(VV.target)), "attributes" === VV.type && VV.target.parentNode && Le.searchPseudoElements && yV([VV.target], !0), "attributes" === VV.type && ZJ(VV.target) && ~Ce.indexOf(VV.attributeName))
                if ("class" === VV.attributeName && function(VV) {
                    var eV = VV.getAttribute ? VV.getAttribute(je) : null,
                      xV = VV.getAttribute ? VV.getAttribute(qe) : null;
                    return eV && xV
                  }(VV.target)) {
                  var JV = ix(se(VV.target)),
                    UV = JV.prefix,
                    pV = JV.iconName;
                  VV.target.setAttribute(je, UV || eV), pV && VV.target.setAttribute(qe, pV)
                } else(QV = VV.target) && QV.classList && QV.classList.contains && QV.classList.contains(Le.replacementClass) && YV(VV.target);
              var QV
            }))
          }
        })), MV && FJ.observe(QV, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function PJ(VV) {
      var eV, xV, JV = VV.getAttribute("data-prefix"),
        YV = VV.getAttribute("data-icon"),
        UV = void 0 !== VV.innerText ? VV.innerText.trim() : "",
        yV = ix(se(VV));
      return yV.prefix || (yV.prefix = Wx()), JV && YV && (yV.prefix = JV, yV.iconName = YV), yV.iconName && yV.prefix || (yV.prefix && UV.length > 0 && (yV.iconName = (eV = yV.prefix, xV = VV.innerText, (tx[eV] || {})[xV] || Mx(yV.prefix, Zx(VV.innerText)))), !yV.iconName && Le.autoFetchSvg && VV.firstChild && VV.firstChild.nodeType === Node.TEXT_NODE && (yV.iconName = VV.firstChild.data)), yV
    }

    function AJ(VV) {
      var eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        xV = PJ(VV),
        JV = xV.iconName,
        YV = xV.prefix,
        UV = xV.rest,
        yV = function(VV) {
          return ue(VV.attributes).reduce((function(VV, eV) {
            return "class" !== VV.name && "style" !== VV.name && (VV[eV.name] = eV.value), VV
          }), {})
        }(VV),
        pV = fx("parseNodeAttributes", {}, VV),
        nV = eV.styleParser ? function(VV) {
          var eV = VV.getAttribute("style"),
            xV = [];
          return eV && (xV = eV.split(";").reduce((function(VV, eV) {
            var xV = eV.split(":"),
              JV = xV[0],
              YV = xV.slice(1);
            return JV && YV.length > 0 && (VV[JV] = YV.join(":").trim()), VV
          }), {})), xV
        }(VV) : [];
      return QV({
        iconName: JV,
        prefix: YV,
        transform: Ke,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: UV,
          styles: nV,
          attributes: yV
        }
      }, pV)
    }
    var NJ = Yx.styles;

    function XJ(VV) {
      var eV = "nest" === Le.autoReplaceSvg ? AJ(VV, {
        styleParser: !1
      }) : AJ(VV);
      return ~eV.extra.classes.indexOf(De) ? Kx("generateLayersText", VV, eV) : Kx("generateSvgReplacementMutation", VV, eV)
    }

    function MJ(VV) {
      var eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!MV) return Promise.resolve();
      var xV = AV.documentElement.classList,
        JV = function(VV) {
          return xV.add("".concat(te, "-").concat(VV))
        },
        YV = function(VV) {
          return xV.remove("".concat(te, "-").concat(VV))
        },
        UV = Le.autoFetchSvg ? [].concat(wV(Ve), wV(we)) : WV.concat(Object.keys(NJ));
      UV.includes("fa") || UV.push("fa");
      var yV = [".".concat(De, ":not([").concat(Ee, "])")].concat(UV.map((function(VV) {
        return ".".concat(VV, ":not([").concat(Ee, "])")
      }))).join(", ");
      if (0 === yV.length) return Promise.resolve();
      var pV = [];
      try {
        pV = ue(VV.querySelectorAll(yV))
      } catch (ZV) {}
      if (!(pV.length > 0)) return Promise.resolve();
      JV("pending"), YV("complete");
      var QV = nJ("onTree"),
        nV = pV.reduce((function(VV, eV) {
          try {
            var xV = XJ(eV);
            xV && VV.push(xV)
          } catch (ZV) {
            Pe || "MissingIcon" === ZV.name && console.error(ZV)
          }
          return VV
        }), []);
      return new Promise((function(VV, xV) {
        Promise.all(nV).then((function(xV) {
          BJ(xV, (function() {
            JV("active"), JV("complete"), YV("pending"), "function" === typeof eV && eV(), QV(), VV()
          }))
        })).catch((function(VV) {
          QV(), xV(VV)
        }))
      }))
    }

    function zJ(VV) {
      var eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      XJ(VV).then((function(VV) {
        VV && BJ([VV], eV)
      }))
    }
    var GJ = function(VV) {
        var eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          xV = eV.transform,
          JV = void 0 === xV ? Ke : xV,
          YV = eV.symbol,
          UV = void 0 !== YV && YV,
          yV = eV.mask,
          pV = void 0 === yV ? null : yV,
          nV = eV.maskId,
          wV = void 0 === nV ? null : nV,
          ZV = eV.classes,
          vV = void 0 === ZV ? [] : ZV,
          rV = eV.attributes,
          kV = void 0 === rV ? {} : rV,
          bV = eV.styles,
          EV = void 0 === bV ? {} : bV;
        if (VV) {
          var BV = VV.prefix,
            jV = VV.iconName,
            qV = VV.icon;
          return dx(QV({
            type: "icon"
          }, VV), (function() {
            return mx("beforeDOMElementCreation", {
              iconDefinition: VV,
              params: eV
            }), Ox({
              icons: {
                main: xJ(qV),
                mask: pV ? xJ(pV.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: BV,
              iconName: jV,
              transform: QV(QV({}, Ke), JV),
              symbol: UV,
              maskId: wV,
              extra: {
                attributes: kV,
                styles: EV,
                classes: vV
              }
            })
          }))
        }
      },
      WJ = {
        mixout: function() {
          return {
            icon: (VV = GJ, function(eV) {
              var xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                JV = (eV || {}).icon ? eV : Hx(eV || {}),
                YV = xV.mask;
              return YV && (YV = (YV || {}).icon ? YV : Hx(YV || {})), VV(JV, QV(QV({}, xV), {}, {
                mask: YV
              }))
            })
          };
          var VV
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(VV) {
              return VV.treeCallback = MJ, VV.nodeCallback = zJ, VV
            }
          }
        },
        provides: function(VV) {
          VV.i2svg = function(VV) {
            var eV = VV.node,
              xV = void 0 === eV ? AV : eV,
              JV = VV.callback;
            return MJ(xV, void 0 === JV ? function() {} : JV)
          }, VV.generateSvgReplacementMutation = function(VV, eV) {
            var xV = eV.iconName,
              JV = eV.prefix,
              YV = eV.transform,
              UV = eV.symbol,
              yV = eV.mask,
              pV = eV.maskId,
              QV = eV.extra;
            return new Promise((function(eV, wV) {
              Promise.all([YJ(xV, JV), yV.iconName ? YJ(yV.iconName, yV.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(yV) {
                var wV = nV(yV, 2),
                  ZV = wV[0],
                  vV = wV[1];
                eV([VV, Ox({
                  icons: {
                    main: ZV,
                    mask: vV
                  },
                  prefix: JV,
                  iconName: xV,
                  transform: YV,
                  symbol: UV,
                  maskId: pV,
                  extra: QV,
                  watchable: !0
                })])
              })).catch(wV)
            }))
          }, VV.generateAbstractIcon = function(VV) {
            var eV, xV = VV.children,
              JV = VV.attributes,
              YV = VV.main,
              UV = VV.transform,
              yV = Ie(VV.styles);
            return yV.length > 0 && (JV.style = yV), de(UV) && (eV = Kx("generateAbstractTransformGrouping", {
              main: YV,
              transform: UV,
              containerWidth: YV.width,
              iconWidth: YV.width
            })), xV.push(eV || YV.icon), {
              children: xV,
              attributes: JV
            }
          }
        }
      },
      RJ = {
        mixout: function() {
          return {
            layer: function(VV) {
              var eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                xV = eV.classes,
                JV = void 0 === xV ? [] : xV;
              return dx({
                type: "layer"
              }, (function() {
                mx("beforeDOMElementCreation", {
                  assembler: VV,
                  params: eV
                });
                var xV = [];
                return VV((function(VV) {
                  Array.isArray(VV) ? VV.map((function(VV) {
                    xV = xV.concat(VV.abstract)
                  })) : xV = xV.concat(VV.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(Le.cssPrefix, "-layers")].concat(wV(JV)).join(" ")
                  },
                  children: xV
                }]
              }))
            }
          }
        }
      },
      gJ = {
        mixout: function() {
          return {
            counter: function(VV) {
              var eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                xV = eV.title,
                JV = void 0 === xV ? null : xV,
                YV = eV.classes,
                UV = void 0 === YV ? [] : YV,
                yV = eV.attributes,
                pV = void 0 === yV ? {} : yV,
                nV = eV.styles,
                ZV = void 0 === nV ? {} : nV;
              return dx({
                type: "counter",
                content: VV
              }, (function() {
                return mx("beforeDOMElementCreation", {
                    content: VV,
                    params: eV
                  }),
                  function(VV) {
                    var eV = VV.content,
                      xV = VV.extra,
                      JV = QV(QV({}, xV.attributes), {}, {
                        class: xV.classes.join(" ")
                      }),
                      YV = Ie(xV.styles);
                    YV.length > 0 && (JV.style = YV);
                    var UV = [];
                    return UV.push({
                      tag: "span",
                      attributes: JV,
                      children: [eV]
                    }), UV
                  }({
                    content: VV.toString(),
                    title: JV,
                    extra: {
                      attributes: pV,
                      styles: ZV,
                      classes: ["".concat(Le.cssPrefix, "-layers-counter")].concat(wV(UV))
                    }
                  })
              }))
            }
          }
        }
      },
      DJ = {
        mixout: function() {
          return {
            text: function(VV) {
              var eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                xV = eV.transform,
                JV = void 0 === xV ? Ke : xV,
                YV = eV.classes,
                UV = void 0 === YV ? [] : YV,
                yV = eV.attributes,
                pV = void 0 === yV ? {} : yV,
                nV = eV.styles,
                ZV = void 0 === nV ? {} : nV;
              return dx({
                type: "text",
                content: VV
              }, (function() {
                return mx("beforeDOMElementCreation", {
                  content: VV,
                  params: eV
                }), VJ({
                  content: VV,
                  transform: QV(QV({}, Ke), JV),
                  extra: {
                    attributes: pV,
                    styles: ZV,
                    classes: ["".concat(Le.cssPrefix, "-layers-text")].concat(wV(UV))
                  }
                })
              }))
            }
          }
        },
        provides: function(VV) {
          VV.generateLayersText = function(VV, eV) {
            var xV = eV.transform,
              JV = eV.extra,
              YV = null,
              UV = null;
            if (zV) {
              var yV = parseInt(getComputedStyle(VV).fontSize, 10),
                pV = VV.getBoundingClientRect();
              YV = pV.width / yV, UV = pV.height / yV
            }
            return Promise.resolve([VV, VJ({
              content: VV.innerHTML,
              width: YV,
              height: UV,
              transform: xV,
              extra: JV,
              watchable: !0
            })])
          }
        }
      },
      iJ = new RegExp('"', "ug"),
      CJ = [1105920, 1112319],
      aJ = QV(QV(QV(QV({}, {
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
      oJ = Object.keys(aJ).reduce((function(VV, eV) {
        return VV[eV.toLowerCase()] = aJ[eV], VV
      }), {}),
      cJ = Object.keys(oJ).reduce((function(VV, eV) {
        var xV = oJ[eV];
        return VV[eV] = xV[900] || wV(Object.entries(xV))[0][1], VV
      }), {});

    function hJ(VV, eV) {
      var xV = "".concat("data-fa-pseudo-element-pending").concat(eV.replace(":", "-"));
      return new Promise((function(JV, YV) {
        if (null !== VV.getAttribute(xV)) return JV();
        var UV = ue(VV.children).filter((function(VV) {
            return VV.getAttribute(Be) === eV
          }))[0],
          yV = PV.getComputedStyle(VV, eV),
          pV = yV.getPropertyValue("font-family"),
          nV = pV.match(ie),
          ZV = yV.getPropertyValue("font-weight"),
          vV = yV.getPropertyValue("content");
        if (UV && !nV) return VV.removeChild(UV), JV();
        if (nV && "none" !== vV && "" !== vV) {
          var rV = yV.getPropertyValue("content"),
            kV = function(VV, eV) {
              var xV = VV.replace(/^['"]|['"]$/g, "").toLowerCase(),
                JV = parseInt(eV),
                YV = isNaN(JV) ? "normal" : JV;
              return (oJ[xV] || {})[YV] || cJ[xV]
            }(pV, ZV),
            bV = function(VV) {
              return Zx(wV(VV.replace(iJ, ""))[0] || "")
            }(rV),
            EV = nV[0].startsWith("FontAwesome"),
            BV = function(VV) {
              var eV = VV.getPropertyValue("font-feature-settings").includes("ss01"),
                xV = VV.getPropertyValue("content").replace(iJ, ""),
                JV = xV.codePointAt(0),
                YV = JV >= CJ[0] && JV <= CJ[1],
                UV = 2 === xV.length && xV[0] === xV[1];
              return YV || UV || eV
            }(yV),
            jV = Mx(kV, bV),
            qV = jV;
          if (EV) {
            var tV = function(VV) {
              var eV = Tx[VV],
                xV = Mx("fas", VV);
              return eV || (xV ? {
                prefix: "fas",
                iconName: xV
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(bV);
            tV.iconName && tV.prefix && (jV = tV.iconName, kV = tV.prefix)
          }
          if (!jV || BV || UV && UV.getAttribute(je) === kV && UV.getAttribute(qe) === qV) JV();
          else {
            VV.setAttribute(xV, qV), UV && VV.removeChild(UV);
            var FV = {
                iconName: null,
                prefix: null,
                transform: Ke,
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
              TV = FV.extra;
            TV.attributes[Be] = eV, YJ(jV, kV).then((function(YV) {
              var UV = Ox(QV(QV({}, FV), {}, {
                  icons: {
                    main: YV,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: kV,
                  iconName: qV,
                  extra: TV,
                  watchable: !0
                })),
                yV = AV.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === eV ? VV.insertBefore(yV, VV.firstChild) : VV.appendChild(yV), yV.outerHTML = UV.map((function(VV) {
                return Qx(VV)
              })).join("\n"), VV.removeAttribute(xV), JV()
            })).catch(YV)
          }
        } else JV()
      }))
    }

    function lJ(VV) {
      return Promise.all([hJ(VV, "::before"), hJ(VV, "::after")])
    }

    function LJ(VV) {
      return VV.parentNode !== document.head && !~Fe.indexOf(VV.tagName.toUpperCase()) && !VV.getAttribute(Be) && (!VV.parentNode || "svg" !== VV.parentNode.tagName)
    }
    var fJ = function(VV) {
        return !!VV && Te.some((function(eV) {
          return VV.includes(eV)
        }))
      },
      mJ = function(VV) {
        if (!VV) return [];
        var eV = new Set,
          xV = VV.split(/,(?![^()]*\))/).map((function(VV) {
            return VV.trim()
          }));
        xV = xV.flatMap((function(VV) {
          return VV.includes("(") ? VV : VV.split(",").map((function(VV) {
            return VV.trim()
          }))
        }));
        var JV, YV = UV(xV);
        try {
          for (YV.s(); !(JV = YV.n()).done;) {
            var yV = JV.value;
            if (fJ(yV)) {
              var pV = Te.reduce((function(VV, eV) {
                return VV.replace(eV, "")
              }), yV);
              "" !== pV && "*" !== pV && eV.add(pV)
            }
          }
        } catch (QV) {
          YV.e(QV)
        } finally {
          YV.f()
        }
        return eV
      };

    function KJ(VV) {
      if (MV) {
        var eV;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) eV = VV;
        else if (Le.searchPseudoElementsFullScan) eV = VV.querySelectorAll("*");
        else {
          var xV, JV = new Set,
            YV = UV(document.styleSheets);
          try {
            for (YV.s(); !(xV = YV.n()).done;) {
              var yV = xV.value;
              try {
                var pV, QV = UV(yV.cssRules);
                try {
                  for (QV.s(); !(pV = QV.n()).done;) {
                    var nV, wV = pV.value,
                      ZV = UV(mJ(wV.selectorText));
                    try {
                      for (ZV.s(); !(nV = ZV.n()).done;) {
                        var vV = nV.value;
                        JV.add(vV)
                      }
                    } catch (kV) {
                      ZV.e(kV)
                    } finally {
                      ZV.f()
                    }
                  }
                } catch (kV) {
                  QV.e(kV)
                } finally {
                  QV.f()
                }
              } catch (bV) {
                Le.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(yV.href, " (").concat(bV.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (kV) {
            YV.e(kV)
          } finally {
            YV.f()
          }
          if (!JV.size) return;
          var rV = Array.from(JV).join(", ");
          try {
            eV = VV.querySelectorAll(rV)
          } catch (EV) {}
        }
        return new Promise((function(VV, xV) {
          var JV = ue(eV).filter(LJ).map(lJ),
            YV = nJ("searchPseudoElements");
          qJ(), Promise.all(JV).then((function() {
            YV(), tJ(), VV()
          })).catch((function() {
            YV(), tJ(), xV()
          }))
        }))
      }
    }
    var HJ = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(VV) {
              return VV.pseudoElementsCallback = KJ, VV
            }
          }
        },
        provides: function(VV) {
          VV.pseudoElements2svg = function(VV) {
            var eV = VV.node,
              xV = void 0 === eV ? AV : eV;
            Le.searchPseudoElements && KJ(xV)
          }
        }
      },
      uJ = !1,
      sJ = function(VV) {
        return VV.toLowerCase().split(" ").reduce((function(VV, eV) {
          var xV = eV.toLowerCase().split("-"),
            JV = xV[0],
            YV = xV.slice(1).join("-");
          if (JV && "h" === YV) return VV.flipX = !0, VV;
          if (JV && "v" === YV) return VV.flipY = !0, VV;
          if (YV = parseFloat(YV), isNaN(YV)) return VV;
          switch (JV) {
            case "grow":
              VV.size = VV.size + YV;
              break;
            case "shrink":
              VV.size = VV.size - YV;
              break;
            case "left":
              VV.x = VV.x - YV;
              break;
            case "right":
              VV.x = VV.x + YV;
              break;
            case "up":
              VV.y = VV.y - YV;
              break;
            case "down":
              VV.y = VV.y + YV;
              break;
            case "rotate":
              VV.rotate = VV.rotate + YV
          }
          return VV
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      SJ = {
        mixout: function() {
          return {
            parse: {
              transform: function(VV) {
                return sJ(VV)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(VV, eV) {
              var xV = eV.getAttribute("data-fa-transform");
              return xV && (VV.transform = sJ(xV)), VV
            }
          }
        },
        provides: function(VV) {
          VV.generateAbstractTransformGrouping = function(VV) {
            var eV = VV.main,
              xV = VV.transform,
              JV = VV.containerWidth,
              YV = VV.iconWidth,
              UV = {
                transform: "translate(".concat(JV / 2, " 256)")
              },
              yV = "translate(".concat(32 * xV.x, ", ").concat(32 * xV.y, ") "),
              pV = "scale(".concat(xV.size / 16 * (xV.flipX ? -1 : 1), ", ").concat(xV.size / 16 * (xV.flipY ? -1 : 1), ") "),
              nV = "rotate(".concat(xV.rotate, " 0 0)"),
              wV = {
                outer: UV,
                inner: {
                  transform: "".concat(yV, " ").concat(pV, " ").concat(nV)
                },
                path: {
                  transform: "translate(".concat(YV / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: QV({}, wV.outer),
              children: [{
                tag: "g",
                attributes: QV({}, wV.inner),
                children: [{
                  tag: eV.icon.tag,
                  children: eV.icon.children,
                  attributes: QV(QV({}, eV.icon.attributes), wV.path)
                }]
              }]
            }
          }
        }
      },
      IJ = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function dJ(VV) {
      var eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return VV.attributes && (VV.attributes.fill || eV) && (VV.attributes.fill = "black"), VV
    }
    var OJ = {
        hooks: function() {
          return {
            parseNodeAttributes: function(VV, eV) {
              var xV = eV.getAttribute("data-fa-mask"),
                JV = xV ? ix(xV.split(" ").map((function(VV) {
                  return VV.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return JV.prefix || (JV.prefix = Wx()), VV.mask = JV, VV.maskId = eV.getAttribute("data-fa-mask-id"), VV
            }
          }
        },
        provides: function(VV) {
          VV.generateAbstractMask = function(VV) {
            var eV, xV = VV.children,
              JV = VV.attributes,
              YV = VV.main,
              UV = VV.mask,
              yV = VV.maskId,
              pV = VV.transform,
              nV = YV.width,
              wV = YV.icon,
              ZV = UV.width,
              vV = UV.icon,
              rV = function(VV) {
                var eV = VV.transform,
                  xV = VV.containerWidth,
                  JV = VV.iconWidth,
                  YV = {
                    transform: "translate(".concat(xV / 2, " 256)")
                  },
                  UV = "translate(".concat(32 * eV.x, ", ").concat(32 * eV.y, ") "),
                  yV = "scale(".concat(eV.size / 16 * (eV.flipX ? -1 : 1), ", ").concat(eV.size / 16 * (eV.flipY ? -1 : 1), ") "),
                  pV = "rotate(".concat(eV.rotate, " 0 0)");
                return {
                  outer: YV,
                  inner: {
                    transform: "".concat(UV, " ").concat(yV, " ").concat(pV)
                  },
                  path: {
                    transform: "translate(".concat(JV / 2 * -1, " -256)")
                  }
                }
              }({
                transform: pV,
                containerWidth: ZV,
                iconWidth: nV
              }),
              kV = {
                tag: "rect",
                attributes: QV(QV({}, IJ), {}, {
                  fill: "white"
                })
              },
              bV = wV.children ? {
                children: wV.children.map(dJ)
              } : {},
              EV = {
                tag: "g",
                attributes: QV({}, rV.inner),
                children: [dJ(QV({
                  tag: wV.tag,
                  attributes: QV(QV({}, wV.attributes), rV.path)
                }, bV))]
              },
              BV = {
                tag: "g",
                attributes: QV({}, rV.outer),
                children: [EV]
              },
              jV = "mask-".concat(yV || He()),
              qV = "clip-".concat(yV || He()),
              tV = {
                tag: "mask",
                attributes: QV(QV({}, IJ), {}, {
                  id: jV,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [kV, BV]
              },
              FV = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: qV
                  },
                  children: (eV = vV, "g" === eV.tag ? eV.children : [eV])
                }, tV]
              };
            return xV.push(FV, {
              tag: "rect",
              attributes: QV({
                fill: "currentColor",
                "clip-path": "url(#".concat(qV, ")"),
                mask: "url(#".concat(jV, ")")
              }, IJ)
            }), {
              children: xV,
              attributes: JV
            }
          }
        }
      },
      VY = {
        provides: function(VV) {
          var eV = !1;
          PV.matchMedia && (eV = PV.matchMedia("(prefers-reduced-motion: reduce)").matches), VV.missingIconAbstract = function() {
            var VV = [],
              xV = {
                fill: "currentColor"
              },
              JV = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            VV.push({
              tag: "path",
              attributes: QV(QV({}, xV), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var YV = QV(QV({}, JV), {}, {
                attributeName: "opacity"
              }),
              UV = {
                tag: "circle",
                attributes: QV(QV({}, xV), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return eV || UV.children.push({
              tag: "animate",
              attributes: QV(QV({}, JV), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: QV(QV({}, YV), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), VV.push(UV), VV.push({
              tag: "path",
              attributes: QV(QV({}, xV), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: eV ? [] : [{
                tag: "animate",
                attributes: QV(QV({}, YV), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), eV || VV.push({
              tag: "path",
              attributes: QV(QV({}, xV), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: QV(QV({}, YV), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: VV
            }
          }
        }
      };
    ! function(VV, eV) {
      var xV = eV.mixoutsTo;
      cx = VV, hx = {}, Object.keys(lx).forEach((function(VV) {
        -1 === Lx.indexOf(VV) && delete lx[VV]
      })), cx.forEach((function(VV) {
        var eV = VV.mixout ? VV.mixout() : {};
        if (Object.keys(eV).forEach((function(VV) {
            "function" === typeof eV[VV] && (xV[VV] = eV[VV]), "object" === vV(eV[VV]) && Object.keys(eV[VV]).forEach((function(JV) {
              xV[VV] || (xV[VV] = {}), xV[VV][JV] = eV[VV][JV]
            }))
          })), VV.hooks) {
          var JV = VV.hooks();
          Object.keys(JV).forEach((function(VV) {
            hx[VV] || (hx[VV] = []), hx[VV].push(JV[VV])
          }))
        }
        VV.provides && VV.provides(lx)
      }))
    }([xx, WJ, RJ, gJ, DJ, HJ, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              qJ(), uJ = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            TJ(fx("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            FJ && FJ.disconnect()
          },
          watch: function(VV) {
            var eV = VV.observeMutationsRoot;
            uJ ? tJ() : TJ(fx("mutationObserverCallbacks", {
              observeMutationsRoot: eV
            }))
          }
        }
      }
    }, SJ, OJ, VY, {
      hooks: function() {
        return {
          parseNodeAttributes: function(VV, eV) {
            var xV = eV.getAttribute("data-fa-symbol"),
              JV = null !== xV && ("" === xV || xV);
            return VV.symbol = JV, VV
          }
        }
      }
    }], {
      mixoutsTo: Sx
    });
    var eY = Sx.noAuto,
      xY = Sx.config,
      JY = Sx.library,
      YY = Sx.dom,
      UY = Sx.parse,
      yY = Sx.findIconDefinition,
      pY = Sx.toHtml,
      QY = Sx.icon,
      nY = Sx.layer,
      wY = Sx.text,
      ZY = Sx.counter
  },
  7324: VV => {
    VV.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);