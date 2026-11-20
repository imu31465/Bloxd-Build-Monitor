/*! For license information please see 7rj44.fa-renderer.e4e5e176.chunk.js.LICENSE.txt */
export const id = 32;
export const ids = [32];
export const modules = {
  6261: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      FontAwesomeIcon: () => Jz
    });
    var Fz = sz(6258),
      Wz = sz(4582),
      Xz = sz.n(Wz),
      Oz = sz(65);

    function oz(zz, tz) {
      (null == tz || tz > zz.length) && (tz = zz.length);
      for (var sz = 0, Fz = Array(tz); sz < tz; sz++) Fz[sz] = zz[sz];
      return Fz
    }

    function vz(zz, tz, sz) {
      return (tz = function(zz) {
        var tz = function(zz, tz) {
          if ("object" != typeof zz || !zz) return zz;
          var sz = zz[Symbol.toPrimitive];
          if (void 0 !== sz) {
            var Fz = sz.call(zz, tz || "default");
            if ("object" != typeof Fz) return Fz;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === tz ? String : Number)(zz)
        }(zz, "string");
        return "symbol" == typeof tz ? tz : tz + ""
      }(tz)) in zz ? Object.defineProperty(zz, tz, {
        value: sz,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : zz[tz] = sz, zz
    }

    function Uz(zz, tz) {
      var sz = Object.keys(zz);
      if (Object.getOwnPropertySymbols) {
        var Fz = Object.getOwnPropertySymbols(zz);
        tz && (Fz = Fz.filter((function(tz) {
          return Object.getOwnPropertyDescriptor(zz, tz).enumerable
        }))), sz.push.apply(sz, Fz)
      }
      return sz
    }

    function Kz(zz) {
      for (var tz = 1; tz < arguments.length; tz++) {
        var sz = null != arguments[tz] ? arguments[tz] : {};
        tz % 2 ? Uz(Object(sz), !0).forEach((function(tz) {
          vz(zz, tz, sz[tz])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(sz)) : Uz(Object(sz)).forEach((function(tz) {
          Object.defineProperty(zz, tz, Object.getOwnPropertyDescriptor(sz, tz))
        }))
      }
      return zz
    }

    function uz(zz, tz) {
      return function(zz) {
        if (Array.isArray(zz)) return zz
      }(zz) || function(zz, tz) {
        var sz = null == zz ? null : "undefined" != typeof Symbol && zz[Symbol.iterator] || zz["@@iterator"];
        if (null != sz) {
          var Fz, Wz, Xz, Oz, oz = [],
            vz = !0,
            Uz = !1;
          try {
            if (Xz = (sz = sz.call(zz)).next, 0 === tz) {
              if (Object(sz) !== sz) return;
              vz = !1
            } else
              for (; !(vz = (Fz = Xz.call(sz)).done) && (oz.push(Fz.value), oz.length !== tz); vz = !0);
          } catch (zz) {
            Uz = !0, Wz = zz
          } finally {
            try {
              if (!vz && null != sz.return && (Oz = sz.return(), Object(Oz) !== Oz)) return
            } finally {
              if (Uz) throw Wz
            }
          }
          return oz
        }
      }(zz, tz) || wz(zz, tz) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Nz(zz) {
      return function(zz) {
        if (Array.isArray(zz)) return oz(zz)
      }(zz) || function(zz) {
        if ("undefined" != typeof Symbol && null != zz[Symbol.iterator] || null != zz["@@iterator"]) return Array.from(zz)
      }(zz) || wz(zz) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bz(zz) {
      return bz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(zz) {
        return typeof zz
      } : function(zz) {
        return zz && "function" == typeof Symbol && zz.constructor === Symbol && zz !== Symbol.prototype ? "symbol" : typeof zz
      }, bz(zz)
    }

    function wz(zz, tz) {
      if (zz) {
        if ("string" == typeof zz) return oz(zz, tz);
        var sz = {}.toString.call(zz).slice(8, -1);
        return "Object" === sz && zz.constructor && (sz = zz.constructor.name), "Map" === sz || "Set" === sz ? Array.from(zz) : "Arguments" === sz || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(sz) ? oz(zz, tz) : void 0
      }
    }
    var Dz;
    try {
      var gz = sz(6268);
      Dz = gz.version
    } catch (Cz) {
      Dz = "undefined" !== typeof process && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.FA_VERSION || "7.0.0"
    }

    function Hz(zz) {
      var tz = zz.beat,
        sz = zz.fade,
        Fz = zz.beatFade,
        Wz = zz.bounce,
        Xz = zz.shake,
        Oz = zz.flash,
        oz = zz.spin,
        Uz = zz.spinPulse,
        Kz = zz.spinReverse,
        Nz = zz.pulse,
        bz = zz.fixedWidth,
        wz = zz.inverse,
        gz = zz.border,
        Hz = zz.listItem,
        Bz = zz.flip,
        Pz = zz.size,
        rz = zz.rotation,
        Yz = zz.pull,
        xz = zz.swapOpacity,
        mz = zz.rotateBy,
        Jz = zz.widthAuto,
        Iz = function(zz, tz) {
          for (var sz = uz(zz.split("-"), 2), Fz = sz[0], Wz = sz[1], Xz = uz(tz.split("-"), 2), Oz = Xz[0], oz = Xz[1], vz = Fz.split("."), Uz = Oz.split("."), Kz = 0; Kz < Math.max(vz.length, Uz.length); Kz++) {
            var Nz = vz[Kz] || "0",
              bz = Uz[Kz] || "0",
              wz = parseInt(Nz, 10),
              Dz = parseInt(bz, 10);
            if (wz !== Dz) return wz > Dz
          }
          for (var gz = 0; gz < Math.max(vz.length, Uz.length); gz++) {
            var Hz = vz[gz] || "0",
              Bz = Uz[gz] || "0";
            if (Hz !== Bz && Hz.length !== Bz.length) return Hz.length < Bz.length
          }
          return !(Wz && !oz)
        }(Dz, "7.0.0"),
        Cz = vz(vz(vz(vz(vz(vz({
          "fa-beat": tz,
          "fa-fade": sz,
          "fa-beat-fade": Fz,
          "fa-bounce": Wz,
          "fa-shake": Xz,
          "fa-flash": Oz,
          "fa-spin": oz,
          "fa-spin-reverse": Kz,
          "fa-spin-pulse": Uz,
          "fa-pulse": Nz,
          "fa-fw": bz,
          "fa-inverse": wz,
          "fa-border": gz,
          "fa-li": Hz,
          "fa-flip": !0 === Bz,
          "fa-flip-horizontal": "horizontal" === Bz || "both" === Bz,
          "fa-flip-vertical": "vertical" === Bz || "both" === Bz
        }, "fa-".concat(Pz), "undefined" !== typeof Pz && null !== Pz), "fa-rotate-".concat(rz), "undefined" !== typeof rz && null !== rz && 0 !== rz), "fa-pull-".concat(Yz), "undefined" !== typeof Yz && null !== Yz), "fa-swap-opacity", xz), "fa-rotate-by", Iz && mz), "fa-width-auto", Iz && Jz);
      return Object.keys(Cz).map((function(zz) {
        return Cz[zz] ? zz : null
      })).filter((function(zz) {
        return zz
      }))
    }

    function Bz(zz) {
      return tz = zz, (tz -= 0) === tz ? zz : (zz = zz.replace(/[\-_\s]+(.)?/g, (function(zz, tz) {
        return tz ? tz.toUpperCase() : ""
      }))).substr(0, 1).toLowerCase() + zz.substr(1);
      var tz
    }
    var Pz = ["style"];
    var rz = !1;
    try {
      rz = !0
    } catch (Cz) {}

    function Yz(zz) {
      return zz && "object" === bz(zz) && zz.prefix && zz.iconName && zz.icon ? zz : Fz.parse.icon ? Fz.parse.icon(zz) : null === zz ? null : zz && "object" === bz(zz) && zz.prefix && zz.iconName ? zz : Array.isArray(zz) && 2 === zz.length ? {
        prefix: zz[0],
        iconName: zz[1]
      } : "string" === typeof zz ? {
        prefix: "fas",
        iconName: zz
      } : void 0
    }

    function xz(zz, tz) {
      return Array.isArray(tz) && tz.length > 0 || !Array.isArray(tz) && tz ? vz({}, zz, tz) : {}
    }
    var mz = {
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
      Jz = Oz.forwardRef((function(zz, tz) {
        var sz = Kz(Kz({}, mz), zz),
          Wz = sz.icon,
          Xz = sz.mask,
          Oz = sz.symbol,
          oz = sz.className,
          vz = sz.title,
          Uz = sz.titleId,
          uz = sz.maskId,
          bz = Yz(Wz),
          wz = xz("classes", [].concat(Nz(Hz(sz)), Nz((oz || "").split(" ")))),
          Dz = xz("transform", "string" === typeof sz.transform ? Fz.parse.transform(sz.transform) : sz.transform),
          gz = xz("mask", Yz(Xz)),
          Bz = (0, Fz.icon)(bz, Kz(Kz(Kz(Kz({}, wz), Dz), gz), {}, {
            symbol: Oz,
            title: vz,
            titleId: Uz,
            maskId: uz
          }));
        if (!Bz) return function() {
          var zz;
          !rz && console && "function" === typeof console.error && (zz = console).error.apply(zz, arguments)
        }("Could not find icon", bz), null;
        var Pz = Bz.abstract,
          Jz = {
            ref: tz
          };
        return Object.keys(sz).forEach((function(zz) {
          mz.hasOwnProperty(zz) || (Jz[zz] = sz[zz])
        })), Iz(Pz[0], Jz)
      }));
    Jz.displayName = "FontAwesomeIcon", Jz.propTypes = {
      beat: Xz().bool,
      border: Xz().bool,
      beatFade: Xz().bool,
      bounce: Xz().bool,
      className: Xz().string,
      fade: Xz().bool,
      flash: Xz().bool,
      mask: Xz().oneOfType([Xz().object, Xz().array, Xz().string]),
      maskId: Xz().string,
      fixedWidth: Xz().bool,
      inverse: Xz().bool,
      flip: Xz().oneOf([!0, !1, "horizontal", "vertical", "both"]),
      icon: Xz().oneOfType([Xz().object, Xz().array, Xz().string]),
      listItem: Xz().bool,
      pull: Xz().oneOf(["right", "left"]),
      pulse: Xz().bool,
      rotation: Xz().oneOf([0, 90, 180, 270]),
      rotateBy: Xz().bool,
      shake: Xz().bool,
      size: Xz().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
      spin: Xz().bool,
      spinPulse: Xz().bool,
      spinReverse: Xz().bool,
      symbol: Xz().oneOfType([Xz().bool, Xz().string]),
      title: Xz().string,
      titleId: Xz().string,
      transform: Xz().oneOfType([Xz().string, Xz().object]),
      swapOpacity: Xz().bool,
      widthAuto: Xz().bool
    };
    var Iz = function zz(tz, sz) {
      var Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" === typeof sz) return sz;
      var Wz = (sz.children || []).map((function(sz) {
          return zz(tz, sz)
        })),
        Xz = Object.keys(sz.attributes || {}).reduce((function(zz, tz) {
          var Fz = sz.attributes[tz];
          switch (tz) {
            case "class":
              zz.attrs.className = Fz, delete sz.attributes.class;
              break;
            case "style":
              zz.attrs.style = Fz.split(";").map((function(zz) {
                return zz.trim()
              })).filter((function(zz) {
                return zz
              })).reduce((function(zz, tz) {
                var sz, Fz = tz.indexOf(":"),
                  Wz = Bz(tz.slice(0, Fz)),
                  Xz = tz.slice(Fz + 1).trim();
                return Wz.startsWith("webkit") ? zz[(sz = Wz, sz.charAt(0).toUpperCase() + sz.slice(1))] = Xz : zz[Wz] = Xz, zz
              }), {});
              break;
            default:
              0 === tz.indexOf("aria-") || 0 === tz.indexOf("data-") ? zz.attrs[tz.toLowerCase()] = Fz : zz.attrs[Bz(tz)] = Fz
          }
          return zz
        }), {
          attrs: {}
        }),
        Oz = Fz.style,
        oz = void 0 === Oz ? {} : Oz,
        vz = function(zz, tz) {
          if (null == zz) return {};
          var sz, Fz, Wz = function(zz, tz) {
            if (null == zz) return {};
            var sz = {};
            for (var Fz in zz)
              if ({}.hasOwnProperty.call(zz, Fz)) {
                if (-1 !== tz.indexOf(Fz)) continue;
                sz[Fz] = zz[Fz]
              } return sz
          }(zz, tz);
          if (Object.getOwnPropertySymbols) {
            var Xz = Object.getOwnPropertySymbols(zz);
            for (Fz = 0; Fz < Xz.length; Fz++) sz = Xz[Fz], -1 === tz.indexOf(sz) && {}.propertyIsEnumerable.call(zz, sz) && (Wz[sz] = zz[sz])
          }
          return Wz
        }(Fz, Pz);
      return Xz.attrs.style = Kz(Kz({}, Xz.attrs.style), oz), tz.apply(void 0, [sz.tag, Kz(Kz({}, Xz.attrs), vz)].concat(Nz(Wz)))
    }.bind(null, Oz.createElement)
  },
  4589: (zz, tz, sz) => {
    var Fz = sz(4598);

    function Wz() {}

    function Xz() {}
    Xz.resetWarningCache = Wz, zz.exports = function() {
      function zz(zz, tz, sz, Wz, Xz, Oz) {
        if (Oz !== Fz) {
          var oz = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw oz.name = "Invariant Violation", oz
        }
      }

      function tz() {
        return zz
      }
      zz.isRequired = zz;
      var sz = {
        array: zz,
        bigint: zz,
        bool: zz,
        func: zz,
        number: zz,
        object: zz,
        string: zz,
        symbol: zz,
        any: zz,
        arrayOf: tz,
        element: zz,
        elementType: zz,
        instanceOf: tz,
        node: zz,
        objectOf: tz,
        oneOf: tz,
        oneOfType: tz,
        shape: tz,
        exact: tz,
        checkPropTypes: Xz,
        resetWarningCache: Wz
      };
      return sz.PropTypes = sz, sz
    }
  },
  4582: (zz, tz, sz) => {
    zz.exports = sz(4589)()
  },
  4598: zz => {
    zz.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6258: (zz, tz, sz) => {
    function Fz(zz, tz) {
      (null == tz || tz > zz.length) && (tz = zz.length);
      for (var sz = 0, Fz = Array(tz); sz < tz; sz++) Fz[sz] = zz[sz];
      return Fz
    }

    function Wz(zz, tz) {
      for (var sz = 0; sz < tz.length; sz++) {
        var Fz = tz[sz];
        Fz.enumerable = Fz.enumerable || !1, Fz.configurable = !0, "value" in Fz && (Fz.writable = !0), Object.defineProperty(zz, uz(Fz.key), Fz)
      }
    }

    function Xz(zz, tz) {
      var sz = "undefined" != typeof Symbol && zz[Symbol.iterator] || zz["@@iterator"];
      if (!sz) {
        if (Array.isArray(zz) || (sz = bz(zz)) || tz && zz && "number" == typeof zz.length) {
          sz && (zz = sz);
          var Fz = 0,
            Wz = function() {};
          return {
            s: Wz,
            n: function() {
              return Fz >= zz.length ? {
                done: !0
              } : {
                done: !1,
                value: zz[Fz++]
              }
            },
            e: function(zz) {
              throw zz
            },
            f: Wz
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Xz, Oz = !0,
        oz = !1;
      return {
        s: function() {
          sz = sz.call(zz)
        },
        n: function() {
          var zz = sz.next();
          return Oz = zz.done, zz
        },
        e: function(zz) {
          oz = !0, Xz = zz
        },
        f: function() {
          try {
            Oz || null == sz.return || sz.return()
          } finally {
            if (oz) throw Xz
          }
        }
      }
    }

    function Oz(zz, tz, sz) {
      return (tz = uz(tz)) in zz ? Object.defineProperty(zz, tz, {
        value: sz,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : zz[tz] = sz, zz
    }

    function oz(zz, tz) {
      var sz = Object.keys(zz);
      if (Object.getOwnPropertySymbols) {
        var Fz = Object.getOwnPropertySymbols(zz);
        tz && (Fz = Fz.filter((function(tz) {
          return Object.getOwnPropertyDescriptor(zz, tz).enumerable
        }))), sz.push.apply(sz, Fz)
      }
      return sz
    }

    function vz(zz) {
      for (var tz = 1; tz < arguments.length; tz++) {
        var sz = null != arguments[tz] ? arguments[tz] : {};
        tz % 2 ? oz(Object(sz), !0).forEach((function(tz) {
          Oz(zz, tz, sz[tz])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(sz)) : oz(Object(sz)).forEach((function(tz) {
          Object.defineProperty(zz, tz, Object.getOwnPropertyDescriptor(sz, tz))
        }))
      }
      return zz
    }

    function Uz(zz, tz) {
      return function(zz) {
        if (Array.isArray(zz)) return zz
      }(zz) || function(zz, tz) {
        var sz = null == zz ? null : "undefined" != typeof Symbol && zz[Symbol.iterator] || zz["@@iterator"];
        if (null != sz) {
          var Fz, Wz, Xz, Oz, oz = [],
            vz = !0,
            Uz = !1;
          try {
            if (Xz = (sz = sz.call(zz)).next, 0 === tz) {
              if (Object(sz) !== sz) return;
              vz = !1
            } else
              for (; !(vz = (Fz = Xz.call(sz)).done) && (oz.push(Fz.value), oz.length !== tz); vz = !0);
          } catch (zz) {
            Uz = !0, Wz = zz
          } finally {
            try {
              if (!vz && null != sz.return && (Oz = sz.return(), Object(Oz) !== Oz)) return
            } finally {
              if (Uz) throw Wz
            }
          }
          return oz
        }
      }(zz, tz) || bz(zz, tz) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Kz(zz) {
      return function(zz) {
        if (Array.isArray(zz)) return Fz(zz)
      }(zz) || function(zz) {
        if ("undefined" != typeof Symbol && null != zz[Symbol.iterator] || null != zz["@@iterator"]) return Array.from(zz)
      }(zz) || bz(zz) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uz(zz) {
      var tz = function(zz, tz) {
        if ("object" != typeof zz || !zz) return zz;
        var sz = zz[Symbol.toPrimitive];
        if (void 0 !== sz) {
          var Fz = sz.call(zz, tz || "default");
          if ("object" != typeof Fz) return Fz;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === tz ? String : Number)(zz)
      }(zz, "string");
      return "symbol" == typeof tz ? tz : tz + ""
    }

    function Nz(zz) {
      return Nz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(zz) {
        return typeof zz
      } : function(zz) {
        return zz && "function" == typeof Symbol && zz.constructor === Symbol && zz !== Symbol.prototype ? "symbol" : typeof zz
      }, Nz(zz)
    }

    function bz(zz, tz) {
      if (zz) {
        if ("string" == typeof zz) return Fz(zz, tz);
        var sz = {}.toString.call(zz).slice(8, -1);
        return "Object" === sz && zz.constructor && (sz = zz.constructor.name), "Map" === sz || "Set" === sz ? Array.from(zz) : "Arguments" === sz || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(sz) ? Fz(zz, tz) : void 0
      }
    }
    sz.r(tz), sz.d(tz, {
      api: () => Es,
      config: () => XW,
      counter: () => wW,
      dom: () => oW,
      findIconDefinition: () => UW,
      icon: () => uW,
      layer: () => NW,
      library: () => OW,
      noAuto: () => WW,
      parse: () => vW,
      text: () => bW,
      toHtml: () => KW
    });
    var wz = function() {},
      Dz = {},
      gz = {},
      Hz = null,
      Bz = {
        mark: wz,
        measure: wz
      };
    try {
      "undefined" !== typeof window && (Dz = window), "undefined" !== typeof document && (gz = document), "undefined" !== typeof MutationObserver && (Hz = MutationObserver), "undefined" !== typeof performance && (Bz = performance)
    } catch (lz) {}
    var Pz, rz, Yz = (Dz.navigator || {}).userAgent,
      xz = void 0 === Yz ? "" : Yz,
      mz = Dz,
      Jz = gz,
      Iz = Hz,
      Cz = Bz,
      ez = (mz.document, !!Jz.documentElement && !!Jz.head && "function" === typeof Jz.addEventListener && "function" === typeof Jz.createElement),
      Zz = ~xz.indexOf("MSIE") || ~xz.indexOf("Trident/"),
      Gz = {
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
      Tz = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"],
      cz = "classic",
      jz = "duotone",
      Az = "sharp",
      yz = "sharp-duotone",
      Mz = "chisel",
      dz = "etch",
      hz = "graphite",
      Qz = "jelly",
      kz = "jelly-duo",
      iz = "jelly-fill",
      Lz = "notdog",
      lz = "notdog-duo",
      nz = "slab",
      az = "slab-press",
      qz = "thumbprint",
      Sz = "utility",
      Vz = "utility-duo",
      Rz = "utility-fill",
      pz = "whiteboard",
      fz = [cz, jz, Az, yz, Mz, dz, hz, Qz, kz, iz, Lz, lz, nz, az, qz, Sz, Vz, Rz, pz],
      Ez = (Oz(Oz(Oz(Oz(Oz(Oz(Oz(Oz(Oz(Oz(Pz = {}, cz, "Classic"), jz, "Duotone"), Az, "Sharp"), yz, "Sharp Duotone"), Mz, "Chisel"), dz, "Etch"), hz, "Graphite"), Qz, "Jelly"), kz, "Jelly Duo"), iz, "Jelly Fill"), Oz(Oz(Oz(Oz(Oz(Oz(Oz(Oz(Oz(Pz, Lz, "Notdog"), lz, "Notdog Duo"), nz, "Slab"), az, "Slab Press"), qz, "Thumbprint"), Sz, "Utility"), Vz, "Utility Duo"), Rz, "Utility Fill"), pz, "Whiteboard"), new Map([
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
      zt = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
      tt = {
        fak: "kit",
        "fa-kit": "kit"
      },
      st = {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      },
      Ft = (Oz(Oz({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
        kit: "fak"
      }),
      Wt = {
        "kit-duotone": "fakd"
      },
      Xt = "duotone-group",
      Ot = "swap-opacity",
      ot = "primary",
      vt = "secondary",
      Ut = (Oz(Oz(Oz(Oz(Oz(Oz(Oz(Oz(Oz(Oz(rz = {}, "classic", "Classic"), "duotone", "Duotone"), "sharp", "Sharp"), "sharp-duotone", "Sharp Duotone"), "chisel", "Chisel"), "etch", "Etch"), "graphite", "Graphite"), "jelly", "Jelly"), "jelly-duo", "Jelly Duo"), "jelly-fill", "Jelly Fill"), Oz(Oz(Oz(Oz(Oz(Oz(Oz(Oz(Oz(rz, "notdog", "Notdog"), "notdog-duo", "Notdog Duo"), "slab", "Slab"), "slab-press", "Slab Press"), "thumbprint", "Thumbprint"), "utility", "Utility"), "utility-duo", "Utility Duo"), "utility-fill", "Utility Fill"), "whiteboard", "Whiteboard"), Oz(Oz({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"), {
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
      Kt = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"]),
      ut = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      Nt = ut.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      bt = [].concat(Kz(Object.keys({
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
      })), ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], ["aw", "fw", "pull-left", "pull-right"], ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", Xt, Ot, ot, vt]).concat(ut.map((function(zz) {
        return "".concat(zz, "x")
      }))).concat(Nt.map((function(zz) {
        return "w-".concat(zz)
      }))),
      wt = "___FONT_AWESOME___",
      Dt = "svg-inline--fa",
      gt = "data-fa-i2svg",
      Ht = "data-fa-pseudo-element",
      Bt = "data-prefix",
      Pt = "data-icon",
      rt = "fontawesome-i2svg",
      Yt = ["HTML", "HEAD", "STYLE", "SCRIPT"],
      xt = ["::before", "::after", ":before", ":after"],
      mt = function() {
        try {
          return !0
        } catch (zz) {
          return !1
        }
      }();

    function Jt(zz) {
      return new Proxy(zz, {
        get: function(zz, tz) {
          return tz in zz ? zz[tz] : zz[cz]
        }
      })
    }
    var It = vz({}, Gz);
    It[cz] = vz(vz(vz(vz({}, {
      "fa-duotone": "duotone"
    }), Gz[cz]), tt), st);
    var Ct = Jt(It),
      et = vz({}, {
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
    et[cz] = vz(vz(vz(vz({}, {
      duotone: "fad"
    }), et[cz]), Ft), Wt);
    var Zt = Jt(et),
      Gt = vz({}, Ut);
    Gt[cz] = vz(vz({}, Gt[cz]), {
      fak: "fa-kit"
    });
    var Tt = Jt(Gt),
      ct = vz({}, {
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
    ct[cz] = vz(vz({}, ct[cz]), {
      "fa-kit": "fak"
    });
    Jt(ct);
    var jt = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
      At = "fa-layers-text",
      yt = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,
      Mt = (Jt(vz({}, {
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
      dt = {
        GROUP: "duotone-group",
        SWAP_OPACITY: "swap-opacity",
        PRIMARY: "primary",
        SECONDARY: "secondary"
      },
      ht = [].concat(Kz(["kit"]), Kz(bt)),
      Qt = mz.FontAwesomeConfig || {};
    if (Jz && "function" === typeof Jz.querySelector) {
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
        var tz = Uz(zz, 2),
          sz = tz[0],
          Fz = tz[1],
          Wz = function(zz) {
            return "" === zz || "false" !== zz && ("true" === zz || zz)
          }(function(zz) {
            var tz = Jz.querySelector("script[" + zz + "]");
            if (tz) return tz.getAttribute(zz)
          }(sz));
        void 0 !== Wz && null !== Wz && (Qt[Fz] = Wz)
      }))
    }
    var kt = {
      styleDefault: "solid",
      familyDefault: cz,
      cssPrefix: "fa",
      replacementClass: Dt,
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
    Qt.familyPrefix && (Qt.cssPrefix = Qt.familyPrefix);
    var it = vz(vz({}, kt), Qt);
    it.autoReplaceSvg || (it.observeMutations = !1);
    var Lt = {};
    Object.keys(kt).forEach((function(zz) {
      Object.defineProperty(Lt, zz, {
        enumerable: !0,
        set: function(tz) {
          it[zz] = tz, lt.forEach((function(zz) {
            return zz(Lt)
          }))
        },
        get: function() {
          return it[zz]
        }
      })
    })), Object.defineProperty(Lt, "familyPrefix", {
      enumerable: !0,
      set: function(zz) {
        it.cssPrefix = zz, lt.forEach((function(zz) {
          return zz(Lt)
        }))
      },
      get: function() {
        return it.cssPrefix
      }
    }), mz.FontAwesomeConfig = Lt;
    var lt = [];
    var nt = 16,
      qt = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: !1,
        flipY: !1
      };

    function St() {
      for (var zz = 12, tz = ""; zz-- > 0;) tz += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
      return tz
    }

    function Vt(zz) {
      for (var tz = [], sz = (zz || []).length >>> 0; sz--;) tz[sz] = zz[sz];
      return tz
    }

    function Rt(zz) {
      return zz.classList ? Vt(zz.classList) : (zz.getAttribute("class") || "").split(" ").filter((function(zz) {
        return zz
      }))
    }

    function pt(zz) {
      return "".concat(zz).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function ft(zz) {
      return Object.keys(zz || {}).reduce((function(tz, sz) {
        return tz + "".concat(sz, ": ").concat(zz[sz].trim(), ";")
      }), "")
    }

    function Et(zz) {
      return zz.size !== qt.size || zz.x !== qt.x || zz.y !== qt.y || zz.rotate !== qt.rotate || zz.flipX || zz.flipY
    }

    function zs() {
      var zz = "fa",
        tz = Dt,
        sz = Lt.cssPrefix,
        Fz = Lt.replacementClass,
        Wz = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";
      if (sz !== zz || Fz !== tz) {
        var Xz = new RegExp("\\.".concat(zz, "\\-"), "g"),
          Oz = new RegExp("\\--".concat(zz, "\\-"), "g"),
          oz = new RegExp("\\.".concat(tz), "g");
        Wz = Wz.replace(Xz, ".".concat(sz, "-")).replace(Oz, "--".concat(sz, "-")).replace(oz, ".".concat(Fz))
      }
      return Wz
    }
    var ts = !1;

    function ss() {
      Lt.autoAddCss && !ts && (! function(zz) {
        if (zz && ez) {
          var tz = Jz.createElement("style");
          tz.setAttribute("type", "text/css"), tz.innerHTML = zz;
          for (var sz = Jz.head.childNodes, Fz = null, Wz = sz.length - 1; Wz > -1; Wz--) {
            var Xz = sz[Wz],
              Oz = (Xz.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(Oz) > -1 && (Fz = Xz)
          }
          Jz.head.insertBefore(tz, Fz)
        }
      }(zs()), ts = !0)
    }
    var Fs = {
        mixout: function() {
          return {
            dom: {
              css: zs,
              insertCss: ss
            }
          }
        },
        hooks: function() {
          return {
            beforeDOMElementCreation: function() {
              ss()
            },
            beforeI2svg: function() {
              ss()
            }
          }
        }
      },
      Ws = mz || {};
    Ws[wt] || (Ws[wt] = {}), Ws[wt].styles || (Ws[wt].styles = {}), Ws[wt].hooks || (Ws[wt].hooks = {}), Ws[wt].shims || (Ws[wt].shims = []);
    var Xs = Ws[wt],
      Os = [],
      os = function() {
        Jz.removeEventListener("DOMContentLoaded", os), vs = 1, Os.map((function(zz) {
          return zz()
        }))
      },
      vs = !1;

    function Us(zz) {
      var tz = zz.tag,
        sz = zz.attributes,
        Fz = void 0 === sz ? {} : sz,
        Wz = zz.children,
        Xz = void 0 === Wz ? [] : Wz;
      return "string" === typeof zz ? pt(zz) : "<".concat(tz, " ").concat(function(zz) {
        return Object.keys(zz || {}).reduce((function(tz, sz) {
          return tz + "".concat(sz, '="').concat(pt(zz[sz]), '" ')
        }), "").trim()
      }(Fz), ">").concat(Xz.map(Us).join(""), "</").concat(tz, ">")
    }

    function Ks(zz, tz, sz) {
      if (zz && zz[tz] && zz[tz][sz]) return {
        prefix: tz,
        iconName: sz,
        icon: zz[tz][sz]
      }
    }
    ez && ((vs = (Jz.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Jz.readyState)) || Jz.addEventListener("DOMContentLoaded", os));
    var us = function(zz, tz, sz, Fz) {
      var Wz, Xz, Oz, oz = Object.keys(zz),
        vz = oz.length,
        Uz = void 0 !== Fz ? function(zz, tz) {
          return function(sz, Fz, Wz, Xz) {
            return zz.call(tz, sz, Fz, Wz, Xz)
          }
        }(tz, Fz) : tz;
      for (void 0 === sz ? (Wz = 1, Oz = zz[oz[0]]) : (Wz = 0, Oz = sz); Wz < vz; Wz++) Oz = Uz(Oz, zz[Xz = oz[Wz]], Xz, zz);
      return Oz
    };

    function Ns(zz) {
      return 1 !== Kz(zz).length ? null : zz.codePointAt(0).toString(16)
    }

    function bs(zz) {
      return Object.keys(zz).reduce((function(tz, sz) {
        var Fz = zz[sz];
        return !!Fz.icon ? tz[Fz.iconName] = Fz.icon : tz[sz] = Fz, tz
      }), {})
    }

    function ws(zz, tz) {
      var sz = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
        Fz = void 0 !== sz && sz,
        Wz = bs(tz);
      "function" !== typeof Xs.hooks.addPack || Fz ? Xs.styles[zz] = vz(vz({}, Xs.styles[zz] || {}), Wz) : Xs.hooks.addPack(zz, bs(tz)), "fas" === zz && ws("fa", tz)
    }
    var Ds = Xs.styles,
      gs = Xs.shims,
      Hs = Object.keys(Tt),
      Bs = Hs.reduce((function(zz, tz) {
        return zz[tz] = Object.keys(Tt[tz]), zz
      }), {}),
      Ps = null,
      rs = {},
      Ys = {},
      xs = {},
      ms = {},
      Is = {};

    function Cs(zz, tz) {
      var sz, Fz = tz.split("-"),
        Wz = Fz[0],
        Xz = Fz.slice(1).join("-");
      return Wz !== zz || "" === Xz || (sz = Xz, ~ht.indexOf(sz)) ? null : Xz
    }
    var es, Zs = function() {
      var zz = function(zz) {
        return us(Ds, (function(tz, sz, Fz) {
          return tz[Fz] = us(sz, zz, {}), tz
        }), {})
      };
      rs = zz((function(zz, tz, sz) {
        (tz[3] && (zz[tz[3]] = sz), tz[2]) && tz[2].filter((function(zz) {
          return "number" === typeof zz
        })).forEach((function(tz) {
          zz[tz.toString(16)] = sz
        }));
        return zz
      })), Ys = zz((function(zz, tz, sz) {
        (zz[sz] = sz, tz[2]) && tz[2].filter((function(zz) {
          return "string" === typeof zz
        })).forEach((function(tz) {
          zz[tz] = sz
        }));
        return zz
      })), Is = zz((function(zz, tz, sz) {
        var Fz = tz[2];
        return zz[sz] = sz, Fz.forEach((function(tz) {
          zz[tz] = sz
        })), zz
      }));
      var tz = "far" in Ds || Lt.autoFetchSvg,
        sz = us(gs, (function(zz, sz) {
          var Fz = sz[0],
            Wz = sz[1],
            Xz = sz[2];
          return "far" !== Wz || tz || (Wz = "fas"), "string" === typeof Fz && (zz.names[Fz] = {
            prefix: Wz,
            iconName: Xz
          }), "number" === typeof Fz && (zz.unicodes[Fz.toString(16)] = {
            prefix: Wz,
            iconName: Xz
          }), zz
        }), {
          names: {},
          unicodes: {}
        });
      xs = sz.names, ms = sz.unicodes, Ps = ys(Lt.styleDefault, {
        family: Lt.familyDefault
      })
    };

    function Gs(zz, tz) {
      return (rs[zz] || {})[tz]
    }

    function Ts(zz, tz) {
      return (Is[zz] || {})[tz]
    }

    function cs(zz) {
      return xs[zz] || {
        prefix: null,
        iconName: null
      }
    }

    function As() {
      return Ps
    }
    es = function(zz) {
      Ps = ys(zz.styleDefault, {
        family: Lt.familyDefault
      })
    }, lt.push(es), Zs();

    function ys(zz) {
      var tz = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).family,
        sz = void 0 === tz ? cz : tz,
        Fz = Ct[sz][zz];
      if (sz === jz && !zz) return "fad";
      var Wz = Zt[sz][zz] || Zt[sz][Fz],
        Xz = zz in Xs.styles ? zz : null;
      return Wz || Xz || null
    }

    function Ms(zz) {
      return zz.sort().filter((function(zz, tz, sz) {
        return sz.indexOf(zz) === tz
      }))
    }
    var ds = Kt.concat(zt);

    function hs(zz) {
      var tz = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).skipLookups,
        sz = void 0 !== tz && tz,
        Fz = null,
        Wz = Ms(zz.filter((function(zz) {
          return ds.includes(zz)
        }))),
        Xz = Ms(zz.filter((function(zz) {
          return !ds.includes(zz)
        }))),
        Oz = Uz(Wz.filter((function(zz) {
          return Fz = zz, !Tz.includes(zz)
        })), 1)[0],
        oz = void 0 === Oz ? null : Oz,
        Kz = function(zz) {
          var tz = cz,
            sz = Hs.reduce((function(zz, tz) {
              return zz[tz] = "".concat(Lt.cssPrefix, "-").concat(tz), zz
            }), {});
          return fz.forEach((function(Fz) {
            (zz.includes(sz[Fz]) || zz.some((function(zz) {
              return Bs[Fz].includes(zz)
            }))) && (tz = Fz)
          })), tz
        }(Wz),
        uz = vz(vz({}, function(zz) {
          var tz = [],
            sz = null;
          return zz.forEach((function(zz) {
            var Fz = Cs(Lt.cssPrefix, zz);
            Fz ? sz = Fz : zz && tz.push(zz)
          })), {
            iconName: sz,
            rest: tz
          }
        }(Xz)), {}, {
          prefix: ys(oz, {
            family: Kz
          })
        });
      return vz(vz(vz({}, uz), function(zz) {
        var tz = zz.values,
          sz = zz.family,
          Fz = zz.canonical,
          Wz = zz.givenPrefix,
          Xz = void 0 === Wz ? "" : Wz,
          Oz = zz.styles,
          oz = void 0 === Oz ? {} : Oz,
          vz = zz.config,
          Uz = void 0 === vz ? {} : vz,
          Kz = sz === jz,
          uz = tz.includes("fa-duotone") || tz.includes("fad"),
          Nz = "duotone" === Uz.familyDefault,
          bz = "fad" === Fz.prefix || "fa-duotone" === Fz.prefix;
        !Kz && (uz || Nz || bz) && (Fz.prefix = "fad");
        (tz.includes("fa-brands") || tz.includes("fab")) && (Fz.prefix = "fab");
        if (!Fz.prefix && Qs.includes(sz)) {
          if (Object.keys(oz).find((function(zz) {
              return ks.includes(zz)
            })) || Uz.autoFetchSvg) {
            var wz = Ez.get(sz).defaultShortPrefixId;
            Fz.prefix = wz, Fz.iconName = Ts(Fz.prefix, Fz.iconName) || Fz.iconName
          }
        }
        "fa" !== Fz.prefix && "fa" !== Xz || (Fz.prefix = As() || "fas");
        return Fz
      }({
        values: zz,
        family: Kz,
        styles: Ds,
        config: Lt,
        canonical: uz,
        givenPrefix: Fz
      })), function(zz, tz, sz) {
        var Fz = sz.prefix,
          Wz = sz.iconName;
        if (zz || !Fz || !Wz) return {
          prefix: Fz,
          iconName: Wz
        };
        var Xz = "fa" === tz ? cs(Wz) : {},
          Oz = Ts(Fz, Wz);
        Wz = Xz.iconName || Oz || Wz, "far" !== (Fz = Xz.prefix || Fz) || Ds.far || !Ds.fas || Lt.autoFetchSvg || (Fz = "fas");
        return {
          prefix: Fz,
          iconName: Wz
        }
      }(sz, Fz, uz))
    }
    var Qs = fz.filter((function(zz) {
        return zz !== cz || zz !== jz
      })),
      ks = Object.keys(Ut).filter((function(zz) {
        return zz !== cz
      })).map((function(zz) {
        return Object.keys(Ut[zz])
      })).flat();
    var is = function() {
        return function(zz, tz, sz) {
          return tz && Wz(zz.prototype, tz), sz && Wz(zz, sz), Object.defineProperty(zz, "prototype", {
            writable: !1
          }), zz
        }((function zz() {
          ! function(zz, tz) {
            if (!(zz instanceof tz)) throw new TypeError("Cannot call a class as a function")
          }(this, zz), this.definitions = {}
        }), [{
          key: "add",
          value: function() {
            for (var zz = this, tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
            var Wz = sz.reduce(this._pullDefinitions, {});
            Object.keys(Wz).forEach((function(tz) {
              zz.definitions[tz] = vz(vz({}, zz.definitions[tz] || {}), Wz[tz]), ws(tz, Wz[tz]);
              var sz = Tt[cz][tz];
              sz && ws(sz, Wz[tz]), Zs()
            }))
          }
        }, {
          key: "reset",
          value: function() {
            this.definitions = {}
          }
        }, {
          key: "_pullDefinitions",
          value: function(zz, tz) {
            var sz = tz.prefix && tz.iconName && tz.icon ? {
              0: tz
            } : tz;
            return Object.keys(sz).map((function(tz) {
              var Fz = sz[tz],
                Wz = Fz.prefix,
                Xz = Fz.iconName,
                Oz = Fz.icon,
                oz = Oz[2];
              zz[Wz] || (zz[Wz] = {}), oz.length > 0 && oz.forEach((function(tz) {
                "string" === typeof tz && (zz[Wz][tz] = Oz)
              })), zz[Wz][Xz] = Oz
            })), zz
          }
        }])
      }(),
      Ls = [],
      ls = {},
      ns = {},
      as = Object.keys(ns);

    function qs(zz, tz) {
      for (var sz = arguments.length, Fz = new Array(sz > 2 ? sz - 2 : 0), Wz = 2; Wz < sz; Wz++) Fz[Wz - 2] = arguments[Wz];
      return (ls[zz] || []).forEach((function(zz) {
        tz = zz.apply(null, [tz].concat(Fz))
      })), tz
    }

    function Ss(zz) {
      for (var tz = arguments.length, sz = new Array(tz > 1 ? tz - 1 : 0), Fz = 1; Fz < tz; Fz++) sz[Fz - 1] = arguments[Fz];
      (ls[zz] || []).forEach((function(zz) {
        zz.apply(null, sz)
      }))
    }

    function Vs() {
      var zz = arguments[0],
        tz = Array.prototype.slice.call(arguments, 1);
      return ns[zz] ? ns[zz].apply(null, tz) : void 0
    }

    function Rs(zz) {
      "fa" === zz.prefix && (zz.prefix = "fas");
      var tz = zz.iconName,
        sz = zz.prefix || As();
      if (tz) return tz = Ts(sz, tz) || tz, Ks(ps.definitions, sz, tz) || Ks(Xs.styles, sz, tz)
    }
    var ps = new is,
      fs = {
        i2svg: function() {
          var zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ez ? (Ss("beforeI2svg", zz), Vs("pseudoElements2svg", zz), Vs("i2svg", zz)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
        },
        watch: function() {
          var zz, tz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            sz = tz.autoReplaceSvgRoot;
          !1 === Lt.autoReplaceSvg && (Lt.autoReplaceSvg = !0), Lt.observeMutations = !0, zz = function() {
            zF({
              autoReplaceSvgRoot: sz
            }), Ss("watch", tz)
          }, ez && (vs ? setTimeout(zz, 0) : Os.push(zz))
        }
      },
      Es = {
        noAuto: function() {
          Lt.autoReplaceSvg = !1, Lt.observeMutations = !1, Ss("noAuto")
        },
        config: Lt,
        dom: fs,
        parse: {
          icon: function(zz) {
            if (null === zz) return null;
            if ("object" === Nz(zz) && zz.prefix && zz.iconName) return {
              prefix: zz.prefix,
              iconName: Ts(zz.prefix, zz.iconName) || zz.iconName
            };
            if (Array.isArray(zz) && 2 === zz.length) {
              var tz = 0 === zz[1].indexOf("fa-") ? zz[1].slice(3) : zz[1],
                sz = ys(zz[0]);
              return {
                prefix: sz,
                iconName: Ts(sz, tz) || tz
              }
            }
            if ("string" === typeof zz && (zz.indexOf("".concat(Lt.cssPrefix, "-")) > -1 || zz.match(jt))) {
              var Fz = hs(zz.split(" "), {
                skipLookups: !0
              });
              return {
                prefix: Fz.prefix || As(),
                iconName: Ts(Fz.prefix, Fz.iconName) || Fz.iconName
              }
            }
            if ("string" === typeof zz) {
              var Wz = As();
              return {
                prefix: Wz,
                iconName: Ts(Wz, zz) || zz
              }
            }
          }
        },
        library: ps,
        findIconDefinition: Rs,
        toHtml: Us
      },
      zF = function() {
        var zz = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
          tz = void 0 === zz ? Jz : zz;
        (Object.keys(Xs.styles).length > 0 || Lt.autoFetchSvg) && ez && Lt.autoReplaceSvg && Es.dom.i2svg({
          node: tz
        })
      };

    function tF(zz, tz) {
      return Object.defineProperty(zz, "abstract", {
        get: tz
      }), Object.defineProperty(zz, "html", {
        get: function() {
          return zz.abstract.map((function(zz) {
            return Us(zz)
          }))
        }
      }), Object.defineProperty(zz, "node", {
        get: function() {
          if (ez) {
            var tz = Jz.createElement("div");
            return tz.innerHTML = zz.html, tz.children
          }
        }
      }), zz
    }

    function sF(zz) {
      var tz = zz.icons,
        sz = tz.main,
        Fz = tz.mask,
        Wz = zz.prefix,
        Xz = zz.iconName,
        Oz = zz.transform,
        oz = zz.symbol,
        Uz = zz.maskId,
        Kz = zz.extra,
        uz = zz.watchable,
        Nz = void 0 !== uz && uz,
        bz = Fz.found ? Fz : sz,
        wz = bz.width,
        Dz = bz.height,
        gz = [Lt.replacementClass, Xz ? "".concat(Lt.cssPrefix, "-").concat(Xz) : ""].filter((function(zz) {
          return -1 === Kz.classes.indexOf(zz)
        })).filter((function(zz) {
          return "" !== zz || !!zz
        })).concat(Kz.classes).join(" "),
        Hz = {
          children: [],
          attributes: vz(vz({}, Kz.attributes), {}, {
            "data-prefix": Wz,
            "data-icon": Xz,
            class: gz,
            role: Kz.attributes.role || "img",
            viewBox: "0 0 ".concat(wz, " ").concat(Dz)
          })
        };
      (function(zz) {
        return ["aria-label", "aria-labelledby", "title", "role"].some((function(tz) {
          return tz in zz
        }))
      })(Kz.attributes) || Kz.attributes["aria-hidden"] || (Hz.attributes["aria-hidden"] = "true"), Nz && (Hz.attributes[gt] = "");
      var Bz = vz(vz({}, Hz), {}, {
          prefix: Wz,
          iconName: Xz,
          main: sz,
          mask: Fz,
          maskId: Uz,
          transform: Oz,
          symbol: oz,
          styles: vz({}, Kz.styles)
        }),
        Pz = Fz.found && sz.found ? Vs("generateAbstractMask", Bz) || {
          children: [],
          attributes: {}
        } : Vs("generateAbstractIcon", Bz) || {
          children: [],
          attributes: {}
        },
        rz = Pz.children,
        Yz = Pz.attributes;
      return Bz.children = rz, Bz.attributes = Yz, oz ? function(zz) {
        var tz = zz.prefix,
          sz = zz.iconName,
          Fz = zz.children,
          Wz = zz.attributes,
          Xz = zz.symbol,
          Oz = !0 === Xz ? "".concat(tz, "-").concat(Lt.cssPrefix, "-").concat(sz) : Xz;
        return [{
          tag: "svg",
          attributes: {
            style: "display: none;"
          },
          children: [{
            tag: "symbol",
            attributes: vz(vz({}, Wz), {}, {
              id: Oz
            }),
            children: Fz
          }]
        }]
      }(Bz) : function(zz) {
        var tz = zz.children,
          sz = zz.main,
          Fz = zz.mask,
          Wz = zz.attributes,
          Xz = zz.styles,
          Oz = zz.transform;
        if (Et(Oz) && sz.found && !Fz.found) {
          var oz = {
            x: sz.width / sz.height / 2,
            y: .5
          };
          Wz.style = ft(vz(vz({}, Xz), {}, {
            "transform-origin": "".concat(oz.x + Oz.x / 16, "em ").concat(oz.y + Oz.y / 16, "em")
          }))
        }
        return [{
          tag: "svg",
          attributes: Wz,
          children: tz
        }]
      }(Bz)
    }

    function FF(zz) {
      var tz = zz.content,
        sz = zz.width,
        Fz = zz.height,
        Wz = zz.transform,
        Xz = zz.extra,
        Oz = zz.watchable,
        oz = void 0 !== Oz && Oz,
        Uz = vz(vz({}, Xz.attributes), {}, {
          class: Xz.classes.join(" ")
        });
      oz && (Uz[gt] = "");
      var Kz = vz({}, Xz.styles);
      Et(Wz) && (Kz.transform = function(zz) {
        var tz = zz.transform,
          sz = zz.width,
          Fz = void 0 === sz ? 16 : sz,
          Wz = zz.height,
          Xz = void 0 === Wz ? 16 : Wz,
          Oz = zz.startCentered,
          oz = void 0 !== Oz && Oz,
          vz = "";
        return vz += oz && Zz ? "translate(".concat(tz.x / nt - Fz / 2, "em, ").concat(tz.y / nt - Xz / 2, "em) ") : oz ? "translate(calc(-50% + ".concat(tz.x / nt, "em), calc(-50% + ").concat(tz.y / nt, "em)) ") : "translate(".concat(tz.x / nt, "em, ").concat(tz.y / nt, "em) "), vz += "scale(".concat(tz.size / nt * (tz.flipX ? -1 : 1), ", ").concat(tz.size / nt * (tz.flipY ? -1 : 1), ") "), vz + "rotate(".concat(tz.rotate, "deg) ")
      }({
        transform: Wz,
        startCentered: !0,
        width: sz,
        height: Fz
      }), Kz["-webkit-transform"] = Kz.transform);
      var uz = ft(Kz);
      uz.length > 0 && (Uz.style = uz);
      var Nz = [];
      return Nz.push({
        tag: "span",
        attributes: Uz,
        children: [tz]
      }), Nz
    }
    var WF = Xs.styles;

    function XF(zz) {
      var tz = zz[0],
        sz = zz[1],
        Fz = Uz(zz.slice(4), 1)[0];
      return {
        found: !0,
        width: tz,
        height: sz,
        icon: Array.isArray(Fz) ? {
          tag: "g",
          attributes: {
            class: "".concat(Lt.cssPrefix, "-").concat(dt.GROUP)
          },
          children: [{
            tag: "path",
            attributes: {
              class: "".concat(Lt.cssPrefix, "-").concat(dt.SECONDARY),
              fill: "currentColor",
              d: Fz[0]
            }
          }, {
            tag: "path",
            attributes: {
              class: "".concat(Lt.cssPrefix, "-").concat(dt.PRIMARY),
              fill: "currentColor",
              d: Fz[1]
            }
          }]
        } : {
          tag: "path",
          attributes: {
            fill: "currentColor",
            d: Fz
          }
        }
      }
    }
    var OF = {
      found: !1,
      width: 512,
      height: 512
    };

    function oF(zz, tz) {
      var sz = tz;
      return "fa" === tz && null !== Lt.styleDefault && (tz = As()), new Promise((function(Fz, Wz) {
        if ("fa" === sz) {
          var Xz = cs(zz) || {};
          zz = Xz.iconName || zz, tz = Xz.prefix || tz
        }
        if (zz && tz && WF[tz] && WF[tz][zz]) return Fz(XF(WF[tz][zz]));
        ! function(zz, tz) {
          mt || Lt.showMissingIcons || !zz || console.error('Icon with name "'.concat(zz, '" and prefix "').concat(tz, '" is missing.'))
        }(zz, tz), Fz(vz(vz({}, OF), {}, {
          icon: Lt.showMissingIcons && zz && Vs("missingIconAbstract") || {}
        }))
      }))
    }
    var vF = function() {},
      UF = Lt.measurePerformance && Cz && Cz.mark && Cz.measure ? Cz : {
        mark: vF,
        measure: vF
      },
      KF = 'FA "7.2.0"',
      uF = function(zz) {
        UF.mark("".concat(KF, " ").concat(zz, " ends")), UF.measure("".concat(KF, " ").concat(zz), "".concat(KF, " ").concat(zz, " begins"), "".concat(KF, " ").concat(zz, " ends"))
      },
      NF = function(zz) {
        return UF.mark("".concat(KF, " ").concat(zz, " begins")),
          function() {
            return uF(zz)
          }
      },
      bF = function() {};

    function wF(zz) {
      return "string" === typeof(zz.getAttribute ? zz.getAttribute(gt) : null)
    }

    function DF(zz) {
      return Jz.createElementNS("http://www.w3.org/2000/svg", zz)
    }

    function gF(zz) {
      return Jz.createElement(zz)
    }

    function HF(zz) {
      var tz = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).ceFn,
        sz = void 0 === tz ? "svg" === zz.tag ? DF : gF : tz;
      if ("string" === typeof zz) return Jz.createTextNode(zz);
      var Fz = sz(zz.tag);
      return Object.keys(zz.attributes || []).forEach((function(tz) {
        Fz.setAttribute(tz, zz.attributes[tz])
      })), (zz.children || []).forEach((function(zz) {
        Fz.appendChild(HF(zz, {
          ceFn: sz
        }))
      })), Fz
    }
    var BF = {
      replace: function(zz) {
        var tz = zz[0];
        if (tz.parentNode)
          if (zz[1].forEach((function(zz) {
              tz.parentNode.insertBefore(HF(zz), tz)
            })), null === tz.getAttribute(gt) && Lt.keepOriginalSource) {
            var sz = Jz.createComment(function(zz) {
              var tz = " ".concat(zz.outerHTML, " ");
              return "".concat(tz, "Font Awesome fontawesome.com ")
            }(tz));
            tz.parentNode.replaceChild(sz, tz)
          } else tz.remove()
      },
      nest: function(zz) {
        var tz = zz[0],
          sz = zz[1];
        if (~Rt(tz).indexOf(Lt.replacementClass)) return BF.replace(zz);
        var Fz = new RegExp("".concat(Lt.cssPrefix, "-.*"));
        if (delete sz[0].attributes.id, sz[0].attributes.class) {
          var Wz = sz[0].attributes.class.split(" ").reduce((function(zz, tz) {
            return tz === Lt.replacementClass || tz.match(Fz) ? zz.toSvg.push(tz) : zz.toNode.push(tz), zz
          }), {
            toNode: [],
            toSvg: []
          });
          sz[0].attributes.class = Wz.toSvg.join(" "), 0 === Wz.toNode.length ? tz.removeAttribute("class") : tz.setAttribute("class", Wz.toNode.join(" "))
        }
        var Xz = sz.map((function(zz) {
          return Us(zz)
        })).join("\n");
        tz.setAttribute(gt, ""), tz.innerHTML = Xz
      }
    };

    function PF(zz) {
      zz()
    }

    function rF(zz, tz) {
      var sz = "function" === typeof tz ? tz : bF;
      if (0 === zz.length) sz();
      else {
        var Fz = PF;
        "async" === Lt.mutateApproach && (Fz = mz.requestAnimationFrame || PF), Fz((function() {
          var tz = !0 === Lt.autoReplaceSvg ? BF.replace : BF[Lt.autoReplaceSvg] || BF.replace,
            Fz = NF("mutate");
          zz.map(tz), Fz(), sz()
        }))
      }
    }
    var YF = !1;

    function xF() {
      YF = !0
    }

    function mF() {
      YF = !1
    }
    var JF = null;

    function IF(zz) {
      if (Iz && Lt.observeMutations) {
        var tz = zz.treeCallback,
          sz = void 0 === tz ? bF : tz,
          Fz = zz.nodeCallback,
          Wz = void 0 === Fz ? bF : Fz,
          Xz = zz.pseudoElementsCallback,
          Oz = void 0 === Xz ? bF : Xz,
          oz = zz.observeMutationsRoot,
          vz = void 0 === oz ? Jz : oz;
        JF = new Iz((function(zz) {
          if (!YF) {
            var tz = As();
            Vt(zz).forEach((function(zz) {
              if ("childList" === zz.type && zz.addedNodes.length > 0 && !wF(zz.addedNodes[0]) && (Lt.searchPseudoElements && Oz(zz.target), sz(zz.target)), "attributes" === zz.type && zz.target.parentNode && Lt.searchPseudoElements && Oz([zz.target], !0), "attributes" === zz.type && wF(zz.target) && ~Mt.indexOf(zz.attributeName))
                if ("class" === zz.attributeName && function(zz) {
                    var tz = zz.getAttribute ? zz.getAttribute(Bt) : null,
                      sz = zz.getAttribute ? zz.getAttribute(Pt) : null;
                    return tz && sz
                  }(zz.target)) {
                  var Fz = hs(Rt(zz.target)),
                    Xz = Fz.prefix,
                    oz = Fz.iconName;
                  zz.target.setAttribute(Bt, Xz || tz), oz && zz.target.setAttribute(Pt, oz)
                } else(vz = zz.target) && vz.classList && vz.classList.contains && vz.classList.contains(Lt.replacementClass) && Wz(zz.target);
              var vz
            }))
          }
        })), ez && JF.observe(vz, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0
        })
      }
    }

    function CF(zz) {
      var tz, sz, Fz = zz.getAttribute("data-prefix"),
        Wz = zz.getAttribute("data-icon"),
        Xz = void 0 !== zz.innerText ? zz.innerText.trim() : "",
        Oz = hs(Rt(zz));
      return Oz.prefix || (Oz.prefix = As()), Fz && Wz && (Oz.prefix = Fz, Oz.iconName = Wz), Oz.iconName && Oz.prefix || (Oz.prefix && Xz.length > 0 && (Oz.iconName = (tz = Oz.prefix, sz = zz.innerText, (Ys[tz] || {})[sz] || Gs(Oz.prefix, Ns(zz.innerText)))), !Oz.iconName && Lt.autoFetchSvg && zz.firstChild && zz.firstChild.nodeType === Node.TEXT_NODE && (Oz.iconName = zz.firstChild.data)), Oz
    }

    function eF(zz) {
      var tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          styleParser: !0
        },
        sz = CF(zz),
        Fz = sz.iconName,
        Wz = sz.prefix,
        Xz = sz.rest,
        Oz = function(zz) {
          return Vt(zz.attributes).reduce((function(zz, tz) {
            return "class" !== zz.name && "style" !== zz.name && (zz[tz.name] = tz.value), zz
          }), {})
        }(zz),
        oz = qs("parseNodeAttributes", {}, zz),
        Uz = tz.styleParser ? function(zz) {
          var tz = zz.getAttribute("style"),
            sz = [];
          return tz && (sz = tz.split(";").reduce((function(zz, tz) {
            var sz = tz.split(":"),
              Fz = sz[0],
              Wz = sz.slice(1);
            return Fz && Wz.length > 0 && (zz[Fz] = Wz.join(":").trim()), zz
          }), {})), sz
        }(zz) : [];
      return vz({
        iconName: Fz,
        prefix: Wz,
        transform: qt,
        mask: {
          iconName: null,
          prefix: null,
          rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
          classes: Xz,
          styles: Uz,
          attributes: Oz
        }
      }, oz)
    }
    var ZF = Xs.styles;

    function GF(zz) {
      var tz = "nest" === Lt.autoReplaceSvg ? eF(zz, {
        styleParser: !1
      }) : eF(zz);
      return ~tz.extra.classes.indexOf(At) ? Vs("generateLayersText", zz, tz) : Vs("generateSvgReplacementMutation", zz, tz)
    }

    function TF(zz) {
      var tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (!ez) return Promise.resolve();
      var sz = Jz.documentElement.classList,
        Fz = function(zz) {
          return sz.add("".concat(rt, "-").concat(zz))
        },
        Wz = function(zz) {
          return sz.remove("".concat(rt, "-").concat(zz))
        },
        Xz = Lt.autoFetchSvg ? [].concat(Kz(zt), Kz(Kt)) : Tz.concat(Object.keys(ZF));
      Xz.includes("fa") || Xz.push("fa");
      var Oz = [".".concat(At, ":not([").concat(gt, "])")].concat(Xz.map((function(zz) {
        return ".".concat(zz, ":not([").concat(gt, "])")
      }))).join(", ");
      if (0 === Oz.length) return Promise.resolve();
      var oz = [];
      try {
        oz = Vt(zz.querySelectorAll(Oz))
      } catch (uz) {}
      if (!(oz.length > 0)) return Promise.resolve();
      Fz("pending"), Wz("complete");
      var vz = NF("onTree"),
        Uz = oz.reduce((function(zz, tz) {
          try {
            var sz = GF(tz);
            sz && zz.push(sz)
          } catch (uz) {
            mt || "MissingIcon" === uz.name && console.error(uz)
          }
          return zz
        }), []);
      return new Promise((function(zz, sz) {
        Promise.all(Uz).then((function(sz) {
          rF(sz, (function() {
            Fz("active"), Fz("complete"), Wz("pending"), "function" === typeof tz && tz(), vz(), zz()
          }))
        })).catch((function(zz) {
          vz(), sz(zz)
        }))
      }))
    }

    function cF(zz) {
      var tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      GF(zz).then((function(zz) {
        zz && rF([zz], tz)
      }))
    }
    var jF = function(zz) {
        var tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          sz = tz.transform,
          Fz = void 0 === sz ? qt : sz,
          Wz = tz.symbol,
          Xz = void 0 !== Wz && Wz,
          Oz = tz.mask,
          oz = void 0 === Oz ? null : Oz,
          Uz = tz.maskId,
          Kz = void 0 === Uz ? null : Uz,
          uz = tz.classes,
          Nz = void 0 === uz ? [] : uz,
          bz = tz.attributes,
          wz = void 0 === bz ? {} : bz,
          Dz = tz.styles,
          gz = void 0 === Dz ? {} : Dz;
        if (zz) {
          var Hz = zz.prefix,
            Bz = zz.iconName,
            Pz = zz.icon;
          return tF(vz({
            type: "icon"
          }, zz), (function() {
            return Ss("beforeDOMElementCreation", {
              iconDefinition: zz,
              params: tz
            }), sF({
              icons: {
                main: XF(Pz),
                mask: oz ? XF(oz.icon) : {
                  found: !1,
                  width: null,
                  height: null,
                  icon: {}
                }
              },
              prefix: Hz,
              iconName: Bz,
              transform: vz(vz({}, qt), Fz),
              symbol: Xz,
              maskId: Kz,
              extra: {
                attributes: wz,
                styles: gz,
                classes: Nz
              }
            })
          }))
        }
      },
      AF = {
        mixout: function() {
          return {
            icon: (zz = jF, function(tz) {
              var sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                Fz = (tz || {}).icon ? tz : Rs(tz || {}),
                Wz = sz.mask;
              return Wz && (Wz = (Wz || {}).icon ? Wz : Rs(Wz || {})), zz(Fz, vz(vz({}, sz), {}, {
                mask: Wz
              }))
            })
          };
          var zz
        },
        hooks: function() {
          return {
            mutationObserverCallbacks: function(zz) {
              return zz.treeCallback = TF, zz.nodeCallback = cF, zz
            }
          }
        },
        provides: function(zz) {
          zz.i2svg = function(zz) {
            var tz = zz.node,
              sz = void 0 === tz ? Jz : tz,
              Fz = zz.callback;
            return TF(sz, void 0 === Fz ? function() {} : Fz)
          }, zz.generateSvgReplacementMutation = function(zz, tz) {
            var sz = tz.iconName,
              Fz = tz.prefix,
              Wz = tz.transform,
              Xz = tz.symbol,
              Oz = tz.mask,
              oz = tz.maskId,
              vz = tz.extra;
            return new Promise((function(tz, Kz) {
              Promise.all([oF(sz, Fz), Oz.iconName ? oF(Oz.iconName, Oz.prefix) : Promise.resolve({
                found: !1,
                width: 512,
                height: 512,
                icon: {}
              })]).then((function(Oz) {
                var Kz = Uz(Oz, 2),
                  uz = Kz[0],
                  Nz = Kz[1];
                tz([zz, sF({
                  icons: {
                    main: uz,
                    mask: Nz
                  },
                  prefix: Fz,
                  iconName: sz,
                  transform: Wz,
                  symbol: Xz,
                  maskId: oz,
                  extra: vz,
                  watchable: !0
                })])
              })).catch(Kz)
            }))
          }, zz.generateAbstractIcon = function(zz) {
            var tz, sz = zz.children,
              Fz = zz.attributes,
              Wz = zz.main,
              Xz = zz.transform,
              Oz = ft(zz.styles);
            return Oz.length > 0 && (Fz.style = Oz), Et(Xz) && (tz = Vs("generateAbstractTransformGrouping", {
              main: Wz,
              transform: Xz,
              containerWidth: Wz.width,
              iconWidth: Wz.width
            })), sz.push(tz || Wz.icon), {
              children: sz,
              attributes: Fz
            }
          }
        }
      },
      yF = {
        mixout: function() {
          return {
            layer: function(zz) {
              var tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                sz = tz.classes,
                Fz = void 0 === sz ? [] : sz;
              return tF({
                type: "layer"
              }, (function() {
                Ss("beforeDOMElementCreation", {
                  assembler: zz,
                  params: tz
                });
                var sz = [];
                return zz((function(zz) {
                  Array.isArray(zz) ? zz.map((function(zz) {
                    sz = sz.concat(zz.abstract)
                  })) : sz = sz.concat(zz.abstract)
                })), [{
                  tag: "span",
                  attributes: {
                    class: ["".concat(Lt.cssPrefix, "-layers")].concat(Kz(Fz)).join(" ")
                  },
                  children: sz
                }]
              }))
            }
          }
        }
      },
      MF = {
        mixout: function() {
          return {
            counter: function(zz) {
              var tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                sz = tz.title,
                Fz = void 0 === sz ? null : sz,
                Wz = tz.classes,
                Xz = void 0 === Wz ? [] : Wz,
                Oz = tz.attributes,
                oz = void 0 === Oz ? {} : Oz,
                Uz = tz.styles,
                uz = void 0 === Uz ? {} : Uz;
              return tF({
                type: "counter",
                content: zz
              }, (function() {
                return Ss("beforeDOMElementCreation", {
                    content: zz,
                    params: tz
                  }),
                  function(zz) {
                    var tz = zz.content,
                      sz = zz.extra,
                      Fz = vz(vz({}, sz.attributes), {}, {
                        class: sz.classes.join(" ")
                      }),
                      Wz = ft(sz.styles);
                    Wz.length > 0 && (Fz.style = Wz);
                    var Xz = [];
                    return Xz.push({
                      tag: "span",
                      attributes: Fz,
                      children: [tz]
                    }), Xz
                  }({
                    content: zz.toString(),
                    title: Fz,
                    extra: {
                      attributes: oz,
                      styles: uz,
                      classes: ["".concat(Lt.cssPrefix, "-layers-counter")].concat(Kz(Xz))
                    }
                  })
              }))
            }
          }
        }
      },
      dF = {
        mixout: function() {
          return {
            text: function(zz) {
              var tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                sz = tz.transform,
                Fz = void 0 === sz ? qt : sz,
                Wz = tz.classes,
                Xz = void 0 === Wz ? [] : Wz,
                Oz = tz.attributes,
                oz = void 0 === Oz ? {} : Oz,
                Uz = tz.styles,
                uz = void 0 === Uz ? {} : Uz;
              return tF({
                type: "text",
                content: zz
              }, (function() {
                return Ss("beforeDOMElementCreation", {
                  content: zz,
                  params: tz
                }), FF({
                  content: zz,
                  transform: vz(vz({}, qt), Fz),
                  extra: {
                    attributes: oz,
                    styles: uz,
                    classes: ["".concat(Lt.cssPrefix, "-layers-text")].concat(Kz(Xz))
                  }
                })
              }))
            }
          }
        },
        provides: function(zz) {
          zz.generateLayersText = function(zz, tz) {
            var sz = tz.transform,
              Fz = tz.extra,
              Wz = null,
              Xz = null;
            if (Zz) {
              var Oz = parseInt(getComputedStyle(zz).fontSize, 10),
                oz = zz.getBoundingClientRect();
              Wz = oz.width / Oz, Xz = oz.height / Oz
            }
            return Promise.resolve([zz, FF({
              content: zz.innerHTML,
              width: Wz,
              height: Xz,
              transform: sz,
              extra: Fz,
              watchable: !0
            })])
          }
        }
      },
      hF = new RegExp('"', "ug"),
      QF = [1105920, 1112319],
      kF = vz(vz(vz(vz({}, {
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
      iF = Object.keys(kF).reduce((function(zz, tz) {
        return zz[tz.toLowerCase()] = kF[tz], zz
      }), {}),
      LF = Object.keys(iF).reduce((function(zz, tz) {
        var sz = iF[tz];
        return zz[tz] = sz[900] || Kz(Object.entries(sz))[0][1], zz
      }), {});

    function lF(zz, tz) {
      var sz = "".concat("data-fa-pseudo-element-pending").concat(tz.replace(":", "-"));
      return new Promise((function(Fz, Wz) {
        if (null !== zz.getAttribute(sz)) return Fz();
        var Xz = Vt(zz.children).filter((function(zz) {
            return zz.getAttribute(Ht) === tz
          }))[0],
          Oz = mz.getComputedStyle(zz, tz),
          oz = Oz.getPropertyValue("font-family"),
          Uz = oz.match(yt),
          uz = Oz.getPropertyValue("font-weight"),
          Nz = Oz.getPropertyValue("content");
        if (Xz && !Uz) return zz.removeChild(Xz), Fz();
        if (Uz && "none" !== Nz && "" !== Nz) {
          var bz = Oz.getPropertyValue("content"),
            wz = function(zz, tz) {
              var sz = zz.replace(/^['"]|['"]$/g, "").toLowerCase(),
                Fz = parseInt(tz),
                Wz = isNaN(Fz) ? "normal" : Fz;
              return (iF[sz] || {})[Wz] || LF[sz]
            }(oz, uz),
            Dz = function(zz) {
              return Ns(Kz(zz.replace(hF, ""))[0] || "")
            }(bz),
            gz = Uz[0].startsWith("FontAwesome"),
            Hz = function(zz) {
              var tz = zz.getPropertyValue("font-feature-settings").includes("ss01"),
                sz = zz.getPropertyValue("content").replace(hF, ""),
                Fz = sz.codePointAt(0),
                Wz = Fz >= QF[0] && Fz <= QF[1],
                Xz = 2 === sz.length && sz[0] === sz[1];
              return Wz || Xz || tz
            }(Oz),
            Bz = Gs(wz, Dz),
            Pz = Bz;
          if (gz) {
            var rz = function(zz) {
              var tz = ms[zz],
                sz = Gs("fas", zz);
              return tz || (sz ? {
                prefix: "fas",
                iconName: sz
              } : null) || {
                prefix: null,
                iconName: null
              }
            }(Dz);
            rz.iconName && rz.prefix && (Bz = rz.iconName, wz = rz.prefix)
          }
          if (!Bz || Hz || Xz && Xz.getAttribute(Bt) === wz && Xz.getAttribute(Pt) === Pz) Fz();
          else {
            zz.setAttribute(sz, Pz), Xz && zz.removeChild(Xz);
            var Yz = {
                iconName: null,
                prefix: null,
                transform: qt,
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
              xz = Yz.extra;
            xz.attributes[Ht] = tz, oF(Bz, wz).then((function(Wz) {
              var Xz = sF(vz(vz({}, Yz), {}, {
                  icons: {
                    main: Wz,
                    mask: {
                      prefix: null,
                      iconName: null,
                      rest: []
                    }
                  },
                  prefix: wz,
                  iconName: Pz,
                  extra: xz,
                  watchable: !0
                })),
                Oz = Jz.createElementNS("http://www.w3.org/2000/svg", "svg");
              "::before" === tz ? zz.insertBefore(Oz, zz.firstChild) : zz.appendChild(Oz), Oz.outerHTML = Xz.map((function(zz) {
                return Us(zz)
              })).join("\n"), zz.removeAttribute(sz), Fz()
            })).catch(Wz)
          }
        } else Fz()
      }))
    }

    function nF(zz) {
      return Promise.all([lF(zz, "::before"), lF(zz, "::after")])
    }

    function aF(zz) {
      return zz.parentNode !== document.head && !~Yt.indexOf(zz.tagName.toUpperCase()) && !zz.getAttribute(Ht) && (!zz.parentNode || "svg" !== zz.parentNode.tagName)
    }
    var qF = function(zz) {
        return !!zz && xt.some((function(tz) {
          return zz.includes(tz)
        }))
      },
      SF = function(zz) {
        if (!zz) return [];
        var tz = new Set,
          sz = zz.split(/,(?![^()]*\))/).map((function(zz) {
            return zz.trim()
          }));
        sz = sz.flatMap((function(zz) {
          return zz.includes("(") ? zz : zz.split(",").map((function(zz) {
            return zz.trim()
          }))
        }));
        var Fz, Wz = Xz(sz);
        try {
          for (Wz.s(); !(Fz = Wz.n()).done;) {
            var Oz = Fz.value;
            if (qF(Oz)) {
              var oz = xt.reduce((function(zz, tz) {
                return zz.replace(tz, "")
              }), Oz);
              "" !== oz && "*" !== oz && tz.add(oz)
            }
          }
        } catch (vz) {
          Wz.e(vz)
        } finally {
          Wz.f()
        }
        return tz
      };

    function VF(zz) {
      if (ez) {
        var tz;
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) tz = zz;
        else if (Lt.searchPseudoElementsFullScan) tz = zz.querySelectorAll("*");
        else {
          var sz, Fz = new Set,
            Wz = Xz(document.styleSheets);
          try {
            for (Wz.s(); !(sz = Wz.n()).done;) {
              var Oz = sz.value;
              try {
                var oz, vz = Xz(Oz.cssRules);
                try {
                  for (vz.s(); !(oz = vz.n()).done;) {
                    var Uz, Kz = oz.value,
                      uz = Xz(SF(Kz.selectorText));
                    try {
                      for (uz.s(); !(Uz = uz.n()).done;) {
                        var Nz = Uz.value;
                        Fz.add(Nz)
                      }
                    } catch (wz) {
                      uz.e(wz)
                    } finally {
                      uz.f()
                    }
                  }
                } catch (wz) {
                  vz.e(wz)
                } finally {
                  vz.f()
                }
              } catch (Dz) {
                Lt.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(Oz.href, " (").concat(Dz.message, ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.'))
              }
            }
          } catch (wz) {
            Wz.e(wz)
          } finally {
            Wz.f()
          }
          if (!Fz.size) return;
          var bz = Array.from(Fz).join(", ");
          try {
            tz = zz.querySelectorAll(bz)
          } catch (gz) {}
        }
        return new Promise((function(zz, sz) {
          var Fz = Vt(tz).filter(aF).map(nF),
            Wz = NF("searchPseudoElements");
          xF(), Promise.all(Fz).then((function() {
            Wz(), mF(), zz()
          })).catch((function() {
            Wz(), mF(), sz()
          }))
        }))
      }
    }
    var RF = {
        hooks: function() {
          return {
            mutationObserverCallbacks: function(zz) {
              return zz.pseudoElementsCallback = VF, zz
            }
          }
        },
        provides: function(zz) {
          zz.pseudoElements2svg = function(zz) {
            var tz = zz.node,
              sz = void 0 === tz ? Jz : tz;
            Lt.searchPseudoElements && VF(sz)
          }
        }
      },
      pF = !1,
      fF = function(zz) {
        return zz.toLowerCase().split(" ").reduce((function(zz, tz) {
          var sz = tz.toLowerCase().split("-"),
            Fz = sz[0],
            Wz = sz.slice(1).join("-");
          if (Fz && "h" === Wz) return zz.flipX = !0, zz;
          if (Fz && "v" === Wz) return zz.flipY = !0, zz;
          if (Wz = parseFloat(Wz), isNaN(Wz)) return zz;
          switch (Fz) {
            case "grow":
              zz.size = zz.size + Wz;
              break;
            case "shrink":
              zz.size = zz.size - Wz;
              break;
            case "left":
              zz.x = zz.x - Wz;
              break;
            case "right":
              zz.x = zz.x + Wz;
              break;
            case "up":
              zz.y = zz.y - Wz;
              break;
            case "down":
              zz.y = zz.y + Wz;
              break;
            case "rotate":
              zz.rotate = zz.rotate + Wz
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
      EF = {
        mixout: function() {
          return {
            parse: {
              transform: function(zz) {
                return fF(zz)
              }
            }
          }
        },
        hooks: function() {
          return {
            parseNodeAttributes: function(zz, tz) {
              var sz = tz.getAttribute("data-fa-transform");
              return sz && (zz.transform = fF(sz)), zz
            }
          }
        },
        provides: function(zz) {
          zz.generateAbstractTransformGrouping = function(zz) {
            var tz = zz.main,
              sz = zz.transform,
              Fz = zz.containerWidth,
              Wz = zz.iconWidth,
              Xz = {
                transform: "translate(".concat(Fz / 2, " 256)")
              },
              Oz = "translate(".concat(32 * sz.x, ", ").concat(32 * sz.y, ") "),
              oz = "scale(".concat(sz.size / 16 * (sz.flipX ? -1 : 1), ", ").concat(sz.size / 16 * (sz.flipY ? -1 : 1), ") "),
              Uz = "rotate(".concat(sz.rotate, " 0 0)"),
              Kz = {
                outer: Xz,
                inner: {
                  transform: "".concat(Oz, " ").concat(oz, " ").concat(Uz)
                },
                path: {
                  transform: "translate(".concat(Wz / 2 * -1, " -256)")
                }
              };
            return {
              tag: "g",
              attributes: vz({}, Kz.outer),
              children: [{
                tag: "g",
                attributes: vz({}, Kz.inner),
                children: [{
                  tag: tz.icon.tag,
                  children: tz.icon.children,
                  attributes: vz(vz({}, tz.icon.attributes), Kz.path)
                }]
              }]
            }
          }
        }
      },
      zW = {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%"
      };

    function tW(zz) {
      var tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return zz.attributes && (zz.attributes.fill || tz) && (zz.attributes.fill = "black"), zz
    }
    var sW = {
        hooks: function() {
          return {
            parseNodeAttributes: function(zz, tz) {
              var sz = tz.getAttribute("data-fa-mask"),
                Fz = sz ? hs(sz.split(" ").map((function(zz) {
                  return zz.trim()
                }))) : {
                  prefix: null,
                  iconName: null,
                  rest: []
                };
              return Fz.prefix || (Fz.prefix = As()), zz.mask = Fz, zz.maskId = tz.getAttribute("data-fa-mask-id"), zz
            }
          }
        },
        provides: function(zz) {
          zz.generateAbstractMask = function(zz) {
            var tz, sz = zz.children,
              Fz = zz.attributes,
              Wz = zz.main,
              Xz = zz.mask,
              Oz = zz.maskId,
              oz = zz.transform,
              Uz = Wz.width,
              Kz = Wz.icon,
              uz = Xz.width,
              Nz = Xz.icon,
              bz = function(zz) {
                var tz = zz.transform,
                  sz = zz.containerWidth,
                  Fz = zz.iconWidth,
                  Wz = {
                    transform: "translate(".concat(sz / 2, " 256)")
                  },
                  Xz = "translate(".concat(32 * tz.x, ", ").concat(32 * tz.y, ") "),
                  Oz = "scale(".concat(tz.size / 16 * (tz.flipX ? -1 : 1), ", ").concat(tz.size / 16 * (tz.flipY ? -1 : 1), ") "),
                  oz = "rotate(".concat(tz.rotate, " 0 0)");
                return {
                  outer: Wz,
                  inner: {
                    transform: "".concat(Xz, " ").concat(Oz, " ").concat(oz)
                  },
                  path: {
                    transform: "translate(".concat(Fz / 2 * -1, " -256)")
                  }
                }
              }({
                transform: oz,
                containerWidth: uz,
                iconWidth: Uz
              }),
              wz = {
                tag: "rect",
                attributes: vz(vz({}, zW), {}, {
                  fill: "white"
                })
              },
              Dz = Kz.children ? {
                children: Kz.children.map(tW)
              } : {},
              gz = {
                tag: "g",
                attributes: vz({}, bz.inner),
                children: [tW(vz({
                  tag: Kz.tag,
                  attributes: vz(vz({}, Kz.attributes), bz.path)
                }, Dz))]
              },
              Hz = {
                tag: "g",
                attributes: vz({}, bz.outer),
                children: [gz]
              },
              Bz = "mask-".concat(Oz || St()),
              Pz = "clip-".concat(Oz || St()),
              rz = {
                tag: "mask",
                attributes: vz(vz({}, zW), {}, {
                  id: Bz,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse"
                }),
                children: [wz, Hz]
              },
              Yz = {
                tag: "defs",
                children: [{
                  tag: "clipPath",
                  attributes: {
                    id: Pz
                  },
                  children: (tz = Nz, "g" === tz.tag ? tz.children : [tz])
                }, rz]
              };
            return sz.push(Yz, {
              tag: "rect",
              attributes: vz({
                fill: "currentColor",
                "clip-path": "url(#".concat(Pz, ")"),
                mask: "url(#".concat(Bz, ")")
              }, zW)
            }), {
              children: sz,
              attributes: Fz
            }
          }
        }
      },
      FW = {
        provides: function(zz) {
          var tz = !1;
          mz.matchMedia && (tz = mz.matchMedia("(prefers-reduced-motion: reduce)").matches), zz.missingIconAbstract = function() {
            var zz = [],
              sz = {
                fill: "currentColor"
              },
              Fz = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
              };
            zz.push({
              tag: "path",
              attributes: vz(vz({}, sz), {}, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
              })
            });
            var Wz = vz(vz({}, Fz), {}, {
                attributeName: "opacity"
              }),
              Xz = {
                tag: "circle",
                attributes: vz(vz({}, sz), {}, {
                  cx: "256",
                  cy: "364",
                  r: "28"
                }),
                children: []
              };
            return tz || Xz.children.push({
              tag: "animate",
              attributes: vz(vz({}, Fz), {}, {
                attributeName: "r",
                values: "28;14;28;28;14;28;"
              })
            }, {
              tag: "animate",
              attributes: vz(vz({}, Wz), {}, {
                values: "1;0;1;1;0;1;"
              })
            }), zz.push(Xz), zz.push({
              tag: "path",
              attributes: vz(vz({}, sz), {}, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
              }),
              children: tz ? [] : [{
                tag: "animate",
                attributes: vz(vz({}, Wz), {}, {
                  values: "1;0;0;0;0;1;"
                })
              }]
            }), tz || zz.push({
              tag: "path",
              attributes: vz(vz({}, sz), {}, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
              }),
              children: [{
                tag: "animate",
                attributes: vz(vz({}, Wz), {}, {
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
    ! function(zz, tz) {
      var sz = tz.mixoutsTo;
      Ls = zz, ls = {}, Object.keys(ns).forEach((function(zz) {
        -1 === as.indexOf(zz) && delete ns[zz]
      })), Ls.forEach((function(zz) {
        var tz = zz.mixout ? zz.mixout() : {};
        if (Object.keys(tz).forEach((function(zz) {
            "function" === typeof tz[zz] && (sz[zz] = tz[zz]), "object" === Nz(tz[zz]) && Object.keys(tz[zz]).forEach((function(Fz) {
              sz[zz] || (sz[zz] = {}), sz[zz][Fz] = tz[zz][Fz]
            }))
          })), zz.hooks) {
          var Fz = zz.hooks();
          Object.keys(Fz).forEach((function(zz) {
            ls[zz] || (ls[zz] = []), ls[zz].push(Fz[zz])
          }))
        }
        zz.provides && zz.provides(ns)
      }))
    }([Fs, AF, yF, MF, dF, RF, {
      mixout: function() {
        return {
          dom: {
            unwatch: function() {
              xF(), pF = !0
            }
          }
        }
      },
      hooks: function() {
        return {
          bootstrap: function() {
            IF(qs("mutationObserverCallbacks", {}))
          },
          noAuto: function() {
            JF && JF.disconnect()
          },
          watch: function(zz) {
            var tz = zz.observeMutationsRoot;
            pF ? mF() : IF(qs("mutationObserverCallbacks", {
              observeMutationsRoot: tz
            }))
          }
        }
      }
    }, EF, sW, FW, {
      hooks: function() {
        return {
          parseNodeAttributes: function(zz, tz) {
            var sz = tz.getAttribute("data-fa-symbol"),
              Fz = null !== sz && ("" === sz || sz);
            return zz.symbol = Fz, zz
          }
        }
      }
    }], {
      mixoutsTo: Es
    });
    var WW = Es.noAuto,
      XW = Es.config,
      OW = Es.library,
      oW = Es.dom,
      vW = Es.parse,
      UW = Es.findIconDefinition,
      KW = Es.toHtml,
      uW = Es.icon,
      NW = Es.layer,
      bW = Es.text,
      wW = Es.counter
  },
  6268: zz => {
    zz.exports = JSON.parse('{"description":"The iconic font, CSS, and SVG framework","keywords":["font","awesome","fontawesome","icon","svg","bootstrap"],"homepage":"https://fontawesome.com","bugs":{"url":"https://github.com/FortAwesome/Font-Awesome/issues"},"author":"The Font Awesome Team (https://github.com/orgs/FortAwesome/people)","repository":{"type":"git","url":"https://github.com/FortAwesome/Font-Awesome"},"engines":{"node":">=6"},"dependencies":{"@fortawesome/fontawesome-common-types":"7.2.0"},"version":"7.2.0","name":"@fortawesome/fontawesome-svg-core","main":"index.js","module":"index.mjs","jsnext:main":"index.mjs","style":"styles.css","license":"MIT","types":"./index.d.ts","exports":{".":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","style":"./styles.css","default":"./index.js"},"./index":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./index.js":{"types":"./index.d.ts","module":"./index.mjs","import":"./index.mjs","require":"./index.js","default":"./index.js"},"./plugins":{"types":"./index.d.ts","module":"./plugins.mjs","import":"./plugins.mjs","default":"./plugins.mjs"},"./import.macro":"./import.macro.js","./import.macro.js":"./import.macro.js","./styles":"./styles.css","./styles.css":"./styles.css","./package.json":"./package.json"},"sideEffects":["./index.js","./index.mjs","./styles.css"]}')
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);