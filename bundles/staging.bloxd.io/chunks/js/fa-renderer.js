/*! For license information please see q3ynmh.fa-renderer.0c53b4f3.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6460: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      FontAwesomeIcon: () => eu
    });
    var Eu = yu(6453),
      Ku = yu(4745),
      Qu = yu.n(Ku),
      mu = yu(64);

    function Ju(uu, Ru) {
      (null == Ru || Ru > uu.length) && (Ru = uu.length);
      for (var yu = 0, Eu = Array(Ru); yu < Ru; yu++) Eu[yu] = uu[yu];
      return Eu
    }

    function Nu(uu, Ru, yu) {
      return (Ru = function(uu) {
        var Ru = function(uu, Ru) {
          if ("object" != typeof uu || !uu) return uu;
          var yu = uu[Symbol.toPrimitive];
          if (void 0 !== yu) {
            var Eu = yu.call(uu, Ru || "default");
            if ("object" != typeof Eu) return Eu;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Ru ? String : Number)(uu)
        }(uu, "string");
        return "symbol" == typeof Ru ? Ru : Ru + ""
      }(Ru)) in uu ? Object.defineProperty(uu, Ru, {
        value: yu,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : uu[Ru] = yu, uu
    }

    function Xu(uu, Ru) {
      var yu = Object.keys(uu);
      if (Object.getOwnPropertySymbols) {
        var Eu = Object.getOwnPropertySymbols(uu);
        Ru && (Eu = Eu.filter((function(Ru) {
          return Object.getOwnPropertyDescriptor(uu, Ru).enumerable
        }))), yu.push.apply(yu, Eu)
      }
      return yu
    }

    function Vu(uu) {
      for (var Ru = 1; Ru < arguments.length; Ru++) {
        var yu = null != arguments[Ru] ? arguments[Ru] : {};
        Ru % 2 ? Xu(Object(yu), !0).forEach((function(Ru) {
          Nu(uu, Ru, yu[Ru])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(uu, Object.getOwnPropertyDescriptors(yu)) : Xu(Object(yu)).forEach((function(Ru) {
          Object.defineProperty(uu, Ru, Object.getOwnPropertyDescriptor(yu, Ru))
        }))
      }
      return uu
    }

    function ru(uu, Ru) {
      return function(uu) {
        if (Array.isArray(uu)) return uu
      }(uu) || function(uu, Ru) {
        var yu = null == uu ? null : "undefined" != typeof Symbol && uu[Symbol.iterator] || uu["@@iterator"];
        if (null != yu) {
          var Eu, Ku, Qu, mu, Ju = [],
            Nu = !0,
            Xu = !1;
          try {
            if (Qu = (yu = yu.call(uu)).next, 0 === Ru) {
              if (Object(yu) !== yu) return;
              Nu = !1
            } else
              for (; !(Nu = (Eu = Qu.call(yu)).done) && (Ju.push(Eu.value), Ju.length !== Ru); Nu = !0);
          } catch (uu) {
            Xu = !0, Ku = uu
          } finally {
            try {
              if (!Nu && null != yu.return && (mu = yu.return(), Object(mu) !== mu)) return
            } finally {
              if (Xu) throw Ku
            }
          }
          return Ju
        }
      }(uu, Ru) || Su(uu, Ru) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Bu(uu) {
      return function(uu) {
        if (Array.isArray(uu)) return Ju(uu)
      }(uu) || function(uu) {
        if ("undefined" != typeof Symbol && null != uu[Symbol.iterator] || null != uu["@@iterator"]) return Array.from(uu)
      }(uu) || Su(uu) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xu(uu) {
      return xu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(uu) {
        return typeof uu
      } : function(uu) {
        return uu && "function" == typeof Symbol && uu.constructor === Symbol && uu !== Symbol.prototype ? "symbol" : typeof uu
      }, xu(uu)
    }

    function Su(uu, Ru) {
      if (uu) {
        if ("string" == typeof uu) return Ju(uu, Ru);
        var yu = {}.toString.call(uu).slice(8, -1);
        return "Object" === yu && uu.constructor && (yu = uu.constructor.name), "Map" === yu || "Set" === yu ? Array.from(uu) : "Arguments" === yu || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(yu) ? Ju(uu, Ru) : void 0
      }
    }
    var pu;
    try {
      var Tu = yu(6464);
      pu = Tu.version
    } catch (Du) {
      pu = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function Wu(uu) {
      var Ru = uu.beat,
        yu = uu.fade,
        Eu = uu.beatFade,
        Ku = uu.bounce,
        Qu = uu.shake,
        mu = uu.flash,
        Ju = uu.spin,
        Xu = uu.spinPulse,
        Vu = uu.spinReverse,
        Bu = uu.pulse,
        xu = uu.fixedWidth,
        Su = uu.inverse,
        Tu = uu.border,
        Wu = uu.listItem,
        ju = uu.flip,
        Hu = uu.size,
        du = uu.rotation,
        bu = uu.pull,
        Cu = uu.swapOpacity,
        ku = uu.rotateBy,
        eu = uu.widthAuto,
        Au = function(uu, Ru) {
          for (var yu = ru(uu.split("-"), 2), Eu = yu[0], Ku = yu[1], Qu = ru(Ru.split("-"), 2), mu = Qu[0], Ju = Qu[1], Nu = Eu.split("."), Xu = mu.split("."), Vu = 0; Vu < Math.max(Nu.length, Xu.length); Vu++) {
            var Bu = Nu[Vu] || "0",
              xu = Xu[Vu] || "0",
              Su = parseInt(Bu, 10),
              pu = parseInt(xu, 10);
            if (Su !== pu) return Su > pu
          }
          for (var Tu = 0; Tu < Math.max(Nu.length, Xu.length); Tu++) {
            var Wu = Nu[Tu] || "0",
              ju = Xu[Tu] || "0";
            if (Wu !== ju && Wu.length !== ju.length) return Wu.length < ju.length
          }
          return !(Ku && !Ju)
        }(pu, "7.0.0"),
        Du = Nu(Nu(Nu(Nu(Nu(Nu({
          "fa-beat": Ru,
          "fa-fade": yu,
          "fa-beat-fade": Eu,
          "fa-bounce": Ku,
          "fa-shake": Qu,
          "fa-flash": mu,
          "fa-spin": Ju,
          "fa-spin-reverse": Vu,
          "fa-spin-pulse": Xu,
          "fa-pulse": Bu,
          "fa-fw": xu,
          "fa-inverse": Su,
          "fa-border": Tu,
          "fa-li": Wu,
          "fa-flip": !0 === ju,
          "fa-flip-horizontal": "horizontal" === ju || "both" === ju,
          "fa-flip-vertical": "vertical" === ju || "both" === ju
        }, "fa-".concat(Hu), "undefined" !== typeof Hu && null !== Hu), "fa-rotate-".concat(du), "undefined" !== typeof du && null !== du && 0 !== du), "fa-pull-".concat(bu), "undefined" !== typeof bu && null !== bu), "fa-swap-opacity", Cu), "fa-rotate-by", Au && ku), "fa-width-auto", Au && eu);
      return Object.keys(Du).map((function(uu) {
        return Du[uu] ? uu : null
      })).filter((function(uu) {
        return uu
      }))
    }

    function ju(uu) {
      return Ru = uu, (Ru -= 0) === Ru ? uu : (uu = uu.replace(/[\-_\s]+(.)?/g, (function(uu, Ru) {
        return Ru ? Ru.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + uu.substr(1);
      var Ru
    }
    var Hu = ["style"];
    var du = !1;
    try {
      du = !0
    } catch (Du) {}

    function bu(uu) {
      return uu && "object" === xu(uu) && uu.prefix && uu.iconName && uu.icon ? uu : Eu.parse.icon ? Eu.parse.icon(uu) : null === uu ? null : uu && "object" === xu(uu) && uu.prefix && uu.iconName ? uu : Array.isArray(uu) && 2 === uu.length ? {
        prefix: uu[0],
        iconName: uu[1]
      } : "string" === typeof uu ? {
        prefix: "fas",
        iconName: uu
      } : void 0
    }

    function Cu(uu, Ru) {
      return Array.isArray(Ru) && Ru.length > 0 || !Array.isArray(Ru) && Ru ? Nu({}, uu, Ru) : {}
    }
    var ku = {
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
      eu = mu.forwardRef((function(uu, Ru) {
        var yu = Vu(Vu({}, ku), uu),
          Ku = yu.icon,
          Qu = yu.mask,
          mu = yu.symbol,
          Ju = yu.className,
          Nu = yu.title,
          Xu = yu.titleId,
          ru = yu.maskId,
          xu = bu(Ku),
          Su = Cu("classes", [].concat(Bu(Wu(yu)), Bu((Ju || "").split(" ")))),
          pu = Cu("transform", "string" === typeof yu.transform ? Eu.parse.transform(yu.transform) : yu.transform),
          Tu = Cu("mask", bu(Qu)),
          ju = (0, Eu.icon)(xu, Vu(Vu(Vu(Vu({}, Su), pu), Tu), {}, {
            symbol: mu,
            title: Nu,
            titleId: Xu,
            maskId: ru
          }));
        if (!ju) return function() {
          var uu;
          !du && console && "function" === typeof console.error && (uu = console).error.apply(uu, arguments)
        }("Could not find icon", xu), null;
        var Hu = ju.abstract,
          eu = {
            ref: Ru
          };
        return Object.keys(yu).forEach((function(uu) {
          ku.hasOwnProperty(uu) || (eu[uu] = yu[uu])
        })), Au(Hu[0], eu)
      }));
    eu.displayName = "FontAwesomeIcon", eu.propTypes = {
      beat: Qu().bool,
      border: Qu().bool,
      beatFade: Qu().bool,
      bounce: Qu().bool,
      className: Qu().string,
      fade: Qu().bool,
      flash: Qu().bool,
      mask: Qu().oneOfType([Qu().object, Qu().array, Qu().string]),
      maskId: Qu().string,
      fixedWidth: Qu().bool,
      inverse: Qu().bool,
      flip: Qu().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: Qu().oneOfType([Qu().object, Qu().array, Qu().string]),
      listItem: Qu().bool,
      pull: Qu().oneOf(["right", "left"]),
      pulse: Qu().bool,
      rotation: Qu().oneOf([0, 90, 180, 270]),
      rotateBy: Qu().bool,
      shake: Qu().bool,
      size: Qu().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: Qu().bool,
      spinPulse: Qu().bool,
      spinReverse: Qu().bool,
      symbol: Qu().oneOfType([Qu().bool, Qu().string]),
      title: Qu().string,
      titleId: Qu().string,
      transform: Qu().oneOfType([Qu().string, Qu().object]),
      swapOpacity: Qu().bool,
      widthAuto: Qu().bool
    };
    var Au = function uu(Ru, yu) {
      var Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof yu) return yu;
      var Ku = (yu.children || []).map((function(yu) {
          return uu(Ru, yu)
        })),
        Qu = Object.keys(yu.attributes || {}).reduce((function(uu, Ru) {
          var Eu = yu.attributes[Ru];
          switch (Ru) {
            case "class":
              uu.attrs.className = Eu, delete yu.attributes.class;
              break;
            case "style":
              uu.attrs.style = Eu.split(";").map((function(uu) {
                return uu.trim()
              })).filter((function(uu) {
                return uu
              })).reduce((function(uu, Ru) {
                var yu, Eu = Ru.indexOf(":"),
                  Ku = ju(Ru.slice(0, Eu)),
                  Qu = Ru.slice(Eu + 1).trim();
                return Ku.startsWith("webkit") ? uu[(yu = Ku, yu.charAt(0).toUpperCase() + yu.slice(1))] = Qu : uu[Ku] = Qu, uu
              }), {});
              break;
            default:
              0 === Ru.indexOf("aria-") || 0 === Ru.indexOf("data-") ? uu.attrs[Ru.toLowerCase()] = Eu : uu.attrs[ju(Ru)] = Eu
          }
          return uu
        }), {
          attrs: {}
        }),
        mu = Eu.style,
        Ju = void 0 === mu ? {} : mu,
        Nu = function(uu, Ru) {
          if (null == uu) return {};
          var yu, Eu, Ku = function(uu, Ru) {
            if (null == uu) return {};
            var yu = {};
            for (var Eu in uu)
              if ({}.hasOwnProperty.call(uu, Eu)) {
                if (-1 !== Ru.indexOf(Eu)) continue;
                yu[Eu] = uu[Eu]
              } return yu
          }(uu, Ru);
          if (Object.getOwnPropertySymbols) {
            var Qu = Object.getOwnPropertySymbols(uu);
            for (Eu = 0; Eu < Qu.length; Eu++) yu = Qu[Eu], -1 === Ru.indexOf(yu) && {}.propertyIsEnumerable.call(uu, yu) && (Ku[yu] = uu[yu])
          }
          return Ku
        }(Eu, Hu);
      return Qu.attrs.style = Vu(Vu({}, Qu.attrs.style), Ju), Ru.apply(void 0, [yu.tag, Vu(Vu({}, Qu.attrs), Nu)].concat(Bu(Ku)))
    }.bind(null, mu.createElement)
  },
  4753: (uu, Ru, yu) => {
    var Eu = yu(4758);

    function Ku() {}

    function Qu() {}
    Qu.resetWarningCache = Ku, uu.exports = function() {
      function uu(uu, Ru, yu, Ku, Qu, mu) {
        if (mu !== Eu) {
          var Ju = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Ju.name = "Invariant Violation", Ju
        }
      }

      function Ru() {
        return uu
      }
      uu.isRequired = uu;
      var yu = {
        array: uu,
        bigint: uu,
        bool: uu,
        func: uu,
        number: uu,
        object: uu,
        string: uu,
        symbol: uu,
        any: uu,
        arrayOf: Ru,
        element: uu,
        elementType: uu,
        instanceOf: Ru,
        node: uu,
        objectOf: Ru,
        oneOf: Ru,
        oneOfType: Ru,
        shape: Ru,
        exact: Ru,
        checkPropTypes: Qu,
        resetWarningCache: Ku
      };
      return yu.PropTypes = yu, yu
    }
  },
  4745: (uu, Ru, yu) => {
    uu.exports = yu(4753)()
  },
  4758: uu => {
    uu.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6453: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      (null == Ru || Ru > uu.length) && (Ru = uu.length);
      for (var yu = 0, Eu = Array(Ru); yu < Ru; yu++) Eu[yu] = uu[yu];
      return Eu
    }

    function Ku(uu, Ru) {
      for (var yu = 0; yu < Ru.length; yu++) {
        var Eu = Ru[yu];
        Eu.enumerable = Eu.enumerable || !1, Eu.configurable = !0, "value" in Eu && (Eu.writable = !0), Object.defineProperty(uu, ru(Eu.key), Eu)
      }
    }

    function Qu(uu, Ru) {
      var yu = "undefined" != typeof Symbol && uu[Symbol.iterator] || uu["@@iterator"];
      if (!yu) {
        if (Array.isArray(uu) || (yu = xu(uu)) || Ru && uu && "number" == typeof uu.length) {
          yu && (uu = yu);
          var Eu = 0,
            Ku = function() {};
          return {
            s: Ku,
            n: function() {
              return Eu >= uu.length ? {
                done: !0
              } : {
                done: !1,
                value: uu[Eu++]
              }
            },
            e: function(uu) {
              throw uu
            },
            f: Ku
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Qu, mu = !0,
        Ju = !1;
      return {
        s: function() {
          yu = yu.call(uu)
        },
        n: function() {
          var uu = yu.next();
          return mu = uu.done, uu
        },
        e: function(uu) {
          Ju = !0, Qu = uu
        },
        f: function() {
          try {
            mu || null == yu.return || yu.return()
          } finally {
            if (Ju) throw Qu
          }
        }
      }
    }

    function mu(uu, Ru, yu) {
      return (Ru = ru(Ru)) in uu ? Object.defineProperty(uu, Ru, {
        value: yu,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : uu[Ru] = yu, uu
    }

    function Ju(uu, Ru) {
      var yu = Object.keys(uu);
      if (Object.getOwnPropertySymbols) {
        var Eu = Object.getOwnPropertySymbols(uu);
        Ru && (Eu = Eu.filter((function(Ru) {
          return Object.getOwnPropertyDescriptor(uu, Ru).enumerable
        }))), yu.push.apply(yu, Eu)
      }
      return yu
    }

    function Nu(uu) {
      for (var Ru = 1; Ru < arguments.length; Ru++) {
        var yu = null != arguments[Ru] ? arguments[Ru] : {};
        Ru % 2 ? Ju(Object(yu), !0).forEach((function(Ru) {
          mu(uu, Ru, yu[Ru])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(uu, Object.getOwnPropertyDescriptors(yu)) : Ju(Object(yu)).forEach((function(Ru) {
          Object.defineProperty(uu, Ru, Object.getOwnPropertyDescriptor(yu, Ru))
        }))
      }
      return uu
    }

    function Xu(uu, Ru) {
      return function(uu) {
        if (Array.isArray(uu)) return uu
      }(uu) || function(uu, Ru) {
        var yu = null == uu ? null : "undefined" != typeof Symbol && uu[Symbol.iterator] || uu["@@iterator"];
        if (null != yu) {
          var Eu, Ku, Qu, mu, Ju = [],
            Nu = !0,
            Xu = !1;
          try {
            if (Qu = (yu = yu.call(uu)).next, 0 === Ru) {
              if (Object(yu) !== yu) return;
              Nu = !1
            } else
              for (; !(Nu = (Eu = Qu.call(yu)).done) && (Ju.push(Eu.value), Ju.length !== Ru); Nu = !0);
          } catch (uu) {
            Xu = !0, Ku = uu
          } finally {
            try {
              if (!Nu && null != yu.return && (mu = yu.return(), Object(mu) !== mu)) return
            } finally {
              if (Xu) throw Ku
            }
          }
          return Ju
        }
      }(uu, Ru) || xu(uu, Ru) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Vu(uu) {
      return function(uu) {
        if (Array.isArray(uu)) return Eu(uu)
      }(uu) || function(uu) {
        if ("undefined" != typeof Symbol && null != uu[Symbol.iterator] || null != uu["@@iterator"]) return Array.from(uu)
      }(uu) || xu(uu) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ru(uu) {
      var Ru = function(uu, Ru) {
        if ("object" != typeof uu || !uu) return uu;
        var yu = uu[Symbol.toPrimitive];
        if (void 0 !== yu) {
          var Eu = yu.call(uu, Ru || "default");
          if ("object" != typeof Eu) return Eu;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Ru ? String : Number)(uu)
      }(uu, "string");
      return "symbol" == typeof Ru ? Ru : Ru + ""
    }

    function Bu(uu) {
      return Bu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(uu) {
        return typeof uu
      } : function(uu) {
        return uu && "function" == typeof Symbol && uu.constructor === Symbol && uu !== Symbol.prototype ? "symbol" : typeof uu
      }, Bu(uu)
    }

    function xu(uu, Ru) {
      if (uu) {
        if ("string" == typeof uu) return Eu(uu, Ru);
        var yu = {}.toString.call(uu).slice(8, -1);
        return "Object" === yu && uu.constructor && (yu = uu.constructor.name), "Map" === yu || "Set" === yu ? Array.from(uu) : "Arguments" === yu || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(yu) ? Eu(uu, Ru) : void 0
      }
    }
    yu.r(Ru), yu.d(Ru, {
      api: () => Oy,
      config: () => yK,
      counter: () => rK,
      dom: () => KK,
      findIconDefinition: () => mK,
      icon: () => NK,
      layer: () => XK,
      library: () => EK,
      noAuto: () => RK,
      parse: () => QK,
      text: () => VK,
      toHtml: () => JK
    });
    var Su = function() {},
      pu = {},
      Tu = {},
      Wu = null,
      ju = {
        mark: Su,
        measure: Su
      };
    try {
      "undefined" !== typeof window && (pu = window), "undefined" !== typeof document && (Tu = document), "undefined" !== typeof MutationObserver && (Wu = MutationObserver), "undefined" !== typeof performance && (ju = performance)
    } catch (hu) {}
    var Hu, du, bu = (pu.navigator || {}).userAgent,
      Cu = void 0 === bu ? "" : bu,
      ku = pu,
      eu = Tu,
      Au = Wu,
      Du = ju,
      Mu = (ku.document, !!eu.documentElement && !!eu.head && "function" === typeof eu.addEventListener && "function" === typeof eu.createElement),
      Iu = ~Cu.indexOf("MSIE") || ~Cu.indexOf("Trident/"),
      Gu = {
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
      Uu = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      nu = "classic",
      su = "duotone",
      tu = "sharp",
      lu = "sharp-duotone",
      gu = "chisel",
      cu = "etch",
      Lu = "graphite",
      zu = "jelly",
      Fu = "jelly-duo",
      wu = "jelly-fill",
      Zu = "notdog",
      hu = "notdog-duo",
      Pu = "slab",
      iu = "slab-press",
      Yu = "thumbprint",
      ou = "utility",
      qu = "utility-duo",
      Ou = "utility-fill",
      vu = "whiteboard",
      au = [nu, su, tu, lu, gu, cu, Lu, zu, Fu, wu, Zu, hu, Pu, iu, Yu, ou, qu, Ou, vu],
      fu = (mu(mu(mu(mu(mu(mu(mu(mu(mu(mu(Hu = {}, nu, "Classic"), su, "Duotone"), tu, "Sharp"), lu, "Sharp Duotone"), gu, "Chisel"), cu, "Etch"), Lu, "Graphite"), zu, "Jelly"), Fu, "Jelly Duo"), wu, "Jelly Fill"), mu(mu(mu(mu(mu(mu(mu(mu(mu(Hu, Zu, "Notdog"), hu, "Notdog Duo"), Pu, "Slab"), iu, "Slab Press"), Yu, "Thumbprint"), ou, "Utility"), qu, "Utility Duo"), Ou, "Utility Fill"), vu, "Whiteboard"), new Map([
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
      uR = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      RR = {
        fak: "kit",
        "fa-kit": "kit"
      },
      yR = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      ER = (mu(mu({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      KR = {
        "kit-duotone": "fakd"
      },
      QR = "duotone-group",
      mR = "swap-opacity",
      JR = "primary",
      NR = "secondary",
      XR = (mu(mu(mu(mu(mu(mu(mu(mu(mu(mu(du = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), mu(mu(mu(mu(mu(mu(mu(mu(mu(du, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), mu(mu({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      VR = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      rR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      BR = rR.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      xR = [].concat(Vu(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", QR, mR, JR, NR]).concat(rR.map((function(uu) {
        return "".concat(uu, "x")
      }))).concat(BR.map((function(uu) {
        return "w-".concat(uu)
      }))),
      SR = "___FONT_AWESOME___",
      pR = "svg-inline--fa",
      TR = "data-fa-i2svg",
      WR = "data-fa-pseudo-element",
      jR = "data-prefix",
      HR = "data-icon",
      dR = "fontawesome-i2svg",
      bR = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      CR = ["::before", "::after", ":before", ":after"],
      kR = function() {
        try {
          return !0
        } catch (uu) {
          return !1
        }
      }();

    function eR(uu) {
      return new Proxy(uu, {
        get: function(uu, Ru) {
          return Ru in uu ? uu[Ru] : uu[nu]
        }
      })
    }
    var AR = Nu({}, Gu);
    AR[nu] = Nu(Nu(Nu(Nu({}, {
      "fa-duotone": "duotone"
    }), Gu[nu]), RR), yR);
    var DR = eR(AR),
      MR = Nu({}, {
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
    MR[nu] = Nu(Nu(Nu(Nu({}, {
      duotone: "fad"
    }), MR[nu]), ER), KR);
    var IR = eR(MR),
      GR = Nu({}, XR);
    GR[nu] = Nu(Nu({}, GR[nu]), {
      fak: "fa-kit"
    });
    var UR = eR(GR),
      nR = Nu({}, {
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
    nR[nu] = Nu(Nu({}, nR[nu]), {
      "fa-kit": "fak"
    });
    eR(nR);
    var sR = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      tR = "fa-layers-text",
      lR = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      gR = (eR(Nu({}, {
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
      cR = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      LR = [].concat(Vu(["kit"]), Vu(xR)),
      zR = ku.FontAwesomeConfig || {};
    if (eu && "function" === typeof eu.querySelector) {
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
        var Ru = Xu(uu, 2),
          yu = Ru[0],
          Eu = Ru[1],
          Ku = function(uu) {
            return "" === uu || "false" !== uu && ("true" === uu || uu)
          }(function(uu) {
            var Ru = eu.querySelector("script[" + uu + "]");
            if (Ru) return Ru.getAttribute(uu)
          }(yu));
        void 0 !== Ku && null !== Ku && (zR[Eu] = Ku)
      }))
    }
    var FR = {
      styleDefault: "solid",
      familyDefault: nu,
      cssPrefix: "fa",
      replacementClass: pR,
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
    zR.familyPrefix && (zR.cssPrefix = zR.familyPrefix);
    var wR = Nu(Nu({}, FR), zR);
    wR.autoReplaceSvg || (wR.observeMutations = !1);
    var ZR = {};
    Object.keys(FR).forEach((function(uu) {
      Object.defineProperty(ZR, uu, {
        enumerable: !0,
        set: function(Ru) {
          wR[uu] = Ru, hR.forEach((function(uu) {
            return uu(ZR)
          }))
        },
        get: function() {
          return wR[uu]
        }
      })
    })), Object.defineProperty(ZR, "familyPrefix", {
      enumerable: !0,
      set: function(uu) {
        wR.cssPrefix = uu, hR.forEach((function(uu) {
          return uu(ZR)
        }))
      },
      get: function() {
        return wR.cssPrefix
      }
    }), ku.FontAwesomeConfig = ZR;
    var hR = [];
    var PR = 16,
      iR = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function YR() {
      for (var uu = 12, Ru = ""; uu-- > 0;) Ru += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return Ru
    }

    function oR(uu) {
      for (var Ru = [], yu = (uu || []).length >>> 0; yu--;) Ru[yu] = uu[yu];
      return Ru
    }

    function qR(uu) {
      return uu.classList ? oR(uu.classList) : (uu.getAttribute("class") || "").split(" ").filter((function(uu) {
        return uu
      }))
    }

    function OR(uu) {
      return "".concat(uu).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function vR(uu) {
      return Object.keys(uu || {}).reduce((function(Ru, yu) {
        return Ru + "".concat(yu, ": ").concat(uu[yu].trim(), ";")
      }), "")
    }

    function aR(uu) {
      return uu.size !== iR.size || uu.x !== iR.x || uu.y !== iR.y || uu.rotate !== iR.rotate || uu.flipX || uu.flipY
    }

    function fR() {
      var uu = "fa",
        Ru = pR,
        yu = ZR.cssPrefix,
        Eu = ZR.replacementClass,
        Ku = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (yu !== uu || Eu !== Ru) {
        var Qu = new RegExp("\\.".concat(uu, "\\-"), "g"),
          mu = new RegExp("\\--".concat(uu, "\\-"), "g"),
          Ju = new RegExp("\\.".concat(Ru), "g");
        Ku = Ku.replace(Qu, ".".concat(yu, "-")).replace(mu, "--".concat(yu, "-")).replace(Ju, ".".concat(Eu))
      }
      return Ku
    }
    var uy = !1;

    function Ry() {
      ZR.autoAddCss && !uy && (! function(uu) {
        if (uu && Mu) {
          var Ru = eu.createElement("style");
          Ru.setAttribute("type", "text/css"), Ru.innerHTML = uu;
          for (var yu = eu.head.childNodes, Eu = null, Ku = yu.length - 1; Ku > -1; Ku--) {
            var Qu = yu[Ku],
              mu = (Qu.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(mu) > -1 && (Eu = Qu)
          }
          eu.head.insertBefore(Ru, Eu)
        }
      }(fR()), uy = !0)
    }
    var yy = {
        mixout: function() {
          return {
            dom: {
              css: fR,
              insertCss: Ry
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              Ry()
            },
            beforeI2svg: function() {
              Ry()
            }
          }
        }
      },
      Ey = ku || {};
    Ey[SR] || (Ey[SR] = {}), Ey[SR].styles || (Ey[SR].styles = {}), Ey[SR].hooks || (Ey[SR].hooks = {}), Ey[SR].shims || (Ey[SR].shims = []);
    var Ky = Ey[SR],
      Qy = [],
      my = function() {
        eu.removeEventListener("DOMContentLoaded", my), Jy = 1, Qy.map((function(uu) {
          return uu()
        }))
      },
      Jy = !1;

    function Ny(uu) {
      var Ru = uu.tag,
        yu = uu.attributes,
        Eu = void 0 === yu ? {} : yu,
        Ku = uu.children,
        Qu = void 0 === Ku ? [] : Ku;
      return "string" === typeof uu ? OR(uu) : "<".concat(Ru, " ").concat(function(uu) {
        return Object.keys(uu || {}).reduce((function(Ru, yu) {
          return Ru + "".concat(yu, '="').concat(OR(uu[yu]), '" ')
        }), "").trim()
      }(Eu), ">").concat(Qu.map(Ny).join(""), "</").concat(Ru, ">")
    }

    function Xy(uu, Ru, yu) {
      if (uu && uu[Ru] && uu[Ru][yu]) return {
        prefix: Ru,
        iconName: yu,
        icon: uu[Ru][yu]
      }
    }
    Mu && ((Jy = (eu.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(eu.readyState)) || eu.addEventListener("DOMContentLoaded", my));
    var Vy = function(uu, Ru, yu, Eu) {
      var Ku, Qu, mu, Ju = Object.keys(uu),
        Nu = Ju.length,
        Xu = void 0 !== Eu ? function(uu, Ru) {
          return function(yu, Eu, Ku, Qu) {
            return uu.call(Ru, yu, Eu, Ku, Qu)
          }
        }(Ru, Eu) : Ru;
      for (void 0 === yu ? (Ku = 1, mu = uu[Ju[0]]) : (Ku = 0, mu = yu); Ku < Nu; Ku++) mu = Xu(mu, uu[Qu = Ju[Ku]], Qu, uu);
      return mu
    };

    function ry(uu) {
      return 1 !== Vu(uu).length ? null : uu.codePointAt(0).toString(16)
    }

    function By(uu) {
      return Object.keys(uu).reduce((function(Ru, yu) {
        var Eu = uu[yu];
        return !!Eu.icon ? Ru[Eu.iconName] = Eu.icon : Ru[yu] = Eu, Ru
      }), {})
    }

    function xy(uu, Ru) {
      var yu = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        Eu = void 0 !== yu && yu,
        Ku = By(Ru);
      "function" !== typeof Ky.hooks.addPack || Eu ? Ky.styles[uu] = Nu(Nu({}, Ky.styles[uu] || {}), Ku) : Ky.hooks.addPack(uu, By(Ru)), "fas" === uu && xy("fa", Ru)
    }
    var Sy = Ky.styles,
      py = Ky.shims,
      Ty = Object.keys(UR),
      Wy = Ty.reduce((function(uu, Ru) {
        return uu[Ru] = Object.keys(UR[Ru]), uu
      }), {}),
      jy = null,
      Hy = {},
      dy = {},
      by = {},
      Cy = {},
      ky = {};

    function ey(uu, Ru) {
      var yu, Eu = Ru.split("-"),
        Ku = Eu[0],
        Qu = Eu.slice(1).join("-");
      return Ku !== uu || "" === Qu || (yu = Qu, ~LR.indexOf(yu)) ? null : Qu
    }
    var Ay, Dy = function() {
      var uu = function(uu) {
        return Vy(Sy, (function(Ru, yu, Eu) {
          return Ru[Eu] = Vy(yu, uu, {}), Ru
        }), {})
      };
      Hy = uu((function(uu, Ru, yu) {
        (Ru[3] && (uu[Ru[3]] = yu), Ru[2]) && Ru[2].filter((function(uu) {
          return "number" === typeof uu
        })).forEach((function(Ru) {
          uu[Ru.toString(16)] = yu
        }));
        return uu
      })), dy = uu((function(uu, Ru, yu) {
        (uu[yu] = yu, Ru[2]) && Ru[2].filter((function(uu) {
          return "string" === typeof uu
        })).forEach((function(Ru) {
          uu[Ru] = yu
        }));
        return uu
      })), ky = uu((function(uu, Ru, yu) {
        var Eu = Ru[2];
        return uu[yu] = yu, Eu.forEach((function(Ru) {
          uu[Ru] = yu
        })), uu
      }));
      var Ru = "far" in Sy || ZR.autoFetchSvg,
        yu = Vy(py, (function(uu, yu) {
          var Eu = yu[0],
            Ku = yu[1],
            Qu = yu[2];
          return "far" !== Ku || Ru || (Ku = "fas"), "string" === typeof Eu && (uu.names[Eu] = {
            prefix: Ku,
            iconName: Qu
          }), "number" === typeof Eu && (uu.unicodes[Eu.toString(16)] = {
            prefix: Ku,
            iconName: Qu
          }), uu
        }), {
          names: {},
          unicodes: {}
        });
      by = yu.names, Cy = yu.unicodes, jy = ny(ZR.styleDefault, {
        family: ZR.familyDefault
      })
    };

    function My(uu, Ru) {
      return (Hy[uu] || {})[Ru]
    }

    function Iy(uu, Ru) {
      return (ky[uu] || {})[Ru]
    }

    function Gy(uu) {
      return by[uu] || {
        prefix: null,
        iconName: null
      }
    }

    function Uy() {
      return jy
    }
    Ay = function(uu) {
      jy = ny(uu.styleDefault, {
        family: ZR.familyDefault
      })
    }, hR.push(Ay), Dy();

    function ny(uu) {
      var Ru = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        yu = void 0 === Ru ? nu : Ru,
        Eu = DR[yu][uu];
      if (yu === su && !uu) return "fad";
      var Ku = IR[yu][uu] || IR[yu][Eu],
        Qu = uu in Ky.styles ? uu : null;
      return Ku || Qu || null
    }

    function sy(uu) {
      return uu.sort().filter((function(uu, Ru, yu) {
        return yu.indexOf(uu) === Ru
      }))
    }
    var ty = VR.concat(uR);

    function ly(uu) {
      var Ru = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        yu = void 0 !== Ru && Ru,
        Eu = null,
        Ku = sy(uu.filter((function(uu) {
          return ty.includes(uu)
        }))),
        Qu = sy(uu.filter((function(uu) {
          return !ty.includes(uu)
        }))),
        mu = Xu(Ku.filter((function(uu) {
          return Eu = uu, !Uu.includes(uu)
        })), 1)[0],
        Ju = void 0 === mu ? null : mu,
        Vu = function(uu) {
          var Ru = nu,
            yu = Ty.reduce((function(uu, Ru) {
              return uu[Ru] = "".concat(ZR.cssPrefix, "-").concat(Ru), uu
            }), {});
          return au.forEach((function(Eu) {
            (uu.includes(yu[Eu]) || uu.some((function(uu) {
              return Wy[Eu].includes(uu)
            }))) && (Ru = Eu)
          })), Ru
        }(Ku),
        ru = Nu(Nu({}, function(uu) {
          var Ru = [],
            yu = null;
          return uu.forEach((function(uu) {
            var Eu = ey(ZR.cssPrefix, uu);
            Eu ? yu = Eu : uu && Ru.push(uu)
          })), {
            iconName: yu,
            rest: Ru
          }
        }(Qu)), {}, {
          prefix: ny(Ju, {
            family: Vu
          })
        });
      return Nu(Nu(Nu({}, ru), function(uu) {
        var Ru = uu.values,
          yu = uu.family,
          Eu = uu.canonical,
          Ku = uu.givenPrefix,
          Qu = void 0 === Ku ? "" : Ku,
          mu = uu.styles,
          Ju = void 0 === mu ? {} : mu,
          Nu = uu.config,
          Xu = void 0 === Nu ? {} : Nu,
          Vu = yu === su,
          ru = Ru.includes("fa-duotone") || Ru.includes("fad"),
          Bu = "duotone" === Xu.familyDefault,
          xu = "fad" === Eu.prefix || "fa-duotone" === Eu.prefix;
        !Vu && (ru || Bu || xu) && (Eu.prefix = "fad");
        (Ru.includes("fa-brands") || Ru.includes("fab")) && (Eu.prefix = "fab");
        if (!Eu.prefix && gy.includes(yu)) {
          if (Object.keys(Ju).find((function(uu) {
              return cy.includes(uu)
            })) || Xu.autoFetchSvg) {
            var Su = fu.get(yu).defaultShortPrefixId;
            Eu.prefix = Su, Eu.iconName = Iy(Eu.prefix, Eu.iconName) || Eu.iconName
          }
        }
        "fa" !== Eu.prefix && "fa" !== Qu || (Eu.prefix = Uy() || "fas");
        return Eu
      }({
        values: uu,
        family: Vu,
        styles: Sy,
        config: ZR,
        canonical: ru,
        givenPrefix: Eu
      })), function(uu, Ru, yu) {
        var Eu = yu.prefix,
          Ku = yu.iconName;
        if (uu || !Eu || !Ku) return {
          prefix: Eu,
          iconName: Ku
        };
        var Qu = "fa" === Ru ? Gy(Ku) : {},
          mu = Iy(Eu, Ku);
        Ku = Qu.iconName || mu || Ku, "far" !== (Eu = Qu.prefix || Eu) || Sy.far || !Sy.fas || ZR.autoFetchSvg || (Eu = "fas");
        return {
          prefix: Eu,
          iconName: Ku
        }
      }(yu, Eu, ru))
    }
    var gy = au.filter((function(uu) {
        return uu !== nu || uu !== su
      })),
      cy = Object.keys(XR).filter((function(uu) {
        return uu !== nu
      })).map((function(uu) {
        return Object.keys(XR[uu])
      })).flat();
    var Ly = function() {
        return function(uu, Ru, yu) {
          return Ru && Ku(uu.prototype, Ru), yu && Ku(uu, yu), Object.defineProperty(uu, "prototype", {
            writable: !1
          }), uu
        }((function uu() {
          ! function(uu, Ru) {
            if (!(uu instanceof Ru)) throw new TypeError("Cannot call a class as a function")
          }(this, uu), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var uu = this, Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
            var Ku = yu.reduce(this._pullDefinitions, {});
            Object.keys(Ku).forEach((function(Ru) {
              uu.definitions[Ru] = Nu(Nu({}, uu.definitions[Ru] || {}), Ku[Ru]), xy(Ru, Ku[Ru]);
              var yu = UR[nu][Ru];
              yu && xy(yu, Ku[Ru]), Dy()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(uu, Ru) {
            var yu = Ru.prefix && Ru.iconName && Ru.icon ? {
              0: Ru
            } : Ru;
            return Object.keys(yu).map((function(Ru) {
              var Eu = yu[Ru],
                Ku = Eu.prefix,
                Qu = Eu.iconName,
                mu = Eu.icon,
                Ju = mu[2];
              uu[Ku] || (uu[Ku] = {}), Ju.length > 0 && Ju.forEach((function(Ru) {
                "string" === typeof Ru && (uu[Ku][Ru] = mu)
              })), uu[Ku][Qu] = mu
            })), uu
          }
        }])
      }(),
      zy = [],
      Fy = {},
      wy = {},
      Zy = Object.keys(wy);

    function hy(uu, Ru) {
      for (var yu = arguments.length, Eu = new Array(yu > 2 ? yu - 2 : 0), Ku = 2; Ku < yu; Ku++) Eu[Ku - 2] = arguments[Ku];
      return (Fy[uu] || []).forEach((function(uu) {
        Ru = uu.apply(null, [Ru].concat(Eu))
      })), Ru
    }

    function Py(uu) {
      for (var Ru = arguments.length, yu = new Array(Ru > 1 ? Ru - 1 : 0), Eu = 1; Eu < Ru; Eu++) yu[Eu - 1] = arguments[Eu];
      (Fy[uu] || []).forEach((function(uu) {
        uu.apply(null, yu)
      }))
    }

    function iy() {
      var uu = arguments[0],
        Ru = Array.prototype.slice.call(arguments, 1);
      return wy[uu] ? wy[uu].apply(null, Ru) : void 0
    }

    function Yy(uu) {
      "fa" === uu.prefix && (uu.prefix = "fas");
      var Ru = uu.iconName,
        yu = uu.prefix || Uy();
      if (Ru) return Ru = Iy(yu, Ru) || Ru, Xy(oy.definitions, yu, Ru) || Xy(Ky.styles, yu, Ru)
    }
    var oy = new Ly,
      qy = {
        i2svg: function() {
          var uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Mu ? (Py("beforeI2svg", uu), iy("pseudoElements2svg", uu), iy("i2svg", uu)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var uu, Ru = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            yu = Ru.autoReplaceSvgRoot;
          !1 === ZR.autoReplaceSvg && (ZR.autoReplaceSvg = !0), ZR.observeMutations = !0, uu = function() {
            vy({
              autoReplaceSvgRoot: yu
            }), Py("watch", Ru)
          }, Mu && (Jy ? setTimeout(uu, 0) : Qy.push(uu))
        }
      },
      Oy = {
        noAuto: function() {
          ZR.autoReplaceSvg = !1, ZR.observeMutations = !1, Py("noAuto")
        },
        config: ZR,
        dom: qy,
        parse: {
          icon: function(uu) {
            if (null === uu) return null;
            if ("object" === Bu(uu) && uu.prefix && uu.iconName) return {
              prefix: uu.prefix,
              iconName: Iy(uu.prefix, uu.iconName) || uu.iconName
            };
            if (Array.isArray(uu) && 2 === uu.length) {
              var Ru = 0 === uu[1].indexOf("fa-") ? uu[1].slice(3) : uu[1],
                yu = ny(uu[0]);
              return {
                prefix: yu,
                iconName: Iy(yu, Ru) || Ru
              }
            }
            if ("string" === typeof uu && (uu.indexOf("".concat(ZR.cssPrefix, "-")) > -1 || uu.match(sR))) {
              var Eu = ly(uu.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: Eu.prefix || Uy(),
                iconName: Iy(Eu.prefix, Eu.iconName) || Eu.iconName
              }
            }
            if ("string" === typeof uu) {
              var Ku = Uy();
              return {
                prefix: Ku,
                iconName: Iy(Ku, uu) || uu
              }
            }
          }
        },
        library: oy,
        findIconDefinition: Yy,
        toHtml: Ny
      },
      vy = function() {
        var uu = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          Ru = void 0 === uu ? eu : uu;
        (Object.keys(Ky.styles).length > 0 || ZR.autoFetchSvg) && Mu && ZR.autoReplaceSvg && Oy.dom.i2svg({
          node: Ru
        })
      };

    function ay(uu, Ru) {
      return Object.defineProperty(uu, "abstract", {
        get: Ru
      }), Object.defineProperty(uu, "html", {
        get: function() {
          return uu.abstract.map((function(uu) {
            return Ny(uu)
          }))
        }
      }), Object.defineProperty(uu, "node", {
        get: function() {
          if (Mu) {
            var Ru = eu.createElement("div");
            return Ru.innerHTML = uu.html, Ru.children
          }
        }
      }), uu
    }

    function fy(uu) {
      var Ru = uu.icons,
        yu = Ru.main,
        Eu = Ru.mask,
        Ku = uu.prefix,
        Qu = uu.iconName,
        mu = uu.transform,
        Ju = uu.symbol,
        Xu = uu.maskId,
        Vu = uu.extra,
        ru = uu.watchable,
        Bu = void 0 !== ru && ru,
        xu = Eu.found ? Eu : yu,
        Su = xu.width,
        pu = xu.height,
        Tu = [ZR.replacementClass, Qu ? "".concat(ZR.cssPrefix, "-").concat(Qu) : ""].filter((function(uu) {
          return -1 === Vu.classes.indexOf(uu)
        })).filter((function(uu) {
          return "" !== uu || !!uu
        })).concat(Vu.classes).join(" "),
        Wu = {
          children: [],
          attributes: Nu(Nu({}, Vu.attributes), {}, {
            "data-prefix": Ku,
            "data-icon": Qu,
            class: Tu,
            role: Vu.attributes.role || "img",
            viewBox: "0 0 ".concat(Su, " ").concat(pu)
          })
        };
      (function(uu) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(Ru) {
          return Ru in uu
        }))
      })(Vu.attributes) || Vu.attributes["aria-hidden"] || (Wu.attributes["aria-hidden"] = "true"), Bu && (Wu.attributes[TR] = "");
      var ju = Nu(Nu({}, Wu), {}, {
          prefix: Ku,
          iconName: Qu,
          main: yu,
          mask: Eu,
          maskId: Xu,
          transform: mu,
          symbol: Ju,
          styles: Nu({}, Vu.styles)
        }),
        Hu = Eu.found && yu.found ? iy("generateAbstractMask", ju) || {
          children: [],
          attributes: {}
        } : iy("generateAbstractIcon", ju) || {
          children: [],
          attributes: {}
        },
        du = Hu.children,
        bu = Hu.attributes;
      return ju.children = du, ju.attributes = bu, Ju ? function(uu) {
        var Ru = uu.prefix,
          yu = uu.iconName,
          Eu = uu.children,
          Ku = uu.attributes,
          Qu = uu.symbol,
          mu = !0 === Qu ? "".concat(Ru, "-").concat(ZR.cssPrefix, "-").concat(yu) : Qu;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: Nu(Nu({}, Ku), {}, {
              id: mu
            }),
            children: Eu
          }]
        }]
      }(ju) : function(uu) {
        var Ru = uu.children,
          yu = uu.main,
          Eu = uu.mask,
          Ku = uu.attributes,
          Qu = uu.styles,
          mu = uu.transform;
        if (aR(mu) && yu.found && !Eu.found) {
          var Ju = {
            x: yu.width / yu.height / 2,
            y: .5
          };
          Ku.style = vR(Nu(Nu({}, Qu), {}, {
            "transform-origin": "".concat(Ju.x + mu.x / 16, "em ").concat(Ju.y + mu.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: Ku,
          children: Ru
        }]
      }(ju)
    }

    function uE(uu) {
      var Ru = uu.content,
        yu = uu.width,
        Eu = uu.height,
        Ku = uu.transform,
        Qu = uu.extra,
        mu = uu.watchable,
        Ju = void 0 !== mu && mu,
        Xu = Nu(Nu({}, Qu.attributes), {}, {
          class: Qu.classes.join(" ")
        });
      Ju && (Xu[TR] = "");
      var Vu = Nu({}, Qu.styles);
      aR(Ku) && (Vu.transform = function(uu) {
        var Ru = uu.transform,
          yu = uu.width,
          Eu = void 0 === yu ? 16 : yu,
          Ku = uu.height,
          Qu = void 0 === Ku ? 16 : Ku,
          mu = uu.startCentered,
          Ju = void 0 !== mu && mu,
          Nu = "";
        return Nu += Ju && Iu ? "translate(".concat(Ru.x / PR - Eu / 2, "em, ").concat(Ru.y / PR - Qu / 2, "em) ") : Ju ? "translate(calc(-50% + ".concat(Ru.x / PR, "em), calc(-50% + ").concat(Ru.y / PR, "em)) ") : "translate(".concat(Ru.x / PR, "em, ").concat(Ru.y / PR, "em) "), Nu += "scale(".concat(Ru.size / PR * (Ru.flipX ? -1 : 1), ", ").concat(Ru.size / PR * (Ru.flipY ? -1 : 1), ") "), Nu + "rotate(".concat(Ru.rotate, "deg) ")
      }({
        transform: Ku,
        startCentered: !0,
        width: yu,
        height: Eu
      }), Vu["-webkit-transform"] = Vu.transform);
      var ru = vR(Vu);
      ru.length > 0 && (Xu.style = ru);
      var Bu = [];
      return Bu.push({
        tag: "span",
        attributes: Xu,
        children: [Ru]
      }), Bu
    }
    var RE = Ky.styles;

    function yE(uu) {
      var Ru = uu[0],
        yu = uu[1],
        Eu = Xu(uu.slice(4), 1)[0];
      return {
        found: !0,
        width: Ru,
        height: yu,
        icon: Array.isArray(Eu) ? {
          tag: "g",
          attributes: {
            class: "".concat(ZR.cssPrefix, "-").concat(cR.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(ZR.cssPrefix, "-").concat(cR.SECONDARY),
              fill: "currentColor",
              d: Eu[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(ZR.cssPrefix, "-").concat(cR.PRIMARY),
              fill: "currentColor",
              d: Eu[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: Eu
          }
        }
      }
    }
    var EE = {
      found: !1,
      width: 512,
      height: 512
    };

    function KE(uu, Ru) {
      var yu = Ru;
      return "fa" === Ru && null !== ZR.styleDefault && (Ru = Uy()), new Promise((function(Eu, Ku) {
        if ("fa" === yu) {
          var Qu = Gy(uu) || {};
          uu = Qu.iconName || uu, Ru = Qu.prefix || Ru
        }
        if (uu && Ru && RE[Ru] && RE[Ru][uu]) return Eu(yE(RE[Ru][uu]));
        ! function(uu, Ru) {
          kR || ZR.showMissingIcons || !uu || console.error('Icon with name "'.concat(uu, '" and prefix "').concat(Ru, '" is missing.'))
        }(uu, Ru), Eu(Nu(Nu({}, EE), {}, {
          icon: ZR.showMissingIcons && uu && iy("missingIconAbstract") || {}
        }))
      }))
    }
    var QE = function() {},
      mE = ZR.measurePerformance && Du && Du.mark && Du.measure ? Du : {
        mark: QE,
        measure: QE
      },
      JE = 'FA "7.2.0"',
      NE = function(uu) {
        mE.mark("".concat(JE, " ").concat(uu, " ends")), mE.measure("".concat(JE, " ").concat(uu), "".concat(JE, " ").concat(uu, " begins"), "".concat(JE, " ").concat(uu, " ends"))
      },
      XE = function(uu) {
        return mE.mark("".concat(JE, " ").concat(uu, " begins")),
          function() {
            return NE(uu)
          }
      },
      VE = function() {};

    function rE(uu) {
      return "string" === typeof(uu.getAttribute ? uu.getAttribute(TR) : null)
    }

    function BE(uu) {
      return eu.createElementNS("http://www.w3.org/2000/svg", uu)
    }

    function xE(uu) {
      return eu.createElement(uu)
    }

    function SE(uu) {
      var Ru = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        yu = void 0 === Ru ? "svg" === uu.tag ? BE : xE : Ru;
      if ("string" === typeof uu) return eu.createTextNode(uu);
      var Eu = yu(uu.tag);
      return Object.keys(uu.attributes || []).forEach((function(Ru) {
        Eu.setAttribute(Ru, uu.attributes[Ru])
      })), (uu.children || []).forEach((function(uu) {
        Eu.appendChild(SE(uu, {
          ceFn: yu
        }))
      })), Eu
    }
    var pE = {
      replace: function(uu) {
        var Ru = uu[0];
        if (Ru.parentNode)
          if (uu[1].forEach((function(uu) {
              Ru.parentNode.insertBefore(SE(uu), Ru)
            })), null === Ru.getAttribute(TR) && ZR.keepOriginalSource) {
            var yu = eu.createComment(function(uu) {
              var Ru = " ".concat(uu.outerHTML, " ");
              return "".concat(Ru, "Font Awesome fontawesome.com ")
            }(Ru));
            Ru.parentNode.replaceChild(yu, Ru)
          } else Ru.remove()
      },
      nest: function(uu) {
        var Ru = uu[0],
          yu = uu[1];
        if (~qR(Ru).indexOf(ZR.replacementClass)) return pE.replace(uu);
        var Eu = new RegExp("".concat(ZR.cssPrefix, "-.*"));
        if (delete yu[0].attributes.id, yu[0].attributes.class) {
          var Ku = yu[0].attributes.class.split(" ").reduce((function(uu, Ru) {
            return Ru === ZR.replacementClass || Ru.match(Eu) ? uu.toSvg.push(Ru) : uu.toNode.push(Ru), uu
          }), {
            toNode: [],
            toSvg: []
          });
          yu[0].attributes.class = Ku.toSvg.join(" "), 0 === Ku.toNode.length ? Ru.removeAttribute("class") : Ru.setAttribute("class", Ku.toNode.join(" "))
        }
        var Qu = yu.map((function(uu) {
          return Ny(uu)
        })).join("\n");
        Ru.setAttribute(TR, ""), Ru.innerHTML = Qu
      }
    };

    function TE(uu) {
      uu()
    }

    function WE(uu, Ru) {
      var yu = "function" === typeof Ru ? Ru : VE;
      if (0 === uu.length) yu();
      else {
        var Eu = TE;
        "async" === ZR.mutateApproach && (Eu = ku.requestAnimationFrame || TE), Eu((function() {
          var Ru = !0 === ZR.autoReplaceSvg ? pE.replace : pE[ZR.autoReplaceSvg] || pE.replace,
            Eu = XE("mutate");
          uu.map(Ru), Eu(), yu()
        }))
      }
    }
    var jE = !1;

    function HE() {
      jE = !0
    }

    function dE() {
      jE = !1
    }
    var bE = null;

    function CE(uu) {
      if (Au && ZR.observeMutations) {
        var Ru = uu.treeCallback,
          yu = void 0 === Ru ? VE : Ru,
          Eu = uu.nodeCallback,
          Ku = void 0 === Eu ? VE : Eu,
          Qu = uu.pseudoElementsCallback,
          mu = void 0 === Qu ? VE : Qu,
          Ju = uu.observeMutationsRoot,
          Nu = void 0 === Ju ? eu : Ju;
        bE = new Au((function(uu) {
          if (!jE) {
            var Ru = Uy();
            oR(uu).forEach((function(uu) {
              if ("childList" === uu.type && uu.addedNodes.length > 0 && !rE(uu.addedNodes[0]) && (ZR.searchPseudoElements && mu(uu.target), yu(uu.target)), "attributes" === uu.type && uu.target.parentNode && ZR.searchPseudoElements && mu([uu.target], !0), "attributes" === uu.type && rE(uu.target) && ~gR.indexOf(uu.attributeName))
                if ("class" === uu.attributeName && function(uu) {
                    var Ru = uu.getAttribute ? uu.getAttribute(jR) : null,
                      yu = uu.getAttribute ? uu.getAttribute(HR) : null;
                    return Ru && yu
                  }(uu.target)) {
                  var Eu = ly(qR(uu.target)),
                    Qu = Eu.prefix,
                    Ju = Eu.iconName;
                  uu.target.setAttribute(jR, Qu || Ru), Ju && uu.target.setAttribute(HR, Ju)
                } else(Nu = uu.target) && Nu.classList && Nu.classList.contains && Nu.classList.contains(ZR.replacementClass) && Ku(uu.target);
              var Nu
            }))
          }
        })), Mu && bE.observe(Nu, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function kE(uu) {
      var Ru, yu, Eu = uu.getAttribute("data-prefix"),
        Ku = uu.getAttribute("data-icon"),
        Qu = void 0 !== uu.innerText ? uu.innerText.trim() : "",
        mu = ly(qR(uu));
      return mu.prefix || (mu.prefix = Uy()), Eu && Ku && (mu.prefix = Eu, mu.iconName = Ku), mu.iconName && mu.prefix || (mu.prefix && Qu.length > 0 && (mu.iconName = (Ru = mu.prefix, yu = uu.innerText, (dy[Ru] || {})[yu] || My(mu.prefix, ry(uu.innerText)))), !mu.iconName && ZR.autoFetchSvg && uu.firstChild && uu.firstChild.nodeType === Node.TEXT_NODE && (mu.iconName = uu.firstChild.data)), mu
    }

    function eE(uu) {
      var Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        yu = kE(uu),
        Eu = yu.iconName,
        Ku = yu.prefix,
        Qu = yu.rest,
        mu = function(uu) {
          return oR(uu.attributes).reduce((function(uu, Ru) {
            return "class" !== uu.name && "style" !== uu.name && (uu[Ru.name] = Ru.value), uu
          }), {})
        }(uu),
        Ju = hy("parseNodeAttributes", {}, uu),
        Xu = Ru.styleParser ? function(uu) {
          var Ru = uu.getAttribute("style"),
            yu = [];
          return Ru && (yu = Ru.split(";").reduce((function(uu, Ru) {
            var yu = Ru.split(":"),
              Eu = yu[0],
              Ku = yu.slice(1);
            return Eu && Ku.length > 0 && (uu[Eu] = Ku.join(":").trim()), uu
          }), {})), yu
        }(uu) : [];
      return Nu({
        iconName: Eu,
        prefix: Ku,
        transform: iR,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: Qu,
          styles: Xu,
          attributes: mu
        }
      }, Ju)
    }
    var AE = Ky.styles;

    function DE(uu) {
      var Ru = "nest" === ZR.autoReplaceSvg ? eE(uu, {
        styleParser: !1
      }) : eE(uu);
      return ~Ru.extra.classes.indexOf(tR) ? iy("generateLayersText", uu, Ru) : iy("generateSvgReplacementMutation", uu, Ru)
    }

    function ME(uu) {
      var Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!Mu) return Promise.resolve();
      var yu = eu.documentElement.classList,
        Eu = function(uu) {
          return yu.add("".concat(dR, "-").concat(uu))
        },
        Ku = function(uu) {
          return yu.remove("".concat(dR, "-").concat(uu))
        },
        Qu = ZR.autoFetchSvg ? [].concat(Vu(uR), Vu(VR)) : Uu.concat(Object.keys(AE));
      Qu.includes("fa") || Qu.push("fa");
      var mu = [".".concat(tR, ":not([").concat(TR, "])")].concat(Qu.map((function(uu) {
        return ".".concat(uu, ":not([").concat(TR, "])")
      }))).join(", ");
      if (0 === mu.length) return Promise.resolve();
      var Ju = [];
      try {
        Ju = oR(uu.querySelectorAll(mu))
      } catch (ru) {}
      if (!(Ju.length > 0)) return Promise.resolve();
      Eu("pending"), Ku("complete");
      var Nu = XE("onTree"),
        Xu = Ju.reduce((function(uu, Ru) {
          try {
            var yu = DE(Ru);
            yu && uu.push(yu)
          } catch (ru) {
            kR || "MissingIcon" === ru.name && console.error(ru)
          }
          return uu
        }), []);
      return new Promise((function(uu, yu) {
        Promise.all(Xu).then((function(yu) {
          WE(yu, (function() {
            Eu("active"), Eu("complete"), Ku("pending"), "function" === typeof Ru && Ru(), Nu(), uu()
          }))
        })).catch((function(uu) {
          Nu(), yu(uu)
        }))
      }))
    }

    function IE(uu) {
      var Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      DE(uu).then((function(uu) {
        uu && WE([uu], Ru)
      }))
    }
    var GE = function(uu) {
        var Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          yu = Ru.transform,
          Eu = void 0 === yu ? iR : yu,
          Ku = Ru.symbol,
          Qu = void 0 !== Ku && Ku,
          mu = Ru.mask,
          Ju = void 0 === mu ? null : mu,
          Xu = Ru.maskId,
          Vu = void 0 === Xu ? null : Xu,
          ru = Ru.classes,
          Bu = void 0 === ru ? [] : ru,
          xu = Ru.attributes,
          Su = void 0 === xu ? {} : xu,
          pu = Ru.styles,
          Tu = void 0 === pu ? {} : pu;
        if (uu) {
          var Wu = uu.prefix,
            ju = uu.iconName,
            Hu = uu.icon;
          return ay(Nu({
            type: "icon"
          }, uu), (function() {
            return Py("beforeDOMElementCreation", {
              iconDefinition: uu,
              params: Ru
            }), fy({
              icons: {
                main: yE(Hu),
                mask: Ju ? yE(Ju.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: Wu,
              iconName: ju,
              transform: Nu(Nu({}, iR), Eu),
              symbol: Qu,
              maskId: Vu,
              extra: {
                attributes: Su,
                styles: Tu,
                classes: Bu
              }
            })
          }))
        }
      },
      UE = {
        mixout: function() {
          return {
            icon: (uu = GE, function(Ru) {
              var yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Eu = (Ru || {}).icon ? Ru : Yy(Ru || {}),
                Ku = yu.mask;
              return Ku && (Ku = (Ku || {}).icon ? Ku : Yy(Ku || {})), uu(Eu, Nu(Nu({}, yu), {}, {
                mask: Ku
              }))
            })
          };
          var uu
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(uu) {
              return uu.treeCallback = ME, uu.nodeCallback = IE, uu
            }
          }
        },
        provides: function(uu) {
          uu.i2svg = function(uu) {
            var Ru = uu.node,
              yu = void 0 === Ru ? eu : Ru,
              Eu = uu.callback;
            return ME(yu, void 0 === Eu ? function() {} : Eu)
          }, uu.generateSvgReplacementMutation = function(uu, Ru) {
            var yu = Ru.iconName,
              Eu = Ru.prefix,
              Ku = Ru.transform,
              Qu = Ru.symbol,
              mu = Ru.mask,
              Ju = Ru.maskId,
              Nu = Ru.extra;
            return new Promise((function(Ru, Vu) {
              Promise.all([KE(yu, Eu), mu.iconName ? KE(mu.iconName, mu.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(mu) {
                var Vu = Xu(mu, 2),
                  ru = Vu[0],
                  Bu = Vu[1];
                Ru([uu, fy({
                  icons: {
                    main: ru,
                    mask: Bu
                  },
                  prefix: Eu,
                  iconName: yu,
                  transform: Ku,
                  symbol: Qu,
                  maskId: Ju,
                  extra: Nu,
                  watchable: !0
                })])
              })).catch(Vu)
            }))
          }, uu.generateAbstractIcon = function(uu) {
            var Ru, yu = uu.children,
              Eu = uu.attributes,
              Ku = uu.main,
              Qu = uu.transform,
              mu = vR(uu.styles);
            return mu.length > 0 && (Eu.style = mu), aR(Qu) && (Ru = iy("generateAbstractTransformGrouping", {
              main: Ku,
              transform: Qu,
              containerWidth: Ku.width,
              iconWidth: Ku.width
            })), yu.push(Ru || Ku.icon), {
              children: yu,
              attributes: Eu
            }
          }
        }
      },
      nE = {
        mixout: function() {
          return {
            layer: function(uu) {
              var Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                yu = Ru.classes,
                Eu = void 0 === yu ? [] : yu;
              return ay({
                type: "layer"
              }, (function() {
                Py("beforeDOMElementCreation", {
                  assembler: uu,
                  params: Ru
                });
                var yu = [];
                return uu((function(uu) {
                  Array.isArray(uu) ? uu.map((function(uu) {
                    yu = yu.concat(uu.abstract)
                  })) : yu = yu.concat(uu.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(ZR.cssPrefix, "-layers")].concat(Vu(Eu)).join(" ")
                  },
                  children: yu
                }]
              }))
            }
          }
        }
      },
      sE = {
        mixout: function() {
          return {
            counter: function(uu) {
              var Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                yu = Ru.title,
                Eu = void 0 === yu ? null : yu,
                Ku = Ru.classes,
                Qu = void 0 === Ku ? [] : Ku,
                mu = Ru.attributes,
                Ju = void 0 === mu ? {} : mu,
                Xu = Ru.styles,
                ru = void 0 === Xu ? {} : Xu;
              return ay({
                type: "counter",
                content: uu
              }, (function() {
                return Py("beforeDOMElementCreation", {
                    content: uu,
                    params: Ru
                  }),
                  function(uu) {
                    var Ru = uu.content,
                      yu = uu.extra,
                      Eu = Nu(Nu({}, yu.attributes), {}, {
                        class: yu.classes.join(" ")
                      }),
                      Ku = vR(yu.styles);
                    Ku.length > 0 && (Eu.style = Ku);
                    var Qu = [];
                    return Qu.push({
                      tag: "span",
                      attributes: Eu,
                      children: [Ru]
                    }), Qu
                  }({
                    content: uu.toString(),
                    title: Eu,
                    extra: {
                      attributes: Ju,
                      styles: ru,
                      classes: ["".concat(ZR.cssPrefix, "-layers-counter")].concat(Vu(Qu))
                    }
                  })
              }))
            }
          }
        }
      },
      tE = {
        mixout: function() {
          return {
            text: function(uu) {
              var Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                yu = Ru.transform,
                Eu = void 0 === yu ? iR : yu,
                Ku = Ru.classes,
                Qu = void 0 === Ku ? [] : Ku,
                mu = Ru.attributes,
                Ju = void 0 === mu ? {} : mu,
                Xu = Ru.styles,
                ru = void 0 === Xu ? {} : Xu;
              return ay({
                type: "text",
                content: uu
              }, (function() {
                return Py("beforeDOMElementCreation", {
                  content: uu,
                  params: Ru
                }), uE({
                  content: uu,
                  transform: Nu(Nu({}, iR), Eu),
                  extra: {
                    attributes: Ju,
                    styles: ru,
                    classes: ["".concat(ZR.cssPrefix, "-layers-text")].concat(Vu(Qu))
                  }
                })
              }))
            }
          }
        },
        provides: function(uu) {
          uu.generateLayersText = function(uu, Ru) {
            var yu = Ru.transform,
              Eu = Ru.extra,
              Ku = null,
              Qu = null;
            if (Iu) {
              var mu = parseInt(getComputedStyle(uu).fontSize, 10),
                Ju = uu.getBoundingClientRect();
              Ku = Ju.width / mu, Qu = Ju.height / mu
            }
            return Promise.resolve([uu, uE({
              content: uu.innerHTML,
              width: Ku,
              height: Qu,
              transform: yu,
              extra: Eu,
              watchable: !0
            })])
          }
        }
      },
      lE = new RegExp('"', "ug"),
      gE = [1105920, 1112319],
      cE = Nu(Nu(Nu(Nu({}, {
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
      LE = Object.keys(cE).reduce((function(uu, Ru) {
        return uu[Ru.toLowerCase()] = cE[Ru], uu
      }), {}),
      zE = Object.keys(LE).reduce((function(uu, Ru) {
        var yu = LE[Ru];
        return uu[Ru] = yu[900] || Vu(Object.entries(yu))[0][1], uu
      }), {});

    function FE(uu, Ru) {
      var yu = "".concat("data-fa-pseudo-element-pending").concat(Ru.replace(":", "-"));
      return new Promise((function(Eu, Ku) {
        if (null !== uu.getAttribute(yu)) return Eu();
        var Qu = oR(uu.children).filter((function(uu) {
            return uu.getAttribute(WR) === Ru
          }))[0],
          mu = ku.getComputedStyle(uu, Ru),
          Ju = mu.getPropertyValue("font-family"),
          Xu = Ju.match(lR),
          ru = mu.getPropertyValue("font-weight"),
          Bu = mu.getPropertyValue("content");
        if (Qu && !Xu) return uu.removeChild(Qu), Eu();
        if (Xu && "none" !== Bu && "" !== Bu) {
          var xu = mu.getPropertyValue("content"),
            Su = function(uu, Ru) {
              var yu = uu.replace(/^['"]|['"]$/g, "").toLowerCase(),
                Eu = parseInt(Ru),
                Ku = isNaN(Eu) ? "normal" : Eu;
              return (LE[yu] || {})[Ku] || zE[yu]
            }(Ju, ru),
            pu = function(uu) {
              return ry(Vu(uu.replace(lE, ""))[0] || "")
            }(xu),
            Tu = Xu[0].startsWith("FontAwesome"),
            Wu = function(uu) {
              var Ru = uu.getPropertyValue("font-feature-settings").includes("ss01"),
                yu = uu.getPropertyValue("content").replace(lE, ""),
                Eu = yu.codePointAt(0),
                Ku = Eu >= gE[0] && Eu <= gE[1],
                Qu = 2 === yu.length && yu[0] === yu[1];
              return Ku || Qu || Ru
            }(mu),
            ju = My(Su, pu),
            Hu = ju;
          if (Tu) {
            var du = function(uu) {
              var Ru = Cy[uu],
                yu = My("fas", uu);
              return Ru || (yu ? {
                prefix: "fas",
                iconName: yu
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(pu);
            du.iconName && du.prefix && (ju = du.iconName, Su = du.prefix)
          }
          if (!ju || Wu || Qu && Qu.getAttribute(jR) === Su && Qu.getAttribute(HR) === Hu) Eu();
          else {
            uu.setAttribute(yu, Hu), Qu && uu.removeChild(Qu);
            var bu = {
                iconName: null,
                prefix: null,
                transform: iR,
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
              Cu = bu.extra;
            Cu.attributes[WR] = Ru, KE(ju, Su).then((function(Ku) {
              var Qu = fy(Nu(Nu({}, bu), {}, {
                  icons: {
                    main: Ku,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: Su,
                  iconName: Hu,
                  extra: Cu,
                  watchable: !0
                })),
                mu = eu.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === Ru ? uu.insertBefore(mu, uu.firstChild) : uu.appendChild(mu), mu.outerHTML = Qu.map((function(uu) {
                return Ny(uu)
              })).join("\n"), uu.removeAttribute(yu), Eu()
            })).catch(Ku)
          }
        } else Eu()
      }))
    }

    function wE(uu) {
      return Promise.all([FE(uu, "::before"), FE(uu, "::after")])
    }

    function ZE(uu) {
      return uu.parentNode !== document.head && !~bR.indexOf(uu.tagName.toUpperCase()) && !uu.getAttribute(WR) && (!uu.parentNode || "svg" !== uu.parentNode.tagName)
    }
    var hE = function(uu) {
        return !!uu && CR.some((function(Ru) {
          return uu.includes(Ru)
        }))
      },
      PE = function(uu) {
        if (!uu) return [];
        var Ru = new Set,
          yu = uu.split(/,(?![^()]*\))/).map((function(uu) {
            return uu.trim()
          }));
        yu = yu.flatMap((function(uu) {
          return uu.includes("(") ? uu : uu.split(",").map((function(uu) {
            return uu.trim()
          }))
        }));
        var Eu, Ku = Qu(yu);
        try {
          for (Ku.s(); !(Eu = Ku.n()).done;) {
            var mu = Eu.value;
            if (hE(mu)) {
              var Ju = CR.reduce((function(uu, Ru) {
                return uu.replace(Ru, "")
              }), mu);
              "" !== Ju && "*" !== Ju && Ru.add(Ju)
            }
          }
        } catch (Nu) {
          Ku.e(Nu)
        } finally {
          Ku.f()
        }
        return Ru
      };

    function iE(uu) {
      if (Mu) {
        var Ru;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) Ru = uu;
        else if (ZR.searchPseudoElementsFullScan) Ru = uu.querySelectorAll("*");
        else {
          var yu, Eu = new Set,
            Ku = Qu(document.styleSheets);
          try {
            for (Ku.s(); !(yu = Ku.n()).done;) {
              var mu = yu.value;
              try {
                var Ju, Nu = Qu(mu.cssRules);
                try {
                  for (Nu.s(); !(Ju = Nu.n()).done;) {
                    var Xu, Vu = Ju.value,
                      ru = Qu(PE(Vu.selectorText));
                    try {
                      for (ru.s(); !(Xu = ru.n()).done;) {
                        var Bu = Xu.value;
                        Eu.add(Bu)
                      }
                    } catch (Su) {
                      ru.e(Su)
                    } finally {
                      ru.f()
                    }
                  }
                } catch (Su) {
                  Nu.e(Su)
                } finally {
                  Nu.f()
                }
              } catch (pu) {
                ZR.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(mu.href, " (").concat(pu.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (Su) {
            Ku.e(Su)
          } finally {
            Ku.f()
          }
          if (!Eu.size) return;
          var xu = Array.from(Eu).join(", ");
          try {
            Ru = uu.querySelectorAll(xu)
          } catch (Tu) {}
        }
        return new Promise((function(uu, yu) {
          var Eu = oR(Ru).filter(ZE).map(wE),
            Ku = XE("searchPseudoElements");
          HE(), Promise.all(Eu).then((function() {
            Ku(), dE(), uu()
          })).catch((function() {
            Ku(), dE(), yu()
          }))
        }))
      }
    }
    var YE = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(uu) {
              return uu.pseudoElementsCallback = iE, uu
            }
          }
        },
        provides: function(uu) {
          uu.pseudoElements2svg = function(uu) {
            var Ru = uu.node,
              yu = void 0 === Ru ? eu : Ru;
            ZR.searchPseudoElements && iE(yu)
          }
        }
      },
      oE = !1,
      qE = function(uu) {
        return uu.toLowerCase().split(" ").reduce((function(uu, Ru) {
          var yu = Ru.toLowerCase().split("-"),
            Eu = yu[0],
            Ku = yu.slice(1).join("-");
          if (Eu && "h" === Ku) return uu.flipX = !0, uu;
          if (Eu && "v" === Ku) return uu.flipY = !0, uu;
          if (Ku = parseFloat(Ku), isNaN(Ku)) return uu;
          switch (Eu) {
            case "grow":
              uu.size = uu.size + Ku;
              break;
            case "shrink":
              uu.size = uu.size - Ku;
              break;
            case "left":
              uu.x = uu.x - Ku;
              break;
            case "right":
              uu.x = uu.x + Ku;
              break;
            case "up":
              uu.y = uu.y - Ku;
              break;
            case "down":
              uu.y = uu.y + Ku;
              break;
            case "rotate":
              uu.rotate = uu.rotate + Ku
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
      OE = {
        mixout: function() {
          return {
            parse: {
              transform: function(uu) {
                return qE(uu)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(uu, Ru) {
              var yu = Ru.getAttribute("data-fa-transform");
              return yu && (uu.transform = qE(yu)), uu
            }
          }
        },
        provides: function(uu) {
          uu.generateAbstractTransformGrouping = function(uu) {
            var Ru = uu.main,
              yu = uu.transform,
              Eu = uu.containerWidth,
              Ku = uu.iconWidth,
              Qu = {
                transform: "translate(".concat(Eu / 2, " 256)")
              },
              mu = "translate(".concat(32 * yu.x, ", ").concat(32 * yu.y, ") "),
              Ju = "scale(".concat(yu.size / 16 * (yu.flipX ? -1 : 1), ", ").concat(yu.size / 16 * (yu.flipY ? -1 : 1), ") "),
              Xu = "rotate(".concat(yu.rotate, " 0 0)"),
              Vu = {
                outer: Qu,
                inner: {
                  transform: "".concat(mu, " ").concat(Ju, " ").concat(Xu)
                },
                path: {
                  transform: "translate(".concat(Ku / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: Nu({}, Vu.outer),
              children: [{
                tag: "g",
                attributes: Nu({}, Vu.inner),
                children: [{
                  tag: Ru.icon.tag,
                  children: Ru.icon.children,
                  attributes: Nu(Nu({}, Ru.icon.attributes), Vu.path)
                }]
              }]
            }
          }
        }
      },
      vE = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function aE(uu) {
      var Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return uu.attributes && (uu.attributes.fill || Ru) && (uu.attributes.fill = "black"), uu
    }
    var fE = {
        hooks: function() {
          return {
            parseNodeAttributes: function(uu, Ru) {
              var yu = Ru.getAttribute("data-fa-mask"),
                Eu = yu ? ly(yu.split(" ").map((function(uu) {
                  return uu.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return Eu.prefix || (Eu.prefix = Uy()), uu.mask = Eu, uu.maskId = Ru.getAttribute("data-fa-mask-id"), uu
            }
          }
        },
        provides: function(uu) {
          uu.generateAbstractMask = function(uu) {
            var Ru, yu = uu.children,
              Eu = uu.attributes,
              Ku = uu.main,
              Qu = uu.mask,
              mu = uu.maskId,
              Ju = uu.transform,
              Xu = Ku.width,
              Vu = Ku.icon,
              ru = Qu.width,
              Bu = Qu.icon,
              xu = function(uu) {
                var Ru = uu.transform,
                  yu = uu.containerWidth,
                  Eu = uu.iconWidth,
                  Ku = {
                    transform: "translate(".concat(yu / 2, " 256)")
                  },
                  Qu = "translate(".concat(32 * Ru.x, ", ").concat(32 * Ru.y, ") "),
                  mu = "scale(".concat(Ru.size / 16 * (Ru.flipX ? -1 : 1), ", ").concat(Ru.size / 16 * (Ru.flipY ? -1 : 1), ") "),
                  Ju = "rotate(".concat(Ru.rotate, " 0 0)");
                return {
                  outer: Ku,
                  inner: {
                    transform: "".concat(Qu, " ").concat(mu, " ").concat(Ju)
                  },
                  path: {
                    transform: "translate(".concat(Eu / 2 * -1, " -256)")
                  }
                }
              }({
                transform: Ju,
                containerWidth: ru,
                iconWidth: Xu
              }),
              Su = {
                tag: "rect",
                attributes: Nu(Nu({}, vE), {}, {
                  fill: "white"
                })
              },
              pu = Vu.children ? {
                children: Vu.children.map(aE)
              } : {},
              Tu = {
                tag: "g",
                attributes: Nu({}, xu.inner),
                children: [aE(Nu({
                  tag: Vu.tag,
                  attributes: Nu(Nu({}, Vu.attributes), xu.path)
                }, pu))]
              },
              Wu = {
                tag: "g",
                attributes: Nu({}, xu.outer),
                children: [Tu]
              },
              ju = "mask-".concat(mu || YR()),
              Hu = "clip-".concat(mu || YR()),
              du = {
                tag: "mask",
                attributes: Nu(Nu({}, vE), {}, {
                  id: ju,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [Su, Wu]
              },
              bu = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: Hu
                  },
                  children: (Ru = Bu, "g" === Ru.tag ? Ru.children : [Ru])
                }, du]
              };
            return yu.push(bu, {
              tag: "rect",
              attributes: Nu({
                fill: "currentColor",
                "clip-path": "url(#".concat(Hu, ")"),
                mask: "url(#".concat(ju, ")")
              }, vE)
            }), {
              children: yu,
              attributes: Eu
            }
          }
        }
      },
      uK = {
        provides: function(uu) {
          var Ru = !1;
          ku.matchMedia && (Ru = ku.matchMedia("(prefers-reduced-motion: reduce)").matches), uu.missingIconAbstract = function() {
            var uu = [],
              yu = {
                fill: "currentColor"
              },
              Eu = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            uu.push({
              tag: "path",
              attributes: Nu(Nu({}, yu), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var Ku = Nu(Nu({}, Eu), {}, {
                attributeName: "opacity"
              }),
              Qu = {
                tag: "circle",
                attributes: Nu(Nu({}, yu), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return Ru || Qu.children.push({
              tag: "animate",
              attributes: Nu(Nu({}, Eu), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: Nu(Nu({}, Ku), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), uu.push(Qu), uu.push({
              tag: "path",
              attributes: Nu(Nu({}, yu), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: Ru ? [] : [{
                tag: "animate",
                attributes: Nu(Nu({}, Ku), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), Ru || uu.push({
              tag: "path",
              attributes: Nu(Nu({}, yu), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: Nu(Nu({}, Ku), {}, {
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
    ! function(uu, Ru) {
      var yu = Ru.mixoutsTo;
      zy = uu, Fy = {}, Object.keys(wy).forEach((function(uu) {
        -1 === Zy.indexOf(uu) && delete wy[uu]
      })), zy.forEach((function(uu) {
        var Ru = uu.mixout ? uu.mixout() : {};
        if (Object.keys(Ru).forEach((function(uu) {
            "function" === typeof Ru[uu] && (yu[uu] = Ru[uu]), "object" === Bu(Ru[uu]) && Object.keys(Ru[uu]).forEach((function(Eu) {
              yu[uu] || (yu[uu] = {}), yu[uu][Eu] = Ru[uu][Eu]
            }))
          })), uu.hooks) {
          var Eu = uu.hooks();
          Object.keys(Eu).forEach((function(uu) {
            Fy[uu] || (Fy[uu] = []), Fy[uu].push(Eu[uu])
          }))
        }
        uu.provides && uu.provides(wy)
      }))
    }([yy, UE, nE, sE, tE, YE, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              HE(), oE = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            CE(hy("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            bE && bE.disconnect()
          },
          watch: function(uu) {
            var Ru = uu.observeMutationsRoot;
            oE ? dE() : CE(hy("mutationObserverCallbacks", {
              observeMutationsRoot: Ru
            }))
          }
        }
      }
    }, OE, fE, uK, {
      hooks: function() {
        return {
          parseNodeAttributes: function(uu, Ru) {
            var yu = Ru.getAttribute("data-fa-symbol"),
              Eu = null !== yu && ("" === yu || yu);
            return uu.symbol = Eu, uu
          }
        }
      }
    }], {
      mixoutsTo: Oy
    });
    var RK = Oy.noAuto,
      yK = Oy.config,
      EK = Oy.library,
      KK = Oy.dom,
      QK = Oy.parse,
      mK = Oy.findIconDefinition,
      JK = Oy.toHtml,
      NK = Oy.icon,
      XK = Oy.layer,
      VK = Oy.text,
      rK = Oy.counter
  },
  6464: uu => {
    uu.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);