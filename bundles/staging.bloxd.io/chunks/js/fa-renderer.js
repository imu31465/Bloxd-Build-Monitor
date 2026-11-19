/*! For license information please see wd13r.fa-renderer.0a9fff13.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6435: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      FontAwesomeIcon: () => PD
    });
    var ID = cD(6433),
      pD = cD(4741),
      iD = cD.n(pD),
      fD = cD(53);

    function bD(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function QD(DD, CD, cD) {
      return (CD = function(DD) {
        var CD = function(DD, CD) {
          if ("object" != typeof DD || !DD) return DD;
          var cD = DD[Symbol.toPrimitive];
          if (void 0 !== cD) {
            var ID = cD.call(DD, CD || "default");
            if ("object" != typeof ID) return ID;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === CD ? String : Number)(DD)
        }(DD, "string");
        return "symbol" == typeof CD ? CD : CD + ""
      }(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function wD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function SD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? wD(Object(cD), !0).forEach((function(CD) {
          QD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : wD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function BD(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        var cD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != cD) {
          var ID, pD, iD, fD, bD = [],
            QD = !0,
            wD = !1;
          try {
            if (iD = (cD = cD.call(DD)).next, 0 === CD) {
              if (Object(cD) !== cD) return;
              QD = !1
            } else
              for (; !(QD = (ID = iD.call(cD)).done) && (bD.push(ID.value), bD.length !== CD); QD = !0);
          } catch (DD) {
            wD = !0, pD = DD
          } finally {
            try {
              if (!QD && null != cD.return && (fD = cD.return(), Object(fD) !== fD)) return
            } finally {
              if (wD) throw pD
            }
          }
          return bD
        }
      }(DD, CD) || tD(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function yD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return bD(DD)
      }(DD) || function(DD) {
        if ("undefined" != typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || tD(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function MD(DD) {
      return MD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, MD(DD)
    }

    function tD(DD, CD) {
      if (DD) {
        if ("string" == typeof DD) return bD(DD, CD);
        var cD = {}.toString.call(DD).slice(8, -1);
        return "Object" === cD && DD.constructor && (cD = DD.constructor.name), "Map" === cD || "Set" === cD ? Array.from(DD) : "Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD) ? bD(DD, CD) : void 0
      }
    }
    var ZD;
    try {
      var oD = cD(6444);
      ZD = oD.version
    } catch (UD) {
      ZD = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function vD(DD) {
      var CD = DD.beat,
        cD = DD.fade,
        ID = DD.beatFade,
        pD = DD.bounce,
        iD = DD.shake,
        fD = DD.flash,
        bD = DD.spin,
        wD = DD.spinPulse,
        SD = DD.spinReverse,
        yD = DD.pulse,
        MD = DD.fixedWidth,
        tD = DD.inverse,
        oD = DD.border,
        vD = DD.listItem,
        ND = DD.flip,
        gD = DD.size,
        XD = DD.rotation,
        mD = DD.pull,
        nD = DD.swapOpacity,
        OD = DD.rotateBy,
        PD = DD.widthAuto,
        HD = function(DD, CD) {
          for (var cD = BD(DD.split("-"), 2), ID = cD[0], pD = cD[1], iD = BD(CD.split("-"), 2), fD = iD[0], bD = iD[1], QD = ID.split("."), wD = fD.split("."), SD = 0; SD < Math.max(QD.length, wD.length); SD++) {
            var yD = QD[SD] || "0",
              MD = wD[SD] || "0",
              tD = parseInt(yD, 10),
              ZD = parseInt(MD, 10);
            if (tD !== ZD) return tD > ZD
          }
          for (var oD = 0; oD < Math.max(QD.length, wD.length); oD++) {
            var vD = QD[oD] || "0",
              ND = wD[oD] || "0";
            if (vD !== ND && vD.length !== ND.length) return vD.length < ND.length
          }
          return !(pD && !bD)
        }(ZD, "7.0.0"),
        UD = QD(QD(QD(QD(QD(QD({
          "fa-beat": CD,
          "fa-fade": cD,
          "fa-beat-fade": ID,
          "fa-bounce": pD,
          "fa-shake": iD,
          "fa-flash": fD,
          "fa-spin": bD,
          "fa-spin-reverse": SD,
          "fa-spin-pulse": wD,
          "fa-pulse": yD,
          "fa-fw": MD,
          "fa-inverse": tD,
          "fa-border": oD,
          "fa-li": vD,
          "fa-flip": !0 === ND,
          "fa-flip-horizontal": "horizontal" === ND || "both" === ND,
          "fa-flip-vertical": "vertical" === ND || "both" === ND
        }, "fa-".concat(gD), "undefined" !== typeof gD && null !== gD), "fa-rotate-".concat(XD), "undefined" !== typeof XD && null !== XD && 0 !== XD), "fa-pull-".concat(mD), "undefined" !== typeof mD && null !== mD), "fa-swap-opacity", nD), "fa-rotate-by", HD && OD), "fa-width-auto", HD && PD);
      return Object.keys(UD).map((function(DD) {
        return UD[DD] ? DD : null
      })).filter((function(DD) {
        return DD
      }))
    }

    function ND(DD) {
      return CD = DD, (CD -= 0) === CD ? DD : (DD = DD.replace(/[\-_\s]+(.)?/g, (function(DD, CD) {
        return CD ? CD.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + DD.substr(1);
      var CD
    }
    var gD = ["style"];
    var XD = !1;
    try {
      XD = !0
    } catch (UD) {}

    function mD(DD) {
      return DD && "object" === MD(DD) && DD.prefix && DD.iconName && DD.icon ? DD : ID.parse.icon ? ID.parse.icon(DD) : null === DD ? null : DD && "object" === MD(DD) && DD.prefix && DD.iconName ? DD : Array.isArray(DD) && 2 === DD.length ? {
        prefix: DD[0],
        iconName: DD[1]
      } : "string" === typeof DD ? {
        prefix: "fas",
        iconName: DD
      } : void 0
    }

    function nD(DD, CD) {
      return Array.isArray(CD) && CD.length > 0 || !Array.isArray(CD) && CD ? QD({}, DD, CD) : {}
    }
    var OD = {
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
      PD = fD.forwardRef((function(DD, CD) {
        var cD = SD(SD({}, OD), DD),
          pD = cD.icon,
          iD = cD.mask,
          fD = cD.symbol,
          bD = cD.className,
          QD = cD.title,
          wD = cD.titleId,
          BD = cD.maskId,
          MD = mD(pD),
          tD = nD("classes", [].concat(yD(vD(cD)), yD((bD || "").split(" ")))),
          ZD = nD("transform", "string" === typeof cD.transform ? ID.parse.transform(cD.transform) : cD.transform),
          oD = nD("mask", mD(iD)),
          ND = (0, ID.icon)(MD, SD(SD(SD(SD({}, tD), ZD), oD), {}, {
            symbol: fD,
            title: QD,
            titleId: wD,
            maskId: BD
          }));
        if (!ND) return function() {
          var DD;
          !XD && console && "function" === typeof console.error && (DD = console).error.apply(DD, arguments)
        }("Could not find icon", MD), null;
        var gD = ND.abstract,
          PD = {
            ref: CD
          };
        return Object.keys(cD).forEach((function(DD) {
          OD.hasOwnProperty(DD) || (PD[DD] = cD[DD])
        })), HD(gD[0], PD)
      }));
    PD.displayName = "FontAwesomeIcon", PD.propTypes = {
      beat: iD().bool,
      border: iD().bool,
      beatFade: iD().bool,
      bounce: iD().bool,
      className: iD().string,
      fade: iD().bool,
      flash: iD().bool,
      mask: iD().oneOfType([iD().object, iD().array, iD().string]),
      maskId: iD().string,
      fixedWidth: iD().bool,
      inverse: iD().bool,
      flip: iD().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: iD().oneOfType([iD().object, iD().array, iD().string]),
      listItem: iD().bool,
      pull: iD().oneOf(["right", "left"]),
      pulse: iD().bool,
      rotation: iD().oneOf([0, 90, 180, 270]),
      rotateBy: iD().bool,
      shake: iD().bool,
      size: iD().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: iD().bool,
      spinPulse: iD().bool,
      spinReverse: iD().bool,
      symbol: iD().oneOfType([iD().bool, iD().string]),
      title: iD().string,
      titleId: iD().string,
      transform: iD().oneOfType([iD().string, iD().object]),
      swapOpacity: iD().bool,
      widthAuto: iD().bool
    };
    var HD = function DD(CD, cD) {
      var ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof cD) return cD;
      var pD = (cD.children || []).map((function(cD) {
          return DD(CD, cD)
        })),
        iD = Object.keys(cD.attributes || {}).reduce((function(DD, CD) {
          var ID = cD.attributes[CD];
          switch (CD) {
            case "class":
              DD.attrs.className = ID, delete cD.attributes.class;
              break;
            case "style":
              DD.attrs.style = ID.split(";").map((function(DD) {
                return DD.trim()
              })).filter((function(DD) {
                return DD
              })).reduce((function(DD, CD) {
                var cD, ID = CD.indexOf(":"),
                  pD = ND(CD.slice(0, ID)),
                  iD = CD.slice(ID + 1).trim();
                return pD.startsWith("webkit") ? DD[(cD = pD, cD.charAt(0).toUpperCase() + cD.slice(1))] = iD : DD[pD] = iD, DD
              }), {});
              break;
            default:
              0 === CD.indexOf("aria-") || 0 === CD.indexOf("data-") ? DD.attrs[CD.toLowerCase()] = ID : DD.attrs[ND(CD)] = ID
          }
          return DD
        }), {
          attrs: {}
        }),
        fD = ID.style,
        bD = void 0 === fD ? {} : fD,
        QD = function(DD, CD) {
          if (null == DD) return {};
          var cD, ID, pD = function(DD, CD) {
            if (null == DD) return {};
            var cD = {};
            for (var ID in DD)
              if ({}.hasOwnProperty.call(DD, ID)) {
                if (-1 !== CD.indexOf(ID)) continue;
                cD[ID] = DD[ID]
              } return cD
          }(DD, CD);
          if (Object.getOwnPropertySymbols) {
            var iD = Object.getOwnPropertySymbols(DD);
            for (ID = 0; ID < iD.length; ID++) cD = iD[ID], -1 === CD.indexOf(cD) && {}.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
          }
          return pD
        }(ID, gD);
      return iD.attrs.style = SD(SD({}, iD.attrs.style), bD), CD.apply(void 0, [cD.tag, SD(SD({}, iD.attrs), QD)].concat(yD(pD)))
    }.bind(null, fD.createElement)
  },
  4746: (DD, CD, cD) => {
    var ID = cD(4752);

    function pD() {}

    function iD() {}
    iD.resetWarningCache = pD, DD.exports = function() {
      function DD(DD, CD, cD, pD, iD, fD) {
        if (fD !== ID) {
          var bD = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw bD.name = "Invariant Violation", bD
        }
      }

      function CD() {
        return DD
      }
      DD.isRequired = DD;
      var cD = {
        array: DD,
        bigint: DD,
        bool: DD,
        func: DD,
        number: DD,
        object: DD,
        string: DD,
        symbol: DD,
        any: DD,
        arrayOf: CD,
        element: DD,
        elementType: DD,
        instanceOf: CD,
        node: DD,
        objectOf: CD,
        oneOf: CD,
        oneOfType: CD,
        shape: CD,
        exact: CD,
        checkPropTypes: iD,
        resetWarningCache: pD
      };
      return cD.PropTypes = cD, cD
    }
  },
  4741: (DD, CD, cD) => {
    DD.exports = cD(4746)()
  },
  4752: DD => {
    DD.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6433: (DD, CD, cD) => {
    function ID(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function pD(DD, CD) {
      for (var cD = 0; cD < CD.length; cD++) {
        var ID = CD[cD];
        ID.enumerable = ID.enumerable || !1, ID.configurable = !0, "value" in ID && (ID.writable = !0), Object.defineProperty(DD, BD(ID.key), ID)
      }
    }

    function iD(DD, CD) {
      var cD = "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
      if (!cD) {
        if (Array.isArray(DD) || (cD = MD(DD)) || CD && DD && "number" == typeof DD.length) {
          cD && (DD = cD);
          var ID = 0,
            pD = function() {};
          return {
            s: pD,
            n: function() {
              return ID >= DD.length ? {
                done: !0
              } : {
                done: !1,
                value: DD[ID++]
              }
            },
            e: function(DD) {
              throw DD
            },
            f: pD
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var iD, fD = !0,
        bD = !1;
      return {
        s: function() {
          cD = cD.call(DD)
        },
        n: function() {
          var DD = cD.next();
          return fD = DD.done, DD
        },
        e: function(DD) {
          bD = !0, iD = DD
        },
        f: function() {
          try {
            fD || null == cD.return || cD.return()
          } finally {
            if (bD) throw iD
          }
        }
      }
    }

    function fD(DD, CD, cD) {
      return (CD = BD(CD)) in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function bD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function QD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? bD(Object(cD), !0).forEach((function(CD) {
          fD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : bD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function wD(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        var cD = null == DD ? null : "undefined" != typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null != cD) {
          var ID, pD, iD, fD, bD = [],
            QD = !0,
            wD = !1;
          try {
            if (iD = (cD = cD.call(DD)).next, 0 === CD) {
              if (Object(cD) !== cD) return;
              QD = !1
            } else
              for (; !(QD = (ID = iD.call(cD)).done) && (bD.push(ID.value), bD.length !== CD); QD = !0);
          } catch (DD) {
            wD = !0, pD = DD
          } finally {
            try {
              if (!QD && null != cD.return && (fD = cD.return(), Object(fD) !== fD)) return
            } finally {
              if (wD) throw pD
            }
          }
          return bD
        }
      }(DD, CD) || MD(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function SD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return ID(DD)
      }(DD) || function(DD) {
        if ("undefined" != typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || MD(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function BD(DD) {
      var CD = function(DD, CD) {
        if ("object" != typeof DD || !DD) return DD;
        var cD = DD[Symbol.toPrimitive];
        if (void 0 !== cD) {
          var ID = cD.call(DD, CD || "default");
          if ("object" != typeof ID) return ID;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === CD ? String : Number)(DD)
      }(DD, "string");
      return "symbol" == typeof CD ? CD : CD + ""
    }

    function yD(DD) {
      return yD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(DD) {
        return typeof DD
      } : function(DD) {
        return DD && "function" == typeof Symbol && DD.constructor === Symbol && DD !== Symbol.prototype ? "symbol" : typeof DD
      }, yD(DD)
    }

    function MD(DD, CD) {
      if (DD) {
        if ("string" == typeof DD) return ID(DD, CD);
        var cD = {}.toString.call(DD).slice(8, -1);
        return "Object" === cD && DD.constructor && (cD = DD.constructor.name), "Map" === cD || "Set" === cD ? Array.from(DD) : "Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD) ? ID(DD, CD) : void 0
      }
    }
    cD.r(CD), cD.d(CD, {
      api: () => hc,
      config: () => cp,
      counter: () => Bp,
      dom: () => pp,
      findIconDefinition: () => fp,
      icon: () => Qp,
      layer: () => wp,
      library: () => Ip,
      noAuto: () => Cp,
      parse: () => ip,
      text: () => Sp,
      toHtml: () => bp
    });
    var tD = function() {},
      ZD = {},
      oD = {},
      vD = null,
      ND = {
        mark: tD,
        measure: tD
      };
    try {
      "undefined" !== typeof window && (ZD = window), "undefined" !== typeof document && (oD = document), "undefined" !== typeof MutationObserver && (vD = MutationObserver), "undefined" !== typeof performance && (ND = performance)
    } catch (YD) {}
    var gD, XD, mD = (ZD.navigator || {}).userAgent,
      nD = void 0 === mD ? "" : mD,
      OD = ZD,
      PD = oD,
      HD = vD,
      UD = ND,
      xD = (OD.document, !!PD.documentElement && !!PD.head && "function" === typeof PD.addEventListener && "function" === typeof PD.createElement),
      qD = ~nD.indexOf("MSIE") || ~nD.indexOf("Trident/"),
      JD = {
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
      KD = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      aD = "classic",
      VD = "duotone",
      zD = "sharp",
      jD = "sharp-duotone",
      lD = "chisel",
      LD = "etch",
      TD = "graphite",
      GD = "jelly",
      RD = "jelly-duo",
      kD = "jelly-fill",
      dD = "notdog",
      YD = "notdog-duo",
      WD = "slab",
      sD = "slab-press",
      ED = "thumbprint",
      eD = "utility",
      uD = "utility-duo",
      hD = "utility-fill",
      rD = "whiteboard",
      AD = [aD, VD, zD, jD, lD, LD, TD, GD, RD, kD, dD, YD, WD, sD, ED, eD, uD, hD, rD],
      FD = (fD(fD(fD(fD(fD(fD(fD(fD(fD(fD(gD = {}, aD, "Classic"), VD, "Duotone"), zD, "Sharp"), jD, "Sharp Duotone"), lD, "Chisel"), LD, "Etch"), TD, "Graphite"), GD, "Jelly"), RD, "Jelly Duo"), kD, "Jelly Fill"), fD(fD(fD(fD(fD(fD(fD(fD(fD(gD, dD, "Notdog"), YD, "Notdog Duo"), WD, "Slab"), sD, "Slab Press"), ED, "Thumbprint"), eD, "Utility"), uD, "Utility Duo"), hD, "Utility Fill"), rD, "Whiteboard"), new Map([
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
      DC = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      CC = {
        fak: "kit",
        "fa-kit": "kit"
      },
      cC = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      IC = (fD(fD({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      pC = {
        "kit-duotone": "fakd"
      },
      iC = "duotone-group",
      fC = "swap-opacity",
      bC = "primary",
      QC = "secondary",
      wC = (fD(fD(fD(fD(fD(fD(fD(fD(fD(fD(XD = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), fD(fD(fD(fD(fD(fD(fD(fD(fD(XD, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), fD(fD({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      SC = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      BC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      yC = BC.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      MC = [].concat(SD(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", iC, fC, bC, QC]).concat(BC.map((function(DD) {
        return "".concat(DD, "x")
      }))).concat(yC.map((function(DD) {
        return "w-".concat(DD)
      }))),
      tC = "___FONT_AWESOME___",
      ZC = "svg-inline--fa",
      oC = "data-fa-i2svg",
      vC = "data-fa-pseudo-element",
      NC = "data-prefix",
      gC = "data-icon",
      XC = "fontawesome-i2svg",
      mC = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      nC = ["::before", "::after", ":before", ":after"],
      OC = function() {
        try {
          return !0
        } catch (DD) {
          return !1
        }
      }();

    function PC(DD) {
      return new Proxy(DD, {
        get: function(DD, CD) {
          return CD in DD ? DD[CD] : DD[aD]
        }
      })
    }
    var HC = QD({}, JD);
    HC[aD] = QD(QD(QD(QD({}, {
      "fa-duotone": "duotone"
    }), JD[aD]), CC), cC);
    var UC = PC(HC),
      xC = QD({}, {
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
    xC[aD] = QD(QD(QD(QD({}, {
      duotone: "fad"
    }), xC[aD]), IC), pC);
    var qC = PC(xC),
      JC = QD({}, wC);
    JC[aD] = QD(QD({}, JC[aD]), {
      fak: "fa-kit"
    });
    var KC = PC(JC),
      aC = QD({}, {
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
    aC[aD] = QD(QD({}, aC[aD]), {
      "fa-kit": "fak"
    });
    PC(aC);
    var VC = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      zC = "fa-layers-text",
      jC = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      lC = (PC(QD({}, {
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
      LC = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      TC = [].concat(SD(["kit"]), SD(MC)),
      GC = OD.FontAwesomeConfig || {};
    if (PD && "function" === typeof PD.querySelector) {
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
        var CD = wD(DD, 2),
          cD = CD[0],
          ID = CD[1],
          pD = function(DD) {
            return "" === DD || "false" !== DD && ("true" === DD || DD)
          }(function(DD) {
            var CD = PD.querySelector("script[" + DD + "]");
            if (CD) return CD.getAttribute(DD)
          }(cD));
        void 0 !== pD && null !== pD && (GC[ID] = pD)
      }))
    }
    var RC = {
      styleDefault: "solid",
      familyDefault: aD,
      cssPrefix: "fa",
      replacementClass: ZC,
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
    GC.familyPrefix && (GC.cssPrefix = GC.familyPrefix);
    var kC = QD(QD({}, RC), GC);
    kC.autoReplaceSvg || (kC.observeMutations = !1);
    var dC = {};
    Object.keys(RC).forEach((function(DD) {
      Object.defineProperty(dC, DD, {
        enumerable: !0,
        set: function(CD) {
          kC[DD] = CD, YC.forEach((function(DD) {
            return DD(dC)
          }))
        },
        get: function() {
          return kC[DD]
        }
      })
    })), Object.defineProperty(dC, "familyPrefix", {
      enumerable: !0,
      set: function(DD) {
        kC.cssPrefix = DD, YC.forEach((function(DD) {
          return DD(dC)
        }))
      },
      get: function() {
        return kC.cssPrefix
      }
    }), OD.FontAwesomeConfig = dC;
    var YC = [];
    var WC = 16,
      sC = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function EC() {
      for (var DD = 12, CD = ""; DD-- > 0;) CD += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return CD
    }

    function eC(DD) {
      for (var CD = [], cD = (DD || []).length >>> 0; cD--;) CD[cD] = DD[cD];
      return CD
    }

    function uC(DD) {
      return DD.classList ? eC(DD.classList) : (DD.getAttribute("class") || "").split(" ").filter((function(DD) {
        return DD
      }))
    }

    function hC(DD) {
      return "".concat(DD).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function rC(DD) {
      return Object.keys(DD || {}).reduce((function(CD, cD) {
        return CD + "".concat(cD, ": ").concat(DD[cD].trim(), ";")
      }), "")
    }

    function AC(DD) {
      return DD.size !== sC.size || DD.x !== sC.x || DD.y !== sC.y || DD.rotate !== sC.rotate || DD.flipX || DD.flipY
    }

    function FC() {
      var DD = "fa",
        CD = ZC,
        cD = dC.cssPrefix,
        ID = dC.replacementClass,
        pD = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (cD !== DD || ID !== CD) {
        var iD = new RegExp("\\.".concat(DD, "\\-"), "g"),
          fD = new RegExp("\\--".concat(DD, "\\-"), "g"),
          bD = new RegExp("\\.".concat(CD), "g");
        pD = pD.replace(iD, ".".concat(cD, "-")).replace(fD, "--".concat(cD, "-")).replace(bD, ".".concat(ID))
      }
      return pD
    }
    var Dc = !1;

    function Cc() {
      dC.autoAddCss && !Dc && (! function(DD) {
        if (DD && xD) {
          var CD = PD.createElement("style");
          CD.setAttribute("type", "text/css"), CD.innerHTML = DD;
          for (var cD = PD.head.childNodes, ID = null, pD = cD.length - 1; pD > -1; pD--) {
            var iD = cD[pD],
              fD = (iD.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(fD) > -1 && (ID = iD)
          }
          PD.head.insertBefore(CD, ID)
        }
      }(FC()), Dc = !0)
    }
    var cc = {
        mixout: function() {
          return {
            dom: {
              css: FC,
              insertCss: Cc
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              Cc()
            },
            beforeI2svg: function() {
              Cc()
            }
          }
        }
      },
      Ic = OD || {};
    Ic[tC] || (Ic[tC] = {}), Ic[tC].styles || (Ic[tC].styles = {}), Ic[tC].hooks || (Ic[tC].hooks = {}), Ic[tC].shims || (Ic[tC].shims = []);
    var pc = Ic[tC],
      ic = [],
      fc = function() {
        PD.removeEventListener("DOMContentLoaded", fc), bc = 1, ic.map((function(DD) {
          return DD()
        }))
      },
      bc = !1;

    function Qc(DD) {
      var CD = DD.tag,
        cD = DD.attributes,
        ID = void 0 === cD ? {} : cD,
        pD = DD.children,
        iD = void 0 === pD ? [] : pD;
      return "string" === typeof DD ? hC(DD) : "<".concat(CD, " ").concat(function(DD) {
        return Object.keys(DD || {}).reduce((function(CD, cD) {
          return CD + "".concat(cD, '="').concat(hC(DD[cD]), '" ')
        }), "").trim()
      }(ID), ">").concat(iD.map(Qc).join(""), "</").concat(CD, ">")
    }

    function wc(DD, CD, cD) {
      if (DD && DD[CD] && DD[CD][cD]) return {
        prefix: CD,
        iconName: cD,
        icon: DD[CD][cD]
      }
    }
    xD && ((bc = (PD.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(PD.readyState)) || PD.addEventListener("DOMContentLoaded", fc));
    var Sc = function(DD, CD, cD, ID) {
      var pD, iD, fD, bD = Object.keys(DD),
        QD = bD.length,
        wD = void 0 !== ID ? function(DD, CD) {
          return function(cD, ID, pD, iD) {
            return DD.call(CD, cD, ID, pD, iD)
          }
        }(CD, ID) : CD;
      for (void 0 === cD ? (pD = 1, fD = DD[bD[0]]) : (pD = 0, fD = cD); pD < QD; pD++) fD = wD(fD, DD[iD = bD[pD]], iD, DD);
      return fD
    };

    function Bc(DD) {
      return 1 !== SD(DD).length ? null : DD.codePointAt(0).toString(16)
    }

    function yc(DD) {
      return Object.keys(DD).reduce((function(CD, cD) {
        var ID = DD[cD];
        return !!ID.icon ? CD[ID.iconName] = ID.icon : CD[cD] = ID, CD
      }), {})
    }

    function Mc(DD, CD) {
      var cD = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        ID = void 0 !== cD && cD,
        pD = yc(CD);
      "function" !== typeof pc.hooks.addPack || ID ? pc.styles[DD] = QD(QD({}, pc.styles[DD] || {}), pD) : pc.hooks.addPack(DD, yc(CD)), "fas" === DD && Mc("fa", CD)
    }
    var tc = pc.styles,
      Zc = pc.shims,
      oc = Object.keys(KC),
      vc = oc.reduce((function(DD, CD) {
        return DD[CD] = Object.keys(KC[CD]), DD
      }), {}),
      Nc = null,
      gc = {},
      Xc = {},
      mc = {},
      nc = {},
      Oc = {};

    function Pc(DD, CD) {
      var cD, ID = CD.split("-"),
        pD = ID[0],
        iD = ID.slice(1).join("-");
      return pD !== DD || "" === iD || (cD = iD, ~TC.indexOf(cD)) ? null : iD
    }
    var Hc, Uc = function() {
      var DD = function(DD) {
        return Sc(tc, (function(CD, cD, ID) {
          return CD[ID] = Sc(cD, DD, {}), CD
        }), {})
      };
      gc = DD((function(DD, CD, cD) {
        (CD[3] && (DD[CD[3]] = cD), CD[2]) && CD[2].filter((function(DD) {
          return "number" === typeof DD
        })).forEach((function(CD) {
          DD[CD.toString(16)] = cD
        }));
        return DD
      })), Xc = DD((function(DD, CD, cD) {
        (DD[cD] = cD, CD[2]) && CD[2].filter((function(DD) {
          return "string" === typeof DD
        })).forEach((function(CD) {
          DD[CD] = cD
        }));
        return DD
      })), Oc = DD((function(DD, CD, cD) {
        var ID = CD[2];
        return DD[cD] = cD, ID.forEach((function(CD) {
          DD[CD] = cD
        })), DD
      }));
      var CD = "far" in tc || dC.autoFetchSvg,
        cD = Sc(Zc, (function(DD, cD) {
          var ID = cD[0],
            pD = cD[1],
            iD = cD[2];
          return "far" !== pD || CD || (pD = "fas"), "string" === typeof ID && (DD.names[ID] = {
            prefix: pD,
            iconName: iD
          }), "number" === typeof ID && (DD.unicodes[ID.toString(16)] = {
            prefix: pD,
            iconName: iD
          }), DD
        }), {
          names: {},
          unicodes: {}
        });
      mc = cD.names, nc = cD.unicodes, Nc = ac(dC.styleDefault, {
        family: dC.familyDefault
      })
    };

    function xc(DD, CD) {
      return (gc[DD] || {})[CD]
    }

    function qc(DD, CD) {
      return (Oc[DD] || {})[CD]
    }

    function Jc(DD) {
      return mc[DD] || {
        prefix: null,
        iconName: null
      }
    }

    function Kc() {
      return Nc
    }
    Hc = function(DD) {
      Nc = ac(DD.styleDefault, {
        family: dC.familyDefault
      })
    }, YC.push(Hc), Uc();

    function ac(DD) {
      var CD = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        cD = void 0 === CD ? aD : CD,
        ID = UC[cD][DD];
      if (cD === VD && !DD) return "fad";
      var pD = qC[cD][DD] || qC[cD][ID],
        iD = DD in pc.styles ? DD : null;
      return pD || iD || null
    }

    function Vc(DD) {
      return DD.sort().filter((function(DD, CD, cD) {
        return cD.indexOf(DD) === CD
      }))
    }
    var zc = SC.concat(DC);

    function jc(DD) {
      var CD = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        cD = void 0 !== CD && CD,
        ID = null,
        pD = Vc(DD.filter((function(DD) {
          return zc.includes(DD)
        }))),
        iD = Vc(DD.filter((function(DD) {
          return !zc.includes(DD)
        }))),
        fD = wD(pD.filter((function(DD) {
          return ID = DD, !KD.includes(DD)
        })), 1)[0],
        bD = void 0 === fD ? null : fD,
        SD = function(DD) {
          var CD = aD,
            cD = oc.reduce((function(DD, CD) {
              return DD[CD] = "".concat(dC.cssPrefix, "-").concat(CD), DD
            }), {});
          return AD.forEach((function(ID) {
            (DD.includes(cD[ID]) || DD.some((function(DD) {
              return vc[ID].includes(DD)
            }))) && (CD = ID)
          })), CD
        }(pD),
        BD = QD(QD({}, function(DD) {
          var CD = [],
            cD = null;
          return DD.forEach((function(DD) {
            var ID = Pc(dC.cssPrefix, DD);
            ID ? cD = ID : DD && CD.push(DD)
          })), {
            iconName: cD,
            rest: CD
          }
        }(iD)), {}, {
          prefix: ac(bD, {
            family: SD
          })
        });
      return QD(QD(QD({}, BD), function(DD) {
        var CD = DD.values,
          cD = DD.family,
          ID = DD.canonical,
          pD = DD.givenPrefix,
          iD = void 0 === pD ? "" : pD,
          fD = DD.styles,
          bD = void 0 === fD ? {} : fD,
          QD = DD.config,
          wD = void 0 === QD ? {} : QD,
          SD = cD === VD,
          BD = CD.includes("fa-duotone") || CD.includes("fad"),
          yD = "duotone" === wD.familyDefault,
          MD = "fad" === ID.prefix || "fa-duotone" === ID.prefix;
        !SD && (BD || yD || MD) && (ID.prefix = "fad");
        (CD.includes("fa-brands") || CD.includes("fab")) && (ID.prefix = "fab");
        if (!ID.prefix && lc.includes(cD)) {
          if (Object.keys(bD).find((function(DD) {
              return Lc.includes(DD)
            })) || wD.autoFetchSvg) {
            var tD = FD.get(cD).defaultShortPrefixId;
            ID.prefix = tD, ID.iconName = qc(ID.prefix, ID.iconName) || ID.iconName
          }
        }
        "fa" !== ID.prefix && "fa" !== iD || (ID.prefix = Kc() || "fas");
        return ID
      }({
        values: DD,
        family: SD,
        styles: tc,
        config: dC,
        canonical: BD,
        givenPrefix: ID
      })), function(DD, CD, cD) {
        var ID = cD.prefix,
          pD = cD.iconName;
        if (DD || !ID || !pD) return {
          prefix: ID,
          iconName: pD
        };
        var iD = "fa" === CD ? Jc(pD) : {},
          fD = qc(ID, pD);
        pD = iD.iconName || fD || pD, "far" !== (ID = iD.prefix || ID) || tc.far || !tc.fas || dC.autoFetchSvg || (ID = "fas");
        return {
          prefix: ID,
          iconName: pD
        }
      }(cD, ID, BD))
    }
    var lc = AD.filter((function(DD) {
        return DD !== aD || DD !== VD
      })),
      Lc = Object.keys(wC).filter((function(DD) {
        return DD !== aD
      })).map((function(DD) {
        return Object.keys(wC[DD])
      })).flat();
    var Tc = function() {
        return function(DD, CD, cD) {
          return CD && pD(DD.prototype, CD), cD && pD(DD, cD), Object.defineProperty(DD, "prototype", {
            writable: !1
          }), DD
        }((function DD() {
          ! function(DD, CD) {
            if (!(DD instanceof CD)) throw new TypeError("Cannot call a class as a function")
          }(this, DD), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var DD = this, CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
            var pD = cD.reduce(this._pullDefinitions, {});
            Object.keys(pD).forEach((function(CD) {
              DD.definitions[CD] = QD(QD({}, DD.definitions[CD] || {}), pD[CD]), Mc(CD, pD[CD]);
              var cD = KC[aD][CD];
              cD && Mc(cD, pD[CD]), Uc()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(DD, CD) {
            var cD = CD.prefix && CD.iconName && CD.icon ? {
              0: CD
            } : CD;
            return Object.keys(cD).map((function(CD) {
              var ID = cD[CD],
                pD = ID.prefix,
                iD = ID.iconName,
                fD = ID.icon,
                bD = fD[2];
              DD[pD] || (DD[pD] = {}), bD.length > 0 && bD.forEach((function(CD) {
                "string" === typeof CD && (DD[pD][CD] = fD)
              })), DD[pD][iD] = fD
            })), DD
          }
        }])
      }(),
      Gc = [],
      Rc = {},
      kc = {},
      dc = Object.keys(kc);

    function Yc(DD, CD) {
      for (var cD = arguments.length, ID = new Array(cD > 2 ? cD - 2 : 0), pD = 2; pD < cD; pD++) ID[pD - 2] = arguments[pD];
      return (Rc[DD] || []).forEach((function(DD) {
        CD = DD.apply(null, [CD].concat(ID))
      })), CD
    }

    function Wc(DD) {
      for (var CD = arguments.length, cD = new Array(CD > 1 ? CD - 1 : 0), ID = 1; ID < CD; ID++) cD[ID - 1] = arguments[ID];
      (Rc[DD] || []).forEach((function(DD) {
        DD.apply(null, cD)
      }))
    }

    function sc() {
      var DD = arguments[0],
        CD = Array.prototype.slice.call(arguments, 1);
      return kc[DD] ? kc[DD].apply(null, CD) : void 0
    }

    function Ec(DD) {
      "fa" === DD.prefix && (DD.prefix = "fas");
      var CD = DD.iconName,
        cD = DD.prefix || Kc();
      if (CD) return CD = qc(cD, CD) || CD, wc(ec.definitions, cD, CD) || wc(pc.styles, cD, CD)
    }
    var ec = new Tc,
      uc = {
        i2svg: function() {
          var DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return xD ? (Wc("beforeI2svg", DD), sc("pseudoElements2svg", DD), sc("i2svg", DD)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var DD, CD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            cD = CD.autoReplaceSvgRoot;
          !1 === dC.autoReplaceSvg && (dC.autoReplaceSvg = !0), dC.observeMutations = !0, DD = function() {
            rc({
              autoReplaceSvgRoot: cD
            }), Wc("watch", CD)
          }, xD && (bc ? setTimeout(DD, 0) : ic.push(DD))
        }
      },
      hc = {
        noAuto: function() {
          dC.autoReplaceSvg = !1, dC.observeMutations = !1, Wc("noAuto")
        },
        config: dC,
        dom: uc,
        parse: {
          icon: function(DD) {
            if (null === DD) return null;
            if ("object" === yD(DD) && DD.prefix && DD.iconName) return {
              prefix: DD.prefix,
              iconName: qc(DD.prefix, DD.iconName) || DD.iconName
            };
            if (Array.isArray(DD) && 2 === DD.length) {
              var CD = 0 === DD[1].indexOf("fa-") ? DD[1].slice(3) : DD[1],
                cD = ac(DD[0]);
              return {
                prefix: cD,
                iconName: qc(cD, CD) || CD
              }
            }
            if ("string" === typeof DD && (DD.indexOf("".concat(dC.cssPrefix, "-")) > -1 || DD.match(VC))) {
              var ID = jc(DD.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: ID.prefix || Kc(),
                iconName: qc(ID.prefix, ID.iconName) || ID.iconName
              }
            }
            if ("string" === typeof DD) {
              var pD = Kc();
              return {
                prefix: pD,
                iconName: qc(pD, DD) || DD
              }
            }
          }
        },
        library: ec,
        findIconDefinition: Ec,
        toHtml: Qc
      },
      rc = function() {
        var DD = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          CD = void 0 === DD ? PD : DD;
        (Object.keys(pc.styles).length > 0 || dC.autoFetchSvg) && xD && dC.autoReplaceSvg && hc.dom.i2svg({
          node: CD
        })
      };

    function Ac(DD, CD) {
      return Object.defineProperty(DD, "abstract", {
        get: CD
      }), Object.defineProperty(DD, "html", {
        get: function() {
          return DD.abstract.map((function(DD) {
            return Qc(DD)
          }))
        }
      }), Object.defineProperty(DD, "node", {
        get: function() {
          if (xD) {
            var CD = PD.createElement("div");
            return CD.innerHTML = DD.html, CD.children
          }
        }
      }), DD
    }

    function Fc(DD) {
      var CD = DD.icons,
        cD = CD.main,
        ID = CD.mask,
        pD = DD.prefix,
        iD = DD.iconName,
        fD = DD.transform,
        bD = DD.symbol,
        wD = DD.maskId,
        SD = DD.extra,
        BD = DD.watchable,
        yD = void 0 !== BD && BD,
        MD = ID.found ? ID : cD,
        tD = MD.width,
        ZD = MD.height,
        oD = [dC.replacementClass, iD ? "".concat(dC.cssPrefix, "-").concat(iD) : ""].filter((function(DD) {
          return -1 === SD.classes.indexOf(DD)
        })).filter((function(DD) {
          return "" !== DD || !!DD
        })).concat(SD.classes).join(" "),
        vD = {
          children: [],
          attributes: QD(QD({}, SD.attributes), {}, {
            "data-prefix": pD,
            "data-icon": iD,
            class: oD,
            role: SD.attributes.role || "img",
            viewBox: "0 0 ".concat(tD, " ").concat(ZD)
          })
        };
      (function(DD) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(CD) {
          return CD in DD
        }))
      })(SD.attributes) || SD.attributes["aria-hidden"] || (vD.attributes["aria-hidden"] = "true"), yD && (vD.attributes[oC] = "");
      var ND = QD(QD({}, vD), {}, {
          prefix: pD,
          iconName: iD,
          main: cD,
          mask: ID,
          maskId: wD,
          transform: fD,
          symbol: bD,
          styles: QD({}, SD.styles)
        }),
        gD = ID.found && cD.found ? sc("generateAbstractMask", ND) || {
          children: [],
          attributes: {}
        } : sc("generateAbstractIcon", ND) || {
          children: [],
          attributes: {}
        },
        XD = gD.children,
        mD = gD.attributes;
      return ND.children = XD, ND.attributes = mD, bD ? function(DD) {
        var CD = DD.prefix,
          cD = DD.iconName,
          ID = DD.children,
          pD = DD.attributes,
          iD = DD.symbol,
          fD = !0 === iD ? "".concat(CD, "-").concat(dC.cssPrefix, "-").concat(cD) : iD;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: QD(QD({}, pD), {}, {
              id: fD
            }),
            children: ID
          }]
        }]
      }(ND) : function(DD) {
        var CD = DD.children,
          cD = DD.main,
          ID = DD.mask,
          pD = DD.attributes,
          iD = DD.styles,
          fD = DD.transform;
        if (AC(fD) && cD.found && !ID.found) {
          var bD = {
            x: cD.width / cD.height / 2,
            y: .5
          };
          pD.style = rC(QD(QD({}, iD), {}, {
            "transform-origin": "".concat(bD.x + fD.x / 16, "em ").concat(bD.y + fD.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: pD,
          children: CD
        }]
      }(ND)
    }

    function DI(DD) {
      var CD = DD.content,
        cD = DD.width,
        ID = DD.height,
        pD = DD.transform,
        iD = DD.extra,
        fD = DD.watchable,
        bD = void 0 !== fD && fD,
        wD = QD(QD({}, iD.attributes), {}, {
          class: iD.classes.join(" ")
        });
      bD && (wD[oC] = "");
      var SD = QD({}, iD.styles);
      AC(pD) && (SD.transform = function(DD) {
        var CD = DD.transform,
          cD = DD.width,
          ID = void 0 === cD ? 16 : cD,
          pD = DD.height,
          iD = void 0 === pD ? 16 : pD,
          fD = DD.startCentered,
          bD = void 0 !== fD && fD,
          QD = "";
        return QD += bD && qD ? "translate(".concat(CD.x / WC - ID / 2, "em, ").concat(CD.y / WC - iD / 2, "em) ") : bD ? "translate(calc(-50% + ".concat(CD.x / WC, "em), calc(-50% + ").concat(CD.y / WC, "em)) ") : "translate(".concat(CD.x / WC, "em, ").concat(CD.y / WC, "em) "), QD += "scale(".concat(CD.size / WC * (CD.flipX ? -1 : 1), ", ").concat(CD.size / WC * (CD.flipY ? -1 : 1), ") "), QD + "rotate(".concat(CD.rotate, "deg) ")
      }({
        transform: pD,
        startCentered: !0,
        width: cD,
        height: ID
      }), SD["-webkit-transform"] = SD.transform);
      var BD = rC(SD);
      BD.length > 0 && (wD.style = BD);
      var yD = [];
      return yD.push({
        tag: "span",
        attributes: wD,
        children: [CD]
      }), yD
    }
    var CI = pc.styles;

    function cI(DD) {
      var CD = DD[0],
        cD = DD[1],
        ID = wD(DD.slice(4), 1)[0];
      return {
        found: !0,
        width: CD,
        height: cD,
        icon: Array.isArray(ID) ? {
          tag: "g",
          attributes: {
            class: "".concat(dC.cssPrefix, "-").concat(LC.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(dC.cssPrefix, "-").concat(LC.SECONDARY),
              fill: "currentColor",
              d: ID[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(dC.cssPrefix, "-").concat(LC.PRIMARY),
              fill: "currentColor",
              d: ID[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: ID
          }
        }
      }
    }
    var II = {
      found: !1,
      width: 512,
      height: 512
    };

    function pI(DD, CD) {
      var cD = CD;
      return "fa" === CD && null !== dC.styleDefault && (CD = Kc()), new Promise((function(ID, pD) {
        if ("fa" === cD) {
          var iD = Jc(DD) || {};
          DD = iD.iconName || DD, CD = iD.prefix || CD
        }
        if (DD && CD && CI[CD] && CI[CD][DD]) return ID(cI(CI[CD][DD]));
        ! function(DD, CD) {
          OC || dC.showMissingIcons || !DD || console.error('Icon with name "'.concat(DD, '" and prefix "').concat(CD, '" is missing.'))
        }(DD, CD), ID(QD(QD({}, II), {}, {
          icon: dC.showMissingIcons && DD && sc("missingIconAbstract") || {}
        }))
      }))
    }
    var iI = function() {},
      fI = dC.measurePerformance && UD && UD.mark && UD.measure ? UD : {
        mark: iI,
        measure: iI
      },
      bI = 'FA "7.2.0"',
      QI = function(DD) {
        fI.mark("".concat(bI, " ").concat(DD, " ends")), fI.measure("".concat(bI, " ").concat(DD), "".concat(bI, " ").concat(DD, " begins"), "".concat(bI, " ").concat(DD, " ends"))
      },
      wI = function(DD) {
        return fI.mark("".concat(bI, " ").concat(DD, " begins")),
          function() {
            return QI(DD)
          }
      },
      SI = function() {};

    function BI(DD) {
      return "string" === typeof(DD.getAttribute ? DD.getAttribute(oC) : null)
    }

    function yI(DD) {
      return PD.createElementNS("http://www.w3.org/2000/svg", DD)
    }

    function MI(DD) {
      return PD.createElement(DD)
    }

    function tI(DD) {
      var CD = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        cD = void 0 === CD ? "svg" === DD.tag ? yI : MI : CD;
      if ("string" === typeof DD) return PD.createTextNode(DD);
      var ID = cD(DD.tag);
      return Object.keys(DD.attributes || []).forEach((function(CD) {
        ID.setAttribute(CD, DD.attributes[CD])
      })), (DD.children || []).forEach((function(DD) {
        ID.appendChild(tI(DD, {
          ceFn: cD
        }))
      })), ID
    }
    var ZI = {
      replace: function(DD) {
        var CD = DD[0];
        if (CD.parentNode)
          if (DD[1].forEach((function(DD) {
              CD.parentNode.insertBefore(tI(DD), CD)
            })), null === CD.getAttribute(oC) && dC.keepOriginalSource) {
            var cD = PD.createComment(function(DD) {
              var CD = " ".concat(DD.outerHTML, " ");
              return "".concat(CD, "Font Awesome fontawesome.com ")
            }(CD));
            CD.parentNode.replaceChild(cD, CD)
          } else CD.remove()
      },
      nest: function(DD) {
        var CD = DD[0],
          cD = DD[1];
        if (~uC(CD).indexOf(dC.replacementClass)) return ZI.replace(DD);
        var ID = new RegExp("".concat(dC.cssPrefix, "-.*"));
        if (delete cD[0].attributes.id, cD[0].attributes.class) {
          var pD = cD[0].attributes.class.split(" ").reduce((function(DD, CD) {
            return CD === dC.replacementClass || CD.match(ID) ? DD.toSvg.push(CD) : DD.toNode.push(CD), DD
          }), {
            toNode: [],
            toSvg: []
          });
          cD[0].attributes.class = pD.toSvg.join(" "), 0 === pD.toNode.length ? CD.removeAttribute("class") : CD.setAttribute("class", pD.toNode.join(" "))
        }
        var iD = cD.map((function(DD) {
          return Qc(DD)
        })).join("\n");
        CD.setAttribute(oC, ""), CD.innerHTML = iD
      }
    };

    function oI(DD) {
      DD()
    }

    function vI(DD, CD) {
      var cD = "function" === typeof CD ? CD : SI;
      if (0 === DD.length) cD();
      else {
        var ID = oI;
        "async" === dC.mutateApproach && (ID = OD.requestAnimationFrame || oI), ID((function() {
          var CD = !0 === dC.autoReplaceSvg ? ZI.replace : ZI[dC.autoReplaceSvg] || ZI.replace,
            ID = wI("mutate");
          DD.map(CD), ID(), cD()
        }))
      }
    }
    var NI = !1;

    function gI() {
      NI = !0
    }

    function XI() {
      NI = !1
    }
    var mI = null;

    function nI(DD) {
      if (HD && dC.observeMutations) {
        var CD = DD.treeCallback,
          cD = void 0 === CD ? SI : CD,
          ID = DD.nodeCallback,
          pD = void 0 === ID ? SI : ID,
          iD = DD.pseudoElementsCallback,
          fD = void 0 === iD ? SI : iD,
          bD = DD.observeMutationsRoot,
          QD = void 0 === bD ? PD : bD;
        mI = new HD((function(DD) {
          if (!NI) {
            var CD = Kc();
            eC(DD).forEach((function(DD) {
              if ("childList" === DD.type && DD.addedNodes.length > 0 && !BI(DD.addedNodes[0]) && (dC.searchPseudoElements && fD(DD.target), cD(DD.target)), "attributes" === DD.type && DD.target.parentNode && dC.searchPseudoElements && fD([DD.target], !0), "attributes" === DD.type && BI(DD.target) && ~lC.indexOf(DD.attributeName))
                if ("class" === DD.attributeName && function(DD) {
                    var CD = DD.getAttribute ? DD.getAttribute(NC) : null,
                      cD = DD.getAttribute ? DD.getAttribute(gC) : null;
                    return CD && cD
                  }(DD.target)) {
                  var ID = jc(uC(DD.target)),
                    iD = ID.prefix,
                    bD = ID.iconName;
                  DD.target.setAttribute(NC, iD || CD), bD && DD.target.setAttribute(gC, bD)
                } else(QD = DD.target) && QD.classList && QD.classList.contains && QD.classList.contains(dC.replacementClass) && pD(DD.target);
              var QD
            }))
          }
        })), xD && mI.observe(QD, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function OI(DD) {
      var CD, cD, ID = DD.getAttribute("data-prefix"),
        pD = DD.getAttribute("data-icon"),
        iD = void 0 !== DD.innerText ? DD.innerText.trim() : "",
        fD = jc(uC(DD));
      return fD.prefix || (fD.prefix = Kc()), ID && pD && (fD.prefix = ID, fD.iconName = pD), fD.iconName && fD.prefix || (fD.prefix && iD.length > 0 && (fD.iconName = (CD = fD.prefix, cD = DD.innerText, (Xc[CD] || {})[cD] || xc(fD.prefix, Bc(DD.innerText)))), !fD.iconName && dC.autoFetchSvg && DD.firstChild && DD.firstChild.nodeType === Node.TEXT_NODE && (fD.iconName = DD.firstChild.data)), fD
    }

    function PI(DD) {
      var CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        cD = OI(DD),
        ID = cD.iconName,
        pD = cD.prefix,
        iD = cD.rest,
        fD = function(DD) {
          return eC(DD.attributes).reduce((function(DD, CD) {
            return "class" !== DD.name && "style" !== DD.name && (DD[CD.name] = CD.value), DD
          }), {})
        }(DD),
        bD = Yc("parseNodeAttributes", {}, DD),
        wD = CD.styleParser ? function(DD) {
          var CD = DD.getAttribute("style"),
            cD = [];
          return CD && (cD = CD.split(";").reduce((function(DD, CD) {
            var cD = CD.split(":"),
              ID = cD[0],
              pD = cD.slice(1);
            return ID && pD.length > 0 && (DD[ID] = pD.join(":").trim()), DD
          }), {})), cD
        }(DD) : [];
      return QD({
        iconName: ID,
        prefix: pD,
        transform: sC,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: iD,
          styles: wD,
          attributes: fD
        }
      }, bD)
    }
    var HI = pc.styles;

    function UI(DD) {
      var CD = "nest" === dC.autoReplaceSvg ? PI(DD, {
        styleParser: !1
      }) : PI(DD);
      return ~CD.extra.classes.indexOf(zC) ? sc("generateLayersText", DD, CD) : sc("generateSvgReplacementMutation", DD, CD)
    }

    function xI(DD) {
      var CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!xD) return Promise.resolve();
      var cD = PD.documentElement.classList,
        ID = function(DD) {
          return cD.add("".concat(XC, "-").concat(DD))
        },
        pD = function(DD) {
          return cD.remove("".concat(XC, "-").concat(DD))
        },
        iD = dC.autoFetchSvg ? [].concat(SD(DC), SD(SC)) : KD.concat(Object.keys(HI));
      iD.includes("fa") || iD.push("fa");
      var fD = [".".concat(zC, ":not([").concat(oC, "])")].concat(iD.map((function(DD) {
        return ".".concat(DD, ":not([").concat(oC, "])")
      }))).join(", ");
      if (0 === fD.length) return Promise.resolve();
      var bD = [];
      try {
        bD = eC(DD.querySelectorAll(fD))
      } catch (BD) {}
      if (!(bD.length > 0)) return Promise.resolve();
      ID("pending"), pD("complete");
      var QD = wI("onTree"),
        wD = bD.reduce((function(DD, CD) {
          try {
            var cD = UI(CD);
            cD && DD.push(cD)
          } catch (BD) {
            OC || "MissingIcon" === BD.name && console.error(BD)
          }
          return DD
        }), []);
      return new Promise((function(DD, cD) {
        Promise.all(wD).then((function(cD) {
          vI(cD, (function() {
            ID("active"), ID("complete"), pD("pending"), "function" === typeof CD && CD(), QD(), DD()
          }))
        })).catch((function(DD) {
          QD(), cD(DD)
        }))
      }))
    }

    function qI(DD) {
      var CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      UI(DD).then((function(DD) {
        DD && vI([DD], CD)
      }))
    }
    var JI = function(DD) {
        var CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cD = CD.transform,
          ID = void 0 === cD ? sC : cD,
          pD = CD.symbol,
          iD = void 0 !== pD && pD,
          fD = CD.mask,
          bD = void 0 === fD ? null : fD,
          wD = CD.maskId,
          SD = void 0 === wD ? null : wD,
          BD = CD.classes,
          yD = void 0 === BD ? [] : BD,
          MD = CD.attributes,
          tD = void 0 === MD ? {} : MD,
          ZD = CD.styles,
          oD = void 0 === ZD ? {} : ZD;
        if (DD) {
          var vD = DD.prefix,
            ND = DD.iconName,
            gD = DD.icon;
          return Ac(QD({
            type: "icon"
          }, DD), (function() {
            return Wc("beforeDOMElementCreation", {
              iconDefinition: DD,
              params: CD
            }), Fc({
              icons: {
                main: cI(gD),
                mask: bD ? cI(bD.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: vD,
              iconName: ND,
              transform: QD(QD({}, sC), ID),
              symbol: iD,
              maskId: SD,
              extra: {
                attributes: tD,
                styles: oD,
                classes: yD
              }
            })
          }))
        }
      },
      KI = {
        mixout: function() {
          return {
            icon: (DD = JI, function(CD) {
              var cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ID = (CD || {}).icon ? CD : Ec(CD || {}),
                pD = cD.mask;
              return pD && (pD = (pD || {}).icon ? pD : Ec(pD || {})), DD(ID, QD(QD({}, cD), {}, {
                mask: pD
              }))
            })
          };
          var DD
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(DD) {
              return DD.treeCallback = xI, DD.nodeCallback = qI, DD
            }
          }
        },
        provides: function(DD) {
          DD.i2svg = function(DD) {
            var CD = DD.node,
              cD = void 0 === CD ? PD : CD,
              ID = DD.callback;
            return xI(cD, void 0 === ID ? function() {} : ID)
          }, DD.generateSvgReplacementMutation = function(DD, CD) {
            var cD = CD.iconName,
              ID = CD.prefix,
              pD = CD.transform,
              iD = CD.symbol,
              fD = CD.mask,
              bD = CD.maskId,
              QD = CD.extra;
            return new Promise((function(CD, SD) {
              Promise.all([pI(cD, ID), fD.iconName ? pI(fD.iconName, fD.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(fD) {
                var SD = wD(fD, 2),
                  BD = SD[0],
                  yD = SD[1];
                CD([DD, Fc({
                  icons: {
                    main: BD,
                    mask: yD
                  },
                  prefix: ID,
                  iconName: cD,
                  transform: pD,
                  symbol: iD,
                  maskId: bD,
                  extra: QD,
                  watchable: !0
                })])
              })).catch(SD)
            }))
          }, DD.generateAbstractIcon = function(DD) {
            var CD, cD = DD.children,
              ID = DD.attributes,
              pD = DD.main,
              iD = DD.transform,
              fD = rC(DD.styles);
            return fD.length > 0 && (ID.style = fD), AC(iD) && (CD = sc("generateAbstractTransformGrouping", {
              main: pD,
              transform: iD,
              containerWidth: pD.width,
              iconWidth: pD.width
            })), cD.push(CD || pD.icon), {
              children: cD,
              attributes: ID
            }
          }
        }
      },
      aI = {
        mixout: function() {
          return {
            layer: function(DD) {
              var CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                cD = CD.classes,
                ID = void 0 === cD ? [] : cD;
              return Ac({
                type: "layer"
              }, (function() {
                Wc("beforeDOMElementCreation", {
                  assembler: DD,
                  params: CD
                });
                var cD = [];
                return DD((function(DD) {
                  Array.isArray(DD) ? DD.map((function(DD) {
                    cD = cD.concat(DD.abstract)
                  })) : cD = cD.concat(DD.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(dC.cssPrefix, "-layers")].concat(SD(ID)).join(" ")
                  },
                  children: cD
                }]
              }))
            }
          }
        }
      },
      VI = {
        mixout: function() {
          return {
            counter: function(DD) {
              var CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                cD = CD.title,
                ID = void 0 === cD ? null : cD,
                pD = CD.classes,
                iD = void 0 === pD ? [] : pD,
                fD = CD.attributes,
                bD = void 0 === fD ? {} : fD,
                wD = CD.styles,
                BD = void 0 === wD ? {} : wD;
              return Ac({
                type: "counter",
                content: DD
              }, (function() {
                return Wc("beforeDOMElementCreation", {
                    content: DD,
                    params: CD
                  }),
                  function(DD) {
                    var CD = DD.content,
                      cD = DD.extra,
                      ID = QD(QD({}, cD.attributes), {}, {
                        class: cD.classes.join(" ")
                      }),
                      pD = rC(cD.styles);
                    pD.length > 0 && (ID.style = pD);
                    var iD = [];
                    return iD.push({
                      tag: "span",
                      attributes: ID,
                      children: [CD]
                    }), iD
                  }({
                    content: DD.toString(),
                    title: ID,
                    extra: {
                      attributes: bD,
                      styles: BD,
                      classes: ["".concat(dC.cssPrefix, "-layers-counter")].concat(SD(iD))
                    }
                  })
              }))
            }
          }
        }
      },
      zI = {
        mixout: function() {
          return {
            text: function(DD) {
              var CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                cD = CD.transform,
                ID = void 0 === cD ? sC : cD,
                pD = CD.classes,
                iD = void 0 === pD ? [] : pD,
                fD = CD.attributes,
                bD = void 0 === fD ? {} : fD,
                wD = CD.styles,
                BD = void 0 === wD ? {} : wD;
              return Ac({
                type: "text",
                content: DD
              }, (function() {
                return Wc("beforeDOMElementCreation", {
                  content: DD,
                  params: CD
                }), DI({
                  content: DD,
                  transform: QD(QD({}, sC), ID),
                  extra: {
                    attributes: bD,
                    styles: BD,
                    classes: ["".concat(dC.cssPrefix, "-layers-text")].concat(SD(iD))
                  }
                })
              }))
            }
          }
        },
        provides: function(DD) {
          DD.generateLayersText = function(DD, CD) {
            var cD = CD.transform,
              ID = CD.extra,
              pD = null,
              iD = null;
            if (qD) {
              var fD = parseInt(getComputedStyle(DD).fontSize, 10),
                bD = DD.getBoundingClientRect();
              pD = bD.width / fD, iD = bD.height / fD
            }
            return Promise.resolve([DD, DI({
              content: DD.innerHTML,
              width: pD,
              height: iD,
              transform: cD,
              extra: ID,
              watchable: !0
            })])
          }
        }
      },
      jI = new RegExp('"', "ug"),
      lI = [1105920, 1112319],
      LI = QD(QD(QD(QD({}, {
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
      TI = Object.keys(LI).reduce((function(DD, CD) {
        return DD[CD.toLowerCase()] = LI[CD], DD
      }), {}),
      GI = Object.keys(TI).reduce((function(DD, CD) {
        var cD = TI[CD];
        return DD[CD] = cD[900] || SD(Object.entries(cD))[0][1], DD
      }), {});

    function RI(DD, CD) {
      var cD = "".concat("data-fa-pseudo-element-pending").concat(CD.replace(":", "-"));
      return new Promise((function(ID, pD) {
        if (null !== DD.getAttribute(cD)) return ID();
        var iD = eC(DD.children).filter((function(DD) {
            return DD.getAttribute(vC) === CD
          }))[0],
          fD = OD.getComputedStyle(DD, CD),
          bD = fD.getPropertyValue("font-family"),
          wD = bD.match(jC),
          BD = fD.getPropertyValue("font-weight"),
          yD = fD.getPropertyValue("content");
        if (iD && !wD) return DD.removeChild(iD), ID();
        if (wD && "none" !== yD && "" !== yD) {
          var MD = fD.getPropertyValue("content"),
            tD = function(DD, CD) {
              var cD = DD.replace(/^['"]|['"]$/g, "").toLowerCase(),
                ID = parseInt(CD),
                pD = isNaN(ID) ? "normal" : ID;
              return (TI[cD] || {})[pD] || GI[cD]
            }(bD, BD),
            ZD = function(DD) {
              return Bc(SD(DD.replace(jI, ""))[0] || "")
            }(MD),
            oD = wD[0].startsWith("FontAwesome"),
            vD = function(DD) {
              var CD = DD.getPropertyValue("font-feature-settings").includes("ss01"),
                cD = DD.getPropertyValue("content").replace(jI, ""),
                ID = cD.codePointAt(0),
                pD = ID >= lI[0] && ID <= lI[1],
                iD = 2 === cD.length && cD[0] === cD[1];
              return pD || iD || CD
            }(fD),
            ND = xc(tD, ZD),
            gD = ND;
          if (oD) {
            var XD = function(DD) {
              var CD = nc[DD],
                cD = xc("fas", DD);
              return CD || (cD ? {
                prefix: "fas",
                iconName: cD
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(ZD);
            XD.iconName && XD.prefix && (ND = XD.iconName, tD = XD.prefix)
          }
          if (!ND || vD || iD && iD.getAttribute(NC) === tD && iD.getAttribute(gC) === gD) ID();
          else {
            DD.setAttribute(cD, gD), iD && DD.removeChild(iD);
            var mD = {
                iconName: null,
                prefix: null,
                transform: sC,
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
              nD = mD.extra;
            nD.attributes[vC] = CD, pI(ND, tD).then((function(pD) {
              var iD = Fc(QD(QD({}, mD), {}, {
                  icons: {
                    main: pD,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: tD,
                  iconName: gD,
                  extra: nD,
                  watchable: !0
                })),
                fD = PD.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === CD ? DD.insertBefore(fD, DD.firstChild) : DD.appendChild(fD), fD.outerHTML = iD.map((function(DD) {
                return Qc(DD)
              })).join("\n"), DD.removeAttribute(cD), ID()
            })).catch(pD)
          }
        } else ID()
      }))
    }

    function kI(DD) {
      return Promise.all([RI(DD, "::before"), RI(DD, "::after")])
    }

    function dI(DD) {
      return DD.parentNode !== document.head && !~mC.indexOf(DD.tagName.toUpperCase()) && !DD.getAttribute(vC) && (!DD.parentNode || "svg" !== DD.parentNode.tagName)
    }
    var YI = function(DD) {
        return !!DD && nC.some((function(CD) {
          return DD.includes(CD)
        }))
      },
      WI = function(DD) {
        if (!DD) return [];
        var CD = new Set,
          cD = DD.split(/,(?![^()]*\))/).map((function(DD) {
            return DD.trim()
          }));
        cD = cD.flatMap((function(DD) {
          return DD.includes("(") ? DD : DD.split(",").map((function(DD) {
            return DD.trim()
          }))
        }));
        var ID, pD = iD(cD);
        try {
          for (pD.s(); !(ID = pD.n()).done;) {
            var fD = ID.value;
            if (YI(fD)) {
              var bD = nC.reduce((function(DD, CD) {
                return DD.replace(CD, "")
              }), fD);
              "" !== bD && "*" !== bD && CD.add(bD)
            }
          }
        } catch (QD) {
          pD.e(QD)
        } finally {
          pD.f()
        }
        return CD
      };

    function sI(DD) {
      if (xD) {
        var CD;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) CD = DD;
        else if (dC.searchPseudoElementsFullScan) CD = DD.querySelectorAll("*");
        else {
          var cD, ID = new Set,
            pD = iD(document.styleSheets);
          try {
            for (pD.s(); !(cD = pD.n()).done;) {
              var fD = cD.value;
              try {
                var bD, QD = iD(fD.cssRules);
                try {
                  for (QD.s(); !(bD = QD.n()).done;) {
                    var wD, SD = bD.value,
                      BD = iD(WI(SD.selectorText));
                    try {
                      for (BD.s(); !(wD = BD.n()).done;) {
                        var yD = wD.value;
                        ID.add(yD)
                      }
                    } catch (tD) {
                      BD.e(tD)
                    } finally {
                      BD.f()
                    }
                  }
                } catch (tD) {
                  QD.e(tD)
                } finally {
                  QD.f()
                }
              } catch (ZD) {
                dC.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(fD.href, " (").concat(ZD.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (tD) {
            pD.e(tD)
          } finally {
            pD.f()
          }
          if (!ID.size) return;
          var MD = Array.from(ID).join(", ");
          try {
            CD = DD.querySelectorAll(MD)
          } catch (oD) {}
        }
        return new Promise((function(DD, cD) {
          var ID = eC(CD).filter(dI).map(kI),
            pD = wI("searchPseudoElements");
          gI(), Promise.all(ID).then((function() {
            pD(), XI(), DD()
          })).catch((function() {
            pD(), XI(), cD()
          }))
        }))
      }
    }
    var EI = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(DD) {
              return DD.pseudoElementsCallback = sI, DD
            }
          }
        },
        provides: function(DD) {
          DD.pseudoElements2svg = function(DD) {
            var CD = DD.node,
              cD = void 0 === CD ? PD : CD;
            dC.searchPseudoElements && sI(cD)
          }
        }
      },
      eI = !1,
      uI = function(DD) {
        return DD.toLowerCase().split(" ").reduce((function(DD, CD) {
          var cD = CD.toLowerCase().split("-"),
            ID = cD[0],
            pD = cD.slice(1).join("-");
          if (ID && "h" === pD) return DD.flipX = !0, DD;
          if (ID && "v" === pD) return DD.flipY = !0, DD;
          if (pD = parseFloat(pD), isNaN(pD)) return DD;
          switch (ID) {
            case "grow":
              DD.size = DD.size + pD;
              break;
            case "shrink":
              DD.size = DD.size - pD;
              break;
            case "left":
              DD.x = DD.x - pD;
              break;
            case "right":
              DD.x = DD.x + pD;
              break;
            case "up":
              DD.y = DD.y - pD;
              break;
            case "down":
              DD.y = DD.y + pD;
              break;
            case "rotate":
              DD.rotate = DD.rotate + pD
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
      hI = {
        mixout: function() {
          return {
            parse: {
              transform: function(DD) {
                return uI(DD)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(DD, CD) {
              var cD = CD.getAttribute("data-fa-transform");
              return cD && (DD.transform = uI(cD)), DD
            }
          }
        },
        provides: function(DD) {
          DD.generateAbstractTransformGrouping = function(DD) {
            var CD = DD.main,
              cD = DD.transform,
              ID = DD.containerWidth,
              pD = DD.iconWidth,
              iD = {
                transform: "translate(".concat(ID / 2, " 256)")
              },
              fD = "translate(".concat(32 * cD.x, ", ").concat(32 * cD.y, ") "),
              bD = "scale(".concat(cD.size / 16 * (cD.flipX ? -1 : 1), ", ").concat(cD.size / 16 * (cD.flipY ? -1 : 1), ") "),
              wD = "rotate(".concat(cD.rotate, " 0 0)"),
              SD = {
                outer: iD,
                inner: {
                  transform: "".concat(fD, " ").concat(bD, " ").concat(wD)
                },
                path: {
                  transform: "translate(".concat(pD / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: QD({}, SD.outer),
              children: [{
                tag: "g",
                attributes: QD({}, SD.inner),
                children: [{
                  tag: CD.icon.tag,
                  children: CD.icon.children,
                  attributes: QD(QD({}, CD.icon.attributes), SD.path)
                }]
              }]
            }
          }
        }
      },
      rI = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function AI(DD) {
      var CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return DD.attributes && (DD.attributes.fill || CD) && (DD.attributes.fill = "black"), DD
    }
    var FI = {
        hooks: function() {
          return {
            parseNodeAttributes: function(DD, CD) {
              var cD = CD.getAttribute("data-fa-mask"),
                ID = cD ? jc(cD.split(" ").map((function(DD) {
                  return DD.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return ID.prefix || (ID.prefix = Kc()), DD.mask = ID, DD.maskId = CD.getAttribute("data-fa-mask-id"), DD
            }
          }
        },
        provides: function(DD) {
          DD.generateAbstractMask = function(DD) {
            var CD, cD = DD.children,
              ID = DD.attributes,
              pD = DD.main,
              iD = DD.mask,
              fD = DD.maskId,
              bD = DD.transform,
              wD = pD.width,
              SD = pD.icon,
              BD = iD.width,
              yD = iD.icon,
              MD = function(DD) {
                var CD = DD.transform,
                  cD = DD.containerWidth,
                  ID = DD.iconWidth,
                  pD = {
                    transform: "translate(".concat(cD / 2, " 256)")
                  },
                  iD = "translate(".concat(32 * CD.x, ", ").concat(32 * CD.y, ") "),
                  fD = "scale(".concat(CD.size / 16 * (CD.flipX ? -1 : 1), ", ").concat(CD.size / 16 * (CD.flipY ? -1 : 1), ") "),
                  bD = "rotate(".concat(CD.rotate, " 0 0)");
                return {
                  outer: pD,
                  inner: {
                    transform: "".concat(iD, " ").concat(fD, " ").concat(bD)
                  },
                  path: {
                    transform: "translate(".concat(ID / 2 * -1, " -256)")
                  }
                }
              }({
                transform: bD,
                containerWidth: BD,
                iconWidth: wD
              }),
              tD = {
                tag: "rect",
                attributes: QD(QD({}, rI), {}, {
                  fill: "white"
                })
              },
              ZD = SD.children ? {
                children: SD.children.map(AI)
              } : {},
              oD = {
                tag: "g",
                attributes: QD({}, MD.inner),
                children: [AI(QD({
                  tag: SD.tag,
                  attributes: QD(QD({}, SD.attributes), MD.path)
                }, ZD))]
              },
              vD = {
                tag: "g",
                attributes: QD({}, MD.outer),
                children: [oD]
              },
              ND = "mask-".concat(fD || EC()),
              gD = "clip-".concat(fD || EC()),
              XD = {
                tag: "mask",
                attributes: QD(QD({}, rI), {}, {
                  id: ND,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [tD, vD]
              },
              mD = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: gD
                  },
                  children: (CD = yD, "g" === CD.tag ? CD.children : [CD])
                }, XD]
              };
            return cD.push(mD, {
              tag: "rect",
              attributes: QD({
                fill: "currentColor",
                "clip-path": "url(#".concat(gD, ")"),
                mask: "url(#".concat(ND, ")")
              }, rI)
            }), {
              children: cD,
              attributes: ID
            }
          }
        }
      },
      Dp = {
        provides: function(DD) {
          var CD = !1;
          OD.matchMedia && (CD = OD.matchMedia("(prefers-reduced-motion: reduce)").matches), DD.missingIconAbstract = function() {
            var DD = [],
              cD = {
                fill: "currentColor"
              },
              ID = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            DD.push({
              tag: "path",
              attributes: QD(QD({}, cD), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var pD = QD(QD({}, ID), {}, {
                attributeName: "opacity"
              }),
              iD = {
                tag: "circle",
                attributes: QD(QD({}, cD), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return CD || iD.children.push({
              tag: "animate",
              attributes: QD(QD({}, ID), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: QD(QD({}, pD), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), DD.push(iD), DD.push({
              tag: "path",
              attributes: QD(QD({}, cD), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: CD ? [] : [{
                tag: "animate",
                attributes: QD(QD({}, pD), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), CD || DD.push({
              tag: "path",
              attributes: QD(QD({}, cD), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: QD(QD({}, pD), {}, {
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
    ! function(DD, CD) {
      var cD = CD.mixoutsTo;
      Gc = DD, Rc = {}, Object.keys(kc).forEach((function(DD) {
        -1 === dc.indexOf(DD) && delete kc[DD]
      })), Gc.forEach((function(DD) {
        var CD = DD.mixout ? DD.mixout() : {};
        if (Object.keys(CD).forEach((function(DD) {
            "function" === typeof CD[DD] && (cD[DD] = CD[DD]), "object" === yD(CD[DD]) && Object.keys(CD[DD]).forEach((function(ID) {
              cD[DD] || (cD[DD] = {}), cD[DD][ID] = CD[DD][ID]
            }))
          })), DD.hooks) {
          var ID = DD.hooks();
          Object.keys(ID).forEach((function(DD) {
            Rc[DD] || (Rc[DD] = []), Rc[DD].push(ID[DD])
          }))
        }
        DD.provides && DD.provides(kc)
      }))
    }([cc, KI, aI, VI, zI, EI, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              gI(), eI = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            nI(Yc("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            mI && mI.disconnect()
          },
          watch: function(DD) {
            var CD = DD.observeMutationsRoot;
            eI ? XI() : nI(Yc("mutationObserverCallbacks", {
              observeMutationsRoot: CD
            }))
          }
        }
      }
    }, hI, FI, Dp, {
      hooks: function() {
        return {
          parseNodeAttributes: function(DD, CD) {
            var cD = CD.getAttribute("data-fa-symbol"),
              ID = null !== cD && ("" === cD || cD);
            return DD.symbol = ID, DD
          }
        }
      }
    }], {
      mixoutsTo: hc
    });
    var Cp = hc.noAuto,
      cp = hc.config,
      Ip = hc.library,
      pp = hc.dom,
      ip = hc.parse,
      fp = hc.findIconDefinition,
      bp = hc.toHtml,
      Qp = hc.icon,
      wp = hc.layer,
      Sp = hc.text,
      Bp = hc.counter
  },
  6444: DD => {
    DD.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);