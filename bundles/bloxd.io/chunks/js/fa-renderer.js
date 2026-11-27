/*! For license information please see fl4vv.fa-renderer.74849b95.chunk.js.LICENSE.txt */
export const id = 39;
export const ids = [39];
export const modules = {
  7704: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      FontAwesomeIcon: () => Tr
    });
    var Zr = Qr(7700),
      Wr = Qr(5927),
      ar = Qr.n(Wr),
      jr = Qr(72);

    function Ir(rr, Sr) {
      (null == Sr || Sr > rr.length) && (Sr = rr.length);
      for (var Qr = 0, Zr = Array(Sr); Qr < Sr; Qr++) Zr[Qr] = rr[Qr];
      return Zr
    }

    function fr(rr, Sr, Qr) {
      return (Sr = function(rr) {
        var Sr = function(rr, Sr) {
          if ("object" != typeof rr || !rr) return rr;
          var Qr = rr[Symbol.toPrimitive];
          if (void 0 !== Qr) {
            var Zr = Qr.call(rr, Sr || "default");
            if ("object" != typeof Zr) return Zr;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Sr ? String : Number)(rr)
        }(rr, "string");
        return "symbol" == typeof Sr ? Sr : Sr + ""
      }(Sr)) in rr ? Object.defineProperty(rr, Sr, {
        value: Qr,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : rr[Sr] = Qr, rr
    }

    function Er(rr, Sr) {
      var Qr = Object.keys(rr);
      if (Object.getOwnPropertySymbols) {
        var Zr = Object.getOwnPropertySymbols(rr);
        Sr && (Zr = Zr.filter((function(Sr) {
          return Object.getOwnPropertyDescriptor(rr, Sr).enumerable
        }))), Qr.push.apply(Qr, Zr)
      }
      return Qr
    }

    function pr(rr) {
      for (var Sr = 1; Sr < arguments.length; Sr++) {
        var Qr = null != arguments[Sr] ? arguments[Sr] : {};
        Sr % 2 ? Er(Object(Qr), !0).forEach((function(Sr) {
          fr(rr, Sr, Qr[Sr])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(rr, Object.getOwnPropertyDescriptors(Qr)) : Er(Object(Qr)).forEach((function(Sr) {
          Object.defineProperty(rr, Sr, Object.getOwnPropertyDescriptor(Qr, Sr))
        }))
      }
      return rr
    }

    function xr(rr, Sr) {
      return function(rr) {
        if (Array.isArray(rr)) return rr
      }(rr) || function(rr, Sr) {
        var Qr = null == rr ? null : "undefined" != typeof Symbol && rr[Symbol.iterator] || rr["@@iterator"];
        if (null != Qr) {
          var Zr, Wr, ar, jr, Ir = [],
            fr = !0,
            Er = !1;
          try {
            if (ar = (Qr = Qr.call(rr)).next, 0 === Sr) {
              if (Object(Qr) !== Qr) return;
              fr = !1
            } else
              for (; !(fr = (Zr = ar.call(Qr)).done) && (Ir.push(Zr.value), Ir.length !== Sr); fr = !0);
          } catch (rr) {
            Er = !0, Wr = rr
          } finally {
            try {
              if (!fr && null != Qr.return && (jr = Qr.return(), Object(jr) !== jr)) return
            } finally {
              if (Er) throw Wr
            }
          }
          return Ir
        }
      }(rr, Sr) || Ur(rr, Sr) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mr(rr) {
      return function(rr) {
        if (Array.isArray(rr)) return Ir(rr)
      }(rr) || function(rr) {
        if ("undefined" != typeof Symbol && null != rr[Symbol.iterator] || null != rr["@@iterator"]) return Array.from(rr)
      }(rr) || Ur(rr) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Nr(rr) {
      return Nr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(rr) {
        return typeof rr
      } : function(rr) {
        return rr && "function" == typeof Symbol && rr.constructor === Symbol && rr !== Symbol.prototype ? "symbol" : typeof rr
      }, Nr(rr)
    }

    function Ur(rr, Sr) {
      if (rr) {
        if ("string" == typeof rr) return Ir(rr, Sr);
        var Qr = {}.toString.call(rr).slice(8, -1);
        return "Object" === Qr && rr.constructor && (Qr = rr.constructor.name), "Map" === Qr || "Set" === Qr ? Array.from(rr) : "Arguments" === Qr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Qr) ? Ir(rr, Sr) : void 0
      }
    }
    var tr;
    try {
      var hr = Qr(7711);
      tr = hr.version
    } catch (Or) {
      tr = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function zr(rr) {
      var Sr = rr.beat,
        Qr = rr.fade,
        Zr = rr.beatFade,
        Wr = rr.bounce,
        ar = rr.shake,
        jr = rr.flash,
        Ir = rr.spin,
        Er = rr.spinPulse,
        pr = rr.spinReverse,
        mr = rr.pulse,
        Nr = rr.fixedWidth,
        Ur = rr.inverse,
        hr = rr.border,
        zr = rr.listItem,
        Yr = rr.flip,
        nr = rr.size,
        er = rr.rotation,
        Kr = rr.pull,
        yr = rr.swapOpacity,
        Br = rr.rotateBy,
        Tr = rr.widthAuto,
        vr = function(rr, Sr) {
          for (var Qr = xr(rr.split("-"), 2), Zr = Qr[0], Wr = Qr[1], ar = xr(Sr.split("-"), 2), jr = ar[0], Ir = ar[1], fr = Zr.split("."), Er = jr.split("."), pr = 0; pr < Math.max(fr.length, Er.length); pr++) {
            var mr = fr[pr] || "0",
              Nr = Er[pr] || "0",
              Ur = parseInt(mr, 10),
              tr = parseInt(Nr, 10);
            if (Ur !== tr) return Ur > tr
          }
          for (var hr = 0; hr < Math.max(fr.length, Er.length); hr++) {
            var zr = fr[hr] || "0",
              Yr = Er[hr] || "0";
            if (zr !== Yr && zr.length !== Yr.length) return zr.length < Yr.length
          }
          return !(Wr && !Ir)
        }(tr, "7.0.0"),
        Or = fr(fr(fr(fr(fr(fr({
          "fa-beat": Sr,
          "fa-fade": Qr,
          "fa-beat-fade": Zr,
          "fa-bounce": Wr,
          "fa-shake": ar,
          "fa-flash": jr,
          "fa-spin": Ir,
          "fa-spin-reverse": pr,
          "fa-spin-pulse": Er,
          "fa-pulse": mr,
          "fa-fw": Nr,
          "fa-inverse": Ur,
          "fa-border": hr,
          "fa-li": zr,
          "fa-flip": !0 === Yr,
          "fa-flip-horizontal": "horizontal" === Yr || "both" === Yr,
          "fa-flip-vertical": "vertical" === Yr || "both" === Yr
        }, "fa-".concat(nr), "undefined" !== typeof nr && null !== nr), "fa-rotate-".concat(er), "undefined" !== typeof er && null !== er && 0 !== er), "fa-pull-".concat(Kr), "undefined" !== typeof Kr && null !== Kr), "fa-swap-opacity", yr), "fa-rotate-by", vr && Br), "fa-width-auto", vr && Tr);
      return Object.keys(Or).map((function(rr) {
        return Or[rr] ? rr : null
      })).filter((function(rr) {
        return rr
      }))
    }

    function Yr(rr) {
      return Sr = rr, (Sr -= 0) === Sr ? rr : (rr = rr.replace(/[\-_\s]+(.)?/g, (function(rr, Sr) {
        return Sr ? Sr.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + rr.substr(1);
      var Sr
    }
    var nr = ["style"];
    var er = !1;
    try {
      er = !0
    } catch (Or) {}

    function Kr(rr) {
      return rr && "object" === Nr(rr) && rr.prefix && rr.iconName && rr.icon ? rr : Zr.parse.icon ? Zr.parse.icon(rr) : null === rr ? null : rr && "object" === Nr(rr) && rr.prefix && rr.iconName ? rr : Array.isArray(rr) && 2 === rr.length ? {
        prefix: rr[0],
        iconName: rr[1]
      } : "string" === typeof rr ? {
        prefix: "fas",
        iconName: rr
      } : void 0
    }

    function yr(rr, Sr) {
      return Array.isArray(Sr) && Sr.length > 0 || !Array.isArray(Sr) && Sr ? fr({}, rr, Sr) : {}
    }
    var Br = {
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
      Tr = jr.forwardRef((function(rr, Sr) {
        var Qr = pr(pr({}, Br), rr),
          Wr = Qr.icon,
          ar = Qr.mask,
          jr = Qr.symbol,
          Ir = Qr.className,
          fr = Qr.title,
          Er = Qr.titleId,
          xr = Qr.maskId,
          Nr = Kr(Wr),
          Ur = yr("classes", [].concat(mr(zr(Qr)), mr((Ir || "").split(" ")))),
          tr = yr("transform", "string" === typeof Qr.transform ? Zr.parse.transform(Qr.transform) : Qr.transform),
          hr = yr("mask", Kr(ar)),
          Yr = (0, Zr.icon)(Nr, pr(pr(pr(pr({}, Ur), tr), hr), {}, {
            symbol: jr,
            title: fr,
            titleId: Er,
            maskId: xr
          }));
        if (!Yr) return function() {
          var rr;
          !er && console && "function" === typeof console.error && (rr = console).error.apply(rr, arguments)
        }("Could not find icon", Nr), null;
        var nr = Yr.abstract,
          Tr = {
            ref: Sr
          };
        return Object.keys(Qr).forEach((function(rr) {
          Br.hasOwnProperty(rr) || (Tr[rr] = Qr[rr])
        })), vr(nr[0], Tr)
      }));
    Tr.displayName = "FontAwesomeIcon", Tr.propTypes = {
      beat: ar().bool,
      border: ar().bool,
      beatFade: ar().bool,
      bounce: ar().bool,
      className: ar().string,
      fade: ar().bool,
      flash: ar().bool,
      mask: ar().oneOfType([ar().object, ar().array, ar().string]),
      maskId: ar().string,
      fixedWidth: ar().bool,
      inverse: ar().bool,
      flip: ar().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: ar().oneOfType([ar().object, ar().array, ar().string]),
      listItem: ar().bool,
      pull: ar().oneOf(["right", "left"]),
      pulse: ar().bool,
      rotation: ar().oneOf([0, 90, 180, 270]),
      rotateBy: ar().bool,
      shake: ar().bool,
      size: ar().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: ar().bool,
      spinPulse: ar().bool,
      spinReverse: ar().bool,
      symbol: ar().oneOfType([ar().bool, ar().string]),
      title: ar().string,
      titleId: ar().string,
      transform: ar().oneOfType([ar().string, ar().object]),
      swapOpacity: ar().bool,
      widthAuto: ar().bool
    };
    var vr = function rr(Sr, Qr) {
      var Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof Qr) return Qr;
      var Wr = (Qr.children || []).map((function(Qr) {
          return rr(Sr, Qr)
        })),
        ar = Object.keys(Qr.attributes || {}).reduce((function(rr, Sr) {
          var Zr = Qr.attributes[Sr];
          switch (Sr) {
            case "class":
              rr.attrs.className = Zr, delete Qr.attributes.class;
              break;
            case "style":
              rr.attrs.style = Zr.split(";").map((function(rr) {
                return rr.trim()
              })).filter((function(rr) {
                return rr
              })).reduce((function(rr, Sr) {
                var Qr, Zr = Sr.indexOf(":"),
                  Wr = Yr(Sr.slice(0, Zr)),
                  ar = Sr.slice(Zr + 1).trim();
                return Wr.startsWith("webkit") ? rr[(Qr = Wr, Qr.charAt(0).toUpperCase() + Qr.slice(1))] = ar : rr[Wr] = ar, rr
              }), {});
              break;
            default:
              0 === Sr.indexOf("aria-") || 0 === Sr.indexOf("data-") ? rr.attrs[Sr.toLowerCase()] = Zr : rr.attrs[Yr(Sr)] = Zr
          }
          return rr
        }), {
          attrs: {}
        }),
        jr = Zr.style,
        Ir = void 0 === jr ? {} : jr,
        fr = function(rr, Sr) {
          if (null == rr) return {};
          var Qr, Zr, Wr = function(rr, Sr) {
            if (null == rr) return {};
            var Qr = {};
            for (var Zr in rr)
              if ({}.hasOwnProperty.call(rr, Zr)) {
                if (-1 !== Sr.indexOf(Zr)) continue;
                Qr[Zr] = rr[Zr]
              } return Qr
          }(rr, Sr);
          if (Object.getOwnPropertySymbols) {
            var ar = Object.getOwnPropertySymbols(rr);
            for (Zr = 0; Zr < ar.length; Zr++) Qr = ar[Zr], -1 === Sr.indexOf(Qr) && {}.propertyIsEnumerable.call(rr, Qr) && (Wr[Qr] = rr[Qr])
          }
          return Wr
        }(Zr, nr);
      return ar.attrs.style = pr(pr({}, ar.attrs.style), Ir), Sr.apply(void 0, [Qr.tag, pr(pr({}, ar.attrs), fr)].concat(mr(Wr)))
    }.bind(null, jr.createElement)
  },
  5929: (rr, Sr, Qr) => {
    var Zr = Qr(5933);

    function Wr() {}

    function ar() {}
    ar.resetWarningCache = Wr, rr.exports = function() {
      function rr(rr, Sr, Qr, Wr, ar, jr) {
        if (jr !== Zr) {
          var Ir = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Ir.name = "Invariant Violation", Ir
        }
      }

      function Sr() {
        return rr
      }
      rr.isRequired = rr;
      var Qr = {
        array: rr,
        bigint: rr,
        bool: rr,
        func: rr,
        number: rr,
        object: rr,
        string: rr,
        symbol: rr,
        any: rr,
        arrayOf: Sr,
        element: rr,
        elementType: rr,
        instanceOf: Sr,
        node: rr,
        objectOf: Sr,
        oneOf: Sr,
        oneOfType: Sr,
        shape: Sr,
        exact: Sr,
        checkPropTypes: ar,
        resetWarningCache: Wr
      };
      return Qr.PropTypes = Qr, Qr
    }
  },
  5927: (rr, Sr, Qr) => {
    rr.exports = Qr(5929)()
  },
  5933: rr => {
    rr.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7700: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      (null == Sr || Sr > rr.length) && (Sr = rr.length);
      for (var Qr = 0, Zr = Array(Sr); Qr < Sr; Qr++) Zr[Qr] = rr[Qr];
      return Zr
    }

    function Wr(rr, Sr) {
      for (var Qr = 0; Qr < Sr.length; Qr++) {
        var Zr = Sr[Qr];
        Zr.enumerable = Zr.enumerable || !1, Zr.configurable = !0, "value" in Zr && (Zr.writable = !0), Object.defineProperty(rr, xr(Zr.key), Zr)
      }
    }

    function ar(rr, Sr) {
      var Qr = "undefined" != typeof Symbol && rr[Symbol.iterator] || rr["@@iterator"];
      if (!Qr) {
        if (Array.isArray(rr) || (Qr = Nr(rr)) || Sr && rr && "number" == typeof rr.length) {
          Qr && (rr = Qr);
          var Zr = 0,
            Wr = function() {};
          return {
            s: Wr,
            n: function() {
              return Zr >= rr.length ? {
                done: !0
              } : {
                done: !1,
                value: rr[Zr++]
              }
            },
            e: function(rr) {
              throw rr
            },
            f: Wr
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var ar, jr = !0,
        Ir = !1;
      return {
        s: function() {
          Qr = Qr.call(rr)
        },
        n: function() {
          var rr = Qr.next();
          return jr = rr.done, rr
        },
        e: function(rr) {
          Ir = !0, ar = rr
        },
        f: function() {
          try {
            jr || null == Qr.return || Qr.return()
          } finally {
            if (Ir) throw ar
          }
        }
      }
    }

    function jr(rr, Sr, Qr) {
      return (Sr = xr(Sr)) in rr ? Object.defineProperty(rr, Sr, {
        value: Qr,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : rr[Sr] = Qr, rr
    }

    function Ir(rr, Sr) {
      var Qr = Object.keys(rr);
      if (Object.getOwnPropertySymbols) {
        var Zr = Object.getOwnPropertySymbols(rr);
        Sr && (Zr = Zr.filter((function(Sr) {
          return Object.getOwnPropertyDescriptor(rr, Sr).enumerable
        }))), Qr.push.apply(Qr, Zr)
      }
      return Qr
    }

    function fr(rr) {
      for (var Sr = 1; Sr < arguments.length; Sr++) {
        var Qr = null != arguments[Sr] ? arguments[Sr] : {};
        Sr % 2 ? Ir(Object(Qr), !0).forEach((function(Sr) {
          jr(rr, Sr, Qr[Sr])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(rr, Object.getOwnPropertyDescriptors(Qr)) : Ir(Object(Qr)).forEach((function(Sr) {
          Object.defineProperty(rr, Sr, Object.getOwnPropertyDescriptor(Qr, Sr))
        }))
      }
      return rr
    }

    function Er(rr, Sr) {
      return function(rr) {
        if (Array.isArray(rr)) return rr
      }(rr) || function(rr, Sr) {
        var Qr = null == rr ? null : "undefined" != typeof Symbol && rr[Symbol.iterator] || rr["@@iterator"];
        if (null != Qr) {
          var Zr, Wr, ar, jr, Ir = [],
            fr = !0,
            Er = !1;
          try {
            if (ar = (Qr = Qr.call(rr)).next, 0 === Sr) {
              if (Object(Qr) !== Qr) return;
              fr = !1
            } else
              for (; !(fr = (Zr = ar.call(Qr)).done) && (Ir.push(Zr.value), Ir.length !== Sr); fr = !0);
          } catch (rr) {
            Er = !0, Wr = rr
          } finally {
            try {
              if (!fr && null != Qr.return && (jr = Qr.return(), Object(jr) !== jr)) return
            } finally {
              if (Er) throw Wr
            }
          }
          return Ir
        }
      }(rr, Sr) || Nr(rr, Sr) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pr(rr) {
      return function(rr) {
        if (Array.isArray(rr)) return Zr(rr)
      }(rr) || function(rr) {
        if ("undefined" != typeof Symbol && null != rr[Symbol.iterator] || null != rr["@@iterator"]) return Array.from(rr)
      }(rr) || Nr(rr) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xr(rr) {
      var Sr = function(rr, Sr) {
        if ("object" != typeof rr || !rr) return rr;
        var Qr = rr[Symbol.toPrimitive];
        if (void 0 !== Qr) {
          var Zr = Qr.call(rr, Sr || "default");
          if ("object" != typeof Zr) return Zr;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Sr ? String : Number)(rr)
      }(rr, "string");
      return "symbol" == typeof Sr ? Sr : Sr + ""
    }

    function mr(rr) {
      return mr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(rr) {
        return typeof rr
      } : function(rr) {
        return rr && "function" == typeof Symbol && rr.constructor === Symbol && rr !== Symbol.prototype ? "symbol" : typeof rr
      }, mr(rr)
    }

    function Nr(rr, Sr) {
      if (rr) {
        if ("string" == typeof rr) return Zr(rr, Sr);
        var Qr = {}.toString.call(rr).slice(8, -1);
        return "Object" === Qr && rr.constructor && (Qr = rr.constructor.name), "Map" === Qr || "Set" === Qr ? Array.from(rr) : "Arguments" === Qr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Qr) ? Zr(rr, Sr) : void 0
      }
    }
    Qr.r(Sr), Qr.d(Sr, {
      api: () => DQ,
      config: () => QW,
      counter: () => xW,
      dom: () => WW,
      findIconDefinition: () => jW,
      icon: () => fW,
      layer: () => EW,
      library: () => ZW,
      noAuto: () => SW,
      parse: () => aW,
      text: () => pW,
      toHtml: () => IW
    });
    var Ur = function() {},
      tr = {},
      hr = {},
      zr = null,
      Yr = {
        mark: Ur,
        measure: Ur
      };
    try {
      "undefined" !== typeof window && (tr = window), "undefined" !== typeof document && (hr = document), "undefined" !== typeof MutationObserver && (zr = MutationObserver), "undefined" !== typeof performance && (Yr = performance)
    } catch (wr) {}
    var nr, er, Kr = (tr.navigator || {}).userAgent,
      yr = void 0 === Kr ? "" : Kr,
      Br = tr,
      Tr = hr,
      vr = zr,
      Or = Yr,
      Lr = (Br.document, !!Tr.documentElement && !!Tr.head && "function" === typeof Tr.addEventListener && "function" === typeof Tr.createElement),
      lr = ~yr.indexOf("MSIE") || ~yr.indexOf("Trident/"),
      Xr = {
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
      Pr = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      Hr = "classic",
      qr = "duotone",
      Rr = "sharp",
      gr = "sharp-duotone",
      Cr = "chisel",
      Mr = "etch",
      Gr = "graphite",
      kr = "jelly",
      Ar = "jelly-duo",
      Vr = "jelly-fill",
      ir = "notdog",
      wr = "notdog-duo",
      cr = "slab",
      Fr = "slab-press",
      or = "thumbprint",
      br = "utility",
      Jr = "utility-duo",
      Dr = "utility-fill",
      dr = "whiteboard",
      sr = [Hr, qr, Rr, gr, Cr, Mr, Gr, kr, Ar, Vr, ir, wr, cr, Fr, or, br, Jr, Dr, dr],
      ur = (jr(jr(jr(jr(jr(jr(jr(jr(jr(jr(nr = {}, Hr, "Classic"), qr, "Duotone"), Rr, "Sharp"), gr, "Sharp Duotone"), Cr, "Chisel"), Mr, "Etch"), Gr, "Graphite"), kr, "Jelly"), Ar, "Jelly Duo"), Vr, "Jelly Fill"), jr(jr(jr(jr(jr(jr(jr(jr(jr(nr, ir, "Notdog"), wr, "Notdog Duo"), cr, "Slab"), Fr, "Slab Press"), or, "Thumbprint"), br, "Utility"), Jr, "Utility Duo"), Dr, "Utility Fill"), dr, "Whiteboard"), new Map([
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
      rS = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      SS = {
        fak: "kit",
        "fa-kit": "kit"
      },
      QS = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      ZS = (jr(jr({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      WS = {
        "kit-duotone": "fakd"
      },
      aS = "duotone-group",
      jS = "swap-opacity",
      IS = "primary",
      fS = "secondary",
      ES = (jr(jr(jr(jr(jr(jr(jr(jr(jr(jr(er = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), jr(jr(jr(jr(jr(jr(jr(jr(jr(er, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), jr(jr({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      pS = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      xS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      mS = xS.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      NS = [].concat(pr(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", aS, jS, IS, fS]).concat(xS.map((function(rr) {
        return "".concat(rr, "x")
      }))).concat(mS.map((function(rr) {
        return "w-".concat(rr)
      }))),
      US = "___FONT_AWESOME___",
      tS = "svg-inline--fa",
      hS = "data-fa-i2svg",
      zS = "data-fa-pseudo-element",
      YS = "data-prefix",
      nS = "data-icon",
      eS = "fontawesome-i2svg",
      KS = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      yS = ["::before", "::after", ":before", ":after"],
      BS = function() {
        try {
          return !0
        } catch (rr) {
          return !1
        }
      }();

    function TS(rr) {
      return new Proxy(rr, {
        get: function(rr, Sr) {
          return Sr in rr ? rr[Sr] : rr[Hr]
        }
      })
    }
    var vS = fr({}, Xr);
    vS[Hr] = fr(fr(fr(fr({}, {
      "fa-duotone": "duotone"
    }), Xr[Hr]), SS), QS);
    var OS = TS(vS),
      LS = fr({}, {
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
    LS[Hr] = fr(fr(fr(fr({}, {
      duotone: "fad"
    }), LS[Hr]), ZS), WS);
    var lS = TS(LS),
      XS = fr({}, ES);
    XS[Hr] = fr(fr({}, XS[Hr]), {
      fak: "fa-kit"
    });
    var PS = TS(XS),
      HS = fr({}, {
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
    HS[Hr] = fr(fr({}, HS[Hr]), {
      "fa-kit": "fak"
    });
    TS(HS);
    var qS = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      RS = "fa-layers-text",
      gS = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      CS = (TS(fr({}, {
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
      MS = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      GS = [].concat(pr(["kit"]), pr(NS)),
      kS = Br.FontAwesomeConfig || {};
    if (Tr && "function" === typeof Tr.querySelector) {
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
      ].forEach((function(rr) {
        var Sr = Er(rr, 2),
          Qr = Sr[0],
          Zr = Sr[1],
          Wr = function(rr) {
            return "" === rr || "false" !== rr && ("true" === rr || rr)
          }(function(rr) {
            var Sr = Tr.querySelector("script[" + rr + "]");
            if (Sr) return Sr.getAttribute(rr)
          }(Qr));
        void 0 !== Wr && null !== Wr && (kS[Zr] = Wr)
      }))
    }
    var AS = {
      styleDefault: "solid",
      familyDefault: Hr,
      cssPrefix: "fa",
      replacementClass: tS,
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
    kS.familyPrefix && (kS.cssPrefix = kS.familyPrefix);
    var VS = fr(fr({}, AS), kS);
    VS.autoReplaceSvg || (VS.observeMutations = !1);
    var iS = {};
    Object.keys(AS).forEach((function(rr) {
      Object.defineProperty(iS, rr, {
        enumerable: !0,
        set: function(Sr) {
          VS[rr] = Sr, wS.forEach((function(rr) {
            return rr(iS)
          }))
        },
        get: function() {
          return VS[rr]
        }
      })
    })), Object.defineProperty(iS, "familyPrefix", {
      enumerable: !0,
      set: function(rr) {
        VS.cssPrefix = rr, wS.forEach((function(rr) {
          return rr(iS)
        }))
      },
      get: function() {
        return VS.cssPrefix
      }
    }), Br.FontAwesomeConfig = iS;
    var wS = [];
    var cS = 16,
      FS = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function oS() {
      for (var rr = 12, Sr = ""; rr-- > 0;) Sr += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return Sr
    }

    function bS(rr) {
      for (var Sr = [], Qr = (rr || []).length >>> 0; Qr--;) Sr[Qr] = rr[Qr];
      return Sr
    }

    function JS(rr) {
      return rr.classList ? bS(rr.classList) : (rr.getAttribute("class") || "").split(" ").filter((function(rr) {
        return rr
      }))
    }

    function DS(rr) {
      return "".concat(rr).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function dS(rr) {
      return Object.keys(rr || {}).reduce((function(Sr, Qr) {
        return Sr + "".concat(Qr, ": ").concat(rr[Qr].trim(), ";")
      }), "")
    }

    function sS(rr) {
      return rr.size !== FS.size || rr.x !== FS.x || rr.y !== FS.y || rr.rotate !== FS.rotate || rr.flipX || rr.flipY
    }

    function uS() {
      var rr = "fa",
        Sr = tS,
        Qr = iS.cssPrefix,
        Zr = iS.replacementClass,
        Wr = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (Qr !== rr || Zr !== Sr) {
        var ar = new RegExp("\\.".concat(rr, "\\-"), "g"),
          jr = new RegExp("\\--".concat(rr, "\\-"), "g"),
          Ir = new RegExp("\\.".concat(Sr), "g");
        Wr = Wr.replace(ar, ".".concat(Qr, "-")).replace(jr, "--".concat(Qr, "-")).replace(Ir, ".".concat(Zr))
      }
      return Wr
    }
    var rQ = !1;

    function SQ() {
      iS.autoAddCss && !rQ && (! function(rr) {
        if (rr && Lr) {
          var Sr = Tr.createElement("style");
          Sr.setAttribute("type", "text/css"), Sr.innerHTML = rr;
          for (var Qr = Tr.head.childNodes, Zr = null, Wr = Qr.length - 1; Wr > -1; Wr--) {
            var ar = Qr[Wr],
              jr = (ar.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(jr) > -1 && (Zr = ar)
          }
          Tr.head.insertBefore(Sr, Zr)
        }
      }(uS()), rQ = !0)
    }
    var QQ = {
        mixout: function() {
          return {
            dom: {
              css: uS,
              insertCss: SQ
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              SQ()
            },
            beforeI2svg: function() {
              SQ()
            }
          }
        }
      },
      ZQ = Br || {};
    ZQ[US] || (ZQ[US] = {}), ZQ[US].styles || (ZQ[US].styles = {}), ZQ[US].hooks || (ZQ[US].hooks = {}), ZQ[US].shims || (ZQ[US].shims = []);
    var WQ = ZQ[US],
      aQ = [],
      jQ = function() {
        Tr.removeEventListener("DOMContentLoaded", jQ), IQ = 1, aQ.map((function(rr) {
          return rr()
        }))
      },
      IQ = !1;

    function fQ(rr) {
      var Sr = rr.tag,
        Qr = rr.attributes,
        Zr = void 0 === Qr ? {} : Qr,
        Wr = rr.children,
        ar = void 0 === Wr ? [] : Wr;
      return "string" === typeof rr ? DS(rr) : "<".concat(Sr, " ").concat(function(rr) {
        return Object.keys(rr || {}).reduce((function(Sr, Qr) {
          return Sr + "".concat(Qr, '="').concat(DS(rr[Qr]), '" ')
        }), "").trim()
      }(Zr), ">").concat(ar.map(fQ).join(""), "</").concat(Sr, ">")
    }

    function EQ(rr, Sr, Qr) {
      if (rr && rr[Sr] && rr[Sr][Qr]) return {
        prefix: Sr,
        iconName: Qr,
        icon: rr[Sr][Qr]
      }
    }
    Lr && ((IQ = (Tr.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Tr.readyState)) || Tr.addEventListener("DOMContentLoaded", jQ));
    var pQ = function(rr, Sr, Qr, Zr) {
      var Wr, ar, jr, Ir = Object.keys(rr),
        fr = Ir.length,
        Er = void 0 !== Zr ? function(rr, Sr) {
          return function(Qr, Zr, Wr, ar) {
            return rr.call(Sr, Qr, Zr, Wr, ar)
          }
        }(Sr, Zr) : Sr;
      for (void 0 === Qr ? (Wr = 1, jr = rr[Ir[0]]) : (Wr = 0, jr = Qr); Wr < fr; Wr++) jr = Er(jr, rr[ar = Ir[Wr]], ar, rr);
      return jr
    };

    function xQ(rr) {
      return 1 !== pr(rr).length ? null : rr.codePointAt(0).toString(16)
    }

    function mQ(rr) {
      return Object.keys(rr).reduce((function(Sr, Qr) {
        var Zr = rr[Qr];
        return !!Zr.icon ? Sr[Zr.iconName] = Zr.icon : Sr[Qr] = Zr, Sr
      }), {})
    }

    function NQ(rr, Sr) {
      var Qr = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        Zr = void 0 !== Qr && Qr,
        Wr = mQ(Sr);
      "function" !== typeof WQ.hooks.addPack || Zr ? WQ.styles[rr] = fr(fr({}, WQ.styles[rr] || {}), Wr) : WQ.hooks.addPack(rr, mQ(Sr)), "fas" === rr && NQ("fa", Sr)
    }
    var UQ = WQ.styles,
      tQ = WQ.shims,
      hQ = Object.keys(PS),
      zQ = hQ.reduce((function(rr, Sr) {
        return rr[Sr] = Object.keys(PS[Sr]), rr
      }), {}),
      YQ = null,
      nQ = {},
      eQ = {},
      KQ = {},
      yQ = {},
      BQ = {};

    function TQ(rr, Sr) {
      var Qr, Zr = Sr.split("-"),
        Wr = Zr[0],
        ar = Zr.slice(1).join("-");
      return Wr !== rr || "" === ar || (Qr = ar, ~GS.indexOf(Qr)) ? null : ar
    }
    var vQ, OQ = function() {
      var rr = function(rr) {
        return pQ(UQ, (function(Sr, Qr, Zr) {
          return Sr[Zr] = pQ(Qr, rr, {}), Sr
        }), {})
      };
      nQ = rr((function(rr, Sr, Qr) {
        (Sr[3] && (rr[Sr[3]] = Qr), Sr[2]) && Sr[2].filter((function(rr) {
          return "number" === typeof rr
        })).forEach((function(Sr) {
          rr[Sr.toString(16)] = Qr
        }));
        return rr
      })), eQ = rr((function(rr, Sr, Qr) {
        (rr[Qr] = Qr, Sr[2]) && Sr[2].filter((function(rr) {
          return "string" === typeof rr
        })).forEach((function(Sr) {
          rr[Sr] = Qr
        }));
        return rr
      })), BQ = rr((function(rr, Sr, Qr) {
        var Zr = Sr[2];
        return rr[Qr] = Qr, Zr.forEach((function(Sr) {
          rr[Sr] = Qr
        })), rr
      }));
      var Sr = "far" in UQ || iS.autoFetchSvg,
        Qr = pQ(tQ, (function(rr, Qr) {
          var Zr = Qr[0],
            Wr = Qr[1],
            ar = Qr[2];
          return "far" !== Wr || Sr || (Wr = "fas"), "string" === typeof Zr && (rr.names[Zr] = {
            prefix: Wr,
            iconName: ar
          }), "number" === typeof Zr && (rr.unicodes[Zr.toString(16)] = {
            prefix: Wr,
            iconName: ar
          }), rr
        }), {
          names: {},
          unicodes: {}
        });
      KQ = Qr.names, yQ = Qr.unicodes, YQ = HQ(iS.styleDefault, {
        family: iS.familyDefault
      })
    };

    function LQ(rr, Sr) {
      return (nQ[rr] || {})[Sr]
    }

    function lQ(rr, Sr) {
      return (BQ[rr] || {})[Sr]
    }

    function XQ(rr) {
      return KQ[rr] || {
        prefix: null,
        iconName: null
      }
    }

    function PQ() {
      return YQ
    }
    vQ = function(rr) {
      YQ = HQ(rr.styleDefault, {
        family: iS.familyDefault
      })
    }, wS.push(vQ), OQ();

    function HQ(rr) {
      var Sr = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        Qr = void 0 === Sr ? Hr : Sr,
        Zr = OS[Qr][rr];
      if (Qr === qr && !rr) return "fad";
      var Wr = lS[Qr][rr] || lS[Qr][Zr],
        ar = rr in WQ.styles ? rr : null;
      return Wr || ar || null
    }

    function qQ(rr) {
      return rr.sort().filter((function(rr, Sr, Qr) {
        return Qr.indexOf(rr) === Sr
      }))
    }
    var RQ = pS.concat(rS);

    function gQ(rr) {
      var Sr = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        Qr = void 0 !== Sr && Sr,
        Zr = null,
        Wr = qQ(rr.filter((function(rr) {
          return RQ.includes(rr)
        }))),
        ar = qQ(rr.filter((function(rr) {
          return !RQ.includes(rr)
        }))),
        jr = Er(Wr.filter((function(rr) {
          return Zr = rr, !Pr.includes(rr)
        })), 1)[0],
        Ir = void 0 === jr ? null : jr,
        pr = function(rr) {
          var Sr = Hr,
            Qr = hQ.reduce((function(rr, Sr) {
              return rr[Sr] = "".concat(iS.cssPrefix, "-").concat(Sr), rr
            }), {});
          return sr.forEach((function(Zr) {
            (rr.includes(Qr[Zr]) || rr.some((function(rr) {
              return zQ[Zr].includes(rr)
            }))) && (Sr = Zr)
          })), Sr
        }(Wr),
        xr = fr(fr({}, function(rr) {
          var Sr = [],
            Qr = null;
          return rr.forEach((function(rr) {
            var Zr = TQ(iS.cssPrefix, rr);
            Zr ? Qr = Zr : rr && Sr.push(rr)
          })), {
            iconName: Qr,
            rest: Sr
          }
        }(ar)), {}, {
          prefix: HQ(Ir, {
            family: pr
          })
        });
      return fr(fr(fr({}, xr), function(rr) {
        var Sr = rr.values,
          Qr = rr.family,
          Zr = rr.canonical,
          Wr = rr.givenPrefix,
          ar = void 0 === Wr ? "" : Wr,
          jr = rr.styles,
          Ir = void 0 === jr ? {} : jr,
          fr = rr.config,
          Er = void 0 === fr ? {} : fr,
          pr = Qr === qr,
          xr = Sr.includes("fa-duotone") || Sr.includes("fad"),
          mr = "duotone" === Er.familyDefault,
          Nr = "fad" === Zr.prefix || "fa-duotone" === Zr.prefix;
        !pr && (xr || mr || Nr) && (Zr.prefix = "fad");
        (Sr.includes("fa-brands") || Sr.includes("fab")) && (Zr.prefix = "fab");
        if (!Zr.prefix && CQ.includes(Qr)) {
          if (Object.keys(Ir).find((function(rr) {
              return MQ.includes(rr)
            })) || Er.autoFetchSvg) {
            var Ur = ur.get(Qr).defaultShortPrefixId;
            Zr.prefix = Ur, Zr.iconName = lQ(Zr.prefix, Zr.iconName) || Zr.iconName
          }
        }
        "fa" !== Zr.prefix && "fa" !== ar || (Zr.prefix = PQ() || "fas");
        return Zr
      }({
        values: rr,
        family: pr,
        styles: UQ,
        config: iS,
        canonical: xr,
        givenPrefix: Zr
      })), function(rr, Sr, Qr) {
        var Zr = Qr.prefix,
          Wr = Qr.iconName;
        if (rr || !Zr || !Wr) return {
          prefix: Zr,
          iconName: Wr
        };
        var ar = "fa" === Sr ? XQ(Wr) : {},
          jr = lQ(Zr, Wr);
        Wr = ar.iconName || jr || Wr, "far" !== (Zr = ar.prefix || Zr) || UQ.far || !UQ.fas || iS.autoFetchSvg || (Zr = "fas");
        return {
          prefix: Zr,
          iconName: Wr
        }
      }(Qr, Zr, xr))
    }
    var CQ = sr.filter((function(rr) {
        return rr !== Hr || rr !== qr
      })),
      MQ = Object.keys(ES).filter((function(rr) {
        return rr !== Hr
      })).map((function(rr) {
        return Object.keys(ES[rr])
      })).flat();
    var GQ = function() {
        return function(rr, Sr, Qr) {
          return Sr && Wr(rr.prototype, Sr), Qr && Wr(rr, Qr), Object.defineProperty(rr, "prototype", {
            writable: !1
          }), rr
        }((function rr() {
          ! function(rr, Sr) {
            if (!(rr instanceof Sr)) throw new TypeError("Cannot call a class as a function")
          }(this, rr), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var rr = this, Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
            var Wr = Qr.reduce(this._pullDefinitions, {});
            Object.keys(Wr).forEach((function(Sr) {
              rr.definitions[Sr] = fr(fr({}, rr.definitions[Sr] || {}), Wr[Sr]), NQ(Sr, Wr[Sr]);
              var Qr = PS[Hr][Sr];
              Qr && NQ(Qr, Wr[Sr]), OQ()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(rr, Sr) {
            var Qr = Sr.prefix && Sr.iconName && Sr.icon ? {
              0: Sr
            } : Sr;
            return Object.keys(Qr).map((function(Sr) {
              var Zr = Qr[Sr],
                Wr = Zr.prefix,
                ar = Zr.iconName,
                jr = Zr.icon,
                Ir = jr[2];
              rr[Wr] || (rr[Wr] = {}), Ir.length > 0 && Ir.forEach((function(Sr) {
                "string" === typeof Sr && (rr[Wr][Sr] = jr)
              })), rr[Wr][ar] = jr
            })), rr
          }
        }])
      }(),
      kQ = [],
      AQ = {},
      VQ = {},
      iQ = Object.keys(VQ);

    function wQ(rr, Sr) {
      for (var Qr = arguments.length, Zr = new Array(Qr > 2 ? Qr - 2 : 0), Wr = 2; Wr < Qr; Wr++) Zr[Wr - 2] = arguments[Wr];
      return (AQ[rr] || []).forEach((function(rr) {
        Sr = rr.apply(null, [Sr].concat(Zr))
      })), Sr
    }

    function cQ(rr) {
      for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
      (AQ[rr] || []).forEach((function(rr) {
        rr.apply(null, Qr)
      }))
    }

    function FQ() {
      var rr = arguments[0],
        Sr = Array.prototype.slice.call(arguments, 1);
      return VQ[rr] ? VQ[rr].apply(null, Sr) : void 0
    }

    function oQ(rr) {
      "fa" === rr.prefix && (rr.prefix = "fas");
      var Sr = rr.iconName,
        Qr = rr.prefix || PQ();
      if (Sr) return Sr = lQ(Qr, Sr) || Sr, EQ(bQ.definitions, Qr, Sr) || EQ(WQ.styles, Qr, Sr)
    }
    var bQ = new GQ,
      JQ = {
        i2svg: function() {
          var rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Lr ? (cQ("beforeI2svg", rr), FQ("pseudoElements2svg", rr), FQ("i2svg", rr)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var rr, Sr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Qr = Sr.autoReplaceSvgRoot;
          !1 === iS.autoReplaceSvg && (iS.autoReplaceSvg = !0), iS.observeMutations = !0, rr = function() {
            dQ({
              autoReplaceSvgRoot: Qr
            }), cQ("watch", Sr)
          }, Lr && (IQ ? setTimeout(rr, 0) : aQ.push(rr))
        }
      },
      DQ = {
        noAuto: function() {
          iS.autoReplaceSvg = !1, iS.observeMutations = !1, cQ("noAuto")
        },
        config: iS,
        dom: JQ,
        parse: {
          icon: function(rr) {
            if (null === rr) return null;
            if ("object" === mr(rr) && rr.prefix && rr.iconName) return {
              prefix: rr.prefix,
              iconName: lQ(rr.prefix, rr.iconName) || rr.iconName
            };
            if (Array.isArray(rr) && 2 === rr.length) {
              var Sr = 0 === rr[1].indexOf("fa-") ? rr[1].slice(3) : rr[1],
                Qr = HQ(rr[0]);
              return {
                prefix: Qr,
                iconName: lQ(Qr, Sr) || Sr
              }
            }
            if ("string" === typeof rr && (rr.indexOf("".concat(iS.cssPrefix, "-")) > -1 || rr.match(qS))) {
              var Zr = gQ(rr.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: Zr.prefix || PQ(),
                iconName: lQ(Zr.prefix, Zr.iconName) || Zr.iconName
              }
            }
            if ("string" === typeof rr) {
              var Wr = PQ();
              return {
                prefix: Wr,
                iconName: lQ(Wr, rr) || rr
              }
            }
          }
        },
        library: bQ,
        findIconDefinition: oQ,
        toHtml: fQ
      },
      dQ = function() {
        var rr = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          Sr = void 0 === rr ? Tr : rr;
        (Object.keys(WQ.styles).length > 0 || iS.autoFetchSvg) && Lr && iS.autoReplaceSvg && DQ.dom.i2svg({
          node: Sr
        })
      };

    function sQ(rr, Sr) {
      return Object.defineProperty(rr, "abstract", {
        get: Sr
      }), Object.defineProperty(rr, "html", {
        get: function() {
          return rr.abstract.map((function(rr) {
            return fQ(rr)
          }))
        }
      }), Object.defineProperty(rr, "node", {
        get: function() {
          if (Lr) {
            var Sr = Tr.createElement("div");
            return Sr.innerHTML = rr.html, Sr.children
          }
        }
      }), rr
    }

    function uQ(rr) {
      var Sr = rr.icons,
        Qr = Sr.main,
        Zr = Sr.mask,
        Wr = rr.prefix,
        ar = rr.iconName,
        jr = rr.transform,
        Ir = rr.symbol,
        Er = rr.maskId,
        pr = rr.extra,
        xr = rr.watchable,
        mr = void 0 !== xr && xr,
        Nr = Zr.found ? Zr : Qr,
        Ur = Nr.width,
        tr = Nr.height,
        hr = [iS.replacementClass, ar ? "".concat(iS.cssPrefix, "-").concat(ar) : ""].filter((function(rr) {
          return -1 === pr.classes.indexOf(rr)
        })).filter((function(rr) {
          return "" !== rr || !!rr
        })).concat(pr.classes).join(" "),
        zr = {
          children: [],
          attributes: fr(fr({}, pr.attributes), {}, {
            "data-prefix": Wr,
            "data-icon": ar,
            class: hr,
            role: pr.attributes.role || "img",
            viewBox: "0 0 ".concat(Ur, " ").concat(tr)
          })
        };
      (function(rr) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(Sr) {
          return Sr in rr
        }))
      })(pr.attributes) || pr.attributes["aria-hidden"] || (zr.attributes["aria-hidden"] = "true"), mr && (zr.attributes[hS] = "");
      var Yr = fr(fr({}, zr), {}, {
          prefix: Wr,
          iconName: ar,
          main: Qr,
          mask: Zr,
          maskId: Er,
          transform: jr,
          symbol: Ir,
          styles: fr({}, pr.styles)
        }),
        nr = Zr.found && Qr.found ? FQ("generateAbstractMask", Yr) || {
          children: [],
          attributes: {}
        } : FQ("generateAbstractIcon", Yr) || {
          children: [],
          attributes: {}
        },
        er = nr.children,
        Kr = nr.attributes;
      return Yr.children = er, Yr.attributes = Kr, Ir ? function(rr) {
        var Sr = rr.prefix,
          Qr = rr.iconName,
          Zr = rr.children,
          Wr = rr.attributes,
          ar = rr.symbol,
          jr = !0 === ar ? "".concat(Sr, "-").concat(iS.cssPrefix, "-").concat(Qr) : ar;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: fr(fr({}, Wr), {}, {
              id: jr
            }),
            children: Zr
          }]
        }]
      }(Yr) : function(rr) {
        var Sr = rr.children,
          Qr = rr.main,
          Zr = rr.mask,
          Wr = rr.attributes,
          ar = rr.styles,
          jr = rr.transform;
        if (sS(jr) && Qr.found && !Zr.found) {
          var Ir = {
            x: Qr.width / Qr.height / 2,
            y: .5
          };
          Wr.style = dS(fr(fr({}, ar), {}, {
            "transform-origin": "".concat(Ir.x + jr.x / 16, "em ").concat(Ir.y + jr.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: Wr,
          children: Sr
        }]
      }(Yr)
    }

    function rZ(rr) {
      var Sr = rr.content,
        Qr = rr.width,
        Zr = rr.height,
        Wr = rr.transform,
        ar = rr.extra,
        jr = rr.watchable,
        Ir = void 0 !== jr && jr,
        Er = fr(fr({}, ar.attributes), {}, {
          class: ar.classes.join(" ")
        });
      Ir && (Er[hS] = "");
      var pr = fr({}, ar.styles);
      sS(Wr) && (pr.transform = function(rr) {
        var Sr = rr.transform,
          Qr = rr.width,
          Zr = void 0 === Qr ? 16 : Qr,
          Wr = rr.height,
          ar = void 0 === Wr ? 16 : Wr,
          jr = rr.startCentered,
          Ir = void 0 !== jr && jr,
          fr = "";
        return fr += Ir && lr ? "translate(".concat(Sr.x / cS - Zr / 2, "em, ").concat(Sr.y / cS - ar / 2, "em) ") : Ir ? "translate(calc(-50% + ".concat(Sr.x / cS, "em), calc(-50% + ").concat(Sr.y / cS, "em)) ") : "translate(".concat(Sr.x / cS, "em, ").concat(Sr.y / cS, "em) "), fr += "scale(".concat(Sr.size / cS * (Sr.flipX ? -1 : 1), ", ").concat(Sr.size / cS * (Sr.flipY ? -1 : 1), ") "), fr + "rotate(".concat(Sr.rotate, "deg) ")
      }({
        transform: Wr,
        startCentered: !0,
        width: Qr,
        height: Zr
      }), pr["-webkit-transform"] = pr.transform);
      var xr = dS(pr);
      xr.length > 0 && (Er.style = xr);
      var mr = [];
      return mr.push({
        tag: "span",
        attributes: Er,
        children: [Sr]
      }), mr
    }
    var SZ = WQ.styles;

    function QZ(rr) {
      var Sr = rr[0],
        Qr = rr[1],
        Zr = Er(rr.slice(4), 1)[0];
      return {
        found: !0,
        width: Sr,
        height: Qr,
        icon: Array.isArray(Zr) ? {
          tag: "g",
          attributes: {
            class: "".concat(iS.cssPrefix, "-").concat(MS.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(iS.cssPrefix, "-").concat(MS.SECONDARY),
              fill: "currentColor",
              d: Zr[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(iS.cssPrefix, "-").concat(MS.PRIMARY),
              fill: "currentColor",
              d: Zr[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: Zr
          }
        }
      }
    }
    var ZZ = {
      found: !1,
      width: 512,
      height: 512
    };

    function WZ(rr, Sr) {
      var Qr = Sr;
      return "fa" === Sr && null !== iS.styleDefault && (Sr = PQ()), new Promise((function(Zr, Wr) {
        if ("fa" === Qr) {
          var ar = XQ(rr) || {};
          rr = ar.iconName || rr, Sr = ar.prefix || Sr
        }
        if (rr && Sr && SZ[Sr] && SZ[Sr][rr]) return Zr(QZ(SZ[Sr][rr]));
        ! function(rr, Sr) {
          BS || iS.showMissingIcons || !rr || console.error('Icon with name "'.concat(rr, '" and prefix "').concat(Sr, '" is missing.'))
        }(rr, Sr), Zr(fr(fr({}, ZZ), {}, {
          icon: iS.showMissingIcons && rr && FQ("missingIconAbstract") || {}
        }))
      }))
    }
    var aZ = function() {},
      jZ = iS.measurePerformance && Or && Or.mark && Or.measure ? Or : {
        mark: aZ,
        measure: aZ
      },
      IZ = 'FA "7.2.0"',
      fZ = function(rr) {
        jZ.mark("".concat(IZ, " ").concat(rr, " ends")), jZ.measure("".concat(IZ, " ").concat(rr), "".concat(IZ, " ").concat(rr, " begins"), "".concat(IZ, " ").concat(rr, " ends"))
      },
      EZ = function(rr) {
        return jZ.mark("".concat(IZ, " ").concat(rr, " begins")),
          function() {
            return fZ(rr)
          }
      },
      pZ = function() {};

    function xZ(rr) {
      return "string" === typeof(rr.getAttribute ? rr.getAttribute(hS) : null)
    }

    function mZ(rr) {
      return Tr.createElementNS("http://www.w3.org/2000/svg", rr)
    }

    function NZ(rr) {
      return Tr.createElement(rr)
    }

    function UZ(rr) {
      var Sr = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        Qr = void 0 === Sr ? "svg" === rr.tag ? mZ : NZ : Sr;
      if ("string" === typeof rr) return Tr.createTextNode(rr);
      var Zr = Qr(rr.tag);
      return Object.keys(rr.attributes || []).forEach((function(Sr) {
        Zr.setAttribute(Sr, rr.attributes[Sr])
      })), (rr.children || []).forEach((function(rr) {
        Zr.appendChild(UZ(rr, {
          ceFn: Qr
        }))
      })), Zr
    }
    var tZ = {
      replace: function(rr) {
        var Sr = rr[0];
        if (Sr.parentNode)
          if (rr[1].forEach((function(rr) {
              Sr.parentNode.insertBefore(UZ(rr), Sr)
            })), null === Sr.getAttribute(hS) && iS.keepOriginalSource) {
            var Qr = Tr.createComment(function(rr) {
              var Sr = " ".concat(rr.outerHTML, " ");
              return "".concat(Sr, "Font Awesome fontawesome.com ")
            }(Sr));
            Sr.parentNode.replaceChild(Qr, Sr)
          } else Sr.remove()
      },
      nest: function(rr) {
        var Sr = rr[0],
          Qr = rr[1];
        if (~JS(Sr).indexOf(iS.replacementClass)) return tZ.replace(rr);
        var Zr = new RegExp("".concat(iS.cssPrefix, "-.*"));
        if (delete Qr[0].attributes.id, Qr[0].attributes.class) {
          var Wr = Qr[0].attributes.class.split(" ").reduce((function(rr, Sr) {
            return Sr === iS.replacementClass || Sr.match(Zr) ? rr.toSvg.push(Sr) : rr.toNode.push(Sr), rr
          }), {
            toNode: [],
            toSvg: []
          });
          Qr[0].attributes.class = Wr.toSvg.join(" "), 0 === Wr.toNode.length ? Sr.removeAttribute("class") : Sr.setAttribute("class", Wr.toNode.join(" "))
        }
        var ar = Qr.map((function(rr) {
          return fQ(rr)
        })).join("\n");
        Sr.setAttribute(hS, ""), Sr.innerHTML = ar
      }
    };

    function hZ(rr) {
      rr()
    }

    function zZ(rr, Sr) {
      var Qr = "function" === typeof Sr ? Sr : pZ;
      if (0 === rr.length) Qr();
      else {
        var Zr = hZ;
        "async" === iS.mutateApproach && (Zr = Br.requestAnimationFrame || hZ), Zr((function() {
          var Sr = !0 === iS.autoReplaceSvg ? tZ.replace : tZ[iS.autoReplaceSvg] || tZ.replace,
            Zr = EZ("mutate");
          rr.map(Sr), Zr(), Qr()
        }))
      }
    }
    var YZ = !1;

    function nZ() {
      YZ = !0
    }

    function eZ() {
      YZ = !1
    }
    var KZ = null;

    function yZ(rr) {
      if (vr && iS.observeMutations) {
        var Sr = rr.treeCallback,
          Qr = void 0 === Sr ? pZ : Sr,
          Zr = rr.nodeCallback,
          Wr = void 0 === Zr ? pZ : Zr,
          ar = rr.pseudoElementsCallback,
          jr = void 0 === ar ? pZ : ar,
          Ir = rr.observeMutationsRoot,
          fr = void 0 === Ir ? Tr : Ir;
        KZ = new vr((function(rr) {
          if (!YZ) {
            var Sr = PQ();
            bS(rr).forEach((function(rr) {
              if ("childList" === rr.type && rr.addedNodes.length > 0 && !xZ(rr.addedNodes[0]) && (iS.searchPseudoElements && jr(rr.target), Qr(rr.target)), "attributes" === rr.type && rr.target.parentNode && iS.searchPseudoElements && jr([rr.target], !0), "attributes" === rr.type && xZ(rr.target) && ~CS.indexOf(rr.attributeName))
                if ("class" === rr.attributeName && function(rr) {
                    var Sr = rr.getAttribute ? rr.getAttribute(YS) : null,
                      Qr = rr.getAttribute ? rr.getAttribute(nS) : null;
                    return Sr && Qr
                  }(rr.target)) {
                  var Zr = gQ(JS(rr.target)),
                    ar = Zr.prefix,
                    Ir = Zr.iconName;
                  rr.target.setAttribute(YS, ar || Sr), Ir && rr.target.setAttribute(nS, Ir)
                } else(fr = rr.target) && fr.classList && fr.classList.contains && fr.classList.contains(iS.replacementClass) && Wr(rr.target);
              var fr
            }))
          }
        })), Lr && KZ.observe(fr, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function BZ(rr) {
      var Sr, Qr, Zr = rr.getAttribute("data-prefix"),
        Wr = rr.getAttribute("data-icon"),
        ar = void 0 !== rr.innerText ? rr.innerText.trim() : "",
        jr = gQ(JS(rr));
      return jr.prefix || (jr.prefix = PQ()), Zr && Wr && (jr.prefix = Zr, jr.iconName = Wr), jr.iconName && jr.prefix || (jr.prefix && ar.length > 0 && (jr.iconName = (Sr = jr.prefix, Qr = rr.innerText, (eQ[Sr] || {})[Qr] || LQ(jr.prefix, xQ(rr.innerText)))), !jr.iconName && iS.autoFetchSvg && rr.firstChild && rr.firstChild.nodeType === Node.TEXT_NODE && (jr.iconName = rr.firstChild.data)), jr
    }

    function TZ(rr) {
      var Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        Qr = BZ(rr),
        Zr = Qr.iconName,
        Wr = Qr.prefix,
        ar = Qr.rest,
        jr = function(rr) {
          return bS(rr.attributes).reduce((function(rr, Sr) {
            return "class" !== rr.name && "style" !== rr.name && (rr[Sr.name] = Sr.value), rr
          }), {})
        }(rr),
        Ir = wQ("parseNodeAttributes", {}, rr),
        Er = Sr.styleParser ? function(rr) {
          var Sr = rr.getAttribute("style"),
            Qr = [];
          return Sr && (Qr = Sr.split(";").reduce((function(rr, Sr) {
            var Qr = Sr.split(":"),
              Zr = Qr[0],
              Wr = Qr.slice(1);
            return Zr && Wr.length > 0 && (rr[Zr] = Wr.join(":").trim()), rr
          }), {})), Qr
        }(rr) : [];
      return fr({
        iconName: Zr,
        prefix: Wr,
        transform: FS,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: ar,
          styles: Er,
          attributes: jr
        }
      }, Ir)
    }
    var vZ = WQ.styles;

    function OZ(rr) {
      var Sr = "nest" === iS.autoReplaceSvg ? TZ(rr, {
        styleParser: !1
      }) : TZ(rr);
      return ~Sr.extra.classes.indexOf(RS) ? FQ("generateLayersText", rr, Sr) : FQ("generateSvgReplacementMutation", rr, Sr)
    }

    function LZ(rr) {
      var Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!Lr) return Promise.resolve();
      var Qr = Tr.documentElement.classList,
        Zr = function(rr) {
          return Qr.add("".concat(eS, "-").concat(rr))
        },
        Wr = function(rr) {
          return Qr.remove("".concat(eS, "-").concat(rr))
        },
        ar = iS.autoFetchSvg ? [].concat(pr(rS), pr(pS)) : Pr.concat(Object.keys(vZ));
      ar.includes("fa") || ar.push("fa");
      var jr = [".".concat(RS, ":not([").concat(hS, "])")].concat(ar.map((function(rr) {
        return ".".concat(rr, ":not([").concat(hS, "])")
      }))).join(", ");
      if (0 === jr.length) return Promise.resolve();
      var Ir = [];
      try {
        Ir = bS(rr.querySelectorAll(jr))
      } catch (xr) {}
      if (!(Ir.length > 0)) return Promise.resolve();
      Zr("pending"), Wr("complete");
      var fr = EZ("onTree"),
        Er = Ir.reduce((function(rr, Sr) {
          try {
            var Qr = OZ(Sr);
            Qr && rr.push(Qr)
          } catch (xr) {
            BS || "MissingIcon" === xr.name && console.error(xr)
          }
          return rr
        }), []);
      return new Promise((function(rr, Qr) {
        Promise.all(Er).then((function(Qr) {
          zZ(Qr, (function() {
            Zr("active"), Zr("complete"), Wr("pending"), "function" === typeof Sr && Sr(), fr(), rr()
          }))
        })).catch((function(rr) {
          fr(), Qr(rr)
        }))
      }))
    }

    function lZ(rr) {
      var Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      OZ(rr).then((function(rr) {
        rr && zZ([rr], Sr)
      }))
    }
    var XZ = function(rr) {
        var Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Qr = Sr.transform,
          Zr = void 0 === Qr ? FS : Qr,
          Wr = Sr.symbol,
          ar = void 0 !== Wr && Wr,
          jr = Sr.mask,
          Ir = void 0 === jr ? null : jr,
          Er = Sr.maskId,
          pr = void 0 === Er ? null : Er,
          xr = Sr.classes,
          mr = void 0 === xr ? [] : xr,
          Nr = Sr.attributes,
          Ur = void 0 === Nr ? {} : Nr,
          tr = Sr.styles,
          hr = void 0 === tr ? {} : tr;
        if (rr) {
          var zr = rr.prefix,
            Yr = rr.iconName,
            nr = rr.icon;
          return sQ(fr({
            type: "icon"
          }, rr), (function() {
            return cQ("beforeDOMElementCreation", {
              iconDefinition: rr,
              params: Sr
            }), uQ({
              icons: {
                main: QZ(nr),
                mask: Ir ? QZ(Ir.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: zr,
              iconName: Yr,
              transform: fr(fr({}, FS), Zr),
              symbol: ar,
              maskId: pr,
              extra: {
                attributes: Ur,
                styles: hr,
                classes: mr
              }
            })
          }))
        }
      },
      PZ = {
        mixout: function() {
          return {
            icon: (rr = XZ, function(Sr) {
              var Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Zr = (Sr || {}).icon ? Sr : oQ(Sr || {}),
                Wr = Qr.mask;
              return Wr && (Wr = (Wr || {}).icon ? Wr : oQ(Wr || {})), rr(Zr, fr(fr({}, Qr), {}, {
                mask: Wr
              }))
            })
          };
          var rr
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(rr) {
              return rr.treeCallback = LZ, rr.nodeCallback = lZ, rr
            }
          }
        },
        provides: function(rr) {
          rr.i2svg = function(rr) {
            var Sr = rr.node,
              Qr = void 0 === Sr ? Tr : Sr,
              Zr = rr.callback;
            return LZ(Qr, void 0 === Zr ? function() {} : Zr)
          }, rr.generateSvgReplacementMutation = function(rr, Sr) {
            var Qr = Sr.iconName,
              Zr = Sr.prefix,
              Wr = Sr.transform,
              ar = Sr.symbol,
              jr = Sr.mask,
              Ir = Sr.maskId,
              fr = Sr.extra;
            return new Promise((function(Sr, pr) {
              Promise.all([WZ(Qr, Zr), jr.iconName ? WZ(jr.iconName, jr.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(jr) {
                var pr = Er(jr, 2),
                  xr = pr[0],
                  mr = pr[1];
                Sr([rr, uQ({
                  icons: {
                    main: xr,
                    mask: mr
                  },
                  prefix: Zr,
                  iconName: Qr,
                  transform: Wr,
                  symbol: ar,
                  maskId: Ir,
                  extra: fr,
                  watchable: !0
                })])
              })).catch(pr)
            }))
          }, rr.generateAbstractIcon = function(rr) {
            var Sr, Qr = rr.children,
              Zr = rr.attributes,
              Wr = rr.main,
              ar = rr.transform,
              jr = dS(rr.styles);
            return jr.length > 0 && (Zr.style = jr), sS(ar) && (Sr = FQ("generateAbstractTransformGrouping", {
              main: Wr,
              transform: ar,
              containerWidth: Wr.width,
              iconWidth: Wr.width
            })), Qr.push(Sr || Wr.icon), {
              children: Qr,
              attributes: Zr
            }
          }
        }
      },
      HZ = {
        mixout: function() {
          return {
            layer: function(rr) {
              var Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Qr = Sr.classes,
                Zr = void 0 === Qr ? [] : Qr;
              return sQ({
                type: "layer"
              }, (function() {
                cQ("beforeDOMElementCreation", {
                  assembler: rr,
                  params: Sr
                });
                var Qr = [];
                return rr((function(rr) {
                  Array.isArray(rr) ? rr.map((function(rr) {
                    Qr = Qr.concat(rr.abstract)
                  })) : Qr = Qr.concat(rr.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(iS.cssPrefix, "-layers")].concat(pr(Zr)).join(" ")
                  },
                  children: Qr
                }]
              }))
            }
          }
        }
      },
      qZ = {
        mixout: function() {
          return {
            counter: function(rr) {
              var Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Qr = Sr.title,
                Zr = void 0 === Qr ? null : Qr,
                Wr = Sr.classes,
                ar = void 0 === Wr ? [] : Wr,
                jr = Sr.attributes,
                Ir = void 0 === jr ? {} : jr,
                Er = Sr.styles,
                xr = void 0 === Er ? {} : Er;
              return sQ({
                type: "counter",
                content: rr
              }, (function() {
                return cQ("beforeDOMElementCreation", {
                    content: rr,
                    params: Sr
                  }),
                  function(rr) {
                    var Sr = rr.content,
                      Qr = rr.extra,
                      Zr = fr(fr({}, Qr.attributes), {}, {
                        class: Qr.classes.join(" ")
                      }),
                      Wr = dS(Qr.styles);
                    Wr.length > 0 && (Zr.style = Wr);
                    var ar = [];
                    return ar.push({
                      tag: "span",
                      attributes: Zr,
                      children: [Sr]
                    }), ar
                  }({
                    content: rr.toString(),
                    title: Zr,
                    extra: {
                      attributes: Ir,
                      styles: xr,
                      classes: ["".concat(iS.cssPrefix, "-layers-counter")].concat(pr(ar))
                    }
                  })
              }))
            }
          }
        }
      },
      RZ = {
        mixout: function() {
          return {
            text: function(rr) {
              var Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Qr = Sr.transform,
                Zr = void 0 === Qr ? FS : Qr,
                Wr = Sr.classes,
                ar = void 0 === Wr ? [] : Wr,
                jr = Sr.attributes,
                Ir = void 0 === jr ? {} : jr,
                Er = Sr.styles,
                xr = void 0 === Er ? {} : Er;
              return sQ({
                type: "text",
                content: rr
              }, (function() {
                return cQ("beforeDOMElementCreation", {
                  content: rr,
                  params: Sr
                }), rZ({
                  content: rr,
                  transform: fr(fr({}, FS), Zr),
                  extra: {
                    attributes: Ir,
                    styles: xr,
                    classes: ["".concat(iS.cssPrefix, "-layers-text")].concat(pr(ar))
                  }
                })
              }))
            }
          }
        },
        provides: function(rr) {
          rr.generateLayersText = function(rr, Sr) {
            var Qr = Sr.transform,
              Zr = Sr.extra,
              Wr = null,
              ar = null;
            if (lr) {
              var jr = parseInt(getComputedStyle(rr).fontSize, 10),
                Ir = rr.getBoundingClientRect();
              Wr = Ir.width / jr, ar = Ir.height / jr
            }
            return Promise.resolve([rr, rZ({
              content: rr.innerHTML,
              width: Wr,
              height: ar,
              transform: Qr,
              extra: Zr,
              watchable: !0
            })])
          }
        }
      },
      gZ = new RegExp('"', "ug"),
      CZ = [1105920, 1112319],
      MZ = fr(fr(fr(fr({}, {
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
      GZ = Object.keys(MZ).reduce((function(rr, Sr) {
        return rr[Sr.toLowerCase()] = MZ[Sr], rr
      }), {}),
      kZ = Object.keys(GZ).reduce((function(rr, Sr) {
        var Qr = GZ[Sr];
        return rr[Sr] = Qr[900] || pr(Object.entries(Qr))[0][1], rr
      }), {});

    function AZ(rr, Sr) {
      var Qr = "".concat("data-fa-pseudo-element-pending").concat(Sr.replace(":", "-"));
      return new Promise((function(Zr, Wr) {
        if (null !== rr.getAttribute(Qr)) return Zr();
        var ar = bS(rr.children).filter((function(rr) {
            return rr.getAttribute(zS) === Sr
          }))[0],
          jr = Br.getComputedStyle(rr, Sr),
          Ir = jr.getPropertyValue("font-family"),
          Er = Ir.match(gS),
          xr = jr.getPropertyValue("font-weight"),
          mr = jr.getPropertyValue("content");
        if (ar && !Er) return rr.removeChild(ar), Zr();
        if (Er && "none" !== mr && "" !== mr) {
          var Nr = jr.getPropertyValue("content"),
            Ur = function(rr, Sr) {
              var Qr = rr.replace(/^['"]|['"]$/g, "").toLowerCase(),
                Zr = parseInt(Sr),
                Wr = isNaN(Zr) ? "normal" : Zr;
              return (GZ[Qr] || {})[Wr] || kZ[Qr]
            }(Ir, xr),
            tr = function(rr) {
              return xQ(pr(rr.replace(gZ, ""))[0] || "")
            }(Nr),
            hr = Er[0].startsWith("FontAwesome"),
            zr = function(rr) {
              var Sr = rr.getPropertyValue("font-feature-settings").includes("ss01"),
                Qr = rr.getPropertyValue("content").replace(gZ, ""),
                Zr = Qr.codePointAt(0),
                Wr = Zr >= CZ[0] && Zr <= CZ[1],
                ar = 2 === Qr.length && Qr[0] === Qr[1];
              return Wr || ar || Sr
            }(jr),
            Yr = LQ(Ur, tr),
            nr = Yr;
          if (hr) {
            var er = function(rr) {
              var Sr = yQ[rr],
                Qr = LQ("fas", rr);
              return Sr || (Qr ? {
                prefix: "fas",
                iconName: Qr
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(tr);
            er.iconName && er.prefix && (Yr = er.iconName, Ur = er.prefix)
          }
          if (!Yr || zr || ar && ar.getAttribute(YS) === Ur && ar.getAttribute(nS) === nr) Zr();
          else {
            rr.setAttribute(Qr, nr), ar && rr.removeChild(ar);
            var Kr = {
                iconName: null,
                prefix: null,
                transform: FS,
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
              yr = Kr.extra;
            yr.attributes[zS] = Sr, WZ(Yr, Ur).then((function(Wr) {
              var ar = uQ(fr(fr({}, Kr), {}, {
                  icons: {
                    main: Wr,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: Ur,
                  iconName: nr,
                  extra: yr,
                  watchable: !0
                })),
                jr = Tr.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === Sr ? rr.insertBefore(jr, rr.firstChild) : rr.appendChild(jr), jr.outerHTML = ar.map((function(rr) {
                return fQ(rr)
              })).join("\n"), rr.removeAttribute(Qr), Zr()
            })).catch(Wr)
          }
        } else Zr()
      }))
    }

    function VZ(rr) {
      return Promise.all([AZ(rr, "::before"), AZ(rr, "::after")])
    }

    function iZ(rr) {
      return rr.parentNode !== document.head && !~KS.indexOf(rr.tagName.toUpperCase()) && !rr.getAttribute(zS) && (!rr.parentNode || "svg" !== rr.parentNode.tagName)
    }
    var wZ = function(rr) {
        return !!rr && yS.some((function(Sr) {
          return rr.includes(Sr)
        }))
      },
      cZ = function(rr) {
        if (!rr) return [];
        var Sr = new Set,
          Qr = rr.split(/,(?![^()]*\))/).map((function(rr) {
            return rr.trim()
          }));
        Qr = Qr.flatMap((function(rr) {
          return rr.includes("(") ? rr : rr.split(",").map((function(rr) {
            return rr.trim()
          }))
        }));
        var Zr, Wr = ar(Qr);
        try {
          for (Wr.s(); !(Zr = Wr.n()).done;) {
            var jr = Zr.value;
            if (wZ(jr)) {
              var Ir = yS.reduce((function(rr, Sr) {
                return rr.replace(Sr, "")
              }), jr);
              "" !== Ir && "*" !== Ir && Sr.add(Ir)
            }
          }
        } catch (fr) {
          Wr.e(fr)
        } finally {
          Wr.f()
        }
        return Sr
      };

    function FZ(rr) {
      if (Lr) {
        var Sr;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) Sr = rr;
        else if (iS.searchPseudoElementsFullScan) Sr = rr.querySelectorAll("*");
        else {
          var Qr, Zr = new Set,
            Wr = ar(document.styleSheets);
          try {
            for (Wr.s(); !(Qr = Wr.n()).done;) {
              var jr = Qr.value;
              try {
                var Ir, fr = ar(jr.cssRules);
                try {
                  for (fr.s(); !(Ir = fr.n()).done;) {
                    var Er, pr = Ir.value,
                      xr = ar(cZ(pr.selectorText));
                    try {
                      for (xr.s(); !(Er = xr.n()).done;) {
                        var mr = Er.value;
                        Zr.add(mr)
                      }
                    } catch (Ur) {
                      xr.e(Ur)
                    } finally {
                      xr.f()
                    }
                  }
                } catch (Ur) {
                  fr.e(Ur)
                } finally {
                  fr.f()
                }
              } catch (tr) {
                iS.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(jr.href, " (").concat(tr.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (Ur) {
            Wr.e(Ur)
          } finally {
            Wr.f()
          }
          if (!Zr.size) return;
          var Nr = Array.from(Zr).join(", ");
          try {
            Sr = rr.querySelectorAll(Nr)
          } catch (hr) {}
        }
        return new Promise((function(rr, Qr) {
          var Zr = bS(Sr).filter(iZ).map(VZ),
            Wr = EZ("searchPseudoElements");
          nZ(), Promise.all(Zr).then((function() {
            Wr(), eZ(), rr()
          })).catch((function() {
            Wr(), eZ(), Qr()
          }))
        }))
      }
    }
    var oZ = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(rr) {
              return rr.pseudoElementsCallback = FZ, rr
            }
          }
        },
        provides: function(rr) {
          rr.pseudoElements2svg = function(rr) {
            var Sr = rr.node,
              Qr = void 0 === Sr ? Tr : Sr;
            iS.searchPseudoElements && FZ(Qr)
          }
        }
      },
      bZ = !1,
      JZ = function(rr) {
        return rr.toLowerCase().split(" ").reduce((function(rr, Sr) {
          var Qr = Sr.toLowerCase().split("-"),
            Zr = Qr[0],
            Wr = Qr.slice(1).join("-");
          if (Zr && "h" === Wr) return rr.flipX = !0, rr;
          if (Zr && "v" === Wr) return rr.flipY = !0, rr;
          if (Wr = parseFloat(Wr), isNaN(Wr)) return rr;
          switch (Zr) {
            case "grow":
              rr.size = rr.size + Wr;
              break;
            case "shrink":
              rr.size = rr.size - Wr;
              break;
            case "left":
              rr.x = rr.x - Wr;
              break;
            case "right":
              rr.x = rr.x + Wr;
              break;
            case "up":
              rr.y = rr.y - Wr;
              break;
            case "down":
              rr.y = rr.y + Wr;
              break;
            case "rotate":
              rr.rotate = rr.rotate + Wr
          }
          return rr
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      DZ = {
        mixout: function() {
          return {
            parse: {
              transform: function(rr) {
                return JZ(rr)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(rr, Sr) {
              var Qr = Sr.getAttribute("data-fa-transform");
              return Qr && (rr.transform = JZ(Qr)), rr
            }
          }
        },
        provides: function(rr) {
          rr.generateAbstractTransformGrouping = function(rr) {
            var Sr = rr.main,
              Qr = rr.transform,
              Zr = rr.containerWidth,
              Wr = rr.iconWidth,
              ar = {
                transform: "translate(".concat(Zr / 2, " 256)")
              },
              jr = "translate(".concat(32 * Qr.x, ", ").concat(32 * Qr.y, ") "),
              Ir = "scale(".concat(Qr.size / 16 * (Qr.flipX ? -1 : 1), ", ").concat(Qr.size / 16 * (Qr.flipY ? -1 : 1), ") "),
              Er = "rotate(".concat(Qr.rotate, " 0 0)"),
              pr = {
                outer: ar,
                inner: {
                  transform: "".concat(jr, " ").concat(Ir, " ").concat(Er)
                },
                path: {
                  transform: "translate(".concat(Wr / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: fr({}, pr.outer),
              children: [{
                tag: "g",
                attributes: fr({}, pr.inner),
                children: [{
                  tag: Sr.icon.tag,
                  children: Sr.icon.children,
                  attributes: fr(fr({}, Sr.icon.attributes), pr.path)
                }]
              }]
            }
          }
        }
      },
      dZ = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function sZ(rr) {
      var Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return rr.attributes && (rr.attributes.fill || Sr) && (rr.attributes.fill = "black"), rr
    }
    var uZ = {
        hooks: function() {
          return {
            parseNodeAttributes: function(rr, Sr) {
              var Qr = Sr.getAttribute("data-fa-mask"),
                Zr = Qr ? gQ(Qr.split(" ").map((function(rr) {
                  return rr.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return Zr.prefix || (Zr.prefix = PQ()), rr.mask = Zr, rr.maskId = Sr.getAttribute("data-fa-mask-id"), rr
            }
          }
        },
        provides: function(rr) {
          rr.generateAbstractMask = function(rr) {
            var Sr, Qr = rr.children,
              Zr = rr.attributes,
              Wr = rr.main,
              ar = rr.mask,
              jr = rr.maskId,
              Ir = rr.transform,
              Er = Wr.width,
              pr = Wr.icon,
              xr = ar.width,
              mr = ar.icon,
              Nr = function(rr) {
                var Sr = rr.transform,
                  Qr = rr.containerWidth,
                  Zr = rr.iconWidth,
                  Wr = {
                    transform: "translate(".concat(Qr / 2, " 256)")
                  },
                  ar = "translate(".concat(32 * Sr.x, ", ").concat(32 * Sr.y, ") "),
                  jr = "scale(".concat(Sr.size / 16 * (Sr.flipX ? -1 : 1), ", ").concat(Sr.size / 16 * (Sr.flipY ? -1 : 1), ") "),
                  Ir = "rotate(".concat(Sr.rotate, " 0 0)");
                return {
                  outer: Wr,
                  inner: {
                    transform: "".concat(ar, " ").concat(jr, " ").concat(Ir)
                  },
                  path: {
                    transform: "translate(".concat(Zr / 2 * -1, " -256)")
                  }
                }
              }({
                transform: Ir,
                containerWidth: xr,
                iconWidth: Er
              }),
              Ur = {
                tag: "rect",
                attributes: fr(fr({}, dZ), {}, {
                  fill: "white"
                })
              },
              tr = pr.children ? {
                children: pr.children.map(sZ)
              } : {},
              hr = {
                tag: "g",
                attributes: fr({}, Nr.inner),
                children: [sZ(fr({
                  tag: pr.tag,
                  attributes: fr(fr({}, pr.attributes), Nr.path)
                }, tr))]
              },
              zr = {
                tag: "g",
                attributes: fr({}, Nr.outer),
                children: [hr]
              },
              Yr = "mask-".concat(jr || oS()),
              nr = "clip-".concat(jr || oS()),
              er = {
                tag: "mask",
                attributes: fr(fr({}, dZ), {}, {
                  id: Yr,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [Ur, zr]
              },
              Kr = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: nr
                  },
                  children: (Sr = mr, "g" === Sr.tag ? Sr.children : [Sr])
                }, er]
              };
            return Qr.push(Kr, {
              tag: "rect",
              attributes: fr({
                fill: "currentColor",
                "clip-path": "url(#".concat(nr, ")"),
                mask: "url(#".concat(Yr, ")")
              }, dZ)
            }), {
              children: Qr,
              attributes: Zr
            }
          }
        }
      },
      rW = {
        provides: function(rr) {
          var Sr = !1;
          Br.matchMedia && (Sr = Br.matchMedia("(prefers-reduced-motion: reduce)").matches), rr.missingIconAbstract = function() {
            var rr = [],
              Qr = {
                fill: "currentColor"
              },
              Zr = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            rr.push({
              tag: "path",
              attributes: fr(fr({}, Qr), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var Wr = fr(fr({}, Zr), {}, {
                attributeName: "opacity"
              }),
              ar = {
                tag: "circle",
                attributes: fr(fr({}, Qr), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return Sr || ar.children.push({
              tag: "animate",
              attributes: fr(fr({}, Zr), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: fr(fr({}, Wr), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), rr.push(ar), rr.push({
              tag: "path",
              attributes: fr(fr({}, Qr), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: Sr ? [] : [{
                tag: "animate",
                attributes: fr(fr({}, Wr), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), Sr || rr.push({
              tag: "path",
              attributes: fr(fr({}, Qr), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: fr(fr({}, Wr), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: rr
            }
          }
        }
      };
    ! function(rr, Sr) {
      var Qr = Sr.mixoutsTo;
      kQ = rr, AQ = {}, Object.keys(VQ).forEach((function(rr) {
        -1 === iQ.indexOf(rr) && delete VQ[rr]
      })), kQ.forEach((function(rr) {
        var Sr = rr.mixout ? rr.mixout() : {};
        if (Object.keys(Sr).forEach((function(rr) {
            "function" === typeof Sr[rr] && (Qr[rr] = Sr[rr]), "object" === mr(Sr[rr]) && Object.keys(Sr[rr]).forEach((function(Zr) {
              Qr[rr] || (Qr[rr] = {}), Qr[rr][Zr] = Sr[rr][Zr]
            }))
          })), rr.hooks) {
          var Zr = rr.hooks();
          Object.keys(Zr).forEach((function(rr) {
            AQ[rr] || (AQ[rr] = []), AQ[rr].push(Zr[rr])
          }))
        }
        rr.provides && rr.provides(VQ)
      }))
    }([QQ, PZ, HZ, qZ, RZ, oZ, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              nZ(), bZ = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            yZ(wQ("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            KZ && KZ.disconnect()
          },
          watch: function(rr) {
            var Sr = rr.observeMutationsRoot;
            bZ ? eZ() : yZ(wQ("mutationObserverCallbacks", {
              observeMutationsRoot: Sr
            }))
          }
        }
      }
    }, DZ, uZ, rW, {
      hooks: function() {
        return {
          parseNodeAttributes: function(rr, Sr) {
            var Qr = Sr.getAttribute("data-fa-symbol"),
              Zr = null !== Qr && ("" === Qr || Qr);
            return rr.symbol = Zr, rr
          }
        }
      }
    }], {
      mixoutsTo: DQ
    });
    var SW = DQ.noAuto,
      QW = DQ.config,
      ZW = DQ.library,
      WW = DQ.dom,
      aW = DQ.parse,
      jW = DQ.findIconDefinition,
      IW = DQ.toHtml,
      fW = DQ.icon,
      EW = DQ.layer,
      pW = DQ.text,
      xW = DQ.counter
  },
  7711: rr => {
    rr.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);