/*! For license information please see ad2avs.fa-renderer.23117dea.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6410: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      FontAwesomeIcon: () => vz
    });
    var Ez = bz(6403),
      nz = bz(4714),
      iz = bz.n(nz),
      lz = bz(56);

    function Mz(zz, uz) {
      (null == uz || uz > zz.length) && (uz = zz.length);
      for (var bz = 0, Ez = Array(uz); bz < uz; bz++) Ez[bz] = zz[bz];
      return Ez
    }

    function tz(zz, uz, bz) {
      return (uz = function(zz) {
        var uz = function(zz, uz) {
          if ("object" != typeof zz || !zz) return zz;
          var bz = zz[Symbol.toPrimitive];
          if (void 0 !== bz) {
            var Ez = bz.call(zz, uz || "default");
            if ("object" != typeof Ez) return Ez;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === uz ? String : Number)(zz)
        }(zz, "string");
        return "symbol" == typeof uz ? uz : uz + ""
      }(uz)) in zz ? Object.defineProperty(zz, uz, {
        value: bz,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : zz[uz] = bz, zz
    }

    function Hz(zz, uz) {
      var bz = Object.keys(zz);
      if (Object.getOwnPropertySymbols) {
        var Ez = Object.getOwnPropertySymbols(zz);
        uz && (Ez = Ez.filter((function(uz) {
          return Object.getOwnPropertyDescriptor(zz, uz).enumerable
        }))), bz.push.apply(bz, Ez)
      }
      return bz
    }

    function Oz(zz) {
      for (var uz = 1; uz < arguments.length; uz++) {
        var bz = null != arguments[uz] ? arguments[uz] : {};
        uz % 2 ? Hz(Object(bz), !0).forEach((function(uz) {
          tz(zz, uz, bz[uz])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(bz)) : Hz(Object(bz)).forEach((function(uz) {
          Object.defineProperty(zz, uz, Object.getOwnPropertyDescriptor(bz, uz))
        }))
      }
      return zz
    }

    function pz(zz, uz) {
      return function(zz) {
        if (Array.isArray(zz)) return zz
      }(zz) || function(zz, uz) {
        var bz = null == zz ? null : "undefined" != typeof Symbol && zz[Symbol.iterator] || zz["@@iterator"];
        if (null != bz) {
          var Ez, nz, iz, lz, Mz = [],
            tz = !0,
            Hz = !1;
          try {
            if (iz = (bz = bz.call(zz)).next, 0 === uz) {
              if (Object(bz) !== bz) return;
              tz = !1
            } else
              for (; !(tz = (Ez = iz.call(bz)).done) && (Mz.push(Ez.value), Mz.length !== uz); tz = !0);
          } catch (zz) {
            Hz = !0, nz = zz
          } finally {
            try {
              if (!tz && null != bz.return && (lz = bz.return(), Object(lz) !== lz)) return
            } finally {
              if (Hz) throw nz
            }
          }
          return Mz
        }
      }(zz, uz) || Zz(zz, uz) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function dz(zz) {
      return function(zz) {
        if (Array.isArray(zz)) return Mz(zz)
      }(zz) || function(zz) {
        if ("undefined" != typeof Symbol && null != zz[Symbol.iterator] || null != zz["@@iterator"]) return Array.from(zz)
      }(zz) || Zz(zz) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Fz(zz) {
      return Fz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(zz) {
        return typeof zz
      } : function(zz) {
        return zz && "function" == typeof Symbol && zz.constructor === Symbol && zz !== Symbol.prototype ? "symbol" : typeof zz
      }, Fz(zz)
    }

    function Zz(zz, uz) {
      if (zz) {
        if ("string" == typeof zz) return Mz(zz, uz);
        var bz = {}.toString.call(zz).slice(8, -1);
        return "Object" === bz && zz.constructor && (bz = zz.constructor.name), "Map" === bz || "Set" === bz ? Array.from(zz) : "Arguments" === bz || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(bz) ? Mz(zz, uz) : void 0
      }
    }
    var Rz;
    try {
      var Kz = bz(6419);
      Rz = Kz.version
    } catch (Jz) {
      Rz = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function wz(zz) {
      var uz = zz.beat,
        bz = zz.fade,
        Ez = zz.beatFade,
        nz = zz.bounce,
        iz = zz.shake,
        lz = zz.flash,
        Mz = zz.spin,
        Hz = zz.spinPulse,
        Oz = zz.spinReverse,
        dz = zz.pulse,
        Fz = zz.fixedWidth,
        Zz = zz.inverse,
        Kz = zz.border,
        wz = zz.listItem,
        Xz = zz.flip,
        fz = zz.size,
        sz = zz.rotation,
        rz = zz.pull,
        oz = zz.swapOpacity,
        Nz = zz.rotateBy,
        vz = zz.widthAuto,
        xz = function(zz, uz) {
          for (var bz = pz(zz.split("-"), 2), Ez = bz[0], nz = bz[1], iz = pz(uz.split("-"), 2), lz = iz[0], Mz = iz[1], tz = Ez.split("."), Hz = lz.split("."), Oz = 0; Oz < Math.max(tz.length, Hz.length); Oz++) {
            var dz = tz[Oz] || "0",
              Fz = Hz[Oz] || "0",
              Zz = parseInt(dz, 10),
              Rz = parseInt(Fz, 10);
            if (Zz !== Rz) return Zz > Rz
          }
          for (var Kz = 0; Kz < Math.max(tz.length, Hz.length); Kz++) {
            var wz = tz[Kz] || "0",
              Xz = Hz[Kz] || "0";
            if (wz !== Xz && wz.length !== Xz.length) return wz.length < Xz.length
          }
          return !(nz && !Mz)
        }(Rz, "7.0.0"),
        Jz = tz(tz(tz(tz(tz(tz({
          "fa-beat": uz,
          "fa-fade": bz,
          "fa-beat-fade": Ez,
          "fa-bounce": nz,
          "fa-shake": iz,
          "fa-flash": lz,
          "fa-spin": Mz,
          "fa-spin-reverse": Oz,
          "fa-spin-pulse": Hz,
          "fa-pulse": dz,
          "fa-fw": Fz,
          "fa-inverse": Zz,
          "fa-border": Kz,
          "fa-li": wz,
          "fa-flip": !0 === Xz,
          "fa-flip-horizontal": "horizontal" === Xz || "both" === Xz,
          "fa-flip-vertical": "vertical" === Xz || "both" === Xz
        }, "fa-".concat(fz), "undefined" !== typeof fz && null !== fz), "fa-rotate-".concat(sz), "undefined" !== typeof sz && null !== sz && 0 !== sz), "fa-pull-".concat(rz), "undefined" !== typeof rz && null !== rz), "fa-swap-opacity", oz), "fa-rotate-by", xz && Nz), "fa-width-auto", xz && vz);
      return Object.keys(Jz).map((function(zz) {
        return Jz[zz] ? zz : null
      })).filter((function(zz) {
        return zz
      }))
    }

    function Xz(zz) {
      return uz = zz, (uz -= 0) === uz ? zz : (zz = zz.replace(/[\-_\s]+(.)?/g, (function(zz, uz) {
        return uz ? uz.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + zz.substr(1);
      var uz
    }
    var fz = ["style"];
    var sz = !1;
    try {
      sz = !0
    } catch (Jz) {}

    function rz(zz) {
      return zz && "object" === Fz(zz) && zz.prefix && zz.iconName && zz.icon ? zz : Ez.parse.icon ? Ez.parse.icon(zz) : null === zz ? null : zz && "object" === Fz(zz) && zz.prefix && zz.iconName ? zz : Array.isArray(zz) && 2 === zz.length ? {
        prefix: zz[0],
        iconName: zz[1]
      } : "string" === typeof zz ? {
        prefix: "fas",
        iconName: zz
      } : void 0
    }

    function oz(zz, uz) {
      return Array.isArray(uz) && uz.length > 0 || !Array.isArray(uz) && uz ? tz({}, zz, uz) : {}
    }
    var Nz = {
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
      vz = lz.forwardRef((function(zz, uz) {
        var bz = Oz(Oz({}, Nz), zz),
          nz = bz.icon,
          iz = bz.mask,
          lz = bz.symbol,
          Mz = bz.className,
          tz = bz.title,
          Hz = bz.titleId,
          pz = bz.maskId,
          Fz = rz(nz),
          Zz = oz("classes", [].concat(dz(wz(bz)), dz((Mz || "").split(" ")))),
          Rz = oz("transform", "string" === typeof bz.transform ? Ez.parse.transform(bz.transform) : bz.transform),
          Kz = oz("mask", rz(iz)),
          Xz = (0, Ez.icon)(Fz, Oz(Oz(Oz(Oz({}, Zz), Rz), Kz), {}, {
            symbol: lz,
            title: tz,
            titleId: Hz,
            maskId: pz
          }));
        if (!Xz) return function() {
          var zz;
          !sz && console && "function" === typeof console.error && (zz = console).error.apply(zz, arguments)
        }("Could not find icon", Fz), null;
        var fz = Xz.abstract,
          vz = {
            ref: uz
          };
        return Object.keys(bz).forEach((function(zz) {
          Nz.hasOwnProperty(zz) || (vz[zz] = bz[zz])
        })), xz(fz[0], vz)
      }));
    vz.displayName = "FontAwesomeIcon", vz.propTypes = {
      beat: iz().bool,
      border: iz().bool,
      beatFade: iz().bool,
      bounce: iz().bool,
      className: iz().string,
      fade: iz().bool,
      flash: iz().bool,
      mask: iz().oneOfType([iz().object, iz().array, iz().string]),
      maskId: iz().string,
      fixedWidth: iz().bool,
      inverse: iz().bool,
      flip: iz().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: iz().oneOfType([iz().object, iz().array, iz().string]),
      listItem: iz().bool,
      pull: iz().oneOf(["right", "left"]),
      pulse: iz().bool,
      rotation: iz().oneOf([0, 90, 180, 270]),
      rotateBy: iz().bool,
      shake: iz().bool,
      size: iz().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: iz().bool,
      spinPulse: iz().bool,
      spinReverse: iz().bool,
      symbol: iz().oneOfType([iz().bool, iz().string]),
      title: iz().string,
      titleId: iz().string,
      transform: iz().oneOfType([iz().string, iz().object]),
      swapOpacity: iz().bool,
      widthAuto: iz().bool
    };
    var xz = function zz(uz, bz) {
      var Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof bz) return bz;
      var nz = (bz.children || []).map((function(bz) {
          return zz(uz, bz)
        })),
        iz = Object.keys(bz.attributes || {}).reduce((function(zz, uz) {
          var Ez = bz.attributes[uz];
          switch (uz) {
            case "class":
              zz.attrs.className = Ez, delete bz.attributes.class;
              break;
            case "style":
              zz.attrs.style = Ez.split(";").map((function(zz) {
                return zz.trim()
              })).filter((function(zz) {
                return zz
              })).reduce((function(zz, uz) {
                var bz, Ez = uz.indexOf(":"),
                  nz = Xz(uz.slice(0, Ez)),
                  iz = uz.slice(Ez + 1).trim();
                return nz.startsWith("webkit") ? zz[(bz = nz, bz.charAt(0).toUpperCase() + bz.slice(1))] = iz : zz[nz] = iz, zz
              }), {});
              break;
            default:
              0 === uz.indexOf("aria-") || 0 === uz.indexOf("data-") ? zz.attrs[uz.toLowerCase()] = Ez : zz.attrs[Xz(uz)] = Ez
          }
          return zz
        }), {
          attrs: {}
        }),
        lz = Ez.style,
        Mz = void 0 === lz ? {} : lz,
        tz = function(zz, uz) {
          if (null == zz) return {};
          var bz, Ez, nz = function(zz, uz) {
            if (null == zz) return {};
            var bz = {};
            for (var Ez in zz)
              if ({}.hasOwnProperty.call(zz, Ez)) {
                if (-1 !== uz.indexOf(Ez)) continue;
                bz[Ez] = zz[Ez]
              } return bz
          }(zz, uz);
          if (Object.getOwnPropertySymbols) {
            var iz = Object.getOwnPropertySymbols(zz);
            for (Ez = 0; Ez < iz.length; Ez++) bz = iz[Ez], -1 === uz.indexOf(bz) && {}.propertyIsEnumerable.call(zz, bz) && (nz[bz] = zz[bz])
          }
          return nz
        }(Ez, fz);
      return iz.attrs.style = Oz(Oz({}, iz.attrs.style), Mz), uz.apply(void 0, [bz.tag, Oz(Oz({}, iz.attrs), tz)].concat(dz(nz)))
    }.bind(null, lz.createElement)
  },
  4722: (zz, uz, bz) => {
    var Ez = bz(4726);

    function nz() {}

    function iz() {}
    iz.resetWarningCache = nz, zz.exports = function() {
      function zz(zz, uz, bz, nz, iz, lz) {
        if (lz !== Ez) {
          var Mz = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Mz.name = "Invariant Violation", Mz
        }
      }

      function uz() {
        return zz
      }
      zz.isRequired = zz;
      var bz = {
        array: zz,
        bigint: zz,
        bool: zz,
        func: zz,
        number: zz,
        object: zz,
        string: zz,
        symbol: zz,
        any: zz,
        arrayOf: uz,
        element: zz,
        elementType: zz,
        instanceOf: uz,
        node: zz,
        objectOf: uz,
        oneOf: uz,
        oneOfType: uz,
        shape: uz,
        exact: uz,
        checkPropTypes: iz,
        resetWarningCache: nz
      };
      return bz.PropTypes = bz, bz
    }
  },
  4714: (zz, uz, bz) => {
    zz.exports = bz(4722)()
  },
  4726: zz => {
    zz.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6403: (zz, uz, bz) => {
    function Ez(zz, uz) {
      (null == uz || uz > zz.length) && (uz = zz.length);
      for (var bz = 0, Ez = Array(uz); bz < uz; bz++) Ez[bz] = zz[bz];
      return Ez
    }

    function nz(zz, uz) {
      for (var bz = 0; bz < uz.length; bz++) {
        var Ez = uz[bz];
        Ez.enumerable = Ez.enumerable || !1, Ez.configurable = !0, "value" in Ez && (Ez.writable = !0), Object.defineProperty(zz, pz(Ez.key), Ez)
      }
    }

    function iz(zz, uz) {
      var bz = "undefined" != typeof Symbol && zz[Symbol.iterator] || zz["@@iterator"];
      if (!bz) {
        if (Array.isArray(zz) || (bz = Fz(zz)) || uz && zz && "number" == typeof zz.length) {
          bz && (zz = bz);
          var Ez = 0,
            nz = function() {};
          return {
            s: nz,
            n: function() {
              return Ez >= zz.length ? {
                done: !0
              } : {
                done: !1,
                value: zz[Ez++]
              }
            },
            e: function(zz) {
              throw zz
            },
            f: nz
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var iz, lz = !0,
        Mz = !1;
      return {
        s: function() {
          bz = bz.call(zz)
        },
        n: function() {
          var zz = bz.next();
          return lz = zz.done, zz
        },
        e: function(zz) {
          Mz = !0, iz = zz
        },
        f: function() {
          try {
            lz || null == bz.return || bz.return()
          } finally {
            if (Mz) throw iz
          }
        }
      }
    }

    function lz(zz, uz, bz) {
      return (uz = pz(uz)) in zz ? Object.defineProperty(zz, uz, {
        value: bz,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : zz[uz] = bz, zz
    }

    function Mz(zz, uz) {
      var bz = Object.keys(zz);
      if (Object.getOwnPropertySymbols) {
        var Ez = Object.getOwnPropertySymbols(zz);
        uz && (Ez = Ez.filter((function(uz) {
          return Object.getOwnPropertyDescriptor(zz, uz).enumerable
        }))), bz.push.apply(bz, Ez)
      }
      return bz
    }

    function tz(zz) {
      for (var uz = 1; uz < arguments.length; uz++) {
        var bz = null != arguments[uz] ? arguments[uz] : {};
        uz % 2 ? Mz(Object(bz), !0).forEach((function(uz) {
          lz(zz, uz, bz[uz])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(bz)) : Mz(Object(bz)).forEach((function(uz) {
          Object.defineProperty(zz, uz, Object.getOwnPropertyDescriptor(bz, uz))
        }))
      }
      return zz
    }

    function Hz(zz, uz) {
      return function(zz) {
        if (Array.isArray(zz)) return zz
      }(zz) || function(zz, uz) {
        var bz = null == zz ? null : "undefined" != typeof Symbol && zz[Symbol.iterator] || zz["@@iterator"];
        if (null != bz) {
          var Ez, nz, iz, lz, Mz = [],
            tz = !0,
            Hz = !1;
          try {
            if (iz = (bz = bz.call(zz)).next, 0 === uz) {
              if (Object(bz) !== bz) return;
              tz = !1
            } else
              for (; !(tz = (Ez = iz.call(bz)).done) && (Mz.push(Ez.value), Mz.length !== uz); tz = !0);
          } catch (zz) {
            Hz = !0, nz = zz
          } finally {
            try {
              if (!tz && null != bz.return && (lz = bz.return(), Object(lz) !== lz)) return
            } finally {
              if (Hz) throw nz
            }
          }
          return Mz
        }
      }(zz, uz) || Fz(zz, uz) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Oz(zz) {
      return function(zz) {
        if (Array.isArray(zz)) return Ez(zz)
      }(zz) || function(zz) {
        if ("undefined" != typeof Symbol && null != zz[Symbol.iterator] || null != zz["@@iterator"]) return Array.from(zz)
      }(zz) || Fz(zz) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pz(zz) {
      var uz = function(zz, uz) {
        if ("object" != typeof zz || !zz) return zz;
        var bz = zz[Symbol.toPrimitive];
        if (void 0 !== bz) {
          var Ez = bz.call(zz, uz || "default");
          if ("object" != typeof Ez) return Ez;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === uz ? String : Number)(zz)
      }(zz, "string");
      return "symbol" == typeof uz ? uz : uz + ""
    }

    function dz(zz) {
      return dz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(zz) {
        return typeof zz
      } : function(zz) {
        return zz && "function" == typeof Symbol && zz.constructor === Symbol && zz !== Symbol.prototype ? "symbol" : typeof zz
      }, dz(zz)
    }

    function Fz(zz, uz) {
      if (zz) {
        if ("string" == typeof zz) return Ez(zz, uz);
        var bz = {}.toString.call(zz).slice(8, -1);
        return "Object" === bz && zz.constructor && (bz = zz.constructor.name), "Map" === bz || "Set" === bz ? Array.from(zz) : "Arguments" === bz || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(bz) ? Ez(zz, uz) : void 0
      }
    }
    bz.r(uz), bz.d(uz, {
      api: () => Bb,
      config: () => bn,
      counter: () => Fn,
      dom: () => nn,
      findIconDefinition: () => tn,
      icon: () => On,
      layer: () => pn,
      library: () => En,
      noAuto: () => un,
      parse: () => Mn,
      text: () => dn,
      toHtml: () => Hn
    });
    var Zz = function() {},
      Rz = {},
      Kz = {},
      wz = null,
      Xz = {
        mark: Zz,
        measure: Zz
      };
    try {
      "undefined" !== typeof window && (Rz = window), "undefined" !== typeof document && (Kz = document), "undefined" !== typeof MutationObserver && (wz = MutationObserver), "undefined" !== typeof performance && (Xz = performance)
    } catch (Dz) {}
    var fz, sz, rz = (Rz.navigator || {}).userAgent,
      oz = void 0 === rz ? "" : rz,
      Nz = Rz,
      vz = Kz,
      xz = wz,
      Jz = Xz,
      Az = (Nz.document, !!vz.documentElement && !!vz.head && "function" === typeof vz.addEventListener && "function" === typeof vz.createElement),
      Tz = ~oz.indexOf("MSIE") || ~oz.indexOf("Trident/"),
      Lz = {
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
      Pz = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      Gz = "classic",
      az = "duotone",
      Vz = "sharp",
      mz = "sharp-duotone",
      qz = "chisel",
      hz = "etch",
      Uz = "graphite",
      cz = "jelly",
      gz = "jelly-duo",
      Sz = "jelly-fill",
      yz = "notdog",
      Dz = "notdog-duo",
      Qz = "slab",
      Wz = "slab-press",
      ez = "thumbprint",
      jz = "utility",
      Iz = "utility-duo",
      Bz = "utility-fill",
      Cz = "whiteboard",
      Yz = [Gz, az, Vz, mz, qz, hz, Uz, cz, gz, Sz, yz, Dz, Qz, Wz, ez, jz, Iz, Bz, Cz],
      kz = (lz(lz(lz(lz(lz(lz(lz(lz(lz(lz(fz = {}, Gz, "Classic"), az, "Duotone"), Vz, "Sharp"), mz, "Sharp Duotone"), qz, "Chisel"), hz, "Etch"), Uz, "Graphite"), cz, "Jelly"), gz, "Jelly Duo"), Sz, "Jelly Fill"), lz(lz(lz(lz(lz(lz(lz(lz(lz(fz, yz, "Notdog"), Dz, "Notdog Duo"), Qz, "Slab"), Wz, "Slab Press"), ez, "Thumbprint"), jz, "Utility"), Iz, "Utility Duo"), Bz, "Utility Fill"), Cz, "Whiteboard"), new Map([
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
      zu = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      uu = {
        fak: "kit",
        "fa-kit": "kit"
      },
      bu = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      Eu = (lz(lz({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      nu = {
        "kit-duotone": "fakd"
      },
      iu = "duotone-group",
      lu = "swap-opacity",
      Mu = "primary",
      tu = "secondary",
      Hu = (lz(lz(lz(lz(lz(lz(lz(lz(lz(lz(sz = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), lz(lz(lz(lz(lz(lz(lz(lz(lz(sz, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), lz(lz({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      Ou = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      pu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      du = pu.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      Fu = [].concat(Oz(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", iu, lu, Mu, tu]).concat(pu.map((function(zz) {
        return "".concat(zz, "x")
      }))).concat(du.map((function(zz) {
        return "w-".concat(zz)
      }))),
      Zu = "___FONT_AWESOME___",
      Ru = "svg-inline--fa",
      Ku = "data-fa-i2svg",
      wu = "data-fa-pseudo-element",
      Xu = "data-prefix",
      fu = "data-icon",
      su = "fontawesome-i2svg",
      ru = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      ou = ["::before", "::after", ":before", ":after"],
      Nu = function() {
        try {
          return !0
        } catch (zz) {
          return !1
        }
      }();

    function vu(zz) {
      return new Proxy(zz, {
        get: function(zz, uz) {
          return uz in zz ? zz[uz] : zz[Gz]
        }
      })
    }
    var xu = tz({}, Lz);
    xu[Gz] = tz(tz(tz(tz({}, {
      "fa-duotone": "duotone"
    }), Lz[Gz]), uu), bu);
    var Ju = vu(xu),
      Au = tz({}, {
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
    Au[Gz] = tz(tz(tz(tz({}, {
      duotone: "fad"
    }), Au[Gz]), Eu), nu);
    var Tu = vu(Au),
      Lu = tz({}, Hu);
    Lu[Gz] = tz(tz({}, Lu[Gz]), {
      fak: "fa-kit"
    });
    var Pu = vu(Lu),
      Gu = tz({}, {
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
    Gu[Gz] = tz(tz({}, Gu[Gz]), {
      "fa-kit": "fak"
    });
    vu(Gu);
    var au = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      Vu = "fa-layers-text",
      mu = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      qu = (vu(tz({}, {
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
      hu = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      Uu = [].concat(Oz(["kit"]), Oz(Fu)),
      cu = Nz.FontAwesomeConfig || {};
    if (vz && "function" === typeof vz.querySelector) {
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
      ].forEach((function(zz) {
        var uz = Hz(zz, 2),
          bz = uz[0],
          Ez = uz[1],
          nz = function(zz) {
            return "" === zz || "false" !== zz && ("true" === zz || zz)
          }(function(zz) {
            var uz = vz.querySelector("script[" + zz + "]");
            if (uz) return uz.getAttribute(zz)
          }(bz));
        void 0 !== nz && null !== nz && (cu[Ez] = nz)
      }))
    }
    var gu = {
      styleDefault: "solid",
      familyDefault: Gz,
      cssPrefix: "fa",
      replacementClass: Ru,
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
    cu.familyPrefix && (cu.cssPrefix = cu.familyPrefix);
    var Su = tz(tz({}, gu), cu);
    Su.autoReplaceSvg || (Su.observeMutations = !1);
    var yu = {};
    Object.keys(gu).forEach((function(zz) {
      Object.defineProperty(yu, zz, {
        enumerable: !0,
        set: function(uz) {
          Su[zz] = uz, Du.forEach((function(zz) {
            return zz(yu)
          }))
        },
        get: function() {
          return Su[zz]
        }
      })
    })), Object.defineProperty(yu, "familyPrefix", {
      enumerable: !0,
      set: function(zz) {
        Su.cssPrefix = zz, Du.forEach((function(zz) {
          return zz(yu)
        }))
      },
      get: function() {
        return Su.cssPrefix
      }
    }), Nz.FontAwesomeConfig = yu;
    var Du = [];
    var Qu = 16,
      Wu = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function eu() {
      for (var zz = 12, uz = ""; zz-- > 0;) uz += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return uz
    }

    function ju(zz) {
      for (var uz = [], bz = (zz || []).length >>> 0; bz--;) uz[bz] = zz[bz];
      return uz
    }

    function Iu(zz) {
      return zz.classList ? ju(zz.classList) : (zz.getAttribute("class") || "").split(" ").filter((function(zz) {
        return zz
      }))
    }

    function Bu(zz) {
      return "".concat(zz).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function Cu(zz) {
      return Object.keys(zz || {}).reduce((function(uz, bz) {
        return uz + "".concat(bz, ": ").concat(zz[bz].trim(), ";")
      }), "")
    }

    function Yu(zz) {
      return zz.size !== Wu.size || zz.x !== Wu.x || zz.y !== Wu.y || zz.rotate !== Wu.rotate || zz.flipX || zz.flipY
    }

    function ku() {
      var zz = "fa",
        uz = Ru,
        bz = yu.cssPrefix,
        Ez = yu.replacementClass,
        nz = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (bz !== zz || Ez !== uz) {
        var iz = new RegExp("\\.".concat(zz, "\\-"), "g"),
          lz = new RegExp("\\--".concat(zz, "\\-"), "g"),
          Mz = new RegExp("\\.".concat(uz), "g");
        nz = nz.replace(iz, ".".concat(bz, "-")).replace(lz, "--".concat(bz, "-")).replace(Mz, ".".concat(Ez))
      }
      return nz
    }
    var zb = !1;

    function ub() {
      yu.autoAddCss && !zb && (! function(zz) {
        if (zz && Az) {
          var uz = vz.createElement("style");
          uz.setAttribute("type", "text/css"), uz.innerHTML = zz;
          for (var bz = vz.head.childNodes, Ez = null, nz = bz.length - 1; nz > -1; nz--) {
            var iz = bz[nz],
              lz = (iz.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(lz) > -1 && (Ez = iz)
          }
          vz.head.insertBefore(uz, Ez)
        }
      }(ku()), zb = !0)
    }
    var bb = {
        mixout: function() {
          return {
            dom: {
              css: ku,
              insertCss: ub
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              ub()
            },
            beforeI2svg: function() {
              ub()
            }
          }
        }
      },
      Eb = Nz || {};
    Eb[Zu] || (Eb[Zu] = {}), Eb[Zu].styles || (Eb[Zu].styles = {}), Eb[Zu].hooks || (Eb[Zu].hooks = {}), Eb[Zu].shims || (Eb[Zu].shims = []);
    var nb = Eb[Zu],
      ib = [],
      lb = function() {
        vz.removeEventListener("DOMContentLoaded", lb), Mb = 1, ib.map((function(zz) {
          return zz()
        }))
      },
      Mb = !1;

    function tb(zz) {
      var uz = zz.tag,
        bz = zz.attributes,
        Ez = void 0 === bz ? {} : bz,
        nz = zz.children,
        iz = void 0 === nz ? [] : nz;
      return "string" === typeof zz ? Bu(zz) : "<".concat(uz, " ").concat(function(zz) {
        return Object.keys(zz || {}).reduce((function(uz, bz) {
          return uz + "".concat(bz, '="').concat(Bu(zz[bz]), '" ')
        }), "").trim()
      }(Ez), ">").concat(iz.map(tb).join(""), "</").concat(uz, ">")
    }

    function Hb(zz, uz, bz) {
      if (zz && zz[uz] && zz[uz][bz]) return {
        prefix: uz,
        iconName: bz,
        icon: zz[uz][bz]
      }
    }
    Az && ((Mb = (vz.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(vz.readyState)) || vz.addEventListener("DOMContentLoaded", lb));
    var Ob = function(zz, uz, bz, Ez) {
      var nz, iz, lz, Mz = Object.keys(zz),
        tz = Mz.length,
        Hz = void 0 !== Ez ? function(zz, uz) {
          return function(bz, Ez, nz, iz) {
            return zz.call(uz, bz, Ez, nz, iz)
          }
        }(uz, Ez) : uz;
      for (void 0 === bz ? (nz = 1, lz = zz[Mz[0]]) : (nz = 0, lz = bz); nz < tz; nz++) lz = Hz(lz, zz[iz = Mz[nz]], iz, zz);
      return lz
    };

    function pb(zz) {
      return 1 !== Oz(zz).length ? null : zz.codePointAt(0).toString(16)
    }

    function db(zz) {
      return Object.keys(zz).reduce((function(uz, bz) {
        var Ez = zz[bz];
        return !!Ez.icon ? uz[Ez.iconName] = Ez.icon : uz[bz] = Ez, uz
      }), {})
    }

    function Fb(zz, uz) {
      var bz = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        Ez = void 0 !== bz && bz,
        nz = db(uz);
      "function" !== typeof nb.hooks.addPack || Ez ? nb.styles[zz] = tz(tz({}, nb.styles[zz] || {}), nz) : nb.hooks.addPack(zz, db(uz)), "fas" === zz && Fb("fa", uz)
    }
    var Zb = nb.styles,
      Rb = nb.shims,
      Kb = Object.keys(Pu),
      wb = Kb.reduce((function(zz, uz) {
        return zz[uz] = Object.keys(Pu[uz]), zz
      }), {}),
      Xb = null,
      fb = {},
      sb = {},
      rb = {},
      ob = {},
      Nb = {};

    function vb(zz, uz) {
      var bz, Ez = uz.split("-"),
        nz = Ez[0],
        iz = Ez.slice(1).join("-");
      return nz !== zz || "" === iz || (bz = iz, ~Uu.indexOf(bz)) ? null : iz
    }
    var xb, Jb = function() {
      var zz = function(zz) {
        return Ob(Zb, (function(uz, bz, Ez) {
          return uz[Ez] = Ob(bz, zz, {}), uz
        }), {})
      };
      fb = zz((function(zz, uz, bz) {
        (uz[3] && (zz[uz[3]] = bz), uz[2]) && uz[2].filter((function(zz) {
          return "number" === typeof zz
        })).forEach((function(uz) {
          zz[uz.toString(16)] = bz
        }));
        return zz
      })), sb = zz((function(zz, uz, bz) {
        (zz[bz] = bz, uz[2]) && uz[2].filter((function(zz) {
          return "string" === typeof zz
        })).forEach((function(uz) {
          zz[uz] = bz
        }));
        return zz
      })), Nb = zz((function(zz, uz, bz) {
        var Ez = uz[2];
        return zz[bz] = bz, Ez.forEach((function(uz) {
          zz[uz] = bz
        })), zz
      }));
      var uz = "far" in Zb || yu.autoFetchSvg,
        bz = Ob(Rb, (function(zz, bz) {
          var Ez = bz[0],
            nz = bz[1],
            iz = bz[2];
          return "far" !== nz || uz || (nz = "fas"), "string" === typeof Ez && (zz.names[Ez] = {
            prefix: nz,
            iconName: iz
          }), "number" === typeof Ez && (zz.unicodes[Ez.toString(16)] = {
            prefix: nz,
            iconName: iz
          }), zz
        }), {
          names: {},
          unicodes: {}
        });
      rb = bz.names, ob = bz.unicodes, Xb = Gb(yu.styleDefault, {
        family: yu.familyDefault
      })
    };

    function Ab(zz, uz) {
      return (fb[zz] || {})[uz]
    }

    function Tb(zz, uz) {
      return (Nb[zz] || {})[uz]
    }

    function Lb(zz) {
      return rb[zz] || {
        prefix: null,
        iconName: null
      }
    }

    function Pb() {
      return Xb
    }
    xb = function(zz) {
      Xb = Gb(zz.styleDefault, {
        family: yu.familyDefault
      })
    }, Du.push(xb), Jb();

    function Gb(zz) {
      var uz = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        bz = void 0 === uz ? Gz : uz,
        Ez = Ju[bz][zz];
      if (bz === az && !zz) return "fad";
      var nz = Tu[bz][zz] || Tu[bz][Ez],
        iz = zz in nb.styles ? zz : null;
      return nz || iz || null
    }

    function ab(zz) {
      return zz.sort().filter((function(zz, uz, bz) {
        return bz.indexOf(zz) === uz
      }))
    }
    var Vb = Ou.concat(zu);

    function mb(zz) {
      var uz = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        bz = void 0 !== uz && uz,
        Ez = null,
        nz = ab(zz.filter((function(zz) {
          return Vb.includes(zz)
        }))),
        iz = ab(zz.filter((function(zz) {
          return !Vb.includes(zz)
        }))),
        lz = Hz(nz.filter((function(zz) {
          return Ez = zz, !Pz.includes(zz)
        })), 1)[0],
        Mz = void 0 === lz ? null : lz,
        Oz = function(zz) {
          var uz = Gz,
            bz = Kb.reduce((function(zz, uz) {
              return zz[uz] = "".concat(yu.cssPrefix, "-").concat(uz), zz
            }), {});
          return Yz.forEach((function(Ez) {
            (zz.includes(bz[Ez]) || zz.some((function(zz) {
              return wb[Ez].includes(zz)
            }))) && (uz = Ez)
          })), uz
        }(nz),
        pz = tz(tz({}, function(zz) {
          var uz = [],
            bz = null;
          return zz.forEach((function(zz) {
            var Ez = vb(yu.cssPrefix, zz);
            Ez ? bz = Ez : zz && uz.push(zz)
          })), {
            iconName: bz,
            rest: uz
          }
        }(iz)), {}, {
          prefix: Gb(Mz, {
            family: Oz
          })
        });
      return tz(tz(tz({}, pz), function(zz) {
        var uz = zz.values,
          bz = zz.family,
          Ez = zz.canonical,
          nz = zz.givenPrefix,
          iz = void 0 === nz ? "" : nz,
          lz = zz.styles,
          Mz = void 0 === lz ? {} : lz,
          tz = zz.config,
          Hz = void 0 === tz ? {} : tz,
          Oz = bz === az,
          pz = uz.includes("fa-duotone") || uz.includes("fad"),
          dz = "duotone" === Hz.familyDefault,
          Fz = "fad" === Ez.prefix || "fa-duotone" === Ez.prefix;
        !Oz && (pz || dz || Fz) && (Ez.prefix = "fad");
        (uz.includes("fa-brands") || uz.includes("fab")) && (Ez.prefix = "fab");
        if (!Ez.prefix && qb.includes(bz)) {
          if (Object.keys(Mz).find((function(zz) {
              return hb.includes(zz)
            })) || Hz.autoFetchSvg) {
            var Zz = kz.get(bz).defaultShortPrefixId;
            Ez.prefix = Zz, Ez.iconName = Tb(Ez.prefix, Ez.iconName) || Ez.iconName
          }
        }
        "fa" !== Ez.prefix && "fa" !== iz || (Ez.prefix = Pb() || "fas");
        return Ez
      }({
        values: zz,
        family: Oz,
        styles: Zb,
        config: yu,
        canonical: pz,
        givenPrefix: Ez
      })), function(zz, uz, bz) {
        var Ez = bz.prefix,
          nz = bz.iconName;
        if (zz || !Ez || !nz) return {
          prefix: Ez,
          iconName: nz
        };
        var iz = "fa" === uz ? Lb(nz) : {},
          lz = Tb(Ez, nz);
        nz = iz.iconName || lz || nz, "far" !== (Ez = iz.prefix || Ez) || Zb.far || !Zb.fas || yu.autoFetchSvg || (Ez = "fas");
        return {
          prefix: Ez,
          iconName: nz
        }
      }(bz, Ez, pz))
    }
    var qb = Yz.filter((function(zz) {
        return zz !== Gz || zz !== az
      })),
      hb = Object.keys(Hu).filter((function(zz) {
        return zz !== Gz
      })).map((function(zz) {
        return Object.keys(Hu[zz])
      })).flat();
    var Ub = function() {
        return function(zz, uz, bz) {
          return uz && nz(zz.prototype, uz), bz && nz(zz, bz), Object.defineProperty(zz, "prototype", {
            writable: !1
          }), zz
        }((function zz() {
          ! function(zz, uz) {
            if (!(zz instanceof uz)) throw new TypeError("Cannot call a class as a function")
          }(this, zz), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var zz = this, uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
            var nz = bz.reduce(this._pullDefinitions, {});
            Object.keys(nz).forEach((function(uz) {
              zz.definitions[uz] = tz(tz({}, zz.definitions[uz] || {}), nz[uz]), Fb(uz, nz[uz]);
              var bz = Pu[Gz][uz];
              bz && Fb(bz, nz[uz]), Jb()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(zz, uz) {
            var bz = uz.prefix && uz.iconName && uz.icon ? {
              0: uz
            } : uz;
            return Object.keys(bz).map((function(uz) {
              var Ez = bz[uz],
                nz = Ez.prefix,
                iz = Ez.iconName,
                lz = Ez.icon,
                Mz = lz[2];
              zz[nz] || (zz[nz] = {}), Mz.length > 0 && Mz.forEach((function(uz) {
                "string" === typeof uz && (zz[nz][uz] = lz)
              })), zz[nz][iz] = lz
            })), zz
          }
        }])
      }(),
      cb = [],
      gb = {},
      Sb = {},
      yb = Object.keys(Sb);

    function Db(zz, uz) {
      for (var bz = arguments.length, Ez = new Array(bz > 2 ? bz - 2 : 0), nz = 2; nz < bz; nz++) Ez[nz - 2] = arguments[nz];
      return (gb[zz] || []).forEach((function(zz) {
        uz = zz.apply(null, [uz].concat(Ez))
      })), uz
    }

    function Qb(zz) {
      for (var uz = arguments.length, bz = new Array(uz > 1 ? uz - 1 : 0), Ez = 1; Ez < uz; Ez++) bz[Ez - 1] = arguments[Ez];
      (gb[zz] || []).forEach((function(zz) {
        zz.apply(null, bz)
      }))
    }

    function Wb() {
      var zz = arguments[0],
        uz = Array.prototype.slice.call(arguments, 1);
      return Sb[zz] ? Sb[zz].apply(null, uz) : void 0
    }

    function eb(zz) {
      "fa" === zz.prefix && (zz.prefix = "fas");
      var uz = zz.iconName,
        bz = zz.prefix || Pb();
      if (uz) return uz = Tb(bz, uz) || uz, Hb(jb.definitions, bz, uz) || Hb(nb.styles, bz, uz)
    }
    var jb = new Ub,
      Ib = {
        i2svg: function() {
          var zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Az ? (Qb("beforeI2svg", zz), Wb("pseudoElements2svg", zz), Wb("i2svg", zz)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var zz, uz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            bz = uz.autoReplaceSvgRoot;
          !1 === yu.autoReplaceSvg && (yu.autoReplaceSvg = !0), yu.observeMutations = !0, zz = function() {
            Cb({
              autoReplaceSvgRoot: bz
            }), Qb("watch", uz)
          }, Az && (Mb ? setTimeout(zz, 0) : ib.push(zz))
        }
      },
      Bb = {
        noAuto: function() {
          yu.autoReplaceSvg = !1, yu.observeMutations = !1, Qb("noAuto")
        },
        config: yu,
        dom: Ib,
        parse: {
          icon: function(zz) {
            if (null === zz) return null;
            if ("object" === dz(zz) && zz.prefix && zz.iconName) return {
              prefix: zz.prefix,
              iconName: Tb(zz.prefix, zz.iconName) || zz.iconName
            };
            if (Array.isArray(zz) && 2 === zz.length) {
              var uz = 0 === zz[1].indexOf("fa-") ? zz[1].slice(3) : zz[1],
                bz = Gb(zz[0]);
              return {
                prefix: bz,
                iconName: Tb(bz, uz) || uz
              }
            }
            if ("string" === typeof zz && (zz.indexOf("".concat(yu.cssPrefix, "-")) > -1 || zz.match(au))) {
              var Ez = mb(zz.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: Ez.prefix || Pb(),
                iconName: Tb(Ez.prefix, Ez.iconName) || Ez.iconName
              }
            }
            if ("string" === typeof zz) {
              var nz = Pb();
              return {
                prefix: nz,
                iconName: Tb(nz, zz) || zz
              }
            }
          }
        },
        library: jb,
        findIconDefinition: eb,
        toHtml: tb
      },
      Cb = function() {
        var zz = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          uz = void 0 === zz ? vz : zz;
        (Object.keys(nb.styles).length > 0 || yu.autoFetchSvg) && Az && yu.autoReplaceSvg && Bb.dom.i2svg({
          node: uz
        })
      };

    function Yb(zz, uz) {
      return Object.defineProperty(zz, "abstract", {
        get: uz
      }), Object.defineProperty(zz, "html", {
        get: function() {
          return zz.abstract.map((function(zz) {
            return tb(zz)
          }))
        }
      }), Object.defineProperty(zz, "node", {
        get: function() {
          if (Az) {
            var uz = vz.createElement("div");
            return uz.innerHTML = zz.html, uz.children
          }
        }
      }), zz
    }

    function kb(zz) {
      var uz = zz.icons,
        bz = uz.main,
        Ez = uz.mask,
        nz = zz.prefix,
        iz = zz.iconName,
        lz = zz.transform,
        Mz = zz.symbol,
        Hz = zz.maskId,
        Oz = zz.extra,
        pz = zz.watchable,
        dz = void 0 !== pz && pz,
        Fz = Ez.found ? Ez : bz,
        Zz = Fz.width,
        Rz = Fz.height,
        Kz = [yu.replacementClass, iz ? "".concat(yu.cssPrefix, "-").concat(iz) : ""].filter((function(zz) {
          return -1 === Oz.classes.indexOf(zz)
        })).filter((function(zz) {
          return "" !== zz || !!zz
        })).concat(Oz.classes).join(" "),
        wz = {
          children: [],
          attributes: tz(tz({}, Oz.attributes), {}, {
            "data-prefix": nz,
            "data-icon": iz,
            class: Kz,
            role: Oz.attributes.role || "img",
            viewBox: "0 0 ".concat(Zz, " ").concat(Rz)
          })
        };
      (function(zz) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(uz) {
          return uz in zz
        }))
      })(Oz.attributes) || Oz.attributes["aria-hidden"] || (wz.attributes["aria-hidden"] = "true"), dz && (wz.attributes[Ku] = "");
      var Xz = tz(tz({}, wz), {}, {
          prefix: nz,
          iconName: iz,
          main: bz,
          mask: Ez,
          maskId: Hz,
          transform: lz,
          symbol: Mz,
          styles: tz({}, Oz.styles)
        }),
        fz = Ez.found && bz.found ? Wb("generateAbstractMask", Xz) || {
          children: [],
          attributes: {}
        } : Wb("generateAbstractIcon", Xz) || {
          children: [],
          attributes: {}
        },
        sz = fz.children,
        rz = fz.attributes;
      return Xz.children = sz, Xz.attributes = rz, Mz ? function(zz) {
        var uz = zz.prefix,
          bz = zz.iconName,
          Ez = zz.children,
          nz = zz.attributes,
          iz = zz.symbol,
          lz = !0 === iz ? "".concat(uz, "-").concat(yu.cssPrefix, "-").concat(bz) : iz;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: tz(tz({}, nz), {}, {
              id: lz
            }),
            children: Ez
          }]
        }]
      }(Xz) : function(zz) {
        var uz = zz.children,
          bz = zz.main,
          Ez = zz.mask,
          nz = zz.attributes,
          iz = zz.styles,
          lz = zz.transform;
        if (Yu(lz) && bz.found && !Ez.found) {
          var Mz = {
            x: bz.width / bz.height / 2,
            y: .5
          };
          nz.style = Cu(tz(tz({}, iz), {}, {
            "transform-origin": "".concat(Mz.x + lz.x / 16, "em ").concat(Mz.y + lz.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: nz,
          children: uz
        }]
      }(Xz)
    }

    function zE(zz) {
      var uz = zz.content,
        bz = zz.width,
        Ez = zz.height,
        nz = zz.transform,
        iz = zz.extra,
        lz = zz.watchable,
        Mz = void 0 !== lz && lz,
        Hz = tz(tz({}, iz.attributes), {}, {
          class: iz.classes.join(" ")
        });
      Mz && (Hz[Ku] = "");
      var Oz = tz({}, iz.styles);
      Yu(nz) && (Oz.transform = function(zz) {
        var uz = zz.transform,
          bz = zz.width,
          Ez = void 0 === bz ? 16 : bz,
          nz = zz.height,
          iz = void 0 === nz ? 16 : nz,
          lz = zz.startCentered,
          Mz = void 0 !== lz && lz,
          tz = "";
        return tz += Mz && Tz ? "translate(".concat(uz.x / Qu - Ez / 2, "em, ").concat(uz.y / Qu - iz / 2, "em) ") : Mz ? "translate(calc(-50% + ".concat(uz.x / Qu, "em), calc(-50% + ").concat(uz.y / Qu, "em)) ") : "translate(".concat(uz.x / Qu, "em, ").concat(uz.y / Qu, "em) "), tz += "scale(".concat(uz.size / Qu * (uz.flipX ? -1 : 1), ", ").concat(uz.size / Qu * (uz.flipY ? -1 : 1), ") "), tz + "rotate(".concat(uz.rotate, "deg) ")
      }({
        transform: nz,
        startCentered: !0,
        width: bz,
        height: Ez
      }), Oz["-webkit-transform"] = Oz.transform);
      var pz = Cu(Oz);
      pz.length > 0 && (Hz.style = pz);
      var dz = [];
      return dz.push({
        tag: "span",
        attributes: Hz,
        children: [uz]
      }), dz
    }
    var uE = nb.styles;

    function bE(zz) {
      var uz = zz[0],
        bz = zz[1],
        Ez = Hz(zz.slice(4), 1)[0];
      return {
        found: !0,
        width: uz,
        height: bz,
        icon: Array.isArray(Ez) ? {
          tag: "g",
          attributes: {
            class: "".concat(yu.cssPrefix, "-").concat(hu.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(yu.cssPrefix, "-").concat(hu.SECONDARY),
              fill: "currentColor",
              d: Ez[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(yu.cssPrefix, "-").concat(hu.PRIMARY),
              fill: "currentColor",
              d: Ez[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: Ez
          }
        }
      }
    }
    var EE = {
      found: !1,
      width: 512,
      height: 512
    };

    function nE(zz, uz) {
      var bz = uz;
      return "fa" === uz && null !== yu.styleDefault && (uz = Pb()), new Promise((function(Ez, nz) {
        if ("fa" === bz) {
          var iz = Lb(zz) || {};
          zz = iz.iconName || zz, uz = iz.prefix || uz
        }
        if (zz && uz && uE[uz] && uE[uz][zz]) return Ez(bE(uE[uz][zz]));
        ! function(zz, uz) {
          Nu || yu.showMissingIcons || !zz || console.error('Icon with name "'.concat(zz, '" and prefix "').concat(uz, '" is missing.'))
        }(zz, uz), Ez(tz(tz({}, EE), {}, {
          icon: yu.showMissingIcons && zz && Wb("missingIconAbstract") || {}
        }))
      }))
    }
    var iE = function() {},
      lE = yu.measurePerformance && Jz && Jz.mark && Jz.measure ? Jz : {
        mark: iE,
        measure: iE
      },
      ME = 'FA "7.2.0"',
      tE = function(zz) {
        lE.mark("".concat(ME, " ").concat(zz, " ends")), lE.measure("".concat(ME, " ").concat(zz), "".concat(ME, " ").concat(zz, " begins"), "".concat(ME, " ").concat(zz, " ends"))
      },
      HE = function(zz) {
        return lE.mark("".concat(ME, " ").concat(zz, " begins")),
          function() {
            return tE(zz)
          }
      },
      OE = function() {};

    function pE(zz) {
      return "string" === typeof(zz.getAttribute ? zz.getAttribute(Ku) : null)
    }

    function dE(zz) {
      return vz.createElementNS("http://www.w3.org/2000/svg", zz)
    }

    function FE(zz) {
      return vz.createElement(zz)
    }

    function ZE(zz) {
      var uz = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        bz = void 0 === uz ? "svg" === zz.tag ? dE : FE : uz;
      if ("string" === typeof zz) return vz.createTextNode(zz);
      var Ez = bz(zz.tag);
      return Object.keys(zz.attributes || []).forEach((function(uz) {
        Ez.setAttribute(uz, zz.attributes[uz])
      })), (zz.children || []).forEach((function(zz) {
        Ez.appendChild(ZE(zz, {
          ceFn: bz
        }))
      })), Ez
    }
    var RE = {
      replace: function(zz) {
        var uz = zz[0];
        if (uz.parentNode)
          if (zz[1].forEach((function(zz) {
              uz.parentNode.insertBefore(ZE(zz), uz)
            })), null === uz.getAttribute(Ku) && yu.keepOriginalSource) {
            var bz = vz.createComment(function(zz) {
              var uz = " ".concat(zz.outerHTML, " ");
              return "".concat(uz, "Font Awesome fontawesome.com ")
            }(uz));
            uz.parentNode.replaceChild(bz, uz)
          } else uz.remove()
      },
      nest: function(zz) {
        var uz = zz[0],
          bz = zz[1];
        if (~Iu(uz).indexOf(yu.replacementClass)) return RE.replace(zz);
        var Ez = new RegExp("".concat(yu.cssPrefix, "-.*"));
        if (delete bz[0].attributes.id, bz[0].attributes.class) {
          var nz = bz[0].attributes.class.split(" ").reduce((function(zz, uz) {
            return uz === yu.replacementClass || uz.match(Ez) ? zz.toSvg.push(uz) : zz.toNode.push(uz), zz
          }), {
            toNode: [],
            toSvg: []
          });
          bz[0].attributes.class = nz.toSvg.join(" "), 0 === nz.toNode.length ? uz.removeAttribute("class") : uz.setAttribute("class", nz.toNode.join(" "))
        }
        var iz = bz.map((function(zz) {
          return tb(zz)
        })).join("\n");
        uz.setAttribute(Ku, ""), uz.innerHTML = iz
      }
    };

    function KE(zz) {
      zz()
    }

    function wE(zz, uz) {
      var bz = "function" === typeof uz ? uz : OE;
      if (0 === zz.length) bz();
      else {
        var Ez = KE;
        "async" === yu.mutateApproach && (Ez = Nz.requestAnimationFrame || KE), Ez((function() {
          var uz = !0 === yu.autoReplaceSvg ? RE.replace : RE[yu.autoReplaceSvg] || RE.replace,
            Ez = HE("mutate");
          zz.map(uz), Ez(), bz()
        }))
      }
    }
    var XE = !1;

    function fE() {
      XE = !0
    }

    function sE() {
      XE = !1
    }
    var rE = null;

    function oE(zz) {
      if (xz && yu.observeMutations) {
        var uz = zz.treeCallback,
          bz = void 0 === uz ? OE : uz,
          Ez = zz.nodeCallback,
          nz = void 0 === Ez ? OE : Ez,
          iz = zz.pseudoElementsCallback,
          lz = void 0 === iz ? OE : iz,
          Mz = zz.observeMutationsRoot,
          tz = void 0 === Mz ? vz : Mz;
        rE = new xz((function(zz) {
          if (!XE) {
            var uz = Pb();
            ju(zz).forEach((function(zz) {
              if ("childList" === zz.type && zz.addedNodes.length > 0 && !pE(zz.addedNodes[0]) && (yu.searchPseudoElements && lz(zz.target), bz(zz.target)), "attributes" === zz.type && zz.target.parentNode && yu.searchPseudoElements && lz([zz.target], !0), "attributes" === zz.type && pE(zz.target) && ~qu.indexOf(zz.attributeName))
                if ("class" === zz.attributeName && function(zz) {
                    var uz = zz.getAttribute ? zz.getAttribute(Xu) : null,
                      bz = zz.getAttribute ? zz.getAttribute(fu) : null;
                    return uz && bz
                  }(zz.target)) {
                  var Ez = mb(Iu(zz.target)),
                    iz = Ez.prefix,
                    Mz = Ez.iconName;
                  zz.target.setAttribute(Xu, iz || uz), Mz && zz.target.setAttribute(fu, Mz)
                } else(tz = zz.target) && tz.classList && tz.classList.contains && tz.classList.contains(yu.replacementClass) && nz(zz.target);
              var tz
            }))
          }
        })), Az && rE.observe(tz, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function NE(zz) {
      var uz, bz, Ez = zz.getAttribute("data-prefix"),
        nz = zz.getAttribute("data-icon"),
        iz = void 0 !== zz.innerText ? zz.innerText.trim() : "",
        lz = mb(Iu(zz));
      return lz.prefix || (lz.prefix = Pb()), Ez && nz && (lz.prefix = Ez, lz.iconName = nz), lz.iconName && lz.prefix || (lz.prefix && iz.length > 0 && (lz.iconName = (uz = lz.prefix, bz = zz.innerText, (sb[uz] || {})[bz] || Ab(lz.prefix, pb(zz.innerText)))), !lz.iconName && yu.autoFetchSvg && zz.firstChild && zz.firstChild.nodeType === Node.TEXT_NODE && (lz.iconName = zz.firstChild.data)), lz
    }

    function vE(zz) {
      var uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        bz = NE(zz),
        Ez = bz.iconName,
        nz = bz.prefix,
        iz = bz.rest,
        lz = function(zz) {
          return ju(zz.attributes).reduce((function(zz, uz) {
            return "class" !== zz.name && "style" !== zz.name && (zz[uz.name] = uz.value), zz
          }), {})
        }(zz),
        Mz = Db("parseNodeAttributes", {}, zz),
        Hz = uz.styleParser ? function(zz) {
          var uz = zz.getAttribute("style"),
            bz = [];
          return uz && (bz = uz.split(";").reduce((function(zz, uz) {
            var bz = uz.split(":"),
              Ez = bz[0],
              nz = bz.slice(1);
            return Ez && nz.length > 0 && (zz[Ez] = nz.join(":").trim()), zz
          }), {})), bz
        }(zz) : [];
      return tz({
        iconName: Ez,
        prefix: nz,
        transform: Wu,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: iz,
          styles: Hz,
          attributes: lz
        }
      }, Mz)
    }
    var xE = nb.styles;

    function JE(zz) {
      var uz = "nest" === yu.autoReplaceSvg ? vE(zz, {
        styleParser: !1
      }) : vE(zz);
      return ~uz.extra.classes.indexOf(Vu) ? Wb("generateLayersText", zz, uz) : Wb("generateSvgReplacementMutation", zz, uz)
    }

    function AE(zz) {
      var uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!Az) return Promise.resolve();
      var bz = vz.documentElement.classList,
        Ez = function(zz) {
          return bz.add("".concat(su, "-").concat(zz))
        },
        nz = function(zz) {
          return bz.remove("".concat(su, "-").concat(zz))
        },
        iz = yu.autoFetchSvg ? [].concat(Oz(zu), Oz(Ou)) : Pz.concat(Object.keys(xE));
      iz.includes("fa") || iz.push("fa");
      var lz = [".".concat(Vu, ":not([").concat(Ku, "])")].concat(iz.map((function(zz) {
        return ".".concat(zz, ":not([").concat(Ku, "])")
      }))).join(", ");
      if (0 === lz.length) return Promise.resolve();
      var Mz = [];
      try {
        Mz = ju(zz.querySelectorAll(lz))
      } catch (pz) {}
      if (!(Mz.length > 0)) return Promise.resolve();
      Ez("pending"), nz("complete");
      var tz = HE("onTree"),
        Hz = Mz.reduce((function(zz, uz) {
          try {
            var bz = JE(uz);
            bz && zz.push(bz)
          } catch (pz) {
            Nu || "MissingIcon" === pz.name && console.error(pz)
          }
          return zz
        }), []);
      return new Promise((function(zz, bz) {
        Promise.all(Hz).then((function(bz) {
          wE(bz, (function() {
            Ez("active"), Ez("complete"), nz("pending"), "function" === typeof uz && uz(), tz(), zz()
          }))
        })).catch((function(zz) {
          tz(), bz(zz)
        }))
      }))
    }

    function TE(zz) {
      var uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      JE(zz).then((function(zz) {
        zz && wE([zz], uz)
      }))
    }
    var LE = function(zz) {
        var uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          bz = uz.transform,
          Ez = void 0 === bz ? Wu : bz,
          nz = uz.symbol,
          iz = void 0 !== nz && nz,
          lz = uz.mask,
          Mz = void 0 === lz ? null : lz,
          Hz = uz.maskId,
          Oz = void 0 === Hz ? null : Hz,
          pz = uz.classes,
          dz = void 0 === pz ? [] : pz,
          Fz = uz.attributes,
          Zz = void 0 === Fz ? {} : Fz,
          Rz = uz.styles,
          Kz = void 0 === Rz ? {} : Rz;
        if (zz) {
          var wz = zz.prefix,
            Xz = zz.iconName,
            fz = zz.icon;
          return Yb(tz({
            type: "icon"
          }, zz), (function() {
            return Qb("beforeDOMElementCreation", {
              iconDefinition: zz,
              params: uz
            }), kb({
              icons: {
                main: bE(fz),
                mask: Mz ? bE(Mz.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: wz,
              iconName: Xz,
              transform: tz(tz({}, Wu), Ez),
              symbol: iz,
              maskId: Oz,
              extra: {
                attributes: Zz,
                styles: Kz,
                classes: dz
              }
            })
          }))
        }
      },
      PE = {
        mixout: function() {
          return {
            icon: (zz = LE, function(uz) {
              var bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Ez = (uz || {}).icon ? uz : eb(uz || {}),
                nz = bz.mask;
              return nz && (nz = (nz || {}).icon ? nz : eb(nz || {})), zz(Ez, tz(tz({}, bz), {}, {
                mask: nz
              }))
            })
          };
          var zz
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(zz) {
              return zz.treeCallback = AE, zz.nodeCallback = TE, zz
            }
          }
        },
        provides: function(zz) {
          zz.i2svg = function(zz) {
            var uz = zz.node,
              bz = void 0 === uz ? vz : uz,
              Ez = zz.callback;
            return AE(bz, void 0 === Ez ? function() {} : Ez)
          }, zz.generateSvgReplacementMutation = function(zz, uz) {
            var bz = uz.iconName,
              Ez = uz.prefix,
              nz = uz.transform,
              iz = uz.symbol,
              lz = uz.mask,
              Mz = uz.maskId,
              tz = uz.extra;
            return new Promise((function(uz, Oz) {
              Promise.all([nE(bz, Ez), lz.iconName ? nE(lz.iconName, lz.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(lz) {
                var Oz = Hz(lz, 2),
                  pz = Oz[0],
                  dz = Oz[1];
                uz([zz, kb({
                  icons: {
                    main: pz,
                    mask: dz
                  },
                  prefix: Ez,
                  iconName: bz,
                  transform: nz,
                  symbol: iz,
                  maskId: Mz,
                  extra: tz,
                  watchable: !0
                })])
              })).catch(Oz)
            }))
          }, zz.generateAbstractIcon = function(zz) {
            var uz, bz = zz.children,
              Ez = zz.attributes,
              nz = zz.main,
              iz = zz.transform,
              lz = Cu(zz.styles);
            return lz.length > 0 && (Ez.style = lz), Yu(iz) && (uz = Wb("generateAbstractTransformGrouping", {
              main: nz,
              transform: iz,
              containerWidth: nz.width,
              iconWidth: nz.width
            })), bz.push(uz || nz.icon), {
              children: bz,
              attributes: Ez
            }
          }
        }
      },
      GE = {
        mixout: function() {
          return {
            layer: function(zz) {
              var uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                bz = uz.classes,
                Ez = void 0 === bz ? [] : bz;
              return Yb({
                type: "layer"
              }, (function() {
                Qb("beforeDOMElementCreation", {
                  assembler: zz,
                  params: uz
                });
                var bz = [];
                return zz((function(zz) {
                  Array.isArray(zz) ? zz.map((function(zz) {
                    bz = bz.concat(zz.abstract)
                  })) : bz = bz.concat(zz.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(yu.cssPrefix, "-layers")].concat(Oz(Ez)).join(" ")
                  },
                  children: bz
                }]
              }))
            }
          }
        }
      },
      aE = {
        mixout: function() {
          return {
            counter: function(zz) {
              var uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                bz = uz.title,
                Ez = void 0 === bz ? null : bz,
                nz = uz.classes,
                iz = void 0 === nz ? [] : nz,
                lz = uz.attributes,
                Mz = void 0 === lz ? {} : lz,
                Hz = uz.styles,
                pz = void 0 === Hz ? {} : Hz;
              return Yb({
                type: "counter",
                content: zz
              }, (function() {
                return Qb("beforeDOMElementCreation", {
                    content: zz,
                    params: uz
                  }),
                  function(zz) {
                    var uz = zz.content,
                      bz = zz.extra,
                      Ez = tz(tz({}, bz.attributes), {}, {
                        class: bz.classes.join(" ")
                      }),
                      nz = Cu(bz.styles);
                    nz.length > 0 && (Ez.style = nz);
                    var iz = [];
                    return iz.push({
                      tag: "span",
                      attributes: Ez,
                      children: [uz]
                    }), iz
                  }({
                    content: zz.toString(),
                    title: Ez,
                    extra: {
                      attributes: Mz,
                      styles: pz,
                      classes: ["".concat(yu.cssPrefix, "-layers-counter")].concat(Oz(iz))
                    }
                  })
              }))
            }
          }
        }
      },
      VE = {
        mixout: function() {
          return {
            text: function(zz) {
              var uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                bz = uz.transform,
                Ez = void 0 === bz ? Wu : bz,
                nz = uz.classes,
                iz = void 0 === nz ? [] : nz,
                lz = uz.attributes,
                Mz = void 0 === lz ? {} : lz,
                Hz = uz.styles,
                pz = void 0 === Hz ? {} : Hz;
              return Yb({
                type: "text",
                content: zz
              }, (function() {
                return Qb("beforeDOMElementCreation", {
                  content: zz,
                  params: uz
                }), zE({
                  content: zz,
                  transform: tz(tz({}, Wu), Ez),
                  extra: {
                    attributes: Mz,
                    styles: pz,
                    classes: ["".concat(yu.cssPrefix, "-layers-text")].concat(Oz(iz))
                  }
                })
              }))
            }
          }
        },
        provides: function(zz) {
          zz.generateLayersText = function(zz, uz) {
            var bz = uz.transform,
              Ez = uz.extra,
              nz = null,
              iz = null;
            if (Tz) {
              var lz = parseInt(getComputedStyle(zz).fontSize, 10),
                Mz = zz.getBoundingClientRect();
              nz = Mz.width / lz, iz = Mz.height / lz
            }
            return Promise.resolve([zz, zE({
              content: zz.innerHTML,
              width: nz,
              height: iz,
              transform: bz,
              extra: Ez,
              watchable: !0
            })])
          }
        }
      },
      mE = new RegExp('"', "ug"),
      qE = [1105920, 1112319],
      hE = tz(tz(tz(tz({}, {
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
      UE = Object.keys(hE).reduce((function(zz, uz) {
        return zz[uz.toLowerCase()] = hE[uz], zz
      }), {}),
      cE = Object.keys(UE).reduce((function(zz, uz) {
        var bz = UE[uz];
        return zz[uz] = bz[900] || Oz(Object.entries(bz))[0][1], zz
      }), {});

    function gE(zz, uz) {
      var bz = "".concat("data-fa-pseudo-element-pending").concat(uz.replace(":", "-"));
      return new Promise((function(Ez, nz) {
        if (null !== zz.getAttribute(bz)) return Ez();
        var iz = ju(zz.children).filter((function(zz) {
            return zz.getAttribute(wu) === uz
          }))[0],
          lz = Nz.getComputedStyle(zz, uz),
          Mz = lz.getPropertyValue("font-family"),
          Hz = Mz.match(mu),
          pz = lz.getPropertyValue("font-weight"),
          dz = lz.getPropertyValue("content");
        if (iz && !Hz) return zz.removeChild(iz), Ez();
        if (Hz && "none" !== dz && "" !== dz) {
          var Fz = lz.getPropertyValue("content"),
            Zz = function(zz, uz) {
              var bz = zz.replace(/^['"]|['"]$/g, "").toLowerCase(),
                Ez = parseInt(uz),
                nz = isNaN(Ez) ? "normal" : Ez;
              return (UE[bz] || {})[nz] || cE[bz]
            }(Mz, pz),
            Rz = function(zz) {
              return pb(Oz(zz.replace(mE, ""))[0] || "")
            }(Fz),
            Kz = Hz[0].startsWith("FontAwesome"),
            wz = function(zz) {
              var uz = zz.getPropertyValue("font-feature-settings").includes("ss01"),
                bz = zz.getPropertyValue("content").replace(mE, ""),
                Ez = bz.codePointAt(0),
                nz = Ez >= qE[0] && Ez <= qE[1],
                iz = 2 === bz.length && bz[0] === bz[1];
              return nz || iz || uz
            }(lz),
            Xz = Ab(Zz, Rz),
            fz = Xz;
          if (Kz) {
            var sz = function(zz) {
              var uz = ob[zz],
                bz = Ab("fas", zz);
              return uz || (bz ? {
                prefix: "fas",
                iconName: bz
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(Rz);
            sz.iconName && sz.prefix && (Xz = sz.iconName, Zz = sz.prefix)
          }
          if (!Xz || wz || iz && iz.getAttribute(Xu) === Zz && iz.getAttribute(fu) === fz) Ez();
          else {
            zz.setAttribute(bz, fz), iz && zz.removeChild(iz);
            var rz = {
                iconName: null,
                prefix: null,
                transform: Wu,
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
              oz = rz.extra;
            oz.attributes[wu] = uz, nE(Xz, Zz).then((function(nz) {
              var iz = kb(tz(tz({}, rz), {}, {
                  icons: {
                    main: nz,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: Zz,
                  iconName: fz,
                  extra: oz,
                  watchable: !0
                })),
                lz = vz.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === uz ? zz.insertBefore(lz, zz.firstChild) : zz.appendChild(lz), lz.outerHTML = iz.map((function(zz) {
                return tb(zz)
              })).join("\n"), zz.removeAttribute(bz), Ez()
            })).catch(nz)
          }
        } else Ez()
      }))
    }

    function SE(zz) {
      return Promise.all([gE(zz, "::before"), gE(zz, "::after")])
    }

    function yE(zz) {
      return zz.parentNode !== document.head && !~ru.indexOf(zz.tagName.toUpperCase()) && !zz.getAttribute(wu) && (!zz.parentNode || "svg" !== zz.parentNode.tagName)
    }
    var DE = function(zz) {
        return !!zz && ou.some((function(uz) {
          return zz.includes(uz)
        }))
      },
      QE = function(zz) {
        if (!zz) return [];
        var uz = new Set,
          bz = zz.split(/,(?![^()]*\))/).map((function(zz) {
            return zz.trim()
          }));
        bz = bz.flatMap((function(zz) {
          return zz.includes("(") ? zz : zz.split(",").map((function(zz) {
            return zz.trim()
          }))
        }));
        var Ez, nz = iz(bz);
        try {
          for (nz.s(); !(Ez = nz.n()).done;) {
            var lz = Ez.value;
            if (DE(lz)) {
              var Mz = ou.reduce((function(zz, uz) {
                return zz.replace(uz, "")
              }), lz);
              "" !== Mz && "*" !== Mz && uz.add(Mz)
            }
          }
        } catch (tz) {
          nz.e(tz)
        } finally {
          nz.f()
        }
        return uz
      };

    function WE(zz) {
      if (Az) {
        var uz;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) uz = zz;
        else if (yu.searchPseudoElementsFullScan) uz = zz.querySelectorAll("*");
        else {
          var bz, Ez = new Set,
            nz = iz(document.styleSheets);
          try {
            for (nz.s(); !(bz = nz.n()).done;) {
              var lz = bz.value;
              try {
                var Mz, tz = iz(lz.cssRules);
                try {
                  for (tz.s(); !(Mz = tz.n()).done;) {
                    var Hz, Oz = Mz.value,
                      pz = iz(QE(Oz.selectorText));
                    try {
                      for (pz.s(); !(Hz = pz.n()).done;) {
                        var dz = Hz.value;
                        Ez.add(dz)
                      }
                    } catch (Zz) {
                      pz.e(Zz)
                    } finally {
                      pz.f()
                    }
                  }
                } catch (Zz) {
                  tz.e(Zz)
                } finally {
                  tz.f()
                }
              } catch (Rz) {
                yu.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(lz.href, " (").concat(Rz.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (Zz) {
            nz.e(Zz)
          } finally {
            nz.f()
          }
          if (!Ez.size) return;
          var Fz = Array.from(Ez).join(", ");
          try {
            uz = zz.querySelectorAll(Fz)
          } catch (Kz) {}
        }
        return new Promise((function(zz, bz) {
          var Ez = ju(uz).filter(yE).map(SE),
            nz = HE("searchPseudoElements");
          fE(), Promise.all(Ez).then((function() {
            nz(), sE(), zz()
          })).catch((function() {
            nz(), sE(), bz()
          }))
        }))
      }
    }
    var eE = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(zz) {
              return zz.pseudoElementsCallback = WE, zz
            }
          }
        },
        provides: function(zz) {
          zz.pseudoElements2svg = function(zz) {
            var uz = zz.node,
              bz = void 0 === uz ? vz : uz;
            yu.searchPseudoElements && WE(bz)
          }
        }
      },
      jE = !1,
      IE = function(zz) {
        return zz.toLowerCase().split(" ").reduce((function(zz, uz) {
          var bz = uz.toLowerCase().split("-"),
            Ez = bz[0],
            nz = bz.slice(1).join("-");
          if (Ez && "h" === nz) return zz.flipX = !0, zz;
          if (Ez && "v" === nz) return zz.flipY = !0, zz;
          if (nz = parseFloat(nz), isNaN(nz)) return zz;
          switch (Ez) {
            case "grow":
              zz.size = zz.size + nz;
              break;
            case "shrink":
              zz.size = zz.size - nz;
              break;
            case "left":
              zz.x = zz.x - nz;
              break;
            case "right":
              zz.x = zz.x + nz;
              break;
            case "up":
              zz.y = zz.y - nz;
              break;
            case "down":
              zz.y = zz.y + nz;
              break;
            case "rotate":
              zz.rotate = zz.rotate + nz
          }
          return zz
        }), {
          size: 16,
          x: 0,
          y: 0,
          flipX: !1,
          flipY: !1,
          rotate: 0
        })
      },
      BE = {
        mixout: function() {
          return {
            parse: {
              transform: function(zz) {
                return IE(zz)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(zz, uz) {
              var bz = uz.getAttribute("data-fa-transform");
              return bz && (zz.transform = IE(bz)), zz
            }
          }
        },
        provides: function(zz) {
          zz.generateAbstractTransformGrouping = function(zz) {
            var uz = zz.main,
              bz = zz.transform,
              Ez = zz.containerWidth,
              nz = zz.iconWidth,
              iz = {
                transform: "translate(".concat(Ez / 2, " 256)")
              },
              lz = "translate(".concat(32 * bz.x, ", ").concat(32 * bz.y, ") "),
              Mz = "scale(".concat(bz.size / 16 * (bz.flipX ? -1 : 1), ", ").concat(bz.size / 16 * (bz.flipY ? -1 : 1), ") "),
              Hz = "rotate(".concat(bz.rotate, " 0 0)"),
              Oz = {
                outer: iz,
                inner: {
                  transform: "".concat(lz, " ").concat(Mz, " ").concat(Hz)
                },
                path: {
                  transform: "translate(".concat(nz / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: tz({}, Oz.outer),
              children: [{
                tag: "g",
                attributes: tz({}, Oz.inner),
                children: [{
                  tag: uz.icon.tag,
                  children: uz.icon.children,
                  attributes: tz(tz({}, uz.icon.attributes), Oz.path)
                }]
              }]
            }
          }
        }
      },
      CE = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function YE(zz) {
      var uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return zz.attributes && (zz.attributes.fill || uz) && (zz.attributes.fill = "black"), zz
    }
    var kE = {
        hooks: function() {
          return {
            parseNodeAttributes: function(zz, uz) {
              var bz = uz.getAttribute("data-fa-mask"),
                Ez = bz ? mb(bz.split(" ").map((function(zz) {
                  return zz.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return Ez.prefix || (Ez.prefix = Pb()), zz.mask = Ez, zz.maskId = uz.getAttribute("data-fa-mask-id"), zz
            }
          }
        },
        provides: function(zz) {
          zz.generateAbstractMask = function(zz) {
            var uz, bz = zz.children,
              Ez = zz.attributes,
              nz = zz.main,
              iz = zz.mask,
              lz = zz.maskId,
              Mz = zz.transform,
              Hz = nz.width,
              Oz = nz.icon,
              pz = iz.width,
              dz = iz.icon,
              Fz = function(zz) {
                var uz = zz.transform,
                  bz = zz.containerWidth,
                  Ez = zz.iconWidth,
                  nz = {
                    transform: "translate(".concat(bz / 2, " 256)")
                  },
                  iz = "translate(".concat(32 * uz.x, ", ").concat(32 * uz.y, ") "),
                  lz = "scale(".concat(uz.size / 16 * (uz.flipX ? -1 : 1), ", ").concat(uz.size / 16 * (uz.flipY ? -1 : 1), ") "),
                  Mz = "rotate(".concat(uz.rotate, " 0 0)");
                return {
                  outer: nz,
                  inner: {
                    transform: "".concat(iz, " ").concat(lz, " ").concat(Mz)
                  },
                  path: {
                    transform: "translate(".concat(Ez / 2 * -1, " -256)")
                  }
                }
              }({
                transform: Mz,
                containerWidth: pz,
                iconWidth: Hz
              }),
              Zz = {
                tag: "rect",
                attributes: tz(tz({}, CE), {}, {
                  fill: "white"
                })
              },
              Rz = Oz.children ? {
                children: Oz.children.map(YE)
              } : {},
              Kz = {
                tag: "g",
                attributes: tz({}, Fz.inner),
                children: [YE(tz({
                  tag: Oz.tag,
                  attributes: tz(tz({}, Oz.attributes), Fz.path)
                }, Rz))]
              },
              wz = {
                tag: "g",
                attributes: tz({}, Fz.outer),
                children: [Kz]
              },
              Xz = "mask-".concat(lz || eu()),
              fz = "clip-".concat(lz || eu()),
              sz = {
                tag: "mask",
                attributes: tz(tz({}, CE), {}, {
                  id: Xz,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [Zz, wz]
              },
              rz = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: fz
                  },
                  children: (uz = dz, "g" === uz.tag ? uz.children : [uz])
                }, sz]
              };
            return bz.push(rz, {
              tag: "rect",
              attributes: tz({
                fill: "currentColor",
                "clip-path": "url(#".concat(fz, ")"),
                mask: "url(#".concat(Xz, ")")
              }, CE)
            }), {
              children: bz,
              attributes: Ez
            }
          }
        }
      },
      zn = {
        provides: function(zz) {
          var uz = !1;
          Nz.matchMedia && (uz = Nz.matchMedia("(prefers-reduced-motion: reduce)").matches), zz.missingIconAbstract = function() {
            var zz = [],
              bz = {
                fill: "currentColor"
              },
              Ez = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            zz.push({
              tag: "path",
              attributes: tz(tz({}, bz), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var nz = tz(tz({}, Ez), {}, {
                attributeName: "opacity"
              }),
              iz = {
                tag: "circle",
                attributes: tz(tz({}, bz), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return uz || iz.children.push({
              tag: "animate",
              attributes: tz(tz({}, Ez), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: tz(tz({}, nz), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), zz.push(iz), zz.push({
              tag: "path",
              attributes: tz(tz({}, bz), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: uz ? [] : [{
                tag: "animate",
                attributes: tz(tz({}, nz), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), uz || zz.push({
              tag: "path",
              attributes: tz(tz({}, bz), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: tz(tz({}, nz), {}, {
                  values: "0;0;1;1;0;0;"
                })
              }]
            }), {
              tag: "g",
              attributes: {
                class: "missing"
              },
              children: zz
            }
          }
        }
      };
    ! function(zz, uz) {
      var bz = uz.mixoutsTo;
      cb = zz, gb = {}, Object.keys(Sb).forEach((function(zz) {
        -1 === yb.indexOf(zz) && delete Sb[zz]
      })), cb.forEach((function(zz) {
        var uz = zz.mixout ? zz.mixout() : {};
        if (Object.keys(uz).forEach((function(zz) {
            "function" === typeof uz[zz] && (bz[zz] = uz[zz]), "object" === dz(uz[zz]) && Object.keys(uz[zz]).forEach((function(Ez) {
              bz[zz] || (bz[zz] = {}), bz[zz][Ez] = uz[zz][Ez]
            }))
          })), zz.hooks) {
          var Ez = zz.hooks();
          Object.keys(Ez).forEach((function(zz) {
            gb[zz] || (gb[zz] = []), gb[zz].push(Ez[zz])
          }))
        }
        zz.provides && zz.provides(Sb)
      }))
    }([bb, PE, GE, aE, VE, eE, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              fE(), jE = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            oE(Db("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            rE && rE.disconnect()
          },
          watch: function(zz) {
            var uz = zz.observeMutationsRoot;
            jE ? sE() : oE(Db("mutationObserverCallbacks", {
              observeMutationsRoot: uz
            }))
          }
        }
      }
    }, BE, kE, zn, {
      hooks: function() {
        return {
          parseNodeAttributes: function(zz, uz) {
            var bz = uz.getAttribute("data-fa-symbol"),
              Ez = null !== bz && ("" === bz || bz);
            return zz.symbol = Ez, zz
          }
        }
      }
    }], {
      mixoutsTo: Bb
    });
    var un = Bb.noAuto,
      bn = Bb.config,
      En = Bb.library,
      nn = Bb.dom,
      Mn = Bb.parse,
      tn = Bb.findIconDefinition,
      Hn = Bb.toHtml,
      On = Bb.icon,
      pn = Bb.layer,
      dn = Bb.text,
      Fn = Bb.counter
  },
  6419: zz => {
    zz.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);