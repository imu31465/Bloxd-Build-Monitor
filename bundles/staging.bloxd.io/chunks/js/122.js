export const id = 122;
export const ids = [122];
export const modules = {
  5517: (VV, eV, xV) => {
    function JV(VV) {
      return JV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, JV(VV)
    }
    Object.defineProperty(eV, "__esModule", {
      value: !0
    }), eV.default = void 0;
    var YV = ZV(xV(1146)),
      UV = function(VV, eV) {
        if (!eV && VV && VV.__esModule) return VV;
        if (null === VV || "object" !== JV(VV) && "function" !== typeof VV) return {
          default: VV
        };
        var xV = wV(eV);
        if (xV && xV.has(VV)) return xV.get(VV);
        var YV = {},
          UV = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var yV in VV)
          if ("default" !== yV && Object.prototype.hasOwnProperty.call(VV, yV)) {
            var pV = UV ? Object.getOwnPropertyDescriptor(VV, yV) : null;
            pV && (pV.get || pV.set) ? Object.defineProperty(YV, yV, pV) : YV[yV] = VV[yV]
          } YV.default = VV, xV && xV.set(VV, YV);
        return YV
      }(xV(62)),
      yV = ZV(xV(5453)),
      pV = ZV(xV(5520)),
      QV = xV(5526),
      nV = xV(1321);

    function wV(VV) {
      if ("function" !== typeof WeakMap) return null;
      var eV = new WeakMap,
        xV = new WeakMap;
      return (wV = function(VV) {
        return VV ? xV : eV
      })(VV)
    }

    function ZV(VV) {
      return VV && VV.__esModule ? VV : {
        default: VV
      }
    }

    function vV(VV, eV) {
      var xV = "undefined" !== typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
      if (!xV) {
        if (Array.isArray(VV) || (xV = function(VV, eV) {
            if (!VV) return;
            if ("string" === typeof VV) return rV(VV, eV);
            var xV = Object.prototype.toString.call(VV).slice(8, -1);
            "Object" === xV && VV.constructor && (xV = VV.constructor.name);
            if ("Map" === xV || "Set" === xV) return Array.from(VV);
            if ("Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV)) return rV(VV, eV)
          }(VV)) || eV && VV && "number" === typeof VV.length) {
          xV && (VV = xV);
          var JV = 0,
            YV = function() {};
          return {
            s: YV,
            n: function() {
              return JV >= VV.length ? {
                done: !0
              } : {
                done: !1,
                value: VV[JV++]
              }
            },
            e: function(VV) {
              throw VV
            },
            f: YV
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var UV, yV = !0,
        pV = !1;
      return {
        s: function() {
          xV = xV.call(VV)
        },
        n: function() {
          var VV = xV.next();
          return yV = VV.done, VV
        },
        e: function(VV) {
          pV = !0, UV = VV
        },
        f: function() {
          try {
            yV || null == xV.return || xV.return()
          } finally {
            if (pV) throw UV
          }
        }
      }
    }

    function rV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function kV(VV, eV) {
      for (var xV = 0; xV < eV.length; xV++) {
        var JV = eV[xV];
        JV.enumerable = JV.enumerable || !1, JV.configurable = !0, "value" in JV && (JV.writable = !0), Object.defineProperty(VV, JV.key, JV)
      }
    }

    function bV(VV, eV) {
      return bV = Object.setPrototypeOf || function(VV, eV) {
        return VV.__proto__ = eV, VV
      }, bV(VV, eV)
    }

    function EV(VV) {
      var eV = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (VV) {
          return !1
        }
      }();
      return function() {
        var xV, YV = jV(VV);
        if (eV) {
          var UV = jV(this).constructor;
          xV = Reflect.construct(YV, arguments, UV)
        } else xV = YV.apply(this, arguments);
        return function(VV, eV) {
          if (eV && ("object" === JV(eV) || "function" === typeof eV)) return eV;
          if (void 0 !== eV) throw new TypeError("Derived constructors may only return object or undefined");
          return BV(VV)
        }(this, xV)
      }
    }

    function BV(VV) {
      if (void 0 === VV) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return VV
    }

    function jV(VV) {
      return jV = Object.setPrototypeOf ? Object.getPrototypeOf : function(VV) {
        return VV.__proto__ || Object.getPrototypeOf(VV)
      }, jV(VV)
    }

    function qV(VV, eV, xV) {
      return eV in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }
    var tV = {
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
      FV = function(VV) {
        ! function(VV, eV) {
          if ("function" !== typeof eV && null !== eV) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(VV, "prototype", {
            value: Object.create(eV && eV.prototype, {
              constructor: {
                value: VV,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), eV && bV(VV, eV)
        }(yV, VV);
        var eV, xV, JV, UV = EV(yV);

        function yV(VV, eV) {
          var xV;
          return function(VV, eV) {
            if (!(VV instanceof eV)) throw new TypeError("Cannot call a class as a function")
          }(this, yV), qV(BV(xV = UV.call(this, VV, eV)), "handleFormat", (function(VV) {
            var eV = xV.props.format;
            return eV ? eV(VV) : VV
          })), qV(BV(xV), "handleUpdate", (function() {
            if (xV.slider) {
              var VV = xV.props.orientation,
                eV = (0, QV.capitalize)(tV.orientation[VV].dimension),
                JV = xV.slider["offset".concat(eV)],
                YV = xV.handle["offset".concat(eV)];
              xV.setState({
                limit: JV - YV,
                grab: YV / 2
              })
            }
          })), qV(BV(xV), "handleStart", (function(VV) {
            var eV = xV.props.onChangeStart;
            document.addEventListener("mousemove", xV.handleDrag), document.addEventListener("mouseup", xV.handleEnd), xV.setState({
              active: !0
            }, (function() {
              eV && eV(VV)
            }))
          })), qV(BV(xV), "handleDrag", (function(VV) {
            VV.stopPropagation();
            var eV = xV.props.onChange,
              JV = VV.target,
              YV = JV.className,
              UV = JV.classList,
              yV = JV.dataset;
            if (eV && "rangeslider__labels" !== YV) {
              var pV = xV.position(VV);
              UV && UV.contains("rangeslider__label-item") && yV.value && (pV = parseFloat(yV.value)), eV && eV(pV, VV)
            }
          })), qV(BV(xV), "handleEnd", (function(VV) {
            var eV = xV.props.onChangeComplete;
            xV.setState({
              active: !1
            }, (function() {
              eV && eV(VV)
            })), document.removeEventListener("mousemove", xV.handleDrag), document.removeEventListener("mouseup", xV.handleEnd)
          })), qV(BV(xV), "handleKeyDown", (function(VV) {
            VV.preventDefault();
            var eV, JV = VV.keyCode,
              YV = xV.props,
              UV = YV.value,
              yV = YV.min,
              pV = YV.max,
              QV = YV.step,
              nV = YV.onChange;
            switch (JV) {
              case 38:
              case 39:
                eV = UV + QV > pV ? pV : UV + QV, nV && nV(eV, VV);
                break;
              case 37:
              case 40:
                eV = UV - QV < yV ? yV : UV - QV, nV && nV(eV, VV)
            }
          })), qV(BV(xV), "getPositionFromValue", (function(VV) {
            var eV = xV.state.limit,
              JV = xV.props,
              YV = JV.min,
              UV = (VV - YV) / (JV.max - YV);
            return Math.round(UV * eV)
          })), qV(BV(xV), "getValueFromPosition", (function(VV) {
            var eV = xV.state.limit,
              JV = xV.props,
              YV = JV.orientation,
              UV = JV.min,
              yV = JV.max,
              pV = JV.step,
              nV = (0, QV.clamp)(VV, 0, eV) / (eV || 1),
              wV = pV * Math.round(nV * (yV - UV) / pV),
              ZV = "horizontal" === YV ? wV + UV : yV - wV;
            return (0, QV.clamp)(ZV, UV, yV)
          })), qV(BV(xV), "position", (function(VV) {
            var eV = xV.state.grab,
              JV = xV.props,
              YV = JV.orientation,
              UV = JV.reverse,
              yV = xV.slider,
              pV = tV.orientation[YV].coordinate,
              nV = UV ? tV.orientation[YV].reverseDirection : tV.orientation[YV].direction,
              wV = "client".concat((0, QV.capitalize)(pV)),
              ZV = VV.touches ? VV.touches[0][wV] : VV[wV],
              vV = yV.getBoundingClientRect()[nV],
              rV = UV ? vV - ZV - eV : ZV - vV - eV;
            return xV.getValueFromPosition(rV)
          })), qV(BV(xV), "coordinates", (function(VV) {
            var eV = xV.state,
              JV = eV.limit,
              YV = eV.grab,
              UV = xV.props.orientation,
              yV = xV.getValueFromPosition(VV),
              pV = xV.getPositionFromValue(yV),
              QV = "horizontal" === UV ? pV + YV : pV;
            return {
              fill: "horizontal" === UV ? QV : JV - QV,
              handle: QV,
              label: QV
            }
          })), qV(BV(xV), "renderLabels", (function(VV) {
            return (0, nV.jsx)("ul", {
              ref: function(VV) {
                xV.labels = VV
              },
              className: (0, YV.default)("rangeslider__labels"),
              children: VV
            })
          })), xV.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, xV
        }
        return eV = yV, (xV = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new pV.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var VV = this,
              eV = this.props,
              xV = eV.value,
              JV = eV.orientation,
              UV = eV.className,
              yV = eV.tooltip,
              pV = eV.reverse,
              QV = eV.labels,
              wV = eV.min,
              ZV = eV.max,
              rV = eV.handleLabel,
              kV = this.state.active,
              bV = tV.orientation[JV].dimension,
              EV = pV ? tV.orientation[JV].reverseDirection : tV.orientation[JV].direction,
              BV = this.getPositionFromValue(xV),
              jV = this.coordinates(BV),
              FV = qV({}, bV, "".concat(jV.fill, "px")),
              TV = qV({}, EV, "".concat(jV.handle, "px")),
              PV = yV && kV,
              AV = [],
              NV = Object.keys(QV);
            if (NV.length > 0) {
              var XV, MV = vV(NV = NV.sort((function(VV, eV) {
                return pV ? VV - eV : eV - VV
              })));
              try {
                for (MV.s(); !(XV = MV.n()).done;) {
                  var zV = XV.value,
                    GV = this.getPositionFromValue(zV),
                    WV = this.coordinates(GV),
                    RV = qV({}, EV, "".concat(WV.label, "px"));
                  AV.push((0, nV.jsx)("li", {
                    className: (0, YV.default)("rangeslider__label-item"),
                    "data-value": zV,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: RV,
                    children: this.props.labels[zV]
                  }, zV))
                }
              } catch (gV) {
                MV.e(gV)
              } finally {
                MV.f()
              }
            }
            return (0, nV.jsxs)("div", {
              ref: function(eV) {
                VV.slider = eV
              },
              className: (0, YV.default)("rangeslider", "rangeslider-".concat(JV), {
                "rangeslider-reverse": pV
              }, UV),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": wV,
              "aria-valuemax": ZV,
              "aria-valuenow": xV,
              "aria-orientation": JV,
              children: [(0, nV.jsx)("div", {
                className: "rangeslider__fill",
                style: FV
              }), (0, nV.jsxs)("div", {
                ref: function(eV) {
                  VV.handle = eV
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: TV,
                tabIndex: 0,
                children: [PV && (0, nV.jsx)("div", {
                  ref: function(eV) {
                    VV.tooltip = eV
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, nV.jsx)("span", {
                    children: this.handleFormat(xV)
                  })
                }), (0, nV.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: rV
                })]
              }), QV && this.renderLabels(AV)]
            })
          }
        }]) && kV(eV.prototype, xV), JV && kV(eV, JV), Object.defineProperty(eV, "prototype", {
          writable: !1
        }), yV
      }(UV.Component);
    qV(FV, "propTypes", {
      min: yV.default.number,
      max: yV.default.number,
      step: yV.default.number,
      value: yV.default.number,
      orientation: yV.default.string,
      tooltip: yV.default.bool,
      reverse: yV.default.bool,
      labels: yV.default.object,
      handleLabel: yV.default.string,
      format: yV.default.func,
      onChangeStart: yV.default.func,
      onChange: yV.default.func,
      onChangeComplete: yV.default.func
    }), qV(FV, "defaultProps", {
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
    var TV = FV;
    eV.default = TV
  },
  5508: (VV, eV, xV) => {
    var JV;
    eV.e = void 0;
    var YV = ((JV = xV(5517)) && JV.__esModule ? JV : {
      default: JV
    }).default;
    eV.e = YV
  },
  5526: (VV, eV) => {
    Object.defineProperty(eV, "__esModule", {
      value: !0
    }), eV.capitalize = function(VV) {
      return VV.charAt(0).toUpperCase() + VV.substr(1)
    }, eV.clamp = function(VV, eV, xV) {
      return Math.min(Math.max(VV, eV), xV)
    }
  },
  5461: (VV, eV, xV) => {
    var JV = xV(5469);

    function YV() {}

    function UV() {}
    UV.resetWarningCache = YV, VV.exports = function() {
      function VV(VV, eV, xV, YV, UV, yV) {
        if (yV !== JV) {
          var pV = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw pV.name = "Invariant Violation", pV
        }
      }

      function eV() {
        return VV
      }
      VV.isRequired = VV;
      var xV = {
        array: VV,
        bigint: VV,
        bool: VV,
        func: VV,
        number: VV,
        object: VV,
        string: VV,
        symbol: VV,
        any: VV,
        arrayOf: eV,
        element: VV,
        elementType: VV,
        instanceOf: eV,
        node: VV,
        objectOf: eV,
        oneOf: eV,
        oneOfType: eV,
        shape: eV,
        exact: eV,
        checkPropTypes: UV,
        resetWarningCache: YV
      };
      return xV.PropTypes = xV, xV
    }
  },
  5453: (VV, eV, xV) => {
    VV.exports = xV(5461)()
  },
  5469: VV => {
    VV.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5520: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => AV
    });
    var JV = function() {
        if ("undefined" !== typeof Map) return Map;

        function VV(VV, eV) {
          var xV = -1;
          return VV.some((function(VV, JV) {
            return VV[0] === eV && (xV = JV, !0)
          })), xV
        }
        return function() {
          function eV() {
            this.__entries__ = []
          }
          return Object.defineProperty(eV.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), eV.prototype.get = function(eV) {
            var xV = VV(this.__entries__, eV),
              JV = this.__entries__[xV];
            return JV && JV[1]
          }, eV.prototype.set = function(eV, xV) {
            var JV = VV(this.__entries__, eV);
            ~JV ? this.__entries__[JV][1] = xV : this.__entries__.push([eV, xV])
          }, eV.prototype.delete = function(eV) {
            var xV = this.__entries__,
              JV = VV(xV, eV);
            ~JV && xV.splice(JV, 1)
          }, eV.prototype.has = function(eV) {
            return !!~VV(this.__entries__, eV)
          }, eV.prototype.clear = function() {
            this.__entries__.splice(0)
          }, eV.prototype.forEach = function(VV, eV) {
            void 0 === eV && (eV = null);
            for (var xV = 0, JV = this.__entries__; xV < JV.length; xV++) {
              var YV = JV[xV];
              VV.call(eV, YV[1], YV[0])
            }
          }, eV
        }()
      }(),
      YV = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      UV = "undefined" !== typeof xV.g && xV.g.Math === Math ? xV.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      yV = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(UV) : function(VV) {
        return setTimeout((function() {
          return VV(Date.now())
        }), 1e3 / 60)
      };
    var pV = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      QV = "undefined" !== typeof MutationObserver,
      nV = function() {
        function VV() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(VV, eV) {
            var xV = !1,
              JV = !1,
              YV = 0;

            function UV() {
              xV && (xV = !1, VV()), JV && QV()
            }

            function pV() {
              yV(UV)
            }

            function QV() {
              var VV = Date.now();
              if (xV) {
                if (VV - YV < 2) return;
                JV = !0
              } else xV = !0, JV = !1, setTimeout(pV, eV);
              YV = VV
            }
            return QV
          }(this.refresh.bind(this), 20)
        }
        return VV.prototype.addObserver = function(VV) {
          ~this.observers_.indexOf(VV) || this.observers_.push(VV), this.connected_ || this.connect_()
        }, VV.prototype.removeObserver = function(VV) {
          var eV = this.observers_,
            xV = eV.indexOf(VV);
          ~xV && eV.splice(xV, 1), !eV.length && this.connected_ && this.disconnect_()
        }, VV.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, VV.prototype.updateObservers_ = function() {
          var VV = this.observers_.filter((function(VV) {
            return VV.gatherActive(), VV.hasActive()
          }));
          return VV.forEach((function(VV) {
            return VV.broadcastActive()
          })), VV.length > 0
        }, VV.prototype.connect_ = function() {
          YV && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), QV ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, VV.prototype.disconnect_ = function() {
          YV && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, VV.prototype.onTransitionEnd_ = function(VV) {
          var eV = VV.propertyName,
            xV = void 0 === eV ? "" : eV;
          pV.some((function(VV) {
            return !!~xV.indexOf(VV)
          })) && this.refresh()
        }, VV.getInstance = function() {
          return this.instance_ || (this.instance_ = new VV), this.instance_
        }, VV.instance_ = null, VV
      }(),
      wV = function(VV, eV) {
        for (var xV = 0, JV = Object.keys(eV); xV < JV.length; xV++) {
          var YV = JV[xV];
          Object.defineProperty(VV, YV, {
            value: eV[YV],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return VV
      },
      ZV = function(VV) {
        return VV && VV.ownerDocument && VV.ownerDocument.defaultView || UV
      },
      vV = jV(0, 0, 0, 0);

    function rV(VV) {
      return parseFloat(VV) || 0
    }

    function kV(VV) {
      for (var eV = [], xV = 1; xV < arguments.length; xV++) eV[xV - 1] = arguments[xV];
      return eV.reduce((function(eV, xV) {
        return eV + rV(VV["border-" + xV + "-width"])
      }), 0)
    }

    function bV(VV) {
      var eV = VV.clientWidth,
        xV = VV.clientHeight;
      if (!eV && !xV) return vV;
      var JV = ZV(VV).getComputedStyle(VV),
        YV = function(VV) {
          for (var eV = {}, xV = 0, JV = ["top", "right", "bottom", "left"]; xV < JV.length; xV++) {
            var YV = JV[xV],
              UV = VV["padding-" + YV];
            eV[YV] = rV(UV)
          }
          return eV
        }(JV),
        UV = YV.left + YV.right,
        yV = YV.top + YV.bottom,
        pV = rV(JV.width),
        QV = rV(JV.height);
      if ("border-box" === JV.boxSizing && (Math.round(pV + UV) !== eV && (pV -= kV(JV, "left", "right") + UV), Math.round(QV + yV) !== xV && (QV -= kV(JV, "top", "bottom") + yV)), ! function(VV) {
          return VV === ZV(VV).document.documentElement
        }(VV)) {
        var nV = Math.round(pV + UV) - eV,
          wV = Math.round(QV + yV) - xV;
        1 !== Math.abs(nV) && (pV -= nV), 1 !== Math.abs(wV) && (QV -= wV)
      }
      return jV(YV.left, YV.top, pV, QV)
    }
    var EV = "undefined" !== typeof SVGGraphicsElement ? function(VV) {
      return VV instanceof ZV(VV).SVGGraphicsElement
    } : function(VV) {
      return VV instanceof ZV(VV).SVGElement && "function" === typeof VV.getBBox
    };

    function BV(VV) {
      return YV ? EV(VV) ? function(VV) {
        var eV = VV.getBBox();
        return jV(0, 0, eV.width, eV.height)
      }(VV) : bV(VV) : vV
    }

    function jV(VV, eV, xV, JV) {
      return {
        x: VV,
        y: eV,
        width: xV,
        height: JV
      }
    }
    var qV = function() {
        function VV(VV) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = jV(0, 0, 0, 0), this.target = VV
        }
        return VV.prototype.isActive = function() {
          var VV = BV(this.target);
          return this.contentRect_ = VV, VV.width !== this.broadcastWidth || VV.height !== this.broadcastHeight
        }, VV.prototype.broadcastRect = function() {
          var VV = this.contentRect_;
          return this.broadcastWidth = VV.width, this.broadcastHeight = VV.height, VV
        }, VV
      }(),
      tV = function(VV, eV) {
        var xV = function(VV) {
          var eV = VV.x,
            xV = VV.y,
            JV = VV.width,
            YV = VV.height,
            UV = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            yV = Object.create(UV.prototype);
          return wV(yV, {
            x: eV,
            y: xV,
            width: JV,
            height: YV,
            top: xV,
            right: eV + JV,
            bottom: YV + xV,
            left: eV
          }), yV
        }(eV);
        wV(this, {
          target: VV,
          contentRect: xV
        })
      },
      FV = function() {
        function VV(VV, eV, xV) {
          if (this.activeObservations_ = [], this.observations_ = new JV, "function" !== typeof VV) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = VV, this.controller_ = eV, this.callbackCtx_ = xV
        }
        return VV.prototype.observe = function(VV) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(VV instanceof ZV(VV).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var eV = this.observations_;
            eV.has(VV) || (eV.set(VV, new qV(VV)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, VV.prototype.unobserve = function(VV) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(VV instanceof ZV(VV).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var eV = this.observations_;
            eV.has(VV) && (eV.delete(VV), eV.size || this.controller_.removeObserver(this))
          }
        }, VV.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, VV.prototype.gatherActive = function() {
          var VV = this;
          this.clearActive(), this.observations_.forEach((function(eV) {
            eV.isActive() && VV.activeObservations_.push(eV)
          }))
        }, VV.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var VV = this.callbackCtx_,
              eV = this.activeObservations_.map((function(VV) {
                return new tV(VV.target, VV.broadcastRect())
              }));
            this.callback_.call(VV, eV, VV), this.clearActive()
          }
        }, VV.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, VV.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, VV
      }(),
      TV = "undefined" !== typeof WeakMap ? new WeakMap : new JV,
      PV = function VV(eV) {
        if (!(this instanceof VV)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var xV = nV.getInstance(),
          JV = new FV(eV, xV, this);
        TV.set(this, JV)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(VV) {
      PV.prototype[VV] = function() {
        var eV;
        return (eV = TV.get(this))[VV].apply(eV, arguments)
      }
    }));
    const AV = "undefined" !== typeof UV.ResizeObserver ? UV.ResizeObserver : PV
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);