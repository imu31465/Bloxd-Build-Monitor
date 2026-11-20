/*! For license information please see teusab.fa-renderer.dd1a15d3.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6320: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      FontAwesomeIcon: () => mb
    });
    var Ab = Ub(6312),
      Mb = Ub(4642),
      Tb = Ub.n(Mb),
      Eb = Ub(52);

    function Yb(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function Bb(bb, ab, Ub) {
      return (ab = function(bb) {
        var ab = function(bb, ab) {
          if ("object" != typeof bb || !bb) return bb;
          var Ub = bb[Symbol.toPrimitive];
          if (void 0 !== Ub) {
            var Ab = Ub.call(bb, ab || "default");
            if ("object" != typeof Ab) return Ab;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ab ? String : Number)(bb)
        }(bb, "string");
        return "symbol" == typeof ab ? ab : ab + ""
      }(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function eb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function vb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? eb(Object(Ub), !0).forEach((function(ab) {
          Bb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : eb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Lb(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        var Ub = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != Ub) {
          var Ab, Mb, Tb, Eb, Yb = [],
            Bb = !0,
            eb = !1;
          try {
            if (Tb = (Ub = Ub.call(bb)).next, 0 === ab) {
              if (Object(Ub) !== Ub) return;
              Bb = !1
            } else
              for (; !(Bb = (Ab = Tb.call(Ub)).done) && (Yb.push(Ab.value), Yb.length !== ab); Bb = !0);
          } catch (bb) {
            eb = !0, Mb = bb
          } finally {
            try {
              if (!Bb && null != Ub.return && (Eb = Ub.return(), Object(Eb) !== Eb)) return
            } finally {
              if (eb) throw Mb
            }
          }
          return Yb
        }
      }(bb, ab) || jb(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Pb(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return Yb(bb)
      }(bb) || function(bb) {
        if ("undefined" != typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || jb(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Xb(bb) {
      return Xb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Xb(bb)
    }

    function jb(bb, ab) {
      if (bb) {
        if ("string" == typeof bb) return Yb(bb, ab);
        var Ub = {}.toString.call(bb).slice(8, -1);
        return "Object" === Ub && bb.constructor && (Ub = bb.constructor.name), "Map" === Ub || "Set" === Ub ? Array.from(bb) : "Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub) ? Yb(bb, ab) : void 0
      }
    }
    var Rb;
    try {
      var kb = Ub(6326);
      Rb = kb.version
    } catch (Nb) {
      Rb = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function yb(bb) {
      var ab = bb.beat,
        Ub = bb.fade,
        Ab = bb.beatFade,
        Mb = bb.bounce,
        Tb = bb.shake,
        Eb = bb.flash,
        Yb = bb.spin,
        eb = bb.spinPulse,
        vb = bb.spinReverse,
        Pb = bb.pulse,
        Xb = bb.fixedWidth,
        jb = bb.inverse,
        kb = bb.border,
        yb = bb.listItem,
        Zb = bb.flip,
        Db = bb.size,
        zb = bb.rotation,
        xb = bb.pull,
        ib = bb.swapOpacity,
        fb = bb.rotateBy,
        mb = bb.widthAuto,
        pb = function(bb, ab) {
          for (var Ub = Lb(bb.split("-"), 2), Ab = Ub[0], Mb = Ub[1], Tb = Lb(ab.split("-"), 2), Eb = Tb[0], Yb = Tb[1], Bb = Ab.split("."), eb = Eb.split("."), vb = 0; vb < Math.max(Bb.length, eb.length); vb++) {
            var Pb = Bb[vb] || "0",
              Xb = eb[vb] || "0",
              jb = parseInt(Pb, 10),
              Rb = parseInt(Xb, 10);
            if (jb !== Rb) return jb > Rb
          }
          for (var kb = 0; kb < Math.max(Bb.length, eb.length); kb++) {
            var yb = Bb[kb] || "0",
              Zb = eb[kb] || "0";
            if (yb !== Zb && yb.length !== Zb.length) return yb.length < Zb.length
          }
          return !(Mb && !Yb)
        }(Rb, "7.0.0"),
        Nb = Bb(Bb(Bb(Bb(Bb(Bb({
          "fa-beat": ab,
          "fa-fade": Ub,
          "fa-beat-fade": Ab,
          "fa-bounce": Mb,
          "fa-shake": Tb,
          "fa-flash": Eb,
          "fa-spin": Yb,
          "fa-spin-reverse": vb,
          "fa-spin-pulse": eb,
          "fa-pulse": Pb,
          "fa-fw": Xb,
          "fa-inverse": jb,
          "fa-border": kb,
          "fa-li": yb,
          "fa-flip": !0 === Zb,
          "fa-flip-horizontal": "horizontal" === Zb || "both" === Zb,
          "fa-flip-vertical": "vertical" === Zb || "both" === Zb
        }, "fa-".concat(Db), "undefined" !== typeof Db && null !== Db), "fa-rotate-".concat(zb), "undefined" !== typeof zb && null !== zb && 0 !== zb), "fa-pull-".concat(xb), "undefined" !== typeof xb && null !== xb), "fa-swap-opacity", ib), "fa-rotate-by", pb && fb), "fa-width-auto", pb && mb);
      return Object.keys(Nb).map((function(bb) {
        return Nb[bb] ? bb : null
      })).filter((function(bb) {
        return bb
      }))
    }

    function Zb(bb) {
      return ab = bb, (ab -= 0) === ab ? bb : (bb = bb.replace(/[\-_\s]+(.)?/g, (function(bb, ab) {
        return ab ? ab.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + bb.substr(1);
      var ab
    }
    var Db = ["style"];
    var zb = !1;
    try {
      zb = !0
    } catch (Nb) {}

    function xb(bb) {
      return bb && "object" === Xb(bb) && bb.prefix && bb.iconName && bb.icon ? bb : Ab.parse.icon ? Ab.parse.icon(bb) : null === bb ? null : bb && "object" === Xb(bb) && bb.prefix && bb.iconName ? bb : Array.isArray(bb) && 2 === bb.length ? {
        prefix: bb[0],
        iconName: bb[1]
      } : "string" === typeof bb ? {
        prefix: "fas",
        iconName: bb
      } : void 0
    }

    function ib(bb, ab) {
      return Array.isArray(ab) && ab.length > 0 || !Array.isArray(ab) && ab ? Bb({}, bb, ab) : {}
    }
    var fb = {
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
      mb = Eb.forwardRef((function(bb, ab) {
        var Ub = vb(vb({}, fb), bb),
          Mb = Ub.icon,
          Tb = Ub.mask,
          Eb = Ub.symbol,
          Yb = Ub.className,
          Bb = Ub.title,
          eb = Ub.titleId,
          Lb = Ub.maskId,
          Xb = xb(Mb),
          jb = ib("classes", [].concat(Pb(yb(Ub)), Pb((Yb || "").split(" ")))),
          Rb = ib("transform", "string" === typeof Ub.transform ? Ab.parse.transform(Ub.transform) : Ub.transform),
          kb = ib("mask", xb(Tb)),
          Zb = (0, Ab.icon)(Xb, vb(vb(vb(vb({}, jb), Rb), kb), {}, {
            symbol: Eb,
            title: Bb,
            titleId: eb,
            maskId: Lb
          }));
        if (!Zb) return function() {
          var bb;
          !zb && console && "function" === typeof console.error && (bb = console).error.apply(bb, arguments)
        }("Could not find icon", Xb), null;
        var Db = Zb.abstract,
          mb = {
            ref: ab
          };
        return Object.keys(Ub).forEach((function(bb) {
          fb.hasOwnProperty(bb) || (mb[bb] = Ub[bb])
        })), pb(Db[0], mb)
      }));
    mb.displayName = "FontAwesomeIcon", mb.propTypes = {
      beat: Tb().bool,
      border: Tb().bool,
      beatFade: Tb().bool,
      bounce: Tb().bool,
      className: Tb().string,
      fade: Tb().bool,
      flash: Tb().bool,
      mask: Tb().oneOfType([Tb().object, Tb().array, Tb().string]),
      maskId: Tb().string,
      fixedWidth: Tb().bool,
      inverse: Tb().bool,
      flip: Tb().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: Tb().oneOfType([Tb().object, Tb().array, Tb().string]),
      listItem: Tb().bool,
      pull: Tb().oneOf(["right", "left"]),
      pulse: Tb().bool,
      rotation: Tb().oneOf([0, 90, 180, 270]),
      rotateBy: Tb().bool,
      shake: Tb().bool,
      size: Tb().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: Tb().bool,
      spinPulse: Tb().bool,
      spinReverse: Tb().bool,
      symbol: Tb().oneOfType([Tb().bool, Tb().string]),
      title: Tb().string,
      titleId: Tb().string,
      transform: Tb().oneOfType([Tb().string, Tb().object]),
      swapOpacity: Tb().bool,
      widthAuto: Tb().bool
    };
    var pb = function bb(ab, Ub) {
      var Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof Ub) return Ub;
      var Mb = (Ub.children || []).map((function(Ub) {
          return bb(ab, Ub)
        })),
        Tb = Object.keys(Ub.attributes || {}).reduce((function(bb, ab) {
          var Ab = Ub.attributes[ab];
          switch (ab) {
            case "class":
              bb.attrs.className = Ab, delete Ub.attributes.class;
              break;
            case "style":
              bb.attrs.style = Ab.split(";").map((function(bb) {
                return bb.trim()
              })).filter((function(bb) {
                return bb
              })).reduce((function(bb, ab) {
                var Ub, Ab = ab.indexOf(":"),
                  Mb = Zb(ab.slice(0, Ab)),
                  Tb = ab.slice(Ab + 1).trim();
                return Mb.startsWith("webkit") ? bb[(Ub = Mb, Ub.charAt(0).toUpperCase() + Ub.slice(1))] = Tb : bb[Mb] = Tb, bb
              }), {});
              break;
            default:
              0 === ab.indexOf("aria-") || 0 === ab.indexOf("data-") ? bb.attrs[ab.toLowerCase()] = Ab : bb.attrs[Zb(ab)] = Ab
          }
          return bb
        }), {
          attrs: {}
        }),
        Eb = Ab.style,
        Yb = void 0 === Eb ? {} : Eb,
        Bb = function(bb, ab) {
          if (null == bb) return {};
          var Ub, Ab, Mb = function(bb, ab) {
            if (null == bb) return {};
            var Ub = {};
            for (var Ab in bb)
              if ({}.hasOwnProperty.call(bb, Ab)) {
                if (-1 !== ab.indexOf(Ab)) continue;
                Ub[Ab] = bb[Ab]
              } return Ub
          }(bb, ab);
          if (Object.getOwnPropertySymbols) {
            var Tb = Object.getOwnPropertySymbols(bb);
            for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], -1 === ab.indexOf(Ub) && {}.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
          }
          return Mb
        }(Ab, Db);
      return Tb.attrs.style = vb(vb({}, Tb.attrs.style), Yb), ab.apply(void 0, [Ub.tag, vb(vb({}, Tb.attrs), Bb)].concat(Pb(Mb)))
    }.bind(null, Eb.createElement)
  },
  4648: (bb, ab, Ub) => {
    var Ab = Ub(4651);

    function Mb() {}

    function Tb() {}
    Tb.resetWarningCache = Mb, bb.exports = function() {
      function bb(bb, ab, Ub, Mb, Tb, Eb) {
        if (Eb !== Ab) {
          var Yb = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Yb.name = "Invariant Violation", Yb
        }
      }

      function ab() {
        return bb
      }
      bb.isRequired = bb;
      var Ub = {
        array: bb,
        bigint: bb,
        bool: bb,
        func: bb,
        number: bb,
        object: bb,
        string: bb,
        symbol: bb,
        any: bb,
        arrayOf: ab,
        element: bb,
        elementType: bb,
        instanceOf: ab,
        node: bb,
        objectOf: ab,
        oneOf: ab,
        oneOfType: ab,
        shape: ab,
        exact: ab,
        checkPropTypes: Tb,
        resetWarningCache: Mb
      };
      return Ub.PropTypes = Ub, Ub
    }
  },
  4642: (bb, ab, Ub) => {
    bb.exports = Ub(4648)()
  },
  4651: bb => {
    bb.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6312: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function Mb(bb, ab) {
      for (var Ub = 0; Ub < ab.length; Ub++) {
        var Ab = ab[Ub];
        Ab.enumerable = Ab.enumerable || !1, Ab.configurable = !0, "value" in Ab && (Ab.writable = !0), Object.defineProperty(bb, Lb(Ab.key), Ab)
      }
    }

    function Tb(bb, ab) {
      var Ub = "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
      if (!Ub) {
        if (Array.isArray(bb) || (Ub = Xb(bb)) || ab && bb && "number" == typeof bb.length) {
          Ub && (bb = Ub);
          var Ab = 0,
            Mb = function() {};
          return {
            s: Mb,
            n: function() {
              return Ab >= bb.length ? {
                done: !0
              } : {
                done: !1,
                value: bb[Ab++]
              }
            },
            e: function(bb) {
              throw bb
            },
            f: Mb
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Tb, Eb = !0,
        Yb = !1;
      return {
        s: function() {
          Ub = Ub.call(bb)
        },
        n: function() {
          var bb = Ub.next();
          return Eb = bb.done, bb
        },
        e: function(bb) {
          Yb = !0, Tb = bb
        },
        f: function() {
          try {
            Eb || null == Ub.return || Ub.return()
          } finally {
            if (Yb) throw Tb
          }
        }
      }
    }

    function Eb(bb, ab, Ub) {
      return (ab = Lb(ab)) in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function Yb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Bb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? Yb(Object(Ub), !0).forEach((function(ab) {
          Eb(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Yb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function eb(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        var Ub = null == bb ? null : "undefined" != typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null != Ub) {
          var Ab, Mb, Tb, Eb, Yb = [],
            Bb = !0,
            eb = !1;
          try {
            if (Tb = (Ub = Ub.call(bb)).next, 0 === ab) {
              if (Object(Ub) !== Ub) return;
              Bb = !1
            } else
              for (; !(Bb = (Ab = Tb.call(Ub)).done) && (Yb.push(Ab.value), Yb.length !== ab); Bb = !0);
          } catch (bb) {
            eb = !0, Mb = bb
          } finally {
            try {
              if (!Bb && null != Ub.return && (Eb = Ub.return(), Object(Eb) !== Eb)) return
            } finally {
              if (eb) throw Mb
            }
          }
          return Yb
        }
      }(bb, ab) || Xb(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vb(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return Ab(bb)
      }(bb) || function(bb) {
        if ("undefined" != typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Xb(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Lb(bb) {
      var ab = function(bb, ab) {
        if ("object" != typeof bb || !bb) return bb;
        var Ub = bb[Symbol.toPrimitive];
        if (void 0 !== Ub) {
          var Ab = Ub.call(bb, ab || "default");
          if ("object" != typeof Ab) return Ab;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ab ? String : Number)(bb)
      }(bb, "string");
      return "symbol" == typeof ab ? ab : ab + ""
    }

    function Pb(bb) {
      return Pb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, Pb(bb)
    }

    function Xb(bb, ab) {
      if (bb) {
        if ("string" == typeof bb) return Ab(bb, ab);
        var Ub = {}.toString.call(bb).slice(8, -1);
        return "Object" === Ub && bb.constructor && (Ub = bb.constructor.name), "Map" === Ub || "Set" === Ub ? Array.from(bb) : "Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub) ? Ab(bb, ab) : void 0
      }
    }
    Ub.r(ab), Ub.d(ab, {
      api: () => cU,
      config: () => UM,
      counter: () => LM,
      dom: () => MM,
      findIconDefinition: () => EM,
      icon: () => BM,
      layer: () => eM,
      library: () => AM,
      noAuto: () => aM,
      parse: () => TM,
      text: () => vM,
      toHtml: () => YM
    });
    var jb = function() {},
      Rb = {},
      kb = {},
      yb = null,
      Zb = {
        mark: jb,
        measure: jb
      };
    try {
      "undefined" !== typeof window && (Rb = window), "undefined" !== typeof document && (kb = document), "undefined" !== typeof MutationObserver && (yb = MutationObserver), "undefined" !== typeof performance && (Zb = performance)
    } catch (wb) {}
    var Db, zb, xb = (Rb.navigator || {}).userAgent,
      ib = void 0 === xb ? "" : xb,
      fb = Rb,
      mb = kb,
      pb = yb,
      Nb = Zb,
      Wb = (fb.document, !!mb.documentElement && !!mb.head && "function" === typeof mb.addEventListener && "function" === typeof mb.createElement),
      Hb = ~ib.indexOf("MSIE") || ~ib.indexOf("Trident/"),
      Ib = {
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
      db = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      Fb = "classic",
      hb = "duotone",
      Gb = "sharp",
      Qb = "sharp-duotone",
      qb = "chisel",
      ub = "etch",
      rb = "graphite",
      Kb = "jelly",
      ob = "jelly-duo",
      lb = "jelly-fill",
      tb = "notdog",
      wb = "notdog-duo",
      sb = "slab",
      gb = "slab-press",
      Cb = "thumbprint",
      Vb = "utility",
      Ob = "utility-duo",
      cb = "utility-fill",
      Jb = "whiteboard",
      nb = [Fb, hb, Gb, Qb, qb, ub, rb, Kb, ob, lb, tb, wb, sb, gb, Cb, Vb, Ob, cb, Jb],
      Sb = (Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Db = {}, Fb, "Classic"), hb, "Duotone"), Gb, "Sharp"), Qb, "Sharp Duotone"), qb, "Chisel"), ub, "Etch"), rb, "Graphite"), Kb, "Jelly"), ob, "Jelly Duo"), lb, "Jelly Fill"), Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Db, tb, "Notdog"), wb, "Notdog Duo"), sb, "Slab"), gb, "Slab Press"), Cb, "Thumbprint"), Vb, "Utility"), Ob, "Utility Duo"), cb, "Utility Fill"), Jb, "Whiteboard"), new Map([
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
      ba = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      aa = {
        fak: "kit",
        "fa-kit": "kit"
      },
      Ua = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      Aa = (Eb(Eb({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      Ma = {
        "kit-duotone": "fakd"
      },
      Ta = "duotone-group",
      Ea = "swap-opacity",
      Ya = "primary",
      Ba = "secondary",
      ea = (Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(zb = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(zb, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), Eb(Eb({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      va = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      La = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Pa = La.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      Xa = [].concat(vb(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", Ta, Ea, Ya, Ba]).concat(La.map((function(bb) {
        return "".concat(bb, "x")
      }))).concat(Pa.map((function(bb) {
        return "w-".concat(bb)
      }))),
      ja = "___FONT_AWESOME___",
      Ra = "svg-inline--fa",
      ka = "data-fa-i2svg",
      ya = "data-fa-pseudo-element",
      Za = "data-prefix",
      Da = "data-icon",
      za = "fontawesome-i2svg",
      xa = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      ia = ["::before", "::after", ":before", ":after"],
      fa = function() {
        try {
          return !0
        } catch (bb) {
          return !1
        }
      }();

    function ma(bb) {
      return new Proxy(bb, {
        get: function(bb, ab) {
          return ab in bb ? bb[ab] : bb[Fb]
        }
      })
    }
    var pa = Bb({}, Ib);
    pa[Fb] = Bb(Bb(Bb(Bb({}, {
      "fa-duotone": "duotone"
    }), Ib[Fb]), aa), Ua);
    var Na = ma(pa),
      Wa = Bb({}, {
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
    Wa[Fb] = Bb(Bb(Bb(Bb({}, {
      duotone: "fad"
    }), Wa[Fb]), Aa), Ma);
    var Ha = ma(Wa),
      Ia = Bb({}, ea);
    Ia[Fb] = Bb(Bb({}, Ia[Fb]), {
      fak: "fa-kit"
    });
    var da = ma(Ia),
      Fa = Bb({}, {
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
    Fa[Fb] = Bb(Bb({}, Fa[Fb]), {
      "fa-kit": "fak"
    });
    ma(Fa);
    var ha = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      Ga = "fa-layers-text",
      Qa = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      qa = (ma(Bb({}, {
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
      ua = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      ra = [].concat(vb(["kit"]), vb(Xa)),
      Ka = fb.FontAwesomeConfig || {};
    if (mb && "function" === typeof mb.querySelector) {
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
        var ab = eb(bb, 2),
          Ub = ab[0],
          Ab = ab[1],
          Mb = function(bb) {
            return "" === bb || "false" !== bb && ("true" === bb || bb)
          }(function(bb) {
            var ab = mb.querySelector("script[" + bb + "]");
            if (ab) return ab.getAttribute(bb)
          }(Ub));
        void 0 !== Mb && null !== Mb && (Ka[Ab] = Mb)
      }))
    }
    var oa = {
      styleDefault: "solid",
      familyDefault: Fb,
      cssPrefix: "fa",
      replacementClass: Ra,
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
    Ka.familyPrefix && (Ka.cssPrefix = Ka.familyPrefix);
    var la = Bb(Bb({}, oa), Ka);
    la.autoReplaceSvg || (la.observeMutations = !1);
    var ta = {};
    Object.keys(oa).forEach((function(bb) {
      Object.defineProperty(ta, bb, {
        enumerable: !0,
        set: function(ab) {
          la[bb] = ab, wa.forEach((function(bb) {
            return bb(ta)
          }))
        },
        get: function() {
          return la[bb]
        }
      })
    })), Object.defineProperty(ta, "familyPrefix", {
      enumerable: !0,
      set: function(bb) {
        la.cssPrefix = bb, wa.forEach((function(bb) {
          return bb(ta)
        }))
      },
      get: function() {
        return la.cssPrefix
      }
    }), fb.FontAwesomeConfig = ta;
    var wa = [];
    var sa = 16,
      ga = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function Ca() {
      for (var bb = 12, ab = ""; bb-- > 0;) ab += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return ab
    }

    function Va(bb) {
      for (var ab = [], Ub = (bb || []).length >>> 0; Ub--;) ab[Ub] = bb[Ub];
      return ab
    }

    function Oa(bb) {
      return bb.classList ? Va(bb.classList) : (bb.getAttribute("class") || "").split(" ").filter((function(bb) {
        return bb
      }))
    }

    function ca(bb) {
      return "".concat(bb).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Ja(bb) {
      return Object.keys(bb || {}).reduce((function(ab, Ub) {
        return ab + "".concat(Ub, ": ").concat(bb[Ub].trim(), ";")
      }), "")
    }

    function na(bb) {
      return bb.size !== ga.size || bb.x !== ga.x || bb.y !== ga.y || bb.rotate !== ga.rotate || bb.flipX || bb.flipY
    }

    function Sa() {
      var bb = "fa",
        ab = Ra,
        Ub = ta.cssPrefix,
        Ab = ta.replacementClass,
        Mb = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (Ub !== bb || Ab !== ab) {
        var Tb = new RegExp("\\.".concat(bb, "\\-"), "g"),
          Eb = new RegExp("\\--".concat(bb, "\\-"), "g"),
          Yb = new RegExp("\\.".concat(ab), "g");
        Mb = Mb.replace(Tb, ".".concat(Ub, "-")).replace(Eb, "--".concat(Ub, "-")).replace(Yb, ".".concat(Ab))
      }
      return Mb
    }
    var bU = !1;

    function aU() {
      ta.autoAddCss && !bU && (! function(bb) {
        if (bb && Wb) {
          var ab = mb.createElement("style");
          ab.setAttribute("type", "text/css"), ab.innerHTML = bb;
          for (var Ub = mb.head.childNodes, Ab = null, Mb = Ub.length - 1; Mb > -1; Mb--) {
            var Tb = Ub[Mb],
              Eb = (Tb.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(Eb) > -1 && (Ab = Tb)
          }
          mb.head.insertBefore(ab, Ab)
        }
      }(Sa()), bU = !0)
    }
    var UU = {
        mixout: function() {
          return {
            dom: {
              css: Sa,
              insertCss: aU
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              aU()
            },
            beforeI2svg: function() {
              aU()
            }
          }
        }
      },
      AU = fb || {};
    AU[ja] || (AU[ja] = {}), AU[ja].styles || (AU[ja].styles = {}), AU[ja].hooks || (AU[ja].hooks = {}), AU[ja].shims || (AU[ja].shims = []);
    var MU = AU[ja],
      TU = [],
      EU = function() {
        mb.removeEventListener("DOMContentLoaded", EU), YU = 1, TU.map((function(bb) {
          return bb()
        }))
      },
      YU = !1;

    function BU(bb) {
      var ab = bb.tag,
        Ub = bb.attributes,
        Ab = void 0 === Ub ? {} : Ub,
        Mb = bb.children,
        Tb = void 0 === Mb ? [] : Mb;
      return "string" === typeof bb ? ca(bb) : "<".concat(ab, " ").concat(function(bb) {
        return Object.keys(bb || {}).reduce((function(ab, Ub) {
          return ab + "".concat(Ub, '="').concat(ca(bb[Ub]), '" ')
        }), "").trim()
      }(Ab), ">").concat(Tb.map(BU).join(""), "</").concat(ab, ">")
    }

    function eU(bb, ab, Ub) {
      if (bb && bb[ab] && bb[ab][Ub]) return {
        prefix: ab,
        iconName: Ub,
        icon: bb[ab][Ub]
      }
    }
    Wb && ((YU = (mb.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(mb.readyState)) || mb.addEventListener("DOMContentLoaded", EU));
    var vU = function(bb, ab, Ub, Ab) {
      var Mb, Tb, Eb, Yb = Object.keys(bb),
        Bb = Yb.length,
        eb = void 0 !== Ab ? function(bb, ab) {
          return function(Ub, Ab, Mb, Tb) {
            return bb.call(ab, Ub, Ab, Mb, Tb)
          }
        }(ab, Ab) : ab;
      for (void 0 === Ub ? (Mb = 1, Eb = bb[Yb[0]]) : (Mb = 0, Eb = Ub); Mb < Bb; Mb++) Eb = eb(Eb, bb[Tb = Yb[Mb]], Tb, bb);
      return Eb
    };

    function LU(bb) {
      return 1 !== vb(bb).length ? null : bb.codePointAt(0).toString(16)
    }

    function PU(bb) {
      return Object.keys(bb).reduce((function(ab, Ub) {
        var Ab = bb[Ub];
        return !!Ab.icon ? ab[Ab.iconName] = Ab.icon : ab[Ub] = Ab, ab
      }), {})
    }

    function XU(bb, ab) {
      var Ub = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        Ab = void 0 !== Ub && Ub,
        Mb = PU(ab);
      "function" !== typeof MU.hooks.addPack || Ab ? MU.styles[bb] = Bb(Bb({}, MU.styles[bb] || {}), Mb) : MU.hooks.addPack(bb, PU(ab)), "fas" === bb && XU("fa", ab)
    }
    var jU = MU.styles,
      RU = MU.shims,
      kU = Object.keys(da),
      yU = kU.reduce((function(bb, ab) {
        return bb[ab] = Object.keys(da[ab]), bb
      }), {}),
      ZU = null,
      DU = {},
      zU = {},
      xU = {},
      iU = {},
      fU = {};

    function mU(bb, ab) {
      var Ub, Ab = ab.split("-"),
        Mb = Ab[0],
        Tb = Ab.slice(1).join("-");
      return Mb !== bb || "" === Tb || (Ub = Tb, ~ra.indexOf(Ub)) ? null : Tb
    }
    var pU, NU = function() {
      var bb = function(bb) {
        return vU(jU, (function(ab, Ub, Ab) {
          return ab[Ab] = vU(Ub, bb, {}), ab
        }), {})
      };
      DU = bb((function(bb, ab, Ub) {
        (ab[3] && (bb[ab[3]] = Ub), ab[2]) && ab[2].filter((function(bb) {
          return "number" === typeof bb
        })).forEach((function(ab) {
          bb[ab.toString(16)] = Ub
        }));
        return bb
      })), zU = bb((function(bb, ab, Ub) {
        (bb[Ub] = Ub, ab[2]) && ab[2].filter((function(bb) {
          return "string" === typeof bb
        })).forEach((function(ab) {
          bb[ab] = Ub
        }));
        return bb
      })), fU = bb((function(bb, ab, Ub) {
        var Ab = ab[2];
        return bb[Ub] = Ub, Ab.forEach((function(ab) {
          bb[ab] = Ub
        })), bb
      }));
      var ab = "far" in jU || ta.autoFetchSvg,
        Ub = vU(RU, (function(bb, Ub) {
          var Ab = Ub[0],
            Mb = Ub[1],
            Tb = Ub[2];
          return "far" !== Mb || ab || (Mb = "fas"), "string" === typeof Ab && (bb.names[Ab] = {
            prefix: Mb,
            iconName: Tb
          }), "number" === typeof Ab && (bb.unicodes[Ab.toString(16)] = {
            prefix: Mb,
            iconName: Tb
          }), bb
        }), {
          names: {},
          unicodes: {}
        });
      xU = Ub.names, iU = Ub.unicodes, ZU = FU(ta.styleDefault, {
        family: ta.familyDefault
      })
    };

    function WU(bb, ab) {
      return (DU[bb] || {})[ab]
    }

    function HU(bb, ab) {
      return (fU[bb] || {})[ab]
    }

    function IU(bb) {
      return xU[bb] || {
        prefix: null,
        iconName: null
      }
    }

    function dU() {
      return ZU
    }
    pU = function(bb) {
      ZU = FU(bb.styleDefault, {
        family: ta.familyDefault
      })
    }, wa.push(pU), NU();

    function FU(bb) {
      var ab = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        Ub = void 0 === ab ? Fb : ab,
        Ab = Na[Ub][bb];
      if (Ub === hb && !bb) return "fad";
      var Mb = Ha[Ub][bb] || Ha[Ub][Ab],
        Tb = bb in MU.styles ? bb : null;
      return Mb || Tb || null
    }

    function hU(bb) {
      return bb.sort().filter((function(bb, ab, Ub) {
        return Ub.indexOf(bb) === ab
      }))
    }
    var GU = va.concat(ba);

    function QU(bb) {
      var ab = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        Ub = void 0 !== ab && ab,
        Ab = null,
        Mb = hU(bb.filter((function(bb) {
          return GU.includes(bb)
        }))),
        Tb = hU(bb.filter((function(bb) {
          return !GU.includes(bb)
        }))),
        Eb = eb(Mb.filter((function(bb) {
          return Ab = bb, !db.includes(bb)
        })), 1)[0],
        Yb = void 0 === Eb ? null : Eb,
        vb = function(bb) {
          var ab = Fb,
            Ub = kU.reduce((function(bb, ab) {
              return bb[ab] = "".concat(ta.cssPrefix, "-").concat(ab), bb
            }), {});
          return nb.forEach((function(Ab) {
            (bb.includes(Ub[Ab]) || bb.some((function(bb) {
              return yU[Ab].includes(bb)
            }))) && (ab = Ab)
          })), ab
        }(Mb),
        Lb = Bb(Bb({}, function(bb) {
          var ab = [],
            Ub = null;
          return bb.forEach((function(bb) {
            var Ab = mU(ta.cssPrefix, bb);
            Ab ? Ub = Ab : bb && ab.push(bb)
          })), {
            iconName: Ub,
            rest: ab
          }
        }(Tb)), {}, {
          prefix: FU(Yb, {
            family: vb
          })
        });
      return Bb(Bb(Bb({}, Lb), function(bb) {
        var ab = bb.values,
          Ub = bb.family,
          Ab = bb.canonical,
          Mb = bb.givenPrefix,
          Tb = void 0 === Mb ? "" : Mb,
          Eb = bb.styles,
          Yb = void 0 === Eb ? {} : Eb,
          Bb = bb.config,
          eb = void 0 === Bb ? {} : Bb,
          vb = Ub === hb,
          Lb = ab.includes("fa-duotone") || ab.includes("fad"),
          Pb = "duotone" === eb.familyDefault,
          Xb = "fad" === Ab.prefix || "fa-duotone" === Ab.prefix;
        !vb && (Lb || Pb || Xb) && (Ab.prefix = "fad");
        (ab.includes("fa-brands") || ab.includes("fab")) && (Ab.prefix = "fab");
        if (!Ab.prefix && qU.includes(Ub)) {
          if (Object.keys(Yb).find((function(bb) {
              return uU.includes(bb)
            })) || eb.autoFetchSvg) {
            var jb = Sb.get(Ub).defaultShortPrefixId;
            Ab.prefix = jb, Ab.iconName = HU(Ab.prefix, Ab.iconName) || Ab.iconName
          }
        }
        "fa" !== Ab.prefix && "fa" !== Tb || (Ab.prefix = dU() || "fas");
        return Ab
      }({
        values: bb,
        family: vb,
        styles: jU,
        config: ta,
        canonical: Lb,
        givenPrefix: Ab
      })), function(bb, ab, Ub) {
        var Ab = Ub.prefix,
          Mb = Ub.iconName;
        if (bb || !Ab || !Mb) return {
          prefix: Ab,
          iconName: Mb
        };
        var Tb = "fa" === ab ? IU(Mb) : {},
          Eb = HU(Ab, Mb);
        Mb = Tb.iconName || Eb || Mb, "far" !== (Ab = Tb.prefix || Ab) || jU.far || !jU.fas || ta.autoFetchSvg || (Ab = "fas");
        return {
          prefix: Ab,
          iconName: Mb
        }
      }(Ub, Ab, Lb))
    }
    var qU = nb.filter((function(bb) {
        return bb !== Fb || bb !== hb
      })),
      uU = Object.keys(ea).filter((function(bb) {
        return bb !== Fb
      })).map((function(bb) {
        return Object.keys(ea[bb])
      })).flat();
    var rU = function() {
        return function(bb, ab, Ub) {
          return ab && Mb(bb.prototype, ab), Ub && Mb(bb, Ub), Object.defineProperty(bb, "prototype", {
            writable: !1
          }), bb
        }((function bb() {
          ! function(bb, ab) {
            if (!(bb instanceof ab)) throw new TypeError("Cannot call a class as a function")
          }(this, bb), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var bb = this, ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
            var Mb = Ub.reduce(this._pullDefinitions, {});
            Object.keys(Mb).forEach((function(ab) {
              bb.definitions[ab] = Bb(Bb({}, bb.definitions[ab] || {}), Mb[ab]), XU(ab, Mb[ab]);
              var Ub = da[Fb][ab];
              Ub && XU(Ub, Mb[ab]), NU()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(bb, ab) {
            var Ub = ab.prefix && ab.iconName && ab.icon ? {
              0: ab
            } : ab;
            return Object.keys(Ub).map((function(ab) {
              var Ab = Ub[ab],
                Mb = Ab.prefix,
                Tb = Ab.iconName,
                Eb = Ab.icon,
                Yb = Eb[2];
              bb[Mb] || (bb[Mb] = {}), Yb.length > 0 && Yb.forEach((function(ab) {
                "string" === typeof ab && (bb[Mb][ab] = Eb)
              })), bb[Mb][Tb] = Eb
            })), bb
          }
        }])
      }(),
      KU = [],
      oU = {},
      lU = {},
      tU = Object.keys(lU);

    function wU(bb, ab) {
      for (var Ub = arguments.length, Ab = new Array(Ub > 2 ? Ub - 2 : 0), Mb = 2; Mb < Ub; Mb++) Ab[Mb - 2] = arguments[Mb];
      return (oU[bb] || []).forEach((function(bb) {
        ab = bb.apply(null, [ab].concat(Ab))
      })), ab
    }

    function sU(bb) {
      for (var ab = arguments.length, Ub = new Array(ab > 1 ? ab - 1 : 0), Ab = 1; Ab < ab; Ab++) Ub[Ab - 1] = arguments[Ab];
      (oU[bb] || []).forEach((function(bb) {
        bb.apply(null, Ub)
      }))
    }

    function gU() {
      var bb = arguments[0],
        ab = Array.prototype.slice.call(arguments, 1);
      return lU[bb] ? lU[bb].apply(null, ab) : void 0
    }

    function CU(bb) {
      "fa" === bb.prefix && (bb.prefix = "fas");
      var ab = bb.iconName,
        Ub = bb.prefix || dU();
      if (ab) return ab = HU(Ub, ab) || ab, eU(VU.definitions, Ub, ab) || eU(MU.styles, Ub, ab)
    }
    var VU = new rU,
      OU = {
        i2svg: function() {
          var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Wb ? (sU("beforeI2svg", bb), gU("pseudoElements2svg", bb), gU("i2svg", bb)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var bb, ab = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Ub = ab.autoReplaceSvgRoot;
          !1 === ta.autoReplaceSvg && (ta.autoReplaceSvg = !0), ta.observeMutations = !0, bb = function() {
            JU({
              autoReplaceSvgRoot: Ub
            }), sU("watch", ab)
          }, Wb && (YU ? setTimeout(bb, 0) : TU.push(bb))
        }
      },
      cU = {
        noAuto: function() {
          ta.autoReplaceSvg = !1, ta.observeMutations = !1, sU("noAuto")
        },
        config: ta,
        dom: OU,
        parse: {
          icon: function(bb) {
            if (null === bb) return null;
            if ("object" === Pb(bb) && bb.prefix && bb.iconName) return {
              prefix: bb.prefix,
              iconName: HU(bb.prefix, bb.iconName) || bb.iconName
            };
            if (Array.isArray(bb) && 2 === bb.length) {
              var ab = 0 === bb[1].indexOf("fa-") ? bb[1].slice(3) : bb[1],
                Ub = FU(bb[0]);
              return {
                prefix: Ub,
                iconName: HU(Ub, ab) || ab
              }
            }
            if ("string" === typeof bb && (bb.indexOf("".concat(ta.cssPrefix, "-")) > -1 || bb.match(ha))) {
              var Ab = QU(bb.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: Ab.prefix || dU(),
                iconName: HU(Ab.prefix, Ab.iconName) || Ab.iconName
              }
            }
            if ("string" === typeof bb) {
              var Mb = dU();
              return {
                prefix: Mb,
                iconName: HU(Mb, bb) || bb
              }
            }
          }
        },
        library: VU,
        findIconDefinition: CU,
        toHtml: BU
      },
      JU = function() {
        var bb = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          ab = void 0 === bb ? mb : bb;
        (Object.keys(MU.styles).length > 0 || ta.autoFetchSvg) && Wb && ta.autoReplaceSvg && cU.dom.i2svg({
          node: ab
        })
      };

    function nU(bb, ab) {
      return Object.defineProperty(bb, "abstract", {
        get: ab
      }), Object.defineProperty(bb, "html", {
        get: function() {
          return bb.abstract.map((function(bb) {
            return BU(bb)
          }))
        }
      }), Object.defineProperty(bb, "node", {
        get: function() {
          if (Wb) {
            var ab = mb.createElement("div");
            return ab.innerHTML = bb.html, ab.children
          }
        }
      }), bb
    }

    function SU(bb) {
      var ab = bb.icons,
        Ub = ab.main,
        Ab = ab.mask,
        Mb = bb.prefix,
        Tb = bb.iconName,
        Eb = bb.transform,
        Yb = bb.symbol,
        eb = bb.maskId,
        vb = bb.extra,
        Lb = bb.watchable,
        Pb = void 0 !== Lb && Lb,
        Xb = Ab.found ? Ab : Ub,
        jb = Xb.width,
        Rb = Xb.height,
        kb = [ta.replacementClass, Tb ? "".concat(ta.cssPrefix, "-").concat(Tb) : ""].filter((function(bb) {
          return -1 === vb.classes.indexOf(bb)
        })).filter((function(bb) {
          return "" !== bb || !!bb
        })).concat(vb.classes).join(" "),
        yb = {
          children: [],
          attributes: Bb(Bb({}, vb.attributes), {}, {
            "data-prefix": Mb,
            "data-icon": Tb,
            class: kb,
            role: vb.attributes.role || "img",
            viewBox: "0 0 ".concat(jb, " ").concat(Rb)
          })
        };
      (function(bb) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(ab) {
          return ab in bb
        }))
      })(vb.attributes) || vb.attributes["aria-hidden"] || (yb.attributes["aria-hidden"] = "true"), Pb && (yb.attributes[ka] = "");
      var Zb = Bb(Bb({}, yb), {}, {
          prefix: Mb,
          iconName: Tb,
          main: Ub,
          mask: Ab,
          maskId: eb,
          transform: Eb,
          symbol: Yb,
          styles: Bb({}, vb.styles)
        }),
        Db = Ab.found && Ub.found ? gU("generateAbstractMask", Zb) || {
          children: [],
          attributes: {}
        } : gU("generateAbstractIcon", Zb) || {
          children: [],
          attributes: {}
        },
        zb = Db.children,
        xb = Db.attributes;
      return Zb.children = zb, Zb.attributes = xb, Yb ? function(bb) {
        var ab = bb.prefix,
          Ub = bb.iconName,
          Ab = bb.children,
          Mb = bb.attributes,
          Tb = bb.symbol,
          Eb = !0 === Tb ? "".concat(ab, "-").concat(ta.cssPrefix, "-").concat(Ub) : Tb;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: Bb(Bb({}, Mb), {}, {
              id: Eb
            }),
            children: Ab
          }]
        }]
      }(Zb) : function(bb) {
        var ab = bb.children,
          Ub = bb.main,
          Ab = bb.mask,
          Mb = bb.attributes,
          Tb = bb.styles,
          Eb = bb.transform;
        if (na(Eb) && Ub.found && !Ab.found) {
          var Yb = {
            x: Ub.width / Ub.height / 2,
            y: .5
          };
          Mb.style = Ja(Bb(Bb({}, Tb), {}, {
            "transform-origin": "".concat(Yb.x + Eb.x / 16, "em ").concat(Yb.y + Eb.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: Mb,
          children: ab
        }]
      }(Zb)
    }

    function bA(bb) {
      var ab = bb.content,
        Ub = bb.width,
        Ab = bb.height,
        Mb = bb.transform,
        Tb = bb.extra,
        Eb = bb.watchable,
        Yb = void 0 !== Eb && Eb,
        eb = Bb(Bb({}, Tb.attributes), {}, {
          class: Tb.classes.join(" ")
        });
      Yb && (eb[ka] = "");
      var vb = Bb({}, Tb.styles);
      na(Mb) && (vb.transform = function(bb) {
        var ab = bb.transform,
          Ub = bb.width,
          Ab = void 0 === Ub ? 16 : Ub,
          Mb = bb.height,
          Tb = void 0 === Mb ? 16 : Mb,
          Eb = bb.startCentered,
          Yb = void 0 !== Eb && Eb,
          Bb = "";
        return Bb += Yb && Hb ? "translate(".concat(ab.x / sa - Ab / 2, "em, ").concat(ab.y / sa - Tb / 2, "em) ") : Yb ? "translate(calc(-50% + ".concat(ab.x / sa, "em), calc(-50% + ").concat(ab.y / sa, "em)) ") : "translate(".concat(ab.x / sa, "em, ").concat(ab.y / sa, "em) "), Bb += "scale(".concat(ab.size / sa * (ab.flipX ? -1 : 1), ", ").concat(ab.size / sa * (ab.flipY ? -1 : 1), ") "), Bb + "rotate(".concat(ab.rotate, "deg) ")
      }({
        transform: Mb,
        startCentered: !0,
        width: Ub,
        height: Ab
      }), vb["-webkit-transform"] = vb.transform);
      var Lb = Ja(vb);
      Lb.length > 0 && (eb.style = Lb);
      var Pb = [];
      return Pb.push({
        tag: "span",
        attributes: eb,
        children: [ab]
      }), Pb
    }
    var aA = MU.styles;

    function UA(bb) {
      var ab = bb[0],
        Ub = bb[1],
        Ab = eb(bb.slice(4), 1)[0];
      return {
        found: !0,
        width: ab,
        height: Ub,
        icon: Array.isArray(Ab) ? {
          tag: "g",
          attributes: {
            class: "".concat(ta.cssPrefix, "-").concat(ua.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(ta.cssPrefix, "-").concat(ua.SECONDARY),
              fill: "currentColor",
              d: Ab[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(ta.cssPrefix, "-").concat(ua.PRIMARY),
              fill: "currentColor",
              d: Ab[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: Ab
          }
        }
      }
    }
    var AA = {
      found: !1,
      width: 512,
      height: 512
    };

    function MA(bb, ab) {
      var Ub = ab;
      return "fa" === ab && null !== ta.styleDefault && (ab = dU()), new Promise((function(Ab, Mb) {
        if ("fa" === Ub) {
          var Tb = IU(bb) || {};
          bb = Tb.iconName || bb, ab = Tb.prefix || ab
        }
        if (bb && ab && aA[ab] && aA[ab][bb]) return Ab(UA(aA[ab][bb]));
        ! function(bb, ab) {
          fa || ta.showMissingIcons || !bb || console.error('Icon with name "'.concat(bb, '" and prefix "').concat(ab, '" is missing.'))
        }(bb, ab), Ab(Bb(Bb({}, AA), {}, {
          icon: ta.showMissingIcons && bb && gU("missingIconAbstract") || {}
        }))
      }))
    }
    var TA = function() {},
      EA = ta.measurePerformance && Nb && Nb.mark && Nb.measure ? Nb : {
        mark: TA,
        measure: TA
      },
      YA = 'FA "7.2.0"',
      BA = function(bb) {
        EA.mark("".concat(YA, " ").concat(bb, " ends")), EA.measure("".concat(YA, " ").concat(bb), "".concat(YA, " ").concat(bb, " begins"), "".concat(YA, " ").concat(bb, " ends"))
      },
      eA = function(bb) {
        return EA.mark("".concat(YA, " ").concat(bb, " begins")),
          function() {
            return BA(bb)
          }
      },
      vA = function() {};

    function LA(bb) {
      return "string" === typeof(bb.getAttribute ? bb.getAttribute(ka) : null)
    }

    function PA(bb) {
      return mb.createElementNS("http://www.w3.org/2000/svg", bb)
    }

    function XA(bb) {
      return mb.createElement(bb)
    }

    function jA(bb) {
      var ab = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        Ub = void 0 === ab ? "svg" === bb.tag ? PA : XA : ab;
      if ("string" === typeof bb) return mb.createTextNode(bb);
      var Ab = Ub(bb.tag);
      return Object.keys(bb.attributes || []).forEach((function(ab) {
        Ab.setAttribute(ab, bb.attributes[ab])
      })), (bb.children || []).forEach((function(bb) {
        Ab.appendChild(jA(bb, {
          ceFn: Ub
        }))
      })), Ab
    }
    var RA = {
      replace: function(bb) {
        var ab = bb[0];
        if (ab.parentNode)
          if (bb[1].forEach((function(bb) {
              ab.parentNode.insertBefore(jA(bb), ab)
            })), null === ab.getAttribute(ka) && ta.keepOriginalSource) {
            var Ub = mb.createComment(function(bb) {
              var ab = " ".concat(bb.outerHTML, " ");
              return "".concat(ab, "Font Awesome fontawesome.com ")
            }(ab));
            ab.parentNode.replaceChild(Ub, ab)
          } else ab.remove()
      },
      nest: function(bb) {
        var ab = bb[0],
          Ub = bb[1];
        if (~Oa(ab).indexOf(ta.replacementClass)) return RA.replace(bb);
        var Ab = new RegExp("".concat(ta.cssPrefix, "-.*"));
        if (delete Ub[0].attributes.id, Ub[0].attributes.class) {
          var Mb = Ub[0].attributes.class.split(" ").reduce((function(bb, ab) {
            return ab === ta.replacementClass || ab.match(Ab) ? bb.toSvg.push(ab) : bb.toNode.push(ab), bb
          }), {
            toNode: [],
            toSvg: []
          });
          Ub[0].attributes.class = Mb.toSvg.join(" "), 0 === Mb.toNode.length ? ab.removeAttribute("class") : ab.setAttribute("class", Mb.toNode.join(" "))
        }
        var Tb = Ub.map((function(bb) {
          return BU(bb)
        })).join("\n");
        ab.setAttribute(ka, ""), ab.innerHTML = Tb
      }
    };

    function kA(bb) {
      bb()
    }

    function yA(bb, ab) {
      var Ub = "function" === typeof ab ? ab : vA;
      if (0 === bb.length) Ub();
      else {
        var Ab = kA;
        "async" === ta.mutateApproach && (Ab = fb.requestAnimationFrame || kA), Ab((function() {
          var ab = !0 === ta.autoReplaceSvg ? RA.replace : RA[ta.autoReplaceSvg] || RA.replace,
            Ab = eA("mutate");
          bb.map(ab), Ab(), Ub()
        }))
      }
    }
    var ZA = !1;

    function DA() {
      ZA = !0
    }

    function zA() {
      ZA = !1
    }
    var xA = null;

    function iA(bb) {
      if (pb && ta.observeMutations) {
        var ab = bb.treeCallback,
          Ub = void 0 === ab ? vA : ab,
          Ab = bb.nodeCallback,
          Mb = void 0 === Ab ? vA : Ab,
          Tb = bb.pseudoElementsCallback,
          Eb = void 0 === Tb ? vA : Tb,
          Yb = bb.observeMutationsRoot,
          Bb = void 0 === Yb ? mb : Yb;
        xA = new pb((function(bb) {
          if (!ZA) {
            var ab = dU();
            Va(bb).forEach((function(bb) {
              if ("childList" === bb.type && bb.addedNodes.length > 0 && !LA(bb.addedNodes[0]) && (ta.searchPseudoElements && Eb(bb.target), Ub(bb.target)), "attributes" === bb.type && bb.target.parentNode && ta.searchPseudoElements && Eb([bb.target], !0), "attributes" === bb.type && LA(bb.target) && ~qa.indexOf(bb.attributeName))
                if ("class" === bb.attributeName && function(bb) {
                    var ab = bb.getAttribute ? bb.getAttribute(Za) : null,
                      Ub = bb.getAttribute ? bb.getAttribute(Da) : null;
                    return ab && Ub
                  }(bb.target)) {
                  var Ab = QU(Oa(bb.target)),
                    Tb = Ab.prefix,
                    Yb = Ab.iconName;
                  bb.target.setAttribute(Za, Tb || ab), Yb && bb.target.setAttribute(Da, Yb)
                } else(Bb = bb.target) && Bb.classList && Bb.classList.contains && Bb.classList.contains(ta.replacementClass) && Mb(bb.target);
              var Bb
            }))
          }
        })), Wb && xA.observe(Bb, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function fA(bb) {
      var ab, Ub, Ab = bb.getAttribute("data-prefix"),
        Mb = bb.getAttribute("data-icon"),
        Tb = void 0 !== bb.innerText ? bb.innerText.trim() : "",
        Eb = QU(Oa(bb));
      return Eb.prefix || (Eb.prefix = dU()), Ab && Mb && (Eb.prefix = Ab, Eb.iconName = Mb), Eb.iconName && Eb.prefix || (Eb.prefix && Tb.length > 0 && (Eb.iconName = (ab = Eb.prefix, Ub = bb.innerText, (zU[ab] || {})[Ub] || WU(Eb.prefix, LU(bb.innerText)))), !Eb.iconName && ta.autoFetchSvg && bb.firstChild && bb.firstChild.nodeType === Node.TEXT_NODE && (Eb.iconName = bb.firstChild.data)), Eb
    }

    function mA(bb) {
      var ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        Ub = fA(bb),
        Ab = Ub.iconName,
        Mb = Ub.prefix,
        Tb = Ub.rest,
        Eb = function(bb) {
          return Va(bb.attributes).reduce((function(bb, ab) {
            return "class" !== bb.name && "style" !== bb.name && (bb[ab.name] = ab.value), bb
          }), {})
        }(bb),
        Yb = wU("parseNodeAttributes", {}, bb),
        eb = ab.styleParser ? function(bb) {
          var ab = bb.getAttribute("style"),
            Ub = [];
          return ab && (Ub = ab.split(";").reduce((function(bb, ab) {
            var Ub = ab.split(":"),
              Ab = Ub[0],
              Mb = Ub.slice(1);
            return Ab && Mb.length > 0 && (bb[Ab] = Mb.join(":").trim()), bb
          }), {})), Ub
        }(bb) : [];
      return Bb({
        iconName: Ab,
        prefix: Mb,
        transform: ga,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: Tb,
          styles: eb,
          attributes: Eb
        }
      }, Yb)
    }
    var pA = MU.styles;

    function NA(bb) {
      var ab = "nest" === ta.autoReplaceSvg ? mA(bb, {
        styleParser: !1
      }) : mA(bb);
      return ~ab.extra.classes.indexOf(Ga) ? gU("generateLayersText", bb, ab) : gU("generateSvgReplacementMutation", bb, ab)
    }

    function WA(bb) {
      var ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!Wb) return Promise.resolve();
      var Ub = mb.documentElement.classList,
        Ab = function(bb) {
          return Ub.add("".concat(za, "-").concat(bb))
        },
        Mb = function(bb) {
          return Ub.remove("".concat(za, "-").concat(bb))
        },
        Tb = ta.autoFetchSvg ? [].concat(vb(ba), vb(va)) : db.concat(Object.keys(pA));
      Tb.includes("fa") || Tb.push("fa");
      var Eb = [".".concat(Ga, ":not([").concat(ka, "])")].concat(Tb.map((function(bb) {
        return ".".concat(bb, ":not([").concat(ka, "])")
      }))).join(", ");
      if (0 === Eb.length) return Promise.resolve();
      var Yb = [];
      try {
        Yb = Va(bb.querySelectorAll(Eb))
      } catch (Lb) {}
      if (!(Yb.length > 0)) return Promise.resolve();
      Ab("pending"), Mb("complete");
      var Bb = eA("onTree"),
        eb = Yb.reduce((function(bb, ab) {
          try {
            var Ub = NA(ab);
            Ub && bb.push(Ub)
          } catch (Lb) {
            fa || "MissingIcon" === Lb.name && console.error(Lb)
          }
          return bb
        }), []);
      return new Promise((function(bb, Ub) {
        Promise.all(eb).then((function(Ub) {
          yA(Ub, (function() {
            Ab("active"), Ab("complete"), Mb("pending"), "function" === typeof ab && ab(), Bb(), bb()
          }))
        })).catch((function(bb) {
          Bb(), Ub(bb)
        }))
      }))
    }

    function HA(bb) {
      var ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      NA(bb).then((function(bb) {
        bb && yA([bb], ab)
      }))
    }
    var IA = function(bb) {
        var ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Ub = ab.transform,
          Ab = void 0 === Ub ? ga : Ub,
          Mb = ab.symbol,
          Tb = void 0 !== Mb && Mb,
          Eb = ab.mask,
          Yb = void 0 === Eb ? null : Eb,
          eb = ab.maskId,
          vb = void 0 === eb ? null : eb,
          Lb = ab.classes,
          Pb = void 0 === Lb ? [] : Lb,
          Xb = ab.attributes,
          jb = void 0 === Xb ? {} : Xb,
          Rb = ab.styles,
          kb = void 0 === Rb ? {} : Rb;
        if (bb) {
          var yb = bb.prefix,
            Zb = bb.iconName,
            Db = bb.icon;
          return nU(Bb({
            type: "icon"
          }, bb), (function() {
            return sU("beforeDOMElementCreation", {
              iconDefinition: bb,
              params: ab
            }), SU({
              icons: {
                main: UA(Db),
                mask: Yb ? UA(Yb.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: yb,
              iconName: Zb,
              transform: Bb(Bb({}, ga), Ab),
              symbol: Tb,
              maskId: vb,
              extra: {
                attributes: jb,
                styles: kb,
                classes: Pb
              }
            })
          }))
        }
      },
      dA = {
        mixout: function() {
          return {
            icon: (bb = IA, function(ab) {
              var Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Ab = (ab || {}).icon ? ab : CU(ab || {}),
                Mb = Ub.mask;
              return Mb && (Mb = (Mb || {}).icon ? Mb : CU(Mb || {})), bb(Ab, Bb(Bb({}, Ub), {}, {
                mask: Mb
              }))
            })
          };
          var bb
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(bb) {
              return bb.treeCallback = WA, bb.nodeCallback = HA, bb
            }
          }
        },
        provides: function(bb) {
          bb.i2svg = function(bb) {
            var ab = bb.node,
              Ub = void 0 === ab ? mb : ab,
              Ab = bb.callback;
            return WA(Ub, void 0 === Ab ? function() {} : Ab)
          }, bb.generateSvgReplacementMutation = function(bb, ab) {
            var Ub = ab.iconName,
              Ab = ab.prefix,
              Mb = ab.transform,
              Tb = ab.symbol,
              Eb = ab.mask,
              Yb = ab.maskId,
              Bb = ab.extra;
            return new Promise((function(ab, vb) {
              Promise.all([MA(Ub, Ab), Eb.iconName ? MA(Eb.iconName, Eb.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(Eb) {
                var vb = eb(Eb, 2),
                  Lb = vb[0],
                  Pb = vb[1];
                ab([bb, SU({
                  icons: {
                    main: Lb,
                    mask: Pb
                  },
                  prefix: Ab,
                  iconName: Ub,
                  transform: Mb,
                  symbol: Tb,
                  maskId: Yb,
                  extra: Bb,
                  watchable: !0
                })])
              })).catch(vb)
            }))
          }, bb.generateAbstractIcon = function(bb) {
            var ab, Ub = bb.children,
              Ab = bb.attributes,
              Mb = bb.main,
              Tb = bb.transform,
              Eb = Ja(bb.styles);
            return Eb.length > 0 && (Ab.style = Eb), na(Tb) && (ab = gU("generateAbstractTransformGrouping", {
              main: Mb,
              transform: Tb,
              containerWidth: Mb.width,
              iconWidth: Mb.width
            })), Ub.push(ab || Mb.icon), {
              children: Ub,
              attributes: Ab
            }
          }
        }
      },
      FA = {
        mixout: function() {
          return {
            layer: function(bb) {
              var ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Ub = ab.classes,
                Ab = void 0 === Ub ? [] : Ub;
              return nU({
                type: "layer"
              }, (function() {
                sU("beforeDOMElementCreation", {
                  assembler: bb,
                  params: ab
                });
                var Ub = [];
                return bb((function(bb) {
                  Array.isArray(bb) ? bb.map((function(bb) {
                    Ub = Ub.concat(bb.abstract)
                  })) : Ub = Ub.concat(bb.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(ta.cssPrefix, "-layers")].concat(vb(Ab)).join(" ")
                  },
                  children: Ub
                }]
              }))
            }
          }
        }
      },
      hA = {
        mixout: function() {
          return {
            counter: function(bb) {
              var ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Ub = ab.title,
                Ab = void 0 === Ub ? null : Ub,
                Mb = ab.classes,
                Tb = void 0 === Mb ? [] : Mb,
                Eb = ab.attributes,
                Yb = void 0 === Eb ? {} : Eb,
                eb = ab.styles,
                Lb = void 0 === eb ? {} : eb;
              return nU({
                type: "counter",
                content: bb
              }, (function() {
                return sU("beforeDOMElementCreation", {
                    content: bb,
                    params: ab
                  }),
                  function(bb) {
                    var ab = bb.content,
                      Ub = bb.extra,
                      Ab = Bb(Bb({}, Ub.attributes), {}, {
                        class: Ub.classes.join(" ")
                      }),
                      Mb = Ja(Ub.styles);
                    Mb.length > 0 && (Ab.style = Mb);
                    var Tb = [];
                    return Tb.push({
                      tag: "span",
                      attributes: Ab,
                      children: [ab]
                    }), Tb
                  }({
                    content: bb.toString(),
                    title: Ab,
                    extra: {
                      attributes: Yb,
                      styles: Lb,
                      classes: ["".concat(ta.cssPrefix, "-layers-counter")].concat(vb(Tb))
                    }
                  })
              }))
            }
          }
        }
      },
      GA = {
        mixout: function() {
          return {
            text: function(bb) {
              var ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Ub = ab.transform,
                Ab = void 0 === Ub ? ga : Ub,
                Mb = ab.classes,
                Tb = void 0 === Mb ? [] : Mb,
                Eb = ab.attributes,
                Yb = void 0 === Eb ? {} : Eb,
                eb = ab.styles,
                Lb = void 0 === eb ? {} : eb;
              return nU({
                type: "text",
                content: bb
              }, (function() {
                return sU("beforeDOMElementCreation", {
                  content: bb,
                  params: ab
                }), bA({
                  content: bb,
                  transform: Bb(Bb({}, ga), Ab),
                  extra: {
                    attributes: Yb,
                    styles: Lb,
                    classes: ["".concat(ta.cssPrefix, "-layers-text")].concat(vb(Tb))
                  }
                })
              }))
            }
          }
        },
        provides: function(bb) {
          bb.generateLayersText = function(bb, ab) {
            var Ub = ab.transform,
              Ab = ab.extra,
              Mb = null,
              Tb = null;
            if (Hb) {
              var Eb = parseInt(getComputedStyle(bb).fontSize, 10),
                Yb = bb.getBoundingClientRect();
              Mb = Yb.width / Eb, Tb = Yb.height / Eb
            }
            return Promise.resolve([bb, bA({
              content: bb.innerHTML,
              width: Mb,
              height: Tb,
              transform: Ub,
              extra: Ab,
              watchable: !0
            })])
          }
        }
      },
      QA = new RegExp('"', "ug"),
      qA = [1105920, 1112319],
      uA = Bb(Bb(Bb(Bb({}, {
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
      rA = Object.keys(uA).reduce((function(bb, ab) {
        return bb[ab.toLowerCase()] = uA[ab], bb
      }), {}),
      KA = Object.keys(rA).reduce((function(bb, ab) {
        var Ub = rA[ab];
        return bb[ab] = Ub[900] || vb(Object.entries(Ub))[0][1], bb
      }), {});

    function oA(bb, ab) {
      var Ub = "".concat("data-fa-pseudo-element-pending").concat(ab.replace(":", "-"));
      return new Promise((function(Ab, Mb) {
        if (null !== bb.getAttribute(Ub)) return Ab();
        var Tb = Va(bb.children).filter((function(bb) {
            return bb.getAttribute(ya) === ab
          }))[0],
          Eb = fb.getComputedStyle(bb, ab),
          Yb = Eb.getPropertyValue("font-family"),
          eb = Yb.match(Qa),
          Lb = Eb.getPropertyValue("font-weight"),
          Pb = Eb.getPropertyValue("content");
        if (Tb && !eb) return bb.removeChild(Tb), Ab();
        if (eb && "none" !== Pb && "" !== Pb) {
          var Xb = Eb.getPropertyValue("content"),
            jb = function(bb, ab) {
              var Ub = bb.replace(/^['"]|['"]$/g, "").toLowerCase(),
                Ab = parseInt(ab),
                Mb = isNaN(Ab) ? "normal" : Ab;
              return (rA[Ub] || {})[Mb] || KA[Ub]
            }(Yb, Lb),
            Rb = function(bb) {
              return LU(vb(bb.replace(QA, ""))[0] || "")
            }(Xb),
            kb = eb[0].startsWith("FontAwesome"),
            yb = function(bb) {
              var ab = bb.getPropertyValue("font-feature-settings").includes("ss01"),
                Ub = bb.getPropertyValue("content").replace(QA, ""),
                Ab = Ub.codePointAt(0),
                Mb = Ab >= qA[0] && Ab <= qA[1],
                Tb = 2 === Ub.length && Ub[0] === Ub[1];
              return Mb || Tb || ab
            }(Eb),
            Zb = WU(jb, Rb),
            Db = Zb;
          if (kb) {
            var zb = function(bb) {
              var ab = iU[bb],
                Ub = WU("fas", bb);
              return ab || (Ub ? {
                prefix: "fas",
                iconName: Ub
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(Rb);
            zb.iconName && zb.prefix && (Zb = zb.iconName, jb = zb.prefix)
          }
          if (!Zb || yb || Tb && Tb.getAttribute(Za) === jb && Tb.getAttribute(Da) === Db) Ab();
          else {
            bb.setAttribute(Ub, Db), Tb && bb.removeChild(Tb);
            var xb = {
                iconName: null,
                prefix: null,
                transform: ga,
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
              ib = xb.extra;
            ib.attributes[ya] = ab, MA(Zb, jb).then((function(Mb) {
              var Tb = SU(Bb(Bb({}, xb), {}, {
                  icons: {
                    main: Mb,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: jb,
                  iconName: Db,
                  extra: ib,
                  watchable: !0
                })),
                Eb = mb.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === ab ? bb.insertBefore(Eb, bb.firstChild) : bb.appendChild(Eb), Eb.outerHTML = Tb.map((function(bb) {
                return BU(bb)
              })).join("\n"), bb.removeAttribute(Ub), Ab()
            })).catch(Mb)
          }
        } else Ab()
      }))
    }

    function lA(bb) {
      return Promise.all([oA(bb, "::before"), oA(bb, "::after")])
    }

    function tA(bb) {
      return bb.parentNode !== document.head && !~xa.indexOf(bb.tagName.toUpperCase()) && !bb.getAttribute(ya) && (!bb.parentNode || "svg" !== bb.parentNode.tagName)
    }
    var wA = function(bb) {
        return !!bb && ia.some((function(ab) {
          return bb.includes(ab)
        }))
      },
      sA = function(bb) {
        if (!bb) return [];
        var ab = new Set,
          Ub = bb.split(/,(?![^()]*\))/).map((function(bb) {
            return bb.trim()
          }));
        Ub = Ub.flatMap((function(bb) {
          return bb.includes("(") ? bb : bb.split(",").map((function(bb) {
            return bb.trim()
          }))
        }));
        var Ab, Mb = Tb(Ub);
        try {
          for (Mb.s(); !(Ab = Mb.n()).done;) {
            var Eb = Ab.value;
            if (wA(Eb)) {
              var Yb = ia.reduce((function(bb, ab) {
                return bb.replace(ab, "")
              }), Eb);
              "" !== Yb && "*" !== Yb && ab.add(Yb)
            }
          }
        } catch (Bb) {
          Mb.e(Bb)
        } finally {
          Mb.f()
        }
        return ab
      };

    function gA(bb) {
      if (Wb) {
        var ab;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) ab = bb;
        else if (ta.searchPseudoElementsFullScan) ab = bb.querySelectorAll("*");
        else {
          var Ub, Ab = new Set,
            Mb = Tb(document.styleSheets);
          try {
            for (Mb.s(); !(Ub = Mb.n()).done;) {
              var Eb = Ub.value;
              try {
                var Yb, Bb = Tb(Eb.cssRules);
                try {
                  for (Bb.s(); !(Yb = Bb.n()).done;) {
                    var eb, vb = Yb.value,
                      Lb = Tb(sA(vb.selectorText));
                    try {
                      for (Lb.s(); !(eb = Lb.n()).done;) {
                        var Pb = eb.value;
                        Ab.add(Pb)
                      }
                    } catch (jb) {
                      Lb.e(jb)
                    } finally {
                      Lb.f()
                    }
                  }
                } catch (jb) {
                  Bb.e(jb)
                } finally {
                  Bb.f()
                }
              } catch (Rb) {
                ta.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(Eb.href, " (").concat(Rb.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (jb) {
            Mb.e(jb)
          } finally {
            Mb.f()
          }
          if (!Ab.size) return;
          var Xb = Array.from(Ab).join(", ");
          try {
            ab = bb.querySelectorAll(Xb)
          } catch (kb) {}
        }
        return new Promise((function(bb, Ub) {
          var Ab = Va(ab).filter(tA).map(lA),
            Mb = eA("searchPseudoElements");
          DA(), Promise.all(Ab).then((function() {
            Mb(), zA(), bb()
          })).catch((function() {
            Mb(), zA(), Ub()
          }))
        }))
      }
    }
    var CA = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(bb) {
              return bb.pseudoElementsCallback = gA, bb
            }
          }
        },
        provides: function(bb) {
          bb.pseudoElements2svg = function(bb) {
            var ab = bb.node,
              Ub = void 0 === ab ? mb : ab;
            ta.searchPseudoElements && gA(Ub)
          }
        }
      },
      VA = !1,
      OA = function(bb) {
        return bb.toLowerCase().split(" ").reduce((function(bb, ab) {
          var Ub = ab.toLowerCase().split("-"),
            Ab = Ub[0],
            Mb = Ub.slice(1).join("-");
          if (Ab && "h" === Mb) return bb.flipX = !0, bb;
          if (Ab && "v" === Mb) return bb.flipY = !0, bb;
          if (Mb = parseFloat(Mb), isNaN(Mb)) return bb;
          switch (Ab) {
            case "grow":
              bb.size = bb.size + Mb;
              break;
            case "shrink":
              bb.size = bb.size - Mb;
              break;
            case "left":
              bb.x = bb.x - Mb;
              break;
            case "right":
              bb.x = bb.x + Mb;
              break;
            case "up":
              bb.y = bb.y - Mb;
              break;
            case "down":
              bb.y = bb.y + Mb;
              break;
            case "rotate":
              bb.rotate = bb.rotate + Mb
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
      cA = {
        mixout: function() {
          return {
            parse: {
              transform: function(bb) {
                return OA(bb)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(bb, ab) {
              var Ub = ab.getAttribute("data-fa-transform");
              return Ub && (bb.transform = OA(Ub)), bb
            }
          }
        },
        provides: function(bb) {
          bb.generateAbstractTransformGrouping = function(bb) {
            var ab = bb.main,
              Ub = bb.transform,
              Ab = bb.containerWidth,
              Mb = bb.iconWidth,
              Tb = {
                transform: "translate(".concat(Ab / 2, " 256)")
              },
              Eb = "translate(".concat(32 * Ub.x, ", ").concat(32 * Ub.y, ") "),
              Yb = "scale(".concat(Ub.size / 16 * (Ub.flipX ? -1 : 1), ", ").concat(Ub.size / 16 * (Ub.flipY ? -1 : 1), ") "),
              eb = "rotate(".concat(Ub.rotate, " 0 0)"),
              vb = {
                outer: Tb,
                inner: {
                  transform: "".concat(Eb, " ").concat(Yb, " ").concat(eb)
                },
                path: {
                  transform: "translate(".concat(Mb / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: Bb({}, vb.outer),
              children: [{
                tag: "g",
                attributes: Bb({}, vb.inner),
                children: [{
                  tag: ab.icon.tag,
                  children: ab.icon.children,
                  attributes: Bb(Bb({}, ab.icon.attributes), vb.path)
                }]
              }]
            }
          }
        }
      },
      JA = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function nA(bb) {
      var ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return bb.attributes && (bb.attributes.fill || ab) && (bb.attributes.fill = "black"), bb
    }
    var SA = {
        hooks: function() {
          return {
            parseNodeAttributes: function(bb, ab) {
              var Ub = ab.getAttribute("data-fa-mask"),
                Ab = Ub ? QU(Ub.split(" ").map((function(bb) {
                  return bb.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return Ab.prefix || (Ab.prefix = dU()), bb.mask = Ab, bb.maskId = ab.getAttribute("data-fa-mask-id"), bb
            }
          }
        },
        provides: function(bb) {
          bb.generateAbstractMask = function(bb) {
            var ab, Ub = bb.children,
              Ab = bb.attributes,
              Mb = bb.main,
              Tb = bb.mask,
              Eb = bb.maskId,
              Yb = bb.transform,
              eb = Mb.width,
              vb = Mb.icon,
              Lb = Tb.width,
              Pb = Tb.icon,
              Xb = function(bb) {
                var ab = bb.transform,
                  Ub = bb.containerWidth,
                  Ab = bb.iconWidth,
                  Mb = {
                    transform: "translate(".concat(Ub / 2, " 256)")
                  },
                  Tb = "translate(".concat(32 * ab.x, ", ").concat(32 * ab.y, ") "),
                  Eb = "scale(".concat(ab.size / 16 * (ab.flipX ? -1 : 1), ", ").concat(ab.size / 16 * (ab.flipY ? -1 : 1), ") "),
                  Yb = "rotate(".concat(ab.rotate, " 0 0)");
                return {
                  outer: Mb,
                  inner: {
                    transform: "".concat(Tb, " ").concat(Eb, " ").concat(Yb)
                  },
                  path: {
                    transform: "translate(".concat(Ab / 2 * -1, " -256)")
                  }
                }
              }({
                transform: Yb,
                containerWidth: Lb,
                iconWidth: eb
              }),
              jb = {
                tag: "rect",
                attributes: Bb(Bb({}, JA), {}, {
                  fill: "white"
                })
              },
              Rb = vb.children ? {
                children: vb.children.map(nA)
              } : {},
              kb = {
                tag: "g",
                attributes: Bb({}, Xb.inner),
                children: [nA(Bb({
                  tag: vb.tag,
                  attributes: Bb(Bb({}, vb.attributes), Xb.path)
                }, Rb))]
              },
              yb = {
                tag: "g",
                attributes: Bb({}, Xb.outer),
                children: [kb]
              },
              Zb = "mask-".concat(Eb || Ca()),
              Db = "clip-".concat(Eb || Ca()),
              zb = {
                tag: "mask",
                attributes: Bb(Bb({}, JA), {}, {
                  id: Zb,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [jb, yb]
              },
              xb = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: Db
                  },
                  children: (ab = Pb, "g" === ab.tag ? ab.children : [ab])
                }, zb]
              };
            return Ub.push(xb, {
              tag: "rect",
              attributes: Bb({
                fill: "currentColor",
                "clip-path": "url(#".concat(Db, ")"),
                mask: "url(#".concat(Zb, ")")
              }, JA)
            }), {
              children: Ub,
              attributes: Ab
            }
          }
        }
      },
      bM = {
        provides: function(bb) {
          var ab = !1;
          fb.matchMedia && (ab = fb.matchMedia("(prefers-reduced-motion: reduce)").matches), bb.missingIconAbstract = function() {
            var bb = [],
              Ub = {
                fill: "currentColor"
              },
              Ab = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            bb.push({
              tag: "path",
              attributes: Bb(Bb({}, Ub), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var Mb = Bb(Bb({}, Ab), {}, {
                attributeName: "opacity"
              }),
              Tb = {
                tag: "circle",
                attributes: Bb(Bb({}, Ub), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return ab || Tb.children.push({
              tag: "animate",
              attributes: Bb(Bb({}, Ab), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: Bb(Bb({}, Mb), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), bb.push(Tb), bb.push({
              tag: "path",
              attributes: Bb(Bb({}, Ub), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: ab ? [] : [{
                tag: "animate",
                attributes: Bb(Bb({}, Mb), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), ab || bb.push({
              tag: "path",
              attributes: Bb(Bb({}, Ub), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: Bb(Bb({}, Mb), {}, {
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
    ! function(bb, ab) {
      var Ub = ab.mixoutsTo;
      KU = bb, oU = {}, Object.keys(lU).forEach((function(bb) {
        -1 === tU.indexOf(bb) && delete lU[bb]
      })), KU.forEach((function(bb) {
        var ab = bb.mixout ? bb.mixout() : {};
        if (Object.keys(ab).forEach((function(bb) {
            "function" === typeof ab[bb] && (Ub[bb] = ab[bb]), "object" === Pb(ab[bb]) && Object.keys(ab[bb]).forEach((function(Ab) {
              Ub[bb] || (Ub[bb] = {}), Ub[bb][Ab] = ab[bb][Ab]
            }))
          })), bb.hooks) {
          var Ab = bb.hooks();
          Object.keys(Ab).forEach((function(bb) {
            oU[bb] || (oU[bb] = []), oU[bb].push(Ab[bb])
          }))
        }
        bb.provides && bb.provides(lU)
      }))
    }([UU, dA, FA, hA, GA, CA, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              DA(), VA = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            iA(wU("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            xA && xA.disconnect()
          },
          watch: function(bb) {
            var ab = bb.observeMutationsRoot;
            VA ? zA() : iA(wU("mutationObserverCallbacks", {
              observeMutationsRoot: ab
            }))
          }
        }
      }
    }, cA, SA, bM, {
      hooks: function() {
        return {
          parseNodeAttributes: function(bb, ab) {
            var Ub = ab.getAttribute("data-fa-symbol"),
              Ab = null !== Ub && ("" === Ub || Ub);
            return bb.symbol = Ab, bb
          }
        }
      }
    }], {
      mixoutsTo: cU
    });
    var aM = cU.noAuto,
      UM = cU.config,
      AM = cU.library,
      MM = cU.dom,
      TM = cU.parse,
      EM = cU.findIconDefinition,
      YM = cU.toHtml,
      BM = cU.icon,
      eM = cU.layer,
      vM = cU.text,
      LM = cU.counter
  },
  6326: bb => {
    bb.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);