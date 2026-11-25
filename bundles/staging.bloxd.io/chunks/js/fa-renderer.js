/*! For license information please see dz8ef.fa-renderer.423d0e3f.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6884: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      FontAwesomeIcon: () => Ju
    });
    var su = ju(6876),
      Uu = ju(5128),
      Zu = ju.n(Uu),
      Xu = ju(58);

    function lu(uu, Eu) {
      (null == Eu || Eu > uu.length) && (Eu = uu.length);
      for (var ju = 0, su = Array(Eu); ju < Eu; ju++) su[ju] = uu[ju];
      return su
    }

    function qu(uu, Eu, ju) {
      return (Eu = function(uu) {
        var Eu = function(uu, Eu) {
          if ("object" != typeof uu || !uu) return uu;
          var ju = uu[Symbol.toPrimitive];
          if (void 0 !== ju) {
            var su = ju.call(uu, Eu || "default");
            if ("object" != typeof su) return su;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Eu ? String : Number)(uu)
        }(uu, "string");
        return "symbol" == typeof Eu ? Eu : Eu + ""
      }(Eu)) in uu ? Object.defineProperty(uu, Eu, {
        value: ju,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : uu[Eu] = ju, uu
    }

    function fu(uu, Eu) {
      var ju = Object.keys(uu);
      if (Object.getOwnPropertySymbols) {
        var su = Object.getOwnPropertySymbols(uu);
        Eu && (su = su.filter((function(Eu) {
          return Object.getOwnPropertyDescriptor(uu, Eu).enumerable
        }))), ju.push.apply(ju, su)
      }
      return ju
    }

    function Cu(uu) {
      for (var Eu = 1; Eu < arguments.length; Eu++) {
        var ju = null != arguments[Eu] ? arguments[Eu] : {};
        Eu % 2 ? fu(Object(ju), !0).forEach((function(Eu) {
          qu(uu, Eu, ju[Eu])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(uu, Object.getOwnPropertyDescriptors(ju)) : fu(Object(ju)).forEach((function(Eu) {
          Object.defineProperty(uu, Eu, Object.getOwnPropertyDescriptor(ju, Eu))
        }))
      }
      return uu
    }

    function bu(uu, Eu) {
      return function(uu) {
        if (Array.isArray(uu)) return uu
      }(uu) || function(uu, Eu) {
        var ju = null == uu ? null : "undefined" != typeof Symbol && uu[Symbol.iterator] || uu["@@iterator"];
        if (null != ju) {
          var su, Uu, Zu, Xu, lu = [],
            qu = !0,
            fu = !1;
          try {
            if (Zu = (ju = ju.call(uu)).next, 0 === Eu) {
              if (Object(ju) !== ju) return;
              qu = !1
            } else
              for (; !(qu = (su = Zu.call(ju)).done) && (lu.push(su.value), lu.length !== Eu); qu = !0);
          } catch (uu) {
            fu = !0, Uu = uu
          } finally {
            try {
              if (!qu && null != ju.return && (Xu = ju.return(), Object(Xu) !== Xu)) return
            } finally {
              if (fu) throw Uu
            }
          }
          return lu
        }
      }(uu, Eu) || Ou(uu, Eu) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cu(uu) {
      return function(uu) {
        if (Array.isArray(uu)) return lu(uu)
      }(uu) || function(uu) {
        if ("undefined" != typeof Symbol && null != uu[Symbol.iterator] || null != uu["@@iterator"]) return Array.from(uu)
      }(uu) || Ou(uu) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Nu(uu) {
      return Nu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(uu) {
        return typeof uu
      } : function(uu) {
        return uu && "function" == typeof Symbol && uu.constructor === Symbol && uu !== Symbol.prototype ? "symbol" : typeof uu
      }, Nu(uu)
    }

    function Ou(uu, Eu) {
      if (uu) {
        if ("string" == typeof uu) return lu(uu, Eu);
        var ju = {}.toString.call(uu).slice(8, -1);
        return "Object" === ju && uu.constructor && (ju = uu.constructor.name), "Map" === ju || "Set" === ju ? Array.from(uu) : "Arguments" === ju || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ju) ? lu(uu, Eu) : void 0
      }
    }
    var Yu;
    try {
      var hu = ju(6891);
      Yu = hu.version
    } catch (au) {
      Yu = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function Du(uu) {
      var Eu = uu.beat,
        ju = uu.fade,
        su = uu.beatFade,
        Uu = uu.bounce,
        Zu = uu.shake,
        Xu = uu.flash,
        lu = uu.spin,
        fu = uu.spinPulse,
        Cu = uu.spinReverse,
        cu = uu.pulse,
        Nu = uu.fixedWidth,
        Ou = uu.inverse,
        hu = uu.border,
        Du = uu.listItem,
        gu = uu.flip,
        Mu = uu.size,
        eu = uu.rotation,
        Gu = uu.pull,
        pu = uu.swapOpacity,
        wu = uu.rotateBy,
        Ju = uu.widthAuto,
        du = function(uu, Eu) {
          for (var ju = bu(uu.split("-"), 2), su = ju[0], Uu = ju[1], Zu = bu(Eu.split("-"), 2), Xu = Zu[0], lu = Zu[1], qu = su.split("."), fu = Xu.split("."), Cu = 0; Cu < Math.max(qu.length, fu.length); Cu++) {
            var cu = qu[Cu] || "0",
              Nu = fu[Cu] || "0",
              Ou = parseInt(cu, 10),
              Yu = parseInt(Nu, 10);
            if (Ou !== Yu) return Ou > Yu
          }
          for (var hu = 0; hu < Math.max(qu.length, fu.length); hu++) {
            var Du = qu[hu] || "0",
              gu = fu[hu] || "0";
            if (Du !== gu && Du.length !== gu.length) return Du.length < gu.length
          }
          return !(Uu && !lu)
        }(Yu, "7.0.0"),
        au = qu(qu(qu(qu(qu(qu({
          "fa-beat": Eu,
          "fa-fade": ju,
          "fa-beat-fade": su,
          "fa-bounce": Uu,
          "fa-shake": Zu,
          "fa-flash": Xu,
          "fa-spin": lu,
          "fa-spin-reverse": Cu,
          "fa-spin-pulse": fu,
          "fa-pulse": cu,
          "fa-fw": Nu,
          "fa-inverse": Ou,
          "fa-border": hu,
          "fa-li": Du,
          "fa-flip": !0 === gu,
          "fa-flip-horizontal": "horizontal" === gu || "both" === gu,
          "fa-flip-vertical": "vertical" === gu || "both" === gu
        }, "fa-".concat(Mu), "undefined" !== typeof Mu && null !== Mu), "fa-rotate-".concat(eu), "undefined" !== typeof eu && null !== eu && 0 !== eu), "fa-pull-".concat(Gu), "undefined" !== typeof Gu && null !== Gu), "fa-swap-opacity", pu), "fa-rotate-by", du && wu), "fa-width-auto", du && Ju);
      return Object.keys(au).map((function(uu) {
        return au[uu] ? uu : null
      })).filter((function(uu) {
        return uu
      }))
    }

    function gu(uu) {
      return Eu = uu, (Eu -= 0) === Eu ? uu : (uu = uu.replace(/[\-_\s]+(.)?/g, (function(uu, Eu) {
        return Eu ? Eu.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + uu.substr(1);
      var Eu
    }
    var Mu = ["style"];
    var eu = !1;
    try {
      eu = !0
    } catch (au) {}

    function Gu(uu) {
      return uu && "object" === Nu(uu) && uu.prefix && uu.iconName && uu.icon ? uu : su.parse.icon ? su.parse.icon(uu) : null === uu ? null : uu && "object" === Nu(uu) && uu.prefix && uu.iconName ? uu : Array.isArray(uu) && 2 === uu.length ? {
        prefix: uu[0],
        iconName: uu[1]
      } : "string" === typeof uu ? {
        prefix: "fas",
        iconName: uu
      } : void 0
    }

    function pu(uu, Eu) {
      return Array.isArray(Eu) && Eu.length > 0 || !Array.isArray(Eu) && Eu ? qu({}, uu, Eu) : {}
    }
    var wu = {
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
      Ju = Xu.forwardRef((function(uu, Eu) {
        var ju = Cu(Cu({}, wu), uu),
          Uu = ju.icon,
          Zu = ju.mask,
          Xu = ju.symbol,
          lu = ju.className,
          qu = ju.title,
          fu = ju.titleId,
          bu = ju.maskId,
          Nu = Gu(Uu),
          Ou = pu("classes", [].concat(cu(Du(ju)), cu((lu || "").split(" ")))),
          Yu = pu("transform", "string" === typeof ju.transform ? su.parse.transform(ju.transform) : ju.transform),
          hu = pu("mask", Gu(Zu)),
          gu = (0, su.icon)(Nu, Cu(Cu(Cu(Cu({}, Ou), Yu), hu), {}, {
            symbol: Xu,
            title: qu,
            titleId: fu,
            maskId: bu
          }));
        if (!gu) return function() {
          var uu;
          !eu && console && "function" === typeof console.error && (uu = console).error.apply(uu, arguments)
        }("Could not find icon", Nu), null;
        var Mu = gu.abstract,
          Ju = {
            ref: Eu
          };
        return Object.keys(ju).forEach((function(uu) {
          wu.hasOwnProperty(uu) || (Ju[uu] = ju[uu])
        })), du(Mu[0], Ju)
      }));
    Ju.displayName = "FontAwesomeIcon", Ju.propTypes = {
      beat: Zu().bool,
      border: Zu().bool,
      beatFade: Zu().bool,
      bounce: Zu().bool,
      className: Zu().string,
      fade: Zu().bool,
      flash: Zu().bool,
      mask: Zu().oneOfType([Zu().object, Zu().array, Zu().string]),
      maskId: Zu().string,
      fixedWidth: Zu().bool,
      inverse: Zu().bool,
      flip: Zu().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: Zu().oneOfType([Zu().object, Zu().array, Zu().string]),
      listItem: Zu().bool,
      pull: Zu().oneOf(["right", "left"]),
      pulse: Zu().bool,
      rotation: Zu().oneOf([0, 90, 180, 270]),
      rotateBy: Zu().bool,
      shake: Zu().bool,
      size: Zu().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: Zu().bool,
      spinPulse: Zu().bool,
      spinReverse: Zu().bool,
      symbol: Zu().oneOfType([Zu().bool, Zu().string]),
      title: Zu().string,
      titleId: Zu().string,
      transform: Zu().oneOfType([Zu().string, Zu().object]),
      swapOpacity: Zu().bool,
      widthAuto: Zu().bool
    };
    var du = function uu(Eu, ju) {
      var su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof ju) return ju;
      var Uu = (ju.children || []).map((function(ju) {
          return uu(Eu, ju)
        })),
        Zu = Object.keys(ju.attributes || {}).reduce((function(uu, Eu) {
          var su = ju.attributes[Eu];
          switch (Eu) {
            case "class":
              uu.attrs.className = su, delete ju.attributes.class;
              break;
            case "style":
              uu.attrs.style = su.split(";").map((function(uu) {
                return uu.trim()
              })).filter((function(uu) {
                return uu
              })).reduce((function(uu, Eu) {
                var ju, su = Eu.indexOf(":"),
                  Uu = gu(Eu.slice(0, su)),
                  Zu = Eu.slice(su + 1).trim();
                return Uu.startsWith("webkit") ? uu[(ju = Uu, ju.charAt(0).toUpperCase() + ju.slice(1))] = Zu : uu[Uu] = Zu, uu
              }), {});
              break;
            default:
              0 === Eu.indexOf("aria-") || 0 === Eu.indexOf("data-") ? uu.attrs[Eu.toLowerCase()] = su : uu.attrs[gu(Eu)] = su
          }
          return uu
        }), {
          attrs: {}
        }),
        Xu = su.style,
        lu = void 0 === Xu ? {} : Xu,
        qu = function(uu, Eu) {
          if (null == uu) return {};
          var ju, su, Uu = function(uu, Eu) {
            if (null == uu) return {};
            var ju = {};
            for (var su in uu)
              if ({}.hasOwnProperty.call(uu, su)) {
                if (-1 !== Eu.indexOf(su)) continue;
                ju[su] = uu[su]
              } return ju
          }(uu, Eu);
          if (Object.getOwnPropertySymbols) {
            var Zu = Object.getOwnPropertySymbols(uu);
            for (su = 0; su < Zu.length; su++) ju = Zu[su], -1 === Eu.indexOf(ju) && {}.propertyIsEnumerable.call(uu, ju) && (Uu[ju] = uu[ju])
          }
          return Uu
        }(su, Mu);
      return Zu.attrs.style = Cu(Cu({}, Zu.attrs.style), lu), Eu.apply(void 0, [ju.tag, Cu(Cu({}, Zu.attrs), qu)].concat(cu(Uu)))
    }.bind(null, Xu.createElement)
  },
  5131: (uu, Eu, ju) => {
    var su = ju(5135);

    function Uu() {}

    function Zu() {}
    Zu.resetWarningCache = Uu, uu.exports = function() {
      function uu(uu, Eu, ju, Uu, Zu, Xu) {
        if (Xu !== su) {
          var lu = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw lu.name = "Invariant Violation", lu
        }
      }

      function Eu() {
        return uu
      }
      uu.isRequired = uu;
      var ju = {
        array: uu,
        bigint: uu,
        bool: uu,
        func: uu,
        number: uu,
        object: uu,
        string: uu,
        symbol: uu,
        any: uu,
        arrayOf: Eu,
        element: uu,
        elementType: uu,
        instanceOf: Eu,
        node: uu,
        objectOf: Eu,
        oneOf: Eu,
        oneOfType: Eu,
        shape: Eu,
        exact: Eu,
        checkPropTypes: Zu,
        resetWarningCache: Uu
      };
      return ju.PropTypes = ju, ju
    }
  },
  5128: (uu, Eu, ju) => {
    uu.exports = ju(5131)()
  },
  5135: uu => {
    uu.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6876: (uu, Eu, ju) => {
    function su(uu, Eu) {
      (null == Eu || Eu > uu.length) && (Eu = uu.length);
      for (var ju = 0, su = Array(Eu); ju < Eu; ju++) su[ju] = uu[ju];
      return su
    }

    function Uu(uu, Eu) {
      for (var ju = 0; ju < Eu.length; ju++) {
        var su = Eu[ju];
        su.enumerable = su.enumerable || !1, su.configurable = !0, "value" in su && (su.writable = !0), Object.defineProperty(uu, bu(su.key), su)
      }
    }

    function Zu(uu, Eu) {
      var ju = "undefined" != typeof Symbol && uu[Symbol.iterator] || uu["@@iterator"];
      if (!ju) {
        if (Array.isArray(uu) || (ju = Nu(uu)) || Eu && uu && "number" == typeof uu.length) {
          ju && (uu = ju);
          var su = 0,
            Uu = function() {};
          return {
            s: Uu,
            n: function() {
              return su >= uu.length ? {
                done: !0
              } : {
                done: !1,
                value: uu[su++]
              }
            },
            e: function(uu) {
              throw uu
            },
            f: Uu
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Zu, Xu = !0,
        lu = !1;
      return {
        s: function() {
          ju = ju.call(uu)
        },
        n: function() {
          var uu = ju.next();
          return Xu = uu.done, uu
        },
        e: function(uu) {
          lu = !0, Zu = uu
        },
        f: function() {
          try {
            Xu || null == ju.return || ju.return()
          } finally {
            if (lu) throw Zu
          }
        }
      }
    }

    function Xu(uu, Eu, ju) {
      return (Eu = bu(Eu)) in uu ? Object.defineProperty(uu, Eu, {
        value: ju,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : uu[Eu] = ju, uu
    }

    function lu(uu, Eu) {
      var ju = Object.keys(uu);
      if (Object.getOwnPropertySymbols) {
        var su = Object.getOwnPropertySymbols(uu);
        Eu && (su = su.filter((function(Eu) {
          return Object.getOwnPropertyDescriptor(uu, Eu).enumerable
        }))), ju.push.apply(ju, su)
      }
      return ju
    }

    function qu(uu) {
      for (var Eu = 1; Eu < arguments.length; Eu++) {
        var ju = null != arguments[Eu] ? arguments[Eu] : {};
        Eu % 2 ? lu(Object(ju), !0).forEach((function(Eu) {
          Xu(uu, Eu, ju[Eu])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(uu, Object.getOwnPropertyDescriptors(ju)) : lu(Object(ju)).forEach((function(Eu) {
          Object.defineProperty(uu, Eu, Object.getOwnPropertyDescriptor(ju, Eu))
        }))
      }
      return uu
    }

    function fu(uu, Eu) {
      return function(uu) {
        if (Array.isArray(uu)) return uu
      }(uu) || function(uu, Eu) {
        var ju = null == uu ? null : "undefined" != typeof Symbol && uu[Symbol.iterator] || uu["@@iterator"];
        if (null != ju) {
          var su, Uu, Zu, Xu, lu = [],
            qu = !0,
            fu = !1;
          try {
            if (Zu = (ju = ju.call(uu)).next, 0 === Eu) {
              if (Object(ju) !== ju) return;
              qu = !1
            } else
              for (; !(qu = (su = Zu.call(ju)).done) && (lu.push(su.value), lu.length !== Eu); qu = !0);
          } catch (uu) {
            fu = !0, Uu = uu
          } finally {
            try {
              if (!qu && null != ju.return && (Xu = ju.return(), Object(Xu) !== Xu)) return
            } finally {
              if (fu) throw Uu
            }
          }
          return lu
        }
      }(uu, Eu) || Nu(uu, Eu) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Cu(uu) {
      return function(uu) {
        if (Array.isArray(uu)) return su(uu)
      }(uu) || function(uu) {
        if ("undefined" != typeof Symbol && null != uu[Symbol.iterator] || null != uu["@@iterator"]) return Array.from(uu)
      }(uu) || Nu(uu) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bu(uu) {
      var Eu = function(uu, Eu) {
        if ("object" != typeof uu || !uu) return uu;
        var ju = uu[Symbol.toPrimitive];
        if (void 0 !== ju) {
          var su = ju.call(uu, Eu || "default");
          if ("object" != typeof su) return su;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eu ? String : Number)(uu)
      }(uu, "string");
      return "symbol" == typeof Eu ? Eu : Eu + ""
    }

    function cu(uu) {
      return cu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(uu) {
        return typeof uu
      } : function(uu) {
        return uu && "function" == typeof Symbol && uu.constructor === Symbol && uu !== Symbol.prototype ? "symbol" : typeof uu
      }, cu(uu)
    }

    function Nu(uu, Eu) {
      if (uu) {
        if ("string" == typeof uu) return su(uu, Eu);
        var ju = {}.toString.call(uu).slice(8, -1);
        return "Object" === ju && uu.constructor && (ju = uu.constructor.name), "Map" === ju || "Set" === ju ? Array.from(uu) : "Arguments" === ju || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ju) ? su(uu, Eu) : void 0
      }
    }
    ju.r(Eu), ju.d(Eu, {
      api: () => nj,
      config: () => UU,
      counter: () => NU,
      dom: () => XU,
      findIconDefinition: () => qU,
      icon: () => CU,
      layer: () => bU,
      library: () => ZU,
      noAuto: () => sU,
      parse: () => lU,
      text: () => cU,
      toHtml: () => fU
    });
    var Ou = function() {},
      Yu = {},
      hu = {},
      Du = null,
      gu = {
        mark: Ou,
        measure: Ou
      };
    try {
      "undefined" !== typeof window && (Yu = window), "undefined" !== typeof document && (hu = document), "undefined" !== typeof MutationObserver && (Du = MutationObserver), "undefined" !== typeof performance && (gu = performance)
    } catch (Lu) {}
    var Mu, eu, Gu = (Yu.navigator || {}).userAgent,
      pu = void 0 === Gu ? "" : Gu,
      wu = Yu,
      Ju = hu,
      du = Du,
      au = gu,
      Pu = (wu.document, !!Ju.documentElement && !!Ju.head && "function" === typeof Ju.addEventListener && "function" === typeof Ju.createElement),
      ou = ~pu.indexOf("MSIE") || ~pu.indexOf("Trident/"),
      ku = {
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
      mu = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      vu = "classic",
      Ku = "duotone",
      Vu = "sharp",
      ru = "sharp-duotone",
      Qu = "chisel",
      iu = "etch",
      Wu = "graphite",
      Su = "jelly",
      Iu = "jelly-duo",
      Fu = "jelly-fill",
      Bu = "notdog",
      Lu = "notdog-duo",
      tu = "slab",
      xu = "slab-press",
      Tu = "thumbprint",
      Hu = "utility",
      Au = "utility-duo",
      nu = "utility-fill",
      yu = "whiteboard",
      zu = [vu, Ku, Vu, ru, Qu, iu, Wu, Su, Iu, Fu, Bu, Lu, tu, xu, Tu, Hu, Au, nu, yu],
      Ru = (Xu(Xu(Xu(Xu(Xu(Xu(Xu(Xu(Xu(Xu(Mu = {}, vu, "Classic"), Ku, "Duotone"), Vu, "Sharp"), ru, "Sharp Duotone"), Qu, "Chisel"), iu, "Etch"), Wu, "Graphite"), Su, "Jelly"), Iu, "Jelly Duo"), Fu, "Jelly Fill"), Xu(Xu(Xu(Xu(Xu(Xu(Xu(Xu(Xu(Mu, Bu, "Notdog"), Lu, "Notdog Duo"), tu, "Slab"), xu, "Slab Press"), Tu, "Thumbprint"), Hu, "Utility"), Au, "Utility Duo"), nu, "Utility Fill"), yu, "Whiteboard"), new Map([
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
      uE = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      EE = {
        fak: "kit",
        "fa-kit": "kit"
      },
      jE = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      sE = (Xu(Xu({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      UE = {
        "kit-duotone": "fakd"
      },
      ZE = "duotone-group",
      XE = "swap-opacity",
      lE = "primary",
      qE = "secondary",
      fE = (Xu(Xu(Xu(Xu(Xu(Xu(Xu(Xu(Xu(Xu(eu = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), Xu(Xu(Xu(Xu(Xu(Xu(Xu(Xu(Xu(eu, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), Xu(Xu({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      CE = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      bE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      cE = bE.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      NE = [].concat(Cu(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", ZE, XE, lE, qE]).concat(bE.map((function(uu) {
        return "".concat(uu, "x")
      }))).concat(cE.map((function(uu) {
        return "w-".concat(uu)
      }))),
      OE = "___FONT_AWESOME___",
      YE = "svg-inline--fa",
      hE = "data-fa-i2svg",
      DE = "data-fa-pseudo-element",
      gE = "data-prefix",
      ME = "data-icon",
      eE = "fontawesome-i2svg",
      GE = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      pE = ["::before", "::after", ":before", ":after"],
      wE = function() {
        try {
          return !0
        } catch (uu) {
          return !1
        }
      }();

    function JE(uu) {
      return new Proxy(uu, {
        get: function(uu, Eu) {
          return Eu in uu ? uu[Eu] : uu[vu]
        }
      })
    }
    var dE = qu({}, ku);
    dE[vu] = qu(qu(qu(qu({}, {
      "fa-duotone": "duotone"
    }), ku[vu]), EE), jE);
    var aE = JE(dE),
      PE = qu({}, {
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
    PE[vu] = qu(qu(qu(qu({}, {
      duotone: "fad"
    }), PE[vu]), sE), UE);
    var oE = JE(PE),
      kE = qu({}, fE);
    kE[vu] = qu(qu({}, kE[vu]), {
      fak: "fa-kit"
    });
    var mE = JE(kE),
      vE = qu({}, {
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
    vE[vu] = qu(qu({}, vE[vu]), {
      "fa-kit": "fak"
    });
    JE(vE);
    var KE = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      VE = "fa-layers-text",
      rE = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      QE = (JE(qu({}, {
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
      iE = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      WE = [].concat(Cu(["kit"]), Cu(NE)),
      SE = wu.FontAwesomeConfig || {};
    if (Ju && "function" === typeof Ju.querySelector) {
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
      ].forEach((function(uu) {
        var Eu = fu(uu, 2),
          ju = Eu[0],
          su = Eu[1],
          Uu = function(uu) {
            return "" === uu || "false" !== uu && ("true" === uu || uu)
          }(function(uu) {
            var Eu = Ju.querySelector("script[" + uu + "]");
            if (Eu) return Eu.getAttribute(uu)
          }(ju));
        void 0 !== Uu && null !== Uu && (SE[su] = Uu)
      }))
    }
    var IE = {
      styleDefault: "solid",
      familyDefault: vu,
      cssPrefix: "fa",
      replacementClass: YE,
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
    SE.familyPrefix && (SE.cssPrefix = SE.familyPrefix);
    var FE = qu(qu({}, IE), SE);
    FE.autoReplaceSvg || (FE.observeMutations = !1);
    var BE = {};
    Object.keys(IE).forEach((function(uu) {
      Object.defineProperty(BE, uu, {
        enumerable: !0,
        set: function(Eu) {
          FE[uu] = Eu, LE.forEach((function(uu) {
            return uu(BE)
          }))
        },
        get: function() {
          return FE[uu]
        }
      })
    })), Object.defineProperty(BE, "familyPrefix", {
      enumerable: !0,
      set: function(uu) {
        FE.cssPrefix = uu, LE.forEach((function(uu) {
          return uu(BE)
        }))
      },
      get: function() {
        return FE.cssPrefix
      }
    }), wu.FontAwesomeConfig = BE;
    var LE = [];
    var tE = 16,
      xE = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function TE() {
      for (var uu = 12, Eu = ""; uu-- > 0;) Eu += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return Eu
    }

    function HE(uu) {
      for (var Eu = [], ju = (uu || []).length >>> 0; ju--;) Eu[ju] = uu[ju];
      return Eu
    }

    function AE(uu) {
      return uu.classList ? HE(uu.classList) : (uu.getAttribute("class") || "").split(" ").filter((function(uu) {
        return uu
      }))
    }

    function nE(uu) {
      return "".concat(uu).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function yE(uu) {
      return Object.keys(uu || {}).reduce((function(Eu, ju) {
        return Eu + "".concat(ju, ": ").concat(uu[ju].trim(), ";")
      }), "")
    }

    function zE(uu) {
      return uu.size !== xE.size || uu.x !== xE.x || uu.y !== xE.y || uu.rotate !== xE.rotate || uu.flipX || uu.flipY
    }

    function RE() {
      var uu = "fa",
        Eu = YE,
        ju = BE.cssPrefix,
        su = BE.replacementClass,
        Uu = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (ju !== uu || su !== Eu) {
        var Zu = new RegExp("\\.".concat(uu, "\\-"), "g"),
          Xu = new RegExp("\\--".concat(uu, "\\-"), "g"),
          lu = new RegExp("\\.".concat(Eu), "g");
        Uu = Uu.replace(Zu, ".".concat(ju, "-")).replace(Xu, "--".concat(ju, "-")).replace(lu, ".".concat(su))
      }
      return Uu
    }
    var uj = !1;

    function Ej() {
      BE.autoAddCss && !uj && (! function(uu) {
        if (uu && Pu) {
          var Eu = Ju.createElement("style");
          Eu.setAttribute("type", "text/css"), Eu.innerHTML = uu;
          for (var ju = Ju.head.childNodes, su = null, Uu = ju.length - 1; Uu > -1; Uu--) {
            var Zu = ju[Uu],
              Xu = (Zu.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(Xu) > -1 && (su = Zu)
          }
          Ju.head.insertBefore(Eu, su)
        }
      }(RE()), uj = !0)
    }
    var jj = {
        mixout: function() {
          return {
            dom: {
              css: RE,
              insertCss: Ej
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              Ej()
            },
            beforeI2svg: function() {
              Ej()
            }
          }
        }
      },
      sj = wu || {};
    sj[OE] || (sj[OE] = {}), sj[OE].styles || (sj[OE].styles = {}), sj[OE].hooks || (sj[OE].hooks = {}), sj[OE].shims || (sj[OE].shims = []);
    var Uj = sj[OE],
      Zj = [],
      Xj = function() {
        Ju.removeEventListener("DOMContentLoaded", Xj), lj = 1, Zj.map((function(uu) {
          return uu()
        }))
      },
      lj = !1;

    function qj(uu) {
      var Eu = uu.tag,
        ju = uu.attributes,
        su = void 0 === ju ? {} : ju,
        Uu = uu.children,
        Zu = void 0 === Uu ? [] : Uu;
      return "string" === typeof uu ? nE(uu) : "<".concat(Eu, " ").concat(function(uu) {
        return Object.keys(uu || {}).reduce((function(Eu, ju) {
          return Eu + "".concat(ju, '="').concat(nE(uu[ju]), '" ')
        }), "").trim()
      }(su), ">").concat(Zu.map(qj).join(""), "</").concat(Eu, ">")
    }

    function fj(uu, Eu, ju) {
      if (uu && uu[Eu] && uu[Eu][ju]) return {
        prefix: Eu,
        iconName: ju,
        icon: uu[Eu][ju]
      }
    }
    Pu && ((lj = (Ju.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ju.readyState)) || Ju.addEventListener("DOMContentLoaded", Xj));
    var Cj = function(uu, Eu, ju, su) {
      var Uu, Zu, Xu, lu = Object.keys(uu),
        qu = lu.length,
        fu = void 0 !== su ? function(uu, Eu) {
          return function(ju, su, Uu, Zu) {
            return uu.call(Eu, ju, su, Uu, Zu)
          }
        }(Eu, su) : Eu;
      for (void 0 === ju ? (Uu = 1, Xu = uu[lu[0]]) : (Uu = 0, Xu = ju); Uu < qu; Uu++) Xu = fu(Xu, uu[Zu = lu[Uu]], Zu, uu);
      return Xu
    };

    function bj(uu) {
      return 1 !== Cu(uu).length ? null : uu.codePointAt(0).toString(16)
    }

    function cj(uu) {
      return Object.keys(uu).reduce((function(Eu, ju) {
        var su = uu[ju];
        return !!su.icon ? Eu[su.iconName] = su.icon : Eu[ju] = su, Eu
      }), {})
    }

    function Nj(uu, Eu) {
      var ju = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        su = void 0 !== ju && ju,
        Uu = cj(Eu);
      "function" !== typeof Uj.hooks.addPack || su ? Uj.styles[uu] = qu(qu({}, Uj.styles[uu] || {}), Uu) : Uj.hooks.addPack(uu, cj(Eu)), "fas" === uu && Nj("fa", Eu)
    }
    var Oj = Uj.styles,
      Yj = Uj.shims,
      hj = Object.keys(mE),
      Dj = hj.reduce((function(uu, Eu) {
        return uu[Eu] = Object.keys(mE[Eu]), uu
      }), {}),
      gj = null,
      Mj = {},
      ej = {},
      Gj = {},
      pj = {},
      wj = {};

    function Jj(uu, Eu) {
      var ju, su = Eu.split("-"),
        Uu = su[0],
        Zu = su.slice(1).join("-");
      return Uu !== uu || "" === Zu || (ju = Zu, ~WE.indexOf(ju)) ? null : Zu
    }
    var dj, aj = function() {
      var uu = function(uu) {
        return Cj(Oj, (function(Eu, ju, su) {
          return Eu[su] = Cj(ju, uu, {}), Eu
        }), {})
      };
      Mj = uu((function(uu, Eu, ju) {
        (Eu[3] && (uu[Eu[3]] = ju), Eu[2]) && Eu[2].filter((function(uu) {
          return "number" === typeof uu
        })).forEach((function(Eu) {
          uu[Eu.toString(16)] = ju
        }));
        return uu
      })), ej = uu((function(uu, Eu, ju) {
        (uu[ju] = ju, Eu[2]) && Eu[2].filter((function(uu) {
          return "string" === typeof uu
        })).forEach((function(Eu) {
          uu[Eu] = ju
        }));
        return uu
      })), wj = uu((function(uu, Eu, ju) {
        var su = Eu[2];
        return uu[ju] = ju, su.forEach((function(Eu) {
          uu[Eu] = ju
        })), uu
      }));
      var Eu = "far" in Oj || BE.autoFetchSvg,
        ju = Cj(Yj, (function(uu, ju) {
          var su = ju[0],
            Uu = ju[1],
            Zu = ju[2];
          return "far" !== Uu || Eu || (Uu = "fas"), "string" === typeof su && (uu.names[su] = {
            prefix: Uu,
            iconName: Zu
          }), "number" === typeof su && (uu.unicodes[su.toString(16)] = {
            prefix: Uu,
            iconName: Zu
          }), uu
        }), {
          names: {},
          unicodes: {}
        });
      Gj = ju.names, pj = ju.unicodes, gj = vj(BE.styleDefault, {
        family: BE.familyDefault
      })
    };

    function Pj(uu, Eu) {
      return (Mj[uu] || {})[Eu]
    }

    function oj(uu, Eu) {
      return (wj[uu] || {})[Eu]
    }

    function kj(uu) {
      return Gj[uu] || {
        prefix: null,
        iconName: null
      }
    }

    function mj() {
      return gj
    }
    dj = function(uu) {
      gj = vj(uu.styleDefault, {
        family: BE.familyDefault
      })
    }, LE.push(dj), aj();

    function vj(uu) {
      var Eu = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        ju = void 0 === Eu ? vu : Eu,
        su = aE[ju][uu];
      if (ju === Ku && !uu) return "fad";
      var Uu = oE[ju][uu] || oE[ju][su],
        Zu = uu in Uj.styles ? uu : null;
      return Uu || Zu || null
    }

    function Kj(uu) {
      return uu.sort().filter((function(uu, Eu, ju) {
        return ju.indexOf(uu) === Eu
      }))
    }
    var Vj = CE.concat(uE);

    function rj(uu) {
      var Eu = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        ju = void 0 !== Eu && Eu,
        su = null,
        Uu = Kj(uu.filter((function(uu) {
          return Vj.includes(uu)
        }))),
        Zu = Kj(uu.filter((function(uu) {
          return !Vj.includes(uu)
        }))),
        Xu = fu(Uu.filter((function(uu) {
          return su = uu, !mu.includes(uu)
        })), 1)[0],
        lu = void 0 === Xu ? null : Xu,
        Cu = function(uu) {
          var Eu = vu,
            ju = hj.reduce((function(uu, Eu) {
              return uu[Eu] = "".concat(BE.cssPrefix, "-").concat(Eu), uu
            }), {});
          return zu.forEach((function(su) {
            (uu.includes(ju[su]) || uu.some((function(uu) {
              return Dj[su].includes(uu)
            }))) && (Eu = su)
          })), Eu
        }(Uu),
        bu = qu(qu({}, function(uu) {
          var Eu = [],
            ju = null;
          return uu.forEach((function(uu) {
            var su = Jj(BE.cssPrefix, uu);
            su ? ju = su : uu && Eu.push(uu)
          })), {
            iconName: ju,
            rest: Eu
          }
        }(Zu)), {}, {
          prefix: vj(lu, {
            family: Cu
          })
        });
      return qu(qu(qu({}, bu), function(uu) {
        var Eu = uu.values,
          ju = uu.family,
          su = uu.canonical,
          Uu = uu.givenPrefix,
          Zu = void 0 === Uu ? "" : Uu,
          Xu = uu.styles,
          lu = void 0 === Xu ? {} : Xu,
          qu = uu.config,
          fu = void 0 === qu ? {} : qu,
          Cu = ju === Ku,
          bu = Eu.includes("fa-duotone") || Eu.includes("fad"),
          cu = "duotone" === fu.familyDefault,
          Nu = "fad" === su.prefix || "fa-duotone" === su.prefix;
        !Cu && (bu || cu || Nu) && (su.prefix = "fad");
        (Eu.includes("fa-brands") || Eu.includes("fab")) && (su.prefix = "fab");
        if (!su.prefix && Qj.includes(ju)) {
          if (Object.keys(lu).find((function(uu) {
              return ij.includes(uu)
            })) || fu.autoFetchSvg) {
            var Ou = Ru.get(ju).defaultShortPrefixId;
            su.prefix = Ou, su.iconName = oj(su.prefix, su.iconName) || su.iconName
          }
        }
        "fa" !== su.prefix && "fa" !== Zu || (su.prefix = mj() || "fas");
        return su
      }({
        values: uu,
        family: Cu,
        styles: Oj,
        config: BE,
        canonical: bu,
        givenPrefix: su
      })), function(uu, Eu, ju) {
        var su = ju.prefix,
          Uu = ju.iconName;
        if (uu || !su || !Uu) return {
          prefix: su,
          iconName: Uu
        };
        var Zu = "fa" === Eu ? kj(Uu) : {},
          Xu = oj(su, Uu);
        Uu = Zu.iconName || Xu || Uu, "far" !== (su = Zu.prefix || su) || Oj.far || !Oj.fas || BE.autoFetchSvg || (su = "fas");
        return {
          prefix: su,
          iconName: Uu
        }
      }(ju, su, bu))
    }
    var Qj = zu.filter((function(uu) {
        return uu !== vu || uu !== Ku
      })),
      ij = Object.keys(fE).filter((function(uu) {
        return uu !== vu
      })).map((function(uu) {
        return Object.keys(fE[uu])
      })).flat();
    var Wj = function() {
        return function(uu, Eu, ju) {
          return Eu && Uu(uu.prototype, Eu), ju && Uu(uu, ju), Object.defineProperty(uu, "prototype", {
            writable: !1
          }), uu
        }((function uu() {
          ! function(uu, Eu) {
            if (!(uu instanceof Eu)) throw new TypeError("Cannot call a class as a function")
          }(this, uu), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var uu = this, Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
            var Uu = ju.reduce(this._pullDefinitions, {});
            Object.keys(Uu).forEach((function(Eu) {
              uu.definitions[Eu] = qu(qu({}, uu.definitions[Eu] || {}), Uu[Eu]), Nj(Eu, Uu[Eu]);
              var ju = mE[vu][Eu];
              ju && Nj(ju, Uu[Eu]), aj()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(uu, Eu) {
            var ju = Eu.prefix && Eu.iconName && Eu.icon ? {
              0: Eu
            } : Eu;
            return Object.keys(ju).map((function(Eu) {
              var su = ju[Eu],
                Uu = su.prefix,
                Zu = su.iconName,
                Xu = su.icon,
                lu = Xu[2];
              uu[Uu] || (uu[Uu] = {}), lu.length > 0 && lu.forEach((function(Eu) {
                "string" === typeof Eu && (uu[Uu][Eu] = Xu)
              })), uu[Uu][Zu] = Xu
            })), uu
          }
        }])
      }(),
      Sj = [],
      Ij = {},
      Fj = {},
      Bj = Object.keys(Fj);

    function Lj(uu, Eu) {
      for (var ju = arguments.length, su = new Array(ju > 2 ? ju - 2 : 0), Uu = 2; Uu < ju; Uu++) su[Uu - 2] = arguments[Uu];
      return (Ij[uu] || []).forEach((function(uu) {
        Eu = uu.apply(null, [Eu].concat(su))
      })), Eu
    }

    function tj(uu) {
      for (var Eu = arguments.length, ju = new Array(Eu > 1 ? Eu - 1 : 0), su = 1; su < Eu; su++) ju[su - 1] = arguments[su];
      (Ij[uu] || []).forEach((function(uu) {
        uu.apply(null, ju)
      }))
    }

    function xj() {
      var uu = arguments[0],
        Eu = Array.prototype.slice.call(arguments, 1);
      return Fj[uu] ? Fj[uu].apply(null, Eu) : void 0
    }

    function Tj(uu) {
      "fa" === uu.prefix && (uu.prefix = "fas");
      var Eu = uu.iconName,
        ju = uu.prefix || mj();
      if (Eu) return Eu = oj(ju, Eu) || Eu, fj(Hj.definitions, ju, Eu) || fj(Uj.styles, ju, Eu)
    }
    var Hj = new Wj,
      Aj = {
        i2svg: function() {
          var uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Pu ? (tj("beforeI2svg", uu), xj("pseudoElements2svg", uu), xj("i2svg", uu)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var uu, Eu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            ju = Eu.autoReplaceSvgRoot;
          !1 === BE.autoReplaceSvg && (BE.autoReplaceSvg = !0), BE.observeMutations = !0, uu = function() {
            yj({
              autoReplaceSvgRoot: ju
            }), tj("watch", Eu)
          }, Pu && (lj ? setTimeout(uu, 0) : Zj.push(uu))
        }
      },
      nj = {
        noAuto: function() {
          BE.autoReplaceSvg = !1, BE.observeMutations = !1, tj("noAuto")
        },
        config: BE,
        dom: Aj,
        parse: {
          icon: function(uu) {
            if (null === uu) return null;
            if ("object" === cu(uu) && uu.prefix && uu.iconName) return {
              prefix: uu.prefix,
              iconName: oj(uu.prefix, uu.iconName) || uu.iconName
            };
            if (Array.isArray(uu) && 2 === uu.length) {
              var Eu = 0 === uu[1].indexOf("fa-") ? uu[1].slice(3) : uu[1],
                ju = vj(uu[0]);
              return {
                prefix: ju,
                iconName: oj(ju, Eu) || Eu
              }
            }
            if ("string" === typeof uu && (uu.indexOf("".concat(BE.cssPrefix, "-")) > -1 || uu.match(KE))) {
              var su = rj(uu.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: su.prefix || mj(),
                iconName: oj(su.prefix, su.iconName) || su.iconName
              }
            }
            if ("string" === typeof uu) {
              var Uu = mj();
              return {
                prefix: Uu,
                iconName: oj(Uu, uu) || uu
              }
            }
          }
        },
        library: Hj,
        findIconDefinition: Tj,
        toHtml: qj
      },
      yj = function() {
        var uu = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          Eu = void 0 === uu ? Ju : uu;
        (Object.keys(Uj.styles).length > 0 || BE.autoFetchSvg) && Pu && BE.autoReplaceSvg && nj.dom.i2svg({
          node: Eu
        })
      };

    function zj(uu, Eu) {
      return Object.defineProperty(uu, "abstract", {
        get: Eu
      }), Object.defineProperty(uu, "html", {
        get: function() {
          return uu.abstract.map((function(uu) {
            return qj(uu)
          }))
        }
      }), Object.defineProperty(uu, "node", {
        get: function() {
          if (Pu) {
            var Eu = Ju.createElement("div");
            return Eu.innerHTML = uu.html, Eu.children
          }
        }
      }), uu
    }

    function Rj(uu) {
      var Eu = uu.icons,
        ju = Eu.main,
        su = Eu.mask,
        Uu = uu.prefix,
        Zu = uu.iconName,
        Xu = uu.transform,
        lu = uu.symbol,
        fu = uu.maskId,
        Cu = uu.extra,
        bu = uu.watchable,
        cu = void 0 !== bu && bu,
        Nu = su.found ? su : ju,
        Ou = Nu.width,
        Yu = Nu.height,
        hu = [BE.replacementClass, Zu ? "".concat(BE.cssPrefix, "-").concat(Zu) : ""].filter((function(uu) {
          return -1 === Cu.classes.indexOf(uu)
        })).filter((function(uu) {
          return "" !== uu || !!uu
        })).concat(Cu.classes).join(" "),
        Du = {
          children: [],
          attributes: qu(qu({}, Cu.attributes), {}, {
            "data-prefix": Uu,
            "data-icon": Zu,
            class: hu,
            role: Cu.attributes.role || "img",
            viewBox: "0 0 ".concat(Ou, " ").concat(Yu)
          })
        };
      (function(uu) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(Eu) {
          return Eu in uu
        }))
      })(Cu.attributes) || Cu.attributes["aria-hidden"] || (Du.attributes["aria-hidden"] = "true"), cu && (Du.attributes[hE] = "");
      var gu = qu(qu({}, Du), {}, {
          prefix: Uu,
          iconName: Zu,
          main: ju,
          mask: su,
          maskId: fu,
          transform: Xu,
          symbol: lu,
          styles: qu({}, Cu.styles)
        }),
        Mu = su.found && ju.found ? xj("generateAbstractMask", gu) || {
          children: [],
          attributes: {}
        } : xj("generateAbstractIcon", gu) || {
          children: [],
          attributes: {}
        },
        eu = Mu.children,
        Gu = Mu.attributes;
      return gu.children = eu, gu.attributes = Gu, lu ? function(uu) {
        var Eu = uu.prefix,
          ju = uu.iconName,
          su = uu.children,
          Uu = uu.attributes,
          Zu = uu.symbol,
          Xu = !0 === Zu ? "".concat(Eu, "-").concat(BE.cssPrefix, "-").concat(ju) : Zu;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: qu(qu({}, Uu), {}, {
              id: Xu
            }),
            children: su
          }]
        }]
      }(gu) : function(uu) {
        var Eu = uu.children,
          ju = uu.main,
          su = uu.mask,
          Uu = uu.attributes,
          Zu = uu.styles,
          Xu = uu.transform;
        if (zE(Xu) && ju.found && !su.found) {
          var lu = {
            x: ju.width / ju.height / 2,
            y: .5
          };
          Uu.style = yE(qu(qu({}, Zu), {}, {
            "transform-origin": "".concat(lu.x + Xu.x / 16, "em ").concat(lu.y + Xu.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: Uu,
          children: Eu
        }]
      }(gu)
    }

    function us(uu) {
      var Eu = uu.content,
        ju = uu.width,
        su = uu.height,
        Uu = uu.transform,
        Zu = uu.extra,
        Xu = uu.watchable,
        lu = void 0 !== Xu && Xu,
        fu = qu(qu({}, Zu.attributes), {}, {
          class: Zu.classes.join(" ")
        });
      lu && (fu[hE] = "");
      var Cu = qu({}, Zu.styles);
      zE(Uu) && (Cu.transform = function(uu) {
        var Eu = uu.transform,
          ju = uu.width,
          su = void 0 === ju ? 16 : ju,
          Uu = uu.height,
          Zu = void 0 === Uu ? 16 : Uu,
          Xu = uu.startCentered,
          lu = void 0 !== Xu && Xu,
          qu = "";
        return qu += lu && ou ? "translate(".concat(Eu.x / tE - su / 2, "em, ").concat(Eu.y / tE - Zu / 2, "em) ") : lu ? "translate(calc(-50% + ".concat(Eu.x / tE, "em), calc(-50% + ").concat(Eu.y / tE, "em)) ") : "translate(".concat(Eu.x / tE, "em, ").concat(Eu.y / tE, "em) "), qu += "scale(".concat(Eu.size / tE * (Eu.flipX ? -1 : 1), ", ").concat(Eu.size / tE * (Eu.flipY ? -1 : 1), ") "), qu + "rotate(".concat(Eu.rotate, "deg) ")
      }({
        transform: Uu,
        startCentered: !0,
        width: ju,
        height: su
      }), Cu["-webkit-transform"] = Cu.transform);
      var bu = yE(Cu);
      bu.length > 0 && (fu.style = bu);
      var cu = [];
      return cu.push({
        tag: "span",
        attributes: fu,
        children: [Eu]
      }), cu
    }
    var Es = Uj.styles;

    function ss(uu) {
      var Eu = uu[0],
        ju = uu[1],
        su = fu(uu.slice(4), 1)[0];
      return {
        found: !0,
        width: Eu,
        height: ju,
        icon: Array.isArray(su) ? {
          tag: "g",
          attributes: {
            class: "".concat(BE.cssPrefix, "-").concat(iE.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(BE.cssPrefix, "-").concat(iE.SECONDARY),
              fill: "currentColor",
              d: su[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(BE.cssPrefix, "-").concat(iE.PRIMARY),
              fill: "currentColor",
              d: su[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: su
          }
        }
      }
    }
    var Us = {
      found: !1,
      width: 512,
      height: 512
    };

    function Zs(uu, Eu) {
      var ju = Eu;
      return "fa" === Eu && null !== BE.styleDefault && (Eu = mj()), new Promise((function(su, Uu) {
        if ("fa" === ju) {
          var Zu = kj(uu) || {};
          uu = Zu.iconName || uu, Eu = Zu.prefix || Eu
        }
        if (uu && Eu && Es[Eu] && Es[Eu][uu]) return su(ss(Es[Eu][uu]));
        ! function(uu, Eu) {
          wE || BE.showMissingIcons || !uu || console.error('Icon with name "'.concat(uu, '" and prefix "').concat(Eu, '" is missing.'))
        }(uu, Eu), su(qu(qu({}, Us), {}, {
          icon: BE.showMissingIcons && uu && xj("missingIconAbstract") || {}
        }))
      }))
    }
    var Xs = function() {},
      ls = BE.measurePerformance && au && au.mark && au.measure ? au : {
        mark: Xs,
        measure: Xs
      },
      qs = 'FA "7.2.0"',
      fs = function(uu) {
        ls.mark("".concat(qs, " ").concat(uu, " ends")), ls.measure("".concat(qs, " ").concat(uu), "".concat(qs, " ").concat(uu, " begins"), "".concat(qs, " ").concat(uu, " ends"))
      },
      Cs = function(uu) {
        return ls.mark("".concat(qs, " ").concat(uu, " begins")),
          function() {
            return fs(uu)
          }
      },
      bs = function() {};

    function cs(uu) {
      return "string" === typeof(uu.getAttribute ? uu.getAttribute(hE) : null)
    }

    function Ns(uu) {
      return Ju.createElementNS("http://www.w3.org/2000/svg", uu)
    }

    function Os(uu) {
      return Ju.createElement(uu)
    }

    function Ys(uu) {
      var Eu = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        ju = void 0 === Eu ? "svg" === uu.tag ? Ns : Os : Eu;
      if ("string" === typeof uu) return Ju.createTextNode(uu);
      var su = ju(uu.tag);
      return Object.keys(uu.attributes || []).forEach((function(Eu) {
        su.setAttribute(Eu, uu.attributes[Eu])
      })), (uu.children || []).forEach((function(uu) {
        su.appendChild(Ys(uu, {
          ceFn: ju
        }))
      })), su
    }
    var hs = {
      replace: function(uu) {
        var Eu = uu[0];
        if (Eu.parentNode)
          if (uu[1].forEach((function(uu) {
              Eu.parentNode.insertBefore(Ys(uu), Eu)
            })), null === Eu.getAttribute(hE) && BE.keepOriginalSource) {
            var ju = Ju.createComment(function(uu) {
              var Eu = " ".concat(uu.outerHTML, " ");
              return "".concat(Eu, "Font Awesome fontawesome.com ")
            }(Eu));
            Eu.parentNode.replaceChild(ju, Eu)
          } else Eu.remove()
      },
      nest: function(uu) {
        var Eu = uu[0],
          ju = uu[1];
        if (~AE(Eu).indexOf(BE.replacementClass)) return hs.replace(uu);
        var su = new RegExp("".concat(BE.cssPrefix, "-.*"));
        if (delete ju[0].attributes.id, ju[0].attributes.class) {
          var Uu = ju[0].attributes.class.split(" ").reduce((function(uu, Eu) {
            return Eu === BE.replacementClass || Eu.match(su) ? uu.toSvg.push(Eu) : uu.toNode.push(Eu), uu
          }), {
            toNode: [],
            toSvg: []
          });
          ju[0].attributes.class = Uu.toSvg.join(" "), 0 === Uu.toNode.length ? Eu.removeAttribute("class") : Eu.setAttribute("class", Uu.toNode.join(" "))
        }
        var Zu = ju.map((function(uu) {
          return qj(uu)
        })).join("\n");
        Eu.setAttribute(hE, ""), Eu.innerHTML = Zu
      }
    };

    function Ds(uu) {
      uu()
    }

    function gs(uu, Eu) {
      var ju = "function" === typeof Eu ? Eu : bs;
      if (0 === uu.length) ju();
      else {
        var su = Ds;
        "async" === BE.mutateApproach && (su = wu.requestAnimationFrame || Ds), su((function() {
          var Eu = !0 === BE.autoReplaceSvg ? hs.replace : hs[BE.autoReplaceSvg] || hs.replace,
            su = Cs("mutate");
          uu.map(Eu), su(), ju()
        }))
      }
    }
    var Ms = !1;

    function es() {
      Ms = !0
    }

    function Gs() {
      Ms = !1
    }
    var ps = null;

    function ws(uu) {
      if (du && BE.observeMutations) {
        var Eu = uu.treeCallback,
          ju = void 0 === Eu ? bs : Eu,
          su = uu.nodeCallback,
          Uu = void 0 === su ? bs : su,
          Zu = uu.pseudoElementsCallback,
          Xu = void 0 === Zu ? bs : Zu,
          lu = uu.observeMutationsRoot,
          qu = void 0 === lu ? Ju : lu;
        ps = new du((function(uu) {
          if (!Ms) {
            var Eu = mj();
            HE(uu).forEach((function(uu) {
              if ("childList" === uu.type && uu.addedNodes.length > 0 && !cs(uu.addedNodes[0]) && (BE.searchPseudoElements && Xu(uu.target), ju(uu.target)), "attributes" === uu.type && uu.target.parentNode && BE.searchPseudoElements && Xu([uu.target], !0), "attributes" === uu.type && cs(uu.target) && ~QE.indexOf(uu.attributeName))
                if ("class" === uu.attributeName && function(uu) {
                    var Eu = uu.getAttribute ? uu.getAttribute(gE) : null,
                      ju = uu.getAttribute ? uu.getAttribute(ME) : null;
                    return Eu && ju
                  }(uu.target)) {
                  var su = rj(AE(uu.target)),
                    Zu = su.prefix,
                    lu = su.iconName;
                  uu.target.setAttribute(gE, Zu || Eu), lu && uu.target.setAttribute(ME, lu)
                } else(qu = uu.target) && qu.classList && qu.classList.contains && qu.classList.contains(BE.replacementClass) && Uu(uu.target);
              var qu
            }))
          }
        })), Pu && ps.observe(qu, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function ds(uu) {
      var Eu, ju, su = uu.getAttribute("data-prefix"),
        Uu = uu.getAttribute("data-icon"),
        Zu = void 0 !== uu.innerText ? uu.innerText.trim() : "",
        Xu = rj(AE(uu));
      return Xu.prefix || (Xu.prefix = mj()), su && Uu && (Xu.prefix = su, Xu.iconName = Uu), Xu.iconName && Xu.prefix || (Xu.prefix && Zu.length > 0 && (Xu.iconName = (Eu = Xu.prefix, ju = uu.innerText, (ej[Eu] || {})[ju] || Pj(Xu.prefix, bj(uu.innerText)))), !Xu.iconName && BE.autoFetchSvg && uu.firstChild && uu.firstChild.nodeType === Node.TEXT_NODE && (Xu.iconName = uu.firstChild.data)), Xu
    }

    function as(uu) {
      var Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        ju = ds(uu),
        su = ju.iconName,
        Uu = ju.prefix,
        Zu = ju.rest,
        Xu = function(uu) {
          return HE(uu.attributes).reduce((function(uu, Eu) {
            return "class" !== uu.name && "style" !== uu.name && (uu[Eu.name] = Eu.value), uu
          }), {})
        }(uu),
        lu = Lj("parseNodeAttributes", {}, uu),
        fu = Eu.styleParser ? function(uu) {
          var Eu = uu.getAttribute("style"),
            ju = [];
          return Eu && (ju = Eu.split(";").reduce((function(uu, Eu) {
            var ju = Eu.split(":"),
              su = ju[0],
              Uu = ju.slice(1);
            return su && Uu.length > 0 && (uu[su] = Uu.join(":").trim()), uu
          }), {})), ju
        }(uu) : [];
      return qu({
        iconName: su,
        prefix: Uu,
        transform: xE,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: Zu,
          styles: fu,
          attributes: Xu
        }
      }, lu)
    }
    var Ps = Uj.styles;

    function os(uu) {
      var Eu = "nest" === BE.autoReplaceSvg ? as(uu, {
        styleParser: !1
      }) : as(uu);
      return ~Eu.extra.classes.indexOf(VE) ? xj("generateLayersText", uu, Eu) : xj("generateSvgReplacementMutation", uu, Eu)
    }

    function ks(uu) {
      var Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!Pu) return Promise.resolve();
      var ju = Ju.documentElement.classList,
        su = function(uu) {
          return ju.add("".concat(eE, "-").concat(uu))
        },
        Uu = function(uu) {
          return ju.remove("".concat(eE, "-").concat(uu))
        },
        Zu = BE.autoFetchSvg ? [].concat(Cu(uE), Cu(CE)) : mu.concat(Object.keys(Ps));
      Zu.includes("fa") || Zu.push("fa");
      var Xu = [".".concat(VE, ":not([").concat(hE, "])")].concat(Zu.map((function(uu) {
        return ".".concat(uu, ":not([").concat(hE, "])")
      }))).join(", ");
      if (0 === Xu.length) return Promise.resolve();
      var lu = [];
      try {
        lu = HE(uu.querySelectorAll(Xu))
      } catch (bu) {}
      if (!(lu.length > 0)) return Promise.resolve();
      su("pending"), Uu("complete");
      var qu = Cs("onTree"),
        fu = lu.reduce((function(uu, Eu) {
          try {
            var ju = os(Eu);
            ju && uu.push(ju)
          } catch (bu) {
            wE || "MissingIcon" === bu.name && console.error(bu)
          }
          return uu
        }), []);
      return new Promise((function(uu, ju) {
        Promise.all(fu).then((function(ju) {
          gs(ju, (function() {
            su("active"), su("complete"), Uu("pending"), "function" === typeof Eu && Eu(), qu(), uu()
          }))
        })).catch((function(uu) {
          qu(), ju(uu)
        }))
      }))
    }

    function ms(uu) {
      var Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      os(uu).then((function(uu) {
        uu && gs([uu], Eu)
      }))
    }
    var vs = function(uu) {
        var Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ju = Eu.transform,
          su = void 0 === ju ? xE : ju,
          Uu = Eu.symbol,
          Zu = void 0 !== Uu && Uu,
          Xu = Eu.mask,
          lu = void 0 === Xu ? null : Xu,
          fu = Eu.maskId,
          Cu = void 0 === fu ? null : fu,
          bu = Eu.classes,
          cu = void 0 === bu ? [] : bu,
          Nu = Eu.attributes,
          Ou = void 0 === Nu ? {} : Nu,
          Yu = Eu.styles,
          hu = void 0 === Yu ? {} : Yu;
        if (uu) {
          var Du = uu.prefix,
            gu = uu.iconName,
            Mu = uu.icon;
          return zj(qu({
            type: "icon"
          }, uu), (function() {
            return tj("beforeDOMElementCreation", {
              iconDefinition: uu,
              params: Eu
            }), Rj({
              icons: {
                main: ss(Mu),
                mask: lu ? ss(lu.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: Du,
              iconName: gu,
              transform: qu(qu({}, xE), su),
              symbol: Zu,
              maskId: Cu,
              extra: {
                attributes: Ou,
                styles: hu,
                classes: cu
              }
            })
          }))
        }
      },
      Ks = {
        mixout: function() {
          return {
            icon: (uu = vs, function(Eu) {
              var ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                su = (Eu || {}).icon ? Eu : Tj(Eu || {}),
                Uu = ju.mask;
              return Uu && (Uu = (Uu || {}).icon ? Uu : Tj(Uu || {})), uu(su, qu(qu({}, ju), {}, {
                mask: Uu
              }))
            })
          };
          var uu
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(uu) {
              return uu.treeCallback = ks, uu.nodeCallback = ms, uu
            }
          }
        },
        provides: function(uu) {
          uu.i2svg = function(uu) {
            var Eu = uu.node,
              ju = void 0 === Eu ? Ju : Eu,
              su = uu.callback;
            return ks(ju, void 0 === su ? function() {} : su)
          }, uu.generateSvgReplacementMutation = function(uu, Eu) {
            var ju = Eu.iconName,
              su = Eu.prefix,
              Uu = Eu.transform,
              Zu = Eu.symbol,
              Xu = Eu.mask,
              lu = Eu.maskId,
              qu = Eu.extra;
            return new Promise((function(Eu, Cu) {
              Promise.all([Zs(ju, su), Xu.iconName ? Zs(Xu.iconName, Xu.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(Xu) {
                var Cu = fu(Xu, 2),
                  bu = Cu[0],
                  cu = Cu[1];
                Eu([uu, Rj({
                  icons: {
                    main: bu,
                    mask: cu
                  },
                  prefix: su,
                  iconName: ju,
                  transform: Uu,
                  symbol: Zu,
                  maskId: lu,
                  extra: qu,
                  watchable: !0
                })])
              })).catch(Cu)
            }))
          }, uu.generateAbstractIcon = function(uu) {
            var Eu, ju = uu.children,
              su = uu.attributes,
              Uu = uu.main,
              Zu = uu.transform,
              Xu = yE(uu.styles);
            return Xu.length > 0 && (su.style = Xu), zE(Zu) && (Eu = xj("generateAbstractTransformGrouping", {
              main: Uu,
              transform: Zu,
              containerWidth: Uu.width,
              iconWidth: Uu.width
            })), ju.push(Eu || Uu.icon), {
              children: ju,
              attributes: su
            }
          }
        }
      },
      Vs = {
        mixout: function() {
          return {
            layer: function(uu) {
              var Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ju = Eu.classes,
                su = void 0 === ju ? [] : ju;
              return zj({
                type: "layer"
              }, (function() {
                tj("beforeDOMElementCreation", {
                  assembler: uu,
                  params: Eu
                });
                var ju = [];
                return uu((function(uu) {
                  Array.isArray(uu) ? uu.map((function(uu) {
                    ju = ju.concat(uu.abstract)
                  })) : ju = ju.concat(uu.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(BE.cssPrefix, "-layers")].concat(Cu(su)).join(" ")
                  },
                  children: ju
                }]
              }))
            }
          }
        }
      },
      rs = {
        mixout: function() {
          return {
            counter: function(uu) {
              var Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ju = Eu.title,
                su = void 0 === ju ? null : ju,
                Uu = Eu.classes,
                Zu = void 0 === Uu ? [] : Uu,
                Xu = Eu.attributes,
                lu = void 0 === Xu ? {} : Xu,
                fu = Eu.styles,
                bu = void 0 === fu ? {} : fu;
              return zj({
                type: "counter",
                content: uu
              }, (function() {
                return tj("beforeDOMElementCreation", {
                    content: uu,
                    params: Eu
                  }),
                  function(uu) {
                    var Eu = uu.content,
                      ju = uu.extra,
                      su = qu(qu({}, ju.attributes), {}, {
                        class: ju.classes.join(" ")
                      }),
                      Uu = yE(ju.styles);
                    Uu.length > 0 && (su.style = Uu);
                    var Zu = [];
                    return Zu.push({
                      tag: "span",
                      attributes: su,
                      children: [Eu]
                    }), Zu
                  }({
                    content: uu.toString(),
                    title: su,
                    extra: {
                      attributes: lu,
                      styles: bu,
                      classes: ["".concat(BE.cssPrefix, "-layers-counter")].concat(Cu(Zu))
                    }
                  })
              }))
            }
          }
        }
      },
      Qs = {
        mixout: function() {
          return {
            text: function(uu) {
              var Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ju = Eu.transform,
                su = void 0 === ju ? xE : ju,
                Uu = Eu.classes,
                Zu = void 0 === Uu ? [] : Uu,
                Xu = Eu.attributes,
                lu = void 0 === Xu ? {} : Xu,
                fu = Eu.styles,
                bu = void 0 === fu ? {} : fu;
              return zj({
                type: "text",
                content: uu
              }, (function() {
                return tj("beforeDOMElementCreation", {
                  content: uu,
                  params: Eu
                }), us({
                  content: uu,
                  transform: qu(qu({}, xE), su),
                  extra: {
                    attributes: lu,
                    styles: bu,
                    classes: ["".concat(BE.cssPrefix, "-layers-text")].concat(Cu(Zu))
                  }
                })
              }))
            }
          }
        },
        provides: function(uu) {
          uu.generateLayersText = function(uu, Eu) {
            var ju = Eu.transform,
              su = Eu.extra,
              Uu = null,
              Zu = null;
            if (ou) {
              var Xu = parseInt(getComputedStyle(uu).fontSize, 10),
                lu = uu.getBoundingClientRect();
              Uu = lu.width / Xu, Zu = lu.height / Xu
            }
            return Promise.resolve([uu, us({
              content: uu.innerHTML,
              width: Uu,
              height: Zu,
              transform: ju,
              extra: su,
              watchable: !0
            })])
          }
        }
      },
      is = new RegExp('"', "ug"),
      Ws = [1105920, 1112319],
      Ss = qu(qu(qu(qu({}, {
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
      Is = Object.keys(Ss).reduce((function(uu, Eu) {
        return uu[Eu.toLowerCase()] = Ss[Eu], uu
      }), {}),
      Fs = Object.keys(Is).reduce((function(uu, Eu) {
        var ju = Is[Eu];
        return uu[Eu] = ju[900] || Cu(Object.entries(ju))[0][1], uu
      }), {});

    function Bs(uu, Eu) {
      var ju = "".concat("data-fa-pseudo-element-pending").concat(Eu.replace(":", "-"));
      return new Promise((function(su, Uu) {
        if (null !== uu.getAttribute(ju)) return su();
        var Zu = HE(uu.children).filter((function(uu) {
            return uu.getAttribute(DE) === Eu
          }))[0],
          Xu = wu.getComputedStyle(uu, Eu),
          lu = Xu.getPropertyValue("font-family"),
          fu = lu.match(rE),
          bu = Xu.getPropertyValue("font-weight"),
          cu = Xu.getPropertyValue("content");
        if (Zu && !fu) return uu.removeChild(Zu), su();
        if (fu && "none" !== cu && "" !== cu) {
          var Nu = Xu.getPropertyValue("content"),
            Ou = function(uu, Eu) {
              var ju = uu.replace(/^['"]|['"]$/g, "").toLowerCase(),
                su = parseInt(Eu),
                Uu = isNaN(su) ? "normal" : su;
              return (Is[ju] || {})[Uu] || Fs[ju]
            }(lu, bu),
            Yu = function(uu) {
              return bj(Cu(uu.replace(is, ""))[0] || "")
            }(Nu),
            hu = fu[0].startsWith("FontAwesome"),
            Du = function(uu) {
              var Eu = uu.getPropertyValue("font-feature-settings").includes("ss01"),
                ju = uu.getPropertyValue("content").replace(is, ""),
                su = ju.codePointAt(0),
                Uu = su >= Ws[0] && su <= Ws[1],
                Zu = 2 === ju.length && ju[0] === ju[1];
              return Uu || Zu || Eu
            }(Xu),
            gu = Pj(Ou, Yu),
            Mu = gu;
          if (hu) {
            var eu = function(uu) {
              var Eu = pj[uu],
                ju = Pj("fas", uu);
              return Eu || (ju ? {
                prefix: "fas",
                iconName: ju
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(Yu);
            eu.iconName && eu.prefix && (gu = eu.iconName, Ou = eu.prefix)
          }
          if (!gu || Du || Zu && Zu.getAttribute(gE) === Ou && Zu.getAttribute(ME) === Mu) su();
          else {
            uu.setAttribute(ju, Mu), Zu && uu.removeChild(Zu);
            var Gu = {
                iconName: null,
                prefix: null,
                transform: xE,
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
              pu = Gu.extra;
            pu.attributes[DE] = Eu, Zs(gu, Ou).then((function(Uu) {
              var Zu = Rj(qu(qu({}, Gu), {}, {
                  icons: {
                    main: Uu,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: Ou,
                  iconName: Mu,
                  extra: pu,
                  watchable: !0
                })),
                Xu = Ju.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === Eu ? uu.insertBefore(Xu, uu.firstChild) : uu.appendChild(Xu), Xu.outerHTML = Zu.map((function(uu) {
                return qj(uu)
              })).join("\n"), uu.removeAttribute(ju), su()
            })).catch(Uu)
          }
        } else su()
      }))
    }

    function Ls(uu) {
      return Promise.all([Bs(uu, "::before"), Bs(uu, "::after")])
    }

    function ts(uu) {
      return uu.parentNode !== document.head && !~GE.indexOf(uu.tagName.toUpperCase()) && !uu.getAttribute(DE) && (!uu.parentNode || "svg" !== uu.parentNode.tagName)
    }
    var xs = function(uu) {
        return !!uu && pE.some((function(Eu) {
          return uu.includes(Eu)
        }))
      },
      Ts = function(uu) {
        if (!uu) return [];
        var Eu = new Set,
          ju = uu.split(/,(?![^()]*\))/).map((function(uu) {
            return uu.trim()
          }));
        ju = ju.flatMap((function(uu) {
          return uu.includes("(") ? uu : uu.split(",").map((function(uu) {
            return uu.trim()
          }))
        }));
        var su, Uu = Zu(ju);
        try {
          for (Uu.s(); !(su = Uu.n()).done;) {
            var Xu = su.value;
            if (xs(Xu)) {
              var lu = pE.reduce((function(uu, Eu) {
                return uu.replace(Eu, "")
              }), Xu);
              "" !== lu && "*" !== lu && Eu.add(lu)
            }
          }
        } catch (qu) {
          Uu.e(qu)
        } finally {
          Uu.f()
        }
        return Eu
      };

    function Hs(uu) {
      if (Pu) {
        var Eu;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) Eu = uu;
        else if (BE.searchPseudoElementsFullScan) Eu = uu.querySelectorAll("*");
        else {
          var ju, su = new Set,
            Uu = Zu(document.styleSheets);
          try {
            for (Uu.s(); !(ju = Uu.n()).done;) {
              var Xu = ju.value;
              try {
                var lu, qu = Zu(Xu.cssRules);
                try {
                  for (qu.s(); !(lu = qu.n()).done;) {
                    var fu, Cu = lu.value,
                      bu = Zu(Ts(Cu.selectorText));
                    try {
                      for (bu.s(); !(fu = bu.n()).done;) {
                        var cu = fu.value;
                        su.add(cu)
                      }
                    } catch (Ou) {
                      bu.e(Ou)
                    } finally {
                      bu.f()
                    }
                  }
                } catch (Ou) {
                  qu.e(Ou)
                } finally {
                  qu.f()
                }
              } catch (Yu) {
                BE.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(Xu.href, " (").concat(Yu.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (Ou) {
            Uu.e(Ou)
          } finally {
            Uu.f()
          }
          if (!su.size) return;
          var Nu = Array.from(su).join(", ");
          try {
            Eu = uu.querySelectorAll(Nu)
          } catch (hu) {}
        }
        return new Promise((function(uu, ju) {
          var su = HE(Eu).filter(ts).map(Ls),
            Uu = Cs("searchPseudoElements");
          es(), Promise.all(su).then((function() {
            Uu(), Gs(), uu()
          })).catch((function() {
            Uu(), Gs(), ju()
          }))
        }))
      }
    }
    var As = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(uu) {
              return uu.pseudoElementsCallback = Hs, uu
            }
          }
        },
        provides: function(uu) {
          uu.pseudoElements2svg = function(uu) {
            var Eu = uu.node,
              ju = void 0 === Eu ? Ju : Eu;
            BE.searchPseudoElements && Hs(ju)
          }
        }
      },
      ns = !1,
      ys = function(uu) {
        return uu.toLowerCase().split(" ").reduce((function(uu, Eu) {
          var ju = Eu.toLowerCase().split("-"),
            su = ju[0],
            Uu = ju.slice(1).join("-");
          if (su && "h" === Uu) return uu.flipX = !0, uu;
          if (su && "v" === Uu) return uu.flipY = !0, uu;
          if (Uu = parseFloat(Uu), isNaN(Uu)) return uu;
          switch (su) {
            case "grow":
              uu.size = uu.size + Uu;
              break;
            case "shrink":
              uu.size = uu.size - Uu;
              break;
            case "left":
              uu.x = uu.x - Uu;
              break;
            case "right":
              uu.x = uu.x + Uu;
              break;
            case "up":
              uu.y = uu.y - Uu;
              break;
            case "down":
              uu.y = uu.y + Uu;
              break;
            case "rotate":
              uu.rotate = uu.rotate + Uu
          }
          return uu
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      zs = {
        mixout: function() {
          return {
            parse: {
              transform: function(uu) {
                return ys(uu)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(uu, Eu) {
              var ju = Eu.getAttribute("data-fa-transform");
              return ju && (uu.transform = ys(ju)), uu
            }
          }
        },
        provides: function(uu) {
          uu.generateAbstractTransformGrouping = function(uu) {
            var Eu = uu.main,
              ju = uu.transform,
              su = uu.containerWidth,
              Uu = uu.iconWidth,
              Zu = {
                transform: "translate(".concat(su / 2, " 256)")
              },
              Xu = "translate(".concat(32 * ju.x, ", ").concat(32 * ju.y, ") "),
              lu = "scale(".concat(ju.size / 16 * (ju.flipX ? -1 : 1), ", ").concat(ju.size / 16 * (ju.flipY ? -1 : 1), ") "),
              fu = "rotate(".concat(ju.rotate, " 0 0)"),
              Cu = {
                outer: Zu,
                inner: {
                  transform: "".concat(Xu, " ").concat(lu, " ").concat(fu)
                },
                path: {
                  transform: "translate(".concat(Uu / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: qu({}, Cu.outer),
              children: [{
                tag: "g",
                attributes: qu({}, Cu.inner),
                children: [{
                  tag: Eu.icon.tag,
                  children: Eu.icon.children,
                  attributes: qu(qu({}, Eu.icon.attributes), Cu.path)
                }]
              }]
            }
          }
        }
      },
      Rs = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function uU(uu) {
      var Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return uu.attributes && (uu.attributes.fill || Eu) && (uu.attributes.fill = "black"), uu
    }
    var EU = {
        hooks: function() {
          return {
            parseNodeAttributes: function(uu, Eu) {
              var ju = Eu.getAttribute("data-fa-mask"),
                su = ju ? rj(ju.split(" ").map((function(uu) {
                  return uu.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return su.prefix || (su.prefix = mj()), uu.mask = su, uu.maskId = Eu.getAttribute("data-fa-mask-id"), uu
            }
          }
        },
        provides: function(uu) {
          uu.generateAbstractMask = function(uu) {
            var Eu, ju = uu.children,
              su = uu.attributes,
              Uu = uu.main,
              Zu = uu.mask,
              Xu = uu.maskId,
              lu = uu.transform,
              fu = Uu.width,
              Cu = Uu.icon,
              bu = Zu.width,
              cu = Zu.icon,
              Nu = function(uu) {
                var Eu = uu.transform,
                  ju = uu.containerWidth,
                  su = uu.iconWidth,
                  Uu = {
                    transform: "translate(".concat(ju / 2, " 256)")
                  },
                  Zu = "translate(".concat(32 * Eu.x, ", ").concat(32 * Eu.y, ") "),
                  Xu = "scale(".concat(Eu.size / 16 * (Eu.flipX ? -1 : 1), ", ").concat(Eu.size / 16 * (Eu.flipY ? -1 : 1), ") "),
                  lu = "rotate(".concat(Eu.rotate, " 0 0)");
                return {
                  outer: Uu,
                  inner: {
                    transform: "".concat(Zu, " ").concat(Xu, " ").concat(lu)
                  },
                  path: {
                    transform: "translate(".concat(su / 2 * -1, " -256)")
                  }
                }
              }({
                transform: lu,
                containerWidth: bu,
                iconWidth: fu
              }),
              Ou = {
                tag: "rect",
                attributes: qu(qu({}, Rs), {}, {
                  fill: "white"
                })
              },
              Yu = Cu.children ? {
                children: Cu.children.map(uU)
              } : {},
              hu = {
                tag: "g",
                attributes: qu({}, Nu.inner),
                children: [uU(qu({
                  tag: Cu.tag,
                  attributes: qu(qu({}, Cu.attributes), Nu.path)
                }, Yu))]
              },
              Du = {
                tag: "g",
                attributes: qu({}, Nu.outer),
                children: [hu]
              },
              gu = "mask-".concat(Xu || TE()),
              Mu = "clip-".concat(Xu || TE()),
              eu = {
                tag: "mask",
                attributes: qu(qu({}, Rs), {}, {
                  id: gu,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [Ou, Du]
              },
              Gu = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: Mu
                  },
                  children: (Eu = cu, "g" === Eu.tag ? Eu.children : [Eu])
                }, eu]
              };
            return ju.push(Gu, {
              tag: "rect",
              attributes: qu({
                fill: "currentColor",
                "clip-path": "url(#".concat(Mu, ")"),
                mask: "url(#".concat(gu, ")")
              }, Rs)
            }), {
              children: ju,
              attributes: su
            }
          }
        }
      },
      jU = {
        provides: function(uu) {
          var Eu = !1;
          wu.matchMedia && (Eu = wu.matchMedia("(prefers-reduced-motion: reduce)").matches), uu.missingIconAbstract = function() {
            var uu = [],
              ju = {
                fill: "currentColor"
              },
              su = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            uu.push({
              tag: "path",
              attributes: qu(qu({}, ju), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var Uu = qu(qu({}, su), {}, {
                attributeName: "opacity"
              }),
              Zu = {
                tag: "circle",
                attributes: qu(qu({}, ju), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return Eu || Zu.children.push({
              tag: "animate",
              attributes: qu(qu({}, su), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: qu(qu({}, Uu), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), uu.push(Zu), uu.push({
              tag: "path",
              attributes: qu(qu({}, ju), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: Eu ? [] : [{
                tag: "animate",
                attributes: qu(qu({}, Uu), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), Eu || uu.push({
              tag: "path",
              attributes: qu(qu({}, ju), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: qu(qu({}, Uu), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: uu
            }
          }
        }
      };
    ! function(uu, Eu) {
      var ju = Eu.mixoutsTo;
      Sj = uu, Ij = {}, Object.keys(Fj).forEach((function(uu) {
        -1 === Bj.indexOf(uu) && delete Fj[uu]
      })), Sj.forEach((function(uu) {
        var Eu = uu.mixout ? uu.mixout() : {};
        if (Object.keys(Eu).forEach((function(uu) {
            "function" === typeof Eu[uu] && (ju[uu] = Eu[uu]), "object" === cu(Eu[uu]) && Object.keys(Eu[uu]).forEach((function(su) {
              ju[uu] || (ju[uu] = {}), ju[uu][su] = Eu[uu][su]
            }))
          })), uu.hooks) {
          var su = uu.hooks();
          Object.keys(su).forEach((function(uu) {
            Ij[uu] || (Ij[uu] = []), Ij[uu].push(su[uu])
          }))
        }
        uu.provides && uu.provides(Fj)
      }))
    }([jj, Ks, Vs, rs, Qs, As, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              es(), ns = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            ws(Lj("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            ps && ps.disconnect()
          },
          watch: function(uu) {
            var Eu = uu.observeMutationsRoot;
            ns ? Gs() : ws(Lj("mutationObserverCallbacks", {
              observeMutationsRoot: Eu
            }))
          }
        }
      }
    }, zs, EU, jU, {
      hooks: function() {
        return {
          parseNodeAttributes: function(uu, Eu) {
            var ju = Eu.getAttribute("data-fa-symbol"),
              su = null !== ju && ("" === ju || ju);
            return uu.symbol = su, uu
          }
        }
      }
    }], {
      mixoutsTo: nj
    });
    var sU = nj.noAuto,
      UU = nj.config,
      ZU = nj.library,
      XU = nj.dom,
      lU = nj.parse,
      qU = nj.findIconDefinition,
      fU = nj.toHtml,
      CU = nj.icon,
      bU = nj.layer,
      cU = nj.text,
      NU = nj.counter
  },
  6891: uu => {
    uu.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);