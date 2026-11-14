/*! For license information please see 8f728.fa-renderer.de2397bc.chunk.js.LICENSE.txt */
export const id = 28;
export const ids = [28];
export const modules = {
  5649: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      FontAwesomeIcon: () => Yc
    });
    var Vc = nc(5642),
      Ic = nc(4013),
      rB = nc.n(Ic),
      uc = nc(73);

    function sc(cB, Bc) {
      (null == Bc || Bc > cB.length) && (Bc = cB.length);
      for (var nc = 0, Vc = Array(Bc); nc < Bc; nc++) Vc[nc] = cB[nc];
      return Vc
    }

    function Mc(cB, Bc, nc) {
      return (Bc = function(cB) {
        var Bc = function(cB, Bc) {
          if ("object" != typeof cB || !cB) return cB;
          var nc = cB[Symbol.toPrimitive];
          if (void 0 !== nc) {
            var Vc = nc.call(cB, Bc || "default");
            if ("object" != typeof Vc) return Vc;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Bc ? String : Number)(cB)
        }(cB, "string");
        return "symbol" == typeof Bc ? Bc : Bc + ""
      }(Bc)) in cB ? Object.defineProperty(cB, Bc, {
        value: nc,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : cB[Bc] = nc, cB
    }

    function Pc(cB, Bc) {
      var nc = Object.keys(cB);
      if (Object.getOwnPropertySymbols) {
        var Vc = Object.getOwnPropertySymbols(cB);
        Bc && (Vc = Vc.filter((function(Bc) {
          return Object.getOwnPropertyDescriptor(cB, Bc).enumerable
        }))), nc.push.apply(nc, Vc)
      }
      return nc
    }

    function qB(cB) {
      for (var Bc = 1; Bc < arguments.length; Bc++) {
        var nc = null != arguments[Bc] ? arguments[Bc] : {};
        Bc % 2 ? Pc(Object(nc), !0).forEach((function(Bc) {
          Mc(cB, Bc, nc[Bc])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(cB, Object.getOwnPropertyDescriptors(nc)) : Pc(Object(nc)).forEach((function(Bc) {
          Object.defineProperty(cB, Bc, Object.getOwnPropertyDescriptor(nc, Bc))
        }))
      }
      return cB
    }

    function Oc(cB, Bc) {
      return function(cB) {
        if (Array.isArray(cB)) return cB
      }(cB) || function(cB, Bc) {
        var nc = null == cB ? null : "undefined" != typeof Symbol && cB[Symbol.iterator] || cB["@@iterator"];
        if (null != nc) {
          var Vc, Ic, rB, uc, sc = [],
            Mc = !0,
            Pc = !1;
          try {
            if (rB = (nc = nc.call(cB)).next, 0 === Bc) {
              if (Object(nc) !== nc) return;
              Mc = !1
            } else
              for (; !(Mc = (Vc = rB.call(nc)).done) && (sc.push(Vc.value), sc.length !== Bc); Mc = !0);
          } catch (cB) {
            Pc = !0, Ic = cB
          } finally {
            try {
              if (!Mc && null != nc.return && (uc = nc.return(), Object(uc) !== uc)) return
            } finally {
              if (Pc) throw Ic
            }
          }
          return sc
        }
      }(cB, Bc) || mB(cB, Bc) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Tc(cB) {
      return function(cB) {
        if (Array.isArray(cB)) return sc(cB)
      }(cB) || function(cB) {
        if ("undefined" != typeof Symbol && null != cB[Symbol.iterator] || null != cB["@@iterator"]) return Array.from(cB)
      }(cB) || mB(cB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fc(cB) {
      return fc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(cB) {
        return typeof cB
      } : function(cB) {
        return cB && "function" == typeof Symbol && cB.constructor === Symbol && cB !== Symbol.prototype ? "symbol" : typeof cB
      }, fc(cB)
    }

    function mB(cB, Bc) {
      if (cB) {
        if ("string" == typeof cB) return sc(cB, Bc);
        var nc = {}.toString.call(cB).slice(8, -1);
        return "Object" === nc && cB.constructor && (nc = cB.constructor.name), "Map" === nc || "Set" === nc ? Array.from(cB) : "Arguments" === nc || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(nc) ? sc(cB, Bc) : void 0
      }
    }
    var ec;
    try {
      var tB = nc(5654);
      ec = tB.version
    } catch (gB) {
      ec = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function Sc(cB) {
      var Bc = cB.beat,
        nc = cB.fade,
        Vc = cB.beatFade,
        Ic = cB.bounce,
        rB = cB.shake,
        uc = cB.flash,
        sc = cB.spin,
        Pc = cB.spinPulse,
        qB = cB.spinReverse,
        Tc = cB.pulse,
        fc = cB.fixedWidth,
        mB = cB.inverse,
        tB = cB.border,
        Sc = cB.listItem,
        yB = cB.flip,
        zB = cB.size,
        pc = cB.rotation,
        hc = cB.pull,
        aB = cB.swapOpacity,
        lc = cB.rotateBy,
        Yc = cB.widthAuto,
        Lc = function(cB, Bc) {
          for (var nc = Oc(cB.split("-"), 2), Vc = nc[0], Ic = nc[1], rB = Oc(Bc.split("-"), 2), uc = rB[0], sc = rB[1], Mc = Vc.split("."), Pc = uc.split("."), qB = 0; qB < Math.max(Mc.length, Pc.length); qB++) {
            var Tc = Mc[qB] || "0",
              fc = Pc[qB] || "0",
              mB = parseInt(Tc, 10),
              ec = parseInt(fc, 10);
            if (mB !== ec) return mB > ec
          }
          for (var tB = 0; tB < Math.max(Mc.length, Pc.length); tB++) {
            var Sc = Mc[tB] || "0",
              yB = Pc[tB] || "0";
            if (Sc !== yB && Sc.length !== yB.length) return Sc.length < yB.length
          }
          return !(Ic && !sc)
        }(ec, "7.0.0"),
        gB = Mc(Mc(Mc(Mc(Mc(Mc({
          "fa-beat": Bc,
          "fa-fade": nc,
          "fa-beat-fade": Vc,
          "fa-bounce": Ic,
          "fa-shake": rB,
          "fa-flash": uc,
          "fa-spin": sc,
          "fa-spin-reverse": qB,
          "fa-spin-pulse": Pc,
          "fa-pulse": Tc,
          "fa-fw": fc,
          "fa-inverse": mB,
          "fa-border": tB,
          "fa-li": Sc,
          "fa-flip": !0 === yB,
          "fa-flip-horizontal": "horizontal" === yB || "both" === yB,
          "fa-flip-vertical": "vertical" === yB || "both" === yB
        }, "fa-".concat(zB), "undefined" !== typeof zB && null !== zB), "fa-rotate-".concat(pc), "undefined" !== typeof pc && null !== pc && 0 !== pc), "fa-pull-".concat(hc), "undefined" !== typeof hc && null !== hc), "fa-swap-opacity", aB), "fa-rotate-by", Lc && lc), "fa-width-auto", Lc && Yc);
      return Object.keys(gB).map((function(cB) {
        return gB[cB] ? cB : null
      })).filter((function(cB) {
        return cB
      }))
    }

    function yB(cB) {
      return Bc = cB, (Bc -= 0) === Bc ? cB : (cB = cB.replace(/[\-_\s]+(.)?/g, (function(cB, Bc) {
        return Bc ? Bc.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + cB.substr(1);
      var Bc
    }
    var zB = ["style"];
    var pc = !1;
    try {
      pc = !0
    } catch (gB) {}

    function hc(cB) {
      return cB && "object" === fc(cB) && cB.prefix && cB.iconName && cB.icon ? cB : Vc.parse.icon ? Vc.parse.icon(cB) : null === cB ? null : cB && "object" === fc(cB) && cB.prefix && cB.iconName ? cB : Array.isArray(cB) && 2 === cB.length ? {
        prefix: cB[0],
        iconName: cB[1]
      } : "string" === typeof cB ? {
        prefix: "fas",
        iconName: cB
      } : void 0
    }

    function aB(cB, Bc) {
      return Array.isArray(Bc) && Bc.length > 0 || !Array.isArray(Bc) && Bc ? Mc({}, cB, Bc) : {}
    }
    var lc = {
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
      Yc = uc.forwardRef((function(cB, Bc) {
        var nc = qB(qB({}, lc), cB),
          Ic = nc.icon,
          rB = nc.mask,
          uc = nc.symbol,
          sc = nc.className,
          Mc = nc.title,
          Pc = nc.titleId,
          Oc = nc.maskId,
          fc = hc(Ic),
          mB = aB("classes", [].concat(Tc(Sc(nc)), Tc((sc || "").split(" ")))),
          ec = aB("transform", "string" === typeof nc.transform ? Vc.parse.transform(nc.transform) : nc.transform),
          tB = aB("mask", hc(rB)),
          yB = (0, Vc.icon)(fc, qB(qB(qB(qB({}, mB), ec), tB), {}, {
            symbol: uc,
            title: Mc,
            titleId: Pc,
            maskId: Oc
          }));
        if (!yB) return function() {
          var cB;
          !pc && console && "function" === typeof console.error && (cB = console).error.apply(cB, arguments)
        }("Could not find icon", fc), null;
        var zB = yB.abstract,
          Yc = {
            ref: Bc
          };
        return Object.keys(nc).forEach((function(cB) {
          lc.hasOwnProperty(cB) || (Yc[cB] = nc[cB])
        })), Lc(zB[0], Yc)
      }));
    Yc.displayName = "FontAwesomeIcon", Yc.propTypes = {
      beat: rB().bool,
      border: rB().bool,
      beatFade: rB().bool,
      bounce: rB().bool,
      className: rB().string,
      fade: rB().bool,
      flash: rB().bool,
      mask: rB().oneOfType([rB().object, rB().array, rB().string]),
      maskId: rB().string,
      fixedWidth: rB().bool,
      inverse: rB().bool,
      flip: rB().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: rB().oneOfType([rB().object, rB().array, rB().string]),
      listItem: rB().bool,
      pull: rB().oneOf(["right", "left"]),
      pulse: rB().bool,
      rotation: rB().oneOf([0, 90, 180, 270]),
      rotateBy: rB().bool,
      shake: rB().bool,
      size: rB().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: rB().bool,
      spinPulse: rB().bool,
      spinReverse: rB().bool,
      symbol: rB().oneOfType([rB().bool, rB().string]),
      title: rB().string,
      titleId: rB().string,
      transform: rB().oneOfType([rB().string, rB().object]),
      swapOpacity: rB().bool,
      widthAuto: rB().bool
    };
    var Lc = function cB(Bc, nc) {
      var Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof nc) return nc;
      var Ic = (nc.children || []).map((function(nc) {
          return cB(Bc, nc)
        })),
        rB = Object.keys(nc.attributes || {}).reduce((function(cB, Bc) {
          var Vc = nc.attributes[Bc];
          switch (Bc) {
            case "class":
              cB.attrs.className = Vc, delete nc.attributes.class;
              break;
            case "style":
              cB.attrs.style = Vc.split(";").map((function(cB) {
                return cB.trim()
              })).filter((function(cB) {
                return cB
              })).reduce((function(cB, Bc) {
                var nc, Vc = Bc.indexOf(":"),
                  Ic = yB(Bc.slice(0, Vc)),
                  rB = Bc.slice(Vc + 1).trim();
                return Ic.startsWith("webkit") ? cB[(nc = Ic, nc.charAt(0).toUpperCase() + nc.slice(1))] = rB : cB[Ic] = rB, cB
              }), {});
              break;
            default:
              0 === Bc.indexOf("aria-") || 0 === Bc.indexOf("data-") ? cB.attrs[Bc.toLowerCase()] = Vc : cB.attrs[yB(Bc)] = Vc
          }
          return cB
        }), {
          attrs: {}
        }),
        uc = Vc.style,
        sc = void 0 === uc ? {} : uc,
        Mc = function(cB, Bc) {
          if (null == cB) return {};
          var nc, Vc, Ic = function(cB, Bc) {
            if (null == cB) return {};
            var nc = {};
            for (var Vc in cB)
              if ({}.hasOwnProperty.call(cB, Vc)) {
                if (-1 !== Bc.indexOf(Vc)) continue;
                nc[Vc] = cB[Vc]
              } return nc
          }(cB, Bc);
          if (Object.getOwnPropertySymbols) {
            var rB = Object.getOwnPropertySymbols(cB);
            for (Vc = 0; Vc < rB.length; Vc++) nc = rB[Vc], -1 === Bc.indexOf(nc) && {}.propertyIsEnumerable.call(cB, nc) && (Ic[nc] = cB[nc])
          }
          return Ic
        }(Vc, zB);
      return rB.attrs.style = qB(qB({}, rB.attrs.style), sc), Bc.apply(void 0, [nc.tag, qB(qB({}, rB.attrs), Mc)].concat(Tc(Ic)))
    }.bind(null, uc.createElement)
  },
  4016: (cB, Bc, nc) => {
    var Vc = nc(4018);

    function Ic() {}

    function rB() {}
    rB.resetWarningCache = Ic, cB.exports = function() {
      function cB(cB, Bc, nc, Ic, rB, uc) {
        if (uc !== Vc) {
          var sc = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw sc.name = "Invariant Violation", sc
        }
      }

      function Bc() {
        return cB
      }
      cB.isRequired = cB;
      var nc = {
        array: cB,
        bigint: cB,
        bool: cB,
        func: cB,
        number: cB,
        object: cB,
        string: cB,
        symbol: cB,
        any: cB,
        arrayOf: Bc,
        element: cB,
        elementType: cB,
        instanceOf: Bc,
        node: cB,
        objectOf: Bc,
        oneOf: Bc,
        oneOfType: Bc,
        shape: Bc,
        exact: Bc,
        checkPropTypes: rB,
        resetWarningCache: Ic
      };
      return nc.PropTypes = nc, nc
    }
  },
  4013: (cB, Bc, nc) => {
    cB.exports = nc(4016)()
  },
  4018: cB => {
    cB.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5642: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      (null == Bc || Bc > cB.length) && (Bc = cB.length);
      for (var nc = 0, Vc = Array(Bc); nc < Bc; nc++) Vc[nc] = cB[nc];
      return Vc
    }

    function Ic(cB, Bc) {
      for (var nc = 0; nc < Bc.length; nc++) {
        var Vc = Bc[nc];
        Vc.enumerable = Vc.enumerable || !1, Vc.configurable = !0, "value" in Vc && (Vc.writable = !0), Object.defineProperty(cB, Oc(Vc.key), Vc)
      }
    }

    function rB(cB, Bc) {
      var nc = "undefined" != typeof Symbol && cB[Symbol.iterator] || cB["@@iterator"];
      if (!nc) {
        if (Array.isArray(cB) || (nc = fc(cB)) || Bc && cB && "number" == typeof cB.length) {
          nc && (cB = nc);
          var Vc = 0,
            Ic = function() {};
          return {
            s: Ic,
            n: function() {
              return Vc >= cB.length ? {
                done: !0
              } : {
                done: !1,
                value: cB[Vc++]
              }
            },
            e: function(cB) {
              throw cB
            },
            f: Ic
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var rB, uc = !0,
        sc = !1;
      return {
        s: function() {
          nc = nc.call(cB)
        },
        n: function() {
          var cB = nc.next();
          return uc = cB.done, cB
        },
        e: function(cB) {
          sc = !0, rB = cB
        },
        f: function() {
          try {
            uc || null == nc.return || nc.return()
          } finally {
            if (sc) throw rB
          }
        }
      }
    }

    function uc(cB, Bc, nc) {
      return (Bc = Oc(Bc)) in cB ? Object.defineProperty(cB, Bc, {
        value: nc,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : cB[Bc] = nc, cB
    }

    function sc(cB, Bc) {
      var nc = Object.keys(cB);
      if (Object.getOwnPropertySymbols) {
        var Vc = Object.getOwnPropertySymbols(cB);
        Bc && (Vc = Vc.filter((function(Bc) {
          return Object.getOwnPropertyDescriptor(cB, Bc).enumerable
        }))), nc.push.apply(nc, Vc)
      }
      return nc
    }

    function Mc(cB) {
      for (var Bc = 1; Bc < arguments.length; Bc++) {
        var nc = null != arguments[Bc] ? arguments[Bc] : {};
        Bc % 2 ? sc(Object(nc), !0).forEach((function(Bc) {
          uc(cB, Bc, nc[Bc])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(cB, Object.getOwnPropertyDescriptors(nc)) : sc(Object(nc)).forEach((function(Bc) {
          Object.defineProperty(cB, Bc, Object.getOwnPropertyDescriptor(nc, Bc))
        }))
      }
      return cB
    }

    function Pc(cB, Bc) {
      return function(cB) {
        if (Array.isArray(cB)) return cB
      }(cB) || function(cB, Bc) {
        var nc = null == cB ? null : "undefined" != typeof Symbol && cB[Symbol.iterator] || cB["@@iterator"];
        if (null != nc) {
          var Vc, Ic, rB, uc, sc = [],
            Mc = !0,
            Pc = !1;
          try {
            if (rB = (nc = nc.call(cB)).next, 0 === Bc) {
              if (Object(nc) !== nc) return;
              Mc = !1
            } else
              for (; !(Mc = (Vc = rB.call(nc)).done) && (sc.push(Vc.value), sc.length !== Bc); Mc = !0);
          } catch (cB) {
            Pc = !0, Ic = cB
          } finally {
            try {
              if (!Mc && null != nc.return && (uc = nc.return(), Object(uc) !== uc)) return
            } finally {
              if (Pc) throw Ic
            }
          }
          return sc
        }
      }(cB, Bc) || fc(cB, Bc) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qB(cB) {
      return function(cB) {
        if (Array.isArray(cB)) return Vc(cB)
      }(cB) || function(cB) {
        if ("undefined" != typeof Symbol && null != cB[Symbol.iterator] || null != cB["@@iterator"]) return Array.from(cB)
      }(cB) || fc(cB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Oc(cB) {
      var Bc = function(cB, Bc) {
        if ("object" != typeof cB || !cB) return cB;
        var nc = cB[Symbol.toPrimitive];
        if (void 0 !== nc) {
          var Vc = nc.call(cB, Bc || "default");
          if ("object" != typeof Vc) return Vc;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Bc ? String : Number)(cB)
      }(cB, "string");
      return "symbol" == typeof Bc ? Bc : Bc + ""
    }

    function Tc(cB) {
      return Tc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(cB) {
        return typeof cB
      } : function(cB) {
        return cB && "function" == typeof Symbol && cB.constructor === Symbol && cB !== Symbol.prototype ? "symbol" : typeof cB
      }, Tc(cB)
    }

    function fc(cB, Bc) {
      if (cB) {
        if ("string" == typeof cB) return Vc(cB, Bc);
        var nc = {}.toString.call(cB).slice(8, -1);
        return "Object" === nc && cB.constructor && (nc = cB.constructor.name), "Map" === nc || "Set" === nc ? Array.from(cB) : "Arguments" === nc || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(nc) ? Vc(cB, Bc) : void 0
      }
    }
    nc.r(Bc), nc.d(Bc, {
      api: () => dn,
      config: () => VI,
      counter: () => TI,
      dom: () => rr,
      findIconDefinition: () => sI,
      icon: () => PI,
      layer: () => qr,
      library: () => II,
      noAuto: () => nI,
      parse: () => uI,
      text: () => OI,
      toHtml: () => MI
    });
    var mB = function() {},
      ec = {},
      tB = {},
      Sc = null,
      yB = {
        mark: mB,
        measure: mB
      };
    try {
      "undefined" !== typeof window && (ec = window), "undefined" !== typeof document && (tB = document), "undefined" !== typeof MutationObserver && (Sc = MutationObserver), "undefined" !== typeof performance && (yB = performance)
    } catch (Fc) {}
    var zB, pc, hc = (ec.navigator || {}).userAgent,
      aB = void 0 === hc ? "" : hc,
      lc = ec,
      Yc = tB,
      Lc = Sc,
      gB = yB,
      Uc = (lc.document, !!Yc.documentElement && !!Yc.head && "function" === typeof Yc.addEventListener && "function" === typeof Yc.createElement),
      bB = ~aB.indexOf("MSIE") || ~aB.indexOf("Trident/"),
      Zc = {
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
      Qc = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      Cc = "classic",
      vB = "duotone",
      Dc = "sharp",
      Nc = "sharp-duotone",
      Ec = "chisel",
      oc = "etch",
      Wc = "graphite",
      wc = "jelly",
      kB = "jelly-duo",
      Xc = "jelly-fill",
      Hc = "notdog",
      Fc = "notdog-duo",
      Jc = "slab",
      jB = "slab-press",
      Rc = "thumbprint",
      iB = "utility",
      Kc = "utility-duo",
      xB = "utility-fill",
      dc = "whiteboard",
      Ac = [Cc, vB, Dc, Nc, Ec, oc, Wc, wc, kB, Xc, Hc, Fc, Jc, jB, Rc, iB, Kc, xB, dc],
      Gc = (uc(uc(uc(uc(uc(uc(uc(uc(uc(uc(zB = {}, Cc, "Classic"), vB, "Duotone"), Dc, "Sharp"), Nc, "Sharp Duotone"), Ec, "Chisel"), oc, "Etch"), Wc, "Graphite"), wc, "Jelly"), kB, "Jelly Duo"), Xc, "Jelly Fill"), uc(uc(uc(uc(uc(uc(uc(uc(uc(zB, Hc, "Notdog"), Fc, "Notdog Duo"), Jc, "Slab"), jB, "Slab Press"), Rc, "Thumbprint"), iB, "Utility"), Kc, "Utility Duo"), xB, "Utility Fill"), dc, "Whiteboard"), new Map([
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
      cn = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      BB = {
        fak: "kit",
        "fa-kit": "kit"
      },
      nB = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      VB = (uc(uc({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      IB = {
        "kit-duotone": "fakd"
      },
      rn = "duotone-group",
      uB = "swap-opacity",
      sB = "primary",
      MB = "secondary",
      PB = (uc(uc(uc(uc(uc(uc(uc(uc(uc(uc(pc = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), uc(uc(uc(uc(uc(uc(uc(uc(uc(pc, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), uc(uc({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      qn = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      OB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      TB = OB.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      fB = [].concat(qB(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", rn, uB, sB, MB]).concat(OB.map((function(cB) {
        return "".concat(cB, "x")
      }))).concat(TB.map((function(cB) {
        return "w-".concat(cB)
      }))),
      mn = "___FONT_AWESOME___",
      eB = "svg-inline--fa",
      tn = "data-fa-i2svg",
      SB = "data-fa-pseudo-element",
      yn = "data-prefix",
      zn = "data-icon",
      pB = "fontawesome-i2svg",
      hB = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      an = ["::before", "::after", ":before", ":after"],
      lB = function() {
        try {
          return !0
        } catch (cB) {
          return !1
        }
      }();

    function YB(cB) {
      return new Proxy(cB, {
        get: function(cB, Bc) {
          return Bc in cB ? cB[Bc] : cB[Cc]
        }
      })
    }
    var LB = Mc({}, Zc);
    LB[Cc] = Mc(Mc(Mc(Mc({}, {
      "fa-duotone": "duotone"
    }), Zc[Cc]), BB), nB);
    var gn = YB(LB),
      UB = Mc({}, {
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
    UB[Cc] = Mc(Mc(Mc(Mc({}, {
      duotone: "fad"
    }), UB[Cc]), VB), IB);
    var bn = YB(UB),
      ZB = Mc({}, PB);
    ZB[Cc] = Mc(Mc({}, ZB[Cc]), {
      fak: "fa-kit"
    });
    var QB = YB(ZB),
      CB = Mc({}, {
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
    CB[Cc] = Mc(Mc({}, CB[Cc]), {
      "fa-kit": "fak"
    });
    YB(CB);
    var vn = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      DB = "fa-layers-text",
      NB = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      EB = (YB(Mc({}, {
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
      oB = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      WB = [].concat(qB(["kit"]), qB(fB)),
      wB = lc.FontAwesomeConfig || {};
    if (Yc && "function" === typeof Yc.querySelector) {
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
      ].forEach((function(cB) {
        var Bc = Pc(cB, 2),
          nc = Bc[0],
          Vc = Bc[1],
          Ic = function(cB) {
            return "" === cB || "false" !== cB && ("true" === cB || cB)
          }(function(cB) {
            var Bc = Yc.querySelector("script[" + cB + "]");
            if (Bc) return Bc.getAttribute(cB)
          }(nc));
        void 0 !== Ic && null !== Ic && (wB[Vc] = Ic)
      }))
    }
    var kn = {
      styleDefault: "solid",
      familyDefault: Cc,
      cssPrefix: "fa",
      replacementClass: eB,
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
    wB.familyPrefix && (wB.cssPrefix = wB.familyPrefix);
    var XB = Mc(Mc({}, kn), wB);
    XB.autoReplaceSvg || (XB.observeMutations = !1);
    var HB = {};
    Object.keys(kn).forEach((function(cB) {
      Object.defineProperty(HB, cB, {
        enumerable: !0,
        set: function(Bc) {
          XB[cB] = Bc, FB.forEach((function(cB) {
            return cB(HB)
          }))
        },
        get: function() {
          return XB[cB]
        }
      })
    })), Object.defineProperty(HB, "familyPrefix", {
      enumerable: !0,
      set: function(cB) {
        XB.cssPrefix = cB, FB.forEach((function(cB) {
          return cB(HB)
        }))
      },
      get: function() {
        return XB.cssPrefix
      }
    }), lc.FontAwesomeConfig = HB;
    var FB = [];
    var JB = 16,
      jn = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function RB() {
      for (var cB = 12, Bc = ""; cB-- > 0;) Bc += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return Bc
    }

    function KB(cB) {
      for (var Bc = [], nc = (cB || []).length >>> 0; nc--;) Bc[nc] = cB[nc];
      return Bc
    }

    function xn(cB) {
      return cB.classList ? KB(cB.classList) : (cB.getAttribute("class") || "").split(" ").filter((function(cB) {
        return cB
      }))
    }

    function dB(cB) {
      return "".concat(cB).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function AB(cB) {
      return Object.keys(cB || {}).reduce((function(Bc, nc) {
        return Bc + "".concat(nc, ": ").concat(cB[nc].trim(), ";")
      }), "")
    }

    function GB(cB) {
      return cB.size !== jn.size || cB.x !== jn.x || cB.y !== jn.y || cB.rotate !== jn.rotate || cB.flipX || cB.flipY
    }

    function cV() {
      var cB = "fa",
        Bc = eB,
        nc = HB.cssPrefix,
        Vc = HB.replacementClass,
        Ic = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (nc !== cB || Vc !== Bc) {
        var rB = new RegExp("\\.".concat(cB, "\\-"), "g"),
          uc = new RegExp("\\--".concat(cB, "\\-"), "g"),
          sc = new RegExp("\\.".concat(Bc), "g");
        Ic = Ic.replace(rB, ".".concat(nc, "-")).replace(uc, "--".concat(nc, "-")).replace(sc, ".".concat(Vc))
      }
      return Ic
    }
    var Bn = !1;

    function nn() {
      HB.autoAddCss && !Bn && (! function(cB) {
        if (cB && Uc) {
          var Bc = Yc.createElement("style");
          Bc.setAttribute("type", "text/css"), Bc.innerHTML = cB;
          for (var nc = Yc.head.childNodes, Vc = null, Ic = nc.length - 1; Ic > -1; Ic--) {
            var rB = nc[Ic],
              uc = (rB.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(uc) > -1 && (Vc = rB)
          }
          Yc.head.insertBefore(Bc, Vc)
        }
      }(cV()), Bn = !0)
    }
    var Vn = {
        mixout: function() {
          return {
            dom: {
              css: cV,
              insertCss: nn
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              nn()
            },
            beforeI2svg: function() {
              nn()
            }
          }
        }
      },
      In = lc || {};
    In[mn] || (In[mn] = {}), In[mn].styles || (In[mn].styles = {}), In[mn].hooks || (In[mn].hooks = {}), In[mn].shims || (In[mn].shims = []);
    var rV = In[mn],
      un = [],
      sn = function() {
        Yc.removeEventListener("DOMContentLoaded", sn), Mn = 1, un.map((function(cB) {
          return cB()
        }))
      },
      Mn = !1;

    function Pn(cB) {
      var Bc = cB.tag,
        nc = cB.attributes,
        Vc = void 0 === nc ? {} : nc,
        Ic = cB.children,
        rB = void 0 === Ic ? [] : Ic;
      return "string" === typeof cB ? dB(cB) : "<".concat(Bc, " ").concat(function(cB) {
        return Object.keys(cB || {}).reduce((function(Bc, nc) {
          return Bc + "".concat(nc, '="').concat(dB(cB[nc]), '" ')
        }), "").trim()
      }(Vc), ">").concat(rB.map(Pn).join(""), "</").concat(Bc, ">")
    }

    function qV(cB, Bc, nc) {
      if (cB && cB[Bc] && cB[Bc][nc]) return {
        prefix: Bc,
        iconName: nc,
        icon: cB[Bc][nc]
      }
    }
    Uc && ((Mn = (Yc.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Yc.readyState)) || Yc.addEventListener("DOMContentLoaded", sn));
    var On = function(cB, Bc, nc, Vc) {
      var Ic, rB, uc, sc = Object.keys(cB),
        Mc = sc.length,
        Pc = void 0 !== Vc ? function(cB, Bc) {
          return function(nc, Vc, Ic, rB) {
            return cB.call(Bc, nc, Vc, Ic, rB)
          }
        }(Bc, Vc) : Bc;
      for (void 0 === nc ? (Ic = 1, uc = cB[sc[0]]) : (Ic = 0, uc = nc); Ic < Mc; Ic++) uc = Pc(uc, cB[rB = sc[Ic]], rB, cB);
      return uc
    };

    function Tn(cB) {
      return 1 !== qB(cB).length ? null : cB.codePointAt(0).toString(16)
    }

    function fn(cB) {
      return Object.keys(cB).reduce((function(Bc, nc) {
        var Vc = cB[nc];
        return !!Vc.icon ? Bc[Vc.iconName] = Vc.icon : Bc[nc] = Vc, Bc
      }), {})
    }

    function mV(cB, Bc) {
      var nc = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        Vc = void 0 !== nc && nc,
        Ic = fn(Bc);
      "function" !== typeof rV.hooks.addPack || Vc ? rV.styles[cB] = Mc(Mc({}, rV.styles[cB] || {}), Ic) : rV.hooks.addPack(cB, fn(Bc)), "fas" === cB && mV("fa", Bc)
    }
    var en = rV.styles,
      tV = rV.shims,
      Sn = Object.keys(QB),
      yV = Sn.reduce((function(cB, Bc) {
        return cB[Bc] = Object.keys(QB[Bc]), cB
      }), {}),
      zV = null,
      pn = {},
      hn = {},
      aV = {},
      lnc = {},
      Yn = {};

    function Ln(cB, Bc) {
      var nc, Vc = Bc.split("-"),
        Ic = Vc[0],
        rB = Vc.slice(1).join("-");
      return Ic !== cB || "" === rB || (nc = rB, ~WB.indexOf(nc)) ? null : rB
    }
    var gV, Un = function() {
      var cB = function(cB) {
        return On(en, (function(Bc, nc, Vc) {
          return Bc[Vc] = On(nc, cB, {}), Bc
        }), {})
      };
      pn = cB((function(cB, Bc, nc) {
        (Bc[3] && (cB[Bc[3]] = nc), Bc[2]) && Bc[2].filter((function(cB) {
          return "number" === typeof cB
        })).forEach((function(Bc) {
          cB[Bc.toString(16)] = nc
        }));
        return cB
      })), hn = cB((function(cB, Bc, nc) {
        (cB[nc] = nc, Bc[2]) && Bc[2].filter((function(cB) {
          return "string" === typeof cB
        })).forEach((function(Bc) {
          cB[Bc] = nc
        }));
        return cB
      })), Yn = cB((function(cB, Bc, nc) {
        var Vc = Bc[2];
        return cB[nc] = nc, Vc.forEach((function(Bc) {
          cB[Bc] = nc
        })), cB
      }));
      var Bc = "far" in en || HB.autoFetchSvg,
        nc = On(tV, (function(cB, nc) {
          var Vc = nc[0],
            Ic = nc[1],
            rB = nc[2];
          return "far" !== Ic || Bc || (Ic = "fas"), "string" === typeof Vc && (cB.names[Vc] = {
            prefix: Ic,
            iconName: rB
          }), "number" === typeof Vc && (cB.unicodes[Vc.toString(16)] = {
            prefix: Ic,
            iconName: rB
          }), cB
        }), {
          names: {},
          unicodes: {}
        });
      aV = nc.names, lnc = nc.unicodes, zV = vV(HB.styleDefault, {
        family: HB.familyDefault
      })
    };

    function bV(cB, Bc) {
      return (pn[cB] || {})[Bc]
    }

    function Zn(cB, Bc) {
      return (Yn[cB] || {})[Bc]
    }

    function Qn(cB) {
      return aV[cB] || {
        prefix: null,
        iconName: null
      }
    }

    function Cn() {
      return zV
    }
    gV = function(cB) {
      zV = vV(cB.styleDefault, {
        family: HB.familyDefault
      })
    }, FB.push(gV), Un();

    function vV(cB) {
      var Bc = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        nc = void 0 === Bc ? Cc : Bc,
        Vc = gn[nc][cB];
      if (nc === vB && !cB) return "fad";
      var Ic = bn[nc][cB] || bn[nc][Vc],
        rB = cB in rV.styles ? cB : null;
      return Ic || rB || null
    }

    function Dn(cB) {
      return cB.sort().filter((function(cB, Bc, nc) {
        return nc.indexOf(cB) === Bc
      }))
    }
    var Nn = qn.concat(cn);

    function En(cB) {
      var Bc = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        nc = void 0 !== Bc && Bc,
        Vc = null,
        Ic = Dn(cB.filter((function(cB) {
          return Nn.includes(cB)
        }))),
        rB = Dn(cB.filter((function(cB) {
          return !Nn.includes(cB)
        }))),
        uc = Pc(Ic.filter((function(cB) {
          return Vc = cB, !Qc.includes(cB)
        })), 1)[0],
        sc = void 0 === uc ? null : uc,
        qB = function(cB) {
          var Bc = Cc,
            nc = Sn.reduce((function(cB, Bc) {
              return cB[Bc] = "".concat(HB.cssPrefix, "-").concat(Bc), cB
            }), {});
          return Ac.forEach((function(Vc) {
            (cB.includes(nc[Vc]) || cB.some((function(cB) {
              return yV[Vc].includes(cB)
            }))) && (Bc = Vc)
          })), Bc
        }(Ic),
        Oc = Mc(Mc({}, function(cB) {
          var Bc = [],
            nc = null;
          return cB.forEach((function(cB) {
            var Vc = Ln(HB.cssPrefix, cB);
            Vc ? nc = Vc : cB && Bc.push(cB)
          })), {
            iconName: nc,
            rest: Bc
          }
        }(rB)), {}, {
          prefix: vV(sc, {
            family: qB
          })
        });
      return Mc(Mc(Mc({}, Oc), function(cB) {
        var Bc = cB.values,
          nc = cB.family,
          Vc = cB.canonical,
          Ic = cB.givenPrefix,
          rB = void 0 === Ic ? "" : Ic,
          uc = cB.styles,
          sc = void 0 === uc ? {} : uc,
          Mc = cB.config,
          Pc = void 0 === Mc ? {} : Mc,
          qB = nc === vB,
          Oc = Bc.includes("fa-duotone") || Bc.includes("fad"),
          Tc = "duotone" === Pc.familyDefault,
          fc = "fad" === Vc.prefix || "fa-duotone" === Vc.prefix;
        !qB && (Oc || Tc || fc) && (Vc.prefix = "fad");
        (Bc.includes("fa-brands") || Bc.includes("fab")) && (Vc.prefix = "fab");
        if (!Vc.prefix && onc.includes(nc)) {
          if (Object.keys(sc).find((function(cB) {
              return Wn.includes(cB)
            })) || Pc.autoFetchSvg) {
            var mB = Gc.get(nc).defaultShortPrefixId;
            Vc.prefix = mB, Vc.iconName = Zn(Vc.prefix, Vc.iconName) || Vc.iconName
          }
        }
        "fa" !== Vc.prefix && "fa" !== rB || (Vc.prefix = Cn() || "fas");
        return Vc
      }({
        values: cB,
        family: qB,
        styles: en,
        config: HB,
        canonical: Oc,
        givenPrefix: Vc
      })), function(cB, Bc, nc) {
        var Vc = nc.prefix,
          Ic = nc.iconName;
        if (cB || !Vc || !Ic) return {
          prefix: Vc,
          iconName: Ic
        };
        var rB = "fa" === Bc ? Qn(Ic) : {},
          uc = Zn(Vc, Ic);
        Ic = rB.iconName || uc || Ic, "far" !== (Vc = rB.prefix || Vc) || en.far || !en.fas || HB.autoFetchSvg || (Vc = "fas");
        return {
          prefix: Vc,
          iconName: Ic
        }
      }(nc, Vc, Oc))
    }
    var onc = Ac.filter((function(cB) {
        return cB !== Cc || cB !== vB
      })),
      Wn = Object.keys(PB).filter((function(cB) {
        return cB !== Cc
      })).map((function(cB) {
        return Object.keys(PB[cB])
      })).flat();
    var wn = function() {
        return function(cB, Bc, nc) {
          return Bc && Ic(cB.prototype, Bc), nc && Ic(cB, nc), Object.defineProperty(cB, "prototype", {
            writable: !1
          }), cB
        }((function cB() {
          ! function(cB, Bc) {
            if (!(cB instanceof Bc)) throw new TypeError("Cannot call a class as a function")
          }(this, cB), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var cB = this, Bc = arguments.length, nc = new Array(Bc), Vc = 0; Vc < Bc; Vc++) nc[Vc] = arguments[Vc];
            var Ic = nc.reduce(this._pullDefinitions, {});
            Object.keys(Ic).forEach((function(Bc) {
              cB.definitions[Bc] = Mc(Mc({}, cB.definitions[Bc] || {}), Ic[Bc]), mV(Bc, Ic[Bc]);
              var nc = QB[Cc][Bc];
              nc && mV(nc, Ic[Bc]), Un()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(cB, Bc) {
            var nc = Bc.prefix && Bc.iconName && Bc.icon ? {
              0: Bc
            } : Bc;
            return Object.keys(nc).map((function(Bc) {
              var Vc = nc[Bc],
                Ic = Vc.prefix,
                rB = Vc.iconName,
                uc = Vc.icon,
                sc = uc[2];
              cB[Ic] || (cB[Ic] = {}), sc.length > 0 && sc.forEach((function(Bc) {
                "string" === typeof Bc && (cB[Ic][Bc] = uc)
              })), cB[Ic][rB] = uc
            })), cB
          }
        }])
      }(),
      kV = [],
      Xn = {},
      Hn = {},
      Fn = Object.keys(Hn);

    function Jn(cB, Bc) {
      for (var nc = arguments.length, Vc = new Array(nc > 2 ? nc - 2 : 0), Ic = 2; Ic < nc; Ic++) Vc[Ic - 2] = arguments[Ic];
      return (Xn[cB] || []).forEach((function(cB) {
        Bc = cB.apply(null, [Bc].concat(Vc))
      })), Bc
    }

    function jV(cB) {
      for (var Bc = arguments.length, nc = new Array(Bc > 1 ? Bc - 1 : 0), Vc = 1; Vc < Bc; Vc++) nc[Vc - 1] = arguments[Vc];
      (Xn[cB] || []).forEach((function(cB) {
        cB.apply(null, nc)
      }))
    }

    function Rn() {
      var cB = arguments[0],
        Bc = Array.prototype.slice.call(arguments, 1);
      return Hn[cB] ? Hn[cB].apply(null, Bc) : void 0
    }

    function iV(cB) {
      "fa" === cB.prefix && (cB.prefix = "fas");
      var Bc = cB.iconName,
        nc = cB.prefix || Cn();
      if (Bc) return Bc = Zn(nc, Bc) || Bc, qV(Kn.definitions, nc, Bc) || qV(rV.styles, nc, Bc)
    }
    var Kn = new wn,
      xV = {
        i2svg: function() {
          var cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Uc ? (jV("beforeI2svg", cB), Rn("pseudoElements2svg", cB), Rn("i2svg", cB)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var cB, Bc = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            nc = Bc.autoReplaceSvgRoot;
          !1 === HB.autoReplaceSvg && (HB.autoReplaceSvg = !0), HB.observeMutations = !0, cB = function() {
            An({
              autoReplaceSvgRoot: nc
            }), jV("watch", Bc)
          }, Uc && (Mn ? setTimeout(cB, 0) : un.push(cB))
        }
      },
      dn = {
        noAuto: function() {
          HB.autoReplaceSvg = !1, HB.observeMutations = !1, jV("noAuto")
        },
        config: HB,
        dom: xV,
        parse: {
          icon: function(cB) {
            if (null === cB) return null;
            if ("object" === Tc(cB) && cB.prefix && cB.iconName) return {
              prefix: cB.prefix,
              iconName: Zn(cB.prefix, cB.iconName) || cB.iconName
            };
            if (Array.isArray(cB) && 2 === cB.length) {
              var Bc = 0 === cB[1].indexOf("fa-") ? cB[1].slice(3) : cB[1],
                nc = vV(cB[0]);
              return {
                prefix: nc,
                iconName: Zn(nc, Bc) || Bc
              }
            }
            if ("string" === typeof cB && (cB.indexOf("".concat(HB.cssPrefix, "-")) > -1 || cB.match(vn))) {
              var Vc = En(cB.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: Vc.prefix || Cn(),
                iconName: Zn(Vc.prefix, Vc.iconName) || Vc.iconName
              }
            }
            if ("string" === typeof cB) {
              var Ic = Cn();
              return {
                prefix: Ic,
                iconName: Zn(Ic, cB) || cB
              }
            }
          }
        },
        library: Kn,
        findIconDefinition: iV,
        toHtml: Pn
      },
      An = function() {
        var cB = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          Bc = void 0 === cB ? Yc : cB;
        (Object.keys(rV.styles).length > 0 || HB.autoFetchSvg) && Uc && HB.autoReplaceSvg && dn.dom.i2svg({
          node: Bc
        })
      };

    function Gn(cB, Bc) {
      return Object.defineProperty(cB, "abstract", {
        get: Bc
      }), Object.defineProperty(cB, "html", {
        get: function() {
          return cB.abstract.map((function(cB) {
            return Pn(cB)
          }))
        }
      }), Object.defineProperty(cB, "node", {
        get: function() {
          if (Uc) {
            var Bc = Yc.createElement("div");
            return Bc.innerHTML = cB.html, Bc.children
          }
        }
      }), cB
    }

    function cI(cB) {
      var Bc = cB.icons,
        nc = Bc.main,
        Vc = Bc.mask,
        Ic = cB.prefix,
        rB = cB.iconName,
        uc = cB.transform,
        sc = cB.symbol,
        Pc = cB.maskId,
        qB = cB.extra,
        Oc = cB.watchable,
        Tc = void 0 !== Oc && Oc,
        fc = Vc.found ? Vc : nc,
        mB = fc.width,
        ec = fc.height,
        tB = [HB.replacementClass, rB ? "".concat(HB.cssPrefix, "-").concat(rB) : ""].filter((function(cB) {
          return -1 === qB.classes.indexOf(cB)
        })).filter((function(cB) {
          return "" !== cB || !!cB
        })).concat(qB.classes).join(" "),
        Sc = {
          children: [],
          attributes: Mc(Mc({}, qB.attributes), {}, {
            "data-prefix": Ic,
            "data-icon": rB,
            class: tB,
            role: qB.attributes.role || "img",
            viewBox: "0 0 ".concat(mB, " ").concat(ec)
          })
        };
      (function(cB) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(Bc) {
          return Bc in cB
        }))
      })(qB.attributes) || qB.attributes["aria-hidden"] || (Sc.attributes["aria-hidden"] = "true"), Tc && (Sc.attributes[tn] = "");
      var yB = Mc(Mc({}, Sc), {}, {
          prefix: Ic,
          iconName: rB,
          main: nc,
          mask: Vc,
          maskId: Pc,
          transform: uc,
          symbol: sc,
          styles: Mc({}, qB.styles)
        }),
        zB = Vc.found && nc.found ? Rn("generateAbstractMask", yB) || {
          children: [],
          attributes: {}
        } : Rn("generateAbstractIcon", yB) || {
          children: [],
          attributes: {}
        },
        pc = zB.children,
        hc = zB.attributes;
      return yB.children = pc, yB.attributes = hc, sc ? function(cB) {
        var Bc = cB.prefix,
          nc = cB.iconName,
          Vc = cB.children,
          Ic = cB.attributes,
          rB = cB.symbol,
          uc = !0 === rB ? "".concat(Bc, "-").concat(HB.cssPrefix, "-").concat(nc) : rB;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: Mc(Mc({}, Ic), {}, {
              id: uc
            }),
            children: Vc
          }]
        }]
      }(yB) : function(cB) {
        var Bc = cB.children,
          nc = cB.main,
          Vc = cB.mask,
          Ic = cB.attributes,
          rB = cB.styles,
          uc = cB.transform;
        if (GB(uc) && nc.found && !Vc.found) {
          var sc = {
            x: nc.width / nc.height / 2,
            y: .5
          };
          Ic.style = AB(Mc(Mc({}, rB), {}, {
            "transform-origin": "".concat(sc.x + uc.x / 16, "em ").concat(sc.y + uc.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: Ic,
          children: Bc
        }]
      }(yB)
    }

    function BV(cB) {
      var Bc = cB.content,
        nc = cB.width,
        Vc = cB.height,
        Ic = cB.transform,
        rB = cB.extra,
        uc = cB.watchable,
        sc = void 0 !== uc && uc,
        Pc = Mc(Mc({}, rB.attributes), {}, {
          class: rB.classes.join(" ")
        });
      sc && (Pc[tn] = "");
      var qB = Mc({}, rB.styles);
      GB(Ic) && (qB.transform = function(cB) {
        var Bc = cB.transform,
          nc = cB.width,
          Vc = void 0 === nc ? 16 : nc,
          Ic = cB.height,
          rB = void 0 === Ic ? 16 : Ic,
          uc = cB.startCentered,
          sc = void 0 !== uc && uc,
          Mc = "";
        return Mc += sc && bB ? "translate(".concat(Bc.x / JB - Vc / 2, "em, ").concat(Bc.y / JB - rB / 2, "em) ") : sc ? "translate(calc(-50% + ".concat(Bc.x / JB, "em), calc(-50% + ").concat(Bc.y / JB, "em)) ") : "translate(".concat(Bc.x / JB, "em, ").concat(Bc.y / JB, "em) "), Mc += "scale(".concat(Bc.size / JB * (Bc.flipX ? -1 : 1), ", ").concat(Bc.size / JB * (Bc.flipY ? -1 : 1), ") "), Mc + "rotate(".concat(Bc.rotate, "deg) ")
      }({
        transform: Ic,
        startCentered: !0,
        width: nc,
        height: Vc
      }), qB["-webkit-transform"] = qB.transform);
      var Oc = AB(qB);
      Oc.length > 0 && (Pc.style = Oc);
      var Tc = [];
      return Tc.push({
        tag: "span",
        attributes: Pc,
        children: [Bc]
      }), Tc
    }
    var nV = rV.styles;

    function VV(cB) {
      var Bc = cB[0],
        nc = cB[1],
        Vc = Pc(cB.slice(4), 1)[0];
      return {
        found: !0,
        width: Bc,
        height: nc,
        icon: Array.isArray(Vc) ? {
          tag: "g",
          attributes: {
            class: "".concat(HB.cssPrefix, "-").concat(oB.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(HB.cssPrefix, "-").concat(oB.SECONDARY),
              fill: "currentColor",
              d: Vc[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(HB.cssPrefix, "-").concat(oB.PRIMARY),
              fill: "currentColor",
              d: Vc[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: Vc
          }
        }
      }
    }
    var IV = {
      found: !1,
      width: 512,
      height: 512
    };

    function rI(cB, Bc) {
      var nc = Bc;
      return "fa" === Bc && null !== HB.styleDefault && (Bc = Cn()), new Promise((function(Vc, Ic) {
        if ("fa" === nc) {
          var rB = Qn(cB) || {};
          cB = rB.iconName || cB, Bc = rB.prefix || Bc
        }
        if (cB && Bc && nV[Bc] && nV[Bc][cB]) return Vc(VV(nV[Bc][cB]));
        ! function(cB, Bc) {
          lB || HB.showMissingIcons || !cB || console.error('Icon with name "'.concat(cB, '" and prefix "').concat(Bc, '" is missing.'))
        }(cB, Bc), Vc(Mc(Mc({}, IV), {}, {
          icon: HB.showMissingIcons && cB && Rn("missingIconAbstract") || {}
        }))
      }))
    }
    var uV = function() {},
      sV = HB.measurePerformance && gB && gB.mark && gB.measure ? gB : {
        mark: uV,
        measure: uV
      },
      MV = 'FA "7.2.0"',
      PV = function(cB) {
        sV.mark("".concat(MV, " ").concat(cB, " ends")), sV.measure("".concat(MV, " ").concat(cB), "".concat(MV, " ").concat(cB, " begins"), "".concat(MV, " ").concat(cB, " ends"))
      },
      qI = function(cB) {
        return sV.mark("".concat(MV, " ").concat(cB, " begins")),
          function() {
            return PV(cB)
          }
      },
      OV = function() {};

    function TV(cB) {
      return "string" === typeof(cB.getAttribute ? cB.getAttribute(tn) : null)
    }

    function fV(cB) {
      return Yc.createElementNS("http://www.w3.org/2000/svg", cB)
    }

    function mI(cB) {
      return Yc.createElement(cB)
    }

    function eV(cB) {
      var Bc = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        nc = void 0 === Bc ? "svg" === cB.tag ? fV : mI : Bc;
      if ("string" === typeof cB) return Yc.createTextNode(cB);
      var Vc = nc(cB.tag);
      return Object.keys(cB.attributes || []).forEach((function(Bc) {
        Vc.setAttribute(Bc, cB.attributes[Bc])
      })), (cB.children || []).forEach((function(cB) {
        Vc.appendChild(eV(cB, {
          ceFn: nc
        }))
      })), Vc
    }
    var tI = {
      replace: function(cB) {
        var Bc = cB[0];
        if (Bc.parentNode)
          if (cB[1].forEach((function(cB) {
              Bc.parentNode.insertBefore(eV(cB), Bc)
            })), null === Bc.getAttribute(tn) && HB.keepOriginalSource) {
            var nc = Yc.createComment(function(cB) {
              var Bc = " ".concat(cB.outerHTML, " ");
              return "".concat(Bc, "Font Awesome fontawesome.com ")
            }(Bc));
            Bc.parentNode.replaceChild(nc, Bc)
          } else Bc.remove()
      },
      nest: function(cB) {
        var Bc = cB[0],
          nc = cB[1];
        if (~xn(Bc).indexOf(HB.replacementClass)) return tI.replace(cB);
        var Vc = new RegExp("".concat(HB.cssPrefix, "-.*"));
        if (delete nc[0].attributes.id, nc[0].attributes.class) {
          var Ic = nc[0].attributes.class.split(" ").reduce((function(cB, Bc) {
            return Bc === HB.replacementClass || Bc.match(Vc) ? cB.toSvg.push(Bc) : cB.toNode.push(Bc), cB
          }), {
            toNode: [],
            toSvg: []
          });
          nc[0].attributes.class = Ic.toSvg.join(" "), 0 === Ic.toNode.length ? Bc.removeAttribute("class") : Bc.setAttribute("class", Ic.toNode.join(" "))
        }
        var rB = nc.map((function(cB) {
          return Pn(cB)
        })).join("\n");
        Bc.setAttribute(tn, ""), Bc.innerHTML = rB
      }
    };

    function SV(cB) {
      cB()
    }

    function yI(cB, Bc) {
      var nc = "function" === typeof Bc ? Bc : OV;
      if (0 === cB.length) nc();
      else {
        var Vc = SV;
        "async" === HB.mutateApproach && (Vc = lc.requestAnimationFrame || SV), Vc((function() {
          var Bc = !0 === HB.autoReplaceSvg ? tI.replace : tI[HB.autoReplaceSvg] || tI.replace,
            Vc = qI("mutate");
          cB.map(Bc), Vc(), nc()
        }))
      }
    }
    var zI = !1;

    function pV() {
      zI = !0
    }

    function hV() {
      zI = !1
    }
    var aI = null;

    function lV(cB) {
      if (Lc && HB.observeMutations) {
        var Bc = cB.treeCallback,
          nc = void 0 === Bc ? OV : Bc,
          Vc = cB.nodeCallback,
          Ic = void 0 === Vc ? OV : Vc,
          rB = cB.pseudoElementsCallback,
          uc = void 0 === rB ? OV : rB,
          sc = cB.observeMutationsRoot,
          Mc = void 0 === sc ? Yc : sc;
        aI = new Lc((function(cB) {
          if (!zI) {
            var Bc = Cn();
            KB(cB).forEach((function(cB) {
              if ("childList" === cB.type && cB.addedNodes.length > 0 && !TV(cB.addedNodes[0]) && (HB.searchPseudoElements && uc(cB.target), nc(cB.target)), "attributes" === cB.type && cB.target.parentNode && HB.searchPseudoElements && uc([cB.target], !0), "attributes" === cB.type && TV(cB.target) && ~EB.indexOf(cB.attributeName))
                if ("class" === cB.attributeName && function(cB) {
                    var Bc = cB.getAttribute ? cB.getAttribute(yn) : null,
                      nc = cB.getAttribute ? cB.getAttribute(zn) : null;
                    return Bc && nc
                  }(cB.target)) {
                  var Vc = En(xn(cB.target)),
                    rB = Vc.prefix,
                    sc = Vc.iconName;
                  cB.target.setAttribute(yn, rB || Bc), sc && cB.target.setAttribute(zn, sc)
                } else(Mc = cB.target) && Mc.classList && Mc.classList.contains && Mc.classList.contains(HB.replacementClass) && Ic(cB.target);
              var Mc
            }))
          }
        })), Uc && aI.observe(Mc, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function YV(cB) {
      var Bc, nc, Vc = cB.getAttribute("data-prefix"),
        Ic = cB.getAttribute("data-icon"),
        rB = void 0 !== cB.innerText ? cB.innerText.trim() : "",
        uc = En(xn(cB));
      return uc.prefix || (uc.prefix = Cn()), Vc && Ic && (uc.prefix = Vc, uc.iconName = Ic), uc.iconName && uc.prefix || (uc.prefix && rB.length > 0 && (uc.iconName = (Bc = uc.prefix, nc = cB.innerText, (hn[Bc] || {})[nc] || bV(uc.prefix, Tn(cB.innerText)))), !uc.iconName && HB.autoFetchSvg && cB.firstChild && cB.firstChild.nodeType === Node.TEXT_NODE && (uc.iconName = cB.firstChild.data)), uc
    }

    function LV(cB) {
      var Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        nc = YV(cB),
        Vc = nc.iconName,
        Ic = nc.prefix,
        rB = nc.rest,
        uc = function(cB) {
          return KB(cB.attributes).reduce((function(cB, Bc) {
            return "class" !== cB.name && "style" !== cB.name && (cB[Bc.name] = Bc.value), cB
          }), {})
        }(cB),
        sc = Jn("parseNodeAttributes", {}, cB),
        Pc = Bc.styleParser ? function(cB) {
          var Bc = cB.getAttribute("style"),
            nc = [];
          return Bc && (nc = Bc.split(";").reduce((function(cB, Bc) {
            var nc = Bc.split(":"),
              Vc = nc[0],
              Ic = nc.slice(1);
            return Vc && Ic.length > 0 && (cB[Vc] = Ic.join(":").trim()), cB
          }), {})), nc
        }(cB) : [];
      return Mc({
        iconName: Vc,
        prefix: Ic,
        transform: jn,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: rB,
          styles: Pc,
          attributes: uc
        }
      }, sc)
    }
    var gI = rV.styles;

    function UV(cB) {
      var Bc = "nest" === HB.autoReplaceSvg ? LV(cB, {
        styleParser: !1
      }) : LV(cB);
      return ~Bc.extra.classes.indexOf(DB) ? Rn("generateLayersText", cB, Bc) : Rn("generateSvgReplacementMutation", cB, Bc)
    }

    function bI(cB) {
      var Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!Uc) return Promise.resolve();
      var nc = Yc.documentElement.classList,
        Vc = function(cB) {
          return nc.add("".concat(pB, "-").concat(cB))
        },
        Ic = function(cB) {
          return nc.remove("".concat(pB, "-").concat(cB))
        },
        rB = HB.autoFetchSvg ? [].concat(qB(cn), qB(qn)) : Qc.concat(Object.keys(gI));
      rB.includes("fa") || rB.push("fa");
      var uc = [".".concat(DB, ":not([").concat(tn, "])")].concat(rB.map((function(cB) {
        return ".".concat(cB, ":not([").concat(tn, "])")
      }))).join(", ");
      if (0 === uc.length) return Promise.resolve();
      var sc = [];
      try {
        sc = KB(cB.querySelectorAll(uc))
      } catch (Oc) {}
      if (!(sc.length > 0)) return Promise.resolve();
      Vc("pending"), Ic("complete");
      var Mc = qI("onTree"),
        Pc = sc.reduce((function(cB, Bc) {
          try {
            var nc = UV(Bc);
            nc && cB.push(nc)
          } catch (Oc) {
            lB || "MissingIcon" === Oc.name && console.error(Oc)
          }
          return cB
        }), []);
      return new Promise((function(cB, nc) {
        Promise.all(Pc).then((function(nc) {
          yI(nc, (function() {
            Vc("active"), Vc("complete"), Ic("pending"), "function" === typeof Bc && Bc(), Mc(), cB()
          }))
        })).catch((function(cB) {
          Mc(), nc(cB)
        }))
      }))
    }

    function ZV(cB) {
      var Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      UV(cB).then((function(cB) {
        cB && yI([cB], Bc)
      }))
    }
    var QV = function(cB) {
        var Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          nc = Bc.transform,
          Vc = void 0 === nc ? jn : nc,
          Ic = Bc.symbol,
          rB = void 0 !== Ic && Ic,
          uc = Bc.mask,
          sc = void 0 === uc ? null : uc,
          Pc = Bc.maskId,
          qB = void 0 === Pc ? null : Pc,
          Oc = Bc.classes,
          Tc = void 0 === Oc ? [] : Oc,
          fc = Bc.attributes,
          mB = void 0 === fc ? {} : fc,
          ec = Bc.styles,
          tB = void 0 === ec ? {} : ec;
        if (cB) {
          var Sc = cB.prefix,
            yB = cB.iconName,
            zB = cB.icon;
          return Gn(Mc({
            type: "icon"
          }, cB), (function() {
            return jV("beforeDOMElementCreation", {
              iconDefinition: cB,
              params: Bc
            }), cI({
              icons: {
                main: VV(zB),
                mask: sc ? VV(sc.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: Sc,
              iconName: yB,
              transform: Mc(Mc({}, jn), Vc),
              symbol: rB,
              maskId: qB,
              extra: {
                attributes: mB,
                styles: tB,
                classes: Tc
              }
            })
          }))
        }
      },
      CV = {
        mixout: function() {
          return {
            icon: (cB = QV, function(Bc) {
              var nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Vc = (Bc || {}).icon ? Bc : iV(Bc || {}),
                Ic = nc.mask;
              return Ic && (Ic = (Ic || {}).icon ? Ic : iV(Ic || {})), cB(Vc, Mc(Mc({}, nc), {}, {
                mask: Ic
              }))
            })
          };
          var cB
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(cB) {
              return cB.treeCallback = bI, cB.nodeCallback = ZV, cB
            }
          }
        },
        provides: function(cB) {
          cB.i2svg = function(cB) {
            var Bc = cB.node,
              nc = void 0 === Bc ? Yc : Bc,
              Vc = cB.callback;
            return bI(nc, void 0 === Vc ? function() {} : Vc)
          }, cB.generateSvgReplacementMutation = function(cB, Bc) {
            var nc = Bc.iconName,
              Vc = Bc.prefix,
              Ic = Bc.transform,
              rB = Bc.symbol,
              uc = Bc.mask,
              sc = Bc.maskId,
              Mc = Bc.extra;
            return new Promise((function(Bc, qB) {
              Promise.all([rI(nc, Vc), uc.iconName ? rI(uc.iconName, uc.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(uc) {
                var qB = Pc(uc, 2),
                  Oc = qB[0],
                  Tc = qB[1];
                Bc([cB, cI({
                  icons: {
                    main: Oc,
                    mask: Tc
                  },
                  prefix: Vc,
                  iconName: nc,
                  transform: Ic,
                  symbol: rB,
                  maskId: sc,
                  extra: Mc,
                  watchable: !0
                })])
              })).catch(qB)
            }))
          }, cB.generateAbstractIcon = function(cB) {
            var Bc, nc = cB.children,
              Vc = cB.attributes,
              Ic = cB.main,
              rB = cB.transform,
              uc = AB(cB.styles);
            return uc.length > 0 && (Vc.style = uc), GB(rB) && (Bc = Rn("generateAbstractTransformGrouping", {
              main: Ic,
              transform: rB,
              containerWidth: Ic.width,
              iconWidth: Ic.width
            })), nc.push(Bc || Ic.icon), {
              children: nc,
              attributes: Vc
            }
          }
        }
      },
      vI = {
        mixout: function() {
          return {
            layer: function(cB) {
              var Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                nc = Bc.classes,
                Vc = void 0 === nc ? [] : nc;
              return Gn({
                type: "layer"
              }, (function() {
                jV("beforeDOMElementCreation", {
                  assembler: cB,
                  params: Bc
                });
                var nc = [];
                return cB((function(cB) {
                  Array.isArray(cB) ? cB.map((function(cB) {
                    nc = nc.concat(cB.abstract)
                  })) : nc = nc.concat(cB.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(HB.cssPrefix, "-layers")].concat(qB(Vc)).join(" ")
                  },
                  children: nc
                }]
              }))
            }
          }
        }
      },
      DV = {
        mixout: function() {
          return {
            counter: function(cB) {
              var Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                nc = Bc.title,
                Vc = void 0 === nc ? null : nc,
                Ic = Bc.classes,
                rB = void 0 === Ic ? [] : Ic,
                uc = Bc.attributes,
                sc = void 0 === uc ? {} : uc,
                Pc = Bc.styles,
                Oc = void 0 === Pc ? {} : Pc;
              return Gn({
                type: "counter",
                content: cB
              }, (function() {
                return jV("beforeDOMElementCreation", {
                    content: cB,
                    params: Bc
                  }),
                  function(cB) {
                    var Bc = cB.content,
                      nc = cB.extra,
                      Vc = Mc(Mc({}, nc.attributes), {}, {
                        class: nc.classes.join(" ")
                      }),
                      Ic = AB(nc.styles);
                    Ic.length > 0 && (Vc.style = Ic);
                    var rB = [];
                    return rB.push({
                      tag: "span",
                      attributes: Vc,
                      children: [Bc]
                    }), rB
                  }({
                    content: cB.toString(),
                    title: Vc,
                    extra: {
                      attributes: sc,
                      styles: Oc,
                      classes: ["".concat(HB.cssPrefix, "-layers-counter")].concat(qB(rB))
                    }
                  })
              }))
            }
          }
        }
      },
      NV = {
        mixout: function() {
          return {
            text: function(cB) {
              var Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                nc = Bc.transform,
                Vc = void 0 === nc ? jn : nc,
                Ic = Bc.classes,
                rB = void 0 === Ic ? [] : Ic,
                uc = Bc.attributes,
                sc = void 0 === uc ? {} : uc,
                Pc = Bc.styles,
                Oc = void 0 === Pc ? {} : Pc;
              return Gn({
                type: "text",
                content: cB
              }, (function() {
                return jV("beforeDOMElementCreation", {
                  content: cB,
                  params: Bc
                }), BV({
                  content: cB,
                  transform: Mc(Mc({}, jn), Vc),
                  extra: {
                    attributes: sc,
                    styles: Oc,
                    classes: ["".concat(HB.cssPrefix, "-layers-text")].concat(qB(rB))
                  }
                })
              }))
            }
          }
        },
        provides: function(cB) {
          cB.generateLayersText = function(cB, Bc) {
            var nc = Bc.transform,
              Vc = Bc.extra,
              Ic = null,
              rB = null;
            if (bB) {
              var uc = parseInt(getComputedStyle(cB).fontSize, 10),
                sc = cB.getBoundingClientRect();
              Ic = sc.width / uc, rB = sc.height / uc
            }
            return Promise.resolve([cB, BV({
              content: cB.innerHTML,
              width: Ic,
              height: rB,
              transform: nc,
              extra: Vc,
              watchable: !0
            })])
          }
        }
      },
      EV = new RegExp('"', "ug"),
      oV = [1105920, 1112319],
      WV = Mc(Mc(Mc(Mc({}, {
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
      wV = Object.keys(WV).reduce((function(cB, Bc) {
        return cB[Bc.toLowerCase()] = WV[Bc], cB
      }), {}),
      kI = Object.keys(wV).reduce((function(cB, Bc) {
        var nc = wV[Bc];
        return cB[Bc] = nc[900] || qB(Object.entries(nc))[0][1], cB
      }), {});

    function XV(cB, Bc) {
      var nc = "".concat("data-fa-pseudo-element-pending").concat(Bc.replace(":", "-"));
      return new Promise((function(Vc, Ic) {
        if (null !== cB.getAttribute(nc)) return Vc();
        var rB = KB(cB.children).filter((function(cB) {
            return cB.getAttribute(SB) === Bc
          }))[0],
          uc = lc.getComputedStyle(cB, Bc),
          sc = uc.getPropertyValue("font-family"),
          Pc = sc.match(NB),
          Oc = uc.getPropertyValue("font-weight"),
          Tc = uc.getPropertyValue("content");
        if (rB && !Pc) return cB.removeChild(rB), Vc();
        if (Pc && "none" !== Tc && "" !== Tc) {
          var fc = uc.getPropertyValue("content"),
            mB = function(cB, Bc) {
              var nc = cB.replace(/^['"]|['"]$/g, "").toLowerCase(),
                Vc = parseInt(Bc),
                Ic = isNaN(Vc) ? "normal" : Vc;
              return (wV[nc] || {})[Ic] || kI[nc]
            }(sc, Oc),
            ec = function(cB) {
              return Tn(qB(cB.replace(EV, ""))[0] || "")
            }(fc),
            tB = Pc[0].startsWith("FontAwesome"),
            Sc = function(cB) {
              var Bc = cB.getPropertyValue("font-feature-settings").includes("ss01"),
                nc = cB.getPropertyValue("content").replace(EV, ""),
                Vc = nc.codePointAt(0),
                Ic = Vc >= oV[0] && Vc <= oV[1],
                rB = 2 === nc.length && nc[0] === nc[1];
              return Ic || rB || Bc
            }(uc),
            yB = bV(mB, ec),
            zB = yB;
          if (tB) {
            var pc = function(cB) {
              var Bc = lnc[cB],
                nc = bV("fas", cB);
              return Bc || (nc ? {
                prefix: "fas",
                iconName: nc
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(ec);
            pc.iconName && pc.prefix && (yB = pc.iconName, mB = pc.prefix)
          }
          if (!yB || Sc || rB && rB.getAttribute(yn) === mB && rB.getAttribute(zn) === zB) Vc();
          else {
            cB.setAttribute(nc, zB), rB && cB.removeChild(rB);
            var hc = {
                iconName: null,
                prefix: null,
                transform: jn,
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
              aB = hc.extra;
            aB.attributes[SB] = Bc, rI(yB, mB).then((function(Ic) {
              var rB = cI(Mc(Mc({}, hc), {}, {
                  icons: {
                    main: Ic,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: mB,
                  iconName: zB,
                  extra: aB,
                  watchable: !0
                })),
                uc = Yc.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === Bc ? cB.insertBefore(uc, cB.firstChild) : cB.appendChild(uc), uc.outerHTML = rB.map((function(cB) {
                return Pn(cB)
              })).join("\n"), cB.removeAttribute(nc), Vc()
            })).catch(Ic)
          }
        } else Vc()
      }))
    }

    function HV(cB) {
      return Promise.all([XV(cB, "::before"), XV(cB, "::after")])
    }

    function FV(cB) {
      return cB.parentNode !== document.head && !~hB.indexOf(cB.tagName.toUpperCase()) && !cB.getAttribute(SB) && (!cB.parentNode || "svg" !== cB.parentNode.tagName)
    }
    var JV = function(cB) {
        return !!cB && an.some((function(Bc) {
          return cB.includes(Bc)
        }))
      },
      jI = function(cB) {
        if (!cB) return [];
        var Bc = new Set,
          nc = cB.split(/,(?![^()]*\))/).map((function(cB) {
            return cB.trim()
          }));
        nc = nc.flatMap((function(cB) {
          return cB.includes("(") ? cB : cB.split(",").map((function(cB) {
            return cB.trim()
          }))
        }));
        var Vc, Ic = rB(nc);
        try {
          for (Ic.s(); !(Vc = Ic.n()).done;) {
            var uc = Vc.value;
            if (JV(uc)) {
              var sc = an.reduce((function(cB, Bc) {
                return cB.replace(Bc, "")
              }), uc);
              "" !== sc && "*" !== sc && Bc.add(sc)
            }
          }
        } catch (Mc) {
          Ic.e(Mc)
        } finally {
          Ic.f()
        }
        return Bc
      };

    function RV(cB) {
      if (Uc) {
        var Bc;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) Bc = cB;
        else if (HB.searchPseudoElementsFullScan) Bc = cB.querySelectorAll("*");
        else {
          var nc, Vc = new Set,
            Ic = rB(document.styleSheets);
          try {
            for (Ic.s(); !(nc = Ic.n()).done;) {
              var uc = nc.value;
              try {
                var sc, Mc = rB(uc.cssRules);
                try {
                  for (Mc.s(); !(sc = Mc.n()).done;) {
                    var Pc, qB = sc.value,
                      Oc = rB(jI(qB.selectorText));
                    try {
                      for (Oc.s(); !(Pc = Oc.n()).done;) {
                        var Tc = Pc.value;
                        Vc.add(Tc)
                      }
                    } catch (mB) {
                      Oc.e(mB)
                    } finally {
                      Oc.f()
                    }
                  }
                } catch (mB) {
                  Mc.e(mB)
                } finally {
                  Mc.f()
                }
              } catch (ec) {
                HB.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(uc.href, " (").concat(ec.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (mB) {
            Ic.e(mB)
          } finally {
            Ic.f()
          }
          if (!Vc.size) return;
          var fc = Array.from(Vc).join(", ");
          try {
            Bc = cB.querySelectorAll(fc)
          } catch (tB) {}
        }
        return new Promise((function(cB, nc) {
          var Vc = KB(Bc).filter(FV).map(HV),
            Ic = qI("searchPseudoElements");
          pV(), Promise.all(Vc).then((function() {
            Ic(), hV(), cB()
          })).catch((function() {
            Ic(), hV(), nc()
          }))
        }))
      }
    }
    var iI = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(cB) {
              return cB.pseudoElementsCallback = RV, cB
            }
          }
        },
        provides: function(cB) {
          cB.pseudoElements2svg = function(cB) {
            var Bc = cB.node,
              nc = void 0 === Bc ? Yc : Bc;
            HB.searchPseudoElements && RV(nc)
          }
        }
      },
      KV = !1,
      xI = function(cB) {
        return cB.toLowerCase().split(" ").reduce((function(cB, Bc) {
          var nc = Bc.toLowerCase().split("-"),
            Vc = nc[0],
            Ic = nc.slice(1).join("-");
          if (Vc && "h" === Ic) return cB.flipX = !0, cB;
          if (Vc && "v" === Ic) return cB.flipY = !0, cB;
          if (Ic = parseFloat(Ic), isNaN(Ic)) return cB;
          switch (Vc) {
            case "grow":
              cB.size = cB.size + Ic;
              break;
            case "shrink":
              cB.size = cB.size - Ic;
              break;
            case "left":
              cB.x = cB.x - Ic;
              break;
            case "right":
              cB.x = cB.x + Ic;
              break;
            case "up":
              cB.y = cB.y - Ic;
              break;
            case "down":
              cB.y = cB.y + Ic;
              break;
            case "rotate":
              cB.rotate = cB.rotate + Ic
          }
          return cB
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      dV = {
        mixout: function() {
          return {
            parse: {
              transform: function(cB) {
                return xI(cB)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(cB, Bc) {
              var nc = Bc.getAttribute("data-fa-transform");
              return nc && (cB.transform = xI(nc)), cB
            }
          }
        },
        provides: function(cB) {
          cB.generateAbstractTransformGrouping = function(cB) {
            var Bc = cB.main,
              nc = cB.transform,
              Vc = cB.containerWidth,
              Ic = cB.iconWidth,
              rB = {
                transform: "translate(".concat(Vc / 2, " 256)")
              },
              uc = "translate(".concat(32 * nc.x, ", ").concat(32 * nc.y, ") "),
              sc = "scale(".concat(nc.size / 16 * (nc.flipX ? -1 : 1), ", ").concat(nc.size / 16 * (nc.flipY ? -1 : 1), ") "),
              Pc = "rotate(".concat(nc.rotate, " 0 0)"),
              qB = {
                outer: rB,
                inner: {
                  transform: "".concat(uc, " ").concat(sc, " ").concat(Pc)
                },
                path: {
                  transform: "translate(".concat(Ic / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: Mc({}, qB.outer),
              children: [{
                tag: "g",
                attributes: Mc({}, qB.inner),
                children: [{
                  tag: Bc.icon.tag,
                  children: Bc.icon.children,
                  attributes: Mc(Mc({}, Bc.icon.attributes), qB.path)
                }]
              }]
            }
          }
        }
      },
      AV = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function GV(cB) {
      var Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return cB.attributes && (cB.attributes.fill || Bc) && (cB.attributes.fill = "black"), cB
    }
    var cr = {
        hooks: function() {
          return {
            parseNodeAttributes: function(cB, Bc) {
              var nc = Bc.getAttribute("data-fa-mask"),
                Vc = nc ? En(nc.split(" ").map((function(cB) {
                  return cB.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return Vc.prefix || (Vc.prefix = Cn()), cB.mask = Vc, cB.maskId = Bc.getAttribute("data-fa-mask-id"), cB
            }
          }
        },
        provides: function(cB) {
          cB.generateAbstractMask = function(cB) {
            var Bc, nc = cB.children,
              Vc = cB.attributes,
              Ic = cB.main,
              rB = cB.mask,
              uc = cB.maskId,
              sc = cB.transform,
              Pc = Ic.width,
              qB = Ic.icon,
              Oc = rB.width,
              Tc = rB.icon,
              fc = function(cB) {
                var Bc = cB.transform,
                  nc = cB.containerWidth,
                  Vc = cB.iconWidth,
                  Ic = {
                    transform: "translate(".concat(nc / 2, " 256)")
                  },
                  rB = "translate(".concat(32 * Bc.x, ", ").concat(32 * Bc.y, ") "),
                  uc = "scale(".concat(Bc.size / 16 * (Bc.flipX ? -1 : 1), ", ").concat(Bc.size / 16 * (Bc.flipY ? -1 : 1), ") "),
                  sc = "rotate(".concat(Bc.rotate, " 0 0)");
                return {
                  outer: Ic,
                  inner: {
                    transform: "".concat(rB, " ").concat(uc, " ").concat(sc)
                  },
                  path: {
                    transform: "translate(".concat(Vc / 2 * -1, " -256)")
                  }
                }
              }({
                transform: sc,
                containerWidth: Oc,
                iconWidth: Pc
              }),
              mB = {
                tag: "rect",
                attributes: Mc(Mc({}, AV), {}, {
                  fill: "white"
                })
              },
              ec = qB.children ? {
                children: qB.children.map(GV)
              } : {},
              tB = {
                tag: "g",
                attributes: Mc({}, fc.inner),
                children: [GV(Mc({
                  tag: qB.tag,
                  attributes: Mc(Mc({}, qB.attributes), fc.path)
                }, ec))]
              },
              Sc = {
                tag: "g",
                attributes: Mc({}, fc.outer),
                children: [tB]
              },
              yB = "mask-".concat(uc || RB()),
              zB = "clip-".concat(uc || RB()),
              pc = {
                tag: "mask",
                attributes: Mc(Mc({}, AV), {}, {
                  id: yB,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [mB, Sc]
              },
              hc = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: zB
                  },
                  children: (Bc = Tc, "g" === Bc.tag ? Bc.children : [Bc])
                }, pc]
              };
            return nc.push(hc, {
              tag: "rect",
              attributes: Mc({
                fill: "currentColor",
                "clip-path": "url(#".concat(zB, ")"),
                mask: "url(#".concat(yB, ")")
              }, AV)
            }), {
              children: nc,
              attributes: Vc
            }
          }
        }
      },
      BI = {
        provides: function(cB) {
          var Bc = !1;
          lc.matchMedia && (Bc = lc.matchMedia("(prefers-reduced-motion: reduce)").matches), cB.missingIconAbstract = function() {
            var cB = [],
              nc = {
                fill: "currentColor"
              },
              Vc = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            cB.push({
              tag: "path",
              attributes: Mc(Mc({}, nc), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var Ic = Mc(Mc({}, Vc), {}, {
                attributeName: "opacity"
              }),
              rB = {
                tag: "circle",
                attributes: Mc(Mc({}, nc), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return Bc || rB.children.push({
              tag: "animate",
              attributes: Mc(Mc({}, Vc), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: Mc(Mc({}, Ic), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), cB.push(rB), cB.push({
              tag: "path",
              attributes: Mc(Mc({}, nc), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: Bc ? [] : [{
                tag: "animate",
                attributes: Mc(Mc({}, Ic), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), Bc || cB.push({
              tag: "path",
              attributes: Mc(Mc({}, nc), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: Mc(Mc({}, Ic), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: cB
            }
          }
        }
      };
    ! function(cB, Bc) {
      var nc = Bc.mixoutsTo;
      kV = cB, Xn = {}, Object.keys(Hn).forEach((function(cB) {
        -1 === Fn.indexOf(cB) && delete Hn[cB]
      })), kV.forEach((function(cB) {
        var Bc = cB.mixout ? cB.mixout() : {};
        if (Object.keys(Bc).forEach((function(cB) {
            "function" === typeof Bc[cB] && (nc[cB] = Bc[cB]), "object" === Tc(Bc[cB]) && Object.keys(Bc[cB]).forEach((function(Vc) {
              nc[cB] || (nc[cB] = {}), nc[cB][Vc] = Bc[cB][Vc]
            }))
          })), cB.hooks) {
          var Vc = cB.hooks();
          Object.keys(Vc).forEach((function(cB) {
            Xn[cB] || (Xn[cB] = []), Xn[cB].push(Vc[cB])
          }))
        }
        cB.provides && cB.provides(Hn)
      }))
    }([Vn, CV, vI, DV, NV, iI, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              pV(), KV = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            lV(Jn("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            aI && aI.disconnect()
          },
          watch: function(cB) {
            var Bc = cB.observeMutationsRoot;
            KV ? hV() : lV(Jn("mutationObserverCallbacks", {
              observeMutationsRoot: Bc
            }))
          }
        }
      }
    }, dV, cr, BI, {
      hooks: function() {
        return {
          parseNodeAttributes: function(cB, Bc) {
            var nc = Bc.getAttribute("data-fa-symbol"),
              Vc = null !== nc && ("" === nc || nc);
            return cB.symbol = Vc, cB
          }
        }
      }
    }], {
      mixoutsTo: dn
    });
    var nI = dn.noAuto,
      VI = dn.config,
      II = dn.library,
      rr = dn.dom,
      uI = dn.parse,
      sI = dn.findIconDefinition,
      MI = dn.toHtml,
      PI = dn.icon,
      qr = dn.layer,
      OI = dn.text,
      TI = dn.counter
  },
  5654: cB => {
    cB.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);