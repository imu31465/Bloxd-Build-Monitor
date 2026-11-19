export const id = 107;
export const ids = [107];
export const modules = {
  4592: (YY, rY, DY) => {
    function FY(YY) {
      return FY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(YY) {
        return typeof YY
      } : function(YY) {
        return YY && "function" == typeof Symbol && YY.constructor === Symbol && YY !== Symbol.prototype ? "symbol" : typeof YY
      }, FY(YY)
    }
    Object.defineProperty(rY, "__esModule", {
      value: !0
    }), rY.default = void 0;
    var AY = uY(DY(1092)),
      IY = function(YY, rY) {
        if (!rY && YY && YY.__esModule) return YY;
        if (null === YY || "object" !== FY(YY) && "function" !== typeof YY) return {
          default: YY
        };
        var DY = vY(rY);
        if (DY && DY.has(YY)) return DY.get(YY);
        var AY = {},
          IY = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var RY in YY)
          if ("default" !== RY && Object.prototype.hasOwnProperty.call(YY, RY)) {
            var OY = IY ? Object.getOwnPropertyDescriptor(YY, RY) : null;
            OY && (OY.get || OY.set) ? Object.defineProperty(AY, RY, OY) : AY[RY] = YY[RY]
          } AY.default = YY, DY && DY.set(YY, AY);
        return AY
      }(DY(61)),
      RY = uY(DY(4543)),
      OY = uY(DY(4594)),
      gY = DY(4600),
      aY = DY(1125);

    function vY(YY) {
      if ("function" !== typeof WeakMap) return null;
      var rY = new WeakMap,
        DY = new WeakMap;
      return (vY = function(YY) {
        return YY ? DY : rY
      })(YY)
    }

    function uY(YY) {
      return YY && YY.__esModule ? YY : {
        default: YY
      }
    }

    function sY(YY, rY) {
      var DY = "undefined" !== typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
      if (!DY) {
        if (Array.isArray(YY) || (DY = function(YY, rY) {
            if (!YY) return;
            if ("string" === typeof YY) return iY(YY, rY);
            var DY = Object.prototype.toString.call(YY).slice(8, -1);
            "Object" === DY && YY.constructor && (DY = YY.constructor.name);
            if ("Map" === DY || "Set" === DY) return Array.from(YY);
            if ("Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY)) return iY(YY, rY)
          }(YY)) || rY && YY && "number" === typeof YY.length) {
          DY && (YY = DY);
          var FY = 0,
            AY = function() {};
          return {
            s: AY,
            n: function() {
              return FY >= YY.length ? {
                done: !0
              } : {
                done: !1,
                value: YY[FY++]
              }
            },
            e: function(YY) {
              throw YY
            },
            f: AY
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var IY, RY = !0,
        OY = !1;
      return {
        s: function() {
          DY = DY.call(YY)
        },
        n: function() {
          var YY = DY.next();
          return RY = YY.done, YY
        },
        e: function(YY) {
          OY = !0, IY = YY
        },
        f: function() {
          try {
            RY || null == DY.return || DY.return()
          } finally {
            if (OY) throw IY
          }
        }
      }
    }

    function iY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function yY(YY, rY) {
      for (var DY = 0; DY < rY.length; DY++) {
        var FY = rY[DY];
        FY.enumerable = FY.enumerable || !1, FY.configurable = !0, "value" in FY && (FY.writable = !0), Object.defineProperty(YY, FY.key, FY)
      }
    }

    function QY(YY, rY) {
      return QY = Object.setPrototypeOf || function(YY, rY) {
        return YY.__proto__ = rY, YY
      }, QY(YY, rY)
    }

    function oY(YY) {
      var rY = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (YY) {
          return !1
        }
      }();
      return function() {
        var DY, AY = EY(YY);
        if (rY) {
          var IY = EY(this).constructor;
          DY = Reflect.construct(AY, arguments, IY)
        } else DY = AY.apply(this, arguments);
        return function(YY, rY) {
          if (rY && ("object" === FY(rY) || "function" === typeof rY)) return rY;
          if (void 0 !== rY) throw new TypeError("Derived constructors may only return object or undefined");
          return WY(YY)
        }(this, DY)
      }
    }

    function WY(YY) {
      if (void 0 === YY) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return YY
    }

    function EY(YY) {
      return EY = Object.setPrototypeOf ? Object.getPrototypeOf : function(YY) {
        return YY.__proto__ || Object.getPrototypeOf(YY)
      }, EY(YY)
    }

    function mY(YY, rY, DY) {
      return rY in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }
    var VY = {
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
      SY = function(YY) {
        ! function(YY, rY) {
          if ("function" !== typeof rY && null !== rY) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(YY, "prototype", {
            value: Object.create(rY && rY.prototype, {
              constructor: {
                value: YY,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), rY && QY(YY, rY)
        }(RY, YY);
        var rY, DY, FY, IY = oY(RY);

        function RY(YY, rY) {
          var DY;
          return function(YY, rY) {
            if (!(YY instanceof rY)) throw new TypeError("Cannot call a class as a function")
          }(this, RY), mY(WY(DY = IY.call(this, YY, rY)), "handleFormat", (function(YY) {
            var rY = DY.props.format;
            return rY ? rY(YY) : YY
          })), mY(WY(DY), "handleUpdate", (function() {
            if (DY.slider) {
              var YY = DY.props.orientation,
                rY = (0, gY.capitalize)(VY.orientation[YY].dimension),
                FY = DY.slider["offset".concat(rY)],
                AY = DY.handle["offset".concat(rY)];
              DY.setState({
                limit: FY - AY,
                grab: AY / 2
              })
            }
          })), mY(WY(DY), "handleStart", (function(YY) {
            var rY = DY.props.onChangeStart;
            document.addEventListener("mousemove", DY.handleDrag), document.addEventListener("mouseup", DY.handleEnd), DY.setState({
              active: !0
            }, (function() {
              rY && rY(YY)
            }))
          })), mY(WY(DY), "handleDrag", (function(YY) {
            YY.stopPropagation();
            var rY = DY.props.onChange,
              FY = YY.target,
              AY = FY.className,
              IY = FY.classList,
              RY = FY.dataset;
            if (rY && "rangeslider__labels" !== AY) {
              var OY = DY.position(YY);
              IY && IY.contains("rangeslider__label-item") && RY.value && (OY = parseFloat(RY.value)), rY && rY(OY, YY)
            }
          })), mY(WY(DY), "handleEnd", (function(YY) {
            var rY = DY.props.onChangeComplete;
            DY.setState({
              active: !1
            }, (function() {
              rY && rY(YY)
            })), document.removeEventListener("mousemove", DY.handleDrag), document.removeEventListener("mouseup", DY.handleEnd)
          })), mY(WY(DY), "handleKeyDown", (function(YY) {
            YY.preventDefault();
            var rY, FY = YY.keyCode,
              AY = DY.props,
              IY = AY.value,
              RY = AY.min,
              OY = AY.max,
              gY = AY.step,
              aY = AY.onChange;
            switch (FY) {
              case 38:
              case 39:
                rY = IY + gY > OY ? OY : IY + gY, aY && aY(rY, YY);
                break;
              case 37:
              case 40:
                rY = IY - gY < RY ? RY : IY - gY, aY && aY(rY, YY)
            }
          })), mY(WY(DY), "getPositionFromValue", (function(YY) {
            var rY = DY.state.limit,
              FY = DY.props,
              AY = FY.min,
              IY = (YY - AY) / (FY.max - AY);
            return Math.round(IY * rY)
          })), mY(WY(DY), "getValueFromPosition", (function(YY) {
            var rY = DY.state.limit,
              FY = DY.props,
              AY = FY.orientation,
              IY = FY.min,
              RY = FY.max,
              OY = FY.step,
              aY = (0, gY.clamp)(YY, 0, rY) / (rY || 1),
              vY = OY * Math.round(aY * (RY - IY) / OY),
              uY = "horizontal" === AY ? vY + IY : RY - vY;
            return (0, gY.clamp)(uY, IY, RY)
          })), mY(WY(DY), "position", (function(YY) {
            var rY = DY.state.grab,
              FY = DY.props,
              AY = FY.orientation,
              IY = FY.reverse,
              RY = DY.slider,
              OY = VY.orientation[AY].coordinate,
              aY = IY ? VY.orientation[AY].reverseDirection : VY.orientation[AY].direction,
              vY = "client".concat((0, gY.capitalize)(OY)),
              uY = YY.touches ? YY.touches[0][vY] : YY[vY],
              sY = RY.getBoundingClientRect()[aY],
              iY = IY ? sY - uY - rY : uY - sY - rY;
            return DY.getValueFromPosition(iY)
          })), mY(WY(DY), "coordinates", (function(YY) {
            var rY = DY.state,
              FY = rY.limit,
              AY = rY.grab,
              IY = DY.props.orientation,
              RY = DY.getValueFromPosition(YY),
              OY = DY.getPositionFromValue(RY),
              gY = "horizontal" === IY ? OY + AY : OY;
            return {
              fill: "horizontal" === IY ? gY : FY - gY,
              handle: gY,
              label: gY
            }
          })), mY(WY(DY), "renderLabels", (function(YY) {
            return (0, aY.jsx)("ul", {
              ref: function(YY) {
                DY.labels = YY
              },
              className: (0, AY.default)("rangeslider__labels"),
              children: YY
            })
          })), DY.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, DY
        }
        return rY = RY, (DY = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new OY.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var YY = this,
              rY = this.props,
              DY = rY.value,
              FY = rY.orientation,
              IY = rY.className,
              RY = rY.tooltip,
              OY = rY.reverse,
              gY = rY.labels,
              vY = rY.min,
              uY = rY.max,
              iY = rY.handleLabel,
              yY = this.state.active,
              QY = VY.orientation[FY].dimension,
              oY = OY ? VY.orientation[FY].reverseDirection : VY.orientation[FY].direction,
              WY = this.getPositionFromValue(DY),
              EY = this.coordinates(WY),
              SY = mY({}, QY, "".concat(EY.fill, "px")),
              lY = mY({}, oY, "".concat(EY.handle, "px")),
              TY = RY && yY,
              eY = [],
              NY = Object.keys(gY);
            if (NY.length > 0) {
              var BY, cY = sY(NY = NY.sort((function(YY, rY) {
                return OY ? YY - rY : rY - YY
              })));
              try {
                for (cY.s(); !(BY = cY.n()).done;) {
                  var KY = BY.value,
                    HY = this.getPositionFromValue(KY),
                    zY = this.coordinates(HY),
                    ZY = mY({}, oY, "".concat(zY.label, "px"));
                  eY.push((0, aY.jsx)("li", {
                    className: (0, AY.default)("rangeslider__label-item"),
                    "data-value": KY,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: ZY,
                    children: this.props.labels[KY]
                  }, KY))
                }
              } catch (CY) {
                cY.e(CY)
              } finally {
                cY.f()
              }
            }
            return (0, aY.jsxs)("div", {
              ref: function(rY) {
                YY.slider = rY
              },
              className: (0, AY.default)("rangeslider", "rangeslider-".concat(FY), {
                "rangeslider-reverse": OY
              }, IY),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": vY,
              "aria-valuemax": uY,
              "aria-valuenow": DY,
              "aria-orientation": FY,
              children: [(0, aY.jsx)("div", {
                className: "rangeslider__fill",
                style: SY
              }), (0, aY.jsxs)("div", {
                ref: function(rY) {
                  YY.handle = rY
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: lY,
                tabIndex: 0,
                children: [TY && (0, aY.jsx)("div", {
                  ref: function(rY) {
                    YY.tooltip = rY
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, aY.jsx)("span", {
                    children: this.handleFormat(DY)
                  })
                }), (0, aY.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: iY
                })]
              }), gY && this.renderLabels(eY)]
            })
          }
        }]) && yY(rY.prototype, DY), FY && yY(rY, FY), Object.defineProperty(rY, "prototype", {
          writable: !1
        }), RY
      }(IY.Component);
    mY(SY, "propTypes", {
      min: RY.default.number,
      max: RY.default.number,
      step: RY.default.number,
      value: RY.default.number,
      orientation: RY.default.string,
      tooltip: RY.default.bool,
      reverse: RY.default.bool,
      labels: RY.default.object,
      handleLabel: RY.default.string,
      format: RY.default.func,
      onChangeStart: RY.default.func,
      onChange: RY.default.func,
      onChangeComplete: RY.default.func
    }), mY(SY, "defaultProps", {
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
    var lY = SY;
    rY.default = lY
  },
  4589: (YY, rY, DY) => {
    var FY;
    rY.b = void 0;
    var AY = ((FY = DY(4592)) && FY.__esModule ? FY : {
      default: FY
    }).default;
    rY.b = AY
  },
  4600: (YY, rY) => {
    Object.defineProperty(rY, "__esModule", {
      value: !0
    }), rY.capitalize = function(YY) {
      return YY.charAt(0).toUpperCase() + YY.substr(1)
    }, rY.clamp = function(YY, rY, DY) {
      return Math.min(Math.max(YY, rY), DY)
    }
  },
  4552: (YY, rY, DY) => {
    var FY = DY(4560);

    function AY() {}

    function IY() {}
    IY.resetWarningCache = AY, YY.exports = function() {
      function YY(YY, rY, DY, AY, IY, RY) {
        if (RY !== FY) {
          var OY = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw OY.name = "Invariant Violation", OY
        }
      }

      function rY() {
        return YY
      }
      YY.isRequired = YY;
      var DY = {
        array: YY,
        bigint: YY,
        bool: YY,
        func: YY,
        number: YY,
        object: YY,
        string: YY,
        symbol: YY,
        any: YY,
        arrayOf: rY,
        element: YY,
        elementType: YY,
        instanceOf: rY,
        node: YY,
        objectOf: rY,
        oneOf: rY,
        oneOfType: rY,
        shape: rY,
        exact: rY,
        checkPropTypes: IY,
        resetWarningCache: AY
      };
      return DY.PropTypes = DY, DY
    }
  },
  4543: (YY, rY, DY) => {
    YY.exports = DY(4552)()
  },
  4560: YY => {
    YY.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4594: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => eY
    });
    var FY = function() {
        if ("undefined" !== typeof Map) return Map;

        function YY(YY, rY) {
          var DY = -1;
          return YY.some((function(YY, FY) {
            return YY[0] === rY && (DY = FY, !0)
          })), DY
        }
        return function() {
          function rY() {
            this.__entries__ = []
          }
          return Object.defineProperty(rY.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), rY.prototype.get = function(rY) {
            var DY = YY(this.__entries__, rY),
              FY = this.__entries__[DY];
            return FY && FY[1]
          }, rY.prototype.set = function(rY, DY) {
            var FY = YY(this.__entries__, rY);
            ~FY ? this.__entries__[FY][1] = DY : this.__entries__.push([rY, DY])
          }, rY.prototype.delete = function(rY) {
            var DY = this.__entries__,
              FY = YY(DY, rY);
            ~FY && DY.splice(FY, 1)
          }, rY.prototype.has = function(rY) {
            return !!~YY(this.__entries__, rY)
          }, rY.prototype.clear = function() {
            this.__entries__.splice(0)
          }, rY.prototype.forEach = function(YY, rY) {
            void 0 === rY && (rY = null);
            for (var DY = 0, FY = this.__entries__; DY < FY.length; DY++) {
              var AY = FY[DY];
              YY.call(rY, AY[1], AY[0])
            }
          }, rY
        }()
      }(),
      AY = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      IY = "undefined" !== typeof DY.g && DY.g.Math === Math ? DY.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      RY = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(IY) : function(YY) {
        return setTimeout((function() {
          return YY(Date.now())
        }), 1e3 / 60)
      };
    var OY = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      gY = "undefined" !== typeof MutationObserver,
      aY = function() {
        function YY() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(YY, rY) {
            var DY = !1,
              FY = !1,
              AY = 0;

            function IY() {
              DY && (DY = !1, YY()), FY && gY()
            }

            function OY() {
              RY(IY)
            }

            function gY() {
              var YY = Date.now();
              if (DY) {
                if (YY - AY < 2) return;
                FY = !0
              } else DY = !0, FY = !1, setTimeout(OY, rY);
              AY = YY
            }
            return gY
          }(this.refresh.bind(this), 20)
        }
        return YY.prototype.addObserver = function(YY) {
          ~this.observers_.indexOf(YY) || this.observers_.push(YY), this.connected_ || this.connect_()
        }, YY.prototype.removeObserver = function(YY) {
          var rY = this.observers_,
            DY = rY.indexOf(YY);
          ~DY && rY.splice(DY, 1), !rY.length && this.connected_ && this.disconnect_()
        }, YY.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, YY.prototype.updateObservers_ = function() {
          var YY = this.observers_.filter((function(YY) {
            return YY.gatherActive(), YY.hasActive()
          }));
          return YY.forEach((function(YY) {
            return YY.broadcastActive()
          })), YY.length > 0
        }, YY.prototype.connect_ = function() {
          AY && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), gY ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, YY.prototype.disconnect_ = function() {
          AY && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, YY.prototype.onTransitionEnd_ = function(YY) {
          var rY = YY.propertyName,
            DY = void 0 === rY ? "" : rY;
          OY.some((function(YY) {
            return !!~DY.indexOf(YY)
          })) && this.refresh()
        }, YY.getInstance = function() {
          return this.instance_ || (this.instance_ = new YY), this.instance_
        }, YY.instance_ = null, YY
      }(),
      vY = function(YY, rY) {
        for (var DY = 0, FY = Object.keys(rY); DY < FY.length; DY++) {
          var AY = FY[DY];
          Object.defineProperty(YY, AY, {
            value: rY[AY],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return YY
      },
      uY = function(YY) {
        return YY && YY.ownerDocument && YY.ownerDocument.defaultView || IY
      },
      sY = EY(0, 0, 0, 0);

    function iY(YY) {
      return parseFloat(YY) || 0
    }

    function yY(YY) {
      for (var rY = [], DY = 1; DY < arguments.length; DY++) rY[DY - 1] = arguments[DY];
      return rY.reduce((function(rY, DY) {
        return rY + iY(YY["border-" + DY + "-width"])
      }), 0)
    }

    function QY(YY) {
      var rY = YY.clientWidth,
        DY = YY.clientHeight;
      if (!rY && !DY) return sY;
      var FY = uY(YY).getComputedStyle(YY),
        AY = function(YY) {
          for (var rY = {}, DY = 0, FY = ["top", "right", "bottom", "left"]; DY < FY.length; DY++) {
            var AY = FY[DY],
              IY = YY["padding-" + AY];
            rY[AY] = iY(IY)
          }
          return rY
        }(FY),
        IY = AY.left + AY.right,
        RY = AY.top + AY.bottom,
        OY = iY(FY.width),
        gY = iY(FY.height);
      if ("border-box" === FY.boxSizing && (Math.round(OY + IY) !== rY && (OY -= yY(FY, "left", "right") + IY), Math.round(gY + RY) !== DY && (gY -= yY(FY, "top", "bottom") + RY)), ! function(YY) {
          return YY === uY(YY).document.documentElement
        }(YY)) {
        var aY = Math.round(OY + IY) - rY,
          vY = Math.round(gY + RY) - DY;
        1 !== Math.abs(aY) && (OY -= aY), 1 !== Math.abs(vY) && (gY -= vY)
      }
      return EY(AY.left, AY.top, OY, gY)
    }
    var oY = "undefined" !== typeof SVGGraphicsElement ? function(YY) {
      return YY instanceof uY(YY).SVGGraphicsElement
    } : function(YY) {
      return YY instanceof uY(YY).SVGElement && "function" === typeof YY.getBBox
    };

    function WY(YY) {
      return AY ? oY(YY) ? function(YY) {
        var rY = YY.getBBox();
        return EY(0, 0, rY.width, rY.height)
      }(YY) : QY(YY) : sY
    }

    function EY(YY, rY, DY, FY) {
      return {
        x: YY,
        y: rY,
        width: DY,
        height: FY
      }
    }
    var mY = function() {
        function YY(YY) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = EY(0, 0, 0, 0), this.target = YY
        }
        return YY.prototype.isActive = function() {
          var YY = WY(this.target);
          return this.contentRect_ = YY, YY.width !== this.broadcastWidth || YY.height !== this.broadcastHeight
        }, YY.prototype.broadcastRect = function() {
          var YY = this.contentRect_;
          return this.broadcastWidth = YY.width, this.broadcastHeight = YY.height, YY
        }, YY
      }(),
      VY = function(YY, rY) {
        var DY = function(YY) {
          var rY = YY.x,
            DY = YY.y,
            FY = YY.width,
            AY = YY.height,
            IY = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            RY = Object.create(IY.prototype);
          return vY(RY, {
            x: rY,
            y: DY,
            width: FY,
            height: AY,
            top: DY,
            right: rY + FY,
            bottom: AY + DY,
            left: rY
          }), RY
        }(rY);
        vY(this, {
          target: YY,
          contentRect: DY
        })
      },
      SY = function() {
        function YY(YY, rY, DY) {
          if (this.activeObservations_ = [], this.observations_ = new FY, "function" !== typeof YY) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = YY, this.controller_ = rY, this.callbackCtx_ = DY
        }
        return YY.prototype.observe = function(YY) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(YY instanceof uY(YY).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var rY = this.observations_;
            rY.has(YY) || (rY.set(YY, new mY(YY)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, YY.prototype.unobserve = function(YY) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(YY instanceof uY(YY).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var rY = this.observations_;
            rY.has(YY) && (rY.delete(YY), rY.size || this.controller_.removeObserver(this))
          }
        }, YY.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, YY.prototype.gatherActive = function() {
          var YY = this;
          this.clearActive(), this.observations_.forEach((function(rY) {
            rY.isActive() && YY.activeObservations_.push(rY)
          }))
        }, YY.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var YY = this.callbackCtx_,
              rY = this.activeObservations_.map((function(YY) {
                return new VY(YY.target, YY.broadcastRect())
              }));
            this.callback_.call(YY, rY, YY), this.clearActive()
          }
        }, YY.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, YY.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, YY
      }(),
      lY = "undefined" !== typeof WeakMap ? new WeakMap : new FY,
      TY = function YY(rY) {
        if (!(this instanceof YY)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var DY = aY.getInstance(),
          FY = new SY(rY, DY, this);
        lY.set(this, FY)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(YY) {
      TY.prototype[YY] = function() {
        var rY;
        return (rY = lY.get(this))[YY].apply(rY, arguments)
      }
    }));
    const eY = "undefined" !== typeof IY.ResizeObserver ? IY.ResizeObserver : TY
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);