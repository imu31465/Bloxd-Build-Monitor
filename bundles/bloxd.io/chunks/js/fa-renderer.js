/*! For license information please see bbb6l5.fa-renderer.81807e57.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6559: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      FontAwesomeIcon: () => rq
    });
    var Yq = gq(6553),
      lq = gq(4800),
      Oq = gq.n(lq),
      mq = gq(57);

    function xq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function Aq(qq, Eq, gq) {
      return (Eq = function(qq) {
        var Eq = function(qq, Eq) {
          if ("object" != typeof qq || !qq) return qq;
          var gq = qq[Symbol.toPrimitive];
          if (void 0 !== gq) {
            var Yq = gq.call(qq, Eq || "default");
            if ("object" != typeof Yq) return Yq;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eq ? String : Number)(qq)
        }(qq, "string");
        return "symbol" == typeof Eq ? Eq : Eq + ""
      }(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function cq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function uq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? cq(Object(gq), !0).forEach((function(Eq) {
          Aq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : cq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function Bq(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        var gq = null == qq ? null : "undefined" != typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
        if (null != gq) {
          var Yq, lq, Oq, mq, xq = [],
            Aq = !0,
            cq = !1;
          try {
            if (Oq = (gq = gq.call(qq)).next, 0 === Eq) {
              if (Object(gq) !== gq) return;
              Aq = !1
            } else
              for (; !(Aq = (Yq = Oq.call(gq)).done) && (xq.push(Yq.value), xq.length !== Eq); Aq = !0);
          } catch (qq) {
            cq = !0, lq = qq
          } finally {
            try {
              if (!Aq && null != gq.return && (mq = gq.return(), Object(mq) !== mq)) return
            } finally {
              if (cq) throw lq
            }
          }
          return xq
        }
      }(qq, Eq) || aq(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Wq(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return xq(qq)
      }(qq) || function(qq) {
        if ("undefined" != typeof Symbol && null != qq[Symbol.iterator] || null != qq["@@iterator"]) return Array.from(qq)
      }(qq) || aq(qq) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Nq(qq) {
      return Nq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Nq(qq)
    }

    function aq(qq, Eq) {
      if (qq) {
        if ("string" == typeof qq) return xq(qq, Eq);
        var gq = {}.toString.call(qq).slice(8, -1);
        return "Object" === gq && qq.constructor && (gq = qq.constructor.name), "Map" === gq || "Set" === gq ? Array.from(qq) : "Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq) ? xq(qq, Eq) : void 0
      }
    }
    var Vq;
    try {
      var dq = gq(6564);
      Vq = dq.version
    } catch (hq) {
      Vq = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function jq(qq) {
      var Eq = qq.beat,
        gq = qq.fade,
        Yq = qq.beatFade,
        lq = qq.bounce,
        Oq = qq.shake,
        mq = qq.flash,
        xq = qq.spin,
        cq = qq.spinPulse,
        uq = qq.spinReverse,
        Wq = qq.pulse,
        Nq = qq.fixedWidth,
        aq = qq.inverse,
        dq = qq.border,
        jq = qq.listItem,
        Hq = qq.flip,
        oq = qq.size,
        Pq = qq.rotation,
        Qq = qq.pull,
        yq = qq.swapOpacity,
        tq = qq.rotateBy,
        rq = qq.widthAuto,
        vq = function(qq, Eq) {
          for (var gq = Bq(qq.split("-"), 2), Yq = gq[0], lq = gq[1], Oq = Bq(Eq.split("-"), 2), mq = Oq[0], xq = Oq[1], Aq = Yq.split("."), cq = mq.split("."), uq = 0; uq < Math.max(Aq.length, cq.length); uq++) {
            var Wq = Aq[uq] || "0",
              Nq = cq[uq] || "0",
              aq = parseInt(Wq, 10),
              Vq = parseInt(Nq, 10);
            if (aq !== Vq) return aq > Vq
          }
          for (var dq = 0; dq < Math.max(Aq.length, cq.length); dq++) {
            var jq = Aq[dq] || "0",
              Hq = cq[dq] || "0";
            if (jq !== Hq && jq.length !== Hq.length) return jq.length < Hq.length
          }
          return !(lq && !xq)
        }(Vq, "7.0.0"),
        hq = Aq(Aq(Aq(Aq(Aq(Aq({
          "fa-beat": Eq,
          "fa-fade": gq,
          "fa-beat-fade": Yq,
          "fa-bounce": lq,
          "fa-shake": Oq,
          "fa-flash": mq,
          "fa-spin": xq,
          "fa-spin-reverse": uq,
          "fa-spin-pulse": cq,
          "fa-pulse": Wq,
          "fa-fw": Nq,
          "fa-inverse": aq,
          "fa-border": dq,
          "fa-li": jq,
          "fa-flip": !0 === Hq,
          "fa-flip-horizontal": "horizontal" === Hq || "both" === Hq,
          "fa-flip-vertical": "vertical" === Hq || "both" === Hq
        }, "fa-".concat(oq), "undefined" !== typeof oq && null !== oq), "fa-rotate-".concat(Pq), "undefined" !== typeof Pq && null !== Pq && 0 !== Pq), "fa-pull-".concat(Qq), "undefined" !== typeof Qq && null !== Qq), "fa-swap-opacity", yq), "fa-rotate-by", vq && tq), "fa-width-auto", vq && rq);
      return Object.keys(hq).map((function(qq) {
        return hq[qq] ? qq : null
      })).filter((function(qq) {
        return qq
      }))
    }

    function Hq(qq) {
      return Eq = qq, (Eq -= 0) === Eq ? qq : (qq = qq.replace(/[\-_\s]+(.)?/g, (function(qq, Eq) {
        return Eq ? Eq.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + qq.substr(1);
      var Eq
    }
    var oq = ["style"];
    var Pq = !1;
    try {
      Pq = !0
    } catch (hq) {}

    function Qq(qq) {
      return qq && "object" === Nq(qq) && qq.prefix && qq.iconName && qq.icon ? qq : Yq.parse.icon ? Yq.parse.icon(qq) : null === qq ? null : qq && "object" === Nq(qq) && qq.prefix && qq.iconName ? qq : Array.isArray(qq) && 2 === qq.length ? {
        prefix: qq[0],
        iconName: qq[1]
      } : "string" === typeof qq ? {
        prefix: "fas",
        iconName: qq
      } : void 0
    }

    function yq(qq, Eq) {
      return Array.isArray(Eq) && Eq.length > 0 || !Array.isArray(Eq) && Eq ? Aq({}, qq, Eq) : {}
    }
    var tq = {
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
      rq = mq.forwardRef((function(qq, Eq) {
        var gq = uq(uq({}, tq), qq),
          lq = gq.icon,
          Oq = gq.mask,
          mq = gq.symbol,
          xq = gq.className,
          Aq = gq.title,
          cq = gq.titleId,
          Bq = gq.maskId,
          Nq = Qq(lq),
          aq = yq("classes", [].concat(Wq(jq(gq)), Wq((xq || "").split(" ")))),
          Vq = yq("transform", "string" === typeof gq.transform ? Yq.parse.transform(gq.transform) : gq.transform),
          dq = yq("mask", Qq(Oq)),
          Hq = (0, Yq.icon)(Nq, uq(uq(uq(uq({}, aq), Vq), dq), {}, {
            symbol: mq,
            title: Aq,
            titleId: cq,
            maskId: Bq
          }));
        if (!Hq) return function() {
          var qq;
          !Pq && console && "function" === typeof console.error && (qq = console).error.apply(qq, arguments)
        }("Could not find icon", Nq), null;
        var oq = Hq.abstract,
          rq = {
            ref: Eq
          };
        return Object.keys(gq).forEach((function(qq) {
          tq.hasOwnProperty(qq) || (rq[qq] = gq[qq])
        })), vq(oq[0], rq)
      }));
    rq.displayName = "FontAwesomeIcon", rq.propTypes = {
      beat: Oq().bool,
      border: Oq().bool,
      beatFade: Oq().bool,
      bounce: Oq().bool,
      className: Oq().string,
      fade: Oq().bool,
      flash: Oq().bool,
      mask: Oq().oneOfType([Oq().object, Oq().array, Oq().string]),
      maskId: Oq().string,
      fixedWidth: Oq().bool,
      inverse: Oq().bool,
      flip: Oq().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: Oq().oneOfType([Oq().object, Oq().array, Oq().string]),
      listItem: Oq().bool,
      pull: Oq().oneOf(["right", "left"]),
      pulse: Oq().bool,
      rotation: Oq().oneOf([0, 90, 180, 270]),
      rotateBy: Oq().bool,
      shake: Oq().bool,
      size: Oq().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: Oq().bool,
      spinPulse: Oq().bool,
      spinReverse: Oq().bool,
      symbol: Oq().oneOfType([Oq().bool, Oq().string]),
      title: Oq().string,
      titleId: Oq().string,
      transform: Oq().oneOfType([Oq().string, Oq().object]),
      swapOpacity: Oq().bool,
      widthAuto: Oq().bool
    };
    var vq = function qq(Eq, gq) {
      var Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof gq) return gq;
      var lq = (gq.children || []).map((function(gq) {
          return qq(Eq, gq)
        })),
        Oq = Object.keys(gq.attributes || {}).reduce((function(qq, Eq) {
          var Yq = gq.attributes[Eq];
          switch (Eq) {
            case "class":
              qq.attrs.className = Yq, delete gq.attributes.class;
              break;
            case "style":
              qq.attrs.style = Yq.split(";").map((function(qq) {
                return qq.trim()
              })).filter((function(qq) {
                return qq
              })).reduce((function(qq, Eq) {
                var gq, Yq = Eq.indexOf(":"),
                  lq = Hq(Eq.slice(0, Yq)),
                  Oq = Eq.slice(Yq + 1).trim();
                return lq.startsWith("webkit") ? qq[(gq = lq, gq.charAt(0).toUpperCase() + gq.slice(1))] = Oq : qq[lq] = Oq, qq
              }), {});
              break;
            default:
              0 === Eq.indexOf("aria-") || 0 === Eq.indexOf("data-") ? qq.attrs[Eq.toLowerCase()] = Yq : qq.attrs[Hq(Eq)] = Yq
          }
          return qq
        }), {
          attrs: {}
        }),
        mq = Yq.style,
        xq = void 0 === mq ? {} : mq,
        Aq = function(qq, Eq) {
          if (null == qq) return {};
          var gq, Yq, lq = function(qq, Eq) {
            if (null == qq) return {};
            var gq = {};
            for (var Yq in qq)
              if ({}.hasOwnProperty.call(qq, Yq)) {
                if (-1 !== Eq.indexOf(Yq)) continue;
                gq[Yq] = qq[Yq]
              } return gq
          }(qq, Eq);
          if (Object.getOwnPropertySymbols) {
            var Oq = Object.getOwnPropertySymbols(qq);
            for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], -1 === Eq.indexOf(gq) && {}.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
          }
          return lq
        }(Yq, oq);
      return Oq.attrs.style = uq(uq({}, Oq.attrs.style), xq), Eq.apply(void 0, [gq.tag, uq(uq({}, Oq.attrs), Aq)].concat(Wq(lq)))
    }.bind(null, mq.createElement)
  },
  4807: (qq, Eq, gq) => {
    var Yq = gq(4811);

    function lq() {}

    function Oq() {}
    Oq.resetWarningCache = lq, qq.exports = function() {
      function qq(qq, Eq, gq, lq, Oq, mq) {
        if (mq !== Yq) {
          var xq = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw xq.name = "Invariant Violation", xq
        }
      }

      function Eq() {
        return qq
      }
      qq.isRequired = qq;
      var gq = {
        array: qq,
        bigint: qq,
        bool: qq,
        func: qq,
        number: qq,
        object: qq,
        string: qq,
        symbol: qq,
        any: qq,
        arrayOf: Eq,
        element: qq,
        elementType: qq,
        instanceOf: Eq,
        node: qq,
        objectOf: Eq,
        oneOf: Eq,
        oneOfType: Eq,
        shape: Eq,
        exact: Eq,
        checkPropTypes: Oq,
        resetWarningCache: lq
      };
      return gq.PropTypes = gq, gq
    }
  },
  4800: (qq, Eq, gq) => {
    qq.exports = gq(4807)()
  },
  4811: qq => {
    qq.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6553: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function lq(qq, Eq) {
      for (var gq = 0; gq < Eq.length; gq++) {
        var Yq = Eq[gq];
        Yq.enumerable = Yq.enumerable || !1, Yq.configurable = !0, "value" in Yq && (Yq.writable = !0), Object.defineProperty(qq, Bq(Yq.key), Yq)
      }
    }

    function Oq(qq, Eq) {
      var gq = "undefined" != typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
      if (!gq) {
        if (Array.isArray(qq) || (gq = Nq(qq)) || Eq && qq && "number" == typeof qq.length) {
          gq && (qq = gq);
          var Yq = 0,
            lq = function() {};
          return {
            s: lq,
            n: function() {
              return Yq >= qq.length ? {
                done: !0
              } : {
                done: !1,
                value: qq[Yq++]
              }
            },
            e: function(qq) {
              throw qq
            },
            f: lq
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Oq, mq = !0,
        xq = !1;
      return {
        s: function() {
          gq = gq.call(qq)
        },
        n: function() {
          var qq = gq.next();
          return mq = qq.done, qq
        },
        e: function(qq) {
          xq = !0, Oq = qq
        },
        f: function() {
          try {
            mq || null == gq.return || gq.return()
          } finally {
            if (xq) throw Oq
          }
        }
      }
    }

    function mq(qq, Eq, gq) {
      return (Eq = Bq(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function xq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function Aq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? xq(Object(gq), !0).forEach((function(Eq) {
          mq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : xq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function cq(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        var gq = null == qq ? null : "undefined" != typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
        if (null != gq) {
          var Yq, lq, Oq, mq, xq = [],
            Aq = !0,
            cq = !1;
          try {
            if (Oq = (gq = gq.call(qq)).next, 0 === Eq) {
              if (Object(gq) !== gq) return;
              Aq = !1
            } else
              for (; !(Aq = (Yq = Oq.call(gq)).done) && (xq.push(Yq.value), xq.length !== Eq); Aq = !0);
          } catch (qq) {
            cq = !0, lq = qq
          } finally {
            try {
              if (!Aq && null != gq.return && (mq = gq.return(), Object(mq) !== mq)) return
            } finally {
              if (cq) throw lq
            }
          }
          return xq
        }
      }(qq, Eq) || Nq(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uq(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return Yq(qq)
      }(qq) || function(qq) {
        if ("undefined" != typeof Symbol && null != qq[Symbol.iterator] || null != qq["@@iterator"]) return Array.from(qq)
      }(qq) || Nq(qq) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Bq(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != typeof qq || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != typeof Yq) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == typeof Eq ? Eq : Eq + ""
    }

    function Wq(qq) {
      return Wq = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, Wq(qq)
    }

    function Nq(qq, Eq) {
      if (qq) {
        if ("string" == typeof qq) return Yq(qq, Eq);
        var gq = {}.toString.call(qq).slice(8, -1);
        return "Object" === gq && qq.constructor && (gq = qq.constructor.name), "Map" === gq || "Set" === gq ? Array.from(qq) : "Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq) ? Yq(qq, Eq) : void 0
      }
    }
    gq.r(Eq), gq.d(Eq, {
      api: () => Cg,
      config: () => gl,
      counter: () => Bl,
      dom: () => ll,
      findIconDefinition: () => ml,
      icon: () => Al,
      layer: () => cl,
      library: () => Yl,
      noAuto: () => El,
      parse: () => Ol,
      text: () => ul,
      toHtml: () => xl
    });
    var aq = function() {},
      Vq = {},
      dq = {},
      jq = null,
      Hq = {
        mark: aq,
        measure: aq
      };
    try {
      "undefined" !== typeof window && (Vq = window), "undefined" !== typeof document && (dq = document), "undefined" !== typeof MutationObserver && (jq = MutationObserver), "undefined" !== typeof performance && (Hq = performance)
    } catch (Uq) {}
    var oq, Pq, Qq = (Vq.navigator || {}).userAgent,
      yq = void 0 === Qq ? "" : Qq,
      tq = Vq,
      rq = dq,
      vq = jq,
      hq = Hq,
      nq = (tq.document, !!rq.documentElement && !!rq.head && "function" === typeof rq.addEventListener && "function" === typeof rq.createElement),
      bq = ~yq.indexOf("MSIE") || ~yq.indexOf("Trident/"),
      iq = {
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
      Zq = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      fq = "classic",
      Mq = "duotone",
      Tq = "sharp",
      zq = "sharp-duotone",
      Sq = "chisel",
      pq = "etch",
      Gq = "graphite",
      Lq = "jelly",
      Jq = "jelly-duo",
      kq = "jelly-fill",
      Rq = "notdog",
      Uq = "notdog-duo",
      Fq = "slab",
      sq = "slab-press",
      Xq = "thumbprint",
      wq = "utility",
      Kq = "utility-duo",
      Cq = "utility-fill",
      Iq = "whiteboard",
      eq = [fq, Mq, Tq, zq, Sq, pq, Gq, Lq, Jq, kq, Rq, Uq, Fq, sq, Xq, wq, Kq, Cq, Iq],
      Dq = (mq(mq(mq(mq(mq(mq(mq(mq(mq(mq(oq = {}, fq, "Classic"), Mq, "Duotone"), Tq, "Sharp"), zq, "Sharp Duotone"), Sq, "Chisel"), pq, "Etch"), Gq, "Graphite"), Lq, "Jelly"), Jq, "Jelly Duo"), kq, "Jelly Fill"), mq(mq(mq(mq(mq(mq(mq(mq(mq(oq, Rq, "Notdog"), Uq, "Notdog Duo"), Fq, "Slab"), sq, "Slab Press"), Xq, "Thumbprint"), wq, "Utility"), Kq, "Utility Duo"), Cq, "Utility Fill"), Iq, "Whiteboard"), new Map([
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
      qE = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      EE = {
        fak: "kit",
        "fa-kit": "kit"
      },
      gE = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      YE = (mq(mq({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      lE = {
        "kit-duotone": "fakd"
      },
      OE = "duotone-group",
      mE = "swap-opacity",
      xE = "primary",
      AE = "secondary",
      cE = (mq(mq(mq(mq(mq(mq(mq(mq(mq(mq(Pq = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), mq(mq(mq(mq(mq(mq(mq(mq(mq(Pq, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), mq(mq({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      uE = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      BE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      WE = BE.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      NE = [].concat(uq(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", OE, mE, xE, AE]).concat(BE.map((function(qq) {
        return "".concat(qq, "x")
      }))).concat(WE.map((function(qq) {
        return "w-".concat(qq)
      }))),
      aE = "___FONT_AWESOME___",
      VE = "svg-inline--fa",
      dE = "data-fa-i2svg",
      jE = "data-fa-pseudo-element",
      HE = "data-prefix",
      oE = "data-icon",
      PE = "fontawesome-i2svg",
      QE = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      yE = ["::before", "::after", ":before", ":after"],
      tE = function() {
        try {
          return !0
        } catch (qq) {
          return !1
        }
      }();

    function rE(qq) {
      return new Proxy(qq, {
        get: function(qq, Eq) {
          return Eq in qq ? qq[Eq] : qq[fq]
        }
      })
    }
    var vE = Aq({}, iq);
    vE[fq] = Aq(Aq(Aq(Aq({}, {
      "fa-duotone": "duotone"
    }), iq[fq]), EE), gE);
    var hE = rE(vE),
      nE = Aq({}, {
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
    nE[fq] = Aq(Aq(Aq(Aq({}, {
      duotone: "fad"
    }), nE[fq]), YE), lE);
    var bE = rE(nE),
      iE = Aq({}, cE);
    iE[fq] = Aq(Aq({}, iE[fq]), {
      fak: "fa-kit"
    });
    var ZE = rE(iE),
      fE = Aq({}, {
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
    fE[fq] = Aq(Aq({}, fE[fq]), {
      "fa-kit": "fak"
    });
    rE(fE);
    var ME = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      TE = "fa-layers-text",
      zE = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      SE = (rE(Aq({}, {
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
      pE = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      GE = [].concat(uq(["kit"]), uq(NE)),
      LE = tq.FontAwesomeConfig || {};
    if (rq && "function" === typeof rq.querySelector) {
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
      ].forEach((function(qq) {
        var Eq = cq(qq, 2),
          gq = Eq[0],
          Yq = Eq[1],
          lq = function(qq) {
            return "" === qq || "false" !== qq && ("true" === qq || qq)
          }(function(qq) {
            var Eq = rq.querySelector("script[" + qq + "]");
            if (Eq) return Eq.getAttribute(qq)
          }(gq));
        void 0 !== lq && null !== lq && (LE[Yq] = lq)
      }))
    }
    var JE = {
      styleDefault: "solid",
      familyDefault: fq,
      cssPrefix: "fa",
      replacementClass: VE,
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
    LE.familyPrefix && (LE.cssPrefix = LE.familyPrefix);
    var kE = Aq(Aq({}, JE), LE);
    kE.autoReplaceSvg || (kE.observeMutations = !1);
    var RE = {};
    Object.keys(JE).forEach((function(qq) {
      Object.defineProperty(RE, qq, {
        enumerable: !0,
        set: function(Eq) {
          kE[qq] = Eq, UE.forEach((function(qq) {
            return qq(RE)
          }))
        },
        get: function() {
          return kE[qq]
        }
      })
    })), Object.defineProperty(RE, "familyPrefix", {
      enumerable: !0,
      set: function(qq) {
        kE.cssPrefix = qq, UE.forEach((function(qq) {
          return qq(RE)
        }))
      },
      get: function() {
        return kE.cssPrefix
      }
    }), tq.FontAwesomeConfig = RE;
    var UE = [];
    var FE = 16,
      sE = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function XE() {
      for (var qq = 12, Eq = ""; qq-- > 0;) Eq += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return Eq
    }

    function wE(qq) {
      for (var Eq = [], gq = (qq || []).length >>> 0; gq--;) Eq[gq] = qq[gq];
      return Eq
    }

    function KE(qq) {
      return qq.classList ? wE(qq.classList) : (qq.getAttribute("class") || "").split(" ").filter((function(qq) {
        return qq
      }))
    }

    function CE(qq) {
      return "".concat(qq).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function IE(qq) {
      return Object.keys(qq || {}).reduce((function(Eq, gq) {
        return Eq + "".concat(gq, ": ").concat(qq[gq].trim(), ";")
      }), "")
    }

    function eE(qq) {
      return qq.size !== sE.size || qq.x !== sE.x || qq.y !== sE.y || qq.rotate !== sE.rotate || qq.flipX || qq.flipY
    }

    function DE() {
      var qq = "fa",
        Eq = VE,
        gq = RE.cssPrefix,
        Yq = RE.replacementClass,
        lq = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (gq !== qq || Yq !== Eq) {
        var Oq = new RegExp("\\.".concat(qq, "\\-"), "g"),
          mq = new RegExp("\\--".concat(qq, "\\-"), "g"),
          xq = new RegExp("\\.".concat(Eq), "g");
        lq = lq.replace(Oq, ".".concat(gq, "-")).replace(mq, "--".concat(gq, "-")).replace(xq, ".".concat(Yq))
      }
      return lq
    }
    var qg = !1;

    function Eg() {
      RE.autoAddCss && !qg && (! function(qq) {
        if (qq && nq) {
          var Eq = rq.createElement("style");
          Eq.setAttribute("type", "text/css"), Eq.innerHTML = qq;
          for (var gq = rq.head.childNodes, Yq = null, lq = gq.length - 1; lq > -1; lq--) {
            var Oq = gq[lq],
              mq = (Oq.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(mq) > -1 && (Yq = Oq)
          }
          rq.head.insertBefore(Eq, Yq)
        }
      }(DE()), qg = !0)
    }
    var gg = {
        mixout: function() {
          return {
            dom: {
              css: DE,
              insertCss: Eg
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              Eg()
            },
            beforeI2svg: function() {
              Eg()
            }
          }
        }
      },
      Yg = tq || {};
    Yg[aE] || (Yg[aE] = {}), Yg[aE].styles || (Yg[aE].styles = {}), Yg[aE].hooks || (Yg[aE].hooks = {}), Yg[aE].shims || (Yg[aE].shims = []);
    var lg = Yg[aE],
      Og = [],
      mg = function() {
        rq.removeEventListener("DOMContentLoaded", mg), xg = 1, Og.map((function(qq) {
          return qq()
        }))
      },
      xg = !1;

    function Ag(qq) {
      var Eq = qq.tag,
        gq = qq.attributes,
        Yq = void 0 === gq ? {} : gq,
        lq = qq.children,
        Oq = void 0 === lq ? [] : lq;
      return "string" === typeof qq ? CE(qq) : "<".concat(Eq, " ").concat(function(qq) {
        return Object.keys(qq || {}).reduce((function(Eq, gq) {
          return Eq + "".concat(gq, '="').concat(CE(qq[gq]), '" ')
        }), "").trim()
      }(Yq), ">").concat(Oq.map(Ag).join(""), "</").concat(Eq, ">")
    }

    function cg(qq, Eq, gq) {
      if (qq && qq[Eq] && qq[Eq][gq]) return {
        prefix: Eq,
        iconName: gq,
        icon: qq[Eq][gq]
      }
    }
    nq && ((xg = (rq.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(rq.readyState)) || rq.addEventListener("DOMContentLoaded", mg));
    var ug = function(qq, Eq, gq, Yq) {
      var lq, Oq, mq, xq = Object.keys(qq),
        Aq = xq.length,
        cq = void 0 !== Yq ? function(qq, Eq) {
          return function(gq, Yq, lq, Oq) {
            return qq.call(Eq, gq, Yq, lq, Oq)
          }
        }(Eq, Yq) : Eq;
      for (void 0 === gq ? (lq = 1, mq = qq[xq[0]]) : (lq = 0, mq = gq); lq < Aq; lq++) mq = cq(mq, qq[Oq = xq[lq]], Oq, qq);
      return mq
    };

    function Bg(qq) {
      return 1 !== uq(qq).length ? null : qq.codePointAt(0).toString(16)
    }

    function Wg(qq) {
      return Object.keys(qq).reduce((function(Eq, gq) {
        var Yq = qq[gq];
        return !!Yq.icon ? Eq[Yq.iconName] = Yq.icon : Eq[gq] = Yq, Eq
      }), {})
    }

    function Ng(qq, Eq) {
      var gq = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        Yq = void 0 !== gq && gq,
        lq = Wg(Eq);
      "function" !== typeof lg.hooks.addPack || Yq ? lg.styles[qq] = Aq(Aq({}, lg.styles[qq] || {}), lq) : lg.hooks.addPack(qq, Wg(Eq)), "fas" === qq && Ng("fa", Eq)
    }
    var ag = lg.styles,
      Vg = lg.shims,
      dg = Object.keys(ZE),
      jg = dg.reduce((function(qq, Eq) {
        return qq[Eq] = Object.keys(ZE[Eq]), qq
      }), {}),
      Hg = null,
      og = {},
      Pg = {},
      Qg = {},
      yg = {},
      tg = {};

    function rg(qq, Eq) {
      var gq, Yq = Eq.split("-"),
        lq = Yq[0],
        Oq = Yq.slice(1).join("-");
      return lq !== qq || "" === Oq || (gq = Oq, ~GE.indexOf(gq)) ? null : Oq
    }
    var vg, hg = function() {
      var qq = function(qq) {
        return ug(ag, (function(Eq, gq, Yq) {
          return Eq[Yq] = ug(gq, qq, {}), Eq
        }), {})
      };
      og = qq((function(qq, Eq, gq) {
        (Eq[3] && (qq[Eq[3]] = gq), Eq[2]) && Eq[2].filter((function(qq) {
          return "number" === typeof qq
        })).forEach((function(Eq) {
          qq[Eq.toString(16)] = gq
        }));
        return qq
      })), Pg = qq((function(qq, Eq, gq) {
        (qq[gq] = gq, Eq[2]) && Eq[2].filter((function(qq) {
          return "string" === typeof qq
        })).forEach((function(Eq) {
          qq[Eq] = gq
        }));
        return qq
      })), tg = qq((function(qq, Eq, gq) {
        var Yq = Eq[2];
        return qq[gq] = gq, Yq.forEach((function(Eq) {
          qq[Eq] = gq
        })), qq
      }));
      var Eq = "far" in ag || RE.autoFetchSvg,
        gq = ug(Vg, (function(qq, gq) {
          var Yq = gq[0],
            lq = gq[1],
            Oq = gq[2];
          return "far" !== lq || Eq || (lq = "fas"), "string" === typeof Yq && (qq.names[Yq] = {
            prefix: lq,
            iconName: Oq
          }), "number" === typeof Yq && (qq.unicodes[Yq.toString(16)] = {
            prefix: lq,
            iconName: Oq
          }), qq
        }), {
          names: {},
          unicodes: {}
        });
      Qg = gq.names, yg = gq.unicodes, Hg = fg(RE.styleDefault, {
        family: RE.familyDefault
      })
    };

    function ng(qq, Eq) {
      return (og[qq] || {})[Eq]
    }

    function bg(qq, Eq) {
      return (tg[qq] || {})[Eq]
    }

    function ig(qq) {
      return Qg[qq] || {
        prefix: null,
        iconName: null
      }
    }

    function Zg() {
      return Hg
    }
    vg = function(qq) {
      Hg = fg(qq.styleDefault, {
        family: RE.familyDefault
      })
    }, UE.push(vg), hg();

    function fg(qq) {
      var Eq = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        gq = void 0 === Eq ? fq : Eq,
        Yq = hE[gq][qq];
      if (gq === Mq && !qq) return "fad";
      var lq = bE[gq][qq] || bE[gq][Yq],
        Oq = qq in lg.styles ? qq : null;
      return lq || Oq || null
    }

    function Mg(qq) {
      return qq.sort().filter((function(qq, Eq, gq) {
        return gq.indexOf(qq) === Eq
      }))
    }
    var Tg = uE.concat(qE);

    function zg(qq) {
      var Eq = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        gq = void 0 !== Eq && Eq,
        Yq = null,
        lq = Mg(qq.filter((function(qq) {
          return Tg.includes(qq)
        }))),
        Oq = Mg(qq.filter((function(qq) {
          return !Tg.includes(qq)
        }))),
        mq = cq(lq.filter((function(qq) {
          return Yq = qq, !Zq.includes(qq)
        })), 1)[0],
        xq = void 0 === mq ? null : mq,
        uq = function(qq) {
          var Eq = fq,
            gq = dg.reduce((function(qq, Eq) {
              return qq[Eq] = "".concat(RE.cssPrefix, "-").concat(Eq), qq
            }), {});
          return eq.forEach((function(Yq) {
            (qq.includes(gq[Yq]) || qq.some((function(qq) {
              return jg[Yq].includes(qq)
            }))) && (Eq = Yq)
          })), Eq
        }(lq),
        Bq = Aq(Aq({}, function(qq) {
          var Eq = [],
            gq = null;
          return qq.forEach((function(qq) {
            var Yq = rg(RE.cssPrefix, qq);
            Yq ? gq = Yq : qq && Eq.push(qq)
          })), {
            iconName: gq,
            rest: Eq
          }
        }(Oq)), {}, {
          prefix: fg(xq, {
            family: uq
          })
        });
      return Aq(Aq(Aq({}, Bq), function(qq) {
        var Eq = qq.values,
          gq = qq.family,
          Yq = qq.canonical,
          lq = qq.givenPrefix,
          Oq = void 0 === lq ? "" : lq,
          mq = qq.styles,
          xq = void 0 === mq ? {} : mq,
          Aq = qq.config,
          cq = void 0 === Aq ? {} : Aq,
          uq = gq === Mq,
          Bq = Eq.includes("fa-duotone") || Eq.includes("fad"),
          Wq = "duotone" === cq.familyDefault,
          Nq = "fad" === Yq.prefix || "fa-duotone" === Yq.prefix;
        !uq && (Bq || Wq || Nq) && (Yq.prefix = "fad");
        (Eq.includes("fa-brands") || Eq.includes("fab")) && (Yq.prefix = "fab");
        if (!Yq.prefix && Sg.includes(gq)) {
          if (Object.keys(xq).find((function(qq) {
              return pg.includes(qq)
            })) || cq.autoFetchSvg) {
            var aq = Dq.get(gq).defaultShortPrefixId;
            Yq.prefix = aq, Yq.iconName = bg(Yq.prefix, Yq.iconName) || Yq.iconName
          }
        }
        "fa" !== Yq.prefix && "fa" !== Oq || (Yq.prefix = Zg() || "fas");
        return Yq
      }({
        values: qq,
        family: uq,
        styles: ag,
        config: RE,
        canonical: Bq,
        givenPrefix: Yq
      })), function(qq, Eq, gq) {
        var Yq = gq.prefix,
          lq = gq.iconName;
        if (qq || !Yq || !lq) return {
          prefix: Yq,
          iconName: lq
        };
        var Oq = "fa" === Eq ? ig(lq) : {},
          mq = bg(Yq, lq);
        lq = Oq.iconName || mq || lq, "far" !== (Yq = Oq.prefix || Yq) || ag.far || !ag.fas || RE.autoFetchSvg || (Yq = "fas");
        return {
          prefix: Yq,
          iconName: lq
        }
      }(gq, Yq, Bq))
    }
    var Sg = eq.filter((function(qq) {
        return qq !== fq || qq !== Mq
      })),
      pg = Object.keys(cE).filter((function(qq) {
        return qq !== fq
      })).map((function(qq) {
        return Object.keys(cE[qq])
      })).flat();
    var Gg = function() {
        return function(qq, Eq, gq) {
          return Eq && lq(qq.prototype, Eq), gq && lq(qq, gq), Object.defineProperty(qq, "prototype", {
            writable: !1
          }), qq
        }((function qq() {
          ! function(qq, Eq) {
            if (!(qq instanceof Eq)) throw new TypeError("Cannot call a class as a function")
          }(this, qq), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var qq = this, Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
            var lq = gq.reduce(this._pullDefinitions, {});
            Object.keys(lq).forEach((function(Eq) {
              qq.definitions[Eq] = Aq(Aq({}, qq.definitions[Eq] || {}), lq[Eq]), Ng(Eq, lq[Eq]);
              var gq = ZE[fq][Eq];
              gq && Ng(gq, lq[Eq]), hg()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(qq, Eq) {
            var gq = Eq.prefix && Eq.iconName && Eq.icon ? {
              0: Eq
            } : Eq;
            return Object.keys(gq).map((function(Eq) {
              var Yq = gq[Eq],
                lq = Yq.prefix,
                Oq = Yq.iconName,
                mq = Yq.icon,
                xq = mq[2];
              qq[lq] || (qq[lq] = {}), xq.length > 0 && xq.forEach((function(Eq) {
                "string" === typeof Eq && (qq[lq][Eq] = mq)
              })), qq[lq][Oq] = mq
            })), qq
          }
        }])
      }(),
      Lg = [],
      Jg = {},
      kg = {},
      Rg = Object.keys(kg);

    function Ug(qq, Eq) {
      for (var gq = arguments.length, Yq = new Array(gq > 2 ? gq - 2 : 0), lq = 2; lq < gq; lq++) Yq[lq - 2] = arguments[lq];
      return (Jg[qq] || []).forEach((function(qq) {
        Eq = qq.apply(null, [Eq].concat(Yq))
      })), Eq
    }

    function Fg(qq) {
      for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
      (Jg[qq] || []).forEach((function(qq) {
        qq.apply(null, gq)
      }))
    }

    function sg() {
      var qq = arguments[0],
        Eq = Array.prototype.slice.call(arguments, 1);
      return kg[qq] ? kg[qq].apply(null, Eq) : void 0
    }

    function Xg(qq) {
      "fa" === qq.prefix && (qq.prefix = "fas");
      var Eq = qq.iconName,
        gq = qq.prefix || Zg();
      if (Eq) return Eq = bg(gq, Eq) || Eq, cg(wg.definitions, gq, Eq) || cg(lg.styles, gq, Eq)
    }
    var wg = new Gg,
      Kg = {
        i2svg: function() {
          var qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return nq ? (Fg("beforeI2svg", qq), sg("pseudoElements2svg", qq), sg("i2svg", qq)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var qq, Eq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            gq = Eq.autoReplaceSvgRoot;
          !1 === RE.autoReplaceSvg && (RE.autoReplaceSvg = !0), RE.observeMutations = !0, qq = function() {
            Ig({
              autoReplaceSvgRoot: gq
            }), Fg("watch", Eq)
          }, nq && (xg ? setTimeout(qq, 0) : Og.push(qq))
        }
      },
      Cg = {
        noAuto: function() {
          RE.autoReplaceSvg = !1, RE.observeMutations = !1, Fg("noAuto")
        },
        config: RE,
        dom: Kg,
        parse: {
          icon: function(qq) {
            if (null === qq) return null;
            if ("object" === Wq(qq) && qq.prefix && qq.iconName) return {
              prefix: qq.prefix,
              iconName: bg(qq.prefix, qq.iconName) || qq.iconName
            };
            if (Array.isArray(qq) && 2 === qq.length) {
              var Eq = 0 === qq[1].indexOf("fa-") ? qq[1].slice(3) : qq[1],
                gq = fg(qq[0]);
              return {
                prefix: gq,
                iconName: bg(gq, Eq) || Eq
              }
            }
            if ("string" === typeof qq && (qq.indexOf("".concat(RE.cssPrefix, "-")) > -1 || qq.match(ME))) {
              var Yq = zg(qq.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: Yq.prefix || Zg(),
                iconName: bg(Yq.prefix, Yq.iconName) || Yq.iconName
              }
            }
            if ("string" === typeof qq) {
              var lq = Zg();
              return {
                prefix: lq,
                iconName: bg(lq, qq) || qq
              }
            }
          }
        },
        library: wg,
        findIconDefinition: Xg,
        toHtml: Ag
      },
      Ig = function() {
        var qq = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          Eq = void 0 === qq ? rq : qq;
        (Object.keys(lg.styles).length > 0 || RE.autoFetchSvg) && nq && RE.autoReplaceSvg && Cg.dom.i2svg({
          node: Eq
        })
      };

    function eg(qq, Eq) {
      return Object.defineProperty(qq, "abstract", {
        get: Eq
      }), Object.defineProperty(qq, "html", {
        get: function() {
          return qq.abstract.map((function(qq) {
            return Ag(qq)
          }))
        }
      }), Object.defineProperty(qq, "node", {
        get: function() {
          if (nq) {
            var Eq = rq.createElement("div");
            return Eq.innerHTML = qq.html, Eq.children
          }
        }
      }), qq
    }

    function Dg(qq) {
      var Eq = qq.icons,
        gq = Eq.main,
        Yq = Eq.mask,
        lq = qq.prefix,
        Oq = qq.iconName,
        mq = qq.transform,
        xq = qq.symbol,
        cq = qq.maskId,
        uq = qq.extra,
        Bq = qq.watchable,
        Wq = void 0 !== Bq && Bq,
        Nq = Yq.found ? Yq : gq,
        aq = Nq.width,
        Vq = Nq.height,
        dq = [RE.replacementClass, Oq ? "".concat(RE.cssPrefix, "-").concat(Oq) : ""].filter((function(qq) {
          return -1 === uq.classes.indexOf(qq)
        })).filter((function(qq) {
          return "" !== qq || !!qq
        })).concat(uq.classes).join(" "),
        jq = {
          children: [],
          attributes: Aq(Aq({}, uq.attributes), {}, {
            "data-prefix": lq,
            "data-icon": Oq,
            class: dq,
            role: uq.attributes.role || "img",
            viewBox: "0 0 ".concat(aq, " ").concat(Vq)
          })
        };
      (function(qq) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(Eq) {
          return Eq in qq
        }))
      })(uq.attributes) || uq.attributes["aria-hidden"] || (jq.attributes["aria-hidden"] = "true"), Wq && (jq.attributes[dE] = "");
      var Hq = Aq(Aq({}, jq), {}, {
          prefix: lq,
          iconName: Oq,
          main: gq,
          mask: Yq,
          maskId: cq,
          transform: mq,
          symbol: xq,
          styles: Aq({}, uq.styles)
        }),
        oq = Yq.found && gq.found ? sg("generateAbstractMask", Hq) || {
          children: [],
          attributes: {}
        } : sg("generateAbstractIcon", Hq) || {
          children: [],
          attributes: {}
        },
        Pq = oq.children,
        Qq = oq.attributes;
      return Hq.children = Pq, Hq.attributes = Qq, xq ? function(qq) {
        var Eq = qq.prefix,
          gq = qq.iconName,
          Yq = qq.children,
          lq = qq.attributes,
          Oq = qq.symbol,
          mq = !0 === Oq ? "".concat(Eq, "-").concat(RE.cssPrefix, "-").concat(gq) : Oq;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: Aq(Aq({}, lq), {}, {
              id: mq
            }),
            children: Yq
          }]
        }]
      }(Hq) : function(qq) {
        var Eq = qq.children,
          gq = qq.main,
          Yq = qq.mask,
          lq = qq.attributes,
          Oq = qq.styles,
          mq = qq.transform;
        if (eE(mq) && gq.found && !Yq.found) {
          var xq = {
            x: gq.width / gq.height / 2,
            y: .5
          };
          lq.style = IE(Aq(Aq({}, Oq), {}, {
            "transform-origin": "".concat(xq.x + mq.x / 16, "em ").concat(xq.y + mq.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: lq,
          children: Eq
        }]
      }(Hq)
    }

    function qY(qq) {
      var Eq = qq.content,
        gq = qq.width,
        Yq = qq.height,
        lq = qq.transform,
        Oq = qq.extra,
        mq = qq.watchable,
        xq = void 0 !== mq && mq,
        cq = Aq(Aq({}, Oq.attributes), {}, {
          class: Oq.classes.join(" ")
        });
      xq && (cq[dE] = "");
      var uq = Aq({}, Oq.styles);
      eE(lq) && (uq.transform = function(qq) {
        var Eq = qq.transform,
          gq = qq.width,
          Yq = void 0 === gq ? 16 : gq,
          lq = qq.height,
          Oq = void 0 === lq ? 16 : lq,
          mq = qq.startCentered,
          xq = void 0 !== mq && mq,
          Aq = "";
        return Aq += xq && bq ? "translate(".concat(Eq.x / FE - Yq / 2, "em, ").concat(Eq.y / FE - Oq / 2, "em) ") : xq ? "translate(calc(-50% + ".concat(Eq.x / FE, "em), calc(-50% + ").concat(Eq.y / FE, "em)) ") : "translate(".concat(Eq.x / FE, "em, ").concat(Eq.y / FE, "em) "), Aq += "scale(".concat(Eq.size / FE * (Eq.flipX ? -1 : 1), ", ").concat(Eq.size / FE * (Eq.flipY ? -1 : 1), ") "), Aq + "rotate(".concat(Eq.rotate, "deg) ")
      }({
        transform: lq,
        startCentered: !0,
        width: gq,
        height: Yq
      }), uq["-webkit-transform"] = uq.transform);
      var Bq = IE(uq);
      Bq.length > 0 && (cq.style = Bq);
      var Wq = [];
      return Wq.push({
        tag: "span",
        attributes: cq,
        children: [Eq]
      }), Wq
    }
    var EY = lg.styles;

    function gY(qq) {
      var Eq = qq[0],
        gq = qq[1],
        Yq = cq(qq.slice(4), 1)[0];
      return {
        found: !0,
        width: Eq,
        height: gq,
        icon: Array.isArray(Yq) ? {
          tag: "g",
          attributes: {
            class: "".concat(RE.cssPrefix, "-").concat(pE.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(RE.cssPrefix, "-").concat(pE.SECONDARY),
              fill: "currentColor",
              d: Yq[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(RE.cssPrefix, "-").concat(pE.PRIMARY),
              fill: "currentColor",
              d: Yq[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: Yq
          }
        }
      }
    }
    var YY = {
      found: !1,
      width: 512,
      height: 512
    };

    function lY(qq, Eq) {
      var gq = Eq;
      return "fa" === Eq && null !== RE.styleDefault && (Eq = Zg()), new Promise((function(Yq, lq) {
        if ("fa" === gq) {
          var Oq = ig(qq) || {};
          qq = Oq.iconName || qq, Eq = Oq.prefix || Eq
        }
        if (qq && Eq && EY[Eq] && EY[Eq][qq]) return Yq(gY(EY[Eq][qq]));
        ! function(qq, Eq) {
          tE || RE.showMissingIcons || !qq || console.error('Icon with name "'.concat(qq, '" and prefix "').concat(Eq, '" is missing.'))
        }(qq, Eq), Yq(Aq(Aq({}, YY), {}, {
          icon: RE.showMissingIcons && qq && sg("missingIconAbstract") || {}
        }))
      }))
    }
    var OY = function() {},
      mY = RE.measurePerformance && hq && hq.mark && hq.measure ? hq : {
        mark: OY,
        measure: OY
      },
      xY = 'FA "7.2.0"',
      AY = function(qq) {
        mY.mark("".concat(xY, " ").concat(qq, " ends")), mY.measure("".concat(xY, " ").concat(qq), "".concat(xY, " ").concat(qq, " begins"), "".concat(xY, " ").concat(qq, " ends"))
      },
      cY = function(qq) {
        return mY.mark("".concat(xY, " ").concat(qq, " begins")),
          function() {
            return AY(qq)
          }
      },
      uY = function() {};

    function BY(qq) {
      return "string" === typeof(qq.getAttribute ? qq.getAttribute(dE) : null)
    }

    function WY(qq) {
      return rq.createElementNS("http://www.w3.org/2000/svg", qq)
    }

    function NY(qq) {
      return rq.createElement(qq)
    }

    function aY(qq) {
      var Eq = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        gq = void 0 === Eq ? "svg" === qq.tag ? WY : NY : Eq;
      if ("string" === typeof qq) return rq.createTextNode(qq);
      var Yq = gq(qq.tag);
      return Object.keys(qq.attributes || []).forEach((function(Eq) {
        Yq.setAttribute(Eq, qq.attributes[Eq])
      })), (qq.children || []).forEach((function(qq) {
        Yq.appendChild(aY(qq, {
          ceFn: gq
        }))
      })), Yq
    }
    var VY = {
      replace: function(qq) {
        var Eq = qq[0];
        if (Eq.parentNode)
          if (qq[1].forEach((function(qq) {
              Eq.parentNode.insertBefore(aY(qq), Eq)
            })), null === Eq.getAttribute(dE) && RE.keepOriginalSource) {
            var gq = rq.createComment(function(qq) {
              var Eq = " ".concat(qq.outerHTML, " ");
              return "".concat(Eq, "Font Awesome fontawesome.com ")
            }(Eq));
            Eq.parentNode.replaceChild(gq, Eq)
          } else Eq.remove()
      },
      nest: function(qq) {
        var Eq = qq[0],
          gq = qq[1];
        if (~KE(Eq).indexOf(RE.replacementClass)) return VY.replace(qq);
        var Yq = new RegExp("".concat(RE.cssPrefix, "-.*"));
        if (delete gq[0].attributes.id, gq[0].attributes.class) {
          var lq = gq[0].attributes.class.split(" ").reduce((function(qq, Eq) {
            return Eq === RE.replacementClass || Eq.match(Yq) ? qq.toSvg.push(Eq) : qq.toNode.push(Eq), qq
          }), {
            toNode: [],
            toSvg: []
          });
          gq[0].attributes.class = lq.toSvg.join(" "), 0 === lq.toNode.length ? Eq.removeAttribute("class") : Eq.setAttribute("class", lq.toNode.join(" "))
        }
        var Oq = gq.map((function(qq) {
          return Ag(qq)
        })).join("\n");
        Eq.setAttribute(dE, ""), Eq.innerHTML = Oq
      }
    };

    function dY(qq) {
      qq()
    }

    function jY(qq, Eq) {
      var gq = "function" === typeof Eq ? Eq : uY;
      if (0 === qq.length) gq();
      else {
        var Yq = dY;
        "async" === RE.mutateApproach && (Yq = tq.requestAnimationFrame || dY), Yq((function() {
          var Eq = !0 === RE.autoReplaceSvg ? VY.replace : VY[RE.autoReplaceSvg] || VY.replace,
            Yq = cY("mutate");
          qq.map(Eq), Yq(), gq()
        }))
      }
    }
    var HY = !1;

    function oY() {
      HY = !0
    }

    function PY() {
      HY = !1
    }
    var QY = null;

    function yY(qq) {
      if (vq && RE.observeMutations) {
        var Eq = qq.treeCallback,
          gq = void 0 === Eq ? uY : Eq,
          Yq = qq.nodeCallback,
          lq = void 0 === Yq ? uY : Yq,
          Oq = qq.pseudoElementsCallback,
          mq = void 0 === Oq ? uY : Oq,
          xq = qq.observeMutationsRoot,
          Aq = void 0 === xq ? rq : xq;
        QY = new vq((function(qq) {
          if (!HY) {
            var Eq = Zg();
            wE(qq).forEach((function(qq) {
              if ("childList" === qq.type && qq.addedNodes.length > 0 && !BY(qq.addedNodes[0]) && (RE.searchPseudoElements && mq(qq.target), gq(qq.target)), "attributes" === qq.type && qq.target.parentNode && RE.searchPseudoElements && mq([qq.target], !0), "attributes" === qq.type && BY(qq.target) && ~SE.indexOf(qq.attributeName))
                if ("class" === qq.attributeName && function(qq) {
                    var Eq = qq.getAttribute ? qq.getAttribute(HE) : null,
                      gq = qq.getAttribute ? qq.getAttribute(oE) : null;
                    return Eq && gq
                  }(qq.target)) {
                  var Yq = zg(KE(qq.target)),
                    Oq = Yq.prefix,
                    xq = Yq.iconName;
                  qq.target.setAttribute(HE, Oq || Eq), xq && qq.target.setAttribute(oE, xq)
                } else(Aq = qq.target) && Aq.classList && Aq.classList.contains && Aq.classList.contains(RE.replacementClass) && lq(qq.target);
              var Aq
            }))
          }
        })), nq && QY.observe(Aq, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function tY(qq) {
      var Eq, gq, Yq = qq.getAttribute("data-prefix"),
        lq = qq.getAttribute("data-icon"),
        Oq = void 0 !== qq.innerText ? qq.innerText.trim() : "",
        mq = zg(KE(qq));
      return mq.prefix || (mq.prefix = Zg()), Yq && lq && (mq.prefix = Yq, mq.iconName = lq), mq.iconName && mq.prefix || (mq.prefix && Oq.length > 0 && (mq.iconName = (Eq = mq.prefix, gq = qq.innerText, (Pg[Eq] || {})[gq] || ng(mq.prefix, Bg(qq.innerText)))), !mq.iconName && RE.autoFetchSvg && qq.firstChild && qq.firstChild.nodeType === Node.TEXT_NODE && (mq.iconName = qq.firstChild.data)), mq
    }

    function rY(qq) {
      var Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        gq = tY(qq),
        Yq = gq.iconName,
        lq = gq.prefix,
        Oq = gq.rest,
        mq = function(qq) {
          return wE(qq.attributes).reduce((function(qq, Eq) {
            return "class" !== qq.name && "style" !== qq.name && (qq[Eq.name] = Eq.value), qq
          }), {})
        }(qq),
        xq = Ug("parseNodeAttributes", {}, qq),
        cq = Eq.styleParser ? function(qq) {
          var Eq = qq.getAttribute("style"),
            gq = [];
          return Eq && (gq = Eq.split(";").reduce((function(qq, Eq) {
            var gq = Eq.split(":"),
              Yq = gq[0],
              lq = gq.slice(1);
            return Yq && lq.length > 0 && (qq[Yq] = lq.join(":").trim()), qq
          }), {})), gq
        }(qq) : [];
      return Aq({
        iconName: Yq,
        prefix: lq,
        transform: sE,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: Oq,
          styles: cq,
          attributes: mq
        }
      }, xq)
    }
    var vY = lg.styles;

    function hY(qq) {
      var Eq = "nest" === RE.autoReplaceSvg ? rY(qq, {
        styleParser: !1
      }) : rY(qq);
      return ~Eq.extra.classes.indexOf(TE) ? sg("generateLayersText", qq, Eq) : sg("generateSvgReplacementMutation", qq, Eq)
    }

    function nY(qq) {
      var Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!nq) return Promise.resolve();
      var gq = rq.documentElement.classList,
        Yq = function(qq) {
          return gq.add("".concat(PE, "-").concat(qq))
        },
        lq = function(qq) {
          return gq.remove("".concat(PE, "-").concat(qq))
        },
        Oq = RE.autoFetchSvg ? [].concat(uq(qE), uq(uE)) : Zq.concat(Object.keys(vY));
      Oq.includes("fa") || Oq.push("fa");
      var mq = [".".concat(TE, ":not([").concat(dE, "])")].concat(Oq.map((function(qq) {
        return ".".concat(qq, ":not([").concat(dE, "])")
      }))).join(", ");
      if (0 === mq.length) return Promise.resolve();
      var xq = [];
      try {
        xq = wE(qq.querySelectorAll(mq))
      } catch (Bq) {}
      if (!(xq.length > 0)) return Promise.resolve();
      Yq("pending"), lq("complete");
      var Aq = cY("onTree"),
        cq = xq.reduce((function(qq, Eq) {
          try {
            var gq = hY(Eq);
            gq && qq.push(gq)
          } catch (Bq) {
            tE || "MissingIcon" === Bq.name && console.error(Bq)
          }
          return qq
        }), []);
      return new Promise((function(qq, gq) {
        Promise.all(cq).then((function(gq) {
          jY(gq, (function() {
            Yq("active"), Yq("complete"), lq("pending"), "function" === typeof Eq && Eq(), Aq(), qq()
          }))
        })).catch((function(qq) {
          Aq(), gq(qq)
        }))
      }))
    }

    function bY(qq) {
      var Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      hY(qq).then((function(qq) {
        qq && jY([qq], Eq)
      }))
    }
    var iY = function(qq) {
        var Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gq = Eq.transform,
          Yq = void 0 === gq ? sE : gq,
          lq = Eq.symbol,
          Oq = void 0 !== lq && lq,
          mq = Eq.mask,
          xq = void 0 === mq ? null : mq,
          cq = Eq.maskId,
          uq = void 0 === cq ? null : cq,
          Bq = Eq.classes,
          Wq = void 0 === Bq ? [] : Bq,
          Nq = Eq.attributes,
          aq = void 0 === Nq ? {} : Nq,
          Vq = Eq.styles,
          dq = void 0 === Vq ? {} : Vq;
        if (qq) {
          var jq = qq.prefix,
            Hq = qq.iconName,
            oq = qq.icon;
          return eg(Aq({
            type: "icon"
          }, qq), (function() {
            return Fg("beforeDOMElementCreation", {
              iconDefinition: qq,
              params: Eq
            }), Dg({
              icons: {
                main: gY(oq),
                mask: xq ? gY(xq.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: jq,
              iconName: Hq,
              transform: Aq(Aq({}, sE), Yq),
              symbol: Oq,
              maskId: uq,
              extra: {
                attributes: aq,
                styles: dq,
                classes: Wq
              }
            })
          }))
        }
      },
      ZY = {
        mixout: function() {
          return {
            icon: (qq = iY, function(Eq) {
              var gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Yq = (Eq || {}).icon ? Eq : Xg(Eq || {}),
                lq = gq.mask;
              return lq && (lq = (lq || {}).icon ? lq : Xg(lq || {})), qq(Yq, Aq(Aq({}, gq), {}, {
                mask: lq
              }))
            })
          };
          var qq
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(qq) {
              return qq.treeCallback = nY, qq.nodeCallback = bY, qq
            }
          }
        },
        provides: function(qq) {
          qq.i2svg = function(qq) {
            var Eq = qq.node,
              gq = void 0 === Eq ? rq : Eq,
              Yq = qq.callback;
            return nY(gq, void 0 === Yq ? function() {} : Yq)
          }, qq.generateSvgReplacementMutation = function(qq, Eq) {
            var gq = Eq.iconName,
              Yq = Eq.prefix,
              lq = Eq.transform,
              Oq = Eq.symbol,
              mq = Eq.mask,
              xq = Eq.maskId,
              Aq = Eq.extra;
            return new Promise((function(Eq, uq) {
              Promise.all([lY(gq, Yq), mq.iconName ? lY(mq.iconName, mq.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(mq) {
                var uq = cq(mq, 2),
                  Bq = uq[0],
                  Wq = uq[1];
                Eq([qq, Dg({
                  icons: {
                    main: Bq,
                    mask: Wq
                  },
                  prefix: Yq,
                  iconName: gq,
                  transform: lq,
                  symbol: Oq,
                  maskId: xq,
                  extra: Aq,
                  watchable: !0
                })])
              })).catch(uq)
            }))
          }, qq.generateAbstractIcon = function(qq) {
            var Eq, gq = qq.children,
              Yq = qq.attributes,
              lq = qq.main,
              Oq = qq.transform,
              mq = IE(qq.styles);
            return mq.length > 0 && (Yq.style = mq), eE(Oq) && (Eq = sg("generateAbstractTransformGrouping", {
              main: lq,
              transform: Oq,
              containerWidth: lq.width,
              iconWidth: lq.width
            })), gq.push(Eq || lq.icon), {
              children: gq,
              attributes: Yq
            }
          }
        }
      },
      fY = {
        mixout: function() {
          return {
            layer: function(qq) {
              var Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                gq = Eq.classes,
                Yq = void 0 === gq ? [] : gq;
              return eg({
                type: "layer"
              }, (function() {
                Fg("beforeDOMElementCreation", {
                  assembler: qq,
                  params: Eq
                });
                var gq = [];
                return qq((function(qq) {
                  Array.isArray(qq) ? qq.map((function(qq) {
                    gq = gq.concat(qq.abstract)
                  })) : gq = gq.concat(qq.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(RE.cssPrefix, "-layers")].concat(uq(Yq)).join(" ")
                  },
                  children: gq
                }]
              }))
            }
          }
        }
      },
      MY = {
        mixout: function() {
          return {
            counter: function(qq) {
              var Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                gq = Eq.title,
                Yq = void 0 === gq ? null : gq,
                lq = Eq.classes,
                Oq = void 0 === lq ? [] : lq,
                mq = Eq.attributes,
                xq = void 0 === mq ? {} : mq,
                cq = Eq.styles,
                Bq = void 0 === cq ? {} : cq;
              return eg({
                type: "counter",
                content: qq
              }, (function() {
                return Fg("beforeDOMElementCreation", {
                    content: qq,
                    params: Eq
                  }),
                  function(qq) {
                    var Eq = qq.content,
                      gq = qq.extra,
                      Yq = Aq(Aq({}, gq.attributes), {}, {
                        class: gq.classes.join(" ")
                      }),
                      lq = IE(gq.styles);
                    lq.length > 0 && (Yq.style = lq);
                    var Oq = [];
                    return Oq.push({
                      tag: "span",
                      attributes: Yq,
                      children: [Eq]
                    }), Oq
                  }({
                    content: qq.toString(),
                    title: Yq,
                    extra: {
                      attributes: xq,
                      styles: Bq,
                      classes: ["".concat(RE.cssPrefix, "-layers-counter")].concat(uq(Oq))
                    }
                  })
              }))
            }
          }
        }
      },
      TY = {
        mixout: function() {
          return {
            text: function(qq) {
              var Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                gq = Eq.transform,
                Yq = void 0 === gq ? sE : gq,
                lq = Eq.classes,
                Oq = void 0 === lq ? [] : lq,
                mq = Eq.attributes,
                xq = void 0 === mq ? {} : mq,
                cq = Eq.styles,
                Bq = void 0 === cq ? {} : cq;
              return eg({
                type: "text",
                content: qq
              }, (function() {
                return Fg("beforeDOMElementCreation", {
                  content: qq,
                  params: Eq
                }), qY({
                  content: qq,
                  transform: Aq(Aq({}, sE), Yq),
                  extra: {
                    attributes: xq,
                    styles: Bq,
                    classes: ["".concat(RE.cssPrefix, "-layers-text")].concat(uq(Oq))
                  }
                })
              }))
            }
          }
        },
        provides: function(qq) {
          qq.generateLayersText = function(qq, Eq) {
            var gq = Eq.transform,
              Yq = Eq.extra,
              lq = null,
              Oq = null;
            if (bq) {
              var mq = parseInt(getComputedStyle(qq).fontSize, 10),
                xq = qq.getBoundingClientRect();
              lq = xq.width / mq, Oq = xq.height / mq
            }
            return Promise.resolve([qq, qY({
              content: qq.innerHTML,
              width: lq,
              height: Oq,
              transform: gq,
              extra: Yq,
              watchable: !0
            })])
          }
        }
      },
      zY = new RegExp('"', "ug"),
      SY = [1105920, 1112319],
      pY = Aq(Aq(Aq(Aq({}, {
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
      GY = Object.keys(pY).reduce((function(qq, Eq) {
        return qq[Eq.toLowerCase()] = pY[Eq], qq
      }), {}),
      LY = Object.keys(GY).reduce((function(qq, Eq) {
        var gq = GY[Eq];
        return qq[Eq] = gq[900] || uq(Object.entries(gq))[0][1], qq
      }), {});

    function JY(qq, Eq) {
      var gq = "".concat("data-fa-pseudo-element-pending").concat(Eq.replace(":", "-"));
      return new Promise((function(Yq, lq) {
        if (null !== qq.getAttribute(gq)) return Yq();
        var Oq = wE(qq.children).filter((function(qq) {
            return qq.getAttribute(jE) === Eq
          }))[0],
          mq = tq.getComputedStyle(qq, Eq),
          xq = mq.getPropertyValue("font-family"),
          cq = xq.match(zE),
          Bq = mq.getPropertyValue("font-weight"),
          Wq = mq.getPropertyValue("content");
        if (Oq && !cq) return qq.removeChild(Oq), Yq();
        if (cq && "none" !== Wq && "" !== Wq) {
          var Nq = mq.getPropertyValue("content"),
            aq = function(qq, Eq) {
              var gq = qq.replace(/^['"]|['"]$/g, "").toLowerCase(),
                Yq = parseInt(Eq),
                lq = isNaN(Yq) ? "normal" : Yq;
              return (GY[gq] || {})[lq] || LY[gq]
            }(xq, Bq),
            Vq = function(qq) {
              return Bg(uq(qq.replace(zY, ""))[0] || "")
            }(Nq),
            dq = cq[0].startsWith("FontAwesome"),
            jq = function(qq) {
              var Eq = qq.getPropertyValue("font-feature-settings").includes("ss01"),
                gq = qq.getPropertyValue("content").replace(zY, ""),
                Yq = gq.codePointAt(0),
                lq = Yq >= SY[0] && Yq <= SY[1],
                Oq = 2 === gq.length && gq[0] === gq[1];
              return lq || Oq || Eq
            }(mq),
            Hq = ng(aq, Vq),
            oq = Hq;
          if (dq) {
            var Pq = function(qq) {
              var Eq = yg[qq],
                gq = ng("fas", qq);
              return Eq || (gq ? {
                prefix: "fas",
                iconName: gq
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(Vq);
            Pq.iconName && Pq.prefix && (Hq = Pq.iconName, aq = Pq.prefix)
          }
          if (!Hq || jq || Oq && Oq.getAttribute(HE) === aq && Oq.getAttribute(oE) === oq) Yq();
          else {
            qq.setAttribute(gq, oq), Oq && qq.removeChild(Oq);
            var Qq = {
                iconName: null,
                prefix: null,
                transform: sE,
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
              yq = Qq.extra;
            yq.attributes[jE] = Eq, lY(Hq, aq).then((function(lq) {
              var Oq = Dg(Aq(Aq({}, Qq), {}, {
                  icons: {
                    main: lq,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: aq,
                  iconName: oq,
                  extra: yq,
                  watchable: !0
                })),
                mq = rq.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === Eq ? qq.insertBefore(mq, qq.firstChild) : qq.appendChild(mq), mq.outerHTML = Oq.map((function(qq) {
                return Ag(qq)
              })).join("\n"), qq.removeAttribute(gq), Yq()
            })).catch(lq)
          }
        } else Yq()
      }))
    }

    function kY(qq) {
      return Promise.all([JY(qq, "::before"), JY(qq, "::after")])
    }

    function RY(qq) {
      return qq.parentNode !== document.head && !~QE.indexOf(qq.tagName.toUpperCase()) && !qq.getAttribute(jE) && (!qq.parentNode || "svg" !== qq.parentNode.tagName)
    }
    var UY = function(qq) {
        return !!qq && yE.some((function(Eq) {
          return qq.includes(Eq)
        }))
      },
      FY = function(qq) {
        if (!qq) return [];
        var Eq = new Set,
          gq = qq.split(/,(?![^()]*\))/).map((function(qq) {
            return qq.trim()
          }));
        gq = gq.flatMap((function(qq) {
          return qq.includes("(") ? qq : qq.split(",").map((function(qq) {
            return qq.trim()
          }))
        }));
        var Yq, lq = Oq(gq);
        try {
          for (lq.s(); !(Yq = lq.n()).done;) {
            var mq = Yq.value;
            if (UY(mq)) {
              var xq = yE.reduce((function(qq, Eq) {
                return qq.replace(Eq, "")
              }), mq);
              "" !== xq && "*" !== xq && Eq.add(xq)
            }
          }
        } catch (Aq) {
          lq.e(Aq)
        } finally {
          lq.f()
        }
        return Eq
      };

    function sY(qq) {
      if (nq) {
        var Eq;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) Eq = qq;
        else if (RE.searchPseudoElementsFullScan) Eq = qq.querySelectorAll("*");
        else {
          var gq, Yq = new Set,
            lq = Oq(document.styleSheets);
          try {
            for (lq.s(); !(gq = lq.n()).done;) {
              var mq = gq.value;
              try {
                var xq, Aq = Oq(mq.cssRules);
                try {
                  for (Aq.s(); !(xq = Aq.n()).done;) {
                    var cq, uq = xq.value,
                      Bq = Oq(FY(uq.selectorText));
                    try {
                      for (Bq.s(); !(cq = Bq.n()).done;) {
                        var Wq = cq.value;
                        Yq.add(Wq)
                      }
                    } catch (aq) {
                      Bq.e(aq)
                    } finally {
                      Bq.f()
                    }
                  }
                } catch (aq) {
                  Aq.e(aq)
                } finally {
                  Aq.f()
                }
              } catch (Vq) {
                RE.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(mq.href, " (").concat(Vq.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (aq) {
            lq.e(aq)
          } finally {
            lq.f()
          }
          if (!Yq.size) return;
          var Nq = Array.from(Yq).join(", ");
          try {
            Eq = qq.querySelectorAll(Nq)
          } catch (dq) {}
        }
        return new Promise((function(qq, gq) {
          var Yq = wE(Eq).filter(RY).map(kY),
            lq = cY("searchPseudoElements");
          oY(), Promise.all(Yq).then((function() {
            lq(), PY(), qq()
          })).catch((function() {
            lq(), PY(), gq()
          }))
        }))
      }
    }
    var XY = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(qq) {
              return qq.pseudoElementsCallback = sY, qq
            }
          }
        },
        provides: function(qq) {
          qq.pseudoElements2svg = function(qq) {
            var Eq = qq.node,
              gq = void 0 === Eq ? rq : Eq;
            RE.searchPseudoElements && sY(gq)
          }
        }
      },
      wY = !1,
      KY = function(qq) {
        return qq.toLowerCase().split(" ").reduce((function(qq, Eq) {
          var gq = Eq.toLowerCase().split("-"),
            Yq = gq[0],
            lq = gq.slice(1).join("-");
          if (Yq && "h" === lq) return qq.flipX = !0, qq;
          if (Yq && "v" === lq) return qq.flipY = !0, qq;
          if (lq = parseFloat(lq), isNaN(lq)) return qq;
          switch (Yq) {
            case "grow":
              qq.size = qq.size + lq;
              break;
            case "shrink":
              qq.size = qq.size - lq;
              break;
            case "left":
              qq.x = qq.x - lq;
              break;
            case "right":
              qq.x = qq.x + lq;
              break;
            case "up":
              qq.y = qq.y - lq;
              break;
            case "down":
              qq.y = qq.y + lq;
              break;
            case "rotate":
              qq.rotate = qq.rotate + lq
          }
          return qq
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      CY = {
        mixout: function() {
          return {
            parse: {
              transform: function(qq) {
                return KY(qq)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(qq, Eq) {
              var gq = Eq.getAttribute("data-fa-transform");
              return gq && (qq.transform = KY(gq)), qq
            }
          }
        },
        provides: function(qq) {
          qq.generateAbstractTransformGrouping = function(qq) {
            var Eq = qq.main,
              gq = qq.transform,
              Yq = qq.containerWidth,
              lq = qq.iconWidth,
              Oq = {
                transform: "translate(".concat(Yq / 2, " 256)")
              },
              mq = "translate(".concat(32 * gq.x, ", ").concat(32 * gq.y, ") "),
              xq = "scale(".concat(gq.size / 16 * (gq.flipX ? -1 : 1), ", ").concat(gq.size / 16 * (gq.flipY ? -1 : 1), ") "),
              cq = "rotate(".concat(gq.rotate, " 0 0)"),
              uq = {
                outer: Oq,
                inner: {
                  transform: "".concat(mq, " ").concat(xq, " ").concat(cq)
                },
                path: {
                  transform: "translate(".concat(lq / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: Aq({}, uq.outer),
              children: [{
                tag: "g",
                attributes: Aq({}, uq.inner),
                children: [{
                  tag: Eq.icon.tag,
                  children: Eq.icon.children,
                  attributes: Aq(Aq({}, Eq.icon.attributes), uq.path)
                }]
              }]
            }
          }
        }
      },
      IY = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function eY(qq) {
      var Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return qq.attributes && (qq.attributes.fill || Eq) && (qq.attributes.fill = "black"), qq
    }
    var DY = {
        hooks: function() {
          return {
            parseNodeAttributes: function(qq, Eq) {
              var gq = Eq.getAttribute("data-fa-mask"),
                Yq = gq ? zg(gq.split(" ").map((function(qq) {
                  return qq.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return Yq.prefix || (Yq.prefix = Zg()), qq.mask = Yq, qq.maskId = Eq.getAttribute("data-fa-mask-id"), qq
            }
          }
        },
        provides: function(qq) {
          qq.generateAbstractMask = function(qq) {
            var Eq, gq = qq.children,
              Yq = qq.attributes,
              lq = qq.main,
              Oq = qq.mask,
              mq = qq.maskId,
              xq = qq.transform,
              cq = lq.width,
              uq = lq.icon,
              Bq = Oq.width,
              Wq = Oq.icon,
              Nq = function(qq) {
                var Eq = qq.transform,
                  gq = qq.containerWidth,
                  Yq = qq.iconWidth,
                  lq = {
                    transform: "translate(".concat(gq / 2, " 256)")
                  },
                  Oq = "translate(".concat(32 * Eq.x, ", ").concat(32 * Eq.y, ") "),
                  mq = "scale(".concat(Eq.size / 16 * (Eq.flipX ? -1 : 1), ", ").concat(Eq.size / 16 * (Eq.flipY ? -1 : 1), ") "),
                  xq = "rotate(".concat(Eq.rotate, " 0 0)");
                return {
                  outer: lq,
                  inner: {
                    transform: "".concat(Oq, " ").concat(mq, " ").concat(xq)
                  },
                  path: {
                    transform: "translate(".concat(Yq / 2 * -1, " -256)")
                  }
                }
              }({
                transform: xq,
                containerWidth: Bq,
                iconWidth: cq
              }),
              aq = {
                tag: "rect",
                attributes: Aq(Aq({}, IY), {}, {
                  fill: "white"
                })
              },
              Vq = uq.children ? {
                children: uq.children.map(eY)
              } : {},
              dq = {
                tag: "g",
                attributes: Aq({}, Nq.inner),
                children: [eY(Aq({
                  tag: uq.tag,
                  attributes: Aq(Aq({}, uq.attributes), Nq.path)
                }, Vq))]
              },
              jq = {
                tag: "g",
                attributes: Aq({}, Nq.outer),
                children: [dq]
              },
              Hq = "mask-".concat(mq || XE()),
              oq = "clip-".concat(mq || XE()),
              Pq = {
                tag: "mask",
                attributes: Aq(Aq({}, IY), {}, {
                  id: Hq,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [aq, jq]
              },
              Qq = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: oq
                  },
                  children: (Eq = Wq, "g" === Eq.tag ? Eq.children : [Eq])
                }, Pq]
              };
            return gq.push(Qq, {
              tag: "rect",
              attributes: Aq({
                fill: "currentColor",
                "clip-path": "url(#".concat(oq, ")"),
                mask: "url(#".concat(Hq, ")")
              }, IY)
            }), {
              children: gq,
              attributes: Yq
            }
          }
        }
      },
      ql = {
        provides: function(qq) {
          var Eq = !1;
          tq.matchMedia && (Eq = tq.matchMedia("(prefers-reduced-motion: reduce)").matches), qq.missingIconAbstract = function() {
            var qq = [],
              gq = {
                fill: "currentColor"
              },
              Yq = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            qq.push({
              tag: "path",
              attributes: Aq(Aq({}, gq), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var lq = Aq(Aq({}, Yq), {}, {
                attributeName: "opacity"
              }),
              Oq = {
                tag: "circle",
                attributes: Aq(Aq({}, gq), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return Eq || Oq.children.push({
              tag: "animate",
              attributes: Aq(Aq({}, Yq), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: Aq(Aq({}, lq), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), qq.push(Oq), qq.push({
              tag: "path",
              attributes: Aq(Aq({}, gq), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: Eq ? [] : [{
                tag: "animate",
                attributes: Aq(Aq({}, lq), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), Eq || qq.push({
              tag: "path",
              attributes: Aq(Aq({}, gq), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: Aq(Aq({}, lq), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: qq
            }
          }
        }
      };
    ! function(qq, Eq) {
      var gq = Eq.mixoutsTo;
      Lg = qq, Jg = {}, Object.keys(kg).forEach((function(qq) {
        -1 === Rg.indexOf(qq) && delete kg[qq]
      })), Lg.forEach((function(qq) {
        var Eq = qq.mixout ? qq.mixout() : {};
        if (Object.keys(Eq).forEach((function(qq) {
            "function" === typeof Eq[qq] && (gq[qq] = Eq[qq]), "object" === Wq(Eq[qq]) && Object.keys(Eq[qq]).forEach((function(Yq) {
              gq[qq] || (gq[qq] = {}), gq[qq][Yq] = Eq[qq][Yq]
            }))
          })), qq.hooks) {
          var Yq = qq.hooks();
          Object.keys(Yq).forEach((function(qq) {
            Jg[qq] || (Jg[qq] = []), Jg[qq].push(Yq[qq])
          }))
        }
        qq.provides && qq.provides(kg)
      }))
    }([gg, ZY, fY, MY, TY, XY, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              oY(), wY = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            yY(Ug("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            QY && QY.disconnect()
          },
          watch: function(qq) {
            var Eq = qq.observeMutationsRoot;
            wY ? PY() : yY(Ug("mutationObserverCallbacks", {
              observeMutationsRoot: Eq
            }))
          }
        }
      }
    }, CY, DY, ql, {
      hooks: function() {
        return {
          parseNodeAttributes: function(qq, Eq) {
            var gq = Eq.getAttribute("data-fa-symbol"),
              Yq = null !== gq && ("" === gq || gq);
            return qq.symbol = Yq, qq
          }
        }
      }
    }], {
      mixoutsTo: Cg
    });
    var El = Cg.noAuto,
      gl = Cg.config,
      Yl = Cg.library,
      ll = Cg.dom,
      Ol = Cg.parse,
      ml = Cg.findIconDefinition,
      xl = Cg.toHtml,
      Al = Cg.icon,
      cl = Cg.layer,
      ul = Cg.text,
      Bl = Cg.counter
  },
  6564: qq => {
    qq.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);