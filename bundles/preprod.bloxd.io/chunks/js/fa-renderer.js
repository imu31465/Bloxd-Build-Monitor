/*! For license information please see 7jvyee.fa-renderer.60f4c52e.chunk.js.LICENSE.txt */
export const id = 30;
export const ids = [30];
export const modules = {
  5946: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      FontAwesomeIcon: () => Gy
    });
    var Uy = Wy(5940),
      hy = Wy(4172),
      fy = Wy.n(hy),
      Zy = Wy(55);

    function cb(yb, bb) {
      (null == bb || bb > yb.length) && (bb = yb.length);
      for (var Wy = 0, Uy = Array(bb); Wy < bb; Wy++) Uy[Wy] = yb[Wy];
      return Uy
    }

    function Py(yb, bb, Wy) {
      return (bb = function(yb) {
        var bb = function(yb, bb) {
          if ("object" != typeof yb || !yb) return yb;
          var Wy = yb[Symbol.toPrimitive];
          if (void 0 !== Wy) {
            var Uy = Wy.call(yb, bb || "default");
            if ("object" != typeof Uy) return Uy;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === bb ? String : Number)(yb)
        }(yb, "string");
        return "symbol" == typeof bb ? bb : bb + ""
      }(bb)) in yb ? Object.defineProperty(yb, bb, {
        value: Wy,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : yb[bb] = Wy, yb
    }

    function oy(yb, bb) {
      var Wy = Object.keys(yb);
      if (Object.getOwnPropertySymbols) {
        var Uy = Object.getOwnPropertySymbols(yb);
        bb && (Uy = Uy.filter((function(bb) {
          return Object.getOwnPropertyDescriptor(yb, bb).enumerable
        }))), Wy.push.apply(Wy, Uy)
      }
      return Wy
    }

    function By(yb) {
      for (var bb = 1; bb < arguments.length; bb++) {
        var Wy = null != arguments[bb] ? arguments[bb] : {};
        bb % 2 ? oy(Object(Wy), !0).forEach((function(bb) {
          Py(yb, bb, Wy[bb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(yb, Object.getOwnPropertyDescriptors(Wy)) : oy(Object(Wy)).forEach((function(bb) {
          Object.defineProperty(yb, bb, Object.getOwnPropertyDescriptor(Wy, bb))
        }))
      }
      return yb
    }

    function Ky(yb, bb) {
      return function(yb) {
        if (Array.isArray(yb)) return yb
      }(yb) || function(yb, bb) {
        var Wy = null == yb ? null : "undefined" != typeof Symbol && yb[Symbol.iterator] || yb["@@iterator"];
        if (null != Wy) {
          var Uy, hy, fy, Zy, cb = [],
            Py = !0,
            oy = !1;
          try {
            if (fy = (Wy = Wy.call(yb)).next, 0 === bb) {
              if (Object(Wy) !== Wy) return;
              Py = !1
            } else
              for (; !(Py = (Uy = fy.call(Wy)).done) && (cb.push(Uy.value), cb.length !== bb); Py = !0);
          } catch (yb) {
            oy = !0, hy = yb
          } finally {
            try {
              if (!Py && null != Wy.return && (Zy = Wy.return(), Object(Zy) !== Zy)) return
            } finally {
              if (oy) throw hy
            }
          }
          return cb
        }
      }(yb, bb) || sy(yb, bb) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ey(yb) {
      return function(yb) {
        if (Array.isArray(yb)) return cb(yb)
      }(yb) || function(yb) {
        if ("undefined" != typeof Symbol && null != yb[Symbol.iterator] || null != yb["@@iterator"]) return Array.from(yb)
      }(yb) || sy(yb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qb(yb) {
      return qb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(yb) {
        return typeof yb
      } : function(yb) {
        return yb && "function" == typeof Symbol && yb.constructor === Symbol && yb !== Symbol.prototype ? "symbol" : typeof yb
      }, qb(yb)
    }

    function sy(yb, bb) {
      if (yb) {
        if ("string" == typeof yb) return cb(yb, bb);
        var Wy = {}.toString.call(yb).slice(8, -1);
        return "Object" === Wy && yb.constructor && (Wy = yb.constructor.name), "Map" === Wy || "Set" === Wy ? Array.from(yb) : "Arguments" === Wy || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Wy) ? cb(yb, bb) : void 0
      }
    }
    var Sy;
    try {
      var Ey = Wy(5948);
      Sy = Ey.version
    } catch (Ry) {
      Sy = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function ly(yb) {
      var bb = yb.beat,
        Wy = yb.fade,
        Uy = yb.beatFade,
        hy = yb.bounce,
        fy = yb.shake,
        Zy = yb.flash,
        cb = yb.spin,
        oy = yb.spinPulse,
        By = yb.spinReverse,
        ey = yb.pulse,
        qb = yb.fixedWidth,
        sy = yb.inverse,
        Ey = yb.border,
        ly = yb.listItem,
        mb = yb.flip,
        Cy = yb.size,
        Ty = yb.rotation,
        Vy = yb.pull,
        Jy = yb.swapOpacity,
        gb = yb.rotateBy,
        Gy = yb.widthAuto,
        Oy = function(yb, bb) {
          for (var Wy = Ky(yb.split("-"), 2), Uy = Wy[0], hy = Wy[1], fy = Ky(bb.split("-"), 2), Zy = fy[0], cb = fy[1], Py = Uy.split("."), oy = Zy.split("."), By = 0; By < Math.max(Py.length, oy.length); By++) {
            var ey = Py[By] || "0",
              qb = oy[By] || "0",
              sy = parseInt(ey, 10),
              Sy = parseInt(qb, 10);
            if (sy !== Sy) return sy > Sy
          }
          for (var Ey = 0; Ey < Math.max(Py.length, oy.length); Ey++) {
            var ly = Py[Ey] || "0",
              mb = oy[Ey] || "0";
            if (ly !== mb && ly.length !== mb.length) return ly.length < mb.length
          }
          return !(hy && !cb)
        }(Sy, "7.0.0"),
        Ry = Py(Py(Py(Py(Py(Py({
          "fa-beat": bb,
          "fa-fade": Wy,
          "fa-beat-fade": Uy,
          "fa-bounce": hy,
          "fa-shake": fy,
          "fa-flash": Zy,
          "fa-spin": cb,
          "fa-spin-reverse": By,
          "fa-spin-pulse": oy,
          "fa-pulse": ey,
          "fa-fw": qb,
          "fa-inverse": sy,
          "fa-border": Ey,
          "fa-li": ly,
          "fa-flip": !0 === mb,
          "fa-flip-horizontal": "horizontal" === mb || "both" === mb,
          "fa-flip-vertical": "vertical" === mb || "both" === mb
        }, "fa-".concat(Cy), "undefined" !== typeof Cy && null !== Cy), "fa-rotate-".concat(Ty), "undefined" !== typeof Ty && null !== Ty && 0 !== Ty), "fa-pull-".concat(Vy), "undefined" !== typeof Vy && null !== Vy), "fa-swap-opacity", Jy), "fa-rotate-by", Oy && gb), "fa-width-auto", Oy && Gy);
      return Object.keys(Ry).map((function(yb) {
        return Ry[yb] ? yb : null
      })).filter((function(yb) {
        return yb
      }))
    }

    function mb(yb) {
      return bb = yb, (bb -= 0) === bb ? yb : (yb = yb.replace(/[\-_\s]+(.)?/g, (function(yb, bb) {
        return bb ? bb.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + yb.substr(1);
      var bb
    }
    var Cy = ["style"];
    var Ty = !1;
    try {
      Ty = !0
    } catch (Ry) {}

    function Vy(yb) {
      return yb && "object" === qb(yb) && yb.prefix && yb.iconName && yb.icon ? yb : Uy.parse.icon ? Uy.parse.icon(yb) : null === yb ? null : yb && "object" === qb(yb) && yb.prefix && yb.iconName ? yb : Array.isArray(yb) && 2 === yb.length ? {
        prefix: yb[0],
        iconName: yb[1]
      } : "string" === typeof yb ? {
        prefix: "fas",
        iconName: yb
      } : void 0
    }

    function Jy(yb, bb) {
      return Array.isArray(bb) && bb.length > 0 || !Array.isArray(bb) && bb ? Py({}, yb, bb) : {}
    }
    var gb = {
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
      Gy = Zy.forwardRef((function(yb, bb) {
        var Wy = By(By({}, gb), yb),
          hy = Wy.icon,
          fy = Wy.mask,
          Zy = Wy.symbol,
          cb = Wy.className,
          Py = Wy.title,
          oy = Wy.titleId,
          Ky = Wy.maskId,
          qb = Vy(hy),
          sy = Jy("classes", [].concat(ey(ly(Wy)), ey((cb || "").split(" ")))),
          Sy = Jy("transform", "string" === typeof Wy.transform ? Uy.parse.transform(Wy.transform) : Wy.transform),
          Ey = Jy("mask", Vy(fy)),
          mb = (0, Uy.icon)(qb, By(By(By(By({}, sy), Sy), Ey), {}, {
            symbol: Zy,
            title: Py,
            titleId: oy,
            maskId: Ky
          }));
        if (!mb) return function() {
          var yb;
          !Ty && console && "function" === typeof console.error && (yb = console).error.apply(yb, arguments)
        }("Could not find icon", qb), null;
        var Cy = mb.abstract,
          Gy = {
            ref: bb
          };
        return Object.keys(Wy).forEach((function(yb) {
          gb.hasOwnProperty(yb) || (Gy[yb] = Wy[yb])
        })), Oy(Cy[0], Gy)
      }));
    Gy.displayName = "FontAwesomeIcon", Gy.propTypes = {
      beat: fy().bool,
      border: fy().bool,
      beatFade: fy().bool,
      bounce: fy().bool,
      className: fy().string,
      fade: fy().bool,
      flash: fy().bool,
      mask: fy().oneOfType([fy().object, fy().array, fy().string]),
      maskId: fy().string,
      fixedWidth: fy().bool,
      inverse: fy().bool,
      flip: fy().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: fy().oneOfType([fy().object, fy().array, fy().string]),
      listItem: fy().bool,
      pull: fy().oneOf(["right", "left"]),
      pulse: fy().bool,
      rotation: fy().oneOf([0, 90, 180, 270]),
      rotateBy: fy().bool,
      shake: fy().bool,
      size: fy().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: fy().bool,
      spinPulse: fy().bool,
      spinReverse: fy().bool,
      symbol: fy().oneOfType([fy().bool, fy().string]),
      title: fy().string,
      titleId: fy().string,
      transform: fy().oneOfType([fy().string, fy().object]),
      swapOpacity: fy().bool,
      widthAuto: fy().bool
    };
    var Oy = function yb(bb, Wy) {
      var Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof Wy) return Wy;
      var hy = (Wy.children || []).map((function(Wy) {
          return yb(bb, Wy)
        })),
        fy = Object.keys(Wy.attributes || {}).reduce((function(yb, bb) {
          var Uy = Wy.attributes[bb];
          switch (bb) {
            case "class":
              yb.attrs.className = Uy, delete Wy.attributes.class;
              break;
            case "style":
              yb.attrs.style = Uy.split(";").map((function(yb) {
                return yb.trim()
              })).filter((function(yb) {
                return yb
              })).reduce((function(yb, bb) {
                var Wy, Uy = bb.indexOf(":"),
                  hy = mb(bb.slice(0, Uy)),
                  fy = bb.slice(Uy + 1).trim();
                return hy.startsWith("webkit") ? yb[(Wy = hy, Wy.charAt(0).toUpperCase() + Wy.slice(1))] = fy : yb[hy] = fy, yb
              }), {});
              break;
            default:
              0 === bb.indexOf("aria-") || 0 === bb.indexOf("data-") ? yb.attrs[bb.toLowerCase()] = Uy : yb.attrs[mb(bb)] = Uy
          }
          return yb
        }), {
          attrs: {}
        }),
        Zy = Uy.style,
        cb = void 0 === Zy ? {} : Zy,
        Py = function(yb, bb) {
          if (null == yb) return {};
          var Wy, Uy, hy = function(yb, bb) {
            if (null == yb) return {};
            var Wy = {};
            for (var Uy in yb)
              if ({}.hasOwnProperty.call(yb, Uy)) {
                if (-1 !== bb.indexOf(Uy)) continue;
                Wy[Uy] = yb[Uy]
              } return Wy
          }(yb, bb);
          if (Object.getOwnPropertySymbols) {
            var fy = Object.getOwnPropertySymbols(yb);
            for (Uy = 0; Uy < fy.length; Uy++) Wy = fy[Uy], -1 === bb.indexOf(Wy) && {}.propertyIsEnumerable.call(yb, Wy) && (hy[Wy] = yb[Wy])
          }
          return hy
        }(Uy, Cy);
      return fy.attrs.style = By(By({}, fy.attrs.style), cb), bb.apply(void 0, [Wy.tag, By(By({}, fy.attrs), Py)].concat(ey(hy)))
    }.bind(null, Zy.createElement)
  },
  4175: (yb, bb, Wy) => {
    var Uy = Wy(4183);

    function hy() {}

    function fy() {}
    fy.resetWarningCache = hy, yb.exports = function() {
      function yb(yb, bb, Wy, hy, fy, Zy) {
        if (Zy !== Uy) {
          var cb = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw cb.name = "Invariant Violation", cb
        }
      }

      function bb() {
        return yb
      }
      yb.isRequired = yb;
      var Wy = {
        array: yb,
        bigint: yb,
        bool: yb,
        func: yb,
        number: yb,
        object: yb,
        string: yb,
        symbol: yb,
        any: yb,
        arrayOf: bb,
        element: yb,
        elementType: yb,
        instanceOf: bb,
        node: yb,
        objectOf: bb,
        oneOf: bb,
        oneOfType: bb,
        shape: bb,
        exact: bb,
        checkPropTypes: fy,
        resetWarningCache: hy
      };
      return Wy.PropTypes = Wy, Wy
    }
  },
  4172: (yb, bb, Wy) => {
    yb.exports = Wy(4175)()
  },
  4183: yb => {
    yb.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5940: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      (null == bb || bb > yb.length) && (bb = yb.length);
      for (var Wy = 0, Uy = Array(bb); Wy < bb; Wy++) Uy[Wy] = yb[Wy];
      return Uy
    }

    function hy(yb, bb) {
      for (var Wy = 0; Wy < bb.length; Wy++) {
        var Uy = bb[Wy];
        Uy.enumerable = Uy.enumerable || !1, Uy.configurable = !0, "value" in Uy && (Uy.writable = !0), Object.defineProperty(yb, Ky(Uy.key), Uy)
      }
    }

    function fy(yb, bb) {
      var Wy = "undefined" != typeof Symbol && yb[Symbol.iterator] || yb["@@iterator"];
      if (!Wy) {
        if (Array.isArray(yb) || (Wy = qb(yb)) || bb && yb && "number" == typeof yb.length) {
          Wy && (yb = Wy);
          var Uy = 0,
            hy = function() {};
          return {
            s: hy,
            n: function() {
              return Uy >= yb.length ? {
                done: !0
              } : {
                done: !1,
                value: yb[Uy++]
              }
            },
            e: function(yb) {
              throw yb
            },
            f: hy
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var fy, Zy = !0,
        cb = !1;
      return {
        s: function() {
          Wy = Wy.call(yb)
        },
        n: function() {
          var yb = Wy.next();
          return Zy = yb.done, yb
        },
        e: function(yb) {
          cb = !0, fy = yb
        },
        f: function() {
          try {
            Zy || null == Wy.return || Wy.return()
          } finally {
            if (cb) throw fy
          }
        }
      }
    }

    function Zy(yb, bb, Wy) {
      return (bb = Ky(bb)) in yb ? Object.defineProperty(yb, bb, {
        value: Wy,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : yb[bb] = Wy, yb
    }

    function cb(yb, bb) {
      var Wy = Object.keys(yb);
      if (Object.getOwnPropertySymbols) {
        var Uy = Object.getOwnPropertySymbols(yb);
        bb && (Uy = Uy.filter((function(bb) {
          return Object.getOwnPropertyDescriptor(yb, bb).enumerable
        }))), Wy.push.apply(Wy, Uy)
      }
      return Wy
    }

    function Py(yb) {
      for (var bb = 1; bb < arguments.length; bb++) {
        var Wy = null != arguments[bb] ? arguments[bb] : {};
        bb % 2 ? cb(Object(Wy), !0).forEach((function(bb) {
          Zy(yb, bb, Wy[bb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(yb, Object.getOwnPropertyDescriptors(Wy)) : cb(Object(Wy)).forEach((function(bb) {
          Object.defineProperty(yb, bb, Object.getOwnPropertyDescriptor(Wy, bb))
        }))
      }
      return yb
    }

    function oy(yb, bb) {
      return function(yb) {
        if (Array.isArray(yb)) return yb
      }(yb) || function(yb, bb) {
        var Wy = null == yb ? null : "undefined" != typeof Symbol && yb[Symbol.iterator] || yb["@@iterator"];
        if (null != Wy) {
          var Uy, hy, fy, Zy, cb = [],
            Py = !0,
            oy = !1;
          try {
            if (fy = (Wy = Wy.call(yb)).next, 0 === bb) {
              if (Object(Wy) !== Wy) return;
              Py = !1
            } else
              for (; !(Py = (Uy = fy.call(Wy)).done) && (cb.push(Uy.value), cb.length !== bb); Py = !0);
          } catch (yb) {
            oy = !0, hy = yb
          } finally {
            try {
              if (!Py && null != Wy.return && (Zy = Wy.return(), Object(Zy) !== Zy)) return
            } finally {
              if (oy) throw hy
            }
          }
          return cb
        }
      }(yb, bb) || qb(yb, bb) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function By(yb) {
      return function(yb) {
        if (Array.isArray(yb)) return Uy(yb)
      }(yb) || function(yb) {
        if ("undefined" != typeof Symbol && null != yb[Symbol.iterator] || null != yb["@@iterator"]) return Array.from(yb)
      }(yb) || qb(yb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ky(yb) {
      var bb = function(yb, bb) {
        if ("object" != typeof yb || !yb) return yb;
        var Wy = yb[Symbol.toPrimitive];
        if (void 0 !== Wy) {
          var Uy = Wy.call(yb, bb || "default");
          if ("object" != typeof Uy) return Uy;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === bb ? String : Number)(yb)
      }(yb, "string");
      return "symbol" == typeof bb ? bb : bb + ""
    }

    function ey(yb) {
      return ey = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(yb) {
        return typeof yb
      } : function(yb) {
        return yb && "function" == typeof Symbol && yb.constructor === Symbol && yb !== Symbol.prototype ? "symbol" : typeof yb
      }, ey(yb)
    }

    function qb(yb, bb) {
      if (yb) {
        if ("string" == typeof yb) return Uy(yb, bb);
        var Wy = {}.toString.call(yb).slice(8, -1);
        return "Object" === Wy && yb.constructor && (Wy = yb.constructor.name), "Map" === Wy || "Set" === Wy ? Array.from(yb) : "Arguments" === Wy || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Wy) ? Uy(yb, bb) : void 0
      }
    }
    Wy.r(bb), Wy.d(bb, {
      api: () => IW,
      config: () => Wh,
      counter: () => Kh,
      dom: () => hh,
      findIconDefinition: () => Zh,
      icon: () => Ph,
      layer: () => oh,
      library: () => Uh,
      noAuto: () => bf,
      parse: () => fh,
      text: () => Bh,
      toHtml: () => cf
    });
    var sy = function() {},
      Sy = {},
      Ey = {},
      ly = null,
      mb = {
        mark: sy,
        measure: sy
      };
    try {
      "undefined" !== typeof window && (Sy = window), "undefined" !== typeof document && (Ey = document), "undefined" !== typeof MutationObserver && (ly = MutationObserver), "undefined" !== typeof performance && (mb = performance)
    } catch (Dy) {}
    var Cy, Ty, Vy = (Sy.navigator || {}).userAgent,
      Jy = void 0 === Vy ? "" : Vy,
      gb = Sy,
      Gy = Ey,
      Oy = ly,
      Ry = mb,
      vb = (gb.document, !!Gy.documentElement && !!Gy.head && "function" === typeof Gy.addEventListener && "function" === typeof Gy.createElement),
      ib = ~Jy.indexOf("MSIE") || ~Jy.indexOf("Trident/"),
      My = {
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
      Yy = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      Xy = "classic",
      ny = "duotone",
      uy = "sharp",
      rb = "sharp-duotone",
      Hy = "chisel",
      ab = "etch",
      Fy = "graphite",
      py = "jelly",
      Ly = "jelly-duo",
      Qy = "jelly-fill",
      jb = "notdog",
      Dy = "notdog-duo",
      tb = "slab",
      wy = "slab-press",
      kb = "thumbprint",
      Ny = "utility",
      zb = "utility-duo",
      Iy = "utility-fill",
      xb = "whiteboard",
      Ay = [Xy, ny, uy, rb, Hy, ab, Fy, py, Ly, Qy, jb, Dy, tb, wy, kb, Ny, zb, Iy, xb],
      dy = (Zy(Zy(Zy(Zy(Zy(Zy(Zy(Zy(Zy(Zy(Cy = {}, Xy, "Classic"), ny, "Duotone"), uy, "Sharp"), rb, "Sharp Duotone"), Hy, "Chisel"), ab, "Etch"), Fy, "Graphite"), py, "Jelly"), Ly, "Jelly Duo"), Qy, "Jelly Fill"), Zy(Zy(Zy(Zy(Zy(Zy(Zy(Zy(Zy(Cy, jb, "Notdog"), Dy, "Notdog Duo"), tb, "Slab"), wy, "Slab Press"), kb, "Thumbprint"), Ny, "Utility"), zb, "Utility Duo"), Iy, "Utility Fill"), xb, "Whiteboard"), new Map([
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
      yW = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      bW = {
        fak: "kit",
        "fa-kit": "kit"
      },
      Wb = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      Ub = (Zy(Zy({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      hb = {
        "kit-duotone": "fakd"
      },
      fb = "duotone-group",
      Zb = "swap-opacity",
      cW = "primary",
      Pb = "secondary",
      ob = (Zy(Zy(Zy(Zy(Zy(Zy(Zy(Zy(Zy(Zy(Ty = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), Zy(Zy(Zy(Zy(Zy(Zy(Zy(Zy(Zy(Ty, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), Zy(Zy({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      Bb = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      Kb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      eb = Kb.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      qW = [].concat(By(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", fb, Zb, cW, Pb]).concat(Kb.map((function(yb) {
        return "".concat(yb, "x")
      }))).concat(eb.map((function(yb) {
        return "w-".concat(yb)
      }))),
      sb = "___FONT_AWESOME___",
      Sb = "svg-inline--fa",
      Eb = "data-fa-i2svg",
      lb = "data-fa-pseudo-element",
      mW = "data-prefix",
      Cb = "data-icon",
      Tb = "fontawesome-i2svg",
      Vb = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      Jb = ["::before", "::after", ":before", ":after"],
      gW = function() {
        try {
          return !0
        } catch (yb) {
          return !1
        }
      }();

    function Gb(yb) {
      return new Proxy(yb, {
        get: function(yb, bb) {
          return bb in yb ? yb[bb] : yb[Xy]
        }
      })
    }
    var Ob = Py({}, My);
    Ob[Xy] = Py(Py(Py(Py({}, {
      "fa-duotone": "duotone"
    }), My[Xy]), bW), Wb);
    var Rb = Gb(Ob),
      vW = Py({}, {
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
    vW[Xy] = Py(Py(Py(Py({}, {
      duotone: "fad"
    }), vW[Xy]), Ub), hb);
    var iW = Gb(vW),
      Mb = Py({}, ob);
    Mb[Xy] = Py(Py({}, Mb[Xy]), {
      fak: "fa-kit"
    });
    var Yb = Gb(Mb),
      Xb = Py({}, {
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
    Xb[Xy] = Py(Py({}, Xb[Xy]), {
      "fa-kit": "fak"
    });
    Gb(Xb);
    var nb = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      ub = "fa-layers-text",
      rW = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Hb = (Gb(Py({}, {
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
      aW = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      Fb = [].concat(By(["kit"]), By(qW)),
      pb = gb.FontAwesomeConfig || {};
    if (Gy && "function" === typeof Gy.querySelector) {
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
      ].forEach((function(yb) {
        var bb = oy(yb, 2),
          Wy = bb[0],
          Uy = bb[1],
          hy = function(yb) {
            return "" === yb || "false" !== yb && ("true" === yb || yb)
          }(function(yb) {
            var bb = Gy.querySelector("script[" + yb + "]");
            if (bb) return bb.getAttribute(yb)
          }(Wy));
        void 0 !== hy && null !== hy && (pb[Uy] = hy)
      }))
    }
    var Lb = {
      styleDefault: "solid",
      familyDefault: Xy,
      cssPrefix: "fa",
      replacementClass: Sb,
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
    pb.familyPrefix && (pb.cssPrefix = pb.familyPrefix);
    var Qb = Py(Py({}, Lb), pb);
    Qb.autoReplaceSvg || (Qb.observeMutations = !1);
    var jW = {};
    Object.keys(Lb).forEach((function(yb) {
      Object.defineProperty(jW, yb, {
        enumerable: !0,
        set: function(bb) {
          Qb[yb] = bb, Db.forEach((function(yb) {
            return yb(jW)
          }))
        },
        get: function() {
          return Qb[yb]
        }
      })
    })), Object.defineProperty(jW, "familyPrefix", {
      enumerable: !0,
      set: function(yb) {
        Qb.cssPrefix = yb, Db.forEach((function(yb) {
          return yb(jW)
        }))
      },
      get: function() {
        return Qb.cssPrefix
      }
    }), gb.FontAwesomeConfig = jW;
    var Db = [];
    var tW = 16,
      wb = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function kW() {
      for (var yb = 12, bb = ""; yb-- > 0;) bb += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return bb
    }

    function Nb(yb) {
      for (var bb = [], Wy = (yb || []).length >>> 0; Wy--;) bb[Wy] = yb[Wy];
      return bb
    }

    function zW(yb) {
      return yb.classList ? Nb(yb.classList) : (yb.getAttribute("class") || "").split(" ").filter((function(yb) {
        return yb
      }))
    }

    function Ib(yb) {
      return "".concat(yb).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function xW(yb) {
      return Object.keys(yb || {}).reduce((function(bb, Wy) {
        return bb + "".concat(Wy, ": ").concat(yb[Wy].trim(), ";")
      }), "")
    }

    function Ab(yb) {
      return yb.size !== wb.size || yb.x !== wb.x || yb.y !== wb.y || yb.rotate !== wb.rotate || yb.flipX || yb.flipY
    }

    function db() {
      var yb = "fa",
        bb = Sb,
        Wy = jW.cssPrefix,
        Uy = jW.replacementClass,
        hy = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (Wy !== yb || Uy !== bb) {
        var fy = new RegExp("\\.".concat(yb, "\\-"), "g"),
          Zy = new RegExp("\\--".concat(yb, "\\-"), "g"),
          cb = new RegExp("\\.".concat(bb), "g");
        hy = hy.replace(fy, ".".concat(Wy, "-")).replace(Zy, "--".concat(Wy, "-")).replace(cb, ".".concat(Uy))
      }
      return hy
    }
    var yU = !1;

    function bU() {
      jW.autoAddCss && !yU && (! function(yb) {
        if (yb && vb) {
          var bb = Gy.createElement("style");
          bb.setAttribute("type", "text/css"), bb.innerHTML = yb;
          for (var Wy = Gy.head.childNodes, Uy = null, hy = Wy.length - 1; hy > -1; hy--) {
            var fy = Wy[hy],
              Zy = (fy.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(Zy) > -1 && (Uy = fy)
          }
          Gy.head.insertBefore(bb, Uy)
        }
      }(db()), yU = !0)
    }
    var WW = {
        mixout: function() {
          return {
            dom: {
              css: db,
              insertCss: bU
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              bU()
            },
            beforeI2svg: function() {
              bU()
            }
          }
        }
      },
      UW = gb || {};
    UW[sb] || (UW[sb] = {}), UW[sb].styles || (UW[sb].styles = {}), UW[sb].hooks || (UW[sb].hooks = {}), UW[sb].shims || (UW[sb].shims = []);
    var hW = UW[sb],
      fW = [],
      ZW = function() {
        Gy.removeEventListener("DOMContentLoaded", ZW), cU = 1, fW.map((function(yb) {
          return yb()
        }))
      },
      cU = !1;

    function PW(yb) {
      var bb = yb.tag,
        Wy = yb.attributes,
        Uy = void 0 === Wy ? {} : Wy,
        hy = yb.children,
        fy = void 0 === hy ? [] : hy;
      return "string" === typeof yb ? Ib(yb) : "<".concat(bb, " ").concat(function(yb) {
        return Object.keys(yb || {}).reduce((function(bb, Wy) {
          return bb + "".concat(Wy, '="').concat(Ib(yb[Wy]), '" ')
        }), "").trim()
      }(Uy), ">").concat(fy.map(PW).join(""), "</").concat(bb, ">")
    }

    function oW(yb, bb, Wy) {
      if (yb && yb[bb] && yb[bb][Wy]) return {
        prefix: bb,
        iconName: Wy,
        icon: yb[bb][Wy]
      }
    }
    vb && ((cU = (Gy.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Gy.readyState)) || Gy.addEventListener("DOMContentLoaded", ZW));
    var BW = function(yb, bb, Wy, Uy) {
      var hy, fy, Zy, cb = Object.keys(yb),
        Py = cb.length,
        oy = void 0 !== Uy ? function(yb, bb) {
          return function(Wy, Uy, hy, fy) {
            return yb.call(bb, Wy, Uy, hy, fy)
          }
        }(bb, Uy) : bb;
      for (void 0 === Wy ? (hy = 1, Zy = yb[cb[0]]) : (hy = 0, Zy = Wy); hy < Py; hy++) Zy = oy(Zy, yb[fy = cb[hy]], fy, yb);
      return Zy
    };

    function KW(yb) {
      return 1 !== By(yb).length ? null : yb.codePointAt(0).toString(16)
    }

    function eW(yb) {
      return Object.keys(yb).reduce((function(bb, Wy) {
        var Uy = yb[Wy];
        return !!Uy.icon ? bb[Uy.iconName] = Uy.icon : bb[Wy] = Uy, bb
      }), {})
    }

    function qU(yb, bb) {
      var Wy = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        Uy = void 0 !== Wy && Wy,
        hy = eW(bb);
      "function" !== typeof hW.hooks.addPack || Uy ? hW.styles[yb] = Py(Py({}, hW.styles[yb] || {}), hy) : hW.hooks.addPack(yb, eW(bb)), "fas" === yb && qU("fa", bb)
    }
    var sW = hW.styles,
      SW = hW.shims,
      EW = Object.keys(Yb),
      lW = EW.reduce((function(yb, bb) {
        return yb[bb] = Object.keys(Yb[bb]), yb
      }), {}),
      mU = null,
      CW = {},
      TW = {},
      VW = {},
      JW = {},
      gU = {};

    function GW(yb, bb) {
      var Wy, Uy = bb.split("-"),
        hy = Uy[0],
        fy = Uy.slice(1).join("-");
      return hy !== yb || "" === fy || (Wy = fy, ~Fb.indexOf(Wy)) ? null : fy
    }
    var OW, RW = function() {
      var yb = function(yb) {
        return BW(sW, (function(bb, Wy, Uy) {
          return bb[Uy] = BW(Wy, yb, {}), bb
        }), {})
      };
      CW = yb((function(yb, bb, Wy) {
        (bb[3] && (yb[bb[3]] = Wy), bb[2]) && bb[2].filter((function(yb) {
          return "number" === typeof yb
        })).forEach((function(bb) {
          yb[bb.toString(16)] = Wy
        }));
        return yb
      })), TW = yb((function(yb, bb, Wy) {
        (yb[Wy] = Wy, bb[2]) && bb[2].filter((function(yb) {
          return "string" === typeof yb
        })).forEach((function(bb) {
          yb[bb] = Wy
        }));
        return yb
      })), gU = yb((function(yb, bb, Wy) {
        var Uy = bb[2];
        return yb[Wy] = Wy, Uy.forEach((function(bb) {
          yb[bb] = Wy
        })), yb
      }));
      var bb = "far" in sW || jW.autoFetchSvg,
        Wy = BW(SW, (function(yb, Wy) {
          var Uy = Wy[0],
            hy = Wy[1],
            fy = Wy[2];
          return "far" !== hy || bb || (hy = "fas"), "string" === typeof Uy && (yb.names[Uy] = {
            prefix: hy,
            iconName: fy
          }), "number" === typeof Uy && (yb.unicodes[Uy.toString(16)] = {
            prefix: hy,
            iconName: fy
          }), yb
        }), {
          names: {},
          unicodes: {}
        });
      VW = Wy.names, JW = Wy.unicodes, mU = XW(jW.styleDefault, {
        family: jW.familyDefault
      })
    };

    function vU(yb, bb) {
      return (CW[yb] || {})[bb]
    }

    function iU(yb, bb) {
      return (gU[yb] || {})[bb]
    }

    function MW(yb) {
      return VW[yb] || {
        prefix: null,
        iconName: null
      }
    }

    function YW() {
      return mU
    }
    OW = function(yb) {
      mU = XW(yb.styleDefault, {
        family: jW.familyDefault
      })
    }, Db.push(OW), RW();

    function XW(yb) {
      var bb = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        Wy = void 0 === bb ? Xy : bb,
        Uy = Rb[Wy][yb];
      if (Wy === ny && !yb) return "fad";
      var hy = iW[Wy][yb] || iW[Wy][Uy],
        fy = yb in hW.styles ? yb : null;
      return hy || fy || null
    }

    function nW(yb) {
      return yb.sort().filter((function(yb, bb, Wy) {
        return Wy.indexOf(yb) === bb
      }))
    }
    var uW = Bb.concat(yW);

    function rU(yb) {
      var bb = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        Wy = void 0 !== bb && bb,
        Uy = null,
        hy = nW(yb.filter((function(yb) {
          return uW.includes(yb)
        }))),
        fy = nW(yb.filter((function(yb) {
          return !uW.includes(yb)
        }))),
        Zy = oy(hy.filter((function(yb) {
          return Uy = yb, !Yy.includes(yb)
        })), 1)[0],
        cb = void 0 === Zy ? null : Zy,
        By = function(yb) {
          var bb = Xy,
            Wy = EW.reduce((function(yb, bb) {
              return yb[bb] = "".concat(jW.cssPrefix, "-").concat(bb), yb
            }), {});
          return Ay.forEach((function(Uy) {
            (yb.includes(Wy[Uy]) || yb.some((function(yb) {
              return lW[Uy].includes(yb)
            }))) && (bb = Uy)
          })), bb
        }(hy),
        Ky = Py(Py({}, function(yb) {
          var bb = [],
            Wy = null;
          return yb.forEach((function(yb) {
            var Uy = GW(jW.cssPrefix, yb);
            Uy ? Wy = Uy : yb && bb.push(yb)
          })), {
            iconName: Wy,
            rest: bb
          }
        }(fy)), {}, {
          prefix: XW(cb, {
            family: By
          })
        });
      return Py(Py(Py({}, Ky), function(yb) {
        var bb = yb.values,
          Wy = yb.family,
          Uy = yb.canonical,
          hy = yb.givenPrefix,
          fy = void 0 === hy ? "" : hy,
          Zy = yb.styles,
          cb = void 0 === Zy ? {} : Zy,
          Py = yb.config,
          oy = void 0 === Py ? {} : Py,
          By = Wy === ny,
          Ky = bb.includes("fa-duotone") || bb.includes("fad"),
          ey = "duotone" === oy.familyDefault,
          qb = "fad" === Uy.prefix || "fa-duotone" === Uy.prefix;
        !By && (Ky || ey || qb) && (Uy.prefix = "fad");
        (bb.includes("fa-brands") || bb.includes("fab")) && (Uy.prefix = "fab");
        if (!Uy.prefix && HW.includes(Wy)) {
          if (Object.keys(cb).find((function(yb) {
              return aU.includes(yb)
            })) || oy.autoFetchSvg) {
            var sy = dy.get(Wy).defaultShortPrefixId;
            Uy.prefix = sy, Uy.iconName = iU(Uy.prefix, Uy.iconName) || Uy.iconName
          }
        }
        "fa" !== Uy.prefix && "fa" !== fy || (Uy.prefix = YW() || "fas");
        return Uy
      }({
        values: yb,
        family: By,
        styles: sW,
        config: jW,
        canonical: Ky,
        givenPrefix: Uy
      })), function(yb, bb, Wy) {
        var Uy = Wy.prefix,
          hy = Wy.iconName;
        if (yb || !Uy || !hy) return {
          prefix: Uy,
          iconName: hy
        };
        var fy = "fa" === bb ? MW(hy) : {},
          Zy = iU(Uy, hy);
        hy = fy.iconName || Zy || hy, "far" !== (Uy = fy.prefix || Uy) || sW.far || !sW.fas || jW.autoFetchSvg || (Uy = "fas");
        return {
          prefix: Uy,
          iconName: hy
        }
      }(Wy, Uy, Ky))
    }
    var HW = Ay.filter((function(yb) {
        return yb !== Xy || yb !== ny
      })),
      aU = Object.keys(ob).filter((function(yb) {
        return yb !== Xy
      })).map((function(yb) {
        return Object.keys(ob[yb])
      })).flat();
    var FW = function() {
        return function(yb, bb, Wy) {
          return bb && hy(yb.prototype, bb), Wy && hy(yb, Wy), Object.defineProperty(yb, "prototype", {
            writable: !1
          }), yb
        }((function yb() {
          ! function(yb, bb) {
            if (!(yb instanceof bb)) throw new TypeError("Cannot call a class as a function")
          }(this, yb), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var yb = this, bb = arguments.length, Wy = new Array(bb), Uy = 0; Uy < bb; Uy++) Wy[Uy] = arguments[Uy];
            var hy = Wy.reduce(this._pullDefinitions, {});
            Object.keys(hy).forEach((function(bb) {
              yb.definitions[bb] = Py(Py({}, yb.definitions[bb] || {}), hy[bb]), qU(bb, hy[bb]);
              var Wy = Yb[Xy][bb];
              Wy && qU(Wy, hy[bb]), RW()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(yb, bb) {
            var Wy = bb.prefix && bb.iconName && bb.icon ? {
              0: bb
            } : bb;
            return Object.keys(Wy).map((function(bb) {
              var Uy = Wy[bb],
                hy = Uy.prefix,
                fy = Uy.iconName,
                Zy = Uy.icon,
                cb = Zy[2];
              yb[hy] || (yb[hy] = {}), cb.length > 0 && cb.forEach((function(bb) {
                "string" === typeof bb && (yb[hy][bb] = Zy)
              })), yb[hy][fy] = Zy
            })), yb
          }
        }])
      }(),
      pW = [],
      LW = {},
      QW = {},
      jU = Object.keys(QW);

    function DW(yb, bb) {
      for (var Wy = arguments.length, Uy = new Array(Wy > 2 ? Wy - 2 : 0), hy = 2; hy < Wy; hy++) Uy[hy - 2] = arguments[hy];
      return (LW[yb] || []).forEach((function(yb) {
        bb = yb.apply(null, [bb].concat(Uy))
      })), bb
    }

    function tU(yb) {
      for (var bb = arguments.length, Wy = new Array(bb > 1 ? bb - 1 : 0), Uy = 1; Uy < bb; Uy++) Wy[Uy - 1] = arguments[Uy];
      (LW[yb] || []).forEach((function(yb) {
        yb.apply(null, Wy)
      }))
    }

    function wW() {
      var yb = arguments[0],
        bb = Array.prototype.slice.call(arguments, 1);
      return QW[yb] ? QW[yb].apply(null, bb) : void 0
    }

    function kU(yb) {
      "fa" === yb.prefix && (yb.prefix = "fas");
      var bb = yb.iconName,
        Wy = yb.prefix || YW();
      if (bb) return bb = iU(Wy, bb) || bb, oW(NW.definitions, Wy, bb) || oW(hW.styles, Wy, bb)
    }
    var NW = new FW,
      zU = {
        i2svg: function() {
          var yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return vb ? (tU("beforeI2svg", yb), wW("pseudoElements2svg", yb), wW("i2svg", yb)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var yb, bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Wy = bb.autoReplaceSvgRoot;
          !1 === jW.autoReplaceSvg && (jW.autoReplaceSvg = !0), jW.observeMutations = !0, yb = function() {
            xU({
              autoReplaceSvgRoot: Wy
            }), tU("watch", bb)
          }, vb && (cU ? setTimeout(yb, 0) : fW.push(yb))
        }
      },
      IW = {
        noAuto: function() {
          jW.autoReplaceSvg = !1, jW.observeMutations = !1, tU("noAuto")
        },
        config: jW,
        dom: zU,
        parse: {
          icon: function(yb) {
            if (null === yb) return null;
            if ("object" === ey(yb) && yb.prefix && yb.iconName) return {
              prefix: yb.prefix,
              iconName: iU(yb.prefix, yb.iconName) || yb.iconName
            };
            if (Array.isArray(yb) && 2 === yb.length) {
              var bb = 0 === yb[1].indexOf("fa-") ? yb[1].slice(3) : yb[1],
                Wy = XW(yb[0]);
              return {
                prefix: Wy,
                iconName: iU(Wy, bb) || bb
              }
            }
            if ("string" === typeof yb && (yb.indexOf("".concat(jW.cssPrefix, "-")) > -1 || yb.match(nb))) {
              var Uy = rU(yb.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: Uy.prefix || YW(),
                iconName: iU(Uy.prefix, Uy.iconName) || Uy.iconName
              }
            }
            if ("string" === typeof yb) {
              var hy = YW();
              return {
                prefix: hy,
                iconName: iU(hy, yb) || yb
              }
            }
          }
        },
        library: NW,
        findIconDefinition: kU,
        toHtml: PW
      },
      xU = function() {
        var yb = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          bb = void 0 === yb ? Gy : yb;
        (Object.keys(hW.styles).length > 0 || jW.autoFetchSvg) && vb && jW.autoReplaceSvg && IW.dom.i2svg({
          node: bb
        })
      };

    function AW(yb, bb) {
      return Object.defineProperty(yb, "abstract", {
        get: bb
      }), Object.defineProperty(yb, "html", {
        get: function() {
          return yb.abstract.map((function(yb) {
            return PW(yb)
          }))
        }
      }), Object.defineProperty(yb, "node", {
        get: function() {
          if (vb) {
            var bb = Gy.createElement("div");
            return bb.innerHTML = yb.html, bb.children
          }
        }
      }), yb
    }

    function dW(yb) {
      var bb = yb.icons,
        Wy = bb.main,
        Uy = bb.mask,
        hy = yb.prefix,
        fy = yb.iconName,
        Zy = yb.transform,
        cb = yb.symbol,
        oy = yb.maskId,
        By = yb.extra,
        Ky = yb.watchable,
        ey = void 0 !== Ky && Ky,
        qb = Uy.found ? Uy : Wy,
        sy = qb.width,
        Sy = qb.height,
        Ey = [jW.replacementClass, fy ? "".concat(jW.cssPrefix, "-").concat(fy) : ""].filter((function(yb) {
          return -1 === By.classes.indexOf(yb)
        })).filter((function(yb) {
          return "" !== yb || !!yb
        })).concat(By.classes).join(" "),
        ly = {
          children: [],
          attributes: Py(Py({}, By.attributes), {}, {
            "data-prefix": hy,
            "data-icon": fy,
            class: Ey,
            role: By.attributes.role || "img",
            viewBox: "0 0 ".concat(sy, " ").concat(Sy)
          })
        };
      (function(yb) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(bb) {
          return bb in yb
        }))
      })(By.attributes) || By.attributes["aria-hidden"] || (ly.attributes["aria-hidden"] = "true"), ey && (ly.attributes[Eb] = "");
      var mb = Py(Py({}, ly), {}, {
          prefix: hy,
          iconName: fy,
          main: Wy,
          mask: Uy,
          maskId: oy,
          transform: Zy,
          symbol: cb,
          styles: Py({}, By.styles)
        }),
        Cy = Uy.found && Wy.found ? wW("generateAbstractMask", mb) || {
          children: [],
          attributes: {}
        } : wW("generateAbstractIcon", mb) || {
          children: [],
          attributes: {}
        },
        Ty = Cy.children,
        Vy = Cy.attributes;
      return mb.children = Ty, mb.attributes = Vy, cb ? function(yb) {
        var bb = yb.prefix,
          Wy = yb.iconName,
          Uy = yb.children,
          hy = yb.attributes,
          fy = yb.symbol,
          Zy = !0 === fy ? "".concat(bb, "-").concat(jW.cssPrefix, "-").concat(Wy) : fy;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: Py(Py({}, hy), {}, {
              id: Zy
            }),
            children: Uy
          }]
        }]
      }(mb) : function(yb) {
        var bb = yb.children,
          Wy = yb.main,
          Uy = yb.mask,
          hy = yb.attributes,
          fy = yb.styles,
          Zy = yb.transform;
        if (Ab(Zy) && Wy.found && !Uy.found) {
          var cb = {
            x: Wy.width / Wy.height / 2,
            y: .5
          };
          hy.style = xW(Py(Py({}, fy), {}, {
            "transform-origin": "".concat(cb.x + Zy.x / 16, "em ").concat(cb.y + Zy.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: hy,
          children: bb
        }]
      }(mb)
    }

    function yh(yb) {
      var bb = yb.content,
        Wy = yb.width,
        Uy = yb.height,
        hy = yb.transform,
        fy = yb.extra,
        Zy = yb.watchable,
        cb = void 0 !== Zy && Zy,
        oy = Py(Py({}, fy.attributes), {}, {
          class: fy.classes.join(" ")
        });
      cb && (oy[Eb] = "");
      var By = Py({}, fy.styles);
      Ab(hy) && (By.transform = function(yb) {
        var bb = yb.transform,
          Wy = yb.width,
          Uy = void 0 === Wy ? 16 : Wy,
          hy = yb.height,
          fy = void 0 === hy ? 16 : hy,
          Zy = yb.startCentered,
          cb = void 0 !== Zy && Zy,
          Py = "";
        return Py += cb && ib ? "translate(".concat(bb.x / tW - Uy / 2, "em, ").concat(bb.y / tW - fy / 2, "em) ") : cb ? "translate(calc(-50% + ".concat(bb.x / tW, "em), calc(-50% + ").concat(bb.y / tW, "em)) ") : "translate(".concat(bb.x / tW, "em, ").concat(bb.y / tW, "em) "), Py += "scale(".concat(bb.size / tW * (bb.flipX ? -1 : 1), ", ").concat(bb.size / tW * (bb.flipY ? -1 : 1), ") "), Py + "rotate(".concat(bb.rotate, "deg) ")
      }({
        transform: hy,
        startCentered: !0,
        width: Wy,
        height: Uy
      }), By["-webkit-transform"] = By.transform);
      var Ky = xW(By);
      Ky.length > 0 && (oy.style = Ky);
      var ey = [];
      return ey.push({
        tag: "span",
        attributes: oy,
        children: [bb]
      }), ey
    }
    var bh = hW.styles;

    function WU(yb) {
      var bb = yb[0],
        Wy = yb[1],
        Uy = oy(yb.slice(4), 1)[0];
      return {
        found: !0,
        width: bb,
        height: Wy,
        icon: Array.isArray(Uy) ? {
          tag: "g",
          attributes: {
            class: "".concat(jW.cssPrefix, "-").concat(aW.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(jW.cssPrefix, "-").concat(aW.SECONDARY),
              fill: "currentColor",
              d: Uy[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(jW.cssPrefix, "-").concat(aW.PRIMARY),
              fill: "currentColor",
              d: Uy[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: Uy
          }
        }
      }
    }
    var UU = {
      found: !1,
      width: 512,
      height: 512
    };

    function hU(yb, bb) {
      var Wy = bb;
      return "fa" === bb && null !== jW.styleDefault && (bb = YW()), new Promise((function(Uy, hy) {
        if ("fa" === Wy) {
          var fy = MW(yb) || {};
          yb = fy.iconName || yb, bb = fy.prefix || bb
        }
        if (yb && bb && bh[bb] && bh[bb][yb]) return Uy(WU(bh[bb][yb]));
        ! function(yb, bb) {
          gW || jW.showMissingIcons || !yb || console.error('Icon with name "'.concat(yb, '" and prefix "').concat(bb, '" is missing.'))
        }(yb, bb), Uy(Py(Py({}, UU), {}, {
          icon: jW.showMissingIcons && yb && wW("missingIconAbstract") || {}
        }))
      }))
    }
    var fU = function() {},
      ZU = jW.measurePerformance && Ry && Ry.mark && Ry.measure ? Ry : {
        mark: fU,
        measure: fU
      },
      ch = 'FA "7.2.0"',
      PU = function(yb) {
        ZU.mark("".concat(ch, " ").concat(yb, " ends")), ZU.measure("".concat(ch, " ").concat(yb), "".concat(ch, " ").concat(yb, " begins"), "".concat(ch, " ").concat(yb, " ends"))
      },
      oU = function(yb) {
        return ZU.mark("".concat(ch, " ").concat(yb, " begins")),
          function() {
            return PU(yb)
          }
      },
      BU = function() {};

    function KU(yb) {
      return "string" === typeof(yb.getAttribute ? yb.getAttribute(Eb) : null)
    }

    function eU(yb) {
      return Gy.createElementNS("http://www.w3.org/2000/svg", yb)
    }

    function qh(yb) {
      return Gy.createElement(yb)
    }

    function sU(yb) {
      var bb = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        Wy = void 0 === bb ? "svg" === yb.tag ? eU : qh : bb;
      if ("string" === typeof yb) return Gy.createTextNode(yb);
      var Uy = Wy(yb.tag);
      return Object.keys(yb.attributes || []).forEach((function(bb) {
        Uy.setAttribute(bb, yb.attributes[bb])
      })), (yb.children || []).forEach((function(yb) {
        Uy.appendChild(sU(yb, {
          ceFn: Wy
        }))
      })), Uy
    }
    var SU = {
      replace: function(yb) {
        var bb = yb[0];
        if (bb.parentNode)
          if (yb[1].forEach((function(yb) {
              bb.parentNode.insertBefore(sU(yb), bb)
            })), null === bb.getAttribute(Eb) && jW.keepOriginalSource) {
            var Wy = Gy.createComment(function(yb) {
              var bb = " ".concat(yb.outerHTML, " ");
              return "".concat(bb, "Font Awesome fontawesome.com ")
            }(bb));
            bb.parentNode.replaceChild(Wy, bb)
          } else bb.remove()
      },
      nest: function(yb) {
        var bb = yb[0],
          Wy = yb[1];
        if (~zW(bb).indexOf(jW.replacementClass)) return SU.replace(yb);
        var Uy = new RegExp("".concat(jW.cssPrefix, "-.*"));
        if (delete Wy[0].attributes.id, Wy[0].attributes.class) {
          var hy = Wy[0].attributes.class.split(" ").reduce((function(yb, bb) {
            return bb === jW.replacementClass || bb.match(Uy) ? yb.toSvg.push(bb) : yb.toNode.push(bb), yb
          }), {
            toNode: [],
            toSvg: []
          });
          Wy[0].attributes.class = hy.toSvg.join(" "), 0 === hy.toNode.length ? bb.removeAttribute("class") : bb.setAttribute("class", hy.toNode.join(" "))
        }
        var fy = Wy.map((function(yb) {
          return PW(yb)
        })).join("\n");
        bb.setAttribute(Eb, ""), bb.innerHTML = fy
      }
    };

    function EU(yb) {
      yb()
    }

    function lU(yb, bb) {
      var Wy = "function" === typeof bb ? bb : BU;
      if (0 === yb.length) Wy();
      else {
        var Uy = EU;
        "async" === jW.mutateApproach && (Uy = gb.requestAnimationFrame || EU), Uy((function() {
          var bb = !0 === jW.autoReplaceSvg ? SU.replace : SU[jW.autoReplaceSvg] || SU.replace,
            Uy = oU("mutate");
          yb.map(bb), Uy(), Wy()
        }))
      }
    }
    var mh = !1;

    function CU() {
      mh = !0
    }

    function TU() {
      mh = !1
    }
    var VU = null;

    function JU(yb) {
      if (Oy && jW.observeMutations) {
        var bb = yb.treeCallback,
          Wy = void 0 === bb ? BU : bb,
          Uy = yb.nodeCallback,
          hy = void 0 === Uy ? BU : Uy,
          fy = yb.pseudoElementsCallback,
          Zy = void 0 === fy ? BU : fy,
          cb = yb.observeMutationsRoot,
          Py = void 0 === cb ? Gy : cb;
        VU = new Oy((function(yb) {
          if (!mh) {
            var bb = YW();
            Nb(yb).forEach((function(yb) {
              if ("childList" === yb.type && yb.addedNodes.length > 0 && !KU(yb.addedNodes[0]) && (jW.searchPseudoElements && Zy(yb.target), Wy(yb.target)), "attributes" === yb.type && yb.target.parentNode && jW.searchPseudoElements && Zy([yb.target], !0), "attributes" === yb.type && KU(yb.target) && ~Hb.indexOf(yb.attributeName))
                if ("class" === yb.attributeName && function(yb) {
                    var bb = yb.getAttribute ? yb.getAttribute(mW) : null,
                      Wy = yb.getAttribute ? yb.getAttribute(Cb) : null;
                    return bb && Wy
                  }(yb.target)) {
                  var Uy = rU(zW(yb.target)),
                    fy = Uy.prefix,
                    cb = Uy.iconName;
                  yb.target.setAttribute(mW, fy || bb), cb && yb.target.setAttribute(Cb, cb)
                } else(Py = yb.target) && Py.classList && Py.classList.contains && Py.classList.contains(jW.replacementClass) && hy(yb.target);
              var Py
            }))
          }
        })), vb && VU.observe(Py, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function gh(yb) {
      var bb, Wy, Uy = yb.getAttribute("data-prefix"),
        hy = yb.getAttribute("data-icon"),
        fy = void 0 !== yb.innerText ? yb.innerText.trim() : "",
        Zy = rU(zW(yb));
      return Zy.prefix || (Zy.prefix = YW()), Uy && hy && (Zy.prefix = Uy, Zy.iconName = hy), Zy.iconName && Zy.prefix || (Zy.prefix && fy.length > 0 && (Zy.iconName = (bb = Zy.prefix, Wy = yb.innerText, (TW[bb] || {})[Wy] || vU(Zy.prefix, KW(yb.innerText)))), !Zy.iconName && jW.autoFetchSvg && yb.firstChild && yb.firstChild.nodeType === Node.TEXT_NODE && (Zy.iconName = yb.firstChild.data)), Zy
    }

    function GU(yb) {
      var bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        Wy = gh(yb),
        Uy = Wy.iconName,
        hy = Wy.prefix,
        fy = Wy.rest,
        Zy = function(yb) {
          return Nb(yb.attributes).reduce((function(yb, bb) {
            return "class" !== yb.name && "style" !== yb.name && (yb[bb.name] = bb.value), yb
          }), {})
        }(yb),
        cb = DW("parseNodeAttributes", {}, yb),
        oy = bb.styleParser ? function(yb) {
          var bb = yb.getAttribute("style"),
            Wy = [];
          return bb && (Wy = bb.split(";").reduce((function(yb, bb) {
            var Wy = bb.split(":"),
              Uy = Wy[0],
              hy = Wy.slice(1);
            return Uy && hy.length > 0 && (yb[Uy] = hy.join(":").trim()), yb
          }), {})), Wy
        }(yb) : [];
      return Py({
        iconName: Uy,
        prefix: hy,
        transform: wb,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: fy,
          styles: oy,
          attributes: Zy
        }
      }, cb)
    }
    var OU = hW.styles;

    function RU(yb) {
      var bb = "nest" === jW.autoReplaceSvg ? GU(yb, {
        styleParser: !1
      }) : GU(yb);
      return ~bb.extra.classes.indexOf(ub) ? wW("generateLayersText", yb, bb) : wW("generateSvgReplacementMutation", yb, bb)
    }

    function vh(yb) {
      var bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!vb) return Promise.resolve();
      var Wy = Gy.documentElement.classList,
        Uy = function(yb) {
          return Wy.add("".concat(Tb, "-").concat(yb))
        },
        hy = function(yb) {
          return Wy.remove("".concat(Tb, "-").concat(yb))
        },
        fy = jW.autoFetchSvg ? [].concat(By(yW), By(Bb)) : Yy.concat(Object.keys(OU));
      fy.includes("fa") || fy.push("fa");
      var Zy = [".".concat(ub, ":not([").concat(Eb, "])")].concat(fy.map((function(yb) {
        return ".".concat(yb, ":not([").concat(Eb, "])")
      }))).join(", ");
      if (0 === Zy.length) return Promise.resolve();
      var cb = [];
      try {
        cb = Nb(yb.querySelectorAll(Zy))
      } catch (Ky) {}
      if (!(cb.length > 0)) return Promise.resolve();
      Uy("pending"), hy("complete");
      var Py = oU("onTree"),
        oy = cb.reduce((function(yb, bb) {
          try {
            var Wy = RU(bb);
            Wy && yb.push(Wy)
          } catch (Ky) {
            gW || "MissingIcon" === Ky.name && console.error(Ky)
          }
          return yb
        }), []);
      return new Promise((function(yb, Wy) {
        Promise.all(oy).then((function(Wy) {
          lU(Wy, (function() {
            Uy("active"), Uy("complete"), hy("pending"), "function" === typeof bb && bb(), Py(), yb()
          }))
        })).catch((function(yb) {
          Py(), Wy(yb)
        }))
      }))
    }

    function ih(yb) {
      var bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      RU(yb).then((function(yb) {
        yb && lU([yb], bb)
      }))
    }
    var MU = function(yb) {
        var bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Wy = bb.transform,
          Uy = void 0 === Wy ? wb : Wy,
          hy = bb.symbol,
          fy = void 0 !== hy && hy,
          Zy = bb.mask,
          cb = void 0 === Zy ? null : Zy,
          oy = bb.maskId,
          By = void 0 === oy ? null : oy,
          Ky = bb.classes,
          ey = void 0 === Ky ? [] : Ky,
          qb = bb.attributes,
          sy = void 0 === qb ? {} : qb,
          Sy = bb.styles,
          Ey = void 0 === Sy ? {} : Sy;
        if (yb) {
          var ly = yb.prefix,
            mb = yb.iconName,
            Cy = yb.icon;
          return AW(Py({
            type: "icon"
          }, yb), (function() {
            return tU("beforeDOMElementCreation", {
              iconDefinition: yb,
              params: bb
            }), dW({
              icons: {
                main: WU(Cy),
                mask: cb ? WU(cb.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: ly,
              iconName: mb,
              transform: Py(Py({}, wb), Uy),
              symbol: fy,
              maskId: By,
              extra: {
                attributes: sy,
                styles: Ey,
                classes: ey
              }
            })
          }))
        }
      },
      YU = {
        mixout: function() {
          return {
            icon: (yb = MU, function(bb) {
              var Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Uy = (bb || {}).icon ? bb : kU(bb || {}),
                hy = Wy.mask;
              return hy && (hy = (hy || {}).icon ? hy : kU(hy || {})), yb(Uy, Py(Py({}, Wy), {}, {
                mask: hy
              }))
            })
          };
          var yb
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(yb) {
              return yb.treeCallback = vh, yb.nodeCallback = ih, yb
            }
          }
        },
        provides: function(yb) {
          yb.i2svg = function(yb) {
            var bb = yb.node,
              Wy = void 0 === bb ? Gy : bb,
              Uy = yb.callback;
            return vh(Wy, void 0 === Uy ? function() {} : Uy)
          }, yb.generateSvgReplacementMutation = function(yb, bb) {
            var Wy = bb.iconName,
              Uy = bb.prefix,
              hy = bb.transform,
              fy = bb.symbol,
              Zy = bb.mask,
              cb = bb.maskId,
              Py = bb.extra;
            return new Promise((function(bb, By) {
              Promise.all([hU(Wy, Uy), Zy.iconName ? hU(Zy.iconName, Zy.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(Zy) {
                var By = oy(Zy, 2),
                  Ky = By[0],
                  ey = By[1];
                bb([yb, dW({
                  icons: {
                    main: Ky,
                    mask: ey
                  },
                  prefix: Uy,
                  iconName: Wy,
                  transform: hy,
                  symbol: fy,
                  maskId: cb,
                  extra: Py,
                  watchable: !0
                })])
              })).catch(By)
            }))
          }, yb.generateAbstractIcon = function(yb) {
            var bb, Wy = yb.children,
              Uy = yb.attributes,
              hy = yb.main,
              fy = yb.transform,
              Zy = xW(yb.styles);
            return Zy.length > 0 && (Uy.style = Zy), Ab(fy) && (bb = wW("generateAbstractTransformGrouping", {
              main: hy,
              transform: fy,
              containerWidth: hy.width,
              iconWidth: hy.width
            })), Wy.push(bb || hy.icon), {
              children: Wy,
              attributes: Uy
            }
          }
        }
      },
      XU = {
        mixout: function() {
          return {
            layer: function(yb) {
              var bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Wy = bb.classes,
                Uy = void 0 === Wy ? [] : Wy;
              return AW({
                type: "layer"
              }, (function() {
                tU("beforeDOMElementCreation", {
                  assembler: yb,
                  params: bb
                });
                var Wy = [];
                return yb((function(yb) {
                  Array.isArray(yb) ? yb.map((function(yb) {
                    Wy = Wy.concat(yb.abstract)
                  })) : Wy = Wy.concat(yb.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(jW.cssPrefix, "-layers")].concat(By(Uy)).join(" ")
                  },
                  children: Wy
                }]
              }))
            }
          }
        }
      },
      nU = {
        mixout: function() {
          return {
            counter: function(yb) {
              var bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Wy = bb.title,
                Uy = void 0 === Wy ? null : Wy,
                hy = bb.classes,
                fy = void 0 === hy ? [] : hy,
                Zy = bb.attributes,
                cb = void 0 === Zy ? {} : Zy,
                oy = bb.styles,
                Ky = void 0 === oy ? {} : oy;
              return AW({
                type: "counter",
                content: yb
              }, (function() {
                return tU("beforeDOMElementCreation", {
                    content: yb,
                    params: bb
                  }),
                  function(yb) {
                    var bb = yb.content,
                      Wy = yb.extra,
                      Uy = Py(Py({}, Wy.attributes), {}, {
                        class: Wy.classes.join(" ")
                      }),
                      hy = xW(Wy.styles);
                    hy.length > 0 && (Uy.style = hy);
                    var fy = [];
                    return fy.push({
                      tag: "span",
                      attributes: Uy,
                      children: [bb]
                    }), fy
                  }({
                    content: yb.toString(),
                    title: Uy,
                    extra: {
                      attributes: cb,
                      styles: Ky,
                      classes: ["".concat(jW.cssPrefix, "-layers-counter")].concat(By(fy))
                    }
                  })
              }))
            }
          }
        }
      },
      uU = {
        mixout: function() {
          return {
            text: function(yb) {
              var bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Wy = bb.transform,
                Uy = void 0 === Wy ? wb : Wy,
                hy = bb.classes,
                fy = void 0 === hy ? [] : hy,
                Zy = bb.attributes,
                cb = void 0 === Zy ? {} : Zy,
                oy = bb.styles,
                Ky = void 0 === oy ? {} : oy;
              return AW({
                type: "text",
                content: yb
              }, (function() {
                return tU("beforeDOMElementCreation", {
                  content: yb,
                  params: bb
                }), yh({
                  content: yb,
                  transform: Py(Py({}, wb), Uy),
                  extra: {
                    attributes: cb,
                    styles: Ky,
                    classes: ["".concat(jW.cssPrefix, "-layers-text")].concat(By(fy))
                  }
                })
              }))
            }
          }
        },
        provides: function(yb) {
          yb.generateLayersText = function(yb, bb) {
            var Wy = bb.transform,
              Uy = bb.extra,
              hy = null,
              fy = null;
            if (ib) {
              var Zy = parseInt(getComputedStyle(yb).fontSize, 10),
                cb = yb.getBoundingClientRect();
              hy = cb.width / Zy, fy = cb.height / Zy
            }
            return Promise.resolve([yb, yh({
              content: yb.innerHTML,
              width: hy,
              height: fy,
              transform: Wy,
              extra: Uy,
              watchable: !0
            })])
          }
        }
      },
      rh = new RegExp('"', "ug"),
      HU = [1105920, 1112319],
      ah = Py(Py(Py(Py({}, {
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
      FU = Object.keys(ah).reduce((function(yb, bb) {
        return yb[bb.toLowerCase()] = ah[bb], yb
      }), {}),
      pU = Object.keys(FU).reduce((function(yb, bb) {
        var Wy = FU[bb];
        return yb[bb] = Wy[900] || By(Object.entries(Wy))[0][1], yb
      }), {});

    function LU(yb, bb) {
      var Wy = "".concat("data-fa-pseudo-element-pending").concat(bb.replace(":", "-"));
      return new Promise((function(Uy, hy) {
        if (null !== yb.getAttribute(Wy)) return Uy();
        var fy = Nb(yb.children).filter((function(yb) {
            return yb.getAttribute(lb) === bb
          }))[0],
          Zy = gb.getComputedStyle(yb, bb),
          cb = Zy.getPropertyValue("font-family"),
          oy = cb.match(rW),
          Ky = Zy.getPropertyValue("font-weight"),
          ey = Zy.getPropertyValue("content");
        if (fy && !oy) return yb.removeChild(fy), Uy();
        if (oy && "none" !== ey && "" !== ey) {
          var qb = Zy.getPropertyValue("content"),
            sy = function(yb, bb) {
              var Wy = yb.replace(/^['"]|['"]$/g, "").toLowerCase(),
                Uy = parseInt(bb),
                hy = isNaN(Uy) ? "normal" : Uy;
              return (FU[Wy] || {})[hy] || pU[Wy]
            }(cb, Ky),
            Sy = function(yb) {
              return KW(By(yb.replace(rh, ""))[0] || "")
            }(qb),
            Ey = oy[0].startsWith("FontAwesome"),
            ly = function(yb) {
              var bb = yb.getPropertyValue("font-feature-settings").includes("ss01"),
                Wy = yb.getPropertyValue("content").replace(rh, ""),
                Uy = Wy.codePointAt(0),
                hy = Uy >= HU[0] && Uy <= HU[1],
                fy = 2 === Wy.length && Wy[0] === Wy[1];
              return hy || fy || bb
            }(Zy),
            mb = vU(sy, Sy),
            Cy = mb;
          if (Ey) {
            var Ty = function(yb) {
              var bb = JW[yb],
                Wy = vU("fas", yb);
              return bb || (Wy ? {
                prefix: "fas",
                iconName: Wy
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(Sy);
            Ty.iconName && Ty.prefix && (mb = Ty.iconName, sy = Ty.prefix)
          }
          if (!mb || ly || fy && fy.getAttribute(mW) === sy && fy.getAttribute(Cb) === Cy) Uy();
          else {
            yb.setAttribute(Wy, Cy), fy && yb.removeChild(fy);
            var Vy = {
                iconName: null,
                prefix: null,
                transform: wb,
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
              Jy = Vy.extra;
            Jy.attributes[lb] = bb, hU(mb, sy).then((function(hy) {
              var fy = dW(Py(Py({}, Vy), {}, {
                  icons: {
                    main: hy,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: sy,
                  iconName: Cy,
                  extra: Jy,
                  watchable: !0
                })),
                Zy = Gy.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === bb ? yb.insertBefore(Zy, yb.firstChild) : yb.appendChild(Zy), Zy.outerHTML = fy.map((function(yb) {
                return PW(yb)
              })).join("\n"), yb.removeAttribute(Wy), Uy()
            })).catch(hy)
          }
        } else Uy()
      }))
    }

    function QU(yb) {
      return Promise.all([LU(yb, "::before"), LU(yb, "::after")])
    }

    function jh(yb) {
      return yb.parentNode !== document.head && !~Vb.indexOf(yb.tagName.toUpperCase()) && !yb.getAttribute(lb) && (!yb.parentNode || "svg" !== yb.parentNode.tagName)
    }
    var DU = function(yb) {
        return !!yb && Jb.some((function(bb) {
          return yb.includes(bb)
        }))
      },
      th = function(yb) {
        if (!yb) return [];
        var bb = new Set,
          Wy = yb.split(/,(?![^()]*\))/).map((function(yb) {
            return yb.trim()
          }));
        Wy = Wy.flatMap((function(yb) {
          return yb.includes("(") ? yb : yb.split(",").map((function(yb) {
            return yb.trim()
          }))
        }));
        var Uy, hy = fy(Wy);
        try {
          for (hy.s(); !(Uy = hy.n()).done;) {
            var Zy = Uy.value;
            if (DU(Zy)) {
              var cb = Jb.reduce((function(yb, bb) {
                return yb.replace(bb, "")
              }), Zy);
              "" !== cb && "*" !== cb && bb.add(cb)
            }
          }
        } catch (Py) {
          hy.e(Py)
        } finally {
          hy.f()
        }
        return bb
      };

    function wU(yb) {
      if (vb) {
        var bb;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) bb = yb;
        else if (jW.searchPseudoElementsFullScan) bb = yb.querySelectorAll("*");
        else {
          var Wy, Uy = new Set,
            hy = fy(document.styleSheets);
          try {
            for (hy.s(); !(Wy = hy.n()).done;) {
              var Zy = Wy.value;
              try {
                var cb, Py = fy(Zy.cssRules);
                try {
                  for (Py.s(); !(cb = Py.n()).done;) {
                    var oy, By = cb.value,
                      Ky = fy(th(By.selectorText));
                    try {
                      for (Ky.s(); !(oy = Ky.n()).done;) {
                        var ey = oy.value;
                        Uy.add(ey)
                      }
                    } catch (sy) {
                      Ky.e(sy)
                    } finally {
                      Ky.f()
                    }
                  }
                } catch (sy) {
                  Py.e(sy)
                } finally {
                  Py.f()
                }
              } catch (Sy) {
                jW.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(Zy.href, " (").concat(Sy.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (sy) {
            hy.e(sy)
          } finally {
            hy.f()
          }
          if (!Uy.size) return;
          var qb = Array.from(Uy).join(", ");
          try {
            bb = yb.querySelectorAll(qb)
          } catch (Ey) {}
        }
        return new Promise((function(yb, Wy) {
          var Uy = Nb(bb).filter(jh).map(QU),
            hy = oU("searchPseudoElements");
          CU(), Promise.all(Uy).then((function() {
            hy(), TU(), yb()
          })).catch((function() {
            hy(), TU(), Wy()
          }))
        }))
      }
    }
    var kh = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(yb) {
              return yb.pseudoElementsCallback = wU, yb
            }
          }
        },
        provides: function(yb) {
          yb.pseudoElements2svg = function(yb) {
            var bb = yb.node,
              Wy = void 0 === bb ? Gy : bb;
            jW.searchPseudoElements && wU(Wy)
          }
        }
      },
      NU = !1,
      zh = function(yb) {
        return yb.toLowerCase().split(" ").reduce((function(yb, bb) {
          var Wy = bb.toLowerCase().split("-"),
            Uy = Wy[0],
            hy = Wy.slice(1).join("-");
          if (Uy && "h" === hy) return yb.flipX = !0, yb;
          if (Uy && "v" === hy) return yb.flipY = !0, yb;
          if (hy = parseFloat(hy), isNaN(hy)) return yb;
          switch (Uy) {
            case "grow":
              yb.size = yb.size + hy;
              break;
            case "shrink":
              yb.size = yb.size - hy;
              break;
            case "left":
              yb.x = yb.x - hy;
              break;
            case "right":
              yb.x = yb.x + hy;
              break;
            case "up":
              yb.y = yb.y - hy;
              break;
            case "down":
              yb.y = yb.y + hy;
              break;
            case "rotate":
              yb.rotate = yb.rotate + hy
          }
          return yb
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      IU = {
        mixout: function() {
          return {
            parse: {
              transform: function(yb) {
                return zh(yb)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(yb, bb) {
              var Wy = bb.getAttribute("data-fa-transform");
              return Wy && (yb.transform = zh(Wy)), yb
            }
          }
        },
        provides: function(yb) {
          yb.generateAbstractTransformGrouping = function(yb) {
            var bb = yb.main,
              Wy = yb.transform,
              Uy = yb.containerWidth,
              hy = yb.iconWidth,
              fy = {
                transform: "translate(".concat(Uy / 2, " 256)")
              },
              Zy = "translate(".concat(32 * Wy.x, ", ").concat(32 * Wy.y, ") "),
              cb = "scale(".concat(Wy.size / 16 * (Wy.flipX ? -1 : 1), ", ").concat(Wy.size / 16 * (Wy.flipY ? -1 : 1), ") "),
              oy = "rotate(".concat(Wy.rotate, " 0 0)"),
              By = {
                outer: fy,
                inner: {
                  transform: "".concat(Zy, " ").concat(cb, " ").concat(oy)
                },
                path: {
                  transform: "translate(".concat(hy / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: Py({}, By.outer),
              children: [{
                tag: "g",
                attributes: Py({}, By.inner),
                children: [{
                  tag: bb.icon.tag,
                  children: bb.icon.children,
                  attributes: Py(Py({}, bb.icon.attributes), By.path)
                }]
              }]
            }
          }
        }
      },
      xh = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function AU(yb) {
      var bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return yb.attributes && (yb.attributes.fill || bb) && (yb.attributes.fill = "black"), yb
    }
    var dU = {
        hooks: function() {
          return {
            parseNodeAttributes: function(yb, bb) {
              var Wy = bb.getAttribute("data-fa-mask"),
                Uy = Wy ? rU(Wy.split(" ").map((function(yb) {
                  return yb.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return Uy.prefix || (Uy.prefix = YW()), yb.mask = Uy, yb.maskId = bb.getAttribute("data-fa-mask-id"), yb
            }
          }
        },
        provides: function(yb) {
          yb.generateAbstractMask = function(yb) {
            var bb, Wy = yb.children,
              Uy = yb.attributes,
              hy = yb.main,
              fy = yb.mask,
              Zy = yb.maskId,
              cb = yb.transform,
              oy = hy.width,
              By = hy.icon,
              Ky = fy.width,
              ey = fy.icon,
              qb = function(yb) {
                var bb = yb.transform,
                  Wy = yb.containerWidth,
                  Uy = yb.iconWidth,
                  hy = {
                    transform: "translate(".concat(Wy / 2, " 256)")
                  },
                  fy = "translate(".concat(32 * bb.x, ", ").concat(32 * bb.y, ") "),
                  Zy = "scale(".concat(bb.size / 16 * (bb.flipX ? -1 : 1), ", ").concat(bb.size / 16 * (bb.flipY ? -1 : 1), ") "),
                  cb = "rotate(".concat(bb.rotate, " 0 0)");
                return {
                  outer: hy,
                  inner: {
                    transform: "".concat(fy, " ").concat(Zy, " ").concat(cb)
                  },
                  path: {
                    transform: "translate(".concat(Uy / 2 * -1, " -256)")
                  }
                }
              }({
                transform: cb,
                containerWidth: Ky,
                iconWidth: oy
              }),
              sy = {
                tag: "rect",
                attributes: Py(Py({}, xh), {}, {
                  fill: "white"
                })
              },
              Sy = By.children ? {
                children: By.children.map(AU)
              } : {},
              Ey = {
                tag: "g",
                attributes: Py({}, qb.inner),
                children: [AU(Py({
                  tag: By.tag,
                  attributes: Py(Py({}, By.attributes), qb.path)
                }, Sy))]
              },
              ly = {
                tag: "g",
                attributes: Py({}, qb.outer),
                children: [Ey]
              },
              mb = "mask-".concat(Zy || kW()),
              Cy = "clip-".concat(Zy || kW()),
              Ty = {
                tag: "mask",
                attributes: Py(Py({}, xh), {}, {
                  id: mb,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [sy, ly]
              },
              Vy = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: Cy
                  },
                  children: (bb = ey, "g" === bb.tag ? bb.children : [bb])
                }, Ty]
              };
            return Wy.push(Vy, {
              tag: "rect",
              attributes: Py({
                fill: "currentColor",
                "clip-path": "url(#".concat(Cy, ")"),
                mask: "url(#".concat(mb, ")")
              }, xh)
            }), {
              children: Wy,
              attributes: Uy
            }
          }
        }
      },
      yf = {
        provides: function(yb) {
          var bb = !1;
          gb.matchMedia && (bb = gb.matchMedia("(prefers-reduced-motion: reduce)").matches), yb.missingIconAbstract = function() {
            var yb = [],
              Wy = {
                fill: "currentColor"
              },
              Uy = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            yb.push({
              tag: "path",
              attributes: Py(Py({}, Wy), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var hy = Py(Py({}, Uy), {}, {
                attributeName: "opacity"
              }),
              fy = {
                tag: "circle",
                attributes: Py(Py({}, Wy), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return bb || fy.children.push({
              tag: "animate",
              attributes: Py(Py({}, Uy), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: Py(Py({}, hy), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), yb.push(fy), yb.push({
              tag: "path",
              attributes: Py(Py({}, Wy), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: bb ? [] : [{
                tag: "animate",
                attributes: Py(Py({}, hy), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), bb || yb.push({
              tag: "path",
              attributes: Py(Py({}, Wy), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: Py(Py({}, hy), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: yb
            }
          }
        }
      };
    ! function(yb, bb) {
      var Wy = bb.mixoutsTo;
      pW = yb, LW = {}, Object.keys(QW).forEach((function(yb) {
        -1 === jU.indexOf(yb) && delete QW[yb]
      })), pW.forEach((function(yb) {
        var bb = yb.mixout ? yb.mixout() : {};
        if (Object.keys(bb).forEach((function(yb) {
            "function" === typeof bb[yb] && (Wy[yb] = bb[yb]), "object" === ey(bb[yb]) && Object.keys(bb[yb]).forEach((function(Uy) {
              Wy[yb] || (Wy[yb] = {}), Wy[yb][Uy] = bb[yb][Uy]
            }))
          })), yb.hooks) {
          var Uy = yb.hooks();
          Object.keys(Uy).forEach((function(yb) {
            LW[yb] || (LW[yb] = []), LW[yb].push(Uy[yb])
          }))
        }
        yb.provides && yb.provides(QW)
      }))
    }([WW, YU, XU, nU, uU, kh, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              CU(), NU = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            JU(DW("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            VU && VU.disconnect()
          },
          watch: function(yb) {
            var bb = yb.observeMutationsRoot;
            NU ? TU() : JU(DW("mutationObserverCallbacks", {
              observeMutationsRoot: bb
            }))
          }
        }
      }
    }, IU, dU, yf, {
      hooks: function() {
        return {
          parseNodeAttributes: function(yb, bb) {
            var Wy = bb.getAttribute("data-fa-symbol"),
              Uy = null !== Wy && ("" === Wy || Wy);
            return yb.symbol = Uy, yb
          }
        }
      }
    }], {
      mixoutsTo: IW
    });
    var bf = IW.noAuto,
      Wh = IW.config,
      Uh = IW.library,
      hh = IW.dom,
      fh = IW.parse,
      Zh = IW.findIconDefinition,
      cf = IW.toHtml,
      Ph = IW.icon,
      oh = IW.layer,
      Bh = IW.text,
      Kh = IW.counter
  },
  5948: yb => {
    yb.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);