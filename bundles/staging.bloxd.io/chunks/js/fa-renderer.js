/*! For license information please see 6ndy1f.fa-renderer.4f90be62.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6382: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      FontAwesomeIcon: () => Ek
    });
    var Rk = Bk(6380),
      tk = Bk(4667),
      ak = Bk.n(tk),
      Xk = Bk(61);

    function bk(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function wk(kk, Fk, Bk) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != typeof kk || !kk) return kk;
          var Bk = kk[Symbol.toPrimitive];
          if (void 0 !== Bk) {
            var Rk = Bk.call(kk, Fk || "default");
            if ("object" != typeof Rk) return Rk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == typeof Fk ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function dk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function sk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? dk(Object(Bk), !0).forEach((function(Fk) {
          wk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : dk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Vk(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Bk = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != Bk) {
          var Rk, tk, ak, Xk, bk = [],
            wk = !0,
            dk = !1;
          try {
            if (ak = (Bk = Bk.call(kk)).next, 0 === Fk) {
              if (Object(Bk) !== Bk) return;
              wk = !1
            } else
              for (; !(wk = (Rk = ak.call(Bk)).done) && (bk.push(Rk.value), bk.length !== Fk); wk = !0);
          } catch (kk) {
            dk = !0, tk = kk
          } finally {
            try {
              if (!wk && null != Bk.return && (Xk = Bk.return(), Object(Xk) !== Xk)) return
            } finally {
              if (dk) throw tk
            }
          }
          return bk
        }
      }(kk, Fk) || ek(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Jk(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return bk(kk)
      }(kk) || function(kk) {
        if ("undefined" != typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || ek(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ak(kk) {
      return Ak = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Ak(kk)
    }

    function ek(kk, Fk) {
      if (kk) {
        if ("string" == typeof kk) return bk(kk, Fk);
        var Bk = {}.toString.call(kk).slice(8, -1);
        return "Object" === Bk && kk.constructor && (Bk = kk.constructor.name), "Map" === Bk || "Set" === Bk ? Array.from(kk) : "Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk) ? bk(kk, Fk) : void 0
      }
    }
    var yk;
    try {
      var fk = Bk(6385);
      yk = fk.version
    } catch (Nk) {
      yk = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function mk(kk) {
      var Fk = kk.beat,
        Bk = kk.fade,
        Rk = kk.beatFade,
        tk = kk.bounce,
        ak = kk.shake,
        Xk = kk.flash,
        bk = kk.spin,
        dk = kk.spinPulse,
        sk = kk.spinReverse,
        Jk = kk.pulse,
        Ak = kk.fixedWidth,
        ek = kk.inverse,
        fk = kk.border,
        mk = kk.listItem,
        Wk = kk.flip,
        vk = kk.size,
        ik = kk.rotation,
        Yk = kk.pull,
        Lk = kk.swapOpacity,
        Ok = kk.rotateBy,
        Ek = kk.widthAuto,
        Sk = function(kk, Fk) {
          for (var Bk = Vk(kk.split("-"), 2), Rk = Bk[0], tk = Bk[1], ak = Vk(Fk.split("-"), 2), Xk = ak[0], bk = ak[1], wk = Rk.split("."), dk = Xk.split("."), sk = 0; sk < Math.max(wk.length, dk.length); sk++) {
            var Jk = wk[sk] || "0",
              Ak = dk[sk] || "0",
              ek = parseInt(Jk, 10),
              yk = parseInt(Ak, 10);
            if (ek !== yk) return ek > yk
          }
          for (var fk = 0; fk < Math.max(wk.length, dk.length); fk++) {
            var mk = wk[fk] || "0",
              Wk = dk[fk] || "0";
            if (mk !== Wk && mk.length !== Wk.length) return mk.length < Wk.length
          }
          return !(tk && !bk)
        }(yk, "7.0.0"),
        Nk = wk(wk(wk(wk(wk(wk({
          "fa-beat": Fk,
          "fa-fade": Bk,
          "fa-beat-fade": Rk,
          "fa-bounce": tk,
          "fa-shake": ak,
          "fa-flash": Xk,
          "fa-spin": bk,
          "fa-spin-reverse": sk,
          "fa-spin-pulse": dk,
          "fa-pulse": Jk,
          "fa-fw": Ak,
          "fa-inverse": ek,
          "fa-border": fk,
          "fa-li": mk,
          "fa-flip": !0 === Wk,
          "fa-flip-horizontal": "horizontal" === Wk || "both" === Wk,
          "fa-flip-vertical": "vertical" === Wk || "both" === Wk
        }, "fa-".concat(vk), "undefined" !== typeof vk && null !== vk), "fa-rotate-".concat(ik), "undefined" !== typeof ik && null !== ik && 0 !== ik), "fa-pull-".concat(Yk), "undefined" !== typeof Yk && null !== Yk), "fa-swap-opacity", Lk), "fa-rotate-by", Sk && Ok), "fa-width-auto", Sk && Ek);
      return Object.keys(Nk).map((function(kk) {
        return Nk[kk] ? kk : null
      })).filter((function(kk) {
        return kk
      }))
    }

    function Wk(kk) {
      return Fk = kk, (Fk -= 0) === Fk ? kk : (kk = kk.replace(/[\-_\s]+(.)?/g, (function(kk, Fk) {
        return Fk ? Fk.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + kk.substr(1);
      var Fk
    }
    var vk = ["style"];
    var ik = !1;
    try {
      ik = !0
    } catch (Nk) {}

    function Yk(kk) {
      return kk && "object" === Ak(kk) && kk.prefix && kk.iconName && kk.icon ? kk : Rk.parse.icon ? Rk.parse.icon(kk) : null === kk ? null : kk && "object" === Ak(kk) && kk.prefix && kk.iconName ? kk : Array.isArray(kk) && 2 === kk.length ? {
        prefix: kk[0],
        iconName: kk[1]
      } : "string" === typeof kk ? {
        prefix: "fas",
        iconName: kk
      } : void 0
    }

    function Lk(kk, Fk) {
      return Array.isArray(Fk) && Fk.length > 0 || !Array.isArray(Fk) && Fk ? wk({}, kk, Fk) : {}
    }
    var Ok = {
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
      Ek = Xk.forwardRef((function(kk, Fk) {
        var Bk = sk(sk({}, Ok), kk),
          tk = Bk.icon,
          ak = Bk.mask,
          Xk = Bk.symbol,
          bk = Bk.className,
          wk = Bk.title,
          dk = Bk.titleId,
          Vk = Bk.maskId,
          Ak = Yk(tk),
          ek = Lk("classes", [].concat(Jk(mk(Bk)), Jk((bk || "").split(" ")))),
          yk = Lk("transform", "string" === typeof Bk.transform ? Rk.parse.transform(Bk.transform) : Bk.transform),
          fk = Lk("mask", Yk(ak)),
          Wk = (0, Rk.icon)(Ak, sk(sk(sk(sk({}, ek), yk), fk), {}, {
            symbol: Xk,
            title: wk,
            titleId: dk,
            maskId: Vk
          }));
        if (!Wk) return function() {
          var kk;
          !ik && console && "function" === typeof console.error && (kk = console).error.apply(kk, arguments)
        }("Could not find icon", Ak), null;
        var vk = Wk.abstract,
          Ek = {
            ref: Fk
          };
        return Object.keys(Bk).forEach((function(kk) {
          Ok.hasOwnProperty(kk) || (Ek[kk] = Bk[kk])
        })), Sk(vk[0], Ek)
      }));
    Ek.displayName = "FontAwesomeIcon", Ek.propTypes = {
      beat: ak().bool,
      border: ak().bool,
      beatFade: ak().bool,
      bounce: ak().bool,
      className: ak().string,
      fade: ak().bool,
      flash: ak().bool,
      mask: ak().oneOfType([ak().object, ak().array, ak().string]),
      maskId: ak().string,
      fixedWidth: ak().bool,
      inverse: ak().bool,
      flip: ak().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: ak().oneOfType([ak().object, ak().array, ak().string]),
      listItem: ak().bool,
      pull: ak().oneOf(["right", "left"]),
      pulse: ak().bool,
      rotation: ak().oneOf([0, 90, 180, 270]),
      rotateBy: ak().bool,
      shake: ak().bool,
      size: ak().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: ak().bool,
      spinPulse: ak().bool,
      spinReverse: ak().bool,
      symbol: ak().oneOfType([ak().bool, ak().string]),
      title: ak().string,
      titleId: ak().string,
      transform: ak().oneOfType([ak().string, ak().object]),
      swapOpacity: ak().bool,
      widthAuto: ak().bool
    };
    var Sk = function kk(Fk, Bk) {
      var Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof Bk) return Bk;
      var tk = (Bk.children || []).map((function(Bk) {
          return kk(Fk, Bk)
        })),
        ak = Object.keys(Bk.attributes || {}).reduce((function(kk, Fk) {
          var Rk = Bk.attributes[Fk];
          switch (Fk) {
            case "class":
              kk.attrs.className = Rk, delete Bk.attributes.class;
              break;
            case "style":
              kk.attrs.style = Rk.split(";").map((function(kk) {
                return kk.trim()
              })).filter((function(kk) {
                return kk
              })).reduce((function(kk, Fk) {
                var Bk, Rk = Fk.indexOf(":"),
                  tk = Wk(Fk.slice(0, Rk)),
                  ak = Fk.slice(Rk + 1).trim();
                return tk.startsWith("webkit") ? kk[(Bk = tk, Bk.charAt(0).toUpperCase() + Bk.slice(1))] = ak : kk[tk] = ak, kk
              }), {});
              break;
            default:
              0 === Fk.indexOf("aria-") || 0 === Fk.indexOf("data-") ? kk.attrs[Fk.toLowerCase()] = Rk : kk.attrs[Wk(Fk)] = Rk
          }
          return kk
        }), {
          attrs: {}
        }),
        Xk = Rk.style,
        bk = void 0 === Xk ? {} : Xk,
        wk = function(kk, Fk) {
          if (null == kk) return {};
          var Bk, Rk, tk = function(kk, Fk) {
            if (null == kk) return {};
            var Bk = {};
            for (var Rk in kk)
              if ({}.hasOwnProperty.call(kk, Rk)) {
                if (-1 !== Fk.indexOf(Rk)) continue;
                Bk[Rk] = kk[Rk]
              } return Bk
          }(kk, Fk);
          if (Object.getOwnPropertySymbols) {
            var ak = Object.getOwnPropertySymbols(kk);
            for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], -1 === Fk.indexOf(Bk) && {}.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
          }
          return tk
        }(Rk, vk);
      return ak.attrs.style = sk(sk({}, ak.attrs.style), bk), Fk.apply(void 0, [Bk.tag, sk(sk({}, ak.attrs), wk)].concat(Jk(tk)))
    }.bind(null, Xk.createElement)
  },
  4669: (kk, Fk, Bk) => {
    var Rk = Bk(4671);

    function tk() {}

    function ak() {}
    ak.resetWarningCache = tk, kk.exports = function() {
      function kk(kk, Fk, Bk, tk, ak, Xk) {
        if (Xk !== Rk) {
          var bk = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw bk.name = "Invariant Violation", bk
        }
      }

      function Fk() {
        return kk
      }
      kk.isRequired = kk;
      var Bk = {
        array: kk,
        bigint: kk,
        bool: kk,
        func: kk,
        number: kk,
        object: kk,
        string: kk,
        symbol: kk,
        any: kk,
        arrayOf: Fk,
        element: kk,
        elementType: kk,
        instanceOf: Fk,
        node: kk,
        objectOf: Fk,
        oneOf: Fk,
        oneOfType: Fk,
        shape: Fk,
        exact: Fk,
        checkPropTypes: ak,
        resetWarningCache: tk
      };
      return Bk.PropTypes = Bk, Bk
    }
  },
  4667: (kk, Fk, Bk) => {
    kk.exports = Bk(4669)()
  },
  4671: kk => {
    kk.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6380: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function tk(kk, Fk) {
      for (var Bk = 0; Bk < Fk.length; Bk++) {
        var Rk = Fk[Bk];
        Rk.enumerable = Rk.enumerable || !1, Rk.configurable = !0, "value" in Rk && (Rk.writable = !0), Object.defineProperty(kk, Vk(Rk.key), Rk)
      }
    }

    function ak(kk, Fk) {
      var Bk = "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
      if (!Bk) {
        if (Array.isArray(kk) || (Bk = Ak(kk)) || Fk && kk && "number" == typeof kk.length) {
          Bk && (kk = Bk);
          var Rk = 0,
            tk = function() {};
          return {
            s: tk,
            n: function() {
              return Rk >= kk.length ? {
                done: !0
              } : {
                done: !1,
                value: kk[Rk++]
              }
            },
            e: function(kk) {
              throw kk
            },
            f: tk
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var ak, Xk = !0,
        bk = !1;
      return {
        s: function() {
          Bk = Bk.call(kk)
        },
        n: function() {
          var kk = Bk.next();
          return Xk = kk.done, kk
        },
        e: function(kk) {
          bk = !0, ak = kk
        },
        f: function() {
          try {
            Xk || null == Bk.return || Bk.return()
          } finally {
            if (bk) throw ak
          }
        }
      }
    }

    function Xk(kk, Fk, Bk) {
      return (Fk = Vk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function bk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function wk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? bk(Object(Bk), !0).forEach((function(Fk) {
          Xk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : bk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function dk(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Bk = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != Bk) {
          var Rk, tk, ak, Xk, bk = [],
            wk = !0,
            dk = !1;
          try {
            if (ak = (Bk = Bk.call(kk)).next, 0 === Fk) {
              if (Object(Bk) !== Bk) return;
              wk = !1
            } else
              for (; !(wk = (Rk = ak.call(Bk)).done) && (bk.push(Rk.value), bk.length !== Fk); wk = !0);
          } catch (kk) {
            dk = !0, tk = kk
          } finally {
            try {
              if (!wk && null != Bk.return && (Xk = Bk.return(), Object(Xk) !== Xk)) return
            } finally {
              if (dk) throw tk
            }
          }
          return bk
        }
      }(kk, Fk) || Ak(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sk(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return Rk(kk)
      }(kk) || function(kk) {
        if ("undefined" != typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || Ak(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Vk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != typeof kk || !kk) return kk;
        var Bk = kk[Symbol.toPrimitive];
        if (void 0 !== Bk) {
          var Rk = Bk.call(kk, Fk || "default");
          if ("object" != typeof Rk) return Rk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == typeof Fk ? Fk : Fk + ""
    }

    function Jk(kk) {
      return Jk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Jk(kk)
    }

    function Ak(kk, Fk) {
      if (kk) {
        if ("string" == typeof kk) return Rk(kk, Fk);
        var Bk = {}.toString.call(kk).slice(8, -1);
        return "Object" === Bk && kk.constructor && (Bk = kk.constructor.name), "Map" === Bk || "Set" === Bk ? Array.from(kk) : "Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk) ? Rk(kk, Fk) : void 0
      }
    }
    Bk.r(Fk), Bk.d(Fk, {
      api: () => nB,
      config: () => Rt,
      counter: () => At,
      dom: () => Xt,
      findIconDefinition: () => wt,
      icon: () => st,
      layer: () => Vt,
      library: () => tt,
      noAuto: () => Bt,
      parse: () => bt,
      text: () => Jt,
      toHtml: () => dt
    });
    var ek = function() {},
      yk = {},
      fk = {},
      mk = null,
      Wk = {
        mark: ek,
        measure: ek
      };
    try {
      "undefined" !== typeof window && (yk = window), "undefined" !== typeof document && (fk = document), "undefined" !== typeof MutationObserver && (mk = MutationObserver), "undefined" !== typeof performance && (Wk = performance)
    } catch (Zk) {}
    var vk, ik, Yk = (yk.navigator || {}).userAgent,
      Lk = void 0 === Yk ? "" : Yk,
      Ok = yk,
      Ek = fk,
      Sk = mk,
      Nk = Wk,
      Hk = (Ok.document, !!Ek.documentElement && !!Ek.head && "function" === typeof Ek.addEventListener && "function" === typeof Ek.createElement),
      uk = ~Lk.indexOf("MSIE") || ~Lk.indexOf("Trident/"),
      Mk = {
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
      gk = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      Uk = "classic",
      ck = "duotone",
      Gk = "sharp",
      Tk = "sharp-duotone",
      rk = "chisel",
      Dk = "etch",
      zk = "graphite",
      Pk = "jelly",
      hk = "jelly-duo",
      qk = "jelly-fill",
      Ck = "notdog",
      Zk = "notdog-duo",
      pk = "slab",
      Kk = "slab-press",
      xk = "thumbprint",
      jk = "utility",
      lk = "utility-duo",
      nk = "utility-fill",
      Ik = "whiteboard",
      Qk = [Uk, ck, Gk, Tk, rk, Dk, zk, Pk, hk, qk, Ck, Zk, pk, Kk, xk, jk, lk, nk, Ik],
      kF = (Xk(Xk(Xk(Xk(Xk(Xk(Xk(Xk(Xk(Xk(vk = {}, Uk, "Classic"), ck, "Duotone"), Gk, "Sharp"), Tk, "Sharp Duotone"), rk, "Chisel"), Dk, "Etch"), zk, "Graphite"), Pk, "Jelly"), hk, "Jelly Duo"), qk, "Jelly Fill"), Xk(Xk(Xk(Xk(Xk(Xk(Xk(Xk(Xk(vk, Ck, "Notdog"), Zk, "Notdog Duo"), pk, "Slab"), Kk, "Slab Press"), xk, "Thumbprint"), jk, "Utility"), lk, "Utility Duo"), nk, "Utility Fill"), Ik, "Whiteboard"), new Map([
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
      FF = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      BF = {
        fak: "kit",
        "fa-kit": "kit"
      },
      RF = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      tF = (Xk(Xk({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      aF = {
        "kit-duotone": "fakd"
      },
      XF = "duotone-group",
      bF = "swap-opacity",
      wF = "primary",
      dF = "secondary",
      sF = (Xk(Xk(Xk(Xk(Xk(Xk(Xk(Xk(Xk(Xk(ik = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), Xk(Xk(Xk(Xk(Xk(Xk(Xk(Xk(Xk(ik, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), Xk(Xk({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      VF = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      JF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      AF = JF.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      eF = [].concat(sk(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", XF, bF, wF, dF]).concat(JF.map((function(kk) {
        return "".concat(kk, "x")
      }))).concat(AF.map((function(kk) {
        return "w-".concat(kk)
      }))),
      yF = "___FONT_AWESOME___",
      fF = "svg-inline--fa",
      mF = "data-fa-i2svg",
      WF = "data-fa-pseudo-element",
      vF = "data-prefix",
      iF = "data-icon",
      YF = "fontawesome-i2svg",
      oF = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      LF = ["::before", "::after", ":before", ":after"],
      OF = function() {
        try {
          return !0
        } catch (kk) {
          return !1
        }
      }();

    function EF(kk) {
      return new Proxy(kk, {
        get: function(kk, Fk) {
          return Fk in kk ? kk[Fk] : kk[Uk]
        }
      })
    }
    var SF = wk({}, Mk);
    SF[Uk] = wk(wk(wk(wk({}, {
      "fa-duotone": "duotone"
    }), Mk[Uk]), BF), RF);
    var NF = EF(SF),
      HF = wk({}, {
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
    HF[Uk] = wk(wk(wk(wk({}, {
      duotone: "fad"
    }), HF[Uk]), tF), aF);
    var uF = EF(HF),
      MF = wk({}, sF);
    MF[Uk] = wk(wk({}, MF[Uk]), {
      fak: "fa-kit"
    });
    var gF = EF(MF),
      UF = wk({}, {
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
    UF[Uk] = wk(wk({}, UF[Uk]), {
      "fa-kit": "fak"
    });
    EF(UF);
    var cF = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      GF = "fa-layers-text",
      TF = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      rF = (EF(wk({}, {
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
      DF = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      zF = [].concat(sk(["kit"]), sk(eF)),
      PF = Ok.FontAwesomeConfig || {};
    if (Ek && "function" === typeof Ek.querySelector) {
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
      ].forEach((function(kk) {
        var Fk = dk(kk, 2),
          Bk = Fk[0],
          Rk = Fk[1],
          tk = function(kk) {
            return "" === kk || "false" !== kk && ("true" === kk || kk)
          }(function(kk) {
            var Fk = Ek.querySelector("script[" + kk + "]");
            if (Fk) return Fk.getAttribute(kk)
          }(Bk));
        void 0 !== tk && null !== tk && (PF[Rk] = tk)
      }))
    }
    var hF = {
      styleDefault: "solid",
      familyDefault: Uk,
      cssPrefix: "fa",
      replacementClass: fF,
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
    PF.familyPrefix && (PF.cssPrefix = PF.familyPrefix);
    var qF = wk(wk({}, hF), PF);
    qF.autoReplaceSvg || (qF.observeMutations = !1);
    var CF = {};
    Object.keys(hF).forEach((function(kk) {
      Object.defineProperty(CF, kk, {
        enumerable: !0,
        set: function(Fk) {
          qF[kk] = Fk, ZF.forEach((function(kk) {
            return kk(CF)
          }))
        },
        get: function() {
          return qF[kk]
        }
      })
    })), Object.defineProperty(CF, "familyPrefix", {
      enumerable: !0,
      set: function(kk) {
        qF.cssPrefix = kk, ZF.forEach((function(kk) {
          return kk(CF)
        }))
      },
      get: function() {
        return qF.cssPrefix
      }
    }), Ok.FontAwesomeConfig = CF;
    var ZF = [];
    var pF = 16,
      KF = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function xF() {
      for (var kk = 12, Fk = ""; kk-- > 0;) Fk += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return Fk
    }

    function jF(kk) {
      for (var Fk = [], Bk = (kk || []).length >>> 0; Bk--;) Fk[Bk] = kk[Bk];
      return Fk
    }

    function lF(kk) {
      return kk.classList ? jF(kk.classList) : (kk.getAttribute("class") || "").split(" ").filter((function(kk) {
        return kk
      }))
    }

    function nF(kk) {
      return "".concat(kk).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function IF(kk) {
      return Object.keys(kk || {}).reduce((function(Fk, Bk) {
        return Fk + "".concat(Bk, ": ").concat(kk[Bk].trim(), ";")
      }), "")
    }

    function QF(kk) {
      return kk.size !== KF.size || kk.x !== KF.x || kk.y !== KF.y || kk.rotate !== KF.rotate || kk.flipX || kk.flipY
    }

    function kB() {
      var kk = "fa",
        Fk = fF,
        Bk = CF.cssPrefix,
        Rk = CF.replacementClass,
        tk = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (Bk !== kk || Rk !== Fk) {
        var ak = new RegExp("\\.".concat(kk, "\\-"), "g"),
          Xk = new RegExp("\\--".concat(kk, "\\-"), "g"),
          bk = new RegExp("\\.".concat(Fk), "g");
        tk = tk.replace(ak, ".".concat(Bk, "-")).replace(Xk, "--".concat(Bk, "-")).replace(bk, ".".concat(Rk))
      }
      return tk
    }
    var FB = !1;

    function BB() {
      CF.autoAddCss && !FB && (! function(kk) {
        if (kk && Hk) {
          var Fk = Ek.createElement("style");
          Fk.setAttribute("type", "text/css"), Fk.innerHTML = kk;
          for (var Bk = Ek.head.childNodes, Rk = null, tk = Bk.length - 1; tk > -1; tk--) {
            var ak = Bk[tk],
              Xk = (ak.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(Xk) > -1 && (Rk = ak)
          }
          Ek.head.insertBefore(Fk, Rk)
        }
      }(kB()), FB = !0)
    }
    var RB = {
        mixout: function() {
          return {
            dom: {
              css: kB,
              insertCss: BB
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              BB()
            },
            beforeI2svg: function() {
              BB()
            }
          }
        }
      },
      tB = Ok || {};
    tB[yF] || (tB[yF] = {}), tB[yF].styles || (tB[yF].styles = {}), tB[yF].hooks || (tB[yF].hooks = {}), tB[yF].shims || (tB[yF].shims = []);
    var aB = tB[yF],
      XB = [],
      bB = function() {
        Ek.removeEventListener("DOMContentLoaded", bB), wB = 1, XB.map((function(kk) {
          return kk()
        }))
      },
      wB = !1;

    function dB(kk) {
      var Fk = kk.tag,
        Bk = kk.attributes,
        Rk = void 0 === Bk ? {} : Bk,
        tk = kk.children,
        ak = void 0 === tk ? [] : tk;
      return "string" === typeof kk ? nF(kk) : "<".concat(Fk, " ").concat(function(kk) {
        return Object.keys(kk || {}).reduce((function(Fk, Bk) {
          return Fk + "".concat(Bk, '="').concat(nF(kk[Bk]), '" ')
        }), "").trim()
      }(Rk), ">").concat(ak.map(dB).join(""), "</").concat(Fk, ">")
    }

    function sB(kk, Fk, Bk) {
      if (kk && kk[Fk] && kk[Fk][Bk]) return {
        prefix: Fk,
        iconName: Bk,
        icon: kk[Fk][Bk]
      }
    }
    Hk && ((wB = (Ek.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ek.readyState)) || Ek.addEventListener("DOMContentLoaded", bB));
    var VB = function(kk, Fk, Bk, Rk) {
      var tk, ak, Xk, bk = Object.keys(kk),
        wk = bk.length,
        dk = void 0 !== Rk ? function(kk, Fk) {
          return function(Bk, Rk, tk, ak) {
            return kk.call(Fk, Bk, Rk, tk, ak)
          }
        }(Fk, Rk) : Fk;
      for (void 0 === Bk ? (tk = 1, Xk = kk[bk[0]]) : (tk = 0, Xk = Bk); tk < wk; tk++) Xk = dk(Xk, kk[ak = bk[tk]], ak, kk);
      return Xk
    };

    function JB(kk) {
      return 1 !== sk(kk).length ? null : kk.codePointAt(0).toString(16)
    }

    function AB(kk) {
      return Object.keys(kk).reduce((function(Fk, Bk) {
        var Rk = kk[Bk];
        return !!Rk.icon ? Fk[Rk.iconName] = Rk.icon : Fk[Bk] = Rk, Fk
      }), {})
    }

    function eB(kk, Fk) {
      var Bk = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        Rk = void 0 !== Bk && Bk,
        tk = AB(Fk);
      "function" !== typeof aB.hooks.addPack || Rk ? aB.styles[kk] = wk(wk({}, aB.styles[kk] || {}), tk) : aB.hooks.addPack(kk, AB(Fk)), "fas" === kk && eB("fa", Fk)
    }
    var yB = aB.styles,
      fB = aB.shims,
      mB = Object.keys(gF),
      WB = mB.reduce((function(kk, Fk) {
        return kk[Fk] = Object.keys(gF[Fk]), kk
      }), {}),
      vB = null,
      iB = {},
      YB = {},
      oB = {},
      LB = {},
      OB = {};

    function EB(kk, Fk) {
      var Bk, Rk = Fk.split("-"),
        tk = Rk[0],
        ak = Rk.slice(1).join("-");
      return tk !== kk || "" === ak || (Bk = ak, ~zF.indexOf(Bk)) ? null : ak
    }
    var SB, NB = function() {
      var kk = function(kk) {
        return VB(yB, (function(Fk, Bk, Rk) {
          return Fk[Rk] = VB(Bk, kk, {}), Fk
        }), {})
      };
      iB = kk((function(kk, Fk, Bk) {
        (Fk[3] && (kk[Fk[3]] = Bk), Fk[2]) && Fk[2].filter((function(kk) {
          return "number" === typeof kk
        })).forEach((function(Fk) {
          kk[Fk.toString(16)] = Bk
        }));
        return kk
      })), YB = kk((function(kk, Fk, Bk) {
        (kk[Bk] = Bk, Fk[2]) && Fk[2].filter((function(kk) {
          return "string" === typeof kk
        })).forEach((function(Fk) {
          kk[Fk] = Bk
        }));
        return kk
      })), OB = kk((function(kk, Fk, Bk) {
        var Rk = Fk[2];
        return kk[Bk] = Bk, Rk.forEach((function(Fk) {
          kk[Fk] = Bk
        })), kk
      }));
      var Fk = "far" in yB || CF.autoFetchSvg,
        Bk = VB(fB, (function(kk, Bk) {
          var Rk = Bk[0],
            tk = Bk[1],
            ak = Bk[2];
          return "far" !== tk || Fk || (tk = "fas"), "string" === typeof Rk && (kk.names[Rk] = {
            prefix: tk,
            iconName: ak
          }), "number" === typeof Rk && (kk.unicodes[Rk.toString(16)] = {
            prefix: tk,
            iconName: ak
          }), kk
        }), {
          names: {},
          unicodes: {}
        });
      oB = Bk.names, LB = Bk.unicodes, vB = UB(CF.styleDefault, {
        family: CF.familyDefault
      })
    };

    function HB(kk, Fk) {
      return (iB[kk] || {})[Fk]
    }

    function uB(kk, Fk) {
      return (OB[kk] || {})[Fk]
    }

    function MB(kk) {
      return oB[kk] || {
        prefix: null,
        iconName: null
      }
    }

    function gB() {
      return vB
    }
    SB = function(kk) {
      vB = UB(kk.styleDefault, {
        family: CF.familyDefault
      })
    }, ZF.push(SB), NB();

    function UB(kk) {
      var Fk = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        Bk = void 0 === Fk ? Uk : Fk,
        Rk = NF[Bk][kk];
      if (Bk === ck && !kk) return "fad";
      var tk = uF[Bk][kk] || uF[Bk][Rk],
        ak = kk in aB.styles ? kk : null;
      return tk || ak || null
    }

    function cB(kk) {
      return kk.sort().filter((function(kk, Fk, Bk) {
        return Bk.indexOf(kk) === Fk
      }))
    }
    var GB = VF.concat(FF);

    function TB(kk) {
      var Fk = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        Bk = void 0 !== Fk && Fk,
        Rk = null,
        tk = cB(kk.filter((function(kk) {
          return GB.includes(kk)
        }))),
        ak = cB(kk.filter((function(kk) {
          return !GB.includes(kk)
        }))),
        Xk = dk(tk.filter((function(kk) {
          return Rk = kk, !gk.includes(kk)
        })), 1)[0],
        bk = void 0 === Xk ? null : Xk,
        sk = function(kk) {
          var Fk = Uk,
            Bk = mB.reduce((function(kk, Fk) {
              return kk[Fk] = "".concat(CF.cssPrefix, "-").concat(Fk), kk
            }), {});
          return Qk.forEach((function(Rk) {
            (kk.includes(Bk[Rk]) || kk.some((function(kk) {
              return WB[Rk].includes(kk)
            }))) && (Fk = Rk)
          })), Fk
        }(tk),
        Vk = wk(wk({}, function(kk) {
          var Fk = [],
            Bk = null;
          return kk.forEach((function(kk) {
            var Rk = EB(CF.cssPrefix, kk);
            Rk ? Bk = Rk : kk && Fk.push(kk)
          })), {
            iconName: Bk,
            rest: Fk
          }
        }(ak)), {}, {
          prefix: UB(bk, {
            family: sk
          })
        });
      return wk(wk(wk({}, Vk), function(kk) {
        var Fk = kk.values,
          Bk = kk.family,
          Rk = kk.canonical,
          tk = kk.givenPrefix,
          ak = void 0 === tk ? "" : tk,
          Xk = kk.styles,
          bk = void 0 === Xk ? {} : Xk,
          wk = kk.config,
          dk = void 0 === wk ? {} : wk,
          sk = Bk === ck,
          Vk = Fk.includes("fa-duotone") || Fk.includes("fad"),
          Jk = "duotone" === dk.familyDefault,
          Ak = "fad" === Rk.prefix || "fa-duotone" === Rk.prefix;
        !sk && (Vk || Jk || Ak) && (Rk.prefix = "fad");
        (Fk.includes("fa-brands") || Fk.includes("fab")) && (Rk.prefix = "fab");
        if (!Rk.prefix && rB.includes(Bk)) {
          if (Object.keys(bk).find((function(kk) {
              return DB.includes(kk)
            })) || dk.autoFetchSvg) {
            var ek = kF.get(Bk).defaultShortPrefixId;
            Rk.prefix = ek, Rk.iconName = uB(Rk.prefix, Rk.iconName) || Rk.iconName
          }
        }
        "fa" !== Rk.prefix && "fa" !== ak || (Rk.prefix = gB() || "fas");
        return Rk
      }({
        values: kk,
        family: sk,
        styles: yB,
        config: CF,
        canonical: Vk,
        givenPrefix: Rk
      })), function(kk, Fk, Bk) {
        var Rk = Bk.prefix,
          tk = Bk.iconName;
        if (kk || !Rk || !tk) return {
          prefix: Rk,
          iconName: tk
        };
        var ak = "fa" === Fk ? MB(tk) : {},
          Xk = uB(Rk, tk);
        tk = ak.iconName || Xk || tk, "far" !== (Rk = ak.prefix || Rk) || yB.far || !yB.fas || CF.autoFetchSvg || (Rk = "fas");
        return {
          prefix: Rk,
          iconName: tk
        }
      }(Bk, Rk, Vk))
    }
    var rB = Qk.filter((function(kk) {
        return kk !== Uk || kk !== ck
      })),
      DB = Object.keys(sF).filter((function(kk) {
        return kk !== Uk
      })).map((function(kk) {
        return Object.keys(sF[kk])
      })).flat();
    var zB = function() {
        return function(kk, Fk, Bk) {
          return Fk && tk(kk.prototype, Fk), Bk && tk(kk, Bk), Object.defineProperty(kk, "prototype", {
            writable: !1
          }), kk
        }((function kk() {
          ! function(kk, Fk) {
            if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
          }(this, kk), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var kk = this, Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
            var tk = Bk.reduce(this._pullDefinitions, {});
            Object.keys(tk).forEach((function(Fk) {
              kk.definitions[Fk] = wk(wk({}, kk.definitions[Fk] || {}), tk[Fk]), eB(Fk, tk[Fk]);
              var Bk = gF[Uk][Fk];
              Bk && eB(Bk, tk[Fk]), NB()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(kk, Fk) {
            var Bk = Fk.prefix && Fk.iconName && Fk.icon ? {
              0: Fk
            } : Fk;
            return Object.keys(Bk).map((function(Fk) {
              var Rk = Bk[Fk],
                tk = Rk.prefix,
                ak = Rk.iconName,
                Xk = Rk.icon,
                bk = Xk[2];
              kk[tk] || (kk[tk] = {}), bk.length > 0 && bk.forEach((function(Fk) {
                "string" === typeof Fk && (kk[tk][Fk] = Xk)
              })), kk[tk][ak] = Xk
            })), kk
          }
        }])
      }(),
      PB = [],
      hB = {},
      qB = {},
      CB = Object.keys(qB);

    function ZB(kk, Fk) {
      for (var Bk = arguments.length, Rk = new Array(Bk > 2 ? Bk - 2 : 0), tk = 2; tk < Bk; tk++) Rk[tk - 2] = arguments[tk];
      return (hB[kk] || []).forEach((function(kk) {
        Fk = kk.apply(null, [Fk].concat(Rk))
      })), Fk
    }

    function pB(kk) {
      for (var Fk = arguments.length, Bk = new Array(Fk > 1 ? Fk - 1 : 0), Rk = 1; Rk < Fk; Rk++) Bk[Rk - 1] = arguments[Rk];
      (hB[kk] || []).forEach((function(kk) {
        kk.apply(null, Bk)
      }))
    }

    function KB() {
      var kk = arguments[0],
        Fk = Array.prototype.slice.call(arguments, 1);
      return qB[kk] ? qB[kk].apply(null, Fk) : void 0
    }

    function xB(kk) {
      "fa" === kk.prefix && (kk.prefix = "fas");
      var Fk = kk.iconName,
        Bk = kk.prefix || gB();
      if (Fk) return Fk = uB(Bk, Fk) || Fk, sB(jB.definitions, Bk, Fk) || sB(aB.styles, Bk, Fk)
    }
    var jB = new zB,
      lB = {
        i2svg: function() {
          var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Hk ? (pB("beforeI2svg", kk), KB("pseudoElements2svg", kk), KB("i2svg", kk)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var kk, Fk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Bk = Fk.autoReplaceSvgRoot;
          !1 === CF.autoReplaceSvg && (CF.autoReplaceSvg = !0), CF.observeMutations = !0, kk = function() {
            IB({
              autoReplaceSvgRoot: Bk
            }), pB("watch", Fk)
          }, Hk && (wB ? setTimeout(kk, 0) : XB.push(kk))
        }
      },
      nB = {
        noAuto: function() {
          CF.autoReplaceSvg = !1, CF.observeMutations = !1, pB("noAuto")
        },
        config: CF,
        dom: lB,
        parse: {
          icon: function(kk) {
            if (null === kk) return null;
            if ("object" === Jk(kk) && kk.prefix && kk.iconName) return {
              prefix: kk.prefix,
              iconName: uB(kk.prefix, kk.iconName) || kk.iconName
            };
            if (Array.isArray(kk) && 2 === kk.length) {
              var Fk = 0 === kk[1].indexOf("fa-") ? kk[1].slice(3) : kk[1],
                Bk = UB(kk[0]);
              return {
                prefix: Bk,
                iconName: uB(Bk, Fk) || Fk
              }
            }
            if ("string" === typeof kk && (kk.indexOf("".concat(CF.cssPrefix, "-")) > -1 || kk.match(cF))) {
              var Rk = TB(kk.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: Rk.prefix || gB(),
                iconName: uB(Rk.prefix, Rk.iconName) || Rk.iconName
              }
            }
            if ("string" === typeof kk) {
              var tk = gB();
              return {
                prefix: tk,
                iconName: uB(tk, kk) || kk
              }
            }
          }
        },
        library: jB,
        findIconDefinition: xB,
        toHtml: dB
      },
      IB = function() {
        var kk = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          Fk = void 0 === kk ? Ek : kk;
        (Object.keys(aB.styles).length > 0 || CF.autoFetchSvg) && Hk && CF.autoReplaceSvg && nB.dom.i2svg({
          node: Fk
        })
      };

    function QB(kk, Fk) {
      return Object.defineProperty(kk, "abstract", {
        get: Fk
      }), Object.defineProperty(kk, "html", {
        get: function() {
          return kk.abstract.map((function(kk) {
            return dB(kk)
          }))
        }
      }), Object.defineProperty(kk, "node", {
        get: function() {
          if (Hk) {
            var Fk = Ek.createElement("div");
            return Fk.innerHTML = kk.html, Fk.children
          }
        }
      }), kk
    }

    function kR(kk) {
      var Fk = kk.icons,
        Bk = Fk.main,
        Rk = Fk.mask,
        tk = kk.prefix,
        ak = kk.iconName,
        Xk = kk.transform,
        bk = kk.symbol,
        dk = kk.maskId,
        sk = kk.extra,
        Vk = kk.watchable,
        Jk = void 0 !== Vk && Vk,
        Ak = Rk.found ? Rk : Bk,
        ek = Ak.width,
        yk = Ak.height,
        fk = [CF.replacementClass, ak ? "".concat(CF.cssPrefix, "-").concat(ak) : ""].filter((function(kk) {
          return -1 === sk.classes.indexOf(kk)
        })).filter((function(kk) {
          return "" !== kk || !!kk
        })).concat(sk.classes).join(" "),
        mk = {
          children: [],
          attributes: wk(wk({}, sk.attributes), {}, {
            "data-prefix": tk,
            "data-icon": ak,
            class: fk,
            role: sk.attributes.role || "img",
            viewBox: "0 0 ".concat(ek, " ").concat(yk)
          })
        };
      (function(kk) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(Fk) {
          return Fk in kk
        }))
      })(sk.attributes) || sk.attributes["aria-hidden"] || (mk.attributes["aria-hidden"] = "true"), Jk && (mk.attributes[mF] = "");
      var Wk = wk(wk({}, mk), {}, {
          prefix: tk,
          iconName: ak,
          main: Bk,
          mask: Rk,
          maskId: dk,
          transform: Xk,
          symbol: bk,
          styles: wk({}, sk.styles)
        }),
        vk = Rk.found && Bk.found ? KB("generateAbstractMask", Wk) || {
          children: [],
          attributes: {}
        } : KB("generateAbstractIcon", Wk) || {
          children: [],
          attributes: {}
        },
        ik = vk.children,
        Yk = vk.attributes;
      return Wk.children = ik, Wk.attributes = Yk, bk ? function(kk) {
        var Fk = kk.prefix,
          Bk = kk.iconName,
          Rk = kk.children,
          tk = kk.attributes,
          ak = kk.symbol,
          Xk = !0 === ak ? "".concat(Fk, "-").concat(CF.cssPrefix, "-").concat(Bk) : ak;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: wk(wk({}, tk), {}, {
              id: Xk
            }),
            children: Rk
          }]
        }]
      }(Wk) : function(kk) {
        var Fk = kk.children,
          Bk = kk.main,
          Rk = kk.mask,
          tk = kk.attributes,
          ak = kk.styles,
          Xk = kk.transform;
        if (QF(Xk) && Bk.found && !Rk.found) {
          var bk = {
            x: Bk.width / Bk.height / 2,
            y: .5
          };
          tk.style = IF(wk(wk({}, ak), {}, {
            "transform-origin": "".concat(bk.x + Xk.x / 16, "em ").concat(bk.y + Xk.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: tk,
          children: Fk
        }]
      }(Wk)
    }

    function FR(kk) {
      var Fk = kk.content,
        Bk = kk.width,
        Rk = kk.height,
        tk = kk.transform,
        ak = kk.extra,
        Xk = kk.watchable,
        bk = void 0 !== Xk && Xk,
        dk = wk(wk({}, ak.attributes), {}, {
          class: ak.classes.join(" ")
        });
      bk && (dk[mF] = "");
      var sk = wk({}, ak.styles);
      QF(tk) && (sk.transform = function(kk) {
        var Fk = kk.transform,
          Bk = kk.width,
          Rk = void 0 === Bk ? 16 : Bk,
          tk = kk.height,
          ak = void 0 === tk ? 16 : tk,
          Xk = kk.startCentered,
          bk = void 0 !== Xk && Xk,
          wk = "";
        return wk += bk && uk ? "translate(".concat(Fk.x / pF - Rk / 2, "em, ").concat(Fk.y / pF - ak / 2, "em) ") : bk ? "translate(calc(-50% + ".concat(Fk.x / pF, "em), calc(-50% + ").concat(Fk.y / pF, "em)) ") : "translate(".concat(Fk.x / pF, "em, ").concat(Fk.y / pF, "em) "), wk += "scale(".concat(Fk.size / pF * (Fk.flipX ? -1 : 1), ", ").concat(Fk.size / pF * (Fk.flipY ? -1 : 1), ") "), wk + "rotate(".concat(Fk.rotate, "deg) ")
      }({
        transform: tk,
        startCentered: !0,
        width: Bk,
        height: Rk
      }), sk["-webkit-transform"] = sk.transform);
      var Vk = IF(sk);
      Vk.length > 0 && (dk.style = Vk);
      var Jk = [];
      return Jk.push({
        tag: "span",
        attributes: dk,
        children: [Fk]
      }), Jk
    }
    var BR = aB.styles;

    function RR(kk) {
      var Fk = kk[0],
        Bk = kk[1],
        Rk = dk(kk.slice(4), 1)[0];
      return {
        found: !0,
        width: Fk,
        height: Bk,
        icon: Array.isArray(Rk) ? {
          tag: "g",
          attributes: {
            class: "".concat(CF.cssPrefix, "-").concat(DF.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(CF.cssPrefix, "-").concat(DF.SECONDARY),
              fill: "currentColor",
              d: Rk[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(CF.cssPrefix, "-").concat(DF.PRIMARY),
              fill: "currentColor",
              d: Rk[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: Rk
          }
        }
      }
    }
    var tR = {
      found: !1,
      width: 512,
      height: 512
    };

    function aR(kk, Fk) {
      var Bk = Fk;
      return "fa" === Fk && null !== CF.styleDefault && (Fk = gB()), new Promise((function(Rk, tk) {
        if ("fa" === Bk) {
          var ak = MB(kk) || {};
          kk = ak.iconName || kk, Fk = ak.prefix || Fk
        }
        if (kk && Fk && BR[Fk] && BR[Fk][kk]) return Rk(RR(BR[Fk][kk]));
        ! function(kk, Fk) {
          OF || CF.showMissingIcons || !kk || console.error('Icon with name "'.concat(kk, '" and prefix "').concat(Fk, '" is missing.'))
        }(kk, Fk), Rk(wk(wk({}, tR), {}, {
          icon: CF.showMissingIcons && kk && KB("missingIconAbstract") || {}
        }))
      }))
    }
    var XR = function() {},
      bR = CF.measurePerformance && Nk && Nk.mark && Nk.measure ? Nk : {
        mark: XR,
        measure: XR
      },
      wR = 'FA "7.2.0"',
      dR = function(kk) {
        bR.mark("".concat(wR, " ").concat(kk, " ends")), bR.measure("".concat(wR, " ").concat(kk), "".concat(wR, " ").concat(kk, " begins"), "".concat(wR, " ").concat(kk, " ends"))
      },
      sR = function(kk) {
        return bR.mark("".concat(wR, " ").concat(kk, " begins")),
          function() {
            return dR(kk)
          }
      },
      VR = function() {};

    function JR(kk) {
      return "string" === typeof(kk.getAttribute ? kk.getAttribute(mF) : null)
    }

    function AR(kk) {
      return Ek.createElementNS("http://www.w3.org/2000/svg", kk)
    }

    function eR(kk) {
      return Ek.createElement(kk)
    }

    function yR(kk) {
      var Fk = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        Bk = void 0 === Fk ? "svg" === kk.tag ? AR : eR : Fk;
      if ("string" === typeof kk) return Ek.createTextNode(kk);
      var Rk = Bk(kk.tag);
      return Object.keys(kk.attributes || []).forEach((function(Fk) {
        Rk.setAttribute(Fk, kk.attributes[Fk])
      })), (kk.children || []).forEach((function(kk) {
        Rk.appendChild(yR(kk, {
          ceFn: Bk
        }))
      })), Rk
    }
    var fR = {
      replace: function(kk) {
        var Fk = kk[0];
        if (Fk.parentNode)
          if (kk[1].forEach((function(kk) {
              Fk.parentNode.insertBefore(yR(kk), Fk)
            })), null === Fk.getAttribute(mF) && CF.keepOriginalSource) {
            var Bk = Ek.createComment(function(kk) {
              var Fk = " ".concat(kk.outerHTML, " ");
              return "".concat(Fk, "Font Awesome fontawesome.com ")
            }(Fk));
            Fk.parentNode.replaceChild(Bk, Fk)
          } else Fk.remove()
      },
      nest: function(kk) {
        var Fk = kk[0],
          Bk = kk[1];
        if (~lF(Fk).indexOf(CF.replacementClass)) return fR.replace(kk);
        var Rk = new RegExp("".concat(CF.cssPrefix, "-.*"));
        if (delete Bk[0].attributes.id, Bk[0].attributes.class) {
          var tk = Bk[0].attributes.class.split(" ").reduce((function(kk, Fk) {
            return Fk === CF.replacementClass || Fk.match(Rk) ? kk.toSvg.push(Fk) : kk.toNode.push(Fk), kk
          }), {
            toNode: [],
            toSvg: []
          });
          Bk[0].attributes.class = tk.toSvg.join(" "), 0 === tk.toNode.length ? Fk.removeAttribute("class") : Fk.setAttribute("class", tk.toNode.join(" "))
        }
        var ak = Bk.map((function(kk) {
          return dB(kk)
        })).join("\n");
        Fk.setAttribute(mF, ""), Fk.innerHTML = ak
      }
    };

    function mR(kk) {
      kk()
    }

    function WR(kk, Fk) {
      var Bk = "function" === typeof Fk ? Fk : VR;
      if (0 === kk.length) Bk();
      else {
        var Rk = mR;
        "async" === CF.mutateApproach && (Rk = Ok.requestAnimationFrame || mR), Rk((function() {
          var Fk = !0 === CF.autoReplaceSvg ? fR.replace : fR[CF.autoReplaceSvg] || fR.replace,
            Rk = sR("mutate");
          kk.map(Fk), Rk(), Bk()
        }))
      }
    }
    var vR = !1;

    function iR() {
      vR = !0
    }

    function YR() {
      vR = !1
    }
    var oR = null;

    function LR(kk) {
      if (Sk && CF.observeMutations) {
        var Fk = kk.treeCallback,
          Bk = void 0 === Fk ? VR : Fk,
          Rk = kk.nodeCallback,
          tk = void 0 === Rk ? VR : Rk,
          ak = kk.pseudoElementsCallback,
          Xk = void 0 === ak ? VR : ak,
          bk = kk.observeMutationsRoot,
          wk = void 0 === bk ? Ek : bk;
        oR = new Sk((function(kk) {
          if (!vR) {
            var Fk = gB();
            jF(kk).forEach((function(kk) {
              if ("childList" === kk.type && kk.addedNodes.length > 0 && !JR(kk.addedNodes[0]) && (CF.searchPseudoElements && Xk(kk.target), Bk(kk.target)), "attributes" === kk.type && kk.target.parentNode && CF.searchPseudoElements && Xk([kk.target], !0), "attributes" === kk.type && JR(kk.target) && ~rF.indexOf(kk.attributeName))
                if ("class" === kk.attributeName && function(kk) {
                    var Fk = kk.getAttribute ? kk.getAttribute(vF) : null,
                      Bk = kk.getAttribute ? kk.getAttribute(iF) : null;
                    return Fk && Bk
                  }(kk.target)) {
                  var Rk = TB(lF(kk.target)),
                    ak = Rk.prefix,
                    bk = Rk.iconName;
                  kk.target.setAttribute(vF, ak || Fk), bk && kk.target.setAttribute(iF, bk)
                } else(wk = kk.target) && wk.classList && wk.classList.contains && wk.classList.contains(CF.replacementClass) && tk(kk.target);
              var wk
            }))
          }
        })), Hk && oR.observe(wk, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function OR(kk) {
      var Fk, Bk, Rk = kk.getAttribute("data-prefix"),
        tk = kk.getAttribute("data-icon"),
        ak = void 0 !== kk.innerText ? kk.innerText.trim() : "",
        Xk = TB(lF(kk));
      return Xk.prefix || (Xk.prefix = gB()), Rk && tk && (Xk.prefix = Rk, Xk.iconName = tk), Xk.iconName && Xk.prefix || (Xk.prefix && ak.length > 0 && (Xk.iconName = (Fk = Xk.prefix, Bk = kk.innerText, (YB[Fk] || {})[Bk] || HB(Xk.prefix, JB(kk.innerText)))), !Xk.iconName && CF.autoFetchSvg && kk.firstChild && kk.firstChild.nodeType === Node.TEXT_NODE && (Xk.iconName = kk.firstChild.data)), Xk
    }

    function ER(kk) {
      var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        Bk = OR(kk),
        Rk = Bk.iconName,
        tk = Bk.prefix,
        ak = Bk.rest,
        Xk = function(kk) {
          return jF(kk.attributes).reduce((function(kk, Fk) {
            return "class" !== kk.name && "style" !== kk.name && (kk[Fk.name] = Fk.value), kk
          }), {})
        }(kk),
        bk = ZB("parseNodeAttributes", {}, kk),
        dk = Fk.styleParser ? function(kk) {
          var Fk = kk.getAttribute("style"),
            Bk = [];
          return Fk && (Bk = Fk.split(";").reduce((function(kk, Fk) {
            var Bk = Fk.split(":"),
              Rk = Bk[0],
              tk = Bk.slice(1);
            return Rk && tk.length > 0 && (kk[Rk] = tk.join(":").trim()), kk
          }), {})), Bk
        }(kk) : [];
      return wk({
        iconName: Rk,
        prefix: tk,
        transform: KF,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: ak,
          styles: dk,
          attributes: Xk
        }
      }, bk)
    }
    var SR = aB.styles;

    function NR(kk) {
      var Fk = "nest" === CF.autoReplaceSvg ? ER(kk, {
        styleParser: !1
      }) : ER(kk);
      return ~Fk.extra.classes.indexOf(GF) ? KB("generateLayersText", kk, Fk) : KB("generateSvgReplacementMutation", kk, Fk)
    }

    function HR(kk) {
      var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!Hk) return Promise.resolve();
      var Bk = Ek.documentElement.classList,
        Rk = function(kk) {
          return Bk.add("".concat(YF, "-").concat(kk))
        },
        tk = function(kk) {
          return Bk.remove("".concat(YF, "-").concat(kk))
        },
        ak = CF.autoFetchSvg ? [].concat(sk(FF), sk(VF)) : gk.concat(Object.keys(SR));
      ak.includes("fa") || ak.push("fa");
      var Xk = [".".concat(GF, ":not([").concat(mF, "])")].concat(ak.map((function(kk) {
        return ".".concat(kk, ":not([").concat(mF, "])")
      }))).join(", ");
      if (0 === Xk.length) return Promise.resolve();
      var bk = [];
      try {
        bk = jF(kk.querySelectorAll(Xk))
      } catch (Vk) {}
      if (!(bk.length > 0)) return Promise.resolve();
      Rk("pending"), tk("complete");
      var wk = sR("onTree"),
        dk = bk.reduce((function(kk, Fk) {
          try {
            var Bk = NR(Fk);
            Bk && kk.push(Bk)
          } catch (Vk) {
            OF || "MissingIcon" === Vk.name && console.error(Vk)
          }
          return kk
        }), []);
      return new Promise((function(kk, Bk) {
        Promise.all(dk).then((function(Bk) {
          WR(Bk, (function() {
            Rk("active"), Rk("complete"), tk("pending"), "function" === typeof Fk && Fk(), wk(), kk()
          }))
        })).catch((function(kk) {
          wk(), Bk(kk)
        }))
      }))
    }

    function uR(kk) {
      var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      NR(kk).then((function(kk) {
        kk && WR([kk], Fk)
      }))
    }
    var MR = function(kk) {
        var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Bk = Fk.transform,
          Rk = void 0 === Bk ? KF : Bk,
          tk = Fk.symbol,
          ak = void 0 !== tk && tk,
          Xk = Fk.mask,
          bk = void 0 === Xk ? null : Xk,
          dk = Fk.maskId,
          sk = void 0 === dk ? null : dk,
          Vk = Fk.classes,
          Jk = void 0 === Vk ? [] : Vk,
          Ak = Fk.attributes,
          ek = void 0 === Ak ? {} : Ak,
          yk = Fk.styles,
          fk = void 0 === yk ? {} : yk;
        if (kk) {
          var mk = kk.prefix,
            Wk = kk.iconName,
            vk = kk.icon;
          return QB(wk({
            type: "icon"
          }, kk), (function() {
            return pB("beforeDOMElementCreation", {
              iconDefinition: kk,
              params: Fk
            }), kR({
              icons: {
                main: RR(vk),
                mask: bk ? RR(bk.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: mk,
              iconName: Wk,
              transform: wk(wk({}, KF), Rk),
              symbol: ak,
              maskId: sk,
              extra: {
                attributes: ek,
                styles: fk,
                classes: Jk
              }
            })
          }))
        }
      },
      gR = {
        mixout: function() {
          return {
            icon: (kk = MR, function(Fk) {
              var Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Rk = (Fk || {}).icon ? Fk : xB(Fk || {}),
                tk = Bk.mask;
              return tk && (tk = (tk || {}).icon ? tk : xB(tk || {})), kk(Rk, wk(wk({}, Bk), {}, {
                mask: tk
              }))
            })
          };
          var kk
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(kk) {
              return kk.treeCallback = HR, kk.nodeCallback = uR, kk
            }
          }
        },
        provides: function(kk) {
          kk.i2svg = function(kk) {
            var Fk = kk.node,
              Bk = void 0 === Fk ? Ek : Fk,
              Rk = kk.callback;
            return HR(Bk, void 0 === Rk ? function() {} : Rk)
          }, kk.generateSvgReplacementMutation = function(kk, Fk) {
            var Bk = Fk.iconName,
              Rk = Fk.prefix,
              tk = Fk.transform,
              ak = Fk.symbol,
              Xk = Fk.mask,
              bk = Fk.maskId,
              wk = Fk.extra;
            return new Promise((function(Fk, sk) {
              Promise.all([aR(Bk, Rk), Xk.iconName ? aR(Xk.iconName, Xk.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(Xk) {
                var sk = dk(Xk, 2),
                  Vk = sk[0],
                  Jk = sk[1];
                Fk([kk, kR({
                  icons: {
                    main: Vk,
                    mask: Jk
                  },
                  prefix: Rk,
                  iconName: Bk,
                  transform: tk,
                  symbol: ak,
                  maskId: bk,
                  extra: wk,
                  watchable: !0
                })])
              })).catch(sk)
            }))
          }, kk.generateAbstractIcon = function(kk) {
            var Fk, Bk = kk.children,
              Rk = kk.attributes,
              tk = kk.main,
              ak = kk.transform,
              Xk = IF(kk.styles);
            return Xk.length > 0 && (Rk.style = Xk), QF(ak) && (Fk = KB("generateAbstractTransformGrouping", {
              main: tk,
              transform: ak,
              containerWidth: tk.width,
              iconWidth: tk.width
            })), Bk.push(Fk || tk.icon), {
              children: Bk,
              attributes: Rk
            }
          }
        }
      },
      UR = {
        mixout: function() {
          return {
            layer: function(kk) {
              var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Bk = Fk.classes,
                Rk = void 0 === Bk ? [] : Bk;
              return QB({
                type: "layer"
              }, (function() {
                pB("beforeDOMElementCreation", {
                  assembler: kk,
                  params: Fk
                });
                var Bk = [];
                return kk((function(kk) {
                  Array.isArray(kk) ? kk.map((function(kk) {
                    Bk = Bk.concat(kk.abstract)
                  })) : Bk = Bk.concat(kk.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(CF.cssPrefix, "-layers")].concat(sk(Rk)).join(" ")
                  },
                  children: Bk
                }]
              }))
            }
          }
        }
      },
      cR = {
        mixout: function() {
          return {
            counter: function(kk) {
              var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Bk = Fk.title,
                Rk = void 0 === Bk ? null : Bk,
                tk = Fk.classes,
                ak = void 0 === tk ? [] : tk,
                Xk = Fk.attributes,
                bk = void 0 === Xk ? {} : Xk,
                dk = Fk.styles,
                Vk = void 0 === dk ? {} : dk;
              return QB({
                type: "counter",
                content: kk
              }, (function() {
                return pB("beforeDOMElementCreation", {
                    content: kk,
                    params: Fk
                  }),
                  function(kk) {
                    var Fk = kk.content,
                      Bk = kk.extra,
                      Rk = wk(wk({}, Bk.attributes), {}, {
                        class: Bk.classes.join(" ")
                      }),
                      tk = IF(Bk.styles);
                    tk.length > 0 && (Rk.style = tk);
                    var ak = [];
                    return ak.push({
                      tag: "span",
                      attributes: Rk,
                      children: [Fk]
                    }), ak
                  }({
                    content: kk.toString(),
                    title: Rk,
                    extra: {
                      attributes: bk,
                      styles: Vk,
                      classes: ["".concat(CF.cssPrefix, "-layers-counter")].concat(sk(ak))
                    }
                  })
              }))
            }
          }
        }
      },
      GR = {
        mixout: function() {
          return {
            text: function(kk) {
              var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Bk = Fk.transform,
                Rk = void 0 === Bk ? KF : Bk,
                tk = Fk.classes,
                ak = void 0 === tk ? [] : tk,
                Xk = Fk.attributes,
                bk = void 0 === Xk ? {} : Xk,
                dk = Fk.styles,
                Vk = void 0 === dk ? {} : dk;
              return QB({
                type: "text",
                content: kk
              }, (function() {
                return pB("beforeDOMElementCreation", {
                  content: kk,
                  params: Fk
                }), FR({
                  content: kk,
                  transform: wk(wk({}, KF), Rk),
                  extra: {
                    attributes: bk,
                    styles: Vk,
                    classes: ["".concat(CF.cssPrefix, "-layers-text")].concat(sk(ak))
                  }
                })
              }))
            }
          }
        },
        provides: function(kk) {
          kk.generateLayersText = function(kk, Fk) {
            var Bk = Fk.transform,
              Rk = Fk.extra,
              tk = null,
              ak = null;
            if (uk) {
              var Xk = parseInt(getComputedStyle(kk).fontSize, 10),
                bk = kk.getBoundingClientRect();
              tk = bk.width / Xk, ak = bk.height / Xk
            }
            return Promise.resolve([kk, FR({
              content: kk.innerHTML,
              width: tk,
              height: ak,
              transform: Bk,
              extra: Rk,
              watchable: !0
            })])
          }
        }
      },
      TR = new RegExp('"', "ug"),
      rR = [1105920, 1112319],
      DR = wk(wk(wk(wk({}, {
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
      zR = Object.keys(DR).reduce((function(kk, Fk) {
        return kk[Fk.toLowerCase()] = DR[Fk], kk
      }), {}),
      PR = Object.keys(zR).reduce((function(kk, Fk) {
        var Bk = zR[Fk];
        return kk[Fk] = Bk[900] || sk(Object.entries(Bk))[0][1], kk
      }), {});

    function hR(kk, Fk) {
      var Bk = "".concat("data-fa-pseudo-element-pending").concat(Fk.replace(":", "-"));
      return new Promise((function(Rk, tk) {
        if (null !== kk.getAttribute(Bk)) return Rk();
        var ak = jF(kk.children).filter((function(kk) {
            return kk.getAttribute(WF) === Fk
          }))[0],
          Xk = Ok.getComputedStyle(kk, Fk),
          bk = Xk.getPropertyValue("font-family"),
          dk = bk.match(TF),
          Vk = Xk.getPropertyValue("font-weight"),
          Jk = Xk.getPropertyValue("content");
        if (ak && !dk) return kk.removeChild(ak), Rk();
        if (dk && "none" !== Jk && "" !== Jk) {
          var Ak = Xk.getPropertyValue("content"),
            ek = function(kk, Fk) {
              var Bk = kk.replace(/^['"]|['"]$/g, "").toLowerCase(),
                Rk = parseInt(Fk),
                tk = isNaN(Rk) ? "normal" : Rk;
              return (zR[Bk] || {})[tk] || PR[Bk]
            }(bk, Vk),
            yk = function(kk) {
              return JB(sk(kk.replace(TR, ""))[0] || "")
            }(Ak),
            fk = dk[0].startsWith("FontAwesome"),
            mk = function(kk) {
              var Fk = kk.getPropertyValue("font-feature-settings").includes("ss01"),
                Bk = kk.getPropertyValue("content").replace(TR, ""),
                Rk = Bk.codePointAt(0),
                tk = Rk >= rR[0] && Rk <= rR[1],
                ak = 2 === Bk.length && Bk[0] === Bk[1];
              return tk || ak || Fk
            }(Xk),
            Wk = HB(ek, yk),
            vk = Wk;
          if (fk) {
            var ik = function(kk) {
              var Fk = LB[kk],
                Bk = HB("fas", kk);
              return Fk || (Bk ? {
                prefix: "fas",
                iconName: Bk
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(yk);
            ik.iconName && ik.prefix && (Wk = ik.iconName, ek = ik.prefix)
          }
          if (!Wk || mk || ak && ak.getAttribute(vF) === ek && ak.getAttribute(iF) === vk) Rk();
          else {
            kk.setAttribute(Bk, vk), ak && kk.removeChild(ak);
            var Yk = {
                iconName: null,
                prefix: null,
                transform: KF,
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
              Lk = Yk.extra;
            Lk.attributes[WF] = Fk, aR(Wk, ek).then((function(tk) {
              var ak = kR(wk(wk({}, Yk), {}, {
                  icons: {
                    main: tk,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: ek,
                  iconName: vk,
                  extra: Lk,
                  watchable: !0
                })),
                Xk = Ek.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === Fk ? kk.insertBefore(Xk, kk.firstChild) : kk.appendChild(Xk), Xk.outerHTML = ak.map((function(kk) {
                return dB(kk)
              })).join("\n"), kk.removeAttribute(Bk), Rk()
            })).catch(tk)
          }
        } else Rk()
      }))
    }

    function qR(kk) {
      return Promise.all([hR(kk, "::before"), hR(kk, "::after")])
    }

    function CR(kk) {
      return kk.parentNode !== document.head && !~oF.indexOf(kk.tagName.toUpperCase()) && !kk.getAttribute(WF) && (!kk.parentNode || "svg" !== kk.parentNode.tagName)
    }
    var ZR = function(kk) {
        return !!kk && LF.some((function(Fk) {
          return kk.includes(Fk)
        }))
      },
      pR = function(kk) {
        if (!kk) return [];
        var Fk = new Set,
          Bk = kk.split(/,(?![^()]*\))/).map((function(kk) {
            return kk.trim()
          }));
        Bk = Bk.flatMap((function(kk) {
          return kk.includes("(") ? kk : kk.split(",").map((function(kk) {
            return kk.trim()
          }))
        }));
        var Rk, tk = ak(Bk);
        try {
          for (tk.s(); !(Rk = tk.n()).done;) {
            var Xk = Rk.value;
            if (ZR(Xk)) {
              var bk = LF.reduce((function(kk, Fk) {
                return kk.replace(Fk, "")
              }), Xk);
              "" !== bk && "*" !== bk && Fk.add(bk)
            }
          }
        } catch (wk) {
          tk.e(wk)
        } finally {
          tk.f()
        }
        return Fk
      };

    function KR(kk) {
      if (Hk) {
        var Fk;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) Fk = kk;
        else if (CF.searchPseudoElementsFullScan) Fk = kk.querySelectorAll("*");
        else {
          var Bk, Rk = new Set,
            tk = ak(document.styleSheets);
          try {
            for (tk.s(); !(Bk = tk.n()).done;) {
              var Xk = Bk.value;
              try {
                var bk, wk = ak(Xk.cssRules);
                try {
                  for (wk.s(); !(bk = wk.n()).done;) {
                    var dk, sk = bk.value,
                      Vk = ak(pR(sk.selectorText));
                    try {
                      for (Vk.s(); !(dk = Vk.n()).done;) {
                        var Jk = dk.value;
                        Rk.add(Jk)
                      }
                    } catch (ek) {
                      Vk.e(ek)
                    } finally {
                      Vk.f()
                    }
                  }
                } catch (ek) {
                  wk.e(ek)
                } finally {
                  wk.f()
                }
              } catch (yk) {
                CF.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(Xk.href, " (").concat(yk.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (ek) {
            tk.e(ek)
          } finally {
            tk.f()
          }
          if (!Rk.size) return;
          var Ak = Array.from(Rk).join(", ");
          try {
            Fk = kk.querySelectorAll(Ak)
          } catch (fk) {}
        }
        return new Promise((function(kk, Bk) {
          var Rk = jF(Fk).filter(CR).map(qR),
            tk = sR("searchPseudoElements");
          iR(), Promise.all(Rk).then((function() {
            tk(), YR(), kk()
          })).catch((function() {
            tk(), YR(), Bk()
          }))
        }))
      }
    }
    var xR = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(kk) {
              return kk.pseudoElementsCallback = KR, kk
            }
          }
        },
        provides: function(kk) {
          kk.pseudoElements2svg = function(kk) {
            var Fk = kk.node,
              Bk = void 0 === Fk ? Ek : Fk;
            CF.searchPseudoElements && KR(Bk)
          }
        }
      },
      jR = !1,
      lR = function(kk) {
        return kk.toLowerCase().split(" ").reduce((function(kk, Fk) {
          var Bk = Fk.toLowerCase().split("-"),
            Rk = Bk[0],
            tk = Bk.slice(1).join("-");
          if (Rk && "h" === tk) return kk.flipX = !0, kk;
          if (Rk && "v" === tk) return kk.flipY = !0, kk;
          if (tk = parseFloat(tk), isNaN(tk)) return kk;
          switch (Rk) {
            case "grow":
              kk.size = kk.size + tk;
              break;
            case "shrink":
              kk.size = kk.size - tk;
              break;
            case "left":
              kk.x = kk.x - tk;
              break;
            case "right":
              kk.x = kk.x + tk;
              break;
            case "up":
              kk.y = kk.y - tk;
              break;
            case "down":
              kk.y = kk.y + tk;
              break;
            case "rotate":
              kk.rotate = kk.rotate + tk
          }
          return kk
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      nR = {
        mixout: function() {
          return {
            parse: {
              transform: function(kk) {
                return lR(kk)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(kk, Fk) {
              var Bk = Fk.getAttribute("data-fa-transform");
              return Bk && (kk.transform = lR(Bk)), kk
            }
          }
        },
        provides: function(kk) {
          kk.generateAbstractTransformGrouping = function(kk) {
            var Fk = kk.main,
              Bk = kk.transform,
              Rk = kk.containerWidth,
              tk = kk.iconWidth,
              ak = {
                transform: "translate(".concat(Rk / 2, " 256)")
              },
              Xk = "translate(".concat(32 * Bk.x, ", ").concat(32 * Bk.y, ") "),
              bk = "scale(".concat(Bk.size / 16 * (Bk.flipX ? -1 : 1), ", ").concat(Bk.size / 16 * (Bk.flipY ? -1 : 1), ") "),
              dk = "rotate(".concat(Bk.rotate, " 0 0)"),
              sk = {
                outer: ak,
                inner: {
                  transform: "".concat(Xk, " ").concat(bk, " ").concat(dk)
                },
                path: {
                  transform: "translate(".concat(tk / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: wk({}, sk.outer),
              children: [{
                tag: "g",
                attributes: wk({}, sk.inner),
                children: [{
                  tag: Fk.icon.tag,
                  children: Fk.icon.children,
                  attributes: wk(wk({}, Fk.icon.attributes), sk.path)
                }]
              }]
            }
          }
        }
      },
      IR = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function QR(kk) {
      var Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return kk.attributes && (kk.attributes.fill || Fk) && (kk.attributes.fill = "black"), kk
    }
    var kt = {
        hooks: function() {
          return {
            parseNodeAttributes: function(kk, Fk) {
              var Bk = Fk.getAttribute("data-fa-mask"),
                Rk = Bk ? TB(Bk.split(" ").map((function(kk) {
                  return kk.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return Rk.prefix || (Rk.prefix = gB()), kk.mask = Rk, kk.maskId = Fk.getAttribute("data-fa-mask-id"), kk
            }
          }
        },
        provides: function(kk) {
          kk.generateAbstractMask = function(kk) {
            var Fk, Bk = kk.children,
              Rk = kk.attributes,
              tk = kk.main,
              ak = kk.mask,
              Xk = kk.maskId,
              bk = kk.transform,
              dk = tk.width,
              sk = tk.icon,
              Vk = ak.width,
              Jk = ak.icon,
              Ak = function(kk) {
                var Fk = kk.transform,
                  Bk = kk.containerWidth,
                  Rk = kk.iconWidth,
                  tk = {
                    transform: "translate(".concat(Bk / 2, " 256)")
                  },
                  ak = "translate(".concat(32 * Fk.x, ", ").concat(32 * Fk.y, ") "),
                  Xk = "scale(".concat(Fk.size / 16 * (Fk.flipX ? -1 : 1), ", ").concat(Fk.size / 16 * (Fk.flipY ? -1 : 1), ") "),
                  bk = "rotate(".concat(Fk.rotate, " 0 0)");
                return {
                  outer: tk,
                  inner: {
                    transform: "".concat(ak, " ").concat(Xk, " ").concat(bk)
                  },
                  path: {
                    transform: "translate(".concat(Rk / 2 * -1, " -256)")
                  }
                }
              }({
                transform: bk,
                containerWidth: Vk,
                iconWidth: dk
              }),
              ek = {
                tag: "rect",
                attributes: wk(wk({}, IR), {}, {
                  fill: "white"
                })
              },
              yk = sk.children ? {
                children: sk.children.map(QR)
              } : {},
              fk = {
                tag: "g",
                attributes: wk({}, Ak.inner),
                children: [QR(wk({
                  tag: sk.tag,
                  attributes: wk(wk({}, sk.attributes), Ak.path)
                }, yk))]
              },
              mk = {
                tag: "g",
                attributes: wk({}, Ak.outer),
                children: [fk]
              },
              Wk = "mask-".concat(Xk || xF()),
              vk = "clip-".concat(Xk || xF()),
              ik = {
                tag: "mask",
                attributes: wk(wk({}, IR), {}, {
                  id: Wk,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [ek, mk]
              },
              Yk = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: vk
                  },
                  children: (Fk = Jk, "g" === Fk.tag ? Fk.children : [Fk])
                }, ik]
              };
            return Bk.push(Yk, {
              tag: "rect",
              attributes: wk({
                fill: "currentColor",
                "clip-path": "url(#".concat(vk, ")"),
                mask: "url(#".concat(Wk, ")")
              }, IR)
            }), {
              children: Bk,
              attributes: Rk
            }
          }
        }
      },
      Ft = {
        provides: function(kk) {
          var Fk = !1;
          Ok.matchMedia && (Fk = Ok.matchMedia("(prefers-reduced-motion: reduce)").matches), kk.missingIconAbstract = function() {
            var kk = [],
              Bk = {
                fill: "currentColor"
              },
              Rk = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            kk.push({
              tag: "path",
              attributes: wk(wk({}, Bk), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var tk = wk(wk({}, Rk), {}, {
                attributeName: "opacity"
              }),
              ak = {
                tag: "circle",
                attributes: wk(wk({}, Bk), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return Fk || ak.children.push({
              tag: "animate",
              attributes: wk(wk({}, Rk), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: wk(wk({}, tk), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), kk.push(ak), kk.push({
              tag: "path",
              attributes: wk(wk({}, Bk), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: Fk ? [] : [{
                tag: "animate",
                attributes: wk(wk({}, tk), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), Fk || kk.push({
              tag: "path",
              attributes: wk(wk({}, Bk), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: wk(wk({}, tk), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: kk
            }
          }
        }
      };
    ! function(kk, Fk) {
      var Bk = Fk.mixoutsTo;
      PB = kk, hB = {}, Object.keys(qB).forEach((function(kk) {
        -1 === CB.indexOf(kk) && delete qB[kk]
      })), PB.forEach((function(kk) {
        var Fk = kk.mixout ? kk.mixout() : {};
        if (Object.keys(Fk).forEach((function(kk) {
            "function" === typeof Fk[kk] && (Bk[kk] = Fk[kk]), "object" === Jk(Fk[kk]) && Object.keys(Fk[kk]).forEach((function(Rk) {
              Bk[kk] || (Bk[kk] = {}), Bk[kk][Rk] = Fk[kk][Rk]
            }))
          })), kk.hooks) {
          var Rk = kk.hooks();
          Object.keys(Rk).forEach((function(kk) {
            hB[kk] || (hB[kk] = []), hB[kk].push(Rk[kk])
          }))
        }
        kk.provides && kk.provides(qB)
      }))
    }([RB, gR, UR, cR, GR, xR, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              iR(), jR = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            LR(ZB("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            oR && oR.disconnect()
          },
          watch: function(kk) {
            var Fk = kk.observeMutationsRoot;
            jR ? YR() : LR(ZB("mutationObserverCallbacks", {
              observeMutationsRoot: Fk
            }))
          }
        }
      }
    }, nR, kt, Ft, {
      hooks: function() {
        return {
          parseNodeAttributes: function(kk, Fk) {
            var Bk = Fk.getAttribute("data-fa-symbol"),
              Rk = null !== Bk && ("" === Bk || Bk);
            return kk.symbol = Rk, kk
          }
        }
      }
    }], {
      mixoutsTo: nB
    });
    var Bt = nB.noAuto,
      Rt = nB.config,
      tt = nB.library,
      Xt = nB.dom,
      bt = nB.parse,
      wt = nB.findIconDefinition,
      dt = nB.toHtml,
      st = nB.icon,
      Vt = nB.layer,
      Jt = nB.text,
      At = nB.counter
  },
  6385: kk => {
    kk.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);