/*! For license information please see 8104he.fa-renderer.3c1c595e.chunk.js.LICENSE.txt */
export const id = 33;
export const ids = [33];
export const modules = {
  7038: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      FontAwesomeIcon: () => dQ
    });
    var wQ = XQ(7035),
      qQ = XQ(5318),
      TQ = XQ.n(qQ),
      zQ = XQ(61);

    function sQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function FQ(QQ, WQ, XQ) {
      return (WQ = function(QQ) {
        var WQ = function(QQ, WQ) {
          if ("object" != typeof QQ || !QQ) return QQ;
          var XQ = QQ[Symbol.toPrimitive];
          if (void 0 !== XQ) {
            var wQ = XQ.call(QQ, WQ || "default");
            if ("object" != typeof wQ) return wQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === WQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == typeof WQ ? WQ : WQ + ""
      }(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function PQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function gQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? PQ(Object(XQ), !0).forEach((function(WQ) {
          FQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : PQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function JQ(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        var XQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != XQ) {
          var wQ, qQ, TQ, zQ, sQ = [],
            FQ = !0,
            PQ = !1;
          try {
            if (TQ = (XQ = XQ.call(QQ)).next, 0 === WQ) {
              if (Object(XQ) !== XQ) return;
              FQ = !1
            } else
              for (; !(FQ = (wQ = TQ.call(XQ)).done) && (sQ.push(wQ.value), sQ.length !== WQ); FQ = !0);
          } catch (QQ) {
            PQ = !0, qQ = QQ
          } finally {
            try {
              if (!FQ && null != XQ.return && (zQ = XQ.return(), Object(zQ) !== zQ)) return
            } finally {
              if (PQ) throw qQ
            }
          }
          return sQ
        }
      }(QQ, WQ) || jQ(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return sQ(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" != typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || jQ(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IQ(QQ) {
      return IQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, IQ(QQ)
    }

    function jQ(QQ, WQ) {
      if (QQ) {
        if ("string" == typeof QQ) return sQ(QQ, WQ);
        var XQ = {}.toString.call(QQ).slice(8, -1);
        return "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name), "Map" === XQ || "Set" === XQ ? Array.from(QQ) : "Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ) ? sQ(QQ, WQ) : void 0
      }
    }
    var BQ;
    try {
      var yQ = XQ(7047);
      BQ = yQ.version
    } catch (aQ) {
      BQ = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function VQ(QQ) {
      var WQ = QQ.beat,
        XQ = QQ.fade,
        wQ = QQ.beatFade,
        qQ = QQ.bounce,
        TQ = QQ.shake,
        zQ = QQ.flash,
        sQ = QQ.spin,
        PQ = QQ.spinPulse,
        gQ = QQ.spinReverse,
        rQ = QQ.pulse,
        IQ = QQ.fixedWidth,
        jQ = QQ.inverse,
        yQ = QQ.border,
        VQ = QQ.listItem,
        DQ = QQ.flip,
        pQ = QQ.size,
        GQ = QQ.rotation,
        UQ = QQ.pull,
        bQ = QQ.swapOpacity,
        vQ = QQ.rotateBy,
        dQ = QQ.widthAuto,
        HQ = function(QQ, WQ) {
          for (var XQ = JQ(QQ.split("-"), 2), wQ = XQ[0], qQ = XQ[1], TQ = JQ(WQ.split("-"), 2), zQ = TQ[0], sQ = TQ[1], FQ = wQ.split("."), PQ = zQ.split("."), gQ = 0; gQ < Math.max(FQ.length, PQ.length); gQ++) {
            var rQ = FQ[gQ] || "0",
              IQ = PQ[gQ] || "0",
              jQ = parseInt(rQ, 10),
              BQ = parseInt(IQ, 10);
            if (jQ !== BQ) return jQ > BQ
          }
          for (var yQ = 0; yQ < Math.max(FQ.length, PQ.length); yQ++) {
            var VQ = FQ[yQ] || "0",
              DQ = PQ[yQ] || "0";
            if (VQ !== DQ && VQ.length !== DQ.length) return VQ.length < DQ.length
          }
          return !(qQ && !sQ)
        }(BQ, "7.0.0"),
        aQ = FQ(FQ(FQ(FQ(FQ(FQ({
          "fa-beat": WQ,
          "fa-fade": XQ,
          "fa-beat-fade": wQ,
          "fa-bounce": qQ,
          "fa-shake": TQ,
          "fa-flash": zQ,
          "fa-spin": sQ,
          "fa-spin-reverse": gQ,
          "fa-spin-pulse": PQ,
          "fa-pulse": rQ,
          "fa-fw": IQ,
          "fa-inverse": jQ,
          "fa-border": yQ,
          "fa-li": VQ,
          "fa-flip": !0 === DQ,
          "fa-flip-horizontal": "horizontal" === DQ || "both" === DQ,
          "fa-flip-vertical": "vertical" === DQ || "both" === DQ
        }, "fa-".concat(pQ), "undefined" !== typeof pQ && null !== pQ), "fa-rotate-".concat(GQ), "undefined" !== typeof GQ && null !== GQ && 0 !== GQ), "fa-pull-".concat(UQ), "undefined" !== typeof UQ && null !== UQ), "fa-swap-opacity", bQ), "fa-rotate-by", HQ && vQ), "fa-width-auto", HQ && dQ);
      return Object.keys(aQ).map((function(QQ) {
        return aQ[QQ] ? QQ : null
      })).filter((function(QQ) {
        return QQ
      }))
    }

    function DQ(QQ) {
      return WQ = QQ, (WQ -= 0) === WQ ? QQ : (QQ = QQ.replace(/[\-_\s]+(.)?/g, (function(QQ, WQ) {
        return WQ ? WQ.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + QQ.substr(1);
      var WQ
    }
    var pQ = ["style"];
    var GQ = !1;
    try {
      GQ = !0
    } catch (aQ) {}

    function UQ(QQ) {
      return QQ && "object" === IQ(QQ) && QQ.prefix && QQ.iconName && QQ.icon ? QQ : wQ.parse.icon ? wQ.parse.icon(QQ) : null === QQ ? null : QQ && "object" === IQ(QQ) && QQ.prefix && QQ.iconName ? QQ : Array.isArray(QQ) && 2 === QQ.length ? {
        prefix: QQ[0],
        iconName: QQ[1]
      } : "string" === typeof QQ ? {
        prefix: "fas",
        iconName: QQ
      } : void 0
    }

    function bQ(QQ, WQ) {
      return Array.isArray(WQ) && WQ.length > 0 || !Array.isArray(WQ) && WQ ? FQ({}, QQ, WQ) : {}
    }
    var vQ = {
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
      dQ = zQ.forwardRef((function(QQ, WQ) {
        var XQ = gQ(gQ({}, vQ), QQ),
          qQ = XQ.icon,
          TQ = XQ.mask,
          zQ = XQ.symbol,
          sQ = XQ.className,
          FQ = XQ.title,
          PQ = XQ.titleId,
          JQ = XQ.maskId,
          IQ = UQ(qQ),
          jQ = bQ("classes", [].concat(rQ(VQ(XQ)), rQ((sQ || "").split(" ")))),
          BQ = bQ("transform", "string" === typeof XQ.transform ? wQ.parse.transform(XQ.transform) : XQ.transform),
          yQ = bQ("mask", UQ(TQ)),
          DQ = (0, wQ.icon)(IQ, gQ(gQ(gQ(gQ({}, jQ), BQ), yQ), {}, {
            symbol: zQ,
            title: FQ,
            titleId: PQ,
            maskId: JQ
          }));
        if (!DQ) return function() {
          var QQ;
          !GQ && console && "function" === typeof console.error && (QQ = console).error.apply(QQ, arguments)
        }("Could not find icon", IQ), null;
        var pQ = DQ.abstract,
          dQ = {
            ref: WQ
          };
        return Object.keys(XQ).forEach((function(QQ) {
          vQ.hasOwnProperty(QQ) || (dQ[QQ] = XQ[QQ])
        })), HQ(pQ[0], dQ)
      }));
    dQ.displayName = "FontAwesomeIcon", dQ.propTypes = {
      beat: TQ().bool,
      border: TQ().bool,
      beatFade: TQ().bool,
      bounce: TQ().bool,
      className: TQ().string,
      fade: TQ().bool,
      flash: TQ().bool,
      mask: TQ().oneOfType([TQ().object, TQ().array, TQ().string]),
      maskId: TQ().string,
      fixedWidth: TQ().bool,
      inverse: TQ().bool,
      flip: TQ().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: TQ().oneOfType([TQ().object, TQ().array, TQ().string]),
      listItem: TQ().bool,
      pull: TQ().oneOf(["right", "left"]),
      pulse: TQ().bool,
      rotation: TQ().oneOf([0, 90, 180, 270]),
      rotateBy: TQ().bool,
      shake: TQ().bool,
      size: TQ().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: TQ().bool,
      spinPulse: TQ().bool,
      spinReverse: TQ().bool,
      symbol: TQ().oneOfType([TQ().bool, TQ().string]),
      title: TQ().string,
      titleId: TQ().string,
      transform: TQ().oneOfType([TQ().string, TQ().object]),
      swapOpacity: TQ().bool,
      widthAuto: TQ().bool
    };
    var HQ = function QQ(WQ, XQ) {
      var wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof XQ) return XQ;
      var qQ = (XQ.children || []).map((function(XQ) {
          return QQ(WQ, XQ)
        })),
        TQ = Object.keys(XQ.attributes || {}).reduce((function(QQ, WQ) {
          var wQ = XQ.attributes[WQ];
          switch (WQ) {
            case "class":
              QQ.attrs.className = wQ, delete XQ.attributes.class;
              break;
            case "style":
              QQ.attrs.style = wQ.split(";").map((function(QQ) {
                return QQ.trim()
              })).filter((function(QQ) {
                return QQ
              })).reduce((function(QQ, WQ) {
                var XQ, wQ = WQ.indexOf(":"),
                  qQ = DQ(WQ.slice(0, wQ)),
                  TQ = WQ.slice(wQ + 1).trim();
                return qQ.startsWith("webkit") ? QQ[(XQ = qQ, XQ.charAt(0).toUpperCase() + XQ.slice(1))] = TQ : QQ[qQ] = TQ, QQ
              }), {});
              break;
            default:
              0 === WQ.indexOf("aria-") || 0 === WQ.indexOf("data-") ? QQ.attrs[WQ.toLowerCase()] = wQ : QQ.attrs[DQ(WQ)] = wQ
          }
          return QQ
        }), {
          attrs: {}
        }),
        zQ = wQ.style,
        sQ = void 0 === zQ ? {} : zQ,
        FQ = function(QQ, WQ) {
          if (null == QQ) return {};
          var XQ, wQ, qQ = function(QQ, WQ) {
            if (null == QQ) return {};
            var XQ = {};
            for (var wQ in QQ)
              if ({}.hasOwnProperty.call(QQ, wQ)) {
                if (-1 !== WQ.indexOf(wQ)) continue;
                XQ[wQ] = QQ[wQ]
              } return XQ
          }(QQ, WQ);
          if (Object.getOwnPropertySymbols) {
            var TQ = Object.getOwnPropertySymbols(QQ);
            for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], -1 === WQ.indexOf(XQ) && {}.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
          }
          return qQ
        }(wQ, pQ);
      return TQ.attrs.style = gQ(gQ({}, TQ.attrs.style), sQ), WQ.apply(void 0, [XQ.tag, gQ(gQ({}, TQ.attrs), FQ)].concat(rQ(qQ)))
    }.bind(null, zQ.createElement)
  },
  5320: (QQ, WQ, XQ) => {
    var wQ = XQ(5328);

    function qQ() {}

    function TQ() {}
    TQ.resetWarningCache = qQ, QQ.exports = function() {
      function QQ(QQ, WQ, XQ, qQ, TQ, zQ) {
        if (zQ !== wQ) {
          var sQ = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw sQ.name = "Invariant Violation", sQ
        }
      }

      function WQ() {
        return QQ
      }
      QQ.isRequired = QQ;
      var XQ = {
        array: QQ,
        bigint: QQ,
        bool: QQ,
        func: QQ,
        number: QQ,
        object: QQ,
        string: QQ,
        symbol: QQ,
        any: QQ,
        arrayOf: WQ,
        element: QQ,
        elementType: QQ,
        instanceOf: WQ,
        node: QQ,
        objectOf: WQ,
        oneOf: WQ,
        oneOfType: WQ,
        shape: WQ,
        exact: WQ,
        checkPropTypes: TQ,
        resetWarningCache: qQ
      };
      return XQ.PropTypes = XQ, XQ
    }
  },
  5318: (QQ, WQ, XQ) => {
    QQ.exports = XQ(5320)()
  },
  5328: QQ => {
    QQ.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7035: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function qQ(QQ, WQ) {
      for (var XQ = 0; XQ < WQ.length; XQ++) {
        var wQ = WQ[XQ];
        wQ.enumerable = wQ.enumerable || !1, wQ.configurable = !0, "value" in wQ && (wQ.writable = !0), Object.defineProperty(QQ, JQ(wQ.key), wQ)
      }
    }

    function TQ(QQ, WQ) {
      var XQ = "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
      if (!XQ) {
        if (Array.isArray(QQ) || (XQ = IQ(QQ)) || WQ && QQ && "number" == typeof QQ.length) {
          XQ && (QQ = XQ);
          var wQ = 0,
            qQ = function() {};
          return {
            s: qQ,
            n: function() {
              return wQ >= QQ.length ? {
                done: !0
              } : {
                done: !1,
                value: QQ[wQ++]
              }
            },
            e: function(QQ) {
              throw QQ
            },
            f: qQ
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var TQ, zQ = !0,
        sQ = !1;
      return {
        s: function() {
          XQ = XQ.call(QQ)
        },
        n: function() {
          var QQ = XQ.next();
          return zQ = QQ.done, QQ
        },
        e: function(QQ) {
          sQ = !0, TQ = QQ
        },
        f: function() {
          try {
            zQ || null == XQ.return || XQ.return()
          } finally {
            if (sQ) throw TQ
          }
        }
      }
    }

    function zQ(QQ, WQ, XQ) {
      return (WQ = JQ(WQ)) in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function sQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function FQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? sQ(Object(XQ), !0).forEach((function(WQ) {
          zQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : sQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function PQ(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        var XQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != XQ) {
          var wQ, qQ, TQ, zQ, sQ = [],
            FQ = !0,
            PQ = !1;
          try {
            if (TQ = (XQ = XQ.call(QQ)).next, 0 === WQ) {
              if (Object(XQ) !== XQ) return;
              FQ = !1
            } else
              for (; !(FQ = (wQ = TQ.call(XQ)).done) && (sQ.push(wQ.value), sQ.length !== WQ); FQ = !0);
          } catch (QQ) {
            PQ = !0, qQ = QQ
          } finally {
            try {
              if (!FQ && null != XQ.return && (zQ = XQ.return(), Object(zQ) !== zQ)) return
            } finally {
              if (PQ) throw qQ
            }
          }
          return sQ
        }
      }(QQ, WQ) || IQ(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return wQ(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" != typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || IQ(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function JQ(QQ) {
      var WQ = function(QQ, WQ) {
        if ("object" != typeof QQ || !QQ) return QQ;
        var XQ = QQ[Symbol.toPrimitive];
        if (void 0 !== XQ) {
          var wQ = XQ.call(QQ, WQ || "default");
          if ("object" != typeof wQ) return wQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === WQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == typeof WQ ? WQ : WQ + ""
    }

    function rQ(QQ) {
      return rQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, rQ(QQ)
    }

    function IQ(QQ, WQ) {
      if (QQ) {
        if ("string" == typeof QQ) return wQ(QQ, WQ);
        var XQ = {}.toString.call(QQ).slice(8, -1);
        return "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name), "Map" === XQ || "Set" === XQ ? Array.from(QQ) : "Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ) ? wQ(QQ, WQ) : void 0
      }
    }
    XQ.r(WQ), XQ.d(WQ, {
      api: () => OX,
      config: () => wq,
      counter: () => rq,
      dom: () => Tq,
      findIconDefinition: () => sq,
      icon: () => Pq,
      layer: () => gq,
      library: () => qq,
      noAuto: () => Xq,
      parse: () => zq,
      text: () => Jq,
      toHtml: () => Fq
    });
    var jQ = function() {},
      BQ = {},
      yQ = {},
      VQ = null,
      DQ = {
        mark: jQ,
        measure: jQ
      };
    try {
      "undefined" !== typeof window && (BQ = window), "undefined" !== typeof document && (yQ = document), "undefined" !== typeof MutationObserver && (VQ = MutationObserver), "undefined" !== typeof performance && (DQ = performance)
    } catch (eQ) {}
    var pQ, GQ, UQ = (BQ.navigator || {}).userAgent,
      bQ = void 0 === UQ ? "" : UQ,
      vQ = BQ,
      dQ = yQ,
      HQ = VQ,
      aQ = DQ,
      lQ = (vQ.document, !!dQ.documentElement && !!dQ.head && "function" === typeof dQ.addEventListener && "function" === typeof dQ.createElement),
      hQ = ~bQ.indexOf("MSIE") || ~bQ.indexOf("Trident/"),
      iQ = {
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
      cQ = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      AQ = "classic",
      RQ = "duotone",
      EQ = "sharp",
      CQ = "sharp-duotone",
      uQ = "chisel",
      LQ = "etch",
      kQ = "graphite",
      fQ = "jelly",
      SQ = "jelly-duo",
      tQ = "jelly-fill",
      oQ = "notdog",
      eQ = "notdog-duo",
      nQ = "slab",
      xQ = "slab-press",
      YQ = "thumbprint",
      NQ = "utility",
      ZQ = "utility-duo",
      OQ = "utility-fill",
      KQ = "whiteboard",
      mQ = [AQ, RQ, EQ, CQ, uQ, LQ, kQ, fQ, SQ, tQ, oQ, eQ, nQ, xQ, YQ, NQ, ZQ, OQ, KQ],
      MQ = (zQ(zQ(zQ(zQ(zQ(zQ(zQ(zQ(zQ(zQ(pQ = {}, AQ, "Classic"), RQ, "Duotone"), EQ, "Sharp"), CQ, "Sharp Duotone"), uQ, "Chisel"), LQ, "Etch"), kQ, "Graphite"), fQ, "Jelly"), SQ, "Jelly Duo"), tQ, "Jelly Fill"), zQ(zQ(zQ(zQ(zQ(zQ(zQ(zQ(zQ(pQ, oQ, "Notdog"), eQ, "Notdog Duo"), nQ, "Slab"), xQ, "Slab Press"), YQ, "Thumbprint"), NQ, "Utility"), ZQ, "Utility Duo"), OQ, "Utility Fill"), KQ, "Whiteboard"), new Map([
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
      QW = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      WW = {
        fak: "kit",
        "fa-kit": "kit"
      },
      XW = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      wW = (zQ(zQ({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      qW = {
        "kit-duotone": "fakd"
      },
      TW = "duotone-group",
      zW = "swap-opacity",
      sW = "primary",
      FW = "secondary",
      PW = (zQ(zQ(zQ(zQ(zQ(zQ(zQ(zQ(zQ(zQ(GQ = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), zQ(zQ(zQ(zQ(zQ(zQ(zQ(zQ(zQ(GQ, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), zQ(zQ({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      gW = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      JW = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      rW = JW.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      IW = [].concat(gQ(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", TW, zW, sW, FW]).concat(JW.map((function(QQ) {
        return "".concat(QQ, "x")
      }))).concat(rW.map((function(QQ) {
        return "w-".concat(QQ)
      }))),
      jW = "___FONT_AWESOME___",
      BW = "svg-inline--fa",
      yW = "data-fa-i2svg",
      VW = "data-fa-pseudo-element",
      DW = "data-prefix",
      pW = "data-icon",
      GW = "fontawesome-i2svg",
      UW = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      bW = ["::before", "::after", ":before", ":after"],
      vW = function() {
        try {
          return !0
        } catch (QQ) {
          return !1
        }
      }();

    function dW(QQ) {
      return new Proxy(QQ, {
        get: function(QQ, WQ) {
          return WQ in QQ ? QQ[WQ] : QQ[AQ]
        }
      })
    }
    var HW = FQ({}, iQ);
    HW[AQ] = FQ(FQ(FQ(FQ({}, {
      "fa-duotone": "duotone"
    }), iQ[AQ]), WW), XW);
    var aW = dW(HW),
      lW = FQ({}, {
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
    lW[AQ] = FQ(FQ(FQ(FQ({}, {
      duotone: "fad"
    }), lW[AQ]), wW), qW);
    var hW = dW(lW),
      iW = FQ({}, PW);
    iW[AQ] = FQ(FQ({}, iW[AQ]), {
      fak: "fa-kit"
    });
    var cW = dW(iW),
      AW = FQ({}, {
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
    AW[AQ] = FQ(FQ({}, AW[AQ]), {
      "fa-kit": "fak"
    });
    dW(AW);
    var RW = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      EW = "fa-layers-text",
      CW = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      uW = (dW(FQ({}, {
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
      LW = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      kW = [].concat(gQ(["kit"]), gQ(IW)),
      fW = vQ.FontAwesomeConfig || {};
    if (dQ && "function" === typeof dQ.querySelector) {
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
      ].forEach((function(QQ) {
        var WQ = PQ(QQ, 2),
          XQ = WQ[0],
          wQ = WQ[1],
          qQ = function(QQ) {
            return "" === QQ || "false" !== QQ && ("true" === QQ || QQ)
          }(function(QQ) {
            var WQ = dQ.querySelector("script[" + QQ + "]");
            if (WQ) return WQ.getAttribute(QQ)
          }(XQ));
        void 0 !== qQ && null !== qQ && (fW[wQ] = qQ)
      }))
    }
    var SW = {
      styleDefault: "solid",
      familyDefault: AQ,
      cssPrefix: "fa",
      replacementClass: BW,
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
    fW.familyPrefix && (fW.cssPrefix = fW.familyPrefix);
    var tW = FQ(FQ({}, SW), fW);
    tW.autoReplaceSvg || (tW.observeMutations = !1);
    var oW = {};
    Object.keys(SW).forEach((function(QQ) {
      Object.defineProperty(oW, QQ, {
        enumerable: !0,
        set: function(WQ) {
          tW[QQ] = WQ, eW.forEach((function(QQ) {
            return QQ(oW)
          }))
        },
        get: function() {
          return tW[QQ]
        }
      })
    })), Object.defineProperty(oW, "familyPrefix", {
      enumerable: !0,
      set: function(QQ) {
        tW.cssPrefix = QQ, eW.forEach((function(QQ) {
          return QQ(oW)
        }))
      },
      get: function() {
        return tW.cssPrefix
      }
    }), vQ.FontAwesomeConfig = oW;
    var eW = [];
    var nW = 16,
      xW = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function YW() {
      for (var QQ = 12, WQ = ""; QQ-- > 0;) WQ += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return WQ
    }

    function NW(QQ) {
      for (var WQ = [], XQ = (QQ || []).length >>> 0; XQ--;) WQ[XQ] = QQ[XQ];
      return WQ
    }

    function ZW(QQ) {
      return QQ.classList ? NW(QQ.classList) : (QQ.getAttribute("class") || "").split(" ").filter((function(QQ) {
        return QQ
      }))
    }

    function OW(QQ) {
      return "".concat(QQ).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function KW(QQ) {
      return Object.keys(QQ || {}).reduce((function(WQ, XQ) {
        return WQ + "".concat(XQ, ": ").concat(QQ[XQ].trim(), ";")
      }), "")
    }

    function mW(QQ) {
      return QQ.size !== xW.size || QQ.x !== xW.x || QQ.y !== xW.y || QQ.rotate !== xW.rotate || QQ.flipX || QQ.flipY
    }

    function MW() {
      var QQ = "fa",
        WQ = BW,
        XQ = oW.cssPrefix,
        wQ = oW.replacementClass,
        qQ = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (XQ !== QQ || wQ !== WQ) {
        var TQ = new RegExp("\\.".concat(QQ, "\\-"), "g"),
          zQ = new RegExp("\\--".concat(QQ, "\\-"), "g"),
          sQ = new RegExp("\\.".concat(WQ), "g");
        qQ = qQ.replace(TQ, ".".concat(XQ, "-")).replace(zQ, "--".concat(XQ, "-")).replace(sQ, ".".concat(wQ))
      }
      return qQ
    }
    var QX = !1;

    function WX() {
      oW.autoAddCss && !QX && (! function(QQ) {
        if (QQ && lQ) {
          var WQ = dQ.createElement("style");
          WQ.setAttribute("type", "text/css"), WQ.innerHTML = QQ;
          for (var XQ = dQ.head.childNodes, wQ = null, qQ = XQ.length - 1; qQ > -1; qQ--) {
            var TQ = XQ[qQ],
              zQ = (TQ.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(zQ) > -1 && (wQ = TQ)
          }
          dQ.head.insertBefore(WQ, wQ)
        }
      }(MW()), QX = !0)
    }
    var XX = {
        mixout: function() {
          return {
            dom: {
              css: MW,
              insertCss: WX
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              WX()
            },
            beforeI2svg: function() {
              WX()
            }
          }
        }
      },
      wX = vQ || {};
    wX[jW] || (wX[jW] = {}), wX[jW].styles || (wX[jW].styles = {}), wX[jW].hooks || (wX[jW].hooks = {}), wX[jW].shims || (wX[jW].shims = []);
    var qX = wX[jW],
      TX = [],
      zX = function() {
        dQ.removeEventListener("DOMContentLoaded", zX), sX = 1, TX.map((function(QQ) {
          return QQ()
        }))
      },
      sX = !1;

    function FX(QQ) {
      var WQ = QQ.tag,
        XQ = QQ.attributes,
        wQ = void 0 === XQ ? {} : XQ,
        qQ = QQ.children,
        TQ = void 0 === qQ ? [] : qQ;
      return "string" === typeof QQ ? OW(QQ) : "<".concat(WQ, " ").concat(function(QQ) {
        return Object.keys(QQ || {}).reduce((function(WQ, XQ) {
          return WQ + "".concat(XQ, '="').concat(OW(QQ[XQ]), '" ')
        }), "").trim()
      }(wQ), ">").concat(TQ.map(FX).join(""), "</").concat(WQ, ">")
    }

    function PX(QQ, WQ, XQ) {
      if (QQ && QQ[WQ] && QQ[WQ][XQ]) return {
        prefix: WQ,
        iconName: XQ,
        icon: QQ[WQ][XQ]
      }
    }
    lQ && ((sX = (dQ.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(dQ.readyState)) || dQ.addEventListener("DOMContentLoaded", zX));
    var gX = function(QQ, WQ, XQ, wQ) {
      var qQ, TQ, zQ, sQ = Object.keys(QQ),
        FQ = sQ.length,
        PQ = void 0 !== wQ ? function(QQ, WQ) {
          return function(XQ, wQ, qQ, TQ) {
            return QQ.call(WQ, XQ, wQ, qQ, TQ)
          }
        }(WQ, wQ) : WQ;
      for (void 0 === XQ ? (qQ = 1, zQ = QQ[sQ[0]]) : (qQ = 0, zQ = XQ); qQ < FQ; qQ++) zQ = PQ(zQ, QQ[TQ = sQ[qQ]], TQ, QQ);
      return zQ
    };

    function JX(QQ) {
      return 1 !== gQ(QQ).length ? null : QQ.codePointAt(0).toString(16)
    }

    function rX(QQ) {
      return Object.keys(QQ).reduce((function(WQ, XQ) {
        var wQ = QQ[XQ];
        return !!wQ.icon ? WQ[wQ.iconName] = wQ.icon : WQ[XQ] = wQ, WQ
      }), {})
    }

    function IX(QQ, WQ) {
      var XQ = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        wQ = void 0 !== XQ && XQ,
        qQ = rX(WQ);
      "function" !== typeof qX.hooks.addPack || wQ ? qX.styles[QQ] = FQ(FQ({}, qX.styles[QQ] || {}), qQ) : qX.hooks.addPack(QQ, rX(WQ)), "fas" === QQ && IX("fa", WQ)
    }
    var jX = qX.styles,
      BX = qX.shims,
      yX = Object.keys(cW),
      VX = yX.reduce((function(QQ, WQ) {
        return QQ[WQ] = Object.keys(cW[WQ]), QQ
      }), {}),
      DX = null,
      pX = {},
      GX = {},
      UX = {},
      bX = {},
      vX = {};

    function dX(QQ, WQ) {
      var XQ, wQ = WQ.split("-"),
        qQ = wQ[0],
        TQ = wQ.slice(1).join("-");
      return qQ !== QQ || "" === TQ || (XQ = TQ, ~kW.indexOf(XQ)) ? null : TQ
    }
    var HX, aX = function() {
      var QQ = function(QQ) {
        return gX(jX, (function(WQ, XQ, wQ) {
          return WQ[wQ] = gX(XQ, QQ, {}), WQ
        }), {})
      };
      pX = QQ((function(QQ, WQ, XQ) {
        (WQ[3] && (QQ[WQ[3]] = XQ), WQ[2]) && WQ[2].filter((function(QQ) {
          return "number" === typeof QQ
        })).forEach((function(WQ) {
          QQ[WQ.toString(16)] = XQ
        }));
        return QQ
      })), GX = QQ((function(QQ, WQ, XQ) {
        (QQ[XQ] = XQ, WQ[2]) && WQ[2].filter((function(QQ) {
          return "string" === typeof QQ
        })).forEach((function(WQ) {
          QQ[WQ] = XQ
        }));
        return QQ
      })), vX = QQ((function(QQ, WQ, XQ) {
        var wQ = WQ[2];
        return QQ[XQ] = XQ, wQ.forEach((function(WQ) {
          QQ[WQ] = XQ
        })), QQ
      }));
      var WQ = "far" in jX || oW.autoFetchSvg,
        XQ = gX(BX, (function(QQ, XQ) {
          var wQ = XQ[0],
            qQ = XQ[1],
            TQ = XQ[2];
          return "far" !== qQ || WQ || (qQ = "fas"), "string" === typeof wQ && (QQ.names[wQ] = {
            prefix: qQ,
            iconName: TQ
          }), "number" === typeof wQ && (QQ.unicodes[wQ.toString(16)] = {
            prefix: qQ,
            iconName: TQ
          }), QQ
        }), {
          names: {},
          unicodes: {}
        });
      UX = XQ.names, bX = XQ.unicodes, DX = AX(oW.styleDefault, {
        family: oW.familyDefault
      })
    };

    function lX(QQ, WQ) {
      return (pX[QQ] || {})[WQ]
    }

    function hX(QQ, WQ) {
      return (vX[QQ] || {})[WQ]
    }

    function iX(QQ) {
      return UX[QQ] || {
        prefix: null,
        iconName: null
      }
    }

    function cX() {
      return DX
    }
    HX = function(QQ) {
      DX = AX(QQ.styleDefault, {
        family: oW.familyDefault
      })
    }, eW.push(HX), aX();

    function AX(QQ) {
      var WQ = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        XQ = void 0 === WQ ? AQ : WQ,
        wQ = aW[XQ][QQ];
      if (XQ === RQ && !QQ) return "fad";
      var qQ = hW[XQ][QQ] || hW[XQ][wQ],
        TQ = QQ in qX.styles ? QQ : null;
      return qQ || TQ || null
    }

    function RX(QQ) {
      return QQ.sort().filter((function(QQ, WQ, XQ) {
        return XQ.indexOf(QQ) === WQ
      }))
    }
    var EX = gW.concat(QW);

    function CX(QQ) {
      var WQ = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        XQ = void 0 !== WQ && WQ,
        wQ = null,
        qQ = RX(QQ.filter((function(QQ) {
          return EX.includes(QQ)
        }))),
        TQ = RX(QQ.filter((function(QQ) {
          return !EX.includes(QQ)
        }))),
        zQ = PQ(qQ.filter((function(QQ) {
          return wQ = QQ, !cQ.includes(QQ)
        })), 1)[0],
        sQ = void 0 === zQ ? null : zQ,
        gQ = function(QQ) {
          var WQ = AQ,
            XQ = yX.reduce((function(QQ, WQ) {
              return QQ[WQ] = "".concat(oW.cssPrefix, "-").concat(WQ), QQ
            }), {});
          return mQ.forEach((function(wQ) {
            (QQ.includes(XQ[wQ]) || QQ.some((function(QQ) {
              return VX[wQ].includes(QQ)
            }))) && (WQ = wQ)
          })), WQ
        }(qQ),
        JQ = FQ(FQ({}, function(QQ) {
          var WQ = [],
            XQ = null;
          return QQ.forEach((function(QQ) {
            var wQ = dX(oW.cssPrefix, QQ);
            wQ ? XQ = wQ : QQ && WQ.push(QQ)
          })), {
            iconName: XQ,
            rest: WQ
          }
        }(TQ)), {}, {
          prefix: AX(sQ, {
            family: gQ
          })
        });
      return FQ(FQ(FQ({}, JQ), function(QQ) {
        var WQ = QQ.values,
          XQ = QQ.family,
          wQ = QQ.canonical,
          qQ = QQ.givenPrefix,
          TQ = void 0 === qQ ? "" : qQ,
          zQ = QQ.styles,
          sQ = void 0 === zQ ? {} : zQ,
          FQ = QQ.config,
          PQ = void 0 === FQ ? {} : FQ,
          gQ = XQ === RQ,
          JQ = WQ.includes("fa-duotone") || WQ.includes("fad"),
          rQ = "duotone" === PQ.familyDefault,
          IQ = "fad" === wQ.prefix || "fa-duotone" === wQ.prefix;
        !gQ && (JQ || rQ || IQ) && (wQ.prefix = "fad");
        (WQ.includes("fa-brands") || WQ.includes("fab")) && (wQ.prefix = "fab");
        if (!wQ.prefix && uX.includes(XQ)) {
          if (Object.keys(sQ).find((function(QQ) {
              return LX.includes(QQ)
            })) || PQ.autoFetchSvg) {
            var jQ = MQ.get(XQ).defaultShortPrefixId;
            wQ.prefix = jQ, wQ.iconName = hX(wQ.prefix, wQ.iconName) || wQ.iconName
          }
        }
        "fa" !== wQ.prefix && "fa" !== TQ || (wQ.prefix = cX() || "fas");
        return wQ
      }({
        values: QQ,
        family: gQ,
        styles: jX,
        config: oW,
        canonical: JQ,
        givenPrefix: wQ
      })), function(QQ, WQ, XQ) {
        var wQ = XQ.prefix,
          qQ = XQ.iconName;
        if (QQ || !wQ || !qQ) return {
          prefix: wQ,
          iconName: qQ
        };
        var TQ = "fa" === WQ ? iX(qQ) : {},
          zQ = hX(wQ, qQ);
        qQ = TQ.iconName || zQ || qQ, "far" !== (wQ = TQ.prefix || wQ) || jX.far || !jX.fas || oW.autoFetchSvg || (wQ = "fas");
        return {
          prefix: wQ,
          iconName: qQ
        }
      }(XQ, wQ, JQ))
    }
    var uX = mQ.filter((function(QQ) {
        return QQ !== AQ || QQ !== RQ
      })),
      LX = Object.keys(PW).filter((function(QQ) {
        return QQ !== AQ
      })).map((function(QQ) {
        return Object.keys(PW[QQ])
      })).flat();
    var kX = function() {
        return function(QQ, WQ, XQ) {
          return WQ && qQ(QQ.prototype, WQ), XQ && qQ(QQ, XQ), Object.defineProperty(QQ, "prototype", {
            writable: !1
          }), QQ
        }((function QQ() {
          ! function(QQ, WQ) {
            if (!(QQ instanceof WQ)) throw new TypeError("Cannot call a class as a function")
          }(this, QQ), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var QQ = this, WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
            var qQ = XQ.reduce(this._pullDefinitions, {});
            Object.keys(qQ).forEach((function(WQ) {
              QQ.definitions[WQ] = FQ(FQ({}, QQ.definitions[WQ] || {}), qQ[WQ]), IX(WQ, qQ[WQ]);
              var XQ = cW[AQ][WQ];
              XQ && IX(XQ, qQ[WQ]), aX()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(QQ, WQ) {
            var XQ = WQ.prefix && WQ.iconName && WQ.icon ? {
              0: WQ
            } : WQ;
            return Object.keys(XQ).map((function(WQ) {
              var wQ = XQ[WQ],
                qQ = wQ.prefix,
                TQ = wQ.iconName,
                zQ = wQ.icon,
                sQ = zQ[2];
              QQ[qQ] || (QQ[qQ] = {}), sQ.length > 0 && sQ.forEach((function(WQ) {
                "string" === typeof WQ && (QQ[qQ][WQ] = zQ)
              })), QQ[qQ][TQ] = zQ
            })), QQ
          }
        }])
      }(),
      fX = [],
      SX = {},
      tX = {},
      oX = Object.keys(tX);

    function eX(QQ, WQ) {
      for (var XQ = arguments.length, wQ = new Array(XQ > 2 ? XQ - 2 : 0), qQ = 2; qQ < XQ; qQ++) wQ[qQ - 2] = arguments[qQ];
      return (SX[QQ] || []).forEach((function(QQ) {
        WQ = QQ.apply(null, [WQ].concat(wQ))
      })), WQ
    }

    function nX(QQ) {
      for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
      (SX[QQ] || []).forEach((function(QQ) {
        QQ.apply(null, XQ)
      }))
    }

    function xX() {
      var QQ = arguments[0],
        WQ = Array.prototype.slice.call(arguments, 1);
      return tX[QQ] ? tX[QQ].apply(null, WQ) : void 0
    }

    function YX(QQ) {
      "fa" === QQ.prefix && (QQ.prefix = "fas");
      var WQ = QQ.iconName,
        XQ = QQ.prefix || cX();
      if (WQ) return WQ = hX(XQ, WQ) || WQ, PX(NX.definitions, XQ, WQ) || PX(qX.styles, XQ, WQ)
    }
    var NX = new kX,
      ZX = {
        i2svg: function() {
          var QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return lQ ? (nX("beforeI2svg", QQ), xX("pseudoElements2svg", QQ), xX("i2svg", QQ)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var QQ, WQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            XQ = WQ.autoReplaceSvgRoot;
          !1 === oW.autoReplaceSvg && (oW.autoReplaceSvg = !0), oW.observeMutations = !0, QQ = function() {
            KX({
              autoReplaceSvgRoot: XQ
            }), nX("watch", WQ)
          }, lQ && (sX ? setTimeout(QQ, 0) : TX.push(QQ))
        }
      },
      OX = {
        noAuto: function() {
          oW.autoReplaceSvg = !1, oW.observeMutations = !1, nX("noAuto")
        },
        config: oW,
        dom: ZX,
        parse: {
          icon: function(QQ) {
            if (null === QQ) return null;
            if ("object" === rQ(QQ) && QQ.prefix && QQ.iconName) return {
              prefix: QQ.prefix,
              iconName: hX(QQ.prefix, QQ.iconName) || QQ.iconName
            };
            if (Array.isArray(QQ) && 2 === QQ.length) {
              var WQ = 0 === QQ[1].indexOf("fa-") ? QQ[1].slice(3) : QQ[1],
                XQ = AX(QQ[0]);
              return {
                prefix: XQ,
                iconName: hX(XQ, WQ) || WQ
              }
            }
            if ("string" === typeof QQ && (QQ.indexOf("".concat(oW.cssPrefix, "-")) > -1 || QQ.match(RW))) {
              var wQ = CX(QQ.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: wQ.prefix || cX(),
                iconName: hX(wQ.prefix, wQ.iconName) || wQ.iconName
              }
            }
            if ("string" === typeof QQ) {
              var qQ = cX();
              return {
                prefix: qQ,
                iconName: hX(qQ, QQ) || QQ
              }
            }
          }
        },
        library: NX,
        findIconDefinition: YX,
        toHtml: FX
      },
      KX = function() {
        var QQ = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          WQ = void 0 === QQ ? dQ : QQ;
        (Object.keys(qX.styles).length > 0 || oW.autoFetchSvg) && lQ && oW.autoReplaceSvg && OX.dom.i2svg({
          node: WQ
        })
      };

    function mX(QQ, WQ) {
      return Object.defineProperty(QQ, "abstract", {
        get: WQ
      }), Object.defineProperty(QQ, "html", {
        get: function() {
          return QQ.abstract.map((function(QQ) {
            return FX(QQ)
          }))
        }
      }), Object.defineProperty(QQ, "node", {
        get: function() {
          if (lQ) {
            var WQ = dQ.createElement("div");
            return WQ.innerHTML = QQ.html, WQ.children
          }
        }
      }), QQ
    }

    function MX(QQ) {
      var WQ = QQ.icons,
        XQ = WQ.main,
        wQ = WQ.mask,
        qQ = QQ.prefix,
        TQ = QQ.iconName,
        zQ = QQ.transform,
        sQ = QQ.symbol,
        PQ = QQ.maskId,
        gQ = QQ.extra,
        JQ = QQ.watchable,
        rQ = void 0 !== JQ && JQ,
        IQ = wQ.found ? wQ : XQ,
        jQ = IQ.width,
        BQ = IQ.height,
        yQ = [oW.replacementClass, TQ ? "".concat(oW.cssPrefix, "-").concat(TQ) : ""].filter((function(QQ) {
          return -1 === gQ.classes.indexOf(QQ)
        })).filter((function(QQ) {
          return "" !== QQ || !!QQ
        })).concat(gQ.classes).join(" "),
        VQ = {
          children: [],
          attributes: FQ(FQ({}, gQ.attributes), {}, {
            "data-prefix": qQ,
            "data-icon": TQ,
            class: yQ,
            role: gQ.attributes.role || "img",
            viewBox: "0 0 ".concat(jQ, " ").concat(BQ)
          })
        };
      (function(QQ) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(WQ) {
          return WQ in QQ
        }))
      })(gQ.attributes) || gQ.attributes["aria-hidden"] || (VQ.attributes["aria-hidden"] = "true"), rQ && (VQ.attributes[yW] = "");
      var DQ = FQ(FQ({}, VQ), {}, {
          prefix: qQ,
          iconName: TQ,
          main: XQ,
          mask: wQ,
          maskId: PQ,
          transform: zQ,
          symbol: sQ,
          styles: FQ({}, gQ.styles)
        }),
        pQ = wQ.found && XQ.found ? xX("generateAbstractMask", DQ) || {
          children: [],
          attributes: {}
        } : xX("generateAbstractIcon", DQ) || {
          children: [],
          attributes: {}
        },
        GQ = pQ.children,
        UQ = pQ.attributes;
      return DQ.children = GQ, DQ.attributes = UQ, sQ ? function(QQ) {
        var WQ = QQ.prefix,
          XQ = QQ.iconName,
          wQ = QQ.children,
          qQ = QQ.attributes,
          TQ = QQ.symbol,
          zQ = !0 === TQ ? "".concat(WQ, "-").concat(oW.cssPrefix, "-").concat(XQ) : TQ;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: FQ(FQ({}, qQ), {}, {
              id: zQ
            }),
            children: wQ
          }]
        }]
      }(DQ) : function(QQ) {
        var WQ = QQ.children,
          XQ = QQ.main,
          wQ = QQ.mask,
          qQ = QQ.attributes,
          TQ = QQ.styles,
          zQ = QQ.transform;
        if (mW(zQ) && XQ.found && !wQ.found) {
          var sQ = {
            x: XQ.width / XQ.height / 2,
            y: .5
          };
          qQ.style = KW(FQ(FQ({}, TQ), {}, {
            "transform-origin": "".concat(sQ.x + zQ.x / 16, "em ").concat(sQ.y + zQ.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: qQ,
          children: WQ
        }]
      }(DQ)
    }

    function Qw(QQ) {
      var WQ = QQ.content,
        XQ = QQ.width,
        wQ = QQ.height,
        qQ = QQ.transform,
        TQ = QQ.extra,
        zQ = QQ.watchable,
        sQ = void 0 !== zQ && zQ,
        PQ = FQ(FQ({}, TQ.attributes), {}, {
          class: TQ.classes.join(" ")
        });
      sQ && (PQ[yW] = "");
      var gQ = FQ({}, TQ.styles);
      mW(qQ) && (gQ.transform = function(QQ) {
        var WQ = QQ.transform,
          XQ = QQ.width,
          wQ = void 0 === XQ ? 16 : XQ,
          qQ = QQ.height,
          TQ = void 0 === qQ ? 16 : qQ,
          zQ = QQ.startCentered,
          sQ = void 0 !== zQ && zQ,
          FQ = "";
        return FQ += sQ && hQ ? "translate(".concat(WQ.x / nW - wQ / 2, "em, ").concat(WQ.y / nW - TQ / 2, "em) ") : sQ ? "translate(calc(-50% + ".concat(WQ.x / nW, "em), calc(-50% + ").concat(WQ.y / nW, "em)) ") : "translate(".concat(WQ.x / nW, "em, ").concat(WQ.y / nW, "em) "), FQ += "scale(".concat(WQ.size / nW * (WQ.flipX ? -1 : 1), ", ").concat(WQ.size / nW * (WQ.flipY ? -1 : 1), ") "), FQ + "rotate(".concat(WQ.rotate, "deg) ")
      }({
        transform: qQ,
        startCentered: !0,
        width: XQ,
        height: wQ
      }), gQ["-webkit-transform"] = gQ.transform);
      var JQ = KW(gQ);
      JQ.length > 0 && (PQ.style = JQ);
      var rQ = [];
      return rQ.push({
        tag: "span",
        attributes: PQ,
        children: [WQ]
      }), rQ
    }
    var Ww = qX.styles;

    function Xw(QQ) {
      var WQ = QQ[0],
        XQ = QQ[1],
        wQ = PQ(QQ.slice(4), 1)[0];
      return {
        found: !0,
        width: WQ,
        height: XQ,
        icon: Array.isArray(wQ) ? {
          tag: "g",
          attributes: {
            class: "".concat(oW.cssPrefix, "-").concat(LW.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(oW.cssPrefix, "-").concat(LW.SECONDARY),
              fill: "currentColor",
              d: wQ[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(oW.cssPrefix, "-").concat(LW.PRIMARY),
              fill: "currentColor",
              d: wQ[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: wQ
          }
        }
      }
    }
    var ww = {
      found: !1,
      width: 512,
      height: 512
    };

    function qw(QQ, WQ) {
      var XQ = WQ;
      return "fa" === WQ && null !== oW.styleDefault && (WQ = cX()), new Promise((function(wQ, qQ) {
        if ("fa" === XQ) {
          var TQ = iX(QQ) || {};
          QQ = TQ.iconName || QQ, WQ = TQ.prefix || WQ
        }
        if (QQ && WQ && Ww[WQ] && Ww[WQ][QQ]) return wQ(Xw(Ww[WQ][QQ]));
        ! function(QQ, WQ) {
          vW || oW.showMissingIcons || !QQ || console.error('Icon with name "'.concat(QQ, '" and prefix "').concat(WQ, '" is missing.'))
        }(QQ, WQ), wQ(FQ(FQ({}, ww), {}, {
          icon: oW.showMissingIcons && QQ && xX("missingIconAbstract") || {}
        }))
      }))
    }
    var Tw = function() {},
      zw = oW.measurePerformance && aQ && aQ.mark && aQ.measure ? aQ : {
        mark: Tw,
        measure: Tw
      },
      sw = 'FA "7.2.0"',
      Fw = function(QQ) {
        zw.mark("".concat(sw, " ").concat(QQ, " ends")), zw.measure("".concat(sw, " ").concat(QQ), "".concat(sw, " ").concat(QQ, " begins"), "".concat(sw, " ").concat(QQ, " ends"))
      },
      Pw = function(QQ) {
        return zw.mark("".concat(sw, " ").concat(QQ, " begins")),
          function() {
            return Fw(QQ)
          }
      },
      gw = function() {};

    function Jw(QQ) {
      return "string" === typeof(QQ.getAttribute ? QQ.getAttribute(yW) : null)
    }

    function rw(QQ) {
      return dQ.createElementNS("http://www.w3.org/2000/svg", QQ)
    }

    function Iw(QQ) {
      return dQ.createElement(QQ)
    }

    function jw(QQ) {
      var WQ = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        XQ = void 0 === WQ ? "svg" === QQ.tag ? rw : Iw : WQ;
      if ("string" === typeof QQ) return dQ.createTextNode(QQ);
      var wQ = XQ(QQ.tag);
      return Object.keys(QQ.attributes || []).forEach((function(WQ) {
        wQ.setAttribute(WQ, QQ.attributes[WQ])
      })), (QQ.children || []).forEach((function(QQ) {
        wQ.appendChild(jw(QQ, {
          ceFn: XQ
        }))
      })), wQ
    }
    var Bw = {
      replace: function(QQ) {
        var WQ = QQ[0];
        if (WQ.parentNode)
          if (QQ[1].forEach((function(QQ) {
              WQ.parentNode.insertBefore(jw(QQ), WQ)
            })), null === WQ.getAttribute(yW) && oW.keepOriginalSource) {
            var XQ = dQ.createComment(function(QQ) {
              var WQ = " ".concat(QQ.outerHTML, " ");
              return "".concat(WQ, "Font Awesome fontawesome.com ")
            }(WQ));
            WQ.parentNode.replaceChild(XQ, WQ)
          } else WQ.remove()
      },
      nest: function(QQ) {
        var WQ = QQ[0],
          XQ = QQ[1];
        if (~ZW(WQ).indexOf(oW.replacementClass)) return Bw.replace(QQ);
        var wQ = new RegExp("".concat(oW.cssPrefix, "-.*"));
        if (delete XQ[0].attributes.id, XQ[0].attributes.class) {
          var qQ = XQ[0].attributes.class.split(" ").reduce((function(QQ, WQ) {
            return WQ === oW.replacementClass || WQ.match(wQ) ? QQ.toSvg.push(WQ) : QQ.toNode.push(WQ), QQ
          }), {
            toNode: [],
            toSvg: []
          });
          XQ[0].attributes.class = qQ.toSvg.join(" "), 0 === qQ.toNode.length ? WQ.removeAttribute("class") : WQ.setAttribute("class", qQ.toNode.join(" "))
        }
        var TQ = XQ.map((function(QQ) {
          return FX(QQ)
        })).join("\n");
        WQ.setAttribute(yW, ""), WQ.innerHTML = TQ
      }
    };

    function yw(QQ) {
      QQ()
    }

    function Vw(QQ, WQ) {
      var XQ = "function" === typeof WQ ? WQ : gw;
      if (0 === QQ.length) XQ();
      else {
        var wQ = yw;
        "async" === oW.mutateApproach && (wQ = vQ.requestAnimationFrame || yw), wQ((function() {
          var WQ = !0 === oW.autoReplaceSvg ? Bw.replace : Bw[oW.autoReplaceSvg] || Bw.replace,
            wQ = Pw("mutate");
          QQ.map(WQ), wQ(), XQ()
        }))
      }
    }
    var Dw = !1;

    function pw() {
      Dw = !0
    }

    function Gw() {
      Dw = !1
    }
    var Uw = null;

    function bw(QQ) {
      if (HQ && oW.observeMutations) {
        var WQ = QQ.treeCallback,
          XQ = void 0 === WQ ? gw : WQ,
          wQ = QQ.nodeCallback,
          qQ = void 0 === wQ ? gw : wQ,
          TQ = QQ.pseudoElementsCallback,
          zQ = void 0 === TQ ? gw : TQ,
          sQ = QQ.observeMutationsRoot,
          FQ = void 0 === sQ ? dQ : sQ;
        Uw = new HQ((function(QQ) {
          if (!Dw) {
            var WQ = cX();
            NW(QQ).forEach((function(QQ) {
              if ("childList" === QQ.type && QQ.addedNodes.length > 0 && !Jw(QQ.addedNodes[0]) && (oW.searchPseudoElements && zQ(QQ.target), XQ(QQ.target)), "attributes" === QQ.type && QQ.target.parentNode && oW.searchPseudoElements && zQ([QQ.target], !0), "attributes" === QQ.type && Jw(QQ.target) && ~uW.indexOf(QQ.attributeName))
                if ("class" === QQ.attributeName && function(QQ) {
                    var WQ = QQ.getAttribute ? QQ.getAttribute(DW) : null,
                      XQ = QQ.getAttribute ? QQ.getAttribute(pW) : null;
                    return WQ && XQ
                  }(QQ.target)) {
                  var wQ = CX(ZW(QQ.target)),
                    TQ = wQ.prefix,
                    sQ = wQ.iconName;
                  QQ.target.setAttribute(DW, TQ || WQ), sQ && QQ.target.setAttribute(pW, sQ)
                } else(FQ = QQ.target) && FQ.classList && FQ.classList.contains && FQ.classList.contains(oW.replacementClass) && qQ(QQ.target);
              var FQ
            }))
          }
        })), lQ && Uw.observe(FQ, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function vw(QQ) {
      var WQ, XQ, wQ = QQ.getAttribute("data-prefix"),
        qQ = QQ.getAttribute("data-icon"),
        TQ = void 0 !== QQ.innerText ? QQ.innerText.trim() : "",
        zQ = CX(ZW(QQ));
      return zQ.prefix || (zQ.prefix = cX()), wQ && qQ && (zQ.prefix = wQ, zQ.iconName = qQ), zQ.iconName && zQ.prefix || (zQ.prefix && TQ.length > 0 && (zQ.iconName = (WQ = zQ.prefix, XQ = QQ.innerText, (GX[WQ] || {})[XQ] || lX(zQ.prefix, JX(QQ.innerText)))), !zQ.iconName && oW.autoFetchSvg && QQ.firstChild && QQ.firstChild.nodeType === Node.TEXT_NODE && (zQ.iconName = QQ.firstChild.data)), zQ
    }

    function dw(QQ) {
      var WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        XQ = vw(QQ),
        wQ = XQ.iconName,
        qQ = XQ.prefix,
        TQ = XQ.rest,
        zQ = function(QQ) {
          return NW(QQ.attributes).reduce((function(QQ, WQ) {
            return "class" !== QQ.name && "style" !== QQ.name && (QQ[WQ.name] = WQ.value), QQ
          }), {})
        }(QQ),
        sQ = eX("parseNodeAttributes", {}, QQ),
        PQ = WQ.styleParser ? function(QQ) {
          var WQ = QQ.getAttribute("style"),
            XQ = [];
          return WQ && (XQ = WQ.split(";").reduce((function(QQ, WQ) {
            var XQ = WQ.split(":"),
              wQ = XQ[0],
              qQ = XQ.slice(1);
            return wQ && qQ.length > 0 && (QQ[wQ] = qQ.join(":").trim()), QQ
          }), {})), XQ
        }(QQ) : [];
      return FQ({
        iconName: wQ,
        prefix: qQ,
        transform: xW,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: TQ,
          styles: PQ,
          attributes: zQ
        }
      }, sQ)
    }
    var Hw = qX.styles;

    function aw(QQ) {
      var WQ = "nest" === oW.autoReplaceSvg ? dw(QQ, {
        styleParser: !1
      }) : dw(QQ);
      return ~WQ.extra.classes.indexOf(EW) ? xX("generateLayersText", QQ, WQ) : xX("generateSvgReplacementMutation", QQ, WQ)
    }

    function lw(QQ) {
      var WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!lQ) return Promise.resolve();
      var XQ = dQ.documentElement.classList,
        wQ = function(QQ) {
          return XQ.add("".concat(GW, "-").concat(QQ))
        },
        qQ = function(QQ) {
          return XQ.remove("".concat(GW, "-").concat(QQ))
        },
        TQ = oW.autoFetchSvg ? [].concat(gQ(QW), gQ(gW)) : cQ.concat(Object.keys(Hw));
      TQ.includes("fa") || TQ.push("fa");
      var zQ = [".".concat(EW, ":not([").concat(yW, "])")].concat(TQ.map((function(QQ) {
        return ".".concat(QQ, ":not([").concat(yW, "])")
      }))).join(", ");
      if (0 === zQ.length) return Promise.resolve();
      var sQ = [];
      try {
        sQ = NW(QQ.querySelectorAll(zQ))
      } catch (JQ) {}
      if (!(sQ.length > 0)) return Promise.resolve();
      wQ("pending"), qQ("complete");
      var FQ = Pw("onTree"),
        PQ = sQ.reduce((function(QQ, WQ) {
          try {
            var XQ = aw(WQ);
            XQ && QQ.push(XQ)
          } catch (JQ) {
            vW || "MissingIcon" === JQ.name && console.error(JQ)
          }
          return QQ
        }), []);
      return new Promise((function(QQ, XQ) {
        Promise.all(PQ).then((function(XQ) {
          Vw(XQ, (function() {
            wQ("active"), wQ("complete"), qQ("pending"), "function" === typeof WQ && WQ(), FQ(), QQ()
          }))
        })).catch((function(QQ) {
          FQ(), XQ(QQ)
        }))
      }))
    }

    function hw(QQ) {
      var WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      aw(QQ).then((function(QQ) {
        QQ && Vw([QQ], WQ)
      }))
    }
    var iw = function(QQ) {
        var WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          XQ = WQ.transform,
          wQ = void 0 === XQ ? xW : XQ,
          qQ = WQ.symbol,
          TQ = void 0 !== qQ && qQ,
          zQ = WQ.mask,
          sQ = void 0 === zQ ? null : zQ,
          PQ = WQ.maskId,
          gQ = void 0 === PQ ? null : PQ,
          JQ = WQ.classes,
          rQ = void 0 === JQ ? [] : JQ,
          IQ = WQ.attributes,
          jQ = void 0 === IQ ? {} : IQ,
          BQ = WQ.styles,
          yQ = void 0 === BQ ? {} : BQ;
        if (QQ) {
          var VQ = QQ.prefix,
            DQ = QQ.iconName,
            pQ = QQ.icon;
          return mX(FQ({
            type: "icon"
          }, QQ), (function() {
            return nX("beforeDOMElementCreation", {
              iconDefinition: QQ,
              params: WQ
            }), MX({
              icons: {
                main: Xw(pQ),
                mask: sQ ? Xw(sQ.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: VQ,
              iconName: DQ,
              transform: FQ(FQ({}, xW), wQ),
              symbol: TQ,
              maskId: gQ,
              extra: {
                attributes: jQ,
                styles: yQ,
                classes: rQ
              }
            })
          }))
        }
      },
      Aw = {
        mixout: function() {
          return {
            icon: (QQ = iw, function(WQ) {
              var XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                wQ = (WQ || {}).icon ? WQ : YX(WQ || {}),
                qQ = XQ.mask;
              return qQ && (qQ = (qQ || {}).icon ? qQ : YX(qQ || {})), QQ(wQ, FQ(FQ({}, XQ), {}, {
                mask: qQ
              }))
            })
          };
          var QQ
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(QQ) {
              return QQ.treeCallback = lw, QQ.nodeCallback = hw, QQ
            }
          }
        },
        provides: function(QQ) {
          QQ.i2svg = function(QQ) {
            var WQ = QQ.node,
              XQ = void 0 === WQ ? dQ : WQ,
              wQ = QQ.callback;
            return lw(XQ, void 0 === wQ ? function() {} : wQ)
          }, QQ.generateSvgReplacementMutation = function(QQ, WQ) {
            var XQ = WQ.iconName,
              wQ = WQ.prefix,
              qQ = WQ.transform,
              TQ = WQ.symbol,
              zQ = WQ.mask,
              sQ = WQ.maskId,
              FQ = WQ.extra;
            return new Promise((function(WQ, gQ) {
              Promise.all([qw(XQ, wQ), zQ.iconName ? qw(zQ.iconName, zQ.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(zQ) {
                var gQ = PQ(zQ, 2),
                  JQ = gQ[0],
                  rQ = gQ[1];
                WQ([QQ, MX({
                  icons: {
                    main: JQ,
                    mask: rQ
                  },
                  prefix: wQ,
                  iconName: XQ,
                  transform: qQ,
                  symbol: TQ,
                  maskId: sQ,
                  extra: FQ,
                  watchable: !0
                })])
              })).catch(gQ)
            }))
          }, QQ.generateAbstractIcon = function(QQ) {
            var WQ, XQ = QQ.children,
              wQ = QQ.attributes,
              qQ = QQ.main,
              TQ = QQ.transform,
              zQ = KW(QQ.styles);
            return zQ.length > 0 && (wQ.style = zQ), mW(TQ) && (WQ = xX("generateAbstractTransformGrouping", {
              main: qQ,
              transform: TQ,
              containerWidth: qQ.width,
              iconWidth: qQ.width
            })), XQ.push(WQ || qQ.icon), {
              children: XQ,
              attributes: wQ
            }
          }
        }
      },
      Rw = {
        mixout: function() {
          return {
            layer: function(QQ) {
              var WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                XQ = WQ.classes,
                wQ = void 0 === XQ ? [] : XQ;
              return mX({
                type: "layer"
              }, (function() {
                nX("beforeDOMElementCreation", {
                  assembler: QQ,
                  params: WQ
                });
                var XQ = [];
                return QQ((function(QQ) {
                  Array.isArray(QQ) ? QQ.map((function(QQ) {
                    XQ = XQ.concat(QQ.abstract)
                  })) : XQ = XQ.concat(QQ.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(oW.cssPrefix, "-layers")].concat(gQ(wQ)).join(" ")
                  },
                  children: XQ
                }]
              }))
            }
          }
        }
      },
      Ew = {
        mixout: function() {
          return {
            counter: function(QQ) {
              var WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                XQ = WQ.title,
                wQ = void 0 === XQ ? null : XQ,
                qQ = WQ.classes,
                TQ = void 0 === qQ ? [] : qQ,
                zQ = WQ.attributes,
                sQ = void 0 === zQ ? {} : zQ,
                PQ = WQ.styles,
                JQ = void 0 === PQ ? {} : PQ;
              return mX({
                type: "counter",
                content: QQ
              }, (function() {
                return nX("beforeDOMElementCreation", {
                    content: QQ,
                    params: WQ
                  }),
                  function(QQ) {
                    var WQ = QQ.content,
                      XQ = QQ.extra,
                      wQ = FQ(FQ({}, XQ.attributes), {}, {
                        class: XQ.classes.join(" ")
                      }),
                      qQ = KW(XQ.styles);
                    qQ.length > 0 && (wQ.style = qQ);
                    var TQ = [];
                    return TQ.push({
                      tag: "span",
                      attributes: wQ,
                      children: [WQ]
                    }), TQ
                  }({
                    content: QQ.toString(),
                    title: wQ,
                    extra: {
                      attributes: sQ,
                      styles: JQ,
                      classes: ["".concat(oW.cssPrefix, "-layers-counter")].concat(gQ(TQ))
                    }
                  })
              }))
            }
          }
        }
      },
      Cw = {
        mixout: function() {
          return {
            text: function(QQ) {
              var WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                XQ = WQ.transform,
                wQ = void 0 === XQ ? xW : XQ,
                qQ = WQ.classes,
                TQ = void 0 === qQ ? [] : qQ,
                zQ = WQ.attributes,
                sQ = void 0 === zQ ? {} : zQ,
                PQ = WQ.styles,
                JQ = void 0 === PQ ? {} : PQ;
              return mX({
                type: "text",
                content: QQ
              }, (function() {
                return nX("beforeDOMElementCreation", {
                  content: QQ,
                  params: WQ
                }), Qw({
                  content: QQ,
                  transform: FQ(FQ({}, xW), wQ),
                  extra: {
                    attributes: sQ,
                    styles: JQ,
                    classes: ["".concat(oW.cssPrefix, "-layers-text")].concat(gQ(TQ))
                  }
                })
              }))
            }
          }
        },
        provides: function(QQ) {
          QQ.generateLayersText = function(QQ, WQ) {
            var XQ = WQ.transform,
              wQ = WQ.extra,
              qQ = null,
              TQ = null;
            if (hQ) {
              var zQ = parseInt(getComputedStyle(QQ).fontSize, 10),
                sQ = QQ.getBoundingClientRect();
              qQ = sQ.width / zQ, TQ = sQ.height / zQ
            }
            return Promise.resolve([QQ, Qw({
              content: QQ.innerHTML,
              width: qQ,
              height: TQ,
              transform: XQ,
              extra: wQ,
              watchable: !0
            })])
          }
        }
      },
      uw = new RegExp('"', "ug"),
      Lw = [1105920, 1112319],
      kw = FQ(FQ(FQ(FQ({}, {
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
      fw = Object.keys(kw).reduce((function(QQ, WQ) {
        return QQ[WQ.toLowerCase()] = kw[WQ], QQ
      }), {}),
      Sw = Object.keys(fw).reduce((function(QQ, WQ) {
        var XQ = fw[WQ];
        return QQ[WQ] = XQ[900] || gQ(Object.entries(XQ))[0][1], QQ
      }), {});

    function tw(QQ, WQ) {
      var XQ = "".concat("data-fa-pseudo-element-pending").concat(WQ.replace(":", "-"));
      return new Promise((function(wQ, qQ) {
        if (null !== QQ.getAttribute(XQ)) return wQ();
        var TQ = NW(QQ.children).filter((function(QQ) {
            return QQ.getAttribute(VW) === WQ
          }))[0],
          zQ = vQ.getComputedStyle(QQ, WQ),
          sQ = zQ.getPropertyValue("font-family"),
          PQ = sQ.match(CW),
          JQ = zQ.getPropertyValue("font-weight"),
          rQ = zQ.getPropertyValue("content");
        if (TQ && !PQ) return QQ.removeChild(TQ), wQ();
        if (PQ && "none" !== rQ && "" !== rQ) {
          var IQ = zQ.getPropertyValue("content"),
            jQ = function(QQ, WQ) {
              var XQ = QQ.replace(/^['"]|['"]$/g, "").toLowerCase(),
                wQ = parseInt(WQ),
                qQ = isNaN(wQ) ? "normal" : wQ;
              return (fw[XQ] || {})[qQ] || Sw[XQ]
            }(sQ, JQ),
            BQ = function(QQ) {
              return JX(gQ(QQ.replace(uw, ""))[0] || "")
            }(IQ),
            yQ = PQ[0].startsWith("FontAwesome"),
            VQ = function(QQ) {
              var WQ = QQ.getPropertyValue("font-feature-settings").includes("ss01"),
                XQ = QQ.getPropertyValue("content").replace(uw, ""),
                wQ = XQ.codePointAt(0),
                qQ = wQ >= Lw[0] && wQ <= Lw[1],
                TQ = 2 === XQ.length && XQ[0] === XQ[1];
              return qQ || TQ || WQ
            }(zQ),
            DQ = lX(jQ, BQ),
            pQ = DQ;
          if (yQ) {
            var GQ = function(QQ) {
              var WQ = bX[QQ],
                XQ = lX("fas", QQ);
              return WQ || (XQ ? {
                prefix: "fas",
                iconName: XQ
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(BQ);
            GQ.iconName && GQ.prefix && (DQ = GQ.iconName, jQ = GQ.prefix)
          }
          if (!DQ || VQ || TQ && TQ.getAttribute(DW) === jQ && TQ.getAttribute(pW) === pQ) wQ();
          else {
            QQ.setAttribute(XQ, pQ), TQ && QQ.removeChild(TQ);
            var UQ = {
                iconName: null,
                prefix: null,
                transform: xW,
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
              bQ = UQ.extra;
            bQ.attributes[VW] = WQ, qw(DQ, jQ).then((function(qQ) {
              var TQ = MX(FQ(FQ({}, UQ), {}, {
                  icons: {
                    main: qQ,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: jQ,
                  iconName: pQ,
                  extra: bQ,
                  watchable: !0
                })),
                zQ = dQ.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === WQ ? QQ.insertBefore(zQ, QQ.firstChild) : QQ.appendChild(zQ), zQ.outerHTML = TQ.map((function(QQ) {
                return FX(QQ)
              })).join("\n"), QQ.removeAttribute(XQ), wQ()
            })).catch(qQ)
          }
        } else wQ()
      }))
    }

    function ow(QQ) {
      return Promise.all([tw(QQ, "::before"), tw(QQ, "::after")])
    }

    function ew(QQ) {
      return QQ.parentNode !== document.head && !~UW.indexOf(QQ.tagName.toUpperCase()) && !QQ.getAttribute(VW) && (!QQ.parentNode || "svg" !== QQ.parentNode.tagName)
    }
    var nw = function(QQ) {
        return !!QQ && bW.some((function(WQ) {
          return QQ.includes(WQ)
        }))
      },
      xw = function(QQ) {
        if (!QQ) return [];
        var WQ = new Set,
          XQ = QQ.split(/,(?![^()]*\))/).map((function(QQ) {
            return QQ.trim()
          }));
        XQ = XQ.flatMap((function(QQ) {
          return QQ.includes("(") ? QQ : QQ.split(",").map((function(QQ) {
            return QQ.trim()
          }))
        }));
        var wQ, qQ = TQ(XQ);
        try {
          for (qQ.s(); !(wQ = qQ.n()).done;) {
            var zQ = wQ.value;
            if (nw(zQ)) {
              var sQ = bW.reduce((function(QQ, WQ) {
                return QQ.replace(WQ, "")
              }), zQ);
              "" !== sQ && "*" !== sQ && WQ.add(sQ)
            }
          }
        } catch (FQ) {
          qQ.e(FQ)
        } finally {
          qQ.f()
        }
        return WQ
      };

    function Yw(QQ) {
      if (lQ) {
        var WQ;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) WQ = QQ;
        else if (oW.searchPseudoElementsFullScan) WQ = QQ.querySelectorAll("*");
        else {
          var XQ, wQ = new Set,
            qQ = TQ(document.styleSheets);
          try {
            for (qQ.s(); !(XQ = qQ.n()).done;) {
              var zQ = XQ.value;
              try {
                var sQ, FQ = TQ(zQ.cssRules);
                try {
                  for (FQ.s(); !(sQ = FQ.n()).done;) {
                    var PQ, gQ = sQ.value,
                      JQ = TQ(xw(gQ.selectorText));
                    try {
                      for (JQ.s(); !(PQ = JQ.n()).done;) {
                        var rQ = PQ.value;
                        wQ.add(rQ)
                      }
                    } catch (jQ) {
                      JQ.e(jQ)
                    } finally {
                      JQ.f()
                    }
                  }
                } catch (jQ) {
                  FQ.e(jQ)
                } finally {
                  FQ.f()
                }
              } catch (BQ) {
                oW.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(zQ.href, " (").concat(BQ.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (jQ) {
            qQ.e(jQ)
          } finally {
            qQ.f()
          }
          if (!wQ.size) return;
          var IQ = Array.from(wQ).join(", ");
          try {
            WQ = QQ.querySelectorAll(IQ)
          } catch (yQ) {}
        }
        return new Promise((function(QQ, XQ) {
          var wQ = NW(WQ).filter(ew).map(ow),
            qQ = Pw("searchPseudoElements");
          pw(), Promise.all(wQ).then((function() {
            qQ(), Gw(), QQ()
          })).catch((function() {
            qQ(), Gw(), XQ()
          }))
        }))
      }
    }
    var Nw = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(QQ) {
              return QQ.pseudoElementsCallback = Yw, QQ
            }
          }
        },
        provides: function(QQ) {
          QQ.pseudoElements2svg = function(QQ) {
            var WQ = QQ.node,
              XQ = void 0 === WQ ? dQ : WQ;
            oW.searchPseudoElements && Yw(XQ)
          }
        }
      },
      Zw = !1,
      Ow = function(QQ) {
        return QQ.toLowerCase().split(" ").reduce((function(QQ, WQ) {
          var XQ = WQ.toLowerCase().split("-"),
            wQ = XQ[0],
            qQ = XQ.slice(1).join("-");
          if (wQ && "h" === qQ) return QQ.flipX = !0, QQ;
          if (wQ && "v" === qQ) return QQ.flipY = !0, QQ;
          if (qQ = parseFloat(qQ), isNaN(qQ)) return QQ;
          switch (wQ) {
            case "grow":
              QQ.size = QQ.size + qQ;
              break;
            case "shrink":
              QQ.size = QQ.size - qQ;
              break;
            case "left":
              QQ.x = QQ.x - qQ;
              break;
            case "right":
              QQ.x = QQ.x + qQ;
              break;
            case "up":
              QQ.y = QQ.y - qQ;
              break;
            case "down":
              QQ.y = QQ.y + qQ;
              break;
            case "rotate":
              QQ.rotate = QQ.rotate + qQ
          }
          return QQ
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      Kw = {
        mixout: function() {
          return {
            parse: {
              transform: function(QQ) {
                return Ow(QQ)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(QQ, WQ) {
              var XQ = WQ.getAttribute("data-fa-transform");
              return XQ && (QQ.transform = Ow(XQ)), QQ
            }
          }
        },
        provides: function(QQ) {
          QQ.generateAbstractTransformGrouping = function(QQ) {
            var WQ = QQ.main,
              XQ = QQ.transform,
              wQ = QQ.containerWidth,
              qQ = QQ.iconWidth,
              TQ = {
                transform: "translate(".concat(wQ / 2, " 256)")
              },
              zQ = "translate(".concat(32 * XQ.x, ", ").concat(32 * XQ.y, ") "),
              sQ = "scale(".concat(XQ.size / 16 * (XQ.flipX ? -1 : 1), ", ").concat(XQ.size / 16 * (XQ.flipY ? -1 : 1), ") "),
              PQ = "rotate(".concat(XQ.rotate, " 0 0)"),
              gQ = {
                outer: TQ,
                inner: {
                  transform: "".concat(zQ, " ").concat(sQ, " ").concat(PQ)
                },
                path: {
                  transform: "translate(".concat(qQ / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: FQ({}, gQ.outer),
              children: [{
                tag: "g",
                attributes: FQ({}, gQ.inner),
                children: [{
                  tag: WQ.icon.tag,
                  children: WQ.icon.children,
                  attributes: FQ(FQ({}, WQ.icon.attributes), gQ.path)
                }]
              }]
            }
          }
        }
      },
      mw = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function Mw(QQ) {
      var WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return QQ.attributes && (QQ.attributes.fill || WQ) && (QQ.attributes.fill = "black"), QQ
    }
    var Qq = {
        hooks: function() {
          return {
            parseNodeAttributes: function(QQ, WQ) {
              var XQ = WQ.getAttribute("data-fa-mask"),
                wQ = XQ ? CX(XQ.split(" ").map((function(QQ) {
                  return QQ.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return wQ.prefix || (wQ.prefix = cX()), QQ.mask = wQ, QQ.maskId = WQ.getAttribute("data-fa-mask-id"), QQ
            }
          }
        },
        provides: function(QQ) {
          QQ.generateAbstractMask = function(QQ) {
            var WQ, XQ = QQ.children,
              wQ = QQ.attributes,
              qQ = QQ.main,
              TQ = QQ.mask,
              zQ = QQ.maskId,
              sQ = QQ.transform,
              PQ = qQ.width,
              gQ = qQ.icon,
              JQ = TQ.width,
              rQ = TQ.icon,
              IQ = function(QQ) {
                var WQ = QQ.transform,
                  XQ = QQ.containerWidth,
                  wQ = QQ.iconWidth,
                  qQ = {
                    transform: "translate(".concat(XQ / 2, " 256)")
                  },
                  TQ = "translate(".concat(32 * WQ.x, ", ").concat(32 * WQ.y, ") "),
                  zQ = "scale(".concat(WQ.size / 16 * (WQ.flipX ? -1 : 1), ", ").concat(WQ.size / 16 * (WQ.flipY ? -1 : 1), ") "),
                  sQ = "rotate(".concat(WQ.rotate, " 0 0)");
                return {
                  outer: qQ,
                  inner: {
                    transform: "".concat(TQ, " ").concat(zQ, " ").concat(sQ)
                  },
                  path: {
                    transform: "translate(".concat(wQ / 2 * -1, " -256)")
                  }
                }
              }({
                transform: sQ,
                containerWidth: JQ,
                iconWidth: PQ
              }),
              jQ = {
                tag: "rect",
                attributes: FQ(FQ({}, mw), {}, {
                  fill: "white"
                })
              },
              BQ = gQ.children ? {
                children: gQ.children.map(Mw)
              } : {},
              yQ = {
                tag: "g",
                attributes: FQ({}, IQ.inner),
                children: [Mw(FQ({
                  tag: gQ.tag,
                  attributes: FQ(FQ({}, gQ.attributes), IQ.path)
                }, BQ))]
              },
              VQ = {
                tag: "g",
                attributes: FQ({}, IQ.outer),
                children: [yQ]
              },
              DQ = "mask-".concat(zQ || YW()),
              pQ = "clip-".concat(zQ || YW()),
              GQ = {
                tag: "mask",
                attributes: FQ(FQ({}, mw), {}, {
                  id: DQ,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [jQ, VQ]
              },
              UQ = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: pQ
                  },
                  children: (WQ = rQ, "g" === WQ.tag ? WQ.children : [WQ])
                }, GQ]
              };
            return XQ.push(UQ, {
              tag: "rect",
              attributes: FQ({
                fill: "currentColor",
                "clip-path": "url(#".concat(pQ, ")"),
                mask: "url(#".concat(DQ, ")")
              }, mw)
            }), {
              children: XQ,
              attributes: wQ
            }
          }
        }
      },
      Wq = {
        provides: function(QQ) {
          var WQ = !1;
          vQ.matchMedia && (WQ = vQ.matchMedia("(prefers-reduced-motion: reduce)").matches), QQ.missingIconAbstract = function() {
            var QQ = [],
              XQ = {
                fill: "currentColor"
              },
              wQ = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            QQ.push({
              tag: "path",
              attributes: FQ(FQ({}, XQ), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var qQ = FQ(FQ({}, wQ), {}, {
                attributeName: "opacity"
              }),
              TQ = {
                tag: "circle",
                attributes: FQ(FQ({}, XQ), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return WQ || TQ.children.push({
              tag: "animate",
              attributes: FQ(FQ({}, wQ), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: FQ(FQ({}, qQ), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), QQ.push(TQ), QQ.push({
              tag: "path",
              attributes: FQ(FQ({}, XQ), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: WQ ? [] : [{
                tag: "animate",
                attributes: FQ(FQ({}, qQ), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), WQ || QQ.push({
              tag: "path",
              attributes: FQ(FQ({}, XQ), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: FQ(FQ({}, qQ), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: QQ
            }
          }
        }
      };
    ! function(QQ, WQ) {
      var XQ = WQ.mixoutsTo;
      fX = QQ, SX = {}, Object.keys(tX).forEach((function(QQ) {
        -1 === oX.indexOf(QQ) && delete tX[QQ]
      })), fX.forEach((function(QQ) {
        var WQ = QQ.mixout ? QQ.mixout() : {};
        if (Object.keys(WQ).forEach((function(QQ) {
            "function" === typeof WQ[QQ] && (XQ[QQ] = WQ[QQ]), "object" === rQ(WQ[QQ]) && Object.keys(WQ[QQ]).forEach((function(wQ) {
              XQ[QQ] || (XQ[QQ] = {}), XQ[QQ][wQ] = WQ[QQ][wQ]
            }))
          })), QQ.hooks) {
          var wQ = QQ.hooks();
          Object.keys(wQ).forEach((function(QQ) {
            SX[QQ] || (SX[QQ] = []), SX[QQ].push(wQ[QQ])
          }))
        }
        QQ.provides && QQ.provides(tX)
      }))
    }([XX, Aw, Rw, Ew, Cw, Nw, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              pw(), Zw = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            bw(eX("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            Uw && Uw.disconnect()
          },
          watch: function(QQ) {
            var WQ = QQ.observeMutationsRoot;
            Zw ? Gw() : bw(eX("mutationObserverCallbacks", {
              observeMutationsRoot: WQ
            }))
          }
        }
      }
    }, Kw, Qq, Wq, {
      hooks: function() {
        return {
          parseNodeAttributes: function(QQ, WQ) {
            var XQ = WQ.getAttribute("data-fa-symbol"),
              wQ = null !== XQ && ("" === XQ || XQ);
            return QQ.symbol = wQ, QQ
          }
        }
      }
    }], {
      mixoutsTo: OX
    });
    var Xq = OX.noAuto,
      wq = OX.config,
      qq = OX.library,
      Tq = OX.dom,
      zq = OX.parse,
      sq = OX.findIconDefinition,
      Fq = OX.toHtml,
      Pq = OX.icon,
      gq = OX.layer,
      Jq = OX.text,
      rq = OX.counter
  },
  7047: QQ => {
    QQ.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);