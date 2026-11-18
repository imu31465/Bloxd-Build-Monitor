/*! For license information please see l9xvfg.fa-renderer.4567e5dd.chunk.js.LICENSE.txt */
export const id = 30;
export const ids = [30];
export const modules = {
  6016: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      FontAwesomeIcon: () => sB
    });
    var VB = dB(6008),
      yB = dB(4376),
      pB = dB.n(yB),
      lB = dB(62);

    function JB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function YB(BB, TB, dB) {
      return (TB = function(BB) {
        var TB = function(BB, TB) {
          if ("object" != typeof BB || !BB) return BB;
          var dB = BB[Symbol.toPrimitive];
          if (void 0 !== dB) {
            var VB = dB.call(BB, TB || "default");
            if ("object" != typeof VB) return VB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === TB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == typeof TB ? TB : TB + ""
      }(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function gB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function oB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? gB(Object(dB), !0).forEach((function(TB) {
          YB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : gB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function kB(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        var dB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != dB) {
          var VB, yB, pB, lB, JB = [],
            YB = !0,
            gB = !1;
          try {
            if (pB = (dB = dB.call(BB)).next, 0 === TB) {
              if (Object(dB) !== dB) return;
              YB = !1
            } else
              for (; !(YB = (VB = pB.call(dB)).done) && (JB.push(VB.value), JB.length !== TB); YB = !0);
          } catch (BB) {
            gB = !0, yB = BB
          } finally {
            try {
              if (!YB && null != dB.return && (lB = dB.return(), Object(lB) !== lB)) return
            } finally {
              if (gB) throw yB
            }
          }
          return JB
        }
      }(BB, TB) || DB(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function LB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return JB(BB)
      }(BB) || function(BB) {
        if ("undefined" != typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || DB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OB(BB) {
      return OB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, OB(BB)
    }

    function DB(BB, TB) {
      if (BB) {
        if ("string" == typeof BB) return JB(BB, TB);
        var dB = {}.toString.call(BB).slice(8, -1);
        return "Object" === dB && BB.constructor && (dB = BB.constructor.name), "Map" === dB || "Set" === dB ? Array.from(BB) : "Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB) ? JB(BB, TB) : void 0
      }
    }
    var uB;
    try {
      var HB = dB(6022);
      uB = HB.version
    } catch (zB) {
      uB = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function EB(BB) {
      var TB = BB.beat,
        dB = BB.fade,
        VB = BB.beatFade,
        yB = BB.bounce,
        pB = BB.shake,
        lB = BB.flash,
        JB = BB.spin,
        gB = BB.spinPulse,
        oB = BB.spinReverse,
        LB = BB.pulse,
        OB = BB.fixedWidth,
        DB = BB.inverse,
        HB = BB.border,
        EB = BB.listItem,
        vB = BB.flip,
        mB = BB.size,
        iB = BB.rotation,
        NB = BB.pull,
        tB = BB.swapOpacity,
        fB = BB.rotateBy,
        sB = BB.widthAuto,
        MB = function(BB, TB) {
          for (var dB = kB(BB.split("-"), 2), VB = dB[0], yB = dB[1], pB = kB(TB.split("-"), 2), lB = pB[0], JB = pB[1], YB = VB.split("."), gB = lB.split("."), oB = 0; oB < Math.max(YB.length, gB.length); oB++) {
            var LB = YB[oB] || "0",
              OB = gB[oB] || "0",
              DB = parseInt(LB, 10),
              uB = parseInt(OB, 10);
            if (DB !== uB) return DB > uB
          }
          for (var HB = 0; HB < Math.max(YB.length, gB.length); HB++) {
            var EB = YB[HB] || "0",
              vB = gB[HB] || "0";
            if (EB !== vB && EB.length !== vB.length) return EB.length < vB.length
          }
          return !(yB && !JB)
        }(uB, "7.0.0"),
        zB = YB(YB(YB(YB(YB(YB({
          "fa-beat": TB,
          "fa-fade": dB,
          "fa-beat-fade": VB,
          "fa-bounce": yB,
          "fa-shake": pB,
          "fa-flash": lB,
          "fa-spin": JB,
          "fa-spin-reverse": oB,
          "fa-spin-pulse": gB,
          "fa-pulse": LB,
          "fa-fw": OB,
          "fa-inverse": DB,
          "fa-border": HB,
          "fa-li": EB,
          "fa-flip": !0 === vB,
          "fa-flip-horizontal": "horizontal" === vB || "both" === vB,
          "fa-flip-vertical": "vertical" === vB || "both" === vB
        }, "fa-".concat(mB), "undefined" !== typeof mB && null !== mB), "fa-rotate-".concat(iB), "undefined" !== typeof iB && null !== iB && 0 !== iB), "fa-pull-".concat(NB), "undefined" !== typeof NB && null !== NB), "fa-swap-opacity", tB), "fa-rotate-by", MB && fB), "fa-width-auto", MB && sB);
      return Object.keys(zB).map((function(BB) {
        return zB[BB] ? BB : null
      })).filter((function(BB) {
        return BB
      }))
    }

    function vB(BB) {
      return TB = BB, (TB -= 0) === TB ? BB : (BB = BB.replace(/[\-_\s]+(.)?/g, (function(BB, TB) {
        return TB ? TB.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + BB.substr(1);
      var TB
    }
    var mB = ["style"];
    var iB = !1;
    try {
      iB = !0
    } catch (zB) {}

    function NB(BB) {
      return BB && "object" === OB(BB) && BB.prefix && BB.iconName && BB.icon ? BB : VB.parse.icon ? VB.parse.icon(BB) : null === BB ? null : BB && "object" === OB(BB) && BB.prefix && BB.iconName ? BB : Array.isArray(BB) && 2 === BB.length ? {
        prefix: BB[0],
        iconName: BB[1]
      } : "string" === typeof BB ? {
        prefix: "fas",
        iconName: BB
      } : void 0
    }

    function tB(BB, TB) {
      return Array.isArray(TB) && TB.length > 0 || !Array.isArray(TB) && TB ? YB({}, BB, TB) : {}
    }
    var fB = {
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
      sB = lB.forwardRef((function(BB, TB) {
        var dB = oB(oB({}, fB), BB),
          yB = dB.icon,
          pB = dB.mask,
          lB = dB.symbol,
          JB = dB.className,
          YB = dB.title,
          gB = dB.titleId,
          kB = dB.maskId,
          OB = NB(yB),
          DB = tB("classes", [].concat(LB(EB(dB)), LB((JB || "").split(" ")))),
          uB = tB("transform", "string" === typeof dB.transform ? VB.parse.transform(dB.transform) : dB.transform),
          HB = tB("mask", NB(pB)),
          vB = (0, VB.icon)(OB, oB(oB(oB(oB({}, DB), uB), HB), {}, {
            symbol: lB,
            title: YB,
            titleId: gB,
            maskId: kB
          }));
        if (!vB) return function() {
          var BB;
          !iB && console && "function" === typeof console.error && (BB = console).error.apply(BB, arguments)
        }("Could not find icon", OB), null;
        var mB = vB.abstract,
          sB = {
            ref: TB
          };
        return Object.keys(dB).forEach((function(BB) {
          fB.hasOwnProperty(BB) || (sB[BB] = dB[BB])
        })), MB(mB[0], sB)
      }));
    sB.displayName = "FontAwesomeIcon", sB.propTypes = {
      beat: pB().bool,
      border: pB().bool,
      beatFade: pB().bool,
      bounce: pB().bool,
      className: pB().string,
      fade: pB().bool,
      flash: pB().bool,
      mask: pB().oneOfType([pB().object, pB().array, pB().string]),
      maskId: pB().string,
      fixedWidth: pB().bool,
      inverse: pB().bool,
      flip: pB().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: pB().oneOfType([pB().object, pB().array, pB().string]),
      listItem: pB().bool,
      pull: pB().oneOf(["right", "left"]),
      pulse: pB().bool,
      rotation: pB().oneOf([0, 90, 180, 270]),
      rotateBy: pB().bool,
      shake: pB().bool,
      size: pB().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: pB().bool,
      spinPulse: pB().bool,
      spinReverse: pB().bool,
      symbol: pB().oneOfType([pB().bool, pB().string]),
      title: pB().string,
      titleId: pB().string,
      transform: pB().oneOfType([pB().string, pB().object]),
      swapOpacity: pB().bool,
      widthAuto: pB().bool
    };
    var MB = function BB(TB, dB) {
      var VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof dB) return dB;
      var yB = (dB.children || []).map((function(dB) {
          return BB(TB, dB)
        })),
        pB = Object.keys(dB.attributes || {}).reduce((function(BB, TB) {
          var VB = dB.attributes[TB];
          switch (TB) {
            case "class":
              BB.attrs.className = VB, delete dB.attributes.class;
              break;
            case "style":
              BB.attrs.style = VB.split(";").map((function(BB) {
                return BB.trim()
              })).filter((function(BB) {
                return BB
              })).reduce((function(BB, TB) {
                var dB, VB = TB.indexOf(":"),
                  yB = vB(TB.slice(0, VB)),
                  pB = TB.slice(VB + 1).trim();
                return yB.startsWith("webkit") ? BB[(dB = yB, dB.charAt(0).toUpperCase() + dB.slice(1))] = pB : BB[yB] = pB, BB
              }), {});
              break;
            default:
              0 === TB.indexOf("aria-") || 0 === TB.indexOf("data-") ? BB.attrs[TB.toLowerCase()] = VB : BB.attrs[vB(TB)] = VB
          }
          return BB
        }), {
          attrs: {}
        }),
        lB = VB.style,
        JB = void 0 === lB ? {} : lB,
        YB = function(BB, TB) {
          if (null == BB) return {};
          var dB, VB, yB = function(BB, TB) {
            if (null == BB) return {};
            var dB = {};
            for (var VB in BB)
              if ({}.hasOwnProperty.call(BB, VB)) {
                if (-1 !== TB.indexOf(VB)) continue;
                dB[VB] = BB[VB]
              } return dB
          }(BB, TB);
          if (Object.getOwnPropertySymbols) {
            var pB = Object.getOwnPropertySymbols(BB);
            for (VB = 0; VB < pB.length; VB++) dB = pB[VB], -1 === TB.indexOf(dB) && {}.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
          }
          return yB
        }(VB, mB);
      return pB.attrs.style = oB(oB({}, pB.attrs.style), JB), TB.apply(void 0, [dB.tag, oB(oB({}, pB.attrs), YB)].concat(LB(yB)))
    }.bind(null, lB.createElement)
  },
  4384: (BB, TB, dB) => {
    var VB = dB(4388);

    function yB() {}

    function pB() {}
    pB.resetWarningCache = yB, BB.exports = function() {
      function BB(BB, TB, dB, yB, pB, lB) {
        if (lB !== VB) {
          var JB = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw JB.name = "Invariant Violation", JB
        }
      }

      function TB() {
        return BB
      }
      BB.isRequired = BB;
      var dB = {
        array: BB,
        bigint: BB,
        bool: BB,
        func: BB,
        number: BB,
        object: BB,
        string: BB,
        symbol: BB,
        any: BB,
        arrayOf: TB,
        element: BB,
        elementType: BB,
        instanceOf: TB,
        node: BB,
        objectOf: TB,
        oneOf: TB,
        oneOfType: TB,
        shape: TB,
        exact: TB,
        checkPropTypes: pB,
        resetWarningCache: yB
      };
      return dB.PropTypes = dB, dB
    }
  },
  4376: (BB, TB, dB) => {
    BB.exports = dB(4384)()
  },
  4388: BB => {
    BB.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6008: (BB, TB, dB) => {
    function VB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function yB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, kB(VB.key), VB)
      }
    }

    function pB(BB, TB) {
      var dB = "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
      if (!dB) {
        if (Array.isArray(BB) || (dB = OB(BB)) || TB && BB && "number" == typeof BB.length) {
          dB && (BB = dB);
          var VB = 0,
            yB = function() {};
          return {
            s: yB,
            n: function() {
              return VB >= BB.length ? {
                done: !0
              } : {
                done: !1,
                value: BB[VB++]
              }
            },
            e: function(BB) {
              throw BB
            },
            f: yB
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var pB, lB = !0,
        JB = !1;
      return {
        s: function() {
          dB = dB.call(BB)
        },
        n: function() {
          var BB = dB.next();
          return lB = BB.done, BB
        },
        e: function(BB) {
          JB = !0, pB = BB
        },
        f: function() {
          try {
            lB || null == dB.return || dB.return()
          } finally {
            if (JB) throw pB
          }
        }
      }
    }

    function lB(BB, TB, dB) {
      return (TB = kB(TB)) in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function JB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function YB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? JB(Object(dB), !0).forEach((function(TB) {
          lB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : JB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function gB(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        var dB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != dB) {
          var VB, yB, pB, lB, JB = [],
            YB = !0,
            gB = !1;
          try {
            if (pB = (dB = dB.call(BB)).next, 0 === TB) {
              if (Object(dB) !== dB) return;
              YB = !1
            } else
              for (; !(YB = (VB = pB.call(dB)).done) && (JB.push(VB.value), JB.length !== TB); YB = !0);
          } catch (BB) {
            gB = !0, yB = BB
          } finally {
            try {
              if (!YB && null != dB.return && (lB = dB.return(), Object(lB) !== lB)) return
            } finally {
              if (gB) throw yB
            }
          }
          return JB
        }
      }(BB, TB) || OB(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function oB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return VB(BB)
      }(BB) || function(BB) {
        if ("undefined" != typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || OB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kB(BB) {
      var TB = function(BB, TB) {
        if ("object" != typeof BB || !BB) return BB;
        var dB = BB[Symbol.toPrimitive];
        if (void 0 !== dB) {
          var VB = dB.call(BB, TB || "default");
          if ("object" != typeof VB) return VB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === TB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == typeof TB ? TB : TB + ""
    }

    function LB(BB) {
      return LB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, LB(BB)
    }

    function OB(BB, TB) {
      if (BB) {
        if ("string" == typeof BB) return VB(BB, TB);
        var dB = {}.toString.call(BB).slice(8, -1);
        return "Object" === dB && BB.constructor && (dB = BB.constructor.name), "Map" === dB || "Set" === dB ? Array.from(BB) : "Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB) ? VB(BB, TB) : void 0
      }
    }
    dB.r(TB), dB.d(TB, {
      api: () => bd,
      config: () => Vy,
      counter: () => Ly,
      dom: () => py,
      findIconDefinition: () => Jy,
      icon: () => gy,
      layer: () => oy,
      library: () => yy,
      noAuto: () => dy,
      parse: () => ly,
      text: () => ky,
      toHtml: () => Yy
    });
    var DB = function() {},
      uB = {},
      HB = {},
      EB = null,
      vB = {
        mark: DB,
        measure: DB
      };
    try {
      "undefined" !== typeof window && (uB = window), "undefined" !== typeof document && (HB = document), "undefined" !== typeof MutationObserver && (EB = MutationObserver), "undefined" !== typeof performance && (vB = performance)
    } catch (hB) {}
    var mB, iB, NB = (uB.navigator || {}).userAgent,
      tB = void 0 === NB ? "" : NB,
      fB = uB,
      sB = HB,
      MB = EB,
      zB = vB,
      wB = (fB.document, !!sB.documentElement && !!sB.head && "function" === typeof sB.addEventListener && "function" === typeof sB.createElement),
      UB = ~tB.indexOf("MSIE") || ~tB.indexOf("Trident/"),
      FB = {
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
      KB = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      rB = "classic",
      IB = "duotone",
      cB = "sharp",
      SB = "sharp-duotone",
      PB = "chisel",
      QB = "etch",
      RB = "graphite",
      aB = "jelly",
      ZB = "jelly-duo",
      XB = "jelly-fill",
      WB = "notdog",
      hB = "notdog-duo",
      CB = "slab",
      GB = "slab-press",
      qB = "thumbprint",
      xB = "utility",
      jB = "utility-duo",
      AB = "utility-fill",
      bB = "whiteboard",
      nB = [rB, IB, cB, SB, PB, QB, RB, aB, ZB, XB, WB, hB, CB, GB, qB, xB, jB, AB, bB],
      eB = (lB(lB(lB(lB(lB(lB(lB(lB(lB(lB(mB = {}, rB, "Classic"), IB, "Duotone"), cB, "Sharp"), SB, "Sharp Duotone"), PB, "Chisel"), QB, "Etch"), RB, "Graphite"), aB, "Jelly"), ZB, "Jelly Duo"), XB, "Jelly Fill"), lB(lB(lB(lB(lB(lB(lB(lB(lB(mB, WB, "Notdog"), hB, "Notdog Duo"), CB, "Slab"), GB, "Slab Press"), qB, "Thumbprint"), xB, "Utility"), jB, "Utility Duo"), AB, "Utility Fill"), bB, "Whiteboard"), new Map([
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
      BT = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      TT = {
        fak: "kit",
        "fa-kit": "kit"
      },
      dT = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      VT = (lB(lB({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      yT = {
        "kit-duotone": "fakd"
      },
      pT = "duotone-group",
      lT = "swap-opacity",
      JT = "primary",
      YT = "secondary",
      gT = (lB(lB(lB(lB(lB(lB(lB(lB(lB(lB(iB = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), lB(lB(lB(lB(lB(lB(lB(lB(lB(iB, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), lB(lB({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      oT = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      kT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      LT = kT.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      OT = [].concat(oB(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", pT, lT, JT, YT]).concat(kT.map((function(BB) {
        return "".concat(BB, "x")
      }))).concat(LT.map((function(BB) {
        return "w-".concat(BB)
      }))),
      DT = "___FONT_AWESOME___",
      uT = "svg-inline--fa",
      HT = "data-fa-i2svg",
      ET = "data-fa-pseudo-element",
      vT = "data-prefix",
      mT = "data-icon",
      iT = "fontawesome-i2svg",
      NT = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      tT = ["::before", "::after", ":before", ":after"],
      fT = function() {
        try {
          return !0
        } catch (BB) {
          return !1
        }
      }();

    function sT(BB) {
      return new Proxy(BB, {
        get: function(BB, TB) {
          return TB in BB ? BB[TB] : BB[rB]
        }
      })
    }
    var MT = YB({}, FB);
    MT[rB] = YB(YB(YB(YB({}, {
      "fa-duotone": "duotone"
    }), FB[rB]), TT), dT);
    var zT = sT(MT),
      wT = YB({}, {
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
    wT[rB] = YB(YB(YB(YB({}, {
      duotone: "fad"
    }), wT[rB]), VT), yT);
    var UT = sT(wT),
      FT = YB({}, gT);
    FT[rB] = YB(YB({}, FT[rB]), {
      fak: "fa-kit"
    });
    var KT = sT(FT),
      rT = YB({}, {
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
    rT[rB] = YB(YB({}, rT[rB]), {
      "fa-kit": "fak"
    });
    sT(rT);
    var IT = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      cT = "fa-layers-text",
      ST = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      PT = (sT(YB({}, {
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
      QT = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      RT = [].concat(oB(["kit"]), oB(OT)),
      aT = fB.FontAwesomeConfig || {};
    if (sB && "function" === typeof sB.querySelector) {
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
      ].forEach((function(BB) {
        var TB = gB(BB, 2),
          dB = TB[0],
          VB = TB[1],
          yB = function(BB) {
            return "" === BB || "false" !== BB && ("true" === BB || BB)
          }(function(BB) {
            var TB = sB.querySelector("script[" + BB + "]");
            if (TB) return TB.getAttribute(BB)
          }(dB));
        void 0 !== yB && null !== yB && (aT[VB] = yB)
      }))
    }
    var ZT = {
      styleDefault: "solid",
      familyDefault: rB,
      cssPrefix: "fa",
      replacementClass: uT,
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
    aT.familyPrefix && (aT.cssPrefix = aT.familyPrefix);
    var XT = YB(YB({}, ZT), aT);
    XT.autoReplaceSvg || (XT.observeMutations = !1);
    var WT = {};
    Object.keys(ZT).forEach((function(BB) {
      Object.defineProperty(WT, BB, {
        enumerable: !0,
        set: function(TB) {
          XT[BB] = TB, hT.forEach((function(BB) {
            return BB(WT)
          }))
        },
        get: function() {
          return XT[BB]
        }
      })
    })), Object.defineProperty(WT, "familyPrefix", {
      enumerable: !0,
      set: function(BB) {
        XT.cssPrefix = BB, hT.forEach((function(BB) {
          return BB(WT)
        }))
      },
      get: function() {
        return XT.cssPrefix
      }
    }), fB.FontAwesomeConfig = WT;
    var hT = [];
    var CT = 16,
      GT = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function qT() {
      for (var BB = 12, TB = ""; BB-- > 0;) TB += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return TB
    }

    function xT(BB) {
      for (var TB = [], dB = (BB || []).length >>> 0; dB--;) TB[dB] = BB[dB];
      return TB
    }

    function jT(BB) {
      return BB.classList ? xT(BB.classList) : (BB.getAttribute("class") || "").split(" ").filter((function(BB) {
        return BB
      }))
    }

    function AT(BB) {
      return "".concat(BB).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function bT(BB) {
      return Object.keys(BB || {}).reduce((function(TB, dB) {
        return TB + "".concat(dB, ": ").concat(BB[dB].trim(), ";")
      }), "")
    }

    function nT(BB) {
      return BB.size !== GT.size || BB.x !== GT.x || BB.y !== GT.y || BB.rotate !== GT.rotate || BB.flipX || BB.flipY
    }

    function eT() {
      var BB = "fa",
        TB = uT,
        dB = WT.cssPrefix,
        VB = WT.replacementClass,
        yB = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (dB !== BB || VB !== TB) {
        var pB = new RegExp("\\.".concat(BB, "\\-"), "g"),
          lB = new RegExp("\\--".concat(BB, "\\-"), "g"),
          JB = new RegExp("\\.".concat(TB), "g");
        yB = yB.replace(pB, ".".concat(dB, "-")).replace(lB, "--".concat(dB, "-")).replace(JB, ".".concat(VB))
      }
      return yB
    }
    var Bd = !1;

    function Td() {
      WT.autoAddCss && !Bd && (! function(BB) {
        if (BB && wB) {
          var TB = sB.createElement("style");
          TB.setAttribute("type", "text/css"), TB.innerHTML = BB;
          for (var dB = sB.head.childNodes, VB = null, yB = dB.length - 1; yB > -1; yB--) {
            var pB = dB[yB],
              lB = (pB.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(lB) > -1 && (VB = pB)
          }
          sB.head.insertBefore(TB, VB)
        }
      }(eT()), Bd = !0)
    }
    var dd = {
        mixout: function() {
          return {
            dom: {
              css: eT,
              insertCss: Td
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              Td()
            },
            beforeI2svg: function() {
              Td()
            }
          }
        }
      },
      Vd = fB || {};
    Vd[DT] || (Vd[DT] = {}), Vd[DT].styles || (Vd[DT].styles = {}), Vd[DT].hooks || (Vd[DT].hooks = {}), Vd[DT].shims || (Vd[DT].shims = []);
    var yd = Vd[DT],
      pd = [],
      ld = function() {
        sB.removeEventListener("DOMContentLoaded", ld), Jd = 1, pd.map((function(BB) {
          return BB()
        }))
      },
      Jd = !1;

    function Yd(BB) {
      var TB = BB.tag,
        dB = BB.attributes,
        VB = void 0 === dB ? {} : dB,
        yB = BB.children,
        pB = void 0 === yB ? [] : yB;
      return "string" === typeof BB ? AT(BB) : "<".concat(TB, " ").concat(function(BB) {
        return Object.keys(BB || {}).reduce((function(TB, dB) {
          return TB + "".concat(dB, '="').concat(AT(BB[dB]), '" ')
        }), "").trim()
      }(VB), ">").concat(pB.map(Yd).join(""), "</").concat(TB, ">")
    }

    function gd(BB, TB, dB) {
      if (BB && BB[TB] && BB[TB][dB]) return {
        prefix: TB,
        iconName: dB,
        icon: BB[TB][dB]
      }
    }
    wB && ((Jd = (sB.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(sB.readyState)) || sB.addEventListener("DOMContentLoaded", ld));
    var od = function(BB, TB, dB, VB) {
      var yB, pB, lB, JB = Object.keys(BB),
        YB = JB.length,
        gB = void 0 !== VB ? function(BB, TB) {
          return function(dB, VB, yB, pB) {
            return BB.call(TB, dB, VB, yB, pB)
          }
        }(TB, VB) : TB;
      for (void 0 === dB ? (yB = 1, lB = BB[JB[0]]) : (yB = 0, lB = dB); yB < YB; yB++) lB = gB(lB, BB[pB = JB[yB]], pB, BB);
      return lB
    };

    function kd(BB) {
      return 1 !== oB(BB).length ? null : BB.codePointAt(0).toString(16)
    }

    function Ld(BB) {
      return Object.keys(BB).reduce((function(TB, dB) {
        var VB = BB[dB];
        return !!VB.icon ? TB[VB.iconName] = VB.icon : TB[dB] = VB, TB
      }), {})
    }

    function Od(BB, TB) {
      var dB = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        VB = void 0 !== dB && dB,
        yB = Ld(TB);
      "function" !== typeof yd.hooks.addPack || VB ? yd.styles[BB] = YB(YB({}, yd.styles[BB] || {}), yB) : yd.hooks.addPack(BB, Ld(TB)), "fas" === BB && Od("fa", TB)
    }
    var Dd = yd.styles,
      ud = yd.shims,
      Hd = Object.keys(KT),
      Ed = Hd.reduce((function(BB, TB) {
        return BB[TB] = Object.keys(KT[TB]), BB
      }), {}),
      vd = null,
      md = {},
      Nd = {},
      td = {},
      fd = {},
      sd = {};

    function Md(BB, TB) {
      var dB, VB = TB.split("-"),
        yB = VB[0],
        pB = VB.slice(1).join("-");
      return yB !== BB || "" === pB || (dB = pB, ~RT.indexOf(dB)) ? null : pB
    }
    var zd, wd = function() {
      var BB = function(BB) {
        return od(Dd, (function(TB, dB, VB) {
          return TB[VB] = od(dB, BB, {}), TB
        }), {})
      };
      md = BB((function(BB, TB, dB) {
        (TB[3] && (BB[TB[3]] = dB), TB[2]) && TB[2].filter((function(BB) {
          return "number" === typeof BB
        })).forEach((function(TB) {
          BB[TB.toString(16)] = dB
        }));
        return BB
      })), Nd = BB((function(BB, TB, dB) {
        (BB[dB] = dB, TB[2]) && TB[2].filter((function(BB) {
          return "string" === typeof BB
        })).forEach((function(TB) {
          BB[TB] = dB
        }));
        return BB
      })), sd = BB((function(BB, TB, dB) {
        var VB = TB[2];
        return BB[dB] = dB, VB.forEach((function(TB) {
          BB[TB] = dB
        })), BB
      }));
      var TB = "far" in Dd || WT.autoFetchSvg,
        dB = od(ud, (function(BB, dB) {
          var VB = dB[0],
            yB = dB[1],
            pB = dB[2];
          return "far" !== yB || TB || (yB = "fas"), "string" === typeof VB && (BB.names[VB] = {
            prefix: yB,
            iconName: pB
          }), "number" === typeof VB && (BB.unicodes[VB.toString(16)] = {
            prefix: yB,
            iconName: pB
          }), BB
        }), {
          names: {},
          unicodes: {}
        });
      td = dB.names, fd = dB.unicodes, vd = Id(WT.styleDefault, {
        family: WT.familyDefault
      })
    };

    function Ud(BB, TB) {
      return (md[BB] || {})[TB]
    }

    function Fd(BB, TB) {
      return (sd[BB] || {})[TB]
    }

    function Kd(BB) {
      return td[BB] || {
        prefix: null,
        iconName: null
      }
    }

    function rd() {
      return vd
    }
    zd = function(BB) {
      vd = Id(BB.styleDefault, {
        family: WT.familyDefault
      })
    }, hT.push(zd), wd();

    function Id(BB) {
      var TB = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        dB = void 0 === TB ? rB : TB,
        VB = zT[dB][BB];
      if (dB === IB && !BB) return "fad";
      var yB = UT[dB][BB] || UT[dB][VB],
        pB = BB in yd.styles ? BB : null;
      return yB || pB || null
    }

    function cd(BB) {
      return BB.sort().filter((function(BB, TB, dB) {
        return dB.indexOf(BB) === TB
      }))
    }
    var Sd = oT.concat(BT);

    function Pd(BB) {
      var TB = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        dB = void 0 !== TB && TB,
        VB = null,
        yB = cd(BB.filter((function(BB) {
          return Sd.includes(BB)
        }))),
        pB = cd(BB.filter((function(BB) {
          return !Sd.includes(BB)
        }))),
        lB = gB(yB.filter((function(BB) {
          return VB = BB, !KB.includes(BB)
        })), 1)[0],
        JB = void 0 === lB ? null : lB,
        oB = function(BB) {
          var TB = rB,
            dB = Hd.reduce((function(BB, TB) {
              return BB[TB] = "".concat(WT.cssPrefix, "-").concat(TB), BB
            }), {});
          return nB.forEach((function(VB) {
            (BB.includes(dB[VB]) || BB.some((function(BB) {
              return Ed[VB].includes(BB)
            }))) && (TB = VB)
          })), TB
        }(yB),
        kB = YB(YB({}, function(BB) {
          var TB = [],
            dB = null;
          return BB.forEach((function(BB) {
            var VB = Md(WT.cssPrefix, BB);
            VB ? dB = VB : BB && TB.push(BB)
          })), {
            iconName: dB,
            rest: TB
          }
        }(pB)), {}, {
          prefix: Id(JB, {
            family: oB
          })
        });
      return YB(YB(YB({}, kB), function(BB) {
        var TB = BB.values,
          dB = BB.family,
          VB = BB.canonical,
          yB = BB.givenPrefix,
          pB = void 0 === yB ? "" : yB,
          lB = BB.styles,
          JB = void 0 === lB ? {} : lB,
          YB = BB.config,
          gB = void 0 === YB ? {} : YB,
          oB = dB === IB,
          kB = TB.includes("fa-duotone") || TB.includes("fad"),
          LB = "duotone" === gB.familyDefault,
          OB = "fad" === VB.prefix || "fa-duotone" === VB.prefix;
        !oB && (kB || LB || OB) && (VB.prefix = "fad");
        (TB.includes("fa-brands") || TB.includes("fab")) && (VB.prefix = "fab");
        if (!VB.prefix && Qd.includes(dB)) {
          if (Object.keys(JB).find((function(BB) {
              return Rd.includes(BB)
            })) || gB.autoFetchSvg) {
            var DB = eB.get(dB).defaultShortPrefixId;
            VB.prefix = DB, VB.iconName = Fd(VB.prefix, VB.iconName) || VB.iconName
          }
        }
        "fa" !== VB.prefix && "fa" !== pB || (VB.prefix = rd() || "fas");
        return VB
      }({
        values: BB,
        family: oB,
        styles: Dd,
        config: WT,
        canonical: kB,
        givenPrefix: VB
      })), function(BB, TB, dB) {
        var VB = dB.prefix,
          yB = dB.iconName;
        if (BB || !VB || !yB) return {
          prefix: VB,
          iconName: yB
        };
        var pB = "fa" === TB ? Kd(yB) : {},
          lB = Fd(VB, yB);
        yB = pB.iconName || lB || yB, "far" !== (VB = pB.prefix || VB) || Dd.far || !Dd.fas || WT.autoFetchSvg || (VB = "fas");
        return {
          prefix: VB,
          iconName: yB
        }
      }(dB, VB, kB))
    }
    var Qd = nB.filter((function(BB) {
        return BB !== rB || BB !== IB
      })),
      Rd = Object.keys(gT).filter((function(BB) {
        return BB !== rB
      })).map((function(BB) {
        return Object.keys(gT[BB])
      })).flat();
    var ad = function() {
        return function(BB, TB, dB) {
          return TB && yB(BB.prototype, TB), dB && yB(BB, dB), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), BB
        }((function BB() {
          ! function(BB, TB) {
            if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
          }(this, BB), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var BB = this, TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
            var yB = dB.reduce(this._pullDefinitions, {});
            Object.keys(yB).forEach((function(TB) {
              BB.definitions[TB] = YB(YB({}, BB.definitions[TB] || {}), yB[TB]), Od(TB, yB[TB]);
              var dB = KT[rB][TB];
              dB && Od(dB, yB[TB]), wd()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(BB, TB) {
            var dB = TB.prefix && TB.iconName && TB.icon ? {
              0: TB
            } : TB;
            return Object.keys(dB).map((function(TB) {
              var VB = dB[TB],
                yB = VB.prefix,
                pB = VB.iconName,
                lB = VB.icon,
                JB = lB[2];
              BB[yB] || (BB[yB] = {}), JB.length > 0 && JB.forEach((function(TB) {
                "string" === typeof TB && (BB[yB][TB] = lB)
              })), BB[yB][pB] = lB
            })), BB
          }
        }])
      }(),
      Zd = [],
      Xd = {},
      Wd = {},
      hd = Object.keys(Wd);

    function Cd(BB, TB) {
      for (var dB = arguments.length, VB = new Array(dB > 2 ? dB - 2 : 0), yB = 2; yB < dB; yB++) VB[yB - 2] = arguments[yB];
      return (Xd[BB] || []).forEach((function(BB) {
        TB = BB.apply(null, [TB].concat(VB))
      })), TB
    }

    function Gd(BB) {
      for (var TB = arguments.length, dB = new Array(TB > 1 ? TB - 1 : 0), VB = 1; VB < TB; VB++) dB[VB - 1] = arguments[VB];
      (Xd[BB] || []).forEach((function(BB) {
        BB.apply(null, dB)
      }))
    }

    function qd() {
      var BB = arguments[0],
        TB = Array.prototype.slice.call(arguments, 1);
      return Wd[BB] ? Wd[BB].apply(null, TB) : void 0
    }

    function xd(BB) {
      "fa" === BB.prefix && (BB.prefix = "fas");
      var TB = BB.iconName,
        dB = BB.prefix || rd();
      if (TB) return TB = Fd(dB, TB) || TB, gd(jd.definitions, dB, TB) || gd(yd.styles, dB, TB)
    }
    var jd = new ad,
      Ad = {
        i2svg: function() {
          var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return wB ? (Gd("beforeI2svg", BB), qd("pseudoElements2svg", BB), qd("i2svg", BB)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var BB, TB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            dB = TB.autoReplaceSvgRoot;
          !1 === WT.autoReplaceSvg && (WT.autoReplaceSvg = !0), WT.observeMutations = !0, BB = function() {
            nd({
              autoReplaceSvgRoot: dB
            }), Gd("watch", TB)
          }, wB && (Jd ? setTimeout(BB, 0) : pd.push(BB))
        }
      },
      bd = {
        noAuto: function() {
          WT.autoReplaceSvg = !1, WT.observeMutations = !1, Gd("noAuto")
        },
        config: WT,
        dom: Ad,
        parse: {
          icon: function(BB) {
            if (null === BB) return null;
            if ("object" === LB(BB) && BB.prefix && BB.iconName) return {
              prefix: BB.prefix,
              iconName: Fd(BB.prefix, BB.iconName) || BB.iconName
            };
            if (Array.isArray(BB) && 2 === BB.length) {
              var TB = 0 === BB[1].indexOf("fa-") ? BB[1].slice(3) : BB[1],
                dB = Id(BB[0]);
              return {
                prefix: dB,
                iconName: Fd(dB, TB) || TB
              }
            }
            if ("string" === typeof BB && (BB.indexOf("".concat(WT.cssPrefix, "-")) > -1 || BB.match(IT))) {
              var VB = Pd(BB.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: VB.prefix || rd(),
                iconName: Fd(VB.prefix, VB.iconName) || VB.iconName
              }
            }
            if ("string" === typeof BB) {
              var yB = rd();
              return {
                prefix: yB,
                iconName: Fd(yB, BB) || BB
              }
            }
          }
        },
        library: jd,
        findIconDefinition: xd,
        toHtml: Yd
      },
      nd = function() {
        var BB = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          TB = void 0 === BB ? sB : BB;
        (Object.keys(yd.styles).length > 0 || WT.autoFetchSvg) && wB && WT.autoReplaceSvg && bd.dom.i2svg({
          node: TB
        })
      };

    function ed(BB, TB) {
      return Object.defineProperty(BB, "abstract", {
        get: TB
      }), Object.defineProperty(BB, "html", {
        get: function() {
          return BB.abstract.map((function(BB) {
            return Yd(BB)
          }))
        }
      }), Object.defineProperty(BB, "node", {
        get: function() {
          if (wB) {
            var TB = sB.createElement("div");
            return TB.innerHTML = BB.html, TB.children
          }
        }
      }), BB
    }

    function BV(BB) {
      var TB = BB.icons,
        dB = TB.main,
        VB = TB.mask,
        yB = BB.prefix,
        pB = BB.iconName,
        lB = BB.transform,
        JB = BB.symbol,
        gB = BB.maskId,
        oB = BB.extra,
        kB = BB.watchable,
        LB = void 0 !== kB && kB,
        OB = VB.found ? VB : dB,
        DB = OB.width,
        uB = OB.height,
        HB = [WT.replacementClass, pB ? "".concat(WT.cssPrefix, "-").concat(pB) : ""].filter((function(BB) {
          return -1 === oB.classes.indexOf(BB)
        })).filter((function(BB) {
          return "" !== BB || !!BB
        })).concat(oB.classes).join(" "),
        EB = {
          children: [],
          attributes: YB(YB({}, oB.attributes), {}, {
            "data-prefix": yB,
            "data-icon": pB,
            class: HB,
            role: oB.attributes.role || "img",
            viewBox: "0 0 ".concat(DB, " ").concat(uB)
          })
        };
      (function(BB) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(TB) {
          return TB in BB
        }))
      })(oB.attributes) || oB.attributes["aria-hidden"] || (EB.attributes["aria-hidden"] = "true"), LB && (EB.attributes[HT] = "");
      var vB = YB(YB({}, EB), {}, {
          prefix: yB,
          iconName: pB,
          main: dB,
          mask: VB,
          maskId: gB,
          transform: lB,
          symbol: JB,
          styles: YB({}, oB.styles)
        }),
        mB = VB.found && dB.found ? qd("generateAbstractMask", vB) || {
          children: [],
          attributes: {}
        } : qd("generateAbstractIcon", vB) || {
          children: [],
          attributes: {}
        },
        iB = mB.children,
        NB = mB.attributes;
      return vB.children = iB, vB.attributes = NB, JB ? function(BB) {
        var TB = BB.prefix,
          dB = BB.iconName,
          VB = BB.children,
          yB = BB.attributes,
          pB = BB.symbol,
          lB = !0 === pB ? "".concat(TB, "-").concat(WT.cssPrefix, "-").concat(dB) : pB;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: YB(YB({}, yB), {}, {
              id: lB
            }),
            children: VB
          }]
        }]
      }(vB) : function(BB) {
        var TB = BB.children,
          dB = BB.main,
          VB = BB.mask,
          yB = BB.attributes,
          pB = BB.styles,
          lB = BB.transform;
        if (nT(lB) && dB.found && !VB.found) {
          var JB = {
            x: dB.width / dB.height / 2,
            y: .5
          };
          yB.style = bT(YB(YB({}, pB), {}, {
            "transform-origin": "".concat(JB.x + lB.x / 16, "em ").concat(JB.y + lB.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: yB,
          children: TB
        }]
      }(vB)
    }

    function TV(BB) {
      var TB = BB.content,
        dB = BB.width,
        VB = BB.height,
        yB = BB.transform,
        pB = BB.extra,
        lB = BB.watchable,
        JB = void 0 !== lB && lB,
        gB = YB(YB({}, pB.attributes), {}, {
          class: pB.classes.join(" ")
        });
      JB && (gB[HT] = "");
      var oB = YB({}, pB.styles);
      nT(yB) && (oB.transform = function(BB) {
        var TB = BB.transform,
          dB = BB.width,
          VB = void 0 === dB ? 16 : dB,
          yB = BB.height,
          pB = void 0 === yB ? 16 : yB,
          lB = BB.startCentered,
          JB = void 0 !== lB && lB,
          YB = "";
        return YB += JB && UB ? "translate(".concat(TB.x / CT - VB / 2, "em, ").concat(TB.y / CT - pB / 2, "em) ") : JB ? "translate(calc(-50% + ".concat(TB.x / CT, "em), calc(-50% + ").concat(TB.y / CT, "em)) ") : "translate(".concat(TB.x / CT, "em, ").concat(TB.y / CT, "em) "), YB += "scale(".concat(TB.size / CT * (TB.flipX ? -1 : 1), ", ").concat(TB.size / CT * (TB.flipY ? -1 : 1), ") "), YB + "rotate(".concat(TB.rotate, "deg) ")
      }({
        transform: yB,
        startCentered: !0,
        width: dB,
        height: VB
      }), oB["-webkit-transform"] = oB.transform);
      var kB = bT(oB);
      kB.length > 0 && (gB.style = kB);
      var LB = [];
      return LB.push({
        tag: "span",
        attributes: gB,
        children: [TB]
      }), LB
    }
    var dV = yd.styles;

    function VV(BB) {
      var TB = BB[0],
        dB = BB[1],
        VB = gB(BB.slice(4), 1)[0];
      return {
        found: !0,
        width: TB,
        height: dB,
        icon: Array.isArray(VB) ? {
          tag: "g",
          attributes: {
            class: "".concat(WT.cssPrefix, "-").concat(QT.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(WT.cssPrefix, "-").concat(QT.SECONDARY),
              fill: "currentColor",
              d: VB[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(WT.cssPrefix, "-").concat(QT.PRIMARY),
              fill: "currentColor",
              d: VB[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: VB
          }
        }
      }
    }
    var yV = {
      found: !1,
      width: 512,
      height: 512
    };

    function pV(BB, TB) {
      var dB = TB;
      return "fa" === TB && null !== WT.styleDefault && (TB = rd()), new Promise((function(VB, yB) {
        if ("fa" === dB) {
          var pB = Kd(BB) || {};
          BB = pB.iconName || BB, TB = pB.prefix || TB
        }
        if (BB && TB && dV[TB] && dV[TB][BB]) return VB(VV(dV[TB][BB]));
        ! function(BB, TB) {
          fT || WT.showMissingIcons || !BB || console.error('Icon with name "'.concat(BB, '" and prefix "').concat(TB, '" is missing.'))
        }(BB, TB), VB(YB(YB({}, yV), {}, {
          icon: WT.showMissingIcons && BB && qd("missingIconAbstract") || {}
        }))
      }))
    }
    var lV = function() {},
      JV = WT.measurePerformance && zB && zB.mark && zB.measure ? zB : {
        mark: lV,
        measure: lV
      },
      YV = 'FA "7.2.0"',
      gV = function(BB) {
        JV.mark("".concat(YV, " ").concat(BB, " ends")), JV.measure("".concat(YV, " ").concat(BB), "".concat(YV, " ").concat(BB, " begins"), "".concat(YV, " ").concat(BB, " ends"))
      },
      oV = function(BB) {
        return JV.mark("".concat(YV, " ").concat(BB, " begins")),
          function() {
            return gV(BB)
          }
      },
      kV = function() {};

    function LV(BB) {
      return "string" === typeof(BB.getAttribute ? BB.getAttribute(HT) : null)
    }

    function OV(BB) {
      return sB.createElementNS("http://www.w3.org/2000/svg", BB)
    }

    function DV(BB) {
      return sB.createElement(BB)
    }

    function uV(BB) {
      var TB = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        dB = void 0 === TB ? "svg" === BB.tag ? OV : DV : TB;
      if ("string" === typeof BB) return sB.createTextNode(BB);
      var VB = dB(BB.tag);
      return Object.keys(BB.attributes || []).forEach((function(TB) {
        VB.setAttribute(TB, BB.attributes[TB])
      })), (BB.children || []).forEach((function(BB) {
        VB.appendChild(uV(BB, {
          ceFn: dB
        }))
      })), VB
    }
    var HV = {
      replace: function(BB) {
        var TB = BB[0];
        if (TB.parentNode)
          if (BB[1].forEach((function(BB) {
              TB.parentNode.insertBefore(uV(BB), TB)
            })), null === TB.getAttribute(HT) && WT.keepOriginalSource) {
            var dB = sB.createComment(function(BB) {
              var TB = " ".concat(BB.outerHTML, " ");
              return "".concat(TB, "Font Awesome fontawesome.com ")
            }(TB));
            TB.parentNode.replaceChild(dB, TB)
          } else TB.remove()
      },
      nest: function(BB) {
        var TB = BB[0],
          dB = BB[1];
        if (~jT(TB).indexOf(WT.replacementClass)) return HV.replace(BB);
        var VB = new RegExp("".concat(WT.cssPrefix, "-.*"));
        if (delete dB[0].attributes.id, dB[0].attributes.class) {
          var yB = dB[0].attributes.class.split(" ").reduce((function(BB, TB) {
            return TB === WT.replacementClass || TB.match(VB) ? BB.toSvg.push(TB) : BB.toNode.push(TB), BB
          }), {
            toNode: [],
            toSvg: []
          });
          dB[0].attributes.class = yB.toSvg.join(" "), 0 === yB.toNode.length ? TB.removeAttribute("class") : TB.setAttribute("class", yB.toNode.join(" "))
        }
        var pB = dB.map((function(BB) {
          return Yd(BB)
        })).join("\n");
        TB.setAttribute(HT, ""), TB.innerHTML = pB
      }
    };

    function EV(BB) {
      BB()
    }

    function vV(BB, TB) {
      var dB = "function" === typeof TB ? TB : kV;
      if (0 === BB.length) dB();
      else {
        var VB = EV;
        "async" === WT.mutateApproach && (VB = fB.requestAnimationFrame || EV), VB((function() {
          var TB = !0 === WT.autoReplaceSvg ? HV.replace : HV[WT.autoReplaceSvg] || HV.replace,
            VB = oV("mutate");
          BB.map(TB), VB(), dB()
        }))
      }
    }
    var mV = !1;

    function iV() {
      mV = !0
    }

    function NV() {
      mV = !1
    }
    var tV = null;

    function fV(BB) {
      if (MB && WT.observeMutations) {
        var TB = BB.treeCallback,
          dB = void 0 === TB ? kV : TB,
          VB = BB.nodeCallback,
          yB = void 0 === VB ? kV : VB,
          pB = BB.pseudoElementsCallback,
          lB = void 0 === pB ? kV : pB,
          JB = BB.observeMutationsRoot,
          YB = void 0 === JB ? sB : JB;
        tV = new MB((function(BB) {
          if (!mV) {
            var TB = rd();
            xT(BB).forEach((function(BB) {
              if ("childList" === BB.type && BB.addedNodes.length > 0 && !LV(BB.addedNodes[0]) && (WT.searchPseudoElements && lB(BB.target), dB(BB.target)), "attributes" === BB.type && BB.target.parentNode && WT.searchPseudoElements && lB([BB.target], !0), "attributes" === BB.type && LV(BB.target) && ~PT.indexOf(BB.attributeName))
                if ("class" === BB.attributeName && function(BB) {
                    var TB = BB.getAttribute ? BB.getAttribute(vT) : null,
                      dB = BB.getAttribute ? BB.getAttribute(mT) : null;
                    return TB && dB
                  }(BB.target)) {
                  var VB = Pd(jT(BB.target)),
                    pB = VB.prefix,
                    JB = VB.iconName;
                  BB.target.setAttribute(vT, pB || TB), JB && BB.target.setAttribute(mT, JB)
                } else(YB = BB.target) && YB.classList && YB.classList.contains && YB.classList.contains(WT.replacementClass) && yB(BB.target);
              var YB
            }))
          }
        })), wB && tV.observe(YB, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function sV(BB) {
      var TB, dB, VB = BB.getAttribute("data-prefix"),
        yB = BB.getAttribute("data-icon"),
        pB = void 0 !== BB.innerText ? BB.innerText.trim() : "",
        lB = Pd(jT(BB));
      return lB.prefix || (lB.prefix = rd()), VB && yB && (lB.prefix = VB, lB.iconName = yB), lB.iconName && lB.prefix || (lB.prefix && pB.length > 0 && (lB.iconName = (TB = lB.prefix, dB = BB.innerText, (Nd[TB] || {})[dB] || Ud(lB.prefix, kd(BB.innerText)))), !lB.iconName && WT.autoFetchSvg && BB.firstChild && BB.firstChild.nodeType === Node.TEXT_NODE && (lB.iconName = BB.firstChild.data)), lB
    }

    function MV(BB) {
      var TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        dB = sV(BB),
        VB = dB.iconName,
        yB = dB.prefix,
        pB = dB.rest,
        lB = function(BB) {
          return xT(BB.attributes).reduce((function(BB, TB) {
            return "class" !== BB.name && "style" !== BB.name && (BB[TB.name] = TB.value), BB
          }), {})
        }(BB),
        JB = Cd("parseNodeAttributes", {}, BB),
        gB = TB.styleParser ? function(BB) {
          var TB = BB.getAttribute("style"),
            dB = [];
          return TB && (dB = TB.split(";").reduce((function(BB, TB) {
            var dB = TB.split(":"),
              VB = dB[0],
              yB = dB.slice(1);
            return VB && yB.length > 0 && (BB[VB] = yB.join(":").trim()), BB
          }), {})), dB
        }(BB) : [];
      return YB({
        iconName: VB,
        prefix: yB,
        transform: GT,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: pB,
          styles: gB,
          attributes: lB
        }
      }, JB)
    }
    var zV = yd.styles;

    function wV(BB) {
      var TB = "nest" === WT.autoReplaceSvg ? MV(BB, {
        styleParser: !1
      }) : MV(BB);
      return ~TB.extra.classes.indexOf(cT) ? qd("generateLayersText", BB, TB) : qd("generateSvgReplacementMutation", BB, TB)
    }

    function UV(BB) {
      var TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!wB) return Promise.resolve();
      var dB = sB.documentElement.classList,
        VB = function(BB) {
          return dB.add("".concat(iT, "-").concat(BB))
        },
        yB = function(BB) {
          return dB.remove("".concat(iT, "-").concat(BB))
        },
        pB = WT.autoFetchSvg ? [].concat(oB(BT), oB(oT)) : KB.concat(Object.keys(zV));
      pB.includes("fa") || pB.push("fa");
      var lB = [".".concat(cT, ":not([").concat(HT, "])")].concat(pB.map((function(BB) {
        return ".".concat(BB, ":not([").concat(HT, "])")
      }))).join(", ");
      if (0 === lB.length) return Promise.resolve();
      var JB = [];
      try {
        JB = xT(BB.querySelectorAll(lB))
      } catch (kB) {}
      if (!(JB.length > 0)) return Promise.resolve();
      VB("pending"), yB("complete");
      var YB = oV("onTree"),
        gB = JB.reduce((function(BB, TB) {
          try {
            var dB = wV(TB);
            dB && BB.push(dB)
          } catch (kB) {
            fT || "MissingIcon" === kB.name && console.error(kB)
          }
          return BB
        }), []);
      return new Promise((function(BB, dB) {
        Promise.all(gB).then((function(dB) {
          vV(dB, (function() {
            VB("active"), VB("complete"), yB("pending"), "function" === typeof TB && TB(), YB(), BB()
          }))
        })).catch((function(BB) {
          YB(), dB(BB)
        }))
      }))
    }

    function FV(BB) {
      var TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      wV(BB).then((function(BB) {
        BB && vV([BB], TB)
      }))
    }
    var KV = function(BB) {
        var TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          dB = TB.transform,
          VB = void 0 === dB ? GT : dB,
          yB = TB.symbol,
          pB = void 0 !== yB && yB,
          lB = TB.mask,
          JB = void 0 === lB ? null : lB,
          gB = TB.maskId,
          oB = void 0 === gB ? null : gB,
          kB = TB.classes,
          LB = void 0 === kB ? [] : kB,
          OB = TB.attributes,
          DB = void 0 === OB ? {} : OB,
          uB = TB.styles,
          HB = void 0 === uB ? {} : uB;
        if (BB) {
          var EB = BB.prefix,
            vB = BB.iconName,
            mB = BB.icon;
          return ed(YB({
            type: "icon"
          }, BB), (function() {
            return Gd("beforeDOMElementCreation", {
              iconDefinition: BB,
              params: TB
            }), BV({
              icons: {
                main: VV(mB),
                mask: JB ? VV(JB.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: EB,
              iconName: vB,
              transform: YB(YB({}, GT), VB),
              symbol: pB,
              maskId: oB,
              extra: {
                attributes: DB,
                styles: HB,
                classes: LB
              }
            })
          }))
        }
      },
      rV = {
        mixout: function() {
          return {
            icon: (BB = KV, function(TB) {
              var dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                VB = (TB || {}).icon ? TB : xd(TB || {}),
                yB = dB.mask;
              return yB && (yB = (yB || {}).icon ? yB : xd(yB || {})), BB(VB, YB(YB({}, dB), {}, {
                mask: yB
              }))
            })
          };
          var BB
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(BB) {
              return BB.treeCallback = UV, BB.nodeCallback = FV, BB
            }
          }
        },
        provides: function(BB) {
          BB.i2svg = function(BB) {
            var TB = BB.node,
              dB = void 0 === TB ? sB : TB,
              VB = BB.callback;
            return UV(dB, void 0 === VB ? function() {} : VB)
          }, BB.generateSvgReplacementMutation = function(BB, TB) {
            var dB = TB.iconName,
              VB = TB.prefix,
              yB = TB.transform,
              pB = TB.symbol,
              lB = TB.mask,
              JB = TB.maskId,
              YB = TB.extra;
            return new Promise((function(TB, oB) {
              Promise.all([pV(dB, VB), lB.iconName ? pV(lB.iconName, lB.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(lB) {
                var oB = gB(lB, 2),
                  kB = oB[0],
                  LB = oB[1];
                TB([BB, BV({
                  icons: {
                    main: kB,
                    mask: LB
                  },
                  prefix: VB,
                  iconName: dB,
                  transform: yB,
                  symbol: pB,
                  maskId: JB,
                  extra: YB,
                  watchable: !0
                })])
              })).catch(oB)
            }))
          }, BB.generateAbstractIcon = function(BB) {
            var TB, dB = BB.children,
              VB = BB.attributes,
              yB = BB.main,
              pB = BB.transform,
              lB = bT(BB.styles);
            return lB.length > 0 && (VB.style = lB), nT(pB) && (TB = qd("generateAbstractTransformGrouping", {
              main: yB,
              transform: pB,
              containerWidth: yB.width,
              iconWidth: yB.width
            })), dB.push(TB || yB.icon), {
              children: dB,
              attributes: VB
            }
          }
        }
      },
      IV = {
        mixout: function() {
          return {
            layer: function(BB) {
              var TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                dB = TB.classes,
                VB = void 0 === dB ? [] : dB;
              return ed({
                type: "layer"
              }, (function() {
                Gd("beforeDOMElementCreation", {
                  assembler: BB,
                  params: TB
                });
                var dB = [];
                return BB((function(BB) {
                  Array.isArray(BB) ? BB.map((function(BB) {
                    dB = dB.concat(BB.abstract)
                  })) : dB = dB.concat(BB.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(WT.cssPrefix, "-layers")].concat(oB(VB)).join(" ")
                  },
                  children: dB
                }]
              }))
            }
          }
        }
      },
      cV = {
        mixout: function() {
          return {
            counter: function(BB) {
              var TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                dB = TB.title,
                VB = void 0 === dB ? null : dB,
                yB = TB.classes,
                pB = void 0 === yB ? [] : yB,
                lB = TB.attributes,
                JB = void 0 === lB ? {} : lB,
                gB = TB.styles,
                kB = void 0 === gB ? {} : gB;
              return ed({
                type: "counter",
                content: BB
              }, (function() {
                return Gd("beforeDOMElementCreation", {
                    content: BB,
                    params: TB
                  }),
                  function(BB) {
                    var TB = BB.content,
                      dB = BB.extra,
                      VB = YB(YB({}, dB.attributes), {}, {
                        class: dB.classes.join(" ")
                      }),
                      yB = bT(dB.styles);
                    yB.length > 0 && (VB.style = yB);
                    var pB = [];
                    return pB.push({
                      tag: "span",
                      attributes: VB,
                      children: [TB]
                    }), pB
                  }({
                    content: BB.toString(),
                    title: VB,
                    extra: {
                      attributes: JB,
                      styles: kB,
                      classes: ["".concat(WT.cssPrefix, "-layers-counter")].concat(oB(pB))
                    }
                  })
              }))
            }
          }
        }
      },
      SV = {
        mixout: function() {
          return {
            text: function(BB) {
              var TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                dB = TB.transform,
                VB = void 0 === dB ? GT : dB,
                yB = TB.classes,
                pB = void 0 === yB ? [] : yB,
                lB = TB.attributes,
                JB = void 0 === lB ? {} : lB,
                gB = TB.styles,
                kB = void 0 === gB ? {} : gB;
              return ed({
                type: "text",
                content: BB
              }, (function() {
                return Gd("beforeDOMElementCreation", {
                  content: BB,
                  params: TB
                }), TV({
                  content: BB,
                  transform: YB(YB({}, GT), VB),
                  extra: {
                    attributes: JB,
                    styles: kB,
                    classes: ["".concat(WT.cssPrefix, "-layers-text")].concat(oB(pB))
                  }
                })
              }))
            }
          }
        },
        provides: function(BB) {
          BB.generateLayersText = function(BB, TB) {
            var dB = TB.transform,
              VB = TB.extra,
              yB = null,
              pB = null;
            if (UB) {
              var lB = parseInt(getComputedStyle(BB).fontSize, 10),
                JB = BB.getBoundingClientRect();
              yB = JB.width / lB, pB = JB.height / lB
            }
            return Promise.resolve([BB, TV({
              content: BB.innerHTML,
              width: yB,
              height: pB,
              transform: dB,
              extra: VB,
              watchable: !0
            })])
          }
        }
      },
      PV = new RegExp('"', "ug"),
      QV = [1105920, 1112319],
      RV = YB(YB(YB(YB({}, {
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
      aV = Object.keys(RV).reduce((function(BB, TB) {
        return BB[TB.toLowerCase()] = RV[TB], BB
      }), {}),
      ZV = Object.keys(aV).reduce((function(BB, TB) {
        var dB = aV[TB];
        return BB[TB] = dB[900] || oB(Object.entries(dB))[0][1], BB
      }), {});

    function XV(BB, TB) {
      var dB = "".concat("data-fa-pseudo-element-pending").concat(TB.replace(":", "-"));
      return new Promise((function(VB, yB) {
        if (null !== BB.getAttribute(dB)) return VB();
        var pB = xT(BB.children).filter((function(BB) {
            return BB.getAttribute(ET) === TB
          }))[0],
          lB = fB.getComputedStyle(BB, TB),
          JB = lB.getPropertyValue("font-family"),
          gB = JB.match(ST),
          kB = lB.getPropertyValue("font-weight"),
          LB = lB.getPropertyValue("content");
        if (pB && !gB) return BB.removeChild(pB), VB();
        if (gB && "none" !== LB && "" !== LB) {
          var OB = lB.getPropertyValue("content"),
            DB = function(BB, TB) {
              var dB = BB.replace(/^['"]|['"]$/g, "").toLowerCase(),
                VB = parseInt(TB),
                yB = isNaN(VB) ? "normal" : VB;
              return (aV[dB] || {})[yB] || ZV[dB]
            }(JB, kB),
            uB = function(BB) {
              return kd(oB(BB.replace(PV, ""))[0] || "")
            }(OB),
            HB = gB[0].startsWith("FontAwesome"),
            EB = function(BB) {
              var TB = BB.getPropertyValue("font-feature-settings").includes("ss01"),
                dB = BB.getPropertyValue("content").replace(PV, ""),
                VB = dB.codePointAt(0),
                yB = VB >= QV[0] && VB <= QV[1],
                pB = 2 === dB.length && dB[0] === dB[1];
              return yB || pB || TB
            }(lB),
            vB = Ud(DB, uB),
            mB = vB;
          if (HB) {
            var iB = function(BB) {
              var TB = fd[BB],
                dB = Ud("fas", BB);
              return TB || (dB ? {
                prefix: "fas",
                iconName: dB
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(uB);
            iB.iconName && iB.prefix && (vB = iB.iconName, DB = iB.prefix)
          }
          if (!vB || EB || pB && pB.getAttribute(vT) === DB && pB.getAttribute(mT) === mB) VB();
          else {
            BB.setAttribute(dB, mB), pB && BB.removeChild(pB);
            var NB = {
                iconName: null,
                prefix: null,
                transform: GT,
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
              tB = NB.extra;
            tB.attributes[ET] = TB, pV(vB, DB).then((function(yB) {
              var pB = BV(YB(YB({}, NB), {}, {
                  icons: {
                    main: yB,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: DB,
                  iconName: mB,
                  extra: tB,
                  watchable: !0
                })),
                lB = sB.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === TB ? BB.insertBefore(lB, BB.firstChild) : BB.appendChild(lB), lB.outerHTML = pB.map((function(BB) {
                return Yd(BB)
              })).join("\n"), BB.removeAttribute(dB), VB()
            })).catch(yB)
          }
        } else VB()
      }))
    }

    function WV(BB) {
      return Promise.all([XV(BB, "::before"), XV(BB, "::after")])
    }

    function hV(BB) {
      return BB.parentNode !== document.head && !~NT.indexOf(BB.tagName.toUpperCase()) && !BB.getAttribute(ET) && (!BB.parentNode || "svg" !== BB.parentNode.tagName)
    }
    var CV = function(BB) {
        return !!BB && tT.some((function(TB) {
          return BB.includes(TB)
        }))
      },
      GV = function(BB) {
        if (!BB) return [];
        var TB = new Set,
          dB = BB.split(/,(?![^()]*\))/).map((function(BB) {
            return BB.trim()
          }));
        dB = dB.flatMap((function(BB) {
          return BB.includes("(") ? BB : BB.split(",").map((function(BB) {
            return BB.trim()
          }))
        }));
        var VB, yB = pB(dB);
        try {
          for (yB.s(); !(VB = yB.n()).done;) {
            var lB = VB.value;
            if (CV(lB)) {
              var JB = tT.reduce((function(BB, TB) {
                return BB.replace(TB, "")
              }), lB);
              "" !== JB && "*" !== JB && TB.add(JB)
            }
          }
        } catch (YB) {
          yB.e(YB)
        } finally {
          yB.f()
        }
        return TB
      };

    function qV(BB) {
      if (wB) {
        var TB;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) TB = BB;
        else if (WT.searchPseudoElementsFullScan) TB = BB.querySelectorAll("*");
        else {
          var dB, VB = new Set,
            yB = pB(document.styleSheets);
          try {
            for (yB.s(); !(dB = yB.n()).done;) {
              var lB = dB.value;
              try {
                var JB, YB = pB(lB.cssRules);
                try {
                  for (YB.s(); !(JB = YB.n()).done;) {
                    var gB, oB = JB.value,
                      kB = pB(GV(oB.selectorText));
                    try {
                      for (kB.s(); !(gB = kB.n()).done;) {
                        var LB = gB.value;
                        VB.add(LB)
                      }
                    } catch (DB) {
                      kB.e(DB)
                    } finally {
                      kB.f()
                    }
                  }
                } catch (DB) {
                  YB.e(DB)
                } finally {
                  YB.f()
                }
              } catch (uB) {
                WT.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(lB.href, " (").concat(uB.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (DB) {
            yB.e(DB)
          } finally {
            yB.f()
          }
          if (!VB.size) return;
          var OB = Array.from(VB).join(", ");
          try {
            TB = BB.querySelectorAll(OB)
          } catch (HB) {}
        }
        return new Promise((function(BB, dB) {
          var VB = xT(TB).filter(hV).map(WV),
            yB = oV("searchPseudoElements");
          iV(), Promise.all(VB).then((function() {
            yB(), NV(), BB()
          })).catch((function() {
            yB(), NV(), dB()
          }))
        }))
      }
    }
    var xV = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(BB) {
              return BB.pseudoElementsCallback = qV, BB
            }
          }
        },
        provides: function(BB) {
          BB.pseudoElements2svg = function(BB) {
            var TB = BB.node,
              dB = void 0 === TB ? sB : TB;
            WT.searchPseudoElements && qV(dB)
          }
        }
      },
      jV = !1,
      AV = function(BB) {
        return BB.toLowerCase().split(" ").reduce((function(BB, TB) {
          var dB = TB.toLowerCase().split("-"),
            VB = dB[0],
            yB = dB.slice(1).join("-");
          if (VB && "h" === yB) return BB.flipX = !0, BB;
          if (VB && "v" === yB) return BB.flipY = !0, BB;
          if (yB = parseFloat(yB), isNaN(yB)) return BB;
          switch (VB) {
            case "grow":
              BB.size = BB.size + yB;
              break;
            case "shrink":
              BB.size = BB.size - yB;
              break;
            case "left":
              BB.x = BB.x - yB;
              break;
            case "right":
              BB.x = BB.x + yB;
              break;
            case "up":
              BB.y = BB.y - yB;
              break;
            case "down":
              BB.y = BB.y + yB;
              break;
            case "rotate":
              BB.rotate = BB.rotate + yB
          }
          return BB
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      bV = {
        mixout: function() {
          return {
            parse: {
              transform: function(BB) {
                return AV(BB)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(BB, TB) {
              var dB = TB.getAttribute("data-fa-transform");
              return dB && (BB.transform = AV(dB)), BB
            }
          }
        },
        provides: function(BB) {
          BB.generateAbstractTransformGrouping = function(BB) {
            var TB = BB.main,
              dB = BB.transform,
              VB = BB.containerWidth,
              yB = BB.iconWidth,
              pB = {
                transform: "translate(".concat(VB / 2, " 256)")
              },
              lB = "translate(".concat(32 * dB.x, ", ").concat(32 * dB.y, ") "),
              JB = "scale(".concat(dB.size / 16 * (dB.flipX ? -1 : 1), ", ").concat(dB.size / 16 * (dB.flipY ? -1 : 1), ") "),
              gB = "rotate(".concat(dB.rotate, " 0 0)"),
              oB = {
                outer: pB,
                inner: {
                  transform: "".concat(lB, " ").concat(JB, " ").concat(gB)
                },
                path: {
                  transform: "translate(".concat(yB / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: YB({}, oB.outer),
              children: [{
                tag: "g",
                attributes: YB({}, oB.inner),
                children: [{
                  tag: TB.icon.tag,
                  children: TB.icon.children,
                  attributes: YB(YB({}, TB.icon.attributes), oB.path)
                }]
              }]
            }
          }
        }
      },
      nV = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function eV(BB) {
      var TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return BB.attributes && (BB.attributes.fill || TB) && (BB.attributes.fill = "black"), BB
    }
    var By = {
        hooks: function() {
          return {
            parseNodeAttributes: function(BB, TB) {
              var dB = TB.getAttribute("data-fa-mask"),
                VB = dB ? Pd(dB.split(" ").map((function(BB) {
                  return BB.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return VB.prefix || (VB.prefix = rd()), BB.mask = VB, BB.maskId = TB.getAttribute("data-fa-mask-id"), BB
            }
          }
        },
        provides: function(BB) {
          BB.generateAbstractMask = function(BB) {
            var TB, dB = BB.children,
              VB = BB.attributes,
              yB = BB.main,
              pB = BB.mask,
              lB = BB.maskId,
              JB = BB.transform,
              gB = yB.width,
              oB = yB.icon,
              kB = pB.width,
              LB = pB.icon,
              OB = function(BB) {
                var TB = BB.transform,
                  dB = BB.containerWidth,
                  VB = BB.iconWidth,
                  yB = {
                    transform: "translate(".concat(dB / 2, " 256)")
                  },
                  pB = "translate(".concat(32 * TB.x, ", ").concat(32 * TB.y, ") "),
                  lB = "scale(".concat(TB.size / 16 * (TB.flipX ? -1 : 1), ", ").concat(TB.size / 16 * (TB.flipY ? -1 : 1), ") "),
                  JB = "rotate(".concat(TB.rotate, " 0 0)");
                return {
                  outer: yB,
                  inner: {
                    transform: "".concat(pB, " ").concat(lB, " ").concat(JB)
                  },
                  path: {
                    transform: "translate(".concat(VB / 2 * -1, " -256)")
                  }
                }
              }({
                transform: JB,
                containerWidth: kB,
                iconWidth: gB
              }),
              DB = {
                tag: "rect",
                attributes: YB(YB({}, nV), {}, {
                  fill: "white"
                })
              },
              uB = oB.children ? {
                children: oB.children.map(eV)
              } : {},
              HB = {
                tag: "g",
                attributes: YB({}, OB.inner),
                children: [eV(YB({
                  tag: oB.tag,
                  attributes: YB(YB({}, oB.attributes), OB.path)
                }, uB))]
              },
              EB = {
                tag: "g",
                attributes: YB({}, OB.outer),
                children: [HB]
              },
              vB = "mask-".concat(lB || qT()),
              mB = "clip-".concat(lB || qT()),
              iB = {
                tag: "mask",
                attributes: YB(YB({}, nV), {}, {
                  id: vB,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [DB, EB]
              },
              NB = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: mB
                  },
                  children: (TB = LB, "g" === TB.tag ? TB.children : [TB])
                }, iB]
              };
            return dB.push(NB, {
              tag: "rect",
              attributes: YB({
                fill: "currentColor",
                "clip-path": "url(#".concat(mB, ")"),
                mask: "url(#".concat(vB, ")")
              }, nV)
            }), {
              children: dB,
              attributes: VB
            }
          }
        }
      },
      Ty = {
        provides: function(BB) {
          var TB = !1;
          fB.matchMedia && (TB = fB.matchMedia("(prefers-reduced-motion: reduce)").matches), BB.missingIconAbstract = function() {
            var BB = [],
              dB = {
                fill: "currentColor"
              },
              VB = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            BB.push({
              tag: "path",
              attributes: YB(YB({}, dB), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var yB = YB(YB({}, VB), {}, {
                attributeName: "opacity"
              }),
              pB = {
                tag: "circle",
                attributes: YB(YB({}, dB), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return TB || pB.children.push({
              tag: "animate",
              attributes: YB(YB({}, VB), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: YB(YB({}, yB), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), BB.push(pB), BB.push({
              tag: "path",
              attributes: YB(YB({}, dB), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: TB ? [] : [{
                tag: "animate",
                attributes: YB(YB({}, yB), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), TB || BB.push({
              tag: "path",
              attributes: YB(YB({}, dB), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: YB(YB({}, yB), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: BB
            }
          }
        }
      };
    ! function(BB, TB) {
      var dB = TB.mixoutsTo;
      Zd = BB, Xd = {}, Object.keys(Wd).forEach((function(BB) {
        -1 === hd.indexOf(BB) && delete Wd[BB]
      })), Zd.forEach((function(BB) {
        var TB = BB.mixout ? BB.mixout() : {};
        if (Object.keys(TB).forEach((function(BB) {
            "function" === typeof TB[BB] && (dB[BB] = TB[BB]), "object" === LB(TB[BB]) && Object.keys(TB[BB]).forEach((function(VB) {
              dB[BB] || (dB[BB] = {}), dB[BB][VB] = TB[BB][VB]
            }))
          })), BB.hooks) {
          var VB = BB.hooks();
          Object.keys(VB).forEach((function(BB) {
            Xd[BB] || (Xd[BB] = []), Xd[BB].push(VB[BB])
          }))
        }
        BB.provides && BB.provides(Wd)
      }))
    }([dd, rV, IV, cV, SV, xV, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              iV(), jV = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            fV(Cd("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            tV && tV.disconnect()
          },
          watch: function(BB) {
            var TB = BB.observeMutationsRoot;
            jV ? NV() : fV(Cd("mutationObserverCallbacks", {
              observeMutationsRoot: TB
            }))
          }
        }
      }
    }, bV, By, Ty, {
      hooks: function() {
        return {
          parseNodeAttributes: function(BB, TB) {
            var dB = TB.getAttribute("data-fa-symbol"),
              VB = null !== dB && ("" === dB || dB);
            return BB.symbol = VB, BB
          }
        }
      }
    }], {
      mixoutsTo: bd
    });
    var dy = bd.noAuto,
      Vy = bd.config,
      yy = bd.library,
      py = bd.dom,
      ly = bd.parse,
      Jy = bd.findIconDefinition,
      Yy = bd.toHtml,
      gy = bd.icon,
      oy = bd.layer,
      ky = bd.text,
      Ly = bd.counter
  },
  6022: BB => {
    BB.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);