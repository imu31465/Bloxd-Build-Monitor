/*! For license information please see fqwnlq.fa-renderer.4f51f3ec.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6873: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      FontAwesomeIcon: () => ZS
    });
    var tS = gS(6866),
      bS = gS(5116),
      XS = gS.n(bS),
      xS = gS(64);

    function NS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function qS(SS, HS, gS) {
      return (HS = function(SS) {
        var HS = function(SS, HS) {
          if ("object" != typeof SS || !SS) return SS;
          var gS = SS[Symbol.toPrimitive];
          if (void 0 !== gS) {
            var tS = gS.call(SS, HS || "default");
            if ("object" != typeof tS) return tS;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === HS ? String : Number)(SS)
        }(SS, "string");
        return "symbol" == typeof HS ? HS : HS + ""
      }(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function uS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function IS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? uS(Object(gS), !0).forEach((function(HS) {
          qS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : uS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function fS(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        var gS = null == SS ? null : "undefined" != typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
        if (null != gS) {
          var tS, bS, XS, xS, NS = [],
            qS = !0,
            uS = !1;
          try {
            if (XS = (gS = gS.call(SS)).next, 0 === HS) {
              if (Object(gS) !== gS) return;
              qS = !1
            } else
              for (; !(qS = (tS = XS.call(gS)).done) && (NS.push(tS.value), NS.length !== HS); qS = !0);
          } catch (SS) {
            uS = !0, bS = SS
          } finally {
            try {
              if (!qS && null != gS.return && (xS = gS.return(), Object(xS) !== xS)) return
            } finally {
              if (uS) throw bS
            }
          }
          return NS
        }
      }(SS, HS) || KS(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kS(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return NS(SS)
      }(SS) || function(SS) {
        if ("undefined" != typeof Symbol && null != SS[Symbol.iterator] || null != SS["@@iterator"]) return Array.from(SS)
      }(SS) || KS(SS) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aS(SS) {
      return aS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, aS(SS)
    }

    function KS(SS, HS) {
      if (SS) {
        if ("string" == typeof SS) return NS(SS, HS);
        var gS = {}.toString.call(SS).slice(8, -1);
        return "Object" === gS && SS.constructor && (gS = SS.constructor.name), "Map" === gS || "Set" === gS ? Array.from(SS) : "Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS) ? NS(SS, HS) : void 0
      }
    }
    var jS;
    try {
      var GS = gS(6879);
      jS = GS.version
    } catch (OS) {
      jS = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function CS(SS) {
      var HS = SS.beat,
        gS = SS.fade,
        tS = SS.beatFade,
        bS = SS.bounce,
        XS = SS.shake,
        xS = SS.flash,
        NS = SS.spin,
        uS = SS.spinPulse,
        IS = SS.spinReverse,
        kS = SS.pulse,
        aS = SS.fixedWidth,
        KS = SS.inverse,
        GS = SS.border,
        CS = SS.listItem,
        nS = SS.flip,
        PS = SS.size,
        QS = SS.rotation,
        DS = SS.pull,
        wS = SS.swapOpacity,
        hS = SS.rotateBy,
        ZS = SS.widthAuto,
        JS = function(SS, HS) {
          for (var gS = fS(SS.split("-"), 2), tS = gS[0], bS = gS[1], XS = fS(HS.split("-"), 2), xS = XS[0], NS = XS[1], qS = tS.split("."), uS = xS.split("."), IS = 0; IS < Math.max(qS.length, uS.length); IS++) {
            var kS = qS[IS] || "0",
              aS = uS[IS] || "0",
              KS = parseInt(kS, 10),
              jS = parseInt(aS, 10);
            if (KS !== jS) return KS > jS
          }
          for (var GS = 0; GS < Math.max(qS.length, uS.length); GS++) {
            var CS = qS[GS] || "0",
              nS = uS[GS] || "0";
            if (CS !== nS && CS.length !== nS.length) return CS.length < nS.length
          }
          return !(bS && !NS)
        }(jS, "7.0.0"),
        OS = qS(qS(qS(qS(qS(qS({
          "fa-beat": HS,
          "fa-fade": gS,
          "fa-beat-fade": tS,
          "fa-bounce": bS,
          "fa-shake": XS,
          "fa-flash": xS,
          "fa-spin": NS,
          "fa-spin-reverse": IS,
          "fa-spin-pulse": uS,
          "fa-pulse": kS,
          "fa-fw": aS,
          "fa-inverse": KS,
          "fa-border": GS,
          "fa-li": CS,
          "fa-flip": !0 === nS,
          "fa-flip-horizontal": "horizontal" === nS || "both" === nS,
          "fa-flip-vertical": "vertical" === nS || "both" === nS
        }, "fa-".concat(PS), "undefined" !== typeof PS && null !== PS), "fa-rotate-".concat(QS), "undefined" !== typeof QS && null !== QS && 0 !== QS), "fa-pull-".concat(DS), "undefined" !== typeof DS && null !== DS), "fa-swap-opacity", wS), "fa-rotate-by", JS && hS), "fa-width-auto", JS && ZS);
      return Object.keys(OS).map((function(SS) {
        return OS[SS] ? SS : null
      })).filter((function(SS) {
        return SS
      }))
    }

    function nS(SS) {
      return HS = SS, (HS -= 0) === HS ? SS : (SS = SS.replace(/[\-_\s]+(.)?/g, (function(SS, HS) {
        return HS ? HS.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + SS.substr(1);
      var HS
    }
    var PS = ["style"];
    var QS = !1;
    try {
      QS = !0
    } catch (OS) {}

    function DS(SS) {
      return SS && "object" === aS(SS) && SS.prefix && SS.iconName && SS.icon ? SS : tS.parse.icon ? tS.parse.icon(SS) : null === SS ? null : SS && "object" === aS(SS) && SS.prefix && SS.iconName ? SS : Array.isArray(SS) && 2 === SS.length ? {
        prefix: SS[0],
        iconName: SS[1]
      } : "string" === typeof SS ? {
        prefix: "fas",
        iconName: SS
      } : void 0
    }

    function wS(SS, HS) {
      return Array.isArray(HS) && HS.length > 0 || !Array.isArray(HS) && HS ? qS({}, SS, HS) : {}
    }
    var hS = {
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
      ZS = xS.forwardRef((function(SS, HS) {
        var gS = IS(IS({}, hS), SS),
          bS = gS.icon,
          XS = gS.mask,
          xS = gS.symbol,
          NS = gS.className,
          qS = gS.title,
          uS = gS.titleId,
          fS = gS.maskId,
          aS = DS(bS),
          KS = wS("classes", [].concat(kS(CS(gS)), kS((NS || "").split(" ")))),
          jS = wS("transform", "string" === typeof gS.transform ? tS.parse.transform(gS.transform) : gS.transform),
          GS = wS("mask", DS(XS)),
          nS = (0, tS.icon)(aS, IS(IS(IS(IS({}, KS), jS), GS), {}, {
            symbol: xS,
            title: qS,
            titleId: uS,
            maskId: fS
          }));
        if (!nS) return function() {
          var SS;
          !QS && console && "function" === typeof console.error && (SS = console).error.apply(SS, arguments)
        }("Could not find icon", aS), null;
        var PS = nS.abstract,
          ZS = {
            ref: HS
          };
        return Object.keys(gS).forEach((function(SS) {
          hS.hasOwnProperty(SS) || (ZS[SS] = gS[SS])
        })), JS(PS[0], ZS)
      }));
    ZS.displayName = "FontAwesomeIcon", ZS.propTypes = {
      beat: XS().bool,
      border: XS().bool,
      beatFade: XS().bool,
      bounce: XS().bool,
      className: XS().string,
      fade: XS().bool,
      flash: XS().bool,
      mask: XS().oneOfType([XS().object, XS().array, XS().string]),
      maskId: XS().string,
      fixedWidth: XS().bool,
      inverse: XS().bool,
      flip: XS().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: XS().oneOfType([XS().object, XS().array, XS().string]),
      listItem: XS().bool,
      pull: XS().oneOf(["right", "left"]),
      pulse: XS().bool,
      rotation: XS().oneOf([0, 90, 180, 270]),
      rotateBy: XS().bool,
      shake: XS().bool,
      size: XS().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: XS().bool,
      spinPulse: XS().bool,
      spinReverse: XS().bool,
      symbol: XS().oneOfType([XS().bool, XS().string]),
      title: XS().string,
      titleId: XS().string,
      transform: XS().oneOfType([XS().string, XS().object]),
      swapOpacity: XS().bool,
      widthAuto: XS().bool
    };
    var JS = function SS(HS, gS) {
      var tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof gS) return gS;
      var bS = (gS.children || []).map((function(gS) {
          return SS(HS, gS)
        })),
        XS = Object.keys(gS.attributes || {}).reduce((function(SS, HS) {
          var tS = gS.attributes[HS];
          switch (HS) {
            case "class":
              SS.attrs.className = tS, delete gS.attributes.class;
              break;
            case "style":
              SS.attrs.style = tS.split(";").map((function(SS) {
                return SS.trim()
              })).filter((function(SS) {
                return SS
              })).reduce((function(SS, HS) {
                var gS, tS = HS.indexOf(":"),
                  bS = nS(HS.slice(0, tS)),
                  XS = HS.slice(tS + 1).trim();
                return bS.startsWith("webkit") ? SS[(gS = bS, gS.charAt(0).toUpperCase() + gS.slice(1))] = XS : SS[bS] = XS, SS
              }), {});
              break;
            default:
              0 === HS.indexOf("aria-") || 0 === HS.indexOf("data-") ? SS.attrs[HS.toLowerCase()] = tS : SS.attrs[nS(HS)] = tS
          }
          return SS
        }), {
          attrs: {}
        }),
        xS = tS.style,
        NS = void 0 === xS ? {} : xS,
        qS = function(SS, HS) {
          if (null == SS) return {};
          var gS, tS, bS = function(SS, HS) {
            if (null == SS) return {};
            var gS = {};
            for (var tS in SS)
              if ({}.hasOwnProperty.call(SS, tS)) {
                if (-1 !== HS.indexOf(tS)) continue;
                gS[tS] = SS[tS]
              } return gS
          }(SS, HS);
          if (Object.getOwnPropertySymbols) {
            var XS = Object.getOwnPropertySymbols(SS);
            for (tS = 0; tS < XS.length; tS++) gS = XS[tS], -1 === HS.indexOf(gS) && {}.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
          }
          return bS
        }(tS, PS);
      return XS.attrs.style = IS(IS({}, XS.attrs.style), NS), HS.apply(void 0, [gS.tag, IS(IS({}, XS.attrs), qS)].concat(kS(bS)))
    }.bind(null, xS.createElement)
  },
  5118: (SS, HS, gS) => {
    var tS = gS(5120);

    function bS() {}

    function XS() {}
    XS.resetWarningCache = bS, SS.exports = function() {
      function SS(SS, HS, gS, bS, XS, xS) {
        if (xS !== tS) {
          var NS = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw NS.name = "Invariant Violation", NS
        }
      }

      function HS() {
        return SS
      }
      SS.isRequired = SS;
      var gS = {
        array: SS,
        bigint: SS,
        bool: SS,
        func: SS,
        number: SS,
        object: SS,
        string: SS,
        symbol: SS,
        any: SS,
        arrayOf: HS,
        element: SS,
        elementType: SS,
        instanceOf: HS,
        node: SS,
        objectOf: HS,
        oneOf: HS,
        oneOfType: HS,
        shape: HS,
        exact: HS,
        checkPropTypes: XS,
        resetWarningCache: bS
      };
      return gS.PropTypes = gS, gS
    }
  },
  5116: (SS, HS, gS) => {
    SS.exports = gS(5118)()
  },
  5120: SS => {
    SS.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6866: (SS, HS, gS) => {
    function tS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function bS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, fS(tS.key), tS)
      }
    }

    function XS(SS, HS) {
      var gS = "undefined" != typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
      if (!gS) {
        if (Array.isArray(SS) || (gS = aS(SS)) || HS && SS && "number" == typeof SS.length) {
          gS && (SS = gS);
          var tS = 0,
            bS = function() {};
          return {
            s: bS,
            n: function() {
              return tS >= SS.length ? {
                done: !0
              } : {
                done: !1,
                value: SS[tS++]
              }
            },
            e: function(SS) {
              throw SS
            },
            f: bS
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var XS, xS = !0,
        NS = !1;
      return {
        s: function() {
          gS = gS.call(SS)
        },
        n: function() {
          var SS = gS.next();
          return xS = SS.done, SS
        },
        e: function(SS) {
          NS = !0, XS = SS
        },
        f: function() {
          try {
            xS || null == gS.return || gS.return()
          } finally {
            if (NS) throw XS
          }
        }
      }
    }

    function xS(SS, HS, gS) {
      return (HS = fS(HS)) in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function NS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function qS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? NS(Object(gS), !0).forEach((function(HS) {
          xS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : NS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function uS(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        var gS = null == SS ? null : "undefined" != typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
        if (null != gS) {
          var tS, bS, XS, xS, NS = [],
            qS = !0,
            uS = !1;
          try {
            if (XS = (gS = gS.call(SS)).next, 0 === HS) {
              if (Object(gS) !== gS) return;
              qS = !1
            } else
              for (; !(qS = (tS = XS.call(gS)).done) && (NS.push(tS.value), NS.length !== HS); qS = !0);
          } catch (SS) {
            uS = !0, bS = SS
          } finally {
            try {
              if (!qS && null != gS.return && (xS = gS.return(), Object(xS) !== xS)) return
            } finally {
              if (uS) throw bS
            }
          }
          return NS
        }
      }(SS, HS) || aS(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IS(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return tS(SS)
      }(SS) || function(SS) {
        if ("undefined" != typeof Symbol && null != SS[Symbol.iterator] || null != SS["@@iterator"]) return Array.from(SS)
      }(SS) || aS(SS) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fS(SS) {
      var HS = function(SS, HS) {
        if ("object" != typeof SS || !SS) return SS;
        var gS = SS[Symbol.toPrimitive];
        if (void 0 !== gS) {
          var tS = gS.call(SS, HS || "default");
          if ("object" != typeof tS) return tS;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === HS ? String : Number)(SS)
      }(SS, "string");
      return "symbol" == typeof HS ? HS : HS + ""
    }

    function kS(SS) {
      return kS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, kS(SS)
    }

    function aS(SS, HS) {
      if (SS) {
        if ("string" == typeof SS) return tS(SS, HS);
        var gS = {}.toString.call(SS).slice(8, -1);
        return "Object" === gS && SS.constructor && (gS = SS.constructor.name), "Map" === gS || "Set" === gS ? Array.from(SS) : "Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS) ? tS(SS, HS) : void 0
      }
    }
    gS.r(HS), gS.d(HS, {
      api: () => lg,
      config: () => tb,
      counter: () => kb,
      dom: () => Xb,
      findIconDefinition: () => Nb,
      icon: () => ub,
      layer: () => Ib,
      library: () => bb,
      noAuto: () => gb,
      parse: () => xb,
      text: () => fb,
      toHtml: () => qb
    });
    var KS = function() {},
      jS = {},
      GS = {},
      CS = null,
      nS = {
        mark: KS,
        measure: KS
      };
    try {
      "undefined" !== typeof window && (jS = window), "undefined" !== typeof document && (GS = document), "undefined" !== typeof MutationObserver && (CS = MutationObserver), "undefined" !== typeof performance && (nS = performance)
    } catch (BS) {}
    var PS, QS, DS = (jS.navigator || {}).userAgent,
      wS = void 0 === DS ? "" : DS,
      hS = jS,
      ZS = GS,
      JS = CS,
      OS = nS,
      dS = (hS.document, !!ZS.documentElement && !!ZS.head && "function" === typeof ZS.addEventListener && "function" === typeof ZS.createElement),
      cS = ~wS.indexOf("MSIE") || ~wS.indexOf("Trident/"),
      vS = {
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
      ES = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      LS = "classic",
      YS = "duotone",
      AS = "sharp",
      yS = "sharp-duotone",
      VS = "chisel",
      iS = "etch",
      WS = "graphite",
      zS = "jelly",
      US = "jelly-duo",
      pS = "jelly-fill",
      sS = "notdog",
      BS = "notdog-duo",
      MS = "slab",
      FS = "slab-press",
      RS = "thumbprint",
      TS = "utility",
      oS = "utility-duo",
      lS = "utility-fill",
      mS = "whiteboard",
      eS = [LS, YS, AS, yS, VS, iS, WS, zS, US, pS, sS, BS, MS, FS, RS, TS, oS, lS, mS],
      rS = (xS(xS(xS(xS(xS(xS(xS(xS(xS(xS(PS = {}, LS, "Classic"), YS, "Duotone"), AS, "Sharp"), yS, "Sharp Duotone"), VS, "Chisel"), iS, "Etch"), WS, "Graphite"), zS, "Jelly"), US, "Jelly Duo"), pS, "Jelly Fill"), xS(xS(xS(xS(xS(xS(xS(xS(xS(PS, sS, "Notdog"), BS, "Notdog Duo"), MS, "Slab"), FS, "Slab Press"), RS, "Thumbprint"), TS, "Utility"), oS, "Utility Duo"), lS, "Utility Fill"), mS, "Whiteboard"), new Map([
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
      SH = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      HH = {
        fak: "kit",
        "fa-kit": "kit"
      },
      gH = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      tH = (xS(xS({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      bH = {
        "kit-duotone": "fakd"
      },
      XH = "duotone-group",
      xH = "swap-opacity",
      NH = "primary",
      qH = "secondary",
      uH = (xS(xS(xS(xS(xS(xS(xS(xS(xS(xS(QS = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), xS(xS(xS(xS(xS(xS(xS(xS(xS(QS, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), xS(xS({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      IH = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      fH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      kH = fH.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      aH = [].concat(IS(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", XH, xH, NH, qH]).concat(fH.map((function(SS) {
        return "".concat(SS, "x")
      }))).concat(kH.map((function(SS) {
        return "w-".concat(SS)
      }))),
      KH = "___FONT_AWESOME___",
      jH = "svg-inline--fa",
      GH = "data-fa-i2svg",
      CH = "data-fa-pseudo-element",
      nH = "data-prefix",
      PH = "data-icon",
      QH = "fontawesome-i2svg",
      DH = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      wH = ["::before", "::after", ":before", ":after"],
      hH = function() {
        try {
          return !0
        } catch (SS) {
          return !1
        }
      }();

    function ZH(SS) {
      return new Proxy(SS, {
        get: function(SS, HS) {
          return HS in SS ? SS[HS] : SS[LS]
        }
      })
    }
    var JH = qS({}, vS);
    JH[LS] = qS(qS(qS(qS({}, {
      "fa-duotone": "duotone"
    }), vS[LS]), HH), gH);
    var OH = ZH(JH),
      dH = qS({}, {
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
    dH[LS] = qS(qS(qS(qS({}, {
      duotone: "fad"
    }), dH[LS]), tH), bH);
    var cH = ZH(dH),
      vH = qS({}, uH);
    vH[LS] = qS(qS({}, vH[LS]), {
      fak: "fa-kit"
    });
    var EH = ZH(vH),
      LH = qS({}, {
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
    LH[LS] = qS(qS({}, LH[LS]), {
      "fa-kit": "fak"
    });
    ZH(LH);
    var YH = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      AH = "fa-layers-text",
      yH = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      VH = (ZH(qS({}, {
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
      iH = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      WH = [].concat(IS(["kit"]), IS(aH)),
      zH = hS.FontAwesomeConfig || {};
    if (ZS && "function" === typeof ZS.querySelector) {
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
      ].forEach((function(SS) {
        var HS = uS(SS, 2),
          gS = HS[0],
          tS = HS[1],
          bS = function(SS) {
            return "" === SS || "false" !== SS && ("true" === SS || SS)
          }(function(SS) {
            var HS = ZS.querySelector("script[" + SS + "]");
            if (HS) return HS.getAttribute(SS)
          }(gS));
        void 0 !== bS && null !== bS && (zH[tS] = bS)
      }))
    }
    var UH = {
      styleDefault: "solid",
      familyDefault: LS,
      cssPrefix: "fa",
      replacementClass: jH,
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
    zH.familyPrefix && (zH.cssPrefix = zH.familyPrefix);
    var pH = qS(qS({}, UH), zH);
    pH.autoReplaceSvg || (pH.observeMutations = !1);
    var sH = {};
    Object.keys(UH).forEach((function(SS) {
      Object.defineProperty(sH, SS, {
        enumerable: !0,
        set: function(HS) {
          pH[SS] = HS, BH.forEach((function(SS) {
            return SS(sH)
          }))
        },
        get: function() {
          return pH[SS]
        }
      })
    })), Object.defineProperty(sH, "familyPrefix", {
      enumerable: !0,
      set: function(SS) {
        pH.cssPrefix = SS, BH.forEach((function(SS) {
          return SS(sH)
        }))
      },
      get: function() {
        return pH.cssPrefix
      }
    }), hS.FontAwesomeConfig = sH;
    var BH = [];
    var MH = 16,
      FH = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function RH() {
      for (var SS = 12, HS = ""; SS-- > 0;) HS += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return HS
    }

    function TH(SS) {
      for (var HS = [], gS = (SS || []).length >>> 0; gS--;) HS[gS] = SS[gS];
      return HS
    }

    function oH(SS) {
      return SS.classList ? TH(SS.classList) : (SS.getAttribute("class") || "").split(" ").filter((function(SS) {
        return SS
      }))
    }

    function lH(SS) {
      return "".concat(SS).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function mH(SS) {
      return Object.keys(SS || {}).reduce((function(HS, gS) {
        return HS + "".concat(gS, ": ").concat(SS[gS].trim(), ";")
      }), "")
    }

    function eH(SS) {
      return SS.size !== FH.size || SS.x !== FH.x || SS.y !== FH.y || SS.rotate !== FH.rotate || SS.flipX || SS.flipY
    }

    function rH() {
      var SS = "fa",
        HS = jH,
        gS = sH.cssPrefix,
        tS = sH.replacementClass,
        bS = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (gS !== SS || tS !== HS) {
        var XS = new RegExp("\\.".concat(SS, "\\-"), "g"),
          xS = new RegExp("\\--".concat(SS, "\\-"), "g"),
          NS = new RegExp("\\.".concat(HS), "g");
        bS = bS.replace(XS, ".".concat(gS, "-")).replace(xS, "--".concat(gS, "-")).replace(NS, ".".concat(tS))
      }
      return bS
    }
    var Sg = !1;

    function Hg() {
      sH.autoAddCss && !Sg && (! function(SS) {
        if (SS && dS) {
          var HS = ZS.createElement("style");
          HS.setAttribute("type", "text/css"), HS.innerHTML = SS;
          for (var gS = ZS.head.childNodes, tS = null, bS = gS.length - 1; bS > -1; bS--) {
            var XS = gS[bS],
              xS = (XS.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(xS) > -1 && (tS = XS)
          }
          ZS.head.insertBefore(HS, tS)
        }
      }(rH()), Sg = !0)
    }
    var gg = {
        mixout: function() {
          return {
            dom: {
              css: rH,
              insertCss: Hg
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              Hg()
            },
            beforeI2svg: function() {
              Hg()
            }
          }
        }
      },
      tg = hS || {};
    tg[KH] || (tg[KH] = {}), tg[KH].styles || (tg[KH].styles = {}), tg[KH].hooks || (tg[KH].hooks = {}), tg[KH].shims || (tg[KH].shims = []);
    var bg = tg[KH],
      Xg = [],
      xg = function() {
        ZS.removeEventListener("DOMContentLoaded", xg), Ng = 1, Xg.map((function(SS) {
          return SS()
        }))
      },
      Ng = !1;

    function qg(SS) {
      var HS = SS.tag,
        gS = SS.attributes,
        tS = void 0 === gS ? {} : gS,
        bS = SS.children,
        XS = void 0 === bS ? [] : bS;
      return "string" === typeof SS ? lH(SS) : "<".concat(HS, " ").concat(function(SS) {
        return Object.keys(SS || {}).reduce((function(HS, gS) {
          return HS + "".concat(gS, '="').concat(lH(SS[gS]), '" ')
        }), "").trim()
      }(tS), ">").concat(XS.map(qg).join(""), "</").concat(HS, ">")
    }

    function ug(SS, HS, gS) {
      if (SS && SS[HS] && SS[HS][gS]) return {
        prefix: HS,
        iconName: gS,
        icon: SS[HS][gS]
      }
    }
    dS && ((Ng = (ZS.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ZS.readyState)) || ZS.addEventListener("DOMContentLoaded", xg));
    var Ig = function(SS, HS, gS, tS) {
      var bS, XS, xS, NS = Object.keys(SS),
        qS = NS.length,
        uS = void 0 !== tS ? function(SS, HS) {
          return function(gS, tS, bS, XS) {
            return SS.call(HS, gS, tS, bS, XS)
          }
        }(HS, tS) : HS;
      for (void 0 === gS ? (bS = 1, xS = SS[NS[0]]) : (bS = 0, xS = gS); bS < qS; bS++) xS = uS(xS, SS[XS = NS[bS]], XS, SS);
      return xS
    };

    function fg(SS) {
      return 1 !== IS(SS).length ? null : SS.codePointAt(0).toString(16)
    }

    function kg(SS) {
      return Object.keys(SS).reduce((function(HS, gS) {
        var tS = SS[gS];
        return !!tS.icon ? HS[tS.iconName] = tS.icon : HS[gS] = tS, HS
      }), {})
    }

    function ag(SS, HS) {
      var gS = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        tS = void 0 !== gS && gS,
        bS = kg(HS);
      "function" !== typeof bg.hooks.addPack || tS ? bg.styles[SS] = qS(qS({}, bg.styles[SS] || {}), bS) : bg.hooks.addPack(SS, kg(HS)), "fas" === SS && ag("fa", HS)
    }
    var Kg = bg.styles,
      jg = bg.shims,
      Gg = Object.keys(EH),
      Cg = Gg.reduce((function(SS, HS) {
        return SS[HS] = Object.keys(EH[HS]), SS
      }), {}),
      ng = null,
      Pg = {},
      Qg = {},
      Dg = {},
      wg = {},
      hg = {};

    function Zg(SS, HS) {
      var gS, tS = HS.split("-"),
        bS = tS[0],
        XS = tS.slice(1).join("-");
      return bS !== SS || "" === XS || (gS = XS, ~WH.indexOf(gS)) ? null : XS
    }
    var Jg, Og = function() {
      var SS = function(SS) {
        return Ig(Kg, (function(HS, gS, tS) {
          return HS[tS] = Ig(gS, SS, {}), HS
        }), {})
      };
      Pg = SS((function(SS, HS, gS) {
        (HS[3] && (SS[HS[3]] = gS), HS[2]) && HS[2].filter((function(SS) {
          return "number" === typeof SS
        })).forEach((function(HS) {
          SS[HS.toString(16)] = gS
        }));
        return SS
      })), Qg = SS((function(SS, HS, gS) {
        (SS[gS] = gS, HS[2]) && HS[2].filter((function(SS) {
          return "string" === typeof SS
        })).forEach((function(HS) {
          SS[HS] = gS
        }));
        return SS
      })), hg = SS((function(SS, HS, gS) {
        var tS = HS[2];
        return SS[gS] = gS, tS.forEach((function(HS) {
          SS[HS] = gS
        })), SS
      }));
      var HS = "far" in Kg || sH.autoFetchSvg,
        gS = Ig(jg, (function(SS, gS) {
          var tS = gS[0],
            bS = gS[1],
            XS = gS[2];
          return "far" !== bS || HS || (bS = "fas"), "string" === typeof tS && (SS.names[tS] = {
            prefix: bS,
            iconName: XS
          }), "number" === typeof tS && (SS.unicodes[tS.toString(16)] = {
            prefix: bS,
            iconName: XS
          }), SS
        }), {
          names: {},
          unicodes: {}
        });
      Dg = gS.names, wg = gS.unicodes, ng = Lg(sH.styleDefault, {
        family: sH.familyDefault
      })
    };

    function dg(SS, HS) {
      return (Pg[SS] || {})[HS]
    }

    function cg(SS, HS) {
      return (hg[SS] || {})[HS]
    }

    function vg(SS) {
      return Dg[SS] || {
        prefix: null,
        iconName: null
      }
    }

    function Eg() {
      return ng
    }
    Jg = function(SS) {
      ng = Lg(SS.styleDefault, {
        family: sH.familyDefault
      })
    }, BH.push(Jg), Og();

    function Lg(SS) {
      var HS = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        gS = void 0 === HS ? LS : HS,
        tS = OH[gS][SS];
      if (gS === YS && !SS) return "fad";
      var bS = cH[gS][SS] || cH[gS][tS],
        XS = SS in bg.styles ? SS : null;
      return bS || XS || null
    }

    function Yg(SS) {
      return SS.sort().filter((function(SS, HS, gS) {
        return gS.indexOf(SS) === HS
      }))
    }
    var Ag = IH.concat(SH);

    function yg(SS) {
      var HS = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        gS = void 0 !== HS && HS,
        tS = null,
        bS = Yg(SS.filter((function(SS) {
          return Ag.includes(SS)
        }))),
        XS = Yg(SS.filter((function(SS) {
          return !Ag.includes(SS)
        }))),
        xS = uS(bS.filter((function(SS) {
          return tS = SS, !ES.includes(SS)
        })), 1)[0],
        NS = void 0 === xS ? null : xS,
        IS = function(SS) {
          var HS = LS,
            gS = Gg.reduce((function(SS, HS) {
              return SS[HS] = "".concat(sH.cssPrefix, "-").concat(HS), SS
            }), {});
          return eS.forEach((function(tS) {
            (SS.includes(gS[tS]) || SS.some((function(SS) {
              return Cg[tS].includes(SS)
            }))) && (HS = tS)
          })), HS
        }(bS),
        fS = qS(qS({}, function(SS) {
          var HS = [],
            gS = null;
          return SS.forEach((function(SS) {
            var tS = Zg(sH.cssPrefix, SS);
            tS ? gS = tS : SS && HS.push(SS)
          })), {
            iconName: gS,
            rest: HS
          }
        }(XS)), {}, {
          prefix: Lg(NS, {
            family: IS
          })
        });
      return qS(qS(qS({}, fS), function(SS) {
        var HS = SS.values,
          gS = SS.family,
          tS = SS.canonical,
          bS = SS.givenPrefix,
          XS = void 0 === bS ? "" : bS,
          xS = SS.styles,
          NS = void 0 === xS ? {} : xS,
          qS = SS.config,
          uS = void 0 === qS ? {} : qS,
          IS = gS === YS,
          fS = HS.includes("fa-duotone") || HS.includes("fad"),
          kS = "duotone" === uS.familyDefault,
          aS = "fad" === tS.prefix || "fa-duotone" === tS.prefix;
        !IS && (fS || kS || aS) && (tS.prefix = "fad");
        (HS.includes("fa-brands") || HS.includes("fab")) && (tS.prefix = "fab");
        if (!tS.prefix && Vg.includes(gS)) {
          if (Object.keys(NS).find((function(SS) {
              return ig.includes(SS)
            })) || uS.autoFetchSvg) {
            var KS = rS.get(gS).defaultShortPrefixId;
            tS.prefix = KS, tS.iconName = cg(tS.prefix, tS.iconName) || tS.iconName
          }
        }
        "fa" !== tS.prefix && "fa" !== XS || (tS.prefix = Eg() || "fas");
        return tS
      }({
        values: SS,
        family: IS,
        styles: Kg,
        config: sH,
        canonical: fS,
        givenPrefix: tS
      })), function(SS, HS, gS) {
        var tS = gS.prefix,
          bS = gS.iconName;
        if (SS || !tS || !bS) return {
          prefix: tS,
          iconName: bS
        };
        var XS = "fa" === HS ? vg(bS) : {},
          xS = cg(tS, bS);
        bS = XS.iconName || xS || bS, "far" !== (tS = XS.prefix || tS) || Kg.far || !Kg.fas || sH.autoFetchSvg || (tS = "fas");
        return {
          prefix: tS,
          iconName: bS
        }
      }(gS, tS, fS))
    }
    var Vg = eS.filter((function(SS) {
        return SS !== LS || SS !== YS
      })),
      ig = Object.keys(uH).filter((function(SS) {
        return SS !== LS
      })).map((function(SS) {
        return Object.keys(uH[SS])
      })).flat();
    var Wg = function() {
        return function(SS, HS, gS) {
          return HS && bS(SS.prototype, HS), gS && bS(SS, gS), Object.defineProperty(SS, "prototype", {
            writable: !1
          }), SS
        }((function SS() {
          ! function(SS, HS) {
            if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
          }(this, SS), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var SS = this, HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
            var bS = gS.reduce(this._pullDefinitions, {});
            Object.keys(bS).forEach((function(HS) {
              SS.definitions[HS] = qS(qS({}, SS.definitions[HS] || {}), bS[HS]), ag(HS, bS[HS]);
              var gS = EH[LS][HS];
              gS && ag(gS, bS[HS]), Og()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(SS, HS) {
            var gS = HS.prefix && HS.iconName && HS.icon ? {
              0: HS
            } : HS;
            return Object.keys(gS).map((function(HS) {
              var tS = gS[HS],
                bS = tS.prefix,
                XS = tS.iconName,
                xS = tS.icon,
                NS = xS[2];
              SS[bS] || (SS[bS] = {}), NS.length > 0 && NS.forEach((function(HS) {
                "string" === typeof HS && (SS[bS][HS] = xS)
              })), SS[bS][XS] = xS
            })), SS
          }
        }])
      }(),
      zg = [],
      Ug = {},
      pg = {},
      sg = Object.keys(pg);

    function Bg(SS, HS) {
      for (var gS = arguments.length, tS = new Array(gS > 2 ? gS - 2 : 0), bS = 2; bS < gS; bS++) tS[bS - 2] = arguments[bS];
      return (Ug[SS] || []).forEach((function(SS) {
        HS = SS.apply(null, [HS].concat(tS))
      })), HS
    }

    function Mg(SS) {
      for (var HS = arguments.length, gS = new Array(HS > 1 ? HS - 1 : 0), tS = 1; tS < HS; tS++) gS[tS - 1] = arguments[tS];
      (Ug[SS] || []).forEach((function(SS) {
        SS.apply(null, gS)
      }))
    }

    function Fg() {
      var SS = arguments[0],
        HS = Array.prototype.slice.call(arguments, 1);
      return pg[SS] ? pg[SS].apply(null, HS) : void 0
    }

    function Rg(SS) {
      "fa" === SS.prefix && (SS.prefix = "fas");
      var HS = SS.iconName,
        gS = SS.prefix || Eg();
      if (HS) return HS = cg(gS, HS) || HS, ug(Tg.definitions, gS, HS) || ug(bg.styles, gS, HS)
    }
    var Tg = new Wg,
      og = {
        i2svg: function() {
          var SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return dS ? (Mg("beforeI2svg", SS), Fg("pseudoElements2svg", SS), Fg("i2svg", SS)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var SS, HS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            gS = HS.autoReplaceSvgRoot;
          !1 === sH.autoReplaceSvg && (sH.autoReplaceSvg = !0), sH.observeMutations = !0, SS = function() {
            mg({
              autoReplaceSvgRoot: gS
            }), Mg("watch", HS)
          }, dS && (Ng ? setTimeout(SS, 0) : Xg.push(SS))
        }
      },
      lg = {
        noAuto: function() {
          sH.autoReplaceSvg = !1, sH.observeMutations = !1, Mg("noAuto")
        },
        config: sH,
        dom: og,
        parse: {
          icon: function(SS) {
            if (null === SS) return null;
            if ("object" === kS(SS) && SS.prefix && SS.iconName) return {
              prefix: SS.prefix,
              iconName: cg(SS.prefix, SS.iconName) || SS.iconName
            };
            if (Array.isArray(SS) && 2 === SS.length) {
              var HS = 0 === SS[1].indexOf("fa-") ? SS[1].slice(3) : SS[1],
                gS = Lg(SS[0]);
              return {
                prefix: gS,
                iconName: cg(gS, HS) || HS
              }
            }
            if ("string" === typeof SS && (SS.indexOf("".concat(sH.cssPrefix, "-")) > -1 || SS.match(YH))) {
              var tS = yg(SS.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: tS.prefix || Eg(),
                iconName: cg(tS.prefix, tS.iconName) || tS.iconName
              }
            }
            if ("string" === typeof SS) {
              var bS = Eg();
              return {
                prefix: bS,
                iconName: cg(bS, SS) || SS
              }
            }
          }
        },
        library: Tg,
        findIconDefinition: Rg,
        toHtml: qg
      },
      mg = function() {
        var SS = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          HS = void 0 === SS ? ZS : SS;
        (Object.keys(bg.styles).length > 0 || sH.autoFetchSvg) && dS && sH.autoReplaceSvg && lg.dom.i2svg({
          node: HS
        })
      };

    function eg(SS, HS) {
      return Object.defineProperty(SS, "abstract", {
        get: HS
      }), Object.defineProperty(SS, "html", {
        get: function() {
          return SS.abstract.map((function(SS) {
            return qg(SS)
          }))
        }
      }), Object.defineProperty(SS, "node", {
        get: function() {
          if (dS) {
            var HS = ZS.createElement("div");
            return HS.innerHTML = SS.html, HS.children
          }
        }
      }), SS
    }

    function rg(SS) {
      var HS = SS.icons,
        gS = HS.main,
        tS = HS.mask,
        bS = SS.prefix,
        XS = SS.iconName,
        xS = SS.transform,
        NS = SS.symbol,
        uS = SS.maskId,
        IS = SS.extra,
        fS = SS.watchable,
        kS = void 0 !== fS && fS,
        aS = tS.found ? tS : gS,
        KS = aS.width,
        jS = aS.height,
        GS = [sH.replacementClass, XS ? "".concat(sH.cssPrefix, "-").concat(XS) : ""].filter((function(SS) {
          return -1 === IS.classes.indexOf(SS)
        })).filter((function(SS) {
          return "" !== SS || !!SS
        })).concat(IS.classes).join(" "),
        CS = {
          children: [],
          attributes: qS(qS({}, IS.attributes), {}, {
            "data-prefix": bS,
            "data-icon": XS,
            class: GS,
            role: IS.attributes.role || "img",
            viewBox: "0 0 ".concat(KS, " ").concat(jS)
          })
        };
      (function(SS) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(HS) {
          return HS in SS
        }))
      })(IS.attributes) || IS.attributes["aria-hidden"] || (CS.attributes["aria-hidden"] = "true"), kS && (CS.attributes[GH] = "");
      var nS = qS(qS({}, CS), {}, {
          prefix: bS,
          iconName: XS,
          main: gS,
          mask: tS,
          maskId: uS,
          transform: xS,
          symbol: NS,
          styles: qS({}, IS.styles)
        }),
        PS = tS.found && gS.found ? Fg("generateAbstractMask", nS) || {
          children: [],
          attributes: {}
        } : Fg("generateAbstractIcon", nS) || {
          children: [],
          attributes: {}
        },
        QS = PS.children,
        DS = PS.attributes;
      return nS.children = QS, nS.attributes = DS, NS ? function(SS) {
        var HS = SS.prefix,
          gS = SS.iconName,
          tS = SS.children,
          bS = SS.attributes,
          XS = SS.symbol,
          xS = !0 === XS ? "".concat(HS, "-").concat(sH.cssPrefix, "-").concat(gS) : XS;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: qS(qS({}, bS), {}, {
              id: xS
            }),
            children: tS
          }]
        }]
      }(nS) : function(SS) {
        var HS = SS.children,
          gS = SS.main,
          tS = SS.mask,
          bS = SS.attributes,
          XS = SS.styles,
          xS = SS.transform;
        if (eH(xS) && gS.found && !tS.found) {
          var NS = {
            x: gS.width / gS.height / 2,
            y: .5
          };
          bS.style = mH(qS(qS({}, XS), {}, {
            "transform-origin": "".concat(NS.x + xS.x / 16, "em ").concat(NS.y + xS.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: bS,
          children: HS
        }]
      }(nS)
    }

    function St(SS) {
      var HS = SS.content,
        gS = SS.width,
        tS = SS.height,
        bS = SS.transform,
        XS = SS.extra,
        xS = SS.watchable,
        NS = void 0 !== xS && xS,
        uS = qS(qS({}, XS.attributes), {}, {
          class: XS.classes.join(" ")
        });
      NS && (uS[GH] = "");
      var IS = qS({}, XS.styles);
      eH(bS) && (IS.transform = function(SS) {
        var HS = SS.transform,
          gS = SS.width,
          tS = void 0 === gS ? 16 : gS,
          bS = SS.height,
          XS = void 0 === bS ? 16 : bS,
          xS = SS.startCentered,
          NS = void 0 !== xS && xS,
          qS = "";
        return qS += NS && cS ? "translate(".concat(HS.x / MH - tS / 2, "em, ").concat(HS.y / MH - XS / 2, "em) ") : NS ? "translate(calc(-50% + ".concat(HS.x / MH, "em), calc(-50% + ").concat(HS.y / MH, "em)) ") : "translate(".concat(HS.x / MH, "em, ").concat(HS.y / MH, "em) "), qS += "scale(".concat(HS.size / MH * (HS.flipX ? -1 : 1), ", ").concat(HS.size / MH * (HS.flipY ? -1 : 1), ") "), qS + "rotate(".concat(HS.rotate, "deg) ")
      }({
        transform: bS,
        startCentered: !0,
        width: gS,
        height: tS
      }), IS["-webkit-transform"] = IS.transform);
      var fS = mH(IS);
      fS.length > 0 && (uS.style = fS);
      var kS = [];
      return kS.push({
        tag: "span",
        attributes: uS,
        children: [HS]
      }), kS
    }
    var Ht = bg.styles;

    function gt(SS) {
      var HS = SS[0],
        gS = SS[1],
        tS = uS(SS.slice(4), 1)[0];
      return {
        found: !0,
        width: HS,
        height: gS,
        icon: Array.isArray(tS) ? {
          tag: "g",
          attributes: {
            class: "".concat(sH.cssPrefix, "-").concat(iH.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(sH.cssPrefix, "-").concat(iH.SECONDARY),
              fill: "currentColor",
              d: tS[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(sH.cssPrefix, "-").concat(iH.PRIMARY),
              fill: "currentColor",
              d: tS[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: tS
          }
        }
      }
    }
    var tt = {
      found: !1,
      width: 512,
      height: 512
    };

    function bt(SS, HS) {
      var gS = HS;
      return "fa" === HS && null !== sH.styleDefault && (HS = Eg()), new Promise((function(tS, bS) {
        if ("fa" === gS) {
          var XS = vg(SS) || {};
          SS = XS.iconName || SS, HS = XS.prefix || HS
        }
        if (SS && HS && Ht[HS] && Ht[HS][SS]) return tS(gt(Ht[HS][SS]));
        ! function(SS, HS) {
          hH || sH.showMissingIcons || !SS || console.error('Icon with name "'.concat(SS, '" and prefix "').concat(HS, '" is missing.'))
        }(SS, HS), tS(qS(qS({}, tt), {}, {
          icon: sH.showMissingIcons && SS && Fg("missingIconAbstract") || {}
        }))
      }))
    }
    var Xt = function() {},
      xt = sH.measurePerformance && OS && OS.mark && OS.measure ? OS : {
        mark: Xt,
        measure: Xt
      },
      Nt = 'FA "7.2.0"',
      qt = function(SS) {
        xt.mark("".concat(Nt, " ").concat(SS, " ends")), xt.measure("".concat(Nt, " ").concat(SS), "".concat(Nt, " ").concat(SS, " begins"), "".concat(Nt, " ").concat(SS, " ends"))
      },
      ut = function(SS) {
        return xt.mark("".concat(Nt, " ").concat(SS, " begins")),
          function() {
            return qt(SS)
          }
      },
      It = function() {};

    function ft(SS) {
      return "string" === typeof(SS.getAttribute ? SS.getAttribute(GH) : null)
    }

    function kt(SS) {
      return ZS.createElementNS("http://www.w3.org/2000/svg", SS)
    }

    function Kt(SS) {
      return ZS.createElement(SS)
    }

    function jt(SS) {
      var HS = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        gS = void 0 === HS ? "svg" === SS.tag ? kt : Kt : HS;
      if ("string" === typeof SS) return ZS.createTextNode(SS);
      var tS = gS(SS.tag);
      return Object.keys(SS.attributes || []).forEach((function(HS) {
        tS.setAttribute(HS, SS.attributes[HS])
      })), (SS.children || []).forEach((function(SS) {
        tS.appendChild(jt(SS, {
          ceFn: gS
        }))
      })), tS
    }
    var Gt = {
      replace: function(SS) {
        var HS = SS[0];
        if (HS.parentNode)
          if (SS[1].forEach((function(SS) {
              HS.parentNode.insertBefore(jt(SS), HS)
            })), null === HS.getAttribute(GH) && sH.keepOriginalSource) {
            var gS = ZS.createComment(function(SS) {
              var HS = " ".concat(SS.outerHTML, " ");
              return "".concat(HS, "Font Awesome fontawesome.com ")
            }(HS));
            HS.parentNode.replaceChild(gS, HS)
          } else HS.remove()
      },
      nest: function(SS) {
        var HS = SS[0],
          gS = SS[1];
        if (~oH(HS).indexOf(sH.replacementClass)) return Gt.replace(SS);
        var tS = new RegExp("".concat(sH.cssPrefix, "-.*"));
        if (delete gS[0].attributes.id, gS[0].attributes.class) {
          var bS = gS[0].attributes.class.split(" ").reduce((function(SS, HS) {
            return HS === sH.replacementClass || HS.match(tS) ? SS.toSvg.push(HS) : SS.toNode.push(HS), SS
          }), {
            toNode: [],
            toSvg: []
          });
          gS[0].attributes.class = bS.toSvg.join(" "), 0 === bS.toNode.length ? HS.removeAttribute("class") : HS.setAttribute("class", bS.toNode.join(" "))
        }
        var XS = gS.map((function(SS) {
          return qg(SS)
        })).join("\n");
        HS.setAttribute(GH, ""), HS.innerHTML = XS
      }
    };

    function Ct(SS) {
      SS()
    }

    function nt(SS, HS) {
      var gS = "function" === typeof HS ? HS : It;
      if (0 === SS.length) gS();
      else {
        var tS = Ct;
        "async" === sH.mutateApproach && (tS = hS.requestAnimationFrame || Ct), tS((function() {
          var HS = !0 === sH.autoReplaceSvg ? Gt.replace : Gt[sH.autoReplaceSvg] || Gt.replace,
            tS = ut("mutate");
          SS.map(HS), tS(), gS()
        }))
      }
    }
    var Pt = !1;

    function Qt() {
      Pt = !0
    }

    function Dt() {
      Pt = !1
    }
    var wt = null;

    function ht(SS) {
      if (JS && sH.observeMutations) {
        var HS = SS.treeCallback,
          gS = void 0 === HS ? It : HS,
          tS = SS.nodeCallback,
          bS = void 0 === tS ? It : tS,
          XS = SS.pseudoElementsCallback,
          xS = void 0 === XS ? It : XS,
          NS = SS.observeMutationsRoot,
          qS = void 0 === NS ? ZS : NS;
        wt = new JS((function(SS) {
          if (!Pt) {
            var HS = Eg();
            TH(SS).forEach((function(SS) {
              if ("childList" === SS.type && SS.addedNodes.length > 0 && !ft(SS.addedNodes[0]) && (sH.searchPseudoElements && xS(SS.target), gS(SS.target)), "attributes" === SS.type && SS.target.parentNode && sH.searchPseudoElements && xS([SS.target], !0), "attributes" === SS.type && ft(SS.target) && ~VH.indexOf(SS.attributeName))
                if ("class" === SS.attributeName && function(SS) {
                    var HS = SS.getAttribute ? SS.getAttribute(nH) : null,
                      gS = SS.getAttribute ? SS.getAttribute(PH) : null;
                    return HS && gS
                  }(SS.target)) {
                  var tS = yg(oH(SS.target)),
                    XS = tS.prefix,
                    NS = tS.iconName;
                  SS.target.setAttribute(nH, XS || HS), NS && SS.target.setAttribute(PH, NS)
                } else(qS = SS.target) && qS.classList && qS.classList.contains && qS.classList.contains(sH.replacementClass) && bS(SS.target);
              var qS
            }))
          }
        })), dS && wt.observe(qS, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function Zt(SS) {
      var HS, gS, tS = SS.getAttribute("data-prefix"),
        bS = SS.getAttribute("data-icon"),
        XS = void 0 !== SS.innerText ? SS.innerText.trim() : "",
        xS = yg(oH(SS));
      return xS.prefix || (xS.prefix = Eg()), tS && bS && (xS.prefix = tS, xS.iconName = bS), xS.iconName && xS.prefix || (xS.prefix && XS.length > 0 && (xS.iconName = (HS = xS.prefix, gS = SS.innerText, (Qg[HS] || {})[gS] || dg(xS.prefix, fg(SS.innerText)))), !xS.iconName && sH.autoFetchSvg && SS.firstChild && SS.firstChild.nodeType === Node.TEXT_NODE && (xS.iconName = SS.firstChild.data)), xS
    }

    function Jt(SS) {
      var HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        gS = Zt(SS),
        tS = gS.iconName,
        bS = gS.prefix,
        XS = gS.rest,
        xS = function(SS) {
          return TH(SS.attributes).reduce((function(SS, HS) {
            return "class" !== SS.name && "style" !== SS.name && (SS[HS.name] = HS.value), SS
          }), {})
        }(SS),
        NS = Bg("parseNodeAttributes", {}, SS),
        uS = HS.styleParser ? function(SS) {
          var HS = SS.getAttribute("style"),
            gS = [];
          return HS && (gS = HS.split(";").reduce((function(SS, HS) {
            var gS = HS.split(":"),
              tS = gS[0],
              bS = gS.slice(1);
            return tS && bS.length > 0 && (SS[tS] = bS.join(":").trim()), SS
          }), {})), gS
        }(SS) : [];
      return qS({
        iconName: tS,
        prefix: bS,
        transform: FH,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: XS,
          styles: uS,
          attributes: xS
        }
      }, NS)
    }
    var Ot = bg.styles;

    function dt(SS) {
      var HS = "nest" === sH.autoReplaceSvg ? Jt(SS, {
        styleParser: !1
      }) : Jt(SS);
      return ~HS.extra.classes.indexOf(AH) ? Fg("generateLayersText", SS, HS) : Fg("generateSvgReplacementMutation", SS, HS)
    }

    function ct(SS) {
      var HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!dS) return Promise.resolve();
      var gS = ZS.documentElement.classList,
        tS = function(SS) {
          return gS.add("".concat(QH, "-").concat(SS))
        },
        bS = function(SS) {
          return gS.remove("".concat(QH, "-").concat(SS))
        },
        XS = sH.autoFetchSvg ? [].concat(IS(SH), IS(IH)) : ES.concat(Object.keys(Ot));
      XS.includes("fa") || XS.push("fa");
      var xS = [".".concat(AH, ":not([").concat(GH, "])")].concat(XS.map((function(SS) {
        return ".".concat(SS, ":not([").concat(GH, "])")
      }))).join(", ");
      if (0 === xS.length) return Promise.resolve();
      var NS = [];
      try {
        NS = TH(SS.querySelectorAll(xS))
      } catch (fS) {}
      if (!(NS.length > 0)) return Promise.resolve();
      tS("pending"), bS("complete");
      var qS = ut("onTree"),
        uS = NS.reduce((function(SS, HS) {
          try {
            var gS = dt(HS);
            gS && SS.push(gS)
          } catch (fS) {
            hH || "MissingIcon" === fS.name && console.error(fS)
          }
          return SS
        }), []);
      return new Promise((function(SS, gS) {
        Promise.all(uS).then((function(gS) {
          nt(gS, (function() {
            tS("active"), tS("complete"), bS("pending"), "function" === typeof HS && HS(), qS(), SS()
          }))
        })).catch((function(SS) {
          qS(), gS(SS)
        }))
      }))
    }

    function vt(SS) {
      var HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      dt(SS).then((function(SS) {
        SS && nt([SS], HS)
      }))
    }
    var Et = function(SS) {
        var HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gS = HS.transform,
          tS = void 0 === gS ? FH : gS,
          bS = HS.symbol,
          XS = void 0 !== bS && bS,
          xS = HS.mask,
          NS = void 0 === xS ? null : xS,
          uS = HS.maskId,
          IS = void 0 === uS ? null : uS,
          fS = HS.classes,
          kS = void 0 === fS ? [] : fS,
          aS = HS.attributes,
          KS = void 0 === aS ? {} : aS,
          jS = HS.styles,
          GS = void 0 === jS ? {} : jS;
        if (SS) {
          var CS = SS.prefix,
            nS = SS.iconName,
            PS = SS.icon;
          return eg(qS({
            type: "icon"
          }, SS), (function() {
            return Mg("beforeDOMElementCreation", {
              iconDefinition: SS,
              params: HS
            }), rg({
              icons: {
                main: gt(PS),
                mask: NS ? gt(NS.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: CS,
              iconName: nS,
              transform: qS(qS({}, FH), tS),
              symbol: XS,
              maskId: IS,
              extra: {
                attributes: KS,
                styles: GS,
                classes: kS
              }
            })
          }))
        }
      },
      Lt = {
        mixout: function() {
          return {
            icon: (SS = Et, function(HS) {
              var gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                tS = (HS || {}).icon ? HS : Rg(HS || {}),
                bS = gS.mask;
              return bS && (bS = (bS || {}).icon ? bS : Rg(bS || {})), SS(tS, qS(qS({}, gS), {}, {
                mask: bS
              }))
            })
          };
          var SS
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(SS) {
              return SS.treeCallback = ct, SS.nodeCallback = vt, SS
            }
          }
        },
        provides: function(SS) {
          SS.i2svg = function(SS) {
            var HS = SS.node,
              gS = void 0 === HS ? ZS : HS,
              tS = SS.callback;
            return ct(gS, void 0 === tS ? function() {} : tS)
          }, SS.generateSvgReplacementMutation = function(SS, HS) {
            var gS = HS.iconName,
              tS = HS.prefix,
              bS = HS.transform,
              XS = HS.symbol,
              xS = HS.mask,
              NS = HS.maskId,
              qS = HS.extra;
            return new Promise((function(HS, IS) {
              Promise.all([bt(gS, tS), xS.iconName ? bt(xS.iconName, xS.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(xS) {
                var IS = uS(xS, 2),
                  fS = IS[0],
                  kS = IS[1];
                HS([SS, rg({
                  icons: {
                    main: fS,
                    mask: kS
                  },
                  prefix: tS,
                  iconName: gS,
                  transform: bS,
                  symbol: XS,
                  maskId: NS,
                  extra: qS,
                  watchable: !0
                })])
              })).catch(IS)
            }))
          }, SS.generateAbstractIcon = function(SS) {
            var HS, gS = SS.children,
              tS = SS.attributes,
              bS = SS.main,
              XS = SS.transform,
              xS = mH(SS.styles);
            return xS.length > 0 && (tS.style = xS), eH(XS) && (HS = Fg("generateAbstractTransformGrouping", {
              main: bS,
              transform: XS,
              containerWidth: bS.width,
              iconWidth: bS.width
            })), gS.push(HS || bS.icon), {
              children: gS,
              attributes: tS
            }
          }
        }
      },
      Yt = {
        mixout: function() {
          return {
            layer: function(SS) {
              var HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                gS = HS.classes,
                tS = void 0 === gS ? [] : gS;
              return eg({
                type: "layer"
              }, (function() {
                Mg("beforeDOMElementCreation", {
                  assembler: SS,
                  params: HS
                });
                var gS = [];
                return SS((function(SS) {
                  Array.isArray(SS) ? SS.map((function(SS) {
                    gS = gS.concat(SS.abstract)
                  })) : gS = gS.concat(SS.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(sH.cssPrefix, "-layers")].concat(IS(tS)).join(" ")
                  },
                  children: gS
                }]
              }))
            }
          }
        }
      },
      At = {
        mixout: function() {
          return {
            counter: function(SS) {
              var HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                gS = HS.title,
                tS = void 0 === gS ? null : gS,
                bS = HS.classes,
                XS = void 0 === bS ? [] : bS,
                xS = HS.attributes,
                NS = void 0 === xS ? {} : xS,
                uS = HS.styles,
                fS = void 0 === uS ? {} : uS;
              return eg({
                type: "counter",
                content: SS
              }, (function() {
                return Mg("beforeDOMElementCreation", {
                    content: SS,
                    params: HS
                  }),
                  function(SS) {
                    var HS = SS.content,
                      gS = SS.extra,
                      tS = qS(qS({}, gS.attributes), {}, {
                        class: gS.classes.join(" ")
                      }),
                      bS = mH(gS.styles);
                    bS.length > 0 && (tS.style = bS);
                    var XS = [];
                    return XS.push({
                      tag: "span",
                      attributes: tS,
                      children: [HS]
                    }), XS
                  }({
                    content: SS.toString(),
                    title: tS,
                    extra: {
                      attributes: NS,
                      styles: fS,
                      classes: ["".concat(sH.cssPrefix, "-layers-counter")].concat(IS(XS))
                    }
                  })
              }))
            }
          }
        }
      },
      yt = {
        mixout: function() {
          return {
            text: function(SS) {
              var HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                gS = HS.transform,
                tS = void 0 === gS ? FH : gS,
                bS = HS.classes,
                XS = void 0 === bS ? [] : bS,
                xS = HS.attributes,
                NS = void 0 === xS ? {} : xS,
                uS = HS.styles,
                fS = void 0 === uS ? {} : uS;
              return eg({
                type: "text",
                content: SS
              }, (function() {
                return Mg("beforeDOMElementCreation", {
                  content: SS,
                  params: HS
                }), St({
                  content: SS,
                  transform: qS(qS({}, FH), tS),
                  extra: {
                    attributes: NS,
                    styles: fS,
                    classes: ["".concat(sH.cssPrefix, "-layers-text")].concat(IS(XS))
                  }
                })
              }))
            }
          }
        },
        provides: function(SS) {
          SS.generateLayersText = function(SS, HS) {
            var gS = HS.transform,
              tS = HS.extra,
              bS = null,
              XS = null;
            if (cS) {
              var xS = parseInt(getComputedStyle(SS).fontSize, 10),
                NS = SS.getBoundingClientRect();
              bS = NS.width / xS, XS = NS.height / xS
            }
            return Promise.resolve([SS, St({
              content: SS.innerHTML,
              width: bS,
              height: XS,
              transform: gS,
              extra: tS,
              watchable: !0
            })])
          }
        }
      },
      Vt = new RegExp('"', "ug"),
      it = [1105920, 1112319],
      Wt = qS(qS(qS(qS({}, {
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
      zt = Object.keys(Wt).reduce((function(SS, HS) {
        return SS[HS.toLowerCase()] = Wt[HS], SS
      }), {}),
      Ut = Object.keys(zt).reduce((function(SS, HS) {
        var gS = zt[HS];
        return SS[HS] = gS[900] || IS(Object.entries(gS))[0][1], SS
      }), {});

    function pt(SS, HS) {
      var gS = "".concat("data-fa-pseudo-element-pending").concat(HS.replace(":", "-"));
      return new Promise((function(tS, bS) {
        if (null !== SS.getAttribute(gS)) return tS();
        var XS = TH(SS.children).filter((function(SS) {
            return SS.getAttribute(CH) === HS
          }))[0],
          xS = hS.getComputedStyle(SS, HS),
          NS = xS.getPropertyValue("font-family"),
          uS = NS.match(yH),
          fS = xS.getPropertyValue("font-weight"),
          kS = xS.getPropertyValue("content");
        if (XS && !uS) return SS.removeChild(XS), tS();
        if (uS && "none" !== kS && "" !== kS) {
          var aS = xS.getPropertyValue("content"),
            KS = function(SS, HS) {
              var gS = SS.replace(/^['"]|['"]$/g, "").toLowerCase(),
                tS = parseInt(HS),
                bS = isNaN(tS) ? "normal" : tS;
              return (zt[gS] || {})[bS] || Ut[gS]
            }(NS, fS),
            jS = function(SS) {
              return fg(IS(SS.replace(Vt, ""))[0] || "")
            }(aS),
            GS = uS[0].startsWith("FontAwesome"),
            CS = function(SS) {
              var HS = SS.getPropertyValue("font-feature-settings").includes("ss01"),
                gS = SS.getPropertyValue("content").replace(Vt, ""),
                tS = gS.codePointAt(0),
                bS = tS >= it[0] && tS <= it[1],
                XS = 2 === gS.length && gS[0] === gS[1];
              return bS || XS || HS
            }(xS),
            nS = dg(KS, jS),
            PS = nS;
          if (GS) {
            var QS = function(SS) {
              var HS = wg[SS],
                gS = dg("fas", SS);
              return HS || (gS ? {
                prefix: "fas",
                iconName: gS
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(jS);
            QS.iconName && QS.prefix && (nS = QS.iconName, KS = QS.prefix)
          }
          if (!nS || CS || XS && XS.getAttribute(nH) === KS && XS.getAttribute(PH) === PS) tS();
          else {
            SS.setAttribute(gS, PS), XS && SS.removeChild(XS);
            var DS = {
                iconName: null,
                prefix: null,
                transform: FH,
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
              wS = DS.extra;
            wS.attributes[CH] = HS, bt(nS, KS).then((function(bS) {
              var XS = rg(qS(qS({}, DS), {}, {
                  icons: {
                    main: bS,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: KS,
                  iconName: PS,
                  extra: wS,
                  watchable: !0
                })),
                xS = ZS.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === HS ? SS.insertBefore(xS, SS.firstChild) : SS.appendChild(xS), xS.outerHTML = XS.map((function(SS) {
                return qg(SS)
              })).join("\n"), SS.removeAttribute(gS), tS()
            })).catch(bS)
          }
        } else tS()
      }))
    }

    function st(SS) {
      return Promise.all([pt(SS, "::before"), pt(SS, "::after")])
    }

    function Bt(SS) {
      return SS.parentNode !== document.head && !~DH.indexOf(SS.tagName.toUpperCase()) && !SS.getAttribute(CH) && (!SS.parentNode || "svg" !== SS.parentNode.tagName)
    }
    var Mt = function(SS) {
        return !!SS && wH.some((function(HS) {
          return SS.includes(HS)
        }))
      },
      Ft = function(SS) {
        if (!SS) return [];
        var HS = new Set,
          gS = SS.split(/,(?![^()]*\))/).map((function(SS) {
            return SS.trim()
          }));
        gS = gS.flatMap((function(SS) {
          return SS.includes("(") ? SS : SS.split(",").map((function(SS) {
            return SS.trim()
          }))
        }));
        var tS, bS = XS(gS);
        try {
          for (bS.s(); !(tS = bS.n()).done;) {
            var xS = tS.value;
            if (Mt(xS)) {
              var NS = wH.reduce((function(SS, HS) {
                return SS.replace(HS, "")
              }), xS);
              "" !== NS && "*" !== NS && HS.add(NS)
            }
          }
        } catch (qS) {
          bS.e(qS)
        } finally {
          bS.f()
        }
        return HS
      };

    function Rt(SS) {
      if (dS) {
        var HS;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) HS = SS;
        else if (sH.searchPseudoElementsFullScan) HS = SS.querySelectorAll("*");
        else {
          var gS, tS = new Set,
            bS = XS(document.styleSheets);
          try {
            for (bS.s(); !(gS = bS.n()).done;) {
              var xS = gS.value;
              try {
                var NS, qS = XS(xS.cssRules);
                try {
                  for (qS.s(); !(NS = qS.n()).done;) {
                    var uS, IS = NS.value,
                      fS = XS(Ft(IS.selectorText));
                    try {
                      for (fS.s(); !(uS = fS.n()).done;) {
                        var kS = uS.value;
                        tS.add(kS)
                      }
                    } catch (KS) {
                      fS.e(KS)
                    } finally {
                      fS.f()
                    }
                  }
                } catch (KS) {
                  qS.e(KS)
                } finally {
                  qS.f()
                }
              } catch (jS) {
                sH.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(xS.href, " (").concat(jS.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (KS) {
            bS.e(KS)
          } finally {
            bS.f()
          }
          if (!tS.size) return;
          var aS = Array.from(tS).join(", ");
          try {
            HS = SS.querySelectorAll(aS)
          } catch (GS) {}
        }
        return new Promise((function(SS, gS) {
          var tS = TH(HS).filter(Bt).map(st),
            bS = ut("searchPseudoElements");
          Qt(), Promise.all(tS).then((function() {
            bS(), Dt(), SS()
          })).catch((function() {
            bS(), Dt(), gS()
          }))
        }))
      }
    }
    var Tt = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(SS) {
              return SS.pseudoElementsCallback = Rt, SS
            }
          }
        },
        provides: function(SS) {
          SS.pseudoElements2svg = function(SS) {
            var HS = SS.node,
              gS = void 0 === HS ? ZS : HS;
            sH.searchPseudoElements && Rt(gS)
          }
        }
      },
      ot = !1,
      lt = function(SS) {
        return SS.toLowerCase().split(" ").reduce((function(SS, HS) {
          var gS = HS.toLowerCase().split("-"),
            tS = gS[0],
            bS = gS.slice(1).join("-");
          if (tS && "h" === bS) return SS.flipX = !0, SS;
          if (tS && "v" === bS) return SS.flipY = !0, SS;
          if (bS = parseFloat(bS), isNaN(bS)) return SS;
          switch (tS) {
            case "grow":
              SS.size = SS.size + bS;
              break;
            case "shrink":
              SS.size = SS.size - bS;
              break;
            case "left":
              SS.x = SS.x - bS;
              break;
            case "right":
              SS.x = SS.x + bS;
              break;
            case "up":
              SS.y = SS.y - bS;
              break;
            case "down":
              SS.y = SS.y + bS;
              break;
            case "rotate":
              SS.rotate = SS.rotate + bS
          }
          return SS
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      mt = {
        mixout: function() {
          return {
            parse: {
              transform: function(SS) {
                return lt(SS)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(SS, HS) {
              var gS = HS.getAttribute("data-fa-transform");
              return gS && (SS.transform = lt(gS)), SS
            }
          }
        },
        provides: function(SS) {
          SS.generateAbstractTransformGrouping = function(SS) {
            var HS = SS.main,
              gS = SS.transform,
              tS = SS.containerWidth,
              bS = SS.iconWidth,
              XS = {
                transform: "translate(".concat(tS / 2, " 256)")
              },
              xS = "translate(".concat(32 * gS.x, ", ").concat(32 * gS.y, ") "),
              NS = "scale(".concat(gS.size / 16 * (gS.flipX ? -1 : 1), ", ").concat(gS.size / 16 * (gS.flipY ? -1 : 1), ") "),
              uS = "rotate(".concat(gS.rotate, " 0 0)"),
              IS = {
                outer: XS,
                inner: {
                  transform: "".concat(xS, " ").concat(NS, " ").concat(uS)
                },
                path: {
                  transform: "translate(".concat(bS / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: qS({}, IS.outer),
              children: [{
                tag: "g",
                attributes: qS({}, IS.inner),
                children: [{
                  tag: HS.icon.tag,
                  children: HS.icon.children,
                  attributes: qS(qS({}, HS.icon.attributes), IS.path)
                }]
              }]
            }
          }
        }
      },
      et = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function rt(SS) {
      var HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return SS.attributes && (SS.attributes.fill || HS) && (SS.attributes.fill = "black"), SS
    }
    var Sb = {
        hooks: function() {
          return {
            parseNodeAttributes: function(SS, HS) {
              var gS = HS.getAttribute("data-fa-mask"),
                tS = gS ? yg(gS.split(" ").map((function(SS) {
                  return SS.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return tS.prefix || (tS.prefix = Eg()), SS.mask = tS, SS.maskId = HS.getAttribute("data-fa-mask-id"), SS
            }
          }
        },
        provides: function(SS) {
          SS.generateAbstractMask = function(SS) {
            var HS, gS = SS.children,
              tS = SS.attributes,
              bS = SS.main,
              XS = SS.mask,
              xS = SS.maskId,
              NS = SS.transform,
              uS = bS.width,
              IS = bS.icon,
              fS = XS.width,
              kS = XS.icon,
              aS = function(SS) {
                var HS = SS.transform,
                  gS = SS.containerWidth,
                  tS = SS.iconWidth,
                  bS = {
                    transform: "translate(".concat(gS / 2, " 256)")
                  },
                  XS = "translate(".concat(32 * HS.x, ", ").concat(32 * HS.y, ") "),
                  xS = "scale(".concat(HS.size / 16 * (HS.flipX ? -1 : 1), ", ").concat(HS.size / 16 * (HS.flipY ? -1 : 1), ") "),
                  NS = "rotate(".concat(HS.rotate, " 0 0)");
                return {
                  outer: bS,
                  inner: {
                    transform: "".concat(XS, " ").concat(xS, " ").concat(NS)
                  },
                  path: {
                    transform: "translate(".concat(tS / 2 * -1, " -256)")
                  }
                }
              }({
                transform: NS,
                containerWidth: fS,
                iconWidth: uS
              }),
              KS = {
                tag: "rect",
                attributes: qS(qS({}, et), {}, {
                  fill: "white"
                })
              },
              jS = IS.children ? {
                children: IS.children.map(rt)
              } : {},
              GS = {
                tag: "g",
                attributes: qS({}, aS.inner),
                children: [rt(qS({
                  tag: IS.tag,
                  attributes: qS(qS({}, IS.attributes), aS.path)
                }, jS))]
              },
              CS = {
                tag: "g",
                attributes: qS({}, aS.outer),
                children: [GS]
              },
              nS = "mask-".concat(xS || RH()),
              PS = "clip-".concat(xS || RH()),
              QS = {
                tag: "mask",
                attributes: qS(qS({}, et), {}, {
                  id: nS,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [KS, CS]
              },
              DS = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: PS
                  },
                  children: (HS = kS, "g" === HS.tag ? HS.children : [HS])
                }, QS]
              };
            return gS.push(DS, {
              tag: "rect",
              attributes: qS({
                fill: "currentColor",
                "clip-path": "url(#".concat(PS, ")"),
                mask: "url(#".concat(nS, ")")
              }, et)
            }), {
              children: gS,
              attributes: tS
            }
          }
        }
      },
      Hb = {
        provides: function(SS) {
          var HS = !1;
          hS.matchMedia && (HS = hS.matchMedia("(prefers-reduced-motion: reduce)").matches), SS.missingIconAbstract = function() {
            var SS = [],
              gS = {
                fill: "currentColor"
              },
              tS = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            SS.push({
              tag: "path",
              attributes: qS(qS({}, gS), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var bS = qS(qS({}, tS), {}, {
                attributeName: "opacity"
              }),
              XS = {
                tag: "circle",
                attributes: qS(qS({}, gS), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return HS || XS.children.push({
              tag: "animate",
              attributes: qS(qS({}, tS), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: qS(qS({}, bS), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), SS.push(XS), SS.push({
              tag: "path",
              attributes: qS(qS({}, gS), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: HS ? [] : [{
                tag: "animate",
                attributes: qS(qS({}, bS), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), HS || SS.push({
              tag: "path",
              attributes: qS(qS({}, gS), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: qS(qS({}, bS), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: SS
            }
          }
        }
      };
    ! function(SS, HS) {
      var gS = HS.mixoutsTo;
      zg = SS, Ug = {}, Object.keys(pg).forEach((function(SS) {
        -1 === sg.indexOf(SS) && delete pg[SS]
      })), zg.forEach((function(SS) {
        var HS = SS.mixout ? SS.mixout() : {};
        if (Object.keys(HS).forEach((function(SS) {
            "function" === typeof HS[SS] && (gS[SS] = HS[SS]), "object" === kS(HS[SS]) && Object.keys(HS[SS]).forEach((function(tS) {
              gS[SS] || (gS[SS] = {}), gS[SS][tS] = HS[SS][tS]
            }))
          })), SS.hooks) {
          var tS = SS.hooks();
          Object.keys(tS).forEach((function(SS) {
            Ug[SS] || (Ug[SS] = []), Ug[SS].push(tS[SS])
          }))
        }
        SS.provides && SS.provides(pg)
      }))
    }([gg, Lt, Yt, At, yt, Tt, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              Qt(), ot = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            ht(Bg("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            wt && wt.disconnect()
          },
          watch: function(SS) {
            var HS = SS.observeMutationsRoot;
            ot ? Dt() : ht(Bg("mutationObserverCallbacks", {
              observeMutationsRoot: HS
            }))
          }
        }
      }
    }, mt, Sb, Hb, {
      hooks: function() {
        return {
          parseNodeAttributes: function(SS, HS) {
            var gS = HS.getAttribute("data-fa-symbol"),
              tS = null !== gS && ("" === gS || gS);
            return SS.symbol = tS, SS
          }
        }
      }
    }], {
      mixoutsTo: lg
    });
    var gb = lg.noAuto,
      tb = lg.config,
      bb = lg.library,
      Xb = lg.dom,
      xb = lg.parse,
      Nb = lg.findIconDefinition,
      qb = lg.toHtml,
      ub = lg.icon,
      Ib = lg.layer,
      fb = lg.text,
      kb = lg.counter
  },
  6879: SS => {
    SS.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);