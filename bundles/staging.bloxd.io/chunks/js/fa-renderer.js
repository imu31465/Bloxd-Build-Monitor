/*! For license information please see 3lwmg.fa-renderer.4844f643.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6525: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      FontAwesomeIcon: () => jk
    });
    var Dk = ik(6523),
      fk = ik(4893),
      Sk = ik.n(fk),
      bk = ik(60);

    function rk(kk, ek) {
      (null == ek || ek > kk.length) && (ek = kk.length);
      for (var ik = 0, Dk = Array(ek); ik < ek; ik++) Dk[ik] = kk[ik];
      return Dk
    }

    function Pk(kk, ek, ik) {
      return (ek = function(kk) {
        var ek = function(kk, ek) {
          if ("object" != typeof kk || !kk) return kk;
          var ik = kk[Symbol.toPrimitive];
          if (void 0 !== ik) {
            var Dk = ik.call(kk, ek || "default");
            if ("object" != typeof Dk) return Dk;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ek ? String : Number)(kk)
        }(kk, "string");
        return "symbol" == typeof ek ? ek : ek + ""
      }(ek)) in kk ? Object.defineProperty(kk, ek, {
        value: ik,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[ek] = ik, kk
    }

    function mk(kk, ek) {
      var ik = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Dk = Object.getOwnPropertySymbols(kk);
        ek && (Dk = Dk.filter((function(ek) {
          return Object.getOwnPropertyDescriptor(kk, ek).enumerable
        }))), ik.push.apply(ik, Dk)
      }
      return ik
    }

    function Mk(kk) {
      for (var ek = 1; ek < arguments.length; ek++) {
        var ik = null != arguments[ek] ? arguments[ek] : {};
        ek % 2 ? mk(Object(ik), !0).forEach((function(ek) {
          Pk(kk, ek, ik[ek])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(ik)) : mk(Object(ik)).forEach((function(ek) {
          Object.defineProperty(kk, ek, Object.getOwnPropertyDescriptor(ik, ek))
        }))
      }
      return kk
    }

    function Kk(kk, ek) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, ek) {
        var ik = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != ik) {
          var Dk, fk, Sk, bk, rk = [],
            Pk = !0,
            mk = !1;
          try {
            if (Sk = (ik = ik.call(kk)).next, 0 === ek) {
              if (Object(ik) !== ik) return;
              Pk = !1
            } else
              for (; !(Pk = (Dk = Sk.call(ik)).done) && (rk.push(Dk.value), rk.length !== ek); Pk = !0);
          } catch (kk) {
            mk = !0, fk = kk
          } finally {
            try {
              if (!Pk && null != ik.return && (bk = ik.return(), Object(bk) !== bk)) return
            } finally {
              if (mk) throw fk
            }
          }
          return rk
        }
      }(kk, ek) || Uk(kk, ek) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xk(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return rk(kk)
      }(kk) || function(kk) {
        if ("undefined" != typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || Uk(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nk(kk) {
      return nk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, nk(kk)
    }

    function Uk(kk, ek) {
      if (kk) {
        if ("string" == typeof kk) return rk(kk, ek);
        var ik = {}.toString.call(kk).slice(8, -1);
        return "Object" === ik && kk.constructor && (ik = kk.constructor.name), "Map" === ik || "Set" === ik ? Array.from(kk) : "Arguments" === ik || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ik) ? rk(kk, ek) : void 0
      }
    }
    var Hk;
    try {
      var wk = ik(6528);
      Hk = wk.version
    } catch (dk) {
      Hk = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function lk(kk) {
      var ek = kk.beat,
        ik = kk.fade,
        Dk = kk.beatFade,
        fk = kk.bounce,
        Sk = kk.shake,
        bk = kk.flash,
        rk = kk.spin,
        mk = kk.spinPulse,
        Mk = kk.spinReverse,
        xk = kk.pulse,
        nk = kk.fixedWidth,
        Uk = kk.inverse,
        wk = kk.border,
        lk = kk.listItem,
        pk = kk.flip,
        yk = kk.size,
        Yk = kk.rotation,
        Lk = kk.pull,
        Ck = kk.swapOpacity,
        Ak = kk.rotateBy,
        jk = kk.widthAuto,
        sk = function(kk, ek) {
          for (var ik = Kk(kk.split("-"), 2), Dk = ik[0], fk = ik[1], Sk = Kk(ek.split("-"), 2), bk = Sk[0], rk = Sk[1], Pk = Dk.split("."), mk = bk.split("."), Mk = 0; Mk < Math.max(Pk.length, mk.length); Mk++) {
            var xk = Pk[Mk] || "0",
              nk = mk[Mk] || "0",
              Uk = parseInt(xk, 10),
              Hk = parseInt(nk, 10);
            if (Uk !== Hk) return Uk > Hk
          }
          for (var wk = 0; wk < Math.max(Pk.length, mk.length); wk++) {
            var lk = Pk[wk] || "0",
              pk = mk[wk] || "0";
            if (lk !== pk && lk.length !== pk.length) return lk.length < pk.length
          }
          return !(fk && !rk)
        }(Hk, "7.0.0"),
        dk = Pk(Pk(Pk(Pk(Pk(Pk({
          "fa-beat": ek,
          "fa-fade": ik,
          "fa-beat-fade": Dk,
          "fa-bounce": fk,
          "fa-shake": Sk,
          "fa-flash": bk,
          "fa-spin": rk,
          "fa-spin-reverse": Mk,
          "fa-spin-pulse": mk,
          "fa-pulse": xk,
          "fa-fw": nk,
          "fa-inverse": Uk,
          "fa-border": wk,
          "fa-li": lk,
          "fa-flip": !0 === pk,
          "fa-flip-horizontal": "horizontal" === pk || "both" === pk,
          "fa-flip-vertical": "vertical" === pk || "both" === pk
        }, "fa-".concat(yk), "undefined" !== typeof yk && null !== yk), "fa-rotate-".concat(Yk), "undefined" !== typeof Yk && null !== Yk && 0 !== Yk), "fa-pull-".concat(Lk), "undefined" !== typeof Lk && null !== Lk), "fa-swap-opacity", Ck), "fa-rotate-by", sk && Ak), "fa-width-auto", sk && jk);
      return Object.keys(dk).map((function(kk) {
        return dk[kk] ? kk : null
      })).filter((function(kk) {
        return kk
      }))
    }

    function pk(kk) {
      return ek = kk, (ek -= 0) === ek ? kk : (kk = kk.replace(/[\-_\s]+(.)?/g, (function(kk, ek) {
        return ek ? ek.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + kk.substr(1);
      var ek
    }
    var yk = ["style"];
    var Yk = !1;
    try {
      Yk = !0
    } catch (dk) {}

    function Lk(kk) {
      return kk && "object" === nk(kk) && kk.prefix && kk.iconName && kk.icon ? kk : Dk.parse.icon ? Dk.parse.icon(kk) : null === kk ? null : kk && "object" === nk(kk) && kk.prefix && kk.iconName ? kk : Array.isArray(kk) && 2 === kk.length ? {
        prefix: kk[0],
        iconName: kk[1]
      } : "string" === typeof kk ? {
        prefix: "fas",
        iconName: kk
      } : void 0
    }

    function Ck(kk, ek) {
      return Array.isArray(ek) && ek.length > 0 || !Array.isArray(ek) && ek ? Pk({}, kk, ek) : {}
    }
    var Ak = {
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
      jk = bk.forwardRef((function(kk, ek) {
        var ik = Mk(Mk({}, Ak), kk),
          fk = ik.icon,
          Sk = ik.mask,
          bk = ik.symbol,
          rk = ik.className,
          Pk = ik.title,
          mk = ik.titleId,
          Kk = ik.maskId,
          nk = Lk(fk),
          Uk = Ck("classes", [].concat(xk(lk(ik)), xk((rk || "").split(" ")))),
          Hk = Ck("transform", "string" === typeof ik.transform ? Dk.parse.transform(ik.transform) : ik.transform),
          wk = Ck("mask", Lk(Sk)),
          pk = (0, Dk.icon)(nk, Mk(Mk(Mk(Mk({}, Uk), Hk), wk), {}, {
            symbol: bk,
            title: Pk,
            titleId: mk,
            maskId: Kk
          }));
        if (!pk) return function() {
          var kk;
          !Yk && console && "function" === typeof console.error && (kk = console).error.apply(kk, arguments)
        }("Could not find icon", nk), null;
        var yk = pk.abstract,
          jk = {
            ref: ek
          };
        return Object.keys(ik).forEach((function(kk) {
          Ak.hasOwnProperty(kk) || (jk[kk] = ik[kk])
        })), sk(yk[0], jk)
      }));
    jk.displayName = "FontAwesomeIcon", jk.propTypes = {
      beat: Sk().bool,
      border: Sk().bool,
      beatFade: Sk().bool,
      bounce: Sk().bool,
      className: Sk().string,
      fade: Sk().bool,
      flash: Sk().bool,
      mask: Sk().oneOfType([Sk().object, Sk().array, Sk().string]),
      maskId: Sk().string,
      fixedWidth: Sk().bool,
      inverse: Sk().bool,
      flip: Sk().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: Sk().oneOfType([Sk().object, Sk().array, Sk().string]),
      listItem: Sk().bool,
      pull: Sk().oneOf(["right", "left"]),
      pulse: Sk().bool,
      rotation: Sk().oneOf([0, 90, 180, 270]),
      rotateBy: Sk().bool,
      shake: Sk().bool,
      size: Sk().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: Sk().bool,
      spinPulse: Sk().bool,
      spinReverse: Sk().bool,
      symbol: Sk().oneOfType([Sk().bool, Sk().string]),
      title: Sk().string,
      titleId: Sk().string,
      transform: Sk().oneOfType([Sk().string, Sk().object]),
      swapOpacity: Sk().bool,
      widthAuto: Sk().bool
    };
    var sk = function kk(ek, ik) {
      var Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof ik) return ik;
      var fk = (ik.children || []).map((function(ik) {
          return kk(ek, ik)
        })),
        Sk = Object.keys(ik.attributes || {}).reduce((function(kk, ek) {
          var Dk = ik.attributes[ek];
          switch (ek) {
            case "class":
              kk.attrs.className = Dk, delete ik.attributes.class;
              break;
            case "style":
              kk.attrs.style = Dk.split(";").map((function(kk) {
                return kk.trim()
              })).filter((function(kk) {
                return kk
              })).reduce((function(kk, ek) {
                var ik, Dk = ek.indexOf(":"),
                  fk = pk(ek.slice(0, Dk)),
                  Sk = ek.slice(Dk + 1).trim();
                return fk.startsWith("webkit") ? kk[(ik = fk, ik.charAt(0).toUpperCase() + ik.slice(1))] = Sk : kk[fk] = Sk, kk
              }), {});
              break;
            default:
              0 === ek.indexOf("aria-") || 0 === ek.indexOf("data-") ? kk.attrs[ek.toLowerCase()] = Dk : kk.attrs[pk(ek)] = Dk
          }
          return kk
        }), {
          attrs: {}
        }),
        bk = Dk.style,
        rk = void 0 === bk ? {} : bk,
        Pk = function(kk, ek) {
          if (null == kk) return {};
          var ik, Dk, fk = function(kk, ek) {
            if (null == kk) return {};
            var ik = {};
            for (var Dk in kk)
              if ({}.hasOwnProperty.call(kk, Dk)) {
                if (-1 !== ek.indexOf(Dk)) continue;
                ik[Dk] = kk[Dk]
              } return ik
          }(kk, ek);
          if (Object.getOwnPropertySymbols) {
            var Sk = Object.getOwnPropertySymbols(kk);
            for (Dk = 0; Dk < Sk.length; Dk++) ik = Sk[Dk], -1 === ek.indexOf(ik) && {}.propertyIsEnumerable.call(kk, ik) && (fk[ik] = kk[ik])
          }
          return fk
        }(Dk, yk);
      return Sk.attrs.style = Mk(Mk({}, Sk.attrs.style), rk), ek.apply(void 0, [ik.tag, Mk(Mk({}, Sk.attrs), Pk)].concat(xk(fk)))
    }.bind(null, bk.createElement)
  },
  4902: (kk, ek, ik) => {
    var Dk = ik(4909);

    function fk() {}

    function Sk() {}
    Sk.resetWarningCache = fk, kk.exports = function() {
      function kk(kk, ek, ik, fk, Sk, bk) {
        if (bk !== Dk) {
          var rk = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw rk.name = "Invariant Violation", rk
        }
      }

      function ek() {
        return kk
      }
      kk.isRequired = kk;
      var ik = {
        array: kk,
        bigint: kk,
        bool: kk,
        func: kk,
        number: kk,
        object: kk,
        string: kk,
        symbol: kk,
        any: kk,
        arrayOf: ek,
        element: kk,
        elementType: kk,
        instanceOf: ek,
        node: kk,
        objectOf: ek,
        oneOf: ek,
        oneOfType: ek,
        shape: ek,
        exact: ek,
        checkPropTypes: Sk,
        resetWarningCache: fk
      };
      return ik.PropTypes = ik, ik
    }
  },
  4893: (kk, ek, ik) => {
    kk.exports = ik(4902)()
  },
  4909: kk => {
    kk.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6523: (kk, ek, ik) => {
    function Dk(kk, ek) {
      (null == ek || ek > kk.length) && (ek = kk.length);
      for (var ik = 0, Dk = Array(ek); ik < ek; ik++) Dk[ik] = kk[ik];
      return Dk
    }

    function fk(kk, ek) {
      for (var ik = 0; ik < ek.length; ik++) {
        var Dk = ek[ik];
        Dk.enumerable = Dk.enumerable || !1, Dk.configurable = !0, "value" in Dk && (Dk.writable = !0), Object.defineProperty(kk, Kk(Dk.key), Dk)
      }
    }

    function Sk(kk, ek) {
      var ik = "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
      if (!ik) {
        if (Array.isArray(kk) || (ik = nk(kk)) || ek && kk && "number" == typeof kk.length) {
          ik && (kk = ik);
          var Dk = 0,
            fk = function() {};
          return {
            s: fk,
            n: function() {
              return Dk >= kk.length ? {
                done: !0
              } : {
                done: !1,
                value: kk[Dk++]
              }
            },
            e: function(kk) {
              throw kk
            },
            f: fk
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Sk, bk = !0,
        rk = !1;
      return {
        s: function() {
          ik = ik.call(kk)
        },
        n: function() {
          var kk = ik.next();
          return bk = kk.done, kk
        },
        e: function(kk) {
          rk = !0, Sk = kk
        },
        f: function() {
          try {
            bk || null == ik.return || ik.return()
          } finally {
            if (rk) throw Sk
          }
        }
      }
    }

    function bk(kk, ek, ik) {
      return (ek = Kk(ek)) in kk ? Object.defineProperty(kk, ek, {
        value: ik,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[ek] = ik, kk
    }

    function rk(kk, ek) {
      var ik = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Dk = Object.getOwnPropertySymbols(kk);
        ek && (Dk = Dk.filter((function(ek) {
          return Object.getOwnPropertyDescriptor(kk, ek).enumerable
        }))), ik.push.apply(ik, Dk)
      }
      return ik
    }

    function Pk(kk) {
      for (var ek = 1; ek < arguments.length; ek++) {
        var ik = null != arguments[ek] ? arguments[ek] : {};
        ek % 2 ? rk(Object(ik), !0).forEach((function(ek) {
          bk(kk, ek, ik[ek])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(ik)) : rk(Object(ik)).forEach((function(ek) {
          Object.defineProperty(kk, ek, Object.getOwnPropertyDescriptor(ik, ek))
        }))
      }
      return kk
    }

    function mk(kk, ek) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, ek) {
        var ik = null == kk ? null : "undefined" != typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null != ik) {
          var Dk, fk, Sk, bk, rk = [],
            Pk = !0,
            mk = !1;
          try {
            if (Sk = (ik = ik.call(kk)).next, 0 === ek) {
              if (Object(ik) !== ik) return;
              Pk = !1
            } else
              for (; !(Pk = (Dk = Sk.call(ik)).done) && (rk.push(Dk.value), rk.length !== ek); Pk = !0);
          } catch (kk) {
            mk = !0, fk = kk
          } finally {
            try {
              if (!Pk && null != ik.return && (bk = ik.return(), Object(bk) !== bk)) return
            } finally {
              if (mk) throw fk
            }
          }
          return rk
        }
      }(kk, ek) || nk(kk, ek) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Mk(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return Dk(kk)
      }(kk) || function(kk) {
        if ("undefined" != typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || nk(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Kk(kk) {
      var ek = function(kk, ek) {
        if ("object" != typeof kk || !kk) return kk;
        var ik = kk[Symbol.toPrimitive];
        if (void 0 !== ik) {
          var Dk = ik.call(kk, ek || "default");
          if ("object" != typeof Dk) return Dk;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ek ? String : Number)(kk)
      }(kk, "string");
      return "symbol" == typeof ek ? ek : ek + ""
    }

    function xk(kk) {
      return xk = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(kk) {
        return typeof kk
      } : function(kk) {
        return kk && "function" == typeof Symbol && kk.constructor === Symbol && kk !== Symbol.prototype ? "symbol" : typeof kk
      }, xk(kk)
    }

    function nk(kk, ek) {
      if (kk) {
        if ("string" == typeof kk) return Dk(kk, ek);
        var ik = {}.toString.call(kk).slice(8, -1);
        return "Object" === ik && kk.constructor && (ik = kk.constructor.name), "Map" === ik || "Set" === ik ? Array.from(kk) : "Arguments" === ik || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ik) ? Dk(kk, ek) : void 0
      }
    }
    ik.r(ek), ik.d(ek, {
      api: () => Ji,
      config: () => bf,
      counter: () => Hf,
      dom: () => Pf,
      findIconDefinition: () => Mf,
      icon: () => xf,
      layer: () => nf,
      library: () => rf,
      noAuto: () => Sf,
      parse: () => mf,
      text: () => Uf,
      toHtml: () => Kf
    });
    var Uk = function() {},
      Hk = {},
      wk = {},
      lk = null,
      pk = {
        mark: Uk,
        measure: Uk
      };
    try {
      "undefined" !== typeof window && (Hk = window), "undefined" !== typeof document && (wk = document), "undefined" !== typeof MutationObserver && (lk = MutationObserver), "undefined" !== typeof performance && (pk = performance)
    } catch (ck) {}
    var yk, Yk, Lk = (Hk.navigator || {}).userAgent,
      Ck = void 0 === Lk ? "" : Lk,
      Ak = Hk,
      jk = wk,
      sk = lk,
      dk = pk,
      Vk = (Ak.document, !!jk.documentElement && !!jk.head && "function" === typeof jk.addEventListener && "function" === typeof jk.createElement),
      Fk = ~Ck.indexOf("MSIE") || ~Ck.indexOf("Trident/"),
      uk = {
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
      qk = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      Ik = "classic",
      zk = "duotone",
      Qk = "sharp",
      vk = "sharp-duotone",
      Ek = "chisel",
      hk = "etch",
      ak = "graphite",
      Wk = "jelly",
      tk = "jelly-duo",
      Xk = "jelly-fill",
      Bk = "notdog",
      ck = "notdog-duo",
      Tk = "slab",
      Zk = "slab-press",
      Ok = "thumbprint",
      gk = "utility",
      Gk = "utility-duo",
      Nk = "utility-fill",
      Rk = "whiteboard",
      Jk = [Ik, zk, Qk, vk, Ek, hk, ak, Wk, tk, Xk, Bk, ck, Tk, Zk, Ok, gk, Gk, Nk, Rk],
      ke = (bk(bk(bk(bk(bk(bk(bk(bk(bk(bk(yk = {}, Ik, "Classic"), zk, "Duotone"), Qk, "Sharp"), vk, "Sharp Duotone"), Ek, "Chisel"), hk, "Etch"), ak, "Graphite"), Wk, "Jelly"), tk, "Jelly Duo"), Xk, "Jelly Fill"), bk(bk(bk(bk(bk(bk(bk(bk(bk(yk, Bk, "Notdog"), ck, "Notdog Duo"), Tk, "Slab"), Zk, "Slab Press"), Ok, "Thumbprint"), gk, "Utility"), Gk, "Utility Duo"), Nk, "Utility Fill"), Rk, "Whiteboard"), new Map([
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
      ee = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      ie = {
        fak: "kit",
        "fa-kit": "kit"
      },
      De = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      fe = (bk(bk({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      Se = {
        "kit-duotone": "fakd"
      },
      be = "duotone-group",
      re = "swap-opacity",
      Pe = "primary",
      me = "secondary",
      Me = (bk(bk(bk(bk(bk(bk(bk(bk(bk(bk(Yk = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), bk(bk(bk(bk(bk(bk(bk(bk(bk(Yk, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), bk(bk({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      Ke = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      xe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      ne = xe.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      Ue = [].concat(Mk(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", be, re, Pe, me]).concat(xe.map((function(kk) {
        return "".concat(kk, "x")
      }))).concat(ne.map((function(kk) {
        return "w-".concat(kk)
      }))),
      He = "___FONT_AWESOME___",
      we = "svg-inline--fa",
      le = "data-fa-i2svg",
      pe = "data-fa-pseudo-element",
      ye = "data-prefix",
      Ye = "data-icon",
      Le = "fontawesome-i2svg",
      Ce = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      Ae = ["::before", "::after", ":before", ":after"],
      je = function() {
        try {
          return !0
        } catch (kk) {
          return !1
        }
      }();

    function se(kk) {
      return new Proxy(kk, {
        get: function(kk, ek) {
          return ek in kk ? kk[ek] : kk[Ik]
        }
      })
    }
    var de = Pk({}, uk);
    de[Ik] = Pk(Pk(Pk(Pk({}, {
      "fa-duotone": "duotone"
    }), uk[Ik]), ie), De);
    var Ve = se(de),
      Fe = Pk({}, {
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
    Fe[Ik] = Pk(Pk(Pk(Pk({}, {
      duotone: "fad"
    }), Fe[Ik]), fe), Se);
    var ue = se(Fe),
      qe = Pk({}, Me);
    qe[Ik] = Pk(Pk({}, qe[Ik]), {
      fak: "fa-kit"
    });
    var Ie = se(qe),
      ze = Pk({}, {
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
    ze[Ik] = Pk(Pk({}, ze[Ik]), {
      "fa-kit": "fak"
    });
    se(ze);
    var Qe = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      ve = "fa-layers-text",
      Ee = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      he = (se(Pk({}, {
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
      ae = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      We = [].concat(Mk(["kit"]), Mk(Ue)),
      te = Ak.FontAwesomeConfig || {};
    if (jk && "function" === typeof jk.querySelector) {
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
        var ek = mk(kk, 2),
          ik = ek[0],
          Dk = ek[1],
          fk = function(kk) {
            return "" === kk || "false" !== kk && ("true" === kk || kk)
          }(function(kk) {
            var ek = jk.querySelector("script[" + kk + "]");
            if (ek) return ek.getAttribute(kk)
          }(ik));
        void 0 !== fk && null !== fk && (te[Dk] = fk)
      }))
    }
    var Xe = {
      styleDefault: "solid",
      familyDefault: Ik,
      cssPrefix: "fa",
      replacementClass: we,
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
    te.familyPrefix && (te.cssPrefix = te.familyPrefix);
    var Be = Pk(Pk({}, Xe), te);
    Be.autoReplaceSvg || (Be.observeMutations = !1);
    var ce = {};
    Object.keys(Xe).forEach((function(kk) {
      Object.defineProperty(ce, kk, {
        enumerable: !0,
        set: function(ek) {
          Be[kk] = ek, Te.forEach((function(kk) {
            return kk(ce)
          }))
        },
        get: function() {
          return Be[kk]
        }
      })
    })), Object.defineProperty(ce, "familyPrefix", {
      enumerable: !0,
      set: function(kk) {
        Be.cssPrefix = kk, Te.forEach((function(kk) {
          return kk(ce)
        }))
      },
      get: function() {
        return Be.cssPrefix
      }
    }), Ak.FontAwesomeConfig = ce;
    var Te = [];
    var oe = 16,
      Ze = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function Oe() {
      for (var kk = 12, ek = ""; kk-- > 0;) ek += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return ek
    }

    function ge(kk) {
      for (var ek = [], ik = (kk || []).length >>> 0; ik--;) ek[ik] = kk[ik];
      return ek
    }

    function Ge(kk) {
      return kk.classList ? ge(kk.classList) : (kk.getAttribute("class") || "").split(" ").filter((function(kk) {
        return kk
      }))
    }

    function Ne(kk) {
      return "".concat(kk).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Re(kk) {
      return Object.keys(kk || {}).reduce((function(ek, ik) {
        return ek + "".concat(ik, ": ").concat(kk[ik].trim(), ";")
      }), "")
    }

    function Je(kk) {
      return kk.size !== Ze.size || kk.x !== Ze.x || kk.y !== Ze.y || kk.rotate !== Ze.rotate || kk.flipX || kk.flipY
    }

    function ki() {
      var kk = "fa",
        ek = we,
        ik = ce.cssPrefix,
        Dk = ce.replacementClass,
        fk = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (ik !== kk || Dk !== ek) {
        var Sk = new RegExp("\\.".concat(kk, "\\-"), "g"),
          bk = new RegExp("\\--".concat(kk, "\\-"), "g"),
          rk = new RegExp("\\.".concat(ek), "g");
        fk = fk.replace(Sk, ".".concat(ik, "-")).replace(bk, "--".concat(ik, "-")).replace(rk, ".".concat(Dk))
      }
      return fk
    }
    var ei = !1;

    function ii() {
      ce.autoAddCss && !ei && (! function(kk) {
        if (kk && Vk) {
          var ek = jk.createElement("style");
          ek.setAttribute("type", "text/css"), ek.innerHTML = kk;
          for (var ik = jk.head.childNodes, Dk = null, fk = ik.length - 1; fk > -1; fk--) {
            var Sk = ik[fk],
              bk = (Sk.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(bk) > -1 && (Dk = Sk)
          }
          jk.head.insertBefore(ek, Dk)
        }
      }(ki()), ei = !0)
    }
    var Di = {
        mixout: function() {
          return {
            dom: {
              css: ki,
              insertCss: ii
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              ii()
            },
            beforeI2svg: function() {
              ii()
            }
          }
        }
      },
      fi = Ak || {};
    fi[He] || (fi[He] = {}), fi[He].styles || (fi[He].styles = {}), fi[He].hooks || (fi[He].hooks = {}), fi[He].shims || (fi[He].shims = []);
    var Si = fi[He],
      bi = [],
      ri = function() {
        jk.removeEventListener("DOMContentLoaded", ri), Pi = 1, bi.map((function(kk) {
          return kk()
        }))
      },
      Pi = !1;

    function mi(kk) {
      var ek = kk.tag,
        ik = kk.attributes,
        Dk = void 0 === ik ? {} : ik,
        fk = kk.children,
        Sk = void 0 === fk ? [] : fk;
      return "string" === typeof kk ? Ne(kk) : "<".concat(ek, " ").concat(function(kk) {
        return Object.keys(kk || {}).reduce((function(ek, ik) {
          return ek + "".concat(ik, '="').concat(Ne(kk[ik]), '" ')
        }), "").trim()
      }(Dk), ">").concat(Sk.map(mi).join(""), "</").concat(ek, ">")
    }

    function Mi(kk, ek, ik) {
      if (kk && kk[ek] && kk[ek][ik]) return {
        prefix: ek,
        iconName: ik,
        icon: kk[ek][ik]
      }
    }
    Vk && ((Pi = (jk.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(jk.readyState)) || jk.addEventListener("DOMContentLoaded", ri));
    var Ki = function(kk, ek, ik, Dk) {
      var fk, Sk, bk, rk = Object.keys(kk),
        Pk = rk.length,
        mk = void 0 !== Dk ? function(kk, ek) {
          return function(ik, Dk, fk, Sk) {
            return kk.call(ek, ik, Dk, fk, Sk)
          }
        }(ek, Dk) : ek;
      for (void 0 === ik ? (fk = 1, bk = kk[rk[0]]) : (fk = 0, bk = ik); fk < Pk; fk++) bk = mk(bk, kk[Sk = rk[fk]], Sk, kk);
      return bk
    };

    function xi(kk) {
      return 1 !== Mk(kk).length ? null : kk.codePointAt(0).toString(16)
    }

    function ni(kk) {
      return Object.keys(kk).reduce((function(ek, ik) {
        var Dk = kk[ik];
        return !!Dk.icon ? ek[Dk.iconName] = Dk.icon : ek[ik] = Dk, ek
      }), {})
    }

    function Ui(kk, ek) {
      var ik = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        Dk = void 0 !== ik && ik,
        fk = ni(ek);
      "function" !== typeof Si.hooks.addPack || Dk ? Si.styles[kk] = Pk(Pk({}, Si.styles[kk] || {}), fk) : Si.hooks.addPack(kk, ni(ek)), "fas" === kk && Ui("fa", ek)
    }
    var Hi = Si.styles,
      wi = Si.shims,
      li = Object.keys(Ie),
      yi = li.reduce((function(kk, ek) {
        return kk[ek] = Object.keys(Ie[ek]), kk
      }), {}),
      Yi = null,
      Li = {},
      Ci = {},
      Ai = {},
      ji = {},
      si = {};

    function di(kk, ek) {
      var ik, Dk = ek.split("-"),
        fk = Dk[0],
        Sk = Dk.slice(1).join("-");
      return fk !== kk || "" === Sk || (ik = Sk, ~We.indexOf(ik)) ? null : Sk
    }
    var Vi, Fi = function() {
      var kk = function(kk) {
        return Ki(Hi, (function(ek, ik, Dk) {
          return ek[Dk] = Ki(ik, kk, {}), ek
        }), {})
      };
      Li = kk((function(kk, ek, ik) {
        (ek[3] && (kk[ek[3]] = ik), ek[2]) && ek[2].filter((function(kk) {
          return "number" === typeof kk
        })).forEach((function(ek) {
          kk[ek.toString(16)] = ik
        }));
        return kk
      })), Ci = kk((function(kk, ek, ik) {
        (kk[ik] = ik, ek[2]) && ek[2].filter((function(kk) {
          return "string" === typeof kk
        })).forEach((function(ek) {
          kk[ek] = ik
        }));
        return kk
      })), si = kk((function(kk, ek, ik) {
        var Dk = ek[2];
        return kk[ik] = ik, Dk.forEach((function(ek) {
          kk[ek] = ik
        })), kk
      }));
      var ek = "far" in Hi || ce.autoFetchSvg,
        ik = Ki(wi, (function(kk, ik) {
          var Dk = ik[0],
            fk = ik[1],
            Sk = ik[2];
          return "far" !== fk || ek || (fk = "fas"), "string" === typeof Dk && (kk.names[Dk] = {
            prefix: fk,
            iconName: Sk
          }), "number" === typeof Dk && (kk.unicodes[Dk.toString(16)] = {
            prefix: fk,
            iconName: Sk
          }), kk
        }), {
          names: {},
          unicodes: {}
        });
      Ai = ik.names, ji = ik.unicodes, Yi = Qi(ce.styleDefault, {
        family: ce.familyDefault
      })
    };

    function ui(kk, ek) {
      return (Li[kk] || {})[ek]
    }

    function qi(kk, ek) {
      return (si[kk] || {})[ek]
    }

    function Ii(kk) {
      return Ai[kk] || {
        prefix: null,
        iconName: null
      }
    }

    function zi() {
      return Yi
    }
    Vi = function(kk) {
      Yi = Qi(kk.styleDefault, {
        family: ce.familyDefault
      })
    }, Te.push(Vi), Fi();

    function Qi(kk) {
      var ek = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        ik = void 0 === ek ? Ik : ek,
        Dk = Ve[ik][kk];
      if (ik === zk && !kk) return "fad";
      var fk = ue[ik][kk] || ue[ik][Dk],
        Sk = kk in Si.styles ? kk : null;
      return fk || Sk || null
    }

    function vi(kk) {
      return kk.sort().filter((function(kk, ek, ik) {
        return ik.indexOf(kk) === ek
      }))
    }
    var Ei = Ke.concat(ee);

    function ai(kk) {
      var ek = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        ik = void 0 !== ek && ek,
        Dk = null,
        fk = vi(kk.filter((function(kk) {
          return Ei.includes(kk)
        }))),
        Sk = vi(kk.filter((function(kk) {
          return !Ei.includes(kk)
        }))),
        bk = mk(fk.filter((function(kk) {
          return Dk = kk, !qk.includes(kk)
        })), 1)[0],
        rk = void 0 === bk ? null : bk,
        Mk = function(kk) {
          var ek = Ik,
            ik = li.reduce((function(kk, ek) {
              return kk[ek] = "".concat(ce.cssPrefix, "-").concat(ek), kk
            }), {});
          return Jk.forEach((function(Dk) {
            (kk.includes(ik[Dk]) || kk.some((function(kk) {
              return yi[Dk].includes(kk)
            }))) && (ek = Dk)
          })), ek
        }(fk),
        Kk = Pk(Pk({}, function(kk) {
          var ek = [],
            ik = null;
          return kk.forEach((function(kk) {
            var Dk = di(ce.cssPrefix, kk);
            Dk ? ik = Dk : kk && ek.push(kk)
          })), {
            iconName: ik,
            rest: ek
          }
        }(Sk)), {}, {
          prefix: Qi(rk, {
            family: Mk
          })
        });
      return Pk(Pk(Pk({}, Kk), function(kk) {
        var ek = kk.values,
          ik = kk.family,
          Dk = kk.canonical,
          fk = kk.givenPrefix,
          Sk = void 0 === fk ? "" : fk,
          bk = kk.styles,
          rk = void 0 === bk ? {} : bk,
          Pk = kk.config,
          mk = void 0 === Pk ? {} : Pk,
          Mk = ik === zk,
          Kk = ek.includes("fa-duotone") || ek.includes("fad"),
          xk = "duotone" === mk.familyDefault,
          nk = "fad" === Dk.prefix || "fa-duotone" === Dk.prefix;
        !Mk && (Kk || xk || nk) && (Dk.prefix = "fad");
        (ek.includes("fa-brands") || ek.includes("fab")) && (Dk.prefix = "fab");
        if (!Dk.prefix && Wi.includes(ik)) {
          if (Object.keys(rk).find((function(kk) {
              return ti.includes(kk)
            })) || mk.autoFetchSvg) {
            var Uk = ke.get(ik).defaultShortPrefixId;
            Dk.prefix = Uk, Dk.iconName = qi(Dk.prefix, Dk.iconName) || Dk.iconName
          }
        }
        "fa" !== Dk.prefix && "fa" !== Sk || (Dk.prefix = zi() || "fas");
        return Dk
      }({
        values: kk,
        family: Mk,
        styles: Hi,
        config: ce,
        canonical: Kk,
        givenPrefix: Dk
      })), function(kk, ek, ik) {
        var Dk = ik.prefix,
          fk = ik.iconName;
        if (kk || !Dk || !fk) return {
          prefix: Dk,
          iconName: fk
        };
        var Sk = "fa" === ek ? Ii(fk) : {},
          bk = qi(Dk, fk);
        fk = Sk.iconName || bk || fk, "far" !== (Dk = Sk.prefix || Dk) || Hi.far || !Hi.fas || ce.autoFetchSvg || (Dk = "fas");
        return {
          prefix: Dk,
          iconName: fk
        }
      }(ik, Dk, Kk))
    }
    var Wi = Jk.filter((function(kk) {
        return kk !== Ik || kk !== zk
      })),
      ti = Object.keys(Me).filter((function(kk) {
        return kk !== Ik
      })).map((function(kk) {
        return Object.keys(Me[kk])
      })).flat();
    var Xi = function() {
        return function(kk, ek, ik) {
          return ek && fk(kk.prototype, ek), ik && fk(kk, ik), Object.defineProperty(kk, "prototype", {
            writable: !1
          }), kk
        }((function kk() {
          ! function(kk, ek) {
            if (!(kk instanceof ek)) throw new TypeError("Cannot call a class as a function")
          }(this, kk), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var kk = this, ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
            var fk = ik.reduce(this._pullDefinitions, {});
            Object.keys(fk).forEach((function(ek) {
              kk.definitions[ek] = Pk(Pk({}, kk.definitions[ek] || {}), fk[ek]), Ui(ek, fk[ek]);
              var ik = Ie[Ik][ek];
              ik && Ui(ik, fk[ek]), Fi()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(kk, ek) {
            var ik = ek.prefix && ek.iconName && ek.icon ? {
              0: ek
            } : ek;
            return Object.keys(ik).map((function(ek) {
              var Dk = ik[ek],
                fk = Dk.prefix,
                Sk = Dk.iconName,
                bk = Dk.icon,
                rk = bk[2];
              kk[fk] || (kk[fk] = {}), rk.length > 0 && rk.forEach((function(ek) {
                "string" === typeof ek && (kk[fk][ek] = bk)
              })), kk[fk][Sk] = bk
            })), kk
          }
        }])
      }(),
      Bi = [],
      ci = {},
      Ti = {},
      oi = Object.keys(Ti);

    function Zi(kk, ek) {
      for (var ik = arguments.length, Dk = new Array(ik > 2 ? ik - 2 : 0), fk = 2; fk < ik; fk++) Dk[fk - 2] = arguments[fk];
      return (ci[kk] || []).forEach((function(kk) {
        ek = kk.apply(null, [ek].concat(Dk))
      })), ek
    }

    function Oi(kk) {
      for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
      (ci[kk] || []).forEach((function(kk) {
        kk.apply(null, ik)
      }))
    }

    function gi() {
      var kk = arguments[0],
        ek = Array.prototype.slice.call(arguments, 1);
      return Ti[kk] ? Ti[kk].apply(null, ek) : void 0
    }

    function Gi(kk) {
      "fa" === kk.prefix && (kk.prefix = "fas");
      var ek = kk.iconName,
        ik = kk.prefix || zi();
      if (ek) return ek = qi(ik, ek) || ek, Mi(Ni.definitions, ik, ek) || Mi(Si.styles, ik, ek)
    }
    var Ni = new Xi,
      Ri = {
        i2svg: function() {
          var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Vk ? (Oi("beforeI2svg", kk), gi("pseudoElements2svg", kk), gi("i2svg", kk)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var kk, ek = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            ik = ek.autoReplaceSvgRoot;
          !1 === ce.autoReplaceSvg && (ce.autoReplaceSvg = !0), ce.observeMutations = !0, kk = function() {
            kD({
              autoReplaceSvgRoot: ik
            }), Oi("watch", ek)
          }, Vk && (Pi ? setTimeout(kk, 0) : bi.push(kk))
        }
      },
      Ji = {
        noAuto: function() {
          ce.autoReplaceSvg = !1, ce.observeMutations = !1, Oi("noAuto")
        },
        config: ce,
        dom: Ri,
        parse: {
          icon: function(kk) {
            if (null === kk) return null;
            if ("object" === xk(kk) && kk.prefix && kk.iconName) return {
              prefix: kk.prefix,
              iconName: qi(kk.prefix, kk.iconName) || kk.iconName
            };
            if (Array.isArray(kk) && 2 === kk.length) {
              var ek = 0 === kk[1].indexOf("fa-") ? kk[1].slice(3) : kk[1],
                ik = Qi(kk[0]);
              return {
                prefix: ik,
                iconName: qi(ik, ek) || ek
              }
            }
            if ("string" === typeof kk && (kk.indexOf("".concat(ce.cssPrefix, "-")) > -1 || kk.match(Qe))) {
              var Dk = ai(kk.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: Dk.prefix || zi(),
                iconName: qi(Dk.prefix, Dk.iconName) || Dk.iconName
              }
            }
            if ("string" === typeof kk) {
              var fk = zi();
              return {
                prefix: fk,
                iconName: qi(fk, kk) || kk
              }
            }
          }
        },
        library: Ni,
        findIconDefinition: Gi,
        toHtml: mi
      },
      kD = function() {
        var kk = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          ek = void 0 === kk ? jk : kk;
        (Object.keys(Si.styles).length > 0 || ce.autoFetchSvg) && Vk && ce.autoReplaceSvg && Ji.dom.i2svg({
          node: ek
        })
      };

    function eD(kk, ek) {
      return Object.defineProperty(kk, "abstract", {
        get: ek
      }), Object.defineProperty(kk, "html", {
        get: function() {
          return kk.abstract.map((function(kk) {
            return mi(kk)
          }))
        }
      }), Object.defineProperty(kk, "node", {
        get: function() {
          if (Vk) {
            var ek = jk.createElement("div");
            return ek.innerHTML = kk.html, ek.children
          }
        }
      }), kk
    }

    function iD(kk) {
      var ek = kk.icons,
        ik = ek.main,
        Dk = ek.mask,
        fk = kk.prefix,
        Sk = kk.iconName,
        bk = kk.transform,
        rk = kk.symbol,
        mk = kk.maskId,
        Mk = kk.extra,
        Kk = kk.watchable,
        xk = void 0 !== Kk && Kk,
        nk = Dk.found ? Dk : ik,
        Uk = nk.width,
        Hk = nk.height,
        wk = [ce.replacementClass, Sk ? "".concat(ce.cssPrefix, "-").concat(Sk) : ""].filter((function(kk) {
          return -1 === Mk.classes.indexOf(kk)
        })).filter((function(kk) {
          return "" !== kk || !!kk
        })).concat(Mk.classes).join(" "),
        lk = {
          children: [],
          attributes: Pk(Pk({}, Mk.attributes), {}, {
            "data-prefix": fk,
            "data-icon": Sk,
            class: wk,
            role: Mk.attributes.role || "img",
            viewBox: "0 0 ".concat(Uk, " ").concat(Hk)
          })
        };
      (function(kk) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(ek) {
          return ek in kk
        }))
      })(Mk.attributes) || Mk.attributes["aria-hidden"] || (lk.attributes["aria-hidden"] = "true"), xk && (lk.attributes[le] = "");
      var pk = Pk(Pk({}, lk), {}, {
          prefix: fk,
          iconName: Sk,
          main: ik,
          mask: Dk,
          maskId: mk,
          transform: bk,
          symbol: rk,
          styles: Pk({}, Mk.styles)
        }),
        yk = Dk.found && ik.found ? gi("generateAbstractMask", pk) || {
          children: [],
          attributes: {}
        } : gi("generateAbstractIcon", pk) || {
          children: [],
          attributes: {}
        },
        Yk = yk.children,
        Lk = yk.attributes;
      return pk.children = Yk, pk.attributes = Lk, rk ? function(kk) {
        var ek = kk.prefix,
          ik = kk.iconName,
          Dk = kk.children,
          fk = kk.attributes,
          Sk = kk.symbol,
          bk = !0 === Sk ? "".concat(ek, "-").concat(ce.cssPrefix, "-").concat(ik) : Sk;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: Pk(Pk({}, fk), {}, {
              id: bk
            }),
            children: Dk
          }]
        }]
      }(pk) : function(kk) {
        var ek = kk.children,
          ik = kk.main,
          Dk = kk.mask,
          fk = kk.attributes,
          Sk = kk.styles,
          bk = kk.transform;
        if (Je(bk) && ik.found && !Dk.found) {
          var rk = {
            x: ik.width / ik.height / 2,
            y: .5
          };
          fk.style = Re(Pk(Pk({}, Sk), {}, {
            "transform-origin": "".concat(rk.x + bk.x / 16, "em ").concat(rk.y + bk.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: fk,
          children: ek
        }]
      }(pk)
    }

    function DD(kk) {
      var ek = kk.content,
        ik = kk.width,
        Dk = kk.height,
        fk = kk.transform,
        Sk = kk.extra,
        bk = kk.watchable,
        rk = void 0 !== bk && bk,
        mk = Pk(Pk({}, Sk.attributes), {}, {
          class: Sk.classes.join(" ")
        });
      rk && (mk[le] = "");
      var Mk = Pk({}, Sk.styles);
      Je(fk) && (Mk.transform = function(kk) {
        var ek = kk.transform,
          ik = kk.width,
          Dk = void 0 === ik ? 16 : ik,
          fk = kk.height,
          Sk = void 0 === fk ? 16 : fk,
          bk = kk.startCentered,
          rk = void 0 !== bk && bk,
          Pk = "";
        return Pk += rk && Fk ? "translate(".concat(ek.x / oe - Dk / 2, "em, ").concat(ek.y / oe - Sk / 2, "em) ") : rk ? "translate(calc(-50% + ".concat(ek.x / oe, "em), calc(-50% + ").concat(ek.y / oe, "em)) ") : "translate(".concat(ek.x / oe, "em, ").concat(ek.y / oe, "em) "), Pk += "scale(".concat(ek.size / oe * (ek.flipX ? -1 : 1), ", ").concat(ek.size / oe * (ek.flipY ? -1 : 1), ") "), Pk + "rotate(".concat(ek.rotate, "deg) ")
      }({
        transform: fk,
        startCentered: !0,
        width: ik,
        height: Dk
      }), Mk["-webkit-transform"] = Mk.transform);
      var Kk = Re(Mk);
      Kk.length > 0 && (mk.style = Kk);
      var xk = [];
      return xk.push({
        tag: "span",
        attributes: mk,
        children: [ek]
      }), xk
    }
    var fD = Si.styles;

    function SD(kk) {
      var ek = kk[0],
        ik = kk[1],
        Dk = mk(kk.slice(4), 1)[0];
      return {
        found: !0,
        width: ek,
        height: ik,
        icon: Array.isArray(Dk) ? {
          tag: "g",
          attributes: {
            class: "".concat(ce.cssPrefix, "-").concat(ae.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(ce.cssPrefix, "-").concat(ae.SECONDARY),
              fill: "currentColor",
              d: Dk[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(ce.cssPrefix, "-").concat(ae.PRIMARY),
              fill: "currentColor",
              d: Dk[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: Dk
          }
        }
      }
    }
    var bD = {
      found: !1,
      width: 512,
      height: 512
    };

    function rD(kk, ek) {
      var ik = ek;
      return "fa" === ek && null !== ce.styleDefault && (ek = zi()), new Promise((function(Dk, fk) {
        if ("fa" === ik) {
          var Sk = Ii(kk) || {};
          kk = Sk.iconName || kk, ek = Sk.prefix || ek
        }
        if (kk && ek && fD[ek] && fD[ek][kk]) return Dk(SD(fD[ek][kk]));
        ! function(kk, ek) {
          je || ce.showMissingIcons || !kk || console.error('Icon with name "'.concat(kk, '" and prefix "').concat(ek, '" is missing.'))
        }(kk, ek), Dk(Pk(Pk({}, bD), {}, {
          icon: ce.showMissingIcons && kk && gi("missingIconAbstract") || {}
        }))
      }))
    }
    var PD = function() {},
      mD = ce.measurePerformance && dk && dk.mark && dk.measure ? dk : {
        mark: PD,
        measure: PD
      },
      MD = 'FA "7.2.0"',
      KD = function(kk) {
        mD.mark("".concat(MD, " ").concat(kk, " ends")), mD.measure("".concat(MD, " ").concat(kk), "".concat(MD, " ").concat(kk, " begins"), "".concat(MD, " ").concat(kk, " ends"))
      },
      xD = function(kk) {
        return mD.mark("".concat(MD, " ").concat(kk, " begins")),
          function() {
            return KD(kk)
          }
      },
      nD = function() {};

    function UD(kk) {
      return "string" === typeof(kk.getAttribute ? kk.getAttribute(le) : null)
    }

    function HD(kk) {
      return jk.createElementNS("http://www.w3.org/2000/svg", kk)
    }

    function wD(kk) {
      return jk.createElement(kk)
    }

    function lD(kk) {
      var ek = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        ik = void 0 === ek ? "svg" === kk.tag ? HD : wD : ek;
      if ("string" === typeof kk) return jk.createTextNode(kk);
      var Dk = ik(kk.tag);
      return Object.keys(kk.attributes || []).forEach((function(ek) {
        Dk.setAttribute(ek, kk.attributes[ek])
      })), (kk.children || []).forEach((function(kk) {
        Dk.appendChild(lD(kk, {
          ceFn: ik
        }))
      })), Dk
    }
    var pD = {
      replace: function(kk) {
        var ek = kk[0];
        if (ek.parentNode)
          if (kk[1].forEach((function(kk) {
              ek.parentNode.insertBefore(lD(kk), ek)
            })), null === ek.getAttribute(le) && ce.keepOriginalSource) {
            var ik = jk.createComment(function(kk) {
              var ek = " ".concat(kk.outerHTML, " ");
              return "".concat(ek, "Font Awesome fontawesome.com ")
            }(ek));
            ek.parentNode.replaceChild(ik, ek)
          } else ek.remove()
      },
      nest: function(kk) {
        var ek = kk[0],
          ik = kk[1];
        if (~Ge(ek).indexOf(ce.replacementClass)) return pD.replace(kk);
        var Dk = new RegExp("".concat(ce.cssPrefix, "-.*"));
        if (delete ik[0].attributes.id, ik[0].attributes.class) {
          var fk = ik[0].attributes.class.split(" ").reduce((function(kk, ek) {
            return ek === ce.replacementClass || ek.match(Dk) ? kk.toSvg.push(ek) : kk.toNode.push(ek), kk
          }), {
            toNode: [],
            toSvg: []
          });
          ik[0].attributes.class = fk.toSvg.join(" "), 0 === fk.toNode.length ? ek.removeAttribute("class") : ek.setAttribute("class", fk.toNode.join(" "))
        }
        var Sk = ik.map((function(kk) {
          return mi(kk)
        })).join("\n");
        ek.setAttribute(le, ""), ek.innerHTML = Sk
      }
    };

    function yD(kk) {
      kk()
    }

    function YD(kk, ek) {
      var ik = "function" === typeof ek ? ek : nD;
      if (0 === kk.length) ik();
      else {
        var Dk = yD;
        "async" === ce.mutateApproach && (Dk = Ak.requestAnimationFrame || yD), Dk((function() {
          var ek = !0 === ce.autoReplaceSvg ? pD.replace : pD[ce.autoReplaceSvg] || pD.replace,
            Dk = xD("mutate");
          kk.map(ek), Dk(), ik()
        }))
      }
    }
    var LD = !1;

    function CD() {
      LD = !0
    }

    function AD() {
      LD = !1
    }
    var jD = null;

    function sD(kk) {
      if (sk && ce.observeMutations) {
        var ek = kk.treeCallback,
          ik = void 0 === ek ? nD : ek,
          Dk = kk.nodeCallback,
          fk = void 0 === Dk ? nD : Dk,
          Sk = kk.pseudoElementsCallback,
          bk = void 0 === Sk ? nD : Sk,
          rk = kk.observeMutationsRoot,
          Pk = void 0 === rk ? jk : rk;
        jD = new sk((function(kk) {
          if (!LD) {
            var ek = zi();
            ge(kk).forEach((function(kk) {
              if ("childList" === kk.type && kk.addedNodes.length > 0 && !UD(kk.addedNodes[0]) && (ce.searchPseudoElements && bk(kk.target), ik(kk.target)), "attributes" === kk.type && kk.target.parentNode && ce.searchPseudoElements && bk([kk.target], !0), "attributes" === kk.type && UD(kk.target) && ~he.indexOf(kk.attributeName))
                if ("class" === kk.attributeName && function(kk) {
                    var ek = kk.getAttribute ? kk.getAttribute(ye) : null,
                      ik = kk.getAttribute ? kk.getAttribute(Ye) : null;
                    return ek && ik
                  }(kk.target)) {
                  var Dk = ai(Ge(kk.target)),
                    Sk = Dk.prefix,
                    rk = Dk.iconName;
                  kk.target.setAttribute(ye, Sk || ek), rk && kk.target.setAttribute(Ye, rk)
                } else(Pk = kk.target) && Pk.classList && Pk.classList.contains && Pk.classList.contains(ce.replacementClass) && fk(kk.target);
              var Pk
            }))
          }
        })), Vk && jD.observe(Pk, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function dD(kk) {
      var ek, ik, Dk = kk.getAttribute("data-prefix"),
        fk = kk.getAttribute("data-icon"),
        Sk = void 0 !== kk.innerText ? kk.innerText.trim() : "",
        bk = ai(Ge(kk));
      return bk.prefix || (bk.prefix = zi()), Dk && fk && (bk.prefix = Dk, bk.iconName = fk), bk.iconName && bk.prefix || (bk.prefix && Sk.length > 0 && (bk.iconName = (ek = bk.prefix, ik = kk.innerText, (Ci[ek] || {})[ik] || ui(bk.prefix, xi(kk.innerText)))), !bk.iconName && ce.autoFetchSvg && kk.firstChild && kk.firstChild.nodeType === Node.TEXT_NODE && (bk.iconName = kk.firstChild.data)), bk
    }

    function VD(kk) {
      var ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        ik = dD(kk),
        Dk = ik.iconName,
        fk = ik.prefix,
        Sk = ik.rest,
        bk = function(kk) {
          return ge(kk.attributes).reduce((function(kk, ek) {
            return "class" !== kk.name && "style" !== kk.name && (kk[ek.name] = ek.value), kk
          }), {})
        }(kk),
        rk = Zi("parseNodeAttributes", {}, kk),
        mk = ek.styleParser ? function(kk) {
          var ek = kk.getAttribute("style"),
            ik = [];
          return ek && (ik = ek.split(";").reduce((function(kk, ek) {
            var ik = ek.split(":"),
              Dk = ik[0],
              fk = ik.slice(1);
            return Dk && fk.length > 0 && (kk[Dk] = fk.join(":").trim()), kk
          }), {})), ik
        }(kk) : [];
      return Pk({
        iconName: Dk,
        prefix: fk,
        transform: Ze,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: Sk,
          styles: mk,
          attributes: bk
        }
      }, rk)
    }
    var FD = Si.styles;

    function uD(kk) {
      var ek = "nest" === ce.autoReplaceSvg ? VD(kk, {
        styleParser: !1
      }) : VD(kk);
      return ~ek.extra.classes.indexOf(ve) ? gi("generateLayersText", kk, ek) : gi("generateSvgReplacementMutation", kk, ek)
    }

    function qD(kk) {
      var ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!Vk) return Promise.resolve();
      var ik = jk.documentElement.classList,
        Dk = function(kk) {
          return ik.add("".concat(Le, "-").concat(kk))
        },
        fk = function(kk) {
          return ik.remove("".concat(Le, "-").concat(kk))
        },
        Sk = ce.autoFetchSvg ? [].concat(Mk(ee), Mk(Ke)) : qk.concat(Object.keys(FD));
      Sk.includes("fa") || Sk.push("fa");
      var bk = [".".concat(ve, ":not([").concat(le, "])")].concat(Sk.map((function(kk) {
        return ".".concat(kk, ":not([").concat(le, "])")
      }))).join(", ");
      if (0 === bk.length) return Promise.resolve();
      var rk = [];
      try {
        rk = ge(kk.querySelectorAll(bk))
      } catch (Kk) {}
      if (!(rk.length > 0)) return Promise.resolve();
      Dk("pending"), fk("complete");
      var Pk = xD("onTree"),
        mk = rk.reduce((function(kk, ek) {
          try {
            var ik = uD(ek);
            ik && kk.push(ik)
          } catch (Kk) {
            je || "MissingIcon" === Kk.name && console.error(Kk)
          }
          return kk
        }), []);
      return new Promise((function(kk, ik) {
        Promise.all(mk).then((function(ik) {
          YD(ik, (function() {
            Dk("active"), Dk("complete"), fk("pending"), "function" === typeof ek && ek(), Pk(), kk()
          }))
        })).catch((function(kk) {
          Pk(), ik(kk)
        }))
      }))
    }

    function ID(kk) {
      var ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      uD(kk).then((function(kk) {
        kk && YD([kk], ek)
      }))
    }
    var zD = function(kk) {
        var ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ik = ek.transform,
          Dk = void 0 === ik ? Ze : ik,
          fk = ek.symbol,
          Sk = void 0 !== fk && fk,
          bk = ek.mask,
          rk = void 0 === bk ? null : bk,
          mk = ek.maskId,
          Mk = void 0 === mk ? null : mk,
          Kk = ek.classes,
          xk = void 0 === Kk ? [] : Kk,
          nk = ek.attributes,
          Uk = void 0 === nk ? {} : nk,
          Hk = ek.styles,
          wk = void 0 === Hk ? {} : Hk;
        if (kk) {
          var lk = kk.prefix,
            pk = kk.iconName,
            yk = kk.icon;
          return eD(Pk({
            type: "icon"
          }, kk), (function() {
            return Oi("beforeDOMElementCreation", {
              iconDefinition: kk,
              params: ek
            }), iD({
              icons: {
                main: SD(yk),
                mask: rk ? SD(rk.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: lk,
              iconName: pk,
              transform: Pk(Pk({}, Ze), Dk),
              symbol: Sk,
              maskId: Mk,
              extra: {
                attributes: Uk,
                styles: wk,
                classes: xk
              }
            })
          }))
        }
      },
      QD = {
        mixout: function() {
          return {
            icon: (kk = zD, function(ek) {
              var ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Dk = (ek || {}).icon ? ek : Gi(ek || {}),
                fk = ik.mask;
              return fk && (fk = (fk || {}).icon ? fk : Gi(fk || {})), kk(Dk, Pk(Pk({}, ik), {}, {
                mask: fk
              }))
            })
          };
          var kk
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(kk) {
              return kk.treeCallback = qD, kk.nodeCallback = ID, kk
            }
          }
        },
        provides: function(kk) {
          kk.i2svg = function(kk) {
            var ek = kk.node,
              ik = void 0 === ek ? jk : ek,
              Dk = kk.callback;
            return qD(ik, void 0 === Dk ? function() {} : Dk)
          }, kk.generateSvgReplacementMutation = function(kk, ek) {
            var ik = ek.iconName,
              Dk = ek.prefix,
              fk = ek.transform,
              Sk = ek.symbol,
              bk = ek.mask,
              rk = ek.maskId,
              Pk = ek.extra;
            return new Promise((function(ek, Mk) {
              Promise.all([rD(ik, Dk), bk.iconName ? rD(bk.iconName, bk.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(bk) {
                var Mk = mk(bk, 2),
                  Kk = Mk[0],
                  xk = Mk[1];
                ek([kk, iD({
                  icons: {
                    main: Kk,
                    mask: xk
                  },
                  prefix: Dk,
                  iconName: ik,
                  transform: fk,
                  symbol: Sk,
                  maskId: rk,
                  extra: Pk,
                  watchable: !0
                })])
              })).catch(Mk)
            }))
          }, kk.generateAbstractIcon = function(kk) {
            var ek, ik = kk.children,
              Dk = kk.attributes,
              fk = kk.main,
              Sk = kk.transform,
              bk = Re(kk.styles);
            return bk.length > 0 && (Dk.style = bk), Je(Sk) && (ek = gi("generateAbstractTransformGrouping", {
              main: fk,
              transform: Sk,
              containerWidth: fk.width,
              iconWidth: fk.width
            })), ik.push(ek || fk.icon), {
              children: ik,
              attributes: Dk
            }
          }
        }
      },
      vD = {
        mixout: function() {
          return {
            layer: function(kk) {
              var ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ik = ek.classes,
                Dk = void 0 === ik ? [] : ik;
              return eD({
                type: "layer"
              }, (function() {
                Oi("beforeDOMElementCreation", {
                  assembler: kk,
                  params: ek
                });
                var ik = [];
                return kk((function(kk) {
                  Array.isArray(kk) ? kk.map((function(kk) {
                    ik = ik.concat(kk.abstract)
                  })) : ik = ik.concat(kk.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(ce.cssPrefix, "-layers")].concat(Mk(Dk)).join(" ")
                  },
                  children: ik
                }]
              }))
            }
          }
        }
      },
      ED = {
        mixout: function() {
          return {
            counter: function(kk) {
              var ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ik = ek.title,
                Dk = void 0 === ik ? null : ik,
                fk = ek.classes,
                Sk = void 0 === fk ? [] : fk,
                bk = ek.attributes,
                rk = void 0 === bk ? {} : bk,
                mk = ek.styles,
                Kk = void 0 === mk ? {} : mk;
              return eD({
                type: "counter",
                content: kk
              }, (function() {
                return Oi("beforeDOMElementCreation", {
                    content: kk,
                    params: ek
                  }),
                  function(kk) {
                    var ek = kk.content,
                      ik = kk.extra,
                      Dk = Pk(Pk({}, ik.attributes), {}, {
                        class: ik.classes.join(" ")
                      }),
                      fk = Re(ik.styles);
                    fk.length > 0 && (Dk.style = fk);
                    var Sk = [];
                    return Sk.push({
                      tag: "span",
                      attributes: Dk,
                      children: [ek]
                    }), Sk
                  }({
                    content: kk.toString(),
                    title: Dk,
                    extra: {
                      attributes: rk,
                      styles: Kk,
                      classes: ["".concat(ce.cssPrefix, "-layers-counter")].concat(Mk(Sk))
                    }
                  })
              }))
            }
          }
        }
      },
      hD = {
        mixout: function() {
          return {
            text: function(kk) {
              var ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ik = ek.transform,
                Dk = void 0 === ik ? Ze : ik,
                fk = ek.classes,
                Sk = void 0 === fk ? [] : fk,
                bk = ek.attributes,
                rk = void 0 === bk ? {} : bk,
                mk = ek.styles,
                Kk = void 0 === mk ? {} : mk;
              return eD({
                type: "text",
                content: kk
              }, (function() {
                return Oi("beforeDOMElementCreation", {
                  content: kk,
                  params: ek
                }), DD({
                  content: kk,
                  transform: Pk(Pk({}, Ze), Dk),
                  extra: {
                    attributes: rk,
                    styles: Kk,
                    classes: ["".concat(ce.cssPrefix, "-layers-text")].concat(Mk(Sk))
                  }
                })
              }))
            }
          }
        },
        provides: function(kk) {
          kk.generateLayersText = function(kk, ek) {
            var ik = ek.transform,
              Dk = ek.extra,
              fk = null,
              Sk = null;
            if (Fk) {
              var bk = parseInt(getComputedStyle(kk).fontSize, 10),
                rk = kk.getBoundingClientRect();
              fk = rk.width / bk, Sk = rk.height / bk
            }
            return Promise.resolve([kk, DD({
              content: kk.innerHTML,
              width: fk,
              height: Sk,
              transform: ik,
              extra: Dk,
              watchable: !0
            })])
          }
        }
      },
      aD = new RegExp('"', "ug"),
      WD = [1105920, 1112319],
      tD = Pk(Pk(Pk(Pk({}, {
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
      XD = Object.keys(tD).reduce((function(kk, ek) {
        return kk[ek.toLowerCase()] = tD[ek], kk
      }), {}),
      BD = Object.keys(XD).reduce((function(kk, ek) {
        var ik = XD[ek];
        return kk[ek] = ik[900] || Mk(Object.entries(ik))[0][1], kk
      }), {});

    function cD(kk, ek) {
      var ik = "".concat("data-fa-pseudo-element-pending").concat(ek.replace(":", "-"));
      return new Promise((function(Dk, fk) {
        if (null !== kk.getAttribute(ik)) return Dk();
        var Sk = ge(kk.children).filter((function(kk) {
            return kk.getAttribute(pe) === ek
          }))[0],
          bk = Ak.getComputedStyle(kk, ek),
          rk = bk.getPropertyValue("font-family"),
          mk = rk.match(Ee),
          Kk = bk.getPropertyValue("font-weight"),
          xk = bk.getPropertyValue("content");
        if (Sk && !mk) return kk.removeChild(Sk), Dk();
        if (mk && "none" !== xk && "" !== xk) {
          var nk = bk.getPropertyValue("content"),
            Uk = function(kk, ek) {
              var ik = kk.replace(/^['"]|['"]$/g, "").toLowerCase(),
                Dk = parseInt(ek),
                fk = isNaN(Dk) ? "normal" : Dk;
              return (XD[ik] || {})[fk] || BD[ik]
            }(rk, Kk),
            Hk = function(kk) {
              return xi(Mk(kk.replace(aD, ""))[0] || "")
            }(nk),
            wk = mk[0].startsWith("FontAwesome"),
            lk = function(kk) {
              var ek = kk.getPropertyValue("font-feature-settings").includes("ss01"),
                ik = kk.getPropertyValue("content").replace(aD, ""),
                Dk = ik.codePointAt(0),
                fk = Dk >= WD[0] && Dk <= WD[1],
                Sk = 2 === ik.length && ik[0] === ik[1];
              return fk || Sk || ek
            }(bk),
            pk = ui(Uk, Hk),
            yk = pk;
          if (wk) {
            var Yk = function(kk) {
              var ek = ji[kk],
                ik = ui("fas", kk);
              return ek || (ik ? {
                prefix: "fas",
                iconName: ik
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(Hk);
            Yk.iconName && Yk.prefix && (pk = Yk.iconName, Uk = Yk.prefix)
          }
          if (!pk || lk || Sk && Sk.getAttribute(ye) === Uk && Sk.getAttribute(Ye) === yk) Dk();
          else {
            kk.setAttribute(ik, yk), Sk && kk.removeChild(Sk);
            var Lk = {
                iconName: null,
                prefix: null,
                transform: Ze,
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
              Ck = Lk.extra;
            Ck.attributes[pe] = ek, rD(pk, Uk).then((function(fk) {
              var Sk = iD(Pk(Pk({}, Lk), {}, {
                  icons: {
                    main: fk,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: Uk,
                  iconName: yk,
                  extra: Ck,
                  watchable: !0
                })),
                bk = jk.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === ek ? kk.insertBefore(bk, kk.firstChild) : kk.appendChild(bk), bk.outerHTML = Sk.map((function(kk) {
                return mi(kk)
              })).join("\n"), kk.removeAttribute(ik), Dk()
            })).catch(fk)
          }
        } else Dk()
      }))
    }

    function TD(kk) {
      return Promise.all([cD(kk, "::before"), cD(kk, "::after")])
    }

    function oD(kk) {
      return kk.parentNode !== document.head && !~Ce.indexOf(kk.tagName.toUpperCase()) && !kk.getAttribute(pe) && (!kk.parentNode || "svg" !== kk.parentNode.tagName)
    }
    var ZD = function(kk) {
        return !!kk && Ae.some((function(ek) {
          return kk.includes(ek)
        }))
      },
      OD = function(kk) {
        if (!kk) return [];
        var ek = new Set,
          ik = kk.split(/,(?![^()]*\))/).map((function(kk) {
            return kk.trim()
          }));
        ik = ik.flatMap((function(kk) {
          return kk.includes("(") ? kk : kk.split(",").map((function(kk) {
            return kk.trim()
          }))
        }));
        var Dk, fk = Sk(ik);
        try {
          for (fk.s(); !(Dk = fk.n()).done;) {
            var bk = Dk.value;
            if (ZD(bk)) {
              var rk = Ae.reduce((function(kk, ek) {
                return kk.replace(ek, "")
              }), bk);
              "" !== rk && "*" !== rk && ek.add(rk)
            }
          }
        } catch (Pk) {
          fk.e(Pk)
        } finally {
          fk.f()
        }
        return ek
      };

    function gD(kk) {
      if (Vk) {
        var ek;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) ek = kk;
        else if (ce.searchPseudoElementsFullScan) ek = kk.querySelectorAll("*");
        else {
          var ik, Dk = new Set,
            fk = Sk(document.styleSheets);
          try {
            for (fk.s(); !(ik = fk.n()).done;) {
              var bk = ik.value;
              try {
                var rk, Pk = Sk(bk.cssRules);
                try {
                  for (Pk.s(); !(rk = Pk.n()).done;) {
                    var mk, Mk = rk.value,
                      Kk = Sk(OD(Mk.selectorText));
                    try {
                      for (Kk.s(); !(mk = Kk.n()).done;) {
                        var xk = mk.value;
                        Dk.add(xk)
                      }
                    } catch (Uk) {
                      Kk.e(Uk)
                    } finally {
                      Kk.f()
                    }
                  }
                } catch (Uk) {
                  Pk.e(Uk)
                } finally {
                  Pk.f()
                }
              } catch (Hk) {
                ce.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(bk.href, " (").concat(Hk.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (Uk) {
            fk.e(Uk)
          } finally {
            fk.f()
          }
          if (!Dk.size) return;
          var nk = Array.from(Dk).join(", ");
          try {
            ek = kk.querySelectorAll(nk)
          } catch (wk) {}
        }
        return new Promise((function(kk, ik) {
          var Dk = ge(ek).filter(oD).map(TD),
            fk = xD("searchPseudoElements");
          CD(), Promise.all(Dk).then((function() {
            fk(), AD(), kk()
          })).catch((function() {
            fk(), AD(), ik()
          }))
        }))
      }
    }
    var GD = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(kk) {
              return kk.pseudoElementsCallback = gD, kk
            }
          }
        },
        provides: function(kk) {
          kk.pseudoElements2svg = function(kk) {
            var ek = kk.node,
              ik = void 0 === ek ? jk : ek;
            ce.searchPseudoElements && gD(ik)
          }
        }
      },
      ND = !1,
      RD = function(kk) {
        return kk.toLowerCase().split(" ").reduce((function(kk, ek) {
          var ik = ek.toLowerCase().split("-"),
            Dk = ik[0],
            fk = ik.slice(1).join("-");
          if (Dk && "h" === fk) return kk.flipX = !0, kk;
          if (Dk && "v" === fk) return kk.flipY = !0, kk;
          if (fk = parseFloat(fk), isNaN(fk)) return kk;
          switch (Dk) {
            case "grow":
              kk.size = kk.size + fk;
              break;
            case "shrink":
              kk.size = kk.size - fk;
              break;
            case "left":
              kk.x = kk.x - fk;
              break;
            case "right":
              kk.x = kk.x + fk;
              break;
            case "up":
              kk.y = kk.y - fk;
              break;
            case "down":
              kk.y = kk.y + fk;
              break;
            case "rotate":
              kk.rotate = kk.rotate + fk
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
      JD = {
        mixout: function() {
          return {
            parse: {
              transform: function(kk) {
                return RD(kk)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(kk, ek) {
              var ik = ek.getAttribute("data-fa-transform");
              return ik && (kk.transform = RD(ik)), kk
            }
          }
        },
        provides: function(kk) {
          kk.generateAbstractTransformGrouping = function(kk) {
            var ek = kk.main,
              ik = kk.transform,
              Dk = kk.containerWidth,
              fk = kk.iconWidth,
              Sk = {
                transform: "translate(".concat(Dk / 2, " 256)")
              },
              bk = "translate(".concat(32 * ik.x, ", ").concat(32 * ik.y, ") "),
              rk = "scale(".concat(ik.size / 16 * (ik.flipX ? -1 : 1), ", ").concat(ik.size / 16 * (ik.flipY ? -1 : 1), ") "),
              mk = "rotate(".concat(ik.rotate, " 0 0)"),
              Mk = {
                outer: Sk,
                inner: {
                  transform: "".concat(bk, " ").concat(rk, " ").concat(mk)
                },
                path: {
                  transform: "translate(".concat(fk / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: Pk({}, Mk.outer),
              children: [{
                tag: "g",
                attributes: Pk({}, Mk.inner),
                children: [{
                  tag: ek.icon.tag,
                  children: ek.icon.children,
                  attributes: Pk(Pk({}, ek.icon.attributes), Mk.path)
                }]
              }]
            }
          }
        }
      },
      kf = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function ef(kk) {
      var ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return kk.attributes && (kk.attributes.fill || ek) && (kk.attributes.fill = "black"), kk
    }
    var Df = {
        hooks: function() {
          return {
            parseNodeAttributes: function(kk, ek) {
              var ik = ek.getAttribute("data-fa-mask"),
                Dk = ik ? ai(ik.split(" ").map((function(kk) {
                  return kk.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return Dk.prefix || (Dk.prefix = zi()), kk.mask = Dk, kk.maskId = ek.getAttribute("data-fa-mask-id"), kk
            }
          }
        },
        provides: function(kk) {
          kk.generateAbstractMask = function(kk) {
            var ek, ik = kk.children,
              Dk = kk.attributes,
              fk = kk.main,
              Sk = kk.mask,
              bk = kk.maskId,
              rk = kk.transform,
              mk = fk.width,
              Mk = fk.icon,
              Kk = Sk.width,
              xk = Sk.icon,
              nk = function(kk) {
                var ek = kk.transform,
                  ik = kk.containerWidth,
                  Dk = kk.iconWidth,
                  fk = {
                    transform: "translate(".concat(ik / 2, " 256)")
                  },
                  Sk = "translate(".concat(32 * ek.x, ", ").concat(32 * ek.y, ") "),
                  bk = "scale(".concat(ek.size / 16 * (ek.flipX ? -1 : 1), ", ").concat(ek.size / 16 * (ek.flipY ? -1 : 1), ") "),
                  rk = "rotate(".concat(ek.rotate, " 0 0)");
                return {
                  outer: fk,
                  inner: {
                    transform: "".concat(Sk, " ").concat(bk, " ").concat(rk)
                  },
                  path: {
                    transform: "translate(".concat(Dk / 2 * -1, " -256)")
                  }
                }
              }({
                transform: rk,
                containerWidth: Kk,
                iconWidth: mk
              }),
              Uk = {
                tag: "rect",
                attributes: Pk(Pk({}, kf), {}, {
                  fill: "white"
                })
              },
              Hk = Mk.children ? {
                children: Mk.children.map(ef)
              } : {},
              wk = {
                tag: "g",
                attributes: Pk({}, nk.inner),
                children: [ef(Pk({
                  tag: Mk.tag,
                  attributes: Pk(Pk({}, Mk.attributes), nk.path)
                }, Hk))]
              },
              lk = {
                tag: "g",
                attributes: Pk({}, nk.outer),
                children: [wk]
              },
              pk = "mask-".concat(bk || Oe()),
              yk = "clip-".concat(bk || Oe()),
              Yk = {
                tag: "mask",
                attributes: Pk(Pk({}, kf), {}, {
                  id: pk,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [Uk, lk]
              },
              Lk = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: yk
                  },
                  children: (ek = xk, "g" === ek.tag ? ek.children : [ek])
                }, Yk]
              };
            return ik.push(Lk, {
              tag: "rect",
              attributes: Pk({
                fill: "currentColor",
                "clip-path": "url(#".concat(yk, ")"),
                mask: "url(#".concat(pk, ")")
              }, kf)
            }), {
              children: ik,
              attributes: Dk
            }
          }
        }
      },
      ff = {
        provides: function(kk) {
          var ek = !1;
          Ak.matchMedia && (ek = Ak.matchMedia("(prefers-reduced-motion: reduce)").matches), kk.missingIconAbstract = function() {
            var kk = [],
              ik = {
                fill: "currentColor"
              },
              Dk = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            kk.push({
              tag: "path",
              attributes: Pk(Pk({}, ik), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var fk = Pk(Pk({}, Dk), {}, {
                attributeName: "opacity"
              }),
              Sk = {
                tag: "circle",
                attributes: Pk(Pk({}, ik), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return ek || Sk.children.push({
              tag: "animate",
              attributes: Pk(Pk({}, Dk), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: Pk(Pk({}, fk), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), kk.push(Sk), kk.push({
              tag: "path",
              attributes: Pk(Pk({}, ik), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: ek ? [] : [{
                tag: "animate",
                attributes: Pk(Pk({}, fk), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), ek || kk.push({
              tag: "path",
              attributes: Pk(Pk({}, ik), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: Pk(Pk({}, fk), {}, {
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
    ! function(kk, ek) {
      var ik = ek.mixoutsTo;
      Bi = kk, ci = {}, Object.keys(Ti).forEach((function(kk) {
        -1 === oi.indexOf(kk) && delete Ti[kk]
      })), Bi.forEach((function(kk) {
        var ek = kk.mixout ? kk.mixout() : {};
        if (Object.keys(ek).forEach((function(kk) {
            "function" === typeof ek[kk] && (ik[kk] = ek[kk]), "object" === xk(ek[kk]) && Object.keys(ek[kk]).forEach((function(Dk) {
              ik[kk] || (ik[kk] = {}), ik[kk][Dk] = ek[kk][Dk]
            }))
          })), kk.hooks) {
          var Dk = kk.hooks();
          Object.keys(Dk).forEach((function(kk) {
            ci[kk] || (ci[kk] = []), ci[kk].push(Dk[kk])
          }))
        }
        kk.provides && kk.provides(Ti)
      }))
    }([Di, QD, vD, ED, hD, GD, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              CD(), ND = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            sD(Zi("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            jD && jD.disconnect()
          },
          watch: function(kk) {
            var ek = kk.observeMutationsRoot;
            ND ? AD() : sD(Zi("mutationObserverCallbacks", {
              observeMutationsRoot: ek
            }))
          }
        }
      }
    }, JD, Df, ff, {
      hooks: function() {
        return {
          parseNodeAttributes: function(kk, ek) {
            var ik = ek.getAttribute("data-fa-symbol"),
              Dk = null !== ik && ("" === ik || ik);
            return kk.symbol = Dk, kk
          }
        }
      }
    }], {
      mixoutsTo: Ji
    });
    var Sf = Ji.noAuto,
      bf = Ji.config,
      rf = Ji.library,
      Pf = Ji.dom,
      mf = Ji.parse,
      Mf = Ji.findIconDefinition,
      Kf = Ji.toHtml,
      xf = Ji.icon,
      nf = Ji.layer,
      Uf = Ji.text,
      Hf = Ji.counter
  },
  6528: kk => {
    kk.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);