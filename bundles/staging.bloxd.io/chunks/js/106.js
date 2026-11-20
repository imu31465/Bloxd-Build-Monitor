export const id = 106;
export const ids = [106];
export const modules = {
  4624: (zz, tz, sz) => {
    function Fz(zz) {
      return Fz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(zz) {
        return typeof zz
      } : function(zz) {
        return zz && "function" == typeof Symbol && zz.constructor === Symbol && zz !== Symbol.prototype ? "symbol" : typeof zz
      }, Fz(zz)
    }
    Object.defineProperty(tz, "__esModule", {
      value: !0
    }), tz.default = void 0;
    var Wz = uz(sz(1020)),
      Xz = function(zz, tz) {
        if (!tz && zz && zz.__esModule) return zz;
        if (null === zz || "object" !== Fz(zz) && "function" !== typeof zz) return {
          default: zz
        };
        var sz = Kz(tz);
        if (sz && sz.has(zz)) return sz.get(zz);
        var Wz = {},
          Xz = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var Oz in zz)
          if ("default" !== Oz && Object.prototype.hasOwnProperty.call(zz, Oz)) {
            var oz = Xz ? Object.getOwnPropertyDescriptor(zz, Oz) : null;
            oz && (oz.get || oz.set) ? Object.defineProperty(Wz, Oz, oz) : Wz[Oz] = zz[Oz]
          } Wz.default = zz, sz && sz.set(zz, Wz);
        return Wz
      }(sz(65)),
      Oz = uz(sz(4582)),
      oz = uz(sz(4627)),
      vz = sz(4632),
      Uz = sz(1087);

    function Kz(zz) {
      if ("function" !== typeof WeakMap) return null;
      var tz = new WeakMap,
        sz = new WeakMap;
      return (Kz = function(zz) {
        return zz ? sz : tz
      })(zz)
    }

    function uz(zz) {
      return zz && zz.__esModule ? zz : {
        default: zz
      }
    }

    function Nz(zz, tz) {
      var sz = "undefined" !== typeof Symbol && zz[Symbol.iterator] || zz["@@iterator"];
      if (!sz) {
        if (Array.isArray(zz) || (sz = function(zz, tz) {
            if (!zz) return;
            if ("string" === typeof zz) return bz(zz, tz);
            var sz = Object.prototype.toString.call(zz).slice(8, -1);
            "Object" === sz && zz.constructor && (sz = zz.constructor.name);
            if ("Map" === sz || "Set" === sz) return Array.from(zz);
            if ("Arguments" === sz || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(sz)) return bz(zz, tz)
          }(zz)) || tz && zz && "number" === typeof zz.length) {
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

    function bz(zz, tz) {
      (null == tz || tz > zz.length) && (tz = zz.length);
      for (var sz = 0, Fz = new Array(tz); sz < tz; sz++) Fz[sz] = zz[sz];
      return Fz
    }

    function wz(zz, tz) {
      for (var sz = 0; sz < tz.length; sz++) {
        var Fz = tz[sz];
        Fz.enumerable = Fz.enumerable || !1, Fz.configurable = !0, "value" in Fz && (Fz.writable = !0), Object.defineProperty(zz, Fz.key, Fz)
      }
    }

    function Dz(zz, tz) {
      return Dz = Object.setPrototypeOf || function(zz, tz) {
        return zz.__proto__ = tz, zz
      }, Dz(zz, tz)
    }

    function gz(zz) {
      var tz = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (zz) {
          return !1
        }
      }();
      return function() {
        var sz, Wz = Bz(zz);
        if (tz) {
          var Xz = Bz(this).constructor;
          sz = Reflect.construct(Wz, arguments, Xz)
        } else sz = Wz.apply(this, arguments);
        return function(zz, tz) {
          if (tz && ("object" === Fz(tz) || "function" === typeof tz)) return tz;
          if (void 0 !== tz) throw new TypeError("Derived constructors may only return object or undefined");
          return Hz(zz)
        }(this, sz)
      }
    }

    function Hz(zz) {
      if (void 0 === zz) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return zz
    }

    function Bz(zz) {
      return Bz = Object.setPrototypeOf ? Object.getPrototypeOf : function(zz) {
        return zz.__proto__ || Object.getPrototypeOf(zz)
      }, Bz(zz)
    }

    function Pz(zz, tz, sz) {
      return tz in zz ? Object.defineProperty(zz, tz, {
        value: sz,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : zz[tz] = sz, zz
    }
    var rz = {
        orientation: {
          horizontal: {
            dimension: "width",
            direction: "left",
            reverseDirection: "right",
            coordinate: "x"
          },
          vertical: {
            dimension: "height",
            direction: "top",
            reverseDirection: "bottom",
            coordinate: "y"
          }
        }
      },
      Yz = function(zz) {
        ! function(zz, tz) {
          if ("function" !== typeof tz && null !== tz) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(zz, "prototype", {
            value: Object.create(tz && tz.prototype, {
              constructor: {
                value: zz,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), tz && Dz(zz, tz)
        }(Oz, zz);
        var tz, sz, Fz, Xz = gz(Oz);

        function Oz(zz, tz) {
          var sz;
          return function(zz, tz) {
            if (!(zz instanceof tz)) throw new TypeError("Cannot call a class as a function")
          }(this, Oz), Pz(Hz(sz = Xz.call(this, zz, tz)), "handleFormat", (function(zz) {
            var tz = sz.props.format;
            return tz ? tz(zz) : zz
          })), Pz(Hz(sz), "handleUpdate", (function() {
            if (sz.slider) {
              var zz = sz.props.orientation,
                tz = (0, vz.capitalize)(rz.orientation[zz].dimension),
                Fz = sz.slider["offset".concat(tz)],
                Wz = sz.handle["offset".concat(tz)];
              sz.setState({
                limit: Fz - Wz,
                grab: Wz / 2
              })
            }
          })), Pz(Hz(sz), "handleStart", (function(zz) {
            var tz = sz.props.onChangeStart;
            document.addEventListener("mousemove", sz.handleDrag), document.addEventListener("mouseup", sz.handleEnd), sz.setState({
              active: !0
            }, (function() {
              tz && tz(zz)
            }))
          })), Pz(Hz(sz), "handleDrag", (function(zz) {
            zz.stopPropagation();
            var tz = sz.props.onChange,
              Fz = zz.target,
              Wz = Fz.className,
              Xz = Fz.classList,
              Oz = Fz.dataset;
            if (tz && "rangeslider__labels" !== Wz) {
              var oz = sz.position(zz);
              Xz && Xz.contains("rangeslider__label-item") && Oz.value && (oz = parseFloat(Oz.value)), tz && tz(oz, zz)
            }
          })), Pz(Hz(sz), "handleEnd", (function(zz) {
            var tz = sz.props.onChangeComplete;
            sz.setState({
              active: !1
            }, (function() {
              tz && tz(zz)
            })), document.removeEventListener("mousemove", sz.handleDrag), document.removeEventListener("mouseup", sz.handleEnd)
          })), Pz(Hz(sz), "handleKeyDown", (function(zz) {
            zz.preventDefault();
            var tz, Fz = zz.keyCode,
              Wz = sz.props,
              Xz = Wz.value,
              Oz = Wz.min,
              oz = Wz.max,
              vz = Wz.step,
              Uz = Wz.onChange;
            switch (Fz) {
              case 38:
              case 39:
                tz = Xz + vz > oz ? oz : Xz + vz, Uz && Uz(tz, zz);
                break;
              case 37:
              case 40:
                tz = Xz - vz < Oz ? Oz : Xz - vz, Uz && Uz(tz, zz)
            }
          })), Pz(Hz(sz), "getPositionFromValue", (function(zz) {
            var tz = sz.state.limit,
              Fz = sz.props,
              Wz = Fz.min,
              Xz = (zz - Wz) / (Fz.max - Wz);
            return Math.round(Xz * tz)
          })), Pz(Hz(sz), "getValueFromPosition", (function(zz) {
            var tz = sz.state.limit,
              Fz = sz.props,
              Wz = Fz.orientation,
              Xz = Fz.min,
              Oz = Fz.max,
              oz = Fz.step,
              Uz = (0, vz.clamp)(zz, 0, tz) / (tz || 1),
              Kz = oz * Math.round(Uz * (Oz - Xz) / oz),
              uz = "horizontal" === Wz ? Kz + Xz : Oz - Kz;
            return (0, vz.clamp)(uz, Xz, Oz)
          })), Pz(Hz(sz), "position", (function(zz) {
            var tz = sz.state.grab,
              Fz = sz.props,
              Wz = Fz.orientation,
              Xz = Fz.reverse,
              Oz = sz.slider,
              oz = rz.orientation[Wz].coordinate,
              Uz = Xz ? rz.orientation[Wz].reverseDirection : rz.orientation[Wz].direction,
              Kz = "client".concat((0, vz.capitalize)(oz)),
              uz = zz.touches ? zz.touches[0][Kz] : zz[Kz],
              Nz = Oz.getBoundingClientRect()[Uz],
              bz = Xz ? Nz - uz - tz : uz - Nz - tz;
            return sz.getValueFromPosition(bz)
          })), Pz(Hz(sz), "coordinates", (function(zz) {
            var tz = sz.state,
              Fz = tz.limit,
              Wz = tz.grab,
              Xz = sz.props.orientation,
              Oz = sz.getValueFromPosition(zz),
              oz = sz.getPositionFromValue(Oz),
              vz = "horizontal" === Xz ? oz + Wz : oz;
            return {
              fill: "horizontal" === Xz ? vz : Fz - vz,
              handle: vz,
              label: vz
            }
          })), Pz(Hz(sz), "renderLabels", (function(zz) {
            return (0, Uz.jsx)("ul", {
              ref: function(zz) {
                sz.labels = zz
              },
              className: (0, Wz.default)("rangeslider__labels"),
              children: zz
            })
          })), sz.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, sz
        }
        return tz = Oz, (sz = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new oz.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var zz = this,
              tz = this.props,
              sz = tz.value,
              Fz = tz.orientation,
              Xz = tz.className,
              Oz = tz.tooltip,
              oz = tz.reverse,
              vz = tz.labels,
              Kz = tz.min,
              uz = tz.max,
              bz = tz.handleLabel,
              wz = this.state.active,
              Dz = rz.orientation[Fz].dimension,
              gz = oz ? rz.orientation[Fz].reverseDirection : rz.orientation[Fz].direction,
              Hz = this.getPositionFromValue(sz),
              Bz = this.coordinates(Hz),
              Yz = Pz({}, Dz, "".concat(Bz.fill, "px")),
              xz = Pz({}, gz, "".concat(Bz.handle, "px")),
              mz = Oz && wz,
              Jz = [],
              Iz = Object.keys(vz);
            if (Iz.length > 0) {
              var Cz, ez = Nz(Iz = Iz.sort((function(zz, tz) {
                return oz ? zz - tz : tz - zz
              })));
              try {
                for (ez.s(); !(Cz = ez.n()).done;) {
                  var Zz = Cz.value,
                    Gz = this.getPositionFromValue(Zz),
                    Tz = this.coordinates(Gz),
                    cz = Pz({}, gz, "".concat(Tz.label, "px"));
                  Jz.push((0, Uz.jsx)("li", {
                    className: (0, Wz.default)("rangeslider__label-item"),
                    "data-value": Zz,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: cz,
                    children: this.props.labels[Zz]
                  }, Zz))
                }
              } catch (jz) {
                ez.e(jz)
              } finally {
                ez.f()
              }
            }
            return (0, Uz.jsxs)("div", {
              ref: function(tz) {
                zz.slider = tz
              },
              className: (0, Wz.default)("rangeslider", "rangeslider-".concat(Fz), {
                "rangeslider-reverse": oz
              }, Xz),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": Kz,
              "aria-valuemax": uz,
              "aria-valuenow": sz,
              "aria-orientation": Fz,
              children: [(0, Uz.jsx)("div", {
                className: "rangeslider__fill",
                style: Yz
              }), (0, Uz.jsxs)("div", {
                ref: function(tz) {
                  zz.handle = tz
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: xz,
                tabIndex: 0,
                children: [mz && (0, Uz.jsx)("div", {
                  ref: function(tz) {
                    zz.tooltip = tz
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, Uz.jsx)("span", {
                    children: this.handleFormat(sz)
                  })
                }), (0, Uz.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: bz
                })]
              }), vz && this.renderLabels(Jz)]
            })
          }
        }]) && wz(tz.prototype, sz), Fz && wz(tz, Fz), Object.defineProperty(tz, "prototype", {
          writable: !1
        }), Oz
      }(Xz.Component);
    Pz(Yz, "propTypes", {
      min: Oz.default.number,
      max: Oz.default.number,
      step: Oz.default.number,
      value: Oz.default.number,
      orientation: Oz.default.string,
      tooltip: Oz.default.bool,
      reverse: Oz.default.bool,
      labels: Oz.default.object,
      handleLabel: Oz.default.string,
      format: Oz.default.func,
      onChangeStart: Oz.default.func,
      onChange: Oz.default.func,
      onChangeComplete: Oz.default.func
    }), Pz(Yz, "defaultProps", {
      min: 0,
      max: 100,
      step: 1,
      value: 0,
      orientation: "horizontal",
      tooltip: !0,
      reverse: !1,
      labels: {},
      handleLabel: ""
    });
    var xz = Yz;
    tz.default = xz
  },
  4616: (zz, tz, sz) => {
    var Fz;
    tz.c = void 0;
    var Wz = ((Fz = sz(4624)) && Fz.__esModule ? Fz : {
      default: Fz
    }).default;
    tz.c = Wz
  },
  4632: (zz, tz) => {
    Object.defineProperty(tz, "__esModule", {
      value: !0
    }), tz.capitalize = function(zz) {
      return zz.charAt(0).toUpperCase() + zz.substr(1)
    }, tz.clamp = function(zz, tz, sz) {
      return Math.min(Math.max(zz, tz), sz)
    }
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
  4627: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Jz
    });
    var Fz = function() {
        if ("undefined" !== typeof Map) return Map;

        function zz(zz, tz) {
          var sz = -1;
          return zz.some((function(zz, Fz) {
            return zz[0] === tz && (sz = Fz, !0)
          })), sz
        }
        return function() {
          function tz() {
            this.__entries__ = []
          }
          return Object.defineProperty(tz.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), tz.prototype.get = function(tz) {
            var sz = zz(this.__entries__, tz),
              Fz = this.__entries__[sz];
            return Fz && Fz[1]
          }, tz.prototype.set = function(tz, sz) {
            var Fz = zz(this.__entries__, tz);
            ~Fz ? this.__entries__[Fz][1] = sz : this.__entries__.push([tz, sz])
          }, tz.prototype.delete = function(tz) {
            var sz = this.__entries__,
              Fz = zz(sz, tz);
            ~Fz && sz.splice(Fz, 1)
          }, tz.prototype.has = function(tz) {
            return !!~zz(this.__entries__, tz)
          }, tz.prototype.clear = function() {
            this.__entries__.splice(0)
          }, tz.prototype.forEach = function(zz, tz) {
            void 0 === tz && (tz = null);
            for (var sz = 0, Fz = this.__entries__; sz < Fz.length; sz++) {
              var Wz = Fz[sz];
              zz.call(tz, Wz[1], Wz[0])
            }
          }, tz
        }()
      }(),
      Wz = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      Xz = "undefined" !== typeof sz.g && sz.g.Math === Math ? sz.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      Oz = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(Xz) : function(zz) {
        return setTimeout((function() {
          return zz(Date.now())
        }), 1e3 / 60)
      };
    var oz = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      vz = "undefined" !== typeof MutationObserver,
      Uz = function() {
        function zz() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(zz, tz) {
            var sz = !1,
              Fz = !1,
              Wz = 0;

            function Xz() {
              sz && (sz = !1, zz()), Fz && vz()
            }

            function oz() {
              Oz(Xz)
            }

            function vz() {
              var zz = Date.now();
              if (sz) {
                if (zz - Wz < 2) return;
                Fz = !0
              } else sz = !0, Fz = !1, setTimeout(oz, tz);
              Wz = zz
            }
            return vz
          }(this.refresh.bind(this), 20)
        }
        return zz.prototype.addObserver = function(zz) {
          ~this.observers_.indexOf(zz) || this.observers_.push(zz), this.connected_ || this.connect_()
        }, zz.prototype.removeObserver = function(zz) {
          var tz = this.observers_,
            sz = tz.indexOf(zz);
          ~sz && tz.splice(sz, 1), !tz.length && this.connected_ && this.disconnect_()
        }, zz.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, zz.prototype.updateObservers_ = function() {
          var zz = this.observers_.filter((function(zz) {
            return zz.gatherActive(), zz.hasActive()
          }));
          return zz.forEach((function(zz) {
            return zz.broadcastActive()
          })), zz.length > 0
        }, zz.prototype.connect_ = function() {
          Wz && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), vz ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, zz.prototype.disconnect_ = function() {
          Wz && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, zz.prototype.onTransitionEnd_ = function(zz) {
          var tz = zz.propertyName,
            sz = void 0 === tz ? "" : tz;
          oz.some((function(zz) {
            return !!~sz.indexOf(zz)
          })) && this.refresh()
        }, zz.getInstance = function() {
          return this.instance_ || (this.instance_ = new zz), this.instance_
        }, zz.instance_ = null, zz
      }(),
      Kz = function(zz, tz) {
        for (var sz = 0, Fz = Object.keys(tz); sz < Fz.length; sz++) {
          var Wz = Fz[sz];
          Object.defineProperty(zz, Wz, {
            value: tz[Wz],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return zz
      },
      uz = function(zz) {
        return zz && zz.ownerDocument && zz.ownerDocument.defaultView || Xz
      },
      Nz = Bz(0, 0, 0, 0);

    function bz(zz) {
      return parseFloat(zz) || 0
    }

    function wz(zz) {
      for (var tz = [], sz = 1; sz < arguments.length; sz++) tz[sz - 1] = arguments[sz];
      return tz.reduce((function(tz, sz) {
        return tz + bz(zz["border-" + sz + "-width"])
      }), 0)
    }

    function Dz(zz) {
      var tz = zz.clientWidth,
        sz = zz.clientHeight;
      if (!tz && !sz) return Nz;
      var Fz = uz(zz).getComputedStyle(zz),
        Wz = function(zz) {
          for (var tz = {}, sz = 0, Fz = ["top", "right", "bottom", "left"]; sz < Fz.length; sz++) {
            var Wz = Fz[sz],
              Xz = zz["padding-" + Wz];
            tz[Wz] = bz(Xz)
          }
          return tz
        }(Fz),
        Xz = Wz.left + Wz.right,
        Oz = Wz.top + Wz.bottom,
        oz = bz(Fz.width),
        vz = bz(Fz.height);
      if ("border-box" === Fz.boxSizing && (Math.round(oz + Xz) !== tz && (oz -= wz(Fz, "left", "right") + Xz), Math.round(vz + Oz) !== sz && (vz -= wz(Fz, "top", "bottom") + Oz)), ! function(zz) {
          return zz === uz(zz).document.documentElement
        }(zz)) {
        var Uz = Math.round(oz + Xz) - tz,
          Kz = Math.round(vz + Oz) - sz;
        1 !== Math.abs(Uz) && (oz -= Uz), 1 !== Math.abs(Kz) && (vz -= Kz)
      }
      return Bz(Wz.left, Wz.top, oz, vz)
    }
    var gz = "undefined" !== typeof SVGGraphicsElement ? function(zz) {
      return zz instanceof uz(zz).SVGGraphicsElement
    } : function(zz) {
      return zz instanceof uz(zz).SVGElement && "function" === typeof zz.getBBox
    };

    function Hz(zz) {
      return Wz ? gz(zz) ? function(zz) {
        var tz = zz.getBBox();
        return Bz(0, 0, tz.width, tz.height)
      }(zz) : Dz(zz) : Nz
    }

    function Bz(zz, tz, sz, Fz) {
      return {
        x: zz,
        y: tz,
        width: sz,
        height: Fz
      }
    }
    var Pz = function() {
        function zz(zz) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Bz(0, 0, 0, 0), this.target = zz
        }
        return zz.prototype.isActive = function() {
          var zz = Hz(this.target);
          return this.contentRect_ = zz, zz.width !== this.broadcastWidth || zz.height !== this.broadcastHeight
        }, zz.prototype.broadcastRect = function() {
          var zz = this.contentRect_;
          return this.broadcastWidth = zz.width, this.broadcastHeight = zz.height, zz
        }, zz
      }(),
      rz = function(zz, tz) {
        var sz = function(zz) {
          var tz = zz.x,
            sz = zz.y,
            Fz = zz.width,
            Wz = zz.height,
            Xz = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            Oz = Object.create(Xz.prototype);
          return Kz(Oz, {
            x: tz,
            y: sz,
            width: Fz,
            height: Wz,
            top: sz,
            right: tz + Fz,
            bottom: Wz + sz,
            left: tz
          }), Oz
        }(tz);
        Kz(this, {
          target: zz,
          contentRect: sz
        })
      },
      Yz = function() {
        function zz(zz, tz, sz) {
          if (this.activeObservations_ = [], this.observations_ = new Fz, "function" !== typeof zz) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = zz, this.controller_ = tz, this.callbackCtx_ = sz
        }
        return zz.prototype.observe = function(zz) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(zz instanceof uz(zz).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var tz = this.observations_;
            tz.has(zz) || (tz.set(zz, new Pz(zz)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, zz.prototype.unobserve = function(zz) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(zz instanceof uz(zz).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var tz = this.observations_;
            tz.has(zz) && (tz.delete(zz), tz.size || this.controller_.removeObserver(this))
          }
        }, zz.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, zz.prototype.gatherActive = function() {
          var zz = this;
          this.clearActive(), this.observations_.forEach((function(tz) {
            tz.isActive() && zz.activeObservations_.push(tz)
          }))
        }, zz.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var zz = this.callbackCtx_,
              tz = this.activeObservations_.map((function(zz) {
                return new rz(zz.target, zz.broadcastRect())
              }));
            this.callback_.call(zz, tz, zz), this.clearActive()
          }
        }, zz.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, zz.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, zz
      }(),
      xz = "undefined" !== typeof WeakMap ? new WeakMap : new Fz,
      mz = function zz(tz) {
        if (!(this instanceof zz)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var sz = Uz.getInstance(),
          Fz = new Yz(tz, sz, this);
        xz.set(this, Fz)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(zz) {
      mz.prototype[zz] = function() {
        var tz;
        return (tz = xz.get(this))[zz].apply(tz, arguments)
      }
    }));
    const Jz = "undefined" !== typeof Xz.ResizeObserver ? Xz.ResizeObserver : mz
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);