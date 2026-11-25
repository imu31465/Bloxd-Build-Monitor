/*! For license information please see fo1voe.fa-renderer.550f9f4b.chunk.js.LICENSE.txt */
export const id = 37;
export const ids = [37];
export const modules = {
  7246: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      FontAwesomeIcon: () => bM
    });
    var OM = iM(7241),
      SM = iM(5368),
      jM = iM.n(SM),
      aM = iM(44);

    function PM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function nM(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM, rM) {
          if ("object" != typeof MM || !MM) return MM;
          var iM = MM[Symbol.toPrimitive];
          if (void 0 !== iM) {
            var OM = iM.call(MM, rM || "default");
            if ("object" != typeof OM) return OM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === rM ? String : Number)(MM)
        }(MM, "string");
        return "symbol" == typeof rM ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function QM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function zM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? QM(Object(iM), !0).forEach((function(rM) {
          nM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : QM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function LM(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        var iM = null == MM ? null : "undefined" != typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
        if (null != iM) {
          var OM, SM, jM, aM, PM = [],
            nM = !0,
            QM = !1;
          try {
            if (jM = (iM = iM.call(MM)).next, 0 === rM) {
              if (Object(iM) !== iM) return;
              nM = !1
            } else
              for (; !(nM = (OM = jM.call(iM)).done) && (PM.push(OM.value), PM.length !== rM); nM = !0);
          } catch (MM) {
            QM = !0, SM = MM
          } finally {
            try {
              if (!nM && null != iM.return && (aM = iM.return(), Object(aM) !== aM)) return
            } finally {
              if (QM) throw SM
            }
          }
          return PM
        }
      }(MM, rM) || hM(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mM(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return PM(MM)
      }(MM) || function(MM) {
        if ("undefined" != typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
      }(MM) || hM(MM) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function HM(MM) {
      return HM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, HM(MM)
    }

    function hM(MM, rM) {
      if (MM) {
        if ("string" == typeof MM) return PM(MM, rM);
        var iM = {}.toString.call(MM).slice(8, -1);
        return "Object" === iM && MM.constructor && (iM = MM.constructor.name), "Map" === iM || "Set" === iM ? Array.from(MM) : "Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM) ? PM(MM, rM) : void 0
      }
    }
    var JM;
    try {
      var dM = iM(7250);
      JM = dM.version
    } catch (tM) {
      JM = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function yM(MM) {
      var rM = MM.beat,
        iM = MM.fade,
        OM = MM.beatFade,
        SM = MM.bounce,
        jM = MM.shake,
        aM = MM.flash,
        PM = MM.spin,
        QM = MM.spinPulse,
        zM = MM.spinReverse,
        mM = MM.pulse,
        HM = MM.fixedWidth,
        hM = MM.inverse,
        dM = MM.border,
        yM = MM.listItem,
        lM = MM.flip,
        EM = MM.size,
        UM = MM.rotation,
        GM = MM.pull,
        CM = MM.swapOpacity,
        eM = MM.rotateBy,
        bM = MM.widthAuto,
        wM = function(MM, rM) {
          for (var iM = LM(MM.split("-"), 2), OM = iM[0], SM = iM[1], jM = LM(rM.split("-"), 2), aM = jM[0], PM = jM[1], nM = OM.split("."), QM = aM.split("."), zM = 0; zM < Math.max(nM.length, QM.length); zM++) {
            var mM = nM[zM] || "0",
              HM = QM[zM] || "0",
              hM = parseInt(mM, 10),
              JM = parseInt(HM, 10);
            if (hM !== JM) return hM > JM
          }
          for (var dM = 0; dM < Math.max(nM.length, QM.length); dM++) {
            var yM = nM[dM] || "0",
              lM = QM[dM] || "0";
            if (yM !== lM && yM.length !== lM.length) return yM.length < lM.length
          }
          return !(SM && !PM)
        }(JM, "7.0.0"),
        tM = nM(nM(nM(nM(nM(nM({
          "fa-beat": rM,
          "fa-fade": iM,
          "fa-beat-fade": OM,
          "fa-bounce": SM,
          "fa-shake": jM,
          "fa-flash": aM,
          "fa-spin": PM,
          "fa-spin-reverse": zM,
          "fa-spin-pulse": QM,
          "fa-pulse": mM,
          "fa-fw": HM,
          "fa-inverse": hM,
          "fa-border": dM,
          "fa-li": yM,
          "fa-flip": !0 === lM,
          "fa-flip-horizontal": "horizontal" === lM || "both" === lM,
          "fa-flip-vertical": "vertical" === lM || "both" === lM
        }, "fa-".concat(EM), "undefined" !== typeof EM && null !== EM), "fa-rotate-".concat(UM), "undefined" !== typeof UM && null !== UM && 0 !== UM), "fa-pull-".concat(GM), "undefined" !== typeof GM && null !== GM), "fa-swap-opacity", CM), "fa-rotate-by", wM && eM), "fa-width-auto", wM && bM);
      return Object.keys(tM).map((function(MM) {
        return tM[MM] ? MM : null
      })).filter((function(MM) {
        return MM
      }))
    }

    function lM(MM) {
      return rM = MM, (rM -= 0) === rM ? MM : (MM = MM.replace(/[\-_\s]+(.)?/g, (function(MM, rM) {
        return rM ? rM.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + MM.substr(1);
      var rM
    }
    var EM = ["style"];
    var UM = !1;
    try {
      UM = !0
    } catch (tM) {}

    function GM(MM) {
      return MM && "object" === HM(MM) && MM.prefix && MM.iconName && MM.icon ? MM : OM.parse.icon ? OM.parse.icon(MM) : null === MM ? null : MM && "object" === HM(MM) && MM.prefix && MM.iconName ? MM : Array.isArray(MM) && 2 === MM.length ? {
        prefix: MM[0],
        iconName: MM[1]
      } : "string" === typeof MM ? {
        prefix: "fas",
        iconName: MM
      } : void 0
    }

    function CM(MM, rM) {
      return Array.isArray(rM) && rM.length > 0 || !Array.isArray(rM) && rM ? nM({}, MM, rM) : {}
    }
    var eM = {
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
      bM = aM.forwardRef((function(MM, rM) {
        var iM = zM(zM({}, eM), MM),
          SM = iM.icon,
          jM = iM.mask,
          aM = iM.symbol,
          PM = iM.className,
          nM = iM.title,
          QM = iM.titleId,
          LM = iM.maskId,
          HM = GM(SM),
          hM = CM("classes", [].concat(mM(yM(iM)), mM((PM || "").split(" ")))),
          JM = CM("transform", "string" === typeof iM.transform ? OM.parse.transform(iM.transform) : iM.transform),
          dM = CM("mask", GM(jM)),
          lM = (0, OM.icon)(HM, zM(zM(zM(zM({}, hM), JM), dM), {}, {
            symbol: aM,
            title: nM,
            titleId: QM,
            maskId: LM
          }));
        if (!lM) return function() {
          var MM;
          !UM && console && "function" === typeof console.error && (MM = console).error.apply(MM, arguments)
        }("Could not find icon", HM), null;
        var EM = lM.abstract,
          bM = {
            ref: rM
          };
        return Object.keys(iM).forEach((function(MM) {
          eM.hasOwnProperty(MM) || (bM[MM] = iM[MM])
        })), wM(EM[0], bM)
      }));
    bM.displayName = "FontAwesomeIcon", bM.propTypes = {
      beat: jM().bool,
      border: jM().bool,
      beatFade: jM().bool,
      bounce: jM().bool,
      className: jM().string,
      fade: jM().bool,
      flash: jM().bool,
      mask: jM().oneOfType([jM().object, jM().array, jM().string]),
      maskId: jM().string,
      fixedWidth: jM().bool,
      inverse: jM().bool,
      flip: jM().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: jM().oneOfType([jM().object, jM().array, jM().string]),
      listItem: jM().bool,
      pull: jM().oneOf(["right", "left"]),
      pulse: jM().bool,
      rotation: jM().oneOf([0, 90, 180, 270]),
      rotateBy: jM().bool,
      shake: jM().bool,
      size: jM().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: jM().bool,
      spinPulse: jM().bool,
      spinReverse: jM().bool,
      symbol: jM().oneOfType([jM().bool, jM().string]),
      title: jM().string,
      titleId: jM().string,
      transform: jM().oneOfType([jM().string, jM().object]),
      swapOpacity: jM().bool,
      widthAuto: jM().bool
    };
    var wM = function MM(rM, iM) {
      var OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof iM) return iM;
      var SM = (iM.children || []).map((function(iM) {
          return MM(rM, iM)
        })),
        jM = Object.keys(iM.attributes || {}).reduce((function(MM, rM) {
          var OM = iM.attributes[rM];
          switch (rM) {
            case "class":
              MM.attrs.className = OM, delete iM.attributes.class;
              break;
            case "style":
              MM.attrs.style = OM.split(";").map((function(MM) {
                return MM.trim()
              })).filter((function(MM) {
                return MM
              })).reduce((function(MM, rM) {
                var iM, OM = rM.indexOf(":"),
                  SM = lM(rM.slice(0, OM)),
                  jM = rM.slice(OM + 1).trim();
                return SM.startsWith("webkit") ? MM[(iM = SM, iM.charAt(0).toUpperCase() + iM.slice(1))] = jM : MM[SM] = jM, MM
              }), {});
              break;
            default:
              0 === rM.indexOf("aria-") || 0 === rM.indexOf("data-") ? MM.attrs[rM.toLowerCase()] = OM : MM.attrs[lM(rM)] = OM
          }
          return MM
        }), {
          attrs: {}
        }),
        aM = OM.style,
        PM = void 0 === aM ? {} : aM,
        nM = function(MM, rM) {
          if (null == MM) return {};
          var iM, OM, SM = function(MM, rM) {
            if (null == MM) return {};
            var iM = {};
            for (var OM in MM)
              if ({}.hasOwnProperty.call(MM, OM)) {
                if (-1 !== rM.indexOf(OM)) continue;
                iM[OM] = MM[OM]
              } return iM
          }(MM, rM);
          if (Object.getOwnPropertySymbols) {
            var jM = Object.getOwnPropertySymbols(MM);
            for (OM = 0; OM < jM.length; OM++) iM = jM[OM], -1 === rM.indexOf(iM) && {}.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
          }
          return SM
        }(OM, EM);
      return jM.attrs.style = zM(zM({}, jM.attrs.style), PM), rM.apply(void 0, [iM.tag, zM(zM({}, jM.attrs), nM)].concat(mM(SM)))
    }.bind(null, aM.createElement)
  },
  5372: (MM, rM, iM) => {
    var OM = iM(5376);

    function SM() {}

    function jM() {}
    jM.resetWarningCache = SM, MM.exports = function() {
      function MM(MM, rM, iM, SM, jM, aM) {
        if (aM !== OM) {
          var PM = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw PM.name = "Invariant Violation", PM
        }
      }

      function rM() {
        return MM
      }
      MM.isRequired = MM;
      var iM = {
        array: MM,
        bigint: MM,
        bool: MM,
        func: MM,
        number: MM,
        object: MM,
        string: MM,
        symbol: MM,
        any: MM,
        arrayOf: rM,
        element: MM,
        elementType: MM,
        instanceOf: rM,
        node: MM,
        objectOf: rM,
        oneOf: rM,
        oneOfType: rM,
        shape: rM,
        exact: rM,
        checkPropTypes: jM,
        resetWarningCache: SM
      };
      return iM.PropTypes = iM, iM
    }
  },
  5368: (MM, rM, iM) => {
    MM.exports = iM(5372)()
  },
  5376: MM => {
    MM.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7241: (MM, rM, iM) => {
    function OM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function SM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, LM(OM.key), OM)
      }
    }

    function jM(MM, rM) {
      var iM = "undefined" != typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
      if (!iM) {
        if (Array.isArray(MM) || (iM = HM(MM)) || rM && MM && "number" == typeof MM.length) {
          iM && (MM = iM);
          var OM = 0,
            SM = function() {};
          return {
            s: SM,
            n: function() {
              return OM >= MM.length ? {
                done: !0
              } : {
                done: !1,
                value: MM[OM++]
              }
            },
            e: function(MM) {
              throw MM
            },
            f: SM
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var jM, aM = !0,
        PM = !1;
      return {
        s: function() {
          iM = iM.call(MM)
        },
        n: function() {
          var MM = iM.next();
          return aM = MM.done, MM
        },
        e: function(MM) {
          PM = !0, jM = MM
        },
        f: function() {
          try {
            aM || null == iM.return || iM.return()
          } finally {
            if (PM) throw jM
          }
        }
      }
    }

    function aM(MM, rM, iM) {
      return (rM = LM(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function PM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function nM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? PM(Object(iM), !0).forEach((function(rM) {
          aM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : PM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function QM(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        var iM = null == MM ? null : "undefined" != typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
        if (null != iM) {
          var OM, SM, jM, aM, PM = [],
            nM = !0,
            QM = !1;
          try {
            if (jM = (iM = iM.call(MM)).next, 0 === rM) {
              if (Object(iM) !== iM) return;
              nM = !1
            } else
              for (; !(nM = (OM = jM.call(iM)).done) && (PM.push(OM.value), PM.length !== rM); nM = !0);
          } catch (MM) {
            QM = !0, SM = MM
          } finally {
            try {
              if (!nM && null != iM.return && (aM = iM.return(), Object(aM) !== aM)) return
            } finally {
              if (QM) throw SM
            }
          }
          return PM
        }
      }(MM, rM) || HM(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function zM(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return OM(MM)
      }(MM) || function(MM) {
        if ("undefined" != typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
      }(MM) || HM(MM) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function LM(MM) {
      var rM = function(MM, rM) {
        if ("object" != typeof MM || !MM) return MM;
        var iM = MM[Symbol.toPrimitive];
        if (void 0 !== iM) {
          var OM = iM.call(MM, rM || "default");
          if ("object" != typeof OM) return OM;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === rM ? String : Number)(MM)
      }(MM, "string");
      return "symbol" == typeof rM ? rM : rM + ""
    }

    function mM(MM) {
      return mM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, mM(MM)
    }

    function HM(MM, rM) {
      if (MM) {
        if ("string" == typeof MM) return OM(MM, rM);
        var iM = {}.toString.call(MM).slice(8, -1);
        return "Object" === iM && MM.constructor && (iM = MM.constructor.name), "Map" === iM || "Set" === iM ? Array.from(MM) : "Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM) ? OM(MM, rM) : void 0
      }
    }
    iM.r(rM), iM.d(rM, {
      api: () => Vi,
      config: () => SS,
      counter: () => HS,
      dom: () => aS,
      findIconDefinition: () => nS,
      icon: () => zS,
      layer: () => LS,
      library: () => jS,
      noAuto: () => OS,
      parse: () => PS,
      text: () => mS,
      toHtml: () => QS
    });
    var hM = function() {},
      JM = {},
      dM = {},
      yM = null,
      lM = {
        mark: hM,
        measure: hM
      };
    try {
      "undefined" !== typeof window && (JM = window), "undefined" !== typeof document && (dM = document), "undefined" !== typeof MutationObserver && (yM = MutationObserver), "undefined" !== typeof performance && (lM = performance)
    } catch (vM) {}
    var EM, UM, GM = (JM.navigator || {}).userAgent,
      CM = void 0 === GM ? "" : GM,
      eM = JM,
      bM = dM,
      wM = yM,
      tM = lM,
      gM = (eM.document, !!bM.documentElement && !!bM.head && "function" === typeof bM.addEventListener && "function" === typeof bM.createElement),
      uM = ~CM.indexOf("MSIE") || ~CM.indexOf("Trident/"),
      RM = {
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
      pM = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      WM = "classic",
      sM = "duotone",
      DM = "sharp",
      kM = "sharp-duotone",
      ZM = "chisel",
      oM = "etch",
      fM = "graphite",
      YM = "jelly",
      NM = "jelly-duo",
      AM = "jelly-fill",
      xM = "notdog",
      vM = "notdog-duo",
      FM = "slab",
      BM = "slab-press",
      XM = "thumbprint",
      IM = "utility",
      KM = "utility-duo",
      qM = "utility-fill",
      TM = "whiteboard",
      VM = [WM, sM, DM, kM, ZM, oM, fM, YM, NM, AM, xM, vM, FM, BM, XM, IM, KM, qM, TM],
      cM = (aM(aM(aM(aM(aM(aM(aM(aM(aM(aM(EM = {}, WM, "Classic"), sM, "Duotone"), DM, "Sharp"), kM, "Sharp Duotone"), ZM, "Chisel"), oM, "Etch"), fM, "Graphite"), YM, "Jelly"), NM, "Jelly Duo"), AM, "Jelly Fill"), aM(aM(aM(aM(aM(aM(aM(aM(aM(EM, xM, "Notdog"), vM, "Notdog Duo"), FM, "Slab"), BM, "Slab Press"), XM, "Thumbprint"), IM, "Utility"), KM, "Utility Duo"), qM, "Utility Fill"), TM, "Whiteboard"), new Map([
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
      Mr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      rr = {
        fak: "kit",
        "fa-kit": "kit"
      },
      ir = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      Or = (aM(aM({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      Sr = {
        "kit-duotone": "fakd"
      },
      jr = "duotone-group",
      ar = "swap-opacity",
      Pr = "primary",
      nr = "secondary",
      Qr = (aM(aM(aM(aM(aM(aM(aM(aM(aM(aM(UM = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), aM(aM(aM(aM(aM(aM(aM(aM(aM(UM, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), aM(aM({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      zr = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      Lr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      mr = Lr.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      Hr = [].concat(zM(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", jr, ar, Pr, nr]).concat(Lr.map((function(MM) {
        return "".concat(MM, "x")
      }))).concat(mr.map((function(MM) {
        return "w-".concat(MM)
      }))),
      hr = "___FONT_AWESOME___",
      Jr = "svg-inline--fa",
      dr = "data-fa-i2svg",
      yr = "data-fa-pseudo-element",
      lr = "data-prefix",
      Er = "data-icon",
      Ur = "fontawesome-i2svg",
      Gr = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      Cr = ["::before", "::after", ":before", ":after"],
      er = function() {
        try {
          return !0
        } catch (MM) {
          return !1
        }
      }();

    function br(MM) {
      return new Proxy(MM, {
        get: function(MM, rM) {
          return rM in MM ? MM[rM] : MM[WM]
        }
      })
    }
    var wr = nM({}, RM);
    wr[WM] = nM(nM(nM(nM({}, {
      "fa-duotone": "duotone"
    }), RM[WM]), rr), ir);
    var tr = br(wr),
      gr = nM({}, {
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
    gr[WM] = nM(nM(nM(nM({}, {
      duotone: "fad"
    }), gr[WM]), Or), Sr);
    var ur = br(gr),
      Rr = nM({}, Qr);
    Rr[WM] = nM(nM({}, Rr[WM]), {
      fak: "fa-kit"
    });
    var pr = br(Rr),
      Wr = nM({}, {
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
    Wr[WM] = nM(nM({}, Wr[WM]), {
      "fa-kit": "fak"
    });
    br(Wr);
    var sr = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      Dr = "fa-layers-text",
      kr = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Zr = (br(nM({}, {
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
      or = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      fr = [].concat(zM(["kit"]), zM(Hr)),
      Yr = eM.FontAwesomeConfig || {};
    if (bM && "function" === typeof bM.querySelector) {
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
      ].forEach((function(MM) {
        var rM = QM(MM, 2),
          iM = rM[0],
          OM = rM[1],
          SM = function(MM) {
            return "" === MM || "false" !== MM && ("true" === MM || MM)
          }(function(MM) {
            var rM = bM.querySelector("script[" + MM + "]");
            if (rM) return rM.getAttribute(MM)
          }(iM));
        void 0 !== SM && null !== SM && (Yr[OM] = SM)
      }))
    }
    var Nr = {
      styleDefault: "solid",
      familyDefault: WM,
      cssPrefix: "fa",
      replacementClass: Jr,
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
    Yr.familyPrefix && (Yr.cssPrefix = Yr.familyPrefix);
    var Ar = nM(nM({}, Nr), Yr);
    Ar.autoReplaceSvg || (Ar.observeMutations = !1);
    var xr = {};
    Object.keys(Nr).forEach((function(MM) {
      Object.defineProperty(xr, MM, {
        enumerable: !0,
        set: function(rM) {
          Ar[MM] = rM, vr.forEach((function(MM) {
            return MM(xr)
          }))
        },
        get: function() {
          return Ar[MM]
        }
      })
    })), Object.defineProperty(xr, "familyPrefix", {
      enumerable: !0,
      set: function(MM) {
        Ar.cssPrefix = MM, vr.forEach((function(MM) {
          return MM(xr)
        }))
      },
      get: function() {
        return Ar.cssPrefix
      }
    }), eM.FontAwesomeConfig = xr;
    var vr = [];
    var Fr = 16,
      Br = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function Xr() {
      for (var MM = 12, rM = ""; MM-- > 0;) rM += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return rM
    }

    function Ir(MM) {
      for (var rM = [], iM = (MM || []).length >>> 0; iM--;) rM[iM] = MM[iM];
      return rM
    }

    function Kr(MM) {
      return MM.classList ? Ir(MM.classList) : (MM.getAttribute("class") || "").split(" ").filter((function(MM) {
        return MM
      }))
    }

    function qr(MM) {
      return "".concat(MM).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Tr(MM) {
      return Object.keys(MM || {}).reduce((function(rM, iM) {
        return rM + "".concat(iM, ": ").concat(MM[iM].trim(), ";")
      }), "")
    }

    function Vr(MM) {
      return MM.size !== Br.size || MM.x !== Br.x || MM.y !== Br.y || MM.rotate !== Br.rotate || MM.flipX || MM.flipY
    }

    function cr() {
      var MM = "fa",
        rM = Jr,
        iM = xr.cssPrefix,
        OM = xr.replacementClass,
        SM = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (iM !== MM || OM !== rM) {
        var jM = new RegExp("\\.".concat(MM, "\\-"), "g"),
          aM = new RegExp("\\--".concat(MM, "\\-"), "g"),
          PM = new RegExp("\\.".concat(rM), "g");
        SM = SM.replace(jM, ".".concat(iM, "-")).replace(aM, "--".concat(iM, "-")).replace(PM, ".".concat(OM))
      }
      return SM
    }
    var Mi = !1;

    function ri() {
      xr.autoAddCss && !Mi && (! function(MM) {
        if (MM && gM) {
          var rM = bM.createElement("style");
          rM.setAttribute("type", "text/css"), rM.innerHTML = MM;
          for (var iM = bM.head.childNodes, OM = null, SM = iM.length - 1; SM > -1; SM--) {
            var jM = iM[SM],
              aM = (jM.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(aM) > -1 && (OM = jM)
          }
          bM.head.insertBefore(rM, OM)
        }
      }(cr()), Mi = !0)
    }
    var ii = {
        mixout: function() {
          return {
            dom: {
              css: cr,
              insertCss: ri
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              ri()
            },
            beforeI2svg: function() {
              ri()
            }
          }
        }
      },
      Oi = eM || {};
    Oi[hr] || (Oi[hr] = {}), Oi[hr].styles || (Oi[hr].styles = {}), Oi[hr].hooks || (Oi[hr].hooks = {}), Oi[hr].shims || (Oi[hr].shims = []);
    var Si = Oi[hr],
      ji = [],
      ai = function() {
        bM.removeEventListener("DOMContentLoaded", ai), Pi = 1, ji.map((function(MM) {
          return MM()
        }))
      },
      Pi = !1;

    function ni(MM) {
      var rM = MM.tag,
        iM = MM.attributes,
        OM = void 0 === iM ? {} : iM,
        SM = MM.children,
        jM = void 0 === SM ? [] : SM;
      return "string" === typeof MM ? qr(MM) : "<".concat(rM, " ").concat(function(MM) {
        return Object.keys(MM || {}).reduce((function(rM, iM) {
          return rM + "".concat(iM, '="').concat(qr(MM[iM]), '" ')
        }), "").trim()
      }(OM), ">").concat(jM.map(ni).join(""), "</").concat(rM, ">")
    }

    function Qi(MM, rM, iM) {
      if (MM && MM[rM] && MM[rM][iM]) return {
        prefix: rM,
        iconName: iM,
        icon: MM[rM][iM]
      }
    }
    gM && ((Pi = (bM.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(bM.readyState)) || bM.addEventListener("DOMContentLoaded", ai));
    var zi = function(MM, rM, iM, OM) {
      var SM, jM, aM, PM = Object.keys(MM),
        nM = PM.length,
        QM = void 0 !== OM ? function(MM, rM) {
          return function(iM, OM, SM, jM) {
            return MM.call(rM, iM, OM, SM, jM)
          }
        }(rM, OM) : rM;
      for (void 0 === iM ? (SM = 1, aM = MM[PM[0]]) : (SM = 0, aM = iM); SM < nM; SM++) aM = QM(aM, MM[jM = PM[SM]], jM, MM);
      return aM
    };

    function Li(MM) {
      return 1 !== zM(MM).length ? null : MM.codePointAt(0).toString(16)
    }

    function mi(MM) {
      return Object.keys(MM).reduce((function(rM, iM) {
        var OM = MM[iM];
        return !!OM.icon ? rM[OM.iconName] = OM.icon : rM[iM] = OM, rM
      }), {})
    }

    function Hi(MM, rM) {
      var iM = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        OM = void 0 !== iM && iM,
        SM = mi(rM);
      "function" !== typeof Si.hooks.addPack || OM ? Si.styles[MM] = nM(nM({}, Si.styles[MM] || {}), SM) : Si.hooks.addPack(MM, mi(rM)), "fas" === MM && Hi("fa", rM)
    }
    var Ji = Si.styles,
      di = Si.shims,
      yi = Object.keys(pr),
      li = yi.reduce((function(MM, rM) {
        return MM[rM] = Object.keys(pr[rM]), MM
      }), {}),
      Ei = null,
      Ui = {},
      Gi = {},
      Ci = {},
      ei = {},
      bi = {};

    function wi(MM, rM) {
      var iM, OM = rM.split("-"),
        SM = OM[0],
        jM = OM.slice(1).join("-");
      return SM !== MM || "" === jM || (iM = jM, ~fr.indexOf(iM)) ? null : jM
    }
    var ti, gi = function() {
      var MM = function(MM) {
        return zi(Ji, (function(rM, iM, OM) {
          return rM[OM] = zi(iM, MM, {}), rM
        }), {})
      };
      Ui = MM((function(MM, rM, iM) {
        (rM[3] && (MM[rM[3]] = iM), rM[2]) && rM[2].filter((function(MM) {
          return "number" === typeof MM
        })).forEach((function(rM) {
          MM[rM.toString(16)] = iM
        }));
        return MM
      })), Gi = MM((function(MM, rM, iM) {
        (MM[iM] = iM, rM[2]) && rM[2].filter((function(MM) {
          return "string" === typeof MM
        })).forEach((function(rM) {
          MM[rM] = iM
        }));
        return MM
      })), bi = MM((function(MM, rM, iM) {
        var OM = rM[2];
        return MM[iM] = iM, OM.forEach((function(rM) {
          MM[rM] = iM
        })), MM
      }));
      var rM = "far" in Ji || xr.autoFetchSvg,
        iM = zi(di, (function(MM, iM) {
          var OM = iM[0],
            SM = iM[1],
            jM = iM[2];
          return "far" !== SM || rM || (SM = "fas"), "string" === typeof OM && (MM.names[OM] = {
            prefix: SM,
            iconName: jM
          }), "number" === typeof OM && (MM.unicodes[OM.toString(16)] = {
            prefix: SM,
            iconName: jM
          }), MM
        }), {
          names: {},
          unicodes: {}
        });
      Ci = iM.names, ei = iM.unicodes, Ei = Di(xr.styleDefault, {
        family: xr.familyDefault
      })
    };

    function ui(MM, rM) {
      return (Ui[MM] || {})[rM]
    }

    function Ri(MM, rM) {
      return (bi[MM] || {})[rM]
    }

    function Wi(MM) {
      return Ci[MM] || {
        prefix: null,
        iconName: null
      }
    }

    function si() {
      return Ei
    }
    ti = function(MM) {
      Ei = Di(MM.styleDefault, {
        family: xr.familyDefault
      })
    }, vr.push(ti), gi();

    function Di(MM) {
      var rM = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        iM = void 0 === rM ? WM : rM,
        OM = tr[iM][MM];
      if (iM === sM && !MM) return "fad";
      var SM = ur[iM][MM] || ur[iM][OM],
        jM = MM in Si.styles ? MM : null;
      return SM || jM || null
    }

    function ki(MM) {
      return MM.sort().filter((function(MM, rM, iM) {
        return iM.indexOf(MM) === rM
      }))
    }
    var Zi = zr.concat(Mr);

    function oi(MM) {
      var rM = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        iM = void 0 !== rM && rM,
        OM = null,
        SM = ki(MM.filter((function(MM) {
          return Zi.includes(MM)
        }))),
        jM = ki(MM.filter((function(MM) {
          return !Zi.includes(MM)
        }))),
        aM = QM(SM.filter((function(MM) {
          return OM = MM, !pM.includes(MM)
        })), 1)[0],
        PM = void 0 === aM ? null : aM,
        zM = function(MM) {
          var rM = WM,
            iM = yi.reduce((function(MM, rM) {
              return MM[rM] = "".concat(xr.cssPrefix, "-").concat(rM), MM
            }), {});
          return VM.forEach((function(OM) {
            (MM.includes(iM[OM]) || MM.some((function(MM) {
              return li[OM].includes(MM)
            }))) && (rM = OM)
          })), rM
        }(SM),
        LM = nM(nM({}, function(MM) {
          var rM = [],
            iM = null;
          return MM.forEach((function(MM) {
            var OM = wi(xr.cssPrefix, MM);
            OM ? iM = OM : MM && rM.push(MM)
          })), {
            iconName: iM,
            rest: rM
          }
        }(jM)), {}, {
          prefix: Di(PM, {
            family: zM
          })
        });
      return nM(nM(nM({}, LM), function(MM) {
        var rM = MM.values,
          iM = MM.family,
          OM = MM.canonical,
          SM = MM.givenPrefix,
          jM = void 0 === SM ? "" : SM,
          aM = MM.styles,
          PM = void 0 === aM ? {} : aM,
          nM = MM.config,
          QM = void 0 === nM ? {} : nM,
          zM = iM === sM,
          LM = rM.includes("fa-duotone") || rM.includes("fad"),
          mM = "duotone" === QM.familyDefault,
          HM = "fad" === OM.prefix || "fa-duotone" === OM.prefix;
        !zM && (LM || mM || HM) && (OM.prefix = "fad");
        (rM.includes("fa-brands") || rM.includes("fab")) && (OM.prefix = "fab");
        if (!OM.prefix && fi.includes(iM)) {
          if (Object.keys(PM).find((function(MM) {
              return Yi.includes(MM)
            })) || QM.autoFetchSvg) {
            var hM = cM.get(iM).defaultShortPrefixId;
            OM.prefix = hM, OM.iconName = Ri(OM.prefix, OM.iconName) || OM.iconName
          }
        }
        "fa" !== OM.prefix && "fa" !== jM || (OM.prefix = si() || "fas");
        return OM
      }({
        values: MM,
        family: zM,
        styles: Ji,
        config: xr,
        canonical: LM,
        givenPrefix: OM
      })), function(MM, rM, iM) {
        var OM = iM.prefix,
          SM = iM.iconName;
        if (MM || !OM || !SM) return {
          prefix: OM,
          iconName: SM
        };
        var jM = "fa" === rM ? Wi(SM) : {},
          aM = Ri(OM, SM);
        SM = jM.iconName || aM || SM, "far" !== (OM = jM.prefix || OM) || Ji.far || !Ji.fas || xr.autoFetchSvg || (OM = "fas");
        return {
          prefix: OM,
          iconName: SM
        }
      }(iM, OM, LM))
    }
    var fi = VM.filter((function(MM) {
        return MM !== WM || MM !== sM
      })),
      Yi = Object.keys(Qr).filter((function(MM) {
        return MM !== WM
      })).map((function(MM) {
        return Object.keys(Qr[MM])
      })).flat();
    var Ni = function() {
        return function(MM, rM, iM) {
          return rM && SM(MM.prototype, rM), iM && SM(MM, iM), Object.defineProperty(MM, "prototype", {
            writable: !1
          }), MM
        }((function MM() {
          ! function(MM, rM) {
            if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
          }(this, MM), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var MM = this, rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
            var SM = iM.reduce(this._pullDefinitions, {});
            Object.keys(SM).forEach((function(rM) {
              MM.definitions[rM] = nM(nM({}, MM.definitions[rM] || {}), SM[rM]), Hi(rM, SM[rM]);
              var iM = pr[WM][rM];
              iM && Hi(iM, SM[rM]), gi()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(MM, rM) {
            var iM = rM.prefix && rM.iconName && rM.icon ? {
              0: rM
            } : rM;
            return Object.keys(iM).map((function(rM) {
              var OM = iM[rM],
                SM = OM.prefix,
                jM = OM.iconName,
                aM = OM.icon,
                PM = aM[2];
              MM[SM] || (MM[SM] = {}), PM.length > 0 && PM.forEach((function(rM) {
                "string" === typeof rM && (MM[SM][rM] = aM)
              })), MM[SM][jM] = aM
            })), MM
          }
        }])
      }(),
      Ai = [],
      xi = {},
      vi = {},
      Fi = Object.keys(vi);

    function Bi(MM, rM) {
      for (var iM = arguments.length, OM = new Array(iM > 2 ? iM - 2 : 0), SM = 2; SM < iM; SM++) OM[SM - 2] = arguments[SM];
      return (xi[MM] || []).forEach((function(MM) {
        rM = MM.apply(null, [rM].concat(OM))
      })), rM
    }

    function Xi(MM) {
      for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
      (xi[MM] || []).forEach((function(MM) {
        MM.apply(null, iM)
      }))
    }

    function Ii() {
      var MM = arguments[0],
        rM = Array.prototype.slice.call(arguments, 1);
      return vi[MM] ? vi[MM].apply(null, rM) : void 0
    }

    function Ki(MM) {
      "fa" === MM.prefix && (MM.prefix = "fas");
      var rM = MM.iconName,
        iM = MM.prefix || si();
      if (rM) return rM = Ri(iM, rM) || rM, Qi(qi.definitions, iM, rM) || Qi(Si.styles, iM, rM)
    }
    var qi = new Ni,
      Ti = {
        i2svg: function() {
          var MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return gM ? (Xi("beforeI2svg", MM), Ii("pseudoElements2svg", MM), Ii("i2svg", MM)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var MM, rM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            iM = rM.autoReplaceSvgRoot;
          !1 === xr.autoReplaceSvg && (xr.autoReplaceSvg = !0), xr.observeMutations = !0, MM = function() {
            ci({
              autoReplaceSvgRoot: iM
            }), Xi("watch", rM)
          }, gM && (Pi ? setTimeout(MM, 0) : ji.push(MM))
        }
      },
      Vi = {
        noAuto: function() {
          xr.autoReplaceSvg = !1, xr.observeMutations = !1, Xi("noAuto")
        },
        config: xr,
        dom: Ti,
        parse: {
          icon: function(MM) {
            if (null === MM) return null;
            if ("object" === mM(MM) && MM.prefix && MM.iconName) return {
              prefix: MM.prefix,
              iconName: Ri(MM.prefix, MM.iconName) || MM.iconName
            };
            if (Array.isArray(MM) && 2 === MM.length) {
              var rM = 0 === MM[1].indexOf("fa-") ? MM[1].slice(3) : MM[1],
                iM = Di(MM[0]);
              return {
                prefix: iM,
                iconName: Ri(iM, rM) || rM
              }
            }
            if ("string" === typeof MM && (MM.indexOf("".concat(xr.cssPrefix, "-")) > -1 || MM.match(sr))) {
              var OM = oi(MM.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: OM.prefix || si(),
                iconName: Ri(OM.prefix, OM.iconName) || OM.iconName
              }
            }
            if ("string" === typeof MM) {
              var SM = si();
              return {
                prefix: SM,
                iconName: Ri(SM, MM) || MM
              }
            }
          }
        },
        library: qi,
        findIconDefinition: Ki,
        toHtml: ni
      },
      ci = function() {
        var MM = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          rM = void 0 === MM ? bM : MM;
        (Object.keys(Si.styles).length > 0 || xr.autoFetchSvg) && gM && xr.autoReplaceSvg && Vi.dom.i2svg({
          node: rM
        })
      };

    function MO(MM, rM) {
      return Object.defineProperty(MM, "abstract", {
        get: rM
      }), Object.defineProperty(MM, "html", {
        get: function() {
          return MM.abstract.map((function(MM) {
            return ni(MM)
          }))
        }
      }), Object.defineProperty(MM, "node", {
        get: function() {
          if (gM) {
            var rM = bM.createElement("div");
            return rM.innerHTML = MM.html, rM.children
          }
        }
      }), MM
    }

    function rO(MM) {
      var rM = MM.icons,
        iM = rM.main,
        OM = rM.mask,
        SM = MM.prefix,
        jM = MM.iconName,
        aM = MM.transform,
        PM = MM.symbol,
        QM = MM.maskId,
        zM = MM.extra,
        LM = MM.watchable,
        mM = void 0 !== LM && LM,
        HM = OM.found ? OM : iM,
        hM = HM.width,
        JM = HM.height,
        dM = [xr.replacementClass, jM ? "".concat(xr.cssPrefix, "-").concat(jM) : ""].filter((function(MM) {
          return -1 === zM.classes.indexOf(MM)
        })).filter((function(MM) {
          return "" !== MM || !!MM
        })).concat(zM.classes).join(" "),
        yM = {
          children: [],
          attributes: nM(nM({}, zM.attributes), {}, {
            "data-prefix": SM,
            "data-icon": jM,
            class: dM,
            role: zM.attributes.role || "img",
            viewBox: "0 0 ".concat(hM, " ").concat(JM)
          })
        };
      (function(MM) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(rM) {
          return rM in MM
        }))
      })(zM.attributes) || zM.attributes["aria-hidden"] || (yM.attributes["aria-hidden"] = "true"), mM && (yM.attributes[dr] = "");
      var lM = nM(nM({}, yM), {}, {
          prefix: SM,
          iconName: jM,
          main: iM,
          mask: OM,
          maskId: QM,
          transform: aM,
          symbol: PM,
          styles: nM({}, zM.styles)
        }),
        EM = OM.found && iM.found ? Ii("generateAbstractMask", lM) || {
          children: [],
          attributes: {}
        } : Ii("generateAbstractIcon", lM) || {
          children: [],
          attributes: {}
        },
        UM = EM.children,
        GM = EM.attributes;
      return lM.children = UM, lM.attributes = GM, PM ? function(MM) {
        var rM = MM.prefix,
          iM = MM.iconName,
          OM = MM.children,
          SM = MM.attributes,
          jM = MM.symbol,
          aM = !0 === jM ? "".concat(rM, "-").concat(xr.cssPrefix, "-").concat(iM) : jM;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: nM(nM({}, SM), {}, {
              id: aM
            }),
            children: OM
          }]
        }]
      }(lM) : function(MM) {
        var rM = MM.children,
          iM = MM.main,
          OM = MM.mask,
          SM = MM.attributes,
          jM = MM.styles,
          aM = MM.transform;
        if (Vr(aM) && iM.found && !OM.found) {
          var PM = {
            x: iM.width / iM.height / 2,
            y: .5
          };
          SM.style = Tr(nM(nM({}, jM), {}, {
            "transform-origin": "".concat(PM.x + aM.x / 16, "em ").concat(PM.y + aM.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: SM,
          children: rM
        }]
      }(lM)
    }

    function iO(MM) {
      var rM = MM.content,
        iM = MM.width,
        OM = MM.height,
        SM = MM.transform,
        jM = MM.extra,
        aM = MM.watchable,
        PM = void 0 !== aM && aM,
        QM = nM(nM({}, jM.attributes), {}, {
          class: jM.classes.join(" ")
        });
      PM && (QM[dr] = "");
      var zM = nM({}, jM.styles);
      Vr(SM) && (zM.transform = function(MM) {
        var rM = MM.transform,
          iM = MM.width,
          OM = void 0 === iM ? 16 : iM,
          SM = MM.height,
          jM = void 0 === SM ? 16 : SM,
          aM = MM.startCentered,
          PM = void 0 !== aM && aM,
          nM = "";
        return nM += PM && uM ? "translate(".concat(rM.x / Fr - OM / 2, "em, ").concat(rM.y / Fr - jM / 2, "em) ") : PM ? "translate(calc(-50% + ".concat(rM.x / Fr, "em), calc(-50% + ").concat(rM.y / Fr, "em)) ") : "translate(".concat(rM.x / Fr, "em, ").concat(rM.y / Fr, "em) "), nM += "scale(".concat(rM.size / Fr * (rM.flipX ? -1 : 1), ", ").concat(rM.size / Fr * (rM.flipY ? -1 : 1), ") "), nM + "rotate(".concat(rM.rotate, "deg) ")
      }({
        transform: SM,
        startCentered: !0,
        width: iM,
        height: OM
      }), zM["-webkit-transform"] = zM.transform);
      var LM = Tr(zM);
      LM.length > 0 && (QM.style = LM);
      var mM = [];
      return mM.push({
        tag: "span",
        attributes: QM,
        children: [rM]
      }), mM
    }
    var OO = Si.styles;

    function SO(MM) {
      var rM = MM[0],
        iM = MM[1],
        OM = QM(MM.slice(4), 1)[0];
      return {
        found: !0,
        width: rM,
        height: iM,
        icon: Array.isArray(OM) ? {
          tag: "g",
          attributes: {
            class: "".concat(xr.cssPrefix, "-").concat(or.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(xr.cssPrefix, "-").concat(or.SECONDARY),
              fill: "currentColor",
              d: OM[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(xr.cssPrefix, "-").concat(or.PRIMARY),
              fill: "currentColor",
              d: OM[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: OM
          }
        }
      }
    }
    var jO = {
      found: !1,
      width: 512,
      height: 512
    };

    function aO(MM, rM) {
      var iM = rM;
      return "fa" === rM && null !== xr.styleDefault && (rM = si()), new Promise((function(OM, SM) {
        if ("fa" === iM) {
          var jM = Wi(MM) || {};
          MM = jM.iconName || MM, rM = jM.prefix || rM
        }
        if (MM && rM && OO[rM] && OO[rM][MM]) return OM(SO(OO[rM][MM]));
        ! function(MM, rM) {
          er || xr.showMissingIcons || !MM || console.error('Icon with name "'.concat(MM, '" and prefix "').concat(rM, '" is missing.'))
        }(MM, rM), OM(nM(nM({}, jO), {}, {
          icon: xr.showMissingIcons && MM && Ii("missingIconAbstract") || {}
        }))
      }))
    }
    var PO = function() {},
      nO = xr.measurePerformance && tM && tM.mark && tM.measure ? tM : {
        mark: PO,
        measure: PO
      },
      QO = 'FA "7.2.0"',
      zO = function(MM) {
        nO.mark("".concat(QO, " ").concat(MM, " ends")), nO.measure("".concat(QO, " ").concat(MM), "".concat(QO, " ").concat(MM, " begins"), "".concat(QO, " ").concat(MM, " ends"))
      },
      LO = function(MM) {
        return nO.mark("".concat(QO, " ").concat(MM, " begins")),
          function() {
            return zO(MM)
          }
      },
      mO = function() {};

    function HO(MM) {
      return "string" === typeof(MM.getAttribute ? MM.getAttribute(dr) : null)
    }

    function hO(MM) {
      return bM.createElementNS("http://www.w3.org/2000/svg", MM)
    }

    function JO(MM) {
      return bM.createElement(MM)
    }

    function dO(MM) {
      var rM = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        iM = void 0 === rM ? "svg" === MM.tag ? hO : JO : rM;
      if ("string" === typeof MM) return bM.createTextNode(MM);
      var OM = iM(MM.tag);
      return Object.keys(MM.attributes || []).forEach((function(rM) {
        OM.setAttribute(rM, MM.attributes[rM])
      })), (MM.children || []).forEach((function(MM) {
        OM.appendChild(dO(MM, {
          ceFn: iM
        }))
      })), OM
    }
    var yO = {
      replace: function(MM) {
        var rM = MM[0];
        if (rM.parentNode)
          if (MM[1].forEach((function(MM) {
              rM.parentNode.insertBefore(dO(MM), rM)
            })), null === rM.getAttribute(dr) && xr.keepOriginalSource) {
            var iM = bM.createComment(function(MM) {
              var rM = " ".concat(MM.outerHTML, " ");
              return "".concat(rM, "Font Awesome fontawesome.com ")
            }(rM));
            rM.parentNode.replaceChild(iM, rM)
          } else rM.remove()
      },
      nest: function(MM) {
        var rM = MM[0],
          iM = MM[1];
        if (~Kr(rM).indexOf(xr.replacementClass)) return yO.replace(MM);
        var OM = new RegExp("".concat(xr.cssPrefix, "-.*"));
        if (delete iM[0].attributes.id, iM[0].attributes.class) {
          var SM = iM[0].attributes.class.split(" ").reduce((function(MM, rM) {
            return rM === xr.replacementClass || rM.match(OM) ? MM.toSvg.push(rM) : MM.toNode.push(rM), MM
          }), {
            toNode: [],
            toSvg: []
          });
          iM[0].attributes.class = SM.toSvg.join(" "), 0 === SM.toNode.length ? rM.removeAttribute("class") : rM.setAttribute("class", SM.toNode.join(" "))
        }
        var jM = iM.map((function(MM) {
          return ni(MM)
        })).join("\n");
        rM.setAttribute(dr, ""), rM.innerHTML = jM
      }
    };

    function lO(MM) {
      MM()
    }

    function EO(MM, rM) {
      var iM = "function" === typeof rM ? rM : mO;
      if (0 === MM.length) iM();
      else {
        var OM = lO;
        "async" === xr.mutateApproach && (OM = eM.requestAnimationFrame || lO), OM((function() {
          var rM = !0 === xr.autoReplaceSvg ? yO.replace : yO[xr.autoReplaceSvg] || yO.replace,
            OM = LO("mutate");
          MM.map(rM), OM(), iM()
        }))
      }
    }
    var UO = !1;

    function GO() {
      UO = !0
    }

    function CO() {
      UO = !1
    }
    var eO = null;

    function bO(MM) {
      if (wM && xr.observeMutations) {
        var rM = MM.treeCallback,
          iM = void 0 === rM ? mO : rM,
          OM = MM.nodeCallback,
          SM = void 0 === OM ? mO : OM,
          jM = MM.pseudoElementsCallback,
          aM = void 0 === jM ? mO : jM,
          PM = MM.observeMutationsRoot,
          nM = void 0 === PM ? bM : PM;
        eO = new wM((function(MM) {
          if (!UO) {
            var rM = si();
            Ir(MM).forEach((function(MM) {
              if ("childList" === MM.type && MM.addedNodes.length > 0 && !HO(MM.addedNodes[0]) && (xr.searchPseudoElements && aM(MM.target), iM(MM.target)), "attributes" === MM.type && MM.target.parentNode && xr.searchPseudoElements && aM([MM.target], !0), "attributes" === MM.type && HO(MM.target) && ~Zr.indexOf(MM.attributeName))
                if ("class" === MM.attributeName && function(MM) {
                    var rM = MM.getAttribute ? MM.getAttribute(lr) : null,
                      iM = MM.getAttribute ? MM.getAttribute(Er) : null;
                    return rM && iM
                  }(MM.target)) {
                  var OM = oi(Kr(MM.target)),
                    jM = OM.prefix,
                    PM = OM.iconName;
                  MM.target.setAttribute(lr, jM || rM), PM && MM.target.setAttribute(Er, PM)
                } else(nM = MM.target) && nM.classList && nM.classList.contains && nM.classList.contains(xr.replacementClass) && SM(MM.target);
              var nM
            }))
          }
        })), gM && eO.observe(nM, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function wO(MM) {
      var rM, iM, OM = MM.getAttribute("data-prefix"),
        SM = MM.getAttribute("data-icon"),
        jM = void 0 !== MM.innerText ? MM.innerText.trim() : "",
        aM = oi(Kr(MM));
      return aM.prefix || (aM.prefix = si()), OM && SM && (aM.prefix = OM, aM.iconName = SM), aM.iconName && aM.prefix || (aM.prefix && jM.length > 0 && (aM.iconName = (rM = aM.prefix, iM = MM.innerText, (Gi[rM] || {})[iM] || ui(aM.prefix, Li(MM.innerText)))), !aM.iconName && xr.autoFetchSvg && MM.firstChild && MM.firstChild.nodeType === Node.TEXT_NODE && (aM.iconName = MM.firstChild.data)), aM
    }

    function tO(MM) {
      var rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        iM = wO(MM),
        OM = iM.iconName,
        SM = iM.prefix,
        jM = iM.rest,
        aM = function(MM) {
          return Ir(MM.attributes).reduce((function(MM, rM) {
            return "class" !== MM.name && "style" !== MM.name && (MM[rM.name] = rM.value), MM
          }), {})
        }(MM),
        PM = Bi("parseNodeAttributes", {}, MM),
        QM = rM.styleParser ? function(MM) {
          var rM = MM.getAttribute("style"),
            iM = [];
          return rM && (iM = rM.split(";").reduce((function(MM, rM) {
            var iM = rM.split(":"),
              OM = iM[0],
              SM = iM.slice(1);
            return OM && SM.length > 0 && (MM[OM] = SM.join(":").trim()), MM
          }), {})), iM
        }(MM) : [];
      return nM({
        iconName: OM,
        prefix: SM,
        transform: Br,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: jM,
          styles: QM,
          attributes: aM
        }
      }, PM)
    }
    var gO = Si.styles;

    function uO(MM) {
      var rM = "nest" === xr.autoReplaceSvg ? tO(MM, {
        styleParser: !1
      }) : tO(MM);
      return ~rM.extra.classes.indexOf(Dr) ? Ii("generateLayersText", MM, rM) : Ii("generateSvgReplacementMutation", MM, rM)
    }

    function RO(MM) {
      var rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!gM) return Promise.resolve();
      var iM = bM.documentElement.classList,
        OM = function(MM) {
          return iM.add("".concat(Ur, "-").concat(MM))
        },
        SM = function(MM) {
          return iM.remove("".concat(Ur, "-").concat(MM))
        },
        jM = xr.autoFetchSvg ? [].concat(zM(Mr), zM(zr)) : pM.concat(Object.keys(gO));
      jM.includes("fa") || jM.push("fa");
      var aM = [".".concat(Dr, ":not([").concat(dr, "])")].concat(jM.map((function(MM) {
        return ".".concat(MM, ":not([").concat(dr, "])")
      }))).join(", ");
      if (0 === aM.length) return Promise.resolve();
      var PM = [];
      try {
        PM = Ir(MM.querySelectorAll(aM))
      } catch (LM) {}
      if (!(PM.length > 0)) return Promise.resolve();
      OM("pending"), SM("complete");
      var nM = LO("onTree"),
        QM = PM.reduce((function(MM, rM) {
          try {
            var iM = uO(rM);
            iM && MM.push(iM)
          } catch (LM) {
            er || "MissingIcon" === LM.name && console.error(LM)
          }
          return MM
        }), []);
      return new Promise((function(MM, iM) {
        Promise.all(QM).then((function(iM) {
          EO(iM, (function() {
            OM("active"), OM("complete"), SM("pending"), "function" === typeof rM && rM(), nM(), MM()
          }))
        })).catch((function(MM) {
          nM(), iM(MM)
        }))
      }))
    }

    function pO(MM) {
      var rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      uO(MM).then((function(MM) {
        MM && EO([MM], rM)
      }))
    }
    var WO = function(MM) {
        var rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          iM = rM.transform,
          OM = void 0 === iM ? Br : iM,
          SM = rM.symbol,
          jM = void 0 !== SM && SM,
          aM = rM.mask,
          PM = void 0 === aM ? null : aM,
          QM = rM.maskId,
          zM = void 0 === QM ? null : QM,
          LM = rM.classes,
          mM = void 0 === LM ? [] : LM,
          HM = rM.attributes,
          hM = void 0 === HM ? {} : HM,
          JM = rM.styles,
          dM = void 0 === JM ? {} : JM;
        if (MM) {
          var yM = MM.prefix,
            lM = MM.iconName,
            EM = MM.icon;
          return MO(nM({
            type: "icon"
          }, MM), (function() {
            return Xi("beforeDOMElementCreation", {
              iconDefinition: MM,
              params: rM
            }), rO({
              icons: {
                main: SO(EM),
                mask: PM ? SO(PM.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: yM,
              iconName: lM,
              transform: nM(nM({}, Br), OM),
              symbol: jM,
              maskId: zM,
              extra: {
                attributes: hM,
                styles: dM,
                classes: mM
              }
            })
          }))
        }
      },
      sO = {
        mixout: function() {
          return {
            icon: (MM = WO, function(rM) {
              var iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                OM = (rM || {}).icon ? rM : Ki(rM || {}),
                SM = iM.mask;
              return SM && (SM = (SM || {}).icon ? SM : Ki(SM || {})), MM(OM, nM(nM({}, iM), {}, {
                mask: SM
              }))
            })
          };
          var MM
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(MM) {
              return MM.treeCallback = RO, MM.nodeCallback = pO, MM
            }
          }
        },
        provides: function(MM) {
          MM.i2svg = function(MM) {
            var rM = MM.node,
              iM = void 0 === rM ? bM : rM,
              OM = MM.callback;
            return RO(iM, void 0 === OM ? function() {} : OM)
          }, MM.generateSvgReplacementMutation = function(MM, rM) {
            var iM = rM.iconName,
              OM = rM.prefix,
              SM = rM.transform,
              jM = rM.symbol,
              aM = rM.mask,
              PM = rM.maskId,
              nM = rM.extra;
            return new Promise((function(rM, zM) {
              Promise.all([aO(iM, OM), aM.iconName ? aO(aM.iconName, aM.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(aM) {
                var zM = QM(aM, 2),
                  LM = zM[0],
                  mM = zM[1];
                rM([MM, rO({
                  icons: {
                    main: LM,
                    mask: mM
                  },
                  prefix: OM,
                  iconName: iM,
                  transform: SM,
                  symbol: jM,
                  maskId: PM,
                  extra: nM,
                  watchable: !0
                })])
              })).catch(zM)
            }))
          }, MM.generateAbstractIcon = function(MM) {
            var rM, iM = MM.children,
              OM = MM.attributes,
              SM = MM.main,
              jM = MM.transform,
              aM = Tr(MM.styles);
            return aM.length > 0 && (OM.style = aM), Vr(jM) && (rM = Ii("generateAbstractTransformGrouping", {
              main: SM,
              transform: jM,
              containerWidth: SM.width,
              iconWidth: SM.width
            })), iM.push(rM || SM.icon), {
              children: iM,
              attributes: OM
            }
          }
        }
      },
      DO = {
        mixout: function() {
          return {
            layer: function(MM) {
              var rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                iM = rM.classes,
                OM = void 0 === iM ? [] : iM;
              return MO({
                type: "layer"
              }, (function() {
                Xi("beforeDOMElementCreation", {
                  assembler: MM,
                  params: rM
                });
                var iM = [];
                return MM((function(MM) {
                  Array.isArray(MM) ? MM.map((function(MM) {
                    iM = iM.concat(MM.abstract)
                  })) : iM = iM.concat(MM.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(xr.cssPrefix, "-layers")].concat(zM(OM)).join(" ")
                  },
                  children: iM
                }]
              }))
            }
          }
        }
      },
      kO = {
        mixout: function() {
          return {
            counter: function(MM) {
              var rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                iM = rM.title,
                OM = void 0 === iM ? null : iM,
                SM = rM.classes,
                jM = void 0 === SM ? [] : SM,
                aM = rM.attributes,
                PM = void 0 === aM ? {} : aM,
                QM = rM.styles,
                LM = void 0 === QM ? {} : QM;
              return MO({
                type: "counter",
                content: MM
              }, (function() {
                return Xi("beforeDOMElementCreation", {
                    content: MM,
                    params: rM
                  }),
                  function(MM) {
                    var rM = MM.content,
                      iM = MM.extra,
                      OM = nM(nM({}, iM.attributes), {}, {
                        class: iM.classes.join(" ")
                      }),
                      SM = Tr(iM.styles);
                    SM.length > 0 && (OM.style = SM);
                    var jM = [];
                    return jM.push({
                      tag: "span",
                      attributes: OM,
                      children: [rM]
                    }), jM
                  }({
                    content: MM.toString(),
                    title: OM,
                    extra: {
                      attributes: PM,
                      styles: LM,
                      classes: ["".concat(xr.cssPrefix, "-layers-counter")].concat(zM(jM))
                    }
                  })
              }))
            }
          }
        }
      },
      ZO = {
        mixout: function() {
          return {
            text: function(MM) {
              var rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                iM = rM.transform,
                OM = void 0 === iM ? Br : iM,
                SM = rM.classes,
                jM = void 0 === SM ? [] : SM,
                aM = rM.attributes,
                PM = void 0 === aM ? {} : aM,
                QM = rM.styles,
                LM = void 0 === QM ? {} : QM;
              return MO({
                type: "text",
                content: MM
              }, (function() {
                return Xi("beforeDOMElementCreation", {
                  content: MM,
                  params: rM
                }), iO({
                  content: MM,
                  transform: nM(nM({}, Br), OM),
                  extra: {
                    attributes: PM,
                    styles: LM,
                    classes: ["".concat(xr.cssPrefix, "-layers-text")].concat(zM(jM))
                  }
                })
              }))
            }
          }
        },
        provides: function(MM) {
          MM.generateLayersText = function(MM, rM) {
            var iM = rM.transform,
              OM = rM.extra,
              SM = null,
              jM = null;
            if (uM) {
              var aM = parseInt(getComputedStyle(MM).fontSize, 10),
                PM = MM.getBoundingClientRect();
              SM = PM.width / aM, jM = PM.height / aM
            }
            return Promise.resolve([MM, iO({
              content: MM.innerHTML,
              width: SM,
              height: jM,
              transform: iM,
              extra: OM,
              watchable: !0
            })])
          }
        }
      },
      oO = new RegExp('"', "ug"),
      fO = [1105920, 1112319],
      YO = nM(nM(nM(nM({}, {
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
      NO = Object.keys(YO).reduce((function(MM, rM) {
        return MM[rM.toLowerCase()] = YO[rM], MM
      }), {}),
      AO = Object.keys(NO).reduce((function(MM, rM) {
        var iM = NO[rM];
        return MM[rM] = iM[900] || zM(Object.entries(iM))[0][1], MM
      }), {});

    function xO(MM, rM) {
      var iM = "".concat("data-fa-pseudo-element-pending").concat(rM.replace(":", "-"));
      return new Promise((function(OM, SM) {
        if (null !== MM.getAttribute(iM)) return OM();
        var jM = Ir(MM.children).filter((function(MM) {
            return MM.getAttribute(yr) === rM
          }))[0],
          aM = eM.getComputedStyle(MM, rM),
          PM = aM.getPropertyValue("font-family"),
          QM = PM.match(kr),
          LM = aM.getPropertyValue("font-weight"),
          mM = aM.getPropertyValue("content");
        if (jM && !QM) return MM.removeChild(jM), OM();
        if (QM && "none" !== mM && "" !== mM) {
          var HM = aM.getPropertyValue("content"),
            hM = function(MM, rM) {
              var iM = MM.replace(/^['"]|['"]$/g, "").toLowerCase(),
                OM = parseInt(rM),
                SM = isNaN(OM) ? "normal" : OM;
              return (NO[iM] || {})[SM] || AO[iM]
            }(PM, LM),
            JM = function(MM) {
              return Li(zM(MM.replace(oO, ""))[0] || "")
            }(HM),
            dM = QM[0].startsWith("FontAwesome"),
            yM = function(MM) {
              var rM = MM.getPropertyValue("font-feature-settings").includes("ss01"),
                iM = MM.getPropertyValue("content").replace(oO, ""),
                OM = iM.codePointAt(0),
                SM = OM >= fO[0] && OM <= fO[1],
                jM = 2 === iM.length && iM[0] === iM[1];
              return SM || jM || rM
            }(aM),
            lM = ui(hM, JM),
            EM = lM;
          if (dM) {
            var UM = function(MM) {
              var rM = ei[MM],
                iM = ui("fas", MM);
              return rM || (iM ? {
                prefix: "fas",
                iconName: iM
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(JM);
            UM.iconName && UM.prefix && (lM = UM.iconName, hM = UM.prefix)
          }
          if (!lM || yM || jM && jM.getAttribute(lr) === hM && jM.getAttribute(Er) === EM) OM();
          else {
            MM.setAttribute(iM, EM), jM && MM.removeChild(jM);
            var GM = {
                iconName: null,
                prefix: null,
                transform: Br,
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
              CM = GM.extra;
            CM.attributes[yr] = rM, aO(lM, hM).then((function(SM) {
              var jM = rO(nM(nM({}, GM), {}, {
                  icons: {
                    main: SM,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: hM,
                  iconName: EM,
                  extra: CM,
                  watchable: !0
                })),
                aM = bM.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === rM ? MM.insertBefore(aM, MM.firstChild) : MM.appendChild(aM), aM.outerHTML = jM.map((function(MM) {
                return ni(MM)
              })).join("\n"), MM.removeAttribute(iM), OM()
            })).catch(SM)
          }
        } else OM()
      }))
    }

    function vO(MM) {
      return Promise.all([xO(MM, "::before"), xO(MM, "::after")])
    }

    function FO(MM) {
      return MM.parentNode !== document.head && !~Gr.indexOf(MM.tagName.toUpperCase()) && !MM.getAttribute(yr) && (!MM.parentNode || "svg" !== MM.parentNode.tagName)
    }
    var BO = function(MM) {
        return !!MM && Cr.some((function(rM) {
          return MM.includes(rM)
        }))
      },
      XO = function(MM) {
        if (!MM) return [];
        var rM = new Set,
          iM = MM.split(/,(?![^()]*\))/).map((function(MM) {
            return MM.trim()
          }));
        iM = iM.flatMap((function(MM) {
          return MM.includes("(") ? MM : MM.split(",").map((function(MM) {
            return MM.trim()
          }))
        }));
        var OM, SM = jM(iM);
        try {
          for (SM.s(); !(OM = SM.n()).done;) {
            var aM = OM.value;
            if (BO(aM)) {
              var PM = Cr.reduce((function(MM, rM) {
                return MM.replace(rM, "")
              }), aM);
              "" !== PM && "*" !== PM && rM.add(PM)
            }
          }
        } catch (nM) {
          SM.e(nM)
        } finally {
          SM.f()
        }
        return rM
      };

    function IO(MM) {
      if (gM) {
        var rM;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) rM = MM;
        else if (xr.searchPseudoElementsFullScan) rM = MM.querySelectorAll("*");
        else {
          var iM, OM = new Set,
            SM = jM(document.styleSheets);
          try {
            for (SM.s(); !(iM = SM.n()).done;) {
              var aM = iM.value;
              try {
                var PM, nM = jM(aM.cssRules);
                try {
                  for (nM.s(); !(PM = nM.n()).done;) {
                    var QM, zM = PM.value,
                      LM = jM(XO(zM.selectorText));
                    try {
                      for (LM.s(); !(QM = LM.n()).done;) {
                        var mM = QM.value;
                        OM.add(mM)
                      }
                    } catch (hM) {
                      LM.e(hM)
                    } finally {
                      LM.f()
                    }
                  }
                } catch (hM) {
                  nM.e(hM)
                } finally {
                  nM.f()
                }
              } catch (JM) {
                xr.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(aM.href, " (").concat(JM.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (hM) {
            SM.e(hM)
          } finally {
            SM.f()
          }
          if (!OM.size) return;
          var HM = Array.from(OM).join(", ");
          try {
            rM = MM.querySelectorAll(HM)
          } catch (dM) {}
        }
        return new Promise((function(MM, iM) {
          var OM = Ir(rM).filter(FO).map(vO),
            SM = LO("searchPseudoElements");
          GO(), Promise.all(OM).then((function() {
            SM(), CO(), MM()
          })).catch((function() {
            SM(), CO(), iM()
          }))
        }))
      }
    }
    var KO = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(MM) {
              return MM.pseudoElementsCallback = IO, MM
            }
          }
        },
        provides: function(MM) {
          MM.pseudoElements2svg = function(MM) {
            var rM = MM.node,
              iM = void 0 === rM ? bM : rM;
            xr.searchPseudoElements && IO(iM)
          }
        }
      },
      qO = !1,
      TO = function(MM) {
        return MM.toLowerCase().split(" ").reduce((function(MM, rM) {
          var iM = rM.toLowerCase().split("-"),
            OM = iM[0],
            SM = iM.slice(1).join("-");
          if (OM && "h" === SM) return MM.flipX = !0, MM;
          if (OM && "v" === SM) return MM.flipY = !0, MM;
          if (SM = parseFloat(SM), isNaN(SM)) return MM;
          switch (OM) {
            case "grow":
              MM.size = MM.size + SM;
              break;
            case "shrink":
              MM.size = MM.size - SM;
              break;
            case "left":
              MM.x = MM.x - SM;
              break;
            case "right":
              MM.x = MM.x + SM;
              break;
            case "up":
              MM.y = MM.y - SM;
              break;
            case "down":
              MM.y = MM.y + SM;
              break;
            case "rotate":
              MM.rotate = MM.rotate + SM
          }
          return MM
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      VO = {
        mixout: function() {
          return {
            parse: {
              transform: function(MM) {
                return TO(MM)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(MM, rM) {
              var iM = rM.getAttribute("data-fa-transform");
              return iM && (MM.transform = TO(iM)), MM
            }
          }
        },
        provides: function(MM) {
          MM.generateAbstractTransformGrouping = function(MM) {
            var rM = MM.main,
              iM = MM.transform,
              OM = MM.containerWidth,
              SM = MM.iconWidth,
              jM = {
                transform: "translate(".concat(OM / 2, " 256)")
              },
              aM = "translate(".concat(32 * iM.x, ", ").concat(32 * iM.y, ") "),
              PM = "scale(".concat(iM.size / 16 * (iM.flipX ? -1 : 1), ", ").concat(iM.size / 16 * (iM.flipY ? -1 : 1), ") "),
              QM = "rotate(".concat(iM.rotate, " 0 0)"),
              zM = {
                outer: jM,
                inner: {
                  transform: "".concat(aM, " ").concat(PM, " ").concat(QM)
                },
                path: {
                  transform: "translate(".concat(SM / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: nM({}, zM.outer),
              children: [{
                tag: "g",
                attributes: nM({}, zM.inner),
                children: [{
                  tag: rM.icon.tag,
                  children: rM.icon.children,
                  attributes: nM(nM({}, rM.icon.attributes), zM.path)
                }]
              }]
            }
          }
        }
      },
      cO = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function MS(MM) {
      var rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return MM.attributes && (MM.attributes.fill || rM) && (MM.attributes.fill = "black"), MM
    }
    var rS = {
        hooks: function() {
          return {
            parseNodeAttributes: function(MM, rM) {
              var iM = rM.getAttribute("data-fa-mask"),
                OM = iM ? oi(iM.split(" ").map((function(MM) {
                  return MM.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return OM.prefix || (OM.prefix = si()), MM.mask = OM, MM.maskId = rM.getAttribute("data-fa-mask-id"), MM
            }
          }
        },
        provides: function(MM) {
          MM.generateAbstractMask = function(MM) {
            var rM, iM = MM.children,
              OM = MM.attributes,
              SM = MM.main,
              jM = MM.mask,
              aM = MM.maskId,
              PM = MM.transform,
              QM = SM.width,
              zM = SM.icon,
              LM = jM.width,
              mM = jM.icon,
              HM = function(MM) {
                var rM = MM.transform,
                  iM = MM.containerWidth,
                  OM = MM.iconWidth,
                  SM = {
                    transform: "translate(".concat(iM / 2, " 256)")
                  },
                  jM = "translate(".concat(32 * rM.x, ", ").concat(32 * rM.y, ") "),
                  aM = "scale(".concat(rM.size / 16 * (rM.flipX ? -1 : 1), ", ").concat(rM.size / 16 * (rM.flipY ? -1 : 1), ") "),
                  PM = "rotate(".concat(rM.rotate, " 0 0)");
                return {
                  outer: SM,
                  inner: {
                    transform: "".concat(jM, " ").concat(aM, " ").concat(PM)
                  },
                  path: {
                    transform: "translate(".concat(OM / 2 * -1, " -256)")
                  }
                }
              }({
                transform: PM,
                containerWidth: LM,
                iconWidth: QM
              }),
              hM = {
                tag: "rect",
                attributes: nM(nM({}, cO), {}, {
                  fill: "white"
                })
              },
              JM = zM.children ? {
                children: zM.children.map(MS)
              } : {},
              dM = {
                tag: "g",
                attributes: nM({}, HM.inner),
                children: [MS(nM({
                  tag: zM.tag,
                  attributes: nM(nM({}, zM.attributes), HM.path)
                }, JM))]
              },
              yM = {
                tag: "g",
                attributes: nM({}, HM.outer),
                children: [dM]
              },
              lM = "mask-".concat(aM || Xr()),
              EM = "clip-".concat(aM || Xr()),
              UM = {
                tag: "mask",
                attributes: nM(nM({}, cO), {}, {
                  id: lM,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [hM, yM]
              },
              GM = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: EM
                  },
                  children: (rM = mM, "g" === rM.tag ? rM.children : [rM])
                }, UM]
              };
            return iM.push(GM, {
              tag: "rect",
              attributes: nM({
                fill: "currentColor",
                "clip-path": "url(#".concat(EM, ")"),
                mask: "url(#".concat(lM, ")")
              }, cO)
            }), {
              children: iM,
              attributes: OM
            }
          }
        }
      },
      iS = {
        provides: function(MM) {
          var rM = !1;
          eM.matchMedia && (rM = eM.matchMedia("(prefers-reduced-motion: reduce)").matches), MM.missingIconAbstract = function() {
            var MM = [],
              iM = {
                fill: "currentColor"
              },
              OM = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            MM.push({
              tag: "path",
              attributes: nM(nM({}, iM), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var SM = nM(nM({}, OM), {}, {
                attributeName: "opacity"
              }),
              jM = {
                tag: "circle",
                attributes: nM(nM({}, iM), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return rM || jM.children.push({
              tag: "animate",
              attributes: nM(nM({}, OM), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: nM(nM({}, SM), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), MM.push(jM), MM.push({
              tag: "path",
              attributes: nM(nM({}, iM), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: rM ? [] : [{
                tag: "animate",
                attributes: nM(nM({}, SM), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), rM || MM.push({
              tag: "path",
              attributes: nM(nM({}, iM), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: nM(nM({}, SM), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: MM
            }
          }
        }
      };
    ! function(MM, rM) {
      var iM = rM.mixoutsTo;
      Ai = MM, xi = {}, Object.keys(vi).forEach((function(MM) {
        -1 === Fi.indexOf(MM) && delete vi[MM]
      })), Ai.forEach((function(MM) {
        var rM = MM.mixout ? MM.mixout() : {};
        if (Object.keys(rM).forEach((function(MM) {
            "function" === typeof rM[MM] && (iM[MM] = rM[MM]), "object" === mM(rM[MM]) && Object.keys(rM[MM]).forEach((function(OM) {
              iM[MM] || (iM[MM] = {}), iM[MM][OM] = rM[MM][OM]
            }))
          })), MM.hooks) {
          var OM = MM.hooks();
          Object.keys(OM).forEach((function(MM) {
            xi[MM] || (xi[MM] = []), xi[MM].push(OM[MM])
          }))
        }
        MM.provides && MM.provides(vi)
      }))
    }([ii, sO, DO, kO, ZO, KO, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              GO(), qO = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            bO(Bi("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            eO && eO.disconnect()
          },
          watch: function(MM) {
            var rM = MM.observeMutationsRoot;
            qO ? CO() : bO(Bi("mutationObserverCallbacks", {
              observeMutationsRoot: rM
            }))
          }
        }
      }
    }, VO, rS, iS, {
      hooks: function() {
        return {
          parseNodeAttributes: function(MM, rM) {
            var iM = rM.getAttribute("data-fa-symbol"),
              OM = null !== iM && ("" === iM || iM);
            return MM.symbol = OM, MM
          }
        }
      }
    }], {
      mixoutsTo: Vi
    });
    var OS = Vi.noAuto,
      SS = Vi.config,
      jS = Vi.library,
      aS = Vi.dom,
      PS = Vi.parse,
      nS = Vi.findIconDefinition,
      QS = Vi.toHtml,
      zS = Vi.icon,
      LS = Vi.layer,
      mS = Vi.text,
      HS = Vi.counter
  },
  7250: MM => {
    MM.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);