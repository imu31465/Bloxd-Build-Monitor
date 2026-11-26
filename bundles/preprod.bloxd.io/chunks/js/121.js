export const id = 121;
export const ids = [121];
export const modules = {
  5557: (UU, XU, zU) => {
    function cU(UU) {
      return cU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, cU(UU)
    }
    Object.defineProperty(XU, "__esModule", {
      value: !0
    }), XU.default = void 0;
    var yU = YU(zU(1106)),
      QU = function(UU, XU) {
        if (!XU && UU && UU.__esModule) return UU;
        if (null === UU || "object" !== cU(UU) && "function" !== typeof UU) return {
          default: UU
        };
        var zU = EU(XU);
        if (zU && zU.has(UU)) return zU.get(UU);
        var yU = {},
          QU = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var AU in UU)
          if ("default" !== AU && Object.prototype.hasOwnProperty.call(UU, AU)) {
            var FU = QU ? Object.getOwnPropertyDescriptor(UU, AU) : null;
            FU && (FU.get || FU.set) ? Object.defineProperty(yU, AU, FU) : yU[AU] = UU[AU]
          } yU.default = UU, zU && zU.set(UU, yU);
        return yU
      }(zU(61)),
      AU = YU(zU(5499)),
      FU = YU(zU(5566)),
      oU = zU(5573),
      DU = zU(1305);

    function EU(UU) {
      if ("function" !== typeof WeakMap) return null;
      var XU = new WeakMap,
        zU = new WeakMap;
      return (EU = function(UU) {
        return UU ? zU : XU
      })(UU)
    }

    function YU(UU) {
      return UU && UU.__esModule ? UU : {
        default: UU
      }
    }

    function NU(UU, XU) {
      var zU = "undefined" !== typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
      if (!zU) {
        if (Array.isArray(UU) || (zU = function(UU, XU) {
            if (!UU) return;
            if ("string" === typeof UU) return IU(UU, XU);
            var zU = Object.prototype.toString.call(UU).slice(8, -1);
            "Object" === zU && UU.constructor && (zU = UU.constructor.name);
            if ("Map" === zU || "Set" === zU) return Array.from(UU);
            if ("Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU)) return IU(UU, XU)
          }(UU)) || XU && UU && "number" === typeof UU.length) {
          zU && (UU = zU);
          var cU = 0,
            yU = function() {};
          return {
            s: yU,
            n: function() {
              return cU >= UU.length ? {
                done: !0
              } : {
                done: !1,
                value: UU[cU++]
              }
            },
            e: function(UU) {
              throw UU
            },
            f: yU
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var QU, AU = !0,
        FU = !1;
      return {
        s: function() {
          zU = zU.call(UU)
        },
        n: function() {
          var UU = zU.next();
          return AU = UU.done, UU
        },
        e: function(UU) {
          FU = !0, QU = UU
        },
        f: function() {
          try {
            AU || null == zU.return || zU.return()
          } finally {
            if (FU) throw QU
          }
        }
      }
    }

    function IU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function pU(UU, XU) {
      for (var zU = 0; zU < XU.length; zU++) {
        var cU = XU[zU];
        cU.enumerable = cU.enumerable || !1, cU.configurable = !0, "value" in cU && (cU.writable = !0), Object.defineProperty(UU, cU.key, cU)
      }
    }

    function aU(UU, XU) {
      return aU = Object.setPrototypeOf || function(UU, XU) {
        return UU.__proto__ = XU, UU
      }, aU(UU, XU)
    }

    function tU(UU) {
      var XU = function() {
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
        var zU, yU = kU(UU);
        if (XU) {
          var QU = kU(this).constructor;
          zU = Reflect.construct(yU, arguments, QU)
        } else zU = yU.apply(this, arguments);
        return function(UU, XU) {
          if (XU && ("object" === cU(XU) || "function" === typeof XU)) return XU;
          if (void 0 !== XU) throw new TypeError("Derived constructors may only return object or undefined");
          return gU(UU)
        }(this, zU)
      }
    }

    function gU(UU) {
      if (void 0 === UU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return UU
    }

    function kU(UU) {
      return kU = Object.setPrototypeOf ? Object.getPrototypeOf : function(UU) {
        return UU.__proto__ || Object.getPrototypeOf(UU)
      }, kU(UU)
    }

    function GU(UU, XU, zU) {
      return XU in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }
    var BU = {
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
      ZU = function(UU) {
        ! function(UU, XU) {
          if ("function" !== typeof XU && null !== XU) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(UU, "prototype", {
            value: Object.create(XU && XU.prototype, {
              constructor: {
                value: UU,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), XU && aU(UU, XU)
        }(AU, UU);
        var XU, zU, cU, QU = tU(AU);

        function AU(UU, XU) {
          var zU;
          return function(UU, XU) {
            if (!(UU instanceof XU)) throw new TypeError("Cannot call a class as a function")
          }(this, AU), GU(gU(zU = QU.call(this, UU, XU)), "handleFormat", (function(UU) {
            var XU = zU.props.format;
            return XU ? XU(UU) : UU
          })), GU(gU(zU), "handleUpdate", (function() {
            if (zU.slider) {
              var UU = zU.props.orientation,
                XU = (0, oU.capitalize)(BU.orientation[UU].dimension),
                cU = zU.slider["offset".concat(XU)],
                yU = zU.handle["offset".concat(XU)];
              zU.setState({
                limit: cU - yU,
                grab: yU / 2
              })
            }
          })), GU(gU(zU), "handleStart", (function(UU) {
            var XU = zU.props.onChangeStart;
            document.addEventListener("mousemove", zU.handleDrag), document.addEventListener("mouseup", zU.handleEnd), zU.setState({
              active: !0
            }, (function() {
              XU && XU(UU)
            }))
          })), GU(gU(zU), "handleDrag", (function(UU) {
            UU.stopPropagation();
            var XU = zU.props.onChange,
              cU = UU.target,
              yU = cU.className,
              QU = cU.classList,
              AU = cU.dataset;
            if (XU && "rangeslider__labels" !== yU) {
              var FU = zU.position(UU);
              QU && QU.contains("rangeslider__label-item") && AU.value && (FU = parseFloat(AU.value)), XU && XU(FU, UU)
            }
          })), GU(gU(zU), "handleEnd", (function(UU) {
            var XU = zU.props.onChangeComplete;
            zU.setState({
              active: !1
            }, (function() {
              XU && XU(UU)
            })), document.removeEventListener("mousemove", zU.handleDrag), document.removeEventListener("mouseup", zU.handleEnd)
          })), GU(gU(zU), "handleKeyDown", (function(UU) {
            UU.preventDefault();
            var XU, cU = UU.keyCode,
              yU = zU.props,
              QU = yU.value,
              AU = yU.min,
              FU = yU.max,
              oU = yU.step,
              DU = yU.onChange;
            switch (cU) {
              case 38:
              case 39:
                XU = QU + oU > FU ? FU : QU + oU, DU && DU(XU, UU);
                break;
              case 37:
              case 40:
                XU = QU - oU < AU ? AU : QU - oU, DU && DU(XU, UU)
            }
          })), GU(gU(zU), "getPositionFromValue", (function(UU) {
            var XU = zU.state.limit,
              cU = zU.props,
              yU = cU.min,
              QU = (UU - yU) / (cU.max - yU);
            return Math.round(QU * XU)
          })), GU(gU(zU), "getValueFromPosition", (function(UU) {
            var XU = zU.state.limit,
              cU = zU.props,
              yU = cU.orientation,
              QU = cU.min,
              AU = cU.max,
              FU = cU.step,
              DU = (0, oU.clamp)(UU, 0, XU) / (XU || 1),
              EU = FU * Math.round(DU * (AU - QU) / FU),
              YU = "horizontal" === yU ? EU + QU : AU - EU;
            return (0, oU.clamp)(YU, QU, AU)
          })), GU(gU(zU), "position", (function(UU) {
            var XU = zU.state.grab,
              cU = zU.props,
              yU = cU.orientation,
              QU = cU.reverse,
              AU = zU.slider,
              FU = BU.orientation[yU].coordinate,
              DU = QU ? BU.orientation[yU].reverseDirection : BU.orientation[yU].direction,
              EU = "client".concat((0, oU.capitalize)(FU)),
              YU = UU.touches ? UU.touches[0][EU] : UU[EU],
              NU = AU.getBoundingClientRect()[DU],
              IU = QU ? NU - YU - XU : YU - NU - XU;
            return zU.getValueFromPosition(IU)
          })), GU(gU(zU), "coordinates", (function(UU) {
            var XU = zU.state,
              cU = XU.limit,
              yU = XU.grab,
              QU = zU.props.orientation,
              AU = zU.getValueFromPosition(UU),
              FU = zU.getPositionFromValue(AU),
              oU = "horizontal" === QU ? FU + yU : FU;
            return {
              fill: "horizontal" === QU ? oU : cU - oU,
              handle: oU,
              label: oU
            }
          })), GU(gU(zU), "renderLabels", (function(UU) {
            return (0, DU.jsx)("ul", {
              ref: function(UU) {
                zU.labels = UU
              },
              className: (0, yU.default)("rangeslider__labels"),
              children: UU
            })
          })), zU.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, zU
        }
        return XU = AU, (zU = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new FU.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var UU = this,
              XU = this.props,
              zU = XU.value,
              cU = XU.orientation,
              QU = XU.className,
              AU = XU.tooltip,
              FU = XU.reverse,
              oU = XU.labels,
              EU = XU.min,
              YU = XU.max,
              IU = XU.handleLabel,
              pU = this.state.active,
              aU = BU.orientation[cU].dimension,
              tU = FU ? BU.orientation[cU].reverseDirection : BU.orientation[cU].direction,
              gU = this.getPositionFromValue(zU),
              kU = this.coordinates(gU),
              ZU = GU({}, aU, "".concat(kU.fill, "px")),
              RU = GU({}, tU, "".concat(kU.handle, "px")),
              PU = AU && pU,
              WU = [],
              dU = Object.keys(oU);
            if (dU.length > 0) {
              var LU, eU = NU(dU = dU.sort((function(UU, XU) {
                return FU ? UU - XU : XU - UU
              })));
              try {
                for (eU.s(); !(LU = eU.n()).done;) {
                  var CU = LU.value,
                    wU = this.getPositionFromValue(CU),
                    qU = this.coordinates(wU),
                    OU = GU({}, tU, "".concat(qU.label, "px"));
                  WU.push((0, DU.jsx)("li", {
                    className: (0, yU.default)("rangeslider__label-item"),
                    "data-value": CU,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: OU,
                    children: this.props.labels[CU]
                  }, CU))
                }
              } catch (SU) {
                eU.e(SU)
              } finally {
                eU.f()
              }
            }
            return (0, DU.jsxs)("div", {
              ref: function(XU) {
                UU.slider = XU
              },
              className: (0, yU.default)("rangeslider", "rangeslider-".concat(cU), {
                "rangeslider-reverse": FU
              }, QU),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": EU,
              "aria-valuemax": YU,
              "aria-valuenow": zU,
              "aria-orientation": cU,
              children: [(0, DU.jsx)("div", {
                className: "rangeslider__fill",
                style: ZU
              }), (0, DU.jsxs)("div", {
                ref: function(XU) {
                  UU.handle = XU
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: RU,
                tabIndex: 0,
                children: [PU && (0, DU.jsx)("div", {
                  ref: function(XU) {
                    UU.tooltip = XU
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, DU.jsx)("span", {
                    children: this.handleFormat(zU)
                  })
                }), (0, DU.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: IU
                })]
              }), oU && this.renderLabels(WU)]
            })
          }
        }]) && pU(XU.prototype, zU), cU && pU(XU, cU), Object.defineProperty(XU, "prototype", {
          writable: !1
        }), AU
      }(QU.Component);
    GU(ZU, "propTypes", {
      min: AU.default.number,
      max: AU.default.number,
      step: AU.default.number,
      value: AU.default.number,
      orientation: AU.default.string,
      tooltip: AU.default.bool,
      reverse: AU.default.bool,
      labels: AU.default.object,
      handleLabel: AU.default.string,
      format: AU.default.func,
      onChangeStart: AU.default.func,
      onChange: AU.default.func,
      onChangeComplete: AU.default.func
    }), GU(ZU, "defaultProps", {
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
    var RU = ZU;
    XU.default = RU
  },
  5548: (UU, XU, zU) => {
    var cU;
    XU.c = void 0;
    var yU = ((cU = zU(5557)) && cU.__esModule ? cU : {
      default: cU
    }).default;
    XU.c = yU
  },
  5573: (UU, XU) => {
    Object.defineProperty(XU, "__esModule", {
      value: !0
    }), XU.capitalize = function(UU) {
      return UU.charAt(0).toUpperCase() + UU.substr(1)
    }, XU.clamp = function(UU, XU, zU) {
      return Math.min(Math.max(UU, XU), zU)
    }
  },
  5505: (UU, XU, zU) => {
    var cU = zU(5512);

    function yU() {}

    function QU() {}
    QU.resetWarningCache = yU, UU.exports = function() {
      function UU(UU, XU, zU, yU, QU, AU) {
        if (AU !== cU) {
          var FU = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw FU.name = "Invariant Violation", FU
        }
      }

      function XU() {
        return UU
      }
      UU.isRequired = UU;
      var zU = {
        array: UU,
        bigint: UU,
        bool: UU,
        func: UU,
        number: UU,
        object: UU,
        string: UU,
        symbol: UU,
        any: UU,
        arrayOf: XU,
        element: UU,
        elementType: UU,
        instanceOf: XU,
        node: UU,
        objectOf: XU,
        oneOf: XU,
        oneOfType: XU,
        shape: XU,
        exact: XU,
        checkPropTypes: QU,
        resetWarningCache: yU
      };
      return zU.PropTypes = zU, zU
    }
  },
  5499: (UU, XU, zU) => {
    UU.exports = zU(5505)()
  },
  5512: UU => {
    UU.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5566: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => WU
    });
    var cU = function() {
        if ("undefined" !== typeof Map) return Map;

        function UU(UU, XU) {
          var zU = -1;
          return UU.some((function(UU, cU) {
            return UU[0] === XU && (zU = cU, !0)
          })), zU
        }
        return function() {
          function XU() {
            this.__entries__ = []
          }
          return Object.defineProperty(XU.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), XU.prototype.get = function(XU) {
            var zU = UU(this.__entries__, XU),
              cU = this.__entries__[zU];
            return cU && cU[1]
          }, XU.prototype.set = function(XU, zU) {
            var cU = UU(this.__entries__, XU);
            ~cU ? this.__entries__[cU][1] = zU : this.__entries__.push([XU, zU])
          }, XU.prototype.delete = function(XU) {
            var zU = this.__entries__,
              cU = UU(zU, XU);
            ~cU && zU.splice(cU, 1)
          }, XU.prototype.has = function(XU) {
            return !!~UU(this.__entries__, XU)
          }, XU.prototype.clear = function() {
            this.__entries__.splice(0)
          }, XU.prototype.forEach = function(UU, XU) {
            void 0 === XU && (XU = null);
            for (var zU = 0, cU = this.__entries__; zU < cU.length; zU++) {
              var yU = cU[zU];
              UU.call(XU, yU[1], yU[0])
            }
          }, XU
        }()
      }(),
      yU = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      QU = "undefined" !== typeof zU.g && zU.g.Math === Math ? zU.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      AU = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(QU) : function(UU) {
        return setTimeout((function() {
          return UU(Date.now())
        }), 1e3 / 60)
      };
    var FU = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      oU = "undefined" !== typeof MutationObserver,
      DU = function() {
        function UU() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(UU, XU) {
            var zU = !1,
              cU = !1,
              yU = 0;

            function QU() {
              zU && (zU = !1, UU()), cU && oU()
            }

            function FU() {
              AU(QU)
            }

            function oU() {
              var UU = Date.now();
              if (zU) {
                if (UU - yU < 2) return;
                cU = !0
              } else zU = !0, cU = !1, setTimeout(FU, XU);
              yU = UU
            }
            return oU
          }(this.refresh.bind(this), 20)
        }
        return UU.prototype.addObserver = function(UU) {
          ~this.observers_.indexOf(UU) || this.observers_.push(UU), this.connected_ || this.connect_()
        }, UU.prototype.removeObserver = function(UU) {
          var XU = this.observers_,
            zU = XU.indexOf(UU);
          ~zU && XU.splice(zU, 1), !XU.length && this.connected_ && this.disconnect_()
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
          yU && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), oU ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, UU.prototype.disconnect_ = function() {
          yU && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, UU.prototype.onTransitionEnd_ = function(UU) {
          var XU = UU.propertyName,
            zU = void 0 === XU ? "" : XU;
          FU.some((function(UU) {
            return !!~zU.indexOf(UU)
          })) && this.refresh()
        }, UU.getInstance = function() {
          return this.instance_ || (this.instance_ = new UU), this.instance_
        }, UU.instance_ = null, UU
      }(),
      EU = function(UU, XU) {
        for (var zU = 0, cU = Object.keys(XU); zU < cU.length; zU++) {
          var yU = cU[zU];
          Object.defineProperty(UU, yU, {
            value: XU[yU],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return UU
      },
      YU = function(UU) {
        return UU && UU.ownerDocument && UU.ownerDocument.defaultView || QU
      },
      NU = kU(0, 0, 0, 0);

    function IU(UU) {
      return parseFloat(UU) || 0
    }

    function pU(UU) {
      for (var XU = [], zU = 1; zU < arguments.length; zU++) XU[zU - 1] = arguments[zU];
      return XU.reduce((function(XU, zU) {
        return XU + IU(UU["border-" + zU + "-width"])
      }), 0)
    }

    function aU(UU) {
      var XU = UU.clientWidth,
        zU = UU.clientHeight;
      if (!XU && !zU) return NU;
      var cU = YU(UU).getComputedStyle(UU),
        yU = function(UU) {
          for (var XU = {}, zU = 0, cU = ["top", "right", "bottom", "left"]; zU < cU.length; zU++) {
            var yU = cU[zU],
              QU = UU["padding-" + yU];
            XU[yU] = IU(QU)
          }
          return XU
        }(cU),
        QU = yU.left + yU.right,
        AU = yU.top + yU.bottom,
        FU = IU(cU.width),
        oU = IU(cU.height);
      if ("border-box" === cU.boxSizing && (Math.round(FU + QU) !== XU && (FU -= pU(cU, "left", "right") + QU), Math.round(oU + AU) !== zU && (oU -= pU(cU, "top", "bottom") + AU)), ! function(UU) {
          return UU === YU(UU).document.documentElement
        }(UU)) {
        var DU = Math.round(FU + QU) - XU,
          EU = Math.round(oU + AU) - zU;
        1 !== Math.abs(DU) && (FU -= DU), 1 !== Math.abs(EU) && (oU -= EU)
      }
      return kU(yU.left, yU.top, FU, oU)
    }
    var tU = "undefined" !== typeof SVGGraphicsElement ? function(UU) {
      return UU instanceof YU(UU).SVGGraphicsElement
    } : function(UU) {
      return UU instanceof YU(UU).SVGElement && "function" === typeof UU.getBBox
    };

    function gU(UU) {
      return yU ? tU(UU) ? function(UU) {
        var XU = UU.getBBox();
        return kU(0, 0, XU.width, XU.height)
      }(UU) : aU(UU) : NU
    }

    function kU(UU, XU, zU, cU) {
      return {
        x: UU,
        y: XU,
        width: zU,
        height: cU
      }
    }
    var GU = function() {
        function UU(UU) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = kU(0, 0, 0, 0), this.target = UU
        }
        return UU.prototype.isActive = function() {
          var UU = gU(this.target);
          return this.contentRect_ = UU, UU.width !== this.broadcastWidth || UU.height !== this.broadcastHeight
        }, UU.prototype.broadcastRect = function() {
          var UU = this.contentRect_;
          return this.broadcastWidth = UU.width, this.broadcastHeight = UU.height, UU
        }, UU
      }(),
      BU = function(UU, XU) {
        var zU = function(UU) {
          var XU = UU.x,
            zU = UU.y,
            cU = UU.width,
            yU = UU.height,
            QU = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            AU = Object.create(QU.prototype);
          return EU(AU, {
            x: XU,
            y: zU,
            width: cU,
            height: yU,
            top: zU,
            right: XU + cU,
            bottom: yU + zU,
            left: XU
          }), AU
        }(XU);
        EU(this, {
          target: UU,
          contentRect: zU
        })
      },
      ZU = function() {
        function UU(UU, XU, zU) {
          if (this.activeObservations_ = [], this.observations_ = new cU, "function" !== typeof UU) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = UU, this.controller_ = XU, this.callbackCtx_ = zU
        }
        return UU.prototype.observe = function(UU) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(UU instanceof YU(UU).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var XU = this.observations_;
            XU.has(UU) || (XU.set(UU, new GU(UU)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, UU.prototype.unobserve = function(UU) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(UU instanceof YU(UU).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var XU = this.observations_;
            XU.has(UU) && (XU.delete(UU), XU.size || this.controller_.removeObserver(this))
          }
        }, UU.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, UU.prototype.gatherActive = function() {
          var UU = this;
          this.clearActive(), this.observations_.forEach((function(XU) {
            XU.isActive() && UU.activeObservations_.push(XU)
          }))
        }, UU.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var UU = this.callbackCtx_,
              XU = this.activeObservations_.map((function(UU) {
                return new BU(UU.target, UU.broadcastRect())
              }));
            this.callback_.call(UU, XU, UU), this.clearActive()
          }
        }, UU.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, UU.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, UU
      }(),
      RU = "undefined" !== typeof WeakMap ? new WeakMap : new cU,
      PU = function UU(XU) {
        if (!(this instanceof UU)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var zU = DU.getInstance(),
          cU = new ZU(XU, zU, this);
        RU.set(this, cU)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(UU) {
      PU.prototype[UU] = function() {
        var XU;
        return (XU = RU.get(this))[UU].apply(XU, arguments)
      }
    }));
    const WU = "undefined" !== typeof QU.ResizeObserver ? QU.ResizeObserver : PU
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);