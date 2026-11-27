/*! For license information please see u88b9b.fa-renderer.2bfaa4f5.chunk.js.LICENSE.txt */
export const id = 38;
export const ids = [38];
export const modules = {
  7398: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      FontAwesomeIcon: () => We
    });
    var ye = He(7394),
      be = He(5461),
      Me = He.n(be),
      Ke = He(59);

    function Ue(ee, ie) {
      (null == ie || ie > ee.length) && (ie = ee.length);
      for (var He = 0, ye = Array(ie); He < ie; He++) ye[He] = ee[He];
      return ye
    }

    function Fe(ee, ie, He) {
      return (ie = function(ee) {
        var ie = function(ee, ie) {
          if ("object" != typeof ee || !ee) return ee;
          var He = ee[Symbol.toPrimitive];
          if (void 0 !== He) {
            var ye = He.call(ee, ie || "default");
            if ("object" != typeof ye) return ye;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === ie ? String : Number)(ee)
        }(ee, "string");
        return "symbol" == typeof ie ? ie : ie + ""
      }(ie)) in ee ? Object.defineProperty(ee, ie, {
        value: He,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : ee[ie] = He, ee
    }

    function Je(ee, ie) {
      var He = Object.keys(ee);
      if (Object.getOwnPropertySymbols) {
        var ye = Object.getOwnPropertySymbols(ee);
        ie && (ye = ye.filter((function(ie) {
          return Object.getOwnPropertyDescriptor(ee, ie).enumerable
        }))), He.push.apply(He, ye)
      }
      return He
    }

    function oe(ee) {
      for (var ie = 1; ie < arguments.length; ie++) {
        var He = null != arguments[ie] ? arguments[ie] : {};
        ie % 2 ? Je(Object(He), !0).forEach((function(ie) {
          Fe(ee, ie, He[ie])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ee, Object.getOwnPropertyDescriptors(He)) : Je(Object(He)).forEach((function(ie) {
          Object.defineProperty(ee, ie, Object.getOwnPropertyDescriptor(He, ie))
        }))
      }
      return ee
    }

    function Re(ee, ie) {
      return function(ee) {
        if (Array.isArray(ee)) return ee
      }(ee) || function(ee, ie) {
        var He = null == ee ? null : "undefined" != typeof Symbol && ee[Symbol.iterator] || ee["@@iterator"];
        if (null != He) {
          var ye, be, Me, Ke, Ue = [],
            Fe = !0,
            Je = !1;
          try {
            if (Me = (He = He.call(ee)).next, 0 === ie) {
              if (Object(He) !== He) return;
              Fe = !1
            } else
              for (; !(Fe = (ye = Me.call(He)).done) && (Ue.push(ye.value), Ue.length !== ie); Fe = !0);
          } catch (ee) {
            Je = !0, be = ee
          } finally {
            try {
              if (!Fe && null != He.return && (Ke = He.return(), Object(Ke) !== Ke)) return
            } finally {
              if (Je) throw be
            }
          }
          return Ue
        }
      }(ee, ie) || fe(ee, ie) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ke(ee) {
      return function(ee) {
        if (Array.isArray(ee)) return Ue(ee)
      }(ee) || function(ee) {
        if ("undefined" != typeof Symbol && null != ee[Symbol.iterator] || null != ee["@@iterator"]) return Array.from(ee)
      }(ee) || fe(ee) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qe(ee) {
      return qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(ee) {
        return typeof ee
      } : function(ee) {
        return ee && "function" == typeof Symbol && ee.constructor === Symbol && ee !== Symbol.prototype ? "symbol" : typeof ee
      }, qe(ee)
    }

    function fe(ee, ie) {
      if (ee) {
        if ("string" == typeof ee) return Ue(ee, ie);
        var He = {}.toString.call(ee).slice(8, -1);
        return "Object" === He && ee.constructor && (He = ee.constructor.name), "Map" === He || "Set" === He ? Array.from(ee) : "Arguments" === He || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(He) ? Ue(ee, ie) : void 0
      }
    }
    var Te;
    try {
      var pe = He(7402);
      Te = pe.version
    } catch (Ze) {
      Te = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function Xe(ee) {
      var ie = ee.beat,
        He = ee.fade,
        ye = ee.beatFade,
        be = ee.bounce,
        Me = ee.shake,
        Ke = ee.flash,
        Ue = ee.spin,
        Je = ee.spinPulse,
        oe = ee.spinReverse,
        ke = ee.pulse,
        qe = ee.fixedWidth,
        fe = ee.inverse,
        pe = ee.border,
        Xe = ee.listItem,
        ze = ee.flip,
        Be = ee.size,
        Ee = ee.rotation,
        ge = ee.pull,
        Oe = ee.swapOpacity,
        de = ee.rotateBy,
        We = ee.widthAuto,
        te = function(ee, ie) {
          for (var He = Re(ee.split("-"), 2), ye = He[0], be = He[1], Me = Re(ie.split("-"), 2), Ke = Me[0], Ue = Me[1], Fe = ye.split("."), Je = Ke.split("."), oe = 0; oe < Math.max(Fe.length, Je.length); oe++) {
            var ke = Fe[oe] || "0",
              qe = Je[oe] || "0",
              fe = parseInt(ke, 10),
              Te = parseInt(qe, 10);
            if (fe !== Te) return fe > Te
          }
          for (var pe = 0; pe < Math.max(Fe.length, Je.length); pe++) {
            var Xe = Fe[pe] || "0",
              ze = Je[pe] || "0";
            if (Xe !== ze && Xe.length !== ze.length) return Xe.length < ze.length
          }
          return !(be && !Ue)
        }(Te, "7.0.0"),
        Ze = Fe(Fe(Fe(Fe(Fe(Fe({
          "fa-beat": ie,
          "fa-fade": He,
          "fa-beat-fade": ye,
          "fa-bounce": be,
          "fa-shake": Me,
          "fa-flash": Ke,
          "fa-spin": Ue,
          "fa-spin-reverse": oe,
          "fa-spin-pulse": Je,
          "fa-pulse": ke,
          "fa-fw": qe,
          "fa-inverse": fe,
          "fa-border": pe,
          "fa-li": Xe,
          "fa-flip": !0 === ze,
          "fa-flip-horizontal": "horizontal" === ze || "both" === ze,
          "fa-flip-vertical": "vertical" === ze || "both" === ze
        }, "fa-".concat(Be), "undefined" !== typeof Be && null !== Be), "fa-rotate-".concat(Ee), "undefined" !== typeof Ee && null !== Ee && 0 !== Ee), "fa-pull-".concat(ge), "undefined" !== typeof ge && null !== ge), "fa-swap-opacity", Oe), "fa-rotate-by", te && de), "fa-width-auto", te && We);
      return Object.keys(Ze).map((function(ee) {
        return Ze[ee] ? ee : null
      })).filter((function(ee) {
        return ee
      }))
    }

    function ze(ee) {
      return ie = ee, (ie -= 0) === ie ? ee : (ee = ee.replace(/[\-_\s]+(.)?/g, (function(ee, ie) {
        return ie ? ie.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + ee.substr(1);
      var ie
    }
    var Be = ["style"];
    var Ee = !1;
    try {
      Ee = !0
    } catch (Ze) {}

    function ge(ee) {
      return ee && "object" === qe(ee) && ee.prefix && ee.iconName && ee.icon ? ee : ye.parse.icon ? ye.parse.icon(ee) : null === ee ? null : ee && "object" === qe(ee) && ee.prefix && ee.iconName ? ee : Array.isArray(ee) && 2 === ee.length ? {
        prefix: ee[0],
        iconName: ee[1]
      } : "string" === typeof ee ? {
        prefix: "fas",
        iconName: ee
      } : void 0
    }

    function Oe(ee, ie) {
      return Array.isArray(ie) && ie.length > 0 || !Array.isArray(ie) && ie ? Fe({}, ee, ie) : {}
    }
    var de = {
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
      We = Ke.forwardRef((function(ee, ie) {
        var He = oe(oe({}, de), ee),
          be = He.icon,
          Me = He.mask,
          Ke = He.symbol,
          Ue = He.className,
          Fe = He.title,
          Je = He.titleId,
          Re = He.maskId,
          qe = ge(be),
          fe = Oe("classes", [].concat(ke(Xe(He)), ke((Ue || "").split(" ")))),
          Te = Oe("transform", "string" === typeof He.transform ? ye.parse.transform(He.transform) : He.transform),
          pe = Oe("mask", ge(Me)),
          ze = (0, ye.icon)(qe, oe(oe(oe(oe({}, fe), Te), pe), {}, {
            symbol: Ke,
            title: Fe,
            titleId: Je,
            maskId: Re
          }));
        if (!ze) return function() {
          var ee;
          !Ee && console && "function" === typeof console.error && (ee = console).error.apply(ee, arguments)
        }("Could not find icon", qe), null;
        var Be = ze.abstract,
          We = {
            ref: ie
          };
        return Object.keys(He).forEach((function(ee) {
          de.hasOwnProperty(ee) || (We[ee] = He[ee])
        })), te(Be[0], We)
      }));
    We.displayName = "FontAwesomeIcon", We.propTypes = {
      beat: Me().bool,
      border: Me().bool,
      beatFade: Me().bool,
      bounce: Me().bool,
      className: Me().string,
      fade: Me().bool,
      flash: Me().bool,
      mask: Me().oneOfType([Me().object, Me().array, Me().string]),
      maskId: Me().string,
      fixedWidth: Me().bool,
      inverse: Me().bool,
      flip: Me().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: Me().oneOfType([Me().object, Me().array, Me().string]),
      listItem: Me().bool,
      pull: Me().oneOf(["right", "left"]),
      pulse: Me().bool,
      rotation: Me().oneOf([0, 90, 180, 270]),
      rotateBy: Me().bool,
      shake: Me().bool,
      size: Me().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: Me().bool,
      spinPulse: Me().bool,
      spinReverse: Me().bool,
      symbol: Me().oneOfType([Me().bool, Me().string]),
      title: Me().string,
      titleId: Me().string,
      transform: Me().oneOfType([Me().string, Me().object]),
      swapOpacity: Me().bool,
      widthAuto: Me().bool
    };
    var te = function ee(ie, He) {
      var ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof He) return He;
      var be = (He.children || []).map((function(He) {
          return ee(ie, He)
        })),
        Me = Object.keys(He.attributes || {}).reduce((function(ee, ie) {
          var ye = He.attributes[ie];
          switch (ie) {
            case "class":
              ee.attrs.className = ye, delete He.attributes.class;
              break;
            case "style":
              ee.attrs.style = ye.split(";").map((function(ee) {
                return ee.trim()
              })).filter((function(ee) {
                return ee
              })).reduce((function(ee, ie) {
                var He, ye = ie.indexOf(":"),
                  be = ze(ie.slice(0, ye)),
                  Me = ie.slice(ye + 1).trim();
                return be.startsWith("webkit") ? ee[(He = be, He.charAt(0).toUpperCase() + He.slice(1))] = Me : ee[be] = Me, ee
              }), {});
              break;
            default:
              0 === ie.indexOf("aria-") || 0 === ie.indexOf("data-") ? ee.attrs[ie.toLowerCase()] = ye : ee.attrs[ze(ie)] = ye
          }
          return ee
        }), {
          attrs: {}
        }),
        Ke = ye.style,
        Ue = void 0 === Ke ? {} : Ke,
        Fe = function(ee, ie) {
          if (null == ee) return {};
          var He, ye, be = function(ee, ie) {
            if (null == ee) return {};
            var He = {};
            for (var ye in ee)
              if ({}.hasOwnProperty.call(ee, ye)) {
                if (-1 !== ie.indexOf(ye)) continue;
                He[ye] = ee[ye]
              } return He
          }(ee, ie);
          if (Object.getOwnPropertySymbols) {
            var Me = Object.getOwnPropertySymbols(ee);
            for (ye = 0; ye < Me.length; ye++) He = Me[ye], -1 === ie.indexOf(He) && {}.propertyIsEnumerable.call(ee, He) && (be[He] = ee[He])
          }
          return be
        }(ye, Be);
      return Me.attrs.style = oe(oe({}, Me.attrs.style), Ue), ie.apply(void 0, [He.tag, oe(oe({}, Me.attrs), Fe)].concat(ke(be)))
    }.bind(null, Ke.createElement)
  },
  5469: (ee, ie, He) => {
    var ye = He(5475);

    function be() {}

    function Me() {}
    Me.resetWarningCache = be, ee.exports = function() {
      function ee(ee, ie, He, be, Me, Ke) {
        if (Ke !== ye) {
          var Ue = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Ue.name = "Invariant Violation", Ue
        }
      }

      function ie() {
        return ee
      }
      ee.isRequired = ee;
      var He = {
        array: ee,
        bigint: ee,
        bool: ee,
        func: ee,
        number: ee,
        object: ee,
        string: ee,
        symbol: ee,
        any: ee,
        arrayOf: ie,
        element: ee,
        elementType: ee,
        instanceOf: ie,
        node: ee,
        objectOf: ie,
        oneOf: ie,
        oneOfType: ie,
        shape: ie,
        exact: ie,
        checkPropTypes: Me,
        resetWarningCache: be
      };
      return He.PropTypes = He, He
    }
  },
  5461: (ee, ie, He) => {
    ee.exports = He(5469)()
  },
  5475: ee => {
    ee.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7394: (ee, ie, He) => {
    function ye(ee, ie) {
      (null == ie || ie > ee.length) && (ie = ee.length);
      for (var He = 0, ye = Array(ie); He < ie; He++) ye[He] = ee[He];
      return ye
    }

    function be(ee, ie) {
      for (var He = 0; He < ie.length; He++) {
        var ye = ie[He];
        ye.enumerable = ye.enumerable || !1, ye.configurable = !0, "value" in ye && (ye.writable = !0), Object.defineProperty(ee, Re(ye.key), ye)
      }
    }

    function Me(ee, ie) {
      var He = "undefined" != typeof Symbol && ee[Symbol.iterator] || ee["@@iterator"];
      if (!He) {
        if (Array.isArray(ee) || (He = qe(ee)) || ie && ee && "number" == typeof ee.length) {
          He && (ee = He);
          var ye = 0,
            be = function() {};
          return {
            s: be,
            n: function() {
              return ye >= ee.length ? {
                done: !0
              } : {
                done: !1,
                value: ee[ye++]
              }
            },
            e: function(ee) {
              throw ee
            },
            f: be
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Me, Ke = !0,
        Ue = !1;
      return {
        s: function() {
          He = He.call(ee)
        },
        n: function() {
          var ee = He.next();
          return Ke = ee.done, ee
        },
        e: function(ee) {
          Ue = !0, Me = ee
        },
        f: function() {
          try {
            Ke || null == He.return || He.return()
          } finally {
            if (Ue) throw Me
          }
        }
      }
    }

    function Ke(ee, ie, He) {
      return (ie = Re(ie)) in ee ? Object.defineProperty(ee, ie, {
        value: He,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : ee[ie] = He, ee
    }

    function Ue(ee, ie) {
      var He = Object.keys(ee);
      if (Object.getOwnPropertySymbols) {
        var ye = Object.getOwnPropertySymbols(ee);
        ie && (ye = ye.filter((function(ie) {
          return Object.getOwnPropertyDescriptor(ee, ie).enumerable
        }))), He.push.apply(He, ye)
      }
      return He
    }

    function Fe(ee) {
      for (var ie = 1; ie < arguments.length; ie++) {
        var He = null != arguments[ie] ? arguments[ie] : {};
        ie % 2 ? Ue(Object(He), !0).forEach((function(ie) {
          Ke(ee, ie, He[ie])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ee, Object.getOwnPropertyDescriptors(He)) : Ue(Object(He)).forEach((function(ie) {
          Object.defineProperty(ee, ie, Object.getOwnPropertyDescriptor(He, ie))
        }))
      }
      return ee
    }

    function Je(ee, ie) {
      return function(ee) {
        if (Array.isArray(ee)) return ee
      }(ee) || function(ee, ie) {
        var He = null == ee ? null : "undefined" != typeof Symbol && ee[Symbol.iterator] || ee["@@iterator"];
        if (null != He) {
          var ye, be, Me, Ke, Ue = [],
            Fe = !0,
            Je = !1;
          try {
            if (Me = (He = He.call(ee)).next, 0 === ie) {
              if (Object(He) !== He) return;
              Fe = !1
            } else
              for (; !(Fe = (ye = Me.call(He)).done) && (Ue.push(ye.value), Ue.length !== ie); Fe = !0);
          } catch (ee) {
            Je = !0, be = ee
          } finally {
            try {
              if (!Fe && null != He.return && (Ke = He.return(), Object(Ke) !== Ke)) return
            } finally {
              if (Je) throw be
            }
          }
          return Ue
        }
      }(ee, ie) || qe(ee, ie) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function oe(ee) {
      return function(ee) {
        if (Array.isArray(ee)) return ye(ee)
      }(ee) || function(ee) {
        if ("undefined" != typeof Symbol && null != ee[Symbol.iterator] || null != ee["@@iterator"]) return Array.from(ee)
      }(ee) || qe(ee) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Re(ee) {
      var ie = function(ee, ie) {
        if ("object" != typeof ee || !ee) return ee;
        var He = ee[Symbol.toPrimitive];
        if (void 0 !== He) {
          var ye = He.call(ee, ie || "default");
          if ("object" != typeof ye) return ye;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === ie ? String : Number)(ee)
      }(ee, "string");
      return "symbol" == typeof ie ? ie : ie + ""
    }

    function ke(ee) {
      return ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(ee) {
        return typeof ee
      } : function(ee) {
        return ee && "function" == typeof Symbol && ee.constructor === Symbol && ee !== Symbol.prototype ? "symbol" : typeof ee
      }, ke(ee)
    }

    function qe(ee, ie) {
      if (ee) {
        if ("string" == typeof ee) return ye(ee, ie);
        var He = {}.toString.call(ee).slice(8, -1);
        return "Object" === He && ee.constructor && (He = ee.constructor.name), "Map" === He || "Set" === He ? Array.from(ee) : "Arguments" === He || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(He) ? ye(ee, ie) : void 0
      }
    }
    He.r(ie), He.d(ie, {
      api: () => rH,
      config: () => bb,
      counter: () => qb,
      dom: () => Kb,
      findIconDefinition: () => Fb,
      icon: () => ob,
      layer: () => Rb,
      library: () => Mb,
      noAuto: () => yb,
      parse: () => Ub,
      text: () => kb,
      toHtml: () => Jb
    });
    var fe = function() {},
      Te = {},
      pe = {},
      Xe = null,
      ze = {
        mark: fe,
        measure: fe
      };
    try {
      "undefined" !== typeof window && (Te = window), "undefined" !== typeof document && (pe = document), "undefined" !== typeof MutationObserver && (Xe = MutationObserver), "undefined" !== typeof performance && (ze = performance)
    } catch (Se) {}
    var Be, Ee, ge = (Te.navigator || {}).userAgent,
      Oe = void 0 === ge ? "" : ge,
      de = Te,
      We = pe,
      te = Xe,
      Ze = ze,
      we = (de.document, !!We.documentElement && !!We.head && "function" === typeof We.addEventListener && "function" === typeof We.createElement),
      De = ~Oe.indexOf("MSIE") || ~Oe.indexOf("Trident/"),
      Pe = {
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
      Ae = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      Ye = "classic",
      Ve = "duotone",
      ae = "sharp",
      ce = "sharp-duotone",
      xe = "chisel",
      Le = "etch",
      Ce = "graphite",
      ve = "jelly",
      ue = "jelly-duo",
      me = "jelly-fill",
      le = "notdog",
      Se = "notdog-duo",
      ne = "slab",
      je = "slab-press",
      se = "thumbprint",
      Ie = "utility",
      he = "utility-duo",
      Ne = "utility-fill",
      Ge = "whiteboard",
      re = [Ye, Ve, ae, ce, xe, Le, Ce, ve, ue, me, le, Se, ne, je, se, Ie, he, Ne, Ge],
      Qe = (Ke(Ke(Ke(Ke(Ke(Ke(Ke(Ke(Ke(Ke(Be = {}, Ye, "Classic"), Ve, "Duotone"), ae, "Sharp"), ce, "Sharp Duotone"), xe, "Chisel"), Le, "Etch"), Ce, "Graphite"), ve, "Jelly"), ue, "Jelly Duo"), me, "Jelly Fill"), Ke(Ke(Ke(Ke(Ke(Ke(Ke(Ke(Ke(Be, le, "Notdog"), Se, "Notdog Duo"), ne, "Slab"), je, "Slab Press"), se, "Thumbprint"), Ie, "Utility"), he, "Utility Duo"), Ne, "Utility Fill"), Ge, "Whiteboard"), new Map([
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
      ei = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      ii = {
        fak: "kit",
        "fa-kit": "kit"
      },
      Hi = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      yi = (Ke(Ke({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      bi = {
        "kit-duotone": "fakd"
      },
      Mi = "duotone-group",
      Ki = "swap-opacity",
      Ui = "primary",
      Fi = "secondary",
      Ji = (Ke(Ke(Ke(Ke(Ke(Ke(Ke(Ke(Ke(Ke(Ee = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), Ke(Ke(Ke(Ke(Ke(Ke(Ke(Ke(Ke(Ee, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), Ke(Ke({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      oi = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      Ri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      ki = Ri.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      qi = [].concat(oe(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", Mi, Ki, Ui, Fi]).concat(Ri.map((function(ee) {
        return "".concat(ee, "x")
      }))).concat(ki.map((function(ee) {
        return "w-".concat(ee)
      }))),
      fi = "___FONT_AWESOME___",
      Ti = "svg-inline--fa",
      Xi = "data-fa-i2svg",
      zi = "data-fa-pseudo-element",
      Bi = "data-prefix",
      Ei = "data-icon",
      gi = "fontawesome-i2svg",
      Oi = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      di = ["::before", "::after", ":before", ":after"],
      Wi = function() {
        try {
          return !0
        } catch (ee) {
          return !1
        }
      }();

    function ti(ee) {
      return new Proxy(ee, {
        get: function(ee, ie) {
          return ie in ee ? ee[ie] : ee[Ye]
        }
      })
    }
    var Zi = Fe({}, Pe);
    Zi[Ye] = Fe(Fe(Fe(Fe({}, {
      "fa-duotone": "duotone"
    }), Pe[Ye]), ii), Hi);
    var wi = ti(Zi),
      Di = Fe({}, {
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
    Di[Ye] = Fe(Fe(Fe(Fe({}, {
      duotone: "fad"
    }), Di[Ye]), yi), bi);
    var Pi = ti(Di),
      Ai = Fe({}, Ji);
    Ai[Ye] = Fe(Fe({}, Ai[Ye]), {
      fak: "fa-kit"
    });
    var Yi = ti(Ai),
      Vi = Fe({}, {
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
    Vi[Ye] = Fe(Fe({}, Vi[Ye]), {
      "fa-kit": "fak"
    });
    ti(Vi);
    var ai = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      ci = "fa-layers-text",
      xi = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Li = (ti(Fe({}, {
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
      Ci = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      vi = [].concat(oe(["kit"]), oe(qi)),
      ui = de.FontAwesomeConfig || {};
    if (We && "function" === typeof We.querySelector) {
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
      ].forEach((function(ee) {
        var ie = Je(ee, 2),
          He = ie[0],
          ye = ie[1],
          be = function(ee) {
            return "" === ee || "false" !== ee && ("true" === ee || ee)
          }(function(ee) {
            var ie = We.querySelector("script[" + ee + "]");
            if (ie) return ie.getAttribute(ee)
          }(He));
        void 0 !== be && null !== be && (ui[ye] = be)
      }))
    }
    var mi = {
      styleDefault: "solid",
      familyDefault: Ye,
      cssPrefix: "fa",
      replacementClass: Ti,
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
    ui.familyPrefix && (ui.cssPrefix = ui.familyPrefix);
    var li = Fe(Fe({}, mi), ui);
    li.autoReplaceSvg || (li.observeMutations = !1);
    var Si = {};
    Object.keys(mi).forEach((function(ee) {
      Object.defineProperty(Si, ee, {
        enumerable: !0,
        set: function(ie) {
          li[ee] = ie, ni.forEach((function(ee) {
            return ee(Si)
          }))
        },
        get: function() {
          return li[ee]
        }
      })
    })), Object.defineProperty(Si, "familyPrefix", {
      enumerable: !0,
      set: function(ee) {
        li.cssPrefix = ee, ni.forEach((function(ee) {
          return ee(Si)
        }))
      },
      get: function() {
        return li.cssPrefix
      }
    }), de.FontAwesomeConfig = Si;
    var ni = [];
    var ji = 16,
      si = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function Ii() {
      for (var ee = 12, ie = ""; ee-- > 0;) ie += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return ie
    }

    function Ni(ee) {
      for (var ie = [], He = (ee || []).length >>> 0; He--;) ie[He] = ee[He];
      return ie
    }

    function Gi(ee) {
      return ee.classList ? Ni(ee.classList) : (ee.getAttribute("class") || "").split(" ").filter((function(ee) {
        return ee
      }))
    }

    function ri(ee) {
      return "".concat(ee).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Qi(ee) {
      return Object.keys(ee || {}).reduce((function(ie, He) {
        return ie + "".concat(He, ": ").concat(ee[He].trim(), ";")
      }), "")
    }

    function eH(ee) {
      return ee.size !== si.size || ee.x !== si.x || ee.y !== si.y || ee.rotate !== si.rotate || ee.flipX || ee.flipY
    }

    function iH() {
      var ee = "fa",
        ie = Ti,
        He = Si.cssPrefix,
        ye = Si.replacementClass,
        be = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (He !== ee || ye !== ie) {
        var Me = new RegExp("\\.".concat(ee, "\\-"), "g"),
          Ke = new RegExp("\\--".concat(ee, "\\-"), "g"),
          Ue = new RegExp("\\.".concat(ie), "g");
        be = be.replace(Me, ".".concat(He, "-")).replace(Ke, "--".concat(He, "-")).replace(Ue, ".".concat(ye))
      }
      return be
    }
    var HH = !1;

    function yH() {
      Si.autoAddCss && !HH && (! function(ee) {
        if (ee && we) {
          var ie = We.createElement("style");
          ie.setAttribute("type", "text/css"), ie.innerHTML = ee;
          for (var He = We.head.childNodes, ye = null, be = He.length - 1; be > -1; be--) {
            var Me = He[be],
              Ke = (Me.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(Ke) > -1 && (ye = Me)
          }
          We.head.insertBefore(ie, ye)
        }
      }(iH()), HH = !0)
    }
    var bH = {
        mixout: function() {
          return {
            dom: {
              css: iH,
              insertCss: yH
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              yH()
            },
            beforeI2svg: function() {
              yH()
            }
          }
        }
      },
      MH = de || {};
    MH[fi] || (MH[fi] = {}), MH[fi].styles || (MH[fi].styles = {}), MH[fi].hooks || (MH[fi].hooks = {}), MH[fi].shims || (MH[fi].shims = []);
    var KH = MH[fi],
      UH = [],
      FH = function() {
        We.removeEventListener("DOMContentLoaded", FH), JH = 1, UH.map((function(ee) {
          return ee()
        }))
      },
      JH = !1;

    function oH(ee) {
      var ie = ee.tag,
        He = ee.attributes,
        ye = void 0 === He ? {} : He,
        be = ee.children,
        Me = void 0 === be ? [] : be;
      return "string" === typeof ee ? ri(ee) : "<".concat(ie, " ").concat(function(ee) {
        return Object.keys(ee || {}).reduce((function(ie, He) {
          return ie + "".concat(He, '="').concat(ri(ee[He]), '" ')
        }), "").trim()
      }(ye), ">").concat(Me.map(oH).join(""), "</").concat(ie, ">")
    }

    function RH(ee, ie, He) {
      if (ee && ee[ie] && ee[ie][He]) return {
        prefix: ie,
        iconName: He,
        icon: ee[ie][He]
      }
    }
    we && ((JH = (We.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(We.readyState)) || We.addEventListener("DOMContentLoaded", FH));
    var kH = function(ee, ie, He, ye) {
      var be, Me, Ke, Ue = Object.keys(ee),
        Fe = Ue.length,
        Je = void 0 !== ye ? function(ee, ie) {
          return function(He, ye, be, Me) {
            return ee.call(ie, He, ye, be, Me)
          }
        }(ie, ye) : ie;
      for (void 0 === He ? (be = 1, Ke = ee[Ue[0]]) : (be = 0, Ke = He); be < Fe; be++) Ke = Je(Ke, ee[Me = Ue[be]], Me, ee);
      return Ke
    };

    function qH(ee) {
      return 1 !== oe(ee).length ? null : ee.codePointAt(0).toString(16)
    }

    function fH(ee) {
      return Object.keys(ee).reduce((function(ie, He) {
        var ye = ee[He];
        return !!ye.icon ? ie[ye.iconName] = ye.icon : ie[He] = ye, ie
      }), {})
    }

    function TH(ee, ie) {
      var He = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        ye = void 0 !== He && He,
        be = fH(ie);
      "function" !== typeof KH.hooks.addPack || ye ? KH.styles[ee] = Fe(Fe({}, KH.styles[ee] || {}), be) : KH.hooks.addPack(ee, fH(ie)), "fas" === ee && TH("fa", ie)
    }
    var pH = KH.styles,
      XH = KH.shims,
      zH = Object.keys(Yi),
      BH = zH.reduce((function(ee, ie) {
        return ee[ie] = Object.keys(Yi[ie]), ee
      }), {}),
      EH = null,
      gH = {},
      OH = {},
      dH = {},
      WH = {},
      tH = {};

    function ZH(ee, ie) {
      var He, ye = ie.split("-"),
        be = ye[0],
        Me = ye.slice(1).join("-");
      return be !== ee || "" === Me || (He = Me, ~vi.indexOf(He)) ? null : Me
    }
    var wH, DH = function() {
      var ee = function(ee) {
        return kH(pH, (function(ie, He, ye) {
          return ie[ye] = kH(He, ee, {}), ie
        }), {})
      };
      gH = ee((function(ee, ie, He) {
        (ie[3] && (ee[ie[3]] = He), ie[2]) && ie[2].filter((function(ee) {
          return "number" === typeof ee
        })).forEach((function(ie) {
          ee[ie.toString(16)] = He
        }));
        return ee
      })), OH = ee((function(ee, ie, He) {
        (ee[He] = He, ie[2]) && ie[2].filter((function(ee) {
          return "string" === typeof ee
        })).forEach((function(ie) {
          ee[ie] = He
        }));
        return ee
      })), tH = ee((function(ee, ie, He) {
        var ye = ie[2];
        return ee[He] = He, ye.forEach((function(ie) {
          ee[ie] = He
        })), ee
      }));
      var ie = "far" in pH || Si.autoFetchSvg,
        He = kH(XH, (function(ee, He) {
          var ye = He[0],
            be = He[1],
            Me = He[2];
          return "far" !== be || ie || (be = "fas"), "string" === typeof ye && (ee.names[ye] = {
            prefix: be,
            iconName: Me
          }), "number" === typeof ye && (ee.unicodes[ye.toString(16)] = {
            prefix: be,
            iconName: Me
          }), ee
        }), {
          names: {},
          unicodes: {}
        });
      dH = He.names, WH = He.unicodes, EH = aH(Si.styleDefault, {
        family: Si.familyDefault
      })
    };

    function PH(ee, ie) {
      return (gH[ee] || {})[ie]
    }

    function AH(ee, ie) {
      return (tH[ee] || {})[ie]
    }

    function YH(ee) {
      return dH[ee] || {
        prefix: null,
        iconName: null
      }
    }

    function VH() {
      return EH
    }
    wH = function(ee) {
      EH = aH(ee.styleDefault, {
        family: Si.familyDefault
      })
    }, ni.push(wH), DH();

    function aH(ee) {
      var ie = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        He = void 0 === ie ? Ye : ie,
        ye = wi[He][ee];
      if (He === Ve && !ee) return "fad";
      var be = Pi[He][ee] || Pi[He][ye],
        Me = ee in KH.styles ? ee : null;
      return be || Me || null
    }

    function cH(ee) {
      return ee.sort().filter((function(ee, ie, He) {
        return He.indexOf(ee) === ie
      }))
    }
    var xH = oi.concat(ei);

    function LH(ee) {
      var ie = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        He = void 0 !== ie && ie,
        ye = null,
        be = cH(ee.filter((function(ee) {
          return xH.includes(ee)
        }))),
        Me = cH(ee.filter((function(ee) {
          return !xH.includes(ee)
        }))),
        Ke = Je(be.filter((function(ee) {
          return ye = ee, !Ae.includes(ee)
        })), 1)[0],
        Ue = void 0 === Ke ? null : Ke,
        oe = function(ee) {
          var ie = Ye,
            He = zH.reduce((function(ee, ie) {
              return ee[ie] = "".concat(Si.cssPrefix, "-").concat(ie), ee
            }), {});
          return re.forEach((function(ye) {
            (ee.includes(He[ye]) || ee.some((function(ee) {
              return BH[ye].includes(ee)
            }))) && (ie = ye)
          })), ie
        }(be),
        Re = Fe(Fe({}, function(ee) {
          var ie = [],
            He = null;
          return ee.forEach((function(ee) {
            var ye = ZH(Si.cssPrefix, ee);
            ye ? He = ye : ee && ie.push(ee)
          })), {
            iconName: He,
            rest: ie
          }
        }(Me)), {}, {
          prefix: aH(Ue, {
            family: oe
          })
        });
      return Fe(Fe(Fe({}, Re), function(ee) {
        var ie = ee.values,
          He = ee.family,
          ye = ee.canonical,
          be = ee.givenPrefix,
          Me = void 0 === be ? "" : be,
          Ke = ee.styles,
          Ue = void 0 === Ke ? {} : Ke,
          Fe = ee.config,
          Je = void 0 === Fe ? {} : Fe,
          oe = He === Ve,
          Re = ie.includes("fa-duotone") || ie.includes("fad"),
          ke = "duotone" === Je.familyDefault,
          qe = "fad" === ye.prefix || "fa-duotone" === ye.prefix;
        !oe && (Re || ke || qe) && (ye.prefix = "fad");
        (ie.includes("fa-brands") || ie.includes("fab")) && (ye.prefix = "fab");
        if (!ye.prefix && CH.includes(He)) {
          if (Object.keys(Ue).find((function(ee) {
              return vH.includes(ee)
            })) || Je.autoFetchSvg) {
            var fe = Qe.get(He).defaultShortPrefixId;
            ye.prefix = fe, ye.iconName = AH(ye.prefix, ye.iconName) || ye.iconName
          }
        }
        "fa" !== ye.prefix && "fa" !== Me || (ye.prefix = VH() || "fas");
        return ye
      }({
        values: ee,
        family: oe,
        styles: pH,
        config: Si,
        canonical: Re,
        givenPrefix: ye
      })), function(ee, ie, He) {
        var ye = He.prefix,
          be = He.iconName;
        if (ee || !ye || !be) return {
          prefix: ye,
          iconName: be
        };
        var Me = "fa" === ie ? YH(be) : {},
          Ke = AH(ye, be);
        be = Me.iconName || Ke || be, "far" !== (ye = Me.prefix || ye) || pH.far || !pH.fas || Si.autoFetchSvg || (ye = "fas");
        return {
          prefix: ye,
          iconName: be
        }
      }(He, ye, Re))
    }
    var CH = re.filter((function(ee) {
        return ee !== Ye || ee !== Ve
      })),
      vH = Object.keys(Ji).filter((function(ee) {
        return ee !== Ye
      })).map((function(ee) {
        return Object.keys(Ji[ee])
      })).flat();
    var uH = function() {
        return function(ee, ie, He) {
          return ie && be(ee.prototype, ie), He && be(ee, He), Object.defineProperty(ee, "prototype", {
            writable: !1
          }), ee
        }((function ee() {
          ! function(ee, ie) {
            if (!(ee instanceof ie)) throw new TypeError("Cannot call a class as a function")
          }(this, ee), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var ee = this, ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
            var be = He.reduce(this._pullDefinitions, {});
            Object.keys(be).forEach((function(ie) {
              ee.definitions[ie] = Fe(Fe({}, ee.definitions[ie] || {}), be[ie]), TH(ie, be[ie]);
              var He = Yi[Ye][ie];
              He && TH(He, be[ie]), DH()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(ee, ie) {
            var He = ie.prefix && ie.iconName && ie.icon ? {
              0: ie
            } : ie;
            return Object.keys(He).map((function(ie) {
              var ye = He[ie],
                be = ye.prefix,
                Me = ye.iconName,
                Ke = ye.icon,
                Ue = Ke[2];
              ee[be] || (ee[be] = {}), Ue.length > 0 && Ue.forEach((function(ie) {
                "string" === typeof ie && (ee[be][ie] = Ke)
              })), ee[be][Me] = Ke
            })), ee
          }
        }])
      }(),
      mH = [],
      lH = {},
      SH = {},
      nH = Object.keys(SH);

    function jH(ee, ie) {
      for (var He = arguments.length, ye = new Array(He > 2 ? He - 2 : 0), be = 2; be < He; be++) ye[be - 2] = arguments[be];
      return (lH[ee] || []).forEach((function(ee) {
        ie = ee.apply(null, [ie].concat(ye))
      })), ie
    }

    function sH(ee) {
      for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
      (lH[ee] || []).forEach((function(ee) {
        ee.apply(null, He)
      }))
    }

    function IH() {
      var ee = arguments[0],
        ie = Array.prototype.slice.call(arguments, 1);
      return SH[ee] ? SH[ee].apply(null, ie) : void 0
    }

    function hH(ee) {
      "fa" === ee.prefix && (ee.prefix = "fas");
      var ie = ee.iconName,
        He = ee.prefix || VH();
      if (ie) return ie = AH(He, ie) || ie, RH(NH.definitions, He, ie) || RH(KH.styles, He, ie)
    }
    var NH = new uH,
      GH = {
        i2svg: function() {
          var ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return we ? (sH("beforeI2svg", ee), IH("pseudoElements2svg", ee), IH("i2svg", ee)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var ee, ie = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            He = ie.autoReplaceSvgRoot;
          !1 === Si.autoReplaceSvg && (Si.autoReplaceSvg = !0), Si.observeMutations = !0, ee = function() {
            QH({
              autoReplaceSvgRoot: He
            }), sH("watch", ie)
          }, we && (JH ? setTimeout(ee, 0) : UH.push(ee))
        }
      },
      rH = {
        noAuto: function() {
          Si.autoReplaceSvg = !1, Si.observeMutations = !1, sH("noAuto")
        },
        config: Si,
        dom: GH,
        parse: {
          icon: function(ee) {
            if (null === ee) return null;
            if ("object" === ke(ee) && ee.prefix && ee.iconName) return {
              prefix: ee.prefix,
              iconName: AH(ee.prefix, ee.iconName) || ee.iconName
            };
            if (Array.isArray(ee) && 2 === ee.length) {
              var ie = 0 === ee[1].indexOf("fa-") ? ee[1].slice(3) : ee[1],
                He = aH(ee[0]);
              return {
                prefix: He,
                iconName: AH(He, ie) || ie
              }
            }
            if ("string" === typeof ee && (ee.indexOf("".concat(Si.cssPrefix, "-")) > -1 || ee.match(ai))) {
              var ye = LH(ee.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: ye.prefix || VH(),
                iconName: AH(ye.prefix, ye.iconName) || ye.iconName
              }
            }
            if ("string" === typeof ee) {
              var be = VH();
              return {
                prefix: be,
                iconName: AH(be, ee) || ee
              }
            }
          }
        },
        library: NH,
        findIconDefinition: hH,
        toHtml: oH
      },
      QH = function() {
        var ee = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          ie = void 0 === ee ? We : ee;
        (Object.keys(KH.styles).length > 0 || Si.autoFetchSvg) && we && Si.autoReplaceSvg && rH.dom.i2svg({
          node: ie
        })
      };

    function ey(ee, ie) {
      return Object.defineProperty(ee, "abstract", {
        get: ie
      }), Object.defineProperty(ee, "html", {
        get: function() {
          return ee.abstract.map((function(ee) {
            return oH(ee)
          }))
        }
      }), Object.defineProperty(ee, "node", {
        get: function() {
          if (we) {
            var ie = We.createElement("div");
            return ie.innerHTML = ee.html, ie.children
          }
        }
      }), ee
    }

    function iy(ee) {
      var ie = ee.icons,
        He = ie.main,
        ye = ie.mask,
        be = ee.prefix,
        Me = ee.iconName,
        Ke = ee.transform,
        Ue = ee.symbol,
        Je = ee.maskId,
        oe = ee.extra,
        Re = ee.watchable,
        ke = void 0 !== Re && Re,
        qe = ye.found ? ye : He,
        fe = qe.width,
        Te = qe.height,
        pe = [Si.replacementClass, Me ? "".concat(Si.cssPrefix, "-").concat(Me) : ""].filter((function(ee) {
          return -1 === oe.classes.indexOf(ee)
        })).filter((function(ee) {
          return "" !== ee || !!ee
        })).concat(oe.classes).join(" "),
        Xe = {
          children: [],
          attributes: Fe(Fe({}, oe.attributes), {}, {
            "data-prefix": be,
            "data-icon": Me,
            class: pe,
            role: oe.attributes.role || "img",
            viewBox: "0 0 ".concat(fe, " ").concat(Te)
          })
        };
      (function(ee) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(ie) {
          return ie in ee
        }))
      })(oe.attributes) || oe.attributes["aria-hidden"] || (Xe.attributes["aria-hidden"] = "true"), ke && (Xe.attributes[Xi] = "");
      var ze = Fe(Fe({}, Xe), {}, {
          prefix: be,
          iconName: Me,
          main: He,
          mask: ye,
          maskId: Je,
          transform: Ke,
          symbol: Ue,
          styles: Fe({}, oe.styles)
        }),
        Be = ye.found && He.found ? IH("generateAbstractMask", ze) || {
          children: [],
          attributes: {}
        } : IH("generateAbstractIcon", ze) || {
          children: [],
          attributes: {}
        },
        Ee = Be.children,
        ge = Be.attributes;
      return ze.children = Ee, ze.attributes = ge, Ue ? function(ee) {
        var ie = ee.prefix,
          He = ee.iconName,
          ye = ee.children,
          be = ee.attributes,
          Me = ee.symbol,
          Ke = !0 === Me ? "".concat(ie, "-").concat(Si.cssPrefix, "-").concat(He) : Me;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: Fe(Fe({}, be), {}, {
              id: Ke
            }),
            children: ye
          }]
        }]
      }(ze) : function(ee) {
        var ie = ee.children,
          He = ee.main,
          ye = ee.mask,
          be = ee.attributes,
          Me = ee.styles,
          Ke = ee.transform;
        if (eH(Ke) && He.found && !ye.found) {
          var Ue = {
            x: He.width / He.height / 2,
            y: .5
          };
          be.style = Qi(Fe(Fe({}, Me), {}, {
            "transform-origin": "".concat(Ue.x + Ke.x / 16, "em ").concat(Ue.y + Ke.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: be,
          children: ie
        }]
      }(ze)
    }

    function Hy(ee) {
      var ie = ee.content,
        He = ee.width,
        ye = ee.height,
        be = ee.transform,
        Me = ee.extra,
        Ke = ee.watchable,
        Ue = void 0 !== Ke && Ke,
        Je = Fe(Fe({}, Me.attributes), {}, {
          class: Me.classes.join(" ")
        });
      Ue && (Je[Xi] = "");
      var oe = Fe({}, Me.styles);
      eH(be) && (oe.transform = function(ee) {
        var ie = ee.transform,
          He = ee.width,
          ye = void 0 === He ? 16 : He,
          be = ee.height,
          Me = void 0 === be ? 16 : be,
          Ke = ee.startCentered,
          Ue = void 0 !== Ke && Ke,
          Fe = "";
        return Fe += Ue && De ? "translate(".concat(ie.x / ji - ye / 2, "em, ").concat(ie.y / ji - Me / 2, "em) ") : Ue ? "translate(calc(-50% + ".concat(ie.x / ji, "em), calc(-50% + ").concat(ie.y / ji, "em)) ") : "translate(".concat(ie.x / ji, "em, ").concat(ie.y / ji, "em) "), Fe += "scale(".concat(ie.size / ji * (ie.flipX ? -1 : 1), ", ").concat(ie.size / ji * (ie.flipY ? -1 : 1), ") "), Fe + "rotate(".concat(ie.rotate, "deg) ")
      }({
        transform: be,
        startCentered: !0,
        width: He,
        height: ye
      }), oe["-webkit-transform"] = oe.transform);
      var Re = Qi(oe);
      Re.length > 0 && (Je.style = Re);
      var ke = [];
      return ke.push({
        tag: "span",
        attributes: Je,
        children: [ie]
      }), ke
    }
    var yy = KH.styles;

    function by(ee) {
      var ie = ee[0],
        He = ee[1],
        ye = Je(ee.slice(4), 1)[0];
      return {
        found: !0,
        width: ie,
        height: He,
        icon: Array.isArray(ye) ? {
          tag: "g",
          attributes: {
            class: "".concat(Si.cssPrefix, "-").concat(Ci.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(Si.cssPrefix, "-").concat(Ci.SECONDARY),
              fill: "currentColor",
              d: ye[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(Si.cssPrefix, "-").concat(Ci.PRIMARY),
              fill: "currentColor",
              d: ye[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: ye
          }
        }
      }
    }
    var My = {
      found: !1,
      width: 512,
      height: 512
    };

    function Ky(ee, ie) {
      var He = ie;
      return "fa" === ie && null !== Si.styleDefault && (ie = VH()), new Promise((function(ye, be) {
        if ("fa" === He) {
          var Me = YH(ee) || {};
          ee = Me.iconName || ee, ie = Me.prefix || ie
        }
        if (ee && ie && yy[ie] && yy[ie][ee]) return ye(by(yy[ie][ee]));
        ! function(ee, ie) {
          Wi || Si.showMissingIcons || !ee || console.error('Icon with name "'.concat(ee, '" and prefix "').concat(ie, '" is missing.'))
        }(ee, ie), ye(Fe(Fe({}, My), {}, {
          icon: Si.showMissingIcons && ee && IH("missingIconAbstract") || {}
        }))
      }))
    }
    var Uy = function() {},
      Fy = Si.measurePerformance && Ze && Ze.mark && Ze.measure ? Ze : {
        mark: Uy,
        measure: Uy
      },
      Jy = 'FA "7.2.0"',
      oy = function(ee) {
        Fy.mark("".concat(Jy, " ").concat(ee, " ends")), Fy.measure("".concat(Jy, " ").concat(ee), "".concat(Jy, " ").concat(ee, " begins"), "".concat(Jy, " ").concat(ee, " ends"))
      },
      Ry = function(ee) {
        return Fy.mark("".concat(Jy, " ").concat(ee, " begins")),
          function() {
            return oy(ee)
          }
      },
      ky = function() {};

    function qy(ee) {
      return "string" === typeof(ee.getAttribute ? ee.getAttribute(Xi) : null)
    }

    function fy(ee) {
      return We.createElementNS("http://www.w3.org/2000/svg", ee)
    }

    function Ty(ee) {
      return We.createElement(ee)
    }

    function py(ee) {
      var ie = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        He = void 0 === ie ? "svg" === ee.tag ? fy : Ty : ie;
      if ("string" === typeof ee) return We.createTextNode(ee);
      var ye = He(ee.tag);
      return Object.keys(ee.attributes || []).forEach((function(ie) {
        ye.setAttribute(ie, ee.attributes[ie])
      })), (ee.children || []).forEach((function(ee) {
        ye.appendChild(py(ee, {
          ceFn: He
        }))
      })), ye
    }
    var Xy = {
      replace: function(ee) {
        var ie = ee[0];
        if (ie.parentNode)
          if (ee[1].forEach((function(ee) {
              ie.parentNode.insertBefore(py(ee), ie)
            })), null === ie.getAttribute(Xi) && Si.keepOriginalSource) {
            var He = We.createComment(function(ee) {
              var ie = " ".concat(ee.outerHTML, " ");
              return "".concat(ie, "Font Awesome fontawesome.com ")
            }(ie));
            ie.parentNode.replaceChild(He, ie)
          } else ie.remove()
      },
      nest: function(ee) {
        var ie = ee[0],
          He = ee[1];
        if (~Gi(ie).indexOf(Si.replacementClass)) return Xy.replace(ee);
        var ye = new RegExp("".concat(Si.cssPrefix, "-.*"));
        if (delete He[0].attributes.id, He[0].attributes.class) {
          var be = He[0].attributes.class.split(" ").reduce((function(ee, ie) {
            return ie === Si.replacementClass || ie.match(ye) ? ee.toSvg.push(ie) : ee.toNode.push(ie), ee
          }), {
            toNode: [],
            toSvg: []
          });
          He[0].attributes.class = be.toSvg.join(" "), 0 === be.toNode.length ? ie.removeAttribute("class") : ie.setAttribute("class", be.toNode.join(" "))
        }
        var Me = He.map((function(ee) {
          return oH(ee)
        })).join("\n");
        ie.setAttribute(Xi, ""), ie.innerHTML = Me
      }
    };

    function zy(ee) {
      ee()
    }

    function By(ee, ie) {
      var He = "function" === typeof ie ? ie : ky;
      if (0 === ee.length) He();
      else {
        var ye = zy;
        "async" === Si.mutateApproach && (ye = de.requestAnimationFrame || zy), ye((function() {
          var ie = !0 === Si.autoReplaceSvg ? Xy.replace : Xy[Si.autoReplaceSvg] || Xy.replace,
            ye = Ry("mutate");
          ee.map(ie), ye(), He()
        }))
      }
    }
    var Ey = !1;

    function gy() {
      Ey = !0
    }

    function Oy() {
      Ey = !1
    }
    var dy = null;

    function Wy(ee) {
      if (te && Si.observeMutations) {
        var ie = ee.treeCallback,
          He = void 0 === ie ? ky : ie,
          ye = ee.nodeCallback,
          be = void 0 === ye ? ky : ye,
          Me = ee.pseudoElementsCallback,
          Ke = void 0 === Me ? ky : Me,
          Ue = ee.observeMutationsRoot,
          Fe = void 0 === Ue ? We : Ue;
        dy = new te((function(ee) {
          if (!Ey) {
            var ie = VH();
            Ni(ee).forEach((function(ee) {
              if ("childList" === ee.type && ee.addedNodes.length > 0 && !qy(ee.addedNodes[0]) && (Si.searchPseudoElements && Ke(ee.target), He(ee.target)), "attributes" === ee.type && ee.target.parentNode && Si.searchPseudoElements && Ke([ee.target], !0), "attributes" === ee.type && qy(ee.target) && ~Li.indexOf(ee.attributeName))
                if ("class" === ee.attributeName && function(ee) {
                    var ie = ee.getAttribute ? ee.getAttribute(Bi) : null,
                      He = ee.getAttribute ? ee.getAttribute(Ei) : null;
                    return ie && He
                  }(ee.target)) {
                  var ye = LH(Gi(ee.target)),
                    Me = ye.prefix,
                    Ue = ye.iconName;
                  ee.target.setAttribute(Bi, Me || ie), Ue && ee.target.setAttribute(Ei, Ue)
                } else(Fe = ee.target) && Fe.classList && Fe.classList.contains && Fe.classList.contains(Si.replacementClass) && be(ee.target);
              var Fe
            }))
          }
        })), we && dy.observe(Fe, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function ty(ee) {
      var ie, He, ye = ee.getAttribute("data-prefix"),
        be = ee.getAttribute("data-icon"),
        Me = void 0 !== ee.innerText ? ee.innerText.trim() : "",
        Ke = LH(Gi(ee));
      return Ke.prefix || (Ke.prefix = VH()), ye && be && (Ke.prefix = ye, Ke.iconName = be), Ke.iconName && Ke.prefix || (Ke.prefix && Me.length > 0 && (Ke.iconName = (ie = Ke.prefix, He = ee.innerText, (OH[ie] || {})[He] || PH(Ke.prefix, qH(ee.innerText)))), !Ke.iconName && Si.autoFetchSvg && ee.firstChild && ee.firstChild.nodeType === Node.TEXT_NODE && (Ke.iconName = ee.firstChild.data)), Ke
    }

    function Zy(ee) {
      var ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        He = ty(ee),
        ye = He.iconName,
        be = He.prefix,
        Me = He.rest,
        Ke = function(ee) {
          return Ni(ee.attributes).reduce((function(ee, ie) {
            return "class" !== ee.name && "style" !== ee.name && (ee[ie.name] = ie.value), ee
          }), {})
        }(ee),
        Ue = jH("parseNodeAttributes", {}, ee),
        Je = ie.styleParser ? function(ee) {
          var ie = ee.getAttribute("style"),
            He = [];
          return ie && (He = ie.split(";").reduce((function(ee, ie) {
            var He = ie.split(":"),
              ye = He[0],
              be = He.slice(1);
            return ye && be.length > 0 && (ee[ye] = be.join(":").trim()), ee
          }), {})), He
        }(ee) : [];
      return Fe({
        iconName: ye,
        prefix: be,
        transform: si,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: Me,
          styles: Je,
          attributes: Ke
        }
      }, Ue)
    }
    var wy = KH.styles;

    function Dy(ee) {
      var ie = "nest" === Si.autoReplaceSvg ? Zy(ee, {
        styleParser: !1
      }) : Zy(ee);
      return ~ie.extra.classes.indexOf(ci) ? IH("generateLayersText", ee, ie) : IH("generateSvgReplacementMutation", ee, ie)
    }

    function Py(ee) {
      var ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!we) return Promise.resolve();
      var He = We.documentElement.classList,
        ye = function(ee) {
          return He.add("".concat(gi, "-").concat(ee))
        },
        be = function(ee) {
          return He.remove("".concat(gi, "-").concat(ee))
        },
        Me = Si.autoFetchSvg ? [].concat(oe(ei), oe(oi)) : Ae.concat(Object.keys(wy));
      Me.includes("fa") || Me.push("fa");
      var Ke = [".".concat(ci, ":not([").concat(Xi, "])")].concat(Me.map((function(ee) {
        return ".".concat(ee, ":not([").concat(Xi, "])")
      }))).join(", ");
      if (0 === Ke.length) return Promise.resolve();
      var Ue = [];
      try {
        Ue = Ni(ee.querySelectorAll(Ke))
      } catch (Re) {}
      if (!(Ue.length > 0)) return Promise.resolve();
      ye("pending"), be("complete");
      var Fe = Ry("onTree"),
        Je = Ue.reduce((function(ee, ie) {
          try {
            var He = Dy(ie);
            He && ee.push(He)
          } catch (Re) {
            Wi || "MissingIcon" === Re.name && console.error(Re)
          }
          return ee
        }), []);
      return new Promise((function(ee, He) {
        Promise.all(Je).then((function(He) {
          By(He, (function() {
            ye("active"), ye("complete"), be("pending"), "function" === typeof ie && ie(), Fe(), ee()
          }))
        })).catch((function(ee) {
          Fe(), He(ee)
        }))
      }))
    }

    function Ay(ee) {
      var ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      Dy(ee).then((function(ee) {
        ee && By([ee], ie)
      }))
    }
    var Yy = function(ee) {
        var ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          He = ie.transform,
          ye = void 0 === He ? si : He,
          be = ie.symbol,
          Me = void 0 !== be && be,
          Ke = ie.mask,
          Ue = void 0 === Ke ? null : Ke,
          Je = ie.maskId,
          oe = void 0 === Je ? null : Je,
          Re = ie.classes,
          ke = void 0 === Re ? [] : Re,
          qe = ie.attributes,
          fe = void 0 === qe ? {} : qe,
          Te = ie.styles,
          pe = void 0 === Te ? {} : Te;
        if (ee) {
          var Xe = ee.prefix,
            ze = ee.iconName,
            Be = ee.icon;
          return ey(Fe({
            type: "icon"
          }, ee), (function() {
            return sH("beforeDOMElementCreation", {
              iconDefinition: ee,
              params: ie
            }), iy({
              icons: {
                main: by(Be),
                mask: Ue ? by(Ue.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: Xe,
              iconName: ze,
              transform: Fe(Fe({}, si), ye),
              symbol: Me,
              maskId: oe,
              extra: {
                attributes: fe,
                styles: pe,
                classes: ke
              }
            })
          }))
        }
      },
      Vy = {
        mixout: function() {
          return {
            icon: (ee = Yy, function(ie) {
              var He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                ye = (ie || {}).icon ? ie : hH(ie || {}),
                be = He.mask;
              return be && (be = (be || {}).icon ? be : hH(be || {})), ee(ye, Fe(Fe({}, He), {}, {
                mask: be
              }))
            })
          };
          var ee
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(ee) {
              return ee.treeCallback = Py, ee.nodeCallback = Ay, ee
            }
          }
        },
        provides: function(ee) {
          ee.i2svg = function(ee) {
            var ie = ee.node,
              He = void 0 === ie ? We : ie,
              ye = ee.callback;
            return Py(He, void 0 === ye ? function() {} : ye)
          }, ee.generateSvgReplacementMutation = function(ee, ie) {
            var He = ie.iconName,
              ye = ie.prefix,
              be = ie.transform,
              Me = ie.symbol,
              Ke = ie.mask,
              Ue = ie.maskId,
              Fe = ie.extra;
            return new Promise((function(ie, oe) {
              Promise.all([Ky(He, ye), Ke.iconName ? Ky(Ke.iconName, Ke.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(Ke) {
                var oe = Je(Ke, 2),
                  Re = oe[0],
                  ke = oe[1];
                ie([ee, iy({
                  icons: {
                    main: Re,
                    mask: ke
                  },
                  prefix: ye,
                  iconName: He,
                  transform: be,
                  symbol: Me,
                  maskId: Ue,
                  extra: Fe,
                  watchable: !0
                })])
              })).catch(oe)
            }))
          }, ee.generateAbstractIcon = function(ee) {
            var ie, He = ee.children,
              ye = ee.attributes,
              be = ee.main,
              Me = ee.transform,
              Ke = Qi(ee.styles);
            return Ke.length > 0 && (ye.style = Ke), eH(Me) && (ie = IH("generateAbstractTransformGrouping", {
              main: be,
              transform: Me,
              containerWidth: be.width,
              iconWidth: be.width
            })), He.push(ie || be.icon), {
              children: He,
              attributes: ye
            }
          }
        }
      },
      ay = {
        mixout: function() {
          return {
            layer: function(ee) {
              var ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                He = ie.classes,
                ye = void 0 === He ? [] : He;
              return ey({
                type: "layer"
              }, (function() {
                sH("beforeDOMElementCreation", {
                  assembler: ee,
                  params: ie
                });
                var He = [];
                return ee((function(ee) {
                  Array.isArray(ee) ? ee.map((function(ee) {
                    He = He.concat(ee.abstract)
                  })) : He = He.concat(ee.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(Si.cssPrefix, "-layers")].concat(oe(ye)).join(" ")
                  },
                  children: He
                }]
              }))
            }
          }
        }
      },
      cy = {
        mixout: function() {
          return {
            counter: function(ee) {
              var ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                He = ie.title,
                ye = void 0 === He ? null : He,
                be = ie.classes,
                Me = void 0 === be ? [] : be,
                Ke = ie.attributes,
                Ue = void 0 === Ke ? {} : Ke,
                Je = ie.styles,
                Re = void 0 === Je ? {} : Je;
              return ey({
                type: "counter",
                content: ee
              }, (function() {
                return sH("beforeDOMElementCreation", {
                    content: ee,
                    params: ie
                  }),
                  function(ee) {
                    var ie = ee.content,
                      He = ee.extra,
                      ye = Fe(Fe({}, He.attributes), {}, {
                        class: He.classes.join(" ")
                      }),
                      be = Qi(He.styles);
                    be.length > 0 && (ye.style = be);
                    var Me = [];
                    return Me.push({
                      tag: "span",
                      attributes: ye,
                      children: [ie]
                    }), Me
                  }({
                    content: ee.toString(),
                    title: ye,
                    extra: {
                      attributes: Ue,
                      styles: Re,
                      classes: ["".concat(Si.cssPrefix, "-layers-counter")].concat(oe(Me))
                    }
                  })
              }))
            }
          }
        }
      },
      xy = {
        mixout: function() {
          return {
            text: function(ee) {
              var ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                He = ie.transform,
                ye = void 0 === He ? si : He,
                be = ie.classes,
                Me = void 0 === be ? [] : be,
                Ke = ie.attributes,
                Ue = void 0 === Ke ? {} : Ke,
                Je = ie.styles,
                Re = void 0 === Je ? {} : Je;
              return ey({
                type: "text",
                content: ee
              }, (function() {
                return sH("beforeDOMElementCreation", {
                  content: ee,
                  params: ie
                }), Hy({
                  content: ee,
                  transform: Fe(Fe({}, si), ye),
                  extra: {
                    attributes: Ue,
                    styles: Re,
                    classes: ["".concat(Si.cssPrefix, "-layers-text")].concat(oe(Me))
                  }
                })
              }))
            }
          }
        },
        provides: function(ee) {
          ee.generateLayersText = function(ee, ie) {
            var He = ie.transform,
              ye = ie.extra,
              be = null,
              Me = null;
            if (De) {
              var Ke = parseInt(getComputedStyle(ee).fontSize, 10),
                Ue = ee.getBoundingClientRect();
              be = Ue.width / Ke, Me = Ue.height / Ke
            }
            return Promise.resolve([ee, Hy({
              content: ee.innerHTML,
              width: be,
              height: Me,
              transform: He,
              extra: ye,
              watchable: !0
            })])
          }
        }
      },
      Ly = new RegExp('"', "ug"),
      Cy = [1105920, 1112319],
      vy = Fe(Fe(Fe(Fe({}, {
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
      uy = Object.keys(vy).reduce((function(ee, ie) {
        return ee[ie.toLowerCase()] = vy[ie], ee
      }), {}),
      my = Object.keys(uy).reduce((function(ee, ie) {
        var He = uy[ie];
        return ee[ie] = He[900] || oe(Object.entries(He))[0][1], ee
      }), {});

    function ly(ee, ie) {
      var He = "".concat("data-fa-pseudo-element-pending").concat(ie.replace(":", "-"));
      return new Promise((function(ye, be) {
        if (null !== ee.getAttribute(He)) return ye();
        var Me = Ni(ee.children).filter((function(ee) {
            return ee.getAttribute(zi) === ie
          }))[0],
          Ke = de.getComputedStyle(ee, ie),
          Ue = Ke.getPropertyValue("font-family"),
          Je = Ue.match(xi),
          Re = Ke.getPropertyValue("font-weight"),
          ke = Ke.getPropertyValue("content");
        if (Me && !Je) return ee.removeChild(Me), ye();
        if (Je && "none" !== ke && "" !== ke) {
          var qe = Ke.getPropertyValue("content"),
            fe = function(ee, ie) {
              var He = ee.replace(/^['"]|['"]$/g, "").toLowerCase(),
                ye = parseInt(ie),
                be = isNaN(ye) ? "normal" : ye;
              return (uy[He] || {})[be] || my[He]
            }(Ue, Re),
            Te = function(ee) {
              return qH(oe(ee.replace(Ly, ""))[0] || "")
            }(qe),
            pe = Je[0].startsWith("FontAwesome"),
            Xe = function(ee) {
              var ie = ee.getPropertyValue("font-feature-settings").includes("ss01"),
                He = ee.getPropertyValue("content").replace(Ly, ""),
                ye = He.codePointAt(0),
                be = ye >= Cy[0] && ye <= Cy[1],
                Me = 2 === He.length && He[0] === He[1];
              return be || Me || ie
            }(Ke),
            ze = PH(fe, Te),
            Be = ze;
          if (pe) {
            var Ee = function(ee) {
              var ie = WH[ee],
                He = PH("fas", ee);
              return ie || (He ? {
                prefix: "fas",
                iconName: He
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(Te);
            Ee.iconName && Ee.prefix && (ze = Ee.iconName, fe = Ee.prefix)
          }
          if (!ze || Xe || Me && Me.getAttribute(Bi) === fe && Me.getAttribute(Ei) === Be) ye();
          else {
            ee.setAttribute(He, Be), Me && ee.removeChild(Me);
            var ge = {
                iconName: null,
                prefix: null,
                transform: si,
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
              Oe = ge.extra;
            Oe.attributes[zi] = ie, Ky(ze, fe).then((function(be) {
              var Me = iy(Fe(Fe({}, ge), {}, {
                  icons: {
                    main: be,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: fe,
                  iconName: Be,
                  extra: Oe,
                  watchable: !0
                })),
                Ke = We.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === ie ? ee.insertBefore(Ke, ee.firstChild) : ee.appendChild(Ke), Ke.outerHTML = Me.map((function(ee) {
                return oH(ee)
              })).join("\n"), ee.removeAttribute(He), ye()
            })).catch(be)
          }
        } else ye()
      }))
    }

    function Sy(ee) {
      return Promise.all([ly(ee, "::before"), ly(ee, "::after")])
    }

    function ny(ee) {
      return ee.parentNode !== document.head && !~Oi.indexOf(ee.tagName.toUpperCase()) && !ee.getAttribute(zi) && (!ee.parentNode || "svg" !== ee.parentNode.tagName)
    }
    var jy = function(ee) {
        return !!ee && di.some((function(ie) {
          return ee.includes(ie)
        }))
      },
      sy = function(ee) {
        if (!ee) return [];
        var ie = new Set,
          He = ee.split(/,(?![^()]*\))/).map((function(ee) {
            return ee.trim()
          }));
        He = He.flatMap((function(ee) {
          return ee.includes("(") ? ee : ee.split(",").map((function(ee) {
            return ee.trim()
          }))
        }));
        var ye, be = Me(He);
        try {
          for (be.s(); !(ye = be.n()).done;) {
            var Ke = ye.value;
            if (jy(Ke)) {
              var Ue = di.reduce((function(ee, ie) {
                return ee.replace(ie, "")
              }), Ke);
              "" !== Ue && "*" !== Ue && ie.add(Ue)
            }
          }
        } catch (Fe) {
          be.e(Fe)
        } finally {
          be.f()
        }
        return ie
      };

    function Iy(ee) {
      if (we) {
        var ie;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) ie = ee;
        else if (Si.searchPseudoElementsFullScan) ie = ee.querySelectorAll("*");
        else {
          var He, ye = new Set,
            be = Me(document.styleSheets);
          try {
            for (be.s(); !(He = be.n()).done;) {
              var Ke = He.value;
              try {
                var Ue, Fe = Me(Ke.cssRules);
                try {
                  for (Fe.s(); !(Ue = Fe.n()).done;) {
                    var Je, oe = Ue.value,
                      Re = Me(sy(oe.selectorText));
                    try {
                      for (Re.s(); !(Je = Re.n()).done;) {
                        var ke = Je.value;
                        ye.add(ke)
                      }
                    } catch (fe) {
                      Re.e(fe)
                    } finally {
                      Re.f()
                    }
                  }
                } catch (fe) {
                  Fe.e(fe)
                } finally {
                  Fe.f()
                }
              } catch (Te) {
                Si.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(Ke.href, " (").concat(Te.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (fe) {
            be.e(fe)
          } finally {
            be.f()
          }
          if (!ye.size) return;
          var qe = Array.from(ye).join(", ");
          try {
            ie = ee.querySelectorAll(qe)
          } catch (pe) {}
        }
        return new Promise((function(ee, He) {
          var ye = Ni(ie).filter(ny).map(Sy),
            be = Ry("searchPseudoElements");
          gy(), Promise.all(ye).then((function() {
            be(), Oy(), ee()
          })).catch((function() {
            be(), Oy(), He()
          }))
        }))
      }
    }
    var hy = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(ee) {
              return ee.pseudoElementsCallback = Iy, ee
            }
          }
        },
        provides: function(ee) {
          ee.pseudoElements2svg = function(ee) {
            var ie = ee.node,
              He = void 0 === ie ? We : ie;
            Si.searchPseudoElements && Iy(He)
          }
        }
      },
      Ny = !1,
      Gy = function(ee) {
        return ee.toLowerCase().split(" ").reduce((function(ee, ie) {
          var He = ie.toLowerCase().split("-"),
            ye = He[0],
            be = He.slice(1).join("-");
          if (ye && "h" === be) return ee.flipX = !0, ee;
          if (ye && "v" === be) return ee.flipY = !0, ee;
          if (be = parseFloat(be), isNaN(be)) return ee;
          switch (ye) {
            case "grow":
              ee.size = ee.size + be;
              break;
            case "shrink":
              ee.size = ee.size - be;
              break;
            case "left":
              ee.x = ee.x - be;
              break;
            case "right":
              ee.x = ee.x + be;
              break;
            case "up":
              ee.y = ee.y - be;
              break;
            case "down":
              ee.y = ee.y + be;
              break;
            case "rotate":
              ee.rotate = ee.rotate + be
          }
          return ee
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      ry = {
        mixout: function() {
          return {
            parse: {
              transform: function(ee) {
                return Gy(ee)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(ee, ie) {
              var He = ie.getAttribute("data-fa-transform");
              return He && (ee.transform = Gy(He)), ee
            }
          }
        },
        provides: function(ee) {
          ee.generateAbstractTransformGrouping = function(ee) {
            var ie = ee.main,
              He = ee.transform,
              ye = ee.containerWidth,
              be = ee.iconWidth,
              Me = {
                transform: "translate(".concat(ye / 2, " 256)")
              },
              Ke = "translate(".concat(32 * He.x, ", ").concat(32 * He.y, ") "),
              Ue = "scale(".concat(He.size / 16 * (He.flipX ? -1 : 1), ", ").concat(He.size / 16 * (He.flipY ? -1 : 1), ") "),
              Je = "rotate(".concat(He.rotate, " 0 0)"),
              oe = {
                outer: Me,
                inner: {
                  transform: "".concat(Ke, " ").concat(Ue, " ").concat(Je)
                },
                path: {
                  transform: "translate(".concat(be / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: Fe({}, oe.outer),
              children: [{
                tag: "g",
                attributes: Fe({}, oe.inner),
                children: [{
                  tag: ie.icon.tag,
                  children: ie.icon.children,
                  attributes: Fe(Fe({}, ie.icon.attributes), oe.path)
                }]
              }]
            }
          }
        }
      },
      Qy = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function eb(ee) {
      var ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return ee.attributes && (ee.attributes.fill || ie) && (ee.attributes.fill = "black"), ee
    }
    var ib = {
        hooks: function() {
          return {
            parseNodeAttributes: function(ee, ie) {
              var He = ie.getAttribute("data-fa-mask"),
                ye = He ? LH(He.split(" ").map((function(ee) {
                  return ee.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return ye.prefix || (ye.prefix = VH()), ee.mask = ye, ee.maskId = ie.getAttribute("data-fa-mask-id"), ee
            }
          }
        },
        provides: function(ee) {
          ee.generateAbstractMask = function(ee) {
            var ie, He = ee.children,
              ye = ee.attributes,
              be = ee.main,
              Me = ee.mask,
              Ke = ee.maskId,
              Ue = ee.transform,
              Je = be.width,
              oe = be.icon,
              Re = Me.width,
              ke = Me.icon,
              qe = function(ee) {
                var ie = ee.transform,
                  He = ee.containerWidth,
                  ye = ee.iconWidth,
                  be = {
                    transform: "translate(".concat(He / 2, " 256)")
                  },
                  Me = "translate(".concat(32 * ie.x, ", ").concat(32 * ie.y, ") "),
                  Ke = "scale(".concat(ie.size / 16 * (ie.flipX ? -1 : 1), ", ").concat(ie.size / 16 * (ie.flipY ? -1 : 1), ") "),
                  Ue = "rotate(".concat(ie.rotate, " 0 0)");
                return {
                  outer: be,
                  inner: {
                    transform: "".concat(Me, " ").concat(Ke, " ").concat(Ue)
                  },
                  path: {
                    transform: "translate(".concat(ye / 2 * -1, " -256)")
                  }
                }
              }({
                transform: Ue,
                containerWidth: Re,
                iconWidth: Je
              }),
              fe = {
                tag: "rect",
                attributes: Fe(Fe({}, Qy), {}, {
                  fill: "white"
                })
              },
              Te = oe.children ? {
                children: oe.children.map(eb)
              } : {},
              pe = {
                tag: "g",
                attributes: Fe({}, qe.inner),
                children: [eb(Fe({
                  tag: oe.tag,
                  attributes: Fe(Fe({}, oe.attributes), qe.path)
                }, Te))]
              },
              Xe = {
                tag: "g",
                attributes: Fe({}, qe.outer),
                children: [pe]
              },
              ze = "mask-".concat(Ke || Ii()),
              Be = "clip-".concat(Ke || Ii()),
              Ee = {
                tag: "mask",
                attributes: Fe(Fe({}, Qy), {}, {
                  id: ze,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [fe, Xe]
              },
              ge = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: Be
                  },
                  children: (ie = ke, "g" === ie.tag ? ie.children : [ie])
                }, Ee]
              };
            return He.push(ge, {
              tag: "rect",
              attributes: Fe({
                fill: "currentColor",
                "clip-path": "url(#".concat(Be, ")"),
                mask: "url(#".concat(ze, ")")
              }, Qy)
            }), {
              children: He,
              attributes: ye
            }
          }
        }
      },
      Hb = {
        provides: function(ee) {
          var ie = !1;
          de.matchMedia && (ie = de.matchMedia("(prefers-reduced-motion: reduce)").matches), ee.missingIconAbstract = function() {
            var ee = [],
              He = {
                fill: "currentColor"
              },
              ye = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            ee.push({
              tag: "path",
              attributes: Fe(Fe({}, He), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var be = Fe(Fe({}, ye), {}, {
                attributeName: "opacity"
              }),
              Me = {
                tag: "circle",
                attributes: Fe(Fe({}, He), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return ie || Me.children.push({
              tag: "animate",
              attributes: Fe(Fe({}, ye), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: Fe(Fe({}, be), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), ee.push(Me), ee.push({
              tag: "path",
              attributes: Fe(Fe({}, He), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: ie ? [] : [{
                tag: "animate",
                attributes: Fe(Fe({}, be), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), ie || ee.push({
              tag: "path",
              attributes: Fe(Fe({}, He), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: Fe(Fe({}, be), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: ee
            }
          }
        }
      };
    ! function(ee, ie) {
      var He = ie.mixoutsTo;
      mH = ee, lH = {}, Object.keys(SH).forEach((function(ee) {
        -1 === nH.indexOf(ee) && delete SH[ee]
      })), mH.forEach((function(ee) {
        var ie = ee.mixout ? ee.mixout() : {};
        if (Object.keys(ie).forEach((function(ee) {
            "function" === typeof ie[ee] && (He[ee] = ie[ee]), "object" === ke(ie[ee]) && Object.keys(ie[ee]).forEach((function(ye) {
              He[ee] || (He[ee] = {}), He[ee][ye] = ie[ee][ye]
            }))
          })), ee.hooks) {
          var ye = ee.hooks();
          Object.keys(ye).forEach((function(ee) {
            lH[ee] || (lH[ee] = []), lH[ee].push(ye[ee])
          }))
        }
        ee.provides && ee.provides(SH)
      }))
    }([bH, Vy, ay, cy, xy, hy, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              gy(), Ny = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            Wy(jH("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            dy && dy.disconnect()
          },
          watch: function(ee) {
            var ie = ee.observeMutationsRoot;
            Ny ? Oy() : Wy(jH("mutationObserverCallbacks", {
              observeMutationsRoot: ie
            }))
          }
        }
      }
    }, ry, ib, Hb, {
      hooks: function() {
        return {
          parseNodeAttributes: function(ee, ie) {
            var He = ie.getAttribute("data-fa-symbol"),
              ye = null !== He && ("" === He || He);
            return ee.symbol = ye, ee
          }
        }
      }
    }], {
      mixoutsTo: rH
    });
    var yb = rH.noAuto,
      bb = rH.config,
      Mb = rH.library,
      Kb = rH.dom,
      Ub = rH.parse,
      Fb = rH.findIconDefinition,
      Jb = rH.toHtml,
      ob = rH.icon,
      Rb = rH.layer,
      kb = rH.text,
      qb = rH.counter
  },
  7402: ee => {
    ee.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);