/*! For license information please see qepqb8.fa-renderer.5dc76351.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6395: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      FontAwesomeIcon: () => Yv
    });
    var hv = Pv(6390),
      Sv = Pv(4702),
      ev = Pv.n(Sv),
      gv = Pv(52);

    function pv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function dv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != typeof vv || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != typeof hv) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == typeof zv ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Nv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function lv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Nv(Object(Pv), !0).forEach((function(zv) {
          dv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Nv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Tv(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        var Pv = null == vv ? null : "undefined" != typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
        if (null != Pv) {
          var hv, Sv, ev, gv, pv = [],
            dv = !0,
            Nv = !1;
          try {
            if (ev = (Pv = Pv.call(vv)).next, 0 === zv) {
              if (Object(Pv) !== Pv) return;
              dv = !1
            } else
              for (; !(dv = (hv = ev.call(Pv)).done) && (pv.push(hv.value), pv.length !== zv); dv = !0);
          } catch (vv) {
            Nv = !0, Sv = vv
          } finally {
            try {
              if (!dv && null != Pv.return && (gv = Pv.return(), Object(gv) !== gv)) return
            } finally {
              if (Nv) throw Sv
            }
          }
          return pv
        }
      }(vv, zv) || av(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Wv(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return pv(vv)
      }(vv) || function(vv) {
        if ("undefined" != typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
      }(vv) || av(vv) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wv(vv) {
      return wv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, wv(vv)
    }

    function av(vv, zv) {
      if (vv) {
        if ("string" == typeof vv) return pv(vv, zv);
        var Pv = {}.toString.call(vv).slice(8, -1);
        return "Object" === Pv && vv.constructor && (Pv = vv.constructor.name), "Map" === Pv || "Set" === Pv ? Array.from(vv) : "Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv) ? pv(vv, zv) : void 0
      }
    }
    var sv;
    try {
      var Cv = Pv(6399);
      sv = Cv.version
    } catch (Ov) {
      sv = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function iv(vv) {
      var zv = vv.beat,
        Pv = vv.fade,
        hv = vv.beatFade,
        Sv = vv.bounce,
        ev = vv.shake,
        gv = vv.flash,
        pv = vv.spin,
        Nv = vv.spinPulse,
        lv = vv.spinReverse,
        Wv = vv.pulse,
        wv = vv.fixedWidth,
        av = vv.inverse,
        Cv = vv.border,
        iv = vv.listItem,
        cv = vv.flip,
        Gv = vv.size,
        mv = vv.rotation,
        jv = vv.pull,
        fv = vv.swapOpacity,
        Fv = vv.rotateBy,
        Yv = vv.widthAuto,
        nv = function(vv, zv) {
          for (var Pv = Tv(vv.split("-"), 2), hv = Pv[0], Sv = Pv[1], ev = Tv(zv.split("-"), 2), gv = ev[0], pv = ev[1], dv = hv.split("."), Nv = gv.split("."), lv = 0; lv < Math.max(dv.length, Nv.length); lv++) {
            var Wv = dv[lv] || "0",
              wv = Nv[lv] || "0",
              av = parseInt(Wv, 10),
              sv = parseInt(wv, 10);
            if (av !== sv) return av > sv
          }
          for (var Cv = 0; Cv < Math.max(dv.length, Nv.length); Cv++) {
            var iv = dv[Cv] || "0",
              cv = Nv[Cv] || "0";
            if (iv !== cv && iv.length !== cv.length) return iv.length < cv.length
          }
          return !(Sv && !pv)
        }(sv, "7.0.0"),
        Ov = dv(dv(dv(dv(dv(dv({
          "fa-beat": zv,
          "fa-fade": Pv,
          "fa-beat-fade": hv,
          "fa-bounce": Sv,
          "fa-shake": ev,
          "fa-flash": gv,
          "fa-spin": pv,
          "fa-spin-reverse": lv,
          "fa-spin-pulse": Nv,
          "fa-pulse": Wv,
          "fa-fw": wv,
          "fa-inverse": av,
          "fa-border": Cv,
          "fa-li": iv,
          "fa-flip": !0 === cv,
          "fa-flip-horizontal": "horizontal" === cv || "both" === cv,
          "fa-flip-vertical": "vertical" === cv || "both" === cv
        }, "fa-".concat(Gv), "undefined" !== typeof Gv && null !== Gv), "fa-rotate-".concat(mv), "undefined" !== typeof mv && null !== mv && 0 !== mv), "fa-pull-".concat(jv), "undefined" !== typeof jv && null !== jv), "fa-swap-opacity", fv), "fa-rotate-by", nv && Fv), "fa-width-auto", nv && Yv);
      return Object.keys(Ov).map((function(vv) {
        return Ov[vv] ? vv : null
      })).filter((function(vv) {
        return vv
      }))
    }

    function cv(vv) {
      return zv = vv, (zv -= 0) === zv ? vv : (vv = vv.replace(/[\-_\s]+(.)?/g, (function(vv, zv) {
        return zv ? zv.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + vv.substr(1);
      var zv
    }
    var Gv = ["style"];
    var mv = !1;
    try {
      mv = !0
    } catch (Ov) {}

    function jv(vv) {
      return vv && "object" === wv(vv) && vv.prefix && vv.iconName && vv.icon ? vv : hv.parse.icon ? hv.parse.icon(vv) : null === vv ? null : vv && "object" === wv(vv) && vv.prefix && vv.iconName ? vv : Array.isArray(vv) && 2 === vv.length ? {
        prefix: vv[0],
        iconName: vv[1]
      } : "string" === typeof vv ? {
        prefix: "fas",
        iconName: vv
      } : void 0
    }

    function fv(vv, zv) {
      return Array.isArray(zv) && zv.length > 0 || !Array.isArray(zv) && zv ? dv({}, vv, zv) : {}
    }
    var Fv = {
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
      Yv = gv.forwardRef((function(vv, zv) {
        var Pv = lv(lv({}, Fv), vv),
          Sv = Pv.icon,
          ev = Pv.mask,
          gv = Pv.symbol,
          pv = Pv.className,
          dv = Pv.title,
          Nv = Pv.titleId,
          Tv = Pv.maskId,
          wv = jv(Sv),
          av = fv("classes", [].concat(Wv(iv(Pv)), Wv((pv || "").split(" ")))),
          sv = fv("transform", "string" === typeof Pv.transform ? hv.parse.transform(Pv.transform) : Pv.transform),
          Cv = fv("mask", jv(ev)),
          cv = (0, hv.icon)(wv, lv(lv(lv(lv({}, av), sv), Cv), {}, {
            symbol: gv,
            title: dv,
            titleId: Nv,
            maskId: Tv
          }));
        if (!cv) return function() {
          var vv;
          !mv && console && "function" === typeof console.error && (vv = console).error.apply(vv, arguments)
        }("Could not find icon", wv), null;
        var Gv = cv.abstract,
          Yv = {
            ref: zv
          };
        return Object.keys(Pv).forEach((function(vv) {
          Fv.hasOwnProperty(vv) || (Yv[vv] = Pv[vv])
        })), nv(Gv[0], Yv)
      }));
    Yv.displayName = "FontAwesomeIcon", Yv.propTypes = {
      beat: ev().bool,
      border: ev().bool,
      beatFade: ev().bool,
      bounce: ev().bool,
      className: ev().string,
      fade: ev().bool,
      flash: ev().bool,
      mask: ev().oneOfType([ev().object, ev().array, ev().string]),
      maskId: ev().string,
      fixedWidth: ev().bool,
      inverse: ev().bool,
      flip: ev().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: ev().oneOfType([ev().object, ev().array, ev().string]),
      listItem: ev().bool,
      pull: ev().oneOf(["right", "left"]),
      pulse: ev().bool,
      rotation: ev().oneOf([0, 90, 180, 270]),
      rotateBy: ev().bool,
      shake: ev().bool,
      size: ev().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: ev().bool,
      spinPulse: ev().bool,
      spinReverse: ev().bool,
      symbol: ev().oneOfType([ev().bool, ev().string]),
      title: ev().string,
      titleId: ev().string,
      transform: ev().oneOfType([ev().string, ev().object]),
      swapOpacity: ev().bool,
      widthAuto: ev().bool
    };
    var nv = function vv(zv, Pv) {
      var hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof Pv) return Pv;
      var Sv = (Pv.children || []).map((function(Pv) {
          return vv(zv, Pv)
        })),
        ev = Object.keys(Pv.attributes || {}).reduce((function(vv, zv) {
          var hv = Pv.attributes[zv];
          switch (zv) {
            case "class":
              vv.attrs.className = hv, delete Pv.attributes.class;
              break;
            case "style":
              vv.attrs.style = hv.split(";").map((function(vv) {
                return vv.trim()
              })).filter((function(vv) {
                return vv
              })).reduce((function(vv, zv) {
                var Pv, hv = zv.indexOf(":"),
                  Sv = cv(zv.slice(0, hv)),
                  ev = zv.slice(hv + 1).trim();
                return Sv.startsWith("webkit") ? vv[(Pv = Sv, Pv.charAt(0).toUpperCase() + Pv.slice(1))] = ev : vv[Sv] = ev, vv
              }), {});
              break;
            default:
              0 === zv.indexOf("aria-") || 0 === zv.indexOf("data-") ? vv.attrs[zv.toLowerCase()] = hv : vv.attrs[cv(zv)] = hv
          }
          return vv
        }), {
          attrs: {}
        }),
        gv = hv.style,
        pv = void 0 === gv ? {} : gv,
        dv = function(vv, zv) {
          if (null == vv) return {};
          var Pv, hv, Sv = function(vv, zv) {
            if (null == vv) return {};
            var Pv = {};
            for (var hv in vv)
              if ({}.hasOwnProperty.call(vv, hv)) {
                if (-1 !== zv.indexOf(hv)) continue;
                Pv[hv] = vv[hv]
              } return Pv
          }(vv, zv);
          if (Object.getOwnPropertySymbols) {
            var ev = Object.getOwnPropertySymbols(vv);
            for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], -1 === zv.indexOf(Pv) && {}.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
          }
          return Sv
        }(hv, Gv);
      return ev.attrs.style = lv(lv({}, ev.attrs.style), pv), zv.apply(void 0, [Pv.tag, lv(lv({}, ev.attrs), dv)].concat(Wv(Sv)))
    }.bind(null, gv.createElement)
  },
  4706: (vv, zv, Pv) => {
    var hv = Pv(4711);

    function Sv() {}

    function ev() {}
    ev.resetWarningCache = Sv, vv.exports = function() {
      function vv(vv, zv, Pv, Sv, ev, gv) {
        if (gv !== hv) {
          var pv = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw pv.name = "Invariant Violation", pv
        }
      }

      function zv() {
        return vv
      }
      vv.isRequired = vv;
      var Pv = {
        array: vv,
        bigint: vv,
        bool: vv,
        func: vv,
        number: vv,
        object: vv,
        string: vv,
        symbol: vv,
        any: vv,
        arrayOf: zv,
        element: vv,
        elementType: vv,
        instanceOf: zv,
        node: vv,
        objectOf: zv,
        oneOf: zv,
        oneOfType: zv,
        shape: zv,
        exact: zv,
        checkPropTypes: ev,
        resetWarningCache: Sv
      };
      return Pv.PropTypes = Pv, Pv
    }
  },
  4702: (vv, zv, Pv) => {
    vv.exports = Pv(4706)()
  },
  4711: vv => {
    vv.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6390: (vv, zv, Pv) => {
    function hv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function Sv(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, Tv(hv.key), hv)
      }
    }

    function ev(vv, zv) {
      var Pv = "undefined" != typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
      if (!Pv) {
        if (Array.isArray(vv) || (Pv = wv(vv)) || zv && vv && "number" == typeof vv.length) {
          Pv && (vv = Pv);
          var hv = 0,
            Sv = function() {};
          return {
            s: Sv,
            n: function() {
              return hv >= vv.length ? {
                done: !0
              } : {
                done: !1,
                value: vv[hv++]
              }
            },
            e: function(vv) {
              throw vv
            },
            f: Sv
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var ev, gv = !0,
        pv = !1;
      return {
        s: function() {
          Pv = Pv.call(vv)
        },
        n: function() {
          var vv = Pv.next();
          return gv = vv.done, vv
        },
        e: function(vv) {
          pv = !0, ev = vv
        },
        f: function() {
          try {
            gv || null == Pv.return || Pv.return()
          } finally {
            if (pv) throw ev
          }
        }
      }
    }

    function gv(vv, zv, Pv) {
      return (zv = Tv(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function pv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function dv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? pv(Object(Pv), !0).forEach((function(zv) {
          gv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : pv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Nv(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        var Pv = null == vv ? null : "undefined" != typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
        if (null != Pv) {
          var hv, Sv, ev, gv, pv = [],
            dv = !0,
            Nv = !1;
          try {
            if (ev = (Pv = Pv.call(vv)).next, 0 === zv) {
              if (Object(Pv) !== Pv) return;
              dv = !1
            } else
              for (; !(dv = (hv = ev.call(Pv)).done) && (pv.push(hv.value), pv.length !== zv); dv = !0);
          } catch (vv) {
            Nv = !0, Sv = vv
          } finally {
            try {
              if (!dv && null != Pv.return && (gv = Pv.return(), Object(gv) !== gv)) return
            } finally {
              if (Nv) throw Sv
            }
          }
          return pv
        }
      }(vv, zv) || wv(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lv(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return hv(vv)
      }(vv) || function(vv) {
        if ("undefined" != typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
      }(vv) || wv(vv) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Tv(vv) {
      var zv = function(vv, zv) {
        if ("object" != typeof vv || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != typeof hv) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == typeof zv ? zv : zv + ""
    }

    function Wv(vv) {
      return Wv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Wv(vv)
    }

    function wv(vv, zv) {
      if (vv) {
        if ("string" == typeof vv) return hv(vv, zv);
        var Pv = {}.toString.call(vv).slice(8, -1);
        return "Object" === Pv && vv.constructor && (Pv = vv.constructor.name), "Map" === Pv || "Set" === Pv ? Array.from(vv) : "Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv) ? hv(vv, zv) : void 0
      }
    }
    Pv.r(zv), Pv.d(zv, {
      api: () => rP,
      config: () => PS,
      counter: () => TS,
      dom: () => SS,
      findIconDefinition: () => gS,
      icon: () => dS,
      layer: () => NS,
      library: () => hS,
      noAuto: () => zS,
      parse: () => eS,
      text: () => lS,
      toHtml: () => pS
    });
    var av = function() {},
      sv = {},
      Cv = {},
      iv = null,
      cv = {
        mark: av,
        measure: av
      };
    try {
      "undefined" !== typeof window && (sv = window), "undefined" !== typeof document && (Cv = document), "undefined" !== typeof MutationObserver && (iv = MutationObserver), "undefined" !== typeof performance && (cv = performance)
    } catch (yv) {}
    var Gv, mv, jv = (sv.navigator || {}).userAgent,
      fv = void 0 === jv ? "" : jv,
      Fv = sv,
      Yv = Cv,
      nv = iv,
      Ov = cv,
      Dv = (Fv.document, !!Yv.documentElement && !!Yv.head && "function" === typeof Yv.addEventListener && "function" === typeof Yv.createElement),
      Kv = ~fv.indexOf("MSIE") || ~fv.indexOf("Trident/"),
      Vv = {
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
      Uv = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      Rv = "classic",
      xv = "duotone",
      tv = "sharp",
      qv = "sharp-duotone",
      Iv = "chisel",
      Qv = "etch",
      Zv = "graphite",
      Av = "jelly",
      Lv = "jelly-duo",
      Hv = "jelly-fill",
      Mv = "notdog",
      yv = "notdog-duo",
      Bv = "slab",
      Jv = "slab-press",
      Ev = "thumbprint",
      ov = "utility",
      bv = "utility-duo",
      rv = "utility-fill",
      kv = "whiteboard",
      Xv = [Rv, xv, tv, qv, Iv, Qv, Zv, Av, Lv, Hv, Mv, yv, Bv, Jv, Ev, ov, bv, rv, kv],
      uv = (gv(gv(gv(gv(gv(gv(gv(gv(gv(gv(Gv = {}, Rv, "Classic"), xv, "Duotone"), tv, "Sharp"), qv, "Sharp Duotone"), Iv, "Chisel"), Qv, "Etch"), Zv, "Graphite"), Av, "Jelly"), Lv, "Jelly Duo"), Hv, "Jelly Fill"), gv(gv(gv(gv(gv(gv(gv(gv(gv(Gv, Mv, "Notdog"), yv, "Notdog Duo"), Bv, "Slab"), Jv, "Slab Press"), Ev, "Thumbprint"), ov, "Utility"), bv, "Utility Duo"), rv, "Utility Fill"), kv, "Whiteboard"), new Map([
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
      vz = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      zz = {
        fak: "kit",
        "fa-kit": "kit"
      },
      Pz = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      hz = (gv(gv({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      Sz = {
        "kit-duotone": "fakd"
      },
      ez = "duotone-group",
      gz = "swap-opacity",
      pz = "primary",
      dz = "secondary",
      Nz = (gv(gv(gv(gv(gv(gv(gv(gv(gv(gv(mv = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), gv(gv(gv(gv(gv(gv(gv(gv(gv(mv, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), gv(gv({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      lz = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      Tz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Wz = Tz.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      wz = [].concat(lv(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", ez, gz, pz, dz]).concat(Tz.map((function(vv) {
        return "".concat(vv, "x")
      }))).concat(Wz.map((function(vv) {
        return "w-".concat(vv)
      }))),
      az = "___FONT_AWESOME___",
      sz = "svg-inline--fa",
      Cz = "data-fa-i2svg",
      iz = "data-fa-pseudo-element",
      cz = "data-prefix",
      Gz = "data-icon",
      mz = "fontawesome-i2svg",
      jz = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      fz = ["::before", "::after", ":before", ":after"],
      Fz = function() {
        try {
          return !0
        } catch (vv) {
          return !1
        }
      }();

    function Yz(vv) {
      return new Proxy(vv, {
        get: function(vv, zv) {
          return zv in vv ? vv[zv] : vv[Rv]
        }
      })
    }
    var nz = dv({}, Vv);
    nz[Rv] = dv(dv(dv(dv({}, {
      "fa-duotone": "duotone"
    }), Vv[Rv]), zz), Pz);
    var Oz = Yz(nz),
      Dz = dv({}, {
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
    Dz[Rv] = dv(dv(dv(dv({}, {
      duotone: "fad"
    }), Dz[Rv]), hz), Sz);
    var Kz = Yz(Dz),
      Vz = dv({}, Nz);
    Vz[Rv] = dv(dv({}, Vz[Rv]), {
      fak: "fa-kit"
    });
    var Uz = Yz(Vz),
      Rz = dv({}, {
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
    Rz[Rv] = dv(dv({}, Rz[Rv]), {
      "fa-kit": "fak"
    });
    Yz(Rz);
    var xz = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      tz = "fa-layers-text",
      qz = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Iz = (Yz(dv({}, {
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
      Qz = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      Zz = [].concat(lv(["kit"]), lv(wz)),
      Az = Fv.FontAwesomeConfig || {};
    if (Yv && "function" === typeof Yv.querySelector) {
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
      ].forEach((function(vv) {
        var zv = Nv(vv, 2),
          Pv = zv[0],
          hv = zv[1],
          Sv = function(vv) {
            return "" === vv || "false" !== vv && ("true" === vv || vv)
          }(function(vv) {
            var zv = Yv.querySelector("script[" + vv + "]");
            if (zv) return zv.getAttribute(vv)
          }(Pv));
        void 0 !== Sv && null !== Sv && (Az[hv] = Sv)
      }))
    }
    var Lz = {
      styleDefault: "solid",
      familyDefault: Rv,
      cssPrefix: "fa",
      replacementClass: sz,
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
    Az.familyPrefix && (Az.cssPrefix = Az.familyPrefix);
    var Hz = dv(dv({}, Lz), Az);
    Hz.autoReplaceSvg || (Hz.observeMutations = !1);
    var Mz = {};
    Object.keys(Lz).forEach((function(vv) {
      Object.defineProperty(Mz, vv, {
        enumerable: !0,
        set: function(zv) {
          Hz[vv] = zv, yz.forEach((function(vv) {
            return vv(Mz)
          }))
        },
        get: function() {
          return Hz[vv]
        }
      })
    })), Object.defineProperty(Mz, "familyPrefix", {
      enumerable: !0,
      set: function(vv) {
        Hz.cssPrefix = vv, yz.forEach((function(vv) {
          return vv(Mz)
        }))
      },
      get: function() {
        return Hz.cssPrefix
      }
    }), Fv.FontAwesomeConfig = Mz;
    var yz = [];
    var Bz = 16,
      Jz = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function Ez() {
      for (var vv = 12, zv = ""; vv-- > 0;) zv += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return zv
    }

    function oz(vv) {
      for (var zv = [], Pv = (vv || []).length >>> 0; Pv--;) zv[Pv] = vv[Pv];
      return zv
    }

    function bz(vv) {
      return vv.classList ? oz(vv.classList) : (vv.getAttribute("class") || "").split(" ").filter((function(vv) {
        return vv
      }))
    }

    function rz(vv) {
      return "".concat(vv).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function kz(vv) {
      return Object.keys(vv || {}).reduce((function(zv, Pv) {
        return zv + "".concat(Pv, ": ").concat(vv[Pv].trim(), ";")
      }), "")
    }

    function Xz(vv) {
      return vv.size !== Jz.size || vv.x !== Jz.x || vv.y !== Jz.y || vv.rotate !== Jz.rotate || vv.flipX || vv.flipY
    }

    function uz() {
      var vv = "fa",
        zv = sz,
        Pv = Mz.cssPrefix,
        hv = Mz.replacementClass,
        Sv = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (Pv !== vv || hv !== zv) {
        var ev = new RegExp("\\.".concat(vv, "\\-"), "g"),
          gv = new RegExp("\\--".concat(vv, "\\-"), "g"),
          pv = new RegExp("\\.".concat(zv), "g");
        Sv = Sv.replace(ev, ".".concat(Pv, "-")).replace(gv, "--".concat(Pv, "-")).replace(pv, ".".concat(hv))
      }
      return Sv
    }
    var vP = !1;

    function zP() {
      Mz.autoAddCss && !vP && (! function(vv) {
        if (vv && Dv) {
          var zv = Yv.createElement("style");
          zv.setAttribute("type", "text/css"), zv.innerHTML = vv;
          for (var Pv = Yv.head.childNodes, hv = null, Sv = Pv.length - 1; Sv > -1; Sv--) {
            var ev = Pv[Sv],
              gv = (ev.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(gv) > -1 && (hv = ev)
          }
          Yv.head.insertBefore(zv, hv)
        }
      }(uz()), vP = !0)
    }
    var PP = {
        mixout: function() {
          return {
            dom: {
              css: uz,
              insertCss: zP
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              zP()
            },
            beforeI2svg: function() {
              zP()
            }
          }
        }
      },
      hP = Fv || {};
    hP[az] || (hP[az] = {}), hP[az].styles || (hP[az].styles = {}), hP[az].hooks || (hP[az].hooks = {}), hP[az].shims || (hP[az].shims = []);
    var SP = hP[az],
      eP = [],
      gP = function() {
        Yv.removeEventListener("DOMContentLoaded", gP), pP = 1, eP.map((function(vv) {
          return vv()
        }))
      },
      pP = !1;

    function dP(vv) {
      var zv = vv.tag,
        Pv = vv.attributes,
        hv = void 0 === Pv ? {} : Pv,
        Sv = vv.children,
        ev = void 0 === Sv ? [] : Sv;
      return "string" === typeof vv ? rz(vv) : "<".concat(zv, " ").concat(function(vv) {
        return Object.keys(vv || {}).reduce((function(zv, Pv) {
          return zv + "".concat(Pv, '="').concat(rz(vv[Pv]), '" ')
        }), "").trim()
      }(hv), ">").concat(ev.map(dP).join(""), "</").concat(zv, ">")
    }

    function NP(vv, zv, Pv) {
      if (vv && vv[zv] && vv[zv][Pv]) return {
        prefix: zv,
        iconName: Pv,
        icon: vv[zv][Pv]
      }
    }
    Dv && ((pP = (Yv.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Yv.readyState)) || Yv.addEventListener("DOMContentLoaded", gP));
    var lP = function(vv, zv, Pv, hv) {
      var Sv, ev, gv, pv = Object.keys(vv),
        dv = pv.length,
        Nv = void 0 !== hv ? function(vv, zv) {
          return function(Pv, hv, Sv, ev) {
            return vv.call(zv, Pv, hv, Sv, ev)
          }
        }(zv, hv) : zv;
      for (void 0 === Pv ? (Sv = 1, gv = vv[pv[0]]) : (Sv = 0, gv = Pv); Sv < dv; Sv++) gv = Nv(gv, vv[ev = pv[Sv]], ev, vv);
      return gv
    };

    function TP(vv) {
      return 1 !== lv(vv).length ? null : vv.codePointAt(0).toString(16)
    }

    function WP(vv) {
      return Object.keys(vv).reduce((function(zv, Pv) {
        var hv = vv[Pv];
        return !!hv.icon ? zv[hv.iconName] = hv.icon : zv[Pv] = hv, zv
      }), {})
    }

    function wP(vv, zv) {
      var Pv = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        hv = void 0 !== Pv && Pv,
        Sv = WP(zv);
      "function" !== typeof SP.hooks.addPack || hv ? SP.styles[vv] = dv(dv({}, SP.styles[vv] || {}), Sv) : SP.hooks.addPack(vv, WP(zv)), "fas" === vv && wP("fa", zv)
    }
    var aP = SP.styles,
      sP = SP.shims,
      CP = Object.keys(Uz),
      iP = CP.reduce((function(vv, zv) {
        return vv[zv] = Object.keys(Uz[zv]), vv
      }), {}),
      cP = null,
      GP = {},
      mP = {},
      jP = {},
      fP = {},
      FP = {};

    function YP(vv, zv) {
      var Pv, hv = zv.split("-"),
        Sv = hv[0],
        ev = hv.slice(1).join("-");
      return Sv !== vv || "" === ev || (Pv = ev, ~Zz.indexOf(Pv)) ? null : ev
    }
    var nP, OP = function() {
      var vv = function(vv) {
        return lP(aP, (function(zv, Pv, hv) {
          return zv[hv] = lP(Pv, vv, {}), zv
        }), {})
      };
      GP = vv((function(vv, zv, Pv) {
        (zv[3] && (vv[zv[3]] = Pv), zv[2]) && zv[2].filter((function(vv) {
          return "number" === typeof vv
        })).forEach((function(zv) {
          vv[zv.toString(16)] = Pv
        }));
        return vv
      })), mP = vv((function(vv, zv, Pv) {
        (vv[Pv] = Pv, zv[2]) && zv[2].filter((function(vv) {
          return "string" === typeof vv
        })).forEach((function(zv) {
          vv[zv] = Pv
        }));
        return vv
      })), FP = vv((function(vv, zv, Pv) {
        var hv = zv[2];
        return vv[Pv] = Pv, hv.forEach((function(zv) {
          vv[zv] = Pv
        })), vv
      }));
      var zv = "far" in aP || Mz.autoFetchSvg,
        Pv = lP(sP, (function(vv, Pv) {
          var hv = Pv[0],
            Sv = Pv[1],
            ev = Pv[2];
          return "far" !== Sv || zv || (Sv = "fas"), "string" === typeof hv && (vv.names[hv] = {
            prefix: Sv,
            iconName: ev
          }), "number" === typeof hv && (vv.unicodes[hv.toString(16)] = {
            prefix: Sv,
            iconName: ev
          }), vv
        }), {
          names: {},
          unicodes: {}
        });
      jP = Pv.names, fP = Pv.unicodes, cP = RP(Mz.styleDefault, {
        family: Mz.familyDefault
      })
    };

    function DP(vv, zv) {
      return (GP[vv] || {})[zv]
    }

    function KP(vv, zv) {
      return (FP[vv] || {})[zv]
    }

    function VP(vv) {
      return jP[vv] || {
        prefix: null,
        iconName: null
      }
    }

    function UP() {
      return cP
    }
    nP = function(vv) {
      cP = RP(vv.styleDefault, {
        family: Mz.familyDefault
      })
    }, yz.push(nP), OP();

    function RP(vv) {
      var zv = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        Pv = void 0 === zv ? Rv : zv,
        hv = Oz[Pv][vv];
      if (Pv === xv && !vv) return "fad";
      var Sv = Kz[Pv][vv] || Kz[Pv][hv],
        ev = vv in SP.styles ? vv : null;
      return Sv || ev || null
    }

    function xP(vv) {
      return vv.sort().filter((function(vv, zv, Pv) {
        return Pv.indexOf(vv) === zv
      }))
    }
    var tP = lz.concat(vz);

    function qP(vv) {
      var zv = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        Pv = void 0 !== zv && zv,
        hv = null,
        Sv = xP(vv.filter((function(vv) {
          return tP.includes(vv)
        }))),
        ev = xP(vv.filter((function(vv) {
          return !tP.includes(vv)
        }))),
        gv = Nv(Sv.filter((function(vv) {
          return hv = vv, !Uv.includes(vv)
        })), 1)[0],
        pv = void 0 === gv ? null : gv,
        lv = function(vv) {
          var zv = Rv,
            Pv = CP.reduce((function(vv, zv) {
              return vv[zv] = "".concat(Mz.cssPrefix, "-").concat(zv), vv
            }), {});
          return Xv.forEach((function(hv) {
            (vv.includes(Pv[hv]) || vv.some((function(vv) {
              return iP[hv].includes(vv)
            }))) && (zv = hv)
          })), zv
        }(Sv),
        Tv = dv(dv({}, function(vv) {
          var zv = [],
            Pv = null;
          return vv.forEach((function(vv) {
            var hv = YP(Mz.cssPrefix, vv);
            hv ? Pv = hv : vv && zv.push(vv)
          })), {
            iconName: Pv,
            rest: zv
          }
        }(ev)), {}, {
          prefix: RP(pv, {
            family: lv
          })
        });
      return dv(dv(dv({}, Tv), function(vv) {
        var zv = vv.values,
          Pv = vv.family,
          hv = vv.canonical,
          Sv = vv.givenPrefix,
          ev = void 0 === Sv ? "" : Sv,
          gv = vv.styles,
          pv = void 0 === gv ? {} : gv,
          dv = vv.config,
          Nv = void 0 === dv ? {} : dv,
          lv = Pv === xv,
          Tv = zv.includes("fa-duotone") || zv.includes("fad"),
          Wv = "duotone" === Nv.familyDefault,
          wv = "fad" === hv.prefix || "fa-duotone" === hv.prefix;
        !lv && (Tv || Wv || wv) && (hv.prefix = "fad");
        (zv.includes("fa-brands") || zv.includes("fab")) && (hv.prefix = "fab");
        if (!hv.prefix && IP.includes(Pv)) {
          if (Object.keys(pv).find((function(vv) {
              return QP.includes(vv)
            })) || Nv.autoFetchSvg) {
            var av = uv.get(Pv).defaultShortPrefixId;
            hv.prefix = av, hv.iconName = KP(hv.prefix, hv.iconName) || hv.iconName
          }
        }
        "fa" !== hv.prefix && "fa" !== ev || (hv.prefix = UP() || "fas");
        return hv
      }({
        values: vv,
        family: lv,
        styles: aP,
        config: Mz,
        canonical: Tv,
        givenPrefix: hv
      })), function(vv, zv, Pv) {
        var hv = Pv.prefix,
          Sv = Pv.iconName;
        if (vv || !hv || !Sv) return {
          prefix: hv,
          iconName: Sv
        };
        var ev = "fa" === zv ? VP(Sv) : {},
          gv = KP(hv, Sv);
        Sv = ev.iconName || gv || Sv, "far" !== (hv = ev.prefix || hv) || aP.far || !aP.fas || Mz.autoFetchSvg || (hv = "fas");
        return {
          prefix: hv,
          iconName: Sv
        }
      }(Pv, hv, Tv))
    }
    var IP = Xv.filter((function(vv) {
        return vv !== Rv || vv !== xv
      })),
      QP = Object.keys(Nz).filter((function(vv) {
        return vv !== Rv
      })).map((function(vv) {
        return Object.keys(Nz[vv])
      })).flat();
    var ZP = function() {
        return function(vv, zv, Pv) {
          return zv && Sv(vv.prototype, zv), Pv && Sv(vv, Pv), Object.defineProperty(vv, "prototype", {
            writable: !1
          }), vv
        }((function vv() {
          ! function(vv, zv) {
            if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
          }(this, vv), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var vv = this, zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
            var Sv = Pv.reduce(this._pullDefinitions, {});
            Object.keys(Sv).forEach((function(zv) {
              vv.definitions[zv] = dv(dv({}, vv.definitions[zv] || {}), Sv[zv]), wP(zv, Sv[zv]);
              var Pv = Uz[Rv][zv];
              Pv && wP(Pv, Sv[zv]), OP()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(vv, zv) {
            var Pv = zv.prefix && zv.iconName && zv.icon ? {
              0: zv
            } : zv;
            return Object.keys(Pv).map((function(zv) {
              var hv = Pv[zv],
                Sv = hv.prefix,
                ev = hv.iconName,
                gv = hv.icon,
                pv = gv[2];
              vv[Sv] || (vv[Sv] = {}), pv.length > 0 && pv.forEach((function(zv) {
                "string" === typeof zv && (vv[Sv][zv] = gv)
              })), vv[Sv][ev] = gv
            })), vv
          }
        }])
      }(),
      AP = [],
      LP = {},
      HP = {},
      MP = Object.keys(HP);

    function yP(vv, zv) {
      for (var Pv = arguments.length, hv = new Array(Pv > 2 ? Pv - 2 : 0), Sv = 2; Sv < Pv; Sv++) hv[Sv - 2] = arguments[Sv];
      return (LP[vv] || []).forEach((function(vv) {
        zv = vv.apply(null, [zv].concat(hv))
      })), zv
    }

    function BP(vv) {
      for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), hv = 1; hv < zv; hv++) Pv[hv - 1] = arguments[hv];
      (LP[vv] || []).forEach((function(vv) {
        vv.apply(null, Pv)
      }))
    }

    function JP() {
      var vv = arguments[0],
        zv = Array.prototype.slice.call(arguments, 1);
      return HP[vv] ? HP[vv].apply(null, zv) : void 0
    }

    function EP(vv) {
      "fa" === vv.prefix && (vv.prefix = "fas");
      var zv = vv.iconName,
        Pv = vv.prefix || UP();
      if (zv) return zv = KP(Pv, zv) || zv, NP(oP.definitions, Pv, zv) || NP(SP.styles, Pv, zv)
    }
    var oP = new ZP,
      bP = {
        i2svg: function() {
          var vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Dv ? (BP("beforeI2svg", vv), JP("pseudoElements2svg", vv), JP("i2svg", vv)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var vv, zv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Pv = zv.autoReplaceSvgRoot;
          !1 === Mz.autoReplaceSvg && (Mz.autoReplaceSvg = !0), Mz.observeMutations = !0, vv = function() {
            kP({
              autoReplaceSvgRoot: Pv
            }), BP("watch", zv)
          }, Dv && (pP ? setTimeout(vv, 0) : eP.push(vv))
        }
      },
      rP = {
        noAuto: function() {
          Mz.autoReplaceSvg = !1, Mz.observeMutations = !1, BP("noAuto")
        },
        config: Mz,
        dom: bP,
        parse: {
          icon: function(vv) {
            if (null === vv) return null;
            if ("object" === Wv(vv) && vv.prefix && vv.iconName) return {
              prefix: vv.prefix,
              iconName: KP(vv.prefix, vv.iconName) || vv.iconName
            };
            if (Array.isArray(vv) && 2 === vv.length) {
              var zv = 0 === vv[1].indexOf("fa-") ? vv[1].slice(3) : vv[1],
                Pv = RP(vv[0]);
              return {
                prefix: Pv,
                iconName: KP(Pv, zv) || zv
              }
            }
            if ("string" === typeof vv && (vv.indexOf("".concat(Mz.cssPrefix, "-")) > -1 || vv.match(xz))) {
              var hv = qP(vv.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: hv.prefix || UP(),
                iconName: KP(hv.prefix, hv.iconName) || hv.iconName
              }
            }
            if ("string" === typeof vv) {
              var Sv = UP();
              return {
                prefix: Sv,
                iconName: KP(Sv, vv) || vv
              }
            }
          }
        },
        library: oP,
        findIconDefinition: EP,
        toHtml: dP
      },
      kP = function() {
        var vv = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          zv = void 0 === vv ? Yv : vv;
        (Object.keys(SP.styles).length > 0 || Mz.autoFetchSvg) && Dv && Mz.autoReplaceSvg && rP.dom.i2svg({
          node: zv
        })
      };

    function XP(vv, zv) {
      return Object.defineProperty(vv, "abstract", {
        get: zv
      }), Object.defineProperty(vv, "html", {
        get: function() {
          return vv.abstract.map((function(vv) {
            return dP(vv)
          }))
        }
      }), Object.defineProperty(vv, "node", {
        get: function() {
          if (Dv) {
            var zv = Yv.createElement("div");
            return zv.innerHTML = vv.html, zv.children
          }
        }
      }), vv
    }

    function uP(vv) {
      var zv = vv.icons,
        Pv = zv.main,
        hv = zv.mask,
        Sv = vv.prefix,
        ev = vv.iconName,
        gv = vv.transform,
        pv = vv.symbol,
        Nv = vv.maskId,
        lv = vv.extra,
        Tv = vv.watchable,
        Wv = void 0 !== Tv && Tv,
        wv = hv.found ? hv : Pv,
        av = wv.width,
        sv = wv.height,
        Cv = [Mz.replacementClass, ev ? "".concat(Mz.cssPrefix, "-").concat(ev) : ""].filter((function(vv) {
          return -1 === lv.classes.indexOf(vv)
        })).filter((function(vv) {
          return "" !== vv || !!vv
        })).concat(lv.classes).join(" "),
        iv = {
          children: [],
          attributes: dv(dv({}, lv.attributes), {}, {
            "data-prefix": Sv,
            "data-icon": ev,
            class: Cv,
            role: lv.attributes.role || "img",
            viewBox: "0 0 ".concat(av, " ").concat(sv)
          })
        };
      (function(vv) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(zv) {
          return zv in vv
        }))
      })(lv.attributes) || lv.attributes["aria-hidden"] || (iv.attributes["aria-hidden"] = "true"), Wv && (iv.attributes[Cz] = "");
      var cv = dv(dv({}, iv), {}, {
          prefix: Sv,
          iconName: ev,
          main: Pv,
          mask: hv,
          maskId: Nv,
          transform: gv,
          symbol: pv,
          styles: dv({}, lv.styles)
        }),
        Gv = hv.found && Pv.found ? JP("generateAbstractMask", cv) || {
          children: [],
          attributes: {}
        } : JP("generateAbstractIcon", cv) || {
          children: [],
          attributes: {}
        },
        mv = Gv.children,
        jv = Gv.attributes;
      return cv.children = mv, cv.attributes = jv, pv ? function(vv) {
        var zv = vv.prefix,
          Pv = vv.iconName,
          hv = vv.children,
          Sv = vv.attributes,
          ev = vv.symbol,
          gv = !0 === ev ? "".concat(zv, "-").concat(Mz.cssPrefix, "-").concat(Pv) : ev;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: dv(dv({}, Sv), {}, {
              id: gv
            }),
            children: hv
          }]
        }]
      }(cv) : function(vv) {
        var zv = vv.children,
          Pv = vv.main,
          hv = vv.mask,
          Sv = vv.attributes,
          ev = vv.styles,
          gv = vv.transform;
        if (Xz(gv) && Pv.found && !hv.found) {
          var pv = {
            x: Pv.width / Pv.height / 2,
            y: .5
          };
          Sv.style = kz(dv(dv({}, ev), {}, {
            "transform-origin": "".concat(pv.x + gv.x / 16, "em ").concat(pv.y + gv.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: Sv,
          children: zv
        }]
      }(cv)
    }

    function vh(vv) {
      var zv = vv.content,
        Pv = vv.width,
        hv = vv.height,
        Sv = vv.transform,
        ev = vv.extra,
        gv = vv.watchable,
        pv = void 0 !== gv && gv,
        Nv = dv(dv({}, ev.attributes), {}, {
          class: ev.classes.join(" ")
        });
      pv && (Nv[Cz] = "");
      var lv = dv({}, ev.styles);
      Xz(Sv) && (lv.transform = function(vv) {
        var zv = vv.transform,
          Pv = vv.width,
          hv = void 0 === Pv ? 16 : Pv,
          Sv = vv.height,
          ev = void 0 === Sv ? 16 : Sv,
          gv = vv.startCentered,
          pv = void 0 !== gv && gv,
          dv = "";
        return dv += pv && Kv ? "translate(".concat(zv.x / Bz - hv / 2, "em, ").concat(zv.y / Bz - ev / 2, "em) ") : pv ? "translate(calc(-50% + ".concat(zv.x / Bz, "em), calc(-50% + ").concat(zv.y / Bz, "em)) ") : "translate(".concat(zv.x / Bz, "em, ").concat(zv.y / Bz, "em) "), dv += "scale(".concat(zv.size / Bz * (zv.flipX ? -1 : 1), ", ").concat(zv.size / Bz * (zv.flipY ? -1 : 1), ") "), dv + "rotate(".concat(zv.rotate, "deg) ")
      }({
        transform: Sv,
        startCentered: !0,
        width: Pv,
        height: hv
      }), lv["-webkit-transform"] = lv.transform);
      var Tv = kz(lv);
      Tv.length > 0 && (Nv.style = Tv);
      var Wv = [];
      return Wv.push({
        tag: "span",
        attributes: Nv,
        children: [zv]
      }), Wv
    }
    var zh = SP.styles;

    function Ph(vv) {
      var zv = vv[0],
        Pv = vv[1],
        hv = Nv(vv.slice(4), 1)[0];
      return {
        found: !0,
        width: zv,
        height: Pv,
        icon: Array.isArray(hv) ? {
          tag: "g",
          attributes: {
            class: "".concat(Mz.cssPrefix, "-").concat(Qz.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(Mz.cssPrefix, "-").concat(Qz.SECONDARY),
              fill: "currentColor",
              d: hv[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(Mz.cssPrefix, "-").concat(Qz.PRIMARY),
              fill: "currentColor",
              d: hv[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: hv
          }
        }
      }
    }
    var hh = {
      found: !1,
      width: 512,
      height: 512
    };

    function Sh(vv, zv) {
      var Pv = zv;
      return "fa" === zv && null !== Mz.styleDefault && (zv = UP()), new Promise((function(hv, Sv) {
        if ("fa" === Pv) {
          var ev = VP(vv) || {};
          vv = ev.iconName || vv, zv = ev.prefix || zv
        }
        if (vv && zv && zh[zv] && zh[zv][vv]) return hv(Ph(zh[zv][vv]));
        ! function(vv, zv) {
          Fz || Mz.showMissingIcons || !vv || console.error('Icon with name "'.concat(vv, '" and prefix "').concat(zv, '" is missing.'))
        }(vv, zv), hv(dv(dv({}, hh), {}, {
          icon: Mz.showMissingIcons && vv && JP("missingIconAbstract") || {}
        }))
      }))
    }
    var eh = function() {},
      gh = Mz.measurePerformance && Ov && Ov.mark && Ov.measure ? Ov : {
        mark: eh,
        measure: eh
      },
      ph = 'FA "7.2.0"',
      dh = function(vv) {
        gh.mark("".concat(ph, " ").concat(vv, " ends")), gh.measure("".concat(ph, " ").concat(vv), "".concat(ph, " ").concat(vv, " begins"), "".concat(ph, " ").concat(vv, " ends"))
      },
      Nh = function(vv) {
        return gh.mark("".concat(ph, " ").concat(vv, " begins")),
          function() {
            return dh(vv)
          }
      },
      lh = function() {};

    function Th(vv) {
      return "string" === typeof(vv.getAttribute ? vv.getAttribute(Cz) : null)
    }

    function Wh(vv) {
      return Yv.createElementNS("http://www.w3.org/2000/svg", vv)
    }

    function wh(vv) {
      return Yv.createElement(vv)
    }

    function ah(vv) {
      var zv = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        Pv = void 0 === zv ? "svg" === vv.tag ? Wh : wh : zv;
      if ("string" === typeof vv) return Yv.createTextNode(vv);
      var hv = Pv(vv.tag);
      return Object.keys(vv.attributes || []).forEach((function(zv) {
        hv.setAttribute(zv, vv.attributes[zv])
      })), (vv.children || []).forEach((function(vv) {
        hv.appendChild(ah(vv, {
          ceFn: Pv
        }))
      })), hv
    }
    var sh = {
      replace: function(vv) {
        var zv = vv[0];
        if (zv.parentNode)
          if (vv[1].forEach((function(vv) {
              zv.parentNode.insertBefore(ah(vv), zv)
            })), null === zv.getAttribute(Cz) && Mz.keepOriginalSource) {
            var Pv = Yv.createComment(function(vv) {
              var zv = " ".concat(vv.outerHTML, " ");
              return "".concat(zv, "Font Awesome fontawesome.com ")
            }(zv));
            zv.parentNode.replaceChild(Pv, zv)
          } else zv.remove()
      },
      nest: function(vv) {
        var zv = vv[0],
          Pv = vv[1];
        if (~bz(zv).indexOf(Mz.replacementClass)) return sh.replace(vv);
        var hv = new RegExp("".concat(Mz.cssPrefix, "-.*"));
        if (delete Pv[0].attributes.id, Pv[0].attributes.class) {
          var Sv = Pv[0].attributes.class.split(" ").reduce((function(vv, zv) {
            return zv === Mz.replacementClass || zv.match(hv) ? vv.toSvg.push(zv) : vv.toNode.push(zv), vv
          }), {
            toNode: [],
            toSvg: []
          });
          Pv[0].attributes.class = Sv.toSvg.join(" "), 0 === Sv.toNode.length ? zv.removeAttribute("class") : zv.setAttribute("class", Sv.toNode.join(" "))
        }
        var ev = Pv.map((function(vv) {
          return dP(vv)
        })).join("\n");
        zv.setAttribute(Cz, ""), zv.innerHTML = ev
      }
    };

    function Ch(vv) {
      vv()
    }

    function ih(vv, zv) {
      var Pv = "function" === typeof zv ? zv : lh;
      if (0 === vv.length) Pv();
      else {
        var hv = Ch;
        "async" === Mz.mutateApproach && (hv = Fv.requestAnimationFrame || Ch), hv((function() {
          var zv = !0 === Mz.autoReplaceSvg ? sh.replace : sh[Mz.autoReplaceSvg] || sh.replace,
            hv = Nh("mutate");
          vv.map(zv), hv(), Pv()
        }))
      }
    }
    var ch = !1;

    function Gh() {
      ch = !0
    }

    function mh() {
      ch = !1
    }
    var jh = null;

    function fh(vv) {
      if (nv && Mz.observeMutations) {
        var zv = vv.treeCallback,
          Pv = void 0 === zv ? lh : zv,
          hv = vv.nodeCallback,
          Sv = void 0 === hv ? lh : hv,
          ev = vv.pseudoElementsCallback,
          gv = void 0 === ev ? lh : ev,
          pv = vv.observeMutationsRoot,
          dv = void 0 === pv ? Yv : pv;
        jh = new nv((function(vv) {
          if (!ch) {
            var zv = UP();
            oz(vv).forEach((function(vv) {
              if ("childList" === vv.type && vv.addedNodes.length > 0 && !Th(vv.addedNodes[0]) && (Mz.searchPseudoElements && gv(vv.target), Pv(vv.target)), "attributes" === vv.type && vv.target.parentNode && Mz.searchPseudoElements && gv([vv.target], !0), "attributes" === vv.type && Th(vv.target) && ~Iz.indexOf(vv.attributeName))
                if ("class" === vv.attributeName && function(vv) {
                    var zv = vv.getAttribute ? vv.getAttribute(cz) : null,
                      Pv = vv.getAttribute ? vv.getAttribute(Gz) : null;
                    return zv && Pv
                  }(vv.target)) {
                  var hv = qP(bz(vv.target)),
                    ev = hv.prefix,
                    pv = hv.iconName;
                  vv.target.setAttribute(cz, ev || zv), pv && vv.target.setAttribute(Gz, pv)
                } else(dv = vv.target) && dv.classList && dv.classList.contains && dv.classList.contains(Mz.replacementClass) && Sv(vv.target);
              var dv
            }))
          }
        })), Dv && jh.observe(dv, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function Fh(vv) {
      var zv, Pv, hv = vv.getAttribute("data-prefix"),
        Sv = vv.getAttribute("data-icon"),
        ev = void 0 !== vv.innerText ? vv.innerText.trim() : "",
        gv = qP(bz(vv));
      return gv.prefix || (gv.prefix = UP()), hv && Sv && (gv.prefix = hv, gv.iconName = Sv), gv.iconName && gv.prefix || (gv.prefix && ev.length > 0 && (gv.iconName = (zv = gv.prefix, Pv = vv.innerText, (mP[zv] || {})[Pv] || DP(gv.prefix, TP(vv.innerText)))), !gv.iconName && Mz.autoFetchSvg && vv.firstChild && vv.firstChild.nodeType === Node.TEXT_NODE && (gv.iconName = vv.firstChild.data)), gv
    }

    function Yh(vv) {
      var zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        Pv = Fh(vv),
        hv = Pv.iconName,
        Sv = Pv.prefix,
        ev = Pv.rest,
        gv = function(vv) {
          return oz(vv.attributes).reduce((function(vv, zv) {
            return "class" !== vv.name && "style" !== vv.name && (vv[zv.name] = zv.value), vv
          }), {})
        }(vv),
        pv = yP("parseNodeAttributes", {}, vv),
        Nv = zv.styleParser ? function(vv) {
          var zv = vv.getAttribute("style"),
            Pv = [];
          return zv && (Pv = zv.split(";").reduce((function(vv, zv) {
            var Pv = zv.split(":"),
              hv = Pv[0],
              Sv = Pv.slice(1);
            return hv && Sv.length > 0 && (vv[hv] = Sv.join(":").trim()), vv
          }), {})), Pv
        }(vv) : [];
      return dv({
        iconName: hv,
        prefix: Sv,
        transform: Jz,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: ev,
          styles: Nv,
          attributes: gv
        }
      }, pv)
    }
    var nh = SP.styles;

    function Oh(vv) {
      var zv = "nest" === Mz.autoReplaceSvg ? Yh(vv, {
        styleParser: !1
      }) : Yh(vv);
      return ~zv.extra.classes.indexOf(tz) ? JP("generateLayersText", vv, zv) : JP("generateSvgReplacementMutation", vv, zv)
    }

    function Dh(vv) {
      var zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!Dv) return Promise.resolve();
      var Pv = Yv.documentElement.classList,
        hv = function(vv) {
          return Pv.add("".concat(mz, "-").concat(vv))
        },
        Sv = function(vv) {
          return Pv.remove("".concat(mz, "-").concat(vv))
        },
        ev = Mz.autoFetchSvg ? [].concat(lv(vz), lv(lz)) : Uv.concat(Object.keys(nh));
      ev.includes("fa") || ev.push("fa");
      var gv = [".".concat(tz, ":not([").concat(Cz, "])")].concat(ev.map((function(vv) {
        return ".".concat(vv, ":not([").concat(Cz, "])")
      }))).join(", ");
      if (0 === gv.length) return Promise.resolve();
      var pv = [];
      try {
        pv = oz(vv.querySelectorAll(gv))
      } catch (Tv) {}
      if (!(pv.length > 0)) return Promise.resolve();
      hv("pending"), Sv("complete");
      var dv = Nh("onTree"),
        Nv = pv.reduce((function(vv, zv) {
          try {
            var Pv = Oh(zv);
            Pv && vv.push(Pv)
          } catch (Tv) {
            Fz || "MissingIcon" === Tv.name && console.error(Tv)
          }
          return vv
        }), []);
      return new Promise((function(vv, Pv) {
        Promise.all(Nv).then((function(Pv) {
          ih(Pv, (function() {
            hv("active"), hv("complete"), Sv("pending"), "function" === typeof zv && zv(), dv(), vv()
          }))
        })).catch((function(vv) {
          dv(), Pv(vv)
        }))
      }))
    }

    function Kh(vv) {
      var zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      Oh(vv).then((function(vv) {
        vv && ih([vv], zv)
      }))
    }
    var Vh = function(vv) {
        var zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Pv = zv.transform,
          hv = void 0 === Pv ? Jz : Pv,
          Sv = zv.symbol,
          ev = void 0 !== Sv && Sv,
          gv = zv.mask,
          pv = void 0 === gv ? null : gv,
          Nv = zv.maskId,
          lv = void 0 === Nv ? null : Nv,
          Tv = zv.classes,
          Wv = void 0 === Tv ? [] : Tv,
          wv = zv.attributes,
          av = void 0 === wv ? {} : wv,
          sv = zv.styles,
          Cv = void 0 === sv ? {} : sv;
        if (vv) {
          var iv = vv.prefix,
            cv = vv.iconName,
            Gv = vv.icon;
          return XP(dv({
            type: "icon"
          }, vv), (function() {
            return BP("beforeDOMElementCreation", {
              iconDefinition: vv,
              params: zv
            }), uP({
              icons: {
                main: Ph(Gv),
                mask: pv ? Ph(pv.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: iv,
              iconName: cv,
              transform: dv(dv({}, Jz), hv),
              symbol: ev,
              maskId: lv,
              extra: {
                attributes: av,
                styles: Cv,
                classes: Wv
              }
            })
          }))
        }
      },
      Uh = {
        mixout: function() {
          return {
            icon: (vv = Vh, function(zv) {
              var Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                hv = (zv || {}).icon ? zv : EP(zv || {}),
                Sv = Pv.mask;
              return Sv && (Sv = (Sv || {}).icon ? Sv : EP(Sv || {})), vv(hv, dv(dv({}, Pv), {}, {
                mask: Sv
              }))
            })
          };
          var vv
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(vv) {
              return vv.treeCallback = Dh, vv.nodeCallback = Kh, vv
            }
          }
        },
        provides: function(vv) {
          vv.i2svg = function(vv) {
            var zv = vv.node,
              Pv = void 0 === zv ? Yv : zv,
              hv = vv.callback;
            return Dh(Pv, void 0 === hv ? function() {} : hv)
          }, vv.generateSvgReplacementMutation = function(vv, zv) {
            var Pv = zv.iconName,
              hv = zv.prefix,
              Sv = zv.transform,
              ev = zv.symbol,
              gv = zv.mask,
              pv = zv.maskId,
              dv = zv.extra;
            return new Promise((function(zv, lv) {
              Promise.all([Sh(Pv, hv), gv.iconName ? Sh(gv.iconName, gv.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(gv) {
                var lv = Nv(gv, 2),
                  Tv = lv[0],
                  Wv = lv[1];
                zv([vv, uP({
                  icons: {
                    main: Tv,
                    mask: Wv
                  },
                  prefix: hv,
                  iconName: Pv,
                  transform: Sv,
                  symbol: ev,
                  maskId: pv,
                  extra: dv,
                  watchable: !0
                })])
              })).catch(lv)
            }))
          }, vv.generateAbstractIcon = function(vv) {
            var zv, Pv = vv.children,
              hv = vv.attributes,
              Sv = vv.main,
              ev = vv.transform,
              gv = kz(vv.styles);
            return gv.length > 0 && (hv.style = gv), Xz(ev) && (zv = JP("generateAbstractTransformGrouping", {
              main: Sv,
              transform: ev,
              containerWidth: Sv.width,
              iconWidth: Sv.width
            })), Pv.push(zv || Sv.icon), {
              children: Pv,
              attributes: hv
            }
          }
        }
      },
      Rh = {
        mixout: function() {
          return {
            layer: function(vv) {
              var zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Pv = zv.classes,
                hv = void 0 === Pv ? [] : Pv;
              return XP({
                type: "layer"
              }, (function() {
                BP("beforeDOMElementCreation", {
                  assembler: vv,
                  params: zv
                });
                var Pv = [];
                return vv((function(vv) {
                  Array.isArray(vv) ? vv.map((function(vv) {
                    Pv = Pv.concat(vv.abstract)
                  })) : Pv = Pv.concat(vv.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(Mz.cssPrefix, "-layers")].concat(lv(hv)).join(" ")
                  },
                  children: Pv
                }]
              }))
            }
          }
        }
      },
      xh = {
        mixout: function() {
          return {
            counter: function(vv) {
              var zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Pv = zv.title,
                hv = void 0 === Pv ? null : Pv,
                Sv = zv.classes,
                ev = void 0 === Sv ? [] : Sv,
                gv = zv.attributes,
                pv = void 0 === gv ? {} : gv,
                Nv = zv.styles,
                Tv = void 0 === Nv ? {} : Nv;
              return XP({
                type: "counter",
                content: vv
              }, (function() {
                return BP("beforeDOMElementCreation", {
                    content: vv,
                    params: zv
                  }),
                  function(vv) {
                    var zv = vv.content,
                      Pv = vv.extra,
                      hv = dv(dv({}, Pv.attributes), {}, {
                        class: Pv.classes.join(" ")
                      }),
                      Sv = kz(Pv.styles);
                    Sv.length > 0 && (hv.style = Sv);
                    var ev = [];
                    return ev.push({
                      tag: "span",
                      attributes: hv,
                      children: [zv]
                    }), ev
                  }({
                    content: vv.toString(),
                    title: hv,
                    extra: {
                      attributes: pv,
                      styles: Tv,
                      classes: ["".concat(Mz.cssPrefix, "-layers-counter")].concat(lv(ev))
                    }
                  })
              }))
            }
          }
        }
      },
      th = {
        mixout: function() {
          return {
            text: function(vv) {
              var zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Pv = zv.transform,
                hv = void 0 === Pv ? Jz : Pv,
                Sv = zv.classes,
                ev = void 0 === Sv ? [] : Sv,
                gv = zv.attributes,
                pv = void 0 === gv ? {} : gv,
                Nv = zv.styles,
                Tv = void 0 === Nv ? {} : Nv;
              return XP({
                type: "text",
                content: vv
              }, (function() {
                return BP("beforeDOMElementCreation", {
                  content: vv,
                  params: zv
                }), vh({
                  content: vv,
                  transform: dv(dv({}, Jz), hv),
                  extra: {
                    attributes: pv,
                    styles: Tv,
                    classes: ["".concat(Mz.cssPrefix, "-layers-text")].concat(lv(ev))
                  }
                })
              }))
            }
          }
        },
        provides: function(vv) {
          vv.generateLayersText = function(vv, zv) {
            var Pv = zv.transform,
              hv = zv.extra,
              Sv = null,
              ev = null;
            if (Kv) {
              var gv = parseInt(getComputedStyle(vv).fontSize, 10),
                pv = vv.getBoundingClientRect();
              Sv = pv.width / gv, ev = pv.height / gv
            }
            return Promise.resolve([vv, vh({
              content: vv.innerHTML,
              width: Sv,
              height: ev,
              transform: Pv,
              extra: hv,
              watchable: !0
            })])
          }
        }
      },
      qh = new RegExp('"', "ug"),
      Ih = [1105920, 1112319],
      Qh = dv(dv(dv(dv({}, {
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
      Zh = Object.keys(Qh).reduce((function(vv, zv) {
        return vv[zv.toLowerCase()] = Qh[zv], vv
      }), {}),
      Ah = Object.keys(Zh).reduce((function(vv, zv) {
        var Pv = Zh[zv];
        return vv[zv] = Pv[900] || lv(Object.entries(Pv))[0][1], vv
      }), {});

    function Lh(vv, zv) {
      var Pv = "".concat("data-fa-pseudo-element-pending").concat(zv.replace(":", "-"));
      return new Promise((function(hv, Sv) {
        if (null !== vv.getAttribute(Pv)) return hv();
        var ev = oz(vv.children).filter((function(vv) {
            return vv.getAttribute(iz) === zv
          }))[0],
          gv = Fv.getComputedStyle(vv, zv),
          pv = gv.getPropertyValue("font-family"),
          Nv = pv.match(qz),
          Tv = gv.getPropertyValue("font-weight"),
          Wv = gv.getPropertyValue("content");
        if (ev && !Nv) return vv.removeChild(ev), hv();
        if (Nv && "none" !== Wv && "" !== Wv) {
          var wv = gv.getPropertyValue("content"),
            av = function(vv, zv) {
              var Pv = vv.replace(/^['"]|['"]$/g, "").toLowerCase(),
                hv = parseInt(zv),
                Sv = isNaN(hv) ? "normal" : hv;
              return (Zh[Pv] || {})[Sv] || Ah[Pv]
            }(pv, Tv),
            sv = function(vv) {
              return TP(lv(vv.replace(qh, ""))[0] || "")
            }(wv),
            Cv = Nv[0].startsWith("FontAwesome"),
            iv = function(vv) {
              var zv = vv.getPropertyValue("font-feature-settings").includes("ss01"),
                Pv = vv.getPropertyValue("content").replace(qh, ""),
                hv = Pv.codePointAt(0),
                Sv = hv >= Ih[0] && hv <= Ih[1],
                ev = 2 === Pv.length && Pv[0] === Pv[1];
              return Sv || ev || zv
            }(gv),
            cv = DP(av, sv),
            Gv = cv;
          if (Cv) {
            var mv = function(vv) {
              var zv = fP[vv],
                Pv = DP("fas", vv);
              return zv || (Pv ? {
                prefix: "fas",
                iconName: Pv
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(sv);
            mv.iconName && mv.prefix && (cv = mv.iconName, av = mv.prefix)
          }
          if (!cv || iv || ev && ev.getAttribute(cz) === av && ev.getAttribute(Gz) === Gv) hv();
          else {
            vv.setAttribute(Pv, Gv), ev && vv.removeChild(ev);
            var jv = {
                iconName: null,
                prefix: null,
                transform: Jz,
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
              fv = jv.extra;
            fv.attributes[iz] = zv, Sh(cv, av).then((function(Sv) {
              var ev = uP(dv(dv({}, jv), {}, {
                  icons: {
                    main: Sv,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: av,
                  iconName: Gv,
                  extra: fv,
                  watchable: !0
                })),
                gv = Yv.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === zv ? vv.insertBefore(gv, vv.firstChild) : vv.appendChild(gv), gv.outerHTML = ev.map((function(vv) {
                return dP(vv)
              })).join("\n"), vv.removeAttribute(Pv), hv()
            })).catch(Sv)
          }
        } else hv()
      }))
    }

    function Hh(vv) {
      return Promise.all([Lh(vv, "::before"), Lh(vv, "::after")])
    }

    function Mh(vv) {
      return vv.parentNode !== document.head && !~jz.indexOf(vv.tagName.toUpperCase()) && !vv.getAttribute(iz) && (!vv.parentNode || "svg" !== vv.parentNode.tagName)
    }
    var yh = function(vv) {
        return !!vv && fz.some((function(zv) {
          return vv.includes(zv)
        }))
      },
      Bh = function(vv) {
        if (!vv) return [];
        var zv = new Set,
          Pv = vv.split(/,(?![^()]*\))/).map((function(vv) {
            return vv.trim()
          }));
        Pv = Pv.flatMap((function(vv) {
          return vv.includes("(") ? vv : vv.split(",").map((function(vv) {
            return vv.trim()
          }))
        }));
        var hv, Sv = ev(Pv);
        try {
          for (Sv.s(); !(hv = Sv.n()).done;) {
            var gv = hv.value;
            if (yh(gv)) {
              var pv = fz.reduce((function(vv, zv) {
                return vv.replace(zv, "")
              }), gv);
              "" !== pv && "*" !== pv && zv.add(pv)
            }
          }
        } catch (dv) {
          Sv.e(dv)
        } finally {
          Sv.f()
        }
        return zv
      };

    function Jh(vv) {
      if (Dv) {
        var zv;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) zv = vv;
        else if (Mz.searchPseudoElementsFullScan) zv = vv.querySelectorAll("*");
        else {
          var Pv, hv = new Set,
            Sv = ev(document.styleSheets);
          try {
            for (Sv.s(); !(Pv = Sv.n()).done;) {
              var gv = Pv.value;
              try {
                var pv, dv = ev(gv.cssRules);
                try {
                  for (dv.s(); !(pv = dv.n()).done;) {
                    var Nv, lv = pv.value,
                      Tv = ev(Bh(lv.selectorText));
                    try {
                      for (Tv.s(); !(Nv = Tv.n()).done;) {
                        var Wv = Nv.value;
                        hv.add(Wv)
                      }
                    } catch (av) {
                      Tv.e(av)
                    } finally {
                      Tv.f()
                    }
                  }
                } catch (av) {
                  dv.e(av)
                } finally {
                  dv.f()
                }
              } catch (sv) {
                Mz.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(gv.href, " (").concat(sv.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (av) {
            Sv.e(av)
          } finally {
            Sv.f()
          }
          if (!hv.size) return;
          var wv = Array.from(hv).join(", ");
          try {
            zv = vv.querySelectorAll(wv)
          } catch (Cv) {}
        }
        return new Promise((function(vv, Pv) {
          var hv = oz(zv).filter(Mh).map(Hh),
            Sv = Nh("searchPseudoElements");
          Gh(), Promise.all(hv).then((function() {
            Sv(), mh(), vv()
          })).catch((function() {
            Sv(), mh(), Pv()
          }))
        }))
      }
    }
    var Eh = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(vv) {
              return vv.pseudoElementsCallback = Jh, vv
            }
          }
        },
        provides: function(vv) {
          vv.pseudoElements2svg = function(vv) {
            var zv = vv.node,
              Pv = void 0 === zv ? Yv : zv;
            Mz.searchPseudoElements && Jh(Pv)
          }
        }
      },
      oh = !1,
      bh = function(vv) {
        return vv.toLowerCase().split(" ").reduce((function(vv, zv) {
          var Pv = zv.toLowerCase().split("-"),
            hv = Pv[0],
            Sv = Pv.slice(1).join("-");
          if (hv && "h" === Sv) return vv.flipX = !0, vv;
          if (hv && "v" === Sv) return vv.flipY = !0, vv;
          if (Sv = parseFloat(Sv), isNaN(Sv)) return vv;
          switch (hv) {
            case "grow":
              vv.size = vv.size + Sv;
              break;
            case "shrink":
              vv.size = vv.size - Sv;
              break;
            case "left":
              vv.x = vv.x - Sv;
              break;
            case "right":
              vv.x = vv.x + Sv;
              break;
            case "up":
              vv.y = vv.y - Sv;
              break;
            case "down":
              vv.y = vv.y + Sv;
              break;
            case "rotate":
              vv.rotate = vv.rotate + Sv
          }
          return vv
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      rh = {
        mixout: function() {
          return {
            parse: {
              transform: function(vv) {
                return bh(vv)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(vv, zv) {
              var Pv = zv.getAttribute("data-fa-transform");
              return Pv && (vv.transform = bh(Pv)), vv
            }
          }
        },
        provides: function(vv) {
          vv.generateAbstractTransformGrouping = function(vv) {
            var zv = vv.main,
              Pv = vv.transform,
              hv = vv.containerWidth,
              Sv = vv.iconWidth,
              ev = {
                transform: "translate(".concat(hv / 2, " 256)")
              },
              gv = "translate(".concat(32 * Pv.x, ", ").concat(32 * Pv.y, ") "),
              pv = "scale(".concat(Pv.size / 16 * (Pv.flipX ? -1 : 1), ", ").concat(Pv.size / 16 * (Pv.flipY ? -1 : 1), ") "),
              Nv = "rotate(".concat(Pv.rotate, " 0 0)"),
              lv = {
                outer: ev,
                inner: {
                  transform: "".concat(gv, " ").concat(pv, " ").concat(Nv)
                },
                path: {
                  transform: "translate(".concat(Sv / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: dv({}, lv.outer),
              children: [{
                tag: "g",
                attributes: dv({}, lv.inner),
                children: [{
                  tag: zv.icon.tag,
                  children: zv.icon.children,
                  attributes: dv(dv({}, zv.icon.attributes), lv.path)
                }]
              }]
            }
          }
        }
      },
      kh = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function Xh(vv) {
      var zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return vv.attributes && (vv.attributes.fill || zv) && (vv.attributes.fill = "black"), vv
    }
    var uh = {
        hooks: function() {
          return {
            parseNodeAttributes: function(vv, zv) {
              var Pv = zv.getAttribute("data-fa-mask"),
                hv = Pv ? qP(Pv.split(" ").map((function(vv) {
                  return vv.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return hv.prefix || (hv.prefix = UP()), vv.mask = hv, vv.maskId = zv.getAttribute("data-fa-mask-id"), vv
            }
          }
        },
        provides: function(vv) {
          vv.generateAbstractMask = function(vv) {
            var zv, Pv = vv.children,
              hv = vv.attributes,
              Sv = vv.main,
              ev = vv.mask,
              gv = vv.maskId,
              pv = vv.transform,
              Nv = Sv.width,
              lv = Sv.icon,
              Tv = ev.width,
              Wv = ev.icon,
              wv = function(vv) {
                var zv = vv.transform,
                  Pv = vv.containerWidth,
                  hv = vv.iconWidth,
                  Sv = {
                    transform: "translate(".concat(Pv / 2, " 256)")
                  },
                  ev = "translate(".concat(32 * zv.x, ", ").concat(32 * zv.y, ") "),
                  gv = "scale(".concat(zv.size / 16 * (zv.flipX ? -1 : 1), ", ").concat(zv.size / 16 * (zv.flipY ? -1 : 1), ") "),
                  pv = "rotate(".concat(zv.rotate, " 0 0)");
                return {
                  outer: Sv,
                  inner: {
                    transform: "".concat(ev, " ").concat(gv, " ").concat(pv)
                  },
                  path: {
                    transform: "translate(".concat(hv / 2 * -1, " -256)")
                  }
                }
              }({
                transform: pv,
                containerWidth: Tv,
                iconWidth: Nv
              }),
              av = {
                tag: "rect",
                attributes: dv(dv({}, kh), {}, {
                  fill: "white"
                })
              },
              sv = lv.children ? {
                children: lv.children.map(Xh)
              } : {},
              Cv = {
                tag: "g",
                attributes: dv({}, wv.inner),
                children: [Xh(dv({
                  tag: lv.tag,
                  attributes: dv(dv({}, lv.attributes), wv.path)
                }, sv))]
              },
              iv = {
                tag: "g",
                attributes: dv({}, wv.outer),
                children: [Cv]
              },
              cv = "mask-".concat(gv || Ez()),
              Gv = "clip-".concat(gv || Ez()),
              mv = {
                tag: "mask",
                attributes: dv(dv({}, kh), {}, {
                  id: cv,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [av, iv]
              },
              jv = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: Gv
                  },
                  children: (zv = Wv, "g" === zv.tag ? zv.children : [zv])
                }, mv]
              };
            return Pv.push(jv, {
              tag: "rect",
              attributes: dv({
                fill: "currentColor",
                "clip-path": "url(#".concat(Gv, ")"),
                mask: "url(#".concat(cv, ")")
              }, kh)
            }), {
              children: Pv,
              attributes: hv
            }
          }
        }
      },
      vS = {
        provides: function(vv) {
          var zv = !1;
          Fv.matchMedia && (zv = Fv.matchMedia("(prefers-reduced-motion: reduce)").matches), vv.missingIconAbstract = function() {
            var vv = [],
              Pv = {
                fill: "currentColor"
              },
              hv = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            vv.push({
              tag: "path",
              attributes: dv(dv({}, Pv), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var Sv = dv(dv({}, hv), {}, {
                attributeName: "opacity"
              }),
              ev = {
                tag: "circle",
                attributes: dv(dv({}, Pv), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return zv || ev.children.push({
              tag: "animate",
              attributes: dv(dv({}, hv), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: dv(dv({}, Sv), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), vv.push(ev), vv.push({
              tag: "path",
              attributes: dv(dv({}, Pv), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: zv ? [] : [{
                tag: "animate",
                attributes: dv(dv({}, Sv), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), zv || vv.push({
              tag: "path",
              attributes: dv(dv({}, Pv), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: dv(dv({}, Sv), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: vv
            }
          }
        }
      };
    ! function(vv, zv) {
      var Pv = zv.mixoutsTo;
      AP = vv, LP = {}, Object.keys(HP).forEach((function(vv) {
        -1 === MP.indexOf(vv) && delete HP[vv]
      })), AP.forEach((function(vv) {
        var zv = vv.mixout ? vv.mixout() : {};
        if (Object.keys(zv).forEach((function(vv) {
            "function" === typeof zv[vv] && (Pv[vv] = zv[vv]), "object" === Wv(zv[vv]) && Object.keys(zv[vv]).forEach((function(hv) {
              Pv[vv] || (Pv[vv] = {}), Pv[vv][hv] = zv[vv][hv]
            }))
          })), vv.hooks) {
          var hv = vv.hooks();
          Object.keys(hv).forEach((function(vv) {
            LP[vv] || (LP[vv] = []), LP[vv].push(hv[vv])
          }))
        }
        vv.provides && vv.provides(HP)
      }))
    }([PP, Uh, Rh, xh, th, Eh, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              Gh(), oh = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            fh(yP("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            jh && jh.disconnect()
          },
          watch: function(vv) {
            var zv = vv.observeMutationsRoot;
            oh ? mh() : fh(yP("mutationObserverCallbacks", {
              observeMutationsRoot: zv
            }))
          }
        }
      }
    }, rh, uh, vS, {
      hooks: function() {
        return {
          parseNodeAttributes: function(vv, zv) {
            var Pv = zv.getAttribute("data-fa-symbol"),
              hv = null !== Pv && ("" === Pv || Pv);
            return vv.symbol = hv, vv
          }
        }
      }
    }], {
      mixoutsTo: rP
    });
    var zS = rP.noAuto,
      PS = rP.config,
      hS = rP.library,
      SS = rP.dom,
      eS = rP.parse,
      gS = rP.findIconDefinition,
      pS = rP.toHtml,
      dS = rP.icon,
      NS = rP.layer,
      lS = rP.text,
      TS = rP.counter
  },
  6399: vv => {
    vv.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);