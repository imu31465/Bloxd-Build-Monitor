/*! For license information please see yteou.fa-renderer.30a53f56.chunk.js.LICENSE.txt */
export const id = 39;
export const ids = [39];
export const modules = {
  7706: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      FontAwesomeIcon: () => Jd
    });
    var Wd = md(7699),
      Fd = md(5864),
      Rd = md.n(Fd),
      Xd = md(66);

    function Kd(dd, Od) {
      (null == Od || Od > dd.length) && (Od = dd.length);
      for (var md = 0, Wd = Array(Od); md < Od; md++) Wd[md] = dd[md];
      return Wd
    }

    function hd(dd, Od, md) {
      return (Od = function(dd) {
        var Od = function(dd, Od) {
          if ("object" != typeof dd || !dd) return dd;
          var md = dd[Symbol.toPrimitive];
          if (void 0 !== md) {
            var Wd = md.call(dd, Od || "default");
            if ("object" != typeof Wd) return Wd;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Od ? String : Number)(dd)
        }(dd, "string");
        return "symbol" == typeof Od ? Od : Od + ""
      }(Od)) in dd ? Object.defineProperty(dd, Od, {
        value: md,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Od] = md, dd
    }

    function vd(dd, Od) {
      var md = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        Od && (Wd = Wd.filter((function(Od) {
          return Object.getOwnPropertyDescriptor(dd, Od).enumerable
        }))), md.push.apply(md, Wd)
      }
      return md
    }

    function Qd(dd) {
      for (var Od = 1; Od < arguments.length; Od++) {
        var md = null != arguments[Od] ? arguments[Od] : {};
        Od % 2 ? vd(Object(md), !0).forEach((function(Od) {
          hd(dd, Od, md[Od])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(md)) : vd(Object(md)).forEach((function(Od) {
          Object.defineProperty(dd, Od, Object.getOwnPropertyDescriptor(md, Od))
        }))
      }
      return dd
    }

    function td(dd, Od) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Od) {
        var md = null == dd ? null : "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null != md) {
          var Wd, Fd, Rd, Xd, Kd = [],
            hd = !0,
            vd = !1;
          try {
            if (Rd = (md = md.call(dd)).next, 0 === Od) {
              if (Object(md) !== md) return;
              hd = !1
            } else
              for (; !(hd = (Wd = Rd.call(md)).done) && (Kd.push(Wd.value), Kd.length !== Od); hd = !0);
          } catch (dd) {
            vd = !0, Fd = dd
          } finally {
            try {
              if (!hd && null != md.return && (Xd = md.return(), Object(Xd) !== Xd)) return
            } finally {
              if (vd) throw Fd
            }
          }
          return Kd
        }
      }(dd, Od) || qd(dd, Od) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function od(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return Kd(dd)
      }(dd) || function(dd) {
        if ("undefined" != typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || qd(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Nd(dd) {
      return Nd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, Nd(dd)
    }

    function qd(dd, Od) {
      if (dd) {
        if ("string" == typeof dd) return Kd(dd, Od);
        var md = {}.toString.call(dd).slice(8, -1);
        return "Object" === md && dd.constructor && (md = dd.constructor.name), "Map" === md || "Set" === md ? Array.from(dd) : "Arguments" === md || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(md) ? Kd(dd, Od) : void 0
      }
    }
    var Hd;
    try {
      var yd = md(7708);
      Hd = yd.version
    } catch (xd) {
      Hd = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function bd(dd) {
      var Od = dd.beat,
        md = dd.fade,
        Wd = dd.beatFade,
        Fd = dd.bounce,
        Rd = dd.shake,
        Xd = dd.flash,
        Kd = dd.spin,
        vd = dd.spinPulse,
        Qd = dd.spinReverse,
        od = dd.pulse,
        Nd = dd.fixedWidth,
        qd = dd.inverse,
        yd = dd.border,
        bd = dd.listItem,
        Td = dd.flip,
        pd = dd.size,
        Yd = dd.rotation,
        gd = dd.pull,
        wd = dd.swapOpacity,
        Ed = dd.rotateBy,
        Jd = dd.widthAuto,
        Ud = function(dd, Od) {
          for (var md = td(dd.split("-"), 2), Wd = md[0], Fd = md[1], Rd = td(Od.split("-"), 2), Xd = Rd[0], Kd = Rd[1], hd = Wd.split("."), vd = Xd.split("."), Qd = 0; Qd < Math.max(hd.length, vd.length); Qd++) {
            var od = hd[Qd] || "0",
              Nd = vd[Qd] || "0",
              qd = parseInt(od, 10),
              Hd = parseInt(Nd, 10);
            if (qd !== Hd) return qd > Hd
          }
          for (var yd = 0; yd < Math.max(hd.length, vd.length); yd++) {
            var bd = hd[yd] || "0",
              Td = vd[yd] || "0";
            if (bd !== Td && bd.length !== Td.length) return bd.length < Td.length
          }
          return !(Fd && !Kd)
        }(Hd, "7.0.0"),
        xd = hd(hd(hd(hd(hd(hd({
          "fa-beat": Od,
          "fa-fade": md,
          "fa-beat-fade": Wd,
          "fa-bounce": Fd,
          "fa-shake": Rd,
          "fa-flash": Xd,
          "fa-spin": Kd,
          "fa-spin-reverse": Qd,
          "fa-spin-pulse": vd,
          "fa-pulse": od,
          "fa-fw": Nd,
          "fa-inverse": qd,
          "fa-border": yd,
          "fa-li": bd,
          "fa-flip": !0 === Td,
          "fa-flip-horizontal": "horizontal" === Td || "both" === Td,
          "fa-flip-vertical": "vertical" === Td || "both" === Td
        }, "fa-".concat(pd), "undefined" !== typeof pd && null !== pd), "fa-rotate-".concat(Yd), "undefined" !== typeof Yd && null !== Yd && 0 !== Yd), "fa-pull-".concat(gd), "undefined" !== typeof gd && null !== gd), "fa-swap-opacity", wd), "fa-rotate-by", Ud && Ed), "fa-width-auto", Ud && Jd);
      return Object.keys(xd).map((function(dd) {
        return xd[dd] ? dd : null
      })).filter((function(dd) {
        return dd
      }))
    }

    function Td(dd) {
      return Od = dd, (Od -= 0) === Od ? dd : (dd = dd.replace(/[\-_\s]+(.)?/g, (function(dd, Od) {
        return Od ? Od.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + dd.substr(1);
      var Od
    }
    var pd = ["style"];
    var Yd = !1;
    try {
      Yd = !0
    } catch (xd) {}

    function gd(dd) {
      return dd && "object" === Nd(dd) && dd.prefix && dd.iconName && dd.icon ? dd : Wd.parse.icon ? Wd.parse.icon(dd) : null === dd ? null : dd && "object" === Nd(dd) && dd.prefix && dd.iconName ? dd : Array.isArray(dd) && 2 === dd.length ? {
        prefix: dd[0],
        iconName: dd[1]
      } : "string" === typeof dd ? {
        prefix: "fas",
        iconName: dd
      } : void 0
    }

    function wd(dd, Od) {
      return Array.isArray(Od) && Od.length > 0 || !Array.isArray(Od) && Od ? hd({}, dd, Od) : {}
    }
    var Ed = {
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
      Jd = Xd.forwardRef((function(dd, Od) {
        var md = Qd(Qd({}, Ed), dd),
          Fd = md.icon,
          Rd = md.mask,
          Xd = md.symbol,
          Kd = md.className,
          hd = md.title,
          vd = md.titleId,
          td = md.maskId,
          Nd = gd(Fd),
          qd = wd("classes", [].concat(od(bd(md)), od((Kd || "").split(" ")))),
          Hd = wd("transform", "string" === typeof md.transform ? Wd.parse.transform(md.transform) : md.transform),
          yd = wd("mask", gd(Rd)),
          Td = (0, Wd.icon)(Nd, Qd(Qd(Qd(Qd({}, qd), Hd), yd), {}, {
            symbol: Xd,
            title: hd,
            titleId: vd,
            maskId: td
          }));
        if (!Td) return function() {
          var dd;
          !Yd && console && "function" === typeof console.error && (dd = console).error.apply(dd, arguments)
        }("Could not find icon", Nd), null;
        var pd = Td.abstract,
          Jd = {
            ref: Od
          };
        return Object.keys(md).forEach((function(dd) {
          Ed.hasOwnProperty(dd) || (Jd[dd] = md[dd])
        })), Ud(pd[0], Jd)
      }));
    Jd.displayName = "FontAwesomeIcon", Jd.propTypes = {
      beat: Rd().bool,
      border: Rd().bool,
      beatFade: Rd().bool,
      bounce: Rd().bool,
      className: Rd().string,
      fade: Rd().bool,
      flash: Rd().bool,
      mask: Rd().oneOfType([Rd().object, Rd().array, Rd().string]),
      maskId: Rd().string,
      fixedWidth: Rd().bool,
      inverse: Rd().bool,
      flip: Rd().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: Rd().oneOfType([Rd().object, Rd().array, Rd().string]),
      listItem: Rd().bool,
      pull: Rd().oneOf(["right", "left"]),
      pulse: Rd().bool,
      rotation: Rd().oneOf([0, 90, 180, 270]),
      rotateBy: Rd().bool,
      shake: Rd().bool,
      size: Rd().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: Rd().bool,
      spinPulse: Rd().bool,
      spinReverse: Rd().bool,
      symbol: Rd().oneOfType([Rd().bool, Rd().string]),
      title: Rd().string,
      titleId: Rd().string,
      transform: Rd().oneOfType([Rd().string, Rd().object]),
      swapOpacity: Rd().bool,
      widthAuto: Rd().bool
    };
    var Ud = function dd(Od, md) {
      var Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof md) return md;
      var Fd = (md.children || []).map((function(md) {
          return dd(Od, md)
        })),
        Rd = Object.keys(md.attributes || {}).reduce((function(dd, Od) {
          var Wd = md.attributes[Od];
          switch (Od) {
            case "class":
              dd.attrs.className = Wd, delete md.attributes.class;
              break;
            case "style":
              dd.attrs.style = Wd.split(";").map((function(dd) {
                return dd.trim()
              })).filter((function(dd) {
                return dd
              })).reduce((function(dd, Od) {
                var md, Wd = Od.indexOf(":"),
                  Fd = Td(Od.slice(0, Wd)),
                  Rd = Od.slice(Wd + 1).trim();
                return Fd.startsWith("webkit") ? dd[(md = Fd, md.charAt(0).toUpperCase() + md.slice(1))] = Rd : dd[Fd] = Rd, dd
              }), {});
              break;
            default:
              0 === Od.indexOf("aria-") || 0 === Od.indexOf("data-") ? dd.attrs[Od.toLowerCase()] = Wd : dd.attrs[Td(Od)] = Wd
          }
          return dd
        }), {
          attrs: {}
        }),
        Xd = Wd.style,
        Kd = void 0 === Xd ? {} : Xd,
        hd = function(dd, Od) {
          if (null == dd) return {};
          var md, Wd, Fd = function(dd, Od) {
            if (null == dd) return {};
            var md = {};
            for (var Wd in dd)
              if ({}.hasOwnProperty.call(dd, Wd)) {
                if (-1 !== Od.indexOf(Wd)) continue;
                md[Wd] = dd[Wd]
              } return md
          }(dd, Od);
          if (Object.getOwnPropertySymbols) {
            var Rd = Object.getOwnPropertySymbols(dd);
            for (Wd = 0; Wd < Rd.length; Wd++) md = Rd[Wd], -1 === Od.indexOf(md) && {}.propertyIsEnumerable.call(dd, md) && (Fd[md] = dd[md])
          }
          return Fd
        }(Wd, pd);
      return Rd.attrs.style = Qd(Qd({}, Rd.attrs.style), Kd), Od.apply(void 0, [md.tag, Qd(Qd({}, Rd.attrs), hd)].concat(od(Fd)))
    }.bind(null, Xd.createElement)
  },
  5870: (dd, Od, md) => {
    var Wd = md(5874);

    function Fd() {}

    function Rd() {}
    Rd.resetWarningCache = Fd, dd.exports = function() {
      function dd(dd, Od, md, Fd, Rd, Xd) {
        if (Xd !== Wd) {
          var Kd = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Kd.name = "Invariant Violation", Kd
        }
      }

      function Od() {
        return dd
      }
      dd.isRequired = dd;
      var md = {
        array: dd,
        bigint: dd,
        bool: dd,
        func: dd,
        number: dd,
        object: dd,
        string: dd,
        symbol: dd,
        any: dd,
        arrayOf: Od,
        element: dd,
        elementType: dd,
        instanceOf: Od,
        node: dd,
        objectOf: Od,
        oneOf: Od,
        oneOfType: Od,
        shape: Od,
        exact: Od,
        checkPropTypes: Rd,
        resetWarningCache: Fd
      };
      return md.PropTypes = md, md
    }
  },
  5864: (dd, Od, md) => {
    dd.exports = md(5870)()
  },
  5874: dd => {
    dd.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7699: (dd, Od, md) => {
    function Wd(dd, Od) {
      (null == Od || Od > dd.length) && (Od = dd.length);
      for (var md = 0, Wd = Array(Od); md < Od; md++) Wd[md] = dd[md];
      return Wd
    }

    function Fd(dd, Od) {
      for (var md = 0; md < Od.length; md++) {
        var Wd = Od[md];
        Wd.enumerable = Wd.enumerable || !1, Wd.configurable = !0, "value" in Wd && (Wd.writable = !0), Object.defineProperty(dd, td(Wd.key), Wd)
      }
    }

    function Rd(dd, Od) {
      var md = "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
      if (!md) {
        if (Array.isArray(dd) || (md = Nd(dd)) || Od && dd && "number" == typeof dd.length) {
          md && (dd = md);
          var Wd = 0,
            Fd = function() {};
          return {
            s: Fd,
            n: function() {
              return Wd >= dd.length ? {
                done: !0
              } : {
                done: !1,
                value: dd[Wd++]
              }
            },
            e: function(dd) {
              throw dd
            },
            f: Fd
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Rd, Xd = !0,
        Kd = !1;
      return {
        s: function() {
          md = md.call(dd)
        },
        n: function() {
          var dd = md.next();
          return Xd = dd.done, dd
        },
        e: function(dd) {
          Kd = !0, Rd = dd
        },
        f: function() {
          try {
            Xd || null == md.return || md.return()
          } finally {
            if (Kd) throw Rd
          }
        }
      }
    }

    function Xd(dd, Od, md) {
      return (Od = td(Od)) in dd ? Object.defineProperty(dd, Od, {
        value: md,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Od] = md, dd
    }

    function Kd(dd, Od) {
      var md = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        Od && (Wd = Wd.filter((function(Od) {
          return Object.getOwnPropertyDescriptor(dd, Od).enumerable
        }))), md.push.apply(md, Wd)
      }
      return md
    }

    function hd(dd) {
      for (var Od = 1; Od < arguments.length; Od++) {
        var md = null != arguments[Od] ? arguments[Od] : {};
        Od % 2 ? Kd(Object(md), !0).forEach((function(Od) {
          Xd(dd, Od, md[Od])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(md)) : Kd(Object(md)).forEach((function(Od) {
          Object.defineProperty(dd, Od, Object.getOwnPropertyDescriptor(md, Od))
        }))
      }
      return dd
    }

    function vd(dd, Od) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Od) {
        var md = null == dd ? null : "undefined" != typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null != md) {
          var Wd, Fd, Rd, Xd, Kd = [],
            hd = !0,
            vd = !1;
          try {
            if (Rd = (md = md.call(dd)).next, 0 === Od) {
              if (Object(md) !== md) return;
              hd = !1
            } else
              for (; !(hd = (Wd = Rd.call(md)).done) && (Kd.push(Wd.value), Kd.length !== Od); hd = !0);
          } catch (dd) {
            vd = !0, Fd = dd
          } finally {
            try {
              if (!hd && null != md.return && (Xd = md.return(), Object(Xd) !== Xd)) return
            } finally {
              if (vd) throw Fd
            }
          }
          return Kd
        }
      }(dd, Od) || Nd(dd, Od) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Qd(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return Wd(dd)
      }(dd) || function(dd) {
        if ("undefined" != typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || Nd(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function td(dd) {
      var Od = function(dd, Od) {
        if ("object" != typeof dd || !dd) return dd;
        var md = dd[Symbol.toPrimitive];
        if (void 0 !== md) {
          var Wd = md.call(dd, Od || "default");
          if ("object" != typeof Wd) return Wd;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Od ? String : Number)(dd)
      }(dd, "string");
      return "symbol" == typeof Od ? Od : Od + ""
    }

    function od(dd) {
      return od = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, od(dd)
    }

    function Nd(dd, Od) {
      if (dd) {
        if ("string" == typeof dd) return Wd(dd, Od);
        var md = {}.toString.call(dd).slice(8, -1);
        return "Object" === md && dd.constructor && (md = dd.constructor.name), "Map" === md || "Set" === md ? Array.from(dd) : "Arguments" === md || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(md) ? Wd(dd, Od) : void 0
      }
    }
    md.r(Od), md.d(Od, {
      api: () => Mm,
      config: () => RF,
      counter: () => qF,
      dom: () => KF,
      findIconDefinition: () => vF,
      icon: () => tF,
      layer: () => oF,
      library: () => XF,
      noAuto: () => FF,
      parse: () => hF,
      text: () => NF,
      toHtml: () => QF
    });
    var qd = function() {},
      Hd = {},
      yd = {},
      bd = null,
      Td = {
        mark: qd,
        measure: qd
      };
    try {
      "undefined" !== typeof window && (Hd = window), "undefined" !== typeof document && (yd = document), "undefined" !== typeof MutationObserver && (bd = MutationObserver), "undefined" !== typeof performance && (Td = performance)
    } catch (ed) {}
    var pd, Yd, gd = (Hd.navigator || {}).userAgent,
      wd = void 0 === gd ? "" : gd,
      Ed = Hd,
      Jd = yd,
      Ud = bd,
      xd = Td,
      Bd = (Ed.document, !!Jd.documentElement && !!Jd.head && "function" === typeof Jd.addEventListener && "function" === typeof Jd.createElement),
      Sd = ~wd.indexOf("MSIE") || ~wd.indexOf("Trident/"),
      sd = {
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
      ud = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      Vd = "classic",
      Ad = "duotone",
      rd = "sharp",
      Gd = "sharp-duotone",
      nd = "chisel",
      Ld = "etch",
      Pd = "graphite",
      zd = "jelly",
      cd = "jelly-duo",
      jd = "jelly-fill",
      Dd = "notdog",
      ed = "notdog-duo",
      Id = "slab",
      ld = "slab-press",
      Cd = "thumbprint",
      Zd = "utility",
      kd = "utility-duo",
      fd = "utility-fill",
      Md = "whiteboard",
      dO = [Vd, Ad, rd, Gd, nd, Ld, Pd, zd, cd, jd, Dd, ed, Id, ld, Cd, Zd, kd, fd, Md],
      OO = (Xd(Xd(Xd(Xd(Xd(Xd(Xd(Xd(Xd(Xd(pd = {}, Vd, "Classic"), Ad, "Duotone"), rd, "Sharp"), Gd, "Sharp Duotone"), nd, "Chisel"), Ld, "Etch"), Pd, "Graphite"), zd, "Jelly"), cd, "Jelly Duo"), jd, "Jelly Fill"), Xd(Xd(Xd(Xd(Xd(Xd(Xd(Xd(Xd(pd, Dd, "Notdog"), ed, "Notdog Duo"), Id, "Slab"), ld, "Slab Press"), Cd, "Thumbprint"), Zd, "Utility"), kd, "Utility Duo"), fd, "Utility Fill"), Md, "Whiteboard"), new Map([
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
      mO = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      WO = {
        fak: "kit",
        "fa-kit": "kit"
      },
      FO = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      RO = (Xd(Xd({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      XO = {
        "kit-duotone": "fakd"
      },
      KO = "duotone-group",
      hO = "swap-opacity",
      vO = "primary",
      QO = "secondary",
      tO = (Xd(Xd(Xd(Xd(Xd(Xd(Xd(Xd(Xd(Xd(Yd = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), Xd(Xd(Xd(Xd(Xd(Xd(Xd(Xd(Xd(Yd, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), Xd(Xd({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      oO = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      NO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      qO = NO.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      HO = [].concat(Qd(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", KO, hO, vO, QO]).concat(NO.map((function(dd) {
        return "".concat(dd, "x")
      }))).concat(qO.map((function(dd) {
        return "w-".concat(dd)
      }))),
      yO = "___FONT_AWESOME___",
      bO = "svg-inline--fa",
      TO = "data-fa-i2svg",
      pO = "data-fa-pseudo-element",
      YO = "data-prefix",
      gO = "data-icon",
      wO = "fontawesome-i2svg",
      aO = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      EO = ["::before", "::after", ":before", ":after"],
      JO = function() {
        try {
          return !0
        } catch (dd) {
          return !1
        }
      }();

    function UO(dd) {
      return new Proxy(dd, {
        get: function(dd, Od) {
          return Od in dd ? dd[Od] : dd[Vd]
        }
      })
    }
    var xO = hd({}, sd);
    xO[Vd] = hd(hd(hd(hd({}, {
      "fa-duotone": "duotone"
    }), sd[Vd]), WO), FO);
    var BO = UO(xO),
      SO = hd({}, {
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
    SO[Vd] = hd(hd(hd(hd({}, {
      duotone: "fad"
    }), SO[Vd]), RO), XO);
    var sO = UO(SO),
      uO = hd({}, tO);
    uO[Vd] = hd(hd({}, uO[Vd]), {
      fak: "fa-kit"
    });
    var VO = UO(uO),
      iO = hd({}, {
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
    iO[Vd] = hd(hd({}, iO[Vd]), {
      "fa-kit": "fak"
    });
    UO(iO);
    var AO = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      rO = "fa-layers-text",
      GO = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      nO = (UO(hd({}, {
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
      LO = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      PO = [].concat(Qd(["kit"]), Qd(HO)),
      zO = Ed.FontAwesomeConfig || {};
    if (Jd && "function" === typeof Jd.querySelector) {
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
      ].forEach((function(dd) {
        var Od = vd(dd, 2),
          md = Od[0],
          Wd = Od[1],
          Fd = function(dd) {
            return "" === dd || "false" !== dd && ("true" === dd || dd)
          }(function(dd) {
            var Od = Jd.querySelector("script[" + dd + "]");
            if (Od) return Od.getAttribute(dd)
          }(md));
        void 0 !== Fd && null !== Fd && (zO[Wd] = Fd)
      }))
    }
    var cO = {
      styleDefault: "solid",
      familyDefault: Vd,
      cssPrefix: "fa",
      replacementClass: bO,
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
    zO.familyPrefix && (zO.cssPrefix = zO.familyPrefix);
    var jO = hd(hd({}, cO), zO);
    jO.autoReplaceSvg || (jO.observeMutations = !1);
    var DO = {};
    Object.keys(cO).forEach((function(dd) {
      Object.defineProperty(DO, dd, {
        enumerable: !0,
        set: function(Od) {
          jO[dd] = Od, eO.forEach((function(dd) {
            return dd(DO)
          }))
        },
        get: function() {
          return jO[dd]
        }
      })
    })), Object.defineProperty(DO, "familyPrefix", {
      enumerable: !0,
      set: function(dd) {
        jO.cssPrefix = dd, eO.forEach((function(dd) {
          return dd(DO)
        }))
      },
      get: function() {
        return jO.cssPrefix
      }
    }), Ed.FontAwesomeConfig = DO;
    var eO = [];
    var IO = 16,
      lO = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function CO() {
      for (var dd = 12, Od = ""; dd-- > 0;) Od += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return Od
    }

    function ZO(dd) {
      for (var Od = [], md = (dd || []).length >>> 0; md--;) Od[md] = dd[md];
      return Od
    }

    function kO(dd) {
      return dd.classList ? ZO(dd.classList) : (dd.getAttribute("class") || "").split(" ").filter((function(dd) {
        return dd
      }))
    }

    function fO(dd) {
      return "".concat(dd).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function MO(dd) {
      return Object.keys(dd || {}).reduce((function(Od, md) {
        return Od + "".concat(md, ": ").concat(dd[md].trim(), ";")
      }), "")
    }

    function dm(dd) {
      return dd.size !== lO.size || dd.x !== lO.x || dd.y !== lO.y || dd.rotate !== lO.rotate || dd.flipX || dd.flipY
    }

    function Om() {
      var dd = "fa",
        Od = bO,
        md = DO.cssPrefix,
        Wd = DO.replacementClass,
        Fd = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (md !== dd || Wd !== Od) {
        var Rd = new RegExp("\\.".concat(dd, "\\-"), "g"),
          Xd = new RegExp("\\--".concat(dd, "\\-"), "g"),
          Kd = new RegExp("\\.".concat(Od), "g");
        Fd = Fd.replace(Rd, ".".concat(md, "-")).replace(Xd, "--".concat(md, "-")).replace(Kd, ".".concat(Wd))
      }
      return Fd
    }
    var mm = !1;

    function Wm() {
      DO.autoAddCss && !mm && (! function(dd) {
        if (dd && Bd) {
          var Od = Jd.createElement("style");
          Od.setAttribute("type", "text/css"), Od.innerHTML = dd;
          for (var md = Jd.head.childNodes, Wd = null, Fd = md.length - 1; Fd > -1; Fd--) {
            var Rd = md[Fd],
              Xd = (Rd.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(Xd) > -1 && (Wd = Rd)
          }
          Jd.head.insertBefore(Od, Wd)
        }
      }(Om()), mm = !0)
    }
    var Fm = {
        mixout: function() {
          return {
            dom: {
              css: Om,
              insertCss: Wm
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              Wm()
            },
            beforeI2svg: function() {
              Wm()
            }
          }
        }
      },
      Rm = Ed || {};
    Rm[yO] || (Rm[yO] = {}), Rm[yO].styles || (Rm[yO].styles = {}), Rm[yO].hooks || (Rm[yO].hooks = {}), Rm[yO].shims || (Rm[yO].shims = []);
    var Xm = Rm[yO],
      Km = [],
      hm = function() {
        Jd.removeEventListener("DOMContentLoaded", hm), Qm = 1, Km.map((function(dd) {
          return dd()
        }))
      },
      Qm = !1;

    function tm(dd) {
      var Od = dd.tag,
        md = dd.attributes,
        Wd = void 0 === md ? {} : md,
        Fd = dd.children,
        Rd = void 0 === Fd ? [] : Fd;
      return "string" === typeof dd ? fO(dd) : "<".concat(Od, " ").concat(function(dd) {
        return Object.keys(dd || {}).reduce((function(Od, md) {
          return Od + "".concat(md, '="').concat(fO(dd[md]), '" ')
        }), "").trim()
      }(Wd), ">").concat(Rd.map(tm).join(""), "</").concat(Od, ">")
    }

    function om(dd, Od, md) {
      if (dd && dd[Od] && dd[Od][md]) return {
        prefix: Od,
        iconName: md,
        icon: dd[Od][md]
      }
    }
    Bd && ((Qm = (Jd.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Jd.readyState)) || Jd.addEventListener("DOMContentLoaded", hm));
    var Nm = function(dd, Od, md, Wd) {
      var Fd, Rd, Xd, Kd = Object.keys(dd),
        hd = Kd.length,
        vd = void 0 !== Wd ? function(dd, Od) {
          return function(md, Wd, Fd, Rd) {
            return dd.call(Od, md, Wd, Fd, Rd)
          }
        }(Od, Wd) : Od;
      for (void 0 === md ? (Fd = 1, Xd = dd[Kd[0]]) : (Fd = 0, Xd = md); Fd < hd; Fd++) Xd = vd(Xd, dd[Rd = Kd[Fd]], Rd, dd);
      return Xd
    };

    function qm(dd) {
      return 1 !== Qd(dd).length ? null : dd.codePointAt(0).toString(16)
    }

    function Hm(dd) {
      return Object.keys(dd).reduce((function(Od, md) {
        var Wd = dd[md];
        return !!Wd.icon ? Od[Wd.iconName] = Wd.icon : Od[md] = Wd, Od
      }), {})
    }

    function ym(dd, Od) {
      var md = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        Wd = void 0 !== md && md,
        Fd = Hm(Od);
      "function" !== typeof Xm.hooks.addPack || Wd ? Xm.styles[dd] = hd(hd({}, Xm.styles[dd] || {}), Fd) : Xm.hooks.addPack(dd, Hm(Od)), "fas" === dd && ym("fa", Od)
    }
    var bm = Xm.styles,
      Tm = Xm.shims,
      pm = Object.keys(VO),
      Ym = pm.reduce((function(dd, Od) {
        return dd[Od] = Object.keys(VO[Od]), dd
      }), {}),
      gm = null,
      wm = {},
      am = {},
      Em = {},
      Jm = {},
      Um = {};

    function xm(dd, Od) {
      var md, Wd = Od.split("-"),
        Fd = Wd[0],
        Rd = Wd.slice(1).join("-");
      return Fd !== dd || "" === Rd || (md = Rd, ~PO.indexOf(md)) ? null : Rd
    }
    var Bm, Sm = function() {
      var dd = function(dd) {
        return Nm(bm, (function(Od, md, Wd) {
          return Od[Wd] = Nm(md, dd, {}), Od
        }), {})
      };
      wm = dd((function(dd, Od, md) {
        (Od[3] && (dd[Od[3]] = md), Od[2]) && Od[2].filter((function(dd) {
          return "number" === typeof dd
        })).forEach((function(Od) {
          dd[Od.toString(16)] = md
        }));
        return dd
      })), am = dd((function(dd, Od, md) {
        (dd[md] = md, Od[2]) && Od[2].filter((function(dd) {
          return "string" === typeof dd
        })).forEach((function(Od) {
          dd[Od] = md
        }));
        return dd
      })), Um = dd((function(dd, Od, md) {
        var Wd = Od[2];
        return dd[md] = md, Wd.forEach((function(Od) {
          dd[Od] = md
        })), dd
      }));
      var Od = "far" in bm || DO.autoFetchSvg,
        md = Nm(Tm, (function(dd, md) {
          var Wd = md[0],
            Fd = md[1],
            Rd = md[2];
          return "far" !== Fd || Od || (Fd = "fas"), "string" === typeof Wd && (dd.names[Wd] = {
            prefix: Fd,
            iconName: Rd
          }), "number" === typeof Wd && (dd.unicodes[Wd.toString(16)] = {
            prefix: Fd,
            iconName: Rd
          }), dd
        }), {
          names: {},
          unicodes: {}
        });
      Em = md.names, Jm = md.unicodes, gm = Am(DO.styleDefault, {
        family: DO.familyDefault
      })
    };

    function sm(dd, Od) {
      return (wm[dd] || {})[Od]
    }

    function um(dd, Od) {
      return (Um[dd] || {})[Od]
    }

    function Vm(dd) {
      return Em[dd] || {
        prefix: null,
        iconName: null
      }
    }

    function im() {
      return gm
    }
    Bm = function(dd) {
      gm = Am(dd.styleDefault, {
        family: DO.familyDefault
      })
    }, eO.push(Bm), Sm();

    function Am(dd) {
      var Od = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        md = void 0 === Od ? Vd : Od,
        Wd = BO[md][dd];
      if (md === Ad && !dd) return "fad";
      var Fd = sO[md][dd] || sO[md][Wd],
        Rd = dd in Xm.styles ? dd : null;
      return Fd || Rd || null
    }

    function rm(dd) {
      return dd.sort().filter((function(dd, Od, md) {
        return md.indexOf(dd) === Od
      }))
    }
    var Gm = oO.concat(mO);

    function nm(dd) {
      var Od = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        md = void 0 !== Od && Od,
        Wd = null,
        Fd = rm(dd.filter((function(dd) {
          return Gm.includes(dd)
        }))),
        Rd = rm(dd.filter((function(dd) {
          return !Gm.includes(dd)
        }))),
        Xd = vd(Fd.filter((function(dd) {
          return Wd = dd, !ud.includes(dd)
        })), 1)[0],
        Kd = void 0 === Xd ? null : Xd,
        Qd = function(dd) {
          var Od = Vd,
            md = pm.reduce((function(dd, Od) {
              return dd[Od] = "".concat(DO.cssPrefix, "-").concat(Od), dd
            }), {});
          return dO.forEach((function(Wd) {
            (dd.includes(md[Wd]) || dd.some((function(dd) {
              return Ym[Wd].includes(dd)
            }))) && (Od = Wd)
          })), Od
        }(Fd),
        td = hd(hd({}, function(dd) {
          var Od = [],
            md = null;
          return dd.forEach((function(dd) {
            var Wd = xm(DO.cssPrefix, dd);
            Wd ? md = Wd : dd && Od.push(dd)
          })), {
            iconName: md,
            rest: Od
          }
        }(Rd)), {}, {
          prefix: Am(Kd, {
            family: Qd
          })
        });
      return hd(hd(hd({}, td), function(dd) {
        var Od = dd.values,
          md = dd.family,
          Wd = dd.canonical,
          Fd = dd.givenPrefix,
          Rd = void 0 === Fd ? "" : Fd,
          Xd = dd.styles,
          Kd = void 0 === Xd ? {} : Xd,
          hd = dd.config,
          vd = void 0 === hd ? {} : hd,
          Qd = md === Ad,
          td = Od.includes("fa-duotone") || Od.includes("fad"),
          od = "duotone" === vd.familyDefault,
          Nd = "fad" === Wd.prefix || "fa-duotone" === Wd.prefix;
        !Qd && (td || od || Nd) && (Wd.prefix = "fad");
        (Od.includes("fa-brands") || Od.includes("fab")) && (Wd.prefix = "fab");
        if (!Wd.prefix && Lm.includes(md)) {
          if (Object.keys(Kd).find((function(dd) {
              return Pm.includes(dd)
            })) || vd.autoFetchSvg) {
            var qd = OO.get(md).defaultShortPrefixId;
            Wd.prefix = qd, Wd.iconName = um(Wd.prefix, Wd.iconName) || Wd.iconName
          }
        }
        "fa" !== Wd.prefix && "fa" !== Rd || (Wd.prefix = im() || "fas");
        return Wd
      }({
        values: dd,
        family: Qd,
        styles: bm,
        config: DO,
        canonical: td,
        givenPrefix: Wd
      })), function(dd, Od, md) {
        var Wd = md.prefix,
          Fd = md.iconName;
        if (dd || !Wd || !Fd) return {
          prefix: Wd,
          iconName: Fd
        };
        var Rd = "fa" === Od ? Vm(Fd) : {},
          Xd = um(Wd, Fd);
        Fd = Rd.iconName || Xd || Fd, "far" !== (Wd = Rd.prefix || Wd) || bm.far || !bm.fas || DO.autoFetchSvg || (Wd = "fas");
        return {
          prefix: Wd,
          iconName: Fd
        }
      }(md, Wd, td))
    }
    var Lm = dO.filter((function(dd) {
        return dd !== Vd || dd !== Ad
      })),
      Pm = Object.keys(tO).filter((function(dd) {
        return dd !== Vd
      })).map((function(dd) {
        return Object.keys(tO[dd])
      })).flat();
    var zm = function() {
        return function(dd, Od, md) {
          return Od && Fd(dd.prototype, Od), md && Fd(dd, md), Object.defineProperty(dd, "prototype", {
            writable: !1
          }), dd
        }((function dd() {
          ! function(dd, Od) {
            if (!(dd instanceof Od)) throw new TypeError("Cannot call a class as a function")
          }(this, dd), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var dd = this, Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
            var Fd = md.reduce(this._pullDefinitions, {});
            Object.keys(Fd).forEach((function(Od) {
              dd.definitions[Od] = hd(hd({}, dd.definitions[Od] || {}), Fd[Od]), ym(Od, Fd[Od]);
              var md = VO[Vd][Od];
              md && ym(md, Fd[Od]), Sm()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(dd, Od) {
            var md = Od.prefix && Od.iconName && Od.icon ? {
              0: Od
            } : Od;
            return Object.keys(md).map((function(Od) {
              var Wd = md[Od],
                Fd = Wd.prefix,
                Rd = Wd.iconName,
                Xd = Wd.icon,
                Kd = Xd[2];
              dd[Fd] || (dd[Fd] = {}), Kd.length > 0 && Kd.forEach((function(Od) {
                "string" === typeof Od && (dd[Fd][Od] = Xd)
              })), dd[Fd][Rd] = Xd
            })), dd
          }
        }])
      }(),
      cm = [],
      jm = {},
      Dm = {},
      em = Object.keys(Dm);

    function Im(dd, Od) {
      for (var md = arguments.length, Wd = new Array(md > 2 ? md - 2 : 0), Fd = 2; Fd < md; Fd++) Wd[Fd - 2] = arguments[Fd];
      return (jm[dd] || []).forEach((function(dd) {
        Od = dd.apply(null, [Od].concat(Wd))
      })), Od
    }

    function lm(dd) {
      for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
      (jm[dd] || []).forEach((function(dd) {
        dd.apply(null, md)
      }))
    }

    function Cm() {
      var dd = arguments[0],
        Od = Array.prototype.slice.call(arguments, 1);
      return Dm[dd] ? Dm[dd].apply(null, Od) : void 0
    }

    function Zm(dd) {
      "fa" === dd.prefix && (dd.prefix = "fas");
      var Od = dd.iconName,
        md = dd.prefix || im();
      if (Od) return Od = um(md, Od) || Od, om(km.definitions, md, Od) || om(Xm.styles, md, Od)
    }
    var km = new zm,
      fm = {
        i2svg: function() {
          var dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Bd ? (lm("beforeI2svg", dd), Cm("pseudoElements2svg", dd), Cm("i2svg", dd)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var dd, Od = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            md = Od.autoReplaceSvgRoot;
          !1 === DO.autoReplaceSvg && (DO.autoReplaceSvg = !0), DO.observeMutations = !0, dd = function() {
            dW({
              autoReplaceSvgRoot: md
            }), lm("watch", Od)
          }, Bd && (Qm ? setTimeout(dd, 0) : Km.push(dd))
        }
      },
      Mm = {
        noAuto: function() {
          DO.autoReplaceSvg = !1, DO.observeMutations = !1, lm("noAuto")
        },
        config: DO,
        dom: fm,
        parse: {
          icon: function(dd) {
            if (null === dd) return null;
            if ("object" === od(dd) && dd.prefix && dd.iconName) return {
              prefix: dd.prefix,
              iconName: um(dd.prefix, dd.iconName) || dd.iconName
            };
            if (Array.isArray(dd) && 2 === dd.length) {
              var Od = 0 === dd[1].indexOf("fa-") ? dd[1].slice(3) : dd[1],
                md = Am(dd[0]);
              return {
                prefix: md,
                iconName: um(md, Od) || Od
              }
            }
            if ("string" === typeof dd && (dd.indexOf("".concat(DO.cssPrefix, "-")) > -1 || dd.match(AO))) {
              var Wd = nm(dd.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: Wd.prefix || im(),
                iconName: um(Wd.prefix, Wd.iconName) || Wd.iconName
              }
            }
            if ("string" === typeof dd) {
              var Fd = im();
              return {
                prefix: Fd,
                iconName: um(Fd, dd) || dd
              }
            }
          }
        },
        library: km,
        findIconDefinition: Zm,
        toHtml: tm
      },
      dW = function() {
        var dd = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          Od = void 0 === dd ? Jd : dd;
        (Object.keys(Xm.styles).length > 0 || DO.autoFetchSvg) && Bd && DO.autoReplaceSvg && Mm.dom.i2svg({
          node: Od
        })
      };

    function OW(dd, Od) {
      return Object.defineProperty(dd, "abstract", {
        get: Od
      }), Object.defineProperty(dd, "html", {
        get: function() {
          return dd.abstract.map((function(dd) {
            return tm(dd)
          }))
        }
      }), Object.defineProperty(dd, "node", {
        get: function() {
          if (Bd) {
            var Od = Jd.createElement("div");
            return Od.innerHTML = dd.html, Od.children
          }
        }
      }), dd
    }

    function mW(dd) {
      var Od = dd.icons,
        md = Od.main,
        Wd = Od.mask,
        Fd = dd.prefix,
        Rd = dd.iconName,
        Xd = dd.transform,
        Kd = dd.symbol,
        vd = dd.maskId,
        Qd = dd.extra,
        td = dd.watchable,
        od = void 0 !== td && td,
        Nd = Wd.found ? Wd : md,
        qd = Nd.width,
        Hd = Nd.height,
        yd = [DO.replacementClass, Rd ? "".concat(DO.cssPrefix, "-").concat(Rd) : ""].filter((function(dd) {
          return -1 === Qd.classes.indexOf(dd)
        })).filter((function(dd) {
          return "" !== dd || !!dd
        })).concat(Qd.classes).join(" "),
        bd = {
          children: [],
          attributes: hd(hd({}, Qd.attributes), {}, {
            "data-prefix": Fd,
            "data-icon": Rd,
            class: yd,
            role: Qd.attributes.role || "img",
            viewBox: "0 0 ".concat(qd, " ").concat(Hd)
          })
        };
      (function(dd) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(Od) {
          return Od in dd
        }))
      })(Qd.attributes) || Qd.attributes["aria-hidden"] || (bd.attributes["aria-hidden"] = "true"), od && (bd.attributes[TO] = "");
      var Td = hd(hd({}, bd), {}, {
          prefix: Fd,
          iconName: Rd,
          main: md,
          mask: Wd,
          maskId: vd,
          transform: Xd,
          symbol: Kd,
          styles: hd({}, Qd.styles)
        }),
        pd = Wd.found && md.found ? Cm("generateAbstractMask", Td) || {
          children: [],
          attributes: {}
        } : Cm("generateAbstractIcon", Td) || {
          children: [],
          attributes: {}
        },
        Yd = pd.children,
        gd = pd.attributes;
      return Td.children = Yd, Td.attributes = gd, Kd ? function(dd) {
        var Od = dd.prefix,
          md = dd.iconName,
          Wd = dd.children,
          Fd = dd.attributes,
          Rd = dd.symbol,
          Xd = !0 === Rd ? "".concat(Od, "-").concat(DO.cssPrefix, "-").concat(md) : Rd;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: hd(hd({}, Fd), {}, {
              id: Xd
            }),
            children: Wd
          }]
        }]
      }(Td) : function(dd) {
        var Od = dd.children,
          md = dd.main,
          Wd = dd.mask,
          Fd = dd.attributes,
          Rd = dd.styles,
          Xd = dd.transform;
        if (dm(Xd) && md.found && !Wd.found) {
          var Kd = {
            x: md.width / md.height / 2,
            y: .5
          };
          Fd.style = MO(hd(hd({}, Rd), {}, {
            "transform-origin": "".concat(Kd.x + Xd.x / 16, "em ").concat(Kd.y + Xd.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: Fd,
          children: Od
        }]
      }(Td)
    }

    function WW(dd) {
      var Od = dd.content,
        md = dd.width,
        Wd = dd.height,
        Fd = dd.transform,
        Rd = dd.extra,
        Xd = dd.watchable,
        Kd = void 0 !== Xd && Xd,
        vd = hd(hd({}, Rd.attributes), {}, {
          class: Rd.classes.join(" ")
        });
      Kd && (vd[TO] = "");
      var Qd = hd({}, Rd.styles);
      dm(Fd) && (Qd.transform = function(dd) {
        var Od = dd.transform,
          md = dd.width,
          Wd = void 0 === md ? 16 : md,
          Fd = dd.height,
          Rd = void 0 === Fd ? 16 : Fd,
          Xd = dd.startCentered,
          Kd = void 0 !== Xd && Xd,
          hd = "";
        return hd += Kd && Sd ? "translate(".concat(Od.x / IO - Wd / 2, "em, ").concat(Od.y / IO - Rd / 2, "em) ") : Kd ? "translate(calc(-50% + ".concat(Od.x / IO, "em), calc(-50% + ").concat(Od.y / IO, "em)) ") : "translate(".concat(Od.x / IO, "em, ").concat(Od.y / IO, "em) "), hd += "scale(".concat(Od.size / IO * (Od.flipX ? -1 : 1), ", ").concat(Od.size / IO * (Od.flipY ? -1 : 1), ") "), hd + "rotate(".concat(Od.rotate, "deg) ")
      }({
        transform: Fd,
        startCentered: !0,
        width: md,
        height: Wd
      }), Qd["-webkit-transform"] = Qd.transform);
      var td = MO(Qd);
      td.length > 0 && (vd.style = td);
      var od = [];
      return od.push({
        tag: "span",
        attributes: vd,
        children: [Od]
      }), od
    }
    var FW = Xm.styles;

    function RW(dd) {
      var Od = dd[0],
        md = dd[1],
        Wd = vd(dd.slice(4), 1)[0];
      return {
        found: !0,
        width: Od,
        height: md,
        icon: Array.isArray(Wd) ? {
          tag: "g",
          attributes: {
            class: "".concat(DO.cssPrefix, "-").concat(LO.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(DO.cssPrefix, "-").concat(LO.SECONDARY),
              fill: "currentColor",
              d: Wd[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(DO.cssPrefix, "-").concat(LO.PRIMARY),
              fill: "currentColor",
              d: Wd[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: Wd
          }
        }
      }
    }
    var XW = {
      found: !1,
      width: 512,
      height: 512
    };

    function KW(dd, Od) {
      var md = Od;
      return "fa" === Od && null !== DO.styleDefault && (Od = im()), new Promise((function(Wd, Fd) {
        if ("fa" === md) {
          var Rd = Vm(dd) || {};
          dd = Rd.iconName || dd, Od = Rd.prefix || Od
        }
        if (dd && Od && FW[Od] && FW[Od][dd]) return Wd(RW(FW[Od][dd]));
        ! function(dd, Od) {
          JO || DO.showMissingIcons || !dd || console.error('Icon with name "'.concat(dd, '" and prefix "').concat(Od, '" is missing.'))
        }(dd, Od), Wd(hd(hd({}, XW), {}, {
          icon: DO.showMissingIcons && dd && Cm("missingIconAbstract") || {}
        }))
      }))
    }
    var hW = function() {},
      vW = DO.measurePerformance && xd && xd.mark && xd.measure ? xd : {
        mark: hW,
        measure: hW
      },
      QW = 'FA "7.2.0"',
      tW = function(dd) {
        vW.mark("".concat(QW, " ").concat(dd, " ends")), vW.measure("".concat(QW, " ").concat(dd), "".concat(QW, " ").concat(dd, " begins"), "".concat(QW, " ").concat(dd, " ends"))
      },
      oW = function(dd) {
        return vW.mark("".concat(QW, " ").concat(dd, " begins")),
          function() {
            return tW(dd)
          }
      },
      NW = function() {};

    function qW(dd) {
      return "string" === typeof(dd.getAttribute ? dd.getAttribute(TO) : null)
    }

    function HW(dd) {
      return Jd.createElementNS("http://www.w3.org/2000/svg", dd)
    }

    function yW(dd) {
      return Jd.createElement(dd)
    }

    function bW(dd) {
      var Od = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        md = void 0 === Od ? "svg" === dd.tag ? HW : yW : Od;
      if ("string" === typeof dd) return Jd.createTextNode(dd);
      var Wd = md(dd.tag);
      return Object.keys(dd.attributes || []).forEach((function(Od) {
        Wd.setAttribute(Od, dd.attributes[Od])
      })), (dd.children || []).forEach((function(dd) {
        Wd.appendChild(bW(dd, {
          ceFn: md
        }))
      })), Wd
    }
    var TW = {
      replace: function(dd) {
        var Od = dd[0];
        if (Od.parentNode)
          if (dd[1].forEach((function(dd) {
              Od.parentNode.insertBefore(bW(dd), Od)
            })), null === Od.getAttribute(TO) && DO.keepOriginalSource) {
            var md = Jd.createComment(function(dd) {
              var Od = " ".concat(dd.outerHTML, " ");
              return "".concat(Od, "Font Awesome fontawesome.com ")
            }(Od));
            Od.parentNode.replaceChild(md, Od)
          } else Od.remove()
      },
      nest: function(dd) {
        var Od = dd[0],
          md = dd[1];
        if (~kO(Od).indexOf(DO.replacementClass)) return TW.replace(dd);
        var Wd = new RegExp("".concat(DO.cssPrefix, "-.*"));
        if (delete md[0].attributes.id, md[0].attributes.class) {
          var Fd = md[0].attributes.class.split(" ").reduce((function(dd, Od) {
            return Od === DO.replacementClass || Od.match(Wd) ? dd.toSvg.push(Od) : dd.toNode.push(Od), dd
          }), {
            toNode: [],
            toSvg: []
          });
          md[0].attributes.class = Fd.toSvg.join(" "), 0 === Fd.toNode.length ? Od.removeAttribute("class") : Od.setAttribute("class", Fd.toNode.join(" "))
        }
        var Rd = md.map((function(dd) {
          return tm(dd)
        })).join("\n");
        Od.setAttribute(TO, ""), Od.innerHTML = Rd
      }
    };

    function pW(dd) {
      dd()
    }

    function YW(dd, Od) {
      var md = "function" === typeof Od ? Od : NW;
      if (0 === dd.length) md();
      else {
        var Wd = pW;
        "async" === DO.mutateApproach && (Wd = Ed.requestAnimationFrame || pW), Wd((function() {
          var Od = !0 === DO.autoReplaceSvg ? TW.replace : TW[DO.autoReplaceSvg] || TW.replace,
            Wd = oW("mutate");
          dd.map(Od), Wd(), md()
        }))
      }
    }
    var gW = !1;

    function wW() {
      gW = !0
    }

    function aW() {
      gW = !1
    }
    var EW = null;

    function JW(dd) {
      if (Ud && DO.observeMutations) {
        var Od = dd.treeCallback,
          md = void 0 === Od ? NW : Od,
          Wd = dd.nodeCallback,
          Fd = void 0 === Wd ? NW : Wd,
          Rd = dd.pseudoElementsCallback,
          Xd = void 0 === Rd ? NW : Rd,
          Kd = dd.observeMutationsRoot,
          hd = void 0 === Kd ? Jd : Kd;
        EW = new Ud((function(dd) {
          if (!gW) {
            var Od = im();
            ZO(dd).forEach((function(dd) {
              if ("childList" === dd.type && dd.addedNodes.length > 0 && !qW(dd.addedNodes[0]) && (DO.searchPseudoElements && Xd(dd.target), md(dd.target)), "attributes" === dd.type && dd.target.parentNode && DO.searchPseudoElements && Xd([dd.target], !0), "attributes" === dd.type && qW(dd.target) && ~nO.indexOf(dd.attributeName))
                if ("class" === dd.attributeName && function(dd) {
                    var Od = dd.getAttribute ? dd.getAttribute(YO) : null,
                      md = dd.getAttribute ? dd.getAttribute(gO) : null;
                    return Od && md
                  }(dd.target)) {
                  var Wd = nm(kO(dd.target)),
                    Rd = Wd.prefix,
                    Kd = Wd.iconName;
                  dd.target.setAttribute(YO, Rd || Od), Kd && dd.target.setAttribute(gO, Kd)
                } else(hd = dd.target) && hd.classList && hd.classList.contains && hd.classList.contains(DO.replacementClass) && Fd(dd.target);
              var hd
            }))
          }
        })), Bd && EW.observe(hd, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function UW(dd) {
      var Od, md, Wd = dd.getAttribute("data-prefix"),
        Fd = dd.getAttribute("data-icon"),
        Rd = void 0 !== dd.innerText ? dd.innerText.trim() : "",
        Xd = nm(kO(dd));
      return Xd.prefix || (Xd.prefix = im()), Wd && Fd && (Xd.prefix = Wd, Xd.iconName = Fd), Xd.iconName && Xd.prefix || (Xd.prefix && Rd.length > 0 && (Xd.iconName = (Od = Xd.prefix, md = dd.innerText, (am[Od] || {})[md] || sm(Xd.prefix, qm(dd.innerText)))), !Xd.iconName && DO.autoFetchSvg && dd.firstChild && dd.firstChild.nodeType === Node.TEXT_NODE && (Xd.iconName = dd.firstChild.data)), Xd
    }

    function xW(dd) {
      var Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        md = UW(dd),
        Wd = md.iconName,
        Fd = md.prefix,
        Rd = md.rest,
        Xd = function(dd) {
          return ZO(dd.attributes).reduce((function(dd, Od) {
            return "class" !== dd.name && "style" !== dd.name && (dd[Od.name] = Od.value), dd
          }), {})
        }(dd),
        Kd = Im("parseNodeAttributes", {}, dd),
        vd = Od.styleParser ? function(dd) {
          var Od = dd.getAttribute("style"),
            md = [];
          return Od && (md = Od.split(";").reduce((function(dd, Od) {
            var md = Od.split(":"),
              Wd = md[0],
              Fd = md.slice(1);
            return Wd && Fd.length > 0 && (dd[Wd] = Fd.join(":").trim()), dd
          }), {})), md
        }(dd) : [];
      return hd({
        iconName: Wd,
        prefix: Fd,
        transform: lO,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: Rd,
          styles: vd,
          attributes: Xd
        }
      }, Kd)
    }
    var BW = Xm.styles;

    function SW(dd) {
      var Od = "nest" === DO.autoReplaceSvg ? xW(dd, {
        styleParser: !1
      }) : xW(dd);
      return ~Od.extra.classes.indexOf(rO) ? Cm("generateLayersText", dd, Od) : Cm("generateSvgReplacementMutation", dd, Od)
    }

    function sW(dd) {
      var Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!Bd) return Promise.resolve();
      var md = Jd.documentElement.classList,
        Wd = function(dd) {
          return md.add("".concat(wO, "-").concat(dd))
        },
        Fd = function(dd) {
          return md.remove("".concat(wO, "-").concat(dd))
        },
        Rd = DO.autoFetchSvg ? [].concat(Qd(mO), Qd(oO)) : ud.concat(Object.keys(BW));
      Rd.includes("fa") || Rd.push("fa");
      var Xd = [".".concat(rO, ":not([").concat(TO, "])")].concat(Rd.map((function(dd) {
        return ".".concat(dd, ":not([").concat(TO, "])")
      }))).join(", ");
      if (0 === Xd.length) return Promise.resolve();
      var Kd = [];
      try {
        Kd = ZO(dd.querySelectorAll(Xd))
      } catch (td) {}
      if (!(Kd.length > 0)) return Promise.resolve();
      Wd("pending"), Fd("complete");
      var hd = oW("onTree"),
        vd = Kd.reduce((function(dd, Od) {
          try {
            var md = SW(Od);
            md && dd.push(md)
          } catch (td) {
            JO || "MissingIcon" === td.name && console.error(td)
          }
          return dd
        }), []);
      return new Promise((function(dd, md) {
        Promise.all(vd).then((function(md) {
          YW(md, (function() {
            Wd("active"), Wd("complete"), Fd("pending"), "function" === typeof Od && Od(), hd(), dd()
          }))
        })).catch((function(dd) {
          hd(), md(dd)
        }))
      }))
    }

    function uW(dd) {
      var Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      SW(dd).then((function(dd) {
        dd && YW([dd], Od)
      }))
    }
    var VW = function(dd) {
        var Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          md = Od.transform,
          Wd = void 0 === md ? lO : md,
          Fd = Od.symbol,
          Rd = void 0 !== Fd && Fd,
          Xd = Od.mask,
          Kd = void 0 === Xd ? null : Xd,
          vd = Od.maskId,
          Qd = void 0 === vd ? null : vd,
          td = Od.classes,
          od = void 0 === td ? [] : td,
          Nd = Od.attributes,
          qd = void 0 === Nd ? {} : Nd,
          Hd = Od.styles,
          yd = void 0 === Hd ? {} : Hd;
        if (dd) {
          var bd = dd.prefix,
            Td = dd.iconName,
            pd = dd.icon;
          return OW(hd({
            type: "icon"
          }, dd), (function() {
            return lm("beforeDOMElementCreation", {
              iconDefinition: dd,
              params: Od
            }), mW({
              icons: {
                main: RW(pd),
                mask: Kd ? RW(Kd.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: bd,
              iconName: Td,
              transform: hd(hd({}, lO), Wd),
              symbol: Rd,
              maskId: Qd,
              extra: {
                attributes: qd,
                styles: yd,
                classes: od
              }
            })
          }))
        }
      },
      iW = {
        mixout: function() {
          return {
            icon: (dd = VW, function(Od) {
              var md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Wd = (Od || {}).icon ? Od : Zm(Od || {}),
                Fd = md.mask;
              return Fd && (Fd = (Fd || {}).icon ? Fd : Zm(Fd || {})), dd(Wd, hd(hd({}, md), {}, {
                mask: Fd
              }))
            })
          };
          var dd
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(dd) {
              return dd.treeCallback = sW, dd.nodeCallback = uW, dd
            }
          }
        },
        provides: function(dd) {
          dd.i2svg = function(dd) {
            var Od = dd.node,
              md = void 0 === Od ? Jd : Od,
              Wd = dd.callback;
            return sW(md, void 0 === Wd ? function() {} : Wd)
          }, dd.generateSvgReplacementMutation = function(dd, Od) {
            var md = Od.iconName,
              Wd = Od.prefix,
              Fd = Od.transform,
              Rd = Od.symbol,
              Xd = Od.mask,
              Kd = Od.maskId,
              hd = Od.extra;
            return new Promise((function(Od, Qd) {
              Promise.all([KW(md, Wd), Xd.iconName ? KW(Xd.iconName, Xd.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(Xd) {
                var Qd = vd(Xd, 2),
                  td = Qd[0],
                  od = Qd[1];
                Od([dd, mW({
                  icons: {
                    main: td,
                    mask: od
                  },
                  prefix: Wd,
                  iconName: md,
                  transform: Fd,
                  symbol: Rd,
                  maskId: Kd,
                  extra: hd,
                  watchable: !0
                })])
              })).catch(Qd)
            }))
          }, dd.generateAbstractIcon = function(dd) {
            var Od, md = dd.children,
              Wd = dd.attributes,
              Fd = dd.main,
              Rd = dd.transform,
              Xd = MO(dd.styles);
            return Xd.length > 0 && (Wd.style = Xd), dm(Rd) && (Od = Cm("generateAbstractTransformGrouping", {
              main: Fd,
              transform: Rd,
              containerWidth: Fd.width,
              iconWidth: Fd.width
            })), md.push(Od || Fd.icon), {
              children: md,
              attributes: Wd
            }
          }
        }
      },
      AW = {
        mixout: function() {
          return {
            layer: function(dd) {
              var Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                md = Od.classes,
                Wd = void 0 === md ? [] : md;
              return OW({
                type: "layer"
              }, (function() {
                lm("beforeDOMElementCreation", {
                  assembler: dd,
                  params: Od
                });
                var md = [];
                return dd((function(dd) {
                  Array.isArray(dd) ? dd.map((function(dd) {
                    md = md.concat(dd.abstract)
                  })) : md = md.concat(dd.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(DO.cssPrefix, "-layers")].concat(Qd(Wd)).join(" ")
                  },
                  children: md
                }]
              }))
            }
          }
        }
      },
      rW = {
        mixout: function() {
          return {
            counter: function(dd) {
              var Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                md = Od.title,
                Wd = void 0 === md ? null : md,
                Fd = Od.classes,
                Rd = void 0 === Fd ? [] : Fd,
                Xd = Od.attributes,
                Kd = void 0 === Xd ? {} : Xd,
                vd = Od.styles,
                td = void 0 === vd ? {} : vd;
              return OW({
                type: "counter",
                content: dd
              }, (function() {
                return lm("beforeDOMElementCreation", {
                    content: dd,
                    params: Od
                  }),
                  function(dd) {
                    var Od = dd.content,
                      md = dd.extra,
                      Wd = hd(hd({}, md.attributes), {}, {
                        class: md.classes.join(" ")
                      }),
                      Fd = MO(md.styles);
                    Fd.length > 0 && (Wd.style = Fd);
                    var Rd = [];
                    return Rd.push({
                      tag: "span",
                      attributes: Wd,
                      children: [Od]
                    }), Rd
                  }({
                    content: dd.toString(),
                    title: Wd,
                    extra: {
                      attributes: Kd,
                      styles: td,
                      classes: ["".concat(DO.cssPrefix, "-layers-counter")].concat(Qd(Rd))
                    }
                  })
              }))
            }
          }
        }
      },
      GW = {
        mixout: function() {
          return {
            text: function(dd) {
              var Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                md = Od.transform,
                Wd = void 0 === md ? lO : md,
                Fd = Od.classes,
                Rd = void 0 === Fd ? [] : Fd,
                Xd = Od.attributes,
                Kd = void 0 === Xd ? {} : Xd,
                vd = Od.styles,
                td = void 0 === vd ? {} : vd;
              return OW({
                type: "text",
                content: dd
              }, (function() {
                return lm("beforeDOMElementCreation", {
                  content: dd,
                  params: Od
                }), WW({
                  content: dd,
                  transform: hd(hd({}, lO), Wd),
                  extra: {
                    attributes: Kd,
                    styles: td,
                    classes: ["".concat(DO.cssPrefix, "-layers-text")].concat(Qd(Rd))
                  }
                })
              }))
            }
          }
        },
        provides: function(dd) {
          dd.generateLayersText = function(dd, Od) {
            var md = Od.transform,
              Wd = Od.extra,
              Fd = null,
              Rd = null;
            if (Sd) {
              var Xd = parseInt(getComputedStyle(dd).fontSize, 10),
                Kd = dd.getBoundingClientRect();
              Fd = Kd.width / Xd, Rd = Kd.height / Xd
            }
            return Promise.resolve([dd, WW({
              content: dd.innerHTML,
              width: Fd,
              height: Rd,
              transform: md,
              extra: Wd,
              watchable: !0
            })])
          }
        }
      },
      nW = new RegExp('"', "ug"),
      LW = [1105920, 1112319],
      PW = hd(hd(hd(hd({}, {
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
      zW = Object.keys(PW).reduce((function(dd, Od) {
        return dd[Od.toLowerCase()] = PW[Od], dd
      }), {}),
      cW = Object.keys(zW).reduce((function(dd, Od) {
        var md = zW[Od];
        return dd[Od] = md[900] || Qd(Object.entries(md))[0][1], dd
      }), {});

    function jW(dd, Od) {
      var md = "".concat("data-fa-pseudo-element-pending").concat(Od.replace(":", "-"));
      return new Promise((function(Wd, Fd) {
        if (null !== dd.getAttribute(md)) return Wd();
        var Rd = ZO(dd.children).filter((function(dd) {
            return dd.getAttribute(pO) === Od
          }))[0],
          Xd = Ed.getComputedStyle(dd, Od),
          Kd = Xd.getPropertyValue("font-family"),
          vd = Kd.match(GO),
          td = Xd.getPropertyValue("font-weight"),
          od = Xd.getPropertyValue("content");
        if (Rd && !vd) return dd.removeChild(Rd), Wd();
        if (vd && "none" !== od && "" !== od) {
          var Nd = Xd.getPropertyValue("content"),
            qd = function(dd, Od) {
              var md = dd.replace(/^['"]|['"]$/g, "").toLowerCase(),
                Wd = parseInt(Od),
                Fd = isNaN(Wd) ? "normal" : Wd;
              return (zW[md] || {})[Fd] || cW[md]
            }(Kd, td),
            Hd = function(dd) {
              return qm(Qd(dd.replace(nW, ""))[0] || "")
            }(Nd),
            yd = vd[0].startsWith("FontAwesome"),
            bd = function(dd) {
              var Od = dd.getPropertyValue("font-feature-settings").includes("ss01"),
                md = dd.getPropertyValue("content").replace(nW, ""),
                Wd = md.codePointAt(0),
                Fd = Wd >= LW[0] && Wd <= LW[1],
                Rd = 2 === md.length && md[0] === md[1];
              return Fd || Rd || Od
            }(Xd),
            Td = sm(qd, Hd),
            pd = Td;
          if (yd) {
            var Yd = function(dd) {
              var Od = Jm[dd],
                md = sm("fas", dd);
              return Od || (md ? {
                prefix: "fas",
                iconName: md
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(Hd);
            Yd.iconName && Yd.prefix && (Td = Yd.iconName, qd = Yd.prefix)
          }
          if (!Td || bd || Rd && Rd.getAttribute(YO) === qd && Rd.getAttribute(gO) === pd) Wd();
          else {
            dd.setAttribute(md, pd), Rd && dd.removeChild(Rd);
            var gd = {
                iconName: null,
                prefix: null,
                transform: lO,
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
              wd = gd.extra;
            wd.attributes[pO] = Od, KW(Td, qd).then((function(Fd) {
              var Rd = mW(hd(hd({}, gd), {}, {
                  icons: {
                    main: Fd,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: qd,
                  iconName: pd,
                  extra: wd,
                  watchable: !0
                })),
                Xd = Jd.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === Od ? dd.insertBefore(Xd, dd.firstChild) : dd.appendChild(Xd), Xd.outerHTML = Rd.map((function(dd) {
                return tm(dd)
              })).join("\n"), dd.removeAttribute(md), Wd()
            })).catch(Fd)
          }
        } else Wd()
      }))
    }

    function DW(dd) {
      return Promise.all([jW(dd, "::before"), jW(dd, "::after")])
    }

    function eW(dd) {
      return dd.parentNode !== document.head && !~aO.indexOf(dd.tagName.toUpperCase()) && !dd.getAttribute(pO) && (!dd.parentNode || "svg" !== dd.parentNode.tagName)
    }
    var IW = function(dd) {
        return !!dd && EO.some((function(Od) {
          return dd.includes(Od)
        }))
      },
      lW = function(dd) {
        if (!dd) return [];
        var Od = new Set,
          md = dd.split(/,(?![^()]*\))/).map((function(dd) {
            return dd.trim()
          }));
        md = md.flatMap((function(dd) {
          return dd.includes("(") ? dd : dd.split(",").map((function(dd) {
            return dd.trim()
          }))
        }));
        var Wd, Fd = Rd(md);
        try {
          for (Fd.s(); !(Wd = Fd.n()).done;) {
            var Xd = Wd.value;
            if (IW(Xd)) {
              var Kd = EO.reduce((function(dd, Od) {
                return dd.replace(Od, "")
              }), Xd);
              "" !== Kd && "*" !== Kd && Od.add(Kd)
            }
          }
        } catch (hd) {
          Fd.e(hd)
        } finally {
          Fd.f()
        }
        return Od
      };

    function CW(dd) {
      if (Bd) {
        var Od;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) Od = dd;
        else if (DO.searchPseudoElementsFullScan) Od = dd.querySelectorAll("*");
        else {
          var md, Wd = new Set,
            Fd = Rd(document.styleSheets);
          try {
            for (Fd.s(); !(md = Fd.n()).done;) {
              var Xd = md.value;
              try {
                var Kd, hd = Rd(Xd.cssRules);
                try {
                  for (hd.s(); !(Kd = hd.n()).done;) {
                    var vd, Qd = Kd.value,
                      td = Rd(lW(Qd.selectorText));
                    try {
                      for (td.s(); !(vd = td.n()).done;) {
                        var od = vd.value;
                        Wd.add(od)
                      }
                    } catch (qd) {
                      td.e(qd)
                    } finally {
                      td.f()
                    }
                  }
                } catch (qd) {
                  hd.e(qd)
                } finally {
                  hd.f()
                }
              } catch (Hd) {
                DO.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(Xd.href, " (").concat(Hd.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (qd) {
            Fd.e(qd)
          } finally {
            Fd.f()
          }
          if (!Wd.size) return;
          var Nd = Array.from(Wd).join(", ");
          try {
            Od = dd.querySelectorAll(Nd)
          } catch (yd) {}
        }
        return new Promise((function(dd, md) {
          var Wd = ZO(Od).filter(eW).map(DW),
            Fd = oW("searchPseudoElements");
          wW(), Promise.all(Wd).then((function() {
            Fd(), aW(), dd()
          })).catch((function() {
            Fd(), aW(), md()
          }))
        }))
      }
    }
    var ZW = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(dd) {
              return dd.pseudoElementsCallback = CW, dd
            }
          }
        },
        provides: function(dd) {
          dd.pseudoElements2svg = function(dd) {
            var Od = dd.node,
              md = void 0 === Od ? Jd : Od;
            DO.searchPseudoElements && CW(md)
          }
        }
      },
      kW = !1,
      fW = function(dd) {
        return dd.toLowerCase().split(" ").reduce((function(dd, Od) {
          var md = Od.toLowerCase().split("-"),
            Wd = md[0],
            Fd = md.slice(1).join("-");
          if (Wd && "h" === Fd) return dd.flipX = !0, dd;
          if (Wd && "v" === Fd) return dd.flipY = !0, dd;
          if (Fd = parseFloat(Fd), isNaN(Fd)) return dd;
          switch (Wd) {
            case "grow":
              dd.size = dd.size + Fd;
              break;
            case "shrink":
              dd.size = dd.size - Fd;
              break;
            case "left":
              dd.x = dd.x - Fd;
              break;
            case "right":
              dd.x = dd.x + Fd;
              break;
            case "up":
              dd.y = dd.y - Fd;
              break;
            case "down":
              dd.y = dd.y + Fd;
              break;
            case "rotate":
              dd.rotate = dd.rotate + Fd
          }
          return dd
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      MW = {
        mixout: function() {
          return {
            parse: {
              transform: function(dd) {
                return fW(dd)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(dd, Od) {
              var md = Od.getAttribute("data-fa-transform");
              return md && (dd.transform = fW(md)), dd
            }
          }
        },
        provides: function(dd) {
          dd.generateAbstractTransformGrouping = function(dd) {
            var Od = dd.main,
              md = dd.transform,
              Wd = dd.containerWidth,
              Fd = dd.iconWidth,
              Rd = {
                transform: "translate(".concat(Wd / 2, " 256)")
              },
              Xd = "translate(".concat(32 * md.x, ", ").concat(32 * md.y, ") "),
              Kd = "scale(".concat(md.size / 16 * (md.flipX ? -1 : 1), ", ").concat(md.size / 16 * (md.flipY ? -1 : 1), ") "),
              vd = "rotate(".concat(md.rotate, " 0 0)"),
              Qd = {
                outer: Rd,
                inner: {
                  transform: "".concat(Xd, " ").concat(Kd, " ").concat(vd)
                },
                path: {
                  transform: "translate(".concat(Fd / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: hd({}, Qd.outer),
              children: [{
                tag: "g",
                attributes: hd({}, Qd.inner),
                children: [{
                  tag: Od.icon.tag,
                  children: Od.icon.children,
                  attributes: hd(hd({}, Od.icon.attributes), Qd.path)
                }]
              }]
            }
          }
        }
      },
      dF = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function OF(dd) {
      var Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return dd.attributes && (dd.attributes.fill || Od) && (dd.attributes.fill = "black"), dd
    }
    var mF = {
        hooks: function() {
          return {
            parseNodeAttributes: function(dd, Od) {
              var md = Od.getAttribute("data-fa-mask"),
                Wd = md ? nm(md.split(" ").map((function(dd) {
                  return dd.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return Wd.prefix || (Wd.prefix = im()), dd.mask = Wd, dd.maskId = Od.getAttribute("data-fa-mask-id"), dd
            }
          }
        },
        provides: function(dd) {
          dd.generateAbstractMask = function(dd) {
            var Od, md = dd.children,
              Wd = dd.attributes,
              Fd = dd.main,
              Rd = dd.mask,
              Xd = dd.maskId,
              Kd = dd.transform,
              vd = Fd.width,
              Qd = Fd.icon,
              td = Rd.width,
              od = Rd.icon,
              Nd = function(dd) {
                var Od = dd.transform,
                  md = dd.containerWidth,
                  Wd = dd.iconWidth,
                  Fd = {
                    transform: "translate(".concat(md / 2, " 256)")
                  },
                  Rd = "translate(".concat(32 * Od.x, ", ").concat(32 * Od.y, ") "),
                  Xd = "scale(".concat(Od.size / 16 * (Od.flipX ? -1 : 1), ", ").concat(Od.size / 16 * (Od.flipY ? -1 : 1), ") "),
                  Kd = "rotate(".concat(Od.rotate, " 0 0)");
                return {
                  outer: Fd,
                  inner: {
                    transform: "".concat(Rd, " ").concat(Xd, " ").concat(Kd)
                  },
                  path: {
                    transform: "translate(".concat(Wd / 2 * -1, " -256)")
                  }
                }
              }({
                transform: Kd,
                containerWidth: td,
                iconWidth: vd
              }),
              qd = {
                tag: "rect",
                attributes: hd(hd({}, dF), {}, {
                  fill: "white"
                })
              },
              Hd = Qd.children ? {
                children: Qd.children.map(OF)
              } : {},
              yd = {
                tag: "g",
                attributes: hd({}, Nd.inner),
                children: [OF(hd({
                  tag: Qd.tag,
                  attributes: hd(hd({}, Qd.attributes), Nd.path)
                }, Hd))]
              },
              bd = {
                tag: "g",
                attributes: hd({}, Nd.outer),
                children: [yd]
              },
              Td = "mask-".concat(Xd || CO()),
              pd = "clip-".concat(Xd || CO()),
              Yd = {
                tag: "mask",
                attributes: hd(hd({}, dF), {}, {
                  id: Td,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [qd, bd]
              },
              gd = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: pd
                  },
                  children: (Od = od, "g" === Od.tag ? Od.children : [Od])
                }, Yd]
              };
            return md.push(gd, {
              tag: "rect",
              attributes: hd({
                fill: "currentColor",
                "clip-path": "url(#".concat(pd, ")"),
                mask: "url(#".concat(Td, ")")
              }, dF)
            }), {
              children: md,
              attributes: Wd
            }
          }
        }
      },
      WF = {
        provides: function(dd) {
          var Od = !1;
          Ed.matchMedia && (Od = Ed.matchMedia("(prefers-reduced-motion: reduce)").matches), dd.missingIconAbstract = function() {
            var dd = [],
              md = {
                fill: "currentColor"
              },
              Wd = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            dd.push({
              tag: "path",
              attributes: hd(hd({}, md), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var Fd = hd(hd({}, Wd), {}, {
                attributeName: "opacity"
              }),
              Rd = {
                tag: "circle",
                attributes: hd(hd({}, md), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return Od || Rd.children.push({
              tag: "animate",
              attributes: hd(hd({}, Wd), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: hd(hd({}, Fd), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), dd.push(Rd), dd.push({
              tag: "path",
              attributes: hd(hd({}, md), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: Od ? [] : [{
                tag: "animate",
                attributes: hd(hd({}, Fd), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), Od || dd.push({
              tag: "path",
              attributes: hd(hd({}, md), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: hd(hd({}, Fd), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: dd
            }
          }
        }
      };
    ! function(dd, Od) {
      var md = Od.mixoutsTo;
      cm = dd, jm = {}, Object.keys(Dm).forEach((function(dd) {
        -1 === em.indexOf(dd) && delete Dm[dd]
      })), cm.forEach((function(dd) {
        var Od = dd.mixout ? dd.mixout() : {};
        if (Object.keys(Od).forEach((function(dd) {
            "function" === typeof Od[dd] && (md[dd] = Od[dd]), "object" === od(Od[dd]) && Object.keys(Od[dd]).forEach((function(Wd) {
              md[dd] || (md[dd] = {}), md[dd][Wd] = Od[dd][Wd]
            }))
          })), dd.hooks) {
          var Wd = dd.hooks();
          Object.keys(Wd).forEach((function(dd) {
            jm[dd] || (jm[dd] = []), jm[dd].push(Wd[dd])
          }))
        }
        dd.provides && dd.provides(Dm)
      }))
    }([Fm, iW, AW, rW, GW, ZW, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              wW(), kW = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            JW(Im("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            EW && EW.disconnect()
          },
          watch: function(dd) {
            var Od = dd.observeMutationsRoot;
            kW ? aW() : JW(Im("mutationObserverCallbacks", {
              observeMutationsRoot: Od
            }))
          }
        }
      }
    }, MW, mF, WF, {
      hooks: function() {
        return {
          parseNodeAttributes: function(dd, Od) {
            var md = Od.getAttribute("data-fa-symbol"),
              Wd = null !== md && ("" === md || md);
            return dd.symbol = Wd, dd
          }
        }
      }
    }], {
      mixoutsTo: Mm
    });
    var FF = Mm.noAuto,
      RF = Mm.config,
      XF = Mm.library,
      KF = Mm.dom,
      hF = Mm.parse,
      vF = Mm.findIconDefinition,
      QF = Mm.toHtml,
      tF = Mm.icon,
      oF = Mm.layer,
      NF = Mm.text,
      qF = Mm.counter
  },
  7708: dd => {
    dd.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);