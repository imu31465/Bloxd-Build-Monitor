export const id = 90;
export const ids = [90];
export const modules = {
  3977: (WW, RW, MW) => {
    function wW(WW) {
      return wW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, wW(WW)
    }
    Object.defineProperty(RW, "__esModule", {
      value: !0
    }), RW.default = void 0;
    var CW = BW(MW(897)),
      zR = function(WW, RW) {
        if (!RW && WW && WW.__esModule) return WW;
        if (null === WW || "object" !== wW(WW) && "function" !== typeof WW) return {
          default: WW
        };
        var MW = eW(RW);
        if (MW && MW.has(WW)) return MW.get(WW);
        var CW = {},
          zR = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var AW in WW)
          if ("default" !== AW && Object.prototype.hasOwnProperty.call(WW, AW)) {
            var bR = zR ? Object.getOwnPropertyDescriptor(WW, AW) : null;
            bR && (bR.get || bR.set) ? Object.defineProperty(CW, AW, bR) : CW[AW] = WW[AW]
          } CW.default = WW, MW && MW.set(WW, CW);
        return CW
      }(MW(75)),
      AW = BW(MW(3940)),
      bR = BW(MW(3982)),
      yR = MW(3989),
      NW = MW(940);

    function eW(WW) {
      if ("function" !== typeof WeakMap) return null;
      var RW = new WeakMap,
        MW = new WeakMap;
      return (eW = function(WW) {
        return WW ? MW : RW
      })(WW)
    }

    function BW(WW) {
      return WW && WW.__esModule ? WW : {
        default: WW
      }
    }

    function tR(WW, RW) {
      var MW = "undefined" !== typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
      if (!MW) {
        if (Array.isArray(WW) || (MW = function(WW, RW) {
            if (!WW) return;
            if ("string" === typeof WW) return TW(WW, RW);
            var MW = Object.prototype.toString.call(WW).slice(8, -1);
            "Object" === MW && WW.constructor && (MW = WW.constructor.name);
            if ("Map" === MW || "Set" === MW) return Array.from(WW);
            if ("Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW)) return TW(WW, RW)
          }(WW)) || RW && WW && "number" === typeof WW.length) {
          MW && (WW = MW);
          var wW = 0,
            CW = function() {};
          return {
            s: CW,
            n: function() {
              return wW >= WW.length ? {
                done: !0
              } : {
                done: !1,
                value: WW[wW++]
              }
            },
            e: function(WW) {
              throw WW
            },
            f: CW
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var zR, AW = !0,
        bR = !1;
      return {
        s: function() {
          MW = MW.call(WW)
        },
        n: function() {
          var WW = MW.next();
          return AW = WW.done, WW
        },
        e: function(WW) {
          bR = !0, zR = WW
        },
        f: function() {
          try {
            AW || null == MW.return || MW.return()
          } finally {
            if (bR) throw zR
          }
        }
      }
    }

    function TW(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function gR(WW, RW) {
      for (var MW = 0; MW < RW.length; MW++) {
        var wW = RW[MW];
        wW.enumerable = wW.enumerable || !1, wW.configurable = !0, "value" in wW && (wW.writable = !0), Object.defineProperty(WW, wW.key, wW)
      }
    }

    function iR(WW, RW) {
      return iR = Object.setPrototypeOf || function(WW, RW) {
        return WW.__proto__ = RW, WW
      }, iR(WW, RW)
    }

    function YW(WW) {
      var RW = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (WW) {
          return !1
        }
      }();
      return function() {
        var MW, CW = PW(WW);
        if (RW) {
          var zR = PW(this).constructor;
          MW = Reflect.construct(CW, arguments, zR)
        } else MW = CW.apply(this, arguments);
        return function(WW, RW) {
          if (RW && ("object" === wW(RW) || "function" === typeof RW)) return RW;
          if (void 0 !== RW) throw new TypeError("Derived constructors may only return object or undefined");
          return JW(WW)
        }(this, MW)
      }
    }

    function JW(WW) {
      if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return WW
    }

    function PW(WW) {
      return PW = Object.setPrototypeOf ? Object.getPrototypeOf : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, PW(WW)
    }

    function IW(WW, RW, MW) {
      return RW in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }
    var oW = {
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
      lW = function(WW) {
        ! function(WW, RW) {
          if ("function" !== typeof RW && null !== RW) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(WW, "prototype", {
            value: Object.create(RW && RW.prototype, {
              constructor: {
                value: WW,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), RW && iR(WW, RW)
        }(AW, WW);
        var RW, MW, wW, zR = YW(AW);

        function AW(WW, RW) {
          var MW;
          return function(WW, RW) {
            if (!(WW instanceof RW)) throw new TypeError("Cannot call a class as a function")
          }(this, AW), IW(JW(MW = zR.call(this, WW, RW)), "handleFormat", (function(WW) {
            var RW = MW.props.format;
            return RW ? RW(WW) : WW
          })), IW(JW(MW), "handleUpdate", (function() {
            if (MW.slider) {
              var WW = MW.props.orientation,
                RW = (0, yR.capitalize)(oW.orientation[WW].dimension),
                wW = MW.slider["offset".concat(RW)],
                CW = MW.handle["offset".concat(RW)];
              MW.setState({
                limit: wW - CW,
                grab: CW / 2
              })
            }
          })), IW(JW(MW), "handleStart", (function(WW) {
            var RW = MW.props.onChangeStart;
            document.addEventListener("mousemove", MW.handleDrag), document.addEventListener("mouseup", MW.handleEnd), MW.setState({
              active: !0
            }, (function() {
              RW && RW(WW)
            }))
          })), IW(JW(MW), "handleDrag", (function(WW) {
            WW.stopPropagation();
            var RW = MW.props.onChange,
              wW = WW.target,
              CW = wW.className,
              zR = wW.classList,
              AW = wW.dataset;
            if (RW && "rangeslider__labels" !== CW) {
              var bR = MW.position(WW);
              zR && zR.contains("rangeslider__label-item") && AW.value && (bR = parseFloat(AW.value)), RW && RW(bR, WW)
            }
          })), IW(JW(MW), "handleEnd", (function(WW) {
            var RW = MW.props.onChangeComplete;
            MW.setState({
              active: !1
            }, (function() {
              RW && RW(WW)
            })), document.removeEventListener("mousemove", MW.handleDrag), document.removeEventListener("mouseup", MW.handleEnd)
          })), IW(JW(MW), "handleKeyDown", (function(WW) {
            WW.preventDefault();
            var RW, wW = WW.keyCode,
              CW = MW.props,
              zR = CW.value,
              AW = CW.min,
              bR = CW.max,
              yR = CW.step,
              NW = CW.onChange;
            switch (wW) {
              case 38:
              case 39:
                RW = zR + yR > bR ? bR : zR + yR, NW && NW(RW, WW);
                break;
              case 37:
              case 40:
                RW = zR - yR < AW ? AW : zR - yR, NW && NW(RW, WW)
            }
          })), IW(JW(MW), "getPositionFromValue", (function(WW) {
            var RW = MW.state.limit,
              wW = MW.props,
              CW = wW.min,
              zR = (WW - CW) / (wW.max - CW);
            return Math.round(zR * RW)
          })), IW(JW(MW), "getValueFromPosition", (function(WW) {
            var RW = MW.state.limit,
              wW = MW.props,
              CW = wW.orientation,
              zR = wW.min,
              AW = wW.max,
              bR = wW.step,
              NW = (0, yR.clamp)(WW, 0, RW) / (RW || 1),
              eW = bR * Math.round(NW * (AW - zR) / bR),
              BW = "horizontal" === CW ? eW + zR : AW - eW;
            return (0, yR.clamp)(BW, zR, AW)
          })), IW(JW(MW), "position", (function(WW) {
            var RW = MW.state.grab,
              wW = MW.props,
              CW = wW.orientation,
              zR = wW.reverse,
              AW = MW.slider,
              bR = oW.orientation[CW].coordinate,
              NW = zR ? oW.orientation[CW].reverseDirection : oW.orientation[CW].direction,
              eW = "client".concat((0, yR.capitalize)(bR)),
              BW = WW.touches ? WW.touches[0][eW] : WW[eW],
              tR = AW.getBoundingClientRect()[NW],
              TW = zR ? tR - BW - RW : BW - tR - RW;
            return MW.getValueFromPosition(TW)
          })), IW(JW(MW), "coordinates", (function(WW) {
            var RW = MW.state,
              wW = RW.limit,
              CW = RW.grab,
              zR = MW.props.orientation,
              AW = MW.getValueFromPosition(WW),
              bR = MW.getPositionFromValue(AW),
              yR = "horizontal" === zR ? bR + CW : bR;
            return {
              fill: "horizontal" === zR ? yR : wW - yR,
              handle: yR,
              label: yR
            }
          })), IW(JW(MW), "renderLabels", (function(WW) {
            return (0, NW.jsx)("ul", {
              ref: function(WW) {
                MW.labels = WW
              },
              className: (0, CW.default)("rangeslider__labels"),
              children: WW
            })
          })), MW.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, MW
        }
        return RW = AW, (MW = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new bR.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var WW = this,
              RW = this.props,
              MW = RW.value,
              wW = RW.orientation,
              zR = RW.className,
              AW = RW.tooltip,
              bR = RW.reverse,
              yR = RW.labels,
              eW = RW.min,
              BW = RW.max,
              TW = RW.handleLabel,
              gR = this.state.active,
              iR = oW.orientation[wW].dimension,
              YW = bR ? oW.orientation[wW].reverseDirection : oW.orientation[wW].direction,
              JW = this.getPositionFromValue(MW),
              PW = this.coordinates(JW),
              lW = IW({}, iR, "".concat(PW.fill, "px")),
              FW = IW({}, YW, "".concat(PW.handle, "px")),
              fW = AW && gR,
              QW = [],
              rR = Object.keys(yR);
            if (rR.length > 0) {
              var cR, XW = tR(rR = rR.sort((function(WW, RW) {
                return bR ? WW - RW : RW - WW
              })));
              try {
                for (XW.s(); !(cR = XW.n()).done;) {
                  var jR = cR.value,
                    kR = this.getPositionFromValue(jR),
                    aR = this.coordinates(kR),
                    sW = IW({}, YW, "".concat(aR.label, "px"));
                  QW.push((0, NW.jsx)("li", {
                    className: (0, CW.default)("rangeslider__label-item"),
                    "data-value": jR,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: sW,
                    children: this.props.labels[jR]
                  }, jR))
                }
              } catch (dW) {
                XW.e(dW)
              } finally {
                XW.f()
              }
            }
            return (0, NW.jsxs)("div", {
              ref: function(RW) {
                WW.slider = RW
              },
              className: (0, CW.default)("rangeslider", "rangeslider-".concat(wW), {
                "rangeslider-reverse": bR
              }, zR),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": eW,
              "aria-valuemax": BW,
              "aria-valuenow": MW,
              "aria-orientation": wW,
              children: [(0, NW.jsx)("div", {
                className: "rangeslider__fill",
                style: lW
              }), (0, NW.jsxs)("div", {
                ref: function(RW) {
                  WW.handle = RW
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: FW,
                tabIndex: 0,
                children: [fW && (0, NW.jsx)("div", {
                  ref: function(RW) {
                    WW.tooltip = RW
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, NW.jsx)("span", {
                    children: this.handleFormat(MW)
                  })
                }), (0, NW.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: TW
                })]
              }), yR && this.renderLabels(QW)]
            })
          }
        }]) && gR(RW.prototype, MW), wW && gR(RW, wW), Object.defineProperty(RW, "prototype", {
          writable: !1
        }), AW
      }(zR.Component);
    IW(lW, "propTypes", {
      min: AW.default.number,
      max: AW.default.number,
      step: AW.default.number,
      value: AW.default.number,
      orientation: AW.default.string,
      tooltip: AW.default.bool,
      reverse: AW.default.bool,
      labels: AW.default.object,
      handleLabel: AW.default.string,
      format: AW.default.func,
      onChangeStart: AW.default.func,
      onChange: AW.default.func,
      onChangeComplete: AW.default.func
    }), IW(lW, "defaultProps", {
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
    var FW = lW;
    RW.default = FW
  },
  3974: (WW, RW, MW) => {
    var wW;
    RW.e = void 0;
    var CW = ((wW = MW(3977)) && wW.__esModule ? wW : {
      default: wW
    }).default;
    RW.e = CW
  },
  3989: (WW, RW) => {
    Object.defineProperty(RW, "__esModule", {
      value: !0
    }), RW.capitalize = function(WW) {
      return WW.charAt(0).toUpperCase() + WW.substr(1)
    }, RW.clamp = function(WW, RW, MW) {
      return Math.min(Math.max(WW, RW), MW)
    }
  },
  3942: (WW, RW, MW) => {
    var wW = MW(3944);

    function CW() {}

    function zR() {}
    zR.resetWarningCache = CW, WW.exports = function() {
      function WW(WW, RW, MW, CW, zR, AW) {
        if (AW !== wW) {
          var bR = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw bR.name = "Invariant Violation", bR
        }
      }

      function RW() {
        return WW
      }
      WW.isRequired = WW;
      var MW = {
        array: WW,
        bigint: WW,
        bool: WW,
        func: WW,
        number: WW,
        object: WW,
        string: WW,
        symbol: WW,
        any: WW,
        arrayOf: RW,
        element: WW,
        elementType: WW,
        instanceOf: RW,
        node: WW,
        objectOf: RW,
        oneOf: RW,
        oneOfType: RW,
        shape: RW,
        exact: RW,
        checkPropTypes: zR,
        resetWarningCache: CW
      };
      return MW.PropTypes = MW, MW
    }
  },
  3940: (WW, RW, MW) => {
    WW.exports = MW(3942)()
  },
  3944: WW => {
    WW.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  3982: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => QW
    });
    var wW = function() {
        if ("undefined" !== typeof Map) return Map;

        function WW(WW, RW) {
          var MW = -1;
          return WW.some((function(WW, wW) {
            return WW[0] === RW && (MW = wW, !0)
          })), MW
        }
        return function() {
          function RW() {
            this.__entries__ = []
          }
          return Object.defineProperty(RW.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), RW.prototype.get = function(RW) {
            var MW = WW(this.__entries__, RW),
              wW = this.__entries__[MW];
            return wW && wW[1]
          }, RW.prototype.set = function(RW, MW) {
            var wW = WW(this.__entries__, RW);
            ~wW ? this.__entries__[wW][1] = MW : this.__entries__.push([RW, MW])
          }, RW.prototype.delete = function(RW) {
            var MW = this.__entries__,
              wW = WW(MW, RW);
            ~wW && MW.splice(wW, 1)
          }, RW.prototype.has = function(RW) {
            return !!~WW(this.__entries__, RW)
          }, RW.prototype.clear = function() {
            this.__entries__.splice(0)
          }, RW.prototype.forEach = function(WW, RW) {
            void 0 === RW && (RW = null);
            for (var MW = 0, wW = this.__entries__; MW < wW.length; MW++) {
              var CW = wW[MW];
              WW.call(RW, CW[1], CW[0])
            }
          }, RW
        }()
      }(),
      CW = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      zR = "undefined" !== typeof MW.g && MW.g.Math === Math ? MW.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      AW = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(zR) : function(WW) {
        return setTimeout((function() {
          return WW(Date.now())
        }), 1e3 / 60)
      };
    var bR = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      yR = "undefined" !== typeof MutationObserver,
      NW = function() {
        function WW() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(WW, RW) {
            var MW = !1,
              wW = !1,
              CW = 0;

            function zR() {
              MW && (MW = !1, WW()), wW && yR()
            }

            function bR() {
              AW(zR)
            }

            function yR() {
              var WW = Date.now();
              if (MW) {
                if (WW - CW < 2) return;
                wW = !0
              } else MW = !0, wW = !1, setTimeout(bR, RW);
              CW = WW
            }
            return yR
          }(this.refresh.bind(this), 20)
        }
        return WW.prototype.addObserver = function(WW) {
          ~this.observers_.indexOf(WW) || this.observers_.push(WW), this.connected_ || this.connect_()
        }, WW.prototype.removeObserver = function(WW) {
          var RW = this.observers_,
            MW = RW.indexOf(WW);
          ~MW && RW.splice(MW, 1), !RW.length && this.connected_ && this.disconnect_()
        }, WW.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, WW.prototype.updateObservers_ = function() {
          var WW = this.observers_.filter((function(WW) {
            return WW.gatherActive(), WW.hasActive()
          }));
          return WW.forEach((function(WW) {
            return WW.broadcastActive()
          })), WW.length > 0
        }, WW.prototype.connect_ = function() {
          CW && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), yR ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, WW.prototype.disconnect_ = function() {
          CW && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, WW.prototype.onTransitionEnd_ = function(WW) {
          var RW = WW.propertyName,
            MW = void 0 === RW ? "" : RW;
          bR.some((function(WW) {
            return !!~MW.indexOf(WW)
          })) && this.refresh()
        }, WW.getInstance = function() {
          return this.instance_ || (this.instance_ = new WW), this.instance_
        }, WW.instance_ = null, WW
      }(),
      eW = function(WW, RW) {
        for (var MW = 0, wW = Object.keys(RW); MW < wW.length; MW++) {
          var CW = wW[MW];
          Object.defineProperty(WW, CW, {
            value: RW[CW],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return WW
      },
      BW = function(WW) {
        return WW && WW.ownerDocument && WW.ownerDocument.defaultView || zR
      },
      tR = PW(0, 0, 0, 0);

    function TW(WW) {
      return parseFloat(WW) || 0
    }

    function gR(WW) {
      for (var RW = [], MW = 1; MW < arguments.length; MW++) RW[MW - 1] = arguments[MW];
      return RW.reduce((function(RW, MW) {
        return RW + TW(WW["border-" + MW + "-width"])
      }), 0)
    }

    function iR(WW) {
      var RW = WW.clientWidth,
        MW = WW.clientHeight;
      if (!RW && !MW) return tR;
      var wW = BW(WW).getComputedStyle(WW),
        CW = function(WW) {
          for (var RW = {}, MW = 0, wW = ["top", "right", "bottom", "left"]; MW < wW.length; MW++) {
            var CW = wW[MW],
              zR = WW["padding-" + CW];
            RW[CW] = TW(zR)
          }
          return RW
        }(wW),
        zR = CW.left + CW.right,
        AW = CW.top + CW.bottom,
        bR = TW(wW.width),
        yR = TW(wW.height);
      if ("border-box" === wW.boxSizing && (Math.round(bR + zR) !== RW && (bR -= gR(wW, "left", "right") + zR), Math.round(yR + AW) !== MW && (yR -= gR(wW, "top", "bottom") + AW)), ! function(WW) {
          return WW === BW(WW).document.documentElement
        }(WW)) {
        var NW = Math.round(bR + zR) - RW,
          eW = Math.round(yR + AW) - MW;
        1 !== Math.abs(NW) && (bR -= NW), 1 !== Math.abs(eW) && (yR -= eW)
      }
      return PW(CW.left, CW.top, bR, yR)
    }
    var YW = "undefined" !== typeof SVGGraphicsElement ? function(WW) {
      return WW instanceof BW(WW).SVGGraphicsElement
    } : function(WW) {
      return WW instanceof BW(WW).SVGElement && "function" === typeof WW.getBBox
    };

    function JW(WW) {
      return CW ? YW(WW) ? function(WW) {
        var RW = WW.getBBox();
        return PW(0, 0, RW.width, RW.height)
      }(WW) : iR(WW) : tR
    }

    function PW(WW, RW, MW, wW) {
      return {
        x: WW,
        y: RW,
        width: MW,
        height: wW
      }
    }
    var IW = function() {
        function WW(WW) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = PW(0, 0, 0, 0), this.target = WW
        }
        return WW.prototype.isActive = function() {
          var WW = JW(this.target);
          return this.contentRect_ = WW, WW.width !== this.broadcastWidth || WW.height !== this.broadcastHeight
        }, WW.prototype.broadcastRect = function() {
          var WW = this.contentRect_;
          return this.broadcastWidth = WW.width, this.broadcastHeight = WW.height, WW
        }, WW
      }(),
      oW = function(WW, RW) {
        var MW = function(WW) {
          var RW = WW.x,
            MW = WW.y,
            wW = WW.width,
            CW = WW.height,
            zR = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            AW = Object.create(zR.prototype);
          return eW(AW, {
            x: RW,
            y: MW,
            width: wW,
            height: CW,
            top: MW,
            right: RW + wW,
            bottom: CW + MW,
            left: RW
          }), AW
        }(RW);
        eW(this, {
          target: WW,
          contentRect: MW
        })
      },
      lW = function() {
        function WW(WW, RW, MW) {
          if (this.activeObservations_ = [], this.observations_ = new wW, "function" !== typeof WW) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = WW, this.controller_ = RW, this.callbackCtx_ = MW
        }
        return WW.prototype.observe = function(WW) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(WW instanceof BW(WW).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var RW = this.observations_;
            RW.has(WW) || (RW.set(WW, new IW(WW)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, WW.prototype.unobserve = function(WW) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(WW instanceof BW(WW).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var RW = this.observations_;
            RW.has(WW) && (RW.delete(WW), RW.size || this.controller_.removeObserver(this))
          }
        }, WW.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, WW.prototype.gatherActive = function() {
          var WW = this;
          this.clearActive(), this.observations_.forEach((function(RW) {
            RW.isActive() && WW.activeObservations_.push(RW)
          }))
        }, WW.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var WW = this.callbackCtx_,
              RW = this.activeObservations_.map((function(WW) {
                return new oW(WW.target, WW.broadcastRect())
              }));
            this.callback_.call(WW, RW, WW), this.clearActive()
          }
        }, WW.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, WW.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, WW
      }(),
      FW = "undefined" !== typeof WeakMap ? new WeakMap : new wW,
      fW = function WW(RW) {
        if (!(this instanceof WW)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var MW = NW.getInstance(),
          wW = new lW(RW, MW, this);
        FW.set(this, wW)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(WW) {
      fW.prototype[WW] = function() {
        var RW;
        return (RW = FW.get(this))[WW].apply(RW, arguments)
      }
    }));
    const QW = "undefined" !== typeof zR.ResizeObserver ? zR.ResizeObserver : fW
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);