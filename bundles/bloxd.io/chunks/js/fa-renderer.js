/*! For license information please see bqoxjr.fa-renderer.50aa0daf.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6509: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      FontAwesomeIcon: () => iQ
    });
    var LQ = wQ(6502),
      qQ = wQ(4799),
      oQ = wQ.n(qQ),
      DQ = wQ(53);

    function kQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function vQ(QQ, FQ, wQ) {
      return (FQ = function(QQ) {
        var FQ = function(QQ, FQ) {
          if ("object" != typeof QQ || !QQ) return QQ;
          var wQ = QQ[Symbol.toPrimitive];
          if (void 0 !== wQ) {
            var LQ = wQ.call(QQ, FQ || "default");
            if ("object" != typeof LQ) return LQ;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === FQ ? String : Number)(QQ)
        }(QQ, "string");
        return "symbol" == typeof FQ ? FQ : FQ + ""
      }(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function mQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function uQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? mQ(Object(wQ), !0).forEach((function(FQ) {
          vQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : mQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function HQ(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        var wQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != wQ) {
          var LQ, qQ, oQ, DQ, kQ = [],
            vQ = !0,
            mQ = !1;
          try {
            if (oQ = (wQ = wQ.call(QQ)).next, 0 === FQ) {
              if (Object(wQ) !== wQ) return;
              vQ = !1
            } else
              for (; !(vQ = (LQ = oQ.call(wQ)).done) && (kQ.push(LQ.value), kQ.length !== FQ); vQ = !0);
          } catch (QQ) {
            mQ = !0, qQ = QQ
          } finally {
            try {
              if (!vQ && null != wQ.return && (DQ = wQ.return(), Object(DQ) !== DQ)) return
            } finally {
              if (mQ) throw qQ
            }
          }
          return kQ
        }
      }(QQ, FQ) || xQ(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return kQ(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" != typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || xQ(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YQ(QQ) {
      return YQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, YQ(QQ)
    }

    function xQ(QQ, FQ) {
      if (QQ) {
        if ("string" == typeof QQ) return kQ(QQ, FQ);
        var wQ = {}.toString.call(QQ).slice(8, -1);
        return "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name), "Map" === wQ || "Set" === wQ ? Array.from(QQ) : "Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ) ? kQ(QQ, FQ) : void 0
      }
    }
    var AQ;
    try {
      var tQ = wQ(6516);
      AQ = tQ.version
    } catch (RQ) {
      AQ = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function eQ(QQ) {
      var FQ = QQ.beat,
        wQ = QQ.fade,
        LQ = QQ.beatFade,
        qQ = QQ.bounce,
        oQ = QQ.shake,
        DQ = QQ.flash,
        kQ = QQ.spin,
        mQ = QQ.spinPulse,
        uQ = QQ.spinReverse,
        bQ = QQ.pulse,
        YQ = QQ.fixedWidth,
        xQ = QQ.inverse,
        tQ = QQ.border,
        eQ = QQ.listItem,
        MQ = QQ.flip,
        GQ = QQ.size,
        pQ = QQ.rotation,
        cQ = QQ.pull,
        CQ = QQ.swapOpacity,
        SQ = QQ.rotateBy,
        iQ = QQ.widthAuto,
        WQ = function(QQ, FQ) {
          for (var wQ = HQ(QQ.split("-"), 2), LQ = wQ[0], qQ = wQ[1], oQ = HQ(FQ.split("-"), 2), DQ = oQ[0], kQ = oQ[1], vQ = LQ.split("."), mQ = DQ.split("."), uQ = 0; uQ < Math.max(vQ.length, mQ.length); uQ++) {
            var bQ = vQ[uQ] || "0",
              YQ = mQ[uQ] || "0",
              xQ = parseInt(bQ, 10),
              AQ = parseInt(YQ, 10);
            if (xQ !== AQ) return xQ > AQ
          }
          for (var tQ = 0; tQ < Math.max(vQ.length, mQ.length); tQ++) {
            var eQ = vQ[tQ] || "0",
              MQ = mQ[tQ] || "0";
            if (eQ !== MQ && eQ.length !== MQ.length) return eQ.length < MQ.length
          }
          return !(qQ && !kQ)
        }(AQ, "7.0.0"),
        RQ = vQ(vQ(vQ(vQ(vQ(vQ({
          "fa-beat": FQ,
          "fa-fade": wQ,
          "fa-beat-fade": LQ,
          "fa-bounce": qQ,
          "fa-shake": oQ,
          "fa-flash": DQ,
          "fa-spin": kQ,
          "fa-spin-reverse": uQ,
          "fa-spin-pulse": mQ,
          "fa-pulse": bQ,
          "fa-fw": YQ,
          "fa-inverse": xQ,
          "fa-border": tQ,
          "fa-li": eQ,
          "fa-flip": !0 === MQ,
          "fa-flip-horizontal": "horizontal" === MQ || "both" === MQ,
          "fa-flip-vertical": "vertical" === MQ || "both" === MQ
        }, "fa-".concat(GQ), "undefined" !== typeof GQ && null !== GQ), "fa-rotate-".concat(pQ), "undefined" !== typeof pQ && null !== pQ && 0 !== pQ), "fa-pull-".concat(cQ), "undefined" !== typeof cQ && null !== cQ), "fa-swap-opacity", CQ), "fa-rotate-by", WQ && SQ), "fa-width-auto", WQ && iQ);
      return Object.keys(RQ).map((function(QQ) {
        return RQ[QQ] ? QQ : null
      })).filter((function(QQ) {
        return QQ
      }))
    }

    function MQ(QQ) {
      return FQ = QQ, (FQ -= 0) === FQ ? QQ : (QQ = QQ.replace(/[\-_\s]+(.)?/g, (function(QQ, FQ) {
        return FQ ? FQ.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + QQ.substr(1);
      var FQ
    }
    var GQ = ["style"];
    var pQ = !1;
    try {
      pQ = !0
    } catch (RQ) {}

    function cQ(QQ) {
      return QQ && "object" === YQ(QQ) && QQ.prefix && QQ.iconName && QQ.icon ? QQ : LQ.parse.icon ? LQ.parse.icon(QQ) : null === QQ ? null : QQ && "object" === YQ(QQ) && QQ.prefix && QQ.iconName ? QQ : Array.isArray(QQ) && 2 === QQ.length ? {
        prefix: QQ[0],
        iconName: QQ[1]
      } : "string" === typeof QQ ? {
        prefix: "fas",
        iconName: QQ
      } : void 0
    }

    function CQ(QQ, FQ) {
      return Array.isArray(FQ) && FQ.length > 0 || !Array.isArray(FQ) && FQ ? vQ({}, QQ, FQ) : {}
    }
    var SQ = {
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
      iQ = DQ.forwardRef((function(QQ, FQ) {
        var wQ = uQ(uQ({}, SQ), QQ),
          qQ = wQ.icon,
          oQ = wQ.mask,
          DQ = wQ.symbol,
          kQ = wQ.className,
          vQ = wQ.title,
          mQ = wQ.titleId,
          HQ = wQ.maskId,
          YQ = cQ(qQ),
          xQ = CQ("classes", [].concat(bQ(eQ(wQ)), bQ((kQ || "").split(" ")))),
          AQ = CQ("transform", "string" === typeof wQ.transform ? LQ.parse.transform(wQ.transform) : wQ.transform),
          tQ = CQ("mask", cQ(oQ)),
          MQ = (0, LQ.icon)(YQ, uQ(uQ(uQ(uQ({}, xQ), AQ), tQ), {}, {
            symbol: DQ,
            title: vQ,
            titleId: mQ,
            maskId: HQ
          }));
        if (!MQ) return function() {
          var QQ;
          !pQ && console && "function" === typeof console.error && (QQ = console).error.apply(QQ, arguments)
        }("Could not find icon", YQ), null;
        var GQ = MQ.abstract,
          iQ = {
            ref: FQ
          };
        return Object.keys(wQ).forEach((function(QQ) {
          SQ.hasOwnProperty(QQ) || (iQ[QQ] = wQ[QQ])
        })), WQ(GQ[0], iQ)
      }));
    iQ.displayName = "FontAwesomeIcon", iQ.propTypes = {
      beat: oQ().bool,
      border: oQ().bool,
      beatFade: oQ().bool,
      bounce: oQ().bool,
      className: oQ().string,
      fade: oQ().bool,
      flash: oQ().bool,
      mask: oQ().oneOfType([oQ().object, oQ().array, oQ().string]),
      maskId: oQ().string,
      fixedWidth: oQ().bool,
      inverse: oQ().bool,
      flip: oQ().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: oQ().oneOfType([oQ().object, oQ().array, oQ().string]),
      listItem: oQ().bool,
      pull: oQ().oneOf(["right", "left"]),
      pulse: oQ().bool,
      rotation: oQ().oneOf([0, 90, 180, 270]),
      rotateBy: oQ().bool,
      shake: oQ().bool,
      size: oQ().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: oQ().bool,
      spinPulse: oQ().bool,
      spinReverse: oQ().bool,
      symbol: oQ().oneOfType([oQ().bool, oQ().string]),
      title: oQ().string,
      titleId: oQ().string,
      transform: oQ().oneOfType([oQ().string, oQ().object]),
      swapOpacity: oQ().bool,
      widthAuto: oQ().bool
    };
    var WQ = function QQ(FQ, wQ) {
      var LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof wQ) return wQ;
      var qQ = (wQ.children || []).map((function(wQ) {
          return QQ(FQ, wQ)
        })),
        oQ = Object.keys(wQ.attributes || {}).reduce((function(QQ, FQ) {
          var LQ = wQ.attributes[FQ];
          switch (FQ) {
            case "class":
              QQ.attrs.className = LQ, delete wQ.attributes.class;
              break;
            case "style":
              QQ.attrs.style = LQ.split(";").map((function(QQ) {
                return QQ.trim()
              })).filter((function(QQ) {
                return QQ
              })).reduce((function(QQ, FQ) {
                var wQ, LQ = FQ.indexOf(":"),
                  qQ = MQ(FQ.slice(0, LQ)),
                  oQ = FQ.slice(LQ + 1).trim();
                return qQ.startsWith("webkit") ? QQ[(wQ = qQ, wQ.charAt(0).toUpperCase() + wQ.slice(1))] = oQ : QQ[qQ] = oQ, QQ
              }), {});
              break;
            default:
              0 === FQ.indexOf("aria-") || 0 === FQ.indexOf("data-") ? QQ.attrs[FQ.toLowerCase()] = LQ : QQ.attrs[MQ(FQ)] = LQ
          }
          return QQ
        }), {
          attrs: {}
        }),
        DQ = LQ.style,
        kQ = void 0 === DQ ? {} : DQ,
        vQ = function(QQ, FQ) {
          if (null == QQ) return {};
          var wQ, LQ, qQ = function(QQ, FQ) {
            if (null == QQ) return {};
            var wQ = {};
            for (var LQ in QQ)
              if ({}.hasOwnProperty.call(QQ, LQ)) {
                if (-1 !== FQ.indexOf(LQ)) continue;
                wQ[LQ] = QQ[LQ]
              } return wQ
          }(QQ, FQ);
          if (Object.getOwnPropertySymbols) {
            var oQ = Object.getOwnPropertySymbols(QQ);
            for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], -1 === FQ.indexOf(wQ) && {}.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
          }
          return qQ
        }(LQ, GQ);
      return oQ.attrs.style = uQ(uQ({}, oQ.attrs.style), kQ), FQ.apply(void 0, [wQ.tag, uQ(uQ({}, oQ.attrs), vQ)].concat(bQ(qQ)))
    }.bind(null, DQ.createElement)
  },
  4806: (QQ, FQ, wQ) => {
    var LQ = wQ(4815);

    function qQ() {}

    function oQ() {}
    oQ.resetWarningCache = qQ, QQ.exports = function() {
      function QQ(QQ, FQ, wQ, qQ, oQ, DQ) {
        if (DQ !== LQ) {
          var kQ = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw kQ.name = "Invariant Violation", kQ
        }
      }

      function FQ() {
        return QQ
      }
      QQ.isRequired = QQ;
      var wQ = {
        array: QQ,
        bigint: QQ,
        bool: QQ,
        func: QQ,
        number: QQ,
        object: QQ,
        string: QQ,
        symbol: QQ,
        any: QQ,
        arrayOf: FQ,
        element: QQ,
        elementType: QQ,
        instanceOf: FQ,
        node: QQ,
        objectOf: FQ,
        oneOf: FQ,
        oneOfType: FQ,
        shape: FQ,
        exact: FQ,
        checkPropTypes: oQ,
        resetWarningCache: qQ
      };
      return wQ.PropTypes = wQ, wQ
    }
  },
  4799: (QQ, FQ, wQ) => {
    QQ.exports = wQ(4806)()
  },
  4815: QQ => {
    QQ.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6502: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function qQ(QQ, FQ) {
      for (var wQ = 0; wQ < FQ.length; wQ++) {
        var LQ = FQ[wQ];
        LQ.enumerable = LQ.enumerable || !1, LQ.configurable = !0, "value" in LQ && (LQ.writable = !0), Object.defineProperty(QQ, HQ(LQ.key), LQ)
      }
    }

    function oQ(QQ, FQ) {
      var wQ = "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
      if (!wQ) {
        if (Array.isArray(QQ) || (wQ = YQ(QQ)) || FQ && QQ && "number" == typeof QQ.length) {
          wQ && (QQ = wQ);
          var LQ = 0,
            qQ = function() {};
          return {
            s: qQ,
            n: function() {
              return LQ >= QQ.length ? {
                done: !0
              } : {
                done: !1,
                value: QQ[LQ++]
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
      var oQ, DQ = !0,
        kQ = !1;
      return {
        s: function() {
          wQ = wQ.call(QQ)
        },
        n: function() {
          var QQ = wQ.next();
          return DQ = QQ.done, QQ
        },
        e: function(QQ) {
          kQ = !0, oQ = QQ
        },
        f: function() {
          try {
            DQ || null == wQ.return || wQ.return()
          } finally {
            if (kQ) throw oQ
          }
        }
      }
    }

    function DQ(QQ, FQ, wQ) {
      return (FQ = HQ(FQ)) in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function kQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function vQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? kQ(Object(wQ), !0).forEach((function(FQ) {
          DQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : kQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function mQ(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        var wQ = null == QQ ? null : "undefined" != typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null != wQ) {
          var LQ, qQ, oQ, DQ, kQ = [],
            vQ = !0,
            mQ = !1;
          try {
            if (oQ = (wQ = wQ.call(QQ)).next, 0 === FQ) {
              if (Object(wQ) !== wQ) return;
              vQ = !1
            } else
              for (; !(vQ = (LQ = oQ.call(wQ)).done) && (kQ.push(LQ.value), kQ.length !== FQ); vQ = !0);
          } catch (QQ) {
            mQ = !0, qQ = QQ
          } finally {
            try {
              if (!vQ && null != wQ.return && (DQ = wQ.return(), Object(DQ) !== DQ)) return
            } finally {
              if (mQ) throw qQ
            }
          }
          return kQ
        }
      }(QQ, FQ) || YQ(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return LQ(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" != typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || YQ(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function HQ(QQ) {
      var FQ = function(QQ, FQ) {
        if ("object" != typeof QQ || !QQ) return QQ;
        var wQ = QQ[Symbol.toPrimitive];
        if (void 0 !== wQ) {
          var LQ = wQ.call(QQ, FQ || "default");
          if ("object" != typeof LQ) return LQ;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === FQ ? String : Number)(QQ)
      }(QQ, "string");
      return "symbol" == typeof FQ ? FQ : FQ + ""
    }

    function bQ(QQ) {
      return bQ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(QQ) {
        return typeof QQ
      } : function(QQ) {
        return QQ && "function" == typeof Symbol && QQ.constructor === Symbol && QQ !== Symbol.prototype ? "symbol" : typeof QQ
      }, bQ(QQ)
    }

    function YQ(QQ, FQ) {
      if (QQ) {
        if ("string" == typeof QQ) return LQ(QQ, FQ);
        var wQ = {}.toString.call(QQ).slice(8, -1);
        return "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name), "Map" === wQ || "Set" === wQ ? Array.from(QQ) : "Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ) ? LQ(QQ, FQ) : void 0
      }
    }
    wQ.r(FQ), wQ.d(FQ, {
      api: () => yw,
      config: () => Lq,
      counter: () => bq,
      dom: () => oq,
      findIconDefinition: () => kq,
      icon: () => mq,
      layer: () => uq,
      library: () => qq,
      noAuto: () => wq,
      parse: () => Dq,
      text: () => Hq,
      toHtml: () => vq
    });
    var xQ = function() {},
      AQ = {},
      tQ = {},
      eQ = null,
      MQ = {
        mark: xQ,
        measure: xQ
      };
    try {
      "undefined" !== typeof window && (AQ = window), "undefined" !== typeof document && (tQ = document), "undefined" !== typeof MutationObserver && (eQ = MutationObserver), "undefined" !== typeof performance && (MQ = performance)
    } catch (hQ) {}
    var GQ, pQ, cQ = (AQ.navigator || {}).userAgent,
      CQ = void 0 === cQ ? "" : cQ,
      SQ = AQ,
      iQ = tQ,
      WQ = eQ,
      RQ = MQ,
      OQ = (SQ.document, !!iQ.documentElement && !!iQ.head && "function" === typeof iQ.addEventListener && "function" === typeof iQ.createElement),
      sQ = ~CQ.indexOf("MSIE") || ~CQ.indexOf("Trident/"),
      rQ = {
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
      IQ = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      UQ = "classic",
      NQ = "duotone",
      TQ = "sharp",
      KQ = "sharp-duotone",
      zQ = "chisel",
      lQ = "etch",
      jQ = "graphite",
      aQ = "jelly",
      XQ = "jelly-duo",
      fQ = "jelly-fill",
      VQ = "notdog",
      hQ = "notdog-duo",
      JQ = "slab",
      EQ = "slab-press",
      nQ = "thumbprint",
      gQ = "utility",
      PQ = "utility-duo",
      ZQ = "utility-fill",
      yQ = "whiteboard",
      BQ = [UQ, NQ, TQ, KQ, zQ, lQ, jQ, aQ, XQ, fQ, VQ, hQ, JQ, EQ, nQ, gQ, PQ, ZQ, yQ],
      dQ = (DQ(DQ(DQ(DQ(DQ(DQ(DQ(DQ(DQ(DQ(GQ = {}, UQ, "Classic"), NQ, "Duotone"), TQ, "Sharp"), KQ, "Sharp Duotone"), zQ, "Chisel"), lQ, "Etch"), jQ, "Graphite"), aQ, "Jelly"), XQ, "Jelly Duo"), fQ, "Jelly Fill"), DQ(DQ(DQ(DQ(DQ(DQ(DQ(DQ(DQ(GQ, VQ, "Notdog"), hQ, "Notdog Duo"), JQ, "Slab"), EQ, "Slab Press"), nQ, "Thumbprint"), gQ, "Utility"), PQ, "Utility Duo"), ZQ, "Utility Fill"), yQ, "Whiteboard"), new Map([
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
      QF = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      FF = {
        fak: "kit",
        "fa-kit": "kit"
      },
      wF = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      LF = (DQ(DQ({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      qF = {
        "kit-duotone": "fakd"
      },
      oF = "duotone-group",
      DF = "swap-opacity",
      kF = "primary",
      vF = "secondary",
      mF = (DQ(DQ(DQ(DQ(DQ(DQ(DQ(DQ(DQ(DQ(pQ = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), DQ(DQ(DQ(DQ(DQ(DQ(DQ(DQ(DQ(pQ, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), DQ(DQ({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      uF = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      HF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      bF = HF.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      YF = [].concat(uQ(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", oF, DF, kF, vF]).concat(HF.map((function(QQ) {
        return "".concat(QQ, "x")
      }))).concat(bF.map((function(QQ) {
        return "w-".concat(QQ)
      }))),
      xF = "___FONT_AWESOME___",
      AF = "svg-inline--fa",
      tF = "data-fa-i2svg",
      eF = "data-fa-pseudo-element",
      MF = "data-prefix",
      GF = "data-icon",
      pF = "fontawesome-i2svg",
      cF = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      CF = ["::before", "::after", ":before", ":after"],
      SF = function() {
        try {
          return !0
        } catch (QQ) {
          return !1
        }
      }();

    function iF(QQ) {
      return new Proxy(QQ, {
        get: function(QQ, FQ) {
          return FQ in QQ ? QQ[FQ] : QQ[UQ]
        }
      })
    }
    var WF = vQ({}, rQ);
    WF[UQ] = vQ(vQ(vQ(vQ({}, {
      "fa-duotone": "duotone"
    }), rQ[UQ]), FF), wF);
    var RF = iF(WF),
      OF = vQ({}, {
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
    OF[UQ] = vQ(vQ(vQ(vQ({}, {
      duotone: "fad"
    }), OF[UQ]), LF), qF);
    var sF = iF(OF),
      rF = vQ({}, mF);
    rF[UQ] = vQ(vQ({}, rF[UQ]), {
      fak: "fa-kit"
    });
    var IF = iF(rF),
      UF = vQ({}, {
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
    UF[UQ] = vQ(vQ({}, UF[UQ]), {
      "fa-kit": "fak"
    });
    iF(UF);
    var NF = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      TF = "fa-layers-text",
      KF = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      zF = (iF(vQ({}, {
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
      lF = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      jF = [].concat(uQ(["kit"]), uQ(YF)),
      aF = SQ.FontAwesomeConfig || {};
    if (iQ && "function" === typeof iQ.querySelector) {
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
        var FQ = mQ(QQ, 2),
          wQ = FQ[0],
          LQ = FQ[1],
          qQ = function(QQ) {
            return "" === QQ || "false" !== QQ && ("true" === QQ || QQ)
          }(function(QQ) {
            var FQ = iQ.querySelector("script[" + QQ + "]");
            if (FQ) return FQ.getAttribute(QQ)
          }(wQ));
        void 0 !== qQ && null !== qQ && (aF[LQ] = qQ)
      }))
    }
    var XF = {
      styleDefault: "solid",
      familyDefault: UQ,
      cssPrefix: "fa",
      replacementClass: AF,
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
    aF.familyPrefix && (aF.cssPrefix = aF.familyPrefix);
    var fF = vQ(vQ({}, XF), aF);
    fF.autoReplaceSvg || (fF.observeMutations = !1);
    var VF = {};
    Object.keys(XF).forEach((function(QQ) {
      Object.defineProperty(VF, QQ, {
        enumerable: !0,
        set: function(FQ) {
          fF[QQ] = FQ, hF.forEach((function(QQ) {
            return QQ(VF)
          }))
        },
        get: function() {
          return fF[QQ]
        }
      })
    })), Object.defineProperty(VF, "familyPrefix", {
      enumerable: !0,
      set: function(QQ) {
        fF.cssPrefix = QQ, hF.forEach((function(QQ) {
          return QQ(VF)
        }))
      },
      get: function() {
        return fF.cssPrefix
      }
    }), SQ.FontAwesomeConfig = VF;
    var hF = [];
    var JF = 16,
      EF = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function nF() {
      for (var QQ = 12, FQ = ""; QQ-- > 0;) FQ += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return FQ
    }

    function gF(QQ) {
      for (var FQ = [], wQ = (QQ || []).length >>> 0; wQ--;) FQ[wQ] = QQ[wQ];
      return FQ
    }

    function PF(QQ) {
      return QQ.classList ? gF(QQ.classList) : (QQ.getAttribute("class") || "").split(" ").filter((function(QQ) {
        return QQ
      }))
    }

    function ZF(QQ) {
      return "".concat(QQ).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function yF(QQ) {
      return Object.keys(QQ || {}).reduce((function(FQ, wQ) {
        return FQ + "".concat(wQ, ": ").concat(QQ[wQ].trim(), ";")
      }), "")
    }

    function BF(QQ) {
      return QQ.size !== EF.size || QQ.x !== EF.x || QQ.y !== EF.y || QQ.rotate !== EF.rotate || QQ.flipX || QQ.flipY
    }

    function dF() {
      var QQ = "fa",
        FQ = AF,
        wQ = VF.cssPrefix,
        LQ = VF.replacementClass,
        qQ = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (wQ !== QQ || LQ !== FQ) {
        var oQ = new RegExp("\\.".concat(QQ, "\\-"), "g"),
          DQ = new RegExp("\\--".concat(QQ, "\\-"), "g"),
          kQ = new RegExp("\\.".concat(FQ), "g");
        qQ = qQ.replace(oQ, ".".concat(wQ, "-")).replace(DQ, "--".concat(wQ, "-")).replace(kQ, ".".concat(LQ))
      }
      return qQ
    }
    var Qw = !1;

    function Fw() {
      VF.autoAddCss && !Qw && (! function(QQ) {
        if (QQ && OQ) {
          var FQ = iQ.createElement("style");
          FQ.setAttribute("type", "text/css"), FQ.innerHTML = QQ;
          for (var wQ = iQ.head.childNodes, LQ = null, qQ = wQ.length - 1; qQ > -1; qQ--) {
            var oQ = wQ[qQ],
              DQ = (oQ.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(DQ) > -1 && (LQ = oQ)
          }
          iQ.head.insertBefore(FQ, LQ)
        }
      }(dF()), Qw = !0)
    }
    var ww = {
        mixout: function() {
          return {
            dom: {
              css: dF,
              insertCss: Fw
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              Fw()
            },
            beforeI2svg: function() {
              Fw()
            }
          }
        }
      },
      Lw = SQ || {};
    Lw[xF] || (Lw[xF] = {}), Lw[xF].styles || (Lw[xF].styles = {}), Lw[xF].hooks || (Lw[xF].hooks = {}), Lw[xF].shims || (Lw[xF].shims = []);
    var qw = Lw[xF],
      ow = [],
      Dw = function() {
        iQ.removeEventListener("DOMContentLoaded", Dw), kw = 1, ow.map((function(QQ) {
          return QQ()
        }))
      },
      kw = !1;

    function vw(QQ) {
      var FQ = QQ.tag,
        wQ = QQ.attributes,
        LQ = void 0 === wQ ? {} : wQ,
        qQ = QQ.children,
        oQ = void 0 === qQ ? [] : qQ;
      return "string" === typeof QQ ? ZF(QQ) : "<".concat(FQ, " ").concat(function(QQ) {
        return Object.keys(QQ || {}).reduce((function(FQ, wQ) {
          return FQ + "".concat(wQ, '="').concat(ZF(QQ[wQ]), '" ')
        }), "").trim()
      }(LQ), ">").concat(oQ.map(vw).join(""), "</").concat(FQ, ">")
    }

    function mw(QQ, FQ, wQ) {
      if (QQ && QQ[FQ] && QQ[FQ][wQ]) return {
        prefix: FQ,
        iconName: wQ,
        icon: QQ[FQ][wQ]
      }
    }
    OQ && ((kw = (iQ.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(iQ.readyState)) || iQ.addEventListener("DOMContentLoaded", Dw));
    var uw = function(QQ, FQ, wQ, LQ) {
      var qQ, oQ, DQ, kQ = Object.keys(QQ),
        vQ = kQ.length,
        mQ = void 0 !== LQ ? function(QQ, FQ) {
          return function(wQ, LQ, qQ, oQ) {
            return QQ.call(FQ, wQ, LQ, qQ, oQ)
          }
        }(FQ, LQ) : FQ;
      for (void 0 === wQ ? (qQ = 1, DQ = QQ[kQ[0]]) : (qQ = 0, DQ = wQ); qQ < vQ; qQ++) DQ = mQ(DQ, QQ[oQ = kQ[qQ]], oQ, QQ);
      return DQ
    };

    function Hw(QQ) {
      return 1 !== uQ(QQ).length ? null : QQ.codePointAt(0).toString(16)
    }

    function bw(QQ) {
      return Object.keys(QQ).reduce((function(FQ, wQ) {
        var LQ = QQ[wQ];
        return !!LQ.icon ? FQ[LQ.iconName] = LQ.icon : FQ[wQ] = LQ, FQ
      }), {})
    }

    function Yw(QQ, FQ) {
      var wQ = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        LQ = void 0 !== wQ && wQ,
        qQ = bw(FQ);
      "function" !== typeof qw.hooks.addPack || LQ ? qw.styles[QQ] = vQ(vQ({}, qw.styles[QQ] || {}), qQ) : qw.hooks.addPack(QQ, bw(FQ)), "fas" === QQ && Yw("fa", FQ)
    }
    var xw = qw.styles,
      Aw = qw.shims,
      tw = Object.keys(IF),
      ew = tw.reduce((function(QQ, FQ) {
        return QQ[FQ] = Object.keys(IF[FQ]), QQ
      }), {}),
      Mw = null,
      Gw = {},
      pw = {},
      Cw = {},
      Sw = {},
      iw = {};

    function Ww(QQ, FQ) {
      var wQ, LQ = FQ.split("-"),
        qQ = LQ[0],
        oQ = LQ.slice(1).join("-");
      return qQ !== QQ || "" === oQ || (wQ = oQ, ~jF.indexOf(wQ)) ? null : oQ
    }
    var Rw, Ow = function() {
      var QQ = function(QQ) {
        return uw(xw, (function(FQ, wQ, LQ) {
          return FQ[LQ] = uw(wQ, QQ, {}), FQ
        }), {})
      };
      Gw = QQ((function(QQ, FQ, wQ) {
        (FQ[3] && (QQ[FQ[3]] = wQ), FQ[2]) && FQ[2].filter((function(QQ) {
          return "number" === typeof QQ
        })).forEach((function(FQ) {
          QQ[FQ.toString(16)] = wQ
        }));
        return QQ
      })), pw = QQ((function(QQ, FQ, wQ) {
        (QQ[wQ] = wQ, FQ[2]) && FQ[2].filter((function(QQ) {
          return "string" === typeof QQ
        })).forEach((function(FQ) {
          QQ[FQ] = wQ
        }));
        return QQ
      })), iw = QQ((function(QQ, FQ, wQ) {
        var LQ = FQ[2];
        return QQ[wQ] = wQ, LQ.forEach((function(FQ) {
          QQ[FQ] = wQ
        })), QQ
      }));
      var FQ = "far" in xw || VF.autoFetchSvg,
        wQ = uw(Aw, (function(QQ, wQ) {
          var LQ = wQ[0],
            qQ = wQ[1],
            oQ = wQ[2];
          return "far" !== qQ || FQ || (qQ = "fas"), "string" === typeof LQ && (QQ.names[LQ] = {
            prefix: qQ,
            iconName: oQ
          }), "number" === typeof LQ && (QQ.unicodes[LQ.toString(16)] = {
            prefix: qQ,
            iconName: oQ
          }), QQ
        }), {
          names: {},
          unicodes: {}
        });
      Cw = wQ.names, Sw = wQ.unicodes, Mw = Nw(VF.styleDefault, {
        family: VF.familyDefault
      })
    };

    function sw(QQ, FQ) {
      return (Gw[QQ] || {})[FQ]
    }

    function rw(QQ, FQ) {
      return (iw[QQ] || {})[FQ]
    }

    function Iw(QQ) {
      return Cw[QQ] || {
        prefix: null,
        iconName: null
      }
    }

    function Uw() {
      return Mw
    }
    Rw = function(QQ) {
      Mw = Nw(QQ.styleDefault, {
        family: VF.familyDefault
      })
    }, hF.push(Rw), Ow();

    function Nw(QQ) {
      var FQ = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        wQ = void 0 === FQ ? UQ : FQ,
        LQ = RF[wQ][QQ];
      if (wQ === NQ && !QQ) return "fad";
      var qQ = sF[wQ][QQ] || sF[wQ][LQ],
        oQ = QQ in qw.styles ? QQ : null;
      return qQ || oQ || null
    }

    function Tw(QQ) {
      return QQ.sort().filter((function(QQ, FQ, wQ) {
        return wQ.indexOf(QQ) === FQ
      }))
    }
    var Kw = uF.concat(QF);

    function zw(QQ) {
      var FQ = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        wQ = void 0 !== FQ && FQ,
        LQ = null,
        qQ = Tw(QQ.filter((function(QQ) {
          return Kw.includes(QQ)
        }))),
        oQ = Tw(QQ.filter((function(QQ) {
          return !Kw.includes(QQ)
        }))),
        DQ = mQ(qQ.filter((function(QQ) {
          return LQ = QQ, !IQ.includes(QQ)
        })), 1)[0],
        kQ = void 0 === DQ ? null : DQ,
        uQ = function(QQ) {
          var FQ = UQ,
            wQ = tw.reduce((function(QQ, FQ) {
              return QQ[FQ] = "".concat(VF.cssPrefix, "-").concat(FQ), QQ
            }), {});
          return BQ.forEach((function(LQ) {
            (QQ.includes(wQ[LQ]) || QQ.some((function(QQ) {
              return ew[LQ].includes(QQ)
            }))) && (FQ = LQ)
          })), FQ
        }(qQ),
        HQ = vQ(vQ({}, function(QQ) {
          var FQ = [],
            wQ = null;
          return QQ.forEach((function(QQ) {
            var LQ = Ww(VF.cssPrefix, QQ);
            LQ ? wQ = LQ : QQ && FQ.push(QQ)
          })), {
            iconName: wQ,
            rest: FQ
          }
        }(oQ)), {}, {
          prefix: Nw(kQ, {
            family: uQ
          })
        });
      return vQ(vQ(vQ({}, HQ), function(QQ) {
        var FQ = QQ.values,
          wQ = QQ.family,
          LQ = QQ.canonical,
          qQ = QQ.givenPrefix,
          oQ = void 0 === qQ ? "" : qQ,
          DQ = QQ.styles,
          kQ = void 0 === DQ ? {} : DQ,
          vQ = QQ.config,
          mQ = void 0 === vQ ? {} : vQ,
          uQ = wQ === NQ,
          HQ = FQ.includes("fa-duotone") || FQ.includes("fad"),
          bQ = "duotone" === mQ.familyDefault,
          YQ = "fad" === LQ.prefix || "fa-duotone" === LQ.prefix;
        !uQ && (HQ || bQ || YQ) && (LQ.prefix = "fad");
        (FQ.includes("fa-brands") || FQ.includes("fab")) && (LQ.prefix = "fab");
        if (!LQ.prefix && lw.includes(wQ)) {
          if (Object.keys(kQ).find((function(QQ) {
              return jw.includes(QQ)
            })) || mQ.autoFetchSvg) {
            var xQ = dQ.get(wQ).defaultShortPrefixId;
            LQ.prefix = xQ, LQ.iconName = rw(LQ.prefix, LQ.iconName) || LQ.iconName
          }
        }
        "fa" !== LQ.prefix && "fa" !== oQ || (LQ.prefix = Uw() || "fas");
        return LQ
      }({
        values: QQ,
        family: uQ,
        styles: xw,
        config: VF,
        canonical: HQ,
        givenPrefix: LQ
      })), function(QQ, FQ, wQ) {
        var LQ = wQ.prefix,
          qQ = wQ.iconName;
        if (QQ || !LQ || !qQ) return {
          prefix: LQ,
          iconName: qQ
        };
        var oQ = "fa" === FQ ? Iw(qQ) : {},
          DQ = rw(LQ, qQ);
        qQ = oQ.iconName || DQ || qQ, "far" !== (LQ = oQ.prefix || LQ) || xw.far || !xw.fas || VF.autoFetchSvg || (LQ = "fas");
        return {
          prefix: LQ,
          iconName: qQ
        }
      }(wQ, LQ, HQ))
    }
    var lw = BQ.filter((function(QQ) {
        return QQ !== UQ || QQ !== NQ
      })),
      jw = Object.keys(mF).filter((function(QQ) {
        return QQ !== UQ
      })).map((function(QQ) {
        return Object.keys(mF[QQ])
      })).flat();
    var aw = function() {
        return function(QQ, FQ, wQ) {
          return FQ && qQ(QQ.prototype, FQ), wQ && qQ(QQ, wQ), Object.defineProperty(QQ, "prototype", {
            writable: !1
          }), QQ
        }((function QQ() {
          ! function(QQ, FQ) {
            if (!(QQ instanceof FQ)) throw new TypeError("Cannot call a class as a function")
          }(this, QQ), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var QQ = this, FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
            var qQ = wQ.reduce(this._pullDefinitions, {});
            Object.keys(qQ).forEach((function(FQ) {
              QQ.definitions[FQ] = vQ(vQ({}, QQ.definitions[FQ] || {}), qQ[FQ]), Yw(FQ, qQ[FQ]);
              var wQ = IF[UQ][FQ];
              wQ && Yw(wQ, qQ[FQ]), Ow()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(QQ, FQ) {
            var wQ = FQ.prefix && FQ.iconName && FQ.icon ? {
              0: FQ
            } : FQ;
            return Object.keys(wQ).map((function(FQ) {
              var LQ = wQ[FQ],
                qQ = LQ.prefix,
                oQ = LQ.iconName,
                DQ = LQ.icon,
                kQ = DQ[2];
              QQ[qQ] || (QQ[qQ] = {}), kQ.length > 0 && kQ.forEach((function(FQ) {
                "string" === typeof FQ && (QQ[qQ][FQ] = DQ)
              })), QQ[qQ][oQ] = DQ
            })), QQ
          }
        }])
      }(),
      Xw = [],
      fw = {},
      Vw = {},
      hw = Object.keys(Vw);

    function Jw(QQ, FQ) {
      for (var wQ = arguments.length, LQ = new Array(wQ > 2 ? wQ - 2 : 0), qQ = 2; qQ < wQ; qQ++) LQ[qQ - 2] = arguments[qQ];
      return (fw[QQ] || []).forEach((function(QQ) {
        FQ = QQ.apply(null, [FQ].concat(LQ))
      })), FQ
    }

    function Ew(QQ) {
      for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), LQ = 1; LQ < FQ; LQ++) wQ[LQ - 1] = arguments[LQ];
      (fw[QQ] || []).forEach((function(QQ) {
        QQ.apply(null, wQ)
      }))
    }

    function nw() {
      var QQ = arguments[0],
        FQ = Array.prototype.slice.call(arguments, 1);
      return Vw[QQ] ? Vw[QQ].apply(null, FQ) : void 0
    }

    function gw(QQ) {
      "fa" === QQ.prefix && (QQ.prefix = "fas");
      var FQ = QQ.iconName,
        wQ = QQ.prefix || Uw();
      if (FQ) return FQ = rw(wQ, FQ) || FQ, mw(Pw.definitions, wQ, FQ) || mw(qw.styles, wQ, FQ)
    }
    var Pw = new aw,
      Zw = {
        i2svg: function() {
          var QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return OQ ? (Ew("beforeI2svg", QQ), nw("pseudoElements2svg", QQ), nw("i2svg", QQ)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var QQ, FQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            wQ = FQ.autoReplaceSvgRoot;
          !1 === VF.autoReplaceSvg && (VF.autoReplaceSvg = !0), VF.observeMutations = !0, QQ = function() {
            Bw({
              autoReplaceSvgRoot: wQ
            }), Ew("watch", FQ)
          }, OQ && (kw ? setTimeout(QQ, 0) : ow.push(QQ))
        }
      },
      yw = {
        noAuto: function() {
          VF.autoReplaceSvg = !1, VF.observeMutations = !1, Ew("noAuto")
        },
        config: VF,
        dom: Zw,
        parse: {
          icon: function(QQ) {
            if (null === QQ) return null;
            if ("object" === bQ(QQ) && QQ.prefix && QQ.iconName) return {
              prefix: QQ.prefix,
              iconName: rw(QQ.prefix, QQ.iconName) || QQ.iconName
            };
            if (Array.isArray(QQ) && 2 === QQ.length) {
              var FQ = 0 === QQ[1].indexOf("fa-") ? QQ[1].slice(3) : QQ[1],
                wQ = Nw(QQ[0]);
              return {
                prefix: wQ,
                iconName: rw(wQ, FQ) || FQ
              }
            }
            if ("string" === typeof QQ && (QQ.indexOf("".concat(VF.cssPrefix, "-")) > -1 || QQ.match(NF))) {
              var LQ = zw(QQ.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: LQ.prefix || Uw(),
                iconName: rw(LQ.prefix, LQ.iconName) || LQ.iconName
              }
            }
            if ("string" === typeof QQ) {
              var qQ = Uw();
              return {
                prefix: qQ,
                iconName: rw(qQ, QQ) || QQ
              }
            }
          }
        },
        library: Pw,
        findIconDefinition: gw,
        toHtml: vw
      },
      Bw = function() {
        var QQ = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          FQ = void 0 === QQ ? iQ : QQ;
        (Object.keys(qw.styles).length > 0 || VF.autoFetchSvg) && OQ && VF.autoReplaceSvg && yw.dom.i2svg({
          node: FQ
        })
      };

    function dw(QQ, FQ) {
      return Object.defineProperty(QQ, "abstract", {
        get: FQ
      }), Object.defineProperty(QQ, "html", {
        get: function() {
          return QQ.abstract.map((function(QQ) {
            return vw(QQ)
          }))
        }
      }), Object.defineProperty(QQ, "node", {
        get: function() {
          if (OQ) {
            var FQ = iQ.createElement("div");
            return FQ.innerHTML = QQ.html, FQ.children
          }
        }
      }), QQ
    }

    function QL(QQ) {
      var FQ = QQ.icons,
        wQ = FQ.main,
        LQ = FQ.mask,
        qQ = QQ.prefix,
        oQ = QQ.iconName,
        DQ = QQ.transform,
        kQ = QQ.symbol,
        mQ = QQ.maskId,
        uQ = QQ.extra,
        HQ = QQ.watchable,
        bQ = void 0 !== HQ && HQ,
        YQ = LQ.found ? LQ : wQ,
        xQ = YQ.width,
        AQ = YQ.height,
        tQ = [VF.replacementClass, oQ ? "".concat(VF.cssPrefix, "-").concat(oQ) : ""].filter((function(QQ) {
          return -1 === uQ.classes.indexOf(QQ)
        })).filter((function(QQ) {
          return "" !== QQ || !!QQ
        })).concat(uQ.classes).join(" "),
        eQ = {
          children: [],
          attributes: vQ(vQ({}, uQ.attributes), {}, {
            "data-prefix": qQ,
            "data-icon": oQ,
            class: tQ,
            role: uQ.attributes.role || "img",
            viewBox: "0 0 ".concat(xQ, " ").concat(AQ)
          })
        };
      (function(QQ) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(FQ) {
          return FQ in QQ
        }))
      })(uQ.attributes) || uQ.attributes["aria-hidden"] || (eQ.attributes["aria-hidden"] = "true"), bQ && (eQ.attributes[tF] = "");
      var MQ = vQ(vQ({}, eQ), {}, {
          prefix: qQ,
          iconName: oQ,
          main: wQ,
          mask: LQ,
          maskId: mQ,
          transform: DQ,
          symbol: kQ,
          styles: vQ({}, uQ.styles)
        }),
        GQ = LQ.found && wQ.found ? nw("generateAbstractMask", MQ) || {
          children: [],
          attributes: {}
        } : nw("generateAbstractIcon", MQ) || {
          children: [],
          attributes: {}
        },
        pQ = GQ.children,
        cQ = GQ.attributes;
      return MQ.children = pQ, MQ.attributes = cQ, kQ ? function(QQ) {
        var FQ = QQ.prefix,
          wQ = QQ.iconName,
          LQ = QQ.children,
          qQ = QQ.attributes,
          oQ = QQ.symbol,
          DQ = !0 === oQ ? "".concat(FQ, "-").concat(VF.cssPrefix, "-").concat(wQ) : oQ;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: vQ(vQ({}, qQ), {}, {
              id: DQ
            }),
            children: LQ
          }]
        }]
      }(MQ) : function(QQ) {
        var FQ = QQ.children,
          wQ = QQ.main,
          LQ = QQ.mask,
          qQ = QQ.attributes,
          oQ = QQ.styles,
          DQ = QQ.transform;
        if (BF(DQ) && wQ.found && !LQ.found) {
          var kQ = {
            x: wQ.width / wQ.height / 2,
            y: .5
          };
          qQ.style = yF(vQ(vQ({}, oQ), {}, {
            "transform-origin": "".concat(kQ.x + DQ.x / 16, "em ").concat(kQ.y + DQ.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: qQ,
          children: FQ
        }]
      }(MQ)
    }

    function FL(QQ) {
      var FQ = QQ.content,
        wQ = QQ.width,
        LQ = QQ.height,
        qQ = QQ.transform,
        oQ = QQ.extra,
        DQ = QQ.watchable,
        kQ = void 0 !== DQ && DQ,
        mQ = vQ(vQ({}, oQ.attributes), {}, {
          class: oQ.classes.join(" ")
        });
      kQ && (mQ[tF] = "");
      var uQ = vQ({}, oQ.styles);
      BF(qQ) && (uQ.transform = function(QQ) {
        var FQ = QQ.transform,
          wQ = QQ.width,
          LQ = void 0 === wQ ? 16 : wQ,
          qQ = QQ.height,
          oQ = void 0 === qQ ? 16 : qQ,
          DQ = QQ.startCentered,
          kQ = void 0 !== DQ && DQ,
          vQ = "";
        return vQ += kQ && sQ ? "translate(".concat(FQ.x / JF - LQ / 2, "em, ").concat(FQ.y / JF - oQ / 2, "em) ") : kQ ? "translate(calc(-50% + ".concat(FQ.x / JF, "em), calc(-50% + ").concat(FQ.y / JF, "em)) ") : "translate(".concat(FQ.x / JF, "em, ").concat(FQ.y / JF, "em) "), vQ += "scale(".concat(FQ.size / JF * (FQ.flipX ? -1 : 1), ", ").concat(FQ.size / JF * (FQ.flipY ? -1 : 1), ") "), vQ + "rotate(".concat(FQ.rotate, "deg) ")
      }({
        transform: qQ,
        startCentered: !0,
        width: wQ,
        height: LQ
      }), uQ["-webkit-transform"] = uQ.transform);
      var HQ = yF(uQ);
      HQ.length > 0 && (mQ.style = HQ);
      var bQ = [];
      return bQ.push({
        tag: "span",
        attributes: mQ,
        children: [FQ]
      }), bQ
    }
    var wL = qw.styles;

    function LL(QQ) {
      var FQ = QQ[0],
        wQ = QQ[1],
        LQ = mQ(QQ.slice(4), 1)[0];
      return {
        found: !0,
        width: FQ,
        height: wQ,
        icon: Array.isArray(LQ) ? {
          tag: "g",
          attributes: {
            class: "".concat(VF.cssPrefix, "-").concat(lF.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(VF.cssPrefix, "-").concat(lF.SECONDARY),
              fill: "currentColor",
              d: LQ[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(VF.cssPrefix, "-").concat(lF.PRIMARY),
              fill: "currentColor",
              d: LQ[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: LQ
          }
        }
      }
    }
    var qL = {
      found: !1,
      width: 512,
      height: 512
    };

    function oL(QQ, FQ) {
      var wQ = FQ;
      return "fa" === FQ && null !== VF.styleDefault && (FQ = Uw()), new Promise((function(LQ, qQ) {
        if ("fa" === wQ) {
          var oQ = Iw(QQ) || {};
          QQ = oQ.iconName || QQ, FQ = oQ.prefix || FQ
        }
        if (QQ && FQ && wL[FQ] && wL[FQ][QQ]) return LQ(LL(wL[FQ][QQ]));
        ! function(QQ, FQ) {
          SF || VF.showMissingIcons || !QQ || console.error('Icon with name "'.concat(QQ, '" and prefix "').concat(FQ, '" is missing.'))
        }(QQ, FQ), LQ(vQ(vQ({}, qL), {}, {
          icon: VF.showMissingIcons && QQ && nw("missingIconAbstract") || {}
        }))
      }))
    }
    var DL = function() {},
      kL = VF.measurePerformance && RQ && RQ.mark && RQ.measure ? RQ : {
        mark: DL,
        measure: DL
      },
      vL = 'FA "7.2.0"',
      mL = function(QQ) {
        kL.mark("".concat(vL, " ").concat(QQ, " ends")), kL.measure("".concat(vL, " ").concat(QQ), "".concat(vL, " ").concat(QQ, " begins"), "".concat(vL, " ").concat(QQ, " ends"))
      },
      uL = function(QQ) {
        return kL.mark("".concat(vL, " ").concat(QQ, " begins")),
          function() {
            return mL(QQ)
          }
      },
      HL = function() {};

    function bL(QQ) {
      return "string" === typeof(QQ.getAttribute ? QQ.getAttribute(tF) : null)
    }

    function YL(QQ) {
      return iQ.createElementNS("http://www.w3.org/2000/svg", QQ)
    }

    function xL(QQ) {
      return iQ.createElement(QQ)
    }

    function AL(QQ) {
      var FQ = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        wQ = void 0 === FQ ? "svg" === QQ.tag ? YL : xL : FQ;
      if ("string" === typeof QQ) return iQ.createTextNode(QQ);
      var LQ = wQ(QQ.tag);
      return Object.keys(QQ.attributes || []).forEach((function(FQ) {
        LQ.setAttribute(FQ, QQ.attributes[FQ])
      })), (QQ.children || []).forEach((function(QQ) {
        LQ.appendChild(AL(QQ, {
          ceFn: wQ
        }))
      })), LQ
    }
    var tL = {
      replace: function(QQ) {
        var FQ = QQ[0];
        if (FQ.parentNode)
          if (QQ[1].forEach((function(QQ) {
              FQ.parentNode.insertBefore(AL(QQ), FQ)
            })), null === FQ.getAttribute(tF) && VF.keepOriginalSource) {
            var wQ = iQ.createComment(function(QQ) {
              var FQ = " ".concat(QQ.outerHTML, " ");
              return "".concat(FQ, "Font Awesome fontawesome.com ")
            }(FQ));
            FQ.parentNode.replaceChild(wQ, FQ)
          } else FQ.remove()
      },
      nest: function(QQ) {
        var FQ = QQ[0],
          wQ = QQ[1];
        if (~PF(FQ).indexOf(VF.replacementClass)) return tL.replace(QQ);
        var LQ = new RegExp("".concat(VF.cssPrefix, "-.*"));
        if (delete wQ[0].attributes.id, wQ[0].attributes.class) {
          var qQ = wQ[0].attributes.class.split(" ").reduce((function(QQ, FQ) {
            return FQ === VF.replacementClass || FQ.match(LQ) ? QQ.toSvg.push(FQ) : QQ.toNode.push(FQ), QQ
          }), {
            toNode: [],
            toSvg: []
          });
          wQ[0].attributes.class = qQ.toSvg.join(" "), 0 === qQ.toNode.length ? FQ.removeAttribute("class") : FQ.setAttribute("class", qQ.toNode.join(" "))
        }
        var oQ = wQ.map((function(QQ) {
          return vw(QQ)
        })).join("\n");
        FQ.setAttribute(tF, ""), FQ.innerHTML = oQ
      }
    };

    function eL(QQ) {
      QQ()
    }

    function ML(QQ, FQ) {
      var wQ = "function" === typeof FQ ? FQ : HL;
      if (0 === QQ.length) wQ();
      else {
        var LQ = eL;
        "async" === VF.mutateApproach && (LQ = SQ.requestAnimationFrame || eL), LQ((function() {
          var FQ = !0 === VF.autoReplaceSvg ? tL.replace : tL[VF.autoReplaceSvg] || tL.replace,
            LQ = uL("mutate");
          QQ.map(FQ), LQ(), wQ()
        }))
      }
    }
    var GL = !1;

    function pL() {
      GL = !0
    }

    function cL() {
      GL = !1
    }
    var CL = null;

    function SL(QQ) {
      if (WQ && VF.observeMutations) {
        var FQ = QQ.treeCallback,
          wQ = void 0 === FQ ? HL : FQ,
          LQ = QQ.nodeCallback,
          qQ = void 0 === LQ ? HL : LQ,
          oQ = QQ.pseudoElementsCallback,
          DQ = void 0 === oQ ? HL : oQ,
          kQ = QQ.observeMutationsRoot,
          vQ = void 0 === kQ ? iQ : kQ;
        CL = new WQ((function(QQ) {
          if (!GL) {
            var FQ = Uw();
            gF(QQ).forEach((function(QQ) {
              if ("childList" === QQ.type && QQ.addedNodes.length > 0 && !bL(QQ.addedNodes[0]) && (VF.searchPseudoElements && DQ(QQ.target), wQ(QQ.target)), "attributes" === QQ.type && QQ.target.parentNode && VF.searchPseudoElements && DQ([QQ.target], !0), "attributes" === QQ.type && bL(QQ.target) && ~zF.indexOf(QQ.attributeName))
                if ("class" === QQ.attributeName && function(QQ) {
                    var FQ = QQ.getAttribute ? QQ.getAttribute(MF) : null,
                      wQ = QQ.getAttribute ? QQ.getAttribute(GF) : null;
                    return FQ && wQ
                  }(QQ.target)) {
                  var LQ = zw(PF(QQ.target)),
                    oQ = LQ.prefix,
                    kQ = LQ.iconName;
                  QQ.target.setAttribute(MF, oQ || FQ), kQ && QQ.target.setAttribute(GF, kQ)
                } else(vQ = QQ.target) && vQ.classList && vQ.classList.contains && vQ.classList.contains(VF.replacementClass) && qQ(QQ.target);
              var vQ
            }))
          }
        })), OQ && CL.observe(vQ, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function iL(QQ) {
      var FQ, wQ, LQ = QQ.getAttribute("data-prefix"),
        qQ = QQ.getAttribute("data-icon"),
        oQ = void 0 !== QQ.innerText ? QQ.innerText.trim() : "",
        DQ = zw(PF(QQ));
      return DQ.prefix || (DQ.prefix = Uw()), LQ && qQ && (DQ.prefix = LQ, DQ.iconName = qQ), DQ.iconName && DQ.prefix || (DQ.prefix && oQ.length > 0 && (DQ.iconName = (FQ = DQ.prefix, wQ = QQ.innerText, (pw[FQ] || {})[wQ] || sw(DQ.prefix, Hw(QQ.innerText)))), !DQ.iconName && VF.autoFetchSvg && QQ.firstChild && QQ.firstChild.nodeType === Node.TEXT_NODE && (DQ.iconName = QQ.firstChild.data)), DQ
    }

    function WL(QQ) {
      var FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        wQ = iL(QQ),
        LQ = wQ.iconName,
        qQ = wQ.prefix,
        oQ = wQ.rest,
        DQ = function(QQ) {
          return gF(QQ.attributes).reduce((function(QQ, FQ) {
            return "class" !== QQ.name && "style" !== QQ.name && (QQ[FQ.name] = FQ.value), QQ
          }), {})
        }(QQ),
        kQ = Jw("parseNodeAttributes", {}, QQ),
        mQ = FQ.styleParser ? function(QQ) {
          var FQ = QQ.getAttribute("style"),
            wQ = [];
          return FQ && (wQ = FQ.split(";").reduce((function(QQ, FQ) {
            var wQ = FQ.split(":"),
              LQ = wQ[0],
              qQ = wQ.slice(1);
            return LQ && qQ.length > 0 && (QQ[LQ] = qQ.join(":").trim()), QQ
          }), {})), wQ
        }(QQ) : [];
      return vQ({
        iconName: LQ,
        prefix: qQ,
        transform: EF,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: oQ,
          styles: mQ,
          attributes: DQ
        }
      }, kQ)
    }
    var RL = qw.styles;

    function OL(QQ) {
      var FQ = "nest" === VF.autoReplaceSvg ? WL(QQ, {
        styleParser: !1
      }) : WL(QQ);
      return ~FQ.extra.classes.indexOf(TF) ? nw("generateLayersText", QQ, FQ) : nw("generateSvgReplacementMutation", QQ, FQ)
    }

    function sL(QQ) {
      var FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!OQ) return Promise.resolve();
      var wQ = iQ.documentElement.classList,
        LQ = function(QQ) {
          return wQ.add("".concat(pF, "-").concat(QQ))
        },
        qQ = function(QQ) {
          return wQ.remove("".concat(pF, "-").concat(QQ))
        },
        oQ = VF.autoFetchSvg ? [].concat(uQ(QF), uQ(uF)) : IQ.concat(Object.keys(RL));
      oQ.includes("fa") || oQ.push("fa");
      var DQ = [".".concat(TF, ":not([").concat(tF, "])")].concat(oQ.map((function(QQ) {
        return ".".concat(QQ, ":not([").concat(tF, "])")
      }))).join(", ");
      if (0 === DQ.length) return Promise.resolve();
      var kQ = [];
      try {
        kQ = gF(QQ.querySelectorAll(DQ))
      } catch (HQ) {}
      if (!(kQ.length > 0)) return Promise.resolve();
      LQ("pending"), qQ("complete");
      var vQ = uL("onTree"),
        mQ = kQ.reduce((function(QQ, FQ) {
          try {
            var wQ = OL(FQ);
            wQ && QQ.push(wQ)
          } catch (HQ) {
            SF || "MissingIcon" === HQ.name && console.error(HQ)
          }
          return QQ
        }), []);
      return new Promise((function(QQ, wQ) {
        Promise.all(mQ).then((function(wQ) {
          ML(wQ, (function() {
            LQ("active"), LQ("complete"), qQ("pending"), "function" === typeof FQ && FQ(), vQ(), QQ()
          }))
        })).catch((function(QQ) {
          vQ(), wQ(QQ)
        }))
      }))
    }

    function rL(QQ) {
      var FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      OL(QQ).then((function(QQ) {
        QQ && ML([QQ], FQ)
      }))
    }
    var IL = function(QQ) {
        var FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          wQ = FQ.transform,
          LQ = void 0 === wQ ? EF : wQ,
          qQ = FQ.symbol,
          oQ = void 0 !== qQ && qQ,
          DQ = FQ.mask,
          kQ = void 0 === DQ ? null : DQ,
          mQ = FQ.maskId,
          uQ = void 0 === mQ ? null : mQ,
          HQ = FQ.classes,
          bQ = void 0 === HQ ? [] : HQ,
          YQ = FQ.attributes,
          xQ = void 0 === YQ ? {} : YQ,
          AQ = FQ.styles,
          tQ = void 0 === AQ ? {} : AQ;
        if (QQ) {
          var eQ = QQ.prefix,
            MQ = QQ.iconName,
            GQ = QQ.icon;
          return dw(vQ({
            type: "icon"
          }, QQ), (function() {
            return Ew("beforeDOMElementCreation", {
              iconDefinition: QQ,
              params: FQ
            }), QL({
              icons: {
                main: LL(GQ),
                mask: kQ ? LL(kQ.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: eQ,
              iconName: MQ,
              transform: vQ(vQ({}, EF), LQ),
              symbol: oQ,
              maskId: uQ,
              extra: {
                attributes: xQ,
                styles: tQ,
                classes: bQ
              }
            })
          }))
        }
      },
      UL = {
        mixout: function() {
          return {
            icon: (QQ = IL, function(FQ) {
              var wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                LQ = (FQ || {}).icon ? FQ : gw(FQ || {}),
                qQ = wQ.mask;
              return qQ && (qQ = (qQ || {}).icon ? qQ : gw(qQ || {})), QQ(LQ, vQ(vQ({}, wQ), {}, {
                mask: qQ
              }))
            })
          };
          var QQ
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(QQ) {
              return QQ.treeCallback = sL, QQ.nodeCallback = rL, QQ
            }
          }
        },
        provides: function(QQ) {
          QQ.i2svg = function(QQ) {
            var FQ = QQ.node,
              wQ = void 0 === FQ ? iQ : FQ,
              LQ = QQ.callback;
            return sL(wQ, void 0 === LQ ? function() {} : LQ)
          }, QQ.generateSvgReplacementMutation = function(QQ, FQ) {
            var wQ = FQ.iconName,
              LQ = FQ.prefix,
              qQ = FQ.transform,
              oQ = FQ.symbol,
              DQ = FQ.mask,
              kQ = FQ.maskId,
              vQ = FQ.extra;
            return new Promise((function(FQ, uQ) {
              Promise.all([oL(wQ, LQ), DQ.iconName ? oL(DQ.iconName, DQ.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(DQ) {
                var uQ = mQ(DQ, 2),
                  HQ = uQ[0],
                  bQ = uQ[1];
                FQ([QQ, QL({
                  icons: {
                    main: HQ,
                    mask: bQ
                  },
                  prefix: LQ,
                  iconName: wQ,
                  transform: qQ,
                  symbol: oQ,
                  maskId: kQ,
                  extra: vQ,
                  watchable: !0
                })])
              })).catch(uQ)
            }))
          }, QQ.generateAbstractIcon = function(QQ) {
            var FQ, wQ = QQ.children,
              LQ = QQ.attributes,
              qQ = QQ.main,
              oQ = QQ.transform,
              DQ = yF(QQ.styles);
            return DQ.length > 0 && (LQ.style = DQ), BF(oQ) && (FQ = nw("generateAbstractTransformGrouping", {
              main: qQ,
              transform: oQ,
              containerWidth: qQ.width,
              iconWidth: qQ.width
            })), wQ.push(FQ || qQ.icon), {
              children: wQ,
              attributes: LQ
            }
          }
        }
      },
      NL = {
        mixout: function() {
          return {
            layer: function(QQ) {
              var FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                wQ = FQ.classes,
                LQ = void 0 === wQ ? [] : wQ;
              return dw({
                type: "layer"
              }, (function() {
                Ew("beforeDOMElementCreation", {
                  assembler: QQ,
                  params: FQ
                });
                var wQ = [];
                return QQ((function(QQ) {
                  Array.isArray(QQ) ? QQ.map((function(QQ) {
                    wQ = wQ.concat(QQ.abstract)
                  })) : wQ = wQ.concat(QQ.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(VF.cssPrefix, "-layers")].concat(uQ(LQ)).join(" ")
                  },
                  children: wQ
                }]
              }))
            }
          }
        }
      },
      TL = {
        mixout: function() {
          return {
            counter: function(QQ) {
              var FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                wQ = FQ.title,
                LQ = void 0 === wQ ? null : wQ,
                qQ = FQ.classes,
                oQ = void 0 === qQ ? [] : qQ,
                DQ = FQ.attributes,
                kQ = void 0 === DQ ? {} : DQ,
                mQ = FQ.styles,
                HQ = void 0 === mQ ? {} : mQ;
              return dw({
                type: "counter",
                content: QQ
              }, (function() {
                return Ew("beforeDOMElementCreation", {
                    content: QQ,
                    params: FQ
                  }),
                  function(QQ) {
                    var FQ = QQ.content,
                      wQ = QQ.extra,
                      LQ = vQ(vQ({}, wQ.attributes), {}, {
                        class: wQ.classes.join(" ")
                      }),
                      qQ = yF(wQ.styles);
                    qQ.length > 0 && (LQ.style = qQ);
                    var oQ = [];
                    return oQ.push({
                      tag: "span",
                      attributes: LQ,
                      children: [FQ]
                    }), oQ
                  }({
                    content: QQ.toString(),
                    title: LQ,
                    extra: {
                      attributes: kQ,
                      styles: HQ,
                      classes: ["".concat(VF.cssPrefix, "-layers-counter")].concat(uQ(oQ))
                    }
                  })
              }))
            }
          }
        }
      },
      KL = {
        mixout: function() {
          return {
            text: function(QQ) {
              var FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                wQ = FQ.transform,
                LQ = void 0 === wQ ? EF : wQ,
                qQ = FQ.classes,
                oQ = void 0 === qQ ? [] : qQ,
                DQ = FQ.attributes,
                kQ = void 0 === DQ ? {} : DQ,
                mQ = FQ.styles,
                HQ = void 0 === mQ ? {} : mQ;
              return dw({
                type: "text",
                content: QQ
              }, (function() {
                return Ew("beforeDOMElementCreation", {
                  content: QQ,
                  params: FQ
                }), FL({
                  content: QQ,
                  transform: vQ(vQ({}, EF), LQ),
                  extra: {
                    attributes: kQ,
                    styles: HQ,
                    classes: ["".concat(VF.cssPrefix, "-layers-text")].concat(uQ(oQ))
                  }
                })
              }))
            }
          }
        },
        provides: function(QQ) {
          QQ.generateLayersText = function(QQ, FQ) {
            var wQ = FQ.transform,
              LQ = FQ.extra,
              qQ = null,
              oQ = null;
            if (sQ) {
              var DQ = parseInt(getComputedStyle(QQ).fontSize, 10),
                kQ = QQ.getBoundingClientRect();
              qQ = kQ.width / DQ, oQ = kQ.height / DQ
            }
            return Promise.resolve([QQ, FL({
              content: QQ.innerHTML,
              width: qQ,
              height: oQ,
              transform: wQ,
              extra: LQ,
              watchable: !0
            })])
          }
        }
      },
      zL = new RegExp('"', "ug"),
      lL = [1105920, 1112319],
      jL = vQ(vQ(vQ(vQ({}, {
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
      aL = Object.keys(jL).reduce((function(QQ, FQ) {
        return QQ[FQ.toLowerCase()] = jL[FQ], QQ
      }), {}),
      XL = Object.keys(aL).reduce((function(QQ, FQ) {
        var wQ = aL[FQ];
        return QQ[FQ] = wQ[900] || uQ(Object.entries(wQ))[0][1], QQ
      }), {});

    function fL(QQ, FQ) {
      var wQ = "".concat("data-fa-pseudo-element-pending").concat(FQ.replace(":", "-"));
      return new Promise((function(LQ, qQ) {
        if (null !== QQ.getAttribute(wQ)) return LQ();
        var oQ = gF(QQ.children).filter((function(QQ) {
            return QQ.getAttribute(eF) === FQ
          }))[0],
          DQ = SQ.getComputedStyle(QQ, FQ),
          kQ = DQ.getPropertyValue("font-family"),
          mQ = kQ.match(KF),
          HQ = DQ.getPropertyValue("font-weight"),
          bQ = DQ.getPropertyValue("content");
        if (oQ && !mQ) return QQ.removeChild(oQ), LQ();
        if (mQ && "none" !== bQ && "" !== bQ) {
          var YQ = DQ.getPropertyValue("content"),
            xQ = function(QQ, FQ) {
              var wQ = QQ.replace(/^['"]|['"]$/g, "").toLowerCase(),
                LQ = parseInt(FQ),
                qQ = isNaN(LQ) ? "normal" : LQ;
              return (aL[wQ] || {})[qQ] || XL[wQ]
            }(kQ, HQ),
            AQ = function(QQ) {
              return Hw(uQ(QQ.replace(zL, ""))[0] || "")
            }(YQ),
            tQ = mQ[0].startsWith("FontAwesome"),
            eQ = function(QQ) {
              var FQ = QQ.getPropertyValue("font-feature-settings").includes("ss01"),
                wQ = QQ.getPropertyValue("content").replace(zL, ""),
                LQ = wQ.codePointAt(0),
                qQ = LQ >= lL[0] && LQ <= lL[1],
                oQ = 2 === wQ.length && wQ[0] === wQ[1];
              return qQ || oQ || FQ
            }(DQ),
            MQ = sw(xQ, AQ),
            GQ = MQ;
          if (tQ) {
            var pQ = function(QQ) {
              var FQ = Sw[QQ],
                wQ = sw("fas", QQ);
              return FQ || (wQ ? {
                prefix: "fas",
                iconName: wQ
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(AQ);
            pQ.iconName && pQ.prefix && (MQ = pQ.iconName, xQ = pQ.prefix)
          }
          if (!MQ || eQ || oQ && oQ.getAttribute(MF) === xQ && oQ.getAttribute(GF) === GQ) LQ();
          else {
            QQ.setAttribute(wQ, GQ), oQ && QQ.removeChild(oQ);
            var cQ = {
                iconName: null,
                prefix: null,
                transform: EF,
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
              CQ = cQ.extra;
            CQ.attributes[eF] = FQ, oL(MQ, xQ).then((function(qQ) {
              var oQ = QL(vQ(vQ({}, cQ), {}, {
                  icons: {
                    main: qQ,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: xQ,
                  iconName: GQ,
                  extra: CQ,
                  watchable: !0
                })),
                DQ = iQ.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === FQ ? QQ.insertBefore(DQ, QQ.firstChild) : QQ.appendChild(DQ), DQ.outerHTML = oQ.map((function(QQ) {
                return vw(QQ)
              })).join("\n"), QQ.removeAttribute(wQ), LQ()
            })).catch(qQ)
          }
        } else LQ()
      }))
    }

    function VL(QQ) {
      return Promise.all([fL(QQ, "::before"), fL(QQ, "::after")])
    }

    function hL(QQ) {
      return QQ.parentNode !== document.head && !~cF.indexOf(QQ.tagName.toUpperCase()) && !QQ.getAttribute(eF) && (!QQ.parentNode || "svg" !== QQ.parentNode.tagName)
    }
    var JL = function(QQ) {
        return !!QQ && CF.some((function(FQ) {
          return QQ.includes(FQ)
        }))
      },
      EL = function(QQ) {
        if (!QQ) return [];
        var FQ = new Set,
          wQ = QQ.split(/,(?![^()]*\))/).map((function(QQ) {
            return QQ.trim()
          }));
        wQ = wQ.flatMap((function(QQ) {
          return QQ.includes("(") ? QQ : QQ.split(",").map((function(QQ) {
            return QQ.trim()
          }))
        }));
        var LQ, qQ = oQ(wQ);
        try {
          for (qQ.s(); !(LQ = qQ.n()).done;) {
            var DQ = LQ.value;
            if (JL(DQ)) {
              var kQ = CF.reduce((function(QQ, FQ) {
                return QQ.replace(FQ, "")
              }), DQ);
              "" !== kQ && "*" !== kQ && FQ.add(kQ)
            }
          }
        } catch (vQ) {
          qQ.e(vQ)
        } finally {
          qQ.f()
        }
        return FQ
      };

    function nL(QQ) {
      if (OQ) {
        var FQ;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) FQ = QQ;
        else if (VF.searchPseudoElementsFullScan) FQ = QQ.querySelectorAll("*");
        else {
          var wQ, LQ = new Set,
            qQ = oQ(document.styleSheets);
          try {
            for (qQ.s(); !(wQ = qQ.n()).done;) {
              var DQ = wQ.value;
              try {
                var kQ, vQ = oQ(DQ.cssRules);
                try {
                  for (vQ.s(); !(kQ = vQ.n()).done;) {
                    var mQ, uQ = kQ.value,
                      HQ = oQ(EL(uQ.selectorText));
                    try {
                      for (HQ.s(); !(mQ = HQ.n()).done;) {
                        var bQ = mQ.value;
                        LQ.add(bQ)
                      }
                    } catch (xQ) {
                      HQ.e(xQ)
                    } finally {
                      HQ.f()
                    }
                  }
                } catch (xQ) {
                  vQ.e(xQ)
                } finally {
                  vQ.f()
                }
              } catch (AQ) {
                VF.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(DQ.href, " (").concat(AQ.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (xQ) {
            qQ.e(xQ)
          } finally {
            qQ.f()
          }
          if (!LQ.size) return;
          var YQ = Array.from(LQ).join(", ");
          try {
            FQ = QQ.querySelectorAll(YQ)
          } catch (tQ) {}
        }
        return new Promise((function(QQ, wQ) {
          var LQ = gF(FQ).filter(hL).map(VL),
            qQ = uL("searchPseudoElements");
          pL(), Promise.all(LQ).then((function() {
            qQ(), cL(), QQ()
          })).catch((function() {
            qQ(), cL(), wQ()
          }))
        }))
      }
    }
    var gL = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(QQ) {
              return QQ.pseudoElementsCallback = nL, QQ
            }
          }
        },
        provides: function(QQ) {
          QQ.pseudoElements2svg = function(QQ) {
            var FQ = QQ.node,
              wQ = void 0 === FQ ? iQ : FQ;
            VF.searchPseudoElements && nL(wQ)
          }
        }
      },
      PL = !1,
      ZL = function(QQ) {
        return QQ.toLowerCase().split(" ").reduce((function(QQ, FQ) {
          var wQ = FQ.toLowerCase().split("-"),
            LQ = wQ[0],
            qQ = wQ.slice(1).join("-");
          if (LQ && "h" === qQ) return QQ.flipX = !0, QQ;
          if (LQ && "v" === qQ) return QQ.flipY = !0, QQ;
          if (qQ = parseFloat(qQ), isNaN(qQ)) return QQ;
          switch (LQ) {
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
      yL = {
        mixout: function() {
          return {
            parse: {
              transform: function(QQ) {
                return ZL(QQ)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(QQ, FQ) {
              var wQ = FQ.getAttribute("data-fa-transform");
              return wQ && (QQ.transform = ZL(wQ)), QQ
            }
          }
        },
        provides: function(QQ) {
          QQ.generateAbstractTransformGrouping = function(QQ) {
            var FQ = QQ.main,
              wQ = QQ.transform,
              LQ = QQ.containerWidth,
              qQ = QQ.iconWidth,
              oQ = {
                transform: "translate(".concat(LQ / 2, " 256)")
              },
              DQ = "translate(".concat(32 * wQ.x, ", ").concat(32 * wQ.y, ") "),
              kQ = "scale(".concat(wQ.size / 16 * (wQ.flipX ? -1 : 1), ", ").concat(wQ.size / 16 * (wQ.flipY ? -1 : 1), ") "),
              mQ = "rotate(".concat(wQ.rotate, " 0 0)"),
              uQ = {
                outer: oQ,
                inner: {
                  transform: "".concat(DQ, " ").concat(kQ, " ").concat(mQ)
                },
                path: {
                  transform: "translate(".concat(qQ / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: vQ({}, uQ.outer),
              children: [{
                tag: "g",
                attributes: vQ({}, uQ.inner),
                children: [{
                  tag: FQ.icon.tag,
                  children: FQ.icon.children,
                  attributes: vQ(vQ({}, FQ.icon.attributes), uQ.path)
                }]
              }]
            }
          }
        }
      },
      BL = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function dL(QQ) {
      var FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return QQ.attributes && (QQ.attributes.fill || FQ) && (QQ.attributes.fill = "black"), QQ
    }
    var Qq = {
        hooks: function() {
          return {
            parseNodeAttributes: function(QQ, FQ) {
              var wQ = FQ.getAttribute("data-fa-mask"),
                LQ = wQ ? zw(wQ.split(" ").map((function(QQ) {
                  return QQ.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return LQ.prefix || (LQ.prefix = Uw()), QQ.mask = LQ, QQ.maskId = FQ.getAttribute("data-fa-mask-id"), QQ
            }
          }
        },
        provides: function(QQ) {
          QQ.generateAbstractMask = function(QQ) {
            var FQ, wQ = QQ.children,
              LQ = QQ.attributes,
              qQ = QQ.main,
              oQ = QQ.mask,
              DQ = QQ.maskId,
              kQ = QQ.transform,
              mQ = qQ.width,
              uQ = qQ.icon,
              HQ = oQ.width,
              bQ = oQ.icon,
              YQ = function(QQ) {
                var FQ = QQ.transform,
                  wQ = QQ.containerWidth,
                  LQ = QQ.iconWidth,
                  qQ = {
                    transform: "translate(".concat(wQ / 2, " 256)")
                  },
                  oQ = "translate(".concat(32 * FQ.x, ", ").concat(32 * FQ.y, ") "),
                  DQ = "scale(".concat(FQ.size / 16 * (FQ.flipX ? -1 : 1), ", ").concat(FQ.size / 16 * (FQ.flipY ? -1 : 1), ") "),
                  kQ = "rotate(".concat(FQ.rotate, " 0 0)");
                return {
                  outer: qQ,
                  inner: {
                    transform: "".concat(oQ, " ").concat(DQ, " ").concat(kQ)
                  },
                  path: {
                    transform: "translate(".concat(LQ / 2 * -1, " -256)")
                  }
                }
              }({
                transform: kQ,
                containerWidth: HQ,
                iconWidth: mQ
              }),
              xQ = {
                tag: "rect",
                attributes: vQ(vQ({}, BL), {}, {
                  fill: "white"
                })
              },
              AQ = uQ.children ? {
                children: uQ.children.map(dL)
              } : {},
              tQ = {
                tag: "g",
                attributes: vQ({}, YQ.inner),
                children: [dL(vQ({
                  tag: uQ.tag,
                  attributes: vQ(vQ({}, uQ.attributes), YQ.path)
                }, AQ))]
              },
              eQ = {
                tag: "g",
                attributes: vQ({}, YQ.outer),
                children: [tQ]
              },
              MQ = "mask-".concat(DQ || nF()),
              GQ = "clip-".concat(DQ || nF()),
              pQ = {
                tag: "mask",
                attributes: vQ(vQ({}, BL), {}, {
                  id: MQ,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [xQ, eQ]
              },
              cQ = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: GQ
                  },
                  children: (FQ = bQ, "g" === FQ.tag ? FQ.children : [FQ])
                }, pQ]
              };
            return wQ.push(cQ, {
              tag: "rect",
              attributes: vQ({
                fill: "currentColor",
                "clip-path": "url(#".concat(GQ, ")"),
                mask: "url(#".concat(MQ, ")")
              }, BL)
            }), {
              children: wQ,
              attributes: LQ
            }
          }
        }
      },
      Fq = {
        provides: function(QQ) {
          var FQ = !1;
          SQ.matchMedia && (FQ = SQ.matchMedia("(prefers-reduced-motion: reduce)").matches), QQ.missingIconAbstract = function() {
            var QQ = [],
              wQ = {
                fill: "currentColor"
              },
              LQ = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            QQ.push({
              tag: "path",
              attributes: vQ(vQ({}, wQ), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var qQ = vQ(vQ({}, LQ), {}, {
                attributeName: "opacity"
              }),
              oQ = {
                tag: "circle",
                attributes: vQ(vQ({}, wQ), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return FQ || oQ.children.push({
              tag: "animate",
              attributes: vQ(vQ({}, LQ), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: vQ(vQ({}, qQ), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), QQ.push(oQ), QQ.push({
              tag: "path",
              attributes: vQ(vQ({}, wQ), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: FQ ? [] : [{
                tag: "animate",
                attributes: vQ(vQ({}, qQ), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), FQ || QQ.push({
              tag: "path",
              attributes: vQ(vQ({}, wQ), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: vQ(vQ({}, qQ), {}, {
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
    ! function(QQ, FQ) {
      var wQ = FQ.mixoutsTo;
      Xw = QQ, fw = {}, Object.keys(Vw).forEach((function(QQ) {
        -1 === hw.indexOf(QQ) && delete Vw[QQ]
      })), Xw.forEach((function(QQ) {
        var FQ = QQ.mixout ? QQ.mixout() : {};
        if (Object.keys(FQ).forEach((function(QQ) {
            "function" === typeof FQ[QQ] && (wQ[QQ] = FQ[QQ]), "object" === bQ(FQ[QQ]) && Object.keys(FQ[QQ]).forEach((function(LQ) {
              wQ[QQ] || (wQ[QQ] = {}), wQ[QQ][LQ] = FQ[QQ][LQ]
            }))
          })), QQ.hooks) {
          var LQ = QQ.hooks();
          Object.keys(LQ).forEach((function(QQ) {
            fw[QQ] || (fw[QQ] = []), fw[QQ].push(LQ[QQ])
          }))
        }
        QQ.provides && QQ.provides(Vw)
      }))
    }([ww, UL, NL, TL, KL, gL, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              pL(), PL = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            SL(Jw("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            CL && CL.disconnect()
          },
          watch: function(QQ) {
            var FQ = QQ.observeMutationsRoot;
            PL ? cL() : SL(Jw("mutationObserverCallbacks", {
              observeMutationsRoot: FQ
            }))
          }
        }
      }
    }, yL, Qq, Fq, {
      hooks: function() {
        return {
          parseNodeAttributes: function(QQ, FQ) {
            var wQ = FQ.getAttribute("data-fa-symbol"),
              LQ = null !== wQ && ("" === wQ || wQ);
            return QQ.symbol = LQ, QQ
          }
        }
      }
    }], {
      mixoutsTo: yw
    });
    var wq = yw.noAuto,
      Lq = yw.config,
      qq = yw.library,
      oq = yw.dom,
      Dq = yw.parse,
      kq = yw.findIconDefinition,
      vq = yw.toHtml,
      mq = yw.icon,
      uq = yw.layer,
      Hq = yw.text,
      bq = yw.counter
  },
  6516: QQ => {
    QQ.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);