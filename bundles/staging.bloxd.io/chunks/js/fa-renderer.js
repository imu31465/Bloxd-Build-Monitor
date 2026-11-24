/*! For license information please see mpd96o.fa-renderer.03df4133.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6634: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      FontAwesomeIcon: () => cm
    });
    var hm = fm(6632),
      Am = fm(4909),
      am = fm.n(Am),
      xm = fm(59);

    function wm(mm, Tm) {
      (null == Tm || Tm > mm.length) && (Tm = mm.length);
      for (var fm = 0, hm = Array(Tm); fm < Tm; fm++) hm[fm] = mm[fm];
      return hm
    }

    function Dm(mm, Tm, fm) {
      return (Tm = function(mm) {
        var Tm = function(mm, Tm) {
          if ("object" != typeof mm || !mm) return mm;
          var fm = mm[Symbol.toPrimitive];
          if (void 0 !== fm) {
            var hm = fm.call(mm, Tm || "default");
            if ("object" != typeof hm) return hm;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === Tm ? String : Number)(mm)
        }(mm, "string");
        return "symbol" == typeof Tm ? Tm : Tm + ""
      }(Tm)) in mm ? Object.defineProperty(mm, Tm, {
        value: fm,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : mm[Tm] = fm, mm
    }

    function im(mm, Tm) {
      var fm = Object.keys(mm);
      if (Object.getOwnPropertySymbols) {
        var hm = Object.getOwnPropertySymbols(mm);
        Tm && (hm = hm.filter((function(Tm) {
          return Object.getOwnPropertyDescriptor(mm, Tm).enumerable
        }))), fm.push.apply(fm, hm)
      }
      return fm
    }

    function Rm(mm) {
      for (var Tm = 1; Tm < arguments.length; Tm++) {
        var fm = null != arguments[Tm] ? arguments[Tm] : {};
        Tm % 2 ? im(Object(fm), !0).forEach((function(Tm) {
          Dm(mm, Tm, fm[Tm])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(mm, Object.getOwnPropertyDescriptors(fm)) : im(Object(fm)).forEach((function(Tm) {
          Object.defineProperty(mm, Tm, Object.getOwnPropertyDescriptor(fm, Tm))
        }))
      }
      return mm
    }

    function pm(mm, Tm) {
      return function(mm) {
        if (Array.isArray(mm)) return mm
      }(mm) || function(mm, Tm) {
        var fm = null == mm ? null : "undefined" != typeof Symbol && mm[Symbol.iterator] || mm["@@iterator"];
        if (null != fm) {
          var hm, Am, am, xm, wm = [],
            Dm = !0,
            im = !1;
          try {
            if (am = (fm = fm.call(mm)).next, 0 === Tm) {
              if (Object(fm) !== fm) return;
              Dm = !1
            } else
              for (; !(Dm = (hm = am.call(fm)).done) && (wm.push(hm.value), wm.length !== Tm); Dm = !0);
          } catch (mm) {
            im = !0, Am = mm
          } finally {
            try {
              if (!Dm && null != fm.return && (xm = fm.return(), Object(xm) !== xm)) return
            } finally {
              if (im) throw Am
            }
          }
          return wm
        }
      }(mm, Tm) || Om(mm, Tm) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Em(mm) {
      return function(mm) {
        if (Array.isArray(mm)) return wm(mm)
      }(mm) || function(mm) {
        if ("undefined" != typeof Symbol && null != mm[Symbol.iterator] || null != mm["@@iterator"]) return Array.from(mm)
      }(mm) || Om(mm) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function om(mm) {
      return om = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(mm) {
        return typeof mm
      } : function(mm) {
        return mm && "function" == typeof Symbol && mm.constructor === Symbol && mm !== Symbol.prototype ? "symbol" : typeof mm
      }, om(mm)
    }

    function Om(mm, Tm) {
      if (mm) {
        if ("string" == typeof mm) return wm(mm, Tm);
        var fm = {}.toString.call(mm).slice(8, -1);
        return "Object" === fm && mm.constructor && (fm = mm.constructor.name), "Map" === fm || "Set" === fm ? Array.from(mm) : "Arguments" === fm || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(fm) ? wm(mm, Tm) : void 0
      }
    }
    var Ym;
    try {
      var qm = fm(6636);
      Ym = qm.version
    } catch (Zm) {
      Ym = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function jm(mm) {
      var Tm = mm.beat,
        fm = mm.fade,
        hm = mm.beatFade,
        Am = mm.bounce,
        am = mm.shake,
        xm = mm.flash,
        wm = mm.spin,
        im = mm.spinPulse,
        Rm = mm.spinReverse,
        Em = mm.pulse,
        om = mm.fixedWidth,
        Om = mm.inverse,
        qm = mm.border,
        jm = mm.listItem,
        Vm = mm.flip,
        Im = mm.size,
        Km = mm.rotation,
        Qm = mm.pull,
        nm = mm.swapOpacity,
        Jm = mm.rotateBy,
        cm = mm.widthAuto,
        zm = function(mm, Tm) {
          for (var fm = pm(mm.split("-"), 2), hm = fm[0], Am = fm[1], am = pm(Tm.split("-"), 2), xm = am[0], wm = am[1], Dm = hm.split("."), im = xm.split("."), Rm = 0; Rm < Math.max(Dm.length, im.length); Rm++) {
            var Em = Dm[Rm] || "0",
              om = im[Rm] || "0",
              Om = parseInt(Em, 10),
              Ym = parseInt(om, 10);
            if (Om !== Ym) return Om > Ym
          }
          for (var qm = 0; qm < Math.max(Dm.length, im.length); qm++) {
            var jm = Dm[qm] || "0",
              Vm = im[qm] || "0";
            if (jm !== Vm && jm.length !== Vm.length) return jm.length < Vm.length
          }
          return !(Am && !wm)
        }(Ym, "7.0.0"),
        Zm = Dm(Dm(Dm(Dm(Dm(Dm({
          "fa-beat": Tm,
          "fa-fade": fm,
          "fa-beat-fade": hm,
          "fa-bounce": Am,
          "fa-shake": am,
          "fa-flash": xm,
          "fa-spin": wm,
          "fa-spin-reverse": Rm,
          "fa-spin-pulse": im,
          "fa-pulse": Em,
          "fa-fw": om,
          "fa-inverse": Om,
          "fa-border": qm,
          "fa-li": jm,
          "fa-flip": !0 === Vm,
          "fa-flip-horizontal": "horizontal" === Vm || "both" === Vm,
          "fa-flip-vertical": "vertical" === Vm || "both" === Vm
        }, "fa-".concat(Im), "undefined" !== typeof Im && null !== Im), "fa-rotate-".concat(Km), "undefined" !== typeof Km && null !== Km && 0 !== Km), "fa-pull-".concat(Qm), "undefined" !== typeof Qm && null !== Qm), "fa-swap-opacity", nm), "fa-rotate-by", zm && Jm), "fa-width-auto", zm && cm);
      return Object.keys(Zm).map((function(mm) {
        return Zm[mm] ? mm : null
      })).filter((function(mm) {
        return mm
      }))
    }

    function Vm(mm) {
      return Tm = mm, (Tm -= 0) === Tm ? mm : (mm = mm.replace(/[\-_\s]+(.)?/g, (function(mm, Tm) {
        return Tm ? Tm.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + mm.substr(1);
      var Tm
    }
    var Im = ["style"];
    var Km = !1;
    try {
      Km = !0
    } catch (Zm) {}

    function Qm(mm) {
      return mm && "object" === om(mm) && mm.prefix && mm.iconName && mm.icon ? mm : hm.parse.icon ? hm.parse.icon(mm) : null === mm ? null : mm && "object" === om(mm) && mm.prefix && mm.iconName ? mm : Array.isArray(mm) && 2 === mm.length ? {
        prefix: mm[0],
        iconName: mm[1]
      } : "string" === typeof mm ? {
        prefix: "fas",
        iconName: mm
      } : void 0
    }

    function nm(mm, Tm) {
      return Array.isArray(Tm) && Tm.length > 0 || !Array.isArray(Tm) && Tm ? Dm({}, mm, Tm) : {}
    }
    var Jm = {
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
      cm = xm.forwardRef((function(mm, Tm) {
        var fm = Rm(Rm({}, Jm), mm),
          Am = fm.icon,
          am = fm.mask,
          xm = fm.symbol,
          wm = fm.className,
          Dm = fm.title,
          im = fm.titleId,
          pm = fm.maskId,
          om = Qm(Am),
          Om = nm("classes", [].concat(Em(jm(fm)), Em((wm || "").split(" ")))),
          Ym = nm("transform", "string" === typeof fm.transform ? hm.parse.transform(fm.transform) : fm.transform),
          qm = nm("mask", Qm(am)),
          Vm = (0, hm.icon)(om, Rm(Rm(Rm(Rm({}, Om), Ym), qm), {}, {
            symbol: xm,
            title: Dm,
            titleId: im,
            maskId: pm
          }));
        if (!Vm) return function() {
          var mm;
          !Km && console && "function" === typeof console.error && (mm = console).error.apply(mm, arguments)
        }("Could not find icon", om), null;
        var Im = Vm.abstract,
          cm = {
            ref: Tm
          };
        return Object.keys(fm).forEach((function(mm) {
          Jm.hasOwnProperty(mm) || (cm[mm] = fm[mm])
        })), zm(Im[0], cm)
      }));
    cm.displayName = "FontAwesomeIcon", cm.propTypes = {
      beat: am().bool,
      border: am().bool,
      beatFade: am().bool,
      bounce: am().bool,
      className: am().string,
      fade: am().bool,
      flash: am().bool,
      mask: am().oneOfType([am().object, am().array, am().string]),
      maskId: am().string,
      fixedWidth: am().bool,
      inverse: am().bool,
      flip: am().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: am().oneOfType([am().object, am().array, am().string]),
      listItem: am().bool,
      pull: am().oneOf(["right", "left"]),
      pulse: am().bool,
      rotation: am().oneOf([0, 90, 180, 270]),
      rotateBy: am().bool,
      shake: am().bool,
      size: am().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: am().bool,
      spinPulse: am().bool,
      spinReverse: am().bool,
      symbol: am().oneOfType([am().bool, am().string]),
      title: am().string,
      titleId: am().string,
      transform: am().oneOfType([am().string, am().object]),
      swapOpacity: am().bool,
      widthAuto: am().bool
    };
    var zm = function mm(Tm, fm) {
      var hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof fm) return fm;
      var Am = (fm.children || []).map((function(fm) {
          return mm(Tm, fm)
        })),
        am = Object.keys(fm.attributes || {}).reduce((function(mm, Tm) {
          var hm = fm.attributes[Tm];
          switch (Tm) {
            case "class":
              mm.attrs.className = hm, delete fm.attributes.class;
              break;
            case "style":
              mm.attrs.style = hm.split(";").map((function(mm) {
                return mm.trim()
              })).filter((function(mm) {
                return mm
              })).reduce((function(mm, Tm) {
                var fm, hm = Tm.indexOf(":"),
                  Am = Vm(Tm.slice(0, hm)),
                  am = Tm.slice(hm + 1).trim();
                return Am.startsWith("webkit") ? mm[(fm = Am, fm.charAt(0).toUpperCase() + fm.slice(1))] = am : mm[Am] = am, mm
              }), {});
              break;
            default:
              0 === Tm.indexOf("aria-") || 0 === Tm.indexOf("data-") ? mm.attrs[Tm.toLowerCase()] = hm : mm.attrs[Vm(Tm)] = hm
          }
          return mm
        }), {
          attrs: {}
        }),
        xm = hm.style,
        wm = void 0 === xm ? {} : xm,
        Dm = function(mm, Tm) {
          if (null == mm) return {};
          var fm, hm, Am = function(mm, Tm) {
            if (null == mm) return {};
            var fm = {};
            for (var hm in mm)
              if ({}.hasOwnProperty.call(mm, hm)) {
                if (-1 !== Tm.indexOf(hm)) continue;
                fm[hm] = mm[hm]
              } return fm
          }(mm, Tm);
          if (Object.getOwnPropertySymbols) {
            var am = Object.getOwnPropertySymbols(mm);
            for (hm = 0; hm < am.length; hm++) fm = am[hm], -1 === Tm.indexOf(fm) && {}.propertyIsEnumerable.call(mm, fm) && (Am[fm] = mm[fm])
          }
          return Am
        }(hm, Im);
      return am.attrs.style = Rm(Rm({}, am.attrs.style), wm), Tm.apply(void 0, [fm.tag, Rm(Rm({}, am.attrs), Dm)].concat(Em(Am)))
    }.bind(null, xm.createElement)
  },
  4917: (mm, Tm, fm) => {
    var hm = fm(4926);

    function Am() {}

    function am() {}
    am.resetWarningCache = Am, mm.exports = function() {
      function mm(mm, Tm, fm, Am, am, xm) {
        if (xm !== hm) {
          var wm = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw wm.name = "Invariant Violation", wm
        }
      }

      function Tm() {
        return mm
      }
      mm.isRequired = mm;
      var fm = {
        array: mm,
        bigint: mm,
        bool: mm,
        func: mm,
        number: mm,
        object: mm,
        string: mm,
        symbol: mm,
        any: mm,
        arrayOf: Tm,
        element: mm,
        elementType: mm,
        instanceOf: Tm,
        node: mm,
        objectOf: Tm,
        oneOf: Tm,
        oneOfType: Tm,
        shape: Tm,
        exact: Tm,
        checkPropTypes: am,
        resetWarningCache: Am
      };
      return fm.PropTypes = fm, fm
    }
  },
  4909: (mm, Tm, fm) => {
    mm.exports = fm(4917)()
  },
  4926: mm => {
    mm.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6632: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      (null == Tm || Tm > mm.length) && (Tm = mm.length);
      for (var fm = 0, hm = Array(Tm); fm < Tm; fm++) hm[fm] = mm[fm];
      return hm
    }

    function Am(mm, Tm) {
      for (var fm = 0; fm < Tm.length; fm++) {
        var hm = Tm[fm];
        hm.enumerable = hm.enumerable || !1, hm.configurable = !0, "value" in hm && (hm.writable = !0), Object.defineProperty(mm, pm(hm.key), hm)
      }
    }

    function am(mm, Tm) {
      var fm = "undefined" != typeof Symbol && mm[Symbol.iterator] || mm["@@iterator"];
      if (!fm) {
        if (Array.isArray(mm) || (fm = om(mm)) || Tm && mm && "number" == typeof mm.length) {
          fm && (mm = fm);
          var hm = 0,
            Am = function() {};
          return {
            s: Am,
            n: function() {
              return hm >= mm.length ? {
                done: !0
              } : {
                done: !1,
                value: mm[hm++]
              }
            },
            e: function(mm) {
              throw mm
            },
            f: Am
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var am, xm = !0,
        wm = !1;
      return {
        s: function() {
          fm = fm.call(mm)
        },
        n: function() {
          var mm = fm.next();
          return xm = mm.done, mm
        },
        e: function(mm) {
          wm = !0, am = mm
        },
        f: function() {
          try {
            xm || null == fm.return || fm.return()
          } finally {
            if (wm) throw am
          }
        }
      }
    }

    function xm(mm, Tm, fm) {
      return (Tm = pm(Tm)) in mm ? Object.defineProperty(mm, Tm, {
        value: fm,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : mm[Tm] = fm, mm
    }

    function wm(mm, Tm) {
      var fm = Object.keys(mm);
      if (Object.getOwnPropertySymbols) {
        var hm = Object.getOwnPropertySymbols(mm);
        Tm && (hm = hm.filter((function(Tm) {
          return Object.getOwnPropertyDescriptor(mm, Tm).enumerable
        }))), fm.push.apply(fm, hm)
      }
      return fm
    }

    function Dm(mm) {
      for (var Tm = 1; Tm < arguments.length; Tm++) {
        var fm = null != arguments[Tm] ? arguments[Tm] : {};
        Tm % 2 ? wm(Object(fm), !0).forEach((function(Tm) {
          xm(mm, Tm, fm[Tm])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(mm, Object.getOwnPropertyDescriptors(fm)) : wm(Object(fm)).forEach((function(Tm) {
          Object.defineProperty(mm, Tm, Object.getOwnPropertyDescriptor(fm, Tm))
        }))
      }
      return mm
    }

    function im(mm, Tm) {
      return function(mm) {
        if (Array.isArray(mm)) return mm
      }(mm) || function(mm, Tm) {
        var fm = null == mm ? null : "undefined" != typeof Symbol && mm[Symbol.iterator] || mm["@@iterator"];
        if (null != fm) {
          var hm, Am, am, xm, wm = [],
            Dm = !0,
            im = !1;
          try {
            if (am = (fm = fm.call(mm)).next, 0 === Tm) {
              if (Object(fm) !== fm) return;
              Dm = !1
            } else
              for (; !(Dm = (hm = am.call(fm)).done) && (wm.push(hm.value), wm.length !== Tm); Dm = !0);
          } catch (mm) {
            im = !0, Am = mm
          } finally {
            try {
              if (!Dm && null != fm.return && (xm = fm.return(), Object(xm) !== xm)) return
            } finally {
              if (im) throw Am
            }
          }
          return wm
        }
      }(mm, Tm) || om(mm, Tm) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Rm(mm) {
      return function(mm) {
        if (Array.isArray(mm)) return hm(mm)
      }(mm) || function(mm) {
        if ("undefined" != typeof Symbol && null != mm[Symbol.iterator] || null != mm["@@iterator"]) return Array.from(mm)
      }(mm) || om(mm) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pm(mm) {
      var Tm = function(mm, Tm) {
        if ("object" != typeof mm || !mm) return mm;
        var fm = mm[Symbol.toPrimitive];
        if (void 0 !== fm) {
          var hm = fm.call(mm, Tm || "default");
          if ("object" != typeof hm) return hm;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Tm ? String : Number)(mm)
      }(mm, "string");
      return "symbol" == typeof Tm ? Tm : Tm + ""
    }

    function Em(mm) {
      return Em = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(mm) {
        return typeof mm
      } : function(mm) {
        return mm && "function" == typeof Symbol && mm.constructor === Symbol && mm !== Symbol.prototype ? "symbol" : typeof mm
      }, Em(mm)
    }

    function om(mm, Tm) {
      if (mm) {
        if ("string" == typeof mm) return hm(mm, Tm);
        var fm = {}.toString.call(mm).slice(8, -1);
        return "Object" === fm && mm.constructor && (fm = mm.constructor.name), "Map" === fm || "Set" === fm ? Array.from(mm) : "Arguments" === fm || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(fm) ? hm(mm, Tm) : void 0
      }
    }
    fm.r(Tm), fm.d(Tm, {
      api: () => Ff,
      config: () => aA,
      counter: () => OA,
      dom: () => wA,
      findIconDefinition: () => iA,
      icon: () => pA,
      layer: () => EA,
      library: () => xA,
      noAuto: () => AA,
      parse: () => DA,
      text: () => oA,
      toHtml: () => RA
    });
    var Om = function() {},
      Ym = {},
      qm = {},
      jm = null,
      Vm = {
        mark: Om,
        measure: Om
      };
    try {
      "undefined" !== typeof window && (Ym = window), "undefined" !== typeof document && (qm = document), "undefined" !== typeof MutationObserver && (jm = MutationObserver), "undefined" !== typeof performance && (Vm = performance)
    } catch (um) {}
    var Im, Km, Qm = (Ym.navigator || {}).userAgent,
      nm = void 0 === Qm ? "" : Qm,
      Jm = Ym,
      cm = qm,
      zm = jm,
      Zm = Vm,
      km = (Jm.document, !!cm.documentElement && !!cm.head && "function" === typeof cm.addEventListener && "function" === typeof cm.createElement),
      bm = ~nm.indexOf("MSIE") || ~nm.indexOf("Trident/"),
      Sm = {
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
      em = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      Nm = "classic",
      Gm = "duotone",
      Xm = "sharp",
      Pm = "sharp-duotone",
      Hm = "chisel",
      ym = "etch",
      Cm = "graphite",
      rm = "jelly",
      sm = "jelly-duo",
      lm = "jelly-fill",
      Mm = "notdog",
      um = "notdog-duo",
      Bm = "slab",
      Lm = "slab-press",
      tm = "thumbprint",
      Um = "utility",
      dm = "utility-duo",
      gm = "utility-fill",
      Wm = "whiteboard",
      Fm = [Nm, Gm, Xm, Pm, Hm, ym, Cm, rm, sm, lm, Mm, um, Bm, Lm, tm, Um, dm, gm, Wm],
      mT = (xm(xm(xm(xm(xm(xm(xm(xm(xm(xm(Im = {}, Nm, "Classic"), Gm, "Duotone"), Xm, "Sharp"), Pm, "Sharp Duotone"), Hm, "Chisel"), ym, "Etch"), Cm, "Graphite"), rm, "Jelly"), sm, "Jelly Duo"), lm, "Jelly Fill"), xm(xm(xm(xm(xm(xm(xm(xm(xm(Im, Mm, "Notdog"), um, "Notdog Duo"), Bm, "Slab"), Lm, "Slab Press"), tm, "Thumbprint"), Um, "Utility"), dm, "Utility Duo"), gm, "Utility Fill"), Wm, "Whiteboard"), new Map([
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
      TT = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      fT = {
        fak: "kit",
        "fa-kit": "kit"
      },
      hT = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      AT = (xm(xm({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      aT = {
        "kit-duotone": "fakd"
      },
      xT = "duotone-group",
      wT = "swap-opacity",
      DT = "primary",
      iT = "secondary",
      RT = (xm(xm(xm(xm(xm(xm(xm(xm(xm(xm(Km = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), xm(xm(xm(xm(xm(xm(xm(xm(xm(Km, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), xm(xm({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      pT = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      ET = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      oT = ET.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      OT = [].concat(Rm(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", xT, wT, DT, iT]).concat(ET.map((function(mm) {
        return "".concat(mm, "x")
      }))).concat(oT.map((function(mm) {
        return "w-".concat(mm)
      }))),
      YT = "___FONT_AWESOME___",
      qT = "svg-inline--fa",
      jT = "data-fa-i2svg",
      VT = "data-fa-pseudo-element",
      IT = "data-prefix",
      KT = "data-icon",
      QT = "fontawesome-i2svg",
      nT = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      JT = ["::before", "::after", ":before", ":after"],
      cT = function() {
        try {
          return !0
        } catch (mm) {
          return !1
        }
      }();

    function zT(mm) {
      return new Proxy(mm, {
        get: function(mm, Tm) {
          return Tm in mm ? mm[Tm] : mm[Nm]
        }
      })
    }
    var ZT = Dm({}, Sm);
    ZT[Nm] = Dm(Dm(Dm(Dm({}, {
      "fa-duotone": "duotone"
    }), Sm[Nm]), fT), hT);
    var kT = zT(ZT),
      bT = Dm({}, {
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
    bT[Nm] = Dm(Dm(Dm(Dm({}, {
      duotone: "fad"
    }), bT[Nm]), AT), aT);
    var ST = zT(bT),
      eT = Dm({}, RT);
    eT[Nm] = Dm(Dm({}, eT[Nm]), {
      fak: "fa-kit"
    });
    var NT = zT(eT),
      GT = Dm({}, {
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
    GT[Nm] = Dm(Dm({}, GT[Nm]), {
      "fa-kit": "fak"
    });
    zT(GT);
    var XT = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      PT = "fa-layers-text",
      HT = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      yT = (zT(Dm({}, {
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
      CT = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      rT = [].concat(Rm(["kit"]), Rm(OT)),
      sT = Jm.FontAwesomeConfig || {};
    if (cm && "function" === typeof cm.querySelector) {
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
      ].forEach((function(mm) {
        var Tm = im(mm, 2),
          fm = Tm[0],
          hm = Tm[1],
          Am = function(mm) {
            return "" === mm || "false" !== mm && ("true" === mm || mm)
          }(function(mm) {
            var Tm = cm.querySelector("script[" + mm + "]");
            if (Tm) return Tm.getAttribute(mm)
          }(fm));
        void 0 !== Am && null !== Am && (sT[hm] = Am)
      }))
    }
    var lT = {
      styleDefault: "solid",
      familyDefault: Nm,
      cssPrefix: "fa",
      replacementClass: qT,
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
    sT.familyPrefix && (sT.cssPrefix = sT.familyPrefix);
    var MT = Dm(Dm({}, lT), sT);
    MT.autoReplaceSvg || (MT.observeMutations = !1);
    var uT = {};
    Object.keys(lT).forEach((function(mm) {
      Object.defineProperty(uT, mm, {
        enumerable: !0,
        set: function(Tm) {
          MT[mm] = Tm, BT.forEach((function(mm) {
            return mm(uT)
          }))
        },
        get: function() {
          return MT[mm]
        }
      })
    })), Object.defineProperty(uT, "familyPrefix", {
      enumerable: !0,
      set: function(mm) {
        MT.cssPrefix = mm, BT.forEach((function(mm) {
          return mm(uT)
        }))
      },
      get: function() {
        return MT.cssPrefix
      }
    }), Jm.FontAwesomeConfig = uT;
    var BT = [];
    var LT = 16,
      vT = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function tT() {
      for (var mm = 12, Tm = ""; mm-- > 0;) Tm += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return Tm
    }

    function UT(mm) {
      for (var Tm = [], fm = (mm || []).length >>> 0; fm--;) Tm[fm] = mm[fm];
      return Tm
    }

    function dT(mm) {
      return mm.classList ? UT(mm.classList) : (mm.getAttribute("class") || "").split(" ").filter((function(mm) {
        return mm
      }))
    }

    function gT(mm) {
      return "".concat(mm).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function WT(mm) {
      return Object.keys(mm || {}).reduce((function(Tm, fm) {
        return Tm + "".concat(fm, ": ").concat(mm[fm].trim(), ";")
      }), "")
    }

    function FT(mm) {
      return mm.size !== vT.size || mm.x !== vT.x || mm.y !== vT.y || mm.rotate !== vT.rotate || mm.flipX || mm.flipY
    }

    function mf() {
      var mm = "fa",
        Tm = qT,
        fm = uT.cssPrefix,
        hm = uT.replacementClass,
        Am = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (fm !== mm || hm !== Tm) {
        var am = new RegExp("\\.".concat(mm, "\\-"), "g"),
          xm = new RegExp("\\--".concat(mm, "\\-"), "g"),
          wm = new RegExp("\\.".concat(Tm), "g");
        Am = Am.replace(am, ".".concat(fm, "-")).replace(xm, "--".concat(fm, "-")).replace(wm, ".".concat(hm))
      }
      return Am
    }
    var Tf = !1;

    function ff() {
      uT.autoAddCss && !Tf && (! function(mm) {
        if (mm && km) {
          var Tm = cm.createElement("style");
          Tm.setAttribute("type", "text/css"), Tm.innerHTML = mm;
          for (var fm = cm.head.childNodes, hm = null, Am = fm.length - 1; Am > -1; Am--) {
            var am = fm[Am],
              xm = (am.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(xm) > -1 && (hm = am)
          }
          cm.head.insertBefore(Tm, hm)
        }
      }(mf()), Tf = !0)
    }
    var hf = {
        mixout: function() {
          return {
            dom: {
              css: mf,
              insertCss: ff
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              ff()
            },
            beforeI2svg: function() {
              ff()
            }
          }
        }
      },
      Af = Jm || {};
    Af[YT] || (Af[YT] = {}), Af[YT].styles || (Af[YT].styles = {}), Af[YT].hooks || (Af[YT].hooks = {}), Af[YT].shims || (Af[YT].shims = []);
    var af = Af[YT],
      xf = [],
      wf = function() {
        cm.removeEventListener("DOMContentLoaded", wf), Df = 1, xf.map((function(mm) {
          return mm()
        }))
      },
      Df = !1;

    function Rf(mm) {
      var Tm = mm.tag,
        fm = mm.attributes,
        hm = void 0 === fm ? {} : fm,
        Am = mm.children,
        am = void 0 === Am ? [] : Am;
      return "string" === typeof mm ? gT(mm) : "<".concat(Tm, " ").concat(function(mm) {
        return Object.keys(mm || {}).reduce((function(Tm, fm) {
          return Tm + "".concat(fm, '="').concat(gT(mm[fm]), '" ')
        }), "").trim()
      }(hm), ">").concat(am.map(Rf).join(""), "</").concat(Tm, ">")
    }

    function pf(mm, Tm, fm) {
      if (mm && mm[Tm] && mm[Tm][fm]) return {
        prefix: Tm,
        iconName: fm,
        icon: mm[Tm][fm]
      }
    }
    km && ((Df = (cm.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(cm.readyState)) || cm.addEventListener("DOMContentLoaded", wf));
    var Ef = function(mm, Tm, fm, hm) {
      var Am, am, xm, wm = Object.keys(mm),
        Dm = wm.length,
        im = void 0 !== hm ? function(mm, Tm) {
          return function(fm, hm, Am, am) {
            return mm.call(Tm, fm, hm, Am, am)
          }
        }(Tm, hm) : Tm;
      for (void 0 === fm ? (Am = 1, xm = mm[wm[0]]) : (Am = 0, xm = fm); Am < Dm; Am++) xm = im(xm, mm[am = wm[Am]], am, mm);
      return xm
    };

    function of(mm) {
      return 1 !== Rm(mm).length ? null : mm.codePointAt(0).toString(16)
    }

    function Of(mm) {
      return Object.keys(mm).reduce((function(Tm, fm) {
        var hm = mm[fm];
        return !!hm.icon ? Tm[hm.iconName] = hm.icon : Tm[fm] = hm, Tm
      }), {})
    }

    function Yf(mm, Tm) {
      var fm = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        hm = void 0 !== fm && fm,
        Am = Of(Tm);
      "function" !== typeof af.hooks.addPack || hm ? af.styles[mm] = Dm(Dm({}, af.styles[mm] || {}), Am) : af.hooks.addPack(mm, Of(Tm)), "fas" === mm && Yf("fa", Tm)
    }
    var qf = af.styles,
      jf = af.shims,
      Vf = Object.keys(NT),
      If = Vf.reduce((function(mm, Tm) {
        return mm[Tm] = Object.keys(NT[Tm]), mm
      }), {}),
      Kf = null,
      Qf = {},
      nf = {},
      Jf = {},
      zf = {},
      Zf = {};

    function kf(mm, Tm) {
      var fm, hm = Tm.split("-"),
        Am = hm[0],
        am = hm.slice(1).join("-");
      return Am !== mm || "" === am || (fm = am, ~rT.indexOf(fm)) ? null : am
    }
    var bf, Sf = function() {
      var mm = function(mm) {
        return Ef(qf, (function(Tm, fm, hm) {
          return Tm[hm] = Ef(fm, mm, {}), Tm
        }), {})
      };
      Qf = mm((function(mm, Tm, fm) {
        (Tm[3] && (mm[Tm[3]] = fm), Tm[2]) && Tm[2].filter((function(mm) {
          return "number" === typeof mm
        })).forEach((function(Tm) {
          mm[Tm.toString(16)] = fm
        }));
        return mm
      })), nf = mm((function(mm, Tm, fm) {
        (mm[fm] = fm, Tm[2]) && Tm[2].filter((function(mm) {
          return "string" === typeof mm
        })).forEach((function(Tm) {
          mm[Tm] = fm
        }));
        return mm
      })), Zf = mm((function(mm, Tm, fm) {
        var hm = Tm[2];
        return mm[fm] = fm, hm.forEach((function(Tm) {
          mm[Tm] = fm
        })), mm
      }));
      var Tm = "far" in qf || uT.autoFetchSvg,
        fm = Ef(jf, (function(mm, fm) {
          var hm = fm[0],
            Am = fm[1],
            am = fm[2];
          return "far" !== Am || Tm || (Am = "fas"), "string" === typeof hm && (mm.names[hm] = {
            prefix: Am,
            iconName: am
          }), "number" === typeof hm && (mm.unicodes[hm.toString(16)] = {
            prefix: Am,
            iconName: am
          }), mm
        }), {
          names: {},
          unicodes: {}
        });
      Jf = fm.names, zf = fm.unicodes, Kf = Pf(uT.styleDefault, {
        family: uT.familyDefault
      })
    };

    function ef(mm, Tm) {
      return (Qf[mm] || {})[Tm]
    }

    function Nf(mm, Tm) {
      return (Zf[mm] || {})[Tm]
    }

    function Gf(mm) {
      return Jf[mm] || {
        prefix: null,
        iconName: null
      }
    }

    function Xf() {
      return Kf
    }
    bf = function(mm) {
      Kf = Pf(mm.styleDefault, {
        family: uT.familyDefault
      })
    }, BT.push(bf), Sf();

    function Pf(mm) {
      var Tm = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        fm = void 0 === Tm ? Nm : Tm,
        hm = kT[fm][mm];
      if (fm === Gm && !mm) return "fad";
      var Am = ST[fm][mm] || ST[fm][hm],
        am = mm in af.styles ? mm : null;
      return Am || am || null
    }

    function Hf(mm) {
      return mm.sort().filter((function(mm, Tm, fm) {
        return fm.indexOf(mm) === Tm
      }))
    }
    var yf = pT.concat(TT);

    function Cf(mm) {
      var Tm = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        fm = void 0 !== Tm && Tm,
        hm = null,
        Am = Hf(mm.filter((function(mm) {
          return yf.includes(mm)
        }))),
        am = Hf(mm.filter((function(mm) {
          return !yf.includes(mm)
        }))),
        xm = im(Am.filter((function(mm) {
          return hm = mm, !em.includes(mm)
        })), 1)[0],
        wm = void 0 === xm ? null : xm,
        Rm = function(mm) {
          var Tm = Nm,
            fm = Vf.reduce((function(mm, Tm) {
              return mm[Tm] = "".concat(uT.cssPrefix, "-").concat(Tm), mm
            }), {});
          return Fm.forEach((function(hm) {
            (mm.includes(fm[hm]) || mm.some((function(mm) {
              return If[hm].includes(mm)
            }))) && (Tm = hm)
          })), Tm
        }(Am),
        pm = Dm(Dm({}, function(mm) {
          var Tm = [],
            fm = null;
          return mm.forEach((function(mm) {
            var hm = kf(uT.cssPrefix, mm);
            hm ? fm = hm : mm && Tm.push(mm)
          })), {
            iconName: fm,
            rest: Tm
          }
        }(am)), {}, {
          prefix: Pf(wm, {
            family: Rm
          })
        });
      return Dm(Dm(Dm({}, pm), function(mm) {
        var Tm = mm.values,
          fm = mm.family,
          hm = mm.canonical,
          Am = mm.givenPrefix,
          am = void 0 === Am ? "" : Am,
          xm = mm.styles,
          wm = void 0 === xm ? {} : xm,
          Dm = mm.config,
          im = void 0 === Dm ? {} : Dm,
          Rm = fm === Gm,
          pm = Tm.includes("fa-duotone") || Tm.includes("fad"),
          Em = "duotone" === im.familyDefault,
          om = "fad" === hm.prefix || "fa-duotone" === hm.prefix;
        !Rm && (pm || Em || om) && (hm.prefix = "fad");
        (Tm.includes("fa-brands") || Tm.includes("fab")) && (hm.prefix = "fab");
        if (!hm.prefix && rf.includes(fm)) {
          if (Object.keys(wm).find((function(mm) {
              return sf.includes(mm)
            })) || im.autoFetchSvg) {
            var Om = mT.get(fm).defaultShortPrefixId;
            hm.prefix = Om, hm.iconName = Nf(hm.prefix, hm.iconName) || hm.iconName
          }
        }
        "fa" !== hm.prefix && "fa" !== am || (hm.prefix = Xf() || "fas");
        return hm
      }({
        values: mm,
        family: Rm,
        styles: qf,
        config: uT,
        canonical: pm,
        givenPrefix: hm
      })), function(mm, Tm, fm) {
        var hm = fm.prefix,
          Am = fm.iconName;
        if (mm || !hm || !Am) return {
          prefix: hm,
          iconName: Am
        };
        var am = "fa" === Tm ? Gf(Am) : {},
          xm = Nf(hm, Am);
        Am = am.iconName || xm || Am, "far" !== (hm = am.prefix || hm) || qf.far || !qf.fas || uT.autoFetchSvg || (hm = "fas");
        return {
          prefix: hm,
          iconName: Am
        }
      }(fm, hm, pm))
    }
    var rf = Fm.filter((function(mm) {
        return mm !== Nm || mm !== Gm
      })),
      sf = Object.keys(RT).filter((function(mm) {
        return mm !== Nm
      })).map((function(mm) {
        return Object.keys(RT[mm])
      })).flat();
    var lf = function() {
        return function(mm, Tm, fm) {
          return Tm && Am(mm.prototype, Tm), fm && Am(mm, fm), Object.defineProperty(mm, "prototype", {
            writable: !1
          }), mm
        }((function mm() {
          ! function(mm, Tm) {
            if (!(mm instanceof Tm)) throw new TypeError("Cannot call a class as a function")
          }(this, mm), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var mm = this, Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
            var Am = fm.reduce(this._pullDefinitions, {});
            Object.keys(Am).forEach((function(Tm) {
              mm.definitions[Tm] = Dm(Dm({}, mm.definitions[Tm] || {}), Am[Tm]), Yf(Tm, Am[Tm]);
              var fm = NT[Nm][Tm];
              fm && Yf(fm, Am[Tm]), Sf()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(mm, Tm) {
            var fm = Tm.prefix && Tm.iconName && Tm.icon ? {
              0: Tm
            } : Tm;
            return Object.keys(fm).map((function(Tm) {
              var hm = fm[Tm],
                Am = hm.prefix,
                am = hm.iconName,
                xm = hm.icon,
                wm = xm[2];
              mm[Am] || (mm[Am] = {}), wm.length > 0 && wm.forEach((function(Tm) {
                "string" === typeof Tm && (mm[Am][Tm] = xm)
              })), mm[Am][am] = xm
            })), mm
          }
        }])
      }(),
      Mf = [],
      uf = {},
      Bf = {},
      Lf = Object.keys(Bf);

    function vf(mm, Tm) {
      for (var fm = arguments.length, hm = new Array(fm > 2 ? fm - 2 : 0), Am = 2; Am < fm; Am++) hm[Am - 2] = arguments[Am];
      return (uf[mm] || []).forEach((function(mm) {
        Tm = mm.apply(null, [Tm].concat(hm))
      })), Tm
    }

    function tf(mm) {
      for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), hm = 1; hm < Tm; hm++) fm[hm - 1] = arguments[hm];
      (uf[mm] || []).forEach((function(mm) {
        mm.apply(null, fm)
      }))
    }

    function Uf() {
      var mm = arguments[0],
        Tm = Array.prototype.slice.call(arguments, 1);
      return Bf[mm] ? Bf[mm].apply(null, Tm) : void 0
    }

    function df(mm) {
      "fa" === mm.prefix && (mm.prefix = "fas");
      var Tm = mm.iconName,
        fm = mm.prefix || Xf();
      if (Tm) return Tm = Nf(fm, Tm) || Tm, pf(gf.definitions, fm, Tm) || pf(af.styles, fm, Tm)
    }
    var gf = new lf,
      Wf = {
        i2svg: function() {
          var mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return km ? (tf("beforeI2svg", mm), Uf("pseudoElements2svg", mm), Uf("i2svg", mm)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var mm, Tm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            fm = Tm.autoReplaceSvgRoot;
          !1 === uT.autoReplaceSvg && (uT.autoReplaceSvg = !0), uT.observeMutations = !0, mm = function() {
            mh({
              autoReplaceSvgRoot: fm
            }), tf("watch", Tm)
          }, km && (Df ? setTimeout(mm, 0) : xf.push(mm))
        }
      },
      Ff = {
        noAuto: function() {
          uT.autoReplaceSvg = !1, uT.observeMutations = !1, tf("noAuto")
        },
        config: uT,
        dom: Wf,
        parse: {
          icon: function(mm) {
            if (null === mm) return null;
            if ("object" === Em(mm) && mm.prefix && mm.iconName) return {
              prefix: mm.prefix,
              iconName: Nf(mm.prefix, mm.iconName) || mm.iconName
            };
            if (Array.isArray(mm) && 2 === mm.length) {
              var Tm = 0 === mm[1].indexOf("fa-") ? mm[1].slice(3) : mm[1],
                fm = Pf(mm[0]);
              return {
                prefix: fm,
                iconName: Nf(fm, Tm) || Tm
              }
            }
            if ("string" === typeof mm && (mm.indexOf("".concat(uT.cssPrefix, "-")) > -1 || mm.match(XT))) {
              var hm = Cf(mm.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: hm.prefix || Xf(),
                iconName: Nf(hm.prefix, hm.iconName) || hm.iconName
              }
            }
            if ("string" === typeof mm) {
              var Am = Xf();
              return {
                prefix: Am,
                iconName: Nf(Am, mm) || mm
              }
            }
          }
        },
        library: gf,
        findIconDefinition: df,
        toHtml: Rf
      },
      mh = function() {
        var mm = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          Tm = void 0 === mm ? cm : mm;
        (Object.keys(af.styles).length > 0 || uT.autoFetchSvg) && km && uT.autoReplaceSvg && Ff.dom.i2svg({
          node: Tm
        })
      };

    function Th(mm, Tm) {
      return Object.defineProperty(mm, "abstract", {
        get: Tm
      }), Object.defineProperty(mm, "html", {
        get: function() {
          return mm.abstract.map((function(mm) {
            return Rf(mm)
          }))
        }
      }), Object.defineProperty(mm, "node", {
        get: function() {
          if (km) {
            var Tm = cm.createElement("div");
            return Tm.innerHTML = mm.html, Tm.children
          }
        }
      }), mm
    }

    function fh(mm) {
      var Tm = mm.icons,
        fm = Tm.main,
        hm = Tm.mask,
        Am = mm.prefix,
        am = mm.iconName,
        xm = mm.transform,
        wm = mm.symbol,
        im = mm.maskId,
        Rm = mm.extra,
        pm = mm.watchable,
        Em = void 0 !== pm && pm,
        om = hm.found ? hm : fm,
        Om = om.width,
        Ym = om.height,
        qm = [uT.replacementClass, am ? "".concat(uT.cssPrefix, "-").concat(am) : ""].filter((function(mm) {
          return -1 === Rm.classes.indexOf(mm)
        })).filter((function(mm) {
          return "" !== mm || !!mm
        })).concat(Rm.classes).join(" "),
        jm = {
          children: [],
          attributes: Dm(Dm({}, Rm.attributes), {}, {
            "data-prefix": Am,
            "data-icon": am,
            class: qm,
            role: Rm.attributes.role || "img",
            viewBox: "0 0 ".concat(Om, " ").concat(Ym)
          })
        };
      (function(mm) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(Tm) {
          return Tm in mm
        }))
      })(Rm.attributes) || Rm.attributes["aria-hidden"] || (jm.attributes["aria-hidden"] = "true"), Em && (jm.attributes[jT] = "");
      var Vm = Dm(Dm({}, jm), {}, {
          prefix: Am,
          iconName: am,
          main: fm,
          mask: hm,
          maskId: im,
          transform: xm,
          symbol: wm,
          styles: Dm({}, Rm.styles)
        }),
        Im = hm.found && fm.found ? Uf("generateAbstractMask", Vm) || {
          children: [],
          attributes: {}
        } : Uf("generateAbstractIcon", Vm) || {
          children: [],
          attributes: {}
        },
        Km = Im.children,
        Qm = Im.attributes;
      return Vm.children = Km, Vm.attributes = Qm, wm ? function(mm) {
        var Tm = mm.prefix,
          fm = mm.iconName,
          hm = mm.children,
          Am = mm.attributes,
          am = mm.symbol,
          xm = !0 === am ? "".concat(Tm, "-").concat(uT.cssPrefix, "-").concat(fm) : am;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: Dm(Dm({}, Am), {}, {
              id: xm
            }),
            children: hm
          }]
        }]
      }(Vm) : function(mm) {
        var Tm = mm.children,
          fm = mm.main,
          hm = mm.mask,
          Am = mm.attributes,
          am = mm.styles,
          xm = mm.transform;
        if (FT(xm) && fm.found && !hm.found) {
          var wm = {
            x: fm.width / fm.height / 2,
            y: .5
          };
          Am.style = WT(Dm(Dm({}, am), {}, {
            "transform-origin": "".concat(wm.x + xm.x / 16, "em ").concat(wm.y + xm.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: Am,
          children: Tm
        }]
      }(Vm)
    }

    function hh(mm) {
      var Tm = mm.content,
        fm = mm.width,
        hm = mm.height,
        Am = mm.transform,
        am = mm.extra,
        xm = mm.watchable,
        wm = void 0 !== xm && xm,
        im = Dm(Dm({}, am.attributes), {}, {
          class: am.classes.join(" ")
        });
      wm && (im[jT] = "");
      var Rm = Dm({}, am.styles);
      FT(Am) && (Rm.transform = function(mm) {
        var Tm = mm.transform,
          fm = mm.width,
          hm = void 0 === fm ? 16 : fm,
          Am = mm.height,
          am = void 0 === Am ? 16 : Am,
          xm = mm.startCentered,
          wm = void 0 !== xm && xm,
          Dm = "";
        return Dm += wm && bm ? "translate(".concat(Tm.x / LT - hm / 2, "em, ").concat(Tm.y / LT - am / 2, "em) ") : wm ? "translate(calc(-50% + ".concat(Tm.x / LT, "em), calc(-50% + ").concat(Tm.y / LT, "em)) ") : "translate(".concat(Tm.x / LT, "em, ").concat(Tm.y / LT, "em) "), Dm += "scale(".concat(Tm.size / LT * (Tm.flipX ? -1 : 1), ", ").concat(Tm.size / LT * (Tm.flipY ? -1 : 1), ") "), Dm + "rotate(".concat(Tm.rotate, "deg) ")
      }({
        transform: Am,
        startCentered: !0,
        width: fm,
        height: hm
      }), Rm["-webkit-transform"] = Rm.transform);
      var pm = WT(Rm);
      pm.length > 0 && (im.style = pm);
      var Em = [];
      return Em.push({
        tag: "span",
        attributes: im,
        children: [Tm]
      }), Em
    }
    var Ah = af.styles;

    function ah(mm) {
      var Tm = mm[0],
        fm = mm[1],
        hm = im(mm.slice(4), 1)[0];
      return {
        found: !0,
        width: Tm,
        height: fm,
        icon: Array.isArray(hm) ? {
          tag: "g",
          attributes: {
            class: "".concat(uT.cssPrefix, "-").concat(CT.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(uT.cssPrefix, "-").concat(CT.SECONDARY),
              fill: "currentColor",
              d: hm[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(uT.cssPrefix, "-").concat(CT.PRIMARY),
              fill: "currentColor",
              d: hm[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: hm
          }
        }
      }
    }
    var xh = {
      found: !1,
      width: 512,
      height: 512
    };

    function wh(mm, Tm) {
      var fm = Tm;
      return "fa" === Tm && null !== uT.styleDefault && (Tm = Xf()), new Promise((function(hm, Am) {
        if ("fa" === fm) {
          var am = Gf(mm) || {};
          mm = am.iconName || mm, Tm = am.prefix || Tm
        }
        if (mm && Tm && Ah[Tm] && Ah[Tm][mm]) return hm(ah(Ah[Tm][mm]));
        ! function(mm, Tm) {
          cT || uT.showMissingIcons || !mm || console.error('Icon with name "'.concat(mm, '" and prefix "').concat(Tm, '" is missing.'))
        }(mm, Tm), hm(Dm(Dm({}, xh), {}, {
          icon: uT.showMissingIcons && mm && Uf("missingIconAbstract") || {}
        }))
      }))
    }
    var Dh = function() {},
      ih = uT.measurePerformance && Zm && Zm.mark && Zm.measure ? Zm : {
        mark: Dh,
        measure: Dh
      },
      Rh = 'FA "7.2.0"',
      ph = function(mm) {
        ih.mark("".concat(Rh, " ").concat(mm, " ends")), ih.measure("".concat(Rh, " ").concat(mm), "".concat(Rh, " ").concat(mm, " begins"), "".concat(Rh, " ").concat(mm, " ends"))
      },
      Eh = function(mm) {
        return ih.mark("".concat(Rh, " ").concat(mm, " begins")),
          function() {
            return ph(mm)
          }
      },
      oh = function() {};

    function Oh(mm) {
      return "string" === typeof(mm.getAttribute ? mm.getAttribute(jT) : null)
    }

    function Yh(mm) {
      return cm.createElementNS("http://www.w3.org/2000/svg", mm)
    }

    function qh(mm) {
      return cm.createElement(mm)
    }

    function jh(mm) {
      var Tm = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        fm = void 0 === Tm ? "svg" === mm.tag ? Yh : qh : Tm;
      if ("string" === typeof mm) return cm.createTextNode(mm);
      var hm = fm(mm.tag);
      return Object.keys(mm.attributes || []).forEach((function(Tm) {
        hm.setAttribute(Tm, mm.attributes[Tm])
      })), (mm.children || []).forEach((function(mm) {
        hm.appendChild(jh(mm, {
          ceFn: fm
        }))
      })), hm
    }
    var Vh = {
      replace: function(mm) {
        var Tm = mm[0];
        if (Tm.parentNode)
          if (mm[1].forEach((function(mm) {
              Tm.parentNode.insertBefore(jh(mm), Tm)
            })), null === Tm.getAttribute(jT) && uT.keepOriginalSource) {
            var fm = cm.createComment(function(mm) {
              var Tm = " ".concat(mm.outerHTML, " ");
              return "".concat(Tm, "Font Awesome fontawesome.com ")
            }(Tm));
            Tm.parentNode.replaceChild(fm, Tm)
          } else Tm.remove()
      },
      nest: function(mm) {
        var Tm = mm[0],
          fm = mm[1];
        if (~dT(Tm).indexOf(uT.replacementClass)) return Vh.replace(mm);
        var hm = new RegExp("".concat(uT.cssPrefix, "-.*"));
        if (delete fm[0].attributes.id, fm[0].attributes.class) {
          var Am = fm[0].attributes.class.split(" ").reduce((function(mm, Tm) {
            return Tm === uT.replacementClass || Tm.match(hm) ? mm.toSvg.push(Tm) : mm.toNode.push(Tm), mm
          }), {
            toNode: [],
            toSvg: []
          });
          fm[0].attributes.class = Am.toSvg.join(" "), 0 === Am.toNode.length ? Tm.removeAttribute("class") : Tm.setAttribute("class", Am.toNode.join(" "))
        }
        var am = fm.map((function(mm) {
          return Rf(mm)
        })).join("\n");
        Tm.setAttribute(jT, ""), Tm.innerHTML = am
      }
    };

    function Ih(mm) {
      mm()
    }

    function Kh(mm, Tm) {
      var fm = "function" === typeof Tm ? Tm : oh;
      if (0 === mm.length) fm();
      else {
        var hm = Ih;
        "async" === uT.mutateApproach && (hm = Jm.requestAnimationFrame || Ih), hm((function() {
          var Tm = !0 === uT.autoReplaceSvg ? Vh.replace : Vh[uT.autoReplaceSvg] || Vh.replace,
            hm = Eh("mutate");
          mm.map(Tm), hm(), fm()
        }))
      }
    }
    var Qh = !1;

    function nh() {
      Qh = !0
    }

    function Jh() {
      Qh = !1
    }
    var ch = null;

    function zh(mm) {
      if (zm && uT.observeMutations) {
        var Tm = mm.treeCallback,
          fm = void 0 === Tm ? oh : Tm,
          hm = mm.nodeCallback,
          Am = void 0 === hm ? oh : hm,
          am = mm.pseudoElementsCallback,
          xm = void 0 === am ? oh : am,
          wm = mm.observeMutationsRoot,
          Dm = void 0 === wm ? cm : wm;
        ch = new zm((function(mm) {
          if (!Qh) {
            var Tm = Xf();
            UT(mm).forEach((function(mm) {
              if ("childList" === mm.type && mm.addedNodes.length > 0 && !Oh(mm.addedNodes[0]) && (uT.searchPseudoElements && xm(mm.target), fm(mm.target)), "attributes" === mm.type && mm.target.parentNode && uT.searchPseudoElements && xm([mm.target], !0), "attributes" === mm.type && Oh(mm.target) && ~yT.indexOf(mm.attributeName))
                if ("class" === mm.attributeName && function(mm) {
                    var Tm = mm.getAttribute ? mm.getAttribute(IT) : null,
                      fm = mm.getAttribute ? mm.getAttribute(KT) : null;
                    return Tm && fm
                  }(mm.target)) {
                  var hm = Cf(dT(mm.target)),
                    am = hm.prefix,
                    wm = hm.iconName;
                  mm.target.setAttribute(IT, am || Tm), wm && mm.target.setAttribute(KT, wm)
                } else(Dm = mm.target) && Dm.classList && Dm.classList.contains && Dm.classList.contains(uT.replacementClass) && Am(mm.target);
              var Dm
            }))
          }
        })), km && ch.observe(Dm, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function Zh(mm) {
      var Tm, fm, hm = mm.getAttribute("data-prefix"),
        Am = mm.getAttribute("data-icon"),
        am = void 0 !== mm.innerText ? mm.innerText.trim() : "",
        xm = Cf(dT(mm));
      return xm.prefix || (xm.prefix = Xf()), hm && Am && (xm.prefix = hm, xm.iconName = Am), xm.iconName && xm.prefix || (xm.prefix && am.length > 0 && (xm.iconName = (Tm = xm.prefix, fm = mm.innerText, (nf[Tm] || {})[fm] || ef(xm.prefix, of(mm.innerText)))), !xm.iconName && uT.autoFetchSvg && mm.firstChild && mm.firstChild.nodeType === Node.TEXT_NODE && (xm.iconName = mm.firstChild.data)), xm
    }

    function kh(mm) {
      var Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        fm = Zh(mm),
        hm = fm.iconName,
        Am = fm.prefix,
        am = fm.rest,
        xm = function(mm) {
          return UT(mm.attributes).reduce((function(mm, Tm) {
            return "class" !== mm.name && "style" !== mm.name && (mm[Tm.name] = Tm.value), mm
          }), {})
        }(mm),
        wm = vf("parseNodeAttributes", {}, mm),
        im = Tm.styleParser ? function(mm) {
          var Tm = mm.getAttribute("style"),
            fm = [];
          return Tm && (fm = Tm.split(";").reduce((function(mm, Tm) {
            var fm = Tm.split(":"),
              hm = fm[0],
              Am = fm.slice(1);
            return hm && Am.length > 0 && (mm[hm] = Am.join(":").trim()), mm
          }), {})), fm
        }(mm) : [];
      return Dm({
        iconName: hm,
        prefix: Am,
        transform: vT,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: am,
          styles: im,
          attributes: xm
        }
      }, wm)
    }
    var bh = af.styles;

    function Sh(mm) {
      var Tm = "nest" === uT.autoReplaceSvg ? kh(mm, {
        styleParser: !1
      }) : kh(mm);
      return ~Tm.extra.classes.indexOf(PT) ? Uf("generateLayersText", mm, Tm) : Uf("generateSvgReplacementMutation", mm, Tm)
    }

    function eh(mm) {
      var Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!km) return Promise.resolve();
      var fm = cm.documentElement.classList,
        hm = function(mm) {
          return fm.add("".concat(QT, "-").concat(mm))
        },
        Am = function(mm) {
          return fm.remove("".concat(QT, "-").concat(mm))
        },
        am = uT.autoFetchSvg ? [].concat(Rm(TT), Rm(pT)) : em.concat(Object.keys(bh));
      am.includes("fa") || am.push("fa");
      var xm = [".".concat(PT, ":not([").concat(jT, "])")].concat(am.map((function(mm) {
        return ".".concat(mm, ":not([").concat(jT, "])")
      }))).join(", ");
      if (0 === xm.length) return Promise.resolve();
      var wm = [];
      try {
        wm = UT(mm.querySelectorAll(xm))
      } catch (pm) {}
      if (!(wm.length > 0)) return Promise.resolve();
      hm("pending"), Am("complete");
      var Dm = Eh("onTree"),
        im = wm.reduce((function(mm, Tm) {
          try {
            var fm = Sh(Tm);
            fm && mm.push(fm)
          } catch (pm) {
            cT || "MissingIcon" === pm.name && console.error(pm)
          }
          return mm
        }), []);
      return new Promise((function(mm, fm) {
        Promise.all(im).then((function(fm) {
          Kh(fm, (function() {
            hm("active"), hm("complete"), Am("pending"), "function" === typeof Tm && Tm(), Dm(), mm()
          }))
        })).catch((function(mm) {
          Dm(), fm(mm)
        }))
      }))
    }

    function Nh(mm) {
      var Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      Sh(mm).then((function(mm) {
        mm && Kh([mm], Tm)
      }))
    }
    var Gh = function(mm) {
        var Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          fm = Tm.transform,
          hm = void 0 === fm ? vT : fm,
          Am = Tm.symbol,
          am = void 0 !== Am && Am,
          xm = Tm.mask,
          wm = void 0 === xm ? null : xm,
          im = Tm.maskId,
          Rm = void 0 === im ? null : im,
          pm = Tm.classes,
          Em = void 0 === pm ? [] : pm,
          om = Tm.attributes,
          Om = void 0 === om ? {} : om,
          Ym = Tm.styles,
          qm = void 0 === Ym ? {} : Ym;
        if (mm) {
          var jm = mm.prefix,
            Vm = mm.iconName,
            Im = mm.icon;
          return Th(Dm({
            type: "icon"
          }, mm), (function() {
            return tf("beforeDOMElementCreation", {
              iconDefinition: mm,
              params: Tm
            }), fh({
              icons: {
                main: ah(Im),
                mask: wm ? ah(wm.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: jm,
              iconName: Vm,
              transform: Dm(Dm({}, vT), hm),
              symbol: am,
              maskId: Rm,
              extra: {
                attributes: Om,
                styles: qm,
                classes: Em
              }
            })
          }))
        }
      },
      Xh = {
        mixout: function() {
          return {
            icon: (mm = Gh, function(Tm) {
              var fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                hm = (Tm || {}).icon ? Tm : df(Tm || {}),
                Am = fm.mask;
              return Am && (Am = (Am || {}).icon ? Am : df(Am || {})), mm(hm, Dm(Dm({}, fm), {}, {
                mask: Am
              }))
            })
          };
          var mm
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(mm) {
              return mm.treeCallback = eh, mm.nodeCallback = Nh, mm
            }
          }
        },
        provides: function(mm) {
          mm.i2svg = function(mm) {
            var Tm = mm.node,
              fm = void 0 === Tm ? cm : Tm,
              hm = mm.callback;
            return eh(fm, void 0 === hm ? function() {} : hm)
          }, mm.generateSvgReplacementMutation = function(mm, Tm) {
            var fm = Tm.iconName,
              hm = Tm.prefix,
              Am = Tm.transform,
              am = Tm.symbol,
              xm = Tm.mask,
              wm = Tm.maskId,
              Dm = Tm.extra;
            return new Promise((function(Tm, Rm) {
              Promise.all([wh(fm, hm), xm.iconName ? wh(xm.iconName, xm.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(xm) {
                var Rm = im(xm, 2),
                  pm = Rm[0],
                  Em = Rm[1];
                Tm([mm, fh({
                  icons: {
                    main: pm,
                    mask: Em
                  },
                  prefix: hm,
                  iconName: fm,
                  transform: Am,
                  symbol: am,
                  maskId: wm,
                  extra: Dm,
                  watchable: !0
                })])
              })).catch(Rm)
            }))
          }, mm.generateAbstractIcon = function(mm) {
            var Tm, fm = mm.children,
              hm = mm.attributes,
              Am = mm.main,
              am = mm.transform,
              xm = WT(mm.styles);
            return xm.length > 0 && (hm.style = xm), FT(am) && (Tm = Uf("generateAbstractTransformGrouping", {
              main: Am,
              transform: am,
              containerWidth: Am.width,
              iconWidth: Am.width
            })), fm.push(Tm || Am.icon), {
              children: fm,
              attributes: hm
            }
          }
        }
      },
      Ph = {
        mixout: function() {
          return {
            layer: function(mm) {
              var Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                fm = Tm.classes,
                hm = void 0 === fm ? [] : fm;
              return Th({
                type: "layer"
              }, (function() {
                tf("beforeDOMElementCreation", {
                  assembler: mm,
                  params: Tm
                });
                var fm = [];
                return mm((function(mm) {
                  Array.isArray(mm) ? mm.map((function(mm) {
                    fm = fm.concat(mm.abstract)
                  })) : fm = fm.concat(mm.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(uT.cssPrefix, "-layers")].concat(Rm(hm)).join(" ")
                  },
                  children: fm
                }]
              }))
            }
          }
        }
      },
      Hh = {
        mixout: function() {
          return {
            counter: function(mm) {
              var Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                fm = Tm.title,
                hm = void 0 === fm ? null : fm,
                Am = Tm.classes,
                am = void 0 === Am ? [] : Am,
                xm = Tm.attributes,
                wm = void 0 === xm ? {} : xm,
                im = Tm.styles,
                pm = void 0 === im ? {} : im;
              return Th({
                type: "counter",
                content: mm
              }, (function() {
                return tf("beforeDOMElementCreation", {
                    content: mm,
                    params: Tm
                  }),
                  function(mm) {
                    var Tm = mm.content,
                      fm = mm.extra,
                      hm = Dm(Dm({}, fm.attributes), {}, {
                        class: fm.classes.join(" ")
                      }),
                      Am = WT(fm.styles);
                    Am.length > 0 && (hm.style = Am);
                    var am = [];
                    return am.push({
                      tag: "span",
                      attributes: hm,
                      children: [Tm]
                    }), am
                  }({
                    content: mm.toString(),
                    title: hm,
                    extra: {
                      attributes: wm,
                      styles: pm,
                      classes: ["".concat(uT.cssPrefix, "-layers-counter")].concat(Rm(am))
                    }
                  })
              }))
            }
          }
        }
      },
      yh = {
        mixout: function() {
          return {
            text: function(mm) {
              var Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                fm = Tm.transform,
                hm = void 0 === fm ? vT : fm,
                Am = Tm.classes,
                am = void 0 === Am ? [] : Am,
                xm = Tm.attributes,
                wm = void 0 === xm ? {} : xm,
                im = Tm.styles,
                pm = void 0 === im ? {} : im;
              return Th({
                type: "text",
                content: mm
              }, (function() {
                return tf("beforeDOMElementCreation", {
                  content: mm,
                  params: Tm
                }), hh({
                  content: mm,
                  transform: Dm(Dm({}, vT), hm),
                  extra: {
                    attributes: wm,
                    styles: pm,
                    classes: ["".concat(uT.cssPrefix, "-layers-text")].concat(Rm(am))
                  }
                })
              }))
            }
          }
        },
        provides: function(mm) {
          mm.generateLayersText = function(mm, Tm) {
            var fm = Tm.transform,
              hm = Tm.extra,
              Am = null,
              am = null;
            if (bm) {
              var xm = parseInt(getComputedStyle(mm).fontSize, 10),
                wm = mm.getBoundingClientRect();
              Am = wm.width / xm, am = wm.height / xm
            }
            return Promise.resolve([mm, hh({
              content: mm.innerHTML,
              width: Am,
              height: am,
              transform: fm,
              extra: hm,
              watchable: !0
            })])
          }
        }
      },
      Ch = new RegExp('"', "ug"),
      rh = [1105920, 1112319],
      sh = Dm(Dm(Dm(Dm({}, {
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
      lh = Object.keys(sh).reduce((function(mm, Tm) {
        return mm[Tm.toLowerCase()] = sh[Tm], mm
      }), {}),
      Mh = Object.keys(lh).reduce((function(mm, Tm) {
        var fm = lh[Tm];
        return mm[Tm] = fm[900] || Rm(Object.entries(fm))[0][1], mm
      }), {});

    function uh(mm, Tm) {
      var fm = "".concat("data-fa-pseudo-element-pending").concat(Tm.replace(":", "-"));
      return new Promise((function(hm, Am) {
        if (null !== mm.getAttribute(fm)) return hm();
        var am = UT(mm.children).filter((function(mm) {
            return mm.getAttribute(VT) === Tm
          }))[0],
          xm = Jm.getComputedStyle(mm, Tm),
          wm = xm.getPropertyValue("font-family"),
          im = wm.match(HT),
          pm = xm.getPropertyValue("font-weight"),
          Em = xm.getPropertyValue("content");
        if (am && !im) return mm.removeChild(am), hm();
        if (im && "none" !== Em && "" !== Em) {
          var om = xm.getPropertyValue("content"),
            Om = function(mm, Tm) {
              var fm = mm.replace(/^['"]|['"]$/g, "").toLowerCase(),
                hm = parseInt(Tm),
                Am = isNaN(hm) ? "normal" : hm;
              return (lh[fm] || {})[Am] || Mh[fm]
            }(wm, pm),
            Ym = function(mm) {
              return of(Rm(mm.replace(Ch, ""))[0] || "")
            }(om),
            qm = im[0].startsWith("FontAwesome"),
            jm = function(mm) {
              var Tm = mm.getPropertyValue("font-feature-settings").includes("ss01"),
                fm = mm.getPropertyValue("content").replace(Ch, ""),
                hm = fm.codePointAt(0),
                Am = hm >= rh[0] && hm <= rh[1],
                am = 2 === fm.length && fm[0] === fm[1];
              return Am || am || Tm
            }(xm),
            Vm = ef(Om, Ym),
            Im = Vm;
          if (qm) {
            var Km = function(mm) {
              var Tm = zf[mm],
                fm = ef("fas", mm);
              return Tm || (fm ? {
                prefix: "fas",
                iconName: fm
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(Ym);
            Km.iconName && Km.prefix && (Vm = Km.iconName, Om = Km.prefix)
          }
          if (!Vm || jm || am && am.getAttribute(IT) === Om && am.getAttribute(KT) === Im) hm();
          else {
            mm.setAttribute(fm, Im), am && mm.removeChild(am);
            var Qm = {
                iconName: null,
                prefix: null,
                transform: vT,
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
              nm = Qm.extra;
            nm.attributes[VT] = Tm, wh(Vm, Om).then((function(Am) {
              var am = fh(Dm(Dm({}, Qm), {}, {
                  icons: {
                    main: Am,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: Om,
                  iconName: Im,
                  extra: nm,
                  watchable: !0
                })),
                xm = cm.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === Tm ? mm.insertBefore(xm, mm.firstChild) : mm.appendChild(xm), xm.outerHTML = am.map((function(mm) {
                return Rf(mm)
              })).join("\n"), mm.removeAttribute(fm), hm()
            })).catch(Am)
          }
        } else hm()
      }))
    }

    function Bh(mm) {
      return Promise.all([uh(mm, "::before"), uh(mm, "::after")])
    }

    function Lh(mm) {
      return mm.parentNode !== document.head && !~nT.indexOf(mm.tagName.toUpperCase()) && !mm.getAttribute(VT) && (!mm.parentNode || "svg" !== mm.parentNode.tagName)
    }
    var vh = function(mm) {
        return !!mm && JT.some((function(Tm) {
          return mm.includes(Tm)
        }))
      },
      th = function(mm) {
        if (!mm) return [];
        var Tm = new Set,
          fm = mm.split(/,(?![^()]*\))/).map((function(mm) {
            return mm.trim()
          }));
        fm = fm.flatMap((function(mm) {
          return mm.includes("(") ? mm : mm.split(",").map((function(mm) {
            return mm.trim()
          }))
        }));
        var hm, Am = am(fm);
        try {
          for (Am.s(); !(hm = Am.n()).done;) {
            var xm = hm.value;
            if (vh(xm)) {
              var wm = JT.reduce((function(mm, Tm) {
                return mm.replace(Tm, "")
              }), xm);
              "" !== wm && "*" !== wm && Tm.add(wm)
            }
          }
        } catch (Dm) {
          Am.e(Dm)
        } finally {
          Am.f()
        }
        return Tm
      };

    function Uh(mm) {
      if (km) {
        var Tm;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) Tm = mm;
        else if (uT.searchPseudoElementsFullScan) Tm = mm.querySelectorAll("*");
        else {
          var fm, hm = new Set,
            Am = am(document.styleSheets);
          try {
            for (Am.s(); !(fm = Am.n()).done;) {
              var xm = fm.value;
              try {
                var wm, Dm = am(xm.cssRules);
                try {
                  for (Dm.s(); !(wm = Dm.n()).done;) {
                    var im, Rm = wm.value,
                      pm = am(th(Rm.selectorText));
                    try {
                      for (pm.s(); !(im = pm.n()).done;) {
                        var Em = im.value;
                        hm.add(Em)
                      }
                    } catch (Om) {
                      pm.e(Om)
                    } finally {
                      pm.f()
                    }
                  }
                } catch (Om) {
                  Dm.e(Om)
                } finally {
                  Dm.f()
                }
              } catch (Ym) {
                uT.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(xm.href, " (").concat(Ym.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (Om) {
            Am.e(Om)
          } finally {
            Am.f()
          }
          if (!hm.size) return;
          var om = Array.from(hm).join(", ");
          try {
            Tm = mm.querySelectorAll(om)
          } catch (qm) {}
        }
        return new Promise((function(mm, fm) {
          var hm = UT(Tm).filter(Lh).map(Bh),
            Am = Eh("searchPseudoElements");
          nh(), Promise.all(hm).then((function() {
            Am(), Jh(), mm()
          })).catch((function() {
            Am(), Jh(), fm()
          }))
        }))
      }
    }
    var dh = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(mm) {
              return mm.pseudoElementsCallback = Uh, mm
            }
          }
        },
        provides: function(mm) {
          mm.pseudoElements2svg = function(mm) {
            var Tm = mm.node,
              fm = void 0 === Tm ? cm : Tm;
            uT.searchPseudoElements && Uh(fm)
          }
        }
      },
      gh = !1,
      Wh = function(mm) {
        return mm.toLowerCase().split(" ").reduce((function(mm, Tm) {
          var fm = Tm.toLowerCase().split("-"),
            hm = fm[0],
            Am = fm.slice(1).join("-");
          if (hm && "h" === Am) return mm.flipX = !0, mm;
          if (hm && "v" === Am) return mm.flipY = !0, mm;
          if (Am = parseFloat(Am), isNaN(Am)) return mm;
          switch (hm) {
            case "grow":
              mm.size = mm.size + Am;
              break;
            case "shrink":
              mm.size = mm.size - Am;
              break;
            case "left":
              mm.x = mm.x - Am;
              break;
            case "right":
              mm.x = mm.x + Am;
              break;
            case "up":
              mm.y = mm.y - Am;
              break;
            case "down":
              mm.y = mm.y + Am;
              break;
            case "rotate":
              mm.rotate = mm.rotate + Am
          }
          return mm
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      Fh = {
        mixout: function() {
          return {
            parse: {
              transform: function(mm) {
                return Wh(mm)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(mm, Tm) {
              var fm = Tm.getAttribute("data-fa-transform");
              return fm && (mm.transform = Wh(fm)), mm
            }
          }
        },
        provides: function(mm) {
          mm.generateAbstractTransformGrouping = function(mm) {
            var Tm = mm.main,
              fm = mm.transform,
              hm = mm.containerWidth,
              Am = mm.iconWidth,
              am = {
                transform: "translate(".concat(hm / 2, " 256)")
              },
              xm = "translate(".concat(32 * fm.x, ", ").concat(32 * fm.y, ") "),
              wm = "scale(".concat(fm.size / 16 * (fm.flipX ? -1 : 1), ", ").concat(fm.size / 16 * (fm.flipY ? -1 : 1), ") "),
              im = "rotate(".concat(fm.rotate, " 0 0)"),
              Rm = {
                outer: am,
                inner: {
                  transform: "".concat(xm, " ").concat(wm, " ").concat(im)
                },
                path: {
                  transform: "translate(".concat(Am / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: Dm({}, Rm.outer),
              children: [{
                tag: "g",
                attributes: Dm({}, Rm.inner),
                children: [{
                  tag: Tm.icon.tag,
                  children: Tm.icon.children,
                  attributes: Dm(Dm({}, Tm.icon.attributes), Rm.path)
                }]
              }]
            }
          }
        }
      },
      mA = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function TA(mm) {
      var Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return mm.attributes && (mm.attributes.fill || Tm) && (mm.attributes.fill = "black"), mm
    }
    var fA = {
        hooks: function() {
          return {
            parseNodeAttributes: function(mm, Tm) {
              var fm = Tm.getAttribute("data-fa-mask"),
                hm = fm ? Cf(fm.split(" ").map((function(mm) {
                  return mm.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return hm.prefix || (hm.prefix = Xf()), mm.mask = hm, mm.maskId = Tm.getAttribute("data-fa-mask-id"), mm
            }
          }
        },
        provides: function(mm) {
          mm.generateAbstractMask = function(mm) {
            var Tm, fm = mm.children,
              hm = mm.attributes,
              Am = mm.main,
              am = mm.mask,
              xm = mm.maskId,
              wm = mm.transform,
              im = Am.width,
              Rm = Am.icon,
              pm = am.width,
              Em = am.icon,
              om = function(mm) {
                var Tm = mm.transform,
                  fm = mm.containerWidth,
                  hm = mm.iconWidth,
                  Am = {
                    transform: "translate(".concat(fm / 2, " 256)")
                  },
                  am = "translate(".concat(32 * Tm.x, ", ").concat(32 * Tm.y, ") "),
                  xm = "scale(".concat(Tm.size / 16 * (Tm.flipX ? -1 : 1), ", ").concat(Tm.size / 16 * (Tm.flipY ? -1 : 1), ") "),
                  wm = "rotate(".concat(Tm.rotate, " 0 0)");
                return {
                  outer: Am,
                  inner: {
                    transform: "".concat(am, " ").concat(xm, " ").concat(wm)
                  },
                  path: {
                    transform: "translate(".concat(hm / 2 * -1, " -256)")
                  }
                }
              }({
                transform: wm,
                containerWidth: pm,
                iconWidth: im
              }),
              Om = {
                tag: "rect",
                attributes: Dm(Dm({}, mA), {}, {
                  fill: "white"
                })
              },
              Ym = Rm.children ? {
                children: Rm.children.map(TA)
              } : {},
              qm = {
                tag: "g",
                attributes: Dm({}, om.inner),
                children: [TA(Dm({
                  tag: Rm.tag,
                  attributes: Dm(Dm({}, Rm.attributes), om.path)
                }, Ym))]
              },
              jm = {
                tag: "g",
                attributes: Dm({}, om.outer),
                children: [qm]
              },
              Vm = "mask-".concat(xm || tT()),
              Im = "clip-".concat(xm || tT()),
              Km = {
                tag: "mask",
                attributes: Dm(Dm({}, mA), {}, {
                  id: Vm,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [Om, jm]
              },
              Qm = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: Im
                  },
                  children: (Tm = Em, "g" === Tm.tag ? Tm.children : [Tm])
                }, Km]
              };
            return fm.push(Qm, {
              tag: "rect",
              attributes: Dm({
                fill: "currentColor",
                "clip-path": "url(#".concat(Im, ")"),
                mask: "url(#".concat(Vm, ")")
              }, mA)
            }), {
              children: fm,
              attributes: hm
            }
          }
        }
      },
      hA = {
        provides: function(mm) {
          var Tm = !1;
          Jm.matchMedia && (Tm = Jm.matchMedia("(prefers-reduced-motion: reduce)").matches), mm.missingIconAbstract = function() {
            var mm = [],
              fm = {
                fill: "currentColor"
              },
              hm = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            mm.push({
              tag: "path",
              attributes: Dm(Dm({}, fm), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var Am = Dm(Dm({}, hm), {}, {
                attributeName: "opacity"
              }),
              am = {
                tag: "circle",
                attributes: Dm(Dm({}, fm), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return Tm || am.children.push({
              tag: "animate",
              attributes: Dm(Dm({}, hm), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: Dm(Dm({}, Am), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), mm.push(am), mm.push({
              tag: "path",
              attributes: Dm(Dm({}, fm), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: Tm ? [] : [{
                tag: "animate",
                attributes: Dm(Dm({}, Am), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), Tm || mm.push({
              tag: "path",
              attributes: Dm(Dm({}, fm), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: Dm(Dm({}, Am), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: mm
            }
          }
        }
      };
    ! function(mm, Tm) {
      var fm = Tm.mixoutsTo;
      Mf = mm, uf = {}, Object.keys(Bf).forEach((function(mm) {
        -1 === Lf.indexOf(mm) && delete Bf[mm]
      })), Mf.forEach((function(mm) {
        var Tm = mm.mixout ? mm.mixout() : {};
        if (Object.keys(Tm).forEach((function(mm) {
            "function" === typeof Tm[mm] && (fm[mm] = Tm[mm]), "object" === Em(Tm[mm]) && Object.keys(Tm[mm]).forEach((function(hm) {
              fm[mm] || (fm[mm] = {}), fm[mm][hm] = Tm[mm][hm]
            }))
          })), mm.hooks) {
          var hm = mm.hooks();
          Object.keys(hm).forEach((function(mm) {
            uf[mm] || (uf[mm] = []), uf[mm].push(hm[mm])
          }))
        }
        mm.provides && mm.provides(Bf)
      }))
    }([hf, Xh, Ph, Hh, yh, dh, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              nh(), gh = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            zh(vf("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            ch && ch.disconnect()
          },
          watch: function(mm) {
            var Tm = mm.observeMutationsRoot;
            gh ? Jh() : zh(vf("mutationObserverCallbacks", {
              observeMutationsRoot: Tm
            }))
          }
        }
      }
    }, Fh, fA, hA, {
      hooks: function() {
        return {
          parseNodeAttributes: function(mm, Tm) {
            var fm = Tm.getAttribute("data-fa-symbol"),
              hm = null !== fm && ("" === fm || fm);
            return mm.symbol = hm, mm
          }
        }
      }
    }], {
      mixoutsTo: Ff
    });
    var AA = Ff.noAuto,
      aA = Ff.config,
      xA = Ff.library,
      wA = Ff.dom,
      DA = Ff.parse,
      iA = Ff.findIconDefinition,
      RA = Ff.toHtml,
      pA = Ff.icon,
      EA = Ff.layer,
      oA = Ff.text,
      OA = Ff.counter
  },
  6636: mm => {
    mm.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);