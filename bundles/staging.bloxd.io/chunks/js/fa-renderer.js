/*! For license information please see tz47m9.fa-renderer.004bc8f1.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6719: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      FontAwesomeIcon: () => XD
    });
    var pD = wD(6712),
      sD = wD(4981),
      KD = wD.n(sD),
      rD = wD(58);

    function LD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function cD(DD, zD, wD) {
      return (zD = function(DD) {
        var zD = function(DD, zD) {
          if ("object" != typeof DD || !DD) return DD;
          var wD = DD[Symbol.toPrimitive];
          if (void 0 !== wD) {
            var pD = wD.call(DD, zD || "default");
            if ("object" != typeof pD) return pD;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == typeof zD ? zD : zD + ""
      }(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function gD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function RD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? gD(Object(wD), !0).forEach((function(zD) {
          cD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : gD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function AD(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        var wD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != wD) {
          var pD, sD, KD, rD, LD = [],
            cD = !0,
            gD = !1;
          try {
            if (KD = (wD = wD.call(DD)).next, 0 === zD) {
              if (Object(wD) !== wD) return;
              cD = !1
            } else
              for (; !(cD = (pD = KD.call(wD)).done) && (LD.push(pD.value), LD.length !== zD); cD = !0);
          } catch (DD) {
            gD = !0, sD = DD
          } finally {
            try {
              if (!cD && null != wD.return && (rD = wD.return(), Object(rD) !== rD)) return
            } finally {
              if (gD) throw sD
            }
          }
          return LD
        }
      }(DD, zD) || ID(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function UD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return LD(DD)
      }(DD) || function(DD) {
        if ("undefined" != typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || ID(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fD(DD) {
      return fD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, fD(DD)
    }

    function ID(DD, zD) {
      if (DD) {
        if ("string" == typeof DD) return LD(DD, zD);
        var wD = {}.toString.call(DD).slice(8, -1);
        return "Object" === wD && DD.constructor && (wD = DD.constructor.name), "Map" === wD || "Set" === wD ? Array.from(DD) : "Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD) ? LD(DD, zD) : void 0
      }
    }
    var BD;
    try {
      var GD = wD(6723);
      BD = GD.version
    } catch (PD) {
      BD = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function hD(DD) {
      var zD = DD.beat,
        wD = DD.fade,
        pD = DD.beatFade,
        sD = DD.bounce,
        KD = DD.shake,
        rD = DD.flash,
        LD = DD.spin,
        gD = DD.spinPulse,
        RD = DD.spinReverse,
        UD = DD.pulse,
        fD = DD.fixedWidth,
        ID = DD.inverse,
        GD = DD.border,
        hD = DD.listItem,
        nD = DD.flip,
        MD = DD.size,
        OD = DD.rotation,
        JD = DD.pull,
        ED = DD.swapOpacity,
        QD = DD.rotateBy,
        XD = DD.widthAuto,
        VD = function(DD, zD) {
          for (var wD = AD(DD.split("-"), 2), pD = wD[0], sD = wD[1], KD = AD(zD.split("-"), 2), rD = KD[0], LD = KD[1], cD = pD.split("."), gD = rD.split("."), RD = 0; RD < Math.max(cD.length, gD.length); RD++) {
            var UD = cD[RD] || "0",
              fD = gD[RD] || "0",
              ID = parseInt(UD, 10),
              BD = parseInt(fD, 10);
            if (ID !== BD) return ID > BD
          }
          for (var GD = 0; GD < Math.max(cD.length, gD.length); GD++) {
            var hD = cD[GD] || "0",
              nD = gD[GD] || "0";
            if (hD !== nD && hD.length !== nD.length) return hD.length < nD.length
          }
          return !(sD && !LD)
        }(BD, "7.0.0"),
        PD = cD(cD(cD(cD(cD(cD({
          "fa-beat": zD,
          "fa-fade": wD,
          "fa-beat-fade": pD,
          "fa-bounce": sD,
          "fa-shake": KD,
          "fa-flash": rD,
          "fa-spin": LD,
          "fa-spin-reverse": RD,
          "fa-spin-pulse": gD,
          "fa-pulse": UD,
          "fa-fw": fD,
          "fa-inverse": ID,
          "fa-border": GD,
          "fa-li": hD,
          "fa-flip": !0 === nD,
          "fa-flip-horizontal": "horizontal" === nD || "both" === nD,
          "fa-flip-vertical": "vertical" === nD || "both" === nD
        }, "fa-".concat(MD), "undefined" !== typeof MD && null !== MD), "fa-rotate-".concat(OD), "undefined" !== typeof OD && null !== OD && 0 !== OD), "fa-pull-".concat(JD), "undefined" !== typeof JD && null !== JD), "fa-swap-opacity", ED), "fa-rotate-by", VD && QD), "fa-width-auto", VD && XD);
      return Object.keys(PD).map((function(DD) {
        return PD[DD] ? DD : null
      })).filter((function(DD) {
        return DD
      }))
    }

    function nD(DD) {
      return zD = DD, (zD -= 0) === zD ? DD : (DD = DD.replace(/[\-_\s]+(.)?/g, (function(DD, zD) {
        return zD ? zD.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + DD.substr(1);
      var zD
    }
    var MD = ["style"];
    var OD = !1;
    try {
      OD = !0
    } catch (PD) {}

    function JD(DD) {
      return DD && "object" === fD(DD) && DD.prefix && DD.iconName && DD.icon ? DD : pD.parse.icon ? pD.parse.icon(DD) : null === DD ? null : DD && "object" === fD(DD) && DD.prefix && DD.iconName ? DD : Array.isArray(DD) && 2 === DD.length ? {
        prefix: DD[0],
        iconName: DD[1]
      } : "string" === typeof DD ? {
        prefix: "fas",
        iconName: DD
      } : void 0
    }

    function ED(DD, zD) {
      return Array.isArray(zD) && zD.length > 0 || !Array.isArray(zD) && zD ? cD({}, DD, zD) : {}
    }
    var QD = {
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
      XD = rD.forwardRef((function(DD, zD) {
        var wD = RD(RD({}, QD), DD),
          sD = wD.icon,
          KD = wD.mask,
          rD = wD.symbol,
          LD = wD.className,
          cD = wD.title,
          gD = wD.titleId,
          AD = wD.maskId,
          fD = JD(sD),
          ID = ED("classes", [].concat(UD(hD(wD)), UD((LD || "").split(" ")))),
          BD = ED("transform", "string" === typeof wD.transform ? pD.parse.transform(wD.transform) : wD.transform),
          GD = ED("mask", JD(KD)),
          nD = (0, pD.icon)(fD, RD(RD(RD(RD({}, ID), BD), GD), {}, {
            symbol: rD,
            title: cD,
            titleId: gD,
            maskId: AD
          }));
        if (!nD) return function() {
          var DD;
          !OD && console && "function" === typeof console.error && (DD = console).error.apply(DD, arguments)
        }("Could not find icon", fD), null;
        var MD = nD.abstract,
          XD = {
            ref: zD
          };
        return Object.keys(wD).forEach((function(DD) {
          QD.hasOwnProperty(DD) || (XD[DD] = wD[DD])
        })), VD(MD[0], XD)
      }));
    XD.displayName = "FontAwesomeIcon", XD.propTypes = {
      beat: KD().bool,
      border: KD().bool,
      beatFade: KD().bool,
      bounce: KD().bool,
      className: KD().string,
      fade: KD().bool,
      flash: KD().bool,
      mask: KD().oneOfType([KD().object, KD().array, KD().string]),
      maskId: KD().string,
      fixedWidth: KD().bool,
      inverse: KD().bool,
      flip: KD().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: KD().oneOfType([KD().object, KD().array, KD().string]),
      listItem: KD().bool,
      pull: KD().oneOf(["right", "left"]),
      pulse: KD().bool,
      rotation: KD().oneOf([0, 90, 180, 270]),
      rotateBy: KD().bool,
      shake: KD().bool,
      size: KD().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: KD().bool,
      spinPulse: KD().bool,
      spinReverse: KD().bool,
      symbol: KD().oneOfType([KD().bool, KD().string]),
      title: KD().string,
      titleId: KD().string,
      transform: KD().oneOfType([KD().string, KD().object]),
      swapOpacity: KD().bool,
      widthAuto: KD().bool
    };
    var VD = function DD(zD, wD) {
      var pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof wD) return wD;
      var sD = (wD.children || []).map((function(wD) {
          return DD(zD, wD)
        })),
        KD = Object.keys(wD.attributes || {}).reduce((function(DD, zD) {
          var pD = wD.attributes[zD];
          switch (zD) {
            case "class":
              DD.attrs.className = pD, delete wD.attributes.class;
              break;
            case "style":
              DD.attrs.style = pD.split(";").map((function(DD) {
                return DD.trim()
              })).filter((function(DD) {
                return DD
              })).reduce((function(DD, zD) {
                var wD, pD = zD.indexOf(":"),
                  sD = nD(zD.slice(0, pD)),
                  KD = zD.slice(pD + 1).trim();
                return sD.startsWith("webkit") ? DD[(wD = sD, wD.charAt(0).toUpperCase() + wD.slice(1))] = KD : DD[sD] = KD, DD
              }), {});
              break;
            default:
              0 === zD.indexOf("aria-") || 0 === zD.indexOf("data-") ? DD.attrs[zD.toLowerCase()] = pD : DD.attrs[nD(zD)] = pD
          }
          return DD
        }), {
          attrs: {}
        }),
        rD = pD.style,
        LD = void 0 === rD ? {} : rD,
        cD = function(DD, zD) {
          if (null == DD) return {};
          var wD, pD, sD = function(DD, zD) {
            if (null == DD) return {};
            var wD = {};
            for (var pD in DD)
              if ({}.hasOwnProperty.call(DD, pD)) {
                if (-1 !== zD.indexOf(pD)) continue;
                wD[pD] = DD[pD]
              } return wD
          }(DD, zD);
          if (Object.getOwnPropertySymbols) {
            var KD = Object.getOwnPropertySymbols(DD);
            for (pD = 0; pD < KD.length; pD++) wD = KD[pD], -1 === zD.indexOf(wD) && {}.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
          }
          return sD
        }(pD, MD);
      return KD.attrs.style = RD(RD({}, KD.attrs.style), LD), zD.apply(void 0, [wD.tag, RD(RD({}, KD.attrs), cD)].concat(UD(sD)))
    }.bind(null, rD.createElement)
  },
  4988: (DD, zD, wD) => {
    var pD = wD(4997);

    function sD() {}

    function KD() {}
    KD.resetWarningCache = sD, DD.exports = function() {
      function DD(DD, zD, wD, sD, KD, rD) {
        if (rD !== pD) {
          var LD = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw LD.name = "Invariant Violation", LD
        }
      }

      function zD() {
        return DD
      }
      DD.isRequired = DD;
      var wD = {
        array: DD,
        bigint: DD,
        bool: DD,
        func: DD,
        number: DD,
        object: DD,
        string: DD,
        symbol: DD,
        any: DD,
        arrayOf: zD,
        element: DD,
        elementType: DD,
        instanceOf: zD,
        node: DD,
        objectOf: zD,
        oneOf: zD,
        oneOfType: zD,
        shape: zD,
        exact: zD,
        checkPropTypes: KD,
        resetWarningCache: sD
      };
      return wD.PropTypes = wD, wD
    }
  },
  4981: (DD, zD, wD) => {
    DD.exports = wD(4988)()
  },
  4997: DD => {
    DD.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6712: (DD, zD, wD) => {
    function pD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function sD(DD, zD) {
      for (var wD = 0; wD < zD.length; wD++) {
        var pD = zD[wD];
        pD.enumerable = pD.enumerable || !1, pD.configurable = !0, "value" in pD && (pD.writable = !0), Object.defineProperty(DD, AD(pD.key), pD)
      }
    }

    function KD(DD, zD) {
      var wD = "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
      if (!wD) {
        if (Array.isArray(DD) || (wD = fD(DD)) || zD && DD && "number" == typeof DD.length) {
          wD && (DD = wD);
          var pD = 0,
            sD = function() {};
          return {
            s: sD,
            n: function() {
              return pD >= DD.length ? {
                done: !0
              } : {
                done: !1,
                value: DD[pD++]
              }
            },
            e: function(DD) {
              throw DD
            },
            f: sD
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var KD, rD = !0,
        LD = !1;
      return {
        s: function() {
          wD = wD.call(DD)
        },
        n: function() {
          var DD = wD.next();
          return rD = DD.done, DD
        },
        e: function(DD) {
          LD = !0, KD = DD
        },
        f: function() {
          try {
            rD || null == wD.return || wD.return()
          } finally {
            if (LD) throw KD
          }
        }
      }
    }

    function rD(DD, zD, wD) {
      return (zD = AD(zD)) in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function LD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function cD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? LD(Object(wD), !0).forEach((function(zD) {
          rD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : LD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function gD(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        var wD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != wD) {
          var pD, sD, KD, rD, LD = [],
            cD = !0,
            gD = !1;
          try {
            if (KD = (wD = wD.call(DD)).next, 0 === zD) {
              if (Object(wD) !== wD) return;
              cD = !1
            } else
              for (; !(cD = (pD = KD.call(wD)).done) && (LD.push(pD.value), LD.length !== zD); cD = !0);
          } catch (DD) {
            gD = !0, sD = DD
          } finally {
            try {
              if (!cD && null != wD.return && (rD = wD.return(), Object(rD) !== rD)) return
            } finally {
              if (gD) throw sD
            }
          }
          return LD
        }
      }(DD, zD) || fD(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function RD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return pD(DD)
      }(DD) || function(DD) {
        if ("undefined" != typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || fD(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AD(DD) {
      var zD = function(DD, zD) {
        if ("object" != typeof DD || !DD) return DD;
        var wD = DD[Symbol.toPrimitive];
        if (void 0 !== wD) {
          var pD = wD.call(DD, zD || "default");
          if ("object" != typeof pD) return pD;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == typeof zD ? zD : zD + ""
    }

    function UD(DD) {
      return UD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, UD(DD)
    }

    function fD(DD, zD) {
      if (DD) {
        if ("string" == typeof DD) return pD(DD, zD);
        var wD = {}.toString.call(DD).slice(8, -1);
        return "Object" === wD && DD.constructor && (wD = DD.constructor.name), "Map" === wD || "Set" === wD ? Array.from(DD) : "Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD) ? pD(DD, zD) : void 0
      }
    }
    wD.r(zD), wD.d(zD, {
      api: () => Yw,
      config: () => ss,
      counter: () => fs,
      dom: () => rs,
      findIconDefinition: () => cs,
      icon: () => Rs,
      layer: () => As,
      library: () => Ks,
      noAuto: () => ps,
      parse: () => Ls,
      text: () => Us,
      toHtml: () => gs
    });
    var ID = function() {},
      BD = {},
      GD = {},
      hD = null,
      nD = {
        mark: ID,
        measure: ID
      };
    try {
      "undefined" !== typeof window && (BD = window), "undefined" !== typeof document && (GD = document), "undefined" !== typeof MutationObserver && (hD = MutationObserver), "undefined" !== typeof performance && (nD = performance)
    } catch (eD) {}
    var MD, OD, JD = (BD.navigator || {}).userAgent,
      ED = void 0 === JD ? "" : JD,
      QD = BD,
      XD = GD,
      VD = hD,
      PD = nD,
      CD = (QD.document, !!XD.documentElement && !!XD.head && "function" === typeof XD.addEventListener && "function" === typeof XD.createElement),
      xD = ~ED.indexOf("MSIE") || ~ED.indexOf("Trident/"),
      TD = {
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
      bD = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      jD = "classic",
      dD = "duotone",
      SD = "sharp",
      iD = "sharp-duotone",
      lD = "chisel",
      WD = "etch",
      ND = "graphite",
      ZD = "jelly",
      yD = "jelly-duo",
      kD = "jelly-fill",
      mD = "notdog",
      eD = "notdog-duo",
      oD = "slab",
      aD = "slab-press",
      uD = "thumbprint",
      vD = "utility",
      tD = "utility-duo",
      FD = "utility-fill",
      YD = "whiteboard",
      HD = [jD, dD, SD, iD, lD, WD, ND, ZD, yD, kD, mD, eD, oD, aD, uD, vD, tD, FD, YD],
      qD = (rD(rD(rD(rD(rD(rD(rD(rD(rD(rD(MD = {}, jD, "Classic"), dD, "Duotone"), SD, "Sharp"), iD, "Sharp Duotone"), lD, "Chisel"), WD, "Etch"), ND, "Graphite"), ZD, "Jelly"), yD, "Jelly Duo"), kD, "Jelly Fill"), rD(rD(rD(rD(rD(rD(rD(rD(rD(MD, mD, "Notdog"), eD, "Notdog Duo"), oD, "Slab"), aD, "Slab Press"), uD, "Thumbprint"), vD, "Utility"), tD, "Utility Duo"), FD, "Utility Fill"), YD, "Whiteboard"), new Map([
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
      Dz = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      zz = {
        fak: "kit",
        "fa-kit": "kit"
      },
      wz = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      pz = (rD(rD({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      sz = {
        "kit-duotone": "fakd"
      },
      Kz = "duotone-group",
      rz = "swap-opacity",
      Lz = "primary",
      cz = "secondary",
      gz = (rD(rD(rD(rD(rD(rD(rD(rD(rD(rD(OD = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), rD(rD(rD(rD(rD(rD(rD(rD(rD(OD, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), rD(rD({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      Rz = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      Az = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Uz = Az.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      fz = [].concat(RD(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", Kz, rz, Lz, cz]).concat(Az.map((function(DD) {
        return "".concat(DD, "x")
      }))).concat(Uz.map((function(DD) {
        return "w-".concat(DD)
      }))),
      Iz = "___FONT_AWESOME___",
      Bz = "svg-inline--fa",
      Gz = "data-fa-i2svg",
      hz = "data-fa-pseudo-element",
      nz = "data-prefix",
      Mz = "data-icon",
      Oz = "fontawesome-i2svg",
      Jz = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      Ez = ["::before", "::after", ":before", ":after"],
      Qz = function() {
        try {
          return !0
        } catch (DD) {
          return !1
        }
      }();

    function Xz(DD) {
      return new Proxy(DD, {
        get: function(DD, zD) {
          return zD in DD ? DD[zD] : DD[jD]
        }
      })
    }
    var Vz = cD({}, TD);
    Vz[jD] = cD(cD(cD(cD({}, {
      "fa-duotone": "duotone"
    }), TD[jD]), zz), wz);
    var Pz = Xz(Vz),
      Cz = cD({}, {
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
    Cz[jD] = cD(cD(cD(cD({}, {
      duotone: "fad"
    }), Cz[jD]), pz), sz);
    var xz = Xz(Cz),
      Tz = cD({}, gz);
    Tz[jD] = cD(cD({}, Tz[jD]), {
      fak: "fa-kit"
    });
    var bz = Xz(Tz),
      jz = cD({}, {
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
    jz[jD] = cD(cD({}, jz[jD]), {
      "fa-kit": "fak"
    });
    Xz(jz);
    var dz = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      Sz = "fa-layers-text",
      iz = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      lz = (Xz(cD({}, {
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
      Wz = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      Nz = [].concat(RD(["kit"]), RD(fz)),
      Zz = QD.FontAwesomeConfig || {};
    if (XD && "function" === typeof XD.querySelector) {
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
      ].forEach((function(DD) {
        var zD = gD(DD, 2),
          wD = zD[0],
          pD = zD[1],
          sD = function(DD) {
            return "" === DD || "false" !== DD && ("true" === DD || DD)
          }(function(DD) {
            var zD = XD.querySelector("script[" + DD + "]");
            if (zD) return zD.getAttribute(DD)
          }(wD));
        void 0 !== sD && null !== sD && (Zz[pD] = sD)
      }))
    }
    var yz = {
      styleDefault: "solid",
      familyDefault: jD,
      cssPrefix: "fa",
      replacementClass: Bz,
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
    Zz.familyPrefix && (Zz.cssPrefix = Zz.familyPrefix);
    var kz = cD(cD({}, yz), Zz);
    kz.autoReplaceSvg || (kz.observeMutations = !1);
    var mz = {};
    Object.keys(yz).forEach((function(DD) {
      Object.defineProperty(mz, DD, {
        enumerable: !0,
        set: function(zD) {
          kz[DD] = zD, ez.forEach((function(DD) {
            return DD(mz)
          }))
        },
        get: function() {
          return kz[DD]
        }
      })
    })), Object.defineProperty(mz, "familyPrefix", {
      enumerable: !0,
      set: function(DD) {
        kz.cssPrefix = DD, ez.forEach((function(DD) {
          return DD(mz)
        }))
      },
      get: function() {
        return kz.cssPrefix
      }
    }), QD.FontAwesomeConfig = mz;
    var ez = [];
    var oz = 16,
      az = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function uz() {
      for (var DD = 12, zD = ""; DD-- > 0;) zD += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return zD
    }

    function vz(DD) {
      for (var zD = [], wD = (DD || []).length >>> 0; wD--;) zD[wD] = DD[wD];
      return zD
    }

    function tz(DD) {
      return DD.classList ? vz(DD.classList) : (DD.getAttribute("class") || "").split(" ").filter((function(DD) {
        return DD
      }))
    }

    function Fz(DD) {
      return "".concat(DD).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Yz(DD) {
      return Object.keys(DD || {}).reduce((function(zD, wD) {
        return zD + "".concat(wD, ": ").concat(DD[wD].trim(), ";")
      }), "")
    }

    function Hz(DD) {
      return DD.size !== az.size || DD.x !== az.x || DD.y !== az.y || DD.rotate !== az.rotate || DD.flipX || DD.flipY
    }

    function qz() {
      var DD = "fa",
        zD = Bz,
        wD = mz.cssPrefix,
        pD = mz.replacementClass,
        sD = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (wD !== DD || pD !== zD) {
        var KD = new RegExp("\\.".concat(DD, "\\-"), "g"),
          rD = new RegExp("\\--".concat(DD, "\\-"), "g"),
          LD = new RegExp("\\.".concat(zD), "g");
        sD = sD.replace(KD, ".".concat(wD, "-")).replace(rD, "--".concat(wD, "-")).replace(LD, ".".concat(pD))
      }
      return sD
    }
    var Dw = !1;

    function zw() {
      mz.autoAddCss && !Dw && (! function(DD) {
        if (DD && CD) {
          var zD = XD.createElement("style");
          zD.setAttribute("type", "text/css"), zD.innerHTML = DD;
          for (var wD = XD.head.childNodes, pD = null, sD = wD.length - 1; sD > -1; sD--) {
            var KD = wD[sD],
              rD = (KD.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(rD) > -1 && (pD = KD)
          }
          XD.head.insertBefore(zD, pD)
        }
      }(qz()), Dw = !0)
    }
    var ww = {
        mixout: function() {
          return {
            dom: {
              css: qz,
              insertCss: zw
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              zw()
            },
            beforeI2svg: function() {
              zw()
            }
          }
        }
      },
      pw = QD || {};
    pw[Iz] || (pw[Iz] = {}), pw[Iz].styles || (pw[Iz].styles = {}), pw[Iz].hooks || (pw[Iz].hooks = {}), pw[Iz].shims || (pw[Iz].shims = []);
    var sw = pw[Iz],
      Kw = [],
      rw = function() {
        XD.removeEventListener("DOMContentLoaded", rw), Lw = 1, Kw.map((function(DD) {
          return DD()
        }))
      },
      Lw = !1;

    function gw(DD) {
      var zD = DD.tag,
        wD = DD.attributes,
        pD = void 0 === wD ? {} : wD,
        sD = DD.children,
        KD = void 0 === sD ? [] : sD;
      return "string" === typeof DD ? Fz(DD) : "<".concat(zD, " ").concat(function(DD) {
        return Object.keys(DD || {}).reduce((function(zD, wD) {
          return zD + "".concat(wD, '="').concat(Fz(DD[wD]), '" ')
        }), "").trim()
      }(pD), ">").concat(KD.map(gw).join(""), "</").concat(zD, ">")
    }

    function Rw(DD, zD, wD) {
      if (DD && DD[zD] && DD[zD][wD]) return {
        prefix: zD,
        iconName: wD,
        icon: DD[zD][wD]
      }
    }
    CD && ((Lw = (XD.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(XD.readyState)) || XD.addEventListener("DOMContentLoaded", rw));
    var Aw = function(DD, zD, wD, pD) {
      var sD, KD, rD, LD = Object.keys(DD),
        cD = LD.length,
        gD = void 0 !== pD ? function(DD, zD) {
          return function(wD, pD, sD, KD) {
            return DD.call(zD, wD, pD, sD, KD)
          }
        }(zD, pD) : zD;
      for (void 0 === wD ? (sD = 1, rD = DD[LD[0]]) : (sD = 0, rD = wD); sD < cD; sD++) rD = gD(rD, DD[KD = LD[sD]], KD, DD);
      return rD
    };

    function Uw(DD) {
      return 1 !== RD(DD).length ? null : DD.codePointAt(0).toString(16)
    }

    function fw(DD) {
      return Object.keys(DD).reduce((function(zD, wD) {
        var pD = DD[wD];
        return !!pD.icon ? zD[pD.iconName] = pD.icon : zD[wD] = pD, zD
      }), {})
    }

    function Iw(DD, zD) {
      var wD = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        pD = void 0 !== wD && wD,
        sD = fw(zD);
      "function" !== typeof sw.hooks.addPack || pD ? sw.styles[DD] = cD(cD({}, sw.styles[DD] || {}), sD) : sw.hooks.addPack(DD, fw(zD)), "fas" === DD && Iw("fa", zD)
    }
    var Bw = sw.styles,
      Gw = sw.shims,
      hw = Object.keys(bz),
      nw = hw.reduce((function(DD, zD) {
        return DD[zD] = Object.keys(bz[zD]), DD
      }), {}),
      Mw = null,
      Ow = {},
      Jw = {},
      Ew = {},
      Qw = {},
      Xw = {};

    function Vw(DD, zD) {
      var wD, pD = zD.split("-"),
        sD = pD[0],
        KD = pD.slice(1).join("-");
      return sD !== DD || "" === KD || (wD = KD, ~Nz.indexOf(wD)) ? null : KD
    }
    var Pw, Cw = function() {
      var DD = function(DD) {
        return Aw(Bw, (function(zD, wD, pD) {
          return zD[pD] = Aw(wD, DD, {}), zD
        }), {})
      };
      Ow = DD((function(DD, zD, wD) {
        (zD[3] && (DD[zD[3]] = wD), zD[2]) && zD[2].filter((function(DD) {
          return "number" === typeof DD
        })).forEach((function(zD) {
          DD[zD.toString(16)] = wD
        }));
        return DD
      })), Jw = DD((function(DD, zD, wD) {
        (DD[wD] = wD, zD[2]) && zD[2].filter((function(DD) {
          return "string" === typeof DD
        })).forEach((function(zD) {
          DD[zD] = wD
        }));
        return DD
      })), Xw = DD((function(DD, zD, wD) {
        var pD = zD[2];
        return DD[wD] = wD, pD.forEach((function(zD) {
          DD[zD] = wD
        })), DD
      }));
      var zD = "far" in Bw || mz.autoFetchSvg,
        wD = Aw(Gw, (function(DD, wD) {
          var pD = wD[0],
            sD = wD[1],
            KD = wD[2];
          return "far" !== sD || zD || (sD = "fas"), "string" === typeof pD && (DD.names[pD] = {
            prefix: sD,
            iconName: KD
          }), "number" === typeof pD && (DD.unicodes[pD.toString(16)] = {
            prefix: sD,
            iconName: KD
          }), DD
        }), {
          names: {},
          unicodes: {}
        });
      Ew = wD.names, Qw = wD.unicodes, Mw = dw(mz.styleDefault, {
        family: mz.familyDefault
      })
    };

    function xw(DD, zD) {
      return (Ow[DD] || {})[zD]
    }

    function Tw(DD, zD) {
      return (Xw[DD] || {})[zD]
    }

    function bw(DD) {
      return Ew[DD] || {
        prefix: null,
        iconName: null
      }
    }

    function jw() {
      return Mw
    }
    Pw = function(DD) {
      Mw = dw(DD.styleDefault, {
        family: mz.familyDefault
      })
    }, ez.push(Pw), Cw();

    function dw(DD) {
      var zD = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        wD = void 0 === zD ? jD : zD,
        pD = Pz[wD][DD];
      if (wD === dD && !DD) return "fad";
      var sD = xz[wD][DD] || xz[wD][pD],
        KD = DD in sw.styles ? DD : null;
      return sD || KD || null
    }

    function Sw(DD) {
      return DD.sort().filter((function(DD, zD, wD) {
        return wD.indexOf(DD) === zD
      }))
    }
    var iw = Rz.concat(Dz);

    function lw(DD) {
      var zD = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        wD = void 0 !== zD && zD,
        pD = null,
        sD = Sw(DD.filter((function(DD) {
          return iw.includes(DD)
        }))),
        KD = Sw(DD.filter((function(DD) {
          return !iw.includes(DD)
        }))),
        rD = gD(sD.filter((function(DD) {
          return pD = DD, !bD.includes(DD)
        })), 1)[0],
        LD = void 0 === rD ? null : rD,
        RD = function(DD) {
          var zD = jD,
            wD = hw.reduce((function(DD, zD) {
              return DD[zD] = "".concat(mz.cssPrefix, "-").concat(zD), DD
            }), {});
          return HD.forEach((function(pD) {
            (DD.includes(wD[pD]) || DD.some((function(DD) {
              return nw[pD].includes(DD)
            }))) && (zD = pD)
          })), zD
        }(sD),
        AD = cD(cD({}, function(DD) {
          var zD = [],
            wD = null;
          return DD.forEach((function(DD) {
            var pD = Vw(mz.cssPrefix, DD);
            pD ? wD = pD : DD && zD.push(DD)
          })), {
            iconName: wD,
            rest: zD
          }
        }(KD)), {}, {
          prefix: dw(LD, {
            family: RD
          })
        });
      return cD(cD(cD({}, AD), function(DD) {
        var zD = DD.values,
          wD = DD.family,
          pD = DD.canonical,
          sD = DD.givenPrefix,
          KD = void 0 === sD ? "" : sD,
          rD = DD.styles,
          LD = void 0 === rD ? {} : rD,
          cD = DD.config,
          gD = void 0 === cD ? {} : cD,
          RD = wD === dD,
          AD = zD.includes("fa-duotone") || zD.includes("fad"),
          UD = "duotone" === gD.familyDefault,
          fD = "fad" === pD.prefix || "fa-duotone" === pD.prefix;
        !RD && (AD || UD || fD) && (pD.prefix = "fad");
        (zD.includes("fa-brands") || zD.includes("fab")) && (pD.prefix = "fab");
        if (!pD.prefix && Ww.includes(wD)) {
          if (Object.keys(LD).find((function(DD) {
              return Nw.includes(DD)
            })) || gD.autoFetchSvg) {
            var ID = qD.get(wD).defaultShortPrefixId;
            pD.prefix = ID, pD.iconName = Tw(pD.prefix, pD.iconName) || pD.iconName
          }
        }
        "fa" !== pD.prefix && "fa" !== KD || (pD.prefix = jw() || "fas");
        return pD
      }({
        values: DD,
        family: RD,
        styles: Bw,
        config: mz,
        canonical: AD,
        givenPrefix: pD
      })), function(DD, zD, wD) {
        var pD = wD.prefix,
          sD = wD.iconName;
        if (DD || !pD || !sD) return {
          prefix: pD,
          iconName: sD
        };
        var KD = "fa" === zD ? bw(sD) : {},
          rD = Tw(pD, sD);
        sD = KD.iconName || rD || sD, "far" !== (pD = KD.prefix || pD) || Bw.far || !Bw.fas || mz.autoFetchSvg || (pD = "fas");
        return {
          prefix: pD,
          iconName: sD
        }
      }(wD, pD, AD))
    }
    var Ww = HD.filter((function(DD) {
        return DD !== jD || DD !== dD
      })),
      Nw = Object.keys(gz).filter((function(DD) {
        return DD !== jD
      })).map((function(DD) {
        return Object.keys(gz[DD])
      })).flat();
    var Zw = function() {
        return function(DD, zD, wD) {
          return zD && sD(DD.prototype, zD), wD && sD(DD, wD), Object.defineProperty(DD, "prototype", {
            writable: !1
          }), DD
        }((function DD() {
          ! function(DD, zD) {
            if (!(DD instanceof zD)) throw new TypeError("Cannot call a class as a function")
          }(this, DD), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var DD = this, zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
            var sD = wD.reduce(this._pullDefinitions, {});
            Object.keys(sD).forEach((function(zD) {
              DD.definitions[zD] = cD(cD({}, DD.definitions[zD] || {}), sD[zD]), Iw(zD, sD[zD]);
              var wD = bz[jD][zD];
              wD && Iw(wD, sD[zD]), Cw()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(DD, zD) {
            var wD = zD.prefix && zD.iconName && zD.icon ? {
              0: zD
            } : zD;
            return Object.keys(wD).map((function(zD) {
              var pD = wD[zD],
                sD = pD.prefix,
                KD = pD.iconName,
                rD = pD.icon,
                LD = rD[2];
              DD[sD] || (DD[sD] = {}), LD.length > 0 && LD.forEach((function(zD) {
                "string" === typeof zD && (DD[sD][zD] = rD)
              })), DD[sD][KD] = rD
            })), DD
          }
        }])
      }(),
      yw = [],
      kw = {},
      mw = {},
      ew = Object.keys(mw);

    function ow(DD, zD) {
      for (var wD = arguments.length, pD = new Array(wD > 2 ? wD - 2 : 0), sD = 2; sD < wD; sD++) pD[sD - 2] = arguments[sD];
      return (kw[DD] || []).forEach((function(DD) {
        zD = DD.apply(null, [zD].concat(pD))
      })), zD
    }

    function aw(DD) {
      for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
      (kw[DD] || []).forEach((function(DD) {
        DD.apply(null, wD)
      }))
    }

    function uw() {
      var DD = arguments[0],
        zD = Array.prototype.slice.call(arguments, 1);
      return mw[DD] ? mw[DD].apply(null, zD) : void 0
    }

    function vw(DD) {
      "fa" === DD.prefix && (DD.prefix = "fas");
      var zD = DD.iconName,
        wD = DD.prefix || jw();
      if (zD) return zD = Tw(wD, zD) || zD, Rw(tw.definitions, wD, zD) || Rw(sw.styles, wD, zD)
    }
    var tw = new Zw,
      Fw = {
        i2svg: function() {
          var DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return CD ? (aw("beforeI2svg", DD), uw("pseudoElements2svg", DD), uw("i2svg", DD)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var DD, zD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            wD = zD.autoReplaceSvgRoot;
          !1 === mz.autoReplaceSvg && (mz.autoReplaceSvg = !0), mz.observeMutations = !0, DD = function() {
            Hw({
              autoReplaceSvgRoot: wD
            }), aw("watch", zD)
          }, CD && (Lw ? setTimeout(DD, 0) : Kw.push(DD))
        }
      },
      Yw = {
        noAuto: function() {
          mz.autoReplaceSvg = !1, mz.observeMutations = !1, aw("noAuto")
        },
        config: mz,
        dom: Fw,
        parse: {
          icon: function(DD) {
            if (null === DD) return null;
            if ("object" === UD(DD) && DD.prefix && DD.iconName) return {
              prefix: DD.prefix,
              iconName: Tw(DD.prefix, DD.iconName) || DD.iconName
            };
            if (Array.isArray(DD) && 2 === DD.length) {
              var zD = 0 === DD[1].indexOf("fa-") ? DD[1].slice(3) : DD[1],
                wD = dw(DD[0]);
              return {
                prefix: wD,
                iconName: Tw(wD, zD) || zD
              }
            }
            if ("string" === typeof DD && (DD.indexOf("".concat(mz.cssPrefix, "-")) > -1 || DD.match(dz))) {
              var pD = lw(DD.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: pD.prefix || jw(),
                iconName: Tw(pD.prefix, pD.iconName) || pD.iconName
              }
            }
            if ("string" === typeof DD) {
              var sD = jw();
              return {
                prefix: sD,
                iconName: Tw(sD, DD) || DD
              }
            }
          }
        },
        library: tw,
        findIconDefinition: vw,
        toHtml: gw
      },
      Hw = function() {
        var DD = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          zD = void 0 === DD ? XD : DD;
        (Object.keys(sw.styles).length > 0 || mz.autoFetchSvg) && CD && mz.autoReplaceSvg && Yw.dom.i2svg({
          node: zD
        })
      };

    function qw(DD, zD) {
      return Object.defineProperty(DD, "abstract", {
        get: zD
      }), Object.defineProperty(DD, "html", {
        get: function() {
          return DD.abstract.map((function(DD) {
            return gw(DD)
          }))
        }
      }), Object.defineProperty(DD, "node", {
        get: function() {
          if (CD) {
            var zD = XD.createElement("div");
            return zD.innerHTML = DD.html, zD.children
          }
        }
      }), DD
    }

    function Dp(DD) {
      var zD = DD.icons,
        wD = zD.main,
        pD = zD.mask,
        sD = DD.prefix,
        KD = DD.iconName,
        rD = DD.transform,
        LD = DD.symbol,
        gD = DD.maskId,
        RD = DD.extra,
        AD = DD.watchable,
        UD = void 0 !== AD && AD,
        fD = pD.found ? pD : wD,
        ID = fD.width,
        BD = fD.height,
        GD = [mz.replacementClass, KD ? "".concat(mz.cssPrefix, "-").concat(KD) : ""].filter((function(DD) {
          return -1 === RD.classes.indexOf(DD)
        })).filter((function(DD) {
          return "" !== DD || !!DD
        })).concat(RD.classes).join(" "),
        hD = {
          children: [],
          attributes: cD(cD({}, RD.attributes), {}, {
            "data-prefix": sD,
            "data-icon": KD,
            class: GD,
            role: RD.attributes.role || "img",
            viewBox: "0 0 ".concat(ID, " ").concat(BD)
          })
        };
      (function(DD) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(zD) {
          return zD in DD
        }))
      })(RD.attributes) || RD.attributes["aria-hidden"] || (hD.attributes["aria-hidden"] = "true"), UD && (hD.attributes[Gz] = "");
      var nD = cD(cD({}, hD), {}, {
          prefix: sD,
          iconName: KD,
          main: wD,
          mask: pD,
          maskId: gD,
          transform: rD,
          symbol: LD,
          styles: cD({}, RD.styles)
        }),
        MD = pD.found && wD.found ? uw("generateAbstractMask", nD) || {
          children: [],
          attributes: {}
        } : uw("generateAbstractIcon", nD) || {
          children: [],
          attributes: {}
        },
        OD = MD.children,
        JD = MD.attributes;
      return nD.children = OD, nD.attributes = JD, LD ? function(DD) {
        var zD = DD.prefix,
          wD = DD.iconName,
          pD = DD.children,
          sD = DD.attributes,
          KD = DD.symbol,
          rD = !0 === KD ? "".concat(zD, "-").concat(mz.cssPrefix, "-").concat(wD) : KD;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: cD(cD({}, sD), {}, {
              id: rD
            }),
            children: pD
          }]
        }]
      }(nD) : function(DD) {
        var zD = DD.children,
          wD = DD.main,
          pD = DD.mask,
          sD = DD.attributes,
          KD = DD.styles,
          rD = DD.transform;
        if (Hz(rD) && wD.found && !pD.found) {
          var LD = {
            x: wD.width / wD.height / 2,
            y: .5
          };
          sD.style = Yz(cD(cD({}, KD), {}, {
            "transform-origin": "".concat(LD.x + rD.x / 16, "em ").concat(LD.y + rD.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: sD,
          children: zD
        }]
      }(nD)
    }

    function zp(DD) {
      var zD = DD.content,
        wD = DD.width,
        pD = DD.height,
        sD = DD.transform,
        KD = DD.extra,
        rD = DD.watchable,
        LD = void 0 !== rD && rD,
        gD = cD(cD({}, KD.attributes), {}, {
          class: KD.classes.join(" ")
        });
      LD && (gD[Gz] = "");
      var RD = cD({}, KD.styles);
      Hz(sD) && (RD.transform = function(DD) {
        var zD = DD.transform,
          wD = DD.width,
          pD = void 0 === wD ? 16 : wD,
          sD = DD.height,
          KD = void 0 === sD ? 16 : sD,
          rD = DD.startCentered,
          LD = void 0 !== rD && rD,
          cD = "";
        return cD += LD && xD ? "translate(".concat(zD.x / oz - pD / 2, "em, ").concat(zD.y / oz - KD / 2, "em) ") : LD ? "translate(calc(-50% + ".concat(zD.x / oz, "em), calc(-50% + ").concat(zD.y / oz, "em)) ") : "translate(".concat(zD.x / oz, "em, ").concat(zD.y / oz, "em) "), cD += "scale(".concat(zD.size / oz * (zD.flipX ? -1 : 1), ", ").concat(zD.size / oz * (zD.flipY ? -1 : 1), ") "), cD + "rotate(".concat(zD.rotate, "deg) ")
      }({
        transform: sD,
        startCentered: !0,
        width: wD,
        height: pD
      }), RD["-webkit-transform"] = RD.transform);
      var AD = Yz(RD);
      AD.length > 0 && (gD.style = AD);
      var UD = [];
      return UD.push({
        tag: "span",
        attributes: gD,
        children: [zD]
      }), UD
    }
    var wp = sw.styles;

    function pp(DD) {
      var zD = DD[0],
        wD = DD[1],
        pD = gD(DD.slice(4), 1)[0];
      return {
        found: !0,
        width: zD,
        height: wD,
        icon: Array.isArray(pD) ? {
          tag: "g",
          attributes: {
            class: "".concat(mz.cssPrefix, "-").concat(Wz.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(mz.cssPrefix, "-").concat(Wz.SECONDARY),
              fill: "currentColor",
              d: pD[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(mz.cssPrefix, "-").concat(Wz.PRIMARY),
              fill: "currentColor",
              d: pD[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: pD
          }
        }
      }
    }
    var sp = {
      found: !1,
      width: 512,
      height: 512
    };

    function Kp(DD, zD) {
      var wD = zD;
      return "fa" === zD && null !== mz.styleDefault && (zD = jw()), new Promise((function(pD, sD) {
        if ("fa" === wD) {
          var KD = bw(DD) || {};
          DD = KD.iconName || DD, zD = KD.prefix || zD
        }
        if (DD && zD && wp[zD] && wp[zD][DD]) return pD(pp(wp[zD][DD]));
        ! function(DD, zD) {
          Qz || mz.showMissingIcons || !DD || console.error('Icon with name "'.concat(DD, '" and prefix "').concat(zD, '" is missing.'))
        }(DD, zD), pD(cD(cD({}, sp), {}, {
          icon: mz.showMissingIcons && DD && uw("missingIconAbstract") || {}
        }))
      }))
    }
    var rp = function() {},
      Lp = mz.measurePerformance && PD && PD.mark && PD.measure ? PD : {
        mark: rp,
        measure: rp
      },
      cp = 'FA "7.2.0"',
      gp = function(DD) {
        Lp.mark("".concat(cp, " ").concat(DD, " ends")), Lp.measure("".concat(cp, " ").concat(DD), "".concat(cp, " ").concat(DD, " begins"), "".concat(cp, " ").concat(DD, " ends"))
      },
      Rp = function(DD) {
        return Lp.mark("".concat(cp, " ").concat(DD, " begins")),
          function() {
            return gp(DD)
          }
      },
      Ap = function() {};

    function Up(DD) {
      return "string" === typeof(DD.getAttribute ? DD.getAttribute(Gz) : null)
    }

    function fp(DD) {
      return XD.createElementNS("http://www.w3.org/2000/svg", DD)
    }

    function Ip(DD) {
      return XD.createElement(DD)
    }

    function Bp(DD) {
      var zD = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        wD = void 0 === zD ? "svg" === DD.tag ? fp : Ip : zD;
      if ("string" === typeof DD) return XD.createTextNode(DD);
      var pD = wD(DD.tag);
      return Object.keys(DD.attributes || []).forEach((function(zD) {
        pD.setAttribute(zD, DD.attributes[zD])
      })), (DD.children || []).forEach((function(DD) {
        pD.appendChild(Bp(DD, {
          ceFn: wD
        }))
      })), pD
    }
    var Gp = {
      replace: function(DD) {
        var zD = DD[0];
        if (zD.parentNode)
          if (DD[1].forEach((function(DD) {
              zD.parentNode.insertBefore(Bp(DD), zD)
            })), null === zD.getAttribute(Gz) && mz.keepOriginalSource) {
            var wD = XD.createComment(function(DD) {
              var zD = " ".concat(DD.outerHTML, " ");
              return "".concat(zD, "Font Awesome fontawesome.com ")
            }(zD));
            zD.parentNode.replaceChild(wD, zD)
          } else zD.remove()
      },
      nest: function(DD) {
        var zD = DD[0],
          wD = DD[1];
        if (~tz(zD).indexOf(mz.replacementClass)) return Gp.replace(DD);
        var pD = new RegExp("".concat(mz.cssPrefix, "-.*"));
        if (delete wD[0].attributes.id, wD[0].attributes.class) {
          var sD = wD[0].attributes.class.split(" ").reduce((function(DD, zD) {
            return zD === mz.replacementClass || zD.match(pD) ? DD.toSvg.push(zD) : DD.toNode.push(zD), DD
          }), {
            toNode: [],
            toSvg: []
          });
          wD[0].attributes.class = sD.toSvg.join(" "), 0 === sD.toNode.length ? zD.removeAttribute("class") : zD.setAttribute("class", sD.toNode.join(" "))
        }
        var KD = wD.map((function(DD) {
          return gw(DD)
        })).join("\n");
        zD.setAttribute(Gz, ""), zD.innerHTML = KD
      }
    };

    function hp(DD) {
      DD()
    }

    function np(DD, zD) {
      var wD = "function" === typeof zD ? zD : Ap;
      if (0 === DD.length) wD();
      else {
        var pD = hp;
        "async" === mz.mutateApproach && (pD = QD.requestAnimationFrame || hp), pD((function() {
          var zD = !0 === mz.autoReplaceSvg ? Gp.replace : Gp[mz.autoReplaceSvg] || Gp.replace,
            pD = Rp("mutate");
          DD.map(zD), pD(), wD()
        }))
      }
    }
    var Mp = !1;

    function Op() {
      Mp = !0
    }

    function Jp() {
      Mp = !1
    }
    var Ep = null;

    function Qp(DD) {
      if (VD && mz.observeMutations) {
        var zD = DD.treeCallback,
          wD = void 0 === zD ? Ap : zD,
          pD = DD.nodeCallback,
          sD = void 0 === pD ? Ap : pD,
          KD = DD.pseudoElementsCallback,
          rD = void 0 === KD ? Ap : KD,
          LD = DD.observeMutationsRoot,
          cD = void 0 === LD ? XD : LD;
        Ep = new VD((function(DD) {
          if (!Mp) {
            var zD = jw();
            vz(DD).forEach((function(DD) {
              if ("childList" === DD.type && DD.addedNodes.length > 0 && !Up(DD.addedNodes[0]) && (mz.searchPseudoElements && rD(DD.target), wD(DD.target)), "attributes" === DD.type && DD.target.parentNode && mz.searchPseudoElements && rD([DD.target], !0), "attributes" === DD.type && Up(DD.target) && ~lz.indexOf(DD.attributeName))
                if ("class" === DD.attributeName && function(DD) {
                    var zD = DD.getAttribute ? DD.getAttribute(nz) : null,
                      wD = DD.getAttribute ? DD.getAttribute(Mz) : null;
                    return zD && wD
                  }(DD.target)) {
                  var pD = lw(tz(DD.target)),
                    KD = pD.prefix,
                    LD = pD.iconName;
                  DD.target.setAttribute(nz, KD || zD), LD && DD.target.setAttribute(Mz, LD)
                } else(cD = DD.target) && cD.classList && cD.classList.contains && cD.classList.contains(mz.replacementClass) && sD(DD.target);
              var cD
            }))
          }
        })), CD && Ep.observe(cD, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function Xp(DD) {
      var zD, wD, pD = DD.getAttribute("data-prefix"),
        sD = DD.getAttribute("data-icon"),
        KD = void 0 !== DD.innerText ? DD.innerText.trim() : "",
        rD = lw(tz(DD));
      return rD.prefix || (rD.prefix = jw()), pD && sD && (rD.prefix = pD, rD.iconName = sD), rD.iconName && rD.prefix || (rD.prefix && KD.length > 0 && (rD.iconName = (zD = rD.prefix, wD = DD.innerText, (Jw[zD] || {})[wD] || xw(rD.prefix, Uw(DD.innerText)))), !rD.iconName && mz.autoFetchSvg && DD.firstChild && DD.firstChild.nodeType === Node.TEXT_NODE && (rD.iconName = DD.firstChild.data)), rD
    }

    function Vp(DD) {
      var zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        wD = Xp(DD),
        pD = wD.iconName,
        sD = wD.prefix,
        KD = wD.rest,
        rD = function(DD) {
          return vz(DD.attributes).reduce((function(DD, zD) {
            return "class" !== DD.name && "style" !== DD.name && (DD[zD.name] = zD.value), DD
          }), {})
        }(DD),
        LD = ow("parseNodeAttributes", {}, DD),
        gD = zD.styleParser ? function(DD) {
          var zD = DD.getAttribute("style"),
            wD = [];
          return zD && (wD = zD.split(";").reduce((function(DD, zD) {
            var wD = zD.split(":"),
              pD = wD[0],
              sD = wD.slice(1);
            return pD && sD.length > 0 && (DD[pD] = sD.join(":").trim()), DD
          }), {})), wD
        }(DD) : [];
      return cD({
        iconName: pD,
        prefix: sD,
        transform: az,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: KD,
          styles: gD,
          attributes: rD
        }
      }, LD)
    }
    var Pp = sw.styles;

    function Cp(DD) {
      var zD = "nest" === mz.autoReplaceSvg ? Vp(DD, {
        styleParser: !1
      }) : Vp(DD);
      return ~zD.extra.classes.indexOf(Sz) ? uw("generateLayersText", DD, zD) : uw("generateSvgReplacementMutation", DD, zD)
    }

    function xp(DD) {
      var zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!CD) return Promise.resolve();
      var wD = XD.documentElement.classList,
        pD = function(DD) {
          return wD.add("".concat(Oz, "-").concat(DD))
        },
        sD = function(DD) {
          return wD.remove("".concat(Oz, "-").concat(DD))
        },
        KD = mz.autoFetchSvg ? [].concat(RD(Dz), RD(Rz)) : bD.concat(Object.keys(Pp));
      KD.includes("fa") || KD.push("fa");
      var rD = [".".concat(Sz, ":not([").concat(Gz, "])")].concat(KD.map((function(DD) {
        return ".".concat(DD, ":not([").concat(Gz, "])")
      }))).join(", ");
      if (0 === rD.length) return Promise.resolve();
      var LD = [];
      try {
        LD = vz(DD.querySelectorAll(rD))
      } catch (AD) {}
      if (!(LD.length > 0)) return Promise.resolve();
      pD("pending"), sD("complete");
      var cD = Rp("onTree"),
        gD = LD.reduce((function(DD, zD) {
          try {
            var wD = Cp(zD);
            wD && DD.push(wD)
          } catch (AD) {
            Qz || "MissingIcon" === AD.name && console.error(AD)
          }
          return DD
        }), []);
      return new Promise((function(DD, wD) {
        Promise.all(gD).then((function(wD) {
          np(wD, (function() {
            pD("active"), pD("complete"), sD("pending"), "function" === typeof zD && zD(), cD(), DD()
          }))
        })).catch((function(DD) {
          cD(), wD(DD)
        }))
      }))
    }

    function Tp(DD) {
      var zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      Cp(DD).then((function(DD) {
        DD && np([DD], zD)
      }))
    }
    var bp = function(DD) {
        var zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          wD = zD.transform,
          pD = void 0 === wD ? az : wD,
          sD = zD.symbol,
          KD = void 0 !== sD && sD,
          rD = zD.mask,
          LD = void 0 === rD ? null : rD,
          gD = zD.maskId,
          RD = void 0 === gD ? null : gD,
          AD = zD.classes,
          UD = void 0 === AD ? [] : AD,
          fD = zD.attributes,
          ID = void 0 === fD ? {} : fD,
          BD = zD.styles,
          GD = void 0 === BD ? {} : BD;
        if (DD) {
          var hD = DD.prefix,
            nD = DD.iconName,
            MD = DD.icon;
          return qw(cD({
            type: "icon"
          }, DD), (function() {
            return aw("beforeDOMElementCreation", {
              iconDefinition: DD,
              params: zD
            }), Dp({
              icons: {
                main: pp(MD),
                mask: LD ? pp(LD.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: hD,
              iconName: nD,
              transform: cD(cD({}, az), pD),
              symbol: KD,
              maskId: RD,
              extra: {
                attributes: ID,
                styles: GD,
                classes: UD
              }
            })
          }))
        }
      },
      jp = {
        mixout: function() {
          return {
            icon: (DD = bp, function(zD) {
              var wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                pD = (zD || {}).icon ? zD : vw(zD || {}),
                sD = wD.mask;
              return sD && (sD = (sD || {}).icon ? sD : vw(sD || {})), DD(pD, cD(cD({}, wD), {}, {
                mask: sD
              }))
            })
          };
          var DD
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(DD) {
              return DD.treeCallback = xp, DD.nodeCallback = Tp, DD
            }
          }
        },
        provides: function(DD) {
          DD.i2svg = function(DD) {
            var zD = DD.node,
              wD = void 0 === zD ? XD : zD,
              pD = DD.callback;
            return xp(wD, void 0 === pD ? function() {} : pD)
          }, DD.generateSvgReplacementMutation = function(DD, zD) {
            var wD = zD.iconName,
              pD = zD.prefix,
              sD = zD.transform,
              KD = zD.symbol,
              rD = zD.mask,
              LD = zD.maskId,
              cD = zD.extra;
            return new Promise((function(zD, RD) {
              Promise.all([Kp(wD, pD), rD.iconName ? Kp(rD.iconName, rD.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(rD) {
                var RD = gD(rD, 2),
                  AD = RD[0],
                  UD = RD[1];
                zD([DD, Dp({
                  icons: {
                    main: AD,
                    mask: UD
                  },
                  prefix: pD,
                  iconName: wD,
                  transform: sD,
                  symbol: KD,
                  maskId: LD,
                  extra: cD,
                  watchable: !0
                })])
              })).catch(RD)
            }))
          }, DD.generateAbstractIcon = function(DD) {
            var zD, wD = DD.children,
              pD = DD.attributes,
              sD = DD.main,
              KD = DD.transform,
              rD = Yz(DD.styles);
            return rD.length > 0 && (pD.style = rD), Hz(KD) && (zD = uw("generateAbstractTransformGrouping", {
              main: sD,
              transform: KD,
              containerWidth: sD.width,
              iconWidth: sD.width
            })), wD.push(zD || sD.icon), {
              children: wD,
              attributes: pD
            }
          }
        }
      },
      dp = {
        mixout: function() {
          return {
            layer: function(DD) {
              var zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                wD = zD.classes,
                pD = void 0 === wD ? [] : wD;
              return qw({
                type: "layer"
              }, (function() {
                aw("beforeDOMElementCreation", {
                  assembler: DD,
                  params: zD
                });
                var wD = [];
                return DD((function(DD) {
                  Array.isArray(DD) ? DD.map((function(DD) {
                    wD = wD.concat(DD.abstract)
                  })) : wD = wD.concat(DD.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(mz.cssPrefix, "-layers")].concat(RD(pD)).join(" ")
                  },
                  children: wD
                }]
              }))
            }
          }
        }
      },
      Sp = {
        mixout: function() {
          return {
            counter: function(DD) {
              var zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                wD = zD.title,
                pD = void 0 === wD ? null : wD,
                sD = zD.classes,
                KD = void 0 === sD ? [] : sD,
                rD = zD.attributes,
                LD = void 0 === rD ? {} : rD,
                gD = zD.styles,
                AD = void 0 === gD ? {} : gD;
              return qw({
                type: "counter",
                content: DD
              }, (function() {
                return aw("beforeDOMElementCreation", {
                    content: DD,
                    params: zD
                  }),
                  function(DD) {
                    var zD = DD.content,
                      wD = DD.extra,
                      pD = cD(cD({}, wD.attributes), {}, {
                        class: wD.classes.join(" ")
                      }),
                      sD = Yz(wD.styles);
                    sD.length > 0 && (pD.style = sD);
                    var KD = [];
                    return KD.push({
                      tag: "span",
                      attributes: pD,
                      children: [zD]
                    }), KD
                  }({
                    content: DD.toString(),
                    title: pD,
                    extra: {
                      attributes: LD,
                      styles: AD,
                      classes: ["".concat(mz.cssPrefix, "-layers-counter")].concat(RD(KD))
                    }
                  })
              }))
            }
          }
        }
      },
      ip = {
        mixout: function() {
          return {
            text: function(DD) {
              var zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                wD = zD.transform,
                pD = void 0 === wD ? az : wD,
                sD = zD.classes,
                KD = void 0 === sD ? [] : sD,
                rD = zD.attributes,
                LD = void 0 === rD ? {} : rD,
                gD = zD.styles,
                AD = void 0 === gD ? {} : gD;
              return qw({
                type: "text",
                content: DD
              }, (function() {
                return aw("beforeDOMElementCreation", {
                  content: DD,
                  params: zD
                }), zp({
                  content: DD,
                  transform: cD(cD({}, az), pD),
                  extra: {
                    attributes: LD,
                    styles: AD,
                    classes: ["".concat(mz.cssPrefix, "-layers-text")].concat(RD(KD))
                  }
                })
              }))
            }
          }
        },
        provides: function(DD) {
          DD.generateLayersText = function(DD, zD) {
            var wD = zD.transform,
              pD = zD.extra,
              sD = null,
              KD = null;
            if (xD) {
              var rD = parseInt(getComputedStyle(DD).fontSize, 10),
                LD = DD.getBoundingClientRect();
              sD = LD.width / rD, KD = LD.height / rD
            }
            return Promise.resolve([DD, zp({
              content: DD.innerHTML,
              width: sD,
              height: KD,
              transform: wD,
              extra: pD,
              watchable: !0
            })])
          }
        }
      },
      lp = new RegExp('"', "ug"),
      Wp = [1105920, 1112319],
      Np = cD(cD(cD(cD({}, {
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
      Zp = Object.keys(Np).reduce((function(DD, zD) {
        return DD[zD.toLowerCase()] = Np[zD], DD
      }), {}),
      yp = Object.keys(Zp).reduce((function(DD, zD) {
        var wD = Zp[zD];
        return DD[zD] = wD[900] || RD(Object.entries(wD))[0][1], DD
      }), {});

    function kp(DD, zD) {
      var wD = "".concat("data-fa-pseudo-element-pending").concat(zD.replace(":", "-"));
      return new Promise((function(pD, sD) {
        if (null !== DD.getAttribute(wD)) return pD();
        var KD = vz(DD.children).filter((function(DD) {
            return DD.getAttribute(hz) === zD
          }))[0],
          rD = QD.getComputedStyle(DD, zD),
          LD = rD.getPropertyValue("font-family"),
          gD = LD.match(iz),
          AD = rD.getPropertyValue("font-weight"),
          UD = rD.getPropertyValue("content");
        if (KD && !gD) return DD.removeChild(KD), pD();
        if (gD && "none" !== UD && "" !== UD) {
          var fD = rD.getPropertyValue("content"),
            ID = function(DD, zD) {
              var wD = DD.replace(/^['"]|['"]$/g, "").toLowerCase(),
                pD = parseInt(zD),
                sD = isNaN(pD) ? "normal" : pD;
              return (Zp[wD] || {})[sD] || yp[wD]
            }(LD, AD),
            BD = function(DD) {
              return Uw(RD(DD.replace(lp, ""))[0] || "")
            }(fD),
            GD = gD[0].startsWith("FontAwesome"),
            hD = function(DD) {
              var zD = DD.getPropertyValue("font-feature-settings").includes("ss01"),
                wD = DD.getPropertyValue("content").replace(lp, ""),
                pD = wD.codePointAt(0),
                sD = pD >= Wp[0] && pD <= Wp[1],
                KD = 2 === wD.length && wD[0] === wD[1];
              return sD || KD || zD
            }(rD),
            nD = xw(ID, BD),
            MD = nD;
          if (GD) {
            var OD = function(DD) {
              var zD = Qw[DD],
                wD = xw("fas", DD);
              return zD || (wD ? {
                prefix: "fas",
                iconName: wD
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(BD);
            OD.iconName && OD.prefix && (nD = OD.iconName, ID = OD.prefix)
          }
          if (!nD || hD || KD && KD.getAttribute(nz) === ID && KD.getAttribute(Mz) === MD) pD();
          else {
            DD.setAttribute(wD, MD), KD && DD.removeChild(KD);
            var JD = {
                iconName: null,
                prefix: null,
                transform: az,
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
              ED = JD.extra;
            ED.attributes[hz] = zD, Kp(nD, ID).then((function(sD) {
              var KD = Dp(cD(cD({}, JD), {}, {
                  icons: {
                    main: sD,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: ID,
                  iconName: MD,
                  extra: ED,
                  watchable: !0
                })),
                rD = XD.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === zD ? DD.insertBefore(rD, DD.firstChild) : DD.appendChild(rD), rD.outerHTML = KD.map((function(DD) {
                return gw(DD)
              })).join("\n"), DD.removeAttribute(wD), pD()
            })).catch(sD)
          }
        } else pD()
      }))
    }

    function mp(DD) {
      return Promise.all([kp(DD, "::before"), kp(DD, "::after")])
    }

    function ep(DD) {
      return DD.parentNode !== document.head && !~Jz.indexOf(DD.tagName.toUpperCase()) && !DD.getAttribute(hz) && (!DD.parentNode || "svg" !== DD.parentNode.tagName)
    }
    var op = function(DD) {
        return !!DD && Ez.some((function(zD) {
          return DD.includes(zD)
        }))
      },
      ap = function(DD) {
        if (!DD) return [];
        var zD = new Set,
          wD = DD.split(/,(?![^()]*\))/).map((function(DD) {
            return DD.trim()
          }));
        wD = wD.flatMap((function(DD) {
          return DD.includes("(") ? DD : DD.split(",").map((function(DD) {
            return DD.trim()
          }))
        }));
        var pD, sD = KD(wD);
        try {
          for (sD.s(); !(pD = sD.n()).done;) {
            var rD = pD.value;
            if (op(rD)) {
              var LD = Ez.reduce((function(DD, zD) {
                return DD.replace(zD, "")
              }), rD);
              "" !== LD && "*" !== LD && zD.add(LD)
            }
          }
        } catch (cD) {
          sD.e(cD)
        } finally {
          sD.f()
        }
        return zD
      };

    function vp(DD) {
      if (CD) {
        var zD;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) zD = DD;
        else if (mz.searchPseudoElementsFullScan) zD = DD.querySelectorAll("*");
        else {
          var wD, pD = new Set,
            sD = KD(document.styleSheets);
          try {
            for (sD.s(); !(wD = sD.n()).done;) {
              var rD = wD.value;
              try {
                var LD, cD = KD(rD.cssRules);
                try {
                  for (cD.s(); !(LD = cD.n()).done;) {
                    var gD, RD = LD.value,
                      AD = KD(ap(RD.selectorText));
                    try {
                      for (AD.s(); !(gD = AD.n()).done;) {
                        var UD = gD.value;
                        pD.add(UD)
                      }
                    } catch (ID) {
                      AD.e(ID)
                    } finally {
                      AD.f()
                    }
                  }
                } catch (ID) {
                  cD.e(ID)
                } finally {
                  cD.f()
                }
              } catch (BD) {
                mz.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(rD.href, " (").concat(BD.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (ID) {
            sD.e(ID)
          } finally {
            sD.f()
          }
          if (!pD.size) return;
          var fD = Array.from(pD).join(", ");
          try {
            zD = DD.querySelectorAll(fD)
          } catch (GD) {}
        }
        return new Promise((function(DD, wD) {
          var pD = vz(zD).filter(ep).map(mp),
            sD = Rp("searchPseudoElements");
          Op(), Promise.all(pD).then((function() {
            sD(), Jp(), DD()
          })).catch((function() {
            sD(), Jp(), wD()
          }))
        }))
      }
    }
    var tp = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(DD) {
              return DD.pseudoElementsCallback = vp, DD
            }
          }
        },
        provides: function(DD) {
          DD.pseudoElements2svg = function(DD) {
            var zD = DD.node,
              wD = void 0 === zD ? XD : zD;
            mz.searchPseudoElements && vp(wD)
          }
        }
      },
      Fp = !1,
      Yp = function(DD) {
        return DD.toLowerCase().split(" ").reduce((function(DD, zD) {
          var wD = zD.toLowerCase().split("-"),
            pD = wD[0],
            sD = wD.slice(1).join("-");
          if (pD && "h" === sD) return DD.flipX = !0, DD;
          if (pD && "v" === sD) return DD.flipY = !0, DD;
          if (sD = parseFloat(sD), isNaN(sD)) return DD;
          switch (pD) {
            case "grow":
              DD.size = DD.size + sD;
              break;
            case "shrink":
              DD.size = DD.size - sD;
              break;
            case "left":
              DD.x = DD.x - sD;
              break;
            case "right":
              DD.x = DD.x + sD;
              break;
            case "up":
              DD.y = DD.y - sD;
              break;
            case "down":
              DD.y = DD.y + sD;
              break;
            case "rotate":
              DD.rotate = DD.rotate + sD
          }
          return DD
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      Hp = {
        mixout: function() {
          return {
            parse: {
              transform: function(DD) {
                return Yp(DD)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(DD, zD) {
              var wD = zD.getAttribute("data-fa-transform");
              return wD && (DD.transform = Yp(wD)), DD
            }
          }
        },
        provides: function(DD) {
          DD.generateAbstractTransformGrouping = function(DD) {
            var zD = DD.main,
              wD = DD.transform,
              pD = DD.containerWidth,
              sD = DD.iconWidth,
              KD = {
                transform: "translate(".concat(pD / 2, " 256)")
              },
              rD = "translate(".concat(32 * wD.x, ", ").concat(32 * wD.y, ") "),
              LD = "scale(".concat(wD.size / 16 * (wD.flipX ? -1 : 1), ", ").concat(wD.size / 16 * (wD.flipY ? -1 : 1), ") "),
              gD = "rotate(".concat(wD.rotate, " 0 0)"),
              RD = {
                outer: KD,
                inner: {
                  transform: "".concat(rD, " ").concat(LD, " ").concat(gD)
                },
                path: {
                  transform: "translate(".concat(sD / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: cD({}, RD.outer),
              children: [{
                tag: "g",
                attributes: cD({}, RD.inner),
                children: [{
                  tag: zD.icon.tag,
                  children: zD.icon.children,
                  attributes: cD(cD({}, zD.icon.attributes), RD.path)
                }]
              }]
            }
          }
        }
      },
      qp = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function Ds(DD) {
      var zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return DD.attributes && (DD.attributes.fill || zD) && (DD.attributes.fill = "black"), DD
    }
    var zs = {
        hooks: function() {
          return {
            parseNodeAttributes: function(DD, zD) {
              var wD = zD.getAttribute("data-fa-mask"),
                pD = wD ? lw(wD.split(" ").map((function(DD) {
                  return DD.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return pD.prefix || (pD.prefix = jw()), DD.mask = pD, DD.maskId = zD.getAttribute("data-fa-mask-id"), DD
            }
          }
        },
        provides: function(DD) {
          DD.generateAbstractMask = function(DD) {
            var zD, wD = DD.children,
              pD = DD.attributes,
              sD = DD.main,
              KD = DD.mask,
              rD = DD.maskId,
              LD = DD.transform,
              gD = sD.width,
              RD = sD.icon,
              AD = KD.width,
              UD = KD.icon,
              fD = function(DD) {
                var zD = DD.transform,
                  wD = DD.containerWidth,
                  pD = DD.iconWidth,
                  sD = {
                    transform: "translate(".concat(wD / 2, " 256)")
                  },
                  KD = "translate(".concat(32 * zD.x, ", ").concat(32 * zD.y, ") "),
                  rD = "scale(".concat(zD.size / 16 * (zD.flipX ? -1 : 1), ", ").concat(zD.size / 16 * (zD.flipY ? -1 : 1), ") "),
                  LD = "rotate(".concat(zD.rotate, " 0 0)");
                return {
                  outer: sD,
                  inner: {
                    transform: "".concat(KD, " ").concat(rD, " ").concat(LD)
                  },
                  path: {
                    transform: "translate(".concat(pD / 2 * -1, " -256)")
                  }
                }
              }({
                transform: LD,
                containerWidth: AD,
                iconWidth: gD
              }),
              ID = {
                tag: "rect",
                attributes: cD(cD({}, qp), {}, {
                  fill: "white"
                })
              },
              BD = RD.children ? {
                children: RD.children.map(Ds)
              } : {},
              GD = {
                tag: "g",
                attributes: cD({}, fD.inner),
                children: [Ds(cD({
                  tag: RD.tag,
                  attributes: cD(cD({}, RD.attributes), fD.path)
                }, BD))]
              },
              hD = {
                tag: "g",
                attributes: cD({}, fD.outer),
                children: [GD]
              },
              nD = "mask-".concat(rD || uz()),
              MD = "clip-".concat(rD || uz()),
              OD = {
                tag: "mask",
                attributes: cD(cD({}, qp), {}, {
                  id: nD,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [ID, hD]
              },
              JD = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: MD
                  },
                  children: (zD = UD, "g" === zD.tag ? zD.children : [zD])
                }, OD]
              };
            return wD.push(JD, {
              tag: "rect",
              attributes: cD({
                fill: "currentColor",
                "clip-path": "url(#".concat(MD, ")"),
                mask: "url(#".concat(nD, ")")
              }, qp)
            }), {
              children: wD,
              attributes: pD
            }
          }
        }
      },
      ws = {
        provides: function(DD) {
          var zD = !1;
          QD.matchMedia && (zD = QD.matchMedia("(prefers-reduced-motion: reduce)").matches), DD.missingIconAbstract = function() {
            var DD = [],
              wD = {
                fill: "currentColor"
              },
              pD = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            DD.push({
              tag: "path",
              attributes: cD(cD({}, wD), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var sD = cD(cD({}, pD), {}, {
                attributeName: "opacity"
              }),
              KD = {
                tag: "circle",
                attributes: cD(cD({}, wD), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return zD || KD.children.push({
              tag: "animate",
              attributes: cD(cD({}, pD), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: cD(cD({}, sD), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), DD.push(KD), DD.push({
              tag: "path",
              attributes: cD(cD({}, wD), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: zD ? [] : [{
                tag: "animate",
                attributes: cD(cD({}, sD), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), zD || DD.push({
              tag: "path",
              attributes: cD(cD({}, wD), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: cD(cD({}, sD), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: DD
            }
          }
        }
      };
    ! function(DD, zD) {
      var wD = zD.mixoutsTo;
      yw = DD, kw = {}, Object.keys(mw).forEach((function(DD) {
        -1 === ew.indexOf(DD) && delete mw[DD]
      })), yw.forEach((function(DD) {
        var zD = DD.mixout ? DD.mixout() : {};
        if (Object.keys(zD).forEach((function(DD) {
            "function" === typeof zD[DD] && (wD[DD] = zD[DD]), "object" === UD(zD[DD]) && Object.keys(zD[DD]).forEach((function(pD) {
              wD[DD] || (wD[DD] = {}), wD[DD][pD] = zD[DD][pD]
            }))
          })), DD.hooks) {
          var pD = DD.hooks();
          Object.keys(pD).forEach((function(DD) {
            kw[DD] || (kw[DD] = []), kw[DD].push(pD[DD])
          }))
        }
        DD.provides && DD.provides(mw)
      }))
    }([ww, jp, dp, Sp, ip, tp, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              Op(), Fp = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            Qp(ow("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            Ep && Ep.disconnect()
          },
          watch: function(DD) {
            var zD = DD.observeMutationsRoot;
            Fp ? Jp() : Qp(ow("mutationObserverCallbacks", {
              observeMutationsRoot: zD
            }))
          }
        }
      }
    }, Hp, zs, ws, {
      hooks: function() {
        return {
          parseNodeAttributes: function(DD, zD) {
            var wD = zD.getAttribute("data-fa-symbol"),
              pD = null !== wD && ("" === wD || wD);
            return DD.symbol = pD, DD
          }
        }
      }
    }], {
      mixoutsTo: Yw
    });
    var ps = Yw.noAuto,
      ss = Yw.config,
      Ks = Yw.library,
      rs = Yw.dom,
      Ls = Yw.parse,
      cs = Yw.findIconDefinition,
      gs = Yw.toHtml,
      Rs = Yw.icon,
      As = Yw.layer,
      Us = Yw.text,
      fs = Yw.counter
  },
  6723: DD => {
    DD.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);