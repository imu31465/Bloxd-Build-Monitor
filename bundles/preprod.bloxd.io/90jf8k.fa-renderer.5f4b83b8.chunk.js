/*! For license information please see 90jf8k.fa-renderer.5f4b83b8.chunk.js.LICENSE.txt */
export const id = 27;
export const ids = [27];
export const modules = {
  5654: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      FontAwesomeIcon: () => DF
    });
    var CF = SF(5646),
      AF = SF(3961),
      uF = SF.n(AF),
      hF = SF(46);

    function bW(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function dF(FF, WF, SF) {
      return (WF = function(FF) {
        var WF = function(FF, WF) {
          if ("object" != typeof FF || !FF) return FF;
          var SF = FF[Symbol.toPrimitive];
          if (void 0 !== SF) {
            var CF = SF.call(FF, WF || "default");
            if ("object" != typeof CF) return CF;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WF ? String : Number)(FF)
        }(FF, "string");
        return "symbol" == typeof WF ? WF : WF + ""
      }(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function PF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function RF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? PF(Object(SF), !0).forEach((function(WF) {
          dF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : PF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function iW(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        var SF = null == FF ? null : "undefined" != typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
        if (null != SF) {
          var CF, AF, uF, hF, bW = [],
            dF = !0,
            PF = !1;
          try {
            if (uF = (SF = SF.call(FF)).next, 0 === WF) {
              if (Object(SF) !== SF) return;
              dF = !1
            } else
              for (; !(dF = (CF = uF.call(SF)).done) && (bW.push(CF.value), bW.length !== WF); dF = !0);
          } catch (FF) {
            PF = !0, AF = FF
          } finally {
            try {
              if (!dF && null != SF.return && (hF = SF.return(), Object(hF) !== hF)) return
            } finally {
              if (PF) throw AF
            }
          }
          return bW
        }
      }(FF, WF) || QF(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function eF(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return bW(FF)
      }(FF) || function(FF) {
        if ("undefined" != typeof Symbol && null != FF[Symbol.iterator] || null != FF["@@iterator"]) return Array.from(FF)
      }(FF) || QF(FF) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function EF(FF) {
      return EF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, EF(FF)
    }

    function QF(FF, WF) {
      if (FF) {
        if ("string" == typeof FF) return bW(FF, WF);
        var SF = {}.toString.call(FF).slice(8, -1);
        return "Object" === SF && FF.constructor && (SF = FF.constructor.name), "Map" === SF || "Set" === SF ? Array.from(FF) : "Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF) ? bW(FF, WF) : void 0
      }
    }
    var rW;
    try {
      var gW = SF(5662);
      rW = gW.version
    } catch (mW) {
      rW = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function tW(FF) {
      var WF = FF.beat,
        SF = FF.fade,
        CF = FF.beatFade,
        AF = FF.bounce,
        uF = FF.shake,
        hF = FF.flash,
        bW = FF.spin,
        PF = FF.spinPulse,
        RF = FF.spinReverse,
        eF = FF.pulse,
        EF = FF.fixedWidth,
        QF = FF.inverse,
        gW = FF.border,
        tW = FF.listItem,
        TF = FF.flip,
        aW = FF.size,
        kW = FF.rotation,
        qW = FF.pull,
        VF = FF.swapOpacity,
        NF = FF.rotateBy,
        DF = FF.widthAuto,
        LF = function(FF, WF) {
          for (var SF = iW(FF.split("-"), 2), CF = SF[0], AF = SF[1], uF = iW(WF.split("-"), 2), hF = uF[0], bW = uF[1], dF = CF.split("."), PF = hF.split("."), RF = 0; RF < Math.max(dF.length, PF.length); RF++) {
            var eF = dF[RF] || "0",
              EF = PF[RF] || "0",
              QF = parseInt(eF, 10),
              rW = parseInt(EF, 10);
            if (QF !== rW) return QF > rW
          }
          for (var gW = 0; gW < Math.max(dF.length, PF.length); gW++) {
            var tW = dF[gW] || "0",
              TF = PF[gW] || "0";
            if (tW !== TF && tW.length !== TF.length) return tW.length < TF.length
          }
          return !(AF && !bW)
        }(rW, "7.0.0"),
        mW = dF(dF(dF(dF(dF(dF({
          "fa-beat": WF,
          "fa-fade": SF,
          "fa-beat-fade": CF,
          "fa-bounce": AF,
          "fa-shake": uF,
          "fa-flash": hF,
          "fa-spin": bW,
          "fa-spin-reverse": RF,
          "fa-spin-pulse": PF,
          "fa-pulse": eF,
          "fa-fw": EF,
          "fa-inverse": QF,
          "fa-border": gW,
          "fa-li": tW,
          "fa-flip": !0 === TF,
          "fa-flip-horizontal": "horizontal" === TF || "both" === TF,
          "fa-flip-vertical": "vertical" === TF || "both" === TF
        }, "fa-".concat(aW), "undefined" !== typeof aW && null !== aW), "fa-rotate-".concat(kW), "undefined" !== typeof kW && null !== kW && 0 !== kW), "fa-pull-".concat(qW), "undefined" !== typeof qW && null !== qW), "fa-swap-opacity", VF), "fa-rotate-by", LF && NF), "fa-width-auto", LF && DF);
      return Object.keys(mW).map((function(FF) {
        return mW[FF] ? FF : null
      })).filter((function(FF) {
        return FF
      }))
    }

    function TF(FF) {
      return WF = FF, (WF -= 0) === WF ? FF : (FF = FF.replace(/[\-_\s]+(.)?/g, (function(FF, WF) {
        return WF ? WF.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + FF.substr(1);
      var WF
    }
    var aW = ["style"];
    var kW = !1;
    try {
      kW = !0
    } catch (mW) {}

    function qW(FF) {
      return FF && "object" === EF(FF) && FF.prefix && FF.iconName && FF.icon ? FF : CF.parse.icon ? CF.parse.icon(FF) : null === FF ? null : FF && "object" === EF(FF) && FF.prefix && FF.iconName ? FF : Array.isArray(FF) && 2 === FF.length ? {
        prefix: FF[0],
        iconName: FF[1]
      } : "string" === typeof FF ? {
        prefix: "fas",
        iconName: FF
      } : void 0
    }

    function VF(FF, WF) {
      return Array.isArray(WF) && WF.length > 0 || !Array.isArray(WF) && WF ? dF({}, FF, WF) : {}
    }
    var NF = {
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
      DF = hF.forwardRef((function(FF, WF) {
        var SF = RF(RF({}, NF), FF),
          AF = SF.icon,
          uF = SF.mask,
          hF = SF.symbol,
          bW = SF.className,
          dF = SF.title,
          PF = SF.titleId,
          iW = SF.maskId,
          EF = qW(AF),
          QF = VF("classes", [].concat(eF(tW(SF)), eF((bW || "").split(" ")))),
          rW = VF("transform", "string" === typeof SF.transform ? CF.parse.transform(SF.transform) : SF.transform),
          gW = VF("mask", qW(uF)),
          TF = (0, CF.icon)(EF, RF(RF(RF(RF({}, QF), rW), gW), {}, {
            symbol: hF,
            title: dF,
            titleId: PF,
            maskId: iW
          }));
        if (!TF) return function() {
          var FF;
          !kW && console && "function" === typeof console.error && (FF = console).error.apply(FF, arguments)
        }("Could not find icon", EF), null;
        var aW = TF.abstract,
          DF = {
            ref: WF
          };
        return Object.keys(SF).forEach((function(FF) {
          NF.hasOwnProperty(FF) || (DF[FF] = SF[FF])
        })), LF(aW[0], DF)
      }));
    DF.displayName = "FontAwesomeIcon", DF.propTypes = {
      beat: uF().bool,
      border: uF().bool,
      beatFade: uF().bool,
      bounce: uF().bool,
      className: uF().string,
      fade: uF().bool,
      flash: uF().bool,
      mask: uF().oneOfType([uF().object, uF().array, uF().string]),
      maskId: uF().string,
      fixedWidth: uF().bool,
      inverse: uF().bool,
      flip: uF().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: uF().oneOfType([uF().object, uF().array, uF().string]),
      listItem: uF().bool,
      pull: uF().oneOf(["right", "left"]),
      pulse: uF().bool,
      rotation: uF().oneOf([0, 90, 180, 270]),
      rotateBy: uF().bool,
      shake: uF().bool,
      size: uF().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: uF().bool,
      spinPulse: uF().bool,
      spinReverse: uF().bool,
      symbol: uF().oneOfType([uF().bool, uF().string]),
      title: uF().string,
      titleId: uF().string,
      transform: uF().oneOfType([uF().string, uF().object]),
      swapOpacity: uF().bool,
      widthAuto: uF().bool
    };
    var LF = function FF(WF, SF) {
      var CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof SF) return SF;
      var AF = (SF.children || []).map((function(SF) {
          return FF(WF, SF)
        })),
        uF = Object.keys(SF.attributes || {}).reduce((function(FF, WF) {
          var CF = SF.attributes[WF];
          switch (WF) {
            case "class":
              FF.attrs.className = CF, delete SF.attributes.class;
              break;
            case "style":
              FF.attrs.style = CF.split(";").map((function(FF) {
                return FF.trim()
              })).filter((function(FF) {
                return FF
              })).reduce((function(FF, WF) {
                var SF, CF = WF.indexOf(":"),
                  AF = TF(WF.slice(0, CF)),
                  uF = WF.slice(CF + 1).trim();
                return AF.startsWith("webkit") ? FF[(SF = AF, SF.charAt(0).toUpperCase() + SF.slice(1))] = uF : FF[AF] = uF, FF
              }), {});
              break;
            default:
              0 === WF.indexOf("aria-") || 0 === WF.indexOf("data-") ? FF.attrs[WF.toLowerCase()] = CF : FF.attrs[TF(WF)] = CF
          }
          return FF
        }), {
          attrs: {}
        }),
        hF = CF.style,
        bW = void 0 === hF ? {} : hF,
        dF = function(FF, WF) {
          if (null == FF) return {};
          var SF, CF, AF = function(FF, WF) {
            if (null == FF) return {};
            var SF = {};
            for (var CF in FF)
              if ({}.hasOwnProperty.call(FF, CF)) {
                if (-1 !== WF.indexOf(CF)) continue;
                SF[CF] = FF[CF]
              } return SF
          }(FF, WF);
          if (Object.getOwnPropertySymbols) {
            var uF = Object.getOwnPropertySymbols(FF);
            for (CF = 0; CF < uF.length; CF++) SF = uF[CF], -1 === WF.indexOf(SF) && {}.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
          }
          return AF
        }(CF, aW);
      return uF.attrs.style = RF(RF({}, uF.attrs.style), bW), WF.apply(void 0, [SF.tag, RF(RF({}, uF.attrs), dF)].concat(eF(AF)))
    }.bind(null, hF.createElement)
  },
  3969: (FF, WF, SF) => {
    var CF = SF(3976);

    function AF() {}

    function uF() {}
    uF.resetWarningCache = AF, FF.exports = function() {
      function FF(FF, WF, SF, AF, uF, hF) {
        if (hF !== CF) {
          var bW = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw bW.name = "Invariant Violation", bW
        }
      }

      function WF() {
        return FF
      }
      FF.isRequired = FF;
      var SF = {
        array: FF,
        bigint: FF,
        bool: FF,
        func: FF,
        number: FF,
        object: FF,
        string: FF,
        symbol: FF,
        any: FF,
        arrayOf: WF,
        element: FF,
        elementType: FF,
        instanceOf: WF,
        node: FF,
        objectOf: WF,
        oneOf: WF,
        oneOfType: WF,
        shape: WF,
        exact: WF,
        checkPropTypes: uF,
        resetWarningCache: AF
      };
      return SF.PropTypes = SF, SF
    }
  },
  3961: (FF, WF, SF) => {
    FF.exports = SF(3969)()
  },
  3976: FF => {
    FF.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5646: (FF, WF, SF) => {
    function CF(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function AF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, iW(CF.key), CF)
      }
    }

    function uF(FF, WF) {
      var SF = "undefined" != typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
      if (!SF) {
        if (Array.isArray(FF) || (SF = EF(FF)) || WF && FF && "number" == typeof FF.length) {
          SF && (FF = SF);
          var CF = 0,
            AF = function() {};
          return {
            s: AF,
            n: function() {
              return CF >= FF.length ? {
                done: !0
              } : {
                done: !1,
                value: FF[CF++]
              }
            },
            e: function(FF) {
              throw FF
            },
            f: AF
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var uF, hF = !0,
        bW = !1;
      return {
        s: function() {
          SF = SF.call(FF)
        },
        n: function() {
          var FF = SF.next();
          return hF = FF.done, FF
        },
        e: function(FF) {
          bW = !0, uF = FF
        },
        f: function() {
          try {
            hF || null == SF.return || SF.return()
          } finally {
            if (bW) throw uF
          }
        }
      }
    }

    function hF(FF, WF, SF) {
      return (WF = iW(WF)) in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function bW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function dF(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? bW(Object(SF), !0).forEach((function(WF) {
          hF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : bW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function PF(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        var SF = null == FF ? null : "undefined" != typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
        if (null != SF) {
          var CF, AF, uF, hF, bW = [],
            dF = !0,
            PF = !1;
          try {
            if (uF = (SF = SF.call(FF)).next, 0 === WF) {
              if (Object(SF) !== SF) return;
              dF = !1
            } else
              for (; !(dF = (CF = uF.call(SF)).done) && (bW.push(CF.value), bW.length !== WF); dF = !0);
          } catch (FF) {
            PF = !0, AF = FF
          } finally {
            try {
              if (!dF && null != SF.return && (hF = SF.return(), Object(hF) !== hF)) return
            } finally {
              if (PF) throw AF
            }
          }
          return bW
        }
      }(FF, WF) || EF(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function RF(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return CF(FF)
      }(FF) || function(FF) {
        if ("undefined" != typeof Symbol && null != FF[Symbol.iterator] || null != FF["@@iterator"]) return Array.from(FF)
      }(FF) || EF(FF) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iW(FF) {
      var WF = function(FF, WF) {
        if ("object" != typeof FF || !FF) return FF;
        var SF = FF[Symbol.toPrimitive];
        if (void 0 !== SF) {
          var CF = SF.call(FF, WF || "default");
          if ("object" != typeof CF) return CF;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WF ? String : Number)(FF)
      }(FF, "string");
      return "symbol" == typeof WF ? WF : WF + ""
    }

    function eF(FF) {
      return eF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, eF(FF)
    }

    function EF(FF, WF) {
      if (FF) {
        if ("string" == typeof FF) return CF(FF, WF);
        var SF = {}.toString.call(FF).slice(8, -1);
        return "Object" === SF && FF.constructor && (SF = FF.constructor.name), "Map" === SF || "Set" === SF ? Array.from(FF) : "Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF) ? CF(FF, WF) : void 0
      }
    }
    SF.r(WF), SF.d(WF, {
      api: () => vC,
      config: () => SA,
      counter: () => iu,
      dom: () => AA,
      findIconDefinition: () => hA,
      icon: () => dA,
      layer: () => PA,
      library: () => CA,
      noAuto: () => WA,
      parse: () => uA,
      text: () => RA,
      toHtml: () => bu
    });
    var QF = function() {},
      rW = {},
      gW = {},
      tW = null,
      TF = {
        mark: QF,
        measure: QF
      };
    try {
      "undefined" !== typeof window && (rW = window), "undefined" !== typeof document && (gW = document), "undefined" !== typeof MutationObserver && (tW = MutationObserver), "undefined" !== typeof performance && (TF = performance)
    } catch (KF) {}
    var aW, kW, qW = (rW.navigator || {}).userAgent,
      VF = void 0 === qW ? "" : qW,
      NF = rW,
      DF = gW,
      LF = tW,
      mW = TF,
      OF = (NF.document, !!DF.documentElement && !!DF.head && "function" === typeof DF.addEventListener && "function" === typeof DF.createElement),
      xW = ~VF.indexOf("MSIE") || ~VF.indexOf("Trident/"),
      ZF = {
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
      oF = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      YF = "classic",
      MF = "duotone",
      cW = "sharp",
      GF = "sharp-duotone",
      zW = "chisel",
      IF = "etch",
      fF = "graphite",
      yW = "jelly",
      sF = "jelly-duo",
      nF = "jelly-fill",
      HF = "notdog",
      KF = "notdog-duo",
      wF = "slab",
      XF = "slab-press",
      UF = "thumbprint",
      BF = "utility",
      jW = "utility-duo",
      vW = "utility-fill",
      JF = "whiteboard",
      pF = [YF, MF, cW, GF, zW, IF, fF, yW, sF, nF, HF, KF, wF, XF, UF, BF, jW, vW, JF],
      lF = (hF(hF(hF(hF(hF(hF(hF(hF(hF(hF(aW = {}, YF, "Classic"), MF, "Duotone"), cW, "Sharp"), GF, "Sharp Duotone"), zW, "Chisel"), IF, "Etch"), fF, "Graphite"), yW, "Jelly"), sF, "Jelly Duo"), nF, "Jelly Fill"), hF(hF(hF(hF(hF(hF(hF(hF(hF(aW, HF, "Notdog"), KF, "Notdog Duo"), wF, "Slab"), XF, "Slab Press"), UF, "Thumbprint"), BF, "Utility"), jW, "Utility Duo"), vW, "Utility Fill"), JF, "Whiteboard"), new Map([
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
      FW = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      WW = {
        fak: "kit",
        "fa-kit": "kit"
      },
      SW = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      CW = (hF(hF({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      AW = {
        "kit-duotone": "fakd"
      },
      uW = "duotone-group",
      hW = "swap-opacity",
      bS = "primary",
      dW = "secondary",
      PW = (hF(hF(hF(hF(hF(hF(hF(hF(hF(hF(kW = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), hF(hF(hF(hF(hF(hF(hF(hF(hF(kW, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), hF(hF({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      RW = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      iS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      eW = iS.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      EW = [].concat(RF(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", uW, hW, bS, dW]).concat(iS.map((function(FF) {
        return "".concat(FF, "x")
      }))).concat(eW.map((function(FF) {
        return "w-".concat(FF)
      }))),
      QW = "___FONT_AWESOME___",
      rS = "svg-inline--fa",
      gS = "data-fa-i2svg",
      tS = "data-fa-pseudo-element",
      TW = "data-prefix",
      aS = "data-icon",
      kS = "fontawesome-i2svg",
      qS = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      VW = ["::before", "::after", ":before", ":after"],
      NW = function() {
        try {
          return !0
        } catch (FF) {
          return !1
        }
      }();

    function DW(FF) {
      return new Proxy(FF, {
        get: function(FF, WF) {
          return WF in FF ? FF[WF] : FF[YF]
        }
      })
    }
    var LW = dF({}, ZF);
    LW[YF] = dF(dF(dF(dF({}, {
      "fa-duotone": "duotone"
    }), ZF[YF]), WW), SW);
    var mS = DW(LW),
      OW = dF({}, {
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
    OW[YF] = dF(dF(dF(dF({}, {
      duotone: "fad"
    }), OW[YF]), CW), AW);
    var xS = DW(OW),
      ZW = dF({}, PW);
    ZW[YF] = dF(dF({}, ZW[YF]), {
      fak: "fa-kit"
    });
    var oW = DW(ZW),
      YW = dF({}, {
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
    YW[YF] = dF(dF({}, YW[YF]), {
      "fa-kit": "fak"
    });
    DW(YW);
    var MW = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      cS = "fa-layers-text",
      GW = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      zS = (DW(dF({}, {
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
      IW = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      fW = [].concat(RF(["kit"]), RF(EW)),
      yS = NF.FontAwesomeConfig || {};
    if (DF && "function" === typeof DF.querySelector) {
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
      ].forEach((function(FF) {
        var WF = PF(FF, 2),
          SF = WF[0],
          CF = WF[1],
          AF = function(FF) {
            return "" === FF || "false" !== FF && ("true" === FF || FF)
          }(function(FF) {
            var WF = DF.querySelector("script[" + FF + "]");
            if (WF) return WF.getAttribute(FF)
          }(SF));
        void 0 !== AF && null !== AF && (yS[CF] = AF)
      }))
    }
    var sW = {
      styleDefault: "solid",
      familyDefault: YF,
      cssPrefix: "fa",
      replacementClass: rS,
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
    yS.familyPrefix && (yS.cssPrefix = yS.familyPrefix);
    var nW = dF(dF({}, sW), yS);
    nW.autoReplaceSvg || (nW.observeMutations = !1);
    var HW = {};
    Object.keys(sW).forEach((function(FF) {
      Object.defineProperty(HW, FF, {
        enumerable: !0,
        set: function(WF) {
          nW[FF] = WF, KW.forEach((function(FF) {
            return FF(HW)
          }))
        },
        get: function() {
          return nW[FF]
        }
      })
    })), Object.defineProperty(HW, "familyPrefix", {
      enumerable: !0,
      set: function(FF) {
        nW.cssPrefix = FF, KW.forEach((function(FF) {
          return FF(HW)
        }))
      },
      get: function() {
        return nW.cssPrefix
      }
    }), NF.FontAwesomeConfig = HW;
    var KW = [];
    var wW = 16,
      XW = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function UW() {
      for (var FF = 12, WF = ""; FF-- > 0;) WF += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return WF
    }

    function BW(FF) {
      for (var WF = [], SF = (FF || []).length >>> 0; SF--;) WF[SF] = FF[SF];
      return WF
    }

    function jS(FF) {
      return FF.classList ? BW(FF.classList) : (FF.getAttribute("class") || "").split(" ").filter((function(FF) {
        return FF
      }))
    }

    function vS(FF) {
      return "".concat(FF).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function JW(FF) {
      return Object.keys(FF || {}).reduce((function(WF, SF) {
        return WF + "".concat(SF, ": ").concat(FF[SF].trim(), ";")
      }), "")
    }

    function pW(FF) {
      return FF.size !== XW.size || FF.x !== XW.x || FF.y !== XW.y || FF.rotate !== XW.rotate || FF.flipX || FF.flipY
    }

    function lW() {
      var FF = "fa",
        WF = rS,
        SF = HW.cssPrefix,
        CF = HW.replacementClass,
        AF = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (SF !== FF || CF !== WF) {
        var uF = new RegExp("\\.".concat(FF, "\\-"), "g"),
          hF = new RegExp("\\--".concat(FF, "\\-"), "g"),
          bW = new RegExp("\\.".concat(WF), "g");
        AF = AF.replace(uF, ".".concat(SF, "-")).replace(hF, "--".concat(SF, "-")).replace(bW, ".".concat(CF))
      }
      return AF
    }
    var FS = !1;

    function WS() {
      HW.autoAddCss && !FS && (! function(FF) {
        if (FF && OF) {
          var WF = DF.createElement("style");
          WF.setAttribute("type", "text/css"), WF.innerHTML = FF;
          for (var SF = DF.head.childNodes, CF = null, AF = SF.length - 1; AF > -1; AF--) {
            var uF = SF[AF],
              hF = (uF.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(hF) > -1 && (CF = uF)
          }
          DF.head.insertBefore(WF, CF)
        }
      }(lW()), FS = !0)
    }
    var SS = {
        mixout: function() {
          return {
            dom: {
              css: lW,
              insertCss: WS
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              WS()
            },
            beforeI2svg: function() {
              WS()
            }
          }
        }
      },
      CS = NF || {};
    CS[QW] || (CS[QW] = {}), CS[QW].styles || (CS[QW].styles = {}), CS[QW].hooks || (CS[QW].hooks = {}), CS[QW].shims || (CS[QW].shims = []);
    var AS = CS[QW],
      uS = [],
      hS = function() {
        DF.removeEventListener("DOMContentLoaded", hS), bC = 1, uS.map((function(FF) {
          return FF()
        }))
      },
      bC = !1;

    function dS(FF) {
      var WF = FF.tag,
        SF = FF.attributes,
        CF = void 0 === SF ? {} : SF,
        AF = FF.children,
        uF = void 0 === AF ? [] : AF;
      return "string" === typeof FF ? vS(FF) : "<".concat(WF, " ").concat(function(FF) {
        return Object.keys(FF || {}).reduce((function(WF, SF) {
          return WF + "".concat(SF, '="').concat(vS(FF[SF]), '" ')
        }), "").trim()
      }(CF), ">").concat(uF.map(dS).join(""), "</").concat(WF, ">")
    }

    function PS(FF, WF, SF) {
      if (FF && FF[WF] && FF[WF][SF]) return {
        prefix: WF,
        iconName: SF,
        icon: FF[WF][SF]
      }
    }
    OF && ((bC = (DF.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DF.readyState)) || DF.addEventListener("DOMContentLoaded", hS));
    var RS = function(FF, WF, SF, CF) {
      var AF, uF, hF, bW = Object.keys(FF),
        dF = bW.length,
        PF = void 0 !== CF ? function(FF, WF) {
          return function(SF, CF, AF, uF) {
            return FF.call(WF, SF, CF, AF, uF)
          }
        }(WF, CF) : WF;
      for (void 0 === SF ? (AF = 1, hF = FF[bW[0]]) : (AF = 0, hF = SF); AF < dF; AF++) hF = PF(hF, FF[uF = bW[AF]], uF, FF);
      return hF
    };

    function iC(FF) {
      return 1 !== RF(FF).length ? null : FF.codePointAt(0).toString(16)
    }

    function eS(FF) {
      return Object.keys(FF).reduce((function(WF, SF) {
        var CF = FF[SF];
        return !!CF.icon ? WF[CF.iconName] = CF.icon : WF[SF] = CF, WF
      }), {})
    }

    function ES(FF, WF) {
      var SF = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        CF = void 0 !== SF && SF,
        AF = eS(WF);
      "function" !== typeof AS.hooks.addPack || CF ? AS.styles[FF] = dF(dF({}, AS.styles[FF] || {}), AF) : AS.hooks.addPack(FF, eS(WF)), "fas" === FF && ES("fa", WF)
    }
    var QS = AS.styles,
      rC = AS.shims,
      gC = Object.keys(oW),
      tC = gC.reduce((function(FF, WF) {
        return FF[WF] = Object.keys(oW[WF]), FF
      }), {}),
      TS = null,
      aC = {},
      kC = {},
      qC = {},
      VS = {},
      NS = {};

    function DS(FF, WF) {
      var SF, CF = WF.split("-"),
        AF = CF[0],
        uF = CF.slice(1).join("-");
      return AF !== FF || "" === uF || (SF = uF, ~fW.indexOf(SF)) ? null : uF
    }
    var LS, mC = function() {
      var FF = function(FF) {
        return RS(QS, (function(WF, SF, CF) {
          return WF[CF] = RS(SF, FF, {}), WF
        }), {})
      };
      aC = FF((function(FF, WF, SF) {
        (WF[3] && (FF[WF[3]] = SF), WF[2]) && WF[2].filter((function(FF) {
          return "number" === typeof FF
        })).forEach((function(WF) {
          FF[WF.toString(16)] = SF
        }));
        return FF
      })), kC = FF((function(FF, WF, SF) {
        (FF[SF] = SF, WF[2]) && WF[2].filter((function(FF) {
          return "string" === typeof FF
        })).forEach((function(WF) {
          FF[WF] = SF
        }));
        return FF
      })), NS = FF((function(FF, WF, SF) {
        var CF = WF[2];
        return FF[SF] = SF, CF.forEach((function(WF) {
          FF[WF] = SF
        })), FF
      }));
      var WF = "far" in QS || HW.autoFetchSvg,
        SF = RS(rC, (function(FF, SF) {
          var CF = SF[0],
            AF = SF[1],
            uF = SF[2];
          return "far" !== AF || WF || (AF = "fas"), "string" === typeof CF && (FF.names[CF] = {
            prefix: AF,
            iconName: uF
          }), "number" === typeof CF && (FF.unicodes[CF.toString(16)] = {
            prefix: AF,
            iconName: uF
          }), FF
        }), {
          names: {},
          unicodes: {}
        });
      qC = SF.names, VS = SF.unicodes, TS = YS(HW.styleDefault, {
        family: HW.familyDefault
      })
    };

    function OS(FF, WF) {
      return (aC[FF] || {})[WF]
    }

    function xC(FF, WF) {
      return (NS[FF] || {})[WF]
    }

    function ZS(FF) {
      return qC[FF] || {
        prefix: null,
        iconName: null
      }
    }

    function oS() {
      return TS
    }
    LS = function(FF) {
      TS = YS(FF.styleDefault, {
        family: HW.familyDefault
      })
    }, KW.push(LS), mC();

    function YS(FF) {
      var WF = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        SF = void 0 === WF ? YF : WF,
        CF = mS[SF][FF];
      if (SF === MF && !FF) return "fad";
      var AF = xS[SF][FF] || xS[SF][CF],
        uF = FF in AS.styles ? FF : null;
      return AF || uF || null
    }

    function MS(FF) {
      return FF.sort().filter((function(FF, WF, SF) {
        return SF.indexOf(FF) === WF
      }))
    }
    var cC = RW.concat(FW);

    function GS(FF) {
      var WF = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        SF = void 0 !== WF && WF,
        CF = null,
        AF = MS(FF.filter((function(FF) {
          return cC.includes(FF)
        }))),
        uF = MS(FF.filter((function(FF) {
          return !cC.includes(FF)
        }))),
        hF = PF(AF.filter((function(FF) {
          return CF = FF, !oF.includes(FF)
        })), 1)[0],
        bW = void 0 === hF ? null : hF,
        RF = function(FF) {
          var WF = YF,
            SF = gC.reduce((function(FF, WF) {
              return FF[WF] = "".concat(HW.cssPrefix, "-").concat(WF), FF
            }), {});
          return pF.forEach((function(CF) {
            (FF.includes(SF[CF]) || FF.some((function(FF) {
              return tC[CF].includes(FF)
            }))) && (WF = CF)
          })), WF
        }(AF),
        iW = dF(dF({}, function(FF) {
          var WF = [],
            SF = null;
          return FF.forEach((function(FF) {
            var CF = DS(HW.cssPrefix, FF);
            CF ? SF = CF : FF && WF.push(FF)
          })), {
            iconName: SF,
            rest: WF
          }
        }(uF)), {}, {
          prefix: YS(bW, {
            family: RF
          })
        });
      return dF(dF(dF({}, iW), function(FF) {
        var WF = FF.values,
          SF = FF.family,
          CF = FF.canonical,
          AF = FF.givenPrefix,
          uF = void 0 === AF ? "" : AF,
          hF = FF.styles,
          bW = void 0 === hF ? {} : hF,
          dF = FF.config,
          PF = void 0 === dF ? {} : dF,
          RF = SF === MF,
          iW = WF.includes("fa-duotone") || WF.includes("fad"),
          eF = "duotone" === PF.familyDefault,
          EF = "fad" === CF.prefix || "fa-duotone" === CF.prefix;
        !RF && (iW || eF || EF) && (CF.prefix = "fad");
        (WF.includes("fa-brands") || WF.includes("fab")) && (CF.prefix = "fab");
        if (!CF.prefix && zC.includes(SF)) {
          if (Object.keys(bW).find((function(FF) {
              return IS.includes(FF)
            })) || PF.autoFetchSvg) {
            var QF = lF.get(SF).defaultShortPrefixId;
            CF.prefix = QF, CF.iconName = xC(CF.prefix, CF.iconName) || CF.iconName
          }
        }
        "fa" !== CF.prefix && "fa" !== uF || (CF.prefix = oS() || "fas");
        return CF
      }({
        values: FF,
        family: RF,
        styles: QS,
        config: HW,
        canonical: iW,
        givenPrefix: CF
      })), function(FF, WF, SF) {
        var CF = SF.prefix,
          AF = SF.iconName;
        if (FF || !CF || !AF) return {
          prefix: CF,
          iconName: AF
        };
        var uF = "fa" === WF ? ZS(AF) : {},
          hF = xC(CF, AF);
        AF = uF.iconName || hF || AF, "far" !== (CF = uF.prefix || CF) || QS.far || !QS.fas || HW.autoFetchSvg || (CF = "fas");
        return {
          prefix: CF,
          iconName: AF
        }
      }(SF, CF, iW))
    }
    var zC = pF.filter((function(FF) {
        return FF !== YF || FF !== MF
      })),
      IS = Object.keys(PW).filter((function(FF) {
        return FF !== YF
      })).map((function(FF) {
        return Object.keys(PW[FF])
      })).flat();
    var fS = function() {
        return function(FF, WF, SF) {
          return WF && AF(FF.prototype, WF), SF && AF(FF, SF), Object.defineProperty(FF, "prototype", {
            writable: !1
          }), FF
        }((function FF() {
          ! function(FF, WF) {
            if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
          }(this, FF), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var FF = this, WF = arguments.length, SF = new Array(WF), CF = 0; CF < WF; CF++) SF[CF] = arguments[CF];
            var AF = SF.reduce(this._pullDefinitions, {});
            Object.keys(AF).forEach((function(WF) {
              FF.definitions[WF] = dF(dF({}, FF.definitions[WF] || {}), AF[WF]), ES(WF, AF[WF]);
              var SF = oW[YF][WF];
              SF && ES(SF, AF[WF]), mC()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(FF, WF) {
            var SF = WF.prefix && WF.iconName && WF.icon ? {
              0: WF
            } : WF;
            return Object.keys(SF).map((function(WF) {
              var CF = SF[WF],
                AF = CF.prefix,
                uF = CF.iconName,
                hF = CF.icon,
                bW = hF[2];
              FF[AF] || (FF[AF] = {}), bW.length > 0 && bW.forEach((function(WF) {
                "string" === typeof WF && (FF[AF][WF] = hF)
              })), FF[AF][uF] = hF
            })), FF
          }
        }])
      }(),
      yC = [],
      sS = {},
      nS = {},
      HS = Object.keys(nS);

    function KS(FF, WF) {
      for (var SF = arguments.length, CF = new Array(SF > 2 ? SF - 2 : 0), AF = 2; AF < SF; AF++) CF[AF - 2] = arguments[AF];
      return (sS[FF] || []).forEach((function(FF) {
        WF = FF.apply(null, [WF].concat(CF))
      })), WF
    }

    function wS(FF) {
      for (var WF = arguments.length, SF = new Array(WF > 1 ? WF - 1 : 0), CF = 1; CF < WF; CF++) SF[CF - 1] = arguments[CF];
      (sS[FF] || []).forEach((function(FF) {
        FF.apply(null, SF)
      }))
    }

    function XS() {
      var FF = arguments[0],
        WF = Array.prototype.slice.call(arguments, 1);
      return nS[FF] ? nS[FF].apply(null, WF) : void 0
    }

    function US(FF) {
      "fa" === FF.prefix && (FF.prefix = "fas");
      var WF = FF.iconName,
        SF = FF.prefix || oS();
      if (WF) return WF = xC(SF, WF) || WF, PS(BS.definitions, SF, WF) || PS(AS.styles, SF, WF)
    }
    var BS = new fS,
      jC = {
        i2svg: function() {
          var FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return OF ? (wS("beforeI2svg", FF), XS("pseudoElements2svg", FF), XS("i2svg", FF)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var FF, WF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            SF = WF.autoReplaceSvgRoot;
          !1 === HW.autoReplaceSvg && (HW.autoReplaceSvg = !0), HW.observeMutations = !0, FF = function() {
            JS({
              autoReplaceSvgRoot: SF
            }), wS("watch", WF)
          }, OF && (bC ? setTimeout(FF, 0) : uS.push(FF))
        }
      },
      vC = {
        noAuto: function() {
          HW.autoReplaceSvg = !1, HW.observeMutations = !1, wS("noAuto")
        },
        config: HW,
        dom: jC,
        parse: {
          icon: function(FF) {
            if (null === FF) return null;
            if ("object" === eF(FF) && FF.prefix && FF.iconName) return {
              prefix: FF.prefix,
              iconName: xC(FF.prefix, FF.iconName) || FF.iconName
            };
            if (Array.isArray(FF) && 2 === FF.length) {
              var WF = 0 === FF[1].indexOf("fa-") ? FF[1].slice(3) : FF[1],
                SF = YS(FF[0]);
              return {
                prefix: SF,
                iconName: xC(SF, WF) || WF
              }
            }
            if ("string" === typeof FF && (FF.indexOf("".concat(HW.cssPrefix, "-")) > -1 || FF.match(MW))) {
              var CF = GS(FF.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: CF.prefix || oS(),
                iconName: xC(CF.prefix, CF.iconName) || CF.iconName
              }
            }
            if ("string" === typeof FF) {
              var AF = oS();
              return {
                prefix: AF,
                iconName: xC(AF, FF) || FF
              }
            }
          }
        },
        library: BS,
        findIconDefinition: US,
        toHtml: dS
      },
      JS = function() {
        var FF = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          WF = void 0 === FF ? DF : FF;
        (Object.keys(AS.styles).length > 0 || HW.autoFetchSvg) && OF && HW.autoReplaceSvg && vC.dom.i2svg({
          node: WF
        })
      };

    function pS(FF, WF) {
      return Object.defineProperty(FF, "abstract", {
        get: WF
      }), Object.defineProperty(FF, "html", {
        get: function() {
          return FF.abstract.map((function(FF) {
            return dS(FF)
          }))
        }
      }), Object.defineProperty(FF, "node", {
        get: function() {
          if (OF) {
            var WF = DF.createElement("div");
            return WF.innerHTML = FF.html, WF.children
          }
        }
      }), FF
    }

    function lS(FF) {
      var WF = FF.icons,
        SF = WF.main,
        CF = WF.mask,
        AF = FF.prefix,
        uF = FF.iconName,
        hF = FF.transform,
        bW = FF.symbol,
        PF = FF.maskId,
        RF = FF.extra,
        iW = FF.watchable,
        eF = void 0 !== iW && iW,
        EF = CF.found ? CF : SF,
        QF = EF.width,
        rW = EF.height,
        gW = [HW.replacementClass, uF ? "".concat(HW.cssPrefix, "-").concat(uF) : ""].filter((function(FF) {
          return -1 === RF.classes.indexOf(FF)
        })).filter((function(FF) {
          return "" !== FF || !!FF
        })).concat(RF.classes).join(" "),
        tW = {
          children: [],
          attributes: dF(dF({}, RF.attributes), {}, {
            "data-prefix": AF,
            "data-icon": uF,
            class: gW,
            role: RF.attributes.role || "img",
            viewBox: "0 0 ".concat(QF, " ").concat(rW)
          })
        };
      (function(FF) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(WF) {
          return WF in FF
        }))
      })(RF.attributes) || RF.attributes["aria-hidden"] || (tW.attributes["aria-hidden"] = "true"), eF && (tW.attributes[gS] = "");
      var TF = dF(dF({}, tW), {}, {
          prefix: AF,
          iconName: uF,
          main: SF,
          mask: CF,
          maskId: PF,
          transform: hF,
          symbol: bW,
          styles: dF({}, RF.styles)
        }),
        aW = CF.found && SF.found ? XS("generateAbstractMask", TF) || {
          children: [],
          attributes: {}
        } : XS("generateAbstractIcon", TF) || {
          children: [],
          attributes: {}
        },
        kW = aW.children,
        qW = aW.attributes;
      return TF.children = kW, TF.attributes = qW, bW ? function(FF) {
        var WF = FF.prefix,
          SF = FF.iconName,
          CF = FF.children,
          AF = FF.attributes,
          uF = FF.symbol,
          hF = !0 === uF ? "".concat(WF, "-").concat(HW.cssPrefix, "-").concat(SF) : uF;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: dF(dF({}, AF), {}, {
              id: hF
            }),
            children: CF
          }]
        }]
      }(TF) : function(FF) {
        var WF = FF.children,
          SF = FF.main,
          CF = FF.mask,
          AF = FF.attributes,
          uF = FF.styles,
          hF = FF.transform;
        if (pW(hF) && SF.found && !CF.found) {
          var bW = {
            x: SF.width / SF.height / 2,
            y: .5
          };
          AF.style = JW(dF(dF({}, uF), {}, {
            "transform-origin": "".concat(bW.x + hF.x / 16, "em ").concat(bW.y + hF.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: AF,
          children: WF
        }]
      }(TF)
    }

    function FC(FF) {
      var WF = FF.content,
        SF = FF.width,
        CF = FF.height,
        AF = FF.transform,
        uF = FF.extra,
        hF = FF.watchable,
        bW = void 0 !== hF && hF,
        PF = dF(dF({}, uF.attributes), {}, {
          class: uF.classes.join(" ")
        });
      bW && (PF[gS] = "");
      var RF = dF({}, uF.styles);
      pW(AF) && (RF.transform = function(FF) {
        var WF = FF.transform,
          SF = FF.width,
          CF = void 0 === SF ? 16 : SF,
          AF = FF.height,
          uF = void 0 === AF ? 16 : AF,
          hF = FF.startCentered,
          bW = void 0 !== hF && hF,
          dF = "";
        return dF += bW && xW ? "translate(".concat(WF.x / wW - CF / 2, "em, ").concat(WF.y / wW - uF / 2, "em) ") : bW ? "translate(calc(-50% + ".concat(WF.x / wW, "em), calc(-50% + ").concat(WF.y / wW, "em)) ") : "translate(".concat(WF.x / wW, "em, ").concat(WF.y / wW, "em) "), dF += "scale(".concat(WF.size / wW * (WF.flipX ? -1 : 1), ", ").concat(WF.size / wW * (WF.flipY ? -1 : 1), ") "), dF + "rotate(".concat(WF.rotate, "deg) ")
      }({
        transform: AF,
        startCentered: !0,
        width: SF,
        height: CF
      }), RF["-webkit-transform"] = RF.transform);
      var iW = JW(RF);
      iW.length > 0 && (PF.style = iW);
      var eF = [];
      return eF.push({
        tag: "span",
        attributes: PF,
        children: [WF]
      }), eF
    }
    var WC = AS.styles;

    function SC(FF) {
      var WF = FF[0],
        SF = FF[1],
        CF = PF(FF.slice(4), 1)[0];
      return {
        found: !0,
        width: WF,
        height: SF,
        icon: Array.isArray(CF) ? {
          tag: "g",
          attributes: {
            class: "".concat(HW.cssPrefix, "-").concat(IW.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(HW.cssPrefix, "-").concat(IW.SECONDARY),
              fill: "currentColor",
              d: CF[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(HW.cssPrefix, "-").concat(IW.PRIMARY),
              fill: "currentColor",
              d: CF[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: CF
          }
        }
      }
    }
    var CC = {
      found: !1,
      width: 512,
      height: 512
    };

    function AC(FF, WF) {
      var SF = WF;
      return "fa" === WF && null !== HW.styleDefault && (WF = oS()), new Promise((function(CF, AF) {
        if ("fa" === SF) {
          var uF = ZS(FF) || {};
          FF = uF.iconName || FF, WF = uF.prefix || WF
        }
        if (FF && WF && WC[WF] && WC[WF][FF]) return CF(SC(WC[WF][FF]));
        ! function(FF, WF) {
          NW || HW.showMissingIcons || !FF || console.error('Icon with name "'.concat(FF, '" and prefix "').concat(WF, '" is missing.'))
        }(FF, WF), CF(dF(dF({}, CC), {}, {
          icon: HW.showMissingIcons && FF && XS("missingIconAbstract") || {}
        }))
      }))
    }
    var uC = function() {},
      hC = HW.measurePerformance && mW && mW.mark && mW.measure ? mW : {
        mark: uC,
        measure: uC
      },
      bA = 'FA "7.2.0"',
      dC = function(FF) {
        hC.mark("".concat(bA, " ").concat(FF, " ends")), hC.measure("".concat(bA, " ").concat(FF), "".concat(bA, " ").concat(FF, " begins"), "".concat(bA, " ").concat(FF, " ends"))
      },
      PC = function(FF) {
        return hC.mark("".concat(bA, " ").concat(FF, " begins")),
          function() {
            return dC(FF)
          }
      },
      RC = function() {};

    function iA(FF) {
      return "string" === typeof(FF.getAttribute ? FF.getAttribute(gS) : null)
    }

    function eC(FF) {
      return DF.createElementNS("http://www.w3.org/2000/svg", FF)
    }

    function EC(FF) {
      return DF.createElement(FF)
    }

    function QC(FF) {
      var WF = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        SF = void 0 === WF ? "svg" === FF.tag ? eC : EC : WF;
      if ("string" === typeof FF) return DF.createTextNode(FF);
      var CF = SF(FF.tag);
      return Object.keys(FF.attributes || []).forEach((function(WF) {
        CF.setAttribute(WF, FF.attributes[WF])
      })), (FF.children || []).forEach((function(FF) {
        CF.appendChild(QC(FF, {
          ceFn: SF
        }))
      })), CF
    }
    var rA = {
      replace: function(FF) {
        var WF = FF[0];
        if (WF.parentNode)
          if (FF[1].forEach((function(FF) {
              WF.parentNode.insertBefore(QC(FF), WF)
            })), null === WF.getAttribute(gS) && HW.keepOriginalSource) {
            var SF = DF.createComment(function(FF) {
              var WF = " ".concat(FF.outerHTML, " ");
              return "".concat(WF, "Font Awesome fontawesome.com ")
            }(WF));
            WF.parentNode.replaceChild(SF, WF)
          } else WF.remove()
      },
      nest: function(FF) {
        var WF = FF[0],
          SF = FF[1];
        if (~jS(WF).indexOf(HW.replacementClass)) return rA.replace(FF);
        var CF = new RegExp("".concat(HW.cssPrefix, "-.*"));
        if (delete SF[0].attributes.id, SF[0].attributes.class) {
          var AF = SF[0].attributes.class.split(" ").reduce((function(FF, WF) {
            return WF === HW.replacementClass || WF.match(CF) ? FF.toSvg.push(WF) : FF.toNode.push(WF), FF
          }), {
            toNode: [],
            toSvg: []
          });
          SF[0].attributes.class = AF.toSvg.join(" "), 0 === AF.toNode.length ? WF.removeAttribute("class") : WF.setAttribute("class", AF.toNode.join(" "))
        }
        var uF = SF.map((function(FF) {
          return dS(FF)
        })).join("\n");
        WF.setAttribute(gS, ""), WF.innerHTML = uF
      }
    };

    function gA(FF) {
      FF()
    }

    function tA(FF, WF) {
      var SF = "function" === typeof WF ? WF : RC;
      if (0 === FF.length) SF();
      else {
        var CF = gA;
        "async" === HW.mutateApproach && (CF = NF.requestAnimationFrame || gA), CF((function() {
          var WF = !0 === HW.autoReplaceSvg ? rA.replace : rA[HW.autoReplaceSvg] || rA.replace,
            CF = PC("mutate");
          FF.map(WF), CF(), SF()
        }))
      }
    }
    var TC = !1;

    function aA() {
      TC = !0
    }

    function kA() {
      TC = !1
    }
    var qA = null;

    function VC(FF) {
      if (LF && HW.observeMutations) {
        var WF = FF.treeCallback,
          SF = void 0 === WF ? RC : WF,
          CF = FF.nodeCallback,
          AF = void 0 === CF ? RC : CF,
          uF = FF.pseudoElementsCallback,
          hF = void 0 === uF ? RC : uF,
          bW = FF.observeMutationsRoot,
          dF = void 0 === bW ? DF : bW;
        qA = new LF((function(FF) {
          if (!TC) {
            var WF = oS();
            BW(FF).forEach((function(FF) {
              if ("childList" === FF.type && FF.addedNodes.length > 0 && !iA(FF.addedNodes[0]) && (HW.searchPseudoElements && hF(FF.target), SF(FF.target)), "attributes" === FF.type && FF.target.parentNode && HW.searchPseudoElements && hF([FF.target], !0), "attributes" === FF.type && iA(FF.target) && ~zS.indexOf(FF.attributeName))
                if ("class" === FF.attributeName && function(FF) {
                    var WF = FF.getAttribute ? FF.getAttribute(TW) : null,
                      SF = FF.getAttribute ? FF.getAttribute(aS) : null;
                    return WF && SF
                  }(FF.target)) {
                  var CF = GS(jS(FF.target)),
                    uF = CF.prefix,
                    bW = CF.iconName;
                  FF.target.setAttribute(TW, uF || WF), bW && FF.target.setAttribute(aS, bW)
                } else(dF = FF.target) && dF.classList && dF.classList.contains && dF.classList.contains(HW.replacementClass) && AF(FF.target);
              var dF
            }))
          }
        })), OF && qA.observe(dF, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function NC(FF) {
      var WF, SF, CF = FF.getAttribute("data-prefix"),
        AF = FF.getAttribute("data-icon"),
        uF = void 0 !== FF.innerText ? FF.innerText.trim() : "",
        hF = GS(jS(FF));
      return hF.prefix || (hF.prefix = oS()), CF && AF && (hF.prefix = CF, hF.iconName = AF), hF.iconName && hF.prefix || (hF.prefix && uF.length > 0 && (hF.iconName = (WF = hF.prefix, SF = FF.innerText, (kC[WF] || {})[SF] || OS(hF.prefix, iC(FF.innerText)))), !hF.iconName && HW.autoFetchSvg && FF.firstChild && FF.firstChild.nodeType === Node.TEXT_NODE && (hF.iconName = FF.firstChild.data)), hF
    }

    function DC(FF) {
      var WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        SF = NC(FF),
        CF = SF.iconName,
        AF = SF.prefix,
        uF = SF.rest,
        hF = function(FF) {
          return BW(FF.attributes).reduce((function(FF, WF) {
            return "class" !== FF.name && "style" !== FF.name && (FF[WF.name] = WF.value), FF
          }), {})
        }(FF),
        bW = KS("parseNodeAttributes", {}, FF),
        PF = WF.styleParser ? function(FF) {
          var WF = FF.getAttribute("style"),
            SF = [];
          return WF && (SF = WF.split(";").reduce((function(FF, WF) {
            var SF = WF.split(":"),
              CF = SF[0],
              AF = SF.slice(1);
            return CF && AF.length > 0 && (FF[CF] = AF.join(":").trim()), FF
          }), {})), SF
        }(FF) : [];
      return dF({
        iconName: CF,
        prefix: AF,
        transform: XW,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: uF,
          styles: PF,
          attributes: hF
        }
      }, bW)
    }
    var LC = AS.styles;

    function mA(FF) {
      var WF = "nest" === HW.autoReplaceSvg ? DC(FF, {
        styleParser: !1
      }) : DC(FF);
      return ~WF.extra.classes.indexOf(cS) ? XS("generateLayersText", FF, WF) : XS("generateSvgReplacementMutation", FF, WF)
    }

    function OC(FF) {
      var WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!OF) return Promise.resolve();
      var SF = DF.documentElement.classList,
        CF = function(FF) {
          return SF.add("".concat(kS, "-").concat(FF))
        },
        AF = function(FF) {
          return SF.remove("".concat(kS, "-").concat(FF))
        },
        uF = HW.autoFetchSvg ? [].concat(RF(FW), RF(RW)) : oF.concat(Object.keys(LC));
      uF.includes("fa") || uF.push("fa");
      var hF = [".".concat(cS, ":not([").concat(gS, "])")].concat(uF.map((function(FF) {
        return ".".concat(FF, ":not([").concat(gS, "])")
      }))).join(", ");
      if (0 === hF.length) return Promise.resolve();
      var bW = [];
      try {
        bW = BW(FF.querySelectorAll(hF))
      } catch (iW) {}
      if (!(bW.length > 0)) return Promise.resolve();
      CF("pending"), AF("complete");
      var dF = PC("onTree"),
        PF = bW.reduce((function(FF, WF) {
          try {
            var SF = mA(WF);
            SF && FF.push(SF)
          } catch (iW) {
            NW || "MissingIcon" === iW.name && console.error(iW)
          }
          return FF
        }), []);
      return new Promise((function(FF, SF) {
        Promise.all(PF).then((function(SF) {
          tA(SF, (function() {
            CF("active"), CF("complete"), AF("pending"), "function" === typeof WF && WF(), dF(), FF()
          }))
        })).catch((function(FF) {
          dF(), SF(FF)
        }))
      }))
    }

    function xA(FF) {
      var WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      mA(FF).then((function(FF) {
        FF && tA([FF], WF)
      }))
    }
    var ZC = function(FF) {
        var WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          SF = WF.transform,
          CF = void 0 === SF ? XW : SF,
          AF = WF.symbol,
          uF = void 0 !== AF && AF,
          hF = WF.mask,
          bW = void 0 === hF ? null : hF,
          PF = WF.maskId,
          RF = void 0 === PF ? null : PF,
          iW = WF.classes,
          eF = void 0 === iW ? [] : iW,
          EF = WF.attributes,
          QF = void 0 === EF ? {} : EF,
          rW = WF.styles,
          gW = void 0 === rW ? {} : rW;
        if (FF) {
          var tW = FF.prefix,
            TF = FF.iconName,
            aW = FF.icon;
          return pS(dF({
            type: "icon"
          }, FF), (function() {
            return wS("beforeDOMElementCreation", {
              iconDefinition: FF,
              params: WF
            }), lS({
              icons: {
                main: SC(aW),
                mask: bW ? SC(bW.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: tW,
              iconName: TF,
              transform: dF(dF({}, XW), CF),
              symbol: uF,
              maskId: RF,
              extra: {
                attributes: QF,
                styles: gW,
                classes: eF
              }
            })
          }))
        }
      },
      oC = {
        mixout: function() {
          return {
            icon: (FF = ZC, function(WF) {
              var SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                CF = (WF || {}).icon ? WF : US(WF || {}),
                AF = SF.mask;
              return AF && (AF = (AF || {}).icon ? AF : US(AF || {})), FF(CF, dF(dF({}, SF), {}, {
                mask: AF
              }))
            })
          };
          var FF
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(FF) {
              return FF.treeCallback = OC, FF.nodeCallback = xA, FF
            }
          }
        },
        provides: function(FF) {
          FF.i2svg = function(FF) {
            var WF = FF.node,
              SF = void 0 === WF ? DF : WF,
              CF = FF.callback;
            return OC(SF, void 0 === CF ? function() {} : CF)
          }, FF.generateSvgReplacementMutation = function(FF, WF) {
            var SF = WF.iconName,
              CF = WF.prefix,
              AF = WF.transform,
              uF = WF.symbol,
              hF = WF.mask,
              bW = WF.maskId,
              dF = WF.extra;
            return new Promise((function(WF, RF) {
              Promise.all([AC(SF, CF), hF.iconName ? AC(hF.iconName, hF.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(hF) {
                var RF = PF(hF, 2),
                  iW = RF[0],
                  eF = RF[1];
                WF([FF, lS({
                  icons: {
                    main: iW,
                    mask: eF
                  },
                  prefix: CF,
                  iconName: SF,
                  transform: AF,
                  symbol: uF,
                  maskId: bW,
                  extra: dF,
                  watchable: !0
                })])
              })).catch(RF)
            }))
          }, FF.generateAbstractIcon = function(FF) {
            var WF, SF = FF.children,
              CF = FF.attributes,
              AF = FF.main,
              uF = FF.transform,
              hF = JW(FF.styles);
            return hF.length > 0 && (CF.style = hF), pW(uF) && (WF = XS("generateAbstractTransformGrouping", {
              main: AF,
              transform: uF,
              containerWidth: AF.width,
              iconWidth: AF.width
            })), SF.push(WF || AF.icon), {
              children: SF,
              attributes: CF
            }
          }
        }
      },
      YC = {
        mixout: function() {
          return {
            layer: function(FF) {
              var WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                SF = WF.classes,
                CF = void 0 === SF ? [] : SF;
              return pS({
                type: "layer"
              }, (function() {
                wS("beforeDOMElementCreation", {
                  assembler: FF,
                  params: WF
                });
                var SF = [];
                return FF((function(FF) {
                  Array.isArray(FF) ? FF.map((function(FF) {
                    SF = SF.concat(FF.abstract)
                  })) : SF = SF.concat(FF.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(HW.cssPrefix, "-layers")].concat(RF(CF)).join(" ")
                  },
                  children: SF
                }]
              }))
            }
          }
        }
      },
      MC = {
        mixout: function() {
          return {
            counter: function(FF) {
              var WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                SF = WF.title,
                CF = void 0 === SF ? null : SF,
                AF = WF.classes,
                uF = void 0 === AF ? [] : AF,
                hF = WF.attributes,
                bW = void 0 === hF ? {} : hF,
                PF = WF.styles,
                iW = void 0 === PF ? {} : PF;
              return pS({
                type: "counter",
                content: FF
              }, (function() {
                return wS("beforeDOMElementCreation", {
                    content: FF,
                    params: WF
                  }),
                  function(FF) {
                    var WF = FF.content,
                      SF = FF.extra,
                      CF = dF(dF({}, SF.attributes), {}, {
                        class: SF.classes.join(" ")
                      }),
                      AF = JW(SF.styles);
                    AF.length > 0 && (CF.style = AF);
                    var uF = [];
                    return uF.push({
                      tag: "span",
                      attributes: CF,
                      children: [WF]
                    }), uF
                  }({
                    content: FF.toString(),
                    title: CF,
                    extra: {
                      attributes: bW,
                      styles: iW,
                      classes: ["".concat(HW.cssPrefix, "-layers-counter")].concat(RF(uF))
                    }
                  })
              }))
            }
          }
        }
      },
      cA = {
        mixout: function() {
          return {
            text: function(FF) {
              var WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                SF = WF.transform,
                CF = void 0 === SF ? XW : SF,
                AF = WF.classes,
                uF = void 0 === AF ? [] : AF,
                hF = WF.attributes,
                bW = void 0 === hF ? {} : hF,
                PF = WF.styles,
                iW = void 0 === PF ? {} : PF;
              return pS({
                type: "text",
                content: FF
              }, (function() {
                return wS("beforeDOMElementCreation", {
                  content: FF,
                  params: WF
                }), FC({
                  content: FF,
                  transform: dF(dF({}, XW), CF),
                  extra: {
                    attributes: bW,
                    styles: iW,
                    classes: ["".concat(HW.cssPrefix, "-layers-text")].concat(RF(uF))
                  }
                })
              }))
            }
          }
        },
        provides: function(FF) {
          FF.generateLayersText = function(FF, WF) {
            var SF = WF.transform,
              CF = WF.extra,
              AF = null,
              uF = null;
            if (xW) {
              var hF = parseInt(getComputedStyle(FF).fontSize, 10),
                bW = FF.getBoundingClientRect();
              AF = bW.width / hF, uF = bW.height / hF
            }
            return Promise.resolve([FF, FC({
              content: FF.innerHTML,
              width: AF,
              height: uF,
              transform: SF,
              extra: CF,
              watchable: !0
            })])
          }
        }
      },
      GC = new RegExp('"', "ug"),
      zA = [1105920, 1112319],
      IC = dF(dF(dF(dF({}, {
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
      fC = Object.keys(IC).reduce((function(FF, WF) {
        return FF[WF.toLowerCase()] = IC[WF], FF
      }), {}),
      yA = Object.keys(fC).reduce((function(FF, WF) {
        var SF = fC[WF];
        return FF[WF] = SF[900] || RF(Object.entries(SF))[0][1], FF
      }), {});

    function sC(FF, WF) {
      var SF = "".concat("data-fa-pseudo-element-pending").concat(WF.replace(":", "-"));
      return new Promise((function(CF, AF) {
        if (null !== FF.getAttribute(SF)) return CF();
        var uF = BW(FF.children).filter((function(FF) {
            return FF.getAttribute(tS) === WF
          }))[0],
          hF = NF.getComputedStyle(FF, WF),
          bW = hF.getPropertyValue("font-family"),
          PF = bW.match(GW),
          iW = hF.getPropertyValue("font-weight"),
          eF = hF.getPropertyValue("content");
        if (uF && !PF) return FF.removeChild(uF), CF();
        if (PF && "none" !== eF && "" !== eF) {
          var EF = hF.getPropertyValue("content"),
            QF = function(FF, WF) {
              var SF = FF.replace(/^['"]|['"]$/g, "").toLowerCase(),
                CF = parseInt(WF),
                AF = isNaN(CF) ? "normal" : CF;
              return (fC[SF] || {})[AF] || yA[SF]
            }(bW, iW),
            rW = function(FF) {
              return iC(RF(FF.replace(GC, ""))[0] || "")
            }(EF),
            gW = PF[0].startsWith("FontAwesome"),
            tW = function(FF) {
              var WF = FF.getPropertyValue("font-feature-settings").includes("ss01"),
                SF = FF.getPropertyValue("content").replace(GC, ""),
                CF = SF.codePointAt(0),
                AF = CF >= zA[0] && CF <= zA[1],
                uF = 2 === SF.length && SF[0] === SF[1];
              return AF || uF || WF
            }(hF),
            TF = OS(QF, rW),
            aW = TF;
          if (gW) {
            var kW = function(FF) {
              var WF = VS[FF],
                SF = OS("fas", FF);
              return WF || (SF ? {
                prefix: "fas",
                iconName: SF
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(rW);
            kW.iconName && kW.prefix && (TF = kW.iconName, QF = kW.prefix)
          }
          if (!TF || tW || uF && uF.getAttribute(TW) === QF && uF.getAttribute(aS) === aW) CF();
          else {
            FF.setAttribute(SF, aW), uF && FF.removeChild(uF);
            var qW = {
                iconName: null,
                prefix: null,
                transform: XW,
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
              VF = qW.extra;
            VF.attributes[tS] = WF, AC(TF, QF).then((function(AF) {
              var uF = lS(dF(dF({}, qW), {}, {
                  icons: {
                    main: AF,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: QF,
                  iconName: aW,
                  extra: VF,
                  watchable: !0
                })),
                hF = DF.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === WF ? FF.insertBefore(hF, FF.firstChild) : FF.appendChild(hF), hF.outerHTML = uF.map((function(FF) {
                return dS(FF)
              })).join("\n"), FF.removeAttribute(SF), CF()
            })).catch(AF)
          }
        } else CF()
      }))
    }

    function nC(FF) {
      return Promise.all([sC(FF, "::before"), sC(FF, "::after")])
    }

    function HC(FF) {
      return FF.parentNode !== document.head && !~qS.indexOf(FF.tagName.toUpperCase()) && !FF.getAttribute(tS) && (!FF.parentNode || "svg" !== FF.parentNode.tagName)
    }
    var KC = function(FF) {
        return !!FF && VW.some((function(WF) {
          return FF.includes(WF)
        }))
      },
      wC = function(FF) {
        if (!FF) return [];
        var WF = new Set,
          SF = FF.split(/,(?![^()]*\))/).map((function(FF) {
            return FF.trim()
          }));
        SF = SF.flatMap((function(FF) {
          return FF.includes("(") ? FF : FF.split(",").map((function(FF) {
            return FF.trim()
          }))
        }));
        var CF, AF = uF(SF);
        try {
          for (AF.s(); !(CF = AF.n()).done;) {
            var hF = CF.value;
            if (KC(hF)) {
              var bW = VW.reduce((function(FF, WF) {
                return FF.replace(WF, "")
              }), hF);
              "" !== bW && "*" !== bW && WF.add(bW)
            }
          }
        } catch (dF) {
          AF.e(dF)
        } finally {
          AF.f()
        }
        return WF
      };

    function XC(FF) {
      if (OF) {
        var WF;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) WF = FF;
        else if (HW.searchPseudoElementsFullScan) WF = FF.querySelectorAll("*");
        else {
          var SF, CF = new Set,
            AF = uF(document.styleSheets);
          try {
            for (AF.s(); !(SF = AF.n()).done;) {
              var hF = SF.value;
              try {
                var bW, dF = uF(hF.cssRules);
                try {
                  for (dF.s(); !(bW = dF.n()).done;) {
                    var PF, RF = bW.value,
                      iW = uF(wC(RF.selectorText));
                    try {
                      for (iW.s(); !(PF = iW.n()).done;) {
                        var eF = PF.value;
                        CF.add(eF)
                      }
                    } catch (QF) {
                      iW.e(QF)
                    } finally {
                      iW.f()
                    }
                  }
                } catch (QF) {
                  dF.e(QF)
                } finally {
                  dF.f()
                }
              } catch (rW) {
                HW.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(hF.href, " (").concat(rW.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (QF) {
            AF.e(QF)
          } finally {
            AF.f()
          }
          if (!CF.size) return;
          var EF = Array.from(CF).join(", ");
          try {
            WF = FF.querySelectorAll(EF)
          } catch (gW) {}
        }
        return new Promise((function(FF, SF) {
          var CF = BW(WF).filter(HC).map(nC),
            AF = PC("searchPseudoElements");
          aA(), Promise.all(CF).then((function() {
            AF(), kA(), FF()
          })).catch((function() {
            AF(), kA(), SF()
          }))
        }))
      }
    }
    var UC = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(FF) {
              return FF.pseudoElementsCallback = XC, FF
            }
          }
        },
        provides: function(FF) {
          FF.pseudoElements2svg = function(FF) {
            var WF = FF.node,
              SF = void 0 === WF ? DF : WF;
            HW.searchPseudoElements && XC(SF)
          }
        }
      },
      BC = !1,
      jA = function(FF) {
        return FF.toLowerCase().split(" ").reduce((function(FF, WF) {
          var SF = WF.toLowerCase().split("-"),
            CF = SF[0],
            AF = SF.slice(1).join("-");
          if (CF && "h" === AF) return FF.flipX = !0, FF;
          if (CF && "v" === AF) return FF.flipY = !0, FF;
          if (AF = parseFloat(AF), isNaN(AF)) return FF;
          switch (CF) {
            case "grow":
              FF.size = FF.size + AF;
              break;
            case "shrink":
              FF.size = FF.size - AF;
              break;
            case "left":
              FF.x = FF.x - AF;
              break;
            case "right":
              FF.x = FF.x + AF;
              break;
            case "up":
              FF.y = FF.y - AF;
              break;
            case "down":
              FF.y = FF.y + AF;
              break;
            case "rotate":
              FF.rotate = FF.rotate + AF
          }
          return FF
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      vA = {
        mixout: function() {
          return {
            parse: {
              transform: function(FF) {
                return jA(FF)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(FF, WF) {
              var SF = WF.getAttribute("data-fa-transform");
              return SF && (FF.transform = jA(SF)), FF
            }
          }
        },
        provides: function(FF) {
          FF.generateAbstractTransformGrouping = function(FF) {
            var WF = FF.main,
              SF = FF.transform,
              CF = FF.containerWidth,
              AF = FF.iconWidth,
              uF = {
                transform: "translate(".concat(CF / 2, " 256)")
              },
              hF = "translate(".concat(32 * SF.x, ", ").concat(32 * SF.y, ") "),
              bW = "scale(".concat(SF.size / 16 * (SF.flipX ? -1 : 1), ", ").concat(SF.size / 16 * (SF.flipY ? -1 : 1), ") "),
              PF = "rotate(".concat(SF.rotate, " 0 0)"),
              RF = {
                outer: uF,
                inner: {
                  transform: "".concat(hF, " ").concat(bW, " ").concat(PF)
                },
                path: {
                  transform: "translate(".concat(AF / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: dF({}, RF.outer),
              children: [{
                tag: "g",
                attributes: dF({}, RF.inner),
                children: [{
                  tag: WF.icon.tag,
                  children: WF.icon.children,
                  attributes: dF(dF({}, WF.icon.attributes), RF.path)
                }]
              }]
            }
          }
        }
      },
      JC = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function pC(FF) {
      var WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return FF.attributes && (FF.attributes.fill || WF) && (FF.attributes.fill = "black"), FF
    }
    var lC = {
        hooks: function() {
          return {
            parseNodeAttributes: function(FF, WF) {
              var SF = WF.getAttribute("data-fa-mask"),
                CF = SF ? GS(SF.split(" ").map((function(FF) {
                  return FF.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return CF.prefix || (CF.prefix = oS()), FF.mask = CF, FF.maskId = WF.getAttribute("data-fa-mask-id"), FF
            }
          }
        },
        provides: function(FF) {
          FF.generateAbstractMask = function(FF) {
            var WF, SF = FF.children,
              CF = FF.attributes,
              AF = FF.main,
              uF = FF.mask,
              hF = FF.maskId,
              bW = FF.transform,
              PF = AF.width,
              RF = AF.icon,
              iW = uF.width,
              eF = uF.icon,
              EF = function(FF) {
                var WF = FF.transform,
                  SF = FF.containerWidth,
                  CF = FF.iconWidth,
                  AF = {
                    transform: "translate(".concat(SF / 2, " 256)")
                  },
                  uF = "translate(".concat(32 * WF.x, ", ").concat(32 * WF.y, ") "),
                  hF = "scale(".concat(WF.size / 16 * (WF.flipX ? -1 : 1), ", ").concat(WF.size / 16 * (WF.flipY ? -1 : 1), ") "),
                  bW = "rotate(".concat(WF.rotate, " 0 0)");
                return {
                  outer: AF,
                  inner: {
                    transform: "".concat(uF, " ").concat(hF, " ").concat(bW)
                  },
                  path: {
                    transform: "translate(".concat(CF / 2 * -1, " -256)")
                  }
                }
              }({
                transform: bW,
                containerWidth: iW,
                iconWidth: PF
              }),
              QF = {
                tag: "rect",
                attributes: dF(dF({}, JC), {}, {
                  fill: "white"
                })
              },
              rW = RF.children ? {
                children: RF.children.map(pC)
              } : {},
              gW = {
                tag: "g",
                attributes: dF({}, EF.inner),
                children: [pC(dF({
                  tag: RF.tag,
                  attributes: dF(dF({}, RF.attributes), EF.path)
                }, rW))]
              },
              tW = {
                tag: "g",
                attributes: dF({}, EF.outer),
                children: [gW]
              },
              TF = "mask-".concat(hF || UW()),
              aW = "clip-".concat(hF || UW()),
              kW = {
                tag: "mask",
                attributes: dF(dF({}, JC), {}, {
                  id: TF,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [QF, tW]
              },
              qW = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: aW
                  },
                  children: (WF = eF, "g" === WF.tag ? WF.children : [WF])
                }, kW]
              };
            return SF.push(qW, {
              tag: "rect",
              attributes: dF({
                fill: "currentColor",
                "clip-path": "url(#".concat(aW, ")"),
                mask: "url(#".concat(TF, ")")
              }, JC)
            }), {
              children: SF,
              attributes: CF
            }
          }
        }
      },
      FA = {
        provides: function(FF) {
          var WF = !1;
          NF.matchMedia && (WF = NF.matchMedia("(prefers-reduced-motion: reduce)").matches), FF.missingIconAbstract = function() {
            var FF = [],
              SF = {
                fill: "currentColor"
              },
              CF = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            FF.push({
              tag: "path",
              attributes: dF(dF({}, SF), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var AF = dF(dF({}, CF), {}, {
                attributeName: "opacity"
              }),
              uF = {
                tag: "circle",
                attributes: dF(dF({}, SF), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return WF || uF.children.push({
              tag: "animate",
              attributes: dF(dF({}, CF), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: dF(dF({}, AF), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), FF.push(uF), FF.push({
              tag: "path",
              attributes: dF(dF({}, SF), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: WF ? [] : [{
                tag: "animate",
                attributes: dF(dF({}, AF), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), WF || FF.push({
              tag: "path",
              attributes: dF(dF({}, SF), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: dF(dF({}, AF), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: FF
            }
          }
        }
      };
    ! function(FF, WF) {
      var SF = WF.mixoutsTo;
      yC = FF, sS = {}, Object.keys(nS).forEach((function(FF) {
        -1 === HS.indexOf(FF) && delete nS[FF]
      })), yC.forEach((function(FF) {
        var WF = FF.mixout ? FF.mixout() : {};
        if (Object.keys(WF).forEach((function(FF) {
            "function" === typeof WF[FF] && (SF[FF] = WF[FF]), "object" === eF(WF[FF]) && Object.keys(WF[FF]).forEach((function(CF) {
              SF[FF] || (SF[FF] = {}), SF[FF][CF] = WF[FF][CF]
            }))
          })), FF.hooks) {
          var CF = FF.hooks();
          Object.keys(CF).forEach((function(FF) {
            sS[FF] || (sS[FF] = []), sS[FF].push(CF[FF])
          }))
        }
        FF.provides && FF.provides(nS)
      }))
    }([SS, oC, YC, MC, cA, UC, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              aA(), BC = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            VC(KS("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            qA && qA.disconnect()
          },
          watch: function(FF) {
            var WF = FF.observeMutationsRoot;
            BC ? kA() : VC(KS("mutationObserverCallbacks", {
              observeMutationsRoot: WF
            }))
          }
        }
      }
    }, vA, lC, FA, {
      hooks: function() {
        return {
          parseNodeAttributes: function(FF, WF) {
            var SF = WF.getAttribute("data-fa-symbol"),
              CF = null !== SF && ("" === SF || SF);
            return FF.symbol = CF, FF
          }
        }
      }
    }], {
      mixoutsTo: vC
    });
    var WA = vC.noAuto,
      SA = vC.config,
      CA = vC.library,
      AA = vC.dom,
      uA = vC.parse,
      hA = vC.findIconDefinition,
      bu = vC.toHtml,
      dA = vC.icon,
      PA = vC.layer,
      RA = vC.text,
      iu = vC.counter
  },
  5662: FF => {
    FF.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);