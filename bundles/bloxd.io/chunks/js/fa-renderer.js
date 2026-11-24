/*! For license information please see 31kiid.fa-renderer.ad728dea.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6661: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      FontAwesomeIcon: () => zk
    });
    var Xk = Ik(6656),
      Tk = Ik(4946),
      ik = Ik.n(Tk),
      yk = Ik(58);

    function lk(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Ik = 0, Xk = Array(Fk); Ik < Fk; Ik++) Xk[Ik] = kk[Ik];
      return Xk
    }

    function ak(kk, Fk, Ik) {
      return (Fk = function(kk) {
        var Fk = function(kk, Fk) {
          if ("object" != typeof kk || !kk) return kk;
          var Ik = kk[Symbol.toPrimitive];
          if (void 0 !== Ik) {
            var Xk = Ik.call(kk, Fk || "default");
            if ("object" != typeof Xk) return Xk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Fk ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == typeof Fk ? Fk : Fk + ""
      }(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Ik,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Ik, kk
    }

    function qk(kk, Fk) {
      var Ik = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Xk = Object.getOwnPropertySymbols(kk);
        Fk && (Xk = Xk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Ik.push.apply(Ik, Xk)
      }
      return Ik
    }

    function Lk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Ik = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? qk(Object(Ik), !0).forEach((function(Fk) {
          ak(kk, Fk, Ik[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Ik)) : qk(Object(Ik)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Ik, Fk))
        }))
      }
      return kk
    }

    function tk(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Ik = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != Ik) {
          var Xk, Tk, ik, yk, lk = [],
            ak = !0,
            qk = !1;
          try {
            if (ik = (Ik = Ik.call(kk)).next, 0 === Fk) {
              if (Object(Ik) !== Ik) return;
              ak = !1
            } else
              for (; !(ak = (Xk = ik.call(Ik)).done) && (lk.push(Xk.value), lk.length !== Fk); ak = !0);
          } catch (kk) {
            qk = !0, Tk = kk
          } finally {
            try {
              if (!ak && null != Ik.return && (yk = Ik.return(), Object(yk) !== yk)) return
            } finally {
              if (qk) throw Tk
            }
          }
          return lk
        }
      }(kk, Fk) || ek(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Zk(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return lk(kk)
      }(kk) || function(kk) {
        if ("undefined" != typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || ek(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function jk(kk) {
      return jk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, jk(kk)
    }

    function ek(kk, Fk) {
      if (kk) {
        if ("string" == typeof kk) return lk(kk, Fk);
        var Ik = {}.toString.call(kk).slice(8, -1);
        return "Object" === Ik && kk.constructor && (Ik = kk.constructor.name), "Map" === Ik || "Set" === Ik ? Array.from(kk) : "Arguments" === Ik || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ik) ? lk(kk, Fk) : void 0
      }
    }
    var wk;
    try {
      var Hk = Ik(6665);
      wk = Hk.version
    } catch (vk) {
      wk = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function Jk(kk) {
      var Fk = kk.beat,
        Ik = kk.fade,
        Xk = kk.beatFade,
        Tk = kk.bounce,
        ik = kk.shake,
        yk = kk.flash,
        lk = kk.spin,
        qk = kk.spinPulse,
        Lk = kk.spinReverse,
        Zk = kk.pulse,
        jk = kk.fixedWidth,
        ek = kk.inverse,
        Hk = kk.border,
        Jk = kk.listItem,
        xk = kk.flip,
        Pk = kk.size,
        Kk = kk.rotation,
        Qk = kk.pull,
        sk = kk.swapOpacity,
        Vk = kk.rotateBy,
        zk = kk.widthAuto,
        Sk = function(kk, Fk) {
          for (var Ik = tk(kk.split("-"), 2), Xk = Ik[0], Tk = Ik[1], ik = tk(Fk.split("-"), 2), yk = ik[0], lk = ik[1], ak = Xk.split("."), qk = yk.split("."), Lk = 0; Lk < Math.max(ak.length, qk.length); Lk++) {
            var Zk = ak[Lk] || "0",
              jk = qk[Lk] || "0",
              ek = parseInt(Zk, 10),
              wk = parseInt(jk, 10);
            if (ek !== wk) return ek > wk
          }
          for (var Hk = 0; Hk < Math.max(ak.length, qk.length); Hk++) {
            var Jk = ak[Hk] || "0",
              xk = qk[Hk] || "0";
            if (Jk !== xk && Jk.length !== xk.length) return Jk.length < xk.length
          }
          return !(Tk && !lk)
        }(wk, "7.0.0"),
        vk = ak(ak(ak(ak(ak(ak({
          "fa-beat": Fk,
          "fa-fade": Ik,
          "fa-beat-fade": Xk,
          "fa-bounce": Tk,
          "fa-shake": ik,
          "fa-flash": yk,
          "fa-spin": lk,
          "fa-spin-reverse": Lk,
          "fa-spin-pulse": qk,
          "fa-pulse": Zk,
          "fa-fw": jk,
          "fa-inverse": ek,
          "fa-border": Hk,
          "fa-li": Jk,
          "fa-flip": !0 === xk,
          "fa-flip-horizontal": "horizontal" === xk || "both" === xk,
          "fa-flip-vertical": "vertical" === xk || "both" === xk
        }, "fa-".concat(Pk), "undefined" !== typeof Pk && null !== Pk), "fa-rotate-".concat(Kk), "undefined" !== typeof Kk && null !== Kk && 0 !== Kk), "fa-pull-".concat(Qk), "undefined" !== typeof Qk && null !== Qk), "fa-swap-opacity", sk), "fa-rotate-by", Sk && Vk), "fa-width-auto", Sk && zk);
      return Object.keys(vk).map((function(kk) {
        return vk[kk] ? kk : null
      })).filter((function(kk) {
        return kk
      }))
    }

    function xk(kk) {
      return Fk = kk, (Fk -= 0) === Fk ? kk : (kk = kk.replace(/[\-_\s]+(.)?/g, (function(kk, Fk) {
        return Fk ? Fk.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + kk.substr(1);
      var Fk
    }
    var Pk = ["style"];
    var Kk = !1;
    try {
      Kk = !0
    } catch (vk) {}

    function Qk(kk) {
      return kk && "object" === jk(kk) && kk.prefix && kk.iconName && kk.icon ? kk : Xk.parse.icon ? Xk.parse.icon(kk) : null === kk ? null : kk && "object" === jk(kk) && kk.prefix && kk.iconName ? kk : Array.isArray(kk) && 2 === kk.length ? {
        prefix: kk[0],
        iconName: kk[1]
      } : "string" === typeof kk ? {
        prefix: "fas",
        iconName: kk
      } : void 0
    }

    function sk(kk, Fk) {
      return Array.isArray(Fk) && Fk.length > 0 || !Array.isArray(Fk) && Fk ? ak({}, kk, Fk) : {}
    }
    var Vk = {
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
      zk = yk.forwardRef((function(kk, Fk) {
        var Ik = Lk(Lk({}, Vk), kk),
          Tk = Ik.icon,
          ik = Ik.mask,
          yk = Ik.symbol,
          lk = Ik.className,
          ak = Ik.title,
          qk = Ik.titleId,
          tk = Ik.maskId,
          jk = Qk(Tk),
          ek = sk("classes", [].concat(Zk(Jk(Ik)), Zk((lk || "").split(" ")))),
          wk = sk("transform", "string" === typeof Ik.transform ? Xk.parse.transform(Ik.transform) : Ik.transform),
          Hk = sk("mask", Qk(ik)),
          xk = (0, Xk.icon)(jk, Lk(Lk(Lk(Lk({}, ek), wk), Hk), {}, {
            symbol: yk,
            title: ak,
            titleId: qk,
            maskId: tk
          }));
        if (!xk) return function() {
          var kk;
          !Kk && console && "function" === typeof console.error && (kk = console).error.apply(kk, arguments)
        }("Could not find icon", jk), null;
        var Pk = xk.abstract,
          zk = {
            ref: Fk
          };
        return Object.keys(Ik).forEach((function(kk) {
          Vk.hasOwnProperty(kk) || (zk[kk] = Ik[kk])
        })), Sk(Pk[0], zk)
      }));
    zk.displayName = "FontAwesomeIcon", zk.propTypes = {
      beat: ik().bool,
      border: ik().bool,
      beatFade: ik().bool,
      bounce: ik().bool,
      className: ik().string,
      fade: ik().bool,
      flash: ik().bool,
      mask: ik().oneOfType([ik().object, ik().array, ik().string]),
      maskId: ik().string,
      fixedWidth: ik().bool,
      inverse: ik().bool,
      flip: ik().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: ik().oneOfType([ik().object, ik().array, ik().string]),
      listItem: ik().bool,
      pull: ik().oneOf(["right", "left"]),
      pulse: ik().bool,
      rotation: ik().oneOf([0, 90, 180, 270]),
      rotateBy: ik().bool,
      shake: ik().bool,
      size: ik().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: ik().bool,
      spinPulse: ik().bool,
      spinReverse: ik().bool,
      symbol: ik().oneOfType([ik().bool, ik().string]),
      title: ik().string,
      titleId: ik().string,
      transform: ik().oneOfType([ik().string, ik().object]),
      swapOpacity: ik().bool,
      widthAuto: ik().bool
    };
    var Sk = function kk(Fk, Ik) {
      var Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof Ik) return Ik;
      var Tk = (Ik.children || []).map((function(Ik) {
          return kk(Fk, Ik)
        })),
        ik = Object.keys(Ik.attributes || {}).reduce((function(kk, Fk) {
          var Xk = Ik.attributes[Fk];
          switch (Fk) {
            case "class":
              kk.attrs.className = Xk, delete Ik.attributes.class;
              break;
            case "style":
              kk.attrs.style = Xk.split(";").map((function(kk) {
                return kk.trim()
              })).filter((function(kk) {
                return kk
              })).reduce((function(kk, Fk) {
                var Ik, Xk = Fk.indexOf(":"),
                  Tk = xk(Fk.slice(0, Xk)),
                  ik = Fk.slice(Xk + 1).trim();
                return Tk.startsWith("webkit") ? kk[(Ik = Tk, Ik.charAt(0).toUpperCase() + Ik.slice(1))] = ik : kk[Tk] = ik, kk
              }), {});
              break;
            default:
              0 === Fk.indexOf("aria-") || 0 === Fk.indexOf("data-") ? kk.attrs[Fk.toLowerCase()] = Xk : kk.attrs[xk(Fk)] = Xk
          }
          return kk
        }), {
          attrs: {}
        }),
        yk = Xk.style,
        lk = void 0 === yk ? {} : yk,
        ak = function(kk, Fk) {
          if (null == kk) return {};
          var Ik, Xk, Tk = function(kk, Fk) {
            if (null == kk) return {};
            var Ik = {};
            for (var Xk in kk)
              if ({}.hasOwnProperty.call(kk, Xk)) {
                if (-1 !== Fk.indexOf(Xk)) continue;
                Ik[Xk] = kk[Xk]
              } return Ik
          }(kk, Fk);
          if (Object.getOwnPropertySymbols) {
            var ik = Object.getOwnPropertySymbols(kk);
            for (Xk = 0; Xk < ik.length; Xk++) Ik = ik[Xk], -1 === Fk.indexOf(Ik) && {}.propertyIsEnumerable.call(kk, Ik) && (Tk[Ik] = kk[Ik])
          }
          return Tk
        }(Xk, Pk);
      return ik.attrs.style = Lk(Lk({}, ik.attrs.style), lk), Fk.apply(void 0, [Ik.tag, Lk(Lk({}, ik.attrs), ak)].concat(Zk(Tk)))
    }.bind(null, yk.createElement)
  },
  4953: (kk, Fk, Ik) => {
    var Xk = Ik(4960);

    function Tk() {}

    function ik() {}
    ik.resetWarningCache = Tk, kk.exports = function() {
      function kk(kk, Fk, Ik, Tk, ik, yk) {
        if (yk !== Xk) {
          var lk = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw lk.name = "Invariant Violation", lk
        }
      }

      function Fk() {
        return kk
      }
      kk.isRequired = kk;
      var Ik = {
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
        checkPropTypes: ik,
        resetWarningCache: Tk
      };
      return Ik.PropTypes = Ik, Ik
    }
  },
  4946: (kk, Fk, Ik) => {
    kk.exports = Ik(4953)()
  },
  4960: kk => {
    kk.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6656: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Ik = 0, Xk = Array(Fk); Ik < Fk; Ik++) Xk[Ik] = kk[Ik];
      return Xk
    }

    function Tk(kk, Fk) {
      for (var Ik = 0; Ik < Fk.length; Ik++) {
        var Xk = Fk[Ik];
        Xk.enumerable = Xk.enumerable || !1, Xk.configurable = !0, "value" in Xk && (Xk.writable = !0), Object.defineProperty(kk, tk(Xk.key), Xk)
      }
    }

    function ik(kk, Fk) {
      var Ik = "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
      if (!Ik) {
        if (Array.isArray(kk) || (Ik = jk(kk)) || Fk && kk && "number" == typeof kk.length) {
          Ik && (kk = Ik);
          var Xk = 0,
            Tk = function() {};
          return {
            s: Tk,
            n: function() {
              return Xk >= kk.length ? {
                done: !0
              } : {
                done: !1,
                value: kk[Xk++]
              }
            },
            e: function(kk) {
              throw kk
            },
            f: Tk
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var ik, yk = !0,
        lk = !1;
      return {
        s: function() {
          Ik = Ik.call(kk)
        },
        n: function() {
          var kk = Ik.next();
          return yk = kk.done, kk
        },
        e: function(kk) {
          lk = !0, ik = kk
        },
        f: function() {
          try {
            yk || null == Ik.return || Ik.return()
          } finally {
            if (lk) throw ik
          }
        }
      }
    }

    function yk(kk, Fk, Ik) {
      return (Fk = tk(Fk)) in kk ? Object.defineProperty(kk, Fk, {
        value: Ik,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Ik, kk
    }

    function lk(kk, Fk) {
      var Ik = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Xk = Object.getOwnPropertySymbols(kk);
        Fk && (Xk = Xk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Ik.push.apply(Ik, Xk)
      }
      return Ik
    }

    function ak(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Ik = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? lk(Object(Ik), !0).forEach((function(Fk) {
          yk(kk, Fk, Ik[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Ik)) : lk(Object(Ik)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Ik, Fk))
        }))
      }
      return kk
    }

    function qk(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Ik = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != Ik) {
          var Xk, Tk, ik, yk, lk = [],
            ak = !0,
            qk = !1;
          try {
            if (ik = (Ik = Ik.call(kk)).next, 0 === Fk) {
              if (Object(Ik) !== Ik) return;
              ak = !1
            } else
              for (; !(ak = (Xk = ik.call(Ik)).done) && (lk.push(Xk.value), lk.length !== Fk); ak = !0);
          } catch (kk) {
            qk = !0, Tk = kk
          } finally {
            try {
              if (!ak && null != Ik.return && (yk = Ik.return(), Object(yk) !== yk)) return
            } finally {
              if (qk) throw Tk
            }
          }
          return lk
        }
      }(kk, Fk) || jk(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Lk(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return Xk(kk)
      }(kk) || function(kk) {
        if ("undefined" != typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || jk(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tk(kk) {
      var Fk = function(kk, Fk) {
        if ("object" != typeof kk || !kk) return kk;
        var Ik = kk[Symbol.toPrimitive];
        if (void 0 !== Ik) {
          var Xk = Ik.call(kk, Fk || "default");
          if ("object" != typeof Xk) return Xk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Fk ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == typeof Fk ? Fk : Fk + ""
    }

    function Zk(kk) {
      return Zk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, Zk(kk)
    }

    function jk(kk, Fk) {
      if (kk) {
        if ("string" == typeof kk) return Xk(kk, Fk);
        var Ik = {}.toString.call(kk).slice(8, -1);
        return "Object" === Ik && kk.constructor && (Ik = kk.constructor.name), "Map" === Ik || "Set" === Ik ? Array.from(kk) : "Arguments" === Ik || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ik) ? Xk(kk, Fk) : void 0
      }
    }
    Ik.r(Fk), Ik.d(Fk, {
      api: () => rI,
      config: () => XT,
      counter: () => ZT,
      dom: () => iT,
      findIconDefinition: () => lT,
      icon: () => qT,
      layer: () => LT,
      library: () => TT,
      noAuto: () => IT,
      parse: () => yT,
      text: () => tT,
      toHtml: () => aT
    });
    var ek = function() {},
      wk = {},
      Hk = {},
      Jk = null,
      xk = {
        mark: ek,
        measure: ek
      };
    try {
      "undefined" !== typeof window && (wk = window), "undefined" !== typeof document && (Hk = document), "undefined" !== typeof MutationObserver && (Jk = MutationObserver), "undefined" !== typeof performance && (xk = performance)
    } catch (dk) {}
    var Pk, Kk, Qk = (wk.navigator || {}).userAgent,
      sk = void 0 === Qk ? "" : Qk,
      Vk = wk,
      zk = Hk,
      Sk = Jk,
      vk = xk,
      Ek = (Vk.document, !!zk.documentElement && !!zk.head && "function" === typeof zk.addEventListener && "function" === typeof zk.createElement),
      Ok = ~sk.indexOf("MSIE") || ~sk.indexOf("Trident/"),
      nk = {
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
      Gk = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      pk = "classic",
      uk = "duotone",
      bk = "sharp",
      Rk = "sharp-duotone",
      Uk = "chisel",
      Ck = "etch",
      Nk = "graphite",
      ck = "jelly",
      Wk = "jelly-duo",
      fk = "jelly-fill",
      Bk = "notdog",
      dk = "notdog-duo",
      Yk = "slab",
      Ak = "slab-press",
      gk = "thumbprint",
      mk = "utility",
      hk = "utility-duo",
      rk = "utility-fill",
      Dk = "whiteboard",
      Mk = [pk, uk, bk, Rk, Uk, Ck, Nk, ck, Wk, fk, Bk, dk, Yk, Ak, gk, mk, hk, rk, Dk],
      kF = (yk(yk(yk(yk(yk(yk(yk(yk(yk(yk(Pk = {}, pk, "Classic"), uk, "Duotone"), bk, "Sharp"), Rk, "Sharp Duotone"), Uk, "Chisel"), Ck, "Etch"), Nk, "Graphite"), ck, "Jelly"), Wk, "Jelly Duo"), fk, "Jelly Fill"), yk(yk(yk(yk(yk(yk(yk(yk(yk(Pk, Bk, "Notdog"), dk, "Notdog Duo"), Yk, "Slab"), Ak, "Slab Press"), gk, "Thumbprint"), mk, "Utility"), hk, "Utility Duo"), rk, "Utility Fill"), Dk, "Whiteboard"), new Map([
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
      IF = {
        fak: "kit",
        "fa-kit": "kit"
      },
      XF = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      TF = (yk(yk({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      iF = {
        "kit-duotone": "fakd"
      },
      yF = "duotone-group",
      lF = "swap-opacity",
      aF = "primary",
      qF = "secondary",
      LF = (yk(yk(yk(yk(yk(yk(yk(yk(yk(yk(Kk = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), yk(yk(yk(yk(yk(yk(yk(yk(yk(Kk, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), yk(yk({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      tF = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      ZF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      jF = ZF.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      eF = [].concat(Lk(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", yF, lF, aF, qF]).concat(ZF.map((function(kk) {
        return "".concat(kk, "x")
      }))).concat(jF.map((function(kk) {
        return "w-".concat(kk)
      }))),
      wF = "___FONT_AWESOME___",
      HF = "svg-inline--fa",
      JF = "data-fa-i2svg",
      xF = "data-fa-pseudo-element",
      PF = "data-prefix",
      KF = "data-icon",
      QF = "fontawesome-i2svg",
      sF = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      VF = ["::before", "::after", ":before", ":after"],
      zF = function() {
        try {
          return !0
        } catch (kk) {
          return !1
        }
      }();

    function SF(kk) {
      return new Proxy(kk, {
        get: function(kk, Fk) {
          return Fk in kk ? kk[Fk] : kk[pk]
        }
      })
    }
    var oF = ak({}, nk);
    oF[pk] = ak(ak(ak(ak({}, {
      "fa-duotone": "duotone"
    }), nk[pk]), IF), XF);
    var vF = SF(oF),
      EF = ak({}, {
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
    EF[pk] = ak(ak(ak(ak({}, {
      duotone: "fad"
    }), EF[pk]), TF), iF);
    var OF = SF(EF),
      nF = ak({}, LF);
    nF[pk] = ak(ak({}, nF[pk]), {
      fak: "fa-kit"
    });
    var GF = SF(nF),
      pF = ak({}, {
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
    pF[pk] = ak(ak({}, pF[pk]), {
      "fa-kit": "fak"
    });
    SF(pF);
    var uF = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      bF = "fa-layers-text",
      RF = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      UF = (SF(ak({}, {
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
      CF = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      NF = [].concat(Lk(["kit"]), Lk(eF)),
      cF = Vk.FontAwesomeConfig || {};
    if (zk && "function" === typeof zk.querySelector) {
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
        var Fk = qk(kk, 2),
          Ik = Fk[0],
          Xk = Fk[1],
          Tk = function(kk) {
            return "" === kk || "false" !== kk && ("true" === kk || kk)
          }(function(kk) {
            var Fk = zk.querySelector("script[" + kk + "]");
            if (Fk) return Fk.getAttribute(kk)
          }(Ik));
        void 0 !== Tk && null !== Tk && (cF[Xk] = Tk)
      }))
    }
    var WF = {
      styleDefault: "solid",
      familyDefault: pk,
      cssPrefix: "fa",
      replacementClass: HF,
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
    cF.familyPrefix && (cF.cssPrefix = cF.familyPrefix);
    var fF = ak(ak({}, WF), cF);
    fF.autoReplaceSvg || (fF.observeMutations = !1);
    var BF = {};
    Object.keys(WF).forEach((function(kk) {
      Object.defineProperty(BF, kk, {
        enumerable: !0,
        set: function(Fk) {
          fF[kk] = Fk, dF.forEach((function(kk) {
            return kk(BF)
          }))
        },
        get: function() {
          return fF[kk]
        }
      })
    })), Object.defineProperty(BF, "familyPrefix", {
      enumerable: !0,
      set: function(kk) {
        fF.cssPrefix = kk, dF.forEach((function(kk) {
          return kk(BF)
        }))
      },
      get: function() {
        return fF.cssPrefix
      }
    }), Vk.FontAwesomeConfig = BF;
    var dF = [];
    var YF = 16,
      AF = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function gF() {
      for (var kk = 12, Fk = ""; kk-- > 0;) Fk += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return Fk
    }

    function mF(kk) {
      for (var Fk = [], Ik = (kk || []).length >>> 0; Ik--;) Fk[Ik] = kk[Ik];
      return Fk
    }

    function hF(kk) {
      return kk.classList ? mF(kk.classList) : (kk.getAttribute("class") || "").split(" ").filter((function(kk) {
        return kk
      }))
    }

    function rF(kk) {
      return "".concat(kk).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function DF(kk) {
      return Object.keys(kk || {}).reduce((function(Fk, Ik) {
        return Fk + "".concat(Ik, ": ").concat(kk[Ik].trim(), ";")
      }), "")
    }

    function MF(kk) {
      return kk.size !== AF.size || kk.x !== AF.x || kk.y !== AF.y || kk.rotate !== AF.rotate || kk.flipX || kk.flipY
    }

    function kI() {
      var kk = "fa",
        Fk = HF,
        Ik = BF.cssPrefix,
        Xk = BF.replacementClass,
        Tk = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (Ik !== kk || Xk !== Fk) {
        var ik = new RegExp("\\.".concat(kk, "\\-"), "g"),
          yk = new RegExp("\\--".concat(kk, "\\-"), "g"),
          lk = new RegExp("\\.".concat(Fk), "g");
        Tk = Tk.replace(ik, ".".concat(Ik, "-")).replace(yk, "--".concat(Ik, "-")).replace(lk, ".".concat(Xk))
      }
      return Tk
    }
    var FI = !1;

    function II() {
      BF.autoAddCss && !FI && (! function(kk) {
        if (kk && Ek) {
          var Fk = zk.createElement("style");
          Fk.setAttribute("type", "text/css"), Fk.innerHTML = kk;
          for (var Ik = zk.head.childNodes, Xk = null, Tk = Ik.length - 1; Tk > -1; Tk--) {
            var ik = Ik[Tk],
              yk = (ik.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(yk) > -1 && (Xk = ik)
          }
          zk.head.insertBefore(Fk, Xk)
        }
      }(kI()), FI = !0)
    }
    var XI = {
        mixout: function() {
          return {
            dom: {
              css: kI,
              insertCss: II
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              II()
            },
            beforeI2svg: function() {
              II()
            }
          }
        }
      },
      TI = Vk || {};
    TI[wF] || (TI[wF] = {}), TI[wF].styles || (TI[wF].styles = {}), TI[wF].hooks || (TI[wF].hooks = {}), TI[wF].shims || (TI[wF].shims = []);
    var iI = TI[wF],
      yI = [],
      lI = function() {
        zk.removeEventListener("DOMContentLoaded", lI), aI = 1, yI.map((function(kk) {
          return kk()
        }))
      },
      aI = !1;

    function qI(kk) {
      var Fk = kk.tag,
        Ik = kk.attributes,
        Xk = void 0 === Ik ? {} : Ik,
        Tk = kk.children,
        ik = void 0 === Tk ? [] : Tk;
      return "string" === typeof kk ? rF(kk) : "<".concat(Fk, " ").concat(function(kk) {
        return Object.keys(kk || {}).reduce((function(Fk, Ik) {
          return Fk + "".concat(Ik, '="').concat(rF(kk[Ik]), '" ')
        }), "").trim()
      }(Xk), ">").concat(ik.map(qI).join(""), "</").concat(Fk, ">")
    }

    function LI(kk, Fk, Ik) {
      if (kk && kk[Fk] && kk[Fk][Ik]) return {
        prefix: Fk,
        iconName: Ik,
        icon: kk[Fk][Ik]
      }
    }
    Ek && ((aI = (zk.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(zk.readyState)) || zk.addEventListener("DOMContentLoaded", lI));
    var tI = function(kk, Fk, Ik, Xk) {
      var Tk, ik, yk, lk = Object.keys(kk),
        ak = lk.length,
        qk = void 0 !== Xk ? function(kk, Fk) {
          return function(Ik, Xk, Tk, ik) {
            return kk.call(Fk, Ik, Xk, Tk, ik)
          }
        }(Fk, Xk) : Fk;
      for (void 0 === Ik ? (Tk = 1, yk = kk[lk[0]]) : (Tk = 0, yk = Ik); Tk < ak; Tk++) yk = qk(yk, kk[ik = lk[Tk]], ik, kk);
      return yk
    };

    function ZI(kk) {
      return 1 !== Lk(kk).length ? null : kk.codePointAt(0).toString(16)
    }

    function jI(kk) {
      return Object.keys(kk).reduce((function(Fk, Ik) {
        var Xk = kk[Ik];
        return !!Xk.icon ? Fk[Xk.iconName] = Xk.icon : Fk[Ik] = Xk, Fk
      }), {})
    }

    function eI(kk, Fk) {
      var Ik = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        Xk = void 0 !== Ik && Ik,
        Tk = jI(Fk);
      "function" !== typeof iI.hooks.addPack || Xk ? iI.styles[kk] = ak(ak({}, iI.styles[kk] || {}), Tk) : iI.hooks.addPack(kk, jI(Fk)), "fas" === kk && eI("fa", Fk)
    }
    var wI = iI.styles,
      HI = iI.shims,
      JI = Object.keys(GF),
      xI = JI.reduce((function(kk, Fk) {
        return kk[Fk] = Object.keys(GF[Fk]), kk
      }), {}),
      PI = null,
      KI = {},
      QI = {},
      sI = {},
      VI = {},
      zI = {};

    function SI(kk, Fk) {
      var Ik, Xk = Fk.split("-"),
        Tk = Xk[0],
        ik = Xk.slice(1).join("-");
      return Tk !== kk || "" === ik || (Ik = ik, ~NF.indexOf(Ik)) ? null : ik
    }
    var oI, vI = function() {
      var kk = function(kk) {
        return tI(wI, (function(Fk, Ik, Xk) {
          return Fk[Xk] = tI(Ik, kk, {}), Fk
        }), {})
      };
      KI = kk((function(kk, Fk, Ik) {
        (Fk[3] && (kk[Fk[3]] = Ik), Fk[2]) && Fk[2].filter((function(kk) {
          return "number" === typeof kk
        })).forEach((function(Fk) {
          kk[Fk.toString(16)] = Ik
        }));
        return kk
      })), QI = kk((function(kk, Fk, Ik) {
        (kk[Ik] = Ik, Fk[2]) && Fk[2].filter((function(kk) {
          return "string" === typeof kk
        })).forEach((function(Fk) {
          kk[Fk] = Ik
        }));
        return kk
      })), zI = kk((function(kk, Fk, Ik) {
        var Xk = Fk[2];
        return kk[Ik] = Ik, Xk.forEach((function(Fk) {
          kk[Fk] = Ik
        })), kk
      }));
      var Fk = "far" in wI || BF.autoFetchSvg,
        Ik = tI(HI, (function(kk, Ik) {
          var Xk = Ik[0],
            Tk = Ik[1],
            ik = Ik[2];
          return "far" !== Tk || Fk || (Tk = "fas"), "string" === typeof Xk && (kk.names[Xk] = {
            prefix: Tk,
            iconName: ik
          }), "number" === typeof Xk && (kk.unicodes[Xk.toString(16)] = {
            prefix: Tk,
            iconName: ik
          }), kk
        }), {
          names: {},
          unicodes: {}
        });
      sI = Ik.names, VI = Ik.unicodes, PI = pI(BF.styleDefault, {
        family: BF.familyDefault
      })
    };

    function EI(kk, Fk) {
      return (KI[kk] || {})[Fk]
    }

    function OI(kk, Fk) {
      return (zI[kk] || {})[Fk]
    }

    function nI(kk) {
      return sI[kk] || {
        prefix: null,
        iconName: null
      }
    }

    function GI() {
      return PI
    }
    oI = function(kk) {
      PI = pI(kk.styleDefault, {
        family: BF.familyDefault
      })
    }, dF.push(oI), vI();

    function pI(kk) {
      var Fk = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        Ik = void 0 === Fk ? pk : Fk,
        Xk = vF[Ik][kk];
      if (Ik === uk && !kk) return "fad";
      var Tk = OF[Ik][kk] || OF[Ik][Xk],
        ik = kk in iI.styles ? kk : null;
      return Tk || ik || null
    }

    function uI(kk) {
      return kk.sort().filter((function(kk, Fk, Ik) {
        return Ik.indexOf(kk) === Fk
      }))
    }
    var bI = tF.concat(FF);

    function RI(kk) {
      var Fk = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        Ik = void 0 !== Fk && Fk,
        Xk = null,
        Tk = uI(kk.filter((function(kk) {
          return bI.includes(kk)
        }))),
        ik = uI(kk.filter((function(kk) {
          return !bI.includes(kk)
        }))),
        yk = qk(Tk.filter((function(kk) {
          return Xk = kk, !Gk.includes(kk)
        })), 1)[0],
        lk = void 0 === yk ? null : yk,
        Lk = function(kk) {
          var Fk = pk,
            Ik = JI.reduce((function(kk, Fk) {
              return kk[Fk] = "".concat(BF.cssPrefix, "-").concat(Fk), kk
            }), {});
          return Mk.forEach((function(Xk) {
            (kk.includes(Ik[Xk]) || kk.some((function(kk) {
              return xI[Xk].includes(kk)
            }))) && (Fk = Xk)
          })), Fk
        }(Tk),
        tk = ak(ak({}, function(kk) {
          var Fk = [],
            Ik = null;
          return kk.forEach((function(kk) {
            var Xk = SI(BF.cssPrefix, kk);
            Xk ? Ik = Xk : kk && Fk.push(kk)
          })), {
            iconName: Ik,
            rest: Fk
          }
        }(ik)), {}, {
          prefix: pI(lk, {
            family: Lk
          })
        });
      return ak(ak(ak({}, tk), function(kk) {
        var Fk = kk.values,
          Ik = kk.family,
          Xk = kk.canonical,
          Tk = kk.givenPrefix,
          ik = void 0 === Tk ? "" : Tk,
          yk = kk.styles,
          lk = void 0 === yk ? {} : yk,
          ak = kk.config,
          qk = void 0 === ak ? {} : ak,
          Lk = Ik === uk,
          tk = Fk.includes("fa-duotone") || Fk.includes("fad"),
          Zk = "duotone" === qk.familyDefault,
          jk = "fad" === Xk.prefix || "fa-duotone" === Xk.prefix;
        !Lk && (tk || Zk || jk) && (Xk.prefix = "fad");
        (Fk.includes("fa-brands") || Fk.includes("fab")) && (Xk.prefix = "fab");
        if (!Xk.prefix && UI.includes(Ik)) {
          if (Object.keys(lk).find((function(kk) {
              return CI.includes(kk)
            })) || qk.autoFetchSvg) {
            var ek = kF.get(Ik).defaultShortPrefixId;
            Xk.prefix = ek, Xk.iconName = OI(Xk.prefix, Xk.iconName) || Xk.iconName
          }
        }
        "fa" !== Xk.prefix && "fa" !== ik || (Xk.prefix = GI() || "fas");
        return Xk
      }({
        values: kk,
        family: Lk,
        styles: wI,
        config: BF,
        canonical: tk,
        givenPrefix: Xk
      })), function(kk, Fk, Ik) {
        var Xk = Ik.prefix,
          Tk = Ik.iconName;
        if (kk || !Xk || !Tk) return {
          prefix: Xk,
          iconName: Tk
        };
        var ik = "fa" === Fk ? nI(Tk) : {},
          yk = OI(Xk, Tk);
        Tk = ik.iconName || yk || Tk, "far" !== (Xk = ik.prefix || Xk) || wI.far || !wI.fas || BF.autoFetchSvg || (Xk = "fas");
        return {
          prefix: Xk,
          iconName: Tk
        }
      }(Ik, Xk, tk))
    }
    var UI = Mk.filter((function(kk) {
        return kk !== pk || kk !== uk
      })),
      CI = Object.keys(LF).filter((function(kk) {
        return kk !== pk
      })).map((function(kk) {
        return Object.keys(LF[kk])
      })).flat();
    var NI = function() {
        return function(kk, Fk, Ik) {
          return Fk && Tk(kk.prototype, Fk), Ik && Tk(kk, Ik), Object.defineProperty(kk, "prototype", {
            writable: !1
          }), kk
        }((function kk() {
          ! function(kk, Fk) {
            if (!(kk instanceof Fk)) throw new TypeError("Cannot call a class as a function")
          }(this, kk), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var kk = this, Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
            var Tk = Ik.reduce(this._pullDefinitions, {});
            Object.keys(Tk).forEach((function(Fk) {
              kk.definitions[Fk] = ak(ak({}, kk.definitions[Fk] || {}), Tk[Fk]), eI(Fk, Tk[Fk]);
              var Ik = GF[pk][Fk];
              Ik && eI(Ik, Tk[Fk]), vI()
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
            var Ik = Fk.prefix && Fk.iconName && Fk.icon ? {
              0: Fk
            } : Fk;
            return Object.keys(Ik).map((function(Fk) {
              var Xk = Ik[Fk],
                Tk = Xk.prefix,
                ik = Xk.iconName,
                yk = Xk.icon,
                lk = yk[2];
              kk[Tk] || (kk[Tk] = {}), lk.length > 0 && lk.forEach((function(Fk) {
                "string" === typeof Fk && (kk[Tk][Fk] = yk)
              })), kk[Tk][ik] = yk
            })), kk
          }
        }])
      }(),
      cI = [],
      WI = {},
      fI = {},
      BI = Object.keys(fI);

    function dI(kk, Fk) {
      for (var Ik = arguments.length, Xk = new Array(Ik > 2 ? Ik - 2 : 0), Tk = 2; Tk < Ik; Tk++) Xk[Tk - 2] = arguments[Tk];
      return (WI[kk] || []).forEach((function(kk) {
        Fk = kk.apply(null, [Fk].concat(Xk))
      })), Fk
    }

    function YI(kk) {
      for (var Fk = arguments.length, Ik = new Array(Fk > 1 ? Fk - 1 : 0), Xk = 1; Xk < Fk; Xk++) Ik[Xk - 1] = arguments[Xk];
      (WI[kk] || []).forEach((function(kk) {
        kk.apply(null, Ik)
      }))
    }

    function AI() {
      var kk = arguments[0],
        Fk = Array.prototype.slice.call(arguments, 1);
      return fI[kk] ? fI[kk].apply(null, Fk) : void 0
    }

    function gI(kk) {
      "fa" === kk.prefix && (kk.prefix = "fas");
      var Fk = kk.iconName,
        Ik = kk.prefix || GI();
      if (Fk) return Fk = OI(Ik, Fk) || Fk, LI(mI.definitions, Ik, Fk) || LI(iI.styles, Ik, Fk)
    }
    var mI = new NI,
      hI = {
        i2svg: function() {
          var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Ek ? (YI("beforeI2svg", kk), AI("pseudoElements2svg", kk), AI("i2svg", kk)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var kk, Fk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Ik = Fk.autoReplaceSvgRoot;
          !1 === BF.autoReplaceSvg && (BF.autoReplaceSvg = !0), BF.observeMutations = !0, kk = function() {
            DI({
              autoReplaceSvgRoot: Ik
            }), YI("watch", Fk)
          }, Ek && (aI ? setTimeout(kk, 0) : yI.push(kk))
        }
      },
      rI = {
        noAuto: function() {
          BF.autoReplaceSvg = !1, BF.observeMutations = !1, YI("noAuto")
        },
        config: BF,
        dom: hI,
        parse: {
          icon: function(kk) {
            if (null === kk) return null;
            if ("object" === Zk(kk) && kk.prefix && kk.iconName) return {
              prefix: kk.prefix,
              iconName: OI(kk.prefix, kk.iconName) || kk.iconName
            };
            if (Array.isArray(kk) && 2 === kk.length) {
              var Fk = 0 === kk[1].indexOf("fa-") ? kk[1].slice(3) : kk[1],
                Ik = pI(kk[0]);
              return {
                prefix: Ik,
                iconName: OI(Ik, Fk) || Fk
              }
            }
            if ("string" === typeof kk && (kk.indexOf("".concat(BF.cssPrefix, "-")) > -1 || kk.match(uF))) {
              var Xk = RI(kk.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: Xk.prefix || GI(),
                iconName: OI(Xk.prefix, Xk.iconName) || Xk.iconName
              }
            }
            if ("string" === typeof kk) {
              var Tk = GI();
              return {
                prefix: Tk,
                iconName: OI(Tk, kk) || kk
              }
            }
          }
        },
        library: mI,
        findIconDefinition: gI,
        toHtml: qI
      },
      DI = function() {
        var kk = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          Fk = void 0 === kk ? zk : kk;
        (Object.keys(iI.styles).length > 0 || BF.autoFetchSvg) && Ek && BF.autoReplaceSvg && rI.dom.i2svg({
          node: Fk
        })
      };

    function MI(kk, Fk) {
      return Object.defineProperty(kk, "abstract", {
        get: Fk
      }), Object.defineProperty(kk, "html", {
        get: function() {
          return kk.abstract.map((function(kk) {
            return qI(kk)
          }))
        }
      }), Object.defineProperty(kk, "node", {
        get: function() {
          if (Ek) {
            var Fk = zk.createElement("div");
            return Fk.innerHTML = kk.html, Fk.children
          }
        }
      }), kk
    }

    function kX(kk) {
      var Fk = kk.icons,
        Ik = Fk.main,
        Xk = Fk.mask,
        Tk = kk.prefix,
        ik = kk.iconName,
        yk = kk.transform,
        lk = kk.symbol,
        qk = kk.maskId,
        Lk = kk.extra,
        tk = kk.watchable,
        Zk = void 0 !== tk && tk,
        jk = Xk.found ? Xk : Ik,
        ek = jk.width,
        wk = jk.height,
        Hk = [BF.replacementClass, ik ? "".concat(BF.cssPrefix, "-").concat(ik) : ""].filter((function(kk) {
          return -1 === Lk.classes.indexOf(kk)
        })).filter((function(kk) {
          return "" !== kk || !!kk
        })).concat(Lk.classes).join(" "),
        Jk = {
          children: [],
          attributes: ak(ak({}, Lk.attributes), {}, {
            "data-prefix": Tk,
            "data-icon": ik,
            class: Hk,
            role: Lk.attributes.role || "img",
            viewBox: "0 0 ".concat(ek, " ").concat(wk)
          })
        };
      (function(kk) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(Fk) {
          return Fk in kk
        }))
      })(Lk.attributes) || Lk.attributes["aria-hidden"] || (Jk.attributes["aria-hidden"] = "true"), Zk && (Jk.attributes[JF] = "");
      var xk = ak(ak({}, Jk), {}, {
          prefix: Tk,
          iconName: ik,
          main: Ik,
          mask: Xk,
          maskId: qk,
          transform: yk,
          symbol: lk,
          styles: ak({}, Lk.styles)
        }),
        Pk = Xk.found && Ik.found ? AI("generateAbstractMask", xk) || {
          children: [],
          attributes: {}
        } : AI("generateAbstractIcon", xk) || {
          children: [],
          attributes: {}
        },
        Kk = Pk.children,
        Qk = Pk.attributes;
      return xk.children = Kk, xk.attributes = Qk, lk ? function(kk) {
        var Fk = kk.prefix,
          Ik = kk.iconName,
          Xk = kk.children,
          Tk = kk.attributes,
          ik = kk.symbol,
          yk = !0 === ik ? "".concat(Fk, "-").concat(BF.cssPrefix, "-").concat(Ik) : ik;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: ak(ak({}, Tk), {}, {
              id: yk
            }),
            children: Xk
          }]
        }]
      }(xk) : function(kk) {
        var Fk = kk.children,
          Ik = kk.main,
          Xk = kk.mask,
          Tk = kk.attributes,
          ik = kk.styles,
          yk = kk.transform;
        if (MF(yk) && Ik.found && !Xk.found) {
          var lk = {
            x: Ik.width / Ik.height / 2,
            y: .5
          };
          Tk.style = DF(ak(ak({}, ik), {}, {
            "transform-origin": "".concat(lk.x + yk.x / 16, "em ").concat(lk.y + yk.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: Tk,
          children: Fk
        }]
      }(xk)
    }

    function FX(kk) {
      var Fk = kk.content,
        Ik = kk.width,
        Xk = kk.height,
        Tk = kk.transform,
        ik = kk.extra,
        yk = kk.watchable,
        lk = void 0 !== yk && yk,
        qk = ak(ak({}, ik.attributes), {}, {
          class: ik.classes.join(" ")
        });
      lk && (qk[JF] = "");
      var Lk = ak({}, ik.styles);
      MF(Tk) && (Lk.transform = function(kk) {
        var Fk = kk.transform,
          Ik = kk.width,
          Xk = void 0 === Ik ? 16 : Ik,
          Tk = kk.height,
          ik = void 0 === Tk ? 16 : Tk,
          yk = kk.startCentered,
          lk = void 0 !== yk && yk,
          ak = "";
        return ak += lk && Ok ? "translate(".concat(Fk.x / YF - Xk / 2, "em, ").concat(Fk.y / YF - ik / 2, "em) ") : lk ? "translate(calc(-50% + ".concat(Fk.x / YF, "em), calc(-50% + ").concat(Fk.y / YF, "em)) ") : "translate(".concat(Fk.x / YF, "em, ").concat(Fk.y / YF, "em) "), ak += "scale(".concat(Fk.size / YF * (Fk.flipX ? -1 : 1), ", ").concat(Fk.size / YF * (Fk.flipY ? -1 : 1), ") "), ak + "rotate(".concat(Fk.rotate, "deg) ")
      }({
        transform: Tk,
        startCentered: !0,
        width: Ik,
        height: Xk
      }), Lk["-webkit-transform"] = Lk.transform);
      var tk = DF(Lk);
      tk.length > 0 && (qk.style = tk);
      var Zk = [];
      return Zk.push({
        tag: "span",
        attributes: qk,
        children: [Fk]
      }), Zk
    }
    var IX = iI.styles;

    function XX(kk) {
      var Fk = kk[0],
        Ik = kk[1],
        Xk = qk(kk.slice(4), 1)[0];
      return {
        found: !0,
        width: Fk,
        height: Ik,
        icon: Array.isArray(Xk) ? {
          tag: "g",
          attributes: {
            class: "".concat(BF.cssPrefix, "-").concat(CF.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(BF.cssPrefix, "-").concat(CF.SECONDARY),
              fill: "currentColor",
              d: Xk[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(BF.cssPrefix, "-").concat(CF.PRIMARY),
              fill: "currentColor",
              d: Xk[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: Xk
          }
        }
      }
    }
    var TX = {
      found: !1,
      width: 512,
      height: 512
    };

    function iX(kk, Fk) {
      var Ik = Fk;
      return "fa" === Fk && null !== BF.styleDefault && (Fk = GI()), new Promise((function(Xk, Tk) {
        if ("fa" === Ik) {
          var ik = nI(kk) || {};
          kk = ik.iconName || kk, Fk = ik.prefix || Fk
        }
        if (kk && Fk && IX[Fk] && IX[Fk][kk]) return Xk(XX(IX[Fk][kk]));
        ! function(kk, Fk) {
          zF || BF.showMissingIcons || !kk || console.error('Icon with name "'.concat(kk, '" and prefix "').concat(Fk, '" is missing.'))
        }(kk, Fk), Xk(ak(ak({}, TX), {}, {
          icon: BF.showMissingIcons && kk && AI("missingIconAbstract") || {}
        }))
      }))
    }
    var yX = function() {},
      lX = BF.measurePerformance && vk && vk.mark && vk.measure ? vk : {
        mark: yX,
        measure: yX
      },
      aX = 'FA "7.2.0"',
      qX = function(kk) {
        lX.mark("".concat(aX, " ").concat(kk, " ends")), lX.measure("".concat(aX, " ").concat(kk), "".concat(aX, " ").concat(kk, " begins"), "".concat(aX, " ").concat(kk, " ends"))
      },
      LX = function(kk) {
        return lX.mark("".concat(aX, " ").concat(kk, " begins")),
          function() {
            return qX(kk)
          }
      },
      tX = function() {};

    function ZX(kk) {
      return "string" === typeof(kk.getAttribute ? kk.getAttribute(JF) : null)
    }

    function jX(kk) {
      return zk.createElementNS("http://www.w3.org/2000/svg", kk)
    }

    function eX(kk) {
      return zk.createElement(kk)
    }

    function wX(kk) {
      var Fk = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        Ik = void 0 === Fk ? "svg" === kk.tag ? jX : eX : Fk;
      if ("string" === typeof kk) return zk.createTextNode(kk);
      var Xk = Ik(kk.tag);
      return Object.keys(kk.attributes || []).forEach((function(Fk) {
        Xk.setAttribute(Fk, kk.attributes[Fk])
      })), (kk.children || []).forEach((function(kk) {
        Xk.appendChild(wX(kk, {
          ceFn: Ik
        }))
      })), Xk
    }
    var HX = {
      replace: function(kk) {
        var Fk = kk[0];
        if (Fk.parentNode)
          if (kk[1].forEach((function(kk) {
              Fk.parentNode.insertBefore(wX(kk), Fk)
            })), null === Fk.getAttribute(JF) && BF.keepOriginalSource) {
            var Ik = zk.createComment(function(kk) {
              var Fk = " ".concat(kk.outerHTML, " ");
              return "".concat(Fk, "Font Awesome fontawesome.com ")
            }(Fk));
            Fk.parentNode.replaceChild(Ik, Fk)
          } else Fk.remove()
      },
      nest: function(kk) {
        var Fk = kk[0],
          Ik = kk[1];
        if (~hF(Fk).indexOf(BF.replacementClass)) return HX.replace(kk);
        var Xk = new RegExp("".concat(BF.cssPrefix, "-.*"));
        if (delete Ik[0].attributes.id, Ik[0].attributes.class) {
          var Tk = Ik[0].attributes.class.split(" ").reduce((function(kk, Fk) {
            return Fk === BF.replacementClass || Fk.match(Xk) ? kk.toSvg.push(Fk) : kk.toNode.push(Fk), kk
          }), {
            toNode: [],
            toSvg: []
          });
          Ik[0].attributes.class = Tk.toSvg.join(" "), 0 === Tk.toNode.length ? Fk.removeAttribute("class") : Fk.setAttribute("class", Tk.toNode.join(" "))
        }
        var ik = Ik.map((function(kk) {
          return qI(kk)
        })).join("\n");
        Fk.setAttribute(JF, ""), Fk.innerHTML = ik
      }
    };

    function JX(kk) {
      kk()
    }

    function xX(kk, Fk) {
      var Ik = "function" === typeof Fk ? Fk : tX;
      if (0 === kk.length) Ik();
      else {
        var Xk = JX;
        "async" === BF.mutateApproach && (Xk = Vk.requestAnimationFrame || JX), Xk((function() {
          var Fk = !0 === BF.autoReplaceSvg ? HX.replace : HX[BF.autoReplaceSvg] || HX.replace,
            Xk = LX("mutate");
          kk.map(Fk), Xk(), Ik()
        }))
      }
    }
    var PX = !1;

    function KX() {
      PX = !0
    }

    function QX() {
      PX = !1
    }
    var sX = null;

    function VX(kk) {
      if (Sk && BF.observeMutations) {
        var Fk = kk.treeCallback,
          Ik = void 0 === Fk ? tX : Fk,
          Xk = kk.nodeCallback,
          Tk = void 0 === Xk ? tX : Xk,
          ik = kk.pseudoElementsCallback,
          yk = void 0 === ik ? tX : ik,
          lk = kk.observeMutationsRoot,
          ak = void 0 === lk ? zk : lk;
        sX = new Sk((function(kk) {
          if (!PX) {
            var Fk = GI();
            mF(kk).forEach((function(kk) {
              if ("childList" === kk.type && kk.addedNodes.length > 0 && !ZX(kk.addedNodes[0]) && (BF.searchPseudoElements && yk(kk.target), Ik(kk.target)), "attributes" === kk.type && kk.target.parentNode && BF.searchPseudoElements && yk([kk.target], !0), "attributes" === kk.type && ZX(kk.target) && ~UF.indexOf(kk.attributeName))
                if ("class" === kk.attributeName && function(kk) {
                    var Fk = kk.getAttribute ? kk.getAttribute(PF) : null,
                      Ik = kk.getAttribute ? kk.getAttribute(KF) : null;
                    return Fk && Ik
                  }(kk.target)) {
                  var Xk = RI(hF(kk.target)),
                    ik = Xk.prefix,
                    lk = Xk.iconName;
                  kk.target.setAttribute(PF, ik || Fk), lk && kk.target.setAttribute(KF, lk)
                } else(ak = kk.target) && ak.classList && ak.classList.contains && ak.classList.contains(BF.replacementClass) && Tk(kk.target);
              var ak
            }))
          }
        })), Ek && sX.observe(ak, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function zX(kk) {
      var Fk, Ik, Xk = kk.getAttribute("data-prefix"),
        Tk = kk.getAttribute("data-icon"),
        ik = void 0 !== kk.innerText ? kk.innerText.trim() : "",
        yk = RI(hF(kk));
      return yk.prefix || (yk.prefix = GI()), Xk && Tk && (yk.prefix = Xk, yk.iconName = Tk), yk.iconName && yk.prefix || (yk.prefix && ik.length > 0 && (yk.iconName = (Fk = yk.prefix, Ik = kk.innerText, (QI[Fk] || {})[Ik] || EI(yk.prefix, ZI(kk.innerText)))), !yk.iconName && BF.autoFetchSvg && kk.firstChild && kk.firstChild.nodeType === Node.TEXT_NODE && (yk.iconName = kk.firstChild.data)), yk
    }

    function SX(kk) {
      var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        Ik = zX(kk),
        Xk = Ik.iconName,
        Tk = Ik.prefix,
        ik = Ik.rest,
        yk = function(kk) {
          return mF(kk.attributes).reduce((function(kk, Fk) {
            return "class" !== kk.name && "style" !== kk.name && (kk[Fk.name] = Fk.value), kk
          }), {})
        }(kk),
        lk = dI("parseNodeAttributes", {}, kk),
        qk = Fk.styleParser ? function(kk) {
          var Fk = kk.getAttribute("style"),
            Ik = [];
          return Fk && (Ik = Fk.split(";").reduce((function(kk, Fk) {
            var Ik = Fk.split(":"),
              Xk = Ik[0],
              Tk = Ik.slice(1);
            return Xk && Tk.length > 0 && (kk[Xk] = Tk.join(":").trim()), kk
          }), {})), Ik
        }(kk) : [];
      return ak({
        iconName: Xk,
        prefix: Tk,
        transform: AF,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: ik,
          styles: qk,
          attributes: yk
        }
      }, lk)
    }
    var oX = iI.styles;

    function vX(kk) {
      var Fk = "nest" === BF.autoReplaceSvg ? SX(kk, {
        styleParser: !1
      }) : SX(kk);
      return ~Fk.extra.classes.indexOf(bF) ? AI("generateLayersText", kk, Fk) : AI("generateSvgReplacementMutation", kk, Fk)
    }

    function EX(kk) {
      var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!Ek) return Promise.resolve();
      var Ik = zk.documentElement.classList,
        Xk = function(kk) {
          return Ik.add("".concat(QF, "-").concat(kk))
        },
        Tk = function(kk) {
          return Ik.remove("".concat(QF, "-").concat(kk))
        },
        ik = BF.autoFetchSvg ? [].concat(Lk(FF), Lk(tF)) : Gk.concat(Object.keys(oX));
      ik.includes("fa") || ik.push("fa");
      var yk = [".".concat(bF, ":not([").concat(JF, "])")].concat(ik.map((function(kk) {
        return ".".concat(kk, ":not([").concat(JF, "])")
      }))).join(", ");
      if (0 === yk.length) return Promise.resolve();
      var lk = [];
      try {
        lk = mF(kk.querySelectorAll(yk))
      } catch (tk) {}
      if (!(lk.length > 0)) return Promise.resolve();
      Xk("pending"), Tk("complete");
      var ak = LX("onTree"),
        qk = lk.reduce((function(kk, Fk) {
          try {
            var Ik = vX(Fk);
            Ik && kk.push(Ik)
          } catch (tk) {
            zF || "MissingIcon" === tk.name && console.error(tk)
          }
          return kk
        }), []);
      return new Promise((function(kk, Ik) {
        Promise.all(qk).then((function(Ik) {
          xX(Ik, (function() {
            Xk("active"), Xk("complete"), Tk("pending"), "function" === typeof Fk && Fk(), ak(), kk()
          }))
        })).catch((function(kk) {
          ak(), Ik(kk)
        }))
      }))
    }

    function OX(kk) {
      var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      vX(kk).then((function(kk) {
        kk && xX([kk], Fk)
      }))
    }
    var nX = function(kk) {
        var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Ik = Fk.transform,
          Xk = void 0 === Ik ? AF : Ik,
          Tk = Fk.symbol,
          ik = void 0 !== Tk && Tk,
          yk = Fk.mask,
          lk = void 0 === yk ? null : yk,
          qk = Fk.maskId,
          Lk = void 0 === qk ? null : qk,
          tk = Fk.classes,
          Zk = void 0 === tk ? [] : tk,
          jk = Fk.attributes,
          ek = void 0 === jk ? {} : jk,
          wk = Fk.styles,
          Hk = void 0 === wk ? {} : wk;
        if (kk) {
          var Jk = kk.prefix,
            xk = kk.iconName,
            Pk = kk.icon;
          return MI(ak({
            type: "icon"
          }, kk), (function() {
            return YI("beforeDOMElementCreation", {
              iconDefinition: kk,
              params: Fk
            }), kX({
              icons: {
                main: XX(Pk),
                mask: lk ? XX(lk.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: Jk,
              iconName: xk,
              transform: ak(ak({}, AF), Xk),
              symbol: ik,
              maskId: Lk,
              extra: {
                attributes: ek,
                styles: Hk,
                classes: Zk
              }
            })
          }))
        }
      },
      GX = {
        mixout: function() {
          return {
            icon: (kk = nX, function(Fk) {
              var Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Xk = (Fk || {}).icon ? Fk : gI(Fk || {}),
                Tk = Ik.mask;
              return Tk && (Tk = (Tk || {}).icon ? Tk : gI(Tk || {})), kk(Xk, ak(ak({}, Ik), {}, {
                mask: Tk
              }))
            })
          };
          var kk
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(kk) {
              return kk.treeCallback = EX, kk.nodeCallback = OX, kk
            }
          }
        },
        provides: function(kk) {
          kk.i2svg = function(kk) {
            var Fk = kk.node,
              Ik = void 0 === Fk ? zk : Fk,
              Xk = kk.callback;
            return EX(Ik, void 0 === Xk ? function() {} : Xk)
          }, kk.generateSvgReplacementMutation = function(kk, Fk) {
            var Ik = Fk.iconName,
              Xk = Fk.prefix,
              Tk = Fk.transform,
              ik = Fk.symbol,
              yk = Fk.mask,
              lk = Fk.maskId,
              ak = Fk.extra;
            return new Promise((function(Fk, Lk) {
              Promise.all([iX(Ik, Xk), yk.iconName ? iX(yk.iconName, yk.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(yk) {
                var Lk = qk(yk, 2),
                  tk = Lk[0],
                  Zk = Lk[1];
                Fk([kk, kX({
                  icons: {
                    main: tk,
                    mask: Zk
                  },
                  prefix: Xk,
                  iconName: Ik,
                  transform: Tk,
                  symbol: ik,
                  maskId: lk,
                  extra: ak,
                  watchable: !0
                })])
              })).catch(Lk)
            }))
          }, kk.generateAbstractIcon = function(kk) {
            var Fk, Ik = kk.children,
              Xk = kk.attributes,
              Tk = kk.main,
              ik = kk.transform,
              yk = DF(kk.styles);
            return yk.length > 0 && (Xk.style = yk), MF(ik) && (Fk = AI("generateAbstractTransformGrouping", {
              main: Tk,
              transform: ik,
              containerWidth: Tk.width,
              iconWidth: Tk.width
            })), Ik.push(Fk || Tk.icon), {
              children: Ik,
              attributes: Xk
            }
          }
        }
      },
      pX = {
        mixout: function() {
          return {
            layer: function(kk) {
              var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Ik = Fk.classes,
                Xk = void 0 === Ik ? [] : Ik;
              return MI({
                type: "layer"
              }, (function() {
                YI("beforeDOMElementCreation", {
                  assembler: kk,
                  params: Fk
                });
                var Ik = [];
                return kk((function(kk) {
                  Array.isArray(kk) ? kk.map((function(kk) {
                    Ik = Ik.concat(kk.abstract)
                  })) : Ik = Ik.concat(kk.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(BF.cssPrefix, "-layers")].concat(Lk(Xk)).join(" ")
                  },
                  children: Ik
                }]
              }))
            }
          }
        }
      },
      uX = {
        mixout: function() {
          return {
            counter: function(kk) {
              var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Ik = Fk.title,
                Xk = void 0 === Ik ? null : Ik,
                Tk = Fk.classes,
                ik = void 0 === Tk ? [] : Tk,
                yk = Fk.attributes,
                lk = void 0 === yk ? {} : yk,
                qk = Fk.styles,
                tk = void 0 === qk ? {} : qk;
              return MI({
                type: "counter",
                content: kk
              }, (function() {
                return YI("beforeDOMElementCreation", {
                    content: kk,
                    params: Fk
                  }),
                  function(kk) {
                    var Fk = kk.content,
                      Ik = kk.extra,
                      Xk = ak(ak({}, Ik.attributes), {}, {
                        class: Ik.classes.join(" ")
                      }),
                      Tk = DF(Ik.styles);
                    Tk.length > 0 && (Xk.style = Tk);
                    var ik = [];
                    return ik.push({
                      tag: "span",
                      attributes: Xk,
                      children: [Fk]
                    }), ik
                  }({
                    content: kk.toString(),
                    title: Xk,
                    extra: {
                      attributes: lk,
                      styles: tk,
                      classes: ["".concat(BF.cssPrefix, "-layers-counter")].concat(Lk(ik))
                    }
                  })
              }))
            }
          }
        }
      },
      bX = {
        mixout: function() {
          return {
            text: function(kk) {
              var Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Ik = Fk.transform,
                Xk = void 0 === Ik ? AF : Ik,
                Tk = Fk.classes,
                ik = void 0 === Tk ? [] : Tk,
                yk = Fk.attributes,
                lk = void 0 === yk ? {} : yk,
                qk = Fk.styles,
                tk = void 0 === qk ? {} : qk;
              return MI({
                type: "text",
                content: kk
              }, (function() {
                return YI("beforeDOMElementCreation", {
                  content: kk,
                  params: Fk
                }), FX({
                  content: kk,
                  transform: ak(ak({}, AF), Xk),
                  extra: {
                    attributes: lk,
                    styles: tk,
                    classes: ["".concat(BF.cssPrefix, "-layers-text")].concat(Lk(ik))
                  }
                })
              }))
            }
          }
        },
        provides: function(kk) {
          kk.generateLayersText = function(kk, Fk) {
            var Ik = Fk.transform,
              Xk = Fk.extra,
              Tk = null,
              ik = null;
            if (Ok) {
              var yk = parseInt(getComputedStyle(kk).fontSize, 10),
                lk = kk.getBoundingClientRect();
              Tk = lk.width / yk, ik = lk.height / yk
            }
            return Promise.resolve([kk, FX({
              content: kk.innerHTML,
              width: Tk,
              height: ik,
              transform: Ik,
              extra: Xk,
              watchable: !0
            })])
          }
        }
      },
      RX = new RegExp('"', "ug"),
      UX = [1105920, 1112319],
      CX = ak(ak(ak(ak({}, {
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
      NX = Object.keys(CX).reduce((function(kk, Fk) {
        return kk[Fk.toLowerCase()] = CX[Fk], kk
      }), {}),
      cX = Object.keys(NX).reduce((function(kk, Fk) {
        var Ik = NX[Fk];
        return kk[Fk] = Ik[900] || Lk(Object.entries(Ik))[0][1], kk
      }), {});

    function WX(kk, Fk) {
      var Ik = "".concat("data-fa-pseudo-element-pending").concat(Fk.replace(":", "-"));
      return new Promise((function(Xk, Tk) {
        if (null !== kk.getAttribute(Ik)) return Xk();
        var ik = mF(kk.children).filter((function(kk) {
            return kk.getAttribute(xF) === Fk
          }))[0],
          yk = Vk.getComputedStyle(kk, Fk),
          lk = yk.getPropertyValue("font-family"),
          qk = lk.match(RF),
          tk = yk.getPropertyValue("font-weight"),
          Zk = yk.getPropertyValue("content");
        if (ik && !qk) return kk.removeChild(ik), Xk();
        if (qk && "none" !== Zk && "" !== Zk) {
          var jk = yk.getPropertyValue("content"),
            ek = function(kk, Fk) {
              var Ik = kk.replace(/^['"]|['"]$/g, "").toLowerCase(),
                Xk = parseInt(Fk),
                Tk = isNaN(Xk) ? "normal" : Xk;
              return (NX[Ik] || {})[Tk] || cX[Ik]
            }(lk, tk),
            wk = function(kk) {
              return ZI(Lk(kk.replace(RX, ""))[0] || "")
            }(jk),
            Hk = qk[0].startsWith("FontAwesome"),
            Jk = function(kk) {
              var Fk = kk.getPropertyValue("font-feature-settings").includes("ss01"),
                Ik = kk.getPropertyValue("content").replace(RX, ""),
                Xk = Ik.codePointAt(0),
                Tk = Xk >= UX[0] && Xk <= UX[1],
                ik = 2 === Ik.length && Ik[0] === Ik[1];
              return Tk || ik || Fk
            }(yk),
            xk = EI(ek, wk),
            Pk = xk;
          if (Hk) {
            var Kk = function(kk) {
              var Fk = VI[kk],
                Ik = EI("fas", kk);
              return Fk || (Ik ? {
                prefix: "fas",
                iconName: Ik
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(wk);
            Kk.iconName && Kk.prefix && (xk = Kk.iconName, ek = Kk.prefix)
          }
          if (!xk || Jk || ik && ik.getAttribute(PF) === ek && ik.getAttribute(KF) === Pk) Xk();
          else {
            kk.setAttribute(Ik, Pk), ik && kk.removeChild(ik);
            var Qk = {
                iconName: null,
                prefix: null,
                transform: AF,
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
              sk = Qk.extra;
            sk.attributes[xF] = Fk, iX(xk, ek).then((function(Tk) {
              var ik = kX(ak(ak({}, Qk), {}, {
                  icons: {
                    main: Tk,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: ek,
                  iconName: Pk,
                  extra: sk,
                  watchable: !0
                })),
                yk = zk.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === Fk ? kk.insertBefore(yk, kk.firstChild) : kk.appendChild(yk), yk.outerHTML = ik.map((function(kk) {
                return qI(kk)
              })).join("\n"), kk.removeAttribute(Ik), Xk()
            })).catch(Tk)
          }
        } else Xk()
      }))
    }

    function fX(kk) {
      return Promise.all([WX(kk, "::before"), WX(kk, "::after")])
    }

    function BX(kk) {
      return kk.parentNode !== document.head && !~sF.indexOf(kk.tagName.toUpperCase()) && !kk.getAttribute(xF) && (!kk.parentNode || "svg" !== kk.parentNode.tagName)
    }
    var dX = function(kk) {
        return !!kk && VF.some((function(Fk) {
          return kk.includes(Fk)
        }))
      },
      YX = function(kk) {
        if (!kk) return [];
        var Fk = new Set,
          Ik = kk.split(/,(?![^()]*\))/).map((function(kk) {
            return kk.trim()
          }));
        Ik = Ik.flatMap((function(kk) {
          return kk.includes("(") ? kk : kk.split(",").map((function(kk) {
            return kk.trim()
          }))
        }));
        var Xk, Tk = ik(Ik);
        try {
          for (Tk.s(); !(Xk = Tk.n()).done;) {
            var yk = Xk.value;
            if (dX(yk)) {
              var lk = VF.reduce((function(kk, Fk) {
                return kk.replace(Fk, "")
              }), yk);
              "" !== lk && "*" !== lk && Fk.add(lk)
            }
          }
        } catch (ak) {
          Tk.e(ak)
        } finally {
          Tk.f()
        }
        return Fk
      };

    function AX(kk) {
      if (Ek) {
        var Fk;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) Fk = kk;
        else if (BF.searchPseudoElementsFullScan) Fk = kk.querySelectorAll("*");
        else {
          var Ik, Xk = new Set,
            Tk = ik(document.styleSheets);
          try {
            for (Tk.s(); !(Ik = Tk.n()).done;) {
              var yk = Ik.value;
              try {
                var lk, ak = ik(yk.cssRules);
                try {
                  for (ak.s(); !(lk = ak.n()).done;) {
                    var qk, Lk = lk.value,
                      tk = ik(YX(Lk.selectorText));
                    try {
                      for (tk.s(); !(qk = tk.n()).done;) {
                        var Zk = qk.value;
                        Xk.add(Zk)
                      }
                    } catch (ek) {
                      tk.e(ek)
                    } finally {
                      tk.f()
                    }
                  }
                } catch (ek) {
                  ak.e(ek)
                } finally {
                  ak.f()
                }
              } catch (wk) {
                BF.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(yk.href, " (").concat(wk.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (ek) {
            Tk.e(ek)
          } finally {
            Tk.f()
          }
          if (!Xk.size) return;
          var jk = Array.from(Xk).join(", ");
          try {
            Fk = kk.querySelectorAll(jk)
          } catch (Hk) {}
        }
        return new Promise((function(kk, Ik) {
          var Xk = mF(Fk).filter(BX).map(fX),
            Tk = LX("searchPseudoElements");
          KX(), Promise.all(Xk).then((function() {
            Tk(), QX(), kk()
          })).catch((function() {
            Tk(), QX(), Ik()
          }))
        }))
      }
    }
    var gX = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(kk) {
              return kk.pseudoElementsCallback = AX, kk
            }
          }
        },
        provides: function(kk) {
          kk.pseudoElements2svg = function(kk) {
            var Fk = kk.node,
              Ik = void 0 === Fk ? zk : Fk;
            BF.searchPseudoElements && AX(Ik)
          }
        }
      },
      mX = !1,
      hX = function(kk) {
        return kk.toLowerCase().split(" ").reduce((function(kk, Fk) {
          var Ik = Fk.toLowerCase().split("-"),
            Xk = Ik[0],
            Tk = Ik.slice(1).join("-");
          if (Xk && "h" === Tk) return kk.flipX = !0, kk;
          if (Xk && "v" === Tk) return kk.flipY = !0, kk;
          if (Tk = parseFloat(Tk), isNaN(Tk)) return kk;
          switch (Xk) {
            case "grow":
              kk.size = kk.size + Tk;
              break;
            case "shrink":
              kk.size = kk.size - Tk;
              break;
            case "left":
              kk.x = kk.x - Tk;
              break;
            case "right":
              kk.x = kk.x + Tk;
              break;
            case "up":
              kk.y = kk.y - Tk;
              break;
            case "down":
              kk.y = kk.y + Tk;
              break;
            case "rotate":
              kk.rotate = kk.rotate + Tk
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
      rX = {
        mixout: function() {
          return {
            parse: {
              transform: function(kk) {
                return hX(kk)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(kk, Fk) {
              var Ik = Fk.getAttribute("data-fa-transform");
              return Ik && (kk.transform = hX(Ik)), kk
            }
          }
        },
        provides: function(kk) {
          kk.generateAbstractTransformGrouping = function(kk) {
            var Fk = kk.main,
              Ik = kk.transform,
              Xk = kk.containerWidth,
              Tk = kk.iconWidth,
              ik = {
                transform: "translate(".concat(Xk / 2, " 256)")
              },
              yk = "translate(".concat(32 * Ik.x, ", ").concat(32 * Ik.y, ") "),
              lk = "scale(".concat(Ik.size / 16 * (Ik.flipX ? -1 : 1), ", ").concat(Ik.size / 16 * (Ik.flipY ? -1 : 1), ") "),
              qk = "rotate(".concat(Ik.rotate, " 0 0)"),
              Lk = {
                outer: ik,
                inner: {
                  transform: "".concat(yk, " ").concat(lk, " ").concat(qk)
                },
                path: {
                  transform: "translate(".concat(Tk / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: ak({}, Lk.outer),
              children: [{
                tag: "g",
                attributes: ak({}, Lk.inner),
                children: [{
                  tag: Fk.icon.tag,
                  children: Fk.icon.children,
                  attributes: ak(ak({}, Fk.icon.attributes), Lk.path)
                }]
              }]
            }
          }
        }
      },
      DX = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function MX(kk) {
      var Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return kk.attributes && (kk.attributes.fill || Fk) && (kk.attributes.fill = "black"), kk
    }
    var kT = {
        hooks: function() {
          return {
            parseNodeAttributes: function(kk, Fk) {
              var Ik = Fk.getAttribute("data-fa-mask"),
                Xk = Ik ? RI(Ik.split(" ").map((function(kk) {
                  return kk.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return Xk.prefix || (Xk.prefix = GI()), kk.mask = Xk, kk.maskId = Fk.getAttribute("data-fa-mask-id"), kk
            }
          }
        },
        provides: function(kk) {
          kk.generateAbstractMask = function(kk) {
            var Fk, Ik = kk.children,
              Xk = kk.attributes,
              Tk = kk.main,
              ik = kk.mask,
              yk = kk.maskId,
              lk = kk.transform,
              qk = Tk.width,
              Lk = Tk.icon,
              tk = ik.width,
              Zk = ik.icon,
              jk = function(kk) {
                var Fk = kk.transform,
                  Ik = kk.containerWidth,
                  Xk = kk.iconWidth,
                  Tk = {
                    transform: "translate(".concat(Ik / 2, " 256)")
                  },
                  ik = "translate(".concat(32 * Fk.x, ", ").concat(32 * Fk.y, ") "),
                  yk = "scale(".concat(Fk.size / 16 * (Fk.flipX ? -1 : 1), ", ").concat(Fk.size / 16 * (Fk.flipY ? -1 : 1), ") "),
                  lk = "rotate(".concat(Fk.rotate, " 0 0)");
                return {
                  outer: Tk,
                  inner: {
                    transform: "".concat(ik, " ").concat(yk, " ").concat(lk)
                  },
                  path: {
                    transform: "translate(".concat(Xk / 2 * -1, " -256)")
                  }
                }
              }({
                transform: lk,
                containerWidth: tk,
                iconWidth: qk
              }),
              ek = {
                tag: "rect",
                attributes: ak(ak({}, DX), {}, {
                  fill: "white"
                })
              },
              wk = Lk.children ? {
                children: Lk.children.map(MX)
              } : {},
              Hk = {
                tag: "g",
                attributes: ak({}, jk.inner),
                children: [MX(ak({
                  tag: Lk.tag,
                  attributes: ak(ak({}, Lk.attributes), jk.path)
                }, wk))]
              },
              Jk = {
                tag: "g",
                attributes: ak({}, jk.outer),
                children: [Hk]
              },
              xk = "mask-".concat(yk || gF()),
              Pk = "clip-".concat(yk || gF()),
              Kk = {
                tag: "mask",
                attributes: ak(ak({}, DX), {}, {
                  id: xk,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [ek, Jk]
              },
              Qk = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: Pk
                  },
                  children: (Fk = Zk, "g" === Fk.tag ? Fk.children : [Fk])
                }, Kk]
              };
            return Ik.push(Qk, {
              tag: "rect",
              attributes: ak({
                fill: "currentColor",
                "clip-path": "url(#".concat(Pk, ")"),
                mask: "url(#".concat(xk, ")")
              }, DX)
            }), {
              children: Ik,
              attributes: Xk
            }
          }
        }
      },
      FT = {
        provides: function(kk) {
          var Fk = !1;
          Vk.matchMedia && (Fk = Vk.matchMedia("(prefers-reduced-motion: reduce)").matches), kk.missingIconAbstract = function() {
            var kk = [],
              Ik = {
                fill: "currentColor"
              },
              Xk = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            kk.push({
              tag: "path",
              attributes: ak(ak({}, Ik), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var Tk = ak(ak({}, Xk), {}, {
                attributeName: "opacity"
              }),
              ik = {
                tag: "circle",
                attributes: ak(ak({}, Ik), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return Fk || ik.children.push({
              tag: "animate",
              attributes: ak(ak({}, Xk), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: ak(ak({}, Tk), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), kk.push(ik), kk.push({
              tag: "path",
              attributes: ak(ak({}, Ik), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: Fk ? [] : [{
                tag: "animate",
                attributes: ak(ak({}, Tk), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), Fk || kk.push({
              tag: "path",
              attributes: ak(ak({}, Ik), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: ak(ak({}, Tk), {}, {
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
      var Ik = Fk.mixoutsTo;
      cI = kk, WI = {}, Object.keys(fI).forEach((function(kk) {
        -1 === BI.indexOf(kk) && delete fI[kk]
      })), cI.forEach((function(kk) {
        var Fk = kk.mixout ? kk.mixout() : {};
        if (Object.keys(Fk).forEach((function(kk) {
            "function" === typeof Fk[kk] && (Ik[kk] = Fk[kk]), "object" === Zk(Fk[kk]) && Object.keys(Fk[kk]).forEach((function(Xk) {
              Ik[kk] || (Ik[kk] = {}), Ik[kk][Xk] = Fk[kk][Xk]
            }))
          })), kk.hooks) {
          var Xk = kk.hooks();
          Object.keys(Xk).forEach((function(kk) {
            WI[kk] || (WI[kk] = []), WI[kk].push(Xk[kk])
          }))
        }
        kk.provides && kk.provides(fI)
      }))
    }([XI, GX, pX, uX, bX, gX, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              KX(), mX = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            VX(dI("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            sX && sX.disconnect()
          },
          watch: function(kk) {
            var Fk = kk.observeMutationsRoot;
            mX ? QX() : VX(dI("mutationObserverCallbacks", {
              observeMutationsRoot: Fk
            }))
          }
        }
      }
    }, rX, kT, FT, {
      hooks: function() {
        return {
          parseNodeAttributes: function(kk, Fk) {
            var Ik = Fk.getAttribute("data-fa-symbol"),
              Xk = null !== Ik && ("" === Ik || Ik);
            return kk.symbol = Xk, kk
          }
        }
      }
    }], {
      mixoutsTo: rI
    });
    var IT = rI.noAuto,
      XT = rI.config,
      TT = rI.library,
      iT = rI.dom,
      yT = rI.parse,
      lT = rI.findIconDefinition,
      aT = rI.toHtml,
      qT = rI.icon,
      LT = rI.layer,
      tT = rI.text,
      ZT = rI.counter
  },
  6665: kk => {
    kk.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);