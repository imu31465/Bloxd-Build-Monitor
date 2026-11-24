/*! For license information please see yma3ej.fa-renderer.bf95237e.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6745: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      FontAwesomeIcon: () => YT
    });
    var WT = mT(6737),
      zT = mT(5066),
      MT = mT.n(zT),
      gT = mT(63);

    function nT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function HT(TT, UT, mT) {
      return (UT = function(TT) {
        var UT = function(TT, UT) {
          if ("object" != typeof TT || !TT) return TT;
          var mT = TT[Symbol.toPrimitive];
          if (void 0 !== mT) {
            var WT = mT.call(TT, UT || "default");
            if ("object" != typeof WT) return WT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === UT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == typeof UT ? UT : UT + ""
      }(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function kT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function jT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? kT(Object(mT), !0).forEach((function(UT) {
          HT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : kT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function lT(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        var mT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != mT) {
          var WT, zT, MT, gT, nT = [],
            HT = !0,
            kT = !1;
          try {
            if (MT = (mT = mT.call(TT)).next, 0 === UT) {
              if (Object(mT) !== mT) return;
              HT = !1
            } else
              for (; !(HT = (WT = MT.call(mT)).done) && (nT.push(WT.value), nT.length !== UT); HT = !0);
          } catch (TT) {
            kT = !0, zT = TT
          } finally {
            try {
              if (!HT && null != mT.return && (gT = mT.return(), Object(gT) !== gT)) return
            } finally {
              if (kT) throw zT
            }
          }
          return nT
        }
      }(TT, UT) || BT(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function LT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return nT(TT)
      }(TT) || function(TT) {
        if ("undefined" != typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || BT(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pT(TT) {
      return pT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, pT(TT)
    }

    function BT(TT, UT) {
      if (TT) {
        if ("string" == typeof TT) return nT(TT, UT);
        var mT = {}.toString.call(TT).slice(8, -1);
        return "Object" === mT && TT.constructor && (mT = TT.constructor.name), "Map" === mT || "Set" === mT ? Array.from(TT) : "Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT) ? nT(TT, UT) : void 0
      }
    }
    var ZT;
    try {
      var cT = mT(6753);
      ZT = cT.version
    } catch (xT) {
      ZT = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function vT(TT) {
      var UT = TT.beat,
        mT = TT.fade,
        WT = TT.beatFade,
        zT = TT.bounce,
        MT = TT.shake,
        gT = TT.flash,
        nT = TT.spin,
        kT = TT.spinPulse,
        jT = TT.spinReverse,
        LT = TT.pulse,
        pT = TT.fixedWidth,
        BT = TT.inverse,
        cT = TT.border,
        vT = TT.listItem,
        fT = TT.flip,
        qT = TT.size,
        iT = TT.rotation,
        bT = TT.pull,
        OT = TT.swapOpacity,
        eT = TT.rotateBy,
        YT = TT.widthAuto,
        JT = function(TT, UT) {
          for (var mT = lT(TT.split("-"), 2), WT = mT[0], zT = mT[1], MT = lT(UT.split("-"), 2), gT = MT[0], nT = MT[1], HT = WT.split("."), kT = gT.split("."), jT = 0; jT < Math.max(HT.length, kT.length); jT++) {
            var LT = HT[jT] || "0",
              pT = kT[jT] || "0",
              BT = parseInt(LT, 10),
              ZT = parseInt(pT, 10);
            if (BT !== ZT) return BT > ZT
          }
          for (var cT = 0; cT < Math.max(HT.length, kT.length); cT++) {
            var vT = HT[cT] || "0",
              fT = kT[cT] || "0";
            if (vT !== fT && vT.length !== fT.length) return vT.length < fT.length
          }
          return !(zT && !nT)
        }(ZT, "7.0.0"),
        xT = HT(HT(HT(HT(HT(HT({
          "fa-beat": UT,
          "fa-fade": mT,
          "fa-beat-fade": WT,
          "fa-bounce": zT,
          "fa-shake": MT,
          "fa-flash": gT,
          "fa-spin": nT,
          "fa-spin-reverse": jT,
          "fa-spin-pulse": kT,
          "fa-pulse": LT,
          "fa-fw": pT,
          "fa-inverse": BT,
          "fa-border": cT,
          "fa-li": vT,
          "fa-flip": !0 === fT,
          "fa-flip-horizontal": "horizontal" === fT || "both" === fT,
          "fa-flip-vertical": "vertical" === fT || "both" === fT
        }, "fa-".concat(qT), "undefined" !== typeof qT && null !== qT), "fa-rotate-".concat(iT), "undefined" !== typeof iT && null !== iT && 0 !== iT), "fa-pull-".concat(bT), "undefined" !== typeof bT && null !== bT), "fa-swap-opacity", OT), "fa-rotate-by", JT && eT), "fa-width-auto", JT && YT);
      return Object.keys(xT).map((function(TT) {
        return xT[TT] ? TT : null
      })).filter((function(TT) {
        return TT
      }))
    }

    function fT(TT) {
      return UT = TT, (UT -= 0) === UT ? TT : (TT = TT.replace(/[\-_\s]+(.)?/g, (function(TT, UT) {
        return UT ? UT.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + TT.substr(1);
      var UT
    }
    var qT = ["style"];
    var iT = !1;
    try {
      iT = !0
    } catch (xT) {}

    function bT(TT) {
      return TT && "object" === pT(TT) && TT.prefix && TT.iconName && TT.icon ? TT : WT.parse.icon ? WT.parse.icon(TT) : null === TT ? null : TT && "object" === pT(TT) && TT.prefix && TT.iconName ? TT : Array.isArray(TT) && 2 === TT.length ? {
        prefix: TT[0],
        iconName: TT[1]
      } : "string" === typeof TT ? {
        prefix: "fas",
        iconName: TT
      } : void 0
    }

    function OT(TT, UT) {
      return Array.isArray(UT) && UT.length > 0 || !Array.isArray(UT) && UT ? HT({}, TT, UT) : {}
    }
    var eT = {
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
      YT = gT.forwardRef((function(TT, UT) {
        var mT = jT(jT({}, eT), TT),
          zT = mT.icon,
          MT = mT.mask,
          gT = mT.symbol,
          nT = mT.className,
          HT = mT.title,
          kT = mT.titleId,
          lT = mT.maskId,
          pT = bT(zT),
          BT = OT("classes", [].concat(LT(vT(mT)), LT((nT || "").split(" ")))),
          ZT = OT("transform", "string" === typeof mT.transform ? WT.parse.transform(mT.transform) : mT.transform),
          cT = OT("mask", bT(MT)),
          fT = (0, WT.icon)(pT, jT(jT(jT(jT({}, BT), ZT), cT), {}, {
            symbol: gT,
            title: HT,
            titleId: kT,
            maskId: lT
          }));
        if (!fT) return function() {
          var TT;
          !iT && console && "function" === typeof console.error && (TT = console).error.apply(TT, arguments)
        }("Could not find icon", pT), null;
        var qT = fT.abstract,
          YT = {
            ref: UT
          };
        return Object.keys(mT).forEach((function(TT) {
          eT.hasOwnProperty(TT) || (YT[TT] = mT[TT])
        })), JT(qT[0], YT)
      }));
    YT.displayName = "FontAwesomeIcon", YT.propTypes = {
      beat: MT().bool,
      border: MT().bool,
      beatFade: MT().bool,
      bounce: MT().bool,
      className: MT().string,
      fade: MT().bool,
      flash: MT().bool,
      mask: MT().oneOfType([MT().object, MT().array, MT().string]),
      maskId: MT().string,
      fixedWidth: MT().bool,
      inverse: MT().bool,
      flip: MT().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: MT().oneOfType([MT().object, MT().array, MT().string]),
      listItem: MT().bool,
      pull: MT().oneOf(["right", "left"]),
      pulse: MT().bool,
      rotation: MT().oneOf([0, 90, 180, 270]),
      rotateBy: MT().bool,
      shake: MT().bool,
      size: MT().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: MT().bool,
      spinPulse: MT().bool,
      spinReverse: MT().bool,
      symbol: MT().oneOfType([MT().bool, MT().string]),
      title: MT().string,
      titleId: MT().string,
      transform: MT().oneOfType([MT().string, MT().object]),
      swapOpacity: MT().bool,
      widthAuto: MT().bool
    };
    var JT = function TT(UT, mT) {
      var WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof mT) return mT;
      var zT = (mT.children || []).map((function(mT) {
          return TT(UT, mT)
        })),
        MT = Object.keys(mT.attributes || {}).reduce((function(TT, UT) {
          var WT = mT.attributes[UT];
          switch (UT) {
            case "class":
              TT.attrs.className = WT, delete mT.attributes.class;
              break;
            case "style":
              TT.attrs.style = WT.split(";").map((function(TT) {
                return TT.trim()
              })).filter((function(TT) {
                return TT
              })).reduce((function(TT, UT) {
                var mT, WT = UT.indexOf(":"),
                  zT = fT(UT.slice(0, WT)),
                  MT = UT.slice(WT + 1).trim();
                return zT.startsWith("webkit") ? TT[(mT = zT, mT.charAt(0).toUpperCase() + mT.slice(1))] = MT : TT[zT] = MT, TT
              }), {});
              break;
            default:
              0 === UT.indexOf("aria-") || 0 === UT.indexOf("data-") ? TT.attrs[UT.toLowerCase()] = WT : TT.attrs[fT(UT)] = WT
          }
          return TT
        }), {
          attrs: {}
        }),
        gT = WT.style,
        nT = void 0 === gT ? {} : gT,
        HT = function(TT, UT) {
          if (null == TT) return {};
          var mT, WT, zT = function(TT, UT) {
            if (null == TT) return {};
            var mT = {};
            for (var WT in TT)
              if ({}.hasOwnProperty.call(TT, WT)) {
                if (-1 !== UT.indexOf(WT)) continue;
                mT[WT] = TT[WT]
              } return mT
          }(TT, UT);
          if (Object.getOwnPropertySymbols) {
            var MT = Object.getOwnPropertySymbols(TT);
            for (WT = 0; WT < MT.length; WT++) mT = MT[WT], -1 === UT.indexOf(mT) && {}.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
          }
          return zT
        }(WT, qT);
      return MT.attrs.style = jT(jT({}, MT.attrs.style), nT), UT.apply(void 0, [mT.tag, jT(jT({}, MT.attrs), HT)].concat(LT(zT)))
    }.bind(null, gT.createElement)
  },
  5068: (TT, UT, mT) => {
    var WT = mT(5072);

    function zT() {}

    function MT() {}
    MT.resetWarningCache = zT, TT.exports = function() {
      function TT(TT, UT, mT, zT, MT, gT) {
        if (gT !== WT) {
          var nT = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw nT.name = "Invariant Violation", nT
        }
      }

      function UT() {
        return TT
      }
      TT.isRequired = TT;
      var mT = {
        array: TT,
        bigint: TT,
        bool: TT,
        func: TT,
        number: TT,
        object: TT,
        string: TT,
        symbol: TT,
        any: TT,
        arrayOf: UT,
        element: TT,
        elementType: TT,
        instanceOf: UT,
        node: TT,
        objectOf: UT,
        oneOf: UT,
        oneOfType: UT,
        shape: UT,
        exact: UT,
        checkPropTypes: MT,
        resetWarningCache: zT
      };
      return mT.PropTypes = mT, mT
    }
  },
  5066: (TT, UT, mT) => {
    TT.exports = mT(5068)()
  },
  5072: TT => {
    TT.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6737: (TT, UT, mT) => {
    function WT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function zT(TT, UT) {
      for (var mT = 0; mT < UT.length; mT++) {
        var WT = UT[mT];
        WT.enumerable = WT.enumerable || !1, WT.configurable = !0, "value" in WT && (WT.writable = !0), Object.defineProperty(TT, lT(WT.key), WT)
      }
    }

    function MT(TT, UT) {
      var mT = "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
      if (!mT) {
        if (Array.isArray(TT) || (mT = pT(TT)) || UT && TT && "number" == typeof TT.length) {
          mT && (TT = mT);
          var WT = 0,
            zT = function() {};
          return {
            s: zT,
            n: function() {
              return WT >= TT.length ? {
                done: !0
              } : {
                done: !1,
                value: TT[WT++]
              }
            },
            e: function(TT) {
              throw TT
            },
            f: zT
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var MT, gT = !0,
        nT = !1;
      return {
        s: function() {
          mT = mT.call(TT)
        },
        n: function() {
          var TT = mT.next();
          return gT = TT.done, TT
        },
        e: function(TT) {
          nT = !0, MT = TT
        },
        f: function() {
          try {
            gT || null == mT.return || mT.return()
          } finally {
            if (nT) throw MT
          }
        }
      }
    }

    function gT(TT, UT, mT) {
      return (UT = lT(UT)) in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function nT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function HT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? nT(Object(mT), !0).forEach((function(UT) {
          gT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : nT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function kT(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        var mT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != mT) {
          var WT, zT, MT, gT, nT = [],
            HT = !0,
            kT = !1;
          try {
            if (MT = (mT = mT.call(TT)).next, 0 === UT) {
              if (Object(mT) !== mT) return;
              HT = !1
            } else
              for (; !(HT = (WT = MT.call(mT)).done) && (nT.push(WT.value), nT.length !== UT); HT = !0);
          } catch (TT) {
            kT = !0, zT = TT
          } finally {
            try {
              if (!HT && null != mT.return && (gT = mT.return(), Object(gT) !== gT)) return
            } finally {
              if (kT) throw zT
            }
          }
          return nT
        }
      }(TT, UT) || pT(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function jT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return WT(TT)
      }(TT) || function(TT) {
        if ("undefined" != typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || pT(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lT(TT) {
      var UT = function(TT, UT) {
        if ("object" != typeof TT || !TT) return TT;
        var mT = TT[Symbol.toPrimitive];
        if (void 0 !== mT) {
          var WT = mT.call(TT, UT || "default");
          if ("object" != typeof WT) return WT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === UT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == typeof UT ? UT : UT + ""
    }

    function LT(TT) {
      return LT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, LT(TT)
    }

    function pT(TT, UT) {
      if (TT) {
        if ("string" == typeof TT) return WT(TT, UT);
        var mT = {}.toString.call(TT).slice(8, -1);
        return "Object" === mT && TT.constructor && (mT = TT.constructor.name), "Map" === mT || "Set" === mT ? Array.from(TT) : "Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT) ? WT(TT, UT) : void 0
      }
    }
    mT.r(UT), mT.d(UT, {
      api: () => om,
      config: () => Wz,
      counter: () => Lz,
      dom: () => Mz,
      findIconDefinition: () => nz,
      icon: () => kz,
      layer: () => jz,
      library: () => zz,
      noAuto: () => mz,
      parse: () => gz,
      text: () => lz,
      toHtml: () => Hz
    });
    var BT = function() {},
      ZT = {},
      cT = {},
      vT = null,
      fT = {
        mark: BT,
        measure: BT
      };
    try {
      "undefined" !== typeof window && (ZT = window), "undefined" !== typeof document && (cT = document), "undefined" !== typeof MutationObserver && (vT = MutationObserver), "undefined" !== typeof performance && (fT = performance)
    } catch (KT) {}
    var qT, iT, bT = (ZT.navigator || {}).userAgent,
      OT = void 0 === bT ? "" : bT,
      eT = ZT,
      YT = cT,
      JT = vT,
      xT = fT,
      dT = (eT.document, !!YT.documentElement && !!YT.head && "function" === typeof YT.addEventListener && "function" === typeof YT.createElement),
      wT = ~OT.indexOf("MSIE") || ~OT.indexOf("Trident/"),
      tT = {
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
      aT = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      yT = "classic",
      XT = "duotone",
      IT = "sharp",
      QT = "sharp-duotone",
      sT = "chisel",
      FT = "etch",
      PT = "graphite",
      VT = "jelly",
      uT = "jelly-duo",
      CT = "jelly-fill",
      rT = "notdog",
      KT = "notdog-duo",
      ST = "slab",
      GT = "slab-press",
      NT = "thumbprint",
      ET = "utility",
      hT = "utility-duo",
      DT = "utility-fill",
      oT = "whiteboard",
      AT = [yT, XT, IT, QT, sT, FT, PT, VT, uT, CT, rT, KT, ST, GT, NT, ET, hT, DT, oT],
      RT = (gT(gT(gT(gT(gT(gT(gT(gT(gT(gT(qT = {}, yT, "Classic"), XT, "Duotone"), IT, "Sharp"), QT, "Sharp Duotone"), sT, "Chisel"), FT, "Etch"), PT, "Graphite"), VT, "Jelly"), uT, "Jelly Duo"), CT, "Jelly Fill"), gT(gT(gT(gT(gT(gT(gT(gT(gT(qT, rT, "Notdog"), KT, "Notdog Duo"), ST, "Slab"), GT, "Slab Press"), NT, "Thumbprint"), ET, "Utility"), hT, "Utility Duo"), DT, "Utility Fill"), oT, "Whiteboard"), new Map([
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
      TU = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      UU = {
        fak: "kit",
        "fa-kit": "kit"
      },
      mU = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      WU = (gT(gT({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      zU = {
        "kit-duotone": "fakd"
      },
      MU = "duotone-group",
      gU = "swap-opacity",
      nU = "primary",
      HU = "secondary",
      kU = (gT(gT(gT(gT(gT(gT(gT(gT(gT(gT(iT = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), gT(gT(gT(gT(gT(gT(gT(gT(gT(iT, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), gT(gT({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      jU = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      lU = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      LU = lU.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      pU = [].concat(jT(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", MU, gU, nU, HU]).concat(lU.map((function(TT) {
        return "".concat(TT, "x")
      }))).concat(LU.map((function(TT) {
        return "w-".concat(TT)
      }))),
      BU = "___FONT_AWESOME___",
      ZU = "svg-inline--fa",
      cU = "data-fa-i2svg",
      vU = "data-fa-pseudo-element",
      fU = "data-prefix",
      qU = "data-icon",
      iU = "fontawesome-i2svg",
      bU = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      OU = ["::before", "::after", ":before", ":after"],
      eU = function() {
        try {
          return !0
        } catch (TT) {
          return !1
        }
      }();

    function YU(TT) {
      return new Proxy(TT, {
        get: function(TT, UT) {
          return UT in TT ? TT[UT] : TT[yT]
        }
      })
    }
    var JU = HT({}, tT);
    JU[yT] = HT(HT(HT(HT({}, {
      "fa-duotone": "duotone"
    }), tT[yT]), UU), mU);
    var xU = YU(JU),
      dU = HT({}, {
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
    dU[yT] = HT(HT(HT(HT({}, {
      duotone: "fad"
    }), dU[yT]), WU), zU);
    var wU = YU(dU),
      tU = HT({}, kU);
    tU[yT] = HT(HT({}, tU[yT]), {
      fak: "fa-kit"
    });
    var aU = YU(tU),
      yU = HT({}, {
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
    yU[yT] = HT(HT({}, yU[yT]), {
      "fa-kit": "fak"
    });
    YU(yU);
    var XU = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      IU = "fa-layers-text",
      QU = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      sU = (YU(HT({}, {
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
      FU = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      PU = [].concat(jT(["kit"]), jT(pU)),
      VU = eT.FontAwesomeConfig || {};
    if (YT && "function" === typeof YT.querySelector) {
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
      ].forEach((function(TT) {
        var UT = kT(TT, 2),
          mT = UT[0],
          WT = UT[1],
          zT = function(TT) {
            return "" === TT || "false" !== TT && ("true" === TT || TT)
          }(function(TT) {
            var UT = YT.querySelector("script[" + TT + "]");
            if (UT) return UT.getAttribute(TT)
          }(mT));
        void 0 !== zT && null !== zT && (VU[WT] = zT)
      }))
    }
    var uU = {
      styleDefault: "solid",
      familyDefault: yT,
      cssPrefix: "fa",
      replacementClass: ZU,
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
    VU.familyPrefix && (VU.cssPrefix = VU.familyPrefix);
    var CU = HT(HT({}, uU), VU);
    CU.autoReplaceSvg || (CU.observeMutations = !1);
    var rU = {};
    Object.keys(uU).forEach((function(TT) {
      Object.defineProperty(rU, TT, {
        enumerable: !0,
        set: function(UT) {
          CU[TT] = UT, KU.forEach((function(TT) {
            return TT(rU)
          }))
        },
        get: function() {
          return CU[TT]
        }
      })
    })), Object.defineProperty(rU, "familyPrefix", {
      enumerable: !0,
      set: function(TT) {
        CU.cssPrefix = TT, KU.forEach((function(TT) {
          return TT(rU)
        }))
      },
      get: function() {
        return CU.cssPrefix
      }
    }), eT.FontAwesomeConfig = rU;
    var KU = [];
    var SU = 16,
      GU = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function NU() {
      for (var TT = 12, UT = ""; TT-- > 0;) UT += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return UT
    }

    function EU(TT) {
      for (var UT = [], mT = (TT || []).length >>> 0; mT--;) UT[mT] = TT[mT];
      return UT
    }

    function hU(TT) {
      return TT.classList ? EU(TT.classList) : (TT.getAttribute("class") || "").split(" ").filter((function(TT) {
        return TT
      }))
    }

    function DU(TT) {
      return "".concat(TT).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function oU(TT) {
      return Object.keys(TT || {}).reduce((function(UT, mT) {
        return UT + "".concat(mT, ": ").concat(TT[mT].trim(), ";")
      }), "")
    }

    function AU(TT) {
      return TT.size !== GU.size || TT.x !== GU.x || TT.y !== GU.y || TT.rotate !== GU.rotate || TT.flipX || TT.flipY
    }

    function RU() {
      var TT = "fa",
        UT = ZU,
        mT = rU.cssPrefix,
        WT = rU.replacementClass,
        zT = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (mT !== TT || WT !== UT) {
        var MT = new RegExp("\\.".concat(TT, "\\-"), "g"),
          gT = new RegExp("\\--".concat(TT, "\\-"), "g"),
          nT = new RegExp("\\.".concat(UT), "g");
        zT = zT.replace(MT, ".".concat(mT, "-")).replace(gT, "--".concat(mT, "-")).replace(nT, ".".concat(WT))
      }
      return zT
    }
    var Tm = !1;

    function Um() {
      rU.autoAddCss && !Tm && (! function(TT) {
        if (TT && dT) {
          var UT = YT.createElement("style");
          UT.setAttribute("type", "text/css"), UT.innerHTML = TT;
          for (var mT = YT.head.childNodes, WT = null, zT = mT.length - 1; zT > -1; zT--) {
            var MT = mT[zT],
              gT = (MT.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(gT) > -1 && (WT = MT)
          }
          YT.head.insertBefore(UT, WT)
        }
      }(RU()), Tm = !0)
    }
    var mm = {
        mixout: function() {
          return {
            dom: {
              css: RU,
              insertCss: Um
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              Um()
            },
            beforeI2svg: function() {
              Um()
            }
          }
        }
      },
      Wm = eT || {};
    Wm[BU] || (Wm[BU] = {}), Wm[BU].styles || (Wm[BU].styles = {}), Wm[BU].hooks || (Wm[BU].hooks = {}), Wm[BU].shims || (Wm[BU].shims = []);
    var zm = Wm[BU],
      Mm = [],
      gm = function() {
        YT.removeEventListener("DOMContentLoaded", gm), nm = 1, Mm.map((function(TT) {
          return TT()
        }))
      },
      nm = !1;

    function Hm(TT) {
      var UT = TT.tag,
        mT = TT.attributes,
        WT = void 0 === mT ? {} : mT,
        zT = TT.children,
        MT = void 0 === zT ? [] : zT;
      return "string" === typeof TT ? DU(TT) : "<".concat(UT, " ").concat(function(TT) {
        return Object.keys(TT || {}).reduce((function(UT, mT) {
          return UT + "".concat(mT, '="').concat(DU(TT[mT]), '" ')
        }), "").trim()
      }(WT), ">").concat(MT.map(Hm).join(""), "</").concat(UT, ">")
    }

    function km(TT, UT, mT) {
      if (TT && TT[UT] && TT[UT][mT]) return {
        prefix: UT,
        iconName: mT,
        icon: TT[UT][mT]
      }
    }
    dT && ((nm = (YT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(YT.readyState)) || YT.addEventListener("DOMContentLoaded", gm));
    var jm = function(TT, UT, mT, WT) {
      var zT, MT, gT, nT = Object.keys(TT),
        HT = nT.length,
        kT = void 0 !== WT ? function(TT, UT) {
          return function(mT, WT, zT, MT) {
            return TT.call(UT, mT, WT, zT, MT)
          }
        }(UT, WT) : UT;
      for (void 0 === mT ? (zT = 1, gT = TT[nT[0]]) : (zT = 0, gT = mT); zT < HT; zT++) gT = kT(gT, TT[MT = nT[zT]], MT, TT);
      return gT
    };

    function lm(TT) {
      return 1 !== jT(TT).length ? null : TT.codePointAt(0).toString(16)
    }

    function Lm(TT) {
      return Object.keys(TT).reduce((function(UT, mT) {
        var WT = TT[mT];
        return !!WT.icon ? UT[WT.iconName] = WT.icon : UT[mT] = WT, UT
      }), {})
    }

    function pm(TT, UT) {
      var mT = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        WT = void 0 !== mT && mT,
        zT = Lm(UT);
      "function" !== typeof zm.hooks.addPack || WT ? zm.styles[TT] = HT(HT({}, zm.styles[TT] || {}), zT) : zm.hooks.addPack(TT, Lm(UT)), "fas" === TT && pm("fa", UT)
    }
    var Bm = zm.styles,
      Zm = zm.shims,
      cm = Object.keys(aU),
      fm = cm.reduce((function(TT, UT) {
        return TT[UT] = Object.keys(aU[UT]), TT
      }), {}),
      qm = null,
      im = {},
      bm = {},
      Om = {},
      em = {},
      Ym = {};

    function Jm(TT, UT) {
      var mT, WT = UT.split("-"),
        zT = WT[0],
        MT = WT.slice(1).join("-");
      return zT !== TT || "" === MT || (mT = MT, ~PU.indexOf(mT)) ? null : MT
    }
    var xm, dm = function() {
      var TT = function(TT) {
        return jm(Bm, (function(UT, mT, WT) {
          return UT[WT] = jm(mT, TT, {}), UT
        }), {})
      };
      im = TT((function(TT, UT, mT) {
        (UT[3] && (TT[UT[3]] = mT), UT[2]) && UT[2].filter((function(TT) {
          return "number" === typeof TT
        })).forEach((function(UT) {
          TT[UT.toString(16)] = mT
        }));
        return TT
      })), bm = TT((function(TT, UT, mT) {
        (TT[mT] = mT, UT[2]) && UT[2].filter((function(TT) {
          return "string" === typeof TT
        })).forEach((function(UT) {
          TT[UT] = mT
        }));
        return TT
      })), Ym = TT((function(TT, UT, mT) {
        var WT = UT[2];
        return TT[mT] = mT, WT.forEach((function(UT) {
          TT[UT] = mT
        })), TT
      }));
      var UT = "far" in Bm || rU.autoFetchSvg,
        mT = jm(Zm, (function(TT, mT) {
          var WT = mT[0],
            zT = mT[1],
            MT = mT[2];
          return "far" !== zT || UT || (zT = "fas"), "string" === typeof WT && (TT.names[WT] = {
            prefix: zT,
            iconName: MT
          }), "number" === typeof WT && (TT.unicodes[WT.toString(16)] = {
            prefix: zT,
            iconName: MT
          }), TT
        }), {
          names: {},
          unicodes: {}
        });
      Om = mT.names, em = mT.unicodes, qm = Xm(rU.styleDefault, {
        family: rU.familyDefault
      })
    };

    function wm(TT, UT) {
      return (im[TT] || {})[UT]
    }

    function tm(TT, UT) {
      return (Ym[TT] || {})[UT]
    }

    function am(TT) {
      return Om[TT] || {
        prefix: null,
        iconName: null
      }
    }

    function ym() {
      return qm
    }
    xm = function(TT) {
      qm = Xm(TT.styleDefault, {
        family: rU.familyDefault
      })
    }, KU.push(xm), dm();

    function Xm(TT) {
      var UT = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        mT = void 0 === UT ? yT : UT,
        WT = xU[mT][TT];
      if (mT === XT && !TT) return "fad";
      var zT = wU[mT][TT] || wU[mT][WT],
        MT = TT in zm.styles ? TT : null;
      return zT || MT || null
    }

    function Im(TT) {
      return TT.sort().filter((function(TT, UT, mT) {
        return mT.indexOf(TT) === UT
      }))
    }
    var Qm = jU.concat(TU);

    function sm(TT) {
      var UT = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        mT = void 0 !== UT && UT,
        WT = null,
        zT = Im(TT.filter((function(TT) {
          return Qm.includes(TT)
        }))),
        MT = Im(TT.filter((function(TT) {
          return !Qm.includes(TT)
        }))),
        gT = kT(zT.filter((function(TT) {
          return WT = TT, !aT.includes(TT)
        })), 1)[0],
        nT = void 0 === gT ? null : gT,
        jT = function(TT) {
          var UT = yT,
            mT = cm.reduce((function(TT, UT) {
              return TT[UT] = "".concat(rU.cssPrefix, "-").concat(UT), TT
            }), {});
          return AT.forEach((function(WT) {
            (TT.includes(mT[WT]) || TT.some((function(TT) {
              return fm[WT].includes(TT)
            }))) && (UT = WT)
          })), UT
        }(zT),
        lT = HT(HT({}, function(TT) {
          var UT = [],
            mT = null;
          return TT.forEach((function(TT) {
            var WT = Jm(rU.cssPrefix, TT);
            WT ? mT = WT : TT && UT.push(TT)
          })), {
            iconName: mT,
            rest: UT
          }
        }(MT)), {}, {
          prefix: Xm(nT, {
            family: jT
          })
        });
      return HT(HT(HT({}, lT), function(TT) {
        var UT = TT.values,
          mT = TT.family,
          WT = TT.canonical,
          zT = TT.givenPrefix,
          MT = void 0 === zT ? "" : zT,
          gT = TT.styles,
          nT = void 0 === gT ? {} : gT,
          HT = TT.config,
          kT = void 0 === HT ? {} : HT,
          jT = mT === XT,
          lT = UT.includes("fa-duotone") || UT.includes("fad"),
          LT = "duotone" === kT.familyDefault,
          pT = "fad" === WT.prefix || "fa-duotone" === WT.prefix;
        !jT && (lT || LT || pT) && (WT.prefix = "fad");
        (UT.includes("fa-brands") || UT.includes("fab")) && (WT.prefix = "fab");
        if (!WT.prefix && Fm.includes(mT)) {
          if (Object.keys(nT).find((function(TT) {
              return Pm.includes(TT)
            })) || kT.autoFetchSvg) {
            var BT = RT.get(mT).defaultShortPrefixId;
            WT.prefix = BT, WT.iconName = tm(WT.prefix, WT.iconName) || WT.iconName
          }
        }
        "fa" !== WT.prefix && "fa" !== MT || (WT.prefix = ym() || "fas");
        return WT
      }({
        values: TT,
        family: jT,
        styles: Bm,
        config: rU,
        canonical: lT,
        givenPrefix: WT
      })), function(TT, UT, mT) {
        var WT = mT.prefix,
          zT = mT.iconName;
        if (TT || !WT || !zT) return {
          prefix: WT,
          iconName: zT
        };
        var MT = "fa" === UT ? am(zT) : {},
          gT = tm(WT, zT);
        zT = MT.iconName || gT || zT, "far" !== (WT = MT.prefix || WT) || Bm.far || !Bm.fas || rU.autoFetchSvg || (WT = "fas");
        return {
          prefix: WT,
          iconName: zT
        }
      }(mT, WT, lT))
    }
    var Fm = AT.filter((function(TT) {
        return TT !== yT || TT !== XT
      })),
      Pm = Object.keys(kU).filter((function(TT) {
        return TT !== yT
      })).map((function(TT) {
        return Object.keys(kU[TT])
      })).flat();
    var Vm = function() {
        return function(TT, UT, mT) {
          return UT && zT(TT.prototype, UT), mT && zT(TT, mT), Object.defineProperty(TT, "prototype", {
            writable: !1
          }), TT
        }((function TT() {
          ! function(TT, UT) {
            if (!(TT instanceof UT)) throw new TypeError("Cannot call a class as a function")
          }(this, TT), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var TT = this, UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
            var zT = mT.reduce(this._pullDefinitions, {});
            Object.keys(zT).forEach((function(UT) {
              TT.definitions[UT] = HT(HT({}, TT.definitions[UT] || {}), zT[UT]), pm(UT, zT[UT]);
              var mT = aU[yT][UT];
              mT && pm(mT, zT[UT]), dm()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(TT, UT) {
            var mT = UT.prefix && UT.iconName && UT.icon ? {
              0: UT
            } : UT;
            return Object.keys(mT).map((function(UT) {
              var WT = mT[UT],
                zT = WT.prefix,
                MT = WT.iconName,
                gT = WT.icon,
                nT = gT[2];
              TT[zT] || (TT[zT] = {}), nT.length > 0 && nT.forEach((function(UT) {
                "string" === typeof UT && (TT[zT][UT] = gT)
              })), TT[zT][MT] = gT
            })), TT
          }
        }])
      }(),
      um = [],
      Cm = {},
      rm = {},
      Km = Object.keys(rm);

    function Sm(TT, UT) {
      for (var mT = arguments.length, WT = new Array(mT > 2 ? mT - 2 : 0), zT = 2; zT < mT; zT++) WT[zT - 2] = arguments[zT];
      return (Cm[TT] || []).forEach((function(TT) {
        UT = TT.apply(null, [UT].concat(WT))
      })), UT
    }

    function Gm(TT) {
      for (var UT = arguments.length, mT = new Array(UT > 1 ? UT - 1 : 0), WT = 1; WT < UT; WT++) mT[WT - 1] = arguments[WT];
      (Cm[TT] || []).forEach((function(TT) {
        TT.apply(null, mT)
      }))
    }

    function Nm() {
      var TT = arguments[0],
        UT = Array.prototype.slice.call(arguments, 1);
      return rm[TT] ? rm[TT].apply(null, UT) : void 0
    }

    function Em(TT) {
      "fa" === TT.prefix && (TT.prefix = "fas");
      var UT = TT.iconName,
        mT = TT.prefix || ym();
      if (UT) return UT = tm(mT, UT) || UT, km(hm.definitions, mT, UT) || km(zm.styles, mT, UT)
    }
    var hm = new Vm,
      Dm = {
        i2svg: function() {
          var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return dT ? (Gm("beforeI2svg", TT), Nm("pseudoElements2svg", TT), Nm("i2svg", TT)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var TT, UT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            mT = UT.autoReplaceSvgRoot;
          !1 === rU.autoReplaceSvg && (rU.autoReplaceSvg = !0), rU.observeMutations = !0, TT = function() {
            Am({
              autoReplaceSvgRoot: mT
            }), Gm("watch", UT)
          }, dT && (nm ? setTimeout(TT, 0) : Mm.push(TT))
        }
      },
      om = {
        noAuto: function() {
          rU.autoReplaceSvg = !1, rU.observeMutations = !1, Gm("noAuto")
        },
        config: rU,
        dom: Dm,
        parse: {
          icon: function(TT) {
            if (null === TT) return null;
            if ("object" === LT(TT) && TT.prefix && TT.iconName) return {
              prefix: TT.prefix,
              iconName: tm(TT.prefix, TT.iconName) || TT.iconName
            };
            if (Array.isArray(TT) && 2 === TT.length) {
              var UT = 0 === TT[1].indexOf("fa-") ? TT[1].slice(3) : TT[1],
                mT = Xm(TT[0]);
              return {
                prefix: mT,
                iconName: tm(mT, UT) || UT
              }
            }
            if ("string" === typeof TT && (TT.indexOf("".concat(rU.cssPrefix, "-")) > -1 || TT.match(XU))) {
              var WT = sm(TT.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: WT.prefix || ym(),
                iconName: tm(WT.prefix, WT.iconName) || WT.iconName
              }
            }
            if ("string" === typeof TT) {
              var zT = ym();
              return {
                prefix: zT,
                iconName: tm(zT, TT) || TT
              }
            }
          }
        },
        library: hm,
        findIconDefinition: Em,
        toHtml: Hm
      },
      Am = function() {
        var TT = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          UT = void 0 === TT ? YT : TT;
        (Object.keys(zm.styles).length > 0 || rU.autoFetchSvg) && dT && rU.autoReplaceSvg && om.dom.i2svg({
          node: UT
        })
      };

    function Rm(TT, UT) {
      return Object.defineProperty(TT, "abstract", {
        get: UT
      }), Object.defineProperty(TT, "html", {
        get: function() {
          return TT.abstract.map((function(TT) {
            return Hm(TT)
          }))
        }
      }), Object.defineProperty(TT, "node", {
        get: function() {
          if (dT) {
            var UT = YT.createElement("div");
            return UT.innerHTML = TT.html, UT.children
          }
        }
      }), TT
    }

    function TW(TT) {
      var UT = TT.icons,
        mT = UT.main,
        WT = UT.mask,
        zT = TT.prefix,
        MT = TT.iconName,
        gT = TT.transform,
        nT = TT.symbol,
        kT = TT.maskId,
        jT = TT.extra,
        lT = TT.watchable,
        LT = void 0 !== lT && lT,
        pT = WT.found ? WT : mT,
        BT = pT.width,
        ZT = pT.height,
        cT = [rU.replacementClass, MT ? "".concat(rU.cssPrefix, "-").concat(MT) : ""].filter((function(TT) {
          return -1 === jT.classes.indexOf(TT)
        })).filter((function(TT) {
          return "" !== TT || !!TT
        })).concat(jT.classes).join(" "),
        vT = {
          children: [],
          attributes: HT(HT({}, jT.attributes), {}, {
            "data-prefix": zT,
            "data-icon": MT,
            class: cT,
            role: jT.attributes.role || "img",
            viewBox: "0 0 ".concat(BT, " ").concat(ZT)
          })
        };
      (function(TT) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(UT) {
          return UT in TT
        }))
      })(jT.attributes) || jT.attributes["aria-hidden"] || (vT.attributes["aria-hidden"] = "true"), LT && (vT.attributes[cU] = "");
      var fT = HT(HT({}, vT), {}, {
          prefix: zT,
          iconName: MT,
          main: mT,
          mask: WT,
          maskId: kT,
          transform: gT,
          symbol: nT,
          styles: HT({}, jT.styles)
        }),
        qT = WT.found && mT.found ? Nm("generateAbstractMask", fT) || {
          children: [],
          attributes: {}
        } : Nm("generateAbstractIcon", fT) || {
          children: [],
          attributes: {}
        },
        iT = qT.children,
        bT = qT.attributes;
      return fT.children = iT, fT.attributes = bT, nT ? function(TT) {
        var UT = TT.prefix,
          mT = TT.iconName,
          WT = TT.children,
          zT = TT.attributes,
          MT = TT.symbol,
          gT = !0 === MT ? "".concat(UT, "-").concat(rU.cssPrefix, "-").concat(mT) : MT;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: HT(HT({}, zT), {}, {
              id: gT
            }),
            children: WT
          }]
        }]
      }(fT) : function(TT) {
        var UT = TT.children,
          mT = TT.main,
          WT = TT.mask,
          zT = TT.attributes,
          MT = TT.styles,
          gT = TT.transform;
        if (AU(gT) && mT.found && !WT.found) {
          var nT = {
            x: mT.width / mT.height / 2,
            y: .5
          };
          zT.style = oU(HT(HT({}, MT), {}, {
            "transform-origin": "".concat(nT.x + gT.x / 16, "em ").concat(nT.y + gT.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: zT,
          children: UT
        }]
      }(fT)
    }

    function UW(TT) {
      var UT = TT.content,
        mT = TT.width,
        WT = TT.height,
        zT = TT.transform,
        MT = TT.extra,
        gT = TT.watchable,
        nT = void 0 !== gT && gT,
        kT = HT(HT({}, MT.attributes), {}, {
          class: MT.classes.join(" ")
        });
      nT && (kT[cU] = "");
      var jT = HT({}, MT.styles);
      AU(zT) && (jT.transform = function(TT) {
        var UT = TT.transform,
          mT = TT.width,
          WT = void 0 === mT ? 16 : mT,
          zT = TT.height,
          MT = void 0 === zT ? 16 : zT,
          gT = TT.startCentered,
          nT = void 0 !== gT && gT,
          HT = "";
        return HT += nT && wT ? "translate(".concat(UT.x / SU - WT / 2, "em, ").concat(UT.y / SU - MT / 2, "em) ") : nT ? "translate(calc(-50% + ".concat(UT.x / SU, "em), calc(-50% + ").concat(UT.y / SU, "em)) ") : "translate(".concat(UT.x / SU, "em, ").concat(UT.y / SU, "em) "), HT += "scale(".concat(UT.size / SU * (UT.flipX ? -1 : 1), ", ").concat(UT.size / SU * (UT.flipY ? -1 : 1), ") "), HT + "rotate(".concat(UT.rotate, "deg) ")
      }({
        transform: zT,
        startCentered: !0,
        width: mT,
        height: WT
      }), jT["-webkit-transform"] = jT.transform);
      var lT = oU(jT);
      lT.length > 0 && (kT.style = lT);
      var LT = [];
      return LT.push({
        tag: "span",
        attributes: kT,
        children: [UT]
      }), LT
    }
    var mW = zm.styles;

    function WW(TT) {
      var UT = TT[0],
        mT = TT[1],
        WT = kT(TT.slice(4), 1)[0];
      return {
        found: !0,
        width: UT,
        height: mT,
        icon: Array.isArray(WT) ? {
          tag: "g",
          attributes: {
            class: "".concat(rU.cssPrefix, "-").concat(FU.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(rU.cssPrefix, "-").concat(FU.SECONDARY),
              fill: "currentColor",
              d: WT[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(rU.cssPrefix, "-").concat(FU.PRIMARY),
              fill: "currentColor",
              d: WT[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: WT
          }
        }
      }
    }
    var zW = {
      found: !1,
      width: 512,
      height: 512
    };

    function MW(TT, UT) {
      var mT = UT;
      return "fa" === UT && null !== rU.styleDefault && (UT = ym()), new Promise((function(WT, zT) {
        if ("fa" === mT) {
          var MT = am(TT) || {};
          TT = MT.iconName || TT, UT = MT.prefix || UT
        }
        if (TT && UT && mW[UT] && mW[UT][TT]) return WT(WW(mW[UT][TT]));
        ! function(TT, UT) {
          eU || rU.showMissingIcons || !TT || console.error('Icon with name "'.concat(TT, '" and prefix "').concat(UT, '" is missing.'))
        }(TT, UT), WT(HT(HT({}, zW), {}, {
          icon: rU.showMissingIcons && TT && Nm("missingIconAbstract") || {}
        }))
      }))
    }
    var gW = function() {},
      nW = rU.measurePerformance && xT && xT.mark && xT.measure ? xT : {
        mark: gW,
        measure: gW
      },
      HW = 'FA "7.2.0"',
      kW = function(TT) {
        nW.mark("".concat(HW, " ").concat(TT, " ends")), nW.measure("".concat(HW, " ").concat(TT), "".concat(HW, " ").concat(TT, " begins"), "".concat(HW, " ").concat(TT, " ends"))
      },
      jW = function(TT) {
        return nW.mark("".concat(HW, " ").concat(TT, " begins")),
          function() {
            return kW(TT)
          }
      },
      lW = function() {};

    function LW(TT) {
      return "string" === typeof(TT.getAttribute ? TT.getAttribute(cU) : null)
    }

    function pW(TT) {
      return YT.createElementNS("http://www.w3.org/2000/svg", TT)
    }

    function BW(TT) {
      return YT.createElement(TT)
    }

    function ZW(TT) {
      var UT = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        mT = void 0 === UT ? "svg" === TT.tag ? pW : BW : UT;
      if ("string" === typeof TT) return YT.createTextNode(TT);
      var WT = mT(TT.tag);
      return Object.keys(TT.attributes || []).forEach((function(UT) {
        WT.setAttribute(UT, TT.attributes[UT])
      })), (TT.children || []).forEach((function(TT) {
        WT.appendChild(ZW(TT, {
          ceFn: mT
        }))
      })), WT
    }
    var cW = {
      replace: function(TT) {
        var UT = TT[0];
        if (UT.parentNode)
          if (TT[1].forEach((function(TT) {
              UT.parentNode.insertBefore(ZW(TT), UT)
            })), null === UT.getAttribute(cU) && rU.keepOriginalSource) {
            var mT = YT.createComment(function(TT) {
              var UT = " ".concat(TT.outerHTML, " ");
              return "".concat(UT, "Font Awesome fontawesome.com ")
            }(UT));
            UT.parentNode.replaceChild(mT, UT)
          } else UT.remove()
      },
      nest: function(TT) {
        var UT = TT[0],
          mT = TT[1];
        if (~hU(UT).indexOf(rU.replacementClass)) return cW.replace(TT);
        var WT = new RegExp("".concat(rU.cssPrefix, "-.*"));
        if (delete mT[0].attributes.id, mT[0].attributes.class) {
          var zT = mT[0].attributes.class.split(" ").reduce((function(TT, UT) {
            return UT === rU.replacementClass || UT.match(WT) ? TT.toSvg.push(UT) : TT.toNode.push(UT), TT
          }), {
            toNode: [],
            toSvg: []
          });
          mT[0].attributes.class = zT.toSvg.join(" "), 0 === zT.toNode.length ? UT.removeAttribute("class") : UT.setAttribute("class", zT.toNode.join(" "))
        }
        var MT = mT.map((function(TT) {
          return Hm(TT)
        })).join("\n");
        UT.setAttribute(cU, ""), UT.innerHTML = MT
      }
    };

    function vW(TT) {
      TT()
    }

    function fW(TT, UT) {
      var mT = "function" === typeof UT ? UT : lW;
      if (0 === TT.length) mT();
      else {
        var WT = vW;
        "async" === rU.mutateApproach && (WT = eT.requestAnimationFrame || vW), WT((function() {
          var UT = !0 === rU.autoReplaceSvg ? cW.replace : cW[rU.autoReplaceSvg] || cW.replace,
            WT = jW("mutate");
          TT.map(UT), WT(), mT()
        }))
      }
    }
    var qW = !1;

    function iW() {
      qW = !0
    }

    function bW() {
      qW = !1
    }
    var OW = null;

    function eW(TT) {
      if (JT && rU.observeMutations) {
        var UT = TT.treeCallback,
          mT = void 0 === UT ? lW : UT,
          WT = TT.nodeCallback,
          zT = void 0 === WT ? lW : WT,
          MT = TT.pseudoElementsCallback,
          gT = void 0 === MT ? lW : MT,
          nT = TT.observeMutationsRoot,
          HT = void 0 === nT ? YT : nT;
        OW = new JT((function(TT) {
          if (!qW) {
            var UT = ym();
            EU(TT).forEach((function(TT) {
              if ("childList" === TT.type && TT.addedNodes.length > 0 && !LW(TT.addedNodes[0]) && (rU.searchPseudoElements && gT(TT.target), mT(TT.target)), "attributes" === TT.type && TT.target.parentNode && rU.searchPseudoElements && gT([TT.target], !0), "attributes" === TT.type && LW(TT.target) && ~sU.indexOf(TT.attributeName))
                if ("class" === TT.attributeName && function(TT) {
                    var UT = TT.getAttribute ? TT.getAttribute(fU) : null,
                      mT = TT.getAttribute ? TT.getAttribute(qU) : null;
                    return UT && mT
                  }(TT.target)) {
                  var WT = sm(hU(TT.target)),
                    MT = WT.prefix,
                    nT = WT.iconName;
                  TT.target.setAttribute(fU, MT || UT), nT && TT.target.setAttribute(qU, nT)
                } else(HT = TT.target) && HT.classList && HT.classList.contains && HT.classList.contains(rU.replacementClass) && zT(TT.target);
              var HT
            }))
          }
        })), dT && OW.observe(HT, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function YW(TT) {
      var UT, mT, WT = TT.getAttribute("data-prefix"),
        zT = TT.getAttribute("data-icon"),
        MT = void 0 !== TT.innerText ? TT.innerText.trim() : "",
        gT = sm(hU(TT));
      return gT.prefix || (gT.prefix = ym()), WT && zT && (gT.prefix = WT, gT.iconName = zT), gT.iconName && gT.prefix || (gT.prefix && MT.length > 0 && (gT.iconName = (UT = gT.prefix, mT = TT.innerText, (bm[UT] || {})[mT] || wm(gT.prefix, lm(TT.innerText)))), !gT.iconName && rU.autoFetchSvg && TT.firstChild && TT.firstChild.nodeType === Node.TEXT_NODE && (gT.iconName = TT.firstChild.data)), gT
    }

    function JW(TT) {
      var UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        mT = YW(TT),
        WT = mT.iconName,
        zT = mT.prefix,
        MT = mT.rest,
        gT = function(TT) {
          return EU(TT.attributes).reduce((function(TT, UT) {
            return "class" !== TT.name && "style" !== TT.name && (TT[UT.name] = UT.value), TT
          }), {})
        }(TT),
        nT = Sm("parseNodeAttributes", {}, TT),
        kT = UT.styleParser ? function(TT) {
          var UT = TT.getAttribute("style"),
            mT = [];
          return UT && (mT = UT.split(";").reduce((function(TT, UT) {
            var mT = UT.split(":"),
              WT = mT[0],
              zT = mT.slice(1);
            return WT && zT.length > 0 && (TT[WT] = zT.join(":").trim()), TT
          }), {})), mT
        }(TT) : [];
      return HT({
        iconName: WT,
        prefix: zT,
        transform: GU,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: MT,
          styles: kT,
          attributes: gT
        }
      }, nT)
    }
    var xW = zm.styles;

    function dW(TT) {
      var UT = "nest" === rU.autoReplaceSvg ? JW(TT, {
        styleParser: !1
      }) : JW(TT);
      return ~UT.extra.classes.indexOf(IU) ? Nm("generateLayersText", TT, UT) : Nm("generateSvgReplacementMutation", TT, UT)
    }

    function wW(TT) {
      var UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!dT) return Promise.resolve();
      var mT = YT.documentElement.classList,
        WT = function(TT) {
          return mT.add("".concat(iU, "-").concat(TT))
        },
        zT = function(TT) {
          return mT.remove("".concat(iU, "-").concat(TT))
        },
        MT = rU.autoFetchSvg ? [].concat(jT(TU), jT(jU)) : aT.concat(Object.keys(xW));
      MT.includes("fa") || MT.push("fa");
      var gT = [".".concat(IU, ":not([").concat(cU, "])")].concat(MT.map((function(TT) {
        return ".".concat(TT, ":not([").concat(cU, "])")
      }))).join(", ");
      if (0 === gT.length) return Promise.resolve();
      var nT = [];
      try {
        nT = EU(TT.querySelectorAll(gT))
      } catch (lT) {}
      if (!(nT.length > 0)) return Promise.resolve();
      WT("pending"), zT("complete");
      var HT = jW("onTree"),
        kT = nT.reduce((function(TT, UT) {
          try {
            var mT = dW(UT);
            mT && TT.push(mT)
          } catch (lT) {
            eU || "MissingIcon" === lT.name && console.error(lT)
          }
          return TT
        }), []);
      return new Promise((function(TT, mT) {
        Promise.all(kT).then((function(mT) {
          fW(mT, (function() {
            WT("active"), WT("complete"), zT("pending"), "function" === typeof UT && UT(), HT(), TT()
          }))
        })).catch((function(TT) {
          HT(), mT(TT)
        }))
      }))
    }

    function tW(TT) {
      var UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      dW(TT).then((function(TT) {
        TT && fW([TT], UT)
      }))
    }
    var aW = function(TT) {
        var UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          mT = UT.transform,
          WT = void 0 === mT ? GU : mT,
          zT = UT.symbol,
          MT = void 0 !== zT && zT,
          gT = UT.mask,
          nT = void 0 === gT ? null : gT,
          kT = UT.maskId,
          jT = void 0 === kT ? null : kT,
          lT = UT.classes,
          LT = void 0 === lT ? [] : lT,
          pT = UT.attributes,
          BT = void 0 === pT ? {} : pT,
          ZT = UT.styles,
          cT = void 0 === ZT ? {} : ZT;
        if (TT) {
          var vT = TT.prefix,
            fT = TT.iconName,
            qT = TT.icon;
          return Rm(HT({
            type: "icon"
          }, TT), (function() {
            return Gm("beforeDOMElementCreation", {
              iconDefinition: TT,
              params: UT
            }), TW({
              icons: {
                main: WW(qT),
                mask: nT ? WW(nT.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: vT,
              iconName: fT,
              transform: HT(HT({}, GU), WT),
              symbol: MT,
              maskId: jT,
              extra: {
                attributes: BT,
                styles: cT,
                classes: LT
              }
            })
          }))
        }
      },
      yW = {
        mixout: function() {
          return {
            icon: (TT = aW, function(UT) {
              var mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                WT = (UT || {}).icon ? UT : Em(UT || {}),
                zT = mT.mask;
              return zT && (zT = (zT || {}).icon ? zT : Em(zT || {})), TT(WT, HT(HT({}, mT), {}, {
                mask: zT
              }))
            })
          };
          var TT
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(TT) {
              return TT.treeCallback = wW, TT.nodeCallback = tW, TT
            }
          }
        },
        provides: function(TT) {
          TT.i2svg = function(TT) {
            var UT = TT.node,
              mT = void 0 === UT ? YT : UT,
              WT = TT.callback;
            return wW(mT, void 0 === WT ? function() {} : WT)
          }, TT.generateSvgReplacementMutation = function(TT, UT) {
            var mT = UT.iconName,
              WT = UT.prefix,
              zT = UT.transform,
              MT = UT.symbol,
              gT = UT.mask,
              nT = UT.maskId,
              HT = UT.extra;
            return new Promise((function(UT, jT) {
              Promise.all([MW(mT, WT), gT.iconName ? MW(gT.iconName, gT.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(gT) {
                var jT = kT(gT, 2),
                  lT = jT[0],
                  LT = jT[1];
                UT([TT, TW({
                  icons: {
                    main: lT,
                    mask: LT
                  },
                  prefix: WT,
                  iconName: mT,
                  transform: zT,
                  symbol: MT,
                  maskId: nT,
                  extra: HT,
                  watchable: !0
                })])
              })).catch(jT)
            }))
          }, TT.generateAbstractIcon = function(TT) {
            var UT, mT = TT.children,
              WT = TT.attributes,
              zT = TT.main,
              MT = TT.transform,
              gT = oU(TT.styles);
            return gT.length > 0 && (WT.style = gT), AU(MT) && (UT = Nm("generateAbstractTransformGrouping", {
              main: zT,
              transform: MT,
              containerWidth: zT.width,
              iconWidth: zT.width
            })), mT.push(UT || zT.icon), {
              children: mT,
              attributes: WT
            }
          }
        }
      },
      XW = {
        mixout: function() {
          return {
            layer: function(TT) {
              var UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                mT = UT.classes,
                WT = void 0 === mT ? [] : mT;
              return Rm({
                type: "layer"
              }, (function() {
                Gm("beforeDOMElementCreation", {
                  assembler: TT,
                  params: UT
                });
                var mT = [];
                return TT((function(TT) {
                  Array.isArray(TT) ? TT.map((function(TT) {
                    mT = mT.concat(TT.abstract)
                  })) : mT = mT.concat(TT.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(rU.cssPrefix, "-layers")].concat(jT(WT)).join(" ")
                  },
                  children: mT
                }]
              }))
            }
          }
        }
      },
      IW = {
        mixout: function() {
          return {
            counter: function(TT) {
              var UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                mT = UT.title,
                WT = void 0 === mT ? null : mT,
                zT = UT.classes,
                MT = void 0 === zT ? [] : zT,
                gT = UT.attributes,
                nT = void 0 === gT ? {} : gT,
                kT = UT.styles,
                lT = void 0 === kT ? {} : kT;
              return Rm({
                type: "counter",
                content: TT
              }, (function() {
                return Gm("beforeDOMElementCreation", {
                    content: TT,
                    params: UT
                  }),
                  function(TT) {
                    var UT = TT.content,
                      mT = TT.extra,
                      WT = HT(HT({}, mT.attributes), {}, {
                        class: mT.classes.join(" ")
                      }),
                      zT = oU(mT.styles);
                    zT.length > 0 && (WT.style = zT);
                    var MT = [];
                    return MT.push({
                      tag: "span",
                      attributes: WT,
                      children: [UT]
                    }), MT
                  }({
                    content: TT.toString(),
                    title: WT,
                    extra: {
                      attributes: nT,
                      styles: lT,
                      classes: ["".concat(rU.cssPrefix, "-layers-counter")].concat(jT(MT))
                    }
                  })
              }))
            }
          }
        }
      },
      QW = {
        mixout: function() {
          return {
            text: function(TT) {
              var UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                mT = UT.transform,
                WT = void 0 === mT ? GU : mT,
                zT = UT.classes,
                MT = void 0 === zT ? [] : zT,
                gT = UT.attributes,
                nT = void 0 === gT ? {} : gT,
                kT = UT.styles,
                lT = void 0 === kT ? {} : kT;
              return Rm({
                type: "text",
                content: TT
              }, (function() {
                return Gm("beforeDOMElementCreation", {
                  content: TT,
                  params: UT
                }), UW({
                  content: TT,
                  transform: HT(HT({}, GU), WT),
                  extra: {
                    attributes: nT,
                    styles: lT,
                    classes: ["".concat(rU.cssPrefix, "-layers-text")].concat(jT(MT))
                  }
                })
              }))
            }
          }
        },
        provides: function(TT) {
          TT.generateLayersText = function(TT, UT) {
            var mT = UT.transform,
              WT = UT.extra,
              zT = null,
              MT = null;
            if (wT) {
              var gT = parseInt(getComputedStyle(TT).fontSize, 10),
                nT = TT.getBoundingClientRect();
              zT = nT.width / gT, MT = nT.height / gT
            }
            return Promise.resolve([TT, UW({
              content: TT.innerHTML,
              width: zT,
              height: MT,
              transform: mT,
              extra: WT,
              watchable: !0
            })])
          }
        }
      },
      sW = new RegExp('"', "ug"),
      FW = [1105920, 1112319],
      PW = HT(HT(HT(HT({}, {
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
      VW = Object.keys(PW).reduce((function(TT, UT) {
        return TT[UT.toLowerCase()] = PW[UT], TT
      }), {}),
      uW = Object.keys(VW).reduce((function(TT, UT) {
        var mT = VW[UT];
        return TT[UT] = mT[900] || jT(Object.entries(mT))[0][1], TT
      }), {});

    function CW(TT, UT) {
      var mT = "".concat("data-fa-pseudo-element-pending").concat(UT.replace(":", "-"));
      return new Promise((function(WT, zT) {
        if (null !== TT.getAttribute(mT)) return WT();
        var MT = EU(TT.children).filter((function(TT) {
            return TT.getAttribute(vU) === UT
          }))[0],
          gT = eT.getComputedStyle(TT, UT),
          nT = gT.getPropertyValue("font-family"),
          kT = nT.match(QU),
          lT = gT.getPropertyValue("font-weight"),
          LT = gT.getPropertyValue("content");
        if (MT && !kT) return TT.removeChild(MT), WT();
        if (kT && "none" !== LT && "" !== LT) {
          var pT = gT.getPropertyValue("content"),
            BT = function(TT, UT) {
              var mT = TT.replace(/^['"]|['"]$/g, "").toLowerCase(),
                WT = parseInt(UT),
                zT = isNaN(WT) ? "normal" : WT;
              return (VW[mT] || {})[zT] || uW[mT]
            }(nT, lT),
            ZT = function(TT) {
              return lm(jT(TT.replace(sW, ""))[0] || "")
            }(pT),
            cT = kT[0].startsWith("FontAwesome"),
            vT = function(TT) {
              var UT = TT.getPropertyValue("font-feature-settings").includes("ss01"),
                mT = TT.getPropertyValue("content").replace(sW, ""),
                WT = mT.codePointAt(0),
                zT = WT >= FW[0] && WT <= FW[1],
                MT = 2 === mT.length && mT[0] === mT[1];
              return zT || MT || UT
            }(gT),
            fT = wm(BT, ZT),
            qT = fT;
          if (cT) {
            var iT = function(TT) {
              var UT = em[TT],
                mT = wm("fas", TT);
              return UT || (mT ? {
                prefix: "fas",
                iconName: mT
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(ZT);
            iT.iconName && iT.prefix && (fT = iT.iconName, BT = iT.prefix)
          }
          if (!fT || vT || MT && MT.getAttribute(fU) === BT && MT.getAttribute(qU) === qT) WT();
          else {
            TT.setAttribute(mT, qT), MT && TT.removeChild(MT);
            var bT = {
                iconName: null,
                prefix: null,
                transform: GU,
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
              OT = bT.extra;
            OT.attributes[vU] = UT, MW(fT, BT).then((function(zT) {
              var MT = TW(HT(HT({}, bT), {}, {
                  icons: {
                    main: zT,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: BT,
                  iconName: qT,
                  extra: OT,
                  watchable: !0
                })),
                gT = YT.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === UT ? TT.insertBefore(gT, TT.firstChild) : TT.appendChild(gT), gT.outerHTML = MT.map((function(TT) {
                return Hm(TT)
              })).join("\n"), TT.removeAttribute(mT), WT()
            })).catch(zT)
          }
        } else WT()
      }))
    }

    function rW(TT) {
      return Promise.all([CW(TT, "::before"), CW(TT, "::after")])
    }

    function KW(TT) {
      return TT.parentNode !== document.head && !~bU.indexOf(TT.tagName.toUpperCase()) && !TT.getAttribute(vU) && (!TT.parentNode || "svg" !== TT.parentNode.tagName)
    }
    var SW = function(TT) {
        return !!TT && OU.some((function(UT) {
          return TT.includes(UT)
        }))
      },
      GW = function(TT) {
        if (!TT) return [];
        var UT = new Set,
          mT = TT.split(/,(?![^()]*\))/).map((function(TT) {
            return TT.trim()
          }));
        mT = mT.flatMap((function(TT) {
          return TT.includes("(") ? TT : TT.split(",").map((function(TT) {
            return TT.trim()
          }))
        }));
        var WT, zT = MT(mT);
        try {
          for (zT.s(); !(WT = zT.n()).done;) {
            var gT = WT.value;
            if (SW(gT)) {
              var nT = OU.reduce((function(TT, UT) {
                return TT.replace(UT, "")
              }), gT);
              "" !== nT && "*" !== nT && UT.add(nT)
            }
          }
        } catch (HT) {
          zT.e(HT)
        } finally {
          zT.f()
        }
        return UT
      };

    function NW(TT) {
      if (dT) {
        var UT;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) UT = TT;
        else if (rU.searchPseudoElementsFullScan) UT = TT.querySelectorAll("*");
        else {
          var mT, WT = new Set,
            zT = MT(document.styleSheets);
          try {
            for (zT.s(); !(mT = zT.n()).done;) {
              var gT = mT.value;
              try {
                var nT, HT = MT(gT.cssRules);
                try {
                  for (HT.s(); !(nT = HT.n()).done;) {
                    var kT, jT = nT.value,
                      lT = MT(GW(jT.selectorText));
                    try {
                      for (lT.s(); !(kT = lT.n()).done;) {
                        var LT = kT.value;
                        WT.add(LT)
                      }
                    } catch (BT) {
                      lT.e(BT)
                    } finally {
                      lT.f()
                    }
                  }
                } catch (BT) {
                  HT.e(BT)
                } finally {
                  HT.f()
                }
              } catch (ZT) {
                rU.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(gT.href, " (").concat(ZT.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (BT) {
            zT.e(BT)
          } finally {
            zT.f()
          }
          if (!WT.size) return;
          var pT = Array.from(WT).join(", ");
          try {
            UT = TT.querySelectorAll(pT)
          } catch (cT) {}
        }
        return new Promise((function(TT, mT) {
          var WT = EU(UT).filter(KW).map(rW),
            zT = jW("searchPseudoElements");
          iW(), Promise.all(WT).then((function() {
            zT(), bW(), TT()
          })).catch((function() {
            zT(), bW(), mT()
          }))
        }))
      }
    }
    var EW = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(TT) {
              return TT.pseudoElementsCallback = NW, TT
            }
          }
        },
        provides: function(TT) {
          TT.pseudoElements2svg = function(TT) {
            var UT = TT.node,
              mT = void 0 === UT ? YT : UT;
            rU.searchPseudoElements && NW(mT)
          }
        }
      },
      hW = !1,
      DW = function(TT) {
        return TT.toLowerCase().split(" ").reduce((function(TT, UT) {
          var mT = UT.toLowerCase().split("-"),
            WT = mT[0],
            zT = mT.slice(1).join("-");
          if (WT && "h" === zT) return TT.flipX = !0, TT;
          if (WT && "v" === zT) return TT.flipY = !0, TT;
          if (zT = parseFloat(zT), isNaN(zT)) return TT;
          switch (WT) {
            case "grow":
              TT.size = TT.size + zT;
              break;
            case "shrink":
              TT.size = TT.size - zT;
              break;
            case "left":
              TT.x = TT.x - zT;
              break;
            case "right":
              TT.x = TT.x + zT;
              break;
            case "up":
              TT.y = TT.y - zT;
              break;
            case "down":
              TT.y = TT.y + zT;
              break;
            case "rotate":
              TT.rotate = TT.rotate + zT
          }
          return TT
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      oW = {
        mixout: function() {
          return {
            parse: {
              transform: function(TT) {
                return DW(TT)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(TT, UT) {
              var mT = UT.getAttribute("data-fa-transform");
              return mT && (TT.transform = DW(mT)), TT
            }
          }
        },
        provides: function(TT) {
          TT.generateAbstractTransformGrouping = function(TT) {
            var UT = TT.main,
              mT = TT.transform,
              WT = TT.containerWidth,
              zT = TT.iconWidth,
              MT = {
                transform: "translate(".concat(WT / 2, " 256)")
              },
              gT = "translate(".concat(32 * mT.x, ", ").concat(32 * mT.y, ") "),
              nT = "scale(".concat(mT.size / 16 * (mT.flipX ? -1 : 1), ", ").concat(mT.size / 16 * (mT.flipY ? -1 : 1), ") "),
              kT = "rotate(".concat(mT.rotate, " 0 0)"),
              jT = {
                outer: MT,
                inner: {
                  transform: "".concat(gT, " ").concat(nT, " ").concat(kT)
                },
                path: {
                  transform: "translate(".concat(zT / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: HT({}, jT.outer),
              children: [{
                tag: "g",
                attributes: HT({}, jT.inner),
                children: [{
                  tag: UT.icon.tag,
                  children: UT.icon.children,
                  attributes: HT(HT({}, UT.icon.attributes), jT.path)
                }]
              }]
            }
          }
        }
      },
      AW = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function RW(TT) {
      var UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return TT.attributes && (TT.attributes.fill || UT) && (TT.attributes.fill = "black"), TT
    }
    var Tz = {
        hooks: function() {
          return {
            parseNodeAttributes: function(TT, UT) {
              var mT = UT.getAttribute("data-fa-mask"),
                WT = mT ? sm(mT.split(" ").map((function(TT) {
                  return TT.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return WT.prefix || (WT.prefix = ym()), TT.mask = WT, TT.maskId = UT.getAttribute("data-fa-mask-id"), TT
            }
          }
        },
        provides: function(TT) {
          TT.generateAbstractMask = function(TT) {
            var UT, mT = TT.children,
              WT = TT.attributes,
              zT = TT.main,
              MT = TT.mask,
              gT = TT.maskId,
              nT = TT.transform,
              kT = zT.width,
              jT = zT.icon,
              lT = MT.width,
              LT = MT.icon,
              pT = function(TT) {
                var UT = TT.transform,
                  mT = TT.containerWidth,
                  WT = TT.iconWidth,
                  zT = {
                    transform: "translate(".concat(mT / 2, " 256)")
                  },
                  MT = "translate(".concat(32 * UT.x, ", ").concat(32 * UT.y, ") "),
                  gT = "scale(".concat(UT.size / 16 * (UT.flipX ? -1 : 1), ", ").concat(UT.size / 16 * (UT.flipY ? -1 : 1), ") "),
                  nT = "rotate(".concat(UT.rotate, " 0 0)");
                return {
                  outer: zT,
                  inner: {
                    transform: "".concat(MT, " ").concat(gT, " ").concat(nT)
                  },
                  path: {
                    transform: "translate(".concat(WT / 2 * -1, " -256)")
                  }
                }
              }({
                transform: nT,
                containerWidth: lT,
                iconWidth: kT
              }),
              BT = {
                tag: "rect",
                attributes: HT(HT({}, AW), {}, {
                  fill: "white"
                })
              },
              ZT = jT.children ? {
                children: jT.children.map(RW)
              } : {},
              cT = {
                tag: "g",
                attributes: HT({}, pT.inner),
                children: [RW(HT({
                  tag: jT.tag,
                  attributes: HT(HT({}, jT.attributes), pT.path)
                }, ZT))]
              },
              vT = {
                tag: "g",
                attributes: HT({}, pT.outer),
                children: [cT]
              },
              fT = "mask-".concat(gT || NU()),
              qT = "clip-".concat(gT || NU()),
              iT = {
                tag: "mask",
                attributes: HT(HT({}, AW), {}, {
                  id: fT,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [BT, vT]
              },
              bT = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: qT
                  },
                  children: (UT = LT, "g" === UT.tag ? UT.children : [UT])
                }, iT]
              };
            return mT.push(bT, {
              tag: "rect",
              attributes: HT({
                fill: "currentColor",
                "clip-path": "url(#".concat(qT, ")"),
                mask: "url(#".concat(fT, ")")
              }, AW)
            }), {
              children: mT,
              attributes: WT
            }
          }
        }
      },
      Uz = {
        provides: function(TT) {
          var UT = !1;
          eT.matchMedia && (UT = eT.matchMedia("(prefers-reduced-motion: reduce)").matches), TT.missingIconAbstract = function() {
            var TT = [],
              mT = {
                fill: "currentColor"
              },
              WT = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            TT.push({
              tag: "path",
              attributes: HT(HT({}, mT), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var zT = HT(HT({}, WT), {}, {
                attributeName: "opacity"
              }),
              MT = {
                tag: "circle",
                attributes: HT(HT({}, mT), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return UT || MT.children.push({
              tag: "animate",
              attributes: HT(HT({}, WT), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: HT(HT({}, zT), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), TT.push(MT), TT.push({
              tag: "path",
              attributes: HT(HT({}, mT), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: UT ? [] : [{
                tag: "animate",
                attributes: HT(HT({}, zT), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), UT || TT.push({
              tag: "path",
              attributes: HT(HT({}, mT), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: HT(HT({}, zT), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: TT
            }
          }
        }
      };
    ! function(TT, UT) {
      var mT = UT.mixoutsTo;
      um = TT, Cm = {}, Object.keys(rm).forEach((function(TT) {
        -1 === Km.indexOf(TT) && delete rm[TT]
      })), um.forEach((function(TT) {
        var UT = TT.mixout ? TT.mixout() : {};
        if (Object.keys(UT).forEach((function(TT) {
            "function" === typeof UT[TT] && (mT[TT] = UT[TT]), "object" === LT(UT[TT]) && Object.keys(UT[TT]).forEach((function(WT) {
              mT[TT] || (mT[TT] = {}), mT[TT][WT] = UT[TT][WT]
            }))
          })), TT.hooks) {
          var WT = TT.hooks();
          Object.keys(WT).forEach((function(TT) {
            Cm[TT] || (Cm[TT] = []), Cm[TT].push(WT[TT])
          }))
        }
        TT.provides && TT.provides(rm)
      }))
    }([mm, yW, XW, IW, QW, EW, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              iW(), hW = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            eW(Sm("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            OW && OW.disconnect()
          },
          watch: function(TT) {
            var UT = TT.observeMutationsRoot;
            hW ? bW() : eW(Sm("mutationObserverCallbacks", {
              observeMutationsRoot: UT
            }))
          }
        }
      }
    }, oW, Tz, Uz, {
      hooks: function() {
        return {
          parseNodeAttributes: function(TT, UT) {
            var mT = UT.getAttribute("data-fa-symbol"),
              WT = null !== mT && ("" === mT || mT);
            return TT.symbol = WT, TT
          }
        }
      }
    }], {
      mixoutsTo: om
    });
    var mz = om.noAuto,
      Wz = om.config,
      zz = om.library,
      Mz = om.dom,
      gz = om.parse,
      nz = om.findIconDefinition,
      Hz = om.toHtml,
      kz = om.icon,
      jz = om.layer,
      lz = om.text,
      Lz = om.counter
  },
  6753: TT => {
    TT.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);