/*! For license information please see w4ddu.fa-renderer.08dd0f4d.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6679: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      FontAwesomeIcon: () => iC
    });
    var QC = ZC(6670),
      wC = ZC(4903),
      bC = ZC.n(wC),
      nC = ZC(48);

    function fC(CC, zC) {
      (null == zC || zC > CC.length) && (zC = CC.length);
      for (var ZC = 0, QC = Array(zC); ZC < zC; ZC++) QC[ZC] = CC[ZC];
      return QC
    }

    function oC(CC, zC, ZC) {
      return (zC = function(CC) {
        var zC = function(CC, zC) {
          if ("object" != typeof CC || !CC) return CC;
          var ZC = CC[Symbol.toPrimitive];
          if (void 0 !== ZC) {
            var QC = ZC.call(CC, zC || "default");
            if ("object" != typeof QC) return QC;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zC ? String : Number)(CC)
        }(CC, "string");
        return "symbol" == typeof zC ? zC : zC + ""
      }(zC)) in CC ? Object.defineProperty(CC, zC, {
        value: ZC,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : CC[zC] = ZC, CC
    }

    function qC(CC, zC) {
      var ZC = Object.keys(CC);
      if (Object.getOwnPropertySymbols) {
        var QC = Object.getOwnPropertySymbols(CC);
        zC && (QC = QC.filter((function(zC) {
          return Object.getOwnPropertyDescriptor(CC, zC).enumerable
        }))), ZC.push.apply(ZC, QC)
      }
      return ZC
    }

    function FC(CC) {
      for (var zC = 1; zC < arguments.length; zC++) {
        var ZC = null != arguments[zC] ? arguments[zC] : {};
        zC % 2 ? qC(Object(ZC), !0).forEach((function(zC) {
          oC(CC, zC, ZC[zC])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(ZC)) : qC(Object(ZC)).forEach((function(zC) {
          Object.defineProperty(CC, zC, Object.getOwnPropertyDescriptor(ZC, zC))
        }))
      }
      return CC
    }

    function WC(CC, zC) {
      return function(CC) {
        if (Array.isArray(CC)) return CC
      }(CC) || function(CC, zC) {
        var ZC = null == CC ? null : "undefined" != typeof Symbol && CC[Symbol.iterator] || CC["@@iterator"];
        if (null != ZC) {
          var QC, wC, bC, nC, fC = [],
            oC = !0,
            qC = !1;
          try {
            if (bC = (ZC = ZC.call(CC)).next, 0 === zC) {
              if (Object(ZC) !== ZC) return;
              oC = !1
            } else
              for (; !(oC = (QC = bC.call(ZC)).done) && (fC.push(QC.value), fC.length !== zC); oC = !0);
          } catch (CC) {
            qC = !0, wC = CC
          } finally {
            try {
              if (!oC && null != ZC.return && (nC = ZC.return(), Object(nC) !== nC)) return
            } finally {
              if (qC) throw wC
            }
          }
          return fC
        }
      }(CC, zC) || gC(CC, zC) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function NC(CC) {
      return function(CC) {
        if (Array.isArray(CC)) return fC(CC)
      }(CC) || function(CC) {
        if ("undefined" != typeof Symbol && null != CC[Symbol.iterator] || null != CC["@@iterator"]) return Array.from(CC)
      }(CC) || gC(CC) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function MC(CC) {
      return MC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(CC) {
        return typeof CC
      } : function(CC) {
        return CC && "function" == typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC
      }, MC(CC)
    }

    function gC(CC, zC) {
      if (CC) {
        if ("string" == typeof CC) return fC(CC, zC);
        var ZC = {}.toString.call(CC).slice(8, -1);
        return "Object" === ZC && CC.constructor && (ZC = CC.constructor.name), "Map" === ZC || "Set" === ZC ? Array.from(CC) : "Arguments" === ZC || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZC) ? fC(CC, zC) : void 0
      }
    }
    var SC;
    try {
      var pC = ZC(6685);
      SC = pC.version
    } catch (eC) {
      SC = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function PC(CC) {
      var zC = CC.beat,
        ZC = CC.fade,
        QC = CC.beatFade,
        wC = CC.bounce,
        bC = CC.shake,
        nC = CC.flash,
        fC = CC.spin,
        qC = CC.spinPulse,
        FC = CC.spinReverse,
        NC = CC.pulse,
        MC = CC.fixedWidth,
        gC = CC.inverse,
        pC = CC.border,
        PC = CC.listItem,
        GC = CC.flip,
        RC = CC.size,
        AC = CC.rotation,
        xC = CC.pull,
        JC = CC.swapOpacity,
        IC = CC.rotateBy,
        iC = CC.widthAuto,
        vC = function(CC, zC) {
          for (var ZC = WC(CC.split("-"), 2), QC = ZC[0], wC = ZC[1], bC = WC(zC.split("-"), 2), nC = bC[0], fC = bC[1], oC = QC.split("."), qC = nC.split("."), FC = 0; FC < Math.max(oC.length, qC.length); FC++) {
            var NC = oC[FC] || "0",
              MC = qC[FC] || "0",
              gC = parseInt(NC, 10),
              SC = parseInt(MC, 10);
            if (gC !== SC) return gC > SC
          }
          for (var pC = 0; pC < Math.max(oC.length, qC.length); pC++) {
            var PC = oC[pC] || "0",
              GC = qC[pC] || "0";
            if (PC !== GC && PC.length !== GC.length) return PC.length < GC.length
          }
          return !(wC && !fC)
        }(SC, "7.0.0"),
        eC = oC(oC(oC(oC(oC(oC({
          "fa-beat": zC,
          "fa-fade": ZC,
          "fa-beat-fade": QC,
          "fa-bounce": wC,
          "fa-shake": bC,
          "fa-flash": nC,
          "fa-spin": fC,
          "fa-spin-reverse": FC,
          "fa-spin-pulse": qC,
          "fa-pulse": NC,
          "fa-fw": MC,
          "fa-inverse": gC,
          "fa-border": pC,
          "fa-li": PC,
          "fa-flip": !0 === GC,
          "fa-flip-horizontal": "horizontal" === GC || "both" === GC,
          "fa-flip-vertical": "vertical" === GC || "both" === GC
        }, "fa-".concat(RC), "undefined" !== typeof RC && null !== RC), "fa-rotate-".concat(AC), "undefined" !== typeof AC && null !== AC && 0 !== AC), "fa-pull-".concat(xC), "undefined" !== typeof xC && null !== xC), "fa-swap-opacity", JC), "fa-rotate-by", vC && IC), "fa-width-auto", vC && iC);
      return Object.keys(eC).map((function(CC) {
        return eC[CC] ? CC : null
      })).filter((function(CC) {
        return CC
      }))
    }

    function GC(CC) {
      return zC = CC, (zC -= 0) === zC ? CC : (CC = CC.replace(/[\-_\s]+(.)?/g, (function(CC, zC) {
        return zC ? zC.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + CC.substr(1);
      var zC
    }
    var RC = ["style"];
    var AC = !1;
    try {
      AC = !0
    } catch (eC) {}

    function xC(CC) {
      return CC && "object" === MC(CC) && CC.prefix && CC.iconName && CC.icon ? CC : QC.parse.icon ? QC.parse.icon(CC) : null === CC ? null : CC && "object" === MC(CC) && CC.prefix && CC.iconName ? CC : Array.isArray(CC) && 2 === CC.length ? {
        prefix: CC[0],
        iconName: CC[1]
      } : "string" === typeof CC ? {
        prefix: "fas",
        iconName: CC
      } : void 0
    }

    function JC(CC, zC) {
      return Array.isArray(zC) && zC.length > 0 || !Array.isArray(zC) && zC ? oC({}, CC, zC) : {}
    }
    var IC = {
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
      iC = nC.forwardRef((function(CC, zC) {
        var ZC = FC(FC({}, IC), CC),
          wC = ZC.icon,
          bC = ZC.mask,
          nC = ZC.symbol,
          fC = ZC.className,
          oC = ZC.title,
          qC = ZC.titleId,
          WC = ZC.maskId,
          MC = xC(wC),
          gC = JC("classes", [].concat(NC(PC(ZC)), NC((fC || "").split(" ")))),
          SC = JC("transform", "string" === typeof ZC.transform ? QC.parse.transform(ZC.transform) : ZC.transform),
          pC = JC("mask", xC(bC)),
          GC = (0, QC.icon)(MC, FC(FC(FC(FC({}, gC), SC), pC), {}, {
            symbol: nC,
            title: oC,
            titleId: qC,
            maskId: WC
          }));
        if (!GC) return function() {
          var CC;
          !AC && console && "function" === typeof console.error && (CC = console).error.apply(CC, arguments)
        }("Could not find icon", MC), null;
        var RC = GC.abstract,
          iC = {
            ref: zC
          };
        return Object.keys(ZC).forEach((function(CC) {
          IC.hasOwnProperty(CC) || (iC[CC] = ZC[CC])
        })), vC(RC[0], iC)
      }));
    iC.displayName = "FontAwesomeIcon", iC.propTypes = {
      beat: bC().bool,
      border: bC().bool,
      beatFade: bC().bool,
      bounce: bC().bool,
      className: bC().string,
      fade: bC().bool,
      flash: bC().bool,
      mask: bC().oneOfType([bC().object, bC().array, bC().string]),
      maskId: bC().string,
      fixedWidth: bC().bool,
      inverse: bC().bool,
      flip: bC().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: bC().oneOfType([bC().object, bC().array, bC().string]),
      listItem: bC().bool,
      pull: bC().oneOf(["right", "left"]),
      pulse: bC().bool,
      rotation: bC().oneOf([0, 90, 180, 270]),
      rotateBy: bC().bool,
      shake: bC().bool,
      size: bC().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: bC().bool,
      spinPulse: bC().bool,
      spinReverse: bC().bool,
      symbol: bC().oneOfType([bC().bool, bC().string]),
      title: bC().string,
      titleId: bC().string,
      transform: bC().oneOfType([bC().string, bC().object]),
      swapOpacity: bC().bool,
      widthAuto: bC().bool
    };
    var vC = function CC(zC, ZC) {
      var QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof ZC) return ZC;
      var wC = (ZC.children || []).map((function(ZC) {
          return CC(zC, ZC)
        })),
        bC = Object.keys(ZC.attributes || {}).reduce((function(CC, zC) {
          var QC = ZC.attributes[zC];
          switch (zC) {
            case "class":
              CC.attrs.className = QC, delete ZC.attributes.class;
              break;
            case "style":
              CC.attrs.style = QC.split(";").map((function(CC) {
                return CC.trim()
              })).filter((function(CC) {
                return CC
              })).reduce((function(CC, zC) {
                var ZC, QC = zC.indexOf(":"),
                  wC = GC(zC.slice(0, QC)),
                  bC = zC.slice(QC + 1).trim();
                return wC.startsWith("webkit") ? CC[(ZC = wC, ZC.charAt(0).toUpperCase() + ZC.slice(1))] = bC : CC[wC] = bC, CC
              }), {});
              break;
            default:
              0 === zC.indexOf("aria-") || 0 === zC.indexOf("data-") ? CC.attrs[zC.toLowerCase()] = QC : CC.attrs[GC(zC)] = QC
          }
          return CC
        }), {
          attrs: {}
        }),
        nC = QC.style,
        fC = void 0 === nC ? {} : nC,
        oC = function(CC, zC) {
          if (null == CC) return {};
          var ZC, QC, wC = function(CC, zC) {
            if (null == CC) return {};
            var ZC = {};
            for (var QC in CC)
              if ({}.hasOwnProperty.call(CC, QC)) {
                if (-1 !== zC.indexOf(QC)) continue;
                ZC[QC] = CC[QC]
              } return ZC
          }(CC, zC);
          if (Object.getOwnPropertySymbols) {
            var bC = Object.getOwnPropertySymbols(CC);
            for (QC = 0; QC < bC.length; QC++) ZC = bC[QC], -1 === zC.indexOf(ZC) && {}.propertyIsEnumerable.call(CC, ZC) && (wC[ZC] = CC[ZC])
          }
          return wC
        }(QC, RC);
      return bC.attrs.style = FC(FC({}, bC.attrs.style), fC), zC.apply(void 0, [ZC.tag, FC(FC({}, bC.attrs), oC)].concat(NC(wC)))
    }.bind(null, nC.createElement)
  },
  4911: (CC, zC, ZC) => {
    var QC = ZC(4915);

    function wC() {}

    function bC() {}
    bC.resetWarningCache = wC, CC.exports = function() {
      function CC(CC, zC, ZC, wC, bC, nC) {
        if (nC !== QC) {
          var fC = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw fC.name = "Invariant Violation", fC
        }
      }

      function zC() {
        return CC
      }
      CC.isRequired = CC;
      var ZC = {
        array: CC,
        bigint: CC,
        bool: CC,
        func: CC,
        number: CC,
        object: CC,
        string: CC,
        symbol: CC,
        any: CC,
        arrayOf: zC,
        element: CC,
        elementType: CC,
        instanceOf: zC,
        node: CC,
        objectOf: zC,
        oneOf: zC,
        oneOfType: zC,
        shape: zC,
        exact: zC,
        checkPropTypes: bC,
        resetWarningCache: wC
      };
      return ZC.PropTypes = ZC, ZC
    }
  },
  4903: (CC, zC, ZC) => {
    CC.exports = ZC(4911)()
  },
  4915: CC => {
    CC.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6670: (CC, zC, ZC) => {
    function QC(CC, zC) {
      (null == zC || zC > CC.length) && (zC = CC.length);
      for (var ZC = 0, QC = Array(zC); ZC < zC; ZC++) QC[ZC] = CC[ZC];
      return QC
    }

    function wC(CC, zC) {
      for (var ZC = 0; ZC < zC.length; ZC++) {
        var QC = zC[ZC];
        QC.enumerable = QC.enumerable || !1, QC.configurable = !0, "value" in QC && (QC.writable = !0), Object.defineProperty(CC, WC(QC.key), QC)
      }
    }

    function bC(CC, zC) {
      var ZC = "undefined" != typeof Symbol && CC[Symbol.iterator] || CC["@@iterator"];
      if (!ZC) {
        if (Array.isArray(CC) || (ZC = MC(CC)) || zC && CC && "number" == typeof CC.length) {
          ZC && (CC = ZC);
          var QC = 0,
            wC = function() {};
          return {
            s: wC,
            n: function() {
              return QC >= CC.length ? {
                done: !0
              } : {
                done: !1,
                value: CC[QC++]
              }
            },
            e: function(CC) {
              throw CC
            },
            f: wC
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var bC, nC = !0,
        fC = !1;
      return {
        s: function() {
          ZC = ZC.call(CC)
        },
        n: function() {
          var CC = ZC.next();
          return nC = CC.done, CC
        },
        e: function(CC) {
          fC = !0, bC = CC
        },
        f: function() {
          try {
            nC || null == ZC.return || ZC.return()
          } finally {
            if (fC) throw bC
          }
        }
      }
    }

    function nC(CC, zC, ZC) {
      return (zC = WC(zC)) in CC ? Object.defineProperty(CC, zC, {
        value: ZC,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : CC[zC] = ZC, CC
    }

    function fC(CC, zC) {
      var ZC = Object.keys(CC);
      if (Object.getOwnPropertySymbols) {
        var QC = Object.getOwnPropertySymbols(CC);
        zC && (QC = QC.filter((function(zC) {
          return Object.getOwnPropertyDescriptor(CC, zC).enumerable
        }))), ZC.push.apply(ZC, QC)
      }
      return ZC
    }

    function oC(CC) {
      for (var zC = 1; zC < arguments.length; zC++) {
        var ZC = null != arguments[zC] ? arguments[zC] : {};
        zC % 2 ? fC(Object(ZC), !0).forEach((function(zC) {
          nC(CC, zC, ZC[zC])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(ZC)) : fC(Object(ZC)).forEach((function(zC) {
          Object.defineProperty(CC, zC, Object.getOwnPropertyDescriptor(ZC, zC))
        }))
      }
      return CC
    }

    function qC(CC, zC) {
      return function(CC) {
        if (Array.isArray(CC)) return CC
      }(CC) || function(CC, zC) {
        var ZC = null == CC ? null : "undefined" != typeof Symbol && CC[Symbol.iterator] || CC["@@iterator"];
        if (null != ZC) {
          var QC, wC, bC, nC, fC = [],
            oC = !0,
            qC = !1;
          try {
            if (bC = (ZC = ZC.call(CC)).next, 0 === zC) {
              if (Object(ZC) !== ZC) return;
              oC = !1
            } else
              for (; !(oC = (QC = bC.call(ZC)).done) && (fC.push(QC.value), fC.length !== zC); oC = !0);
          } catch (CC) {
            qC = !0, wC = CC
          } finally {
            try {
              if (!oC && null != ZC.return && (nC = ZC.return(), Object(nC) !== nC)) return
            } finally {
              if (qC) throw wC
            }
          }
          return fC
        }
      }(CC, zC) || MC(CC, zC) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function FC(CC) {
      return function(CC) {
        if (Array.isArray(CC)) return QC(CC)
      }(CC) || function(CC) {
        if ("undefined" != typeof Symbol && null != CC[Symbol.iterator] || null != CC["@@iterator"]) return Array.from(CC)
      }(CC) || MC(CC) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function WC(CC) {
      var zC = function(CC, zC) {
        if ("object" != typeof CC || !CC) return CC;
        var ZC = CC[Symbol.toPrimitive];
        if (void 0 !== ZC) {
          var QC = ZC.call(CC, zC || "default");
          if ("object" != typeof QC) return QC;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zC ? String : Number)(CC)
      }(CC, "string");
      return "symbol" == typeof zC ? zC : zC + ""
    }

    function NC(CC) {
      return NC = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(CC) {
        return typeof CC
      } : function(CC) {
        return CC && "function" == typeof Symbol && CC.constructor === Symbol && CC !== Symbol.prototype ? "symbol" : typeof CC
      }, NC(CC)
    }

    function MC(CC, zC) {
      if (CC) {
        if ("string" == typeof CC) return QC(CC, zC);
        var ZC = {}.toString.call(CC).slice(8, -1);
        return "Object" === ZC && CC.constructor && (ZC = CC.constructor.name), "Map" === ZC || "Set" === ZC ? Array.from(CC) : "Arguments" === ZC || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZC) ? QC(CC, zC) : void 0
      }
    }
    ZC.r(zC), ZC.d(zC, {
      api: () => BZ,
      config: () => Zw,
      counter: () => Ww,
      dom: () => ww,
      findIconDefinition: () => nw,
      icon: () => ow,
      layer: () => qw,
      library: () => Qw,
      noAuto: () => zw,
      parse: () => bw,
      text: () => Fw,
      toHtml: () => fw
    });
    var gC = function() {},
      SC = {},
      pC = {},
      PC = null,
      GC = {
        mark: gC,
        measure: gC
      };
    try {
      "undefined" !== typeof window && (SC = window), "undefined" !== typeof document && (pC = document), "undefined" !== typeof MutationObserver && (PC = MutationObserver), "undefined" !== typeof performance && (GC = performance)
    } catch (tC) {}
    var RC, AC, xC = (SC.navigator || {}).userAgent,
      JC = void 0 === xC ? "" : xC,
      IC = SC,
      iC = pC,
      vC = PC,
      eC = GC,
      hC = (IC.document, !!iC.documentElement && !!iC.head && "function" === typeof iC.addEventListener && "function" === typeof iC.createElement),
      KC = ~JC.indexOf("MSIE") || ~JC.indexOf("Trident/"),
      YC = {
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
      dC = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      mC = "classic",
      HC = "duotone",
      EC = "sharp",
      lC = "sharp-duotone",
      XC = "chisel",
      cC = "etch",
      uC = "graphite",
      rC = "jelly",
      sC = "jelly-duo",
      TC = "jelly-fill",
      aC = "notdog",
      tC = "notdog-duo",
      DC = "slab",
      jC = "slab-press",
      yC = "thumbprint",
      LC = "utility",
      UC = "utility-duo",
      BC = "utility-fill",
      OC = "whiteboard",
      kC = [mC, HC, EC, lC, XC, cC, uC, rC, sC, TC, aC, tC, DC, jC, yC, LC, UC, BC, OC],
      VC = (nC(nC(nC(nC(nC(nC(nC(nC(nC(nC(RC = {}, mC, "Classic"), HC, "Duotone"), EC, "Sharp"), lC, "Sharp Duotone"), XC, "Chisel"), cC, "Etch"), uC, "Graphite"), rC, "Jelly"), sC, "Jelly Duo"), TC, "Jelly Fill"), nC(nC(nC(nC(nC(nC(nC(nC(nC(RC, aC, "Notdog"), tC, "Notdog Duo"), DC, "Slab"), jC, "Slab Press"), yC, "Thumbprint"), LC, "Utility"), UC, "Utility Duo"), BC, "Utility Fill"), OC, "Whiteboard"), new Map([
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
      Cz = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      zz = {
        fak: "kit",
        "fa-kit": "kit"
      },
      Zz = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      Qz = (nC(nC({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      wz = {
        "kit-duotone": "fakd"
      },
      bz = "duotone-group",
      nz = "swap-opacity",
      fz = "primary",
      oz = "secondary",
      qz = (nC(nC(nC(nC(nC(nC(nC(nC(nC(nC(AC = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), nC(nC(nC(nC(nC(nC(nC(nC(nC(AC, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), nC(nC({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      Fz = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      Wz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Nz = Wz.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      Mz = [].concat(FC(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", bz, nz, fz, oz]).concat(Wz.map((function(CC) {
        return "".concat(CC, "x")
      }))).concat(Nz.map((function(CC) {
        return "w-".concat(CC)
      }))),
      gz = "___FONT_AWESOME___",
      Sz = "svg-inline--fa",
      pz = "data-fa-i2svg",
      Pz = "data-fa-pseudo-element",
      Gz = "data-prefix",
      Rz = "data-icon",
      Az = "fontawesome-i2svg",
      xz = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      Jz = ["::before", "::after", ":before", ":after"],
      Iz = function() {
        try {
          return !0
        } catch (CC) {
          return !1
        }
      }();

    function iz(CC) {
      return new Proxy(CC, {
        get: function(CC, zC) {
          return zC in CC ? CC[zC] : CC[mC]
        }
      })
    }
    var vz = oC({}, YC);
    vz[mC] = oC(oC(oC(oC({}, {
      "fa-duotone": "duotone"
    }), YC[mC]), zz), Zz);
    var ez = iz(vz),
      hz = oC({}, {
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
    hz[mC] = oC(oC(oC(oC({}, {
      duotone: "fad"
    }), hz[mC]), Qz), wz);
    var Kz = iz(hz),
      Yz = oC({}, qz);
    Yz[mC] = oC(oC({}, Yz[mC]), {
      fak: "fa-kit"
    });
    var dz = iz(Yz),
      mz = oC({}, {
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
    mz[mC] = oC(oC({}, mz[mC]), {
      "fa-kit": "fak"
    });
    iz(mz);
    var Hz = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      Ez = "fa-layers-text",
      lz = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Xz = (iz(oC({}, {
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
      cz = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      uz = [].concat(FC(["kit"]), FC(Mz)),
      rz = IC.FontAwesomeConfig || {};
    if (iC && "function" === typeof iC.querySelector) {
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
      ].forEach((function(CC) {
        var zC = qC(CC, 2),
          ZC = zC[0],
          QC = zC[1],
          wC = function(CC) {
            return "" === CC || "false" !== CC && ("true" === CC || CC)
          }(function(CC) {
            var zC = iC.querySelector("script[" + CC + "]");
            if (zC) return zC.getAttribute(CC)
          }(ZC));
        void 0 !== wC && null !== wC && (rz[QC] = wC)
      }))
    }
    var sz = {
      styleDefault: "solid",
      familyDefault: mC,
      cssPrefix: "fa",
      replacementClass: Sz,
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
    rz.familyPrefix && (rz.cssPrefix = rz.familyPrefix);
    var Tz = oC(oC({}, sz), rz);
    Tz.autoReplaceSvg || (Tz.observeMutations = !1);
    var az = {};
    Object.keys(sz).forEach((function(CC) {
      Object.defineProperty(az, CC, {
        enumerable: !0,
        set: function(zC) {
          Tz[CC] = zC, tz.forEach((function(CC) {
            return CC(az)
          }))
        },
        get: function() {
          return Tz[CC]
        }
      })
    })), Object.defineProperty(az, "familyPrefix", {
      enumerable: !0,
      set: function(CC) {
        Tz.cssPrefix = CC, tz.forEach((function(CC) {
          return CC(az)
        }))
      },
      get: function() {
        return Tz.cssPrefix
      }
    }), IC.FontAwesomeConfig = az;
    var tz = [];
    var Dz = 16,
      jz = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function yz() {
      for (var CC = 12, zC = ""; CC-- > 0;) zC += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return zC
    }

    function Lz(CC) {
      for (var zC = [], ZC = (CC || []).length >>> 0; ZC--;) zC[ZC] = CC[ZC];
      return zC
    }

    function Uz(CC) {
      return CC.classList ? Lz(CC.classList) : (CC.getAttribute("class") || "").split(" ").filter((function(CC) {
        return CC
      }))
    }

    function Bz(CC) {
      return "".concat(CC).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Oz(CC) {
      return Object.keys(CC || {}).reduce((function(zC, ZC) {
        return zC + "".concat(ZC, ": ").concat(CC[ZC].trim(), ";")
      }), "")
    }

    function kz(CC) {
      return CC.size !== jz.size || CC.x !== jz.x || CC.y !== jz.y || CC.rotate !== jz.rotate || CC.flipX || CC.flipY
    }

    function Vz() {
      var CC = "fa",
        zC = Sz,
        ZC = az.cssPrefix,
        QC = az.replacementClass,
        wC = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (ZC !== CC || QC !== zC) {
        var bC = new RegExp("\\.".concat(CC, "\\-"), "g"),
          nC = new RegExp("\\--".concat(CC, "\\-"), "g"),
          fC = new RegExp("\\.".concat(zC), "g");
        wC = wC.replace(bC, ".".concat(ZC, "-")).replace(nC, "--".concat(ZC, "-")).replace(fC, ".".concat(QC))
      }
      return wC
    }
    var CZ = !1;

    function zZ() {
      az.autoAddCss && !CZ && (! function(CC) {
        if (CC && hC) {
          var zC = iC.createElement("style");
          zC.setAttribute("type", "text/css"), zC.innerHTML = CC;
          for (var ZC = iC.head.childNodes, QC = null, wC = ZC.length - 1; wC > -1; wC--) {
            var bC = ZC[wC],
              nC = (bC.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(nC) > -1 && (QC = bC)
          }
          iC.head.insertBefore(zC, QC)
        }
      }(Vz()), CZ = !0)
    }
    var ZZ = {
        mixout: function() {
          return {
            dom: {
              css: Vz,
              insertCss: zZ
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              zZ()
            },
            beforeI2svg: function() {
              zZ()
            }
          }
        }
      },
      QZ = IC || {};
    QZ[gz] || (QZ[gz] = {}), QZ[gz].styles || (QZ[gz].styles = {}), QZ[gz].hooks || (QZ[gz].hooks = {}), QZ[gz].shims || (QZ[gz].shims = []);
    var wZ = QZ[gz],
      bZ = [],
      nZ = function() {
        iC.removeEventListener("DOMContentLoaded", nZ), fZ = 1, bZ.map((function(CC) {
          return CC()
        }))
      },
      fZ = !1;

    function oZ(CC) {
      var zC = CC.tag,
        ZC = CC.attributes,
        QC = void 0 === ZC ? {} : ZC,
        wC = CC.children,
        bC = void 0 === wC ? [] : wC;
      return "string" === typeof CC ? Bz(CC) : "<".concat(zC, " ").concat(function(CC) {
        return Object.keys(CC || {}).reduce((function(zC, ZC) {
          return zC + "".concat(ZC, '="').concat(Bz(CC[ZC]), '" ')
        }), "").trim()
      }(QC), ">").concat(bC.map(oZ).join(""), "</").concat(zC, ">")
    }

    function qZ(CC, zC, ZC) {
      if (CC && CC[zC] && CC[zC][ZC]) return {
        prefix: zC,
        iconName: ZC,
        icon: CC[zC][ZC]
      }
    }
    hC && ((fZ = (iC.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(iC.readyState)) || iC.addEventListener("DOMContentLoaded", nZ));
    var FZ = function(CC, zC, ZC, QC) {
      var wC, bC, nC, fC = Object.keys(CC),
        oC = fC.length,
        qC = void 0 !== QC ? function(CC, zC) {
          return function(ZC, QC, wC, bC) {
            return CC.call(zC, ZC, QC, wC, bC)
          }
        }(zC, QC) : zC;
      for (void 0 === ZC ? (wC = 1, nC = CC[fC[0]]) : (wC = 0, nC = ZC); wC < oC; wC++) nC = qC(nC, CC[bC = fC[wC]], bC, CC);
      return nC
    };

    function WZ(CC) {
      return 1 !== FC(CC).length ? null : CC.codePointAt(0).toString(16)
    }

    function NZ(CC) {
      return Object.keys(CC).reduce((function(zC, ZC) {
        var QC = CC[ZC];
        return !!QC.icon ? zC[QC.iconName] = QC.icon : zC[ZC] = QC, zC
      }), {})
    }

    function MZ(CC, zC) {
      var ZC = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        QC = void 0 !== ZC && ZC,
        wC = NZ(zC);
      "function" !== typeof wZ.hooks.addPack || QC ? wZ.styles[CC] = oC(oC({}, wZ.styles[CC] || {}), wC) : wZ.hooks.addPack(CC, NZ(zC)), "fas" === CC && MZ("fa", zC)
    }
    var gZ = wZ.styles,
      SZ = wZ.shims,
      pZ = Object.keys(dz),
      PZ = pZ.reduce((function(CC, zC) {
        return CC[zC] = Object.keys(dz[zC]), CC
      }), {}),
      GZ = null,
      RZ = {},
      AZ = {},
      xZ = {},
      JZ = {},
      IZ = {};

    function iZ(CC, zC) {
      var ZC, QC = zC.split("-"),
        wC = QC[0],
        bC = QC.slice(1).join("-");
      return wC !== CC || "" === bC || (ZC = bC, ~uz.indexOf(ZC)) ? null : bC
    }
    var vZ, eZ = function() {
      var CC = function(CC) {
        return FZ(gZ, (function(zC, ZC, QC) {
          return zC[QC] = FZ(ZC, CC, {}), zC
        }), {})
      };
      RZ = CC((function(CC, zC, ZC) {
        (zC[3] && (CC[zC[3]] = ZC), zC[2]) && zC[2].filter((function(CC) {
          return "number" === typeof CC
        })).forEach((function(zC) {
          CC[zC.toString(16)] = ZC
        }));
        return CC
      })), AZ = CC((function(CC, zC, ZC) {
        (CC[ZC] = ZC, zC[2]) && zC[2].filter((function(CC) {
          return "string" === typeof CC
        })).forEach((function(zC) {
          CC[zC] = ZC
        }));
        return CC
      })), IZ = CC((function(CC, zC, ZC) {
        var QC = zC[2];
        return CC[ZC] = ZC, QC.forEach((function(zC) {
          CC[zC] = ZC
        })), CC
      }));
      var zC = "far" in gZ || az.autoFetchSvg,
        ZC = FZ(SZ, (function(CC, ZC) {
          var QC = ZC[0],
            wC = ZC[1],
            bC = ZC[2];
          return "far" !== wC || zC || (wC = "fas"), "string" === typeof QC && (CC.names[QC] = {
            prefix: wC,
            iconName: bC
          }), "number" === typeof QC && (CC.unicodes[QC.toString(16)] = {
            prefix: wC,
            iconName: bC
          }), CC
        }), {
          names: {},
          unicodes: {}
        });
      xZ = ZC.names, JZ = ZC.unicodes, GZ = mZ(az.styleDefault, {
        family: az.familyDefault
      })
    };

    function hZ(CC, zC) {
      return (RZ[CC] || {})[zC]
    }

    function KZ(CC, zC) {
      return (IZ[CC] || {})[zC]
    }

    function YZ(CC) {
      return xZ[CC] || {
        prefix: null,
        iconName: null
      }
    }

    function dZ() {
      return GZ
    }
    vZ = function(CC) {
      GZ = mZ(CC.styleDefault, {
        family: az.familyDefault
      })
    }, tz.push(vZ), eZ();

    function mZ(CC) {
      var zC = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        ZC = void 0 === zC ? mC : zC,
        QC = ez[ZC][CC];
      if (ZC === HC && !CC) return "fad";
      var wC = Kz[ZC][CC] || Kz[ZC][QC],
        bC = CC in wZ.styles ? CC : null;
      return wC || bC || null
    }

    function HZ(CC) {
      return CC.sort().filter((function(CC, zC, ZC) {
        return ZC.indexOf(CC) === zC
      }))
    }
    var EZ = Fz.concat(Cz);

    function lZ(CC) {
      var zC = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        ZC = void 0 !== zC && zC,
        QC = null,
        wC = HZ(CC.filter((function(CC) {
          return EZ.includes(CC)
        }))),
        bC = HZ(CC.filter((function(CC) {
          return !EZ.includes(CC)
        }))),
        nC = qC(wC.filter((function(CC) {
          return QC = CC, !dC.includes(CC)
        })), 1)[0],
        fC = void 0 === nC ? null : nC,
        FC = function(CC) {
          var zC = mC,
            ZC = pZ.reduce((function(CC, zC) {
              return CC[zC] = "".concat(az.cssPrefix, "-").concat(zC), CC
            }), {});
          return kC.forEach((function(QC) {
            (CC.includes(ZC[QC]) || CC.some((function(CC) {
              return PZ[QC].includes(CC)
            }))) && (zC = QC)
          })), zC
        }(wC),
        WC = oC(oC({}, function(CC) {
          var zC = [],
            ZC = null;
          return CC.forEach((function(CC) {
            var QC = iZ(az.cssPrefix, CC);
            QC ? ZC = QC : CC && zC.push(CC)
          })), {
            iconName: ZC,
            rest: zC
          }
        }(bC)), {}, {
          prefix: mZ(fC, {
            family: FC
          })
        });
      return oC(oC(oC({}, WC), function(CC) {
        var zC = CC.values,
          ZC = CC.family,
          QC = CC.canonical,
          wC = CC.givenPrefix,
          bC = void 0 === wC ? "" : wC,
          nC = CC.styles,
          fC = void 0 === nC ? {} : nC,
          oC = CC.config,
          qC = void 0 === oC ? {} : oC,
          FC = ZC === HC,
          WC = zC.includes("fa-duotone") || zC.includes("fad"),
          NC = "duotone" === qC.familyDefault,
          MC = "fad" === QC.prefix || "fa-duotone" === QC.prefix;
        !FC && (WC || NC || MC) && (QC.prefix = "fad");
        (zC.includes("fa-brands") || zC.includes("fab")) && (QC.prefix = "fab");
        if (!QC.prefix && XZ.includes(ZC)) {
          if (Object.keys(fC).find((function(CC) {
              return cZ.includes(CC)
            })) || qC.autoFetchSvg) {
            var gC = VC.get(ZC).defaultShortPrefixId;
            QC.prefix = gC, QC.iconName = KZ(QC.prefix, QC.iconName) || QC.iconName
          }
        }
        "fa" !== QC.prefix && "fa" !== bC || (QC.prefix = dZ() || "fas");
        return QC
      }({
        values: CC,
        family: FC,
        styles: gZ,
        config: az,
        canonical: WC,
        givenPrefix: QC
      })), function(CC, zC, ZC) {
        var QC = ZC.prefix,
          wC = ZC.iconName;
        if (CC || !QC || !wC) return {
          prefix: QC,
          iconName: wC
        };
        var bC = "fa" === zC ? YZ(wC) : {},
          nC = KZ(QC, wC);
        wC = bC.iconName || nC || wC, "far" !== (QC = bC.prefix || QC) || gZ.far || !gZ.fas || az.autoFetchSvg || (QC = "fas");
        return {
          prefix: QC,
          iconName: wC
        }
      }(ZC, QC, WC))
    }
    var XZ = kC.filter((function(CC) {
        return CC !== mC || CC !== HC
      })),
      cZ = Object.keys(qz).filter((function(CC) {
        return CC !== mC
      })).map((function(CC) {
        return Object.keys(qz[CC])
      })).flat();
    var uZ = function() {
        return function(CC, zC, ZC) {
          return zC && wC(CC.prototype, zC), ZC && wC(CC, ZC), Object.defineProperty(CC, "prototype", {
            writable: !1
          }), CC
        }((function CC() {
          ! function(CC, zC) {
            if (!(CC instanceof zC)) throw new TypeError("Cannot call a class as a function")
          }(this, CC), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var CC = this, zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
            var wC = ZC.reduce(this._pullDefinitions, {});
            Object.keys(wC).forEach((function(zC) {
              CC.definitions[zC] = oC(oC({}, CC.definitions[zC] || {}), wC[zC]), MZ(zC, wC[zC]);
              var ZC = dz[mC][zC];
              ZC && MZ(ZC, wC[zC]), eZ()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(CC, zC) {
            var ZC = zC.prefix && zC.iconName && zC.icon ? {
              0: zC
            } : zC;
            return Object.keys(ZC).map((function(zC) {
              var QC = ZC[zC],
                wC = QC.prefix,
                bC = QC.iconName,
                nC = QC.icon,
                fC = nC[2];
              CC[wC] || (CC[wC] = {}), fC.length > 0 && fC.forEach((function(zC) {
                "string" === typeof zC && (CC[wC][zC] = nC)
              })), CC[wC][bC] = nC
            })), CC
          }
        }])
      }(),
      rZ = [],
      sZ = {},
      TZ = {},
      aZ = Object.keys(TZ);

    function tZ(CC, zC) {
      for (var ZC = arguments.length, QC = new Array(ZC > 2 ? ZC - 2 : 0), wC = 2; wC < ZC; wC++) QC[wC - 2] = arguments[wC];
      return (sZ[CC] || []).forEach((function(CC) {
        zC = CC.apply(null, [zC].concat(QC))
      })), zC
    }

    function DZ(CC) {
      for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), QC = 1; QC < zC; QC++) ZC[QC - 1] = arguments[QC];
      (sZ[CC] || []).forEach((function(CC) {
        CC.apply(null, ZC)
      }))
    }

    function jZ() {
      var CC = arguments[0],
        zC = Array.prototype.slice.call(arguments, 1);
      return TZ[CC] ? TZ[CC].apply(null, zC) : void 0
    }

    function yZ(CC) {
      "fa" === CC.prefix && (CC.prefix = "fas");
      var zC = CC.iconName,
        ZC = CC.prefix || dZ();
      if (zC) return zC = KZ(ZC, zC) || zC, qZ(LZ.definitions, ZC, zC) || qZ(wZ.styles, ZC, zC)
    }
    var LZ = new uZ,
      UZ = {
        i2svg: function() {
          var CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return hC ? (DZ("beforeI2svg", CC), jZ("pseudoElements2svg", CC), jZ("i2svg", CC)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var CC, zC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            ZC = zC.autoReplaceSvgRoot;
          !1 === az.autoReplaceSvg && (az.autoReplaceSvg = !0), az.observeMutations = !0, CC = function() {
            OZ({
              autoReplaceSvgRoot: ZC
            }), DZ("watch", zC)
          }, hC && (fZ ? setTimeout(CC, 0) : bZ.push(CC))
        }
      },
      BZ = {
        noAuto: function() {
          az.autoReplaceSvg = !1, az.observeMutations = !1, DZ("noAuto")
        },
        config: az,
        dom: UZ,
        parse: {
          icon: function(CC) {
            if (null === CC) return null;
            if ("object" === NC(CC) && CC.prefix && CC.iconName) return {
              prefix: CC.prefix,
              iconName: KZ(CC.prefix, CC.iconName) || CC.iconName
            };
            if (Array.isArray(CC) && 2 === CC.length) {
              var zC = 0 === CC[1].indexOf("fa-") ? CC[1].slice(3) : CC[1],
                ZC = mZ(CC[0]);
              return {
                prefix: ZC,
                iconName: KZ(ZC, zC) || zC
              }
            }
            if ("string" === typeof CC && (CC.indexOf("".concat(az.cssPrefix, "-")) > -1 || CC.match(Hz))) {
              var QC = lZ(CC.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: QC.prefix || dZ(),
                iconName: KZ(QC.prefix, QC.iconName) || QC.iconName
              }
            }
            if ("string" === typeof CC) {
              var wC = dZ();
              return {
                prefix: wC,
                iconName: KZ(wC, CC) || CC
              }
            }
          }
        },
        library: LZ,
        findIconDefinition: yZ,
        toHtml: oZ
      },
      OZ = function() {
        var CC = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          zC = void 0 === CC ? iC : CC;
        (Object.keys(wZ.styles).length > 0 || az.autoFetchSvg) && hC && az.autoReplaceSvg && BZ.dom.i2svg({
          node: zC
        })
      };

    function kZ(CC, zC) {
      return Object.defineProperty(CC, "abstract", {
        get: zC
      }), Object.defineProperty(CC, "html", {
        get: function() {
          return CC.abstract.map((function(CC) {
            return oZ(CC)
          }))
        }
      }), Object.defineProperty(CC, "node", {
        get: function() {
          if (hC) {
            var zC = iC.createElement("div");
            return zC.innerHTML = CC.html, zC.children
          }
        }
      }), CC
    }

    function VZ(CC) {
      var zC = CC.icons,
        ZC = zC.main,
        QC = zC.mask,
        wC = CC.prefix,
        bC = CC.iconName,
        nC = CC.transform,
        fC = CC.symbol,
        qC = CC.maskId,
        FC = CC.extra,
        WC = CC.watchable,
        NC = void 0 !== WC && WC,
        MC = QC.found ? QC : ZC,
        gC = MC.width,
        SC = MC.height,
        pC = [az.replacementClass, bC ? "".concat(az.cssPrefix, "-").concat(bC) : ""].filter((function(CC) {
          return -1 === FC.classes.indexOf(CC)
        })).filter((function(CC) {
          return "" !== CC || !!CC
        })).concat(FC.classes).join(" "),
        PC = {
          children: [],
          attributes: oC(oC({}, FC.attributes), {}, {
            "data-prefix": wC,
            "data-icon": bC,
            class: pC,
            role: FC.attributes.role || "img",
            viewBox: "0 0 ".concat(gC, " ").concat(SC)
          })
        };
      (function(CC) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(zC) {
          return zC in CC
        }))
      })(FC.attributes) || FC.attributes["aria-hidden"] || (PC.attributes["aria-hidden"] = "true"), NC && (PC.attributes[pz] = "");
      var GC = oC(oC({}, PC), {}, {
          prefix: wC,
          iconName: bC,
          main: ZC,
          mask: QC,
          maskId: qC,
          transform: nC,
          symbol: fC,
          styles: oC({}, FC.styles)
        }),
        RC = QC.found && ZC.found ? jZ("generateAbstractMask", GC) || {
          children: [],
          attributes: {}
        } : jZ("generateAbstractIcon", GC) || {
          children: [],
          attributes: {}
        },
        AC = RC.children,
        xC = RC.attributes;
      return GC.children = AC, GC.attributes = xC, fC ? function(CC) {
        var zC = CC.prefix,
          ZC = CC.iconName,
          QC = CC.children,
          wC = CC.attributes,
          bC = CC.symbol,
          nC = !0 === bC ? "".concat(zC, "-").concat(az.cssPrefix, "-").concat(ZC) : bC;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: oC(oC({}, wC), {}, {
              id: nC
            }),
            children: QC
          }]
        }]
      }(GC) : function(CC) {
        var zC = CC.children,
          ZC = CC.main,
          QC = CC.mask,
          wC = CC.attributes,
          bC = CC.styles,
          nC = CC.transform;
        if (kz(nC) && ZC.found && !QC.found) {
          var fC = {
            x: ZC.width / ZC.height / 2,
            y: .5
          };
          wC.style = Oz(oC(oC({}, bC), {}, {
            "transform-origin": "".concat(fC.x + nC.x / 16, "em ").concat(fC.y + nC.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: wC,
          children: zC
        }]
      }(GC)
    }

    function CQ(CC) {
      var zC = CC.content,
        ZC = CC.width,
        QC = CC.height,
        wC = CC.transform,
        bC = CC.extra,
        nC = CC.watchable,
        fC = void 0 !== nC && nC,
        qC = oC(oC({}, bC.attributes), {}, {
          class: bC.classes.join(" ")
        });
      fC && (qC[pz] = "");
      var FC = oC({}, bC.styles);
      kz(wC) && (FC.transform = function(CC) {
        var zC = CC.transform,
          ZC = CC.width,
          QC = void 0 === ZC ? 16 : ZC,
          wC = CC.height,
          bC = void 0 === wC ? 16 : wC,
          nC = CC.startCentered,
          fC = void 0 !== nC && nC,
          oC = "";
        return oC += fC && KC ? "translate(".concat(zC.x / Dz - QC / 2, "em, ").concat(zC.y / Dz - bC / 2, "em) ") : fC ? "translate(calc(-50% + ".concat(zC.x / Dz, "em), calc(-50% + ").concat(zC.y / Dz, "em)) ") : "translate(".concat(zC.x / Dz, "em, ").concat(zC.y / Dz, "em) "), oC += "scale(".concat(zC.size / Dz * (zC.flipX ? -1 : 1), ", ").concat(zC.size / Dz * (zC.flipY ? -1 : 1), ") "), oC + "rotate(".concat(zC.rotate, "deg) ")
      }({
        transform: wC,
        startCentered: !0,
        width: ZC,
        height: QC
      }), FC["-webkit-transform"] = FC.transform);
      var WC = Oz(FC);
      WC.length > 0 && (qC.style = WC);
      var NC = [];
      return NC.push({
        tag: "span",
        attributes: qC,
        children: [zC]
      }), NC
    }
    var zQ = wZ.styles;

    function ZQ(CC) {
      var zC = CC[0],
        ZC = CC[1],
        QC = qC(CC.slice(4), 1)[0];
      return {
        found: !0,
        width: zC,
        height: ZC,
        icon: Array.isArray(QC) ? {
          tag: "g",
          attributes: {
            class: "".concat(az.cssPrefix, "-").concat(cz.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(az.cssPrefix, "-").concat(cz.SECONDARY),
              fill: "currentColor",
              d: QC[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(az.cssPrefix, "-").concat(cz.PRIMARY),
              fill: "currentColor",
              d: QC[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: QC
          }
        }
      }
    }
    var QQ = {
      found: !1,
      width: 512,
      height: 512
    };

    function wQ(CC, zC) {
      var ZC = zC;
      return "fa" === zC && null !== az.styleDefault && (zC = dZ()), new Promise((function(QC, wC) {
        if ("fa" === ZC) {
          var bC = YZ(CC) || {};
          CC = bC.iconName || CC, zC = bC.prefix || zC
        }
        if (CC && zC && zQ[zC] && zQ[zC][CC]) return QC(ZQ(zQ[zC][CC]));
        ! function(CC, zC) {
          Iz || az.showMissingIcons || !CC || console.error('Icon with name "'.concat(CC, '" and prefix "').concat(zC, '" is missing.'))
        }(CC, zC), QC(oC(oC({}, QQ), {}, {
          icon: az.showMissingIcons && CC && jZ("missingIconAbstract") || {}
        }))
      }))
    }
    var bQ = function() {},
      nQ = az.measurePerformance && eC && eC.mark && eC.measure ? eC : {
        mark: bQ,
        measure: bQ
      },
      fQ = 'FA "7.2.0"',
      oQ = function(CC) {
        nQ.mark("".concat(fQ, " ").concat(CC, " ends")), nQ.measure("".concat(fQ, " ").concat(CC), "".concat(fQ, " ").concat(CC, " begins"), "".concat(fQ, " ").concat(CC, " ends"))
      },
      qQ = function(CC) {
        return nQ.mark("".concat(fQ, " ").concat(CC, " begins")),
          function() {
            return oQ(CC)
          }
      },
      FQ = function() {};

    function WQ(CC) {
      return "string" === typeof(CC.getAttribute ? CC.getAttribute(pz) : null)
    }

    function NQ(CC) {
      return iC.createElementNS("http://www.w3.org/2000/svg", CC)
    }

    function MQ(CC) {
      return iC.createElement(CC)
    }

    function gQ(CC) {
      var zC = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        ZC = void 0 === zC ? "svg" === CC.tag ? NQ : MQ : zC;
      if ("string" === typeof CC) return iC.createTextNode(CC);
      var QC = ZC(CC.tag);
      return Object.keys(CC.attributes || []).forEach((function(zC) {
        QC.setAttribute(zC, CC.attributes[zC])
      })), (CC.children || []).forEach((function(CC) {
        QC.appendChild(gQ(CC, {
          ceFn: ZC
        }))
      })), QC
    }
    var SQ = {
      replace: function(CC) {
        var zC = CC[0];
        if (zC.parentNode)
          if (CC[1].forEach((function(CC) {
              zC.parentNode.insertBefore(gQ(CC), zC)
            })), null === zC.getAttribute(pz) && az.keepOriginalSource) {
            var ZC = iC.createComment(function(CC) {
              var zC = " ".concat(CC.outerHTML, " ");
              return "".concat(zC, "Font Awesome fontawesome.com ")
            }(zC));
            zC.parentNode.replaceChild(ZC, zC)
          } else zC.remove()
      },
      nest: function(CC) {
        var zC = CC[0],
          ZC = CC[1];
        if (~Uz(zC).indexOf(az.replacementClass)) return SQ.replace(CC);
        var QC = new RegExp("".concat(az.cssPrefix, "-.*"));
        if (delete ZC[0].attributes.id, ZC[0].attributes.class) {
          var wC = ZC[0].attributes.class.split(" ").reduce((function(CC, zC) {
            return zC === az.replacementClass || zC.match(QC) ? CC.toSvg.push(zC) : CC.toNode.push(zC), CC
          }), {
            toNode: [],
            toSvg: []
          });
          ZC[0].attributes.class = wC.toSvg.join(" "), 0 === wC.toNode.length ? zC.removeAttribute("class") : zC.setAttribute("class", wC.toNode.join(" "))
        }
        var bC = ZC.map((function(CC) {
          return oZ(CC)
        })).join("\n");
        zC.setAttribute(pz, ""), zC.innerHTML = bC
      }
    };

    function pQ(CC) {
      CC()
    }

    function PQ(CC, zC) {
      var ZC = "function" === typeof zC ? zC : FQ;
      if (0 === CC.length) ZC();
      else {
        var QC = pQ;
        "async" === az.mutateApproach && (QC = IC.requestAnimationFrame || pQ), QC((function() {
          var zC = !0 === az.autoReplaceSvg ? SQ.replace : SQ[az.autoReplaceSvg] || SQ.replace,
            QC = qQ("mutate");
          CC.map(zC), QC(), ZC()
        }))
      }
    }
    var GQ = !1;

    function RQ() {
      GQ = !0
    }

    function AQ() {
      GQ = !1
    }
    var xQ = null;

    function JQ(CC) {
      if (vC && az.observeMutations) {
        var zC = CC.treeCallback,
          ZC = void 0 === zC ? FQ : zC,
          QC = CC.nodeCallback,
          wC = void 0 === QC ? FQ : QC,
          bC = CC.pseudoElementsCallback,
          nC = void 0 === bC ? FQ : bC,
          fC = CC.observeMutationsRoot,
          oC = void 0 === fC ? iC : fC;
        xQ = new vC((function(CC) {
          if (!GQ) {
            var zC = dZ();
            Lz(CC).forEach((function(CC) {
              if ("childList" === CC.type && CC.addedNodes.length > 0 && !WQ(CC.addedNodes[0]) && (az.searchPseudoElements && nC(CC.target), ZC(CC.target)), "attributes" === CC.type && CC.target.parentNode && az.searchPseudoElements && nC([CC.target], !0), "attributes" === CC.type && WQ(CC.target) && ~Xz.indexOf(CC.attributeName))
                if ("class" === CC.attributeName && function(CC) {
                    var zC = CC.getAttribute ? CC.getAttribute(Gz) : null,
                      ZC = CC.getAttribute ? CC.getAttribute(Rz) : null;
                    return zC && ZC
                  }(CC.target)) {
                  var QC = lZ(Uz(CC.target)),
                    bC = QC.prefix,
                    fC = QC.iconName;
                  CC.target.setAttribute(Gz, bC || zC), fC && CC.target.setAttribute(Rz, fC)
                } else(oC = CC.target) && oC.classList && oC.classList.contains && oC.classList.contains(az.replacementClass) && wC(CC.target);
              var oC
            }))
          }
        })), hC && xQ.observe(oC, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function IQ(CC) {
      var zC, ZC, QC = CC.getAttribute("data-prefix"),
        wC = CC.getAttribute("data-icon"),
        bC = void 0 !== CC.innerText ? CC.innerText.trim() : "",
        nC = lZ(Uz(CC));
      return nC.prefix || (nC.prefix = dZ()), QC && wC && (nC.prefix = QC, nC.iconName = wC), nC.iconName && nC.prefix || (nC.prefix && bC.length > 0 && (nC.iconName = (zC = nC.prefix, ZC = CC.innerText, (AZ[zC] || {})[ZC] || hZ(nC.prefix, WZ(CC.innerText)))), !nC.iconName && az.autoFetchSvg && CC.firstChild && CC.firstChild.nodeType === Node.TEXT_NODE && (nC.iconName = CC.firstChild.data)), nC
    }

    function iQ(CC) {
      var zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        ZC = IQ(CC),
        QC = ZC.iconName,
        wC = ZC.prefix,
        bC = ZC.rest,
        nC = function(CC) {
          return Lz(CC.attributes).reduce((function(CC, zC) {
            return "class" !== CC.name && "style" !== CC.name && (CC[zC.name] = zC.value), CC
          }), {})
        }(CC),
        fC = tZ("parseNodeAttributes", {}, CC),
        qC = zC.styleParser ? function(CC) {
          var zC = CC.getAttribute("style"),
            ZC = [];
          return zC && (ZC = zC.split(";").reduce((function(CC, zC) {
            var ZC = zC.split(":"),
              QC = ZC[0],
              wC = ZC.slice(1);
            return QC && wC.length > 0 && (CC[QC] = wC.join(":").trim()), CC
          }), {})), ZC
        }(CC) : [];
      return oC({
        iconName: QC,
        prefix: wC,
        transform: jz,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: bC,
          styles: qC,
          attributes: nC
        }
      }, fC)
    }
    var vQ = wZ.styles;

    function eQ(CC) {
      var zC = "nest" === az.autoReplaceSvg ? iQ(CC, {
        styleParser: !1
      }) : iQ(CC);
      return ~zC.extra.classes.indexOf(Ez) ? jZ("generateLayersText", CC, zC) : jZ("generateSvgReplacementMutation", CC, zC)
    }

    function hQ(CC) {
      var zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!hC) return Promise.resolve();
      var ZC = iC.documentElement.classList,
        QC = function(CC) {
          return ZC.add("".concat(Az, "-").concat(CC))
        },
        wC = function(CC) {
          return ZC.remove("".concat(Az, "-").concat(CC))
        },
        bC = az.autoFetchSvg ? [].concat(FC(Cz), FC(Fz)) : dC.concat(Object.keys(vQ));
      bC.includes("fa") || bC.push("fa");
      var nC = [".".concat(Ez, ":not([").concat(pz, "])")].concat(bC.map((function(CC) {
        return ".".concat(CC, ":not([").concat(pz, "])")
      }))).join(", ");
      if (0 === nC.length) return Promise.resolve();
      var fC = [];
      try {
        fC = Lz(CC.querySelectorAll(nC))
      } catch (WC) {}
      if (!(fC.length > 0)) return Promise.resolve();
      QC("pending"), wC("complete");
      var oC = qQ("onTree"),
        qC = fC.reduce((function(CC, zC) {
          try {
            var ZC = eQ(zC);
            ZC && CC.push(ZC)
          } catch (WC) {
            Iz || "MissingIcon" === WC.name && console.error(WC)
          }
          return CC
        }), []);
      return new Promise((function(CC, ZC) {
        Promise.all(qC).then((function(ZC) {
          PQ(ZC, (function() {
            QC("active"), QC("complete"), wC("pending"), "function" === typeof zC && zC(), oC(), CC()
          }))
        })).catch((function(CC) {
          oC(), ZC(CC)
        }))
      }))
    }

    function KQ(CC) {
      var zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      eQ(CC).then((function(CC) {
        CC && PQ([CC], zC)
      }))
    }
    var YQ = function(CC) {
        var zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZC = zC.transform,
          QC = void 0 === ZC ? jz : ZC,
          wC = zC.symbol,
          bC = void 0 !== wC && wC,
          nC = zC.mask,
          fC = void 0 === nC ? null : nC,
          qC = zC.maskId,
          FC = void 0 === qC ? null : qC,
          WC = zC.classes,
          NC = void 0 === WC ? [] : WC,
          MC = zC.attributes,
          gC = void 0 === MC ? {} : MC,
          SC = zC.styles,
          pC = void 0 === SC ? {} : SC;
        if (CC) {
          var PC = CC.prefix,
            GC = CC.iconName,
            RC = CC.icon;
          return kZ(oC({
            type: "icon"
          }, CC), (function() {
            return DZ("beforeDOMElementCreation", {
              iconDefinition: CC,
              params: zC
            }), VZ({
              icons: {
                main: ZQ(RC),
                mask: fC ? ZQ(fC.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: PC,
              iconName: GC,
              transform: oC(oC({}, jz), QC),
              symbol: bC,
              maskId: FC,
              extra: {
                attributes: gC,
                styles: pC,
                classes: NC
              }
            })
          }))
        }
      },
      dQ = {
        mixout: function() {
          return {
            icon: (CC = YQ, function(zC) {
              var ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                QC = (zC || {}).icon ? zC : yZ(zC || {}),
                wC = ZC.mask;
              return wC && (wC = (wC || {}).icon ? wC : yZ(wC || {})), CC(QC, oC(oC({}, ZC), {}, {
                mask: wC
              }))
            })
          };
          var CC
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(CC) {
              return CC.treeCallback = hQ, CC.nodeCallback = KQ, CC
            }
          }
        },
        provides: function(CC) {
          CC.i2svg = function(CC) {
            var zC = CC.node,
              ZC = void 0 === zC ? iC : zC,
              QC = CC.callback;
            return hQ(ZC, void 0 === QC ? function() {} : QC)
          }, CC.generateSvgReplacementMutation = function(CC, zC) {
            var ZC = zC.iconName,
              QC = zC.prefix,
              wC = zC.transform,
              bC = zC.symbol,
              nC = zC.mask,
              fC = zC.maskId,
              oC = zC.extra;
            return new Promise((function(zC, FC) {
              Promise.all([wQ(ZC, QC), nC.iconName ? wQ(nC.iconName, nC.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(nC) {
                var FC = qC(nC, 2),
                  WC = FC[0],
                  NC = FC[1];
                zC([CC, VZ({
                  icons: {
                    main: WC,
                    mask: NC
                  },
                  prefix: QC,
                  iconName: ZC,
                  transform: wC,
                  symbol: bC,
                  maskId: fC,
                  extra: oC,
                  watchable: !0
                })])
              })).catch(FC)
            }))
          }, CC.generateAbstractIcon = function(CC) {
            var zC, ZC = CC.children,
              QC = CC.attributes,
              wC = CC.main,
              bC = CC.transform,
              nC = Oz(CC.styles);
            return nC.length > 0 && (QC.style = nC), kz(bC) && (zC = jZ("generateAbstractTransformGrouping", {
              main: wC,
              transform: bC,
              containerWidth: wC.width,
              iconWidth: wC.width
            })), ZC.push(zC || wC.icon), {
              children: ZC,
              attributes: QC
            }
          }
        }
      },
      mQ = {
        mixout: function() {
          return {
            layer: function(CC) {
              var zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ZC = zC.classes,
                QC = void 0 === ZC ? [] : ZC;
              return kZ({
                type: "layer"
              }, (function() {
                DZ("beforeDOMElementCreation", {
                  assembler: CC,
                  params: zC
                });
                var ZC = [];
                return CC((function(CC) {
                  Array.isArray(CC) ? CC.map((function(CC) {
                    ZC = ZC.concat(CC.abstract)
                  })) : ZC = ZC.concat(CC.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(az.cssPrefix, "-layers")].concat(FC(QC)).join(" ")
                  },
                  children: ZC
                }]
              }))
            }
          }
        }
      },
      HQ = {
        mixout: function() {
          return {
            counter: function(CC) {
              var zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ZC = zC.title,
                QC = void 0 === ZC ? null : ZC,
                wC = zC.classes,
                bC = void 0 === wC ? [] : wC,
                nC = zC.attributes,
                fC = void 0 === nC ? {} : nC,
                qC = zC.styles,
                WC = void 0 === qC ? {} : qC;
              return kZ({
                type: "counter",
                content: CC
              }, (function() {
                return DZ("beforeDOMElementCreation", {
                    content: CC,
                    params: zC
                  }),
                  function(CC) {
                    var zC = CC.content,
                      ZC = CC.extra,
                      QC = oC(oC({}, ZC.attributes), {}, {
                        class: ZC.classes.join(" ")
                      }),
                      wC = Oz(ZC.styles);
                    wC.length > 0 && (QC.style = wC);
                    var bC = [];
                    return bC.push({
                      tag: "span",
                      attributes: QC,
                      children: [zC]
                    }), bC
                  }({
                    content: CC.toString(),
                    title: QC,
                    extra: {
                      attributes: fC,
                      styles: WC,
                      classes: ["".concat(az.cssPrefix, "-layers-counter")].concat(FC(bC))
                    }
                  })
              }))
            }
          }
        }
      },
      EQ = {
        mixout: function() {
          return {
            text: function(CC) {
              var zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ZC = zC.transform,
                QC = void 0 === ZC ? jz : ZC,
                wC = zC.classes,
                bC = void 0 === wC ? [] : wC,
                nC = zC.attributes,
                fC = void 0 === nC ? {} : nC,
                qC = zC.styles,
                WC = void 0 === qC ? {} : qC;
              return kZ({
                type: "text",
                content: CC
              }, (function() {
                return DZ("beforeDOMElementCreation", {
                  content: CC,
                  params: zC
                }), CQ({
                  content: CC,
                  transform: oC(oC({}, jz), QC),
                  extra: {
                    attributes: fC,
                    styles: WC,
                    classes: ["".concat(az.cssPrefix, "-layers-text")].concat(FC(bC))
                  }
                })
              }))
            }
          }
        },
        provides: function(CC) {
          CC.generateLayersText = function(CC, zC) {
            var ZC = zC.transform,
              QC = zC.extra,
              wC = null,
              bC = null;
            if (KC) {
              var nC = parseInt(getComputedStyle(CC).fontSize, 10),
                fC = CC.getBoundingClientRect();
              wC = fC.width / nC, bC = fC.height / nC
            }
            return Promise.resolve([CC, CQ({
              content: CC.innerHTML,
              width: wC,
              height: bC,
              transform: ZC,
              extra: QC,
              watchable: !0
            })])
          }
        }
      },
      lQ = new RegExp('"', "ug"),
      XQ = [1105920, 1112319],
      cQ = oC(oC(oC(oC({}, {
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
      uQ = Object.keys(cQ).reduce((function(CC, zC) {
        return CC[zC.toLowerCase()] = cQ[zC], CC
      }), {}),
      rQ = Object.keys(uQ).reduce((function(CC, zC) {
        var ZC = uQ[zC];
        return CC[zC] = ZC[900] || FC(Object.entries(ZC))[0][1], CC
      }), {});

    function sQ(CC, zC) {
      var ZC = "".concat("data-fa-pseudo-element-pending").concat(zC.replace(":", "-"));
      return new Promise((function(QC, wC) {
        if (null !== CC.getAttribute(ZC)) return QC();
        var bC = Lz(CC.children).filter((function(CC) {
            return CC.getAttribute(Pz) === zC
          }))[0],
          nC = IC.getComputedStyle(CC, zC),
          fC = nC.getPropertyValue("font-family"),
          qC = fC.match(lz),
          WC = nC.getPropertyValue("font-weight"),
          NC = nC.getPropertyValue("content");
        if (bC && !qC) return CC.removeChild(bC), QC();
        if (qC && "none" !== NC && "" !== NC) {
          var MC = nC.getPropertyValue("content"),
            gC = function(CC, zC) {
              var ZC = CC.replace(/^['"]|['"]$/g, "").toLowerCase(),
                QC = parseInt(zC),
                wC = isNaN(QC) ? "normal" : QC;
              return (uQ[ZC] || {})[wC] || rQ[ZC]
            }(fC, WC),
            SC = function(CC) {
              return WZ(FC(CC.replace(lQ, ""))[0] || "")
            }(MC),
            pC = qC[0].startsWith("FontAwesome"),
            PC = function(CC) {
              var zC = CC.getPropertyValue("font-feature-settings").includes("ss01"),
                ZC = CC.getPropertyValue("content").replace(lQ, ""),
                QC = ZC.codePointAt(0),
                wC = QC >= XQ[0] && QC <= XQ[1],
                bC = 2 === ZC.length && ZC[0] === ZC[1];
              return wC || bC || zC
            }(nC),
            GC = hZ(gC, SC),
            RC = GC;
          if (pC) {
            var AC = function(CC) {
              var zC = JZ[CC],
                ZC = hZ("fas", CC);
              return zC || (ZC ? {
                prefix: "fas",
                iconName: ZC
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(SC);
            AC.iconName && AC.prefix && (GC = AC.iconName, gC = AC.prefix)
          }
          if (!GC || PC || bC && bC.getAttribute(Gz) === gC && bC.getAttribute(Rz) === RC) QC();
          else {
            CC.setAttribute(ZC, RC), bC && CC.removeChild(bC);
            var xC = {
                iconName: null,
                prefix: null,
                transform: jz,
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
              JC = xC.extra;
            JC.attributes[Pz] = zC, wQ(GC, gC).then((function(wC) {
              var bC = VZ(oC(oC({}, xC), {}, {
                  icons: {
                    main: wC,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: gC,
                  iconName: RC,
                  extra: JC,
                  watchable: !0
                })),
                nC = iC.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === zC ? CC.insertBefore(nC, CC.firstChild) : CC.appendChild(nC), nC.outerHTML = bC.map((function(CC) {
                return oZ(CC)
              })).join("\n"), CC.removeAttribute(ZC), QC()
            })).catch(wC)
          }
        } else QC()
      }))
    }

    function TQ(CC) {
      return Promise.all([sQ(CC, "::before"), sQ(CC, "::after")])
    }

    function aQ(CC) {
      return CC.parentNode !== document.head && !~xz.indexOf(CC.tagName.toUpperCase()) && !CC.getAttribute(Pz) && (!CC.parentNode || "svg" !== CC.parentNode.tagName)
    }
    var tQ = function(CC) {
        return !!CC && Jz.some((function(zC) {
          return CC.includes(zC)
        }))
      },
      DQ = function(CC) {
        if (!CC) return [];
        var zC = new Set,
          ZC = CC.split(/,(?![^()]*\))/).map((function(CC) {
            return CC.trim()
          }));
        ZC = ZC.flatMap((function(CC) {
          return CC.includes("(") ? CC : CC.split(",").map((function(CC) {
            return CC.trim()
          }))
        }));
        var QC, wC = bC(ZC);
        try {
          for (wC.s(); !(QC = wC.n()).done;) {
            var nC = QC.value;
            if (tQ(nC)) {
              var fC = Jz.reduce((function(CC, zC) {
                return CC.replace(zC, "")
              }), nC);
              "" !== fC && "*" !== fC && zC.add(fC)
            }
          }
        } catch (oC) {
          wC.e(oC)
        } finally {
          wC.f()
        }
        return zC
      };

    function jQ(CC) {
      if (hC) {
        var zC;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) zC = CC;
        else if (az.searchPseudoElementsFullScan) zC = CC.querySelectorAll("*");
        else {
          var ZC, QC = new Set,
            wC = bC(document.styleSheets);
          try {
            for (wC.s(); !(ZC = wC.n()).done;) {
              var nC = ZC.value;
              try {
                var fC, oC = bC(nC.cssRules);
                try {
                  for (oC.s(); !(fC = oC.n()).done;) {
                    var qC, FC = fC.value,
                      WC = bC(DQ(FC.selectorText));
                    try {
                      for (WC.s(); !(qC = WC.n()).done;) {
                        var NC = qC.value;
                        QC.add(NC)
                      }
                    } catch (gC) {
                      WC.e(gC)
                    } finally {
                      WC.f()
                    }
                  }
                } catch (gC) {
                  oC.e(gC)
                } finally {
                  oC.f()
                }
              } catch (SC) {
                az.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(nC.href, " (").concat(SC.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (gC) {
            wC.e(gC)
          } finally {
            wC.f()
          }
          if (!QC.size) return;
          var MC = Array.from(QC).join(", ");
          try {
            zC = CC.querySelectorAll(MC)
          } catch (pC) {}
        }
        return new Promise((function(CC, ZC) {
          var QC = Lz(zC).filter(aQ).map(TQ),
            wC = qQ("searchPseudoElements");
          RQ(), Promise.all(QC).then((function() {
            wC(), AQ(), CC()
          })).catch((function() {
            wC(), AQ(), ZC()
          }))
        }))
      }
    }
    var yQ = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(CC) {
              return CC.pseudoElementsCallback = jQ, CC
            }
          }
        },
        provides: function(CC) {
          CC.pseudoElements2svg = function(CC) {
            var zC = CC.node,
              ZC = void 0 === zC ? iC : zC;
            az.searchPseudoElements && jQ(ZC)
          }
        }
      },
      LQ = !1,
      UQ = function(CC) {
        return CC.toLowerCase().split(" ").reduce((function(CC, zC) {
          var ZC = zC.toLowerCase().split("-"),
            QC = ZC[0],
            wC = ZC.slice(1).join("-");
          if (QC && "h" === wC) return CC.flipX = !0, CC;
          if (QC && "v" === wC) return CC.flipY = !0, CC;
          if (wC = parseFloat(wC), isNaN(wC)) return CC;
          switch (QC) {
            case "grow":
              CC.size = CC.size + wC;
              break;
            case "shrink":
              CC.size = CC.size - wC;
              break;
            case "left":
              CC.x = CC.x - wC;
              break;
            case "right":
              CC.x = CC.x + wC;
              break;
            case "up":
              CC.y = CC.y - wC;
              break;
            case "down":
              CC.y = CC.y + wC;
              break;
            case "rotate":
              CC.rotate = CC.rotate + wC
          }
          return CC
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      BQ = {
        mixout: function() {
          return {
            parse: {
              transform: function(CC) {
                return UQ(CC)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(CC, zC) {
              var ZC = zC.getAttribute("data-fa-transform");
              return ZC && (CC.transform = UQ(ZC)), CC
            }
          }
        },
        provides: function(CC) {
          CC.generateAbstractTransformGrouping = function(CC) {
            var zC = CC.main,
              ZC = CC.transform,
              QC = CC.containerWidth,
              wC = CC.iconWidth,
              bC = {
                transform: "translate(".concat(QC / 2, " 256)")
              },
              nC = "translate(".concat(32 * ZC.x, ", ").concat(32 * ZC.y, ") "),
              fC = "scale(".concat(ZC.size / 16 * (ZC.flipX ? -1 : 1), ", ").concat(ZC.size / 16 * (ZC.flipY ? -1 : 1), ") "),
              qC = "rotate(".concat(ZC.rotate, " 0 0)"),
              FC = {
                outer: bC,
                inner: {
                  transform: "".concat(nC, " ").concat(fC, " ").concat(qC)
                },
                path: {
                  transform: "translate(".concat(wC / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: oC({}, FC.outer),
              children: [{
                tag: "g",
                attributes: oC({}, FC.inner),
                children: [{
                  tag: zC.icon.tag,
                  children: zC.icon.children,
                  attributes: oC(oC({}, zC.icon.attributes), FC.path)
                }]
              }]
            }
          }
        }
      },
      OQ = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function kQ(CC) {
      var zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return CC.attributes && (CC.attributes.fill || zC) && (CC.attributes.fill = "black"), CC
    }
    var VQ = {
        hooks: function() {
          return {
            parseNodeAttributes: function(CC, zC) {
              var ZC = zC.getAttribute("data-fa-mask"),
                QC = ZC ? lZ(ZC.split(" ").map((function(CC) {
                  return CC.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return QC.prefix || (QC.prefix = dZ()), CC.mask = QC, CC.maskId = zC.getAttribute("data-fa-mask-id"), CC
            }
          }
        },
        provides: function(CC) {
          CC.generateAbstractMask = function(CC) {
            var zC, ZC = CC.children,
              QC = CC.attributes,
              wC = CC.main,
              bC = CC.mask,
              nC = CC.maskId,
              fC = CC.transform,
              qC = wC.width,
              FC = wC.icon,
              WC = bC.width,
              NC = bC.icon,
              MC = function(CC) {
                var zC = CC.transform,
                  ZC = CC.containerWidth,
                  QC = CC.iconWidth,
                  wC = {
                    transform: "translate(".concat(ZC / 2, " 256)")
                  },
                  bC = "translate(".concat(32 * zC.x, ", ").concat(32 * zC.y, ") "),
                  nC = "scale(".concat(zC.size / 16 * (zC.flipX ? -1 : 1), ", ").concat(zC.size / 16 * (zC.flipY ? -1 : 1), ") "),
                  fC = "rotate(".concat(zC.rotate, " 0 0)");
                return {
                  outer: wC,
                  inner: {
                    transform: "".concat(bC, " ").concat(nC, " ").concat(fC)
                  },
                  path: {
                    transform: "translate(".concat(QC / 2 * -1, " -256)")
                  }
                }
              }({
                transform: fC,
                containerWidth: WC,
                iconWidth: qC
              }),
              gC = {
                tag: "rect",
                attributes: oC(oC({}, OQ), {}, {
                  fill: "white"
                })
              },
              SC = FC.children ? {
                children: FC.children.map(kQ)
              } : {},
              pC = {
                tag: "g",
                attributes: oC({}, MC.inner),
                children: [kQ(oC({
                  tag: FC.tag,
                  attributes: oC(oC({}, FC.attributes), MC.path)
                }, SC))]
              },
              PC = {
                tag: "g",
                attributes: oC({}, MC.outer),
                children: [pC]
              },
              GC = "mask-".concat(nC || yz()),
              RC = "clip-".concat(nC || yz()),
              AC = {
                tag: "mask",
                attributes: oC(oC({}, OQ), {}, {
                  id: GC,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [gC, PC]
              },
              xC = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: RC
                  },
                  children: (zC = NC, "g" === zC.tag ? zC.children : [zC])
                }, AC]
              };
            return ZC.push(xC, {
              tag: "rect",
              attributes: oC({
                fill: "currentColor",
                "clip-path": "url(#".concat(RC, ")"),
                mask: "url(#".concat(GC, ")")
              }, OQ)
            }), {
              children: ZC,
              attributes: QC
            }
          }
        }
      },
      Cw = {
        provides: function(CC) {
          var zC = !1;
          IC.matchMedia && (zC = IC.matchMedia("(prefers-reduced-motion: reduce)").matches), CC.missingIconAbstract = function() {
            var CC = [],
              ZC = {
                fill: "currentColor"
              },
              QC = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            CC.push({
              tag: "path",
              attributes: oC(oC({}, ZC), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var wC = oC(oC({}, QC), {}, {
                attributeName: "opacity"
              }),
              bC = {
                tag: "circle",
                attributes: oC(oC({}, ZC), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return zC || bC.children.push({
              tag: "animate",
              attributes: oC(oC({}, QC), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: oC(oC({}, wC), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), CC.push(bC), CC.push({
              tag: "path",
              attributes: oC(oC({}, ZC), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: zC ? [] : [{
                tag: "animate",
                attributes: oC(oC({}, wC), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), zC || CC.push({
              tag: "path",
              attributes: oC(oC({}, ZC), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: oC(oC({}, wC), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: CC
            }
          }
        }
      };
    ! function(CC, zC) {
      var ZC = zC.mixoutsTo;
      rZ = CC, sZ = {}, Object.keys(TZ).forEach((function(CC) {
        -1 === aZ.indexOf(CC) && delete TZ[CC]
      })), rZ.forEach((function(CC) {
        var zC = CC.mixout ? CC.mixout() : {};
        if (Object.keys(zC).forEach((function(CC) {
            "function" === typeof zC[CC] && (ZC[CC] = zC[CC]), "object" === NC(zC[CC]) && Object.keys(zC[CC]).forEach((function(QC) {
              ZC[CC] || (ZC[CC] = {}), ZC[CC][QC] = zC[CC][QC]
            }))
          })), CC.hooks) {
          var QC = CC.hooks();
          Object.keys(QC).forEach((function(CC) {
            sZ[CC] || (sZ[CC] = []), sZ[CC].push(QC[CC])
          }))
        }
        CC.provides && CC.provides(TZ)
      }))
    }([ZZ, dQ, mQ, HQ, EQ, yQ, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              RQ(), LQ = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            JQ(tZ("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            xQ && xQ.disconnect()
          },
          watch: function(CC) {
            var zC = CC.observeMutationsRoot;
            LQ ? AQ() : JQ(tZ("mutationObserverCallbacks", {
              observeMutationsRoot: zC
            }))
          }
        }
      }
    }, BQ, VQ, Cw, {
      hooks: function() {
        return {
          parseNodeAttributes: function(CC, zC) {
            var ZC = zC.getAttribute("data-fa-symbol"),
              QC = null !== ZC && ("" === ZC || ZC);
            return CC.symbol = QC, CC
          }
        }
      }
    }], {
      mixoutsTo: BZ
    });
    var zw = BZ.noAuto,
      Zw = BZ.config,
      Qw = BZ.library,
      ww = BZ.dom,
      bw = BZ.parse,
      nw = BZ.findIconDefinition,
      fw = BZ.toHtml,
      ow = BZ.icon,
      qw = BZ.layer,
      Fw = BZ.text,
      Ww = BZ.counter
  },
  6685: CC => {
    CC.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);