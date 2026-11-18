export const id = 100;
export const ids = [100];
export const modules = {
  4423: (BB, TB, dB) => {
    function VB(BB) {
      return VB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, VB(BB)
    }
    Object.defineProperty(TB, "__esModule", {
      value: !0
    }), TB.default = void 0;
    var yB = kB(dB(933)),
      pB = function(BB, TB) {
        if (!TB && BB && BB.__esModule) return BB;
        if (null === BB || "object" !== VB(BB) && "function" !== typeof BB) return {
          default: BB
        };
        var dB = oB(TB);
        if (dB && dB.has(BB)) return dB.get(BB);
        var yB = {},
          pB = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var lB in BB)
          if ("default" !== lB && Object.prototype.hasOwnProperty.call(BB, lB)) {
            var JB = pB ? Object.getOwnPropertyDescriptor(BB, lB) : null;
            JB && (JB.get || JB.set) ? Object.defineProperty(yB, lB, JB) : yB[lB] = BB[lB]
          } yB.default = BB, dB && dB.set(BB, yB);
        return yB
      }(dB(62)),
      lB = kB(dB(4376)),
      JB = kB(dB(4427)),
      YB = dB(4431),
      gB = dB(980);

    function oB(BB) {
      if ("function" !== typeof WeakMap) return null;
      var TB = new WeakMap,
        dB = new WeakMap;
      return (oB = function(BB) {
        return BB ? dB : TB
      })(BB)
    }

    function kB(BB) {
      return BB && BB.__esModule ? BB : {
        default: BB
      }
    }

    function LB(BB, TB) {
      var dB = "undefined" !== typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
      if (!dB) {
        if (Array.isArray(BB) || (dB = function(BB, TB) {
            if (!BB) return;
            if ("string" === typeof BB) return OB(BB, TB);
            var dB = Object.prototype.toString.call(BB).slice(8, -1);
            "Object" === dB && BB.constructor && (dB = BB.constructor.name);
            if ("Map" === dB || "Set" === dB) return Array.from(BB);
            if ("Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB)) return OB(BB, TB)
          }(BB)) || TB && BB && "number" === typeof BB.length) {
          dB && (BB = dB);
          var VB = 0,
            yB = function() {};
          return {
            s: yB,
            n: function() {
              return VB >= BB.length ? {
                done: !0
              } : {
                done: !1,
                value: BB[VB++]
              }
            },
            e: function(BB) {
              throw BB
            },
            f: yB
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var pB, lB = !0,
        JB = !1;
      return {
        s: function() {
          dB = dB.call(BB)
        },
        n: function() {
          var BB = dB.next();
          return lB = BB.done, BB
        },
        e: function(BB) {
          JB = !0, pB = BB
        },
        f: function() {
          try {
            lB || null == dB.return || dB.return()
          } finally {
            if (JB) throw pB
          }
        }
      }
    }

    function OB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function DB(BB, TB) {
      for (var dB = 0; dB < TB.length; dB++) {
        var VB = TB[dB];
        VB.enumerable = VB.enumerable || !1, VB.configurable = !0, "value" in VB && (VB.writable = !0), Object.defineProperty(BB, VB.key, VB)
      }
    }

    function uB(BB, TB) {
      return uB = Object.setPrototypeOf || function(BB, TB) {
        return BB.__proto__ = TB, BB
      }, uB(BB, TB)
    }

    function HB(BB) {
      var TB = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (BB) {
          return !1
        }
      }();
      return function() {
        var dB, yB = vB(BB);
        if (TB) {
          var pB = vB(this).constructor;
          dB = Reflect.construct(yB, arguments, pB)
        } else dB = yB.apply(this, arguments);
        return function(BB, TB) {
          if (TB && ("object" === VB(TB) || "function" === typeof TB)) return TB;
          if (void 0 !== TB) throw new TypeError("Derived constructors may only return object or undefined");
          return EB(BB)
        }(this, dB)
      }
    }

    function EB(BB) {
      if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return BB
    }

    function vB(BB) {
      return vB = Object.setPrototypeOf ? Object.getPrototypeOf : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, vB(BB)
    }

    function mB(BB, TB, dB) {
      return TB in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }
    var iB = {
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
      NB = function(BB) {
        ! function(BB, TB) {
          if ("function" !== typeof TB && null !== TB) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(BB, "prototype", {
            value: Object.create(TB && TB.prototype, {
              constructor: {
                value: BB,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), TB && uB(BB, TB)
        }(lB, BB);
        var TB, dB, VB, pB = HB(lB);

        function lB(BB, TB) {
          var dB;
          return function(BB, TB) {
            if (!(BB instanceof TB)) throw new TypeError("Cannot call a class as a function")
          }(this, lB), mB(EB(dB = pB.call(this, BB, TB)), "handleFormat", (function(BB) {
            var TB = dB.props.format;
            return TB ? TB(BB) : BB
          })), mB(EB(dB), "handleUpdate", (function() {
            if (dB.slider) {
              var BB = dB.props.orientation,
                TB = (0, YB.capitalize)(iB.orientation[BB].dimension),
                VB = dB.slider["offset".concat(TB)],
                yB = dB.handle["offset".concat(TB)];
              dB.setState({
                limit: VB - yB,
                grab: yB / 2
              })
            }
          })), mB(EB(dB), "handleStart", (function(BB) {
            var TB = dB.props.onChangeStart;
            document.addEventListener("mousemove", dB.handleDrag), document.addEventListener("mouseup", dB.handleEnd), dB.setState({
              active: !0
            }, (function() {
              TB && TB(BB)
            }))
          })), mB(EB(dB), "handleDrag", (function(BB) {
            BB.stopPropagation();
            var TB = dB.props.onChange,
              VB = BB.target,
              yB = VB.className,
              pB = VB.classList,
              lB = VB.dataset;
            if (TB && "rangeslider__labels" !== yB) {
              var JB = dB.position(BB);
              pB && pB.contains("rangeslider__label-item") && lB.value && (JB = parseFloat(lB.value)), TB && TB(JB, BB)
            }
          })), mB(EB(dB), "handleEnd", (function(BB) {
            var TB = dB.props.onChangeComplete;
            dB.setState({
              active: !1
            }, (function() {
              TB && TB(BB)
            })), document.removeEventListener("mousemove", dB.handleDrag), document.removeEventListener("mouseup", dB.handleEnd)
          })), mB(EB(dB), "handleKeyDown", (function(BB) {
            BB.preventDefault();
            var TB, VB = BB.keyCode,
              yB = dB.props,
              pB = yB.value,
              lB = yB.min,
              JB = yB.max,
              YB = yB.step,
              gB = yB.onChange;
            switch (VB) {
              case 38:
              case 39:
                TB = pB + YB > JB ? JB : pB + YB, gB && gB(TB, BB);
                break;
              case 37:
              case 40:
                TB = pB - YB < lB ? lB : pB - YB, gB && gB(TB, BB)
            }
          })), mB(EB(dB), "getPositionFromValue", (function(BB) {
            var TB = dB.state.limit,
              VB = dB.props,
              yB = VB.min,
              pB = (BB - yB) / (VB.max - yB);
            return Math.round(pB * TB)
          })), mB(EB(dB), "getValueFromPosition", (function(BB) {
            var TB = dB.state.limit,
              VB = dB.props,
              yB = VB.orientation,
              pB = VB.min,
              lB = VB.max,
              JB = VB.step,
              gB = (0, YB.clamp)(BB, 0, TB) / (TB || 1),
              oB = JB * Math.round(gB * (lB - pB) / JB),
              kB = "horizontal" === yB ? oB + pB : lB - oB;
            return (0, YB.clamp)(kB, pB, lB)
          })), mB(EB(dB), "position", (function(BB) {
            var TB = dB.state.grab,
              VB = dB.props,
              yB = VB.orientation,
              pB = VB.reverse,
              lB = dB.slider,
              JB = iB.orientation[yB].coordinate,
              gB = pB ? iB.orientation[yB].reverseDirection : iB.orientation[yB].direction,
              oB = "client".concat((0, YB.capitalize)(JB)),
              kB = BB.touches ? BB.touches[0][oB] : BB[oB],
              LB = lB.getBoundingClientRect()[gB],
              OB = pB ? LB - kB - TB : kB - LB - TB;
            return dB.getValueFromPosition(OB)
          })), mB(EB(dB), "coordinates", (function(BB) {
            var TB = dB.state,
              VB = TB.limit,
              yB = TB.grab,
              pB = dB.props.orientation,
              lB = dB.getValueFromPosition(BB),
              JB = dB.getPositionFromValue(lB),
              YB = "horizontal" === pB ? JB + yB : JB;
            return {
              fill: "horizontal" === pB ? YB : VB - YB,
              handle: YB,
              label: YB
            }
          })), mB(EB(dB), "renderLabels", (function(BB) {
            return (0, gB.jsx)("ul", {
              ref: function(BB) {
                dB.labels = BB
              },
              className: (0, yB.default)("rangeslider__labels"),
              children: BB
            })
          })), dB.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, dB
        }
        return TB = lB, (dB = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new JB.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var BB = this,
              TB = this.props,
              dB = TB.value,
              VB = TB.orientation,
              pB = TB.className,
              lB = TB.tooltip,
              JB = TB.reverse,
              YB = TB.labels,
              oB = TB.min,
              kB = TB.max,
              OB = TB.handleLabel,
              DB = this.state.active,
              uB = iB.orientation[VB].dimension,
              HB = JB ? iB.orientation[VB].reverseDirection : iB.orientation[VB].direction,
              EB = this.getPositionFromValue(dB),
              vB = this.coordinates(EB),
              NB = mB({}, uB, "".concat(vB.fill, "px")),
              tB = mB({}, HB, "".concat(vB.handle, "px")),
              fB = lB && DB,
              sB = [],
              MB = Object.keys(YB);
            if (MB.length > 0) {
              var zB, wB = LB(MB = MB.sort((function(BB, TB) {
                return JB ? BB - TB : TB - BB
              })));
              try {
                for (wB.s(); !(zB = wB.n()).done;) {
                  var UB = zB.value,
                    FB = this.getPositionFromValue(UB),
                    KB = this.coordinates(FB),
                    rB = mB({}, HB, "".concat(KB.label, "px"));
                  sB.push((0, gB.jsx)("li", {
                    className: (0, yB.default)("rangeslider__label-item"),
                    "data-value": UB,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: rB,
                    children: this.props.labels[UB]
                  }, UB))
                }
              } catch (IB) {
                wB.e(IB)
              } finally {
                wB.f()
              }
            }
            return (0, gB.jsxs)("div", {
              ref: function(TB) {
                BB.slider = TB
              },
              className: (0, yB.default)("rangeslider", "rangeslider-".concat(VB), {
                "rangeslider-reverse": JB
              }, pB),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": oB,
              "aria-valuemax": kB,
              "aria-valuenow": dB,
              "aria-orientation": VB,
              children: [(0, gB.jsx)("div", {
                className: "rangeslider__fill",
                style: NB
              }), (0, gB.jsxs)("div", {
                ref: function(TB) {
                  BB.handle = TB
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: tB,
                tabIndex: 0,
                children: [fB && (0, gB.jsx)("div", {
                  ref: function(TB) {
                    BB.tooltip = TB
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, gB.jsx)("span", {
                    children: this.handleFormat(dB)
                  })
                }), (0, gB.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: OB
                })]
              }), YB && this.renderLabels(sB)]
            })
          }
        }]) && DB(TB.prototype, dB), VB && DB(TB, VB), Object.defineProperty(TB, "prototype", {
          writable: !1
        }), lB
      }(pB.Component);
    mB(NB, "propTypes", {
      min: lB.default.number,
      max: lB.default.number,
      step: lB.default.number,
      value: lB.default.number,
      orientation: lB.default.string,
      tooltip: lB.default.bool,
      reverse: lB.default.bool,
      labels: lB.default.object,
      handleLabel: lB.default.string,
      format: lB.default.func,
      onChangeStart: lB.default.func,
      onChange: lB.default.func,
      onChangeComplete: lB.default.func
    }), mB(NB, "defaultProps", {
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
    var tB = NB;
    TB.default = tB
  },
  4415: (BB, TB, dB) => {
    var VB;
    TB.b = void 0;
    var yB = ((VB = dB(4423)) && VB.__esModule ? VB : {
      default: VB
    }).default;
    TB.b = yB
  },
  4431: (BB, TB) => {
    Object.defineProperty(TB, "__esModule", {
      value: !0
    }), TB.capitalize = function(BB) {
      return BB.charAt(0).toUpperCase() + BB.substr(1)
    }, TB.clamp = function(BB, TB, dB) {
      return Math.min(Math.max(BB, TB), dB)
    }
  },
  4384: (BB, TB, dB) => {
    var VB = dB(4388);

    function yB() {}

    function pB() {}
    pB.resetWarningCache = yB, BB.exports = function() {
      function BB(BB, TB, dB, yB, pB, lB) {
        if (lB !== VB) {
          var JB = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw JB.name = "Invariant Violation", JB
        }
      }

      function TB() {
        return BB
      }
      BB.isRequired = BB;
      var dB = {
        array: BB,
        bigint: BB,
        bool: BB,
        func: BB,
        number: BB,
        object: BB,
        string: BB,
        symbol: BB,
        any: BB,
        arrayOf: TB,
        element: BB,
        elementType: BB,
        instanceOf: TB,
        node: BB,
        objectOf: TB,
        oneOf: TB,
        oneOfType: TB,
        shape: TB,
        exact: TB,
        checkPropTypes: pB,
        resetWarningCache: yB
      };
      return dB.PropTypes = dB, dB
    }
  },
  4376: (BB, TB, dB) => {
    BB.exports = dB(4384)()
  },
  4388: BB => {
    BB.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4427: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => sB
    });
    var VB = function() {
        if ("undefined" !== typeof Map) return Map;

        function BB(BB, TB) {
          var dB = -1;
          return BB.some((function(BB, VB) {
            return BB[0] === TB && (dB = VB, !0)
          })), dB
        }
        return function() {
          function TB() {
            this.__entries__ = []
          }
          return Object.defineProperty(TB.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), TB.prototype.get = function(TB) {
            var dB = BB(this.__entries__, TB),
              VB = this.__entries__[dB];
            return VB && VB[1]
          }, TB.prototype.set = function(TB, dB) {
            var VB = BB(this.__entries__, TB);
            ~VB ? this.__entries__[VB][1] = dB : this.__entries__.push([TB, dB])
          }, TB.prototype.delete = function(TB) {
            var dB = this.__entries__,
              VB = BB(dB, TB);
            ~VB && dB.splice(VB, 1)
          }, TB.prototype.has = function(TB) {
            return !!~BB(this.__entries__, TB)
          }, TB.prototype.clear = function() {
            this.__entries__.splice(0)
          }, TB.prototype.forEach = function(BB, TB) {
            void 0 === TB && (TB = null);
            for (var dB = 0, VB = this.__entries__; dB < VB.length; dB++) {
              var yB = VB[dB];
              BB.call(TB, yB[1], yB[0])
            }
          }, TB
        }()
      }(),
      yB = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      pB = "undefined" !== typeof dB.g && dB.g.Math === Math ? dB.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      lB = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(pB) : function(BB) {
        return setTimeout((function() {
          return BB(Date.now())
        }), 1e3 / 60)
      };
    var JB = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      YB = "undefined" !== typeof MutationObserver,
      gB = function() {
        function BB() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(BB, TB) {
            var dB = !1,
              VB = !1,
              yB = 0;

            function pB() {
              dB && (dB = !1, BB()), VB && YB()
            }

            function JB() {
              lB(pB)
            }

            function YB() {
              var BB = Date.now();
              if (dB) {
                if (BB - yB < 2) return;
                VB = !0
              } else dB = !0, VB = !1, setTimeout(JB, TB);
              yB = BB
            }
            return YB
          }(this.refresh.bind(this), 20)
        }
        return BB.prototype.addObserver = function(BB) {
          ~this.observers_.indexOf(BB) || this.observers_.push(BB), this.connected_ || this.connect_()
        }, BB.prototype.removeObserver = function(BB) {
          var TB = this.observers_,
            dB = TB.indexOf(BB);
          ~dB && TB.splice(dB, 1), !TB.length && this.connected_ && this.disconnect_()
        }, BB.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, BB.prototype.updateObservers_ = function() {
          var BB = this.observers_.filter((function(BB) {
            return BB.gatherActive(), BB.hasActive()
          }));
          return BB.forEach((function(BB) {
            return BB.broadcastActive()
          })), BB.length > 0
        }, BB.prototype.connect_ = function() {
          yB && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), YB ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, BB.prototype.disconnect_ = function() {
          yB && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, BB.prototype.onTransitionEnd_ = function(BB) {
          var TB = BB.propertyName,
            dB = void 0 === TB ? "" : TB;
          JB.some((function(BB) {
            return !!~dB.indexOf(BB)
          })) && this.refresh()
        }, BB.getInstance = function() {
          return this.instance_ || (this.instance_ = new BB), this.instance_
        }, BB.instance_ = null, BB
      }(),
      oB = function(BB, TB) {
        for (var dB = 0, VB = Object.keys(TB); dB < VB.length; dB++) {
          var yB = VB[dB];
          Object.defineProperty(BB, yB, {
            value: TB[yB],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return BB
      },
      kB = function(BB) {
        return BB && BB.ownerDocument && BB.ownerDocument.defaultView || pB
      },
      LB = vB(0, 0, 0, 0);

    function OB(BB) {
      return parseFloat(BB) || 0
    }

    function DB(BB) {
      for (var TB = [], dB = 1; dB < arguments.length; dB++) TB[dB - 1] = arguments[dB];
      return TB.reduce((function(TB, dB) {
        return TB + OB(BB["border-" + dB + "-width"])
      }), 0)
    }

    function uB(BB) {
      var TB = BB.clientWidth,
        dB = BB.clientHeight;
      if (!TB && !dB) return LB;
      var VB = kB(BB).getComputedStyle(BB),
        yB = function(BB) {
          for (var TB = {}, dB = 0, VB = ["top", "right", "bottom", "left"]; dB < VB.length; dB++) {
            var yB = VB[dB],
              pB = BB["padding-" + yB];
            TB[yB] = OB(pB)
          }
          return TB
        }(VB),
        pB = yB.left + yB.right,
        lB = yB.top + yB.bottom,
        JB = OB(VB.width),
        YB = OB(VB.height);
      if ("border-box" === VB.boxSizing && (Math.round(JB + pB) !== TB && (JB -= DB(VB, "left", "right") + pB), Math.round(YB + lB) !== dB && (YB -= DB(VB, "top", "bottom") + lB)), ! function(BB) {
          return BB === kB(BB).document.documentElement
        }(BB)) {
        var gB = Math.round(JB + pB) - TB,
          oB = Math.round(YB + lB) - dB;
        1 !== Math.abs(gB) && (JB -= gB), 1 !== Math.abs(oB) && (YB -= oB)
      }
      return vB(yB.left, yB.top, JB, YB)
    }
    var HB = "undefined" !== typeof SVGGraphicsElement ? function(BB) {
      return BB instanceof kB(BB).SVGGraphicsElement
    } : function(BB) {
      return BB instanceof kB(BB).SVGElement && "function" === typeof BB.getBBox
    };

    function EB(BB) {
      return yB ? HB(BB) ? function(BB) {
        var TB = BB.getBBox();
        return vB(0, 0, TB.width, TB.height)
      }(BB) : uB(BB) : LB
    }

    function vB(BB, TB, dB, VB) {
      return {
        x: BB,
        y: TB,
        width: dB,
        height: VB
      }
    }
    var mB = function() {
        function BB(BB) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = vB(0, 0, 0, 0), this.target = BB
        }
        return BB.prototype.isActive = function() {
          var BB = EB(this.target);
          return this.contentRect_ = BB, BB.width !== this.broadcastWidth || BB.height !== this.broadcastHeight
        }, BB.prototype.broadcastRect = function() {
          var BB = this.contentRect_;
          return this.broadcastWidth = BB.width, this.broadcastHeight = BB.height, BB
        }, BB
      }(),
      iB = function(BB, TB) {
        var dB = function(BB) {
          var TB = BB.x,
            dB = BB.y,
            VB = BB.width,
            yB = BB.height,
            pB = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            lB = Object.create(pB.prototype);
          return oB(lB, {
            x: TB,
            y: dB,
            width: VB,
            height: yB,
            top: dB,
            right: TB + VB,
            bottom: yB + dB,
            left: TB
          }), lB
        }(TB);
        oB(this, {
          target: BB,
          contentRect: dB
        })
      },
      NB = function() {
        function BB(BB, TB, dB) {
          if (this.activeObservations_ = [], this.observations_ = new VB, "function" !== typeof BB) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = BB, this.controller_ = TB, this.callbackCtx_ = dB
        }
        return BB.prototype.observe = function(BB) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(BB instanceof kB(BB).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var TB = this.observations_;
            TB.has(BB) || (TB.set(BB, new mB(BB)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, BB.prototype.unobserve = function(BB) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(BB instanceof kB(BB).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var TB = this.observations_;
            TB.has(BB) && (TB.delete(BB), TB.size || this.controller_.removeObserver(this))
          }
        }, BB.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, BB.prototype.gatherActive = function() {
          var BB = this;
          this.clearActive(), this.observations_.forEach((function(TB) {
            TB.isActive() && BB.activeObservations_.push(TB)
          }))
        }, BB.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var BB = this.callbackCtx_,
              TB = this.activeObservations_.map((function(BB) {
                return new iB(BB.target, BB.broadcastRect())
              }));
            this.callback_.call(BB, TB, BB), this.clearActive()
          }
        }, BB.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, BB.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, BB
      }(),
      tB = "undefined" !== typeof WeakMap ? new WeakMap : new VB,
      fB = function BB(TB) {
        if (!(this instanceof BB)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var dB = gB.getInstance(),
          VB = new NB(TB, dB, this);
        tB.set(this, VB)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(BB) {
      fB.prototype[BB] = function() {
        var TB;
        return (TB = tB.get(this))[BB].apply(TB, arguments)
      }
    }));
    const sB = "undefined" !== typeof pB.ResizeObserver ? pB.ResizeObserver : fB
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);