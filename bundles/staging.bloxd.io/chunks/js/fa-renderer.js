/*! For license information please see symm5.fa-renderer.e54f6fc9.chunk.js.LICENSE.txt */
export const id = 30;
export const ids = [30];
export const modules = {
  6031: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      FontAwesomeIcon: () => KJ
    });
    var FJ = ZJ(6024),
      UJ = ZJ(4367),
      eJ = ZJ.n(UJ),
      XJ = ZJ(47);

    function AJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function qJ(JJ, cJ, ZJ) {
      return (cJ = function(JJ) {
        var cJ = function(JJ, cJ) {
          if ("object" != typeof JJ || !JJ) return JJ;
          var ZJ = JJ[Symbol.toPrimitive];
          if (void 0 !== ZJ) {
            var FJ = ZJ.call(JJ, cJ || "default");
            if ("object" != typeof FJ) return FJ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === cJ ? String : Number)(JJ)
        }(JJ, "string");
        return "symbol" == typeof cJ ? cJ : cJ + ""
      }(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function jJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function YJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? jJ(Object(ZJ), !0).forEach((function(cJ) {
          qJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : jJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function hJ(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        var ZJ = null == JJ ? null : "undefined" != typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
        if (null != ZJ) {
          var FJ, UJ, eJ, XJ, AJ = [],
            qJ = !0,
            jJ = !1;
          try {
            if (eJ = (ZJ = ZJ.call(JJ)).next, 0 === cJ) {
              if (Object(ZJ) !== ZJ) return;
              qJ = !1
            } else
              for (; !(qJ = (FJ = eJ.call(ZJ)).done) && (AJ.push(FJ.value), AJ.length !== cJ); qJ = !0);
          } catch (JJ) {
            jJ = !0, UJ = JJ
          } finally {
            try {
              if (!qJ && null != ZJ.return && (XJ = ZJ.return(), Object(XJ) !== XJ)) return
            } finally {
              if (jJ) throw UJ
            }
          }
          return AJ
        }
      }(JJ, cJ) || nJ(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function DJ(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return AJ(JJ)
      }(JJ) || function(JJ) {
        if ("undefined" != typeof Symbol && null != JJ[Symbol.iterator] || null != JJ["@@iterator"]) return Array.from(JJ)
      }(JJ) || nJ(JJ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sJ(JJ) {
      return sJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, sJ(JJ)
    }

    function nJ(JJ, cJ) {
      if (JJ) {
        if ("string" == typeof JJ) return AJ(JJ, cJ);
        var ZJ = {}.toString.call(JJ).slice(8, -1);
        return "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name), "Map" === ZJ || "Set" === ZJ ? Array.from(JJ) : "Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ) ? AJ(JJ, cJ) : void 0
      }
    }
    var GJ;
    try {
      var fJ = ZJ(6038);
      GJ = fJ.version
    } catch (SJ) {
      GJ = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function xJ(JJ) {
      var cJ = JJ.beat,
        ZJ = JJ.fade,
        FJ = JJ.beatFade,
        UJ = JJ.bounce,
        eJ = JJ.shake,
        XJ = JJ.flash,
        AJ = JJ.spin,
        jJ = JJ.spinPulse,
        YJ = JJ.spinReverse,
        DJ = JJ.pulse,
        sJ = JJ.fixedWidth,
        nJ = JJ.inverse,
        fJ = JJ.border,
        xJ = JJ.listItem,
        rJ = JJ.flip,
        vJ = JJ.size,
        mJ = JJ.rotation,
        QJ = JJ.pull,
        EJ = JJ.swapOpacity,
        VJ = JJ.rotateBy,
        KJ = JJ.widthAuto,
        yJ = function(JJ, cJ) {
          for (var ZJ = hJ(JJ.split("-"), 2), FJ = ZJ[0], UJ = ZJ[1], eJ = hJ(cJ.split("-"), 2), XJ = eJ[0], AJ = eJ[1], qJ = FJ.split("."), jJ = XJ.split("."), YJ = 0; YJ < Math.max(qJ.length, jJ.length); YJ++) {
            var DJ = qJ[YJ] || "0",
              sJ = jJ[YJ] || "0",
              nJ = parseInt(DJ, 10),
              GJ = parseInt(sJ, 10);
            if (nJ !== GJ) return nJ > GJ
          }
          for (var fJ = 0; fJ < Math.max(qJ.length, jJ.length); fJ++) {
            var xJ = qJ[fJ] || "0",
              rJ = jJ[fJ] || "0";
            if (xJ !== rJ && xJ.length !== rJ.length) return xJ.length < rJ.length
          }
          return !(UJ && !AJ)
        }(GJ, "7.0.0"),
        SJ = qJ(qJ(qJ(qJ(qJ(qJ({
          "fa-beat": cJ,
          "fa-fade": ZJ,
          "fa-beat-fade": FJ,
          "fa-bounce": UJ,
          "fa-shake": eJ,
          "fa-flash": XJ,
          "fa-spin": AJ,
          "fa-spin-reverse": YJ,
          "fa-spin-pulse": jJ,
          "fa-pulse": DJ,
          "fa-fw": sJ,
          "fa-inverse": nJ,
          "fa-border": fJ,
          "fa-li": xJ,
          "fa-flip": !0 === rJ,
          "fa-flip-horizontal": "horizontal" === rJ || "both" === rJ,
          "fa-flip-vertical": "vertical" === rJ || "both" === rJ
        }, "fa-".concat(vJ), "undefined" !== typeof vJ && null !== vJ), "fa-rotate-".concat(mJ), "undefined" !== typeof mJ && null !== mJ && 0 !== mJ), "fa-pull-".concat(QJ), "undefined" !== typeof QJ && null !== QJ), "fa-swap-opacity", EJ), "fa-rotate-by", yJ && VJ), "fa-width-auto", yJ && KJ);
      return Object.keys(SJ).map((function(JJ) {
        return SJ[JJ] ? JJ : null
      })).filter((function(JJ) {
        return JJ
      }))
    }

    function rJ(JJ) {
      return cJ = JJ, (cJ -= 0) === cJ ? JJ : (JJ = JJ.replace(/[\-_\s]+(.)?/g, (function(JJ, cJ) {
        return cJ ? cJ.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + JJ.substr(1);
      var cJ
    }
    var vJ = ["style"];
    var mJ = !1;
    try {
      mJ = !0
    } catch (SJ) {}

    function QJ(JJ) {
      return JJ && "object" === sJ(JJ) && JJ.prefix && JJ.iconName && JJ.icon ? JJ : FJ.parse.icon ? FJ.parse.icon(JJ) : null === JJ ? null : JJ && "object" === sJ(JJ) && JJ.prefix && JJ.iconName ? JJ : Array.isArray(JJ) && 2 === JJ.length ? {
        prefix: JJ[0],
        iconName: JJ[1]
      } : "string" === typeof JJ ? {
        prefix: "fas",
        iconName: JJ
      } : void 0
    }

    function EJ(JJ, cJ) {
      return Array.isArray(cJ) && cJ.length > 0 || !Array.isArray(cJ) && cJ ? qJ({}, JJ, cJ) : {}
    }
    var VJ = {
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
      KJ = XJ.forwardRef((function(JJ, cJ) {
        var ZJ = YJ(YJ({}, VJ), JJ),
          UJ = ZJ.icon,
          eJ = ZJ.mask,
          XJ = ZJ.symbol,
          AJ = ZJ.className,
          qJ = ZJ.title,
          jJ = ZJ.titleId,
          hJ = ZJ.maskId,
          sJ = QJ(UJ),
          nJ = EJ("classes", [].concat(DJ(xJ(ZJ)), DJ((AJ || "").split(" ")))),
          GJ = EJ("transform", "string" === typeof ZJ.transform ? FJ.parse.transform(ZJ.transform) : ZJ.transform),
          fJ = EJ("mask", QJ(eJ)),
          rJ = (0, FJ.icon)(sJ, YJ(YJ(YJ(YJ({}, nJ), GJ), fJ), {}, {
            symbol: XJ,
            title: qJ,
            titleId: jJ,
            maskId: hJ
          }));
        if (!rJ) return function() {
          var JJ;
          !mJ && console && "function" === typeof console.error && (JJ = console).error.apply(JJ, arguments)
        }("Could not find icon", sJ), null;
        var vJ = rJ.abstract,
          KJ = {
            ref: cJ
          };
        return Object.keys(ZJ).forEach((function(JJ) {
          VJ.hasOwnProperty(JJ) || (KJ[JJ] = ZJ[JJ])
        })), yJ(vJ[0], KJ)
      }));
    KJ.displayName = "FontAwesomeIcon", KJ.propTypes = {
      beat: eJ().bool,
      border: eJ().bool,
      beatFade: eJ().bool,
      bounce: eJ().bool,
      className: eJ().string,
      fade: eJ().bool,
      flash: eJ().bool,
      mask: eJ().oneOfType([eJ().object, eJ().array, eJ().string]),
      maskId: eJ().string,
      fixedWidth: eJ().bool,
      inverse: eJ().bool,
      flip: eJ().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: eJ().oneOfType([eJ().object, eJ().array, eJ().string]),
      listItem: eJ().bool,
      pull: eJ().oneOf(["right", "left"]),
      pulse: eJ().bool,
      rotation: eJ().oneOf([0, 90, 180, 270]),
      rotateBy: eJ().bool,
      shake: eJ().bool,
      size: eJ().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: eJ().bool,
      spinPulse: eJ().bool,
      spinReverse: eJ().bool,
      symbol: eJ().oneOfType([eJ().bool, eJ().string]),
      title: eJ().string,
      titleId: eJ().string,
      transform: eJ().oneOfType([eJ().string, eJ().object]),
      swapOpacity: eJ().bool,
      widthAuto: eJ().bool
    };
    var yJ = function JJ(cJ, ZJ) {
      var FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof ZJ) return ZJ;
      var UJ = (ZJ.children || []).map((function(ZJ) {
          return JJ(cJ, ZJ)
        })),
        eJ = Object.keys(ZJ.attributes || {}).reduce((function(JJ, cJ) {
          var FJ = ZJ.attributes[cJ];
          switch (cJ) {
            case "class":
              JJ.attrs.className = FJ, delete ZJ.attributes.class;
              break;
            case "style":
              JJ.attrs.style = FJ.split(";").map((function(JJ) {
                return JJ.trim()
              })).filter((function(JJ) {
                return JJ
              })).reduce((function(JJ, cJ) {
                var ZJ, FJ = cJ.indexOf(":"),
                  UJ = rJ(cJ.slice(0, FJ)),
                  eJ = cJ.slice(FJ + 1).trim();
                return UJ.startsWith("webkit") ? JJ[(ZJ = UJ, ZJ.charAt(0).toUpperCase() + ZJ.slice(1))] = eJ : JJ[UJ] = eJ, JJ
              }), {});
              break;
            default:
              0 === cJ.indexOf("aria-") || 0 === cJ.indexOf("data-") ? JJ.attrs[cJ.toLowerCase()] = FJ : JJ.attrs[rJ(cJ)] = FJ
          }
          return JJ
        }), {
          attrs: {}
        }),
        XJ = FJ.style,
        AJ = void 0 === XJ ? {} : XJ,
        qJ = function(JJ, cJ) {
          if (null == JJ) return {};
          var ZJ, FJ, UJ = function(JJ, cJ) {
            if (null == JJ) return {};
            var ZJ = {};
            for (var FJ in JJ)
              if ({}.hasOwnProperty.call(JJ, FJ)) {
                if (-1 !== cJ.indexOf(FJ)) continue;
                ZJ[FJ] = JJ[FJ]
              } return ZJ
          }(JJ, cJ);
          if (Object.getOwnPropertySymbols) {
            var eJ = Object.getOwnPropertySymbols(JJ);
            for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], -1 === cJ.indexOf(ZJ) && {}.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
          }
          return UJ
        }(FJ, vJ);
      return eJ.attrs.style = YJ(YJ({}, eJ.attrs.style), AJ), cJ.apply(void 0, [ZJ.tag, YJ(YJ({}, eJ.attrs), qJ)].concat(DJ(UJ)))
    }.bind(null, XJ.createElement)
  },
  4375: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4383);

    function UJ() {}

    function eJ() {}
    eJ.resetWarningCache = UJ, JJ.exports = function() {
      function JJ(JJ, cJ, ZJ, UJ, eJ, XJ) {
        if (XJ !== FJ) {
          var AJ = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw AJ.name = "Invariant Violation", AJ
        }
      }

      function cJ() {
        return JJ
      }
      JJ.isRequired = JJ;
      var ZJ = {
        array: JJ,
        bigint: JJ,
        bool: JJ,
        func: JJ,
        number: JJ,
        object: JJ,
        string: JJ,
        symbol: JJ,
        any: JJ,
        arrayOf: cJ,
        element: JJ,
        elementType: JJ,
        instanceOf: cJ,
        node: JJ,
        objectOf: cJ,
        oneOf: cJ,
        oneOfType: cJ,
        shape: cJ,
        exact: cJ,
        checkPropTypes: eJ,
        resetWarningCache: UJ
      };
      return ZJ.PropTypes = ZJ, ZJ
    }
  },
  4367: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ(4375)()
  },
  4383: JJ => {
    JJ.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6024: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function UJ(JJ, cJ) {
      for (var ZJ = 0; ZJ < cJ.length; ZJ++) {
        var FJ = cJ[ZJ];
        FJ.enumerable = FJ.enumerable || !1, FJ.configurable = !0, "value" in FJ && (FJ.writable = !0), Object.defineProperty(JJ, hJ(FJ.key), FJ)
      }
    }

    function eJ(JJ, cJ) {
      var ZJ = "undefined" != typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
      if (!ZJ) {
        if (Array.isArray(JJ) || (ZJ = sJ(JJ)) || cJ && JJ && "number" == typeof JJ.length) {
          ZJ && (JJ = ZJ);
          var FJ = 0,
            UJ = function() {};
          return {
            s: UJ,
            n: function() {
              return FJ >= JJ.length ? {
                done: !0
              } : {
                done: !1,
                value: JJ[FJ++]
              }
            },
            e: function(JJ) {
              throw JJ
            },
            f: UJ
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var eJ, XJ = !0,
        AJ = !1;
      return {
        s: function() {
          ZJ = ZJ.call(JJ)
        },
        n: function() {
          var JJ = ZJ.next();
          return XJ = JJ.done, JJ
        },
        e: function(JJ) {
          AJ = !0, eJ = JJ
        },
        f: function() {
          try {
            XJ || null == ZJ.return || ZJ.return()
          } finally {
            if (AJ) throw eJ
          }
        }
      }
    }

    function XJ(JJ, cJ, ZJ) {
      return (cJ = hJ(cJ)) in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function AJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function qJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? AJ(Object(ZJ), !0).forEach((function(cJ) {
          XJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : AJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function jJ(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        var ZJ = null == JJ ? null : "undefined" != typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
        if (null != ZJ) {
          var FJ, UJ, eJ, XJ, AJ = [],
            qJ = !0,
            jJ = !1;
          try {
            if (eJ = (ZJ = ZJ.call(JJ)).next, 0 === cJ) {
              if (Object(ZJ) !== ZJ) return;
              qJ = !1
            } else
              for (; !(qJ = (FJ = eJ.call(ZJ)).done) && (AJ.push(FJ.value), AJ.length !== cJ); qJ = !0);
          } catch (JJ) {
            jJ = !0, UJ = JJ
          } finally {
            try {
              if (!qJ && null != ZJ.return && (XJ = ZJ.return(), Object(XJ) !== XJ)) return
            } finally {
              if (jJ) throw UJ
            }
          }
          return AJ
        }
      }(JJ, cJ) || sJ(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YJ(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return FJ(JJ)
      }(JJ) || function(JJ) {
        if ("undefined" != typeof Symbol && null != JJ[Symbol.iterator] || null != JJ["@@iterator"]) return Array.from(JJ)
      }(JJ) || sJ(JJ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hJ(JJ) {
      var cJ = function(JJ, cJ) {
        if ("object" != typeof JJ || !JJ) return JJ;
        var ZJ = JJ[Symbol.toPrimitive];
        if (void 0 !== ZJ) {
          var FJ = ZJ.call(JJ, cJ || "default");
          if ("object" != typeof FJ) return FJ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === cJ ? String : Number)(JJ)
      }(JJ, "string");
      return "symbol" == typeof cJ ? cJ : cJ + ""
    }

    function DJ(JJ) {
      return DJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(JJ) {
        return typeof JJ
      } : function(JJ) {
        return JJ && "function" == typeof Symbol && JJ.constructor === Symbol && JJ !== Symbol.prototype ? "symbol" : typeof JJ
      }, DJ(JJ)
    }

    function sJ(JJ, cJ) {
      if (JJ) {
        if ("string" == typeof JJ) return FJ(JJ, cJ);
        var ZJ = {}.toString.call(JJ).slice(8, -1);
        return "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name), "Map" === ZJ || "Set" === ZJ ? Array.from(JJ) : "Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ) ? FJ(JJ, cJ) : void 0
      }
    }
    ZJ.r(cJ), ZJ.d(cJ, {
      api: () => BZ,
      config: () => ZU,
      counter: () => hU,
      dom: () => UU,
      findIconDefinition: () => XU,
      icon: () => qU,
      layer: () => jU,
      library: () => FU,
      noAuto: () => cU,
      parse: () => eU,
      text: () => YU,
      toHtml: () => AU
    });
    var nJ = function() {},
      GJ = {},
      fJ = {},
      xJ = null,
      rJ = {
        mark: nJ,
        measure: nJ
      };
    try {
      "undefined" !== typeof window && (GJ = window), "undefined" !== typeof document && (fJ = document), "undefined" !== typeof MutationObserver && (xJ = MutationObserver), "undefined" !== typeof performance && (rJ = performance)
    } catch (CJ) {}
    var vJ, mJ, QJ = (GJ.navigator || {}).userAgent,
      EJ = void 0 === QJ ? "" : QJ,
      VJ = GJ,
      KJ = fJ,
      yJ = xJ,
      SJ = rJ,
      IJ = (VJ.document, !!KJ.documentElement && !!KJ.head && "function" === typeof KJ.addEventListener && "function" === typeof KJ.createElement),
      MJ = ~EJ.indexOf("MSIE") || ~EJ.indexOf("Trident/"),
      bJ = {
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
      wJ = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      WJ = "classic",
      gJ = "duotone",
      HJ = "sharp",
      PJ = "sharp-duotone",
      kJ = "chisel",
      pJ = "etch",
      dJ = "graphite",
      zJ = "jelly",
      NJ = "jelly-duo",
      OJ = "jelly-fill",
      TJ = "notdog",
      CJ = "notdog-duo",
      uJ = "slab",
      iJ = "slab-press",
      RJ = "thumbprint",
      LJ = "utility",
      aJ = "utility-duo",
      BJ = "utility-fill",
      tJ = "whiteboard",
      oJ = [WJ, gJ, HJ, PJ, kJ, pJ, dJ, zJ, NJ, OJ, TJ, CJ, uJ, iJ, RJ, LJ, aJ, BJ, tJ],
      lJ = (XJ(XJ(XJ(XJ(XJ(XJ(XJ(XJ(XJ(XJ(vJ = {}, WJ, "Classic"), gJ, "Duotone"), HJ, "Sharp"), PJ, "Sharp Duotone"), kJ, "Chisel"), pJ, "Etch"), dJ, "Graphite"), zJ, "Jelly"), NJ, "Jelly Duo"), OJ, "Jelly Fill"), XJ(XJ(XJ(XJ(XJ(XJ(XJ(XJ(XJ(vJ, TJ, "Notdog"), CJ, "Notdog Duo"), uJ, "Slab"), iJ, "Slab Press"), RJ, "Thumbprint"), LJ, "Utility"), aJ, "Utility Duo"), BJ, "Utility Fill"), tJ, "Whiteboard"), new Map([
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
      Jc = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      cc = {
        fak: "kit",
        "fa-kit": "kit"
      },
      Zc = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      Fc = (XJ(XJ({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      Uc = {
        "kit-duotone": "fakd"
      },
      ec = "duotone-group",
      Xc = "swap-opacity",
      Ac = "primary",
      qc = "secondary",
      jc = (XJ(XJ(XJ(XJ(XJ(XJ(XJ(XJ(XJ(XJ(mJ = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), XJ(XJ(XJ(XJ(XJ(XJ(XJ(XJ(XJ(mJ, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), XJ(XJ({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      Yc = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      hc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Dc = hc.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      sc = [].concat(YJ(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", ec, Xc, Ac, qc]).concat(hc.map((function(JJ) {
        return "".concat(JJ, "x")
      }))).concat(Dc.map((function(JJ) {
        return "w-".concat(JJ)
      }))),
      nc = "___FONT_AWESOME___",
      Gc = "svg-inline--fa",
      fc = "data-fa-i2svg",
      xc = "data-fa-pseudo-element",
      rc = "data-prefix",
      vc = "data-icon",
      mc = "fontawesome-i2svg",
      Qc = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      Ec = ["::before", "::after", ":before", ":after"],
      Vc = function() {
        try {
          return !0
        } catch (JJ) {
          return !1
        }
      }();

    function Kc(JJ) {
      return new Proxy(JJ, {
        get: function(JJ, cJ) {
          return cJ in JJ ? JJ[cJ] : JJ[WJ]
        }
      })
    }
    var yc = qJ({}, bJ);
    yc[WJ] = qJ(qJ(qJ(qJ({}, {
      "fa-duotone": "duotone"
    }), bJ[WJ]), cc), Zc);
    var Sc = Kc(yc),
      Ic = qJ({}, {
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
    Ic[WJ] = qJ(qJ(qJ(qJ({}, {
      duotone: "fad"
    }), Ic[WJ]), Fc), Uc);
    var Mc = Kc(Ic),
      bc = qJ({}, jc);
    bc[WJ] = qJ(qJ({}, bc[WJ]), {
      fak: "fa-kit"
    });
    var wc = Kc(bc),
      Wc = qJ({}, {
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
    Wc[WJ] = qJ(qJ({}, Wc[WJ]), {
      "fa-kit": "fak"
    });
    Kc(Wc);
    var gc = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      Hc = "fa-layers-text",
      Pc = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      kc = (Kc(qJ({}, {
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
      pc = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      dc = [].concat(YJ(["kit"]), YJ(sc)),
      zc = VJ.FontAwesomeConfig || {};
    if (KJ && "function" === typeof KJ.querySelector) {
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
      ].forEach((function(JJ) {
        var cJ = jJ(JJ, 2),
          ZJ = cJ[0],
          FJ = cJ[1],
          UJ = function(JJ) {
            return "" === JJ || "false" !== JJ && ("true" === JJ || JJ)
          }(function(JJ) {
            var cJ = KJ.querySelector("script[" + JJ + "]");
            if (cJ) return cJ.getAttribute(JJ)
          }(ZJ));
        void 0 !== UJ && null !== UJ && (zc[FJ] = UJ)
      }))
    }
    var Nc = {
      styleDefault: "solid",
      familyDefault: WJ,
      cssPrefix: "fa",
      replacementClass: Gc,
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
    zc.familyPrefix && (zc.cssPrefix = zc.familyPrefix);
    var Oc = qJ(qJ({}, Nc), zc);
    Oc.autoReplaceSvg || (Oc.observeMutations = !1);
    var Tc = {};
    Object.keys(Nc).forEach((function(JJ) {
      Object.defineProperty(Tc, JJ, {
        enumerable: !0,
        set: function(cJ) {
          Oc[JJ] = cJ, Cc.forEach((function(JJ) {
            return JJ(Tc)
          }))
        },
        get: function() {
          return Oc[JJ]
        }
      })
    })), Object.defineProperty(Tc, "familyPrefix", {
      enumerable: !0,
      set: function(JJ) {
        Oc.cssPrefix = JJ, Cc.forEach((function(JJ) {
          return JJ(Tc)
        }))
      },
      get: function() {
        return Oc.cssPrefix
      }
    }), VJ.FontAwesomeConfig = Tc;
    var Cc = [];
    var uc = 16,
      ic = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function Rc() {
      for (var JJ = 12, cJ = ""; JJ-- > 0;) cJ += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return cJ
    }

    function Lc(JJ) {
      for (var cJ = [], ZJ = (JJ || []).length >>> 0; ZJ--;) cJ[ZJ] = JJ[ZJ];
      return cJ
    }

    function ac(JJ) {
      return JJ.classList ? Lc(JJ.classList) : (JJ.getAttribute("class") || "").split(" ").filter((function(JJ) {
        return JJ
      }))
    }

    function Bc(JJ) {
      return "".concat(JJ).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function tc(JJ) {
      return Object.keys(JJ || {}).reduce((function(cJ, ZJ) {
        return cJ + "".concat(ZJ, ": ").concat(JJ[ZJ].trim(), ";")
      }), "")
    }

    function oc(JJ) {
      return JJ.size !== ic.size || JJ.x !== ic.x || JJ.y !== ic.y || JJ.rotate !== ic.rotate || JJ.flipX || JJ.flipY
    }

    function lc() {
      var JJ = "fa",
        cJ = Gc,
        ZJ = Tc.cssPrefix,
        FJ = Tc.replacementClass,
        UJ = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (ZJ !== JJ || FJ !== cJ) {
        var eJ = new RegExp("\\.".concat(JJ, "\\-"), "g"),
          XJ = new RegExp("\\--".concat(JJ, "\\-"), "g"),
          AJ = new RegExp("\\.".concat(cJ), "g");
        UJ = UJ.replace(eJ, ".".concat(ZJ, "-")).replace(XJ, "--".concat(ZJ, "-")).replace(AJ, ".".concat(FJ))
      }
      return UJ
    }
    var JZ = !1;

    function cZ() {
      Tc.autoAddCss && !JZ && (! function(JJ) {
        if (JJ && IJ) {
          var cJ = KJ.createElement("style");
          cJ.setAttribute("type", "text/css"), cJ.innerHTML = JJ;
          for (var ZJ = KJ.head.childNodes, FJ = null, UJ = ZJ.length - 1; UJ > -1; UJ--) {
            var eJ = ZJ[UJ],
              XJ = (eJ.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(XJ) > -1 && (FJ = eJ)
          }
          KJ.head.insertBefore(cJ, FJ)
        }
      }(lc()), JZ = !0)
    }
    var ZZ = {
        mixout: function() {
          return {
            dom: {
              css: lc,
              insertCss: cZ
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              cZ()
            },
            beforeI2svg: function() {
              cZ()
            }
          }
        }
      },
      FZ = VJ || {};
    FZ[nc] || (FZ[nc] = {}), FZ[nc].styles || (FZ[nc].styles = {}), FZ[nc].hooks || (FZ[nc].hooks = {}), FZ[nc].shims || (FZ[nc].shims = []);
    var UZ = FZ[nc],
      eZ = [],
      XZ = function() {
        KJ.removeEventListener("DOMContentLoaded", XZ), AZ = 1, eZ.map((function(JJ) {
          return JJ()
        }))
      },
      AZ = !1;

    function qZ(JJ) {
      var cJ = JJ.tag,
        ZJ = JJ.attributes,
        FJ = void 0 === ZJ ? {} : ZJ,
        UJ = JJ.children,
        eJ = void 0 === UJ ? [] : UJ;
      return "string" === typeof JJ ? Bc(JJ) : "<".concat(cJ, " ").concat(function(JJ) {
        return Object.keys(JJ || {}).reduce((function(cJ, ZJ) {
          return cJ + "".concat(ZJ, '="').concat(Bc(JJ[ZJ]), '" ')
        }), "").trim()
      }(FJ), ">").concat(eJ.map(qZ).join(""), "</").concat(cJ, ">")
    }

    function jZ(JJ, cJ, ZJ) {
      if (JJ && JJ[cJ] && JJ[cJ][ZJ]) return {
        prefix: cJ,
        iconName: ZJ,
        icon: JJ[cJ][ZJ]
      }
    }
    IJ && ((AZ = (KJ.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(KJ.readyState)) || KJ.addEventListener("DOMContentLoaded", XZ));
    var YZ = function(JJ, cJ, ZJ, FJ) {
      var UJ, eJ, XJ, AJ = Object.keys(JJ),
        qJ = AJ.length,
        jJ = void 0 !== FJ ? function(JJ, cJ) {
          return function(ZJ, FJ, UJ, eJ) {
            return JJ.call(cJ, ZJ, FJ, UJ, eJ)
          }
        }(cJ, FJ) : cJ;
      for (void 0 === ZJ ? (UJ = 1, XJ = JJ[AJ[0]]) : (UJ = 0, XJ = ZJ); UJ < qJ; UJ++) XJ = jJ(XJ, JJ[eJ = AJ[UJ]], eJ, JJ);
      return XJ
    };

    function hZ(JJ) {
      return 1 !== YJ(JJ).length ? null : JJ.codePointAt(0).toString(16)
    }

    function DZ(JJ) {
      return Object.keys(JJ).reduce((function(cJ, ZJ) {
        var FJ = JJ[ZJ];
        return !!FJ.icon ? cJ[FJ.iconName] = FJ.icon : cJ[ZJ] = FJ, cJ
      }), {})
    }

    function sZ(JJ, cJ) {
      var ZJ = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        FJ = void 0 !== ZJ && ZJ,
        UJ = DZ(cJ);
      "function" !== typeof UZ.hooks.addPack || FJ ? UZ.styles[JJ] = qJ(qJ({}, UZ.styles[JJ] || {}), UJ) : UZ.hooks.addPack(JJ, DZ(cJ)), "fas" === JJ && sZ("fa", cJ)
    }
    var nZ = UZ.styles,
      GZ = UZ.shims,
      fZ = Object.keys(wc),
      xZ = fZ.reduce((function(JJ, cJ) {
        return JJ[cJ] = Object.keys(wc[cJ]), JJ
      }), {}),
      rZ = null,
      vZ = {},
      mZ = {},
      QZ = {},
      EZ = {},
      VZ = {};

    function KZ(JJ, cJ) {
      var ZJ, FJ = cJ.split("-"),
        UJ = FJ[0],
        eJ = FJ.slice(1).join("-");
      return UJ !== JJ || "" === eJ || (ZJ = eJ, ~dc.indexOf(ZJ)) ? null : eJ
    }
    var yZ, SZ = function() {
      var JJ = function(JJ) {
        return YZ(nZ, (function(cJ, ZJ, FJ) {
          return cJ[FJ] = YZ(ZJ, JJ, {}), cJ
        }), {})
      };
      vZ = JJ((function(JJ, cJ, ZJ) {
        (cJ[3] && (JJ[cJ[3]] = ZJ), cJ[2]) && cJ[2].filter((function(JJ) {
          return "number" === typeof JJ
        })).forEach((function(cJ) {
          JJ[cJ.toString(16)] = ZJ
        }));
        return JJ
      })), mZ = JJ((function(JJ, cJ, ZJ) {
        (JJ[ZJ] = ZJ, cJ[2]) && cJ[2].filter((function(JJ) {
          return "string" === typeof JJ
        })).forEach((function(cJ) {
          JJ[cJ] = ZJ
        }));
        return JJ
      })), VZ = JJ((function(JJ, cJ, ZJ) {
        var FJ = cJ[2];
        return JJ[ZJ] = ZJ, FJ.forEach((function(cJ) {
          JJ[cJ] = ZJ
        })), JJ
      }));
      var cJ = "far" in nZ || Tc.autoFetchSvg,
        ZJ = YZ(GZ, (function(JJ, ZJ) {
          var FJ = ZJ[0],
            UJ = ZJ[1],
            eJ = ZJ[2];
          return "far" !== UJ || cJ || (UJ = "fas"), "string" === typeof FJ && (JJ.names[FJ] = {
            prefix: UJ,
            iconName: eJ
          }), "number" === typeof FJ && (JJ.unicodes[FJ.toString(16)] = {
            prefix: UJ,
            iconName: eJ
          }), JJ
        }), {
          names: {},
          unicodes: {}
        });
      QZ = ZJ.names, EZ = ZJ.unicodes, rZ = WZ(Tc.styleDefault, {
        family: Tc.familyDefault
      })
    };

    function IZ(JJ, cJ) {
      return (vZ[JJ] || {})[cJ]
    }

    function MZ(JJ, cJ) {
      return (VZ[JJ] || {})[cJ]
    }

    function bZ(JJ) {
      return QZ[JJ] || {
        prefix: null,
        iconName: null
      }
    }

    function wZ() {
      return rZ
    }
    yZ = function(JJ) {
      rZ = WZ(JJ.styleDefault, {
        family: Tc.familyDefault
      })
    }, Cc.push(yZ), SZ();

    function WZ(JJ) {
      var cJ = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        ZJ = void 0 === cJ ? WJ : cJ,
        FJ = Sc[ZJ][JJ];
      if (ZJ === gJ && !JJ) return "fad";
      var UJ = Mc[ZJ][JJ] || Mc[ZJ][FJ],
        eJ = JJ in UZ.styles ? JJ : null;
      return UJ || eJ || null
    }

    function gZ(JJ) {
      return JJ.sort().filter((function(JJ, cJ, ZJ) {
        return ZJ.indexOf(JJ) === cJ
      }))
    }
    var HZ = Yc.concat(Jc);

    function PZ(JJ) {
      var cJ = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        ZJ = void 0 !== cJ && cJ,
        FJ = null,
        UJ = gZ(JJ.filter((function(JJ) {
          return HZ.includes(JJ)
        }))),
        eJ = gZ(JJ.filter((function(JJ) {
          return !HZ.includes(JJ)
        }))),
        XJ = jJ(UJ.filter((function(JJ) {
          return FJ = JJ, !wJ.includes(JJ)
        })), 1)[0],
        AJ = void 0 === XJ ? null : XJ,
        YJ = function(JJ) {
          var cJ = WJ,
            ZJ = fZ.reduce((function(JJ, cJ) {
              return JJ[cJ] = "".concat(Tc.cssPrefix, "-").concat(cJ), JJ
            }), {});
          return oJ.forEach((function(FJ) {
            (JJ.includes(ZJ[FJ]) || JJ.some((function(JJ) {
              return xZ[FJ].includes(JJ)
            }))) && (cJ = FJ)
          })), cJ
        }(UJ),
        hJ = qJ(qJ({}, function(JJ) {
          var cJ = [],
            ZJ = null;
          return JJ.forEach((function(JJ) {
            var FJ = KZ(Tc.cssPrefix, JJ);
            FJ ? ZJ = FJ : JJ && cJ.push(JJ)
          })), {
            iconName: ZJ,
            rest: cJ
          }
        }(eJ)), {}, {
          prefix: WZ(AJ, {
            family: YJ
          })
        });
      return qJ(qJ(qJ({}, hJ), function(JJ) {
        var cJ = JJ.values,
          ZJ = JJ.family,
          FJ = JJ.canonical,
          UJ = JJ.givenPrefix,
          eJ = void 0 === UJ ? "" : UJ,
          XJ = JJ.styles,
          AJ = void 0 === XJ ? {} : XJ,
          qJ = JJ.config,
          jJ = void 0 === qJ ? {} : qJ,
          YJ = ZJ === gJ,
          hJ = cJ.includes("fa-duotone") || cJ.includes("fad"),
          DJ = "duotone" === jJ.familyDefault,
          sJ = "fad" === FJ.prefix || "fa-duotone" === FJ.prefix;
        !YJ && (hJ || DJ || sJ) && (FJ.prefix = "fad");
        (cJ.includes("fa-brands") || cJ.includes("fab")) && (FJ.prefix = "fab");
        if (!FJ.prefix && kZ.includes(ZJ)) {
          if (Object.keys(AJ).find((function(JJ) {
              return pZ.includes(JJ)
            })) || jJ.autoFetchSvg) {
            var nJ = lJ.get(ZJ).defaultShortPrefixId;
            FJ.prefix = nJ, FJ.iconName = MZ(FJ.prefix, FJ.iconName) || FJ.iconName
          }
        }
        "fa" !== FJ.prefix && "fa" !== eJ || (FJ.prefix = wZ() || "fas");
        return FJ
      }({
        values: JJ,
        family: YJ,
        styles: nZ,
        config: Tc,
        canonical: hJ,
        givenPrefix: FJ
      })), function(JJ, cJ, ZJ) {
        var FJ = ZJ.prefix,
          UJ = ZJ.iconName;
        if (JJ || !FJ || !UJ) return {
          prefix: FJ,
          iconName: UJ
        };
        var eJ = "fa" === cJ ? bZ(UJ) : {},
          XJ = MZ(FJ, UJ);
        UJ = eJ.iconName || XJ || UJ, "far" !== (FJ = eJ.prefix || FJ) || nZ.far || !nZ.fas || Tc.autoFetchSvg || (FJ = "fas");
        return {
          prefix: FJ,
          iconName: UJ
        }
      }(ZJ, FJ, hJ))
    }
    var kZ = oJ.filter((function(JJ) {
        return JJ !== WJ || JJ !== gJ
      })),
      pZ = Object.keys(jc).filter((function(JJ) {
        return JJ !== WJ
      })).map((function(JJ) {
        return Object.keys(jc[JJ])
      })).flat();
    var dZ = function() {
        return function(JJ, cJ, ZJ) {
          return cJ && UJ(JJ.prototype, cJ), ZJ && UJ(JJ, ZJ), Object.defineProperty(JJ, "prototype", {
            writable: !1
          }), JJ
        }((function JJ() {
          ! function(JJ, cJ) {
            if (!(JJ instanceof cJ)) throw new TypeError("Cannot call a class as a function")
          }(this, JJ), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var JJ = this, cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
            var UJ = ZJ.reduce(this._pullDefinitions, {});
            Object.keys(UJ).forEach((function(cJ) {
              JJ.definitions[cJ] = qJ(qJ({}, JJ.definitions[cJ] || {}), UJ[cJ]), sZ(cJ, UJ[cJ]);
              var ZJ = wc[WJ][cJ];
              ZJ && sZ(ZJ, UJ[cJ]), SZ()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(JJ, cJ) {
            var ZJ = cJ.prefix && cJ.iconName && cJ.icon ? {
              0: cJ
            } : cJ;
            return Object.keys(ZJ).map((function(cJ) {
              var FJ = ZJ[cJ],
                UJ = FJ.prefix,
                eJ = FJ.iconName,
                XJ = FJ.icon,
                AJ = XJ[2];
              JJ[UJ] || (JJ[UJ] = {}), AJ.length > 0 && AJ.forEach((function(cJ) {
                "string" === typeof cJ && (JJ[UJ][cJ] = XJ)
              })), JJ[UJ][eJ] = XJ
            })), JJ
          }
        }])
      }(),
      zZ = [],
      NZ = {},
      OZ = {},
      TZ = Object.keys(OZ);

    function CZ(JJ, cJ) {
      for (var ZJ = arguments.length, FJ = new Array(ZJ > 2 ? ZJ - 2 : 0), UJ = 2; UJ < ZJ; UJ++) FJ[UJ - 2] = arguments[UJ];
      return (NZ[JJ] || []).forEach((function(JJ) {
        cJ = JJ.apply(null, [cJ].concat(FJ))
      })), cJ
    }

    function uZ(JJ) {
      for (var cJ = arguments.length, ZJ = new Array(cJ > 1 ? cJ - 1 : 0), FJ = 1; FJ < cJ; FJ++) ZJ[FJ - 1] = arguments[FJ];
      (NZ[JJ] || []).forEach((function(JJ) {
        JJ.apply(null, ZJ)
      }))
    }

    function iZ() {
      var JJ = arguments[0],
        cJ = Array.prototype.slice.call(arguments, 1);
      return OZ[JJ] ? OZ[JJ].apply(null, cJ) : void 0
    }

    function RZ(JJ) {
      "fa" === JJ.prefix && (JJ.prefix = "fas");
      var cJ = JJ.iconName,
        ZJ = JJ.prefix || wZ();
      if (cJ) return cJ = MZ(ZJ, cJ) || cJ, jZ(LZ.definitions, ZJ, cJ) || jZ(UZ.styles, ZJ, cJ)
    }
    var LZ = new dZ,
      aZ = {
        i2svg: function() {
          var JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return IJ ? (uZ("beforeI2svg", JJ), iZ("pseudoElements2svg", JJ), iZ("i2svg", JJ)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var JJ, cJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            ZJ = cJ.autoReplaceSvgRoot;
          !1 === Tc.autoReplaceSvg && (Tc.autoReplaceSvg = !0), Tc.observeMutations = !0, JJ = function() {
            tZ({
              autoReplaceSvgRoot: ZJ
            }), uZ("watch", cJ)
          }, IJ && (AZ ? setTimeout(JJ, 0) : eZ.push(JJ))
        }
      },
      BZ = {
        noAuto: function() {
          Tc.autoReplaceSvg = !1, Tc.observeMutations = !1, uZ("noAuto")
        },
        config: Tc,
        dom: aZ,
        parse: {
          icon: function(JJ) {
            if (null === JJ) return null;
            if ("object" === DJ(JJ) && JJ.prefix && JJ.iconName) return {
              prefix: JJ.prefix,
              iconName: MZ(JJ.prefix, JJ.iconName) || JJ.iconName
            };
            if (Array.isArray(JJ) && 2 === JJ.length) {
              var cJ = 0 === JJ[1].indexOf("fa-") ? JJ[1].slice(3) : JJ[1],
                ZJ = WZ(JJ[0]);
              return {
                prefix: ZJ,
                iconName: MZ(ZJ, cJ) || cJ
              }
            }
            if ("string" === typeof JJ && (JJ.indexOf("".concat(Tc.cssPrefix, "-")) > -1 || JJ.match(gc))) {
              var FJ = PZ(JJ.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: FJ.prefix || wZ(),
                iconName: MZ(FJ.prefix, FJ.iconName) || FJ.iconName
              }
            }
            if ("string" === typeof JJ) {
              var UJ = wZ();
              return {
                prefix: UJ,
                iconName: MZ(UJ, JJ) || JJ
              }
            }
          }
        },
        library: LZ,
        findIconDefinition: RZ,
        toHtml: qZ
      },
      tZ = function() {
        var JJ = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          cJ = void 0 === JJ ? KJ : JJ;
        (Object.keys(UZ.styles).length > 0 || Tc.autoFetchSvg) && IJ && Tc.autoReplaceSvg && BZ.dom.i2svg({
          node: cJ
        })
      };

    function oZ(JJ, cJ) {
      return Object.defineProperty(JJ, "abstract", {
        get: cJ
      }), Object.defineProperty(JJ, "html", {
        get: function() {
          return JJ.abstract.map((function(JJ) {
            return qZ(JJ)
          }))
        }
      }), Object.defineProperty(JJ, "node", {
        get: function() {
          if (IJ) {
            var cJ = KJ.createElement("div");
            return cJ.innerHTML = JJ.html, cJ.children
          }
        }
      }), JJ
    }

    function lZ(JJ) {
      var cJ = JJ.icons,
        ZJ = cJ.main,
        FJ = cJ.mask,
        UJ = JJ.prefix,
        eJ = JJ.iconName,
        XJ = JJ.transform,
        AJ = JJ.symbol,
        jJ = JJ.maskId,
        YJ = JJ.extra,
        hJ = JJ.watchable,
        DJ = void 0 !== hJ && hJ,
        sJ = FJ.found ? FJ : ZJ,
        nJ = sJ.width,
        GJ = sJ.height,
        fJ = [Tc.replacementClass, eJ ? "".concat(Tc.cssPrefix, "-").concat(eJ) : ""].filter((function(JJ) {
          return -1 === YJ.classes.indexOf(JJ)
        })).filter((function(JJ) {
          return "" !== JJ || !!JJ
        })).concat(YJ.classes).join(" "),
        xJ = {
          children: [],
          attributes: qJ(qJ({}, YJ.attributes), {}, {
            "data-prefix": UJ,
            "data-icon": eJ,
            class: fJ,
            role: YJ.attributes.role || "img",
            viewBox: "0 0 ".concat(nJ, " ").concat(GJ)
          })
        };
      (function(JJ) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(cJ) {
          return cJ in JJ
        }))
      })(YJ.attributes) || YJ.attributes["aria-hidden"] || (xJ.attributes["aria-hidden"] = "true"), DJ && (xJ.attributes[fc] = "");
      var rJ = qJ(qJ({}, xJ), {}, {
          prefix: UJ,
          iconName: eJ,
          main: ZJ,
          mask: FJ,
          maskId: jJ,
          transform: XJ,
          symbol: AJ,
          styles: qJ({}, YJ.styles)
        }),
        vJ = FJ.found && ZJ.found ? iZ("generateAbstractMask", rJ) || {
          children: [],
          attributes: {}
        } : iZ("generateAbstractIcon", rJ) || {
          children: [],
          attributes: {}
        },
        mJ = vJ.children,
        QJ = vJ.attributes;
      return rJ.children = mJ, rJ.attributes = QJ, AJ ? function(JJ) {
        var cJ = JJ.prefix,
          ZJ = JJ.iconName,
          FJ = JJ.children,
          UJ = JJ.attributes,
          eJ = JJ.symbol,
          XJ = !0 === eJ ? "".concat(cJ, "-").concat(Tc.cssPrefix, "-").concat(ZJ) : eJ;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: qJ(qJ({}, UJ), {}, {
              id: XJ
            }),
            children: FJ
          }]
        }]
      }(rJ) : function(JJ) {
        var cJ = JJ.children,
          ZJ = JJ.main,
          FJ = JJ.mask,
          UJ = JJ.attributes,
          eJ = JJ.styles,
          XJ = JJ.transform;
        if (oc(XJ) && ZJ.found && !FJ.found) {
          var AJ = {
            x: ZJ.width / ZJ.height / 2,
            y: .5
          };
          UJ.style = tc(qJ(qJ({}, eJ), {}, {
            "transform-origin": "".concat(AJ.x + XJ.x / 16, "em ").concat(AJ.y + XJ.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: UJ,
          children: cJ
        }]
      }(rJ)
    }

    function JF(JJ) {
      var cJ = JJ.content,
        ZJ = JJ.width,
        FJ = JJ.height,
        UJ = JJ.transform,
        eJ = JJ.extra,
        XJ = JJ.watchable,
        AJ = void 0 !== XJ && XJ,
        jJ = qJ(qJ({}, eJ.attributes), {}, {
          class: eJ.classes.join(" ")
        });
      AJ && (jJ[fc] = "");
      var YJ = qJ({}, eJ.styles);
      oc(UJ) && (YJ.transform = function(JJ) {
        var cJ = JJ.transform,
          ZJ = JJ.width,
          FJ = void 0 === ZJ ? 16 : ZJ,
          UJ = JJ.height,
          eJ = void 0 === UJ ? 16 : UJ,
          XJ = JJ.startCentered,
          AJ = void 0 !== XJ && XJ,
          qJ = "";
        return qJ += AJ && MJ ? "translate(".concat(cJ.x / uc - FJ / 2, "em, ").concat(cJ.y / uc - eJ / 2, "em) ") : AJ ? "translate(calc(-50% + ".concat(cJ.x / uc, "em), calc(-50% + ").concat(cJ.y / uc, "em)) ") : "translate(".concat(cJ.x / uc, "em, ").concat(cJ.y / uc, "em) "), qJ += "scale(".concat(cJ.size / uc * (cJ.flipX ? -1 : 1), ", ").concat(cJ.size / uc * (cJ.flipY ? -1 : 1), ") "), qJ + "rotate(".concat(cJ.rotate, "deg) ")
      }({
        transform: UJ,
        startCentered: !0,
        width: ZJ,
        height: FJ
      }), YJ["-webkit-transform"] = YJ.transform);
      var hJ = tc(YJ);
      hJ.length > 0 && (jJ.style = hJ);
      var DJ = [];
      return DJ.push({
        tag: "span",
        attributes: jJ,
        children: [cJ]
      }), DJ
    }
    var cF = UZ.styles;

    function ZF(JJ) {
      var cJ = JJ[0],
        ZJ = JJ[1],
        FJ = jJ(JJ.slice(4), 1)[0];
      return {
        found: !0,
        width: cJ,
        height: ZJ,
        icon: Array.isArray(FJ) ? {
          tag: "g",
          attributes: {
            class: "".concat(Tc.cssPrefix, "-").concat(pc.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(Tc.cssPrefix, "-").concat(pc.SECONDARY),
              fill: "currentColor",
              d: FJ[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(Tc.cssPrefix, "-").concat(pc.PRIMARY),
              fill: "currentColor",
              d: FJ[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: FJ
          }
        }
      }
    }
    var FF = {
      found: !1,
      width: 512,
      height: 512
    };

    function UF(JJ, cJ) {
      var ZJ = cJ;
      return "fa" === cJ && null !== Tc.styleDefault && (cJ = wZ()), new Promise((function(FJ, UJ) {
        if ("fa" === ZJ) {
          var eJ = bZ(JJ) || {};
          JJ = eJ.iconName || JJ, cJ = eJ.prefix || cJ
        }
        if (JJ && cJ && cF[cJ] && cF[cJ][JJ]) return FJ(ZF(cF[cJ][JJ]));
        ! function(JJ, cJ) {
          Vc || Tc.showMissingIcons || !JJ || console.error('Icon with name "'.concat(JJ, '" and prefix "').concat(cJ, '" is missing.'))
        }(JJ, cJ), FJ(qJ(qJ({}, FF), {}, {
          icon: Tc.showMissingIcons && JJ && iZ("missingIconAbstract") || {}
        }))
      }))
    }
    var eF = function() {},
      XF = Tc.measurePerformance && SJ && SJ.mark && SJ.measure ? SJ : {
        mark: eF,
        measure: eF
      },
      AF = 'FA "7.2.0"',
      qF = function(JJ) {
        XF.mark("".concat(AF, " ").concat(JJ, " ends")), XF.measure("".concat(AF, " ").concat(JJ), "".concat(AF, " ").concat(JJ, " begins"), "".concat(AF, " ").concat(JJ, " ends"))
      },
      jF = function(JJ) {
        return XF.mark("".concat(AF, " ").concat(JJ, " begins")),
          function() {
            return qF(JJ)
          }
      },
      YF = function() {};

    function hF(JJ) {
      return "string" === typeof(JJ.getAttribute ? JJ.getAttribute(fc) : null)
    }

    function DF(JJ) {
      return KJ.createElementNS("http://www.w3.org/2000/svg", JJ)
    }

    function sF(JJ) {
      return KJ.createElement(JJ)
    }

    function nF(JJ) {
      var cJ = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        ZJ = void 0 === cJ ? "svg" === JJ.tag ? DF : sF : cJ;
      if ("string" === typeof JJ) return KJ.createTextNode(JJ);
      var FJ = ZJ(JJ.tag);
      return Object.keys(JJ.attributes || []).forEach((function(cJ) {
        FJ.setAttribute(cJ, JJ.attributes[cJ])
      })), (JJ.children || []).forEach((function(JJ) {
        FJ.appendChild(nF(JJ, {
          ceFn: ZJ
        }))
      })), FJ
    }
    var GF = {
      replace: function(JJ) {
        var cJ = JJ[0];
        if (cJ.parentNode)
          if (JJ[1].forEach((function(JJ) {
              cJ.parentNode.insertBefore(nF(JJ), cJ)
            })), null === cJ.getAttribute(fc) && Tc.keepOriginalSource) {
            var ZJ = KJ.createComment(function(JJ) {
              var cJ = " ".concat(JJ.outerHTML, " ");
              return "".concat(cJ, "Font Awesome fontawesome.com ")
            }(cJ));
            cJ.parentNode.replaceChild(ZJ, cJ)
          } else cJ.remove()
      },
      nest: function(JJ) {
        var cJ = JJ[0],
          ZJ = JJ[1];
        if (~ac(cJ).indexOf(Tc.replacementClass)) return GF.replace(JJ);
        var FJ = new RegExp("".concat(Tc.cssPrefix, "-.*"));
        if (delete ZJ[0].attributes.id, ZJ[0].attributes.class) {
          var UJ = ZJ[0].attributes.class.split(" ").reduce((function(JJ, cJ) {
            return cJ === Tc.replacementClass || cJ.match(FJ) ? JJ.toSvg.push(cJ) : JJ.toNode.push(cJ), JJ
          }), {
            toNode: [],
            toSvg: []
          });
          ZJ[0].attributes.class = UJ.toSvg.join(" "), 0 === UJ.toNode.length ? cJ.removeAttribute("class") : cJ.setAttribute("class", UJ.toNode.join(" "))
        }
        var eJ = ZJ.map((function(JJ) {
          return qZ(JJ)
        })).join("\n");
        cJ.setAttribute(fc, ""), cJ.innerHTML = eJ
      }
    };

    function fF(JJ) {
      JJ()
    }

    function xF(JJ, cJ) {
      var ZJ = "function" === typeof cJ ? cJ : YF;
      if (0 === JJ.length) ZJ();
      else {
        var FJ = fF;
        "async" === Tc.mutateApproach && (FJ = VJ.requestAnimationFrame || fF), FJ((function() {
          var cJ = !0 === Tc.autoReplaceSvg ? GF.replace : GF[Tc.autoReplaceSvg] || GF.replace,
            FJ = jF("mutate");
          JJ.map(cJ), FJ(), ZJ()
        }))
      }
    }
    var rF = !1;

    function vF() {
      rF = !0
    }

    function mF() {
      rF = !1
    }
    var QF = null;

    function EF(JJ) {
      if (yJ && Tc.observeMutations) {
        var cJ = JJ.treeCallback,
          ZJ = void 0 === cJ ? YF : cJ,
          FJ = JJ.nodeCallback,
          UJ = void 0 === FJ ? YF : FJ,
          eJ = JJ.pseudoElementsCallback,
          XJ = void 0 === eJ ? YF : eJ,
          AJ = JJ.observeMutationsRoot,
          qJ = void 0 === AJ ? KJ : AJ;
        QF = new yJ((function(JJ) {
          if (!rF) {
            var cJ = wZ();
            Lc(JJ).forEach((function(JJ) {
              if ("childList" === JJ.type && JJ.addedNodes.length > 0 && !hF(JJ.addedNodes[0]) && (Tc.searchPseudoElements && XJ(JJ.target), ZJ(JJ.target)), "attributes" === JJ.type && JJ.target.parentNode && Tc.searchPseudoElements && XJ([JJ.target], !0), "attributes" === JJ.type && hF(JJ.target) && ~kc.indexOf(JJ.attributeName))
                if ("class" === JJ.attributeName && function(JJ) {
                    var cJ = JJ.getAttribute ? JJ.getAttribute(rc) : null,
                      ZJ = JJ.getAttribute ? JJ.getAttribute(vc) : null;
                    return cJ && ZJ
                  }(JJ.target)) {
                  var FJ = PZ(ac(JJ.target)),
                    eJ = FJ.prefix,
                    AJ = FJ.iconName;
                  JJ.target.setAttribute(rc, eJ || cJ), AJ && JJ.target.setAttribute(vc, AJ)
                } else(qJ = JJ.target) && qJ.classList && qJ.classList.contains && qJ.classList.contains(Tc.replacementClass) && UJ(JJ.target);
              var qJ
            }))
          }
        })), IJ && QF.observe(qJ, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function VF(JJ) {
      var cJ, ZJ, FJ = JJ.getAttribute("data-prefix"),
        UJ = JJ.getAttribute("data-icon"),
        eJ = void 0 !== JJ.innerText ? JJ.innerText.trim() : "",
        XJ = PZ(ac(JJ));
      return XJ.prefix || (XJ.prefix = wZ()), FJ && UJ && (XJ.prefix = FJ, XJ.iconName = UJ), XJ.iconName && XJ.prefix || (XJ.prefix && eJ.length > 0 && (XJ.iconName = (cJ = XJ.prefix, ZJ = JJ.innerText, (mZ[cJ] || {})[ZJ] || IZ(XJ.prefix, hZ(JJ.innerText)))), !XJ.iconName && Tc.autoFetchSvg && JJ.firstChild && JJ.firstChild.nodeType === Node.TEXT_NODE && (XJ.iconName = JJ.firstChild.data)), XJ
    }

    function KF(JJ) {
      var cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        ZJ = VF(JJ),
        FJ = ZJ.iconName,
        UJ = ZJ.prefix,
        eJ = ZJ.rest,
        XJ = function(JJ) {
          return Lc(JJ.attributes).reduce((function(JJ, cJ) {
            return "class" !== JJ.name && "style" !== JJ.name && (JJ[cJ.name] = cJ.value), JJ
          }), {})
        }(JJ),
        AJ = CZ("parseNodeAttributes", {}, JJ),
        jJ = cJ.styleParser ? function(JJ) {
          var cJ = JJ.getAttribute("style"),
            ZJ = [];
          return cJ && (ZJ = cJ.split(";").reduce((function(JJ, cJ) {
            var ZJ = cJ.split(":"),
              FJ = ZJ[0],
              UJ = ZJ.slice(1);
            return FJ && UJ.length > 0 && (JJ[FJ] = UJ.join(":").trim()), JJ
          }), {})), ZJ
        }(JJ) : [];
      return qJ({
        iconName: FJ,
        prefix: UJ,
        transform: ic,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: eJ,
          styles: jJ,
          attributes: XJ
        }
      }, AJ)
    }
    var yF = UZ.styles;

    function SF(JJ) {
      var cJ = "nest" === Tc.autoReplaceSvg ? KF(JJ, {
        styleParser: !1
      }) : KF(JJ);
      return ~cJ.extra.classes.indexOf(Hc) ? iZ("generateLayersText", JJ, cJ) : iZ("generateSvgReplacementMutation", JJ, cJ)
    }

    function IF(JJ) {
      var cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!IJ) return Promise.resolve();
      var ZJ = KJ.documentElement.classList,
        FJ = function(JJ) {
          return ZJ.add("".concat(mc, "-").concat(JJ))
        },
        UJ = function(JJ) {
          return ZJ.remove("".concat(mc, "-").concat(JJ))
        },
        eJ = Tc.autoFetchSvg ? [].concat(YJ(Jc), YJ(Yc)) : wJ.concat(Object.keys(yF));
      eJ.includes("fa") || eJ.push("fa");
      var XJ = [".".concat(Hc, ":not([").concat(fc, "])")].concat(eJ.map((function(JJ) {
        return ".".concat(JJ, ":not([").concat(fc, "])")
      }))).join(", ");
      if (0 === XJ.length) return Promise.resolve();
      var AJ = [];
      try {
        AJ = Lc(JJ.querySelectorAll(XJ))
      } catch (hJ) {}
      if (!(AJ.length > 0)) return Promise.resolve();
      FJ("pending"), UJ("complete");
      var qJ = jF("onTree"),
        jJ = AJ.reduce((function(JJ, cJ) {
          try {
            var ZJ = SF(cJ);
            ZJ && JJ.push(ZJ)
          } catch (hJ) {
            Vc || "MissingIcon" === hJ.name && console.error(hJ)
          }
          return JJ
        }), []);
      return new Promise((function(JJ, ZJ) {
        Promise.all(jJ).then((function(ZJ) {
          xF(ZJ, (function() {
            FJ("active"), FJ("complete"), UJ("pending"), "function" === typeof cJ && cJ(), qJ(), JJ()
          }))
        })).catch((function(JJ) {
          qJ(), ZJ(JJ)
        }))
      }))
    }

    function MF(JJ) {
      var cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      SF(JJ).then((function(JJ) {
        JJ && xF([JJ], cJ)
      }))
    }
    var bF = function(JJ) {
        var cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZJ = cJ.transform,
          FJ = void 0 === ZJ ? ic : ZJ,
          UJ = cJ.symbol,
          eJ = void 0 !== UJ && UJ,
          XJ = cJ.mask,
          AJ = void 0 === XJ ? null : XJ,
          jJ = cJ.maskId,
          YJ = void 0 === jJ ? null : jJ,
          hJ = cJ.classes,
          DJ = void 0 === hJ ? [] : hJ,
          sJ = cJ.attributes,
          nJ = void 0 === sJ ? {} : sJ,
          GJ = cJ.styles,
          fJ = void 0 === GJ ? {} : GJ;
        if (JJ) {
          var xJ = JJ.prefix,
            rJ = JJ.iconName,
            vJ = JJ.icon;
          return oZ(qJ({
            type: "icon"
          }, JJ), (function() {
            return uZ("beforeDOMElementCreation", {
              iconDefinition: JJ,
              params: cJ
            }), lZ({
              icons: {
                main: ZF(vJ),
                mask: AJ ? ZF(AJ.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: xJ,
              iconName: rJ,
              transform: qJ(qJ({}, ic), FJ),
              symbol: eJ,
              maskId: YJ,
              extra: {
                attributes: nJ,
                styles: fJ,
                classes: DJ
              }
            })
          }))
        }
      },
      wF = {
        mixout: function() {
          return {
            icon: (JJ = bF, function(cJ) {
              var ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                FJ = (cJ || {}).icon ? cJ : RZ(cJ || {}),
                UJ = ZJ.mask;
              return UJ && (UJ = (UJ || {}).icon ? UJ : RZ(UJ || {})), JJ(FJ, qJ(qJ({}, ZJ), {}, {
                mask: UJ
              }))
            })
          };
          var JJ
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(JJ) {
              return JJ.treeCallback = IF, JJ.nodeCallback = MF, JJ
            }
          }
        },
        provides: function(JJ) {
          JJ.i2svg = function(JJ) {
            var cJ = JJ.node,
              ZJ = void 0 === cJ ? KJ : cJ,
              FJ = JJ.callback;
            return IF(ZJ, void 0 === FJ ? function() {} : FJ)
          }, JJ.generateSvgReplacementMutation = function(JJ, cJ) {
            var ZJ = cJ.iconName,
              FJ = cJ.prefix,
              UJ = cJ.transform,
              eJ = cJ.symbol,
              XJ = cJ.mask,
              AJ = cJ.maskId,
              qJ = cJ.extra;
            return new Promise((function(cJ, YJ) {
              Promise.all([UF(ZJ, FJ), XJ.iconName ? UF(XJ.iconName, XJ.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(XJ) {
                var YJ = jJ(XJ, 2),
                  hJ = YJ[0],
                  DJ = YJ[1];
                cJ([JJ, lZ({
                  icons: {
                    main: hJ,
                    mask: DJ
                  },
                  prefix: FJ,
                  iconName: ZJ,
                  transform: UJ,
                  symbol: eJ,
                  maskId: AJ,
                  extra: qJ,
                  watchable: !0
                })])
              })).catch(YJ)
            }))
          }, JJ.generateAbstractIcon = function(JJ) {
            var cJ, ZJ = JJ.children,
              FJ = JJ.attributes,
              UJ = JJ.main,
              eJ = JJ.transform,
              XJ = tc(JJ.styles);
            return XJ.length > 0 && (FJ.style = XJ), oc(eJ) && (cJ = iZ("generateAbstractTransformGrouping", {
              main: UJ,
              transform: eJ,
              containerWidth: UJ.width,
              iconWidth: UJ.width
            })), ZJ.push(cJ || UJ.icon), {
              children: ZJ,
              attributes: FJ
            }
          }
        }
      },
      WF = {
        mixout: function() {
          return {
            layer: function(JJ) {
              var cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ZJ = cJ.classes,
                FJ = void 0 === ZJ ? [] : ZJ;
              return oZ({
                type: "layer"
              }, (function() {
                uZ("beforeDOMElementCreation", {
                  assembler: JJ,
                  params: cJ
                });
                var ZJ = [];
                return JJ((function(JJ) {
                  Array.isArray(JJ) ? JJ.map((function(JJ) {
                    ZJ = ZJ.concat(JJ.abstract)
                  })) : ZJ = ZJ.concat(JJ.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(Tc.cssPrefix, "-layers")].concat(YJ(FJ)).join(" ")
                  },
                  children: ZJ
                }]
              }))
            }
          }
        }
      },
      gF = {
        mixout: function() {
          return {
            counter: function(JJ) {
              var cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ZJ = cJ.title,
                FJ = void 0 === ZJ ? null : ZJ,
                UJ = cJ.classes,
                eJ = void 0 === UJ ? [] : UJ,
                XJ = cJ.attributes,
                AJ = void 0 === XJ ? {} : XJ,
                jJ = cJ.styles,
                hJ = void 0 === jJ ? {} : jJ;
              return oZ({
                type: "counter",
                content: JJ
              }, (function() {
                return uZ("beforeDOMElementCreation", {
                    content: JJ,
                    params: cJ
                  }),
                  function(JJ) {
                    var cJ = JJ.content,
                      ZJ = JJ.extra,
                      FJ = qJ(qJ({}, ZJ.attributes), {}, {
                        class: ZJ.classes.join(" ")
                      }),
                      UJ = tc(ZJ.styles);
                    UJ.length > 0 && (FJ.style = UJ);
                    var eJ = [];
                    return eJ.push({
                      tag: "span",
                      attributes: FJ,
                      children: [cJ]
                    }), eJ
                  }({
                    content: JJ.toString(),
                    title: FJ,
                    extra: {
                      attributes: AJ,
                      styles: hJ,
                      classes: ["".concat(Tc.cssPrefix, "-layers-counter")].concat(YJ(eJ))
                    }
                  })
              }))
            }
          }
        }
      },
      HF = {
        mixout: function() {
          return {
            text: function(JJ) {
              var cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ZJ = cJ.transform,
                FJ = void 0 === ZJ ? ic : ZJ,
                UJ = cJ.classes,
                eJ = void 0 === UJ ? [] : UJ,
                XJ = cJ.attributes,
                AJ = void 0 === XJ ? {} : XJ,
                jJ = cJ.styles,
                hJ = void 0 === jJ ? {} : jJ;
              return oZ({
                type: "text",
                content: JJ
              }, (function() {
                return uZ("beforeDOMElementCreation", {
                  content: JJ,
                  params: cJ
                }), JF({
                  content: JJ,
                  transform: qJ(qJ({}, ic), FJ),
                  extra: {
                    attributes: AJ,
                    styles: hJ,
                    classes: ["".concat(Tc.cssPrefix, "-layers-text")].concat(YJ(eJ))
                  }
                })
              }))
            }
          }
        },
        provides: function(JJ) {
          JJ.generateLayersText = function(JJ, cJ) {
            var ZJ = cJ.transform,
              FJ = cJ.extra,
              UJ = null,
              eJ = null;
            if (MJ) {
              var XJ = parseInt(getComputedStyle(JJ).fontSize, 10),
                AJ = JJ.getBoundingClientRect();
              UJ = AJ.width / XJ, eJ = AJ.height / XJ
            }
            return Promise.resolve([JJ, JF({
              content: JJ.innerHTML,
              width: UJ,
              height: eJ,
              transform: ZJ,
              extra: FJ,
              watchable: !0
            })])
          }
        }
      },
      PF = new RegExp('"', "ug"),
      kF = [1105920, 1112319],
      pF = qJ(qJ(qJ(qJ({}, {
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
      dF = Object.keys(pF).reduce((function(JJ, cJ) {
        return JJ[cJ.toLowerCase()] = pF[cJ], JJ
      }), {}),
      zF = Object.keys(dF).reduce((function(JJ, cJ) {
        var ZJ = dF[cJ];
        return JJ[cJ] = ZJ[900] || YJ(Object.entries(ZJ))[0][1], JJ
      }), {});

    function NF(JJ, cJ) {
      var ZJ = "".concat("data-fa-pseudo-element-pending").concat(cJ.replace(":", "-"));
      return new Promise((function(FJ, UJ) {
        if (null !== JJ.getAttribute(ZJ)) return FJ();
        var eJ = Lc(JJ.children).filter((function(JJ) {
            return JJ.getAttribute(xc) === cJ
          }))[0],
          XJ = VJ.getComputedStyle(JJ, cJ),
          AJ = XJ.getPropertyValue("font-family"),
          jJ = AJ.match(Pc),
          hJ = XJ.getPropertyValue("font-weight"),
          DJ = XJ.getPropertyValue("content");
        if (eJ && !jJ) return JJ.removeChild(eJ), FJ();
        if (jJ && "none" !== DJ && "" !== DJ) {
          var sJ = XJ.getPropertyValue("content"),
            nJ = function(JJ, cJ) {
              var ZJ = JJ.replace(/^['"]|['"]$/g, "").toLowerCase(),
                FJ = parseInt(cJ),
                UJ = isNaN(FJ) ? "normal" : FJ;
              return (dF[ZJ] || {})[UJ] || zF[ZJ]
            }(AJ, hJ),
            GJ = function(JJ) {
              return hZ(YJ(JJ.replace(PF, ""))[0] || "")
            }(sJ),
            fJ = jJ[0].startsWith("FontAwesome"),
            xJ = function(JJ) {
              var cJ = JJ.getPropertyValue("font-feature-settings").includes("ss01"),
                ZJ = JJ.getPropertyValue("content").replace(PF, ""),
                FJ = ZJ.codePointAt(0),
                UJ = FJ >= kF[0] && FJ <= kF[1],
                eJ = 2 === ZJ.length && ZJ[0] === ZJ[1];
              return UJ || eJ || cJ
            }(XJ),
            rJ = IZ(nJ, GJ),
            vJ = rJ;
          if (fJ) {
            var mJ = function(JJ) {
              var cJ = EZ[JJ],
                ZJ = IZ("fas", JJ);
              return cJ || (ZJ ? {
                prefix: "fas",
                iconName: ZJ
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(GJ);
            mJ.iconName && mJ.prefix && (rJ = mJ.iconName, nJ = mJ.prefix)
          }
          if (!rJ || xJ || eJ && eJ.getAttribute(rc) === nJ && eJ.getAttribute(vc) === vJ) FJ();
          else {
            JJ.setAttribute(ZJ, vJ), eJ && JJ.removeChild(eJ);
            var QJ = {
                iconName: null,
                prefix: null,
                transform: ic,
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
              EJ = QJ.extra;
            EJ.attributes[xc] = cJ, UF(rJ, nJ).then((function(UJ) {
              var eJ = lZ(qJ(qJ({}, QJ), {}, {
                  icons: {
                    main: UJ,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: nJ,
                  iconName: vJ,
                  extra: EJ,
                  watchable: !0
                })),
                XJ = KJ.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === cJ ? JJ.insertBefore(XJ, JJ.firstChild) : JJ.appendChild(XJ), XJ.outerHTML = eJ.map((function(JJ) {
                return qZ(JJ)
              })).join("\n"), JJ.removeAttribute(ZJ), FJ()
            })).catch(UJ)
          }
        } else FJ()
      }))
    }

    function OF(JJ) {
      return Promise.all([NF(JJ, "::before"), NF(JJ, "::after")])
    }

    function TF(JJ) {
      return JJ.parentNode !== document.head && !~Qc.indexOf(JJ.tagName.toUpperCase()) && !JJ.getAttribute(xc) && (!JJ.parentNode || "svg" !== JJ.parentNode.tagName)
    }
    var CF = function(JJ) {
        return !!JJ && Ec.some((function(cJ) {
          return JJ.includes(cJ)
        }))
      },
      uF = function(JJ) {
        if (!JJ) return [];
        var cJ = new Set,
          ZJ = JJ.split(/,(?![^()]*\))/).map((function(JJ) {
            return JJ.trim()
          }));
        ZJ = ZJ.flatMap((function(JJ) {
          return JJ.includes("(") ? JJ : JJ.split(",").map((function(JJ) {
            return JJ.trim()
          }))
        }));
        var FJ, UJ = eJ(ZJ);
        try {
          for (UJ.s(); !(FJ = UJ.n()).done;) {
            var XJ = FJ.value;
            if (CF(XJ)) {
              var AJ = Ec.reduce((function(JJ, cJ) {
                return JJ.replace(cJ, "")
              }), XJ);
              "" !== AJ && "*" !== AJ && cJ.add(AJ)
            }
          }
        } catch (qJ) {
          UJ.e(qJ)
        } finally {
          UJ.f()
        }
        return cJ
      };

    function iF(JJ) {
      if (IJ) {
        var cJ;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) cJ = JJ;
        else if (Tc.searchPseudoElementsFullScan) cJ = JJ.querySelectorAll("*");
        else {
          var ZJ, FJ = new Set,
            UJ = eJ(document.styleSheets);
          try {
            for (UJ.s(); !(ZJ = UJ.n()).done;) {
              var XJ = ZJ.value;
              try {
                var AJ, qJ = eJ(XJ.cssRules);
                try {
                  for (qJ.s(); !(AJ = qJ.n()).done;) {
                    var jJ, YJ = AJ.value,
                      hJ = eJ(uF(YJ.selectorText));
                    try {
                      for (hJ.s(); !(jJ = hJ.n()).done;) {
                        var DJ = jJ.value;
                        FJ.add(DJ)
                      }
                    } catch (nJ) {
                      hJ.e(nJ)
                    } finally {
                      hJ.f()
                    }
                  }
                } catch (nJ) {
                  qJ.e(nJ)
                } finally {
                  qJ.f()
                }
              } catch (GJ) {
                Tc.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(XJ.href, " (").concat(GJ.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (nJ) {
            UJ.e(nJ)
          } finally {
            UJ.f()
          }
          if (!FJ.size) return;
          var sJ = Array.from(FJ).join(", ");
          try {
            cJ = JJ.querySelectorAll(sJ)
          } catch (fJ) {}
        }
        return new Promise((function(JJ, ZJ) {
          var FJ = Lc(cJ).filter(TF).map(OF),
            UJ = jF("searchPseudoElements");
          vF(), Promise.all(FJ).then((function() {
            UJ(), mF(), JJ()
          })).catch((function() {
            UJ(), mF(), ZJ()
          }))
        }))
      }
    }
    var RF = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(JJ) {
              return JJ.pseudoElementsCallback = iF, JJ
            }
          }
        },
        provides: function(JJ) {
          JJ.pseudoElements2svg = function(JJ) {
            var cJ = JJ.node,
              ZJ = void 0 === cJ ? KJ : cJ;
            Tc.searchPseudoElements && iF(ZJ)
          }
        }
      },
      LF = !1,
      aF = function(JJ) {
        return JJ.toLowerCase().split(" ").reduce((function(JJ, cJ) {
          var ZJ = cJ.toLowerCase().split("-"),
            FJ = ZJ[0],
            UJ = ZJ.slice(1).join("-");
          if (FJ && "h" === UJ) return JJ.flipX = !0, JJ;
          if (FJ && "v" === UJ) return JJ.flipY = !0, JJ;
          if (UJ = parseFloat(UJ), isNaN(UJ)) return JJ;
          switch (FJ) {
            case "grow":
              JJ.size = JJ.size + UJ;
              break;
            case "shrink":
              JJ.size = JJ.size - UJ;
              break;
            case "left":
              JJ.x = JJ.x - UJ;
              break;
            case "right":
              JJ.x = JJ.x + UJ;
              break;
            case "up":
              JJ.y = JJ.y - UJ;
              break;
            case "down":
              JJ.y = JJ.y + UJ;
              break;
            case "rotate":
              JJ.rotate = JJ.rotate + UJ
          }
          return JJ
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      BF = {
        mixout: function() {
          return {
            parse: {
              transform: function(JJ) {
                return aF(JJ)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(JJ, cJ) {
              var ZJ = cJ.getAttribute("data-fa-transform");
              return ZJ && (JJ.transform = aF(ZJ)), JJ
            }
          }
        },
        provides: function(JJ) {
          JJ.generateAbstractTransformGrouping = function(JJ) {
            var cJ = JJ.main,
              ZJ = JJ.transform,
              FJ = JJ.containerWidth,
              UJ = JJ.iconWidth,
              eJ = {
                transform: "translate(".concat(FJ / 2, " 256)")
              },
              XJ = "translate(".concat(32 * ZJ.x, ", ").concat(32 * ZJ.y, ") "),
              AJ = "scale(".concat(ZJ.size / 16 * (ZJ.flipX ? -1 : 1), ", ").concat(ZJ.size / 16 * (ZJ.flipY ? -1 : 1), ") "),
              jJ = "rotate(".concat(ZJ.rotate, " 0 0)"),
              YJ = {
                outer: eJ,
                inner: {
                  transform: "".concat(XJ, " ").concat(AJ, " ").concat(jJ)
                },
                path: {
                  transform: "translate(".concat(UJ / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: qJ({}, YJ.outer),
              children: [{
                tag: "g",
                attributes: qJ({}, YJ.inner),
                children: [{
                  tag: cJ.icon.tag,
                  children: cJ.icon.children,
                  attributes: qJ(qJ({}, cJ.icon.attributes), YJ.path)
                }]
              }]
            }
          }
        }
      },
      tF = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function oF(JJ) {
      var cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return JJ.attributes && (JJ.attributes.fill || cJ) && (JJ.attributes.fill = "black"), JJ
    }
    var lF = {
        hooks: function() {
          return {
            parseNodeAttributes: function(JJ, cJ) {
              var ZJ = cJ.getAttribute("data-fa-mask"),
                FJ = ZJ ? PZ(ZJ.split(" ").map((function(JJ) {
                  return JJ.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return FJ.prefix || (FJ.prefix = wZ()), JJ.mask = FJ, JJ.maskId = cJ.getAttribute("data-fa-mask-id"), JJ
            }
          }
        },
        provides: function(JJ) {
          JJ.generateAbstractMask = function(JJ) {
            var cJ, ZJ = JJ.children,
              FJ = JJ.attributes,
              UJ = JJ.main,
              eJ = JJ.mask,
              XJ = JJ.maskId,
              AJ = JJ.transform,
              jJ = UJ.width,
              YJ = UJ.icon,
              hJ = eJ.width,
              DJ = eJ.icon,
              sJ = function(JJ) {
                var cJ = JJ.transform,
                  ZJ = JJ.containerWidth,
                  FJ = JJ.iconWidth,
                  UJ = {
                    transform: "translate(".concat(ZJ / 2, " 256)")
                  },
                  eJ = "translate(".concat(32 * cJ.x, ", ").concat(32 * cJ.y, ") "),
                  XJ = "scale(".concat(cJ.size / 16 * (cJ.flipX ? -1 : 1), ", ").concat(cJ.size / 16 * (cJ.flipY ? -1 : 1), ") "),
                  AJ = "rotate(".concat(cJ.rotate, " 0 0)");
                return {
                  outer: UJ,
                  inner: {
                    transform: "".concat(eJ, " ").concat(XJ, " ").concat(AJ)
                  },
                  path: {
                    transform: "translate(".concat(FJ / 2 * -1, " -256)")
                  }
                }
              }({
                transform: AJ,
                containerWidth: hJ,
                iconWidth: jJ
              }),
              nJ = {
                tag: "rect",
                attributes: qJ(qJ({}, tF), {}, {
                  fill: "white"
                })
              },
              GJ = YJ.children ? {
                children: YJ.children.map(oF)
              } : {},
              fJ = {
                tag: "g",
                attributes: qJ({}, sJ.inner),
                children: [oF(qJ({
                  tag: YJ.tag,
                  attributes: qJ(qJ({}, YJ.attributes), sJ.path)
                }, GJ))]
              },
              xJ = {
                tag: "g",
                attributes: qJ({}, sJ.outer),
                children: [fJ]
              },
              rJ = "mask-".concat(XJ || Rc()),
              vJ = "clip-".concat(XJ || Rc()),
              mJ = {
                tag: "mask",
                attributes: qJ(qJ({}, tF), {}, {
                  id: rJ,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [nJ, xJ]
              },
              QJ = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: vJ
                  },
                  children: (cJ = DJ, "g" === cJ.tag ? cJ.children : [cJ])
                }, mJ]
              };
            return ZJ.push(QJ, {
              tag: "rect",
              attributes: qJ({
                fill: "currentColor",
                "clip-path": "url(#".concat(vJ, ")"),
                mask: "url(#".concat(rJ, ")")
              }, tF)
            }), {
              children: ZJ,
              attributes: FJ
            }
          }
        }
      },
      JU = {
        provides: function(JJ) {
          var cJ = !1;
          VJ.matchMedia && (cJ = VJ.matchMedia("(prefers-reduced-motion: reduce)").matches), JJ.missingIconAbstract = function() {
            var JJ = [],
              ZJ = {
                fill: "currentColor"
              },
              FJ = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            JJ.push({
              tag: "path",
              attributes: qJ(qJ({}, ZJ), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var UJ = qJ(qJ({}, FJ), {}, {
                attributeName: "opacity"
              }),
              eJ = {
                tag: "circle",
                attributes: qJ(qJ({}, ZJ), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return cJ || eJ.children.push({
              tag: "animate",
              attributes: qJ(qJ({}, FJ), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: qJ(qJ({}, UJ), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), JJ.push(eJ), JJ.push({
              tag: "path",
              attributes: qJ(qJ({}, ZJ), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: cJ ? [] : [{
                tag: "animate",
                attributes: qJ(qJ({}, UJ), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), cJ || JJ.push({
              tag: "path",
              attributes: qJ(qJ({}, ZJ), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: qJ(qJ({}, UJ), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: JJ
            }
          }
        }
      };
    ! function(JJ, cJ) {
      var ZJ = cJ.mixoutsTo;
      zZ = JJ, NZ = {}, Object.keys(OZ).forEach((function(JJ) {
        -1 === TZ.indexOf(JJ) && delete OZ[JJ]
      })), zZ.forEach((function(JJ) {
        var cJ = JJ.mixout ? JJ.mixout() : {};
        if (Object.keys(cJ).forEach((function(JJ) {
            "function" === typeof cJ[JJ] && (ZJ[JJ] = cJ[JJ]), "object" === DJ(cJ[JJ]) && Object.keys(cJ[JJ]).forEach((function(FJ) {
              ZJ[JJ] || (ZJ[JJ] = {}), ZJ[JJ][FJ] = cJ[JJ][FJ]
            }))
          })), JJ.hooks) {
          var FJ = JJ.hooks();
          Object.keys(FJ).forEach((function(JJ) {
            NZ[JJ] || (NZ[JJ] = []), NZ[JJ].push(FJ[JJ])
          }))
        }
        JJ.provides && JJ.provides(OZ)
      }))
    }([ZZ, wF, WF, gF, HF, RF, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              vF(), LF = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            EF(CZ("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            QF && QF.disconnect()
          },
          watch: function(JJ) {
            var cJ = JJ.observeMutationsRoot;
            LF ? mF() : EF(CZ("mutationObserverCallbacks", {
              observeMutationsRoot: cJ
            }))
          }
        }
      }
    }, BF, lF, JU, {
      hooks: function() {
        return {
          parseNodeAttributes: function(JJ, cJ) {
            var ZJ = cJ.getAttribute("data-fa-symbol"),
              FJ = null !== ZJ && ("" === ZJ || ZJ);
            return JJ.symbol = FJ, JJ
          }
        }
      }
    }], {
      mixoutsTo: BZ
    });
    var cU = BZ.noAuto,
      ZU = BZ.config,
      FU = BZ.library,
      UU = BZ.dom,
      eU = BZ.parse,
      XU = BZ.findIconDefinition,
      AU = BZ.toHtml,
      qU = BZ.icon,
      jU = BZ.layer,
      YU = BZ.text,
      hU = BZ.counter
  },
  6038: JJ => {
    JJ.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);