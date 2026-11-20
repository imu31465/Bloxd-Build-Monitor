export const id = 106;
export const ids = [106];
export const modules = {
  4683: (UU, RU, gU) => {
    function tU(UU) {
      return tU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, tU(UU)
    }
    Object.defineProperty(RU, "__esModule", {
      value: !0
    }), RU.default = void 0;
    var pU = GU(gU(1037)),
      EU = function(UU, RU) {
        if (!RU && UU && UU.__esModule) return UU;
        if (null === UU || "object" !== tU(UU) && "function" !== typeof UU) return {
          default: UU
        };
        var gU = cU(RU);
        if (gU && gU.has(UU)) return gU.get(UU);
        var pU = {},
          EU = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var PU in UU)
          if ("default" !== PU && Object.prototype.hasOwnProperty.call(UU, PU)) {
            var TU = EU ? Object.getOwnPropertyDescriptor(UU, PU) : null;
            TU && (TU.get || TU.set) ? Object.defineProperty(pU, PU, TU) : pU[PU] = UU[PU]
          } pU.default = UU, gU && gU.set(UU, pU);
        return pU
      }(gU(56)),
      PU = GU(gU(4626)),
      TU = GU(gU(4688)),
      qU = gU(4690),
      KU = gU(1090);

    function cU(UU) {
      if ("function" !== typeof WeakMap) return null;
      var RU = new WeakMap,
        gU = new WeakMap;
      return (cU = function(UU) {
        return UU ? gU : RU
      })(UU)
    }

    function GU(UU) {
      return UU && UU.__esModule ? UU : {
        default: UU
      }
    }

    function jU(UU, RU) {
      var gU = "undefined" !== typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
      if (!gU) {
        if (Array.isArray(UU) || (gU = function(UU, RU) {
            if (!UU) return;
            if ("string" === typeof UU) return uU(UU, RU);
            var gU = Object.prototype.toString.call(UU).slice(8, -1);
            "Object" === gU && UU.constructor && (gU = UU.constructor.name);
            if ("Map" === gU || "Set" === gU) return Array.from(UU);
            if ("Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU)) return uU(UU, RU)
          }(UU)) || RU && UU && "number" === typeof UU.length) {
          gU && (UU = gU);
          var tU = 0,
            pU = function() {};
          return {
            s: pU,
            n: function() {
              return tU >= UU.length ? {
                done: !0
              } : {
                done: !1,
                value: UU[tU++]
              }
            },
            e: function(UU) {
              throw UU
            },
            f: pU
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var EU, PU = !0,
        TU = !1;
      return {
        s: function() {
          gU = gU.call(UU)
        },
        n: function() {
          var UU = gU.next();
          return PU = UU.done, UU
        },
        e: function(UU) {
          TU = !0, EU = UU
        },
        f: function() {
          try {
            PU || null == gU.return || gU.return()
          } finally {
            if (TU) throw EU
          }
        }
      }
    }

    function uU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function CU(UU, RU) {
      for (var gU = 0; gU < RU.length; gU++) {
        var tU = RU[gU];
        tU.enumerable = tU.enumerable || !1, tU.configurable = !0, "value" in tU && (tU.writable = !0), Object.defineProperty(UU, tU.key, tU)
      }
    }

    function hU(UU, RU) {
      return hU = Object.setPrototypeOf || function(UU, RU) {
        return UU.__proto__ = RU, UU
      }, hU(UU, RU)
    }

    function QU(UU) {
      var RU = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (UU) {
          return !1
        }
      }();
      return function() {
        var gU, pU = WU(UU);
        if (RU) {
          var EU = WU(this).constructor;
          gU = Reflect.construct(pU, arguments, EU)
        } else gU = pU.apply(this, arguments);
        return function(UU, RU) {
          if (RU && ("object" === tU(RU) || "function" === typeof RU)) return RU;
          if (void 0 !== RU) throw new TypeError("Derived constructors may only return object or undefined");
          return eU(UU)
        }(this, gU)
      }
    }

    function eU(UU) {
      if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return UU
    }

    function WU(UU) {
      return WU = Object.setPrototypeOf ? Object.getPrototypeOf : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, WU(UU)
    }

    function fU(UU, RU, gU) {
      return RU in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }
    var xU = {
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
      mU = function(UU) {
        ! function(UU, RU) {
          if ("function" !== typeof RU && null !== RU) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(UU, "prototype", {
            value: Object.create(RU && RU.prototype, {
              constructor: {
                value: UU,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), RU && hU(UU, RU)
        }(PU, UU);
        var RU, gU, tU, EU = QU(PU);

        function PU(UU, RU) {
          var gU;
          return function(UU, RU) {
            if (!(UU instanceof RU)) throw new TypeError("Cannot call a class as a function")
          }(this, PU), fU(eU(gU = EU.call(this, UU, RU)), "handleFormat", (function(UU) {
            var RU = gU.props.format;
            return RU ? RU(UU) : UU
          })), fU(eU(gU), "handleUpdate", (function() {
            if (gU.slider) {
              var UU = gU.props.orientation,
                RU = (0, qU.capitalize)(xU.orientation[UU].dimension),
                tU = gU.slider["offset".concat(RU)],
                pU = gU.handle["offset".concat(RU)];
              gU.setState({
                limit: tU - pU,
                grab: pU / 2
              })
            }
          })), fU(eU(gU), "handleStart", (function(UU) {
            var RU = gU.props.onChangeStart;
            document.addEventListener("mousemove", gU.handleDrag), document.addEventListener("mouseup", gU.handleEnd), gU.setState({
              active: !0
            }, (function() {
              RU && RU(UU)
            }))
          })), fU(eU(gU), "handleDrag", (function(UU) {
            UU.stopPropagation();
            var RU = gU.props.onChange,
              tU = UU.target,
              pU = tU.className,
              EU = tU.classList,
              PU = tU.dataset;
            if (RU && "rangeslider__labels" !== pU) {
              var TU = gU.position(UU);
              EU && EU.contains("rangeslider__label-item") && PU.value && (TU = parseFloat(PU.value)), RU && RU(TU, UU)
            }
          })), fU(eU(gU), "handleEnd", (function(UU) {
            var RU = gU.props.onChangeComplete;
            gU.setState({
              active: !1
            }, (function() {
              RU && RU(UU)
            })), document.removeEventListener("mousemove", gU.handleDrag), document.removeEventListener("mouseup", gU.handleEnd)
          })), fU(eU(gU), "handleKeyDown", (function(UU) {
            UU.preventDefault();
            var RU, tU = UU.keyCode,
              pU = gU.props,
              EU = pU.value,
              PU = pU.min,
              TU = pU.max,
              qU = pU.step,
              KU = pU.onChange;
            switch (tU) {
              case 38:
              case 39:
                RU = EU + qU > TU ? TU : EU + qU, KU && KU(RU, UU);
                break;
              case 37:
              case 40:
                RU = EU - qU < PU ? PU : EU - qU, KU && KU(RU, UU)
            }
          })), fU(eU(gU), "getPositionFromValue", (function(UU) {
            var RU = gU.state.limit,
              tU = gU.props,
              pU = tU.min,
              EU = (UU - pU) / (tU.max - pU);
            return Math.round(EU * RU)
          })), fU(eU(gU), "getValueFromPosition", (function(UU) {
            var RU = gU.state.limit,
              tU = gU.props,
              pU = tU.orientation,
              EU = tU.min,
              PU = tU.max,
              TU = tU.step,
              KU = (0, qU.clamp)(UU, 0, RU) / (RU || 1),
              cU = TU * Math.round(KU * (PU - EU) / TU),
              GU = "horizontal" === pU ? cU + EU : PU - cU;
            return (0, qU.clamp)(GU, EU, PU)
          })), fU(eU(gU), "position", (function(UU) {
            var RU = gU.state.grab,
              tU = gU.props,
              pU = tU.orientation,
              EU = tU.reverse,
              PU = gU.slider,
              TU = xU.orientation[pU].coordinate,
              KU = EU ? xU.orientation[pU].reverseDirection : xU.orientation[pU].direction,
              cU = "client".concat((0, qU.capitalize)(TU)),
              GU = UU.touches ? UU.touches[0][cU] : UU[cU],
              jU = PU.getBoundingClientRect()[KU],
              uU = EU ? jU - GU - RU : GU - jU - RU;
            return gU.getValueFromPosition(uU)
          })), fU(eU(gU), "coordinates", (function(UU) {
            var RU = gU.state,
              tU = RU.limit,
              pU = RU.grab,
              EU = gU.props.orientation,
              PU = gU.getValueFromPosition(UU),
              TU = gU.getPositionFromValue(PU),
              qU = "horizontal" === EU ? TU + pU : TU;
            return {
              fill: "horizontal" === EU ? qU : tU - qU,
              handle: qU,
              label: qU
            }
          })), fU(eU(gU), "renderLabels", (function(UU) {
            return (0, KU.jsx)("ul", {
              ref: function(UU) {
                gU.labels = UU
              },
              className: (0, pU.default)("rangeslider__labels"),
              children: UU
            })
          })), gU.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, gU
        }
        return RU = PU, (gU = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new TU.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var UU = this,
              RU = this.props,
              gU = RU.value,
              tU = RU.orientation,
              EU = RU.className,
              PU = RU.tooltip,
              TU = RU.reverse,
              qU = RU.labels,
              cU = RU.min,
              GU = RU.max,
              uU = RU.handleLabel,
              CU = this.state.active,
              hU = xU.orientation[tU].dimension,
              QU = TU ? xU.orientation[tU].reverseDirection : xU.orientation[tU].direction,
              eU = this.getPositionFromValue(gU),
              WU = this.coordinates(eU),
              mU = fU({}, hU, "".concat(WU.fill, "px")),
              IU = fU({}, QU, "".concat(WU.handle, "px")),
              JU = PU && CU,
              wU = [],
              nU = Object.keys(qU);
            if (nU.length > 0) {
              var bU, oU = jU(nU = nU.sort((function(UU, RU) {
                return TU ? UU - RU : RU - UU
              })));
              try {
                for (oU.s(); !(bU = oU.n()).done;) {
                  var ZU = bU.value,
                    aU = this.getPositionFromValue(ZU),
                    YU = this.coordinates(aU),
                    BU = fU({}, QU, "".concat(YU.label, "px"));
                  wU.push((0, KU.jsx)("li", {
                    className: (0, pU.default)("rangeslider__label-item"),
                    "data-value": ZU,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: BU,
                    children: this.props.labels[ZU]
                  }, ZU))
                }
              } catch (VU) {
                oU.e(VU)
              } finally {
                oU.f()
              }
            }
            return (0, KU.jsxs)("div", {
              ref: function(RU) {
                UU.slider = RU
              },
              className: (0, pU.default)("rangeslider", "rangeslider-".concat(tU), {
                "rangeslider-reverse": TU
              }, EU),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": cU,
              "aria-valuemax": GU,
              "aria-valuenow": gU,
              "aria-orientation": tU,
              children: [(0, KU.jsx)("div", {
                className: "rangeslider__fill",
                style: mU
              }), (0, KU.jsxs)("div", {
                ref: function(RU) {
                  UU.handle = RU
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: IU,
                tabIndex: 0,
                children: [JU && (0, KU.jsx)("div", {
                  ref: function(RU) {
                    UU.tooltip = RU
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, KU.jsx)("span", {
                    children: this.handleFormat(gU)
                  })
                }), (0, KU.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: uU
                })]
              }), qU && this.renderLabels(wU)]
            })
          }
        }]) && CU(RU.prototype, gU), tU && CU(RU, tU), Object.defineProperty(RU, "prototype", {
          writable: !1
        }), PU
      }(EU.Component);
    fU(mU, "propTypes", {
      min: PU.default.number,
      max: PU.default.number,
      step: PU.default.number,
      value: PU.default.number,
      orientation: PU.default.string,
      tooltip: PU.default.bool,
      reverse: PU.default.bool,
      labels: PU.default.object,
      handleLabel: PU.default.string,
      format: PU.default.func,
      onChangeStart: PU.default.func,
      onChange: PU.default.func,
      onChangeComplete: PU.default.func
    }), fU(mU, "defaultProps", {
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
    var IU = mU;
    RU.default = IU
  },
  4679: (UU, RU, gU) => {
    var tU;
    RU.d = void 0;
    var pU = ((tU = gU(4683)) && tU.__esModule ? tU : {
      default: tU
    }).default;
    RU.d = pU
  },
  4690: (UU, RU) => {
    Object.defineProperty(RU, "__esModule", {
      value: !0
    }), RU.capitalize = function(UU) {
      return UU.charAt(0).toUpperCase() + UU.substr(1)
    }, RU.clamp = function(UU, RU, gU) {
      return Math.min(Math.max(UU, RU), gU)
    }
  },
  4635: (UU, RU, gU) => {
    var tU = gU(4642);

    function pU() {}

    function EU() {}
    EU.resetWarningCache = pU, UU.exports = function() {
      function UU(UU, RU, gU, pU, EU, PU) {
        if (PU !== tU) {
          var TU = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw TU.name = "Invariant Violation", TU
        }
      }

      function RU() {
        return UU
      }
      UU.isRequired = UU;
      var gU = {
        array: UU,
        bigint: UU,
        bool: UU,
        func: UU,
        number: UU,
        object: UU,
        string: UU,
        symbol: UU,
        any: UU,
        arrayOf: RU,
        element: UU,
        elementType: UU,
        instanceOf: RU,
        node: UU,
        objectOf: RU,
        oneOf: RU,
        oneOfType: RU,
        shape: RU,
        exact: RU,
        checkPropTypes: EU,
        resetWarningCache: pU
      };
      return gU.PropTypes = gU, gU
    }
  },
  4626: (UU, RU, gU) => {
    UU.exports = gU(4635)()
  },
  4642: UU => {
    UU.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4688: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => wU
    });
    var tU = function() {
        if ("undefined" !== typeof Map) return Map;

        function UU(UU, RU) {
          var gU = -1;
          return UU.some((function(UU, tU) {
            return UU[0] === RU && (gU = tU, !0)
          })), gU
        }
        return function() {
          function RU() {
            this.__entries__ = []
          }
          return Object.defineProperty(RU.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), RU.prototype.get = function(RU) {
            var gU = UU(this.__entries__, RU),
              tU = this.__entries__[gU];
            return tU && tU[1]
          }, RU.prototype.set = function(RU, gU) {
            var tU = UU(this.__entries__, RU);
            ~tU ? this.__entries__[tU][1] = gU : this.__entries__.push([RU, gU])
          }, RU.prototype.delete = function(RU) {
            var gU = this.__entries__,
              tU = UU(gU, RU);
            ~tU && gU.splice(tU, 1)
          }, RU.prototype.has = function(RU) {
            return !!~UU(this.__entries__, RU)
          }, RU.prototype.clear = function() {
            this.__entries__.splice(0)
          }, RU.prototype.forEach = function(UU, RU) {
            void 0 === RU && (RU = null);
            for (var gU = 0, tU = this.__entries__; gU < tU.length; gU++) {
              var pU = tU[gU];
              UU.call(RU, pU[1], pU[0])
            }
          }, RU
        }()
      }(),
      pU = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      EU = "undefined" !== typeof gU.g && gU.g.Math === Math ? gU.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      PU = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(EU) : function(UU) {
        return setTimeout((function() {
          return UU(Date.now())
        }), 1e3 / 60)
      };
    var TU = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      qU = "undefined" !== typeof MutationObserver,
      KU = function() {
        function UU() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(UU, RU) {
            var gU = !1,
              tU = !1,
              pU = 0;

            function EU() {
              gU && (gU = !1, UU()), tU && qU()
            }

            function TU() {
              PU(EU)
            }

            function qU() {
              var UU = Date.now();
              if (gU) {
                if (UU - pU < 2) return;
                tU = !0
              } else gU = !0, tU = !1, setTimeout(TU, RU);
              pU = UU
            }
            return qU
          }(this.refresh.bind(this), 20)
        }
        return UU.prototype.addObserver = function(UU) {
          ~this.observers_.indexOf(UU) || this.observers_.push(UU), this.connected_ || this.connect_()
        }, UU.prototype.removeObserver = function(UU) {
          var RU = this.observers_,
            gU = RU.indexOf(UU);
          ~gU && RU.splice(gU, 1), !RU.length && this.connected_ && this.disconnect_()
        }, UU.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, UU.prototype.updateObservers_ = function() {
          var UU = this.observers_.filter((function(UU) {
            return UU.gatherActive(), UU.hasActive()
          }));
          return UU.forEach((function(UU) {
            return UU.broadcastActive()
          })), UU.length > 0
        }, UU.prototype.connect_ = function() {
          pU && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), qU ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, UU.prototype.disconnect_ = function() {
          pU && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, UU.prototype.onTransitionEnd_ = function(UU) {
          var RU = UU.propertyName,
            gU = void 0 === RU ? "" : RU;
          TU.some((function(UU) {
            return !!~gU.indexOf(UU)
          })) && this.refresh()
        }, UU.getInstance = function() {
          return this.instance_ || (this.instance_ = new UU), this.instance_
        }, UU.instance_ = null, UU
      }(),
      cU = function(UU, RU) {
        for (var gU = 0, tU = Object.keys(RU); gU < tU.length; gU++) {
          var pU = tU[gU];
          Object.defineProperty(UU, pU, {
            value: RU[pU],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return UU
      },
      GU = function(UU) {
        return UU && UU.ownerDocument && UU.ownerDocument.defaultView || EU
      },
      jU = WU(0, 0, 0, 0);

    function uU(UU) {
      return parseFloat(UU) || 0
    }

    function CU(UU) {
      for (var RU = [], gU = 1; gU < arguments.length; gU++) RU[gU - 1] = arguments[gU];
      return RU.reduce((function(RU, gU) {
        return RU + uU(UU["border-" + gU + "-width"])
      }), 0)
    }

    function hU(UU) {
      var RU = UU.clientWidth,
        gU = UU.clientHeight;
      if (!RU && !gU) return jU;
      var tU = GU(UU).getComputedStyle(UU),
        pU = function(UU) {
          for (var RU = {}, gU = 0, tU = ["top", "right", "bottom", "left"]; gU < tU.length; gU++) {
            var pU = tU[gU],
              EU = UU["padding-" + pU];
            RU[pU] = uU(EU)
          }
          return RU
        }(tU),
        EU = pU.left + pU.right,
        PU = pU.top + pU.bottom,
        TU = uU(tU.width),
        qU = uU(tU.height);
      if ("border-box" === tU.boxSizing && (Math.round(TU + EU) !== RU && (TU -= CU(tU, "left", "right") + EU), Math.round(qU + PU) !== gU && (qU -= CU(tU, "top", "bottom") + PU)), ! function(UU) {
          return UU === GU(UU).document.documentElement
        }(UU)) {
        var KU = Math.round(TU + EU) - RU,
          cU = Math.round(qU + PU) - gU;
        1 !== Math.abs(KU) && (TU -= KU), 1 !== Math.abs(cU) && (qU -= cU)
      }
      return WU(pU.left, pU.top, TU, qU)
    }
    var QU = "undefined" !== typeof SVGGraphicsElement ? function(UU) {
      return UU instanceof GU(UU).SVGGraphicsElement
    } : function(UU) {
      return UU instanceof GU(UU).SVGElement && "function" === typeof UU.getBBox
    };

    function eU(UU) {
      return pU ? QU(UU) ? function(UU) {
        var RU = UU.getBBox();
        return WU(0, 0, RU.width, RU.height)
      }(UU) : hU(UU) : jU
    }

    function WU(UU, RU, gU, tU) {
      return {
        x: UU,
        y: RU,
        width: gU,
        height: tU
      }
    }
    var fU = function() {
        function UU(UU) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = WU(0, 0, 0, 0), this.target = UU
        }
        return UU.prototype.isActive = function() {
          var UU = eU(this.target);
          return this.contentRect_ = UU, UU.width !== this.broadcastWidth || UU.height !== this.broadcastHeight
        }, UU.prototype.broadcastRect = function() {
          var UU = this.contentRect_;
          return this.broadcastWidth = UU.width, this.broadcastHeight = UU.height, UU
        }, UU
      }(),
      xU = function(UU, RU) {
        var gU = function(UU) {
          var RU = UU.x,
            gU = UU.y,
            tU = UU.width,
            pU = UU.height,
            EU = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            PU = Object.create(EU.prototype);
          return cU(PU, {
            x: RU,
            y: gU,
            width: tU,
            height: pU,
            top: gU,
            right: RU + tU,
            bottom: pU + gU,
            left: RU
          }), PU
        }(RU);
        cU(this, {
          target: UU,
          contentRect: gU
        })
      },
      mU = function() {
        function UU(UU, RU, gU) {
          if (this.activeObservations_ = [], this.observations_ = new tU, "function" !== typeof UU) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = UU, this.controller_ = RU, this.callbackCtx_ = gU
        }
        return UU.prototype.observe = function(UU) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(UU instanceof GU(UU).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var RU = this.observations_;
            RU.has(UU) || (RU.set(UU, new fU(UU)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, UU.prototype.unobserve = function(UU) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(UU instanceof GU(UU).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var RU = this.observations_;
            RU.has(UU) && (RU.delete(UU), RU.size || this.controller_.removeObserver(this))
          }
        }, UU.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, UU.prototype.gatherActive = function() {
          var UU = this;
          this.clearActive(), this.observations_.forEach((function(RU) {
            RU.isActive() && UU.activeObservations_.push(RU)
          }))
        }, UU.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var UU = this.callbackCtx_,
              RU = this.activeObservations_.map((function(UU) {
                return new xU(UU.target, UU.broadcastRect())
              }));
            this.callback_.call(UU, RU, UU), this.clearActive()
          }
        }, UU.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, UU.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, UU
      }(),
      IU = "undefined" !== typeof WeakMap ? new WeakMap : new tU,
      JU = function UU(RU) {
        if (!(this instanceof UU)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var gU = KU.getInstance(),
          tU = new mU(RU, gU, this);
        IU.set(this, tU)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(UU) {
      JU.prototype[UU] = function() {
        var RU;
        return (RU = IU.get(this))[UU].apply(RU, arguments)
      }
    }));
    const wU = "undefined" !== typeof EU.ResizeObserver ? EU.ResizeObserver : JU
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);