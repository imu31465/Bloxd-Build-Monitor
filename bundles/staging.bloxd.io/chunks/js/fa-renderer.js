/*! For license information please see gw4e3a.fa-renderer.51a00246.chunk.js.LICENSE.txt */
export const id = 38;
export const ids = [38];
export const modules = {
  7303: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      FontAwesomeIcon: () => UB
    });
    var YB = GB(7298),
      DB = GB(5456),
      QB = GB.n(DB),
      oB = GB(56);

    function jB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function yB(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB, OB) {
          if ("object" != typeof BB || !BB) return BB;
          var GB = BB[Symbol.toPrimitive];
          if (void 0 !== GB) {
            var YB = GB.call(BB, OB || "default");
            if ("object" != typeof YB) return YB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === OB ? String : Number)(BB)
        }(BB, "string");
        return "symbol" == typeof OB ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function JB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function MB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? JB(Object(GB), !0).forEach((function(OB) {
          yB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : JB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function PB(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        var GB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != GB) {
          var YB, DB, QB, oB, jB = [],
            yB = !0,
            JB = !1;
          try {
            if (QB = (GB = GB.call(BB)).next, 0 === OB) {
              if (Object(GB) !== GB) return;
              yB = !1
            } else
              for (; !(yB = (YB = QB.call(GB)).done) && (jB.push(YB.value), jB.length !== OB); yB = !0);
          } catch (BB) {
            JB = !0, DB = BB
          } finally {
            try {
              if (!yB && null != GB.return && (oB = GB.return(), Object(oB) !== oB)) return
            } finally {
              if (JB) throw DB
            }
          }
          return jB
        }
      }(BB, OB) || pB(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function zB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return jB(BB)
      }(BB) || function(BB) {
        if ("undefined" != typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || pB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lB(BB) {
      return lB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, lB(BB)
    }

    function pB(BB, OB) {
      if (BB) {
        if ("string" == typeof BB) return jB(BB, OB);
        var GB = {}.toString.call(BB).slice(8, -1);
        return "Object" === GB && BB.constructor && (GB = BB.constructor.name), "Map" === GB || "Set" === GB ? Array.from(BB) : "Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB) ? jB(BB, OB) : void 0
      }
    }
    var qB;
    try {
      var ZB = GB(7311);
      qB = ZB.version
    } catch (kB) {
      qB = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function NB(BB) {
      var OB = BB.beat,
        GB = BB.fade,
        YB = BB.beatFade,
        DB = BB.bounce,
        QB = BB.shake,
        oB = BB.flash,
        jB = BB.spin,
        JB = BB.spinPulse,
        MB = BB.spinReverse,
        zB = BB.pulse,
        lB = BB.fixedWidth,
        pB = BB.inverse,
        ZB = BB.border,
        NB = BB.listItem,
        RB = BB.flip,
        WB = BB.size,
        AB = BB.rotation,
        VB = BB.pull,
        SB = BB.swapOpacity,
        nB = BB.rotateBy,
        UB = BB.widthAuto,
        fB = function(BB, OB) {
          for (var GB = PB(BB.split("-"), 2), YB = GB[0], DB = GB[1], QB = PB(OB.split("-"), 2), oB = QB[0], jB = QB[1], yB = YB.split("."), JB = oB.split("."), MB = 0; MB < Math.max(yB.length, JB.length); MB++) {
            var zB = yB[MB] || "0",
              lB = JB[MB] || "0",
              pB = parseInt(zB, 10),
              qB = parseInt(lB, 10);
            if (pB !== qB) return pB > qB
          }
          for (var ZB = 0; ZB < Math.max(yB.length, JB.length); ZB++) {
            var NB = yB[ZB] || "0",
              RB = JB[ZB] || "0";
            if (NB !== RB && NB.length !== RB.length) return NB.length < RB.length
          }
          return !(DB && !jB)
        }(qB, "7.0.0"),
        kB = yB(yB(yB(yB(yB(yB({
          "fa-beat": OB,
          "fa-fade": GB,
          "fa-beat-fade": YB,
          "fa-bounce": DB,
          "fa-shake": QB,
          "fa-flash": oB,
          "fa-spin": jB,
          "fa-spin-reverse": MB,
          "fa-spin-pulse": JB,
          "fa-pulse": zB,
          "fa-fw": lB,
          "fa-inverse": pB,
          "fa-border": ZB,
          "fa-li": NB,
          "fa-flip": !0 === RB,
          "fa-flip-horizontal": "horizontal" === RB || "both" === RB,
          "fa-flip-vertical": "vertical" === RB || "both" === RB
        }, "fa-".concat(WB), "undefined" !== typeof WB && null !== WB), "fa-rotate-".concat(AB), "undefined" !== typeof AB && null !== AB && 0 !== AB), "fa-pull-".concat(VB), "undefined" !== typeof VB && null !== VB), "fa-swap-opacity", SB), "fa-rotate-by", fB && nB), "fa-width-auto", fB && UB);
      return Object.keys(kB).map((function(BB) {
        return kB[BB] ? BB : null
      })).filter((function(BB) {
        return BB
      }))
    }

    function RB(BB) {
      return OB = BB, (OB -= 0) === OB ? BB : (BB = BB.replace(/[\-_\s]+(.)?/g, (function(BB, OB) {
        return OB ? OB.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + BB.substr(1);
      var OB
    }
    var WB = ["style"];
    var AB = !1;
    try {
      AB = !0
    } catch (kB) {}

    function VB(BB) {
      return BB && "object" === lB(BB) && BB.prefix && BB.iconName && BB.icon ? BB : YB.parse.icon ? YB.parse.icon(BB) : null === BB ? null : BB && "object" === lB(BB) && BB.prefix && BB.iconName ? BB : Array.isArray(BB) && 2 === BB.length ? {
        prefix: BB[0],
        iconName: BB[1]
      } : "string" === typeof BB ? {
        prefix: "fas",
        iconName: BB
      } : void 0
    }

    function SB(BB, OB) {
      return Array.isArray(OB) && OB.length > 0 || !Array.isArray(OB) && OB ? yB({}, BB, OB) : {}
    }
    var nB = {
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
      UB = oB.forwardRef((function(BB, OB) {
        var GB = MB(MB({}, nB), BB),
          DB = GB.icon,
          QB = GB.mask,
          oB = GB.symbol,
          jB = GB.className,
          yB = GB.title,
          JB = GB.titleId,
          PB = GB.maskId,
          lB = VB(DB),
          pB = SB("classes", [].concat(zB(NB(GB)), zB((jB || "").split(" ")))),
          qB = SB("transform", "string" === typeof GB.transform ? YB.parse.transform(GB.transform) : GB.transform),
          ZB = SB("mask", VB(QB)),
          RB = (0, YB.icon)(lB, MB(MB(MB(MB({}, pB), qB), ZB), {}, {
            symbol: oB,
            title: yB,
            titleId: JB,
            maskId: PB
          }));
        if (!RB) return function() {
          var BB;
          !AB && console && "function" === typeof console.error && (BB = console).error.apply(BB, arguments)
        }("Could not find icon", lB), null;
        var WB = RB.abstract,
          UB = {
            ref: OB
          };
        return Object.keys(GB).forEach((function(BB) {
          nB.hasOwnProperty(BB) || (UB[BB] = GB[BB])
        })), fB(WB[0], UB)
      }));
    UB.displayName = "FontAwesomeIcon", UB.propTypes = {
      beat: QB().bool,
      border: QB().bool,
      beatFade: QB().bool,
      bounce: QB().bool,
      className: QB().string,
      fade: QB().bool,
      flash: QB().bool,
      mask: QB().oneOfType([QB().object, QB().array, QB().string]),
      maskId: QB().string,
      fixedWidth: QB().bool,
      inverse: QB().bool,
      flip: QB().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: QB().oneOfType([QB().object, QB().array, QB().string]),
      listItem: QB().bool,
      pull: QB().oneOf(["right", "left"]),
      pulse: QB().bool,
      rotation: QB().oneOf([0, 90, 180, 270]),
      rotateBy: QB().bool,
      shake: QB().bool,
      size: QB().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: QB().bool,
      spinPulse: QB().bool,
      spinReverse: QB().bool,
      symbol: QB().oneOfType([QB().bool, QB().string]),
      title: QB().string,
      titleId: QB().string,
      transform: QB().oneOfType([QB().string, QB().object]),
      swapOpacity: QB().bool,
      widthAuto: QB().bool
    };
    var fB = function BB(OB, GB) {
      var YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof GB) return GB;
      var DB = (GB.children || []).map((function(GB) {
          return BB(OB, GB)
        })),
        QB = Object.keys(GB.attributes || {}).reduce((function(BB, OB) {
          var YB = GB.attributes[OB];
          switch (OB) {
            case "class":
              BB.attrs.className = YB, delete GB.attributes.class;
              break;
            case "style":
              BB.attrs.style = YB.split(";").map((function(BB) {
                return BB.trim()
              })).filter((function(BB) {
                return BB
              })).reduce((function(BB, OB) {
                var GB, YB = OB.indexOf(":"),
                  DB = RB(OB.slice(0, YB)),
                  QB = OB.slice(YB + 1).trim();
                return DB.startsWith("webkit") ? BB[(GB = DB, GB.charAt(0).toUpperCase() + GB.slice(1))] = QB : BB[DB] = QB, BB
              }), {});
              break;
            default:
              0 === OB.indexOf("aria-") || 0 === OB.indexOf("data-") ? BB.attrs[OB.toLowerCase()] = YB : BB.attrs[RB(OB)] = YB
          }
          return BB
        }), {
          attrs: {}
        }),
        oB = YB.style,
        jB = void 0 === oB ? {} : oB,
        yB = function(BB, OB) {
          if (null == BB) return {};
          var GB, YB, DB = function(BB, OB) {
            if (null == BB) return {};
            var GB = {};
            for (var YB in BB)
              if ({}.hasOwnProperty.call(BB, YB)) {
                if (-1 !== OB.indexOf(YB)) continue;
                GB[YB] = BB[YB]
              } return GB
          }(BB, OB);
          if (Object.getOwnPropertySymbols) {
            var QB = Object.getOwnPropertySymbols(BB);
            for (YB = 0; YB < QB.length; YB++) GB = QB[YB], -1 === OB.indexOf(GB) && {}.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
          }
          return DB
        }(YB, WB);
      return QB.attrs.style = MB(MB({}, QB.attrs.style), jB), OB.apply(void 0, [GB.tag, MB(MB({}, QB.attrs), yB)].concat(zB(DB)))
    }.bind(null, oB.createElement)
  },
  5460: (BB, OB, GB) => {
    var YB = GB(5467);

    function DB() {}

    function QB() {}
    QB.resetWarningCache = DB, BB.exports = function() {
      function BB(BB, OB, GB, DB, QB, oB) {
        if (oB !== YB) {
          var jB = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw jB.name = "Invariant Violation", jB
        }
      }

      function OB() {
        return BB
      }
      BB.isRequired = BB;
      var GB = {
        array: BB,
        bigint: BB,
        bool: BB,
        func: BB,
        number: BB,
        object: BB,
        string: BB,
        symbol: BB,
        any: BB,
        arrayOf: OB,
        element: BB,
        elementType: BB,
        instanceOf: OB,
        node: BB,
        objectOf: OB,
        oneOf: OB,
        oneOfType: OB,
        shape: OB,
        exact: OB,
        checkPropTypes: QB,
        resetWarningCache: DB
      };
      return GB.PropTypes = GB, GB
    }
  },
  5456: (BB, OB, GB) => {
    BB.exports = GB(5460)()
  },
  5467: BB => {
    BB.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7298: (BB, OB, GB) => {
    function YB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function DB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, PB(YB.key), YB)
      }
    }

    function QB(BB, OB) {
      var GB = "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
      if (!GB) {
        if (Array.isArray(BB) || (GB = lB(BB)) || OB && BB && "number" == typeof BB.length) {
          GB && (BB = GB);
          var YB = 0,
            DB = function() {};
          return {
            s: DB,
            n: function() {
              return YB >= BB.length ? {
                done: !0
              } : {
                done: !1,
                value: BB[YB++]
              }
            },
            e: function(BB) {
              throw BB
            },
            f: DB
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var QB, oB = !0,
        jB = !1;
      return {
        s: function() {
          GB = GB.call(BB)
        },
        n: function() {
          var BB = GB.next();
          return oB = BB.done, BB
        },
        e: function(BB) {
          jB = !0, QB = BB
        },
        f: function() {
          try {
            oB || null == GB.return || GB.return()
          } finally {
            if (jB) throw QB
          }
        }
      }
    }

    function oB(BB, OB, GB) {
      return (OB = PB(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function jB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function yB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? jB(Object(GB), !0).forEach((function(OB) {
          oB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : jB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function JB(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        var GB = null == BB ? null : "undefined" != typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null != GB) {
          var YB, DB, QB, oB, jB = [],
            yB = !0,
            JB = !1;
          try {
            if (QB = (GB = GB.call(BB)).next, 0 === OB) {
              if (Object(GB) !== GB) return;
              yB = !1
            } else
              for (; !(yB = (YB = QB.call(GB)).done) && (jB.push(YB.value), jB.length !== OB); yB = !0);
          } catch (BB) {
            JB = !0, DB = BB
          } finally {
            try {
              if (!yB && null != GB.return && (oB = GB.return(), Object(oB) !== oB)) return
            } finally {
              if (JB) throw DB
            }
          }
          return jB
        }
      }(BB, OB) || lB(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function MB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return YB(BB)
      }(BB) || function(BB) {
        if ("undefined" != typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || lB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function PB(BB) {
      var OB = function(BB, OB) {
        if ("object" != typeof BB || !BB) return BB;
        var GB = BB[Symbol.toPrimitive];
        if (void 0 !== GB) {
          var YB = GB.call(BB, OB || "default");
          if ("object" != typeof YB) return YB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === OB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == typeof OB ? OB : OB + ""
    }

    function zB(BB) {
      return zB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, zB(BB)
    }

    function lB(BB, OB) {
      if (BB) {
        if ("string" == typeof BB) return YB(BB, OB);
        var GB = {}.toString.call(BB).slice(8, -1);
        return "Object" === GB && BB.constructor && (GB = BB.constructor.name), "Map" === GB || "Set" === GB ? Array.from(BB) : "Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB) ? YB(BB, OB) : void 0
      }
    }
    GB.r(OB), GB.d(OB, {
      api: () => vG,
      config: () => GD,
      counter: () => PD,
      dom: () => DD,
      findIconDefinition: () => oD,
      icon: () => yD,
      layer: () => JD,
      library: () => YD,
      noAuto: () => OD,
      parse: () => QD,
      text: () => MD,
      toHtml: () => jD
    });
    var pB = function() {},
      qB = {},
      ZB = {},
      NB = null,
      RB = {
        mark: pB,
        measure: pB
      };
    try {
      "undefined" !== typeof window && (qB = window), "undefined" !== typeof document && (ZB = document), "undefined" !== typeof MutationObserver && (NB = MutationObserver), "undefined" !== typeof performance && (RB = performance)
    } catch (aB) {}
    var WB, AB, VB = (qB.navigator || {}).userAgent,
      SB = void 0 === VB ? "" : VB,
      nB = qB,
      UB = ZB,
      fB = NB,
      kB = RB,
      dB = (nB.document, !!UB.documentElement && !!UB.head && "function" === typeof UB.addEventListener && "function" === typeof UB.createElement),
      KB = ~SB.indexOf("MSIE") || ~SB.indexOf("Trident/"),
      uB = {
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
      mB = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      IB = "classic",
      FB = "duotone",
      iB = "sharp",
      LB = "sharp-duotone",
      gB = "chisel",
      rB = "etch",
      XB = "graphite",
      wB = "jelly",
      EB = "jelly-duo",
      cB = "jelly-fill",
      hB = "notdog",
      aB = "notdog-duo",
      eB = "slab",
      TB = "slab-press",
      bB = "thumbprint",
      CB = "utility",
      HB = "utility-duo",
      vB = "utility-fill",
      sB = "whiteboard",
      xB = [IB, FB, iB, LB, gB, rB, XB, wB, EB, cB, hB, aB, eB, TB, bB, CB, HB, vB, sB],
      tB = (oB(oB(oB(oB(oB(oB(oB(oB(oB(oB(WB = {}, IB, "Classic"), FB, "Duotone"), iB, "Sharp"), LB, "Sharp Duotone"), gB, "Chisel"), rB, "Etch"), XB, "Graphite"), wB, "Jelly"), EB, "Jelly Duo"), cB, "Jelly Fill"), oB(oB(oB(oB(oB(oB(oB(oB(oB(WB, hB, "Notdog"), aB, "Notdog Duo"), eB, "Slab"), TB, "Slab Press"), bB, "Thumbprint"), CB, "Utility"), HB, "Utility Duo"), vB, "Utility Fill"), sB, "Whiteboard"), new Map([
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
      BO = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      OO = {
        fak: "kit",
        "fa-kit": "kit"
      },
      GO = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      YO = (oB(oB({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      DO = {
        "kit-duotone": "fakd"
      },
      QO = "duotone-group",
      oO = "swap-opacity",
      jO = "primary",
      yO = "secondary",
      JO = (oB(oB(oB(oB(oB(oB(oB(oB(oB(oB(AB = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), oB(oB(oB(oB(oB(oB(oB(oB(oB(AB, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), oB(oB({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      MO = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      PO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      zO = PO.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      lO = [].concat(MB(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", QO, oO, jO, yO]).concat(PO.map((function(BB) {
        return "".concat(BB, "x")
      }))).concat(zO.map((function(BB) {
        return "w-".concat(BB)
      }))),
      pO = "___FONT_AWESOME___",
      qO = "svg-inline--fa",
      ZO = "data-fa-i2svg",
      NO = "data-fa-pseudo-element",
      RO = "data-prefix",
      WO = "data-icon",
      AO = "fontawesome-i2svg",
      VO = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      SO = ["::before", "::after", ":before", ":after"],
      nO = function() {
        try {
          return !0
        } catch (BB) {
          return !1
        }
      }();

    function UO(BB) {
      return new Proxy(BB, {
        get: function(BB, OB) {
          return OB in BB ? BB[OB] : BB[IB]
        }
      })
    }
    var fO = yB({}, uB);
    fO[IB] = yB(yB(yB(yB({}, {
      "fa-duotone": "duotone"
    }), uB[IB]), OO), GO);
    var kO = UO(fO),
      dO = yB({}, {
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
    dO[IB] = yB(yB(yB(yB({}, {
      duotone: "fad"
    }), dO[IB]), YO), DO);
    var KO = UO(dO),
      uO = yB({}, JO);
    uO[IB] = yB(yB({}, uO[IB]), {
      fak: "fa-kit"
    });
    var mO = UO(uO),
      IO = yB({}, {
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
    IO[IB] = yB(yB({}, IO[IB]), {
      "fa-kit": "fak"
    });
    UO(IO);
    var FO = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      iO = "fa-layers-text",
      LO = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      gO = (UO(yB({}, {
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
      rO = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      XO = [].concat(MB(["kit"]), MB(lO)),
      wO = nB.FontAwesomeConfig || {};
    if (UB && "function" === typeof UB.querySelector) {
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
        var OB = JB(BB, 2),
          GB = OB[0],
          YB = OB[1],
          DB = function(BB) {
            return "" === BB || "false" !== BB && ("true" === BB || BB)
          }(function(BB) {
            var OB = UB.querySelector("script[" + BB + "]");
            if (OB) return OB.getAttribute(BB)
          }(GB));
        void 0 !== DB && null !== DB && (wO[YB] = DB)
      }))
    }
    var EO = {
      styleDefault: "solid",
      familyDefault: IB,
      cssPrefix: "fa",
      replacementClass: qO,
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
    wO.familyPrefix && (wO.cssPrefix = wO.familyPrefix);
    var cO = yB(yB({}, EO), wO);
    cO.autoReplaceSvg || (cO.observeMutations = !1);
    var hO = {};
    Object.keys(EO).forEach((function(BB) {
      Object.defineProperty(hO, BB, {
        enumerable: !0,
        set: function(OB) {
          cO[BB] = OB, aO.forEach((function(BB) {
            return BB(hO)
          }))
        },
        get: function() {
          return cO[BB]
        }
      })
    })), Object.defineProperty(hO, "familyPrefix", {
      enumerable: !0,
      set: function(BB) {
        cO.cssPrefix = BB, aO.forEach((function(BB) {
          return BB(hO)
        }))
      },
      get: function() {
        return cO.cssPrefix
      }
    }), nB.FontAwesomeConfig = hO;
    var aO = [];
    var eO = 16,
      TO = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function bO() {
      for (var BB = 12, OB = ""; BB-- > 0;) OB += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return OB
    }

    function CO(BB) {
      for (var OB = [], GB = (BB || []).length >>> 0; GB--;) OB[GB] = BB[GB];
      return OB
    }

    function HO(BB) {
      return BB.classList ? CO(BB.classList) : (BB.getAttribute("class") || "").split(" ").filter((function(BB) {
        return BB
      }))
    }

    function vO(BB) {
      return "".concat(BB).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function sO(BB) {
      return Object.keys(BB || {}).reduce((function(OB, GB) {
        return OB + "".concat(GB, ": ").concat(BB[GB].trim(), ";")
      }), "")
    }

    function xO(BB) {
      return BB.size !== TO.size || BB.x !== TO.x || BB.y !== TO.y || BB.rotate !== TO.rotate || BB.flipX || BB.flipY
    }

    function tO() {
      var BB = "fa",
        OB = qO,
        GB = hO.cssPrefix,
        YB = hO.replacementClass,
        DB = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (GB !== BB || YB !== OB) {
        var QB = new RegExp("\\.".concat(BB, "\\-"), "g"),
          oB = new RegExp("\\--".concat(BB, "\\-"), "g"),
          jB = new RegExp("\\.".concat(OB), "g");
        DB = DB.replace(QB, ".".concat(GB, "-")).replace(oB, "--".concat(GB, "-")).replace(jB, ".".concat(YB))
      }
      return DB
    }
    var BG = !1;

    function OG() {
      hO.autoAddCss && !BG && (! function(BB) {
        if (BB && dB) {
          var OB = UB.createElement("style");
          OB.setAttribute("type", "text/css"), OB.innerHTML = BB;
          for (var GB = UB.head.childNodes, YB = null, DB = GB.length - 1; DB > -1; DB--) {
            var QB = GB[DB],
              oB = (QB.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(oB) > -1 && (YB = QB)
          }
          UB.head.insertBefore(OB, YB)
        }
      }(tO()), BG = !0)
    }
    var GG = {
        mixout: function() {
          return {
            dom: {
              css: tO,
              insertCss: OG
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              OG()
            },
            beforeI2svg: function() {
              OG()
            }
          }
        }
      },
      YG = nB || {};
    YG[pO] || (YG[pO] = {}), YG[pO].styles || (YG[pO].styles = {}), YG[pO].hooks || (YG[pO].hooks = {}), YG[pO].shims || (YG[pO].shims = []);
    var DG = YG[pO],
      QG = [],
      oG = function() {
        UB.removeEventListener("DOMContentLoaded", oG), jG = 1, QG.map((function(BB) {
          return BB()
        }))
      },
      jG = !1;

    function yG(BB) {
      var OB = BB.tag,
        GB = BB.attributes,
        YB = void 0 === GB ? {} : GB,
        DB = BB.children,
        QB = void 0 === DB ? [] : DB;
      return "string" === typeof BB ? vO(BB) : "<".concat(OB, " ").concat(function(BB) {
        return Object.keys(BB || {}).reduce((function(OB, GB) {
          return OB + "".concat(GB, '="').concat(vO(BB[GB]), '" ')
        }), "").trim()
      }(YB), ">").concat(QB.map(yG).join(""), "</").concat(OB, ">")
    }

    function JG(BB, OB, GB) {
      if (BB && BB[OB] && BB[OB][GB]) return {
        prefix: OB,
        iconName: GB,
        icon: BB[OB][GB]
      }
    }
    dB && ((jG = (UB.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(UB.readyState)) || UB.addEventListener("DOMContentLoaded", oG));
    var MG = function(BB, OB, GB, YB) {
      var DB, QB, oB, jB = Object.keys(BB),
        yB = jB.length,
        JB = void 0 !== YB ? function(BB, OB) {
          return function(GB, YB, DB, QB) {
            return BB.call(OB, GB, YB, DB, QB)
          }
        }(OB, YB) : OB;
      for (void 0 === GB ? (DB = 1, oB = BB[jB[0]]) : (DB = 0, oB = GB); DB < yB; DB++) oB = JB(oB, BB[QB = jB[DB]], QB, BB);
      return oB
    };

    function PG(BB) {
      return 1 !== MB(BB).length ? null : BB.codePointAt(0).toString(16)
    }

    function zG(BB) {
      return Object.keys(BB).reduce((function(OB, GB) {
        var YB = BB[GB];
        return !!YB.icon ? OB[YB.iconName] = YB.icon : OB[GB] = YB, OB
      }), {})
    }

    function lG(BB, OB) {
      var GB = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        YB = void 0 !== GB && GB,
        DB = zG(OB);
      "function" !== typeof DG.hooks.addPack || YB ? DG.styles[BB] = yB(yB({}, DG.styles[BB] || {}), DB) : DG.hooks.addPack(BB, zG(OB)), "fas" === BB && lG("fa", OB)
    }
    var pG = DG.styles,
      qG = DG.shims,
      ZG = Object.keys(mO),
      NG = ZG.reduce((function(BB, OB) {
        return BB[OB] = Object.keys(mO[OB]), BB
      }), {}),
      RG = null,
      WG = {},
      AG = {},
      VG = {},
      SG = {},
      nG = {};

    function UG(BB, OB) {
      var GB, YB = OB.split("-"),
        DB = YB[0],
        QB = YB.slice(1).join("-");
      return DB !== BB || "" === QB || (GB = QB, ~XO.indexOf(GB)) ? null : QB
    }
    var fG, kG = function() {
      var BB = function(BB) {
        return MG(pG, (function(OB, GB, YB) {
          return OB[YB] = MG(GB, BB, {}), OB
        }), {})
      };
      WG = BB((function(BB, OB, GB) {
        (OB[3] && (BB[OB[3]] = GB), OB[2]) && OB[2].filter((function(BB) {
          return "number" === typeof BB
        })).forEach((function(OB) {
          BB[OB.toString(16)] = GB
        }));
        return BB
      })), AG = BB((function(BB, OB, GB) {
        (BB[GB] = GB, OB[2]) && OB[2].filter((function(BB) {
          return "string" === typeof BB
        })).forEach((function(OB) {
          BB[OB] = GB
        }));
        return BB
      })), nG = BB((function(BB, OB, GB) {
        var YB = OB[2];
        return BB[GB] = GB, YB.forEach((function(OB) {
          BB[OB] = GB
        })), BB
      }));
      var OB = "far" in pG || hO.autoFetchSvg,
        GB = MG(qG, (function(BB, GB) {
          var YB = GB[0],
            DB = GB[1],
            QB = GB[2];
          return "far" !== DB || OB || (DB = "fas"), "string" === typeof YB && (BB.names[YB] = {
            prefix: DB,
            iconName: QB
          }), "number" === typeof YB && (BB.unicodes[YB.toString(16)] = {
            prefix: DB,
            iconName: QB
          }), BB
        }), {
          names: {},
          unicodes: {}
        });
      VG = GB.names, SG = GB.unicodes, RG = IG(hO.styleDefault, {
        family: hO.familyDefault
      })
    };

    function dG(BB, OB) {
      return (WG[BB] || {})[OB]
    }

    function KG(BB, OB) {
      return (nG[BB] || {})[OB]
    }

    function uG(BB) {
      return VG[BB] || {
        prefix: null,
        iconName: null
      }
    }

    function mG() {
      return RG
    }
    fG = function(BB) {
      RG = IG(BB.styleDefault, {
        family: hO.familyDefault
      })
    }, aO.push(fG), kG();

    function IG(BB) {
      var OB = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        GB = void 0 === OB ? IB : OB,
        YB = kO[GB][BB];
      if (GB === FB && !BB) return "fad";
      var DB = KO[GB][BB] || KO[GB][YB],
        QB = BB in DG.styles ? BB : null;
      return DB || QB || null
    }

    function FG(BB) {
      return BB.sort().filter((function(BB, OB, GB) {
        return GB.indexOf(BB) === OB
      }))
    }
    var iG = MO.concat(BO);

    function LG(BB) {
      var OB = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        GB = void 0 !== OB && OB,
        YB = null,
        DB = FG(BB.filter((function(BB) {
          return iG.includes(BB)
        }))),
        QB = FG(BB.filter((function(BB) {
          return !iG.includes(BB)
        }))),
        oB = JB(DB.filter((function(BB) {
          return YB = BB, !mB.includes(BB)
        })), 1)[0],
        jB = void 0 === oB ? null : oB,
        MB = function(BB) {
          var OB = IB,
            GB = ZG.reduce((function(BB, OB) {
              return BB[OB] = "".concat(hO.cssPrefix, "-").concat(OB), BB
            }), {});
          return xB.forEach((function(YB) {
            (BB.includes(GB[YB]) || BB.some((function(BB) {
              return NG[YB].includes(BB)
            }))) && (OB = YB)
          })), OB
        }(DB),
        PB = yB(yB({}, function(BB) {
          var OB = [],
            GB = null;
          return BB.forEach((function(BB) {
            var YB = UG(hO.cssPrefix, BB);
            YB ? GB = YB : BB && OB.push(BB)
          })), {
            iconName: GB,
            rest: OB
          }
        }(QB)), {}, {
          prefix: IG(jB, {
            family: MB
          })
        });
      return yB(yB(yB({}, PB), function(BB) {
        var OB = BB.values,
          GB = BB.family,
          YB = BB.canonical,
          DB = BB.givenPrefix,
          QB = void 0 === DB ? "" : DB,
          oB = BB.styles,
          jB = void 0 === oB ? {} : oB,
          yB = BB.config,
          JB = void 0 === yB ? {} : yB,
          MB = GB === FB,
          PB = OB.includes("fa-duotone") || OB.includes("fad"),
          zB = "duotone" === JB.familyDefault,
          lB = "fad" === YB.prefix || "fa-duotone" === YB.prefix;
        !MB && (PB || zB || lB) && (YB.prefix = "fad");
        (OB.includes("fa-brands") || OB.includes("fab")) && (YB.prefix = "fab");
        if (!YB.prefix && gG.includes(GB)) {
          if (Object.keys(jB).find((function(BB) {
              return rG.includes(BB)
            })) || JB.autoFetchSvg) {
            var pB = tB.get(GB).defaultShortPrefixId;
            YB.prefix = pB, YB.iconName = KG(YB.prefix, YB.iconName) || YB.iconName
          }
        }
        "fa" !== YB.prefix && "fa" !== QB || (YB.prefix = mG() || "fas");
        return YB
      }({
        values: BB,
        family: MB,
        styles: pG,
        config: hO,
        canonical: PB,
        givenPrefix: YB
      })), function(BB, OB, GB) {
        var YB = GB.prefix,
          DB = GB.iconName;
        if (BB || !YB || !DB) return {
          prefix: YB,
          iconName: DB
        };
        var QB = "fa" === OB ? uG(DB) : {},
          oB = KG(YB, DB);
        DB = QB.iconName || oB || DB, "far" !== (YB = QB.prefix || YB) || pG.far || !pG.fas || hO.autoFetchSvg || (YB = "fas");
        return {
          prefix: YB,
          iconName: DB
        }
      }(GB, YB, PB))
    }
    var gG = xB.filter((function(BB) {
        return BB !== IB || BB !== FB
      })),
      rG = Object.keys(JO).filter((function(BB) {
        return BB !== IB
      })).map((function(BB) {
        return Object.keys(JO[BB])
      })).flat();
    var XG = function() {
        return function(BB, OB, GB) {
          return OB && DB(BB.prototype, OB), GB && DB(BB, GB), Object.defineProperty(BB, "prototype", {
            writable: !1
          }), BB
        }((function BB() {
          ! function(BB, OB) {
            if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
          }(this, BB), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var BB = this, OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
            var DB = GB.reduce(this._pullDefinitions, {});
            Object.keys(DB).forEach((function(OB) {
              BB.definitions[OB] = yB(yB({}, BB.definitions[OB] || {}), DB[OB]), lG(OB, DB[OB]);
              var GB = mO[IB][OB];
              GB && lG(GB, DB[OB]), kG()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(BB, OB) {
            var GB = OB.prefix && OB.iconName && OB.icon ? {
              0: OB
            } : OB;
            return Object.keys(GB).map((function(OB) {
              var YB = GB[OB],
                DB = YB.prefix,
                QB = YB.iconName,
                oB = YB.icon,
                jB = oB[2];
              BB[DB] || (BB[DB] = {}), jB.length > 0 && jB.forEach((function(OB) {
                "string" === typeof OB && (BB[DB][OB] = oB)
              })), BB[DB][QB] = oB
            })), BB
          }
        }])
      }(),
      wG = [],
      EG = {},
      cG = {},
      hG = Object.keys(cG);

    function aG(BB, OB) {
      for (var GB = arguments.length, YB = new Array(GB > 2 ? GB - 2 : 0), DB = 2; DB < GB; DB++) YB[DB - 2] = arguments[DB];
      return (EG[BB] || []).forEach((function(BB) {
        OB = BB.apply(null, [OB].concat(YB))
      })), OB
    }

    function eG(BB) {
      for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
      (EG[BB] || []).forEach((function(BB) {
        BB.apply(null, GB)
      }))
    }

    function TG() {
      var BB = arguments[0],
        OB = Array.prototype.slice.call(arguments, 1);
      return cG[BB] ? cG[BB].apply(null, OB) : void 0
    }

    function bG(BB) {
      "fa" === BB.prefix && (BB.prefix = "fas");
      var OB = BB.iconName,
        GB = BB.prefix || mG();
      if (OB) return OB = KG(GB, OB) || OB, JG(CG.definitions, GB, OB) || JG(DG.styles, GB, OB)
    }
    var CG = new XG,
      HG = {
        i2svg: function() {
          var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return dB ? (eG("beforeI2svg", BB), TG("pseudoElements2svg", BB), TG("i2svg", BB)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var BB, OB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            GB = OB.autoReplaceSvgRoot;
          !1 === hO.autoReplaceSvg && (hO.autoReplaceSvg = !0), hO.observeMutations = !0, BB = function() {
            sG({
              autoReplaceSvgRoot: GB
            }), eG("watch", OB)
          }, dB && (jG ? setTimeout(BB, 0) : QG.push(BB))
        }
      },
      vG = {
        noAuto: function() {
          hO.autoReplaceSvg = !1, hO.observeMutations = !1, eG("noAuto")
        },
        config: hO,
        dom: HG,
        parse: {
          icon: function(BB) {
            if (null === BB) return null;
            if ("object" === zB(BB) && BB.prefix && BB.iconName) return {
              prefix: BB.prefix,
              iconName: KG(BB.prefix, BB.iconName) || BB.iconName
            };
            if (Array.isArray(BB) && 2 === BB.length) {
              var OB = 0 === BB[1].indexOf("fa-") ? BB[1].slice(3) : BB[1],
                GB = IG(BB[0]);
              return {
                prefix: GB,
                iconName: KG(GB, OB) || OB
              }
            }
            if ("string" === typeof BB && (BB.indexOf("".concat(hO.cssPrefix, "-")) > -1 || BB.match(FO))) {
              var YB = LG(BB.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: YB.prefix || mG(),
                iconName: KG(YB.prefix, YB.iconName) || YB.iconName
              }
            }
            if ("string" === typeof BB) {
              var DB = mG();
              return {
                prefix: DB,
                iconName: KG(DB, BB) || BB
              }
            }
          }
        },
        library: CG,
        findIconDefinition: bG,
        toHtml: yG
      },
      sG = function() {
        var BB = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          OB = void 0 === BB ? UB : BB;
        (Object.keys(DG.styles).length > 0 || hO.autoFetchSvg) && dB && hO.autoReplaceSvg && vG.dom.i2svg({
          node: OB
        })
      };

    function xG(BB, OB) {
      return Object.defineProperty(BB, "abstract", {
        get: OB
      }), Object.defineProperty(BB, "html", {
        get: function() {
          return BB.abstract.map((function(BB) {
            return yG(BB)
          }))
        }
      }), Object.defineProperty(BB, "node", {
        get: function() {
          if (dB) {
            var OB = UB.createElement("div");
            return OB.innerHTML = BB.html, OB.children
          }
        }
      }), BB
    }

    function tG(BB) {
      var OB = BB.icons,
        GB = OB.main,
        YB = OB.mask,
        DB = BB.prefix,
        QB = BB.iconName,
        oB = BB.transform,
        jB = BB.symbol,
        JB = BB.maskId,
        MB = BB.extra,
        PB = BB.watchable,
        zB = void 0 !== PB && PB,
        lB = YB.found ? YB : GB,
        pB = lB.width,
        qB = lB.height,
        ZB = [hO.replacementClass, QB ? "".concat(hO.cssPrefix, "-").concat(QB) : ""].filter((function(BB) {
          return -1 === MB.classes.indexOf(BB)
        })).filter((function(BB) {
          return "" !== BB || !!BB
        })).concat(MB.classes).join(" "),
        NB = {
          children: [],
          attributes: yB(yB({}, MB.attributes), {}, {
            "data-prefix": DB,
            "data-icon": QB,
            class: ZB,
            role: MB.attributes.role || "img",
            viewBox: "0 0 ".concat(pB, " ").concat(qB)
          })
        };
      (function(BB) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(OB) {
          return OB in BB
        }))
      })(MB.attributes) || MB.attributes["aria-hidden"] || (NB.attributes["aria-hidden"] = "true"), zB && (NB.attributes[ZO] = "");
      var RB = yB(yB({}, NB), {}, {
          prefix: DB,
          iconName: QB,
          main: GB,
          mask: YB,
          maskId: JB,
          transform: oB,
          symbol: jB,
          styles: yB({}, MB.styles)
        }),
        WB = YB.found && GB.found ? TG("generateAbstractMask", RB) || {
          children: [],
          attributes: {}
        } : TG("generateAbstractIcon", RB) || {
          children: [],
          attributes: {}
        },
        AB = WB.children,
        VB = WB.attributes;
      return RB.children = AB, RB.attributes = VB, jB ? function(BB) {
        var OB = BB.prefix,
          GB = BB.iconName,
          YB = BB.children,
          DB = BB.attributes,
          QB = BB.symbol,
          oB = !0 === QB ? "".concat(OB, "-").concat(hO.cssPrefix, "-").concat(GB) : QB;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: yB(yB({}, DB), {}, {
              id: oB
            }),
            children: YB
          }]
        }]
      }(RB) : function(BB) {
        var OB = BB.children,
          GB = BB.main,
          YB = BB.mask,
          DB = BB.attributes,
          QB = BB.styles,
          oB = BB.transform;
        if (xO(oB) && GB.found && !YB.found) {
          var jB = {
            x: GB.width / GB.height / 2,
            y: .5
          };
          DB.style = sO(yB(yB({}, QB), {}, {
            "transform-origin": "".concat(jB.x + oB.x / 16, "em ").concat(jB.y + oB.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: DB,
          children: OB
        }]
      }(RB)
    }

    function BY(BB) {
      var OB = BB.content,
        GB = BB.width,
        YB = BB.height,
        DB = BB.transform,
        QB = BB.extra,
        oB = BB.watchable,
        jB = void 0 !== oB && oB,
        JB = yB(yB({}, QB.attributes), {}, {
          class: QB.classes.join(" ")
        });
      jB && (JB[ZO] = "");
      var MB = yB({}, QB.styles);
      xO(DB) && (MB.transform = function(BB) {
        var OB = BB.transform,
          GB = BB.width,
          YB = void 0 === GB ? 16 : GB,
          DB = BB.height,
          QB = void 0 === DB ? 16 : DB,
          oB = BB.startCentered,
          jB = void 0 !== oB && oB,
          yB = "";
        return yB += jB && KB ? "translate(".concat(OB.x / eO - YB / 2, "em, ").concat(OB.y / eO - QB / 2, "em) ") : jB ? "translate(calc(-50% + ".concat(OB.x / eO, "em), calc(-50% + ").concat(OB.y / eO, "em)) ") : "translate(".concat(OB.x / eO, "em, ").concat(OB.y / eO, "em) "), yB += "scale(".concat(OB.size / eO * (OB.flipX ? -1 : 1), ", ").concat(OB.size / eO * (OB.flipY ? -1 : 1), ") "), yB + "rotate(".concat(OB.rotate, "deg) ")
      }({
        transform: DB,
        startCentered: !0,
        width: GB,
        height: YB
      }), MB["-webkit-transform"] = MB.transform);
      var PB = sO(MB);
      PB.length > 0 && (JB.style = PB);
      var zB = [];
      return zB.push({
        tag: "span",
        attributes: JB,
        children: [OB]
      }), zB
    }
    var OY = DG.styles;

    function GY(BB) {
      var OB = BB[0],
        GB = BB[1],
        YB = JB(BB.slice(4), 1)[0];
      return {
        found: !0,
        width: OB,
        height: GB,
        icon: Array.isArray(YB) ? {
          tag: "g",
          attributes: {
            class: "".concat(hO.cssPrefix, "-").concat(rO.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(hO.cssPrefix, "-").concat(rO.SECONDARY),
              fill: "currentColor",
              d: YB[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(hO.cssPrefix, "-").concat(rO.PRIMARY),
              fill: "currentColor",
              d: YB[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: YB
          }
        }
      }
    }
    var YY = {
      found: !1,
      width: 512,
      height: 512
    };

    function DY(BB, OB) {
      var GB = OB;
      return "fa" === OB && null !== hO.styleDefault && (OB = mG()), new Promise((function(YB, DB) {
        if ("fa" === GB) {
          var QB = uG(BB) || {};
          BB = QB.iconName || BB, OB = QB.prefix || OB
        }
        if (BB && OB && OY[OB] && OY[OB][BB]) return YB(GY(OY[OB][BB]));
        ! function(BB, OB) {
          nO || hO.showMissingIcons || !BB || console.error('Icon with name "'.concat(BB, '" and prefix "').concat(OB, '" is missing.'))
        }(BB, OB), YB(yB(yB({}, YY), {}, {
          icon: hO.showMissingIcons && BB && TG("missingIconAbstract") || {}
        }))
      }))
    }
    var QY = function() {},
      oY = hO.measurePerformance && kB && kB.mark && kB.measure ? kB : {
        mark: QY,
        measure: QY
      },
      jY = 'FA "7.2.0"',
      yY = function(BB) {
        oY.mark("".concat(jY, " ").concat(BB, " ends")), oY.measure("".concat(jY, " ").concat(BB), "".concat(jY, " ").concat(BB, " begins"), "".concat(jY, " ").concat(BB, " ends"))
      },
      JY = function(BB) {
        return oY.mark("".concat(jY, " ").concat(BB, " begins")),
          function() {
            return yY(BB)
          }
      },
      MY = function() {};

    function PY(BB) {
      return "string" === typeof(BB.getAttribute ? BB.getAttribute(ZO) : null)
    }

    function zY(BB) {
      return UB.createElementNS("http://www.w3.org/2000/svg", BB)
    }

    function lY(BB) {
      return UB.createElement(BB)
    }

    function pY(BB) {
      var OB = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        GB = void 0 === OB ? "svg" === BB.tag ? zY : lY : OB;
      if ("string" === typeof BB) return UB.createTextNode(BB);
      var YB = GB(BB.tag);
      return Object.keys(BB.attributes || []).forEach((function(OB) {
        YB.setAttribute(OB, BB.attributes[OB])
      })), (BB.children || []).forEach((function(BB) {
        YB.appendChild(pY(BB, {
          ceFn: GB
        }))
      })), YB
    }
    var qY = {
      replace: function(BB) {
        var OB = BB[0];
        if (OB.parentNode)
          if (BB[1].forEach((function(BB) {
              OB.parentNode.insertBefore(pY(BB), OB)
            })), null === OB.getAttribute(ZO) && hO.keepOriginalSource) {
            var GB = UB.createComment(function(BB) {
              var OB = " ".concat(BB.outerHTML, " ");
              return "".concat(OB, "Font Awesome fontawesome.com ")
            }(OB));
            OB.parentNode.replaceChild(GB, OB)
          } else OB.remove()
      },
      nest: function(BB) {
        var OB = BB[0],
          GB = BB[1];
        if (~HO(OB).indexOf(hO.replacementClass)) return qY.replace(BB);
        var YB = new RegExp("".concat(hO.cssPrefix, "-.*"));
        if (delete GB[0].attributes.id, GB[0].attributes.class) {
          var DB = GB[0].attributes.class.split(" ").reduce((function(BB, OB) {
            return OB === hO.replacementClass || OB.match(YB) ? BB.toSvg.push(OB) : BB.toNode.push(OB), BB
          }), {
            toNode: [],
            toSvg: []
          });
          GB[0].attributes.class = DB.toSvg.join(" "), 0 === DB.toNode.length ? OB.removeAttribute("class") : OB.setAttribute("class", DB.toNode.join(" "))
        }
        var QB = GB.map((function(BB) {
          return yG(BB)
        })).join("\n");
        OB.setAttribute(ZO, ""), OB.innerHTML = QB
      }
    };

    function ZY(BB) {
      BB()
    }

    function NY(BB, OB) {
      var GB = "function" === typeof OB ? OB : MY;
      if (0 === BB.length) GB();
      else {
        var YB = ZY;
        "async" === hO.mutateApproach && (YB = nB.requestAnimationFrame || ZY), YB((function() {
          var OB = !0 === hO.autoReplaceSvg ? qY.replace : qY[hO.autoReplaceSvg] || qY.replace,
            YB = JY("mutate");
          BB.map(OB), YB(), GB()
        }))
      }
    }
    var RY = !1;

    function WY() {
      RY = !0
    }

    function AY() {
      RY = !1
    }
    var VY = null;

    function SY(BB) {
      if (fB && hO.observeMutations) {
        var OB = BB.treeCallback,
          GB = void 0 === OB ? MY : OB,
          YB = BB.nodeCallback,
          DB = void 0 === YB ? MY : YB,
          QB = BB.pseudoElementsCallback,
          oB = void 0 === QB ? MY : QB,
          jB = BB.observeMutationsRoot,
          yB = void 0 === jB ? UB : jB;
        VY = new fB((function(BB) {
          if (!RY) {
            var OB = mG();
            CO(BB).forEach((function(BB) {
              if ("childList" === BB.type && BB.addedNodes.length > 0 && !PY(BB.addedNodes[0]) && (hO.searchPseudoElements && oB(BB.target), GB(BB.target)), "attributes" === BB.type && BB.target.parentNode && hO.searchPseudoElements && oB([BB.target], !0), "attributes" === BB.type && PY(BB.target) && ~gO.indexOf(BB.attributeName))
                if ("class" === BB.attributeName && function(BB) {
                    var OB = BB.getAttribute ? BB.getAttribute(RO) : null,
                      GB = BB.getAttribute ? BB.getAttribute(WO) : null;
                    return OB && GB
                  }(BB.target)) {
                  var YB = LG(HO(BB.target)),
                    QB = YB.prefix,
                    jB = YB.iconName;
                  BB.target.setAttribute(RO, QB || OB), jB && BB.target.setAttribute(WO, jB)
                } else(yB = BB.target) && yB.classList && yB.classList.contains && yB.classList.contains(hO.replacementClass) && DB(BB.target);
              var yB
            }))
          }
        })), dB && VY.observe(yB, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function nY(BB) {
      var OB, GB, YB = BB.getAttribute("data-prefix"),
        DB = BB.getAttribute("data-icon"),
        QB = void 0 !== BB.innerText ? BB.innerText.trim() : "",
        oB = LG(HO(BB));
      return oB.prefix || (oB.prefix = mG()), YB && DB && (oB.prefix = YB, oB.iconName = DB), oB.iconName && oB.prefix || (oB.prefix && QB.length > 0 && (oB.iconName = (OB = oB.prefix, GB = BB.innerText, (AG[OB] || {})[GB] || dG(oB.prefix, PG(BB.innerText)))), !oB.iconName && hO.autoFetchSvg && BB.firstChild && BB.firstChild.nodeType === Node.TEXT_NODE && (oB.iconName = BB.firstChild.data)), oB
    }

    function UY(BB) {
      var OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        GB = nY(BB),
        YB = GB.iconName,
        DB = GB.prefix,
        QB = GB.rest,
        oB = function(BB) {
          return CO(BB.attributes).reduce((function(BB, OB) {
            return "class" !== BB.name && "style" !== BB.name && (BB[OB.name] = OB.value), BB
          }), {})
        }(BB),
        jB = aG("parseNodeAttributes", {}, BB),
        JB = OB.styleParser ? function(BB) {
          var OB = BB.getAttribute("style"),
            GB = [];
          return OB && (GB = OB.split(";").reduce((function(BB, OB) {
            var GB = OB.split(":"),
              YB = GB[0],
              DB = GB.slice(1);
            return YB && DB.length > 0 && (BB[YB] = DB.join(":").trim()), BB
          }), {})), GB
        }(BB) : [];
      return yB({
        iconName: YB,
        prefix: DB,
        transform: TO,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: QB,
          styles: JB,
          attributes: oB
        }
      }, jB)
    }
    var fY = DG.styles;

    function kY(BB) {
      var OB = "nest" === hO.autoReplaceSvg ? UY(BB, {
        styleParser: !1
      }) : UY(BB);
      return ~OB.extra.classes.indexOf(iO) ? TG("generateLayersText", BB, OB) : TG("generateSvgReplacementMutation", BB, OB)
    }

    function dY(BB) {
      var OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!dB) return Promise.resolve();
      var GB = UB.documentElement.classList,
        YB = function(BB) {
          return GB.add("".concat(AO, "-").concat(BB))
        },
        DB = function(BB) {
          return GB.remove("".concat(AO, "-").concat(BB))
        },
        QB = hO.autoFetchSvg ? [].concat(MB(BO), MB(MO)) : mB.concat(Object.keys(fY));
      QB.includes("fa") || QB.push("fa");
      var oB = [".".concat(iO, ":not([").concat(ZO, "])")].concat(QB.map((function(BB) {
        return ".".concat(BB, ":not([").concat(ZO, "])")
      }))).join(", ");
      if (0 === oB.length) return Promise.resolve();
      var jB = [];
      try {
        jB = CO(BB.querySelectorAll(oB))
      } catch (PB) {}
      if (!(jB.length > 0)) return Promise.resolve();
      YB("pending"), DB("complete");
      var yB = JY("onTree"),
        JB = jB.reduce((function(BB, OB) {
          try {
            var GB = kY(OB);
            GB && BB.push(GB)
          } catch (PB) {
            nO || "MissingIcon" === PB.name && console.error(PB)
          }
          return BB
        }), []);
      return new Promise((function(BB, GB) {
        Promise.all(JB).then((function(GB) {
          NY(GB, (function() {
            YB("active"), YB("complete"), DB("pending"), "function" === typeof OB && OB(), yB(), BB()
          }))
        })).catch((function(BB) {
          yB(), GB(BB)
        }))
      }))
    }

    function KY(BB) {
      var OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      kY(BB).then((function(BB) {
        BB && NY([BB], OB)
      }))
    }
    var uY = function(BB) {
        var OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          GB = OB.transform,
          YB = void 0 === GB ? TO : GB,
          DB = OB.symbol,
          QB = void 0 !== DB && DB,
          oB = OB.mask,
          jB = void 0 === oB ? null : oB,
          JB = OB.maskId,
          MB = void 0 === JB ? null : JB,
          PB = OB.classes,
          zB = void 0 === PB ? [] : PB,
          lB = OB.attributes,
          pB = void 0 === lB ? {} : lB,
          qB = OB.styles,
          ZB = void 0 === qB ? {} : qB;
        if (BB) {
          var NB = BB.prefix,
            RB = BB.iconName,
            WB = BB.icon;
          return xG(yB({
            type: "icon"
          }, BB), (function() {
            return eG("beforeDOMElementCreation", {
              iconDefinition: BB,
              params: OB
            }), tG({
              icons: {
                main: GY(WB),
                mask: jB ? GY(jB.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: NB,
              iconName: RB,
              transform: yB(yB({}, TO), YB),
              symbol: QB,
              maskId: MB,
              extra: {
                attributes: pB,
                styles: ZB,
                classes: zB
              }
            })
          }))
        }
      },
      mY = {
        mixout: function() {
          return {
            icon: (BB = uY, function(OB) {
              var GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                YB = (OB || {}).icon ? OB : bG(OB || {}),
                DB = GB.mask;
              return DB && (DB = (DB || {}).icon ? DB : bG(DB || {})), BB(YB, yB(yB({}, GB), {}, {
                mask: DB
              }))
            })
          };
          var BB
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(BB) {
              return BB.treeCallback = dY, BB.nodeCallback = KY, BB
            }
          }
        },
        provides: function(BB) {
          BB.i2svg = function(BB) {
            var OB = BB.node,
              GB = void 0 === OB ? UB : OB,
              YB = BB.callback;
            return dY(GB, void 0 === YB ? function() {} : YB)
          }, BB.generateSvgReplacementMutation = function(BB, OB) {
            var GB = OB.iconName,
              YB = OB.prefix,
              DB = OB.transform,
              QB = OB.symbol,
              oB = OB.mask,
              jB = OB.maskId,
              yB = OB.extra;
            return new Promise((function(OB, MB) {
              Promise.all([DY(GB, YB), oB.iconName ? DY(oB.iconName, oB.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(oB) {
                var MB = JB(oB, 2),
                  PB = MB[0],
                  zB = MB[1];
                OB([BB, tG({
                  icons: {
                    main: PB,
                    mask: zB
                  },
                  prefix: YB,
                  iconName: GB,
                  transform: DB,
                  symbol: QB,
                  maskId: jB,
                  extra: yB,
                  watchable: !0
                })])
              })).catch(MB)
            }))
          }, BB.generateAbstractIcon = function(BB) {
            var OB, GB = BB.children,
              YB = BB.attributes,
              DB = BB.main,
              QB = BB.transform,
              oB = sO(BB.styles);
            return oB.length > 0 && (YB.style = oB), xO(QB) && (OB = TG("generateAbstractTransformGrouping", {
              main: DB,
              transform: QB,
              containerWidth: DB.width,
              iconWidth: DB.width
            })), GB.push(OB || DB.icon), {
              children: GB,
              attributes: YB
            }
          }
        }
      },
      IY = {
        mixout: function() {
          return {
            layer: function(BB) {
              var OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                GB = OB.classes,
                YB = void 0 === GB ? [] : GB;
              return xG({
                type: "layer"
              }, (function() {
                eG("beforeDOMElementCreation", {
                  assembler: BB,
                  params: OB
                });
                var GB = [];
                return BB((function(BB) {
                  Array.isArray(BB) ? BB.map((function(BB) {
                    GB = GB.concat(BB.abstract)
                  })) : GB = GB.concat(BB.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(hO.cssPrefix, "-layers")].concat(MB(YB)).join(" ")
                  },
                  children: GB
                }]
              }))
            }
          }
        }
      },
      FY = {
        mixout: function() {
          return {
            counter: function(BB) {
              var OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                GB = OB.title,
                YB = void 0 === GB ? null : GB,
                DB = OB.classes,
                QB = void 0 === DB ? [] : DB,
                oB = OB.attributes,
                jB = void 0 === oB ? {} : oB,
                JB = OB.styles,
                PB = void 0 === JB ? {} : JB;
              return xG({
                type: "counter",
                content: BB
              }, (function() {
                return eG("beforeDOMElementCreation", {
                    content: BB,
                    params: OB
                  }),
                  function(BB) {
                    var OB = BB.content,
                      GB = BB.extra,
                      YB = yB(yB({}, GB.attributes), {}, {
                        class: GB.classes.join(" ")
                      }),
                      DB = sO(GB.styles);
                    DB.length > 0 && (YB.style = DB);
                    var QB = [];
                    return QB.push({
                      tag: "span",
                      attributes: YB,
                      children: [OB]
                    }), QB
                  }({
                    content: BB.toString(),
                    title: YB,
                    extra: {
                      attributes: jB,
                      styles: PB,
                      classes: ["".concat(hO.cssPrefix, "-layers-counter")].concat(MB(QB))
                    }
                  })
              }))
            }
          }
        }
      },
      iY = {
        mixout: function() {
          return {
            text: function(BB) {
              var OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                GB = OB.transform,
                YB = void 0 === GB ? TO : GB,
                DB = OB.classes,
                QB = void 0 === DB ? [] : DB,
                oB = OB.attributes,
                jB = void 0 === oB ? {} : oB,
                JB = OB.styles,
                PB = void 0 === JB ? {} : JB;
              return xG({
                type: "text",
                content: BB
              }, (function() {
                return eG("beforeDOMElementCreation", {
                  content: BB,
                  params: OB
                }), BY({
                  content: BB,
                  transform: yB(yB({}, TO), YB),
                  extra: {
                    attributes: jB,
                    styles: PB,
                    classes: ["".concat(hO.cssPrefix, "-layers-text")].concat(MB(QB))
                  }
                })
              }))
            }
          }
        },
        provides: function(BB) {
          BB.generateLayersText = function(BB, OB) {
            var GB = OB.transform,
              YB = OB.extra,
              DB = null,
              QB = null;
            if (KB) {
              var oB = parseInt(getComputedStyle(BB).fontSize, 10),
                jB = BB.getBoundingClientRect();
              DB = jB.width / oB, QB = jB.height / oB
            }
            return Promise.resolve([BB, BY({
              content: BB.innerHTML,
              width: DB,
              height: QB,
              transform: GB,
              extra: YB,
              watchable: !0
            })])
          }
        }
      },
      LY = new RegExp('"', "ug"),
      gY = [1105920, 1112319],
      rY = yB(yB(yB(yB({}, {
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
      XY = Object.keys(rY).reduce((function(BB, OB) {
        return BB[OB.toLowerCase()] = rY[OB], BB
      }), {}),
      wY = Object.keys(XY).reduce((function(BB, OB) {
        var GB = XY[OB];
        return BB[OB] = GB[900] || MB(Object.entries(GB))[0][1], BB
      }), {});

    function EY(BB, OB) {
      var GB = "".concat("data-fa-pseudo-element-pending").concat(OB.replace(":", "-"));
      return new Promise((function(YB, DB) {
        if (null !== BB.getAttribute(GB)) return YB();
        var QB = CO(BB.children).filter((function(BB) {
            return BB.getAttribute(NO) === OB
          }))[0],
          oB = nB.getComputedStyle(BB, OB),
          jB = oB.getPropertyValue("font-family"),
          JB = jB.match(LO),
          PB = oB.getPropertyValue("font-weight"),
          zB = oB.getPropertyValue("content");
        if (QB && !JB) return BB.removeChild(QB), YB();
        if (JB && "none" !== zB && "" !== zB) {
          var lB = oB.getPropertyValue("content"),
            pB = function(BB, OB) {
              var GB = BB.replace(/^['"]|['"]$/g, "").toLowerCase(),
                YB = parseInt(OB),
                DB = isNaN(YB) ? "normal" : YB;
              return (XY[GB] || {})[DB] || wY[GB]
            }(jB, PB),
            qB = function(BB) {
              return PG(MB(BB.replace(LY, ""))[0] || "")
            }(lB),
            ZB = JB[0].startsWith("FontAwesome"),
            NB = function(BB) {
              var OB = BB.getPropertyValue("font-feature-settings").includes("ss01"),
                GB = BB.getPropertyValue("content").replace(LY, ""),
                YB = GB.codePointAt(0),
                DB = YB >= gY[0] && YB <= gY[1],
                QB = 2 === GB.length && GB[0] === GB[1];
              return DB || QB || OB
            }(oB),
            RB = dG(pB, qB),
            WB = RB;
          if (ZB) {
            var AB = function(BB) {
              var OB = SG[BB],
                GB = dG("fas", BB);
              return OB || (GB ? {
                prefix: "fas",
                iconName: GB
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(qB);
            AB.iconName && AB.prefix && (RB = AB.iconName, pB = AB.prefix)
          }
          if (!RB || NB || QB && QB.getAttribute(RO) === pB && QB.getAttribute(WO) === WB) YB();
          else {
            BB.setAttribute(GB, WB), QB && BB.removeChild(QB);
            var VB = {
                iconName: null,
                prefix: null,
                transform: TO,
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
              SB = VB.extra;
            SB.attributes[NO] = OB, DY(RB, pB).then((function(DB) {
              var QB = tG(yB(yB({}, VB), {}, {
                  icons: {
                    main: DB,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: pB,
                  iconName: WB,
                  extra: SB,
                  watchable: !0
                })),
                oB = UB.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === OB ? BB.insertBefore(oB, BB.firstChild) : BB.appendChild(oB), oB.outerHTML = QB.map((function(BB) {
                return yG(BB)
              })).join("\n"), BB.removeAttribute(GB), YB()
            })).catch(DB)
          }
        } else YB()
      }))
    }

    function cY(BB) {
      return Promise.all([EY(BB, "::before"), EY(BB, "::after")])
    }

    function hY(BB) {
      return BB.parentNode !== document.head && !~VO.indexOf(BB.tagName.toUpperCase()) && !BB.getAttribute(NO) && (!BB.parentNode || "svg" !== BB.parentNode.tagName)
    }
    var aY = function(BB) {
        return !!BB && SO.some((function(OB) {
          return BB.includes(OB)
        }))
      },
      eY = function(BB) {
        if (!BB) return [];
        var OB = new Set,
          GB = BB.split(/,(?![^()]*\))/).map((function(BB) {
            return BB.trim()
          }));
        GB = GB.flatMap((function(BB) {
          return BB.includes("(") ? BB : BB.split(",").map((function(BB) {
            return BB.trim()
          }))
        }));
        var YB, DB = QB(GB);
        try {
          for (DB.s(); !(YB = DB.n()).done;) {
            var oB = YB.value;
            if (aY(oB)) {
              var jB = SO.reduce((function(BB, OB) {
                return BB.replace(OB, "")
              }), oB);
              "" !== jB && "*" !== jB && OB.add(jB)
            }
          }
        } catch (yB) {
          DB.e(yB)
        } finally {
          DB.f()
        }
        return OB
      };

    function TY(BB) {
      if (dB) {
        var OB;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) OB = BB;
        else if (hO.searchPseudoElementsFullScan) OB = BB.querySelectorAll("*");
        else {
          var GB, YB = new Set,
            DB = QB(document.styleSheets);
          try {
            for (DB.s(); !(GB = DB.n()).done;) {
              var oB = GB.value;
              try {
                var jB, yB = QB(oB.cssRules);
                try {
                  for (yB.s(); !(jB = yB.n()).done;) {
                    var JB, MB = jB.value,
                      PB = QB(eY(MB.selectorText));
                    try {
                      for (PB.s(); !(JB = PB.n()).done;) {
                        var zB = JB.value;
                        YB.add(zB)
                      }
                    } catch (pB) {
                      PB.e(pB)
                    } finally {
                      PB.f()
                    }
                  }
                } catch (pB) {
                  yB.e(pB)
                } finally {
                  yB.f()
                }
              } catch (qB) {
                hO.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(oB.href, " (").concat(qB.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (pB) {
            DB.e(pB)
          } finally {
            DB.f()
          }
          if (!YB.size) return;
          var lB = Array.from(YB).join(", ");
          try {
            OB = BB.querySelectorAll(lB)
          } catch (ZB) {}
        }
        return new Promise((function(BB, GB) {
          var YB = CO(OB).filter(hY).map(cY),
            DB = JY("searchPseudoElements");
          WY(), Promise.all(YB).then((function() {
            DB(), AY(), BB()
          })).catch((function() {
            DB(), AY(), GB()
          }))
        }))
      }
    }
    var bY = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(BB) {
              return BB.pseudoElementsCallback = TY, BB
            }
          }
        },
        provides: function(BB) {
          BB.pseudoElements2svg = function(BB) {
            var OB = BB.node,
              GB = void 0 === OB ? UB : OB;
            hO.searchPseudoElements && TY(GB)
          }
        }
      },
      CY = !1,
      HY = function(BB) {
        return BB.toLowerCase().split(" ").reduce((function(BB, OB) {
          var GB = OB.toLowerCase().split("-"),
            YB = GB[0],
            DB = GB.slice(1).join("-");
          if (YB && "h" === DB) return BB.flipX = !0, BB;
          if (YB && "v" === DB) return BB.flipY = !0, BB;
          if (DB = parseFloat(DB), isNaN(DB)) return BB;
          switch (YB) {
            case "grow":
              BB.size = BB.size + DB;
              break;
            case "shrink":
              BB.size = BB.size - DB;
              break;
            case "left":
              BB.x = BB.x - DB;
              break;
            case "right":
              BB.x = BB.x + DB;
              break;
            case "up":
              BB.y = BB.y - DB;
              break;
            case "down":
              BB.y = BB.y + DB;
              break;
            case "rotate":
              BB.rotate = BB.rotate + DB
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
      vY = {
        mixout: function() {
          return {
            parse: {
              transform: function(BB) {
                return HY(BB)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(BB, OB) {
              var GB = OB.getAttribute("data-fa-transform");
              return GB && (BB.transform = HY(GB)), BB
            }
          }
        },
        provides: function(BB) {
          BB.generateAbstractTransformGrouping = function(BB) {
            var OB = BB.main,
              GB = BB.transform,
              YB = BB.containerWidth,
              DB = BB.iconWidth,
              QB = {
                transform: "translate(".concat(YB / 2, " 256)")
              },
              oB = "translate(".concat(32 * GB.x, ", ").concat(32 * GB.y, ") "),
              jB = "scale(".concat(GB.size / 16 * (GB.flipX ? -1 : 1), ", ").concat(GB.size / 16 * (GB.flipY ? -1 : 1), ") "),
              JB = "rotate(".concat(GB.rotate, " 0 0)"),
              MB = {
                outer: QB,
                inner: {
                  transform: "".concat(oB, " ").concat(jB, " ").concat(JB)
                },
                path: {
                  transform: "translate(".concat(DB / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: yB({}, MB.outer),
              children: [{
                tag: "g",
                attributes: yB({}, MB.inner),
                children: [{
                  tag: OB.icon.tag,
                  children: OB.icon.children,
                  attributes: yB(yB({}, OB.icon.attributes), MB.path)
                }]
              }]
            }
          }
        }
      },
      sY = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function xY(BB) {
      var OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return BB.attributes && (BB.attributes.fill || OB) && (BB.attributes.fill = "black"), BB
    }
    var tY = {
        hooks: function() {
          return {
            parseNodeAttributes: function(BB, OB) {
              var GB = OB.getAttribute("data-fa-mask"),
                YB = GB ? LG(GB.split(" ").map((function(BB) {
                  return BB.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return YB.prefix || (YB.prefix = mG()), BB.mask = YB, BB.maskId = OB.getAttribute("data-fa-mask-id"), BB
            }
          }
        },
        provides: function(BB) {
          BB.generateAbstractMask = function(BB) {
            var OB, GB = BB.children,
              YB = BB.attributes,
              DB = BB.main,
              QB = BB.mask,
              oB = BB.maskId,
              jB = BB.transform,
              JB = DB.width,
              MB = DB.icon,
              PB = QB.width,
              zB = QB.icon,
              lB = function(BB) {
                var OB = BB.transform,
                  GB = BB.containerWidth,
                  YB = BB.iconWidth,
                  DB = {
                    transform: "translate(".concat(GB / 2, " 256)")
                  },
                  QB = "translate(".concat(32 * OB.x, ", ").concat(32 * OB.y, ") "),
                  oB = "scale(".concat(OB.size / 16 * (OB.flipX ? -1 : 1), ", ").concat(OB.size / 16 * (OB.flipY ? -1 : 1), ") "),
                  jB = "rotate(".concat(OB.rotate, " 0 0)");
                return {
                  outer: DB,
                  inner: {
                    transform: "".concat(QB, " ").concat(oB, " ").concat(jB)
                  },
                  path: {
                    transform: "translate(".concat(YB / 2 * -1, " -256)")
                  }
                }
              }({
                transform: jB,
                containerWidth: PB,
                iconWidth: JB
              }),
              pB = {
                tag: "rect",
                attributes: yB(yB({}, sY), {}, {
                  fill: "white"
                })
              },
              qB = MB.children ? {
                children: MB.children.map(xY)
              } : {},
              ZB = {
                tag: "g",
                attributes: yB({}, lB.inner),
                children: [xY(yB({
                  tag: MB.tag,
                  attributes: yB(yB({}, MB.attributes), lB.path)
                }, qB))]
              },
              NB = {
                tag: "g",
                attributes: yB({}, lB.outer),
                children: [ZB]
              },
              RB = "mask-".concat(oB || bO()),
              WB = "clip-".concat(oB || bO()),
              AB = {
                tag: "mask",
                attributes: yB(yB({}, sY), {}, {
                  id: RB,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [pB, NB]
              },
              VB = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: WB
                  },
                  children: (OB = zB, "g" === OB.tag ? OB.children : [OB])
                }, AB]
              };
            return GB.push(VB, {
              tag: "rect",
              attributes: yB({
                fill: "currentColor",
                "clip-path": "url(#".concat(WB, ")"),
                mask: "url(#".concat(RB, ")")
              }, sY)
            }), {
              children: GB,
              attributes: YB
            }
          }
        }
      },
      BD = {
        provides: function(BB) {
          var OB = !1;
          nB.matchMedia && (OB = nB.matchMedia("(prefers-reduced-motion: reduce)").matches), BB.missingIconAbstract = function() {
            var BB = [],
              GB = {
                fill: "currentColor"
              },
              YB = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            BB.push({
              tag: "path",
              attributes: yB(yB({}, GB), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var DB = yB(yB({}, YB), {}, {
                attributeName: "opacity"
              }),
              QB = {
                tag: "circle",
                attributes: yB(yB({}, GB), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return OB || QB.children.push({
              tag: "animate",
              attributes: yB(yB({}, YB), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: yB(yB({}, DB), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), BB.push(QB), BB.push({
              tag: "path",
              attributes: yB(yB({}, GB), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: OB ? [] : [{
                tag: "animate",
                attributes: yB(yB({}, DB), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), OB || BB.push({
              tag: "path",
              attributes: yB(yB({}, GB), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: yB(yB({}, DB), {}, {
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
    ! function(BB, OB) {
      var GB = OB.mixoutsTo;
      wG = BB, EG = {}, Object.keys(cG).forEach((function(BB) {
        -1 === hG.indexOf(BB) && delete cG[BB]
      })), wG.forEach((function(BB) {
        var OB = BB.mixout ? BB.mixout() : {};
        if (Object.keys(OB).forEach((function(BB) {
            "function" === typeof OB[BB] && (GB[BB] = OB[BB]), "object" === zB(OB[BB]) && Object.keys(OB[BB]).forEach((function(YB) {
              GB[BB] || (GB[BB] = {}), GB[BB][YB] = OB[BB][YB]
            }))
          })), BB.hooks) {
          var YB = BB.hooks();
          Object.keys(YB).forEach((function(BB) {
            EG[BB] || (EG[BB] = []), EG[BB].push(YB[BB])
          }))
        }
        BB.provides && BB.provides(cG)
      }))
    }([GG, mY, IY, FY, iY, bY, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              WY(), CY = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            SY(aG("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            VY && VY.disconnect()
          },
          watch: function(BB) {
            var OB = BB.observeMutationsRoot;
            CY ? AY() : SY(aG("mutationObserverCallbacks", {
              observeMutationsRoot: OB
            }))
          }
        }
      }
    }, vY, tY, BD, {
      hooks: function() {
        return {
          parseNodeAttributes: function(BB, OB) {
            var GB = OB.getAttribute("data-fa-symbol"),
              YB = null !== GB && ("" === GB || GB);
            return BB.symbol = YB, BB
          }
        }
      }
    }], {
      mixoutsTo: vG
    });
    var OD = vG.noAuto,
      GD = vG.config,
      YD = vG.library,
      DD = vG.dom,
      QD = vG.parse,
      oD = vG.findIconDefinition,
      jD = vG.toHtml,
      yD = vG.icon,
      JD = vG.layer,
      MD = vG.text,
      PD = vG.counter
  },
  7311: BB => {
    BB.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);