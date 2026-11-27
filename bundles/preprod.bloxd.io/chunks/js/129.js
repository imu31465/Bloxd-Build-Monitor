export const id = 129;
export const ids = [129];
export const modules = {
  5923: (WW, iW, OW) => {
    function mW(WW) {
      return mW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, mW(WW)
    }
    Object.defineProperty(iW, "__esModule", {
      value: !0
    }), iW.default = void 0;
    var EW = ZW(OW(1089)),
      NW = function(WW, iW) {
        if (!iW && WW && WW.__esModule) return WW;
        if (null === WW || "object" !== mW(WW) && "function" !== typeof WW) return {
          default: WW
        };
        var OW = tW(iW);
        if (OW && OW.has(WW)) return OW.get(WW);
        var EW = {},
          NW = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var PW in WW)
          if ("default" !== PW && Object.prototype.hasOwnProperty.call(WW, PW)) {
            var LW = NW ? Object.getOwnPropertyDescriptor(WW, PW) : null;
            LW && (LW.get || LW.set) ? Object.defineProperty(EW, PW, LW) : EW[PW] = WW[PW]
          } EW.default = WW, OW && OW.set(WW, EW);
        return EW
      }(OW(62)),
      PW = ZW(OW(5868)),
      LW = ZW(OW(5925)),
      cW = OW(5934),
      wW = OW(1283);

    function tW(WW) {
      if ("function" !== typeof WeakMap) return null;
      var iW = new WeakMap,
        OW = new WeakMap;
      return (tW = function(WW) {
        return WW ? OW : iW
      })(WW)
    }

    function ZW(WW) {
      return WW && WW.__esModule ? WW : {
        default: WW
      }
    }

    function xW(WW, iW) {
      var OW = "undefined" !== typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
      if (!OW) {
        if (Array.isArray(WW) || (OW = function(WW, iW) {
            if (!WW) return;
            if ("string" === typeof WW) return lW(WW, iW);
            var OW = Object.prototype.toString.call(WW).slice(8, -1);
            "Object" === OW && WW.constructor && (OW = WW.constructor.name);
            if ("Map" === OW || "Set" === OW) return Array.from(WW);
            if ("Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW)) return lW(WW, iW)
          }(WW)) || iW && WW && "number" === typeof WW.length) {
          OW && (WW = OW);
          var mW = 0,
            EW = function() {};
          return {
            s: EW,
            n: function() {
              return mW >= WW.length ? {
                done: !0
              } : {
                done: !1,
                value: WW[mW++]
              }
            },
            e: function(WW) {
              throw WW
            },
            f: EW
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var NW, PW = !0,
        LW = !1;
      return {
        s: function() {
          OW = OW.call(WW)
        },
        n: function() {
          var WW = OW.next();
          return PW = WW.done, WW
        },
        e: function(WW) {
          LW = !0, NW = WW
        },
        f: function() {
          try {
            PW || null == OW.return || OW.return()
          } finally {
            if (LW) throw NW
          }
        }
      }
    }

    function lW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function AW(WW, iW) {
      for (var OW = 0; OW < iW.length; OW++) {
        var mW = iW[OW];
        mW.enumerable = mW.enumerable || !1, mW.configurable = !0, "value" in mW && (mW.writable = !0), Object.defineProperty(WW, mW.key, mW)
      }
    }

    function bW(WW, iW) {
      return bW = Object.setPrototypeOf || function(WW, iW) {
        return WW.__proto__ = iW, WW
      }, bW(WW, iW)
    }

    function jW(WW) {
      var iW = function() {
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
        var OW, EW = kW(WW);
        if (iW) {
          var NW = kW(this).constructor;
          OW = Reflect.construct(EW, arguments, NW)
        } else OW = EW.apply(this, arguments);
        return function(WW, iW) {
          if (iW && ("object" === mW(iW) || "function" === typeof iW)) return iW;
          if (void 0 !== iW) throw new TypeError("Derived constructors may only return object or undefined");
          return UW(WW)
        }(this, OW)
      }
    }

    function UW(WW) {
      if (void 0 === WW) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return WW
    }

    function kW(WW) {
      return kW = Object.setPrototypeOf ? Object.getPrototypeOf : function(WW) {
        return WW.__proto__ || Object.getPrototypeOf(WW)
      }, kW(WW)
    }

    function sW(WW, iW, OW) {
      return iW in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }
    var MW = {
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
      KW = function(WW) {
        ! function(WW, iW) {
          if ("function" !== typeof iW && null !== iW) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(WW, "prototype", {
            value: Object.create(iW && iW.prototype, {
              constructor: {
                value: WW,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), iW && bW(WW, iW)
        }(PW, WW);
        var iW, OW, mW, NW = jW(PW);

        function PW(WW, iW) {
          var OW;
          return function(WW, iW) {
            if (!(WW instanceof iW)) throw new TypeError("Cannot call a class as a function")
          }(this, PW), sW(UW(OW = NW.call(this, WW, iW)), "handleFormat", (function(WW) {
            var iW = OW.props.format;
            return iW ? iW(WW) : WW
          })), sW(UW(OW), "handleUpdate", (function() {
            if (OW.slider) {
              var WW = OW.props.orientation,
                iW = (0, cW.capitalize)(MW.orientation[WW].dimension),
                mW = OW.slider["offset".concat(iW)],
                EW = OW.handle["offset".concat(iW)];
              OW.setState({
                limit: mW - EW,
                grab: EW / 2
              })
            }
          })), sW(UW(OW), "handleStart", (function(WW) {
            var iW = OW.props.onChangeStart;
            document.addEventListener("mousemove", OW.handleDrag), document.addEventListener("mouseup", OW.handleEnd), OW.setState({
              active: !0
            }, (function() {
              iW && iW(WW)
            }))
          })), sW(UW(OW), "handleDrag", (function(WW) {
            WW.stopPropagation();
            var iW = OW.props.onChange,
              mW = WW.target,
              EW = mW.className,
              NW = mW.classList,
              PW = mW.dataset;
            if (iW && "rangeslider__labels" !== EW) {
              var LW = OW.position(WW);
              NW && NW.contains("rangeslider__label-item") && PW.value && (LW = parseFloat(PW.value)), iW && iW(LW, WW)
            }
          })), sW(UW(OW), "handleEnd", (function(WW) {
            var iW = OW.props.onChangeComplete;
            OW.setState({
              active: !1
            }, (function() {
              iW && iW(WW)
            })), document.removeEventListener("mousemove", OW.handleDrag), document.removeEventListener("mouseup", OW.handleEnd)
          })), sW(UW(OW), "handleKeyDown", (function(WW) {
            WW.preventDefault();
            var iW, mW = WW.keyCode,
              EW = OW.props,
              NW = EW.value,
              PW = EW.min,
              LW = EW.max,
              cW = EW.step,
              wW = EW.onChange;
            switch (mW) {
              case 38:
              case 39:
                iW = NW + cW > LW ? LW : NW + cW, wW && wW(iW, WW);
                break;
              case 37:
              case 40:
                iW = NW - cW < PW ? PW : NW - cW, wW && wW(iW, WW)
            }
          })), sW(UW(OW), "getPositionFromValue", (function(WW) {
            var iW = OW.state.limit,
              mW = OW.props,
              EW = mW.min,
              NW = (WW - EW) / (mW.max - EW);
            return Math.round(NW * iW)
          })), sW(UW(OW), "getValueFromPosition", (function(WW) {
            var iW = OW.state.limit,
              mW = OW.props,
              EW = mW.orientation,
              NW = mW.min,
              PW = mW.max,
              LW = mW.step,
              wW = (0, cW.clamp)(WW, 0, iW) / (iW || 1),
              tW = LW * Math.round(wW * (PW - NW) / LW),
              ZW = "horizontal" === EW ? tW + NW : PW - tW;
            return (0, cW.clamp)(ZW, NW, PW)
          })), sW(UW(OW), "position", (function(WW) {
            var iW = OW.state.grab,
              mW = OW.props,
              EW = mW.orientation,
              NW = mW.reverse,
              PW = OW.slider,
              LW = MW.orientation[EW].coordinate,
              wW = NW ? MW.orientation[EW].reverseDirection : MW.orientation[EW].direction,
              tW = "client".concat((0, cW.capitalize)(LW)),
              ZW = WW.touches ? WW.touches[0][tW] : WW[tW],
              xW = PW.getBoundingClientRect()[wW],
              lW = NW ? xW - ZW - iW : ZW - xW - iW;
            return OW.getValueFromPosition(lW)
          })), sW(UW(OW), "coordinates", (function(WW) {
            var iW = OW.state,
              mW = iW.limit,
              EW = iW.grab,
              NW = OW.props.orientation,
              PW = OW.getValueFromPosition(WW),
              LW = OW.getPositionFromValue(PW),
              cW = "horizontal" === NW ? LW + EW : LW;
            return {
              fill: "horizontal" === NW ? cW : mW - cW,
              handle: cW,
              label: cW
            }
          })), sW(UW(OW), "renderLabels", (function(WW) {
            return (0, wW.jsx)("ul", {
              ref: function(WW) {
                OW.labels = WW
              },
              className: (0, EW.default)("rangeslider__labels"),
              children: WW
            })
          })), OW.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, OW
        }
        return iW = PW, (OW = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new LW.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var WW = this,
              iW = this.props,
              OW = iW.value,
              mW = iW.orientation,
              NW = iW.className,
              PW = iW.tooltip,
              LW = iW.reverse,
              cW = iW.labels,
              tW = iW.min,
              ZW = iW.max,
              lW = iW.handleLabel,
              AW = this.state.active,
              bW = MW.orientation[mW].dimension,
              jW = LW ? MW.orientation[mW].reverseDirection : MW.orientation[mW].direction,
              UW = this.getPositionFromValue(OW),
              kW = this.coordinates(UW),
              KW = sW({}, bW, "".concat(kW.fill, "px")),
              SW = sW({}, jW, "".concat(kW.handle, "px")),
              YW = PW && AW,
              yW = [],
              TW = Object.keys(cW);
            if (TW.length > 0) {
              var JW, hW = xW(TW = TW.sort((function(WW, iW) {
                return LW ? WW - iW : iW - WW
              })));
              try {
                for (hW.s(); !(JW = hW.n()).done;) {
                  var HW = JW.value,
                    nW = this.getPositionFromValue(HW),
                    uW = this.coordinates(nW),
                    oW = sW({}, jW, "".concat(uW.label, "px"));
                  yW.push((0, wW.jsx)("li", {
                    className: (0, EW.default)("rangeslider__label-item"),
                    "data-value": HW,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: oW,
                    children: this.props.labels[HW]
                  }, HW))
                }
              } catch (dW) {
                hW.e(dW)
              } finally {
                hW.f()
              }
            }
            return (0, wW.jsxs)("div", {
              ref: function(iW) {
                WW.slider = iW
              },
              className: (0, EW.default)("rangeslider", "rangeslider-".concat(mW), {
                "rangeslider-reverse": LW
              }, NW),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": tW,
              "aria-valuemax": ZW,
              "aria-valuenow": OW,
              "aria-orientation": mW,
              children: [(0, wW.jsx)("div", {
                className: "rangeslider__fill",
                style: KW
              }), (0, wW.jsxs)("div", {
                ref: function(iW) {
                  WW.handle = iW
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: SW,
                tabIndex: 0,
                children: [YW && (0, wW.jsx)("div", {
                  ref: function(iW) {
                    WW.tooltip = iW
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, wW.jsx)("span", {
                    children: this.handleFormat(OW)
                  })
                }), (0, wW.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: lW
                })]
              }), cW && this.renderLabels(yW)]
            })
          }
        }]) && AW(iW.prototype, OW), mW && AW(iW, mW), Object.defineProperty(iW, "prototype", {
          writable: !1
        }), PW
      }(NW.Component);
    sW(KW, "propTypes", {
      min: PW.default.number,
      max: PW.default.number,
      step: PW.default.number,
      value: PW.default.number,
      orientation: PW.default.string,
      tooltip: PW.default.bool,
      reverse: PW.default.bool,
      labels: PW.default.object,
      handleLabel: PW.default.string,
      format: PW.default.func,
      onChangeStart: PW.default.func,
      onChange: PW.default.func,
      onChangeComplete: PW.default.func
    }), sW(KW, "defaultProps", {
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
    var SW = KW;
    iW.default = SW
  },
  5919: (WW, iW, OW) => {
    var mW;
    iW.c = void 0;
    var EW = ((mW = OW(5923)) && mW.__esModule ? mW : {
      default: mW
    }).default;
    iW.c = EW
  },
  5934: (WW, iW) => {
    Object.defineProperty(iW, "__esModule", {
      value: !0
    }), iW.capitalize = function(WW) {
      return WW.charAt(0).toUpperCase() + WW.substr(1)
    }, iW.clamp = function(WW, iW, OW) {
      return Math.min(Math.max(WW, iW), OW)
    }
  },
  5877: (WW, iW, OW) => {
    var mW = OW(5886);

    function EW() {}

    function NW() {}
    NW.resetWarningCache = EW, WW.exports = function() {
      function WW(WW, iW, OW, EW, NW, PW) {
        if (PW !== mW) {
          var LW = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw LW.name = "Invariant Violation", LW
        }
      }

      function iW() {
        return WW
      }
      WW.isRequired = WW;
      var OW = {
        array: WW,
        bigint: WW,
        bool: WW,
        func: WW,
        number: WW,
        object: WW,
        string: WW,
        symbol: WW,
        any: WW,
        arrayOf: iW,
        element: WW,
        elementType: WW,
        instanceOf: iW,
        node: WW,
        objectOf: iW,
        oneOf: iW,
        oneOfType: iW,
        shape: iW,
        exact: iW,
        checkPropTypes: NW,
        resetWarningCache: EW
      };
      return OW.PropTypes = OW, OW
    }
  },
  5868: (WW, iW, OW) => {
    WW.exports = OW(5877)()
  },
  5886: WW => {
    WW.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5925: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => yW
    });
    var mW = function() {
        if ("undefined" !== typeof Map) return Map;

        function WW(WW, iW) {
          var OW = -1;
          return WW.some((function(WW, mW) {
            return WW[0] === iW && (OW = mW, !0)
          })), OW
        }
        return function() {
          function iW() {
            this.__entries__ = []
          }
          return Object.defineProperty(iW.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), iW.prototype.get = function(iW) {
            var OW = WW(this.__entries__, iW),
              mW = this.__entries__[OW];
            return mW && mW[1]
          }, iW.prototype.set = function(iW, OW) {
            var mW = WW(this.__entries__, iW);
            ~mW ? this.__entries__[mW][1] = OW : this.__entries__.push([iW, OW])
          }, iW.prototype.delete = function(iW) {
            var OW = this.__entries__,
              mW = WW(OW, iW);
            ~mW && OW.splice(mW, 1)
          }, iW.prototype.has = function(iW) {
            return !!~WW(this.__entries__, iW)
          }, iW.prototype.clear = function() {
            this.__entries__.splice(0)
          }, iW.prototype.forEach = function(WW, iW) {
            void 0 === iW && (iW = null);
            for (var OW = 0, mW = this.__entries__; OW < mW.length; OW++) {
              var EW = mW[OW];
              WW.call(iW, EW[1], EW[0])
            }
          }, iW
        }()
      }(),
      EW = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      NW = "undefined" !== typeof OW.g && OW.g.Math === Math ? OW.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      PW = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(NW) : function(WW) {
        return setTimeout((function() {
          return WW(Date.now())
        }), 1e3 / 60)
      };
    var LW = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      cW = "undefined" !== typeof MutationObserver,
      wW = function() {
        function WW() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(WW, iW) {
            var OW = !1,
              mW = !1,
              EW = 0;

            function NW() {
              OW && (OW = !1, WW()), mW && cW()
            }

            function LW() {
              PW(NW)
            }

            function cW() {
              var WW = Date.now();
              if (OW) {
                if (WW - EW < 2) return;
                mW = !0
              } else OW = !0, mW = !1, setTimeout(LW, iW);
              EW = WW
            }
            return cW
          }(this.refresh.bind(this), 20)
        }
        return WW.prototype.addObserver = function(WW) {
          ~this.observers_.indexOf(WW) || this.observers_.push(WW), this.connected_ || this.connect_()
        }, WW.prototype.removeObserver = function(WW) {
          var iW = this.observers_,
            OW = iW.indexOf(WW);
          ~OW && iW.splice(OW, 1), !iW.length && this.connected_ && this.disconnect_()
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
          EW && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), cW ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, WW.prototype.disconnect_ = function() {
          EW && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, WW.prototype.onTransitionEnd_ = function(WW) {
          var iW = WW.propertyName,
            OW = void 0 === iW ? "" : iW;
          LW.some((function(WW) {
            return !!~OW.indexOf(WW)
          })) && this.refresh()
        }, WW.getInstance = function() {
          return this.instance_ || (this.instance_ = new WW), this.instance_
        }, WW.instance_ = null, WW
      }(),
      tW = function(WW, iW) {
        for (var OW = 0, mW = Object.keys(iW); OW < mW.length; OW++) {
          var EW = mW[OW];
          Object.defineProperty(WW, EW, {
            value: iW[EW],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return WW
      },
      ZW = function(WW) {
        return WW && WW.ownerDocument && WW.ownerDocument.defaultView || NW
      },
      xW = kW(0, 0, 0, 0);

    function lW(WW) {
      return parseFloat(WW) || 0
    }

    function AW(WW) {
      for (var iW = [], OW = 1; OW < arguments.length; OW++) iW[OW - 1] = arguments[OW];
      return iW.reduce((function(iW, OW) {
        return iW + lW(WW["border-" + OW + "-width"])
      }), 0)
    }

    function bW(WW) {
      var iW = WW.clientWidth,
        OW = WW.clientHeight;
      if (!iW && !OW) return xW;
      var mW = ZW(WW).getComputedStyle(WW),
        EW = function(WW) {
          for (var iW = {}, OW = 0, mW = ["top", "right", "bottom", "left"]; OW < mW.length; OW++) {
            var EW = mW[OW],
              NW = WW["padding-" + EW];
            iW[EW] = lW(NW)
          }
          return iW
        }(mW),
        NW = EW.left + EW.right,
        PW = EW.top + EW.bottom,
        LW = lW(mW.width),
        cW = lW(mW.height);
      if ("border-box" === mW.boxSizing && (Math.round(LW + NW) !== iW && (LW -= AW(mW, "left", "right") + NW), Math.round(cW + PW) !== OW && (cW -= AW(mW, "top", "bottom") + PW)), ! function(WW) {
          return WW === ZW(WW).document.documentElement
        }(WW)) {
        var wW = Math.round(LW + NW) - iW,
          tW = Math.round(cW + PW) - OW;
        1 !== Math.abs(wW) && (LW -= wW), 1 !== Math.abs(tW) && (cW -= tW)
      }
      return kW(EW.left, EW.top, LW, cW)
    }
    var jW = "undefined" !== typeof SVGGraphicsElement ? function(WW) {
      return WW instanceof ZW(WW).SVGGraphicsElement
    } : function(WW) {
      return WW instanceof ZW(WW).SVGElement && "function" === typeof WW.getBBox
    };

    function UW(WW) {
      return EW ? jW(WW) ? function(WW) {
        var iW = WW.getBBox();
        return kW(0, 0, iW.width, iW.height)
      }(WW) : bW(WW) : xW
    }

    function kW(WW, iW, OW, mW) {
      return {
        x: WW,
        y: iW,
        width: OW,
        height: mW
      }
    }
    var sW = function() {
        function WW(WW) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = kW(0, 0, 0, 0), this.target = WW
        }
        return WW.prototype.isActive = function() {
          var WW = UW(this.target);
          return this.contentRect_ = WW, WW.width !== this.broadcastWidth || WW.height !== this.broadcastHeight
        }, WW.prototype.broadcastRect = function() {
          var WW = this.contentRect_;
          return this.broadcastWidth = WW.width, this.broadcastHeight = WW.height, WW
        }, WW
      }(),
      MW = function(WW, iW) {
        var OW = function(WW) {
          var iW = WW.x,
            OW = WW.y,
            mW = WW.width,
            EW = WW.height,
            NW = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            PW = Object.create(NW.prototype);
          return tW(PW, {
            x: iW,
            y: OW,
            width: mW,
            height: EW,
            top: OW,
            right: iW + mW,
            bottom: EW + OW,
            left: iW
          }), PW
        }(iW);
        tW(this, {
          target: WW,
          contentRect: OW
        })
      },
      KW = function() {
        function WW(WW, iW, OW) {
          if (this.activeObservations_ = [], this.observations_ = new mW, "function" !== typeof WW) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = WW, this.controller_ = iW, this.callbackCtx_ = OW
        }
        return WW.prototype.observe = function(WW) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(WW instanceof ZW(WW).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var iW = this.observations_;
            iW.has(WW) || (iW.set(WW, new sW(WW)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, WW.prototype.unobserve = function(WW) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(WW instanceof ZW(WW).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var iW = this.observations_;
            iW.has(WW) && (iW.delete(WW), iW.size || this.controller_.removeObserver(this))
          }
        }, WW.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, WW.prototype.gatherActive = function() {
          var WW = this;
          this.clearActive(), this.observations_.forEach((function(iW) {
            iW.isActive() && WW.activeObservations_.push(iW)
          }))
        }, WW.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var WW = this.callbackCtx_,
              iW = this.activeObservations_.map((function(WW) {
                return new MW(WW.target, WW.broadcastRect())
              }));
            this.callback_.call(WW, iW, WW), this.clearActive()
          }
        }, WW.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, WW.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, WW
      }(),
      SW = "undefined" !== typeof WeakMap ? new WeakMap : new mW,
      YW = function WW(iW) {
        if (!(this instanceof WW)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var OW = wW.getInstance(),
          mW = new KW(iW, OW, this);
        SW.set(this, mW)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(WW) {
      YW.prototype[WW] = function() {
        var iW;
        return (iW = SW.get(this))[WW].apply(iW, arguments)
      }
    }));
    const yW = "undefined" !== typeof NW.ResizeObserver ? NW.ResizeObserver : YW
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);