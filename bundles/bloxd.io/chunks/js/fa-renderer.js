/*! For license information please see qsji88.fa-renderer.18a64f70.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6174: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      FontAwesomeIcon: () => RT
    });
    var iT = IT(6169),
      zT = IT(4442),
      kT = IT.n(zT),
      WT = IT(46);

    function XT(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function BT(TT, oT, IT) {
      return (oT = function(TT) {
        var oT = function(TT, oT) {
          if ("object" != typeof TT || !TT) return TT;
          var IT = TT[Symbol.toPrimitive];
          if (void 0 !== IT) {
            var iT = IT.call(TT, oT || "default");
            if ("object" != typeof iT) return iT;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === oT ? String : Number)(TT)
        }(TT, "string");
        return "symbol" == typeof oT ? oT : oT + ""
      }(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function FT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function ST(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? FT(Object(IT), !0).forEach((function(oT) {
          BT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : FT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function DT(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        var IT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != IT) {
          var iT, zT, kT, WT, XT = [],
            BT = !0,
            FT = !1;
          try {
            if (kT = (IT = IT.call(TT)).next, 0 === oT) {
              if (Object(IT) !== IT) return;
              BT = !1
            } else
              for (; !(BT = (iT = kT.call(IT)).done) && (XT.push(iT.value), XT.length !== oT); BT = !0);
          } catch (TT) {
            FT = !0, zT = TT
          } finally {
            try {
              if (!BT && null != IT.return && (WT = IT.return(), Object(WT) !== WT)) return
            } finally {
              if (FT) throw zT
            }
          }
          return XT
        }
      }(TT, oT) || cT(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function LT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return XT(TT)
      }(TT) || function(TT) {
        if ("undefined" != typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || cT(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xT(TT) {
      return xT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, xT(TT)
    }

    function cT(TT, oT) {
      if (TT) {
        if ("string" == typeof TT) return XT(TT, oT);
        var IT = {}.toString.call(TT).slice(8, -1);
        return "Object" === IT && TT.constructor && (IT = TT.constructor.name), "Map" === IT || "Set" === IT ? Array.from(TT) : "Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT) ? XT(TT, oT) : void 0
      }
    }
    var KT;
    try {
      var MT = IT(6183);
      KT = MT.version
    } catch (vT) {
      KT = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function rT(TT) {
      var oT = TT.beat,
        IT = TT.fade,
        iT = TT.beatFade,
        zT = TT.bounce,
        kT = TT.shake,
        WT = TT.flash,
        XT = TT.spin,
        FT = TT.spinPulse,
        ST = TT.spinReverse,
        LT = TT.pulse,
        xT = TT.fixedWidth,
        cT = TT.inverse,
        MT = TT.border,
        rT = TT.listItem,
        AT = TT.flip,
        gT = TT.size,
        hT = TT.rotation,
        wT = TT.pull,
        mT = TT.swapOpacity,
        eT = TT.rotateBy,
        RT = TT.widthAuto,
        uT = function(TT, oT) {
          for (var IT = DT(TT.split("-"), 2), iT = IT[0], zT = IT[1], kT = DT(oT.split("-"), 2), WT = kT[0], XT = kT[1], BT = iT.split("."), FT = WT.split("."), ST = 0; ST < Math.max(BT.length, FT.length); ST++) {
            var LT = BT[ST] || "0",
              xT = FT[ST] || "0",
              cT = parseInt(LT, 10),
              KT = parseInt(xT, 10);
            if (cT !== KT) return cT > KT
          }
          for (var MT = 0; MT < Math.max(BT.length, FT.length); MT++) {
            var rT = BT[MT] || "0",
              AT = FT[MT] || "0";
            if (rT !== AT && rT.length !== AT.length) return rT.length < AT.length
          }
          return !(zT && !XT)
        }(KT, "7.0.0"),
        vT = BT(BT(BT(BT(BT(BT({
          "fa-beat": oT,
          "fa-fade": IT,
          "fa-beat-fade": iT,
          "fa-bounce": zT,
          "fa-shake": kT,
          "fa-flash": WT,
          "fa-spin": XT,
          "fa-spin-reverse": ST,
          "fa-spin-pulse": FT,
          "fa-pulse": LT,
          "fa-fw": xT,
          "fa-inverse": cT,
          "fa-border": MT,
          "fa-li": rT,
          "fa-flip": !0 === AT,
          "fa-flip-horizontal": "horizontal" === AT || "both" === AT,
          "fa-flip-vertical": "vertical" === AT || "both" === AT
        }, "fa-".concat(gT), "undefined" !== typeof gT && null !== gT), "fa-rotate-".concat(hT), "undefined" !== typeof hT && null !== hT && 0 !== hT), "fa-pull-".concat(wT), "undefined" !== typeof wT && null !== wT), "fa-swap-opacity", mT), "fa-rotate-by", uT && eT), "fa-width-auto", uT && RT);
      return Object.keys(vT).map((function(TT) {
        return vT[TT] ? TT : null
      })).filter((function(TT) {
        return TT
      }))
    }

    function AT(TT) {
      return oT = TT, (oT -= 0) === oT ? TT : (TT = TT.replace(/[\-_\s]+(.)?/g, (function(TT, oT) {
        return oT ? oT.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + TT.substr(1);
      var oT
    }
    var gT = ["style"];
    var hT = !1;
    try {
      hT = !0
    } catch (vT) {}

    function wT(TT) {
      return TT && "object" === xT(TT) && TT.prefix && TT.iconName && TT.icon ? TT : iT.parse.icon ? iT.parse.icon(TT) : null === TT ? null : TT && "object" === xT(TT) && TT.prefix && TT.iconName ? TT : Array.isArray(TT) && 2 === TT.length ? {
        prefix: TT[0],
        iconName: TT[1]
      } : "string" === typeof TT ? {
        prefix: "fas",
        iconName: TT
      } : void 0
    }

    function mT(TT, oT) {
      return Array.isArray(oT) && oT.length > 0 || !Array.isArray(oT) && oT ? BT({}, TT, oT) : {}
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
      RT = WT.forwardRef((function(TT, oT) {
        var IT = ST(ST({}, eT), TT),
          zT = IT.icon,
          kT = IT.mask,
          WT = IT.symbol,
          XT = IT.className,
          BT = IT.title,
          FT = IT.titleId,
          DT = IT.maskId,
          xT = wT(zT),
          cT = mT("classes", [].concat(LT(rT(IT)), LT((XT || "").split(" ")))),
          KT = mT("transform", "string" === typeof IT.transform ? iT.parse.transform(IT.transform) : IT.transform),
          MT = mT("mask", wT(kT)),
          AT = (0, iT.icon)(xT, ST(ST(ST(ST({}, cT), KT), MT), {}, {
            symbol: WT,
            title: BT,
            titleId: FT,
            maskId: DT
          }));
        if (!AT) return function() {
          var TT;
          !hT && console && "function" === typeof console.error && (TT = console).error.apply(TT, arguments)
        }("Could not find icon", xT), null;
        var gT = AT.abstract,
          RT = {
            ref: oT
          };
        return Object.keys(IT).forEach((function(TT) {
          eT.hasOwnProperty(TT) || (RT[TT] = IT[TT])
        })), uT(gT[0], RT)
      }));
    RT.displayName = "FontAwesomeIcon", RT.propTypes = {
      beat: kT().bool,
      border: kT().bool,
      beatFade: kT().bool,
      bounce: kT().bool,
      className: kT().string,
      fade: kT().bool,
      flash: kT().bool,
      mask: kT().oneOfType([kT().object, kT().array, kT().string]),
      maskId: kT().string,
      fixedWidth: kT().bool,
      inverse: kT().bool,
      flip: kT().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: kT().oneOfType([kT().object, kT().array, kT().string]),
      listItem: kT().bool,
      pull: kT().oneOf(["right", "left"]),
      pulse: kT().bool,
      rotation: kT().oneOf([0, 90, 180, 270]),
      rotateBy: kT().bool,
      shake: kT().bool,
      size: kT().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: kT().bool,
      spinPulse: kT().bool,
      spinReverse: kT().bool,
      symbol: kT().oneOfType([kT().bool, kT().string]),
      title: kT().string,
      titleId: kT().string,
      transform: kT().oneOfType([kT().string, kT().object]),
      swapOpacity: kT().bool,
      widthAuto: kT().bool
    };
    var uT = function TT(oT, IT) {
      var iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof IT) return IT;
      var zT = (IT.children || []).map((function(IT) {
          return TT(oT, IT)
        })),
        kT = Object.keys(IT.attributes || {}).reduce((function(TT, oT) {
          var iT = IT.attributes[oT];
          switch (oT) {
            case "class":
              TT.attrs.className = iT, delete IT.attributes.class;
              break;
            case "style":
              TT.attrs.style = iT.split(";").map((function(TT) {
                return TT.trim()
              })).filter((function(TT) {
                return TT
              })).reduce((function(TT, oT) {
                var IT, iT = oT.indexOf(":"),
                  zT = AT(oT.slice(0, iT)),
                  kT = oT.slice(iT + 1).trim();
                return zT.startsWith("webkit") ? TT[(IT = zT, IT.charAt(0).toUpperCase() + IT.slice(1))] = kT : TT[zT] = kT, TT
              }), {});
              break;
            default:
              0 === oT.indexOf("aria-") || 0 === oT.indexOf("data-") ? TT.attrs[oT.toLowerCase()] = iT : TT.attrs[AT(oT)] = iT
          }
          return TT
        }), {
          attrs: {}
        }),
        WT = iT.style,
        XT = void 0 === WT ? {} : WT,
        BT = function(TT, oT) {
          if (null == TT) return {};
          var IT, iT, zT = function(TT, oT) {
            if (null == TT) return {};
            var IT = {};
            for (var iT in TT)
              if ({}.hasOwnProperty.call(TT, iT)) {
                if (-1 !== oT.indexOf(iT)) continue;
                IT[iT] = TT[iT]
              } return IT
          }(TT, oT);
          if (Object.getOwnPropertySymbols) {
            var kT = Object.getOwnPropertySymbols(TT);
            for (iT = 0; iT < kT.length; iT++) IT = kT[iT], -1 === oT.indexOf(IT) && {}.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
          }
          return zT
        }(iT, gT);
      return kT.attrs.style = ST(ST({}, kT.attrs.style), XT), oT.apply(void 0, [IT.tag, ST(ST({}, kT.attrs), BT)].concat(LT(zT)))
    }.bind(null, WT.createElement)
  },
  4444: (TT, oT, IT) => {
    var iT = IT(4451);

    function zT() {}

    function kT() {}
    kT.resetWarningCache = zT, TT.exports = function() {
      function TT(TT, oT, IT, zT, kT, WT) {
        if (WT !== iT) {
          var XT = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw XT.name = "Invariant Violation", XT
        }
      }

      function oT() {
        return TT
      }
      TT.isRequired = TT;
      var IT = {
        array: TT,
        bigint: TT,
        bool: TT,
        func: TT,
        number: TT,
        object: TT,
        string: TT,
        symbol: TT,
        any: TT,
        arrayOf: oT,
        element: TT,
        elementType: TT,
        instanceOf: oT,
        node: TT,
        objectOf: oT,
        oneOf: oT,
        oneOfType: oT,
        shape: oT,
        exact: oT,
        checkPropTypes: kT,
        resetWarningCache: zT
      };
      return IT.PropTypes = IT, IT
    }
  },
  4442: (TT, oT, IT) => {
    TT.exports = IT(4444)()
  },
  4451: TT => {
    TT.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6169: (TT, oT, IT) => {
    function iT(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function zT(TT, oT) {
      for (var IT = 0; IT < oT.length; IT++) {
        var iT = oT[IT];
        iT.enumerable = iT.enumerable || !1, iT.configurable = !0, "value" in iT && (iT.writable = !0), Object.defineProperty(TT, DT(iT.key), iT)
      }
    }

    function kT(TT, oT) {
      var IT = "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
      if (!IT) {
        if (Array.isArray(TT) || (IT = xT(TT)) || oT && TT && "number" == typeof TT.length) {
          IT && (TT = IT);
          var iT = 0,
            zT = function() {};
          return {
            s: zT,
            n: function() {
              return iT >= TT.length ? {
                done: !0
              } : {
                done: !1,
                value: TT[iT++]
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
      var kT, WT = !0,
        XT = !1;
      return {
        s: function() {
          IT = IT.call(TT)
        },
        n: function() {
          var TT = IT.next();
          return WT = TT.done, TT
        },
        e: function(TT) {
          XT = !0, kT = TT
        },
        f: function() {
          try {
            WT || null == IT.return || IT.return()
          } finally {
            if (XT) throw kT
          }
        }
      }
    }

    function WT(TT, oT, IT) {
      return (oT = DT(oT)) in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function XT(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function BT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? XT(Object(IT), !0).forEach((function(oT) {
          WT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : XT(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function FT(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        var IT = null == TT ? null : "undefined" != typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null != IT) {
          var iT, zT, kT, WT, XT = [],
            BT = !0,
            FT = !1;
          try {
            if (kT = (IT = IT.call(TT)).next, 0 === oT) {
              if (Object(IT) !== IT) return;
              BT = !1
            } else
              for (; !(BT = (iT = kT.call(IT)).done) && (XT.push(iT.value), XT.length !== oT); BT = !0);
          } catch (TT) {
            FT = !0, zT = TT
          } finally {
            try {
              if (!BT && null != IT.return && (WT = IT.return(), Object(WT) !== WT)) return
            } finally {
              if (FT) throw zT
            }
          }
          return XT
        }
      }(TT, oT) || xT(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ST(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return iT(TT)
      }(TT) || function(TT) {
        if ("undefined" != typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || xT(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function DT(TT) {
      var oT = function(TT, oT) {
        if ("object" != typeof TT || !TT) return TT;
        var IT = TT[Symbol.toPrimitive];
        if (void 0 !== IT) {
          var iT = IT.call(TT, oT || "default");
          if ("object" != typeof iT) return iT;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === oT ? String : Number)(TT)
      }(TT, "string");
      return "symbol" == typeof oT ? oT : oT + ""
    }

    function LT(TT) {
      return LT = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(TT) {
        return typeof TT
      } : function(TT) {
        return TT && "function" == typeof Symbol && TT.constructor === Symbol && TT !== Symbol.prototype ? "symbol" : typeof TT
      }, LT(TT)
    }

    function xT(TT, oT) {
      if (TT) {
        if ("string" == typeof TT) return iT(TT, oT);
        var IT = {}.toString.call(TT).slice(8, -1);
        return "Object" === IT && TT.constructor && (IT = TT.constructor.name), "Map" === IT || "Set" === IT ? Array.from(TT) : "Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT) ? iT(TT, oT) : void 0
      }
    }
    IT.r(oT), IT.d(oT, {
      api: () => dI,
      config: () => Wz,
      counter: () => Kz,
      dom: () => Bz,
      findIconDefinition: () => Sz,
      icon: () => Lz,
      layer: () => xz,
      library: () => Xz,
      noAuto: () => kz,
      parse: () => Fz,
      text: () => cz,
      toHtml: () => Dz
    });
    var cT = function() {},
      KT = {},
      MT = {},
      rT = null,
      AT = {
        mark: cT,
        measure: cT
      };
    try {
      "undefined" !== typeof window && (KT = window), "undefined" !== typeof document && (MT = document), "undefined" !== typeof MutationObserver && (rT = MutationObserver), "undefined" !== typeof performance && (AT = performance)
    } catch (sT) {}
    var gT, hT, wT = (KT.navigator || {}).userAgent,
      mT = void 0 === wT ? "" : wT,
      eT = KT,
      RT = MT,
      uT = rT,
      vT = AT,
      ET = (eT.document, !!RT.documentElement && !!RT.head && "function" === typeof RT.addEventListener && "function" === typeof RT.createElement),
      fT = ~mT.indexOf("MSIE") || ~mT.indexOf("Trident/"),
      CT = {
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
      jT = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      JT = "classic",
      UT = "duotone",
      aT = "sharp",
      YT = "sharp-duotone",
      QT = "chisel",
      OT = "etch",
      HT = "graphite",
      nT = "jelly",
      qT = "jelly-duo",
      ZT = "jelly-fill",
      lT = "notdog",
      sT = "notdog-duo",
      tT = "slab",
      GT = "slab-press",
      pT = "thumbprint",
      bT = "utility",
      yT = "utility-duo",
      NT = "utility-fill",
      PT = "whiteboard",
      dT = [JT, UT, aT, YT, QT, OT, HT, nT, qT, ZT, lT, sT, tT, GT, pT, bT, yT, NT, PT],
      VT = (WT(WT(WT(WT(WT(WT(WT(WT(WT(WT(gT = {}, JT, "Classic"), UT, "Duotone"), aT, "Sharp"), YT, "Sharp Duotone"), QT, "Chisel"), OT, "Etch"), HT, "Graphite"), nT, "Jelly"), qT, "Jelly Duo"), ZT, "Jelly Fill"), WT(WT(WT(WT(WT(WT(WT(WT(WT(gT, lT, "Notdog"), sT, "Notdog Duo"), tT, "Slab"), GT, "Slab Press"), pT, "Thumbprint"), bT, "Utility"), yT, "Utility Duo"), NT, "Utility Fill"), PT, "Whiteboard"), new Map([
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
      To = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      oo = {
        fak: "kit",
        "fa-kit": "kit"
      },
      Io = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      io = (WT(WT({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      zo = {
        "kit-duotone": "fakd"
      },
      ko = "duotone-group",
      Wo = "swap-opacity",
      Xo = "primary",
      Bo = "secondary",
      Fo = (WT(WT(WT(WT(WT(WT(WT(WT(WT(WT(hT = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), WT(WT(WT(WT(WT(WT(WT(WT(WT(hT, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), WT(WT({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      So = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      Do = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Lo = Do.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      xo = [].concat(ST(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", ko, Wo, Xo, Bo]).concat(Do.map((function(TT) {
        return "".concat(TT, "x")
      }))).concat(Lo.map((function(TT) {
        return "w-".concat(TT)
      }))),
      co = "___FONT_AWESOME___",
      Ko = "svg-inline--fa",
      Mo = "data-fa-i2svg",
      ro = "data-fa-pseudo-element",
      Ao = "data-prefix",
      go = "data-icon",
      ho = "fontawesome-i2svg",
      wo = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      mo = ["::before", "::after", ":before", ":after"],
      eo = function() {
        try {
          return !0
        } catch (TT) {
          return !1
        }
      }();

    function Ro(TT) {
      return new Proxy(TT, {
        get: function(TT, oT) {
          return oT in TT ? TT[oT] : TT[JT]
        }
      })
    }
    var uo = BT({}, CT);
    uo[JT] = BT(BT(BT(BT({}, {
      "fa-duotone": "duotone"
    }), CT[JT]), oo), Io);
    var vo = Ro(uo),
      Eo = BT({}, {
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
    Eo[JT] = BT(BT(BT(BT({}, {
      duotone: "fad"
    }), Eo[JT]), io), zo);
    var fo = Ro(Eo),
      Co = BT({}, Fo);
    Co[JT] = BT(BT({}, Co[JT]), {
      fak: "fa-kit"
    });
    var jo = Ro(Co),
      Jo = BT({}, {
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
    Jo[JT] = BT(BT({}, Jo[JT]), {
      "fa-kit": "fak"
    });
    Ro(Jo);
    var Uo = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      ao = "fa-layers-text",
      Yo = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Qo = (Ro(BT({}, {
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
      Oo = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      Ho = [].concat(ST(["kit"]), ST(xo)),
      no = eT.FontAwesomeConfig || {};
    if (RT && "function" === typeof RT.querySelector) {
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
        var oT = FT(TT, 2),
          IT = oT[0],
          iT = oT[1],
          zT = function(TT) {
            return "" === TT || "false" !== TT && ("true" === TT || TT)
          }(function(TT) {
            var oT = RT.querySelector("script[" + TT + "]");
            if (oT) return oT.getAttribute(TT)
          }(IT));
        void 0 !== zT && null !== zT && (no[iT] = zT)
      }))
    }
    var qo = {
      styleDefault: "solid",
      familyDefault: JT,
      cssPrefix: "fa",
      replacementClass: Ko,
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
    no.familyPrefix && (no.cssPrefix = no.familyPrefix);
    var Zo = BT(BT({}, qo), no);
    Zo.autoReplaceSvg || (Zo.observeMutations = !1);
    var so = {};
    Object.keys(qo).forEach((function(TT) {
      Object.defineProperty(so, TT, {
        enumerable: !0,
        set: function(oT) {
          Zo[TT] = oT, to.forEach((function(TT) {
            return TT(so)
          }))
        },
        get: function() {
          return Zo[TT]
        }
      })
    })), Object.defineProperty(so, "familyPrefix", {
      enumerable: !0,
      set: function(TT) {
        Zo.cssPrefix = TT, to.forEach((function(TT) {
          return TT(so)
        }))
      },
      get: function() {
        return Zo.cssPrefix
      }
    }), eT.FontAwesomeConfig = so;
    var to = [];
    var Go = 16,
      po = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function bo() {
      for (var TT = 12, oT = ""; TT-- > 0;) oT += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return oT
    }

    function yo(TT) {
      for (var oT = [], IT = (TT || []).length >>> 0; IT--;) oT[IT] = TT[IT];
      return oT
    }

    function No(TT) {
      return TT.classList ? yo(TT.classList) : (TT.getAttribute("class") || "").split(" ").filter((function(TT) {
        return TT
      }))
    }

    function Po(TT) {
      return "".concat(TT).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Vo(TT) {
      return Object.keys(TT || {}).reduce((function(oT, IT) {
        return oT + "".concat(IT, ": ").concat(TT[IT].trim(), ";")
      }), "")
    }

    function TI(TT) {
      return TT.size !== po.size || TT.x !== po.x || TT.y !== po.y || TT.rotate !== po.rotate || TT.flipX || TT.flipY
    }

    function oI() {
      var TT = "fa",
        oT = Ko,
        IT = so.cssPrefix,
        iT = so.replacementClass,
        zT = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (IT !== TT || iT !== oT) {
        var kT = new RegExp("\\.".concat(TT, "\\-"), "g"),
          WT = new RegExp("\\--".concat(TT, "\\-"), "g"),
          XT = new RegExp("\\.".concat(oT), "g");
        zT = zT.replace(kT, ".".concat(IT, "-")).replace(WT, "--".concat(IT, "-")).replace(XT, ".".concat(iT))
      }
      return zT
    }
    var II = !1;

    function iI() {
      so.autoAddCss && !II && (! function(TT) {
        if (TT && ET) {
          var oT = RT.createElement("style");
          oT.setAttribute("type", "text/css"), oT.innerHTML = TT;
          for (var IT = RT.head.childNodes, iT = null, zT = IT.length - 1; zT > -1; zT--) {
            var kT = IT[zT],
              WT = (kT.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(WT) > -1 && (iT = kT)
          }
          RT.head.insertBefore(oT, iT)
        }
      }(oI()), II = !0)
    }
    var zI = {
        mixout: function() {
          return {
            dom: {
              css: oI,
              insertCss: iI
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              iI()
            },
            beforeI2svg: function() {
              iI()
            }
          }
        }
      },
      kI = eT || {};
    kI[co] || (kI[co] = {}), kI[co].styles || (kI[co].styles = {}), kI[co].hooks || (kI[co].hooks = {}), kI[co].shims || (kI[co].shims = []);
    var WI = kI[co],
      XI = [],
      BI = function() {
        RT.removeEventListener("DOMContentLoaded", BI), FI = 1, XI.map((function(TT) {
          return TT()
        }))
      },
      FI = !1;

    function SI(TT) {
      var oT = TT.tag,
        IT = TT.attributes,
        iT = void 0 === IT ? {} : IT,
        zT = TT.children,
        kT = void 0 === zT ? [] : zT;
      return "string" === typeof TT ? Po(TT) : "<".concat(oT, " ").concat(function(TT) {
        return Object.keys(TT || {}).reduce((function(oT, IT) {
          return oT + "".concat(IT, '="').concat(Po(TT[IT]), '" ')
        }), "").trim()
      }(iT), ">").concat(kT.map(SI).join(""), "</").concat(oT, ">")
    }

    function DI(TT, oT, IT) {
      if (TT && TT[oT] && TT[oT][IT]) return {
        prefix: oT,
        iconName: IT,
        icon: TT[oT][IT]
      }
    }
    ET && ((FI = (RT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(RT.readyState)) || RT.addEventListener("DOMContentLoaded", BI));
    var LI = function(TT, oT, IT, iT) {
      var zT, kT, WT, XT = Object.keys(TT),
        BT = XT.length,
        FT = void 0 !== iT ? function(TT, oT) {
          return function(IT, iT, zT, kT) {
            return TT.call(oT, IT, iT, zT, kT)
          }
        }(oT, iT) : oT;
      for (void 0 === IT ? (zT = 1, WT = TT[XT[0]]) : (zT = 0, WT = IT); zT < BT; zT++) WT = FT(WT, TT[kT = XT[zT]], kT, TT);
      return WT
    };

    function xI(TT) {
      return 1 !== ST(TT).length ? null : TT.codePointAt(0).toString(16)
    }

    function cI(TT) {
      return Object.keys(TT).reduce((function(oT, IT) {
        var iT = TT[IT];
        return !!iT.icon ? oT[iT.iconName] = iT.icon : oT[IT] = iT, oT
      }), {})
    }

    function KI(TT, oT) {
      var IT = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        iT = void 0 !== IT && IT,
        zT = cI(oT);
      "function" !== typeof WI.hooks.addPack || iT ? WI.styles[TT] = BT(BT({}, WI.styles[TT] || {}), zT) : WI.hooks.addPack(TT, cI(oT)), "fas" === TT && KI("fa", oT)
    }
    var MI = WI.styles,
      rI = WI.shims,
      AI = Object.keys(jo),
      gI = AI.reduce((function(TT, oT) {
        return TT[oT] = Object.keys(jo[oT]), TT
      }), {}),
      hI = null,
      wI = {},
      mI = {},
      eI = {},
      RI = {},
      uI = {};

    function vI(TT, oT) {
      var IT, iT = oT.split("-"),
        zT = iT[0],
        kT = iT.slice(1).join("-");
      return zT !== TT || "" === kT || (IT = kT, ~Ho.indexOf(IT)) ? null : kT
    }
    var EI, fI = function() {
      var TT = function(TT) {
        return LI(MI, (function(oT, IT, iT) {
          return oT[iT] = LI(IT, TT, {}), oT
        }), {})
      };
      wI = TT((function(TT, oT, IT) {
        (oT[3] && (TT[oT[3]] = IT), oT[2]) && oT[2].filter((function(TT) {
          return "number" === typeof TT
        })).forEach((function(oT) {
          TT[oT.toString(16)] = IT
        }));
        return TT
      })), mI = TT((function(TT, oT, IT) {
        (TT[IT] = IT, oT[2]) && oT[2].filter((function(TT) {
          return "string" === typeof TT
        })).forEach((function(oT) {
          TT[oT] = IT
        }));
        return TT
      })), uI = TT((function(TT, oT, IT) {
        var iT = oT[2];
        return TT[IT] = IT, iT.forEach((function(oT) {
          TT[oT] = IT
        })), TT
      }));
      var oT = "far" in MI || so.autoFetchSvg,
        IT = LI(rI, (function(TT, IT) {
          var iT = IT[0],
            zT = IT[1],
            kT = IT[2];
          return "far" !== zT || oT || (zT = "fas"), "string" === typeof iT && (TT.names[iT] = {
            prefix: zT,
            iconName: kT
          }), "number" === typeof iT && (TT.unicodes[iT.toString(16)] = {
            prefix: zT,
            iconName: kT
          }), TT
        }), {
          names: {},
          unicodes: {}
        });
      eI = IT.names, RI = IT.unicodes, hI = aI(so.styleDefault, {
        family: so.familyDefault
      })
    };

    function CI(TT, oT) {
      return (wI[TT] || {})[oT]
    }

    function jI(TT, oT) {
      return (uI[TT] || {})[oT]
    }

    function JI(TT) {
      return eI[TT] || {
        prefix: null,
        iconName: null
      }
    }

    function UI() {
      return hI
    }
    EI = function(TT) {
      hI = aI(TT.styleDefault, {
        family: so.familyDefault
      })
    }, to.push(EI), fI();

    function aI(TT) {
      var oT = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        IT = void 0 === oT ? JT : oT,
        iT = vo[IT][TT];
      if (IT === UT && !TT) return "fad";
      var zT = fo[IT][TT] || fo[IT][iT],
        kT = TT in WI.styles ? TT : null;
      return zT || kT || null
    }

    function YI(TT) {
      return TT.sort().filter((function(TT, oT, IT) {
        return IT.indexOf(TT) === oT
      }))
    }
    var QI = So.concat(To);

    function OI(TT) {
      var oT = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        IT = void 0 !== oT && oT,
        iT = null,
        zT = YI(TT.filter((function(TT) {
          return QI.includes(TT)
        }))),
        kT = YI(TT.filter((function(TT) {
          return !QI.includes(TT)
        }))),
        WT = FT(zT.filter((function(TT) {
          return iT = TT, !jT.includes(TT)
        })), 1)[0],
        XT = void 0 === WT ? null : WT,
        ST = function(TT) {
          var oT = JT,
            IT = AI.reduce((function(TT, oT) {
              return TT[oT] = "".concat(so.cssPrefix, "-").concat(oT), TT
            }), {});
          return dT.forEach((function(iT) {
            (TT.includes(IT[iT]) || TT.some((function(TT) {
              return gI[iT].includes(TT)
            }))) && (oT = iT)
          })), oT
        }(zT),
        DT = BT(BT({}, function(TT) {
          var oT = [],
            IT = null;
          return TT.forEach((function(TT) {
            var iT = vI(so.cssPrefix, TT);
            iT ? IT = iT : TT && oT.push(TT)
          })), {
            iconName: IT,
            rest: oT
          }
        }(kT)), {}, {
          prefix: aI(XT, {
            family: ST
          })
        });
      return BT(BT(BT({}, DT), function(TT) {
        var oT = TT.values,
          IT = TT.family,
          iT = TT.canonical,
          zT = TT.givenPrefix,
          kT = void 0 === zT ? "" : zT,
          WT = TT.styles,
          XT = void 0 === WT ? {} : WT,
          BT = TT.config,
          FT = void 0 === BT ? {} : BT,
          ST = IT === UT,
          DT = oT.includes("fa-duotone") || oT.includes("fad"),
          LT = "duotone" === FT.familyDefault,
          xT = "fad" === iT.prefix || "fa-duotone" === iT.prefix;
        !ST && (DT || LT || xT) && (iT.prefix = "fad");
        (oT.includes("fa-brands") || oT.includes("fab")) && (iT.prefix = "fab");
        if (!iT.prefix && HI.includes(IT)) {
          if (Object.keys(XT).find((function(TT) {
              return nI.includes(TT)
            })) || FT.autoFetchSvg) {
            var cT = VT.get(IT).defaultShortPrefixId;
            iT.prefix = cT, iT.iconName = jI(iT.prefix, iT.iconName) || iT.iconName
          }
        }
        "fa" !== iT.prefix && "fa" !== kT || (iT.prefix = UI() || "fas");
        return iT
      }({
        values: TT,
        family: ST,
        styles: MI,
        config: so,
        canonical: DT,
        givenPrefix: iT
      })), function(TT, oT, IT) {
        var iT = IT.prefix,
          zT = IT.iconName;
        if (TT || !iT || !zT) return {
          prefix: iT,
          iconName: zT
        };
        var kT = "fa" === oT ? JI(zT) : {},
          WT = jI(iT, zT);
        zT = kT.iconName || WT || zT, "far" !== (iT = kT.prefix || iT) || MI.far || !MI.fas || so.autoFetchSvg || (iT = "fas");
        return {
          prefix: iT,
          iconName: zT
        }
      }(IT, iT, DT))
    }
    var HI = dT.filter((function(TT) {
        return TT !== JT || TT !== UT
      })),
      nI = Object.keys(Fo).filter((function(TT) {
        return TT !== JT
      })).map((function(TT) {
        return Object.keys(Fo[TT])
      })).flat();
    var qI = function() {
        return function(TT, oT, IT) {
          return oT && zT(TT.prototype, oT), IT && zT(TT, IT), Object.defineProperty(TT, "prototype", {
            writable: !1
          }), TT
        }((function TT() {
          ! function(TT, oT) {
            if (!(TT instanceof oT)) throw new TypeError("Cannot call a class as a function")
          }(this, TT), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var TT = this, oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
            var zT = IT.reduce(this._pullDefinitions, {});
            Object.keys(zT).forEach((function(oT) {
              TT.definitions[oT] = BT(BT({}, TT.definitions[oT] || {}), zT[oT]), KI(oT, zT[oT]);
              var IT = jo[JT][oT];
              IT && KI(IT, zT[oT]), fI()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(TT, oT) {
            var IT = oT.prefix && oT.iconName && oT.icon ? {
              0: oT
            } : oT;
            return Object.keys(IT).map((function(oT) {
              var iT = IT[oT],
                zT = iT.prefix,
                kT = iT.iconName,
                WT = iT.icon,
                XT = WT[2];
              TT[zT] || (TT[zT] = {}), XT.length > 0 && XT.forEach((function(oT) {
                "string" === typeof oT && (TT[zT][oT] = WT)
              })), TT[zT][kT] = WT
            })), TT
          }
        }])
      }(),
      ZI = [],
      lI = {},
      sI = {},
      tI = Object.keys(sI);

    function GI(TT, oT) {
      for (var IT = arguments.length, iT = new Array(IT > 2 ? IT - 2 : 0), zT = 2; zT < IT; zT++) iT[zT - 2] = arguments[zT];
      return (lI[TT] || []).forEach((function(TT) {
        oT = TT.apply(null, [oT].concat(iT))
      })), oT
    }

    function pI(TT) {
      for (var oT = arguments.length, IT = new Array(oT > 1 ? oT - 1 : 0), iT = 1; iT < oT; iT++) IT[iT - 1] = arguments[iT];
      (lI[TT] || []).forEach((function(TT) {
        TT.apply(null, IT)
      }))
    }

    function bI() {
      var TT = arguments[0],
        oT = Array.prototype.slice.call(arguments, 1);
      return sI[TT] ? sI[TT].apply(null, oT) : void 0
    }

    function yI(TT) {
      "fa" === TT.prefix && (TT.prefix = "fas");
      var oT = TT.iconName,
        IT = TT.prefix || UI();
      if (oT) return oT = jI(IT, oT) || oT, DI(NI.definitions, IT, oT) || DI(WI.styles, IT, oT)
    }
    var NI = new qI,
      PI = {
        i2svg: function() {
          var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ET ? (pI("beforeI2svg", TT), bI("pseudoElements2svg", TT), bI("i2svg", TT)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var TT, oT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            IT = oT.autoReplaceSvgRoot;
          !1 === so.autoReplaceSvg && (so.autoReplaceSvg = !0), so.observeMutations = !0, TT = function() {
            VI({
              autoReplaceSvgRoot: IT
            }), pI("watch", oT)
          }, ET && (FI ? setTimeout(TT, 0) : XI.push(TT))
        }
      },
      dI = {
        noAuto: function() {
          so.autoReplaceSvg = !1, so.observeMutations = !1, pI("noAuto")
        },
        config: so,
        dom: PI,
        parse: {
          icon: function(TT) {
            if (null === TT) return null;
            if ("object" === LT(TT) && TT.prefix && TT.iconName) return {
              prefix: TT.prefix,
              iconName: jI(TT.prefix, TT.iconName) || TT.iconName
            };
            if (Array.isArray(TT) && 2 === TT.length) {
              var oT = 0 === TT[1].indexOf("fa-") ? TT[1].slice(3) : TT[1],
                IT = aI(TT[0]);
              return {
                prefix: IT,
                iconName: jI(IT, oT) || oT
              }
            }
            if ("string" === typeof TT && (TT.indexOf("".concat(so.cssPrefix, "-")) > -1 || TT.match(Uo))) {
              var iT = OI(TT.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: iT.prefix || UI(),
                iconName: jI(iT.prefix, iT.iconName) || iT.iconName
              }
            }
            if ("string" === typeof TT) {
              var zT = UI();
              return {
                prefix: zT,
                iconName: jI(zT, TT) || TT
              }
            }
          }
        },
        library: NI,
        findIconDefinition: yI,
        toHtml: SI
      },
      VI = function() {
        var TT = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          oT = void 0 === TT ? RT : TT;
        (Object.keys(WI.styles).length > 0 || so.autoFetchSvg) && ET && so.autoReplaceSvg && dI.dom.i2svg({
          node: oT
        })
      };

    function Ti(TT, oT) {
      return Object.defineProperty(TT, "abstract", {
        get: oT
      }), Object.defineProperty(TT, "html", {
        get: function() {
          return TT.abstract.map((function(TT) {
            return SI(TT)
          }))
        }
      }), Object.defineProperty(TT, "node", {
        get: function() {
          if (ET) {
            var oT = RT.createElement("div");
            return oT.innerHTML = TT.html, oT.children
          }
        }
      }), TT
    }

    function oi(TT) {
      var oT = TT.icons,
        IT = oT.main,
        iT = oT.mask,
        zT = TT.prefix,
        kT = TT.iconName,
        WT = TT.transform,
        XT = TT.symbol,
        FT = TT.maskId,
        ST = TT.extra,
        DT = TT.watchable,
        LT = void 0 !== DT && DT,
        xT = iT.found ? iT : IT,
        cT = xT.width,
        KT = xT.height,
        MT = [so.replacementClass, kT ? "".concat(so.cssPrefix, "-").concat(kT) : ""].filter((function(TT) {
          return -1 === ST.classes.indexOf(TT)
        })).filter((function(TT) {
          return "" !== TT || !!TT
        })).concat(ST.classes).join(" "),
        rT = {
          children: [],
          attributes: BT(BT({}, ST.attributes), {}, {
            "data-prefix": zT,
            "data-icon": kT,
            class: MT,
            role: ST.attributes.role || "img",
            viewBox: "0 0 ".concat(cT, " ").concat(KT)
          })
        };
      (function(TT) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(oT) {
          return oT in TT
        }))
      })(ST.attributes) || ST.attributes["aria-hidden"] || (rT.attributes["aria-hidden"] = "true"), LT && (rT.attributes[Mo] = "");
      var AT = BT(BT({}, rT), {}, {
          prefix: zT,
          iconName: kT,
          main: IT,
          mask: iT,
          maskId: FT,
          transform: WT,
          symbol: XT,
          styles: BT({}, ST.styles)
        }),
        gT = iT.found && IT.found ? bI("generateAbstractMask", AT) || {
          children: [],
          attributes: {}
        } : bI("generateAbstractIcon", AT) || {
          children: [],
          attributes: {}
        },
        hT = gT.children,
        wT = gT.attributes;
      return AT.children = hT, AT.attributes = wT, XT ? function(TT) {
        var oT = TT.prefix,
          IT = TT.iconName,
          iT = TT.children,
          zT = TT.attributes,
          kT = TT.symbol,
          WT = !0 === kT ? "".concat(oT, "-").concat(so.cssPrefix, "-").concat(IT) : kT;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: BT(BT({}, zT), {}, {
              id: WT
            }),
            children: iT
          }]
        }]
      }(AT) : function(TT) {
        var oT = TT.children,
          IT = TT.main,
          iT = TT.mask,
          zT = TT.attributes,
          kT = TT.styles,
          WT = TT.transform;
        if (TI(WT) && IT.found && !iT.found) {
          var XT = {
            x: IT.width / IT.height / 2,
            y: .5
          };
          zT.style = Vo(BT(BT({}, kT), {}, {
            "transform-origin": "".concat(XT.x + WT.x / 16, "em ").concat(XT.y + WT.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: zT,
          children: oT
        }]
      }(AT)
    }

    function Ii(TT) {
      var oT = TT.content,
        IT = TT.width,
        iT = TT.height,
        zT = TT.transform,
        kT = TT.extra,
        WT = TT.watchable,
        XT = void 0 !== WT && WT,
        FT = BT(BT({}, kT.attributes), {}, {
          class: kT.classes.join(" ")
        });
      XT && (FT[Mo] = "");
      var ST = BT({}, kT.styles);
      TI(zT) && (ST.transform = function(TT) {
        var oT = TT.transform,
          IT = TT.width,
          iT = void 0 === IT ? 16 : IT,
          zT = TT.height,
          kT = void 0 === zT ? 16 : zT,
          WT = TT.startCentered,
          XT = void 0 !== WT && WT,
          BT = "";
        return BT += XT && fT ? "translate(".concat(oT.x / Go - iT / 2, "em, ").concat(oT.y / Go - kT / 2, "em) ") : XT ? "translate(calc(-50% + ".concat(oT.x / Go, "em), calc(-50% + ").concat(oT.y / Go, "em)) ") : "translate(".concat(oT.x / Go, "em, ").concat(oT.y / Go, "em) "), BT += "scale(".concat(oT.size / Go * (oT.flipX ? -1 : 1), ", ").concat(oT.size / Go * (oT.flipY ? -1 : 1), ") "), BT + "rotate(".concat(oT.rotate, "deg) ")
      }({
        transform: zT,
        startCentered: !0,
        width: IT,
        height: iT
      }), ST["-webkit-transform"] = ST.transform);
      var DT = Vo(ST);
      DT.length > 0 && (FT.style = DT);
      var LT = [];
      return LT.push({
        tag: "span",
        attributes: FT,
        children: [oT]
      }), LT
    }
    var ii = WI.styles;

    function zi(TT) {
      var oT = TT[0],
        IT = TT[1],
        iT = FT(TT.slice(4), 1)[0];
      return {
        found: !0,
        width: oT,
        height: IT,
        icon: Array.isArray(iT) ? {
          tag: "g",
          attributes: {
            class: "".concat(so.cssPrefix, "-").concat(Oo.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(so.cssPrefix, "-").concat(Oo.SECONDARY),
              fill: "currentColor",
              d: iT[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(so.cssPrefix, "-").concat(Oo.PRIMARY),
              fill: "currentColor",
              d: iT[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: iT
          }
        }
      }
    }
    var ki = {
      found: !1,
      width: 512,
      height: 512
    };

    function Wi(TT, oT) {
      var IT = oT;
      return "fa" === oT && null !== so.styleDefault && (oT = UI()), new Promise((function(iT, zT) {
        if ("fa" === IT) {
          var kT = JI(TT) || {};
          TT = kT.iconName || TT, oT = kT.prefix || oT
        }
        if (TT && oT && ii[oT] && ii[oT][TT]) return iT(zi(ii[oT][TT]));
        ! function(TT, oT) {
          eo || so.showMissingIcons || !TT || console.error('Icon with name "'.concat(TT, '" and prefix "').concat(oT, '" is missing.'))
        }(TT, oT), iT(BT(BT({}, ki), {}, {
          icon: so.showMissingIcons && TT && bI("missingIconAbstract") || {}
        }))
      }))
    }
    var Xi = function() {},
      Bi = so.measurePerformance && vT && vT.mark && vT.measure ? vT : {
        mark: Xi,
        measure: Xi
      },
      Fi = 'FA "7.2.0"',
      Si = function(TT) {
        Bi.mark("".concat(Fi, " ").concat(TT, " ends")), Bi.measure("".concat(Fi, " ").concat(TT), "".concat(Fi, " ").concat(TT, " begins"), "".concat(Fi, " ").concat(TT, " ends"))
      },
      Di = function(TT) {
        return Bi.mark("".concat(Fi, " ").concat(TT, " begins")),
          function() {
            return Si(TT)
          }
      },
      Li = function() {};

    function xi(TT) {
      return "string" === typeof(TT.getAttribute ? TT.getAttribute(Mo) : null)
    }

    function ci(TT) {
      return RT.createElementNS("http://www.w3.org/2000/svg", TT)
    }

    function Ki(TT) {
      return RT.createElement(TT)
    }

    function Mi(TT) {
      var oT = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        IT = void 0 === oT ? "svg" === TT.tag ? ci : Ki : oT;
      if ("string" === typeof TT) return RT.createTextNode(TT);
      var iT = IT(TT.tag);
      return Object.keys(TT.attributes || []).forEach((function(oT) {
        iT.setAttribute(oT, TT.attributes[oT])
      })), (TT.children || []).forEach((function(TT) {
        iT.appendChild(Mi(TT, {
          ceFn: IT
        }))
      })), iT
    }
    var ri = {
      replace: function(TT) {
        var oT = TT[0];
        if (oT.parentNode)
          if (TT[1].forEach((function(TT) {
              oT.parentNode.insertBefore(Mi(TT), oT)
            })), null === oT.getAttribute(Mo) && so.keepOriginalSource) {
            var IT = RT.createComment(function(TT) {
              var oT = " ".concat(TT.outerHTML, " ");
              return "".concat(oT, "Font Awesome fontawesome.com ")
            }(oT));
            oT.parentNode.replaceChild(IT, oT)
          } else oT.remove()
      },
      nest: function(TT) {
        var oT = TT[0],
          IT = TT[1];
        if (~No(oT).indexOf(so.replacementClass)) return ri.replace(TT);
        var iT = new RegExp("".concat(so.cssPrefix, "-.*"));
        if (delete IT[0].attributes.id, IT[0].attributes.class) {
          var zT = IT[0].attributes.class.split(" ").reduce((function(TT, oT) {
            return oT === so.replacementClass || oT.match(iT) ? TT.toSvg.push(oT) : TT.toNode.push(oT), TT
          }), {
            toNode: [],
            toSvg: []
          });
          IT[0].attributes.class = zT.toSvg.join(" "), 0 === zT.toNode.length ? oT.removeAttribute("class") : oT.setAttribute("class", zT.toNode.join(" "))
        }
        var kT = IT.map((function(TT) {
          return SI(TT)
        })).join("\n");
        oT.setAttribute(Mo, ""), oT.innerHTML = kT
      }
    };

    function Ai(TT) {
      TT()
    }

    function gi(TT, oT) {
      var IT = "function" === typeof oT ? oT : Li;
      if (0 === TT.length) IT();
      else {
        var iT = Ai;
        "async" === so.mutateApproach && (iT = eT.requestAnimationFrame || Ai), iT((function() {
          var oT = !0 === so.autoReplaceSvg ? ri.replace : ri[so.autoReplaceSvg] || ri.replace,
            iT = Di("mutate");
          TT.map(oT), iT(), IT()
        }))
      }
    }
    var wi = !1;

    function mi() {
      wi = !0
    }

    function ei() {
      wi = !1
    }
    var Ri = null;

    function ui(TT) {
      if (uT && so.observeMutations) {
        var oT = TT.treeCallback,
          IT = void 0 === oT ? Li : oT,
          iT = TT.nodeCallback,
          zT = void 0 === iT ? Li : iT,
          kT = TT.pseudoElementsCallback,
          WT = void 0 === kT ? Li : kT,
          XT = TT.observeMutationsRoot,
          BT = void 0 === XT ? RT : XT;
        Ri = new uT((function(TT) {
          if (!wi) {
            var oT = UI();
            yo(TT).forEach((function(TT) {
              if ("childList" === TT.type && TT.addedNodes.length > 0 && !xi(TT.addedNodes[0]) && (so.searchPseudoElements && WT(TT.target), IT(TT.target)), "attributes" === TT.type && TT.target.parentNode && so.searchPseudoElements && WT([TT.target], !0), "attributes" === TT.type && xi(TT.target) && ~Qo.indexOf(TT.attributeName))
                if ("class" === TT.attributeName && function(TT) {
                    var oT = TT.getAttribute ? TT.getAttribute(Ao) : null,
                      IT = TT.getAttribute ? TT.getAttribute(go) : null;
                    return oT && IT
                  }(TT.target)) {
                  var iT = OI(No(TT.target)),
                    kT = iT.prefix,
                    XT = iT.iconName;
                  TT.target.setAttribute(Ao, kT || oT), XT && TT.target.setAttribute(go, XT)
                } else(BT = TT.target) && BT.classList && BT.classList.contains && BT.classList.contains(so.replacementClass) && zT(TT.target);
              var BT
            }))
          }
        })), ET && Ri.observe(BT, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function vi(TT) {
      var oT, IT, iT = TT.getAttribute("data-prefix"),
        zT = TT.getAttribute("data-icon"),
        kT = void 0 !== TT.innerText ? TT.innerText.trim() : "",
        WT = OI(No(TT));
      return WT.prefix || (WT.prefix = UI()), iT && zT && (WT.prefix = iT, WT.iconName = zT), WT.iconName && WT.prefix || (WT.prefix && kT.length > 0 && (WT.iconName = (oT = WT.prefix, IT = TT.innerText, (mI[oT] || {})[IT] || CI(WT.prefix, xI(TT.innerText)))), !WT.iconName && so.autoFetchSvg && TT.firstChild && TT.firstChild.nodeType === Node.TEXT_NODE && (WT.iconName = TT.firstChild.data)), WT
    }

    function Ei(TT) {
      var oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        IT = vi(TT),
        iT = IT.iconName,
        zT = IT.prefix,
        kT = IT.rest,
        WT = function(TT) {
          return yo(TT.attributes).reduce((function(TT, oT) {
            return "class" !== TT.name && "style" !== TT.name && (TT[oT.name] = oT.value), TT
          }), {})
        }(TT),
        XT = GI("parseNodeAttributes", {}, TT),
        FT = oT.styleParser ? function(TT) {
          var oT = TT.getAttribute("style"),
            IT = [];
          return oT && (IT = oT.split(";").reduce((function(TT, oT) {
            var IT = oT.split(":"),
              iT = IT[0],
              zT = IT.slice(1);
            return iT && zT.length > 0 && (TT[iT] = zT.join(":").trim()), TT
          }), {})), IT
        }(TT) : [];
      return BT({
        iconName: iT,
        prefix: zT,
        transform: po,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: kT,
          styles: FT,
          attributes: WT
        }
      }, XT)
    }
    var fi = WI.styles;

    function Ci(TT) {
      var oT = "nest" === so.autoReplaceSvg ? Ei(TT, {
        styleParser: !1
      }) : Ei(TT);
      return ~oT.extra.classes.indexOf(ao) ? bI("generateLayersText", TT, oT) : bI("generateSvgReplacementMutation", TT, oT)
    }

    function ji(TT) {
      var oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!ET) return Promise.resolve();
      var IT = RT.documentElement.classList,
        iT = function(TT) {
          return IT.add("".concat(ho, "-").concat(TT))
        },
        zT = function(TT) {
          return IT.remove("".concat(ho, "-").concat(TT))
        },
        kT = so.autoFetchSvg ? [].concat(ST(To), ST(So)) : jT.concat(Object.keys(fi));
      kT.includes("fa") || kT.push("fa");
      var WT = [".".concat(ao, ":not([").concat(Mo, "])")].concat(kT.map((function(TT) {
        return ".".concat(TT, ":not([").concat(Mo, "])")
      }))).join(", ");
      if (0 === WT.length) return Promise.resolve();
      var XT = [];
      try {
        XT = yo(TT.querySelectorAll(WT))
      } catch (DT) {}
      if (!(XT.length > 0)) return Promise.resolve();
      iT("pending"), zT("complete");
      var BT = Di("onTree"),
        FT = XT.reduce((function(TT, oT) {
          try {
            var IT = Ci(oT);
            IT && TT.push(IT)
          } catch (DT) {
            eo || "MissingIcon" === DT.name && console.error(DT)
          }
          return TT
        }), []);
      return new Promise((function(TT, IT) {
        Promise.all(FT).then((function(IT) {
          gi(IT, (function() {
            iT("active"), iT("complete"), zT("pending"), "function" === typeof oT && oT(), BT(), TT()
          }))
        })).catch((function(TT) {
          BT(), IT(TT)
        }))
      }))
    }

    function Ji(TT) {
      var oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      Ci(TT).then((function(TT) {
        TT && gi([TT], oT)
      }))
    }
    var Ui = function(TT) {
        var oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          IT = oT.transform,
          iT = void 0 === IT ? po : IT,
          zT = oT.symbol,
          kT = void 0 !== zT && zT,
          WT = oT.mask,
          XT = void 0 === WT ? null : WT,
          FT = oT.maskId,
          ST = void 0 === FT ? null : FT,
          DT = oT.classes,
          LT = void 0 === DT ? [] : DT,
          xT = oT.attributes,
          cT = void 0 === xT ? {} : xT,
          KT = oT.styles,
          MT = void 0 === KT ? {} : KT;
        if (TT) {
          var rT = TT.prefix,
            AT = TT.iconName,
            gT = TT.icon;
          return Ti(BT({
            type: "icon"
          }, TT), (function() {
            return pI("beforeDOMElementCreation", {
              iconDefinition: TT,
              params: oT
            }), oi({
              icons: {
                main: zi(gT),
                mask: XT ? zi(XT.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: rT,
              iconName: AT,
              transform: BT(BT({}, po), iT),
              symbol: kT,
              maskId: ST,
              extra: {
                attributes: cT,
                styles: MT,
                classes: LT
              }
            })
          }))
        }
      },
      ai = {
        mixout: function() {
          return {
            icon: (TT = Ui, function(oT) {
              var IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                iT = (oT || {}).icon ? oT : yI(oT || {}),
                zT = IT.mask;
              return zT && (zT = (zT || {}).icon ? zT : yI(zT || {})), TT(iT, BT(BT({}, IT), {}, {
                mask: zT
              }))
            })
          };
          var TT
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(TT) {
              return TT.treeCallback = ji, TT.nodeCallback = Ji, TT
            }
          }
        },
        provides: function(TT) {
          TT.i2svg = function(TT) {
            var oT = TT.node,
              IT = void 0 === oT ? RT : oT,
              iT = TT.callback;
            return ji(IT, void 0 === iT ? function() {} : iT)
          }, TT.generateSvgReplacementMutation = function(TT, oT) {
            var IT = oT.iconName,
              iT = oT.prefix,
              zT = oT.transform,
              kT = oT.symbol,
              WT = oT.mask,
              XT = oT.maskId,
              BT = oT.extra;
            return new Promise((function(oT, ST) {
              Promise.all([Wi(IT, iT), WT.iconName ? Wi(WT.iconName, WT.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(WT) {
                var ST = FT(WT, 2),
                  DT = ST[0],
                  LT = ST[1];
                oT([TT, oi({
                  icons: {
                    main: DT,
                    mask: LT
                  },
                  prefix: iT,
                  iconName: IT,
                  transform: zT,
                  symbol: kT,
                  maskId: XT,
                  extra: BT,
                  watchable: !0
                })])
              })).catch(ST)
            }))
          }, TT.generateAbstractIcon = function(TT) {
            var oT, IT = TT.children,
              iT = TT.attributes,
              zT = TT.main,
              kT = TT.transform,
              WT = Vo(TT.styles);
            return WT.length > 0 && (iT.style = WT), TI(kT) && (oT = bI("generateAbstractTransformGrouping", {
              main: zT,
              transform: kT,
              containerWidth: zT.width,
              iconWidth: zT.width
            })), IT.push(oT || zT.icon), {
              children: IT,
              attributes: iT
            }
          }
        }
      },
      Yi = {
        mixout: function() {
          return {
            layer: function(TT) {
              var oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                IT = oT.classes,
                iT = void 0 === IT ? [] : IT;
              return Ti({
                type: "layer"
              }, (function() {
                pI("beforeDOMElementCreation", {
                  assembler: TT,
                  params: oT
                });
                var IT = [];
                return TT((function(TT) {
                  Array.isArray(TT) ? TT.map((function(TT) {
                    IT = IT.concat(TT.abstract)
                  })) : IT = IT.concat(TT.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(so.cssPrefix, "-layers")].concat(ST(iT)).join(" ")
                  },
                  children: IT
                }]
              }))
            }
          }
        }
      },
      Qi = {
        mixout: function() {
          return {
            counter: function(TT) {
              var oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                IT = oT.title,
                iT = void 0 === IT ? null : IT,
                zT = oT.classes,
                kT = void 0 === zT ? [] : zT,
                WT = oT.attributes,
                XT = void 0 === WT ? {} : WT,
                FT = oT.styles,
                DT = void 0 === FT ? {} : FT;
              return Ti({
                type: "counter",
                content: TT
              }, (function() {
                return pI("beforeDOMElementCreation", {
                    content: TT,
                    params: oT
                  }),
                  function(TT) {
                    var oT = TT.content,
                      IT = TT.extra,
                      iT = BT(BT({}, IT.attributes), {}, {
                        class: IT.classes.join(" ")
                      }),
                      zT = Vo(IT.styles);
                    zT.length > 0 && (iT.style = zT);
                    var kT = [];
                    return kT.push({
                      tag: "span",
                      attributes: iT,
                      children: [oT]
                    }), kT
                  }({
                    content: TT.toString(),
                    title: iT,
                    extra: {
                      attributes: XT,
                      styles: DT,
                      classes: ["".concat(so.cssPrefix, "-layers-counter")].concat(ST(kT))
                    }
                  })
              }))
            }
          }
        }
      },
      Oi = {
        mixout: function() {
          return {
            text: function(TT) {
              var oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                IT = oT.transform,
                iT = void 0 === IT ? po : IT,
                zT = oT.classes,
                kT = void 0 === zT ? [] : zT,
                WT = oT.attributes,
                XT = void 0 === WT ? {} : WT,
                FT = oT.styles,
                DT = void 0 === FT ? {} : FT;
              return Ti({
                type: "text",
                content: TT
              }, (function() {
                return pI("beforeDOMElementCreation", {
                  content: TT,
                  params: oT
                }), Ii({
                  content: TT,
                  transform: BT(BT({}, po), iT),
                  extra: {
                    attributes: XT,
                    styles: DT,
                    classes: ["".concat(so.cssPrefix, "-layers-text")].concat(ST(kT))
                  }
                })
              }))
            }
          }
        },
        provides: function(TT) {
          TT.generateLayersText = function(TT, oT) {
            var IT = oT.transform,
              iT = oT.extra,
              zT = null,
              kT = null;
            if (fT) {
              var WT = parseInt(getComputedStyle(TT).fontSize, 10),
                XT = TT.getBoundingClientRect();
              zT = XT.width / WT, kT = XT.height / WT
            }
            return Promise.resolve([TT, Ii({
              content: TT.innerHTML,
              width: zT,
              height: kT,
              transform: IT,
              extra: iT,
              watchable: !0
            })])
          }
        }
      },
      Hi = new RegExp('"', "ug"),
      ni = [1105920, 1112319],
      qi = BT(BT(BT(BT({}, {
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
      Zi = Object.keys(qi).reduce((function(TT, oT) {
        return TT[oT.toLowerCase()] = qi[oT], TT
      }), {}),
      li = Object.keys(Zi).reduce((function(TT, oT) {
        var IT = Zi[oT];
        return TT[oT] = IT[900] || ST(Object.entries(IT))[0][1], TT
      }), {});

    function si(TT, oT) {
      var IT = "".concat("data-fa-pseudo-element-pending").concat(oT.replace(":", "-"));
      return new Promise((function(iT, zT) {
        if (null !== TT.getAttribute(IT)) return iT();
        var kT = yo(TT.children).filter((function(TT) {
            return TT.getAttribute(ro) === oT
          }))[0],
          WT = eT.getComputedStyle(TT, oT),
          XT = WT.getPropertyValue("font-family"),
          FT = XT.match(Yo),
          DT = WT.getPropertyValue("font-weight"),
          LT = WT.getPropertyValue("content");
        if (kT && !FT) return TT.removeChild(kT), iT();
        if (FT && "none" !== LT && "" !== LT) {
          var xT = WT.getPropertyValue("content"),
            cT = function(TT, oT) {
              var IT = TT.replace(/^['"]|['"]$/g, "").toLowerCase(),
                iT = parseInt(oT),
                zT = isNaN(iT) ? "normal" : iT;
              return (Zi[IT] || {})[zT] || li[IT]
            }(XT, DT),
            KT = function(TT) {
              return xI(ST(TT.replace(Hi, ""))[0] || "")
            }(xT),
            MT = FT[0].startsWith("FontAwesome"),
            rT = function(TT) {
              var oT = TT.getPropertyValue("font-feature-settings").includes("ss01"),
                IT = TT.getPropertyValue("content").replace(Hi, ""),
                iT = IT.codePointAt(0),
                zT = iT >= ni[0] && iT <= ni[1],
                kT = 2 === IT.length && IT[0] === IT[1];
              return zT || kT || oT
            }(WT),
            AT = CI(cT, KT),
            gT = AT;
          if (MT) {
            var hT = function(TT) {
              var oT = RI[TT],
                IT = CI("fas", TT);
              return oT || (IT ? {
                prefix: "fas",
                iconName: IT
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(KT);
            hT.iconName && hT.prefix && (AT = hT.iconName, cT = hT.prefix)
          }
          if (!AT || rT || kT && kT.getAttribute(Ao) === cT && kT.getAttribute(go) === gT) iT();
          else {
            TT.setAttribute(IT, gT), kT && TT.removeChild(kT);
            var wT = {
                iconName: null,
                prefix: null,
                transform: po,
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
              mT = wT.extra;
            mT.attributes[ro] = oT, Wi(AT, cT).then((function(zT) {
              var kT = oi(BT(BT({}, wT), {}, {
                  icons: {
                    main: zT,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: cT,
                  iconName: gT,
                  extra: mT,
                  watchable: !0
                })),
                WT = RT.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === oT ? TT.insertBefore(WT, TT.firstChild) : TT.appendChild(WT), WT.outerHTML = kT.map((function(TT) {
                return SI(TT)
              })).join("\n"), TT.removeAttribute(IT), iT()
            })).catch(zT)
          }
        } else iT()
      }))
    }

    function ti(TT) {
      return Promise.all([si(TT, "::before"), si(TT, "::after")])
    }

    function Gi(TT) {
      return TT.parentNode !== document.head && !~wo.indexOf(TT.tagName.toUpperCase()) && !TT.getAttribute(ro) && (!TT.parentNode || "svg" !== TT.parentNode.tagName)
    }
    var bi = function(TT) {
        return !!TT && mo.some((function(oT) {
          return TT.includes(oT)
        }))
      },
      yi = function(TT) {
        if (!TT) return [];
        var oT = new Set,
          IT = TT.split(/,(?![^()]*\))/).map((function(TT) {
            return TT.trim()
          }));
        IT = IT.flatMap((function(TT) {
          return TT.includes("(") ? TT : TT.split(",").map((function(TT) {
            return TT.trim()
          }))
        }));
        var iT, zT = kT(IT);
        try {
          for (zT.s(); !(iT = zT.n()).done;) {
            var WT = iT.value;
            if (bi(WT)) {
              var XT = mo.reduce((function(TT, oT) {
                return TT.replace(oT, "")
              }), WT);
              "" !== XT && "*" !== XT && oT.add(XT)
            }
          }
        } catch (BT) {
          zT.e(BT)
        } finally {
          zT.f()
        }
        return oT
      };

    function Ni(TT) {
      if (ET) {
        var oT;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) oT = TT;
        else if (so.searchPseudoElementsFullScan) oT = TT.querySelectorAll("*");
        else {
          var IT, iT = new Set,
            zT = kT(document.styleSheets);
          try {
            for (zT.s(); !(IT = zT.n()).done;) {
              var WT = IT.value;
              try {
                var XT, BT = kT(WT.cssRules);
                try {
                  for (BT.s(); !(XT = BT.n()).done;) {
                    var FT, ST = XT.value,
                      DT = kT(yi(ST.selectorText));
                    try {
                      for (DT.s(); !(FT = DT.n()).done;) {
                        var LT = FT.value;
                        iT.add(LT)
                      }
                    } catch (cT) {
                      DT.e(cT)
                    } finally {
                      DT.f()
                    }
                  }
                } catch (cT) {
                  BT.e(cT)
                } finally {
                  BT.f()
                }
              } catch (KT) {
                so.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(WT.href, " (").concat(KT.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (cT) {
            zT.e(cT)
          } finally {
            zT.f()
          }
          if (!iT.size) return;
          var xT = Array.from(iT).join(", ");
          try {
            oT = TT.querySelectorAll(xT)
          } catch (MT) {}
        }
        return new Promise((function(TT, IT) {
          var iT = yo(oT).filter(Gi).map(ti),
            zT = Di("searchPseudoElements");
          mi(), Promise.all(iT).then((function() {
            zT(), ei(), TT()
          })).catch((function() {
            zT(), ei(), IT()
          }))
        }))
      }
    }
    var Pi = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(TT) {
              return TT.pseudoElementsCallback = Ni, TT
            }
          }
        },
        provides: function(TT) {
          TT.pseudoElements2svg = function(TT) {
            var oT = TT.node,
              IT = void 0 === oT ? RT : oT;
            so.searchPseudoElements && Ni(IT)
          }
        }
      },
      di = !1,
      Vi = function(TT) {
        return TT.toLowerCase().split(" ").reduce((function(TT, oT) {
          var IT = oT.toLowerCase().split("-"),
            iT = IT[0],
            zT = IT.slice(1).join("-");
          if (iT && "h" === zT) return TT.flipX = !0, TT;
          if (iT && "v" === zT) return TT.flipY = !0, TT;
          if (zT = parseFloat(zT), isNaN(zT)) return TT;
          switch (iT) {
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
      Tz = {
        mixout: function() {
          return {
            parse: {
              transform: function(TT) {
                return Vi(TT)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(TT, oT) {
              var IT = oT.getAttribute("data-fa-transform");
              return IT && (TT.transform = Vi(IT)), TT
            }
          }
        },
        provides: function(TT) {
          TT.generateAbstractTransformGrouping = function(TT) {
            var oT = TT.main,
              IT = TT.transform,
              iT = TT.containerWidth,
              zT = TT.iconWidth,
              kT = {
                transform: "translate(".concat(iT / 2, " 256)")
              },
              WT = "translate(".concat(32 * IT.x, ", ").concat(32 * IT.y, ") "),
              XT = "scale(".concat(IT.size / 16 * (IT.flipX ? -1 : 1), ", ").concat(IT.size / 16 * (IT.flipY ? -1 : 1), ") "),
              FT = "rotate(".concat(IT.rotate, " 0 0)"),
              ST = {
                outer: kT,
                inner: {
                  transform: "".concat(WT, " ").concat(XT, " ").concat(FT)
                },
                path: {
                  transform: "translate(".concat(zT / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: BT({}, ST.outer),
              children: [{
                tag: "g",
                attributes: BT({}, ST.inner),
                children: [{
                  tag: oT.icon.tag,
                  children: oT.icon.children,
                  attributes: BT(BT({}, oT.icon.attributes), ST.path)
                }]
              }]
            }
          }
        }
      },
      oz = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function Iz(TT) {
      var oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return TT.attributes && (TT.attributes.fill || oT) && (TT.attributes.fill = "black"), TT
    }
    var iz = {
        hooks: function() {
          return {
            parseNodeAttributes: function(TT, oT) {
              var IT = oT.getAttribute("data-fa-mask"),
                iT = IT ? OI(IT.split(" ").map((function(TT) {
                  return TT.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return iT.prefix || (iT.prefix = UI()), TT.mask = iT, TT.maskId = oT.getAttribute("data-fa-mask-id"), TT
            }
          }
        },
        provides: function(TT) {
          TT.generateAbstractMask = function(TT) {
            var oT, IT = TT.children,
              iT = TT.attributes,
              zT = TT.main,
              kT = TT.mask,
              WT = TT.maskId,
              XT = TT.transform,
              FT = zT.width,
              ST = zT.icon,
              DT = kT.width,
              LT = kT.icon,
              xT = function(TT) {
                var oT = TT.transform,
                  IT = TT.containerWidth,
                  iT = TT.iconWidth,
                  zT = {
                    transform: "translate(".concat(IT / 2, " 256)")
                  },
                  kT = "translate(".concat(32 * oT.x, ", ").concat(32 * oT.y, ") "),
                  WT = "scale(".concat(oT.size / 16 * (oT.flipX ? -1 : 1), ", ").concat(oT.size / 16 * (oT.flipY ? -1 : 1), ") "),
                  XT = "rotate(".concat(oT.rotate, " 0 0)");
                return {
                  outer: zT,
                  inner: {
                    transform: "".concat(kT, " ").concat(WT, " ").concat(XT)
                  },
                  path: {
                    transform: "translate(".concat(iT / 2 * -1, " -256)")
                  }
                }
              }({
                transform: XT,
                containerWidth: DT,
                iconWidth: FT
              }),
              cT = {
                tag: "rect",
                attributes: BT(BT({}, oz), {}, {
                  fill: "white"
                })
              },
              KT = ST.children ? {
                children: ST.children.map(Iz)
              } : {},
              MT = {
                tag: "g",
                attributes: BT({}, xT.inner),
                children: [Iz(BT({
                  tag: ST.tag,
                  attributes: BT(BT({}, ST.attributes), xT.path)
                }, KT))]
              },
              rT = {
                tag: "g",
                attributes: BT({}, xT.outer),
                children: [MT]
              },
              AT = "mask-".concat(WT || bo()),
              gT = "clip-".concat(WT || bo()),
              hT = {
                tag: "mask",
                attributes: BT(BT({}, oz), {}, {
                  id: AT,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [cT, rT]
              },
              wT = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: gT
                  },
                  children: (oT = LT, "g" === oT.tag ? oT.children : [oT])
                }, hT]
              };
            return IT.push(wT, {
              tag: "rect",
              attributes: BT({
                fill: "currentColor",
                "clip-path": "url(#".concat(gT, ")"),
                mask: "url(#".concat(AT, ")")
              }, oz)
            }), {
              children: IT,
              attributes: iT
            }
          }
        }
      },
      zz = {
        provides: function(TT) {
          var oT = !1;
          eT.matchMedia && (oT = eT.matchMedia("(prefers-reduced-motion: reduce)").matches), TT.missingIconAbstract = function() {
            var TT = [],
              IT = {
                fill: "currentColor"
              },
              iT = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            TT.push({
              tag: "path",
              attributes: BT(BT({}, IT), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var zT = BT(BT({}, iT), {}, {
                attributeName: "opacity"
              }),
              kT = {
                tag: "circle",
                attributes: BT(BT({}, IT), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return oT || kT.children.push({
              tag: "animate",
              attributes: BT(BT({}, iT), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: BT(BT({}, zT), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), TT.push(kT), TT.push({
              tag: "path",
              attributes: BT(BT({}, IT), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: oT ? [] : [{
                tag: "animate",
                attributes: BT(BT({}, zT), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), oT || TT.push({
              tag: "path",
              attributes: BT(BT({}, IT), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: BT(BT({}, zT), {}, {
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
    ! function(TT, oT) {
      var IT = oT.mixoutsTo;
      ZI = TT, lI = {}, Object.keys(sI).forEach((function(TT) {
        -1 === tI.indexOf(TT) && delete sI[TT]
      })), ZI.forEach((function(TT) {
        var oT = TT.mixout ? TT.mixout() : {};
        if (Object.keys(oT).forEach((function(TT) {
            "function" === typeof oT[TT] && (IT[TT] = oT[TT]), "object" === LT(oT[TT]) && Object.keys(oT[TT]).forEach((function(iT) {
              IT[TT] || (IT[TT] = {}), IT[TT][iT] = oT[TT][iT]
            }))
          })), TT.hooks) {
          var iT = TT.hooks();
          Object.keys(iT).forEach((function(TT) {
            lI[TT] || (lI[TT] = []), lI[TT].push(iT[TT])
          }))
        }
        TT.provides && TT.provides(sI)
      }))
    }([zI, ai, Yi, Qi, Oi, Pi, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              mi(), di = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            ui(GI("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            Ri && Ri.disconnect()
          },
          watch: function(TT) {
            var oT = TT.observeMutationsRoot;
            di ? ei() : ui(GI("mutationObserverCallbacks", {
              observeMutationsRoot: oT
            }))
          }
        }
      }
    }, Tz, iz, zz, {
      hooks: function() {
        return {
          parseNodeAttributes: function(TT, oT) {
            var IT = oT.getAttribute("data-fa-symbol"),
              iT = null !== IT && ("" === IT || IT);
            return TT.symbol = iT, TT
          }
        }
      }
    }], {
      mixoutsTo: dI
    });
    var kz = dI.noAuto,
      Wz = dI.config,
      Xz = dI.library,
      Bz = dI.dom,
      Fz = dI.parse,
      Sz = dI.findIconDefinition,
      Dz = dI.toHtml,
      Lz = dI.icon,
      xz = dI.layer,
      cz = dI.text,
      Kz = dI.counter
  },
  6183: TT => {
    TT.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);