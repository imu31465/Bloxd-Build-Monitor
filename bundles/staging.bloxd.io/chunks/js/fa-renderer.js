/*! For license information please see c6gaap.fa-renderer.4f816dd6.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6831: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      FontAwesomeIcon: () => wB
    });
    var TB = ZB(6825),
      JB = ZB(5115),
      oB = ZB.n(JB),
      GB = ZB(63);

    function vB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function kB(BB, IB, ZB) {
      return (IB = function(BB) {
        var IB = function(BB, IB) {
          if ("object" != typeof BB || !BB) return BB;
          var ZB = BB[Symbol.toPrimitive];
          if (void 0 !== ZB) {
            var TB = ZB.call(BB, IB || "default");
            if ("object" != typeof TB) return TB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === IB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == typeof IB ? IB : IB + ""
      }(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function cB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function nB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? cB(Object(ZB), !0).forEach((function(IB) {
          kB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : cB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function hB(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        var ZB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != ZB) {
          var TB, JB, oB, GB, vB = [],
            kB = !0,
            cB = !1;
          try {
            if (oB = (ZB = ZB.call(BB)).next, 0 === IB) {
              if (Object(ZB) !== ZB) return;
              kB = !1
            } else
              for (; !(kB = (TB = oB.call(ZB)).done) && (vB.push(TB.value), vB.length !== IB); kB = !0);
          } catch (BB) {
            cB = !0, JB = BB
          } finally {
            try {
              if (!kB && null != ZB.return && (GB = ZB.return(), Object(GB) !== GB)) return
            } finally {
              if (cB) throw JB
            }
          }
          return vB
        }
      }(BB, IB) || NB(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function zB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return vB(BB)
      }(BB) || function(BB) {
        if ("undefined" != typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || NB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function FB(BB) {
      return FB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, FB(BB)
    }

    function NB(BB, IB) {
      if (BB) {
        if ("string" == typeof BB) return vB(BB, IB);
        var ZB = {}.toString.call(BB).slice(8, -1);
        return "Object" === ZB && BB.constructor && (ZB = BB.constructor.name), "Map" === ZB || "Set" === ZB ? Array.from(BB) : "Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB) ? vB(BB, IB) : void 0
      }
    }
    var gB;
    try {
      var qB = ZB(6836);
      gB = qB.version
    } catch (YB) {
      gB = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function yB(BB) {
      var IB = BB.beat,
        ZB = BB.fade,
        TB = BB.beatFade,
        JB = BB.bounce,
        oB = BB.shake,
        GB = BB.flash,
        vB = BB.spin,
        cB = BB.spinPulse,
        nB = BB.spinReverse,
        zB = BB.pulse,
        FB = BB.fixedWidth,
        NB = BB.inverse,
        qB = BB.border,
        yB = BB.listItem,
        UB = BB.flip,
        WB = BB.size,
        dB = BB.rotation,
        CB = BB.pull,
        QB = BB.swapOpacity,
        sB = BB.rotateBy,
        wB = BB.widthAuto,
        OB = function(BB, IB) {
          for (var ZB = hB(BB.split("-"), 2), TB = ZB[0], JB = ZB[1], oB = hB(IB.split("-"), 2), GB = oB[0], vB = oB[1], kB = TB.split("."), cB = GB.split("."), nB = 0; nB < Math.max(kB.length, cB.length); nB++) {
            var zB = kB[nB] || "0",
              FB = cB[nB] || "0",
              NB = parseInt(zB, 10),
              gB = parseInt(FB, 10);
            if (NB !== gB) return NB > gB
          }
          for (var qB = 0; qB < Math.max(kB.length, cB.length); qB++) {
            var yB = kB[qB] || "0",
              UB = cB[qB] || "0";
            if (yB !== UB && yB.length !== UB.length) return yB.length < UB.length
          }
          return !(JB && !vB)
        }(gB, "7.0.0"),
        YB = kB(kB(kB(kB(kB(kB({
          "fa-beat": IB,
          "fa-fade": ZB,
          "fa-beat-fade": TB,
          "fa-bounce": JB,
          "fa-shake": oB,
          "fa-flash": GB,
          "fa-spin": vB,
          "fa-spin-reverse": nB,
          "fa-spin-pulse": cB,
          "fa-pulse": zB,
          "fa-fw": FB,
          "fa-inverse": NB,
          "fa-border": qB,
          "fa-li": yB,
          "fa-flip": !0 === UB,
          "fa-flip-horizontal": "horizontal" === UB || "both" === UB,
          "fa-flip-vertical": "vertical" === UB || "both" === UB
        }, "fa-".concat(WB), "undefined" !== typeof WB && null !== WB), "fa-rotate-".concat(dB), "undefined" !== typeof dB && null !== dB && 0 !== dB), "fa-pull-".concat(CB), "undefined" !== typeof CB && null !== CB), "fa-swap-opacity", QB), "fa-rotate-by", OB && sB), "fa-width-auto", OB && wB);
      return Object.keys(YB).map((function(BB) {
        return YB[BB] ? BB : null
      })).filter((function(BB) {
        return BB
      }))
    }

    function UB(BB) {
      return IB = BB, (IB -= 0) === IB ? BB : (BB = BB.replace(/[\-_\s]+(.)?/g, (function(BB, IB) {
        return IB ? IB.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + BB.substr(1);
      var IB
    }
    var WB = ["style"];
    var dB = !1;
    try {
      dB = !0
    } catch (YB) {}

    function CB(BB) {
      return BB && "object" === FB(BB) && BB.prefix && BB.iconName && BB.icon ? BB : TB.parse.icon ? TB.parse.icon(BB) : null === BB ? null : BB && "object" === FB(BB) && BB.prefix && BB.iconName ? BB : Array.isArray(BB) && 2 === BB.length ? {
        prefix: BB[0],
        iconName: BB[1]
      } : "string" === typeof BB ? {
        prefix: "fas",
        iconName: BB
      } : void 0
    }

    function QB(BB, IB) {
      return Array.isArray(IB) && IB.length > 0 || !Array.isArray(IB) && IB ? kB({}, BB, IB) : {}
    }
    var sB = {
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
      wB = GB.forwardRef((function(BB, IB) {
        var ZB = nB(nB({}, sB), BB),
          JB = ZB.icon,
          oB = ZB.mask,
          GB = ZB.symbol,
          vB = ZB.className,
          kB = ZB.title,
          cB = ZB.titleId,
          hB = ZB.maskId,
          FB = CB(JB),
          NB = QB("classes", [].concat(zB(yB(ZB)), zB((vB || "").split(" ")))),
          gB = QB("transform", "string" === typeof ZB.transform ? TB.parse.transform(ZB.transform) : ZB.transform),
          qB = QB("mask", CB(oB)),
          UB = (0, TB.icon)(FB, nB(nB(nB(nB({}, NB), gB), qB), {}, {
            symbol: GB,
            title: kB,
            titleId: cB,
            maskId: hB
          }));
        if (!UB) return function() {
          var BB;
          !dB && console && "function" === typeof console.error && (BB = console).error.apply(BB, arguments)
        }("Could not find icon", FB), null;
        var WB = UB.abstract,
          wB = {
            ref: IB
          };
        return Object.keys(ZB).forEach((function(BB) {
          sB.hasOwnProperty(BB) || (wB[BB] = ZB[BB])
        })), OB(WB[0], wB)
      }));
    wB.displayName = "FontAwesomeIcon", wB.propTypes = {
      beat: oB().bool,
      border: oB().bool,
      beatFade: oB().bool,
      bounce: oB().bool,
      className: oB().string,
      fade: oB().bool,
      flash: oB().bool,
      mask: oB().oneOfType([oB().object, oB().array, oB().string]),
      maskId: oB().string,
      fixedWidth: oB().bool,
      inverse: oB().bool,
      flip: oB().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: oB().oneOfType([oB().object, oB().array, oB().string]),
      listItem: oB().bool,
      pull: oB().oneOf(["right", "left"]),
      pulse: oB().bool,
      rotation: oB().oneOf([0, 90, 180, 270]),
      rotateBy: oB().bool,
      shake: oB().bool,
      size: oB().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: oB().bool,
      spinPulse: oB().bool,
      spinReverse: oB().bool,
      symbol: oB().oneOfType([oB().bool, oB().string]),
      title: oB().string,
      titleId: oB().string,
      transform: oB().oneOfType([oB().string, oB().object]),
      swapOpacity: oB().bool,
      widthAuto: oB().bool
    };
    var OB = function BB(IB, ZB) {
      var TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof ZB) return ZB;
      var JB = (ZB.children || []).map((function(ZB) {
          return BB(IB, ZB)
        })),
        oB = Object.keys(ZB.attributes || {}).reduce((function(BB, IB) {
          var TB = ZB.attributes[IB];
          switch (IB) {
            case "class":
              BB.attrs.className = TB, delete ZB.attributes.class;
              break;
            case "style":
              BB.attrs.style = TB.split(";").map((function(BB) {
                return BB.trim()
              })).filter((function(BB) {
                return BB
              })).reduce((function(BB, IB) {
                var ZB, TB = IB.indexOf(":"),
                  JB = UB(IB.slice(0, TB)),
                  oB = IB.slice(TB + 1).trim();
                return JB.startsWith("webkit") ? BB[(ZB = JB, ZB.charAt(0).toUpperCase() + ZB.slice(1))] = oB : BB[JB] = oB, BB
              }), {});
              break;
            default:
              0 === IB.indexOf("aria-") || 0 === IB.indexOf("data-") ? BB.attrs[IB.toLowerCase()] = TB : BB.attrs[UB(IB)] = TB
          }
          return BB
        }), {
          attrs: {}
        }),
        GB = TB.style,
        vB = void 0 === GB ? {} : GB,
        kB = function(BB, IB) {
          if (null == BB) return {};
          var ZB, TB, JB = function(BB, IB) {
            if (null == BB) return {};
            var ZB = {};
            for (var TB in BB)
              if ({}.hasOwnProperty.call(BB, TB)) {
                if (-1 !== IB.indexOf(TB)) continue;
                ZB[TB] = BB[TB]
              } return ZB
          }(BB, IB);
          if (Object.getOwnPropertySymbols) {
            var oB = Object.getOwnPropertySymbols(BB);
            for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], -1 === IB.indexOf(ZB) && {}.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
          }
          return JB
        }(TB, WB);
      return oB.attrs.style = nB(nB({}, oB.attrs.style), vB), IB.apply(void 0, [ZB.tag, nB(nB({}, oB.attrs), kB)].concat(zB(JB)))
    }.bind(null, GB.createElement)
  },
  5117: (BB, IB, ZB) => {
    var TB = ZB(5124);

    function JB() {}

    function oB() {}
    oB.resetWarningCache = JB, BB.exports = function() {
      function BB(BB, IB, ZB, JB, oB, GB) {
        if (GB !== TB) {
          var vB = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw vB.name = "Invariant Violation", vB
        }
      }

      function IB() {
        return BB
      }
      BB.isRequired = BB;
      var ZB = {
        array: BB,
        bigint: BB,
        bool: BB,
        func: BB,
        number: BB,
        object: BB,
        string: BB,
        symbol: BB,
        any: BB,
        arrayOf: IB,
        element: BB,
        elementType: BB,
        instanceOf: IB,
        node: BB,
        objectOf: IB,
        oneOf: IB,
        oneOfType: IB,
        shape: IB,
        exact: IB,
        checkPropTypes: oB,
        resetWarningCache: JB
      };
      return ZB.PropTypes = ZB, ZB
    }
  },
  5115: (BB, IB, ZB) => {
    BB.exports = ZB(5117)()
  },
  5124: BB => {
    BB.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6825: (BB, IB, ZB) => {
    function TB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function JB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, hB(TB.key), TB)
      }
    }

    function oB(BB, IB) {
      var ZB = "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
      if (!ZB) {
        if (Array.isArray(BB) || (ZB = FB(BB)) || IB && BB && "number" == typeof BB.length) {
          ZB && (BB = ZB);
          var TB = 0,
            JB = function() {};
          return {
            s: JB,
            n: function() {
              return TB >= BB.length ? {
                done: !0
              } : {
                done: !1,
                value: BB[TB++]
              }
            },
            e: function(BB) {
              throw BB
            },
            f: JB
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var oB, GB = !0,
        vB = !1;
      return {
        s: function() {
          ZB = ZB.call(BB)
        },
        n: function() {
          var BB = ZB.next();
          return GB = BB.done, BB
        },
        e: function(BB) {
          vB = !0, oB = BB
        },
        f: function() {
          try {
            GB || null == ZB.return || ZB.return()
          } finally {
            if (vB) throw oB
          }
        }
      }
    }

    function GB(BB, IB, ZB) {
      return (IB = hB(IB)) in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function vB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function kB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? vB(Object(ZB), !0).forEach((function(IB) {
          GB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : vB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function cB(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        var ZB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != ZB) {
          var TB, JB, oB, GB, vB = [],
            kB = !0,
            cB = !1;
          try {
            if (oB = (ZB = ZB.call(BB)).next, 0 === IB) {
              if (Object(ZB) !== ZB) return;
              kB = !1
            } else
              for (; !(kB = (TB = oB.call(ZB)).done) && (vB.push(TB.value), vB.length !== IB); kB = !0);
          } catch (BB) {
            cB = !0, JB = BB
          } finally {
            try {
              if (!kB && null != ZB.return && (GB = ZB.return(), Object(GB) !== GB)) return
            } finally {
              if (cB) throw JB
            }
          }
          return vB
        }
      }(BB, IB) || FB(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return TB(BB)
      }(BB) || function(BB) {
        if ("undefined" != typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || FB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hB(BB) {
      var IB = function(BB, IB) {
        if ("object" != typeof BB || !BB) return BB;
        var ZB = BB[Symbol.toPrimitive];
        if (void 0 !== ZB) {
          var TB = ZB.call(BB, IB || "default");
          if ("object" != typeof TB) return TB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === IB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == typeof IB ? IB : IB + ""
    }

    function zB(BB) {
      return zB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, zB(BB)
    }

    function FB(BB, IB) {
      if (BB) {
        if ("string" == typeof BB) return TB(BB, IB);
        var ZB = {}.toString.call(BB).slice(8, -1);
        return "Object" === ZB && BB.constructor && (ZB = BB.constructor.name), "Map" === ZB || "Set" === ZB ? Array.from(BB) : "Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB) ? TB(BB, IB) : void 0
      }
    }
    ZB.r(IB), ZB.d(IB, {
      api: () => DZ,
      config: () => ZJ,
      counter: () => hJ,
      dom: () => JJ,
      findIconDefinition: () => GJ,
      icon: () => kJ,
      layer: () => cJ,
      library: () => TJ,
      noAuto: () => IJ,
      parse: () => oJ,
      text: () => nJ,
      toHtml: () => vJ
    });
    var NB = function() {},
      gB = {},
      qB = {},
      yB = null,
      UB = {
        mark: NB,
        measure: NB
      };
    try {
      "undefined" !== typeof window && (gB = window), "undefined" !== typeof document && (qB = document), "undefined" !== typeof MutationObserver && (yB = MutationObserver), "undefined" !== typeof performance && (UB = performance)
    } catch (lB) {}
    var WB, dB, CB = (gB.navigator || {}).userAgent,
      QB = void 0 === CB ? "" : CB,
      sB = gB,
      wB = qB,
      OB = yB,
      YB = UB,
      iB = (sB.document, !!wB.documentElement && !!wB.head && "function" === typeof wB.addEventListener && "function" === typeof wB.createElement),
      pB = ~QB.indexOf("MSIE") || ~QB.indexOf("Trident/"),
      aB = {
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
      HB = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      MB = "classic",
      jB = "duotone",
      PB = "sharp",
      RB = "sharp-duotone",
      rB = "chisel",
      mB = "etch",
      XB = "graphite",
      LB = "jelly",
      eB = "jelly-duo",
      uB = "jelly-fill",
      fB = "notdog",
      lB = "notdog-duo",
      AB = "slab",
      tB = "slab-press",
      bB = "thumbprint",
      xB = "utility",
      EB = "utility-duo",
      DB = "utility-fill",
      KB = "whiteboard",
      VB = [MB, jB, PB, RB, rB, mB, XB, LB, eB, uB, fB, lB, AB, tB, bB, xB, EB, DB, KB],
      SB = (GB(GB(GB(GB(GB(GB(GB(GB(GB(GB(WB = {}, MB, "Classic"), jB, "Duotone"), PB, "Sharp"), RB, "Sharp Duotone"), rB, "Chisel"), mB, "Etch"), XB, "Graphite"), LB, "Jelly"), eB, "Jelly Duo"), uB, "Jelly Fill"), GB(GB(GB(GB(GB(GB(GB(GB(GB(WB, fB, "Notdog"), lB, "Notdog Duo"), AB, "Slab"), tB, "Slab Press"), bB, "Thumbprint"), xB, "Utility"), EB, "Utility Duo"), DB, "Utility Fill"), KB, "Whiteboard"), new Map([
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
      BI = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      II = {
        fak: "kit",
        "fa-kit": "kit"
      },
      ZI = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      TI = (GB(GB({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      JI = {
        "kit-duotone": "fakd"
      },
      oI = "duotone-group",
      GI = "swap-opacity",
      vI = "primary",
      kI = "secondary",
      cI = (GB(GB(GB(GB(GB(GB(GB(GB(GB(GB(dB = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), GB(GB(GB(GB(GB(GB(GB(GB(GB(dB, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), GB(GB({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      nI = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      hI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      zI = hI.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      FI = [].concat(nB(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", oI, GI, vI, kI]).concat(hI.map((function(BB) {
        return "".concat(BB, "x")
      }))).concat(zI.map((function(BB) {
        return "w-".concat(BB)
      }))),
      NI = "___FONT_AWESOME___",
      gI = "svg-inline--fa",
      qI = "data-fa-i2svg",
      yI = "data-fa-pseudo-element",
      UI = "data-prefix",
      WI = "data-icon",
      dI = "fontawesome-i2svg",
      CI = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      QI = ["::before", "::after", ":before", ":after"],
      sI = function() {
        try {
          return !0
        } catch (BB) {
          return !1
        }
      }();

    function wI(BB) {
      return new Proxy(BB, {
        get: function(BB, IB) {
          return IB in BB ? BB[IB] : BB[MB]
        }
      })
    }
    var OI = kB({}, aB);
    OI[MB] = kB(kB(kB(kB({}, {
      "fa-duotone": "duotone"
    }), aB[MB]), II), ZI);
    var YI = wI(OI),
      iI = kB({}, {
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
    iI[MB] = kB(kB(kB(kB({}, {
      duotone: "fad"
    }), iI[MB]), TI), JI);
    var pI = wI(iI),
      aI = kB({}, cI);
    aI[MB] = kB(kB({}, aI[MB]), {
      fak: "fa-kit"
    });
    var HI = wI(aI),
      MI = kB({}, {
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
    MI[MB] = kB(kB({}, MI[MB]), {
      "fa-kit": "fak"
    });
    wI(MI);
    var jI = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      PI = "fa-layers-text",
      RI = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      rI = (wI(kB({}, {
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
      mI = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      XI = [].concat(nB(["kit"]), nB(FI)),
      LI = sB.FontAwesomeConfig || {};
    if (wB && "function" === typeof wB.querySelector) {
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
        var IB = cB(BB, 2),
          ZB = IB[0],
          TB = IB[1],
          JB = function(BB) {
            return "" === BB || "false" !== BB && ("true" === BB || BB)
          }(function(BB) {
            var IB = wB.querySelector("script[" + BB + "]");
            if (IB) return IB.getAttribute(BB)
          }(ZB));
        void 0 !== JB && null !== JB && (LI[TB] = JB)
      }))
    }
    var eI = {
      styleDefault: "solid",
      familyDefault: MB,
      cssPrefix: "fa",
      replacementClass: gI,
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
    LI.familyPrefix && (LI.cssPrefix = LI.familyPrefix);
    var uI = kB(kB({}, eI), LI);
    uI.autoReplaceSvg || (uI.observeMutations = !1);
    var fI = {};
    Object.keys(eI).forEach((function(BB) {
      Object.defineProperty(fI, BB, {
        enumerable: !0,
        set: function(IB) {
          uI[BB] = IB, lI.forEach((function(BB) {
            return BB(fI)
          }))
        },
        get: function() {
          return uI[BB]
        }
      })
    })), Object.defineProperty(fI, "familyPrefix", {
      enumerable: !0,
      set: function(BB) {
        uI.cssPrefix = BB, lI.forEach((function(BB) {
          return BB(fI)
        }))
      },
      get: function() {
        return uI.cssPrefix
      }
    }), sB.FontAwesomeConfig = fI;
    var lI = [];
    var AI = 16,
      tI = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function bI() {
      for (var BB = 12, IB = ""; BB-- > 0;) IB += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return IB
    }

    function xI(BB) {
      for (var IB = [], ZB = (BB || []).length >>> 0; ZB--;) IB[ZB] = BB[ZB];
      return IB
    }

    function EI(BB) {
      return BB.classList ? xI(BB.classList) : (BB.getAttribute("class") || "").split(" ").filter((function(BB) {
        return BB
      }))
    }

    function DI(BB) {
      return "".concat(BB).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function KI(BB) {
      return Object.keys(BB || {}).reduce((function(IB, ZB) {
        return IB + "".concat(ZB, ": ").concat(BB[ZB].trim(), ";")
      }), "")
    }

    function VI(BB) {
      return BB.size !== tI.size || BB.x !== tI.x || BB.y !== tI.y || BB.rotate !== tI.rotate || BB.flipX || BB.flipY
    }

    function SI() {
      var BB = "fa",
        IB = gI,
        ZB = fI.cssPrefix,
        TB = fI.replacementClass,
        JB = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (ZB !== BB || TB !== IB) {
        var oB = new RegExp("\\.".concat(BB, "\\-"), "g"),
          GB = new RegExp("\\--".concat(BB, "\\-"), "g"),
          vB = new RegExp("\\.".concat(IB), "g");
        JB = JB.replace(oB, ".".concat(ZB, "-")).replace(GB, "--".concat(ZB, "-")).replace(vB, ".".concat(TB))
      }
      return JB
    }
    var BZ = !1;

    function IZ() {
      fI.autoAddCss && !BZ && (! function(BB) {
        if (BB && iB) {
          var IB = wB.createElement("style");
          IB.setAttribute("type", "text/css"), IB.innerHTML = BB;
          for (var ZB = wB.head.childNodes, TB = null, JB = ZB.length - 1; JB > -1; JB--) {
            var oB = ZB[JB],
              GB = (oB.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(GB) > -1 && (TB = oB)
          }
          wB.head.insertBefore(IB, TB)
        }
      }(SI()), BZ = !0)
    }
    var ZZ = {
        mixout: function() {
          return {
            dom: {
              css: SI,
              insertCss: IZ
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              IZ()
            },
            beforeI2svg: function() {
              IZ()
            }
          }
        }
      },
      TZ = sB || {};
    TZ[NI] || (TZ[NI] = {}), TZ[NI].styles || (TZ[NI].styles = {}), TZ[NI].hooks || (TZ[NI].hooks = {}), TZ[NI].shims || (TZ[NI].shims = []);
    var JZ = TZ[NI],
      oZ = [],
      GZ = function() {
        wB.removeEventListener("DOMContentLoaded", GZ), vZ = 1, oZ.map((function(BB) {
          return BB()
        }))
      },
      vZ = !1;

    function kZ(BB) {
      var IB = BB.tag,
        ZB = BB.attributes,
        TB = void 0 === ZB ? {} : ZB,
        JB = BB.children,
        oB = void 0 === JB ? [] : JB;
      return "string" === typeof BB ? DI(BB) : "<".concat(IB, " ").concat(function(BB) {
        return Object.keys(BB || {}).reduce((function(IB, ZB) {
          return IB + "".concat(ZB, '="').concat(DI(BB[ZB]), '" ')
        }), "").trim()
      }(TB), ">").concat(oB.map(kZ).join(""), "</").concat(IB, ">")
    }

    function cZ(BB, IB, ZB) {
      if (BB && BB[IB] && BB[IB][ZB]) return {
        prefix: IB,
        iconName: ZB,
        icon: BB[IB][ZB]
      }
    }
    iB && ((vZ = (wB.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(wB.readyState)) || wB.addEventListener("DOMContentLoaded", GZ));
    var nZ = function(BB, IB, ZB, TB) {
      var JB, oB, GB, vB = Object.keys(BB),
        kB = vB.length,
        cB = void 0 !== TB ? function(BB, IB) {
          return function(ZB, TB, JB, oB) {
            return BB.call(IB, ZB, TB, JB, oB)
          }
        }(IB, TB) : IB;
      for (void 0 === ZB ? (JB = 1, GB = BB[vB[0]]) : (JB = 0, GB = ZB); JB < kB; JB++) GB = cB(GB, BB[oB = vB[JB]], oB, BB);
      return GB
    };

    function hZ(BB) {
      return 1 !== nB(BB).length ? null : BB.codePointAt(0).toString(16)
    }

    function zZ(BB) {
      return Object.keys(BB).reduce((function(IB, ZB) {
        var TB = BB[ZB];
        return !!TB.icon ? IB[TB.iconName] = TB.icon : IB[ZB] = TB, IB
      }), {})
    }

    function FZ(BB, IB) {
      var ZB = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        TB = void 0 !== ZB && ZB,
        JB = zZ(IB);
      "function" !== typeof JZ.hooks.addPack || TB ? JZ.styles[BB] = kB(kB({}, JZ.styles[BB] || {}), JB) : JZ.hooks.addPack(BB, zZ(IB)), "fas" === BB && FZ("fa", IB)
    }
    var NZ = JZ.styles,
      gZ = JZ.shims,
      qZ = Object.keys(HI),
      yZ = qZ.reduce((function(BB, IB) {
        return BB[IB] = Object.keys(HI[IB]), BB
      }), {}),
      UZ = null,
      WZ = {},
      dZ = {},
      CZ = {},
      QZ = {},
      sZ = {};

    function wZ(BB, IB) {
      var ZB, TB = IB.split("-"),
        JB = TB[0],
        oB = TB.slice(1).join("-");
      return JB !== BB || "" === oB || (ZB = oB, ~XI.indexOf(ZB)) ? null : oB
    }
    var OZ, YZ = function() {
      var BB = function(BB) {
        return nZ(NZ, (function(IB, ZB, TB) {
          return IB[TB] = nZ(ZB, BB, {}), IB
        }), {})
      };
      WZ = BB((function(BB, IB, ZB) {
        (IB[3] && (BB[IB[3]] = ZB), IB[2]) && IB[2].filter((function(BB) {
          return "number" === typeof BB
        })).forEach((function(IB) {
          BB[IB.toString(16)] = ZB
        }));
        return BB
      })), dZ = BB((function(BB, IB, ZB) {
        (BB[ZB] = ZB, IB[2]) && IB[2].filter((function(BB) {
          return "string" === typeof BB
        })).forEach((function(IB) {
          BB[IB] = ZB
        }));
        return BB
      })), sZ = BB((function(BB, IB, ZB) {
        var TB = IB[2];
        return BB[ZB] = ZB, TB.forEach((function(IB) {
          BB[IB] = ZB
        })), BB
      }));
      var IB = "far" in NZ || fI.autoFetchSvg,
        ZB = nZ(gZ, (function(BB, ZB) {
          var TB = ZB[0],
            JB = ZB[1],
            oB = ZB[2];
          return "far" !== JB || IB || (JB = "fas"), "string" === typeof TB && (BB.names[TB] = {
            prefix: JB,
            iconName: oB
          }), "number" === typeof TB && (BB.unicodes[TB.toString(16)] = {
            prefix: JB,
            iconName: oB
          }), BB
        }), {
          names: {},
          unicodes: {}
        });
      CZ = ZB.names, QZ = ZB.unicodes, UZ = MZ(fI.styleDefault, {
        family: fI.familyDefault
      })
    };

    function iZ(BB, IB) {
      return (WZ[BB] || {})[IB]
    }

    function pZ(BB, IB) {
      return (sZ[BB] || {})[IB]
    }

    function aZ(BB) {
      return CZ[BB] || {
        prefix: null,
        iconName: null
      }
    }

    function HZ() {
      return UZ
    }
    OZ = function(BB) {
      UZ = MZ(BB.styleDefault, {
        family: fI.familyDefault
      })
    }, lI.push(OZ), YZ();

    function MZ(BB) {
      var IB = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        ZB = void 0 === IB ? MB : IB,
        TB = YI[ZB][BB];
      if (ZB === jB && !BB) return "fad";
      var JB = pI[ZB][BB] || pI[ZB][TB],
        oB = BB in JZ.styles ? BB : null;
      return JB || oB || null
    }

    function jZ(BB) {
      return BB.sort().filter((function(BB, IB, ZB) {
        return ZB.indexOf(BB) === IB
      }))
    }
    var PZ = nI.concat(BI);

    function RZ(BB) {
      var IB = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        ZB = void 0 !== IB && IB,
        TB = null,
        JB = jZ(BB.filter((function(BB) {
          return PZ.includes(BB)
        }))),
        oB = jZ(BB.filter((function(BB) {
          return !PZ.includes(BB)
        }))),
        GB = cB(JB.filter((function(BB) {
          return TB = BB, !HB.includes(BB)
        })), 1)[0],
        vB = void 0 === GB ? null : GB,
        nB = function(BB) {
          var IB = MB,
            ZB = qZ.reduce((function(BB, IB) {
              return BB[IB] = "".concat(fI.cssPrefix, "-").concat(IB), BB
            }), {});
          return VB.forEach((function(TB) {
            (BB.includes(ZB[TB]) || BB.some((function(BB) {
              return yZ[TB].includes(BB)
            }))) && (IB = TB)
          })), IB
        }(JB),
        hB = kB(kB({}, function(BB) {
          var IB = [],
            ZB = null;
          return BB.forEach((function(BB) {
            var TB = wZ(fI.cssPrefix, BB);
            TB ? ZB = TB : BB && IB.push(BB)
          })), {
            iconName: ZB,
            rest: IB
          }
        }(oB)), {}, {
          prefix: MZ(vB, {
            family: nB
          })
        });
      return kB(kB(kB({}, hB), function(BB) {
        var IB = BB.values,
          ZB = BB.family,
          TB = BB.canonical,
          JB = BB.givenPrefix,
          oB = void 0 === JB ? "" : JB,
          GB = BB.styles,
          vB = void 0 === GB ? {} : GB,
          kB = BB.config,
          cB = void 0 === kB ? {} : kB,
          nB = ZB === jB,
          hB = IB.includes("fa-duotone") || IB.includes("fad"),
          zB = "duotone" === cB.familyDefault,
          FB = "fad" === TB.prefix || "fa-duotone" === TB.prefix;
        !nB && (hB || zB || FB) && (TB.prefix = "fad");
        (IB.includes("fa-brands") || IB.includes("fab")) && (TB.prefix = "fab");
        if (!TB.prefix && rZ.includes(ZB)) {
          if (Object.keys(vB).find((function(BB) {
              return mZ.includes(BB)
            })) || cB.autoFetchSvg) {
            var NB = SB.get(ZB).defaultShortPrefixId;
            TB.prefix = NB, TB.iconName = pZ(TB.prefix, TB.iconName) || TB.iconName
          }
        }
        "fa" !== TB.prefix && "fa" !== oB || (TB.prefix = HZ() || "fas");
        return TB
      }({
        values: BB,
        family: nB,
        styles: NZ,
        config: fI,
        canonical: hB,
        givenPrefix: TB
      })), function(BB, IB, ZB) {
        var TB = ZB.prefix,
          JB = ZB.iconName;
        if (BB || !TB || !JB) return {
          prefix: TB,
          iconName: JB
        };
        var oB = "fa" === IB ? aZ(JB) : {},
          GB = pZ(TB, JB);
        JB = oB.iconName || GB || JB, "far" !== (TB = oB.prefix || TB) || NZ.far || !NZ.fas || fI.autoFetchSvg || (TB = "fas");
        return {
          prefix: TB,
          iconName: JB
        }
      }(ZB, TB, hB))
    }
    var rZ = VB.filter((function(BB) {
        return BB !== MB || BB !== jB
      })),
      mZ = Object.keys(cI).filter((function(BB) {
        return BB !== MB
      })).map((function(BB) {
        return Object.keys(cI[BB])
      })).flat();
    var XZ = function() {
        return function(BB, IB, ZB) {
          return IB && JB(BB.prototype, IB), ZB && JB(BB, ZB), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), BB
        }((function BB() {
          ! function(BB, IB) {
            if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
          }(this, BB), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var BB = this, IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
            var JB = ZB.reduce(this._pullDefinitions, {});
            Object.keys(JB).forEach((function(IB) {
              BB.definitions[IB] = kB(kB({}, BB.definitions[IB] || {}), JB[IB]), FZ(IB, JB[IB]);
              var ZB = HI[MB][IB];
              ZB && FZ(ZB, JB[IB]), YZ()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(BB, IB) {
            var ZB = IB.prefix && IB.iconName && IB.icon ? {
              0: IB
            } : IB;
            return Object.keys(ZB).map((function(IB) {
              var TB = ZB[IB],
                JB = TB.prefix,
                oB = TB.iconName,
                GB = TB.icon,
                vB = GB[2];
              BB[JB] || (BB[JB] = {}), vB.length > 0 && vB.forEach((function(IB) {
                "string" === typeof IB && (BB[JB][IB] = GB)
              })), BB[JB][oB] = GB
            })), BB
          }
        }])
      }(),
      LZ = [],
      eZ = {},
      uZ = {},
      fZ = Object.keys(uZ);

    function lZ(BB, IB) {
      for (var ZB = arguments.length, TB = new Array(ZB > 2 ? ZB - 2 : 0), JB = 2; JB < ZB; JB++) TB[JB - 2] = arguments[JB];
      return (eZ[BB] || []).forEach((function(BB) {
        IB = BB.apply(null, [IB].concat(TB))
      })), IB
    }

    function AZ(BB) {
      for (var IB = arguments.length, ZB = new Array(IB > 1 ? IB - 1 : 0), TB = 1; TB < IB; TB++) ZB[TB - 1] = arguments[TB];
      (eZ[BB] || []).forEach((function(BB) {
        BB.apply(null, ZB)
      }))
    }

    function tZ() {
      var BB = arguments[0],
        IB = Array.prototype.slice.call(arguments, 1);
      return uZ[BB] ? uZ[BB].apply(null, IB) : void 0
    }

    function bZ(BB) {
      "fa" === BB.prefix && (BB.prefix = "fas");
      var IB = BB.iconName,
        ZB = BB.prefix || HZ();
      if (IB) return IB = pZ(ZB, IB) || IB, cZ(xZ.definitions, ZB, IB) || cZ(JZ.styles, ZB, IB)
    }
    var xZ = new XZ,
      EZ = {
        i2svg: function() {
          var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return iB ? (AZ("beforeI2svg", BB), tZ("pseudoElements2svg", BB), tZ("i2svg", BB)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var BB, IB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            ZB = IB.autoReplaceSvgRoot;
          !1 === fI.autoReplaceSvg && (fI.autoReplaceSvg = !0), fI.observeMutations = !0, BB = function() {
            KZ({
              autoReplaceSvgRoot: ZB
            }), AZ("watch", IB)
          }, iB && (vZ ? setTimeout(BB, 0) : oZ.push(BB))
        }
      },
      DZ = {
        noAuto: function() {
          fI.autoReplaceSvg = !1, fI.observeMutations = !1, AZ("noAuto")
        },
        config: fI,
        dom: EZ,
        parse: {
          icon: function(BB) {
            if (null === BB) return null;
            if ("object" === zB(BB) && BB.prefix && BB.iconName) return {
              prefix: BB.prefix,
              iconName: pZ(BB.prefix, BB.iconName) || BB.iconName
            };
            if (Array.isArray(BB) && 2 === BB.length) {
              var IB = 0 === BB[1].indexOf("fa-") ? BB[1].slice(3) : BB[1],
                ZB = MZ(BB[0]);
              return {
                prefix: ZB,
                iconName: pZ(ZB, IB) || IB
              }
            }
            if ("string" === typeof BB && (BB.indexOf("".concat(fI.cssPrefix, "-")) > -1 || BB.match(jI))) {
              var TB = RZ(BB.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: TB.prefix || HZ(),
                iconName: pZ(TB.prefix, TB.iconName) || TB.iconName
              }
            }
            if ("string" === typeof BB) {
              var JB = HZ();
              return {
                prefix: JB,
                iconName: pZ(JB, BB) || BB
              }
            }
          }
        },
        library: xZ,
        findIconDefinition: bZ,
        toHtml: kZ
      },
      KZ = function() {
        var BB = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          IB = void 0 === BB ? wB : BB;
        (Object.keys(JZ.styles).length > 0 || fI.autoFetchSvg) && iB && fI.autoReplaceSvg && DZ.dom.i2svg({
          node: IB
        })
      };

    function VZ(BB, IB) {
      return Object.defineProperty(BB, "abstract", {
        get: IB
      }), Object.defineProperty(BB, "html", {
        get: function() {
          return BB.abstract.map((function(BB) {
            return kZ(BB)
          }))
        }
      }), Object.defineProperty(BB, "node", {
        get: function() {
          if (iB) {
            var IB = wB.createElement("div");
            return IB.innerHTML = BB.html, IB.children
          }
        }
      }), BB
    }

    function SZ(BB) {
      var IB = BB.icons,
        ZB = IB.main,
        TB = IB.mask,
        JB = BB.prefix,
        oB = BB.iconName,
        GB = BB.transform,
        vB = BB.symbol,
        cB = BB.maskId,
        nB = BB.extra,
        hB = BB.watchable,
        zB = void 0 !== hB && hB,
        FB = TB.found ? TB : ZB,
        NB = FB.width,
        gB = FB.height,
        qB = [fI.replacementClass, oB ? "".concat(fI.cssPrefix, "-").concat(oB) : ""].filter((function(BB) {
          return -1 === nB.classes.indexOf(BB)
        })).filter((function(BB) {
          return "" !== BB || !!BB
        })).concat(nB.classes).join(" "),
        yB = {
          children: [],
          attributes: kB(kB({}, nB.attributes), {}, {
            "data-prefix": JB,
            "data-icon": oB,
            class: qB,
            role: nB.attributes.role || "img",
            viewBox: "0 0 ".concat(NB, " ").concat(gB)
          })
        };
      (function(BB) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(IB) {
          return IB in BB
        }))
      })(nB.attributes) || nB.attributes["aria-hidden"] || (yB.attributes["aria-hidden"] = "true"), zB && (yB.attributes[qI] = "");
      var UB = kB(kB({}, yB), {}, {
          prefix: JB,
          iconName: oB,
          main: ZB,
          mask: TB,
          maskId: cB,
          transform: GB,
          symbol: vB,
          styles: kB({}, nB.styles)
        }),
        WB = TB.found && ZB.found ? tZ("generateAbstractMask", UB) || {
          children: [],
          attributes: {}
        } : tZ("generateAbstractIcon", UB) || {
          children: [],
          attributes: {}
        },
        dB = WB.children,
        CB = WB.attributes;
      return UB.children = dB, UB.attributes = CB, vB ? function(BB) {
        var IB = BB.prefix,
          ZB = BB.iconName,
          TB = BB.children,
          JB = BB.attributes,
          oB = BB.symbol,
          GB = !0 === oB ? "".concat(IB, "-").concat(fI.cssPrefix, "-").concat(ZB) : oB;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: kB(kB({}, JB), {}, {
              id: GB
            }),
            children: TB
          }]
        }]
      }(UB) : function(BB) {
        var IB = BB.children,
          ZB = BB.main,
          TB = BB.mask,
          JB = BB.attributes,
          oB = BB.styles,
          GB = BB.transform;
        if (VI(GB) && ZB.found && !TB.found) {
          var vB = {
            x: ZB.width / ZB.height / 2,
            y: .5
          };
          JB.style = KI(kB(kB({}, oB), {}, {
            "transform-origin": "".concat(vB.x + GB.x / 16, "em ").concat(vB.y + GB.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: JB,
          children: IB
        }]
      }(UB)
    }

    function BT(BB) {
      var IB = BB.content,
        ZB = BB.width,
        TB = BB.height,
        JB = BB.transform,
        oB = BB.extra,
        GB = BB.watchable,
        vB = void 0 !== GB && GB,
        cB = kB(kB({}, oB.attributes), {}, {
          class: oB.classes.join(" ")
        });
      vB && (cB[qI] = "");
      var nB = kB({}, oB.styles);
      VI(JB) && (nB.transform = function(BB) {
        var IB = BB.transform,
          ZB = BB.width,
          TB = void 0 === ZB ? 16 : ZB,
          JB = BB.height,
          oB = void 0 === JB ? 16 : JB,
          GB = BB.startCentered,
          vB = void 0 !== GB && GB,
          kB = "";
        return kB += vB && pB ? "translate(".concat(IB.x / AI - TB / 2, "em, ").concat(IB.y / AI - oB / 2, "em) ") : vB ? "translate(calc(-50% + ".concat(IB.x / AI, "em), calc(-50% + ").concat(IB.y / AI, "em)) ") : "translate(".concat(IB.x / AI, "em, ").concat(IB.y / AI, "em) "), kB += "scale(".concat(IB.size / AI * (IB.flipX ? -1 : 1), ", ").concat(IB.size / AI * (IB.flipY ? -1 : 1), ") "), kB + "rotate(".concat(IB.rotate, "deg) ")
      }({
        transform: JB,
        startCentered: !0,
        width: ZB,
        height: TB
      }), nB["-webkit-transform"] = nB.transform);
      var hB = KI(nB);
      hB.length > 0 && (cB.style = hB);
      var zB = [];
      return zB.push({
        tag: "span",
        attributes: cB,
        children: [IB]
      }), zB
    }
    var IT = JZ.styles;

    function ZT(BB) {
      var IB = BB[0],
        ZB = BB[1],
        TB = cB(BB.slice(4), 1)[0];
      return {
        found: !0,
        width: IB,
        height: ZB,
        icon: Array.isArray(TB) ? {
          tag: "g",
          attributes: {
            class: "".concat(fI.cssPrefix, "-").concat(mI.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(fI.cssPrefix, "-").concat(mI.SECONDARY),
              fill: "currentColor",
              d: TB[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(fI.cssPrefix, "-").concat(mI.PRIMARY),
              fill: "currentColor",
              d: TB[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: TB
          }
        }
      }
    }
    var TT = {
      found: !1,
      width: 512,
      height: 512
    };

    function JT(BB, IB) {
      var ZB = IB;
      return "fa" === IB && null !== fI.styleDefault && (IB = HZ()), new Promise((function(TB, JB) {
        if ("fa" === ZB) {
          var oB = aZ(BB) || {};
          BB = oB.iconName || BB, IB = oB.prefix || IB
        }
        if (BB && IB && IT[IB] && IT[IB][BB]) return TB(ZT(IT[IB][BB]));
        ! function(BB, IB) {
          sI || fI.showMissingIcons || !BB || console.error('Icon with name "'.concat(BB, '" and prefix "').concat(IB, '" is missing.'))
        }(BB, IB), TB(kB(kB({}, TT), {}, {
          icon: fI.showMissingIcons && BB && tZ("missingIconAbstract") || {}
        }))
      }))
    }
    var oT = function() {},
      GT = fI.measurePerformance && YB && YB.mark && YB.measure ? YB : {
        mark: oT,
        measure: oT
      },
      vT = 'FA "7.2.0"',
      kT = function(BB) {
        GT.mark("".concat(vT, " ").concat(BB, " ends")), GT.measure("".concat(vT, " ").concat(BB), "".concat(vT, " ").concat(BB, " begins"), "".concat(vT, " ").concat(BB, " ends"))
      },
      cT = function(BB) {
        return GT.mark("".concat(vT, " ").concat(BB, " begins")),
          function() {
            return kT(BB)
          }
      },
      nT = function() {};

    function hT(BB) {
      return "string" === typeof(BB.getAttribute ? BB.getAttribute(qI) : null)
    }

    function zT(BB) {
      return wB.createElementNS("http://www.w3.org/2000/svg", BB)
    }

    function FT(BB) {
      return wB.createElement(BB)
    }

    function NT(BB) {
      var IB = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        ZB = void 0 === IB ? "svg" === BB.tag ? zT : FT : IB;
      if ("string" === typeof BB) return wB.createTextNode(BB);
      var TB = ZB(BB.tag);
      return Object.keys(BB.attributes || []).forEach((function(IB) {
        TB.setAttribute(IB, BB.attributes[IB])
      })), (BB.children || []).forEach((function(BB) {
        TB.appendChild(NT(BB, {
          ceFn: ZB
        }))
      })), TB
    }
    var gT = {
      replace: function(BB) {
        var IB = BB[0];
        if (IB.parentNode)
          if (BB[1].forEach((function(BB) {
              IB.parentNode.insertBefore(NT(BB), IB)
            })), null === IB.getAttribute(qI) && fI.keepOriginalSource) {
            var ZB = wB.createComment(function(BB) {
              var IB = " ".concat(BB.outerHTML, " ");
              return "".concat(IB, "Font Awesome fontawesome.com ")
            }(IB));
            IB.parentNode.replaceChild(ZB, IB)
          } else IB.remove()
      },
      nest: function(BB) {
        var IB = BB[0],
          ZB = BB[1];
        if (~EI(IB).indexOf(fI.replacementClass)) return gT.replace(BB);
        var TB = new RegExp("".concat(fI.cssPrefix, "-.*"));
        if (delete ZB[0].attributes.id, ZB[0].attributes.class) {
          var JB = ZB[0].attributes.class.split(" ").reduce((function(BB, IB) {
            return IB === fI.replacementClass || IB.match(TB) ? BB.toSvg.push(IB) : BB.toNode.push(IB), BB
          }), {
            toNode: [],
            toSvg: []
          });
          ZB[0].attributes.class = JB.toSvg.join(" "), 0 === JB.toNode.length ? IB.removeAttribute("class") : IB.setAttribute("class", JB.toNode.join(" "))
        }
        var oB = ZB.map((function(BB) {
          return kZ(BB)
        })).join("\n");
        IB.setAttribute(qI, ""), IB.innerHTML = oB
      }
    };

    function qT(BB) {
      BB()
    }

    function yT(BB, IB) {
      var ZB = "function" === typeof IB ? IB : nT;
      if (0 === BB.length) ZB();
      else {
        var TB = qT;
        "async" === fI.mutateApproach && (TB = sB.requestAnimationFrame || qT), TB((function() {
          var IB = !0 === fI.autoReplaceSvg ? gT.replace : gT[fI.autoReplaceSvg] || gT.replace,
            TB = cT("mutate");
          BB.map(IB), TB(), ZB()
        }))
      }
    }
    var UT = !1;

    function WT() {
      UT = !0
    }

    function dT() {
      UT = !1
    }
    var CT = null;

    function QT(BB) {
      if (OB && fI.observeMutations) {
        var IB = BB.treeCallback,
          ZB = void 0 === IB ? nT : IB,
          TB = BB.nodeCallback,
          JB = void 0 === TB ? nT : TB,
          oB = BB.pseudoElementsCallback,
          GB = void 0 === oB ? nT : oB,
          vB = BB.observeMutationsRoot,
          kB = void 0 === vB ? wB : vB;
        CT = new OB((function(BB) {
          if (!UT) {
            var IB = HZ();
            xI(BB).forEach((function(BB) {
              if ("childList" === BB.type && BB.addedNodes.length > 0 && !hT(BB.addedNodes[0]) && (fI.searchPseudoElements && GB(BB.target), ZB(BB.target)), "attributes" === BB.type && BB.target.parentNode && fI.searchPseudoElements && GB([BB.target], !0), "attributes" === BB.type && hT(BB.target) && ~rI.indexOf(BB.attributeName))
                if ("class" === BB.attributeName && function(BB) {
                    var IB = BB.getAttribute ? BB.getAttribute(UI) : null,
                      ZB = BB.getAttribute ? BB.getAttribute(WI) : null;
                    return IB && ZB
                  }(BB.target)) {
                  var TB = RZ(EI(BB.target)),
                    oB = TB.prefix,
                    vB = TB.iconName;
                  BB.target.setAttribute(UI, oB || IB), vB && BB.target.setAttribute(WI, vB)
                } else(kB = BB.target) && kB.classList && kB.classList.contains && kB.classList.contains(fI.replacementClass) && JB(BB.target);
              var kB
            }))
          }
        })), iB && CT.observe(kB, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function sT(BB) {
      var IB, ZB, TB = BB.getAttribute("data-prefix"),
        JB = BB.getAttribute("data-icon"),
        oB = void 0 !== BB.innerText ? BB.innerText.trim() : "",
        GB = RZ(EI(BB));
      return GB.prefix || (GB.prefix = HZ()), TB && JB && (GB.prefix = TB, GB.iconName = JB), GB.iconName && GB.prefix || (GB.prefix && oB.length > 0 && (GB.iconName = (IB = GB.prefix, ZB = BB.innerText, (dZ[IB] || {})[ZB] || iZ(GB.prefix, hZ(BB.innerText)))), !GB.iconName && fI.autoFetchSvg && BB.firstChild && BB.firstChild.nodeType === Node.TEXT_NODE && (GB.iconName = BB.firstChild.data)), GB
    }

    function wT(BB) {
      var IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        ZB = sT(BB),
        TB = ZB.iconName,
        JB = ZB.prefix,
        oB = ZB.rest,
        GB = function(BB) {
          return xI(BB.attributes).reduce((function(BB, IB) {
            return "class" !== BB.name && "style" !== BB.name && (BB[IB.name] = IB.value), BB
          }), {})
        }(BB),
        vB = lZ("parseNodeAttributes", {}, BB),
        cB = IB.styleParser ? function(BB) {
          var IB = BB.getAttribute("style"),
            ZB = [];
          return IB && (ZB = IB.split(";").reduce((function(BB, IB) {
            var ZB = IB.split(":"),
              TB = ZB[0],
              JB = ZB.slice(1);
            return TB && JB.length > 0 && (BB[TB] = JB.join(":").trim()), BB
          }), {})), ZB
        }(BB) : [];
      return kB({
        iconName: TB,
        prefix: JB,
        transform: tI,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: oB,
          styles: cB,
          attributes: GB
        }
      }, vB)
    }
    var OT = JZ.styles;

    function YT(BB) {
      var IB = "nest" === fI.autoReplaceSvg ? wT(BB, {
        styleParser: !1
      }) : wT(BB);
      return ~IB.extra.classes.indexOf(PI) ? tZ("generateLayersText", BB, IB) : tZ("generateSvgReplacementMutation", BB, IB)
    }

    function iT(BB) {
      var IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!iB) return Promise.resolve();
      var ZB = wB.documentElement.classList,
        TB = function(BB) {
          return ZB.add("".concat(dI, "-").concat(BB))
        },
        JB = function(BB) {
          return ZB.remove("".concat(dI, "-").concat(BB))
        },
        oB = fI.autoFetchSvg ? [].concat(nB(BI), nB(nI)) : HB.concat(Object.keys(OT));
      oB.includes("fa") || oB.push("fa");
      var GB = [".".concat(PI, ":not([").concat(qI, "])")].concat(oB.map((function(BB) {
        return ".".concat(BB, ":not([").concat(qI, "])")
      }))).join(", ");
      if (0 === GB.length) return Promise.resolve();
      var vB = [];
      try {
        vB = xI(BB.querySelectorAll(GB))
      } catch (hB) {}
      if (!(vB.length > 0)) return Promise.resolve();
      TB("pending"), JB("complete");
      var kB = cT("onTree"),
        cB = vB.reduce((function(BB, IB) {
          try {
            var ZB = YT(IB);
            ZB && BB.push(ZB)
          } catch (hB) {
            sI || "MissingIcon" === hB.name && console.error(hB)
          }
          return BB
        }), []);
      return new Promise((function(BB, ZB) {
        Promise.all(cB).then((function(ZB) {
          yT(ZB, (function() {
            TB("active"), TB("complete"), JB("pending"), "function" === typeof IB && IB(), kB(), BB()
          }))
        })).catch((function(BB) {
          kB(), ZB(BB)
        }))
      }))
    }

    function pT(BB) {
      var IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      YT(BB).then((function(BB) {
        BB && yT([BB], IB)
      }))
    }
    var aT = function(BB) {
        var IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZB = IB.transform,
          TB = void 0 === ZB ? tI : ZB,
          JB = IB.symbol,
          oB = void 0 !== JB && JB,
          GB = IB.mask,
          vB = void 0 === GB ? null : GB,
          cB = IB.maskId,
          nB = void 0 === cB ? null : cB,
          hB = IB.classes,
          zB = void 0 === hB ? [] : hB,
          FB = IB.attributes,
          NB = void 0 === FB ? {} : FB,
          gB = IB.styles,
          qB = void 0 === gB ? {} : gB;
        if (BB) {
          var yB = BB.prefix,
            UB = BB.iconName,
            WB = BB.icon;
          return VZ(kB({
            type: "icon"
          }, BB), (function() {
            return AZ("beforeDOMElementCreation", {
              iconDefinition: BB,
              params: IB
            }), SZ({
              icons: {
                main: ZT(WB),
                mask: vB ? ZT(vB.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: yB,
              iconName: UB,
              transform: kB(kB({}, tI), TB),
              symbol: oB,
              maskId: nB,
              extra: {
                attributes: NB,
                styles: qB,
                classes: zB
              }
            })
          }))
        }
      },
      HT = {
        mixout: function() {
          return {
            icon: (BB = aT, function(IB) {
              var ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                TB = (IB || {}).icon ? IB : bZ(IB || {}),
                JB = ZB.mask;
              return JB && (JB = (JB || {}).icon ? JB : bZ(JB || {})), BB(TB, kB(kB({}, ZB), {}, {
                mask: JB
              }))
            })
          };
          var BB
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(BB) {
              return BB.treeCallback = iT, BB.nodeCallback = pT, BB
            }
          }
        },
        provides: function(BB) {
          BB.i2svg = function(BB) {
            var IB = BB.node,
              ZB = void 0 === IB ? wB : IB,
              TB = BB.callback;
            return iT(ZB, void 0 === TB ? function() {} : TB)
          }, BB.generateSvgReplacementMutation = function(BB, IB) {
            var ZB = IB.iconName,
              TB = IB.prefix,
              JB = IB.transform,
              oB = IB.symbol,
              GB = IB.mask,
              vB = IB.maskId,
              kB = IB.extra;
            return new Promise((function(IB, nB) {
              Promise.all([JT(ZB, TB), GB.iconName ? JT(GB.iconName, GB.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(GB) {
                var nB = cB(GB, 2),
                  hB = nB[0],
                  zB = nB[1];
                IB([BB, SZ({
                  icons: {
                    main: hB,
                    mask: zB
                  },
                  prefix: TB,
                  iconName: ZB,
                  transform: JB,
                  symbol: oB,
                  maskId: vB,
                  extra: kB,
                  watchable: !0
                })])
              })).catch(nB)
            }))
          }, BB.generateAbstractIcon = function(BB) {
            var IB, ZB = BB.children,
              TB = BB.attributes,
              JB = BB.main,
              oB = BB.transform,
              GB = KI(BB.styles);
            return GB.length > 0 && (TB.style = GB), VI(oB) && (IB = tZ("generateAbstractTransformGrouping", {
              main: JB,
              transform: oB,
              containerWidth: JB.width,
              iconWidth: JB.width
            })), ZB.push(IB || JB.icon), {
              children: ZB,
              attributes: TB
            }
          }
        }
      },
      MT = {
        mixout: function() {
          return {
            layer: function(BB) {
              var IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ZB = IB.classes,
                TB = void 0 === ZB ? [] : ZB;
              return VZ({
                type: "layer"
              }, (function() {
                AZ("beforeDOMElementCreation", {
                  assembler: BB,
                  params: IB
                });
                var ZB = [];
                return BB((function(BB) {
                  Array.isArray(BB) ? BB.map((function(BB) {
                    ZB = ZB.concat(BB.abstract)
                  })) : ZB = ZB.concat(BB.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(fI.cssPrefix, "-layers")].concat(nB(TB)).join(" ")
                  },
                  children: ZB
                }]
              }))
            }
          }
        }
      },
      jT = {
        mixout: function() {
          return {
            counter: function(BB) {
              var IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ZB = IB.title,
                TB = void 0 === ZB ? null : ZB,
                JB = IB.classes,
                oB = void 0 === JB ? [] : JB,
                GB = IB.attributes,
                vB = void 0 === GB ? {} : GB,
                cB = IB.styles,
                hB = void 0 === cB ? {} : cB;
              return VZ({
                type: "counter",
                content: BB
              }, (function() {
                return AZ("beforeDOMElementCreation", {
                    content: BB,
                    params: IB
                  }),
                  function(BB) {
                    var IB = BB.content,
                      ZB = BB.extra,
                      TB = kB(kB({}, ZB.attributes), {}, {
                        class: ZB.classes.join(" ")
                      }),
                      JB = KI(ZB.styles);
                    JB.length > 0 && (TB.style = JB);
                    var oB = [];
                    return oB.push({
                      tag: "span",
                      attributes: TB,
                      children: [IB]
                    }), oB
                  }({
                    content: BB.toString(),
                    title: TB,
                    extra: {
                      attributes: vB,
                      styles: hB,
                      classes: ["".concat(fI.cssPrefix, "-layers-counter")].concat(nB(oB))
                    }
                  })
              }))
            }
          }
        }
      },
      PT = {
        mixout: function() {
          return {
            text: function(BB) {
              var IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ZB = IB.transform,
                TB = void 0 === ZB ? tI : ZB,
                JB = IB.classes,
                oB = void 0 === JB ? [] : JB,
                GB = IB.attributes,
                vB = void 0 === GB ? {} : GB,
                cB = IB.styles,
                hB = void 0 === cB ? {} : cB;
              return VZ({
                type: "text",
                content: BB
              }, (function() {
                return AZ("beforeDOMElementCreation", {
                  content: BB,
                  params: IB
                }), BT({
                  content: BB,
                  transform: kB(kB({}, tI), TB),
                  extra: {
                    attributes: vB,
                    styles: hB,
                    classes: ["".concat(fI.cssPrefix, "-layers-text")].concat(nB(oB))
                  }
                })
              }))
            }
          }
        },
        provides: function(BB) {
          BB.generateLayersText = function(BB, IB) {
            var ZB = IB.transform,
              TB = IB.extra,
              JB = null,
              oB = null;
            if (pB) {
              var GB = parseInt(getComputedStyle(BB).fontSize, 10),
                vB = BB.getBoundingClientRect();
              JB = vB.width / GB, oB = vB.height / GB
            }
            return Promise.resolve([BB, BT({
              content: BB.innerHTML,
              width: JB,
              height: oB,
              transform: ZB,
              extra: TB,
              watchable: !0
            })])
          }
        }
      },
      RT = new RegExp('"', "ug"),
      rT = [1105920, 1112319],
      mT = kB(kB(kB(kB({}, {
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
      XT = Object.keys(mT).reduce((function(BB, IB) {
        return BB[IB.toLowerCase()] = mT[IB], BB
      }), {}),
      LT = Object.keys(XT).reduce((function(BB, IB) {
        var ZB = XT[IB];
        return BB[IB] = ZB[900] || nB(Object.entries(ZB))[0][1], BB
      }), {});

    function eT(BB, IB) {
      var ZB = "".concat("data-fa-pseudo-element-pending").concat(IB.replace(":", "-"));
      return new Promise((function(TB, JB) {
        if (null !== BB.getAttribute(ZB)) return TB();
        var oB = xI(BB.children).filter((function(BB) {
            return BB.getAttribute(yI) === IB
          }))[0],
          GB = sB.getComputedStyle(BB, IB),
          vB = GB.getPropertyValue("font-family"),
          cB = vB.match(RI),
          hB = GB.getPropertyValue("font-weight"),
          zB = GB.getPropertyValue("content");
        if (oB && !cB) return BB.removeChild(oB), TB();
        if (cB && "none" !== zB && "" !== zB) {
          var FB = GB.getPropertyValue("content"),
            NB = function(BB, IB) {
              var ZB = BB.replace(/^['"]|['"]$/g, "").toLowerCase(),
                TB = parseInt(IB),
                JB = isNaN(TB) ? "normal" : TB;
              return (XT[ZB] || {})[JB] || LT[ZB]
            }(vB, hB),
            gB = function(BB) {
              return hZ(nB(BB.replace(RT, ""))[0] || "")
            }(FB),
            qB = cB[0].startsWith("FontAwesome"),
            yB = function(BB) {
              var IB = BB.getPropertyValue("font-feature-settings").includes("ss01"),
                ZB = BB.getPropertyValue("content").replace(RT, ""),
                TB = ZB.codePointAt(0),
                JB = TB >= rT[0] && TB <= rT[1],
                oB = 2 === ZB.length && ZB[0] === ZB[1];
              return JB || oB || IB
            }(GB),
            UB = iZ(NB, gB),
            WB = UB;
          if (qB) {
            var dB = function(BB) {
              var IB = QZ[BB],
                ZB = iZ("fas", BB);
              return IB || (ZB ? {
                prefix: "fas",
                iconName: ZB
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(gB);
            dB.iconName && dB.prefix && (UB = dB.iconName, NB = dB.prefix)
          }
          if (!UB || yB || oB && oB.getAttribute(UI) === NB && oB.getAttribute(WI) === WB) TB();
          else {
            BB.setAttribute(ZB, WB), oB && BB.removeChild(oB);
            var CB = {
                iconName: null,
                prefix: null,
                transform: tI,
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
              QB = CB.extra;
            QB.attributes[yI] = IB, JT(UB, NB).then((function(JB) {
              var oB = SZ(kB(kB({}, CB), {}, {
                  icons: {
                    main: JB,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: NB,
                  iconName: WB,
                  extra: QB,
                  watchable: !0
                })),
                GB = wB.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === IB ? BB.insertBefore(GB, BB.firstChild) : BB.appendChild(GB), GB.outerHTML = oB.map((function(BB) {
                return kZ(BB)
              })).join("\n"), BB.removeAttribute(ZB), TB()
            })).catch(JB)
          }
        } else TB()
      }))
    }

    function uT(BB) {
      return Promise.all([eT(BB, "::before"), eT(BB, "::after")])
    }

    function fT(BB) {
      return BB.parentNode !== document.head && !~CI.indexOf(BB.tagName.toUpperCase()) && !BB.getAttribute(yI) && (!BB.parentNode || "svg" !== BB.parentNode.tagName)
    }
    var lT = function(BB) {
        return !!BB && QI.some((function(IB) {
          return BB.includes(IB)
        }))
      },
      AT = function(BB) {
        if (!BB) return [];
        var IB = new Set,
          ZB = BB.split(/,(?![^()]*\))/).map((function(BB) {
            return BB.trim()
          }));
        ZB = ZB.flatMap((function(BB) {
          return BB.includes("(") ? BB : BB.split(",").map((function(BB) {
            return BB.trim()
          }))
        }));
        var TB, JB = oB(ZB);
        try {
          for (JB.s(); !(TB = JB.n()).done;) {
            var GB = TB.value;
            if (lT(GB)) {
              var vB = QI.reduce((function(BB, IB) {
                return BB.replace(IB, "")
              }), GB);
              "" !== vB && "*" !== vB && IB.add(vB)
            }
          }
        } catch (kB) {
          JB.e(kB)
        } finally {
          JB.f()
        }
        return IB
      };

    function tT(BB) {
      if (iB) {
        var IB;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) IB = BB;
        else if (fI.searchPseudoElementsFullScan) IB = BB.querySelectorAll("*");
        else {
          var ZB, TB = new Set,
            JB = oB(document.styleSheets);
          try {
            for (JB.s(); !(ZB = JB.n()).done;) {
              var GB = ZB.value;
              try {
                var vB, kB = oB(GB.cssRules);
                try {
                  for (kB.s(); !(vB = kB.n()).done;) {
                    var cB, nB = vB.value,
                      hB = oB(AT(nB.selectorText));
                    try {
                      for (hB.s(); !(cB = hB.n()).done;) {
                        var zB = cB.value;
                        TB.add(zB)
                      }
                    } catch (NB) {
                      hB.e(NB)
                    } finally {
                      hB.f()
                    }
                  }
                } catch (NB) {
                  kB.e(NB)
                } finally {
                  kB.f()
                }
              } catch (gB) {
                fI.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(GB.href, " (").concat(gB.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (NB) {
            JB.e(NB)
          } finally {
            JB.f()
          }
          if (!TB.size) return;
          var FB = Array.from(TB).join(", ");
          try {
            IB = BB.querySelectorAll(FB)
          } catch (qB) {}
        }
        return new Promise((function(BB, ZB) {
          var TB = xI(IB).filter(fT).map(uT),
            JB = cT("searchPseudoElements");
          WT(), Promise.all(TB).then((function() {
            JB(), dT(), BB()
          })).catch((function() {
            JB(), dT(), ZB()
          }))
        }))
      }
    }
    var bT = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(BB) {
              return BB.pseudoElementsCallback = tT, BB
            }
          }
        },
        provides: function(BB) {
          BB.pseudoElements2svg = function(BB) {
            var IB = BB.node,
              ZB = void 0 === IB ? wB : IB;
            fI.searchPseudoElements && tT(ZB)
          }
        }
      },
      xT = !1,
      ET = function(BB) {
        return BB.toLowerCase().split(" ").reduce((function(BB, IB) {
          var ZB = IB.toLowerCase().split("-"),
            TB = ZB[0],
            JB = ZB.slice(1).join("-");
          if (TB && "h" === JB) return BB.flipX = !0, BB;
          if (TB && "v" === JB) return BB.flipY = !0, BB;
          if (JB = parseFloat(JB), isNaN(JB)) return BB;
          switch (TB) {
            case "grow":
              BB.size = BB.size + JB;
              break;
            case "shrink":
              BB.size = BB.size - JB;
              break;
            case "left":
              BB.x = BB.x - JB;
              break;
            case "right":
              BB.x = BB.x + JB;
              break;
            case "up":
              BB.y = BB.y - JB;
              break;
            case "down":
              BB.y = BB.y + JB;
              break;
            case "rotate":
              BB.rotate = BB.rotate + JB
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
      DT = {
        mixout: function() {
          return {
            parse: {
              transform: function(BB) {
                return ET(BB)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(BB, IB) {
              var ZB = IB.getAttribute("data-fa-transform");
              return ZB && (BB.transform = ET(ZB)), BB
            }
          }
        },
        provides: function(BB) {
          BB.generateAbstractTransformGrouping = function(BB) {
            var IB = BB.main,
              ZB = BB.transform,
              TB = BB.containerWidth,
              JB = BB.iconWidth,
              oB = {
                transform: "translate(".concat(TB / 2, " 256)")
              },
              GB = "translate(".concat(32 * ZB.x, ", ").concat(32 * ZB.y, ") "),
              vB = "scale(".concat(ZB.size / 16 * (ZB.flipX ? -1 : 1), ", ").concat(ZB.size / 16 * (ZB.flipY ? -1 : 1), ") "),
              cB = "rotate(".concat(ZB.rotate, " 0 0)"),
              nB = {
                outer: oB,
                inner: {
                  transform: "".concat(GB, " ").concat(vB, " ").concat(cB)
                },
                path: {
                  transform: "translate(".concat(JB / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: kB({}, nB.outer),
              children: [{
                tag: "g",
                attributes: kB({}, nB.inner),
                children: [{
                  tag: IB.icon.tag,
                  children: IB.icon.children,
                  attributes: kB(kB({}, IB.icon.attributes), nB.path)
                }]
              }]
            }
          }
        }
      },
      KT = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function VT(BB) {
      var IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return BB.attributes && (BB.attributes.fill || IB) && (BB.attributes.fill = "black"), BB
    }
    var ST = {
        hooks: function() {
          return {
            parseNodeAttributes: function(BB, IB) {
              var ZB = IB.getAttribute("data-fa-mask"),
                TB = ZB ? RZ(ZB.split(" ").map((function(BB) {
                  return BB.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return TB.prefix || (TB.prefix = HZ()), BB.mask = TB, BB.maskId = IB.getAttribute("data-fa-mask-id"), BB
            }
          }
        },
        provides: function(BB) {
          BB.generateAbstractMask = function(BB) {
            var IB, ZB = BB.children,
              TB = BB.attributes,
              JB = BB.main,
              oB = BB.mask,
              GB = BB.maskId,
              vB = BB.transform,
              cB = JB.width,
              nB = JB.icon,
              hB = oB.width,
              zB = oB.icon,
              FB = function(BB) {
                var IB = BB.transform,
                  ZB = BB.containerWidth,
                  TB = BB.iconWidth,
                  JB = {
                    transform: "translate(".concat(ZB / 2, " 256)")
                  },
                  oB = "translate(".concat(32 * IB.x, ", ").concat(32 * IB.y, ") "),
                  GB = "scale(".concat(IB.size / 16 * (IB.flipX ? -1 : 1), ", ").concat(IB.size / 16 * (IB.flipY ? -1 : 1), ") "),
                  vB = "rotate(".concat(IB.rotate, " 0 0)");
                return {
                  outer: JB,
                  inner: {
                    transform: "".concat(oB, " ").concat(GB, " ").concat(vB)
                  },
                  path: {
                    transform: "translate(".concat(TB / 2 * -1, " -256)")
                  }
                }
              }({
                transform: vB,
                containerWidth: hB,
                iconWidth: cB
              }),
              NB = {
                tag: "rect",
                attributes: kB(kB({}, KT), {}, {
                  fill: "white"
                })
              },
              gB = nB.children ? {
                children: nB.children.map(VT)
              } : {},
              qB = {
                tag: "g",
                attributes: kB({}, FB.inner),
                children: [VT(kB({
                  tag: nB.tag,
                  attributes: kB(kB({}, nB.attributes), FB.path)
                }, gB))]
              },
              yB = {
                tag: "g",
                attributes: kB({}, FB.outer),
                children: [qB]
              },
              UB = "mask-".concat(GB || bI()),
              WB = "clip-".concat(GB || bI()),
              dB = {
                tag: "mask",
                attributes: kB(kB({}, KT), {}, {
                  id: UB,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [NB, yB]
              },
              CB = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: WB
                  },
                  children: (IB = zB, "g" === IB.tag ? IB.children : [IB])
                }, dB]
              };
            return ZB.push(CB, {
              tag: "rect",
              attributes: kB({
                fill: "currentColor",
                "clip-path": "url(#".concat(WB, ")"),
                mask: "url(#".concat(UB, ")")
              }, KT)
            }), {
              children: ZB,
              attributes: TB
            }
          }
        }
      },
      BJ = {
        provides: function(BB) {
          var IB = !1;
          sB.matchMedia && (IB = sB.matchMedia("(prefers-reduced-motion: reduce)").matches), BB.missingIconAbstract = function() {
            var BB = [],
              ZB = {
                fill: "currentColor"
              },
              TB = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            BB.push({
              tag: "path",
              attributes: kB(kB({}, ZB), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var JB = kB(kB({}, TB), {}, {
                attributeName: "opacity"
              }),
              oB = {
                tag: "circle",
                attributes: kB(kB({}, ZB), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return IB || oB.children.push({
              tag: "animate",
              attributes: kB(kB({}, TB), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: kB(kB({}, JB), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), BB.push(oB), BB.push({
              tag: "path",
              attributes: kB(kB({}, ZB), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: IB ? [] : [{
                tag: "animate",
                attributes: kB(kB({}, JB), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), IB || BB.push({
              tag: "path",
              attributes: kB(kB({}, ZB), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: kB(kB({}, JB), {}, {
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
    ! function(BB, IB) {
      var ZB = IB.mixoutsTo;
      LZ = BB, eZ = {}, Object.keys(uZ).forEach((function(BB) {
        -1 === fZ.indexOf(BB) && delete uZ[BB]
      })), LZ.forEach((function(BB) {
        var IB = BB.mixout ? BB.mixout() : {};
        if (Object.keys(IB).forEach((function(BB) {
            "function" === typeof IB[BB] && (ZB[BB] = IB[BB]), "object" === zB(IB[BB]) && Object.keys(IB[BB]).forEach((function(TB) {
              ZB[BB] || (ZB[BB] = {}), ZB[BB][TB] = IB[BB][TB]
            }))
          })), BB.hooks) {
          var TB = BB.hooks();
          Object.keys(TB).forEach((function(BB) {
            eZ[BB] || (eZ[BB] = []), eZ[BB].push(TB[BB])
          }))
        }
        BB.provides && BB.provides(uZ)
      }))
    }([ZZ, HT, MT, jT, PT, bT, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              WT(), xT = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            QT(lZ("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            CT && CT.disconnect()
          },
          watch: function(BB) {
            var IB = BB.observeMutationsRoot;
            xT ? dT() : QT(lZ("mutationObserverCallbacks", {
              observeMutationsRoot: IB
            }))
          }
        }
      }
    }, DT, ST, BJ, {
      hooks: function() {
        return {
          parseNodeAttributes: function(BB, IB) {
            var ZB = IB.getAttribute("data-fa-symbol"),
              TB = null !== ZB && ("" === ZB || ZB);
            return BB.symbol = TB, BB
          }
        }
      }
    }], {
      mixoutsTo: DZ
    });
    var IJ = DZ.noAuto,
      ZJ = DZ.config,
      TJ = DZ.library,
      JJ = DZ.dom,
      oJ = DZ.parse,
      GJ = DZ.findIconDefinition,
      vJ = DZ.toHtml,
      kJ = DZ.icon,
      cJ = DZ.layer,
      nJ = DZ.text,
      hJ = DZ.counter
  },
  6836: BB => {
    BB.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);