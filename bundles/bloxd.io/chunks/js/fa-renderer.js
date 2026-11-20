/*! For license information please see halsg.fa-renderer.3e9f7f31.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6419: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      FontAwesomeIcon: () => jb
    });
    var Bb = hb(6412),
      Ob = hb(4729),
      Gb = hb.n(Ob),
      Ub = hb(49);

    function Lb(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function Yb(bb, ub, hb) {
      return (ub = function(bb) {
        var ub = function(bb, ub) {
          if ("object" != typeof bb || !bb) return bb;
          var hb = bb[Symbol.toPrimitive];
          if (void 0 !== hb) {
            var Bb = hb.call(bb, ub || "default");
            if ("object" != typeof Bb) return Bb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ub ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == typeof ub ? ub : ub + ""
      }(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Sb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function ab(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Sb(Object(hb), !0).forEach((function(ub) {
          Yb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Sb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Hb(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        var hb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != hb) {
          var Bb, Ob, Gb, Ub, Lb = [],
            Yb = !0,
            Sb = !1;
          try {
            if (Gb = (hb = hb.call(bb)).next, 0 === ub) {
              if (Object(hb) !== hb) return;
              Yb = !1
            } else
              for (; !(Yb = (Bb = Gb.call(hb)).done) && (Lb.push(Bb.value), Lb.length !== ub); Yb = !0);
          } catch (bb) {
            Sb = !0, Ob = bb
          } finally {
            try {
              if (!Yb && null != hb.return && (Ub = hb.return(), Object(Ub) !== Ub)) return
            } finally {
              if (Sb) throw Ob
            }
          }
          return Lb
        }
      }(bb, ub) || Xb(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wb(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return Lb(bb)
      }(bb) || function(bb) {
        if ("undefined" != typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Xb(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Zb(bb) {
      return Zb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Zb(bb)
    }

    function Xb(bb, ub) {
      if (bb) {
        if ("string" == typeof bb) return Lb(bb, ub);
        var hb = {}.toString.call(bb).slice(8, -1);
        return "Object" === hb && bb.constructor && (hb = bb.constructor.name), "Map" === hb || "Set" === hb ? Array.from(bb) : "Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb) ? Lb(bb, ub) : void 0
      }
    }
    var pb;
    try {
      var ob = hb(6426);
      pb = ob.version
    } catch (Db) {
      pb = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function Ab(bb) {
      var ub = bb.beat,
        hb = bb.fade,
        Bb = bb.beatFade,
        Ob = bb.bounce,
        Gb = bb.shake,
        Ub = bb.flash,
        Lb = bb.spin,
        Sb = bb.spinPulse,
        ab = bb.spinReverse,
        wb = bb.pulse,
        Zb = bb.fixedWidth,
        Xb = bb.inverse,
        ob = bb.border,
        Ab = bb.listItem,
        lb = bb.flip,
        Kb = bb.size,
        Wb = bb.rotation,
        Cb = bb.pull,
        db = bb.swapOpacity,
        rb = bb.rotateBy,
        jb = bb.widthAuto,
        nb = function(bb, ub) {
          for (var hb = Hb(bb.split("-"), 2), Bb = hb[0], Ob = hb[1], Gb = Hb(ub.split("-"), 2), Ub = Gb[0], Lb = Gb[1], Yb = Bb.split("."), Sb = Ub.split("."), ab = 0; ab < Math.max(Yb.length, Sb.length); ab++) {
            var wb = Yb[ab] || "0",
              Zb = Sb[ab] || "0",
              Xb = parseInt(wb, 10),
              pb = parseInt(Zb, 10);
            if (Xb !== pb) return Xb > pb
          }
          for (var ob = 0; ob < Math.max(Yb.length, Sb.length); ob++) {
            var Ab = Yb[ob] || "0",
              lb = Sb[ob] || "0";
            if (Ab !== lb && Ab.length !== lb.length) return Ab.length < lb.length
          }
          return !(Ob && !Lb)
        }(pb, "7.0.0"),
        Db = Yb(Yb(Yb(Yb(Yb(Yb({
          "fa-beat": ub,
          "fa-fade": hb,
          "fa-beat-fade": Bb,
          "fa-bounce": Ob,
          "fa-shake": Gb,
          "fa-flash": Ub,
          "fa-spin": Lb,
          "fa-spin-reverse": ab,
          "fa-spin-pulse": Sb,
          "fa-pulse": wb,
          "fa-fw": Zb,
          "fa-inverse": Xb,
          "fa-border": ob,
          "fa-li": Ab,
          "fa-flip": !0 === lb,
          "fa-flip-horizontal": "horizontal" === lb || "both" === lb,
          "fa-flip-vertical": "vertical" === lb || "both" === lb
        }, "fa-".concat(Kb), "undefined" !== typeof Kb && null !== Kb), "fa-rotate-".concat(Wb), "undefined" !== typeof Wb && null !== Wb && 0 !== Wb), "fa-pull-".concat(Cb), "undefined" !== typeof Cb && null !== Cb), "fa-swap-opacity", db), "fa-rotate-by", nb && rb), "fa-width-auto", nb && jb);
      return Object.keys(Db).map((function(bb) {
        return Db[bb] ? bb : null
      })).filter((function(bb) {
        return bb
      }))
    }

    function lb(bb) {
      return ub = bb, (ub -= 0) === ub ? bb : (bb = bb.replace(/[\-_\s]+(.)?/g, (function(bb, ub) {
        return ub ? ub.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + bb.substr(1);
      var ub
    }
    var Kb = ["style"];
    var Wb = !1;
    try {
      Wb = !0
    } catch (Db) {}

    function Cb(bb) {
      return bb && "object" === Zb(bb) && bb.prefix && bb.iconName && bb.icon ? bb : Bb.parse.icon ? Bb.parse.icon(bb) : null === bb ? null : bb && "object" === Zb(bb) && bb.prefix && bb.iconName ? bb : Array.isArray(bb) && 2 === bb.length ? {
        prefix: bb[0],
        iconName: bb[1]
      } : "string" === typeof bb ? {
        prefix: "fas",
        iconName: bb
      } : void 0
    }

    function db(bb, ub) {
      return Array.isArray(ub) && ub.length > 0 || !Array.isArray(ub) && ub ? Yb({}, bb, ub) : {}
    }
    var rb = {
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
      jb = Ub.forwardRef((function(bb, ub) {
        var hb = ab(ab({}, rb), bb),
          Ob = hb.icon,
          Gb = hb.mask,
          Ub = hb.symbol,
          Lb = hb.className,
          Yb = hb.title,
          Sb = hb.titleId,
          Hb = hb.maskId,
          Zb = Cb(Ob),
          Xb = db("classes", [].concat(wb(Ab(hb)), wb((Lb || "").split(" ")))),
          pb = db("transform", "string" === typeof hb.transform ? Bb.parse.transform(hb.transform) : hb.transform),
          ob = db("mask", Cb(Gb)),
          lb = (0, Bb.icon)(Zb, ab(ab(ab(ab({}, Xb), pb), ob), {}, {
            symbol: Ub,
            title: Yb,
            titleId: Sb,
            maskId: Hb
          }));
        if (!lb) return function() {
          var bb;
          !Wb && console && "function" === typeof console.error && (bb = console).error.apply(bb, arguments)
        }("Could not find icon", Zb), null;
        var Kb = lb.abstract,
          jb = {
            ref: ub
          };
        return Object.keys(hb).forEach((function(bb) {
          rb.hasOwnProperty(bb) || (jb[bb] = hb[bb])
        })), nb(Kb[0], jb)
      }));
    jb.displayName = "FontAwesomeIcon", jb.propTypes = {
      beat: Gb().bool,
      border: Gb().bool,
      beatFade: Gb().bool,
      bounce: Gb().bool,
      className: Gb().string,
      fade: Gb().bool,
      flash: Gb().bool,
      mask: Gb().oneOfType([Gb().object, Gb().array, Gb().string]),
      maskId: Gb().string,
      fixedWidth: Gb().bool,
      inverse: Gb().bool,
      flip: Gb().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: Gb().oneOfType([Gb().object, Gb().array, Gb().string]),
      listItem: Gb().bool,
      pull: Gb().oneOf(["right", "left"]),
      pulse: Gb().bool,
      rotation: Gb().oneOf([0, 90, 180, 270]),
      rotateBy: Gb().bool,
      shake: Gb().bool,
      size: Gb().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: Gb().bool,
      spinPulse: Gb().bool,
      spinReverse: Gb().bool,
      symbol: Gb().oneOfType([Gb().bool, Gb().string]),
      title: Gb().string,
      titleId: Gb().string,
      transform: Gb().oneOfType([Gb().string, Gb().object]),
      swapOpacity: Gb().bool,
      widthAuto: Gb().bool
    };
    var nb = function bb(ub, hb) {
      var Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof hb) return hb;
      var Ob = (hb.children || []).map((function(hb) {
          return bb(ub, hb)
        })),
        Gb = Object.keys(hb.attributes || {}).reduce((function(bb, ub) {
          var Bb = hb.attributes[ub];
          switch (ub) {
            case "class":
              bb.attrs.className = Bb, delete hb.attributes.class;
              break;
            case "style":
              bb.attrs.style = Bb.split(";").map((function(bb) {
                return bb.trim()
              })).filter((function(bb) {
                return bb
              })).reduce((function(bb, ub) {
                var hb, Bb = ub.indexOf(":"),
                  Ob = lb(ub.slice(0, Bb)),
                  Gb = ub.slice(Bb + 1).trim();
                return Ob.startsWith("webkit") ? bb[(hb = Ob, hb.charAt(0).toUpperCase() + hb.slice(1))] = Gb : bb[Ob] = Gb, bb
              }), {});
              break;
            default:
              0 === ub.indexOf("aria-") || 0 === ub.indexOf("data-") ? bb.attrs[ub.toLowerCase()] = Bb : bb.attrs[lb(ub)] = Bb
          }
          return bb
        }), {
          attrs: {}
        }),
        Ub = Bb.style,
        Lb = void 0 === Ub ? {} : Ub,
        Yb = function(bb, ub) {
          if (null == bb) return {};
          var hb, Bb, Ob = function(bb, ub) {
            if (null == bb) return {};
            var hb = {};
            for (var Bb in bb)
              if ({}.hasOwnProperty.call(bb, Bb)) {
                if (-1 !== ub.indexOf(Bb)) continue;
                hb[Bb] = bb[Bb]
              } return hb
          }(bb, ub);
          if (Object.getOwnPropertySymbols) {
            var Gb = Object.getOwnPropertySymbols(bb);
            for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], -1 === ub.indexOf(hb) && {}.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
          }
          return Ob
        }(Bb, Kb);
      return Gb.attrs.style = ab(ab({}, Gb.attrs.style), Lb), ub.apply(void 0, [hb.tag, ab(ab({}, Gb.attrs), Yb)].concat(wb(Ob)))
    }.bind(null, Ub.createElement)
  },
  4733: (bb, ub, hb) => {
    var Bb = hb(4740);

    function Ob() {}

    function Gb() {}
    Gb.resetWarningCache = Ob, bb.exports = function() {
      function bb(bb, ub, hb, Ob, Gb, Ub) {
        if (Ub !== Bb) {
          var Lb = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Lb.name = "Invariant Violation", Lb
        }
      }

      function ub() {
        return bb
      }
      bb.isRequired = bb;
      var hb = {
        array: bb,
        bigint: bb,
        bool: bb,
        func: bb,
        number: bb,
        object: bb,
        string: bb,
        symbol: bb,
        any: bb,
        arrayOf: ub,
        element: bb,
        elementType: bb,
        instanceOf: ub,
        node: bb,
        objectOf: ub,
        oneOf: ub,
        oneOfType: ub,
        shape: ub,
        exact: ub,
        checkPropTypes: Gb,
        resetWarningCache: Ob
      };
      return hb.PropTypes = hb, hb
    }
  },
  4729: (bb, ub, hb) => {
    bb.exports = hb(4733)()
  },
  4740: bb => {
    bb.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6412: (bb, ub, hb) => {
    function Bb(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function Ob(bb, ub) {
      for (var hb = 0; hb < ub.length; hb++) {
        var Bb = ub[hb];
        Bb.enumerable = Bb.enumerable || !1, Bb.configurable = !0, "value" in Bb && (Bb.writable = !0), Object.defineProperty(bb, Hb(Bb.key), Bb)
      }
    }

    function Gb(bb, ub) {
      var hb = "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
      if (!hb) {
        if (Array.isArray(bb) || (hb = Zb(bb)) || ub && bb && "number" == typeof bb.length) {
          hb && (bb = hb);
          var Bb = 0,
            Ob = function() {};
          return {
            s: Ob,
            n: function() {
              return Bb >= bb.length ? {
                done: !0
              } : {
                done: !1,
                value: bb[Bb++]
              }
            },
            e: function(bb) {
              throw bb
            },
            f: Ob
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Gb, Ub = !0,
        Lb = !1;
      return {
        s: function() {
          hb = hb.call(bb)
        },
        n: function() {
          var bb = hb.next();
          return Ub = bb.done, bb
        },
        e: function(bb) {
          Lb = !0, Gb = bb
        },
        f: function() {
          try {
            Ub || null == hb.return || hb.return()
          } finally {
            if (Lb) throw Gb
          }
        }
      }
    }

    function Ub(bb, ub, hb) {
      return (ub = Hb(ub)) in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Lb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Yb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Lb(Object(hb), !0).forEach((function(ub) {
          Ub(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Lb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Sb(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        var hb = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != hb) {
          var Bb, Ob, Gb, Ub, Lb = [],
            Yb = !0,
            Sb = !1;
          try {
            if (Gb = (hb = hb.call(bb)).next, 0 === ub) {
              if (Object(hb) !== hb) return;
              Yb = !1
            } else
              for (; !(Yb = (Bb = Gb.call(hb)).done) && (Lb.push(Bb.value), Lb.length !== ub); Yb = !0);
          } catch (bb) {
            Sb = !0, Ob = bb
          } finally {
            try {
              if (!Yb && null != hb.return && (Ub = hb.return(), Object(Ub) !== Ub)) return
            } finally {
              if (Sb) throw Ob
            }
          }
          return Lb
        }
      }(bb, ub) || Zb(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ab(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return Bb(bb)
      }(bb) || function(bb) {
        if ("undefined" != typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Zb(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Hb(bb) {
      var ub = function(bb, ub) {
        if ("object" != typeof bb || !bb) return bb;
        var hb = bb[Symbol.toPrimitive];
        if (void 0 !== hb) {
          var Bb = hb.call(bb, ub || "default");
          if ("object" != typeof Bb) return Bb;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ub ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == typeof ub ? ub : ub + ""
    }

    function wb(bb) {
      return wb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, wb(bb)
    }

    function Zb(bb, ub) {
      if (bb) {
        if ("string" == typeof bb) return Bb(bb, ub);
        var hb = {}.toString.call(bb).slice(8, -1);
        return "Object" === hb && bb.constructor && (hb = bb.constructor.name), "Map" === hb || "Set" === hb ? Array.from(bb) : "Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb) ? Bb(bb, ub) : void 0
      }
    }
    hb.r(ub), hb.d(ub, {
      api: () => Th,
      config: () => hO,
      counter: () => HO,
      dom: () => OO,
      findIconDefinition: () => UO,
      icon: () => YO,
      layer: () => SO,
      library: () => BO,
      noAuto: () => uO,
      parse: () => GO,
      text: () => aO,
      toHtml: () => LO
    });
    var Xb = function() {},
      pb = {},
      ob = {},
      Ab = null,
      lb = {
        mark: Xb,
        measure: Xb
      };
    try {
      "undefined" !== typeof window && (pb = window), "undefined" !== typeof document && (ob = document), "undefined" !== typeof MutationObserver && (Ab = MutationObserver), "undefined" !== typeof performance && (lb = performance)
    } catch (Eb) {}
    var Kb, Wb, Cb = (pb.navigator || {}).userAgent,
      db = void 0 === Cb ? "" : Cb,
      rb = pb,
      jb = ob,
      nb = Ab,
      Db = lb,
      xb = (rb.document, !!jb.documentElement && !!jb.head && "function" === typeof jb.addEventListener && "function" === typeof jb.createElement),
      zb = ~db.indexOf("MSIE") || ~db.indexOf("Trident/"),
      gb = {
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
      ib = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      vb = "classic",
      tb = "duotone",
      Jb = "sharp",
      eb = "sharp-duotone",
      Nb = "chisel",
      sb = "etch",
      Mb = "graphite",
      mb = "jelly",
      Ib = "jelly-duo",
      Pb = "jelly-fill",
      qb = "notdog",
      Eb = "notdog-duo",
      yb = "slab",
      Vb = "slab-press",
      Fb = "thumbprint",
      fb = "utility",
      kb = "utility-duo",
      Tb = "utility-fill",
      cb = "whiteboard",
      Qb = [vb, tb, Jb, eb, Nb, sb, Mb, mb, Ib, Pb, qb, Eb, yb, Vb, Fb, fb, kb, Tb, cb],
      Rb = (Ub(Ub(Ub(Ub(Ub(Ub(Ub(Ub(Ub(Ub(Kb = {}, vb, "Classic"), tb, "Duotone"), Jb, "Sharp"), eb, "Sharp Duotone"), Nb, "Chisel"), sb, "Etch"), Mb, "Graphite"), mb, "Jelly"), Ib, "Jelly Duo"), Pb, "Jelly Fill"), Ub(Ub(Ub(Ub(Ub(Ub(Ub(Ub(Ub(Kb, qb, "Notdog"), Eb, "Notdog Duo"), yb, "Slab"), Vb, "Slab Press"), Fb, "Thumbprint"), fb, "Utility"), kb, "Utility Duo"), Tb, "Utility Fill"), cb, "Whiteboard"), new Map([
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
      bu = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      uu = {
        fak: "kit",
        "fa-kit": "kit"
      },
      hu = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      Bu = (Ub(Ub({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      Ou = {
        "kit-duotone": "fakd"
      },
      Gu = "duotone-group",
      Uu = "swap-opacity",
      Lu = "primary",
      Yu = "secondary",
      Su = (Ub(Ub(Ub(Ub(Ub(Ub(Ub(Ub(Ub(Ub(Wb = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), Ub(Ub(Ub(Ub(Ub(Ub(Ub(Ub(Ub(Wb, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), Ub(Ub({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      au = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      Hu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      wu = Hu.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      Zu = [].concat(ab(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", Gu, Uu, Lu, Yu]).concat(Hu.map((function(bb) {
        return "".concat(bb, "x")
      }))).concat(wu.map((function(bb) {
        return "w-".concat(bb)
      }))),
      Xu = "___FONT_AWESOME___",
      pu = "svg-inline--fa",
      ou = "data-fa-i2svg",
      Au = "data-fa-pseudo-element",
      lu = "data-prefix",
      Ku = "data-icon",
      Wu = "fontawesome-i2svg",
      Cu = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      du = ["::before", "::after", ":before", ":after"],
      ru = function() {
        try {
          return !0
        } catch (bb) {
          return !1
        }
      }();

    function ju(bb) {
      return new Proxy(bb, {
        get: function(bb, ub) {
          return ub in bb ? bb[ub] : bb[vb]
        }
      })
    }
    var nu = Yb({}, gb);
    nu[vb] = Yb(Yb(Yb(Yb({}, {
      "fa-duotone": "duotone"
    }), gb[vb]), uu), hu);
    var Du = ju(nu),
      xu = Yb({}, {
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
    xu[vb] = Yb(Yb(Yb(Yb({}, {
      duotone: "fad"
    }), xu[vb]), Bu), Ou);
    var zu = ju(xu),
      gu = Yb({}, Su);
    gu[vb] = Yb(Yb({}, gu[vb]), {
      fak: "fa-kit"
    });
    var iu = ju(gu),
      vu = Yb({}, {
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
    vu[vb] = Yb(Yb({}, vu[vb]), {
      "fa-kit": "fak"
    });
    ju(vu);
    var tu = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      Ju = "fa-layers-text",
      eu = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Nu = (ju(Yb({}, {
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
      su = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      Mu = [].concat(ab(["kit"]), ab(Zu)),
      mu = rb.FontAwesomeConfig || {};
    if (jb && "function" === typeof jb.querySelector) {
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
      ].forEach((function(bb) {
        var ub = Sb(bb, 2),
          hb = ub[0],
          Bb = ub[1],
          Ob = function(bb) {
            return "" === bb || "false" !== bb && ("true" === bb || bb)
          }(function(bb) {
            var ub = jb.querySelector("script[" + bb + "]");
            if (ub) return ub.getAttribute(bb)
          }(hb));
        void 0 !== Ob && null !== Ob && (mu[Bb] = Ob)
      }))
    }
    var Iu = {
      styleDefault: "solid",
      familyDefault: vb,
      cssPrefix: "fa",
      replacementClass: pu,
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
    mu.familyPrefix && (mu.cssPrefix = mu.familyPrefix);
    var Pu = Yb(Yb({}, Iu), mu);
    Pu.autoReplaceSvg || (Pu.observeMutations = !1);
    var qu = {};
    Object.keys(Iu).forEach((function(bb) {
      Object.defineProperty(qu, bb, {
        enumerable: !0,
        set: function(ub) {
          Pu[bb] = ub, Eu.forEach((function(bb) {
            return bb(qu)
          }))
        },
        get: function() {
          return Pu[bb]
        }
      })
    })), Object.defineProperty(qu, "familyPrefix", {
      enumerable: !0,
      set: function(bb) {
        Pu.cssPrefix = bb, Eu.forEach((function(bb) {
          return bb(qu)
        }))
      },
      get: function() {
        return Pu.cssPrefix
      }
    }), rb.FontAwesomeConfig = qu;
    var Eu = [];
    var yu = 16,
      Vu = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function Fu() {
      for (var bb = 12, ub = ""; bb-- > 0;) ub += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return ub
    }

    function fu(bb) {
      for (var ub = [], hb = (bb || []).length >>> 0; hb--;) ub[hb] = bb[hb];
      return ub
    }

    function ku(bb) {
      return bb.classList ? fu(bb.classList) : (bb.getAttribute("class") || "").split(" ").filter((function(bb) {
        return bb
      }))
    }

    function Tu(bb) {
      return "".concat(bb).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function cu(bb) {
      return Object.keys(bb || {}).reduce((function(ub, hb) {
        return ub + "".concat(hb, ": ").concat(bb[hb].trim(), ";")
      }), "")
    }

    function Qu(bb) {
      return bb.size !== Vu.size || bb.x !== Vu.x || bb.y !== Vu.y || bb.rotate !== Vu.rotate || bb.flipX || bb.flipY
    }

    function Ru() {
      var bb = "fa",
        ub = pu,
        hb = qu.cssPrefix,
        Bb = qu.replacementClass,
        Ob = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (hb !== bb || Bb !== ub) {
        var Gb = new RegExp("\\.".concat(bb, "\\-"), "g"),
          Ub = new RegExp("\\--".concat(bb, "\\-"), "g"),
          Lb = new RegExp("\\.".concat(ub), "g");
        Ob = Ob.replace(Gb, ".".concat(hb, "-")).replace(Ub, "--".concat(hb, "-")).replace(Lb, ".".concat(Bb))
      }
      return Ob
    }
    var bh = !1;

    function uh() {
      qu.autoAddCss && !bh && (! function(bb) {
        if (bb && xb) {
          var ub = jb.createElement("style");
          ub.setAttribute("type", "text/css"), ub.innerHTML = bb;
          for (var hb = jb.head.childNodes, Bb = null, Ob = hb.length - 1; Ob > -1; Ob--) {
            var Gb = hb[Ob],
              Ub = (Gb.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(Ub) > -1 && (Bb = Gb)
          }
          jb.head.insertBefore(ub, Bb)
        }
      }(Ru()), bh = !0)
    }
    var hh = {
        mixout: function() {
          return {
            dom: {
              css: Ru,
              insertCss: uh
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              uh()
            },
            beforeI2svg: function() {
              uh()
            }
          }
        }
      },
      Bh = rb || {};
    Bh[Xu] || (Bh[Xu] = {}), Bh[Xu].styles || (Bh[Xu].styles = {}), Bh[Xu].hooks || (Bh[Xu].hooks = {}), Bh[Xu].shims || (Bh[Xu].shims = []);
    var Oh = Bh[Xu],
      Gh = [],
      Uh = function() {
        jb.removeEventListener("DOMContentLoaded", Uh), Lh = 1, Gh.map((function(bb) {
          return bb()
        }))
      },
      Lh = !1;

    function Yh(bb) {
      var ub = bb.tag,
        hb = bb.attributes,
        Bb = void 0 === hb ? {} : hb,
        Ob = bb.children,
        Gb = void 0 === Ob ? [] : Ob;
      return "string" === typeof bb ? Tu(bb) : "<".concat(ub, " ").concat(function(bb) {
        return Object.keys(bb || {}).reduce((function(ub, hb) {
          return ub + "".concat(hb, '="').concat(Tu(bb[hb]), '" ')
        }), "").trim()
      }(Bb), ">").concat(Gb.map(Yh).join(""), "</").concat(ub, ">")
    }

    function Sh(bb, ub, hb) {
      if (bb && bb[ub] && bb[ub][hb]) return {
        prefix: ub,
        iconName: hb,
        icon: bb[ub][hb]
      }
    }
    xb && ((Lh = (jb.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(jb.readyState)) || jb.addEventListener("DOMContentLoaded", Uh));
    var ah = function(bb, ub, hb, Bb) {
      var Ob, Gb, Ub, Lb = Object.keys(bb),
        Yb = Lb.length,
        Sb = void 0 !== Bb ? function(bb, ub) {
          return function(hb, Bb, Ob, Gb) {
            return bb.call(ub, hb, Bb, Ob, Gb)
          }
        }(ub, Bb) : ub;
      for (void 0 === hb ? (Ob = 1, Ub = bb[Lb[0]]) : (Ob = 0, Ub = hb); Ob < Yb; Ob++) Ub = Sb(Ub, bb[Gb = Lb[Ob]], Gb, bb);
      return Ub
    };

    function Hh(bb) {
      return 1 !== ab(bb).length ? null : bb.codePointAt(0).toString(16)
    }

    function wh(bb) {
      return Object.keys(bb).reduce((function(ub, hb) {
        var Bb = bb[hb];
        return !!Bb.icon ? ub[Bb.iconName] = Bb.icon : ub[hb] = Bb, ub
      }), {})
    }

    function Zh(bb, ub) {
      var hb = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        Bb = void 0 !== hb && hb,
        Ob = wh(ub);
      "function" !== typeof Oh.hooks.addPack || Bb ? Oh.styles[bb] = Yb(Yb({}, Oh.styles[bb] || {}), Ob) : Oh.hooks.addPack(bb, wh(ub)), "fas" === bb && Zh("fa", ub)
    }
    var Xh = Oh.styles,
      ph = Oh.shims,
      oh = Object.keys(iu),
      Ah = oh.reduce((function(bb, ub) {
        return bb[ub] = Object.keys(iu[ub]), bb
      }), {}),
      lh = null,
      Kh = {},
      Wh = {},
      Ch = {},
      dh = {},
      rh = {};

    function jh(bb, ub) {
      var hb, Bb = ub.split("-"),
        Ob = Bb[0],
        Gb = Bb.slice(1).join("-");
      return Ob !== bb || "" === Gb || (hb = Gb, ~Mu.indexOf(hb)) ? null : Gb
    }
    var nh, Dh = function() {
      var bb = function(bb) {
        return ah(Xh, (function(ub, hb, Bb) {
          return ub[Bb] = ah(hb, bb, {}), ub
        }), {})
      };
      Kh = bb((function(bb, ub, hb) {
        (ub[3] && (bb[ub[3]] = hb), ub[2]) && ub[2].filter((function(bb) {
          return "number" === typeof bb
        })).forEach((function(ub) {
          bb[ub.toString(16)] = hb
        }));
        return bb
      })), Wh = bb((function(bb, ub, hb) {
        (bb[hb] = hb, ub[2]) && ub[2].filter((function(bb) {
          return "string" === typeof bb
        })).forEach((function(ub) {
          bb[ub] = hb
        }));
        return bb
      })), rh = bb((function(bb, ub, hb) {
        var Bb = ub[2];
        return bb[hb] = hb, Bb.forEach((function(ub) {
          bb[ub] = hb
        })), bb
      }));
      var ub = "far" in Xh || qu.autoFetchSvg,
        hb = ah(ph, (function(bb, hb) {
          var Bb = hb[0],
            Ob = hb[1],
            Gb = hb[2];
          return "far" !== Ob || ub || (Ob = "fas"), "string" === typeof Bb && (bb.names[Bb] = {
            prefix: Ob,
            iconName: Gb
          }), "number" === typeof Bb && (bb.unicodes[Bb.toString(16)] = {
            prefix: Ob,
            iconName: Gb
          }), bb
        }), {
          names: {},
          unicodes: {}
        });
      Ch = hb.names, dh = hb.unicodes, lh = vh(qu.styleDefault, {
        family: qu.familyDefault
      })
    };

    function xh(bb, ub) {
      return (Kh[bb] || {})[ub]
    }

    function zh(bb, ub) {
      return (rh[bb] || {})[ub]
    }

    function gh(bb) {
      return Ch[bb] || {
        prefix: null,
        iconName: null
      }
    }

    function ih() {
      return lh
    }
    nh = function(bb) {
      lh = vh(bb.styleDefault, {
        family: qu.familyDefault
      })
    }, Eu.push(nh), Dh();

    function vh(bb) {
      var ub = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        hb = void 0 === ub ? vb : ub,
        Bb = Du[hb][bb];
      if (hb === tb && !bb) return "fad";
      var Ob = zu[hb][bb] || zu[hb][Bb],
        Gb = bb in Oh.styles ? bb : null;
      return Ob || Gb || null
    }

    function th(bb) {
      return bb.sort().filter((function(bb, ub, hb) {
        return hb.indexOf(bb) === ub
      }))
    }
    var Jh = au.concat(bu);

    function eh(bb) {
      var ub = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        hb = void 0 !== ub && ub,
        Bb = null,
        Ob = th(bb.filter((function(bb) {
          return Jh.includes(bb)
        }))),
        Gb = th(bb.filter((function(bb) {
          return !Jh.includes(bb)
        }))),
        Ub = Sb(Ob.filter((function(bb) {
          return Bb = bb, !ib.includes(bb)
        })), 1)[0],
        Lb = void 0 === Ub ? null : Ub,
        ab = function(bb) {
          var ub = vb,
            hb = oh.reduce((function(bb, ub) {
              return bb[ub] = "".concat(qu.cssPrefix, "-").concat(ub), bb
            }), {});
          return Qb.forEach((function(Bb) {
            (bb.includes(hb[Bb]) || bb.some((function(bb) {
              return Ah[Bb].includes(bb)
            }))) && (ub = Bb)
          })), ub
        }(Ob),
        Hb = Yb(Yb({}, function(bb) {
          var ub = [],
            hb = null;
          return bb.forEach((function(bb) {
            var Bb = jh(qu.cssPrefix, bb);
            Bb ? hb = Bb : bb && ub.push(bb)
          })), {
            iconName: hb,
            rest: ub
          }
        }(Gb)), {}, {
          prefix: vh(Lb, {
            family: ab
          })
        });
      return Yb(Yb(Yb({}, Hb), function(bb) {
        var ub = bb.values,
          hb = bb.family,
          Bb = bb.canonical,
          Ob = bb.givenPrefix,
          Gb = void 0 === Ob ? "" : Ob,
          Ub = bb.styles,
          Lb = void 0 === Ub ? {} : Ub,
          Yb = bb.config,
          Sb = void 0 === Yb ? {} : Yb,
          ab = hb === tb,
          Hb = ub.includes("fa-duotone") || ub.includes("fad"),
          wb = "duotone" === Sb.familyDefault,
          Zb = "fad" === Bb.prefix || "fa-duotone" === Bb.prefix;
        !ab && (Hb || wb || Zb) && (Bb.prefix = "fad");
        (ub.includes("fa-brands") || ub.includes("fab")) && (Bb.prefix = "fab");
        if (!Bb.prefix && Nh.includes(hb)) {
          if (Object.keys(Lb).find((function(bb) {
              return sh.includes(bb)
            })) || Sb.autoFetchSvg) {
            var Xb = Rb.get(hb).defaultShortPrefixId;
            Bb.prefix = Xb, Bb.iconName = zh(Bb.prefix, Bb.iconName) || Bb.iconName
          }
        }
        "fa" !== Bb.prefix && "fa" !== Gb || (Bb.prefix = ih() || "fas");
        return Bb
      }({
        values: bb,
        family: ab,
        styles: Xh,
        config: qu,
        canonical: Hb,
        givenPrefix: Bb
      })), function(bb, ub, hb) {
        var Bb = hb.prefix,
          Ob = hb.iconName;
        if (bb || !Bb || !Ob) return {
          prefix: Bb,
          iconName: Ob
        };
        var Gb = "fa" === ub ? gh(Ob) : {},
          Ub = zh(Bb, Ob);
        Ob = Gb.iconName || Ub || Ob, "far" !== (Bb = Gb.prefix || Bb) || Xh.far || !Xh.fas || qu.autoFetchSvg || (Bb = "fas");
        return {
          prefix: Bb,
          iconName: Ob
        }
      }(hb, Bb, Hb))
    }
    var Nh = Qb.filter((function(bb) {
        return bb !== vb || bb !== tb
      })),
      sh = Object.keys(Su).filter((function(bb) {
        return bb !== vb
      })).map((function(bb) {
        return Object.keys(Su[bb])
      })).flat();
    var Mh = function() {
        return function(bb, ub, hb) {
          return ub && Ob(bb.prototype, ub), hb && Ob(bb, hb), Object.defineProperty(bb, "prototype", {
            writable: !1
          }), bb
        }((function bb() {
          ! function(bb, ub) {
            if (!(bb instanceof ub)) throw new TypeError("Cannot call a class as a function")
          }(this, bb), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var bb = this, ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
            var Ob = hb.reduce(this._pullDefinitions, {});
            Object.keys(Ob).forEach((function(ub) {
              bb.definitions[ub] = Yb(Yb({}, bb.definitions[ub] || {}), Ob[ub]), Zh(ub, Ob[ub]);
              var hb = iu[vb][ub];
              hb && Zh(hb, Ob[ub]), Dh()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(bb, ub) {
            var hb = ub.prefix && ub.iconName && ub.icon ? {
              0: ub
            } : ub;
            return Object.keys(hb).map((function(ub) {
              var Bb = hb[ub],
                Ob = Bb.prefix,
                Gb = Bb.iconName,
                Ub = Bb.icon,
                Lb = Ub[2];
              bb[Ob] || (bb[Ob] = {}), Lb.length > 0 && Lb.forEach((function(ub) {
                "string" === typeof ub && (bb[Ob][ub] = Ub)
              })), bb[Ob][Gb] = Ub
            })), bb
          }
        }])
      }(),
      mh = [],
      Ih = {},
      Ph = {},
      qh = Object.keys(Ph);

    function Eh(bb, ub) {
      for (var hb = arguments.length, Bb = new Array(hb > 2 ? hb - 2 : 0), Ob = 2; Ob < hb; Ob++) Bb[Ob - 2] = arguments[Ob];
      return (Ih[bb] || []).forEach((function(bb) {
        ub = bb.apply(null, [ub].concat(Bb))
      })), ub
    }

    function yh(bb) {
      for (var ub = arguments.length, hb = new Array(ub > 1 ? ub - 1 : 0), Bb = 1; Bb < ub; Bb++) hb[Bb - 1] = arguments[Bb];
      (Ih[bb] || []).forEach((function(bb) {
        bb.apply(null, hb)
      }))
    }

    function Vh() {
      var bb = arguments[0],
        ub = Array.prototype.slice.call(arguments, 1);
      return Ph[bb] ? Ph[bb].apply(null, ub) : void 0
    }

    function Fh(bb) {
      "fa" === bb.prefix && (bb.prefix = "fas");
      var ub = bb.iconName,
        hb = bb.prefix || ih();
      if (ub) return ub = zh(hb, ub) || ub, Sh(fh.definitions, hb, ub) || Sh(Oh.styles, hb, ub)
    }
    var fh = new Mh,
      kh = {
        i2svg: function() {
          var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return xb ? (yh("beforeI2svg", bb), Vh("pseudoElements2svg", bb), Vh("i2svg", bb)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var bb, ub = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            hb = ub.autoReplaceSvgRoot;
          !1 === qu.autoReplaceSvg && (qu.autoReplaceSvg = !0), qu.observeMutations = !0, bb = function() {
            ch({
              autoReplaceSvgRoot: hb
            }), yh("watch", ub)
          }, xb && (Lh ? setTimeout(bb, 0) : Gh.push(bb))
        }
      },
      Th = {
        noAuto: function() {
          qu.autoReplaceSvg = !1, qu.observeMutations = !1, yh("noAuto")
        },
        config: qu,
        dom: kh,
        parse: {
          icon: function(bb) {
            if (null === bb) return null;
            if ("object" === wb(bb) && bb.prefix && bb.iconName) return {
              prefix: bb.prefix,
              iconName: zh(bb.prefix, bb.iconName) || bb.iconName
            };
            if (Array.isArray(bb) && 2 === bb.length) {
              var ub = 0 === bb[1].indexOf("fa-") ? bb[1].slice(3) : bb[1],
                hb = vh(bb[0]);
              return {
                prefix: hb,
                iconName: zh(hb, ub) || ub
              }
            }
            if ("string" === typeof bb && (bb.indexOf("".concat(qu.cssPrefix, "-")) > -1 || bb.match(tu))) {
              var Bb = eh(bb.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: Bb.prefix || ih(),
                iconName: zh(Bb.prefix, Bb.iconName) || Bb.iconName
              }
            }
            if ("string" === typeof bb) {
              var Ob = ih();
              return {
                prefix: Ob,
                iconName: zh(Ob, bb) || bb
              }
            }
          }
        },
        library: fh,
        findIconDefinition: Fh,
        toHtml: Yh
      },
      ch = function() {
        var bb = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          ub = void 0 === bb ? jb : bb;
        (Object.keys(Oh.styles).length > 0 || qu.autoFetchSvg) && xb && qu.autoReplaceSvg && Th.dom.i2svg({
          node: ub
        })
      };

    function Qh(bb, ub) {
      return Object.defineProperty(bb, "abstract", {
        get: ub
      }), Object.defineProperty(bb, "html", {
        get: function() {
          return bb.abstract.map((function(bb) {
            return Yh(bb)
          }))
        }
      }), Object.defineProperty(bb, "node", {
        get: function() {
          if (xb) {
            var ub = jb.createElement("div");
            return ub.innerHTML = bb.html, ub.children
          }
        }
      }), bb
    }

    function Rh(bb) {
      var ub = bb.icons,
        hb = ub.main,
        Bb = ub.mask,
        Ob = bb.prefix,
        Gb = bb.iconName,
        Ub = bb.transform,
        Lb = bb.symbol,
        Sb = bb.maskId,
        ab = bb.extra,
        Hb = bb.watchable,
        wb = void 0 !== Hb && Hb,
        Zb = Bb.found ? Bb : hb,
        Xb = Zb.width,
        pb = Zb.height,
        ob = [qu.replacementClass, Gb ? "".concat(qu.cssPrefix, "-").concat(Gb) : ""].filter((function(bb) {
          return -1 === ab.classes.indexOf(bb)
        })).filter((function(bb) {
          return "" !== bb || !!bb
        })).concat(ab.classes).join(" "),
        Ab = {
          children: [],
          attributes: Yb(Yb({}, ab.attributes), {}, {
            "data-prefix": Ob,
            "data-icon": Gb,
            class: ob,
            role: ab.attributes.role || "img",
            viewBox: "0 0 ".concat(Xb, " ").concat(pb)
          })
        };
      (function(bb) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(ub) {
          return ub in bb
        }))
      })(ab.attributes) || ab.attributes["aria-hidden"] || (Ab.attributes["aria-hidden"] = "true"), wb && (Ab.attributes[ou] = "");
      var lb = Yb(Yb({}, Ab), {}, {
          prefix: Ob,
          iconName: Gb,
          main: hb,
          mask: Bb,
          maskId: Sb,
          transform: Ub,
          symbol: Lb,
          styles: Yb({}, ab.styles)
        }),
        Kb = Bb.found && hb.found ? Vh("generateAbstractMask", lb) || {
          children: [],
          attributes: {}
        } : Vh("generateAbstractIcon", lb) || {
          children: [],
          attributes: {}
        },
        Wb = Kb.children,
        Cb = Kb.attributes;
      return lb.children = Wb, lb.attributes = Cb, Lb ? function(bb) {
        var ub = bb.prefix,
          hb = bb.iconName,
          Bb = bb.children,
          Ob = bb.attributes,
          Gb = bb.symbol,
          Ub = !0 === Gb ? "".concat(ub, "-").concat(qu.cssPrefix, "-").concat(hb) : Gb;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: Yb(Yb({}, Ob), {}, {
              id: Ub
            }),
            children: Bb
          }]
        }]
      }(lb) : function(bb) {
        var ub = bb.children,
          hb = bb.main,
          Bb = bb.mask,
          Ob = bb.attributes,
          Gb = bb.styles,
          Ub = bb.transform;
        if (Qu(Ub) && hb.found && !Bb.found) {
          var Lb = {
            x: hb.width / hb.height / 2,
            y: .5
          };
          Ob.style = cu(Yb(Yb({}, Gb), {}, {
            "transform-origin": "".concat(Lb.x + Ub.x / 16, "em ").concat(Lb.y + Ub.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: Ob,
          children: ub
        }]
      }(lb)
    }

    function bB(bb) {
      var ub = bb.content,
        hb = bb.width,
        Bb = bb.height,
        Ob = bb.transform,
        Gb = bb.extra,
        Ub = bb.watchable,
        Lb = void 0 !== Ub && Ub,
        Sb = Yb(Yb({}, Gb.attributes), {}, {
          class: Gb.classes.join(" ")
        });
      Lb && (Sb[ou] = "");
      var ab = Yb({}, Gb.styles);
      Qu(Ob) && (ab.transform = function(bb) {
        var ub = bb.transform,
          hb = bb.width,
          Bb = void 0 === hb ? 16 : hb,
          Ob = bb.height,
          Gb = void 0 === Ob ? 16 : Ob,
          Ub = bb.startCentered,
          Lb = void 0 !== Ub && Ub,
          Yb = "";
        return Yb += Lb && zb ? "translate(".concat(ub.x / yu - Bb / 2, "em, ").concat(ub.y / yu - Gb / 2, "em) ") : Lb ? "translate(calc(-50% + ".concat(ub.x / yu, "em), calc(-50% + ").concat(ub.y / yu, "em)) ") : "translate(".concat(ub.x / yu, "em, ").concat(ub.y / yu, "em) "), Yb += "scale(".concat(ub.size / yu * (ub.flipX ? -1 : 1), ", ").concat(ub.size / yu * (ub.flipY ? -1 : 1), ") "), Yb + "rotate(".concat(ub.rotate, "deg) ")
      }({
        transform: Ob,
        startCentered: !0,
        width: hb,
        height: Bb
      }), ab["-webkit-transform"] = ab.transform);
      var Hb = cu(ab);
      Hb.length > 0 && (Sb.style = Hb);
      var wb = [];
      return wb.push({
        tag: "span",
        attributes: Sb,
        children: [ub]
      }), wb
    }
    var uB = Oh.styles;

    function hB(bb) {
      var ub = bb[0],
        hb = bb[1],
        Bb = Sb(bb.slice(4), 1)[0];
      return {
        found: !0,
        width: ub,
        height: hb,
        icon: Array.isArray(Bb) ? {
          tag: "g",
          attributes: {
            class: "".concat(qu.cssPrefix, "-").concat(su.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(qu.cssPrefix, "-").concat(su.SECONDARY),
              fill: "currentColor",
              d: Bb[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(qu.cssPrefix, "-").concat(su.PRIMARY),
              fill: "currentColor",
              d: Bb[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: Bb
          }
        }
      }
    }
    var BB = {
      found: !1,
      width: 512,
      height: 512
    };

    function OB(bb, ub) {
      var hb = ub;
      return "fa" === ub && null !== qu.styleDefault && (ub = ih()), new Promise((function(Bb, Ob) {
        if ("fa" === hb) {
          var Gb = gh(bb) || {};
          bb = Gb.iconName || bb, ub = Gb.prefix || ub
        }
        if (bb && ub && uB[ub] && uB[ub][bb]) return Bb(hB(uB[ub][bb]));
        ! function(bb, ub) {
          ru || qu.showMissingIcons || !bb || console.error('Icon with name "'.concat(bb, '" and prefix "').concat(ub, '" is missing.'))
        }(bb, ub), Bb(Yb(Yb({}, BB), {}, {
          icon: qu.showMissingIcons && bb && Vh("missingIconAbstract") || {}
        }))
      }))
    }
    var GB = function() {},
      UB = qu.measurePerformance && Db && Db.mark && Db.measure ? Db : {
        mark: GB,
        measure: GB
      },
      LB = 'FA "7.2.0"',
      YB = function(bb) {
        UB.mark("".concat(LB, " ").concat(bb, " ends")), UB.measure("".concat(LB, " ").concat(bb), "".concat(LB, " ").concat(bb, " begins"), "".concat(LB, " ").concat(bb, " ends"))
      },
      SB = function(bb) {
        return UB.mark("".concat(LB, " ").concat(bb, " begins")),
          function() {
            return YB(bb)
          }
      },
      aB = function() {};

    function HB(bb) {
      return "string" === typeof(bb.getAttribute ? bb.getAttribute(ou) : null)
    }

    function wB(bb) {
      return jb.createElementNS("http://www.w3.org/2000/svg", bb)
    }

    function ZB(bb) {
      return jb.createElement(bb)
    }

    function XB(bb) {
      var ub = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        hb = void 0 === ub ? "svg" === bb.tag ? wB : ZB : ub;
      if ("string" === typeof bb) return jb.createTextNode(bb);
      var Bb = hb(bb.tag);
      return Object.keys(bb.attributes || []).forEach((function(ub) {
        Bb.setAttribute(ub, bb.attributes[ub])
      })), (bb.children || []).forEach((function(bb) {
        Bb.appendChild(XB(bb, {
          ceFn: hb
        }))
      })), Bb
    }
    var pB = {
      replace: function(bb) {
        var ub = bb[0];
        if (ub.parentNode)
          if (bb[1].forEach((function(bb) {
              ub.parentNode.insertBefore(XB(bb), ub)
            })), null === ub.getAttribute(ou) && qu.keepOriginalSource) {
            var hb = jb.createComment(function(bb) {
              var ub = " ".concat(bb.outerHTML, " ");
              return "".concat(ub, "Font Awesome fontawesome.com ")
            }(ub));
            ub.parentNode.replaceChild(hb, ub)
          } else ub.remove()
      },
      nest: function(bb) {
        var ub = bb[0],
          hb = bb[1];
        if (~ku(ub).indexOf(qu.replacementClass)) return pB.replace(bb);
        var Bb = new RegExp("".concat(qu.cssPrefix, "-.*"));
        if (delete hb[0].attributes.id, hb[0].attributes.class) {
          var Ob = hb[0].attributes.class.split(" ").reduce((function(bb, ub) {
            return ub === qu.replacementClass || ub.match(Bb) ? bb.toSvg.push(ub) : bb.toNode.push(ub), bb
          }), {
            toNode: [],
            toSvg: []
          });
          hb[0].attributes.class = Ob.toSvg.join(" "), 0 === Ob.toNode.length ? ub.removeAttribute("class") : ub.setAttribute("class", Ob.toNode.join(" "))
        }
        var Gb = hb.map((function(bb) {
          return Yh(bb)
        })).join("\n");
        ub.setAttribute(ou, ""), ub.innerHTML = Gb
      }
    };

    function oB(bb) {
      bb()
    }

    function AB(bb, ub) {
      var hb = "function" === typeof ub ? ub : aB;
      if (0 === bb.length) hb();
      else {
        var Bb = oB;
        "async" === qu.mutateApproach && (Bb = rb.requestAnimationFrame || oB), Bb((function() {
          var ub = !0 === qu.autoReplaceSvg ? pB.replace : pB[qu.autoReplaceSvg] || pB.replace,
            Bb = SB("mutate");
          bb.map(ub), Bb(), hb()
        }))
      }
    }
    var lB = !1;

    function KB() {
      lB = !0
    }

    function WB() {
      lB = !1
    }
    var CB = null;

    function dB(bb) {
      if (nb && qu.observeMutations) {
        var ub = bb.treeCallback,
          hb = void 0 === ub ? aB : ub,
          Bb = bb.nodeCallback,
          Ob = void 0 === Bb ? aB : Bb,
          Gb = bb.pseudoElementsCallback,
          Ub = void 0 === Gb ? aB : Gb,
          Lb = bb.observeMutationsRoot,
          Yb = void 0 === Lb ? jb : Lb;
        CB = new nb((function(bb) {
          if (!lB) {
            var ub = ih();
            fu(bb).forEach((function(bb) {
              if ("childList" === bb.type && bb.addedNodes.length > 0 && !HB(bb.addedNodes[0]) && (qu.searchPseudoElements && Ub(bb.target), hb(bb.target)), "attributes" === bb.type && bb.target.parentNode && qu.searchPseudoElements && Ub([bb.target], !0), "attributes" === bb.type && HB(bb.target) && ~Nu.indexOf(bb.attributeName))
                if ("class" === bb.attributeName && function(bb) {
                    var ub = bb.getAttribute ? bb.getAttribute(lu) : null,
                      hb = bb.getAttribute ? bb.getAttribute(Ku) : null;
                    return ub && hb
                  }(bb.target)) {
                  var Bb = eh(ku(bb.target)),
                    Gb = Bb.prefix,
                    Lb = Bb.iconName;
                  bb.target.setAttribute(lu, Gb || ub), Lb && bb.target.setAttribute(Ku, Lb)
                } else(Yb = bb.target) && Yb.classList && Yb.classList.contains && Yb.classList.contains(qu.replacementClass) && Ob(bb.target);
              var Yb
            }))
          }
        })), xb && CB.observe(Yb, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function rB(bb) {
      var ub, hb, Bb = bb.getAttribute("data-prefix"),
        Ob = bb.getAttribute("data-icon"),
        Gb = void 0 !== bb.innerText ? bb.innerText.trim() : "",
        Ub = eh(ku(bb));
      return Ub.prefix || (Ub.prefix = ih()), Bb && Ob && (Ub.prefix = Bb, Ub.iconName = Ob), Ub.iconName && Ub.prefix || (Ub.prefix && Gb.length > 0 && (Ub.iconName = (ub = Ub.prefix, hb = bb.innerText, (Wh[ub] || {})[hb] || xh(Ub.prefix, Hh(bb.innerText)))), !Ub.iconName && qu.autoFetchSvg && bb.firstChild && bb.firstChild.nodeType === Node.TEXT_NODE && (Ub.iconName = bb.firstChild.data)), Ub
    }

    function jB(bb) {
      var ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        hb = rB(bb),
        Bb = hb.iconName,
        Ob = hb.prefix,
        Gb = hb.rest,
        Ub = function(bb) {
          return fu(bb.attributes).reduce((function(bb, ub) {
            return "class" !== bb.name && "style" !== bb.name && (bb[ub.name] = ub.value), bb
          }), {})
        }(bb),
        Lb = Eh("parseNodeAttributes", {}, bb),
        Sb = ub.styleParser ? function(bb) {
          var ub = bb.getAttribute("style"),
            hb = [];
          return ub && (hb = ub.split(";").reduce((function(bb, ub) {
            var hb = ub.split(":"),
              Bb = hb[0],
              Ob = hb.slice(1);
            return Bb && Ob.length > 0 && (bb[Bb] = Ob.join(":").trim()), bb
          }), {})), hb
        }(bb) : [];
      return Yb({
        iconName: Bb,
        prefix: Ob,
        transform: Vu,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: Gb,
          styles: Sb,
          attributes: Ub
        }
      }, Lb)
    }
    var nB = Oh.styles;

    function DB(bb) {
      var ub = "nest" === qu.autoReplaceSvg ? jB(bb, {
        styleParser: !1
      }) : jB(bb);
      return ~ub.extra.classes.indexOf(Ju) ? Vh("generateLayersText", bb, ub) : Vh("generateSvgReplacementMutation", bb, ub)
    }

    function xB(bb) {
      var ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!xb) return Promise.resolve();
      var hb = jb.documentElement.classList,
        Bb = function(bb) {
          return hb.add("".concat(Wu, "-").concat(bb))
        },
        Ob = function(bb) {
          return hb.remove("".concat(Wu, "-").concat(bb))
        },
        Gb = qu.autoFetchSvg ? [].concat(ab(bu), ab(au)) : ib.concat(Object.keys(nB));
      Gb.includes("fa") || Gb.push("fa");
      var Ub = [".".concat(Ju, ":not([").concat(ou, "])")].concat(Gb.map((function(bb) {
        return ".".concat(bb, ":not([").concat(ou, "])")
      }))).join(", ");
      if (0 === Ub.length) return Promise.resolve();
      var Lb = [];
      try {
        Lb = fu(bb.querySelectorAll(Ub))
      } catch (Hb) {}
      if (!(Lb.length > 0)) return Promise.resolve();
      Bb("pending"), Ob("complete");
      var Yb = SB("onTree"),
        Sb = Lb.reduce((function(bb, ub) {
          try {
            var hb = DB(ub);
            hb && bb.push(hb)
          } catch (Hb) {
            ru || "MissingIcon" === Hb.name && console.error(Hb)
          }
          return bb
        }), []);
      return new Promise((function(bb, hb) {
        Promise.all(Sb).then((function(hb) {
          AB(hb, (function() {
            Bb("active"), Bb("complete"), Ob("pending"), "function" === typeof ub && ub(), Yb(), bb()
          }))
        })).catch((function(bb) {
          Yb(), hb(bb)
        }))
      }))
    }

    function zB(bb) {
      var ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      DB(bb).then((function(bb) {
        bb && AB([bb], ub)
      }))
    }
    var gB = function(bb) {
        var ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          hb = ub.transform,
          Bb = void 0 === hb ? Vu : hb,
          Ob = ub.symbol,
          Gb = void 0 !== Ob && Ob,
          Ub = ub.mask,
          Lb = void 0 === Ub ? null : Ub,
          Sb = ub.maskId,
          ab = void 0 === Sb ? null : Sb,
          Hb = ub.classes,
          wb = void 0 === Hb ? [] : Hb,
          Zb = ub.attributes,
          Xb = void 0 === Zb ? {} : Zb,
          pb = ub.styles,
          ob = void 0 === pb ? {} : pb;
        if (bb) {
          var Ab = bb.prefix,
            lb = bb.iconName,
            Kb = bb.icon;
          return Qh(Yb({
            type: "icon"
          }, bb), (function() {
            return yh("beforeDOMElementCreation", {
              iconDefinition: bb,
              params: ub
            }), Rh({
              icons: {
                main: hB(Kb),
                mask: Lb ? hB(Lb.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: Ab,
              iconName: lb,
              transform: Yb(Yb({}, Vu), Bb),
              symbol: Gb,
              maskId: ab,
              extra: {
                attributes: Xb,
                styles: ob,
                classes: wb
              }
            })
          }))
        }
      },
      iB = {
        mixout: function() {
          return {
            icon: (bb = gB, function(ub) {
              var hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Bb = (ub || {}).icon ? ub : Fh(ub || {}),
                Ob = hb.mask;
              return Ob && (Ob = (Ob || {}).icon ? Ob : Fh(Ob || {})), bb(Bb, Yb(Yb({}, hb), {}, {
                mask: Ob
              }))
            })
          };
          var bb
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(bb) {
              return bb.treeCallback = xB, bb.nodeCallback = zB, bb
            }
          }
        },
        provides: function(bb) {
          bb.i2svg = function(bb) {
            var ub = bb.node,
              hb = void 0 === ub ? jb : ub,
              Bb = bb.callback;
            return xB(hb, void 0 === Bb ? function() {} : Bb)
          }, bb.generateSvgReplacementMutation = function(bb, ub) {
            var hb = ub.iconName,
              Bb = ub.prefix,
              Ob = ub.transform,
              Gb = ub.symbol,
              Ub = ub.mask,
              Lb = ub.maskId,
              Yb = ub.extra;
            return new Promise((function(ub, ab) {
              Promise.all([OB(hb, Bb), Ub.iconName ? OB(Ub.iconName, Ub.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(Ub) {
                var ab = Sb(Ub, 2),
                  Hb = ab[0],
                  wb = ab[1];
                ub([bb, Rh({
                  icons: {
                    main: Hb,
                    mask: wb
                  },
                  prefix: Bb,
                  iconName: hb,
                  transform: Ob,
                  symbol: Gb,
                  maskId: Lb,
                  extra: Yb,
                  watchable: !0
                })])
              })).catch(ab)
            }))
          }, bb.generateAbstractIcon = function(bb) {
            var ub, hb = bb.children,
              Bb = bb.attributes,
              Ob = bb.main,
              Gb = bb.transform,
              Ub = cu(bb.styles);
            return Ub.length > 0 && (Bb.style = Ub), Qu(Gb) && (ub = Vh("generateAbstractTransformGrouping", {
              main: Ob,
              transform: Gb,
              containerWidth: Ob.width,
              iconWidth: Ob.width
            })), hb.push(ub || Ob.icon), {
              children: hb,
              attributes: Bb
            }
          }
        }
      },
      vB = {
        mixout: function() {
          return {
            layer: function(bb) {
              var ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                hb = ub.classes,
                Bb = void 0 === hb ? [] : hb;
              return Qh({
                type: "layer"
              }, (function() {
                yh("beforeDOMElementCreation", {
                  assembler: bb,
                  params: ub
                });
                var hb = [];
                return bb((function(bb) {
                  Array.isArray(bb) ? bb.map((function(bb) {
                    hb = hb.concat(bb.abstract)
                  })) : hb = hb.concat(bb.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(qu.cssPrefix, "-layers")].concat(ab(Bb)).join(" ")
                  },
                  children: hb
                }]
              }))
            }
          }
        }
      },
      tB = {
        mixout: function() {
          return {
            counter: function(bb) {
              var ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                hb = ub.title,
                Bb = void 0 === hb ? null : hb,
                Ob = ub.classes,
                Gb = void 0 === Ob ? [] : Ob,
                Ub = ub.attributes,
                Lb = void 0 === Ub ? {} : Ub,
                Sb = ub.styles,
                Hb = void 0 === Sb ? {} : Sb;
              return Qh({
                type: "counter",
                content: bb
              }, (function() {
                return yh("beforeDOMElementCreation", {
                    content: bb,
                    params: ub
                  }),
                  function(bb) {
                    var ub = bb.content,
                      hb = bb.extra,
                      Bb = Yb(Yb({}, hb.attributes), {}, {
                        class: hb.classes.join(" ")
                      }),
                      Ob = cu(hb.styles);
                    Ob.length > 0 && (Bb.style = Ob);
                    var Gb = [];
                    return Gb.push({
                      tag: "span",
                      attributes: Bb,
                      children: [ub]
                    }), Gb
                  }({
                    content: bb.toString(),
                    title: Bb,
                    extra: {
                      attributes: Lb,
                      styles: Hb,
                      classes: ["".concat(qu.cssPrefix, "-layers-counter")].concat(ab(Gb))
                    }
                  })
              }))
            }
          }
        }
      },
      JB = {
        mixout: function() {
          return {
            text: function(bb) {
              var ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                hb = ub.transform,
                Bb = void 0 === hb ? Vu : hb,
                Ob = ub.classes,
                Gb = void 0 === Ob ? [] : Ob,
                Ub = ub.attributes,
                Lb = void 0 === Ub ? {} : Ub,
                Sb = ub.styles,
                Hb = void 0 === Sb ? {} : Sb;
              return Qh({
                type: "text",
                content: bb
              }, (function() {
                return yh("beforeDOMElementCreation", {
                  content: bb,
                  params: ub
                }), bB({
                  content: bb,
                  transform: Yb(Yb({}, Vu), Bb),
                  extra: {
                    attributes: Lb,
                    styles: Hb,
                    classes: ["".concat(qu.cssPrefix, "-layers-text")].concat(ab(Gb))
                  }
                })
              }))
            }
          }
        },
        provides: function(bb) {
          bb.generateLayersText = function(bb, ub) {
            var hb = ub.transform,
              Bb = ub.extra,
              Ob = null,
              Gb = null;
            if (zb) {
              var Ub = parseInt(getComputedStyle(bb).fontSize, 10),
                Lb = bb.getBoundingClientRect();
              Ob = Lb.width / Ub, Gb = Lb.height / Ub
            }
            return Promise.resolve([bb, bB({
              content: bb.innerHTML,
              width: Ob,
              height: Gb,
              transform: hb,
              extra: Bb,
              watchable: !0
            })])
          }
        }
      },
      eB = new RegExp('"', "ug"),
      NB = [1105920, 1112319],
      sB = Yb(Yb(Yb(Yb({}, {
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
      MB = Object.keys(sB).reduce((function(bb, ub) {
        return bb[ub.toLowerCase()] = sB[ub], bb
      }), {}),
      mB = Object.keys(MB).reduce((function(bb, ub) {
        var hb = MB[ub];
        return bb[ub] = hb[900] || ab(Object.entries(hb))[0][1], bb
      }), {});

    function IB(bb, ub) {
      var hb = "".concat("data-fa-pseudo-element-pending").concat(ub.replace(":", "-"));
      return new Promise((function(Bb, Ob) {
        if (null !== bb.getAttribute(hb)) return Bb();
        var Gb = fu(bb.children).filter((function(bb) {
            return bb.getAttribute(Au) === ub
          }))[0],
          Ub = rb.getComputedStyle(bb, ub),
          Lb = Ub.getPropertyValue("font-family"),
          Sb = Lb.match(eu),
          Hb = Ub.getPropertyValue("font-weight"),
          wb = Ub.getPropertyValue("content");
        if (Gb && !Sb) return bb.removeChild(Gb), Bb();
        if (Sb && "none" !== wb && "" !== wb) {
          var Zb = Ub.getPropertyValue("content"),
            Xb = function(bb, ub) {
              var hb = bb.replace(/^['"]|['"]$/g, "").toLowerCase(),
                Bb = parseInt(ub),
                Ob = isNaN(Bb) ? "normal" : Bb;
              return (MB[hb] || {})[Ob] || mB[hb]
            }(Lb, Hb),
            pb = function(bb) {
              return Hh(ab(bb.replace(eB, ""))[0] || "")
            }(Zb),
            ob = Sb[0].startsWith("FontAwesome"),
            Ab = function(bb) {
              var ub = bb.getPropertyValue("font-feature-settings").includes("ss01"),
                hb = bb.getPropertyValue("content").replace(eB, ""),
                Bb = hb.codePointAt(0),
                Ob = Bb >= NB[0] && Bb <= NB[1],
                Gb = 2 === hb.length && hb[0] === hb[1];
              return Ob || Gb || ub
            }(Ub),
            lb = xh(Xb, pb),
            Kb = lb;
          if (ob) {
            var Wb = function(bb) {
              var ub = dh[bb],
                hb = xh("fas", bb);
              return ub || (hb ? {
                prefix: "fas",
                iconName: hb
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(pb);
            Wb.iconName && Wb.prefix && (lb = Wb.iconName, Xb = Wb.prefix)
          }
          if (!lb || Ab || Gb && Gb.getAttribute(lu) === Xb && Gb.getAttribute(Ku) === Kb) Bb();
          else {
            bb.setAttribute(hb, Kb), Gb && bb.removeChild(Gb);
            var Cb = {
                iconName: null,
                prefix: null,
                transform: Vu,
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
              db = Cb.extra;
            db.attributes[Au] = ub, OB(lb, Xb).then((function(Ob) {
              var Gb = Rh(Yb(Yb({}, Cb), {}, {
                  icons: {
                    main: Ob,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: Xb,
                  iconName: Kb,
                  extra: db,
                  watchable: !0
                })),
                Ub = jb.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === ub ? bb.insertBefore(Ub, bb.firstChild) : bb.appendChild(Ub), Ub.outerHTML = Gb.map((function(bb) {
                return Yh(bb)
              })).join("\n"), bb.removeAttribute(hb), Bb()
            })).catch(Ob)
          }
        } else Bb()
      }))
    }

    function PB(bb) {
      return Promise.all([IB(bb, "::before"), IB(bb, "::after")])
    }

    function qB(bb) {
      return bb.parentNode !== document.head && !~Cu.indexOf(bb.tagName.toUpperCase()) && !bb.getAttribute(Au) && (!bb.parentNode || "svg" !== bb.parentNode.tagName)
    }
    var EB = function(bb) {
        return !!bb && du.some((function(ub) {
          return bb.includes(ub)
        }))
      },
      yB = function(bb) {
        if (!bb) return [];
        var ub = new Set,
          hb = bb.split(/,(?![^()]*\))/).map((function(bb) {
            return bb.trim()
          }));
        hb = hb.flatMap((function(bb) {
          return bb.includes("(") ? bb : bb.split(",").map((function(bb) {
            return bb.trim()
          }))
        }));
        var Bb, Ob = Gb(hb);
        try {
          for (Ob.s(); !(Bb = Ob.n()).done;) {
            var Ub = Bb.value;
            if (EB(Ub)) {
              var Lb = du.reduce((function(bb, ub) {
                return bb.replace(ub, "")
              }), Ub);
              "" !== Lb && "*" !== Lb && ub.add(Lb)
            }
          }
        } catch (Yb) {
          Ob.e(Yb)
        } finally {
          Ob.f()
        }
        return ub
      };

    function VB(bb) {
      if (xb) {
        var ub;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) ub = bb;
        else if (qu.searchPseudoElementsFullScan) ub = bb.querySelectorAll("*");
        else {
          var hb, Bb = new Set,
            Ob = Gb(document.styleSheets);
          try {
            for (Ob.s(); !(hb = Ob.n()).done;) {
              var Ub = hb.value;
              try {
                var Lb, Yb = Gb(Ub.cssRules);
                try {
                  for (Yb.s(); !(Lb = Yb.n()).done;) {
                    var Sb, ab = Lb.value,
                      Hb = Gb(yB(ab.selectorText));
                    try {
                      for (Hb.s(); !(Sb = Hb.n()).done;) {
                        var wb = Sb.value;
                        Bb.add(wb)
                      }
                    } catch (Xb) {
                      Hb.e(Xb)
                    } finally {
                      Hb.f()
                    }
                  }
                } catch (Xb) {
                  Yb.e(Xb)
                } finally {
                  Yb.f()
                }
              } catch (pb) {
                qu.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(Ub.href, " (").concat(pb.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (Xb) {
            Ob.e(Xb)
          } finally {
            Ob.f()
          }
          if (!Bb.size) return;
          var Zb = Array.from(Bb).join(", ");
          try {
            ub = bb.querySelectorAll(Zb)
          } catch (ob) {}
        }
        return new Promise((function(bb, hb) {
          var Bb = fu(ub).filter(qB).map(PB),
            Ob = SB("searchPseudoElements");
          KB(), Promise.all(Bb).then((function() {
            Ob(), WB(), bb()
          })).catch((function() {
            Ob(), WB(), hb()
          }))
        }))
      }
    }
    var FB = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(bb) {
              return bb.pseudoElementsCallback = VB, bb
            }
          }
        },
        provides: function(bb) {
          bb.pseudoElements2svg = function(bb) {
            var ub = bb.node,
              hb = void 0 === ub ? jb : ub;
            qu.searchPseudoElements && VB(hb)
          }
        }
      },
      fB = !1,
      kB = function(bb) {
        return bb.toLowerCase().split(" ").reduce((function(bb, ub) {
          var hb = ub.toLowerCase().split("-"),
            Bb = hb[0],
            Ob = hb.slice(1).join("-");
          if (Bb && "h" === Ob) return bb.flipX = !0, bb;
          if (Bb && "v" === Ob) return bb.flipY = !0, bb;
          if (Ob = parseFloat(Ob), isNaN(Ob)) return bb;
          switch (Bb) {
            case "grow":
              bb.size = bb.size + Ob;
              break;
            case "shrink":
              bb.size = bb.size - Ob;
              break;
            case "left":
              bb.x = bb.x - Ob;
              break;
            case "right":
              bb.x = bb.x + Ob;
              break;
            case "up":
              bb.y = bb.y - Ob;
              break;
            case "down":
              bb.y = bb.y + Ob;
              break;
            case "rotate":
              bb.rotate = bb.rotate + Ob
          }
          return bb
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      TB = {
        mixout: function() {
          return {
            parse: {
              transform: function(bb) {
                return kB(bb)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(bb, ub) {
              var hb = ub.getAttribute("data-fa-transform");
              return hb && (bb.transform = kB(hb)), bb
            }
          }
        },
        provides: function(bb) {
          bb.generateAbstractTransformGrouping = function(bb) {
            var ub = bb.main,
              hb = bb.transform,
              Bb = bb.containerWidth,
              Ob = bb.iconWidth,
              Gb = {
                transform: "translate(".concat(Bb / 2, " 256)")
              },
              Ub = "translate(".concat(32 * hb.x, ", ").concat(32 * hb.y, ") "),
              Lb = "scale(".concat(hb.size / 16 * (hb.flipX ? -1 : 1), ", ").concat(hb.size / 16 * (hb.flipY ? -1 : 1), ") "),
              Sb = "rotate(".concat(hb.rotate, " 0 0)"),
              ab = {
                outer: Gb,
                inner: {
                  transform: "".concat(Ub, " ").concat(Lb, " ").concat(Sb)
                },
                path: {
                  transform: "translate(".concat(Ob / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: Yb({}, ab.outer),
              children: [{
                tag: "g",
                attributes: Yb({}, ab.inner),
                children: [{
                  tag: ub.icon.tag,
                  children: ub.icon.children,
                  attributes: Yb(Yb({}, ub.icon.attributes), ab.path)
                }]
              }]
            }
          }
        }
      },
      cB = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function QB(bb) {
      var ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return bb.attributes && (bb.attributes.fill || ub) && (bb.attributes.fill = "black"), bb
    }
    var RB = {
        hooks: function() {
          return {
            parseNodeAttributes: function(bb, ub) {
              var hb = ub.getAttribute("data-fa-mask"),
                Bb = hb ? eh(hb.split(" ").map((function(bb) {
                  return bb.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return Bb.prefix || (Bb.prefix = ih()), bb.mask = Bb, bb.maskId = ub.getAttribute("data-fa-mask-id"), bb
            }
          }
        },
        provides: function(bb) {
          bb.generateAbstractMask = function(bb) {
            var ub, hb = bb.children,
              Bb = bb.attributes,
              Ob = bb.main,
              Gb = bb.mask,
              Ub = bb.maskId,
              Lb = bb.transform,
              Sb = Ob.width,
              ab = Ob.icon,
              Hb = Gb.width,
              wb = Gb.icon,
              Zb = function(bb) {
                var ub = bb.transform,
                  hb = bb.containerWidth,
                  Bb = bb.iconWidth,
                  Ob = {
                    transform: "translate(".concat(hb / 2, " 256)")
                  },
                  Gb = "translate(".concat(32 * ub.x, ", ").concat(32 * ub.y, ") "),
                  Ub = "scale(".concat(ub.size / 16 * (ub.flipX ? -1 : 1), ", ").concat(ub.size / 16 * (ub.flipY ? -1 : 1), ") "),
                  Lb = "rotate(".concat(ub.rotate, " 0 0)");
                return {
                  outer: Ob,
                  inner: {
                    transform: "".concat(Gb, " ").concat(Ub, " ").concat(Lb)
                  },
                  path: {
                    transform: "translate(".concat(Bb / 2 * -1, " -256)")
                  }
                }
              }({
                transform: Lb,
                containerWidth: Hb,
                iconWidth: Sb
              }),
              Xb = {
                tag: "rect",
                attributes: Yb(Yb({}, cB), {}, {
                  fill: "white"
                })
              },
              pb = ab.children ? {
                children: ab.children.map(QB)
              } : {},
              ob = {
                tag: "g",
                attributes: Yb({}, Zb.inner),
                children: [QB(Yb({
                  tag: ab.tag,
                  attributes: Yb(Yb({}, ab.attributes), Zb.path)
                }, pb))]
              },
              Ab = {
                tag: "g",
                attributes: Yb({}, Zb.outer),
                children: [ob]
              },
              lb = "mask-".concat(Ub || Fu()),
              Kb = "clip-".concat(Ub || Fu()),
              Wb = {
                tag: "mask",
                attributes: Yb(Yb({}, cB), {}, {
                  id: lb,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [Xb, Ab]
              },
              Cb = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: Kb
                  },
                  children: (ub = wb, "g" === ub.tag ? ub.children : [ub])
                }, Wb]
              };
            return hb.push(Cb, {
              tag: "rect",
              attributes: Yb({
                fill: "currentColor",
                "clip-path": "url(#".concat(Kb, ")"),
                mask: "url(#".concat(lb, ")")
              }, cB)
            }), {
              children: hb,
              attributes: Bb
            }
          }
        }
      },
      bO = {
        provides: function(bb) {
          var ub = !1;
          rb.matchMedia && (ub = rb.matchMedia("(prefers-reduced-motion: reduce)").matches), bb.missingIconAbstract = function() {
            var bb = [],
              hb = {
                fill: "currentColor"
              },
              Bb = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            bb.push({
              tag: "path",
              attributes: Yb(Yb({}, hb), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var Ob = Yb(Yb({}, Bb), {}, {
                attributeName: "opacity"
              }),
              Gb = {
                tag: "circle",
                attributes: Yb(Yb({}, hb), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return ub || Gb.children.push({
              tag: "animate",
              attributes: Yb(Yb({}, Bb), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: Yb(Yb({}, Ob), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), bb.push(Gb), bb.push({
              tag: "path",
              attributes: Yb(Yb({}, hb), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: ub ? [] : [{
                tag: "animate",
                attributes: Yb(Yb({}, Ob), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), ub || bb.push({
              tag: "path",
              attributes: Yb(Yb({}, hb), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: Yb(Yb({}, Ob), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: bb
            }
          }
        }
      };
    ! function(bb, ub) {
      var hb = ub.mixoutsTo;
      mh = bb, Ih = {}, Object.keys(Ph).forEach((function(bb) {
        -1 === qh.indexOf(bb) && delete Ph[bb]
      })), mh.forEach((function(bb) {
        var ub = bb.mixout ? bb.mixout() : {};
        if (Object.keys(ub).forEach((function(bb) {
            "function" === typeof ub[bb] && (hb[bb] = ub[bb]), "object" === wb(ub[bb]) && Object.keys(ub[bb]).forEach((function(Bb) {
              hb[bb] || (hb[bb] = {}), hb[bb][Bb] = ub[bb][Bb]
            }))
          })), bb.hooks) {
          var Bb = bb.hooks();
          Object.keys(Bb).forEach((function(bb) {
            Ih[bb] || (Ih[bb] = []), Ih[bb].push(Bb[bb])
          }))
        }
        bb.provides && bb.provides(Ph)
      }))
    }([hh, iB, vB, tB, JB, FB, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              KB(), fB = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            dB(Eh("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            CB && CB.disconnect()
          },
          watch: function(bb) {
            var ub = bb.observeMutationsRoot;
            fB ? WB() : dB(Eh("mutationObserverCallbacks", {
              observeMutationsRoot: ub
            }))
          }
        }
      }
    }, TB, RB, bO, {
      hooks: function() {
        return {
          parseNodeAttributes: function(bb, ub) {
            var hb = ub.getAttribute("data-fa-symbol"),
              Bb = null !== hb && ("" === hb || hb);
            return bb.symbol = Bb, bb
          }
        }
      }
    }], {
      mixoutsTo: Th
    });
    var uO = Th.noAuto,
      hO = Th.config,
      BO = Th.library,
      OO = Th.dom,
      GO = Th.parse,
      UO = Th.findIconDefinition,
      LO = Th.toHtml,
      YO = Th.icon,
      SO = Th.layer,
      aO = Th.text,
      HO = Th.counter
  },
  6426: bb => {
    bb.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);