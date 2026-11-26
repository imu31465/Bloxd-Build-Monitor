export const id = 121;
export const ids = [121];
export const modules = {
  5489: (HH, BH, LH) => {
    function AH(HH) {
      return AH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, AH(HH)
    }
    Object.defineProperty(BH, "__esModule", {
      value: !0
    }), BH.default = void 0;
    var rH = XH(LH(1038)),
      SH = function(HH, BH) {
        if (!BH && HH && HH.__esModule) return HH;
        if (null === HH || "object" !== AH(HH) && "function" !== typeof HH) return {
          default: HH
        };
        var LH = EH(BH);
        if (LH && LH.has(HH)) return LH.get(HH);
        var rH = {},
          SH = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var hH in HH)
          if ("default" !== hH && Object.prototype.hasOwnProperty.call(HH, hH)) {
            var tH = SH ? Object.getOwnPropertyDescriptor(HH, hH) : null;
            tH && (tH.get || tH.set) ? Object.defineProperty(rH, hH, tH) : rH[hH] = HH[hH]
          } rH.default = HH, LH && LH.set(HH, rH);
        return rH
      }(LH(45)),
      hH = XH(LH(5450)),
      tH = XH(LH(5494)),
      zH = LH(5498),
      CH = LH(1225);

    function EH(HH) {
      if ("function" !== typeof WeakMap) return null;
      var BH = new WeakMap,
        LH = new WeakMap;
      return (EH = function(HH) {
        return HH ? LH : BH
      })(HH)
    }

    function XH(HH) {
      return HH && HH.__esModule ? HH : {
        default: HH
      }
    }

    function GH(HH, BH) {
      var LH = "undefined" !== typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
      if (!LH) {
        if (Array.isArray(HH) || (LH = function(HH, BH) {
            if (!HH) return;
            if ("string" === typeof HH) return YH(HH, BH);
            var LH = Object.prototype.toString.call(HH).slice(8, -1);
            "Object" === LH && HH.constructor && (LH = HH.constructor.name);
            if ("Map" === LH || "Set" === LH) return Array.from(HH);
            if ("Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH)) return YH(HH, BH)
          }(HH)) || BH && HH && "number" === typeof HH.length) {
          LH && (HH = LH);
          var AH = 0,
            rH = function() {};
          return {
            s: rH,
            n: function() {
              return AH >= HH.length ? {
                done: !0
              } : {
                done: !1,
                value: HH[AH++]
              }
            },
            e: function(HH) {
              throw HH
            },
            f: rH
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var SH, hH = !0,
        tH = !1;
      return {
        s: function() {
          LH = LH.call(HH)
        },
        n: function() {
          var HH = LH.next();
          return hH = HH.done, HH
        },
        e: function(HH) {
          tH = !0, SH = HH
        },
        f: function() {
          try {
            hH || null == LH.return || LH.return()
          } finally {
            if (tH) throw SH
          }
        }
      }
    }

    function YH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function uH(HH, BH) {
      for (var LH = 0; LH < BH.length; LH++) {
        var AH = BH[LH];
        AH.enumerable = AH.enumerable || !1, AH.configurable = !0, "value" in AH && (AH.writable = !0), Object.defineProperty(HH, AH.key, AH)
      }
    }

    function QH(HH, BH) {
      return QH = Object.setPrototypeOf || function(HH, BH) {
        return HH.__proto__ = BH, HH
      }, QH(HH, BH)
    }

    function WH(HH) {
      var BH = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (HH) {
          return !1
        }
      }();
      return function() {
        var LH, rH = xH(HH);
        if (BH) {
          var SH = xH(this).constructor;
          LH = Reflect.construct(rH, arguments, SH)
        } else LH = rH.apply(this, arguments);
        return function(HH, BH) {
          if (BH && ("object" === AH(BH) || "function" === typeof BH)) return BH;
          if (void 0 !== BH) throw new TypeError("Derived constructors may only return object or undefined");
          return MH(HH)
        }(this, LH)
      }
    }

    function MH(HH) {
      if (void 0 === HH) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return HH
    }

    function xH(HH) {
      return xH = Object.setPrototypeOf ? Object.getPrototypeOf : function(HH) {
        return HH.__proto__ || Object.getPrototypeOf(HH)
      }, xH(HH)
    }

    function vH(HH, BH, LH) {
      return BH in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }
    var PH = {
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
      TH = function(HH) {
        ! function(HH, BH) {
          if ("function" !== typeof BH && null !== BH) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(HH, "prototype", {
            value: Object.create(BH && BH.prototype, {
              constructor: {
                value: HH,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), BH && QH(HH, BH)
        }(hH, HH);
        var BH, LH, AH, SH = WH(hH);

        function hH(HH, BH) {
          var LH;
          return function(HH, BH) {
            if (!(HH instanceof BH)) throw new TypeError("Cannot call a class as a function")
          }(this, hH), vH(MH(LH = SH.call(this, HH, BH)), "handleFormat", (function(HH) {
            var BH = LH.props.format;
            return BH ? BH(HH) : HH
          })), vH(MH(LH), "handleUpdate", (function() {
            if (LH.slider) {
              var HH = LH.props.orientation,
                BH = (0, zH.capitalize)(PH.orientation[HH].dimension),
                AH = LH.slider["offset".concat(BH)],
                rH = LH.handle["offset".concat(BH)];
              LH.setState({
                limit: AH - rH,
                grab: rH / 2
              })
            }
          })), vH(MH(LH), "handleStart", (function(HH) {
            var BH = LH.props.onChangeStart;
            document.addEventListener("mousemove", LH.handleDrag), document.addEventListener("mouseup", LH.handleEnd), LH.setState({
              active: !0
            }, (function() {
              BH && BH(HH)
            }))
          })), vH(MH(LH), "handleDrag", (function(HH) {
            HH.stopPropagation();
            var BH = LH.props.onChange,
              AH = HH.target,
              rH = AH.className,
              SH = AH.classList,
              hH = AH.dataset;
            if (BH && "rangeslider__labels" !== rH) {
              var tH = LH.position(HH);
              SH && SH.contains("rangeslider__label-item") && hH.value && (tH = parseFloat(hH.value)), BH && BH(tH, HH)
            }
          })), vH(MH(LH), "handleEnd", (function(HH) {
            var BH = LH.props.onChangeComplete;
            LH.setState({
              active: !1
            }, (function() {
              BH && BH(HH)
            })), document.removeEventListener("mousemove", LH.handleDrag), document.removeEventListener("mouseup", LH.handleEnd)
          })), vH(MH(LH), "handleKeyDown", (function(HH) {
            HH.preventDefault();
            var BH, AH = HH.keyCode,
              rH = LH.props,
              SH = rH.value,
              hH = rH.min,
              tH = rH.max,
              zH = rH.step,
              CH = rH.onChange;
            switch (AH) {
              case 38:
              case 39:
                BH = SH + zH > tH ? tH : SH + zH, CH && CH(BH, HH);
                break;
              case 37:
              case 40:
                BH = SH - zH < hH ? hH : SH - zH, CH && CH(BH, HH)
            }
          })), vH(MH(LH), "getPositionFromValue", (function(HH) {
            var BH = LH.state.limit,
              AH = LH.props,
              rH = AH.min,
              SH = (HH - rH) / (AH.max - rH);
            return Math.round(SH * BH)
          })), vH(MH(LH), "getValueFromPosition", (function(HH) {
            var BH = LH.state.limit,
              AH = LH.props,
              rH = AH.orientation,
              SH = AH.min,
              hH = AH.max,
              tH = AH.step,
              CH = (0, zH.clamp)(HH, 0, BH) / (BH || 1),
              EH = tH * Math.round(CH * (hH - SH) / tH),
              XH = "horizontal" === rH ? EH + SH : hH - EH;
            return (0, zH.clamp)(XH, SH, hH)
          })), vH(MH(LH), "position", (function(HH) {
            var BH = LH.state.grab,
              AH = LH.props,
              rH = AH.orientation,
              SH = AH.reverse,
              hH = LH.slider,
              tH = PH.orientation[rH].coordinate,
              CH = SH ? PH.orientation[rH].reverseDirection : PH.orientation[rH].direction,
              EH = "client".concat((0, zH.capitalize)(tH)),
              XH = HH.touches ? HH.touches[0][EH] : HH[EH],
              GH = hH.getBoundingClientRect()[CH],
              YH = SH ? GH - XH - BH : XH - GH - BH;
            return LH.getValueFromPosition(YH)
          })), vH(MH(LH), "coordinates", (function(HH) {
            var BH = LH.state,
              AH = BH.limit,
              rH = BH.grab,
              SH = LH.props.orientation,
              hH = LH.getValueFromPosition(HH),
              tH = LH.getPositionFromValue(hH),
              zH = "horizontal" === SH ? tH + rH : tH;
            return {
              fill: "horizontal" === SH ? zH : AH - zH,
              handle: zH,
              label: zH
            }
          })), vH(MH(LH), "renderLabels", (function(HH) {
            return (0, CH.jsx)("ul", {
              ref: function(HH) {
                LH.labels = HH
              },
              className: (0, rH.default)("rangeslider__labels"),
              children: HH
            })
          })), LH.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, LH
        }
        return BH = hH, (LH = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new tH.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var HH = this,
              BH = this.props,
              LH = BH.value,
              AH = BH.orientation,
              SH = BH.className,
              hH = BH.tooltip,
              tH = BH.reverse,
              zH = BH.labels,
              EH = BH.min,
              XH = BH.max,
              YH = BH.handleLabel,
              uH = this.state.active,
              QH = PH.orientation[AH].dimension,
              WH = tH ? PH.orientation[AH].reverseDirection : PH.orientation[AH].direction,
              MH = this.getPositionFromValue(LH),
              xH = this.coordinates(MH),
              TH = vH({}, QH, "".concat(xH.fill, "px")),
              UH = vH({}, WH, "".concat(xH.handle, "px")),
              VH = hH && uH,
              OH = [],
              bH = Object.keys(zH);
            if (bH.length > 0) {
              var kH, mH = GH(bH = bH.sort((function(HH, BH) {
                return tH ? HH - BH : BH - HH
              })));
              try {
                for (mH.s(); !(kH = mH.n()).done;) {
                  var oH = kH.value,
                    IH = this.getPositionFromValue(oH),
                    fH = this.coordinates(IH),
                    lH = vH({}, WH, "".concat(fH.label, "px"));
                  OH.push((0, CH.jsx)("li", {
                    className: (0, rH.default)("rangeslider__label-item"),
                    "data-value": oH,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: lH,
                    children: this.props.labels[oH]
                  }, oH))
                }
              } catch (KH) {
                mH.e(KH)
              } finally {
                mH.f()
              }
            }
            return (0, CH.jsxs)("div", {
              ref: function(BH) {
                HH.slider = BH
              },
              className: (0, rH.default)("rangeslider", "rangeslider-".concat(AH), {
                "rangeslider-reverse": tH
              }, SH),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": EH,
              "aria-valuemax": XH,
              "aria-valuenow": LH,
              "aria-orientation": AH,
              children: [(0, CH.jsx)("div", {
                className: "rangeslider__fill",
                style: TH
              }), (0, CH.jsxs)("div", {
                ref: function(BH) {
                  HH.handle = BH
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: UH,
                tabIndex: 0,
                children: [VH && (0, CH.jsx)("div", {
                  ref: function(BH) {
                    HH.tooltip = BH
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, CH.jsx)("span", {
                    children: this.handleFormat(LH)
                  })
                }), (0, CH.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: YH
                })]
              }), zH && this.renderLabels(OH)]
            })
          }
        }]) && uH(BH.prototype, LH), AH && uH(BH, AH), Object.defineProperty(BH, "prototype", {
          writable: !1
        }), hH
      }(SH.Component);
    vH(TH, "propTypes", {
      min: hH.default.number,
      max: hH.default.number,
      step: hH.default.number,
      value: hH.default.number,
      orientation: hH.default.string,
      tooltip: hH.default.bool,
      reverse: hH.default.bool,
      labels: hH.default.object,
      handleLabel: hH.default.string,
      format: hH.default.func,
      onChangeStart: hH.default.func,
      onChange: hH.default.func,
      onChangeComplete: hH.default.func
    }), vH(TH, "defaultProps", {
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
    var UH = TH;
    BH.default = UH
  },
  5485: (HH, BH, LH) => {
    var AH;
    BH.c = void 0;
    var rH = ((AH = LH(5489)) && AH.__esModule ? AH : {
      default: AH
    }).default;
    BH.c = rH
  },
  5498: (HH, BH) => {
    Object.defineProperty(BH, "__esModule", {
      value: !0
    }), BH.capitalize = function(HH) {
      return HH.charAt(0).toUpperCase() + HH.substr(1)
    }, BH.clamp = function(HH, BH, LH) {
      return Math.min(Math.max(HH, BH), LH)
    }
  },
  5454: (HH, BH, LH) => {
    var AH = LH(5462);

    function rH() {}

    function SH() {}
    SH.resetWarningCache = rH, HH.exports = function() {
      function HH(HH, BH, LH, rH, SH, hH) {
        if (hH !== AH) {
          var tH = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw tH.name = "Invariant Violation", tH
        }
      }

      function BH() {
        return HH
      }
      HH.isRequired = HH;
      var LH = {
        array: HH,
        bigint: HH,
        bool: HH,
        func: HH,
        number: HH,
        object: HH,
        string: HH,
        symbol: HH,
        any: HH,
        arrayOf: BH,
        element: HH,
        elementType: HH,
        instanceOf: BH,
        node: HH,
        objectOf: BH,
        oneOf: BH,
        oneOfType: BH,
        shape: BH,
        exact: BH,
        checkPropTypes: SH,
        resetWarningCache: rH
      };
      return LH.PropTypes = LH, LH
    }
  },
  5450: (HH, BH, LH) => {
    HH.exports = LH(5454)()
  },
  5462: HH => {
    HH.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5494: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => OH
    });
    var AH = function() {
        if ("undefined" !== typeof Map) return Map;

        function HH(HH, BH) {
          var LH = -1;
          return HH.some((function(HH, AH) {
            return HH[0] === BH && (LH = AH, !0)
          })), LH
        }
        return function() {
          function BH() {
            this.__entries__ = []
          }
          return Object.defineProperty(BH.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), BH.prototype.get = function(BH) {
            var LH = HH(this.__entries__, BH),
              AH = this.__entries__[LH];
            return AH && AH[1]
          }, BH.prototype.set = function(BH, LH) {
            var AH = HH(this.__entries__, BH);
            ~AH ? this.__entries__[AH][1] = LH : this.__entries__.push([BH, LH])
          }, BH.prototype.delete = function(BH) {
            var LH = this.__entries__,
              AH = HH(LH, BH);
            ~AH && LH.splice(AH, 1)
          }, BH.prototype.has = function(BH) {
            return !!~HH(this.__entries__, BH)
          }, BH.prototype.clear = function() {
            this.__entries__.splice(0)
          }, BH.prototype.forEach = function(HH, BH) {
            void 0 === BH && (BH = null);
            for (var LH = 0, AH = this.__entries__; LH < AH.length; LH++) {
              var rH = AH[LH];
              HH.call(BH, rH[1], rH[0])
            }
          }, BH
        }()
      }(),
      rH = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      SH = "undefined" !== typeof LH.g && LH.g.Math === Math ? LH.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      hH = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(SH) : function(HH) {
        return setTimeout((function() {
          return HH(Date.now())
        }), 1e3 / 60)
      };
    var tH = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      zH = "undefined" !== typeof MutationObserver,
      CH = function() {
        function HH() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(HH, BH) {
            var LH = !1,
              AH = !1,
              rH = 0;

            function SH() {
              LH && (LH = !1, HH()), AH && zH()
            }

            function tH() {
              hH(SH)
            }

            function zH() {
              var HH = Date.now();
              if (LH) {
                if (HH - rH < 2) return;
                AH = !0
              } else LH = !0, AH = !1, setTimeout(tH, BH);
              rH = HH
            }
            return zH
          }(this.refresh.bind(this), 20)
        }
        return HH.prototype.addObserver = function(HH) {
          ~this.observers_.indexOf(HH) || this.observers_.push(HH), this.connected_ || this.connect_()
        }, HH.prototype.removeObserver = function(HH) {
          var BH = this.observers_,
            LH = BH.indexOf(HH);
          ~LH && BH.splice(LH, 1), !BH.length && this.connected_ && this.disconnect_()
        }, HH.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, HH.prototype.updateObservers_ = function() {
          var HH = this.observers_.filter((function(HH) {
            return HH.gatherActive(), HH.hasActive()
          }));
          return HH.forEach((function(HH) {
            return HH.broadcastActive()
          })), HH.length > 0
        }, HH.prototype.connect_ = function() {
          rH && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), zH ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, HH.prototype.disconnect_ = function() {
          rH && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, HH.prototype.onTransitionEnd_ = function(HH) {
          var BH = HH.propertyName,
            LH = void 0 === BH ? "" : BH;
          tH.some((function(HH) {
            return !!~LH.indexOf(HH)
          })) && this.refresh()
        }, HH.getInstance = function() {
          return this.instance_ || (this.instance_ = new HH), this.instance_
        }, HH.instance_ = null, HH
      }(),
      EH = function(HH, BH) {
        for (var LH = 0, AH = Object.keys(BH); LH < AH.length; LH++) {
          var rH = AH[LH];
          Object.defineProperty(HH, rH, {
            value: BH[rH],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return HH
      },
      XH = function(HH) {
        return HH && HH.ownerDocument && HH.ownerDocument.defaultView || SH
      },
      GH = xH(0, 0, 0, 0);

    function YH(HH) {
      return parseFloat(HH) || 0
    }

    function uH(HH) {
      for (var BH = [], LH = 1; LH < arguments.length; LH++) BH[LH - 1] = arguments[LH];
      return BH.reduce((function(BH, LH) {
        return BH + YH(HH["border-" + LH + "-width"])
      }), 0)
    }

    function QH(HH) {
      var BH = HH.clientWidth,
        LH = HH.clientHeight;
      if (!BH && !LH) return GH;
      var AH = XH(HH).getComputedStyle(HH),
        rH = function(HH) {
          for (var BH = {}, LH = 0, AH = ["top", "right", "bottom", "left"]; LH < AH.length; LH++) {
            var rH = AH[LH],
              SH = HH["padding-" + rH];
            BH[rH] = YH(SH)
          }
          return BH
        }(AH),
        SH = rH.left + rH.right,
        hH = rH.top + rH.bottom,
        tH = YH(AH.width),
        zH = YH(AH.height);
      if ("border-box" === AH.boxSizing && (Math.round(tH + SH) !== BH && (tH -= uH(AH, "left", "right") + SH), Math.round(zH + hH) !== LH && (zH -= uH(AH, "top", "bottom") + hH)), ! function(HH) {
          return HH === XH(HH).document.documentElement
        }(HH)) {
        var CH = Math.round(tH + SH) - BH,
          EH = Math.round(zH + hH) - LH;
        1 !== Math.abs(CH) && (tH -= CH), 1 !== Math.abs(EH) && (zH -= EH)
      }
      return xH(rH.left, rH.top, tH, zH)
    }
    var WH = "undefined" !== typeof SVGGraphicsElement ? function(HH) {
      return HH instanceof XH(HH).SVGGraphicsElement
    } : function(HH) {
      return HH instanceof XH(HH).SVGElement && "function" === typeof HH.getBBox
    };

    function MH(HH) {
      return rH ? WH(HH) ? function(HH) {
        var BH = HH.getBBox();
        return xH(0, 0, BH.width, BH.height)
      }(HH) : QH(HH) : GH
    }

    function xH(HH, BH, LH, AH) {
      return {
        x: HH,
        y: BH,
        width: LH,
        height: AH
      }
    }
    var vH = function() {
        function HH(HH) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = xH(0, 0, 0, 0), this.target = HH
        }
        return HH.prototype.isActive = function() {
          var HH = MH(this.target);
          return this.contentRect_ = HH, HH.width !== this.broadcastWidth || HH.height !== this.broadcastHeight
        }, HH.prototype.broadcastRect = function() {
          var HH = this.contentRect_;
          return this.broadcastWidth = HH.width, this.broadcastHeight = HH.height, HH
        }, HH
      }(),
      PH = function(HH, BH) {
        var LH = function(HH) {
          var BH = HH.x,
            LH = HH.y,
            AH = HH.width,
            rH = HH.height,
            SH = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            hH = Object.create(SH.prototype);
          return EH(hH, {
            x: BH,
            y: LH,
            width: AH,
            height: rH,
            top: LH,
            right: BH + AH,
            bottom: rH + LH,
            left: BH
          }), hH
        }(BH);
        EH(this, {
          target: HH,
          contentRect: LH
        })
      },
      TH = function() {
        function HH(HH, BH, LH) {
          if (this.activeObservations_ = [], this.observations_ = new AH, "function" !== typeof HH) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = HH, this.controller_ = BH, this.callbackCtx_ = LH
        }
        return HH.prototype.observe = function(HH) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(HH instanceof XH(HH).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var BH = this.observations_;
            BH.has(HH) || (BH.set(HH, new vH(HH)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, HH.prototype.unobserve = function(HH) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(HH instanceof XH(HH).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var BH = this.observations_;
            BH.has(HH) && (BH.delete(HH), BH.size || this.controller_.removeObserver(this))
          }
        }, HH.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, HH.prototype.gatherActive = function() {
          var HH = this;
          this.clearActive(), this.observations_.forEach((function(BH) {
            BH.isActive() && HH.activeObservations_.push(BH)
          }))
        }, HH.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var HH = this.callbackCtx_,
              BH = this.activeObservations_.map((function(HH) {
                return new PH(HH.target, HH.broadcastRect())
              }));
            this.callback_.call(HH, BH, HH), this.clearActive()
          }
        }, HH.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, HH.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, HH
      }(),
      UH = "undefined" !== typeof WeakMap ? new WeakMap : new AH,
      VH = function HH(BH) {
        if (!(this instanceof HH)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var LH = CH.getInstance(),
          AH = new TH(BH, LH, this);
        UH.set(this, AH)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(HH) {
      VH.prototype[HH] = function() {
        var BH;
        return (BH = UH.get(this))[HH].apply(BH, arguments)
      }
    }));
    const OH = "undefined" !== typeof SH.ResizeObserver ? SH.ResizeObserver : VH
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);