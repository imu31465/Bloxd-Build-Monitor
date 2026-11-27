export const id = 129;
export const ids = [129];
export const modules = {
  6044: (RR, JR, GR) => {
    function yR(RR) {
      return yR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, yR(RR)
    }
    Object.defineProperty(JR, "__esModule", {
      value: !0
    }), JR.default = void 0;
    var tR = KR(GR(1163)),
      uR = function(RR, JR) {
        if (!JR && RR && RR.__esModule) return RR;
        if (null === RR || "object" !== yR(RR) && "function" !== typeof RR) return {
          default: RR
        };
        var GR = VR(JR);
        if (GR && GR.has(RR)) return GR.get(RR);
        var tR = {},
          uR = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var ZR in RR)
          if ("default" !== ZR && Object.prototype.hasOwnProperty.call(RR, ZR)) {
            var qR = uR ? Object.getOwnPropertyDescriptor(RR, ZR) : null;
            qR && (qR.get || qR.set) ? Object.defineProperty(tR, ZR, qR) : tR[ZR] = RR[ZR]
          } tR.default = RR, GR && GR.set(RR, tR);
        return tR
      }(GR(66)),
      ZR = KR(GR(6008)),
      qR = KR(GR(6047)),
      iR = GR(6055),
      fR = GR(1378);

    function VR(RR) {
      if ("function" !== typeof WeakMap) return null;
      var JR = new WeakMap,
        GR = new WeakMap;
      return (VR = function(RR) {
        return RR ? GR : JR
      })(RR)
    }

    function KR(RR) {
      return RR && RR.__esModule ? RR : {
        default: RR
      }
    }

    function wR(RR, JR) {
      var GR = "undefined" !== typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
      if (!GR) {
        if (Array.isArray(RR) || (GR = function(RR, JR) {
            if (!RR) return;
            if ("string" === typeof RR) return rR(RR, JR);
            var GR = Object.prototype.toString.call(RR).slice(8, -1);
            "Object" === GR && RR.constructor && (GR = RR.constructor.name);
            if ("Map" === GR || "Set" === GR) return Array.from(RR);
            if ("Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR)) return rR(RR, JR)
          }(RR)) || JR && RR && "number" === typeof RR.length) {
          GR && (RR = GR);
          var yR = 0,
            tR = function() {};
          return {
            s: tR,
            n: function() {
              return yR >= RR.length ? {
                done: !0
              } : {
                done: !1,
                value: RR[yR++]
              }
            },
            e: function(RR) {
              throw RR
            },
            f: tR
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var uR, ZR = !0,
        qR = !1;
      return {
        s: function() {
          GR = GR.call(RR)
        },
        n: function() {
          var RR = GR.next();
          return ZR = RR.done, RR
        },
        e: function(RR) {
          qR = !0, uR = RR
        },
        f: function() {
          try {
            ZR || null == GR.return || GR.return()
          } finally {
            if (qR) throw uR
          }
        }
      }
    }

    function rR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function eR(RR, JR) {
      for (var GR = 0; GR < JR.length; GR++) {
        var yR = JR[GR];
        yR.enumerable = yR.enumerable || !1, yR.configurable = !0, "value" in yR && (yR.writable = !0), Object.defineProperty(RR, yR.key, yR)
      }
    }

    function aR(RR, JR) {
      return aR = Object.setPrototypeOf || function(RR, JR) {
        return RR.__proto__ = JR, RR
      }, aR(RR, JR)
    }

    function LR(RR) {
      var JR = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (RR) {
          return !1
        }
      }();
      return function() {
        var GR, tR = UR(RR);
        if (JR) {
          var uR = UR(this).constructor;
          GR = Reflect.construct(tR, arguments, uR)
        } else GR = tR.apply(this, arguments);
        return function(RR, JR) {
          if (JR && ("object" === yR(JR) || "function" === typeof JR)) return JR;
          if (void 0 !== JR) throw new TypeError("Derived constructors may only return object or undefined");
          return nR(RR)
        }(this, GR)
      }
    }

    function nR(RR) {
      if (void 0 === RR) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return RR
    }

    function UR(RR) {
      return UR = Object.setPrototypeOf ? Object.getPrototypeOf : function(RR) {
        return RR.__proto__ || Object.getPrototypeOf(RR)
      }, UR(RR)
    }

    function WR(RR, JR, GR) {
      return JR in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }
    var AR = {
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
      CR = function(RR) {
        ! function(RR, JR) {
          if ("function" !== typeof JR && null !== JR) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(RR, "prototype", {
            value: Object.create(JR && JR.prototype, {
              constructor: {
                value: RR,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), JR && aR(RR, JR)
        }(ZR, RR);
        var JR, GR, yR, uR = LR(ZR);

        function ZR(RR, JR) {
          var GR;
          return function(RR, JR) {
            if (!(RR instanceof JR)) throw new TypeError("Cannot call a class as a function")
          }(this, ZR), WR(nR(GR = uR.call(this, RR, JR)), "handleFormat", (function(RR) {
            var JR = GR.props.format;
            return JR ? JR(RR) : RR
          })), WR(nR(GR), "handleUpdate", (function() {
            if (GR.slider) {
              var RR = GR.props.orientation,
                JR = (0, iR.capitalize)(AR.orientation[RR].dimension),
                yR = GR.slider["offset".concat(JR)],
                tR = GR.handle["offset".concat(JR)];
              GR.setState({
                limit: yR - tR,
                grab: tR / 2
              })
            }
          })), WR(nR(GR), "handleStart", (function(RR) {
            var JR = GR.props.onChangeStart;
            document.addEventListener("mousemove", GR.handleDrag), document.addEventListener("mouseup", GR.handleEnd), GR.setState({
              active: !0
            }, (function() {
              JR && JR(RR)
            }))
          })), WR(nR(GR), "handleDrag", (function(RR) {
            RR.stopPropagation();
            var JR = GR.props.onChange,
              yR = RR.target,
              tR = yR.className,
              uR = yR.classList,
              ZR = yR.dataset;
            if (JR && "rangeslider__labels" !== tR) {
              var qR = GR.position(RR);
              uR && uR.contains("rangeslider__label-item") && ZR.value && (qR = parseFloat(ZR.value)), JR && JR(qR, RR)
            }
          })), WR(nR(GR), "handleEnd", (function(RR) {
            var JR = GR.props.onChangeComplete;
            GR.setState({
              active: !1
            }, (function() {
              JR && JR(RR)
            })), document.removeEventListener("mousemove", GR.handleDrag), document.removeEventListener("mouseup", GR.handleEnd)
          })), WR(nR(GR), "handleKeyDown", (function(RR) {
            RR.preventDefault();
            var JR, yR = RR.keyCode,
              tR = GR.props,
              uR = tR.value,
              ZR = tR.min,
              qR = tR.max,
              iR = tR.step,
              fR = tR.onChange;
            switch (yR) {
              case 38:
              case 39:
                JR = uR + iR > qR ? qR : uR + iR, fR && fR(JR, RR);
                break;
              case 37:
              case 40:
                JR = uR - iR < ZR ? ZR : uR - iR, fR && fR(JR, RR)
            }
          })), WR(nR(GR), "getPositionFromValue", (function(RR) {
            var JR = GR.state.limit,
              yR = GR.props,
              tR = yR.min,
              uR = (RR - tR) / (yR.max - tR);
            return Math.round(uR * JR)
          })), WR(nR(GR), "getValueFromPosition", (function(RR) {
            var JR = GR.state.limit,
              yR = GR.props,
              tR = yR.orientation,
              uR = yR.min,
              ZR = yR.max,
              qR = yR.step,
              fR = (0, iR.clamp)(RR, 0, JR) / (JR || 1),
              VR = qR * Math.round(fR * (ZR - uR) / qR),
              KR = "horizontal" === tR ? VR + uR : ZR - VR;
            return (0, iR.clamp)(KR, uR, ZR)
          })), WR(nR(GR), "position", (function(RR) {
            var JR = GR.state.grab,
              yR = GR.props,
              tR = yR.orientation,
              uR = yR.reverse,
              ZR = GR.slider,
              qR = AR.orientation[tR].coordinate,
              fR = uR ? AR.orientation[tR].reverseDirection : AR.orientation[tR].direction,
              VR = "client".concat((0, iR.capitalize)(qR)),
              KR = RR.touches ? RR.touches[0][VR] : RR[VR],
              wR = ZR.getBoundingClientRect()[fR],
              rR = uR ? wR - KR - JR : KR - wR - JR;
            return GR.getValueFromPosition(rR)
          })), WR(nR(GR), "coordinates", (function(RR) {
            var JR = GR.state,
              yR = JR.limit,
              tR = JR.grab,
              uR = GR.props.orientation,
              ZR = GR.getValueFromPosition(RR),
              qR = GR.getPositionFromValue(ZR),
              iR = "horizontal" === uR ? qR + tR : qR;
            return {
              fill: "horizontal" === uR ? iR : yR - iR,
              handle: iR,
              label: iR
            }
          })), WR(nR(GR), "renderLabels", (function(RR) {
            return (0, fR.jsx)("ul", {
              ref: function(RR) {
                GR.labels = RR
              },
              className: (0, tR.default)("rangeslider__labels"),
              children: RR
            })
          })), GR.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, GR
        }
        return JR = ZR, (GR = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new qR.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var RR = this,
              JR = this.props,
              GR = JR.value,
              yR = JR.orientation,
              uR = JR.className,
              ZR = JR.tooltip,
              qR = JR.reverse,
              iR = JR.labels,
              VR = JR.min,
              KR = JR.max,
              rR = JR.handleLabel,
              eR = this.state.active,
              aR = AR.orientation[yR].dimension,
              LR = qR ? AR.orientation[yR].reverseDirection : AR.orientation[yR].direction,
              nR = this.getPositionFromValue(GR),
              UR = this.coordinates(nR),
              CR = WR({}, aR, "".concat(UR.fill, "px")),
              XR = WR({}, LR, "".concat(UR.handle, "px")),
              MR = ZR && eR,
              BR = [],
              lR = Object.keys(iR);
            if (lR.length > 0) {
              var pR, gR = wR(lR = lR.sort((function(RR, JR) {
                return qR ? RR - JR : JR - RR
              })));
              try {
                for (gR.s(); !(pR = gR.n()).done;) {
                  var bR = pR.value,
                    vR = this.getPositionFromValue(bR),
                    OR = this.coordinates(vR),
                    xR = WR({}, LR, "".concat(OR.label, "px"));
                  BR.push((0, fR.jsx)("li", {
                    className: (0, tR.default)("rangeslider__label-item"),
                    "data-value": bR,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: xR,
                    children: this.props.labels[bR]
                  }, bR))
                }
              } catch (NR) {
                gR.e(NR)
              } finally {
                gR.f()
              }
            }
            return (0, fR.jsxs)("div", {
              ref: function(JR) {
                RR.slider = JR
              },
              className: (0, tR.default)("rangeslider", "rangeslider-".concat(yR), {
                "rangeslider-reverse": qR
              }, uR),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": VR,
              "aria-valuemax": KR,
              "aria-valuenow": GR,
              "aria-orientation": yR,
              children: [(0, fR.jsx)("div", {
                className: "rangeslider__fill",
                style: CR
              }), (0, fR.jsxs)("div", {
                ref: function(JR) {
                  RR.handle = JR
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: XR,
                tabIndex: 0,
                children: [MR && (0, fR.jsx)("div", {
                  ref: function(JR) {
                    RR.tooltip = JR
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, fR.jsx)("span", {
                    children: this.handleFormat(GR)
                  })
                }), (0, fR.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: rR
                })]
              }), iR && this.renderLabels(BR)]
            })
          }
        }]) && eR(JR.prototype, GR), yR && eR(JR, yR), Object.defineProperty(JR, "prototype", {
          writable: !1
        }), ZR
      }(uR.Component);
    WR(CR, "propTypes", {
      min: ZR.default.number,
      max: ZR.default.number,
      step: ZR.default.number,
      value: ZR.default.number,
      orientation: ZR.default.string,
      tooltip: ZR.default.bool,
      reverse: ZR.default.bool,
      labels: ZR.default.object,
      handleLabel: ZR.default.string,
      format: ZR.default.func,
      onChangeStart: ZR.default.func,
      onChange: ZR.default.func,
      onChangeComplete: ZR.default.func
    }), WR(CR, "defaultProps", {
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
    var XR = CR;
    JR.default = XR
  },
  6041: (RR, JR, GR) => {
    var yR;
    JR.b = void 0;
    var tR = ((yR = GR(6044)) && yR.__esModule ? yR : {
      default: yR
    }).default;
    JR.b = tR
  },
  6055: (RR, JR) => {
    Object.defineProperty(JR, "__esModule", {
      value: !0
    }), JR.capitalize = function(RR) {
      return RR.charAt(0).toUpperCase() + RR.substr(1)
    }, JR.clamp = function(RR, JR, GR) {
      return Math.min(Math.max(RR, JR), GR)
    }
  },
  6015: (RR, JR, GR) => {
    var yR = GR(6021);

    function tR() {}

    function uR() {}
    uR.resetWarningCache = tR, RR.exports = function() {
      function RR(RR, JR, GR, tR, uR, ZR) {
        if (ZR !== yR) {
          var qR = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw qR.name = "Invariant Violation", qR
        }
      }

      function JR() {
        return RR
      }
      RR.isRequired = RR;
      var GR = {
        array: RR,
        bigint: RR,
        bool: RR,
        func: RR,
        number: RR,
        object: RR,
        string: RR,
        symbol: RR,
        any: RR,
        arrayOf: JR,
        element: RR,
        elementType: RR,
        instanceOf: JR,
        node: RR,
        objectOf: JR,
        oneOf: JR,
        oneOfType: JR,
        shape: JR,
        exact: JR,
        checkPropTypes: uR,
        resetWarningCache: tR
      };
      return GR.PropTypes = GR, GR
    }
  },
  6008: (RR, JR, GR) => {
    RR.exports = GR(6015)()
  },
  6021: RR => {
    RR.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6047: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => BR
    });
    var yR = function() {
        if ("undefined" !== typeof Map) return Map;

        function RR(RR, JR) {
          var GR = -1;
          return RR.some((function(RR, yR) {
            return RR[0] === JR && (GR = yR, !0)
          })), GR
        }
        return function() {
          function JR() {
            this.__entries__ = []
          }
          return Object.defineProperty(JR.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), JR.prototype.get = function(JR) {
            var GR = RR(this.__entries__, JR),
              yR = this.__entries__[GR];
            return yR && yR[1]
          }, JR.prototype.set = function(JR, GR) {
            var yR = RR(this.__entries__, JR);
            ~yR ? this.__entries__[yR][1] = GR : this.__entries__.push([JR, GR])
          }, JR.prototype.delete = function(JR) {
            var GR = this.__entries__,
              yR = RR(GR, JR);
            ~yR && GR.splice(yR, 1)
          }, JR.prototype.has = function(JR) {
            return !!~RR(this.__entries__, JR)
          }, JR.prototype.clear = function() {
            this.__entries__.splice(0)
          }, JR.prototype.forEach = function(RR, JR) {
            void 0 === JR && (JR = null);
            for (var GR = 0, yR = this.__entries__; GR < yR.length; GR++) {
              var tR = yR[GR];
              RR.call(JR, tR[1], tR[0])
            }
          }, JR
        }()
      }(),
      tR = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      uR = "undefined" !== typeof GR.g && GR.g.Math === Math ? GR.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      ZR = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(uR) : function(RR) {
        return setTimeout((function() {
          return RR(Date.now())
        }), 1e3 / 60)
      };
    var qR = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      iR = "undefined" !== typeof MutationObserver,
      fR = function() {
        function RR() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(RR, JR) {
            var GR = !1,
              yR = !1,
              tR = 0;

            function uR() {
              GR && (GR = !1, RR()), yR && iR()
            }

            function qR() {
              ZR(uR)
            }

            function iR() {
              var RR = Date.now();
              if (GR) {
                if (RR - tR < 2) return;
                yR = !0
              } else GR = !0, yR = !1, setTimeout(qR, JR);
              tR = RR
            }
            return iR
          }(this.refresh.bind(this), 20)
        }
        return RR.prototype.addObserver = function(RR) {
          ~this.observers_.indexOf(RR) || this.observers_.push(RR), this.connected_ || this.connect_()
        }, RR.prototype.removeObserver = function(RR) {
          var JR = this.observers_,
            GR = JR.indexOf(RR);
          ~GR && JR.splice(GR, 1), !JR.length && this.connected_ && this.disconnect_()
        }, RR.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, RR.prototype.updateObservers_ = function() {
          var RR = this.observers_.filter((function(RR) {
            return RR.gatherActive(), RR.hasActive()
          }));
          return RR.forEach((function(RR) {
            return RR.broadcastActive()
          })), RR.length > 0
        }, RR.prototype.connect_ = function() {
          tR && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), iR ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, RR.prototype.disconnect_ = function() {
          tR && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, RR.prototype.onTransitionEnd_ = function(RR) {
          var JR = RR.propertyName,
            GR = void 0 === JR ? "" : JR;
          qR.some((function(RR) {
            return !!~GR.indexOf(RR)
          })) && this.refresh()
        }, RR.getInstance = function() {
          return this.instance_ || (this.instance_ = new RR), this.instance_
        }, RR.instance_ = null, RR
      }(),
      VR = function(RR, JR) {
        for (var GR = 0, yR = Object.keys(JR); GR < yR.length; GR++) {
          var tR = yR[GR];
          Object.defineProperty(RR, tR, {
            value: JR[tR],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return RR
      },
      KR = function(RR) {
        return RR && RR.ownerDocument && RR.ownerDocument.defaultView || uR
      },
      wR = UR(0, 0, 0, 0);

    function rR(RR) {
      return parseFloat(RR) || 0
    }

    function eR(RR) {
      for (var JR = [], GR = 1; GR < arguments.length; GR++) JR[GR - 1] = arguments[GR];
      return JR.reduce((function(JR, GR) {
        return JR + rR(RR["border-" + GR + "-width"])
      }), 0)
    }

    function aR(RR) {
      var JR = RR.clientWidth,
        GR = RR.clientHeight;
      if (!JR && !GR) return wR;
      var yR = KR(RR).getComputedStyle(RR),
        tR = function(RR) {
          for (var JR = {}, GR = 0, yR = ["top", "right", "bottom", "left"]; GR < yR.length; GR++) {
            var tR = yR[GR],
              uR = RR["padding-" + tR];
            JR[tR] = rR(uR)
          }
          return JR
        }(yR),
        uR = tR.left + tR.right,
        ZR = tR.top + tR.bottom,
        qR = rR(yR.width),
        iR = rR(yR.height);
      if ("border-box" === yR.boxSizing && (Math.round(qR + uR) !== JR && (qR -= eR(yR, "left", "right") + uR), Math.round(iR + ZR) !== GR && (iR -= eR(yR, "top", "bottom") + ZR)), ! function(RR) {
          return RR === KR(RR).document.documentElement
        }(RR)) {
        var fR = Math.round(qR + uR) - JR,
          VR = Math.round(iR + ZR) - GR;
        1 !== Math.abs(fR) && (qR -= fR), 1 !== Math.abs(VR) && (iR -= VR)
      }
      return UR(tR.left, tR.top, qR, iR)
    }
    var LR = "undefined" !== typeof SVGGraphicsElement ? function(RR) {
      return RR instanceof KR(RR).SVGGraphicsElement
    } : function(RR) {
      return RR instanceof KR(RR).SVGElement && "function" === typeof RR.getBBox
    };

    function nR(RR) {
      return tR ? LR(RR) ? function(RR) {
        var JR = RR.getBBox();
        return UR(0, 0, JR.width, JR.height)
      }(RR) : aR(RR) : wR
    }

    function UR(RR, JR, GR, yR) {
      return {
        x: RR,
        y: JR,
        width: GR,
        height: yR
      }
    }
    var WR = function() {
        function RR(RR) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = UR(0, 0, 0, 0), this.target = RR
        }
        return RR.prototype.isActive = function() {
          var RR = nR(this.target);
          return this.contentRect_ = RR, RR.width !== this.broadcastWidth || RR.height !== this.broadcastHeight
        }, RR.prototype.broadcastRect = function() {
          var RR = this.contentRect_;
          return this.broadcastWidth = RR.width, this.broadcastHeight = RR.height, RR
        }, RR
      }(),
      AR = function(RR, JR) {
        var GR = function(RR) {
          var JR = RR.x,
            GR = RR.y,
            yR = RR.width,
            tR = RR.height,
            uR = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            ZR = Object.create(uR.prototype);
          return VR(ZR, {
            x: JR,
            y: GR,
            width: yR,
            height: tR,
            top: GR,
            right: JR + yR,
            bottom: tR + GR,
            left: JR
          }), ZR
        }(JR);
        VR(this, {
          target: RR,
          contentRect: GR
        })
      },
      CR = function() {
        function RR(RR, JR, GR) {
          if (this.activeObservations_ = [], this.observations_ = new yR, "function" !== typeof RR) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = RR, this.controller_ = JR, this.callbackCtx_ = GR
        }
        return RR.prototype.observe = function(RR) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(RR instanceof KR(RR).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var JR = this.observations_;
            JR.has(RR) || (JR.set(RR, new WR(RR)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, RR.prototype.unobserve = function(RR) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(RR instanceof KR(RR).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var JR = this.observations_;
            JR.has(RR) && (JR.delete(RR), JR.size || this.controller_.removeObserver(this))
          }
        }, RR.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, RR.prototype.gatherActive = function() {
          var RR = this;
          this.clearActive(), this.observations_.forEach((function(JR) {
            JR.isActive() && RR.activeObservations_.push(JR)
          }))
        }, RR.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var RR = this.callbackCtx_,
              JR = this.activeObservations_.map((function(RR) {
                return new AR(RR.target, RR.broadcastRect())
              }));
            this.callback_.call(RR, JR, RR), this.clearActive()
          }
        }, RR.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, RR.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, RR
      }(),
      XR = "undefined" !== typeof WeakMap ? new WeakMap : new yR,
      MR = function RR(JR) {
        if (!(this instanceof RR)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var GR = fR.getInstance(),
          yR = new CR(JR, GR, this);
        XR.set(this, yR)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(RR) {
      MR.prototype[RR] = function() {
        var JR;
        return (JR = XR.get(this))[RR].apply(JR, arguments)
      }
    }));
    const BR = "undefined" !== typeof uR.ResizeObserver ? uR.ResizeObserver : MR
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);