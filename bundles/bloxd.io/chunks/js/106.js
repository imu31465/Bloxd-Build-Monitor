export const id = 106;
export const ids = [106];
export const modules = {
  4755: (zz, uz, bz) => {
    function Ez(zz) {
      return Ez = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(zz) {
        return typeof zz
      } : function(zz) {
        return zz && "function" == typeof Symbol && zz.constructor === Symbol && zz !== Symbol.prototype ? "symbol" : typeof zz
      }, Ez(zz)
    }
    Object.defineProperty(uz, "__esModule", {
      value: !0
    }), uz.default = void 0;
    var nz = pz(bz(1038)),
      iz = function(zz, uz) {
        if (!uz && zz && zz.__esModule) return zz;
        if (null === zz || "object" !== Ez(zz) && "function" !== typeof zz) return {
          default: zz
        };
        var bz = Oz(uz);
        if (bz && bz.has(zz)) return bz.get(zz);
        var nz = {},
          iz = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var lz in zz)
          if ("default" !== lz && Object.prototype.hasOwnProperty.call(zz, lz)) {
            var Mz = iz ? Object.getOwnPropertyDescriptor(zz, lz) : null;
            Mz && (Mz.get || Mz.set) ? Object.defineProperty(nz, lz, Mz) : nz[lz] = zz[lz]
          } nz.default = zz, bz && bz.set(zz, nz);
        return nz
      }(bz(56)),
      lz = pz(bz(4714)),
      Mz = pz(bz(4763)),
      tz = bz(4767),
      Hz = bz(1089);

    function Oz(zz) {
      if ("function" !== typeof WeakMap) return null;
      var uz = new WeakMap,
        bz = new WeakMap;
      return (Oz = function(zz) {
        return zz ? bz : uz
      })(zz)
    }

    function pz(zz) {
      return zz && zz.__esModule ? zz : {
        default: zz
      }
    }

    function dz(zz, uz) {
      var bz = "undefined" !== typeof Symbol && zz[Symbol.iterator] || zz["@@iterator"];
      if (!bz) {
        if (Array.isArray(zz) || (bz = function(zz, uz) {
            if (!zz) return;
            if ("string" === typeof zz) return Fz(zz, uz);
            var bz = Object.prototype.toString.call(zz).slice(8, -1);
            "Object" === bz && zz.constructor && (bz = zz.constructor.name);
            if ("Map" === bz || "Set" === bz) return Array.from(zz);
            if ("Arguments" === bz || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(bz)) return Fz(zz, uz)
          }(zz)) || uz && zz && "number" === typeof zz.length) {
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

    function Fz(zz, uz) {
      (null == uz || uz > zz.length) && (uz = zz.length);
      for (var bz = 0, Ez = new Array(uz); bz < uz; bz++) Ez[bz] = zz[bz];
      return Ez
    }

    function Zz(zz, uz) {
      for (var bz = 0; bz < uz.length; bz++) {
        var Ez = uz[bz];
        Ez.enumerable = Ez.enumerable || !1, Ez.configurable = !0, "value" in Ez && (Ez.writable = !0), Object.defineProperty(zz, Ez.key, Ez)
      }
    }

    function Rz(zz, uz) {
      return Rz = Object.setPrototypeOf || function(zz, uz) {
        return zz.__proto__ = uz, zz
      }, Rz(zz, uz)
    }

    function Kz(zz) {
      var uz = function() {
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
        var bz, nz = Xz(zz);
        if (uz) {
          var iz = Xz(this).constructor;
          bz = Reflect.construct(nz, arguments, iz)
        } else bz = nz.apply(this, arguments);
        return function(zz, uz) {
          if (uz && ("object" === Ez(uz) || "function" === typeof uz)) return uz;
          if (void 0 !== uz) throw new TypeError("Derived constructors may only return object or undefined");
          return wz(zz)
        }(this, bz)
      }
    }

    function wz(zz) {
      if (void 0 === zz) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return zz
    }

    function Xz(zz) {
      return Xz = Object.setPrototypeOf ? Object.getPrototypeOf : function(zz) {
        return zz.__proto__ || Object.getPrototypeOf(zz)
      }, Xz(zz)
    }

    function fz(zz, uz, bz) {
      return uz in zz ? Object.defineProperty(zz, uz, {
        value: bz,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : zz[uz] = bz, zz
    }
    var sz = {
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
      rz = function(zz) {
        ! function(zz, uz) {
          if ("function" !== typeof uz && null !== uz) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(zz, "prototype", {
            value: Object.create(uz && uz.prototype, {
              constructor: {
                value: zz,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), uz && Rz(zz, uz)
        }(lz, zz);
        var uz, bz, Ez, iz = Kz(lz);

        function lz(zz, uz) {
          var bz;
          return function(zz, uz) {
            if (!(zz instanceof uz)) throw new TypeError("Cannot call a class as a function")
          }(this, lz), fz(wz(bz = iz.call(this, zz, uz)), "handleFormat", (function(zz) {
            var uz = bz.props.format;
            return uz ? uz(zz) : zz
          })), fz(wz(bz), "handleUpdate", (function() {
            if (bz.slider) {
              var zz = bz.props.orientation,
                uz = (0, tz.capitalize)(sz.orientation[zz].dimension),
                Ez = bz.slider["offset".concat(uz)],
                nz = bz.handle["offset".concat(uz)];
              bz.setState({
                limit: Ez - nz,
                grab: nz / 2
              })
            }
          })), fz(wz(bz), "handleStart", (function(zz) {
            var uz = bz.props.onChangeStart;
            document.addEventListener("mousemove", bz.handleDrag), document.addEventListener("mouseup", bz.handleEnd), bz.setState({
              active: !0
            }, (function() {
              uz && uz(zz)
            }))
          })), fz(wz(bz), "handleDrag", (function(zz) {
            zz.stopPropagation();
            var uz = bz.props.onChange,
              Ez = zz.target,
              nz = Ez.className,
              iz = Ez.classList,
              lz = Ez.dataset;
            if (uz && "rangeslider__labels" !== nz) {
              var Mz = bz.position(zz);
              iz && iz.contains("rangeslider__label-item") && lz.value && (Mz = parseFloat(lz.value)), uz && uz(Mz, zz)
            }
          })), fz(wz(bz), "handleEnd", (function(zz) {
            var uz = bz.props.onChangeComplete;
            bz.setState({
              active: !1
            }, (function() {
              uz && uz(zz)
            })), document.removeEventListener("mousemove", bz.handleDrag), document.removeEventListener("mouseup", bz.handleEnd)
          })), fz(wz(bz), "handleKeyDown", (function(zz) {
            zz.preventDefault();
            var uz, Ez = zz.keyCode,
              nz = bz.props,
              iz = nz.value,
              lz = nz.min,
              Mz = nz.max,
              tz = nz.step,
              Hz = nz.onChange;
            switch (Ez) {
              case 38:
              case 39:
                uz = iz + tz > Mz ? Mz : iz + tz, Hz && Hz(uz, zz);
                break;
              case 37:
              case 40:
                uz = iz - tz < lz ? lz : iz - tz, Hz && Hz(uz, zz)
            }
          })), fz(wz(bz), "getPositionFromValue", (function(zz) {
            var uz = bz.state.limit,
              Ez = bz.props,
              nz = Ez.min,
              iz = (zz - nz) / (Ez.max - nz);
            return Math.round(iz * uz)
          })), fz(wz(bz), "getValueFromPosition", (function(zz) {
            var uz = bz.state.limit,
              Ez = bz.props,
              nz = Ez.orientation,
              iz = Ez.min,
              lz = Ez.max,
              Mz = Ez.step,
              Hz = (0, tz.clamp)(zz, 0, uz) / (uz || 1),
              Oz = Mz * Math.round(Hz * (lz - iz) / Mz),
              pz = "horizontal" === nz ? Oz + iz : lz - Oz;
            return (0, tz.clamp)(pz, iz, lz)
          })), fz(wz(bz), "position", (function(zz) {
            var uz = bz.state.grab,
              Ez = bz.props,
              nz = Ez.orientation,
              iz = Ez.reverse,
              lz = bz.slider,
              Mz = sz.orientation[nz].coordinate,
              Hz = iz ? sz.orientation[nz].reverseDirection : sz.orientation[nz].direction,
              Oz = "client".concat((0, tz.capitalize)(Mz)),
              pz = zz.touches ? zz.touches[0][Oz] : zz[Oz],
              dz = lz.getBoundingClientRect()[Hz],
              Fz = iz ? dz - pz - uz : pz - dz - uz;
            return bz.getValueFromPosition(Fz)
          })), fz(wz(bz), "coordinates", (function(zz) {
            var uz = bz.state,
              Ez = uz.limit,
              nz = uz.grab,
              iz = bz.props.orientation,
              lz = bz.getValueFromPosition(zz),
              Mz = bz.getPositionFromValue(lz),
              tz = "horizontal" === iz ? Mz + nz : Mz;
            return {
              fill: "horizontal" === iz ? tz : Ez - tz,
              handle: tz,
              label: tz
            }
          })), fz(wz(bz), "renderLabels", (function(zz) {
            return (0, Hz.jsx)("ul", {
              ref: function(zz) {
                bz.labels = zz
              },
              className: (0, nz.default)("rangeslider__labels"),
              children: zz
            })
          })), bz.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, bz
        }
        return uz = lz, (bz = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new Mz.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var zz = this,
              uz = this.props,
              bz = uz.value,
              Ez = uz.orientation,
              iz = uz.className,
              lz = uz.tooltip,
              Mz = uz.reverse,
              tz = uz.labels,
              Oz = uz.min,
              pz = uz.max,
              Fz = uz.handleLabel,
              Zz = this.state.active,
              Rz = sz.orientation[Ez].dimension,
              Kz = Mz ? sz.orientation[Ez].reverseDirection : sz.orientation[Ez].direction,
              wz = this.getPositionFromValue(bz),
              Xz = this.coordinates(wz),
              rz = fz({}, Rz, "".concat(Xz.fill, "px")),
              oz = fz({}, Kz, "".concat(Xz.handle, "px")),
              Nz = lz && Zz,
              vz = [],
              xz = Object.keys(tz);
            if (xz.length > 0) {
              var Jz, Az = dz(xz = xz.sort((function(zz, uz) {
                return Mz ? zz - uz : uz - zz
              })));
              try {
                for (Az.s(); !(Jz = Az.n()).done;) {
                  var Tz = Jz.value,
                    Lz = this.getPositionFromValue(Tz),
                    Pz = this.coordinates(Lz),
                    Gz = fz({}, Kz, "".concat(Pz.label, "px"));
                  vz.push((0, Hz.jsx)("li", {
                    className: (0, nz.default)("rangeslider__label-item"),
                    "data-value": Tz,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: Gz,
                    children: this.props.labels[Tz]
                  }, Tz))
                }
              } catch (az) {
                Az.e(az)
              } finally {
                Az.f()
              }
            }
            return (0, Hz.jsxs)("div", {
              ref: function(uz) {
                zz.slider = uz
              },
              className: (0, nz.default)("rangeslider", "rangeslider-".concat(Ez), {
                "rangeslider-reverse": Mz
              }, iz),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": Oz,
              "aria-valuemax": pz,
              "aria-valuenow": bz,
              "aria-orientation": Ez,
              children: [(0, Hz.jsx)("div", {
                className: "rangeslider__fill",
                style: rz
              }), (0, Hz.jsxs)("div", {
                ref: function(uz) {
                  zz.handle = uz
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: oz,
                tabIndex: 0,
                children: [Nz && (0, Hz.jsx)("div", {
                  ref: function(uz) {
                    zz.tooltip = uz
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, Hz.jsx)("span", {
                    children: this.handleFormat(bz)
                  })
                }), (0, Hz.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: Fz
                })]
              }), tz && this.renderLabels(vz)]
            })
          }
        }]) && Zz(uz.prototype, bz), Ez && Zz(uz, Ez), Object.defineProperty(uz, "prototype", {
          writable: !1
        }), lz
      }(iz.Component);
    fz(rz, "propTypes", {
      min: lz.default.number,
      max: lz.default.number,
      step: lz.default.number,
      value: lz.default.number,
      orientation: lz.default.string,
      tooltip: lz.default.bool,
      reverse: lz.default.bool,
      labels: lz.default.object,
      handleLabel: lz.default.string,
      format: lz.default.func,
      onChangeStart: lz.default.func,
      onChange: lz.default.func,
      onChangeComplete: lz.default.func
    }), fz(rz, "defaultProps", {
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
    var oz = rz;
    uz.default = oz
  },
  4753: (zz, uz, bz) => {
    var Ez;
    uz.c = void 0;
    var nz = ((Ez = bz(4755)) && Ez.__esModule ? Ez : {
      default: Ez
    }).default;
    uz.c = nz
  },
  4767: (zz, uz) => {
    Object.defineProperty(uz, "__esModule", {
      value: !0
    }), uz.capitalize = function(zz) {
      return zz.charAt(0).toUpperCase() + zz.substr(1)
    }, uz.clamp = function(zz, uz, bz) {
      return Math.min(Math.max(zz, uz), bz)
    }
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
  4763: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => vz
    });
    var Ez = function() {
        if ("undefined" !== typeof Map) return Map;

        function zz(zz, uz) {
          var bz = -1;
          return zz.some((function(zz, Ez) {
            return zz[0] === uz && (bz = Ez, !0)
          })), bz
        }
        return function() {
          function uz() {
            this.__entries__ = []
          }
          return Object.defineProperty(uz.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), uz.prototype.get = function(uz) {
            var bz = zz(this.__entries__, uz),
              Ez = this.__entries__[bz];
            return Ez && Ez[1]
          }, uz.prototype.set = function(uz, bz) {
            var Ez = zz(this.__entries__, uz);
            ~Ez ? this.__entries__[Ez][1] = bz : this.__entries__.push([uz, bz])
          }, uz.prototype.delete = function(uz) {
            var bz = this.__entries__,
              Ez = zz(bz, uz);
            ~Ez && bz.splice(Ez, 1)
          }, uz.prototype.has = function(uz) {
            return !!~zz(this.__entries__, uz)
          }, uz.prototype.clear = function() {
            this.__entries__.splice(0)
          }, uz.prototype.forEach = function(zz, uz) {
            void 0 === uz && (uz = null);
            for (var bz = 0, Ez = this.__entries__; bz < Ez.length; bz++) {
              var nz = Ez[bz];
              zz.call(uz, nz[1], nz[0])
            }
          }, uz
        }()
      }(),
      nz = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      iz = "undefined" !== typeof bz.g && bz.g.Math === Math ? bz.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      lz = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(iz) : function(zz) {
        return setTimeout((function() {
          return zz(Date.now())
        }), 1e3 / 60)
      };
    var Mz = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      tz = "undefined" !== typeof MutationObserver,
      Hz = function() {
        function zz() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(zz, uz) {
            var bz = !1,
              Ez = !1,
              nz = 0;

            function iz() {
              bz && (bz = !1, zz()), Ez && tz()
            }

            function Mz() {
              lz(iz)
            }

            function tz() {
              var zz = Date.now();
              if (bz) {
                if (zz - nz < 2) return;
                Ez = !0
              } else bz = !0, Ez = !1, setTimeout(Mz, uz);
              nz = zz
            }
            return tz
          }(this.refresh.bind(this), 20)
        }
        return zz.prototype.addObserver = function(zz) {
          ~this.observers_.indexOf(zz) || this.observers_.push(zz), this.connected_ || this.connect_()
        }, zz.prototype.removeObserver = function(zz) {
          var uz = this.observers_,
            bz = uz.indexOf(zz);
          ~bz && uz.splice(bz, 1), !uz.length && this.connected_ && this.disconnect_()
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
          nz && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), tz ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, zz.prototype.disconnect_ = function() {
          nz && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, zz.prototype.onTransitionEnd_ = function(zz) {
          var uz = zz.propertyName,
            bz = void 0 === uz ? "" : uz;
          Mz.some((function(zz) {
            return !!~bz.indexOf(zz)
          })) && this.refresh()
        }, zz.getInstance = function() {
          return this.instance_ || (this.instance_ = new zz), this.instance_
        }, zz.instance_ = null, zz
      }(),
      Oz = function(zz, uz) {
        for (var bz = 0, Ez = Object.keys(uz); bz < Ez.length; bz++) {
          var nz = Ez[bz];
          Object.defineProperty(zz, nz, {
            value: uz[nz],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return zz
      },
      pz = function(zz) {
        return zz && zz.ownerDocument && zz.ownerDocument.defaultView || iz
      },
      dz = Xz(0, 0, 0, 0);

    function Fz(zz) {
      return parseFloat(zz) || 0
    }

    function Zz(zz) {
      for (var uz = [], bz = 1; bz < arguments.length; bz++) uz[bz - 1] = arguments[bz];
      return uz.reduce((function(uz, bz) {
        return uz + Fz(zz["border-" + bz + "-width"])
      }), 0)
    }

    function Rz(zz) {
      var uz = zz.clientWidth,
        bz = zz.clientHeight;
      if (!uz && !bz) return dz;
      var Ez = pz(zz).getComputedStyle(zz),
        nz = function(zz) {
          for (var uz = {}, bz = 0, Ez = ["top", "right", "bottom", "left"]; bz < Ez.length; bz++) {
            var nz = Ez[bz],
              iz = zz["padding-" + nz];
            uz[nz] = Fz(iz)
          }
          return uz
        }(Ez),
        iz = nz.left + nz.right,
        lz = nz.top + nz.bottom,
        Mz = Fz(Ez.width),
        tz = Fz(Ez.height);
      if ("border-box" === Ez.boxSizing && (Math.round(Mz + iz) !== uz && (Mz -= Zz(Ez, "left", "right") + iz), Math.round(tz + lz) !== bz && (tz -= Zz(Ez, "top", "bottom") + lz)), ! function(zz) {
          return zz === pz(zz).document.documentElement
        }(zz)) {
        var Hz = Math.round(Mz + iz) - uz,
          Oz = Math.round(tz + lz) - bz;
        1 !== Math.abs(Hz) && (Mz -= Hz), 1 !== Math.abs(Oz) && (tz -= Oz)
      }
      return Xz(nz.left, nz.top, Mz, tz)
    }
    var Kz = "undefined" !== typeof SVGGraphicsElement ? function(zz) {
      return zz instanceof pz(zz).SVGGraphicsElement
    } : function(zz) {
      return zz instanceof pz(zz).SVGElement && "function" === typeof zz.getBBox
    };

    function wz(zz) {
      return nz ? Kz(zz) ? function(zz) {
        var uz = zz.getBBox();
        return Xz(0, 0, uz.width, uz.height)
      }(zz) : Rz(zz) : dz
    }

    function Xz(zz, uz, bz, Ez) {
      return {
        x: zz,
        y: uz,
        width: bz,
        height: Ez
      }
    }
    var fz = function() {
        function zz(zz) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Xz(0, 0, 0, 0), this.target = zz
        }
        return zz.prototype.isActive = function() {
          var zz = wz(this.target);
          return this.contentRect_ = zz, zz.width !== this.broadcastWidth || zz.height !== this.broadcastHeight
        }, zz.prototype.broadcastRect = function() {
          var zz = this.contentRect_;
          return this.broadcastWidth = zz.width, this.broadcastHeight = zz.height, zz
        }, zz
      }(),
      sz = function(zz, uz) {
        var bz = function(zz) {
          var uz = zz.x,
            bz = zz.y,
            Ez = zz.width,
            nz = zz.height,
            iz = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            lz = Object.create(iz.prototype);
          return Oz(lz, {
            x: uz,
            y: bz,
            width: Ez,
            height: nz,
            top: bz,
            right: uz + Ez,
            bottom: nz + bz,
            left: uz
          }), lz
        }(uz);
        Oz(this, {
          target: zz,
          contentRect: bz
        })
      },
      rz = function() {
        function zz(zz, uz, bz) {
          if (this.activeObservations_ = [], this.observations_ = new Ez, "function" !== typeof zz) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = zz, this.controller_ = uz, this.callbackCtx_ = bz
        }
        return zz.prototype.observe = function(zz) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(zz instanceof pz(zz).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var uz = this.observations_;
            uz.has(zz) || (uz.set(zz, new fz(zz)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, zz.prototype.unobserve = function(zz) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(zz instanceof pz(zz).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var uz = this.observations_;
            uz.has(zz) && (uz.delete(zz), uz.size || this.controller_.removeObserver(this))
          }
        }, zz.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, zz.prototype.gatherActive = function() {
          var zz = this;
          this.clearActive(), this.observations_.forEach((function(uz) {
            uz.isActive() && zz.activeObservations_.push(uz)
          }))
        }, zz.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var zz = this.callbackCtx_,
              uz = this.activeObservations_.map((function(zz) {
                return new sz(zz.target, zz.broadcastRect())
              }));
            this.callback_.call(zz, uz, zz), this.clearActive()
          }
        }, zz.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, zz.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, zz
      }(),
      oz = "undefined" !== typeof WeakMap ? new WeakMap : new Ez,
      Nz = function zz(uz) {
        if (!(this instanceof zz)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var bz = Hz.getInstance(),
          Ez = new rz(uz, bz, this);
        oz.set(this, Ez)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(zz) {
      Nz.prototype[zz] = function() {
        var uz;
        return (uz = oz.get(this))[zz].apply(uz, arguments)
      }
    }));
    const vz = "undefined" !== typeof iz.ResizeObserver ? iz.ResizeObserver : Nz
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);