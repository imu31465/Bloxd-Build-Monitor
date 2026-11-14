export const id = 90;
export const ids = [90];
export const modules = {
  4006: (FF, WF, SF) => {
    function CF(FF) {
      return CF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(FF) {
        return typeof FF
      } : function(FF) {
        return FF && "function" == typeof Symbol && FF.constructor === Symbol && FF !== Symbol.prototype ? "symbol" : typeof FF
      }, CF(FF)
    }
    Object.defineProperty(WF, "__esModule", {
      value: !0
    }), WF.default = void 0;
    var AF = iW(SF(918)),
      uF = function(FF, WF) {
        if (!WF && FF && FF.__esModule) return FF;
        if (null === FF || "object" !== CF(FF) && "function" !== typeof FF) return {
          default: FF
        };
        var SF = RF(WF);
        if (SF && SF.has(FF)) return SF.get(FF);
        var AF = {},
          uF = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var hF in FF)
          if ("default" !== hF && Object.prototype.hasOwnProperty.call(FF, hF)) {
            var bW = uF ? Object.getOwnPropertyDescriptor(FF, hF) : null;
            bW && (bW.get || bW.set) ? Object.defineProperty(AF, hF, bW) : AF[hF] = FF[hF]
          } AF.default = FF, SF && SF.set(FF, AF);
        return AF
      }(SF(46)),
      hF = iW(SF(3961)),
      bW = iW(SF(4011)),
      dF = SF(4019),
      PF = SF(971);

    function RF(FF) {
      if ("function" !== typeof WeakMap) return null;
      var WF = new WeakMap,
        SF = new WeakMap;
      return (RF = function(FF) {
        return FF ? SF : WF
      })(FF)
    }

    function iW(FF) {
      return FF && FF.__esModule ? FF : {
        default: FF
      }
    }

    function eF(FF, WF) {
      var SF = "undefined" !== typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
      if (!SF) {
        if (Array.isArray(FF) || (SF = function(FF, WF) {
            if (!FF) return;
            if ("string" === typeof FF) return EF(FF, WF);
            var SF = Object.prototype.toString.call(FF).slice(8, -1);
            "Object" === SF && FF.constructor && (SF = FF.constructor.name);
            if ("Map" === SF || "Set" === SF) return Array.from(FF);
            if ("Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF)) return EF(FF, WF)
          }(FF)) || WF && FF && "number" === typeof FF.length) {
          SF && (FF = SF);
          var CF = 0,
            AF = function() {};
          return {
            s: AF,
            n: function() {
              return CF >= FF.length ? {
                done: !0
              } : {
                done: !1,
                value: FF[CF++]
              }
            },
            e: function(FF) {
              throw FF
            },
            f: AF
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var uF, hF = !0,
        bW = !1;
      return {
        s: function() {
          SF = SF.call(FF)
        },
        n: function() {
          var FF = SF.next();
          return hF = FF.done, FF
        },
        e: function(FF) {
          bW = !0, uF = FF
        },
        f: function() {
          try {
            hF || null == SF.return || SF.return()
          } finally {
            if (bW) throw uF
          }
        }
      }
    }

    function EF(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function QF(FF, WF) {
      for (var SF = 0; SF < WF.length; SF++) {
        var CF = WF[SF];
        CF.enumerable = CF.enumerable || !1, CF.configurable = !0, "value" in CF && (CF.writable = !0), Object.defineProperty(FF, CF.key, CF)
      }
    }

    function rW(FF, WF) {
      return rW = Object.setPrototypeOf || function(FF, WF) {
        return FF.__proto__ = WF, FF
      }, rW(FF, WF)
    }

    function gW(FF) {
      var WF = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (FF) {
          return !1
        }
      }();
      return function() {
        var SF, AF = TF(FF);
        if (WF) {
          var uF = TF(this).constructor;
          SF = Reflect.construct(AF, arguments, uF)
        } else SF = AF.apply(this, arguments);
        return function(FF, WF) {
          if (WF && ("object" === CF(WF) || "function" === typeof WF)) return WF;
          if (void 0 !== WF) throw new TypeError("Derived constructors may only return object or undefined");
          return tW(FF)
        }(this, SF)
      }
    }

    function tW(FF) {
      if (void 0 === FF) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return FF
    }

    function TF(FF) {
      return TF = Object.setPrototypeOf ? Object.getPrototypeOf : function(FF) {
        return FF.__proto__ || Object.getPrototypeOf(FF)
      }, TF(FF)
    }

    function aW(FF, WF, SF) {
      return WF in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }
    var kW = {
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
      qW = function(FF) {
        ! function(FF, WF) {
          if ("function" !== typeof WF && null !== WF) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(FF, "prototype", {
            value: Object.create(WF && WF.prototype, {
              constructor: {
                value: FF,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), WF && rW(FF, WF)
        }(hF, FF);
        var WF, SF, CF, uF = gW(hF);

        function hF(FF, WF) {
          var SF;
          return function(FF, WF) {
            if (!(FF instanceof WF)) throw new TypeError("Cannot call a class as a function")
          }(this, hF), aW(tW(SF = uF.call(this, FF, WF)), "handleFormat", (function(FF) {
            var WF = SF.props.format;
            return WF ? WF(FF) : FF
          })), aW(tW(SF), "handleUpdate", (function() {
            if (SF.slider) {
              var FF = SF.props.orientation,
                WF = (0, dF.capitalize)(kW.orientation[FF].dimension),
                CF = SF.slider["offset".concat(WF)],
                AF = SF.handle["offset".concat(WF)];
              SF.setState({
                limit: CF - AF,
                grab: AF / 2
              })
            }
          })), aW(tW(SF), "handleStart", (function(FF) {
            var WF = SF.props.onChangeStart;
            document.addEventListener("mousemove", SF.handleDrag), document.addEventListener("mouseup", SF.handleEnd), SF.setState({
              active: !0
            }, (function() {
              WF && WF(FF)
            }))
          })), aW(tW(SF), "handleDrag", (function(FF) {
            FF.stopPropagation();
            var WF = SF.props.onChange,
              CF = FF.target,
              AF = CF.className,
              uF = CF.classList,
              hF = CF.dataset;
            if (WF && "rangeslider__labels" !== AF) {
              var bW = SF.position(FF);
              uF && uF.contains("rangeslider__label-item") && hF.value && (bW = parseFloat(hF.value)), WF && WF(bW, FF)
            }
          })), aW(tW(SF), "handleEnd", (function(FF) {
            var WF = SF.props.onChangeComplete;
            SF.setState({
              active: !1
            }, (function() {
              WF && WF(FF)
            })), document.removeEventListener("mousemove", SF.handleDrag), document.removeEventListener("mouseup", SF.handleEnd)
          })), aW(tW(SF), "handleKeyDown", (function(FF) {
            FF.preventDefault();
            var WF, CF = FF.keyCode,
              AF = SF.props,
              uF = AF.value,
              hF = AF.min,
              bW = AF.max,
              dF = AF.step,
              PF = AF.onChange;
            switch (CF) {
              case 38:
              case 39:
                WF = uF + dF > bW ? bW : uF + dF, PF && PF(WF, FF);
                break;
              case 37:
              case 40:
                WF = uF - dF < hF ? hF : uF - dF, PF && PF(WF, FF)
            }
          })), aW(tW(SF), "getPositionFromValue", (function(FF) {
            var WF = SF.state.limit,
              CF = SF.props,
              AF = CF.min,
              uF = (FF - AF) / (CF.max - AF);
            return Math.round(uF * WF)
          })), aW(tW(SF), "getValueFromPosition", (function(FF) {
            var WF = SF.state.limit,
              CF = SF.props,
              AF = CF.orientation,
              uF = CF.min,
              hF = CF.max,
              bW = CF.step,
              PF = (0, dF.clamp)(FF, 0, WF) / (WF || 1),
              RF = bW * Math.round(PF * (hF - uF) / bW),
              iW = "horizontal" === AF ? RF + uF : hF - RF;
            return (0, dF.clamp)(iW, uF, hF)
          })), aW(tW(SF), "position", (function(FF) {
            var WF = SF.state.grab,
              CF = SF.props,
              AF = CF.orientation,
              uF = CF.reverse,
              hF = SF.slider,
              bW = kW.orientation[AF].coordinate,
              PF = uF ? kW.orientation[AF].reverseDirection : kW.orientation[AF].direction,
              RF = "client".concat((0, dF.capitalize)(bW)),
              iW = FF.touches ? FF.touches[0][RF] : FF[RF],
              eF = hF.getBoundingClientRect()[PF],
              EF = uF ? eF - iW - WF : iW - eF - WF;
            return SF.getValueFromPosition(EF)
          })), aW(tW(SF), "coordinates", (function(FF) {
            var WF = SF.state,
              CF = WF.limit,
              AF = WF.grab,
              uF = SF.props.orientation,
              hF = SF.getValueFromPosition(FF),
              bW = SF.getPositionFromValue(hF),
              dF = "horizontal" === uF ? bW + AF : bW;
            return {
              fill: "horizontal" === uF ? dF : CF - dF,
              handle: dF,
              label: dF
            }
          })), aW(tW(SF), "renderLabels", (function(FF) {
            return (0, PF.jsx)("ul", {
              ref: function(FF) {
                SF.labels = FF
              },
              className: (0, AF.default)("rangeslider__labels"),
              children: FF
            })
          })), SF.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, SF
        }
        return WF = hF, (SF = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new bW.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var FF = this,
              WF = this.props,
              SF = WF.value,
              CF = WF.orientation,
              uF = WF.className,
              hF = WF.tooltip,
              bW = WF.reverse,
              dF = WF.labels,
              RF = WF.min,
              iW = WF.max,
              EF = WF.handleLabel,
              QF = this.state.active,
              rW = kW.orientation[CF].dimension,
              gW = bW ? kW.orientation[CF].reverseDirection : kW.orientation[CF].direction,
              tW = this.getPositionFromValue(SF),
              TF = this.coordinates(tW),
              qW = aW({}, rW, "".concat(TF.fill, "px")),
              VF = aW({}, gW, "".concat(TF.handle, "px")),
              NF = hF && QF,
              DF = [],
              LF = Object.keys(dF);
            if (LF.length > 0) {
              var mW, OF = eF(LF = LF.sort((function(FF, WF) {
                return bW ? FF - WF : WF - FF
              })));
              try {
                for (OF.s(); !(mW = OF.n()).done;) {
                  var xW = mW.value,
                    ZF = this.getPositionFromValue(xW),
                    oF = this.coordinates(ZF),
                    YF = aW({}, gW, "".concat(oF.label, "px"));
                  DF.push((0, PF.jsx)("li", {
                    className: (0, AF.default)("rangeslider__label-item"),
                    "data-value": xW,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: YF,
                    children: this.props.labels[xW]
                  }, xW))
                }
              } catch (MF) {
                OF.e(MF)
              } finally {
                OF.f()
              }
            }
            return (0, PF.jsxs)("div", {
              ref: function(WF) {
                FF.slider = WF
              },
              className: (0, AF.default)("rangeslider", "rangeslider-".concat(CF), {
                "rangeslider-reverse": bW
              }, uF),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": RF,
              "aria-valuemax": iW,
              "aria-valuenow": SF,
              "aria-orientation": CF,
              children: [(0, PF.jsx)("div", {
                className: "rangeslider__fill",
                style: qW
              }), (0, PF.jsxs)("div", {
                ref: function(WF) {
                  FF.handle = WF
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: VF,
                tabIndex: 0,
                children: [NF && (0, PF.jsx)("div", {
                  ref: function(WF) {
                    FF.tooltip = WF
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, PF.jsx)("span", {
                    children: this.handleFormat(SF)
                  })
                }), (0, PF.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: EF
                })]
              }), dF && this.renderLabels(DF)]
            })
          }
        }]) && QF(WF.prototype, SF), CF && QF(WF, CF), Object.defineProperty(WF, "prototype", {
          writable: !1
        }), hF
      }(uF.Component);
    aW(qW, "propTypes", {
      min: hF.default.number,
      max: hF.default.number,
      step: hF.default.number,
      value: hF.default.number,
      orientation: hF.default.string,
      tooltip: hF.default.bool,
      reverse: hF.default.bool,
      labels: hF.default.object,
      handleLabel: hF.default.string,
      format: hF.default.func,
      onChangeStart: hF.default.func,
      onChange: hF.default.func,
      onChangeComplete: hF.default.func
    }), aW(qW, "defaultProps", {
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
    var VF = qW;
    WF.default = VF
  },
  4003: (FF, WF, SF) => {
    var CF;
    WF.c = void 0;
    var AF = ((CF = SF(4006)) && CF.__esModule ? CF : {
      default: CF
    }).default;
    WF.c = AF
  },
  4019: (FF, WF) => {
    Object.defineProperty(WF, "__esModule", {
      value: !0
    }), WF.capitalize = function(FF) {
      return FF.charAt(0).toUpperCase() + FF.substr(1)
    }, WF.clamp = function(FF, WF, SF) {
      return Math.min(Math.max(FF, WF), SF)
    }
  },
  3969: (FF, WF, SF) => {
    var CF = SF(3976);

    function AF() {}

    function uF() {}
    uF.resetWarningCache = AF, FF.exports = function() {
      function FF(FF, WF, SF, AF, uF, hF) {
        if (hF !== CF) {
          var bW = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw bW.name = "Invariant Violation", bW
        }
      }

      function WF() {
        return FF
      }
      FF.isRequired = FF;
      var SF = {
        array: FF,
        bigint: FF,
        bool: FF,
        func: FF,
        number: FF,
        object: FF,
        string: FF,
        symbol: FF,
        any: FF,
        arrayOf: WF,
        element: FF,
        elementType: FF,
        instanceOf: WF,
        node: FF,
        objectOf: WF,
        oneOf: WF,
        oneOfType: WF,
        shape: WF,
        exact: WF,
        checkPropTypes: uF,
        resetWarningCache: AF
      };
      return SF.PropTypes = SF, SF
    }
  },
  3961: (FF, WF, SF) => {
    FF.exports = SF(3969)()
  },
  3976: FF => {
    FF.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4011: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => DF
    });
    var CF = function() {
        if ("undefined" !== typeof Map) return Map;

        function FF(FF, WF) {
          var SF = -1;
          return FF.some((function(FF, CF) {
            return FF[0] === WF && (SF = CF, !0)
          })), SF
        }
        return function() {
          function WF() {
            this.__entries__ = []
          }
          return Object.defineProperty(WF.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), WF.prototype.get = function(WF) {
            var SF = FF(this.__entries__, WF),
              CF = this.__entries__[SF];
            return CF && CF[1]
          }, WF.prototype.set = function(WF, SF) {
            var CF = FF(this.__entries__, WF);
            ~CF ? this.__entries__[CF][1] = SF : this.__entries__.push([WF, SF])
          }, WF.prototype.delete = function(WF) {
            var SF = this.__entries__,
              CF = FF(SF, WF);
            ~CF && SF.splice(CF, 1)
          }, WF.prototype.has = function(WF) {
            return !!~FF(this.__entries__, WF)
          }, WF.prototype.clear = function() {
            this.__entries__.splice(0)
          }, WF.prototype.forEach = function(FF, WF) {
            void 0 === WF && (WF = null);
            for (var SF = 0, CF = this.__entries__; SF < CF.length; SF++) {
              var AF = CF[SF];
              FF.call(WF, AF[1], AF[0])
            }
          }, WF
        }()
      }(),
      AF = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      uF = "undefined" !== typeof SF.g && SF.g.Math === Math ? SF.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      hF = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(uF) : function(FF) {
        return setTimeout((function() {
          return FF(Date.now())
        }), 1e3 / 60)
      };
    var bW = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      dF = "undefined" !== typeof MutationObserver,
      PF = function() {
        function FF() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(FF, WF) {
            var SF = !1,
              CF = !1,
              AF = 0;

            function uF() {
              SF && (SF = !1, FF()), CF && dF()
            }

            function bW() {
              hF(uF)
            }

            function dF() {
              var FF = Date.now();
              if (SF) {
                if (FF - AF < 2) return;
                CF = !0
              } else SF = !0, CF = !1, setTimeout(bW, WF);
              AF = FF
            }
            return dF
          }(this.refresh.bind(this), 20)
        }
        return FF.prototype.addObserver = function(FF) {
          ~this.observers_.indexOf(FF) || this.observers_.push(FF), this.connected_ || this.connect_()
        }, FF.prototype.removeObserver = function(FF) {
          var WF = this.observers_,
            SF = WF.indexOf(FF);
          ~SF && WF.splice(SF, 1), !WF.length && this.connected_ && this.disconnect_()
        }, FF.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, FF.prototype.updateObservers_ = function() {
          var FF = this.observers_.filter((function(FF) {
            return FF.gatherActive(), FF.hasActive()
          }));
          return FF.forEach((function(FF) {
            return FF.broadcastActive()
          })), FF.length > 0
        }, FF.prototype.connect_ = function() {
          AF && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), dF ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, FF.prototype.disconnect_ = function() {
          AF && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, FF.prototype.onTransitionEnd_ = function(FF) {
          var WF = FF.propertyName,
            SF = void 0 === WF ? "" : WF;
          bW.some((function(FF) {
            return !!~SF.indexOf(FF)
          })) && this.refresh()
        }, FF.getInstance = function() {
          return this.instance_ || (this.instance_ = new FF), this.instance_
        }, FF.instance_ = null, FF
      }(),
      RF = function(FF, WF) {
        for (var SF = 0, CF = Object.keys(WF); SF < CF.length; SF++) {
          var AF = CF[SF];
          Object.defineProperty(FF, AF, {
            value: WF[AF],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return FF
      },
      iW = function(FF) {
        return FF && FF.ownerDocument && FF.ownerDocument.defaultView || uF
      },
      eF = TF(0, 0, 0, 0);

    function EF(FF) {
      return parseFloat(FF) || 0
    }

    function QF(FF) {
      for (var WF = [], SF = 1; SF < arguments.length; SF++) WF[SF - 1] = arguments[SF];
      return WF.reduce((function(WF, SF) {
        return WF + EF(FF["border-" + SF + "-width"])
      }), 0)
    }

    function rW(FF) {
      var WF = FF.clientWidth,
        SF = FF.clientHeight;
      if (!WF && !SF) return eF;
      var CF = iW(FF).getComputedStyle(FF),
        AF = function(FF) {
          for (var WF = {}, SF = 0, CF = ["top", "right", "bottom", "left"]; SF < CF.length; SF++) {
            var AF = CF[SF],
              uF = FF["padding-" + AF];
            WF[AF] = EF(uF)
          }
          return WF
        }(CF),
        uF = AF.left + AF.right,
        hF = AF.top + AF.bottom,
        bW = EF(CF.width),
        dF = EF(CF.height);
      if ("border-box" === CF.boxSizing && (Math.round(bW + uF) !== WF && (bW -= QF(CF, "left", "right") + uF), Math.round(dF + hF) !== SF && (dF -= QF(CF, "top", "bottom") + hF)), ! function(FF) {
          return FF === iW(FF).document.documentElement
        }(FF)) {
        var PF = Math.round(bW + uF) - WF,
          RF = Math.round(dF + hF) - SF;
        1 !== Math.abs(PF) && (bW -= PF), 1 !== Math.abs(RF) && (dF -= RF)
      }
      return TF(AF.left, AF.top, bW, dF)
    }
    var gW = "undefined" !== typeof SVGGraphicsElement ? function(FF) {
      return FF instanceof iW(FF).SVGGraphicsElement
    } : function(FF) {
      return FF instanceof iW(FF).SVGElement && "function" === typeof FF.getBBox
    };

    function tW(FF) {
      return AF ? gW(FF) ? function(FF) {
        var WF = FF.getBBox();
        return TF(0, 0, WF.width, WF.height)
      }(FF) : rW(FF) : eF
    }

    function TF(FF, WF, SF, CF) {
      return {
        x: FF,
        y: WF,
        width: SF,
        height: CF
      }
    }
    var aW = function() {
        function FF(FF) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = TF(0, 0, 0, 0), this.target = FF
        }
        return FF.prototype.isActive = function() {
          var FF = tW(this.target);
          return this.contentRect_ = FF, FF.width !== this.broadcastWidth || FF.height !== this.broadcastHeight
        }, FF.prototype.broadcastRect = function() {
          var FF = this.contentRect_;
          return this.broadcastWidth = FF.width, this.broadcastHeight = FF.height, FF
        }, FF
      }(),
      kW = function(FF, WF) {
        var SF = function(FF) {
          var WF = FF.x,
            SF = FF.y,
            CF = FF.width,
            AF = FF.height,
            uF = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            hF = Object.create(uF.prototype);
          return RF(hF, {
            x: WF,
            y: SF,
            width: CF,
            height: AF,
            top: SF,
            right: WF + CF,
            bottom: AF + SF,
            left: WF
          }), hF
        }(WF);
        RF(this, {
          target: FF,
          contentRect: SF
        })
      },
      qW = function() {
        function FF(FF, WF, SF) {
          if (this.activeObservations_ = [], this.observations_ = new CF, "function" !== typeof FF) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = FF, this.controller_ = WF, this.callbackCtx_ = SF
        }
        return FF.prototype.observe = function(FF) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(FF instanceof iW(FF).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var WF = this.observations_;
            WF.has(FF) || (WF.set(FF, new aW(FF)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, FF.prototype.unobserve = function(FF) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(FF instanceof iW(FF).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var WF = this.observations_;
            WF.has(FF) && (WF.delete(FF), WF.size || this.controller_.removeObserver(this))
          }
        }, FF.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, FF.prototype.gatherActive = function() {
          var FF = this;
          this.clearActive(), this.observations_.forEach((function(WF) {
            WF.isActive() && FF.activeObservations_.push(WF)
          }))
        }, FF.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var FF = this.callbackCtx_,
              WF = this.activeObservations_.map((function(FF) {
                return new kW(FF.target, FF.broadcastRect())
              }));
            this.callback_.call(FF, WF, FF), this.clearActive()
          }
        }, FF.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, FF.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, FF
      }(),
      VF = "undefined" !== typeof WeakMap ? new WeakMap : new CF,
      NF = function FF(WF) {
        if (!(this instanceof FF)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var SF = PF.getInstance(),
          CF = new qW(WF, SF, this);
        VF.set(this, CF)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(FF) {
      NF.prototype[FF] = function() {
        var WF;
        return (WF = VF.get(this))[FF].apply(WF, arguments)
      }
    }));
    const DF = "undefined" !== typeof uF.ResizeObserver ? uF.ResizeObserver : NF
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);