/*! For license information please see sn3sfj.fa-renderer.2bcaac39.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6826: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      FontAwesomeIcon: () => mp
    });
    var Op = cp(6822),
      op = cp(5081),
      Ip = cp.n(op),
      Sp = cp(62);

    function xp(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function Lp(pp, ip, cp) {
      return (ip = function(pp) {
        var ip = function(pp, ip) {
          if ("object" != typeof pp || !pp) return pp;
          var cp = pp[Symbol.toPrimitive];
          if (void 0 !== cp) {
            var Op = cp.call(pp, ip || "default");
            if ("object" != typeof Op) return Op;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ip ? String : Number)(pp)
        }(pp, "string");
        return "symbol" == typeof ip ? ip : ip + ""
      }(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Yp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Dp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Yp(Object(cp), !0).forEach((function(ip) {
          Lp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Yp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Ap(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
        if (null != cp) {
          var Op, op, Ip, Sp, xp = [],
            Lp = !0,
            Yp = !1;
          try {
            if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
              if (Object(cp) !== cp) return;
              Lp = !1
            } else
              for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
          } catch (pp) {
            Yp = !0, op = pp
          } finally {
            try {
              if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
            } finally {
              if (Yp) throw op
            }
          }
          return xp
        }
      }(pp, ip) || yp(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Pp(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return xp(pp)
      }(pp) || function(pp) {
        if ("undefined" != typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
      }(pp) || yp(pp) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Wp(pp) {
      return Wp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Wp(pp)
    }

    function yp(pp, ip) {
      if (pp) {
        if ("string" == typeof pp) return xp(pp, ip);
        var cp = {}.toString.call(pp).slice(8, -1);
        return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? xp(pp, ip) : void 0
      }
    }
    var Up;
    try {
      var wp = cp(6828);
      Up = wp.version
    } catch (qp) {
      Up = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function vp(pp) {
      var ip = pp.beat,
        cp = pp.fade,
        Op = pp.beatFade,
        op = pp.bounce,
        Ip = pp.shake,
        Sp = pp.flash,
        xp = pp.spin,
        Yp = pp.spinPulse,
        Dp = pp.spinReverse,
        Pp = pp.pulse,
        Wp = pp.fixedWidth,
        yp = pp.inverse,
        wp = pp.border,
        vp = pp.listItem,
        tp = pp.flip,
        Hp = pp.size,
        dp = pp.rotation,
        ep = pp.pull,
        jp = pp.swapOpacity,
        kp = pp.rotateBy,
        mp = pp.widthAuto,
        Rp = function(pp, ip) {
          for (var cp = Ap(pp.split("-"), 2), Op = cp[0], op = cp[1], Ip = Ap(ip.split("-"), 2), Sp = Ip[0], xp = Ip[1], Lp = Op.split("."), Yp = Sp.split("."), Dp = 0; Dp < Math.max(Lp.length, Yp.length); Dp++) {
            var Pp = Lp[Dp] || "0",
              Wp = Yp[Dp] || "0",
              yp = parseInt(Pp, 10),
              Up = parseInt(Wp, 10);
            if (yp !== Up) return yp > Up
          }
          for (var wp = 0; wp < Math.max(Lp.length, Yp.length); wp++) {
            var vp = Lp[wp] || "0",
              tp = Yp[wp] || "0";
            if (vp !== tp && vp.length !== tp.length) return vp.length < tp.length
          }
          return !(op && !xp)
        }(Up, "7.0.0"),
        qp = Lp(Lp(Lp(Lp(Lp(Lp({
          "fa-beat": ip,
          "fa-fade": cp,
          "fa-beat-fade": Op,
          "fa-bounce": op,
          "fa-shake": Ip,
          "fa-flash": Sp,
          "fa-spin": xp,
          "fa-spin-reverse": Dp,
          "fa-spin-pulse": Yp,
          "fa-pulse": Pp,
          "fa-fw": Wp,
          "fa-inverse": yp,
          "fa-border": wp,
          "fa-li": vp,
          "fa-flip": !0 === tp,
          "fa-flip-horizontal": "horizontal" === tp || "both" === tp,
          "fa-flip-vertical": "vertical" === tp || "both" === tp
        }, "fa-".concat(Hp), "undefined" !== typeof Hp && null !== Hp), "fa-rotate-".concat(dp), "undefined" !== typeof dp && null !== dp && 0 !== dp), "fa-pull-".concat(ep), "undefined" !== typeof ep && null !== ep), "fa-swap-opacity", jp), "fa-rotate-by", Rp && kp), "fa-width-auto", Rp && mp);
      return Object.keys(qp).map((function(pp) {
        return qp[pp] ? pp : null
      })).filter((function(pp) {
        return pp
      }))
    }

    function tp(pp) {
      return ip = pp, (ip -= 0) === ip ? pp : (pp = pp.replace(/[\-_\s]+(.)?/g, (function(pp, ip) {
        return ip ? ip.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + pp.substr(1);
      var ip
    }
    var Hp = ["style"];
    var dp = !1;
    try {
      dp = !0
    } catch (qp) {}

    function ep(pp) {
      return pp && "object" === Wp(pp) && pp.prefix && pp.iconName && pp.icon ? pp : Op.parse.icon ? Op.parse.icon(pp) : null === pp ? null : pp && "object" === Wp(pp) && pp.prefix && pp.iconName ? pp : Array.isArray(pp) && 2 === pp.length ? {
        prefix: pp[0],
        iconName: pp[1]
      } : "string" === typeof pp ? {
        prefix: "fas",
        iconName: pp
      } : void 0
    }

    function jp(pp, ip) {
      return Array.isArray(ip) && ip.length > 0 || !Array.isArray(ip) && ip ? Lp({}, pp, ip) : {}
    }
    var kp = {
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
      mp = Sp.forwardRef((function(pp, ip) {
        var cp = Dp(Dp({}, kp), pp),
          op = cp.icon,
          Ip = cp.mask,
          Sp = cp.symbol,
          xp = cp.className,
          Lp = cp.title,
          Yp = cp.titleId,
          Ap = cp.maskId,
          Wp = ep(op),
          yp = jp("classes", [].concat(Pp(vp(cp)), Pp((xp || "").split(" ")))),
          Up = jp("transform", "string" === typeof cp.transform ? Op.parse.transform(cp.transform) : cp.transform),
          wp = jp("mask", ep(Ip)),
          tp = (0, Op.icon)(Wp, Dp(Dp(Dp(Dp({}, yp), Up), wp), {}, {
            symbol: Sp,
            title: Lp,
            titleId: Yp,
            maskId: Ap
          }));
        if (!tp) return function() {
          var pp;
          !dp && console && "function" === typeof console.error && (pp = console).error.apply(pp, arguments)
        }("Could not find icon", Wp), null;
        var Hp = tp.abstract,
          mp = {
            ref: ip
          };
        return Object.keys(cp).forEach((function(pp) {
          kp.hasOwnProperty(pp) || (mp[pp] = cp[pp])
        })), Rp(Hp[0], mp)
      }));
    mp.displayName = "FontAwesomeIcon", mp.propTypes = {
      beat: Ip().bool,
      border: Ip().bool,
      beatFade: Ip().bool,
      bounce: Ip().bool,
      className: Ip().string,
      fade: Ip().bool,
      flash: Ip().bool,
      mask: Ip().oneOfType([Ip().object, Ip().array, Ip().string]),
      maskId: Ip().string,
      fixedWidth: Ip().bool,
      inverse: Ip().bool,
      flip: Ip().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: Ip().oneOfType([Ip().object, Ip().array, Ip().string]),
      listItem: Ip().bool,
      pull: Ip().oneOf(["right", "left"]),
      pulse: Ip().bool,
      rotation: Ip().oneOf([0, 90, 180, 270]),
      rotateBy: Ip().bool,
      shake: Ip().bool,
      size: Ip().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: Ip().bool,
      spinPulse: Ip().bool,
      spinReverse: Ip().bool,
      symbol: Ip().oneOfType([Ip().bool, Ip().string]),
      title: Ip().string,
      titleId: Ip().string,
      transform: Ip().oneOfType([Ip().string, Ip().object]),
      swapOpacity: Ip().bool,
      widthAuto: Ip().bool
    };
    var Rp = function pp(ip, cp) {
      var Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof cp) return cp;
      var op = (cp.children || []).map((function(cp) {
          return pp(ip, cp)
        })),
        Ip = Object.keys(cp.attributes || {}).reduce((function(pp, ip) {
          var Op = cp.attributes[ip];
          switch (ip) {
            case "class":
              pp.attrs.className = Op, delete cp.attributes.class;
              break;
            case "style":
              pp.attrs.style = Op.split(";").map((function(pp) {
                return pp.trim()
              })).filter((function(pp) {
                return pp
              })).reduce((function(pp, ip) {
                var cp, Op = ip.indexOf(":"),
                  op = tp(ip.slice(0, Op)),
                  Ip = ip.slice(Op + 1).trim();
                return op.startsWith("webkit") ? pp[(cp = op, cp.charAt(0).toUpperCase() + cp.slice(1))] = Ip : pp[op] = Ip, pp
              }), {});
              break;
            default:
              0 === ip.indexOf("aria-") || 0 === ip.indexOf("data-") ? pp.attrs[ip.toLowerCase()] = Op : pp.attrs[tp(ip)] = Op
          }
          return pp
        }), {
          attrs: {}
        }),
        Sp = Op.style,
        xp = void 0 === Sp ? {} : Sp,
        Lp = function(pp, ip) {
          if (null == pp) return {};
          var cp, Op, op = function(pp, ip) {
            if (null == pp) return {};
            var cp = {};
            for (var Op in pp)
              if ({}.hasOwnProperty.call(pp, Op)) {
                if (-1 !== ip.indexOf(Op)) continue;
                cp[Op] = pp[Op]
              } return cp
          }(pp, ip);
          if (Object.getOwnPropertySymbols) {
            var Ip = Object.getOwnPropertySymbols(pp);
            for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], -1 === ip.indexOf(cp) && {}.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
          }
          return op
        }(Op, Hp);
      return Ip.attrs.style = Dp(Dp({}, Ip.attrs.style), xp), ip.apply(void 0, [cp.tag, Dp(Dp({}, Ip.attrs), Lp)].concat(Pp(op)))
    }.bind(null, Sp.createElement)
  },
  5085: (pp, ip, cp) => {
    var Op = cp(5088);

    function op() {}

    function Ip() {}
    Ip.resetWarningCache = op, pp.exports = function() {
      function pp(pp, ip, cp, op, Ip, Sp) {
        if (Sp !== Op) {
          var xp = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw xp.name = "Invariant Violation", xp
        }
      }

      function ip() {
        return pp
      }
      pp.isRequired = pp;
      var cp = {
        array: pp,
        bigint: pp,
        bool: pp,
        func: pp,
        number: pp,
        object: pp,
        string: pp,
        symbol: pp,
        any: pp,
        arrayOf: ip,
        element: pp,
        elementType: pp,
        instanceOf: ip,
        node: pp,
        objectOf: ip,
        oneOf: ip,
        oneOfType: ip,
        shape: ip,
        exact: ip,
        checkPropTypes: Ip,
        resetWarningCache: op
      };
      return cp.PropTypes = cp, cp
    }
  },
  5081: (pp, ip, cp) => {
    pp.exports = cp(5085)()
  },
  5088: pp => {
    pp.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6822: (pp, ip, cp) => {
    function Op(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function op(pp, ip) {
      for (var cp = 0; cp < ip.length; cp++) {
        var Op = ip[cp];
        Op.enumerable = Op.enumerable || !1, Op.configurable = !0, "value" in Op && (Op.writable = !0), Object.defineProperty(pp, Ap(Op.key), Op)
      }
    }

    function Ip(pp, ip) {
      var cp = "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
      if (!cp) {
        if (Array.isArray(pp) || (cp = Wp(pp)) || ip && pp && "number" == typeof pp.length) {
          cp && (pp = cp);
          var Op = 0,
            op = function() {};
          return {
            s: op,
            n: function() {
              return Op >= pp.length ? {
                done: !0
              } : {
                done: !1,
                value: pp[Op++]
              }
            },
            e: function(pp) {
              throw pp
            },
            f: op
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Ip, Sp = !0,
        xp = !1;
      return {
        s: function() {
          cp = cp.call(pp)
        },
        n: function() {
          var pp = cp.next();
          return Sp = pp.done, pp
        },
        e: function(pp) {
          xp = !0, Ip = pp
        },
        f: function() {
          try {
            Sp || null == cp.return || cp.return()
          } finally {
            if (xp) throw Ip
          }
        }
      }
    }

    function Sp(pp, ip, cp) {
      return (ip = Ap(ip)) in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function xp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Lp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? xp(Object(cp), !0).forEach((function(ip) {
          Sp(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : xp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Yp(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        var cp = null == pp ? null : "undefined" != typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
        if (null != cp) {
          var Op, op, Ip, Sp, xp = [],
            Lp = !0,
            Yp = !1;
          try {
            if (Ip = (cp = cp.call(pp)).next, 0 === ip) {
              if (Object(cp) !== cp) return;
              Lp = !1
            } else
              for (; !(Lp = (Op = Ip.call(cp)).done) && (xp.push(Op.value), xp.length !== ip); Lp = !0);
          } catch (pp) {
            Yp = !0, op = pp
          } finally {
            try {
              if (!Lp && null != cp.return && (Sp = cp.return(), Object(Sp) !== Sp)) return
            } finally {
              if (Yp) throw op
            }
          }
          return xp
        }
      }(pp, ip) || Wp(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Dp(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return Op(pp)
      }(pp) || function(pp) {
        if ("undefined" != typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
      }(pp) || Wp(pp) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ap(pp) {
      var ip = function(pp, ip) {
        if ("object" != typeof pp || !pp) return pp;
        var cp = pp[Symbol.toPrimitive];
        if (void 0 !== cp) {
          var Op = cp.call(pp, ip || "default");
          if ("object" != typeof Op) return Op;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ip ? String : Number)(pp)
      }(pp, "string");
      return "symbol" == typeof ip ? ip : ip + ""
    }

    function Pp(pp) {
      return Pp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(pp) {
        return typeof pp
      } : function(pp) {
        return pp && "function" == typeof Symbol && pp.constructor === Symbol && pp !== Symbol.prototype ? "symbol" : typeof pp
      }, Pp(pp)
    }

    function Wp(pp, ip) {
      if (pp) {
        if ("string" == typeof pp) return Op(pp, ip);
        var cp = {}.toString.call(pp).slice(8, -1);
        return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? Op(pp, ip) : void 0
      }
    }
    cp.r(ip), cp.d(ip, {
      api: () => Vc,
      config: () => Io,
      counter: () => yo,
      dom: () => xo,
      findIconDefinition: () => Yo,
      icon: () => Ao,
      layer: () => Po,
      library: () => So,
      noAuto: () => oo,
      parse: () => Lo,
      text: () => Wo,
      toHtml: () => Do
    });
    var yp = function() {},
      Up = {},
      wp = {},
      vp = null,
      tp = {
        mark: yp,
        measure: yp
      };
    try {
      "undefined" !== typeof window && (Up = window), "undefined" !== typeof document && (wp = document), "undefined" !== typeof MutationObserver && (vp = MutationObserver), "undefined" !== typeof performance && (tp = performance)
    } catch (Fp) {}
    var Hp, dp, ep = (Up.navigator || {}).userAgent,
      jp = void 0 === ep ? "" : ep,
      kp = Up,
      mp = wp,
      Rp = vp,
      qp = tp,
      Mp = (kp.document, !!mp.documentElement && !!mp.head && "function" === typeof mp.addEventListener && "function" === typeof mp.createElement),
      Cp = ~jp.indexOf("MSIE") || ~jp.indexOf("Trident/"),
      Ep = {
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
      Xp = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      lp = "classic",
      Qp = "duotone",
      Jp = "sharp",
      Bp = "sharp-duotone",
      Np = "chisel",
      Tp = "etch",
      fp = "graphite",
      bp = "jelly",
      hp = "jelly-duo",
      ap = "jelly-fill",
      np = "notdog",
      Fp = "notdog-duo",
      gp = "slab",
      Gp = "slab-press",
      rp = "thumbprint",
      Zp = "utility",
      zp = "utility-duo",
      sp = "utility-fill",
      Kp = "whiteboard",
      Vp = [lp, Qp, Jp, Bp, Np, Tp, fp, bp, hp, ap, np, Fp, gp, Gp, rp, Zp, zp, sp, Kp],
      ii = (Sp(Sp(Sp(Sp(Sp(Sp(Sp(Sp(Sp(Sp(Hp = {}, lp, "Classic"), Qp, "Duotone"), Jp, "Sharp"), Bp, "Sharp Duotone"), Np, "Chisel"), Tp, "Etch"), fp, "Graphite"), bp, "Jelly"), hp, "Jelly Duo"), ap, "Jelly Fill"), Sp(Sp(Sp(Sp(Sp(Sp(Sp(Sp(Sp(Hp, np, "Notdog"), Fp, "Notdog Duo"), gp, "Slab"), Gp, "Slab Press"), rp, "Thumbprint"), Zp, "Utility"), zp, "Utility Duo"), sp, "Utility Fill"), Kp, "Whiteboard"), new Map([
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
      ci = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      Oi = {
        fak: "kit",
        "fa-kit": "kit"
      },
      oi = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      Ii = (Sp(Sp({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      Si = {
        "kit-duotone": "fakd"
      },
      xi = "duotone-group",
      Li = "swap-opacity",
      Yi = "primary",
      Di = "secondary",
      Ai = (Sp(Sp(Sp(Sp(Sp(Sp(Sp(Sp(Sp(Sp(dp = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), Sp(Sp(Sp(Sp(Sp(Sp(Sp(Sp(Sp(dp, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), Sp(Sp({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      Pi = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      Wi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      yi = Wi.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      Ui = [].concat(Dp(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", xi, Li, Yi, Di]).concat(Wi.map((function(pp) {
        return "".concat(pp, "x")
      }))).concat(yi.map((function(pp) {
        return "w-".concat(pp)
      }))),
      wi = "___FONT_AWESOME___",
      vi = "svg-inline--fa",
      ti = "data-fa-i2svg",
      Hi = "data-fa-pseudo-element",
      di = "data-prefix",
      ei = "data-icon",
      ui = "fontawesome-i2svg",
      ji = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      ki = ["::before", "::after", ":before", ":after"],
      mi = function() {
        try {
          return !0
        } catch (pp) {
          return !1
        }
      }();

    function Ri(pp) {
      return new Proxy(pp, {
        get: function(pp, ip) {
          return ip in pp ? pp[ip] : pp[lp]
        }
      })
    }
    var qi = Lp({}, Ep);
    qi[lp] = Lp(Lp(Lp(Lp({}, {
      "fa-duotone": "duotone"
    }), Ep[lp]), Oi), oi);
    var Mi = Ri(qi),
      Ci = Lp({}, {
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
    Ci[lp] = Lp(Lp(Lp(Lp({}, {
      duotone: "fad"
    }), Ci[lp]), Ii), Si);
    var Ei = Ri(Ci),
      Xi = Lp({}, Ai);
    Xi[lp] = Lp(Lp({}, Xi[lp]), {
      fak: "fa-kit"
    });
    var li = Ri(Xi),
      Qi = Lp({}, {
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
    Qi[lp] = Lp(Lp({}, Qi[lp]), {
      "fa-kit": "fak"
    });
    Ri(Qi);
    var Ji = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      Bi = "fa-layers-text",
      Ni = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Ti = (Ri(Lp({}, {
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
      fi = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      bi = [].concat(Dp(["kit"]), Dp(Ui)),
      ai = kp.FontAwesomeConfig || {};
    if (mp && "function" === typeof mp.querySelector) {
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
      ].forEach((function(pp) {
        var ip = Yp(pp, 2),
          cp = ip[0],
          Op = ip[1],
          op = function(pp) {
            return "" === pp || "false" !== pp && ("true" === pp || pp)
          }(function(pp) {
            var ip = mp.querySelector("script[" + pp + "]");
            if (ip) return ip.getAttribute(pp)
          }(cp));
        void 0 !== op && null !== op && (ai[Op] = op)
      }))
    }
    var ni = {
      styleDefault: "solid",
      familyDefault: lp,
      cssPrefix: "fa",
      replacementClass: vi,
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
    ai.familyPrefix && (ai.cssPrefix = ai.familyPrefix);
    var Fi = Lp(Lp({}, ni), ai);
    Fi.autoReplaceSvg || (Fi.observeMutations = !1);
    var gi = {};
    Object.keys(ni).forEach((function(pp) {
      Object.defineProperty(gi, pp, {
        enumerable: !0,
        set: function(ip) {
          Fi[pp] = ip, Gi.forEach((function(pp) {
            return pp(gi)
          }))
        },
        get: function() {
          return Fi[pp]
        }
      })
    })), Object.defineProperty(gi, "familyPrefix", {
      enumerable: !0,
      set: function(pp) {
        Fi.cssPrefix = pp, Gi.forEach((function(pp) {
          return pp(gi)
        }))
      },
      get: function() {
        return Fi.cssPrefix
      }
    }), kp.FontAwesomeConfig = gi;
    var Gi = [];
    var ri = 16,
      Zi = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function zi() {
      for (var pp = 12, ip = ""; pp-- > 0;) ip += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return ip
    }

    function si(pp) {
      for (var ip = [], cp = (pp || []).length >>> 0; cp--;) ip[cp] = pp[cp];
      return ip
    }

    function Ki(pp) {
      return pp.classList ? si(pp.classList) : (pp.getAttribute("class") || "").split(" ").filter((function(pp) {
        return pp
      }))
    }

    function Vi(pp) {
      return "".concat(pp).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function pc(pp) {
      return Object.keys(pp || {}).reduce((function(ip, cp) {
        return ip + "".concat(cp, ": ").concat(pp[cp].trim(), ";")
      }), "")
    }

    function ic(pp) {
      return pp.size !== Zi.size || pp.x !== Zi.x || pp.y !== Zi.y || pp.rotate !== Zi.rotate || pp.flipX || pp.flipY
    }

    function cc() {
      var pp = "fa",
        ip = vi,
        cp = gi.cssPrefix,
        Op = gi.replacementClass,
        op = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (cp !== pp || Op !== ip) {
        var Ip = new RegExp("\\.".concat(pp, "\\-"), "g"),
          Sp = new RegExp("\\--".concat(pp, "\\-"), "g"),
          xp = new RegExp("\\.".concat(ip), "g");
        op = op.replace(Ip, ".".concat(cp, "-")).replace(Sp, "--".concat(cp, "-")).replace(xp, ".".concat(Op))
      }
      return op
    }
    var Oc = !1;

    function oc() {
      gi.autoAddCss && !Oc && (! function(pp) {
        if (pp && Mp) {
          var ip = mp.createElement("style");
          ip.setAttribute("type", "text/css"), ip.innerHTML = pp;
          for (var cp = mp.head.childNodes, Op = null, op = cp.length - 1; op > -1; op--) {
            var Ip = cp[op],
              Sp = (Ip.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(Sp) > -1 && (Op = Ip)
          }
          mp.head.insertBefore(ip, Op)
        }
      }(cc()), Oc = !0)
    }
    var Ic = {
        mixout: function() {
          return {
            dom: {
              css: cc,
              insertCss: oc
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              oc()
            },
            beforeI2svg: function() {
              oc()
            }
          }
        }
      },
      Sc = kp || {};
    Sc[wi] || (Sc[wi] = {}), Sc[wi].styles || (Sc[wi].styles = {}), Sc[wi].hooks || (Sc[wi].hooks = {}), Sc[wi].shims || (Sc[wi].shims = []);
    var xc = Sc[wi],
      Lc = [],
      Yc = function() {
        mp.removeEventListener("DOMContentLoaded", Yc), Dc = 1, Lc.map((function(pp) {
          return pp()
        }))
      },
      Dc = !1;

    function Ac(pp) {
      var ip = pp.tag,
        cp = pp.attributes,
        Op = void 0 === cp ? {} : cp,
        op = pp.children,
        Ip = void 0 === op ? [] : op;
      return "string" === typeof pp ? Vi(pp) : "<".concat(ip, " ").concat(function(pp) {
        return Object.keys(pp || {}).reduce((function(ip, cp) {
          return ip + "".concat(cp, '="').concat(Vi(pp[cp]), '" ')
        }), "").trim()
      }(Op), ">").concat(Ip.map(Ac).join(""), "</").concat(ip, ">")
    }

    function Pc(pp, ip, cp) {
      if (pp && pp[ip] && pp[ip][cp]) return {
        prefix: ip,
        iconName: cp,
        icon: pp[ip][cp]
      }
    }
    Mp && ((Dc = (mp.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(mp.readyState)) || mp.addEventListener("DOMContentLoaded", Yc));
    var Wc = function(pp, ip, cp, Op) {
      var op, Ip, Sp, xp = Object.keys(pp),
        Lp = xp.length,
        Yp = void 0 !== Op ? function(pp, ip) {
          return function(cp, Op, op, Ip) {
            return pp.call(ip, cp, Op, op, Ip)
          }
        }(ip, Op) : ip;
      for (void 0 === cp ? (op = 1, Sp = pp[xp[0]]) : (op = 0, Sp = cp); op < Lp; op++) Sp = Yp(Sp, pp[Ip = xp[op]], Ip, pp);
      return Sp
    };

    function yc(pp) {
      return 1 !== Dp(pp).length ? null : pp.codePointAt(0).toString(16)
    }

    function Uc(pp) {
      return Object.keys(pp).reduce((function(ip, cp) {
        var Op = pp[cp];
        return !!Op.icon ? ip[Op.iconName] = Op.icon : ip[cp] = Op, ip
      }), {})
    }

    function wc(pp, ip) {
      var cp = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        Op = void 0 !== cp && cp,
        op = Uc(ip);
      "function" !== typeof xc.hooks.addPack || Op ? xc.styles[pp] = Lp(Lp({}, xc.styles[pp] || {}), op) : xc.hooks.addPack(pp, Uc(ip)), "fas" === pp && wc("fa", ip)
    }
    var vc = xc.styles,
      tc = xc.shims,
      Hc = Object.keys(li),
      dc = Hc.reduce((function(pp, ip) {
        return pp[ip] = Object.keys(li[ip]), pp
      }), {}),
      ec = null,
      uc = {},
      jc = {},
      kc = {},
      mc = {},
      Rc = {};

    function qc(pp, ip) {
      var cp, Op = ip.split("-"),
        op = Op[0],
        Ip = Op.slice(1).join("-");
      return op !== pp || "" === Ip || (cp = Ip, ~bi.indexOf(cp)) ? null : Ip
    }
    var Mc, Cc = function() {
      var pp = function(pp) {
        return Wc(vc, (function(ip, cp, Op) {
          return ip[Op] = Wc(cp, pp, {}), ip
        }), {})
      };
      uc = pp((function(pp, ip, cp) {
        (ip[3] && (pp[ip[3]] = cp), ip[2]) && ip[2].filter((function(pp) {
          return "number" === typeof pp
        })).forEach((function(ip) {
          pp[ip.toString(16)] = cp
        }));
        return pp
      })), jc = pp((function(pp, ip, cp) {
        (pp[cp] = cp, ip[2]) && ip[2].filter((function(pp) {
          return "string" === typeof pp
        })).forEach((function(ip) {
          pp[ip] = cp
        }));
        return pp
      })), Rc = pp((function(pp, ip, cp) {
        var Op = ip[2];
        return pp[cp] = cp, Op.forEach((function(ip) {
          pp[ip] = cp
        })), pp
      }));
      var ip = "far" in vc || gi.autoFetchSvg,
        cp = Wc(tc, (function(pp, cp) {
          var Op = cp[0],
            op = cp[1],
            Ip = cp[2];
          return "far" !== op || ip || (op = "fas"), "string" === typeof Op && (pp.names[Op] = {
            prefix: op,
            iconName: Ip
          }), "number" === typeof Op && (pp.unicodes[Op.toString(16)] = {
            prefix: op,
            iconName: Ip
          }), pp
        }), {
          names: {},
          unicodes: {}
        });
      kc = cp.names, mc = cp.unicodes, ec = Jc(gi.styleDefault, {
        family: gi.familyDefault
      })
    };

    function Ec(pp, ip) {
      return (uc[pp] || {})[ip]
    }

    function Xc(pp, ip) {
      return (Rc[pp] || {})[ip]
    }

    function lc(pp) {
      return kc[pp] || {
        prefix: null,
        iconName: null
      }
    }

    function Qc() {
      return ec
    }
    Mc = function(pp) {
      ec = Jc(pp.styleDefault, {
        family: gi.familyDefault
      })
    }, Gi.push(Mc), Cc();

    function Jc(pp) {
      var ip = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        cp = void 0 === ip ? lp : ip,
        Op = Mi[cp][pp];
      if (cp === Qp && !pp) return "fad";
      var op = Ei[cp][pp] || Ei[cp][Op],
        Ip = pp in xc.styles ? pp : null;
      return op || Ip || null
    }

    function Bc(pp) {
      return pp.sort().filter((function(pp, ip, cp) {
        return cp.indexOf(pp) === ip
      }))
    }
    var Nc = Pi.concat(ci);

    function Tc(pp) {
      var ip = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        cp = void 0 !== ip && ip,
        Op = null,
        op = Bc(pp.filter((function(pp) {
          return Nc.includes(pp)
        }))),
        Ip = Bc(pp.filter((function(pp) {
          return !Nc.includes(pp)
        }))),
        Sp = Yp(op.filter((function(pp) {
          return Op = pp, !Xp.includes(pp)
        })), 1)[0],
        xp = void 0 === Sp ? null : Sp,
        Dp = function(pp) {
          var ip = lp,
            cp = Hc.reduce((function(pp, ip) {
              return pp[ip] = "".concat(gi.cssPrefix, "-").concat(ip), pp
            }), {});
          return Vp.forEach((function(Op) {
            (pp.includes(cp[Op]) || pp.some((function(pp) {
              return dc[Op].includes(pp)
            }))) && (ip = Op)
          })), ip
        }(op),
        Ap = Lp(Lp({}, function(pp) {
          var ip = [],
            cp = null;
          return pp.forEach((function(pp) {
            var Op = qc(gi.cssPrefix, pp);
            Op ? cp = Op : pp && ip.push(pp)
          })), {
            iconName: cp,
            rest: ip
          }
        }(Ip)), {}, {
          prefix: Jc(xp, {
            family: Dp
          })
        });
      return Lp(Lp(Lp({}, Ap), function(pp) {
        var ip = pp.values,
          cp = pp.family,
          Op = pp.canonical,
          op = pp.givenPrefix,
          Ip = void 0 === op ? "" : op,
          Sp = pp.styles,
          xp = void 0 === Sp ? {} : Sp,
          Lp = pp.config,
          Yp = void 0 === Lp ? {} : Lp,
          Dp = cp === Qp,
          Ap = ip.includes("fa-duotone") || ip.includes("fad"),
          Pp = "duotone" === Yp.familyDefault,
          Wp = "fad" === Op.prefix || "fa-duotone" === Op.prefix;
        !Dp && (Ap || Pp || Wp) && (Op.prefix = "fad");
        (ip.includes("fa-brands") || ip.includes("fab")) && (Op.prefix = "fab");
        if (!Op.prefix && fc.includes(cp)) {
          if (Object.keys(xp).find((function(pp) {
              return bc.includes(pp)
            })) || Yp.autoFetchSvg) {
            var yp = ii.get(cp).defaultShortPrefixId;
            Op.prefix = yp, Op.iconName = Xc(Op.prefix, Op.iconName) || Op.iconName
          }
        }
        "fa" !== Op.prefix && "fa" !== Ip || (Op.prefix = Qc() || "fas");
        return Op
      }({
        values: pp,
        family: Dp,
        styles: vc,
        config: gi,
        canonical: Ap,
        givenPrefix: Op
      })), function(pp, ip, cp) {
        var Op = cp.prefix,
          op = cp.iconName;
        if (pp || !Op || !op) return {
          prefix: Op,
          iconName: op
        };
        var Ip = "fa" === ip ? lc(op) : {},
          Sp = Xc(Op, op);
        op = Ip.iconName || Sp || op, "far" !== (Op = Ip.prefix || Op) || vc.far || !vc.fas || gi.autoFetchSvg || (Op = "fas");
        return {
          prefix: Op,
          iconName: op
        }
      }(cp, Op, Ap))
    }
    var fc = Vp.filter((function(pp) {
        return pp !== lp || pp !== Qp
      })),
      bc = Object.keys(Ai).filter((function(pp) {
        return pp !== lp
      })).map((function(pp) {
        return Object.keys(Ai[pp])
      })).flat();
    var hc = function() {
        return function(pp, ip, cp) {
          return ip && op(pp.prototype, ip), cp && op(pp, cp), Object.defineProperty(pp, "prototype", {
            writable: !1
          }), pp
        }((function pp() {
          ! function(pp, ip) {
            if (!(pp instanceof ip)) throw new TypeError("Cannot call a class as a function")
          }(this, pp), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var pp = this, ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
            var op = cp.reduce(this._pullDefinitions, {});
            Object.keys(op).forEach((function(ip) {
              pp.definitions[ip] = Lp(Lp({}, pp.definitions[ip] || {}), op[ip]), wc(ip, op[ip]);
              var cp = li[lp][ip];
              cp && wc(cp, op[ip]), Cc()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(pp, ip) {
            var cp = ip.prefix && ip.iconName && ip.icon ? {
              0: ip
            } : ip;
            return Object.keys(cp).map((function(ip) {
              var Op = cp[ip],
                op = Op.prefix,
                Ip = Op.iconName,
                Sp = Op.icon,
                xp = Sp[2];
              pp[op] || (pp[op] = {}), xp.length > 0 && xp.forEach((function(ip) {
                "string" === typeof ip && (pp[op][ip] = Sp)
              })), pp[op][Ip] = Sp
            })), pp
          }
        }])
      }(),
      ac = [],
      nc = {},
      Fc = {},
      gc = Object.keys(Fc);

    function Gc(pp, ip) {
      for (var cp = arguments.length, Op = new Array(cp > 2 ? cp - 2 : 0), op = 2; op < cp; op++) Op[op - 2] = arguments[op];
      return (nc[pp] || []).forEach((function(pp) {
        ip = pp.apply(null, [ip].concat(Op))
      })), ip
    }

    function rc(pp) {
      for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
      (nc[pp] || []).forEach((function(pp) {
        pp.apply(null, cp)
      }))
    }

    function Zc() {
      var pp = arguments[0],
        ip = Array.prototype.slice.call(arguments, 1);
      return Fc[pp] ? Fc[pp].apply(null, ip) : void 0
    }

    function zc(pp) {
      "fa" === pp.prefix && (pp.prefix = "fas");
      var ip = pp.iconName,
        cp = pp.prefix || Qc();
      if (ip) return ip = Xc(cp, ip) || ip, Pc(sc.definitions, cp, ip) || Pc(xc.styles, cp, ip)
    }
    var sc = new hc,
      Kc = {
        i2svg: function() {
          var pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Mp ? (rc("beforeI2svg", pp), Zc("pseudoElements2svg", pp), Zc("i2svg", pp)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var pp, ip = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            cp = ip.autoReplaceSvgRoot;
          !1 === gi.autoReplaceSvg && (gi.autoReplaceSvg = !0), gi.observeMutations = !0, pp = function() {
            pO({
              autoReplaceSvgRoot: cp
            }), rc("watch", ip)
          }, Mp && (Dc ? setTimeout(pp, 0) : Lc.push(pp))
        }
      },
      Vc = {
        noAuto: function() {
          gi.autoReplaceSvg = !1, gi.observeMutations = !1, rc("noAuto")
        },
        config: gi,
        dom: Kc,
        parse: {
          icon: function(pp) {
            if (null === pp) return null;
            if ("object" === Pp(pp) && pp.prefix && pp.iconName) return {
              prefix: pp.prefix,
              iconName: Xc(pp.prefix, pp.iconName) || pp.iconName
            };
            if (Array.isArray(pp) && 2 === pp.length) {
              var ip = 0 === pp[1].indexOf("fa-") ? pp[1].slice(3) : pp[1],
                cp = Jc(pp[0]);
              return {
                prefix: cp,
                iconName: Xc(cp, ip) || ip
              }
            }
            if ("string" === typeof pp && (pp.indexOf("".concat(gi.cssPrefix, "-")) > -1 || pp.match(Ji))) {
              var Op = Tc(pp.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: Op.prefix || Qc(),
                iconName: Xc(Op.prefix, Op.iconName) || Op.iconName
              }
            }
            if ("string" === typeof pp) {
              var op = Qc();
              return {
                prefix: op,
                iconName: Xc(op, pp) || pp
              }
            }
          }
        },
        library: sc,
        findIconDefinition: zc,
        toHtml: Ac
      },
      pO = function() {
        var pp = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          ip = void 0 === pp ? mp : pp;
        (Object.keys(xc.styles).length > 0 || gi.autoFetchSvg) && Mp && gi.autoReplaceSvg && Vc.dom.i2svg({
          node: ip
        })
      };

    function iO(pp, ip) {
      return Object.defineProperty(pp, "abstract", {
        get: ip
      }), Object.defineProperty(pp, "html", {
        get: function() {
          return pp.abstract.map((function(pp) {
            return Ac(pp)
          }))
        }
      }), Object.defineProperty(pp, "node", {
        get: function() {
          if (Mp) {
            var ip = mp.createElement("div");
            return ip.innerHTML = pp.html, ip.children
          }
        }
      }), pp
    }

    function cO(pp) {
      var ip = pp.icons,
        cp = ip.main,
        Op = ip.mask,
        op = pp.prefix,
        Ip = pp.iconName,
        Sp = pp.transform,
        xp = pp.symbol,
        Yp = pp.maskId,
        Dp = pp.extra,
        Ap = pp.watchable,
        Pp = void 0 !== Ap && Ap,
        Wp = Op.found ? Op : cp,
        yp = Wp.width,
        Up = Wp.height,
        wp = [gi.replacementClass, Ip ? "".concat(gi.cssPrefix, "-").concat(Ip) : ""].filter((function(pp) {
          return -1 === Dp.classes.indexOf(pp)
        })).filter((function(pp) {
          return "" !== pp || !!pp
        })).concat(Dp.classes).join(" "),
        vp = {
          children: [],
          attributes: Lp(Lp({}, Dp.attributes), {}, {
            "data-prefix": op,
            "data-icon": Ip,
            class: wp,
            role: Dp.attributes.role || "img",
            viewBox: "0 0 ".concat(yp, " ").concat(Up)
          })
        };
      (function(pp) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(ip) {
          return ip in pp
        }))
      })(Dp.attributes) || Dp.attributes["aria-hidden"] || (vp.attributes["aria-hidden"] = "true"), Pp && (vp.attributes[ti] = "");
      var tp = Lp(Lp({}, vp), {}, {
          prefix: op,
          iconName: Ip,
          main: cp,
          mask: Op,
          maskId: Yp,
          transform: Sp,
          symbol: xp,
          styles: Lp({}, Dp.styles)
        }),
        Hp = Op.found && cp.found ? Zc("generateAbstractMask", tp) || {
          children: [],
          attributes: {}
        } : Zc("generateAbstractIcon", tp) || {
          children: [],
          attributes: {}
        },
        dp = Hp.children,
        ep = Hp.attributes;
      return tp.children = dp, tp.attributes = ep, xp ? function(pp) {
        var ip = pp.prefix,
          cp = pp.iconName,
          Op = pp.children,
          op = pp.attributes,
          Ip = pp.symbol,
          Sp = !0 === Ip ? "".concat(ip, "-").concat(gi.cssPrefix, "-").concat(cp) : Ip;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: Lp(Lp({}, op), {}, {
              id: Sp
            }),
            children: Op
          }]
        }]
      }(tp) : function(pp) {
        var ip = pp.children,
          cp = pp.main,
          Op = pp.mask,
          op = pp.attributes,
          Ip = pp.styles,
          Sp = pp.transform;
        if (ic(Sp) && cp.found && !Op.found) {
          var xp = {
            x: cp.width / cp.height / 2,
            y: .5
          };
          op.style = pc(Lp(Lp({}, Ip), {}, {
            "transform-origin": "".concat(xp.x + Sp.x / 16, "em ").concat(xp.y + Sp.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: op,
          children: ip
        }]
      }(tp)
    }

    function OO(pp) {
      var ip = pp.content,
        cp = pp.width,
        Op = pp.height,
        op = pp.transform,
        Ip = pp.extra,
        Sp = pp.watchable,
        xp = void 0 !== Sp && Sp,
        Yp = Lp(Lp({}, Ip.attributes), {}, {
          class: Ip.classes.join(" ")
        });
      xp && (Yp[ti] = "");
      var Dp = Lp({}, Ip.styles);
      ic(op) && (Dp.transform = function(pp) {
        var ip = pp.transform,
          cp = pp.width,
          Op = void 0 === cp ? 16 : cp,
          op = pp.height,
          Ip = void 0 === op ? 16 : op,
          Sp = pp.startCentered,
          xp = void 0 !== Sp && Sp,
          Lp = "";
        return Lp += xp && Cp ? "translate(".concat(ip.x / ri - Op / 2, "em, ").concat(ip.y / ri - Ip / 2, "em) ") : xp ? "translate(calc(-50% + ".concat(ip.x / ri, "em), calc(-50% + ").concat(ip.y / ri, "em)) ") : "translate(".concat(ip.x / ri, "em, ").concat(ip.y / ri, "em) "), Lp += "scale(".concat(ip.size / ri * (ip.flipX ? -1 : 1), ", ").concat(ip.size / ri * (ip.flipY ? -1 : 1), ") "), Lp + "rotate(".concat(ip.rotate, "deg) ")
      }({
        transform: op,
        startCentered: !0,
        width: cp,
        height: Op
      }), Dp["-webkit-transform"] = Dp.transform);
      var Ap = pc(Dp);
      Ap.length > 0 && (Yp.style = Ap);
      var Pp = [];
      return Pp.push({
        tag: "span",
        attributes: Yp,
        children: [ip]
      }), Pp
    }
    var oO = xc.styles;

    function IO(pp) {
      var ip = pp[0],
        cp = pp[1],
        Op = Yp(pp.slice(4), 1)[0];
      return {
        found: !0,
        width: ip,
        height: cp,
        icon: Array.isArray(Op) ? {
          tag: "g",
          attributes: {
            class: "".concat(gi.cssPrefix, "-").concat(fi.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(gi.cssPrefix, "-").concat(fi.SECONDARY),
              fill: "currentColor",
              d: Op[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(gi.cssPrefix, "-").concat(fi.PRIMARY),
              fill: "currentColor",
              d: Op[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: Op
          }
        }
      }
    }
    var SO = {
      found: !1,
      width: 512,
      height: 512
    };

    function xO(pp, ip) {
      var cp = ip;
      return "fa" === ip && null !== gi.styleDefault && (ip = Qc()), new Promise((function(Op, op) {
        if ("fa" === cp) {
          var Ip = lc(pp) || {};
          pp = Ip.iconName || pp, ip = Ip.prefix || ip
        }
        if (pp && ip && oO[ip] && oO[ip][pp]) return Op(IO(oO[ip][pp]));
        ! function(pp, ip) {
          mi || gi.showMissingIcons || !pp || console.error('Icon with name "'.concat(pp, '" and prefix "').concat(ip, '" is missing.'))
        }(pp, ip), Op(Lp(Lp({}, SO), {}, {
          icon: gi.showMissingIcons && pp && Zc("missingIconAbstract") || {}
        }))
      }))
    }
    var LO = function() {},
      YO = gi.measurePerformance && qp && qp.mark && qp.measure ? qp : {
        mark: LO,
        measure: LO
      },
      DO = 'FA "7.2.0"',
      AO = function(pp) {
        YO.mark("".concat(DO, " ").concat(pp, " ends")), YO.measure("".concat(DO, " ").concat(pp), "".concat(DO, " ").concat(pp, " begins"), "".concat(DO, " ").concat(pp, " ends"))
      },
      PO = function(pp) {
        return YO.mark("".concat(DO, " ").concat(pp, " begins")),
          function() {
            return AO(pp)
          }
      },
      WO = function() {};

    function yO(pp) {
      return "string" === typeof(pp.getAttribute ? pp.getAttribute(ti) : null)
    }

    function UO(pp) {
      return mp.createElementNS("http://www.w3.org/2000/svg", pp)
    }

    function wO(pp) {
      return mp.createElement(pp)
    }

    function vO(pp) {
      var ip = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        cp = void 0 === ip ? "svg" === pp.tag ? UO : wO : ip;
      if ("string" === typeof pp) return mp.createTextNode(pp);
      var Op = cp(pp.tag);
      return Object.keys(pp.attributes || []).forEach((function(ip) {
        Op.setAttribute(ip, pp.attributes[ip])
      })), (pp.children || []).forEach((function(pp) {
        Op.appendChild(vO(pp, {
          ceFn: cp
        }))
      })), Op
    }
    var tO = {
      replace: function(pp) {
        var ip = pp[0];
        if (ip.parentNode)
          if (pp[1].forEach((function(pp) {
              ip.parentNode.insertBefore(vO(pp), ip)
            })), null === ip.getAttribute(ti) && gi.keepOriginalSource) {
            var cp = mp.createComment(function(pp) {
              var ip = " ".concat(pp.outerHTML, " ");
              return "".concat(ip, "Font Awesome fontawesome.com ")
            }(ip));
            ip.parentNode.replaceChild(cp, ip)
          } else ip.remove()
      },
      nest: function(pp) {
        var ip = pp[0],
          cp = pp[1];
        if (~Ki(ip).indexOf(gi.replacementClass)) return tO.replace(pp);
        var Op = new RegExp("".concat(gi.cssPrefix, "-.*"));
        if (delete cp[0].attributes.id, cp[0].attributes.class) {
          var op = cp[0].attributes.class.split(" ").reduce((function(pp, ip) {
            return ip === gi.replacementClass || ip.match(Op) ? pp.toSvg.push(ip) : pp.toNode.push(ip), pp
          }), {
            toNode: [],
            toSvg: []
          });
          cp[0].attributes.class = op.toSvg.join(" "), 0 === op.toNode.length ? ip.removeAttribute("class") : ip.setAttribute("class", op.toNode.join(" "))
        }
        var Ip = cp.map((function(pp) {
          return Ac(pp)
        })).join("\n");
        ip.setAttribute(ti, ""), ip.innerHTML = Ip
      }
    };

    function HO(pp) {
      pp()
    }

    function dO(pp, ip) {
      var cp = "function" === typeof ip ? ip : WO;
      if (0 === pp.length) cp();
      else {
        var Op = HO;
        "async" === gi.mutateApproach && (Op = kp.requestAnimationFrame || HO), Op((function() {
          var ip = !0 === gi.autoReplaceSvg ? tO.replace : tO[gi.autoReplaceSvg] || tO.replace,
            Op = PO("mutate");
          pp.map(ip), Op(), cp()
        }))
      }
    }
    var eO = !1;

    function uO() {
      eO = !0
    }

    function jO() {
      eO = !1
    }
    var kO = null;

    function mO(pp) {
      if (Rp && gi.observeMutations) {
        var ip = pp.treeCallback,
          cp = void 0 === ip ? WO : ip,
          Op = pp.nodeCallback,
          op = void 0 === Op ? WO : Op,
          Ip = pp.pseudoElementsCallback,
          Sp = void 0 === Ip ? WO : Ip,
          xp = pp.observeMutationsRoot,
          Lp = void 0 === xp ? mp : xp;
        kO = new Rp((function(pp) {
          if (!eO) {
            var ip = Qc();
            si(pp).forEach((function(pp) {
              if ("childList" === pp.type && pp.addedNodes.length > 0 && !yO(pp.addedNodes[0]) && (gi.searchPseudoElements && Sp(pp.target), cp(pp.target)), "attributes" === pp.type && pp.target.parentNode && gi.searchPseudoElements && Sp([pp.target], !0), "attributes" === pp.type && yO(pp.target) && ~Ti.indexOf(pp.attributeName))
                if ("class" === pp.attributeName && function(pp) {
                    var ip = pp.getAttribute ? pp.getAttribute(di) : null,
                      cp = pp.getAttribute ? pp.getAttribute(ei) : null;
                    return ip && cp
                  }(pp.target)) {
                  var Op = Tc(Ki(pp.target)),
                    Ip = Op.prefix,
                    xp = Op.iconName;
                  pp.target.setAttribute(di, Ip || ip), xp && pp.target.setAttribute(ei, xp)
                } else(Lp = pp.target) && Lp.classList && Lp.classList.contains && Lp.classList.contains(gi.replacementClass) && op(pp.target);
              var Lp
            }))
          }
        })), Mp && kO.observe(Lp, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function RO(pp) {
      var ip, cp, Op = pp.getAttribute("data-prefix"),
        op = pp.getAttribute("data-icon"),
        Ip = void 0 !== pp.innerText ? pp.innerText.trim() : "",
        Sp = Tc(Ki(pp));
      return Sp.prefix || (Sp.prefix = Qc()), Op && op && (Sp.prefix = Op, Sp.iconName = op), Sp.iconName && Sp.prefix || (Sp.prefix && Ip.length > 0 && (Sp.iconName = (ip = Sp.prefix, cp = pp.innerText, (jc[ip] || {})[cp] || Ec(Sp.prefix, yc(pp.innerText)))), !Sp.iconName && gi.autoFetchSvg && pp.firstChild && pp.firstChild.nodeType === Node.TEXT_NODE && (Sp.iconName = pp.firstChild.data)), Sp
    }

    function qO(pp) {
      var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        cp = RO(pp),
        Op = cp.iconName,
        op = cp.prefix,
        Ip = cp.rest,
        Sp = function(pp) {
          return si(pp.attributes).reduce((function(pp, ip) {
            return "class" !== pp.name && "style" !== pp.name && (pp[ip.name] = ip.value), pp
          }), {})
        }(pp),
        xp = Gc("parseNodeAttributes", {}, pp),
        Yp = ip.styleParser ? function(pp) {
          var ip = pp.getAttribute("style"),
            cp = [];
          return ip && (cp = ip.split(";").reduce((function(pp, ip) {
            var cp = ip.split(":"),
              Op = cp[0],
              op = cp.slice(1);
            return Op && op.length > 0 && (pp[Op] = op.join(":").trim()), pp
          }), {})), cp
        }(pp) : [];
      return Lp({
        iconName: Op,
        prefix: op,
        transform: Zi,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: Ip,
          styles: Yp,
          attributes: Sp
        }
      }, xp)
    }
    var MO = xc.styles;

    function CO(pp) {
      var ip = "nest" === gi.autoReplaceSvg ? qO(pp, {
        styleParser: !1
      }) : qO(pp);
      return ~ip.extra.classes.indexOf(Bi) ? Zc("generateLayersText", pp, ip) : Zc("generateSvgReplacementMutation", pp, ip)
    }

    function EO(pp) {
      var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!Mp) return Promise.resolve();
      var cp = mp.documentElement.classList,
        Op = function(pp) {
          return cp.add("".concat(ui, "-").concat(pp))
        },
        op = function(pp) {
          return cp.remove("".concat(ui, "-").concat(pp))
        },
        Ip = gi.autoFetchSvg ? [].concat(Dp(ci), Dp(Pi)) : Xp.concat(Object.keys(MO));
      Ip.includes("fa") || Ip.push("fa");
      var Sp = [".".concat(Bi, ":not([").concat(ti, "])")].concat(Ip.map((function(pp) {
        return ".".concat(pp, ":not([").concat(ti, "])")
      }))).join(", ");
      if (0 === Sp.length) return Promise.resolve();
      var xp = [];
      try {
        xp = si(pp.querySelectorAll(Sp))
      } catch (Ap) {}
      if (!(xp.length > 0)) return Promise.resolve();
      Op("pending"), op("complete");
      var Lp = PO("onTree"),
        Yp = xp.reduce((function(pp, ip) {
          try {
            var cp = CO(ip);
            cp && pp.push(cp)
          } catch (Ap) {
            mi || "MissingIcon" === Ap.name && console.error(Ap)
          }
          return pp
        }), []);
      return new Promise((function(pp, cp) {
        Promise.all(Yp).then((function(cp) {
          dO(cp, (function() {
            Op("active"), Op("complete"), op("pending"), "function" === typeof ip && ip(), Lp(), pp()
          }))
        })).catch((function(pp) {
          Lp(), cp(pp)
        }))
      }))
    }

    function XO(pp) {
      var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      CO(pp).then((function(pp) {
        pp && dO([pp], ip)
      }))
    }
    var lO = function(pp) {
        var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cp = ip.transform,
          Op = void 0 === cp ? Zi : cp,
          op = ip.symbol,
          Ip = void 0 !== op && op,
          Sp = ip.mask,
          xp = void 0 === Sp ? null : Sp,
          Yp = ip.maskId,
          Dp = void 0 === Yp ? null : Yp,
          Ap = ip.classes,
          Pp = void 0 === Ap ? [] : Ap,
          Wp = ip.attributes,
          yp = void 0 === Wp ? {} : Wp,
          Up = ip.styles,
          wp = void 0 === Up ? {} : Up;
        if (pp) {
          var vp = pp.prefix,
            tp = pp.iconName,
            Hp = pp.icon;
          return iO(Lp({
            type: "icon"
          }, pp), (function() {
            return rc("beforeDOMElementCreation", {
              iconDefinition: pp,
              params: ip
            }), cO({
              icons: {
                main: IO(Hp),
                mask: xp ? IO(xp.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: vp,
              iconName: tp,
              transform: Lp(Lp({}, Zi), Op),
              symbol: Ip,
              maskId: Dp,
              extra: {
                attributes: yp,
                styles: wp,
                classes: Pp
              }
            })
          }))
        }
      },
      QO = {
        mixout: function() {
          return {
            icon: (pp = lO, function(ip) {
              var cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Op = (ip || {}).icon ? ip : zc(ip || {}),
                op = cp.mask;
              return op && (op = (op || {}).icon ? op : zc(op || {})), pp(Op, Lp(Lp({}, cp), {}, {
                mask: op
              }))
            })
          };
          var pp
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(pp) {
              return pp.treeCallback = EO, pp.nodeCallback = XO, pp
            }
          }
        },
        provides: function(pp) {
          pp.i2svg = function(pp) {
            var ip = pp.node,
              cp = void 0 === ip ? mp : ip,
              Op = pp.callback;
            return EO(cp, void 0 === Op ? function() {} : Op)
          }, pp.generateSvgReplacementMutation = function(pp, ip) {
            var cp = ip.iconName,
              Op = ip.prefix,
              op = ip.transform,
              Ip = ip.symbol,
              Sp = ip.mask,
              xp = ip.maskId,
              Lp = ip.extra;
            return new Promise((function(ip, Dp) {
              Promise.all([xO(cp, Op), Sp.iconName ? xO(Sp.iconName, Sp.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(Sp) {
                var Dp = Yp(Sp, 2),
                  Ap = Dp[0],
                  Pp = Dp[1];
                ip([pp, cO({
                  icons: {
                    main: Ap,
                    mask: Pp
                  },
                  prefix: Op,
                  iconName: cp,
                  transform: op,
                  symbol: Ip,
                  maskId: xp,
                  extra: Lp,
                  watchable: !0
                })])
              })).catch(Dp)
            }))
          }, pp.generateAbstractIcon = function(pp) {
            var ip, cp = pp.children,
              Op = pp.attributes,
              op = pp.main,
              Ip = pp.transform,
              Sp = pc(pp.styles);
            return Sp.length > 0 && (Op.style = Sp), ic(Ip) && (ip = Zc("generateAbstractTransformGrouping", {
              main: op,
              transform: Ip,
              containerWidth: op.width,
              iconWidth: op.width
            })), cp.push(ip || op.icon), {
              children: cp,
              attributes: Op
            }
          }
        }
      },
      JO = {
        mixout: function() {
          return {
            layer: function(pp) {
              var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                cp = ip.classes,
                Op = void 0 === cp ? [] : cp;
              return iO({
                type: "layer"
              }, (function() {
                rc("beforeDOMElementCreation", {
                  assembler: pp,
                  params: ip
                });
                var cp = [];
                return pp((function(pp) {
                  Array.isArray(pp) ? pp.map((function(pp) {
                    cp = cp.concat(pp.abstract)
                  })) : cp = cp.concat(pp.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(gi.cssPrefix, "-layers")].concat(Dp(Op)).join(" ")
                  },
                  children: cp
                }]
              }))
            }
          }
        }
      },
      BO = {
        mixout: function() {
          return {
            counter: function(pp) {
              var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                cp = ip.title,
                Op = void 0 === cp ? null : cp,
                op = ip.classes,
                Ip = void 0 === op ? [] : op,
                Sp = ip.attributes,
                xp = void 0 === Sp ? {} : Sp,
                Yp = ip.styles,
                Ap = void 0 === Yp ? {} : Yp;
              return iO({
                type: "counter",
                content: pp
              }, (function() {
                return rc("beforeDOMElementCreation", {
                    content: pp,
                    params: ip
                  }),
                  function(pp) {
                    var ip = pp.content,
                      cp = pp.extra,
                      Op = Lp(Lp({}, cp.attributes), {}, {
                        class: cp.classes.join(" ")
                      }),
                      op = pc(cp.styles);
                    op.length > 0 && (Op.style = op);
                    var Ip = [];
                    return Ip.push({
                      tag: "span",
                      attributes: Op,
                      children: [ip]
                    }), Ip
                  }({
                    content: pp.toString(),
                    title: Op,
                    extra: {
                      attributes: xp,
                      styles: Ap,
                      classes: ["".concat(gi.cssPrefix, "-layers-counter")].concat(Dp(Ip))
                    }
                  })
              }))
            }
          }
        }
      },
      NO = {
        mixout: function() {
          return {
            text: function(pp) {
              var ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                cp = ip.transform,
                Op = void 0 === cp ? Zi : cp,
                op = ip.classes,
                Ip = void 0 === op ? [] : op,
                Sp = ip.attributes,
                xp = void 0 === Sp ? {} : Sp,
                Yp = ip.styles,
                Ap = void 0 === Yp ? {} : Yp;
              return iO({
                type: "text",
                content: pp
              }, (function() {
                return rc("beforeDOMElementCreation", {
                  content: pp,
                  params: ip
                }), OO({
                  content: pp,
                  transform: Lp(Lp({}, Zi), Op),
                  extra: {
                    attributes: xp,
                    styles: Ap,
                    classes: ["".concat(gi.cssPrefix, "-layers-text")].concat(Dp(Ip))
                  }
                })
              }))
            }
          }
        },
        provides: function(pp) {
          pp.generateLayersText = function(pp, ip) {
            var cp = ip.transform,
              Op = ip.extra,
              op = null,
              Ip = null;
            if (Cp) {
              var Sp = parseInt(getComputedStyle(pp).fontSize, 10),
                xp = pp.getBoundingClientRect();
              op = xp.width / Sp, Ip = xp.height / Sp
            }
            return Promise.resolve([pp, OO({
              content: pp.innerHTML,
              width: op,
              height: Ip,
              transform: cp,
              extra: Op,
              watchable: !0
            })])
          }
        }
      },
      TO = new RegExp('"', "ug"),
      fO = [1105920, 1112319],
      bO = Lp(Lp(Lp(Lp({}, {
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
      hO = Object.keys(bO).reduce((function(pp, ip) {
        return pp[ip.toLowerCase()] = bO[ip], pp
      }), {}),
      aO = Object.keys(hO).reduce((function(pp, ip) {
        var cp = hO[ip];
        return pp[ip] = cp[900] || Dp(Object.entries(cp))[0][1], pp
      }), {});

    function nO(pp, ip) {
      var cp = "".concat("data-fa-pseudo-element-pending").concat(ip.replace(":", "-"));
      return new Promise((function(Op, op) {
        if (null !== pp.getAttribute(cp)) return Op();
        var Ip = si(pp.children).filter((function(pp) {
            return pp.getAttribute(Hi) === ip
          }))[0],
          Sp = kp.getComputedStyle(pp, ip),
          xp = Sp.getPropertyValue("font-family"),
          Yp = xp.match(Ni),
          Ap = Sp.getPropertyValue("font-weight"),
          Pp = Sp.getPropertyValue("content");
        if (Ip && !Yp) return pp.removeChild(Ip), Op();
        if (Yp && "none" !== Pp && "" !== Pp) {
          var Wp = Sp.getPropertyValue("content"),
            yp = function(pp, ip) {
              var cp = pp.replace(/^['"]|['"]$/g, "").toLowerCase(),
                Op = parseInt(ip),
                op = isNaN(Op) ? "normal" : Op;
              return (hO[cp] || {})[op] || aO[cp]
            }(xp, Ap),
            Up = function(pp) {
              return yc(Dp(pp.replace(TO, ""))[0] || "")
            }(Wp),
            wp = Yp[0].startsWith("FontAwesome"),
            vp = function(pp) {
              var ip = pp.getPropertyValue("font-feature-settings").includes("ss01"),
                cp = pp.getPropertyValue("content").replace(TO, ""),
                Op = cp.codePointAt(0),
                op = Op >= fO[0] && Op <= fO[1],
                Ip = 2 === cp.length && cp[0] === cp[1];
              return op || Ip || ip
            }(Sp),
            tp = Ec(yp, Up),
            Hp = tp;
          if (wp) {
            var dp = function(pp) {
              var ip = mc[pp],
                cp = Ec("fas", pp);
              return ip || (cp ? {
                prefix: "fas",
                iconName: cp
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(Up);
            dp.iconName && dp.prefix && (tp = dp.iconName, yp = dp.prefix)
          }
          if (!tp || vp || Ip && Ip.getAttribute(di) === yp && Ip.getAttribute(ei) === Hp) Op();
          else {
            pp.setAttribute(cp, Hp), Ip && pp.removeChild(Ip);
            var ep = {
                iconName: null,
                prefix: null,
                transform: Zi,
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
              jp = ep.extra;
            jp.attributes[Hi] = ip, xO(tp, yp).then((function(op) {
              var Ip = cO(Lp(Lp({}, ep), {}, {
                  icons: {
                    main: op,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: yp,
                  iconName: Hp,
                  extra: jp,
                  watchable: !0
                })),
                Sp = mp.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === ip ? pp.insertBefore(Sp, pp.firstChild) : pp.appendChild(Sp), Sp.outerHTML = Ip.map((function(pp) {
                return Ac(pp)
              })).join("\n"), pp.removeAttribute(cp), Op()
            })).catch(op)
          }
        } else Op()
      }))
    }

    function FO(pp) {
      return Promise.all([nO(pp, "::before"), nO(pp, "::after")])
    }

    function gO(pp) {
      return pp.parentNode !== document.head && !~ji.indexOf(pp.tagName.toUpperCase()) && !pp.getAttribute(Hi) && (!pp.parentNode || "svg" !== pp.parentNode.tagName)
    }
    var GO = function(pp) {
        return !!pp && ki.some((function(ip) {
          return pp.includes(ip)
        }))
      },
      rO = function(pp) {
        if (!pp) return [];
        var ip = new Set,
          cp = pp.split(/,(?![^()]*\))/).map((function(pp) {
            return pp.trim()
          }));
        cp = cp.flatMap((function(pp) {
          return pp.includes("(") ? pp : pp.split(",").map((function(pp) {
            return pp.trim()
          }))
        }));
        var Op, op = Ip(cp);
        try {
          for (op.s(); !(Op = op.n()).done;) {
            var Sp = Op.value;
            if (GO(Sp)) {
              var xp = ki.reduce((function(pp, ip) {
                return pp.replace(ip, "")
              }), Sp);
              "" !== xp && "*" !== xp && ip.add(xp)
            }
          }
        } catch (Lp) {
          op.e(Lp)
        } finally {
          op.f()
        }
        return ip
      };

    function ZO(pp) {
      if (Mp) {
        var ip;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) ip = pp;
        else if (gi.searchPseudoElementsFullScan) ip = pp.querySelectorAll("*");
        else {
          var cp, Op = new Set,
            op = Ip(document.styleSheets);
          try {
            for (op.s(); !(cp = op.n()).done;) {
              var Sp = cp.value;
              try {
                var xp, Lp = Ip(Sp.cssRules);
                try {
                  for (Lp.s(); !(xp = Lp.n()).done;) {
                    var Yp, Dp = xp.value,
                      Ap = Ip(rO(Dp.selectorText));
                    try {
                      for (Ap.s(); !(Yp = Ap.n()).done;) {
                        var Pp = Yp.value;
                        Op.add(Pp)
                      }
                    } catch (yp) {
                      Ap.e(yp)
                    } finally {
                      Ap.f()
                    }
                  }
                } catch (yp) {
                  Lp.e(yp)
                } finally {
                  Lp.f()
                }
              } catch (Up) {
                gi.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(Sp.href, " (").concat(Up.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (yp) {
            op.e(yp)
          } finally {
            op.f()
          }
          if (!Op.size) return;
          var Wp = Array.from(Op).join(", ");
          try {
            ip = pp.querySelectorAll(Wp)
          } catch (wp) {}
        }
        return new Promise((function(pp, cp) {
          var Op = si(ip).filter(gO).map(FO),
            op = PO("searchPseudoElements");
          uO(), Promise.all(Op).then((function() {
            op(), jO(), pp()
          })).catch((function() {
            op(), jO(), cp()
          }))
        }))
      }
    }
    var zO = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(pp) {
              return pp.pseudoElementsCallback = ZO, pp
            }
          }
        },
        provides: function(pp) {
          pp.pseudoElements2svg = function(pp) {
            var ip = pp.node,
              cp = void 0 === ip ? mp : ip;
            gi.searchPseudoElements && ZO(cp)
          }
        }
      },
      sO = !1,
      KO = function(pp) {
        return pp.toLowerCase().split(" ").reduce((function(pp, ip) {
          var cp = ip.toLowerCase().split("-"),
            Op = cp[0],
            op = cp.slice(1).join("-");
          if (Op && "h" === op) return pp.flipX = !0, pp;
          if (Op && "v" === op) return pp.flipY = !0, pp;
          if (op = parseFloat(op), isNaN(op)) return pp;
          switch (Op) {
            case "grow":
              pp.size = pp.size + op;
              break;
            case "shrink":
              pp.size = pp.size - op;
              break;
            case "left":
              pp.x = pp.x - op;
              break;
            case "right":
              pp.x = pp.x + op;
              break;
            case "up":
              pp.y = pp.y - op;
              break;
            case "down":
              pp.y = pp.y + op;
              break;
            case "rotate":
              pp.rotate = pp.rotate + op
          }
          return pp
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      VO = {
        mixout: function() {
          return {
            parse: {
              transform: function(pp) {
                return KO(pp)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(pp, ip) {
              var cp = ip.getAttribute("data-fa-transform");
              return cp && (pp.transform = KO(cp)), pp
            }
          }
        },
        provides: function(pp) {
          pp.generateAbstractTransformGrouping = function(pp) {
            var ip = pp.main,
              cp = pp.transform,
              Op = pp.containerWidth,
              op = pp.iconWidth,
              Ip = {
                transform: "translate(".concat(Op / 2, " 256)")
              },
              Sp = "translate(".concat(32 * cp.x, ", ").concat(32 * cp.y, ") "),
              xp = "scale(".concat(cp.size / 16 * (cp.flipX ? -1 : 1), ", ").concat(cp.size / 16 * (cp.flipY ? -1 : 1), ") "),
              Yp = "rotate(".concat(cp.rotate, " 0 0)"),
              Dp = {
                outer: Ip,
                inner: {
                  transform: "".concat(Sp, " ").concat(xp, " ").concat(Yp)
                },
                path: {
                  transform: "translate(".concat(op / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: Lp({}, Dp.outer),
              children: [{
                tag: "g",
                attributes: Lp({}, Dp.inner),
                children: [{
                  tag: ip.icon.tag,
                  children: ip.icon.children,
                  attributes: Lp(Lp({}, ip.icon.attributes), Dp.path)
                }]
              }]
            }
          }
        }
      },
      po = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function io(pp) {
      var ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return pp.attributes && (pp.attributes.fill || ip) && (pp.attributes.fill = "black"), pp
    }
    var co = {
        hooks: function() {
          return {
            parseNodeAttributes: function(pp, ip) {
              var cp = ip.getAttribute("data-fa-mask"),
                Op = cp ? Tc(cp.split(" ").map((function(pp) {
                  return pp.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return Op.prefix || (Op.prefix = Qc()), pp.mask = Op, pp.maskId = ip.getAttribute("data-fa-mask-id"), pp
            }
          }
        },
        provides: function(pp) {
          pp.generateAbstractMask = function(pp) {
            var ip, cp = pp.children,
              Op = pp.attributes,
              op = pp.main,
              Ip = pp.mask,
              Sp = pp.maskId,
              xp = pp.transform,
              Yp = op.width,
              Dp = op.icon,
              Ap = Ip.width,
              Pp = Ip.icon,
              Wp = function(pp) {
                var ip = pp.transform,
                  cp = pp.containerWidth,
                  Op = pp.iconWidth,
                  op = {
                    transform: "translate(".concat(cp / 2, " 256)")
                  },
                  Ip = "translate(".concat(32 * ip.x, ", ").concat(32 * ip.y, ") "),
                  Sp = "scale(".concat(ip.size / 16 * (ip.flipX ? -1 : 1), ", ").concat(ip.size / 16 * (ip.flipY ? -1 : 1), ") "),
                  xp = "rotate(".concat(ip.rotate, " 0 0)");
                return {
                  outer: op,
                  inner: {
                    transform: "".concat(Ip, " ").concat(Sp, " ").concat(xp)
                  },
                  path: {
                    transform: "translate(".concat(Op / 2 * -1, " -256)")
                  }
                }
              }({
                transform: xp,
                containerWidth: Ap,
                iconWidth: Yp
              }),
              yp = {
                tag: "rect",
                attributes: Lp(Lp({}, po), {}, {
                  fill: "white"
                })
              },
              Up = Dp.children ? {
                children: Dp.children.map(io)
              } : {},
              wp = {
                tag: "g",
                attributes: Lp({}, Wp.inner),
                children: [io(Lp({
                  tag: Dp.tag,
                  attributes: Lp(Lp({}, Dp.attributes), Wp.path)
                }, Up))]
              },
              vp = {
                tag: "g",
                attributes: Lp({}, Wp.outer),
                children: [wp]
              },
              tp = "mask-".concat(Sp || zi()),
              Hp = "clip-".concat(Sp || zi()),
              dp = {
                tag: "mask",
                attributes: Lp(Lp({}, po), {}, {
                  id: tp,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [yp, vp]
              },
              ep = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: Hp
                  },
                  children: (ip = Pp, "g" === ip.tag ? ip.children : [ip])
                }, dp]
              };
            return cp.push(ep, {
              tag: "rect",
              attributes: Lp({
                fill: "currentColor",
                "clip-path": "url(#".concat(Hp, ")"),
                mask: "url(#".concat(tp, ")")
              }, po)
            }), {
              children: cp,
              attributes: Op
            }
          }
        }
      },
      Oo = {
        provides: function(pp) {
          var ip = !1;
          kp.matchMedia && (ip = kp.matchMedia("(prefers-reduced-motion: reduce)").matches), pp.missingIconAbstract = function() {
            var pp = [],
              cp = {
                fill: "currentColor"
              },
              Op = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            pp.push({
              tag: "path",
              attributes: Lp(Lp({}, cp), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var op = Lp(Lp({}, Op), {}, {
                attributeName: "opacity"
              }),
              Ip = {
                tag: "circle",
                attributes: Lp(Lp({}, cp), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return ip || Ip.children.push({
              tag: "animate",
              attributes: Lp(Lp({}, Op), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: Lp(Lp({}, op), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), pp.push(Ip), pp.push({
              tag: "path",
              attributes: Lp(Lp({}, cp), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: ip ? [] : [{
                tag: "animate",
                attributes: Lp(Lp({}, op), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), ip || pp.push({
              tag: "path",
              attributes: Lp(Lp({}, cp), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: Lp(Lp({}, op), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: pp
            }
          }
        }
      };
    ! function(pp, ip) {
      var cp = ip.mixoutsTo;
      ac = pp, nc = {}, Object.keys(Fc).forEach((function(pp) {
        -1 === gc.indexOf(pp) && delete Fc[pp]
      })), ac.forEach((function(pp) {
        var ip = pp.mixout ? pp.mixout() : {};
        if (Object.keys(ip).forEach((function(pp) {
            "function" === typeof ip[pp] && (cp[pp] = ip[pp]), "object" === Pp(ip[pp]) && Object.keys(ip[pp]).forEach((function(Op) {
              cp[pp] || (cp[pp] = {}), cp[pp][Op] = ip[pp][Op]
            }))
          })), pp.hooks) {
          var Op = pp.hooks();
          Object.keys(Op).forEach((function(pp) {
            nc[pp] || (nc[pp] = []), nc[pp].push(Op[pp])
          }))
        }
        pp.provides && pp.provides(Fc)
      }))
    }([Ic, QO, JO, BO, NO, zO, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              uO(), sO = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            mO(Gc("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            kO && kO.disconnect()
          },
          watch: function(pp) {
            var ip = pp.observeMutationsRoot;
            sO ? jO() : mO(Gc("mutationObserverCallbacks", {
              observeMutationsRoot: ip
            }))
          }
        }
      }
    }, VO, co, Oo, {
      hooks: function() {
        return {
          parseNodeAttributes: function(pp, ip) {
            var cp = ip.getAttribute("data-fa-symbol"),
              Op = null !== cp && ("" === cp || cp);
            return pp.symbol = Op, pp
          }
        }
      }
    }], {
      mixoutsTo: Vc
    });
    var oo = Vc.noAuto,
      Io = Vc.config,
      So = Vc.library,
      xo = Vc.dom,
      Lo = Vc.parse,
      Yo = Vc.findIconDefinition,
      Do = Vc.toHtml,
      Ao = Vc.icon,
      Po = Vc.layer,
      Wo = Vc.text,
      yo = Vc.counter
  },
  6828: pp => {
    pp.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);