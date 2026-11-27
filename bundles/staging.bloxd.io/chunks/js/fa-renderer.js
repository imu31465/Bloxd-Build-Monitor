/*! For license information please see 4udp6d.fa-renderer.ba4a3159.chunk.js.LICENSE.txt */
export const id = 39;
export const ids = [39];
export const modules = {
  7912: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      FontAwesomeIcon: () => BR
    });
    var yR = GR(7903),
      tR = GR(6008),
      uR = GR.n(tR),
      ZR = GR(66);

    function qR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function iR(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR, JR) {
          if ("object" != typeof RR || !RR) return RR;
          var GR = RR[Symbol.toPrimitive];
          if (void 0 !== GR) {
            var yR = GR.call(RR, JR || "default");
            if ("object" != typeof yR) return yR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === JR ? String : Number)(RR)
        }(RR, "string");
        return "symbol" == typeof JR ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function fR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function VR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? fR(Object(GR), !0).forEach((function(JR) {
          iR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : fR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function KR(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        var GR = null == RR ? null : "undefined" != typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
        if (null != GR) {
          var yR, tR, uR, ZR, qR = [],
            iR = !0,
            fR = !1;
          try {
            if (uR = (GR = GR.call(RR)).next, 0 === JR) {
              if (Object(GR) !== GR) return;
              iR = !1
            } else
              for (; !(iR = (yR = uR.call(GR)).done) && (qR.push(yR.value), qR.length !== JR); iR = !0);
          } catch (RR) {
            fR = !0, tR = RR
          } finally {
            try {
              if (!iR && null != GR.return && (ZR = GR.return(), Object(ZR) !== ZR)) return
            } finally {
              if (fR) throw tR
            }
          }
          return qR
        }
      }(RR, JR) || eR(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wR(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return qR(RR)
      }(RR) || function(RR) {
        if ("undefined" != typeof Symbol && null != RR[Symbol.iterator] || null != RR["@@iterator"]) return Array.from(RR)
      }(RR) || eR(RR) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rR(RR) {
      return rR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, rR(RR)
    }

    function eR(RR, JR) {
      if (RR) {
        if ("string" == typeof RR) return qR(RR, JR);
        var GR = {}.toString.call(RR).slice(8, -1);
        return "Object" === GR && RR.constructor && (GR = RR.constructor.name), "Map" === GR || "Set" === GR ? Array.from(RR) : "Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR) ? qR(RR, JR) : void 0
      }
    }
    var aR;
    try {
      var LR = GR(7916);
      aR = LR.version
    } catch (pR) {
      aR = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function nR(RR) {
      var JR = RR.beat,
        GR = RR.fade,
        yR = RR.beatFade,
        tR = RR.bounce,
        uR = RR.shake,
        ZR = RR.flash,
        qR = RR.spin,
        fR = RR.spinPulse,
        VR = RR.spinReverse,
        wR = RR.pulse,
        rR = RR.fixedWidth,
        eR = RR.inverse,
        LR = RR.border,
        nR = RR.listItem,
        UR = RR.flip,
        WR = RR.size,
        AR = RR.rotation,
        CR = RR.pull,
        XR = RR.swapOpacity,
        MR = RR.rotateBy,
        BR = RR.widthAuto,
        lR = function(RR, JR) {
          for (var GR = KR(RR.split("-"), 2), yR = GR[0], tR = GR[1], uR = KR(JR.split("-"), 2), ZR = uR[0], qR = uR[1], iR = yR.split("."), fR = ZR.split("."), VR = 0; VR < Math.max(iR.length, fR.length); VR++) {
            var wR = iR[VR] || "0",
              rR = fR[VR] || "0",
              eR = parseInt(wR, 10),
              aR = parseInt(rR, 10);
            if (eR !== aR) return eR > aR
          }
          for (var LR = 0; LR < Math.max(iR.length, fR.length); LR++) {
            var nR = iR[LR] || "0",
              UR = fR[LR] || "0";
            if (nR !== UR && nR.length !== UR.length) return nR.length < UR.length
          }
          return !(tR && !qR)
        }(aR, "7.0.0"),
        pR = iR(iR(iR(iR(iR(iR({
          "fa-beat": JR,
          "fa-fade": GR,
          "fa-beat-fade": yR,
          "fa-bounce": tR,
          "fa-shake": uR,
          "fa-flash": ZR,
          "fa-spin": qR,
          "fa-spin-reverse": VR,
          "fa-spin-pulse": fR,
          "fa-pulse": wR,
          "fa-fw": rR,
          "fa-inverse": eR,
          "fa-border": LR,
          "fa-li": nR,
          "fa-flip": !0 === UR,
          "fa-flip-horizontal": "horizontal" === UR || "both" === UR,
          "fa-flip-vertical": "vertical" === UR || "both" === UR
        }, "fa-".concat(WR), "undefined" !== typeof WR && null !== WR), "fa-rotate-".concat(AR), "undefined" !== typeof AR && null !== AR && 0 !== AR), "fa-pull-".concat(CR), "undefined" !== typeof CR && null !== CR), "fa-swap-opacity", XR), "fa-rotate-by", lR && MR), "fa-width-auto", lR && BR);
      return Object.keys(pR).map((function(RR) {
        return pR[RR] ? RR : null
      })).filter((function(RR) {
        return RR
      }))
    }

    function UR(RR) {
      return JR = RR, (JR -= 0) === JR ? RR : (RR = RR.replace(/[\-_\s]+(.)?/g, (function(RR, JR) {
        return JR ? JR.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + RR.substr(1);
      var JR
    }
    var WR = ["style"];
    var AR = !1;
    try {
      AR = !0
    } catch (pR) {}

    function CR(RR) {
      return RR && "object" === rR(RR) && RR.prefix && RR.iconName && RR.icon ? RR : yR.parse.icon ? yR.parse.icon(RR) : null === RR ? null : RR && "object" === rR(RR) && RR.prefix && RR.iconName ? RR : Array.isArray(RR) && 2 === RR.length ? {
        prefix: RR[0],
        iconName: RR[1]
      } : "string" === typeof RR ? {
        prefix: "fas",
        iconName: RR
      } : void 0
    }

    function XR(RR, JR) {
      return Array.isArray(JR) && JR.length > 0 || !Array.isArray(JR) && JR ? iR({}, RR, JR) : {}
    }
    var MR = {
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
      BR = ZR.forwardRef((function(RR, JR) {
        var GR = VR(VR({}, MR), RR),
          tR = GR.icon,
          uR = GR.mask,
          ZR = GR.symbol,
          qR = GR.className,
          iR = GR.title,
          fR = GR.titleId,
          KR = GR.maskId,
          rR = CR(tR),
          eR = XR("classes", [].concat(wR(nR(GR)), wR((qR || "").split(" ")))),
          aR = XR("transform", "string" === typeof GR.transform ? yR.parse.transform(GR.transform) : GR.transform),
          LR = XR("mask", CR(uR)),
          UR = (0, yR.icon)(rR, VR(VR(VR(VR({}, eR), aR), LR), {}, {
            symbol: ZR,
            title: iR,
            titleId: fR,
            maskId: KR
          }));
        if (!UR) return function() {
          var RR;
          !AR && console && "function" === typeof console.error && (RR = console).error.apply(RR, arguments)
        }("Could not find icon", rR), null;
        var WR = UR.abstract,
          BR = {
            ref: JR
          };
        return Object.keys(GR).forEach((function(RR) {
          MR.hasOwnProperty(RR) || (BR[RR] = GR[RR])
        })), lR(WR[0], BR)
      }));
    BR.displayName = "FontAwesomeIcon", BR.propTypes = {
      beat: uR().bool,
      border: uR().bool,
      beatFade: uR().bool,
      bounce: uR().bool,
      className: uR().string,
      fade: uR().bool,
      flash: uR().bool,
      mask: uR().oneOfType([uR().object, uR().array, uR().string]),
      maskId: uR().string,
      fixedWidth: uR().bool,
      inverse: uR().bool,
      flip: uR().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: uR().oneOfType([uR().object, uR().array, uR().string]),
      listItem: uR().bool,
      pull: uR().oneOf(["right", "left"]),
      pulse: uR().bool,
      rotation: uR().oneOf([0, 90, 180, 270]),
      rotateBy: uR().bool,
      shake: uR().bool,
      size: uR().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: uR().bool,
      spinPulse: uR().bool,
      spinReverse: uR().bool,
      symbol: uR().oneOfType([uR().bool, uR().string]),
      title: uR().string,
      titleId: uR().string,
      transform: uR().oneOfType([uR().string, uR().object]),
      swapOpacity: uR().bool,
      widthAuto: uR().bool
    };
    var lR = function RR(JR, GR) {
      var yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof GR) return GR;
      var tR = (GR.children || []).map((function(GR) {
          return RR(JR, GR)
        })),
        uR = Object.keys(GR.attributes || {}).reduce((function(RR, JR) {
          var yR = GR.attributes[JR];
          switch (JR) {
            case "class":
              RR.attrs.className = yR, delete GR.attributes.class;
              break;
            case "style":
              RR.attrs.style = yR.split(";").map((function(RR) {
                return RR.trim()
              })).filter((function(RR) {
                return RR
              })).reduce((function(RR, JR) {
                var GR, yR = JR.indexOf(":"),
                  tR = UR(JR.slice(0, yR)),
                  uR = JR.slice(yR + 1).trim();
                return tR.startsWith("webkit") ? RR[(GR = tR, GR.charAt(0).toUpperCase() + GR.slice(1))] = uR : RR[tR] = uR, RR
              }), {});
              break;
            default:
              0 === JR.indexOf("aria-") || 0 === JR.indexOf("data-") ? RR.attrs[JR.toLowerCase()] = yR : RR.attrs[UR(JR)] = yR
          }
          return RR
        }), {
          attrs: {}
        }),
        ZR = yR.style,
        qR = void 0 === ZR ? {} : ZR,
        iR = function(RR, JR) {
          if (null == RR) return {};
          var GR, yR, tR = function(RR, JR) {
            if (null == RR) return {};
            var GR = {};
            for (var yR in RR)
              if ({}.hasOwnProperty.call(RR, yR)) {
                if (-1 !== JR.indexOf(yR)) continue;
                GR[yR] = RR[yR]
              } return GR
          }(RR, JR);
          if (Object.getOwnPropertySymbols) {
            var uR = Object.getOwnPropertySymbols(RR);
            for (yR = 0; yR < uR.length; yR++) GR = uR[yR], -1 === JR.indexOf(GR) && {}.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
          }
          return tR
        }(yR, WR);
      return uR.attrs.style = VR(VR({}, uR.attrs.style), qR), JR.apply(void 0, [GR.tag, VR(VR({}, uR.attrs), iR)].concat(wR(tR)))
    }.bind(null, ZR.createElement)
  },
  6015: (RR, JR, GR) => {
    var yR = GR(6021);

    function tR() {}

    function uR() {}
    uR.resetWarningCache = tR, RR.exports = function() {
      function RR(RR, JR, GR, tR, uR, ZR) {
        if (ZR !== yR) {
          var qR = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw qR.name = "Invariant Violation", qR
        }
      }

      function JR() {
        return RR
      }
      RR.isRequired = RR;
      var GR = {
        array: RR,
        bigint: RR,
        bool: RR,
        func: RR,
        number: RR,
        object: RR,
        string: RR,
        symbol: RR,
        any: RR,
        arrayOf: JR,
        element: RR,
        elementType: RR,
        instanceOf: JR,
        node: RR,
        objectOf: JR,
        oneOf: JR,
        oneOfType: JR,
        shape: JR,
        exact: JR,
        checkPropTypes: uR,
        resetWarningCache: tR
      };
      return GR.PropTypes = GR, GR
    }
  },
  6008: (RR, JR, GR) => {
    RR.exports = GR(6015)()
  },
  6021: RR => {
    RR.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7903: (RR, JR, GR) => {
    function yR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function tR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, KR(yR.key), yR)
      }
    }

    function uR(RR, JR) {
      var GR = "undefined" != typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
      if (!GR) {
        if (Array.isArray(RR) || (GR = rR(RR)) || JR && RR && "number" == typeof RR.length) {
          GR && (RR = GR);
          var yR = 0,
            tR = function() {};
          return {
            s: tR,
            n: function() {
              return yR >= RR.length ? {
                done: !0
              } : {
                done: !1,
                value: RR[yR++]
              }
            },
            e: function(RR) {
              throw RR
            },
            f: tR
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var uR, ZR = !0,
        qR = !1;
      return {
        s: function() {
          GR = GR.call(RR)
        },
        n: function() {
          var RR = GR.next();
          return ZR = RR.done, RR
        },
        e: function(RR) {
          qR = !0, uR = RR
        },
        f: function() {
          try {
            ZR || null == GR.return || GR.return()
          } finally {
            if (qR) throw uR
          }
        }
      }
    }

    function ZR(RR, JR, GR) {
      return (JR = KR(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function qR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function iR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? qR(Object(GR), !0).forEach((function(JR) {
          ZR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : qR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function fR(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        var GR = null == RR ? null : "undefined" != typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
        if (null != GR) {
          var yR, tR, uR, ZR, qR = [],
            iR = !0,
            fR = !1;
          try {
            if (uR = (GR = GR.call(RR)).next, 0 === JR) {
              if (Object(GR) !== GR) return;
              iR = !1
            } else
              for (; !(iR = (yR = uR.call(GR)).done) && (qR.push(yR.value), qR.length !== JR); iR = !0);
          } catch (RR) {
            fR = !0, tR = RR
          } finally {
            try {
              if (!iR && null != GR.return && (ZR = GR.return(), Object(ZR) !== ZR)) return
            } finally {
              if (fR) throw tR
            }
          }
          return qR
        }
      }(RR, JR) || rR(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function VR(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return yR(RR)
      }(RR) || function(RR) {
        if ("undefined" != typeof Symbol && null != RR[Symbol.iterator] || null != RR["@@iterator"]) return Array.from(RR)
      }(RR) || rR(RR) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function KR(RR) {
      var JR = function(RR, JR) {
        if ("object" != typeof RR || !RR) return RR;
        var GR = RR[Symbol.toPrimitive];
        if (void 0 !== GR) {
          var yR = GR.call(RR, JR || "default");
          if ("object" != typeof yR) return yR;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === JR ? String : Number)(RR)
      }(RR, "string");
      return "symbol" == typeof JR ? JR : JR + ""
    }

    function wR(RR) {
      return wR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, wR(RR)
    }

    function rR(RR, JR) {
      if (RR) {
        if ("string" == typeof RR) return yR(RR, JR);
        var GR = {}.toString.call(RR).slice(8, -1);
        return "Object" === GR && RR.constructor && (GR = RR.constructor.name), "Map" === GR || "Set" === GR ? Array.from(RR) : "Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR) ? yR(RR, JR) : void 0
      }
    }
    GR.r(JR), GR.d(JR, {
      api: () => FG,
      config: () => Gt,
      counter: () => Kt,
      dom: () => tt,
      findIconDefinition: () => Zt,
      icon: () => it,
      layer: () => ft,
      library: () => yt,
      noAuto: () => Jt,
      parse: () => ut,
      text: () => Vt,
      toHtml: () => qt
    });
    var eR = function() {},
      aR = {},
      LR = {},
      nR = null,
      UR = {
        mark: eR,
        measure: eR
      };
    try {
      "undefined" !== typeof window && (aR = window), "undefined" !== typeof document && (LR = document), "undefined" !== typeof MutationObserver && (nR = MutationObserver), "undefined" !== typeof performance && (UR = performance)
    } catch (jR) {}
    var WR, AR, CR = (aR.navigator || {}).userAgent,
      XR = void 0 === CR ? "" : CR,
      MR = aR,
      BR = LR,
      lR = nR,
      pR = UR,
      gR = (MR.document, !!BR.documentElement && !!BR.head && "function" === typeof BR.addEventListener && "function" === typeof BR.createElement),
      bR = ~XR.indexOf("MSIE") || ~XR.indexOf("Trident/"),
      vR = {
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
      OR = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      xR = "classic",
      NR = "duotone",
      DR = "sharp",
      HR = "sharp-duotone",
      oR = "chisel",
      cR = "etch",
      PR = "graphite",
      IR = "jelly",
      mR = "jelly-duo",
      zR = "jelly-fill",
      SR = "notdog",
      jR = "notdog-duo",
      dR = "slab",
      ER = "slab-press",
      YR = "thumbprint",
      kR = "utility",
      QR = "utility-duo",
      FR = "utility-fill",
      TR = "whiteboard",
      sR = [xR, NR, DR, HR, oR, cR, PR, IR, mR, zR, SR, jR, dR, ER, YR, kR, QR, FR, TR],
      hR = (ZR(ZR(ZR(ZR(ZR(ZR(ZR(ZR(ZR(ZR(WR = {}, xR, "Classic"), NR, "Duotone"), DR, "Sharp"), HR, "Sharp Duotone"), oR, "Chisel"), cR, "Etch"), PR, "Graphite"), IR, "Jelly"), mR, "Jelly Duo"), zR, "Jelly Fill"), ZR(ZR(ZR(ZR(ZR(ZR(ZR(ZR(ZR(WR, SR, "Notdog"), jR, "Notdog Duo"), dR, "Slab"), ER, "Slab Press"), YR, "Thumbprint"), kR, "Utility"), QR, "Utility Duo"), FR, "Utility Fill"), TR, "Whiteboard"), new Map([
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
      RJ = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      JJ = {
        fak: "kit",
        "fa-kit": "kit"
      },
      GJ = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      yJ = (ZR(ZR({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      tJ = {
        "kit-duotone": "fakd"
      },
      uJ = "duotone-group",
      ZJ = "swap-opacity",
      qJ = "primary",
      iJ = "secondary",
      fJ = (ZR(ZR(ZR(ZR(ZR(ZR(ZR(ZR(ZR(ZR(AR = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), ZR(ZR(ZR(ZR(ZR(ZR(ZR(ZR(ZR(AR, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), ZR(ZR({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      VJ = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      KJ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      wJ = KJ.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      rJ = [].concat(VR(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", uJ, ZJ, qJ, iJ]).concat(KJ.map((function(RR) {
        return "".concat(RR, "x")
      }))).concat(wJ.map((function(RR) {
        return "w-".concat(RR)
      }))),
      eJ = "___FONT_AWESOME___",
      aJ = "svg-inline--fa",
      LJ = "data-fa-i2svg",
      nJ = "data-fa-pseudo-element",
      UJ = "data-prefix",
      WJ = "data-icon",
      AJ = "fontawesome-i2svg",
      CJ = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      XJ = ["::before", "::after", ":before", ":after"],
      MJ = function() {
        try {
          return !0
        } catch (RR) {
          return !1
        }
      }();

    function BJ(RR) {
      return new Proxy(RR, {
        get: function(RR, JR) {
          return JR in RR ? RR[JR] : RR[xR]
        }
      })
    }
    var lJ = iR({}, vR);
    lJ[xR] = iR(iR(iR(iR({}, {
      "fa-duotone": "duotone"
    }), vR[xR]), JJ), GJ);
    var pJ = BJ(lJ),
      gJ = iR({}, {
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
    gJ[xR] = iR(iR(iR(iR({}, {
      duotone: "fad"
    }), gJ[xR]), yJ), tJ);
    var bJ = BJ(gJ),
      vJ = iR({}, fJ);
    vJ[xR] = iR(iR({}, vJ[xR]), {
      fak: "fa-kit"
    });
    var OJ = BJ(vJ),
      xJ = iR({}, {
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
    xJ[xR] = iR(iR({}, xJ[xR]), {
      "fa-kit": "fak"
    });
    BJ(xJ);
    var NJ = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      DJ = "fa-layers-text",
      HJ = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      oJ = (BJ(iR({}, {
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
      cJ = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      PJ = [].concat(VR(["kit"]), VR(rJ)),
      IJ = MR.FontAwesomeConfig || {};
    if (BR && "function" === typeof BR.querySelector) {
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
      ].forEach((function(RR) {
        var JR = fR(RR, 2),
          GR = JR[0],
          yR = JR[1],
          tR = function(RR) {
            return "" === RR || "false" !== RR && ("true" === RR || RR)
          }(function(RR) {
            var JR = BR.querySelector("script[" + RR + "]");
            if (JR) return JR.getAttribute(RR)
          }(GR));
        void 0 !== tR && null !== tR && (IJ[yR] = tR)
      }))
    }
    var mJ = {
      styleDefault: "solid",
      familyDefault: xR,
      cssPrefix: "fa",
      replacementClass: aJ,
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
    IJ.familyPrefix && (IJ.cssPrefix = IJ.familyPrefix);
    var zJ = iR(iR({}, mJ), IJ);
    zJ.autoReplaceSvg || (zJ.observeMutations = !1);
    var SJ = {};
    Object.keys(mJ).forEach((function(RR) {
      Object.defineProperty(SJ, RR, {
        enumerable: !0,
        set: function(JR) {
          zJ[RR] = JR, jJ.forEach((function(RR) {
            return RR(SJ)
          }))
        },
        get: function() {
          return zJ[RR]
        }
      })
    })), Object.defineProperty(SJ, "familyPrefix", {
      enumerable: !0,
      set: function(RR) {
        zJ.cssPrefix = RR, jJ.forEach((function(RR) {
          return RR(SJ)
        }))
      },
      get: function() {
        return zJ.cssPrefix
      }
    }), MR.FontAwesomeConfig = SJ;
    var jJ = [];
    var dJ = 16,
      EJ = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function YJ() {
      for (var RR = 12, JR = ""; RR-- > 0;) JR += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return JR
    }

    function kJ(RR) {
      for (var JR = [], GR = (RR || []).length >>> 0; GR--;) JR[GR] = RR[GR];
      return JR
    }

    function QJ(RR) {
      return RR.classList ? kJ(RR.classList) : (RR.getAttribute("class") || "").split(" ").filter((function(RR) {
        return RR
      }))
    }

    function FJ(RR) {
      return "".concat(RR).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function TJ(RR) {
      return Object.keys(RR || {}).reduce((function(JR, GR) {
        return JR + "".concat(GR, ": ").concat(RR[GR].trim(), ";")
      }), "")
    }

    function sJ(RR) {
      return RR.size !== EJ.size || RR.x !== EJ.x || RR.y !== EJ.y || RR.rotate !== EJ.rotate || RR.flipX || RR.flipY
    }

    function hJ() {
      var RR = "fa",
        JR = aJ,
        GR = SJ.cssPrefix,
        yR = SJ.replacementClass,
        tR = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (GR !== RR || yR !== JR) {
        var uR = new RegExp("\\.".concat(RR, "\\-"), "g"),
          ZR = new RegExp("\\--".concat(RR, "\\-"), "g"),
          qR = new RegExp("\\.".concat(JR), "g");
        tR = tR.replace(uR, ".".concat(GR, "-")).replace(ZR, "--".concat(GR, "-")).replace(qR, ".".concat(yR))
      }
      return tR
    }
    var RG = !1;

    function JG() {
      SJ.autoAddCss && !RG && (! function(RR) {
        if (RR && gR) {
          var JR = BR.createElement("style");
          JR.setAttribute("type", "text/css"), JR.innerHTML = RR;
          for (var GR = BR.head.childNodes, yR = null, tR = GR.length - 1; tR > -1; tR--) {
            var uR = GR[tR],
              ZR = (uR.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(ZR) > -1 && (yR = uR)
          }
          BR.head.insertBefore(JR, yR)
        }
      }(hJ()), RG = !0)
    }
    var GG = {
        mixout: function() {
          return {
            dom: {
              css: hJ,
              insertCss: JG
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              JG()
            },
            beforeI2svg: function() {
              JG()
            }
          }
        }
      },
      yG = MR || {};
    yG[eJ] || (yG[eJ] = {}), yG[eJ].styles || (yG[eJ].styles = {}), yG[eJ].hooks || (yG[eJ].hooks = {}), yG[eJ].shims || (yG[eJ].shims = []);
    var tG = yG[eJ],
      uG = [],
      ZG = function() {
        BR.removeEventListener("DOMContentLoaded", ZG), qG = 1, uG.map((function(RR) {
          return RR()
        }))
      },
      qG = !1;

    function iG(RR) {
      var JR = RR.tag,
        GR = RR.attributes,
        yR = void 0 === GR ? {} : GR,
        tR = RR.children,
        uR = void 0 === tR ? [] : tR;
      return "string" === typeof RR ? FJ(RR) : "<".concat(JR, " ").concat(function(RR) {
        return Object.keys(RR || {}).reduce((function(JR, GR) {
          return JR + "".concat(GR, '="').concat(FJ(RR[GR]), '" ')
        }), "").trim()
      }(yR), ">").concat(uR.map(iG).join(""), "</").concat(JR, ">")
    }

    function fG(RR, JR, GR) {
      if (RR && RR[JR] && RR[JR][GR]) return {
        prefix: JR,
        iconName: GR,
        icon: RR[JR][GR]
      }
    }
    gR && ((qG = (BR.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(BR.readyState)) || BR.addEventListener("DOMContentLoaded", ZG));
    var VG = function(RR, JR, GR, yR) {
      var tR, uR, ZR, qR = Object.keys(RR),
        iR = qR.length,
        fR = void 0 !== yR ? function(RR, JR) {
          return function(GR, yR, tR, uR) {
            return RR.call(JR, GR, yR, tR, uR)
          }
        }(JR, yR) : JR;
      for (void 0 === GR ? (tR = 1, ZR = RR[qR[0]]) : (tR = 0, ZR = GR); tR < iR; tR++) ZR = fR(ZR, RR[uR = qR[tR]], uR, RR);
      return ZR
    };

    function KG(RR) {
      return 1 !== VR(RR).length ? null : RR.codePointAt(0).toString(16)
    }

    function wG(RR) {
      return Object.keys(RR).reduce((function(JR, GR) {
        var yR = RR[GR];
        return !!yR.icon ? JR[yR.iconName] = yR.icon : JR[GR] = yR, JR
      }), {})
    }

    function rG(RR, JR) {
      var GR = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        yR = void 0 !== GR && GR,
        tR = wG(JR);
      "function" !== typeof tG.hooks.addPack || yR ? tG.styles[RR] = iR(iR({}, tG.styles[RR] || {}), tR) : tG.hooks.addPack(RR, wG(JR)), "fas" === RR && rG("fa", JR)
    }
    var eG = tG.styles,
      aG = tG.shims,
      LG = Object.keys(OJ),
      nG = LG.reduce((function(RR, JR) {
        return RR[JR] = Object.keys(OJ[JR]), RR
      }), {}),
      UG = null,
      WG = {},
      AG = {},
      CG = {},
      XG = {},
      MG = {};

    function BG(RR, JR) {
      var GR, yR = JR.split("-"),
        tR = yR[0],
        uR = yR.slice(1).join("-");
      return tR !== RR || "" === uR || (GR = uR, ~PJ.indexOf(GR)) ? null : uR
    }
    var lG, pG = function() {
      var RR = function(RR) {
        return VG(eG, (function(JR, GR, yR) {
          return JR[yR] = VG(GR, RR, {}), JR
        }), {})
      };
      WG = RR((function(RR, JR, GR) {
        (JR[3] && (RR[JR[3]] = GR), JR[2]) && JR[2].filter((function(RR) {
          return "number" === typeof RR
        })).forEach((function(JR) {
          RR[JR.toString(16)] = GR
        }));
        return RR
      })), AG = RR((function(RR, JR, GR) {
        (RR[GR] = GR, JR[2]) && JR[2].filter((function(RR) {
          return "string" === typeof RR
        })).forEach((function(JR) {
          RR[JR] = GR
        }));
        return RR
      })), MG = RR((function(RR, JR, GR) {
        var yR = JR[2];
        return RR[GR] = GR, yR.forEach((function(JR) {
          RR[JR] = GR
        })), RR
      }));
      var JR = "far" in eG || SJ.autoFetchSvg,
        GR = VG(aG, (function(RR, GR) {
          var yR = GR[0],
            tR = GR[1],
            uR = GR[2];
          return "far" !== tR || JR || (tR = "fas"), "string" === typeof yR && (RR.names[yR] = {
            prefix: tR,
            iconName: uR
          }), "number" === typeof yR && (RR.unicodes[yR.toString(16)] = {
            prefix: tR,
            iconName: uR
          }), RR
        }), {
          names: {},
          unicodes: {}
        });
      CG = GR.names, XG = GR.unicodes, UG = xG(SJ.styleDefault, {
        family: SJ.familyDefault
      })
    };

    function gG(RR, JR) {
      return (WG[RR] || {})[JR]
    }

    function bG(RR, JR) {
      return (MG[RR] || {})[JR]
    }

    function vG(RR) {
      return CG[RR] || {
        prefix: null,
        iconName: null
      }
    }

    function OG() {
      return UG
    }
    lG = function(RR) {
      UG = xG(RR.styleDefault, {
        family: SJ.familyDefault
      })
    }, jJ.push(lG), pG();

    function xG(RR) {
      var JR = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        GR = void 0 === JR ? xR : JR,
        yR = pJ[GR][RR];
      if (GR === NR && !RR) return "fad";
      var tR = bJ[GR][RR] || bJ[GR][yR],
        uR = RR in tG.styles ? RR : null;
      return tR || uR || null
    }

    function NG(RR) {
      return RR.sort().filter((function(RR, JR, GR) {
        return GR.indexOf(RR) === JR
      }))
    }
    var DG = VJ.concat(RJ);

    function HG(RR) {
      var JR = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        GR = void 0 !== JR && JR,
        yR = null,
        tR = NG(RR.filter((function(RR) {
          return DG.includes(RR)
        }))),
        uR = NG(RR.filter((function(RR) {
          return !DG.includes(RR)
        }))),
        ZR = fR(tR.filter((function(RR) {
          return yR = RR, !OR.includes(RR)
        })), 1)[0],
        qR = void 0 === ZR ? null : ZR,
        VR = function(RR) {
          var JR = xR,
            GR = LG.reduce((function(RR, JR) {
              return RR[JR] = "".concat(SJ.cssPrefix, "-").concat(JR), RR
            }), {});
          return sR.forEach((function(yR) {
            (RR.includes(GR[yR]) || RR.some((function(RR) {
              return nG[yR].includes(RR)
            }))) && (JR = yR)
          })), JR
        }(tR),
        KR = iR(iR({}, function(RR) {
          var JR = [],
            GR = null;
          return RR.forEach((function(RR) {
            var yR = BG(SJ.cssPrefix, RR);
            yR ? GR = yR : RR && JR.push(RR)
          })), {
            iconName: GR,
            rest: JR
          }
        }(uR)), {}, {
          prefix: xG(qR, {
            family: VR
          })
        });
      return iR(iR(iR({}, KR), function(RR) {
        var JR = RR.values,
          GR = RR.family,
          yR = RR.canonical,
          tR = RR.givenPrefix,
          uR = void 0 === tR ? "" : tR,
          ZR = RR.styles,
          qR = void 0 === ZR ? {} : ZR,
          iR = RR.config,
          fR = void 0 === iR ? {} : iR,
          VR = GR === NR,
          KR = JR.includes("fa-duotone") || JR.includes("fad"),
          wR = "duotone" === fR.familyDefault,
          rR = "fad" === yR.prefix || "fa-duotone" === yR.prefix;
        !VR && (KR || wR || rR) && (yR.prefix = "fad");
        (JR.includes("fa-brands") || JR.includes("fab")) && (yR.prefix = "fab");
        if (!yR.prefix && oG.includes(GR)) {
          if (Object.keys(qR).find((function(RR) {
              return cG.includes(RR)
            })) || fR.autoFetchSvg) {
            var eR = hR.get(GR).defaultShortPrefixId;
            yR.prefix = eR, yR.iconName = bG(yR.prefix, yR.iconName) || yR.iconName
          }
        }
        "fa" !== yR.prefix && "fa" !== uR || (yR.prefix = OG() || "fas");
        return yR
      }({
        values: RR,
        family: VR,
        styles: eG,
        config: SJ,
        canonical: KR,
        givenPrefix: yR
      })), function(RR, JR, GR) {
        var yR = GR.prefix,
          tR = GR.iconName;
        if (RR || !yR || !tR) return {
          prefix: yR,
          iconName: tR
        };
        var uR = "fa" === JR ? vG(tR) : {},
          ZR = bG(yR, tR);
        tR = uR.iconName || ZR || tR, "far" !== (yR = uR.prefix || yR) || eG.far || !eG.fas || SJ.autoFetchSvg || (yR = "fas");
        return {
          prefix: yR,
          iconName: tR
        }
      }(GR, yR, KR))
    }
    var oG = sR.filter((function(RR) {
        return RR !== xR || RR !== NR
      })),
      cG = Object.keys(fJ).filter((function(RR) {
        return RR !== xR
      })).map((function(RR) {
        return Object.keys(fJ[RR])
      })).flat();
    var PG = function() {
        return function(RR, JR, GR) {
          return JR && tR(RR.prototype, JR), GR && tR(RR, GR), Object.defineProperty(RR, "prototype", {
            writable: !1
          }), RR
        }((function RR() {
          ! function(RR, JR) {
            if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
          }(this, RR), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var RR = this, JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
            var tR = GR.reduce(this._pullDefinitions, {});
            Object.keys(tR).forEach((function(JR) {
              RR.definitions[JR] = iR(iR({}, RR.definitions[JR] || {}), tR[JR]), rG(JR, tR[JR]);
              var GR = OJ[xR][JR];
              GR && rG(GR, tR[JR]), pG()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(RR, JR) {
            var GR = JR.prefix && JR.iconName && JR.icon ? {
              0: JR
            } : JR;
            return Object.keys(GR).map((function(JR) {
              var yR = GR[JR],
                tR = yR.prefix,
                uR = yR.iconName,
                ZR = yR.icon,
                qR = ZR[2];
              RR[tR] || (RR[tR] = {}), qR.length > 0 && qR.forEach((function(JR) {
                "string" === typeof JR && (RR[tR][JR] = ZR)
              })), RR[tR][uR] = ZR
            })), RR
          }
        }])
      }(),
      IG = [],
      mG = {},
      zG = {},
      SG = Object.keys(zG);

    function jG(RR, JR) {
      for (var GR = arguments.length, yR = new Array(GR > 2 ? GR - 2 : 0), tR = 2; tR < GR; tR++) yR[tR - 2] = arguments[tR];
      return (mG[RR] || []).forEach((function(RR) {
        JR = RR.apply(null, [JR].concat(yR))
      })), JR
    }

    function dG(RR) {
      for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
      (mG[RR] || []).forEach((function(RR) {
        RR.apply(null, GR)
      }))
    }

    function EG() {
      var RR = arguments[0],
        JR = Array.prototype.slice.call(arguments, 1);
      return zG[RR] ? zG[RR].apply(null, JR) : void 0
    }

    function YG(RR) {
      "fa" === RR.prefix && (RR.prefix = "fas");
      var JR = RR.iconName,
        GR = RR.prefix || OG();
      if (JR) return JR = bG(GR, JR) || JR, fG(kG.definitions, GR, JR) || fG(tG.styles, GR, JR)
    }
    var kG = new PG,
      QG = {
        i2svg: function() {
          var RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return gR ? (dG("beforeI2svg", RR), EG("pseudoElements2svg", RR), EG("i2svg", RR)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var RR, JR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            GR = JR.autoReplaceSvgRoot;
          !1 === SJ.autoReplaceSvg && (SJ.autoReplaceSvg = !0), SJ.observeMutations = !0, RR = function() {
            TG({
              autoReplaceSvgRoot: GR
            }), dG("watch", JR)
          }, gR && (qG ? setTimeout(RR, 0) : uG.push(RR))
        }
      },
      FG = {
        noAuto: function() {
          SJ.autoReplaceSvg = !1, SJ.observeMutations = !1, dG("noAuto")
        },
        config: SJ,
        dom: QG,
        parse: {
          icon: function(RR) {
            if (null === RR) return null;
            if ("object" === wR(RR) && RR.prefix && RR.iconName) return {
              prefix: RR.prefix,
              iconName: bG(RR.prefix, RR.iconName) || RR.iconName
            };
            if (Array.isArray(RR) && 2 === RR.length) {
              var JR = 0 === RR[1].indexOf("fa-") ? RR[1].slice(3) : RR[1],
                GR = xG(RR[0]);
              return {
                prefix: GR,
                iconName: bG(GR, JR) || JR
              }
            }
            if ("string" === typeof RR && (RR.indexOf("".concat(SJ.cssPrefix, "-")) > -1 || RR.match(NJ))) {
              var yR = HG(RR.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: yR.prefix || OG(),
                iconName: bG(yR.prefix, yR.iconName) || yR.iconName
              }
            }
            if ("string" === typeof RR) {
              var tR = OG();
              return {
                prefix: tR,
                iconName: bG(tR, RR) || RR
              }
            }
          }
        },
        library: kG,
        findIconDefinition: YG,
        toHtml: iG
      },
      TG = function() {
        var RR = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          JR = void 0 === RR ? BR : RR;
        (Object.keys(tG.styles).length > 0 || SJ.autoFetchSvg) && gR && SJ.autoReplaceSvg && FG.dom.i2svg({
          node: JR
        })
      };

    function sG(RR, JR) {
      return Object.defineProperty(RR, "abstract", {
        get: JR
      }), Object.defineProperty(RR, "html", {
        get: function() {
          return RR.abstract.map((function(RR) {
            return iG(RR)
          }))
        }
      }), Object.defineProperty(RR, "node", {
        get: function() {
          if (gR) {
            var JR = BR.createElement("div");
            return JR.innerHTML = RR.html, JR.children
          }
        }
      }), RR
    }

    function hG(RR) {
      var JR = RR.icons,
        GR = JR.main,
        yR = JR.mask,
        tR = RR.prefix,
        uR = RR.iconName,
        ZR = RR.transform,
        qR = RR.symbol,
        fR = RR.maskId,
        VR = RR.extra,
        KR = RR.watchable,
        wR = void 0 !== KR && KR,
        rR = yR.found ? yR : GR,
        eR = rR.width,
        aR = rR.height,
        LR = [SJ.replacementClass, uR ? "".concat(SJ.cssPrefix, "-").concat(uR) : ""].filter((function(RR) {
          return -1 === VR.classes.indexOf(RR)
        })).filter((function(RR) {
          return "" !== RR || !!RR
        })).concat(VR.classes).join(" "),
        nR = {
          children: [],
          attributes: iR(iR({}, VR.attributes), {}, {
            "data-prefix": tR,
            "data-icon": uR,
            class: LR,
            role: VR.attributes.role || "img",
            viewBox: "0 0 ".concat(eR, " ").concat(aR)
          })
        };
      (function(RR) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(JR) {
          return JR in RR
        }))
      })(VR.attributes) || VR.attributes["aria-hidden"] || (nR.attributes["aria-hidden"] = "true"), wR && (nR.attributes[LJ] = "");
      var UR = iR(iR({}, nR), {}, {
          prefix: tR,
          iconName: uR,
          main: GR,
          mask: yR,
          maskId: fR,
          transform: ZR,
          symbol: qR,
          styles: iR({}, VR.styles)
        }),
        WR = yR.found && GR.found ? EG("generateAbstractMask", UR) || {
          children: [],
          attributes: {}
        } : EG("generateAbstractIcon", UR) || {
          children: [],
          attributes: {}
        },
        AR = WR.children,
        CR = WR.attributes;
      return UR.children = AR, UR.attributes = CR, qR ? function(RR) {
        var JR = RR.prefix,
          GR = RR.iconName,
          yR = RR.children,
          tR = RR.attributes,
          uR = RR.symbol,
          ZR = !0 === uR ? "".concat(JR, "-").concat(SJ.cssPrefix, "-").concat(GR) : uR;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: iR(iR({}, tR), {}, {
              id: ZR
            }),
            children: yR
          }]
        }]
      }(UR) : function(RR) {
        var JR = RR.children,
          GR = RR.main,
          yR = RR.mask,
          tR = RR.attributes,
          uR = RR.styles,
          ZR = RR.transform;
        if (sJ(ZR) && GR.found && !yR.found) {
          var qR = {
            x: GR.width / GR.height / 2,
            y: .5
          };
          tR.style = TJ(iR(iR({}, uR), {}, {
            "transform-origin": "".concat(qR.x + ZR.x / 16, "em ").concat(qR.y + ZR.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: tR,
          children: JR
        }]
      }(UR)
    }

    function Ry(RR) {
      var JR = RR.content,
        GR = RR.width,
        yR = RR.height,
        tR = RR.transform,
        uR = RR.extra,
        ZR = RR.watchable,
        qR = void 0 !== ZR && ZR,
        fR = iR(iR({}, uR.attributes), {}, {
          class: uR.classes.join(" ")
        });
      qR && (fR[LJ] = "");
      var VR = iR({}, uR.styles);
      sJ(tR) && (VR.transform = function(RR) {
        var JR = RR.transform,
          GR = RR.width,
          yR = void 0 === GR ? 16 : GR,
          tR = RR.height,
          uR = void 0 === tR ? 16 : tR,
          ZR = RR.startCentered,
          qR = void 0 !== ZR && ZR,
          iR = "";
        return iR += qR && bR ? "translate(".concat(JR.x / dJ - yR / 2, "em, ").concat(JR.y / dJ - uR / 2, "em) ") : qR ? "translate(calc(-50% + ".concat(JR.x / dJ, "em), calc(-50% + ").concat(JR.y / dJ, "em)) ") : "translate(".concat(JR.x / dJ, "em, ").concat(JR.y / dJ, "em) "), iR += "scale(".concat(JR.size / dJ * (JR.flipX ? -1 : 1), ", ").concat(JR.size / dJ * (JR.flipY ? -1 : 1), ") "), iR + "rotate(".concat(JR.rotate, "deg) ")
      }({
        transform: tR,
        startCentered: !0,
        width: GR,
        height: yR
      }), VR["-webkit-transform"] = VR.transform);
      var KR = TJ(VR);
      KR.length > 0 && (fR.style = KR);
      var wR = [];
      return wR.push({
        tag: "span",
        attributes: fR,
        children: [JR]
      }), wR
    }
    var Jy = tG.styles;

    function Gy(RR) {
      var JR = RR[0],
        GR = RR[1],
        yR = fR(RR.slice(4), 1)[0];
      return {
        found: !0,
        width: JR,
        height: GR,
        icon: Array.isArray(yR) ? {
          tag: "g",
          attributes: {
            class: "".concat(SJ.cssPrefix, "-").concat(cJ.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(SJ.cssPrefix, "-").concat(cJ.SECONDARY),
              fill: "currentColor",
              d: yR[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(SJ.cssPrefix, "-").concat(cJ.PRIMARY),
              fill: "currentColor",
              d: yR[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: yR
          }
        }
      }
    }
    var yy = {
      found: !1,
      width: 512,
      height: 512
    };

    function ty(RR, JR) {
      var GR = JR;
      return "fa" === JR && null !== SJ.styleDefault && (JR = OG()), new Promise((function(yR, tR) {
        if ("fa" === GR) {
          var uR = vG(RR) || {};
          RR = uR.iconName || RR, JR = uR.prefix || JR
        }
        if (RR && JR && Jy[JR] && Jy[JR][RR]) return yR(Gy(Jy[JR][RR]));
        ! function(RR, JR) {
          MJ || SJ.showMissingIcons || !RR || console.error('Icon with name "'.concat(RR, '" and prefix "').concat(JR, '" is missing.'))
        }(RR, JR), yR(iR(iR({}, yy), {}, {
          icon: SJ.showMissingIcons && RR && EG("missingIconAbstract") || {}
        }))
      }))
    }
    var uy = function() {},
      Zy = SJ.measurePerformance && pR && pR.mark && pR.measure ? pR : {
        mark: uy,
        measure: uy
      },
      qy = 'FA "7.2.0"',
      iy = function(RR) {
        Zy.mark("".concat(qy, " ").concat(RR, " ends")), Zy.measure("".concat(qy, " ").concat(RR), "".concat(qy, " ").concat(RR, " begins"), "".concat(qy, " ").concat(RR, " ends"))
      },
      fy = function(RR) {
        return Zy.mark("".concat(qy, " ").concat(RR, " begins")),
          function() {
            return iy(RR)
          }
      },
      Vy = function() {};

    function Ky(RR) {
      return "string" === typeof(RR.getAttribute ? RR.getAttribute(LJ) : null)
    }

    function wy(RR) {
      return BR.createElementNS("http://www.w3.org/2000/svg", RR)
    }

    function ry(RR) {
      return BR.createElement(RR)
    }

    function ey(RR) {
      var JR = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        GR = void 0 === JR ? "svg" === RR.tag ? wy : ry : JR;
      if ("string" === typeof RR) return BR.createTextNode(RR);
      var yR = GR(RR.tag);
      return Object.keys(RR.attributes || []).forEach((function(JR) {
        yR.setAttribute(JR, RR.attributes[JR])
      })), (RR.children || []).forEach((function(RR) {
        yR.appendChild(ey(RR, {
          ceFn: GR
        }))
      })), yR
    }
    var ay = {
      replace: function(RR) {
        var JR = RR[0];
        if (JR.parentNode)
          if (RR[1].forEach((function(RR) {
              JR.parentNode.insertBefore(ey(RR), JR)
            })), null === JR.getAttribute(LJ) && SJ.keepOriginalSource) {
            var GR = BR.createComment(function(RR) {
              var JR = " ".concat(RR.outerHTML, " ");
              return "".concat(JR, "Font Awesome fontawesome.com ")
            }(JR));
            JR.parentNode.replaceChild(GR, JR)
          } else JR.remove()
      },
      nest: function(RR) {
        var JR = RR[0],
          GR = RR[1];
        if (~QJ(JR).indexOf(SJ.replacementClass)) return ay.replace(RR);
        var yR = new RegExp("".concat(SJ.cssPrefix, "-.*"));
        if (delete GR[0].attributes.id, GR[0].attributes.class) {
          var tR = GR[0].attributes.class.split(" ").reduce((function(RR, JR) {
            return JR === SJ.replacementClass || JR.match(yR) ? RR.toSvg.push(JR) : RR.toNode.push(JR), RR
          }), {
            toNode: [],
            toSvg: []
          });
          GR[0].attributes.class = tR.toSvg.join(" "), 0 === tR.toNode.length ? JR.removeAttribute("class") : JR.setAttribute("class", tR.toNode.join(" "))
        }
        var uR = GR.map((function(RR) {
          return iG(RR)
        })).join("\n");
        JR.setAttribute(LJ, ""), JR.innerHTML = uR
      }
    };

    function Ly(RR) {
      RR()
    }

    function ny(RR, JR) {
      var GR = "function" === typeof JR ? JR : Vy;
      if (0 === RR.length) GR();
      else {
        var yR = Ly;
        "async" === SJ.mutateApproach && (yR = MR.requestAnimationFrame || Ly), yR((function() {
          var JR = !0 === SJ.autoReplaceSvg ? ay.replace : ay[SJ.autoReplaceSvg] || ay.replace,
            yR = fy("mutate");
          RR.map(JR), yR(), GR()
        }))
      }
    }
    var Uy = !1;

    function Wy() {
      Uy = !0
    }

    function Ay() {
      Uy = !1
    }
    var Cy = null;

    function Xy(RR) {
      if (lR && SJ.observeMutations) {
        var JR = RR.treeCallback,
          GR = void 0 === JR ? Vy : JR,
          yR = RR.nodeCallback,
          tR = void 0 === yR ? Vy : yR,
          uR = RR.pseudoElementsCallback,
          ZR = void 0 === uR ? Vy : uR,
          qR = RR.observeMutationsRoot,
          iR = void 0 === qR ? BR : qR;
        Cy = new lR((function(RR) {
          if (!Uy) {
            var JR = OG();
            kJ(RR).forEach((function(RR) {
              if ("childList" === RR.type && RR.addedNodes.length > 0 && !Ky(RR.addedNodes[0]) && (SJ.searchPseudoElements && ZR(RR.target), GR(RR.target)), "attributes" === RR.type && RR.target.parentNode && SJ.searchPseudoElements && ZR([RR.target], !0), "attributes" === RR.type && Ky(RR.target) && ~oJ.indexOf(RR.attributeName))
                if ("class" === RR.attributeName && function(RR) {
                    var JR = RR.getAttribute ? RR.getAttribute(UJ) : null,
                      GR = RR.getAttribute ? RR.getAttribute(WJ) : null;
                    return JR && GR
                  }(RR.target)) {
                  var yR = HG(QJ(RR.target)),
                    uR = yR.prefix,
                    qR = yR.iconName;
                  RR.target.setAttribute(UJ, uR || JR), qR && RR.target.setAttribute(WJ, qR)
                } else(iR = RR.target) && iR.classList && iR.classList.contains && iR.classList.contains(SJ.replacementClass) && tR(RR.target);
              var iR
            }))
          }
        })), gR && Cy.observe(iR, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function My(RR) {
      var JR, GR, yR = RR.getAttribute("data-prefix"),
        tR = RR.getAttribute("data-icon"),
        uR = void 0 !== RR.innerText ? RR.innerText.trim() : "",
        ZR = HG(QJ(RR));
      return ZR.prefix || (ZR.prefix = OG()), yR && tR && (ZR.prefix = yR, ZR.iconName = tR), ZR.iconName && ZR.prefix || (ZR.prefix && uR.length > 0 && (ZR.iconName = (JR = ZR.prefix, GR = RR.innerText, (AG[JR] || {})[GR] || gG(ZR.prefix, KG(RR.innerText)))), !ZR.iconName && SJ.autoFetchSvg && RR.firstChild && RR.firstChild.nodeType === Node.TEXT_NODE && (ZR.iconName = RR.firstChild.data)), ZR
    }

    function By(RR) {
      var JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        GR = My(RR),
        yR = GR.iconName,
        tR = GR.prefix,
        uR = GR.rest,
        ZR = function(RR) {
          return kJ(RR.attributes).reduce((function(RR, JR) {
            return "class" !== RR.name && "style" !== RR.name && (RR[JR.name] = JR.value), RR
          }), {})
        }(RR),
        qR = jG("parseNodeAttributes", {}, RR),
        fR = JR.styleParser ? function(RR) {
          var JR = RR.getAttribute("style"),
            GR = [];
          return JR && (GR = JR.split(";").reduce((function(RR, JR) {
            var GR = JR.split(":"),
              yR = GR[0],
              tR = GR.slice(1);
            return yR && tR.length > 0 && (RR[yR] = tR.join(":").trim()), RR
          }), {})), GR
        }(RR) : [];
      return iR({
        iconName: yR,
        prefix: tR,
        transform: EJ,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: uR,
          styles: fR,
          attributes: ZR
        }
      }, qR)
    }
    var ly = tG.styles;

    function py(RR) {
      var JR = "nest" === SJ.autoReplaceSvg ? By(RR, {
        styleParser: !1
      }) : By(RR);
      return ~JR.extra.classes.indexOf(DJ) ? EG("generateLayersText", RR, JR) : EG("generateSvgReplacementMutation", RR, JR)
    }

    function gy(RR) {
      var JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!gR) return Promise.resolve();
      var GR = BR.documentElement.classList,
        yR = function(RR) {
          return GR.add("".concat(AJ, "-").concat(RR))
        },
        tR = function(RR) {
          return GR.remove("".concat(AJ, "-").concat(RR))
        },
        uR = SJ.autoFetchSvg ? [].concat(VR(RJ), VR(VJ)) : OR.concat(Object.keys(ly));
      uR.includes("fa") || uR.push("fa");
      var ZR = [".".concat(DJ, ":not([").concat(LJ, "])")].concat(uR.map((function(RR) {
        return ".".concat(RR, ":not([").concat(LJ, "])")
      }))).join(", ");
      if (0 === ZR.length) return Promise.resolve();
      var qR = [];
      try {
        qR = kJ(RR.querySelectorAll(ZR))
      } catch (KR) {}
      if (!(qR.length > 0)) return Promise.resolve();
      yR("pending"), tR("complete");
      var iR = fy("onTree"),
        fR = qR.reduce((function(RR, JR) {
          try {
            var GR = py(JR);
            GR && RR.push(GR)
          } catch (KR) {
            MJ || "MissingIcon" === KR.name && console.error(KR)
          }
          return RR
        }), []);
      return new Promise((function(RR, GR) {
        Promise.all(fR).then((function(GR) {
          ny(GR, (function() {
            yR("active"), yR("complete"), tR("pending"), "function" === typeof JR && JR(), iR(), RR()
          }))
        })).catch((function(RR) {
          iR(), GR(RR)
        }))
      }))
    }

    function by(RR) {
      var JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      py(RR).then((function(RR) {
        RR && ny([RR], JR)
      }))
    }
    var vy = function(RR) {
        var JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          GR = JR.transform,
          yR = void 0 === GR ? EJ : GR,
          tR = JR.symbol,
          uR = void 0 !== tR && tR,
          ZR = JR.mask,
          qR = void 0 === ZR ? null : ZR,
          fR = JR.maskId,
          VR = void 0 === fR ? null : fR,
          KR = JR.classes,
          wR = void 0 === KR ? [] : KR,
          rR = JR.attributes,
          eR = void 0 === rR ? {} : rR,
          aR = JR.styles,
          LR = void 0 === aR ? {} : aR;
        if (RR) {
          var nR = RR.prefix,
            UR = RR.iconName,
            WR = RR.icon;
          return sG(iR({
            type: "icon"
          }, RR), (function() {
            return dG("beforeDOMElementCreation", {
              iconDefinition: RR,
              params: JR
            }), hG({
              icons: {
                main: Gy(WR),
                mask: qR ? Gy(qR.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: nR,
              iconName: UR,
              transform: iR(iR({}, EJ), yR),
              symbol: uR,
              maskId: VR,
              extra: {
                attributes: eR,
                styles: LR,
                classes: wR
              }
            })
          }))
        }
      },
      Oy = {
        mixout: function() {
          return {
            icon: (RR = vy, function(JR) {
              var GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                yR = (JR || {}).icon ? JR : YG(JR || {}),
                tR = GR.mask;
              return tR && (tR = (tR || {}).icon ? tR : YG(tR || {})), RR(yR, iR(iR({}, GR), {}, {
                mask: tR
              }))
            })
          };
          var RR
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(RR) {
              return RR.treeCallback = gy, RR.nodeCallback = by, RR
            }
          }
        },
        provides: function(RR) {
          RR.i2svg = function(RR) {
            var JR = RR.node,
              GR = void 0 === JR ? BR : JR,
              yR = RR.callback;
            return gy(GR, void 0 === yR ? function() {} : yR)
          }, RR.generateSvgReplacementMutation = function(RR, JR) {
            var GR = JR.iconName,
              yR = JR.prefix,
              tR = JR.transform,
              uR = JR.symbol,
              ZR = JR.mask,
              qR = JR.maskId,
              iR = JR.extra;
            return new Promise((function(JR, VR) {
              Promise.all([ty(GR, yR), ZR.iconName ? ty(ZR.iconName, ZR.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(ZR) {
                var VR = fR(ZR, 2),
                  KR = VR[0],
                  wR = VR[1];
                JR([RR, hG({
                  icons: {
                    main: KR,
                    mask: wR
                  },
                  prefix: yR,
                  iconName: GR,
                  transform: tR,
                  symbol: uR,
                  maskId: qR,
                  extra: iR,
                  watchable: !0
                })])
              })).catch(VR)
            }))
          }, RR.generateAbstractIcon = function(RR) {
            var JR, GR = RR.children,
              yR = RR.attributes,
              tR = RR.main,
              uR = RR.transform,
              ZR = TJ(RR.styles);
            return ZR.length > 0 && (yR.style = ZR), sJ(uR) && (JR = EG("generateAbstractTransformGrouping", {
              main: tR,
              transform: uR,
              containerWidth: tR.width,
              iconWidth: tR.width
            })), GR.push(JR || tR.icon), {
              children: GR,
              attributes: yR
            }
          }
        }
      },
      xy = {
        mixout: function() {
          return {
            layer: function(RR) {
              var JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                GR = JR.classes,
                yR = void 0 === GR ? [] : GR;
              return sG({
                type: "layer"
              }, (function() {
                dG("beforeDOMElementCreation", {
                  assembler: RR,
                  params: JR
                });
                var GR = [];
                return RR((function(RR) {
                  Array.isArray(RR) ? RR.map((function(RR) {
                    GR = GR.concat(RR.abstract)
                  })) : GR = GR.concat(RR.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(SJ.cssPrefix, "-layers")].concat(VR(yR)).join(" ")
                  },
                  children: GR
                }]
              }))
            }
          }
        }
      },
      Ny = {
        mixout: function() {
          return {
            counter: function(RR) {
              var JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                GR = JR.title,
                yR = void 0 === GR ? null : GR,
                tR = JR.classes,
                uR = void 0 === tR ? [] : tR,
                ZR = JR.attributes,
                qR = void 0 === ZR ? {} : ZR,
                fR = JR.styles,
                KR = void 0 === fR ? {} : fR;
              return sG({
                type: "counter",
                content: RR
              }, (function() {
                return dG("beforeDOMElementCreation", {
                    content: RR,
                    params: JR
                  }),
                  function(RR) {
                    var JR = RR.content,
                      GR = RR.extra,
                      yR = iR(iR({}, GR.attributes), {}, {
                        class: GR.classes.join(" ")
                      }),
                      tR = TJ(GR.styles);
                    tR.length > 0 && (yR.style = tR);
                    var uR = [];
                    return uR.push({
                      tag: "span",
                      attributes: yR,
                      children: [JR]
                    }), uR
                  }({
                    content: RR.toString(),
                    title: yR,
                    extra: {
                      attributes: qR,
                      styles: KR,
                      classes: ["".concat(SJ.cssPrefix, "-layers-counter")].concat(VR(uR))
                    }
                  })
              }))
            }
          }
        }
      },
      Dy = {
        mixout: function() {
          return {
            text: function(RR) {
              var JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                GR = JR.transform,
                yR = void 0 === GR ? EJ : GR,
                tR = JR.classes,
                uR = void 0 === tR ? [] : tR,
                ZR = JR.attributes,
                qR = void 0 === ZR ? {} : ZR,
                fR = JR.styles,
                KR = void 0 === fR ? {} : fR;
              return sG({
                type: "text",
                content: RR
              }, (function() {
                return dG("beforeDOMElementCreation", {
                  content: RR,
                  params: JR
                }), Ry({
                  content: RR,
                  transform: iR(iR({}, EJ), yR),
                  extra: {
                    attributes: qR,
                    styles: KR,
                    classes: ["".concat(SJ.cssPrefix, "-layers-text")].concat(VR(uR))
                  }
                })
              }))
            }
          }
        },
        provides: function(RR) {
          RR.generateLayersText = function(RR, JR) {
            var GR = JR.transform,
              yR = JR.extra,
              tR = null,
              uR = null;
            if (bR) {
              var ZR = parseInt(getComputedStyle(RR).fontSize, 10),
                qR = RR.getBoundingClientRect();
              tR = qR.width / ZR, uR = qR.height / ZR
            }
            return Promise.resolve([RR, Ry({
              content: RR.innerHTML,
              width: tR,
              height: uR,
              transform: GR,
              extra: yR,
              watchable: !0
            })])
          }
        }
      },
      Hy = new RegExp('"', "ug"),
      oy = [1105920, 1112319],
      cy = iR(iR(iR(iR({}, {
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
      Py = Object.keys(cy).reduce((function(RR, JR) {
        return RR[JR.toLowerCase()] = cy[JR], RR
      }), {}),
      Iy = Object.keys(Py).reduce((function(RR, JR) {
        var GR = Py[JR];
        return RR[JR] = GR[900] || VR(Object.entries(GR))[0][1], RR
      }), {});

    function my(RR, JR) {
      var GR = "".concat("data-fa-pseudo-element-pending").concat(JR.replace(":", "-"));
      return new Promise((function(yR, tR) {
        if (null !== RR.getAttribute(GR)) return yR();
        var uR = kJ(RR.children).filter((function(RR) {
            return RR.getAttribute(nJ) === JR
          }))[0],
          ZR = MR.getComputedStyle(RR, JR),
          qR = ZR.getPropertyValue("font-family"),
          fR = qR.match(HJ),
          KR = ZR.getPropertyValue("font-weight"),
          wR = ZR.getPropertyValue("content");
        if (uR && !fR) return RR.removeChild(uR), yR();
        if (fR && "none" !== wR && "" !== wR) {
          var rR = ZR.getPropertyValue("content"),
            eR = function(RR, JR) {
              var GR = RR.replace(/^['"]|['"]$/g, "").toLowerCase(),
                yR = parseInt(JR),
                tR = isNaN(yR) ? "normal" : yR;
              return (Py[GR] || {})[tR] || Iy[GR]
            }(qR, KR),
            aR = function(RR) {
              return KG(VR(RR.replace(Hy, ""))[0] || "")
            }(rR),
            LR = fR[0].startsWith("FontAwesome"),
            nR = function(RR) {
              var JR = RR.getPropertyValue("font-feature-settings").includes("ss01"),
                GR = RR.getPropertyValue("content").replace(Hy, ""),
                yR = GR.codePointAt(0),
                tR = yR >= oy[0] && yR <= oy[1],
                uR = 2 === GR.length && GR[0] === GR[1];
              return tR || uR || JR
            }(ZR),
            UR = gG(eR, aR),
            WR = UR;
          if (LR) {
            var AR = function(RR) {
              var JR = XG[RR],
                GR = gG("fas", RR);
              return JR || (GR ? {
                prefix: "fas",
                iconName: GR
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(aR);
            AR.iconName && AR.prefix && (UR = AR.iconName, eR = AR.prefix)
          }
          if (!UR || nR || uR && uR.getAttribute(UJ) === eR && uR.getAttribute(WJ) === WR) yR();
          else {
            RR.setAttribute(GR, WR), uR && RR.removeChild(uR);
            var CR = {
                iconName: null,
                prefix: null,
                transform: EJ,
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
              XR = CR.extra;
            XR.attributes[nJ] = JR, ty(UR, eR).then((function(tR) {
              var uR = hG(iR(iR({}, CR), {}, {
                  icons: {
                    main: tR,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: eR,
                  iconName: WR,
                  extra: XR,
                  watchable: !0
                })),
                ZR = BR.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === JR ? RR.insertBefore(ZR, RR.firstChild) : RR.appendChild(ZR), ZR.outerHTML = uR.map((function(RR) {
                return iG(RR)
              })).join("\n"), RR.removeAttribute(GR), yR()
            })).catch(tR)
          }
        } else yR()
      }))
    }

    function zy(RR) {
      return Promise.all([my(RR, "::before"), my(RR, "::after")])
    }

    function Sy(RR) {
      return RR.parentNode !== document.head && !~CJ.indexOf(RR.tagName.toUpperCase()) && !RR.getAttribute(nJ) && (!RR.parentNode || "svg" !== RR.parentNode.tagName)
    }
    var jy = function(RR) {
        return !!RR && XJ.some((function(JR) {
          return RR.includes(JR)
        }))
      },
      dy = function(RR) {
        if (!RR) return [];
        var JR = new Set,
          GR = RR.split(/,(?![^()]*\))/).map((function(RR) {
            return RR.trim()
          }));
        GR = GR.flatMap((function(RR) {
          return RR.includes("(") ? RR : RR.split(",").map((function(RR) {
            return RR.trim()
          }))
        }));
        var yR, tR = uR(GR);
        try {
          for (tR.s(); !(yR = tR.n()).done;) {
            var ZR = yR.value;
            if (jy(ZR)) {
              var qR = XJ.reduce((function(RR, JR) {
                return RR.replace(JR, "")
              }), ZR);
              "" !== qR && "*" !== qR && JR.add(qR)
            }
          }
        } catch (iR) {
          tR.e(iR)
        } finally {
          tR.f()
        }
        return JR
      };

    function Ey(RR) {
      if (gR) {
        var JR;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) JR = RR;
        else if (SJ.searchPseudoElementsFullScan) JR = RR.querySelectorAll("*");
        else {
          var GR, yR = new Set,
            tR = uR(document.styleSheets);
          try {
            for (tR.s(); !(GR = tR.n()).done;) {
              var ZR = GR.value;
              try {
                var qR, iR = uR(ZR.cssRules);
                try {
                  for (iR.s(); !(qR = iR.n()).done;) {
                    var fR, VR = qR.value,
                      KR = uR(dy(VR.selectorText));
                    try {
                      for (KR.s(); !(fR = KR.n()).done;) {
                        var wR = fR.value;
                        yR.add(wR)
                      }
                    } catch (eR) {
                      KR.e(eR)
                    } finally {
                      KR.f()
                    }
                  }
                } catch (eR) {
                  iR.e(eR)
                } finally {
                  iR.f()
                }
              } catch (aR) {
                SJ.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(ZR.href, " (").concat(aR.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (eR) {
            tR.e(eR)
          } finally {
            tR.f()
          }
          if (!yR.size) return;
          var rR = Array.from(yR).join(", ");
          try {
            JR = RR.querySelectorAll(rR)
          } catch (LR) {}
        }
        return new Promise((function(RR, GR) {
          var yR = kJ(JR).filter(Sy).map(zy),
            tR = fy("searchPseudoElements");
          Wy(), Promise.all(yR).then((function() {
            tR(), Ay(), RR()
          })).catch((function() {
            tR(), Ay(), GR()
          }))
        }))
      }
    }
    var Yy = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(RR) {
              return RR.pseudoElementsCallback = Ey, RR
            }
          }
        },
        provides: function(RR) {
          RR.pseudoElements2svg = function(RR) {
            var JR = RR.node,
              GR = void 0 === JR ? BR : JR;
            SJ.searchPseudoElements && Ey(GR)
          }
        }
      },
      ky = !1,
      Qy = function(RR) {
        return RR.toLowerCase().split(" ").reduce((function(RR, JR) {
          var GR = JR.toLowerCase().split("-"),
            yR = GR[0],
            tR = GR.slice(1).join("-");
          if (yR && "h" === tR) return RR.flipX = !0, RR;
          if (yR && "v" === tR) return RR.flipY = !0, RR;
          if (tR = parseFloat(tR), isNaN(tR)) return RR;
          switch (yR) {
            case "grow":
              RR.size = RR.size + tR;
              break;
            case "shrink":
              RR.size = RR.size - tR;
              break;
            case "left":
              RR.x = RR.x - tR;
              break;
            case "right":
              RR.x = RR.x + tR;
              break;
            case "up":
              RR.y = RR.y - tR;
              break;
            case "down":
              RR.y = RR.y + tR;
              break;
            case "rotate":
              RR.rotate = RR.rotate + tR
          }
          return RR
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      Fy = {
        mixout: function() {
          return {
            parse: {
              transform: function(RR) {
                return Qy(RR)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(RR, JR) {
              var GR = JR.getAttribute("data-fa-transform");
              return GR && (RR.transform = Qy(GR)), RR
            }
          }
        },
        provides: function(RR) {
          RR.generateAbstractTransformGrouping = function(RR) {
            var JR = RR.main,
              GR = RR.transform,
              yR = RR.containerWidth,
              tR = RR.iconWidth,
              uR = {
                transform: "translate(".concat(yR / 2, " 256)")
              },
              ZR = "translate(".concat(32 * GR.x, ", ").concat(32 * GR.y, ") "),
              qR = "scale(".concat(GR.size / 16 * (GR.flipX ? -1 : 1), ", ").concat(GR.size / 16 * (GR.flipY ? -1 : 1), ") "),
              fR = "rotate(".concat(GR.rotate, " 0 0)"),
              VR = {
                outer: uR,
                inner: {
                  transform: "".concat(ZR, " ").concat(qR, " ").concat(fR)
                },
                path: {
                  transform: "translate(".concat(tR / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: iR({}, VR.outer),
              children: [{
                tag: "g",
                attributes: iR({}, VR.inner),
                children: [{
                  tag: JR.icon.tag,
                  children: JR.icon.children,
                  attributes: iR(iR({}, JR.icon.attributes), VR.path)
                }]
              }]
            }
          }
        }
      },
      Ty = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function sy(RR) {
      var JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return RR.attributes && (RR.attributes.fill || JR) && (RR.attributes.fill = "black"), RR
    }
    var hy = {
        hooks: function() {
          return {
            parseNodeAttributes: function(RR, JR) {
              var GR = JR.getAttribute("data-fa-mask"),
                yR = GR ? HG(GR.split(" ").map((function(RR) {
                  return RR.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return yR.prefix || (yR.prefix = OG()), RR.mask = yR, RR.maskId = JR.getAttribute("data-fa-mask-id"), RR
            }
          }
        },
        provides: function(RR) {
          RR.generateAbstractMask = function(RR) {
            var JR, GR = RR.children,
              yR = RR.attributes,
              tR = RR.main,
              uR = RR.mask,
              ZR = RR.maskId,
              qR = RR.transform,
              fR = tR.width,
              VR = tR.icon,
              KR = uR.width,
              wR = uR.icon,
              rR = function(RR) {
                var JR = RR.transform,
                  GR = RR.containerWidth,
                  yR = RR.iconWidth,
                  tR = {
                    transform: "translate(".concat(GR / 2, " 256)")
                  },
                  uR = "translate(".concat(32 * JR.x, ", ").concat(32 * JR.y, ") "),
                  ZR = "scale(".concat(JR.size / 16 * (JR.flipX ? -1 : 1), ", ").concat(JR.size / 16 * (JR.flipY ? -1 : 1), ") "),
                  qR = "rotate(".concat(JR.rotate, " 0 0)");
                return {
                  outer: tR,
                  inner: {
                    transform: "".concat(uR, " ").concat(ZR, " ").concat(qR)
                  },
                  path: {
                    transform: "translate(".concat(yR / 2 * -1, " -256)")
                  }
                }
              }({
                transform: qR,
                containerWidth: KR,
                iconWidth: fR
              }),
              eR = {
                tag: "rect",
                attributes: iR(iR({}, Ty), {}, {
                  fill: "white"
                })
              },
              aR = VR.children ? {
                children: VR.children.map(sy)
              } : {},
              LR = {
                tag: "g",
                attributes: iR({}, rR.inner),
                children: [sy(iR({
                  tag: VR.tag,
                  attributes: iR(iR({}, VR.attributes), rR.path)
                }, aR))]
              },
              nR = {
                tag: "g",
                attributes: iR({}, rR.outer),
                children: [LR]
              },
              UR = "mask-".concat(ZR || YJ()),
              WR = "clip-".concat(ZR || YJ()),
              AR = {
                tag: "mask",
                attributes: iR(iR({}, Ty), {}, {
                  id: UR,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [eR, nR]
              },
              CR = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: WR
                  },
                  children: (JR = wR, "g" === JR.tag ? JR.children : [JR])
                }, AR]
              };
            return GR.push(CR, {
              tag: "rect",
              attributes: iR({
                fill: "currentColor",
                "clip-path": "url(#".concat(WR, ")"),
                mask: "url(#".concat(UR, ")")
              }, Ty)
            }), {
              children: GR,
              attributes: yR
            }
          }
        }
      },
      Rt = {
        provides: function(RR) {
          var JR = !1;
          MR.matchMedia && (JR = MR.matchMedia("(prefers-reduced-motion: reduce)").matches), RR.missingIconAbstract = function() {
            var RR = [],
              GR = {
                fill: "currentColor"
              },
              yR = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            RR.push({
              tag: "path",
              attributes: iR(iR({}, GR), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var tR = iR(iR({}, yR), {}, {
                attributeName: "opacity"
              }),
              uR = {
                tag: "circle",
                attributes: iR(iR({}, GR), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return JR || uR.children.push({
              tag: "animate",
              attributes: iR(iR({}, yR), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: iR(iR({}, tR), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), RR.push(uR), RR.push({
              tag: "path",
              attributes: iR(iR({}, GR), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: JR ? [] : [{
                tag: "animate",
                attributes: iR(iR({}, tR), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), JR || RR.push({
              tag: "path",
              attributes: iR(iR({}, GR), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: iR(iR({}, tR), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: RR
            }
          }
        }
      };
    ! function(RR, JR) {
      var GR = JR.mixoutsTo;
      IG = RR, mG = {}, Object.keys(zG).forEach((function(RR) {
        -1 === SG.indexOf(RR) && delete zG[RR]
      })), IG.forEach((function(RR) {
        var JR = RR.mixout ? RR.mixout() : {};
        if (Object.keys(JR).forEach((function(RR) {
            "function" === typeof JR[RR] && (GR[RR] = JR[RR]), "object" === wR(JR[RR]) && Object.keys(JR[RR]).forEach((function(yR) {
              GR[RR] || (GR[RR] = {}), GR[RR][yR] = JR[RR][yR]
            }))
          })), RR.hooks) {
          var yR = RR.hooks();
          Object.keys(yR).forEach((function(RR) {
            mG[RR] || (mG[RR] = []), mG[RR].push(yR[RR])
          }))
        }
        RR.provides && RR.provides(zG)
      }))
    }([GG, Oy, xy, Ny, Dy, Yy, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              Wy(), ky = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            Xy(jG("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            Cy && Cy.disconnect()
          },
          watch: function(RR) {
            var JR = RR.observeMutationsRoot;
            ky ? Ay() : Xy(jG("mutationObserverCallbacks", {
              observeMutationsRoot: JR
            }))
          }
        }
      }
    }, Fy, hy, Rt, {
      hooks: function() {
        return {
          parseNodeAttributes: function(RR, JR) {
            var GR = JR.getAttribute("data-fa-symbol"),
              yR = null !== GR && ("" === GR || GR);
            return RR.symbol = yR, RR
          }
        }
      }
    }], {
      mixoutsTo: FG
    });
    var Jt = FG.noAuto,
      Gt = FG.config,
      yt = FG.library,
      tt = FG.dom,
      ut = FG.parse,
      Zt = FG.findIconDefinition,
      qt = FG.toHtml,
      it = FG.icon,
      ft = FG.layer,
      Vt = FG.text,
      Kt = FG.counter
  },
  7916: RR => {
    RR.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);