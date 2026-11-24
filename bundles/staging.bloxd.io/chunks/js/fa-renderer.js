/*! For license information please see 7zvlu.fa-renderer.8ca83bb9.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6630: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      FontAwesomeIcon: () => EB
    });
    var QB = zB(6625),
      nB = zB(5045),
      dB = zB.n(nB),
      IB = zB(62);

    function NB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function uB(BB, jB, zB) {
      return (jB = function(BB) {
        var jB = function(BB, jB) {
          if ("object" != typeof BB || !BB) return BB;
          var zB = BB[Symbol.toPrimitive];
          if (void 0 !== zB) {
            var QB = zB.call(BB, jB || "default");
            if ("object" != typeof QB) return QB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === jB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == typeof jB ? jB : jB + ""
      }(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function UB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function aB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? UB(Object(zB), !0).forEach((function(jB) {
          uB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : UB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function pB(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        var zB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != zB) {
          var QB, nB, dB, IB, NB = [],
            uB = !0,
            UB = !1;
          try {
            if (dB = (zB = zB.call(BB)).next, 0 === jB) {
              if (Object(zB) !== zB) return;
              uB = !1
            } else
              for (; !(uB = (QB = dB.call(zB)).done) && (NB.push(QB.value), NB.length !== jB); uB = !0);
          } catch (BB) {
            UB = !0, nB = BB
          } finally {
            try {
              if (!uB && null != zB.return && (IB = zB.return(), Object(IB) !== IB)) return
            } finally {
              if (UB) throw nB
            }
          }
          return NB
        }
      }(BB, jB) || JB(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return NB(BB)
      }(BB) || function(BB) {
        if ("undefined" != typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || JB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sB(BB) {
      return sB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, sB(BB)
    }

    function JB(BB, jB) {
      if (BB) {
        if ("string" == typeof BB) return NB(BB, jB);
        var zB = {}.toString.call(BB).slice(8, -1);
        return "Object" === zB && BB.constructor && (zB = BB.constructor.name), "Map" === zB || "Set" === zB ? Array.from(BB) : "Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB) ? NB(BB, jB) : void 0
      }
    }
    var mB;
    try {
      var yB = zB(6637);
      mB = yB.version
    } catch (qB) {
      mB = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function kB(BB) {
      var jB = BB.beat,
        zB = BB.fade,
        QB = BB.beatFade,
        nB = BB.bounce,
        dB = BB.shake,
        IB = BB.flash,
        NB = BB.spin,
        UB = BB.spinPulse,
        aB = BB.spinReverse,
        rB = BB.pulse,
        sB = BB.fixedWidth,
        JB = BB.inverse,
        yB = BB.border,
        kB = BB.listItem,
        GB = BB.flip,
        LB = BB.size,
        gB = BB.rotation,
        tB = BB.pull,
        SB = BB.swapOpacity,
        MB = BB.rotateBy,
        EB = BB.widthAuto,
        iB = function(BB, jB) {
          for (var zB = pB(BB.split("-"), 2), QB = zB[0], nB = zB[1], dB = pB(jB.split("-"), 2), IB = dB[0], NB = dB[1], uB = QB.split("."), UB = IB.split("."), aB = 0; aB < Math.max(uB.length, UB.length); aB++) {
            var rB = uB[aB] || "0",
              sB = UB[aB] || "0",
              JB = parseInt(rB, 10),
              mB = parseInt(sB, 10);
            if (JB !== mB) return JB > mB
          }
          for (var yB = 0; yB < Math.max(uB.length, UB.length); yB++) {
            var kB = uB[yB] || "0",
              GB = UB[yB] || "0";
            if (kB !== GB && kB.length !== GB.length) return kB.length < GB.length
          }
          return !(nB && !NB)
        }(mB, "7.0.0"),
        qB = uB(uB(uB(uB(uB(uB({
          "fa-beat": jB,
          "fa-fade": zB,
          "fa-beat-fade": QB,
          "fa-bounce": nB,
          "fa-shake": dB,
          "fa-flash": IB,
          "fa-spin": NB,
          "fa-spin-reverse": aB,
          "fa-spin-pulse": UB,
          "fa-pulse": rB,
          "fa-fw": sB,
          "fa-inverse": JB,
          "fa-border": yB,
          "fa-li": kB,
          "fa-flip": !0 === GB,
          "fa-flip-horizontal": "horizontal" === GB || "both" === GB,
          "fa-flip-vertical": "vertical" === GB || "both" === GB
        }, "fa-".concat(LB), "undefined" !== typeof LB && null !== LB), "fa-rotate-".concat(gB), "undefined" !== typeof gB && null !== gB && 0 !== gB), "fa-pull-".concat(tB), "undefined" !== typeof tB && null !== tB), "fa-swap-opacity", SB), "fa-rotate-by", iB && MB), "fa-width-auto", iB && EB);
      return Object.keys(qB).map((function(BB) {
        return qB[BB] ? BB : null
      })).filter((function(BB) {
        return BB
      }))
    }

    function GB(BB) {
      return jB = BB, (jB -= 0) === jB ? BB : (BB = BB.replace(/[\-_\s]+(.)?/g, (function(BB, jB) {
        return jB ? jB.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + BB.substr(1);
      var jB
    }
    var LB = ["style"];
    var gB = !1;
    try {
      gB = !0
    } catch (qB) {}

    function tB(BB) {
      return BB && "object" === sB(BB) && BB.prefix && BB.iconName && BB.icon ? BB : QB.parse.icon ? QB.parse.icon(BB) : null === BB ? null : BB && "object" === sB(BB) && BB.prefix && BB.iconName ? BB : Array.isArray(BB) && 2 === BB.length ? {
        prefix: BB[0],
        iconName: BB[1]
      } : "string" === typeof BB ? {
        prefix: "fas",
        iconName: BB
      } : void 0
    }

    function SB(BB, jB) {
      return Array.isArray(jB) && jB.length > 0 || !Array.isArray(jB) && jB ? uB({}, BB, jB) : {}
    }
    var MB = {
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
      EB = IB.forwardRef((function(BB, jB) {
        var zB = aB(aB({}, MB), BB),
          nB = zB.icon,
          dB = zB.mask,
          IB = zB.symbol,
          NB = zB.className,
          uB = zB.title,
          UB = zB.titleId,
          pB = zB.maskId,
          sB = tB(nB),
          JB = SB("classes", [].concat(rB(kB(zB)), rB((NB || "").split(" ")))),
          mB = SB("transform", "string" === typeof zB.transform ? QB.parse.transform(zB.transform) : zB.transform),
          yB = SB("mask", tB(dB)),
          GB = (0, QB.icon)(sB, aB(aB(aB(aB({}, JB), mB), yB), {}, {
            symbol: IB,
            title: uB,
            titleId: UB,
            maskId: pB
          }));
        if (!GB) return function() {
          var BB;
          !gB && console && "function" === typeof console.error && (BB = console).error.apply(BB, arguments)
        }("Could not find icon", sB), null;
        var LB = GB.abstract,
          EB = {
            ref: jB
          };
        return Object.keys(zB).forEach((function(BB) {
          MB.hasOwnProperty(BB) || (EB[BB] = zB[BB])
        })), iB(LB[0], EB)
      }));
    EB.displayName = "FontAwesomeIcon", EB.propTypes = {
      beat: dB().bool,
      border: dB().bool,
      beatFade: dB().bool,
      bounce: dB().bool,
      className: dB().string,
      fade: dB().bool,
      flash: dB().bool,
      mask: dB().oneOfType([dB().object, dB().array, dB().string]),
      maskId: dB().string,
      fixedWidth: dB().bool,
      inverse: dB().bool,
      flip: dB().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: dB().oneOfType([dB().object, dB().array, dB().string]),
      listItem: dB().bool,
      pull: dB().oneOf(["right", "left"]),
      pulse: dB().bool,
      rotation: dB().oneOf([0, 90, 180, 270]),
      rotateBy: dB().bool,
      shake: dB().bool,
      size: dB().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: dB().bool,
      spinPulse: dB().bool,
      spinReverse: dB().bool,
      symbol: dB().oneOfType([dB().bool, dB().string]),
      title: dB().string,
      titleId: dB().string,
      transform: dB().oneOfType([dB().string, dB().object]),
      swapOpacity: dB().bool,
      widthAuto: dB().bool
    };
    var iB = function BB(jB, zB) {
      var QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof zB) return zB;
      var nB = (zB.children || []).map((function(zB) {
          return BB(jB, zB)
        })),
        dB = Object.keys(zB.attributes || {}).reduce((function(BB, jB) {
          var QB = zB.attributes[jB];
          switch (jB) {
            case "class":
              BB.attrs.className = QB, delete zB.attributes.class;
              break;
            case "style":
              BB.attrs.style = QB.split(";").map((function(BB) {
                return BB.trim()
              })).filter((function(BB) {
                return BB
              })).reduce((function(BB, jB) {
                var zB, QB = jB.indexOf(":"),
                  nB = GB(jB.slice(0, QB)),
                  dB = jB.slice(QB + 1).trim();
                return nB.startsWith("webkit") ? BB[(zB = nB, zB.charAt(0).toUpperCase() + zB.slice(1))] = dB : BB[nB] = dB, BB
              }), {});
              break;
            default:
              0 === jB.indexOf("aria-") || 0 === jB.indexOf("data-") ? BB.attrs[jB.toLowerCase()] = QB : BB.attrs[GB(jB)] = QB
          }
          return BB
        }), {
          attrs: {}
        }),
        IB = QB.style,
        NB = void 0 === IB ? {} : IB,
        uB = function(BB, jB) {
          if (null == BB) return {};
          var zB, QB, nB = function(BB, jB) {
            if (null == BB) return {};
            var zB = {};
            for (var QB in BB)
              if ({}.hasOwnProperty.call(BB, QB)) {
                if (-1 !== jB.indexOf(QB)) continue;
                zB[QB] = BB[QB]
              } return zB
          }(BB, jB);
          if (Object.getOwnPropertySymbols) {
            var dB = Object.getOwnPropertySymbols(BB);
            for (QB = 0; QB < dB.length; QB++) zB = dB[QB], -1 === jB.indexOf(zB) && {}.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
          }
          return nB
        }(QB, LB);
      return dB.attrs.style = aB(aB({}, dB.attrs.style), NB), jB.apply(void 0, [zB.tag, aB(aB({}, dB.attrs), uB)].concat(rB(nB)))
    }.bind(null, IB.createElement)
  },
  5053: (BB, jB, zB) => {
    var QB = zB(5058);

    function nB() {}

    function dB() {}
    dB.resetWarningCache = nB, BB.exports = function() {
      function BB(BB, jB, zB, nB, dB, IB) {
        if (IB !== QB) {
          var NB = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw NB.name = "Invariant Violation", NB
        }
      }

      function jB() {
        return BB
      }
      BB.isRequired = BB;
      var zB = {
        array: BB,
        bigint: BB,
        bool: BB,
        func: BB,
        number: BB,
        object: BB,
        string: BB,
        symbol: BB,
        any: BB,
        arrayOf: jB,
        element: BB,
        elementType: BB,
        instanceOf: jB,
        node: BB,
        objectOf: jB,
        oneOf: jB,
        oneOfType: jB,
        shape: jB,
        exact: jB,
        checkPropTypes: dB,
        resetWarningCache: nB
      };
      return zB.PropTypes = zB, zB
    }
  },
  5045: (BB, jB, zB) => {
    BB.exports = zB(5053)()
  },
  5058: BB => {
    BB.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6625: (BB, jB, zB) => {
    function QB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function nB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, pB(QB.key), QB)
      }
    }

    function dB(BB, jB) {
      var zB = "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
      if (!zB) {
        if (Array.isArray(BB) || (zB = sB(BB)) || jB && BB && "number" == typeof BB.length) {
          zB && (BB = zB);
          var QB = 0,
            nB = function() {};
          return {
            s: nB,
            n: function() {
              return QB >= BB.length ? {
                done: !0
              } : {
                done: !1,
                value: BB[QB++]
              }
            },
            e: function(BB) {
              throw BB
            },
            f: nB
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var dB, IB = !0,
        NB = !1;
      return {
        s: function() {
          zB = zB.call(BB)
        },
        n: function() {
          var BB = zB.next();
          return IB = BB.done, BB
        },
        e: function(BB) {
          NB = !0, dB = BB
        },
        f: function() {
          try {
            IB || null == zB.return || zB.return()
          } finally {
            if (NB) throw dB
          }
        }
      }
    }

    function IB(BB, jB, zB) {
      return (jB = pB(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function NB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function uB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? NB(Object(zB), !0).forEach((function(jB) {
          IB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : NB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function UB(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        var zB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != zB) {
          var QB, nB, dB, IB, NB = [],
            uB = !0,
            UB = !1;
          try {
            if (dB = (zB = zB.call(BB)).next, 0 === jB) {
              if (Object(zB) !== zB) return;
              uB = !1
            } else
              for (; !(uB = (QB = dB.call(zB)).done) && (NB.push(QB.value), NB.length !== jB); uB = !0);
          } catch (BB) {
            UB = !0, nB = BB
          } finally {
            try {
              if (!uB && null != zB.return && (IB = zB.return(), Object(IB) !== IB)) return
            } finally {
              if (UB) throw nB
            }
          }
          return NB
        }
      }(BB, jB) || sB(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return QB(BB)
      }(BB) || function(BB) {
        if ("undefined" != typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || sB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pB(BB) {
      var jB = function(BB, jB) {
        if ("object" != typeof BB || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != typeof QB) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == typeof jB ? jB : jB + ""
    }

    function rB(BB) {
      return rB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, rB(BB)
    }

    function sB(BB, jB) {
      if (BB) {
        if ("string" == typeof BB) return QB(BB, jB);
        var zB = {}.toString.call(BB).slice(8, -1);
        return "Object" === zB && BB.constructor && (zB = BB.constructor.name), "Map" === zB || "Set" === zB ? Array.from(BB) : "Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB) ? QB(BB, jB) : void 0
      }
    }
    zB.r(jB), zB.d(jB, {
      api: () => bz,
      config: () => zn,
      counter: () => pn,
      dom: () => nn,
      findIconDefinition: () => In,
      icon: () => un,
      layer: () => Un,
      library: () => Qn,
      noAuto: () => jn,
      parse: () => dn,
      text: () => an,
      toHtml: () => Nn
    });
    var JB = function() {},
      mB = {},
      yB = {},
      kB = null,
      GB = {
        mark: JB,
        measure: JB
      };
    try {
      "undefined" !== typeof window && (mB = window), "undefined" !== typeof document && (yB = document), "undefined" !== typeof MutationObserver && (kB = MutationObserver), "undefined" !== typeof performance && (GB = performance)
    } catch (lB) {}
    var LB, gB, tB = (mB.navigator || {}).userAgent,
      SB = void 0 === tB ? "" : tB,
      MB = mB,
      EB = yB,
      iB = kB,
      qB = GB,
      fB = (MB.document, !!EB.documentElement && !!EB.head && "function" === typeof EB.addEventListener && "function" === typeof EB.createElement),
      oB = ~SB.indexOf("MSIE") || ~SB.indexOf("Trident/"),
      HB = {
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
      DB = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      FB = "classic",
      YB = "duotone",
      VB = "sharp",
      hB = "sharp-duotone",
      XB = "chisel",
      ZB = "etch",
      AB = "graphite",
      TB = "jelly",
      PB = "jelly-duo",
      WB = "jelly-fill",
      eB = "notdog",
      lB = "notdog-duo",
      wB = "slab",
      xB = "slab-press",
      KB = "thumbprint",
      CB = "utility",
      cB = "utility-duo",
      bB = "utility-fill",
      vB = "whiteboard",
      RB = [FB, YB, VB, hB, XB, ZB, AB, TB, PB, WB, eB, lB, wB, xB, KB, CB, cB, bB, vB],
      OB = (IB(IB(IB(IB(IB(IB(IB(IB(IB(IB(LB = {}, FB, "Classic"), YB, "Duotone"), VB, "Sharp"), hB, "Sharp Duotone"), XB, "Chisel"), ZB, "Etch"), AB, "Graphite"), TB, "Jelly"), PB, "Jelly Duo"), WB, "Jelly Fill"), IB(IB(IB(IB(IB(IB(IB(IB(IB(LB, eB, "Notdog"), lB, "Notdog Duo"), wB, "Slab"), xB, "Slab Press"), KB, "Thumbprint"), CB, "Utility"), cB, "Utility Duo"), bB, "Utility Fill"), vB, "Whiteboard"), new Map([
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
      Bj = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      jj = {
        fak: "kit",
        "fa-kit": "kit"
      },
      zj = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      Qj = (IB(IB({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      nj = {
        "kit-duotone": "fakd"
      },
      dj = "duotone-group",
      Ij = "swap-opacity",
      Nj = "primary",
      uj = "secondary",
      Uj = (IB(IB(IB(IB(IB(IB(IB(IB(IB(IB(gB = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), IB(IB(IB(IB(IB(IB(IB(IB(IB(gB, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), IB(IB({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      aj = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      pj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      rj = pj.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      sj = [].concat(aB(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", dj, Ij, Nj, uj]).concat(pj.map((function(BB) {
        return "".concat(BB, "x")
      }))).concat(rj.map((function(BB) {
        return "w-".concat(BB)
      }))),
      Jj = "___FONT_AWESOME___",
      mj = "svg-inline--fa",
      yj = "data-fa-i2svg",
      kj = "data-fa-pseudo-element",
      Gj = "data-prefix",
      Lj = "data-icon",
      gj = "fontawesome-i2svg",
      tj = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      Sj = ["::before", "::after", ":before", ":after"],
      Mj = function() {
        try {
          return !0
        } catch (BB) {
          return !1
        }
      }();

    function Ej(BB) {
      return new Proxy(BB, {
        get: function(BB, jB) {
          return jB in BB ? BB[jB] : BB[FB]
        }
      })
    }
    var ij = uB({}, HB);
    ij[FB] = uB(uB(uB(uB({}, {
      "fa-duotone": "duotone"
    }), HB[FB]), jj), zj);
    var qj = Ej(ij),
      fj = uB({}, {
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
    fj[FB] = uB(uB(uB(uB({}, {
      duotone: "fad"
    }), fj[FB]), Qj), nj);
    var oj = Ej(fj),
      Hj = uB({}, Uj);
    Hj[FB] = uB(uB({}, Hj[FB]), {
      fak: "fa-kit"
    });
    var Dj = Ej(Hj),
      Fj = uB({}, {
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
    Fj[FB] = uB(uB({}, Fj[FB]), {
      "fa-kit": "fak"
    });
    Ej(Fj);
    var Yj = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      Vj = "fa-layers-text",
      hj = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Xj = (Ej(uB({}, {
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
      Zj = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      Aj = [].concat(aB(["kit"]), aB(sj)),
      Tj = MB.FontAwesomeConfig || {};
    if (EB && "function" === typeof EB.querySelector) {
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
        var jB = UB(BB, 2),
          zB = jB[0],
          QB = jB[1],
          nB = function(BB) {
            return "" === BB || "false" !== BB && ("true" === BB || BB)
          }(function(BB) {
            var jB = EB.querySelector("script[" + BB + "]");
            if (jB) return jB.getAttribute(BB)
          }(zB));
        void 0 !== nB && null !== nB && (Tj[QB] = nB)
      }))
    }
    var Pj = {
      styleDefault: "solid",
      familyDefault: FB,
      cssPrefix: "fa",
      replacementClass: mj,
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
    Tj.familyPrefix && (Tj.cssPrefix = Tj.familyPrefix);
    var Wj = uB(uB({}, Pj), Tj);
    Wj.autoReplaceSvg || (Wj.observeMutations = !1);
    var ej = {};
    Object.keys(Pj).forEach((function(BB) {
      Object.defineProperty(ej, BB, {
        enumerable: !0,
        set: function(jB) {
          Wj[BB] = jB, lj.forEach((function(BB) {
            return BB(ej)
          }))
        },
        get: function() {
          return Wj[BB]
        }
      })
    })), Object.defineProperty(ej, "familyPrefix", {
      enumerable: !0,
      set: function(BB) {
        Wj.cssPrefix = BB, lj.forEach((function(BB) {
          return BB(ej)
        }))
      },
      get: function() {
        return Wj.cssPrefix
      }
    }), MB.FontAwesomeConfig = ej;
    var lj = [];
    var wj = 16,
      xj = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function Kj() {
      for (var BB = 12, jB = ""; BB-- > 0;) jB += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return jB
    }

    function Cj(BB) {
      for (var jB = [], zB = (BB || []).length >>> 0; zB--;) jB[zB] = BB[zB];
      return jB
    }

    function cj(BB) {
      return BB.classList ? Cj(BB.classList) : (BB.getAttribute("class") || "").split(" ").filter((function(BB) {
        return BB
      }))
    }

    function bj(BB) {
      return "".concat(BB).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function vj(BB) {
      return Object.keys(BB || {}).reduce((function(jB, zB) {
        return jB + "".concat(zB, ": ").concat(BB[zB].trim(), ";")
      }), "")
    }

    function Rj(BB) {
      return BB.size !== xj.size || BB.x !== xj.x || BB.y !== xj.y || BB.rotate !== xj.rotate || BB.flipX || BB.flipY
    }

    function Oj() {
      var BB = "fa",
        jB = mj,
        zB = ej.cssPrefix,
        QB = ej.replacementClass,
        nB = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (zB !== BB || QB !== jB) {
        var dB = new RegExp("\\.".concat(BB, "\\-"), "g"),
          IB = new RegExp("\\--".concat(BB, "\\-"), "g"),
          NB = new RegExp("\\.".concat(jB), "g");
        nB = nB.replace(dB, ".".concat(zB, "-")).replace(IB, "--".concat(zB, "-")).replace(NB, ".".concat(QB))
      }
      return nB
    }
    var Bz = !1;

    function jz() {
      ej.autoAddCss && !Bz && (! function(BB) {
        if (BB && fB) {
          var jB = EB.createElement("style");
          jB.setAttribute("type", "text/css"), jB.innerHTML = BB;
          for (var zB = EB.head.childNodes, QB = null, nB = zB.length - 1; nB > -1; nB--) {
            var dB = zB[nB],
              IB = (dB.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(IB) > -1 && (QB = dB)
          }
          EB.head.insertBefore(jB, QB)
        }
      }(Oj()), Bz = !0)
    }
    var zz = {
        mixout: function() {
          return {
            dom: {
              css: Oj,
              insertCss: jz
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              jz()
            },
            beforeI2svg: function() {
              jz()
            }
          }
        }
      },
      Qz = MB || {};
    Qz[Jj] || (Qz[Jj] = {}), Qz[Jj].styles || (Qz[Jj].styles = {}), Qz[Jj].hooks || (Qz[Jj].hooks = {}), Qz[Jj].shims || (Qz[Jj].shims = []);
    var nz = Qz[Jj],
      dz = [],
      Iz = function() {
        EB.removeEventListener("DOMContentLoaded", Iz), Nz = 1, dz.map((function(BB) {
          return BB()
        }))
      },
      Nz = !1;

    function uz(BB) {
      var jB = BB.tag,
        zB = BB.attributes,
        QB = void 0 === zB ? {} : zB,
        nB = BB.children,
        dB = void 0 === nB ? [] : nB;
      return "string" === typeof BB ? bj(BB) : "<".concat(jB, " ").concat(function(BB) {
        return Object.keys(BB || {}).reduce((function(jB, zB) {
          return jB + "".concat(zB, '="').concat(bj(BB[zB]), '" ')
        }), "").trim()
      }(QB), ">").concat(dB.map(uz).join(""), "</").concat(jB, ">")
    }

    function Uz(BB, jB, zB) {
      if (BB && BB[jB] && BB[jB][zB]) return {
        prefix: jB,
        iconName: zB,
        icon: BB[jB][zB]
      }
    }
    fB && ((Nz = (EB.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(EB.readyState)) || EB.addEventListener("DOMContentLoaded", Iz));
    var az = function(BB, jB, zB, QB) {
      var nB, dB, IB, NB = Object.keys(BB),
        uB = NB.length,
        UB = void 0 !== QB ? function(BB, jB) {
          return function(zB, QB, nB, dB) {
            return BB.call(jB, zB, QB, nB, dB)
          }
        }(jB, QB) : jB;
      for (void 0 === zB ? (nB = 1, IB = BB[NB[0]]) : (nB = 0, IB = zB); nB < uB; nB++) IB = UB(IB, BB[dB = NB[nB]], dB, BB);
      return IB
    };

    function pz(BB) {
      return 1 !== aB(BB).length ? null : BB.codePointAt(0).toString(16)
    }

    function rz(BB) {
      return Object.keys(BB).reduce((function(jB, zB) {
        var QB = BB[zB];
        return !!QB.icon ? jB[QB.iconName] = QB.icon : jB[zB] = QB, jB
      }), {})
    }

    function sz(BB, jB) {
      var zB = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        QB = void 0 !== zB && zB,
        nB = rz(jB);
      "function" !== typeof nz.hooks.addPack || QB ? nz.styles[BB] = uB(uB({}, nz.styles[BB] || {}), nB) : nz.hooks.addPack(BB, rz(jB)), "fas" === BB && sz("fa", jB)
    }
    var Jz = nz.styles,
      mz = nz.shims,
      yz = Object.keys(Dj),
      kz = yz.reduce((function(BB, jB) {
        return BB[jB] = Object.keys(Dj[jB]), BB
      }), {}),
      Gz = null,
      Lz = {},
      gz = {},
      tz = {},
      Sz = {},
      Mz = {};

    function Ez(BB, jB) {
      var zB, QB = jB.split("-"),
        nB = QB[0],
        dB = QB.slice(1).join("-");
      return nB !== BB || "" === dB || (zB = dB, ~Aj.indexOf(zB)) ? null : dB
    }
    var iz, qz = function() {
      var BB = function(BB) {
        return az(Jz, (function(jB, zB, QB) {
          return jB[QB] = az(zB, BB, {}), jB
        }), {})
      };
      Lz = BB((function(BB, jB, zB) {
        (jB[3] && (BB[jB[3]] = zB), jB[2]) && jB[2].filter((function(BB) {
          return "number" === typeof BB
        })).forEach((function(jB) {
          BB[jB.toString(16)] = zB
        }));
        return BB
      })), gz = BB((function(BB, jB, zB) {
        (BB[zB] = zB, jB[2]) && jB[2].filter((function(BB) {
          return "string" === typeof BB
        })).forEach((function(jB) {
          BB[jB] = zB
        }));
        return BB
      })), Mz = BB((function(BB, jB, zB) {
        var QB = jB[2];
        return BB[zB] = zB, QB.forEach((function(jB) {
          BB[jB] = zB
        })), BB
      }));
      var jB = "far" in Jz || ej.autoFetchSvg,
        zB = az(mz, (function(BB, zB) {
          var QB = zB[0],
            nB = zB[1],
            dB = zB[2];
          return "far" !== nB || jB || (nB = "fas"), "string" === typeof QB && (BB.names[QB] = {
            prefix: nB,
            iconName: dB
          }), "number" === typeof QB && (BB.unicodes[QB.toString(16)] = {
            prefix: nB,
            iconName: dB
          }), BB
        }), {
          names: {},
          unicodes: {}
        });
      tz = zB.names, Sz = zB.unicodes, Gz = Fz(ej.styleDefault, {
        family: ej.familyDefault
      })
    };

    function fz(BB, jB) {
      return (Lz[BB] || {})[jB]
    }

    function oz(BB, jB) {
      return (Mz[BB] || {})[jB]
    }

    function Hz(BB) {
      return tz[BB] || {
        prefix: null,
        iconName: null
      }
    }

    function Dz() {
      return Gz
    }
    iz = function(BB) {
      Gz = Fz(BB.styleDefault, {
        family: ej.familyDefault
      })
    }, lj.push(iz), qz();

    function Fz(BB) {
      var jB = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        zB = void 0 === jB ? FB : jB,
        QB = qj[zB][BB];
      if (zB === YB && !BB) return "fad";
      var nB = oj[zB][BB] || oj[zB][QB],
        dB = BB in nz.styles ? BB : null;
      return nB || dB || null
    }

    function Yz(BB) {
      return BB.sort().filter((function(BB, jB, zB) {
        return zB.indexOf(BB) === jB
      }))
    }
    var Vz = aj.concat(Bj);

    function hz(BB) {
      var jB = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        zB = void 0 !== jB && jB,
        QB = null,
        nB = Yz(BB.filter((function(BB) {
          return Vz.includes(BB)
        }))),
        dB = Yz(BB.filter((function(BB) {
          return !Vz.includes(BB)
        }))),
        IB = UB(nB.filter((function(BB) {
          return QB = BB, !DB.includes(BB)
        })), 1)[0],
        NB = void 0 === IB ? null : IB,
        aB = function(BB) {
          var jB = FB,
            zB = yz.reduce((function(BB, jB) {
              return BB[jB] = "".concat(ej.cssPrefix, "-").concat(jB), BB
            }), {});
          return RB.forEach((function(QB) {
            (BB.includes(zB[QB]) || BB.some((function(BB) {
              return kz[QB].includes(BB)
            }))) && (jB = QB)
          })), jB
        }(nB),
        pB = uB(uB({}, function(BB) {
          var jB = [],
            zB = null;
          return BB.forEach((function(BB) {
            var QB = Ez(ej.cssPrefix, BB);
            QB ? zB = QB : BB && jB.push(BB)
          })), {
            iconName: zB,
            rest: jB
          }
        }(dB)), {}, {
          prefix: Fz(NB, {
            family: aB
          })
        });
      return uB(uB(uB({}, pB), function(BB) {
        var jB = BB.values,
          zB = BB.family,
          QB = BB.canonical,
          nB = BB.givenPrefix,
          dB = void 0 === nB ? "" : nB,
          IB = BB.styles,
          NB = void 0 === IB ? {} : IB,
          uB = BB.config,
          UB = void 0 === uB ? {} : uB,
          aB = zB === YB,
          pB = jB.includes("fa-duotone") || jB.includes("fad"),
          rB = "duotone" === UB.familyDefault,
          sB = "fad" === QB.prefix || "fa-duotone" === QB.prefix;
        !aB && (pB || rB || sB) && (QB.prefix = "fad");
        (jB.includes("fa-brands") || jB.includes("fab")) && (QB.prefix = "fab");
        if (!QB.prefix && Xz.includes(zB)) {
          if (Object.keys(NB).find((function(BB) {
              return Zz.includes(BB)
            })) || UB.autoFetchSvg) {
            var JB = OB.get(zB).defaultShortPrefixId;
            QB.prefix = JB, QB.iconName = oz(QB.prefix, QB.iconName) || QB.iconName
          }
        }
        "fa" !== QB.prefix && "fa" !== dB || (QB.prefix = Dz() || "fas");
        return QB
      }({
        values: BB,
        family: aB,
        styles: Jz,
        config: ej,
        canonical: pB,
        givenPrefix: QB
      })), function(BB, jB, zB) {
        var QB = zB.prefix,
          nB = zB.iconName;
        if (BB || !QB || !nB) return {
          prefix: QB,
          iconName: nB
        };
        var dB = "fa" === jB ? Hz(nB) : {},
          IB = oz(QB, nB);
        nB = dB.iconName || IB || nB, "far" !== (QB = dB.prefix || QB) || Jz.far || !Jz.fas || ej.autoFetchSvg || (QB = "fas");
        return {
          prefix: QB,
          iconName: nB
        }
      }(zB, QB, pB))
    }
    var Xz = RB.filter((function(BB) {
        return BB !== FB || BB !== YB
      })),
      Zz = Object.keys(Uj).filter((function(BB) {
        return BB !== FB
      })).map((function(BB) {
        return Object.keys(Uj[BB])
      })).flat();
    var Az = function() {
        return function(BB, jB, zB) {
          return jB && nB(BB.prototype, jB), zB && nB(BB, zB), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), BB
        }((function BB() {
          ! function(BB, jB) {
            if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
          }(this, BB), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var BB = this, jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
            var nB = zB.reduce(this._pullDefinitions, {});
            Object.keys(nB).forEach((function(jB) {
              BB.definitions[jB] = uB(uB({}, BB.definitions[jB] || {}), nB[jB]), sz(jB, nB[jB]);
              var zB = Dj[FB][jB];
              zB && sz(zB, nB[jB]), qz()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(BB, jB) {
            var zB = jB.prefix && jB.iconName && jB.icon ? {
              0: jB
            } : jB;
            return Object.keys(zB).map((function(jB) {
              var QB = zB[jB],
                nB = QB.prefix,
                dB = QB.iconName,
                IB = QB.icon,
                NB = IB[2];
              BB[nB] || (BB[nB] = {}), NB.length > 0 && NB.forEach((function(jB) {
                "string" === typeof jB && (BB[nB][jB] = IB)
              })), BB[nB][dB] = IB
            })), BB
          }
        }])
      }(),
      Tz = [],
      Pz = {},
      Wz = {},
      ez = Object.keys(Wz);

    function lz(BB, jB) {
      for (var zB = arguments.length, QB = new Array(zB > 2 ? zB - 2 : 0), nB = 2; nB < zB; nB++) QB[nB - 2] = arguments[nB];
      return (Pz[BB] || []).forEach((function(BB) {
        jB = BB.apply(null, [jB].concat(QB))
      })), jB
    }

    function wz(BB) {
      for (var jB = arguments.length, zB = new Array(jB > 1 ? jB - 1 : 0), QB = 1; QB < jB; QB++) zB[QB - 1] = arguments[QB];
      (Pz[BB] || []).forEach((function(BB) {
        BB.apply(null, zB)
      }))
    }

    function xz() {
      var BB = arguments[0],
        jB = Array.prototype.slice.call(arguments, 1);
      return Wz[BB] ? Wz[BB].apply(null, jB) : void 0
    }

    function Kz(BB) {
      "fa" === BB.prefix && (BB.prefix = "fas");
      var jB = BB.iconName,
        zB = BB.prefix || Dz();
      if (jB) return jB = oz(zB, jB) || jB, Uz(Cz.definitions, zB, jB) || Uz(nz.styles, zB, jB)
    }
    var Cz = new Az,
      cz = {
        i2svg: function() {
          var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return fB ? (wz("beforeI2svg", BB), xz("pseudoElements2svg", BB), xz("i2svg", BB)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var BB, jB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            zB = jB.autoReplaceSvgRoot;
          !1 === ej.autoReplaceSvg && (ej.autoReplaceSvg = !0), ej.observeMutations = !0, BB = function() {
            vz({
              autoReplaceSvgRoot: zB
            }), wz("watch", jB)
          }, fB && (Nz ? setTimeout(BB, 0) : dz.push(BB))
        }
      },
      bz = {
        noAuto: function() {
          ej.autoReplaceSvg = !1, ej.observeMutations = !1, wz("noAuto")
        },
        config: ej,
        dom: cz,
        parse: {
          icon: function(BB) {
            if (null === BB) return null;
            if ("object" === rB(BB) && BB.prefix && BB.iconName) return {
              prefix: BB.prefix,
              iconName: oz(BB.prefix, BB.iconName) || BB.iconName
            };
            if (Array.isArray(BB) && 2 === BB.length) {
              var jB = 0 === BB[1].indexOf("fa-") ? BB[1].slice(3) : BB[1],
                zB = Fz(BB[0]);
              return {
                prefix: zB,
                iconName: oz(zB, jB) || jB
              }
            }
            if ("string" === typeof BB && (BB.indexOf("".concat(ej.cssPrefix, "-")) > -1 || BB.match(Yj))) {
              var QB = hz(BB.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: QB.prefix || Dz(),
                iconName: oz(QB.prefix, QB.iconName) || QB.iconName
              }
            }
            if ("string" === typeof BB) {
              var nB = Dz();
              return {
                prefix: nB,
                iconName: oz(nB, BB) || BB
              }
            }
          }
        },
        library: Cz,
        findIconDefinition: Kz,
        toHtml: uz
      },
      vz = function() {
        var BB = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          jB = void 0 === BB ? EB : BB;
        (Object.keys(nz.styles).length > 0 || ej.autoFetchSvg) && fB && ej.autoReplaceSvg && bz.dom.i2svg({
          node: jB
        })
      };

    function Rz(BB, jB) {
      return Object.defineProperty(BB, "abstract", {
        get: jB
      }), Object.defineProperty(BB, "html", {
        get: function() {
          return BB.abstract.map((function(BB) {
            return uz(BB)
          }))
        }
      }), Object.defineProperty(BB, "node", {
        get: function() {
          if (fB) {
            var jB = EB.createElement("div");
            return jB.innerHTML = BB.html, jB.children
          }
        }
      }), BB
    }

    function Oz(BB) {
      var jB = BB.icons,
        zB = jB.main,
        QB = jB.mask,
        nB = BB.prefix,
        dB = BB.iconName,
        IB = BB.transform,
        NB = BB.symbol,
        UB = BB.maskId,
        aB = BB.extra,
        pB = BB.watchable,
        rB = void 0 !== pB && pB,
        sB = QB.found ? QB : zB,
        JB = sB.width,
        mB = sB.height,
        yB = [ej.replacementClass, dB ? "".concat(ej.cssPrefix, "-").concat(dB) : ""].filter((function(BB) {
          return -1 === aB.classes.indexOf(BB)
        })).filter((function(BB) {
          return "" !== BB || !!BB
        })).concat(aB.classes).join(" "),
        kB = {
          children: [],
          attributes: uB(uB({}, aB.attributes), {}, {
            "data-prefix": nB,
            "data-icon": dB,
            class: yB,
            role: aB.attributes.role || "img",
            viewBox: "0 0 ".concat(JB, " ").concat(mB)
          })
        };
      (function(BB) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(jB) {
          return jB in BB
        }))
      })(aB.attributes) || aB.attributes["aria-hidden"] || (kB.attributes["aria-hidden"] = "true"), rB && (kB.attributes[yj] = "");
      var GB = uB(uB({}, kB), {}, {
          prefix: nB,
          iconName: dB,
          main: zB,
          mask: QB,
          maskId: UB,
          transform: IB,
          symbol: NB,
          styles: uB({}, aB.styles)
        }),
        LB = QB.found && zB.found ? xz("generateAbstractMask", GB) || {
          children: [],
          attributes: {}
        } : xz("generateAbstractIcon", GB) || {
          children: [],
          attributes: {}
        },
        gB = LB.children,
        tB = LB.attributes;
      return GB.children = gB, GB.attributes = tB, NB ? function(BB) {
        var jB = BB.prefix,
          zB = BB.iconName,
          QB = BB.children,
          nB = BB.attributes,
          dB = BB.symbol,
          IB = !0 === dB ? "".concat(jB, "-").concat(ej.cssPrefix, "-").concat(zB) : dB;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: uB(uB({}, nB), {}, {
              id: IB
            }),
            children: QB
          }]
        }]
      }(GB) : function(BB) {
        var jB = BB.children,
          zB = BB.main,
          QB = BB.mask,
          nB = BB.attributes,
          dB = BB.styles,
          IB = BB.transform;
        if (Rj(IB) && zB.found && !QB.found) {
          var NB = {
            x: zB.width / zB.height / 2,
            y: .5
          };
          nB.style = vj(uB(uB({}, dB), {}, {
            "transform-origin": "".concat(NB.x + IB.x / 16, "em ").concat(NB.y + IB.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: nB,
          children: jB
        }]
      }(GB)
    }

    function BQ(BB) {
      var jB = BB.content,
        zB = BB.width,
        QB = BB.height,
        nB = BB.transform,
        dB = BB.extra,
        IB = BB.watchable,
        NB = void 0 !== IB && IB,
        UB = uB(uB({}, dB.attributes), {}, {
          class: dB.classes.join(" ")
        });
      NB && (UB[yj] = "");
      var aB = uB({}, dB.styles);
      Rj(nB) && (aB.transform = function(BB) {
        var jB = BB.transform,
          zB = BB.width,
          QB = void 0 === zB ? 16 : zB,
          nB = BB.height,
          dB = void 0 === nB ? 16 : nB,
          IB = BB.startCentered,
          NB = void 0 !== IB && IB,
          uB = "";
        return uB += NB && oB ? "translate(".concat(jB.x / wj - QB / 2, "em, ").concat(jB.y / wj - dB / 2, "em) ") : NB ? "translate(calc(-50% + ".concat(jB.x / wj, "em), calc(-50% + ").concat(jB.y / wj, "em)) ") : "translate(".concat(jB.x / wj, "em, ").concat(jB.y / wj, "em) "), uB += "scale(".concat(jB.size / wj * (jB.flipX ? -1 : 1), ", ").concat(jB.size / wj * (jB.flipY ? -1 : 1), ") "), uB + "rotate(".concat(jB.rotate, "deg) ")
      }({
        transform: nB,
        startCentered: !0,
        width: zB,
        height: QB
      }), aB["-webkit-transform"] = aB.transform);
      var pB = vj(aB);
      pB.length > 0 && (UB.style = pB);
      var rB = [];
      return rB.push({
        tag: "span",
        attributes: UB,
        children: [jB]
      }), rB
    }
    var jQ = nz.styles;

    function zQ(BB) {
      var jB = BB[0],
        zB = BB[1],
        QB = UB(BB.slice(4), 1)[0];
      return {
        found: !0,
        width: jB,
        height: zB,
        icon: Array.isArray(QB) ? {
          tag: "g",
          attributes: {
            class: "".concat(ej.cssPrefix, "-").concat(Zj.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(ej.cssPrefix, "-").concat(Zj.SECONDARY),
              fill: "currentColor",
              d: QB[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(ej.cssPrefix, "-").concat(Zj.PRIMARY),
              fill: "currentColor",
              d: QB[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: QB
          }
        }
      }
    }
    var QQ = {
      found: !1,
      width: 512,
      height: 512
    };

    function nQ(BB, jB) {
      var zB = jB;
      return "fa" === jB && null !== ej.styleDefault && (jB = Dz()), new Promise((function(QB, nB) {
        if ("fa" === zB) {
          var dB = Hz(BB) || {};
          BB = dB.iconName || BB, jB = dB.prefix || jB
        }
        if (BB && jB && jQ[jB] && jQ[jB][BB]) return QB(zQ(jQ[jB][BB]));
        ! function(BB, jB) {
          Mj || ej.showMissingIcons || !BB || console.error('Icon with name "'.concat(BB, '" and prefix "').concat(jB, '" is missing.'))
        }(BB, jB), QB(uB(uB({}, QQ), {}, {
          icon: ej.showMissingIcons && BB && xz("missingIconAbstract") || {}
        }))
      }))
    }
    var dQ = function() {},
      IQ = ej.measurePerformance && qB && qB.mark && qB.measure ? qB : {
        mark: dQ,
        measure: dQ
      },
      NQ = 'FA "7.2.0"',
      uQ = function(BB) {
        IQ.mark("".concat(NQ, " ").concat(BB, " ends")), IQ.measure("".concat(NQ, " ").concat(BB), "".concat(NQ, " ").concat(BB, " begins"), "".concat(NQ, " ").concat(BB, " ends"))
      },
      UQ = function(BB) {
        return IQ.mark("".concat(NQ, " ").concat(BB, " begins")),
          function() {
            return uQ(BB)
          }
      },
      aQ = function() {};

    function pQ(BB) {
      return "string" === typeof(BB.getAttribute ? BB.getAttribute(yj) : null)
    }

    function rQ(BB) {
      return EB.createElementNS("http://www.w3.org/2000/svg", BB)
    }

    function sQ(BB) {
      return EB.createElement(BB)
    }

    function JQ(BB) {
      var jB = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        zB = void 0 === jB ? "svg" === BB.tag ? rQ : sQ : jB;
      if ("string" === typeof BB) return EB.createTextNode(BB);
      var QB = zB(BB.tag);
      return Object.keys(BB.attributes || []).forEach((function(jB) {
        QB.setAttribute(jB, BB.attributes[jB])
      })), (BB.children || []).forEach((function(BB) {
        QB.appendChild(JQ(BB, {
          ceFn: zB
        }))
      })), QB
    }
    var mQ = {
      replace: function(BB) {
        var jB = BB[0];
        if (jB.parentNode)
          if (BB[1].forEach((function(BB) {
              jB.parentNode.insertBefore(JQ(BB), jB)
            })), null === jB.getAttribute(yj) && ej.keepOriginalSource) {
            var zB = EB.createComment(function(BB) {
              var jB = " ".concat(BB.outerHTML, " ");
              return "".concat(jB, "Font Awesome fontawesome.com ")
            }(jB));
            jB.parentNode.replaceChild(zB, jB)
          } else jB.remove()
      },
      nest: function(BB) {
        var jB = BB[0],
          zB = BB[1];
        if (~cj(jB).indexOf(ej.replacementClass)) return mQ.replace(BB);
        var QB = new RegExp("".concat(ej.cssPrefix, "-.*"));
        if (delete zB[0].attributes.id, zB[0].attributes.class) {
          var nB = zB[0].attributes.class.split(" ").reduce((function(BB, jB) {
            return jB === ej.replacementClass || jB.match(QB) ? BB.toSvg.push(jB) : BB.toNode.push(jB), BB
          }), {
            toNode: [],
            toSvg: []
          });
          zB[0].attributes.class = nB.toSvg.join(" "), 0 === nB.toNode.length ? jB.removeAttribute("class") : jB.setAttribute("class", nB.toNode.join(" "))
        }
        var dB = zB.map((function(BB) {
          return uz(BB)
        })).join("\n");
        jB.setAttribute(yj, ""), jB.innerHTML = dB
      }
    };

    function yQ(BB) {
      BB()
    }

    function kQ(BB, jB) {
      var zB = "function" === typeof jB ? jB : aQ;
      if (0 === BB.length) zB();
      else {
        var QB = yQ;
        "async" === ej.mutateApproach && (QB = MB.requestAnimationFrame || yQ), QB((function() {
          var jB = !0 === ej.autoReplaceSvg ? mQ.replace : mQ[ej.autoReplaceSvg] || mQ.replace,
            QB = UQ("mutate");
          BB.map(jB), QB(), zB()
        }))
      }
    }
    var GQ = !1;

    function LQ() {
      GQ = !0
    }

    function gQ() {
      GQ = !1
    }
    var tQ = null;

    function SQ(BB) {
      if (iB && ej.observeMutations) {
        var jB = BB.treeCallback,
          zB = void 0 === jB ? aQ : jB,
          QB = BB.nodeCallback,
          nB = void 0 === QB ? aQ : QB,
          dB = BB.pseudoElementsCallback,
          IB = void 0 === dB ? aQ : dB,
          NB = BB.observeMutationsRoot,
          uB = void 0 === NB ? EB : NB;
        tQ = new iB((function(BB) {
          if (!GQ) {
            var jB = Dz();
            Cj(BB).forEach((function(BB) {
              if ("childList" === BB.type && BB.addedNodes.length > 0 && !pQ(BB.addedNodes[0]) && (ej.searchPseudoElements && IB(BB.target), zB(BB.target)), "attributes" === BB.type && BB.target.parentNode && ej.searchPseudoElements && IB([BB.target], !0), "attributes" === BB.type && pQ(BB.target) && ~Xj.indexOf(BB.attributeName))
                if ("class" === BB.attributeName && function(BB) {
                    var jB = BB.getAttribute ? BB.getAttribute(Gj) : null,
                      zB = BB.getAttribute ? BB.getAttribute(Lj) : null;
                    return jB && zB
                  }(BB.target)) {
                  var QB = hz(cj(BB.target)),
                    dB = QB.prefix,
                    NB = QB.iconName;
                  BB.target.setAttribute(Gj, dB || jB), NB && BB.target.setAttribute(Lj, NB)
                } else(uB = BB.target) && uB.classList && uB.classList.contains && uB.classList.contains(ej.replacementClass) && nB(BB.target);
              var uB
            }))
          }
        })), fB && tQ.observe(uB, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function MQ(BB) {
      var jB, zB, QB = BB.getAttribute("data-prefix"),
        nB = BB.getAttribute("data-icon"),
        dB = void 0 !== BB.innerText ? BB.innerText.trim() : "",
        IB = hz(cj(BB));
      return IB.prefix || (IB.prefix = Dz()), QB && nB && (IB.prefix = QB, IB.iconName = nB), IB.iconName && IB.prefix || (IB.prefix && dB.length > 0 && (IB.iconName = (jB = IB.prefix, zB = BB.innerText, (gz[jB] || {})[zB] || fz(IB.prefix, pz(BB.innerText)))), !IB.iconName && ej.autoFetchSvg && BB.firstChild && BB.firstChild.nodeType === Node.TEXT_NODE && (IB.iconName = BB.firstChild.data)), IB
    }

    function EQ(BB) {
      var jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        zB = MQ(BB),
        QB = zB.iconName,
        nB = zB.prefix,
        dB = zB.rest,
        IB = function(BB) {
          return Cj(BB.attributes).reduce((function(BB, jB) {
            return "class" !== BB.name && "style" !== BB.name && (BB[jB.name] = jB.value), BB
          }), {})
        }(BB),
        NB = lz("parseNodeAttributes", {}, BB),
        UB = jB.styleParser ? function(BB) {
          var jB = BB.getAttribute("style"),
            zB = [];
          return jB && (zB = jB.split(";").reduce((function(BB, jB) {
            var zB = jB.split(":"),
              QB = zB[0],
              nB = zB.slice(1);
            return QB && nB.length > 0 && (BB[QB] = nB.join(":").trim()), BB
          }), {})), zB
        }(BB) : [];
      return uB({
        iconName: QB,
        prefix: nB,
        transform: xj,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: dB,
          styles: UB,
          attributes: IB
        }
      }, NB)
    }
    var iQ = nz.styles;

    function qQ(BB) {
      var jB = "nest" === ej.autoReplaceSvg ? EQ(BB, {
        styleParser: !1
      }) : EQ(BB);
      return ~jB.extra.classes.indexOf(Vj) ? xz("generateLayersText", BB, jB) : xz("generateSvgReplacementMutation", BB, jB)
    }

    function fQ(BB) {
      var jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!fB) return Promise.resolve();
      var zB = EB.documentElement.classList,
        QB = function(BB) {
          return zB.add("".concat(gj, "-").concat(BB))
        },
        nB = function(BB) {
          return zB.remove("".concat(gj, "-").concat(BB))
        },
        dB = ej.autoFetchSvg ? [].concat(aB(Bj), aB(aj)) : DB.concat(Object.keys(iQ));
      dB.includes("fa") || dB.push("fa");
      var IB = [".".concat(Vj, ":not([").concat(yj, "])")].concat(dB.map((function(BB) {
        return ".".concat(BB, ":not([").concat(yj, "])")
      }))).join(", ");
      if (0 === IB.length) return Promise.resolve();
      var NB = [];
      try {
        NB = Cj(BB.querySelectorAll(IB))
      } catch (pB) {}
      if (!(NB.length > 0)) return Promise.resolve();
      QB("pending"), nB("complete");
      var uB = UQ("onTree"),
        UB = NB.reduce((function(BB, jB) {
          try {
            var zB = qQ(jB);
            zB && BB.push(zB)
          } catch (pB) {
            Mj || "MissingIcon" === pB.name && console.error(pB)
          }
          return BB
        }), []);
      return new Promise((function(BB, zB) {
        Promise.all(UB).then((function(zB) {
          kQ(zB, (function() {
            QB("active"), QB("complete"), nB("pending"), "function" === typeof jB && jB(), uB(), BB()
          }))
        })).catch((function(BB) {
          uB(), zB(BB)
        }))
      }))
    }

    function oQ(BB) {
      var jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      qQ(BB).then((function(BB) {
        BB && kQ([BB], jB)
      }))
    }
    var HQ = function(BB) {
        var jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          zB = jB.transform,
          QB = void 0 === zB ? xj : zB,
          nB = jB.symbol,
          dB = void 0 !== nB && nB,
          IB = jB.mask,
          NB = void 0 === IB ? null : IB,
          UB = jB.maskId,
          aB = void 0 === UB ? null : UB,
          pB = jB.classes,
          rB = void 0 === pB ? [] : pB,
          sB = jB.attributes,
          JB = void 0 === sB ? {} : sB,
          mB = jB.styles,
          yB = void 0 === mB ? {} : mB;
        if (BB) {
          var kB = BB.prefix,
            GB = BB.iconName,
            LB = BB.icon;
          return Rz(uB({
            type: "icon"
          }, BB), (function() {
            return wz("beforeDOMElementCreation", {
              iconDefinition: BB,
              params: jB
            }), Oz({
              icons: {
                main: zQ(LB),
                mask: NB ? zQ(NB.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: kB,
              iconName: GB,
              transform: uB(uB({}, xj), QB),
              symbol: dB,
              maskId: aB,
              extra: {
                attributes: JB,
                styles: yB,
                classes: rB
              }
            })
          }))
        }
      },
      DQ = {
        mixout: function() {
          return {
            icon: (BB = HQ, function(jB) {
              var zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                QB = (jB || {}).icon ? jB : Kz(jB || {}),
                nB = zB.mask;
              return nB && (nB = (nB || {}).icon ? nB : Kz(nB || {})), BB(QB, uB(uB({}, zB), {}, {
                mask: nB
              }))
            })
          };
          var BB
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(BB) {
              return BB.treeCallback = fQ, BB.nodeCallback = oQ, BB
            }
          }
        },
        provides: function(BB) {
          BB.i2svg = function(BB) {
            var jB = BB.node,
              zB = void 0 === jB ? EB : jB,
              QB = BB.callback;
            return fQ(zB, void 0 === QB ? function() {} : QB)
          }, BB.generateSvgReplacementMutation = function(BB, jB) {
            var zB = jB.iconName,
              QB = jB.prefix,
              nB = jB.transform,
              dB = jB.symbol,
              IB = jB.mask,
              NB = jB.maskId,
              uB = jB.extra;
            return new Promise((function(jB, aB) {
              Promise.all([nQ(zB, QB), IB.iconName ? nQ(IB.iconName, IB.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(IB) {
                var aB = UB(IB, 2),
                  pB = aB[0],
                  rB = aB[1];
                jB([BB, Oz({
                  icons: {
                    main: pB,
                    mask: rB
                  },
                  prefix: QB,
                  iconName: zB,
                  transform: nB,
                  symbol: dB,
                  maskId: NB,
                  extra: uB,
                  watchable: !0
                })])
              })).catch(aB)
            }))
          }, BB.generateAbstractIcon = function(BB) {
            var jB, zB = BB.children,
              QB = BB.attributes,
              nB = BB.main,
              dB = BB.transform,
              IB = vj(BB.styles);
            return IB.length > 0 && (QB.style = IB), Rj(dB) && (jB = xz("generateAbstractTransformGrouping", {
              main: nB,
              transform: dB,
              containerWidth: nB.width,
              iconWidth: nB.width
            })), zB.push(jB || nB.icon), {
              children: zB,
              attributes: QB
            }
          }
        }
      },
      FQ = {
        mixout: function() {
          return {
            layer: function(BB) {
              var jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                zB = jB.classes,
                QB = void 0 === zB ? [] : zB;
              return Rz({
                type: "layer"
              }, (function() {
                wz("beforeDOMElementCreation", {
                  assembler: BB,
                  params: jB
                });
                var zB = [];
                return BB((function(BB) {
                  Array.isArray(BB) ? BB.map((function(BB) {
                    zB = zB.concat(BB.abstract)
                  })) : zB = zB.concat(BB.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(ej.cssPrefix, "-layers")].concat(aB(QB)).join(" ")
                  },
                  children: zB
                }]
              }))
            }
          }
        }
      },
      YQ = {
        mixout: function() {
          return {
            counter: function(BB) {
              var jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                zB = jB.title,
                QB = void 0 === zB ? null : zB,
                nB = jB.classes,
                dB = void 0 === nB ? [] : nB,
                IB = jB.attributes,
                NB = void 0 === IB ? {} : IB,
                UB = jB.styles,
                pB = void 0 === UB ? {} : UB;
              return Rz({
                type: "counter",
                content: BB
              }, (function() {
                return wz("beforeDOMElementCreation", {
                    content: BB,
                    params: jB
                  }),
                  function(BB) {
                    var jB = BB.content,
                      zB = BB.extra,
                      QB = uB(uB({}, zB.attributes), {}, {
                        class: zB.classes.join(" ")
                      }),
                      nB = vj(zB.styles);
                    nB.length > 0 && (QB.style = nB);
                    var dB = [];
                    return dB.push({
                      tag: "span",
                      attributes: QB,
                      children: [jB]
                    }), dB
                  }({
                    content: BB.toString(),
                    title: QB,
                    extra: {
                      attributes: NB,
                      styles: pB,
                      classes: ["".concat(ej.cssPrefix, "-layers-counter")].concat(aB(dB))
                    }
                  })
              }))
            }
          }
        }
      },
      VQ = {
        mixout: function() {
          return {
            text: function(BB) {
              var jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                zB = jB.transform,
                QB = void 0 === zB ? xj : zB,
                nB = jB.classes,
                dB = void 0 === nB ? [] : nB,
                IB = jB.attributes,
                NB = void 0 === IB ? {} : IB,
                UB = jB.styles,
                pB = void 0 === UB ? {} : UB;
              return Rz({
                type: "text",
                content: BB
              }, (function() {
                return wz("beforeDOMElementCreation", {
                  content: BB,
                  params: jB
                }), BQ({
                  content: BB,
                  transform: uB(uB({}, xj), QB),
                  extra: {
                    attributes: NB,
                    styles: pB,
                    classes: ["".concat(ej.cssPrefix, "-layers-text")].concat(aB(dB))
                  }
                })
              }))
            }
          }
        },
        provides: function(BB) {
          BB.generateLayersText = function(BB, jB) {
            var zB = jB.transform,
              QB = jB.extra,
              nB = null,
              dB = null;
            if (oB) {
              var IB = parseInt(getComputedStyle(BB).fontSize, 10),
                NB = BB.getBoundingClientRect();
              nB = NB.width / IB, dB = NB.height / IB
            }
            return Promise.resolve([BB, BQ({
              content: BB.innerHTML,
              width: nB,
              height: dB,
              transform: zB,
              extra: QB,
              watchable: !0
            })])
          }
        }
      },
      hQ = new RegExp('"', "ug"),
      XQ = [1105920, 1112319],
      ZQ = uB(uB(uB(uB({}, {
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
      AQ = Object.keys(ZQ).reduce((function(BB, jB) {
        return BB[jB.toLowerCase()] = ZQ[jB], BB
      }), {}),
      TQ = Object.keys(AQ).reduce((function(BB, jB) {
        var zB = AQ[jB];
        return BB[jB] = zB[900] || aB(Object.entries(zB))[0][1], BB
      }), {});

    function PQ(BB, jB) {
      var zB = "".concat("data-fa-pseudo-element-pending").concat(jB.replace(":", "-"));
      return new Promise((function(QB, nB) {
        if (null !== BB.getAttribute(zB)) return QB();
        var dB = Cj(BB.children).filter((function(BB) {
            return BB.getAttribute(kj) === jB
          }))[0],
          IB = MB.getComputedStyle(BB, jB),
          NB = IB.getPropertyValue("font-family"),
          UB = NB.match(hj),
          pB = IB.getPropertyValue("font-weight"),
          rB = IB.getPropertyValue("content");
        if (dB && !UB) return BB.removeChild(dB), QB();
        if (UB && "none" !== rB && "" !== rB) {
          var sB = IB.getPropertyValue("content"),
            JB = function(BB, jB) {
              var zB = BB.replace(/^['"]|['"]$/g, "").toLowerCase(),
                QB = parseInt(jB),
                nB = isNaN(QB) ? "normal" : QB;
              return (AQ[zB] || {})[nB] || TQ[zB]
            }(NB, pB),
            mB = function(BB) {
              return pz(aB(BB.replace(hQ, ""))[0] || "")
            }(sB),
            yB = UB[0].startsWith("FontAwesome"),
            kB = function(BB) {
              var jB = BB.getPropertyValue("font-feature-settings").includes("ss01"),
                zB = BB.getPropertyValue("content").replace(hQ, ""),
                QB = zB.codePointAt(0),
                nB = QB >= XQ[0] && QB <= XQ[1],
                dB = 2 === zB.length && zB[0] === zB[1];
              return nB || dB || jB
            }(IB),
            GB = fz(JB, mB),
            LB = GB;
          if (yB) {
            var gB = function(BB) {
              var jB = Sz[BB],
                zB = fz("fas", BB);
              return jB || (zB ? {
                prefix: "fas",
                iconName: zB
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(mB);
            gB.iconName && gB.prefix && (GB = gB.iconName, JB = gB.prefix)
          }
          if (!GB || kB || dB && dB.getAttribute(Gj) === JB && dB.getAttribute(Lj) === LB) QB();
          else {
            BB.setAttribute(zB, LB), dB && BB.removeChild(dB);
            var tB = {
                iconName: null,
                prefix: null,
                transform: xj,
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
              SB = tB.extra;
            SB.attributes[kj] = jB, nQ(GB, JB).then((function(nB) {
              var dB = Oz(uB(uB({}, tB), {}, {
                  icons: {
                    main: nB,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: JB,
                  iconName: LB,
                  extra: SB,
                  watchable: !0
                })),
                IB = EB.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === jB ? BB.insertBefore(IB, BB.firstChild) : BB.appendChild(IB), IB.outerHTML = dB.map((function(BB) {
                return uz(BB)
              })).join("\n"), BB.removeAttribute(zB), QB()
            })).catch(nB)
          }
        } else QB()
      }))
    }

    function WQ(BB) {
      return Promise.all([PQ(BB, "::before"), PQ(BB, "::after")])
    }

    function eQ(BB) {
      return BB.parentNode !== document.head && !~tj.indexOf(BB.tagName.toUpperCase()) && !BB.getAttribute(kj) && (!BB.parentNode || "svg" !== BB.parentNode.tagName)
    }
    var lQ = function(BB) {
        return !!BB && Sj.some((function(jB) {
          return BB.includes(jB)
        }))
      },
      wQ = function(BB) {
        if (!BB) return [];
        var jB = new Set,
          zB = BB.split(/,(?![^()]*\))/).map((function(BB) {
            return BB.trim()
          }));
        zB = zB.flatMap((function(BB) {
          return BB.includes("(") ? BB : BB.split(",").map((function(BB) {
            return BB.trim()
          }))
        }));
        var QB, nB = dB(zB);
        try {
          for (nB.s(); !(QB = nB.n()).done;) {
            var IB = QB.value;
            if (lQ(IB)) {
              var NB = Sj.reduce((function(BB, jB) {
                return BB.replace(jB, "")
              }), IB);
              "" !== NB && "*" !== NB && jB.add(NB)
            }
          }
        } catch (uB) {
          nB.e(uB)
        } finally {
          nB.f()
        }
        return jB
      };

    function xQ(BB) {
      if (fB) {
        var jB;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) jB = BB;
        else if (ej.searchPseudoElementsFullScan) jB = BB.querySelectorAll("*");
        else {
          var zB, QB = new Set,
            nB = dB(document.styleSheets);
          try {
            for (nB.s(); !(zB = nB.n()).done;) {
              var IB = zB.value;
              try {
                var NB, uB = dB(IB.cssRules);
                try {
                  for (uB.s(); !(NB = uB.n()).done;) {
                    var UB, aB = NB.value,
                      pB = dB(wQ(aB.selectorText));
                    try {
                      for (pB.s(); !(UB = pB.n()).done;) {
                        var rB = UB.value;
                        QB.add(rB)
                      }
                    } catch (JB) {
                      pB.e(JB)
                    } finally {
                      pB.f()
                    }
                  }
                } catch (JB) {
                  uB.e(JB)
                } finally {
                  uB.f()
                }
              } catch (mB) {
                ej.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(IB.href, " (").concat(mB.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (JB) {
            nB.e(JB)
          } finally {
            nB.f()
          }
          if (!QB.size) return;
          var sB = Array.from(QB).join(", ");
          try {
            jB = BB.querySelectorAll(sB)
          } catch (yB) {}
        }
        return new Promise((function(BB, zB) {
          var QB = Cj(jB).filter(eQ).map(WQ),
            nB = UQ("searchPseudoElements");
          LQ(), Promise.all(QB).then((function() {
            nB(), gQ(), BB()
          })).catch((function() {
            nB(), gQ(), zB()
          }))
        }))
      }
    }
    var KQ = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(BB) {
              return BB.pseudoElementsCallback = xQ, BB
            }
          }
        },
        provides: function(BB) {
          BB.pseudoElements2svg = function(BB) {
            var jB = BB.node,
              zB = void 0 === jB ? EB : jB;
            ej.searchPseudoElements && xQ(zB)
          }
        }
      },
      CQ = !1,
      cQ = function(BB) {
        return BB.toLowerCase().split(" ").reduce((function(BB, jB) {
          var zB = jB.toLowerCase().split("-"),
            QB = zB[0],
            nB = zB.slice(1).join("-");
          if (QB && "h" === nB) return BB.flipX = !0, BB;
          if (QB && "v" === nB) return BB.flipY = !0, BB;
          if (nB = parseFloat(nB), isNaN(nB)) return BB;
          switch (QB) {
            case "grow":
              BB.size = BB.size + nB;
              break;
            case "shrink":
              BB.size = BB.size - nB;
              break;
            case "left":
              BB.x = BB.x - nB;
              break;
            case "right":
              BB.x = BB.x + nB;
              break;
            case "up":
              BB.y = BB.y - nB;
              break;
            case "down":
              BB.y = BB.y + nB;
              break;
            case "rotate":
              BB.rotate = BB.rotate + nB
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
      bQ = {
        mixout: function() {
          return {
            parse: {
              transform: function(BB) {
                return cQ(BB)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(BB, jB) {
              var zB = jB.getAttribute("data-fa-transform");
              return zB && (BB.transform = cQ(zB)), BB
            }
          }
        },
        provides: function(BB) {
          BB.generateAbstractTransformGrouping = function(BB) {
            var jB = BB.main,
              zB = BB.transform,
              QB = BB.containerWidth,
              nB = BB.iconWidth,
              dB = {
                transform: "translate(".concat(QB / 2, " 256)")
              },
              IB = "translate(".concat(32 * zB.x, ", ").concat(32 * zB.y, ") "),
              NB = "scale(".concat(zB.size / 16 * (zB.flipX ? -1 : 1), ", ").concat(zB.size / 16 * (zB.flipY ? -1 : 1), ") "),
              UB = "rotate(".concat(zB.rotate, " 0 0)"),
              aB = {
                outer: dB,
                inner: {
                  transform: "".concat(IB, " ").concat(NB, " ").concat(UB)
                },
                path: {
                  transform: "translate(".concat(nB / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: uB({}, aB.outer),
              children: [{
                tag: "g",
                attributes: uB({}, aB.inner),
                children: [{
                  tag: jB.icon.tag,
                  children: jB.icon.children,
                  attributes: uB(uB({}, jB.icon.attributes), aB.path)
                }]
              }]
            }
          }
        }
      },
      vQ = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function RQ(BB) {
      var jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return BB.attributes && (BB.attributes.fill || jB) && (BB.attributes.fill = "black"), BB
    }
    var OQ = {
        hooks: function() {
          return {
            parseNodeAttributes: function(BB, jB) {
              var zB = jB.getAttribute("data-fa-mask"),
                QB = zB ? hz(zB.split(" ").map((function(BB) {
                  return BB.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return QB.prefix || (QB.prefix = Dz()), BB.mask = QB, BB.maskId = jB.getAttribute("data-fa-mask-id"), BB
            }
          }
        },
        provides: function(BB) {
          BB.generateAbstractMask = function(BB) {
            var jB, zB = BB.children,
              QB = BB.attributes,
              nB = BB.main,
              dB = BB.mask,
              IB = BB.maskId,
              NB = BB.transform,
              UB = nB.width,
              aB = nB.icon,
              pB = dB.width,
              rB = dB.icon,
              sB = function(BB) {
                var jB = BB.transform,
                  zB = BB.containerWidth,
                  QB = BB.iconWidth,
                  nB = {
                    transform: "translate(".concat(zB / 2, " 256)")
                  },
                  dB = "translate(".concat(32 * jB.x, ", ").concat(32 * jB.y, ") "),
                  IB = "scale(".concat(jB.size / 16 * (jB.flipX ? -1 : 1), ", ").concat(jB.size / 16 * (jB.flipY ? -1 : 1), ") "),
                  NB = "rotate(".concat(jB.rotate, " 0 0)");
                return {
                  outer: nB,
                  inner: {
                    transform: "".concat(dB, " ").concat(IB, " ").concat(NB)
                  },
                  path: {
                    transform: "translate(".concat(QB / 2 * -1, " -256)")
                  }
                }
              }({
                transform: NB,
                containerWidth: pB,
                iconWidth: UB
              }),
              JB = {
                tag: "rect",
                attributes: uB(uB({}, vQ), {}, {
                  fill: "white"
                })
              },
              mB = aB.children ? {
                children: aB.children.map(RQ)
              } : {},
              yB = {
                tag: "g",
                attributes: uB({}, sB.inner),
                children: [RQ(uB({
                  tag: aB.tag,
                  attributes: uB(uB({}, aB.attributes), sB.path)
                }, mB))]
              },
              kB = {
                tag: "g",
                attributes: uB({}, sB.outer),
                children: [yB]
              },
              GB = "mask-".concat(IB || Kj()),
              LB = "clip-".concat(IB || Kj()),
              gB = {
                tag: "mask",
                attributes: uB(uB({}, vQ), {}, {
                  id: GB,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [JB, kB]
              },
              tB = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: LB
                  },
                  children: (jB = rB, "g" === jB.tag ? jB.children : [jB])
                }, gB]
              };
            return zB.push(tB, {
              tag: "rect",
              attributes: uB({
                fill: "currentColor",
                "clip-path": "url(#".concat(LB, ")"),
                mask: "url(#".concat(GB, ")")
              }, vQ)
            }), {
              children: zB,
              attributes: QB
            }
          }
        }
      },
      Bn = {
        provides: function(BB) {
          var jB = !1;
          MB.matchMedia && (jB = MB.matchMedia("(prefers-reduced-motion: reduce)").matches), BB.missingIconAbstract = function() {
            var BB = [],
              zB = {
                fill: "currentColor"
              },
              QB = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            BB.push({
              tag: "path",
              attributes: uB(uB({}, zB), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var nB = uB(uB({}, QB), {}, {
                attributeName: "opacity"
              }),
              dB = {
                tag: "circle",
                attributes: uB(uB({}, zB), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return jB || dB.children.push({
              tag: "animate",
              attributes: uB(uB({}, QB), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: uB(uB({}, nB), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), BB.push(dB), BB.push({
              tag: "path",
              attributes: uB(uB({}, zB), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: jB ? [] : [{
                tag: "animate",
                attributes: uB(uB({}, nB), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), jB || BB.push({
              tag: "path",
              attributes: uB(uB({}, zB), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: uB(uB({}, nB), {}, {
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
    ! function(BB, jB) {
      var zB = jB.mixoutsTo;
      Tz = BB, Pz = {}, Object.keys(Wz).forEach((function(BB) {
        -1 === ez.indexOf(BB) && delete Wz[BB]
      })), Tz.forEach((function(BB) {
        var jB = BB.mixout ? BB.mixout() : {};
        if (Object.keys(jB).forEach((function(BB) {
            "function" === typeof jB[BB] && (zB[BB] = jB[BB]), "object" === rB(jB[BB]) && Object.keys(jB[BB]).forEach((function(QB) {
              zB[BB] || (zB[BB] = {}), zB[BB][QB] = jB[BB][QB]
            }))
          })), BB.hooks) {
          var QB = BB.hooks();
          Object.keys(QB).forEach((function(BB) {
            Pz[BB] || (Pz[BB] = []), Pz[BB].push(QB[BB])
          }))
        }
        BB.provides && BB.provides(Wz)
      }))
    }([zz, DQ, FQ, YQ, VQ, KQ, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              LQ(), CQ = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            SQ(lz("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            tQ && tQ.disconnect()
          },
          watch: function(BB) {
            var jB = BB.observeMutationsRoot;
            CQ ? gQ() : SQ(lz("mutationObserverCallbacks", {
              observeMutationsRoot: jB
            }))
          }
        }
      }
    }, bQ, OQ, Bn, {
      hooks: function() {
        return {
          parseNodeAttributes: function(BB, jB) {
            var zB = jB.getAttribute("data-fa-symbol"),
              QB = null !== zB && ("" === zB || zB);
            return BB.symbol = QB, BB
          }
        }
      }
    }], {
      mixoutsTo: bz
    });
    var jn = bz.noAuto,
      zn = bz.config,
      Qn = bz.library,
      nn = bz.dom,
      dn = bz.parse,
      In = bz.findIconDefinition,
      Nn = bz.toHtml,
      un = bz.icon,
      Un = bz.layer,
      an = bz.text,
      pn = bz.counter
  },
  6637: BB => {
    BB.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);